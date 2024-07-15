import{v as b,w as f,x as j,t as O,y as h,z as _}from"./tree-view.D9ir_m6l.js";import{c as y}from"./createLucideIcon.JrDgDZkW.js";const d=(s,e)=>s+"__"+e;function V(s){const e=Object.entries(b(s)).map(([t,a])=>[t,f(a)]),i=s.defaultVariants??{};function m(t){const a=e.map(([r,n])=>[r,_(n(t),s.className&&d(s.className,r))]);return Object.fromEntries(a)}function p(t){const a=e.map(([r,n])=>[r,n.raw(t)]);return Object.fromEntries(a)}const c=s.variants??{},o=Object.keys(c);function u(t){return O(t,o)}const l=t=>({...i||{},...h(t)}),v=Object.fromEntries(Object.entries(c).map(([t,a])=>[t,Object.keys(a)]));return Object.assign(j(m),{__cva__:!1,raw:p,variantMap:v,variantKeys:o,splitVariantProps:u,getVariantProps:l})}/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=y("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);export{k as C,V as s};
