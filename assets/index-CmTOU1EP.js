(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}})();const Ve=(e,t)=>e===t,he=Symbol("solid-proxy"),We=Symbol("solid-track"),ie={equals:Ve};let Be=Me;const N=1,re=2,Te={owned:null,cleanups:null,context:null,owner:null};var C=null;let de=null,Ke=null,b=null,P=null,O=null,ae=0;function ne(e,t){const n=b,r=C,s=e.length===0,l=t===void 0?r:t,a=s?Te:{owned:null,cleanups:null,context:l?l.context:null,owner:l},i=s?e:()=>e(()=>V(()=>ce(a)));C=a,b=null;try{return X(i,!0)}finally{b=n,C=r}}function me(e,t){t=t?Object.assign({},ie,t):ie;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=s=>(typeof s=="function"&&(s=s(n.value)),Oe(n,s));return[_e.bind(n),r]}function R(e,t,n){const r=we(e,t,!1,N);z(r)}function ze(e,t,n){Be=Je;const r=we(e,t,!1,N);r.user=!0,O?O.push(r):z(r)}function se(e,t,n){n=n?Object.assign({},ie,n):ie;const r=we(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,z(r),_e.bind(r)}function V(e){if(b===null)return e();const t=b;b=null;try{return e()}finally{b=t}}function Le(e){return C===null||(C.cleanups===null?C.cleanups=[e]:C.cleanups.push(e)),e}function _e(){if(this.sources&&this.state)if(this.state===N)z(this);else{const e=P;P=null,X(()=>oe(this),!1),P=e}if(b){const e=this.observers?this.observers.length:0;b.sources?(b.sources.push(this),b.sourceSlots.push(e)):(b.sources=[this],b.sourceSlots=[e]),this.observers?(this.observers.push(b),this.observerSlots.push(b.sources.length-1)):(this.observers=[b],this.observerSlots=[b.sources.length-1])}return this.value}function Oe(e,t,n){let r=e.value;return(!e.comparator||!e.comparator(r,t))&&(e.value=t,e.observers&&e.observers.length&&X(()=>{for(let s=0;s<e.observers.length;s+=1){const l=e.observers[s],a=de&&de.running;a&&de.disposed.has(l),(a?!l.tState:!l.state)&&(l.pure?P.push(l):O.push(l),l.observers&&Fe(l)),a||(l.state=N)}if(P.length>1e6)throw P=[],new Error},!1)),t}function z(e){if(!e.fn)return;ce(e);const t=ae;Xe(e,e.value,t)}function Xe(e,t,n){let r;const s=C,l=b;b=C=e;try{r=e.fn(t)}catch(a){return e.pure&&(e.state=N,e.owned&&e.owned.forEach(ce),e.owned=null),e.updatedAt=n+1,Ie(a)}finally{b=l,C=s}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Oe(e,r):e.value=r,e.updatedAt=n)}function we(e,t,n,r=N,s){const l={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:C,context:C?C.context:null,pure:n};return C===null||C!==Te&&(C.owned?C.owned.push(l):C.owned=[l]),l}function le(e){if(e.state===0)return;if(e.state===re)return oe(e);if(e.suspense&&V(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<ae);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===N)z(e);else if(e.state===re){const r=P;P=null,X(()=>oe(e,t[0]),!1),P=r}}function X(e,t){if(P)return e();let n=!1;t||(P=[]),O?n=!0:O=[],ae++;try{const r=e();return Ye(n),r}catch(r){n||(O=null),P=null,Ie(r)}}function Ye(e){if(P&&(Me(P),P=null),e)return;const t=O;O=null,t.length&&X(()=>Be(t),!1)}function Me(e){for(let t=0;t<e.length;t++)le(e[t])}function Je(e){let t,n=0;for(t=0;t<e.length;t++){const r=e[t];r.user?e[n++]=r:le(r)}for(t=0;t<n;t++)le(e[t])}function oe(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const r=e.sources[n];if(r.sources){const s=r.state;s===N?r!==t&&(!r.updatedAt||r.updatedAt<ae)&&le(r):s===re&&oe(r,t)}}}function Fe(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=re,n.pure?P.push(n):O.push(n),n.observers&&Fe(n))}}function ce(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),s=n.observers;if(s&&s.length){const l=s.pop(),a=n.observerSlots.pop();r<s.length&&(l.sourceSlots[a]=r,s[r]=l,n.observerSlots[r]=a)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)ce(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function Qe(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function Ie(e,t=C){throw Qe(e)}const Ze=Symbol("fallback");function ke(e){for(let t=0;t<e.length;t++)e[t]()}function et(e,t,n={}){let r=[],s=[],l=[],a=0,i=t.length>1?[]:null;return Le(()=>ke(l)),()=>{let h=e()||[],m=h.length,w,d;return h[We],V(()=>{let k,B,A,M,j,c,o,u,f;if(m===0)a!==0&&(ke(l),l=[],r=[],s=[],a=0,i&&(i=[])),n.fallback&&(r=[Ze],s[0]=ne(g=>(l[0]=g,n.fallback())),a=1);else if(a===0){for(s=new Array(m),d=0;d<m;d++)r[d]=h[d],s[d]=ne(x);a=m}else{for(A=new Array(m),M=new Array(m),i&&(j=new Array(m)),c=0,o=Math.min(a,m);c<o&&r[c]===h[c];c++);for(o=a-1,u=m-1;o>=c&&u>=c&&r[o]===h[u];o--,u--)A[u]=s[o],M[u]=l[o],i&&(j[u]=i[o]);for(k=new Map,B=new Array(u+1),d=u;d>=c;d--)f=h[d],w=k.get(f),B[d]=w===void 0?-1:w,k.set(f,d);for(w=c;w<=o;w++)f=r[w],d=k.get(f),d!==void 0&&d!==-1?(A[d]=s[w],M[d]=l[w],i&&(j[d]=i[w]),d=B[d],k.set(f,d)):l[w]();for(d=c;d<m;d++)d in A?(s[d]=A[d],l[d]=M[d],i&&(i[d]=j[d],i[d](d))):s[d]=ne(x);s=s.slice(0,a=m),r=h.slice(0)}return s});function x(k){if(l[d]=k,i){const[B,A]=me(d);return i[d]=A,t(h[d],B)}return t(h[d])}}}let tt=!1;function pe(e,t){return V(()=>e(t||{}))}function ee(){return!0}const Ae={get(e,t,n){return t===he?n:e.get(t)},has(e,t){return t===he?!0:e.has(t)},set:ee,deleteProperty:ee,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:ee,deleteProperty:ee}},ownKeys(e){return e.keys()}};function nt(e,...t){if(he in e){const s=new Set(t.length>1?t.flat():t[0]),l=t.map(a=>new Proxy({get(i){return a.includes(i)?e[i]:void 0},has(i){return a.includes(i)&&i in e},keys(){return a.filter(i=>i in e)}},Ae));return l.push(new Proxy({get(a){return s.has(a)?void 0:e[a]},has(a){return s.has(a)?!1:a in e},keys(){return Object.keys(e).filter(a=>!s.has(a))}},Ae)),l}const n={},r=t.map(()=>({}));for(const s of Object.getOwnPropertyNames(e)){const l=Object.getOwnPropertyDescriptor(e,s),a=!l.get&&!l.set&&l.enumerable&&l.writable&&l.configurable;let i=!1,h=0;for(const m of t)m.includes(s)&&(i=!0,a?r[h][s]=l.value:Object.defineProperty(r[h],s,l)),++h;i||(a?n[s]=l.value:Object.defineProperty(n,s,l))}return[...r,n]}function it(e){const t="fallback"in e&&{fallback:()=>e.fallback};return se(et(()=>e.each,e.children,t||void 0))}const rt=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],st=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...rt]),lt=new Set(["innerHTML","textContent","innerText","children"]),ot=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),at=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function ct(e,t){const n=at[e];return typeof n=="object"?n[t]?n.$:void 0:n}const ut=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),ft=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),gt={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function dt(e,t,n){let r=n.length,s=t.length,l=r,a=0,i=0,h=t[s-1].nextSibling,m=null;for(;a<s||i<l;){if(t[a]===n[i]){a++,i++;continue}for(;t[s-1]===n[l-1];)s--,l--;if(s===a){const w=l<r?i?n[i-1].nextSibling:n[l-i]:h;for(;i<l;)e.insertBefore(n[i++],w)}else if(l===i)for(;a<s;)(!m||!m.has(t[a]))&&t[a].remove(),a++;else if(t[a]===n[l-1]&&n[i]===t[s-1]){const w=t[--s].nextSibling;e.insertBefore(n[i++],t[a++].nextSibling),e.insertBefore(n[--l],w),t[s]=n[l]}else{if(!m){m=new Map;let d=i;for(;d<l;)m.set(n[d],d++)}const w=m.get(t[a]);if(w!=null)if(i<w&&w<l){let d=a,x=1,k;for(;++d<s&&d<l&&!((k=m.get(t[d]))==null||k!==w+x);)x++;if(x>w-i){const B=t[a];for(;i<w;)e.insertBefore(n[i++],B)}else e.replaceChild(n[i++],t[a++])}else a++;else t[a++].remove()}}}const Ee="_$DX_DELEGATE";function ht(e,t,n,r={}){let s;return ne(l=>{s=l,t===document?e():G(t,e(),t.firstChild?null:void 0,n)},r.owner),()=>{s(),t.textContent=""}}function T(e,t,n){let r;const s=()=>{const a=document.createElement("template");return a.innerHTML=e,a.content.firstChild},l=()=>(r||(r=s())).cloneNode(!0);return l.cloneNode=l,l}function Ne(e,t=window.document){const n=t[Ee]||(t[Ee]=new Set);for(let r=0,s=e.length;r<s;r++){const l=e[r];n.has(l)||(n.add(l),t.addEventListener(l,kt))}}function D(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function pt(e,t,n,r){r==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,r)}function yt(e,t){t==null?e.removeAttribute("class"):e.className=t}function mt(e,t,n,r){if(r)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const s=n[0];e.addEventListener(t,n[0]=l=>s.call(e,n[1],l))}else e.addEventListener(t,n)}function wt(e,t,n={}){const r=Object.keys(t||{}),s=Object.keys(n);let l,a;for(l=0,a=s.length;l<a;l++){const i=s[l];!i||i==="undefined"||t[i]||(Se(e,i,!1),delete n[i])}for(l=0,a=r.length;l<a;l++){const i=r[l],h=!!t[i];!i||i==="undefined"||n[i]===h||!h||(Se(e,i,!0),n[i]=h)}return n}function vt(e,t,n){if(!t)return n?D(e,"style"):t;const r=e.style;if(typeof t=="string")return r.cssText=t;typeof n=="string"&&(r.cssText=n=void 0),n||(n={}),t||(t={});let s,l;for(l in n)t[l]==null&&r.removeProperty(l),delete n[l];for(l in t)s=t[l],s!==n[l]&&(r.setProperty(l,s),n[l]=s);return n}function xt(e,t={},n,r){const s={};return R(()=>s.children=K(e,t.children,s.children)),R(()=>typeof t.ref=="function"&&je(t.ref,e)),R(()=>bt(e,t,n,!0,s,!0)),s}function je(e,t,n){return V(()=>e(t,n))}function G(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return K(e,t,r,n);R(s=>K(e,t(),s,n),r)}function bt(e,t,n,r,s={},l=!1){t||(t={});for(const a in s)if(!(a in t)){if(a==="children")continue;s[a]=$e(e,a,null,s[a],n,l)}for(const a in t){if(a==="children")continue;const i=t[a];s[a]=$e(e,a,i,s[a],n,l)}}function Ct(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function Se(e,t,n){const r=t.trim().split(/\s+/);for(let s=0,l=r.length;s<l;s++)e.classList.toggle(r[s],n)}function $e(e,t,n,r,s,l){let a,i,h,m,w;if(t==="style")return vt(e,n,r);if(t==="classList")return wt(e,n,r);if(n===r)return r;if(t==="ref")l||n(e);else if(t.slice(0,3)==="on:"){const d=t.slice(3);r&&e.removeEventListener(d,r),n&&e.addEventListener(d,n)}else if(t.slice(0,10)==="oncapture:"){const d=t.slice(10);r&&e.removeEventListener(d,r,!0),n&&e.addEventListener(d,n,!0)}else if(t.slice(0,2)==="on"){const d=t.slice(2).toLowerCase(),x=ut.has(d);if(!x&&r){const k=Array.isArray(r)?r[0]:r;e.removeEventListener(d,k)}(x||n)&&(mt(e,d,n,x),x&&Ne([d]))}else if(t.slice(0,5)==="attr:")D(e,t.slice(5),n);else if((w=t.slice(0,5)==="prop:")||(h=lt.has(t))||!s&&((m=ct(t,e.tagName))||(i=st.has(t)))||(a=e.nodeName.includes("-")))w&&(t=t.slice(5),i=!0),t==="class"||t==="className"?yt(e,n):a&&!i&&!h?e[Ct(t)]=n:e[m||t]=n;else{const d=s&&t.indexOf(":")>-1&&gt[t.split(":")[0]];d?pt(e,d,t,n):D(e,ot[t]||t,n)}return n}function kt(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}});n;){const r=n[t];if(r&&!n.disabled){const s=n[`${t}Data`];if(s!==void 0?r.call(n,s,e):r.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function K(e,t,n,r,s){for(;typeof n=="function";)n=n();if(t===n)return n;const l=typeof t,a=r!==void 0;if(e=a&&n[0]&&n[0].parentNode||e,l==="string"||l==="number"){if(l==="number"&&(t=t.toString(),t===n))return n;if(a){let i=n[0];i&&i.nodeType===3?i.data!==t&&(i.data=t):i=document.createTextNode(t),n=q(e,n,r,i)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||l==="boolean")n=q(e,n,r);else{if(l==="function")return R(()=>{let i=t();for(;typeof i=="function";)i=i();n=K(e,i,n,r)}),()=>n;if(Array.isArray(t)){const i=[],h=n&&Array.isArray(n);if(ye(i,t,n,s))return R(()=>n=K(e,i,n,r,!0)),()=>n;if(i.length===0){if(n=q(e,n,r),a)return n}else h?n.length===0?Pe(e,i,r):dt(e,n,i):(n&&q(e),Pe(e,i));n=i}else if(t.nodeType){if(Array.isArray(n)){if(a)return n=q(e,n,r,t);q(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function ye(e,t,n,r){let s=!1;for(let l=0,a=t.length;l<a;l++){let i=t[l],h=n&&n[e.length],m;if(!(i==null||i===!0||i===!1))if((m=typeof i)=="object"&&i.nodeType)e.push(i);else if(Array.isArray(i))s=ye(e,i,h)||s;else if(m==="function")if(r){for(;typeof i=="function";)i=i();s=ye(e,Array.isArray(i)?i:[i],Array.isArray(h)?h:[h])||s}else e.push(i),s=!0;else{const w=String(i);h&&h.nodeType===3&&h.data===w?e.push(h):e.push(document.createTextNode(w))}}return s}function Pe(e,t,n=null){for(let r=0,s=t.length;r<s;r++)e.insertBefore(t[r],n)}function q(e,t,n,r){if(n===void 0)return e.textContent="";const s=r||document.createTextNode("");if(t.length){let l=!1;for(let a=t.length-1;a>=0;a--){const i=t[a];if(s!==i){const h=i.parentNode===e;!l&&!a?h?e.replaceChild(s,i):e.insertBefore(s,n):h&&i.remove()}else l=!0}}else e.insertBefore(s,n);return[s]}const At="http://www.w3.org/2000/svg";function Et(e,t=!1){return t?document.createElementNS(At,e):document.createElement(e)}function St(e){const[t,n]=nt(e,["component"]),r=se(()=>t.component);return se(()=>{const s=r();switch(typeof s){case"function":return V(()=>s(n));case"string":const l=ft.has(s),a=Et(s,l);return xt(a,n,l),a}})}var De=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function $t(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ge={exports:{}};(function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(r){var s=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,l=0,a={},i={manual:r.Prism&&r.Prism.manual,disableWorkerMessageHandler:r.Prism&&r.Prism.disableWorkerMessageHandler,util:{encode:function c(o){return o instanceof h?new h(o.type,c(o.content),o.alias):Array.isArray(o)?o.map(c):o.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(c){return Object.prototype.toString.call(c).slice(8,-1)},objId:function(c){return c.__id||Object.defineProperty(c,"__id",{value:++l}),c.__id},clone:function c(o,u){u=u||{};var f,g;switch(i.util.type(o)){case"Object":if(g=i.util.objId(o),u[g])return u[g];f={},u[g]=f;for(var p in o)o.hasOwnProperty(p)&&(f[p]=c(o[p],u));return f;case"Array":return g=i.util.objId(o),u[g]?u[g]:(f=[],u[g]=f,o.forEach(function(v,y){f[y]=c(v,u)}),f);default:return o}},getLanguage:function(c){for(;c;){var o=s.exec(c.className);if(o)return o[1].toLowerCase();c=c.parentElement}return"none"},setLanguage:function(c,o){c.className=c.className.replace(RegExp(s,"gi"),""),c.classList.add("language-"+o)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(f){var c=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(f.stack)||[])[1];if(c){var o=document.getElementsByTagName("script");for(var u in o)if(o[u].src==c)return o[u]}return null}},isActive:function(c,o,u){for(var f="no-"+o;c;){var g=c.classList;if(g.contains(o))return!0;if(g.contains(f))return!1;c=c.parentElement}return!!u}},languages:{plain:a,plaintext:a,text:a,txt:a,extend:function(c,o){var u=i.util.clone(i.languages[c]);for(var f in o)u[f]=o[f];return u},insertBefore:function(c,o,u,f){f=f||i.languages;var g=f[c],p={};for(var v in g)if(g.hasOwnProperty(v)){if(v==o)for(var y in u)u.hasOwnProperty(y)&&(p[y]=u[y]);u.hasOwnProperty(v)||(p[v]=g[v])}var E=f[c];return f[c]=p,i.languages.DFS(i.languages,function(S,F){F===E&&S!=c&&(this[S]=p)}),p},DFS:function c(o,u,f,g){g=g||{};var p=i.util.objId;for(var v in o)if(o.hasOwnProperty(v)){u.call(o,v,o[v],f||v);var y=o[v],E=i.util.type(y);E==="Object"&&!g[p(y)]?(g[p(y)]=!0,c(y,u,null,g)):E==="Array"&&!g[p(y)]&&(g[p(y)]=!0,c(y,u,v,g))}}},plugins:{},highlightAll:function(c,o){i.highlightAllUnder(document,c,o)},highlightAllUnder:function(c,o,u){var f={callback:u,container:c,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};i.hooks.run("before-highlightall",f),f.elements=Array.prototype.slice.apply(f.container.querySelectorAll(f.selector)),i.hooks.run("before-all-elements-highlight",f);for(var g=0,p;p=f.elements[g++];)i.highlightElement(p,o===!0,f.callback)},highlightElement:function(c,o,u){var f=i.util.getLanguage(c),g=i.languages[f];i.util.setLanguage(c,f);var p=c.parentElement;p&&p.nodeName.toLowerCase()==="pre"&&i.util.setLanguage(p,f);var v=c.textContent,y={element:c,language:f,grammar:g,code:v};function E(F){y.highlightedCode=F,i.hooks.run("before-insert",y),y.element.innerHTML=y.highlightedCode,i.hooks.run("after-highlight",y),i.hooks.run("complete",y),u&&u.call(y.element)}if(i.hooks.run("before-sanity-check",y),p=y.element.parentElement,p&&p.nodeName.toLowerCase()==="pre"&&!p.hasAttribute("tabindex")&&p.setAttribute("tabindex","0"),!y.code){i.hooks.run("complete",y),u&&u.call(y.element);return}if(i.hooks.run("before-highlight",y),!y.grammar){E(i.util.encode(y.code));return}if(o&&r.Worker){var S=new Worker(i.filename);S.onmessage=function(F){E(F.data)},S.postMessage(JSON.stringify({language:y.language,code:y.code,immediateClose:!0}))}else E(i.highlight(y.code,y.grammar,y.language))},highlight:function(c,o,u){var f={code:c,grammar:o,language:u};if(i.hooks.run("before-tokenize",f),!f.grammar)throw new Error('The language "'+f.language+'" has no grammar.');return f.tokens=i.tokenize(f.code,f.grammar),i.hooks.run("after-tokenize",f),h.stringify(i.util.encode(f.tokens),f.language)},tokenize:function(c,o){var u=o.rest;if(u){for(var f in u)o[f]=u[f];delete o.rest}var g=new d;return x(g,g.head,c),w(c,g,o,g.head,0),B(g)},hooks:{all:{},add:function(c,o){var u=i.hooks.all;u[c]=u[c]||[],u[c].push(o)},run:function(c,o){var u=i.hooks.all[c];if(!(!u||!u.length))for(var f=0,g;g=u[f++];)g(o)}},Token:h};r.Prism=i;function h(c,o,u,f){this.type=c,this.content=o,this.alias=u,this.length=(f||"").length|0}h.stringify=function c(o,u){if(typeof o=="string")return o;if(Array.isArray(o)){var f="";return o.forEach(function(E){f+=c(E,u)}),f}var g={type:o.type,content:c(o.content,u),tag:"span",classes:["token",o.type],attributes:{},language:u},p=o.alias;p&&(Array.isArray(p)?Array.prototype.push.apply(g.classes,p):g.classes.push(p)),i.hooks.run("wrap",g);var v="";for(var y in g.attributes)v+=" "+y+'="'+(g.attributes[y]||"").replace(/"/g,"&quot;")+'"';return"<"+g.tag+' class="'+g.classes.join(" ")+'"'+v+">"+g.content+"</"+g.tag+">"};function m(c,o,u,f){c.lastIndex=o;var g=c.exec(u);if(g&&f&&g[1]){var p=g[1].length;g.index+=p,g[0]=g[0].slice(p)}return g}function w(c,o,u,f,g,p){for(var v in u)if(!(!u.hasOwnProperty(v)||!u[v])){var y=u[v];y=Array.isArray(y)?y:[y];for(var E=0;E<y.length;++E){if(p&&p.cause==v+","+E)return;var S=y[E],F=S.inside,ve=!!S.lookbehind,xe=!!S.greedy,Re=S.alias;if(xe&&!S.pattern.global){var He=S.pattern.toString().match(/[imsuy]*$/)[0];S.pattern=RegExp(S.pattern.source,He+"g")}for(var be=S.pattern||S,$=f.next,_=g;$!==o.tail&&!(p&&_>=p.reach);_+=$.value.length,$=$.next){var U=$.value;if(o.length>c.length)return;if(!(U instanceof h)){var Y=1,L;if(xe){if(L=m(be,_,c,ve),!L||L.index>=c.length)break;var J=L.index,Ue=L.index+L[0].length,I=_;for(I+=$.value.length;J>=I;)$=$.next,I+=$.value.length;if(I-=$.value.length,_=I,$.value instanceof h)continue;for(var W=$;W!==o.tail&&(I<Ue||typeof W.value=="string");W=W.next)Y++,I+=W.value.length;Y--,U=c.slice(_,I),L.index-=_}else if(L=m(be,0,U,ve),!L)continue;var J=L.index,Q=L[0],ue=U.slice(0,J),Ce=U.slice(J+Q.length),fe=_+U.length;p&&fe>p.reach&&(p.reach=fe);var Z=$.prev;ue&&(Z=x(o,Z,ue),_+=ue.length),k(o,Z,Y);var qe=new h(v,F?i.tokenize(Q,F):Q,Re,Q);if($=x(o,Z,qe),Ce&&x(o,$,Ce),Y>1){var ge={cause:v+","+E,reach:fe};w(c,o,u,$.prev,_,ge),p&&ge.reach>p.reach&&(p.reach=ge.reach)}}}}}}function d(){var c={value:null,prev:null,next:null},o={value:null,prev:c,next:null};c.next=o,this.head=c,this.tail=o,this.length=0}function x(c,o,u){var f=o.next,g={value:u,prev:o,next:f};return o.next=g,f.prev=g,c.length++,g}function k(c,o,u){for(var f=o.next,g=0;g<u&&f!==c.tail;g++)f=f.next;o.next=f,f.prev=o,c.length-=g}function B(c){for(var o=[],u=c.head.next;u!==c.tail;)o.push(u.value),u=u.next;return o}if(!r.document)return r.addEventListener&&(i.disableWorkerMessageHandler||r.addEventListener("message",function(c){var o=JSON.parse(c.data),u=o.language,f=o.code,g=o.immediateClose;r.postMessage(i.highlight(f,i.languages[u],u)),g&&r.close()},!1)),i;var A=i.util.currentScript();A&&(i.filename=A.src,A.hasAttribute("data-manual")&&(i.manual=!0));function M(){i.manual||i.highlightAll()}if(!i.manual){var j=document.readyState;j==="loading"||j==="interactive"&&A&&A.defer?document.addEventListener("DOMContentLoaded",M):window.requestAnimationFrame?window.requestAnimationFrame(M):window.setTimeout(M,16)}return i}(t);e.exports&&(e.exports=n),typeof De<"u"&&(De.Prism=n)})(Ge);var Pt=Ge.exports;const Dt=$t(Pt);Prism.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]};Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity;Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup;Prism.hooks.add("wrap",function(e){e.type==="entity"&&(e.attributes.title=e.content.replace(/&amp;/,"&"))});Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(t,n){var r={};r["language-"+n]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[n]},r.cdata=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:r}};s["language-"+n]={pattern:/[\s\S]+/,inside:Prism.languages[n]};var l={};l[t]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return t}),"i"),lookbehind:!0,greedy:!0,inside:s},Prism.languages.insertBefore("markup","cdata",l)}});Object.defineProperty(Prism.languages.markup.tag,"addAttribute",{value:function(e,t){Prism.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:Prism.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}});Prism.languages.html=Prism.languages.markup;Prism.languages.mathml=Prism.languages.markup;Prism.languages.svg=Prism.languages.markup;Prism.languages.xml=Prism.languages.extend("markup",{});Prism.languages.ssml=Prism.languages.xml;Prism.languages.atom=Prism.languages.xml;Prism.languages.rss=Prism.languages.xml;(function(e){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+t.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),n.tag.addAttribute("style","css"))})(Prism);var Bt=T('<div><svg width=200 height=200 viewBox="-100 -100 200 200"><circle cx=0 cy=20 r=70 fill=#D1495B></circle><rect x=-17.5 y=-65 width=35 height=20 fill=#F79257></rect><circle cx=0 cy=-75 r=15 fill=none stroke=#F79257 stroke-width=2>');function Tt(){return(()=>{var e=Bt(),t=e.firstChild;return D(t,"class",H),e})()}const Lt={name:"Basic Shape",component:Tt,code:`
  <div>
    <svg class={svgStyle} width="200" height="200" viewBox="-100 -100 200 200">
      <circle cx="0" cy="20" r="70" fill="#D1495B" />
      <rect x="-17.5" y="-65" width="35" height="20" fill="#F79257" />
      <circle cx="0" cy="-75" r="15" fill="none" stroke="#F79257" stroke-width="2" />
    </svg>
  </div>
  `};var _t=T('<div><svg width=200 height=400 viewBox="-100 -200 200 400"><polygon points="0,0 80,120 -80,120"fill=#234236></polygon><polygon points="0,-40 60,60 -60,60"fill=#0C5C4C></polygon><polygon points="0,-80 40,0 -40,0"fill=#38755B></polygon><rect x=-20 y=120 width=40 height=30 fill=brown>');function Ot(){return(()=>{var e=_t(),t=e.firstChild;return D(t,"class",H),e})()}const Mt={name:"Christmas Tree",component:Ot,code:`
  <div>
    <svg class={svgStyle} width="200" height="400" viewBox="-100 -200 200 400">
      <polygon points="0,0 80,120 -80,120" fill="#234236" />
      <polygon points="0,-40 60,60 -60,60" fill="#0C5C4C" />
      <polygon points="0,-80 40,0 -40,0" fill="#38755B" />
      <rect x="-20" y="120" width="40" height="30" fill="brown" />
    </svg>
  </div>
    `};var Ft=T(`<div><svg width=200 height=200 viewBox="-100 -100 200 200"><line class=limb x1=-40 y1=-10 x2=40 y2=-10></line><line class=limb x1=-25 y1=50 x2=0 y2=-15></line><line class=limb x1=25 y1=50 x2=0 y2=-15></line><circle class=head cx=0 cy=-50 r=30></circle><circle class=eye cx=-12 cy=-55 r=3></circle><circle class=eye cx=12 cy=-55 r=3></circle><rect class=mouth x=-10 y=-40 width=20 height=5 rx=2></rect><circle cx=0 cy=-10 r=5></circle><circle cx=0 cy=10 r=5></circle></svg><style jsx dynamic>
          .limb {
            stroke: #cd803d;
            stroke-width: 35px;
            stroke-linecap: round;
          }
          .head {
            fill: #cd803d;
          }
          .eye {
            fill: white;
          }
          .mouth {
            fill: none;
            stroke: white;
            stroke-width: 2px;
          }
        `);function It(){return(()=>{var e=Ft(),t=e.firstChild;return D(t,"class",H),e})()}const Nt={name:"Gingerbread",component:It,code:`
  <div>
    <svg class={svgStyle} width="200" height="200" viewBox="-100 -100 200 200">
      <line class="limb" x1="-40" y1="-10" x2="40" y2="-10" />
      <line class="limb" x1="-25" y1="50" x2="0" y2="-15" />
      <line class="limb" x1="25" y1="50" x2="0" y2="-15" />
      <circle class="head" cx="0" cy="-50" r="30" />
      <circle class="eye" cx="-12" cy="-55" r="3" />
      <circle class="eye" cx="12" cy="-55" r="3" />
      <rect class="mouth" x="-10" y="-40" width="20" height="5" rx="2" />
      <circle cx="0" cy="-10" r="5" />
      <circle cx="0" cy="10" r="5" />
    </svg>
    <style jsx dynamic>
      {\`
        .limb {
          stroke: #cd803d;
          stroke-width: 35px;
          stroke-linecap: round;
        }
        .head {
          fill: #cd803d;
        }
        .eye {
          fill: white;
        }
        .mouth {
          fill: none;
          stroke: white;
          stroke-width: 2px;
        }
      \`}
    </style>
  </div>
    `};var jt=T(`<div><svg width=200 height=200 viewBox="-100 -100 200 200"><polygon points="-65,80 -65,-10 0,-70 65,-10 65,80"></polygon><polyline class=roof points="-75,-5 0,-75 75,-5"></polyline><rect class=door x=-45 y=10 width=30 height=60 rx=2></rect><circle class=door-knob cx=-35 cy=40 r=2></circle><rect class=stair x=-47 y=70 width=34 height=5></rect><rect class=stair x=-49 y=75 width=38 height=5></rect><rect class=window x=5 y=15 width=40 height=35 rx=5></rect><line x1=5 y1=32.5 x2=45 y2=32.5></line><line x1=25 y1=15 x2=25 y2=50></line><rect class=window-sill x=2 y=48 width=46 height=5 rx=5></rect><circle class=window cx=0 cy=-25 r=15></circle><line x1=-15 y1=-25 x2=15 y2=-25></line><line x1=0 y1=-40 x2=0 y2=-10></line></svg><style jsx dynamic>
          .house {
            stroke: black;
            stroke-width: 2px;
            fill: white;
          }
          .house .roof {
            fill: none;
            stroke: #d1495b;
            stroke-width: 10px;
            stroke-linecap: round;
          }
          .house .door {
            fill: #d1495b;
          }

          .house .stair {
            fill: gray;
          }

          .house .window {
            fill: #fdea96;
          }

          .house .window-sill {
            fill: #d1495b;
            stroke-linecap: round;
          }
        `);function Gt(){return(()=>{var e=jt(),t=e.firstChild;return D(t,"class",H+" house"),e})()}const Rt={name:"House",component:Gt,code:`
  <div>
    <svg class={svgStyle + ' house'} width="200" height="200" viewBox="-100 -100 200 200">
      <polygon points="-65,80 -65,-10 0,-70 65,-10 65,80" />
      <polyline class="roof" points="-75,-5 0,-75 75,-5" />
      <rect class="door" x="-45" y="10" width="30" height="60" rx="2" />
      <circle class="door-knob" cx="-35" cy="40" r="2" />
      <rect class="stair" x="-47" y="70" width="34" height="5" />
      <rect class="stair" x="-49" y="75" width="38" height="5" />

      <rect class="window" x="5" y="15" width="40" height="35" rx="5" />
      <line x1="5" y1="32.5" x2="45" y2="32.5" />
      <line x1="25" y1="15" x2="25" y2="50" />
      <rect class="window-sill" x="2" y="48" width="46" height="5" rx="5" />

      <circle class="window" cx="0" cy="-25" r="15" />
      <line x1="-15" y1="-25" x2="15" y2="-25" />
      <line x1="0" y1="-40" x2="0" y2="-10" />
    </svg>
    <style jsx dynamic>
      {\`
        .house {
          stroke: black;
          stroke-width: 2px;
          fill: white;
        }
        .house .roof {
          fill: none;
          stroke: #d1495b;
          stroke-width: 10px;
          stroke-linecap: round;
        }
        .house .door {
          fill: #d1495b;
        }
        
        .house .stair {
          fill: gray;
        }
        
        .house .window {
          fill: #fdea96;
        }
        
        .house .window-sill {
          fill: #d1495b;
          stroke-linecap: round;
        }
      \`}
    </style>
  </div>
    `};var Ht=T('<div><svg width=200 height=200 viewBox="-100 -100 200 200"><path d="M -70 0 L 70 0 L 30 -50 M 70 0 L 30 50"fill=none stroke=#D1495B stroke-width=25 stroke-linecap=round stroke-linejoin=round>');function Ut(){return(()=>{var e=Ht(),t=e.firstChild;return D(t,"class",H),e})()}const qt={name:"Basic Paths",component:Ut,code:`
    <div>
      <svg class={svgStyle} width="200" height="200" viewBox="-100 -100 200 200">
        <path d="M -70 0 L 70 0 L 30 -50 M 70 0 L 30 50" fill="none" stroke="#D1495B" stroke-width="25" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>
  `};var Vt=T('<div><svg width=200 height=200 viewBox="-100 -100 200 200"><g transform="translate(0 5)"><g><polygon points="0,0 36,-50 0,-100"fill=#EDD8B7></polygon><polygon points="0,0 -36,-50 0,-100"fill=#E5C39C></polygon></g><g transform=rotate(72)><polygon points="0,0 36,-50 0,-100"fill=#EDD8B7></polygon><polygon points="0,0 -36,-50 0,-100"fill=#E5C39C></polygon></g><g transform=rotate(-72)><polygon points="0,0 36,-50 0,-100"fill=#EDD8B7></polygon><polygon points="0,0 -36,-50 0,-100"fill=#E5C39C></polygon></g><g transform=rotate(144)><polygon points="0,0 36,-50 0,-100"fill=#EDD8B7></polygon><polygon points="0,0 -36,-50 0,-100"fill=#E5C39C></polygon></g><g transform=rotate(-144)><polygon points="0,0 36,-50 0,-100"fill=#EDD8B7></polygon><polygon points="0,0 -36,-50 0,-100"fill=#E5C39C>');function Wt(){return(()=>{var e=Vt(),t=e.firstChild;return D(t,"class",H),e})()}const Kt={name:"Star",component:Wt,code:`
    <div>
      <svg class={svgStyle} width="200" height="200" viewBox="-100 -100 200 200">
        <g transform="translate(0 5)">
          <g>
            <polygon points="0,0 36,-50 0,-100" fill="#EDD8B7" />
            <polygon points="0,0 -36,-50 0,-100" fill="#E5C39C" />
          </g>
          <g transform="rotate(72)">
            <polygon points="0,0 36,-50 0,-100" fill="#EDD8B7" />
            <polygon points="0,0 -36,-50 0,-100" fill="#E5C39C" />
          </g>
          <g transform="rotate(-72)">
            <polygon points="0,0 36,-50 0,-100" fill="#EDD8B7" />
            <polygon points="0,0 -36,-50 0,-100" fill="#E5C39C" />
          </g>
          <g transform="rotate(144)">
            <polygon points="0,0 36,-50 0,-100" fill="#EDD8B7" />
            <polygon points="0,0 -36,-50 0,-100" fill="#E5C39C" />
          </g>
          <g transform="rotate(-144)">
            <polygon points="0,0 36,-50 0,-100" fill="#EDD8B7" />
            <polygon points="0,0 -36,-50 0,-100" fill="#E5C39C" />
          </g>
        </g>
      </svg>
    </div>
    `};var zt=T('<div><svg width=200 height=200 viewBox="-100 -100 200 200"><rect x=-100 y=-100 width=200 height=200 fill=#CD803D></rect><circle r=55 stroke=#FCCE7B stroke-width=10 fill=white></circle><circle r=45 stroke=#B6705F stroke-width=6 stroke-dasharray="6 17.56194490192345"stroke-dashoffset=3 fill=none></circle><g stroke=#5f4c6c stroke-linecap=round><line id=hours y2=-20 stroke-width=7></line><line id=minutes y2=-30 stroke-width=5></line><line id=minutes y2=-38 stroke-width=3>');function Xt(){const[e,t]=me(new Date),n=()=>{t(new Date)};return ze(()=>{const r=setInterval(n,1e3);Le(()=>clearInterval(r))}),(()=>{var r=zt(),s=r.firstChild,l=s.firstChild,a=l.nextSibling,i=a.nextSibling,h=i.nextSibling,m=h.firstChild,w=m.nextSibling,d=w.nextSibling;return D(s,"class",H),R(x=>{var k=`rotate(${30*(e().getHours()%12)+e().getMinutes()})`,B=`rotate(${360/60*e().getMinutes()})`,A=`rotate(${360/60*e().getSeconds()})`;return k!==x.e&&D(m,"transform",x.e=k),B!==x.t&&D(w,"transform",x.t=B),A!==x.a&&D(d,"transform",x.a=A),x},{e:void 0,t:void 0,a:void 0}),r})()}const Yt={name:"Clock",component:Xt,code:`
    <div>
      <svg class={svgStyle} width="200" height="200" viewBox="-100 -100 200 200">
        <rect x="-100" y="-100" width="200" height="200" fill="#CD803D" />

        <circle r="55" stroke="#FCCE7B" stroke-width="10" fill="white" />

        <circle r="45" stroke="#B6705F" stroke-width="6" stroke-dasharray="6 17.56194490192345" stroke-dashoffset="3" fill="none" />

        <g stroke="#5f4c6c" stroke-linecap="round">
          <line id="hours" y2="-20" stroke-width="7" transform={\`rotate(\${(360 / 12) * (currentTime().getHours() % 12)})\`} />
          <line id="minutes" y2="-30" stroke-width="5" transform={\`rotate(\${(360 / 60) * currentTime().getMinutes()})\`} />
          <line id="minutes" y2="-38" stroke-width="3" transform={\`rotate(\${(360 / 60) * currentTime().getSeconds()})\`} />
        </g>
      </svg>
    </div>
      `};var Jt=T("<div>nothing"),Qt=T('<pre class=" rounded-xl"><code class=language-html>'),Zt=T('<div class=p-3><div class="flex flex-wrap gap-3"></div><div class=mt-8>'),en=T('<button class="p-3 rounded-lg shadow-lg border-none bg-slate-200 hover:bg-slate-300 active:bg-slate-400">');const H="boder-r-1 border-slate-500 border-solid";function tn(){if(te.length===0)return Jt();let e;const[t,n]=me(te[te.length-1]),r=l=>{n(l)},s=se(()=>{const l=t().code,a=(()=>{var i=Qt(),h=i.firstChild,m=e;return typeof m=="function"?je(m,h):e=h,G(h,l),i})();return Dt.highlightElement(e),a});return(()=>{var l=Zt(),a=l.firstChild,i=a.nextSibling;return G(a,pe(it,{each:te,children:h=>(()=>{var m=en();return m.$$click=()=>r(h),G(m,()=>h.name),m})()})),G(i,pe(St,{get component(){return t().component}}),null),G(i,s,null),l})()}const te=[Lt,Mt,Nt,Rt,qt,Kt,Yt];Ne(["click"]);var nn=T('<div class="w-full h-full overflow-hidden">');function rn(){return(()=>{var e=nn();return G(e,tn),e})()}const sn=document.getElementById("root");ht(()=>pe(rn,{}),sn);
