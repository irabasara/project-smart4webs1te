(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();function Mi(n,e){return function(){return n.apply(e,arguments)}}const{toString:go}=Object.prototype,{getPrototypeOf:_n}=Object,Dt=(n=>e=>{const t=go.call(e);return n[t]||(n[t]=t.slice(8,-1).toLowerCase())})(Object.create(null)),se=n=>(n=n.toLowerCase(),e=>Dt(e)===n),Mt=n=>e=>typeof e===n,{isArray:He}=Array,Ze=Mt("undefined");function bo(n){return n!==null&&!Ze(n)&&n.constructor!==null&&!Ze(n.constructor)&&Z(n.constructor.isBuffer)&&n.constructor.isBuffer(n)}const Bi=se("ArrayBuffer");function yo(n){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(n):e=n&&n.buffer&&Bi(n.buffer),e}const xo=Mt("string"),Z=Mt("function"),zi=Mt("number"),Bt=n=>n!==null&&typeof n=="object",wo=n=>n===!0||n===!1,yt=n=>{if(Dt(n)!=="object")return!1;const e=_n(n);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in n)&&!(Symbol.iterator in n)},vo=se("Date"),ko=se("File"),_o=se("Blob"),Eo=se("FileList"),Io=n=>Bt(n)&&Z(n.pipe),No=n=>{let e;return n&&(typeof FormData=="function"&&n instanceof FormData||Z(n.append)&&((e=Dt(n))==="formdata"||e==="object"&&Z(n.toString)&&n.toString()==="[object FormData]"))},So=se("URLSearchParams"),Co=n=>n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function rt(n,e,{allOwnKeys:t=!1}={}){if(n===null||typeof n>"u")return;let i,r;if(typeof n!="object"&&(n=[n]),He(n))for(i=0,r=n.length;i<r;i++)e.call(null,n[i],i,n);else{const o=t?Object.getOwnPropertyNames(n):Object.keys(n),s=o.length;let c;for(i=0;i<s;i++)c=o[i],e.call(null,n[c],c,n)}}function Ui(n,e){e=e.toLowerCase();const t=Object.keys(n);let i=t.length,r;for(;i-- >0;)if(r=t[i],e===r.toLowerCase())return r;return null}const Fi=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Wi=n=>!Ze(n)&&n!==Fi;function un(){const{caseless:n}=Wi(this)&&this||{},e={},t=(i,r)=>{const o=n&&Ui(e,r)||r;yt(e[o])&&yt(i)?e[o]=un(e[o],i):yt(i)?e[o]=un({},i):He(i)?e[o]=i.slice():e[o]=i};for(let i=0,r=arguments.length;i<r;i++)arguments[i]&&rt(arguments[i],t);return e}const To=(n,e,t,{allOwnKeys:i}={})=>(rt(e,(r,o)=>{t&&Z(r)?n[o]=Mi(r,t):n[o]=r},{allOwnKeys:i}),n),Ro=n=>(n.charCodeAt(0)===65279&&(n=n.slice(1)),n),Ao=(n,e,t,i)=>{n.prototype=Object.create(e.prototype,i),n.prototype.constructor=n,Object.defineProperty(n,"super",{value:e.prototype}),t&&Object.assign(n.prototype,t)},Oo=(n,e,t,i)=>{let r,o,s;const c={};if(e=e||{},n==null)return e;do{for(r=Object.getOwnPropertyNames(n),o=r.length;o-- >0;)s=r[o],(!i||i(s,n,e))&&!c[s]&&(e[s]=n[s],c[s]=!0);n=t!==!1&&_n(n)}while(n&&(!t||t(n,e))&&n!==Object.prototype);return e},Lo=(n,e,t)=>{n=String(n),(t===void 0||t>n.length)&&(t=n.length),t-=e.length;const i=n.indexOf(e,t);return i!==-1&&i===t},Po=n=>{if(!n)return null;if(He(n))return n;let e=n.length;if(!zi(e))return null;const t=new Array(e);for(;e-- >0;)t[e]=n[e];return t},Do=(n=>e=>n&&e instanceof n)(typeof Uint8Array<"u"&&_n(Uint8Array)),Mo=(n,e)=>{const i=(n&&n[Symbol.iterator]).call(n);let r;for(;(r=i.next())&&!r.done;){const o=r.value;e.call(n,o[0],o[1])}},Bo=(n,e)=>{let t;const i=[];for(;(t=n.exec(e))!==null;)i.push(t);return i},zo=se("HTMLFormElement"),Uo=n=>n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,i,r){return i.toUpperCase()+r}),ei=(({hasOwnProperty:n})=>(e,t)=>n.call(e,t))(Object.prototype),Fo=se("RegExp"),Hi=(n,e)=>{const t=Object.getOwnPropertyDescriptors(n),i={};rt(t,(r,o)=>{e(r,o,n)!==!1&&(i[o]=r)}),Object.defineProperties(n,i)},Wo=n=>{Hi(n,(e,t)=>{if(Z(n)&&["arguments","caller","callee"].indexOf(t)!==-1)return!1;const i=n[t];if(Z(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+t+"'")})}})},Ho=(n,e)=>{const t={},i=r=>{r.forEach(o=>{t[o]=!0})};return He(n)?i(n):i(String(n).split(e)),t},jo=()=>{},$o=(n,e)=>(n=+n,Number.isFinite(n)?n:e),Kt="abcdefghijklmnopqrstuvwxyz",ti="0123456789",ji={DIGIT:ti,ALPHA:Kt,ALPHA_DIGIT:Kt+Kt.toUpperCase()+ti},Vo=(n=16,e=ji.ALPHA_DIGIT)=>{let t="";const{length:i}=e;for(;n--;)t+=e[Math.random()*i|0];return t};function qo(n){return!!(n&&Z(n.append)&&n[Symbol.toStringTag]==="FormData"&&n[Symbol.iterator])}const Xo=n=>{const e=new Array(10),t=(i,r)=>{if(Bt(i)){if(e.indexOf(i)>=0)return;if(!("toJSON"in i)){e[r]=i;const o=He(i)?[]:{};return rt(i,(s,c)=>{const d=t(s,r+1);!Ze(d)&&(o[c]=d)}),e[r]=void 0,o}}return i};return t(n,0)},Ko=se("AsyncFunction"),Go=n=>n&&(Bt(n)||Z(n))&&Z(n.then)&&Z(n.catch),p={isArray:He,isArrayBuffer:Bi,isBuffer:bo,isFormData:No,isArrayBufferView:yo,isString:xo,isNumber:zi,isBoolean:wo,isObject:Bt,isPlainObject:yt,isUndefined:Ze,isDate:vo,isFile:ko,isBlob:_o,isRegExp:Fo,isFunction:Z,isStream:Io,isURLSearchParams:So,isTypedArray:Do,isFileList:Eo,forEach:rt,merge:un,extend:To,trim:Co,stripBOM:Ro,inherits:Ao,toFlatObject:Oo,kindOf:Dt,kindOfTest:se,endsWith:Lo,toArray:Po,forEachEntry:Mo,matchAll:Bo,isHTMLForm:zo,hasOwnProperty:ei,hasOwnProp:ei,reduceDescriptors:Hi,freezeMethods:Wo,toObjectSet:Ho,toCamelCase:Uo,noop:jo,toFiniteNumber:$o,findKey:Ui,global:Fi,isContextDefined:Wi,ALPHABET:ji,generateString:Vo,isSpecCompliantForm:qo,toJSONObject:Xo,isAsyncFn:Ko,isThenable:Go};function R(n,e,t,i,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=n,this.name="AxiosError",e&&(this.code=e),t&&(this.config=t),i&&(this.request=i),r&&(this.response=r)}p.inherits(R,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:p.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const $i=R.prototype,Vi={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(n=>{Vi[n]={value:n}});Object.defineProperties(R,Vi);Object.defineProperty($i,"isAxiosError",{value:!0});R.from=(n,e,t,i,r,o)=>{const s=Object.create($i);return p.toFlatObject(n,s,function(d){return d!==Error.prototype},c=>c!=="isAxiosError"),R.call(s,n.message,e,t,i,r),s.cause=n,s.name=n.name,o&&Object.assign(s,o),s};const Jo=null;function dn(n){return p.isPlainObject(n)||p.isArray(n)}function qi(n){return p.endsWith(n,"[]")?n.slice(0,-2):n}function ni(n,e,t){return n?n.concat(e).map(function(r,o){return r=qi(r),!t&&o?"["+r+"]":r}).join(t?".":""):e}function Yo(n){return p.isArray(n)&&!n.some(dn)}const Qo=p.toFlatObject(p,{},null,function(e){return/^is[A-Z]/.test(e)});function zt(n,e,t){if(!p.isObject(n))throw new TypeError("target must be an object");e=e||new FormData,t=p.toFlatObject(t,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,W){return!p.isUndefined(W[y])});const i=t.metaTokens,r=t.visitor||m,o=t.dots,s=t.indexes,d=(t.Blob||typeof Blob<"u"&&Blob)&&p.isSpecCompliantForm(e);if(!p.isFunction(r))throw new TypeError("visitor must be a function");function u(b){if(b===null)return"";if(p.isDate(b))return b.toISOString();if(!d&&p.isBlob(b))throw new R("Blob is not supported. Use a Buffer instead.");return p.isArrayBuffer(b)||p.isTypedArray(b)?d&&typeof Blob=="function"?new Blob([b]):Buffer.from(b):b}function m(b,y,W){let D=b;if(b&&!W&&typeof b=="object"){if(p.endsWith(y,"{}"))y=i?y:y.slice(0,-2),b=JSON.stringify(b);else if(p.isArray(b)&&Yo(b)||(p.isFileList(b)||p.endsWith(y,"[]"))&&(D=p.toArray(b)))return y=qi(y),D.forEach(function(z,Ne){!(p.isUndefined(z)||z===null)&&e.append(s===!0?ni([y],Ne,o):s===null?y:y+"[]",u(z))}),!1}return dn(b)?!0:(e.append(ni(W,y,o),u(b)),!1)}const h=[],S=Object.assign(Qo,{defaultVisitor:m,convertValue:u,isVisitable:dn});function v(b,y){if(!p.isUndefined(b)){if(h.indexOf(b)!==-1)throw Error("Circular reference detected in "+y.join("."));h.push(b),p.forEach(b,function(D,$){(!(p.isUndefined(D)||D===null)&&r.call(e,D,p.isString($)?$.trim():$,y,S))===!0&&v(D,y?y.concat($):[$])}),h.pop()}}if(!p.isObject(n))throw new TypeError("data must be an object");return v(n),e}function ii(n){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g,function(i){return e[i]})}function En(n,e){this._pairs=[],n&&zt(n,this,e)}const Xi=En.prototype;Xi.append=function(e,t){this._pairs.push([e,t])};Xi.toString=function(e){const t=e?function(i){return e.call(this,i,ii)}:ii;return this._pairs.map(function(r){return t(r[0])+"="+t(r[1])},"").join("&")};function Zo(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ki(n,e,t){if(!e)return n;const i=t&&t.encode||Zo,r=t&&t.serialize;let o;if(r?o=r(e,t):o=p.isURLSearchParams(e)?e.toString():new En(e,t).toString(i),o){const s=n.indexOf("#");s!==-1&&(n=n.slice(0,s)),n+=(n.indexOf("?")===-1?"?":"&")+o}return n}class es{constructor(){this.handlers=[]}use(e,t,i){return this.handlers.push({fulfilled:e,rejected:t,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){p.forEach(this.handlers,function(i){i!==null&&e(i)})}}const ri=es,Gi={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ts=typeof URLSearchParams<"u"?URLSearchParams:En,ns=typeof FormData<"u"?FormData:null,is=typeof Blob<"u"?Blob:null,rs=(()=>{let n;return typeof navigator<"u"&&((n=navigator.product)==="ReactNative"||n==="NativeScript"||n==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),os=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),ie={isBrowser:!0,classes:{URLSearchParams:ts,FormData:ns,Blob:is},isStandardBrowserEnv:rs,isStandardBrowserWebWorkerEnv:os,protocols:["http","https","file","blob","url","data"]};function ss(n,e){return zt(n,new ie.classes.URLSearchParams,Object.assign({visitor:function(t,i,r,o){return ie.isNode&&p.isBuffer(t)?(this.append(i,t.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},e))}function as(n){return p.matchAll(/\w+|\[(\w*)]/g,n).map(e=>e[0]==="[]"?"":e[1]||e[0])}function cs(n){const e={},t=Object.keys(n);let i;const r=t.length;let o;for(i=0;i<r;i++)o=t[i],e[o]=n[o];return e}function Ji(n){function e(t,i,r,o){let s=t[o++];const c=Number.isFinite(+s),d=o>=t.length;return s=!s&&p.isArray(r)?r.length:s,d?(p.hasOwnProp(r,s)?r[s]=[r[s],i]:r[s]=i,!c):((!r[s]||!p.isObject(r[s]))&&(r[s]=[]),e(t,i,r[s],o)&&p.isArray(r[s])&&(r[s]=cs(r[s])),!c)}if(p.isFormData(n)&&p.isFunction(n.entries)){const t={};return p.forEachEntry(n,(i,r)=>{e(as(i),r,t,0)}),t}return null}const ls={"Content-Type":void 0};function us(n,e,t){if(p.isString(n))try{return(e||JSON.parse)(n),p.trim(n)}catch(i){if(i.name!=="SyntaxError")throw i}return(t||JSON.stringify)(n)}const Ut={transitional:Gi,adapter:["xhr","http"],transformRequest:[function(e,t){const i=t.getContentType()||"",r=i.indexOf("application/json")>-1,o=p.isObject(e);if(o&&p.isHTMLForm(e)&&(e=new FormData(e)),p.isFormData(e))return r&&r?JSON.stringify(Ji(e)):e;if(p.isArrayBuffer(e)||p.isBuffer(e)||p.isStream(e)||p.isFile(e)||p.isBlob(e))return e;if(p.isArrayBufferView(e))return e.buffer;if(p.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let c;if(o){if(i.indexOf("application/x-www-form-urlencoded")>-1)return ss(e,this.formSerializer).toString();if((c=p.isFileList(e))||i.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return zt(c?{"files[]":e}:e,d&&new d,this.formSerializer)}}return o||r?(t.setContentType("application/json",!1),us(e)):e}],transformResponse:[function(e){const t=this.transitional||Ut.transitional,i=t&&t.forcedJSONParsing,r=this.responseType==="json";if(e&&p.isString(e)&&(i&&!this.responseType||r)){const s=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(c){if(s)throw c.name==="SyntaxError"?R.from(c,R.ERR_BAD_RESPONSE,this,null,this.response):c}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ie.classes.FormData,Blob:ie.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};p.forEach(["delete","get","head"],function(e){Ut.headers[e]={}});p.forEach(["post","put","patch"],function(e){Ut.headers[e]=p.merge(ls)});const In=Ut,ds=p.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),fs=n=>{const e={};let t,i,r;return n&&n.split(`
`).forEach(function(s){r=s.indexOf(":"),t=s.substring(0,r).trim().toLowerCase(),i=s.substring(r+1).trim(),!(!t||e[t]&&ds[t])&&(t==="set-cookie"?e[t]?e[t].push(i):e[t]=[i]:e[t]=e[t]?e[t]+", "+i:i)}),e},oi=Symbol("internals");function Ge(n){return n&&String(n).trim().toLowerCase()}function xt(n){return n===!1||n==null?n:p.isArray(n)?n.map(xt):String(n)}function ps(n){const e=Object.create(null),t=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=t.exec(n);)e[i[1]]=i[2];return e}const ms=n=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());function Gt(n,e,t,i,r){if(p.isFunction(i))return i.call(this,e,t);if(r&&(e=t),!!p.isString(e)){if(p.isString(i))return e.indexOf(i)!==-1;if(p.isRegExp(i))return i.test(e)}}function hs(n){return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,i)=>t.toUpperCase()+i)}function gs(n,e){const t=p.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(n,i+t,{value:function(r,o,s){return this[i].call(this,e,r,o,s)},configurable:!0})})}class Ft{constructor(e){e&&this.set(e)}set(e,t,i){const r=this;function o(c,d,u){const m=Ge(d);if(!m)throw new Error("header name must be a non-empty string");const h=p.findKey(r,m);(!h||r[h]===void 0||u===!0||u===void 0&&r[h]!==!1)&&(r[h||d]=xt(c))}const s=(c,d)=>p.forEach(c,(u,m)=>o(u,m,d));return p.isPlainObject(e)||e instanceof this.constructor?s(e,t):p.isString(e)&&(e=e.trim())&&!ms(e)?s(fs(e),t):e!=null&&o(t,e,i),this}get(e,t){if(e=Ge(e),e){const i=p.findKey(this,e);if(i){const r=this[i];if(!t)return r;if(t===!0)return ps(r);if(p.isFunction(t))return t.call(this,r,i);if(p.isRegExp(t))return t.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=Ge(e),e){const i=p.findKey(this,e);return!!(i&&this[i]!==void 0&&(!t||Gt(this,this[i],i,t)))}return!1}delete(e,t){const i=this;let r=!1;function o(s){if(s=Ge(s),s){const c=p.findKey(i,s);c&&(!t||Gt(i,i[c],c,t))&&(delete i[c],r=!0)}}return p.isArray(e)?e.forEach(o):o(e),r}clear(e){const t=Object.keys(this);let i=t.length,r=!1;for(;i--;){const o=t[i];(!e||Gt(this,this[o],o,e,!0))&&(delete this[o],r=!0)}return r}normalize(e){const t=this,i={};return p.forEach(this,(r,o)=>{const s=p.findKey(i,o);if(s){t[s]=xt(r),delete t[o];return}const c=e?hs(o):String(o).trim();c!==o&&delete t[o],t[c]=xt(r),i[c]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return p.forEach(this,(i,r)=>{i!=null&&i!==!1&&(t[r]=e&&p.isArray(i)?i.join(", "):i)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const i=new this(e);return t.forEach(r=>i.set(r)),i}static accessor(e){const i=(this[oi]=this[oi]={accessors:{}}).accessors,r=this.prototype;function o(s){const c=Ge(s);i[c]||(gs(r,s),i[c]=!0)}return p.isArray(e)?e.forEach(o):o(e),this}}Ft.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);p.freezeMethods(Ft.prototype);p.freezeMethods(Ft);const fe=Ft;function Jt(n,e){const t=this||In,i=e||t,r=fe.from(i.headers);let o=i.data;return p.forEach(n,function(c){o=c.call(t,o,r.normalize(),e?e.status:void 0)}),r.normalize(),o}function Yi(n){return!!(n&&n.__CANCEL__)}function ot(n,e,t){R.call(this,n??"canceled",R.ERR_CANCELED,e,t),this.name="CanceledError"}p.inherits(ot,R,{__CANCEL__:!0});function bs(n,e,t){const i=t.config.validateStatus;!t.status||!i||i(t.status)?n(t):e(new R("Request failed with status code "+t.status,[R.ERR_BAD_REQUEST,R.ERR_BAD_RESPONSE][Math.floor(t.status/100)-4],t.config,t.request,t))}const ys=ie.isStandardBrowserEnv?function(){return{write:function(t,i,r,o,s,c){const d=[];d.push(t+"="+encodeURIComponent(i)),p.isNumber(r)&&d.push("expires="+new Date(r).toGMTString()),p.isString(o)&&d.push("path="+o),p.isString(s)&&d.push("domain="+s),c===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(t){const i=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return i?decodeURIComponent(i[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function xs(n){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}function ws(n,e){return e?n.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):n}function Qi(n,e){return n&&!xs(e)?ws(n,e):e}const vs=ie.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let i;function r(o){let s=o;return e&&(t.setAttribute("href",s),s=t.href),t.setAttribute("href",s),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)==="/"?t.pathname:"/"+t.pathname}}return i=r(window.location.href),function(s){const c=p.isString(s)?r(s):s;return c.protocol===i.protocol&&c.host===i.host}}():function(){return function(){return!0}}();function ks(n){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(n);return e&&e[1]||""}function _s(n,e){n=n||10;const t=new Array(n),i=new Array(n);let r=0,o=0,s;return e=e!==void 0?e:1e3,function(d){const u=Date.now(),m=i[o];s||(s=u),t[r]=d,i[r]=u;let h=o,S=0;for(;h!==r;)S+=t[h++],h=h%n;if(r=(r+1)%n,r===o&&(o=(o+1)%n),u-s<e)return;const v=m&&u-m;return v?Math.round(S*1e3/v):void 0}}function si(n,e){let t=0;const i=_s(50,250);return r=>{const o=r.loaded,s=r.lengthComputable?r.total:void 0,c=o-t,d=i(c),u=o<=s;t=o;const m={loaded:o,total:s,progress:s?o/s:void 0,bytes:c,rate:d||void 0,estimated:d&&s&&u?(s-o)/d:void 0,event:r};m[e?"download":"upload"]=!0,n(m)}}const Es=typeof XMLHttpRequest<"u",Is=Es&&function(n){return new Promise(function(t,i){let r=n.data;const o=fe.from(n.headers).normalize(),s=n.responseType;let c;function d(){n.cancelToken&&n.cancelToken.unsubscribe(c),n.signal&&n.signal.removeEventListener("abort",c)}p.isFormData(r)&&(ie.isStandardBrowserEnv||ie.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.setContentType("multipart/form-data;",!1));let u=new XMLHttpRequest;if(n.auth){const v=n.auth.username||"",b=n.auth.password?unescape(encodeURIComponent(n.auth.password)):"";o.set("Authorization","Basic "+btoa(v+":"+b))}const m=Qi(n.baseURL,n.url);u.open(n.method.toUpperCase(),Ki(m,n.params,n.paramsSerializer),!0),u.timeout=n.timeout;function h(){if(!u)return;const v=fe.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),y={data:!s||s==="text"||s==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:v,config:n,request:u};bs(function(D){t(D),d()},function(D){i(D),d()},y),u=null}if("onloadend"in u?u.onloadend=h:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(h)},u.onabort=function(){u&&(i(new R("Request aborted",R.ECONNABORTED,n,u)),u=null)},u.onerror=function(){i(new R("Network Error",R.ERR_NETWORK,n,u)),u=null},u.ontimeout=function(){let b=n.timeout?"timeout of "+n.timeout+"ms exceeded":"timeout exceeded";const y=n.transitional||Gi;n.timeoutErrorMessage&&(b=n.timeoutErrorMessage),i(new R(b,y.clarifyTimeoutError?R.ETIMEDOUT:R.ECONNABORTED,n,u)),u=null},ie.isStandardBrowserEnv){const v=(n.withCredentials||vs(m))&&n.xsrfCookieName&&ys.read(n.xsrfCookieName);v&&o.set(n.xsrfHeaderName,v)}r===void 0&&o.setContentType(null),"setRequestHeader"in u&&p.forEach(o.toJSON(),function(b,y){u.setRequestHeader(y,b)}),p.isUndefined(n.withCredentials)||(u.withCredentials=!!n.withCredentials),s&&s!=="json"&&(u.responseType=n.responseType),typeof n.onDownloadProgress=="function"&&u.addEventListener("progress",si(n.onDownloadProgress,!0)),typeof n.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",si(n.onUploadProgress)),(n.cancelToken||n.signal)&&(c=v=>{u&&(i(!v||v.type?new ot(null,n,u):v),u.abort(),u=null)},n.cancelToken&&n.cancelToken.subscribe(c),n.signal&&(n.signal.aborted?c():n.signal.addEventListener("abort",c)));const S=ks(m);if(S&&ie.protocols.indexOf(S)===-1){i(new R("Unsupported protocol "+S+":",R.ERR_BAD_REQUEST,n));return}u.send(r||null)})},wt={http:Jo,xhr:Is};p.forEach(wt,(n,e)=>{if(n){try{Object.defineProperty(n,"name",{value:e})}catch{}Object.defineProperty(n,"adapterName",{value:e})}});const Ns={getAdapter:n=>{n=p.isArray(n)?n:[n];const{length:e}=n;let t,i;for(let r=0;r<e&&(t=n[r],!(i=p.isString(t)?wt[t.toLowerCase()]:t));r++);if(!i)throw i===!1?new R(`Adapter ${t} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(p.hasOwnProp(wt,t)?`Adapter '${t}' is not available in the build`:`Unknown adapter '${t}'`);if(!p.isFunction(i))throw new TypeError("adapter is not a function");return i},adapters:wt};function Yt(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new ot(null,n)}function ai(n){return Yt(n),n.headers=fe.from(n.headers),n.data=Jt.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),Ns.getAdapter(n.adapter||In.adapter)(n).then(function(i){return Yt(n),i.data=Jt.call(n,n.transformResponse,i),i.headers=fe.from(i.headers),i},function(i){return Yi(i)||(Yt(n),i&&i.response&&(i.response.data=Jt.call(n,n.transformResponse,i.response),i.response.headers=fe.from(i.response.headers))),Promise.reject(i)})}const ci=n=>n instanceof fe?n.toJSON():n;function Ue(n,e){e=e||{};const t={};function i(u,m,h){return p.isPlainObject(u)&&p.isPlainObject(m)?p.merge.call({caseless:h},u,m):p.isPlainObject(m)?p.merge({},m):p.isArray(m)?m.slice():m}function r(u,m,h){if(p.isUndefined(m)){if(!p.isUndefined(u))return i(void 0,u,h)}else return i(u,m,h)}function o(u,m){if(!p.isUndefined(m))return i(void 0,m)}function s(u,m){if(p.isUndefined(m)){if(!p.isUndefined(u))return i(void 0,u)}else return i(void 0,m)}function c(u,m,h){if(h in e)return i(u,m);if(h in n)return i(void 0,u)}const d={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:c,headers:(u,m)=>r(ci(u),ci(m),!0)};return p.forEach(Object.keys(Object.assign({},n,e)),function(m){const h=d[m]||r,S=h(n[m],e[m],m);p.isUndefined(S)&&h!==c||(t[m]=S)}),t}const Zi="1.4.0",Nn={};["object","boolean","number","function","string","symbol"].forEach((n,e)=>{Nn[n]=function(i){return typeof i===n||"a"+(e<1?"n ":" ")+n}});const li={};Nn.transitional=function(e,t,i){function r(o,s){return"[Axios v"+Zi+"] Transitional option '"+o+"'"+s+(i?". "+i:"")}return(o,s,c)=>{if(e===!1)throw new R(r(s," has been removed"+(t?" in "+t:"")),R.ERR_DEPRECATED);return t&&!li[s]&&(li[s]=!0,console.warn(r(s," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(o,s,c):!0}};function Ss(n,e,t){if(typeof n!="object")throw new R("options must be an object",R.ERR_BAD_OPTION_VALUE);const i=Object.keys(n);let r=i.length;for(;r-- >0;){const o=i[r],s=e[o];if(s){const c=n[o],d=c===void 0||s(c,o,n);if(d!==!0)throw new R("option "+o+" must be "+d,R.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new R("Unknown option "+o,R.ERR_BAD_OPTION)}}const fn={assertOptions:Ss,validators:Nn},he=fn.validators;class Nt{constructor(e){this.defaults=e,this.interceptors={request:new ri,response:new ri}}request(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=Ue(this.defaults,t);const{transitional:i,paramsSerializer:r,headers:o}=t;i!==void 0&&fn.assertOptions(i,{silentJSONParsing:he.transitional(he.boolean),forcedJSONParsing:he.transitional(he.boolean),clarifyTimeoutError:he.transitional(he.boolean)},!1),r!=null&&(p.isFunction(r)?t.paramsSerializer={serialize:r}:fn.assertOptions(r,{encode:he.function,serialize:he.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let s;s=o&&p.merge(o.common,o[t.method]),s&&p.forEach(["delete","get","head","post","put","patch","common"],b=>{delete o[b]}),t.headers=fe.concat(s,o);const c=[];let d=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(t)===!1||(d=d&&y.synchronous,c.unshift(y.fulfilled,y.rejected))});const u=[];this.interceptors.response.forEach(function(y){u.push(y.fulfilled,y.rejected)});let m,h=0,S;if(!d){const b=[ai.bind(this),void 0];for(b.unshift.apply(b,c),b.push.apply(b,u),S=b.length,m=Promise.resolve(t);h<S;)m=m.then(b[h++],b[h++]);return m}S=c.length;let v=t;for(h=0;h<S;){const b=c[h++],y=c[h++];try{v=b(v)}catch(W){y.call(this,W);break}}try{m=ai.call(this,v)}catch(b){return Promise.reject(b)}for(h=0,S=u.length;h<S;)m=m.then(u[h++],u[h++]);return m}getUri(e){e=Ue(this.defaults,e);const t=Qi(e.baseURL,e.url);return Ki(t,e.params,e.paramsSerializer)}}p.forEach(["delete","get","head","options"],function(e){Nt.prototype[e]=function(t,i){return this.request(Ue(i||{},{method:e,url:t,data:(i||{}).data}))}});p.forEach(["post","put","patch"],function(e){function t(i){return function(o,s,c){return this.request(Ue(c||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:o,data:s}))}}Nt.prototype[e]=t(),Nt.prototype[e+"Form"]=t(!0)});const vt=Nt;class Sn{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(o){t=o});const i=this;this.promise.then(r=>{if(!i._listeners)return;let o=i._listeners.length;for(;o-- >0;)i._listeners[o](r);i._listeners=null}),this.promise.then=r=>{let o;const s=new Promise(c=>{i.subscribe(c),o=c}).then(r);return s.cancel=function(){i.unsubscribe(o)},s},e(function(o,s,c){i.reason||(i.reason=new ot(o,s,c),t(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}static source(){let e;return{token:new Sn(function(r){e=r}),cancel:e}}}const Cs=Sn;function Ts(n){return function(t){return n.apply(null,t)}}function Rs(n){return p.isObject(n)&&n.isAxiosError===!0}const pn={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(pn).forEach(([n,e])=>{pn[e]=n});const As=pn;function er(n){const e=new vt(n),t=Mi(vt.prototype.request,e);return p.extend(t,vt.prototype,e,{allOwnKeys:!0}),p.extend(t,e,null,{allOwnKeys:!0}),t.create=function(r){return er(Ue(n,r))},t}const j=er(In);j.Axios=vt;j.CanceledError=ot;j.CancelToken=Cs;j.isCancel=Yi;j.VERSION=Zi;j.toFormData=zt;j.AxiosError=R;j.Cancel=j.CanceledError;j.all=function(e){return Promise.all(e)};j.spread=Ts;j.isAxiosError=Rs;j.mergeConfig=Ue;j.AxiosHeaders=fe;j.formToJSON=n=>Ji(p.isHTMLForm(n)?new FormData(n):n);j.HttpStatusCode=As;j.default=j;const tr=j;tr.defaults.baseURL="https://books-backend.p.goit.global/books/";async function nr(n){try{return await tr.get(`${n}`)}catch(e){console.error(e)}}function Os(n){let e="";return n.map(({list_name:t})=>{e+=`<li class="categories__item categories__item">
					<a class="categories__link" href="books">
						${t}
					</a>
				</li>`}),document.querySelector(".all-categories").insertAdjacentHTML("beforeend",e),e}const Ls=nr("category-list").then(n=>n.data);Os(Ls);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let r=n.charCodeAt(i);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},Ps=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const r=n[t++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const o=n[t++];e[i++]=String.fromCharCode((r&31)<<6|o&63)}else if(r>239&&r<365){const o=n[t++],s=n[t++],c=n[t++],d=((r&7)<<18|(o&63)<<12|(s&63)<<6|c&63)-65536;e[i++]=String.fromCharCode(55296+(d>>10)),e[i++]=String.fromCharCode(56320+(d&1023))}else{const o=n[t++],s=n[t++];e[i++]=String.fromCharCode((r&15)<<12|(o&63)<<6|s&63)}}return e.join("")},rr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<n.length;r+=3){const o=n[r],s=r+1<n.length,c=s?n[r+1]:0,d=r+2<n.length,u=d?n[r+2]:0,m=o>>2,h=(o&3)<<4|c>>4;let S=(c&15)<<2|u>>6,v=u&63;d||(v=64,s||(S=64)),i.push(t[m],t[h],t[S],t[v])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(ir(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Ps(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<n.length;){const o=t[n.charAt(r++)],c=r<n.length?t[n.charAt(r)]:0;++r;const u=r<n.length?t[n.charAt(r)]:64;++r;const h=r<n.length?t[n.charAt(r)]:64;if(++r,o==null||c==null||u==null||h==null)throw new Ds;const S=o<<2|c>>4;if(i.push(S),u!==64){const v=c<<4&240|u>>2;if(i.push(v),h!==64){const b=u<<6&192|h;i.push(b)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ds extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ms=function(n){const e=ir(n);return rr.encodeByteArray(e,!0)},or=function(n){return Ms(n).replace(/\./g,"")},sr=function(n){try{return rr.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bs(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs=()=>Bs().__FIREBASE_DEFAULTS__,Us=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Fs=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&sr(n[1]);return e&&JSON.parse(e)},Cn=()=>{try{return zs()||Us()||Fs()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ws=n=>{var e,t;return(t=(e=Cn())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},ar=()=>{var n;return(n=Cn())===null||n===void 0?void 0:n.config},cr=n=>{var e;return(e=Cn())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function js(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(X())}function $s(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Vs(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qs(){const n=X();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Xs(){try{return typeof indexedDB=="object"}catch{return!1}}function Ks(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var o;e(((o=r.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gs="FirebaseError";class Ee extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=Gs,Object.setPrototypeOf(this,Ee.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,st.prototype.create)}}class st{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},r=`${this.service}/${e}`,o=this.errors[e],s=o?Js(o,i):"Error",c=`${this.serviceName}: ${s} (${r}).`;return new Ee(r,c,i)}}function Js(n,e){return n.replace(Ys,(t,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const Ys=/\{\$([^}]+)}/g;function Qs(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function St(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const r of t){if(!i.includes(r))return!1;const o=n[r],s=e[r];if(ui(o)&&ui(s)){if(!St(o,s))return!1}else if(o!==s)return!1}for(const r of i)if(!t.includes(r))return!1;return!0}function ui(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Je(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[r,o]=i.split("=");e[decodeURIComponent(r)]=decodeURIComponent(o)}}),e}function Ye(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Zs(n,e){const t=new ea(n,e);return t.subscribe.bind(t)}class ea{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let r;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");ta(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:i},r.next===void 0&&(r.next=Qt),r.error===void 0&&(r.error=Qt),r.complete===void 0&&(r.complete=Qt);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ta(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Qt(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(n){return n&&n._delegate?n._delegate:n}class Fe{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ce="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new Hs;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(o){if(r)return null;throw o}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ra(e))try{this.getOrInitializeService({instanceIdentifier:Ce})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:r});i.resolve(o)}catch{}}}}clearInstance(e=Ce){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ce){return this.instances.has(e)}getOptions(e=Ce){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[o,s]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);i===c&&s.resolve(r)}return r}onInit(e,t){var i;const r=this.normalizeInstanceIdentifier(t),o=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;o.add(e),this.onInitCallbacks.set(r,o);const s=this.instances.get(r);return s&&e(s,r),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const r of i)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:ia(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Ce){return this.component?this.component.multipleInstances?e:Ce:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ia(n){return n===Ce?void 0:n}function ra(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new na(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var P;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(P||(P={}));const sa={debug:P.DEBUG,verbose:P.VERBOSE,info:P.INFO,warn:P.WARN,error:P.ERROR,silent:P.SILENT},aa=P.INFO,ca={[P.DEBUG]:"log",[P.VERBOSE]:"log",[P.INFO]:"info",[P.WARN]:"warn",[P.ERROR]:"error"},la=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),r=ca[e];if(r)console[r](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class lr{constructor(e){this.name=e,this._logLevel=aa,this._logHandler=la,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in P))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?sa[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,P.DEBUG,...e),this._logHandler(this,P.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,P.VERBOSE,...e),this._logHandler(this,P.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,P.INFO,...e),this._logHandler(this,P.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,P.WARN,...e),this._logHandler(this,P.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,P.ERROR,...e),this._logHandler(this,P.ERROR,...e)}}const ua=(n,e)=>e.some(t=>n instanceof t);let di,fi;function da(){return di||(di=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fa(){return fi||(fi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ur=new WeakMap,mn=new WeakMap,dr=new WeakMap,Zt=new WeakMap,Tn=new WeakMap;function pa(n){const e=new Promise((t,i)=>{const r=()=>{n.removeEventListener("success",o),n.removeEventListener("error",s)},o=()=>{t(ve(n.result)),r()},s=()=>{i(n.error),r()};n.addEventListener("success",o),n.addEventListener("error",s)});return e.then(t=>{t instanceof IDBCursor&&ur.set(t,n)}).catch(()=>{}),Tn.set(e,n),e}function ma(n){if(mn.has(n))return;const e=new Promise((t,i)=>{const r=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",s),n.removeEventListener("abort",s)},o=()=>{t(),r()},s=()=>{i(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",o),n.addEventListener("error",s),n.addEventListener("abort",s)});mn.set(n,e)}let hn={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return mn.get(n);if(e==="objectStoreNames")return n.objectStoreNames||dr.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ve(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function ha(n){hn=n(hn)}function ga(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(en(this),e,...t);return dr.set(i,e.sort?e.sort():[e]),ve(i)}:fa().includes(n)?function(...e){return n.apply(en(this),e),ve(ur.get(this))}:function(...e){return ve(n.apply(en(this),e))}}function ba(n){return typeof n=="function"?ga(n):(n instanceof IDBTransaction&&ma(n),ua(n,da())?new Proxy(n,hn):n)}function ve(n){if(n instanceof IDBRequest)return pa(n);if(Zt.has(n))return Zt.get(n);const e=ba(n);return e!==n&&(Zt.set(n,e),Tn.set(e,n)),e}const en=n=>Tn.get(n);function ya(n,e,{blocked:t,upgrade:i,blocking:r,terminated:o}={}){const s=indexedDB.open(n,e),c=ve(s);return i&&s.addEventListener("upgradeneeded",d=>{i(ve(s.result),d.oldVersion,d.newVersion,ve(s.transaction),d)}),t&&s.addEventListener("blocked",d=>t(d.oldVersion,d.newVersion,d)),c.then(d=>{o&&d.addEventListener("close",()=>o()),r&&d.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const xa=["get","getKey","getAll","getAllKeys","count"],wa=["put","add","delete","clear"],tn=new Map;function pi(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(tn.get(e))return tn.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,r=wa.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(r||xa.includes(t)))return;const o=async function(s,...c){const d=this.transaction(s,r?"readwrite":"readonly");let u=d.store;return i&&(u=u.index(c.shift())),(await Promise.all([u[t](...c),r&&d.done]))[0]};return tn.set(e,o),o}ha(n=>({...n,get:(e,t,i)=>pi(e,t)||n.get(e,t,i),has:(e,t)=>!!pi(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(ka(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function ka(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const gn="@firebase/app",mi="0.9.15";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Re=new lr("@firebase/app"),_a="@firebase/app-compat",Ea="@firebase/analytics-compat",Ia="@firebase/analytics",Na="@firebase/app-check-compat",Sa="@firebase/app-check",Ca="@firebase/auth",Ta="@firebase/auth-compat",Ra="@firebase/database",Aa="@firebase/database-compat",Oa="@firebase/functions",La="@firebase/functions-compat",Pa="@firebase/installations",Da="@firebase/installations-compat",Ma="@firebase/messaging",Ba="@firebase/messaging-compat",za="@firebase/performance",Ua="@firebase/performance-compat",Fa="@firebase/remote-config",Wa="@firebase/remote-config-compat",Ha="@firebase/storage",ja="@firebase/storage-compat",$a="@firebase/firestore",Va="@firebase/firestore-compat",qa="firebase",Xa="10.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn="[DEFAULT]",Ka={[gn]:"fire-core",[_a]:"fire-core-compat",[Ia]:"fire-analytics",[Ea]:"fire-analytics-compat",[Sa]:"fire-app-check",[Na]:"fire-app-check-compat",[Ca]:"fire-auth",[Ta]:"fire-auth-compat",[Ra]:"fire-rtdb",[Aa]:"fire-rtdb-compat",[Oa]:"fire-fn",[La]:"fire-fn-compat",[Pa]:"fire-iid",[Da]:"fire-iid-compat",[Ma]:"fire-fcm",[Ba]:"fire-fcm-compat",[za]:"fire-perf",[Ua]:"fire-perf-compat",[Fa]:"fire-rc",[Wa]:"fire-rc-compat",[Ha]:"fire-gcs",[ja]:"fire-gcs-compat",[$a]:"fire-fst",[Va]:"fire-fst-compat","fire-js":"fire-js",[qa]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct=new Map,yn=new Map;function Ga(n,e){try{n.container.addComponent(e)}catch(t){Re.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function et(n){const e=n.name;if(yn.has(e))return Re.debug(`There were multiple attempts to register component ${e}.`),!1;yn.set(e,n);for(const t of Ct.values())Ga(t,n);return!0}function fr(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ja={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ke=new st("app","Firebase",Ja);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Fe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ke.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ct=Xa;function pr(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:bn,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw ke.create("bad-app-name",{appName:String(r)});if(t||(t=ar()),!t)throw ke.create("no-options");const o=Ct.get(r);if(o){if(St(t,o.options)&&St(i,o.config))return o;throw ke.create("duplicate-app",{appName:r})}const s=new oa(r);for(const d of yn.values())s.addComponent(d);const c=new Ya(t,i,s);return Ct.set(r,c),c}function Qa(n=bn){const e=Ct.get(n);if(!e&&n===bn&&ar())return pr();if(!e)throw ke.create("no-app",{appName:n});return e}function Me(n,e,t){var i;let r=(i=Ka[n])!==null&&i!==void 0?i:n;t&&(r+=`-${t}`);const o=r.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const c=[`Unable to register library "${r}" with version "${e}":`];o&&c.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&s&&c.push("and"),s&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Re.warn(c.join(" "));return}et(new Fe(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Za="firebase-heartbeat-database",ec=1,tt="firebase-heartbeat-store";let nn=null;function mr(){return nn||(nn=ya(Za,ec,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(tt)}}}).catch(n=>{throw ke.create("idb-open",{originalErrorMessage:n.message})})),nn}async function tc(n){try{return await(await mr()).transaction(tt).objectStore(tt).get(hr(n))}catch(e){if(e instanceof Ee)Re.warn(e.message);else{const t=ke.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Re.warn(t.message)}}}async function hi(n,e){try{const i=(await mr()).transaction(tt,"readwrite");await i.objectStore(tt).put(e,hr(n)),await i.done}catch(t){if(t instanceof Ee)Re.warn(t.message);else{const i=ke.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Re.warn(i.message)}}}function hr(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nc=1024,ic=30*24*60*60*1e3;class rc{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new sc(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=gi();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const o=new Date(r.date).valueOf();return Date.now()-o<=ic}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=gi(),{heartbeatsToSend:t,unsentEntries:i}=oc(this._heartbeatsCache.heartbeats),r=or(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function gi(){return new Date().toISOString().substring(0,10)}function oc(n,e=nc){const t=[];let i=n.slice();for(const r of n){const o=t.find(s=>s.agent===r.agent);if(o){if(o.dates.push(r.date),bi(t)>e){o.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),bi(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class sc{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Xs()?Ks().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await tc(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return hi(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return hi(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function bi(n){return or(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ac(n){et(new Fe("platform-logger",e=>new va(e),"PRIVATE")),et(new Fe("heartbeat",e=>new rc(e),"PRIVATE")),Me(gn,mi,n),Me(gn,mi,"esm2017"),Me("fire-js","")}ac("");function Rn(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(n);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(n,i[r])&&(t[i[r]]=n[i[r]]);return t}function gr(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const cc=gr,br=new st("auth","Firebase",gr());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt=new lr("@firebase/auth");function lc(n,...e){Tt.logLevel<=P.WARN&&Tt.warn(`Auth (${ct}): ${n}`,...e)}function kt(n,...e){Tt.logLevel<=P.ERROR&&Tt.error(`Auth (${ct}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(n,...e){throw An(n,...e)}function re(n,...e){return An(n,...e)}function uc(n,e,t){const i=Object.assign(Object.assign({},cc()),{[e]:t});return new st("auth","Firebase",i).create(e,{appName:n.name})}function An(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return br.create(n,...e)}function _(n,e,...t){if(!n)throw An(e,...t)}function ue(n){const e="INTERNAL ASSERTION FAILED: "+n;throw kt(e),new Error(e)}function pe(n,e){n||ue(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xn(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function dc(){return yi()==="http:"||yi()==="https:"}function yi(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fc(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(dc()||$s()||"connection"in navigator)?navigator.onLine:!0}function pc(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e,t){this.shortDelay=e,this.longDelay=t,pe(t>e,"Short delay should be less than long delay!"),this.isMobile=js()||Vs()}get(){return fc()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(n,e){pe(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ue("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ue("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ue("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mc={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hc=new lt(3e4,6e4);function je(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Le(n,e,t,i,r={}){return xr(n,r,async()=>{let o={},s={};i&&(e==="GET"?s=i:o={body:JSON.stringify(i)});const c=at(Object.assign({key:n.config.apiKey},s)).slice(1),d=await n._getAdditionalHeaders();return d["Content-Type"]="application/json",n.languageCode&&(d["X-Firebase-Locale"]=n.languageCode),yr.fetch()(wr(n,n.config.apiHost,t,c),Object.assign({method:e,headers:d,referrerPolicy:"no-referrer"},o))})}async function xr(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},mc),e);try{const r=new gc(n),o=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw bt(n,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const c=o.ok?s.errorMessage:s.error.message,[d,u]=c.split(" : ");if(d==="FEDERATED_USER_ID_ALREADY_LINKED")throw bt(n,"credential-already-in-use",s);if(d==="EMAIL_EXISTS")throw bt(n,"email-already-in-use",s);if(d==="USER_DISABLED")throw bt(n,"user-disabled",s);const m=i[d]||d.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw uc(n,m,u);ne(n,m)}}catch(r){if(r instanceof Ee)throw r;ne(n,"network-request-failed",{message:String(r)})}}async function ut(n,e,t,i,r={}){const o=await Le(n,e,t,i,r);return"mfaPendingCredential"in o&&ne(n,"multi-factor-auth-required",{_serverResponse:o}),o}function wr(n,e,t,i){const r=`${e}${t}?${i}`;return n.config.emulator?On(n.config,r):`${n.config.apiScheme}://${r}`}class gc{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(re(this.auth,"network-request-failed")),hc.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function bt(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const r=re(n,e,i);return r.customData._tokenResponse=t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bc(n,e){return Le(n,"POST","/v1/accounts:delete",e)}async function yc(n,e){return Le(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function xc(n,e=!1){const t=Ie(n),i=await t.getIdToken(e),r=Ln(i);_(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const o=typeof r.firebase=="object"?r.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:r,token:i,authTime:Qe(rn(r.auth_time)),issuedAtTime:Qe(rn(r.iat)),expirationTime:Qe(rn(r.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function rn(n){return Number(n)*1e3}function Ln(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return kt("JWT malformed, contained fewer than 3 sections"),null;try{const r=sr(t);return r?JSON.parse(r):(kt("Failed to decode base64 JWT payload"),null)}catch(r){return kt("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function wc(n){const e=Ln(n);return _(e,"internal-error"),_(typeof e.exp<"u","internal-error"),_(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function We(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Ee&&vc(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function vc({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qe(this.lastLoginAt),this.creationTime=Qe(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rt(n){var e;const t=n.auth,i=await n.getIdToken(),r=await We(n,yc(t,{idToken:i}));_(r==null?void 0:r.users.length,t,"internal-error");const o=r.users[0];n._notifyReloadListener(o);const s=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?Ic(o.providerUserInfo):[],c=Ec(n.providerData,s),d=n.isAnonymous,u=!(n.email&&o.passwordHash)&&!(c!=null&&c.length),m=d?u:!1,h={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new vr(o.createdAt,o.lastLoginAt),isAnonymous:m};Object.assign(n,h)}async function _c(n){const e=Ie(n);await Rt(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ec(n,e){return[...n.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function Ic(n){return n.map(e=>{var{providerId:t}=e,i=Rn(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nc(n,e){const t=await xr(n,{},async()=>{const i=at({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:o}=n.config,s=wr(n,r,"/v1/token",`key=${o}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",yr.fetch()(s,{method:"POST",headers:c,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_(e.idToken,"internal-error"),_(typeof e.idToken<"u","internal-error"),_(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):wc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return _(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:r,expiresIn:o}=await Nc(e,t);this.updateTokensAndExpiration(i,r,Number(o))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:r,expirationTime:o}=t,s=new nt;return i&&(_(typeof i=="string","internal-error",{appName:e}),s.refreshToken=i),r&&(_(typeof r=="string","internal-error",{appName:e}),s.accessToken=r),o&&(_(typeof o=="number","internal-error",{appName:e}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new nt,this.toJSON())}_performRefresh(){return ue("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(n,e){_(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Te{constructor(e){var{uid:t,auth:i,stsTokenManager:r}=e,o=Rn(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new kc(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new vr(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await We(this,this.stsTokenManager.getToken(this.auth,e));return _(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return xc(this,e)}reload(){return _c(this)}_assign(e){this!==e&&(_(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Te(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){_(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Rt(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await We(this,bc(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,r,o,s,c,d,u,m;const h=(i=t.displayName)!==null&&i!==void 0?i:void 0,S=(r=t.email)!==null&&r!==void 0?r:void 0,v=(o=t.phoneNumber)!==null&&o!==void 0?o:void 0,b=(s=t.photoURL)!==null&&s!==void 0?s:void 0,y=(c=t.tenantId)!==null&&c!==void 0?c:void 0,W=(d=t._redirectEventId)!==null&&d!==void 0?d:void 0,D=(u=t.createdAt)!==null&&u!==void 0?u:void 0,$=(m=t.lastLoginAt)!==null&&m!==void 0?m:void 0,{uid:z,emailVerified:Ne,isAnonymous:ae,providerData:ce,stsTokenManager:O}=t;_(z&&O,e,"internal-error");const V=nt.fromJSON(this.name,O);_(typeof z=="string",e,"internal-error"),ge(h,e.name),ge(S,e.name),_(typeof Ne=="boolean",e,"internal-error"),_(typeof ae=="boolean",e,"internal-error"),ge(v,e.name),ge(b,e.name),ge(y,e.name),ge(W,e.name),ge(D,e.name),ge($,e.name);const qe=new Te({uid:z,auth:e,email:S,emailVerified:Ne,displayName:h,isAnonymous:ae,photoURL:b,phoneNumber:v,tenantId:y,stsTokenManager:V,createdAt:D,lastLoginAt:$});return ce&&Array.isArray(ce)&&(qe.providerData=ce.map($t=>Object.assign({},$t))),W&&(qe._redirectEventId=W),qe}static async _fromIdTokenResponse(e,t,i=!1){const r=new nt;r.updateFromServerResponse(t);const o=new Te({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await Rt(o),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi=new Map;function de(n){pe(n instanceof Function,"Expected a class definition");let e=xi.get(n);return e?(pe(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,xi.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}kr.type="NONE";const wi=kr;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(n,e,t){return`firebase:${n}:${e}:${t}`}class Be{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:r,name:o}=this.auth;this.fullUserKey=_t(this.userKey,r.apiKey,o),this.fullPersistenceKey=_t("persistence",r.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Te._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Be(de(wi),e,i);const r=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=r[0]||de(wi);const s=_t(i,e.config.apiKey,e.name);let c=null;for(const u of t)try{const m=await u._get(s);if(m){const h=Te._fromJSON(e,m);u!==o&&(c=h),o=u;break}}catch{}const d=r.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!d.length?new Be(o,e,i):(o=d[0],c&&await o._set(s,c.toJSON()),await Promise.all(t.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new Be(o,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ir(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(_r(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Sr(e))return"Blackberry";if(Cr(e))return"Webos";if(Pn(e))return"Safari";if((e.includes("chrome/")||Er(e))&&!e.includes("edge/"))return"Chrome";if(Nr(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function _r(n=X()){return/firefox\//i.test(n)}function Pn(n=X()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Er(n=X()){return/crios\//i.test(n)}function Ir(n=X()){return/iemobile/i.test(n)}function Nr(n=X()){return/android/i.test(n)}function Sr(n=X()){return/blackberry/i.test(n)}function Cr(n=X()){return/webos/i.test(n)}function Wt(n=X()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Sc(n=X()){var e;return Wt(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Cc(){return qs()&&document.documentMode===10}function Tr(n=X()){return Wt(n)||Nr(n)||Cr(n)||Sr(n)||/windows phone/i.test(n)||Ir(n)}function Tc(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rr(n,e=[]){let t;switch(n){case"Browser":t=vi(X());break;case"Worker":t=`${vi(X())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ct}/${i}`}async function Ar(n,e){return Le(n,"GET","/v2/recaptchaConfig",je(n,e))}function ki(n){return n!==void 0&&n.enterprise!==void 0}class Or{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(t=>t.provider==="EMAIL_PASSWORD_PROVIDER"&&t.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rc(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function Lr(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=r=>{const o=re("internal-error");o.customData=r,t(o)},i.type="text/javascript",i.charset="UTF-8",Rc().appendChild(i)})}function Ac(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const Oc="https://www.google.com/recaptcha/enterprise.js?render=",Lc="recaptcha-enterprise",Pc="NO_RECAPTCHA";class Pr{constructor(e){this.type=Lc,this.auth=$e(e)}async verify(e="verify",t=!1){async function i(o){if(!t){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(s,c)=>{Ar(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(d=>{if(d.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new Or(d);return o.tenantId==null?o._agentRecaptchaConfig=u:o._tenantRecaptchaConfigs[o.tenantId]=u,s(u.siteKey)}}).catch(d=>{c(d)})})}function r(o,s,c){const d=window.grecaptcha;ki(d)?d.enterprise.ready(()=>{d.enterprise.execute(o,{action:e}).then(u=>{s(u)}).catch(()=>{s(Pc)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,s)=>{i(this.auth).then(c=>{if(!t&&ki(window.grecaptcha))r(c,o,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}Lr(Oc+c).then(()=>{r(c,o,s)}).catch(d=>{s(d)})}}).catch(c=>{s(c)})})}}async function At(n,e,t,i=!1){const r=new Pr(n);let o;try{o=await r.verify(t)}catch{o=await r.verify(t,!0)}const s=Object.assign({},e);return i?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=o=>new Promise((s,c)=>{try{const d=e(o);s(d)}catch(d){c(d)}});i.onAbort=t,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(e,t,i,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _i(this),this.idTokenSubscription=new _i(this),this.beforeStateQueue=new Dc(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=br,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=de(t)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await Be.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const i=await this.assertedPersistence.getCurrentUser();let r=i,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=r==null?void 0:r._redirectEventId,d=await this.tryRedirectSignIn(e);(!s||s===c)&&(d!=null&&d.user)&&(r=d.user,o=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return _(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Rt(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=pc()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Ie(e):null;return t&&_(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&_(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(de(e))})}async initializeRecaptchaConfig(){const e=await Ar(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new Or(e);this.tenantId==null?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled&&new Pr(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new st("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&de(e)||this._popupRedirectResolver;_(t,this,"argument-error"),this.redirectPersistenceManager=await Be.create(this,[de(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,r){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return _(s,this,"internal-error"),s.then(()=>o(this.currentUser)),typeof t=="function"?e.addObserver(t,i,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Rr(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&lc(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function $e(n){return Ie(n)}class _i{constructor(e){this.auth=e,this.observer=null,this.addObserver=Zs(t=>this.observer=t)}get next(){return _(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bc(n,e){const t=fr(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),o=t.getOptions();if(St(o,e??{}))return r;ne(r,"already-initialized")}return t.initialize({options:e})}function zc(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(de);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function Uc(n,e,t){const i=$e(n);_(i._canInitEmulator,i,"emulator-config-failed"),_(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!!(t!=null&&t.disableWarnings),o=Dr(e),{host:s,port:c}=Fc(e),d=c===null?"":`:${c}`;i.config.emulator={url:`${o}//${s}${d}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:s,port:c,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||Wc()}function Dr(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Fc(n){const e=Dr(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const o=r[1];return{host:o,port:Ei(i.substr(o.length+1))}}else{const[o,s]=i.split(":");return{host:o,port:Ei(s)}}}function Ei(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Wc(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ue("not implemented")}_getIdTokenResponse(e){return ue("not implemented")}_linkToIdToken(e,t){return ue("not implemented")}_getReauthenticationResolver(e){return ue("not implemented")}}async function Hc(n,e){return Le(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function on(n,e){return ut(n,"POST","/v1/accounts:signInWithPassword",je(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jc(n,e){return ut(n,"POST","/v1/accounts:signInWithEmailLink",je(n,e))}async function $c(n,e){return ut(n,"POST","/v1/accounts:signInWithEmailLink",je(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it extends Dn{constructor(e,t,i,r=null){super("password",i),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new it(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new it(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const i={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((t=e._getRecaptchaConfig())===null||t===void 0)&&t.emailPasswordEnabled){const r=await At(e,i,"signInWithPassword");return on(e,r)}else return on(e,i).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const o=await At(e,i,"signInWithPassword");return on(e,o)}else return Promise.reject(r)});case"emailLink":return jc(e,{email:this._email,oobCode:this._password});default:ne(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Hc(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return $c(e,{idToken:t,email:this._email,oobCode:this._password});default:ne(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ze(n,e){return ut(n,"POST","/v1/accounts:signInWithIdp",je(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vc="http://localhost";class Ae extends Dn{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ae(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ne("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=t,o=Rn(t,["providerId","signInMethod"]);if(!i||!r)return null;const s=new Ae(i,r);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(e){const t=this.buildRequest();return ze(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,ze(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ze(e,t)}buildRequest(){const e={requestUri:Vc,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=at(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qc(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Xc(n){const e=Je(Ye(n)).link,t=e?Je(Ye(e)).deep_link_id:null,i=Je(Ye(n)).deep_link_id;return(i?Je(Ye(i)).link:null)||i||t||e||n}class Mn{constructor(e){var t,i,r,o,s,c;const d=Je(Ye(e)),u=(t=d.apiKey)!==null&&t!==void 0?t:null,m=(i=d.oobCode)!==null&&i!==void 0?i:null,h=qc((r=d.mode)!==null&&r!==void 0?r:null);_(u&&m&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=m,this.continueUrl=(o=d.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=d.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(c=d.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const t=Xc(e);try{return new Mn(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(){this.providerId=Ve.PROVIDER_ID}static credential(e,t){return it._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=Mn.parseLink(t);return _(i,"argument-error"),it._fromEmailAndCode(e,i.code,i.tenantId)}}Ve.PROVIDER_ID="password";Ve.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ve.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt extends Mr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be extends dt{constructor(){super("facebook.com")}static credential(e){return Ae._fromParams({providerId:be.PROVIDER_ID,signInMethod:be.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return be.credentialFromTaggedObject(e)}static credentialFromError(e){return be.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return be.credential(e.oauthAccessToken)}catch{return null}}}be.FACEBOOK_SIGN_IN_METHOD="facebook.com";be.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye extends dt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ae._fromParams({providerId:ye.PROVIDER_ID,signInMethod:ye.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ye.credentialFromTaggedObject(e)}static credentialFromError(e){return ye.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return ye.credential(t,i)}catch{return null}}}ye.GOOGLE_SIGN_IN_METHOD="google.com";ye.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe extends dt{constructor(){super("github.com")}static credential(e){return Ae._fromParams({providerId:xe.PROVIDER_ID,signInMethod:xe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xe.credentialFromTaggedObject(e)}static credentialFromError(e){return xe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xe.credential(e.oauthAccessToken)}catch{return null}}}xe.GITHUB_SIGN_IN_METHOD="github.com";xe.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we extends dt{constructor(){super("twitter.com")}static credential(e,t){return Ae._fromParams({providerId:we.PROVIDER_ID,signInMethod:we.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return we.credentialFromTaggedObject(e)}static credentialFromError(e){return we.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return we.credential(t,i)}catch{return null}}}we.TWITTER_SIGN_IN_METHOD="twitter.com";we.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sn(n,e){return ut(n,"POST","/v1/accounts:signUp",je(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,r=!1){const o=await Te._fromIdTokenResponse(e,i,r),s=Ii(i);return new Oe({user:o,providerId:s,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const r=Ii(i);return new Oe({user:e,providerId:r,_tokenResponse:i,operationType:t})}}function Ii(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot extends Ee{constructor(e,t,i,r){var o;super(t.code,t.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,Ot.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,r){return new Ot(e,t,i,r)}}function Br(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Ot._fromErrorAndOperation(n,o,e,i):o})}async function Kc(n,e,t=!1){const i=await We(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Oe._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gc(n,e,t=!1){const{auth:i}=n,r="reauthenticate";try{const o=await We(n,Br(i,r,e,n),t);_(o.idToken,i,"internal-error");const s=Ln(o.idToken);_(s,i,"internal-error");const{sub:c}=s;return _(n.uid===c,i,"user-mismatch"),Oe._forOperation(n,r,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&ne(i,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zr(n,e,t=!1){const i="signIn",r=await Br(n,i,e),o=await Oe._fromIdTokenResponse(n,i,r);return t||await n._updateCurrentUser(o.user),o}async function Jc(n,e){return zr($e(n),e)}async function Yc(n,e,t){var i;const r=$e(n),o={returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"};let s;if(!((i=r._getRecaptchaConfig())===null||i===void 0)&&i.emailPasswordEnabled){const u=await At(r,o,"signUpPassword");s=sn(r,u)}else s=sn(r,o).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const m=await At(r,o,"signUpPassword");return sn(r,m)}else return Promise.reject(u)});const c=await s.catch(u=>Promise.reject(u)),d=await Oe._fromIdTokenResponse(r,"signIn",c);return await r._updateCurrentUser(d.user),d}function Qc(n,e,t){return Jc(Ie(n),Ve.credential(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zc(n,e){return Le(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function el(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const i=Ie(n),o={idToken:await i.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},s=await We(i,Zc(i.auth,o));i.displayName=s.displayName||null,i.photoURL=s.photoUrl||null;const c=i.providerData.find(({providerId:d})=>d==="password");c&&(c.displayName=i.displayName,c.photoURL=i.photoURL),await i._updateTokensIfNecessary(s)}function tl(n,e,t,i){return Ie(n).onIdTokenChanged(e,t,i)}function nl(n,e,t){return Ie(n).beforeAuthStateChanged(e,t)}const Lt="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Lt,"1"),this.storage.removeItem(Lt),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function il(){const n=X();return Pn(n)||Wt(n)}const rl=1e3,ol=10;class Fr extends Ur{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=il()&&Tc(),this.fallbackToPolling=Tr(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),r=this.localCache[t];i!==r&&e(t,r,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((s,c,d)=>{this.notifyListeners(s,d)});return}const i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(i);if(e.newValue!==s)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}const r=()=>{const s=this.storage.getItem(i);!t&&this.localCache[i]===s||this.notifyListeners(i,s)},o=this.storage.getItem(i);Cc()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,ol):r()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},rl)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Fr.type="LOCAL";const sl=Fr;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr extends Ur{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Wr.type="SESSION";const Hr=Wr;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const i=new Ht(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:r,data:o}=t.data,s=this.handlersMap[r];if(!(s!=null&&s.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const c=Array.from(s).map(async u=>u(t.origin,o)),d=await al(c);t.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:d})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ht.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let o,s;return new Promise((c,d)=>{const u=Bn("",20);r.port1.start();const m=setTimeout(()=>{d(new Error("unsupported_event"))},i);s={messageChannel:r,onMessage(h){const S=h;if(S.data.eventId===u)switch(S.data.status){case"ack":clearTimeout(m),o=setTimeout(()=>{d(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),c(S.data.response);break;default:clearTimeout(m),clearTimeout(o),d(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[r.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(){return window}function ll(n){oe().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(){return typeof oe().WorkerGlobalScope<"u"&&typeof oe().importScripts=="function"}async function ul(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function dl(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function fl(){return jr()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r="firebaseLocalStorageDb",pl=1,Pt="firebaseLocalStorage",Vr="fbase_key";class ft{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function jt(n,e){return n.transaction([Pt],e?"readwrite":"readonly").objectStore(Pt)}function ml(){const n=indexedDB.deleteDatabase($r);return new ft(n).toPromise()}function wn(){const n=indexedDB.open($r,pl);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Pt,{keyPath:Vr})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Pt)?e(i):(i.close(),await ml(),e(await wn()))})})}async function Ni(n,e,t){const i=jt(n,!0).put({[Vr]:e,value:t});return new ft(i).toPromise()}async function hl(n,e){const t=jt(n,!1).get(e),i=await new ft(t).toPromise();return i===void 0?null:i.value}function Si(n,e){const t=jt(n,!0).delete(e);return new ft(t).toPromise()}const gl=800,bl=3;class qr{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await wn(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>bl)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return jr()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ht._getInstance(fl()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await ul(),!this.activeServiceWorker)return;this.sender=new cl(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||dl()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await wn();return await Ni(e,Lt,"1"),await Si(e,Lt),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Ni(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>hl(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Si(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const o=jt(r,!1).getAll();return new ft(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;for(const{fbase_key:r,value:o}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(o)&&(this.notifyListeners(r,o),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),gl)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}qr.type="LOCAL";const yl=qr;new lt(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xl(n,e){return e?de(e):(_(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends Dn{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ze(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ze(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ze(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function wl(n){return zr(n.auth,new zn(n),n.bypassAuthState)}function vl(n){const{auth:e,user:t}=n;return _(t,e,"internal-error"),Gc(t,new zn(n),n.bypassAuthState)}async function kl(n){const{auth:e,user:t}=n;return _(t,e,"internal-error"),Kc(t,new zn(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e,t,i,r,o=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:r,tenantId:o,error:s,type:c}=e;if(s){this.reject(s);return}const d={auth:this.auth,requestUri:t,sessionId:i,tenantId:o||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(d))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return wl;case"linkViaPopup":case"linkViaRedirect":return kl;case"reauthViaPopup":case"reauthViaRedirect":return vl;default:ne(this.auth,"internal-error")}}resolve(e){pe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){pe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _l=new lt(2e3,1e4);class De extends Xr{constructor(e,t,i,r,o){super(e,t,r,o),this.provider=i,this.authWindow=null,this.pollId=null,De.currentPopupAction&&De.currentPopupAction.cancel(),De.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _(e,this.auth,"internal-error"),e}async onExecution(){pe(this.filter.length===1,"Popup operations only handle one event");const e=Bn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(re(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(re(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,De.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(re(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,_l.get())};e()}}De.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const El="pendingRedirect",Et=new Map;class Il extends Xr{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Et.get(this.auth._key());if(!e){try{const i=await Nl(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Et.set(this.auth._key(),e)}return this.bypassAuthState||Et.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Nl(n,e){const t=Tl(e),i=Cl(n);if(!await i._isAvailable())return!1;const r=await i._get(t)==="true";return await i._remove(t),r}function Sl(n,e){Et.set(n._key(),e)}function Cl(n){return de(n._redirectPersistence)}function Tl(n){return _t(El,n.config.apiKey,n.name)}async function Rl(n,e,t=!1){const i=$e(n),r=xl(i,e),s=await new Il(i,r,t).execute();return s&&!t&&(delete s.user._redirectEventId,await i._persistUserIfCurrent(s.user),await i._setRedirectUser(null,e)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Al=10*60*1e3;class Ol{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ll(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Kr(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(re(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Al&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ci(e))}saveEventToCache(e){this.cachedEventUids.add(Ci(e)),this.lastProcessedEventTime=Date.now()}}function Ci(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Kr({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Ll(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Kr(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pl(n,e={}){return Le(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dl=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ml=/^https?/;async function Bl(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Pl(n);for(const t of e)try{if(zl(t))return}catch{}ne(n,"unauthorized-domain")}function zl(n){const e=xn(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const s=new URL(n);return s.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&s.hostname===i}if(!Ml.test(t))return!1;if(Dl.test(n))return i===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ul=new lt(3e4,6e4);function Ti(){const n=oe().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Fl(n){return new Promise((e,t)=>{var i,r,o;function s(){Ti(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ti(),t(re(n,"network-request-failed"))},timeout:Ul.get()})}if(!((r=(i=oe().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((o=oe().gapi)===null||o===void 0)&&o.load)s();else{const c=Ac("iframefcb");return oe()[c]=()=>{gapi.load?s():t(re(n,"network-request-failed"))},Lr(`https://apis.google.com/js/api.js?onload=${c}`).catch(d=>t(d))}}).catch(e=>{throw It=null,e})}let It=null;function Wl(n){return It=It||Fl(n),It}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hl=new lt(5e3,15e3),jl="__/auth/iframe",$l="emulator/auth/iframe",Vl={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ql=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Xl(n){const e=n.config;_(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?On(e,$l):`https://${n.config.authDomain}/${jl}`,i={apiKey:e.apiKey,appName:n.name,v:ct},r=ql.get(n.config.apiHost);r&&(i.eid=r);const o=n._getFrameworks();return o.length&&(i.fw=o.join(",")),`${t}?${at(i).slice(1)}`}async function Kl(n){const e=await Wl(n),t=oe().gapi;return _(t,n,"internal-error"),e.open({where:document.body,url:Xl(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Vl,dontclear:!0},i=>new Promise(async(r,o)=>{await i.restyle({setHideOnLeave:!1});const s=re(n,"network-request-failed"),c=oe().setTimeout(()=>{o(s)},Hl.get());function d(){oe().clearTimeout(c),r(i)}i.ping(d).then(d,()=>{o(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gl={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Jl=500,Yl=600,Ql="_blank",Zl="http://localhost";class Ri{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function eu(n,e,t,i=Jl,r=Yl){const o=Math.max((window.screen.availHeight-r)/2,0).toString(),s=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const d=Object.assign(Object.assign({},Gl),{width:i.toString(),height:r.toString(),top:o,left:s}),u=X().toLowerCase();t&&(c=Er(u)?Ql:t),_r(u)&&(e=e||Zl,d.scrollbars="yes");const m=Object.entries(d).reduce((S,[v,b])=>`${S}${v}=${b},`,"");if(Sc(u)&&c!=="_self")return tu(e||"",c),new Ri(null);const h=window.open(e||"",c,m);_(h,n,"popup-blocked");try{h.focus()}catch{}return new Ri(h)}function tu(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nu="__/auth/handler",iu="emulator/auth/handler",ru=encodeURIComponent("fac");async function Ai(n,e,t,i,r,o){_(n.config.authDomain,n,"auth-domain-config-required"),_(n.config.apiKey,n,"invalid-api-key");const s={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:ct,eventId:r};if(e instanceof Mr){e.setDefaultLanguage(n.languageCode),s.providerId=e.providerId||"",Qs(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,h]of Object.entries(o||{}))s[m]=h}if(e instanceof dt){const m=e.getScopes().filter(h=>h!=="");m.length>0&&(s.scopes=m.join(","))}n.tenantId&&(s.tid=n.tenantId);const c=s;for(const m of Object.keys(c))c[m]===void 0&&delete c[m];const d=await n._getAppCheckToken(),u=d?`#${ru}=${encodeURIComponent(d)}`:"";return`${ou(n)}?${at(c).slice(1)}${u}`}function ou({config:n}){return n.emulator?On(n,iu):`https://${n.authDomain}/${nu}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an="webStorageSupport";class su{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Hr,this._completeRedirectFn=Rl,this._overrideRedirectResult=Sl}async _openPopup(e,t,i,r){var o;pe((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Ai(e,t,i,xn(),r);return eu(e,s,Bn())}async _openRedirect(e,t,i,r){await this._originValidation(e);const o=await Ai(e,t,i,xn(),r);return ll(o),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:o}=this.eventManagers[t];return r?Promise.resolve(r):(pe(o,"If manager is not set, promise should be"),o)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await Kl(e),i=new Ol(e);return t.register("authEvent",r=>(_(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(an,{type:an},r=>{var o;const s=(o=r==null?void 0:r[0])===null||o===void 0?void 0:o[an];s!==void 0&&t(!!s),ne(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Bl(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Tr()||Pn()||Wt()}}const au=su;var Oi="@firebase/auth",Li="1.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){_(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lu(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function uu(n){et(new Fe("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:s,authDomain:c}=i.options;_(s&&!s.includes(":"),"invalid-api-key",{appName:i.name});const d={apiKey:s,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Rr(n)},u=new Mc(i,r,o,d);return zc(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),et(new Fe("auth-internal",e=>{const t=$e(e.getProvider("auth").getImmediate());return(i=>new cu(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Me(Oi,Li,lu(n)),Me(Oi,Li,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const du=5*60,fu=cr("authIdTokenMaxAge")||du;let Pi=null;const pu=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>fu)return;const r=t==null?void 0:t.token;Pi!==r&&(Pi=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function mu(n=Qa()){const e=fr(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Bc(n,{popupRedirectResolver:au,persistence:[yl,sl,Hr]}),i=cr("authTokenSyncURL");if(i){const o=pu(i);nl(t,o,()=>o(t.currentUser)),tl(t,s=>o(s))}const r=Ws("auth");return r&&Uc(t,`http://${r}`),t}uu("Browser");var hu="firebase",gu="10.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Me(hu,gu,"app");const bu={apiKey:"AIzaSyDT1NerO3LRo9vVz3KFEnYeF74w8CzteoM",authDomain:"books-app-goit.firebaseapp.com",databaseURL:"https://books-app-goit-default-rtdb.firebaseio.com",projectId:"books-app-goit",storageBucket:"books-app-goit.appspot.com",messagingSenderId:"634156543258",appId:"1:634156543258:web:19b86f7e6c8fe5af6450a3"},yu=pr(bu),vn=mu(yu);let _e={name:"",email:"",isSignedIn:!1};async function xu(n,e){await Yc(vn,n,e).then(t=>{const i=t.user;el(vn.currentUser,{displayName:_e.name}),_e.userId=i.uid,_e.isSignedIn=!0}).catch(t=>{alert(t.message)})}async function wu(n,e){await Qc(vn,n,e).then(t=>{const i=t.user;_e.name=i.displayName,_e.userId=i.uid,_e.isSignedIn=!0}).catch(t=>{alert(t.message)})}const vu=document.querySelector(".auth-modal"),Un=document.querySelector("#sign-in"),Fn=document.querySelector("#sign-up"),Gr=document.querySelector("#input-name"),Wn=document.querySelector("#submit-sign");vu.addEventListener("submit",ku);Un.addEventListener("click",_u);Fn.addEventListener("click",Eu);function ku(n){n.preventDefault();const{elements:{name:e,email:t,password:i}}=n.currentTarget;if(_e.name=e.value,_e.email=t.value,!t.value||!i.value)return console.log("Please fill in all the fields!");Wn.textContent==="Sign up"?(localStorage.setItem("USER_NAME",JSON.stringify(e.value)),xu(t.value,i.value,e.value)):wu(t.value,i.value),n.currentTarget.reset()}function _u(){Gr.hidden=!0,Wn.textContent="sign in",Fn.classList.remove("active"),Un.classList.add("active")}function Eu(){Gr.hidden=!1,Wn.textContent="Sign up",Fn.classList.add("active"),Un.classList.remove("active")}const Hn={scrollTop:document.querySelector(".scroll"),openModalBtn:document.querySelector("#js-modal-open"),closeModalBtn:document.querySelector("#js-modal-close"),modal:document.querySelector("#js-modal")},Iu=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:null},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:null},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:null},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:null},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:null},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:null},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:null},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:null},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:null}],Q={listContainer:document.querySelector(".support-ukraine-list-container"),list:document.querySelector(".support-ukraine-list"),btn:document.querySelector(".support-ukraine-btn")};function Nu(){return Iu.map((n,e)=>`<li class="support-ukraine-item item"><a href="${n.url}" target="_blank" rel="noreferrer noopener"><span class="item-order-number">${(e+1).toString().padStart(2,"O")}</span><img class ="company-emblem" src="./img/supportUkraine/supportUkraine-${e+1}.png" alt="${n.title}"></a></li>`).join("")}Q.list.insertAdjacentHTML("beforeend",Nu());Q.btn.addEventListener("click",Cu);const{height:Su}=Q.list.firstElementChild.getBoundingClientRect();function Cu(n){n.currentTarget.firstElementChild.classList.contains("skroll-active")?Q.listContainer.scrollTo({top:0,behavior:"smooth"}):Q.listContainer.scrollBy({top:(Su+20.1)*3,behavior:"smooth"})}Q.listContainer.addEventListener("scroll",Tu);function Tu(){window.innerWidth>=768?Q.list.getBoundingClientRect().top>100?Q.btn.firstElementChild.classList.remove("skroll-active"):Q.btn.firstElementChild.classList.add("skroll-active"):Q.list.getBoundingClientRect().top>0?Q.btn.firstElementChild.classList.remove("skroll-active"):Q.btn.firstElementChild.classList.add("skroll-active")}const kn=document.querySelector(".scroll");kn.addEventListener("click",Jr);window.addEventListener("scroll",Ru);function Ru(){const n=window.scrollY,e=document.documentElement.clientHeight;n>e?kn.classList.add("show"):kn.classList.remove("show")}function Jr(){window.scrollY>0&&(window.scrollBy(0,-30),setTimeout(Jr,0))}Hn.openModalBtn.addEventListener("click",Yr);Hn.closeModalBtn.addEventListener("click",Yr);function Yr(){console.log("click"),Hn.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}function Au(n){let e="";n.map(t=>{const{book_image:i,title:r,description:o,author:s,list_name:c,buy_links:d}=t,u=cn("Amazon",d),m=cn("Apple Books",d),h=cn("Bookshop",d);e+=` <li class="book-card" id="${r}">
      <div class="shopping-image-thumb">
        <img src="${i}" alt="" />
      </div>
      <div class="book-card-info">
      <div class="book">
        <h2 class="book-title">${r}</h2>
        <div class="book-genre">${c}</div>
        <div class="book-description">${o||"We don't have description for this book yet..."}</div>
        
        <button class="book-card-delete">
        <svg class="book-card-icon">
        <use href="../img/sprite.svg#icon-trash"></use>
        </svg>
        </button>
      </div>
      <div class="book-card-refs">
        <div class="book-author">${s}</div>
        <a class="amazon-icon" href="${u}" target="_blank">
        <img src="../img/amazon.svg" alt="" / >
        </a>
        <a class="other-icon" href="${m}" target="_blank"><img src="../img/applebook.svg" alt="" / ></a>
        <a class="other-icon" href="${h}" target="_blank" ><img src="../img/bookshop.svg" alt="" /></a>
      </div>
      </div>
    </li>`}),document.querySelector(".shopping-list").insertAdjacentHTML("beforeend",e),document.querySelector(".shopping-list").addEventListener("click",Ou)}function cn(n,e){return e.filter(i=>{if(i.name===n)return i.url})[0].url}function Ou(n){if(n.target.nodeName!=="BUTTON")return;let e=n.target;for(;e&&!e.hasAttribute("id");)e=e.parentNode;e.remove(),document.querySelector(".shopping-list").children.length<1&&(document.querySelector(".empty-list").style.display="flex"),Lu(e.id,localStorage.getItem("shoppingList"))}function Lu(n,e){const t=JSON.parse(e).filter(i=>{if(i.title!==n)return i});localStorage.setItem("shoppingList",JSON.stringify(t))}let Di=new Array;const Pu=["https://books-backend.p.goit.global/books/643282b1e85766588626a085","https://books-backend.p.goit.global/books/643282b1e85766588626a0b2","https://books-backend.p.goit.global/books/643282b1e85766588626a087","https://books-backend.p.goit.global/books/643282b2e85766588626a15a"];Promise.all(Pu.map(n=>fetch(n).then(e=>e.json()))).then(n=>{Di.push(n)}).then(()=>localStorage.setItem("shoppingList",JSON.stringify(...Di))).finally(n=>{Au(JSON.parse(localStorage.shoppingList))});localStorage.shoppingList.length>0&&(document.querySelector(".empty-list").style.display="none");(()=>{const n={openMenuBtn:document.querySelectorAll("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]")};n.openMenuBtn.forEach(t=>{t.addEventListener("click",e)}),n.closeMenuBtn.addEventListener("click",e);function e(){n.menu.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll"),n.closeMenuBtn.classList.toggle("is-hidden"),n.openMenuBtn.classList.toggle("is-hidden")}})();var ln=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Du(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Qr={exports:{}};(function(n){(function(e,t){n.exports=t(e)})(typeof ln>"u"?typeof window>"u"?ln:window:ln,function(e){if(typeof e>"u"&&typeof e.document>"u")return!1;var t,i,r,o,s,c=`

Visit documentation page to learn more: https://notiflix.github.io/documentation`,d='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',u={Success:"Success",Failure:"Failure",Warning:"Warning",Info:"Info"},m={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},h={Success:"Success",Failure:"Failure",Warning:"Warning",Info:"Info"},S={ID:"NotiflixReportWrap",className:"notiflix-report",width:"320px",backgroundColor:"#f8f8f8",borderRadius:"25px",rtl:!1,zindex:4002,backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",backOverlayClickToClose:!1,fontFamily:"Quicksand",svgSize:"110px",plainText:!0,titleFontSize:"16px",titleMaxLength:34,messageFontSize:"13px",messageMaxLength:400,buttonFontSize:"14px",buttonMaxLength:34,cssAnimation:!0,cssAnimationDuration:360,cssAnimationStyle:"fade",success:{svgColor:"#32c682",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#32c682",buttonColor:"#fff",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{svgColor:"#ff5549",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#ff5549",buttonColor:"#fff",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{svgColor:"#eebf31",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#eebf31",buttonColor:"#fff",backOverlayColor:"rgba(238,191,49,0.2)"},info:{svgColor:"#26c0d3",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#26c0d3",buttonColor:"#fff",backOverlayColor:"rgba(38,192,211,0.2)"}},v={Show:"Show",Ask:"Ask",Prompt:"Prompt"},b={ID:"NotiflixConfirmWrap",className:"notiflix-confirm",width:"300px",zindex:4003,position:"center",distance:"10px",backgroundColor:"#f8f8f8",borderRadius:"25px",backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,cssAnimationStyle:"fade",plainText:!0,titleColor:"#32c682",titleFontSize:"16px",titleMaxLength:34,messageColor:"#1e1e1e",messageFontSize:"14px",messageMaxLength:110,buttonsFontSize:"15px",buttonsMaxLength:34,okButtonColor:"#f8f8f8",okButtonBackground:"#32c682",cancelButtonColor:"#f8f8f8",cancelButtonBackground:"#a9a9a9"},y={Standard:"Standard",Hourglass:"Hourglass",Circle:"Circle",Arrows:"Arrows",Dots:"Dots",Pulse:"Pulse",Custom:"Custom",Notiflix:"Notiflix"},W={ID:"NotiflixLoadingWrap",className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"#32c682",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"},D={Standard:"Standard",Hourglass:"Hourglass",Circle:"Circle",Arrows:"Arrows",Dots:"Dots",Pulse:"Pulse"},$={ID:"NotiflixBlockWrap",querySelectorLimit:200,className:"notiflix-block",position:"absolute",zindex:1e3,backgroundColor:"rgba(255,255,255,0.9)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,svgSize:"45px",svgColor:"#383838",messageFontSize:"14px",messageMaxLength:34,messageColor:"#383838"},z=function(a){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549",`
`+a+c)},Ne=function(a){return console.log("%c Notiflix Info ","padding:2px;border-radius:20px;color:#fff;background:#26c0d3",`
`+a+c)},ae=function(a){return a||(a="head"),e.document[a]!==null||(z(`
Notiflix needs to be appended to the "<`+a+'>" element, but you called it before the "<'+a+'>" element has been created.'),!1)},ce=function(a,l){if(!ae("head"))return!1;if(a()!==null&&!e.document.getElementById(l)){var f=e.document.createElement("style");f.id=l,f.innerHTML=a(),e.document.head.appendChild(f)}},O=function(){var a={},l=!1,f=0;Object.prototype.toString.call(arguments[0])==="[object Boolean]"&&(l=arguments[0],f++);for(var x=function(k){for(var N in k)Object.prototype.hasOwnProperty.call(k,N)&&(a[N]=l&&Object.prototype.toString.call(k[N])==="[object Object]"?O(a[N],k[N]):k[N])};f<arguments.length;f++)x(arguments[f]);return a},V=function(a){var l=e.document.createElement("div");return l.innerHTML=a,l.textContent||l.innerText||""},qe=function(a,l){a||(a="110px"),l||(l="#32c682");var f='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportSuccess" width="'+a+'" height="'+a+'" fill="'+l+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@-webkit-keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportSuccess *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportSuccess2-animation;animation-name:NXReportSuccess2-animation;-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportSuccess3-animation;animation-name:NXReportSuccess3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportSuccess1-animation;animation-name:NXReportSuccess1-animation;-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M88.27 35.39L52.8 75.29 31.43 58.2c-.98-.81-2.44-.63-3.24.36-.79.99-.63 2.44.36 3.24l23.08 18.46c.43.34.93.51 1.44.51.64 0 1.27-.26 1.74-.78l36.91-41.53a2.3 2.3 0 0 0-.19-3.26c-.95-.86-2.41-.77-3.26.19z" style="-webkit-animation-name:NXReportSuccess4-animation;animation-name:NXReportSuccess4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';return f},$t=function(a,l){a||(a="110px"),l||(l="#ff5549");var f='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportFailure" width="'+a+'" height="'+a+'" fill="'+l+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportFailure *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportFailure1-animation;animation-name:NXReportFailure1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M4.35 34.95c0-16.82 13.78-30.6 30.6-30.6h50.1c16.82 0 30.6 13.78 30.6 30.6v50.1c0 16.82-13.78 30.6-30.6 30.6h-50.1c-16.82 0-30.6-13.78-30.6-30.6v-50.1zM34.95 120h50.1c19.22 0 34.95-15.73 34.95-34.95v-50.1C120 15.73 104.27 0 85.05 0h-50.1C15.73 0 0 15.73 0 34.95v50.1C0 104.27 15.73 120 34.95 120z" style="-webkit-animation-name:NXReportFailure2-animation;animation-name:NXReportFailure2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportFailure3-animation;animation-name:NXReportFailure3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M82.4 37.6c-.9-.9-2.37-.9-3.27 0L60 56.73 40.86 37.6a2.306 2.306 0 0 0-3.26 3.26L56.73 60 37.6 79.13c-.9.9-.9 2.37 0 3.27.45.45 1.04.68 1.63.68.59 0 1.18-.23 1.63-.68L60 63.26 79.13 82.4c.45.45 1.05.68 1.64.68.58 0 1.18-.23 1.63-.68.9-.9.9-2.37 0-3.27L63.26 60 82.4 40.86c.9-.91.9-2.36 0-3.26z" style="-webkit-animation-name:NXReportFailure4-animation;animation-name:NXReportFailure4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';return f},Zr=function(a,l){a||(a="110px"),l||(l="#eebf31");var f='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportWarning" width="'+a+'" height="'+a+'" fill="'+l+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@-webkit-keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportWarning *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportWarning1-animation;animation-name:NXReportWarning1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M115.46 106.15l-54.04-93.8c-.61-1.06-2.23-1.06-2.84 0l-54.04 93.8c-.62 1.07.21 2.29 1.42 2.29h108.08c1.21 0 2.04-1.22 1.42-2.29zM65.17 10.2l54.04 93.8c2.28 3.96-.65 8.78-5.17 8.78H5.96c-4.52 0-7.45-4.82-5.17-8.78l54.04-93.8c2.28-3.95 8.03-4 10.34 0z" style="-webkit-animation-name:NXReportWarning2-animation;animation-name:NXReportWarning2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportWarning3-animation;animation-name:NXReportWarning3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)"><path d="M57.83 94.01c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17v-3.2c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v3.2zm0-14.15c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17V39.21c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v40.65z" style="-webkit-animation-name:NXReportWarning4-animation;animation-name:NXReportWarning4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';return f},eo=function(a,l){a||(a="110px"),l||(l="#26c0d3");var f='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportInfo" width="'+a+'" height="'+a+'" fill="'+l+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportInfo *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportInfo1-animation;animation-name:NXReportInfo1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportInfo2-animation;animation-name:NXReportInfo2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportInfo3-animation;animation-name:NXReportInfo3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M57.75 43.85c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v48.18c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25V43.85zm0-15.88c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v3.32c0 1.25-1.01 2.25-2.25 2.25s-2.25-1-2.25-2.25v-3.32z" style="-webkit-animation-name:NXReportInfo4-animation;animation-name:NXReportInfo4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';return f},jn=function(a,l){a||(a="60px"),l||(l="#32c682");var f='<svg xmlns="http://www.w3.org/2000/svg" stroke="'+l+'" width="'+a+'" height="'+a+'" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>';return f},$n=function(a,l){a||(a="60px"),l||(l="#32c682");var f='<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="'+l+'" width="'+a+'" height="'+a+'" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>';return f},Vn=function(a,l){a||(a="60px"),l||(l="#32c682");var f='<svg xmlns="http://www.w3.org/2000/svg" width="'+a+'" height="'+a+'" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:'+a+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+a+';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="'+l+'" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>';return f},qn=function(a,l){a||(a="60px"),l||(l="#32c682");var f='<svg xmlns="http://www.w3.org/2000/svg" fill="'+l+'" width="'+a+'" height="'+a+'" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>';return f},Xn=function(a,l){a||(a="60px"),l||(l="#32c682");var f='<svg xmlns="http://www.w3.org/2000/svg" fill="'+l+'" width="'+a+'" height="'+a+'" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>';return f},Kn=function(a,l){a||(a="60px"),l||(l="#32c682");var f='<svg xmlns="http://www.w3.org/2000/svg" stroke="'+l+'" width="'+a+'" height="'+a+'" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>';return f},to=function(a,l,f){a||(a="60px"),l||(l="#f8f8f8"),f||(f="#32c682");var x='<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="'+a+'" height="'+a+'" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:'+l+';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="'+f+'" stroke="'+f+'" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>';return x},no=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},pt=0,mt=function(a,l,f,x){if(!ae("body"))return!1;t||K.Notify.init({});var k=O(!0,t,{});if(typeof f=="object"&&!Array.isArray(f)||typeof x=="object"&&!Array.isArray(x)){var N={};typeof f=="object"?N=f:typeof x=="object"&&(N=x),t=O(!0,t,N)}var E=t[a.toLocaleLowerCase("en")];pt++,typeof l!="string"&&(l="Notiflix "+a),t.plainText&&(l=V(l)),!t.plainText&&l.length>t.messageMaxLength&&(t=O(!0,t,{closeButton:!0,messageMaxLength:150}),l='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),l.length>t.messageMaxLength&&(l=l.substring(0,t.messageMaxLength)+"..."),t.fontAwesomeIconStyle==="shadow"&&(E.fontAwesomeIconColor=E.background),t.cssAnimation||(t.cssAnimationDuration=0);var g=e.document.getElementById(m.wrapID)||e.document.createElement("div");if(g.id=m.wrapID,g.style.width=t.width,g.style.zIndex=t.zindex,g.style.opacity=t.opacity,t.position==="center-center"?(g.style.left=t.distance,g.style.top=t.distance,g.style.right=t.distance,g.style.bottom=t.distance,g.style.margin="auto",g.classList.add("nx-flex-center-center"),g.style.maxHeight="calc((100vh - "+t.distance+") - "+t.distance+")",g.style.display="flex",g.style.flexWrap="wrap",g.style.flexDirection="column",g.style.justifyContent="center",g.style.alignItems="center",g.style.pointerEvents="none"):t.position==="center-top"?(g.style.left=t.distance,g.style.right=t.distance,g.style.top=t.distance,g.style.bottom="auto",g.style.margin="auto"):t.position==="center-bottom"?(g.style.left=t.distance,g.style.right=t.distance,g.style.bottom=t.distance,g.style.top="auto",g.style.margin="auto"):t.position==="right-bottom"?(g.style.right=t.distance,g.style.bottom=t.distance,g.style.top="auto",g.style.left="auto"):t.position==="left-top"?(g.style.left=t.distance,g.style.top=t.distance,g.style.right="auto",g.style.bottom="auto"):t.position==="left-bottom"?(g.style.left=t.distance,g.style.bottom=t.distance,g.style.top="auto",g.style.right="auto"):(g.style.right=t.distance,g.style.top=t.distance,g.style.left="auto",g.style.bottom="auto"),t.backOverlay){var C=e.document.getElementById(m.overlayID)||e.document.createElement("div");C.id=m.overlayID,C.style.width="100%",C.style.height="100%",C.style.position="fixed",C.style.zIndex=t.zindex-1,C.style.left=0,C.style.top=0,C.style.right=0,C.style.bottom=0,C.style.background=E.backOverlayColor||t.backOverlayColor,C.className=t.cssAnimation?"nx-with-animation":"",C.style.animationDuration=t.cssAnimation?t.cssAnimationDuration+"ms":"",e.document.getElementById(m.overlayID)||e.document.body.appendChild(C)}e.document.getElementById(m.wrapID)||e.document.body.appendChild(g);var w=e.document.createElement("div");w.id=t.ID+"-"+pt,w.className=t.className+" "+E.childClassName+" "+(t.cssAnimation?"nx-with-animation":"")+" "+(t.useIcon?"nx-with-icon":"")+" nx-"+t.cssAnimationStyle+" "+(t.closeButton&&typeof f!="function"?"nx-with-close-button":"")+" "+(typeof f=="function"?"nx-with-callback":"")+" "+(t.clickToClose?"nx-notify-click-to-close":""),w.style.fontSize=t.fontSize,w.style.color=E.textColor,w.style.background=E.background,w.style.borderRadius=t.borderRadius,w.style.pointerEvents="all",t.rtl&&(w.setAttribute("dir","rtl"),w.classList.add("nx-rtl-on")),w.style.fontFamily='"'+t.fontFamily+'", '+d,t.cssAnimation&&(w.style.animationDuration=t.cssAnimationDuration+"ms");var L="";if(t.closeButton&&typeof f!="function"&&(L='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+E.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),!t.useIcon)w.innerHTML='<span class="nx-message">'+l+"</span>"+(t.closeButton?L:"");else if(t.useFontAwesome)w.innerHTML='<i style="color:'+E.fontAwesomeIconColor+"; font-size:"+t.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+E.fontAwesomeClassName+" "+(t.fontAwesomeIconStyle==="shadow"?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+l+"</span>"+(t.closeButton?L:"");else{var U="";a===u.Success?U='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+E.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':a===u.Failure?U='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+E.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':a===u.Warning?U='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+E.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':a===u.Info&&(U='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+E.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),w.innerHTML=U+'<span class="nx-message nx-with-icon">'+l+"</span>"+(t.closeButton?L:"")}if(t.position==="left-bottom"||t.position==="right-bottom"){var H=e.document.getElementById(m.wrapID);H.insertBefore(w,H.firstChild)}else e.document.getElementById(m.wrapID).appendChild(w);var B=e.document.getElementById(w.id);if(B){var T,F,A=function(){B.classList.add("nx-remove");var I=e.document.getElementById(m.overlayID);I&&0>=g.childElementCount&&I.classList.add("nx-remove"),clearTimeout(T)},ee=function(){if(B&&B.parentNode!==null&&B.parentNode.removeChild(B),0>=g.childElementCount&&g.parentNode!==null){g.parentNode.removeChild(g);var I=e.document.getElementById(m.overlayID);I&&I.parentNode!==null&&I.parentNode.removeChild(I)}clearTimeout(F)};if(t.closeButton&&typeof f!="function"){var te=e.document.getElementById(w.id).querySelector("span.nx-close-button");te.addEventListener("click",function(){A();var I=setTimeout(function(){ee(),clearTimeout(I)},t.cssAnimationDuration)})}if((typeof f=="function"||t.clickToClose)&&B.addEventListener("click",function(){typeof f=="function"&&f(),A();var I=setTimeout(function(){ee(),clearTimeout(I)},t.cssAnimationDuration)}),!t.closeButton&&typeof f!="function"){var G=function(){T=setTimeout(function(){A()},t.timeout),F=setTimeout(function(){ee()},t.timeout+t.cssAnimationDuration)};G(),t.pauseOnHover&&(B.addEventListener("mouseenter",function(){B.classList.add("nx-paused"),clearTimeout(T),clearTimeout(F)}),B.addEventListener("mouseleave",function(){B.classList.remove("nx-paused"),G()}))}}if(t.showOnlyTheLastOne&&0<pt)for(var J,M=e.document.querySelectorAll("[id^="+t.ID+"-]:not([id="+t.ID+"-"+pt+"])"),me=0;me<M.length;me++)J=M[me],J.parentNode!==null&&J.parentNode.removeChild(J);t=O(!0,t,k)},io=function(){return'[id^=NotiflixReportWrap]{position:fixed;z-index:4002;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;left:0;top:0;padding:10px;color:#1e1e1e;border-radius:25px;background:transparent;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixReportWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixReportWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixReportWrap]>div.nx-report-click-to-close{cursor:pointer}[id^=NotiflixReportWrap]>div[class*="-content"]{width:320px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:inherit;padding:10px;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));border:1px solid rgba(0,0,0,.03);background:#f8f8f8;position:relative;z-index:1}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:110px;height:110px;display:block;margin:6px auto 12px}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"] svg{min-width:100%;max-width:100%;height:auto}[id^=NotiflixReportWrap]>*>h5{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:16px;font-weight:500;line-height:1.4;margin:0 0 10px;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);float:left;width:100%;text-align:center}[id^=NotiflixReportWrap]>*>p{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:13px;line-height:1.4;font-weight:normal;float:left;width:100%;padding:0 10px;margin:0 0 10px}[id^=NotiflixReportWrap] a#NXReportButton{word-break:break-all;word-break:break-word;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;cursor:pointer;float:right;padding:7px 17px;background:#32c682;font-size:14px;line-height:1.4;font-weight:500;border-radius:inherit!important;color:#fff}[id^=NotiflixReportWrap] a#NXReportButton:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixReportWrap].nx-rtl-on a#NXReportButton{float:left}[id^=NotiflixReportWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:report-overlay-animation .3s ease-in-out 0s normal;animation:report-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-fade{-webkit-animation:report-animation-fade .3s ease-in-out 0s normal;animation:report-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-zoom{-webkit-animation:report-animation-zoom .3s ease-in-out 0s normal;animation:report-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixReportWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:report-overlay-animation-remove .3s ease-in-out 0s normal;animation:report-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-fade{opacity:0;-webkit-animation:report-animation-fade-remove .3s ease-in-out 0s normal;animation:report-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-zoom{opacity:0;-webkit-animation:report-animation-zoom-remove .3s ease-in-out 0s normal;animation:report-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},ht=function(a,l,f,x,k,N){if(!ae("body"))return!1;i||K.Report.init({});var E={};if(typeof k=="object"&&!Array.isArray(k)||typeof N=="object"&&!Array.isArray(N)){var g={};typeof k=="object"?g=k:typeof N=="object"&&(g=N),E=O(!0,i,{}),i=O(!0,i,g)}var C=i[a.toLocaleLowerCase("en")];typeof l!="string"&&(l="Notiflix "+a),typeof f!="string"&&(a===h.Success?f='"Do not try to become a person of success but try to become a person of value." <br><br>- Albert Einstein':a===h.Failure?f='"Failure is simply the opportunity to begin again, this time more intelligently." <br><br>- Henry Ford':a===h.Warning?f='"The peoples who want to live comfortably without producing and fatigue; they are doomed to lose their dignity, then liberty, and then independence and destiny." <br><br>- Mustafa Kemal Ataturk':a===h.Info&&(f='"Knowledge rests not upon truth alone, but upon error also." <br><br>- Carl Gustav Jung')),typeof x!="string"&&(x="Okay"),i.plainText&&(l=V(l),f=V(f),x=V(x)),i.plainText||(l.length>i.titleMaxLength&&(l="Possible HTML Tags Error",f='The "plainText" option is "false" and the title content length is more than the "titleMaxLength" option.',x="Okay"),f.length>i.messageMaxLength&&(l="Possible HTML Tags Error",f='The "plainText" option is "false" and the message content length is more than the "messageMaxLength" option.',x="Okay"),x.length>i.buttonMaxLength&&(l="Possible HTML Tags Error",f='The "plainText" option is "false" and the button content length is more than the "buttonMaxLength" option.',x="Okay")),l.length>i.titleMaxLength&&(l=l.substring(0,i.titleMaxLength)+"..."),f.length>i.messageMaxLength&&(f=f.substring(0,i.messageMaxLength)+"..."),x.length>i.buttonMaxLength&&(x=x.substring(0,i.buttonMaxLength)+"..."),i.cssAnimation||(i.cssAnimationDuration=0);var w=e.document.createElement("div");w.id=S.ID,w.className=i.className,w.style.zIndex=i.zindex,w.style.borderRadius=i.borderRadius,w.style.fontFamily='"'+i.fontFamily+'", '+d,i.rtl&&(w.setAttribute("dir","rtl"),w.classList.add("nx-rtl-on")),w.style.display="flex",w.style.flexWrap="wrap",w.style.flexDirection="column",w.style.alignItems="center",w.style.justifyContent="center";var L="",U=i.backOverlayClickToClose===!0;i.backOverlay&&(L='<div class="'+i.className+"-overlay"+(i.cssAnimation?" nx-with-animation":"")+(U?" nx-report-click-to-close":"")+'" style="background:'+(C.backOverlayColor||i.backOverlayColor)+";animation-duration:"+i.cssAnimationDuration+'ms;"></div>');var H="";if(a===h.Success?H=qe(i.svgSize,C.svgColor):a===h.Failure?H=$t(i.svgSize,C.svgColor):a===h.Warning?H=Zr(i.svgSize,C.svgColor):a===h.Info&&(H=eo(i.svgSize,C.svgColor)),w.innerHTML=L+'<div class="'+i.className+"-content"+(i.cssAnimation?" nx-with-animation ":"")+" nx-"+i.cssAnimationStyle+'" style="width:'+i.width+"; background:"+i.backgroundColor+"; animation-duration:"+i.cssAnimationDuration+'ms;"><div style="width:'+i.svgSize+"; height:"+i.svgSize+';" class="'+i.className+'-icon">'+H+'</div><h5 class="'+i.className+'-title" style="font-weight:500; font-size:'+i.titleFontSize+"; color:"+C.titleColor+';">'+l+'</h5><p class="'+i.className+'-message" style="font-size:'+i.messageFontSize+"; color:"+C.messageColor+';">'+f+'</p><a id="NXReportButton" class="'+i.className+'-button" style="font-weight:500; font-size:'+i.buttonFontSize+"; background:"+C.buttonBackground+"; color:"+C.buttonColor+';">'+x+"</a></div>",!e.document.getElementById(w.id)){e.document.body.appendChild(w);var B=function(){var A=e.document.getElementById(w.id);A.classList.add("nx-remove");var ee=setTimeout(function(){A.parentNode!==null&&A.parentNode.removeChild(A),clearTimeout(ee)},i.cssAnimationDuration)},T=e.document.getElementById("NXReportButton");if(T.addEventListener("click",function(){typeof k=="function"&&k(),B()}),L&&U){var F=e.document.querySelector(".nx-report-click-to-close");F.addEventListener("click",function(){B()})}}i=O(!0,i,E)},ro=function(){return'[id^=NotiflixConfirmWrap]{position:fixed;z-index:4003;width:100%;height:100%;left:0;top:0;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixConfirmWrap].nx-position-center-top{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-center-bottom{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-left-top{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-center{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-bottom{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-top{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-right-center{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-bottom{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixConfirmWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixConfirmWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:confirm-overlay-animation .3s ease-in-out 0s normal;animation:confirm-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal;animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap]>div[class*="-content"]{width:300px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:25px;padding:10px;margin:0;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));background:#f8f8f8;color:#1e1e1e;position:relative;z-index:1;text-align:center}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]{float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>h5{float:left;width:100%;margin:0;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);color:#32c682;font-family:inherit!important;font-size:16px;line-height:1.4;font-weight:500;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div{font-family:inherit!important;margin:15px 0 20px;padding:0 10px;float:left;width:100%;font-size:14px;line-height:1.4;font-weight:normal;color:inherit;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div{font-family:inherit!important;float:left;width:100%;margin:15px 0 0;padding:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input{font-family:inherit!important;float:left;width:100%;height:40px;margin:0;padding:0 15px;border:1px solid rgba(0,0,0,.1);border-radius:25px;font-size:14px;font-weight:normal;line-height:1;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;text-align:left}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-head"]>div>div>input{text-align:right}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:hover{border-color:rgba(0,0,0,.1)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:focus{border-color:rgba(0,0,0,.3)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-failure{border-color:#ff5549}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-success{border-color:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:inherit;float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a{cursor:pointer;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;float:left;width:48%;padding:9px 5px;border-radius:inherit!important;font-weight:500;font-size:15px;line-height:1.4;color:#f8f8f8;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-ok{margin:0 2% 0 0;background:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-cancel{margin:0 0 0 2%;background:#a9a9a9}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-full{margin:0;width:100%}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"],[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"]>a{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade>div[class*="-content"]{-webkit-animation:confirm-animation-fade .3s ease-in-out 0s normal;animation:confirm-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom>div[class*="-content"]{-webkit-animation:confirm-animation-zoom .3s ease-in-out 0s normal;animation:confirm-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-fade-remove .3s ease-in-out 0s normal;animation:confirm-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal;animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},Vt=function(a,l,f,x,k,N,E,g,C){if(!ae("body"))return!1;r||K.Confirm.init({});var w=O(!0,r,{});typeof C!="object"||Array.isArray(C)||(r=O(!0,r,C)),typeof l!="string"&&(l="Notiflix Confirm"),typeof f!="string"&&(f="Do you agree with me?"),typeof k!="string"&&(k="Yes"),typeof N!="string"&&(N="No"),typeof E!="function"&&(E=void 0),typeof g!="function"&&(g=void 0),r.plainText&&(l=V(l),f=V(f),k=V(k),N=V(N)),r.plainText||(l.length>r.titleMaxLength&&(l="Possible HTML Tags Error",f='The "plainText" option is "false" and the title content length is more than "titleMaxLength" option.',k="Okay",N="..."),f.length>r.messageMaxLength&&(l="Possible HTML Tags Error",f='The "plainText" option is "false" and the message content length is more than "messageMaxLength" option.',k="Okay",N="..."),(k.length||N.length)>r.buttonsMaxLength&&(l="Possible HTML Tags Error",f='The "plainText" option is "false" and the buttons content length is more than "buttonsMaxLength" option.',k="Okay",N="...")),l.length>r.titleMaxLength&&(l=l.substring(0,r.titleMaxLength)+"..."),f.length>r.messageMaxLength&&(f=f.substring(0,r.messageMaxLength)+"..."),k.length>r.buttonsMaxLength&&(k=k.substring(0,r.buttonsMaxLength)+"..."),N.length>r.buttonsMaxLength&&(N=N.substring(0,r.buttonsMaxLength)+"..."),r.cssAnimation||(r.cssAnimationDuration=0);var L=e.document.createElement("div");L.id=b.ID,L.className=r.className+(r.cssAnimation?" nx-with-animation nx-"+r.cssAnimationStyle:""),L.style.zIndex=r.zindex,L.style.padding=r.distance,r.rtl&&(L.setAttribute("dir","rtl"),L.classList.add("nx-rtl-on"));var U=typeof r.position=="string"?r.position.trim():"center";L.classList.add("nx-position-"+U),L.style.fontFamily='"'+r.fontFamily+'", '+d;var H="";r.backOverlay&&(H='<div class="'+r.className+"-overlay"+(r.cssAnimation?" nx-with-animation":"")+'" style="background:'+r.backOverlayColor+";animation-duration:"+r.cssAnimationDuration+'ms;"></div>');var B="";typeof E=="function"&&(B='<a id="NXConfirmButtonCancel" class="nx-confirm-button-cancel" style="color:'+r.cancelButtonColor+";background:"+r.cancelButtonBackground+";font-size:"+r.buttonsFontSize+';">'+N+"</a>");var T="",F=null,A=void 0;if(a===v.Ask||a===v.Prompt){F=x||"";var ee=a===v.Ask||200<F.length?Math.ceil(1.5*F.length):250,te=a===v.Prompt?'value="'+F+'"':"";T='<div><input id="NXConfirmValidationInput" type="text" '+te+' maxlength="'+ee+'" style="font-size:'+r.messageFontSize+";border-radius: "+r.borderRadius+';" autocomplete="off" spellcheck="false" autocapitalize="none" /></div>'}if(L.innerHTML=H+'<div class="'+r.className+'-content" style="width:'+r.width+"; background:"+r.backgroundColor+"; animation-duration:"+r.cssAnimationDuration+"ms; border-radius: "+r.borderRadius+';"><div class="'+r.className+'-head"><h5 style="color:'+r.titleColor+";font-size:"+r.titleFontSize+';">'+l+'</h5><div style="color:'+r.messageColor+";font-size:"+r.messageFontSize+';">'+f+T+'</div></div><div class="'+r.className+'-buttons"><a id="NXConfirmButtonOk" class="nx-confirm-button-ok'+(typeof E=="function"?"":" nx-full")+'" style="color:'+r.okButtonColor+";background:"+r.okButtonBackground+";font-size:"+r.buttonsFontSize+';">'+k+"</a>"+B+"</div></div>",!e.document.getElementById(L.id)){e.document.body.appendChild(L);var G=e.document.getElementById(L.id),J=e.document.getElementById("NXConfirmButtonOk"),M=e.document.getElementById("NXConfirmValidationInput");if(M&&(M.focus(),M.setSelectionRange(0,(M.value||"").length),M.addEventListener("keyup",function(I){var Pe=I.target.value;if(a===v.Ask&&Pe!==F)I.preventDefault(),M.classList.add("nx-validation-failure"),M.classList.remove("nx-validation-success");else{a===v.Ask&&(M.classList.remove("nx-validation-failure"),M.classList.add("nx-validation-success"));var Xe=(I.key||"").toLocaleLowerCase("en")==="enter"||I.keyCode===13;Xe&&J.dispatchEvent(new Event("click"))}})),J.addEventListener("click",function(I){if(a===v.Ask&&F&&M){var Pe=(M.value||"").toString();if(Pe!==F)return M.focus(),M.classList.add("nx-validation-failure"),I.stopPropagation(),I.preventDefault(),I.returnValue=!1,I.cancelBubble=!0,!1;M.classList.remove("nx-validation-failure")}typeof E=="function"&&(a===v.Prompt&&M&&(A=M.value||""),E(A)),G.classList.add("nx-remove");var Xe=setTimeout(function(){G.parentNode!==null&&(G.parentNode.removeChild(G),clearTimeout(Xe))},r.cssAnimationDuration)}),typeof E=="function"){var me=e.document.getElementById("NXConfirmButtonCancel");me.addEventListener("click",function(){typeof g=="function"&&(a===v.Prompt&&M&&(A=M.value||""),g(A)),G.classList.add("nx-remove");var I=setTimeout(function(){G.parentNode!==null&&(G.parentNode.removeChild(G),clearTimeout(I))},r.cssAnimationDuration)})}}r=O(!0,r,w)},oo=function(){return'[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}'},le=function(a,l,f,x,k){if(!ae("body"))return!1;o||K.Loading.init({});var N=O(!0,o,{});if(typeof l=="object"&&!Array.isArray(l)||typeof f=="object"&&!Array.isArray(f)){var E={};typeof l=="object"?E=l:typeof f=="object"&&(E=f),o=O(!0,o,E)}var g="";if(typeof l=="string"&&0<l.length&&(g=l),x){g=g.length>o.messageMaxLength?V(g).toString().substring(0,o.messageMaxLength)+"...":V(g).toString();var C="";0<g.length&&(C='<p id="'+o.messageID+'" class="nx-loading-message" style="color:'+o.messageColor+";font-size:"+o.messageFontSize+';">'+g+"</p>"),o.cssAnimation||(o.cssAnimationDuration=0);var w="";if(a===y.Standard)w=jn(o.svgSize,o.svgColor);else if(a===y.Hourglass)w=$n(o.svgSize,o.svgColor);else if(a===y.Circle)w=Vn(o.svgSize,o.svgColor);else if(a===y.Arrows)w=qn(o.svgSize,o.svgColor);else if(a===y.Dots)w=Xn(o.svgSize,o.svgColor);else if(a===y.Pulse)w=Kn(o.svgSize,o.svgColor);else if(a===y.Custom&&o.customSvgCode!==null&&o.customSvgUrl===null)w=o.customSvgCode||"";else if(a===y.Custom&&o.customSvgUrl!==null&&o.customSvgCode===null)w='<img class="nx-custom-loading-icon" width="'+o.svgSize+'" height="'+o.svgSize+'" src="'+o.customSvgUrl+'" alt="Notiflix">';else{if(a===y.Custom&&(o.customSvgUrl===null||o.customSvgCode===null))return z('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'),!1;w=to(o.svgSize,"#f8f8f8","#32c682")}var L=parseInt((o.svgSize||"").replace(/[^0-9]/g,"")),U=e.innerWidth,H=L>=U?U-40+"px":L+"px",B='<div style="width:'+H+"; height:"+H+';" class="'+o.className+"-icon"+(0<g.length?" nx-with-message":"")+'">'+w+"</div>",T=e.document.createElement("div");if(T.id=W.ID,T.className=o.className+(o.cssAnimation?" nx-with-animation":"")+(o.clickToClose?" nx-loading-click-to-close":""),T.style.zIndex=o.zindex,T.style.background=o.backgroundColor,T.style.animationDuration=o.cssAnimationDuration+"ms",T.style.fontFamily='"'+o.fontFamily+'", '+d,T.style.display="flex",T.style.flexWrap="wrap",T.style.flexDirection="column",T.style.alignItems="center",T.style.justifyContent="center",o.rtl&&(T.setAttribute("dir","rtl"),T.classList.add("nx-rtl-on")),T.innerHTML=B+C,!e.document.getElementById(T.id)&&(e.document.body.appendChild(T),o.clickToClose)){var F=e.document.getElementById(T.id);F.addEventListener("click",function(){T.classList.add("nx-remove");var te=setTimeout(function(){T.parentNode!==null&&(T.parentNode.removeChild(T),clearTimeout(te))},o.cssAnimationDuration)})}}else if(e.document.getElementById(W.ID))var A=e.document.getElementById(W.ID),ee=setTimeout(function(){A.classList.add("nx-remove");var te=setTimeout(function(){A.parentNode!==null&&(A.parentNode.removeChild(A),clearTimeout(te))},o.cssAnimationDuration);clearTimeout(ee)},k);o=O(!0,o,N)},so=function(a){typeof a!="string"&&(a="");var l=e.document.getElementById(W.ID);if(l)if(0<a.length){a=a.length>o.messageMaxLength?V(a).substring(0,o.messageMaxLength)+"...":V(a);var f=l.getElementsByTagName("p")[0];if(f)f.innerHTML=a;else{var x=e.document.createElement("p");x.id=o.messageID,x.className="nx-loading-message nx-loading-message-new",x.style.color=o.messageColor,x.style.fontSize=o.messageFontSize,x.innerHTML=a,l.appendChild(x)}}else z("Where is the new message?")},ao=function(){return'[id^=NotiflixBlockWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1000;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;background:rgba(255,255,255,.9);text-align:center;animation-duration:.4s;width:100%;height:100%;left:0;top:0;border-radius:inherit;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixBlockWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixBlockWrap]>span[class*="-icon"]{display:block;width:45px;height:45px;position:relative;margin:0 auto}[id^=NotiflixBlockWrap]>span[class*="-icon"] svg{width:inherit;height:inherit}[id^=NotiflixBlockWrap]>span[class*="-message"]{position:relative;display:block;width:100%;margin:10px auto 0;padding:0 10px;font-family:inherit!important;font-weight:normal;font-size:14px;line-height:1.4}[id^=NotiflixBlockWrap].nx-with-animation{-webkit-animation:block-animation-fade .3s ease-in-out 0s normal;animation:block-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixBlockWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:block-animation-fade-remove .3s ease-in-out 0s normal;animation:block-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}'},qt=0,Se=function(a,l,f,x,k,N){var E;if(Array.isArray(f)){if(1>f.length)return z("Array of HTMLElements should contains at least one HTMLElement."),!1;E=f}else if(Object.prototype.isPrototypeOf.call(NodeList.prototype,f)){if(1>f.length)return z("NodeListOf<HTMLElement> should contains at least one HTMLElement."),!1;E=Array.prototype.slice.call(f)}else{var g=typeof f!="string"||1>(f||"").length||(f||"").length===1&&((f||"")[0]==="#"||(f||"")[0]===".");if(g)return z("The selector parameter must be a string and matches a specified CSS selector(s)."),!1;var C=e.document.querySelectorAll(f);if(1>C.length)return z('You called the "Notiflix.Block..." function with "'+f+'" selector, but there is no such element(s) in the document.'),!1;E=C}s||K.Block.init({});var w=O(!0,s,{});if(typeof x=="object"&&!Array.isArray(x)||typeof k=="object"&&!Array.isArray(k)){var L={};typeof x=="object"?L=x:typeof k=="object"&&(L=k),s=O(!0,s,L)}var U="";typeof x=="string"&&0<x.length&&(U=x),s.cssAnimation||(s.cssAnimationDuration=0);var H=$.className;typeof s.className=="string"&&(H=s.className.trim());var B=typeof s.querySelectorLimit=="number"?s.querySelectorLimit:200,T=(E||[]).length>=B?B:E.length,F="nx-block-temporary-position";if(a){for(var A,ee=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr","html","head","title","script","style","iframe"],te=0;te<T;te++)if(A=E[te],A){if(-1<ee.indexOf(A.tagName.toLocaleLowerCase("en")))break;var G=A.querySelectorAll("[id^="+$.ID+"]");if(1>G.length){var J="";l&&(l===D.Hourglass?J=$n(s.svgSize,s.svgColor):l===D.Circle?J=Vn(s.svgSize,s.svgColor):l===D.Arrows?J=qn(s.svgSize,s.svgColor):l===D.Dots?J=Xn(s.svgSize,s.svgColor):l===D.Pulse?J=Kn(s.svgSize,s.svgColor):J=jn(s.svgSize,s.svgColor));var M='<span class="'+H+'-icon" style="width:'+s.svgSize+";height:"+s.svgSize+';">'+J+"</span>",me="";0<U.length&&(U=U.length>s.messageMaxLength?V(U).substring(0,s.messageMaxLength)+"...":V(U),me='<span style="font-size:'+s.messageFontSize+";color:"+s.messageColor+';" class="'+H+'-message">'+U+"</span>"),qt++;var I=e.document.createElement("div");I.id=$.ID+"-"+qt,I.className=H+(s.cssAnimation?" nx-with-animation":""),I.style.position=s.position,I.style.zIndex=s.zindex,I.style.background=s.backgroundColor,I.style.animationDuration=s.cssAnimationDuration+"ms",I.style.fontFamily='"'+s.fontFamily+'", '+d,I.style.display="flex",I.style.flexWrap="wrap",I.style.flexDirection="column",I.style.alignItems="center",I.style.justifyContent="center",s.rtl&&(I.setAttribute("dir","rtl"),I.classList.add("nx-rtl-on")),I.innerHTML=M+me;var Pe=e.getComputedStyle(A).getPropertyValue("position"),Xe=typeof Pe=="string"?Pe.toLocaleLowerCase("en"):"relative",Gn=Math.round(1.25*parseInt(s.svgSize))+40,co=A.offsetHeight||0,Xt="";Gn>co&&(Xt="min-height:"+Gn+"px;");var Jn="";Jn=A.getAttribute("id")?"#"+A.getAttribute("id"):A.classList[0]?"."+A.classList[0]:(A.tagName||"").toLocaleLowerCase("en");var Yn="",Qn=-1>=["absolute","relative","fixed","sticky"].indexOf(Xe);if(Qn||0<Xt.length){if(!ae("head"))return!1;Qn&&(Yn="position:relative!important;");var lo='<style id="Style-'+$.ID+"-"+qt+'">'+Jn+"."+F+"{"+Yn+Xt+"}</style>",Zn=e.document.createRange();Zn.selectNode(e.document.head);var uo=Zn.createContextualFragment(lo);e.document.head.appendChild(uo),A.classList.add(F)}A.appendChild(I)}}}else var fo=function(q){var Y=setTimeout(function(){q.parentNode!==null&&q.parentNode.removeChild(q);var Ke=q.getAttribute("id"),gt=e.document.getElementById("Style-"+Ke);gt&&gt.parentNode!==null&&gt.parentNode.removeChild(gt),clearTimeout(Y)},s.cssAnimationDuration)},po=function(q){if(q&&0<q.length)for(var Y,Ke=0;Ke<q.length;Ke++)Y=q[Ke],Y&&(Y.classList.add("nx-remove"),fo(Y));else Ne(typeof f=="string"?'"Notiflix.Block.remove();" function called with "'+f+'" selector, but this selector does not have a "Block" element to remove.':'"Notiflix.Block.remove();" function called with "'+f+'", but this "Array<HTMLElement>" or "NodeListOf<HTMLElement>" does not have a "Block" element to remove.')},mo=function(q){var Y=setTimeout(function(){q.classList.remove(F),clearTimeout(Y)},s.cssAnimationDuration+300)},ho=setTimeout(function(){for(var q,Y=0;Y<T;Y++)q=E[Y],q&&(mo(q),G=q.querySelectorAll("[id^="+$.ID+"]"),po(G));clearTimeout(ho)},N);s=O(!0,s,w)},K={Notify:{init:function(a){t=O(!0,m,a),ce(no,"NotiflixNotifyInternalCSS")},merge:function(a){return t?void(t=O(!0,t,a)):(z("You have to initialize the Notify module before call Merge function."),!1)},success:function(a,l,f){mt(u.Success,a,l,f)},failure:function(a,l,f){mt(u.Failure,a,l,f)},warning:function(a,l,f){mt(u.Warning,a,l,f)},info:function(a,l,f){mt(u.Info,a,l,f)}},Report:{init:function(a){i=O(!0,S,a),ce(io,"NotiflixReportInternalCSS")},merge:function(a){return i?void(i=O(!0,i,a)):(z("You have to initialize the Report module before call Merge function."),!1)},success:function(a,l,f,x,k){ht(h.Success,a,l,f,x,k)},failure:function(a,l,f,x,k){ht(h.Failure,a,l,f,x,k)},warning:function(a,l,f,x,k){ht(h.Warning,a,l,f,x,k)},info:function(a,l,f,x,k){ht(h.Info,a,l,f,x,k)}},Confirm:{init:function(a){r=O(!0,b,a),ce(ro,"NotiflixConfirmInternalCSS")},merge:function(a){return r?void(r=O(!0,r,a)):(z("You have to initialize the Confirm module before call Merge function."),!1)},show:function(a,l,f,x,k,N,E){Vt(v.Show,a,l,null,f,x,k,N,E)},ask:function(a,l,f,x,k,N,E,g){Vt(v.Ask,a,l,f,x,k,N,E,g)},prompt:function(a,l,f,x,k,N,E,g){Vt(v.Prompt,a,l,f,x,k,N,E,g)}},Loading:{init:function(a){o=O(!0,W,a),ce(oo,"NotiflixLoadingInternalCSS")},merge:function(a){return o?void(o=O(!0,o,a)):(z("You have to initialize the Loading module before call Merge function."),!1)},standard:function(a,l){le(y.Standard,a,l,!0,0)},hourglass:function(a,l){le(y.Hourglass,a,l,!0,0)},circle:function(a,l){le(y.Circle,a,l,!0,0)},arrows:function(a,l){le(y.Arrows,a,l,!0,0)},dots:function(a,l){le(y.Dots,a,l,!0,0)},pulse:function(a,l){le(y.Pulse,a,l,!0,0)},custom:function(a,l){le(y.Custom,a,l,!0,0)},notiflix:function(a,l){le(y.Notiflix,a,l,!0,0)},remove:function(a){typeof a!="number"&&(a=0),le(null,null,null,!1,a)},change:function(a){so(a)}},Block:{init:function(a){s=O(!0,$,a),ce(ao,"NotiflixBlockInternalCSS")},merge:function(a){return s?void(s=O(!0,s,a)):(z('You have to initialize the "Notiflix.Block" module before call Merge function.'),!1)},standard:function(a,l,f){Se(!0,D.Standard,a,l,f)},hourglass:function(a,l,f){Se(!0,D.Hourglass,a,l,f)},circle:function(a,l,f){Se(!0,D.Circle,a,l,f)},arrows:function(a,l,f){Se(!0,D.Arrows,a,l,f)},dots:function(a,l,f){Se(!0,D.Dots,a,l,f)},pulse:function(a,l,f){Se(!0,D.Pulse,a,l,f)},remove:function(a,l){typeof l!="number"&&(l=0),Se(!1,null,a,null,null,l)}}};return typeof e.Notiflix=="object"?O(!0,e.Notiflix,{Notify:K.Notify,Report:K.Report,Confirm:K.Confirm,Loading:K.Loading,Block:K.Block}):{Notify:K.Notify,Report:K.Report,Confirm:K.Confirm,Loading:K.Loading,Block:K.Block}})})(Qr);var Mu=Qr.exports;const Bu=Du(Mu),zu=document.querySelector(".container-bestBooks"),Uu=document.querySelector(".js-container-bestBooks");zu.addEventListener("click",Fu);async function Fu(){try{const{data:n}=await nr("top-books");n===0&&(Bu.Notify.failure("There are no books in this category"),console.log(n)),Hu(n)}catch(n){console.error(n)}}function Wu(n){return n.map(({book_image:e,title:t,author:i,_id:r})=>`<li class="js-list-bestBooks id=${r}">
            <img src="${e}" alt="${t}" loading="lazy" class="img-bestBooks"/>
            <h3 class="js-named-bestBooks">${t}</h3>
            <p class="js-autor-bestBooks">${i}</p>
        </li>`).join("")}function Hu(n){const e=n.map(({list_name:t,books:i})=>`<div class="js-container-homeBooks">
        <h3 class="js-list-name">${t}</h3 >
        <ul class="js-overlow-bestBooks">${Wu(i)}</ul>
        <btn class="js-btn-bestBooks" data-js="${t}">See more</btn>
        </div>`).join("");Uu.insertAdjacentHTML("beforeend",e)}
