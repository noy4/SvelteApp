import{S as Ve,i as $e,s as Se,U as X,l as i,a as V,r as y,w as re,Z as we,m as f,h as n,c as $,n as u,u as j,x as oe,p as M,M as o,b as Y,y as se,V as ce,f as P,t as x,B as ne,N as ae,v as Q,E as S,e as ge,g as ze,d as Ae,_ as ye}from"../chunks/index-36b076cc.js";import{s as ee,d as be}from"../chunks/formatter-c69670f2.js";import{C as je,V as Be,k as Fe,K as He}from"../chunks/contracts-8ae79a66.js";import{q as Ne,aM as Re,w as le,J as Ee}from"../chunks/Jazzicon-71a42527.js";import"../chunks/singletons-822f6284.js";import"../chunks/index-6803a3d4.js";function ke(l,e,a){const t=l.slice();return t[8]=e[a],t}function Oe(l){return{c:S,l:S,m:S,p:S,d:S}}function Ye(l){let e=(l[12]?(+le.formatEther(l[12])).toLocaleString():"-")+"",a;return{c(){a=y(e)},l(t){a=j(t,e)},m(t,r){Y(t,a,r)},p(t,r){r&1&&e!==(e=(t[12]?(+le.formatEther(t[12])).toLocaleString():"-")+"")&&Q(a,e)},d(t){t&&n(a)}}}function qe(l){let e;return{c(){e=y("loading...")},l(a){e=j(a,"loading...")},m(a,t){Y(a,e,t)},p:S,d(a){a&&n(e)}}}function Ce(l){var Z;let e,a,t,r,d,m,s,c,D,h,C,R,H=ee(He)+"",w,b,B,q,W,J,K,L,E={ctx:l,current:null,token:null,hasCatch:!1,pending:qe,then:Ye,catch:Oe,value:12};return X(L=(Z=l[0])==null?void 0:Z.totalSupply(),E),{c(){e=i("div"),a=i("div"),t=y("chainId"),r=V(),d=i("div"),m=y(l[3]),s=V(),c=i("div"),D=i("div"),h=y("Address"),C=V(),R=i("div"),w=y(H),b=V(),B=i("div"),q=i("div"),W=y("Total Supply"),J=V(),K=i("div"),E.block.c(),this.h()},l(v){e=f(v,"DIV",{class:!0});var _=u(e);a=f(_,"DIV",{});var I=u(a);t=j(I,"chainId"),I.forEach(n),r=$(_),d=f(_,"DIV",{});var T=u(d);m=j(T,l[3]),T.forEach(n),_.forEach(n),s=$(v),c=f(v,"DIV",{class:!0});var p=u(c);D=f(p,"DIV",{});var z=u(D);h=j(z,"Address"),z.forEach(n),C=$(p),R=f(p,"DIV",{});var g=u(R);w=j(g,H),g.forEach(n),p.forEach(n),b=$(v),B=f(v,"DIV",{class:!0});var O=u(B);q=f(O,"DIV",{});var U=u(q);W=j(U,"Total Supply"),U.forEach(n),J=$(O),K=f(O,"DIV",{});var k=u(K);E.block.l(k),k.forEach(n),O.forEach(n),this.h()},h(){M(e,"class","flex justify-between"),M(c,"class","flex justify-between"),M(B,"class","flex justify-between")},m(v,_){Y(v,e,_),o(e,a),o(a,t),o(e,r),o(e,d),o(d,m),Y(v,s,_),Y(v,c,_),o(c,D),o(D,h),o(c,C),o(c,R),o(R,w),Y(v,b,_),Y(v,B,_),o(B,q),o(q,W),o(B,J),o(B,K),E.block.m(K,E.anchor=null),E.mount=()=>K,E.anchor=null},p(v,_){var I;l=v,_&8&&Q(m,l[3]),E.ctx=l,_&1&&L!==(L=(I=l[0])==null?void 0:I.totalSupply())&&X(L,E)||ce(E,l,_)},d(v){v&&n(e),v&&n(s),v&&n(c),v&&n(b),v&&n(B),E.block.d(),E.token=null,E=null}}}function Ke(l){return{c:S,l:S,m:S,p:S,i:S,o:S,d:S}}function Le(l){var m;let e,a,t=((m=l[7])!=null?m:[]).reverse(),r=[];for(let s=0;s<t.length;s+=1)r[s]=Te(ke(l,t,s));const d=s=>x(r[s],1,1,()=>{r[s]=null});return{c(){for(let s=0;s<r.length;s+=1)r[s].c();e=ge()},l(s){for(let c=0;c<r.length;c+=1)r[c].l(s);e=ge()},m(s,c){for(let D=0;D<r.length;D+=1)r[D].m(s,c);Y(s,e,c),a=!0},p(s,c){var D;if(c&6){t=((D=s[7])!=null?D:[]).reverse();let h;for(h=0;h<t.length;h+=1){const C=ke(s,t,h);r[h]?(r[h].p(C,c),P(r[h],1)):(r[h]=Te(C),r[h].c(),P(r[h],1),r[h].m(e.parentNode,e))}for(ze(),h=t.length;h<r.length;h+=1)d(h);Ae()}},i(s){if(!a){for(let c=0;c<t.length;c+=1)P(r[c]);a=!0}},o(s){r=r.filter(Boolean);for(let c=0;c<r.length;c+=1)x(r[c]);a=!1},d(s){ye(r,s),s&&n(e)}}}function Me(l){return{c:S,l:S,m:S,p:S,d:S}}function Je(l){let e=be(l[11].timestamp*1e3).fromNow(!0)+"",a;return{c(){a=y(e)},l(t){a=j(t,e)},m(t,r){Y(t,a,r)},p(t,r){r&4&&e!==(e=be(t[11].timestamp*1e3).fromNow(!0)+"")&&Q(a,e)},d(t){t&&n(a)}}}function Ue(l){let e;return{c(){e=y("loading...")},l(a){e=j(a,"loading...")},m(a,t){Y(a,e,t)},p:S,d(a){a&&n(e)}}}function De(l){let e,a;return{c(){e=i("div"),a=y("You"),this.h()},l(t){e=f(t,"DIV",{class:!0});var r=u(e);a=j(r,"You"),r.forEach(n),this.h()},h(){M(e,"class","badge badge-sm badge-ghost")},m(t,r){Y(t,e,r),o(e,a)},d(t){t&&n(e)}}}function Ie(l){let e,a;return{c(){e=i("div"),a=y("You"),this.h()},l(t){e=f(t,"DIV",{class:!0});var r=u(e);a=j(r,"You"),r.forEach(n),this.h()},h(){M(e,"class","badge badge-sm badge-ghost")},m(t,r){Y(t,e,r),o(e,a)},d(t){t&&n(e)}}}function Te(l){let e,a,t,r,d,m,s,c,D=ee(l[8].args.from)+"",h,C,R,H,w,b,B,q=ee(l[8].args.to)+"",W,J,K,L,E=le.formatEther(l[8].args.value)+"",Z,v,_,I={ctx:l,current:null,token:null,hasCatch:!1,pending:Ue,then:Je,catch:Me,value:11};X(t=l[8].getBlock(),I),s=new Ee({props:{size:"18",address:l[8].args.from}});let T=l[8].args.from===l[1]&&De();b=new Ee({props:{size:"18",address:l[8].args.to}});let p=l[8].args.to===l[1]&&Ie();return{c(){e=i("tr"),a=i("td"),I.block.c(),r=V(),d=i("td"),m=i("div"),re(s.$$.fragment),c=V(),h=y(D),C=V(),T&&T.c(),R=V(),H=i("td"),w=i("div"),re(b.$$.fragment),B=V(),W=y(q),J=V(),p&&p.c(),K=V(),L=i("td"),Z=y(E),v=V(),this.h()},l(z){e=f(z,"TR",{});var g=u(e);a=f(g,"TD",{});var O=u(a);I.block.l(O),O.forEach(n),r=$(g),d=f(g,"TD",{});var U=u(d);m=f(U,"DIV",{class:!0});var k=u(m);oe(s.$$.fragment,k),c=$(k),h=j(k,D),C=$(k),T&&T.l(k),k.forEach(n),U.forEach(n),R=$(g),H=f(g,"TD",{});var N=u(H);w=f(N,"DIV",{class:!0});var A=u(w);oe(b.$$.fragment,A),B=$(A),W=j(A,q),J=$(A),p&&p.l(A),A.forEach(n),N.forEach(n),K=$(g),L=f(g,"TD",{});var F=u(L);Z=j(F,E),F.forEach(n),v=$(g),g.forEach(n),this.h()},h(){M(m,"class","flex items-center gap-2"),M(w,"class","flex items-center gap-2")},m(z,g){Y(z,e,g),o(e,a),I.block.m(a,I.anchor=null),I.mount=()=>a,I.anchor=null,o(e,r),o(e,d),o(d,m),se(s,m,null),o(m,c),o(m,h),o(m,C),T&&T.m(m,null),o(e,R),o(e,H),o(H,w),se(b,w,null),o(w,B),o(w,W),o(w,J),p&&p.m(w,null),o(e,K),o(e,L),o(L,Z),o(e,v),_=!0},p(z,g){l=z,I.ctx=l,g&4&&t!==(t=l[8].getBlock())&&X(t,I)||ce(I,l,g);const O={};g&4&&(O.address=l[8].args.from),s.$set(O),(!_||g&4)&&D!==(D=ee(l[8].args.from)+"")&&Q(h,D),l[8].args.from===l[1]?T||(T=De(),T.c(),T.m(m,null)):T&&(T.d(1),T=null);const U={};g&4&&(U.address=l[8].args.to),b.$set(U),(!_||g&4)&&q!==(q=ee(l[8].args.to)+"")&&Q(W,q),l[8].args.to===l[1]?p||(p=Ie(),p.c(),p.m(w,null)):p&&(p.d(1),p=null),(!_||g&4)&&E!==(E=le.formatEther(l[8].args.value)+"")&&Q(Z,E)},i(z){_||(P(s.$$.fragment,z),P(b.$$.fragment,z),_=!0)},o(z){x(s.$$.fragment,z),x(b.$$.fragment,z),_=!1},d(z){z&&n(e),I.block.d(),I.token=null,I=null,ne(s),T&&T.d(),ne(b),p&&p.d()}}}function We(l){let e,a;return{c(){e=i("tr"),a=y("loading...")},l(t){e=f(t,"TR",{});var r=u(e);a=j(r,"loading..."),r.forEach(n)},m(t,r){Y(t,e,r),o(e,a)},p:S,i:S,o:S,d(t){t&&n(e)}}}function Ze(l){let e,a,t,r,d,m,s,c,D,h,C,R,H,w,b,B,q,W,J,K,L,E,Z,v,_,I,T,p,z,g,O,U;s=new je({props:{class:"p-8",$$slots:{default:[Ce]},$$scope:{ctx:l}}});let k={ctx:l,current:null,token:null,hasCatch:!1,pending:We,then:Le,catch:Ke,value:7,blocks:[,,,]};return X(z=l[2],k),{c(){e=i("meta"),a=V(),t=i("section"),r=i("h1"),d=y("Kuwa Coin"),m=V(),re(s.$$.fragment),c=V(),D=i("h2"),h=y("Transfers"),C=V(),R=i("div"),H=i("table"),w=i("thead"),b=i("tr"),B=i("th"),q=y("Age"),W=V(),J=i("th"),K=y("From"),L=V(),E=i("th"),Z=y("to"),v=V(),_=i("th"),I=y("Value"),T=V(),p=i("tbody"),k.block.c(),g=V(),O=i("div"),this.h()},l(N){const A=we('[data-svelte="svelte-1o1d32w"]',document.head);e=f(A,"META",{name:!0,content:!0}),A.forEach(n),a=$(N),t=f(N,"SECTION",{class:!0});var F=u(t);r=f(F,"H1",{class:!0});var ie=u(r);d=j(ie,"Kuwa Coin"),ie.forEach(n),m=$(F),oe(s.$$.fragment,F),c=$(F),D=f(F,"H2",{});var fe=u(D);h=j(fe,"Transfers"),fe.forEach(n),C=$(F),R=f(F,"DIV",{class:!0});var de=u(R);H=f(de,"TABLE",{class:!0});var te=u(H);w=f(te,"THEAD",{});var ue=u(w);b=f(ue,"TR",{});var G=u(b);B=f(G,"TH",{});var he=u(B);q=j(he,"Age"),he.forEach(n),W=$(G),J=f(G,"TH",{});var _e=u(J);K=j(_e,"From"),_e.forEach(n),L=$(G),E=f(G,"TH",{});var me=u(E);Z=j(me,"to"),me.forEach(n),v=$(G),_=f(G,"TH",{});var ve=u(_);I=j(ve,"Value"),ve.forEach(n),G.forEach(n),ue.forEach(n),T=$(te),p=f(te,"TBODY",{});var pe=u(p);k.block.l(pe),pe.forEach(n),te.forEach(n),de.forEach(n),g=$(F),O=f(F,"DIV",{class:!0}),u(O).forEach(n),F.forEach(n),this.h()},h(){document.title="Data",M(e,"name","description"),M(e,"content","Svelte demo app"),M(r,"class","pt-8"),M(H,"class","table table-compact w-full"),M(R,"class","overflow-x-auto max-w-xl w-full not-prose mt-8 z-0"),M(O,"class","h-16"),M(t,"class","flex flex-col items-center px-8")},m(N,A){o(document.head,e),Y(N,a,A),Y(N,t,A),o(t,r),o(r,d),o(t,m),se(s,t,null),o(t,c),o(t,D),o(D,h),o(t,C),o(t,R),o(R,H),o(H,w),o(w,b),o(b,B),o(B,q),o(b,W),o(b,J),o(J,K),o(b,L),o(b,E),o(E,Z),o(b,v),o(b,_),o(_,I),o(H,T),o(H,p),k.block.m(p,k.anchor=null),k.mount=()=>p,k.anchor=null,o(t,g),o(t,O),U=!0},p(N,[A]){l=N;const F={};A&8201&&(F.$$scope={dirty:A,ctx:l}),s.$set(F),k.ctx=l,A&4&&z!==(z=l[2])&&X(z,k)||ce(k,l,A)},i(N){U||(P(s.$$.fragment,N),P(k.block),U=!0)},o(N){x(s.$$.fragment,N);for(let A=0;A<3;A+=1){const F=k.blocks[A];x(F)}U=!1},d(N){n(e),N&&n(a),N&&n(t),ne(s),k.block.d(),k.token=null,k=null}}}function Ge(l,e,a){let t,r,d,m,s;return ae(l,Fe,c=>a(0,d=c)),ae(l,Ne,c=>a(1,m=c)),ae(l,Re,c=>a(3,s=c)),l.$$.update=()=>{l.$$.dirty&1&&(d==null||d.balanceOf("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266")),l.$$.dirty&3&&(d==null||d.allowance(m,Be)),l.$$.dirty&1&&a(4,t=d==null?void 0:d.filters.Transfer(null,null)),l.$$.dirty&17&&a(2,r=t&&(d==null?void 0:d.queryFilter(t)))},[d,m,r,s,t]}class lt extends Ve{constructor(e){super(),$e(this,e,Ge,Ze,Se,{})}}export{lt as default};