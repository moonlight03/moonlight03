import{S as L,i as M,s as Q,c as W,e as _,t as O,a as C,b as v,d as m,f as P,g as T,h as p,j as s,k as H,l as X,m as Y,n as i,o as R,p as q,u as Z,q as ee,r as te,v as se,w as ae,x as le,y as re,z as oe}from"./index.UuyVxFRO.js";import{i as A,I as F}from"./translation.DcLDuz_l.js";import{g as ne,a as G,s as ie}from"./setting-utils.CbXfF2lc.js";const ue=e=>({}),J=e=>({});function ce(e){let a,t,l,r,o,c,n,d,b,f,u,h,x,g,k,$,y,D=A(F.themeColor)+"";const w=e[4]["restore-icon"],I=W(w,e,e[3],J);return{c(){a=_("div"),t=_("div"),l=_("div"),r=O(D),o=C(),c=_("button"),n=_("div"),I&&I.c(),d=C(),b=_("div"),f=_("div"),u=O(e[0]),h=C(),x=_("div"),g=_("input"),this.h()},l(s){a=v(s,"DIV",{id:!0,class:!0});var i=m(a);t=v(i,"DIV",{class:!0});var k=m(t);l=v(k,"DIV",{class:!0});var _=m(l);r=P(_,D),o=T(_),c=v(_,"BUTTON",{"aria-label":!0,class:!0});var $=m(c);n=v($,"DIV",{class:!0});var y=m(n);I&&I.l(y),y.forEach(p),$.forEach(p),_.forEach(p),d=T(k),b=v(k,"DIV",{class:!0});var w=m(b);f=v(w,"DIV",{id:!0,class:!0});var V=m(f);u=P(V,e[0]),V.forEach(p),w.forEach(p),k.forEach(p),h=T(i),x=v(i,"DIV",{class:!0});var E=m(x);g=v(E,"INPUT",{"aria-label":!0,type:!0,min:!0,max:!0,class:!0,id:!0,step:!0,style:!0}),E.forEach(p),i.forEach(p),this.h()},h(){s(n,"class","text-[var(--btn-content)] svelte-3akcb9"),s(c,"aria-label","Reset to Default"),s(c,"class","btn-regular w-7 h-7 rounded-md active:scale-90 svelte-3akcb9"),H(c,"opacity-0",e[0]===e[1]),H(c,"pointer-events-none",e[0]===e[1]),s(l,"class","flex gap-2 font-bold text-lg text-neutral-900 dark:text-neutral-100 transition relative ml-3 before:w-1 before:h-4 before:rounded-md before:bg-[var(--primary)] before:absolute before:-left-3 before:top-[0.33rem] svelte-3akcb9"),s(f,"id","hueValue"),s(f,"class","transition bg-[var(--btn-regular-bg)] w-10 h-7 rounded-md flex justify-center font-bold text-sm items-center text-[var(--btn-content)] svelte-3akcb9"),s(b,"class","flex gap-1 svelte-3akcb9"),s(t,"class","flex flex-row gap-2 mb-3 items-center justify-between svelte-3akcb9"),s(g,"aria-label",A(F.themeColor)),s(g,"type","range"),s(g,"min","0"),s(g,"max","360"),s(g,"class","slider svelte-3akcb9"),s(g,"id","colorSlider"),s(g,"step","5"),X(g,"width","100%"),s(x,"class","w-full h-6 px-1 bg-[oklch(0.80_0.10_0)] dark:bg-[oklch(0.70_0.10_0)] rounded select-none svelte-3akcb9"),s(a,"id","display-setting"),s(a,"class","float-panel float-panel-closed absolute transition-all w-80 right-4 px-4 py-4 svelte-3akcb9")},m(s,v){Y(s,a,v),i(a,t),i(t,l),i(l,r),i(l,o),i(l,c),i(c,n),I&&I.m(n,null),i(t,d),i(t,b),i(b,f),i(f,u),i(a,h),i(a,x),i(x,g),R(g,e[0]),k=!0,$||(y=[q(c,"click",e[2]),q(g,"change",e[5]),q(g,"input",e[5])],$=!0)},p(e,[s]){I&&I.p&&(!k||8&s)&&Z(I,w,e,e[3],k?te(w,e[3],s,ue):ee(e[3]),J),(!k||3&s)&&H(c,"opacity-0",e[0]===e[1]),(!k||3&s)&&H(c,"pointer-events-none",e[0]===e[1]),(!k||1&s)&&se(u,e[0]),1&s&&R(g,e[0])},i(e){k||(ae(I,e),k=!0)},o(e){le(I,e),k=!1},d(e){e&&p(a),I&&I.d(e),$=!1,re(y)}}}function de(e,s,a){let{$$slots:t={},$$scope:l}=s,r=ne();const i=G();return e.$$set=e=>{"$$scope"in e&&a(3,l=e.$$scope)},e.$$.update=()=>{1&e.$$.dirty&&(r||0===r)&&ie(r)},[r,i,function(){a(0,r=G())},l,t,function(){r=oe(this.value),a(0,r)}]}class be extends L{constructor(e){super(),M(this,e,de,ce,Q,{})}}export{be as default};