import{c as k,b as X}from"./singletons-822f6284.js";var Q=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function rt(c){return c&&c.__esModule&&Object.prototype.hasOwnProperty.call(c,"default")?c.default:c}function it(c){var C=c.default;if(typeof C=="function"){var $=function(){return C.apply(this,arguments)};$.prototype=C.prototype}else $={};return Object.defineProperty($,"__esModule",{value:!0}),Object.keys(c).forEach(function(v){var S=Object.getOwnPropertyDescriptor(c,v);Object.defineProperty($,v,S.get?S:{enumerable:!0,get:function(){return c[v]}})}),$}var K={exports:{}};(function(c,C){(function($,v){c.exports=v()})(Q,function(){var $=1e3,v=6e4,S=36e5,O="millisecond",b="second",T="minute",x="hour",f="day",D="week",m="month",I="quarter",w="year",_="date",L="Invalid Date",P=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,U=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,B={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},J=function(o,n,t){var r=String(o);return!r||r.length>=n?o:""+Array(n+1-r.length).join(t)+o},W={s:J,z:function(o){var n=-o.utcOffset(),t=Math.abs(n),r=Math.floor(t/60),e=t%60;return(n<=0?"+":"-")+J(r,2,"0")+":"+J(e,2,"0")},m:function o(n,t){if(n.date()<t.date())return-o(t,n);var r=12*(t.year()-n.year())+(t.month()-n.month()),e=n.clone().add(r,m),s=t-e<0,i=n.clone().add(r+(s?-1:1),m);return+(-(r+(t-e)/(s?e-i:i-e))||0)},a:function(o){return o<0?Math.ceil(o)||0:Math.floor(o)},p:function(o){return{M:m,y:w,w:D,d:f,D:_,h:x,m:T,s:b,ms:O,Q:I}[o]||String(o||"").toLowerCase().replace(/s$/,"")},u:function(o){return o===void 0}},y="en",g={};g[y]=B;var N=function(o){return o instanceof E},j=function o(n,t,r){var e;if(!n)return y;if(typeof n=="string"){var s=n.toLowerCase();g[s]&&(e=s),t&&(g[s]=t,e=s);var i=n.split("-");if(!e&&i.length>1)return o(i[0])}else{var u=n.name;g[u]=n,e=u}return!r&&e&&(y=e),e||!r&&y},l=function(o,n){if(N(o))return o.clone();var t=typeof n=="object"?n:{};return t.date=o,t.args=arguments,new E(t)},a=W;a.l=j,a.i=N,a.w=function(o,n){return l(o,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var E=function(){function o(t){this.$L=j(t.locale,null,!0),this.parse(t)}var n=o.prototype;return n.parse=function(t){this.$d=function(r){var e=r.date,s=r.utc;if(e===null)return new Date(NaN);if(a.u(e))return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){var i=e.match(P);if(i){var u=i[2]-1||0,d=(i[7]||"0").substring(0,3);return s?new Date(Date.UTC(i[1],u,i[3]||1,i[4]||0,i[5]||0,i[6]||0,d)):new Date(i[1],u,i[3]||1,i[4]||0,i[5]||0,i[6]||0,d)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},n.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},n.$utils=function(){return a},n.isValid=function(){return this.$d.toString()!==L},n.isSame=function(t,r){var e=l(t);return this.startOf(r)<=e&&e<=this.endOf(r)},n.isAfter=function(t,r){return l(t)<this.startOf(r)},n.isBefore=function(t,r){return this.endOf(r)<l(t)},n.$g=function(t,r,e){return a.u(t)?this[r]:this.set(e,t)},n.unix=function(){return Math.floor(this.valueOf()/1e3)},n.valueOf=function(){return this.$d.getTime()},n.startOf=function(t,r){var e=this,s=!!a.u(r)||r,i=a.p(t),u=function(F,M){var A=a.w(e.$u?Date.UTC(e.$y,M,F):new Date(e.$y,M,F),e);return s?A:A.endOf(f)},d=function(F,M){return a.w(e.toDate()[F].apply(e.toDate("s"),(s?[0,0,0,0]:[23,59,59,999]).slice(M)),e)},h=this.$W,p=this.$M,H=this.$D,Y="set"+(this.$u?"UTC":"");switch(i){case w:return s?u(1,0):u(31,11);case m:return s?u(1,p):u(0,p+1);case D:var Z=this.$locale().weekStart||0,z=(h<Z?h+7:h)-Z;return u(s?H-z:H+(6-z),p);case f:case _:return d(Y+"Hours",0);case x:return d(Y+"Minutes",1);case T:return d(Y+"Seconds",2);case b:return d(Y+"Milliseconds",3);default:return this.clone()}},n.endOf=function(t){return this.startOf(t,!1)},n.$set=function(t,r){var e,s=a.p(t),i="set"+(this.$u?"UTC":""),u=(e={},e[f]=i+"Date",e[_]=i+"Date",e[m]=i+"Month",e[w]=i+"FullYear",e[x]=i+"Hours",e[T]=i+"Minutes",e[b]=i+"Seconds",e[O]=i+"Milliseconds",e)[s],d=s===f?this.$D+(r-this.$W):r;if(s===m||s===w){var h=this.clone().set(_,1);h.$d[u](d),h.init(),this.$d=h.set(_,Math.min(this.$D,h.daysInMonth())).$d}else u&&this.$d[u](d);return this.init(),this},n.set=function(t,r){return this.clone().$set(t,r)},n.get=function(t){return this[a.p(t)]()},n.add=function(t,r){var e,s=this;t=Number(t);var i=a.p(r),u=function(p){var H=l(s);return a.w(H.date(H.date()+Math.round(p*t)),s)};if(i===m)return this.set(m,this.$M+t);if(i===w)return this.set(w,this.$y+t);if(i===f)return u(1);if(i===D)return u(7);var d=(e={},e[T]=v,e[x]=S,e[b]=$,e)[i]||1,h=this.$d.getTime()+t*d;return a.w(h,this)},n.subtract=function(t,r){return this.add(-1*t,r)},n.format=function(t){var r=this,e=this.$locale();if(!this.isValid())return e.invalidDate||L;var s=t||"YYYY-MM-DDTHH:mm:ssZ",i=a.z(this),u=this.$H,d=this.$m,h=this.$M,p=e.weekdays,H=e.months,Y=function(M,A,q,V){return M&&(M[A]||M(r,s))||q[A].slice(0,V)},Z=function(M){return a.s(u%12||12,M,"0")},z=e.meridiem||function(M,A,q){var V=M<12?"AM":"PM";return q?V.toLowerCase():V},F={YY:String(this.$y).slice(-2),YYYY:this.$y,M:h+1,MM:a.s(h+1,2,"0"),MMM:Y(e.monthsShort,h,H,3),MMMM:Y(H,h),D:this.$D,DD:a.s(this.$D,2,"0"),d:String(this.$W),dd:Y(e.weekdaysMin,this.$W,p,2),ddd:Y(e.weekdaysShort,this.$W,p,3),dddd:p[this.$W],H:String(u),HH:a.s(u,2,"0"),h:Z(1),hh:Z(2),a:z(u,d,!0),A:z(u,d,!1),m:String(d),mm:a.s(d,2,"0"),s:String(this.$s),ss:a.s(this.$s,2,"0"),SSS:a.s(this.$ms,3,"0"),Z:i};return s.replace(U,function(M,A){return A||F[M]||i.replace(":","")})},n.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},n.diff=function(t,r,e){var s,i=a.p(r),u=l(t),d=(u.utcOffset()-this.utcOffset())*v,h=this-u,p=a.m(this,u);return p=(s={},s[w]=p/12,s[m]=p,s[I]=p/3,s[D]=(h-d)/6048e5,s[f]=(h-d)/864e5,s[x]=h/S,s[T]=h/v,s[b]=h/$,s)[i]||h,e?p:a.a(p)},n.daysInMonth=function(){return this.endOf(m).$D},n.$locale=function(){return g[this.$L]},n.locale=function(t,r){if(!t)return this.$L;var e=this.clone(),s=j(t,r,!0);return s&&(e.$L=s),e},n.clone=function(){return a.w(this.$d,this)},n.toDate=function(){return new Date(this.valueOf())},n.toJSON=function(){return this.isValid()?this.toISOString():null},n.toISOString=function(){return this.$d.toISOString()},n.toString=function(){return this.$d.toUTCString()},o}(),G=E.prototype;return l.prototype=G,[["$ms",O],["$s",b],["$m",T],["$H",x],["$W",f],["$M",m],["$y",w],["$D",_]].forEach(function(o){G[o[1]]=function(n){return this.$g(n,o[0],o[1])}}),l.extend=function(o,n){return o.$i||(o(n,E,l),o.$i=!0),l},l.locale=j,l.isDayjs=N,l.unix=function(o){return l(1e3*o)},l.en=g[y],l.Ls=g,l.p={},l})})(K);const tt=K.exports;var R={exports:{}};(function(c,C){(function($,v){c.exports=v()})(Q,function(){return function($,v,S){$=$||{};var O=v.prototype,b={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function T(f,D,m,I){return O.fromToBase(f,D,m,I)}S.en.relativeTime=b,O.fromToBase=function(f,D,m,I,w){for(var _,L,P,U=m.$locale().relativeTime||b,B=$.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],J=B.length,W=0;W<J;W+=1){var y=B[W];y.d&&(_=I?S(f).diff(m,y.d,!0):m.diff(f,y.d,!0));var g=($.rounding||Math.round)(Math.abs(_));if(P=_>0,g<=y.r||!y.r){g<=1&&W>0&&(y=B[W-1]);var N=U[y.l];w&&(g=w(""+g)),L=typeof N=="string"?N.replace("%d",g):N(g,D,y.l,P);break}}if(D)return L;var j=P?U.future:U.past;return typeof j=="function"?j(L):j.replace("%s",L)},O.to=function(f,D){return T(f,D,this,!0)},O.from=function(f,D){return T(f,D,this)};var x=function(f){return f.$u?S.utc():S()};O.toNow=function(f){return this.to(x(this),f)},O.fromNow=function(f){return this.from(x(this),f)}}})})(R);const et=R.exports;tt.extend(et);k.disable_scroll_handling;k.goto;k.invalidate;k.prefetch;k.prefetch_routes;k.before_navigate;k.after_navigate;const st=(c,C=5,$=3)=>c?`${c.slice(0,C)}...${c.slice(c.length-$)}`:"",ot=c=>X+c;export{rt as a,Q as c,tt as d,it as g,st as s,ot as w};
