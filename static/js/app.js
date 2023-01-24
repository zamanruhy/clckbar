import{c as f,a as g,m as C,s as I,b as E,o as A,d as y,P as D,S as R,M as $,e as B,f as O,r as T,E as F}from"./vendor.js";const[S,P]=f(!1);function j(){const e=document.querySelector(".hamburger");!e||(e.addEventListener("click",()=>P(!S())),g(()=>{e.classList.toggle("hamburger_active",S())}))}j();function N(){const e=document.querySelector(".nav");if(!e)return;[...e.querySelectorAll(".nav__item_has-menu")].forEach(t=>{const i=t.querySelector(".nav__link"),o=t.querySelector(".nav__menu"),[s,u]=f(!1);function m(r){!o.contains(r.target)&&!i.contains(r.target)&&u(!1)}g(()=>{s()?(t.classList.add("nav__item_open"),window.addEventListener("click",m)):(t.classList.remove("nav__item_open"),window.removeEventListener("click",m))}),i.addEventListener("click",r=>{r.preventDefault(),u(!s())})})}N();const v=new Set;function W(){return{registerModal:z,unregisterModal:H,trapFocus:G}}function z(e){v.has(e)||(v.add(e),v.size===1&&V())}function H(e){!v.has(e)||(v.delete(e),v.size===0&&K())}function V(){document.documentElement.style.setProperty("--scrollbar-visible-width",`${window.innerWidth-document.documentElement.clientWidth}px`),Object.assign(document.body.style,{paddingRight:"var(--scrollbar-visible-width)",overflow:"hidden"})}function K(){document.documentElement.style.removeProperty("--scrollbar-visible-width"),Object.assign(document.body.style,{paddingRight:"",overflow:""})}function Q(e){const n=["a[href]","area[href]",'input:not([type="hidden"]):not([type="radio"]):not([disabled])','input[type="radio"]:not([disabled]):checked',"select:not([disabled])","textarea:not([disabled])","button:not([disabled])","iframe","audio[controls]","video[controls]","[contenteditable]","[tabindex]"].map(t=>`${t}:not([tabindex^="-"])`).join(", ");return Array.from(e.querySelectorAll(n)).filter(t=>t.offsetWidth||t.offsetHeight||t.getClientRects().length)}function G(e){if(e.key!=="Tab")return;const n=Q(e.currentTarget);if(n.length===0){e.preventDefault();return}const t=n[0],i=n[n.length-1],o=document.activeElement;e.shiftKey?(o===t||o===e.currentTarget)&&(i.focus(),e.preventDefault()):o===i&&(t.focus(),e.preventDefault())}function J(e){e=C({open:!1,closeOnBackdrop:!0,closeOnEscape:!0},e);const[,n]=I(e,["class","open","onRequestClose","closeOnBackdrop","closeOnEscape","children","onOpen","onOpened","onClose","onClosed"]),[t,i]=f(!1),o=E(()=>e.open&&t()),{registerModal:s,unregisterModal:u,trapFocus:m}=W();let r,l=null;const b={};function _(){var c;(c=e.onOpen)==null||c.call(e),l=l||document.activeElement,s(b)}function x(){var c;(c=e.onOpened)==null||c.call(e),L()}function M(){var c;(c=e.onClose)==null||c.call(e)}function w(){var c,a;(c=e.onClosed)==null||c.call(e),(a=l.focus)==null||a.call(l),l=null,u(b)}function p(){o()?_():M()}function d(){o()?x():w()}function h(c){var a;e.closeOnEscape&&c.key==="Escape"&&((a=e.onRequestClose)==null||a.call(e))}function L(){r.contains(document.activeElement)||r.focus()}return A(()=>{i(!0),O(()=>u(b))}),y(B,{get mount(){return document.body},get children(){return y(D,{exitBeforeEnter:!0,get children(){return y(R,{get when(){return o()},get children(){return y($.div,C({initial:{x:"100%"},animate:{x:0,transition:{duration:.2,easing:"cubic-bezier(0, 0, 0.2, 1)"}},exit:{x:"100%",transition:{duration:.15,easing:"cubic-bezier(0.4, 0, 1, 1)"}},onMotionStart:p,onMotionComplete:d,class:"drawer",get classList(){return{[e.class]:Boolean(e.class)}},role:"dialog","aria-modal":"true"},n,{tabindex:"-1",ref(c){const a=r;typeof a=="function"?a(c):r=c},onKeydown:c=>{h(c),m(c)},get children(){return e.children}}))}})}})}})}const k=new Map;function U(e){const n=k.get(e);if(n)return n;const t=window.matchMedia(e);return k.set(e,t),t}function X(e){if(typeof window>"u")return()=>!1;const n=U(e),[t,i]=f(n.matches);return g(()=>{const o=()=>{i(n.matches)};n.addEventListener("change",o,!1),O(()=>{n.removeEventListener("change",o,!1)})}),t}function Y(){const e=document.querySelector(".header");if(!e)return;const n=e.querySelector(".header__nav"),t=document.createComment(".nav"),i=X("not all and (min-width: 992px)");n.classList.remove("max-lg:hidden"),g(()=>{i()?n.replaceWith(t):t.replaceWith(n)}),g(()=>{S()&&e.scrollIntoView()}),T(()=>E((()=>{const o=E(()=>!!i(),!0);return()=>o()&&y(J,{get open(){return S()},onRequestClose:()=>P(!1),children:n})})()),e)}Y();function Z(e,n){function t(i,o){document.readyState==="complete"?i():(window.onload=i,window.onerror=o)}return typeof e=="function"?t(e,n):new Promise(t)}function ee(e,n,t){function i(o,s){e.complete?o():(e.onload=o,e.onerror=s)}return typeof n=="function"?i(n,t):new Promise(i)}const q=[["\u041F\u043E\u043B\u0443\u0447\u0430\u0439","\u0431\u043E\u043B\u044C\u0448\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432"],["\u041D\u0430\u0447\u043D\u0438","\u0441\u0432\u043E\u0451 \u0434\u0435\u043B\u043E"],["\u041F\u0440\u0438\u0432\u043B\u0435\u043A\u0430\u0439","\u043D\u043E\u0432\u044B\u0445 \u043F\u043E\u0434\u043F\u0438\u0441\u0447\u0438\u043A\u043E\u0432"],["\u0411\u044E\u0434\u0436\u0435\u0442\u043D\u043E","\u0442\u0435\u0441\u0442\u0438\u0440\u0443\u0439 \u0438\u0434\u0435\u0438"]];function te(){const e=document.querySelector(".intro");if(!e)return;let n=0,t=q[n].join("").length,i=-1,o;const s=[...e.querySelectorAll(".intro__phrase")],u=e.querySelector(".intro__title-lines"),[m,r]=f(!1),[l,b]=f(!0),[_,x]=f(!0),M=E(()=>m()&&l()&&_());function w(){t+=i;let d=i>0?60:30;const h=q[n],L=h.join("");s[0].textContent=h[0].slice(0,t),s[1].textContent=h[1].slice(0,Math.max(t-h[0].length,0)),t===L.length?(i=-1,d=1e3):t===0&&(n=(n+1)%q.length,i=1,d=300),o=setTimeout(requestAnimationFrame,d,w)}g(()=>{M()?w():clearTimeout(o)}),Z(()=>setTimeout(r,2e3,!0)),new IntersectionObserver(([d])=>{b(d.isIntersecting)}).observe(u),document.addEventListener("visibilitychange",()=>{x(document.visibilityState==="visible")});const p=e.querySelector(".intro__phone-img");ee(p).then(()=>{e.querySelector(".intro__phone-content").classList.remove("invisible")})}te();function ne(){const e=document.querySelector(".clients");if(!e)return;const n=e.querySelector(".clients__viewport"),t=e.querySelector(".clients__prev"),i=e.querySelector(".clients__next"),o=F(n,{loop:!1,containScroll:"trimSnaps",align:"center",slidesToScroll:1,speed:15,breakpoints:{"(min-width: 768px)":{startIndex:1,containScroll:""}}});function s(){t.disabled=!o.canScrollPrev(),i.disabled=!o.canScrollNext()}o.on("select",s),o.on("init",s),o.on("reInit",s),t.addEventListener("click",()=>o.scrollPrev()),i.addEventListener("click",()=>o.scrollNext())}ne();
