import{S as ot,i as ct,s as lt,W as X,l as m,a as U,r as T,w as ke,$ as it,m as b,h as f,c as F,n as h,u as w,x as Se,p as D,M as c,b as R,y as Te,X as fe,t as se,d as xe,f as le,B as we,N as je,L as he,T as Ae,g as et,E as d,v as ie,e as Pe,a0 as ut}from"../chunks/index-fb7dfbfc.js";import{C as qe,V as ve,k as st,v as ft}from"../chunks/contracts-59f7926b.js";import{g as M,c as de,s as We,d as Ze}from"../chunks/formatter-0f9ca4a3.js";import{c as $e,h as tt,e as De,H as dt,f as me,E as rt,_ as mt,F as bt,G as ht,I as gt,U as _t,K as yt,j as pt,M as vt,N as Pt,O as Et,T as jt,Q as Ot,R as kt,V as St,W as Tt,X as wt,Y as At,Z as $t,$ as Dt,a0 as Bt,a1 as Ct,a2 as Ut,a3 as Ft,a4 as Nt,a5 as Lt,g as Ht,r as It,m as nt,a6 as Vt,p as zt,a7 as Mt,a8 as Rt,L as Kt,k as qt,a9 as Oe,B as Wt,aa as Zt,ab as Jt,ac as Yt,ad as Gt,ae as Xt,af as Qt,ag as xt,ah as er,ai as tr,aj as rr,u as ee,a as nr,b as ar}from"../chunks/Jazzicon-8eb1fd50.js";import{m as or,h as cr,r as lr,l as ir,a as ur,b as sr}from"../chunks/index-a4da90d9.js";import{l as fr}from"../chunks/index-4b6b1fcb.js";import"../chunks/index-3f0ac7e6.js";import"../chunks/singletons-822f6284.js";function dr(e){const t=$e(e);if(t.length>31)throw new Error("bytes32 string must be less than 32 bytes");return tt(De([t,dt]).slice(0,32))}function mr(e){const t=me(e);if(t.length!==32)throw new Error("invalid bytes32 - not 32 bytes long");if(t[31]!==0)throw new Error("invalid bytes32 string - no null terminator");let n=31;for(;t[n-1]===0;)n--;return rt(t.slice(0,n))}const br=Object.freeze(Object.defineProperty({__proto__:null,_toEscapedUtf8String:mt,toUtf8Bytes:$e,toUtf8CodePoints:bt,toUtf8String:rt,Utf8ErrorFuncs:ht,get Utf8ErrorReason(){return gt},get UnicodeNormalizationForm(){return _t},formatBytes32String:dr,parseBytes32String:mr,nameprep:yt},Symbol.toStringTag,{value:"Module"})),hr=Object.freeze(Object.defineProperty({__proto__:null,id:pt,dnsEncode:vt,namehash:Pt,isValidName:Et,messagePrefix:or,hashMessage:cr,_TypedDataEncoder:jt},Symbol.toStringTag,{value:"Module"})),gr=Object.freeze(Object.defineProperty({__proto__:null,ConstructorFragment:Ot,ErrorFragment:kt,EventFragment:St,Fragment:Tt,FunctionFragment:wt,ParamType:At,FormatTypes:$t,AbiCoder:Dt,defaultAbiCoder:Bt,Interface:Ct,Indexed:Ut,checkResultErrors:Ft,LogDescription:Nt,TransactionDescription:Lt},Symbol.toStringTag,{value:"Module"})),_r=Object.freeze(Object.defineProperty({__proto__:null,computeHmac:Ht,ripemd160:It,sha256:nt,sha512:Vt,get SupportedAlgorithm(){return zt}},Symbol.toStringTag,{value:"Module"}));function yr(e){e=e.slice();for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1)),r=e[t];e[t]=e[n],e[n]=r}return e}const pr=Object.freeze(Object.defineProperty({__proto__:null,randomBytes:lr,shuffled:yr},Symbol.toStringTag,{value:"Module"})),vr=Object.freeze(Object.defineProperty({__proto__:null,decode:Mt,encode:Rt},Symbol.toStringTag,{value:"Module"})),Pr="solidity/5.6.1",Er=new RegExp("^bytes([0-9]+)$"),jr=new RegExp("^(u?int)([0-9]*)$"),Or=new RegExp("^(.*)\\[([0-9]*)\\]$"),kr="0000000000000000000000000000000000000000000000000000000000000000",be=new Kt(Pr);function at(e,t,n){switch(e){case"address":return n?Oe(t,32):me(t);case"string":return $e(t);case"bytes":return me(t);case"bool":return t=t?"0x01":"0x00",n?Oe(t,32):me(t)}let r=e.match(jr);if(r){let a=parseInt(r[2]||"256");return(r[2]&&String(a)!==r[2]||a%8!==0||a===0||a>256)&&be.throwArgumentError("invalid number type","type",e),n&&(a=256),t=Wt.from(t).toTwos(a),Oe(t,a/8)}if(r=e.match(Er),r){const a=parseInt(r[1]);return(String(a)!==r[1]||a===0||a>32)&&be.throwArgumentError("invalid bytes type","type",e),me(t).byteLength!==a&&be.throwArgumentError(`invalid value for ${e}`,"value",t),n?me((t+kr).substring(0,66)):t}if(r=e.match(Or),r&&Array.isArray(t)){const a=r[1];parseInt(r[2]||String(t.length))!=t.length&&be.throwArgumentError(`invalid array length for ${e}`,"value",t);const o=[];return t.forEach(function(l){o.push(at(a,l,!0))}),De(o)}return be.throwArgumentError("invalid type","type",e)}function Be(e,t){e.length!=t.length&&be.throwArgumentError("wrong number of values; expected ${ types.length }","values",t);const n=[];return e.forEach(function(r,a){n.push(at(r,t[a]))}),tt(De(n))}function Sr(e,t){return qt(Be(e,t))}function Tr(e,t){return nt(Be(e,t))}const wr=Object.freeze(Object.defineProperty({__proto__:null,pack:Be,keccak256:Sr,sha256:Tr},Symbol.toStringTag,{value:"Module"})),Ar=M(gr),$r=M(Zt),Dr=M(vr),Br=M(Jt),Cr=M(Yt),Ur=M(hr),Fr=M(ir),Nr=M(ur),Lr=M(Gt),Hr=M(Xt),Je=M(_r),Ir=M(wr),Vr=M(pr),zr=M(Qt),Mr=M(xt),Rr=M(er),Ye=M(br),Kr=M(tr),qr=M(fr),Wr=M(sr),Zr=M(rr);(function(e){var t=de&&de.__createBinding||(Object.create?function(s,S,E,I){I===void 0&&(I=E),Object.defineProperty(s,I,{enumerable:!0,get:function(){return S[E]}})}:function(s,S,E,I){I===void 0&&(I=E),s[I]=S[E]}),n=de&&de.__setModuleDefault||(Object.create?function(s,S){Object.defineProperty(s,"default",{enumerable:!0,value:S})}:function(s,S){s.default=S}),r=de&&de.__importStar||function(s){if(s&&s.__esModule)return s;var S={};if(s!=null)for(var E in s)E!=="default"&&Object.prototype.hasOwnProperty.call(s,E)&&t(S,s,E);return n(S,s),S};Object.defineProperty(e,"__esModule",{value:!0}),e.formatBytes32String=e.Utf8ErrorFuncs=e.toUtf8String=e.toUtf8CodePoints=e.toUtf8Bytes=e._toEscapedUtf8String=e.nameprep=e.hexDataSlice=e.hexDataLength=e.hexZeroPad=e.hexValue=e.hexStripZeros=e.hexConcat=e.isHexString=e.hexlify=e.base64=e.base58=e.TransactionDescription=e.LogDescription=e.Interface=e.SigningKey=e.HDNode=e.defaultPath=e.isBytesLike=e.isBytes=e.zeroPad=e.stripZeros=e.concat=e.arrayify=e.shallowCopy=e.resolveProperties=e.getStatic=e.defineReadOnly=e.deepCopy=e.checkProperties=e.poll=e.fetchJson=e._fetchData=e.RLP=e.Logger=e.checkResultErrors=e.FormatTypes=e.ParamType=e.FunctionFragment=e.EventFragment=e.ErrorFragment=e.ConstructorFragment=e.Fragment=e.defaultAbiCoder=e.AbiCoder=void 0,e.Indexed=e.Utf8ErrorReason=e.UnicodeNormalizationForm=e.SupportedAlgorithm=e.mnemonicToSeed=e.isValidMnemonic=e.entropyToMnemonic=e.mnemonicToEntropy=e.getAccountPath=e.verifyTypedData=e.verifyMessage=e.recoverPublicKey=e.computePublicKey=e.recoverAddress=e.computeAddress=e.getJsonWalletAddress=e.TransactionTypes=e.serializeTransaction=e.parseTransaction=e.accessListify=e.joinSignature=e.splitSignature=e.soliditySha256=e.solidityKeccak256=e.solidityPack=e.shuffled=e.randomBytes=e.sha512=e.sha256=e.ripemd160=e.keccak256=e.computeHmac=e.commify=e.parseUnits=e.formatUnits=e.parseEther=e.formatEther=e.isAddress=e.getCreate2Address=e.getContractAddress=e.getIcapAddress=e.getAddress=e._TypedDataEncoder=e.id=e.isValidName=e.namehash=e.hashMessage=e.dnsEncode=e.parseBytes32String=void 0;var a=Ar;Object.defineProperty(e,"AbiCoder",{enumerable:!0,get:function(){return a.AbiCoder}}),Object.defineProperty(e,"checkResultErrors",{enumerable:!0,get:function(){return a.checkResultErrors}}),Object.defineProperty(e,"ConstructorFragment",{enumerable:!0,get:function(){return a.ConstructorFragment}}),Object.defineProperty(e,"defaultAbiCoder",{enumerable:!0,get:function(){return a.defaultAbiCoder}}),Object.defineProperty(e,"ErrorFragment",{enumerable:!0,get:function(){return a.ErrorFragment}}),Object.defineProperty(e,"EventFragment",{enumerable:!0,get:function(){return a.EventFragment}}),Object.defineProperty(e,"FormatTypes",{enumerable:!0,get:function(){return a.FormatTypes}}),Object.defineProperty(e,"Fragment",{enumerable:!0,get:function(){return a.Fragment}}),Object.defineProperty(e,"FunctionFragment",{enumerable:!0,get:function(){return a.FunctionFragment}}),Object.defineProperty(e,"Indexed",{enumerable:!0,get:function(){return a.Indexed}}),Object.defineProperty(e,"Interface",{enumerable:!0,get:function(){return a.Interface}}),Object.defineProperty(e,"LogDescription",{enumerable:!0,get:function(){return a.LogDescription}}),Object.defineProperty(e,"ParamType",{enumerable:!0,get:function(){return a.ParamType}}),Object.defineProperty(e,"TransactionDescription",{enumerable:!0,get:function(){return a.TransactionDescription}});var i=$r;Object.defineProperty(e,"getAddress",{enumerable:!0,get:function(){return i.getAddress}}),Object.defineProperty(e,"getCreate2Address",{enumerable:!0,get:function(){return i.getCreate2Address}}),Object.defineProperty(e,"getContractAddress",{enumerable:!0,get:function(){return i.getContractAddress}}),Object.defineProperty(e,"getIcapAddress",{enumerable:!0,get:function(){return i.getIcapAddress}}),Object.defineProperty(e,"isAddress",{enumerable:!0,get:function(){return i.isAddress}});var o=r(Dr);e.base64=o;var l=Br;Object.defineProperty(e,"base58",{enumerable:!0,get:function(){return l.Base58}});var u=Cr;Object.defineProperty(e,"arrayify",{enumerable:!0,get:function(){return u.arrayify}}),Object.defineProperty(e,"concat",{enumerable:!0,get:function(){return u.concat}}),Object.defineProperty(e,"hexConcat",{enumerable:!0,get:function(){return u.hexConcat}}),Object.defineProperty(e,"hexDataSlice",{enumerable:!0,get:function(){return u.hexDataSlice}}),Object.defineProperty(e,"hexDataLength",{enumerable:!0,get:function(){return u.hexDataLength}}),Object.defineProperty(e,"hexlify",{enumerable:!0,get:function(){return u.hexlify}}),Object.defineProperty(e,"hexStripZeros",{enumerable:!0,get:function(){return u.hexStripZeros}}),Object.defineProperty(e,"hexValue",{enumerable:!0,get:function(){return u.hexValue}}),Object.defineProperty(e,"hexZeroPad",{enumerable:!0,get:function(){return u.hexZeroPad}}),Object.defineProperty(e,"isBytes",{enumerable:!0,get:function(){return u.isBytes}}),Object.defineProperty(e,"isBytesLike",{enumerable:!0,get:function(){return u.isBytesLike}}),Object.defineProperty(e,"isHexString",{enumerable:!0,get:function(){return u.isHexString}}),Object.defineProperty(e,"joinSignature",{enumerable:!0,get:function(){return u.joinSignature}}),Object.defineProperty(e,"zeroPad",{enumerable:!0,get:function(){return u.zeroPad}}),Object.defineProperty(e,"splitSignature",{enumerable:!0,get:function(){return u.splitSignature}}),Object.defineProperty(e,"stripZeros",{enumerable:!0,get:function(){return u.stripZeros}});var g=Ur;Object.defineProperty(e,"_TypedDataEncoder",{enumerable:!0,get:function(){return g._TypedDataEncoder}}),Object.defineProperty(e,"dnsEncode",{enumerable:!0,get:function(){return g.dnsEncode}}),Object.defineProperty(e,"hashMessage",{enumerable:!0,get:function(){return g.hashMessage}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return g.id}}),Object.defineProperty(e,"isValidName",{enumerable:!0,get:function(){return g.isValidName}}),Object.defineProperty(e,"namehash",{enumerable:!0,get:function(){return g.namehash}});var B=Fr;Object.defineProperty(e,"defaultPath",{enumerable:!0,get:function(){return B.defaultPath}}),Object.defineProperty(e,"entropyToMnemonic",{enumerable:!0,get:function(){return B.entropyToMnemonic}}),Object.defineProperty(e,"getAccountPath",{enumerable:!0,get:function(){return B.getAccountPath}}),Object.defineProperty(e,"HDNode",{enumerable:!0,get:function(){return B.HDNode}}),Object.defineProperty(e,"isValidMnemonic",{enumerable:!0,get:function(){return B.isValidMnemonic}}),Object.defineProperty(e,"mnemonicToEntropy",{enumerable:!0,get:function(){return B.mnemonicToEntropy}}),Object.defineProperty(e,"mnemonicToSeed",{enumerable:!0,get:function(){return B.mnemonicToSeed}});var L=Nr;Object.defineProperty(e,"getJsonWalletAddress",{enumerable:!0,get:function(){return L.getJsonWalletAddress}});var z=Lr;Object.defineProperty(e,"keccak256",{enumerable:!0,get:function(){return z.keccak256}});var A=Hr;Object.defineProperty(e,"Logger",{enumerable:!0,get:function(){return A.Logger}});var j=Je;Object.defineProperty(e,"computeHmac",{enumerable:!0,get:function(){return j.computeHmac}}),Object.defineProperty(e,"ripemd160",{enumerable:!0,get:function(){return j.ripemd160}}),Object.defineProperty(e,"sha256",{enumerable:!0,get:function(){return j.sha256}}),Object.defineProperty(e,"sha512",{enumerable:!0,get:function(){return j.sha512}});var V=Ir;Object.defineProperty(e,"solidityKeccak256",{enumerable:!0,get:function(){return V.keccak256}}),Object.defineProperty(e,"solidityPack",{enumerable:!0,get:function(){return V.pack}}),Object.defineProperty(e,"soliditySha256",{enumerable:!0,get:function(){return V.sha256}});var N=Vr;Object.defineProperty(e,"randomBytes",{enumerable:!0,get:function(){return N.randomBytes}}),Object.defineProperty(e,"shuffled",{enumerable:!0,get:function(){return N.shuffled}});var O=zr;Object.defineProperty(e,"checkProperties",{enumerable:!0,get:function(){return O.checkProperties}}),Object.defineProperty(e,"deepCopy",{enumerable:!0,get:function(){return O.deepCopy}}),Object.defineProperty(e,"defineReadOnly",{enumerable:!0,get:function(){return O.defineReadOnly}}),Object.defineProperty(e,"getStatic",{enumerable:!0,get:function(){return O.getStatic}}),Object.defineProperty(e,"resolveProperties",{enumerable:!0,get:function(){return O.resolveProperties}}),Object.defineProperty(e,"shallowCopy",{enumerable:!0,get:function(){return O.shallowCopy}});var H=r(Mr);e.RLP=H;var y=Rr;Object.defineProperty(e,"computePublicKey",{enumerable:!0,get:function(){return y.computePublicKey}}),Object.defineProperty(e,"recoverPublicKey",{enumerable:!0,get:function(){return y.recoverPublicKey}}),Object.defineProperty(e,"SigningKey",{enumerable:!0,get:function(){return y.SigningKey}});var $=Ye;Object.defineProperty(e,"formatBytes32String",{enumerable:!0,get:function(){return $.formatBytes32String}}),Object.defineProperty(e,"nameprep",{enumerable:!0,get:function(){return $.nameprep}}),Object.defineProperty(e,"parseBytes32String",{enumerable:!0,get:function(){return $.parseBytes32String}}),Object.defineProperty(e,"_toEscapedUtf8String",{enumerable:!0,get:function(){return $._toEscapedUtf8String}}),Object.defineProperty(e,"toUtf8Bytes",{enumerable:!0,get:function(){return $.toUtf8Bytes}}),Object.defineProperty(e,"toUtf8CodePoints",{enumerable:!0,get:function(){return $.toUtf8CodePoints}}),Object.defineProperty(e,"toUtf8String",{enumerable:!0,get:function(){return $.toUtf8String}}),Object.defineProperty(e,"Utf8ErrorFuncs",{enumerable:!0,get:function(){return $.Utf8ErrorFuncs}});var p=Kr;Object.defineProperty(e,"accessListify",{enumerable:!0,get:function(){return p.accessListify}}),Object.defineProperty(e,"computeAddress",{enumerable:!0,get:function(){return p.computeAddress}}),Object.defineProperty(e,"parseTransaction",{enumerable:!0,get:function(){return p.parse}}),Object.defineProperty(e,"recoverAddress",{enumerable:!0,get:function(){return p.recoverAddress}}),Object.defineProperty(e,"serializeTransaction",{enumerable:!0,get:function(){return p.serialize}}),Object.defineProperty(e,"TransactionTypes",{enumerable:!0,get:function(){return p.TransactionTypes}});var _=qr;Object.defineProperty(e,"commify",{enumerable:!0,get:function(){return _.commify}}),Object.defineProperty(e,"formatEther",{enumerable:!0,get:function(){return _.formatEther}}),Object.defineProperty(e,"parseEther",{enumerable:!0,get:function(){return _.parseEther}}),Object.defineProperty(e,"formatUnits",{enumerable:!0,get:function(){return _.formatUnits}}),Object.defineProperty(e,"parseUnits",{enumerable:!0,get:function(){return _.parseUnits}});var C=Wr;Object.defineProperty(e,"verifyMessage",{enumerable:!0,get:function(){return C.verifyMessage}}),Object.defineProperty(e,"verifyTypedData",{enumerable:!0,get:function(){return C.verifyTypedData}});var P=Zr;Object.defineProperty(e,"_fetchData",{enumerable:!0,get:function(){return P._fetchData}}),Object.defineProperty(e,"fetchJson",{enumerable:!0,get:function(){return P.fetchJson}}),Object.defineProperty(e,"poll",{enumerable:!0,get:function(){return P.poll}});var k=Je;Object.defineProperty(e,"SupportedAlgorithm",{enumerable:!0,get:function(){return k.SupportedAlgorithm}});var v=Ye;Object.defineProperty(e,"UnicodeNormalizationForm",{enumerable:!0,get:function(){return v.UnicodeNormalizationForm}}),Object.defineProperty(e,"Utf8ErrorReason",{enumerable:!0,get:function(){return v.Utf8ErrorReason}})})(ee);function Ge(e,t,n){const r=e.slice();return r[16]=t[n],r}function Jr(e){return{c:d,l:d,m:d,p:d,d}}function Yr(e){var r;let t=ee.formatEther((r=e[20])!=null?r:0).toLocaleString()+"",n;return{c(){n=T(t)},l(a){n=w(a,t)},m(a,i){R(a,n,i)},p(a,i){var o;i&256&&t!==(t=ee.formatEther((o=a[20])!=null?o:0).toLocaleString()+"")&&ie(n,t)},d(a){a&&f(n)}}}function Gr(e){return{c:d,l:d,m:d,p:d,d}}function Xr(e){return{c:d,l:d,m:d,p:d,d}}function Qr(e){let t=(e[20]?e[20].toNumber().toLocaleString():"-")+"",n;return{c(){n=T(t)},l(r){n=w(r,t)},m(r,a){R(r,n,a)},p(r,a){a&2&&t!==(t=(r[20]?r[20].toNumber().toLocaleString():"-")+"")&&ie(n,t)},d(r){r&&f(n)}}}function xr(e){return{c:d,l:d,m:d,p:d,d}}function en(e){return{c:d,l:d,m:d,p:d,d}}function tn(e){let t=(e[20]?ee.formatEther(e[20]):"-")+"",n;return{c(){n=T(t)},l(r){n=w(r,t)},m(r,a){R(r,n,a)},p(r,a){a&1&&t!==(t=(r[20]?ee.formatEther(r[20]):"-")+"")&&ie(n,t)},d(r){r&&f(n)}}}function rn(e){return{c:d,l:d,m:d,p:d,d}}function nn(e){let t,n,r,a,i,o,l,u,g,B,L,z,A,j,V,N,O,H,y,$,p,_,C,P,k,v={ctx:e,current:null,token:null,hasCatch:!1,pending:xr,then:Qr,catch:Xr,value:20};X(B=e[1],v);let s={ctx:e,current:null,token:null,hasCatch:!1,pending:rn,then:tn,catch:en,value:20};return X(H=e[0],s),{c(){t=m("div"),n=m("h2"),r=T("Buy 5,000 KWC"),a=U(),i=m("div"),o=m("p"),l=T("Rate"),u=U(),g=m("p"),v.block.c(),L=T(" KWC/ETH"),z=U(),A=m("div"),j=m("p"),V=T("Price"),N=U(),O=m("p"),s.block.c(),y=T(" ETH"),$=U(),p=m("div"),_=m("button"),C=T("Buy Now"),this.h()},l(S){t=b(S,"DIV",{class:!0});var E=h(t);n=b(E,"H2",{class:!0});var I=h(n);r=w(I,"Buy 5,000 KWC"),I.forEach(f),a=F(E),i=b(E,"DIV",{class:!0});var q=h(i);o=b(q,"P",{});var Y=h(o);l=w(Y,"Rate"),Y.forEach(f),u=F(q),g=b(q,"P",{class:!0});var Q=h(g);v.block.l(Q),L=w(Q," KWC/ETH"),Q.forEach(f),q.forEach(f),z=F(E),A=b(E,"DIV",{class:!0});var G=h(A);j=b(G,"P",{});var re=h(j);V=w(re,"Price"),re.forEach(f),N=F(G),O=b(G,"P",{class:!0});var ue=h(O);s.block.l(ue),y=w(ue," ETH"),ue.forEach(f),G.forEach(f),$=F(E),p=b(E,"DIV",{class:!0});var ne=h(p);_=b(ne,"BUTTON",{class:!0});var Z=h(_);C=w(Z,"Buy Now"),Z.forEach(f),ne.forEach(f),E.forEach(f),this.h()},h(){D(n,"class","card-title"),D(g,"class","flex-grow-0"),D(i,"class","flex w-full justify-between"),D(O,"class","flex-grow-0"),D(A,"class","flex w-full justify-between"),D(_,"class","btn btn-primary"),he(_,"loading",e[3]),D(p,"class","card-actions mt-4"),D(t,"class","card-body items-center")},m(S,E){R(S,t,E),c(t,n),c(n,r),c(t,a),c(t,i),c(i,o),c(o,l),c(i,u),c(i,g),v.block.m(g,v.anchor=null),v.mount=()=>g,v.anchor=L,c(g,L),c(t,z),c(t,A),c(A,j),c(j,V),c(A,N),c(A,O),s.block.m(O,s.anchor=null),s.mount=()=>O,s.anchor=y,c(O,y),c(t,$),c(t,p),c(p,_),c(_,C),P||(k=Ae(_,"click",e[10]),P=!0)},p(S,E){e=S,v.ctx=e,E&2&&B!==(B=e[1])&&X(B,v)||fe(v,e,E),s.ctx=e,E&1&&H!==(H=e[0])&&X(H,s)||fe(s,e,E),E&8&&he(_,"loading",e[3])},d(S){S&&f(t),v.block.d(),v.token=null,v=null,s.block.d(),s.token=null,s=null,P=!1,k()}}}function an(e){return{c:d,l:d,m:d,p:d,d}}function on(e){let t=(e[20]?e[20].toNumber().toLocaleString():"-")+"",n;return{c(){n=T(t)},l(r){n=w(r,t)},m(r,a){R(r,n,a)},p(r,a){a&2&&t!==(t=(r[20]?r[20].toNumber().toLocaleString():"-")+"")&&ie(n,t)},d(r){r&&f(n)}}}function cn(e){return{c:d,l:d,m:d,p:d,d}}function ln(e){return{c:d,l:d,m:d,p:d,d}}function un(e){let t=(e[20]?ee.formatEther(e[20]):"-")+"",n;return{c(){n=T(t)},l(r){n=w(r,t)},m(r,a){R(r,n,a)},p(r,a){a&1&&t!==(t=(r[20]?ee.formatEther(r[20]):"-")+"")&&ie(n,t)},d(r){r&&f(n)}}}function sn(e){return{c:d,l:d,m:d,p:d,d}}function fn(e){return{c:d,l:d,m:d,p:d,d}}function dn(e){let t,n;function r(o,l){return l&512&&(t=null),t==null&&(t=!!(o[20]&&o[20].lt(ee.parseEther("5000")))),t?bn:mn}let a=r(e,-1),i=a(e);return{c(){i.c(),n=Pe()},l(o){i.l(o),n=Pe()},m(o,l){i.m(o,l),R(o,n,l)},p(o,l){a===(a=r(o,l))&&i?i.p(o,l):(i.d(1),i=a(o),i&&(i.c(),i.m(n.parentNode,n)))},d(o){i.d(o),o&&f(n)}}}function mn(e){let t,n,r,a;return{c(){t=m("button"),n=T("Sell Now"),this.h()},l(i){t=b(i,"BUTTON",{class:!0});var o=h(t);n=w(o,"Sell Now"),o.forEach(f),this.h()},h(){D(t,"class","btn btn-primary"),he(t,"loading",e[4])},m(i,o){R(i,t,o),c(t,n),r||(a=Ae(t,"click",e[11]),r=!0)},p(i,o){o&16&&he(t,"loading",i[4])},d(i){i&&f(t),r=!1,a()}}}function bn(e){let t,n,r,a;return{c(){t=m("button"),n=T("Approve"),this.h()},l(i){t=b(i,"BUTTON",{class:!0});var o=h(t);n=w(o,"Approve"),o.forEach(f),this.h()},h(){D(t,"class","btn btn-primary"),he(t,"loading",e[5])},m(i,o){R(i,t,o),c(t,n),r||(a=Ae(t,"click",e[12]),r=!0)},p(i,o){o&32&&he(t,"loading",i[5])},d(i){i&&f(t),r=!1,a()}}}function hn(e){return{c:d,l:d,m:d,p:d,d}}function gn(e){let t,n,r,a,i,o,l,u,g,B,L,z,A,j,V,N,O,H,y,$,p,_,C={ctx:e,current:null,token:null,hasCatch:!1,pending:cn,then:on,catch:an,value:20};X(B=e[1],C);let P={ctx:e,current:null,token:null,hasCatch:!1,pending:sn,then:un,catch:ln,value:20};X(H=e[0],P);let k={ctx:e,current:null,token:null,hasCatch:!1,pending:hn,then:dn,catch:fn,value:20};return X(_=e[9],k),{c(){t=m("div"),n=m("h2"),r=T("Sell 5,000 KWC"),a=U(),i=m("div"),o=m("p"),l=T("Rate"),u=U(),g=m("p"),C.block.c(),L=T(" KWC/ETH"),z=U(),A=m("div"),j=m("p"),V=T("Price"),N=U(),O=m("p"),P.block.c(),y=T(" ETH"),$=U(),p=m("div"),k.block.c(),this.h()},l(v){t=b(v,"DIV",{class:!0});var s=h(t);n=b(s,"H2",{class:!0});var S=h(n);r=w(S,"Sell 5,000 KWC"),S.forEach(f),a=F(s),i=b(s,"DIV",{class:!0});var E=h(i);o=b(E,"P",{});var I=h(o);l=w(I,"Rate"),I.forEach(f),u=F(E),g=b(E,"P",{class:!0});var q=h(g);C.block.l(q),L=w(q," KWC/ETH"),q.forEach(f),E.forEach(f),z=F(s),A=b(s,"DIV",{class:!0});var Y=h(A);j=b(Y,"P",{});var Q=h(j);V=w(Q,"Price"),Q.forEach(f),N=F(Y),O=b(Y,"P",{class:!0});var G=h(O);P.block.l(G),y=w(G," ETH"),G.forEach(f),Y.forEach(f),$=F(s),p=b(s,"DIV",{class:!0});var re=h(p);k.block.l(re),re.forEach(f),s.forEach(f),this.h()},h(){D(n,"class","card-title"),D(g,"class","flex-grow-0"),D(i,"class","flex w-full justify-between"),D(O,"class","flex-grow-0"),D(A,"class","flex w-full justify-between"),D(p,"class","card-actions mt-4"),D(t,"class","card-body items-center")},m(v,s){R(v,t,s),c(t,n),c(n,r),c(t,a),c(t,i),c(i,o),c(o,l),c(i,u),c(i,g),C.block.m(g,C.anchor=null),C.mount=()=>g,C.anchor=L,c(g,L),c(t,z),c(t,A),c(A,j),c(j,V),c(A,N),c(A,O),P.block.m(O,P.anchor=null),P.mount=()=>O,P.anchor=y,c(O,y),c(t,$),c(t,p),k.block.m(p,k.anchor=null),k.mount=()=>p,k.anchor=null},p(v,s){e=v,C.ctx=e,s&2&&B!==(B=e[1])&&X(B,C)||fe(C,e,s),P.ctx=e,s&1&&H!==(H=e[0])&&X(H,P)||fe(P,e,s),k.ctx=e,s&512&&_!==(_=e[9])&&X(_,k)||fe(k,e,s)},d(v){v&&f(t),C.block.d(),C.token=null,C=null,P.block.d(),P.token=null,P=null,k.block.d(),k.token=null,k=null}}}function _n(e){let t,n,r=e[6].reverse(),a=[];for(let o=0;o<r.length;o+=1)a[o]=Qe(Ge(e,r,o));const i=o=>se(a[o],1,1,()=>{a[o]=null});return{c(){for(let o=0;o<a.length;o+=1)a[o].c();t=Pe()},l(o){for(let l=0;l<a.length;l+=1)a[l].l(o);t=Pe()},m(o,l){for(let u=0;u<a.length;u+=1)a[u].m(o,l);R(o,t,l),n=!0},p(o,l){if(l&68){r=o[6].reverse();let u;for(u=0;u<r.length;u+=1){const g=Ge(o,r,u);a[u]?(a[u].p(g,l),le(a[u],1)):(a[u]=Qe(g),a[u].c(),le(a[u],1),a[u].m(t.parentNode,t))}for(et(),u=r.length;u<a.length;u+=1)i(u);xe()}},i(o){if(!n){for(let l=0;l<r.length;l+=1)le(a[l]);n=!0}},o(o){a=a.filter(Boolean);for(let l=0;l<a.length;l+=1)se(a[l]);n=!1},d(o){ut(a,o),o&&f(t)}}}function yn(e){let t,n;return{c(){t=m("tr"),n=T("loading...")},l(r){t=b(r,"TR",{});var a=h(t);n=w(a,"loading..."),a.forEach(f)},m(r,a){R(r,t,a),c(t,n)},p:d,i:d,o:d,d(r){r&&f(t)}}}function pn(e){return{c:d,l:d,m:d,p:d,d}}function vn(e){let t=Ze(e[19].timestamp*1e3).fromNow(!0)+"",n;return{c(){n=T(t)},l(r){n=w(r,t)},m(r,a){R(r,n,a)},p(r,a){a&64&&t!==(t=Ze(r[19].timestamp*1e3).fromNow(!0)+"")&&ie(n,t)},d(r){r&&f(n)}}}function Pn(e){let t;return{c(){t=T("loading...")},l(n){t=w(n,"loading...")},m(n,r){R(n,t,r)},p:d,d(n){n&&f(t)}}}function Xe(e){let t,n;return{c(){t=m("div"),n=T("You"),this.h()},l(r){t=b(r,"DIV",{class:!0});var a=h(t);n=w(a,"You"),a.forEach(f),this.h()},h(){D(t,"class","badge badge-sm badge-ghost")},m(r,a){R(r,t,a),c(t,n)},d(r){r&&f(t)}}}function En(e){let t,n;return{c(){t=m("div"),n=T("Sell"),this.h()},l(r){t=b(r,"DIV",{class:!0});var a=h(t);n=w(a,"Sell"),a.forEach(f),this.h()},h(){D(t,"class","badge badge-secondary badge-sm")},m(r,a){R(r,t,a),c(t,n)},d(r){r&&f(t)}}}function jn(e){let t,n;return{c(){t=m("div"),n=T("Buy"),this.h()},l(r){t=b(r,"DIV",{class:!0});var a=h(t);n=w(a,"Buy"),a.forEach(f),this.h()},h(){D(t,"class","badge badge-primary badge-sm")},m(r,a){R(r,t,a),c(t,n)},d(r){r&&f(t)}}}function Qe(e){let t,n,r,a,i,o,l,u,g=We(e[16].args.who)+"",B,L,z,A,j,V,N,O=ee.formatEther(e[16].args.tokenAmount)+"",H,y,$,p={ctx:e,current:null,token:null,hasCatch:!1,pending:Pn,then:vn,catch:pn,value:19};X(r=e[16].getBlock(),p),l=new ar({props:{size:"18",address:e[16].args.who}});let _=e[16].args.who===e[2]&&Xe();function C(v,s){return v[16].args.side==="buy"?jn:En}let P=C(e),k=P(e);return{c(){t=m("tr"),n=m("td"),p.block.c(),a=U(),i=m("td"),o=m("div"),ke(l.$$.fragment),u=U(),B=T(g),L=U(),_&&_.c(),z=U(),A=m("td"),j=m("div"),k.c(),V=U(),N=m("td"),H=T(O),y=U(),this.h()},l(v){t=b(v,"TR",{});var s=h(t);n=b(s,"TD",{});var S=h(n);p.block.l(S),S.forEach(f),a=F(s),i=b(s,"TD",{});var E=h(i);o=b(E,"DIV",{class:!0});var I=h(o);Se(l.$$.fragment,I),u=F(I),B=w(I,g),L=F(I),_&&_.l(I),I.forEach(f),E.forEach(f),z=F(s),A=b(s,"TD",{});var q=h(A);j=b(q,"DIV",{class:!0});var Y=h(j);k.l(Y),Y.forEach(f),q.forEach(f),V=F(s),N=b(s,"TD",{});var Q=h(N);H=w(Q,O),Q.forEach(f),y=F(s),s.forEach(f),this.h()},h(){D(o,"class","flex items-center gap-2"),D(j,"class","flex items-center gap-2")},m(v,s){R(v,t,s),c(t,n),p.block.m(n,p.anchor=null),p.mount=()=>n,p.anchor=null,c(t,a),c(t,i),c(i,o),Te(l,o,null),c(o,u),c(o,B),c(o,L),_&&_.m(o,null),c(t,z),c(t,A),c(A,j),k.m(j,null),c(t,V),c(t,N),c(N,H),c(t,y),$=!0},p(v,s){e=v,p.ctx=e,s&64&&r!==(r=e[16].getBlock())&&X(r,p)||fe(p,e,s);const S={};s&64&&(S.address=e[16].args.who),l.$set(S),(!$||s&64)&&g!==(g=We(e[16].args.who)+"")&&ie(B,g),e[16].args.who===e[2]?_||(_=Xe(),_.c(),_.m(o,null)):_&&(_.d(1),_=null),P!==(P=C(e))&&(k.d(1),k=P(e),k&&(k.c(),k.m(j,null))),(!$||s&64)&&O!==(O=ee.formatEther(e[16].args.tokenAmount)+"")&&ie(H,O)},i(v){$||(le(l.$$.fragment,v),$=!0)},o(v){se(l.$$.fragment,v),$=!1},d(v){v&&f(t),p.block.d(),p.token=null,p=null,we(l),_&&_.d(),k.d()}}}function On(e){let t,n,r,a,i,o,l,u,g,B,L,z,A,j,V,N,O,H,y,$,p,_,C,P,k,v,s,S,E,I,q,Y,Q,G,re,ue,ne,Z,te,Ee,ge,ye,x={ctx:e,current:null,token:null,hasCatch:!1,pending:Gr,then:Yr,catch:Jr,value:20};X(g=e[8],x),j=new qe({props:{class:"not-prose mt-8",$$slots:{default:[nn]},$$scope:{ctx:e}}}),N=new qe({props:{class:"not-prose mt-8",$$slots:{default:[gn]},$$scope:{ctx:e}}});const Ce=[yn,_n],ae=[];function Ue(K,J){return K[7]&&K[6].length===0?0:1}return Z=Ue(e),te=ae[Z]=Ce[Z](e),{c(){t=m("meta"),n=U(),r=m("section"),a=m("h3"),i=T("You have"),o=U(),l=m("div"),u=m("span"),x.block.c(),B=U(),L=m("span"),z=T("KWC"),A=U(),ke(j.$$.fragment),V=U(),ke(N.$$.fragment),O=U(),H=m("h2"),y=T("Logs"),$=U(),p=m("div"),_=m("table"),C=m("thead"),P=m("tr"),k=m("th"),v=T("Age"),s=U(),S=m("th"),E=T("Who"),I=U(),q=m("th"),Y=T("Side"),Q=U(),G=m("th"),re=T("Value"),ue=U(),ne=m("tbody"),te.c(),Ee=U(),ge=m("div"),this.h()},l(K){const J=it('[data-svelte="svelte-8gb88t"]',document.head);t=b(J,"META",{name:!0,content:!0}),J.forEach(f),n=F(K),r=b(K,"SECTION",{class:!0});var W=h(r);a=b(W,"H3",{class:!0});var _e=h(a);i=w(_e,"You have"),_e.forEach(f),o=F(W),l=b(W,"DIV",{});var oe=h(l);u=b(oe,"SPAN",{class:!0});var Fe=h(u);x.block.l(Fe),Fe.forEach(f),B=F(oe),L=b(oe,"SPAN",{class:!0});var Ne=h(L);z=w(Ne,"KWC"),Ne.forEach(f),oe.forEach(f),A=F(W),Se(j.$$.fragment,W),V=F(W),Se(N.$$.fragment,W),O=F(W),H=b(W,"H2",{});var Le=h(H);y=w(Le,"Logs"),Le.forEach(f),$=F(W),p=b(W,"DIV",{class:!0});var He=h(p);_=b(He,"TABLE",{class:!0});var pe=h(_);C=b(pe,"THEAD",{});var Ie=h(C);P=b(Ie,"TR",{});var ce=h(P);k=b(ce,"TH",{});var Ve=h(k);v=w(Ve,"Age"),Ve.forEach(f),s=F(ce),S=b(ce,"TH",{});var ze=h(S);E=w(ze,"Who"),ze.forEach(f),I=F(ce),q=b(ce,"TH",{});var Me=h(q);Y=w(Me,"Side"),Me.forEach(f),Q=F(ce),G=b(ce,"TH",{});var Re=h(G);re=w(Re,"Value"),Re.forEach(f),ce.forEach(f),Ie.forEach(f),ue=F(pe),ne=b(pe,"TBODY",{});var Ke=h(ne);te.l(Ke),Ke.forEach(f),pe.forEach(f),He.forEach(f),Ee=F(W),ge=b(W,"DIV",{class:!0}),h(ge).forEach(f),W.forEach(f),this.h()},h(){document.title="Home",D(t,"name","description"),D(t,"content","Svelte demo app"),D(a,"class","mt-2"),D(u,"class","text-5xl font-semibold"),D(L,"class","font-bold"),D(_,"class","table table-compact w-full"),D(p,"class","overflow-x-auto max-w-md w-full mx-auto not-prose mt-8 z-0"),D(ge,"class","h-16"),D(r,"class","flex flex-col items-center px-4")},m(K,J){c(document.head,t),R(K,n,J),R(K,r,J),c(r,a),c(a,i),c(r,o),c(r,l),c(l,u),x.block.m(u,x.anchor=null),x.mount=()=>u,x.anchor=null,c(l,B),c(l,L),c(L,z),c(r,A),Te(j,r,null),c(r,V),Te(N,r,null),c(r,O),c(r,H),c(H,y),c(r,$),c(r,p),c(p,_),c(_,C),c(C,P),c(P,k),c(k,v),c(P,s),c(P,S),c(S,E),c(P,I),c(P,q),c(q,Y),c(P,Q),c(P,G),c(G,re),c(_,ue),c(_,ne),ae[Z].m(ne,null),c(r,Ee),c(r,ge),ye=!0},p(K,[J]){e=K,x.ctx=e,J&256&&g!==(g=e[8])&&X(g,x)||fe(x,e,J);const W={};J&2097163&&(W.$$scope={dirty:J,ctx:e}),j.$set(W);const _e={};J&2097715&&(_e.$$scope={dirty:J,ctx:e}),N.$set(_e);let oe=Z;Z=Ue(e),Z===oe?ae[Z].p(e,J):(et(),se(ae[oe],1,1,()=>{ae[oe]=null}),xe(),te=ae[Z],te?te.p(e,J):(te=ae[Z]=Ce[Z](e),te.c()),le(te,1),te.m(ne,null))},i(K){ye||(le(j.$$.fragment,K),le(N.$$.fragment,K),le(te),ye=!0)},o(K){se(j.$$.fragment,K),se(N.$$.fragment,K),se(te),ye=!1},d(K){f(t),K&&f(n),K&&f(r),x.block.d(),x.token=null,x=null,we(j),we(N),ae[Z].d()}}}function kn(e,t,n){let r,a,i,o,l,u,g;je(e,st,y=>n(13,l=y)),je(e,ft,y=>n(14,u=y)),je(e,nr,y=>n(2,g=y));let B=!1,L=!1,z=!1,A=[],j=!1;async function V(){!u||(n(7,j=!0),n(6,A=await u.queryFilter(u.filters.Transfer())),n(7,j=!1))}async function N(){if(!!u){n(3,B=!0);try{const $=await(await u.buyTokens({value:await o})).wait()}catch(y){console.log("error:",y)}finally{n(3,B=!1)}}}async function O(){if(!!u){n(4,L=!0);try{const $=await(await u.sellTokens(ee.parseEther("5000"))).wait()}catch(y){console.log("error:",y)}finally{n(4,L=!1)}}}async function H(){if(!(!l||!r)){n(5,z=!0);try{const $=await(await l.approve(ve,r)).wait()}catch(y){console.log("error:",y)}finally{n(5,z=!1)}}}return e.$$.update=()=>{e.$$.dirty&8196&&n(8,r=l==null?void 0:l.balanceOf(g)),e.$$.dirty&8196&&n(9,a=l==null?void 0:l.allowance(g,ve)),e.$$.dirty&16384&&n(1,i=u==null?void 0:u.TOKEN_RATE()),e.$$.dirty&24580&&u&&u.on("Transfer",(...y)=>{console.log({transactionHash:y[4].transactionHash.slice(2,4),side:y[1],tokenAmount:ee.formatEther(y[3])}),n(8,r=l==null?void 0:l.balanceOf(g)),n(9,a=l==null?void 0:l.allowance(g,ve)),V()}),e.$$.dirty&16384&&u&&V(),e.$$.dirty&8196&&(l==null||l.on("Approval",()=>{n(9,a=l==null?void 0:l.allowance(g,ve)),console.log("Approval")})),e.$$.dirty&2&&n(0,o=(async()=>{if(!i)return;const y=await i;return ee.parseEther("5000").div(y)})())},[o,i,g,B,L,z,A,j,r,a,N,O,H,l,u]}class Un extends ot{constructor(t){super(),ct(this,t,kn,On,lt,{})}}export{Un as default};