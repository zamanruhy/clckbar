const F={};function Ae(e){F.context=e}function tn(){return{...F.context,id:`${F.context.id}${F.context.count++}-`,count:0}}const rn=(e,n)=>e===n,he={equals:rn};let He=Re;const ee=1,me=2,Ue={owned:null,cleanups:null,context:null,owner:null};var B=null;let te=null,D=null,I=null,Q=null,Ce=0;function sn(e,n){const t=D,r=B,i=e.length===0,s=i?Ue:{owned:null,cleanups:null,context:null,owner:n||r},o=i?e:()=>e(()=>ye(()=>be(s)));B=s,D=null;try{return pe(o,!0)}finally{D=t,B=r}}function tt(e,n){n=n?Object.assign({},he,n):he;const t={value:e,observers:null,observerSlots:null,comparator:n.equals||void 0},r=i=>(typeof i=="function"&&(i=i(t.value)),_e(t,i));return[ze.bind(t),r]}function ce(e,n,t){const r=Ne(e,n,!1,ee);ge(r)}function rt(e,n,t){He=un;const r=Ne(e,n,!1,ee);r.user=!0,Q?Q.push(r):ge(r)}function it(e,n,t){t=t?Object.assign({},he,t):he;const r=Ne(e,n,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=t.equals||void 0,ge(r),ze.bind(r)}function ye(e){const n=D;D=null;try{return e()}finally{D=n}}function st(e){return B===null||(B.cleanups===null?B.cleanups=[e]:B.cleanups.push(e)),e}function ze(){const e=te;if(this.sources&&(this.state||e))if(this.state===ee||e)ge(this);else{const n=I;I=null,pe(()=>xe(this),!1),I=n}if(D){const n=this.observers?this.observers.length:0;D.sources?(D.sources.push(this),D.sourceSlots.push(n)):(D.sources=[this],D.sourceSlots=[n]),this.observers?(this.observers.push(D),this.observerSlots.push(D.sources.length-1)):(this.observers=[D],this.observerSlots=[D.sources.length-1])}return this.value}function _e(e,n,t){let r=e.value;return(!e.comparator||!e.comparator(r,n))&&(e.value=n,e.observers&&e.observers.length&&pe(()=>{for(let i=0;i<e.observers.length;i+=1){const s=e.observers[i],o=te&&te.running;o&&te.disposed.has(s),(o&&!s.tState||!o&&!s.state)&&(s.pure?I.push(s):Q.push(s),s.observers&&qe(s)),o||(s.state=ee)}if(I.length>1e6)throw I=[],new Error},!1)),n}function ge(e){if(!e.fn)return;be(e);const n=B,t=D,r=Ce;D=B=e,on(e,e.value,r),D=t,B=n}function on(e,n,t){let r;try{r=e.fn(n)}catch(i){e.pure&&(e.state=ee,e.owned&&e.owned.forEach(be),e.owned=null),Ge(i)}(!e.updatedAt||e.updatedAt<=t)&&(e.updatedAt!=null&&"observers"in e?_e(e,r):e.value=r,e.updatedAt=t)}function Ne(e,n,t,r=ee,i){const s={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:n,owner:B,context:null,pure:t};return B===null||B!==Ue&&(B.owned?B.owned.push(s):B.owned=[s]),s}function Se(e){const n=te;if(e.state===0||n)return;if(e.state===me||n)return xe(e);if(e.suspense&&ye(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<Ce);)(e.state||n)&&t.push(e);for(let r=t.length-1;r>=0;r--)if(e=t[r],e.state===ee||n)ge(e);else if(e.state===me||n){const i=I;I=null,pe(()=>xe(e,t[0]),!1),I=i}}function pe(e,n){if(I)return e();let t=!1;n||(I=[]),Q?t=!0:Q=[],Ce++;try{const r=e();return an(t),r}catch(r){I||(Q=null),Ge(r)}}function an(e){if(I&&(Re(I),I=null),e)return;const n=Q;Q=null,n.length&&pe(()=>He(n),!1)}function Re(e){for(let n=0;n<e.length;n++)Se(e[n])}function un(e){let n,t=0;for(n=0;n<e.length;n++){const r=e[n];r.user?e[t++]=r:Se(r)}for(F.context&&Ae(),n=0;n<t;n++)Se(e[n])}function xe(e,n){const t=te;e.state=0;for(let r=0;r<e.sources.length;r+=1){const i=e.sources[r];i.sources&&(i.state===ee||t?i!==n&&Se(i):(i.state===me||t)&&xe(i,n))}}function qe(e){const n=te;for(let t=0;t<e.observers.length;t+=1){const r=e.observers[t];(!r.state||n)&&(r.state=me,r.pure?I.push(r):Q.push(r),r.observers&&qe(r))}}function be(e){let n;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),r=e.sourceSlots.pop(),i=t.observers;if(i&&i.length){const s=i.pop(),o=t.observerSlots.pop();r<i.length&&(s.sourceSlots[o]=r,i[r]=s,t.observerSlots[r]=o)}}if(e.owned){for(n=0;n<e.owned.length;n++)be(e.owned[n]);e.owned=null}if(e.cleanups){for(n=0;n<e.cleanups.length;n++)e.cleanups[n]();e.cleanups=null}e.state=0,e.context=null}function cn(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function Ge(e){throw e=cn(e),e}let ln=!1;function ot(e,n){if(ln&&F.context){const t=F.context;Ae(tn());const r=ye(()=>e(n||{}));return Ae(t),r}return ye(()=>e(n||{}))}const fn=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],dn=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...fn]),vn=new Set(["innerHTML","textContent","innerText","children"]),gn=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),Ie=Object.assign(Object.create(null),{class:"className",formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"}),pn=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),hn={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function mn(e,n,t){let r=t.length,i=n.length,s=r,o=0,a=0,f=n[i-1].nextSibling,l=null;for(;o<i||a<s;){if(n[o]===t[a]){o++,a++;continue}for(;n[i-1]===t[s-1];)i--,s--;if(i===o){const c=s<r?a?t[a-1].nextSibling:t[s-a]:f;for(;a<s;)e.insertBefore(t[a++],c)}else if(s===a)for(;o<i;)(!l||!l.has(n[o]))&&n[o].remove(),o++;else if(n[o]===t[s-1]&&t[a]===n[i-1]){const c=n[--i].nextSibling;e.insertBefore(t[a++],n[o++].nextSibling),e.insertBefore(t[--s],c),n[i]=t[s]}else{if(!l){l=new Map;let u=a;for(;u<s;)l.set(t[u],u++)}const c=l.get(n[o]);if(c!=null)if(a<c&&c<s){let u=o,d=1,p;for(;++u<i&&u<s&&!((p=l.get(n[u]))==null||p!==c+d);)d++;if(d>c-a){const g=n[o];for(;a<c;)e.insertBefore(t[a++],g)}else e.replaceChild(t[a++],n[o++])}else o++;else n[o++].remove()}}}const ke="_$DX_DELEGATE";function at(e,n,t,r={}){let i;return sn(s=>{i=s,n===document?e():An(n,e(),n.firstChild?null:void 0,t)},r.owner),()=>{i(),n.textContent=""}}function ut(e,n,t){const r=document.createElement("template");r.innerHTML=e;let i=r.content.firstChild;return t&&(i=i.firstChild),i}function yn(e,n=window.document){const t=n[ke]||(n[ke]=new Set);for(let r=0,i=e.length;r<i;r++){const s=e[r];t.has(s)||(t.add(s),n.addEventListener(s,Cn))}}function Ke(e,n,t){t==null?e.removeAttribute(n):e.setAttribute(n,t)}function Sn(e,n,t,r){r==null?e.removeAttributeNS(n,t):e.setAttributeNS(n,t,r)}function xn(e,n){n==null?e.removeAttribute("class"):e.className=n}function wn(e,n,t,r){if(r)Array.isArray(t)?(e[`$$${n}`]=t[0],e[`$$${n}Data`]=t[1]):e[`$$${n}`]=t;else if(Array.isArray(t)){const i=t[0];e.addEventListener(n,t[0]=s=>i.call(e,t[1],s))}else e.addEventListener(n,t)}function bn(e,n,t={}){const r=Object.keys(n||{}),i=Object.keys(t);let s,o;for(s=0,o=i.length;s<o;s++){const a=i[s];!a||a==="undefined"||n[a]||(Ve(e,a,!1),delete t[a])}for(s=0,o=r.length;s<o;s++){const a=r[s],f=!!n[a];!a||a==="undefined"||t[a]===f||!f||(Ve(e,a,!0),t[a]=f)}return t}function En(e,n,t){if(!n)return t?Ke(e,"style"):n;const r=e.style;if(typeof n=="string")return r.cssText=n;typeof t=="string"&&(r.cssText=t=void 0),t||(t={}),n||(n={});let i,s;for(s in t)n[s]==null&&r.removeProperty(s),delete t[s];for(s in n)i=n[s],i!==t[s]&&(r.setProperty(s,i),t[s]=i);return t}function ct(e,n={},t,r){const i={};return r||ce(()=>i.children=le(e,n.children,i.children)),ce(()=>n.ref&&n.ref(e)),ce(()=>Tn(e,n,t,!0,i,!0)),i}function An(e,n,t,r){if(t!==void 0&&!r&&(r=[]),typeof n!="function")return le(e,n,r,t);ce(i=>le(e,n(),i,t),r)}function Tn(e,n,t,r,i={},s=!1){n||(n={});for(const o in i)if(!(o in n)){if(o==="children")continue;i[o]=Fe(e,o,null,i[o],t,s)}for(const o in n){if(o==="children"){r||le(e,n.children);continue}const a=n[o];i[o]=Fe(e,o,a,i[o],t,s)}}function Ln(e){return e.toLowerCase().replace(/-([a-z])/g,(n,t)=>t.toUpperCase())}function Ve(e,n,t){const r=n.trim().split(/\s+/);for(let i=0,s=r.length;i<s;i++)e.classList.toggle(r[i],t)}function Fe(e,n,t,r,i,s){let o,a,f;if(n==="style")return En(e,t,r);if(n==="classList")return bn(e,t,r);if(t===r)return r;if(n==="ref")s||t(e);else if(n.slice(0,3)==="on:"){const l=n.slice(3);r&&e.removeEventListener(l,r),t&&e.addEventListener(l,t)}else if(n.slice(0,10)==="oncapture:"){const l=n.slice(10);r&&e.removeEventListener(l,r,!0),t&&e.addEventListener(l,t,!0)}else if(n.slice(0,2)==="on"){const l=n.slice(2).toLowerCase(),c=pn.has(l);if(!c&&r){const u=Array.isArray(r)?r[0]:r;e.removeEventListener(l,u)}(c||t)&&(wn(e,l,t,c),c&&yn([l]))}else if((f=vn.has(n))||!i&&(Ie[n]||(a=dn.has(n)))||(o=e.nodeName.includes("-")))n==="class"||n==="className"?xn(e,t):o&&!a&&!f?e[Ln(n)]=t:e[Ie[n]||n]=t;else{const l=i&&n.indexOf(":")>-1&&hn[n.split(":")[0]];l?Sn(e,l,n,t):Ke(e,gn[n]||n,t)}return t}function Cn(e){const n=`$$${e.type}`;let t=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==t&&Object.defineProperty(e,"target",{configurable:!0,value:t}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),F.registry&&!F.done&&(F.done=!0,document.querySelectorAll("[id^=pl-]").forEach(r=>{for(;r&&r.nodeType!==8&&r.nodeValue!=="pl-"+e;){let i=r.nextSibling;r.remove(),r=i}r&&r.remove()}));t;){const r=t[n];if(r&&!t.disabled){const i=t[`${n}Data`];if(i!==void 0?r.call(t,i,e):r.call(t,e),e.cancelBubble)return}t=t._$host||t.parentNode||t.host}}function le(e,n,t,r,i){for(F.context&&!t&&(t=[...e.childNodes]);typeof t=="function";)t=t();if(n===t)return t;const s=typeof n,o=r!==void 0;if(e=o&&t[0]&&t[0].parentNode||e,s==="string"||s==="number"){if(F.context)return t;if(s==="number"&&(n=n.toString()),o){let a=t[0];a&&a.nodeType===3?a.data=n:a=document.createTextNode(n),t=ue(e,t,r,a)}else t!==""&&typeof t=="string"?t=e.firstChild.data=n:t=e.textContent=n}else if(n==null||s==="boolean"){if(F.context)return t;t=ue(e,t,r)}else{if(s==="function")return ce(()=>{let a=n();for(;typeof a=="function";)a=a();t=le(e,a,t,r)}),()=>t;if(Array.isArray(n)){const a=[],f=t&&Array.isArray(t);if(Te(a,n,t,i))return ce(()=>t=le(e,a,t,r,!0)),()=>t;if(F.context){if(!a.length)return t;for(let l=0;l<a.length;l++)if(a[l].parentNode)return t=a}if(a.length===0){if(t=ue(e,t,r),o)return t}else f?t.length===0?$e(e,a,r):mn(e,t,a):(t&&ue(e),$e(e,a));t=a}else if(n instanceof Node){if(F.context&&n.parentNode)return t=o?[n]:n;if(Array.isArray(t)){if(o)return t=ue(e,t,r,n);ue(e,t,null,n)}else t==null||t===""||!e.firstChild?e.appendChild(n):e.replaceChild(n,e.firstChild);t=n}}return t}function Te(e,n,t,r){let i=!1;for(let s=0,o=n.length;s<o;s++){let a=n[s],f=t&&t[s];if(a instanceof Node)e.push(a);else if(!(a==null||a===!0||a===!1))if(Array.isArray(a))i=Te(e,a,f)||i;else if(typeof a=="function")if(r){for(;typeof a=="function";)a=a();i=Te(e,Array.isArray(a)?a:[a],Array.isArray(f)?f:[f])||i}else e.push(a),i=!0;else{const l=String(a);f&&f.nodeType===3&&f.data===l?e.push(f):e.push(document.createTextNode(l))}}return i}function $e(e,n,t=null){for(let r=0,i=n.length;r<i;r++)e.insertBefore(n[r],t)}function ue(e,n,t,r){if(t===void 0)return e.textContent="";const i=r||document.createTextNode("");if(n.length){let s=!1;for(let o=n.length-1;o>=0;o--){const a=n[o];if(i!==a){const f=a.parentNode===e;!s&&!o?f?e.replaceChild(i,a):e.insertBefore(i,t):f&&a.remove()}else s=!0}}else e.insertBefore(i,t);return[i]}function Nn(e,n,t,r,i){return r+(i-r)*((e-n)/(t-n))}function Me(e){return typeof e=="number"}function Le(e){return Object.prototype.toString.call(e)==="[object Object]"}function Mn(e){return Array.isArray(e)}function je(e){return Le(e)||Mn(e)}function M(e){return Math.abs(e)}function De(e){return e?e/M(e):0}function de(e,n){return M(e-n)}function Dn(e,n){if(e===0||n===0||M(e)<=M(n))return 0;var t=de(M(e),M(n));return M(t/e)}function On(e){var n=Math.pow(10,e);return function(t){return Math.round(t*n)/n}}function ve(e){return re(e).map(Number)}function Y(e){return e[Ee(e)]}function Ee(e){return Math.max(0,e.length-1)}function re(e){return Object.keys(e)}function We(e,n){return[e,n].reduce(function(t,r){return re(r).forEach(function(i){var s=t[i],o=r[i],a=Le(s)&&Le(o);t[i]=a?We(s,o):o}),t},{})}function Xe(e,n){var t=re(e),r=re(n);return t.length!==r.length?!1:t.every(function(i){var s=e[i],o=n[i];return typeof s=="function"?"".concat(s)==="".concat(o):!je(s)||!je(o)?s===o:Xe(s,o)})}function Pn(e,n){var t={start:r,center:i,end:s};function r(){return 0}function i(l){return s(l)/2}function s(l){return n-l}function o(){return n*Number(e)}function a(l){return Me(e)?o():t[e](l)}var f={measure:a};return f}function Bn(e){var n=0;function t(o,a){return function(){o===!!n&&a()}}function r(){n=window.requestAnimationFrame(e)}function i(){window.cancelAnimationFrame(n),n=0}var s={proceed:t(!0,r),start:t(!1,r),stop:t(!0,i)};return s}function In(e,n){var t=e==="y"?"y":"x",r=e==="y"?"x":"y",i=a(),s=f();function o(c){var u=c.width,d=c.height;return t==="x"?u:d}function a(){return t==="y"?"top":n==="rtl"?"right":"left"}function f(){return t==="y"?"bottom":n==="rtl"?"left":"right"}var l={scroll:t,cross:r,startEdge:i,endEdge:s,measureSize:o};return l}function fe(e,n){var t=M(e-n);function r(l){return l<e}function i(l){return l>n}function s(l){return r(l)||i(l)}function o(l){return s(l)?r(l)?e:n:l}function a(l){return t?l-t*Math.ceil((l-n)/t):l}var f={length:t,max:n,min:e,constrain:o,reachedAny:s,reachedMax:i,reachedMin:r,removeOffset:a};return f}function Je(e,n,t){var r=fe(0,e),i=r.min,s=r.constrain,o=e+1,a=f(n);function f(g){return t?M((o+g)%o):s(g)}function l(){return a}function c(g){return a=f(g),p}function u(g){return c(l()+g)}function d(){return Je(e,l(),t)}var p={add:u,clone:d,get:l,set:c,min:i,max:e};return p}function kn(e){var n=e==="rtl"?-1:1;function t(i){return i*n}var r={apply:t};return r}function we(){var e=[];function n(i,s,o,a){return a===void 0&&(a=!1),i.addEventListener(s,o,a),e.push(function(){return i.removeEventListener(s,o,a)}),r}function t(){return e=e.filter(function(i){return i()}),r}var r={add:n,removeAll:t};return r}function Z(e){var n=e;function t(){return n}function r(u){return n=l(u),c}function i(u){return n+=l(u),c}function s(u){return n-=l(u),c}function o(u){return n*=u,c}function a(u){return n/=u,c}function f(){return n!==0&&a(n),c}function l(u){return Me(u)?u:u.get()}var c={add:i,divide:a,get:t,multiply:o,normalize:f,set:r,subtract:s};return c}function Vn(e,n,t,r,i,s,o,a,f,l,c,u,d,p,g,b){var m=e.cross,h=["INPUT","SELECT","TEXTAREA"],y=Z(0),x=we(),w=we(),S=d.measure(20),E={mouse:300,touch:400},A={mouse:500,touch:600},C=g?5:16,O=1,j=0,K=0,z=!1,W=!1,$=!1,P=!1;function _(){var v=t;x.add(v,"touchmove",function(){}).add(v,"touchend",function(){}).add(v,"touchstart",se).add(v,"mousedown",se).add(v,"touchcancel",q).add(v,"contextmenu",q).add(v,"click",ae)}function ne(){var v=P?document:t;w.add(v,"touchmove",oe).add(v,"touchend",q).add(v,"mousemove",oe).add(v,"mouseup",q)}function R(){x.removeAll(),w.removeAll()}function k(v){var L=v.nodeName||"";return h.indexOf(L)>-1}function J(){var v=g?A:E,L=P?"mouse":"touch";return v[L]}function ie(v,L){var V=c.clone().add(De(v)*-1),U=V.get()===c.min||V.get()===c.max,N=l.byDistance(v,!g).distance;return g||M(v)<S?N:!p&&U?N*.4:b&&L?N*.5:l.byIndex(V.get(),0).distance}function se(v){if(P=v.type==="mousedown",!(P&&v.button!==0)){var L=de(r.get(),s.get())>=2,V=P||!L,U=!k(v.target),N=L||P&&U;z=!0,i.pointerDown(v),y.set(r),r.set(s),f.useBaseMass().useSpeed(80),ne(),j=i.readPoint(v),K=i.readPoint(v,m),u.emit("pointerDown"),V&&($=!1),N&&v.preventDefault()}}function oe(v){if(!W&&!P){if(!v.cancelable)return q(v);var L=i.readPoint(v),V=i.readPoint(v,m),U=de(L,j),N=de(V,K);if(W=U>N,!W&&!$)return q(v)}var X=i.pointerMove(v);!$&&X&&($=!0),o.start(),r.add(n.apply(X)),v.preventDefault()}function q(v){var L=l.byDistance(0,!1),V=L.index!==c.get(),U=i.pointerUp(v)*J(),N=ie(n.apply(U),V),X=Dn(U,N),Ye=de(r.get(),y.get())>=.5,Be=V&&X>.75,Ze=M(U)<S,en=Be?10:C,nn=Be?O+2.5*X:O;Ye&&!P&&($=!0),W=!1,z=!1,w.removeAll(),f.useSpeed(Ze?9:en).useMass(nn),a.distance(N,!g),P=!1,u.emit("pointerUp")}function ae(v){$&&v.preventDefault()}function G(){return!$}function H(){return z}var T={addActivationEvents:_,clickAllowed:G,pointerDown:H,removeAllEvents:R};return T}function Fn(e){var n=170,t,r;function i(u){return typeof TouchEvent<"u"&&u instanceof TouchEvent}function s(u){return u.timeStamp}function o(u,d){var p=d||e.scroll,g="client".concat(p==="x"?"X":"Y");return(i(u)?u.touches[0]:u)[g]}function a(u){return t=u,r=u,o(u)}function f(u){var d=o(u)-o(r),p=s(u)-s(t)>n;return r=u,p&&(t=u),d}function l(u){if(!t||!r)return 0;var d=o(r)-o(t),p=s(u)-s(t),g=s(u)-s(r)>n,b=d/p,m=p&&!g&&M(b)>.1;return m?b:0}var c={isTouchEvent:i,pointerDown:a,pointerMove:f,pointerUp:l,readPoint:o};return c}function $n(e){function n(r){return e*(r/100)}var t={measure:n};return t}function jn(e,n,t){var r=On(2),i=Z(0),s=Z(0),o=Z(0),a=0,f=n,l=t;function c(){i.add(s),e.add(i),s.multiply(0)}function u(w){w.divide(l),s.add(w)}function d(w){o.set(w).subtract(e);var S=Nn(o.get(),0,100,0,f);return a=De(o.get()),o.normalize().multiply(S).subtract(i),u(o),x}function p(w){var S=w.get()-e.get(),E=!r(S);return E&&e.set(w),E}function g(){return a}function b(){return h(n)}function m(){return y(t)}function h(w){return f=w,x}function y(w){return l=w,x}var x={direction:g,seek:d,settle:p,update:c,useBaseMass:m,useBaseSpeed:b,useMass:y,useSpeed:h};return x}function Hn(e,n,t,r,i){var s=i.measure(10),o=i.measure(50),a=.85,f=!1;function l(){return!(f||!e.reachedAny(t.get())||!e.reachedAny(n.get()))}function c(p){if(!!l()){var g=e.reachedMin(n.get())?"min":"max",b=M(e[g]-n.get()),m=t.get()-n.get(),h=Math.min(b/o,a);t.subtract(m*h),!p&&M(m)<s&&(t.set(e.constrain(t.get())),r.useSpeed(10).useMass(3))}}function u(p){f=!p}var d={constrain:c,toggleActive:u};return d}function Un(e,n,t,r){var i=fe(-n+e,t[0]),s=t.map(i.constrain),o=f();function a(){var c=s[0],u=Y(s),d=s.lastIndexOf(c),p=s.indexOf(u)+1;return fe(d,p)}function f(){if(n<=e)return[i.max];if(r==="keepSnaps")return s;var c=a(),u=c.min,d=c.max;return s.slice(u,d)}var l={snapsContained:o};return l}function zn(e,n,t){var r=i();function i(){var o=n[0],a=Y(n),f=t?o-e:a,l=o;return fe(f,l)}var s={limit:r};return s}function _n(e,n,t,r){var i=.1,s=n.min+i,o=n.max+i,a=fe(s,o),f=a.reachedMin,l=a.reachedMax;function c(p){return p===1?l(t.get()):p===-1?f(t.get()):!1}function u(p){if(!!c(p)){var g=e*(p*-1);r.forEach(function(b){return b.add(g)})}}var d={loop:u};return d}function Rn(e){var n=e.max,t=e.length;function r(s){var o=s-n;return o/-t}var i={get:r};return i}function qn(e,n,t,r,i,s,o){var a=e.startEdge,f=e.endEdge,l=s.groupSlides,c=p().map(n.measure),u=g(),d=b();function p(){return l(r).map(function(h){return Y(h)[f]-h[0][a]}).map(M)}function g(){return r.map(function(h){return t[a]-h[a]}).map(function(h){return-M(h)})}function b(){var h=0,y=Y(u)-Y(i);return l(u).map(function(x){return x[0]}).map(function(x,w,S){var E=!w,A=w===Ee(S);return o&&E?h:o&&A?y:x+c[w]})}var m={snaps:u,snapsAligned:d};return m}function Gn(e,n,t,r,i){var s=r.reachedAny,o=r.removeOffset,a=r.constrain;function f(g){return g.concat().sort(function(b,m){return M(b)-M(m)})[0]}function l(g){var b=e?o(g):a(g),m=n.map(function(y){return y-b}).map(function(y){return c(y,0)}).map(function(y,x){return{diff:y,index:x}}).sort(function(y,x){return M(y.diff)-M(x.diff)}),h=m[0].index;return{index:h,distance:b}}function c(g,b){var m=[g,g+t,g-t];if(!e)return m[0];if(!b)return f(m);var h=m.filter(function(y){return De(y)===b});return f(h)}function u(g,b){var m=n[g]-i.get(),h=c(m,b);return{index:g,distance:h}}function d(g,b){var m=i.get()+g,h=l(m),y=h.index,x=h.distance,w=!e&&s(m);if(!b||w)return{index:y,distance:g};var S=n[y]-x,E=g+c(S,0);return{index:y,distance:E}}var p={byDistance:d,byIndex:u,shortcut:c};return p}function Kn(e,n,t,r,i,s){function o(c){var u=c.distance,d=c.index!==n.get();u&&(e.start(),i.add(u)),d&&(t.set(n.get()),n.set(c.index),s.emit("select"))}function a(c,u){var d=r.byDistance(c,u);o(d)}function f(c,u){var d=n.clone().set(c),p=r.byIndex(d.get(),u);o(p)}var l={distance:a,index:f};return l}function Qe(e,n,t){var r=e.scroll==="x"?o:a,i=t.style,s=!1;function o(d){return"translate3d(".concat(d,"px,0px,0px)")}function a(d){return"translate3d(0px,".concat(d,"px,0px)")}function f(d){s||(i.transform=r(n.apply(d.get())))}function l(d){s=!d}function c(){s||(i.transform="",t.getAttribute("style")||t.removeAttribute("style"))}var u={clear:c,to:f,toggleActive:l};return u}function Wn(e,n,t,r,i,s,o,a,f){var l=ve(i),c=ve(i).reverse(),u=b().concat(m());function d(S,E){return S.reduce(function(A,C){return A-i[C]},E)}function p(S,E){return S.reduce(function(A,C){var O=d(A,E);return O>0?A.concat([C]):A},[])}function g(S,E){var A=E==="start",C=A?-r:r,O=o.findSlideBounds([C]);return S.map(function(j){var K=A?0:-r,z=A?r:0,W=O.filter(function(k){return k.index===j})[0],$=W[A?"end":"start"],P=Z(-1),_=Z(-1),ne=Qe(e,n,f[j]),R=function(){return P.set(a.get()>$?K:z)};return{index:j,location:_,translate:ne,target:R}})}function b(){var S=s[0]-1,E=p(c,S);return g(E,"end")}function m(){var S=t-s[0]-1,E=p(l,S);return g(E,"start")}function h(){return u.every(function(S){var E=S.index,A=l.filter(function(C){return C!==E});return d(A,t)<=.1})}function y(){u.forEach(function(S){var E=S.target,A=S.translate,C=S.location,O=E();O.get()!==C.get()&&(O.get()===0?A.clear():A.to(O),C.set(O))})}function x(){u.forEach(function(S){return S.translate.clear()})}var w={canLoop:h,clear:x,loop:y,loopPoints:u};return w}function Xn(e,n,t,r,i,s,o){var a=i.removeOffset,f=i.constrain,l=.5,c=s?[0,n,-n]:[0],u=p(c,o);function d(m){var h=m||0;return t.map(function(y){var x=fe(l,y-l);return x.constrain(y*h)})}function p(m,h){var y=m||c,x=d(h);return y.reduce(function(w,S){var E=r.map(function(A,C){return{start:A-t[C]+x[C]+S,end:A+e-x[C]+S,index:C}});return w.concat(E)},[])}function g(m,h){var y=s?a(m):f(m),x=h||u;return x.reduce(function(w,S){var E=S.index,A=S.start,C=S.end,O=w.indexOf(E)!==-1,j=A<y&&C>y;return!O&&j?w.concat([E]):w},[])}var b={check:g,findSlideBounds:p};return b}function Jn(e,n,t,r,i){var s=e.measureSize,o=e.startEdge,a=e.endEdge,f=d(),l=p(),c=t.map(s),u=g();function d(){if(!i)return 0;var m=t[0];return M(n[o]-m[o])}function p(){if(!i)return 0;var m=window.getComputedStyle(Y(r));return parseFloat(m.getPropertyValue("margin-".concat(a)))}function g(){return t.map(function(m,h,y){var x=!h,w=h===Ee(y);return x?c[h]+f:w?c[h]+l:y[h+1][o]-m[o]}).map(M)}var b={slideSizes:c,slideSizesWithGaps:u};return b}function Qn(e,n,t){var r=Me(t);function i(f,l){return ve(f).filter(function(c){return c%l===0}).map(function(c){return f.slice(c,c+l)})}function s(f){return ve(f).reduce(function(l,c){var u=n.slice(Y(l),c+1),d=u.reduce(function(p,g){return p+g},0);return!c||d>e?l.concat(c):l},[]).map(function(l,c,u){return f.slice(l,u[c+1])})}function o(f){return r?i(f,t):s(f)}var a={groupSlides:o};return a}function Yn(e,n,t,r,i){var s=r.align,o=r.axis,a=r.direction,f=r.startIndex,l=r.inViewThreshold,c=r.loop,u=r.speed,d=r.dragFree,p=r.slidesToScroll,g=r.skipSnaps,b=r.containScroll,m=n.getBoundingClientRect(),h=t.map(function(X){return X.getBoundingClientRect()}),y=kn(a),x=In(o,a),w=x.measureSize(m),S=$n(w),E=Pn(s,w),A=!c&&b!=="",C=c||b!=="",O=Jn(x,m,h,t,C),j=O.slideSizes,K=O.slideSizesWithGaps,z=Qn(w,K,p),W=qn(x,E,m,h,K,z,A),$=W.snaps,P=W.snapsAligned,_=-Y($)+Y(K),ne=Un(w,_,P,b).snapsContained,R=A?ne:P,k=zn(_,R,c).limit,J=Je(Ee(R),f,c),ie=J.clone(),se=ve(t),oe=function(){c||N.scrollBounds.constrain(N.dragHandler.pointerDown()),N.scrollBody.seek(H).update();var X=N.scrollBody.settle(H);X&&!N.dragHandler.pointerDown()&&(N.animation.stop(),i.emit("settle")),X||i.emit("scroll"),c&&(N.scrollLooper.loop(N.scrollBody.direction()),N.slideLooper.loop()),N.translate.to(G),N.animation.proceed()},q=Bn(oe),ae=R[J.get()],G=Z(ae),H=Z(ae),T=jn(G,u,1),v=Gn(c,R,_,k,H),L=Kn(q,J,ie,v,H,i),V=Xn(w,_,j,$,k,c,l),U=Vn(x,y,e,H,Fn(x),G,q,L,T,v,J,i,S,c,d,g),N={containerRect:m,slideRects:h,animation:q,axis:x,direction:y,dragHandler:U,eventStore:we(),percentOfView:S,index:J,indexPrevious:ie,limit:k,location:G,options:r,scrollBody:T,scrollBounds:Hn(k,G,H,T,S),scrollLooper:_n(_,k,G,[G,H]),scrollProgress:Rn(k),scrollSnaps:R,scrollTarget:v,scrollTo:L,slideLooper:Wn(x,y,w,_,K,R,V,G,t),slidesToScroll:z,slidesInView:V,slideIndexes:se,target:H,translate:Qe(x,y,n)};return N}function Zn(){var e={};function n(o){return e[o]||[]}function t(o){return n(o).forEach(function(a){return a(o)}),s}function r(o,a){return e[o]=n(o).concat([a]),s}function i(o,a){return e[o]=n(o).filter(function(f){return f!==a}),s}var s={emit:t,off:i,on:r};return s}var et={align:"center",axis:"x",containScroll:"",direction:"ltr",slidesToScroll:1,breakpoints:{},dragFree:!1,draggable:!0,inViewThreshold:0,loop:!1,skipSnaps:!1,speed:10,startIndex:0,active:!0};function Oe(){function e(i,s){return We(i,s||{})}function n(i,s){var o=JSON.stringify(re(i.breakpoints||{})),a=JSON.stringify(re(s.breakpoints||{}));return o!==a?!1:Xe(i,s)}function t(i){var s=i.breakpoints||{},o=re(s).filter(function(a){return window.matchMedia(a).matches}).map(function(a){return s[a]}).reduce(function(a,f){return e(a,f)},{});return e(i,o)}var r={merge:e,areEqual:n,atMedia:t};return r}function nt(){var e=Oe(),n=e.atMedia,t=e.areEqual,r=[],i=[];function s(){return i.some(function(c){return c()})}function o(c){var u=n(c.options);return function(){return!t(u,n(c.options))}}function a(c,u){return i=c.map(o),r=c.filter(function(d){return n(d.options).active}),r.forEach(function(d){return d.init(u)}),c.reduce(function(d,p){var g;return Object.assign(d,(g={},g[p.name]=p,g))},{})}function f(){r=r.filter(function(c){return c.destroy()})}var l={init:a,destroy:f,haveChanged:s};return l}function Pe(e,n,t){var r=we(),i=Oe(),s=nt(),o=Zn(),a=o.on,f=o.off,l=E,c=!1,u,d=i.merge(et,Pe.globalOptions),p=i.merge(d),g=[],b,m=0,h,y,x;function w(){var T="container"in e&&e.container,v="slides"in e&&e.slides;h="root"in e?e.root:e,y=T||h.children[0],x=v||[].slice.call(y.children)}function S(T,v){if(!c){if(w(),d=i.merge(d,T),p=i.atMedia(d),u=Yn(h,y,x,p,o),m=u.axis.measureSize(h.getBoundingClientRect()),!p.active)return A();if(u.translate.to(u.location),g=v||g,b=s.init(g,H),p.loop){if(!u.slideLooper.canLoop())return A(),S({loop:!1},v);u.slideLooper.loop()}p.draggable&&y.offsetParent&&x.length&&u.dragHandler.addActivationEvents()}}function E(T,v){var L=k();A(),S(i.merge({startIndex:L},T),v),o.emit("reInit")}function A(){u.dragHandler.removeAllEvents(),u.animation.stop(),u.eventStore.removeAll(),u.translate.clear(),u.slideLooper.clear(),s.destroy()}function C(){c||(c=!0,r.removeAll(),A(),o.emit("destroy"))}function O(){var T=i.atMedia(d),v=!i.areEqual(T,p),L=u.axis.measureSize(h.getBoundingClientRect()),V=m!==L,U=s.haveChanged();(V||v||U)&&E(),o.emit("resize")}function j(T){var v=u[T?"target":"location"].get(),L=p.loop?"removeOffset":"constrain";return u.slidesInView.check(u.limit[L](v))}function K(T){var v=j(T);return u.slideIndexes.filter(function(L){return v.indexOf(L)===-1})}function z(T,v,L){!p.active||c||(u.scrollBody.useBaseMass().useSpeed(v?100:p.speed),u.scrollTo.index(T,L||0))}function W(T){var v=u.index.clone().add(1);z(v.get(),T===!0,-1)}function $(T){var v=u.index.clone().add(-1);z(v.get(),T===!0,1)}function P(){var T=u.index.clone().add(1);return T.get()!==k()}function _(){var T=u.index.clone().add(-1);return T.get()!==k()}function ne(){return u.scrollSnaps.map(u.scrollProgress.get)}function R(){return u.scrollProgress.get(u.location.get())}function k(){return u.index.get()}function J(){return u.indexPrevious.get()}function ie(){return u.dragHandler.clickAllowed()}function se(){return b}function oe(){return u}function q(){return h}function ae(){return y}function G(){return x}var H={canScrollNext:P,canScrollPrev:_,clickAllowed:ie,containerNode:ae,internalEngine:oe,destroy:C,off:f,on:a,plugins:se,previousScrollSnap:J,reInit:l,rootNode:q,scrollNext:W,scrollPrev:$,scrollProgress:R,scrollSnapList:ne,scrollTo:z,selectedScrollSnap:k,slideNodes:G,slidesInView:j,slidesNotInView:K};return S(n,t),r.add(window,"resize",O),setTimeout(function(){return o.emit("init")},0),H}Pe.globalOptions=void 0;Pe.optionsHandler=Oe;export{Pe as E,rt as a,it as b,tt as c,ot as d,st as o,at as r,ct as s,ut as t};
