import{c as u,a as v,d as A,m as B,s as R,b as g,o as T,e as p,f as L,i as D,g as W,P as F,t as x,h as k,j,r as H,E as V}from"./vendor.js";const[w,E]=u(!1);function z(){const e=document.querySelector(".hamburger");!e||(e.addEventListener("click",()=>E(!w())),v(()=>{e.classList.toggle("hamburger_active",w())}))}z();function Z(){const e=document.querySelector(".nav");if(!e)return;[...e.querySelectorAll(".nav__item_has-menu")].forEach(n=>{const i=n.querySelector(".nav__link"),o=n.querySelector(".nav__menu"),[s,l]=u(!1);function f(r){!o.contains(r.target)&&!i.contains(r.target)&&l(!1)}v(()=>{s()?(n.classList.add("nav__item_open"),window.addEventListener("click",f)):(n.classList.remove("nav__item_open"),window.removeEventListener("click",f))}),i.addEventListener("click",r=>{r.preventDefault(),l(!s())})})}Z();const m=new Set;let _=0;function K(){return{registerModal:Q,unregisterModal:U,trapFocus:X}}function Q(e){m.has(e)||(m.add(e),m.size===1&&Y())}function U(e){!m.has(e)||(m.delete(e),m.size===0&&G())}function Y(){document.documentElement.style.setProperty("--scrollbar-visible-width",`${window.innerWidth-document.documentElement.clientWidth}px`),_=window.scrollY,Object.assign(document.body.style,{paddingRight:`${window.innerWidth-document.documentElement.clientWidth}px`,overflow:"hidden",position:"fixed",width:"100%",top:`${_*-1}px`})}function G(){document.documentElement.style.removeProperty("--scrollbar-visible-width"),Object.assign(document.body.style,{paddingRight:"",overflow:"",position:"",width:"",top:""}),document.documentElement.style.scrollBehavior="auto",window.scrollTo(0,_),document.documentElement.style.scrollBehavior=""}function J(e){const t=["a[href]","area[href]",'input:not([type="hidden"]):not([type="radio"]):not([disabled])','input[type="radio"]:not([disabled]):checked',"select:not([disabled])","textarea:not([disabled])","button:not([disabled])","iframe","audio[controls]","video[controls]","[contenteditable]","[tabindex]"].map(n=>`${n}:not([tabindex^="-"])`).join(", ");return Array.from(e.querySelectorAll(t)).filter(n=>n.offsetWidth||n.offsetHeight||n.getClientRects().length)}function X(e){if(e.key!=="Tab")return;const t=J(e.currentTarget);if(t.length===0){e.preventDefault();return}const n=t[0],i=t[t.length-1],o=document.activeElement;e.shiftKey?(o===n||o===e.currentTarget)&&(i.focus(),e.preventDefault()):o===i&&(n.focus(),e.preventDefault())}const ee=x('<div class="drawer" role="dialog" aria-modal="true" tabindex="-1"></div>');function te(e){e=B({open:!1,closeOnBackdrop:!0,closeOnEscape:!0},e);const[,t]=R(e,["class","open","onRequestClose","closeOnBackdrop","closeOnEscape","children","onOpen","onOpened","onClose","onClosed"]),[n,i]=u(!1),o=g(()=>e.open&&n()),{registerModal:s,unregisterModal:l,trapFocus:f}=K();let r,a=null;const y={};function q(){var c;(c=e.onOpen)==null||c.call(e),a=a||document.activeElement,s(y)}function $(){var c;(c=e.onOpened)==null||c.call(e),N()}function M(){var c;(c=e.onClose)==null||c.call(e)}function O(){var c,d;(c=e.onClosed)==null||c.call(e),(d=a.focus)==null||d.call(a),a=null,l(y)}function C(c){c.propertyName==="transform"&&(o()?q():M())}function P(c){c.propertyName==="transform"&&(o()?$():O())}function I(c){var d;e.closeOnEscape&&c.key==="Escape"&&((d=e.onRequestClose)==null||d.call(e))}function N(){r.contains(document.activeElement)||r.focus()}return T(()=>{i(!0),k(()=>l(y))}),p(F,{get mount(){return document.body},get children(){const c=ee.cloneNode(!0);c.addEventListener("transitionend",P),c.addEventListener("transitionstart",C),c.$$keydown=h=>{I(h),f(h)};const d=r;return typeof d=="function"?d(c):r=c,L(c,t,!1,!0),D(c,()=>e.children),W(h=>j(c,{[e.class]:Boolean(e.class),drawer_open:o()},h)),c}})}A(["keydown"]);const S=new Map;function ne(e){const t=S.get(e);if(t)return t;const n=window.matchMedia(e);return S.set(e,n),n}function oe(e){if(typeof window>"u")return()=>!1;const t=ne(e),[n,i]=u(t.matches);return v(()=>{function o(){i(t.matches)}t.addEventListener("change",o,!1),k(()=>{t.removeEventListener("change",o,!1)})}),n}function ce(){const e=document.querySelector(".header");if(!e)return;const t=e.querySelector(".nav"),n=document.createComment(".nav"),i=oe("not all and (min-width: 992px)"),[o,s]=u(null);t.classList.remove("max-lg:hidden"),v(()=>{i()?(t.replaceWith(n),s(t)):(n.replaceWith(t),E(!1),s(null))}),v(()=>{w()&&e.scrollIntoView()}),H(()=>g((()=>{const l=g(()=>!!i(),!0);return()=>l()&&p(te,{get open(){return w()},onRequestClose:()=>E(!1),get children(){return o()}})})()),e)}ce();function ie(e,t){function n(i,o){document.readyState==="complete"?i():(window.onload=i,window.onerror=o)}return typeof e=="function"?n(e,t):new Promise(n)}function se(e,t,n){function i(o,s){e.complete?o():(e.onload=o,e.onerror=s)}return typeof t=="function"?i(t,n):new Promise(i)}const re=x('<svg viewBox="0 0 36 36"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 .13a17.87 17.87 0 1 0 0 35.74A17.87 17.87 0 0 0 18 .13Zm.97 10.02a1.38 1.38 0 0 0-1.94 0l-5.5 5.5a1.38 1.38 0 0 0 1.94 1.95l3.15-3.16v10.44a1.37 1.37 0 1 0 2.75 0V14.44l3.16 3.16a1.38 1.38 0 0 0 1.94-1.95l-5.5-5.5Z"></path></svg>'),le=(e={})=>(()=>{const t=re.cloneNode(!0);return L(t,e,!0,!0),t})();const b=p(le,{className:"intro__pointer","aria-hidden":"true"});b==null||b.outerHTML;function ae(){const e=document.querySelector(".intro");if(!e)return;[...e.querySelectorAll(".intro__phrase")];const t=e.querySelector(".intro__title-lines"),[n,i]=u(!1),[o,s]=u(!0),[l,f]=u(!0);g(()=>n()&&o()&&l()),ie(()=>setTimeout(i,2e3,!0)),new IntersectionObserver(([a])=>{s(a.isIntersecting)}).observe(t),document.addEventListener("visibilitychange",()=>{f(document.visibilityState==="visible")});const r=e.querySelector(".intro__phone-img");se(r).then(()=>{e.querySelector(".intro__phone-content").classList.remove("invisible")})}ae();function de(){const e=document.querySelector(".clients");if(!e)return;const t=e.querySelector(".clients__viewport"),n=e.querySelector(".clients__prev"),i=e.querySelector(".clients__next"),o=V(t,{loop:!1,containScroll:"trimSnaps",align:"center",slidesToScroll:1,speed:15,breakpoints:{"(min-width: 768px)":{startIndex:1,containScroll:""}}});function s(){n.disabled=!o.canScrollPrev(),i.disabled=!o.canScrollNext()}o.on("select",s),o.on("init",s),o.on("reInit",s),n.addEventListener("click",()=>o.scrollPrev()),i.addEventListener("click",()=>o.scrollNext())}de();
