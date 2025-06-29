(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const S of document.querySelectorAll('link[rel="modulepreload"]'))f(S);new MutationObserver(S=>{for(const H of S)if(H.type==="childList")for(const L of H.addedNodes)L.tagName==="LINK"&&L.rel==="modulepreload"&&f(L)}).observe(document,{childList:!0,subtree:!0});function g(S){const H={};return S.integrity&&(H.integrity=S.integrity),S.referrerPolicy&&(H.referrerPolicy=S.referrerPolicy),S.crossOrigin==="use-credentials"?H.credentials="include":S.crossOrigin==="anonymous"?H.credentials="omit":H.credentials="same-origin",H}function f(S){if(S.ep)return;S.ep=!0;const H=g(S);fetch(S.href,H)}})();function th(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Tr={exports:{}},La={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bd;function _m(){if(Bd)return La;Bd=1;var r=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function g(f,S,H){var L=null;if(H!==void 0&&(L=""+H),S.key!==void 0&&(L=""+S.key),"key"in S){H={};for(var Z in S)Z!=="key"&&(H[Z]=S[Z])}else H=S;return S=H.ref,{$$typeof:r,type:f,key:L,ref:S!==void 0?S:null,props:H}}return La.Fragment=s,La.jsx=g,La.jsxs=g,La}var wd;function xm(){return wd||(wd=1,Tr.exports=_m()),Tr.exports}var Pe=xm(),zr={exports:{}},$={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nd;function Bm(){if(Nd)return $;Nd=1;var r=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),g=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),H=Symbol.for("react.consumer"),L=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),z=Symbol.for("react.memo"),N=Symbol.for("react.lazy"),K=Symbol.iterator;function F(d){return d===null||typeof d!="object"?null:(d=K&&d[K]||d["@@iterator"],typeof d=="function"?d:null)}var Se={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Oe=Object.assign,Te={};function Ee(d,A,_){this.props=d,this.context=A,this.refs=Te,this.updater=_||Se}Ee.prototype.isReactComponent={},Ee.prototype.setState=function(d,A){if(typeof d!="object"&&typeof d!="function"&&d!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,d,A,"setState")},Ee.prototype.forceUpdate=function(d){this.updater.enqueueForceUpdate(this,d,"forceUpdate")};function ke(){}ke.prototype=Ee.prototype;function ee(d,A,_){this.props=d,this.context=A,this.refs=Te,this.updater=_||Se}var ue=ee.prototype=new ke;ue.constructor=ee,Oe(ue,Ee.prototype),ue.isPureReactComponent=!0;var De=Array.isArray,V={H:null,A:null,T:null,S:null,V:null},oe=Object.prototype.hasOwnProperty;function le(d,A,_,x,q,ce){return _=ce.ref,{$$typeof:r,type:d,key:A,ref:_!==void 0?_:null,props:ce}}function Ae(d,A){return le(d.type,A,void 0,void 0,void 0,d.props)}function he(d){return typeof d=="object"&&d!==null&&d.$$typeof===r}function ie(d){var A={"=":"=0",":":"=2"};return"$"+d.replace(/[=:]/g,function(_){return A[_]})}var Ye=/\/+/g;function Re(d,A){return typeof d=="object"&&d!==null&&d.key!=null?ie(""+d.key):A.toString(36)}function Ve(){}function nt(d){switch(d.status){case"fulfilled":return d.value;case"rejected":throw d.reason;default:switch(typeof d.status=="string"?d.then(Ve,Ve):(d.status="pending",d.then(function(A){d.status==="pending"&&(d.status="fulfilled",d.value=A)},function(A){d.status==="pending"&&(d.status="rejected",d.reason=A)})),d.status){case"fulfilled":return d.value;case"rejected":throw d.reason}}throw d}function J(d,A,_,x,q){var ce=typeof d;(ce==="undefined"||ce==="boolean")&&(d=null);var W=!1;if(d===null)W=!0;else switch(ce){case"bigint":case"string":case"number":W=!0;break;case"object":switch(d.$$typeof){case r:case s:W=!0;break;case N:return W=d._init,J(W(d._payload),A,_,x,q)}}if(W)return q=q(d),W=x===""?"."+Re(d,0):x,De(q)?(_="",W!=null&&(_=W.replace(Ye,"$&/")+"/"),J(q,A,_,"",function(U){return U})):q!=null&&(he(q)&&(q=Ae(q,_+(q.key==null||d&&d.key===q.key?"":(""+q.key).replace(Ye,"$&/")+"/")+W)),A.push(q)),1;W=0;var at=x===""?".":x+":";if(De(d))for(var R=0;R<d.length;R++)x=d[R],ce=at+Re(x,R),W+=J(x,A,_,ce,q);else if(R=F(d),typeof R=="function")for(d=R.call(d),R=0;!(x=d.next()).done;)x=x.value,ce=at+Re(x,R++),W+=J(x,A,_,ce,q);else if(ce==="object"){if(typeof d.then=="function")return J(nt(d),A,_,x,q);throw A=String(d),Error("Objects are not valid as a React child (found: "+(A==="[object Object]"?"object with keys {"+Object.keys(d).join(", ")+"}":A)+"). If you meant to render a collection of children, use an array instead.")}return W}function T(d,A,_){if(d==null)return d;var x=[],q=0;return J(d,x,"","",function(ce){return A.call(_,ce,q++)}),x}function B(d){if(d._status===-1){var A=d._result;A=A(),A.then(function(_){(d._status===0||d._status===-1)&&(d._status=1,d._result=_)},function(_){(d._status===0||d._status===-1)&&(d._status=2,d._result=_)}),d._status===-1&&(d._status=0,d._result=A)}if(d._status===1)return d._result.default;throw d._result}var G=typeof reportError=="function"?reportError:function(d){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var A=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof d=="object"&&d!==null&&typeof d.message=="string"?String(d.message):String(d),error:d});if(!window.dispatchEvent(A))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",d);return}console.error(d)};function fe(){}return $.Children={map:T,forEach:function(d,A,_){T(d,function(){A.apply(this,arguments)},_)},count:function(d){var A=0;return T(d,function(){A++}),A},toArray:function(d){return T(d,function(A){return A})||[]},only:function(d){if(!he(d))throw Error("React.Children.only expected to receive a single React element child.");return d}},$.Component=Ee,$.Fragment=g,$.Profiler=S,$.PureComponent=ee,$.StrictMode=f,$.Suspense=D,$.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=V,$.__COMPILER_RUNTIME={__proto__:null,c:function(d){return V.H.useMemoCache(d)}},$.cache=function(d){return function(){return d.apply(null,arguments)}},$.cloneElement=function(d,A,_){if(d==null)throw Error("The argument must be a React element, but you passed "+d+".");var x=Oe({},d.props),q=d.key,ce=void 0;if(A!=null)for(W in A.ref!==void 0&&(ce=void 0),A.key!==void 0&&(q=""+A.key),A)!oe.call(A,W)||W==="key"||W==="__self"||W==="__source"||W==="ref"&&A.ref===void 0||(x[W]=A[W]);var W=arguments.length-2;if(W===1)x.children=_;else if(1<W){for(var at=Array(W),R=0;R<W;R++)at[R]=arguments[R+2];x.children=at}return le(d.type,q,void 0,void 0,ce,x)},$.createContext=function(d){return d={$$typeof:L,_currentValue:d,_currentValue2:d,_threadCount:0,Provider:null,Consumer:null},d.Provider=d,d.Consumer={$$typeof:H,_context:d},d},$.createElement=function(d,A,_){var x,q={},ce=null;if(A!=null)for(x in A.key!==void 0&&(ce=""+A.key),A)oe.call(A,x)&&x!=="key"&&x!=="__self"&&x!=="__source"&&(q[x]=A[x]);var W=arguments.length-2;if(W===1)q.children=_;else if(1<W){for(var at=Array(W),R=0;R<W;R++)at[R]=arguments[R+2];q.children=at}if(d&&d.defaultProps)for(x in W=d.defaultProps,W)q[x]===void 0&&(q[x]=W[x]);return le(d,ce,void 0,void 0,null,q)},$.createRef=function(){return{current:null}},$.forwardRef=function(d){return{$$typeof:Z,render:d}},$.isValidElement=he,$.lazy=function(d){return{$$typeof:N,_payload:{_status:-1,_result:d},_init:B}},$.memo=function(d,A){return{$$typeof:z,type:d,compare:A===void 0?null:A}},$.startTransition=function(d){var A=V.T,_={};V.T=_;try{var x=d(),q=V.S;q!==null&&q(_,x),typeof x=="object"&&x!==null&&typeof x.then=="function"&&x.then(fe,G)}catch(ce){G(ce)}finally{V.T=A}},$.unstable_useCacheRefresh=function(){return V.H.useCacheRefresh()},$.use=function(d){return V.H.use(d)},$.useActionState=function(d,A,_){return V.H.useActionState(d,A,_)},$.useCallback=function(d,A){return V.H.useCallback(d,A)},$.useContext=function(d){return V.H.useContext(d)},$.useDebugValue=function(){},$.useDeferredValue=function(d,A){return V.H.useDeferredValue(d,A)},$.useEffect=function(d,A,_){var x=V.H;if(typeof _=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return x.useEffect(d,A)},$.useId=function(){return V.H.useId()},$.useImperativeHandle=function(d,A,_){return V.H.useImperativeHandle(d,A,_)},$.useInsertionEffect=function(d,A){return V.H.useInsertionEffect(d,A)},$.useLayoutEffect=function(d,A){return V.H.useLayoutEffect(d,A)},$.useMemo=function(d,A){return V.H.useMemo(d,A)},$.useOptimistic=function(d,A){return V.H.useOptimistic(d,A)},$.useReducer=function(d,A,_){return V.H.useReducer(d,A,_)},$.useRef=function(d){return V.H.useRef(d)},$.useState=function(d){return V.H.useState(d)},$.useSyncExternalStore=function(d,A,_){return V.H.useSyncExternalStore(d,A,_)},$.useTransition=function(){return V.H.useTransition()},$.version="19.1.0",$}var Ld;function Lr(){return Ld||(Ld=1,zr.exports=Bm()),zr.exports}var P=Lr();const _l=th(P);var Er={exports:{}},Ca={},Ar={exports:{}},Mr={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cd;function wm(){return Cd||(Cd=1,function(r){function s(T,B){var G=T.length;T.push(B);e:for(;0<G;){var fe=G-1>>>1,d=T[fe];if(0<S(d,B))T[fe]=B,T[G]=d,G=fe;else break e}}function g(T){return T.length===0?null:T[0]}function f(T){if(T.length===0)return null;var B=T[0],G=T.pop();if(G!==B){T[0]=G;e:for(var fe=0,d=T.length,A=d>>>1;fe<A;){var _=2*(fe+1)-1,x=T[_],q=_+1,ce=T[q];if(0>S(x,G))q<d&&0>S(ce,x)?(T[fe]=ce,T[q]=G,fe=q):(T[fe]=x,T[_]=G,fe=_);else if(q<d&&0>S(ce,G))T[fe]=ce,T[q]=G,fe=q;else break e}}return B}function S(T,B){var G=T.sortIndex-B.sortIndex;return G!==0?G:T.id-B.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var H=performance;r.unstable_now=function(){return H.now()}}else{var L=Date,Z=L.now();r.unstable_now=function(){return L.now()-Z}}var D=[],z=[],N=1,K=null,F=3,Se=!1,Oe=!1,Te=!1,Ee=!1,ke=typeof setTimeout=="function"?setTimeout:null,ee=typeof clearTimeout=="function"?clearTimeout:null,ue=typeof setImmediate<"u"?setImmediate:null;function De(T){for(var B=g(z);B!==null;){if(B.callback===null)f(z);else if(B.startTime<=T)f(z),B.sortIndex=B.expirationTime,s(D,B);else break;B=g(z)}}function V(T){if(Te=!1,De(T),!Oe)if(g(D)!==null)Oe=!0,oe||(oe=!0,Re());else{var B=g(z);B!==null&&J(V,B.startTime-T)}}var oe=!1,le=-1,Ae=5,he=-1;function ie(){return Ee?!0:!(r.unstable_now()-he<Ae)}function Ye(){if(Ee=!1,oe){var T=r.unstable_now();he=T;var B=!0;try{e:{Oe=!1,Te&&(Te=!1,ee(le),le=-1),Se=!0;var G=F;try{t:{for(De(T),K=g(D);K!==null&&!(K.expirationTime>T&&ie());){var fe=K.callback;if(typeof fe=="function"){K.callback=null,F=K.priorityLevel;var d=fe(K.expirationTime<=T);if(T=r.unstable_now(),typeof d=="function"){K.callback=d,De(T),B=!0;break t}K===g(D)&&f(D),De(T)}else f(D);K=g(D)}if(K!==null)B=!0;else{var A=g(z);A!==null&&J(V,A.startTime-T),B=!1}}break e}finally{K=null,F=G,Se=!1}B=void 0}}finally{B?Re():oe=!1}}}var Re;if(typeof ue=="function")Re=function(){ue(Ye)};else if(typeof MessageChannel<"u"){var Ve=new MessageChannel,nt=Ve.port2;Ve.port1.onmessage=Ye,Re=function(){nt.postMessage(null)}}else Re=function(){ke(Ye,0)};function J(T,B){le=ke(function(){T(r.unstable_now())},B)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(T){T.callback=null},r.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ae=0<T?Math.floor(1e3/T):5},r.unstable_getCurrentPriorityLevel=function(){return F},r.unstable_next=function(T){switch(F){case 1:case 2:case 3:var B=3;break;default:B=F}var G=F;F=B;try{return T()}finally{F=G}},r.unstable_requestPaint=function(){Ee=!0},r.unstable_runWithPriority=function(T,B){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var G=F;F=T;try{return B()}finally{F=G}},r.unstable_scheduleCallback=function(T,B,G){var fe=r.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?fe+G:fe):G=fe,T){case 1:var d=-1;break;case 2:d=250;break;case 5:d=1073741823;break;case 4:d=1e4;break;default:d=5e3}return d=G+d,T={id:N++,callback:B,priorityLevel:T,startTime:G,expirationTime:d,sortIndex:-1},G>fe?(T.sortIndex=G,s(z,T),g(D)===null&&T===g(z)&&(Te?(ee(le),le=-1):Te=!0,J(V,G-fe))):(T.sortIndex=d,s(D,T),Oe||Se||(Oe=!0,oe||(oe=!0,Re()))),T},r.unstable_shouldYield=ie,r.unstable_wrapCallback=function(T){var B=F;return function(){var G=F;F=B;try{return T.apply(this,arguments)}finally{F=G}}}}(Mr)),Mr}var qd;function Nm(){return qd||(qd=1,Ar.exports=wm()),Ar.exports}var Or={exports:{}},tt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yd;function Lm(){if(Yd)return tt;Yd=1;var r=Lr();function s(D){var z="https://react.dev/errors/"+D;if(1<arguments.length){z+="?args[]="+encodeURIComponent(arguments[1]);for(var N=2;N<arguments.length;N++)z+="&args[]="+encodeURIComponent(arguments[N])}return"Minified React error #"+D+"; visit "+z+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function g(){}var f={d:{f:g,r:function(){throw Error(s(522))},D:g,C:g,L:g,m:g,X:g,S:g,M:g},p:0,findDOMNode:null},S=Symbol.for("react.portal");function H(D,z,N){var K=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:S,key:K==null?null:""+K,children:D,containerInfo:z,implementation:N}}var L=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Z(D,z){if(D==="font")return"";if(typeof z=="string")return z==="use-credentials"?z:""}return tt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=f,tt.createPortal=function(D,z){var N=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!z||z.nodeType!==1&&z.nodeType!==9&&z.nodeType!==11)throw Error(s(299));return H(D,z,null,N)},tt.flushSync=function(D){var z=L.T,N=f.p;try{if(L.T=null,f.p=2,D)return D()}finally{L.T=z,f.p=N,f.d.f()}},tt.preconnect=function(D,z){typeof D=="string"&&(z?(z=z.crossOrigin,z=typeof z=="string"?z==="use-credentials"?z:"":void 0):z=null,f.d.C(D,z))},tt.prefetchDNS=function(D){typeof D=="string"&&f.d.D(D)},tt.preinit=function(D,z){if(typeof D=="string"&&z&&typeof z.as=="string"){var N=z.as,K=Z(N,z.crossOrigin),F=typeof z.integrity=="string"?z.integrity:void 0,Se=typeof z.fetchPriority=="string"?z.fetchPriority:void 0;N==="style"?f.d.S(D,typeof z.precedence=="string"?z.precedence:void 0,{crossOrigin:K,integrity:F,fetchPriority:Se}):N==="script"&&f.d.X(D,{crossOrigin:K,integrity:F,fetchPriority:Se,nonce:typeof z.nonce=="string"?z.nonce:void 0})}},tt.preinitModule=function(D,z){if(typeof D=="string")if(typeof z=="object"&&z!==null){if(z.as==null||z.as==="script"){var N=Z(z.as,z.crossOrigin);f.d.M(D,{crossOrigin:N,integrity:typeof z.integrity=="string"?z.integrity:void 0,nonce:typeof z.nonce=="string"?z.nonce:void 0})}}else z==null&&f.d.M(D)},tt.preload=function(D,z){if(typeof D=="string"&&typeof z=="object"&&z!==null&&typeof z.as=="string"){var N=z.as,K=Z(N,z.crossOrigin);f.d.L(D,N,{crossOrigin:K,integrity:typeof z.integrity=="string"?z.integrity:void 0,nonce:typeof z.nonce=="string"?z.nonce:void 0,type:typeof z.type=="string"?z.type:void 0,fetchPriority:typeof z.fetchPriority=="string"?z.fetchPriority:void 0,referrerPolicy:typeof z.referrerPolicy=="string"?z.referrerPolicy:void 0,imageSrcSet:typeof z.imageSrcSet=="string"?z.imageSrcSet:void 0,imageSizes:typeof z.imageSizes=="string"?z.imageSizes:void 0,media:typeof z.media=="string"?z.media:void 0})}},tt.preloadModule=function(D,z){if(typeof D=="string")if(z){var N=Z(z.as,z.crossOrigin);f.d.m(D,{as:typeof z.as=="string"&&z.as!=="script"?z.as:void 0,crossOrigin:N,integrity:typeof z.integrity=="string"?z.integrity:void 0})}else f.d.m(D)},tt.requestFormReset=function(D){f.d.r(D)},tt.unstable_batchedUpdates=function(D,z){return D(z)},tt.useFormState=function(D,z,N){return L.H.useFormState(D,z,N)},tt.useFormStatus=function(){return L.H.useHostTransitionStatus()},tt.version="19.1.0",tt}var jd;function Cm(){if(jd)return Or.exports;jd=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(s){console.error(s)}}return r(),Or.exports=Lm(),Or.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gd;function qm(){if(Gd)return Ca;Gd=1;var r=Nm(),s=Lr(),g=Cm();function f(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)t+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function S(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function H(e){var t=e,l=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(l=t.return),e=t.return;while(e)}return t.tag===3?l:null}function L(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Z(e){if(H(e)!==e)throw Error(f(188))}function D(e){var t=e.alternate;if(!t){if(t=H(e),t===null)throw Error(f(188));return t!==e?null:e}for(var l=e,n=t;;){var a=l.return;if(a===null)break;var i=a.alternate;if(i===null){if(n=a.return,n!==null){l=n;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===l)return Z(a),e;if(i===n)return Z(a),t;i=i.sibling}throw Error(f(188))}if(l.return!==n.return)l=a,n=i;else{for(var u=!1,c=a.child;c;){if(c===l){u=!0,l=a,n=i;break}if(c===n){u=!0,n=a,l=i;break}c=c.sibling}if(!u){for(c=i.child;c;){if(c===l){u=!0,l=i,n=a;break}if(c===n){u=!0,n=i,l=a;break}c=c.sibling}if(!u)throw Error(f(189))}}if(l.alternate!==n)throw Error(f(190))}if(l.tag!==3)throw Error(f(188));return l.stateNode.current===l?e:t}function z(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=z(e),t!==null)return t;e=e.sibling}return null}var N=Object.assign,K=Symbol.for("react.element"),F=Symbol.for("react.transitional.element"),Se=Symbol.for("react.portal"),Oe=Symbol.for("react.fragment"),Te=Symbol.for("react.strict_mode"),Ee=Symbol.for("react.profiler"),ke=Symbol.for("react.provider"),ee=Symbol.for("react.consumer"),ue=Symbol.for("react.context"),De=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),oe=Symbol.for("react.suspense_list"),le=Symbol.for("react.memo"),Ae=Symbol.for("react.lazy"),he=Symbol.for("react.activity"),ie=Symbol.for("react.memo_cache_sentinel"),Ye=Symbol.iterator;function Re(e){return e===null||typeof e!="object"?null:(e=Ye&&e[Ye]||e["@@iterator"],typeof e=="function"?e:null)}var Ve=Symbol.for("react.client.reference");function nt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ve?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Oe:return"Fragment";case Ee:return"Profiler";case Te:return"StrictMode";case V:return"Suspense";case oe:return"SuspenseList";case he:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Se:return"Portal";case ue:return(e.displayName||"Context")+".Provider";case ee:return(e._context.displayName||"Context")+".Consumer";case De:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case le:return t=e.displayName||null,t!==null?t:nt(e.type)||"Memo";case Ae:t=e._payload,e=e._init;try{return nt(e(t))}catch{}}return null}var J=Array.isArray,T=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=g.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G={pending:!1,data:null,method:null,action:null},fe=[],d=-1;function A(e){return{current:e}}function _(e){0>d||(e.current=fe[d],fe[d]=null,d--)}function x(e,t){d++,fe[d]=e.current,e.current=t}var q=A(null),ce=A(null),W=A(null),at=A(null);function R(e,t){switch(x(W,t),x(ce,e),x(q,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?cd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=cd(t),e=rd(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}_(q),x(q,e)}function U(){_(q),_(ce),_(W)}function w(e){e.memoizedState!==null&&x(at,e);var t=q.current,l=rd(t,e.type);t!==l&&(x(ce,e),x(q,l))}function j(e){ce.current===e&&(_(q),_(ce)),at.current===e&&(_(at),_a._currentValue=G)}var we=Object.prototype.hasOwnProperty,Ue=r.unstable_scheduleCallback,Je=r.unstable_cancelCallback,Qt=r.unstable_shouldYield,$l=r.unstable_requestPaint,it=r.unstable_now,sh=r.unstable_getCurrentPriorityLevel,Yr=r.unstable_ImmediatePriority,jr=r.unstable_UserBlockingPriority,Qa=r.unstable_NormalPriority,dh=r.unstable_LowPriority,Gr=r.unstable_IdlePriority,hh=r.log,gh=r.unstable_setDisableYieldValue,Yn=null,dt=null;function cl(e){if(typeof hh=="function"&&gh(e),dt&&typeof dt.setStrictMode=="function")try{dt.setStrictMode(Yn,e)}catch{}}var ht=Math.clz32?Math.clz32:yh,mh=Math.log,vh=Math.LN2;function yh(e){return e>>>=0,e===0?32:31-(mh(e)/vh|0)|0}var Xa=256,Ka=4194304;function Bl(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ka(e,t,l){var n=e.pendingLanes;if(n===0)return 0;var a=0,i=e.suspendedLanes,u=e.pingedLanes;e=e.warmLanes;var c=n&134217727;return c!==0?(n=c&~i,n!==0?a=Bl(n):(u&=c,u!==0?a=Bl(u):l||(l=c&~e,l!==0&&(a=Bl(l))))):(c=n&~i,c!==0?a=Bl(c):u!==0?a=Bl(u):l||(l=n&~e,l!==0&&(a=Bl(l)))),a===0?0:t!==0&&t!==a&&(t&i)===0&&(i=a&-a,l=t&-t,i>=l||i===32&&(l&4194048)!==0)?t:a}function jn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function bh(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vr(){var e=Xa;return Xa<<=1,(Xa&4194048)===0&&(Xa=256),e}function Zr(){var e=Ka;return Ka<<=1,(Ka&62914560)===0&&(Ka=4194304),e}function ou(e){for(var t=[],l=0;31>l;l++)t.push(e);return t}function Gn(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ph(e,t,l,n,a,i){var u=e.pendingLanes;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=l,e.entangledLanes&=l,e.errorRecoveryDisabledLanes&=l,e.shellSuspendCounter=0;var c=e.entanglements,o=e.expirationTimes,y=e.hiddenUpdates;for(l=u&~l;0<l;){var E=31-ht(l),O=1<<E;c[E]=0,o[E]=-1;var b=y[E];if(b!==null)for(y[E]=null,E=0;E<b.length;E++){var p=b[E];p!==null&&(p.lane&=-536870913)}l&=~O}n!==0&&Qr(e,n,0),i!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=i&~(u&~t))}function Qr(e,t,l){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-ht(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|l&4194090}function Xr(e,t){var l=e.entangledLanes|=t;for(e=e.entanglements;l;){var n=31-ht(l),a=1<<n;a&t|e[n]&t&&(e[n]|=t),l&=~a}}function su(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function du(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Kr(){var e=B.p;return e!==0?e:(e=window.event,e===void 0?32:Dd(e.type))}function Sh(e,t){var l=B.p;try{return B.p=e,t()}finally{B.p=l}}var rl=Math.random().toString(36).slice(2),Ie="__reactFiber$"+rl,ct="__reactProps$"+rl,Pl="__reactContainer$"+rl,hu="__reactEvents$"+rl,Th="__reactListeners$"+rl,zh="__reactHandles$"+rl,kr="__reactResources$"+rl,Vn="__reactMarker$"+rl;function gu(e){delete e[Ie],delete e[ct],delete e[hu],delete e[Th],delete e[zh]}function Il(e){var t=e[Ie];if(t)return t;for(var l=e.parentNode;l;){if(t=l[Pl]||l[Ie]){if(l=t.alternate,t.child!==null||l!==null&&l.child!==null)for(e=dd(e);e!==null;){if(l=e[Ie])return l;e=dd(e)}return t}e=l,l=e.parentNode}return null}function en(e){if(e=e[Ie]||e[Pl]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Zn(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(f(33))}function tn(e){var t=e[kr];return t||(t=e[kr]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ze(e){e[Vn]=!0}var Jr=new Set,Wr={};function wl(e,t){ln(e,t),ln(e+"Capture",t)}function ln(e,t){for(Wr[e]=t,e=0;e<t.length;e++)Jr.add(t[e])}var Eh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Fr={},$r={};function Ah(e){return we.call($r,e)?!0:we.call(Fr,e)?!1:Eh.test(e)?$r[e]=!0:(Fr[e]=!0,!1)}function Ja(e,t,l){if(Ah(t))if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+l)}}function Wa(e,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+l)}}function Xt(e,t,l,n){if(n===null)e.removeAttribute(l);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(l);return}e.setAttributeNS(t,l,""+n)}}var mu,Pr;function nn(e){if(mu===void 0)try{throw Error()}catch(l){var t=l.stack.trim().match(/\n( *(at )?)/);mu=t&&t[1]||"",Pr=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+mu+e+Pr}var vu=!1;function yu(e,t){if(!e||vu)return"";vu=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var O=function(){throw Error()};if(Object.defineProperty(O.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(O,[])}catch(p){var b=p}Reflect.construct(e,[],O)}else{try{O.call()}catch(p){b=p}e.call(O.prototype)}}else{try{throw Error()}catch(p){b=p}(O=e())&&typeof O.catch=="function"&&O.catch(function(){})}}catch(p){if(p&&b&&typeof p.stack=="string")return[p.stack,b.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=n.DetermineComponentFrameRoot(),u=i[0],c=i[1];if(u&&c){var o=u.split(`
`),y=c.split(`
`);for(a=n=0;n<o.length&&!o[n].includes("DetermineComponentFrameRoot");)n++;for(;a<y.length&&!y[a].includes("DetermineComponentFrameRoot");)a++;if(n===o.length||a===y.length)for(n=o.length-1,a=y.length-1;1<=n&&0<=a&&o[n]!==y[a];)a--;for(;1<=n&&0<=a;n--,a--)if(o[n]!==y[a]){if(n!==1||a!==1)do if(n--,a--,0>a||o[n]!==y[a]){var E=`
`+o[n].replace(" at new "," at ");return e.displayName&&E.includes("<anonymous>")&&(E=E.replace("<anonymous>",e.displayName)),E}while(1<=n&&0<=a);break}}}finally{vu=!1,Error.prepareStackTrace=l}return(l=e?e.displayName||e.name:"")?nn(l):""}function Mh(e){switch(e.tag){case 26:case 27:case 5:return nn(e.type);case 16:return nn("Lazy");case 13:return nn("Suspense");case 19:return nn("SuspenseList");case 0:case 15:return yu(e.type,!1);case 11:return yu(e.type.render,!1);case 1:return yu(e.type,!0);case 31:return nn("Activity");default:return""}}function Ir(e){try{var t="";do t+=Mh(e),e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}function zt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ef(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Oh(e){var t=ef(e)?"checked":"value",l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var a=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(u){n=""+u,i.call(this,u)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return n},setValue:function(u){n=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Fa(e){e._valueTracker||(e._valueTracker=Oh(e))}function tf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var l=t.getValue(),n="";return e&&(n=ef(e)?e.checked?"true":"false":e.value),e=n,e!==l?(t.setValue(e),!0):!1}function $a(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Dh=/[\n"\\]/g;function Et(e){return e.replace(Dh,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function bu(e,t,l,n,a,i,u,c){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),t!=null?u==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+zt(t)):e.value!==""+zt(t)&&(e.value=""+zt(t)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),t!=null?pu(e,u,zt(t)):l!=null?pu(e,u,zt(l)):n!=null&&e.removeAttribute("value"),a==null&&i!=null&&(e.defaultChecked=!!i),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.name=""+zt(c):e.removeAttribute("name")}function lf(e,t,l,n,a,i,u,c){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||l!=null){if(!(i!=="submit"&&i!=="reset"||t!=null))return;l=l!=null?""+zt(l):"",t=t!=null?""+zt(t):l,c||t===e.value||(e.value=t),e.defaultValue=t}n=n??a,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=c?e.checked:!!n,e.defaultChecked=!!n,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u)}function pu(e,t,l){t==="number"&&$a(e.ownerDocument)===e||e.defaultValue===""+l||(e.defaultValue=""+l)}function an(e,t,l,n){if(e=e.options,t){t={};for(var a=0;a<l.length;a++)t["$"+l[a]]=!0;for(l=0;l<e.length;l++)a=t.hasOwnProperty("$"+e[l].value),e[l].selected!==a&&(e[l].selected=a),a&&n&&(e[l].defaultSelected=!0)}else{for(l=""+zt(l),t=null,a=0;a<e.length;a++){if(e[a].value===l){e[a].selected=!0,n&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function nf(e,t,l){if(t!=null&&(t=""+zt(t),t!==e.value&&(e.value=t),l==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=l!=null?""+zt(l):""}function af(e,t,l,n){if(t==null){if(n!=null){if(l!=null)throw Error(f(92));if(J(n)){if(1<n.length)throw Error(f(93));n=n[0]}l=n}l==null&&(l=""),t=l}l=zt(t),e.defaultValue=l,n=e.textContent,n===l&&n!==""&&n!==null&&(e.value=n)}function un(e,t){if(t){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=t;return}}e.textContent=t}var Uh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function uf(e,t,l){var n=t.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,l):typeof l!="number"||l===0||Uh.has(t)?t==="float"?e.cssFloat=l:e[t]=(""+l).trim():e[t]=l+"px"}function cf(e,t,l){if(t!=null&&typeof t!="object")throw Error(f(62));if(e=e.style,l!=null){for(var n in l)!l.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var a in t)n=t[a],t.hasOwnProperty(a)&&l[a]!==n&&uf(e,a,n)}else for(var i in t)t.hasOwnProperty(i)&&uf(e,i,t[i])}function Su(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Rh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Pa(e){return Rh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Tu=null;function zu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var cn=null,rn=null;function rf(e){var t=en(e);if(t&&(e=t.stateNode)){var l=e[ct]||null;e:switch(e=t.stateNode,t.type){case"input":if(bu(e,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),t=l.name,l.type==="radio"&&t!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+Et(""+t)+'"][type="radio"]'),t=0;t<l.length;t++){var n=l[t];if(n!==e&&n.form===e.form){var a=n[ct]||null;if(!a)throw Error(f(90));bu(n,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<l.length;t++)n=l[t],n.form===e.form&&tf(n)}break e;case"textarea":nf(e,l.value,l.defaultValue);break e;case"select":t=l.value,t!=null&&an(e,!!l.multiple,t,!1)}}}var Eu=!1;function ff(e,t,l){if(Eu)return e(t,l);Eu=!0;try{var n=e(t);return n}finally{if(Eu=!1,(cn!==null||rn!==null)&&(Ci(),cn&&(t=cn,e=rn,rn=cn=null,rf(t),e)))for(t=0;t<e.length;t++)rf(e[t])}}function Qn(e,t){var l=e.stateNode;if(l===null)return null;var n=l[ct]||null;if(n===null)return null;l=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(f(231,t,typeof l));return l}var Kt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Au=!1;if(Kt)try{var Xn={};Object.defineProperty(Xn,"passive",{get:function(){Au=!0}}),window.addEventListener("test",Xn,Xn),window.removeEventListener("test",Xn,Xn)}catch{Au=!1}var fl=null,Mu=null,Ia=null;function of(){if(Ia)return Ia;var e,t=Mu,l=t.length,n,a="value"in fl?fl.value:fl.textContent,i=a.length;for(e=0;e<l&&t[e]===a[e];e++);var u=l-e;for(n=1;n<=u&&t[l-n]===a[i-n];n++);return Ia=a.slice(e,1<n?1-n:void 0)}function ei(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ti(){return!0}function sf(){return!1}function rt(e){function t(l,n,a,i,u){this._reactName=l,this._targetInst=a,this.type=n,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(l=e[c],this[c]=l?l(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ti:sf,this.isPropagationStopped=sf,this}return N(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=ti)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=ti)},persist:function(){},isPersistent:ti}),t}var Nl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},li=rt(Nl),Kn=N({},Nl,{view:0,detail:0}),_h=rt(Kn),Ou,Du,kn,ni=N({},Kn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==kn&&(kn&&e.type==="mousemove"?(Ou=e.screenX-kn.screenX,Du=e.screenY-kn.screenY):Du=Ou=0,kn=e),Ou)},movementY:function(e){return"movementY"in e?e.movementY:Du}}),df=rt(ni),xh=N({},ni,{dataTransfer:0}),Bh=rt(xh),wh=N({},Kn,{relatedTarget:0}),Uu=rt(wh),Nh=N({},Nl,{animationName:0,elapsedTime:0,pseudoElement:0}),Lh=rt(Nh),Ch=N({},Nl,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),qh=rt(Ch),Yh=N({},Nl,{data:0}),hf=rt(Yh),jh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Vh[e])?!!t[e]:!1}function Hu(){return Zh}var Qh=N({},Kn,{key:function(e){if(e.key){var t=jh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ei(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Gh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hu,charCode:function(e){return e.type==="keypress"?ei(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ei(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Xh=rt(Qh),Kh=N({},ni,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gf=rt(Kh),kh=N({},Kn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hu}),Jh=rt(kh),Wh=N({},Nl,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fh=rt(Wh),$h=N({},ni,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ph=rt($h),Ih=N({},Nl,{newState:0,oldState:0}),eg=rt(Ih),tg=[9,13,27,32],Ru=Kt&&"CompositionEvent"in window,Jn=null;Kt&&"documentMode"in document&&(Jn=document.documentMode);var lg=Kt&&"TextEvent"in window&&!Jn,mf=Kt&&(!Ru||Jn&&8<Jn&&11>=Jn),vf=" ",yf=!1;function bf(e,t){switch(e){case"keyup":return tg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var fn=!1;function ng(e,t){switch(e){case"compositionend":return pf(t);case"keypress":return t.which!==32?null:(yf=!0,vf);case"textInput":return e=t.data,e===vf&&yf?null:e;default:return null}}function ag(e,t){if(fn)return e==="compositionend"||!Ru&&bf(e,t)?(e=of(),Ia=Mu=fl=null,fn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return mf&&t.locale!=="ko"?null:t.data;default:return null}}var ig={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ig[e.type]:t==="textarea"}function Tf(e,t,l,n){cn?rn?rn.push(n):rn=[n]:cn=n,t=Zi(t,"onChange"),0<t.length&&(l=new li("onChange","change",null,l,n),e.push({event:l,listeners:t}))}var Wn=null,Fn=null;function ug(e){ld(e,0)}function ai(e){var t=Zn(e);if(tf(t))return e}function zf(e,t){if(e==="change")return t}var Ef=!1;if(Kt){var _u;if(Kt){var xu="oninput"in document;if(!xu){var Af=document.createElement("div");Af.setAttribute("oninput","return;"),xu=typeof Af.oninput=="function"}_u=xu}else _u=!1;Ef=_u&&(!document.documentMode||9<document.documentMode)}function Mf(){Wn&&(Wn.detachEvent("onpropertychange",Of),Fn=Wn=null)}function Of(e){if(e.propertyName==="value"&&ai(Fn)){var t=[];Tf(t,Fn,e,zu(e)),ff(ug,t)}}function cg(e,t,l){e==="focusin"?(Mf(),Wn=t,Fn=l,Wn.attachEvent("onpropertychange",Of)):e==="focusout"&&Mf()}function rg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ai(Fn)}function fg(e,t){if(e==="click")return ai(t)}function og(e,t){if(e==="input"||e==="change")return ai(t)}function sg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var gt=typeof Object.is=="function"?Object.is:sg;function $n(e,t){if(gt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var l=Object.keys(e),n=Object.keys(t);if(l.length!==n.length)return!1;for(n=0;n<l.length;n++){var a=l[n];if(!we.call(t,a)||!gt(e[a],t[a]))return!1}return!0}function Df(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Uf(e,t){var l=Df(e);e=0;for(var n;l;){if(l.nodeType===3){if(n=e+l.textContent.length,e<=t&&n>=t)return{node:l,offset:t-e};e=n}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Df(l)}}function Hf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Hf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Rf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=$a(e.document);t instanceof e.HTMLIFrameElement;){try{var l=typeof t.contentWindow.location.href=="string"}catch{l=!1}if(l)e=t.contentWindow;else break;t=$a(e.document)}return t}function Bu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var dg=Kt&&"documentMode"in document&&11>=document.documentMode,on=null,wu=null,Pn=null,Nu=!1;function _f(e,t,l){var n=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Nu||on==null||on!==$a(n)||(n=on,"selectionStart"in n&&Bu(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Pn&&$n(Pn,n)||(Pn=n,n=Zi(wu,"onSelect"),0<n.length&&(t=new li("onSelect","select",null,t,l),e.push({event:t,listeners:n}),t.target=on)))}function Ll(e,t){var l={};return l[e.toLowerCase()]=t.toLowerCase(),l["Webkit"+e]="webkit"+t,l["Moz"+e]="moz"+t,l}var sn={animationend:Ll("Animation","AnimationEnd"),animationiteration:Ll("Animation","AnimationIteration"),animationstart:Ll("Animation","AnimationStart"),transitionrun:Ll("Transition","TransitionRun"),transitionstart:Ll("Transition","TransitionStart"),transitioncancel:Ll("Transition","TransitionCancel"),transitionend:Ll("Transition","TransitionEnd")},Lu={},xf={};Kt&&(xf=document.createElement("div").style,"AnimationEvent"in window||(delete sn.animationend.animation,delete sn.animationiteration.animation,delete sn.animationstart.animation),"TransitionEvent"in window||delete sn.transitionend.transition);function Cl(e){if(Lu[e])return Lu[e];if(!sn[e])return e;var t=sn[e],l;for(l in t)if(t.hasOwnProperty(l)&&l in xf)return Lu[e]=t[l];return e}var Bf=Cl("animationend"),wf=Cl("animationiteration"),Nf=Cl("animationstart"),hg=Cl("transitionrun"),gg=Cl("transitionstart"),mg=Cl("transitioncancel"),Lf=Cl("transitionend"),Cf=new Map,Cu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Cu.push("scrollEnd");function xt(e,t){Cf.set(e,t),wl(t,[e])}var qf=new WeakMap;function At(e,t){if(typeof e=="object"&&e!==null){var l=qf.get(e);return l!==void 0?l:(t={value:e,source:t,stack:Ir(t)},qf.set(e,t),t)}return{value:e,source:t,stack:Ir(t)}}var Mt=[],dn=0,qu=0;function ii(){for(var e=dn,t=qu=dn=0;t<e;){var l=Mt[t];Mt[t++]=null;var n=Mt[t];Mt[t++]=null;var a=Mt[t];Mt[t++]=null;var i=Mt[t];if(Mt[t++]=null,n!==null&&a!==null){var u=n.pending;u===null?a.next=a:(a.next=u.next,u.next=a),n.pending=a}i!==0&&Yf(l,a,i)}}function ui(e,t,l,n){Mt[dn++]=e,Mt[dn++]=t,Mt[dn++]=l,Mt[dn++]=n,qu|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function Yu(e,t,l,n){return ui(e,t,l,n),ci(e)}function hn(e,t){return ui(e,null,null,t),ci(e)}function Yf(e,t,l){e.lanes|=l;var n=e.alternate;n!==null&&(n.lanes|=l);for(var a=!1,i=e.return;i!==null;)i.childLanes|=l,n=i.alternate,n!==null&&(n.childLanes|=l),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(a=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,a&&t!==null&&(a=31-ht(l),e=i.hiddenUpdates,n=e[a],n===null?e[a]=[t]:n.push(t),t.lane=l|536870912),i):null}function ci(e){if(50<Ea)throw Ea=0,Xc=null,Error(f(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var gn={};function vg(e,t,l,n){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mt(e,t,l,n){return new vg(e,t,l,n)}function ju(e){return e=e.prototype,!(!e||!e.isReactComponent)}function kt(e,t){var l=e.alternate;return l===null?(l=mt(e.tag,t,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=t,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&65011712,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,t=e.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l.refCleanup=e.refCleanup,l}function jf(e,t){e.flags&=65011714;var l=e.alternate;return l===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,e.type=l.type,t=l.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ri(e,t,l,n,a,i){var u=0;if(n=e,typeof e=="function")ju(e)&&(u=1);else if(typeof e=="string")u=bm(e,l,q.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case he:return e=mt(31,l,t,a),e.elementType=he,e.lanes=i,e;case Oe:return ql(l.children,a,i,t);case Te:u=8,a|=24;break;case Ee:return e=mt(12,l,t,a|2),e.elementType=Ee,e.lanes=i,e;case V:return e=mt(13,l,t,a),e.elementType=V,e.lanes=i,e;case oe:return e=mt(19,l,t,a),e.elementType=oe,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ke:case ue:u=10;break e;case ee:u=9;break e;case De:u=11;break e;case le:u=14;break e;case Ae:u=16,n=null;break e}u=29,l=Error(f(130,e===null?"null":typeof e,"")),n=null}return t=mt(u,l,t,a),t.elementType=e,t.type=n,t.lanes=i,t}function ql(e,t,l,n){return e=mt(7,e,n,t),e.lanes=l,e}function Gu(e,t,l){return e=mt(6,e,null,t),e.lanes=l,e}function Vu(e,t,l){return t=mt(4,e.children!==null?e.children:[],e.key,t),t.lanes=l,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var mn=[],vn=0,fi=null,oi=0,Ot=[],Dt=0,Yl=null,Jt=1,Wt="";function jl(e,t){mn[vn++]=oi,mn[vn++]=fi,fi=e,oi=t}function Gf(e,t,l){Ot[Dt++]=Jt,Ot[Dt++]=Wt,Ot[Dt++]=Yl,Yl=e;var n=Jt;e=Wt;var a=32-ht(n)-1;n&=~(1<<a),l+=1;var i=32-ht(t)+a;if(30<i){var u=a-a%5;i=(n&(1<<u)-1).toString(32),n>>=u,a-=u,Jt=1<<32-ht(t)+a|l<<a|n,Wt=i+e}else Jt=1<<i|l<<a|n,Wt=e}function Zu(e){e.return!==null&&(jl(e,1),Gf(e,1,0))}function Qu(e){for(;e===fi;)fi=mn[--vn],mn[vn]=null,oi=mn[--vn],mn[vn]=null;for(;e===Yl;)Yl=Ot[--Dt],Ot[Dt]=null,Wt=Ot[--Dt],Ot[Dt]=null,Jt=Ot[--Dt],Ot[Dt]=null}var ut=null,xe=null,de=!1,Gl=null,Yt=!1,Xu=Error(f(519));function Vl(e){var t=Error(f(418,""));throw ta(At(t,e)),Xu}function Vf(e){var t=e.stateNode,l=e.type,n=e.memoizedProps;switch(t[Ie]=e,t[ct]=n,l){case"dialog":ae("cancel",t),ae("close",t);break;case"iframe":case"object":case"embed":ae("load",t);break;case"video":case"audio":for(l=0;l<Ma.length;l++)ae(Ma[l],t);break;case"source":ae("error",t);break;case"img":case"image":case"link":ae("error",t),ae("load",t);break;case"details":ae("toggle",t);break;case"input":ae("invalid",t),lf(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0),Fa(t);break;case"select":ae("invalid",t);break;case"textarea":ae("invalid",t),af(t,n.value,n.defaultValue,n.children),Fa(t)}l=n.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||t.textContent===""+l||n.suppressHydrationWarning===!0||ud(t.textContent,l)?(n.popover!=null&&(ae("beforetoggle",t),ae("toggle",t)),n.onScroll!=null&&ae("scroll",t),n.onScrollEnd!=null&&ae("scrollend",t),n.onClick!=null&&(t.onclick=Qi),t=!0):t=!1,t||Vl(e)}function Zf(e){for(ut=e.return;ut;)switch(ut.tag){case 5:case 13:Yt=!1;return;case 27:case 3:Yt=!0;return;default:ut=ut.return}}function In(e){if(e!==ut)return!1;if(!de)return Zf(e),de=!0,!1;var t=e.tag,l;if((l=t!==3&&t!==27)&&((l=t===5)&&(l=e.type,l=!(l!=="form"&&l!=="button")||cr(e.type,e.memoizedProps)),l=!l),l&&xe&&Vl(e),Zf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(f(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(l=e.data,l==="/$"){if(t===0){xe=wt(e.nextSibling);break e}t--}else l!=="$"&&l!=="$!"&&l!=="$?"||t++;e=e.nextSibling}xe=null}}else t===27?(t=xe,Ml(e.type)?(e=sr,sr=null,xe=e):xe=t):xe=ut?wt(e.stateNode.nextSibling):null;return!0}function ea(){xe=ut=null,de=!1}function Qf(){var e=Gl;return e!==null&&(st===null?st=e:st.push.apply(st,e),Gl=null),e}function ta(e){Gl===null?Gl=[e]:Gl.push(e)}var Ku=A(null),Zl=null,Ft=null;function ol(e,t,l){x(Ku,t._currentValue),t._currentValue=l}function $t(e){e._currentValue=Ku.current,_(Ku)}function ku(e,t,l){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===l)break;e=e.return}}function Ju(e,t,l,n){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var i=a.dependencies;if(i!==null){var u=a.child;i=i.firstContext;e:for(;i!==null;){var c=i;i=a;for(var o=0;o<t.length;o++)if(c.context===t[o]){i.lanes|=l,c=i.alternate,c!==null&&(c.lanes|=l),ku(i.return,l,e),n||(u=null);break e}i=c.next}}else if(a.tag===18){if(u=a.return,u===null)throw Error(f(341));u.lanes|=l,i=u.alternate,i!==null&&(i.lanes|=l),ku(u,l,e),u=null}else u=a.child;if(u!==null)u.return=a;else for(u=a;u!==null;){if(u===e){u=null;break}if(a=u.sibling,a!==null){a.return=u.return,u=a;break}u=u.return}a=u}}function la(e,t,l,n){e=null;for(var a=t,i=!1;a!==null;){if(!i){if((a.flags&524288)!==0)i=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var u=a.alternate;if(u===null)throw Error(f(387));if(u=u.memoizedProps,u!==null){var c=a.type;gt(a.pendingProps.value,u.value)||(e!==null?e.push(c):e=[c])}}else if(a===at.current){if(u=a.alternate,u===null)throw Error(f(387));u.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(_a):e=[_a])}a=a.return}e!==null&&Ju(t,e,l,n),t.flags|=262144}function si(e){for(e=e.firstContext;e!==null;){if(!gt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ql(e){Zl=e,Ft=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function et(e){return Xf(Zl,e)}function di(e,t){return Zl===null&&Ql(e),Xf(e,t)}function Xf(e,t){var l=t._currentValue;if(t={context:t,memoizedValue:l,next:null},Ft===null){if(e===null)throw Error(f(308));Ft=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ft=Ft.next=t;return l}var yg=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(l,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(l){return l()})}},bg=r.unstable_scheduleCallback,pg=r.unstable_NormalPriority,je={$$typeof:ue,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Wu(){return{controller:new yg,data:new Map,refCount:0}}function na(e){e.refCount--,e.refCount===0&&bg(pg,function(){e.controller.abort()})}var aa=null,Fu=0,yn=0,bn=null;function Sg(e,t){if(aa===null){var l=aa=[];Fu=0,yn=Pc(),bn={status:"pending",value:void 0,then:function(n){l.push(n)}}}return Fu++,t.then(Kf,Kf),t}function Kf(){if(--Fu===0&&aa!==null){bn!==null&&(bn.status="fulfilled");var e=aa;aa=null,yn=0,bn=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Tg(e,t){var l=[],n={status:"pending",value:null,reason:null,then:function(a){l.push(a)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var a=0;a<l.length;a++)(0,l[a])(t)},function(a){for(n.status="rejected",n.reason=a,a=0;a<l.length;a++)(0,l[a])(void 0)}),n}var kf=T.S;T.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&Sg(e,t),kf!==null&&kf(e,t)};var Xl=A(null);function $u(){var e=Xl.current;return e!==null?e:Me.pooledCache}function hi(e,t){t===null?x(Xl,Xl.current):x(Xl,t.pool)}function Jf(){var e=$u();return e===null?null:{parent:je._currentValue,pool:e}}var ia=Error(f(460)),Wf=Error(f(474)),gi=Error(f(542)),Pu={then:function(){}};function Ff(e){return e=e.status,e==="fulfilled"||e==="rejected"}function mi(){}function $f(e,t,l){switch(l=e[l],l===void 0?e.push(t):l!==t&&(t.then(mi,mi),t=l),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,If(e),e;default:if(typeof t.status=="string")t.then(mi,mi);else{if(e=Me,e!==null&&100<e.shellSuspendCounter)throw Error(f(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=n}},function(n){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,If(e),e}throw ua=t,ia}}var ua=null;function Pf(){if(ua===null)throw Error(f(459));var e=ua;return ua=null,e}function If(e){if(e===ia||e===gi)throw Error(f(483))}var sl=!1;function Iu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ec(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function dl(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function hl(e,t,l){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(ge&2)!==0){var a=n.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),n.pending=t,t=ci(e),Yf(e,null,l),t}return ui(e,n,t,l),ci(e)}function ca(e,t,l){if(t=t.updateQueue,t!==null&&(t=t.shared,(l&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,l|=n,t.lanes=l,Xr(e,l)}}function tc(e,t){var l=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,l===n)){var a=null,i=null;if(l=l.firstBaseUpdate,l!==null){do{var u={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};i===null?a=i=u:i=i.next=u,l=l.next}while(l!==null);i===null?a=i=t:i=i.next=t}else a=i=t;l={baseState:n.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:n.shared,callbacks:n.callbacks},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=t:e.next=t,l.lastBaseUpdate=t}var lc=!1;function ra(){if(lc){var e=bn;if(e!==null)throw e}}function fa(e,t,l,n){lc=!1;var a=e.updateQueue;sl=!1;var i=a.firstBaseUpdate,u=a.lastBaseUpdate,c=a.shared.pending;if(c!==null){a.shared.pending=null;var o=c,y=o.next;o.next=null,u===null?i=y:u.next=y,u=o;var E=e.alternate;E!==null&&(E=E.updateQueue,c=E.lastBaseUpdate,c!==u&&(c===null?E.firstBaseUpdate=y:c.next=y,E.lastBaseUpdate=o))}if(i!==null){var O=a.baseState;u=0,E=y=o=null,c=i;do{var b=c.lane&-536870913,p=b!==c.lane;if(p?(re&b)===b:(n&b)===b){b!==0&&b===yn&&(lc=!0),E!==null&&(E=E.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});e:{var k=e,Q=c;b=t;var pe=l;switch(Q.tag){case 1:if(k=Q.payload,typeof k=="function"){O=k.call(pe,O,b);break e}O=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=Q.payload,b=typeof k=="function"?k.call(pe,O,b):k,b==null)break e;O=N({},O,b);break e;case 2:sl=!0}}b=c.callback,b!==null&&(e.flags|=64,p&&(e.flags|=8192),p=a.callbacks,p===null?a.callbacks=[b]:p.push(b))}else p={lane:b,tag:c.tag,payload:c.payload,callback:c.callback,next:null},E===null?(y=E=p,o=O):E=E.next=p,u|=b;if(c=c.next,c===null){if(c=a.shared.pending,c===null)break;p=c,c=p.next,p.next=null,a.lastBaseUpdate=p,a.shared.pending=null}}while(!0);E===null&&(o=O),a.baseState=o,a.firstBaseUpdate=y,a.lastBaseUpdate=E,i===null&&(a.shared.lanes=0),Tl|=u,e.lanes=u,e.memoizedState=O}}function eo(e,t){if(typeof e!="function")throw Error(f(191,e));e.call(t)}function to(e,t){var l=e.callbacks;if(l!==null)for(e.callbacks=null,e=0;e<l.length;e++)eo(l[e],t)}var pn=A(null),vi=A(0);function lo(e,t){e=al,x(vi,e),x(pn,t),al=e|t.baseLanes}function nc(){x(vi,al),x(pn,pn.current)}function ac(){al=vi.current,_(pn),_(vi)}var gl=0,I=null,ye=null,Ce=null,yi=!1,Sn=!1,Kl=!1,bi=0,oa=0,Tn=null,zg=0;function Ne(){throw Error(f(321))}function ic(e,t){if(t===null)return!1;for(var l=0;l<t.length&&l<e.length;l++)if(!gt(e[l],t[l]))return!1;return!0}function uc(e,t,l,n,a,i){return gl=i,I=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,T.H=e===null||e.memoizedState===null?jo:Go,Kl=!1,i=l(n,a),Kl=!1,Sn&&(i=ao(t,l,n,a)),no(e),i}function no(e){T.H=Ai;var t=ye!==null&&ye.next!==null;if(gl=0,Ce=ye=I=null,yi=!1,oa=0,Tn=null,t)throw Error(f(300));e===null||Qe||(e=e.dependencies,e!==null&&si(e)&&(Qe=!0))}function ao(e,t,l,n){I=e;var a=0;do{if(Sn&&(Tn=null),oa=0,Sn=!1,25<=a)throw Error(f(301));if(a+=1,Ce=ye=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}T.H=Hg,i=t(l,n)}while(Sn);return i}function Eg(){var e=T.H,t=e.useState()[0];return t=typeof t.then=="function"?sa(t):t,e=e.useState()[0],(ye!==null?ye.memoizedState:null)!==e&&(I.flags|=1024),t}function cc(){var e=bi!==0;return bi=0,e}function rc(e,t,l){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l}function fc(e){if(yi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}yi=!1}gl=0,Ce=ye=I=null,Sn=!1,oa=bi=0,Tn=null}function ft(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ce===null?I.memoizedState=Ce=e:Ce=Ce.next=e,Ce}function qe(){if(ye===null){var e=I.alternate;e=e!==null?e.memoizedState:null}else e=ye.next;var t=Ce===null?I.memoizedState:Ce.next;if(t!==null)Ce=t,ye=e;else{if(e===null)throw I.alternate===null?Error(f(467)):Error(f(310));ye=e,e={memoizedState:ye.memoizedState,baseState:ye.baseState,baseQueue:ye.baseQueue,queue:ye.queue,next:null},Ce===null?I.memoizedState=Ce=e:Ce=Ce.next=e}return Ce}function oc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function sa(e){var t=oa;return oa+=1,Tn===null&&(Tn=[]),e=$f(Tn,e,t),t=I,(Ce===null?t.memoizedState:Ce.next)===null&&(t=t.alternate,T.H=t===null||t.memoizedState===null?jo:Go),e}function pi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return sa(e);if(e.$$typeof===ue)return et(e)}throw Error(f(438,String(e)))}function sc(e){var t=null,l=I.updateQueue;if(l!==null&&(t=l.memoCache),t==null){var n=I.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),l===null&&(l=oc(),I.updateQueue=l),l.memoCache=t,l=t.data[t.index],l===void 0)for(l=t.data[t.index]=Array(e),n=0;n<e;n++)l[n]=ie;return t.index++,l}function Pt(e,t){return typeof t=="function"?t(e):t}function Si(e){var t=qe();return dc(t,ye,e)}function dc(e,t,l){var n=e.queue;if(n===null)throw Error(f(311));n.lastRenderedReducer=l;var a=e.baseQueue,i=n.pending;if(i!==null){if(a!==null){var u=a.next;a.next=i.next,i.next=u}t.baseQueue=a=i,n.pending=null}if(i=e.baseState,a===null)e.memoizedState=i;else{t=a.next;var c=u=null,o=null,y=t,E=!1;do{var O=y.lane&-536870913;if(O!==y.lane?(re&O)===O:(gl&O)===O){var b=y.revertLane;if(b===0)o!==null&&(o=o.next={lane:0,revertLane:0,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null}),O===yn&&(E=!0);else if((gl&b)===b){y=y.next,b===yn&&(E=!0);continue}else O={lane:0,revertLane:y.revertLane,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null},o===null?(c=o=O,u=i):o=o.next=O,I.lanes|=b,Tl|=b;O=y.action,Kl&&l(i,O),i=y.hasEagerState?y.eagerState:l(i,O)}else b={lane:O,revertLane:y.revertLane,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null},o===null?(c=o=b,u=i):o=o.next=b,I.lanes|=O,Tl|=O;y=y.next}while(y!==null&&y!==t);if(o===null?u=i:o.next=c,!gt(i,e.memoizedState)&&(Qe=!0,E&&(l=bn,l!==null)))throw l;e.memoizedState=i,e.baseState=u,e.baseQueue=o,n.lastRenderedState=i}return a===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function hc(e){var t=qe(),l=t.queue;if(l===null)throw Error(f(311));l.lastRenderedReducer=e;var n=l.dispatch,a=l.pending,i=t.memoizedState;if(a!==null){l.pending=null;var u=a=a.next;do i=e(i,u.action),u=u.next;while(u!==a);gt(i,t.memoizedState)||(Qe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),l.lastRenderedState=i}return[i,n]}function io(e,t,l){var n=I,a=qe(),i=de;if(i){if(l===void 0)throw Error(f(407));l=l()}else l=t();var u=!gt((ye||a).memoizedState,l);u&&(a.memoizedState=l,Qe=!0),a=a.queue;var c=ro.bind(null,n,a,e);if(da(2048,8,c,[e]),a.getSnapshot!==t||u||Ce!==null&&Ce.memoizedState.tag&1){if(n.flags|=2048,zn(9,Ti(),co.bind(null,n,a,l,t),null),Me===null)throw Error(f(349));i||(gl&124)!==0||uo(n,t,l)}return l}function uo(e,t,l){e.flags|=16384,e={getSnapshot:t,value:l},t=I.updateQueue,t===null?(t=oc(),I.updateQueue=t,t.stores=[e]):(l=t.stores,l===null?t.stores=[e]:l.push(e))}function co(e,t,l,n){t.value=l,t.getSnapshot=n,fo(t)&&oo(e)}function ro(e,t,l){return l(function(){fo(t)&&oo(e)})}function fo(e){var t=e.getSnapshot;e=e.value;try{var l=t();return!gt(e,l)}catch{return!0}}function oo(e){var t=hn(e,2);t!==null&&St(t,e,2)}function gc(e){var t=ft();if(typeof e=="function"){var l=e;if(e=l(),Kl){cl(!0);try{l()}finally{cl(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pt,lastRenderedState:e},t}function so(e,t,l,n){return e.baseState=l,dc(e,ye,typeof n=="function"?n:Pt)}function Ag(e,t,l,n,a){if(Ei(e))throw Error(f(485));if(e=t.action,e!==null){var i={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};T.T!==null?l(!0):i.isTransition=!1,n(i),l=t.pending,l===null?(i.next=t.pending=i,ho(t,i)):(i.next=l.next,t.pending=l.next=i)}}function ho(e,t){var l=t.action,n=t.payload,a=e.state;if(t.isTransition){var i=T.T,u={};T.T=u;try{var c=l(a,n),o=T.S;o!==null&&o(u,c),go(e,t,c)}catch(y){mc(e,t,y)}finally{T.T=i}}else try{i=l(a,n),go(e,t,i)}catch(y){mc(e,t,y)}}function go(e,t,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(n){mo(e,t,n)},function(n){return mc(e,t,n)}):mo(e,t,l)}function mo(e,t,l){t.status="fulfilled",t.value=l,vo(t),e.state=l,t=e.pending,t!==null&&(l=t.next,l===t?e.pending=null:(l=l.next,t.next=l,ho(e,l)))}function mc(e,t,l){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=l,vo(t),t=t.next;while(t!==n)}e.action=null}function vo(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function yo(e,t){return t}function bo(e,t){if(de){var l=Me.formState;if(l!==null){e:{var n=I;if(de){if(xe){t:{for(var a=xe,i=Yt;a.nodeType!==8;){if(!i){a=null;break t}if(a=wt(a.nextSibling),a===null){a=null;break t}}i=a.data,a=i==="F!"||i==="F"?a:null}if(a){xe=wt(a.nextSibling),n=a.data==="F!";break e}}Vl(n)}n=!1}n&&(t=l[0])}}return l=ft(),l.memoizedState=l.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:yo,lastRenderedState:t},l.queue=n,l=Co.bind(null,I,n),n.dispatch=l,n=gc(!1),i=Sc.bind(null,I,!1,n.queue),n=ft(),a={state:t,dispatch:null,action:e,pending:null},n.queue=a,l=Ag.bind(null,I,a,i,l),a.dispatch=l,n.memoizedState=e,[t,l,!1]}function po(e){var t=qe();return So(t,ye,e)}function So(e,t,l){if(t=dc(e,t,yo)[0],e=Si(Pt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=sa(t)}catch(u){throw u===ia?gi:u}else n=t;t=qe();var a=t.queue,i=a.dispatch;return l!==t.memoizedState&&(I.flags|=2048,zn(9,Ti(),Mg.bind(null,a,l),null)),[n,i,e]}function Mg(e,t){e.action=t}function To(e){var t=qe(),l=ye;if(l!==null)return So(t,l,e);qe(),t=t.memoizedState,l=qe();var n=l.queue.dispatch;return l.memoizedState=e,[t,n,!1]}function zn(e,t,l,n){return e={tag:e,create:l,deps:n,inst:t,next:null},t=I.updateQueue,t===null&&(t=oc(),I.updateQueue=t),l=t.lastEffect,l===null?t.lastEffect=e.next=e:(n=l.next,l.next=e,e.next=n,t.lastEffect=e),e}function Ti(){return{destroy:void 0,resource:void 0}}function zo(){return qe().memoizedState}function zi(e,t,l,n){var a=ft();n=n===void 0?null:n,I.flags|=e,a.memoizedState=zn(1|t,Ti(),l,n)}function da(e,t,l,n){var a=qe();n=n===void 0?null:n;var i=a.memoizedState.inst;ye!==null&&n!==null&&ic(n,ye.memoizedState.deps)?a.memoizedState=zn(t,i,l,n):(I.flags|=e,a.memoizedState=zn(1|t,i,l,n))}function Eo(e,t){zi(8390656,8,e,t)}function Ao(e,t){da(2048,8,e,t)}function Mo(e,t){return da(4,2,e,t)}function Oo(e,t){return da(4,4,e,t)}function Do(e,t){if(typeof t=="function"){e=e();var l=t(e);return function(){typeof l=="function"?l():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Uo(e,t,l){l=l!=null?l.concat([e]):null,da(4,4,Do.bind(null,t,e),l)}function vc(){}function Ho(e,t){var l=qe();t=t===void 0?null:t;var n=l.memoizedState;return t!==null&&ic(t,n[1])?n[0]:(l.memoizedState=[e,t],e)}function Ro(e,t){var l=qe();t=t===void 0?null:t;var n=l.memoizedState;if(t!==null&&ic(t,n[1]))return n[0];if(n=e(),Kl){cl(!0);try{e()}finally{cl(!1)}}return l.memoizedState=[n,t],n}function yc(e,t,l){return l===void 0||(gl&1073741824)!==0?e.memoizedState=t:(e.memoizedState=l,e=Bs(),I.lanes|=e,Tl|=e,l)}function _o(e,t,l,n){return gt(l,t)?l:pn.current!==null?(e=yc(e,l,n),gt(e,t)||(Qe=!0),e):(gl&42)===0?(Qe=!0,e.memoizedState=l):(e=Bs(),I.lanes|=e,Tl|=e,t)}function xo(e,t,l,n,a){var i=B.p;B.p=i!==0&&8>i?i:8;var u=T.T,c={};T.T=c,Sc(e,!1,t,l);try{var o=a(),y=T.S;if(y!==null&&y(c,o),o!==null&&typeof o=="object"&&typeof o.then=="function"){var E=Tg(o,n);ha(e,t,E,pt(e))}else ha(e,t,n,pt(e))}catch(O){ha(e,t,{then:function(){},status:"rejected",reason:O},pt())}finally{B.p=i,T.T=u}}function Og(){}function bc(e,t,l,n){if(e.tag!==5)throw Error(f(476));var a=Bo(e).queue;xo(e,a,t,G,l===null?Og:function(){return wo(e),l(n)})}function Bo(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:G,baseState:G,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pt,lastRenderedState:G},next:null};var l={};return t.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pt,lastRenderedState:l},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function wo(e){var t=Bo(e).next.queue;ha(e,t,{},pt())}function pc(){return et(_a)}function No(){return qe().memoizedState}function Lo(){return qe().memoizedState}function Dg(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var l=pt();e=dl(l);var n=hl(t,e,l);n!==null&&(St(n,t,l),ca(n,t,l)),t={cache:Wu()},e.payload=t;return}t=t.return}}function Ug(e,t,l){var n=pt();l={lane:n,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null},Ei(e)?qo(t,l):(l=Yu(e,t,l,n),l!==null&&(St(l,e,n),Yo(l,t,n)))}function Co(e,t,l){var n=pt();ha(e,t,l,n)}function ha(e,t,l,n){var a={lane:n,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null};if(Ei(e))qo(t,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var u=t.lastRenderedState,c=i(u,l);if(a.hasEagerState=!0,a.eagerState=c,gt(c,u))return ui(e,t,a,0),Me===null&&ii(),!1}catch{}finally{}if(l=Yu(e,t,a,n),l!==null)return St(l,e,n),Yo(l,t,n),!0}return!1}function Sc(e,t,l,n){if(n={lane:2,revertLane:Pc(),action:n,hasEagerState:!1,eagerState:null,next:null},Ei(e)){if(t)throw Error(f(479))}else t=Yu(e,l,n,2),t!==null&&St(t,e,2)}function Ei(e){var t=e.alternate;return e===I||t!==null&&t===I}function qo(e,t){Sn=yi=!0;var l=e.pending;l===null?t.next=t:(t.next=l.next,l.next=t),e.pending=t}function Yo(e,t,l){if((l&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,l|=n,t.lanes=l,Xr(e,l)}}var Ai={readContext:et,use:pi,useCallback:Ne,useContext:Ne,useEffect:Ne,useImperativeHandle:Ne,useLayoutEffect:Ne,useInsertionEffect:Ne,useMemo:Ne,useReducer:Ne,useRef:Ne,useState:Ne,useDebugValue:Ne,useDeferredValue:Ne,useTransition:Ne,useSyncExternalStore:Ne,useId:Ne,useHostTransitionStatus:Ne,useFormState:Ne,useActionState:Ne,useOptimistic:Ne,useMemoCache:Ne,useCacheRefresh:Ne},jo={readContext:et,use:pi,useCallback:function(e,t){return ft().memoizedState=[e,t===void 0?null:t],e},useContext:et,useEffect:Eo,useImperativeHandle:function(e,t,l){l=l!=null?l.concat([e]):null,zi(4194308,4,Do.bind(null,t,e),l)},useLayoutEffect:function(e,t){return zi(4194308,4,e,t)},useInsertionEffect:function(e,t){zi(4,2,e,t)},useMemo:function(e,t){var l=ft();t=t===void 0?null:t;var n=e();if(Kl){cl(!0);try{e()}finally{cl(!1)}}return l.memoizedState=[n,t],n},useReducer:function(e,t,l){var n=ft();if(l!==void 0){var a=l(t);if(Kl){cl(!0);try{l(t)}finally{cl(!1)}}}else a=t;return n.memoizedState=n.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},n.queue=e,e=e.dispatch=Ug.bind(null,I,e),[n.memoizedState,e]},useRef:function(e){var t=ft();return e={current:e},t.memoizedState=e},useState:function(e){e=gc(e);var t=e.queue,l=Co.bind(null,I,t);return t.dispatch=l,[e.memoizedState,l]},useDebugValue:vc,useDeferredValue:function(e,t){var l=ft();return yc(l,e,t)},useTransition:function(){var e=gc(!1);return e=xo.bind(null,I,e.queue,!0,!1),ft().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,l){var n=I,a=ft();if(de){if(l===void 0)throw Error(f(407));l=l()}else{if(l=t(),Me===null)throw Error(f(349));(re&124)!==0||uo(n,t,l)}a.memoizedState=l;var i={value:l,getSnapshot:t};return a.queue=i,Eo(ro.bind(null,n,i,e),[e]),n.flags|=2048,zn(9,Ti(),co.bind(null,n,i,l,t),null),l},useId:function(){var e=ft(),t=Me.identifierPrefix;if(de){var l=Wt,n=Jt;l=(n&~(1<<32-ht(n)-1)).toString(32)+l,t="«"+t+"R"+l,l=bi++,0<l&&(t+="H"+l.toString(32)),t+="»"}else l=zg++,t="«"+t+"r"+l.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:pc,useFormState:bo,useActionState:bo,useOptimistic:function(e){var t=ft();t.memoizedState=t.baseState=e;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=l,t=Sc.bind(null,I,!0,l),l.dispatch=t,[e,t]},useMemoCache:sc,useCacheRefresh:function(){return ft().memoizedState=Dg.bind(null,I)}},Go={readContext:et,use:pi,useCallback:Ho,useContext:et,useEffect:Ao,useImperativeHandle:Uo,useInsertionEffect:Mo,useLayoutEffect:Oo,useMemo:Ro,useReducer:Si,useRef:zo,useState:function(){return Si(Pt)},useDebugValue:vc,useDeferredValue:function(e,t){var l=qe();return _o(l,ye.memoizedState,e,t)},useTransition:function(){var e=Si(Pt)[0],t=qe().memoizedState;return[typeof e=="boolean"?e:sa(e),t]},useSyncExternalStore:io,useId:No,useHostTransitionStatus:pc,useFormState:po,useActionState:po,useOptimistic:function(e,t){var l=qe();return so(l,ye,e,t)},useMemoCache:sc,useCacheRefresh:Lo},Hg={readContext:et,use:pi,useCallback:Ho,useContext:et,useEffect:Ao,useImperativeHandle:Uo,useInsertionEffect:Mo,useLayoutEffect:Oo,useMemo:Ro,useReducer:hc,useRef:zo,useState:function(){return hc(Pt)},useDebugValue:vc,useDeferredValue:function(e,t){var l=qe();return ye===null?yc(l,e,t):_o(l,ye.memoizedState,e,t)},useTransition:function(){var e=hc(Pt)[0],t=qe().memoizedState;return[typeof e=="boolean"?e:sa(e),t]},useSyncExternalStore:io,useId:No,useHostTransitionStatus:pc,useFormState:To,useActionState:To,useOptimistic:function(e,t){var l=qe();return ye!==null?so(l,ye,e,t):(l.baseState=e,[e,l.queue.dispatch])},useMemoCache:sc,useCacheRefresh:Lo},En=null,ga=0;function Mi(e){var t=ga;return ga+=1,En===null&&(En=[]),$f(En,e,t)}function ma(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Oi(e,t){throw t.$$typeof===K?Error(f(525)):(e=Object.prototype.toString.call(t),Error(f(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Vo(e){var t=e._init;return t(e._payload)}function Zo(e){function t(m,h){if(e){var v=m.deletions;v===null?(m.deletions=[h],m.flags|=16):v.push(h)}}function l(m,h){if(!e)return null;for(;h!==null;)t(m,h),h=h.sibling;return null}function n(m){for(var h=new Map;m!==null;)m.key!==null?h.set(m.key,m):h.set(m.index,m),m=m.sibling;return h}function a(m,h){return m=kt(m,h),m.index=0,m.sibling=null,m}function i(m,h,v){return m.index=v,e?(v=m.alternate,v!==null?(v=v.index,v<h?(m.flags|=67108866,h):v):(m.flags|=67108866,h)):(m.flags|=1048576,h)}function u(m){return e&&m.alternate===null&&(m.flags|=67108866),m}function c(m,h,v,M){return h===null||h.tag!==6?(h=Gu(v,m.mode,M),h.return=m,h):(h=a(h,v),h.return=m,h)}function o(m,h,v,M){var C=v.type;return C===Oe?E(m,h,v.props.children,M,v.key):h!==null&&(h.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ae&&Vo(C)===h.type)?(h=a(h,v.props),ma(h,v),h.return=m,h):(h=ri(v.type,v.key,v.props,null,m.mode,M),ma(h,v),h.return=m,h)}function y(m,h,v,M){return h===null||h.tag!==4||h.stateNode.containerInfo!==v.containerInfo||h.stateNode.implementation!==v.implementation?(h=Vu(v,m.mode,M),h.return=m,h):(h=a(h,v.children||[]),h.return=m,h)}function E(m,h,v,M,C){return h===null||h.tag!==7?(h=ql(v,m.mode,M,C),h.return=m,h):(h=a(h,v),h.return=m,h)}function O(m,h,v){if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return h=Gu(""+h,m.mode,v),h.return=m,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case F:return v=ri(h.type,h.key,h.props,null,m.mode,v),ma(v,h),v.return=m,v;case Se:return h=Vu(h,m.mode,v),h.return=m,h;case Ae:var M=h._init;return h=M(h._payload),O(m,h,v)}if(J(h)||Re(h))return h=ql(h,m.mode,v,null),h.return=m,h;if(typeof h.then=="function")return O(m,Mi(h),v);if(h.$$typeof===ue)return O(m,di(m,h),v);Oi(m,h)}return null}function b(m,h,v,M){var C=h!==null?h.key:null;if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return C!==null?null:c(m,h,""+v,M);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case F:return v.key===C?o(m,h,v,M):null;case Se:return v.key===C?y(m,h,v,M):null;case Ae:return C=v._init,v=C(v._payload),b(m,h,v,M)}if(J(v)||Re(v))return C!==null?null:E(m,h,v,M,null);if(typeof v.then=="function")return b(m,h,Mi(v),M);if(v.$$typeof===ue)return b(m,h,di(m,v),M);Oi(m,v)}return null}function p(m,h,v,M,C){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return m=m.get(v)||null,c(h,m,""+M,C);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case F:return m=m.get(M.key===null?v:M.key)||null,o(h,m,M,C);case Se:return m=m.get(M.key===null?v:M.key)||null,y(h,m,M,C);case Ae:var te=M._init;return M=te(M._payload),p(m,h,v,M,C)}if(J(M)||Re(M))return m=m.get(v)||null,E(h,m,M,C,null);if(typeof M.then=="function")return p(m,h,v,Mi(M),C);if(M.$$typeof===ue)return p(m,h,v,di(h,M),C);Oi(h,M)}return null}function k(m,h,v,M){for(var C=null,te=null,Y=h,X=h=0,Ke=null;Y!==null&&X<v.length;X++){Y.index>X?(Ke=Y,Y=null):Ke=Y.sibling;var se=b(m,Y,v[X],M);if(se===null){Y===null&&(Y=Ke);break}e&&Y&&se.alternate===null&&t(m,Y),h=i(se,h,X),te===null?C=se:te.sibling=se,te=se,Y=Ke}if(X===v.length)return l(m,Y),de&&jl(m,X),C;if(Y===null){for(;X<v.length;X++)Y=O(m,v[X],M),Y!==null&&(h=i(Y,h,X),te===null?C=Y:te.sibling=Y,te=Y);return de&&jl(m,X),C}for(Y=n(Y);X<v.length;X++)Ke=p(Y,m,X,v[X],M),Ke!==null&&(e&&Ke.alternate!==null&&Y.delete(Ke.key===null?X:Ke.key),h=i(Ke,h,X),te===null?C=Ke:te.sibling=Ke,te=Ke);return e&&Y.forEach(function(Rl){return t(m,Rl)}),de&&jl(m,X),C}function Q(m,h,v,M){if(v==null)throw Error(f(151));for(var C=null,te=null,Y=h,X=h=0,Ke=null,se=v.next();Y!==null&&!se.done;X++,se=v.next()){Y.index>X?(Ke=Y,Y=null):Ke=Y.sibling;var Rl=b(m,Y,se.value,M);if(Rl===null){Y===null&&(Y=Ke);break}e&&Y&&Rl.alternate===null&&t(m,Y),h=i(Rl,h,X),te===null?C=Rl:te.sibling=Rl,te=Rl,Y=Ke}if(se.done)return l(m,Y),de&&jl(m,X),C;if(Y===null){for(;!se.done;X++,se=v.next())se=O(m,se.value,M),se!==null&&(h=i(se,h,X),te===null?C=se:te.sibling=se,te=se);return de&&jl(m,X),C}for(Y=n(Y);!se.done;X++,se=v.next())se=p(Y,m,X,se.value,M),se!==null&&(e&&se.alternate!==null&&Y.delete(se.key===null?X:se.key),h=i(se,h,X),te===null?C=se:te.sibling=se,te=se);return e&&Y.forEach(function(Rm){return t(m,Rm)}),de&&jl(m,X),C}function pe(m,h,v,M){if(typeof v=="object"&&v!==null&&v.type===Oe&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case F:e:{for(var C=v.key;h!==null;){if(h.key===C){if(C=v.type,C===Oe){if(h.tag===7){l(m,h.sibling),M=a(h,v.props.children),M.return=m,m=M;break e}}else if(h.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ae&&Vo(C)===h.type){l(m,h.sibling),M=a(h,v.props),ma(M,v),M.return=m,m=M;break e}l(m,h);break}else t(m,h);h=h.sibling}v.type===Oe?(M=ql(v.props.children,m.mode,M,v.key),M.return=m,m=M):(M=ri(v.type,v.key,v.props,null,m.mode,M),ma(M,v),M.return=m,m=M)}return u(m);case Se:e:{for(C=v.key;h!==null;){if(h.key===C)if(h.tag===4&&h.stateNode.containerInfo===v.containerInfo&&h.stateNode.implementation===v.implementation){l(m,h.sibling),M=a(h,v.children||[]),M.return=m,m=M;break e}else{l(m,h);break}else t(m,h);h=h.sibling}M=Vu(v,m.mode,M),M.return=m,m=M}return u(m);case Ae:return C=v._init,v=C(v._payload),pe(m,h,v,M)}if(J(v))return k(m,h,v,M);if(Re(v)){if(C=Re(v),typeof C!="function")throw Error(f(150));return v=C.call(v),Q(m,h,v,M)}if(typeof v.then=="function")return pe(m,h,Mi(v),M);if(v.$$typeof===ue)return pe(m,h,di(m,v),M);Oi(m,v)}return typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint"?(v=""+v,h!==null&&h.tag===6?(l(m,h.sibling),M=a(h,v),M.return=m,m=M):(l(m,h),M=Gu(v,m.mode,M),M.return=m,m=M),u(m)):l(m,h)}return function(m,h,v,M){try{ga=0;var C=pe(m,h,v,M);return En=null,C}catch(Y){if(Y===ia||Y===gi)throw Y;var te=mt(29,Y,null,m.mode);return te.lanes=M,te.return=m,te}finally{}}}var An=Zo(!0),Qo=Zo(!1),Ut=A(null),jt=null;function ml(e){var t=e.alternate;x(Ge,Ge.current&1),x(Ut,e),jt===null&&(t===null||pn.current!==null||t.memoizedState!==null)&&(jt=e)}function Xo(e){if(e.tag===22){if(x(Ge,Ge.current),x(Ut,e),jt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(jt=e)}}else vl()}function vl(){x(Ge,Ge.current),x(Ut,Ut.current)}function It(e){_(Ut),jt===e&&(jt=null),_(Ge)}var Ge=A(0);function Di(e){for(var t=e;t!==null;){if(t.tag===13){var l=t.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||or(l)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Tc(e,t,l,n){t=e.memoizedState,l=l(n,t),l=l==null?t:N({},t,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var zc={enqueueSetState:function(e,t,l){e=e._reactInternals;var n=pt(),a=dl(n);a.payload=t,l!=null&&(a.callback=l),t=hl(e,a,n),t!==null&&(St(t,e,n),ca(t,e,n))},enqueueReplaceState:function(e,t,l){e=e._reactInternals;var n=pt(),a=dl(n);a.tag=1,a.payload=t,l!=null&&(a.callback=l),t=hl(e,a,n),t!==null&&(St(t,e,n),ca(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var l=pt(),n=dl(l);n.tag=2,t!=null&&(n.callback=t),t=hl(e,n,l),t!==null&&(St(t,e,l),ca(t,e,l))}};function Ko(e,t,l,n,a,i,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,i,u):t.prototype&&t.prototype.isPureReactComponent?!$n(l,n)||!$n(a,i):!0}function ko(e,t,l,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(l,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(l,n),t.state!==e&&zc.enqueueReplaceState(t,t.state,null)}function kl(e,t){var l=t;if("ref"in t){l={};for(var n in t)n!=="ref"&&(l[n]=t[n])}if(e=e.defaultProps){l===t&&(l=N({},l));for(var a in e)l[a]===void 0&&(l[a]=e[a])}return l}var Ui=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Jo(e){Ui(e)}function Wo(e){console.error(e)}function Fo(e){Ui(e)}function Hi(e,t){try{var l=e.onUncaughtError;l(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function $o(e,t,l){try{var n=e.onCaughtError;n(l.value,{componentStack:l.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function Ec(e,t,l){return l=dl(l),l.tag=3,l.payload={element:null},l.callback=function(){Hi(e,t)},l}function Po(e){return e=dl(e),e.tag=3,e}function Io(e,t,l,n){var a=l.type.getDerivedStateFromError;if(typeof a=="function"){var i=n.value;e.payload=function(){return a(i)},e.callback=function(){$o(t,l,n)}}var u=l.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){$o(t,l,n),typeof a!="function"&&(zl===null?zl=new Set([this]):zl.add(this));var c=n.stack;this.componentDidCatch(n.value,{componentStack:c!==null?c:""})})}function Rg(e,t,l,n,a){if(l.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=l.alternate,t!==null&&la(t,l,a,!0),l=Ut.current,l!==null){switch(l.tag){case 13:return jt===null?kc():l.alternate===null&&Be===0&&(Be=3),l.flags&=-257,l.flags|=65536,l.lanes=a,n===Pu?l.flags|=16384:(t=l.updateQueue,t===null?l.updateQueue=new Set([n]):t.add(n),Wc(e,n,a)),!1;case 22:return l.flags|=65536,n===Pu?l.flags|=16384:(t=l.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},l.updateQueue=t):(l=t.retryQueue,l===null?t.retryQueue=new Set([n]):l.add(n)),Wc(e,n,a)),!1}throw Error(f(435,l.tag))}return Wc(e,n,a),kc(),!1}if(de)return t=Ut.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=a,n!==Xu&&(e=Error(f(422),{cause:n}),ta(At(e,l)))):(n!==Xu&&(t=Error(f(423),{cause:n}),ta(At(t,l))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,n=At(n,l),a=Ec(e.stateNode,n,a),tc(e,a),Be!==4&&(Be=2)),!1;var i=Error(f(520),{cause:n});if(i=At(i,l),za===null?za=[i]:za.push(i),Be!==4&&(Be=2),t===null)return!0;n=At(n,l),l=t;do{switch(l.tag){case 3:return l.flags|=65536,e=a&-a,l.lanes|=e,e=Ec(l.stateNode,n,e),tc(l,e),!1;case 1:if(t=l.type,i=l.stateNode,(l.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(zl===null||!zl.has(i))))return l.flags|=65536,a&=-a,l.lanes|=a,a=Po(a),Io(a,e,l,n),tc(l,a),!1}l=l.return}while(l!==null);return!1}var es=Error(f(461)),Qe=!1;function We(e,t,l,n){t.child=e===null?Qo(t,null,l,n):An(t,e.child,l,n)}function ts(e,t,l,n,a){l=l.render;var i=t.ref;if("ref"in n){var u={};for(var c in n)c!=="ref"&&(u[c]=n[c])}else u=n;return Ql(t),n=uc(e,t,l,u,i,a),c=cc(),e!==null&&!Qe?(rc(e,t,a),el(e,t,a)):(de&&c&&Zu(t),t.flags|=1,We(e,t,n,a),t.child)}function ls(e,t,l,n,a){if(e===null){var i=l.type;return typeof i=="function"&&!ju(i)&&i.defaultProps===void 0&&l.compare===null?(t.tag=15,t.type=i,ns(e,t,i,n,a)):(e=ri(l.type,null,n,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!_c(e,a)){var u=i.memoizedProps;if(l=l.compare,l=l!==null?l:$n,l(u,n)&&e.ref===t.ref)return el(e,t,a)}return t.flags|=1,e=kt(i,n),e.ref=t.ref,e.return=t,t.child=e}function ns(e,t,l,n,a){if(e!==null){var i=e.memoizedProps;if($n(i,n)&&e.ref===t.ref)if(Qe=!1,t.pendingProps=n=i,_c(e,a))(e.flags&131072)!==0&&(Qe=!0);else return t.lanes=e.lanes,el(e,t,a)}return Ac(e,t,l,n,a)}function as(e,t,l){var n=t.pendingProps,a=n.children,i=e!==null?e.memoizedState:null;if(n.mode==="hidden"){if((t.flags&128)!==0){if(n=i!==null?i.baseLanes|l:l,e!==null){for(a=t.child=e.child,i=0;a!==null;)i=i|a.lanes|a.childLanes,a=a.sibling;t.childLanes=i&~n}else t.childLanes=0,t.child=null;return is(e,t,n,l)}if((l&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&hi(t,i!==null?i.cachePool:null),i!==null?lo(t,i):nc(),Xo(t);else return t.lanes=t.childLanes=536870912,is(e,t,i!==null?i.baseLanes|l:l,l)}else i!==null?(hi(t,i.cachePool),lo(t,i),vl(),t.memoizedState=null):(e!==null&&hi(t,null),nc(),vl());return We(e,t,a,l),t.child}function is(e,t,l,n){var a=$u();return a=a===null?null:{parent:je._currentValue,pool:a},t.memoizedState={baseLanes:l,cachePool:a},e!==null&&hi(t,null),nc(),Xo(t),e!==null&&la(e,t,n,!0),null}function Ri(e,t){var l=t.ref;if(l===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(f(284));(e===null||e.ref!==l)&&(t.flags|=4194816)}}function Ac(e,t,l,n,a){return Ql(t),l=uc(e,t,l,n,void 0,a),n=cc(),e!==null&&!Qe?(rc(e,t,a),el(e,t,a)):(de&&n&&Zu(t),t.flags|=1,We(e,t,l,a),t.child)}function us(e,t,l,n,a,i){return Ql(t),t.updateQueue=null,l=ao(t,n,l,a),no(e),n=cc(),e!==null&&!Qe?(rc(e,t,i),el(e,t,i)):(de&&n&&Zu(t),t.flags|=1,We(e,t,l,i),t.child)}function cs(e,t,l,n,a){if(Ql(t),t.stateNode===null){var i=gn,u=l.contextType;typeof u=="object"&&u!==null&&(i=et(u)),i=new l(n,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=zc,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=n,i.state=t.memoizedState,i.refs={},Iu(t),u=l.contextType,i.context=typeof u=="object"&&u!==null?et(u):gn,i.state=t.memoizedState,u=l.getDerivedStateFromProps,typeof u=="function"&&(Tc(t,l,u,n),i.state=t.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&zc.enqueueReplaceState(i,i.state,null),fa(t,n,i,a),ra(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){i=t.stateNode;var c=t.memoizedProps,o=kl(l,c);i.props=o;var y=i.context,E=l.contextType;u=gn,typeof E=="object"&&E!==null&&(u=et(E));var O=l.getDerivedStateFromProps;E=typeof O=="function"||typeof i.getSnapshotBeforeUpdate=="function",c=t.pendingProps!==c,E||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c||y!==u)&&ko(t,i,n,u),sl=!1;var b=t.memoizedState;i.state=b,fa(t,n,i,a),ra(),y=t.memoizedState,c||b!==y||sl?(typeof O=="function"&&(Tc(t,l,O,n),y=t.memoizedState),(o=sl||Ko(t,l,o,n,b,y,u))?(E||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=y),i.props=n,i.state=y,i.context=u,n=o):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{i=t.stateNode,ec(e,t),u=t.memoizedProps,E=kl(l,u),i.props=E,O=t.pendingProps,b=i.context,y=l.contextType,o=gn,typeof y=="object"&&y!==null&&(o=et(y)),c=l.getDerivedStateFromProps,(y=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==O||b!==o)&&ko(t,i,n,o),sl=!1,b=t.memoizedState,i.state=b,fa(t,n,i,a),ra();var p=t.memoizedState;u!==O||b!==p||sl||e!==null&&e.dependencies!==null&&si(e.dependencies)?(typeof c=="function"&&(Tc(t,l,c,n),p=t.memoizedState),(E=sl||Ko(t,l,E,n,b,p,o)||e!==null&&e.dependencies!==null&&si(e.dependencies))?(y||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(n,p,o),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(n,p,o)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&b===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&b===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=p),i.props=n,i.state=p,i.context=o,n=E):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&b===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&b===e.memoizedState||(t.flags|=1024),n=!1)}return i=n,Ri(e,t),n=(t.flags&128)!==0,i||n?(i=t.stateNode,l=n&&typeof l.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&n?(t.child=An(t,e.child,null,a),t.child=An(t,null,l,a)):We(e,t,l,a),t.memoizedState=i.state,e=t.child):e=el(e,t,a),e}function rs(e,t,l,n){return ea(),t.flags|=256,We(e,t,l,n),t.child}var Mc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Oc(e){return{baseLanes:e,cachePool:Jf()}}function Dc(e,t,l){return e=e!==null?e.childLanes&~l:0,t&&(e|=Ht),e}function fs(e,t,l){var n=t.pendingProps,a=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(Ge.current&2)!==0),u&&(a=!0,t.flags&=-129),u=(t.flags&32)!==0,t.flags&=-33,e===null){if(de){if(a?ml(t):vl(),de){var c=xe,o;if(o=c){e:{for(o=c,c=Yt;o.nodeType!==8;){if(!c){c=null;break e}if(o=wt(o.nextSibling),o===null){c=null;break e}}c=o}c!==null?(t.memoizedState={dehydrated:c,treeContext:Yl!==null?{id:Jt,overflow:Wt}:null,retryLane:536870912,hydrationErrors:null},o=mt(18,null,null,0),o.stateNode=c,o.return=t,t.child=o,ut=t,xe=null,o=!0):o=!1}o||Vl(t)}if(c=t.memoizedState,c!==null&&(c=c.dehydrated,c!==null))return or(c)?t.lanes=32:t.lanes=536870912,null;It(t)}return c=n.children,n=n.fallback,a?(vl(),a=t.mode,c=_i({mode:"hidden",children:c},a),n=ql(n,a,l,null),c.return=t,n.return=t,c.sibling=n,t.child=c,a=t.child,a.memoizedState=Oc(l),a.childLanes=Dc(e,u,l),t.memoizedState=Mc,n):(ml(t),Uc(t,c))}if(o=e.memoizedState,o!==null&&(c=o.dehydrated,c!==null)){if(i)t.flags&256?(ml(t),t.flags&=-257,t=Hc(e,t,l)):t.memoizedState!==null?(vl(),t.child=e.child,t.flags|=128,t=null):(vl(),a=n.fallback,c=t.mode,n=_i({mode:"visible",children:n.children},c),a=ql(a,c,l,null),a.flags|=2,n.return=t,a.return=t,n.sibling=a,t.child=n,An(t,e.child,null,l),n=t.child,n.memoizedState=Oc(l),n.childLanes=Dc(e,u,l),t.memoizedState=Mc,t=a);else if(ml(t),or(c)){if(u=c.nextSibling&&c.nextSibling.dataset,u)var y=u.dgst;u=y,n=Error(f(419)),n.stack="",n.digest=u,ta({value:n,source:null,stack:null}),t=Hc(e,t,l)}else if(Qe||la(e,t,l,!1),u=(l&e.childLanes)!==0,Qe||u){if(u=Me,u!==null&&(n=l&-l,n=(n&42)!==0?1:su(n),n=(n&(u.suspendedLanes|l))!==0?0:n,n!==0&&n!==o.retryLane))throw o.retryLane=n,hn(e,n),St(u,e,n),es;c.data==="$?"||kc(),t=Hc(e,t,l)}else c.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=o.treeContext,xe=wt(c.nextSibling),ut=t,de=!0,Gl=null,Yt=!1,e!==null&&(Ot[Dt++]=Jt,Ot[Dt++]=Wt,Ot[Dt++]=Yl,Jt=e.id,Wt=e.overflow,Yl=t),t=Uc(t,n.children),t.flags|=4096);return t}return a?(vl(),a=n.fallback,c=t.mode,o=e.child,y=o.sibling,n=kt(o,{mode:"hidden",children:n.children}),n.subtreeFlags=o.subtreeFlags&65011712,y!==null?a=kt(y,a):(a=ql(a,c,l,null),a.flags|=2),a.return=t,n.return=t,n.sibling=a,t.child=n,n=a,a=t.child,c=e.child.memoizedState,c===null?c=Oc(l):(o=c.cachePool,o!==null?(y=je._currentValue,o=o.parent!==y?{parent:y,pool:y}:o):o=Jf(),c={baseLanes:c.baseLanes|l,cachePool:o}),a.memoizedState=c,a.childLanes=Dc(e,u,l),t.memoizedState=Mc,n):(ml(t),l=e.child,e=l.sibling,l=kt(l,{mode:"visible",children:n.children}),l.return=t,l.sibling=null,e!==null&&(u=t.deletions,u===null?(t.deletions=[e],t.flags|=16):u.push(e)),t.child=l,t.memoizedState=null,l)}function Uc(e,t){return t=_i({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function _i(e,t){return e=mt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Hc(e,t,l){return An(t,e.child,null,l),e=Uc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function os(e,t,l){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),ku(e.return,t,l)}function Rc(e,t,l,n,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:l,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=l,i.tailMode=a)}function ss(e,t,l){var n=t.pendingProps,a=n.revealOrder,i=n.tail;if(We(e,t,n.children,l),n=Ge.current,(n&2)!==0)n=n&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&os(e,l,t);else if(e.tag===19)os(e,l,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}switch(x(Ge,n),a){case"forwards":for(l=t.child,a=null;l!==null;)e=l.alternate,e!==null&&Di(e)===null&&(a=l),l=l.sibling;l=a,l===null?(a=t.child,t.child=null):(a=l.sibling,l.sibling=null),Rc(t,!1,a,l,i);break;case"backwards":for(l=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Di(e)===null){t.child=a;break}e=a.sibling,a.sibling=l,l=a,a=e}Rc(t,!0,l,null,i);break;case"together":Rc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function el(e,t,l){if(e!==null&&(t.dependencies=e.dependencies),Tl|=t.lanes,(l&t.childLanes)===0)if(e!==null){if(la(e,t,l,!1),(l&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(f(153));if(t.child!==null){for(e=t.child,l=kt(e,e.pendingProps),t.child=l,l.return=t;e.sibling!==null;)e=e.sibling,l=l.sibling=kt(e,e.pendingProps),l.return=t;l.sibling=null}return t.child}function _c(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&si(e)))}function _g(e,t,l){switch(t.tag){case 3:R(t,t.stateNode.containerInfo),ol(t,je,e.memoizedState.cache),ea();break;case 27:case 5:w(t);break;case 4:R(t,t.stateNode.containerInfo);break;case 10:ol(t,t.type,t.memoizedProps.value);break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(ml(t),t.flags|=128,null):(l&t.child.childLanes)!==0?fs(e,t,l):(ml(t),e=el(e,t,l),e!==null?e.sibling:null);ml(t);break;case 19:var a=(e.flags&128)!==0;if(n=(l&t.childLanes)!==0,n||(la(e,t,l,!1),n=(l&t.childLanes)!==0),a){if(n)return ss(e,t,l);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),x(Ge,Ge.current),n)break;return null;case 22:case 23:return t.lanes=0,as(e,t,l);case 24:ol(t,je,e.memoizedState.cache)}return el(e,t,l)}function ds(e,t,l){if(e!==null)if(e.memoizedProps!==t.pendingProps)Qe=!0;else{if(!_c(e,l)&&(t.flags&128)===0)return Qe=!1,_g(e,t,l);Qe=(e.flags&131072)!==0}else Qe=!1,de&&(t.flags&1048576)!==0&&Gf(t,oi,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var n=t.elementType,a=n._init;if(n=a(n._payload),t.type=n,typeof n=="function")ju(n)?(e=kl(n,e),t.tag=1,t=cs(null,t,n,e,l)):(t.tag=0,t=Ac(null,t,n,e,l));else{if(n!=null){if(a=n.$$typeof,a===De){t.tag=11,t=ts(null,t,n,e,l);break e}else if(a===le){t.tag=14,t=ls(null,t,n,e,l);break e}}throw t=nt(n)||n,Error(f(306,t,""))}}return t;case 0:return Ac(e,t,t.type,t.pendingProps,l);case 1:return n=t.type,a=kl(n,t.pendingProps),cs(e,t,n,a,l);case 3:e:{if(R(t,t.stateNode.containerInfo),e===null)throw Error(f(387));n=t.pendingProps;var i=t.memoizedState;a=i.element,ec(e,t),fa(t,n,null,l);var u=t.memoizedState;if(n=u.cache,ol(t,je,n),n!==i.cache&&Ju(t,[je],l,!0),ra(),n=u.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:u.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=rs(e,t,n,l);break e}else if(n!==a){a=At(Error(f(424)),t),ta(a),t=rs(e,t,n,l);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(xe=wt(e.firstChild),ut=t,de=!0,Gl=null,Yt=!0,l=Qo(t,null,n,l),t.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(ea(),n===a){t=el(e,t,l);break e}We(e,t,n,l)}t=t.child}return t;case 26:return Ri(e,t),e===null?(l=vd(t.type,null,t.pendingProps,null))?t.memoizedState=l:de||(l=t.type,e=t.pendingProps,n=Xi(W.current).createElement(l),n[Ie]=t,n[ct]=e,$e(n,l,e),Ze(n),t.stateNode=n):t.memoizedState=vd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return w(t),e===null&&de&&(n=t.stateNode=hd(t.type,t.pendingProps,W.current),ut=t,Yt=!0,a=xe,Ml(t.type)?(sr=a,xe=wt(n.firstChild)):xe=a),We(e,t,t.pendingProps.children,l),Ri(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&de&&((a=n=xe)&&(n=im(n,t.type,t.pendingProps,Yt),n!==null?(t.stateNode=n,ut=t,xe=wt(n.firstChild),Yt=!1,a=!0):a=!1),a||Vl(t)),w(t),a=t.type,i=t.pendingProps,u=e!==null?e.memoizedProps:null,n=i.children,cr(a,i)?n=null:u!==null&&cr(a,u)&&(t.flags|=32),t.memoizedState!==null&&(a=uc(e,t,Eg,null,null,l),_a._currentValue=a),Ri(e,t),We(e,t,n,l),t.child;case 6:return e===null&&de&&((e=l=xe)&&(l=um(l,t.pendingProps,Yt),l!==null?(t.stateNode=l,ut=t,xe=null,e=!0):e=!1),e||Vl(t)),null;case 13:return fs(e,t,l);case 4:return R(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=An(t,null,n,l):We(e,t,n,l),t.child;case 11:return ts(e,t,t.type,t.pendingProps,l);case 7:return We(e,t,t.pendingProps,l),t.child;case 8:return We(e,t,t.pendingProps.children,l),t.child;case 12:return We(e,t,t.pendingProps.children,l),t.child;case 10:return n=t.pendingProps,ol(t,t.type,n.value),We(e,t,n.children,l),t.child;case 9:return a=t.type._context,n=t.pendingProps.children,Ql(t),a=et(a),n=n(a),t.flags|=1,We(e,t,n,l),t.child;case 14:return ls(e,t,t.type,t.pendingProps,l);case 15:return ns(e,t,t.type,t.pendingProps,l);case 19:return ss(e,t,l);case 31:return n=t.pendingProps,l=t.mode,n={mode:n.mode,children:n.children},e===null?(l=_i(n,l),l.ref=t.ref,t.child=l,l.return=t,t=l):(l=kt(e.child,n),l.ref=t.ref,t.child=l,l.return=t,t=l),t;case 22:return as(e,t,l);case 24:return Ql(t),n=et(je),e===null?(a=$u(),a===null&&(a=Me,i=Wu(),a.pooledCache=i,i.refCount++,i!==null&&(a.pooledCacheLanes|=l),a=i),t.memoizedState={parent:n,cache:a},Iu(t),ol(t,je,a)):((e.lanes&l)!==0&&(ec(e,t),fa(t,null,null,l),ra()),a=e.memoizedState,i=t.memoizedState,a.parent!==n?(a={parent:n,cache:n},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),ol(t,je,n)):(n=i.cache,ol(t,je,n),n!==a.cache&&Ju(t,[je],l,!0))),We(e,t,t.pendingProps.children,l),t.child;case 29:throw t.pendingProps}throw Error(f(156,t.tag))}function tl(e){e.flags|=4}function hs(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Td(t)){if(t=Ut.current,t!==null&&((re&4194048)===re?jt!==null:(re&62914560)!==re&&(re&536870912)===0||t!==jt))throw ua=Pu,Wf;e.flags|=8192}}function xi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Zr():536870912,e.lanes|=t,Un|=t)}function va(e,t){if(!de)switch(e.tailMode){case"hidden":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?e.tail=null:l.sibling=null;break;case"collapsed":l=e.tail;for(var n=null;l!==null;)l.alternate!==null&&(n=l),l=l.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function _e(e){var t=e.alternate!==null&&e.alternate.child===e.child,l=0,n=0;if(t)for(var a=e.child;a!==null;)l|=a.lanes|a.childLanes,n|=a.subtreeFlags&65011712,n|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)l|=a.lanes|a.childLanes,n|=a.subtreeFlags,n|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=n,e.childLanes=l,t}function xg(e,t,l){var n=t.pendingProps;switch(Qu(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _e(t),null;case 1:return _e(t),null;case 3:return l=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),$t(je),U(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(In(t)?tl(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Qf())),_e(t),null;case 26:return l=t.memoizedState,e===null?(tl(t),l!==null?(_e(t),hs(t,l)):(_e(t),t.flags&=-16777217)):l?l!==e.memoizedState?(tl(t),_e(t),hs(t,l)):(_e(t),t.flags&=-16777217):(e.memoizedProps!==n&&tl(t),_e(t),t.flags&=-16777217),null;case 27:j(t),l=W.current;var a=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==n&&tl(t);else{if(!n){if(t.stateNode===null)throw Error(f(166));return _e(t),null}e=q.current,In(t)?Vf(t):(e=hd(a,n,l),t.stateNode=e,tl(t))}return _e(t),null;case 5:if(j(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&tl(t);else{if(!n){if(t.stateNode===null)throw Error(f(166));return _e(t),null}if(e=q.current,In(t))Vf(t);else{switch(a=Xi(W.current),e){case 1:e=a.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:e=a.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":e=a.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":e=a.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof n.is=="string"?a.createElement("select",{is:n.is}):a.createElement("select"),n.multiple?e.multiple=!0:n.size&&(e.size=n.size);break;default:e=typeof n.is=="string"?a.createElement(l,{is:n.is}):a.createElement(l)}}e[Ie]=t,e[ct]=n;e:for(a=t.child;a!==null;){if(a.tag===5||a.tag===6)e.appendChild(a.stateNode);else if(a.tag!==4&&a.tag!==27&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break e;for(;a.sibling===null;){if(a.return===null||a.return===t)break e;a=a.return}a.sibling.return=a.return,a=a.sibling}t.stateNode=e;e:switch($e(e,l,n),l){case"button":case"input":case"select":case"textarea":e=!!n.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&tl(t)}}return _e(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&tl(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(f(166));if(e=W.current,In(t)){if(e=t.stateNode,l=t.memoizedProps,n=null,a=ut,a!==null)switch(a.tag){case 27:case 5:n=a.memoizedProps}e[Ie]=t,e=!!(e.nodeValue===l||n!==null&&n.suppressHydrationWarning===!0||ud(e.nodeValue,l)),e||Vl(t)}else e=Xi(e).createTextNode(n),e[Ie]=t,t.stateNode=e}return _e(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=In(t),n!==null&&n.dehydrated!==null){if(e===null){if(!a)throw Error(f(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(f(317));a[Ie]=t}else ea(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;_e(t),a=!1}else a=Qf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(It(t),t):(It(t),null)}if(It(t),(t.flags&128)!==0)return t.lanes=l,t;if(l=n!==null,e=e!==null&&e.memoizedState!==null,l){n=t.child,a=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(a=n.alternate.memoizedState.cachePool.pool);var i=null;n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(i=n.memoizedState.cachePool.pool),i!==a&&(n.flags|=2048)}return l!==e&&l&&(t.child.flags|=8192),xi(t,t.updateQueue),_e(t),null;case 4:return U(),e===null&&lr(t.stateNode.containerInfo),_e(t),null;case 10:return $t(t.type),_e(t),null;case 19:if(_(Ge),a=t.memoizedState,a===null)return _e(t),null;if(n=(t.flags&128)!==0,i=a.rendering,i===null)if(n)va(a,!1);else{if(Be!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Di(e),i!==null){for(t.flags|=128,va(a,!1),e=i.updateQueue,t.updateQueue=e,xi(t,e),t.subtreeFlags=0,e=l,l=t.child;l!==null;)jf(l,e),l=l.sibling;return x(Ge,Ge.current&1|2),t.child}e=e.sibling}a.tail!==null&&it()>Ni&&(t.flags|=128,n=!0,va(a,!1),t.lanes=4194304)}else{if(!n)if(e=Di(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,xi(t,e),va(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!de)return _e(t),null}else 2*it()-a.renderingStartTime>Ni&&l!==536870912&&(t.flags|=128,n=!0,va(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(e=a.last,e!==null?e.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=it(),t.sibling=null,e=Ge.current,x(Ge,n?e&1|2:e&1),t):(_e(t),null);case 22:case 23:return It(t),ac(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(l&536870912)!==0&&(t.flags&128)===0&&(_e(t),t.subtreeFlags&6&&(t.flags|=8192)):_e(t),l=t.updateQueue,l!==null&&xi(t,l.retryQueue),l=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==l&&(t.flags|=2048),e!==null&&_(Xl),null;case 24:return l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),$t(je),_e(t),null;case 25:return null;case 30:return null}throw Error(f(156,t.tag))}function Bg(e,t){switch(Qu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return $t(je),U(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return j(t),null;case 13:if(It(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(f(340));ea()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return _(Ge),null;case 4:return U(),null;case 10:return $t(t.type),null;case 22:case 23:return It(t),ac(),e!==null&&_(Xl),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return $t(je),null;case 25:return null;default:return null}}function gs(e,t){switch(Qu(t),t.tag){case 3:$t(je),U();break;case 26:case 27:case 5:j(t);break;case 4:U();break;case 13:It(t);break;case 19:_(Ge);break;case 10:$t(t.type);break;case 22:case 23:It(t),ac(),e!==null&&_(Xl);break;case 24:$t(je)}}function ya(e,t){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var a=n.next;l=a;do{if((l.tag&e)===e){n=void 0;var i=l.create,u=l.inst;n=i(),u.destroy=n}l=l.next}while(l!==a)}}catch(c){ze(t,t.return,c)}}function yl(e,t,l){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var i=a.next;n=i;do{if((n.tag&e)===e){var u=n.inst,c=u.destroy;if(c!==void 0){u.destroy=void 0,a=t;var o=l,y=c;try{y()}catch(E){ze(a,o,E)}}}n=n.next}while(n!==i)}}catch(E){ze(t,t.return,E)}}function ms(e){var t=e.updateQueue;if(t!==null){var l=e.stateNode;try{to(t,l)}catch(n){ze(e,e.return,n)}}}function vs(e,t,l){l.props=kl(e.type,e.memoizedProps),l.state=e.memoizedState;try{l.componentWillUnmount()}catch(n){ze(e,t,n)}}function ba(e,t){try{var l=e.ref;if(l!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof l=="function"?e.refCleanup=l(n):l.current=n}}catch(a){ze(e,t,a)}}function Gt(e,t){var l=e.ref,n=e.refCleanup;if(l!==null)if(typeof n=="function")try{n()}catch(a){ze(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(a){ze(e,t,a)}else l.current=null}function ys(e){var t=e.type,l=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break e;case"img":l.src?n.src=l.src:l.srcSet&&(n.srcset=l.srcSet)}}catch(a){ze(e,e.return,a)}}function xc(e,t,l){try{var n=e.stateNode;em(n,e.type,l,t),n[ct]=t}catch(a){ze(e,e.return,a)}}function bs(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ml(e.type)||e.tag===4}function Bc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||bs(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ml(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function wc(e,t,l){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(e,t):(t=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,t.appendChild(e),l=l._reactRootContainer,l!=null||t.onclick!==null||(t.onclick=Qi));else if(n!==4&&(n===27&&Ml(e.type)&&(l=e.stateNode,t=null),e=e.child,e!==null))for(wc(e,t,l),e=e.sibling;e!==null;)wc(e,t,l),e=e.sibling}function Bi(e,t,l){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?l.insertBefore(e,t):l.appendChild(e);else if(n!==4&&(n===27&&Ml(e.type)&&(l=e.stateNode),e=e.child,e!==null))for(Bi(e,t,l),e=e.sibling;e!==null;)Bi(e,t,l),e=e.sibling}function ps(e){var t=e.stateNode,l=e.memoizedProps;try{for(var n=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);$e(t,n,l),t[Ie]=e,t[ct]=l}catch(i){ze(e,e.return,i)}}var ll=!1,Le=!1,Nc=!1,Ss=typeof WeakSet=="function"?WeakSet:Set,Xe=null;function wg(e,t){if(e=e.containerInfo,ir=$i,e=Rf(e),Bu(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var n=l.getSelection&&l.getSelection();if(n&&n.rangeCount!==0){l=n.anchorNode;var a=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{l.nodeType,i.nodeType}catch{l=null;break e}var u=0,c=-1,o=-1,y=0,E=0,O=e,b=null;t:for(;;){for(var p;O!==l||a!==0&&O.nodeType!==3||(c=u+a),O!==i||n!==0&&O.nodeType!==3||(o=u+n),O.nodeType===3&&(u+=O.nodeValue.length),(p=O.firstChild)!==null;)b=O,O=p;for(;;){if(O===e)break t;if(b===l&&++y===a&&(c=u),b===i&&++E===n&&(o=u),(p=O.nextSibling)!==null)break;O=b,b=O.parentNode}O=p}l=c===-1||o===-1?null:{start:c,end:o}}else l=null}l=l||{start:0,end:0}}else l=null;for(ur={focusedElem:e,selectionRange:l},$i=!1,Xe=t;Xe!==null;)if(t=Xe,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Xe=e;else for(;Xe!==null;){switch(t=Xe,i=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,l=t,a=i.memoizedProps,i=i.memoizedState,n=l.stateNode;try{var k=kl(l.type,a,l.elementType===l.type);e=n.getSnapshotBeforeUpdate(k,i),n.__reactInternalSnapshotBeforeUpdate=e}catch(Q){ze(l,l.return,Q)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,l=e.nodeType,l===9)fr(e);else if(l===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":fr(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(f(163))}if(e=t.sibling,e!==null){e.return=t.return,Xe=e;break}Xe=t.return}}function Ts(e,t,l){var n=l.flags;switch(l.tag){case 0:case 11:case 15:bl(e,l),n&4&&ya(5,l);break;case 1:if(bl(e,l),n&4)if(e=l.stateNode,t===null)try{e.componentDidMount()}catch(u){ze(l,l.return,u)}else{var a=kl(l.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(u){ze(l,l.return,u)}}n&64&&ms(l),n&512&&ba(l,l.return);break;case 3:if(bl(e,l),n&64&&(e=l.updateQueue,e!==null)){if(t=null,l.child!==null)switch(l.child.tag){case 27:case 5:t=l.child.stateNode;break;case 1:t=l.child.stateNode}try{to(e,t)}catch(u){ze(l,l.return,u)}}break;case 27:t===null&&n&4&&ps(l);case 26:case 5:bl(e,l),t===null&&n&4&&ys(l),n&512&&ba(l,l.return);break;case 12:bl(e,l);break;case 13:bl(e,l),n&4&&As(e,l),n&64&&(e=l.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(l=Zg.bind(null,l),cm(e,l))));break;case 22:if(n=l.memoizedState!==null||ll,!n){t=t!==null&&t.memoizedState!==null||Le,a=ll;var i=Le;ll=n,(Le=t)&&!i?pl(e,l,(l.subtreeFlags&8772)!==0):bl(e,l),ll=a,Le=i}break;case 30:break;default:bl(e,l)}}function zs(e){var t=e.alternate;t!==null&&(e.alternate=null,zs(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&gu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var He=null,ot=!1;function nl(e,t,l){for(l=l.child;l!==null;)Es(e,t,l),l=l.sibling}function Es(e,t,l){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(Yn,l)}catch{}switch(l.tag){case 26:Le||Gt(l,t),nl(e,t,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Le||Gt(l,t);var n=He,a=ot;Ml(l.type)&&(He=l.stateNode,ot=!1),nl(e,t,l),Da(l.stateNode),He=n,ot=a;break;case 5:Le||Gt(l,t);case 6:if(n=He,a=ot,He=null,nl(e,t,l),He=n,ot=a,He!==null)if(ot)try{(He.nodeType===9?He.body:He.nodeName==="HTML"?He.ownerDocument.body:He).removeChild(l.stateNode)}catch(i){ze(l,t,i)}else try{He.removeChild(l.stateNode)}catch(i){ze(l,t,i)}break;case 18:He!==null&&(ot?(e=He,sd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.stateNode),Na(e)):sd(He,l.stateNode));break;case 4:n=He,a=ot,He=l.stateNode.containerInfo,ot=!0,nl(e,t,l),He=n,ot=a;break;case 0:case 11:case 14:case 15:Le||yl(2,l,t),Le||yl(4,l,t),nl(e,t,l);break;case 1:Le||(Gt(l,t),n=l.stateNode,typeof n.componentWillUnmount=="function"&&vs(l,t,n)),nl(e,t,l);break;case 21:nl(e,t,l);break;case 22:Le=(n=Le)||l.memoizedState!==null,nl(e,t,l),Le=n;break;default:nl(e,t,l)}}function As(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Na(e)}catch(l){ze(t,t.return,l)}}function Ng(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Ss),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Ss),t;default:throw Error(f(435,e.tag))}}function Lc(e,t){var l=Ng(e);t.forEach(function(n){var a=Qg.bind(null,e,n);l.has(n)||(l.add(n),n.then(a,a))})}function vt(e,t){var l=t.deletions;if(l!==null)for(var n=0;n<l.length;n++){var a=l[n],i=e,u=t,c=u;e:for(;c!==null;){switch(c.tag){case 27:if(Ml(c.type)){He=c.stateNode,ot=!1;break e}break;case 5:He=c.stateNode,ot=!1;break e;case 3:case 4:He=c.stateNode.containerInfo,ot=!0;break e}c=c.return}if(He===null)throw Error(f(160));Es(i,u,a),He=null,ot=!1,i=a.alternate,i!==null&&(i.return=null),a.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)Ms(t,e),t=t.sibling}var Bt=null;function Ms(e,t){var l=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:vt(t,e),yt(e),n&4&&(yl(3,e,e.return),ya(3,e),yl(5,e,e.return));break;case 1:vt(t,e),yt(e),n&512&&(Le||l===null||Gt(l,l.return)),n&64&&ll&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(l=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=l===null?n:l.concat(n))));break;case 26:var a=Bt;if(vt(t,e),yt(e),n&512&&(Le||l===null||Gt(l,l.return)),n&4){var i=l!==null?l.memoizedState:null;if(n=e.memoizedState,l===null)if(n===null)if(e.stateNode===null){e:{n=e.type,l=e.memoizedProps,a=a.ownerDocument||a;t:switch(n){case"title":i=a.getElementsByTagName("title")[0],(!i||i[Vn]||i[Ie]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=a.createElement(n),a.head.insertBefore(i,a.querySelector("head > title"))),$e(i,n,l),i[Ie]=e,Ze(i),n=i;break e;case"link":var u=pd("link","href",a).get(n+(l.href||""));if(u){for(var c=0;c<u.length;c++)if(i=u[c],i.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&i.getAttribute("rel")===(l.rel==null?null:l.rel)&&i.getAttribute("title")===(l.title==null?null:l.title)&&i.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){u.splice(c,1);break t}}i=a.createElement(n),$e(i,n,l),a.head.appendChild(i);break;case"meta":if(u=pd("meta","content",a).get(n+(l.content||""))){for(c=0;c<u.length;c++)if(i=u[c],i.getAttribute("content")===(l.content==null?null:""+l.content)&&i.getAttribute("name")===(l.name==null?null:l.name)&&i.getAttribute("property")===(l.property==null?null:l.property)&&i.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&i.getAttribute("charset")===(l.charSet==null?null:l.charSet)){u.splice(c,1);break t}}i=a.createElement(n),$e(i,n,l),a.head.appendChild(i);break;default:throw Error(f(468,n))}i[Ie]=e,Ze(i),n=i}e.stateNode=n}else Sd(a,e.type,e.stateNode);else e.stateNode=bd(a,n,e.memoizedProps);else i!==n?(i===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):i.count--,n===null?Sd(a,e.type,e.stateNode):bd(a,n,e.memoizedProps)):n===null&&e.stateNode!==null&&xc(e,e.memoizedProps,l.memoizedProps)}break;case 27:vt(t,e),yt(e),n&512&&(Le||l===null||Gt(l,l.return)),l!==null&&n&4&&xc(e,e.memoizedProps,l.memoizedProps);break;case 5:if(vt(t,e),yt(e),n&512&&(Le||l===null||Gt(l,l.return)),e.flags&32){a=e.stateNode;try{un(a,"")}catch(p){ze(e,e.return,p)}}n&4&&e.stateNode!=null&&(a=e.memoizedProps,xc(e,a,l!==null?l.memoizedProps:a)),n&1024&&(Nc=!0);break;case 6:if(vt(t,e),yt(e),n&4){if(e.stateNode===null)throw Error(f(162));n=e.memoizedProps,l=e.stateNode;try{l.nodeValue=n}catch(p){ze(e,e.return,p)}}break;case 3:if(Ji=null,a=Bt,Bt=Ki(t.containerInfo),vt(t,e),Bt=a,yt(e),n&4&&l!==null&&l.memoizedState.isDehydrated)try{Na(t.containerInfo)}catch(p){ze(e,e.return,p)}Nc&&(Nc=!1,Os(e));break;case 4:n=Bt,Bt=Ki(e.stateNode.containerInfo),vt(t,e),yt(e),Bt=n;break;case 12:vt(t,e),yt(e);break;case 13:vt(t,e),yt(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Vc=it()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Lc(e,n)));break;case 22:a=e.memoizedState!==null;var o=l!==null&&l.memoizedState!==null,y=ll,E=Le;if(ll=y||a,Le=E||o,vt(t,e),Le=E,ll=y,yt(e),n&8192)e:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(l===null||o||ll||Le||Jl(e)),l=null,t=e;;){if(t.tag===5||t.tag===26){if(l===null){o=l=t;try{if(i=o.stateNode,a)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{c=o.stateNode;var O=o.memoizedProps.style,b=O!=null&&O.hasOwnProperty("display")?O.display:null;c.style.display=b==null||typeof b=="boolean"?"":(""+b).trim()}}catch(p){ze(o,o.return,p)}}}else if(t.tag===6){if(l===null){o=t;try{o.stateNode.nodeValue=a?"":o.memoizedProps}catch(p){ze(o,o.return,p)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;l===t&&(l=null),t=t.return}l===t&&(l=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(l=n.retryQueue,l!==null&&(n.retryQueue=null,Lc(e,l))));break;case 19:vt(t,e),yt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Lc(e,n)));break;case 30:break;case 21:break;default:vt(t,e),yt(e)}}function yt(e){var t=e.flags;if(t&2){try{for(var l,n=e.return;n!==null;){if(bs(n)){l=n;break}n=n.return}if(l==null)throw Error(f(160));switch(l.tag){case 27:var a=l.stateNode,i=Bc(e);Bi(e,i,a);break;case 5:var u=l.stateNode;l.flags&32&&(un(u,""),l.flags&=-33);var c=Bc(e);Bi(e,c,u);break;case 3:case 4:var o=l.stateNode.containerInfo,y=Bc(e);wc(e,y,o);break;default:throw Error(f(161))}}catch(E){ze(e,e.return,E)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Os(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Os(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function bl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Ts(e,t.alternate,t),t=t.sibling}function Jl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:yl(4,t,t.return),Jl(t);break;case 1:Gt(t,t.return);var l=t.stateNode;typeof l.componentWillUnmount=="function"&&vs(t,t.return,l),Jl(t);break;case 27:Da(t.stateNode);case 26:case 5:Gt(t,t.return),Jl(t);break;case 22:t.memoizedState===null&&Jl(t);break;case 30:Jl(t);break;default:Jl(t)}e=e.sibling}}function pl(e,t,l){for(l=l&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,a=e,i=t,u=i.flags;switch(i.tag){case 0:case 11:case 15:pl(a,i,l),ya(4,i);break;case 1:if(pl(a,i,l),n=i,a=n.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(y){ze(n,n.return,y)}if(n=i,a=n.updateQueue,a!==null){var c=n.stateNode;try{var o=a.shared.hiddenCallbacks;if(o!==null)for(a.shared.hiddenCallbacks=null,a=0;a<o.length;a++)eo(o[a],c)}catch(y){ze(n,n.return,y)}}l&&u&64&&ms(i),ba(i,i.return);break;case 27:ps(i);case 26:case 5:pl(a,i,l),l&&n===null&&u&4&&ys(i),ba(i,i.return);break;case 12:pl(a,i,l);break;case 13:pl(a,i,l),l&&u&4&&As(a,i);break;case 22:i.memoizedState===null&&pl(a,i,l),ba(i,i.return);break;case 30:break;default:pl(a,i,l)}t=t.sibling}}function Cc(e,t){var l=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==l&&(e!=null&&e.refCount++,l!=null&&na(l))}function qc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&na(e))}function Vt(e,t,l,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ds(e,t,l,n),t=t.sibling}function Ds(e,t,l,n){var a=t.flags;switch(t.tag){case 0:case 11:case 15:Vt(e,t,l,n),a&2048&&ya(9,t);break;case 1:Vt(e,t,l,n);break;case 3:Vt(e,t,l,n),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&na(e)));break;case 12:if(a&2048){Vt(e,t,l,n),e=t.stateNode;try{var i=t.memoizedProps,u=i.id,c=i.onPostCommit;typeof c=="function"&&c(u,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(o){ze(t,t.return,o)}}else Vt(e,t,l,n);break;case 13:Vt(e,t,l,n);break;case 23:break;case 22:i=t.stateNode,u=t.alternate,t.memoizedState!==null?i._visibility&2?Vt(e,t,l,n):pa(e,t):i._visibility&2?Vt(e,t,l,n):(i._visibility|=2,Mn(e,t,l,n,(t.subtreeFlags&10256)!==0)),a&2048&&Cc(u,t);break;case 24:Vt(e,t,l,n),a&2048&&qc(t.alternate,t);break;default:Vt(e,t,l,n)}}function Mn(e,t,l,n,a){for(a=a&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var i=e,u=t,c=l,o=n,y=u.flags;switch(u.tag){case 0:case 11:case 15:Mn(i,u,c,o,a),ya(8,u);break;case 23:break;case 22:var E=u.stateNode;u.memoizedState!==null?E._visibility&2?Mn(i,u,c,o,a):pa(i,u):(E._visibility|=2,Mn(i,u,c,o,a)),a&&y&2048&&Cc(u.alternate,u);break;case 24:Mn(i,u,c,o,a),a&&y&2048&&qc(u.alternate,u);break;default:Mn(i,u,c,o,a)}t=t.sibling}}function pa(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var l=e,n=t,a=n.flags;switch(n.tag){case 22:pa(l,n),a&2048&&Cc(n.alternate,n);break;case 24:pa(l,n),a&2048&&qc(n.alternate,n);break;default:pa(l,n)}t=t.sibling}}var Sa=8192;function On(e){if(e.subtreeFlags&Sa)for(e=e.child;e!==null;)Us(e),e=e.sibling}function Us(e){switch(e.tag){case 26:On(e),e.flags&Sa&&e.memoizedState!==null&&Sm(Bt,e.memoizedState,e.memoizedProps);break;case 5:On(e);break;case 3:case 4:var t=Bt;Bt=Ki(e.stateNode.containerInfo),On(e),Bt=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Sa,Sa=16777216,On(e),Sa=t):On(e));break;default:On(e)}}function Hs(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ta(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var n=t[l];Xe=n,_s(n,e)}Hs(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Rs(e),e=e.sibling}function Rs(e){switch(e.tag){case 0:case 11:case 15:Ta(e),e.flags&2048&&yl(9,e,e.return);break;case 3:Ta(e);break;case 12:Ta(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,wi(e)):Ta(e);break;default:Ta(e)}}function wi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var n=t[l];Xe=n,_s(n,e)}Hs(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:yl(8,t,t.return),wi(t);break;case 22:l=t.stateNode,l._visibility&2&&(l._visibility&=-3,wi(t));break;default:wi(t)}e=e.sibling}}function _s(e,t){for(;Xe!==null;){var l=Xe;switch(l.tag){case 0:case 11:case 15:yl(8,l,t);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var n=l.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:na(l.memoizedState.cache)}if(n=l.child,n!==null)n.return=l,Xe=n;else e:for(l=e;Xe!==null;){n=Xe;var a=n.sibling,i=n.return;if(zs(n),n===l){Xe=null;break e}if(a!==null){a.return=i,Xe=a;break e}Xe=i}}}var Lg={getCacheForType:function(e){var t=et(je),l=t.data.get(e);return l===void 0&&(l=e(),t.data.set(e,l)),l}},Cg=typeof WeakMap=="function"?WeakMap:Map,ge=0,Me=null,ne=null,re=0,me=0,bt=null,Sl=!1,Dn=!1,Yc=!1,al=0,Be=0,Tl=0,Wl=0,jc=0,Ht=0,Un=0,za=null,st=null,Gc=!1,Vc=0,Ni=1/0,Li=null,zl=null,Fe=0,El=null,Hn=null,Rn=0,Zc=0,Qc=null,xs=null,Ea=0,Xc=null;function pt(){if((ge&2)!==0&&re!==0)return re&-re;if(T.T!==null){var e=yn;return e!==0?e:Pc()}return Kr()}function Bs(){Ht===0&&(Ht=(re&536870912)===0||de?Vr():536870912);var e=Ut.current;return e!==null&&(e.flags|=32),Ht}function St(e,t,l){(e===Me&&(me===2||me===9)||e.cancelPendingCommit!==null)&&(_n(e,0),Al(e,re,Ht,!1)),Gn(e,l),((ge&2)===0||e!==Me)&&(e===Me&&((ge&2)===0&&(Wl|=l),Be===4&&Al(e,re,Ht,!1)),Zt(e))}function ws(e,t,l){if((ge&6)!==0)throw Error(f(327));var n=!l&&(t&124)===0&&(t&e.expiredLanes)===0||jn(e,t),a=n?jg(e,t):Jc(e,t,!0),i=n;do{if(a===0){Dn&&!n&&Al(e,t,0,!1);break}else{if(l=e.current.alternate,i&&!qg(l)){a=Jc(e,t,!1),i=!1;continue}if(a===2){if(i=t,e.errorRecoveryDisabledLanes&i)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){t=u;e:{var c=e;a=za;var o=c.current.memoizedState.isDehydrated;if(o&&(_n(c,u).flags|=256),u=Jc(c,u,!1),u!==2){if(Yc&&!o){c.errorRecoveryDisabledLanes|=i,Wl|=i,a=4;break e}i=st,st=a,i!==null&&(st===null?st=i:st.push.apply(st,i))}a=u}if(i=!1,a!==2)continue}}if(a===1){_n(e,0),Al(e,t,0,!0);break}e:{switch(n=e,i=a,i){case 0:case 1:throw Error(f(345));case 4:if((t&4194048)!==t)break;case 6:Al(n,t,Ht,!Sl);break e;case 2:st=null;break;case 3:case 5:break;default:throw Error(f(329))}if((t&62914560)===t&&(a=Vc+300-it(),10<a)){if(Al(n,t,Ht,!Sl),ka(n,0,!0)!==0)break e;n.timeoutHandle=fd(Ns.bind(null,n,l,st,Li,Gc,t,Ht,Wl,Un,Sl,i,2,-0,0),a);break e}Ns(n,l,st,Li,Gc,t,Ht,Wl,Un,Sl,i,0,-0,0)}}break}while(!0);Zt(e)}function Ns(e,t,l,n,a,i,u,c,o,y,E,O,b,p){if(e.timeoutHandle=-1,O=t.subtreeFlags,(O&8192||(O&16785408)===16785408)&&(Ra={stylesheets:null,count:0,unsuspend:pm},Us(t),O=Tm(),O!==null)){e.cancelPendingCommit=O(Vs.bind(null,e,t,i,l,n,a,u,c,o,E,1,b,p)),Al(e,i,u,!y);return}Vs(e,t,i,l,n,a,u,c,o)}function qg(e){for(var t=e;;){var l=t.tag;if((l===0||l===11||l===15)&&t.flags&16384&&(l=t.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var n=0;n<l.length;n++){var a=l[n],i=a.getSnapshot;a=a.value;try{if(!gt(i(),a))return!1}catch{return!1}}if(l=t.child,t.subtreeFlags&16384&&l!==null)l.return=t,t=l;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Al(e,t,l,n){t&=~jc,t&=~Wl,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var a=t;0<a;){var i=31-ht(a),u=1<<i;n[i]=-1,a&=~u}l!==0&&Qr(e,l,t)}function Ci(){return(ge&6)===0?(Aa(0),!1):!0}function Kc(){if(ne!==null){if(me===0)var e=ne.return;else e=ne,Ft=Zl=null,fc(e),En=null,ga=0,e=ne;for(;e!==null;)gs(e.alternate,e),e=e.return;ne=null}}function _n(e,t){var l=e.timeoutHandle;l!==-1&&(e.timeoutHandle=-1,lm(l)),l=e.cancelPendingCommit,l!==null&&(e.cancelPendingCommit=null,l()),Kc(),Me=e,ne=l=kt(e.current,null),re=t,me=0,bt=null,Sl=!1,Dn=jn(e,t),Yc=!1,Un=Ht=jc=Wl=Tl=Be=0,st=za=null,Gc=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var a=31-ht(n),i=1<<a;t|=e[a],n&=~i}return al=t,ii(),l}function Ls(e,t){I=null,T.H=Ai,t===ia||t===gi?(t=Pf(),me=3):t===Wf?(t=Pf(),me=4):me=t===es?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,bt=t,ne===null&&(Be=1,Hi(e,At(t,e.current)))}function Cs(){var e=T.H;return T.H=Ai,e===null?Ai:e}function qs(){var e=T.A;return T.A=Lg,e}function kc(){Be=4,Sl||(re&4194048)!==re&&Ut.current!==null||(Dn=!0),(Tl&134217727)===0&&(Wl&134217727)===0||Me===null||Al(Me,re,Ht,!1)}function Jc(e,t,l){var n=ge;ge|=2;var a=Cs(),i=qs();(Me!==e||re!==t)&&(Li=null,_n(e,t)),t=!1;var u=Be;e:do try{if(me!==0&&ne!==null){var c=ne,o=bt;switch(me){case 8:Kc(),u=6;break e;case 3:case 2:case 9:case 6:Ut.current===null&&(t=!0);var y=me;if(me=0,bt=null,xn(e,c,o,y),l&&Dn){u=0;break e}break;default:y=me,me=0,bt=null,xn(e,c,o,y)}}Yg(),u=Be;break}catch(E){Ls(e,E)}while(!0);return t&&e.shellSuspendCounter++,Ft=Zl=null,ge=n,T.H=a,T.A=i,ne===null&&(Me=null,re=0,ii()),u}function Yg(){for(;ne!==null;)Ys(ne)}function jg(e,t){var l=ge;ge|=2;var n=Cs(),a=qs();Me!==e||re!==t?(Li=null,Ni=it()+500,_n(e,t)):Dn=jn(e,t);e:do try{if(me!==0&&ne!==null){t=ne;var i=bt;t:switch(me){case 1:me=0,bt=null,xn(e,t,i,1);break;case 2:case 9:if(Ff(i)){me=0,bt=null,js(t);break}t=function(){me!==2&&me!==9||Me!==e||(me=7),Zt(e)},i.then(t,t);break e;case 3:me=7;break e;case 4:me=5;break e;case 7:Ff(i)?(me=0,bt=null,js(t)):(me=0,bt=null,xn(e,t,i,7));break;case 5:var u=null;switch(ne.tag){case 26:u=ne.memoizedState;case 5:case 27:var c=ne;if(!u||Td(u)){me=0,bt=null;var o=c.sibling;if(o!==null)ne=o;else{var y=c.return;y!==null?(ne=y,qi(y)):ne=null}break t}}me=0,bt=null,xn(e,t,i,5);break;case 6:me=0,bt=null,xn(e,t,i,6);break;case 8:Kc(),Be=6;break e;default:throw Error(f(462))}}Gg();break}catch(E){Ls(e,E)}while(!0);return Ft=Zl=null,T.H=n,T.A=a,ge=l,ne!==null?0:(Me=null,re=0,ii(),Be)}function Gg(){for(;ne!==null&&!Qt();)Ys(ne)}function Ys(e){var t=ds(e.alternate,e,al);e.memoizedProps=e.pendingProps,t===null?qi(e):ne=t}function js(e){var t=e,l=t.alternate;switch(t.tag){case 15:case 0:t=us(l,t,t.pendingProps,t.type,void 0,re);break;case 11:t=us(l,t,t.pendingProps,t.type.render,t.ref,re);break;case 5:fc(t);default:gs(l,t),t=ne=jf(t,al),t=ds(l,t,al)}e.memoizedProps=e.pendingProps,t===null?qi(e):ne=t}function xn(e,t,l,n){Ft=Zl=null,fc(t),En=null,ga=0;var a=t.return;try{if(Rg(e,a,t,l,re)){Be=1,Hi(e,At(l,e.current)),ne=null;return}}catch(i){if(a!==null)throw ne=a,i;Be=1,Hi(e,At(l,e.current)),ne=null;return}t.flags&32768?(de||n===1?e=!0:Dn||(re&536870912)!==0?e=!1:(Sl=e=!0,(n===2||n===9||n===3||n===6)&&(n=Ut.current,n!==null&&n.tag===13&&(n.flags|=16384))),Gs(t,e)):qi(t)}function qi(e){var t=e;do{if((t.flags&32768)!==0){Gs(t,Sl);return}e=t.return;var l=xg(t.alternate,t,al);if(l!==null){ne=l;return}if(t=t.sibling,t!==null){ne=t;return}ne=t=e}while(t!==null);Be===0&&(Be=5)}function Gs(e,t){do{var l=Bg(e.alternate,e);if(l!==null){l.flags&=32767,ne=l;return}if(l=e.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!t&&(e=e.sibling,e!==null)){ne=e;return}ne=e=l}while(e!==null);Be=6,ne=null}function Vs(e,t,l,n,a,i,u,c,o){e.cancelPendingCommit=null;do Yi();while(Fe!==0);if((ge&6)!==0)throw Error(f(327));if(t!==null){if(t===e.current)throw Error(f(177));if(i=t.lanes|t.childLanes,i|=qu,ph(e,l,i,u,c,o),e===Me&&(ne=Me=null,re=0),Hn=t,El=e,Rn=l,Zc=i,Qc=a,xs=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Xg(Qa,function(){return ks(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=T.T,T.T=null,a=B.p,B.p=2,u=ge,ge|=4;try{wg(e,t,l)}finally{ge=u,B.p=a,T.T=n}}Fe=1,Zs(),Qs(),Xs()}}function Zs(){if(Fe===1){Fe=0;var e=El,t=Hn,l=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||l){l=T.T,T.T=null;var n=B.p;B.p=2;var a=ge;ge|=4;try{Ms(t,e);var i=ur,u=Rf(e.containerInfo),c=i.focusedElem,o=i.selectionRange;if(u!==c&&c&&c.ownerDocument&&Hf(c.ownerDocument.documentElement,c)){if(o!==null&&Bu(c)){var y=o.start,E=o.end;if(E===void 0&&(E=y),"selectionStart"in c)c.selectionStart=y,c.selectionEnd=Math.min(E,c.value.length);else{var O=c.ownerDocument||document,b=O&&O.defaultView||window;if(b.getSelection){var p=b.getSelection(),k=c.textContent.length,Q=Math.min(o.start,k),pe=o.end===void 0?Q:Math.min(o.end,k);!p.extend&&Q>pe&&(u=pe,pe=Q,Q=u);var m=Uf(c,Q),h=Uf(c,pe);if(m&&h&&(p.rangeCount!==1||p.anchorNode!==m.node||p.anchorOffset!==m.offset||p.focusNode!==h.node||p.focusOffset!==h.offset)){var v=O.createRange();v.setStart(m.node,m.offset),p.removeAllRanges(),Q>pe?(p.addRange(v),p.extend(h.node,h.offset)):(v.setEnd(h.node,h.offset),p.addRange(v))}}}}for(O=[],p=c;p=p.parentNode;)p.nodeType===1&&O.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<O.length;c++){var M=O[c];M.element.scrollLeft=M.left,M.element.scrollTop=M.top}}$i=!!ir,ur=ir=null}finally{ge=a,B.p=n,T.T=l}}e.current=t,Fe=2}}function Qs(){if(Fe===2){Fe=0;var e=El,t=Hn,l=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||l){l=T.T,T.T=null;var n=B.p;B.p=2;var a=ge;ge|=4;try{Ts(e,t.alternate,t)}finally{ge=a,B.p=n,T.T=l}}Fe=3}}function Xs(){if(Fe===4||Fe===3){Fe=0,$l();var e=El,t=Hn,l=Rn,n=xs;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Fe=5:(Fe=0,Hn=El=null,Ks(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(zl=null),du(l),t=t.stateNode,dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(Yn,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=T.T,a=B.p,B.p=2,T.T=null;try{for(var i=e.onRecoverableError,u=0;u<n.length;u++){var c=n[u];i(c.value,{componentStack:c.stack})}}finally{T.T=t,B.p=a}}(Rn&3)!==0&&Yi(),Zt(e),a=e.pendingLanes,(l&4194090)!==0&&(a&42)!==0?e===Xc?Ea++:(Ea=0,Xc=e):Ea=0,Aa(0)}}function Ks(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,na(t)))}function Yi(e){return Zs(),Qs(),Xs(),ks()}function ks(){if(Fe!==5)return!1;var e=El,t=Zc;Zc=0;var l=du(Rn),n=T.T,a=B.p;try{B.p=32>l?32:l,T.T=null,l=Qc,Qc=null;var i=El,u=Rn;if(Fe=0,Hn=El=null,Rn=0,(ge&6)!==0)throw Error(f(331));var c=ge;if(ge|=4,Rs(i.current),Ds(i,i.current,u,l),ge=c,Aa(0,!1),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(Yn,i)}catch{}return!0}finally{B.p=a,T.T=n,Ks(e,t)}}function Js(e,t,l){t=At(l,t),t=Ec(e.stateNode,t,2),e=hl(e,t,2),e!==null&&(Gn(e,2),Zt(e))}function ze(e,t,l){if(e.tag===3)Js(e,e,l);else for(;t!==null;){if(t.tag===3){Js(t,e,l);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(zl===null||!zl.has(n))){e=At(l,e),l=Po(2),n=hl(t,l,2),n!==null&&(Io(l,n,t,e),Gn(n,2),Zt(n));break}}t=t.return}}function Wc(e,t,l){var n=e.pingCache;if(n===null){n=e.pingCache=new Cg;var a=new Set;n.set(t,a)}else a=n.get(t),a===void 0&&(a=new Set,n.set(t,a));a.has(l)||(Yc=!0,a.add(l),e=Vg.bind(null,e,t,l),t.then(e,e))}function Vg(e,t,l){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&l,e.warmLanes&=~l,Me===e&&(re&l)===l&&(Be===4||Be===3&&(re&62914560)===re&&300>it()-Vc?(ge&2)===0&&_n(e,0):jc|=l,Un===re&&(Un=0)),Zt(e)}function Ws(e,t){t===0&&(t=Zr()),e=hn(e,t),e!==null&&(Gn(e,t),Zt(e))}function Zg(e){var t=e.memoizedState,l=0;t!==null&&(l=t.retryLane),Ws(e,l)}function Qg(e,t){var l=0;switch(e.tag){case 13:var n=e.stateNode,a=e.memoizedState;a!==null&&(l=a.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(f(314))}n!==null&&n.delete(t),Ws(e,l)}function Xg(e,t){return Ue(e,t)}var ji=null,Bn=null,Fc=!1,Gi=!1,$c=!1,Fl=0;function Zt(e){e!==Bn&&e.next===null&&(Bn===null?ji=Bn=e:Bn=Bn.next=e),Gi=!0,Fc||(Fc=!0,kg())}function Aa(e,t){if(!$c&&Gi){$c=!0;do for(var l=!1,n=ji;n!==null;){if(e!==0){var a=n.pendingLanes;if(a===0)var i=0;else{var u=n.suspendedLanes,c=n.pingedLanes;i=(1<<31-ht(42|e)+1)-1,i&=a&~(u&~c),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(l=!0,Is(n,i))}else i=re,i=ka(n,n===Me?i:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(i&3)===0||jn(n,i)||(l=!0,Is(n,i));n=n.next}while(l);$c=!1}}function Kg(){Fs()}function Fs(){Gi=Fc=!1;var e=0;Fl!==0&&(tm()&&(e=Fl),Fl=0);for(var t=it(),l=null,n=ji;n!==null;){var a=n.next,i=$s(n,t);i===0?(n.next=null,l===null?ji=a:l.next=a,a===null&&(Bn=l)):(l=n,(e!==0||(i&3)!==0)&&(Gi=!0)),n=a}Aa(e)}function $s(e,t){for(var l=e.suspendedLanes,n=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var u=31-ht(i),c=1<<u,o=a[u];o===-1?((c&l)===0||(c&n)!==0)&&(a[u]=bh(c,t)):o<=t&&(e.expiredLanes|=c),i&=~c}if(t=Me,l=re,l=ka(e,e===t?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,l===0||e===t&&(me===2||me===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&Je(n),e.callbackNode=null,e.callbackPriority=0;if((l&3)===0||jn(e,l)){if(t=l&-l,t===e.callbackPriority)return t;switch(n!==null&&Je(n),du(l)){case 2:case 8:l=jr;break;case 32:l=Qa;break;case 268435456:l=Gr;break;default:l=Qa}return n=Ps.bind(null,e),l=Ue(l,n),e.callbackPriority=t,e.callbackNode=l,t}return n!==null&&n!==null&&Je(n),e.callbackPriority=2,e.callbackNode=null,2}function Ps(e,t){if(Fe!==0&&Fe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var l=e.callbackNode;if(Yi()&&e.callbackNode!==l)return null;var n=re;return n=ka(e,e===Me?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(ws(e,n,t),$s(e,it()),e.callbackNode!=null&&e.callbackNode===l?Ps.bind(null,e):null)}function Is(e,t){if(Yi())return null;ws(e,t,!0)}function kg(){nm(function(){(ge&6)!==0?Ue(Yr,Kg):Fs()})}function Pc(){return Fl===0&&(Fl=Vr()),Fl}function ed(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Pa(""+e)}function td(e,t){var l=t.ownerDocument.createElement("input");return l.name=t.name,l.value=t.value,e.id&&l.setAttribute("form",e.id),t.parentNode.insertBefore(l,t),e=new FormData(e),l.parentNode.removeChild(l),e}function Jg(e,t,l,n,a){if(t==="submit"&&l&&l.stateNode===a){var i=ed((a[ct]||null).action),u=n.submitter;u&&(t=(t=u[ct]||null)?ed(t.formAction):u.getAttribute("formAction"),t!==null&&(i=t,u=null));var c=new li("action","action",null,n,a);e.push({event:c,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(Fl!==0){var o=u?td(a,u):new FormData(a);bc(l,{pending:!0,data:o,method:a.method,action:i},null,o)}}else typeof i=="function"&&(c.preventDefault(),o=u?td(a,u):new FormData(a),bc(l,{pending:!0,data:o,method:a.method,action:i},i,o))},currentTarget:a}]})}}for(var Ic=0;Ic<Cu.length;Ic++){var er=Cu[Ic],Wg=er.toLowerCase(),Fg=er[0].toUpperCase()+er.slice(1);xt(Wg,"on"+Fg)}xt(Bf,"onAnimationEnd"),xt(wf,"onAnimationIteration"),xt(Nf,"onAnimationStart"),xt("dblclick","onDoubleClick"),xt("focusin","onFocus"),xt("focusout","onBlur"),xt(hg,"onTransitionRun"),xt(gg,"onTransitionStart"),xt(mg,"onTransitionCancel"),xt(Lf,"onTransitionEnd"),ln("onMouseEnter",["mouseout","mouseover"]),ln("onMouseLeave",["mouseout","mouseover"]),ln("onPointerEnter",["pointerout","pointerover"]),ln("onPointerLeave",["pointerout","pointerover"]),wl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),wl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),wl("onBeforeInput",["compositionend","keypress","textInput","paste"]),wl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),wl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),wl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ma="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$g=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ma));function ld(e,t){t=(t&4)!==0;for(var l=0;l<e.length;l++){var n=e[l],a=n.event;n=n.listeners;e:{var i=void 0;if(t)for(var u=n.length-1;0<=u;u--){var c=n[u],o=c.instance,y=c.currentTarget;if(c=c.listener,o!==i&&a.isPropagationStopped())break e;i=c,a.currentTarget=y;try{i(a)}catch(E){Ui(E)}a.currentTarget=null,i=o}else for(u=0;u<n.length;u++){if(c=n[u],o=c.instance,y=c.currentTarget,c=c.listener,o!==i&&a.isPropagationStopped())break e;i=c,a.currentTarget=y;try{i(a)}catch(E){Ui(E)}a.currentTarget=null,i=o}}}}function ae(e,t){var l=t[hu];l===void 0&&(l=t[hu]=new Set);var n=e+"__bubble";l.has(n)||(nd(t,e,2,!1),l.add(n))}function tr(e,t,l){var n=0;t&&(n|=4),nd(l,e,n,t)}var Vi="_reactListening"+Math.random().toString(36).slice(2);function lr(e){if(!e[Vi]){e[Vi]=!0,Jr.forEach(function(l){l!=="selectionchange"&&($g.has(l)||tr(l,!1,e),tr(l,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Vi]||(t[Vi]=!0,tr("selectionchange",!1,t))}}function nd(e,t,l,n){switch(Dd(t)){case 2:var a=Am;break;case 8:a=Mm;break;default:a=vr}l=a.bind(null,t,l,e),a=void 0,!Au||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),n?a!==void 0?e.addEventListener(t,l,{capture:!0,passive:a}):e.addEventListener(t,l,!0):a!==void 0?e.addEventListener(t,l,{passive:a}):e.addEventListener(t,l,!1)}function nr(e,t,l,n,a){var i=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var u=n.tag;if(u===3||u===4){var c=n.stateNode.containerInfo;if(c===a)break;if(u===4)for(u=n.return;u!==null;){var o=u.tag;if((o===3||o===4)&&u.stateNode.containerInfo===a)return;u=u.return}for(;c!==null;){if(u=Il(c),u===null)return;if(o=u.tag,o===5||o===6||o===26||o===27){n=i=u;continue e}c=c.parentNode}}n=n.return}ff(function(){var y=i,E=zu(l),O=[];e:{var b=Cf.get(e);if(b!==void 0){var p=li,k=e;switch(e){case"keypress":if(ei(l)===0)break e;case"keydown":case"keyup":p=Xh;break;case"focusin":k="focus",p=Uu;break;case"focusout":k="blur",p=Uu;break;case"beforeblur":case"afterblur":p=Uu;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=df;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Bh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Jh;break;case Bf:case wf:case Nf:p=Lh;break;case Lf:p=Fh;break;case"scroll":case"scrollend":p=_h;break;case"wheel":p=Ph;break;case"copy":case"cut":case"paste":p=qh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=gf;break;case"toggle":case"beforetoggle":p=eg}var Q=(t&4)!==0,pe=!Q&&(e==="scroll"||e==="scrollend"),m=Q?b!==null?b+"Capture":null:b;Q=[];for(var h=y,v;h!==null;){var M=h;if(v=M.stateNode,M=M.tag,M!==5&&M!==26&&M!==27||v===null||m===null||(M=Qn(h,m),M!=null&&Q.push(Oa(h,M,v))),pe)break;h=h.return}0<Q.length&&(b=new p(b,k,null,l,E),O.push({event:b,listeners:Q}))}}if((t&7)===0){e:{if(b=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",b&&l!==Tu&&(k=l.relatedTarget||l.fromElement)&&(Il(k)||k[Pl]))break e;if((p||b)&&(b=E.window===E?E:(b=E.ownerDocument)?b.defaultView||b.parentWindow:window,p?(k=l.relatedTarget||l.toElement,p=y,k=k?Il(k):null,k!==null&&(pe=H(k),Q=k.tag,k!==pe||Q!==5&&Q!==27&&Q!==6)&&(k=null)):(p=null,k=y),p!==k)){if(Q=df,M="onMouseLeave",m="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(Q=gf,M="onPointerLeave",m="onPointerEnter",h="pointer"),pe=p==null?b:Zn(p),v=k==null?b:Zn(k),b=new Q(M,h+"leave",p,l,E),b.target=pe,b.relatedTarget=v,M=null,Il(E)===y&&(Q=new Q(m,h+"enter",k,l,E),Q.target=v,Q.relatedTarget=pe,M=Q),pe=M,p&&k)t:{for(Q=p,m=k,h=0,v=Q;v;v=wn(v))h++;for(v=0,M=m;M;M=wn(M))v++;for(;0<h-v;)Q=wn(Q),h--;for(;0<v-h;)m=wn(m),v--;for(;h--;){if(Q===m||m!==null&&Q===m.alternate)break t;Q=wn(Q),m=wn(m)}Q=null}else Q=null;p!==null&&ad(O,b,p,Q,!1),k!==null&&pe!==null&&ad(O,pe,k,Q,!0)}}e:{if(b=y?Zn(y):window,p=b.nodeName&&b.nodeName.toLowerCase(),p==="select"||p==="input"&&b.type==="file")var C=zf;else if(Sf(b))if(Ef)C=og;else{C=rg;var te=cg}else p=b.nodeName,!p||p.toLowerCase()!=="input"||b.type!=="checkbox"&&b.type!=="radio"?y&&Su(y.elementType)&&(C=zf):C=fg;if(C&&(C=C(e,y))){Tf(O,C,l,E);break e}te&&te(e,b,y),e==="focusout"&&y&&b.type==="number"&&y.memoizedProps.value!=null&&pu(b,"number",b.value)}switch(te=y?Zn(y):window,e){case"focusin":(Sf(te)||te.contentEditable==="true")&&(on=te,wu=y,Pn=null);break;case"focusout":Pn=wu=on=null;break;case"mousedown":Nu=!0;break;case"contextmenu":case"mouseup":case"dragend":Nu=!1,_f(O,l,E);break;case"selectionchange":if(dg)break;case"keydown":case"keyup":_f(O,l,E)}var Y;if(Ru)e:{switch(e){case"compositionstart":var X="onCompositionStart";break e;case"compositionend":X="onCompositionEnd";break e;case"compositionupdate":X="onCompositionUpdate";break e}X=void 0}else fn?bf(e,l)&&(X="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&(X="onCompositionStart");X&&(mf&&l.locale!=="ko"&&(fn||X!=="onCompositionStart"?X==="onCompositionEnd"&&fn&&(Y=of()):(fl=E,Mu="value"in fl?fl.value:fl.textContent,fn=!0)),te=Zi(y,X),0<te.length&&(X=new hf(X,e,null,l,E),O.push({event:X,listeners:te}),Y?X.data=Y:(Y=pf(l),Y!==null&&(X.data=Y)))),(Y=lg?ng(e,l):ag(e,l))&&(X=Zi(y,"onBeforeInput"),0<X.length&&(te=new hf("onBeforeInput","beforeinput",null,l,E),O.push({event:te,listeners:X}),te.data=Y)),Jg(O,e,y,l,E)}ld(O,t)})}function Oa(e,t,l){return{instance:e,listener:t,currentTarget:l}}function Zi(e,t){for(var l=t+"Capture",n=[];e!==null;){var a=e,i=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||i===null||(a=Qn(e,l),a!=null&&n.unshift(Oa(e,a,i)),a=Qn(e,t),a!=null&&n.push(Oa(e,a,i))),e.tag===3)return n;e=e.return}return[]}function wn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function ad(e,t,l,n,a){for(var i=t._reactName,u=[];l!==null&&l!==n;){var c=l,o=c.alternate,y=c.stateNode;if(c=c.tag,o!==null&&o===n)break;c!==5&&c!==26&&c!==27||y===null||(o=y,a?(y=Qn(l,i),y!=null&&u.unshift(Oa(l,y,o))):a||(y=Qn(l,i),y!=null&&u.push(Oa(l,y,o)))),l=l.return}u.length!==0&&e.push({event:t,listeners:u})}var Pg=/\r\n?/g,Ig=/\u0000|\uFFFD/g;function id(e){return(typeof e=="string"?e:""+e).replace(Pg,`
`).replace(Ig,"")}function ud(e,t){return t=id(t),id(e)===t}function Qi(){}function be(e,t,l,n,a,i){switch(l){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||un(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&un(e,""+n);break;case"className":Wa(e,"class",n);break;case"tabIndex":Wa(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Wa(e,l,n);break;case"style":cf(e,n,i);break;case"data":if(t!=="object"){Wa(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||l!=="href")){e.removeAttribute(l);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(l);break}n=Pa(""+n),e.setAttribute(l,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(l==="formAction"?(t!=="input"&&be(e,t,"name",a.name,a,null),be(e,t,"formEncType",a.formEncType,a,null),be(e,t,"formMethod",a.formMethod,a,null),be(e,t,"formTarget",a.formTarget,a,null)):(be(e,t,"encType",a.encType,a,null),be(e,t,"method",a.method,a,null),be(e,t,"target",a.target,a,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(l);break}n=Pa(""+n),e.setAttribute(l,n);break;case"onClick":n!=null&&(e.onclick=Qi);break;case"onScroll":n!=null&&ae("scroll",e);break;case"onScrollEnd":n!=null&&ae("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(f(61));if(l=n.__html,l!=null){if(a.children!=null)throw Error(f(60));e.innerHTML=l}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}l=Pa(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(l,""+n):e.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(l,""):e.removeAttribute(l);break;case"capture":case"download":n===!0?e.setAttribute(l,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(l,n):e.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(l,n):e.removeAttribute(l);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(l):e.setAttribute(l,n);break;case"popover":ae("beforetoggle",e),ae("toggle",e),Ja(e,"popover",n);break;case"xlinkActuate":Xt(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Xt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Xt(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Xt(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Xt(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Xt(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Ja(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=Hh.get(l)||l,Ja(e,l,n))}}function ar(e,t,l,n,a,i){switch(l){case"style":cf(e,n,i);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(f(61));if(l=n.__html,l!=null){if(a.children!=null)throw Error(f(60));e.innerHTML=l}}break;case"children":typeof n=="string"?un(e,n):(typeof n=="number"||typeof n=="bigint")&&un(e,""+n);break;case"onScroll":n!=null&&ae("scroll",e);break;case"onScrollEnd":n!=null&&ae("scrollend",e);break;case"onClick":n!=null&&(e.onclick=Qi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Wr.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(a=l.endsWith("Capture"),t=l.slice(2,a?l.length-7:void 0),i=e[ct]||null,i=i!=null?i[l]:null,typeof i=="function"&&e.removeEventListener(t,i,a),typeof n=="function")){typeof i!="function"&&i!==null&&(l in e?e[l]=null:e.hasAttribute(l)&&e.removeAttribute(l)),e.addEventListener(t,n,a);break e}l in e?e[l]=n:n===!0?e.setAttribute(l,""):Ja(e,l,n)}}}function $e(e,t,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ae("error",e),ae("load",e);var n=!1,a=!1,i;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];if(u!=null)switch(i){case"src":n=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(f(137,t));default:be(e,t,i,u,l,null)}}a&&be(e,t,"srcSet",l.srcSet,l,null),n&&be(e,t,"src",l.src,l,null);return;case"input":ae("invalid",e);var c=i=u=a=null,o=null,y=null;for(n in l)if(l.hasOwnProperty(n)){var E=l[n];if(E!=null)switch(n){case"name":a=E;break;case"type":u=E;break;case"checked":o=E;break;case"defaultChecked":y=E;break;case"value":i=E;break;case"defaultValue":c=E;break;case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(f(137,t));break;default:be(e,t,n,E,l,null)}}lf(e,i,c,o,y,u,a,!1),Fa(e);return;case"select":ae("invalid",e),n=u=i=null;for(a in l)if(l.hasOwnProperty(a)&&(c=l[a],c!=null))switch(a){case"value":i=c;break;case"defaultValue":u=c;break;case"multiple":n=c;default:be(e,t,a,c,l,null)}t=i,l=u,e.multiple=!!n,t!=null?an(e,!!n,t,!1):l!=null&&an(e,!!n,l,!0);return;case"textarea":ae("invalid",e),i=a=n=null;for(u in l)if(l.hasOwnProperty(u)&&(c=l[u],c!=null))switch(u){case"value":n=c;break;case"defaultValue":a=c;break;case"children":i=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(f(91));break;default:be(e,t,u,c,l,null)}af(e,n,a,i),Fa(e);return;case"option":for(o in l)if(l.hasOwnProperty(o)&&(n=l[o],n!=null))switch(o){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:be(e,t,o,n,l,null)}return;case"dialog":ae("beforetoggle",e),ae("toggle",e),ae("cancel",e),ae("close",e);break;case"iframe":case"object":ae("load",e);break;case"video":case"audio":for(n=0;n<Ma.length;n++)ae(Ma[n],e);break;case"image":ae("error",e),ae("load",e);break;case"details":ae("toggle",e);break;case"embed":case"source":case"link":ae("error",e),ae("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(y in l)if(l.hasOwnProperty(y)&&(n=l[y],n!=null))switch(y){case"children":case"dangerouslySetInnerHTML":throw Error(f(137,t));default:be(e,t,y,n,l,null)}return;default:if(Su(t)){for(E in l)l.hasOwnProperty(E)&&(n=l[E],n!==void 0&&ar(e,t,E,n,l,void 0));return}}for(c in l)l.hasOwnProperty(c)&&(n=l[c],n!=null&&be(e,t,c,n,l,null))}function em(e,t,l,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,i=null,u=null,c=null,o=null,y=null,E=null;for(p in l){var O=l[p];if(l.hasOwnProperty(p)&&O!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":o=O;default:n.hasOwnProperty(p)||be(e,t,p,null,n,O)}}for(var b in n){var p=n[b];if(O=l[b],n.hasOwnProperty(b)&&(p!=null||O!=null))switch(b){case"type":i=p;break;case"name":a=p;break;case"checked":y=p;break;case"defaultChecked":E=p;break;case"value":u=p;break;case"defaultValue":c=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(f(137,t));break;default:p!==O&&be(e,t,b,p,n,O)}}bu(e,u,c,o,y,E,i,a);return;case"select":p=u=c=b=null;for(i in l)if(o=l[i],l.hasOwnProperty(i)&&o!=null)switch(i){case"value":break;case"multiple":p=o;default:n.hasOwnProperty(i)||be(e,t,i,null,n,o)}for(a in n)if(i=n[a],o=l[a],n.hasOwnProperty(a)&&(i!=null||o!=null))switch(a){case"value":b=i;break;case"defaultValue":c=i;break;case"multiple":u=i;default:i!==o&&be(e,t,a,i,n,o)}t=c,l=u,n=p,b!=null?an(e,!!l,b,!1):!!n!=!!l&&(t!=null?an(e,!!l,t,!0):an(e,!!l,l?[]:"",!1));return;case"textarea":p=b=null;for(c in l)if(a=l[c],l.hasOwnProperty(c)&&a!=null&&!n.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:be(e,t,c,null,n,a)}for(u in n)if(a=n[u],i=l[u],n.hasOwnProperty(u)&&(a!=null||i!=null))switch(u){case"value":b=a;break;case"defaultValue":p=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(f(91));break;default:a!==i&&be(e,t,u,a,n,i)}nf(e,b,p);return;case"option":for(var k in l)if(b=l[k],l.hasOwnProperty(k)&&b!=null&&!n.hasOwnProperty(k))switch(k){case"selected":e.selected=!1;break;default:be(e,t,k,null,n,b)}for(o in n)if(b=n[o],p=l[o],n.hasOwnProperty(o)&&b!==p&&(b!=null||p!=null))switch(o){case"selected":e.selected=b&&typeof b!="function"&&typeof b!="symbol";break;default:be(e,t,o,b,n,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Q in l)b=l[Q],l.hasOwnProperty(Q)&&b!=null&&!n.hasOwnProperty(Q)&&be(e,t,Q,null,n,b);for(y in n)if(b=n[y],p=l[y],n.hasOwnProperty(y)&&b!==p&&(b!=null||p!=null))switch(y){case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(f(137,t));break;default:be(e,t,y,b,n,p)}return;default:if(Su(t)){for(var pe in l)b=l[pe],l.hasOwnProperty(pe)&&b!==void 0&&!n.hasOwnProperty(pe)&&ar(e,t,pe,void 0,n,b);for(E in n)b=n[E],p=l[E],!n.hasOwnProperty(E)||b===p||b===void 0&&p===void 0||ar(e,t,E,b,n,p);return}}for(var m in l)b=l[m],l.hasOwnProperty(m)&&b!=null&&!n.hasOwnProperty(m)&&be(e,t,m,null,n,b);for(O in n)b=n[O],p=l[O],!n.hasOwnProperty(O)||b===p||b==null&&p==null||be(e,t,O,b,n,p)}var ir=null,ur=null;function Xi(e){return e.nodeType===9?e:e.ownerDocument}function cd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function rd(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function cr(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var rr=null;function tm(){var e=window.event;return e&&e.type==="popstate"?e===rr?!1:(rr=e,!0):(rr=null,!1)}var fd=typeof setTimeout=="function"?setTimeout:void 0,lm=typeof clearTimeout=="function"?clearTimeout:void 0,od=typeof Promise=="function"?Promise:void 0,nm=typeof queueMicrotask=="function"?queueMicrotask:typeof od<"u"?function(e){return od.resolve(null).then(e).catch(am)}:fd;function am(e){setTimeout(function(){throw e})}function Ml(e){return e==="head"}function sd(e,t){var l=t,n=0,a=0;do{var i=l.nextSibling;if(e.removeChild(l),i&&i.nodeType===8)if(l=i.data,l==="/$"){if(0<n&&8>n){l=n;var u=e.ownerDocument;if(l&1&&Da(u.documentElement),l&2&&Da(u.body),l&4)for(l=u.head,Da(l),u=l.firstChild;u;){var c=u.nextSibling,o=u.nodeName;u[Vn]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&u.rel.toLowerCase()==="stylesheet"||l.removeChild(u),u=c}}if(a===0){e.removeChild(i),Na(t);return}a--}else l==="$"||l==="$?"||l==="$!"?a++:n=l.charCodeAt(0)-48;else n=0;l=i}while(l);Na(t)}function fr(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var l=t;switch(t=t.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":fr(l),gu(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}e.removeChild(l)}}function im(e,t,l,n){for(;e.nodeType===1;){var a=l;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[Vn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=wt(e.nextSibling),e===null)break}return null}function um(e,t,l){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!l||(e=wt(e.nextSibling),e===null))return null;return e}function or(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function cm(e,t){var l=e.ownerDocument;if(e.data!=="$?"||l.readyState==="complete")t();else{var n=function(){t(),l.removeEventListener("DOMContentLoaded",n)};l.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function wt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var sr=null;function dd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"){if(t===0)return e;t--}else l==="/$"&&t++}e=e.previousSibling}return null}function hd(e,t,l){switch(t=Xi(l),e){case"html":if(e=t.documentElement,!e)throw Error(f(452));return e;case"head":if(e=t.head,!e)throw Error(f(453));return e;case"body":if(e=t.body,!e)throw Error(f(454));return e;default:throw Error(f(451))}}function Da(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);gu(e)}var Rt=new Map,gd=new Set;function Ki(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var il=B.d;B.d={f:rm,r:fm,D:om,C:sm,L:dm,m:hm,X:mm,S:gm,M:vm};function rm(){var e=il.f(),t=Ci();return e||t}function fm(e){var t=en(e);t!==null&&t.tag===5&&t.type==="form"?wo(t):il.r(e)}var Nn=typeof document>"u"?null:document;function md(e,t,l){var n=Nn;if(n&&typeof t=="string"&&t){var a=Et(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof l=="string"&&(a+='[crossorigin="'+l+'"]'),gd.has(a)||(gd.add(a),e={rel:e,crossOrigin:l,href:t},n.querySelector(a)===null&&(t=n.createElement("link"),$e(t,"link",e),Ze(t),n.head.appendChild(t)))}}function om(e){il.D(e),md("dns-prefetch",e,null)}function sm(e,t){il.C(e,t),md("preconnect",e,t)}function dm(e,t,l){il.L(e,t,l);var n=Nn;if(n&&e&&t){var a='link[rel="preload"][as="'+Et(t)+'"]';t==="image"&&l&&l.imageSrcSet?(a+='[imagesrcset="'+Et(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(a+='[imagesizes="'+Et(l.imageSizes)+'"]')):a+='[href="'+Et(e)+'"]';var i=a;switch(t){case"style":i=Ln(e);break;case"script":i=Cn(e)}Rt.has(i)||(e=N({rel:"preload",href:t==="image"&&l&&l.imageSrcSet?void 0:e,as:t},l),Rt.set(i,e),n.querySelector(a)!==null||t==="style"&&n.querySelector(Ua(i))||t==="script"&&n.querySelector(Ha(i))||(t=n.createElement("link"),$e(t,"link",e),Ze(t),n.head.appendChild(t)))}}function hm(e,t){il.m(e,t);var l=Nn;if(l&&e){var n=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+Et(n)+'"][href="'+Et(e)+'"]',i=a;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Cn(e)}if(!Rt.has(i)&&(e=N({rel:"modulepreload",href:e},t),Rt.set(i,e),l.querySelector(a)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(Ha(i)))return}n=l.createElement("link"),$e(n,"link",e),Ze(n),l.head.appendChild(n)}}}function gm(e,t,l){il.S(e,t,l);var n=Nn;if(n&&e){var a=tn(n).hoistableStyles,i=Ln(e);t=t||"default";var u=a.get(i);if(!u){var c={loading:0,preload:null};if(u=n.querySelector(Ua(i)))c.loading=5;else{e=N({rel:"stylesheet",href:e,"data-precedence":t},l),(l=Rt.get(i))&&dr(e,l);var o=u=n.createElement("link");Ze(o),$e(o,"link",e),o._p=new Promise(function(y,E){o.onload=y,o.onerror=E}),o.addEventListener("load",function(){c.loading|=1}),o.addEventListener("error",function(){c.loading|=2}),c.loading|=4,ki(u,t,n)}u={type:"stylesheet",instance:u,count:1,state:c},a.set(i,u)}}}function mm(e,t){il.X(e,t);var l=Nn;if(l&&e){var n=tn(l).hoistableScripts,a=Cn(e),i=n.get(a);i||(i=l.querySelector(Ha(a)),i||(e=N({src:e,async:!0},t),(t=Rt.get(a))&&hr(e,t),i=l.createElement("script"),Ze(i),$e(i,"link",e),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},n.set(a,i))}}function vm(e,t){il.M(e,t);var l=Nn;if(l&&e){var n=tn(l).hoistableScripts,a=Cn(e),i=n.get(a);i||(i=l.querySelector(Ha(a)),i||(e=N({src:e,async:!0,type:"module"},t),(t=Rt.get(a))&&hr(e,t),i=l.createElement("script"),Ze(i),$e(i,"link",e),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},n.set(a,i))}}function vd(e,t,l,n){var a=(a=W.current)?Ki(a):null;if(!a)throw Error(f(446));switch(e){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(t=Ln(l.href),l=tn(a).hoistableStyles,n=l.get(t),n||(n={type:"style",instance:null,count:0,state:null},l.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){e=Ln(l.href);var i=tn(a).hoistableStyles,u=i.get(e);if(u||(a=a.ownerDocument||a,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,u),(i=a.querySelector(Ua(e)))&&!i._p&&(u.instance=i,u.state.loading=5),Rt.has(e)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Rt.set(e,l),i||ym(a,e,l,u.state))),t&&n===null)throw Error(f(528,""));return u}if(t&&n!==null)throw Error(f(529,""));return null;case"script":return t=l.async,l=l.src,typeof l=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Cn(l),l=tn(a).hoistableScripts,n=l.get(t),n||(n={type:"script",instance:null,count:0,state:null},l.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(f(444,e))}}function Ln(e){return'href="'+Et(e)+'"'}function Ua(e){return'link[rel="stylesheet"]['+e+"]"}function yd(e){return N({},e,{"data-precedence":e.precedence,precedence:null})}function ym(e,t,l,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),$e(t,"link",l),Ze(t),e.head.appendChild(t))}function Cn(e){return'[src="'+Et(e)+'"]'}function Ha(e){return"script[async]"+e}function bd(e,t,l){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+Et(l.href)+'"]');if(n)return t.instance=n,Ze(n),n;var a=N({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),Ze(n),$e(n,"style",a),ki(n,l.precedence,e),t.instance=n;case"stylesheet":a=Ln(l.href);var i=e.querySelector(Ua(a));if(i)return t.state.loading|=4,t.instance=i,Ze(i),i;n=yd(l),(a=Rt.get(a))&&dr(n,a),i=(e.ownerDocument||e).createElement("link"),Ze(i);var u=i;return u._p=new Promise(function(c,o){u.onload=c,u.onerror=o}),$e(i,"link",n),t.state.loading|=4,ki(i,l.precedence,e),t.instance=i;case"script":return i=Cn(l.src),(a=e.querySelector(Ha(i)))?(t.instance=a,Ze(a),a):(n=l,(a=Rt.get(i))&&(n=N({},l),hr(n,a)),e=e.ownerDocument||e,a=e.createElement("script"),Ze(a),$e(a,"link",n),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(f(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,ki(n,l.precedence,e));return t.instance}function ki(e,t,l){for(var n=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=n.length?n[n.length-1]:null,i=a,u=0;u<n.length;u++){var c=n[u];if(c.dataset.precedence===t)i=c;else if(i!==a)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=l.nodeType===9?l.head:l,t.insertBefore(e,t.firstChild))}function dr(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function hr(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ji=null;function pd(e,t,l){if(Ji===null){var n=new Map,a=Ji=new Map;a.set(l,n)}else a=Ji,n=a.get(l),n||(n=new Map,a.set(l,n));if(n.has(e))return n;for(n.set(e,null),l=l.getElementsByTagName(e),a=0;a<l.length;a++){var i=l[a];if(!(i[Vn]||i[Ie]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(t)||"";u=e+u;var c=n.get(u);c?c.push(i):n.set(u,[i])}}return n}function Sd(e,t,l){e=e.ownerDocument||e,e.head.insertBefore(l,t==="title"?e.querySelector("head > title"):null)}function bm(e,t,l){if(l===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Td(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Ra=null;function pm(){}function Sm(e,t,l){if(Ra===null)throw Error(f(475));var n=Ra;if(t.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var a=Ln(l.href),i=e.querySelector(Ua(a));if(i){e=i._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(n.count++,n=Wi.bind(n),e.then(n,n)),t.state.loading|=4,t.instance=i,Ze(i);return}i=e.ownerDocument||e,l=yd(l),(a=Rt.get(a))&&dr(l,a),i=i.createElement("link"),Ze(i);var u=i;u._p=new Promise(function(c,o){u.onload=c,u.onerror=o}),$e(i,"link",l),t.instance=i}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(n.count++,t=Wi.bind(n),e.addEventListener("load",t),e.addEventListener("error",t))}}function Tm(){if(Ra===null)throw Error(f(475));var e=Ra;return e.stylesheets&&e.count===0&&gr(e,e.stylesheets),0<e.count?function(t){var l=setTimeout(function(){if(e.stylesheets&&gr(e,e.stylesheets),e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(l)}}:null}function Wi(){if(this.count--,this.count===0){if(this.stylesheets)gr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Fi=null;function gr(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Fi=new Map,t.forEach(zm,e),Fi=null,Wi.call(e))}function zm(e,t){if(!(t.state.loading&4)){var l=Fi.get(e);if(l)var n=l.get(null);else{l=new Map,Fi.set(e,l);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<a.length;i++){var u=a[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(l.set(u.dataset.precedence,u),n=u)}n&&l.set(null,n)}a=t.instance,u=a.getAttribute("data-precedence"),i=l.get(u)||n,i===n&&l.set(null,a),l.set(u,a),this.count++,n=Wi.bind(this),a.addEventListener("load",n),a.addEventListener("error",n),i?i.parentNode.insertBefore(a,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var _a={$$typeof:ue,Provider:null,Consumer:null,_currentValue:G,_currentValue2:G,_threadCount:0};function Em(e,t,l,n,a,i,u,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ou(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ou(0),this.hiddenUpdates=ou(null),this.identifierPrefix=n,this.onUncaughtError=a,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function zd(e,t,l,n,a,i,u,c,o,y,E,O){return e=new Em(e,t,l,u,c,o,y,O),t=1,i===!0&&(t|=24),i=mt(3,null,null,t),e.current=i,i.stateNode=e,t=Wu(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:n,isDehydrated:l,cache:t},Iu(i),e}function Ed(e){return e?(e=gn,e):gn}function Ad(e,t,l,n,a,i){a=Ed(a),n.context===null?n.context=a:n.pendingContext=a,n=dl(t),n.payload={element:l},i=i===void 0?null:i,i!==null&&(n.callback=i),l=hl(e,n,t),l!==null&&(St(l,e,t),ca(l,e,t))}function Md(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<t?l:t}}function mr(e,t){Md(e,t),(e=e.alternate)&&Md(e,t)}function Od(e){if(e.tag===13){var t=hn(e,67108864);t!==null&&St(t,e,67108864),mr(e,67108864)}}var $i=!0;function Am(e,t,l,n){var a=T.T;T.T=null;var i=B.p;try{B.p=2,vr(e,t,l,n)}finally{B.p=i,T.T=a}}function Mm(e,t,l,n){var a=T.T;T.T=null;var i=B.p;try{B.p=8,vr(e,t,l,n)}finally{B.p=i,T.T=a}}function vr(e,t,l,n){if($i){var a=yr(n);if(a===null)nr(e,t,n,Pi,l),Ud(e,n);else if(Dm(a,e,t,l,n))n.stopPropagation();else if(Ud(e,n),t&4&&-1<Om.indexOf(e)){for(;a!==null;){var i=en(a);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=Bl(i.pendingLanes);if(u!==0){var c=i;for(c.pendingLanes|=2,c.entangledLanes|=2;u;){var o=1<<31-ht(u);c.entanglements[1]|=o,u&=~o}Zt(i),(ge&6)===0&&(Ni=it()+500,Aa(0))}}break;case 13:c=hn(i,2),c!==null&&St(c,i,2),Ci(),mr(i,2)}if(i=yr(n),i===null&&nr(e,t,n,Pi,l),i===a)break;a=i}a!==null&&n.stopPropagation()}else nr(e,t,n,null,l)}}function yr(e){return e=zu(e),br(e)}var Pi=null;function br(e){if(Pi=null,e=Il(e),e!==null){var t=H(e);if(t===null)e=null;else{var l=t.tag;if(l===13){if(e=L(t),e!==null)return e;e=null}else if(l===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Pi=e,null}function Dd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(sh()){case Yr:return 2;case jr:return 8;case Qa:case dh:return 32;case Gr:return 268435456;default:return 32}default:return 32}}var pr=!1,Ol=null,Dl=null,Ul=null,xa=new Map,Ba=new Map,Hl=[],Om="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ud(e,t){switch(e){case"focusin":case"focusout":Ol=null;break;case"dragenter":case"dragleave":Dl=null;break;case"mouseover":case"mouseout":Ul=null;break;case"pointerover":case"pointerout":xa.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ba.delete(t.pointerId)}}function wa(e,t,l,n,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:l,eventSystemFlags:n,nativeEvent:i,targetContainers:[a]},t!==null&&(t=en(t),t!==null&&Od(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function Dm(e,t,l,n,a){switch(t){case"focusin":return Ol=wa(Ol,e,t,l,n,a),!0;case"dragenter":return Dl=wa(Dl,e,t,l,n,a),!0;case"mouseover":return Ul=wa(Ul,e,t,l,n,a),!0;case"pointerover":var i=a.pointerId;return xa.set(i,wa(xa.get(i)||null,e,t,l,n,a)),!0;case"gotpointercapture":return i=a.pointerId,Ba.set(i,wa(Ba.get(i)||null,e,t,l,n,a)),!0}return!1}function Hd(e){var t=Il(e.target);if(t!==null){var l=H(t);if(l!==null){if(t=l.tag,t===13){if(t=L(l),t!==null){e.blockedOn=t,Sh(e.priority,function(){if(l.tag===13){var n=pt();n=su(n);var a=hn(l,n);a!==null&&St(a,l,n),mr(l,n)}});return}}else if(t===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ii(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var l=yr(e.nativeEvent);if(l===null){l=e.nativeEvent;var n=new l.constructor(l.type,l);Tu=n,l.target.dispatchEvent(n),Tu=null}else return t=en(l),t!==null&&Od(t),e.blockedOn=l,!1;t.shift()}return!0}function Rd(e,t,l){Ii(e)&&l.delete(t)}function Um(){pr=!1,Ol!==null&&Ii(Ol)&&(Ol=null),Dl!==null&&Ii(Dl)&&(Dl=null),Ul!==null&&Ii(Ul)&&(Ul=null),xa.forEach(Rd),Ba.forEach(Rd)}function eu(e,t){e.blockedOn===t&&(e.blockedOn=null,pr||(pr=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Um)))}var tu=null;function _d(e){tu!==e&&(tu=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){tu===e&&(tu=null);for(var t=0;t<e.length;t+=3){var l=e[t],n=e[t+1],a=e[t+2];if(typeof n!="function"){if(br(n||l)===null)continue;break}var i=en(l);i!==null&&(e.splice(t,3),t-=3,bc(i,{pending:!0,data:a,method:l.method,action:n},n,a))}}))}function Na(e){function t(o){return eu(o,e)}Ol!==null&&eu(Ol,e),Dl!==null&&eu(Dl,e),Ul!==null&&eu(Ul,e),xa.forEach(t),Ba.forEach(t);for(var l=0;l<Hl.length;l++){var n=Hl[l];n.blockedOn===e&&(n.blockedOn=null)}for(;0<Hl.length&&(l=Hl[0],l.blockedOn===null);)Hd(l),l.blockedOn===null&&Hl.shift();if(l=(e.ownerDocument||e).$$reactFormReplay,l!=null)for(n=0;n<l.length;n+=3){var a=l[n],i=l[n+1],u=a[ct]||null;if(typeof i=="function")u||_d(l);else if(u){var c=null;if(i&&i.hasAttribute("formAction")){if(a=i,u=i[ct]||null)c=u.formAction;else if(br(a)!==null)continue}else c=u.action;typeof c=="function"?l[n+1]=c:(l.splice(n,3),n-=3),_d(l)}}}function Sr(e){this._internalRoot=e}lu.prototype.render=Sr.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(f(409));var l=t.current,n=pt();Ad(l,n,e,t,null,null)},lu.prototype.unmount=Sr.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ad(e.current,2,null,e,null,null),Ci(),t[Pl]=null}};function lu(e){this._internalRoot=e}lu.prototype.unstable_scheduleHydration=function(e){if(e){var t=Kr();e={blockedOn:null,target:e,priority:t};for(var l=0;l<Hl.length&&t!==0&&t<Hl[l].priority;l++);Hl.splice(l,0,e),l===0&&Hd(e)}};var xd=s.version;if(xd!=="19.1.0")throw Error(f(527,xd,"19.1.0"));B.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(f(188)):(e=Object.keys(e).join(","),Error(f(268,e)));return e=D(t),e=e!==null?z(e):null,e=e===null?null:e.stateNode,e};var Hm={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:T,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nu.isDisabled&&nu.supportsFiber)try{Yn=nu.inject(Hm),dt=nu}catch{}}return Ca.createRoot=function(e,t){if(!S(e))throw Error(f(299));var l=!1,n="",a=Jo,i=Wo,u=Fo,c=null;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(c=t.unstable_transitionCallbacks)),t=zd(e,1,!1,null,null,l,n,a,i,u,c,null),e[Pl]=t.current,lr(e),new Sr(t)},Ca.hydrateRoot=function(e,t,l){if(!S(e))throw Error(f(299));var n=!1,a="",i=Jo,u=Wo,c=Fo,o=null,y=null;return l!=null&&(l.unstable_strictMode===!0&&(n=!0),l.identifierPrefix!==void 0&&(a=l.identifierPrefix),l.onUncaughtError!==void 0&&(i=l.onUncaughtError),l.onCaughtError!==void 0&&(u=l.onCaughtError),l.onRecoverableError!==void 0&&(c=l.onRecoverableError),l.unstable_transitionCallbacks!==void 0&&(o=l.unstable_transitionCallbacks),l.formState!==void 0&&(y=l.formState)),t=zd(e,1,!0,t,l??null,n,a,i,u,c,o,y),t.context=Ed(null),l=t.current,n=pt(),n=su(n),a=dl(n),a.callback=null,hl(l,a,n),l=n,t.current.lanes=l,Gn(t,l),Zt(t),e[Pl]=t.current,lr(e),new lu(t)},Ca.version="19.1.0",Ca}var Vd;function Ym(){if(Vd)return Er.exports;Vd=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(s){console.error(s)}}return r(),Er.exports=qm(),Er.exports}var jm=Ym();function Gm(r,s,g){return s in r?Object.defineProperty(r,s,{value:g,enumerable:!0,configurable:!0,writable:!0}):r[s]=g,r}function Zd(r,s){var g=Object.keys(r);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(r);s&&(f=f.filter(function(S){return Object.getOwnPropertyDescriptor(r,S).enumerable})),g.push.apply(g,f)}return g}function Qd(r){for(var s=1;s<arguments.length;s++){var g=arguments[s]!=null?arguments[s]:{};s%2?Zd(Object(g),!0).forEach(function(f){Gm(r,f,g[f])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(g)):Zd(Object(g)).forEach(function(f){Object.defineProperty(r,f,Object.getOwnPropertyDescriptor(g,f))})}return r}function Vm(r,s){if(r==null)return{};var g={},f=Object.keys(r),S,H;for(H=0;H<f.length;H++)S=f[H],!(s.indexOf(S)>=0)&&(g[S]=r[S]);return g}function Zm(r,s){if(r==null)return{};var g=Vm(r,s),f,S;if(Object.getOwnPropertySymbols){var H=Object.getOwnPropertySymbols(r);for(S=0;S<H.length;S++)f=H[S],!(s.indexOf(f)>=0)&&Object.prototype.propertyIsEnumerable.call(r,f)&&(g[f]=r[f])}return g}function Qm(r,s){return Xm(r)||Km(r,s)||km(r,s)||Jm()}function Xm(r){if(Array.isArray(r))return r}function Km(r,s){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(r)))){var g=[],f=!0,S=!1,H=void 0;try{for(var L=r[Symbol.iterator](),Z;!(f=(Z=L.next()).done)&&(g.push(Z.value),!(s&&g.length===s));f=!0);}catch(D){S=!0,H=D}finally{try{!f&&L.return!=null&&L.return()}finally{if(S)throw H}}return g}}function km(r,s){if(r){if(typeof r=="string")return Xd(r,s);var g=Object.prototype.toString.call(r).slice(8,-1);if(g==="Object"&&r.constructor&&(g=r.constructor.name),g==="Map"||g==="Set")return Array.from(r);if(g==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(g))return Xd(r,s)}}function Xd(r,s){(s==null||s>r.length)&&(s=r.length);for(var g=0,f=new Array(s);g<s;g++)f[g]=r[g];return f}function Jm(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Wm(r,s,g){return s in r?Object.defineProperty(r,s,{value:g,enumerable:!0,configurable:!0,writable:!0}):r[s]=g,r}function Kd(r,s){var g=Object.keys(r);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(r);s&&(f=f.filter(function(S){return Object.getOwnPropertyDescriptor(r,S).enumerable})),g.push.apply(g,f)}return g}function kd(r){for(var s=1;s<arguments.length;s++){var g=arguments[s]!=null?arguments[s]:{};s%2?Kd(Object(g),!0).forEach(function(f){Wm(r,f,g[f])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(g)):Kd(Object(g)).forEach(function(f){Object.defineProperty(r,f,Object.getOwnPropertyDescriptor(g,f))})}return r}function Fm(){for(var r=arguments.length,s=new Array(r),g=0;g<r;g++)s[g]=arguments[g];return function(f){return s.reduceRight(function(S,H){return H(S)},f)}}function Ya(r){return function s(){for(var g=this,f=arguments.length,S=new Array(f),H=0;H<f;H++)S[H]=arguments[H];return S.length>=r.length?r.apply(this,S):function(){for(var L=arguments.length,Z=new Array(L),D=0;D<L;D++)Z[D]=arguments[D];return s.apply(g,[].concat(S,Z))}}}function ru(r){return{}.toString.call(r).includes("Object")}function $m(r){return!Object.keys(r).length}function Ga(r){return typeof r=="function"}function Pm(r,s){return Object.prototype.hasOwnProperty.call(r,s)}function Im(r,s){return ru(s)||xl("changeType"),Object.keys(s).some(function(g){return!Pm(r,g)})&&xl("changeField"),s}function ev(r){Ga(r)||xl("selectorType")}function tv(r){Ga(r)||ru(r)||xl("handlerType"),ru(r)&&Object.values(r).some(function(s){return!Ga(s)})&&xl("handlersType")}function lv(r){r||xl("initialIsRequired"),ru(r)||xl("initialType"),$m(r)&&xl("initialContent")}function nv(r,s){throw new Error(r[s]||r.default)}var av={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},xl=Ya(nv)(av),au={changes:Im,selector:ev,handler:tv,initial:lv};function iv(r){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};au.initial(r),au.handler(s);var g={current:r},f=Ya(rv)(g,s),S=Ya(cv)(g),H=Ya(au.changes)(r),L=Ya(uv)(g);function Z(){var z=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(N){return N};return au.selector(z),z(g.current)}function D(z){Fm(f,S,H,L)(z)}return[Z,D]}function uv(r,s){return Ga(s)?s(r.current):s}function cv(r,s){return r.current=kd(kd({},r.current),s),s}function rv(r,s,g){return Ga(s)?s(r.current):Object.keys(g).forEach(function(f){var S;return(S=s[f])===null||S===void 0?void 0:S.call(s,r.current[f])}),g}var fv={create:iv},ov={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs"}};function sv(r){return function s(){for(var g=this,f=arguments.length,S=new Array(f),H=0;H<f;H++)S[H]=arguments[H];return S.length>=r.length?r.apply(this,S):function(){for(var L=arguments.length,Z=new Array(L),D=0;D<L;D++)Z[D]=arguments[D];return s.apply(g,[].concat(S,Z))}}}function dv(r){return{}.toString.call(r).includes("Object")}function hv(r){return r||Jd("configIsRequired"),dv(r)||Jd("configType"),r.urls?(gv(),{paths:{vs:r.urls.monacoBase}}):r}function gv(){console.warn(lh.deprecation)}function mv(r,s){throw new Error(r[s]||r.default)}var lh={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},Jd=sv(mv)(lh),vv={config:hv},yv=function(){for(var s=arguments.length,g=new Array(s),f=0;f<s;f++)g[f]=arguments[f];return function(S){return g.reduceRight(function(H,L){return L(H)},S)}};function nh(r,s){return Object.keys(s).forEach(function(g){s[g]instanceof Object&&r[g]&&Object.assign(s[g],nh(r[g],s[g]))}),Qd(Qd({},r),s)}var bv={type:"cancelation",msg:"operation is manually canceled"};function Dr(r){var s=!1,g=new Promise(function(f,S){r.then(function(H){return s?S(bv):f(H)}),r.catch(S)});return g.cancel=function(){return s=!0},g}var pv=fv.create({config:ov,isInitialized:!1,resolve:null,reject:null,monaco:null}),ah=Qm(pv,2),Za=ah[0],fu=ah[1];function Sv(r){var s=vv.config(r),g=s.monaco,f=Zm(s,["monaco"]);fu(function(S){return{config:nh(S.config,f),monaco:g}})}function Tv(){var r=Za(function(s){var g=s.monaco,f=s.isInitialized,S=s.resolve;return{monaco:g,isInitialized:f,resolve:S}});if(!r.isInitialized){if(fu({isInitialized:!0}),r.monaco)return r.resolve(r.monaco),Dr(Ur);if(window.monaco&&window.monaco.editor)return ih(window.monaco),r.resolve(window.monaco),Dr(Ur);yv(zv,Av)(Mv)}return Dr(Ur)}function zv(r){return document.body.appendChild(r)}function Ev(r){var s=document.createElement("script");return r&&(s.src=r),s}function Av(r){var s=Za(function(f){var S=f.config,H=f.reject;return{config:S,reject:H}}),g=Ev("".concat(s.config.paths.vs,"/loader.js"));return g.onload=function(){return r()},g.onerror=s.reject,g}function Mv(){var r=Za(function(g){var f=g.config,S=g.resolve,H=g.reject;return{config:f,resolve:S,reject:H}}),s=window.require;s.config(r.config),s(["vs/editor/editor.main"],function(g){ih(g),r.resolve(g)},function(g){r.reject(g)})}function ih(r){Za().monaco||fu({monaco:r})}function Ov(){return Za(function(r){var s=r.monaco;return s})}var Ur=new Promise(function(r,s){return fu({resolve:r,reject:s})}),uh={config:Sv,init:Tv,__getMonacoInstance:Ov},Dv={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},Hr=Dv,Uv={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},Hv=Uv;function Rv({children:r}){return _l.createElement("div",{style:Hv.container},r)}var _v=Rv,xv=_v;function Bv({width:r,height:s,isEditorReady:g,loading:f,_ref:S,className:H,wrapperProps:L}){return _l.createElement("section",{style:{...Hr.wrapper,width:r,height:s},...L},!g&&_l.createElement(xv,null,f),_l.createElement("div",{ref:S,style:{...Hr.fullWidth,...!g&&Hr.hide},className:H}))}var wv=Bv,ch=P.memo(wv);function Nv(r){P.useEffect(r,[])}var rh=Nv;function Lv(r,s,g=!0){let f=P.useRef(!0);P.useEffect(f.current||!g?()=>{f.current=!1}:r,s)}var Tt=Lv;function ja(){}function qn(r,s,g,f){return Cv(r,f)||qv(r,s,g,f)}function Cv(r,s){return r.editor.getModel(fh(r,s))}function qv(r,s,g,f){return r.editor.createModel(s,g,f?fh(r,f):void 0)}function fh(r,s){return r.Uri.parse(s)}function Yv({original:r,modified:s,language:g,originalLanguage:f,modifiedLanguage:S,originalModelPath:H,modifiedModelPath:L,keepCurrentOriginalModel:Z=!1,keepCurrentModifiedModel:D=!1,theme:z="light",loading:N="Loading...",options:K={},height:F="100%",width:Se="100%",className:Oe,wrapperProps:Te={},beforeMount:Ee=ja,onMount:ke=ja}){let[ee,ue]=P.useState(!1),[De,V]=P.useState(!0),oe=P.useRef(null),le=P.useRef(null),Ae=P.useRef(null),he=P.useRef(ke),ie=P.useRef(Ee),Ye=P.useRef(!1);rh(()=>{let J=uh.init();return J.then(T=>(le.current=T)&&V(!1)).catch(T=>T?.type!=="cancelation"&&console.error("Monaco initialization: error:",T)),()=>oe.current?nt():J.cancel()}),Tt(()=>{if(oe.current&&le.current){let J=oe.current.getOriginalEditor(),T=qn(le.current,r||"",f||g||"text",H||"");T!==J.getModel()&&J.setModel(T)}},[H],ee),Tt(()=>{if(oe.current&&le.current){let J=oe.current.getModifiedEditor(),T=qn(le.current,s||"",S||g||"text",L||"");T!==J.getModel()&&J.setModel(T)}},[L],ee),Tt(()=>{let J=oe.current.getModifiedEditor();J.getOption(le.current.editor.EditorOption.readOnly)?J.setValue(s||""):s!==J.getValue()&&(J.executeEdits("",[{range:J.getModel().getFullModelRange(),text:s||"",forceMoveMarkers:!0}]),J.pushUndoStop())},[s],ee),Tt(()=>{oe.current?.getModel()?.original.setValue(r||"")},[r],ee),Tt(()=>{let{original:J,modified:T}=oe.current.getModel();le.current.editor.setModelLanguage(J,f||g||"text"),le.current.editor.setModelLanguage(T,S||g||"text")},[g,f,S],ee),Tt(()=>{le.current?.editor.setTheme(z)},[z],ee),Tt(()=>{oe.current?.updateOptions(K)},[K],ee);let Re=P.useCallback(()=>{if(!le.current)return;ie.current(le.current);let J=qn(le.current,r||"",f||g||"text",H||""),T=qn(le.current,s||"",S||g||"text",L||"");oe.current?.setModel({original:J,modified:T})},[g,s,S,r,f,H,L]),Ve=P.useCallback(()=>{!Ye.current&&Ae.current&&(oe.current=le.current.editor.createDiffEditor(Ae.current,{automaticLayout:!0,...K}),Re(),le.current?.editor.setTheme(z),ue(!0),Ye.current=!0)},[K,z,Re]);P.useEffect(()=>{ee&&he.current(oe.current,le.current)},[ee]),P.useEffect(()=>{!De&&!ee&&Ve()},[De,ee,Ve]);function nt(){let J=oe.current?.getModel();Z||J?.original?.dispose(),D||J?.modified?.dispose(),oe.current?.dispose()}return _l.createElement(ch,{width:Se,height:F,isEditorReady:ee,loading:N,_ref:Ae,className:Oe,wrapperProps:Te})}var jv=Yv;P.memo(jv);function Gv(r){let s=P.useRef();return P.useEffect(()=>{s.current=r},[r]),s.current}var Vv=Gv,iu=new Map;function Zv({defaultValue:r,defaultLanguage:s,defaultPath:g,value:f,language:S,path:H,theme:L="light",line:Z,loading:D="Loading...",options:z={},overrideServices:N={},saveViewState:K=!0,keepCurrentModel:F=!1,width:Se="100%",height:Oe="100%",className:Te,wrapperProps:Ee={},beforeMount:ke=ja,onMount:ee=ja,onChange:ue,onValidate:De=ja}){let[V,oe]=P.useState(!1),[le,Ae]=P.useState(!0),he=P.useRef(null),ie=P.useRef(null),Ye=P.useRef(null),Re=P.useRef(ee),Ve=P.useRef(ke),nt=P.useRef(),J=P.useRef(f),T=Vv(H),B=P.useRef(!1),G=P.useRef(!1);rh(()=>{let A=uh.init();return A.then(_=>(he.current=_)&&Ae(!1)).catch(_=>_?.type!=="cancelation"&&console.error("Monaco initialization: error:",_)),()=>ie.current?d():A.cancel()}),Tt(()=>{let A=qn(he.current,r||f||"",s||S||"",H||g||"");A!==ie.current?.getModel()&&(K&&iu.set(T,ie.current?.saveViewState()),ie.current?.setModel(A),K&&ie.current?.restoreViewState(iu.get(H)))},[H],V),Tt(()=>{ie.current?.updateOptions(z)},[z],V),Tt(()=>{!ie.current||f===void 0||(ie.current.getOption(he.current.editor.EditorOption.readOnly)?ie.current.setValue(f):f!==ie.current.getValue()&&(G.current=!0,ie.current.executeEdits("",[{range:ie.current.getModel().getFullModelRange(),text:f,forceMoveMarkers:!0}]),ie.current.pushUndoStop(),G.current=!1))},[f],V),Tt(()=>{let A=ie.current?.getModel();A&&S&&he.current?.editor.setModelLanguage(A,S)},[S],V),Tt(()=>{Z!==void 0&&ie.current?.revealLine(Z)},[Z],V),Tt(()=>{he.current?.editor.setTheme(L)},[L],V);let fe=P.useCallback(()=>{if(!(!Ye.current||!he.current)&&!B.current){Ve.current(he.current);let A=H||g,_=qn(he.current,f||r||"",s||S||"",A||"");ie.current=he.current?.editor.create(Ye.current,{model:_,automaticLayout:!0,...z},N),K&&ie.current.restoreViewState(iu.get(A)),he.current.editor.setTheme(L),Z!==void 0&&ie.current.revealLine(Z),oe(!0),B.current=!0}},[r,s,g,f,S,H,z,N,K,L,Z]);P.useEffect(()=>{V&&Re.current(ie.current,he.current)},[V]),P.useEffect(()=>{!le&&!V&&fe()},[le,V,fe]),J.current=f,P.useEffect(()=>{V&&ue&&(nt.current?.dispose(),nt.current=ie.current?.onDidChangeModelContent(A=>{G.current||ue(ie.current.getValue(),A)}))},[V,ue]),P.useEffect(()=>{if(V){let A=he.current.editor.onDidChangeMarkers(_=>{let x=ie.current.getModel()?.uri;if(x&&_.find(q=>q.path===x.path)){let q=he.current.editor.getModelMarkers({resource:x});De?.(q)}});return()=>{A?.dispose()}}return()=>{}},[V,De]);function d(){nt.current?.dispose(),F?K&&iu.set(H,ie.current.saveViewState()):ie.current.getModel()?.dispose(),ie.current.dispose()}return _l.createElement(ch,{width:Se,height:Oe,isEditorReady:V,loading:D,_ref:Ye,className:Te,wrapperProps:Ee})}var Qv=Zv,Xv=P.memo(Qv),Kv=Xv;const Rr=[`<!DOCTYPE html>
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
`],Wd={1:["<h1>Hello, World!</h1>","<h1>Hello, Weird!</h1>"],2:["<em>I am small</em>"],3:[`<!DOCTYPE html>
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
</form>`]};var _r={exports:{}},xr,Fd;function kv(){if(Fd)return xr;Fd=1;var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return xr=r,xr}var Br,$d;function Jv(){if($d)return Br;$d=1;var r=kv();function s(){}function g(){}return g.resetWarningCache=s,Br=function(){function f(L,Z,D,z,N,K){if(K!==r){var F=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw F.name="Invariant Violation",F}}f.isRequired=f;function S(){return f}var H={array:f,bigint:f,bool:f,func:f,number:f,object:f,string:f,symbol:f,any:f,arrayOf:S,element:f,elementType:f,instanceOf:S,node:f,objectOf:S,oneOf:S,oneOfType:S,shape:S,exact:S,checkPropTypes:g,resetWarningCache:s};return H.PropTypes=H,H},Br}var Pd;function Wv(){return Pd||(Pd=1,_r.exports=Jv()()),_r.exports}var Fv=Wv();const ve=th(Fv);var _t=typeof window<"u"?window:null,Cr=_t===null,Va=Cr?void 0:_t.document,Nt="addEventListener",Lt="removeEventListener",wr="getBoundingClientRect",qa="_a",Ct="_b",ul="_c",uu="horizontal",qt=function(){return!1},$v=Cr?"calc":["","-webkit-","-moz-","-o-"].filter(function(r){var s=Va.createElement("div");return s.style.cssText="width:"+r+"calc(9px)",!!s.style.length}).shift()+"calc",oh=function(r){return typeof r=="string"||r instanceof String},Id=function(r){if(oh(r)){var s=Va.querySelector(r);if(!s)throw new Error("Selector "+r+" did not match a DOM element");return s}return r},lt=function(r,s,g){var f=r[s];return f!==void 0?f:g},cu=function(r,s,g,f){if(s){if(f==="end")return 0;if(f==="center")return r/2}else if(g){if(f==="start")return 0;if(f==="center")return r/2}return r},Pv=function(r,s){var g=Va.createElement("div");return g.className="gutter gutter-"+s,g},Iv=function(r,s,g){var f={};return oh(s)?f[r]=s:f[r]=$v+"("+s+"% - "+g+"px)",f},ey=function(r,s){var g;return g={},g[r]=s+"px",g},eh=function(r,s){if(s===void 0&&(s={}),Cr)return{};var g=r,f,S,H,L,Z,D;Array.from&&(g=Array.from(g));var z=Id(g[0]),N=z.parentNode,K=getComputedStyle?getComputedStyle(N):null,F=K?K.flexDirection:null,Se=lt(s,"sizes")||g.map(function(){return 100/g.length}),Oe=lt(s,"minSize",100),Te=Array.isArray(Oe)?Oe:g.map(function(){return Oe}),Ee=lt(s,"maxSize",1/0),ke=Array.isArray(Ee)?Ee:g.map(function(){return Ee}),ee=lt(s,"expandToMin",!1),ue=lt(s,"gutterSize",10),De=lt(s,"gutterAlign","center"),V=lt(s,"snapOffset",30),oe=Array.isArray(V)?V:g.map(function(){return V}),le=lt(s,"dragInterval",1),Ae=lt(s,"direction",uu),he=lt(s,"cursor",Ae===uu?"col-resize":"row-resize"),ie=lt(s,"gutter",Pv),Ye=lt(s,"elementStyle",Iv),Re=lt(s,"gutterStyle",ey);Ae===uu?(f="width",S="clientX",H="left",L="right",Z="clientWidth"):Ae==="vertical"&&(f="height",S="clientY",H="top",L="bottom",Z="clientHeight");function Ve(R,U,w,j){var we=Ye(f,U,w,j);Object.keys(we).forEach(function(Ue){R.style[Ue]=we[Ue]})}function nt(R,U,w){var j=Re(f,U,w);Object.keys(j).forEach(function(we){R.style[we]=j[we]})}function J(){return D.map(function(R){return R.size})}function T(R){return"touches"in R?R.touches[0][S]:R[S]}function B(R){var U=D[this.a],w=D[this.b],j=U.size+w.size;U.size=R/this.size*j,w.size=j-R/this.size*j,Ve(U.element,U.size,this[Ct],U.i),Ve(w.element,w.size,this[ul],w.i)}function G(R){var U,w=D[this.a],j=D[this.b];this.dragging&&(U=T(R)-this.start+(this[Ct]-this.dragOffset),le>1&&(U=Math.round(U/le)*le),U<=w.minSize+w.snapOffset+this[Ct]?U=w.minSize+this[Ct]:U>=this.size-(j.minSize+j.snapOffset+this[ul])&&(U=this.size-(j.minSize+this[ul])),U>=w.maxSize-w.snapOffset+this[Ct]?U=w.maxSize+this[Ct]:U<=this.size-(j.maxSize-j.snapOffset+this[ul])&&(U=this.size-(j.maxSize+this[ul])),B.call(this,U),lt(s,"onDrag",qt)(J()))}function fe(){var R=D[this.a].element,U=D[this.b].element,w=R[wr](),j=U[wr]();this.size=w[f]+j[f]+this[Ct]+this[ul],this.start=w[H],this.end=w[L]}function d(R){if(!getComputedStyle)return null;var U=getComputedStyle(R);if(!U)return null;var w=R[Z];return w===0?null:(Ae===uu?w-=parseFloat(U.paddingLeft)+parseFloat(U.paddingRight):w-=parseFloat(U.paddingTop)+parseFloat(U.paddingBottom),w)}function A(R){var U=d(N);if(U===null||Te.reduce(function(Ue,Je){return Ue+Je},0)>U)return R;var w=0,j=[],we=R.map(function(Ue,Je){var Qt=U*Ue/100,$l=cu(ue,Je===0,Je===R.length-1,De),it=Te[Je]+$l;return Qt<it?(w+=it-Qt,j.push(0),it):(j.push(Qt-it),Qt)});return w===0?R:we.map(function(Ue,Je){var Qt=Ue;if(w>0&&j[Je]-w>0){var $l=Math.min(w,j[Je]-w);w-=$l,Qt=Ue-$l}return Qt/U*100})}function _(){var R=this,U=D[R.a].element,w=D[R.b].element;R.dragging&&lt(s,"onDragEnd",qt)(J()),R.dragging=!1,_t[Lt]("mouseup",R.stop),_t[Lt]("touchend",R.stop),_t[Lt]("touchcancel",R.stop),_t[Lt]("mousemove",R.move),_t[Lt]("touchmove",R.move),R.stop=null,R.move=null,U[Lt]("selectstart",qt),U[Lt]("dragstart",qt),w[Lt]("selectstart",qt),w[Lt]("dragstart",qt),U.style.userSelect="",U.style.webkitUserSelect="",U.style.MozUserSelect="",U.style.pointerEvents="",w.style.userSelect="",w.style.webkitUserSelect="",w.style.MozUserSelect="",w.style.pointerEvents="",R.gutter.style.cursor="",R.parent.style.cursor="",Va.body.style.cursor=""}function x(R){if(!("button"in R&&R.button!==0)){var U=this,w=D[U.a].element,j=D[U.b].element;U.dragging||lt(s,"onDragStart",qt)(J()),R.preventDefault(),U.dragging=!0,U.move=G.bind(U),U.stop=_.bind(U),_t[Nt]("mouseup",U.stop),_t[Nt]("touchend",U.stop),_t[Nt]("touchcancel",U.stop),_t[Nt]("mousemove",U.move),_t[Nt]("touchmove",U.move),w[Nt]("selectstart",qt),w[Nt]("dragstart",qt),j[Nt]("selectstart",qt),j[Nt]("dragstart",qt),w.style.userSelect="none",w.style.webkitUserSelect="none",w.style.MozUserSelect="none",w.style.pointerEvents="none",j.style.userSelect="none",j.style.webkitUserSelect="none",j.style.MozUserSelect="none",j.style.pointerEvents="none",U.gutter.style.cursor=he,U.parent.style.cursor=he,Va.body.style.cursor=he,fe.call(U),U.dragOffset=T(R)-U.end}}Se=A(Se);var q=[];D=g.map(function(R,U){var w={element:Id(R),size:Se[U],minSize:Te[U],maxSize:ke[U],snapOffset:oe[U],i:U},j;if(U>0&&(j={a:U-1,b:U,dragging:!1,direction:Ae,parent:N},j[Ct]=cu(ue,U-1===0,!1,De),j[ul]=cu(ue,!1,U===g.length-1,De),F==="row-reverse"||F==="column-reverse")){var we=j.a;j.a=j.b,j.b=we}if(U>0){var Ue=ie(U,Ae,w.element);nt(Ue,ue,U),j[qa]=x.bind(j),Ue[Nt]("mousedown",j[qa]),Ue[Nt]("touchstart",j[qa]),N.insertBefore(Ue,w.element),j.gutter=Ue}return Ve(w.element,w.size,cu(ue,U===0,U===g.length-1,De),U),U>0&&q.push(j),w});function ce(R){var U=R.i===q.length,w=U?q[R.i-1]:q[R.i];fe.call(w);var j=U?w.size-R.minSize-w[ul]:R.minSize+w[Ct];B.call(w,j)}D.forEach(function(R){var U=R.element[wr]()[f];U<R.minSize&&(ee?ce(R):R.minSize=U)});function W(R){var U=A(R);U.forEach(function(w,j){if(j>0){var we=q[j-1],Ue=D[we.a],Je=D[we.b];Ue.size=U[j-1],Je.size=w,Ve(Ue.element,Ue.size,we[Ct],Ue.i),Ve(Je.element,Je.size,we[ul],Je.i)}})}function at(R,U){q.forEach(function(w){if(U!==!0?w.parent.removeChild(w.gutter):(w.gutter[Lt]("mousedown",w[qa]),w.gutter[Lt]("touchstart",w[qa])),R!==!0){var j=Ye(f,w.a.size,w[Ct]);Object.keys(j).forEach(function(we){D[w.a].element.style[we]="",D[w.b].element.style[we]=""})}})}return{setSizes:W,getSizes:J,collapse:function(U){ce(D[U])},destroy:at,parent:N,pairs:q}};function Nr(r,s){var g={};for(var f in r)Object.prototype.hasOwnProperty.call(r,f)&&s.indexOf(f)===-1&&(g[f]=r[f]);return g}var qr=function(r){function s(){r.apply(this,arguments)}return r&&(s.__proto__=r),s.prototype=Object.create(r&&r.prototype),s.prototype.constructor=s,s.prototype.componentDidMount=function(){var f=this.props;f.children;var S=f.gutter,H=Nr(f,["children","gutter"]),L=H;L.gutter=function(Z,D){var z;return S?z=S(Z,D):(z=document.createElement("div"),z.className="gutter gutter-"+D),z.__isSplitGutter=!0,z},this.split=eh(this.parent.children,L)},s.prototype.componentDidUpdate=function(f){var S=this,H=this.props;H.children;var L=H.minSize,Z=H.sizes,D=H.collapsed,z=Nr(H,["children","minSize","sizes","collapsed"]),N=z,K=f.minSize,F=f.sizes,Se=f.collapsed,Oe=["maxSize","expandToMin","gutterSize","gutterAlign","snapOffset","dragInterval","direction","cursor"],Te=Oe.map(function(ee){return S.props[ee]!==f[ee]}).reduce(function(ee,ue){return ee||ue},!1);if(Array.isArray(L)&&Array.isArray(K)){var Ee=!1;L.forEach(function(ee,ue){Ee=Ee||ee!==K[ue]}),Te=Te||Ee}else Array.isArray(L)||Array.isArray(K)?Te=!0:Te=Te||L!==K;if(Te)N.minSize=L,N.sizes=Z||this.split.getSizes(),this.split.destroy(!0,!0),N.gutter=function(ee,ue,De){return De.previousSibling},this.split=eh(Array.from(this.parent.children).filter(function(ee){return!ee.__isSplitGutter}),N);else if(Z){var ke=!1;Z.forEach(function(ee,ue){ke=ke||ee!==F[ue]}),ke&&this.split.setSizes(this.props.sizes)}Number.isInteger(D)&&(D!==Se||Te)&&this.split.collapse(D)},s.prototype.componentWillUnmount=function(){this.split.destroy(),delete this.split},s.prototype.render=function(){var f=this,S=this.props;S.sizes,S.minSize,S.maxSize,S.expandToMin,S.gutterSize,S.gutterAlign,S.snapOffset,S.dragInterval,S.direction,S.cursor,S.gutter,S.elementStyle,S.gutterStyle,S.onDrag,S.onDragStart,S.onDragEnd,S.collapsed;var H=S.children,L=Nr(S,["sizes","minSize","maxSize","expandToMin","gutterSize","gutterAlign","snapOffset","dragInterval","direction","cursor","gutter","elementStyle","gutterStyle","onDrag","onDragStart","onDragEnd","collapsed","children"]),Z=L;return _l.createElement("div",Object.assign({},{ref:function(D){f.parent=D}},Z),H)},s}(_l.Component);qr.propTypes={sizes:ve.arrayOf(ve.number),minSize:ve.oneOfType([ve.number,ve.arrayOf(ve.number)]),maxSize:ve.oneOfType([ve.number,ve.arrayOf(ve.number)]),expandToMin:ve.bool,gutterSize:ve.number,gutterAlign:ve.string,snapOffset:ve.oneOfType([ve.number,ve.arrayOf(ve.number)]),dragInterval:ve.number,direction:ve.string,cursor:ve.string,gutter:ve.func,elementStyle:ve.func,gutterStyle:ve.func,onDrag:ve.func,onDragStart:ve.func,onDragEnd:ve.func,collapsed:ve.number,children:ve.arrayOf(ve.element)};qr.defaultProps={sizes:void 0,minSize:void 0,maxSize:void 0,expandToMin:void 0,gutterSize:void 0,gutterAlign:void 0,snapOffset:void 0,dragInterval:void 0,direction:void 0,cursor:void 0,gutter:void 0,elementStyle:void 0,gutterStyle:void 0,onDrag:void 0,onDragStart:void 0,onDragEnd:void 0,collapsed:void 0,children:void 0};function ty(){const[r,s]=P.useState(""),[g,f]=P.useState(r),[S,H]=P.useState(0),L=["YOU DID GREAT!","I'm proud of you, keep it up!","This is great work","A+++","1000% on this!","Super floober fantastic"],Z=["Oh, not quite?","Hey, let's give that one another try","Well, I know you'll good it eventually","Let's look over that again?","Not quite, but I'm glad you're trying"],D=()=>{if(Object.keys(Wd).includes(S.toString())){const z=S.toString(),N=r.trim().replace(/\s+/g," "),K=Wd[z].some(Se=>N===Se.trim().replace(/\s+/g," "));let F="Default easter egg text";K?(F=L[Math.floor(Math.random()*L.length)],alert(F)):(F=Z[Math.floor(Math.random()*Z.length)],alert(F))}};return Pe.jsx("div",{className:"h-screen bg-gray-900 text-white",children:Pe.jsxs(qr,{className:"flex h-full",sizes:[25,50,25],minSize:100,gutterSize:6,children:[Pe.jsxs("div",{className:"p-4  border-r border-gray-700",children:[Pe.jsxs("div",{className:"absolute bottom-4 right-4 flex space-x-2",children:[Pe.jsx("button",{onClick:()=>H(Math.max(0,S-1)),className:"bg-yellow-400 text-black px-4 py-1 rounded",disabled:S===0,children:"Back"}),Pe.jsx("button",{onClick:()=>H(Math.min(S+1,100)),className:"bg-yellow-400 text-black px-4 py-1 rounded",disabled:S===Rr.length-1,children:"Next"})]}),Pe.jsxs("h2",{className:"font-bold text-lg",children:["Lesson ",S+1]}),Pe.jsx("iframe",{title:"live preview",srcDoc:Rr[Math.min(Math.max(0,S),Rr.length-1)],className:"w-full h-full bg-white"})]}),Pe.jsxs("div",{className:"border-b border-gray-700",children:[Pe.jsx(Kv,{height:"90%",language:"html",theme:"vs-dark",value:r,onChange:z=>s(z||"")}),Pe.jsx("div",{className:"p-2",children:Pe.jsx("button",{onClick:()=>f(r),className:"bg-green-50 hover:bg-green-600 p-2",children:"Run"})})]}),Pe.jsxs("div",{className:"w-1/4 p-2",children:[Pe.jsx("iframe",{title:"live preview",srcDoc:g,className:"w-full h-full bg-white"}),Pe.jsx("button",{onClick:D,className:"mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded mt-2  ",children:"Check Answer"})]})]})})}jm.createRoot(document.getElementById("root")).render(Pe.jsx(P.StrictMode,{children:Pe.jsx(ty,{})}));
