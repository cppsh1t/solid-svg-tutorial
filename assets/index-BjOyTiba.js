(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(r){if(r.ep)return;r.ep=!0;const l=n(r);fetch(r.href,l)}})();const Ue=(e,t)=>e===t,de=Symbol("solid-proxy"),He=Symbol("solid-track"),ne={equals:Ue};let Ve=Oe;const G=1,ie=2,ke={owned:null,cleanups:null,context:null,owner:null};var b=null;let ge=null,We=null,x=null,P=null,j=null,le=0;function te(e,t){const n=x,s=b,r=e.length===0,l=t===void 0?s:t,a=r?ke:{owned:null,cleanups:null,context:l?l.context:null,owner:l},i=r?e:()=>e(()=>H(()=>ae(a)));b=a,x=null;try{return z(i,!0)}finally{x=n,b=s}}function $e(e,t){t=t?Object.assign({},ne,t):ne;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=r=>(typeof r=="function"&&(r=r(n.value)),Be(n,r));return[De.bind(n),s]}function U(e,t,n){const s=Le(e,t,!1,G);oe(s)}function se(e,t,n){n=n?Object.assign({},ne,n):ne;const s=Le(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,oe(s),De.bind(s)}function H(e){if(x===null)return e();const t=x;x=null;try{return e()}finally{x=t}}function Ke(e){return b===null||(b.cleanups===null?b.cleanups=[e]:b.cleanups.push(e)),e}function De(){if(this.sources&&this.state)if(this.state===G)oe(this);else{const e=P;P=null,z(()=>re(this),!1),P=e}if(x){const e=this.observers?this.observers.length:0;x.sources?(x.sources.push(this),x.sourceSlots.push(e)):(x.sources=[this],x.sourceSlots=[e]),this.observers?(this.observers.push(x),this.observerSlots.push(x.sources.length-1)):(this.observers=[x],this.observerSlots=[x.sources.length-1])}return this.value}function Be(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&z(()=>{for(let r=0;r<e.observers.length;r+=1){const l=e.observers[r],a=ge&&ge.running;a&&ge.disposed.has(l),(a?!l.tState:!l.state)&&(l.pure?P.push(l):j.push(l),l.observers&&_e(l)),a||(l.state=G)}if(P.length>1e6)throw P=[],new Error},!1)),t}function oe(e){if(!e.fn)return;ae(e);const t=le;ze(e,e.value,t)}function ze(e,t,n){let s;const r=b,l=x;x=b=e;try{s=e.fn(t)}catch(a){return e.pure&&(e.state=G,e.owned&&e.owned.forEach(ae),e.owned=null),e.updatedAt=n+1,Me(a)}finally{x=l,b=r}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Be(e,s):e.value=s,e.updatedAt=n)}function Le(e,t,n,s=G,r){const l={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:b,context:b?b.context:null,pure:n};return b===null||b!==ke&&(b.owned?b.owned.push(l):b.owned=[l]),l}function Te(e){if(e.state===0)return;if(e.state===ie)return re(e);if(e.suspense&&H(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<le);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===G)oe(e);else if(e.state===ie){const s=P;P=null,z(()=>re(e,t[0]),!1),P=s}}function z(e,t){if(P)return e();let n=!1;t||(P=[]),j?n=!0:j=[],le++;try{const s=e();return Xe(n),s}catch(s){n||(j=null),P=null,Me(s)}}function Xe(e){if(P&&(Oe(P),P=null),e)return;const t=j;j=null,t.length&&z(()=>Ve(t),!1)}function Oe(e){for(let t=0;t<e.length;t++)Te(e[t])}function re(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const s=e.sources[n];if(s.sources){const r=s.state;r===G?s!==t&&(!s.updatedAt||s.updatedAt<le)&&Te(s):r===ie&&re(s,t)}}}function _e(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=ie,n.pure?P.push(n):j.push(n),n.observers&&_e(n))}}function ae(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),r=n.observers;if(r&&r.length){const l=r.pop(),a=n.observerSlots.pop();s<r.length&&(l.sourceSlots[a]=s,r[s]=l,n.observerSlots[s]=a)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)ae(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function Ye(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function Me(e,t=b){throw Ye(e)}const Je=Symbol("fallback");function xe(e){for(let t=0;t<e.length;t++)e[t]()}function Qe(e,t,n={}){let s=[],r=[],l=[],a=0,i=t.length>1?[]:null;return Ke(()=>xe(l)),()=>{let h=e()||[],m=h.length,w,d;return h[He],H(()=>{let k,T,$,_,I,c,o,u,f;if(m===0)a!==0&&(xe(l),l=[],s=[],r=[],a=0,i&&(i=[])),n.fallback&&(s=[Je],r[0]=te(g=>(l[0]=g,n.fallback())),a=1);else if(a===0){for(r=new Array(m),d=0;d<m;d++)s[d]=h[d],r[d]=te(A);a=m}else{for($=new Array(m),_=new Array(m),i&&(I=new Array(m)),c=0,o=Math.min(a,m);c<o&&s[c]===h[c];c++);for(o=a-1,u=m-1;o>=c&&u>=c&&s[o]===h[u];o--,u--)$[u]=r[o],_[u]=l[o],i&&(I[u]=i[o]);for(k=new Map,T=new Array(u+1),d=u;d>=c;d--)f=h[d],w=k.get(f),T[d]=w===void 0?-1:w,k.set(f,d);for(w=c;w<=o;w++)f=s[w],d=k.get(f),d!==void 0&&d!==-1?($[d]=r[w],_[d]=l[w],i&&(I[d]=i[w]),d=T[d],k.set(f,d)):l[w]();for(d=c;d<m;d++)d in $?(r[d]=$[d],l[d]=_[d],i&&(i[d]=I[d],i[d](d))):r[d]=te(A);r=r.slice(0,a=m),s=h.slice(0)}return r});function A(k){if(l[d]=k,i){const[T,$]=$e(d);return i[d]=$,t(h[d],T)}return t(h[d])}}}let Ze=!1;function he(e,t){return H(()=>e(t||{}))}function Z(){return!0}const be={get(e,t,n){return t===de?n:e.get(t)},has(e,t){return t===de?!0:e.has(t)},set:Z,deleteProperty:Z,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:Z,deleteProperty:Z}},ownKeys(e){return e.keys()}};function et(e,...t){if(de in e){const r=new Set(t.length>1?t.flat():t[0]),l=t.map(a=>new Proxy({get(i){return a.includes(i)?e[i]:void 0},has(i){return a.includes(i)&&i in e},keys(){return a.filter(i=>i in e)}},be));return l.push(new Proxy({get(a){return r.has(a)?void 0:e[a]},has(a){return r.has(a)?!1:a in e},keys(){return Object.keys(e).filter(a=>!r.has(a))}},be)),l}const n={},s=t.map(()=>({}));for(const r of Object.getOwnPropertyNames(e)){const l=Object.getOwnPropertyDescriptor(e,r),a=!l.get&&!l.set&&l.enumerable&&l.writable&&l.configurable;let i=!1,h=0;for(const m of t)m.includes(r)&&(i=!0,a?s[h][r]=l.value:Object.defineProperty(s[h],r,l)),++h;i||(a?n[r]=l.value:Object.defineProperty(n,r,l))}return[...s,n]}function tt(e){const t="fallback"in e&&{fallback:()=>e.fallback};return se(Qe(()=>e.each,e.children,t||void 0))}const nt=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],it=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...nt]),st=new Set(["innerHTML","textContent","innerText","children"]),rt=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),lt=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function ot(e,t){const n=lt[e];return typeof n=="object"?n[t]?n.$:void 0:n}const at=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),ct=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),ut={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function ft(e,t,n){let s=n.length,r=t.length,l=s,a=0,i=0,h=t[r-1].nextSibling,m=null;for(;a<r||i<l;){if(t[a]===n[i]){a++,i++;continue}for(;t[r-1]===n[l-1];)r--,l--;if(r===a){const w=l<s?i?n[i-1].nextSibling:n[l-i]:h;for(;i<l;)e.insertBefore(n[i++],w)}else if(l===i)for(;a<r;)(!m||!m.has(t[a]))&&t[a].remove(),a++;else if(t[a]===n[l-1]&&n[i]===t[r-1]){const w=t[--r].nextSibling;e.insertBefore(n[i++],t[a++].nextSibling),e.insertBefore(n[--l],w),t[r]=n[l]}else{if(!m){m=new Map;let d=i;for(;d<l;)m.set(n[d],d++)}const w=m.get(t[a]);if(w!=null)if(i<w&&w<l){let d=a,A=1,k;for(;++d<r&&d<l&&!((k=m.get(t[d]))==null||k!==w+A);)A++;if(A>w-i){const T=t[a];for(;i<w;)e.insertBefore(n[i++],T)}else e.replaceChild(n[i++],t[a++])}else a++;else t[a++].remove()}}}const Ae="_$DX_DELEGATE";function gt(e,t,n,s={}){let r;return te(l=>{r=l,t===document?e():N(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{r(),t.textContent=""}}function B(e,t,n){let s;const r=()=>{const a=document.createElement("template");return a.innerHTML=e,a.content.firstChild},l=()=>(s||(s=r())).cloneNode(!0);return l.cloneNode=l,l}function Fe(e,t=window.document){const n=t[Ae]||(t[Ae]=new Set);for(let s=0,r=e.length;s<r;s++){const l=e[s];n.has(l)||(n.add(l),t.addEventListener(l,bt))}}function O(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function dt(e,t,n,s){s==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,s)}function ht(e,t){t==null?e.removeAttribute("class"):e.className=t}function pt(e,t,n,s){if(s)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const r=n[0];e.addEventListener(t,n[0]=l=>r.call(e,n[1],l))}else e.addEventListener(t,n)}function yt(e,t,n={}){const s=Object.keys(t||{}),r=Object.keys(n);let l,a;for(l=0,a=r.length;l<a;l++){const i=r[l];!i||i==="undefined"||t[i]||(Ce(e,i,!1),delete n[i])}for(l=0,a=s.length;l<a;l++){const i=s[l],h=!!t[i];!i||i==="undefined"||n[i]===h||!h||(Ce(e,i,!0),n[i]=h)}return n}function mt(e,t,n){if(!t)return n?O(e,"style"):t;const s=e.style;if(typeof t=="string")return s.cssText=t;typeof n=="string"&&(s.cssText=n=void 0),n||(n={}),t||(t={});let r,l;for(l in n)t[l]==null&&s.removeProperty(l),delete n[l];for(l in t)r=t[l],r!==n[l]&&(s.setProperty(l,r),n[l]=r);return n}function wt(e,t={},n,s){const r={};return U(()=>r.children=K(e,t.children,r.children)),U(()=>typeof t.ref=="function"&&Ie(t.ref,e)),U(()=>vt(e,t,n,!0,r,!0)),r}function Ie(e,t,n){return H(()=>e(t,n))}function N(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return K(e,t,s,n);U(r=>K(e,t(),r,n),s)}function vt(e,t,n,s,r={},l=!1){t||(t={});for(const a in r)if(!(a in t)){if(a==="children")continue;r[a]=Ee(e,a,null,r[a],n,l)}for(const a in t){if(a==="children")continue;const i=t[a];r[a]=Ee(e,a,i,r[a],n,l)}}function xt(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function Ce(e,t,n){const s=t.trim().split(/\s+/);for(let r=0,l=s.length;r<l;r++)e.classList.toggle(s[r],n)}function Ee(e,t,n,s,r,l){let a,i,h,m,w;if(t==="style")return mt(e,n,s);if(t==="classList")return yt(e,n,s);if(n===s)return s;if(t==="ref")l||n(e);else if(t.slice(0,3)==="on:"){const d=t.slice(3);s&&e.removeEventListener(d,s),n&&e.addEventListener(d,n)}else if(t.slice(0,10)==="oncapture:"){const d=t.slice(10);s&&e.removeEventListener(d,s,!0),n&&e.addEventListener(d,n,!0)}else if(t.slice(0,2)==="on"){const d=t.slice(2).toLowerCase(),A=at.has(d);if(!A&&s){const k=Array.isArray(s)?s[0]:s;e.removeEventListener(d,k)}(A||n)&&(pt(e,d,n,A),A&&Fe([d]))}else if(t.slice(0,5)==="attr:")O(e,t.slice(5),n);else if((w=t.slice(0,5)==="prop:")||(h=st.has(t))||!r&&((m=ot(t,e.tagName))||(i=it.has(t)))||(a=e.nodeName.includes("-")))w&&(t=t.slice(5),i=!0),t==="class"||t==="className"?ht(e,n):a&&!i&&!h?e[xt(t)]=n:e[m||t]=n;else{const d=r&&t.indexOf(":")>-1&&ut[t.split(":")[0]];d?dt(e,d,t,n):O(e,rt[t]||t,n)}return n}function bt(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}});n;){const s=n[t];if(s&&!n.disabled){const r=n[`${t}Data`];if(r!==void 0?s.call(n,r,e):s.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function K(e,t,n,s,r){for(;typeof n=="function";)n=n();if(t===n)return n;const l=typeof t,a=s!==void 0;if(e=a&&n[0]&&n[0].parentNode||e,l==="string"||l==="number"){if(l==="number"&&(t=t.toString(),t===n))return n;if(a){let i=n[0];i&&i.nodeType===3?i.data!==t&&(i.data=t):i=document.createTextNode(t),n=q(e,n,s,i)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||l==="boolean")n=q(e,n,s);else{if(l==="function")return U(()=>{let i=t();for(;typeof i=="function";)i=i();n=K(e,i,n,s)}),()=>n;if(Array.isArray(t)){const i=[],h=n&&Array.isArray(n);if(pe(i,t,n,r))return U(()=>n=K(e,i,n,s,!0)),()=>n;if(i.length===0){if(n=q(e,n,s),a)return n}else h?n.length===0?Se(e,i,s):ft(e,n,i):(n&&q(e),Se(e,i));n=i}else if(t.nodeType){if(Array.isArray(n)){if(a)return n=q(e,n,s,t);q(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function pe(e,t,n,s){let r=!1;for(let l=0,a=t.length;l<a;l++){let i=t[l],h=n&&n[e.length],m;if(!(i==null||i===!0||i===!1))if((m=typeof i)=="object"&&i.nodeType)e.push(i);else if(Array.isArray(i))r=pe(e,i,h)||r;else if(m==="function")if(s){for(;typeof i=="function";)i=i();r=pe(e,Array.isArray(i)?i:[i],Array.isArray(h)?h:[h])||r}else e.push(i),r=!0;else{const w=String(i);h&&h.nodeType===3&&h.data===w?e.push(h):e.push(document.createTextNode(w))}}return r}function Se(e,t,n=null){for(let s=0,r=t.length;s<r;s++)e.insertBefore(t[s],n)}function q(e,t,n,s){if(n===void 0)return e.textContent="";const r=s||document.createTextNode("");if(t.length){let l=!1;for(let a=t.length-1;a>=0;a--){const i=t[a];if(r!==i){const h=i.parentNode===e;!l&&!a?h?e.replaceChild(r,i):e.insertBefore(r,n):h&&i.remove()}else l=!0}}else e.insertBefore(r,n);return[r]}const At="http://www.w3.org/2000/svg";function Ct(e,t=!1){return t?document.createElementNS(At,e):document.createElement(e)}function Et(e){const[t,n]=et(e,["component"]),s=se(()=>t.component);return se(()=>{const r=s();switch(typeof r){case"function":return H(()=>r(n));case"string":const l=ct.has(r),a=Ct(r,l);return wt(a,n,l),a}})}var Pe=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function St(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ne={exports:{}};(function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(s){var r=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,l=0,a={},i={manual:s.Prism&&s.Prism.manual,disableWorkerMessageHandler:s.Prism&&s.Prism.disableWorkerMessageHandler,util:{encode:function c(o){return o instanceof h?new h(o.type,c(o.content),o.alias):Array.isArray(o)?o.map(c):o.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(c){return Object.prototype.toString.call(c).slice(8,-1)},objId:function(c){return c.__id||Object.defineProperty(c,"__id",{value:++l}),c.__id},clone:function c(o,u){u=u||{};var f,g;switch(i.util.type(o)){case"Object":if(g=i.util.objId(o),u[g])return u[g];f={},u[g]=f;for(var p in o)o.hasOwnProperty(p)&&(f[p]=c(o[p],u));return f;case"Array":return g=i.util.objId(o),u[g]?u[g]:(f=[],u[g]=f,o.forEach(function(v,y){f[y]=c(v,u)}),f);default:return o}},getLanguage:function(c){for(;c;){var o=r.exec(c.className);if(o)return o[1].toLowerCase();c=c.parentElement}return"none"},setLanguage:function(c,o){c.className=c.className.replace(RegExp(r,"gi"),""),c.classList.add("language-"+o)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(f){var c=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(f.stack)||[])[1];if(c){var o=document.getElementsByTagName("script");for(var u in o)if(o[u].src==c)return o[u]}return null}},isActive:function(c,o,u){for(var f="no-"+o;c;){var g=c.classList;if(g.contains(o))return!0;if(g.contains(f))return!1;c=c.parentElement}return!!u}},languages:{plain:a,plaintext:a,text:a,txt:a,extend:function(c,o){var u=i.util.clone(i.languages[c]);for(var f in o)u[f]=o[f];return u},insertBefore:function(c,o,u,f){f=f||i.languages;var g=f[c],p={};for(var v in g)if(g.hasOwnProperty(v)){if(v==o)for(var y in u)u.hasOwnProperty(y)&&(p[y]=u[y]);u.hasOwnProperty(v)||(p[v]=g[v])}var C=f[c];return f[c]=p,i.languages.DFS(i.languages,function(E,M){M===C&&E!=c&&(this[E]=p)}),p},DFS:function c(o,u,f,g){g=g||{};var p=i.util.objId;for(var v in o)if(o.hasOwnProperty(v)){u.call(o,v,o[v],f||v);var y=o[v],C=i.util.type(y);C==="Object"&&!g[p(y)]?(g[p(y)]=!0,c(y,u,null,g)):C==="Array"&&!g[p(y)]&&(g[p(y)]=!0,c(y,u,v,g))}}},plugins:{},highlightAll:function(c,o){i.highlightAllUnder(document,c,o)},highlightAllUnder:function(c,o,u){var f={callback:u,container:c,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};i.hooks.run("before-highlightall",f),f.elements=Array.prototype.slice.apply(f.container.querySelectorAll(f.selector)),i.hooks.run("before-all-elements-highlight",f);for(var g=0,p;p=f.elements[g++];)i.highlightElement(p,o===!0,f.callback)},highlightElement:function(c,o,u){var f=i.util.getLanguage(c),g=i.languages[f];i.util.setLanguage(c,f);var p=c.parentElement;p&&p.nodeName.toLowerCase()==="pre"&&i.util.setLanguage(p,f);var v=c.textContent,y={element:c,language:f,grammar:g,code:v};function C(M){y.highlightedCode=M,i.hooks.run("before-insert",y),y.element.innerHTML=y.highlightedCode,i.hooks.run("after-highlight",y),i.hooks.run("complete",y),u&&u.call(y.element)}if(i.hooks.run("before-sanity-check",y),p=y.element.parentElement,p&&p.nodeName.toLowerCase()==="pre"&&!p.hasAttribute("tabindex")&&p.setAttribute("tabindex","0"),!y.code){i.hooks.run("complete",y),u&&u.call(y.element);return}if(i.hooks.run("before-highlight",y),!y.grammar){C(i.util.encode(y.code));return}if(o&&s.Worker){var E=new Worker(i.filename);E.onmessage=function(M){C(M.data)},E.postMessage(JSON.stringify({language:y.language,code:y.code,immediateClose:!0}))}else C(i.highlight(y.code,y.grammar,y.language))},highlight:function(c,o,u){var f={code:c,grammar:o,language:u};if(i.hooks.run("before-tokenize",f),!f.grammar)throw new Error('The language "'+f.language+'" has no grammar.');return f.tokens=i.tokenize(f.code,f.grammar),i.hooks.run("after-tokenize",f),h.stringify(i.util.encode(f.tokens),f.language)},tokenize:function(c,o){var u=o.rest;if(u){for(var f in u)o[f]=u[f];delete o.rest}var g=new d;return A(g,g.head,c),w(c,g,o,g.head,0),T(g)},hooks:{all:{},add:function(c,o){var u=i.hooks.all;u[c]=u[c]||[],u[c].push(o)},run:function(c,o){var u=i.hooks.all[c];if(!(!u||!u.length))for(var f=0,g;g=u[f++];)g(o)}},Token:h};s.Prism=i;function h(c,o,u,f){this.type=c,this.content=o,this.alias=u,this.length=(f||"").length|0}h.stringify=function c(o,u){if(typeof o=="string")return o;if(Array.isArray(o)){var f="";return o.forEach(function(C){f+=c(C,u)}),f}var g={type:o.type,content:c(o.content,u),tag:"span",classes:["token",o.type],attributes:{},language:u},p=o.alias;p&&(Array.isArray(p)?Array.prototype.push.apply(g.classes,p):g.classes.push(p)),i.hooks.run("wrap",g);var v="";for(var y in g.attributes)v+=" "+y+'="'+(g.attributes[y]||"").replace(/"/g,"&quot;")+'"';return"<"+g.tag+' class="'+g.classes.join(" ")+'"'+v+">"+g.content+"</"+g.tag+">"};function m(c,o,u,f){c.lastIndex=o;var g=c.exec(u);if(g&&f&&g[1]){var p=g[1].length;g.index+=p,g[0]=g[0].slice(p)}return g}function w(c,o,u,f,g,p){for(var v in u)if(!(!u.hasOwnProperty(v)||!u[v])){var y=u[v];y=Array.isArray(y)?y:[y];for(var C=0;C<y.length;++C){if(p&&p.cause==v+","+C)return;var E=y[C],M=E.inside,ye=!!E.lookbehind,me=!!E.greedy,je=E.alias;if(me&&!E.pattern.global){var Ge=E.pattern.toString().match(/[imsuy]*$/)[0];E.pattern=RegExp(E.pattern.source,Ge+"g")}for(var we=E.pattern||E,S=f.next,L=g;S!==o.tail&&!(p&&L>=p.reach);L+=S.value.length,S=S.next){var R=S.value;if(o.length>c.length)return;if(!(R instanceof h)){var X=1,D;if(me){if(D=m(we,L,c,ye),!D||D.index>=c.length)break;var Y=D.index,Re=D.index+D[0].length,F=L;for(F+=S.value.length;Y>=F;)S=S.next,F+=S.value.length;if(F-=S.value.length,L=F,S.value instanceof h)continue;for(var W=S;W!==o.tail&&(F<Re||typeof W.value=="string");W=W.next)X++,F+=W.value.length;X--,R=c.slice(L,F),D.index-=L}else if(D=m(we,0,R,ye),!D)continue;var Y=D.index,J=D[0],ce=R.slice(0,Y),ve=R.slice(Y+J.length),ue=L+R.length;p&&ue>p.reach&&(p.reach=ue);var Q=S.prev;ce&&(Q=A(o,Q,ce),L+=ce.length),k(o,Q,X);var qe=new h(v,M?i.tokenize(J,M):J,je,J);if(S=A(o,Q,qe),ve&&A(o,S,ve),X>1){var fe={cause:v+","+C,reach:ue};w(c,o,u,S.prev,L,fe),p&&fe.reach>p.reach&&(p.reach=fe.reach)}}}}}}function d(){var c={value:null,prev:null,next:null},o={value:null,prev:c,next:null};c.next=o,this.head=c,this.tail=o,this.length=0}function A(c,o,u){var f=o.next,g={value:u,prev:o,next:f};return o.next=g,f.prev=g,c.length++,g}function k(c,o,u){for(var f=o.next,g=0;g<u&&f!==c.tail;g++)f=f.next;o.next=f,f.prev=o,c.length-=g}function T(c){for(var o=[],u=c.head.next;u!==c.tail;)o.push(u.value),u=u.next;return o}if(!s.document)return s.addEventListener&&(i.disableWorkerMessageHandler||s.addEventListener("message",function(c){var o=JSON.parse(c.data),u=o.language,f=o.code,g=o.immediateClose;s.postMessage(i.highlight(f,i.languages[u],u)),g&&s.close()},!1)),i;var $=i.util.currentScript();$&&(i.filename=$.src,$.hasAttribute("data-manual")&&(i.manual=!0));function _(){i.manual||i.highlightAll()}if(!i.manual){var I=document.readyState;I==="loading"||I==="interactive"&&$&&$.defer?document.addEventListener("DOMContentLoaded",_):window.requestAnimationFrame?window.requestAnimationFrame(_):window.setTimeout(_,16)}return i}(t);e.exports&&(e.exports=n),typeof Pe<"u"&&(Pe.Prism=n)})(Ne);var Pt=Ne.exports;const kt=St(Pt);Prism.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]};Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity;Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup;Prism.hooks.add("wrap",function(e){e.type==="entity"&&(e.attributes.title=e.content.replace(/&amp;/,"&"))});Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(t,n){var s={};s["language-"+n]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[n]},s.cdata=/^<!\[CDATA\[|\]\]>$/i;var r={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:s}};r["language-"+n]={pattern:/[\s\S]+/,inside:Prism.languages[n]};var l={};l[t]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return t}),"i"),lookbehind:!0,greedy:!0,inside:r},Prism.languages.insertBefore("markup","cdata",l)}});Object.defineProperty(Prism.languages.markup.tag,"addAttribute",{value:function(e,t){Prism.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:Prism.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}});Prism.languages.html=Prism.languages.markup;Prism.languages.mathml=Prism.languages.markup;Prism.languages.svg=Prism.languages.markup;Prism.languages.xml=Prism.languages.extend("markup",{});Prism.languages.ssml=Prism.languages.xml;Prism.languages.atom=Prism.languages.xml;Prism.languages.rss=Prism.languages.xml;(function(e){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+t.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),n.tag.addAttribute("style","css"))})(Prism);var $t=B('<div><svg width=200 height=200 viewBox="-100 -100 200 200"><circle cx=0 cy=20 r=70 fill=#D1495B></circle><rect x=-17.5 y=-65 width=35 height=20 fill=#F79257></rect><circle cx=0 cy=-75 r=15 fill=none stroke=#F79257 stroke-width=2>');function Dt(){return(()=>{var e=$t(),t=e.firstChild;return O(t,"class",V),e})()}const Bt={name:"Basic Shape",component:Dt,code:`
  <div>
    <svg class={svgStyle} width="200" height="200" viewBox="-100 -100 200 200">
      <circle cx="0" cy="20" r="70" fill="#D1495B" />
      <rect x="-17.5" y="-65" width="35" height="20" fill="#F79257" />
      <circle cx="0" cy="-75" r="15" fill="none" stroke="#F79257" stroke-width="2" />
    </svg>
  </div>
  `};var Lt=B('<div><svg width=200 height=400 viewBox="-100 -200 200 400"><polygon points="0,0 80,120 -80,120"fill=#234236></polygon><polygon points="0,-40 60,60 -60,60"fill=#0C5C4C></polygon><polygon points="0,-80 40,0 -40,0"fill=#38755B></polygon><rect x=-20 y=120 width=40 height=30 fill=brown>');function Tt(){return(()=>{var e=Lt(),t=e.firstChild;return O(t,"class",V),e})()}const Ot={name:"Christmas Tree",component:Tt,code:`
  <div>
    <svg class={svgStyle} width="200" height="400" viewBox="-100 -200 200 400">
      <polygon points="0,0 80,120 -80,120" fill="#234236" />
      <polygon points="0,-40 60,60 -60,60" fill="#0C5C4C" />
      <polygon points="0,-80 40,0 -40,0" fill="#38755B" />
      <rect x="-20" y="120" width="40" height="30" fill="brown" />
    </svg>
  </div>
    `};var _t=B(`<div><svg width=200 height=200 viewBox="-100 -100 200 200"><line class=limb x1=-40 y1=-10 x2=40 y2=-10></line><line class=limb x1=-25 y1=50 x2=0 y2=-15></line><line class=limb x1=25 y1=50 x2=0 y2=-15></line><circle class=head cx=0 cy=-50 r=30></circle><circle class=eye cx=-12 cy=-55 r=3></circle><circle class=eye cx=12 cy=-55 r=3></circle><rect class=mouth x=-10 y=-40 width=20 height=5 rx=2></rect><circle cx=0 cy=-10 r=5></circle><circle cx=0 cy=10 r=5></circle></svg><style jsx dynamic>
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
        `);function Mt(){return(()=>{var e=_t(),t=e.firstChild;return O(t,"class",V),e})()}const Ft={name:"Gingerbread",component:Mt,code:`
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
    `};var It=B(`<div><svg width=200 height=200 viewBox="-100 -100 200 200"><polygon points="-65,80 -65,-10 0,-70 65,-10 65,80"></polygon><polyline class=roof points="-75,-5 0,-75 75,-5"></polyline><rect class=door x=-45 y=10 width=30 height=60 rx=2></rect><circle class=door-knob cx=-35 cy=40 r=2></circle><rect class=stair x=-47 y=70 width=34 height=5></rect><rect class=stair x=-49 y=75 width=38 height=5></rect><rect class=window x=5 y=15 width=40 height=35 rx=5></rect><line x1=5 y1=32.5 x2=45 y2=32.5></line><line x1=25 y1=15 x2=25 y2=50></line><rect class=window-sill x=2 y=48 width=46 height=5 rx=5></rect><circle class=window cx=0 cy=-25 r=15></circle><line x1=-15 y1=-25 x2=15 y2=-25></line><line x1=0 y1=-40 x2=0 y2=-10></line></svg><style jsx dynamic>
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
        `);function Nt(){return(()=>{var e=It(),t=e.firstChild;return O(t,"class",V+" house"),e})()}const jt={name:"House",component:Nt,code:`
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
    `};var Gt=B('<div><svg width=200 height=200 viewBox="-100 -100 200 200"><path d="M -70 0 L 70 0 L 30 -50 M 70 0 L 30 50"fill=none stroke=#D1495B stroke-width=25 stroke-linecap=round stroke-linejoin=round>');function Rt(){return(()=>{var e=Gt(),t=e.firstChild;return O(t,"class",V),e})()}const qt={name:"Basic Paths",component:Rt,code:`
    <div>
      <svg class={svgStyle} width="200" height="200" viewBox="-100 -100 200 200">
        <path d="M -70 0 L 70 0 L 30 -50 M 70 0 L 30 50" fill="none" stroke="#D1495B" stroke-width="25" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>
  `};var Ut=B('<div><svg width=200 height=200 viewBox="-100 -100 200 200"><g transform="translate(0 5)"><g><polygon points="0,0 36,-50 0,-100"fill=#EDD8B7></polygon><polygon points="0,0 -36,-50 0,-100"fill=#E5C39C></polygon></g><g transform=rotate(72)><polygon points="0,0 36,-50 0,-100"fill=#EDD8B7></polygon><polygon points="0,0 -36,-50 0,-100"fill=#E5C39C></polygon></g><g transform=rotate(-72)><polygon points="0,0 36,-50 0,-100"fill=#EDD8B7></polygon><polygon points="0,0 -36,-50 0,-100"fill=#E5C39C></polygon></g><g transform=rotate(144)><polygon points="0,0 36,-50 0,-100"fill=#EDD8B7></polygon><polygon points="0,0 -36,-50 0,-100"fill=#E5C39C></polygon></g><g transform=rotate(-144)><polygon points="0,0 36,-50 0,-100"fill=#EDD8B7></polygon><polygon points="0,0 -36,-50 0,-100"fill=#E5C39C>');function Ht(){return(()=>{var e=Ut(),t=e.firstChild;return O(t,"class",V),e})()}const Vt={name:"Star",component:Ht,code:`
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
    `};var Wt=B("<div>nothing"),Kt=B('<pre class=" rounded-xl"><code class=language-html>'),zt=B('<div class=p-3><div class="flex flex-wrap gap-3"></div><div class=mt-8>'),Xt=B('<button class="p-3 rounded-lg shadow-lg border-none bg-slate-200 hover:bg-slate-300 active:bg-slate-400">');const V="boder-r-1 border-slate-500 border-solid";function Yt(){if(ee.length===0)return Wt();let e;const[t,n]=$e(ee[ee.length-1]),s=l=>{n(l)},r=se(()=>{const l=t().code,a=(()=>{var i=Kt(),h=i.firstChild,m=e;return typeof m=="function"?Ie(m,h):e=h,N(h,l),i})();return kt.highlightElement(e),a});return(()=>{var l=zt(),a=l.firstChild,i=a.nextSibling;return N(a,he(tt,{each:ee,children:h=>(()=>{var m=Xt();return m.$$click=()=>s(h),N(m,()=>h.name),m})()})),N(i,he(Et,{get component(){return t().component}}),null),N(i,r,null),l})()}const ee=[Bt,Ot,Ft,jt,qt,Vt];Fe(["click"]);var Jt=B('<div class="w-full h-full overflow-hidden">');function Qt(){return(()=>{var e=Jt();return N(e,Yt),e})()}const Zt=document.getElementById("root");gt(()=>he(Qt,{}),Zt);
