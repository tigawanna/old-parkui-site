const Q=()=>{const e=sessionStorage.getItem("sidebar-scroll");e!==null&&document.querySelector("#sidebar")?.scrollTo({top:parseInt(e,10)})},Z=()=>{const e=document.querySelector("#sidebar");e?.addEventListener("scroll",()=>{sessionStorage.setItem("sidebar-scroll",e?.scrollTop.toString()??"0")})};document.addEventListener("astro:after-swap",Q);document.addEventListener("astro:page-load",Z);const _=()=>{JSON.parse(window.localStorage.getItem("park-ui-color-mode"))==="dark"&&document.documentElement.classList.add("dark")};_();document.addEventListener("astro:after-swap",_);const ee=()=>{document?.getElementById("themeToggle")?.addEventListener("click",()=>{const e=document.documentElement;e.classList.toggle("dark");const t=e.classList.contains("dark")?"dark":"light";window.localStorage.setItem("park-ui-color-mode",JSON.stringify(t))})};document.addEventListener("astro:page-load",ee);const b="data-astro-transition-persist";function te(e){for(const t of document.scripts)for(const n of e.scripts)if(!n.hasAttribute("data-astro-rerun")&&(!t.src&&t.textContent===n.textContent||t.src&&t.type===n.type&&t.src===n.src)){n.dataset.astroExec="";break}}function ne(e){const t=document.documentElement,n=[...t.attributes].filter(({name:o})=>(t.removeAttribute(o),o.startsWith("data-astro-")));[...e.documentElement.attributes,...n].forEach(({name:o,value:r})=>t.setAttribute(o,r))}function oe(e){for(const t of Array.from(document.head.children)){const n=se(t,e);n?n.remove():t.remove()}document.head.append(...e.head.children)}function re(e,t){t.replaceWith(e);for(const n of t.querySelectorAll(`[${b}]`)){const o=n.getAttribute(b),r=e.querySelector(`[${b}="${o}"]`);r&&(r.replaceWith(n),r.localName==="astro-island"&&ae(n)&&(n.setAttribute("ssr",""),n.setAttribute("props",r.getAttribute("props"))))}}const ie=()=>{const e=document.activeElement;if(e?.closest(`[${b}]`)){if(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement){const t=e.selectionStart,n=e.selectionEnd;return()=>k({activeElement:e,start:t,end:n})}return()=>k({activeElement:e})}else return()=>k({activeElement:null})},k=({activeElement:e,start:t,end:n})=>{e&&(e.focus(),(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement)&&(typeof t=="number"&&(e.selectionStart=t),typeof n=="number"&&(e.selectionEnd=n)))},se=(e,t)=>{const n=e.getAttribute(b),o=n&&t.head.querySelector(`[${b}="${n}"]`);if(o)return o;if(e.matches("link[rel=stylesheet]")){const r=e.getAttribute("href");return t.head.querySelector(`link[rel=stylesheet][href="${r}"]`)}return null},ae=e=>{const t=e.dataset.astroTransitionPersistProps;return t==null||t==="false"},ce=e=>{te(e),ne(e),oe(e);const t=ie();re(e.body,document.body),t()},le="astro:before-preparation",ue="astro:after-preparation",de="astro:before-swap",fe="astro:after-swap",me=e=>document.dispatchEvent(new Event(e));class $ extends Event{from;to;direction;navigationType;sourceElement;info;newDocument;signal;constructor(t,n,o,r,s,u,a,c,d,l){super(t,n),this.from=o,this.to=r,this.direction=s,this.navigationType=u,this.sourceElement=a,this.info=c,this.newDocument=d,this.signal=l,Object.defineProperties(this,{from:{enumerable:!0},to:{enumerable:!0,writable:!0},direction:{enumerable:!0,writable:!0},navigationType:{enumerable:!0},sourceElement:{enumerable:!0},info:{enumerable:!0},newDocument:{enumerable:!0,writable:!0},signal:{enumerable:!0}})}}class he extends ${formData;loader;constructor(t,n,o,r,s,u,a,c,d,l){super(le,{cancelable:!0},t,n,o,r,s,u,a,c),this.formData=d,this.loader=l.bind(this,this),Object.defineProperties(this,{formData:{enumerable:!0},loader:{enumerable:!0,writable:!0}})}}class ge extends ${direction;viewTransition;swap;constructor(t,n){super(de,void 0,t.from,t.to,t.direction,t.navigationType,t.sourceElement,t.info,t.newDocument,t.signal),this.direction=t.direction,this.viewTransition=n,this.swap=()=>ce(this.newDocument),Object.defineProperties(this,{direction:{enumerable:!0},viewTransition:{enumerable:!0},swap:{enumerable:!0,writable:!0}})}}async function pe(e,t,n,o,r,s,u,a,c){const d=new he(e,t,n,o,r,s,window.document,u,a,c);return document.dispatchEvent(d)&&(await d.loader(),d.defaultPrevented||(me(ue),d.navigationType!=="traverse"&&P({scrollX,scrollY}))),d}function we(e,t){const n=new ge(e,t);return document.dispatchEvent(n),n.swap(),n}const be=history.pushState.bind(history),T=history.replaceState.bind(history),P=e=>{history.state&&(history.scrollRestoration="manual",T({...history.state,...e},""))},D=!!document.startViewTransition,x=()=>!!document.querySelector('[name="astro-view-transitions-enabled"]'),U=(e,t)=>e.pathname===t.pathname&&e.search===t.search;let f,p,A;const B=e=>document.dispatchEvent(new Event(e)),V=()=>B("astro:page-load"),ye=()=>{let e=document.createElement("div");e.setAttribute("aria-live","assertive"),e.setAttribute("aria-atomic","true"),e.className="astro-route-announcer",document.body.append(e),setTimeout(()=>{let t=document.title||document.querySelector("h1")?.textContent||location.pathname;e.textContent=t},60)},M="data-astro-transition-persist",O="data-astro-transition",R="data-astro-transition-fallback";let H,y=0;history.state?(y=history.state.index,scrollTo({left:history.state.scrollX,top:history.state.scrollY})):x()&&(T({index:y,scrollX,scrollY},""),history.scrollRestoration="manual");async function ve(e,t){try{const n=await fetch(e,t),r=(n.headers.get("content-type")??"").split(";",1)[0].trim();return r!=="text/html"&&r!=="application/xhtml+xml"?null:{html:await n.text(),redirected:n.redirected?n.url:void 0,mediaType:r}}catch{return null}}function W(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function Te(){let e=Promise.resolve();for(const t of Array.from(document.scripts)){if(t.dataset.astroExec==="")continue;const n=t.getAttribute("type");if(n&&n!=="module"&&n!=="text/javascript")continue;const o=document.createElement("script");o.innerHTML=t.innerHTML;for(const r of t.attributes){if(r.name==="src"){const s=new Promise(u=>{o.onload=o.onerror=u});e=e.then(()=>s)}o.setAttribute(r.name,r.value)}o.dataset.astroExec="",t.replaceWith(o)}return e}const j=(e,t,n,o,r)=>{const s=U(t,e),u=document.title;document.title=o;let a=!1;if(e.href!==location.href&&!r)if(n.history==="replace"){const c=history.state;T({...n.state,index:c.index,scrollX:c.scrollX,scrollY:c.scrollY},"",e.href)}else be({...n.state,index:++y,scrollX:0,scrollY:0},"",e.href);if(document.title=u,A=e,s||(scrollTo({left:0,top:0,behavior:"instant"}),a=!0),r)scrollTo(r.scrollX,r.scrollY);else{if(e.hash){history.scrollRestoration="auto";const c=history.state;location.href=e.href,history.state||(T(c,""),s&&window.dispatchEvent(new PopStateEvent("popstate")))}else a||scrollTo({left:0,top:0,behavior:"instant"});history.scrollRestoration="manual"}};function Ee(e){const t=[];for(const n of e.querySelectorAll("head link[rel=stylesheet]"))if(!document.querySelector(`[${M}="${n.getAttribute(M)}"], link[rel=stylesheet][href="${n.getAttribute("href")}"]`)){const o=document.createElement("link");o.setAttribute("rel","preload"),o.setAttribute("as","style"),o.setAttribute("href",n.getAttribute("href")),t.push(new Promise(r=>{["load","error"].forEach(s=>o.addEventListener(s,r)),document.head.append(o)}))}return t}async function C(e,t,n,o,r){async function s(c){function d(h){const m=h.effect;return!m||!(m instanceof KeyframeEffect)||!m.target?!1:window.getComputedStyle(m.target,m.pseudoElement).animationIterationCount==="infinite"}const l=document.getAnimations();document.documentElement.setAttribute(R,c);const g=document.getAnimations().filter(h=>!l.includes(h)&&!d(h));return Promise.allSettled(g.map(h=>h.finished))}if(r==="animate"&&!n.transitionSkipped&&!e.signal.aborted)try{await s("old")}catch{}const u=document.title,a=we(e,n.viewTransition);j(a.to,a.from,t,u,o),B(fe),r==="animate"&&(!n.transitionSkipped&&!a.signal.aborted?s("new").finally(()=>n.viewTransitionFinished()):n.viewTransitionFinished())}function Ae(){return f?.controller.abort(),f={controller:new AbortController}}async function K(e,t,n,o,r){const s=Ae();if(!x()||location.origin!==n.origin){s===f&&(f=void 0),location.href=n.href;return}const u=r?"traverse":o.history==="replace"?"replace":"push";if(u!=="traverse"&&P({scrollX,scrollY}),U(t,n)&&(e!=="back"&&n.hash||e==="back"&&t.hash)){j(n,t,o,document.title,r),s===f&&(f=void 0);return}const a=await pe(t,n,e,u,o.sourceElement,o.info,s.controller.signal,o.formData,c);if(a.defaultPrevented||a.signal.aborted){s===f&&(f=void 0),a.signal.aborted||(location.href=n.href);return}async function c(i){const g=i.to.href,h={signal:i.signal};if(i.formData){h.method="POST";const w=i.sourceElement instanceof HTMLFormElement?i.sourceElement:i.sourceElement instanceof HTMLElement&&"form"in i.sourceElement?i.sourceElement.form:i.sourceElement?.closest("form");h.body=w?.attributes.getNamedItem("enctype")?.value==="application/x-www-form-urlencoded"?new URLSearchParams(i.formData):i.formData}const m=await ve(g,h);if(m===null){i.preventDefault();return}if(m.redirected){const w=new URL(m.redirected);if(w.origin!==i.to.origin){i.preventDefault();return}i.to=w}if(H??=new DOMParser,i.newDocument=H.parseFromString(m.html,m.mediaType),i.newDocument.querySelectorAll("noscript").forEach(w=>w.remove()),!i.newDocument.querySelector('[name="astro-view-transitions-enabled"]')&&!i.formData){i.preventDefault();return}const L=Ee(i.newDocument);L.length&&!i.signal.aborted&&await Promise.all(L)}async function d(){if(p&&p.viewTransition){try{p.viewTransition.skipTransition()}catch{}try{await p.viewTransition.updateCallbackDone}catch{}}return p={transitionSkipped:!1}}const l=await d();if(a.signal.aborted){s===f&&(f=void 0);return}if(document.documentElement.setAttribute(O,a.direction),D)l.viewTransition=document.startViewTransition(async()=>await C(a,o,l,r));else{const i=(async()=>{await Promise.resolve(),await C(a,o,l,r,W())})();l.viewTransition={updateCallbackDone:i,ready:i,finished:new Promise(g=>l.viewTransitionFinished=g),skipTransition:()=>{l.transitionSkipped=!0,document.documentElement.removeAttribute(R)}}}l.viewTransition.updateCallbackDone.finally(async()=>{await Te(),V(),ye()}),l.viewTransition.finished.finally(()=>{l.viewTransition=void 0,l===p&&(p=void 0),s===f&&(f=void 0),document.documentElement.removeAttribute(O),document.documentElement.removeAttribute(R)});try{await l.viewTransition.updateCallbackDone}catch(i){const g=i;console.log("[astro]",g.name,g.message,g.stack)}}async function F(e,t){await K("forward",A,new URL(e,location.href),t??{})}function Se(e){if(!x()&&e.state){location.reload();return}if(e.state===null)return;const t=history.state,n=t.index,o=n>y?"forward":"back";y=n,K(o,A,new URL(location.href),{},t)}const X=()=>{history.state&&(scrollX!==history.state.scrollX||scrollY!==history.state.scrollY)&&P({scrollX,scrollY})};{if(D||W()!=="none")if(A=new URL(location.href),addEventListener("popstate",Se),addEventListener("load",V),"onscrollend"in window)addEventListener("scrollend",X);else{let e,t,n,o;const r=()=>{if(o!==history.state?.index){clearInterval(e),e=void 0;return}if(t===scrollY&&n===scrollX){clearInterval(e),e=void 0,X();return}else t=scrollY,n=scrollX};addEventListener("scroll",()=>{e===void 0&&(o=history.state.index,t=scrollY,n=scrollX,e=window.setInterval(r,50))},{passive:!0})}for(const e of document.scripts)e.dataset.astroExec=""}const J=new Set,E=new WeakSet;let I,G,Y=!1;function Le(e){Y||(Y=!0,I??=e?.prefetchAll??!1,G??=e?.defaultStrategy??"hover",ke(),Re(),Ie(),De())}function ke(){for(const e of["touchstart","mousedown"])document.body.addEventListener(e,t=>{v(t.target,"tap")&&S(t.target.href,{ignoreSlowConnection:!0})},{passive:!0})}function Re(){let e;document.body.addEventListener("focusin",o=>{v(o.target,"hover")&&t(o)},{passive:!0}),document.body.addEventListener("focusout",n,{passive:!0}),N(()=>{for(const o of document.getElementsByTagName("a"))E.has(o)||v(o,"hover")&&(E.add(o),o.addEventListener("mouseenter",t,{passive:!0}),o.addEventListener("mouseleave",n,{passive:!0}))});function t(o){const r=o.target.href;e&&clearTimeout(e),e=setTimeout(()=>{S(r)},80)}function n(){e&&(clearTimeout(e),e=0)}}function Ie(){let e;N(()=>{for(const t of document.getElementsByTagName("a"))E.has(t)||v(t,"viewport")&&(E.add(t),e??=Pe(),e.observe(t))})}function Pe(){const e=new WeakMap;return new IntersectionObserver((t,n)=>{for(const o of t){const r=o.target,s=e.get(r);o.isIntersecting?(s&&clearTimeout(s),e.set(r,setTimeout(()=>{n.unobserve(r),e.delete(r),S(r.href)},300))):s&&(clearTimeout(s),e.delete(r))}})}function De(){N(()=>{for(const e of document.getElementsByTagName("a"))v(e,"load")&&S(e.href)})}function S(e,t){const n=t?.ignoreSlowConnection??!1;if(xe(e,n))if(J.add(e),document.createElement("link").relList?.supports?.("prefetch")&&t?.with!=="fetch"){const o=document.createElement("link");o.rel="prefetch",o.setAttribute("href",e),document.head.append(o)}else fetch(e,{priority:"low"})}function xe(e,t){if(!navigator.onLine||!t&&z())return!1;try{const n=new URL(e,location.href);return location.origin===n.origin&&(location.pathname!==n.pathname||location.search!==n.search)&&!J.has(e)}catch{}return!1}function v(e,t){if(e?.tagName!=="A")return!1;const n=e.dataset.astroPrefetch;return n==="false"?!1:t==="tap"&&(n!=null||I)&&z()?!0:n==null&&I||n===""?t===G:n===t}function z(){if("connection"in navigator){const e=navigator.connection;return e.saveData||/2g/.test(e.effectiveType)}return!1}function N(e){e();let t=!1;document.addEventListener("astro:page-load",()=>{if(!t){t=!0;return}e()})}function Ne(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function q(e){return e.dataset.astroReload!==void 0}(D||Ne()!=="none")&&(document.addEventListener("click",e=>{let t=e.target;if(e.composed&&(t=e.composedPath()[0]),t instanceof Element&&(t=t.closest("a, area")),!(t instanceof HTMLAnchorElement)&&!(t instanceof SVGAElement)&&!(t instanceof HTMLAreaElement))return;const n=t instanceof HTMLElement?t.target:t.target.baseVal,o=t instanceof HTMLElement?t.href:t.href.baseVal,r=new URL(o,location.href).origin;q(t)||t.hasAttribute("download")||!t.href||n&&n!=="_self"||r!==location.origin||e.button!==0||e.metaKey||e.ctrlKey||e.altKey||e.shiftKey||e.defaultPrevented||(e.preventDefault(),F(o,{history:t.dataset.astroHistory==="replace"?"replace":"auto",sourceElement:t}))}),document.addEventListener("submit",e=>{let t=e.target;if(t.tagName!=="FORM"||e.defaultPrevented||q(t))return;const n=t,o=e.submitter,r=new FormData(n,o),s=typeof n.action=="string"?n.action:n.getAttribute("action"),u=typeof n.method=="string"?n.method:n.getAttribute("method");let a=o?.getAttribute("formaction")??s??location.pathname;const c=o?.getAttribute("formmethod")??u??"get";if(c==="dialog"||location.origin!==new URL(a,location.href).origin)return;const d={sourceElement:o??n};if(c==="get"){const l=new URLSearchParams(r),i=new URL(a);i.search=l.toString(),a=i.toString()}else d.formData=r;e.preventDefault(),F(a,d)}),Le({prefetchAll:!0}));
