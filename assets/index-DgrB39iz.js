(function(){const f=document.createElement("link").relList;if(f&&f.supports&&f.supports("modulepreload"))return;for(const S of document.querySelectorAll('link[rel="modulepreload"]'))o(S);new MutationObserver(S=>{for(const x of S)if(x.type==="childList")for(const L of x.addedNodes)L.tagName==="LINK"&&L.rel==="modulepreload"&&o(L)}).observe(document,{childList:!0,subtree:!0});function g(S){const x={};return S.integrity&&(x.integrity=S.integrity),S.referrerPolicy&&(x.referrerPolicy=S.referrerPolicy),S.crossOrigin==="use-credentials"?x.credentials="include":S.crossOrigin==="anonymous"?x.credentials="omit":x.credentials="same-origin",x}function o(S){if(S.ep)return;S.ep=!0;const x=g(S);fetch(S.href,x)}})();function th(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Tr={exports:{}},La={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bd;function Hm(){if(Bd)return La;Bd=1;var r=Symbol.for("react.transitional.element"),f=Symbol.for("react.fragment");function g(o,S,x){var L=null;if(x!==void 0&&(L=""+x),S.key!==void 0&&(L=""+S.key),"key"in S){x={};for(var V in S)V!=="key"&&(x[V]=S[V])}else x=S;return S=x.ref,{$$typeof:r,type:o,key:L,ref:S!==void 0?S:null,props:x}}return La.Fragment=f,La.jsx=g,La.jsxs=g,La}var _d;function Rm(){return _d||(_d=1,Tr.exports=Hm()),Tr.exports}var Ie=Rm(),zr={exports:{}},$={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nd;function Bm(){if(Nd)return $;Nd=1;var r=Symbol.for("react.transitional.element"),f=Symbol.for("react.portal"),g=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),x=Symbol.for("react.consumer"),L=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),z=Symbol.for("react.memo"),N=Symbol.for("react.lazy"),Q=Symbol.iterator;function F(d){return d===null||typeof d!="object"?null:(d=Q&&d[Q]||d["@@iterator"],typeof d=="function"?d:null)}var Se={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Me=Object.assign,Te={};function Ee(d,A,H){this.props=d,this.context=A,this.refs=Te,this.updater=H||Se}Ee.prototype.isReactComponent={},Ee.prototype.setState=function(d,A){if(typeof d!="object"&&typeof d!="function"&&d!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,d,A,"setState")},Ee.prototype.forceUpdate=function(d){this.updater.enqueueForceUpdate(this,d,"forceUpdate")};function Ke(){}Ke.prototype=Ee.prototype;function ee(d,A,H){this.props=d,this.context=A,this.refs=Te,this.updater=H||Se}var ue=ee.prototype=new Ke;ue.constructor=ee,Me(ue,Ee.prototype),ue.isPureReactComponent=!0;var Oe=Array.isArray,G={H:null,A:null,T:null,S:null,V:null},se=Object.prototype.hasOwnProperty;function le(d,A,H,R,q,ce){return H=ce.ref,{$$typeof:r,type:d,key:A,ref:H!==void 0?H:null,props:ce}}function Ae(d,A){return le(d.type,A,void 0,void 0,void 0,d.props)}function he(d){return typeof d=="object"&&d!==null&&d.$$typeof===r}function ie(d){var A={"=":"=0",":":"=2"};return"$"+d.replace(/[=:]/g,function(H){return A[H]})}var je=/\/+/g;function Ue(d,A){return typeof d=="object"&&d!==null&&d.key!=null?ie(""+d.key):A.toString(36)}function Ge(){}function nt(d){switch(d.status){case"fulfilled":return d.value;case"rejected":throw d.reason;default:switch(typeof d.status=="string"?d.then(Ge,Ge):(d.status="pending",d.then(function(A){d.status==="pending"&&(d.status="fulfilled",d.value=A)},function(A){d.status==="pending"&&(d.status="rejected",d.reason=A)})),d.status){case"fulfilled":return d.value;case"rejected":throw d.reason}}throw d}function W(d,A,H,R,q){var ce=typeof d;(ce==="undefined"||ce==="boolean")&&(d=null);var J=!1;if(d===null)J=!0;else switch(ce){case"bigint":case"string":case"number":J=!0;break;case"object":switch(d.$$typeof){case r:case f:J=!0;break;case N:return J=d._init,W(J(d._payload),A,H,R,q)}}if(J)return q=q(d),J=R===""?"."+Ue(d,0):R,Oe(q)?(H="",J!=null&&(H=J.replace(je,"$&/")+"/"),W(q,A,H,"",function(D){return D})):q!=null&&(he(q)&&(q=Ae(q,H+(q.key==null||d&&d.key===q.key?"":(""+q.key).replace(je,"$&/")+"/")+J)),A.push(q)),1;J=0;var at=R===""?".":R+":";if(Oe(d))for(var U=0;U<d.length;U++)R=d[U],ce=at+Ue(R,U),J+=W(R,A,H,ce,q);else if(U=F(d),typeof U=="function")for(d=U.call(d),U=0;!(R=d.next()).done;)R=R.value,ce=at+Ue(R,U++),J+=W(R,A,H,ce,q);else if(ce==="object"){if(typeof d.then=="function")return W(nt(d),A,H,R,q);throw A=String(d),Error("Objects are not valid as a React child (found: "+(A==="[object Object]"?"object with keys {"+Object.keys(d).join(", ")+"}":A)+"). If you meant to render a collection of children, use an array instead.")}return J}function T(d,A,H){if(d==null)return d;var R=[],q=0;return W(d,R,"","",function(ce){return A.call(H,ce,q++)}),R}function B(d){if(d._status===-1){var A=d._result;A=A(),A.then(function(H){(d._status===0||d._status===-1)&&(d._status=1,d._result=H)},function(H){(d._status===0||d._status===-1)&&(d._status=2,d._result=H)}),d._status===-1&&(d._status=0,d._result=A)}if(d._status===1)return d._result.default;throw d._result}var k=typeof reportError=="function"?reportError:function(d){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var A=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof d=="object"&&d!==null&&typeof d.message=="string"?String(d.message):String(d),error:d});if(!window.dispatchEvent(A))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",d);return}console.error(d)};function oe(){}return $.Children={map:T,forEach:function(d,A,H){T(d,function(){A.apply(this,arguments)},H)},count:function(d){var A=0;return T(d,function(){A++}),A},toArray:function(d){return T(d,function(A){return A})||[]},only:function(d){if(!he(d))throw Error("React.Children.only expected to receive a single React element child.");return d}},$.Component=Ee,$.Fragment=g,$.Profiler=S,$.PureComponent=ee,$.StrictMode=o,$.Suspense=O,$.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=G,$.__COMPILER_RUNTIME={__proto__:null,c:function(d){return G.H.useMemoCache(d)}},$.cache=function(d){return function(){return d.apply(null,arguments)}},$.cloneElement=function(d,A,H){if(d==null)throw Error("The argument must be a React element, but you passed "+d+".");var R=Me({},d.props),q=d.key,ce=void 0;if(A!=null)for(J in A.ref!==void 0&&(ce=void 0),A.key!==void 0&&(q=""+A.key),A)!se.call(A,J)||J==="key"||J==="__self"||J==="__source"||J==="ref"&&A.ref===void 0||(R[J]=A[J]);var J=arguments.length-2;if(J===1)R.children=H;else if(1<J){for(var at=Array(J),U=0;U<J;U++)at[U]=arguments[U+2];R.children=at}return le(d.type,q,void 0,void 0,ce,R)},$.createContext=function(d){return d={$$typeof:L,_currentValue:d,_currentValue2:d,_threadCount:0,Provider:null,Consumer:null},d.Provider=d,d.Consumer={$$typeof:x,_context:d},d},$.createElement=function(d,A,H){var R,q={},ce=null;if(A!=null)for(R in A.key!==void 0&&(ce=""+A.key),A)se.call(A,R)&&R!=="key"&&R!=="__self"&&R!=="__source"&&(q[R]=A[R]);var J=arguments.length-2;if(J===1)q.children=H;else if(1<J){for(var at=Array(J),U=0;U<J;U++)at[U]=arguments[U+2];q.children=at}if(d&&d.defaultProps)for(R in J=d.defaultProps,J)q[R]===void 0&&(q[R]=J[R]);return le(d,ce,void 0,void 0,null,q)},$.createRef=function(){return{current:null}},$.forwardRef=function(d){return{$$typeof:V,render:d}},$.isValidElement=he,$.lazy=function(d){return{$$typeof:N,_payload:{_status:-1,_result:d},_init:B}},$.memo=function(d,A){return{$$typeof:z,type:d,compare:A===void 0?null:A}},$.startTransition=function(d){var A=G.T,H={};G.T=H;try{var R=d(),q=G.S;q!==null&&q(H,R),typeof R=="object"&&R!==null&&typeof R.then=="function"&&R.then(oe,k)}catch(ce){k(ce)}finally{G.T=A}},$.unstable_useCacheRefresh=function(){return G.H.useCacheRefresh()},$.use=function(d){return G.H.use(d)},$.useActionState=function(d,A,H){return G.H.useActionState(d,A,H)},$.useCallback=function(d,A){return G.H.useCallback(d,A)},$.useContext=function(d){return G.H.useContext(d)},$.useDebugValue=function(){},$.useDeferredValue=function(d,A){return G.H.useDeferredValue(d,A)},$.useEffect=function(d,A,H){var R=G.H;if(typeof H=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return R.useEffect(d,A)},$.useId=function(){return G.H.useId()},$.useImperativeHandle=function(d,A,H){return G.H.useImperativeHandle(d,A,H)},$.useInsertionEffect=function(d,A){return G.H.useInsertionEffect(d,A)},$.useLayoutEffect=function(d,A){return G.H.useLayoutEffect(d,A)},$.useMemo=function(d,A){return G.H.useMemo(d,A)},$.useOptimistic=function(d,A){return G.H.useOptimistic(d,A)},$.useReducer=function(d,A,H){return G.H.useReducer(d,A,H)},$.useRef=function(d){return G.H.useRef(d)},$.useState=function(d){return G.H.useState(d)},$.useSyncExternalStore=function(d,A,H){return G.H.useSyncExternalStore(d,A,H)},$.useTransition=function(){return G.H.useTransition()},$.version="19.1.0",$}var Ld;function Lr(){return Ld||(Ld=1,zr.exports=Bm()),zr.exports}var I=Lr();const Hl=th(I);var Er={exports:{}},Ca={},Ar={exports:{}},wr={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cd;function _m(){return Cd||(Cd=1,function(r){function f(T,B){var k=T.length;T.push(B);e:for(;0<k;){var oe=k-1>>>1,d=T[oe];if(0<S(d,B))T[oe]=B,T[k]=d,k=oe;else break e}}function g(T){return T.length===0?null:T[0]}function o(T){if(T.length===0)return null;var B=T[0],k=T.pop();if(k!==B){T[0]=k;e:for(var oe=0,d=T.length,A=d>>>1;oe<A;){var H=2*(oe+1)-1,R=T[H],q=H+1,ce=T[q];if(0>S(R,k))q<d&&0>S(ce,R)?(T[oe]=ce,T[q]=k,oe=q):(T[oe]=R,T[H]=k,oe=H);else if(q<d&&0>S(ce,k))T[oe]=ce,T[q]=k,oe=q;else break e}}return B}function S(T,B){var k=T.sortIndex-B.sortIndex;return k!==0?k:T.id-B.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var x=performance;r.unstable_now=function(){return x.now()}}else{var L=Date,V=L.now();r.unstable_now=function(){return L.now()-V}}var O=[],z=[],N=1,Q=null,F=3,Se=!1,Me=!1,Te=!1,Ee=!1,Ke=typeof setTimeout=="function"?setTimeout:null,ee=typeof clearTimeout=="function"?clearTimeout:null,ue=typeof setImmediate<"u"?setImmediate:null;function Oe(T){for(var B=g(z);B!==null;){if(B.callback===null)o(z);else if(B.startTime<=T)o(z),B.sortIndex=B.expirationTime,f(O,B);else break;B=g(z)}}function G(T){if(Te=!1,Oe(T),!Me)if(g(O)!==null)Me=!0,se||(se=!0,Ue());else{var B=g(z);B!==null&&W(G,B.startTime-T)}}var se=!1,le=-1,Ae=5,he=-1;function ie(){return Ee?!0:!(r.unstable_now()-he<Ae)}function je(){if(Ee=!1,se){var T=r.unstable_now();he=T;var B=!0;try{e:{Me=!1,Te&&(Te=!1,ee(le),le=-1),Se=!0;var k=F;try{t:{for(Oe(T),Q=g(O);Q!==null&&!(Q.expirationTime>T&&ie());){var oe=Q.callback;if(typeof oe=="function"){Q.callback=null,F=Q.priorityLevel;var d=oe(Q.expirationTime<=T);if(T=r.unstable_now(),typeof d=="function"){Q.callback=d,Oe(T),B=!0;break t}Q===g(O)&&o(O),Oe(T)}else o(O);Q=g(O)}if(Q!==null)B=!0;else{var A=g(z);A!==null&&W(G,A.startTime-T),B=!1}}break e}finally{Q=null,F=k,Se=!1}B=void 0}}finally{B?Ue():se=!1}}}var Ue;if(typeof ue=="function")Ue=function(){ue(je)};else if(typeof MessageChannel<"u"){var Ge=new MessageChannel,nt=Ge.port2;Ge.port1.onmessage=je,Ue=function(){nt.postMessage(null)}}else Ue=function(){Ke(je,0)};function W(T,B){le=Ke(function(){T(r.unstable_now())},B)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(T){T.callback=null},r.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ae=0<T?Math.floor(1e3/T):5},r.unstable_getCurrentPriorityLevel=function(){return F},r.unstable_next=function(T){switch(F){case 1:case 2:case 3:var B=3;break;default:B=F}var k=F;F=B;try{return T()}finally{F=k}},r.unstable_requestPaint=function(){Ee=!0},r.unstable_runWithPriority=function(T,B){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var k=F;F=T;try{return B()}finally{F=k}},r.unstable_scheduleCallback=function(T,B,k){var oe=r.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?oe+k:oe):k=oe,T){case 1:var d=-1;break;case 2:d=250;break;case 5:d=1073741823;break;case 4:d=1e4;break;default:d=5e3}return d=k+d,T={id:N++,callback:B,priorityLevel:T,startTime:k,expirationTime:d,sortIndex:-1},k>oe?(T.sortIndex=k,f(z,T),g(O)===null&&T===g(z)&&(Te?(ee(le),le=-1):Te=!0,W(G,k-oe))):(T.sortIndex=d,f(O,T),Me||Se||(Me=!0,se||(se=!0,Ue()))),T},r.unstable_shouldYield=ie,r.unstable_wrapCallback=function(T){var B=F;return function(){var k=F;F=B;try{return T.apply(this,arguments)}finally{F=k}}}}(wr)),wr}var qd;function Nm(){return qd||(qd=1,Ar.exports=_m()),Ar.exports}var Mr={exports:{}},tt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jd;function Lm(){if(jd)return tt;jd=1;var r=Lr();function f(O){var z="https://react.dev/errors/"+O;if(1<arguments.length){z+="?args[]="+encodeURIComponent(arguments[1]);for(var N=2;N<arguments.length;N++)z+="&args[]="+encodeURIComponent(arguments[N])}return"Minified React error #"+O+"; visit "+z+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function g(){}var o={d:{f:g,r:function(){throw Error(f(522))},D:g,C:g,L:g,m:g,X:g,S:g,M:g},p:0,findDOMNode:null},S=Symbol.for("react.portal");function x(O,z,N){var Q=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:S,key:Q==null?null:""+Q,children:O,containerInfo:z,implementation:N}}var L=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function V(O,z){if(O==="font")return"";if(typeof z=="string")return z==="use-credentials"?z:""}return tt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,tt.createPortal=function(O,z){var N=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!z||z.nodeType!==1&&z.nodeType!==9&&z.nodeType!==11)throw Error(f(299));return x(O,z,null,N)},tt.flushSync=function(O){var z=L.T,N=o.p;try{if(L.T=null,o.p=2,O)return O()}finally{L.T=z,o.p=N,o.d.f()}},tt.preconnect=function(O,z){typeof O=="string"&&(z?(z=z.crossOrigin,z=typeof z=="string"?z==="use-credentials"?z:"":void 0):z=null,o.d.C(O,z))},tt.prefetchDNS=function(O){typeof O=="string"&&o.d.D(O)},tt.preinit=function(O,z){if(typeof O=="string"&&z&&typeof z.as=="string"){var N=z.as,Q=V(N,z.crossOrigin),F=typeof z.integrity=="string"?z.integrity:void 0,Se=typeof z.fetchPriority=="string"?z.fetchPriority:void 0;N==="style"?o.d.S(O,typeof z.precedence=="string"?z.precedence:void 0,{crossOrigin:Q,integrity:F,fetchPriority:Se}):N==="script"&&o.d.X(O,{crossOrigin:Q,integrity:F,fetchPriority:Se,nonce:typeof z.nonce=="string"?z.nonce:void 0})}},tt.preinitModule=function(O,z){if(typeof O=="string")if(typeof z=="object"&&z!==null){if(z.as==null||z.as==="script"){var N=V(z.as,z.crossOrigin);o.d.M(O,{crossOrigin:N,integrity:typeof z.integrity=="string"?z.integrity:void 0,nonce:typeof z.nonce=="string"?z.nonce:void 0})}}else z==null&&o.d.M(O)},tt.preload=function(O,z){if(typeof O=="string"&&typeof z=="object"&&z!==null&&typeof z.as=="string"){var N=z.as,Q=V(N,z.crossOrigin);o.d.L(O,N,{crossOrigin:Q,integrity:typeof z.integrity=="string"?z.integrity:void 0,nonce:typeof z.nonce=="string"?z.nonce:void 0,type:typeof z.type=="string"?z.type:void 0,fetchPriority:typeof z.fetchPriority=="string"?z.fetchPriority:void 0,referrerPolicy:typeof z.referrerPolicy=="string"?z.referrerPolicy:void 0,imageSrcSet:typeof z.imageSrcSet=="string"?z.imageSrcSet:void 0,imageSizes:typeof z.imageSizes=="string"?z.imageSizes:void 0,media:typeof z.media=="string"?z.media:void 0})}},tt.preloadModule=function(O,z){if(typeof O=="string")if(z){var N=V(z.as,z.crossOrigin);o.d.m(O,{as:typeof z.as=="string"&&z.as!=="script"?z.as:void 0,crossOrigin:N,integrity:typeof z.integrity=="string"?z.integrity:void 0})}else o.d.m(O)},tt.requestFormReset=function(O){o.d.r(O)},tt.unstable_batchedUpdates=function(O,z){return O(z)},tt.useFormState=function(O,z,N){return L.H.useFormState(O,z,N)},tt.useFormStatus=function(){return L.H.useHostTransitionStatus()},tt.version="19.1.0",tt}var Yd;function Cm(){if(Yd)return Mr.exports;Yd=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(f){console.error(f)}}return r(),Mr.exports=Lm(),Mr.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kd;function qm(){if(kd)return Ca;kd=1;var r=Nm(),f=Lr(),g=Cm();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)t+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function S(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function x(e){var t=e,l=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(l=t.return),e=t.return;while(e)}return t.tag===3?l:null}function L(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function V(e){if(x(e)!==e)throw Error(o(188))}function O(e){var t=e.alternate;if(!t){if(t=x(e),t===null)throw Error(o(188));return t!==e?null:e}for(var l=e,n=t;;){var a=l.return;if(a===null)break;var i=a.alternate;if(i===null){if(n=a.return,n!==null){l=n;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===l)return V(a),e;if(i===n)return V(a),t;i=i.sibling}throw Error(o(188))}if(l.return!==n.return)l=a,n=i;else{for(var u=!1,c=a.child;c;){if(c===l){u=!0,l=a,n=i;break}if(c===n){u=!0,n=a,l=i;break}c=c.sibling}if(!u){for(c=i.child;c;){if(c===l){u=!0,l=i,n=a;break}if(c===n){u=!0,n=i,l=a;break}c=c.sibling}if(!u)throw Error(o(189))}}if(l.alternate!==n)throw Error(o(190))}if(l.tag!==3)throw Error(o(188));return l.stateNode.current===l?e:t}function z(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=z(e),t!==null)return t;e=e.sibling}return null}var N=Object.assign,Q=Symbol.for("react.element"),F=Symbol.for("react.transitional.element"),Se=Symbol.for("react.portal"),Me=Symbol.for("react.fragment"),Te=Symbol.for("react.strict_mode"),Ee=Symbol.for("react.profiler"),Ke=Symbol.for("react.provider"),ee=Symbol.for("react.consumer"),ue=Symbol.for("react.context"),Oe=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),se=Symbol.for("react.suspense_list"),le=Symbol.for("react.memo"),Ae=Symbol.for("react.lazy"),he=Symbol.for("react.activity"),ie=Symbol.for("react.memo_cache_sentinel"),je=Symbol.iterator;function Ue(e){return e===null||typeof e!="object"?null:(e=je&&e[je]||e["@@iterator"],typeof e=="function"?e:null)}var Ge=Symbol.for("react.client.reference");function nt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ge?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Me:return"Fragment";case Ee:return"Profiler";case Te:return"StrictMode";case G:return"Suspense";case se:return"SuspenseList";case he:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Se:return"Portal";case ue:return(e.displayName||"Context")+".Provider";case ee:return(e._context.displayName||"Context")+".Consumer";case Oe:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case le:return t=e.displayName||null,t!==null?t:nt(e.type)||"Memo";case Ae:t=e._payload,e=e._init;try{return nt(e(t))}catch{}}return null}var W=Array.isArray,T=f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=g.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k={pending:!1,data:null,method:null,action:null},oe=[],d=-1;function A(e){return{current:e}}function H(e){0>d||(e.current=oe[d],oe[d]=null,d--)}function R(e,t){d++,oe[d]=e.current,e.current=t}var q=A(null),ce=A(null),J=A(null),at=A(null);function U(e,t){switch(R(J,t),R(ce,e),R(q,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?cd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=cd(t),e=rd(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}H(q),R(q,e)}function D(){H(q),H(ce),H(J)}function _(e){e.memoizedState!==null&&R(at,e);var t=q.current,l=rd(t,e.type);t!==l&&(R(ce,e),R(q,l))}function Y(e){ce.current===e&&(H(q),H(ce)),at.current===e&&(H(at),Ha._currentValue=k)}var _e=Object.prototype.hasOwnProperty,De=r.unstable_scheduleCallback,We=r.unstable_cancelCallback,Zt=r.unstable_shouldYield,$l=r.unstable_requestPaint,it=r.unstable_now,fh=r.unstable_getCurrentPriorityLevel,jr=r.unstable_ImmediatePriority,Yr=r.unstable_UserBlockingPriority,Za=r.unstable_NormalPriority,dh=r.unstable_LowPriority,kr=r.unstable_IdlePriority,hh=r.log,gh=r.unstable_setDisableYieldValue,jn=null,dt=null;function cl(e){if(typeof hh=="function"&&gh(e),dt&&typeof dt.setStrictMode=="function")try{dt.setStrictMode(jn,e)}catch{}}var ht=Math.clz32?Math.clz32:yh,mh=Math.log,ph=Math.LN2;function yh(e){return e>>>=0,e===0?32:31-(mh(e)/ph|0)|0}var Xa=256,Qa=4194304;function Bl(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ka(e,t,l){var n=e.pendingLanes;if(n===0)return 0;var a=0,i=e.suspendedLanes,u=e.pingedLanes;e=e.warmLanes;var c=n&134217727;return c!==0?(n=c&~i,n!==0?a=Bl(n):(u&=c,u!==0?a=Bl(u):l||(l=c&~e,l!==0&&(a=Bl(l))))):(c=n&~i,c!==0?a=Bl(c):u!==0?a=Bl(u):l||(l=n&~e,l!==0&&(a=Bl(l)))),a===0?0:t!==0&&t!==a&&(t&i)===0&&(i=a&-a,l=t&-t,i>=l||i===32&&(l&4194048)!==0)?t:a}function Yn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function bh(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gr(){var e=Xa;return Xa<<=1,(Xa&4194048)===0&&(Xa=256),e}function Vr(){var e=Qa;return Qa<<=1,(Qa&62914560)===0&&(Qa=4194304),e}function su(e){for(var t=[],l=0;31>l;l++)t.push(e);return t}function kn(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function vh(e,t,l,n,a,i){var u=e.pendingLanes;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=l,e.entangledLanes&=l,e.errorRecoveryDisabledLanes&=l,e.shellSuspendCounter=0;var c=e.entanglements,s=e.expirationTimes,y=e.hiddenUpdates;for(l=u&~l;0<l;){var E=31-ht(l),M=1<<E;c[E]=0,s[E]=-1;var b=y[E];if(b!==null)for(y[E]=null,E=0;E<b.length;E++){var v=b[E];v!==null&&(v.lane&=-536870913)}l&=~M}n!==0&&Zr(e,n,0),i!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=i&~(u&~t))}function Zr(e,t,l){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-ht(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|l&4194090}function Xr(e,t){var l=e.entangledLanes|=t;for(e=e.entanglements;l;){var n=31-ht(l),a=1<<n;a&t|e[n]&t&&(e[n]|=t),l&=~a}}function fu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function du(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Qr(){var e=B.p;return e!==0?e:(e=window.event,e===void 0?32:Od(e.type))}function Sh(e,t){var l=B.p;try{return B.p=e,t()}finally{B.p=l}}var rl=Math.random().toString(36).slice(2),Pe="__reactFiber$"+rl,ct="__reactProps$"+rl,Il="__reactContainer$"+rl,hu="__reactEvents$"+rl,Th="__reactListeners$"+rl,zh="__reactHandles$"+rl,Kr="__reactResources$"+rl,Gn="__reactMarker$"+rl;function gu(e){delete e[Pe],delete e[ct],delete e[hu],delete e[Th],delete e[zh]}function Pl(e){var t=e[Pe];if(t)return t;for(var l=e.parentNode;l;){if(t=l[Il]||l[Pe]){if(l=t.alternate,t.child!==null||l!==null&&l.child!==null)for(e=dd(e);e!==null;){if(l=e[Pe])return l;e=dd(e)}return t}e=l,l=e.parentNode}return null}function en(e){if(e=e[Pe]||e[Il]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Vn(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function tn(e){var t=e[Kr];return t||(t=e[Kr]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ve(e){e[Gn]=!0}var Wr=new Set,Jr={};function _l(e,t){ln(e,t),ln(e+"Capture",t)}function ln(e,t){for(Jr[e]=t,e=0;e<t.length;e++)Wr.add(t[e])}var Eh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Fr={},$r={};function Ah(e){return _e.call($r,e)?!0:_e.call(Fr,e)?!1:Eh.test(e)?$r[e]=!0:(Fr[e]=!0,!1)}function Wa(e,t,l){if(Ah(t))if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+l)}}function Ja(e,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+l)}}function Xt(e,t,l,n){if(n===null)e.removeAttribute(l);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(l);return}e.setAttributeNS(t,l,""+n)}}var mu,Ir;function nn(e){if(mu===void 0)try{throw Error()}catch(l){var t=l.stack.trim().match(/\n( *(at )?)/);mu=t&&t[1]||"",Ir=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+mu+e+Ir}var pu=!1;function yu(e,t){if(!e||pu)return"";pu=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var M=function(){throw Error()};if(Object.defineProperty(M.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(M,[])}catch(v){var b=v}Reflect.construct(e,[],M)}else{try{M.call()}catch(v){b=v}e.call(M.prototype)}}else{try{throw Error()}catch(v){b=v}(M=e())&&typeof M.catch=="function"&&M.catch(function(){})}}catch(v){if(v&&b&&typeof v.stack=="string")return[v.stack,b.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=n.DetermineComponentFrameRoot(),u=i[0],c=i[1];if(u&&c){var s=u.split(`
`),y=c.split(`
`);for(a=n=0;n<s.length&&!s[n].includes("DetermineComponentFrameRoot");)n++;for(;a<y.length&&!y[a].includes("DetermineComponentFrameRoot");)a++;if(n===s.length||a===y.length)for(n=s.length-1,a=y.length-1;1<=n&&0<=a&&s[n]!==y[a];)a--;for(;1<=n&&0<=a;n--,a--)if(s[n]!==y[a]){if(n!==1||a!==1)do if(n--,a--,0>a||s[n]!==y[a]){var E=`
`+s[n].replace(" at new "," at ");return e.displayName&&E.includes("<anonymous>")&&(E=E.replace("<anonymous>",e.displayName)),E}while(1<=n&&0<=a);break}}}finally{pu=!1,Error.prepareStackTrace=l}return(l=e?e.displayName||e.name:"")?nn(l):""}function wh(e){switch(e.tag){case 26:case 27:case 5:return nn(e.type);case 16:return nn("Lazy");case 13:return nn("Suspense");case 19:return nn("SuspenseList");case 0:case 15:return yu(e.type,!1);case 11:return yu(e.type.render,!1);case 1:return yu(e.type,!0);case 31:return nn("Activity");default:return""}}function Pr(e){try{var t="";do t+=wh(e),e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}function zt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function eo(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Mh(e){var t=eo(e)?"checked":"value",l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var a=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(u){n=""+u,i.call(this,u)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return n},setValue:function(u){n=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Fa(e){e._valueTracker||(e._valueTracker=Mh(e))}function to(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var l=t.getValue(),n="";return e&&(n=eo(e)?e.checked?"true":"false":e.value),e=n,e!==l?(t.setValue(e),!0):!1}function $a(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Oh=/[\n"\\]/g;function Et(e){return e.replace(Oh,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function bu(e,t,l,n,a,i,u,c){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),t!=null?u==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+zt(t)):e.value!==""+zt(t)&&(e.value=""+zt(t)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),t!=null?vu(e,u,zt(t)):l!=null?vu(e,u,zt(l)):n!=null&&e.removeAttribute("value"),a==null&&i!=null&&(e.defaultChecked=!!i),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.name=""+zt(c):e.removeAttribute("name")}function lo(e,t,l,n,a,i,u,c){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||l!=null){if(!(i!=="submit"&&i!=="reset"||t!=null))return;l=l!=null?""+zt(l):"",t=t!=null?""+zt(t):l,c||t===e.value||(e.value=t),e.defaultValue=t}n=n??a,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=c?e.checked:!!n,e.defaultChecked=!!n,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u)}function vu(e,t,l){t==="number"&&$a(e.ownerDocument)===e||e.defaultValue===""+l||(e.defaultValue=""+l)}function an(e,t,l,n){if(e=e.options,t){t={};for(var a=0;a<l.length;a++)t["$"+l[a]]=!0;for(l=0;l<e.length;l++)a=t.hasOwnProperty("$"+e[l].value),e[l].selected!==a&&(e[l].selected=a),a&&n&&(e[l].defaultSelected=!0)}else{for(l=""+zt(l),t=null,a=0;a<e.length;a++){if(e[a].value===l){e[a].selected=!0,n&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function no(e,t,l){if(t!=null&&(t=""+zt(t),t!==e.value&&(e.value=t),l==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=l!=null?""+zt(l):""}function ao(e,t,l,n){if(t==null){if(n!=null){if(l!=null)throw Error(o(92));if(W(n)){if(1<n.length)throw Error(o(93));n=n[0]}l=n}l==null&&(l=""),t=l}l=zt(t),e.defaultValue=l,n=e.textContent,n===l&&n!==""&&n!==null&&(e.value=n)}function un(e,t){if(t){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=t;return}}e.textContent=t}var Dh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function io(e,t,l){var n=t.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,l):typeof l!="number"||l===0||Dh.has(t)?t==="float"?e.cssFloat=l:e[t]=(""+l).trim():e[t]=l+"px"}function uo(e,t,l){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,l!=null){for(var n in l)!l.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var a in t)n=t[a],t.hasOwnProperty(a)&&l[a]!==n&&io(e,a,n)}else for(var i in t)t.hasOwnProperty(i)&&io(e,i,t[i])}function Su(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Uh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ia(e){return Uh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Tu=null;function zu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var cn=null,rn=null;function co(e){var t=en(e);if(t&&(e=t.stateNode)){var l=e[ct]||null;e:switch(e=t.stateNode,t.type){case"input":if(bu(e,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),t=l.name,l.type==="radio"&&t!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+Et(""+t)+'"][type="radio"]'),t=0;t<l.length;t++){var n=l[t];if(n!==e&&n.form===e.form){var a=n[ct]||null;if(!a)throw Error(o(90));bu(n,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<l.length;t++)n=l[t],n.form===e.form&&to(n)}break e;case"textarea":no(e,l.value,l.defaultValue);break e;case"select":t=l.value,t!=null&&an(e,!!l.multiple,t,!1)}}}var Eu=!1;function ro(e,t,l){if(Eu)return e(t,l);Eu=!0;try{var n=e(t);return n}finally{if(Eu=!1,(cn!==null||rn!==null)&&(Ci(),cn&&(t=cn,e=rn,rn=cn=null,co(t),e)))for(t=0;t<e.length;t++)co(e[t])}}function Zn(e,t){var l=e.stateNode;if(l===null)return null;var n=l[ct]||null;if(n===null)return null;l=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(o(231,t,typeof l));return l}var Qt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Au=!1;if(Qt)try{var Xn={};Object.defineProperty(Xn,"passive",{get:function(){Au=!0}}),window.addEventListener("test",Xn,Xn),window.removeEventListener("test",Xn,Xn)}catch{Au=!1}var ol=null,wu=null,Pa=null;function oo(){if(Pa)return Pa;var e,t=wu,l=t.length,n,a="value"in ol?ol.value:ol.textContent,i=a.length;for(e=0;e<l&&t[e]===a[e];e++);var u=l-e;for(n=1;n<=u&&t[l-n]===a[i-n];n++);return Pa=a.slice(e,1<n?1-n:void 0)}function ei(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ti(){return!0}function so(){return!1}function rt(e){function t(l,n,a,i,u){this._reactName=l,this._targetInst=a,this.type=n,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(l=e[c],this[c]=l?l(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ti:so,this.isPropagationStopped=so,this}return N(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=ti)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=ti)},persist:function(){},isPersistent:ti}),t}var Nl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},li=rt(Nl),Qn=N({},Nl,{view:0,detail:0}),Hh=rt(Qn),Mu,Ou,Kn,ni=N({},Qn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Kn&&(Kn&&e.type==="mousemove"?(Mu=e.screenX-Kn.screenX,Ou=e.screenY-Kn.screenY):Ou=Mu=0,Kn=e),Mu)},movementY:function(e){return"movementY"in e?e.movementY:Ou}}),fo=rt(ni),Rh=N({},ni,{dataTransfer:0}),Bh=rt(Rh),_h=N({},Qn,{relatedTarget:0}),Du=rt(_h),Nh=N({},Nl,{animationName:0,elapsedTime:0,pseudoElement:0}),Lh=rt(Nh),Ch=N({},Nl,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),qh=rt(Ch),jh=N({},Nl,{data:0}),ho=rt(jh),Yh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Gh[e])?!!t[e]:!1}function xu(){return Vh}var Zh=N({},Qn,{key:function(e){if(e.key){var t=Yh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ei(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?kh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xu,charCode:function(e){return e.type==="keypress"?ei(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ei(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Xh=rt(Zh),Qh=N({},ni,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),go=rt(Qh),Kh=N({},Qn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xu}),Wh=rt(Kh),Jh=N({},Nl,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fh=rt(Jh),$h=N({},ni,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ih=rt($h),Ph=N({},Nl,{newState:0,oldState:0}),eg=rt(Ph),tg=[9,13,27,32],Uu=Qt&&"CompositionEvent"in window,Wn=null;Qt&&"documentMode"in document&&(Wn=document.documentMode);var lg=Qt&&"TextEvent"in window&&!Wn,mo=Qt&&(!Uu||Wn&&8<Wn&&11>=Wn),po=" ",yo=!1;function bo(e,t){switch(e){case"keyup":return tg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vo(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var on=!1;function ng(e,t){switch(e){case"compositionend":return vo(t);case"keypress":return t.which!==32?null:(yo=!0,po);case"textInput":return e=t.data,e===po&&yo?null:e;default:return null}}function ag(e,t){if(on)return e==="compositionend"||!Uu&&bo(e,t)?(e=oo(),Pa=wu=ol=null,on=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return mo&&t.locale!=="ko"?null:t.data;default:return null}}var ig={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function So(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ig[e.type]:t==="textarea"}function To(e,t,l,n){cn?rn?rn.push(n):rn=[n]:cn=n,t=Vi(t,"onChange"),0<t.length&&(l=new li("onChange","change",null,l,n),e.push({event:l,listeners:t}))}var Jn=null,Fn=null;function ug(e){ld(e,0)}function ai(e){var t=Vn(e);if(to(t))return e}function zo(e,t){if(e==="change")return t}var Eo=!1;if(Qt){var Hu;if(Qt){var Ru="oninput"in document;if(!Ru){var Ao=document.createElement("div");Ao.setAttribute("oninput","return;"),Ru=typeof Ao.oninput=="function"}Hu=Ru}else Hu=!1;Eo=Hu&&(!document.documentMode||9<document.documentMode)}function wo(){Jn&&(Jn.detachEvent("onpropertychange",Mo),Fn=Jn=null)}function Mo(e){if(e.propertyName==="value"&&ai(Fn)){var t=[];To(t,Fn,e,zu(e)),ro(ug,t)}}function cg(e,t,l){e==="focusin"?(wo(),Jn=t,Fn=l,Jn.attachEvent("onpropertychange",Mo)):e==="focusout"&&wo()}function rg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ai(Fn)}function og(e,t){if(e==="click")return ai(t)}function sg(e,t){if(e==="input"||e==="change")return ai(t)}function fg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var gt=typeof Object.is=="function"?Object.is:fg;function $n(e,t){if(gt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var l=Object.keys(e),n=Object.keys(t);if(l.length!==n.length)return!1;for(n=0;n<l.length;n++){var a=l[n];if(!_e.call(t,a)||!gt(e[a],t[a]))return!1}return!0}function Oo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Do(e,t){var l=Oo(e);e=0;for(var n;l;){if(l.nodeType===3){if(n=e+l.textContent.length,e<=t&&n>=t)return{node:l,offset:t-e};e=n}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Oo(l)}}function xo(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?xo(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Uo(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=$a(e.document);t instanceof e.HTMLIFrameElement;){try{var l=typeof t.contentWindow.location.href=="string"}catch{l=!1}if(l)e=t.contentWindow;else break;t=$a(e.document)}return t}function Bu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var dg=Qt&&"documentMode"in document&&11>=document.documentMode,sn=null,_u=null,In=null,Nu=!1;function Ho(e,t,l){var n=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Nu||sn==null||sn!==$a(n)||(n=sn,"selectionStart"in n&&Bu(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),In&&$n(In,n)||(In=n,n=Vi(_u,"onSelect"),0<n.length&&(t=new li("onSelect","select",null,t,l),e.push({event:t,listeners:n}),t.target=sn)))}function Ll(e,t){var l={};return l[e.toLowerCase()]=t.toLowerCase(),l["Webkit"+e]="webkit"+t,l["Moz"+e]="moz"+t,l}var fn={animationend:Ll("Animation","AnimationEnd"),animationiteration:Ll("Animation","AnimationIteration"),animationstart:Ll("Animation","AnimationStart"),transitionrun:Ll("Transition","TransitionRun"),transitionstart:Ll("Transition","TransitionStart"),transitioncancel:Ll("Transition","TransitionCancel"),transitionend:Ll("Transition","TransitionEnd")},Lu={},Ro={};Qt&&(Ro=document.createElement("div").style,"AnimationEvent"in window||(delete fn.animationend.animation,delete fn.animationiteration.animation,delete fn.animationstart.animation),"TransitionEvent"in window||delete fn.transitionend.transition);function Cl(e){if(Lu[e])return Lu[e];if(!fn[e])return e;var t=fn[e],l;for(l in t)if(t.hasOwnProperty(l)&&l in Ro)return Lu[e]=t[l];return e}var Bo=Cl("animationend"),_o=Cl("animationiteration"),No=Cl("animationstart"),hg=Cl("transitionrun"),gg=Cl("transitionstart"),mg=Cl("transitioncancel"),Lo=Cl("transitionend"),Co=new Map,Cu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Cu.push("scrollEnd");function Rt(e,t){Co.set(e,t),_l(t,[e])}var qo=new WeakMap;function At(e,t){if(typeof e=="object"&&e!==null){var l=qo.get(e);return l!==void 0?l:(t={value:e,source:t,stack:Pr(t)},qo.set(e,t),t)}return{value:e,source:t,stack:Pr(t)}}var wt=[],dn=0,qu=0;function ii(){for(var e=dn,t=qu=dn=0;t<e;){var l=wt[t];wt[t++]=null;var n=wt[t];wt[t++]=null;var a=wt[t];wt[t++]=null;var i=wt[t];if(wt[t++]=null,n!==null&&a!==null){var u=n.pending;u===null?a.next=a:(a.next=u.next,u.next=a),n.pending=a}i!==0&&jo(l,a,i)}}function ui(e,t,l,n){wt[dn++]=e,wt[dn++]=t,wt[dn++]=l,wt[dn++]=n,qu|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function ju(e,t,l,n){return ui(e,t,l,n),ci(e)}function hn(e,t){return ui(e,null,null,t),ci(e)}function jo(e,t,l){e.lanes|=l;var n=e.alternate;n!==null&&(n.lanes|=l);for(var a=!1,i=e.return;i!==null;)i.childLanes|=l,n=i.alternate,n!==null&&(n.childLanes|=l),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(a=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,a&&t!==null&&(a=31-ht(l),e=i.hiddenUpdates,n=e[a],n===null?e[a]=[t]:n.push(t),t.lane=l|536870912),i):null}function ci(e){if(50<Ea)throw Ea=0,Xc=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var gn={};function pg(e,t,l,n){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mt(e,t,l,n){return new pg(e,t,l,n)}function Yu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Kt(e,t){var l=e.alternate;return l===null?(l=mt(e.tag,t,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=t,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&65011712,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,t=e.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l.refCleanup=e.refCleanup,l}function Yo(e,t){e.flags&=65011714;var l=e.alternate;return l===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,e.type=l.type,t=l.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ri(e,t,l,n,a,i){var u=0;if(n=e,typeof e=="function")Yu(e)&&(u=1);else if(typeof e=="string")u=bm(e,l,q.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case he:return e=mt(31,l,t,a),e.elementType=he,e.lanes=i,e;case Me:return ql(l.children,a,i,t);case Te:u=8,a|=24;break;case Ee:return e=mt(12,l,t,a|2),e.elementType=Ee,e.lanes=i,e;case G:return e=mt(13,l,t,a),e.elementType=G,e.lanes=i,e;case se:return e=mt(19,l,t,a),e.elementType=se,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ke:case ue:u=10;break e;case ee:u=9;break e;case Oe:u=11;break e;case le:u=14;break e;case Ae:u=16,n=null;break e}u=29,l=Error(o(130,e===null?"null":typeof e,"")),n=null}return t=mt(u,l,t,a),t.elementType=e,t.type=n,t.lanes=i,t}function ql(e,t,l,n){return e=mt(7,e,n,t),e.lanes=l,e}function ku(e,t,l){return e=mt(6,e,null,t),e.lanes=l,e}function Gu(e,t,l){return t=mt(4,e.children!==null?e.children:[],e.key,t),t.lanes=l,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var mn=[],pn=0,oi=null,si=0,Mt=[],Ot=0,jl=null,Wt=1,Jt="";function Yl(e,t){mn[pn++]=si,mn[pn++]=oi,oi=e,si=t}function ko(e,t,l){Mt[Ot++]=Wt,Mt[Ot++]=Jt,Mt[Ot++]=jl,jl=e;var n=Wt;e=Jt;var a=32-ht(n)-1;n&=~(1<<a),l+=1;var i=32-ht(t)+a;if(30<i){var u=a-a%5;i=(n&(1<<u)-1).toString(32),n>>=u,a-=u,Wt=1<<32-ht(t)+a|l<<a|n,Jt=i+e}else Wt=1<<i|l<<a|n,Jt=e}function Vu(e){e.return!==null&&(Yl(e,1),ko(e,1,0))}function Zu(e){for(;e===oi;)oi=mn[--pn],mn[pn]=null,si=mn[--pn],mn[pn]=null;for(;e===jl;)jl=Mt[--Ot],Mt[Ot]=null,Jt=Mt[--Ot],Mt[Ot]=null,Wt=Mt[--Ot],Mt[Ot]=null}var ut=null,Re=null,de=!1,kl=null,jt=!1,Xu=Error(o(519));function Gl(e){var t=Error(o(418,""));throw ta(At(t,e)),Xu}function Go(e){var t=e.stateNode,l=e.type,n=e.memoizedProps;switch(t[Pe]=e,t[ct]=n,l){case"dialog":ae("cancel",t),ae("close",t);break;case"iframe":case"object":case"embed":ae("load",t);break;case"video":case"audio":for(l=0;l<wa.length;l++)ae(wa[l],t);break;case"source":ae("error",t);break;case"img":case"image":case"link":ae("error",t),ae("load",t);break;case"details":ae("toggle",t);break;case"input":ae("invalid",t),lo(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0),Fa(t);break;case"select":ae("invalid",t);break;case"textarea":ae("invalid",t),ao(t,n.value,n.defaultValue,n.children),Fa(t)}l=n.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||t.textContent===""+l||n.suppressHydrationWarning===!0||ud(t.textContent,l)?(n.popover!=null&&(ae("beforetoggle",t),ae("toggle",t)),n.onScroll!=null&&ae("scroll",t),n.onScrollEnd!=null&&ae("scrollend",t),n.onClick!=null&&(t.onclick=Zi),t=!0):t=!1,t||Gl(e)}function Vo(e){for(ut=e.return;ut;)switch(ut.tag){case 5:case 13:jt=!1;return;case 27:case 3:jt=!0;return;default:ut=ut.return}}function Pn(e){if(e!==ut)return!1;if(!de)return Vo(e),de=!0,!1;var t=e.tag,l;if((l=t!==3&&t!==27)&&((l=t===5)&&(l=e.type,l=!(l!=="form"&&l!=="button")||cr(e.type,e.memoizedProps)),l=!l),l&&Re&&Gl(e),Vo(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(l=e.data,l==="/$"){if(t===0){Re=_t(e.nextSibling);break e}t--}else l!=="$"&&l!=="$!"&&l!=="$?"||t++;e=e.nextSibling}Re=null}}else t===27?(t=Re,wl(e.type)?(e=fr,fr=null,Re=e):Re=t):Re=ut?_t(e.stateNode.nextSibling):null;return!0}function ea(){Re=ut=null,de=!1}function Zo(){var e=kl;return e!==null&&(ft===null?ft=e:ft.push.apply(ft,e),kl=null),e}function ta(e){kl===null?kl=[e]:kl.push(e)}var Qu=A(null),Vl=null,Ft=null;function sl(e,t,l){R(Qu,t._currentValue),t._currentValue=l}function $t(e){e._currentValue=Qu.current,H(Qu)}function Ku(e,t,l){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===l)break;e=e.return}}function Wu(e,t,l,n){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var i=a.dependencies;if(i!==null){var u=a.child;i=i.firstContext;e:for(;i!==null;){var c=i;i=a;for(var s=0;s<t.length;s++)if(c.context===t[s]){i.lanes|=l,c=i.alternate,c!==null&&(c.lanes|=l),Ku(i.return,l,e),n||(u=null);break e}i=c.next}}else if(a.tag===18){if(u=a.return,u===null)throw Error(o(341));u.lanes|=l,i=u.alternate,i!==null&&(i.lanes|=l),Ku(u,l,e),u=null}else u=a.child;if(u!==null)u.return=a;else for(u=a;u!==null;){if(u===e){u=null;break}if(a=u.sibling,a!==null){a.return=u.return,u=a;break}u=u.return}a=u}}function la(e,t,l,n){e=null;for(var a=t,i=!1;a!==null;){if(!i){if((a.flags&524288)!==0)i=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var u=a.alternate;if(u===null)throw Error(o(387));if(u=u.memoizedProps,u!==null){var c=a.type;gt(a.pendingProps.value,u.value)||(e!==null?e.push(c):e=[c])}}else if(a===at.current){if(u=a.alternate,u===null)throw Error(o(387));u.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(Ha):e=[Ha])}a=a.return}e!==null&&Wu(t,e,l,n),t.flags|=262144}function fi(e){for(e=e.firstContext;e!==null;){if(!gt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Zl(e){Vl=e,Ft=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function et(e){return Xo(Vl,e)}function di(e,t){return Vl===null&&Zl(e),Xo(e,t)}function Xo(e,t){var l=t._currentValue;if(t={context:t,memoizedValue:l,next:null},Ft===null){if(e===null)throw Error(o(308));Ft=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ft=Ft.next=t;return l}var yg=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(l,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(l){return l()})}},bg=r.unstable_scheduleCallback,vg=r.unstable_NormalPriority,Ye={$$typeof:ue,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ju(){return{controller:new yg,data:new Map,refCount:0}}function na(e){e.refCount--,e.refCount===0&&bg(vg,function(){e.controller.abort()})}var aa=null,Fu=0,yn=0,bn=null;function Sg(e,t){if(aa===null){var l=aa=[];Fu=0,yn=Ic(),bn={status:"pending",value:void 0,then:function(n){l.push(n)}}}return Fu++,t.then(Qo,Qo),t}function Qo(){if(--Fu===0&&aa!==null){bn!==null&&(bn.status="fulfilled");var e=aa;aa=null,yn=0,bn=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Tg(e,t){var l=[],n={status:"pending",value:null,reason:null,then:function(a){l.push(a)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var a=0;a<l.length;a++)(0,l[a])(t)},function(a){for(n.status="rejected",n.reason=a,a=0;a<l.length;a++)(0,l[a])(void 0)}),n}var Ko=T.S;T.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&Sg(e,t),Ko!==null&&Ko(e,t)};var Xl=A(null);function $u(){var e=Xl.current;return e!==null?e:we.pooledCache}function hi(e,t){t===null?R(Xl,Xl.current):R(Xl,t.pool)}function Wo(){var e=$u();return e===null?null:{parent:Ye._currentValue,pool:e}}var ia=Error(o(460)),Jo=Error(o(474)),gi=Error(o(542)),Iu={then:function(){}};function Fo(e){return e=e.status,e==="fulfilled"||e==="rejected"}function mi(){}function $o(e,t,l){switch(l=e[l],l===void 0?e.push(t):l!==t&&(t.then(mi,mi),t=l),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Po(e),e;default:if(typeof t.status=="string")t.then(mi,mi);else{if(e=we,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=n}},function(n){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Po(e),e}throw ua=t,ia}}var ua=null;function Io(){if(ua===null)throw Error(o(459));var e=ua;return ua=null,e}function Po(e){if(e===ia||e===gi)throw Error(o(483))}var fl=!1;function Pu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ec(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function dl(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function hl(e,t,l){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(ge&2)!==0){var a=n.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),n.pending=t,t=ci(e),jo(e,null,l),t}return ui(e,n,t,l),ci(e)}function ca(e,t,l){if(t=t.updateQueue,t!==null&&(t=t.shared,(l&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,l|=n,t.lanes=l,Xr(e,l)}}function tc(e,t){var l=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,l===n)){var a=null,i=null;if(l=l.firstBaseUpdate,l!==null){do{var u={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};i===null?a=i=u:i=i.next=u,l=l.next}while(l!==null);i===null?a=i=t:i=i.next=t}else a=i=t;l={baseState:n.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:n.shared,callbacks:n.callbacks},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=t:e.next=t,l.lastBaseUpdate=t}var lc=!1;function ra(){if(lc){var e=bn;if(e!==null)throw e}}function oa(e,t,l,n){lc=!1;var a=e.updateQueue;fl=!1;var i=a.firstBaseUpdate,u=a.lastBaseUpdate,c=a.shared.pending;if(c!==null){a.shared.pending=null;var s=c,y=s.next;s.next=null,u===null?i=y:u.next=y,u=s;var E=e.alternate;E!==null&&(E=E.updateQueue,c=E.lastBaseUpdate,c!==u&&(c===null?E.firstBaseUpdate=y:c.next=y,E.lastBaseUpdate=s))}if(i!==null){var M=a.baseState;u=0,E=y=s=null,c=i;do{var b=c.lane&-536870913,v=b!==c.lane;if(v?(re&b)===b:(n&b)===b){b!==0&&b===yn&&(lc=!0),E!==null&&(E=E.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});e:{var K=e,Z=c;b=t;var ve=l;switch(Z.tag){case 1:if(K=Z.payload,typeof K=="function"){M=K.call(ve,M,b);break e}M=K;break e;case 3:K.flags=K.flags&-65537|128;case 0:if(K=Z.payload,b=typeof K=="function"?K.call(ve,M,b):K,b==null)break e;M=N({},M,b);break e;case 2:fl=!0}}b=c.callback,b!==null&&(e.flags|=64,v&&(e.flags|=8192),v=a.callbacks,v===null?a.callbacks=[b]:v.push(b))}else v={lane:b,tag:c.tag,payload:c.payload,callback:c.callback,next:null},E===null?(y=E=v,s=M):E=E.next=v,u|=b;if(c=c.next,c===null){if(c=a.shared.pending,c===null)break;v=c,c=v.next,v.next=null,a.lastBaseUpdate=v,a.shared.pending=null}}while(!0);E===null&&(s=M),a.baseState=s,a.firstBaseUpdate=y,a.lastBaseUpdate=E,i===null&&(a.shared.lanes=0),Tl|=u,e.lanes=u,e.memoizedState=M}}function es(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function ts(e,t){var l=e.callbacks;if(l!==null)for(e.callbacks=null,e=0;e<l.length;e++)es(l[e],t)}var vn=A(null),pi=A(0);function ls(e,t){e=al,R(pi,e),R(vn,t),al=e|t.baseLanes}function nc(){R(pi,al),R(vn,vn.current)}function ac(){al=pi.current,H(vn),H(pi)}var gl=0,P=null,ye=null,Ce=null,yi=!1,Sn=!1,Ql=!1,bi=0,sa=0,Tn=null,zg=0;function Ne(){throw Error(o(321))}function ic(e,t){if(t===null)return!1;for(var l=0;l<t.length&&l<e.length;l++)if(!gt(e[l],t[l]))return!1;return!0}function uc(e,t,l,n,a,i){return gl=i,P=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,T.H=e===null||e.memoizedState===null?js:Ys,Ql=!1,i=l(n,a),Ql=!1,Sn&&(i=as(t,l,n,a)),ns(e),i}function ns(e){T.H=Ai;var t=ye!==null&&ye.next!==null;if(gl=0,Ce=ye=P=null,yi=!1,sa=0,Tn=null,t)throw Error(o(300));e===null||Ze||(e=e.dependencies,e!==null&&fi(e)&&(Ze=!0))}function as(e,t,l,n){P=e;var a=0;do{if(Sn&&(Tn=null),sa=0,Sn=!1,25<=a)throw Error(o(301));if(a+=1,Ce=ye=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}T.H=xg,i=t(l,n)}while(Sn);return i}function Eg(){var e=T.H,t=e.useState()[0];return t=typeof t.then=="function"?fa(t):t,e=e.useState()[0],(ye!==null?ye.memoizedState:null)!==e&&(P.flags|=1024),t}function cc(){var e=bi!==0;return bi=0,e}function rc(e,t,l){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l}function oc(e){if(yi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}yi=!1}gl=0,Ce=ye=P=null,Sn=!1,sa=bi=0,Tn=null}function ot(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ce===null?P.memoizedState=Ce=e:Ce=Ce.next=e,Ce}function qe(){if(ye===null){var e=P.alternate;e=e!==null?e.memoizedState:null}else e=ye.next;var t=Ce===null?P.memoizedState:Ce.next;if(t!==null)Ce=t,ye=e;else{if(e===null)throw P.alternate===null?Error(o(467)):Error(o(310));ye=e,e={memoizedState:ye.memoizedState,baseState:ye.baseState,baseQueue:ye.baseQueue,queue:ye.queue,next:null},Ce===null?P.memoizedState=Ce=e:Ce=Ce.next=e}return Ce}function sc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function fa(e){var t=sa;return sa+=1,Tn===null&&(Tn=[]),e=$o(Tn,e,t),t=P,(Ce===null?t.memoizedState:Ce.next)===null&&(t=t.alternate,T.H=t===null||t.memoizedState===null?js:Ys),e}function vi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return fa(e);if(e.$$typeof===ue)return et(e)}throw Error(o(438,String(e)))}function fc(e){var t=null,l=P.updateQueue;if(l!==null&&(t=l.memoCache),t==null){var n=P.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),l===null&&(l=sc(),P.updateQueue=l),l.memoCache=t,l=t.data[t.index],l===void 0)for(l=t.data[t.index]=Array(e),n=0;n<e;n++)l[n]=ie;return t.index++,l}function It(e,t){return typeof t=="function"?t(e):t}function Si(e){var t=qe();return dc(t,ye,e)}function dc(e,t,l){var n=e.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=l;var a=e.baseQueue,i=n.pending;if(i!==null){if(a!==null){var u=a.next;a.next=i.next,i.next=u}t.baseQueue=a=i,n.pending=null}if(i=e.baseState,a===null)e.memoizedState=i;else{t=a.next;var c=u=null,s=null,y=t,E=!1;do{var M=y.lane&-536870913;if(M!==y.lane?(re&M)===M:(gl&M)===M){var b=y.revertLane;if(b===0)s!==null&&(s=s.next={lane:0,revertLane:0,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null}),M===yn&&(E=!0);else if((gl&b)===b){y=y.next,b===yn&&(E=!0);continue}else M={lane:0,revertLane:y.revertLane,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null},s===null?(c=s=M,u=i):s=s.next=M,P.lanes|=b,Tl|=b;M=y.action,Ql&&l(i,M),i=y.hasEagerState?y.eagerState:l(i,M)}else b={lane:M,revertLane:y.revertLane,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null},s===null?(c=s=b,u=i):s=s.next=b,P.lanes|=M,Tl|=M;y=y.next}while(y!==null&&y!==t);if(s===null?u=i:s.next=c,!gt(i,e.memoizedState)&&(Ze=!0,E&&(l=bn,l!==null)))throw l;e.memoizedState=i,e.baseState=u,e.baseQueue=s,n.lastRenderedState=i}return a===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function hc(e){var t=qe(),l=t.queue;if(l===null)throw Error(o(311));l.lastRenderedReducer=e;var n=l.dispatch,a=l.pending,i=t.memoizedState;if(a!==null){l.pending=null;var u=a=a.next;do i=e(i,u.action),u=u.next;while(u!==a);gt(i,t.memoizedState)||(Ze=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),l.lastRenderedState=i}return[i,n]}function is(e,t,l){var n=P,a=qe(),i=de;if(i){if(l===void 0)throw Error(o(407));l=l()}else l=t();var u=!gt((ye||a).memoizedState,l);u&&(a.memoizedState=l,Ze=!0),a=a.queue;var c=rs.bind(null,n,a,e);if(da(2048,8,c,[e]),a.getSnapshot!==t||u||Ce!==null&&Ce.memoizedState.tag&1){if(n.flags|=2048,zn(9,Ti(),cs.bind(null,n,a,l,t),null),we===null)throw Error(o(349));i||(gl&124)!==0||us(n,t,l)}return l}function us(e,t,l){e.flags|=16384,e={getSnapshot:t,value:l},t=P.updateQueue,t===null?(t=sc(),P.updateQueue=t,t.stores=[e]):(l=t.stores,l===null?t.stores=[e]:l.push(e))}function cs(e,t,l,n){t.value=l,t.getSnapshot=n,os(t)&&ss(e)}function rs(e,t,l){return l(function(){os(t)&&ss(e)})}function os(e){var t=e.getSnapshot;e=e.value;try{var l=t();return!gt(e,l)}catch{return!0}}function ss(e){var t=hn(e,2);t!==null&&St(t,e,2)}function gc(e){var t=ot();if(typeof e=="function"){var l=e;if(e=l(),Ql){cl(!0);try{l()}finally{cl(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:It,lastRenderedState:e},t}function fs(e,t,l,n){return e.baseState=l,dc(e,ye,typeof n=="function"?n:It)}function Ag(e,t,l,n,a){if(Ei(e))throw Error(o(485));if(e=t.action,e!==null){var i={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};T.T!==null?l(!0):i.isTransition=!1,n(i),l=t.pending,l===null?(i.next=t.pending=i,ds(t,i)):(i.next=l.next,t.pending=l.next=i)}}function ds(e,t){var l=t.action,n=t.payload,a=e.state;if(t.isTransition){var i=T.T,u={};T.T=u;try{var c=l(a,n),s=T.S;s!==null&&s(u,c),hs(e,t,c)}catch(y){mc(e,t,y)}finally{T.T=i}}else try{i=l(a,n),hs(e,t,i)}catch(y){mc(e,t,y)}}function hs(e,t,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(n){gs(e,t,n)},function(n){return mc(e,t,n)}):gs(e,t,l)}function gs(e,t,l){t.status="fulfilled",t.value=l,ms(t),e.state=l,t=e.pending,t!==null&&(l=t.next,l===t?e.pending=null:(l=l.next,t.next=l,ds(e,l)))}function mc(e,t,l){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=l,ms(t),t=t.next;while(t!==n)}e.action=null}function ms(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ps(e,t){return t}function ys(e,t){if(de){var l=we.formState;if(l!==null){e:{var n=P;if(de){if(Re){t:{for(var a=Re,i=jt;a.nodeType!==8;){if(!i){a=null;break t}if(a=_t(a.nextSibling),a===null){a=null;break t}}i=a.data,a=i==="F!"||i==="F"?a:null}if(a){Re=_t(a.nextSibling),n=a.data==="F!";break e}}Gl(n)}n=!1}n&&(t=l[0])}}return l=ot(),l.memoizedState=l.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ps,lastRenderedState:t},l.queue=n,l=Ls.bind(null,P,n),n.dispatch=l,n=gc(!1),i=Sc.bind(null,P,!1,n.queue),n=ot(),a={state:t,dispatch:null,action:e,pending:null},n.queue=a,l=Ag.bind(null,P,a,i,l),a.dispatch=l,n.memoizedState=e,[t,l,!1]}function bs(e){var t=qe();return vs(t,ye,e)}function vs(e,t,l){if(t=dc(e,t,ps)[0],e=Si(It)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=fa(t)}catch(u){throw u===ia?gi:u}else n=t;t=qe();var a=t.queue,i=a.dispatch;return l!==t.memoizedState&&(P.flags|=2048,zn(9,Ti(),wg.bind(null,a,l),null)),[n,i,e]}function wg(e,t){e.action=t}function Ss(e){var t=qe(),l=ye;if(l!==null)return vs(t,l,e);qe(),t=t.memoizedState,l=qe();var n=l.queue.dispatch;return l.memoizedState=e,[t,n,!1]}function zn(e,t,l,n){return e={tag:e,create:l,deps:n,inst:t,next:null},t=P.updateQueue,t===null&&(t=sc(),P.updateQueue=t),l=t.lastEffect,l===null?t.lastEffect=e.next=e:(n=l.next,l.next=e,e.next=n,t.lastEffect=e),e}function Ti(){return{destroy:void 0,resource:void 0}}function Ts(){return qe().memoizedState}function zi(e,t,l,n){var a=ot();n=n===void 0?null:n,P.flags|=e,a.memoizedState=zn(1|t,Ti(),l,n)}function da(e,t,l,n){var a=qe();n=n===void 0?null:n;var i=a.memoizedState.inst;ye!==null&&n!==null&&ic(n,ye.memoizedState.deps)?a.memoizedState=zn(t,i,l,n):(P.flags|=e,a.memoizedState=zn(1|t,i,l,n))}function zs(e,t){zi(8390656,8,e,t)}function Es(e,t){da(2048,8,e,t)}function As(e,t){return da(4,2,e,t)}function ws(e,t){return da(4,4,e,t)}function Ms(e,t){if(typeof t=="function"){e=e();var l=t(e);return function(){typeof l=="function"?l():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Os(e,t,l){l=l!=null?l.concat([e]):null,da(4,4,Ms.bind(null,t,e),l)}function pc(){}function Ds(e,t){var l=qe();t=t===void 0?null:t;var n=l.memoizedState;return t!==null&&ic(t,n[1])?n[0]:(l.memoizedState=[e,t],e)}function xs(e,t){var l=qe();t=t===void 0?null:t;var n=l.memoizedState;if(t!==null&&ic(t,n[1]))return n[0];if(n=e(),Ql){cl(!0);try{e()}finally{cl(!1)}}return l.memoizedState=[n,t],n}function yc(e,t,l){return l===void 0||(gl&1073741824)!==0?e.memoizedState=t:(e.memoizedState=l,e=Bf(),P.lanes|=e,Tl|=e,l)}function Us(e,t,l,n){return gt(l,t)?l:vn.current!==null?(e=yc(e,l,n),gt(e,t)||(Ze=!0),e):(gl&42)===0?(Ze=!0,e.memoizedState=l):(e=Bf(),P.lanes|=e,Tl|=e,t)}function Hs(e,t,l,n,a){var i=B.p;B.p=i!==0&&8>i?i:8;var u=T.T,c={};T.T=c,Sc(e,!1,t,l);try{var s=a(),y=T.S;if(y!==null&&y(c,s),s!==null&&typeof s=="object"&&typeof s.then=="function"){var E=Tg(s,n);ha(e,t,E,vt(e))}else ha(e,t,n,vt(e))}catch(M){ha(e,t,{then:function(){},status:"rejected",reason:M},vt())}finally{B.p=i,T.T=u}}function Mg(){}function bc(e,t,l,n){if(e.tag!==5)throw Error(o(476));var a=Rs(e).queue;Hs(e,a,t,k,l===null?Mg:function(){return Bs(e),l(n)})}function Rs(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:k,baseState:k,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:It,lastRenderedState:k},next:null};var l={};return t.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:It,lastRenderedState:l},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Bs(e){var t=Rs(e).next.queue;ha(e,t,{},vt())}function vc(){return et(Ha)}function _s(){return qe().memoizedState}function Ns(){return qe().memoizedState}function Og(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var l=vt();e=dl(l);var n=hl(t,e,l);n!==null&&(St(n,t,l),ca(n,t,l)),t={cache:Ju()},e.payload=t;return}t=t.return}}function Dg(e,t,l){var n=vt();l={lane:n,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null},Ei(e)?Cs(t,l):(l=ju(e,t,l,n),l!==null&&(St(l,e,n),qs(l,t,n)))}function Ls(e,t,l){var n=vt();ha(e,t,l,n)}function ha(e,t,l,n){var a={lane:n,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null};if(Ei(e))Cs(t,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var u=t.lastRenderedState,c=i(u,l);if(a.hasEagerState=!0,a.eagerState=c,gt(c,u))return ui(e,t,a,0),we===null&&ii(),!1}catch{}finally{}if(l=ju(e,t,a,n),l!==null)return St(l,e,n),qs(l,t,n),!0}return!1}function Sc(e,t,l,n){if(n={lane:2,revertLane:Ic(),action:n,hasEagerState:!1,eagerState:null,next:null},Ei(e)){if(t)throw Error(o(479))}else t=ju(e,l,n,2),t!==null&&St(t,e,2)}function Ei(e){var t=e.alternate;return e===P||t!==null&&t===P}function Cs(e,t){Sn=yi=!0;var l=e.pending;l===null?t.next=t:(t.next=l.next,l.next=t),e.pending=t}function qs(e,t,l){if((l&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,l|=n,t.lanes=l,Xr(e,l)}}var Ai={readContext:et,use:vi,useCallback:Ne,useContext:Ne,useEffect:Ne,useImperativeHandle:Ne,useLayoutEffect:Ne,useInsertionEffect:Ne,useMemo:Ne,useReducer:Ne,useRef:Ne,useState:Ne,useDebugValue:Ne,useDeferredValue:Ne,useTransition:Ne,useSyncExternalStore:Ne,useId:Ne,useHostTransitionStatus:Ne,useFormState:Ne,useActionState:Ne,useOptimistic:Ne,useMemoCache:Ne,useCacheRefresh:Ne},js={readContext:et,use:vi,useCallback:function(e,t){return ot().memoizedState=[e,t===void 0?null:t],e},useContext:et,useEffect:zs,useImperativeHandle:function(e,t,l){l=l!=null?l.concat([e]):null,zi(4194308,4,Ms.bind(null,t,e),l)},useLayoutEffect:function(e,t){return zi(4194308,4,e,t)},useInsertionEffect:function(e,t){zi(4,2,e,t)},useMemo:function(e,t){var l=ot();t=t===void 0?null:t;var n=e();if(Ql){cl(!0);try{e()}finally{cl(!1)}}return l.memoizedState=[n,t],n},useReducer:function(e,t,l){var n=ot();if(l!==void 0){var a=l(t);if(Ql){cl(!0);try{l(t)}finally{cl(!1)}}}else a=t;return n.memoizedState=n.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},n.queue=e,e=e.dispatch=Dg.bind(null,P,e),[n.memoizedState,e]},useRef:function(e){var t=ot();return e={current:e},t.memoizedState=e},useState:function(e){e=gc(e);var t=e.queue,l=Ls.bind(null,P,t);return t.dispatch=l,[e.memoizedState,l]},useDebugValue:pc,useDeferredValue:function(e,t){var l=ot();return yc(l,e,t)},useTransition:function(){var e=gc(!1);return e=Hs.bind(null,P,e.queue,!0,!1),ot().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,l){var n=P,a=ot();if(de){if(l===void 0)throw Error(o(407));l=l()}else{if(l=t(),we===null)throw Error(o(349));(re&124)!==0||us(n,t,l)}a.memoizedState=l;var i={value:l,getSnapshot:t};return a.queue=i,zs(rs.bind(null,n,i,e),[e]),n.flags|=2048,zn(9,Ti(),cs.bind(null,n,i,l,t),null),l},useId:function(){var e=ot(),t=we.identifierPrefix;if(de){var l=Jt,n=Wt;l=(n&~(1<<32-ht(n)-1)).toString(32)+l,t="«"+t+"R"+l,l=bi++,0<l&&(t+="H"+l.toString(32)),t+="»"}else l=zg++,t="«"+t+"r"+l.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:vc,useFormState:ys,useActionState:ys,useOptimistic:function(e){var t=ot();t.memoizedState=t.baseState=e;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=l,t=Sc.bind(null,P,!0,l),l.dispatch=t,[e,t]},useMemoCache:fc,useCacheRefresh:function(){return ot().memoizedState=Og.bind(null,P)}},Ys={readContext:et,use:vi,useCallback:Ds,useContext:et,useEffect:Es,useImperativeHandle:Os,useInsertionEffect:As,useLayoutEffect:ws,useMemo:xs,useReducer:Si,useRef:Ts,useState:function(){return Si(It)},useDebugValue:pc,useDeferredValue:function(e,t){var l=qe();return Us(l,ye.memoizedState,e,t)},useTransition:function(){var e=Si(It)[0],t=qe().memoizedState;return[typeof e=="boolean"?e:fa(e),t]},useSyncExternalStore:is,useId:_s,useHostTransitionStatus:vc,useFormState:bs,useActionState:bs,useOptimistic:function(e,t){var l=qe();return fs(l,ye,e,t)},useMemoCache:fc,useCacheRefresh:Ns},xg={readContext:et,use:vi,useCallback:Ds,useContext:et,useEffect:Es,useImperativeHandle:Os,useInsertionEffect:As,useLayoutEffect:ws,useMemo:xs,useReducer:hc,useRef:Ts,useState:function(){return hc(It)},useDebugValue:pc,useDeferredValue:function(e,t){var l=qe();return ye===null?yc(l,e,t):Us(l,ye.memoizedState,e,t)},useTransition:function(){var e=hc(It)[0],t=qe().memoizedState;return[typeof e=="boolean"?e:fa(e),t]},useSyncExternalStore:is,useId:_s,useHostTransitionStatus:vc,useFormState:Ss,useActionState:Ss,useOptimistic:function(e,t){var l=qe();return ye!==null?fs(l,ye,e,t):(l.baseState=e,[e,l.queue.dispatch])},useMemoCache:fc,useCacheRefresh:Ns},En=null,ga=0;function wi(e){var t=ga;return ga+=1,En===null&&(En=[]),$o(En,e,t)}function ma(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Mi(e,t){throw t.$$typeof===Q?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function ks(e){var t=e._init;return t(e._payload)}function Gs(e){function t(m,h){if(e){var p=m.deletions;p===null?(m.deletions=[h],m.flags|=16):p.push(h)}}function l(m,h){if(!e)return null;for(;h!==null;)t(m,h),h=h.sibling;return null}function n(m){for(var h=new Map;m!==null;)m.key!==null?h.set(m.key,m):h.set(m.index,m),m=m.sibling;return h}function a(m,h){return m=Kt(m,h),m.index=0,m.sibling=null,m}function i(m,h,p){return m.index=p,e?(p=m.alternate,p!==null?(p=p.index,p<h?(m.flags|=67108866,h):p):(m.flags|=67108866,h)):(m.flags|=1048576,h)}function u(m){return e&&m.alternate===null&&(m.flags|=67108866),m}function c(m,h,p,w){return h===null||h.tag!==6?(h=ku(p,m.mode,w),h.return=m,h):(h=a(h,p),h.return=m,h)}function s(m,h,p,w){var C=p.type;return C===Me?E(m,h,p.props.children,w,p.key):h!==null&&(h.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ae&&ks(C)===h.type)?(h=a(h,p.props),ma(h,p),h.return=m,h):(h=ri(p.type,p.key,p.props,null,m.mode,w),ma(h,p),h.return=m,h)}function y(m,h,p,w){return h===null||h.tag!==4||h.stateNode.containerInfo!==p.containerInfo||h.stateNode.implementation!==p.implementation?(h=Gu(p,m.mode,w),h.return=m,h):(h=a(h,p.children||[]),h.return=m,h)}function E(m,h,p,w,C){return h===null||h.tag!==7?(h=ql(p,m.mode,w,C),h.return=m,h):(h=a(h,p),h.return=m,h)}function M(m,h,p){if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return h=ku(""+h,m.mode,p),h.return=m,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case F:return p=ri(h.type,h.key,h.props,null,m.mode,p),ma(p,h),p.return=m,p;case Se:return h=Gu(h,m.mode,p),h.return=m,h;case Ae:var w=h._init;return h=w(h._payload),M(m,h,p)}if(W(h)||Ue(h))return h=ql(h,m.mode,p,null),h.return=m,h;if(typeof h.then=="function")return M(m,wi(h),p);if(h.$$typeof===ue)return M(m,di(m,h),p);Mi(m,h)}return null}function b(m,h,p,w){var C=h!==null?h.key:null;if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return C!==null?null:c(m,h,""+p,w);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case F:return p.key===C?s(m,h,p,w):null;case Se:return p.key===C?y(m,h,p,w):null;case Ae:return C=p._init,p=C(p._payload),b(m,h,p,w)}if(W(p)||Ue(p))return C!==null?null:E(m,h,p,w,null);if(typeof p.then=="function")return b(m,h,wi(p),w);if(p.$$typeof===ue)return b(m,h,di(m,p),w);Mi(m,p)}return null}function v(m,h,p,w,C){if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return m=m.get(p)||null,c(h,m,""+w,C);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case F:return m=m.get(w.key===null?p:w.key)||null,s(h,m,w,C);case Se:return m=m.get(w.key===null?p:w.key)||null,y(h,m,w,C);case Ae:var te=w._init;return w=te(w._payload),v(m,h,p,w,C)}if(W(w)||Ue(w))return m=m.get(p)||null,E(h,m,w,C,null);if(typeof w.then=="function")return v(m,h,p,wi(w),C);if(w.$$typeof===ue)return v(m,h,p,di(h,w),C);Mi(h,w)}return null}function K(m,h,p,w){for(var C=null,te=null,j=h,X=h=0,Qe=null;j!==null&&X<p.length;X++){j.index>X?(Qe=j,j=null):Qe=j.sibling;var fe=b(m,j,p[X],w);if(fe===null){j===null&&(j=Qe);break}e&&j&&fe.alternate===null&&t(m,j),h=i(fe,h,X),te===null?C=fe:te.sibling=fe,te=fe,j=Qe}if(X===p.length)return l(m,j),de&&Yl(m,X),C;if(j===null){for(;X<p.length;X++)j=M(m,p[X],w),j!==null&&(h=i(j,h,X),te===null?C=j:te.sibling=j,te=j);return de&&Yl(m,X),C}for(j=n(j);X<p.length;X++)Qe=v(j,m,X,p[X],w),Qe!==null&&(e&&Qe.alternate!==null&&j.delete(Qe.key===null?X:Qe.key),h=i(Qe,h,X),te===null?C=Qe:te.sibling=Qe,te=Qe);return e&&j.forEach(function(Ul){return t(m,Ul)}),de&&Yl(m,X),C}function Z(m,h,p,w){if(p==null)throw Error(o(151));for(var C=null,te=null,j=h,X=h=0,Qe=null,fe=p.next();j!==null&&!fe.done;X++,fe=p.next()){j.index>X?(Qe=j,j=null):Qe=j.sibling;var Ul=b(m,j,fe.value,w);if(Ul===null){j===null&&(j=Qe);break}e&&j&&Ul.alternate===null&&t(m,j),h=i(Ul,h,X),te===null?C=Ul:te.sibling=Ul,te=Ul,j=Qe}if(fe.done)return l(m,j),de&&Yl(m,X),C;if(j===null){for(;!fe.done;X++,fe=p.next())fe=M(m,fe.value,w),fe!==null&&(h=i(fe,h,X),te===null?C=fe:te.sibling=fe,te=fe);return de&&Yl(m,X),C}for(j=n(j);!fe.done;X++,fe=p.next())fe=v(j,m,X,fe.value,w),fe!==null&&(e&&fe.alternate!==null&&j.delete(fe.key===null?X:fe.key),h=i(fe,h,X),te===null?C=fe:te.sibling=fe,te=fe);return e&&j.forEach(function(Um){return t(m,Um)}),de&&Yl(m,X),C}function ve(m,h,p,w){if(typeof p=="object"&&p!==null&&p.type===Me&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case F:e:{for(var C=p.key;h!==null;){if(h.key===C){if(C=p.type,C===Me){if(h.tag===7){l(m,h.sibling),w=a(h,p.props.children),w.return=m,m=w;break e}}else if(h.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ae&&ks(C)===h.type){l(m,h.sibling),w=a(h,p.props),ma(w,p),w.return=m,m=w;break e}l(m,h);break}else t(m,h);h=h.sibling}p.type===Me?(w=ql(p.props.children,m.mode,w,p.key),w.return=m,m=w):(w=ri(p.type,p.key,p.props,null,m.mode,w),ma(w,p),w.return=m,m=w)}return u(m);case Se:e:{for(C=p.key;h!==null;){if(h.key===C)if(h.tag===4&&h.stateNode.containerInfo===p.containerInfo&&h.stateNode.implementation===p.implementation){l(m,h.sibling),w=a(h,p.children||[]),w.return=m,m=w;break e}else{l(m,h);break}else t(m,h);h=h.sibling}w=Gu(p,m.mode,w),w.return=m,m=w}return u(m);case Ae:return C=p._init,p=C(p._payload),ve(m,h,p,w)}if(W(p))return K(m,h,p,w);if(Ue(p)){if(C=Ue(p),typeof C!="function")throw Error(o(150));return p=C.call(p),Z(m,h,p,w)}if(typeof p.then=="function")return ve(m,h,wi(p),w);if(p.$$typeof===ue)return ve(m,h,di(m,p),w);Mi(m,p)}return typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint"?(p=""+p,h!==null&&h.tag===6?(l(m,h.sibling),w=a(h,p),w.return=m,m=w):(l(m,h),w=ku(p,m.mode,w),w.return=m,m=w),u(m)):l(m,h)}return function(m,h,p,w){try{ga=0;var C=ve(m,h,p,w);return En=null,C}catch(j){if(j===ia||j===gi)throw j;var te=mt(29,j,null,m.mode);return te.lanes=w,te.return=m,te}finally{}}}var An=Gs(!0),Vs=Gs(!1),Dt=A(null),Yt=null;function ml(e){var t=e.alternate;R(ke,ke.current&1),R(Dt,e),Yt===null&&(t===null||vn.current!==null||t.memoizedState!==null)&&(Yt=e)}function Zs(e){if(e.tag===22){if(R(ke,ke.current),R(Dt,e),Yt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Yt=e)}}else pl()}function pl(){R(ke,ke.current),R(Dt,Dt.current)}function Pt(e){H(Dt),Yt===e&&(Yt=null),H(ke)}var ke=A(0);function Oi(e){for(var t=e;t!==null;){if(t.tag===13){var l=t.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||sr(l)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Tc(e,t,l,n){t=e.memoizedState,l=l(n,t),l=l==null?t:N({},t,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var zc={enqueueSetState:function(e,t,l){e=e._reactInternals;var n=vt(),a=dl(n);a.payload=t,l!=null&&(a.callback=l),t=hl(e,a,n),t!==null&&(St(t,e,n),ca(t,e,n))},enqueueReplaceState:function(e,t,l){e=e._reactInternals;var n=vt(),a=dl(n);a.tag=1,a.payload=t,l!=null&&(a.callback=l),t=hl(e,a,n),t!==null&&(St(t,e,n),ca(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var l=vt(),n=dl(l);n.tag=2,t!=null&&(n.callback=t),t=hl(e,n,l),t!==null&&(St(t,e,l),ca(t,e,l))}};function Xs(e,t,l,n,a,i,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,i,u):t.prototype&&t.prototype.isPureReactComponent?!$n(l,n)||!$n(a,i):!0}function Qs(e,t,l,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(l,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(l,n),t.state!==e&&zc.enqueueReplaceState(t,t.state,null)}function Kl(e,t){var l=t;if("ref"in t){l={};for(var n in t)n!=="ref"&&(l[n]=t[n])}if(e=e.defaultProps){l===t&&(l=N({},l));for(var a in e)l[a]===void 0&&(l[a]=e[a])}return l}var Di=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Ks(e){Di(e)}function Ws(e){console.error(e)}function Js(e){Di(e)}function xi(e,t){try{var l=e.onUncaughtError;l(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function Fs(e,t,l){try{var n=e.onCaughtError;n(l.value,{componentStack:l.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function Ec(e,t,l){return l=dl(l),l.tag=3,l.payload={element:null},l.callback=function(){xi(e,t)},l}function $s(e){return e=dl(e),e.tag=3,e}function Is(e,t,l,n){var a=l.type.getDerivedStateFromError;if(typeof a=="function"){var i=n.value;e.payload=function(){return a(i)},e.callback=function(){Fs(t,l,n)}}var u=l.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){Fs(t,l,n),typeof a!="function"&&(zl===null?zl=new Set([this]):zl.add(this));var c=n.stack;this.componentDidCatch(n.value,{componentStack:c!==null?c:""})})}function Ug(e,t,l,n,a){if(l.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=l.alternate,t!==null&&la(t,l,a,!0),l=Dt.current,l!==null){switch(l.tag){case 13:return Yt===null?Kc():l.alternate===null&&Be===0&&(Be=3),l.flags&=-257,l.flags|=65536,l.lanes=a,n===Iu?l.flags|=16384:(t=l.updateQueue,t===null?l.updateQueue=new Set([n]):t.add(n),Jc(e,n,a)),!1;case 22:return l.flags|=65536,n===Iu?l.flags|=16384:(t=l.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},l.updateQueue=t):(l=t.retryQueue,l===null?t.retryQueue=new Set([n]):l.add(n)),Jc(e,n,a)),!1}throw Error(o(435,l.tag))}return Jc(e,n,a),Kc(),!1}if(de)return t=Dt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=a,n!==Xu&&(e=Error(o(422),{cause:n}),ta(At(e,l)))):(n!==Xu&&(t=Error(o(423),{cause:n}),ta(At(t,l))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,n=At(n,l),a=Ec(e.stateNode,n,a),tc(e,a),Be!==4&&(Be=2)),!1;var i=Error(o(520),{cause:n});if(i=At(i,l),za===null?za=[i]:za.push(i),Be!==4&&(Be=2),t===null)return!0;n=At(n,l),l=t;do{switch(l.tag){case 3:return l.flags|=65536,e=a&-a,l.lanes|=e,e=Ec(l.stateNode,n,e),tc(l,e),!1;case 1:if(t=l.type,i=l.stateNode,(l.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(zl===null||!zl.has(i))))return l.flags|=65536,a&=-a,l.lanes|=a,a=$s(a),Is(a,e,l,n),tc(l,a),!1}l=l.return}while(l!==null);return!1}var Ps=Error(o(461)),Ze=!1;function Je(e,t,l,n){t.child=e===null?Vs(t,null,l,n):An(t,e.child,l,n)}function ef(e,t,l,n,a){l=l.render;var i=t.ref;if("ref"in n){var u={};for(var c in n)c!=="ref"&&(u[c]=n[c])}else u=n;return Zl(t),n=uc(e,t,l,u,i,a),c=cc(),e!==null&&!Ze?(rc(e,t,a),el(e,t,a)):(de&&c&&Vu(t),t.flags|=1,Je(e,t,n,a),t.child)}function tf(e,t,l,n,a){if(e===null){var i=l.type;return typeof i=="function"&&!Yu(i)&&i.defaultProps===void 0&&l.compare===null?(t.tag=15,t.type=i,lf(e,t,i,n,a)):(e=ri(l.type,null,n,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Hc(e,a)){var u=i.memoizedProps;if(l=l.compare,l=l!==null?l:$n,l(u,n)&&e.ref===t.ref)return el(e,t,a)}return t.flags|=1,e=Kt(i,n),e.ref=t.ref,e.return=t,t.child=e}function lf(e,t,l,n,a){if(e!==null){var i=e.memoizedProps;if($n(i,n)&&e.ref===t.ref)if(Ze=!1,t.pendingProps=n=i,Hc(e,a))(e.flags&131072)!==0&&(Ze=!0);else return t.lanes=e.lanes,el(e,t,a)}return Ac(e,t,l,n,a)}function nf(e,t,l){var n=t.pendingProps,a=n.children,i=e!==null?e.memoizedState:null;if(n.mode==="hidden"){if((t.flags&128)!==0){if(n=i!==null?i.baseLanes|l:l,e!==null){for(a=t.child=e.child,i=0;a!==null;)i=i|a.lanes|a.childLanes,a=a.sibling;t.childLanes=i&~n}else t.childLanes=0,t.child=null;return af(e,t,n,l)}if((l&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&hi(t,i!==null?i.cachePool:null),i!==null?ls(t,i):nc(),Zs(t);else return t.lanes=t.childLanes=536870912,af(e,t,i!==null?i.baseLanes|l:l,l)}else i!==null?(hi(t,i.cachePool),ls(t,i),pl(),t.memoizedState=null):(e!==null&&hi(t,null),nc(),pl());return Je(e,t,a,l),t.child}function af(e,t,l,n){var a=$u();return a=a===null?null:{parent:Ye._currentValue,pool:a},t.memoizedState={baseLanes:l,cachePool:a},e!==null&&hi(t,null),nc(),Zs(t),e!==null&&la(e,t,n,!0),null}function Ui(e,t){var l=t.ref;if(l===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(o(284));(e===null||e.ref!==l)&&(t.flags|=4194816)}}function Ac(e,t,l,n,a){return Zl(t),l=uc(e,t,l,n,void 0,a),n=cc(),e!==null&&!Ze?(rc(e,t,a),el(e,t,a)):(de&&n&&Vu(t),t.flags|=1,Je(e,t,l,a),t.child)}function uf(e,t,l,n,a,i){return Zl(t),t.updateQueue=null,l=as(t,n,l,a),ns(e),n=cc(),e!==null&&!Ze?(rc(e,t,i),el(e,t,i)):(de&&n&&Vu(t),t.flags|=1,Je(e,t,l,i),t.child)}function cf(e,t,l,n,a){if(Zl(t),t.stateNode===null){var i=gn,u=l.contextType;typeof u=="object"&&u!==null&&(i=et(u)),i=new l(n,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=zc,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=n,i.state=t.memoizedState,i.refs={},Pu(t),u=l.contextType,i.context=typeof u=="object"&&u!==null?et(u):gn,i.state=t.memoizedState,u=l.getDerivedStateFromProps,typeof u=="function"&&(Tc(t,l,u,n),i.state=t.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&zc.enqueueReplaceState(i,i.state,null),oa(t,n,i,a),ra(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){i=t.stateNode;var c=t.memoizedProps,s=Kl(l,c);i.props=s;var y=i.context,E=l.contextType;u=gn,typeof E=="object"&&E!==null&&(u=et(E));var M=l.getDerivedStateFromProps;E=typeof M=="function"||typeof i.getSnapshotBeforeUpdate=="function",c=t.pendingProps!==c,E||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c||y!==u)&&Qs(t,i,n,u),fl=!1;var b=t.memoizedState;i.state=b,oa(t,n,i,a),ra(),y=t.memoizedState,c||b!==y||fl?(typeof M=="function"&&(Tc(t,l,M,n),y=t.memoizedState),(s=fl||Xs(t,l,s,n,b,y,u))?(E||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=y),i.props=n,i.state=y,i.context=u,n=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{i=t.stateNode,ec(e,t),u=t.memoizedProps,E=Kl(l,u),i.props=E,M=t.pendingProps,b=i.context,y=l.contextType,s=gn,typeof y=="object"&&y!==null&&(s=et(y)),c=l.getDerivedStateFromProps,(y=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==M||b!==s)&&Qs(t,i,n,s),fl=!1,b=t.memoizedState,i.state=b,oa(t,n,i,a),ra();var v=t.memoizedState;u!==M||b!==v||fl||e!==null&&e.dependencies!==null&&fi(e.dependencies)?(typeof c=="function"&&(Tc(t,l,c,n),v=t.memoizedState),(E=fl||Xs(t,l,E,n,b,v,s)||e!==null&&e.dependencies!==null&&fi(e.dependencies))?(y||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(n,v,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(n,v,s)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&b===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&b===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=v),i.props=n,i.state=v,i.context=s,n=E):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&b===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&b===e.memoizedState||(t.flags|=1024),n=!1)}return i=n,Ui(e,t),n=(t.flags&128)!==0,i||n?(i=t.stateNode,l=n&&typeof l.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&n?(t.child=An(t,e.child,null,a),t.child=An(t,null,l,a)):Je(e,t,l,a),t.memoizedState=i.state,e=t.child):e=el(e,t,a),e}function rf(e,t,l,n){return ea(),t.flags|=256,Je(e,t,l,n),t.child}var wc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Mc(e){return{baseLanes:e,cachePool:Wo()}}function Oc(e,t,l){return e=e!==null?e.childLanes&~l:0,t&&(e|=xt),e}function of(e,t,l){var n=t.pendingProps,a=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(ke.current&2)!==0),u&&(a=!0,t.flags&=-129),u=(t.flags&32)!==0,t.flags&=-33,e===null){if(de){if(a?ml(t):pl(),de){var c=Re,s;if(s=c){e:{for(s=c,c=jt;s.nodeType!==8;){if(!c){c=null;break e}if(s=_t(s.nextSibling),s===null){c=null;break e}}c=s}c!==null?(t.memoizedState={dehydrated:c,treeContext:jl!==null?{id:Wt,overflow:Jt}:null,retryLane:536870912,hydrationErrors:null},s=mt(18,null,null,0),s.stateNode=c,s.return=t,t.child=s,ut=t,Re=null,s=!0):s=!1}s||Gl(t)}if(c=t.memoizedState,c!==null&&(c=c.dehydrated,c!==null))return sr(c)?t.lanes=32:t.lanes=536870912,null;Pt(t)}return c=n.children,n=n.fallback,a?(pl(),a=t.mode,c=Hi({mode:"hidden",children:c},a),n=ql(n,a,l,null),c.return=t,n.return=t,c.sibling=n,t.child=c,a=t.child,a.memoizedState=Mc(l),a.childLanes=Oc(e,u,l),t.memoizedState=wc,n):(ml(t),Dc(t,c))}if(s=e.memoizedState,s!==null&&(c=s.dehydrated,c!==null)){if(i)t.flags&256?(ml(t),t.flags&=-257,t=xc(e,t,l)):t.memoizedState!==null?(pl(),t.child=e.child,t.flags|=128,t=null):(pl(),a=n.fallback,c=t.mode,n=Hi({mode:"visible",children:n.children},c),a=ql(a,c,l,null),a.flags|=2,n.return=t,a.return=t,n.sibling=a,t.child=n,An(t,e.child,null,l),n=t.child,n.memoizedState=Mc(l),n.childLanes=Oc(e,u,l),t.memoizedState=wc,t=a);else if(ml(t),sr(c)){if(u=c.nextSibling&&c.nextSibling.dataset,u)var y=u.dgst;u=y,n=Error(o(419)),n.stack="",n.digest=u,ta({value:n,source:null,stack:null}),t=xc(e,t,l)}else if(Ze||la(e,t,l,!1),u=(l&e.childLanes)!==0,Ze||u){if(u=we,u!==null&&(n=l&-l,n=(n&42)!==0?1:fu(n),n=(n&(u.suspendedLanes|l))!==0?0:n,n!==0&&n!==s.retryLane))throw s.retryLane=n,hn(e,n),St(u,e,n),Ps;c.data==="$?"||Kc(),t=xc(e,t,l)}else c.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=s.treeContext,Re=_t(c.nextSibling),ut=t,de=!0,kl=null,jt=!1,e!==null&&(Mt[Ot++]=Wt,Mt[Ot++]=Jt,Mt[Ot++]=jl,Wt=e.id,Jt=e.overflow,jl=t),t=Dc(t,n.children),t.flags|=4096);return t}return a?(pl(),a=n.fallback,c=t.mode,s=e.child,y=s.sibling,n=Kt(s,{mode:"hidden",children:n.children}),n.subtreeFlags=s.subtreeFlags&65011712,y!==null?a=Kt(y,a):(a=ql(a,c,l,null),a.flags|=2),a.return=t,n.return=t,n.sibling=a,t.child=n,n=a,a=t.child,c=e.child.memoizedState,c===null?c=Mc(l):(s=c.cachePool,s!==null?(y=Ye._currentValue,s=s.parent!==y?{parent:y,pool:y}:s):s=Wo(),c={baseLanes:c.baseLanes|l,cachePool:s}),a.memoizedState=c,a.childLanes=Oc(e,u,l),t.memoizedState=wc,n):(ml(t),l=e.child,e=l.sibling,l=Kt(l,{mode:"visible",children:n.children}),l.return=t,l.sibling=null,e!==null&&(u=t.deletions,u===null?(t.deletions=[e],t.flags|=16):u.push(e)),t.child=l,t.memoizedState=null,l)}function Dc(e,t){return t=Hi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Hi(e,t){return e=mt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function xc(e,t,l){return An(t,e.child,null,l),e=Dc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function sf(e,t,l){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Ku(e.return,t,l)}function Uc(e,t,l,n,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:l,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=l,i.tailMode=a)}function ff(e,t,l){var n=t.pendingProps,a=n.revealOrder,i=n.tail;if(Je(e,t,n.children,l),n=ke.current,(n&2)!==0)n=n&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&sf(e,l,t);else if(e.tag===19)sf(e,l,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}switch(R(ke,n),a){case"forwards":for(l=t.child,a=null;l!==null;)e=l.alternate,e!==null&&Oi(e)===null&&(a=l),l=l.sibling;l=a,l===null?(a=t.child,t.child=null):(a=l.sibling,l.sibling=null),Uc(t,!1,a,l,i);break;case"backwards":for(l=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Oi(e)===null){t.child=a;break}e=a.sibling,a.sibling=l,l=a,a=e}Uc(t,!0,l,null,i);break;case"together":Uc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function el(e,t,l){if(e!==null&&(t.dependencies=e.dependencies),Tl|=t.lanes,(l&t.childLanes)===0)if(e!==null){if(la(e,t,l,!1),(l&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,l=Kt(e,e.pendingProps),t.child=l,l.return=t;e.sibling!==null;)e=e.sibling,l=l.sibling=Kt(e,e.pendingProps),l.return=t;l.sibling=null}return t.child}function Hc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&fi(e)))}function Hg(e,t,l){switch(t.tag){case 3:U(t,t.stateNode.containerInfo),sl(t,Ye,e.memoizedState.cache),ea();break;case 27:case 5:_(t);break;case 4:U(t,t.stateNode.containerInfo);break;case 10:sl(t,t.type,t.memoizedProps.value);break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(ml(t),t.flags|=128,null):(l&t.child.childLanes)!==0?of(e,t,l):(ml(t),e=el(e,t,l),e!==null?e.sibling:null);ml(t);break;case 19:var a=(e.flags&128)!==0;if(n=(l&t.childLanes)!==0,n||(la(e,t,l,!1),n=(l&t.childLanes)!==0),a){if(n)return ff(e,t,l);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),R(ke,ke.current),n)break;return null;case 22:case 23:return t.lanes=0,nf(e,t,l);case 24:sl(t,Ye,e.memoizedState.cache)}return el(e,t,l)}function df(e,t,l){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ze=!0;else{if(!Hc(e,l)&&(t.flags&128)===0)return Ze=!1,Hg(e,t,l);Ze=(e.flags&131072)!==0}else Ze=!1,de&&(t.flags&1048576)!==0&&ko(t,si,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var n=t.elementType,a=n._init;if(n=a(n._payload),t.type=n,typeof n=="function")Yu(n)?(e=Kl(n,e),t.tag=1,t=cf(null,t,n,e,l)):(t.tag=0,t=Ac(null,t,n,e,l));else{if(n!=null){if(a=n.$$typeof,a===Oe){t.tag=11,t=ef(null,t,n,e,l);break e}else if(a===le){t.tag=14,t=tf(null,t,n,e,l);break e}}throw t=nt(n)||n,Error(o(306,t,""))}}return t;case 0:return Ac(e,t,t.type,t.pendingProps,l);case 1:return n=t.type,a=Kl(n,t.pendingProps),cf(e,t,n,a,l);case 3:e:{if(U(t,t.stateNode.containerInfo),e===null)throw Error(o(387));n=t.pendingProps;var i=t.memoizedState;a=i.element,ec(e,t),oa(t,n,null,l);var u=t.memoizedState;if(n=u.cache,sl(t,Ye,n),n!==i.cache&&Wu(t,[Ye],l,!0),ra(),n=u.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:u.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=rf(e,t,n,l);break e}else if(n!==a){a=At(Error(o(424)),t),ta(a),t=rf(e,t,n,l);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Re=_t(e.firstChild),ut=t,de=!0,kl=null,jt=!0,l=Vs(t,null,n,l),t.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(ea(),n===a){t=el(e,t,l);break e}Je(e,t,n,l)}t=t.child}return t;case 26:return Ui(e,t),e===null?(l=pd(t.type,null,t.pendingProps,null))?t.memoizedState=l:de||(l=t.type,e=t.pendingProps,n=Xi(J.current).createElement(l),n[Pe]=t,n[ct]=e,$e(n,l,e),Ve(n),t.stateNode=n):t.memoizedState=pd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return _(t),e===null&&de&&(n=t.stateNode=hd(t.type,t.pendingProps,J.current),ut=t,jt=!0,a=Re,wl(t.type)?(fr=a,Re=_t(n.firstChild)):Re=a),Je(e,t,t.pendingProps.children,l),Ui(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&de&&((a=n=Re)&&(n=im(n,t.type,t.pendingProps,jt),n!==null?(t.stateNode=n,ut=t,Re=_t(n.firstChild),jt=!1,a=!0):a=!1),a||Gl(t)),_(t),a=t.type,i=t.pendingProps,u=e!==null?e.memoizedProps:null,n=i.children,cr(a,i)?n=null:u!==null&&cr(a,u)&&(t.flags|=32),t.memoizedState!==null&&(a=uc(e,t,Eg,null,null,l),Ha._currentValue=a),Ui(e,t),Je(e,t,n,l),t.child;case 6:return e===null&&de&&((e=l=Re)&&(l=um(l,t.pendingProps,jt),l!==null?(t.stateNode=l,ut=t,Re=null,e=!0):e=!1),e||Gl(t)),null;case 13:return of(e,t,l);case 4:return U(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=An(t,null,n,l):Je(e,t,n,l),t.child;case 11:return ef(e,t,t.type,t.pendingProps,l);case 7:return Je(e,t,t.pendingProps,l),t.child;case 8:return Je(e,t,t.pendingProps.children,l),t.child;case 12:return Je(e,t,t.pendingProps.children,l),t.child;case 10:return n=t.pendingProps,sl(t,t.type,n.value),Je(e,t,n.children,l),t.child;case 9:return a=t.type._context,n=t.pendingProps.children,Zl(t),a=et(a),n=n(a),t.flags|=1,Je(e,t,n,l),t.child;case 14:return tf(e,t,t.type,t.pendingProps,l);case 15:return lf(e,t,t.type,t.pendingProps,l);case 19:return ff(e,t,l);case 31:return n=t.pendingProps,l=t.mode,n={mode:n.mode,children:n.children},e===null?(l=Hi(n,l),l.ref=t.ref,t.child=l,l.return=t,t=l):(l=Kt(e.child,n),l.ref=t.ref,t.child=l,l.return=t,t=l),t;case 22:return nf(e,t,l);case 24:return Zl(t),n=et(Ye),e===null?(a=$u(),a===null&&(a=we,i=Ju(),a.pooledCache=i,i.refCount++,i!==null&&(a.pooledCacheLanes|=l),a=i),t.memoizedState={parent:n,cache:a},Pu(t),sl(t,Ye,a)):((e.lanes&l)!==0&&(ec(e,t),oa(t,null,null,l),ra()),a=e.memoizedState,i=t.memoizedState,a.parent!==n?(a={parent:n,cache:n},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),sl(t,Ye,n)):(n=i.cache,sl(t,Ye,n),n!==a.cache&&Wu(t,[Ye],l,!0))),Je(e,t,t.pendingProps.children,l),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function tl(e){e.flags|=4}function hf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Td(t)){if(t=Dt.current,t!==null&&((re&4194048)===re?Yt!==null:(re&62914560)!==re&&(re&536870912)===0||t!==Yt))throw ua=Iu,Jo;e.flags|=8192}}function Ri(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Vr():536870912,e.lanes|=t,Dn|=t)}function pa(e,t){if(!de)switch(e.tailMode){case"hidden":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?e.tail=null:l.sibling=null;break;case"collapsed":l=e.tail;for(var n=null;l!==null;)l.alternate!==null&&(n=l),l=l.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function He(e){var t=e.alternate!==null&&e.alternate.child===e.child,l=0,n=0;if(t)for(var a=e.child;a!==null;)l|=a.lanes|a.childLanes,n|=a.subtreeFlags&65011712,n|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)l|=a.lanes|a.childLanes,n|=a.subtreeFlags,n|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=n,e.childLanes=l,t}function Rg(e,t,l){var n=t.pendingProps;switch(Zu(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return He(t),null;case 1:return He(t),null;case 3:return l=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),$t(Ye),D(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(Pn(t)?tl(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Zo())),He(t),null;case 26:return l=t.memoizedState,e===null?(tl(t),l!==null?(He(t),hf(t,l)):(He(t),t.flags&=-16777217)):l?l!==e.memoizedState?(tl(t),He(t),hf(t,l)):(He(t),t.flags&=-16777217):(e.memoizedProps!==n&&tl(t),He(t),t.flags&=-16777217),null;case 27:Y(t),l=J.current;var a=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==n&&tl(t);else{if(!n){if(t.stateNode===null)throw Error(o(166));return He(t),null}e=q.current,Pn(t)?Go(t):(e=hd(a,n,l),t.stateNode=e,tl(t))}return He(t),null;case 5:if(Y(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&tl(t);else{if(!n){if(t.stateNode===null)throw Error(o(166));return He(t),null}if(e=q.current,Pn(t))Go(t);else{switch(a=Xi(J.current),e){case 1:e=a.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:e=a.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":e=a.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":e=a.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof n.is=="string"?a.createElement("select",{is:n.is}):a.createElement("select"),n.multiple?e.multiple=!0:n.size&&(e.size=n.size);break;default:e=typeof n.is=="string"?a.createElement(l,{is:n.is}):a.createElement(l)}}e[Pe]=t,e[ct]=n;e:for(a=t.child;a!==null;){if(a.tag===5||a.tag===6)e.appendChild(a.stateNode);else if(a.tag!==4&&a.tag!==27&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break e;for(;a.sibling===null;){if(a.return===null||a.return===t)break e;a=a.return}a.sibling.return=a.return,a=a.sibling}t.stateNode=e;e:switch($e(e,l,n),l){case"button":case"input":case"select":case"textarea":e=!!n.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&tl(t)}}return He(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&tl(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(o(166));if(e=J.current,Pn(t)){if(e=t.stateNode,l=t.memoizedProps,n=null,a=ut,a!==null)switch(a.tag){case 27:case 5:n=a.memoizedProps}e[Pe]=t,e=!!(e.nodeValue===l||n!==null&&n.suppressHydrationWarning===!0||ud(e.nodeValue,l)),e||Gl(t)}else e=Xi(e).createTextNode(n),e[Pe]=t,t.stateNode=e}return He(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Pn(t),n!==null&&n.dehydrated!==null){if(e===null){if(!a)throw Error(o(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(o(317));a[Pe]=t}else ea(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;He(t),a=!1}else a=Zo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(Pt(t),t):(Pt(t),null)}if(Pt(t),(t.flags&128)!==0)return t.lanes=l,t;if(l=n!==null,e=e!==null&&e.memoizedState!==null,l){n=t.child,a=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(a=n.alternate.memoizedState.cachePool.pool);var i=null;n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(i=n.memoizedState.cachePool.pool),i!==a&&(n.flags|=2048)}return l!==e&&l&&(t.child.flags|=8192),Ri(t,t.updateQueue),He(t),null;case 4:return D(),e===null&&lr(t.stateNode.containerInfo),He(t),null;case 10:return $t(t.type),He(t),null;case 19:if(H(ke),a=t.memoizedState,a===null)return He(t),null;if(n=(t.flags&128)!==0,i=a.rendering,i===null)if(n)pa(a,!1);else{if(Be!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Oi(e),i!==null){for(t.flags|=128,pa(a,!1),e=i.updateQueue,t.updateQueue=e,Ri(t,e),t.subtreeFlags=0,e=l,l=t.child;l!==null;)Yo(l,e),l=l.sibling;return R(ke,ke.current&1|2),t.child}e=e.sibling}a.tail!==null&&it()>Ni&&(t.flags|=128,n=!0,pa(a,!1),t.lanes=4194304)}else{if(!n)if(e=Oi(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Ri(t,e),pa(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!de)return He(t),null}else 2*it()-a.renderingStartTime>Ni&&l!==536870912&&(t.flags|=128,n=!0,pa(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(e=a.last,e!==null?e.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=it(),t.sibling=null,e=ke.current,R(ke,n?e&1|2:e&1),t):(He(t),null);case 22:case 23:return Pt(t),ac(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(l&536870912)!==0&&(t.flags&128)===0&&(He(t),t.subtreeFlags&6&&(t.flags|=8192)):He(t),l=t.updateQueue,l!==null&&Ri(t,l.retryQueue),l=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==l&&(t.flags|=2048),e!==null&&H(Xl),null;case 24:return l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),$t(Ye),He(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function Bg(e,t){switch(Zu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return $t(Ye),D(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Y(t),null;case 13:if(Pt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));ea()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return H(ke),null;case 4:return D(),null;case 10:return $t(t.type),null;case 22:case 23:return Pt(t),ac(),e!==null&&H(Xl),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return $t(Ye),null;case 25:return null;default:return null}}function gf(e,t){switch(Zu(t),t.tag){case 3:$t(Ye),D();break;case 26:case 27:case 5:Y(t);break;case 4:D();break;case 13:Pt(t);break;case 19:H(ke);break;case 10:$t(t.type);break;case 22:case 23:Pt(t),ac(),e!==null&&H(Xl);break;case 24:$t(Ye)}}function ya(e,t){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var a=n.next;l=a;do{if((l.tag&e)===e){n=void 0;var i=l.create,u=l.inst;n=i(),u.destroy=n}l=l.next}while(l!==a)}}catch(c){ze(t,t.return,c)}}function yl(e,t,l){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var i=a.next;n=i;do{if((n.tag&e)===e){var u=n.inst,c=u.destroy;if(c!==void 0){u.destroy=void 0,a=t;var s=l,y=c;try{y()}catch(E){ze(a,s,E)}}}n=n.next}while(n!==i)}}catch(E){ze(t,t.return,E)}}function mf(e){var t=e.updateQueue;if(t!==null){var l=e.stateNode;try{ts(t,l)}catch(n){ze(e,e.return,n)}}}function pf(e,t,l){l.props=Kl(e.type,e.memoizedProps),l.state=e.memoizedState;try{l.componentWillUnmount()}catch(n){ze(e,t,n)}}function ba(e,t){try{var l=e.ref;if(l!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof l=="function"?e.refCleanup=l(n):l.current=n}}catch(a){ze(e,t,a)}}function kt(e,t){var l=e.ref,n=e.refCleanup;if(l!==null)if(typeof n=="function")try{n()}catch(a){ze(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(a){ze(e,t,a)}else l.current=null}function yf(e){var t=e.type,l=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break e;case"img":l.src?n.src=l.src:l.srcSet&&(n.srcset=l.srcSet)}}catch(a){ze(e,e.return,a)}}function Rc(e,t,l){try{var n=e.stateNode;em(n,e.type,l,t),n[ct]=t}catch(a){ze(e,e.return,a)}}function bf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&wl(e.type)||e.tag===4}function Bc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||bf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&wl(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function _c(e,t,l){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(e,t):(t=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,t.appendChild(e),l=l._reactRootContainer,l!=null||t.onclick!==null||(t.onclick=Zi));else if(n!==4&&(n===27&&wl(e.type)&&(l=e.stateNode,t=null),e=e.child,e!==null))for(_c(e,t,l),e=e.sibling;e!==null;)_c(e,t,l),e=e.sibling}function Bi(e,t,l){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?l.insertBefore(e,t):l.appendChild(e);else if(n!==4&&(n===27&&wl(e.type)&&(l=e.stateNode),e=e.child,e!==null))for(Bi(e,t,l),e=e.sibling;e!==null;)Bi(e,t,l),e=e.sibling}function vf(e){var t=e.stateNode,l=e.memoizedProps;try{for(var n=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);$e(t,n,l),t[Pe]=e,t[ct]=l}catch(i){ze(e,e.return,i)}}var ll=!1,Le=!1,Nc=!1,Sf=typeof WeakSet=="function"?WeakSet:Set,Xe=null;function _g(e,t){if(e=e.containerInfo,ir=$i,e=Uo(e),Bu(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var n=l.getSelection&&l.getSelection();if(n&&n.rangeCount!==0){l=n.anchorNode;var a=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{l.nodeType,i.nodeType}catch{l=null;break e}var u=0,c=-1,s=-1,y=0,E=0,M=e,b=null;t:for(;;){for(var v;M!==l||a!==0&&M.nodeType!==3||(c=u+a),M!==i||n!==0&&M.nodeType!==3||(s=u+n),M.nodeType===3&&(u+=M.nodeValue.length),(v=M.firstChild)!==null;)b=M,M=v;for(;;){if(M===e)break t;if(b===l&&++y===a&&(c=u),b===i&&++E===n&&(s=u),(v=M.nextSibling)!==null)break;M=b,b=M.parentNode}M=v}l=c===-1||s===-1?null:{start:c,end:s}}else l=null}l=l||{start:0,end:0}}else l=null;for(ur={focusedElem:e,selectionRange:l},$i=!1,Xe=t;Xe!==null;)if(t=Xe,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Xe=e;else for(;Xe!==null;){switch(t=Xe,i=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,l=t,a=i.memoizedProps,i=i.memoizedState,n=l.stateNode;try{var K=Kl(l.type,a,l.elementType===l.type);e=n.getSnapshotBeforeUpdate(K,i),n.__reactInternalSnapshotBeforeUpdate=e}catch(Z){ze(l,l.return,Z)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,l=e.nodeType,l===9)or(e);else if(l===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":or(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,Xe=e;break}Xe=t.return}}function Tf(e,t,l){var n=l.flags;switch(l.tag){case 0:case 11:case 15:bl(e,l),n&4&&ya(5,l);break;case 1:if(bl(e,l),n&4)if(e=l.stateNode,t===null)try{e.componentDidMount()}catch(u){ze(l,l.return,u)}else{var a=Kl(l.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(u){ze(l,l.return,u)}}n&64&&mf(l),n&512&&ba(l,l.return);break;case 3:if(bl(e,l),n&64&&(e=l.updateQueue,e!==null)){if(t=null,l.child!==null)switch(l.child.tag){case 27:case 5:t=l.child.stateNode;break;case 1:t=l.child.stateNode}try{ts(e,t)}catch(u){ze(l,l.return,u)}}break;case 27:t===null&&n&4&&vf(l);case 26:case 5:bl(e,l),t===null&&n&4&&yf(l),n&512&&ba(l,l.return);break;case 12:bl(e,l);break;case 13:bl(e,l),n&4&&Af(e,l),n&64&&(e=l.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(l=Vg.bind(null,l),cm(e,l))));break;case 22:if(n=l.memoizedState!==null||ll,!n){t=t!==null&&t.memoizedState!==null||Le,a=ll;var i=Le;ll=n,(Le=t)&&!i?vl(e,l,(l.subtreeFlags&8772)!==0):bl(e,l),ll=a,Le=i}break;case 30:break;default:bl(e,l)}}function zf(e){var t=e.alternate;t!==null&&(e.alternate=null,zf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&gu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var xe=null,st=!1;function nl(e,t,l){for(l=l.child;l!==null;)Ef(e,t,l),l=l.sibling}function Ef(e,t,l){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(jn,l)}catch{}switch(l.tag){case 26:Le||kt(l,t),nl(e,t,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Le||kt(l,t);var n=xe,a=st;wl(l.type)&&(xe=l.stateNode,st=!1),nl(e,t,l),Oa(l.stateNode),xe=n,st=a;break;case 5:Le||kt(l,t);case 6:if(n=xe,a=st,xe=null,nl(e,t,l),xe=n,st=a,xe!==null)if(st)try{(xe.nodeType===9?xe.body:xe.nodeName==="HTML"?xe.ownerDocument.body:xe).removeChild(l.stateNode)}catch(i){ze(l,t,i)}else try{xe.removeChild(l.stateNode)}catch(i){ze(l,t,i)}break;case 18:xe!==null&&(st?(e=xe,fd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.stateNode),Na(e)):fd(xe,l.stateNode));break;case 4:n=xe,a=st,xe=l.stateNode.containerInfo,st=!0,nl(e,t,l),xe=n,st=a;break;case 0:case 11:case 14:case 15:Le||yl(2,l,t),Le||yl(4,l,t),nl(e,t,l);break;case 1:Le||(kt(l,t),n=l.stateNode,typeof n.componentWillUnmount=="function"&&pf(l,t,n)),nl(e,t,l);break;case 21:nl(e,t,l);break;case 22:Le=(n=Le)||l.memoizedState!==null,nl(e,t,l),Le=n;break;default:nl(e,t,l)}}function Af(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Na(e)}catch(l){ze(t,t.return,l)}}function Ng(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Sf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Sf),t;default:throw Error(o(435,e.tag))}}function Lc(e,t){var l=Ng(e);t.forEach(function(n){var a=Zg.bind(null,e,n);l.has(n)||(l.add(n),n.then(a,a))})}function pt(e,t){var l=t.deletions;if(l!==null)for(var n=0;n<l.length;n++){var a=l[n],i=e,u=t,c=u;e:for(;c!==null;){switch(c.tag){case 27:if(wl(c.type)){xe=c.stateNode,st=!1;break e}break;case 5:xe=c.stateNode,st=!1;break e;case 3:case 4:xe=c.stateNode.containerInfo,st=!0;break e}c=c.return}if(xe===null)throw Error(o(160));Ef(i,u,a),xe=null,st=!1,i=a.alternate,i!==null&&(i.return=null),a.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)wf(t,e),t=t.sibling}var Bt=null;function wf(e,t){var l=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:pt(t,e),yt(e),n&4&&(yl(3,e,e.return),ya(3,e),yl(5,e,e.return));break;case 1:pt(t,e),yt(e),n&512&&(Le||l===null||kt(l,l.return)),n&64&&ll&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(l=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=l===null?n:l.concat(n))));break;case 26:var a=Bt;if(pt(t,e),yt(e),n&512&&(Le||l===null||kt(l,l.return)),n&4){var i=l!==null?l.memoizedState:null;if(n=e.memoizedState,l===null)if(n===null)if(e.stateNode===null){e:{n=e.type,l=e.memoizedProps,a=a.ownerDocument||a;t:switch(n){case"title":i=a.getElementsByTagName("title")[0],(!i||i[Gn]||i[Pe]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=a.createElement(n),a.head.insertBefore(i,a.querySelector("head > title"))),$e(i,n,l),i[Pe]=e,Ve(i),n=i;break e;case"link":var u=vd("link","href",a).get(n+(l.href||""));if(u){for(var c=0;c<u.length;c++)if(i=u[c],i.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&i.getAttribute("rel")===(l.rel==null?null:l.rel)&&i.getAttribute("title")===(l.title==null?null:l.title)&&i.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){u.splice(c,1);break t}}i=a.createElement(n),$e(i,n,l),a.head.appendChild(i);break;case"meta":if(u=vd("meta","content",a).get(n+(l.content||""))){for(c=0;c<u.length;c++)if(i=u[c],i.getAttribute("content")===(l.content==null?null:""+l.content)&&i.getAttribute("name")===(l.name==null?null:l.name)&&i.getAttribute("property")===(l.property==null?null:l.property)&&i.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&i.getAttribute("charset")===(l.charSet==null?null:l.charSet)){u.splice(c,1);break t}}i=a.createElement(n),$e(i,n,l),a.head.appendChild(i);break;default:throw Error(o(468,n))}i[Pe]=e,Ve(i),n=i}e.stateNode=n}else Sd(a,e.type,e.stateNode);else e.stateNode=bd(a,n,e.memoizedProps);else i!==n?(i===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):i.count--,n===null?Sd(a,e.type,e.stateNode):bd(a,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Rc(e,e.memoizedProps,l.memoizedProps)}break;case 27:pt(t,e),yt(e),n&512&&(Le||l===null||kt(l,l.return)),l!==null&&n&4&&Rc(e,e.memoizedProps,l.memoizedProps);break;case 5:if(pt(t,e),yt(e),n&512&&(Le||l===null||kt(l,l.return)),e.flags&32){a=e.stateNode;try{un(a,"")}catch(v){ze(e,e.return,v)}}n&4&&e.stateNode!=null&&(a=e.memoizedProps,Rc(e,a,l!==null?l.memoizedProps:a)),n&1024&&(Nc=!0);break;case 6:if(pt(t,e),yt(e),n&4){if(e.stateNode===null)throw Error(o(162));n=e.memoizedProps,l=e.stateNode;try{l.nodeValue=n}catch(v){ze(e,e.return,v)}}break;case 3:if(Wi=null,a=Bt,Bt=Qi(t.containerInfo),pt(t,e),Bt=a,yt(e),n&4&&l!==null&&l.memoizedState.isDehydrated)try{Na(t.containerInfo)}catch(v){ze(e,e.return,v)}Nc&&(Nc=!1,Mf(e));break;case 4:n=Bt,Bt=Qi(e.stateNode.containerInfo),pt(t,e),yt(e),Bt=n;break;case 12:pt(t,e),yt(e);break;case 13:pt(t,e),yt(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Gc=it()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Lc(e,n)));break;case 22:a=e.memoizedState!==null;var s=l!==null&&l.memoizedState!==null,y=ll,E=Le;if(ll=y||a,Le=E||s,pt(t,e),Le=E,ll=y,yt(e),n&8192)e:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(l===null||s||ll||Le||Wl(e)),l=null,t=e;;){if(t.tag===5||t.tag===26){if(l===null){s=l=t;try{if(i=s.stateNode,a)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{c=s.stateNode;var M=s.memoizedProps.style,b=M!=null&&M.hasOwnProperty("display")?M.display:null;c.style.display=b==null||typeof b=="boolean"?"":(""+b).trim()}}catch(v){ze(s,s.return,v)}}}else if(t.tag===6){if(l===null){s=t;try{s.stateNode.nodeValue=a?"":s.memoizedProps}catch(v){ze(s,s.return,v)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;l===t&&(l=null),t=t.return}l===t&&(l=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(l=n.retryQueue,l!==null&&(n.retryQueue=null,Lc(e,l))));break;case 19:pt(t,e),yt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Lc(e,n)));break;case 30:break;case 21:break;default:pt(t,e),yt(e)}}function yt(e){var t=e.flags;if(t&2){try{for(var l,n=e.return;n!==null;){if(bf(n)){l=n;break}n=n.return}if(l==null)throw Error(o(160));switch(l.tag){case 27:var a=l.stateNode,i=Bc(e);Bi(e,i,a);break;case 5:var u=l.stateNode;l.flags&32&&(un(u,""),l.flags&=-33);var c=Bc(e);Bi(e,c,u);break;case 3:case 4:var s=l.stateNode.containerInfo,y=Bc(e);_c(e,y,s);break;default:throw Error(o(161))}}catch(E){ze(e,e.return,E)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Mf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Mf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function bl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Tf(e,t.alternate,t),t=t.sibling}function Wl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:yl(4,t,t.return),Wl(t);break;case 1:kt(t,t.return);var l=t.stateNode;typeof l.componentWillUnmount=="function"&&pf(t,t.return,l),Wl(t);break;case 27:Oa(t.stateNode);case 26:case 5:kt(t,t.return),Wl(t);break;case 22:t.memoizedState===null&&Wl(t);break;case 30:Wl(t);break;default:Wl(t)}e=e.sibling}}function vl(e,t,l){for(l=l&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,a=e,i=t,u=i.flags;switch(i.tag){case 0:case 11:case 15:vl(a,i,l),ya(4,i);break;case 1:if(vl(a,i,l),n=i,a=n.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(y){ze(n,n.return,y)}if(n=i,a=n.updateQueue,a!==null){var c=n.stateNode;try{var s=a.shared.hiddenCallbacks;if(s!==null)for(a.shared.hiddenCallbacks=null,a=0;a<s.length;a++)es(s[a],c)}catch(y){ze(n,n.return,y)}}l&&u&64&&mf(i),ba(i,i.return);break;case 27:vf(i);case 26:case 5:vl(a,i,l),l&&n===null&&u&4&&yf(i),ba(i,i.return);break;case 12:vl(a,i,l);break;case 13:vl(a,i,l),l&&u&4&&Af(a,i);break;case 22:i.memoizedState===null&&vl(a,i,l),ba(i,i.return);break;case 30:break;default:vl(a,i,l)}t=t.sibling}}function Cc(e,t){var l=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==l&&(e!=null&&e.refCount++,l!=null&&na(l))}function qc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&na(e))}function Gt(e,t,l,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Of(e,t,l,n),t=t.sibling}function Of(e,t,l,n){var a=t.flags;switch(t.tag){case 0:case 11:case 15:Gt(e,t,l,n),a&2048&&ya(9,t);break;case 1:Gt(e,t,l,n);break;case 3:Gt(e,t,l,n),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&na(e)));break;case 12:if(a&2048){Gt(e,t,l,n),e=t.stateNode;try{var i=t.memoizedProps,u=i.id,c=i.onPostCommit;typeof c=="function"&&c(u,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(s){ze(t,t.return,s)}}else Gt(e,t,l,n);break;case 13:Gt(e,t,l,n);break;case 23:break;case 22:i=t.stateNode,u=t.alternate,t.memoizedState!==null?i._visibility&2?Gt(e,t,l,n):va(e,t):i._visibility&2?Gt(e,t,l,n):(i._visibility|=2,wn(e,t,l,n,(t.subtreeFlags&10256)!==0)),a&2048&&Cc(u,t);break;case 24:Gt(e,t,l,n),a&2048&&qc(t.alternate,t);break;default:Gt(e,t,l,n)}}function wn(e,t,l,n,a){for(a=a&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var i=e,u=t,c=l,s=n,y=u.flags;switch(u.tag){case 0:case 11:case 15:wn(i,u,c,s,a),ya(8,u);break;case 23:break;case 22:var E=u.stateNode;u.memoizedState!==null?E._visibility&2?wn(i,u,c,s,a):va(i,u):(E._visibility|=2,wn(i,u,c,s,a)),a&&y&2048&&Cc(u.alternate,u);break;case 24:wn(i,u,c,s,a),a&&y&2048&&qc(u.alternate,u);break;default:wn(i,u,c,s,a)}t=t.sibling}}function va(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var l=e,n=t,a=n.flags;switch(n.tag){case 22:va(l,n),a&2048&&Cc(n.alternate,n);break;case 24:va(l,n),a&2048&&qc(n.alternate,n);break;default:va(l,n)}t=t.sibling}}var Sa=8192;function Mn(e){if(e.subtreeFlags&Sa)for(e=e.child;e!==null;)Df(e),e=e.sibling}function Df(e){switch(e.tag){case 26:Mn(e),e.flags&Sa&&e.memoizedState!==null&&Sm(Bt,e.memoizedState,e.memoizedProps);break;case 5:Mn(e);break;case 3:case 4:var t=Bt;Bt=Qi(e.stateNode.containerInfo),Mn(e),Bt=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Sa,Sa=16777216,Mn(e),Sa=t):Mn(e));break;default:Mn(e)}}function xf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ta(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var n=t[l];Xe=n,Hf(n,e)}xf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Uf(e),e=e.sibling}function Uf(e){switch(e.tag){case 0:case 11:case 15:Ta(e),e.flags&2048&&yl(9,e,e.return);break;case 3:Ta(e);break;case 12:Ta(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,_i(e)):Ta(e);break;default:Ta(e)}}function _i(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var n=t[l];Xe=n,Hf(n,e)}xf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:yl(8,t,t.return),_i(t);break;case 22:l=t.stateNode,l._visibility&2&&(l._visibility&=-3,_i(t));break;default:_i(t)}e=e.sibling}}function Hf(e,t){for(;Xe!==null;){var l=Xe;switch(l.tag){case 0:case 11:case 15:yl(8,l,t);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var n=l.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:na(l.memoizedState.cache)}if(n=l.child,n!==null)n.return=l,Xe=n;else e:for(l=e;Xe!==null;){n=Xe;var a=n.sibling,i=n.return;if(zf(n),n===l){Xe=null;break e}if(a!==null){a.return=i,Xe=a;break e}Xe=i}}}var Lg={getCacheForType:function(e){var t=et(Ye),l=t.data.get(e);return l===void 0&&(l=e(),t.data.set(e,l)),l}},Cg=typeof WeakMap=="function"?WeakMap:Map,ge=0,we=null,ne=null,re=0,me=0,bt=null,Sl=!1,On=!1,jc=!1,al=0,Be=0,Tl=0,Jl=0,Yc=0,xt=0,Dn=0,za=null,ft=null,kc=!1,Gc=0,Ni=1/0,Li=null,zl=null,Fe=0,El=null,xn=null,Un=0,Vc=0,Zc=null,Rf=null,Ea=0,Xc=null;function vt(){if((ge&2)!==0&&re!==0)return re&-re;if(T.T!==null){var e=yn;return e!==0?e:Ic()}return Qr()}function Bf(){xt===0&&(xt=(re&536870912)===0||de?Gr():536870912);var e=Dt.current;return e!==null&&(e.flags|=32),xt}function St(e,t,l){(e===we&&(me===2||me===9)||e.cancelPendingCommit!==null)&&(Hn(e,0),Al(e,re,xt,!1)),kn(e,l),((ge&2)===0||e!==we)&&(e===we&&((ge&2)===0&&(Jl|=l),Be===4&&Al(e,re,xt,!1)),Vt(e))}function _f(e,t,l){if((ge&6)!==0)throw Error(o(327));var n=!l&&(t&124)===0&&(t&e.expiredLanes)===0||Yn(e,t),a=n?Yg(e,t):Wc(e,t,!0),i=n;do{if(a===0){On&&!n&&Al(e,t,0,!1);break}else{if(l=e.current.alternate,i&&!qg(l)){a=Wc(e,t,!1),i=!1;continue}if(a===2){if(i=t,e.errorRecoveryDisabledLanes&i)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){t=u;e:{var c=e;a=za;var s=c.current.memoizedState.isDehydrated;if(s&&(Hn(c,u).flags|=256),u=Wc(c,u,!1),u!==2){if(jc&&!s){c.errorRecoveryDisabledLanes|=i,Jl|=i,a=4;break e}i=ft,ft=a,i!==null&&(ft===null?ft=i:ft.push.apply(ft,i))}a=u}if(i=!1,a!==2)continue}}if(a===1){Hn(e,0),Al(e,t,0,!0);break}e:{switch(n=e,i=a,i){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:Al(n,t,xt,!Sl);break e;case 2:ft=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(a=Gc+300-it(),10<a)){if(Al(n,t,xt,!Sl),Ka(n,0,!0)!==0)break e;n.timeoutHandle=od(Nf.bind(null,n,l,ft,Li,kc,t,xt,Jl,Dn,Sl,i,2,-0,0),a);break e}Nf(n,l,ft,Li,kc,t,xt,Jl,Dn,Sl,i,0,-0,0)}}break}while(!0);Vt(e)}function Nf(e,t,l,n,a,i,u,c,s,y,E,M,b,v){if(e.timeoutHandle=-1,M=t.subtreeFlags,(M&8192||(M&16785408)===16785408)&&(Ua={stylesheets:null,count:0,unsuspend:vm},Df(t),M=Tm(),M!==null)){e.cancelPendingCommit=M(Gf.bind(null,e,t,i,l,n,a,u,c,s,E,1,b,v)),Al(e,i,u,!y);return}Gf(e,t,i,l,n,a,u,c,s)}function qg(e){for(var t=e;;){var l=t.tag;if((l===0||l===11||l===15)&&t.flags&16384&&(l=t.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var n=0;n<l.length;n++){var a=l[n],i=a.getSnapshot;a=a.value;try{if(!gt(i(),a))return!1}catch{return!1}}if(l=t.child,t.subtreeFlags&16384&&l!==null)l.return=t,t=l;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Al(e,t,l,n){t&=~Yc,t&=~Jl,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var a=t;0<a;){var i=31-ht(a),u=1<<i;n[i]=-1,a&=~u}l!==0&&Zr(e,l,t)}function Ci(){return(ge&6)===0?(Aa(0),!1):!0}function Qc(){if(ne!==null){if(me===0)var e=ne.return;else e=ne,Ft=Vl=null,oc(e),En=null,ga=0,e=ne;for(;e!==null;)gf(e.alternate,e),e=e.return;ne=null}}function Hn(e,t){var l=e.timeoutHandle;l!==-1&&(e.timeoutHandle=-1,lm(l)),l=e.cancelPendingCommit,l!==null&&(e.cancelPendingCommit=null,l()),Qc(),we=e,ne=l=Kt(e.current,null),re=t,me=0,bt=null,Sl=!1,On=Yn(e,t),jc=!1,Dn=xt=Yc=Jl=Tl=Be=0,ft=za=null,kc=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var a=31-ht(n),i=1<<a;t|=e[a],n&=~i}return al=t,ii(),l}function Lf(e,t){P=null,T.H=Ai,t===ia||t===gi?(t=Io(),me=3):t===Jo?(t=Io(),me=4):me=t===Ps?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,bt=t,ne===null&&(Be=1,xi(e,At(t,e.current)))}function Cf(){var e=T.H;return T.H=Ai,e===null?Ai:e}function qf(){var e=T.A;return T.A=Lg,e}function Kc(){Be=4,Sl||(re&4194048)!==re&&Dt.current!==null||(On=!0),(Tl&134217727)===0&&(Jl&134217727)===0||we===null||Al(we,re,xt,!1)}function Wc(e,t,l){var n=ge;ge|=2;var a=Cf(),i=qf();(we!==e||re!==t)&&(Li=null,Hn(e,t)),t=!1;var u=Be;e:do try{if(me!==0&&ne!==null){var c=ne,s=bt;switch(me){case 8:Qc(),u=6;break e;case 3:case 2:case 9:case 6:Dt.current===null&&(t=!0);var y=me;if(me=0,bt=null,Rn(e,c,s,y),l&&On){u=0;break e}break;default:y=me,me=0,bt=null,Rn(e,c,s,y)}}jg(),u=Be;break}catch(E){Lf(e,E)}while(!0);return t&&e.shellSuspendCounter++,Ft=Vl=null,ge=n,T.H=a,T.A=i,ne===null&&(we=null,re=0,ii()),u}function jg(){for(;ne!==null;)jf(ne)}function Yg(e,t){var l=ge;ge|=2;var n=Cf(),a=qf();we!==e||re!==t?(Li=null,Ni=it()+500,Hn(e,t)):On=Yn(e,t);e:do try{if(me!==0&&ne!==null){t=ne;var i=bt;t:switch(me){case 1:me=0,bt=null,Rn(e,t,i,1);break;case 2:case 9:if(Fo(i)){me=0,bt=null,Yf(t);break}t=function(){me!==2&&me!==9||we!==e||(me=7),Vt(e)},i.then(t,t);break e;case 3:me=7;break e;case 4:me=5;break e;case 7:Fo(i)?(me=0,bt=null,Yf(t)):(me=0,bt=null,Rn(e,t,i,7));break;case 5:var u=null;switch(ne.tag){case 26:u=ne.memoizedState;case 5:case 27:var c=ne;if(!u||Td(u)){me=0,bt=null;var s=c.sibling;if(s!==null)ne=s;else{var y=c.return;y!==null?(ne=y,qi(y)):ne=null}break t}}me=0,bt=null,Rn(e,t,i,5);break;case 6:me=0,bt=null,Rn(e,t,i,6);break;case 8:Qc(),Be=6;break e;default:throw Error(o(462))}}kg();break}catch(E){Lf(e,E)}while(!0);return Ft=Vl=null,T.H=n,T.A=a,ge=l,ne!==null?0:(we=null,re=0,ii(),Be)}function kg(){for(;ne!==null&&!Zt();)jf(ne)}function jf(e){var t=df(e.alternate,e,al);e.memoizedProps=e.pendingProps,t===null?qi(e):ne=t}function Yf(e){var t=e,l=t.alternate;switch(t.tag){case 15:case 0:t=uf(l,t,t.pendingProps,t.type,void 0,re);break;case 11:t=uf(l,t,t.pendingProps,t.type.render,t.ref,re);break;case 5:oc(t);default:gf(l,t),t=ne=Yo(t,al),t=df(l,t,al)}e.memoizedProps=e.pendingProps,t===null?qi(e):ne=t}function Rn(e,t,l,n){Ft=Vl=null,oc(t),En=null,ga=0;var a=t.return;try{if(Ug(e,a,t,l,re)){Be=1,xi(e,At(l,e.current)),ne=null;return}}catch(i){if(a!==null)throw ne=a,i;Be=1,xi(e,At(l,e.current)),ne=null;return}t.flags&32768?(de||n===1?e=!0:On||(re&536870912)!==0?e=!1:(Sl=e=!0,(n===2||n===9||n===3||n===6)&&(n=Dt.current,n!==null&&n.tag===13&&(n.flags|=16384))),kf(t,e)):qi(t)}function qi(e){var t=e;do{if((t.flags&32768)!==0){kf(t,Sl);return}e=t.return;var l=Rg(t.alternate,t,al);if(l!==null){ne=l;return}if(t=t.sibling,t!==null){ne=t;return}ne=t=e}while(t!==null);Be===0&&(Be=5)}function kf(e,t){do{var l=Bg(e.alternate,e);if(l!==null){l.flags&=32767,ne=l;return}if(l=e.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!t&&(e=e.sibling,e!==null)){ne=e;return}ne=e=l}while(e!==null);Be=6,ne=null}function Gf(e,t,l,n,a,i,u,c,s){e.cancelPendingCommit=null;do ji();while(Fe!==0);if((ge&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(i=t.lanes|t.childLanes,i|=qu,vh(e,l,i,u,c,s),e===we&&(ne=we=null,re=0),xn=t,El=e,Un=l,Vc=i,Zc=a,Rf=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Xg(Za,function(){return Kf(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=T.T,T.T=null,a=B.p,B.p=2,u=ge,ge|=4;try{_g(e,t,l)}finally{ge=u,B.p=a,T.T=n}}Fe=1,Vf(),Zf(),Xf()}}function Vf(){if(Fe===1){Fe=0;var e=El,t=xn,l=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||l){l=T.T,T.T=null;var n=B.p;B.p=2;var a=ge;ge|=4;try{wf(t,e);var i=ur,u=Uo(e.containerInfo),c=i.focusedElem,s=i.selectionRange;if(u!==c&&c&&c.ownerDocument&&xo(c.ownerDocument.documentElement,c)){if(s!==null&&Bu(c)){var y=s.start,E=s.end;if(E===void 0&&(E=y),"selectionStart"in c)c.selectionStart=y,c.selectionEnd=Math.min(E,c.value.length);else{var M=c.ownerDocument||document,b=M&&M.defaultView||window;if(b.getSelection){var v=b.getSelection(),K=c.textContent.length,Z=Math.min(s.start,K),ve=s.end===void 0?Z:Math.min(s.end,K);!v.extend&&Z>ve&&(u=ve,ve=Z,Z=u);var m=Do(c,Z),h=Do(c,ve);if(m&&h&&(v.rangeCount!==1||v.anchorNode!==m.node||v.anchorOffset!==m.offset||v.focusNode!==h.node||v.focusOffset!==h.offset)){var p=M.createRange();p.setStart(m.node,m.offset),v.removeAllRanges(),Z>ve?(v.addRange(p),v.extend(h.node,h.offset)):(p.setEnd(h.node,h.offset),v.addRange(p))}}}}for(M=[],v=c;v=v.parentNode;)v.nodeType===1&&M.push({element:v,left:v.scrollLeft,top:v.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<M.length;c++){var w=M[c];w.element.scrollLeft=w.left,w.element.scrollTop=w.top}}$i=!!ir,ur=ir=null}finally{ge=a,B.p=n,T.T=l}}e.current=t,Fe=2}}function Zf(){if(Fe===2){Fe=0;var e=El,t=xn,l=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||l){l=T.T,T.T=null;var n=B.p;B.p=2;var a=ge;ge|=4;try{Tf(e,t.alternate,t)}finally{ge=a,B.p=n,T.T=l}}Fe=3}}function Xf(){if(Fe===4||Fe===3){Fe=0,$l();var e=El,t=xn,l=Un,n=Rf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Fe=5:(Fe=0,xn=El=null,Qf(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(zl=null),du(l),t=t.stateNode,dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(jn,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=T.T,a=B.p,B.p=2,T.T=null;try{for(var i=e.onRecoverableError,u=0;u<n.length;u++){var c=n[u];i(c.value,{componentStack:c.stack})}}finally{T.T=t,B.p=a}}(Un&3)!==0&&ji(),Vt(e),a=e.pendingLanes,(l&4194090)!==0&&(a&42)!==0?e===Xc?Ea++:(Ea=0,Xc=e):Ea=0,Aa(0)}}function Qf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,na(t)))}function ji(e){return Vf(),Zf(),Xf(),Kf()}function Kf(){if(Fe!==5)return!1;var e=El,t=Vc;Vc=0;var l=du(Un),n=T.T,a=B.p;try{B.p=32>l?32:l,T.T=null,l=Zc,Zc=null;var i=El,u=Un;if(Fe=0,xn=El=null,Un=0,(ge&6)!==0)throw Error(o(331));var c=ge;if(ge|=4,Uf(i.current),Of(i,i.current,u,l),ge=c,Aa(0,!1),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(jn,i)}catch{}return!0}finally{B.p=a,T.T=n,Qf(e,t)}}function Wf(e,t,l){t=At(l,t),t=Ec(e.stateNode,t,2),e=hl(e,t,2),e!==null&&(kn(e,2),Vt(e))}function ze(e,t,l){if(e.tag===3)Wf(e,e,l);else for(;t!==null;){if(t.tag===3){Wf(t,e,l);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(zl===null||!zl.has(n))){e=At(l,e),l=$s(2),n=hl(t,l,2),n!==null&&(Is(l,n,t,e),kn(n,2),Vt(n));break}}t=t.return}}function Jc(e,t,l){var n=e.pingCache;if(n===null){n=e.pingCache=new Cg;var a=new Set;n.set(t,a)}else a=n.get(t),a===void 0&&(a=new Set,n.set(t,a));a.has(l)||(jc=!0,a.add(l),e=Gg.bind(null,e,t,l),t.then(e,e))}function Gg(e,t,l){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&l,e.warmLanes&=~l,we===e&&(re&l)===l&&(Be===4||Be===3&&(re&62914560)===re&&300>it()-Gc?(ge&2)===0&&Hn(e,0):Yc|=l,Dn===re&&(Dn=0)),Vt(e)}function Jf(e,t){t===0&&(t=Vr()),e=hn(e,t),e!==null&&(kn(e,t),Vt(e))}function Vg(e){var t=e.memoizedState,l=0;t!==null&&(l=t.retryLane),Jf(e,l)}function Zg(e,t){var l=0;switch(e.tag){case 13:var n=e.stateNode,a=e.memoizedState;a!==null&&(l=a.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(o(314))}n!==null&&n.delete(t),Jf(e,l)}function Xg(e,t){return De(e,t)}var Yi=null,Bn=null,Fc=!1,ki=!1,$c=!1,Fl=0;function Vt(e){e!==Bn&&e.next===null&&(Bn===null?Yi=Bn=e:Bn=Bn.next=e),ki=!0,Fc||(Fc=!0,Kg())}function Aa(e,t){if(!$c&&ki){$c=!0;do for(var l=!1,n=Yi;n!==null;){if(e!==0){var a=n.pendingLanes;if(a===0)var i=0;else{var u=n.suspendedLanes,c=n.pingedLanes;i=(1<<31-ht(42|e)+1)-1,i&=a&~(u&~c),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(l=!0,Pf(n,i))}else i=re,i=Ka(n,n===we?i:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(i&3)===0||Yn(n,i)||(l=!0,Pf(n,i));n=n.next}while(l);$c=!1}}function Qg(){Ff()}function Ff(){ki=Fc=!1;var e=0;Fl!==0&&(tm()&&(e=Fl),Fl=0);for(var t=it(),l=null,n=Yi;n!==null;){var a=n.next,i=$f(n,t);i===0?(n.next=null,l===null?Yi=a:l.next=a,a===null&&(Bn=l)):(l=n,(e!==0||(i&3)!==0)&&(ki=!0)),n=a}Aa(e)}function $f(e,t){for(var l=e.suspendedLanes,n=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var u=31-ht(i),c=1<<u,s=a[u];s===-1?((c&l)===0||(c&n)!==0)&&(a[u]=bh(c,t)):s<=t&&(e.expiredLanes|=c),i&=~c}if(t=we,l=re,l=Ka(e,e===t?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,l===0||e===t&&(me===2||me===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&We(n),e.callbackNode=null,e.callbackPriority=0;if((l&3)===0||Yn(e,l)){if(t=l&-l,t===e.callbackPriority)return t;switch(n!==null&&We(n),du(l)){case 2:case 8:l=Yr;break;case 32:l=Za;break;case 268435456:l=kr;break;default:l=Za}return n=If.bind(null,e),l=De(l,n),e.callbackPriority=t,e.callbackNode=l,t}return n!==null&&n!==null&&We(n),e.callbackPriority=2,e.callbackNode=null,2}function If(e,t){if(Fe!==0&&Fe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var l=e.callbackNode;if(ji()&&e.callbackNode!==l)return null;var n=re;return n=Ka(e,e===we?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(_f(e,n,t),$f(e,it()),e.callbackNode!=null&&e.callbackNode===l?If.bind(null,e):null)}function Pf(e,t){if(ji())return null;_f(e,t,!0)}function Kg(){nm(function(){(ge&6)!==0?De(jr,Qg):Ff()})}function Ic(){return Fl===0&&(Fl=Gr()),Fl}function ed(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ia(""+e)}function td(e,t){var l=t.ownerDocument.createElement("input");return l.name=t.name,l.value=t.value,e.id&&l.setAttribute("form",e.id),t.parentNode.insertBefore(l,t),e=new FormData(e),l.parentNode.removeChild(l),e}function Wg(e,t,l,n,a){if(t==="submit"&&l&&l.stateNode===a){var i=ed((a[ct]||null).action),u=n.submitter;u&&(t=(t=u[ct]||null)?ed(t.formAction):u.getAttribute("formAction"),t!==null&&(i=t,u=null));var c=new li("action","action",null,n,a);e.push({event:c,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(Fl!==0){var s=u?td(a,u):new FormData(a);bc(l,{pending:!0,data:s,method:a.method,action:i},null,s)}}else typeof i=="function"&&(c.preventDefault(),s=u?td(a,u):new FormData(a),bc(l,{pending:!0,data:s,method:a.method,action:i},i,s))},currentTarget:a}]})}}for(var Pc=0;Pc<Cu.length;Pc++){var er=Cu[Pc],Jg=er.toLowerCase(),Fg=er[0].toUpperCase()+er.slice(1);Rt(Jg,"on"+Fg)}Rt(Bo,"onAnimationEnd"),Rt(_o,"onAnimationIteration"),Rt(No,"onAnimationStart"),Rt("dblclick","onDoubleClick"),Rt("focusin","onFocus"),Rt("focusout","onBlur"),Rt(hg,"onTransitionRun"),Rt(gg,"onTransitionStart"),Rt(mg,"onTransitionCancel"),Rt(Lo,"onTransitionEnd"),ln("onMouseEnter",["mouseout","mouseover"]),ln("onMouseLeave",["mouseout","mouseover"]),ln("onPointerEnter",["pointerout","pointerover"]),ln("onPointerLeave",["pointerout","pointerover"]),_l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),_l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),_l("onBeforeInput",["compositionend","keypress","textInput","paste"]),_l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),_l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),_l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$g=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(wa));function ld(e,t){t=(t&4)!==0;for(var l=0;l<e.length;l++){var n=e[l],a=n.event;n=n.listeners;e:{var i=void 0;if(t)for(var u=n.length-1;0<=u;u--){var c=n[u],s=c.instance,y=c.currentTarget;if(c=c.listener,s!==i&&a.isPropagationStopped())break e;i=c,a.currentTarget=y;try{i(a)}catch(E){Di(E)}a.currentTarget=null,i=s}else for(u=0;u<n.length;u++){if(c=n[u],s=c.instance,y=c.currentTarget,c=c.listener,s!==i&&a.isPropagationStopped())break e;i=c,a.currentTarget=y;try{i(a)}catch(E){Di(E)}a.currentTarget=null,i=s}}}}function ae(e,t){var l=t[hu];l===void 0&&(l=t[hu]=new Set);var n=e+"__bubble";l.has(n)||(nd(t,e,2,!1),l.add(n))}function tr(e,t,l){var n=0;t&&(n|=4),nd(l,e,n,t)}var Gi="_reactListening"+Math.random().toString(36).slice(2);function lr(e){if(!e[Gi]){e[Gi]=!0,Wr.forEach(function(l){l!=="selectionchange"&&($g.has(l)||tr(l,!1,e),tr(l,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Gi]||(t[Gi]=!0,tr("selectionchange",!1,t))}}function nd(e,t,l,n){switch(Od(t)){case 2:var a=Am;break;case 8:a=wm;break;default:a=pr}l=a.bind(null,t,l,e),a=void 0,!Au||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),n?a!==void 0?e.addEventListener(t,l,{capture:!0,passive:a}):e.addEventListener(t,l,!0):a!==void 0?e.addEventListener(t,l,{passive:a}):e.addEventListener(t,l,!1)}function nr(e,t,l,n,a){var i=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var u=n.tag;if(u===3||u===4){var c=n.stateNode.containerInfo;if(c===a)break;if(u===4)for(u=n.return;u!==null;){var s=u.tag;if((s===3||s===4)&&u.stateNode.containerInfo===a)return;u=u.return}for(;c!==null;){if(u=Pl(c),u===null)return;if(s=u.tag,s===5||s===6||s===26||s===27){n=i=u;continue e}c=c.parentNode}}n=n.return}ro(function(){var y=i,E=zu(l),M=[];e:{var b=Co.get(e);if(b!==void 0){var v=li,K=e;switch(e){case"keypress":if(ei(l)===0)break e;case"keydown":case"keyup":v=Xh;break;case"focusin":K="focus",v=Du;break;case"focusout":K="blur",v=Du;break;case"beforeblur":case"afterblur":v=Du;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=fo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Bh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Wh;break;case Bo:case _o:case No:v=Lh;break;case Lo:v=Fh;break;case"scroll":case"scrollend":v=Hh;break;case"wheel":v=Ih;break;case"copy":case"cut":case"paste":v=qh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=go;break;case"toggle":case"beforetoggle":v=eg}var Z=(t&4)!==0,ve=!Z&&(e==="scroll"||e==="scrollend"),m=Z?b!==null?b+"Capture":null:b;Z=[];for(var h=y,p;h!==null;){var w=h;if(p=w.stateNode,w=w.tag,w!==5&&w!==26&&w!==27||p===null||m===null||(w=Zn(h,m),w!=null&&Z.push(Ma(h,w,p))),ve)break;h=h.return}0<Z.length&&(b=new v(b,K,null,l,E),M.push({event:b,listeners:Z}))}}if((t&7)===0){e:{if(b=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",b&&l!==Tu&&(K=l.relatedTarget||l.fromElement)&&(Pl(K)||K[Il]))break e;if((v||b)&&(b=E.window===E?E:(b=E.ownerDocument)?b.defaultView||b.parentWindow:window,v?(K=l.relatedTarget||l.toElement,v=y,K=K?Pl(K):null,K!==null&&(ve=x(K),Z=K.tag,K!==ve||Z!==5&&Z!==27&&Z!==6)&&(K=null)):(v=null,K=y),v!==K)){if(Z=fo,w="onMouseLeave",m="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(Z=go,w="onPointerLeave",m="onPointerEnter",h="pointer"),ve=v==null?b:Vn(v),p=K==null?b:Vn(K),b=new Z(w,h+"leave",v,l,E),b.target=ve,b.relatedTarget=p,w=null,Pl(E)===y&&(Z=new Z(m,h+"enter",K,l,E),Z.target=p,Z.relatedTarget=ve,w=Z),ve=w,v&&K)t:{for(Z=v,m=K,h=0,p=Z;p;p=_n(p))h++;for(p=0,w=m;w;w=_n(w))p++;for(;0<h-p;)Z=_n(Z),h--;for(;0<p-h;)m=_n(m),p--;for(;h--;){if(Z===m||m!==null&&Z===m.alternate)break t;Z=_n(Z),m=_n(m)}Z=null}else Z=null;v!==null&&ad(M,b,v,Z,!1),K!==null&&ve!==null&&ad(M,ve,K,Z,!0)}}e:{if(b=y?Vn(y):window,v=b.nodeName&&b.nodeName.toLowerCase(),v==="select"||v==="input"&&b.type==="file")var C=zo;else if(So(b))if(Eo)C=sg;else{C=rg;var te=cg}else v=b.nodeName,!v||v.toLowerCase()!=="input"||b.type!=="checkbox"&&b.type!=="radio"?y&&Su(y.elementType)&&(C=zo):C=og;if(C&&(C=C(e,y))){To(M,C,l,E);break e}te&&te(e,b,y),e==="focusout"&&y&&b.type==="number"&&y.memoizedProps.value!=null&&vu(b,"number",b.value)}switch(te=y?Vn(y):window,e){case"focusin":(So(te)||te.contentEditable==="true")&&(sn=te,_u=y,In=null);break;case"focusout":In=_u=sn=null;break;case"mousedown":Nu=!0;break;case"contextmenu":case"mouseup":case"dragend":Nu=!1,Ho(M,l,E);break;case"selectionchange":if(dg)break;case"keydown":case"keyup":Ho(M,l,E)}var j;if(Uu)e:{switch(e){case"compositionstart":var X="onCompositionStart";break e;case"compositionend":X="onCompositionEnd";break e;case"compositionupdate":X="onCompositionUpdate";break e}X=void 0}else on?bo(e,l)&&(X="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&(X="onCompositionStart");X&&(mo&&l.locale!=="ko"&&(on||X!=="onCompositionStart"?X==="onCompositionEnd"&&on&&(j=oo()):(ol=E,wu="value"in ol?ol.value:ol.textContent,on=!0)),te=Vi(y,X),0<te.length&&(X=new ho(X,e,null,l,E),M.push({event:X,listeners:te}),j?X.data=j:(j=vo(l),j!==null&&(X.data=j)))),(j=lg?ng(e,l):ag(e,l))&&(X=Vi(y,"onBeforeInput"),0<X.length&&(te=new ho("onBeforeInput","beforeinput",null,l,E),M.push({event:te,listeners:X}),te.data=j)),Wg(M,e,y,l,E)}ld(M,t)})}function Ma(e,t,l){return{instance:e,listener:t,currentTarget:l}}function Vi(e,t){for(var l=t+"Capture",n=[];e!==null;){var a=e,i=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||i===null||(a=Zn(e,l),a!=null&&n.unshift(Ma(e,a,i)),a=Zn(e,t),a!=null&&n.push(Ma(e,a,i))),e.tag===3)return n;e=e.return}return[]}function _n(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function ad(e,t,l,n,a){for(var i=t._reactName,u=[];l!==null&&l!==n;){var c=l,s=c.alternate,y=c.stateNode;if(c=c.tag,s!==null&&s===n)break;c!==5&&c!==26&&c!==27||y===null||(s=y,a?(y=Zn(l,i),y!=null&&u.unshift(Ma(l,y,s))):a||(y=Zn(l,i),y!=null&&u.push(Ma(l,y,s)))),l=l.return}u.length!==0&&e.push({event:t,listeners:u})}var Ig=/\r\n?/g,Pg=/\u0000|\uFFFD/g;function id(e){return(typeof e=="string"?e:""+e).replace(Ig,`
`).replace(Pg,"")}function ud(e,t){return t=id(t),id(e)===t}function Zi(){}function be(e,t,l,n,a,i){switch(l){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||un(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&un(e,""+n);break;case"className":Ja(e,"class",n);break;case"tabIndex":Ja(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Ja(e,l,n);break;case"style":uo(e,n,i);break;case"data":if(t!=="object"){Ja(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||l!=="href")){e.removeAttribute(l);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(l);break}n=Ia(""+n),e.setAttribute(l,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(l==="formAction"?(t!=="input"&&be(e,t,"name",a.name,a,null),be(e,t,"formEncType",a.formEncType,a,null),be(e,t,"formMethod",a.formMethod,a,null),be(e,t,"formTarget",a.formTarget,a,null)):(be(e,t,"encType",a.encType,a,null),be(e,t,"method",a.method,a,null),be(e,t,"target",a.target,a,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(l);break}n=Ia(""+n),e.setAttribute(l,n);break;case"onClick":n!=null&&(e.onclick=Zi);break;case"onScroll":n!=null&&ae("scroll",e);break;case"onScrollEnd":n!=null&&ae("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(o(61));if(l=n.__html,l!=null){if(a.children!=null)throw Error(o(60));e.innerHTML=l}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}l=Ia(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(l,""+n):e.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(l,""):e.removeAttribute(l);break;case"capture":case"download":n===!0?e.setAttribute(l,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(l,n):e.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(l,n):e.removeAttribute(l);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(l):e.setAttribute(l,n);break;case"popover":ae("beforetoggle",e),ae("toggle",e),Wa(e,"popover",n);break;case"xlinkActuate":Xt(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Xt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Xt(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Xt(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Xt(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Xt(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Wa(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=xh.get(l)||l,Wa(e,l,n))}}function ar(e,t,l,n,a,i){switch(l){case"style":uo(e,n,i);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(o(61));if(l=n.__html,l!=null){if(a.children!=null)throw Error(o(60));e.innerHTML=l}}break;case"children":typeof n=="string"?un(e,n):(typeof n=="number"||typeof n=="bigint")&&un(e,""+n);break;case"onScroll":n!=null&&ae("scroll",e);break;case"onScrollEnd":n!=null&&ae("scrollend",e);break;case"onClick":n!=null&&(e.onclick=Zi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Jr.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(a=l.endsWith("Capture"),t=l.slice(2,a?l.length-7:void 0),i=e[ct]||null,i=i!=null?i[l]:null,typeof i=="function"&&e.removeEventListener(t,i,a),typeof n=="function")){typeof i!="function"&&i!==null&&(l in e?e[l]=null:e.hasAttribute(l)&&e.removeAttribute(l)),e.addEventListener(t,n,a);break e}l in e?e[l]=n:n===!0?e.setAttribute(l,""):Wa(e,l,n)}}}function $e(e,t,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ae("error",e),ae("load",e);var n=!1,a=!1,i;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];if(u!=null)switch(i){case"src":n=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:be(e,t,i,u,l,null)}}a&&be(e,t,"srcSet",l.srcSet,l,null),n&&be(e,t,"src",l.src,l,null);return;case"input":ae("invalid",e);var c=i=u=a=null,s=null,y=null;for(n in l)if(l.hasOwnProperty(n)){var E=l[n];if(E!=null)switch(n){case"name":a=E;break;case"type":u=E;break;case"checked":s=E;break;case"defaultChecked":y=E;break;case"value":i=E;break;case"defaultValue":c=E;break;case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(o(137,t));break;default:be(e,t,n,E,l,null)}}lo(e,i,c,s,y,u,a,!1),Fa(e);return;case"select":ae("invalid",e),n=u=i=null;for(a in l)if(l.hasOwnProperty(a)&&(c=l[a],c!=null))switch(a){case"value":i=c;break;case"defaultValue":u=c;break;case"multiple":n=c;default:be(e,t,a,c,l,null)}t=i,l=u,e.multiple=!!n,t!=null?an(e,!!n,t,!1):l!=null&&an(e,!!n,l,!0);return;case"textarea":ae("invalid",e),i=a=n=null;for(u in l)if(l.hasOwnProperty(u)&&(c=l[u],c!=null))switch(u){case"value":n=c;break;case"defaultValue":a=c;break;case"children":i=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(o(91));break;default:be(e,t,u,c,l,null)}ao(e,n,a,i),Fa(e);return;case"option":for(s in l)if(l.hasOwnProperty(s)&&(n=l[s],n!=null))switch(s){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:be(e,t,s,n,l,null)}return;case"dialog":ae("beforetoggle",e),ae("toggle",e),ae("cancel",e),ae("close",e);break;case"iframe":case"object":ae("load",e);break;case"video":case"audio":for(n=0;n<wa.length;n++)ae(wa[n],e);break;case"image":ae("error",e),ae("load",e);break;case"details":ae("toggle",e);break;case"embed":case"source":case"link":ae("error",e),ae("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(y in l)if(l.hasOwnProperty(y)&&(n=l[y],n!=null))switch(y){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:be(e,t,y,n,l,null)}return;default:if(Su(t)){for(E in l)l.hasOwnProperty(E)&&(n=l[E],n!==void 0&&ar(e,t,E,n,l,void 0));return}}for(c in l)l.hasOwnProperty(c)&&(n=l[c],n!=null&&be(e,t,c,n,l,null))}function em(e,t,l,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,i=null,u=null,c=null,s=null,y=null,E=null;for(v in l){var M=l[v];if(l.hasOwnProperty(v)&&M!=null)switch(v){case"checked":break;case"value":break;case"defaultValue":s=M;default:n.hasOwnProperty(v)||be(e,t,v,null,n,M)}}for(var b in n){var v=n[b];if(M=l[b],n.hasOwnProperty(b)&&(v!=null||M!=null))switch(b){case"type":i=v;break;case"name":a=v;break;case"checked":y=v;break;case"defaultChecked":E=v;break;case"value":u=v;break;case"defaultValue":c=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(o(137,t));break;default:v!==M&&be(e,t,b,v,n,M)}}bu(e,u,c,s,y,E,i,a);return;case"select":v=u=c=b=null;for(i in l)if(s=l[i],l.hasOwnProperty(i)&&s!=null)switch(i){case"value":break;case"multiple":v=s;default:n.hasOwnProperty(i)||be(e,t,i,null,n,s)}for(a in n)if(i=n[a],s=l[a],n.hasOwnProperty(a)&&(i!=null||s!=null))switch(a){case"value":b=i;break;case"defaultValue":c=i;break;case"multiple":u=i;default:i!==s&&be(e,t,a,i,n,s)}t=c,l=u,n=v,b!=null?an(e,!!l,b,!1):!!n!=!!l&&(t!=null?an(e,!!l,t,!0):an(e,!!l,l?[]:"",!1));return;case"textarea":v=b=null;for(c in l)if(a=l[c],l.hasOwnProperty(c)&&a!=null&&!n.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:be(e,t,c,null,n,a)}for(u in n)if(a=n[u],i=l[u],n.hasOwnProperty(u)&&(a!=null||i!=null))switch(u){case"value":b=a;break;case"defaultValue":v=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(o(91));break;default:a!==i&&be(e,t,u,a,n,i)}no(e,b,v);return;case"option":for(var K in l)if(b=l[K],l.hasOwnProperty(K)&&b!=null&&!n.hasOwnProperty(K))switch(K){case"selected":e.selected=!1;break;default:be(e,t,K,null,n,b)}for(s in n)if(b=n[s],v=l[s],n.hasOwnProperty(s)&&b!==v&&(b!=null||v!=null))switch(s){case"selected":e.selected=b&&typeof b!="function"&&typeof b!="symbol";break;default:be(e,t,s,b,n,v)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Z in l)b=l[Z],l.hasOwnProperty(Z)&&b!=null&&!n.hasOwnProperty(Z)&&be(e,t,Z,null,n,b);for(y in n)if(b=n[y],v=l[y],n.hasOwnProperty(y)&&b!==v&&(b!=null||v!=null))switch(y){case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(o(137,t));break;default:be(e,t,y,b,n,v)}return;default:if(Su(t)){for(var ve in l)b=l[ve],l.hasOwnProperty(ve)&&b!==void 0&&!n.hasOwnProperty(ve)&&ar(e,t,ve,void 0,n,b);for(E in n)b=n[E],v=l[E],!n.hasOwnProperty(E)||b===v||b===void 0&&v===void 0||ar(e,t,E,b,n,v);return}}for(var m in l)b=l[m],l.hasOwnProperty(m)&&b!=null&&!n.hasOwnProperty(m)&&be(e,t,m,null,n,b);for(M in n)b=n[M],v=l[M],!n.hasOwnProperty(M)||b===v||b==null&&v==null||be(e,t,M,b,n,v)}var ir=null,ur=null;function Xi(e){return e.nodeType===9?e:e.ownerDocument}function cd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function rd(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function cr(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var rr=null;function tm(){var e=window.event;return e&&e.type==="popstate"?e===rr?!1:(rr=e,!0):(rr=null,!1)}var od=typeof setTimeout=="function"?setTimeout:void 0,lm=typeof clearTimeout=="function"?clearTimeout:void 0,sd=typeof Promise=="function"?Promise:void 0,nm=typeof queueMicrotask=="function"?queueMicrotask:typeof sd<"u"?function(e){return sd.resolve(null).then(e).catch(am)}:od;function am(e){setTimeout(function(){throw e})}function wl(e){return e==="head"}function fd(e,t){var l=t,n=0,a=0;do{var i=l.nextSibling;if(e.removeChild(l),i&&i.nodeType===8)if(l=i.data,l==="/$"){if(0<n&&8>n){l=n;var u=e.ownerDocument;if(l&1&&Oa(u.documentElement),l&2&&Oa(u.body),l&4)for(l=u.head,Oa(l),u=l.firstChild;u;){var c=u.nextSibling,s=u.nodeName;u[Gn]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&u.rel.toLowerCase()==="stylesheet"||l.removeChild(u),u=c}}if(a===0){e.removeChild(i),Na(t);return}a--}else l==="$"||l==="$?"||l==="$!"?a++:n=l.charCodeAt(0)-48;else n=0;l=i}while(l);Na(t)}function or(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var l=t;switch(t=t.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":or(l),gu(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}e.removeChild(l)}}function im(e,t,l,n){for(;e.nodeType===1;){var a=l;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[Gn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=_t(e.nextSibling),e===null)break}return null}function um(e,t,l){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!l||(e=_t(e.nextSibling),e===null))return null;return e}function sr(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function cm(e,t){var l=e.ownerDocument;if(e.data!=="$?"||l.readyState==="complete")t();else{var n=function(){t(),l.removeEventListener("DOMContentLoaded",n)};l.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function _t(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var fr=null;function dd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"){if(t===0)return e;t--}else l==="/$"&&t++}e=e.previousSibling}return null}function hd(e,t,l){switch(t=Xi(l),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function Oa(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);gu(e)}var Ut=new Map,gd=new Set;function Qi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var il=B.d;B.d={f:rm,r:om,D:sm,C:fm,L:dm,m:hm,X:mm,S:gm,M:pm};function rm(){var e=il.f(),t=Ci();return e||t}function om(e){var t=en(e);t!==null&&t.tag===5&&t.type==="form"?Bs(t):il.r(e)}var Nn=typeof document>"u"?null:document;function md(e,t,l){var n=Nn;if(n&&typeof t=="string"&&t){var a=Et(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof l=="string"&&(a+='[crossorigin="'+l+'"]'),gd.has(a)||(gd.add(a),e={rel:e,crossOrigin:l,href:t},n.querySelector(a)===null&&(t=n.createElement("link"),$e(t,"link",e),Ve(t),n.head.appendChild(t)))}}function sm(e){il.D(e),md("dns-prefetch",e,null)}function fm(e,t){il.C(e,t),md("preconnect",e,t)}function dm(e,t,l){il.L(e,t,l);var n=Nn;if(n&&e&&t){var a='link[rel="preload"][as="'+Et(t)+'"]';t==="image"&&l&&l.imageSrcSet?(a+='[imagesrcset="'+Et(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(a+='[imagesizes="'+Et(l.imageSizes)+'"]')):a+='[href="'+Et(e)+'"]';var i=a;switch(t){case"style":i=Ln(e);break;case"script":i=Cn(e)}Ut.has(i)||(e=N({rel:"preload",href:t==="image"&&l&&l.imageSrcSet?void 0:e,as:t},l),Ut.set(i,e),n.querySelector(a)!==null||t==="style"&&n.querySelector(Da(i))||t==="script"&&n.querySelector(xa(i))||(t=n.createElement("link"),$e(t,"link",e),Ve(t),n.head.appendChild(t)))}}function hm(e,t){il.m(e,t);var l=Nn;if(l&&e){var n=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+Et(n)+'"][href="'+Et(e)+'"]',i=a;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Cn(e)}if(!Ut.has(i)&&(e=N({rel:"modulepreload",href:e},t),Ut.set(i,e),l.querySelector(a)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(xa(i)))return}n=l.createElement("link"),$e(n,"link",e),Ve(n),l.head.appendChild(n)}}}function gm(e,t,l){il.S(e,t,l);var n=Nn;if(n&&e){var a=tn(n).hoistableStyles,i=Ln(e);t=t||"default";var u=a.get(i);if(!u){var c={loading:0,preload:null};if(u=n.querySelector(Da(i)))c.loading=5;else{e=N({rel:"stylesheet",href:e,"data-precedence":t},l),(l=Ut.get(i))&&dr(e,l);var s=u=n.createElement("link");Ve(s),$e(s,"link",e),s._p=new Promise(function(y,E){s.onload=y,s.onerror=E}),s.addEventListener("load",function(){c.loading|=1}),s.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Ki(u,t,n)}u={type:"stylesheet",instance:u,count:1,state:c},a.set(i,u)}}}function mm(e,t){il.X(e,t);var l=Nn;if(l&&e){var n=tn(l).hoistableScripts,a=Cn(e),i=n.get(a);i||(i=l.querySelector(xa(a)),i||(e=N({src:e,async:!0},t),(t=Ut.get(a))&&hr(e,t),i=l.createElement("script"),Ve(i),$e(i,"link",e),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},n.set(a,i))}}function pm(e,t){il.M(e,t);var l=Nn;if(l&&e){var n=tn(l).hoistableScripts,a=Cn(e),i=n.get(a);i||(i=l.querySelector(xa(a)),i||(e=N({src:e,async:!0,type:"module"},t),(t=Ut.get(a))&&hr(e,t),i=l.createElement("script"),Ve(i),$e(i,"link",e),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},n.set(a,i))}}function pd(e,t,l,n){var a=(a=J.current)?Qi(a):null;if(!a)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(t=Ln(l.href),l=tn(a).hoistableStyles,n=l.get(t),n||(n={type:"style",instance:null,count:0,state:null},l.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){e=Ln(l.href);var i=tn(a).hoistableStyles,u=i.get(e);if(u||(a=a.ownerDocument||a,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,u),(i=a.querySelector(Da(e)))&&!i._p&&(u.instance=i,u.state.loading=5),Ut.has(e)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Ut.set(e,l),i||ym(a,e,l,u.state))),t&&n===null)throw Error(o(528,""));return u}if(t&&n!==null)throw Error(o(529,""));return null;case"script":return t=l.async,l=l.src,typeof l=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Cn(l),l=tn(a).hoistableScripts,n=l.get(t),n||(n={type:"script",instance:null,count:0,state:null},l.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function Ln(e){return'href="'+Et(e)+'"'}function Da(e){return'link[rel="stylesheet"]['+e+"]"}function yd(e){return N({},e,{"data-precedence":e.precedence,precedence:null})}function ym(e,t,l,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),$e(t,"link",l),Ve(t),e.head.appendChild(t))}function Cn(e){return'[src="'+Et(e)+'"]'}function xa(e){return"script[async]"+e}function bd(e,t,l){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+Et(l.href)+'"]');if(n)return t.instance=n,Ve(n),n;var a=N({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),Ve(n),$e(n,"style",a),Ki(n,l.precedence,e),t.instance=n;case"stylesheet":a=Ln(l.href);var i=e.querySelector(Da(a));if(i)return t.state.loading|=4,t.instance=i,Ve(i),i;n=yd(l),(a=Ut.get(a))&&dr(n,a),i=(e.ownerDocument||e).createElement("link"),Ve(i);var u=i;return u._p=new Promise(function(c,s){u.onload=c,u.onerror=s}),$e(i,"link",n),t.state.loading|=4,Ki(i,l.precedence,e),t.instance=i;case"script":return i=Cn(l.src),(a=e.querySelector(xa(i)))?(t.instance=a,Ve(a),a):(n=l,(a=Ut.get(i))&&(n=N({},l),hr(n,a)),e=e.ownerDocument||e,a=e.createElement("script"),Ve(a),$e(a,"link",n),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,Ki(n,l.precedence,e));return t.instance}function Ki(e,t,l){for(var n=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=n.length?n[n.length-1]:null,i=a,u=0;u<n.length;u++){var c=n[u];if(c.dataset.precedence===t)i=c;else if(i!==a)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=l.nodeType===9?l.head:l,t.insertBefore(e,t.firstChild))}function dr(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function hr(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Wi=null;function vd(e,t,l){if(Wi===null){var n=new Map,a=Wi=new Map;a.set(l,n)}else a=Wi,n=a.get(l),n||(n=new Map,a.set(l,n));if(n.has(e))return n;for(n.set(e,null),l=l.getElementsByTagName(e),a=0;a<l.length;a++){var i=l[a];if(!(i[Gn]||i[Pe]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(t)||"";u=e+u;var c=n.get(u);c?c.push(i):n.set(u,[i])}}return n}function Sd(e,t,l){e=e.ownerDocument||e,e.head.insertBefore(l,t==="title"?e.querySelector("head > title"):null)}function bm(e,t,l){if(l===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Td(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Ua=null;function vm(){}function Sm(e,t,l){if(Ua===null)throw Error(o(475));var n=Ua;if(t.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var a=Ln(l.href),i=e.querySelector(Da(a));if(i){e=i._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(n.count++,n=Ji.bind(n),e.then(n,n)),t.state.loading|=4,t.instance=i,Ve(i);return}i=e.ownerDocument||e,l=yd(l),(a=Ut.get(a))&&dr(l,a),i=i.createElement("link"),Ve(i);var u=i;u._p=new Promise(function(c,s){u.onload=c,u.onerror=s}),$e(i,"link",l),t.instance=i}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(n.count++,t=Ji.bind(n),e.addEventListener("load",t),e.addEventListener("error",t))}}function Tm(){if(Ua===null)throw Error(o(475));var e=Ua;return e.stylesheets&&e.count===0&&gr(e,e.stylesheets),0<e.count?function(t){var l=setTimeout(function(){if(e.stylesheets&&gr(e,e.stylesheets),e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(l)}}:null}function Ji(){if(this.count--,this.count===0){if(this.stylesheets)gr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Fi=null;function gr(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Fi=new Map,t.forEach(zm,e),Fi=null,Ji.call(e))}function zm(e,t){if(!(t.state.loading&4)){var l=Fi.get(e);if(l)var n=l.get(null);else{l=new Map,Fi.set(e,l);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<a.length;i++){var u=a[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(l.set(u.dataset.precedence,u),n=u)}n&&l.set(null,n)}a=t.instance,u=a.getAttribute("data-precedence"),i=l.get(u)||n,i===n&&l.set(null,a),l.set(u,a),this.count++,n=Ji.bind(this),a.addEventListener("load",n),a.addEventListener("error",n),i?i.parentNode.insertBefore(a,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var Ha={$$typeof:ue,Provider:null,Consumer:null,_currentValue:k,_currentValue2:k,_threadCount:0};function Em(e,t,l,n,a,i,u,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=su(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=su(0),this.hiddenUpdates=su(null),this.identifierPrefix=n,this.onUncaughtError=a,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function zd(e,t,l,n,a,i,u,c,s,y,E,M){return e=new Em(e,t,l,u,c,s,y,M),t=1,i===!0&&(t|=24),i=mt(3,null,null,t),e.current=i,i.stateNode=e,t=Ju(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:n,isDehydrated:l,cache:t},Pu(i),e}function Ed(e){return e?(e=gn,e):gn}function Ad(e,t,l,n,a,i){a=Ed(a),n.context===null?n.context=a:n.pendingContext=a,n=dl(t),n.payload={element:l},i=i===void 0?null:i,i!==null&&(n.callback=i),l=hl(e,n,t),l!==null&&(St(l,e,t),ca(l,e,t))}function wd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<t?l:t}}function mr(e,t){wd(e,t),(e=e.alternate)&&wd(e,t)}function Md(e){if(e.tag===13){var t=hn(e,67108864);t!==null&&St(t,e,67108864),mr(e,67108864)}}var $i=!0;function Am(e,t,l,n){var a=T.T;T.T=null;var i=B.p;try{B.p=2,pr(e,t,l,n)}finally{B.p=i,T.T=a}}function wm(e,t,l,n){var a=T.T;T.T=null;var i=B.p;try{B.p=8,pr(e,t,l,n)}finally{B.p=i,T.T=a}}function pr(e,t,l,n){if($i){var a=yr(n);if(a===null)nr(e,t,n,Ii,l),Dd(e,n);else if(Om(a,e,t,l,n))n.stopPropagation();else if(Dd(e,n),t&4&&-1<Mm.indexOf(e)){for(;a!==null;){var i=en(a);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=Bl(i.pendingLanes);if(u!==0){var c=i;for(c.pendingLanes|=2,c.entangledLanes|=2;u;){var s=1<<31-ht(u);c.entanglements[1]|=s,u&=~s}Vt(i),(ge&6)===0&&(Ni=it()+500,Aa(0))}}break;case 13:c=hn(i,2),c!==null&&St(c,i,2),Ci(),mr(i,2)}if(i=yr(n),i===null&&nr(e,t,n,Ii,l),i===a)break;a=i}a!==null&&n.stopPropagation()}else nr(e,t,n,null,l)}}function yr(e){return e=zu(e),br(e)}var Ii=null;function br(e){if(Ii=null,e=Pl(e),e!==null){var t=x(e);if(t===null)e=null;else{var l=t.tag;if(l===13){if(e=L(t),e!==null)return e;e=null}else if(l===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ii=e,null}function Od(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(fh()){case jr:return 2;case Yr:return 8;case Za:case dh:return 32;case kr:return 268435456;default:return 32}default:return 32}}var vr=!1,Ml=null,Ol=null,Dl=null,Ra=new Map,Ba=new Map,xl=[],Mm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Dd(e,t){switch(e){case"focusin":case"focusout":Ml=null;break;case"dragenter":case"dragleave":Ol=null;break;case"mouseover":case"mouseout":Dl=null;break;case"pointerover":case"pointerout":Ra.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ba.delete(t.pointerId)}}function _a(e,t,l,n,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:l,eventSystemFlags:n,nativeEvent:i,targetContainers:[a]},t!==null&&(t=en(t),t!==null&&Md(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function Om(e,t,l,n,a){switch(t){case"focusin":return Ml=_a(Ml,e,t,l,n,a),!0;case"dragenter":return Ol=_a(Ol,e,t,l,n,a),!0;case"mouseover":return Dl=_a(Dl,e,t,l,n,a),!0;case"pointerover":var i=a.pointerId;return Ra.set(i,_a(Ra.get(i)||null,e,t,l,n,a)),!0;case"gotpointercapture":return i=a.pointerId,Ba.set(i,_a(Ba.get(i)||null,e,t,l,n,a)),!0}return!1}function xd(e){var t=Pl(e.target);if(t!==null){var l=x(t);if(l!==null){if(t=l.tag,t===13){if(t=L(l),t!==null){e.blockedOn=t,Sh(e.priority,function(){if(l.tag===13){var n=vt();n=fu(n);var a=hn(l,n);a!==null&&St(a,l,n),mr(l,n)}});return}}else if(t===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Pi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var l=yr(e.nativeEvent);if(l===null){l=e.nativeEvent;var n=new l.constructor(l.type,l);Tu=n,l.target.dispatchEvent(n),Tu=null}else return t=en(l),t!==null&&Md(t),e.blockedOn=l,!1;t.shift()}return!0}function Ud(e,t,l){Pi(e)&&l.delete(t)}function Dm(){vr=!1,Ml!==null&&Pi(Ml)&&(Ml=null),Ol!==null&&Pi(Ol)&&(Ol=null),Dl!==null&&Pi(Dl)&&(Dl=null),Ra.forEach(Ud),Ba.forEach(Ud)}function eu(e,t){e.blockedOn===t&&(e.blockedOn=null,vr||(vr=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Dm)))}var tu=null;function Hd(e){tu!==e&&(tu=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){tu===e&&(tu=null);for(var t=0;t<e.length;t+=3){var l=e[t],n=e[t+1],a=e[t+2];if(typeof n!="function"){if(br(n||l)===null)continue;break}var i=en(l);i!==null&&(e.splice(t,3),t-=3,bc(i,{pending:!0,data:a,method:l.method,action:n},n,a))}}))}function Na(e){function t(s){return eu(s,e)}Ml!==null&&eu(Ml,e),Ol!==null&&eu(Ol,e),Dl!==null&&eu(Dl,e),Ra.forEach(t),Ba.forEach(t);for(var l=0;l<xl.length;l++){var n=xl[l];n.blockedOn===e&&(n.blockedOn=null)}for(;0<xl.length&&(l=xl[0],l.blockedOn===null);)xd(l),l.blockedOn===null&&xl.shift();if(l=(e.ownerDocument||e).$$reactFormReplay,l!=null)for(n=0;n<l.length;n+=3){var a=l[n],i=l[n+1],u=a[ct]||null;if(typeof i=="function")u||Hd(l);else if(u){var c=null;if(i&&i.hasAttribute("formAction")){if(a=i,u=i[ct]||null)c=u.formAction;else if(br(a)!==null)continue}else c=u.action;typeof c=="function"?l[n+1]=c:(l.splice(n,3),n-=3),Hd(l)}}}function Sr(e){this._internalRoot=e}lu.prototype.render=Sr.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var l=t.current,n=vt();Ad(l,n,e,t,null,null)},lu.prototype.unmount=Sr.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ad(e.current,2,null,e,null,null),Ci(),t[Il]=null}};function lu(e){this._internalRoot=e}lu.prototype.unstable_scheduleHydration=function(e){if(e){var t=Qr();e={blockedOn:null,target:e,priority:t};for(var l=0;l<xl.length&&t!==0&&t<xl[l].priority;l++);xl.splice(l,0,e),l===0&&xd(e)}};var Rd=f.version;if(Rd!=="19.1.0")throw Error(o(527,Rd,"19.1.0"));B.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=O(t),e=e!==null?z(e):null,e=e===null?null:e.stateNode,e};var xm={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:T,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nu.isDisabled&&nu.supportsFiber)try{jn=nu.inject(xm),dt=nu}catch{}}return Ca.createRoot=function(e,t){if(!S(e))throw Error(o(299));var l=!1,n="",a=Ks,i=Ws,u=Js,c=null;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(c=t.unstable_transitionCallbacks)),t=zd(e,1,!1,null,null,l,n,a,i,u,c,null),e[Il]=t.current,lr(e),new Sr(t)},Ca.hydrateRoot=function(e,t,l){if(!S(e))throw Error(o(299));var n=!1,a="",i=Ks,u=Ws,c=Js,s=null,y=null;return l!=null&&(l.unstable_strictMode===!0&&(n=!0),l.identifierPrefix!==void 0&&(a=l.identifierPrefix),l.onUncaughtError!==void 0&&(i=l.onUncaughtError),l.onCaughtError!==void 0&&(u=l.onCaughtError),l.onRecoverableError!==void 0&&(c=l.onRecoverableError),l.unstable_transitionCallbacks!==void 0&&(s=l.unstable_transitionCallbacks),l.formState!==void 0&&(y=l.formState)),t=zd(e,1,!0,t,l??null,n,a,i,u,c,s,y),t.context=Ed(null),l=t.current,n=vt(),n=fu(n),a=dl(n),a.callback=null,hl(l,a,n),l=n,t.current.lanes=l,kn(t,l),Vt(t),e[Il]=t.current,lr(e),new lu(t)},Ca.version="19.1.0",Ca}var Gd;function jm(){if(Gd)return Er.exports;Gd=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(f){console.error(f)}}return r(),Er.exports=qm(),Er.exports}var Ym=jm();function km(r,f,g){return f in r?Object.defineProperty(r,f,{value:g,enumerable:!0,configurable:!0,writable:!0}):r[f]=g,r}function Vd(r,f){var g=Object.keys(r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);f&&(o=o.filter(function(S){return Object.getOwnPropertyDescriptor(r,S).enumerable})),g.push.apply(g,o)}return g}function Zd(r){for(var f=1;f<arguments.length;f++){var g=arguments[f]!=null?arguments[f]:{};f%2?Vd(Object(g),!0).forEach(function(o){km(r,o,g[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(g)):Vd(Object(g)).forEach(function(o){Object.defineProperty(r,o,Object.getOwnPropertyDescriptor(g,o))})}return r}function Gm(r,f){if(r==null)return{};var g={},o=Object.keys(r),S,x;for(x=0;x<o.length;x++)S=o[x],!(f.indexOf(S)>=0)&&(g[S]=r[S]);return g}function Vm(r,f){if(r==null)return{};var g=Gm(r,f),o,S;if(Object.getOwnPropertySymbols){var x=Object.getOwnPropertySymbols(r);for(S=0;S<x.length;S++)o=x[S],!(f.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(r,o)&&(g[o]=r[o])}return g}function Zm(r,f){return Xm(r)||Qm(r,f)||Km(r,f)||Wm()}function Xm(r){if(Array.isArray(r))return r}function Qm(r,f){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(r)))){var g=[],o=!0,S=!1,x=void 0;try{for(var L=r[Symbol.iterator](),V;!(o=(V=L.next()).done)&&(g.push(V.value),!(f&&g.length===f));o=!0);}catch(O){S=!0,x=O}finally{try{!o&&L.return!=null&&L.return()}finally{if(S)throw x}}return g}}function Km(r,f){if(r){if(typeof r=="string")return Xd(r,f);var g=Object.prototype.toString.call(r).slice(8,-1);if(g==="Object"&&r.constructor&&(g=r.constructor.name),g==="Map"||g==="Set")return Array.from(r);if(g==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(g))return Xd(r,f)}}function Xd(r,f){(f==null||f>r.length)&&(f=r.length);for(var g=0,o=new Array(f);g<f;g++)o[g]=r[g];return o}function Wm(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Jm(r,f,g){return f in r?Object.defineProperty(r,f,{value:g,enumerable:!0,configurable:!0,writable:!0}):r[f]=g,r}function Qd(r,f){var g=Object.keys(r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);f&&(o=o.filter(function(S){return Object.getOwnPropertyDescriptor(r,S).enumerable})),g.push.apply(g,o)}return g}function Kd(r){for(var f=1;f<arguments.length;f++){var g=arguments[f]!=null?arguments[f]:{};f%2?Qd(Object(g),!0).forEach(function(o){Jm(r,o,g[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(g)):Qd(Object(g)).forEach(function(o){Object.defineProperty(r,o,Object.getOwnPropertyDescriptor(g,o))})}return r}function Fm(){for(var r=arguments.length,f=new Array(r),g=0;g<r;g++)f[g]=arguments[g];return function(o){return f.reduceRight(function(S,x){return x(S)},o)}}function ja(r){return function f(){for(var g=this,o=arguments.length,S=new Array(o),x=0;x<o;x++)S[x]=arguments[x];return S.length>=r.length?r.apply(this,S):function(){for(var L=arguments.length,V=new Array(L),O=0;O<L;O++)V[O]=arguments[O];return f.apply(g,[].concat(S,V))}}}function ru(r){return{}.toString.call(r).includes("Object")}function $m(r){return!Object.keys(r).length}function ka(r){return typeof r=="function"}function Im(r,f){return Object.prototype.hasOwnProperty.call(r,f)}function Pm(r,f){return ru(f)||Rl("changeType"),Object.keys(f).some(function(g){return!Im(r,g)})&&Rl("changeField"),f}function ep(r){ka(r)||Rl("selectorType")}function tp(r){ka(r)||ru(r)||Rl("handlerType"),ru(r)&&Object.values(r).some(function(f){return!ka(f)})&&Rl("handlersType")}function lp(r){r||Rl("initialIsRequired"),ru(r)||Rl("initialType"),$m(r)&&Rl("initialContent")}function np(r,f){throw new Error(r[f]||r.default)}var ap={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},Rl=ja(np)(ap),au={changes:Pm,selector:ep,handler:tp,initial:lp};function ip(r){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};au.initial(r),au.handler(f);var g={current:r},o=ja(rp)(g,f),S=ja(cp)(g),x=ja(au.changes)(r),L=ja(up)(g);function V(){var z=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(N){return N};return au.selector(z),z(g.current)}function O(z){Fm(o,S,x,L)(z)}return[V,O]}function up(r,f){return ka(f)?f(r.current):f}function cp(r,f){return r.current=Kd(Kd({},r.current),f),f}function rp(r,f,g){return ka(f)?f(r.current):Object.keys(g).forEach(function(o){var S;return(S=f[o])===null||S===void 0?void 0:S.call(f,r.current[o])}),g}var op={create:ip},sp={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs"}};function fp(r){return function f(){for(var g=this,o=arguments.length,S=new Array(o),x=0;x<o;x++)S[x]=arguments[x];return S.length>=r.length?r.apply(this,S):function(){for(var L=arguments.length,V=new Array(L),O=0;O<L;O++)V[O]=arguments[O];return f.apply(g,[].concat(S,V))}}}function dp(r){return{}.toString.call(r).includes("Object")}function hp(r){return r||Wd("configIsRequired"),dp(r)||Wd("configType"),r.urls?(gp(),{paths:{vs:r.urls.monacoBase}}):r}function gp(){console.warn(lh.deprecation)}function mp(r,f){throw new Error(r[f]||r.default)}var lh={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},Wd=fp(mp)(lh),pp={config:hp},yp=function(){for(var f=arguments.length,g=new Array(f),o=0;o<f;o++)g[o]=arguments[o];return function(S){return g.reduceRight(function(x,L){return L(x)},S)}};function nh(r,f){return Object.keys(f).forEach(function(g){f[g]instanceof Object&&r[g]&&Object.assign(f[g],nh(r[g],f[g]))}),Zd(Zd({},r),f)}var bp={type:"cancelation",msg:"operation is manually canceled"};function Or(r){var f=!1,g=new Promise(function(o,S){r.then(function(x){return f?S(bp):o(x)}),r.catch(S)});return g.cancel=function(){return f=!0},g}var vp=op.create({config:sp,isInitialized:!1,resolve:null,reject:null,monaco:null}),ah=Zm(vp,2),Va=ah[0],ou=ah[1];function Sp(r){var f=pp.config(r),g=f.monaco,o=Vm(f,["monaco"]);ou(function(S){return{config:nh(S.config,o),monaco:g}})}function Tp(){var r=Va(function(f){var g=f.monaco,o=f.isInitialized,S=f.resolve;return{monaco:g,isInitialized:o,resolve:S}});if(!r.isInitialized){if(ou({isInitialized:!0}),r.monaco)return r.resolve(r.monaco),Or(Dr);if(window.monaco&&window.monaco.editor)return ih(window.monaco),r.resolve(window.monaco),Or(Dr);yp(zp,Ap)(wp)}return Or(Dr)}function zp(r){return document.body.appendChild(r)}function Ep(r){var f=document.createElement("script");return r&&(f.src=r),f}function Ap(r){var f=Va(function(o){var S=o.config,x=o.reject;return{config:S,reject:x}}),g=Ep("".concat(f.config.paths.vs,"/loader.js"));return g.onload=function(){return r()},g.onerror=f.reject,g}function wp(){var r=Va(function(g){var o=g.config,S=g.resolve,x=g.reject;return{config:o,resolve:S,reject:x}}),f=window.require;f.config(r.config),f(["vs/editor/editor.main"],function(g){ih(g),r.resolve(g)},function(g){r.reject(g)})}function ih(r){Va().monaco||ou({monaco:r})}function Mp(){return Va(function(r){var f=r.monaco;return f})}var Dr=new Promise(function(r,f){return ou({resolve:r,reject:f})}),uh={config:Sp,init:Tp,__getMonacoInstance:Mp},Op={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},xr=Op,Dp={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},xp=Dp;function Up({children:r}){return Hl.createElement("div",{style:xp.container},r)}var Hp=Up,Rp=Hp;function Bp({width:r,height:f,isEditorReady:g,loading:o,_ref:S,className:x,wrapperProps:L}){return Hl.createElement("section",{style:{...xr.wrapper,width:r,height:f},...L},!g&&Hl.createElement(Rp,null,o),Hl.createElement("div",{ref:S,style:{...xr.fullWidth,...!g&&xr.hide},className:x}))}var _p=Bp,ch=I.memo(_p);function Np(r){I.useEffect(r,[])}var rh=Np;function Lp(r,f,g=!0){let o=I.useRef(!0);I.useEffect(o.current||!g?()=>{o.current=!1}:r,f)}var Tt=Lp;function Ya(){}function qn(r,f,g,o){return Cp(r,o)||qp(r,f,g,o)}function Cp(r,f){return r.editor.getModel(oh(r,f))}function qp(r,f,g,o){return r.editor.createModel(f,g,o?oh(r,o):void 0)}function oh(r,f){return r.Uri.parse(f)}function jp({original:r,modified:f,language:g,originalLanguage:o,modifiedLanguage:S,originalModelPath:x,modifiedModelPath:L,keepCurrentOriginalModel:V=!1,keepCurrentModifiedModel:O=!1,theme:z="light",loading:N="Loading...",options:Q={},height:F="100%",width:Se="100%",className:Me,wrapperProps:Te={},beforeMount:Ee=Ya,onMount:Ke=Ya}){let[ee,ue]=I.useState(!1),[Oe,G]=I.useState(!0),se=I.useRef(null),le=I.useRef(null),Ae=I.useRef(null),he=I.useRef(Ke),ie=I.useRef(Ee),je=I.useRef(!1);rh(()=>{let W=uh.init();return W.then(T=>(le.current=T)&&G(!1)).catch(T=>T?.type!=="cancelation"&&console.error("Monaco initialization: error:",T)),()=>se.current?nt():W.cancel()}),Tt(()=>{if(se.current&&le.current){let W=se.current.getOriginalEditor(),T=qn(le.current,r||"",o||g||"text",x||"");T!==W.getModel()&&W.setModel(T)}},[x],ee),Tt(()=>{if(se.current&&le.current){let W=se.current.getModifiedEditor(),T=qn(le.current,f||"",S||g||"text",L||"");T!==W.getModel()&&W.setModel(T)}},[L],ee),Tt(()=>{let W=se.current.getModifiedEditor();W.getOption(le.current.editor.EditorOption.readOnly)?W.setValue(f||""):f!==W.getValue()&&(W.executeEdits("",[{range:W.getModel().getFullModelRange(),text:f||"",forceMoveMarkers:!0}]),W.pushUndoStop())},[f],ee),Tt(()=>{se.current?.getModel()?.original.setValue(r||"")},[r],ee),Tt(()=>{let{original:W,modified:T}=se.current.getModel();le.current.editor.setModelLanguage(W,o||g||"text"),le.current.editor.setModelLanguage(T,S||g||"text")},[g,o,S],ee),Tt(()=>{le.current?.editor.setTheme(z)},[z],ee),Tt(()=>{se.current?.updateOptions(Q)},[Q],ee);let Ue=I.useCallback(()=>{if(!le.current)return;ie.current(le.current);let W=qn(le.current,r||"",o||g||"text",x||""),T=qn(le.current,f||"",S||g||"text",L||"");se.current?.setModel({original:W,modified:T})},[g,f,S,r,o,x,L]),Ge=I.useCallback(()=>{!je.current&&Ae.current&&(se.current=le.current.editor.createDiffEditor(Ae.current,{automaticLayout:!0,...Q}),Ue(),le.current?.editor.setTheme(z),ue(!0),je.current=!0)},[Q,z,Ue]);I.useEffect(()=>{ee&&he.current(se.current,le.current)},[ee]),I.useEffect(()=>{!Oe&&!ee&&Ge()},[Oe,ee,Ge]);function nt(){let W=se.current?.getModel();V||W?.original?.dispose(),O||W?.modified?.dispose(),se.current?.dispose()}return Hl.createElement(ch,{width:Se,height:F,isEditorReady:ee,loading:N,_ref:Ae,className:Me,wrapperProps:Te})}var Yp=jp;I.memo(Yp);function kp(r){let f=I.useRef();return I.useEffect(()=>{f.current=r},[r]),f.current}var Gp=kp,iu=new Map;function Vp({defaultValue:r,defaultLanguage:f,defaultPath:g,value:o,language:S,path:x,theme:L="light",line:V,loading:O="Loading...",options:z={},overrideServices:N={},saveViewState:Q=!0,keepCurrentModel:F=!1,width:Se="100%",height:Me="100%",className:Te,wrapperProps:Ee={},beforeMount:Ke=Ya,onMount:ee=Ya,onChange:ue,onValidate:Oe=Ya}){let[G,se]=I.useState(!1),[le,Ae]=I.useState(!0),he=I.useRef(null),ie=I.useRef(null),je=I.useRef(null),Ue=I.useRef(ee),Ge=I.useRef(Ke),nt=I.useRef(),W=I.useRef(o),T=Gp(x),B=I.useRef(!1),k=I.useRef(!1);rh(()=>{let A=uh.init();return A.then(H=>(he.current=H)&&Ae(!1)).catch(H=>H?.type!=="cancelation"&&console.error("Monaco initialization: error:",H)),()=>ie.current?d():A.cancel()}),Tt(()=>{let A=qn(he.current,r||o||"",f||S||"",x||g||"");A!==ie.current?.getModel()&&(Q&&iu.set(T,ie.current?.saveViewState()),ie.current?.setModel(A),Q&&ie.current?.restoreViewState(iu.get(x)))},[x],G),Tt(()=>{ie.current?.updateOptions(z)},[z],G),Tt(()=>{!ie.current||o===void 0||(ie.current.getOption(he.current.editor.EditorOption.readOnly)?ie.current.setValue(o):o!==ie.current.getValue()&&(k.current=!0,ie.current.executeEdits("",[{range:ie.current.getModel().getFullModelRange(),text:o,forceMoveMarkers:!0}]),ie.current.pushUndoStop(),k.current=!1))},[o],G),Tt(()=>{let A=ie.current?.getModel();A&&S&&he.current?.editor.setModelLanguage(A,S)},[S],G),Tt(()=>{V!==void 0&&ie.current?.revealLine(V)},[V],G),Tt(()=>{he.current?.editor.setTheme(L)},[L],G);let oe=I.useCallback(()=>{if(!(!je.current||!he.current)&&!B.current){Ge.current(he.current);let A=x||g,H=qn(he.current,o||r||"",f||S||"",A||"");ie.current=he.current?.editor.create(je.current,{model:H,automaticLayout:!0,...z},N),Q&&ie.current.restoreViewState(iu.get(A)),he.current.editor.setTheme(L),V!==void 0&&ie.current.revealLine(V),se(!0),B.current=!0}},[r,f,g,o,S,x,z,N,Q,L,V]);I.useEffect(()=>{G&&Ue.current(ie.current,he.current)},[G]),I.useEffect(()=>{!le&&!G&&oe()},[le,G,oe]),W.current=o,I.useEffect(()=>{G&&ue&&(nt.current?.dispose(),nt.current=ie.current?.onDidChangeModelContent(A=>{k.current||ue(ie.current.getValue(),A)}))},[G,ue]),I.useEffect(()=>{if(G){let A=he.current.editor.onDidChangeMarkers(H=>{let R=ie.current.getModel()?.uri;if(R&&H.find(q=>q.path===R.path)){let q=he.current.editor.getModelMarkers({resource:R});Oe?.(q)}});return()=>{A?.dispose()}}return()=>{}},[G,Oe]);function d(){nt.current?.dispose(),F?Q&&iu.set(x,ie.current.saveViewState()):ie.current.getModel()?.dispose(),ie.current.dispose()}return Hl.createElement(ch,{width:Se,height:Me,isEditorReady:G,loading:O,_ref:je,className:Te,wrapperProps:Ee})}var Zp=Vp,Xp=I.memo(Zp),Qp=Xp;const Ur=[`<!DOCTYPE html>
<html lang="de">
<head>
 <meta charset="UTF-8" />
 <title>Ubiquitous Applications – HTML, CSS, JavaScript</title>
</head>
<body>

 <h2>Ubiquitous Applications</h2>

 <p><strong>Vorlesung Internet-Medien – Teil II</strong></p>
 <ul>
   <li>HTML</li>
   <li>Formulare</li>
   <li>CSS</li>
   <li>JavaScript</li>
 </ul>

 <p><strong>Prof. Dr. K. Mehner-Heindl</strong><br />
 <strong>01.05.2020</strong></p>

 <h3>Interaktive Webseiten – Entstehungsgeschichte (1)</h3>
 <ul>
   <li>Internet seit 1969
     <ul>
       <li>Vernetzung US-amerikanischer Universitäten/Institute</li>
       <li>Vorläufer seit ca. 1962 (Licklider et al.)</li>
     </ul>
   </li>
   <li>Netzwerk von Großrechnern „ARPANET“<br />
     (Advanced Research Projects Agency Network)
     <ul>
       <li>Noch 1971 überwiegend Email</li>
       <li>Ca. 1973 TCP/IP (Cerf et al.)</li>
     </ul>
   </li>
   <li>Verschiedene Protokolle: telnet, ftp, email, http, …</li>
 </ul>
 <p><em>(*ARPA 1958–1972, 1993–1996, Defense ARPA seit 1996 und 1972–1993)</em></p>

 <h3>Interaktive Webseiten – Entstehungsgeschichte (2)</h3>
 <ul>
   <li>Ted Nelson, USA, 1965
     <ul>
       <li>„Einfache Benutzeroberflächen, um Computer für normale Menschen zugängig zu machen“</li>
       <li>Projekt Xanadu: Definition Hypertext</li>
       <li>Rechtemanagement, Mikropayment</li>
       <li>Bidirektionale Hyperlinks</li>
       <li>Sehr komplex, nie fertig realisiert</li>
     </ul>
   </li>
 </ul>

 <h3>Interaktive Webseiten – Entstehungsgeschichte (3)</h3>
 <ul>
   <li>Tim Berners-Lee, CERN Genf, März 1989
     <ul>
       <li>„Datenaustausch und Verknüpfung in der Forschergemeinde“</li>
       <li>Erste Webseite (siehe info.cern.ch)</li>
       <li>Hypertext, später http, HTML, URL-Vorläufer</li>
       <li>WWW, Suchmaschine, Server, Browser, Editor</li>
     </ul>
   </li>
   <li>Vorsitzender und Gründer des World Wide Web Consortium (W3C, 1994)</li>
   <li>Professor am MIT und in Oxford</li>
 </ul>

 <h3>Interaktive Webseiten – Entstehungsgeschichte (4)</h3>
 <ul>
   <li>Markups wurden früher als Hinweise für den Druckvorgang verwendet</li>
   <li>HTML zur statischen Webseitenerzeugung
     <ul>
       <li>Ergänzt um CSS für Layoutbeschreibung</li>
       <li>HTML enthält Formulare</li>
       <li>Ergänzt um JavaScript für Interaktivität</li>
     </ul>
   </li>
   <li>Aktuell: HTML5 und CSS3</li>
 </ul>

</body>
</html>`,`<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <title>Lesson 2 – HTML Grundlagen</title>
</head>
<body>

  <h2>Auszeichnungssprache HTML</h2>

  <ul>
    <li>Hypertext Markup Language für Erstellung von Webseiten</li>
  </ul>

  <h3>Ein HTML-Dokument:</h3>
  <ul>
    <li>Erzeugt Webseiten mit:
      <ul>
        <li>Formatierter Schrift</li>
        <li>Bildern</li>
        <li>Videos</li>
        <li>Links</li>
      </ul>
    </li>
    <li>Enthält Quelltext mit:
      <ul>
        <li>Tags zur Darstellung der Inhalte</li>
        <li>Natürliche Sprache</li>
        <li>Dateinamen und Adressen (Text, Bild, Webseiten)</li>
      </ul>
    </li>
  </ul>

  <h3>HTML-Grammatik:</h3>
  <ul>
    <li>Reservierte Zeichen: &lt;, &gt;, &amp;</li>
    <li>Tags: <code>&lt;…&gt;</code> und <code>&lt;/…&gt;</code>, Attribute, Schachtelung</li>
    <li>Fließtext mit Sonderzeichen</li>
  </ul>

  <hr />

  <h3>🎯 Studienziel – Aufgabe im Code Editor</h3>
  <p>
    Schreiben Sie ein HTML-Dokument, das nur die Zeile <code>&lt;h1&gt;Hello, World!&lt;/h1&gt;</code> korrekt darstellt.
  </p>

  <p><em>English Translation:</em></p>
  <p><em>
    Write an HTML document that correctly displays only the line <code>&lt;h1&gt;Hello, World!&lt;/h1&gt;</code>.
  </em></p>

</body>
</html>
`,`<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <title>Lesson 3 – HTML Werkzeuge und Struktur</title>
</head>
<body>

  <h2>Wie arbeitet man mit HTML?</h2>
  <ul>
    <li>Quelltext-Erstellung notwendig
      <ul>
        <li>WYSIWYG = What You See Is What You Get
          <ul>
            <li>Grafische Oberfläche</li>
            <li>Automatischer Quelltext (manchmal unzureichend)</li>
          </ul>
        </li>
      </ul>
    </li>
    <li>Syntaxgesteuerte Editoren:
      <ul>
        <li>Textbasiert mit Highlighting und Prüfung</li>
      </ul>
    </li>
    <li>Kombination beider Methoden:
      <ul>
        <li>Single-Source-Betrieb</li>
        <li>Zwei Ansichten für einen Quelltext</li>
        <li>Nachteil: Quelltext schwer lesbar/änderbar</li>
      </ul>
    </li>
  </ul>

  <h2>Logische Struktur und Layoutregeln</h2>
  <ol>
    <li>Logische Struktur eines Dokuments
      <ul>
        <li>Kapitel, Überschrift, Abschnitt, Aufzählung, Hervorhebung, etc.</li>
      </ul>
    </li>
    <li>Stildefinition (Layoutregeln)</li>
    <li>Layoutstruktur (physische Darstellung)
      <ul>
        <li>Textblock, Zeile, Schriftart, Ausrichtung, Farbe …</li>
      </ul>
    </li>
  </ol>

  <p>→ Trennung von Inhalt und Stilbeschreibung</p>

  <h2>… im World Wide Web</h2>
  <ol>
    <li>Logische Struktur: HTML-Quelltext</li>
    <li>Stile:
      <ul>
        <li>Standard (Default)</li>
        <li>CSS (Cascading Style Sheets)</li>
        <li>Browser-spezifische Darstellung</li>
      </ul>
    </li>
    <li>Darstellung durch Webbrowser</li>
  </ol>

  <p><strong>HTML5 – Vorgänger:</strong> HTML 1.0, 2.0, 3.2, 4, XHTML 1.0/1.1</p>

  <table border="1">
    <thead>
      <tr>
        <th>Logische Struktur</th>
        <th>Stil (CSS)</th>
        <th>Physische Darstellung</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>&lt;h1&gt;Überschrift&lt;/h1&gt;</td>
        <td>fett, 2-fach vergrößert,<br>0.67-facher Abstand</td>
        <td>Überschrift</td>
      </tr>
      <tr>
        <td>&lt;em&gt;betont&lt;/em&gt;</td>
        <td>kursiv</td>
        <td>betont</td>
      </tr>
      <tr>
        <td>…</td>
        <td>…</td>
        <td>…</td>
      </tr>
    </tbody>
  </table>

  <hr />

  <h3>🎯 Studienziel – Aufgabe im Code Editor</h3>
  <p>
    Schreiben Sie eine HTML-Zeile, die das Wort <strong>I am small</strong> als betonten Text formatiert.  
    Verwenden Sie dazu ein passendes Tag aus dieser Lektion.  
    Der Text soll im Browser sichtbar sein und betont erscheinen.
  </p>

  <p><em>English Translation:</em></p>
  <p><em>
    Write a single line of HTML that formats the phrase <strong>I am small</strong> as emphasized text.  
    Use a tag introduced in this lesson.  
    The text should be visible in the browser and appear emphasized.
  </em></p>

</body>
</html>
`,`<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <title>Lesson 4 – Grundstruktur von HTML-Dokumenten</title>
</head>
<body>

  <h2>HTML-Dokument: Grundstruktur</h2>

  <ul>
    <li><code>&lt;!doctype html&gt;</code>
      <ul>
        <li>nicht Case-sensitiv</li>
        <li>formal nicht erforderlich</li>
        <li>kein HTML-Tag</li>
        <li>beeinflusst das Verhalten der Browser</li>
        <li>keine Angabe der HTML-Version</li>
      </ul>
    </li>

    <li><code>&lt;html lang="de"&gt;</code>
      <ul>
        <li>Angabe der Sprache empfohlen</li>
        <li>wird von Suchmaschinen genutzt</li>
      </ul>
    </li>

    <li><code>&lt;head&gt; … &lt;/head&gt;</code>
      <ul>
        <li>Vorspann (Kopfteil, engl. Header), auf das gesamte Dokument bezogen</li>
      </ul>
    </li>

    <li><code>&lt;body&gt; … &lt;/body&gt;</code>
      <ul>
        <li>Dokumentkörper</li>
      </ul>
    </li>

    <li><code>&lt;/html&gt;</code>
      <ul>
        <li>schließt das HTML-Dokument ab</li>
      </ul>
    </li>
  </ul>


  <h2>🎯 Studienziel – Aufgabe im Code Editor</h2>

<p>Erstelle eine einfache HTML-Seite mit einem Titel, einer Hauptüberschrift und einem Absatz.</p>

<ul>
  <li>Verwende <code>&lt;!DOCTYPE html&gt;</code>, um den Dokumenttyp zu deklarieren.</li>
  <li>Öffne das HTML-Dokument mit <code>&lt;html&gt;</code> und setze das Sprachattribut auf Deutsch.</li>
  <li>Im <code>&lt;head&gt;</code>-Bereich gib der Seite einen <code>&lt;title&gt;</code>, z.&nbsp;B. „Skeleton Page“.</li>
  <li>Im <code>&lt;body&gt;</code>-Bereich füge eine <code>&lt;h1&gt;</code>-Überschrift ein mit dem Text „Skeletons Are Awesome“.</li>
  <li>Schreibe einen kurzen Absatz mit <code>&lt;p&gt;</code>, z.&nbsp;B. „They hold everything together.“</li>
</ul>

<p><em>English Translation: Create a simple HTML page with a title, a main heading, and a paragraph.</em></p>

<ul>
  <li><em>Use <code>&lt;!DOCTYPE html&gt;</code> to declare the document type.</em></li>
  <li><em>Start the HTML document with <code>&lt;html&gt;</code> and set the language to German.</em></li>
  <li><em>Inside the <code>&lt;head&gt;</code>, give the page a <code>&lt;title&gt;</code>, e.g., "Skeleton Page".</em></li>
  <li><em>Inside the <code>&lt;body&gt;</code>, add an <code>&lt;h1&gt;</code> heading with the text "Skeletons Are Awesome".</em></li>
  <li><em>Write a short paragraph using <code>&lt;p&gt;</code>, e.g., "They hold everything together."</em></li>
</ul>


</body>
</html>
`,`<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <title>Lesson 5 – HTML5 Tags</title>
</head>
<body>

  <h2>HTML5 Tags</h2>

  <ul>
    <li>Tags (auch: Auszeichnungen) definieren <strong>Elemente einer Web-Seite</strong></li>
    <li>Sie stehen in spitzen Klammern:
      <ul>
        <li>Anfangs-Tag: <code>&lt;...&gt;</code></li>
        <li>End-Tag: <code>&lt;/...&gt;</code></li>
      </ul>
    </li>
    <li>Es wird empfohlen, <strong>Kleinbuchstaben</strong> zu verwenden.</li>
    <li>Tags können Attribute enthalten, mit benannten Werten:
      <ul>
        <li>Schreibweise: <code>attribut="wert"</code></li>
      </ul>
    </li>
    <li>Alle Tags müssen <strong>korrekt geschachtelt</strong> werden.  
      <br />Das bedeutet: Öffnende und schließende Tags dürfen sich nicht überlappen.
    </li>
    <li>Beispiel einer <strong>Grundstruktur einer Webseite</strong>:
      <pre><code>
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Seitentitel&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Überschrift&lt;/h1&gt;
    &lt;p&gt;Textabschnitt&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;
      </code></pre>
    </li>
    <li>Wichtig:  
      <br />Die Schachtelung muss logisch sein — ein Tag darf nicht innerhalb eines anderen geöffnet und außerhalb davon geschlossen werden.
    </li>
  </ul>

</body>
</html>
`,`<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <title>Lesson 6 – Elementare Tags im Head</title>
</head>
<body>

  <h2>Elementare Tags im Head</h2>

  <ul>
    <li><strong>Titel:</strong> <code>&lt;title&gt; … &lt;/title&gt;</code>
      <ul>
        <li>erscheint in Kopfleiste des Fensters und bei Bookmarks</li>
        <li>in der Regel verpflichtend</li>
      </ul>
    </li>

    <li><strong>Zeichensatz:</strong> <code>&lt;meta charset="UTF-8" /&gt;</code>
      <ul>
        <li>singulärer Tag mit Schrägstrich innerhalb der Klammern</li>
        <li>UTF-8 Kodierung von Unicode-Zeichen (umfasst ASCII)</li>
        <li>1 bis 4 Byte lang</li>
      </ul>
    </li>

    <li><strong>Beschreibung der Inhalte:</strong>  
      <code>&lt;meta name="description" content="Ihr Text" /&gt;</code>
      <ul>
        <li>singulärer Tag</li>
        <li>festgelegter Wert für <code>name</code>, freiwählbare Angaben für <code>content</code></li>
      </ul>
    </li>
  </ul>

</body>
</html>
`,`<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <title>Lesson 7 – Gesamter Head & UTF-8</title>
</head>
<body>

  <h2>Gesamter Head</h2>

  <pre><code>
&lt;!doctype html&gt;
&lt;html lang="de"&gt;
&lt;head&gt;
  &lt;title&gt;Ihr Seitentitel&lt;/title&gt;
  &lt;meta charset="UTF-8" /&gt;
  &lt;meta name="description" content="Kurze Beschreibung" /&gt;
&lt;/head&gt;
  </code></pre>

  <h3>Erinnerung: Universal Character Set Transformation Format UTF-8</h3>

  <ul>
    <li>Im Unicode werden weltweit verwendete Zeichen in eine feste Reihenfolge gebracht.
      <ul>
        <li>Die lateinischen Buchstaben befinden sich unter den ersten 128 Zeichen (wie im ASCII-Code).</li>
        <li>Die Umlaute finden sich erst ab der Stelle 196.</li>
      </ul>
    </li>

    <li>In der Kodierung UTF-8 wird jede Position mit maximal 4 Byte kodiert  
      (theoretisch sind 8 Bytes für über 4 Billionen Zeichen möglich)
      <ul>
        <li>Die ersten 128 Zeichen werden durch 1 Byte (= 8 Bit) kodiert.</li>
        <li>Die Umlaute der deutschen Sprache benötigen 2 Byte.</li>
      </ul>
    </li>

    <li>Wir verwenden UTF-8 im Editor und stellen UTF-8 im HTML-Head ein,  
      damit Umlaute korrekt dargestellt werden!</li>
  </ul>

  <h3>Praktische Übungen</h3>

  <ul>
    <li><strong>Editor</strong>
      <ul>
        <li>z. B. Notepad++, https://notepad-plus-plus.org/</li>
        <li>Kein Editor, der rtf, doc, odt erzeugt</li>
        <li>JSFiddle, https://jsfiddle.net/</li>
      </ul>
    </li>
    <li><strong>Webbrowser</strong>
      <ul>
        <li>Firefox, Chrome, Internet Explorer, Safari, …</li>
      </ul>
    </li>
    <li>Umgang mit Datei-Explorer / Browser wird vorausgesetzt</li>
  </ul>

  <h3>Praktische Übung: In Notepad++ Kodierung prüfen</h3>
  
  <img src='https://i.imgur.com/1PxiOKf.png'/>

  <h3>Praktische Übung: In Notepad++ HTML speichern</h3>
  
  <img src='https://i.imgur.com/THbTm7I.png'/>
  <h3>Praktische Übung: 1. Aufgabe</h3>

  <ol>
    <li>Erzeugen Sie mit einem Editor eine Datei mit Endung <code>.html</code>.
      <ul>
        <li>Prüfen Sie zunächst das Encoding und ändern Sie es ggf.  
        Dies muss <strong>vor dem ersten Tippen und Speichern</strong> erfolgen!</li>
      </ul>
    </li>

    <li>Wählen Sie dann „Speichern unter“, um den Namen und die Endung der Datei zu ändern!</li>
    <li>Tippen Sie die Struktur der Webseite und den Head ab.</li>
    <li>Farbliche Vorhebungen erscheinen. Speichern Sie die Datei.</li>
    <li>Öffnen Sie die Datei im Webbrowser.</li>
  </ol>

  <blockquote>Die Webseite sollte leer sein, aber der Reiter ist beschriftet.</blockquote>

  <h3>Praktische Übung: 1. Aufgabe – Lösung</h3>
  <p><em>(Beispielhafte HTML-Datei mit <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>, <code>&lt;title&gt;</code> etc. – wurde im Bild oder Textform gezeigt.)</em></p>

</body>
</html>
`,`<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <title>Lesson 8 – Elementare Tags im Body (1)</title>
</head>
<body>

  <h2>Elementare Tags im Body (1)</h2>

  <ul>
    <li><strong>Überschriften (engl. Headings)</strong><br />
      <code>&lt;h1&gt; … &lt;/h1&gt;</code>, … <code>&lt;h6&gt; … &lt;/h6&gt;</code><br />
      → in 6 Hierarchiestufen
    </li>

    <li><strong>Absätze (engl. Paragraph)</strong><br />
      <code>&lt;p&gt; … &lt;/p&gt;</code>
    </li>
  </ul>


  <h2>🎯 Studienziel – Aufgabe im Code Editor</h2>

<p>Erstellen Sie eine einfache Webseite mit <strong>Überschriften</strong> und <strong>Absätzen</strong>.<br>
Verwenden Sie dazu die folgenden HTML-Elemente innerhalb des <code>&lt;body&gt;</code>-Bereichs:</p>

<ul>
  <li>Eine große Hauptüberschrift (<code>&lt;h1&gt;</code>) mit dem Text <strong>Main Topic</strong></li>
  <li>Einen Absatz (<code>&lt;p&gt;</code>) direkt unter der <code>&lt;h1&gt;</code>-Überschrift, in dem Sie <em>The invention of Minecraft.</em> schreiben</li>
  <li>Eine kleinere Überschrift (<code>&lt;h2&gt;</code>) mit dem Text <strong>Subtopic</strong></li>
  <li>Einen neuen Absatz (<code>&lt;p&gt;</code>) unter dieser, mit dem Satz: <em>The Minecraft file first crash landed from a meteor.</em></li>
  <li>Eine noch kleinere Überschrift (<code>&lt;h3&gt;</code>) mit dem Text <strong>Smaller Detail</strong></li>
  <li>Und zuletzt einen Absatz (<code>&lt;p&gt;</code>) unter der <code>&lt;h3&gt;</code>, mit dem Satz: <em>Today this meteor is hosted in the Minecraft Museum.</em></li>
</ul>

<p>Achten Sie auf die richtige <strong>Verschachtelung und Reihenfolge</strong> der Elemente. Schreiben Sie alles im <code>&lt;body&gt;</code>-Teil Ihrer HTML-Seite.</p>

<p><em>English translation:</em></p>

<p>Create a simple webpage using <strong>headings</strong> and <strong>paragraphs</strong>.<br>
Inside the <code>&lt;body&gt;</code> section, do the following:</p>

<ul>
  <li>Add a large main heading (<code>&lt;h1&gt;</code>) with the text <strong>Main Topic</strong></li>
  <li>Add a paragraph (<code>&lt;p&gt;</code>) directly under the <code>&lt;h1&gt;</code> that says: <em>The invention of Minecraft.</em></li>
  <li>Add a smaller heading (<code>&lt;h2&gt;</code>) with the text <strong>Subtopic</strong></li>
  <li>Add a paragraph under it that says: <em>The Minecraft file first crash landed from a meteor.</em></li>
  <li>Add an even smaller heading (<code>&lt;h3&gt;</code>) with the text <strong>Smaller Detail</strong></li>
  <li>And finally, a paragraph that says: <em>Today this meteor is hosted in the Minecraft Museum.</em></li>
</ul>

<p>Make sure all the elements are in the correct <strong>order and structure</strong> inside the <code>&lt;body&gt;</code> tag.</p>


</body>
</html>
`,`<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <title>Lesson 9 – Elementare Tags im Body (2)</title>
</head>
<body>

  <h2>Elementare Tags im Body (2)</h2>

  <ul>
    <li><strong>nummerierte Listen (ordered)</strong><br />
      <code>&lt;ol&gt; … &lt;/ol&gt;</code>
    </li>

    <li><strong>Aufzählungslisten (unordered)</strong><br />
      <code>&lt;ul&gt; … &lt;/ul&gt;</code>
    </li>

    <li><strong>Listeneinträge (list item)</strong><br />
      <code>&lt;li&gt; … &lt;/li&gt;</code>
      <ul>
        <li>auch notwendig für geschachtelte Liste</li>
        <li>kein Text zwischen <code>&lt;ol&gt;</code> oder <code>&lt;ul&gt;</code> und jedem <code>&lt;li&gt;</code></li>
        <li><code>&lt;ol&gt;</code>, <code>&lt;ul&gt;</code> nicht innerhalb von <code>&lt;p&gt;</code> erlaubt</li>
        <li>mit CSS kann man Aussehen von Listen ändern</li>
      </ul>
    </li>
  </ul>


  <h3>🎯 Studienziel – Aufgabe im Code Editor</h3>

<p>Erstelle eine HTML-Seite mit dem Thema „Human Transmutation Guide“, bei der du zwei Arten von Listen korrekt verwendest.</p>

<ul>
  <li>Verwende eine Hauptüberschrift mit <code>&lt;h1&gt;</code>, die den Titel der Seite zeigt.</li>
  <li>Unter der Hauptüberschrift erstelle zwei Unterüberschriften mit <code>&lt;h2&gt;</code>:
    <ul>
      <li>Die erste Unterüberschrift beschreibt „Boys are made of“.</li>
      <li>Die zweite Unterüberschrift beschreibt „Girls are made of“.</li>
    </ul>
  </li>
  <li>Unter jeder <code>&lt;h2&gt;</code>-Überschrift erstellst du eine passende Liste:
    <ul>
      <li>Verwende eine <strong>nummerierte Liste</strong> (<code>&lt;ol&gt;</code>) für „Boys are made of“.</li>
      <li>Verwende eine <strong>Aufzählungsliste</strong> (<code>&lt;ul&gt;</code>) für „Girls are made of“.</li>
    </ul>
  </li>
  <li>Jede Liste muss genau <strong>drei</strong> Einträge enthalten. Jeder Eintrag wird mit <code>&lt;li&gt;</code> geschrieben.</li>
  <li>Achte darauf, dass deine Listen <strong>nicht</strong> in einem <code>&lt;p&gt;</code>-Tag stehen und dass du die Tags korrekt verschachtelst.</li>
</ul>

<p><em>English translation:</em></p>

<p><em>Create an HTML page titled “Human Transmutation Guide” in which you correctly use two types of lists.</em></p>

<ul>
  <li><em>Use a main heading with <code>&lt;h1&gt;</code> to show the title of the page.</em></li>
  <li><em>Below the main heading, add two subheadings using <code>&lt;h2&gt;</code>:
    <ul>
      <li><em>The first one should say “Boys are made of”.</em></li>
      <li><em>The second one should say “Girls are made of”.</em></li>
    </ul>
  </li>
  <li><em>Under each <code>&lt;h2&gt;</code>, create the correct type of list:
    <ul>
      <li><em>Use an <strong>ordered list</strong> (<code>&lt;ol&gt;</code>) for “Boys are made of”.</em></li>
      <li><em>Use an <strong>unordered list</strong> (<code>&lt;ul&gt;</code>) for “Girls are made of”.</em></li>
    </ul>
  </li>
  <li><em>Each list must contain exactly <strong>three</strong> items, using the <code>&lt;li&gt;</code> tag for each.</em></li>
  <li><em>Make sure your lists are <strong>not</strong> placed inside a <code>&lt;p&gt;</code> tag and that all tags are properly nested.</em></li>
</ul>


</body>
</html>
`,`<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <title>Lesson 10 – Logische Textauszeichnung, Sonderzeichen</title>
</head>
<body>

  <h2>Logische Textauszeichnung, Sonderzeichen</h2>

  <ul>
    <li>Tags zur logischen Textauszeichnung beschreiben die <strong>logische Verwendung</strong> des eingeschlossenen Textelements,<br />
      nur innerhalb von Paragraphen, Überschriften, Listeneinträgen etc. erlaubt:
      <ul>
        <li><code>&lt;em&gt; … &lt;/em&gt;</code></li>
        <li><code>&lt;strong&gt; … &lt;/strong&gt;</code></li>
      </ul>
    </li>

    <li>Umsetzung in physische Darstellung durch Browser oder CSS:
      <ul>
        <li>Betonung wird oft <em>kursiv</em> dargestellt</li>
        <li>Starke Betonung wird oft <strong>fett</strong> dargestellt</li>
      </ul>
    </li>

    <li><strong>Reservierte Zeichen sind Sonderzeichen:</strong><br />
      <code>&amp;lt;</code>, <code>&amp;gt;</code>, <code>&amp;amp;</code>, <code>&amp;nbsp;</code>, …
    </li>
  </ul>

  <h2>🎯 Studienziel – Aufgabe im Code Editor</h2>
<p>Schreibe <strong>genau diesen Satz</strong> in einem HTML-Absatz:<br>
<code>I am really small</code><br><br>
Verwende dafür den <code>&lt;p&gt;</code>-Tag, um den ganzen Satz als Absatz zu strukturieren.<br>
Verwende zusätzlich den <code>&lt;strong&gt;</code>-Tag, um <strong>nur das Wort</strong> <code>really</code> hervorzuheben, sodass es fett erscheint.<br>
Achte auf die richtige Verschachtelung der Tags und darauf, keine zusätzlichen Leerzeichen oder Zeilenumbrüche einzubauen.
</p>

<p><em>English Translation:</em><br>
Write <strong>this exact sentence</strong> in an HTML paragraph:<br>
<code>I am really small</code><br><br>
Use the <code>&lt;p&gt;</code> tag to structure the entire sentence as a paragraph.<br>
Also, use the <code>&lt;strong&gt;</code> tag to emphasize <strong>only the word</strong> <code>really</code>, making it appear bold.<br>
Be careful to nest your tags properly and avoid adding extra spaces or line breaks.
</p>


</body>
</html>
`,`<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <title>Lesson 11 – Seitenumbruch</title>
</head>
<body>

  <h2>Seitenumbruch</h2>

  <ul>
    <li><strong>Zeilenumbruch</strong>, nur innerhalb von <code>&lt;p&gt;</code> etc. erlaubt:<br />
      <code>&lt;br /&gt;</code>
    </li>

    <li><strong>Horizontale Linien</strong>, nur außerhalb von <code>&lt;p&gt;</code> erlaubt:<br />
      <code>&lt;hr /&gt;</code>
    </li>

    <li><strong>Generisches Blockelement:</strong><br />
      <code>&lt;div&gt; … &lt;/div&gt;</code>
    </li>

    <li><strong>Generisches Inline-Element:</strong><br />
      <code>&lt;span&gt; … &lt;/span&gt;</code>
    </li>
  </ul>

  <h2>🎯 Studienziel – Aufgabe im Code Editor</h2>

<p><strong>Anleitung:</strong></p>
<ol>
  <li>
    Erstelle einen Absatz mit dem Tag <code>&lt;p&gt;</code>, der den Satz enthält:<br />
    <strong>The FNAF lore is very...</strong><br />
    Füge an dieser Stelle einen <strong>Zeilenumbruch</strong> mit dem Tag <code>&lt;br /&gt;</code> ein, und schreibe danach in einer neuen Zeile das Wort <strong>Simple</strong>.
  </li>
  <li>
    Füge <strong>unterhalb dieses Absatzes</strong> eine <strong>horizontale Linie</strong> ein, indem du das Tag <code>&lt;hr /&gt;</code> verwendest.
  </li>
  <li>
    Danach erstelle einen <strong>Blockbereich</strong> mit dem Tag <code>&lt;div&gt;</code>, der zwei Dinge enthält:
    <ul>
      <li>Eine <strong>Überschrift der zweiten Ebene</strong> mit dem Tag <code>&lt;h2&gt;</code> und dem Text <strong>Fun Fact</strong>.</li>
      <li>
        Einen weiteren <strong>Absatz</strong> mit dem Tag <code>&lt;p&gt;</code> und folgendem Text:<br />
        <strong>The <span style="color: red">truth</span> about Freddy Fazbear is that Joe Biden is the suit</strong><br />
        Verwende dafür das Tag <code>&lt;span&gt;</code> und gib darin das Attribut <code>style="color: red"</code> an, um das Wort <strong>truth</strong> rot darzustellen.
      </li>
    </ul>
  </li>
</ol>

<p><em>English translation:</em></p>
<ol>
  <li>
    Create a paragraph using the <code>&lt;p&gt;</code> tag that includes the sentence:<br />
    <em>The FNAF lore is very...</em><br />
    Insert a <strong>line break</strong> using the <code>&lt;br /&gt;</code> tag at this point, and then on the next line write the word <em>Simple</em>.
  </li>
  <li>
    <strong>Below this paragraph</strong>, insert a <strong>horizontal rule</strong> using the <code>&lt;hr /&gt;</code> tag to visually separate sections.
  </li>
  <li>
    Then create a <strong>block container</strong> using the <code>&lt;div&gt;</code> tag that contains two elements:
    <ul>
      <li>A <strong>second-level heading</strong> using the <code>&lt;h2&gt;</code> tag with the text <em>Fun Fact</em>.</li>
      <li>
        Another <strong>paragraph</strong> using the <code>&lt;p&gt;</code> tag with this text:<br />
        <em>The <span style="color: red">truth</span> about Freddy Fazbear is that Joe Biden is the suit</em><br />
        Use the <code>&lt;span&gt;</code> tag and apply <code>style="color: red"</code> to make the word <em>truth</em> appear in red.
      </li>
    </ul>
  </li>
</ol>

</body>
</html>
`,`<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <title>Lesson 12 – Kommentare</title>
</head>
<body>

  <h2>Kommentare</h2>

  <ul>
    <li><strong>Kommentare:</strong><br />
      <code>&lt;!-- Autor, Datum, … --&gt;</code>
      <ul>
        <li>zeilenweise oder mehrzeilig</li>
        <li>Erläuterungen, die vom Browser ignoriert werden</li>
      </ul>
    </li>
  </ul>

</body>
</html>
`,`<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <title>Lesson 13 – Praktische Übung: 2. Aufgabe</title>
</head>
<body>

  <h2>Praktische Übung: 2. Aufgabe</h2>

  <ol>
    <li>Erstellen Sie eine Webseite unter Verwendung der bisherigen Tags und Sonderzeichen.</li>
    <li>Erstellen Sie dabei eine Liste als Unterliste einer anderen Liste.<br />
      <em>(Die Lösung hierzu gibt es erst, wenn Sie verschiedene Varianten probiert haben.)</em>
    </li>
  </ol>

  <p><strong>Beispiel:</strong></p>
  <ul>
    <li>Hauptpunkt 1
      <ul>
        <li>Unterpunkt A</li>
        <li>Unterpunkt B</li>
      </ul>
    </li>
    <li>Hauptpunkt 2</li>
  </ul>

  <h3>Praktische Übung: 2. Aufgabe – Lösung zu 1. (1)</h3>
  <p><em>(Beispielhafte HTML-Lösung mit verschachtelter Liste gezeigt – <code>&lt;ul&gt;&lt;li&gt;…&lt;ul&gt;&lt;li&gt;…&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt;&lt;/ul&gt;</code>)</em></p>

  <h3>Praktische Übung: 2. Aufgabe – Lösung zu 1. (2)</h3>

  <pre><code>
&lt;!doctype html&gt;
&lt;html lang="de"&gt;
  &lt;head&gt;
    &lt;title&gt;Meine erste Übung&lt;/title&gt;
    &lt;meta charset="UTF-8" /&gt;
    &lt;meta name="description" content="Einfaches HTML" /&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Meine erste HTML-Seite&lt;/h1&gt;
    &lt;p&gt;Texte stehen in &lt;strong&gt;Überschriften&lt;/strong&gt;, Paragraphen oder &lt;em&gt;Listenelementen&lt;/em&gt;.&lt;/p&gt;

    &lt;ul&gt;
      &lt;li&gt;Jeder Text wird über die volle Fensterbreite verteilt.&lt;/li&gt;
      &lt;li&gt;Ein überzähliges Leerzeichen         oder ein Zeilenumbruch werden nicht angezeigt.&lt;/li&gt;
    &lt;/ul&gt;

    &lt;p&gt;Es gibt zwei Arten von Tags:&lt;/p&gt;
    &lt;ol&gt;
      &lt;!--Kommentare sollten immer geschlossen werden--&gt;
      &lt;li&gt;paarweise Tags wie z.B. &amp;lt;p&amp;gt; die geschlossen werden müssen&lt;/li&gt;
      &lt;li&gt;singuläre Tags wie z.B. &amp;lt;meta/&amp;gt;&lt;/li&gt;
    &lt;/ol&gt;

    &lt;p&gt;Innerhalb eines Paragraphs kann ein Umbruch durch &lt;br /&gt; erzwungen werden.
       Die horizontale Linie kann nur außerhalb eines Paragraphen verwendet werden.&lt;/p&gt;
    &lt;hr /&gt;
    &lt;p&gt;Ein besonderes Leerzeichen ist der nicht-trennende Zwischenraum (engl. no breaking space),
       z.B. zwischen Wert und Einheit: 100&amp;nbsp;€. Das Eurozeichen wird nicht ohne Wert in eine neue Zeile umgebrochen.&lt;/p&gt;
    &lt;div&gt;Die Division benötigt man häufig in Verbindung mit CSS.&lt;/div&gt;
  &lt;/body&gt;
&lt;/html&gt;
  </code></pre>

</body>
</html>
`,`<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <title>Lesson 14 – Universalattribute</title>
</head>
<body>

  <h2>Universalattribute</h2>

  <p>Im <code>&lt;head&gt;</code> wurden bereits spezielle Attribute verwendet.<br />
  <strong>Attribute werden niemals durch Komma getrennt!</strong></p>

  <p><strong>Beispiele:</strong></p>
  <ul>
    <li><code>lang="…"</code></li>
    <li><code>charset="…"</code></li>
    <li><code>name="…"</code></li>
    <li><code>content="…"</code></li>
  </ul>

  <p><strong>Mit jedem Tag verwendbar:</strong></p>
  <ul>
    <li><code>id="…"</code><br />
      → eindeutiger Identifikator für Element, z. B. als Sprungziel innerhalb einer Webseite
    </li>
    <li><code>title="…"</code><br />
      → Beschriftung für Element, sichtbar bei Maus-Hover als Tooltip
    </li>
    <li><code>style="…"</code><br />
      → Stilangaben für Element (für CSS3) <em>(nicht klausurrelevant)</em>
    </li>
  </ul>

</body>
</html>
`,`<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <title>Lesson 15 – Verweise (Links)</title>
</head>
<body>

  <h2>Verweise (Links)</h2>

  <ul>
    <li>= Web</li>
    <li>= Informationseinheiten + Verweise</li>
    <li>= „Hypertext“</li>
    <li>= Verweis = Anker + Ziel</li>
  </ul>

  <p><code>&lt;a&gt;... &lt;/a&gt;</code><br />
  – umschließt Anker (Text, Bild, ...) für Ursprung<br />
  – Attribut <code>href="Ziel-URL"</code> legt Ziel fest</p>

  <h3>Lokales Ziel eines Verweises</h3>
  <ul>
    <li><strong>Absoluter Pfadname</strong>
      <ul>
        <li>Zugriffspfad durch die gesamte Verzeichnishierarchie</li>
        <li>Beginnt immer mit <code>/</code></li>
        <li>Beispiel:
          <ul>
            <li><code>href="/d|/htmlFiles/index.htm"</code></li>
            <li><code>href="/assets/images/logo.gif"</code></li>
          </ul>
        </li>
      </ul>
    </li>

    <li><strong>Relativer Pfadname</strong>
      <ul>
        <li>Bezieht sich auf das Verzeichnis, in dem das verweisende HTML-Dokument steht</li>
        <li>Beispiel:
          <ul>
            <li><code>href="info.html"</code></li>
            <li><code>href="hires/company.gif"</code></li>
            <li><code>href="../../main/main.html"</code></li>
          </ul>
        </li>
        <li>Vorteil: <strong>portabel!</strong></li>
      </ul>
    </li>
  </ul>

  <h3>Entferntes Ziel eines Verweises</h3>
  <ul>
    <li>Vollständige <strong>URL (Uniform Resource Locator)</strong>
      <ul>
        <li>Aufbau: <code>Protokoll://Rechnername/Pfad</code></li>
      </ul>
    </li>
    <li><strong>Eigenschaften:</strong>
      <ul>
        <li>Verschiedene Dienste (Protokolle)</li>
        <li>Verschiedene Dokumenttypen (Dateiendungen)</li>
      </ul>
    </li>
    <li><strong>Beispiel:</strong><br />
      <code>href="http://www.fh-offenburg.de/mi/mi.html"</code>
    </li>
    <li><strong>Sonderzeichen in URLs:</strong>
      <ul>
        <li>Durch <code>%ASCII-Code</code> ersetzt, z. B.</li>
        <li><code>%20</code> für Leerzeichen</li>
        <li><code>%3f</code> für Fragezeichen</li>
        <li><code>%2f</code> für Schrägstrich</li>
      </ul>
    </li>
    <li><strong>Beispiel:</strong><br />
      <code>href="http://my.sys.de/bad%20name%3f.html"</code>
    </li>
  </ul>

  <h3>Verweisziel</h3>
  <ul>
    <li>Ist ein <strong>Element in einer Seite</strong>
      <ul>
        <li>Durch Verwendung der <code>id</code> des Elementes nach <code>#</code></li>
        <li>Beispiel: <code>href="mi.html#People"</code></li>
        <li>Case-sensitiv</li>
        <li>Verweisziel erscheint oben im Browser</li>
      </ul>
    </li>
  </ul>


  <h2>🎯 Studienziel – Aufgabe im Code Editor</h2>

<p>Verwenden Sie das HTML-Element <code>&lt;a&gt;</code> (Anker), um einen klickbaren Link zu erstellen.<br />
Dieser Link soll <strong>auf eine externe Webseite zeigen</strong>, und der angezeigte Text soll dem Benutzer genau mitteilen, was passieren wird.</p>

<ul>
  <li>Der Linktext <strong>muss exakt</strong> sein: <code>Open this link in a new tab</code></li>
  <li>Die Ziel-URL muss exakt sein: <code>https://youtu.be/dQw4w9WgXcQ</code></li>
  <li>Verwenden Sie <strong>nur</strong> das Attribut <code>href</code> – keine weiteren Attribute!</li>
</ul>

<p><em>
English Translation:<br />
Use the <code>&lt;a&gt;</code> (anchor) HTML element to create a clickable link.<br />
This link should point to <strong>an external website</strong>, and the visible text must clearly tell the user what will happen.
</em></p>

<ul><em>
  <li>The <strong>link text must be exactly</strong>: <code>Open this link in a new tab</code></li>
  <li>The destination URL must be exactly: <code>https://youtu.be/dQw4w9WgXcQ</code></li>
  <li>Use <strong>only the <code>href</code> attribute</strong>, no others!</li>
</em></ul>

</body>
</html>
`,`<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <title>Lesson 16 – Bilder</title>
</head>
<body>

  <h2>Bilder</h2>

  <ul>
    <li><strong>Inline Images</strong>
      <ul>
        <li>Nur innerhalb von Paragraphen, Überschriften etc. erlaubt</li>
        <li>Die Pixelzahl wird <strong>ohne Einheit</strong> angegeben</li>
        <li>Die Bildquelle ist ein lokaler/absoluter Pfad oder eine URL</li>
      </ul>
    </li>

    <li><strong>Beispiel:</strong><br />
      <code>&lt;img src="Bild-URL" alt="Beschreibung" height="Pixelzahl" width="Pixelzahl" /&gt;</code>
    </li>

    <li><strong>Bild als Ursprung eines Verweises</strong>
      <ul>
        <li>Bekannt als „Image Links“, „Clickable Images“</li>
        <li>Durch Schachteln in Anchor-Tag</li>
      </ul>
    </li>

    <li><strong>Images als Verweisziel</strong>
      <ul>
        <li><code>href</code> mit lokaler Bilddatei oder URL für Bilddatei</li>
      </ul>
    </li>
  </ul>


  <h3>🎯 Studienziel – Aufgabe im Code Editor</h3>

<p>Verwenden Sie das HTML-Tag <code>&lt;img&gt;</code>, um ein Bild korrekt in eine Webseite einzufügen.</p>
<ul>
  <li>Die Bildquelle (<code>src</code>) muss exakt lauten: <code>https://i.imgur.com/cif7t3w.png</code></li>
  <li>Verwenden Sie das <code>alt</code>-Attribut mit dem exakten Wert: <code>Beschreibung</code></li>
  <li>Setzen Sie die Höhe (<code>height</code>) auf <code>300</code></li>
  <li>Setzen Sie die Breite (<code>width</code>) auf <code>300</code></li>
</ul>

<p><em>English Translation:</em></p>
<p><em>Use the <code>&lt;img&gt;</code> tag to correctly insert an image into a webpage.</em></p>
<ul>
  <li><em>The image source (<code>src</code>) must be exactly: <code>https://i.imgur.com/cif7t3w.png</code></em></li>
  <li><em>Use the <code>alt</code> attribute with the exact value: <code>Beschreibung</code></em></li>
  <li><em>Set the <code>height</code> to <code>300</code></em></li>
  <li><em>Set the <code>width</code> to <code>300</code></em></li>
</ul>

</body>
</html>
`,`<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <title>Lesson 17 – Praktische Übung: 3. Aufgabe</title>
</head>
<body>

  <h2>Praktische Übung: 3. Aufgabe</h2>

  <ol>
    <li>Erstellen Sie eine Webseite mit:
      <ul>
        <li>einem Bild (im selben Verzeichnis abspeichern)</li>
        <li>einem Hyperlink (z. B. auf die Hochschule)</li>
        <li>einem Text, der eingeblendet wird, wenn die Maus eine Überschrift berührt.</li>
      </ul>
    </li>
    <li>Ergänzen Sie einen Hyperlink, mit dem Sie an eine bestimmte Position der Seite springen (<code>id</code>-Attribut).</li>
    <li>Verwenden Sie das Bild als Hyperlink.</li>
  </ol>

  <h3>Praktische Übung: 3. Aufgabe – Lösung</h3>
  <p><em>(Hinweis im Skript: noch <strong>ohne</strong> Bild als Hyperlink … die Lösung steht weiter hinten im Skript)</em></p>
  <p>Wenn sich die Maus über der freien Fläche befindet, erscheint ein Text.</p>

  <h3>Praktische Übung: 3. Aufgabe – Lösung</h3>

  <pre><code>
&lt;body title="Hier steht nichts."&gt;
  &lt;!--Texteinblendung bei Maus über Zwischenräume/Überschrift--&gt;
  &lt;h1 id="ueberschrift1" title="Thema HTML"&gt;Bilder und Links&lt;/h1&gt;
  &lt;!-- Hyperlinks erlaubt in Überschriften oder p, li, etc. --&gt;

  &lt;p&gt;
    In diesem Text steht ein http-Link auf die  
    &lt;a href="http://offenburg.university"&gt;Hochschule&lt;/a&gt;.  
    Hiermit können Sie lokal zurückspringen an den  
    &lt;a href="ErsteLoesung.html#ueberschrift1"&gt;Beginn&lt;/a&gt; der Seite!
  &lt;/p&gt;

  &lt;p&gt;
    In diesem Text befindet sich ein Bild aus dem Internet:  
    &lt;img src="https://www.hs-offenburg.de/typo3conf/ext/hsotemplate/Resources/Public/Images/logo.png"
         alt="Neues Logo der HSO" width="226" height="60" /&gt;  
    Man kann auch lokale Bilder einbinden,  
    wenn Sie die Datei z. B. ins gleiche Verzeichnis speichern:  
    &lt;img src="logo.png" alt="Neues Logo der HSO" width="226" height="60" /&gt;  
    Bitte finden Sie heraus, wie Sie das lokale Bild  
    als Hyperlink verwenden können!
  &lt;/p&gt;
&lt;/body&gt;
  </code></pre>

</body>
</html>
`,`<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <title>Lesson 18 – Überprüfen von HTML-Quelltexten</title>
</head>
<body>

  <h2>Überprüfen von HTML-Quelltexten</h2>

  <ul>
    <li><strong>W3C-Validator:</strong> <a href="https://validator.w3.org">https://validator.w3.org</a>
      <ul>
        <li>Prüfung per File Upload</li>
      </ul>
    </li>

    <li><strong>Prüfungsschritte:</strong>
      <ul>
        <li>Syntax-Überprüfung des <code>&lt;!DOCTYPE&gt;</code> der Seite</li>
        <li>Falls Fehler vorhanden sind: <strong>schrittweise abarbeiten</strong>, da Folgefehler oft verschwinden</li>
      </ul>
    </li>

    <li><strong>Wichtig:</strong>
      <ul>
        <li>Der Validator bewertet auch HTML5-Seiten mit unvollständiger, aber nicht falscher Syntax als „richtig“</li>
        <li><strong>In der Klausur gilt nur die vollständige Syntax als richtig!</strong></li>
      </ul>
    </li>
  </ul>

  <h3>Syntax-Übersicht</h3>

  <ul>
    <li><strong>Singuläre, inhaltsleere Tags:</strong><br />
      <code>&lt;meta ... /&gt;</code><br />
      <code>&lt;br /&gt;</code><br />
      <code>&lt;img ... /&gt;</code><br />
      <code>&lt;hr /&gt;</code>
    </li>

    <li><strong>Hyperlink:</strong><br />
      <code>&lt;a href="http://offenburg.university/datei.html#idname"&gt;Ankertext&lt;/a&gt;</code>
    </li>

    <li><strong>Image als Hyperlink (auf ein lokales Image):</strong><br />
      <code>&lt;a href="logo.png"&gt;<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&lt;img src="logo.png" height="60" width="226" alt="HSO-Logo" /&gt;<br />
      &lt;/a&gt;</code>
    </li>
  </ul>

  <h3>🎯 Studienziel – Aufgabe im Code Editor</h3>

<p>Verwenden Sie <strong>verschachtelte HTML-Tags</strong>, um ein Bild als klickbaren Hyperlink darzustellen.</p>

<ul>
  <li>Verwenden Sie den Tag <code>&lt;a&gt;</code> mit dem <strong>href</strong>-Attribut exakt gesetzt auf:<br>
    <code>https://www.chosic.com/wp-content/uploads/2023/06/vine-boom-sound-effect(chosic.com).mp3</code>
  </li>
  <li>Innerhalb des <code>&lt;a&gt;</code>-Tags fügen Sie ein <code>&lt;img&gt;</code>-Tag ein.</li>
  <li>Setzen Sie das <strong>src</strong>-Attribut des Bildes auf exakt:<br>
    <code>https://i.imgur.com/T9cOoPU.png</code>
  </li>
  <li>Verwenden Sie das <strong>alt</strong>-Attribut exakt mit dem Wert:<br>
    <code>"open in new tab for boom"</code>
  </li>
  <li>Setzen Sie <strong>height</strong> und <strong>width</strong> des Bildes jeweils auf <code>300</code></li>
</ul>

<p><em>English Translation:</em></p>

<ul>
  <li><em>Use <strong>nested HTML tags</strong> to make an image a clickable hyperlink.</em></li>
  <li><em>Use the <code>&lt;a&gt;</code> tag with the <strong>href</strong> attribute exactly set to:<br>
    <code>https://www.chosic.com/wp-content/uploads/2023/06/vine-boom-sound-effect(chosic.com).mp3</code></em></li>
  <li><em>Inside the <code>&lt;a&gt;</code> tag, insert an <code>&lt;img&gt;</code> tag.</em></li>
  <li><em>Set the image’s <strong>src</strong> attribute exactly to:<br>
    <code>https://i.imgur.com/T9cOoPU.png</code></em></li>
  <li><em>Use the <strong>alt</strong> attribute with the exact value:<br>
    <code>"open in new tab for boom"</code></em></li>
  <li><em>Set <strong>height</strong> and <strong>width</strong> of the image to <code>300</code> each.</em></li>
</ul>

</body>
</html>

`,`<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <title>Lesson 19 – Architektur von Webanwendungen</title>
</head>
<body>

  <h2>Architektur von Webanwendungen</h2>

  <ul>
    <li><strong>Minimale Bestandteile:</strong>
      <ul>
        <li>Webbrowser auf einem Client-Rechner</li>
        <li>Webserver auf einem Internet-Server</li>
        <li>Verwendung des Hypertext Transfer Protocols (HTTP)</li>
        <li>Statische Webseiten liegen auf dem Internet-Server</li>
      </ul>
    </li>
  </ul>

  <img src='https://i.imgur.com/2xgUXRo.png'/>

  <h3>1. Client-Rechner</h3>
  <ul>
    <li>Enthält den <strong>Browser</strong></li>
    <li>Sendet eine <strong>request (URL)</strong>-Anfrage an den Internet-Server</li>
    <li>Empfängt die <strong>response (HTML)</strong>-Antwort vom Server</li>
  </ul>

  <h3>2. Internet-Server</h3>
  <ul>
    <li>Enthält den <strong>Webserver</strong></li>
    <li>Verarbeitet die eingehende Anfrage vom Client</li>
    <li>Falls notwendig, sendet er eine <strong>Datenbankabfrage</strong> an den Datenbank-Server</li>
    <li>Erhält <strong>Datensätze</strong> als Antwort von der Datenbank</li>
    <li>Formatiert diese Daten und sendet sie als <strong>HTML-Antwort</strong> zurück an den Browser des Clients</li>
  </ul>

  <h3>3. Datenbank-Server</h3>
  <ul>
    <li>Führt die <strong>Datenbankabfrage</strong> aus, die vom Webserver gestellt wurde</li>
    <li>Gibt die <strong>Datensätze</strong> zurück an den Webserver</li>
  </ul>

  <hr />

  <h3>Ablauf in Kurzform:</h3>
  <pre>
Browser → request (URL) → Webserver
Webserver → optional: Datenbankabfrage → Datenbank-Server
Datenbank-Server → Datensätze → Webserver
Webserver → response (HTML) → Browser
  </pre>

  <ul>
    <li>Optional Generierung einer Webseite durch Skript oder Programm</li>
    <li>Optional Verbindung mit Datenbank und Anwendungen</li>
  </ul>

  <h2>Hypertext Transfer Protocol (Standard des WWW Consortium)</h2>

  <ul>
    <li>Besteht aus den Nachrichten Request und Response</li>
    <li>Unterstützt von Webbrowser und Webserver</li>
    <li>Zustandslos → daher Cookies</li>
    <li>Nicht verschlüsselt</li>
  </ul>

  <img src='https://i.imgur.com/d35BPqY.png'/>

  <h3>Kommunikationsablauf:</h3>
  <pre>
Webbrowser (Client) → Request-Nachricht
Webserver → Response-Nachricht
  </pre>

  <ul>
    <li><strong>HTTP-Header</strong> (Kodierung, Inhaltstyp, …)</li>
    <li><strong>Message-Body</strong> (Nutzdaten)</li>
    <li><strong>Statusinformationen</strong></li>
    <li><strong>Nutzdaten</strong> (HTML, CSS, …)</li>
  </ul>

  <h3>HTTP: Webseite anfordern</h3>
  <pre>
Request
GET /mi/index.html HTTP/1.1
Host: hs-offenburg.de

Response
HTTP/1.1 200 OK
Date: …
Last-Modified: …
Content-Type: charset/UTF-8; …
Content-Length: …

&lt;!DOCTYPE html&gt;
&lt;html …
  </pre>

</body>
</html>
`,`<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <title>Lesson 20 – Formulare in HTML</title>
</head>
<body>

  <h2>Formulare in HTML</h2>

  <ul>
    <li>Dateneingabe des Benutzers:</li>
    <li><code>&lt;form&gt; … &lt;/form&gt;</code></li>
  </ul>

  <h3>Wichtige Attribute:</h3>
  <ul>
    <li><code>method="post"</code> (oder "get")</li>
    <li><code>action="Skript-URL"</code></li>
  </ul>

  <h3>UI-Elemente:</h3>
  <ul>
    <li><code>&lt;input /&gt;</code></li>
  </ul>

  <h3>Typische Attribute:</h3>
  <ul>
    <li><code>type="text"</code> (password, radio, checkbox, submit, reset, button, file)</li>
    <li><code>name="Elementname"</code></li>
    <li><code>value="Wert"</code></li>
    <li><code>size="Breite"</code></li>
    <li><code>checked="checked"</code></li>
  </ul>

  <h3>🎯 Studienziel – Aufgabe im Code Editor</h3>

<p>Erstelle ein Formular mit dem Tag <code>&lt;form&gt;</code> und folgenden Attributen:</p>
<ul>
  <li><code>method="post"</code></li>
  <li><code>action="submit.php"</code></li>
  <li><code>onsubmit="return false;"</code></li>
</ul>

<p>Das Formular soll mit einer Überschrift beginnen:<br />
Nutze <code>&lt;h1&gt;</code> und schreibe: <strong>Black Knights Application</strong></p>

<p>Dann folgt ein Eingabefeld für den Namen.<br />
Verwende dazu <code>&lt;p&gt;</code> für den gesamten Abschnitt.<br />
Schreibe: <strong>Name:</strong> und füge danach ein <code>&lt;input&gt;</code> mit folgenden Attributen ein:</p>
<ul>
  <li><code>type="text"</code></li>
  <li><code>name="username"</code></li>
  <li><code>size="30"</code></li>
</ul>

<p>Im nächsten Abschnitt soll das Geschlecht ausgewählt werden.<br />
Nutze wieder <code>&lt;p&gt;</code> mit dem Text: <strong>Gender:</strong><br />
Darunter sollen vier <code>&lt;input&gt;</code>-Felder vom Typ <code>radio</code> stehen, alle mit <code>name="gender"</code>:</p>
<ul>
  <li><code>value="male"</code> mit <code>checked="checked"</code></li>
  <li><code>value="female"</code></li>
  <li><code>value="mecha"</code></li>
  <li><code>value="other"</code></li>
</ul>

<p>Hinter jedem <code>&lt;input&gt;</code> steht der jeweilige Text (z. B. <strong>Male</strong>).</p>

<p>Danach folgt ein weiterer Abschnitt mit einer Checkbox.<br />
Nutze <code>&lt;p&gt;</code> mit einem <code>&lt;input&gt;</code> vom Typ <code>checkbox</code> und diesen Attributen:</p>
<ul>
  <li><code>name="privacy"</code></li>
  <li><code>value="accepted"</code></li>
</ul>

<p>Der Text dahinter lautet: <strong>I agree to the I HATE BRITANNIA policy</strong></p>

<p>Ganz unten folgt ein Submit-Button:<br />
Verwende ein <code>&lt;input&gt;</code> mit:</p>
<ul>
  <li><code>type="submit"</code></li>
  <li><code>value="Register"</code></li>
</ul>

<p><em>English Translation:</em></p>

<p><em>Create a form using the <code>&lt;form&gt;</code> tag with the following attributes:</em></p>
<ul>
  <li><em><code>method="post"</code></em></li>
  <li><em><code>action="submit.php"</code></em></li>
  <li><em><code>onsubmit="return false;"</code></em></li>
</ul>

<p><em>Start with a heading using <code>&lt;h1&gt;</code> that says: Black Knights Application.</em></p>

<p><em>Next, add a name input field inside a <code>&lt;p&gt;</code> element, starting with "Name:", followed by an <code>&lt;input&gt;</code> with:</em></p>
<ul>
  <li><em><code>type="text"</code></em></li>
  <li><em><code>name="username"</code></em></li>
  <li><em><code>size="30"</code></em></li>
</ul>

<p><em>Then, add a section for gender inside another <code>&lt;p&gt;</code> tag labeled "Gender:". Below that, insert four <code>&lt;input&gt;</code> tags of type <code>radio</code>, all sharing <code>name="gender"</code> with values:</em></p>
<ul>
  <li><em>"male" (with <code>checked="checked"</code>)</em></li>
  <li><em>"female"</em></li>
  <li><em>"mecha"</em></li>
  <li><em>"other"</em></li>
</ul>

<p><em>After each <code>&lt;input&gt;</code>, include visible text like Male, Female, etc.</em></p>

<p><em>Then add a checkbox inside a <code>&lt;p&gt;</code> with:</em></p>
<ul>
  <li><em><code>type="checkbox"</code></em></li>
  <li><em><code>name="privacy"</code></em></li>
  <li><em><code>value="accepted"</code></em></li>
</ul>

<p><em>With visible text: I agree to the I HATE BRITANNIA policy</em></p>

<p><em>Finally, include a submit button: <code>&lt;input type="submit" value="Register" /&gt;</code></em></p>

<p><strong><em>Note:</em></strong><br />
<em>Normally, the <code>action</code> attribute sends the form data to the file (e.g. <code>submit.php</code>).  
But inside the preview window, it causes a blank reload.  
To prevent this, include <code>onsubmit="return false;"</code> in the <code>&lt;form&gt;</code> tag.</em></p>

</body>
</html>
`,`<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <title>Lesson 21 – Formulare (2)</title>
</head>
<body>

  <h2>Formulare (2)</h2>

  <h3>Auswahlfelder:</h3>
  <p><code>&lt;select&gt; … &lt;/select&gt;</code></p>

  <p><strong>Attribute:</strong></p>
  <ul>
    <li><code>name="Elementname"</code> (oder <code>name[]</code> für Mehrfachauswahl)</li>
    <li><code>multiple="multiple"</code></li>
    <li><code>size="sichtbare Einträge"</code></li>
  </ul>

  <h3>Optionen:</h3>
  <p><code>&lt;option&gt; … &lt;/option&gt;</code></p>
  <p><strong>Attribute:</strong> <code>value="Wert"</code> <code>selected="selected"</code></p>

  <h3>Texteingabefeld:</h3>
  <p><code>&lt;textarea&gt; … &lt;/textarea&gt;</code></p>
  <p><strong>Attribute:</strong> <code>name="Elementname"</code> <code>rows="1"</code> <code>cols="1"</code></p>

  <h3>🎯 Studienziel – Aufgabe im Code Editor</h3>

<p>Erstelle ein HTML-Formular mit den folgenden Anforderungen:</p>

<ul>
  <li>Beginne mit einem <code>&lt;form&gt;</code>-Element, das die Attribute <code>method="post"</code>, <code>action="submit.php"</code> und <code>onsubmit="return false;"</code> enthält.</li>
  <li>Verwende <code>&lt;h1&gt;So you want to darkly gather ghosts?&lt;/h1&gt;</code> als Überschrift des Formulars.</li>
  <li>Erstelle einen Auswahlbereich für eine Spielzeugwahl mit dem Tag <code>&lt;select&gt;</code>:
    <ul>
      <li>Nutze das Attribut <code>name="toy"</code> und <code>size="1"</code>.</li>
      <li>Füge genau drei <code>&lt;option&gt;</code>-Elemente ein:
        <ul>
          <li><code>value="teddy"</code> mit Text: Teddy Bear</li>
          <li><code>value="doll"</code> mit Text: Barbie Doll</li>
          <li><code>value="beluga"</code> mit Text: Plush Beluga</li>
        </ul>
      </li>
    </ul>
  </li>
  <li>Erstelle ein weiteres <code>&lt;select&gt;</code>-Element für Mehrfachauswahl von Traumata:
    <ul>
      <li>Verwende <code>name="traumas[]"</code>, <code>multiple="multiple"</code> und <code>size="4"</code>.</li>
      <li>Füge vier <code>&lt;option&gt;</code>-Elemente ein:
        <ul>
          <li><code>value="prego"</code> mit Text: Pregnancy demon</li>
          <li><code>value="ww1"</code> mit Text: WW1 ghost asked me for water</li>
          <li><code>value="womb"</code> mit Text: A womb stole my mom</li>
          <li><code>value="grooming"</code> mit Text: Groomed by spirit</li>
        </ul>
      </li>
    </ul>
  </li>
  <li>Erstelle ein Texteingabefeld mit <code>&lt;textarea&gt;</code>:
    <ul>
      <li>Die Attribute müssen <code>name="mission"</code>, <code>rows="4"</code> und <code>cols="40"</code> lauten.</li>
      <li>Der vorgegebene Text soll exakt lauten: Well it all started when...</li>
    </ul>
  </li>
  <li>Beende das Formular mit einem Submit-Button:
    <ul>
      <li>Nutze <code>&lt;input type="submit" value="Send"/&gt;</code> und lege ihn in ein eigenes <code>&lt;p&gt;</code>-Element.</li>
    </ul>
  </li>
</ul>

<p><em>English translation:</em></p>

<p><em>Create an HTML form with the following requirements:</em></p>

<ul>
  <li><em>Begin with a <code>&lt;form&gt;</code> element containing <code>method="post"</code>, <code>action="submit.php"</code>, and <code>onsubmit="return false;"</code>.</em></li>
  <li><em>Use <code>&lt;h1&gt;So you want to darkly gather ghosts?&lt;/h1&gt;</code> as the title.</em></li>
  <li><em>Add a toy selection dropdown using <code>&lt;select&gt;</code> with <code>name="toy"</code> and <code>size="1"</code>. Include exactly three <code>&lt;option&gt;</code> entries:</em>
    <ul>
      <li><em><code>value="teddy"</code> – Teddy Bear</em></li>
      <li><em><code>value="doll"</code> – Barbie Doll</em></li>
      <li><em><code>value="beluga"</code> – Plush Beluga</em></li>
    </ul>
  </li>
  <li><em>Add another dropdown for trauma selection that allows multiple choices. Use <code>name="traumas[]"</code>, <code>multiple="multiple"</code>, and <code>size="4"</code>. Include:</em>
    <ul>
      <li><em><code>value="prego"</code> – Pregnancy demon</em></li>
      <li><em><code>value="ww1"</code> – WW1 ghost asked me for water</em></li>
      <li><em><code>value="womb"</code> – A womb stole my mom</em></li>
      <li><em><code>value="grooming"</code> – Groomed by spirit</em></li>
    </ul>
  </li>
  <li><em>Include a <code>&lt;textarea&gt;</code> input with <code>name="mission"</code>, <code>rows="4"</code> and <code>cols="40"</code> and the exact value: Well it all started when...</em></li>
  <li><em>End the form with a submit button wrapped inside a <code>&lt;p&gt;</code> tag.</em></li>
</ul>

<p><strong>Note:</strong> <em>To select multiple items in the second list, hold <strong>Ctrl (Windows)</strong> or <strong>Command (Mac)</strong> while clicking, or click and drag to highlight.</em></p>

</body>
</html>
`,`<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <title>Lesson 22 – GET und POST</title>
</head>
<body>

  <pre>
GET /php/post-query.php?studium=mwplus&amp;semester=1  HTTP/1.1
Host: info.mi.hs-offenburg.de

---

POST /php/post-query.php HTTP/1.1
Host: info.mi.hs-offenburg.de
Content-Length: 24

studium=mwplus&amp;semester=1

---

HTTP/1.1 200 OK
Date: …
Last-Modified: …
Content-Type: charset/UTF-8; …
Content-Length: 100

&lt;p&gt;Herzlich Willkommen zum 1. Sem. MW+&lt;/p&gt;
  </pre>

  <h2>Praktische Übung: 4. Aufgabe</h2>
  <p>Erstellen Sie folgende Webseite (es handelt sich um ein Formular)!</p>
  <p>Verwenden Sie folgende URL als Wert für das Attribut:</p>
  <code>action="http://info.mi.hs-offenburg.de/formGetPost.php"</code>

  <p><strong>Hinweis:</strong></p>
  <ul>
    <li>Sie können die Antwort nur im VPN der HSO testen.</li>
    <li>(VPN Cisco Client installieren)</li>
  </ul>

  <img src='https://i.imgur.com/RJaLufR.png'/>

  <h2>Praktische Übung: 4. Aufgabe – Lösung</h2>

  <pre>
&lt;body&gt;
  &lt;h1&gt;Pizzabestellformular&lt;/h1&gt;
  &lt;!--Sie dürfen action in der Klausur leer lassen--&gt;
  &lt;!--Jedes interaktive Element mit name, außer submit/reset--&gt;
  &lt;form action="http://info.mi.hs-offenburg.de/formGetPost.php" method="post"&gt;

    &lt;p&gt;Wähle eine Größe:&lt;/p&gt;
    &lt;br /&gt;
    klein &lt;input type="radio" name="groesse" value="kl" /&gt;
    &lt;br /&gt;
    groß &lt;input type="radio" name="groesse" value="gr" /&gt;
    &lt;br /&gt;

    &lt;p&gt;Wähle einen Belag:&lt;/p&gt;
    &lt;br /&gt;
    &lt;input type="checkbox" name="tom" /&gt;Tomaten
    &lt;br /&gt;
    &lt;input type="checkbox" name="kas" /&gt;Käse
    &lt;br /&gt;
    &lt;input type="checkbox" name="zwi" /&gt;Zwiebel

    &lt;p&gt;Adresse:&lt;/p&gt;
    &lt;input type="text" name="adr" size="30" value="Name, Straße, Hausnummer, PLZ" /&gt;
    &lt;br /&gt;

    &lt;input type="submit" value="bestellen" /&gt;
    &lt;input type="reset" value="abbrechen" /&gt;

  &lt;/form&gt;
&lt;/body&gt;
  </pre>

  <h2>HTML-Ausgabe des PHP-Skripts</h2>
  <p>Beispielhafte Antwortseite mit strukturiertem HTML-Inhalt wird angezeigt – z. B. Rückmeldung „Danke für Ihre Bestellung“</p>

  <img src='https://i.imgur.com/nTrtMlq.png'/>
</body>
</html>
`,`<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <title>Lesson 23 – Gestaltungshinweise zu Formularen</title>
</head>
<body>

  <h2>Gestaltungshinweise zu Formularen</h2>
  <ul>
    <li>Pro Zeile 1 Eingabefeld (Ausnahme: Radiobutton)</li>
    <li>Empfohlen: Beschriftung oberhalb des Feldes</li>
    <li>Keine Vorauswahl für Zustimmung zu AGB!</li>
    <li>Wenige Elemente je Formular – bei Bedarf zwei Formulare verwenden</li>
    <li>Sinnvolle Variablennamen und Werte</li>
    <li>Passwort mit <code>post</code> übertragen (und verschlüsseln!)</li>
    <li>Nach dem Submit-Button: Benutzer-Feedback geben</li>
    <li>Eingaben mit JavaScript prüfen</li>
    <li>Formulare mit sinnvollen Daten testen</li>
  </ul>

  <h2>Zusammenfassung Formulare</h2>
  <ul>
    <li>Einfache interaktive Webseiten:
      <ul>
        <li>Standardverhalten</li>
        <li>Standardgestaltung</li>
      </ul>
    </li>
    <li>Funktion von Formularen:
      <ul>
        <li>Eingabe der Daten auf der Client-Seite</li>
        <li>Übertragung der Daten zum Skript auf einem Server</li>
      </ul>
    </li>
  </ul>

  <p><strong>Nicht abgedeckt:</strong></p>
  <ul>
    <li>Verarbeitung der Formulardaten durch den Server</li>
    <li>Erzeugung der Feedback-Seite für den Client</li>
  </ul>

</body>
</html>
`,`<h1>Alright so!</h1>
<hr>
<img src = "https://i.imgur.com/5ARSLGL.png" width = "350"/>

<h2>You're going  to have to read the pdf for javascript on your own time.</h2>
<p><em>Unfortunately, I will not be uploading the word for word courses with some additional interactivity/custom lessons like before</em></p>

<ul>
  <li><em>I also won't be using A.I. for generating any text within this around. </em><em><strong>Well, I'll use it to turn these written documents I'm making into html still, but that's still my juice in its blood</strong></em></li>
  <li>So basically 100% freestyling is <code>/hj</code></li>
</ul>

<h3>the problem is that the pdf is <em>really, really</em> bad. Though you might ask what <em>are</em> the problems?</h3>

<ul>
  <li>Despite being one of the shortest pdfs and much, much shorter than the last one they spend so much time on extra explaining simple things which babies you way too much.</li>
  <li>Despite doing this extra blabbering they don't actually say much? Admittedly, I didn't read all of the german text, but still.</li>
  <li>So many points they introduce just a tip of it, which hopefully is enough to get you through the exam, but it's not enough to even make the code equivalent to macaroni art.</li>
  <li>It's even worse in cases like buttons where they talk about it for all of one sentence than just throw that in the air? So, if they do quiz you on it at all, by book alone you just wouldn't be ready???</li>
</ul>

<h3>Clearly, I had to step in...</h3>

<ul>
  <li>So, I'll go through and get all of the code and even the practice and retyped and run them myself to build my own lessons around achieving the same fundamental goals.</li>
  <li>Because this is still quiz prep, I will be going with trying to keep things by reinforcing what they were trying to teach you, rather than teaching you things that are completely separate.</li>
  <li>which also includes preserving specific metaphors or practices they used (even if they are stupid) in case they might be referred to even in passing during a question.</li>
</ul>
<img src = "https://i.imgur.com/JbAeHHh.png" width = "350"/>
`,`<h1>In the beginning...</h1>
<img src = "https://i.imgur.com/1jIMU2w.png" width = "350">
<p><em>there was merely html, but that all changed when the <code>&lt;script&gt;</code> nation attacked.</em></p>

<img src = "https://therobynbirdsnest.com/wp-content/uploads/2022/01/firenationattacked.gif" width = "350">

<p>The most basic first thing discussed is pretty straightforward actually??</p>

<p>for instance whatever you put in a script tag</p>

<pre><code>&lt;script&gt;
    var message = "Hello, World!"
    alert(message)
&lt;/script&gt;
</code></pre>

<p><em>We'll talk more about alerts in the near future</em></p>

<p>but! What matters most is that you understand that all you have to do is use the tag <code>script</code> and from there you're coding whatever your heart desires just like the free abundant grasslands of javascript you deserve.</p>
`,`<h1>Alright, let's give buttons justice.</h1>

<p><em>This here is all they said about how buttons connect to javascript</em></p>

<pre><code>&lt;input type = "button" value="Bitte prüfen" onclick="pruefeEingaben()"/&gt;
</code></pre>

<p>that <strong>ONE OFF LINE?</strong> they're so, so useful though???</p>

<h2>First, to be able to talk about buttons, I have to give justice to who they wronged first...</h2>
<h3><em>...The function....</em></h3>

<p>So, what <strong>is</strong> a function?</p>

<p>Well, let's imagine you wanted to draw a picture.</p>

<p>We can break that down into let's say 3 steps:</p>
<ul>
  <li>grab your pencil</li>
  <li>draw an amogus</li>
  <li>create exactly what you imagine after that helpful base</li>
</ul>

<p>Easy! right?</p>

<p>But that's kind of...<em>long</em>, What if I don't want to say ALLLLL that everytime I refer to the steps of making a masterpiece which include grabbing your pencil, drawing an amogus, and henceforth creating exactly what you imagine-... <em>PHEW!!! GETTING OUT OF BREATH, JUST TYPING IT</em></p>

<img src = "https://i.imgur.com/M9EpNZX.png" width = "350">

<p>Instead we can just call that process <code>perfectDraw()</code> because it's the perfect name for a perfect technique!</p>

<p>That's also all a function really is, just taking steps that we don't want to say over and over from scratch when we can say it once then from then on call its name!</p>

<p>It doesn't matter if it's one step or a thousand we can create a function regardless, and using them is a fundamental part of a majority of coding languages!</p>

<p>since that would be coding we'd have to define a function inside of a script if we wanted to use one on our website.</p>

<pre><code>&lt;script&gt;
    function fartCheck() {
        alert("Did you just fart?")
    }
&lt;/script&gt;
</code></pre>

<h2>then from there making a button is easy! Try it yourself:</h2>
<img src = "https://i.imgur.com/8Ixo4er.gif" width = "300">
<ul>
  <li>I showed you earlier how to make a button according to your school</li>
  <li>let's make one that does <code>fartCheck()</code> on click!</li>
  <li>Value of <code>Fart Check?</code> sounds perfect!</li>
</ul>

<p>Try it in the code editor.<br>
<em>Don't forget to define the function also in the code editor!</em></p>
`,`<h1>What's next?</h1>
<p>Well, to put it simply, the next part of the pdf is creating data and getting outputs.</p>

<p>Though as a pre-analysis with chatgpt (so I didn't miss anything) phrased it, "It seems they are assuming YOU'RE STUPID"</p>

<p>🙄🙄 I <em>guess</em> the A.I. put it gently as they are assuming you are a rookie who doesn't know how to use the console</p>

<p><em>...which you are</em></p>

<p>Though, because of that it means they use a lot working around/beating around the bush.</p>

<p>Which is why we'll be discussing<br>
<code>alert()</code> and <code>document.write()</code>
</p>

<p>Instead of the much more standard <code>console.log</code> which would require opening an inspect element and view the console in order to see a result.</p>

<h1>document.write()</h1>
<ul>
  <li>Writes the string (text in quotes) that you put in the parenthesis as a line at your current point of the script!</li>
</ul>

<h3>Enter this script and watch the output:</h3>
<pre><code>&lt;script&gt;
    document.write("Hello, World!");
&lt;/script&gt;
</code></pre>

<h1>alert()</h1>
<ul>
  <li>The string (text in quotes) you put in the parenthesis will be shown as a notification on top of your screen!</li>
</ul>

<h3>Enter this script and watch the output:</h3>
<pre><code>&lt;script&gt;
    alert("Hello, World!");
&lt;/script&gt;
</code></pre>

<h2>Both of these functions will be crucial to other code examples shown in the pdf to be able to actually see the result of your processing.</h2>

<ul>
  <li>Let's talk a bit about variables before we start your next objective!</li>
  <li>To create a variable just put the word <code>var</code> before the name then an "<code>=</code>" sign to give it what you want to define it as</li>
</ul>

<pre><code>var x = 1;
</code></pre>

<p>There's an example of making a variable called <code>x</code> defined as the <strong>integer</strong> <code>1</code></p>

<h1>Time for your task!</h1>
<img src = "https://i.imgur.com/8Ixo4er.gif" width = "300">
<ul>
  <li>Put the following in a <code>&lt;script&gt;</code> tag!</li>
  <li>make a variable called <code>x</code> that is defined as <code>1</code></li>
  <li>make another variable, <code>z</code>, that will also be <code>1</code></li>
  <li>set <code>z</code> to be the value of x plus 10</li>
  <li>use <code>document.write()</code> to make your result visible!</li>
</ul>
`,`<img src = "https://i.imgur.com/vHRhErS.png" width = "300">
<img src = "https://i.imgur.com/XSIq8zi.png" width = "300">`,`<h1>Let's talk more about variables!</h1>
<p><em>Mostly, just because there's more objectives from the pdf to cover</em></p>

<h2>Numbers aren't the only thing you can add!</h2>

<pre><code>1 + 1
</code></pre>
<p>will give you <code>2</code></p>

<h3>but...!</h3>

<pre><code>"cat"+"dog"
</code></pre>
<p>...will give you...</p>

<pre><code>catdog
</code></pre>

<h2>You can add strings together!</h2>

<p>Doing so will give you a combination of the words jammed together</p>

<pre><code>"cat" + " " + "dog"
</code></pre>
<p>will give you <code>cat dog</code></p>

<pre><code>"cat " + "dog"
</code></pre>
<p>will also give you <code>cat dog</code></p>

<h2>Let's give you some practice!</h2>
<img src = "https://i.imgur.com/8Ixo4er.gif" width = "300">
<ul>
  <li>Play close attention to your instructions on all lessons, as we go on I will give you less details to test your memory since I won't be here to help with you go on the exam</li>
  <li>Make a variable called <code>name</code> that equals <code>Rat</code></li>
  <li>Then a variable <code>message</code> that combines name with <code>" "</code> and <code>"is me"</code></li>
  <li>Finally, use the <code>alert()</code> function on your last variable</li>
</ul>
`,`<h1>What if alerts had interactivity?</h1>
<p><em>Well, well, well, boy do I have the function for you!</em></p>

<h2>prompt()</h2>
<p>This is a function that works not too differently than the others, but also gives you some proper exposure to <code>arguments</code></p>

<p>I think it'd be best to take a moment to discuss what those are.</p>

<p>From your perspective a lot of the functions we've been using were words with a parenthesis after them but that's kinda it?</p>

<p>You couldn't <em>see</em> where the grinds were actually turning</p>

<p>Instead it was off, locked away in another file that I don't even know where that'd be. It may be your browser or the website itself or neither, That's a question for google 😎</p>

<p>The point is the actual function not being in your site can make things at times feel like you put in a word with a parenthesis and magic just happens.</p>

<hr>
<h3>It's far from magic! It's <code>Arguments</code> at play</h3>
<hr>

<p>So, when we have a function like <code>alert</code> it takes in just one argument, that would be the string you want it to show you.</p>

<p>An argument is just another word for something you already know, <strong><em>A variable!</em></strong></p>

<h3>So why the name change?</h3>
<p>Would be a great question to ask! I want to discuss this further because knowing how things work is important with having a better grasp on what is and isn't possible.</p>

<p>Especially when you are writing from memory on paper rather than an autocomplete code editor or multiple choice quiz.</p>

<p><strong>The reason for the name is...</strong> Because while I said these are variables, they are not <em>quite</em> used the same as the ones you've seen so far.</p>

<p>Instead these are variables that have names but usually no value, <em>faceless dolls</em> in a way.</p>

<pre><code>alert("Hello World")
</code></pre>

<p>Let's hypothetically say the argument was called <code>message</code>. That would mean when we run this code alert's <code>message</code> variable changes to "Hello World" and it runs whatever code it needs to show <code>message</code> on your screen</p>

<p>In some cases they might have a default value rather than none, but the point I'm making is still the same.</p>

<hr>
<h1>BUT, WHAT DOES THIS HAVE TO DO WITH PROMPT???</h1>
<hr>

<p>Well, prompt has <em>two</em> arguments, which is why I wanted to discuss what an argument is beforehand. So, that saying that had actual meaning rather than just being mumbo jumbo.</p>

<p>I didn't invent javascript so I don't know the arguments' actual names but lets give them hypothetical names for the purpose of this demo.</p>

<pre><code>prompt(<strong>alertText</strong>, <strong>typedText</strong>)
</code></pre>

<p>These names are not the actual names, but they make it clear to you the purpose.</p>
<ul>
  <li><code>alertText</code>, the first argument will be the text that pops up for us on the screen.</li>
  <li><code>typedText</code>, the second argument will be the text that's in the text bar by default.</li>
</ul>

<h2>Fun Fact!</h2>
<p>You can also turn strings into numbers! Which bringing that up gives me the perfect excuse to tell you about <code>parseInt</code> and saving your prompt at the same time!</p>

<pre><code>&lt;script&gt;
    var countries = prompt("How many countries have you been to?", "1");
    var betterAmount = parseInt(countries) + 1;
    alert("Well i've been to " + betterAmount);
&lt;/script&gt;
</code></pre>

<p><em>Try running this script!</em></p>
<ul>
  <li><code>parseInt()</code> takes a string and returns an integer</li>
  <li>we can also see by putting our <code>var</code> definition beforehand we can save our prompt answer as a variable in our code!</li>
</ul>

<hr>

<h1>TIME FOR YOUR PRACTICE!!!</h1>

<img src = "https://i.imgur.com/8Ixo4er.gif" width = "300">

<ul>
  <li>Make a variable <code>t1</code> and connect it to a prompt with <strong>alertText</strong> <code>Please enter text</code> and <strong>typedText</strong> <code>Type here</code></li>
  <li>Repeat the process for <code>t2</code></li>
  <li>Define <code>t3</code> as the combination of <code>t1</code> and <code>t2</code></li>
  <li>Use <code>document.write()</code> to show the final result of <code>t3</code></li>
</ul>
`,`<h1>Exercise from the PDF</h1>
<p><em>(google translated with some human edits)</em></p>

<ol>
  <li>Write an HTML page (this will be the entire html, not just the body) with a JavaScript area.</li>
  <li>Read with two <code>prompt(…)</code> calls<br>
      insert two strings of numbers one after the other.</li>
  <li>Enter the concatenation <em>(This is just a big word that means joining strings together like <code>cat</code> and <code>dog</code> becoming <code>catdog</code>)</em> of the digit chains as strings.</li>
  <li>Convert the digit strings into whole Numbers around.</li>
  <li>Output the sum of the numbers.</li>
</ol>

<h2>While I'd love to give more help than this...</h2>
<p>Being that it's from the pdf, there is a chance this is the way they'll awkwardly phrase things on the exam.</p>
`,`<h1>Let's talk about booleans!</h1>

<p>A boolean is a variable type just like the <code>"strings"</code> and <code>ints</code> <em>(numbers)</em> we've talked about already!</p>

<p>A boolean is usually <code>true</code> or <code>false</code></p>

<p><strong>But</strong> it can also be nothing. The way you phrase that changes in different programming languages, but here we call it <code>null</code></p>

<h3>It's kind of like positive, negative, and neutral!</h3>

<ul>
  <li>Here's an example!</li>
</ul>

<pre><code>var truth = true;
</code></pre>

<p>Very straightforward, but it's really just this simple. The really important use booleans have is by creating them by asking questions.</p>

<p>You can think of it like asking the computer a question and saving if it says yes or no.</p>

<ul>
  <li>Here's an example!</li>
</ul>

<pre><code>&lt;script&gt;
    var nerds = "Cringe";
    var truth = (nerds == "Cringe");
    alert(truth);
&lt;/script&gt;
</code></pre>

<p>You'll notice the output of this section is also <code>true</code>. That's because we asked if our variable, <code>nerds</code>, was <code>"Cringe"</code>.</p>

<p>Since the computer answered <code>true</code>, that ended up being the value put into our <code>truth</code> variable!</p>

<p>All we did was save the computer's answer to our question!</p>

<h1>⚠️ PSA!!! ⚠️</h1>
<p><em>Talking about <strong>how</strong> we ask these questions is important</em></p>

<p>In many programming languages we use two equal signs to check if one thing is the same as another: <code>==</code></p>

<p>That's because we already use one equal sign to change the value of one thing: <code>=</code></p>

<p>So, of course we don't want to confuse the computer by using the same sign for both!</p>

<h3>Javascript has another important way to check and ask the computer questions...</h3>

<p>In javascript we also have a triple equal sign for checking if it's EXACTLY alike: <code>===</code></p>

<p>In most languages that's already what two would do: <code>==</code></p>

<p>Though not in javascript, two <code>==</code> checks if they are the same without factoring for if they're the same <code>type</code>.</p>

<h3>Wait, what does that even mean?</h3>

<ul>
  <li>Let's do an experiment to find out</li>
  <li>Run the following in your code editor</li>
</ul>

<pre><code>&lt;script&gt;
    alert(1 == "1");
    alert(1 === "1");
&lt;/script&gt;
</code></pre>

<h3>So, this shows us that...</h3>

<p><code>1</code> the number is the same as <code>"1"</code> the word. Since they are both one after all.<br>
Let's say it's like asking:<br>
<code>"...is this basically the same as..."</code></p>

<p>But using <code>===</code> lets us do a very specific search. <code>"1"</code> is a word and <code>1</code> is a number, so they are not the same.<br>
Let's say it's like asking:<br>
<code>"...is this EXACTLY alike with..."</code></p>

<p><strong>The book doesn't talk about this difference, but just gives you two <code>==</code> or three <code>===</code> when introducing booleans. Not even talking about the differences.</strong></p>

<hr>

<h1>Let's try some practice!</h1>
<img src = "https://i.imgur.com/8Ixo4er.gif" width = "300">

<ul>
  <li>Use a prompt that asks <code>Was the moon landing fake?</code></li>
  <li>The text in the typing area will be <code>Your opinion here...</code></li>
  <li>Save this prompt as the variable <code>response</code></li>
  <li>Next, we will create a boolean called <code>toldTruth</code> by checking if <code>response</code> was the same as <code>"yes"</code></li>
  <li>Use <code>alert()</code> on your last variable</li>
</ul>
`,`<h1>Hold on, Buckaroo<code>!</code> You're <code>not</code> ready for if statements just yet!</h1>
<p><em>That slight pun will make sense after learning the next lesson</em></p>

<h3>Booleans might be simple, but BOY are they useful!!</h3>

<p>So, they are true, false, or null. We've talked about that and how to start asking the computer questions.</p>

<p>Though there's another basic principle, that's going to be super important to cover!</p>

<h3>Combining your questions!</h3>

<p>So, first let’s talk about <code>and</code> and <code>or</code>. Unfortunately, in many languages these are represented by symbols, but at least they're relatively consistent!</p>

<p><del><em>Cough, cough, python solos (it's literally just words)</em></del></p>

<pre><code>&amp;&amp;</code></pre>
<p>is <code>and</code> and it keeps up with our previous tradition of saying things twice in a row like an oompa loompa song.</p>

<ul>
  <li>This symbol is pretty easy to remember since it's literally <code>and</code> even in grammar</li>
  <li>It's a little tricky to draw, but practicing that should come in your own time!</li>
</ul>

<pre><code>||</code></pre>
<p>is <code>or</code>, which personally I don't really think about since I have plenty of experience with it. Though I can see how this one is a lot less... straightforward.</p>

<ul>
  <li>One way we can imagine it is like a wall between the two questions that looks at them separately</li>
  <li><code>&amp;&amp;</code> on the other hand joins them together as one big question to ask</li>
</ul>

<img src = "https://i.imgur.com/IWm9x7I.png" width = "350"/>

<h3>Now for an experiment!</h3>

<pre><code>&lt;script&gt;
    var x = 1;
    var y = 2;

    //       yes      no
    alert(x == 1 || y == 1);

    //       yes      no
    alert(x == 1 &amp;&amp; y == 1);
&lt;/script&gt;
</code></pre>

<ul>
  <li><em>By the way, <code>//</code> is for making comments if you didn't know</em></li>
  <li>Running this we can see that if there's a yes and no, just that one yes is good enough to be true.</li>
</ul>

<img src = "https://i.imgur.com/seX3QVf.png" width = "350"/>

<p>A human question that's similar would be…</p>

<pre><code>"Have you seen any action animes, like maybe Naruto or One Piece?"
</code></pre>

<p>Even if you've only seen one, you'd answer yes because it was only asking for one or the other.</p>

<ul>
  <li>We also see that the second alert would be false, because both are not true, the whole thing comes out wrong</li>
</ul>

<p>A similar human question might be something like…</p>

<pre><code>"So, have you visited Europe and Mars?"
</code></pre>

<p>You'd say no to such a prosperous question. Who would ever want to go to Europe???</p>

<h2>Let's get some Practice!</h2>
<img src = "https://i.imgur.com/8Ixo4er.gif" width = "300">


<ul>
  <li>We are going to make two prompts, both will have the text in the text area as <code>Type here</code></li>
  <li>The first prompt will ask the user <code>Do you like fish sticks</code></li>
  <li>The second will ask <code>So, you're a gay fish?</code></li>
  <li>Save the questions as <code>q1</code> and <code>q2</code> respectively.</li>
  <li>Make a boolean called <code>verdict</code>, that checks if <code>q1</code> and <code>q2</code> are both <code>"yes"</code></li>
  <li>Make an <code>alert()</code> of <code>verdict</code></li>
</ul>


<img src = "https://i.imgur.com/Hh91T7u.png" width = "350"/>
`,`<h1>Wait....THERE'S MORE???</h1>

<p><em>Alright, alright, I promise this is the last thing I'll rattle on about for booleans...</em></p>

<p>Time to talk about the <code>not</code> operator!</p>

<h2><code>not</code> is expressed with a <code>!</code></h2>
n
<p>This is another one of those situations that sure it inherently makes sense to someone with experience, who's super cool like myself.</p>

<p>Though as far as making sure you can remember I'd say-...</p>

<ul>
  <li>One way to look at it would be like a reaction from someone who is <strong>SHOCKED AT HOW THAT IS <code>NOT</code> THE CASE</strong></li>
</ul>

<img src = "https://i.imgur.com/Yld1DFe.png" width = "300">

<p>All it does is reverse things, or moreso make them <code>not</code> themself.</p>

<ul>
  <li>Here's a helpful experiment for your understanding…</li>
</ul>

<pre><code>&lt;script&gt;
    var literallyTrue = true;

    alert(literallyTrue)

    alert(!literallyTrue)
&lt;/script&gt;
</code></pre>

<ul>
  <li>The first alert is well... literally true, no surprise.</li>
  <li>Though the second one gives us <code>false</code>? The reason is because it took that true and well... made it <code>not true</code></li>
  <li>It helps with our understanding if when we see that symbol <code>!</code> in our code, to read it as the word <code>not</code> in your head.</li>
</ul>

<h2><code>!</code> also works with equal signs!?</h2>

<p>The actual PDF explains so many things poorly or barely explains things, so they actually don't even touch on this. Despite it being a one letter difference that opens literally infinite possibilities?</p>

<p>So, yes while this specific thing is <code>not</code> in the PDF, and thus less likely to be in the exam, I still want to cover it briefly.</p>

<ul>
  <li>Remember how we can check things?</li>
</ul>

<pre><code>alert(1 == 1)
</code></pre>

<p>This would give us <code>true</code> since 1 <strong>is</strong> 1</p>

<ul>
  <li>But we can also add that <code>not</code> by using <code>!</code></li>
</ul>

<pre><code>alert(1 != 2)
</code></pre>

<p>This would give us <code>true</code> because 1 <strong>is</strong> <code>not</code> 2</p>

<p>This still reads like a sentence does, so hopefully it makes sense!</p>

<h2>Let's get some practice.</h2>
<img src = "https://i.imgur.com/8Ixo4er.gif" width = "300">

<ul>
  <li>Make a prompt with text area as <code>Type here</code></li>
  <li>The question: <code>"In your personal opinion, what's the best animal?"</code></li>
  <li>Be sure to save your prompt as <code>response</code></li>
  <li>Then again we'll make an alert of a <code>verdict</code> variable based on if <code>response</code> is not <code>"cat"</code></li>
</ul>
`,`<h1>Looks like you're finally old enough for <code>if statements</code></h1>

<p>You've actually already done most of the work already!</p>

<p>Only thing you need on your booleans is an <code>if</code> and some curly brackets <code>{}</code> to run whatever is inside of them!</p>

<p>Let’s take a previous example like:</p>

<pre><code>alert(1 == 1)
</code></pre>

<p>Instead of just putting it in an alert or a variable, we do the same we've been doing but:</p>

<ul>
  <li><code>if</code> goes on the left side of the parenthesis</li>
  <li><code>{}</code> goes on the right side of the parenthesis</li>
</ul>

<p>Let’s see that in action</p>

<pre><code>&lt;script&gt;
if (1 == 1) {
    alert("duh...")
}
&lt;/script&gt;
</code></pre>

<ul>
  <li>One more note, the action in the <code>{ }</code> will only activate if the <code>if</code> came out as true</li>
</ul>

<p>Unfortunately, there's not much else to say about if statements? Even in the pdf.</p>

<p>Boolean logic is the main topic of detail when it comes to if statements, and you've already been taught that.</p>

<p><code>else</code> and <code>if else</code> statements would be next logically, but being that your pdf doesn't talk about that at all… I'll assume they aren't in the exam.</p>

<h1>DOESN'T MEAN YOU DON'T HAVE PRACTICE!</h1>
<img src = "https://i.imgur.com/8Ixo4er.gif" width = "300">

<ul>
  <li>Take one of the previous lesson objectives of the fish stick question and put the verdict in an <code>if () { }</code> statement</li>
  <li>If they answered <code>"yes"</code> to both questions, send the <code>alert()</code> of <code>"HAHAHAHAHA YOU'RE A GAY FISH"</code></li>
</ul>
`,`<h1>The second from the pdf exercise-....</h1>
<p><em>This is also our bitter goodbye, the last javascript lesson...</em></p>

<h2>All that finale and you just end up with google translate...</h2>

<blockquote>
  <ul>
    <li>Create a <code>prompt(…)</code> call with which you can count the number of pizzas in one, and specify order.</li>
    <li>If the number is greater than 10, enter a message that the processing of the order takes longer than an hour</li>
  </ul>
</blockquote>

<p><strong>This will be instructor graded instead of hard coded</strong></p>

<h3>Pizza? Again??</h3>
<p><em>I can’t tell if these people are hungry or just want you to work a minimum wage pizza boy job—</em></p>
`,`<h1> Oh...CSS...is next...</h1>
<em>I really like computer science...but css...is lame...</em>
<p>plus-...<br/> I didn't really remember that much of it besides the pdf anyways 🙄🙄🙄 <br/> at least with the content from js if I don't know I'm more interested in exploring it <br/> css is just numbers and....🤢🤢 f r o n t   e n d 🤢🤢 development </p>


<strong>So yeah-</strong>
<img src="https://i.imgur.com/rMTESYr.png" width="300"/>
<br/>
<em>...I'm out...</em>


<br/>
<br/>
<br/>

<h2>Tagging A.I. back in for analyzing your pdf</h2>
<br/>
<img src="https://i.imgur.com/qyLSfmn.png" width="300"/>`,`<h1>Cascading Style Sheets (CSS)</h1>

<h3>Separation of Concern</h3>
<ul>
  <li>Bezeichnet allgemein die formale Trennung von unterschiedlichen Aspekten</li>
  <li>Hier: Trennung zwischen Inhalt/Struktur und Gestaltung</li>
  <li>Für HTML5 ist CSS3 der Standard</li>
</ul>

<h3>Regeln für die Formatierung</h3>
<ul>
  <li>Basierend auf Struktur und Verhalten von HTML-Dateien</li>
  <li>Bezugnahme allgemein z.B. auf Tags und konkret z.B. auf ein id-Attribut</li>
</ul>

<h3>Pragmatik: Separation of Concern</h3>
<ul>
  <li>Trennung von Inhalt und Gestaltung
    <ul>
      <li>Texte, Multimedia, Interaktive Dokumente, Webseiten</li>
    </ul>
  </li>
  <li>Getrennte Bearbeitung verbessert
    <ul>
      <li>Erstellung und Veränderung</li>
      <li>Austausch</li>
      <li>Wiederverwendung</li>
      <li>Aufbewahrungsorte</li>
      <li>(Meta-)Suchmöglichkeiten</li>
    </ul>
  </li>
</ul>

<h3>Zusätzliche Angaben in der HTML-Datei</h3>
<ul>
  <li>Strukturierung durch Div-Blöcke
    <ul>
      <li>Anfangstag <code>&lt;div&gt;</code> und Endtag <code>&lt;/div&gt;</code></li>
      <li>Gruppierendes Element innerhalb des Body</li>
      <li>Können geschachtelt auftreten</li>
      <li>Vergabe von id-Attributen in den Blöcken</li>
      <li>In Ausnahmefällen können auch andere Tags wie <code>&lt;p&gt;</code>, <code>&lt;ul&gt;</code>, <code>&lt;h1&gt;</code> mit id-Attributen für CSS genutzt werden.</li>
    </ul>
  </li>
  <li>Vergabe von class-Attributen
    <ul>
      <li>Verwendung von eigenen Formatierungsvorlagen</li>
    </ul>
  </li>
  <li>Hinweis: Dasselbe Prinzip erfolgt für die Textebene mit dem <code>span</code>-Tag.</li>
</ul>
`,`<h3>Aufbau von CSS-Regeln</h3>

<ul>
  <li>Regel besteht aus Selektor und Formatierungsangaben <code>{}</code></li>
  <li>Reihenfolge der Regeln ohne Bedeutung</li>
  <li>Ausnahme: Regeln für die selben Selektoren überschreiben vorherige Regeln</li>
</ul>

<h4>Beispiel:</h4>
<pre><code class="language-css">
body {
  background-color: yellow;
  color: red;
  text-align: center;
}
</code></pre>
`,`<h3>Was wird formatiert: Selektoren</h3>

<ul>
  <li>Selektoren für Tags  
    <ul>
      <li>z. B. <code>h1 {…}</code> (ohne <code>#</code>)</li>
    </ul>
  </li>

  <li>Selektoren für id-Attribute  
    <ul>
      <li>z. B. <code>#alles {…}</code> (<code>#</code> notwendig)</li>
    </ul>
  </li>

  <li>Selektoren für class-Attribute  
    <ul>
      <li>z. B. <code>.rechts {…}</code> (mit Punkt) für z. B. <code>&lt;p class="rechts"&gt;</code></li>
    </ul>
  </li>

  <li>Kombination  
    <ul>
      <li>z. B. <code>p.mittig {…}</code>, <code>div#id1 {…}</code>, <code>#id2.mittig {…}</code></li>
    </ul>
  </li>

  <li>Gruppierung  
    <ul>
      <li>z. B. <code>p, .mittig, #id3, body#alles {…}</code></li>
    </ul>
  </li>

  <li>Pseudoselektoren (z. B. für Links)  
    <ul>
      <li><code>a:link</code>, <code>a:visited</code>, <code>a:hover</code></li>
    </ul>
  </li>
</ul>

<h3>Wie wird formatiert: Formatierungsangaben</h3>

<ul>
  <li>Liste von  
    <ul>
      <li><code>name:value</code>-Paaren</li>
      <li>jeweils begrenzt durch <code>;</code></li>
      <li>in <code>{…}</code></li>
    </ul>
  </li>

  <li>Textformatierungen für  
    <ul>
      <li><code>font-weight</code>, <code>font-style</code>, <code>font-size</code>, <code>color</code>, <code>text-align</code>, …</li>
    </ul>
  </li>

  <li>Weitere Eigenschaften durch  
    <ul>
      <li><code>background-color</code>, <code>width</code>, <code>height</code>, <code>float</code>, …</li>
    </ul>
  </li>
</ul>
`,`<h3>CSS: font-size und line-height</h3>

<ul>
  <li><code>font-size</code>
    <ul>
      <li>Maß für Größe einer Schrift / Schriftgrad (siehe Bild)</li>
      <li>verschiedene absolute und relative Einheiten möglich</li>
    </ul>
  </li>

  <li><code>line-height</code>
    <ul>
      <li>Maß für den Zeilenabstand</li>
      <li>wird in der Regel als Vielfaches von <code>font-size</code> angegeben</li>
      <li>absoluter Wert ist auch möglich</li>
    </ul>
  </li>
</ul>

<h3>CSS: Einheiten (1)</h3>

<ul>
  <li>Absolute SI-Einheiten
    <ul>
      <li><code>cm</code>, <code>mm</code>, <code>in</code> (2,54 cm)</li>
    </ul>
  </li>

  <li>Absolute Einheiten basierend auf Schriftgrad
    <ul>
      <li><code>pt</code> („Punkt“ oder „Point“): 1 pt = 1/72 inch</li>
      <li><code>pc</code> („Pica“): 1 pc ≈ 303,5 mm</li>
    </ul>
  </li>

  <li>Relative Einheiten, bezogen auf aktuellen Font und seine Größe
    <ul>
      <li><code>em</code>: Vielfaches des <code>font-size</code></li>
      <li><code>rem</code>: Vielfaches des <code>font-size</code> des Root-Elements</li>
      <li><code>ex</code>: Vielfaches der x(„Kleinbuchstaben“)-Größe</li>
    </ul>
  </li>
</ul>

<h3>CSS: Einheiten (2)</h3>

<ul>
  <li>Referenzpixel
    <ul>
      <li>theoretisch: 1 px = 1/96 inch</li>
      <li>wird entsprechend auf mehrere Gerätepixel gerendert</li>
      <li>bei geringer Auflösung: 1 Gerätepixel</li>
      <li>z. B. wird Auflösung eines Fotos auf ebendiese Referenzpixel abgebildet</li>
    </ul>
  </li>
</ul>

<h3>Wichtige Default-CSS-Werte</h3>

<pre><code class="language-css">
body {
  margin: 8px; /* Außenabstand */
}

h1 {
  font-size: 2em;
  margin: 0.67em 0px;
  font-weight: bold;
}

p {
  margin: 1.12em 0px;
}
</code></pre>
`,`<h3>CSS-Defaults sichtbar machen</h3>

<pre><code class="language-html">
&lt;style&gt;
  body {
    border: 1px dashed black;
  }

  h1 {
    border: 1px solid red;
  }

  p {
    border: 1px solid green;
  }
&lt;/style&gt;
</code></pre>
`,`<h3>Werte für margin und padding angeben</h3>

<ul>
  <li>Maximal vier Werte im Uhrzeigersinn (oben, rechts, unten, links)  
    <ul>
      <li>z. B. <code>margin: 10px 20px 30px 40px;</code></li>
    </ul>
  </li>

  <li>Erster Wert für oben/unten, zweiter Wert für links/rechts  
    <ul>
      <li>z. B. <code>margin: 20px 10px;</code></li>
      <li>z. B. <code>margin: 20px auto;</code></li>
    </ul>
  </li>

  <li>Erster Wert für oben, zweiter Wert für links/rechts, dritter Wert für unten  
    <ul>
      <li>z. B. <code>margin: 10px 20px 30px;</code></li>
    </ul>
  </li>

  <li>Ein Wert für alles  
    <ul>
      <li>z. B. <code>margin: 20px;</code></li>
    </ul>
  </li>

  <li><code>padding</code> analog!</li>
</ul>
`,`<h3>Vertikal zusammenfallende margin-Werte</h3>

<ul>
  <li>Unterer <code>margin</code> der Box und oberer <code>margin</code> der nachfolgenden Box  
    <ul>
      <li>Der größere Wert zählt (z. B. angrenzende Paragraphen)</li>
    </ul>
  </li>

  <li>Oberer <code>margin</code> der Box und oberer <code>margin</code> der ersten Kindbox  
    <ul>
      <li>Wenn kein Rand oder <code>padding</code> für die äußere Box definiert ist, zählt der größere Wert</li>
      <li>Gilt als Abstand der äußeren Box</li>
    </ul>
  </li>

  <li>Unterer <code>margin</code> der Box und unterer <code>margin</code> der Kindbox  
    <ul>
      <li>Analog zur vorherigen Regel</li>
    </ul>
  </li>

  <li>Oberer und unterer <code>margin</code> einer Box ohne Inhalte und ohne einen Wert für <code>height</code></li>
</ul>

<h3>CSS Befehle einbinden</h3>

<ul>
  <li>Einbinden einer separaten CSS-Datei im <code>&lt;head&gt;</code>:
    <ul>
      <li><code>&lt;link rel="stylesheet" href="Dateiname.css" /&gt;</code></li>
    </ul>
  </li>

  <li>Alternativ direkt in der HTML-Datei:
    <ul>
      <li>Im <code>&lt;head&gt;</code>:</li>
    </ul>
    <pre><code class="language-html">
&lt;style&gt;...&lt;/style&gt;
</code></pre>

    <ul>
      <li>Innerhalb eines Tags:</li>
    </ul>
    <pre><code class="language-html">
&lt;h1 style="font-size:500%;"&gt;
&lt;body style="background-color:red; text-align:left;"&gt;
</code></pre>
  </li>
</ul>
`,`<h3>Kaskadierung</h3>

<ul>
  <li>Auswahl eines Style Sheets  
    <ul>
      <li>Webseite verweist auf CSS-Datei (unterste Priorität)</li>
      <li>Browser legt CSS-Datei fest (mittlere Priorität)</li>
      <li>Nutzer legt CSS-Datei fest (höchste Priorität)</li>
    </ul>
  </li>

  <li>Auswertungsreihenfolge für Regeln  
    <ul>
      <li>Regel in der CSS-Datei wird zuerst gesucht</li>
      <li>Regel im <code>&lt;head&gt;</code> überschreibt Regeln aus der CSS-Datei</li>
      <li>Regel im Tag (<code>style=""</code>) überschreibt Regel aus dem <code>&lt;head&gt;</code></li>
    </ul>
  </li>
</ul>

<h3>CSS-Übung:</h3>
<p>Erstellen Sie folgende Webseite!</p>
`],Jd={1:["<h1>Hello, World!</h1>","<h1>Hello, Weird!</h1>"],2:["<em>I am small</em>"],3:[`<!DOCTYPE html>
<html lang="de">
  <head>
    <title>Skeleton Page</title>
  </head>
  <body>
    <h1>Skeletons Are Awesome</h1>
    <p>They hold everything together.</p>
  </body>
</html>
`],7:[`
<h1>Main Topic</h1>
<p>The invention of Minecraft.</p> 


<h2>Subtopic</h2> 
<p>The Minecraft file first crash landed from a meteor.</p> 


<h3>Smaller Detail</h3> 
<p>Today this meteor is hosted in the Minecraft Museum.</p>
`,`
<h1>Main Topic</h1>
<p>The invention of Minecraft</p> 


<h2>Subtopic</h2> 
<p>The Minecraft file first crash landed from a meteor</p> 


<h3>Smaller Detail</h3> 
<p>Today this meteor is hosted in the Minecraft Museum</p>
`],8:[`<h1>Human Transmutation Guide</h1>

<h2>Boys are made of</h2>
<ol>
    <li>Snot</li>
    <li>Testosterone</li>
    <li>Cool stuff</li>
</ol>

<h2>Girls of made of</h2>
<ul>
    <li>Sugar</li>
    <li>Spice</li>
    <li>Everything nice</li>
</ul>
`],9:["<p>I am <strong>really</strong> small</p>"],10:[`<p>The FNAF lore is very...<br />Simple</p>

<hr />

<div>
    <h2>Fun Fact</h2>
    <p>The <span style="color: red">truth</span> about Freddy Fazbear is that Joe Biden is the suit</p>
</div>`],14:['<a href="https://youtu.be/dQw4w9WgXcQ">Open this link in a new tab</a> '],15:['<img src="https://i.imgur.com/cif7t3w.png" alt="Beschreibung" height="300" width="300" />'],17:[`<a href="https://www.chosic.com/wp-content/uploads/2023/06/vine-boom-sound-effect(chosic.com).mp3"> 
    <img src ="https://i.imgur.com/T9cOoPU.png" height = "300" width = "300" alt="open in new tab for boom"/>
</a>`],19:[`<form method="post" action="submit.php" onsubmit="return false;">
    <h1>Black Knights Application</h1>
    <p>Name: <input type="text" name="username" size="30" /></p>
    <p>Gender:</p>
    <input type="radio" name="gender" value="male" checked="checked">Male</input>
    <input type="radio" name="gender" value="female">Female</input>
    <input type="radio" name="gender" value="mecha">Mecha</input>
    <input type="radio" name="gender" value="other">Other</input>
    <p>
        <input type="checkbox" name="privacy" value="accepted" > I agree to the I HATE BRITANNIA policy</input>
    </p>  
    <input type="submit" value="Register" />
</form>`],20:[`<form method="post" action="submit.php" onsubmit="return false;">
    <h1>So you want to darkly gather ghosts?</h1>

    <p>What kind of doll will you force ghosts into?</p>
    <select name="toy" size="1">
        <option value="teddy"">Teddy Bear</option>
        <option value="doll">Barbie Doll</option>
        <option value="beluga">Plush Beluga</option>
    </select>

    <p>What Trauma motivated you to hunt ghosts?</p>
    <select name="traumas[]" multiple="multiple" size="4">
        <option value="prego">Pregnancy demon</option>
        <option value="ww1">WW1 ghost asked me for water</option>
        <option value="womb">A womb stole my mom</option>
        <option value="grooming">Groomed by spirit</option>
    </select>

    <p>Please Discuss more about your Trauma:</p>
    <textarea name="mission" rows="4" cols="40">Well it all started when...</textarea>

    <p><input type="submit" value="Send"/></p>
</form>`]};var Hr={exports:{}},Rr,Fd;function Kp(){if(Fd)return Rr;Fd=1;var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Rr=r,Rr}var Br,$d;function Wp(){if($d)return Br;$d=1;var r=Kp();function f(){}function g(){}return g.resetWarningCache=f,Br=function(){function o(L,V,O,z,N,Q){if(Q!==r){var F=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw F.name="Invariant Violation",F}}o.isRequired=o;function S(){return o}var x={array:o,bigint:o,bool:o,func:o,number:o,object:o,string:o,symbol:o,any:o,arrayOf:S,element:o,elementType:o,instanceOf:S,node:o,objectOf:S,oneOf:S,oneOfType:S,shape:S,exact:S,checkPropTypes:g,resetWarningCache:f};return x.PropTypes=x,x},Br}var Id;function Jp(){return Id||(Id=1,Hr.exports=Wp()()),Hr.exports}var Fp=Jp();const pe=th(Fp);var Ht=typeof window<"u"?window:null,Cr=Ht===null,Ga=Cr?void 0:Ht.document,Nt="addEventListener",Lt="removeEventListener",_r="getBoundingClientRect",qa="_a",Ct="_b",ul="_c",uu="horizontal",qt=function(){return!1},$p=Cr?"calc":["","-webkit-","-moz-","-o-"].filter(function(r){var f=Ga.createElement("div");return f.style.cssText="width:"+r+"calc(9px)",!!f.style.length}).shift()+"calc",sh=function(r){return typeof r=="string"||r instanceof String},Pd=function(r){if(sh(r)){var f=Ga.querySelector(r);if(!f)throw new Error("Selector "+r+" did not match a DOM element");return f}return r},lt=function(r,f,g){var o=r[f];return o!==void 0?o:g},cu=function(r,f,g,o){if(f){if(o==="end")return 0;if(o==="center")return r/2}else if(g){if(o==="start")return 0;if(o==="center")return r/2}return r},Ip=function(r,f){var g=Ga.createElement("div");return g.className="gutter gutter-"+f,g},Pp=function(r,f,g){var o={};return sh(f)?o[r]=f:o[r]=$p+"("+f+"% - "+g+"px)",o},ey=function(r,f){var g;return g={},g[r]=f+"px",g},eh=function(r,f){if(f===void 0&&(f={}),Cr)return{};var g=r,o,S,x,L,V,O;Array.from&&(g=Array.from(g));var z=Pd(g[0]),N=z.parentNode,Q=getComputedStyle?getComputedStyle(N):null,F=Q?Q.flexDirection:null,Se=lt(f,"sizes")||g.map(function(){return 100/g.length}),Me=lt(f,"minSize",100),Te=Array.isArray(Me)?Me:g.map(function(){return Me}),Ee=lt(f,"maxSize",1/0),Ke=Array.isArray(Ee)?Ee:g.map(function(){return Ee}),ee=lt(f,"expandToMin",!1),ue=lt(f,"gutterSize",10),Oe=lt(f,"gutterAlign","center"),G=lt(f,"snapOffset",30),se=Array.isArray(G)?G:g.map(function(){return G}),le=lt(f,"dragInterval",1),Ae=lt(f,"direction",uu),he=lt(f,"cursor",Ae===uu?"col-resize":"row-resize"),ie=lt(f,"gutter",Ip),je=lt(f,"elementStyle",Pp),Ue=lt(f,"gutterStyle",ey);Ae===uu?(o="width",S="clientX",x="left",L="right",V="clientWidth"):Ae==="vertical"&&(o="height",S="clientY",x="top",L="bottom",V="clientHeight");function Ge(U,D,_,Y){var _e=je(o,D,_,Y);Object.keys(_e).forEach(function(De){U.style[De]=_e[De]})}function nt(U,D,_){var Y=Ue(o,D,_);Object.keys(Y).forEach(function(_e){U.style[_e]=Y[_e]})}function W(){return O.map(function(U){return U.size})}function T(U){return"touches"in U?U.touches[0][S]:U[S]}function B(U){var D=O[this.a],_=O[this.b],Y=D.size+_.size;D.size=U/this.size*Y,_.size=Y-U/this.size*Y,Ge(D.element,D.size,this[Ct],D.i),Ge(_.element,_.size,this[ul],_.i)}function k(U){var D,_=O[this.a],Y=O[this.b];this.dragging&&(D=T(U)-this.start+(this[Ct]-this.dragOffset),le>1&&(D=Math.round(D/le)*le),D<=_.minSize+_.snapOffset+this[Ct]?D=_.minSize+this[Ct]:D>=this.size-(Y.minSize+Y.snapOffset+this[ul])&&(D=this.size-(Y.minSize+this[ul])),D>=_.maxSize-_.snapOffset+this[Ct]?D=_.maxSize+this[Ct]:D<=this.size-(Y.maxSize-Y.snapOffset+this[ul])&&(D=this.size-(Y.maxSize+this[ul])),B.call(this,D),lt(f,"onDrag",qt)(W()))}function oe(){var U=O[this.a].element,D=O[this.b].element,_=U[_r](),Y=D[_r]();this.size=_[o]+Y[o]+this[Ct]+this[ul],this.start=_[x],this.end=_[L]}function d(U){if(!getComputedStyle)return null;var D=getComputedStyle(U);if(!D)return null;var _=U[V];return _===0?null:(Ae===uu?_-=parseFloat(D.paddingLeft)+parseFloat(D.paddingRight):_-=parseFloat(D.paddingTop)+parseFloat(D.paddingBottom),_)}function A(U){var D=d(N);if(D===null||Te.reduce(function(De,We){return De+We},0)>D)return U;var _=0,Y=[],_e=U.map(function(De,We){var Zt=D*De/100,$l=cu(ue,We===0,We===U.length-1,Oe),it=Te[We]+$l;return Zt<it?(_+=it-Zt,Y.push(0),it):(Y.push(Zt-it),Zt)});return _===0?U:_e.map(function(De,We){var Zt=De;if(_>0&&Y[We]-_>0){var $l=Math.min(_,Y[We]-_);_-=$l,Zt=De-$l}return Zt/D*100})}function H(){var U=this,D=O[U.a].element,_=O[U.b].element;U.dragging&&lt(f,"onDragEnd",qt)(W()),U.dragging=!1,Ht[Lt]("mouseup",U.stop),Ht[Lt]("touchend",U.stop),Ht[Lt]("touchcancel",U.stop),Ht[Lt]("mousemove",U.move),Ht[Lt]("touchmove",U.move),U.stop=null,U.move=null,D[Lt]("selectstart",qt),D[Lt]("dragstart",qt),_[Lt]("selectstart",qt),_[Lt]("dragstart",qt),D.style.userSelect="",D.style.webkitUserSelect="",D.style.MozUserSelect="",D.style.pointerEvents="",_.style.userSelect="",_.style.webkitUserSelect="",_.style.MozUserSelect="",_.style.pointerEvents="",U.gutter.style.cursor="",U.parent.style.cursor="",Ga.body.style.cursor=""}function R(U){if(!("button"in U&&U.button!==0)){var D=this,_=O[D.a].element,Y=O[D.b].element;D.dragging||lt(f,"onDragStart",qt)(W()),U.preventDefault(),D.dragging=!0,D.move=k.bind(D),D.stop=H.bind(D),Ht[Nt]("mouseup",D.stop),Ht[Nt]("touchend",D.stop),Ht[Nt]("touchcancel",D.stop),Ht[Nt]("mousemove",D.move),Ht[Nt]("touchmove",D.move),_[Nt]("selectstart",qt),_[Nt]("dragstart",qt),Y[Nt]("selectstart",qt),Y[Nt]("dragstart",qt),_.style.userSelect="none",_.style.webkitUserSelect="none",_.style.MozUserSelect="none",_.style.pointerEvents="none",Y.style.userSelect="none",Y.style.webkitUserSelect="none",Y.style.MozUserSelect="none",Y.style.pointerEvents="none",D.gutter.style.cursor=he,D.parent.style.cursor=he,Ga.body.style.cursor=he,oe.call(D),D.dragOffset=T(U)-D.end}}Se=A(Se);var q=[];O=g.map(function(U,D){var _={element:Pd(U),size:Se[D],minSize:Te[D],maxSize:Ke[D],snapOffset:se[D],i:D},Y;if(D>0&&(Y={a:D-1,b:D,dragging:!1,direction:Ae,parent:N},Y[Ct]=cu(ue,D-1===0,!1,Oe),Y[ul]=cu(ue,!1,D===g.length-1,Oe),F==="row-reverse"||F==="column-reverse")){var _e=Y.a;Y.a=Y.b,Y.b=_e}if(D>0){var De=ie(D,Ae,_.element);nt(De,ue,D),Y[qa]=R.bind(Y),De[Nt]("mousedown",Y[qa]),De[Nt]("touchstart",Y[qa]),N.insertBefore(De,_.element),Y.gutter=De}return Ge(_.element,_.size,cu(ue,D===0,D===g.length-1,Oe),D),D>0&&q.push(Y),_});function ce(U){var D=U.i===q.length,_=D?q[U.i-1]:q[U.i];oe.call(_);var Y=D?_.size-U.minSize-_[ul]:U.minSize+_[Ct];B.call(_,Y)}O.forEach(function(U){var D=U.element[_r]()[o];D<U.minSize&&(ee?ce(U):U.minSize=D)});function J(U){var D=A(U);D.forEach(function(_,Y){if(Y>0){var _e=q[Y-1],De=O[_e.a],We=O[_e.b];De.size=D[Y-1],We.size=_,Ge(De.element,De.size,_e[Ct],De.i),Ge(We.element,We.size,_e[ul],We.i)}})}function at(U,D){q.forEach(function(_){if(D!==!0?_.parent.removeChild(_.gutter):(_.gutter[Lt]("mousedown",_[qa]),_.gutter[Lt]("touchstart",_[qa])),U!==!0){var Y=je(o,_.a.size,_[Ct]);Object.keys(Y).forEach(function(_e){O[_.a].element.style[_e]="",O[_.b].element.style[_e]=""})}})}return{setSizes:J,getSizes:W,collapse:function(D){ce(O[D])},destroy:at,parent:N,pairs:q}};function Nr(r,f){var g={};for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&f.indexOf(o)===-1&&(g[o]=r[o]);return g}var qr=function(r){function f(){r.apply(this,arguments)}return r&&(f.__proto__=r),f.prototype=Object.create(r&&r.prototype),f.prototype.constructor=f,f.prototype.componentDidMount=function(){var o=this.props;o.children;var S=o.gutter,x=Nr(o,["children","gutter"]),L=x;L.gutter=function(V,O){var z;return S?z=S(V,O):(z=document.createElement("div"),z.className="gutter gutter-"+O),z.__isSplitGutter=!0,z},this.split=eh(this.parent.children,L)},f.prototype.componentDidUpdate=function(o){var S=this,x=this.props;x.children;var L=x.minSize,V=x.sizes,O=x.collapsed,z=Nr(x,["children","minSize","sizes","collapsed"]),N=z,Q=o.minSize,F=o.sizes,Se=o.collapsed,Me=["maxSize","expandToMin","gutterSize","gutterAlign","snapOffset","dragInterval","direction","cursor"],Te=Me.map(function(ee){return S.props[ee]!==o[ee]}).reduce(function(ee,ue){return ee||ue},!1);if(Array.isArray(L)&&Array.isArray(Q)){var Ee=!1;L.forEach(function(ee,ue){Ee=Ee||ee!==Q[ue]}),Te=Te||Ee}else Array.isArray(L)||Array.isArray(Q)?Te=!0:Te=Te||L!==Q;if(Te)N.minSize=L,N.sizes=V||this.split.getSizes(),this.split.destroy(!0,!0),N.gutter=function(ee,ue,Oe){return Oe.previousSibling},this.split=eh(Array.from(this.parent.children).filter(function(ee){return!ee.__isSplitGutter}),N);else if(V){var Ke=!1;V.forEach(function(ee,ue){Ke=Ke||ee!==F[ue]}),Ke&&this.split.setSizes(this.props.sizes)}Number.isInteger(O)&&(O!==Se||Te)&&this.split.collapse(O)},f.prototype.componentWillUnmount=function(){this.split.destroy(),delete this.split},f.prototype.render=function(){var o=this,S=this.props;S.sizes,S.minSize,S.maxSize,S.expandToMin,S.gutterSize,S.gutterAlign,S.snapOffset,S.dragInterval,S.direction,S.cursor,S.gutter,S.elementStyle,S.gutterStyle,S.onDrag,S.onDragStart,S.onDragEnd,S.collapsed;var x=S.children,L=Nr(S,["sizes","minSize","maxSize","expandToMin","gutterSize","gutterAlign","snapOffset","dragInterval","direction","cursor","gutter","elementStyle","gutterStyle","onDrag","onDragStart","onDragEnd","collapsed","children"]),V=L;return Hl.createElement("div",Object.assign({},{ref:function(O){o.parent=O}},V),x)},f}(Hl.Component);qr.propTypes={sizes:pe.arrayOf(pe.number),minSize:pe.oneOfType([pe.number,pe.arrayOf(pe.number)]),maxSize:pe.oneOfType([pe.number,pe.arrayOf(pe.number)]),expandToMin:pe.bool,gutterSize:pe.number,gutterAlign:pe.string,snapOffset:pe.oneOfType([pe.number,pe.arrayOf(pe.number)]),dragInterval:pe.number,direction:pe.string,cursor:pe.string,gutter:pe.func,elementStyle:pe.func,gutterStyle:pe.func,onDrag:pe.func,onDragStart:pe.func,onDragEnd:pe.func,collapsed:pe.number,children:pe.arrayOf(pe.element)};qr.defaultProps={sizes:void 0,minSize:void 0,maxSize:void 0,expandToMin:void 0,gutterSize:void 0,gutterAlign:void 0,snapOffset:void 0,dragInterval:void 0,direction:void 0,cursor:void 0,gutter:void 0,elementStyle:void 0,gutterStyle:void 0,onDrag:void 0,onDragStart:void 0,onDragEnd:void 0,collapsed:void 0,children:void 0};function ty(){const[r,f]=I.useState(""),[g,o]=I.useState(r),[S,x]=I.useState(0),L=["YOU DID GREAT!","I'm proud of you, keep it up!","This is great work","A+++","1000% on this!","Super floober fantastic"],V=["Oh, not quite?","Hey, let's give that one another try","Let's look over that again?","Not quite, but I'm glad you're trying"],O=()=>{if(Object.keys(Jd).includes(S.toString())){const z=S.toString(),N=r.trim().replace(/\s+/g," "),Q=Jd[z].some(Se=>N===Se.trim().replace(/\s+/g," "));let F="Default easter egg text";Q?(F=L[Math.floor(Math.random()*L.length)],alert(F)):(F=V[Math.floor(Math.random()*V.length)],alert(F))}};return Ie.jsx("div",{className:"h-screen bg-gray-900 text-white",children:Ie.jsxs(qr,{className:"flex h-full",sizes:[25,50,25],minSize:100,gutterSize:6,children:[Ie.jsxs("div",{className:"p-4  border-r border-gray-700",children:[Ie.jsxs("div",{className:"absolute bottom-4 right-4 flex space-x-2",children:[Ie.jsx("button",{onClick:()=>x(Math.max(0,S-1)),className:"bg-yellow-400 text-black px-4 py-1 rounded",disabled:S===0,children:"Back"}),Ie.jsx("button",{onClick:()=>x(Math.min(S+1,100)),className:"bg-yellow-400 text-black px-4 py-1 rounded",disabled:S===Ur.length-1,children:"Next"})]}),Ie.jsxs("h2",{className:"font-bold text-lg",children:["Lesson ",S+1]}),Ie.jsx("iframe",{title:"live preview",srcDoc:Ur[Math.min(Math.max(0,S),Ur.length-1)],className:"w-full h-full bg-white"})]}),Ie.jsxs("div",{className:"border-b border-gray-700",children:[Ie.jsx(Qp,{height:"90%",language:"html",theme:"vs-dark",value:r,onChange:z=>f(z||"")}),Ie.jsx("div",{className:"p-2",children:Ie.jsx("button",{onClick:()=>o(r),className:"bg-green-50 hover:bg-green-600 p-2",children:"Run"})})]}),Ie.jsxs("div",{className:"w-1/4 p-2",children:[Ie.jsx("iframe",{title:"live preview",srcDoc:g,className:"w-full h-full bg-white"}),Ie.jsx("button",{onClick:O,className:"mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded mt-2  ",children:"Check Answer"})]})]})})}Ym.createRoot(document.getElementById("root")).render(Ie.jsx(I.StrictMode,{children:Ie.jsx(ty,{})}));
