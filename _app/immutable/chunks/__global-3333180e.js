import{S as De,i as Ce,s as Me,l as F,a as V,r as W,J as Dr,m as g,c as K,n as _,u as Z,h as d,K as Cr,p as E,L as dr,b as R,M as w,T as ar,U as Le,g as Se,t as qr,d as Re,f as Qr,G as ke,N as zr,o as Ne,E as tr,V as be,v as Hr,e as Ae,W as Be,w as Ve,x as Ke,y as He,X as We,B as Ze}from"./index-fb7dfbfc.js";import{t as jr,s as Oe,a as ze,J as Xr,d as Jr,b as Je,u as Fe}from"./Jazzicon-8eb1fd50.js";import{w as Kr,s as ge}from"./formatter-0f9ca4a3.js";import{w as Pe}from"./index-3f0ac7e6.js";import{W as Pr}from"./index-a4da90d9.js";function Ye(s){let o,h,v,p;return{c(){o=F("button"),h=W("Logout"),this.h()},l(c){o=g(c,"BUTTON",{class:!0});var u=_(o);h=Z(u,"Logout"),u.forEach(d),this.h()},h(){E(o,"class","btn btn-primary mt-4 normal-case w-40")},m(c,u){R(c,o,u),w(o,h),v||(p=ar(o,"click",s[13]),v=!0)},p:tr,d(c){c&&d(o),v=!1,p()}}}function Xe(s){let o,h,v,p,c,u,n,y,x,I,B,T,b,M;return{c(){o=F("div"),h=F("label"),v=F("span"),p=W("Private key"),c=V(),u=F("input"),n=V(),y=F("button"),x=W("Import wallet"),I=V(),B=F("p"),T=W(s[4]),this.h()},l(A){o=g(A,"DIV",{class:!0});var m=_(o);h=g(m,"LABEL",{for:!0,class:!0});var C=_(h);v=g(C,"SPAN",{class:!0});var z=_(v);p=Z(z,"Private key"),z.forEach(d),C.forEach(d),c=K(m),u=g(m,"INPUT",{id:!0,type:!0,placeholder:!0,class:!0}),m.forEach(d),n=K(A),y=g(A,"BUTTON",{class:!0});var J=_(y);x=Z(J,"Import wallet"),J.forEach(d),I=K(A),B=g(A,"P",{class:!0});var j=_(B);T=Z(j,s[4]),j.forEach(d),this.h()},h(){E(v,"class",""),E(h,"for","privateKey"),E(h,"class","label"),E(u,"id","privateKey"),E(u,"type","text"),E(u,"placeholder","Type here"),E(u,"class","input input-bordered w-full max-w-xs"),E(o,"class","form-control w-full max-w-xs mt-2"),E(y,"class","btn btn-primary mt-4 normal-case"),E(B,"class","text-error mt-2")},m(A,m){R(A,o,m),w(o,h),w(h,v),w(v,p),w(o,c),w(o,u),be(u,s[3]),R(A,n,m),R(A,y,m),w(y,x),R(A,I,m),R(A,B,m),w(B,T),b||(M=[ar(u,"input",s[19]),ar(y,"click",s[14])],b=!0)},p(A,m){m&8&&u.value!==A[3]&&be(u,A[3]),m&16&&Hr(T,A[4])},d(A){A&&d(o),A&&d(n),A&&d(y),A&&d(I),A&&d(B),b=!1,ke(M)}}}function Ge(s){let o,h,v,p,c,u,n=s[6]&&Ie(s);return{c(){o=F("button"),h=W("Create new wallet"),v=V(),n&&n.c(),p=Ae(),this.h()},l(y){o=g(y,"BUTTON",{class:!0});var x=_(o);h=Z(x,"Create new wallet"),x.forEach(d),v=K(y),n&&n.l(y),p=Ae(),this.h()},h(){E(o,"class","btn btn-primary mt-4 normal-case")},m(y,x){R(y,o,x),w(o,h),R(y,v,x),n&&n.m(y,x),R(y,p,x),c||(u=ar(o,"click",s[12]),c=!0)},p(y,x){y[6]?n?n.p(y,x):(n=Ie(y),n.c(),n.m(p.parentNode,p)):n&&(n.d(1),n=null)},d(y){y&&d(o),y&&d(v),n&&n.d(y),y&&d(p),c=!1,u()}}}function Ie(s){var A;let o,h,v,p,c,u,n,y,x,I,B,T,b=((A=s[6])==null?void 0:A.privateKey)+"",M;return{c(){o=F("h3"),h=W("Address"),v=V(),p=F("div"),c=F("div"),u=W(s[7]),n=V(),y=F("h3"),x=W("Private key"),I=V(),B=F("div"),T=F("div"),M=W(b),this.h()},l(m){o=g(m,"H3",{class:!0});var C=_(o);h=Z(C,"Address"),C.forEach(d),v=K(m),p=g(m,"DIV",{class:!0});var z=_(p);c=g(z,"DIV",{});var J=_(c);u=Z(J,s[7]),J.forEach(d),z.forEach(d),n=K(m),y=g(m,"H3",{class:!0});var j=_(y);x=Z(j,"Private key"),j.forEach(d),I=K(m),B=g(m,"DIV",{class:!0});var $=_(B);T=g($,"DIV",{});var or=_(T);M=Z(or,b),or.forEach(d),$.forEach(d),this.h()},h(){E(o,"class","font-bold mt-2"),E(p,"class","overflow-x-scroll"),E(y,"class","font-bold mt-2"),E(B,"class","overflow-x-scroll")},m(m,C){R(m,o,C),w(o,h),R(m,v,C),R(m,p,C),w(p,c),w(c,u),R(m,n,C),R(m,y,C),w(y,x),R(m,I,C),R(m,B,C),w(B,T),w(T,M)},p(m,C){var z;C&128&&Hr(u,m[7]),C&64&&b!==(b=((z=m[6])==null?void 0:z.privateKey)+"")&&Hr(M,b)},d(m){m&&d(o),m&&d(v),m&&d(p),m&&d(n),m&&d(y),m&&d(I),m&&d(B)}}}function qe(s){let o,h,v,p;return{c(){o=F("button"),h=W("Create / Import Wallet"),this.h()},l(c){o=g(c,"BUTTON",{class:!0});var u=_(o);h=Z(u,"Create / Import Wallet"),u.forEach(d),this.h()},h(){E(o,"class","btn btn-primary btn-sm btn-outline")},m(c,u){R(c,o,u),w(o,h),v||(p=ar(o,"click",s[10]),v=!0)},p:tr,i:tr,o:tr,d(c){c&&d(o),v=!1,p()}}}function Qe(s){let o,h,v,p,c,u=ge(s[7])+"",n,y,x,I,B,T,b={ctx:s,current:null,token:null,hasCatch:!1,pending:rt,then:$e,catch:je,value:21};return Be(h=s[5],b),x=new Je({props:{size:"18"}}),{c(){o=F("div"),b.block.c(),v=V(),p=F("button"),c=F("div"),n=W(u),y=V(),Ve(x.$$.fragment),this.h()},l(M){o=g(M,"DIV",{class:!0});var A=_(o);b.block.l(A),v=K(A),p=g(A,"BUTTON",{class:!0});var m=_(p);c=g(m,"DIV",{});var C=_(c);n=Z(C,u),C.forEach(d),y=K(m),Ke(x.$$.fragment,m),m.forEach(d),A.forEach(d),this.h()},h(){E(p,"class","btn btn-ghost btn-sm normal-case bg-base-100 rounded-xl gap-2"),E(o,"class","bg-base-200 p-0.5 rounded-xl")},m(M,A){R(M,o,A),b.block.m(o,b.anchor=null),b.mount=()=>o,b.anchor=v,w(o,v),w(o,p),w(p,c),w(c,n),w(p,y),He(x,p,null),I=!0,B||(T=ar(p,"click",s[10]),B=!0)},p(M,A){s=M,b.ctx=s,A&32&&h!==(h=s[5])&&Be(h,b)||We(b,s,A),(!I||A&128)&&u!==(u=ge(s[7])+"")&&Hr(n,u)},i(M){I||(Qr(x.$$.fragment,M),I=!0)},o(M){qr(x.$$.fragment,M),I=!1},d(M){M&&d(o),b.block.d(),b.token=null,b=null,Ze(x),B=!1,T()}}}function je(s){return{c:tr,l:tr,m:tr,p:tr,d:tr}}function $e(s){let o,h=Number((+Fe.formatEther(s[21])).toFixed(4))+"",v,p;return{c(){o=F("div"),v=W(h),p=W(" ETH"),this.h()},l(c){o=g(c,"DIV",{class:!0});var u=_(o);v=Z(u,h),p=Z(u," ETH"),u.forEach(d),this.h()},h(){E(o,"class","mx-2")},m(c,u){R(c,o,u),w(o,v),w(o,p)},p(c,u){u&32&&h!==(h=Number((+Fe.formatEther(c[21])).toFixed(4))+"")&&Hr(v,h)},d(c){c&&d(o)}}}function rt(s){return{c:tr,l:tr,m:tr,p:tr,d:tr}}function et(s){let o,h,v,p,c,u,n,y,x,I,B,T,b,M,A,m,C,z,J,j,$,or,lr,N,q,X,rr,Ir,fr,hr,ir,cr,Lr,Q,Br,Er,H,G,xr,yr,kr,Sr,Fr,pr,Rr,Nr,_r,ur,er,gr,mr,t,r,e,i,a,l,f,U,D,L,P;function S(k,O){if(k[2]===0)return Ge;if(k[2]===1)return Xe;if(k[2]===2)return Ye}let sr=S(s),Y=sr&&sr(s);const Vr=[Qe,qe],br=[];function re(k,O){return k[7]?0:1}return X=re(s),rr=br[X]=Vr[X](s),{c(){o=F("input"),h=V(),v=F("div"),p=F("div"),c=F("div"),u=F("div"),n=W("Create"),y=V(),x=F("div"),I=W("Import"),B=V(),T=F("div"),b=W("Logout"),M=V(),Y&&Y.c(),A=V(),m=F("header"),C=F("div"),z=F("button"),J=F("a"),j=F("div"),$=W("\u6851"),or=V(),lr=F("div"),N=W("Kuwa Coin"),q=V(),rr.c(),Ir=V(),fr=F("div"),hr=F("div"),ir=Dr("svg"),cr=Dr("path"),Lr=V(),Q=F("ul"),Br=F("li"),Er=F("a"),H=W("Data"),G=V(),xr=F("li"),yr=F("a"),kr=W("Debug"),Sr=V(),Fr=F("li"),pr=F("a"),Rr=W("Buy & Sell"),Nr=V(),_r=F("li"),ur=F("a"),er=W("Developer"),gr=V(),mr=F("li"),t=F("div"),r=Dr("svg"),e=Dr("path"),i=V(),a=F("div"),l=Dr("svg"),f=Dr("path"),this.h()},l(k){o=g(k,"INPUT",{type:!0,id:!0,class:!0}),h=K(k),v=g(k,"DIV",{class:!0});var O=_(v);p=g(O,"DIV",{class:!0});var Ar=_(p);c=g(Ar,"DIV",{class:!0});var Ur=_(c);u=g(Ur,"DIV",{class:!0});var ee=_(u);n=Z(ee,"Create"),ee.forEach(d),y=K(Ur),x=g(Ur,"DIV",{class:!0});var te=_(x);I=Z(te,"Import"),te.forEach(d),B=K(Ur),T=g(Ur,"DIV",{class:!0});var ie=_(T);b=Z(ie,"Logout"),ie.forEach(d),Ur.forEach(d),M=K(Ar),Y&&Y.l(Ar),Ar.forEach(d),O.forEach(d),A=K(k),m=g(k,"HEADER",{class:!0});var Tr=_(m);C=g(Tr,"DIV",{class:!0});var ne=_(C);z=g(ne,"BUTTON",{class:!0});var ae=_(z);J=g(ae,"A",{href:!0});var Wr=_(J);j=g(Wr,"DIV",{class:!0});var oe=_(j);$=Z(oe,"\u6851"),oe.forEach(d),or=K(Wr),lr=g(Wr,"DIV",{class:!0});var le=_(lr);N=Z(le,"Kuwa Coin"),le.forEach(d),Wr.forEach(d),ae.forEach(d),ne.forEach(d),q=K(Tr),rr.l(Tr),Ir=K(Tr),fr=g(Tr,"DIV",{class:!0});var Zr=_(fr);hr=g(Zr,"DIV",{tabindex:!0,class:!0});var ue=_(hr);ir=Cr(ue,"svg",{xmlns:!0,class:!0,fill:!0,viewBox:!0,stroke:!0});var se=_(ir);cr=Cr(se,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0}),_(cr).forEach(d),se.forEach(d),ue.forEach(d),Lr=K(Zr),Q=g(Zr,"UL",{tabindex:!0,class:!0});var wr=_(Q);Br=g(wr,"LI",{});var fe=_(Br);Er=g(fe,"A",{href:!0});var he=_(Er);H=Z(he,"Data"),he.forEach(d),fe.forEach(d),G=K(wr),xr=g(wr,"LI",{});var ce=_(xr);yr=g(ce,"A",{href:!0});var pe=_(yr);kr=Z(pe,"Debug"),pe.forEach(d),ce.forEach(d),Sr=K(wr),Fr=g(wr,"LI",{});var we=_(Fr);pr=g(we,"A",{href:!0});var de=_(pr);Rr=Z(de,"Buy & Sell"),de.forEach(d),we.forEach(d),Nr=K(wr),_r=g(wr,"LI",{});var ve=_(_r);ur=g(ve,"A",{href:!0});var ye=_(ur);er=Z(ye,"Developer"),ye.forEach(d),ve.forEach(d),gr=K(wr),mr=g(wr,"LI",{});var Or=_(mr);t=g(Or,"DIV",{});var me=_(t);r=Cr(me,"svg",{class:!0,xmlns:!0,viewBox:!0});var Ee=_(r);e=Cr(Ee,"path",{d:!0}),_(e).forEach(d),Ee.forEach(d),me.forEach(d),i=K(Or),a=g(Or,"DIV",{});var xe=_(a);l=Cr(xe,"svg",{class:!0,xmlns:!0,viewBox:!0});var _e=_(l);f=Cr(_e,"path",{d:!0}),_(f).forEach(d),_e.forEach(d),xe.forEach(d),Or.forEach(d),wr.forEach(d),Zr.forEach(d),Tr.forEach(d),this.h()},h(){E(o,"type","checkbox"),E(o,"id","my-modal"),E(o,"class","modal-toggle"),o.checked=s[1],E(u,"class","tab tab-lifted"),dr(u,"tab-active",s[2]===0),E(x,"class","tab tab-lifted"),dr(x,"tab-active",s[2]===1),E(T,"class","tab tab-lifted"),dr(T,"tab-active",s[2]===2),E(c,"class","tabs"),E(p,"class","modal-box max-w-md"),E(v,"class","modal not-prose"),E(j,"class","sm:hidden"),E(lr,"class","hidden sm:block"),E(J,"href",Kr("/")),E(z,"class","btn btn-ghost text-xl normal-case not-prose"),E(C,"class","flex-1"),E(cr,"stroke-linecap","round"),E(cr,"stroke-linejoin","round"),E(cr,"stroke-width","2"),E(cr,"d","M4 6h16M4 12h16M4 18h16"),E(ir,"xmlns","http://www.w3.org/2000/svg"),E(ir,"class","w-8 h-8"),E(ir,"fill","none"),E(ir,"viewBox","0 0 24 24"),E(ir,"stroke","currentColor"),E(hr,"tabindex","0"),E(hr,"class","btn btn-ghost px-2"),E(Er,"href",Kr("/data")),E(yr,"href",Kr("/debug")),E(pr,"href",Kr("/buy-sell")),E(ur,"href",Kr("/blog/developer")),E(e,"d","M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"),E(r,"class","fill-current w-6 h-6"),E(r,"xmlns","http://www.w3.org/2000/svg"),E(r,"viewBox","0 0 24 24"),dr(t,"hidden",s[8]==="dark"),E(f,"d","M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"),E(l,"class","fill-current w-6 h-6"),E(l,"xmlns","http://www.w3.org/2000/svg"),E(l,"viewBox","0 0 24 24"),dr(a,"hidden",s[8]!=="dark"),E(Q,"tabindex","0"),E(Q,"class","dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"),E(fr,"class","dropdown dropdown-end not-prose"),E(m,"class",U=`navbar shadow bg-base-100 gap-2 ${s[0]}`)},m(k,O){R(k,o,O),R(k,h,O),R(k,v,O),w(v,p),w(p,c),w(c,u),w(u,n),w(c,y),w(c,x),w(x,I),w(c,B),w(c,T),w(T,b),w(p,M),Y&&Y.m(p,null),R(k,A,O),R(k,m,O),w(m,C),w(C,z),w(z,J),w(J,j),w(j,$),w(J,or),w(J,lr),w(lr,N),w(m,q),br[X].m(m,null),w(m,Ir),w(m,fr),w(fr,hr),w(hr,ir),w(ir,cr),w(fr,Lr),w(fr,Q),w(Q,Br),w(Br,Er),w(Er,H),w(Q,G),w(Q,xr),w(xr,yr),w(yr,kr),w(Q,Sr),w(Q,Fr),w(Fr,pr),w(pr,Rr),w(Q,Nr),w(Q,_r),w(_r,ur),w(ur,er),w(Q,gr),w(Q,mr),w(mr,t),w(t,r),w(r,e),w(mr,i),w(mr,a),w(a,l),w(l,f),D=!0,L||(P=[ar(u,"click",s[16]),ar(x,"click",s[17]),ar(T,"click",s[18]),ar(v,"click",Le(s[11])),ar(t,"click",jr.setDark),ar(a,"click",jr.setLight)],L=!0)},p(k,[O]){(!D||O&2)&&(o.checked=k[1]),O&4&&dr(u,"tab-active",k[2]===0),O&4&&dr(x,"tab-active",k[2]===1),O&4&&dr(T,"tab-active",k[2]===2),sr===(sr=S(k))&&Y?Y.p(k,O):(Y&&Y.d(1),Y=sr&&sr(k),Y&&(Y.c(),Y.m(p,null)));let Ar=X;X=re(k),X===Ar?br[X].p(k,O):(Se(),qr(br[Ar],1,1,()=>{br[Ar]=null}),Re(),rr=br[X],rr?rr.p(k,O):(rr=br[X]=Vr[X](k),rr.c()),Qr(rr,1),rr.m(m,Ir)),O&256&&dr(t,"hidden",k[8]==="dark"),O&256&&dr(a,"hidden",k[8]!=="dark"),(!D||O&1&&U!==(U=`navbar shadow bg-base-100 gap-2 ${k[0]}`))&&E(m,"class",U)},i(k){D||(Qr(rr),D=!0)},o(k){qr(rr),D=!1},d(k){k&&d(o),k&&d(h),k&&d(v),Y&&Y.d(),k&&d(A),k&&d(m),br[X].d(),L=!1,ke(P)}}}function tt(s,o,h){let v,p,c,u,n;zr(s,Oe,N=>h(15,p=N)),zr(s,ze,N=>h(7,u=N)),zr(s,jr,N=>h(8,n=N));let{class:y=""}=o,x=!1,I=0,B="",T="";const b=Pe();zr(s,b,N=>h(6,c=N));async function M(){h(1,x=!0)}async function A(){h(1,x=!1)}async function m(){const N=Pr.createRandom();localStorage.privateKey=N.privateKey;const q=new Xr,X=new Pr(N.privateKey,q);b.set(X),Jr.setProvider(X.provider,X.address)}function C(){Jr.disconnect(),b.set(void 0),localStorage.removeItem("privateKey")}function z(){h(4,T="");const N=new Xr;try{const q=new Pr(B,N);b.set(q),localStorage.privateKey=q.privateKey,Jr.setProvider(q.provider,q.address)}catch{h(4,T="Invalid private key")}}async function J(){if(!localStorage.privateKey)return;const N=new Xr,q=new Pr(localStorage.privateKey,N);b.set(q),Jr.setProvider(q.provider,q.address)}Ne(()=>{J()});const j=()=>{h(2,I=0)},$=()=>{h(2,I=1)},or=()=>{h(2,I=2)};function lr(){B=this.value,h(3,B)}return s.$$set=N=>{"class"in N&&h(0,y=N.class)},s.$$.update=()=>{s.$$.dirty&32768&&h(5,v=p&&p.getBalance())},[y,x,I,B,T,v,c,u,n,b,M,A,m,C,z,p,j,$,or,lr]}class vt extends De{constructor(o){super(),Ce(this,o,tt,et,Me,{class:0})}}var Ue={},Yr={};Yr.byteLength=at;Yr.toByteArray=lt;Yr.fromByteArray=ft;var vr=[],nr=[],it=typeof Uint8Array<"u"?Uint8Array:Array,Gr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var Mr=0,nt=Gr.length;Mr<nt;++Mr)vr[Mr]=Gr[Mr],nr[Gr.charCodeAt(Mr)]=Mr;nr["-".charCodeAt(0)]=62;nr["_".charCodeAt(0)]=63;function Te(s){var o=s.length;if(o%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var h=s.indexOf("=");h===-1&&(h=o);var v=h===o?0:4-h%4;return[h,v]}function at(s){var o=Te(s),h=o[0],v=o[1];return(h+v)*3/4-v}function ot(s,o,h){return(o+h)*3/4-h}function lt(s){var o,h=Te(s),v=h[0],p=h[1],c=new it(ot(s,v,p)),u=0,n=p>0?v-4:v,y;for(y=0;y<n;y+=4)o=nr[s.charCodeAt(y)]<<18|nr[s.charCodeAt(y+1)]<<12|nr[s.charCodeAt(y+2)]<<6|nr[s.charCodeAt(y+3)],c[u++]=o>>16&255,c[u++]=o>>8&255,c[u++]=o&255;return p===2&&(o=nr[s.charCodeAt(y)]<<2|nr[s.charCodeAt(y+1)]>>4,c[u++]=o&255),p===1&&(o=nr[s.charCodeAt(y)]<<10|nr[s.charCodeAt(y+1)]<<4|nr[s.charCodeAt(y+2)]>>2,c[u++]=o>>8&255,c[u++]=o&255),c}function ut(s){return vr[s>>18&63]+vr[s>>12&63]+vr[s>>6&63]+vr[s&63]}function st(s,o,h){for(var v,p=[],c=o;c<h;c+=3)v=(s[c]<<16&16711680)+(s[c+1]<<8&65280)+(s[c+2]&255),p.push(ut(v));return p.join("")}function ft(s){for(var o,h=s.length,v=h%3,p=[],c=16383,u=0,n=h-v;u<n;u+=c)p.push(st(s,u,u+c>n?n:u+c));return v===1?(o=s[h-1],p.push(vr[o>>2]+vr[o<<4&63]+"==")):v===2&&(o=(s[h-2]<<8)+s[h-1],p.push(vr[o>>10]+vr[o>>4&63]+vr[o<<2&63]+"=")),p.join("")}var $r={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */$r.read=function(s,o,h,v,p){var c,u,n=p*8-v-1,y=(1<<n)-1,x=y>>1,I=-7,B=h?p-1:0,T=h?-1:1,b=s[o+B];for(B+=T,c=b&(1<<-I)-1,b>>=-I,I+=n;I>0;c=c*256+s[o+B],B+=T,I-=8);for(u=c&(1<<-I)-1,c>>=-I,I+=v;I>0;u=u*256+s[o+B],B+=T,I-=8);if(c===0)c=1-x;else{if(c===y)return u?NaN:(b?-1:1)*(1/0);u=u+Math.pow(2,v),c=c-x}return(b?-1:1)*u*Math.pow(2,c-v)};$r.write=function(s,o,h,v,p,c){var u,n,y,x=c*8-p-1,I=(1<<x)-1,B=I>>1,T=p===23?Math.pow(2,-24)-Math.pow(2,-77):0,b=v?0:c-1,M=v?1:-1,A=o<0||o===0&&1/o<0?1:0;for(o=Math.abs(o),isNaN(o)||o===1/0?(n=isNaN(o)?1:0,u=I):(u=Math.floor(Math.log(o)/Math.LN2),o*(y=Math.pow(2,-u))<1&&(u--,y*=2),u+B>=1?o+=T/y:o+=T*Math.pow(2,1-B),o*y>=2&&(u++,y/=2),u+B>=I?(n=0,u=I):u+B>=1?(n=(o*y-1)*Math.pow(2,p),u=u+B):(n=o*Math.pow(2,B-1)*Math.pow(2,p),u=0));p>=8;s[h+b]=n&255,b+=M,n/=256,p-=8);for(u=u<<p|n,x+=p;x>0;s[h+b]=u&255,b+=M,u/=256,x-=8);s[h+b-M]|=A*128};/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */(function(s){var o=Yr,h=$r,v=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;s.Buffer=n,s.SlowBuffer=z,s.INSPECT_MAX_BYTES=50;var p=2147483647;s.kMaxLength=p,n.TYPED_ARRAY_SUPPORT=c(),!n.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function c(){try{var t=new Uint8Array(1),r={foo:function(){return 42}};return Object.setPrototypeOf(r,Uint8Array.prototype),Object.setPrototypeOf(t,r),t.foo()===42}catch{return!1}}Object.defineProperty(n.prototype,"parent",{enumerable:!0,get:function(){if(!!n.isBuffer(this))return this.buffer}}),Object.defineProperty(n.prototype,"offset",{enumerable:!0,get:function(){if(!!n.isBuffer(this))return this.byteOffset}});function u(t){if(t>p)throw new RangeError('The value "'+t+'" is invalid for option "size"');var r=new Uint8Array(t);return Object.setPrototypeOf(r,n.prototype),r}function n(t,r,e){if(typeof t=="number"){if(typeof r=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return B(t)}return y(t,r,e)}n.poolSize=8192;function y(t,r,e){if(typeof t=="string")return T(t,r);if(ArrayBuffer.isView(t))return M(t);if(t==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(er(t,ArrayBuffer)||t&&er(t.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(er(t,SharedArrayBuffer)||t&&er(t.buffer,SharedArrayBuffer)))return A(t,r,e);if(typeof t=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var i=t.valueOf&&t.valueOf();if(i!=null&&i!==t)return n.from(i,r,e);var a=m(t);if(a)return a;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof t[Symbol.toPrimitive]=="function")return n.from(t[Symbol.toPrimitive]("string"),r,e);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}n.from=function(t,r,e){return y(t,r,e)},Object.setPrototypeOf(n.prototype,Uint8Array.prototype),Object.setPrototypeOf(n,Uint8Array);function x(t){if(typeof t!="number")throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function I(t,r,e){return x(t),t<=0?u(t):r!==void 0?typeof e=="string"?u(t).fill(r,e):u(t).fill(r):u(t)}n.alloc=function(t,r,e){return I(t,r,e)};function B(t){return x(t),u(t<0?0:C(t)|0)}n.allocUnsafe=function(t){return B(t)},n.allocUnsafeSlow=function(t){return B(t)};function T(t,r){if((typeof r!="string"||r==="")&&(r="utf8"),!n.isEncoding(r))throw new TypeError("Unknown encoding: "+r);var e=J(t,r)|0,i=u(e),a=i.write(t,r);return a!==e&&(i=i.slice(0,a)),i}function b(t){for(var r=t.length<0?0:C(t.length)|0,e=u(r),i=0;i<r;i+=1)e[i]=t[i]&255;return e}function M(t){if(er(t,Uint8Array)){var r=new Uint8Array(t);return A(r.buffer,r.byteOffset,r.byteLength)}return b(t)}function A(t,r,e){if(r<0||t.byteLength<r)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<r+(e||0))throw new RangeError('"length" is outside of buffer bounds');var i;return r===void 0&&e===void 0?i=new Uint8Array(t):e===void 0?i=new Uint8Array(t,r):i=new Uint8Array(t,r,e),Object.setPrototypeOf(i,n.prototype),i}function m(t){if(n.isBuffer(t)){var r=C(t.length)|0,e=u(r);return e.length===0||t.copy(e,0,0,r),e}if(t.length!==void 0)return typeof t.length!="number"||gr(t.length)?u(0):b(t);if(t.type==="Buffer"&&Array.isArray(t.data))return b(t.data)}function C(t){if(t>=p)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+p.toString(16)+" bytes");return t|0}function z(t){return+t!=t&&(t=0),n.alloc(+t)}n.isBuffer=function(r){return r!=null&&r._isBuffer===!0&&r!==n.prototype},n.compare=function(r,e){if(er(r,Uint8Array)&&(r=n.from(r,r.offset,r.byteLength)),er(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),!n.isBuffer(r)||!n.isBuffer(e))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(r===e)return 0;for(var i=r.length,a=e.length,l=0,f=Math.min(i,a);l<f;++l)if(r[l]!==e[l]){i=r[l],a=e[l];break}return i<a?-1:a<i?1:0},n.isEncoding=function(r){switch(String(r).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},n.concat=function(r,e){if(!Array.isArray(r))throw new TypeError('"list" argument must be an Array of Buffers');if(r.length===0)return n.alloc(0);var i;if(e===void 0)for(e=0,i=0;i<r.length;++i)e+=r[i].length;var a=n.allocUnsafe(e),l=0;for(i=0;i<r.length;++i){var f=r[i];if(er(f,Uint8Array))l+f.length>a.length?n.from(f).copy(a,l):Uint8Array.prototype.set.call(a,f,l);else if(n.isBuffer(f))f.copy(a,l);else throw new TypeError('"list" argument must be an Array of Buffers');l+=f.length}return a};function J(t,r){if(n.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||er(t,ArrayBuffer))return t.byteLength;if(typeof t!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);var e=t.length,i=arguments.length>2&&arguments[2]===!0;if(!i&&e===0)return 0;for(var a=!1;;)switch(r){case"ascii":case"latin1":case"binary":return e;case"utf8":case"utf-8":return pr(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return e*2;case"hex":return e>>>1;case"base64":return _r(t).length;default:if(a)return i?-1:pr(t).length;r=(""+r).toLowerCase(),a=!0}}n.byteLength=J;function j(t,r,e){var i=!1;if((r===void 0||r<0)&&(r=0),r>this.length||((e===void 0||e>this.length)&&(e=this.length),e<=0)||(e>>>=0,r>>>=0,e<=r))return"";for(t||(t="utf8");;)switch(t){case"hex":return Br(this,r,e);case"utf8":case"utf-8":return hr(this,r,e);case"ascii":return Lr(this,r,e);case"latin1":case"binary":return Q(this,r,e);case"base64":return fr(this,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Er(this,r,e);default:if(i)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),i=!0}}n.prototype._isBuffer=!0;function $(t,r,e){var i=t[r];t[r]=t[e],t[e]=i}n.prototype.swap16=function(){var r=this.length;if(r%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<r;e+=2)$(this,e,e+1);return this},n.prototype.swap32=function(){var r=this.length;if(r%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<r;e+=4)$(this,e,e+3),$(this,e+1,e+2);return this},n.prototype.swap64=function(){var r=this.length;if(r%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<r;e+=8)$(this,e,e+7),$(this,e+1,e+6),$(this,e+2,e+5),$(this,e+3,e+4);return this},n.prototype.toString=function(){var r=this.length;return r===0?"":arguments.length===0?hr(this,0,r):j.apply(this,arguments)},n.prototype.toLocaleString=n.prototype.toString,n.prototype.equals=function(r){if(!n.isBuffer(r))throw new TypeError("Argument must be a Buffer");return this===r?!0:n.compare(this,r)===0},n.prototype.inspect=function(){var r="",e=s.INSPECT_MAX_BYTES;return r=this.toString("hex",0,e).replace(/(.{2})/g,"$1 ").trim(),this.length>e&&(r+=" ... "),"<Buffer "+r+">"},v&&(n.prototype[v]=n.prototype.inspect),n.prototype.compare=function(r,e,i,a,l){if(er(r,Uint8Array)&&(r=n.from(r,r.offset,r.byteLength)),!n.isBuffer(r))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof r);if(e===void 0&&(e=0),i===void 0&&(i=r?r.length:0),a===void 0&&(a=0),l===void 0&&(l=this.length),e<0||i>r.length||a<0||l>this.length)throw new RangeError("out of range index");if(a>=l&&e>=i)return 0;if(a>=l)return-1;if(e>=i)return 1;if(e>>>=0,i>>>=0,a>>>=0,l>>>=0,this===r)return 0;for(var f=l-a,U=i-e,D=Math.min(f,U),L=this.slice(a,l),P=r.slice(e,i),S=0;S<D;++S)if(L[S]!==P[S]){f=L[S],U=P[S];break}return f<U?-1:U<f?1:0};function or(t,r,e,i,a){if(t.length===0)return-1;if(typeof e=="string"?(i=e,e=0):e>2147483647?e=2147483647:e<-2147483648&&(e=-2147483648),e=+e,gr(e)&&(e=a?0:t.length-1),e<0&&(e=t.length+e),e>=t.length){if(a)return-1;e=t.length-1}else if(e<0)if(a)e=0;else return-1;if(typeof r=="string"&&(r=n.from(r,i)),n.isBuffer(r))return r.length===0?-1:lr(t,r,e,i,a);if(typeof r=="number")return r=r&255,typeof Uint8Array.prototype.indexOf=="function"?a?Uint8Array.prototype.indexOf.call(t,r,e):Uint8Array.prototype.lastIndexOf.call(t,r,e):lr(t,[r],e,i,a);throw new TypeError("val must be string, number or Buffer")}function lr(t,r,e,i,a){var l=1,f=t.length,U=r.length;if(i!==void 0&&(i=String(i).toLowerCase(),i==="ucs2"||i==="ucs-2"||i==="utf16le"||i==="utf-16le")){if(t.length<2||r.length<2)return-1;l=2,f/=2,U/=2,e/=2}function D(Y,Vr){return l===1?Y[Vr]:Y.readUInt16BE(Vr*l)}var L;if(a){var P=-1;for(L=e;L<f;L++)if(D(t,L)===D(r,P===-1?0:L-P)){if(P===-1&&(P=L),L-P+1===U)return P*l}else P!==-1&&(L-=L-P),P=-1}else for(e+U>f&&(e=f-U),L=e;L>=0;L--){for(var S=!0,sr=0;sr<U;sr++)if(D(t,L+sr)!==D(r,sr)){S=!1;break}if(S)return L}return-1}n.prototype.includes=function(r,e,i){return this.indexOf(r,e,i)!==-1},n.prototype.indexOf=function(r,e,i){return or(this,r,e,i,!0)},n.prototype.lastIndexOf=function(r,e,i){return or(this,r,e,i,!1)};function N(t,r,e,i){e=Number(e)||0;var a=t.length-e;i?(i=Number(i),i>a&&(i=a)):i=a;var l=r.length;i>l/2&&(i=l/2);for(var f=0;f<i;++f){var U=parseInt(r.substr(f*2,2),16);if(gr(U))return f;t[e+f]=U}return f}function q(t,r,e,i){return ur(pr(r,t.length-e),t,e,i)}function X(t,r,e,i){return ur(Rr(r),t,e,i)}function rr(t,r,e,i){return ur(_r(r),t,e,i)}function Ir(t,r,e,i){return ur(Nr(r,t.length-e),t,e,i)}n.prototype.write=function(r,e,i,a){if(e===void 0)a="utf8",i=this.length,e=0;else if(i===void 0&&typeof e=="string")a=e,i=this.length,e=0;else if(isFinite(e))e=e>>>0,isFinite(i)?(i=i>>>0,a===void 0&&(a="utf8")):(a=i,i=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var l=this.length-e;if((i===void 0||i>l)&&(i=l),r.length>0&&(i<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");a||(a="utf8");for(var f=!1;;)switch(a){case"hex":return N(this,r,e,i);case"utf8":case"utf-8":return q(this,r,e,i);case"ascii":case"latin1":case"binary":return X(this,r,e,i);case"base64":return rr(this,r,e,i);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Ir(this,r,e,i);default:if(f)throw new TypeError("Unknown encoding: "+a);a=(""+a).toLowerCase(),f=!0}},n.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function fr(t,r,e){return r===0&&e===t.length?o.fromByteArray(t):o.fromByteArray(t.slice(r,e))}function hr(t,r,e){e=Math.min(t.length,e);for(var i=[],a=r;a<e;){var l=t[a],f=null,U=l>239?4:l>223?3:l>191?2:1;if(a+U<=e){var D,L,P,S;switch(U){case 1:l<128&&(f=l);break;case 2:D=t[a+1],(D&192)===128&&(S=(l&31)<<6|D&63,S>127&&(f=S));break;case 3:D=t[a+1],L=t[a+2],(D&192)===128&&(L&192)===128&&(S=(l&15)<<12|(D&63)<<6|L&63,S>2047&&(S<55296||S>57343)&&(f=S));break;case 4:D=t[a+1],L=t[a+2],P=t[a+3],(D&192)===128&&(L&192)===128&&(P&192)===128&&(S=(l&15)<<18|(D&63)<<12|(L&63)<<6|P&63,S>65535&&S<1114112&&(f=S))}}f===null?(f=65533,U=1):f>65535&&(f-=65536,i.push(f>>>10&1023|55296),f=56320|f&1023),i.push(f),a+=U}return cr(i)}var ir=4096;function cr(t){var r=t.length;if(r<=ir)return String.fromCharCode.apply(String,t);for(var e="",i=0;i<r;)e+=String.fromCharCode.apply(String,t.slice(i,i+=ir));return e}function Lr(t,r,e){var i="";e=Math.min(t.length,e);for(var a=r;a<e;++a)i+=String.fromCharCode(t[a]&127);return i}function Q(t,r,e){var i="";e=Math.min(t.length,e);for(var a=r;a<e;++a)i+=String.fromCharCode(t[a]);return i}function Br(t,r,e){var i=t.length;(!r||r<0)&&(r=0),(!e||e<0||e>i)&&(e=i);for(var a="",l=r;l<e;++l)a+=mr[t[l]];return a}function Er(t,r,e){for(var i=t.slice(r,e),a="",l=0;l<i.length-1;l+=2)a+=String.fromCharCode(i[l]+i[l+1]*256);return a}n.prototype.slice=function(r,e){var i=this.length;r=~~r,e=e===void 0?i:~~e,r<0?(r+=i,r<0&&(r=0)):r>i&&(r=i),e<0?(e+=i,e<0&&(e=0)):e>i&&(e=i),e<r&&(e=r);var a=this.subarray(r,e);return Object.setPrototypeOf(a,n.prototype),a};function H(t,r,e){if(t%1!==0||t<0)throw new RangeError("offset is not uint");if(t+r>e)throw new RangeError("Trying to access beyond buffer length")}n.prototype.readUintLE=n.prototype.readUIntLE=function(r,e,i){r=r>>>0,e=e>>>0,i||H(r,e,this.length);for(var a=this[r],l=1,f=0;++f<e&&(l*=256);)a+=this[r+f]*l;return a},n.prototype.readUintBE=n.prototype.readUIntBE=function(r,e,i){r=r>>>0,e=e>>>0,i||H(r,e,this.length);for(var a=this[r+--e],l=1;e>0&&(l*=256);)a+=this[r+--e]*l;return a},n.prototype.readUint8=n.prototype.readUInt8=function(r,e){return r=r>>>0,e||H(r,1,this.length),this[r]},n.prototype.readUint16LE=n.prototype.readUInt16LE=function(r,e){return r=r>>>0,e||H(r,2,this.length),this[r]|this[r+1]<<8},n.prototype.readUint16BE=n.prototype.readUInt16BE=function(r,e){return r=r>>>0,e||H(r,2,this.length),this[r]<<8|this[r+1]},n.prototype.readUint32LE=n.prototype.readUInt32LE=function(r,e){return r=r>>>0,e||H(r,4,this.length),(this[r]|this[r+1]<<8|this[r+2]<<16)+this[r+3]*16777216},n.prototype.readUint32BE=n.prototype.readUInt32BE=function(r,e){return r=r>>>0,e||H(r,4,this.length),this[r]*16777216+(this[r+1]<<16|this[r+2]<<8|this[r+3])},n.prototype.readIntLE=function(r,e,i){r=r>>>0,e=e>>>0,i||H(r,e,this.length);for(var a=this[r],l=1,f=0;++f<e&&(l*=256);)a+=this[r+f]*l;return l*=128,a>=l&&(a-=Math.pow(2,8*e)),a},n.prototype.readIntBE=function(r,e,i){r=r>>>0,e=e>>>0,i||H(r,e,this.length);for(var a=e,l=1,f=this[r+--a];a>0&&(l*=256);)f+=this[r+--a]*l;return l*=128,f>=l&&(f-=Math.pow(2,8*e)),f},n.prototype.readInt8=function(r,e){return r=r>>>0,e||H(r,1,this.length),this[r]&128?(255-this[r]+1)*-1:this[r]},n.prototype.readInt16LE=function(r,e){r=r>>>0,e||H(r,2,this.length);var i=this[r]|this[r+1]<<8;return i&32768?i|4294901760:i},n.prototype.readInt16BE=function(r,e){r=r>>>0,e||H(r,2,this.length);var i=this[r+1]|this[r]<<8;return i&32768?i|4294901760:i},n.prototype.readInt32LE=function(r,e){return r=r>>>0,e||H(r,4,this.length),this[r]|this[r+1]<<8|this[r+2]<<16|this[r+3]<<24},n.prototype.readInt32BE=function(r,e){return r=r>>>0,e||H(r,4,this.length),this[r]<<24|this[r+1]<<16|this[r+2]<<8|this[r+3]},n.prototype.readFloatLE=function(r,e){return r=r>>>0,e||H(r,4,this.length),h.read(this,r,!0,23,4)},n.prototype.readFloatBE=function(r,e){return r=r>>>0,e||H(r,4,this.length),h.read(this,r,!1,23,4)},n.prototype.readDoubleLE=function(r,e){return r=r>>>0,e||H(r,8,this.length),h.read(this,r,!0,52,8)},n.prototype.readDoubleBE=function(r,e){return r=r>>>0,e||H(r,8,this.length),h.read(this,r,!1,52,8)};function G(t,r,e,i,a,l){if(!n.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>a||r<l)throw new RangeError('"value" argument is out of bounds');if(e+i>t.length)throw new RangeError("Index out of range")}n.prototype.writeUintLE=n.prototype.writeUIntLE=function(r,e,i,a){if(r=+r,e=e>>>0,i=i>>>0,!a){var l=Math.pow(2,8*i)-1;G(this,r,e,i,l,0)}var f=1,U=0;for(this[e]=r&255;++U<i&&(f*=256);)this[e+U]=r/f&255;return e+i},n.prototype.writeUintBE=n.prototype.writeUIntBE=function(r,e,i,a){if(r=+r,e=e>>>0,i=i>>>0,!a){var l=Math.pow(2,8*i)-1;G(this,r,e,i,l,0)}var f=i-1,U=1;for(this[e+f]=r&255;--f>=0&&(U*=256);)this[e+f]=r/U&255;return e+i},n.prototype.writeUint8=n.prototype.writeUInt8=function(r,e,i){return r=+r,e=e>>>0,i||G(this,r,e,1,255,0),this[e]=r&255,e+1},n.prototype.writeUint16LE=n.prototype.writeUInt16LE=function(r,e,i){return r=+r,e=e>>>0,i||G(this,r,e,2,65535,0),this[e]=r&255,this[e+1]=r>>>8,e+2},n.prototype.writeUint16BE=n.prototype.writeUInt16BE=function(r,e,i){return r=+r,e=e>>>0,i||G(this,r,e,2,65535,0),this[e]=r>>>8,this[e+1]=r&255,e+2},n.prototype.writeUint32LE=n.prototype.writeUInt32LE=function(r,e,i){return r=+r,e=e>>>0,i||G(this,r,e,4,4294967295,0),this[e+3]=r>>>24,this[e+2]=r>>>16,this[e+1]=r>>>8,this[e]=r&255,e+4},n.prototype.writeUint32BE=n.prototype.writeUInt32BE=function(r,e,i){return r=+r,e=e>>>0,i||G(this,r,e,4,4294967295,0),this[e]=r>>>24,this[e+1]=r>>>16,this[e+2]=r>>>8,this[e+3]=r&255,e+4},n.prototype.writeIntLE=function(r,e,i,a){if(r=+r,e=e>>>0,!a){var l=Math.pow(2,8*i-1);G(this,r,e,i,l-1,-l)}var f=0,U=1,D=0;for(this[e]=r&255;++f<i&&(U*=256);)r<0&&D===0&&this[e+f-1]!==0&&(D=1),this[e+f]=(r/U>>0)-D&255;return e+i},n.prototype.writeIntBE=function(r,e,i,a){if(r=+r,e=e>>>0,!a){var l=Math.pow(2,8*i-1);G(this,r,e,i,l-1,-l)}var f=i-1,U=1,D=0;for(this[e+f]=r&255;--f>=0&&(U*=256);)r<0&&D===0&&this[e+f+1]!==0&&(D=1),this[e+f]=(r/U>>0)-D&255;return e+i},n.prototype.writeInt8=function(r,e,i){return r=+r,e=e>>>0,i||G(this,r,e,1,127,-128),r<0&&(r=255+r+1),this[e]=r&255,e+1},n.prototype.writeInt16LE=function(r,e,i){return r=+r,e=e>>>0,i||G(this,r,e,2,32767,-32768),this[e]=r&255,this[e+1]=r>>>8,e+2},n.prototype.writeInt16BE=function(r,e,i){return r=+r,e=e>>>0,i||G(this,r,e,2,32767,-32768),this[e]=r>>>8,this[e+1]=r&255,e+2},n.prototype.writeInt32LE=function(r,e,i){return r=+r,e=e>>>0,i||G(this,r,e,4,2147483647,-2147483648),this[e]=r&255,this[e+1]=r>>>8,this[e+2]=r>>>16,this[e+3]=r>>>24,e+4},n.prototype.writeInt32BE=function(r,e,i){return r=+r,e=e>>>0,i||G(this,r,e,4,2147483647,-2147483648),r<0&&(r=4294967295+r+1),this[e]=r>>>24,this[e+1]=r>>>16,this[e+2]=r>>>8,this[e+3]=r&255,e+4};function xr(t,r,e,i,a,l){if(e+i>t.length)throw new RangeError("Index out of range");if(e<0)throw new RangeError("Index out of range")}function yr(t,r,e,i,a){return r=+r,e=e>>>0,a||xr(t,r,e,4),h.write(t,r,e,i,23,4),e+4}n.prototype.writeFloatLE=function(r,e,i){return yr(this,r,e,!0,i)},n.prototype.writeFloatBE=function(r,e,i){return yr(this,r,e,!1,i)};function kr(t,r,e,i,a){return r=+r,e=e>>>0,a||xr(t,r,e,8),h.write(t,r,e,i,52,8),e+8}n.prototype.writeDoubleLE=function(r,e,i){return kr(this,r,e,!0,i)},n.prototype.writeDoubleBE=function(r,e,i){return kr(this,r,e,!1,i)},n.prototype.copy=function(r,e,i,a){if(!n.isBuffer(r))throw new TypeError("argument should be a Buffer");if(i||(i=0),!a&&a!==0&&(a=this.length),e>=r.length&&(e=r.length),e||(e=0),a>0&&a<i&&(a=i),a===i||r.length===0||this.length===0)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(i<0||i>=this.length)throw new RangeError("Index out of range");if(a<0)throw new RangeError("sourceEnd out of bounds");a>this.length&&(a=this.length),r.length-e<a-i&&(a=r.length-e+i);var l=a-i;return this===r&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(e,i,a):Uint8Array.prototype.set.call(r,this.subarray(i,a),e),l},n.prototype.fill=function(r,e,i,a){if(typeof r=="string"){if(typeof e=="string"?(a=e,e=0,i=this.length):typeof i=="string"&&(a=i,i=this.length),a!==void 0&&typeof a!="string")throw new TypeError("encoding must be a string");if(typeof a=="string"&&!n.isEncoding(a))throw new TypeError("Unknown encoding: "+a);if(r.length===1){var l=r.charCodeAt(0);(a==="utf8"&&l<128||a==="latin1")&&(r=l)}}else typeof r=="number"?r=r&255:typeof r=="boolean"&&(r=Number(r));if(e<0||this.length<e||this.length<i)throw new RangeError("Out of range index");if(i<=e)return this;e=e>>>0,i=i===void 0?this.length:i>>>0,r||(r=0);var f;if(typeof r=="number")for(f=e;f<i;++f)this[f]=r;else{var U=n.isBuffer(r)?r:n.from(r,a),D=U.length;if(D===0)throw new TypeError('The value "'+r+'" is invalid for argument "value"');for(f=0;f<i-e;++f)this[f+e]=U[f%D]}return this};var Sr=/[^+/0-9A-Za-z-_]/g;function Fr(t){if(t=t.split("=")[0],t=t.trim().replace(Sr,""),t.length<2)return"";for(;t.length%4!==0;)t=t+"=";return t}function pr(t,r){r=r||1/0;for(var e,i=t.length,a=null,l=[],f=0;f<i;++f){if(e=t.charCodeAt(f),e>55295&&e<57344){if(!a){if(e>56319){(r-=3)>-1&&l.push(239,191,189);continue}else if(f+1===i){(r-=3)>-1&&l.push(239,191,189);continue}a=e;continue}if(e<56320){(r-=3)>-1&&l.push(239,191,189),a=e;continue}e=(a-55296<<10|e-56320)+65536}else a&&(r-=3)>-1&&l.push(239,191,189);if(a=null,e<128){if((r-=1)<0)break;l.push(e)}else if(e<2048){if((r-=2)<0)break;l.push(e>>6|192,e&63|128)}else if(e<65536){if((r-=3)<0)break;l.push(e>>12|224,e>>6&63|128,e&63|128)}else if(e<1114112){if((r-=4)<0)break;l.push(e>>18|240,e>>12&63|128,e>>6&63|128,e&63|128)}else throw new Error("Invalid code point")}return l}function Rr(t){for(var r=[],e=0;e<t.length;++e)r.push(t.charCodeAt(e)&255);return r}function Nr(t,r){for(var e,i,a,l=[],f=0;f<t.length&&!((r-=2)<0);++f)e=t.charCodeAt(f),i=e>>8,a=e%256,l.push(a),l.push(i);return l}function _r(t){return o.toByteArray(Fr(t))}function ur(t,r,e,i){for(var a=0;a<i&&!(a+e>=r.length||a>=t.length);++a)r[a+e]=t[a];return a}function er(t,r){return t instanceof r||t!=null&&t.constructor!=null&&t.constructor.name!=null&&t.constructor.name===r.name}function gr(t){return t!==t}var mr=function(){for(var t="0123456789abcdef",r=new Array(256),e=0;e<16;++e)for(var i=e*16,a=0;a<16;++a)r[i+a]=t[e]+t[a];return r}()})(Ue);window.Buffer=Ue.Buffer;export{vt as H};