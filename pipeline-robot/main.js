import{u as Te,p as Ge,a as Xe,c as b,d as Qe,r as Ye,b as q,w as Ze,o as P,e as k,f as ue,g as U,h as x,v as G,i as le,j as et,F as fe,k as de,t as pe,l as tt,m as nt,n as rt}from"./assets/config-f7419acd.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();(async()=>{const e=await chrome.cookies.getAll({domain:".aliyun.com"}),{config:t,changeCookies:n}=Te(),r={};e.forEach(s=>{const o=s.name;t.cookies.hasOwnProperty(o)&&(r[o]=s.value)}),n(r)})();function xe(e,t){return function(){return e.apply(t,arguments)}}const{toString:st}=Object.prototype,{getPrototypeOf:se}=Object,$=(e=>t=>{const n=st.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),T=e=>(e=e.toLowerCase(),t=>$(t)===e),K=e=>t=>typeof t===e,{isArray:L}=Array,j=K("undefined");function ot(e){return e!==null&&!j(e)&&e.constructor!==null&&!j(e.constructor)&&g(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const _e=T("ArrayBuffer");function it(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&_e(e.buffer),t}const at=K("string"),g=K("function"),Ne=K("number"),oe=e=>e!==null&&typeof e=="object",ct=e=>e===!0||e===!1,v=e=>{if($(e)!=="object")return!1;const t=se(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},ut=T("Date"),lt=T("File"),ft=T("Blob"),dt=T("FileList"),pt=e=>oe(e)&&g(e.pipe),ht=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||g(e.append)&&((t=$(e))==="formdata"||t==="object"&&g(e.toString)&&e.toString()==="[object FormData]"))},mt=T("URLSearchParams"),yt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function I(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),L(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let u;for(r=0;r<i;r++)u=o[r],t.call(null,e[u],u,e)}}function Ce(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const Pe=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),ke=e=>!j(e)&&e!==Pe;function ee(){const{caseless:e}=ke(this)&&this||{},t={},n=(r,s)=>{const o=e&&Ce(t,s)||s;v(t[o])&&v(r)?t[o]=ee(t[o],r):v(r)?t[o]=ee({},r):L(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&I(arguments[r],n);return t}const Et=(e,t,n,{allOwnKeys:r}={})=>(I(t,(s,o)=>{n&&g(s)?e[o]=xe(s,n):e[o]=s},{allOwnKeys:r}),e),wt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),bt=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},St=(e,t,n,r)=>{let s,o,i;const u={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!u[i]&&(t[i]=e[i],u[i]=!0);e=n!==!1&&se(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Ot=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Rt=e=>{if(!e)return null;if(L(e))return e;let t=e.length;if(!Ne(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},At=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&se(Uint8Array)),gt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},Tt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},xt=T("HTMLFormElement"),_t=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),he=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Nt=T("RegExp"),Fe=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};I(n,(s,o)=>{t(s,o,e)!==!1&&(r[o]=s)}),Object.defineProperties(e,r)},Ct=e=>{Fe(e,(t,n)=>{if(g(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(g(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Pt=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return L(e)?r(e):r(String(e).split(t)),n},kt=()=>{},Ft=(e,t)=>(e=+e,Number.isFinite(e)?e:t),X="abcdefghijklmnopqrstuvwxyz",me="0123456789",Le={DIGIT:me,ALPHA:X,ALPHA_DIGIT:X+X.toUpperCase()+me},Lt=(e=16,t=Le.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Bt(e){return!!(e&&g(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Ut=e=>{const t=new Array(10),n=(r,s)=>{if(oe(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=L(r)?[]:{};return I(r,(i,u)=>{const p=n(i,s+1);!j(p)&&(o[u]=p)}),t[s]=void 0,o}}return r};return n(e,0)},a={isArray:L,isArrayBuffer:_e,isBuffer:ot,isFormData:ht,isArrayBufferView:it,isString:at,isNumber:Ne,isBoolean:ct,isObject:oe,isPlainObject:v,isUndefined:j,isDate:ut,isFile:lt,isBlob:ft,isRegExp:Nt,isFunction:g,isStream:pt,isURLSearchParams:mt,isTypedArray:At,isFileList:dt,forEach:I,merge:ee,extend:Et,trim:yt,stripBOM:wt,inherits:bt,toFlatObject:St,kindOf:$,kindOfTest:T,endsWith:Ot,toArray:Rt,forEachEntry:gt,matchAll:Tt,isHTMLForm:xt,hasOwnProperty:he,hasOwnProp:he,reduceDescriptors:Fe,freezeMethods:Ct,toObjectSet:Pt,toCamelCase:_t,noop:kt,toFiniteNumber:Ft,findKey:Ce,global:Pe,isContextDefined:ke,ALPHABET:Le,generateString:Lt,isSpecCompliantForm:Bt,toJSONObject:Ut};function m(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Be=m.prototype,Ue={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Ue[e]={value:e}});Object.defineProperties(m,Ue);Object.defineProperty(Be,"isAxiosError",{value:!0});m.from=(e,t,n,r,s,o)=>{const i=Object.create(Be);return a.toFlatObject(e,i,function(p){return p!==Error.prototype},u=>u!=="isAxiosError"),m.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const De=null;function te(e){return a.isPlainObject(e)||a.isArray(e)}function je(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function ye(e,t,n){return e?e.concat(t).map(function(s,o){return s=je(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function Dt(e){return a.isArray(e)&&!e.some(te)}const jt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function W(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new(De||FormData),n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(h,A){return!a.isUndefined(A[h])});const r=n.metaTokens,s=n.visitor||l,o=n.dots,i=n.indexes,p=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function c(d){if(d===null)return"";if(a.isDate(d))return d.toISOString();if(!p&&a.isBlob(d))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(d)||a.isTypedArray(d)?p&&typeof Blob=="function"?new Blob([d]):Buffer.from(d):d}function l(d,h,A){let O=d;if(d&&!A&&typeof d=="object"){if(a.endsWith(h,"{}"))h=r?h:h.slice(0,-2),d=JSON.stringify(d);else if(a.isArray(d)&&Dt(d)||(a.isFileList(d)||a.endsWith(h,"[]"))&&(O=a.toArray(d)))return h=je(h),O.forEach(function(M,We){!(a.isUndefined(M)||M===null)&&t.append(i===!0?ye([h],We,o):i===null?h:h+"[]",c(M))}),!1}return te(d)?!0:(t.append(ye(A,h,o),c(d)),!1)}const f=[],E=Object.assign(jt,{defaultVisitor:l,convertValue:c,isVisitable:te});function y(d,h){if(!a.isUndefined(d)){if(f.indexOf(d)!==-1)throw Error("Circular reference detected in "+h.join("."));f.push(d),a.forEach(d,function(O,C){(!(a.isUndefined(O)||O===null)&&s.call(t,O,a.isString(C)?C.trim():C,h,E))===!0&&y(O,h?h.concat(C):[C])}),f.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return y(e),t}function Ee(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function ie(e,t){this._pairs=[],e&&W(e,this,t)}const Ie=ie.prototype;Ie.append=function(t,n){this._pairs.push([t,n])};Ie.toString=function(t){const n=t?function(r){return t.call(this,r,Ee)}:Ee;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function It(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function He(e,t,n){if(!t)return e;const r=n&&n.encode||It,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new ie(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class we{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Me={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Ht=typeof URLSearchParams<"u"?URLSearchParams:ie,Mt=typeof FormData<"u"?FormData:null,qt=typeof Blob<"u"?Blob:null,vt=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),Vt=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),R={isBrowser:!0,classes:{URLSearchParams:Ht,FormData:Mt,Blob:qt},isStandardBrowserEnv:vt,isStandardBrowserWebWorkerEnv:Vt,protocols:["http","https","file","blob","url","data"]};function zt(e,t){return W(e,new R.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return R.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function Jt(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function $t(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function qe(e){function t(n,r,s,o){let i=n[o++];const u=Number.isFinite(+i),p=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,p?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!u):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=$t(s[i])),!u)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(Jt(r),s,n,0)}),n}return null}const Kt={"Content-Type":void 0};function Wt(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const B={transitional:Me,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s&&s?JSON.stringify(qe(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let u;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return zt(t,this.formSerializer).toString();if((u=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const p=this.env&&this.env.FormData;return W(u?{"files[]":t}:t,p&&new p,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),Wt(t)):t}],transformResponse:[function(t){const n=this.transitional||B.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(u){if(i)throw u.name==="SyntaxError"?m.from(u,m.ERR_BAD_RESPONSE,this,null,this.response):u}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:R.classes.FormData,Blob:R.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};a.forEach(["delete","get","head"],function(t){B.headers[t]={}});a.forEach(["post","put","patch"],function(t){B.headers[t]=a.merge(Kt)});const Gt=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Xt=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&Gt[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},be=Symbol("internals");function D(e){return e&&String(e).trim().toLowerCase()}function V(e){return e===!1||e==null?e:a.isArray(e)?e.map(V):String(e)}function Qt(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Yt=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Q(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function Zt(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function en(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}let S=class{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(u,p,c){const l=D(p);if(!l)throw new Error("header name must be a non-empty string");const f=a.findKey(s,l);(!f||s[f]===void 0||c===!0||c===void 0&&s[f]!==!1)&&(s[f||p]=V(u))}const i=(u,p)=>a.forEach(u,(c,l)=>o(c,l,p));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!Yt(t)?i(Xt(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=D(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return Qt(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=D(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Q(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=D(i),i){const u=a.findKey(r,i);u&&(!n||Q(r,r[u],u,n))&&(delete r[u],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||Q(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=V(s),delete n[o];return}const u=t?Zt(o):String(o).trim();u!==o&&delete n[o],n[u]=V(s),r[u]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[be]=this[be]={accessors:{}}).accessors,s=this.prototype;function o(i){const u=D(i);r[u]||(en(s,i),r[u]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}};S.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.freezeMethods(S.prototype);a.freezeMethods(S);function Y(e,t){const n=this||B,r=t||n,s=S.from(r.headers);let o=r.data;return a.forEach(e,function(u){o=u.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function ve(e){return!!(e&&e.__CANCEL__)}function H(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(H,m,{__CANCEL__:!0});function tn(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const nn=R.isStandardBrowserEnv?function(){return{write:function(n,r,s,o,i,u){const p=[];p.push(n+"="+encodeURIComponent(r)),a.isNumber(s)&&p.push("expires="+new Date(s).toGMTString()),a.isString(o)&&p.push("path="+o),a.isString(i)&&p.push("domain="+i),u===!0&&p.push("secure"),document.cookie=p.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function rn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function sn(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Ve(e,t){return e&&!rn(t)?sn(e,t):t}const on=R.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const u=a.isString(i)?s(i):i;return u.protocol===r.protocol&&u.host===r.host}}():function(){return function(){return!0}}();function an(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function cn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(p){const c=Date.now(),l=r[o];i||(i=c),n[s]=p,r[s]=c;let f=o,E=0;for(;f!==s;)E+=n[f++],f=f%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),c-i<t)return;const y=l&&c-l;return y?Math.round(E*1e3/y):void 0}}function Se(e,t){let n=0;const r=cn(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,u=o-n,p=r(u),c=o<=i;n=o;const l={loaded:o,total:i,progress:i?o/i:void 0,bytes:u,rate:p||void 0,estimated:p&&i&&c?(i-o)/p:void 0,event:s};l[t?"download":"upload"]=!0,e(l)}}const un=typeof XMLHttpRequest<"u",ln=un&&function(e){return new Promise(function(n,r){let s=e.data;const o=S.from(e.headers).normalize(),i=e.responseType;let u;function p(){e.cancelToken&&e.cancelToken.unsubscribe(u),e.signal&&e.signal.removeEventListener("abort",u)}a.isFormData(s)&&(R.isStandardBrowserEnv||R.isStandardBrowserWebWorkerEnv)&&o.setContentType(!1);let c=new XMLHttpRequest;if(e.auth){const y=e.auth.username||"",d=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(y+":"+d))}const l=Ve(e.baseURL,e.url);c.open(e.method.toUpperCase(),He(l,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function f(){if(!c)return;const y=S.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),h={data:!i||i==="text"||i==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:y,config:e,request:c};tn(function(O){n(O),p()},function(O){r(O),p()},h),c=null}if("onloadend"in c?c.onloadend=f:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(f)},c.onabort=function(){c&&(r(new m("Request aborted",m.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let d=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const h=e.transitional||Me;e.timeoutErrorMessage&&(d=e.timeoutErrorMessage),r(new m(d,h.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,c)),c=null},R.isStandardBrowserEnv){const y=(e.withCredentials||on(l))&&e.xsrfCookieName&&nn.read(e.xsrfCookieName);y&&o.set(e.xsrfHeaderName,y)}s===void 0&&o.setContentType(null),"setRequestHeader"in c&&a.forEach(o.toJSON(),function(d,h){c.setRequestHeader(h,d)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&i!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",Se(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",Se(e.onUploadProgress)),(e.cancelToken||e.signal)&&(u=y=>{c&&(r(!y||y.type?new H(null,e,c):y),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(u),e.signal&&(e.signal.aborted?u():e.signal.addEventListener("abort",u)));const E=an(l);if(E&&R.protocols.indexOf(E)===-1){r(new m("Unsupported protocol "+E+":",m.ERR_BAD_REQUEST,e));return}c.send(s||null)})},z={http:De,xhr:ln};a.forEach(z,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const fn={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let s=0;s<t&&(n=e[s],!(r=a.isString(n)?z[n.toLowerCase()]:n));s++);if(!r)throw r===!1?new m(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(a.hasOwnProp(z,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!a.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:z};function Z(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new H(null,e)}function Oe(e){return Z(e),e.headers=S.from(e.headers),e.data=Y.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),fn.getAdapter(e.adapter||B.adapter)(e).then(function(r){return Z(e),r.data=Y.call(e,e.transformResponse,r),r.headers=S.from(r.headers),r},function(r){return ve(r)||(Z(e),r&&r.response&&(r.response.data=Y.call(e,e.transformResponse,r.response),r.response.headers=S.from(r.response.headers))),Promise.reject(r)})}const Re=e=>e instanceof S?e.toJSON():e;function F(e,t){t=t||{};const n={};function r(c,l,f){return a.isPlainObject(c)&&a.isPlainObject(l)?a.merge.call({caseless:f},c,l):a.isPlainObject(l)?a.merge({},l):a.isArray(l)?l.slice():l}function s(c,l,f){if(a.isUndefined(l)){if(!a.isUndefined(c))return r(void 0,c,f)}else return r(c,l,f)}function o(c,l){if(!a.isUndefined(l))return r(void 0,l)}function i(c,l){if(a.isUndefined(l)){if(!a.isUndefined(c))return r(void 0,c)}else return r(void 0,l)}function u(c,l,f){if(f in t)return r(c,l);if(f in e)return r(void 0,c)}const p={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:u,headers:(c,l)=>s(Re(c),Re(l),!0)};return a.forEach(Object.keys(e).concat(Object.keys(t)),function(l){const f=p[l]||s,E=f(e[l],t[l],l);a.isUndefined(E)&&f!==u||(n[l]=E)}),n}const ze="1.3.6",ae={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ae[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Ae={};ae.transitional=function(t,n,r){function s(o,i){return"[Axios v"+ze+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,u)=>{if(t===!1)throw new m(s(i," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!Ae[i]&&(Ae[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,u):!0}};function dn(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const u=e[o],p=u===void 0||i(u,o,e);if(p!==!0)throw new m("option "+o+" must be "+p,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+o,m.ERR_BAD_OPTION)}}const ne={assertOptions:dn,validators:ae},_=ne.validators;let N=class{constructor(t){this.defaults=t,this.interceptors={request:new we,response:new we}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=F(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&ne.assertOptions(r,{silentJSONParsing:_.transitional(_.boolean),forcedJSONParsing:_.transitional(_.boolean),clarifyTimeoutError:_.transitional(_.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:ne.assertOptions(s,{encode:_.function,serialize:_.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i;i=o&&a.merge(o.common,o[n.method]),i&&a.forEach(["delete","get","head","post","put","patch","common"],d=>{delete o[d]}),n.headers=S.concat(i,o);const u=[];let p=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(n)===!1||(p=p&&h.synchronous,u.unshift(h.fulfilled,h.rejected))});const c=[];this.interceptors.response.forEach(function(h){c.push(h.fulfilled,h.rejected)});let l,f=0,E;if(!p){const d=[Oe.bind(this),void 0];for(d.unshift.apply(d,u),d.push.apply(d,c),E=d.length,l=Promise.resolve(n);f<E;)l=l.then(d[f++],d[f++]);return l}E=u.length;let y=n;for(f=0;f<E;){const d=u[f++],h=u[f++];try{y=d(y)}catch(A){h.call(this,A);break}}try{l=Oe.call(this,y)}catch(d){return Promise.reject(d)}for(f=0,E=c.length;f<E;)l=l.then(c[f++],c[f++]);return l}getUri(t){t=F(this.defaults,t);const n=Ve(t.baseURL,t.url);return He(n,t.params,t.paramsSerializer)}};a.forEach(["delete","get","head","options"],function(t){N.prototype[t]=function(n,r){return this.request(F(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,u){return this.request(F(u||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}N.prototype[t]=n(),N.prototype[t+"Form"]=n(!0)});let pn=class Je{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(u=>{r.subscribe(u),o=u}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,u){r.reason||(r.reason=new H(o,i,u),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new Je(function(s){t=s}),cancel:t}}};function hn(e){return function(n){return e.apply(null,n)}}function mn(e){return a.isObject(e)&&e.isAxiosError===!0}const re={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(re).forEach(([e,t])=>{re[t]=e});function $e(e){const t=new N(e),n=xe(N.prototype.request,t);return a.extend(n,N.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return $e(F(e,s))},n}const w=$e(B);w.Axios=N;w.CanceledError=H;w.CancelToken=pn;w.isCancel=ve;w.VERSION=ze;w.toFormData=W;w.AxiosError=m;w.Cancel=w.CanceledError;w.all=function(t){return Promise.all(t)};w.spread=hn;w.isAxiosError=mn;w.mergeConfig=F;w.AxiosHeaders=S;w.formToJSON=e=>qe(a.isHTMLForm(e)?new FormData(e):e);w.HttpStatusCode=re;w.default=w;const{Axios:vn,AxiosError:Vn,CanceledError:zn,isCancel:Jn,CancelToken:$n,VERSION:Kn,all:Wn,Cancel:Gn,isAxiosError:Xn,spread:Qn,toFormData:Yn,AxiosHeaders:Zn,HttpStatusCode:er,formToJSON:tr,mergeConfig:nr}=w;w.defaults.withCredentials=!0;w.defaults.headers.post["Content-Type"]="application/json";let J=w.create({withCredentials:!0,baseURL:"http://192.168.1.63:9923/v1"});const ge=e=>{let t="";return Object.keys(e).forEach(n=>{t+=n+"="+e[n]+";"}),t},yn={install(){const{config:e}=Te();J.interceptors.request.use(function(t){return t.method==="get"?t.params={...t.params,cookie:ge(e.cookies),"x-xsrf-token":e.cookies["XSRF-TOKEN"]}:t.data={...t.data,cookie:ge(e.cookies),"x-xsrf-token":e.cookies["XSRF-TOKEN"]},t}),J.interceptors.response.use(t=>{if(t.data.status===200)return t.data})}},En=async(e={})=>J.get("/list",{params:e}),wn=async e=>(console.log(e),J.post("/running",e)),Ke=e=>(Ge("data-v-02ca5f45"),e=e(),Xe(),e),bn={class:"popup-view"},Sn={class:"sticky-box"},On=Ke(()=>b("h3",null,"流水线信息",-1)),Rn={class:"form"},An={class:"form-item"},gn={class:"form-item"},Tn={class:"handle-btn"},xn=Ke(()=>b("h3",null,"搜索框：",-1)),_n={class:"search-box"},Nn={key:0,class:"search-list pipeline-list"},Cn=["for"],Pn=["name","id","onUpdate:modelValue"],kn={class:"pipeline-name"},Fn={class:"pipeline-list"},Ln=["for"],Bn=["name","id","onUpdate:modelValue"],Un={class:"pipeline-name"},Dn=Qe({__name:"App",setup(e){let t=Ye({runLastedBranch:!0,keywords:""}),n=q([]);const r=async()=>{const c=await En(t);n.value=c.list.map(l=>({...l,checked:!1}))};let s=q([]);const o=(c,l)=>{s.value.push(c)};let i=q(""),u=q([]);Ze(i,(c,l,f)=>{if(!c.trim())return u.value=[];u.value=n.value.filter(E=>E.name.includes(c))});const p=async c=>{const l={env:c,list:n.value.filter(E=>E.checked),...t};i.value="",n.value.forEach(E=>E.checked=!1);const f=await wn(l)};return(c,l)=>(P(),k("div",bn,[b("div",Sn,[On,b("div",Rn,[b("p",An,[ue(" 运行最新提交的分支（不勾选采取默认项）："),U(b("input",{type:"checkbox","onUpdate:modelValue":l[0]||(l[0]=f=>x(t).runLastedBranch=f)},null,512),[[G,x(t).runLastedBranch]])]),b("p",gn,[ue(" 流水线："),U(b("input",{class:"search-input",type:"text","onUpdate:modelValue":l[1]||(l[1]=f=>x(t).keywords=f),placeholder:"请输入要查询的流水线"},null,512),[[le,x(t).keywords]])])]),b("div",Tn,[b("button",{onClick:r},"获取流水线列表"),b("button",{onClick:l[2]||(l[2]=f=>p("dev"))},"运行测试流水线"),b("button",{onClick:l[3]||(l[3]=f=>p("pro"))},"运行生产流水线")]),xn,b("div",_n,[U(b("input",{class:"search-input",type:"text","onUpdate:modelValue":l[4]||(l[4]=f=>et(i)?i.value=f:i=f),placeholder:"请输入流水线名称"},null,512),[[le,x(i)]]),x(u).length?(P(),k("div",Nn,[(P(!0),k(fe,null,de(x(u),(f,E)=>(P(),k("label",{class:"pipeline-item",key:E,for:f.pipelineId},[U(b("input",{type:"checkbox",name:f.pipelineId,id:f.pipelineId,"onUpdate:modelValue":y=>f.checked=y},null,8,Pn),[[G,f.checked]]),b("span",kn,pe(f.name),1)],8,Cn))),128))])):tt("",!0)])]),b("div",Fn,[(P(!0),k(fe,null,de(x(n),(f,E)=>(P(),k("label",{class:"pipeline-item",key:E,for:f.pipelineId,ref_for:!0,ref:y=>o(y,f)},[U(b("input",{type:"checkbox",name:f.pipelineId,id:f.pipelineId,"onUpdate:modelValue":y=>f.checked=y},null,8,Bn),[[G,f.checked]]),b("span",Un,pe(f.name),1)],8,Ln))),128))])]))}});const jn=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},In=jn(Dn,[["__scopeId","data-v-02ca5f45"]]),ce=nt(In);ce.use(rt());ce.use(yn);ce.mount("#app");
