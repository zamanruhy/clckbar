import{c as d,a as g,m as w,s as A,b as h,o as I,d as m,P as $,S as B,M as D,e as N,f as M,r as F,g as R,t as T,E as z}from"./vendor.js";const[b,_]=d(!1);function H(){const e=document.querySelector(".hamburger");!e||(e.addEventListener("click",()=>_(!b())),g(()=>{e.classList.toggle("hamburger_active",b())}))}H();function j(){const e=document.querySelector(".nav");if(!e)return;[...e.querySelectorAll(".nav__item_has-menu")].forEach(n=>{const c=n.querySelector(".nav__link"),o=n.querySelector(".nav__menu"),[r,u]=d(!1);function f(s){!o.contains(s.target)&&!c.contains(s.target)&&u(!1)}g(()=>{r()?(n.classList.add("nav__item_open"),window.addEventListener("click",f)):(n.classList.remove("nav__item_open"),window.removeEventListener("click",f))}),c.addEventListener("click",s=>{s.preventDefault(),u(!r())})})}j();const v=new Set;function V(){return{registerModal:W,unregisterModal:K,trapFocus:G}}function W(e){v.has(e)||(v.add(e),v.size===1&&Z())}function K(e){!v.has(e)||(v.delete(e),v.size===0&&Q())}function Z(){Object.assign(document.body.style,{overflow:"hidden"})}function Q(){Object.assign(document.body.style,{overflow:""})}function U(e){const t=["a[href]","area[href]",'input:not([type="hidden"]):not([type="radio"]):not([disabled])','input[type="radio"]:not([disabled]):checked',"select:not([disabled])","textarea:not([disabled])","button:not([disabled])","iframe","audio[controls]","video[controls]","[contenteditable]","[tabindex]"].map(n=>`${n}:not([tabindex^="-"])`).join(", ");return Array.from(e.querySelectorAll(t)).filter(n=>n.offsetWidth||n.offsetHeight||n.getClientRects().length)}function G(e){if(e.key!=="Tab")return;const t=U(e.currentTarget);if(t.length===0){e.preventDefault();return}const n=t[0],c=t[t.length-1],o=document.activeElement;e.shiftKey?(o===n||o===e.currentTarget)&&(c.focus(),e.preventDefault()):o===c&&(n.focus(),e.preventDefault())}function J(e){e=w({open:!1,closeOnBackdrop:!0,closeOnEscape:!0},e);const[,t]=A(e,["class","open","onRequestClose","closeOnBackdrop","closeOnEscape","children","onOpen","onOpened","onClose","onClosed"]),[n,c]=d(!1),o=h(()=>e.open&&n()),{registerModal:r,unregisterModal:u,trapFocus:f}=V();let s,a=null;const y={};function L(){var i;(i=e.onOpen)==null||i.call(e),a=a||document.activeElement,r(y)}function x(){var i;(i=e.onOpened)==null||i.call(e),P()}function p(){var i;(i=e.onClose)==null||i.call(e)}function q(){var i,l;(i=e.onClosed)==null||i.call(e),(l=a.focus)==null||l.call(a),a=null,u(y)}function C(){o()?L():p()}function k(){o()?x():q()}function O(i){var l;e.closeOnEscape&&i.key==="Escape"&&((l=e.onRequestClose)==null||l.call(e))}function P(){s.contains(document.activeElement)||s.focus()}return I(()=>{c(!0),M(()=>u(y))}),m(N,{get mount(){return document.body},get children(){return m($,{exitBeforeEnter:!0,get children(){return m(B,{get when(){return o()},get children(){return m(D.div,w({initial:{x:"100%"},animate:{x:0,transition:{duration:.2,easing:"cubic-bezier(0, 0, 0.2, 1)"}},exit:{x:"100%",transition:{duration:.15,easing:"cubic-bezier(0.4, 0, 1, 1)"}},onMotionStart:C,onMotionComplete:k,class:"drawer",get classList(){return{[e.class]:Boolean(e.class)}},role:"dialog","aria-modal":"true"},t,{tabindex:"-1",ref(i){const l=s;typeof l=="function"?l(i):s=i},onKeydown:i=>{O(i),f(i)},get children(){return e.children}}))}})}})}})}const E=new Map;function X(e){const t=E.get(e);if(t)return t;const n=window.matchMedia(e);return E.set(e,n),n}function Y(e){if(typeof window>"u")return()=>!1;const t=X(e),[n,c]=d(t.matches);return g(()=>{function o(){c(t.matches)}t.addEventListener("change",o,!1),M(()=>{t.removeEventListener("change",o,!1)})}),n}function ee(){const e=document.querySelector(".header");if(!e)return;const t=e.querySelector(".nav"),n=document.createComment(".nav"),c=Y("not all and (min-width: 992px)");t.classList.remove("max-lg:hidden"),g(()=>{c()?t.replaceWith(n):(n.replaceWith(t),_(!1))}),g(()=>{b()}),F(()=>h((()=>{const o=h(()=>!!c(),!0);return()=>o()&&m(J,{get open(){return b()},onRequestClose:()=>_(!1),children:t})})()),e)}ee();function te(e,t){function n(c,o){document.readyState==="complete"?c():(window.onload=c,window.onerror=o)}return typeof e=="function"?n(e,t):new Promise(n)}function ne(e,t,n){function c(o,r){e.complete?o():(e.onload=o,e.onerror=r)}return typeof t=="function"?c(t,n):new Promise(c)}const oe=T('<svg viewBox="0 0 36 36"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 .13a17.87 17.87 0 1 0 0 35.74A17.87 17.87 0 0 0 18 .13Zm.97 10.02a1.38 1.38 0 0 0-1.94 0l-5.5 5.5a1.38 1.38 0 0 0 1.94 1.95l3.15-3.16v10.44a1.37 1.37 0 1 0 2.75 0V14.44l3.16 3.16a1.38 1.38 0 0 0 1.94-1.95l-5.5-5.5Z"></path></svg>'),ce=(e={})=>(()=>{const t=oe.cloneNode(!0);return R(t,e,!0,!0),t})();const S=m(ce,{className:"intro__pointer","aria-hidden":"true"});S==null||S.outerHTML;function ie(){const e=document.querySelector(".intro");if(!e)return;[...e.querySelectorAll(".intro__phrase")];const t=e.querySelector(".intro__title-lines"),[n,c]=d(!1),[o,r]=d(!0),[u,f]=d(!0);h(()=>n()&&o()&&u()),te(()=>setTimeout(c,2e3,!0)),new IntersectionObserver(([a])=>{r(a.isIntersecting)}).observe(t),document.addEventListener("visibilitychange",()=>{f(document.visibilityState==="visible")});const s=e.querySelector(".intro__phone-img");ne(s).then(()=>{e.querySelector(".intro__phone-content").classList.remove("invisible")})}ie();function re(){const e=document.querySelector(".clients");if(!e)return;const t=e.querySelector(".clients__viewport"),n=e.querySelector(".clients__prev"),c=e.querySelector(".clients__next"),o=z(t,{loop:!1,containScroll:"trimSnaps",align:"center",slidesToScroll:1,speed:15,breakpoints:{"(min-width: 768px)":{startIndex:1,containScroll:""}}});function r(){n.disabled=!o.canScrollPrev(),c.disabled=!o.canScrollNext()}o.on("select",r),o.on("init",r),o.on("reInit",r),n.addEventListener("click",()=>o.scrollPrev()),c.addEventListener("click",()=>o.scrollNext())}re();
