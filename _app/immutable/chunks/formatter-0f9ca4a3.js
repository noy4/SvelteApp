import{c as k,b as X}from"./singletons-822f6284.js";var Q=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function rt(y){var L=y.default;if(typeof L=="function"){var l=function(){return L.apply(this,arguments)};l.prototype=L.prototype}else l={};return Object.defineProperty(l,"__esModule",{value:!0}),Object.keys(y).forEach(function(M){var S=Object.getOwnPropertyDescriptor(y,M);Object.defineProperty(l,M,S.get?S:{enumerable:!0,get:function(){return y[M]}})}),l}var K={exports:{}};(function(y,L){(function(l,M){y.exports=M()})(Q,function(){var l=1e3,M=6e4,S=36e5,O="millisecond",b="second",T="minute",x="hour",f="day",D="week",$="month",I="quarter",w="year",_="date",W="Invalid Date",B=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,F=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,J={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},P=function(o,n,t){var r=String(o);return!r||r.length>=n?o:""+Array(n+1-r.length).join(t)+o},C={s:P,z:function(o){var n=-o.utcOffset(),t=Math.abs(n),r=Math.floor(t/60),e=t%60;return(n<=0?"+":"-")+P(r,2,"0")+":"+P(e,2,"0")},m:function o(n,t){if(n.date()<t.date())return-o(t,n);var r=12*(t.year()-n.year())+(t.month()-n.month()),e=n.clone().add(r,$),s=t-e<0,i=n.clone().add(r+(s?-1:1),$);return+(-(r+(t-e)/(s?e-i:i-e))||0)},a:function(o){return o<0?Math.ceil(o)||0:Math.floor(o)},p:function(o){return{M:$,y:w,w:D,d:f,D:_,h:x,m:T,s:b,ms:O,Q:I}[o]||String(o||"").toLowerCase().replace(/s$/,"")},u:function(o){return o===void 0}},g="en",p={};p[g]=J;var N=function(o){return o instanceof V},H=function o(n,t,r){var e;if(!n)return g;if(typeof n=="string"){var s=n.toLowerCase();p[s]&&(e=s),t&&(p[s]=t,e=s);var i=n.split("-");if(!e&&i.length>1)return o(i[0])}else{var u=n.name;p[u]=n,e=u}return!r&&e&&(g=e),e||!r&&g},d=function(o,n){if(N(o))return o.clone();var t=typeof n=="object"?n:{};return t.date=o,t.args=arguments,new V(t)},a=C;a.l=H,a.i=N,a.w=function(o,n){return d(o,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var V=function(){function o(t){this.$L=H(t.locale,null,!0),this.parse(t)}var n=o.prototype;return n.parse=function(t){this.$d=function(r){var e=r.date,s=r.utc;if(e===null)return new Date(NaN);if(a.u(e))return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){var i=e.match(B);if(i){var u=i[2]-1||0,c=(i[7]||"0").substring(0,3);return s?new Date(Date.UTC(i[1],u,i[3]||1,i[4]||0,i[5]||0,i[6]||0,c)):new Date(i[1],u,i[3]||1,i[4]||0,i[5]||0,i[6]||0,c)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},n.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},n.$utils=function(){return a},n.isValid=function(){return this.$d.toString()!==W},n.isSame=function(t,r){var e=d(t);return this.startOf(r)<=e&&e<=this.endOf(r)},n.isAfter=function(t,r){return d(t)<this.startOf(r)},n.isBefore=function(t,r){return this.endOf(r)<d(t)},n.$g=function(t,r,e){return a.u(t)?this[r]:this.set(e,t)},n.unix=function(){return Math.floor(this.valueOf()/1e3)},n.valueOf=function(){return this.$d.getTime()},n.startOf=function(t,r){var e=this,s=!!a.u(r)||r,i=a.p(t),u=function(U,v){var A=a.w(e.$u?Date.UTC(e.$y,v,U):new Date(e.$y,v,U),e);return s?A:A.endOf(f)},c=function(U,v){return a.w(e.toDate()[U].apply(e.toDate("s"),(s?[0,0,0,0]:[23,59,59,999]).slice(v)),e)},h=this.$W,m=this.$M,j=this.$D,Y="set"+(this.$u?"UTC":"");switch(i){case w:return s?u(1,0):u(31,11);case $:return s?u(1,m):u(0,m+1);case D:var Z=this.$locale().weekStart||0,z=(h<Z?h+7:h)-Z;return u(s?j-z:j+(6-z),m);case f:case _:return c(Y+"Hours",0);case x:return c(Y+"Minutes",1);case T:return c(Y+"Seconds",2);case b:return c(Y+"Milliseconds",3);default:return this.clone()}},n.endOf=function(t){return this.startOf(t,!1)},n.$set=function(t,r){var e,s=a.p(t),i="set"+(this.$u?"UTC":""),u=(e={},e[f]=i+"Date",e[_]=i+"Date",e[$]=i+"Month",e[w]=i+"FullYear",e[x]=i+"Hours",e[T]=i+"Minutes",e[b]=i+"Seconds",e[O]=i+"Milliseconds",e)[s],c=s===f?this.$D+(r-this.$W):r;if(s===$||s===w){var h=this.clone().set(_,1);h.$d[u](c),h.init(),this.$d=h.set(_,Math.min(this.$D,h.daysInMonth())).$d}else u&&this.$d[u](c);return this.init(),this},n.set=function(t,r){return this.clone().$set(t,r)},n.get=function(t){return this[a.p(t)]()},n.add=function(t,r){var e,s=this;t=Number(t);var i=a.p(r),u=function(m){var j=d(s);return a.w(j.date(j.date()+Math.round(m*t)),s)};if(i===$)return this.set($,this.$M+t);if(i===w)return this.set(w,this.$y+t);if(i===f)return u(1);if(i===D)return u(7);var c=(e={},e[T]=M,e[x]=S,e[b]=l,e)[i]||1,h=this.$d.getTime()+t*c;return a.w(h,this)},n.subtract=function(t,r){return this.add(-1*t,r)},n.format=function(t){var r=this,e=this.$locale();if(!this.isValid())return e.invalidDate||W;var s=t||"YYYY-MM-DDTHH:mm:ssZ",i=a.z(this),u=this.$H,c=this.$m,h=this.$M,m=e.weekdays,j=e.months,Y=function(v,A,q,E){return v&&(v[A]||v(r,s))||q[A].slice(0,E)},Z=function(v){return a.s(u%12||12,v,"0")},z=e.meridiem||function(v,A,q){var E=v<12?"AM":"PM";return q?E.toLowerCase():E},U={YY:String(this.$y).slice(-2),YYYY:this.$y,M:h+1,MM:a.s(h+1,2,"0"),MMM:Y(e.monthsShort,h,j,3),MMMM:Y(j,h),D:this.$D,DD:a.s(this.$D,2,"0"),d:String(this.$W),dd:Y(e.weekdaysMin,this.$W,m,2),ddd:Y(e.weekdaysShort,this.$W,m,3),dddd:m[this.$W],H:String(u),HH:a.s(u,2,"0"),h:Z(1),hh:Z(2),a:z(u,c,!0),A:z(u,c,!1),m:String(c),mm:a.s(c,2,"0"),s:String(this.$s),ss:a.s(this.$s,2,"0"),SSS:a.s(this.$ms,3,"0"),Z:i};return s.replace(F,function(v,A){return A||U[v]||i.replace(":","")})},n.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},n.diff=function(t,r,e){var s,i=a.p(r),u=d(t),c=(u.utcOffset()-this.utcOffset())*M,h=this-u,m=a.m(this,u);return m=(s={},s[w]=m/12,s[$]=m,s[I]=m/3,s[D]=(h-c)/6048e5,s[f]=(h-c)/864e5,s[x]=h/S,s[T]=h/M,s[b]=h/l,s)[i]||h,e?m:a.a(m)},n.daysInMonth=function(){return this.endOf($).$D},n.$locale=function(){return p[this.$L]},n.locale=function(t,r){if(!t)return this.$L;var e=this.clone(),s=H(t,r,!0);return s&&(e.$L=s),e},n.clone=function(){return a.w(this.$d,this)},n.toDate=function(){return new Date(this.valueOf())},n.toJSON=function(){return this.isValid()?this.toISOString():null},n.toISOString=function(){return this.$d.toISOString()},n.toString=function(){return this.$d.toUTCString()},o}(),G=V.prototype;return d.prototype=G,[["$ms",O],["$s",b],["$m",T],["$H",x],["$W",f],["$M",$],["$y",w],["$D",_]].forEach(function(o){G[o[1]]=function(n){return this.$g(n,o[0],o[1])}}),d.extend=function(o,n){return o.$i||(o(n,V,d),o.$i=!0),d},d.locale=H,d.isDayjs=N,d.unix=function(o){return d(1e3*o)},d.en=p[g],d.Ls=p,d.p={},d})})(K);const tt=K.exports;var R={exports:{}};(function(y,L){(function(l,M){y.exports=M()})(Q,function(){return function(l,M,S){l=l||{};var O=M.prototype,b={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function T(f,D,$,I){return O.fromToBase(f,D,$,I)}S.en.relativeTime=b,O.fromToBase=function(f,D,$,I,w){for(var _,W,B,F=$.$locale().relativeTime||b,J=l.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],P=J.length,C=0;C<P;C+=1){var g=J[C];g.d&&(_=I?S(f).diff($,g.d,!0):$.diff(f,g.d,!0));var p=(l.rounding||Math.round)(Math.abs(_));if(B=_>0,p<=g.r||!g.r){p<=1&&C>0&&(g=J[C-1]);var N=F[g.l];w&&(p=w(""+p)),W=typeof N=="string"?N.replace("%d",p):N(p,D,g.l,B);break}}if(D)return W;var H=B?F.future:F.past;return typeof H=="function"?H(W):H.replace("%s",W)},O.to=function(f,D){return T(f,D,this,!0)},O.from=function(f,D){return T(f,D,this)};var x=function(f){return f.$u?S.utc():S()};O.toNow=function(f){return this.to(x(this),f)},O.fromNow=function(f){return this.from(x(this),f)}}})})(R);const et=R.exports;tt.extend(et);k.disable_scroll_handling;k.goto;k.invalidate;k.prefetch;k.prefetch_routes;k.before_navigate;k.after_navigate;const it=(y,L=5,l=3)=>y?`${y.slice(0,L)}...${y.slice(y.length-l)}`:"",st=y=>X+y;export{Q as c,tt as d,rt as g,it as s,st as w};
