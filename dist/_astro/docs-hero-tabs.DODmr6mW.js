import{r as p,s as x,t as m,u,j as e,A as f,D as g,E as a,F as h}from"./tree-view.D9ir_m6l.js";import{r as n}from"./index.B1Zo4ZAB.js";const o={transform(t){return{position:"relative",width:"100%",mx:"auto",px:{base:"4",md:"6"},...t}}},j=(t={})=>{const r=p(o,t);return o.transform(r,x)},P=n.forwardRef(function(r,s){const[i,c]=m(r,[]),l=j(i),d={ref:s,...l,...c};return n.createElement(u.div,d)}),w=t=>{const{pathname:r,value:s}=t;return e.jsx(P,{maxW:"66rem",children:e.jsx(f,{value:s,size:"lg",variant:"outline",children:e.jsxs(g,{children:[e.jsx(a,{value:"panda",_selected:{bg:"bg.surface"},children:e.jsx("a",{href:r.replace("tailwind","panda"),children:"Panda"})}),e.jsx(a,{value:"tailwind",_selected:{bg:"bg.surface"},children:e.jsx("a",{href:r.replace("panda","tailwind"),children:"Tailwind"})}),e.jsx(h,{})]})})})};export{w as DocsHeroTabs};