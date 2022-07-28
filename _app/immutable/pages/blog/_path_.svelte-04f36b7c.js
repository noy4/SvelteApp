import{S as le,i as ae,s as oe,l as v,r as he,a as F,Z as ce,m as q,n as O,u as pe,h as Z,c as H,_ as ue,p as Q,b as fe,M as C,v as ge,E as V}from"../../chunks/index-cf6d3c37.js";import{w as de}from"../../chunks/formatter-0f9ca4a3.js";import"../../chunks/singletons-822f6284.js";function ee(){return{baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let L=ee();function ke(l){L=l}const me=/[&<>"']/,xe=/[&<>"']/g,we=/[<>"']|&(?!#?\w+;)/,be=/[<>"']|&(?!#?\w+;)/g,_e={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},W=l=>_e[l];function w(l,e){if(e){if(me.test(l))return l.replace(xe,W)}else if(we.test(l))return l.replace(be,W);return l}const ye=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function te(l){return l.replace(ye,(e,n)=>(n=n.toLowerCase(),n==="colon"?":":n.charAt(0)==="#"?n.charAt(1)==="x"?String.fromCharCode(parseInt(n.substring(2),16)):String.fromCharCode(+n.substring(1)):""))}const $e=/(^|[^\[])\^/g;function k(l,e){l=typeof l=="string"?l:l.source,e=e||"";const n={replace:(t,i)=>(i=i.source||i,i=i.replace($e,"$1"),l=l.replace(t,i),n),getRegex:()=>new RegExp(l,e)};return n}const ze=/[^\w:]/g,Se=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function X(l,e,n){if(l){let t;try{t=decodeURIComponent(te(n)).replace(ze,"").toLowerCase()}catch{return null}if(t.indexOf("javascript:")===0||t.indexOf("vbscript:")===0||t.indexOf("data:")===0)return null}e&&!Se.test(n)&&(n=Ae(e,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch{return null}return n}const U={},Te=/^[^:]+:\/*[^/]*$/,Re=/^([^:]+:)[\s\S]*$/,Ie=/^([^:]+:\/*[^/]*)[\s\S]*$/;function Ae(l,e){U[" "+l]||(Te.test(l)?U[" "+l]=l+"/":U[" "+l]=j(l,"/",!0)),l=U[" "+l];const n=l.indexOf(":")===-1;return e.substring(0,2)==="//"?n?e:l.replace(Re,"$1")+e:e.charAt(0)==="/"?n?e:l.replace(Ie,"$1")+e:l+e}const M={exec:function(){}};function y(l){let e=1,n,t;for(;e<arguments.length;e++){n=arguments[e];for(t in n)Object.prototype.hasOwnProperty.call(n,t)&&(l[t]=n[t])}return l}function G(l,e){const n=l.replace(/\|/g,(s,r,a)=>{let h=!1,f=r;for(;--f>=0&&a[f]==="\\";)h=!h;return h?"|":" |"}),t=n.split(/ \|/);let i=0;if(t[0].trim()||t.shift(),t.length>0&&!t[t.length-1].trim()&&t.pop(),t.length>e)t.splice(e);else for(;t.length<e;)t.push("");for(;i<t.length;i++)t[i]=t[i].trim().replace(/\\\|/g,"|");return t}function j(l,e,n){const t=l.length;if(t===0)return"";let i=0;for(;i<t;){const s=l.charAt(t-i-1);if(s===e&&!n)i++;else if(s!==e&&n)i++;else break}return l.slice(0,t-i)}function Ee(l,e){if(l.indexOf(e[1])===-1)return-1;const n=l.length;let t=0,i=0;for(;i<n;i++)if(l[i]==="\\")i++;else if(l[i]===e[0])t++;else if(l[i]===e[1]&&(t--,t<0))return i;return-1}function ne(l){l&&l.sanitize&&!l.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function J(l,e){if(e<1)return"";let n="";for(;e>1;)e&1&&(n+=l),e>>=1,l+=l;return n+l}function K(l,e,n,t){const i=e.href,s=e.title?w(e.title):null,r=l[1].replace(/\\([\[\]])/g,"$1");if(l[0].charAt(0)!=="!"){t.state.inLink=!0;const a={type:"link",raw:n,href:i,title:s,text:r,tokens:t.inlineTokens(r,[])};return t.state.inLink=!1,a}return{type:"image",raw:n,href:i,title:s,text:w(r)}}function Ce(l,e){const n=l.match(/^(\s+)(?:```)/);if(n===null)return e;const t=n[1];return e.split(`
`).map(i=>{const s=i.match(/^\s+/);if(s===null)return i;const[r]=s;return r.length>=t.length?i.slice(t.length):i}).join(`
`)}class P{constructor(e){this.options=e||L}space(e){const n=this.rules.block.newline.exec(e);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(e){const n=this.rules.block.code.exec(e);if(n){const t=n[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?t:j(t,`
`)}}}fences(e){const n=this.rules.block.fences.exec(e);if(n){const t=n[0],i=Ce(t,n[3]||"");return{type:"code",raw:t,lang:n[2]?n[2].trim():n[2],text:i}}}heading(e){const n=this.rules.block.heading.exec(e);if(n){let t=n[2].trim();if(/#$/.test(t)){const s=j(t,"#");(this.options.pedantic||!s||/ $/.test(s))&&(t=s.trim())}const i={type:"heading",raw:n[0],depth:n[1].length,text:t,tokens:[]};return this.lexer.inline(i.text,i.tokens),i}}hr(e){const n=this.rules.block.hr.exec(e);if(n)return{type:"hr",raw:n[0]}}blockquote(e){const n=this.rules.block.blockquote.exec(e);if(n){const t=n[0].replace(/^ *>[ \t]?/gm,"");return{type:"blockquote",raw:n[0],tokens:this.lexer.blockTokens(t,[]),text:t}}}list(e){let n=this.rules.block.list.exec(e);if(n){let t,i,s,r,a,h,f,u,m,d,c,A,_=n[1].trim();const R=_.length>1,x={type:"list",raw:"",ordered:R,start:R?+_.slice(0,-1):"",loose:!1,items:[]};_=R?`\\d{1,9}\\${_.slice(-1)}`:`\\${_}`,this.options.pedantic&&(_=R?_:"[*+-]");const b=new RegExp(`^( {0,3}${_})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;e&&(A=!1,!(!(n=b.exec(e))||this.rules.block.hr.test(e)));){if(t=n[0],e=e.substring(t.length),u=n[2].split(`
`,1)[0],m=e.split(`
`,1)[0],this.options.pedantic?(r=2,c=u.trimLeft()):(r=n[2].search(/[^ ]/),r=r>4?1:r,c=u.slice(r),r+=n[1].length),h=!1,!u&&/^ *$/.test(m)&&(t+=m+`
`,e=e.substring(m.length+1),A=!0),!A){const I=new RegExp(`^ {0,${Math.min(3,r-1)}}(?:[*+-]|\\d{1,9}[.)])((?: [^\\n]*)?(?:\\n|$))`),$=new RegExp(`^ {0,${Math.min(3,r-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),z=new RegExp(`^ {0,${Math.min(3,r-1)}}(?:\`\`\`|~~~)`),E=new RegExp(`^ {0,${Math.min(3,r-1)}}#`);for(;e&&(d=e.split(`
`,1)[0],u=d,this.options.pedantic&&(u=u.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!(z.test(u)||E.test(u)||I.test(u)||$.test(e)));){if(u.search(/[^ ]/)>=r||!u.trim())c+=`
`+u.slice(r);else if(!h)c+=`
`+u;else break;!h&&!u.trim()&&(h=!0),t+=d+`
`,e=e.substring(d.length+1)}}x.loose||(f?x.loose=!0:/\n *\n *$/.test(t)&&(f=!0)),this.options.gfm&&(i=/^\[[ xX]\] /.exec(c),i&&(s=i[0]!=="[ ] ",c=c.replace(/^\[[ xX]\] +/,""))),x.items.push({type:"list_item",raw:t,task:!!i,checked:s,loose:!1,text:c}),x.raw+=t}x.items[x.items.length-1].raw=t.trimRight(),x.items[x.items.length-1].text=c.trimRight(),x.raw=x.raw.trimRight();const B=x.items.length;for(a=0;a<B;a++){this.lexer.state.top=!1,x.items[a].tokens=this.lexer.blockTokens(x.items[a].text,[]);const I=x.items[a].tokens.filter(z=>z.type==="space"),$=I.every(z=>{const E=z.raw.split("");let D=0;for(const re of E)if(re===`
`&&(D+=1),D>1)return!0;return!1});!x.loose&&I.length&&$&&(x.loose=!0,x.items[a].loose=!0)}return x}}html(e){const n=this.rules.block.html.exec(e);if(n){const t={type:"html",raw:n[0],pre:!this.options.sanitizer&&(n[1]==="pre"||n[1]==="script"||n[1]==="style"),text:n[0]};return this.options.sanitize&&(t.type="paragraph",t.text=this.options.sanitizer?this.options.sanitizer(n[0]):w(n[0]),t.tokens=[],this.lexer.inline(t.text,t.tokens)),t}}def(e){const n=this.rules.block.def.exec(e);if(n){n[3]&&(n[3]=n[3].substring(1,n[3].length-1));const t=n[1].toLowerCase().replace(/\s+/g," ");return{type:"def",tag:t,raw:n[0],href:n[2],title:n[3]}}}table(e){const n=this.rules.block.table.exec(e);if(n){const t={type:"table",header:G(n[1]).map(i=>({text:i})),align:n[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:n[3]&&n[3].trim()?n[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(t.header.length===t.align.length){t.raw=n[0];let i=t.align.length,s,r,a,h;for(s=0;s<i;s++)/^ *-+: *$/.test(t.align[s])?t.align[s]="right":/^ *:-+: *$/.test(t.align[s])?t.align[s]="center":/^ *:-+ *$/.test(t.align[s])?t.align[s]="left":t.align[s]=null;for(i=t.rows.length,s=0;s<i;s++)t.rows[s]=G(t.rows[s],t.header.length).map(f=>({text:f}));for(i=t.header.length,r=0;r<i;r++)t.header[r].tokens=[],this.lexer.inline(t.header[r].text,t.header[r].tokens);for(i=t.rows.length,r=0;r<i;r++)for(h=t.rows[r],a=0;a<h.length;a++)h[a].tokens=[],this.lexer.inline(h[a].text,h[a].tokens);return t}}}lheading(e){const n=this.rules.block.lheading.exec(e);if(n){const t={type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:[]};return this.lexer.inline(t.text,t.tokens),t}}paragraph(e){const n=this.rules.block.paragraph.exec(e);if(n){const t={type:"paragraph",raw:n[0],text:n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1],tokens:[]};return this.lexer.inline(t.text,t.tokens),t}}text(e){const n=this.rules.block.text.exec(e);if(n){const t={type:"text",raw:n[0],text:n[0],tokens:[]};return this.lexer.inline(t.text,t.tokens),t}}escape(e){const n=this.rules.inline.escape.exec(e);if(n)return{type:"escape",raw:n[0],text:w(n[1])}}tag(e){const n=this.rules.inline.tag.exec(e);if(n)return!this.lexer.state.inLink&&/^<a /i.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):w(n[0]):n[0]}}link(e){const n=this.rules.inline.link.exec(e);if(n){const t=n[2].trim();if(!this.options.pedantic&&/^</.test(t)){if(!/>$/.test(t))return;const r=j(t.slice(0,-1),"\\");if((t.length-r.length)%2===0)return}else{const r=Ee(n[2],"()");if(r>-1){const h=(n[0].indexOf("!")===0?5:4)+n[1].length+r;n[2]=n[2].substring(0,r),n[0]=n[0].substring(0,h).trim(),n[3]=""}}let i=n[2],s="";if(this.options.pedantic){const r=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);r&&(i=r[1],s=r[3])}else s=n[3]?n[3].slice(1,-1):"";return i=i.trim(),/^</.test(i)&&(this.options.pedantic&&!/>$/.test(t)?i=i.slice(1):i=i.slice(1,-1)),K(n,{href:i&&i.replace(this.rules.inline._escapes,"$1"),title:s&&s.replace(this.rules.inline._escapes,"$1")},n[0],this.lexer)}}reflink(e,n){let t;if((t=this.rules.inline.reflink.exec(e))||(t=this.rules.inline.nolink.exec(e))){let i=(t[2]||t[1]).replace(/\s+/g," ");if(i=n[i.toLowerCase()],!i||!i.href){const s=t[0].charAt(0);return{type:"text",raw:s,text:s}}return K(t,i,t[0],this.lexer)}}emStrong(e,n,t=""){let i=this.rules.inline.emStrong.lDelim.exec(e);if(!i||i[3]&&t.match(/[\p{L}\p{N}]/u))return;const s=i[1]||i[2]||"";if(!s||s&&(t===""||this.rules.inline.punctuation.exec(t))){const r=i[0].length-1;let a,h,f=r,u=0;const m=i[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(m.lastIndex=0,n=n.slice(-1*e.length+r);(i=m.exec(n))!=null;){if(a=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!a)continue;if(h=a.length,i[3]||i[4]){f+=h;continue}else if((i[5]||i[6])&&r%3&&!((r+h)%3)){u+=h;continue}if(f-=h,f>0)continue;if(h=Math.min(h,h+f+u),Math.min(r,h)%2){const c=e.slice(1,r+i.index+h);return{type:"em",raw:e.slice(0,r+i.index+h+1),text:c,tokens:this.lexer.inlineTokens(c,[])}}const d=e.slice(2,r+i.index+h-1);return{type:"strong",raw:e.slice(0,r+i.index+h+1),text:d,tokens:this.lexer.inlineTokens(d,[])}}}}codespan(e){const n=this.rules.inline.code.exec(e);if(n){let t=n[2].replace(/\n/g," ");const i=/[^ ]/.test(t),s=/^ /.test(t)&&/ $/.test(t);return i&&s&&(t=t.substring(1,t.length-1)),t=w(t,!0),{type:"codespan",raw:n[0],text:t}}}br(e){const n=this.rules.inline.br.exec(e);if(n)return{type:"br",raw:n[0]}}del(e){const n=this.rules.inline.del.exec(e);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2],[])}}autolink(e,n){const t=this.rules.inline.autolink.exec(e);if(t){let i,s;return t[2]==="@"?(i=w(this.options.mangle?n(t[1]):t[1]),s="mailto:"+i):(i=w(t[1]),s=i),{type:"link",raw:t[0],text:i,href:s,tokens:[{type:"text",raw:i,text:i}]}}}url(e,n){let t;if(t=this.rules.inline.url.exec(e)){let i,s;if(t[2]==="@")i=w(this.options.mangle?n(t[0]):t[0]),s="mailto:"+i;else{let r;do r=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])[0];while(r!==t[0]);i=w(t[0]),t[1]==="www."?s="http://"+i:s=i}return{type:"link",raw:t[0],text:i,href:s,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(e,n){const t=this.rules.inline.text.exec(e);if(t){let i;return this.lexer.state.inRawBlock?i=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):w(t[0]):t[0]:i=w(this.options.smartypants?n(t[0]):t[0]),{type:"text",raw:t[0],text:i}}}}const p={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:M,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};p._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;p._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;p.def=k(p.def).replace("label",p._label).replace("title",p._title).getRegex();p.bullet=/(?:[*+-]|\d{1,9}[.)])/;p.listItemStart=k(/^( *)(bull) */).replace("bull",p.bullet).getRegex();p.list=k(p.list).replace(/bull/g,p.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+p.def.source+")").getRegex();p._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";p._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;p.html=k(p.html,"i").replace("comment",p._comment).replace("tag",p._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();p.paragraph=k(p._paragraph).replace("hr",p.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",p._tag).getRegex();p.blockquote=k(p.blockquote).replace("paragraph",p.paragraph).getRegex();p.normal=y({},p);p.gfm=y({},p.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"});p.gfm.table=k(p.gfm.table).replace("hr",p.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",p._tag).getRegex();p.gfm.paragraph=k(p._paragraph).replace("hr",p.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",p.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",p._tag).getRegex();p.pedantic=y({},p.normal,{html:k(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",p._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:M,paragraph:k(p.normal._paragraph).replace("hr",p.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",p.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const o={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:M,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[^*]+(?=[^*])|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:M,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};o._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";o.punctuation=k(o.punctuation).replace(/punctuation/g,o._punctuation).getRegex();o.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;o.escapedEmSt=/\\\*|\\_/g;o._comment=k(p._comment).replace("(?:-->|$)","-->").getRegex();o.emStrong.lDelim=k(o.emStrong.lDelim).replace(/punct/g,o._punctuation).getRegex();o.emStrong.rDelimAst=k(o.emStrong.rDelimAst,"g").replace(/punct/g,o._punctuation).getRegex();o.emStrong.rDelimUnd=k(o.emStrong.rDelimUnd,"g").replace(/punct/g,o._punctuation).getRegex();o._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;o._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;o._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;o.autolink=k(o.autolink).replace("scheme",o._scheme).replace("email",o._email).getRegex();o._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;o.tag=k(o.tag).replace("comment",o._comment).replace("attribute",o._attribute).getRegex();o._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;o._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;o._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;o.link=k(o.link).replace("label",o._label).replace("href",o._href).replace("title",o._title).getRegex();o.reflink=k(o.reflink).replace("label",o._label).replace("ref",p._label).getRegex();o.nolink=k(o.nolink).replace("ref",p._label).getRegex();o.reflinkSearch=k(o.reflinkSearch,"g").replace("reflink",o.reflink).replace("nolink",o.nolink).getRegex();o.normal=y({},o);o.pedantic=y({},o.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:k(/^!?\[(label)\]\((.*?)\)/).replace("label",o._label).getRegex(),reflink:k(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",o._label).getRegex()});o.gfm=y({},o.normal,{escape:k(o.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/});o.gfm.url=k(o.gfm.url,"i").replace("email",o.gfm._extended_email).getRegex();o.breaks=y({},o.gfm,{br:k(o.br).replace("{2,}","*").getRegex(),text:k(o.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});function Le(l){return l.replace(/---/g,"\u2014").replace(/--/g,"\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1\u2018").replace(/'/g,"\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1\u201C").replace(/"/g,"\u201D").replace(/\.{3}/g,"\u2026")}function Y(l){let e="",n,t;const i=l.length;for(n=0;n<i;n++)t=l.charCodeAt(n),Math.random()>.5&&(t="x"+t.toString(16)),e+="&#"+t+";";return e}class S{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||L,this.options.tokenizer=this.options.tokenizer||new P,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={block:p.normal,inline:o.normal};this.options.pedantic?(n.block=p.pedantic,n.inline=o.pedantic):this.options.gfm&&(n.block=p.gfm,this.options.breaks?n.inline=o.breaks:n.inline=o.gfm),this.tokenizer.rules=n}static get rules(){return{block:p,inline:o}}static lex(e,n){return new S(n).lex(e)}static lexInline(e,n){return new S(n).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);let n;for(;n=this.inlineQueue.shift();)this.inlineTokens(n.src,n.tokens);return this.tokens}blockTokens(e,n=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(a,h,f)=>h+"    ".repeat(f.length));let t,i,s,r;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(a=>(t=a.call({lexer:this},e,n))?(e=e.substring(t.raw.length),n.push(t),!0):!1))){if(t=this.tokenizer.space(e)){e=e.substring(t.raw.length),t.raw.length===1&&n.length>0?n[n.length-1].raw+=`
`:n.push(t);continue}if(t=this.tokenizer.code(e)){e=e.substring(t.raw.length),i=n[n.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+t.raw,i.text+=`
`+t.text,this.inlineQueue[this.inlineQueue.length-1].src=i.text):n.push(t);continue}if(t=this.tokenizer.fences(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.heading(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.hr(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.blockquote(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.list(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.html(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.def(e)){e=e.substring(t.raw.length),i=n[n.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+t.raw,i.text+=`
`+t.raw,this.inlineQueue[this.inlineQueue.length-1].src=i.text):this.tokens.links[t.tag]||(this.tokens.links[t.tag]={href:t.href,title:t.title});continue}if(t=this.tokenizer.table(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.lheading(e)){e=e.substring(t.raw.length),n.push(t);continue}if(s=e,this.options.extensions&&this.options.extensions.startBlock){let a=1/0;const h=e.slice(1);let f;this.options.extensions.startBlock.forEach(function(u){f=u.call({lexer:this},h),typeof f=="number"&&f>=0&&(a=Math.min(a,f))}),a<1/0&&a>=0&&(s=e.substring(0,a+1))}if(this.state.top&&(t=this.tokenizer.paragraph(s))){i=n[n.length-1],r&&i.type==="paragraph"?(i.raw+=`
`+t.raw,i.text+=`
`+t.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):n.push(t),r=s.length!==e.length,e=e.substring(t.raw.length);continue}if(t=this.tokenizer.text(e)){e=e.substring(t.raw.length),i=n[n.length-1],i&&i.type==="text"?(i.raw+=`
`+t.raw,i.text+=`
`+t.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):n.push(t);continue}if(e){const a="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(a);break}else throw new Error(a)}}return this.state.top=!0,n}inline(e,n){this.inlineQueue.push({src:e,tokens:n})}inlineTokens(e,n=[]){let t,i,s,r=e,a,h,f;if(this.tokens.links){const u=Object.keys(this.tokens.links);if(u.length>0)for(;(a=this.tokenizer.rules.inline.reflinkSearch.exec(r))!=null;)u.includes(a[0].slice(a[0].lastIndexOf("[")+1,-1))&&(r=r.slice(0,a.index)+"["+J("a",a[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(a=this.tokenizer.rules.inline.blockSkip.exec(r))!=null;)r=r.slice(0,a.index)+"["+J("a",a[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(a=this.tokenizer.rules.inline.escapedEmSt.exec(r))!=null;)r=r.slice(0,a.index)+"++"+r.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;e;)if(h||(f=""),h=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(u=>(t=u.call({lexer:this},e,n))?(e=e.substring(t.raw.length),n.push(t),!0):!1))){if(t=this.tokenizer.escape(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.tag(e)){e=e.substring(t.raw.length),i=n[n.length-1],i&&t.type==="text"&&i.type==="text"?(i.raw+=t.raw,i.text+=t.text):n.push(t);continue}if(t=this.tokenizer.link(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(t.raw.length),i=n[n.length-1],i&&t.type==="text"&&i.type==="text"?(i.raw+=t.raw,i.text+=t.text):n.push(t);continue}if(t=this.tokenizer.emStrong(e,r,f)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.codespan(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.br(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.del(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.autolink(e,Y)){e=e.substring(t.raw.length),n.push(t);continue}if(!this.state.inLink&&(t=this.tokenizer.url(e,Y))){e=e.substring(t.raw.length),n.push(t);continue}if(s=e,this.options.extensions&&this.options.extensions.startInline){let u=1/0;const m=e.slice(1);let d;this.options.extensions.startInline.forEach(function(c){d=c.call({lexer:this},m),typeof d=="number"&&d>=0&&(u=Math.min(u,d))}),u<1/0&&u>=0&&(s=e.substring(0,u+1))}if(t=this.tokenizer.inlineText(s,Le)){e=e.substring(t.raw.length),t.raw.slice(-1)!=="_"&&(f=t.raw.slice(-1)),h=!0,i=n[n.length-1],i&&i.type==="text"?(i.raw+=t.raw,i.text+=t.text):n.push(t);continue}if(e){const u="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return n}}class N{constructor(e){this.options=e||L}code(e,n,t){const i=(n||"").match(/\S*/)[0];if(this.options.highlight){const s=this.options.highlight(e,i);s!=null&&s!==e&&(t=!0,e=s)}return e=e.replace(/\n$/,"")+`
`,i?'<pre><code class="'+this.options.langPrefix+w(i,!0)+'">'+(t?e:w(e,!0))+`</code></pre>
`:"<pre><code>"+(t?e:w(e,!0))+`</code></pre>
`}blockquote(e){return`<blockquote>
${e}</blockquote>
`}html(e){return e}heading(e,n,t,i){if(this.options.headerIds){const s=this.options.headerPrefix+i.slug(t);return`<h${n} id="${s}">${e}</h${n}>
`}return`<h${n}>${e}</h${n}>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(e,n,t){const i=n?"ol":"ul",s=n&&t!==1?' start="'+t+'"':"";return"<"+i+s+`>
`+e+"</"+i+`>
`}listitem(e){return`<li>${e}</li>
`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return`<p>${e}</p>
`}table(e,n){return n&&(n=`<tbody>${n}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+n+`</table>
`}tablerow(e){return`<tr>
${e}</tr>
`}tablecell(e,n){const t=n.header?"th":"td";return(n.align?`<${t} align="${n.align}">`:`<${t}>`)+e+`</${t}>
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return`<del>${e}</del>`}link(e,n,t){if(e=X(this.options.sanitize,this.options.baseUrl,e),e===null)return t;let i='<a href="'+w(e)+'"';return n&&(i+=' title="'+n+'"'),i+=">"+t+"</a>",i}image(e,n,t){if(e=X(this.options.sanitize,this.options.baseUrl,e),e===null)return t;let i=`<img src="${e}" alt="${t}"`;return n&&(i+=` title="${n}"`),i+=this.options.xhtml?"/>":">",i}text(e){return e}}class ie{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,n,t){return""+t}image(e,n,t){return""+t}br(){return""}}class se{constructor(){this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,n){let t=e,i=0;if(this.seen.hasOwnProperty(t)){i=this.seen[e];do i++,t=e+"-"+i;while(this.seen.hasOwnProperty(t))}return n||(this.seen[e]=i,this.seen[t]=0),t}slug(e,n={}){const t=this.serialize(e);return this.getNextSafeSlug(t,n.dryrun)}}class T{constructor(e){this.options=e||L,this.options.renderer=this.options.renderer||new N,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new ie,this.slugger=new se}static parse(e,n){return new T(n).parse(e)}static parseInline(e,n){return new T(n).parseInline(e)}parse(e,n=!0){let t="",i,s,r,a,h,f,u,m,d,c,A,_,R,x,b,B,I,$,z;const E=e.length;for(i=0;i<E;i++){if(c=e[i],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[c.type]&&(z=this.options.extensions.renderers[c.type].call({parser:this},c),z!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(c.type))){t+=z||"";continue}switch(c.type){case"space":continue;case"hr":{t+=this.renderer.hr();continue}case"heading":{t+=this.renderer.heading(this.parseInline(c.tokens),c.depth,te(this.parseInline(c.tokens,this.textRenderer)),this.slugger);continue}case"code":{t+=this.renderer.code(c.text,c.lang,c.escaped);continue}case"table":{for(m="",u="",a=c.header.length,s=0;s<a;s++)u+=this.renderer.tablecell(this.parseInline(c.header[s].tokens),{header:!0,align:c.align[s]});for(m+=this.renderer.tablerow(u),d="",a=c.rows.length,s=0;s<a;s++){for(f=c.rows[s],u="",h=f.length,r=0;r<h;r++)u+=this.renderer.tablecell(this.parseInline(f[r].tokens),{header:!1,align:c.align[r]});d+=this.renderer.tablerow(u)}t+=this.renderer.table(m,d);continue}case"blockquote":{d=this.parse(c.tokens),t+=this.renderer.blockquote(d);continue}case"list":{for(A=c.ordered,_=c.start,R=c.loose,a=c.items.length,d="",s=0;s<a;s++)b=c.items[s],B=b.checked,I=b.task,x="",b.task&&($=this.renderer.checkbox(B),R?b.tokens.length>0&&b.tokens[0].type==="paragraph"?(b.tokens[0].text=$+" "+b.tokens[0].text,b.tokens[0].tokens&&b.tokens[0].tokens.length>0&&b.tokens[0].tokens[0].type==="text"&&(b.tokens[0].tokens[0].text=$+" "+b.tokens[0].tokens[0].text)):b.tokens.unshift({type:"text",text:$}):x+=$),x+=this.parse(b.tokens,R),d+=this.renderer.listitem(x,I,B);t+=this.renderer.list(d,A,_);continue}case"html":{t+=this.renderer.html(c.text);continue}case"paragraph":{t+=this.renderer.paragraph(this.parseInline(c.tokens));continue}case"text":{for(d=c.tokens?this.parseInline(c.tokens):c.text;i+1<E&&e[i+1].type==="text";)c=e[++i],d+=`
`+(c.tokens?this.parseInline(c.tokens):c.text);t+=n?this.renderer.paragraph(d):d;continue}default:{const D='Token with "'+c.type+'" type was not found.';if(this.options.silent){console.error(D);return}else throw new Error(D)}}}return t}parseInline(e,n){n=n||this.renderer;let t="",i,s,r;const a=e.length;for(i=0;i<a;i++){if(s=e[i],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]&&(r=this.options.extensions.renderers[s.type].call({parser:this},s),r!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type))){t+=r||"";continue}switch(s.type){case"escape":{t+=n.text(s.text);break}case"html":{t+=n.html(s.text);break}case"link":{t+=n.link(s.href,s.title,this.parseInline(s.tokens,n));break}case"image":{t+=n.image(s.href,s.title,s.text);break}case"strong":{t+=n.strong(this.parseInline(s.tokens,n));break}case"em":{t+=n.em(this.parseInline(s.tokens,n));break}case"codespan":{t+=n.codespan(s.text);break}case"br":{t+=n.br();break}case"del":{t+=n.del(this.parseInline(s.tokens,n));break}case"text":{t+=n.text(s.text);break}default:{const h='Token with "'+s.type+'" type was not found.';if(this.options.silent){console.error(h);return}else throw new Error(h)}}}return t}}function g(l,e,n){if(typeof l>"u"||l===null)throw new Error("marked(): input parameter is undefined or null");if(typeof l!="string")throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(l)+", string expected");if(typeof e=="function"&&(n=e,e=null),e=y({},g.defaults,e||{}),ne(e),n){const t=e.highlight;let i;try{i=S.lex(l,e)}catch(a){return n(a)}const s=function(a){let h;if(!a)try{e.walkTokens&&g.walkTokens(i,e.walkTokens),h=T.parse(i,e)}catch(f){a=f}return e.highlight=t,a?n(a):n(null,h)};if(!t||t.length<3||(delete e.highlight,!i.length))return s();let r=0;g.walkTokens(i,function(a){a.type==="code"&&(r++,setTimeout(()=>{t(a.text,a.lang,function(h,f){if(h)return s(h);f!=null&&f!==a.text&&(a.text=f,a.escaped=!0),r--,r===0&&s()})},0))}),r===0&&s();return}try{const t=S.lex(l,e);return e.walkTokens&&g.walkTokens(t,e.walkTokens),T.parse(t,e)}catch(t){if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,e.silent)return"<p>An error occurred:</p><pre>"+w(t.message+"",!0)+"</pre>";throw t}}g.options=g.setOptions=function(l){return y(g.defaults,l),ke(g.defaults),g};g.getDefaults=ee;g.defaults=L;g.use=function(...l){const e=y({},...l),n=g.defaults.extensions||{renderers:{},childTokens:{}};let t;l.forEach(i=>{if(i.extensions&&(t=!0,i.extensions.forEach(s=>{if(!s.name)throw new Error("extension name required");if(s.renderer){const r=n.renderers?n.renderers[s.name]:null;r?n.renderers[s.name]=function(...a){let h=s.renderer.apply(this,a);return h===!1&&(h=r.apply(this,a)),h}:n.renderers[s.name]=s.renderer}if(s.tokenizer){if(!s.level||s.level!=="block"&&s.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");n[s.level]?n[s.level].unshift(s.tokenizer):n[s.level]=[s.tokenizer],s.start&&(s.level==="block"?n.startBlock?n.startBlock.push(s.start):n.startBlock=[s.start]:s.level==="inline"&&(n.startInline?n.startInline.push(s.start):n.startInline=[s.start]))}s.childTokens&&(n.childTokens[s.name]=s.childTokens)})),i.renderer){const s=g.defaults.renderer||new N;for(const r in i.renderer){const a=s[r];s[r]=(...h)=>{let f=i.renderer[r].apply(s,h);return f===!1&&(f=a.apply(s,h)),f}}e.renderer=s}if(i.tokenizer){const s=g.defaults.tokenizer||new P;for(const r in i.tokenizer){const a=s[r];s[r]=(...h)=>{let f=i.tokenizer[r].apply(s,h);return f===!1&&(f=a.apply(s,h)),f}}e.tokenizer=s}if(i.walkTokens){const s=g.defaults.walkTokens;e.walkTokens=function(r){i.walkTokens.call(this,r),s&&s.call(this,r)}}t&&(e.extensions=n),g.setOptions(e)})};g.walkTokens=function(l,e){for(const n of l)switch(e.call(g,n),n.type){case"table":{for(const t of n.header)g.walkTokens(t.tokens,e);for(const t of n.rows)for(const i of t)g.walkTokens(i.tokens,e);break}case"list":{g.walkTokens(n.items,e);break}default:g.defaults.extensions&&g.defaults.extensions.childTokens&&g.defaults.extensions.childTokens[n.type]?g.defaults.extensions.childTokens[n.type].forEach(function(t){g.walkTokens(n[t],e)}):n.tokens&&g.walkTokens(n.tokens,e)}};g.parseInline=function(l,e){if(typeof l>"u"||l===null)throw new Error("marked.parseInline(): input parameter is undefined or null");if(typeof l!="string")throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(l)+", string expected");e=y({},g.defaults,e||{}),ne(e);try{const n=S.lexInline(l,e);return e.walkTokens&&g.walkTokens(n,e.walkTokens),T.parseInline(n,e)}catch(n){if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e.silent)return"<p>An error occurred:</p><pre>"+w(n.message+"",!0)+"</pre>";throw n}};g.Parser=T;g.parser=T.parse;g.Renderer=N;g.TextRenderer=ie;g.Lexer=S;g.lexer=S.lex;g.Tokenizer=P;g.Slugger=se;g.parse=g;g.options;g.setOptions;g.use;g.walkTokens;g.parseInline;T.parse;S.lex;function Be(l){let e,n,t,i=l[0].meta.title+"",s,r,a,h,f;return{c(){e=v("section"),n=v("div"),t=v("h1"),s=he(i),r=F(),a=new ce(!1),h=F(),f=v("div"),this.h()},l(u){e=q(u,"SECTION",{class:!0});var m=O(e);n=q(m,"DIV",{class:!0});var d=O(n);t=q(d,"H1",{});var c=O(t);s=pe(c,i),c.forEach(Z),r=H(d),a=ue(d,!1),d.forEach(Z),h=H(m),f=q(m,"DIV",{class:!0}),O(f).forEach(Z),m.forEach(Z),this.h()},h(){a.a=null,Q(n,"class","card bg-base-100 max-w-2xl w-full mx-auto mt-8 p-8 rounded"),Q(f,"class","h-32"),Q(e,"class","px-4")},m(u,m){fe(u,e,m),C(e,n),C(n,t),C(t,s),C(n,r),a.m(l[1],n),C(e,h),C(e,f)},p(u,[m]){m&1&&i!==(i=u[0].meta.title+"")&&ge(s,i),m&2&&a.p(u[1])},i:V,o:V,d(u){u&&Z(e)}}}const Oe=async({fetch:l,params:e})=>{const n=de(`/blog/${e.path}.json`),t=await l(n);return t.ok?{props:{post:await t.json()}}:{}};function De(l,e,n){let t,{post:i}=e;return l.$$set=s=>{"post"in s&&n(0,i=s.post)},l.$$.update=()=>{l.$$.dirty&1&&n(1,t=g.parse(i.body))},[i,t]}class Ue extends le{constructor(e){super(),ae(this,e,De,Be,oe,{post:0})}}export{Ue as default,Oe as load};