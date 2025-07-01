(function(){const f=document.createElement("link").relList;if(f&&f.supports&&f.supports("modulepreload"))return;for(const S of document.querySelectorAll('link[rel="modulepreload"]'))o(S);new MutationObserver(S=>{for(const U of S)if(U.type==="childList")for(const L of U.addedNodes)L.tagName==="LINK"&&L.rel==="modulepreload"&&o(L)}).observe(document,{childList:!0,subtree:!0});function g(S){const U={};return S.integrity&&(U.integrity=S.integrity),S.referrerPolicy&&(U.referrerPolicy=S.referrerPolicy),S.crossOrigin==="use-credentials"?U.credentials="include":S.crossOrigin==="anonymous"?U.credentials="omit":U.credentials="same-origin",U}function o(S){if(S.ep)return;S.ep=!0;const U=g(S);fetch(S.href,U)}})();function th(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Tr={exports:{}},Ln={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _d;function xm(){if(_d)return Ln;_d=1;var r=Symbol.for("react.transitional.element"),f=Symbol.for("react.fragment");function g(o,S,U){var L=null;if(U!==void 0&&(L=""+U),S.key!==void 0&&(L=""+S.key),"key"in S){U={};for(var V in S)V!=="key"&&(U[V]=S[V])}else U=S;return S=U.ref,{$$typeof:r,type:o,key:L,ref:S!==void 0?S:null,props:U}}return Ln.Fragment=f,Ln.jsx=g,Ln.jsxs=g,Ln}var Bd;function Rm(){return Bd||(Bd=1,Tr.exports=xm()),Tr.exports}var Ie=Rm(),zr={exports:{}},$={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nd;function _m(){if(Nd)return $;Nd=1;var r=Symbol.for("react.transitional.element"),f=Symbol.for("react.portal"),g=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),U=Symbol.for("react.consumer"),L=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),M=Symbol.for("react.suspense"),z=Symbol.for("react.memo"),N=Symbol.for("react.lazy"),Q=Symbol.iterator;function F(d){return d===null||typeof d!="object"?null:(d=Q&&d[Q]||d["@@iterator"],typeof d=="function"?d:null)}var Se={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Oe=Object.assign,Te={};function Ee(d,A,x){this.props=d,this.context=A,this.refs=Te,this.updater=x||Se}Ee.prototype.isReactComponent={},Ee.prototype.setState=function(d,A){if(typeof d!="object"&&typeof d!="function"&&d!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,d,A,"setState")},Ee.prototype.forceUpdate=function(d){this.updater.enqueueForceUpdate(this,d,"forceUpdate")};function Ke(){}Ke.prototype=Ee.prototype;function ee(d,A,x){this.props=d,this.context=A,this.refs=Te,this.updater=x||Se}var ue=ee.prototype=new Ke;ue.constructor=ee,Oe(ue,Ee.prototype),ue.isPureReactComponent=!0;var Me=Array.isArray,k={H:null,A:null,T:null,S:null,V:null},se=Object.prototype.hasOwnProperty;function le(d,A,x,R,C,ce){return x=ce.ref,{$$typeof:r,type:d,key:A,ref:x!==void 0?x:null,props:ce}}function Ae(d,A){return le(d.type,A,void 0,void 0,void 0,d.props)}function he(d){return typeof d=="object"&&d!==null&&d.$$typeof===r}function ie(d){var A={"=":"=0",":":"=2"};return"$"+d.replace(/[=:]/g,function(x){return A[x]})}var je=/\/+/g;function He(d,A){return typeof d=="object"&&d!==null&&d.key!=null?ie(""+d.key):A.toString(36)}function ke(){}function at(d){switch(d.status){case"fulfilled":return d.value;case"rejected":throw d.reason;default:switch(typeof d.status=="string"?d.then(ke,ke):(d.status="pending",d.then(function(A){d.status==="pending"&&(d.status="fulfilled",d.value=A)},function(A){d.status==="pending"&&(d.status="rejected",d.reason=A)})),d.status){case"fulfilled":return d.value;case"rejected":throw d.reason}}throw d}function J(d,A,x,R,C){var ce=typeof d;(ce==="undefined"||ce==="boolean")&&(d=null);var W=!1;if(d===null)W=!0;else switch(ce){case"bigint":case"string":case"number":W=!0;break;case"object":switch(d.$$typeof){case r:case f:W=!0;break;case N:return W=d._init,J(W(d._payload),A,x,R,C)}}if(W)return C=C(d),W=R===""?"."+He(d,0):R,Me(C)?(x="",W!=null&&(x=W.replace(je,"$&/")+"/"),J(C,A,x,"",function(D){return D})):C!=null&&(he(C)&&(C=Ae(C,x+(C.key==null||d&&d.key===C.key?"":(""+C.key).replace(je,"$&/")+"/")+W)),A.push(C)),1;W=0;var nt=R===""?".":R+":";if(Me(d))for(var H=0;H<d.length;H++)R=d[H],ce=nt+He(R,H),W+=J(R,A,x,ce,C);else if(H=F(d),typeof H=="function")for(d=H.call(d),H=0;!(R=d.next()).done;)R=R.value,ce=nt+He(R,H++),W+=J(R,A,x,ce,C);else if(ce==="object"){if(typeof d.then=="function")return J(at(d),A,x,R,C);throw A=String(d),Error("Objects are not valid as a React child (found: "+(A==="[object Object]"?"object with keys {"+Object.keys(d).join(", ")+"}":A)+"). If you meant to render a collection of children, use an array instead.")}return W}function T(d,A,x){if(d==null)return d;var R=[],C=0;return J(d,R,"","",function(ce){return A.call(x,ce,C++)}),R}function _(d){if(d._status===-1){var A=d._result;A=A(),A.then(function(x){(d._status===0||d._status===-1)&&(d._status=1,d._result=x)},function(x){(d._status===0||d._status===-1)&&(d._status=2,d._result=x)}),d._status===-1&&(d._status=0,d._result=A)}if(d._status===1)return d._result.default;throw d._result}var G=typeof reportError=="function"?reportError:function(d){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var A=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof d=="object"&&d!==null&&typeof d.message=="string"?String(d.message):String(d),error:d});if(!window.dispatchEvent(A))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",d);return}console.error(d)};function oe(){}return $.Children={map:T,forEach:function(d,A,x){T(d,function(){A.apply(this,arguments)},x)},count:function(d){var A=0;return T(d,function(){A++}),A},toArray:function(d){return T(d,function(A){return A})||[]},only:function(d){if(!he(d))throw Error("React.Children.only expected to receive a single React element child.");return d}},$.Component=Ee,$.Fragment=g,$.Profiler=S,$.PureComponent=ee,$.StrictMode=o,$.Suspense=M,$.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=k,$.__COMPILER_RUNTIME={__proto__:null,c:function(d){return k.H.useMemoCache(d)}},$.cache=function(d){return function(){return d.apply(null,arguments)}},$.cloneElement=function(d,A,x){if(d==null)throw Error("The argument must be a React element, but you passed "+d+".");var R=Oe({},d.props),C=d.key,ce=void 0;if(A!=null)for(W in A.ref!==void 0&&(ce=void 0),A.key!==void 0&&(C=""+A.key),A)!se.call(A,W)||W==="key"||W==="__self"||W==="__source"||W==="ref"&&A.ref===void 0||(R[W]=A[W]);var W=arguments.length-2;if(W===1)R.children=x;else if(1<W){for(var nt=Array(W),H=0;H<W;H++)nt[H]=arguments[H+2];R.children=nt}return le(d.type,C,void 0,void 0,ce,R)},$.createContext=function(d){return d={$$typeof:L,_currentValue:d,_currentValue2:d,_threadCount:0,Provider:null,Consumer:null},d.Provider=d,d.Consumer={$$typeof:U,_context:d},d},$.createElement=function(d,A,x){var R,C={},ce=null;if(A!=null)for(R in A.key!==void 0&&(ce=""+A.key),A)se.call(A,R)&&R!=="key"&&R!=="__self"&&R!=="__source"&&(C[R]=A[R]);var W=arguments.length-2;if(W===1)C.children=x;else if(1<W){for(var nt=Array(W),H=0;H<W;H++)nt[H]=arguments[H+2];C.children=nt}if(d&&d.defaultProps)for(R in W=d.defaultProps,W)C[R]===void 0&&(C[R]=W[R]);return le(d,ce,void 0,void 0,null,C)},$.createRef=function(){return{current:null}},$.forwardRef=function(d){return{$$typeof:V,render:d}},$.isValidElement=he,$.lazy=function(d){return{$$typeof:N,_payload:{_status:-1,_result:d},_init:_}},$.memo=function(d,A){return{$$typeof:z,type:d,compare:A===void 0?null:A}},$.startTransition=function(d){var A=k.T,x={};k.T=x;try{var R=d(),C=k.S;C!==null&&C(x,R),typeof R=="object"&&R!==null&&typeof R.then=="function"&&R.then(oe,G)}catch(ce){G(ce)}finally{k.T=A}},$.unstable_useCacheRefresh=function(){return k.H.useCacheRefresh()},$.use=function(d){return k.H.use(d)},$.useActionState=function(d,A,x){return k.H.useActionState(d,A,x)},$.useCallback=function(d,A){return k.H.useCallback(d,A)},$.useContext=function(d){return k.H.useContext(d)},$.useDebugValue=function(){},$.useDeferredValue=function(d,A){return k.H.useDeferredValue(d,A)},$.useEffect=function(d,A,x){var R=k.H;if(typeof x=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return R.useEffect(d,A)},$.useId=function(){return k.H.useId()},$.useImperativeHandle=function(d,A,x){return k.H.useImperativeHandle(d,A,x)},$.useInsertionEffect=function(d,A){return k.H.useInsertionEffect(d,A)},$.useLayoutEffect=function(d,A){return k.H.useLayoutEffect(d,A)},$.useMemo=function(d,A){return k.H.useMemo(d,A)},$.useOptimistic=function(d,A){return k.H.useOptimistic(d,A)},$.useReducer=function(d,A,x){return k.H.useReducer(d,A,x)},$.useRef=function(d){return k.H.useRef(d)},$.useState=function(d){return k.H.useState(d)},$.useSyncExternalStore=function(d,A,x){return k.H.useSyncExternalStore(d,A,x)},$.useTransition=function(){return k.H.useTransition()},$.version="19.1.0",$}var Ld;function Lr(){return Ld||(Ld=1,zr.exports=_m()),zr.exports}var I=Lr();const xl=th(I);var Er={exports:{}},qn={},Ar={exports:{}},wr={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qd;function Bm(){return qd||(qd=1,function(r){function f(T,_){var G=T.length;T.push(_);e:for(;0<G;){var oe=G-1>>>1,d=T[oe];if(0<S(d,_))T[oe]=_,T[G]=d,G=oe;else break e}}function g(T){return T.length===0?null:T[0]}function o(T){if(T.length===0)return null;var _=T[0],G=T.pop();if(G!==_){T[0]=G;e:for(var oe=0,d=T.length,A=d>>>1;oe<A;){var x=2*(oe+1)-1,R=T[x],C=x+1,ce=T[C];if(0>S(R,G))C<d&&0>S(ce,R)?(T[oe]=ce,T[C]=G,oe=C):(T[oe]=R,T[x]=G,oe=x);else if(C<d&&0>S(ce,G))T[oe]=ce,T[C]=G,oe=C;else break e}}return _}function S(T,_){var G=T.sortIndex-_.sortIndex;return G!==0?G:T.id-_.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var U=performance;r.unstable_now=function(){return U.now()}}else{var L=Date,V=L.now();r.unstable_now=function(){return L.now()-V}}var M=[],z=[],N=1,Q=null,F=3,Se=!1,Oe=!1,Te=!1,Ee=!1,Ke=typeof setTimeout=="function"?setTimeout:null,ee=typeof clearTimeout=="function"?clearTimeout:null,ue=typeof setImmediate<"u"?setImmediate:null;function Me(T){for(var _=g(z);_!==null;){if(_.callback===null)o(z);else if(_.startTime<=T)o(z),_.sortIndex=_.expirationTime,f(M,_);else break;_=g(z)}}function k(T){if(Te=!1,Me(T),!Oe)if(g(M)!==null)Oe=!0,se||(se=!0,He());else{var _=g(z);_!==null&&J(k,_.startTime-T)}}var se=!1,le=-1,Ae=5,he=-1;function ie(){return Ee?!0:!(r.unstable_now()-he<Ae)}function je(){if(Ee=!1,se){var T=r.unstable_now();he=T;var _=!0;try{e:{Oe=!1,Te&&(Te=!1,ee(le),le=-1),Se=!0;var G=F;try{t:{for(Me(T),Q=g(M);Q!==null&&!(Q.expirationTime>T&&ie());){var oe=Q.callback;if(typeof oe=="function"){Q.callback=null,F=Q.priorityLevel;var d=oe(Q.expirationTime<=T);if(T=r.unstable_now(),typeof d=="function"){Q.callback=d,Me(T),_=!0;break t}Q===g(M)&&o(M),Me(T)}else o(M);Q=g(M)}if(Q!==null)_=!0;else{var A=g(z);A!==null&&J(k,A.startTime-T),_=!1}}break e}finally{Q=null,F=G,Se=!1}_=void 0}}finally{_?He():se=!1}}}var He;if(typeof ue=="function")He=function(){ue(je)};else if(typeof MessageChannel<"u"){var ke=new MessageChannel,at=ke.port2;ke.port1.onmessage=je,He=function(){at.postMessage(null)}}else He=function(){Ke(je,0)};function J(T,_){le=Ke(function(){T(r.unstable_now())},_)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(T){T.callback=null},r.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ae=0<T?Math.floor(1e3/T):5},r.unstable_getCurrentPriorityLevel=function(){return F},r.unstable_next=function(T){switch(F){case 1:case 2:case 3:var _=3;break;default:_=F}var G=F;F=_;try{return T()}finally{F=G}},r.unstable_requestPaint=function(){Ee=!0},r.unstable_runWithPriority=function(T,_){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var G=F;F=T;try{return _()}finally{F=G}},r.unstable_scheduleCallback=function(T,_,G){var oe=r.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?oe+G:oe):G=oe,T){case 1:var d=-1;break;case 2:d=250;break;case 5:d=1073741823;break;case 4:d=1e4;break;default:d=5e3}return d=G+d,T={id:N++,callback:_,priorityLevel:T,startTime:G,expirationTime:d,sortIndex:-1},G>oe?(T.sortIndex=G,f(z,T),g(M)===null&&T===g(z)&&(Te?(ee(le),le=-1):Te=!0,J(k,G-oe))):(T.sortIndex=d,f(M,T),Oe||Se||(Oe=!0,se||(se=!0,He()))),T},r.unstable_shouldYield=ie,r.unstable_wrapCallback=function(T){var _=F;return function(){var G=F;F=_;try{return T.apply(this,arguments)}finally{F=G}}}}(wr)),wr}var Cd;function Nm(){return Cd||(Cd=1,Ar.exports=Bm()),Ar.exports}var Or={exports:{}},tt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jd;function Lm(){if(jd)return tt;jd=1;var r=Lr();function f(M){var z="https://react.dev/errors/"+M;if(1<arguments.length){z+="?args[]="+encodeURIComponent(arguments[1]);for(var N=2;N<arguments.length;N++)z+="&args[]="+encodeURIComponent(arguments[N])}return"Minified React error #"+M+"; visit "+z+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function g(){}var o={d:{f:g,r:function(){throw Error(f(522))},D:g,C:g,L:g,m:g,X:g,S:g,M:g},p:0,findDOMNode:null},S=Symbol.for("react.portal");function U(M,z,N){var Q=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:S,key:Q==null?null:""+Q,children:M,containerInfo:z,implementation:N}}var L=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function V(M,z){if(M==="font")return"";if(typeof z=="string")return z==="use-credentials"?z:""}return tt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,tt.createPortal=function(M,z){var N=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!z||z.nodeType!==1&&z.nodeType!==9&&z.nodeType!==11)throw Error(f(299));return U(M,z,null,N)},tt.flushSync=function(M){var z=L.T,N=o.p;try{if(L.T=null,o.p=2,M)return M()}finally{L.T=z,o.p=N,o.d.f()}},tt.preconnect=function(M,z){typeof M=="string"&&(z?(z=z.crossOrigin,z=typeof z=="string"?z==="use-credentials"?z:"":void 0):z=null,o.d.C(M,z))},tt.prefetchDNS=function(M){typeof M=="string"&&o.d.D(M)},tt.preinit=function(M,z){if(typeof M=="string"&&z&&typeof z.as=="string"){var N=z.as,Q=V(N,z.crossOrigin),F=typeof z.integrity=="string"?z.integrity:void 0,Se=typeof z.fetchPriority=="string"?z.fetchPriority:void 0;N==="style"?o.d.S(M,typeof z.precedence=="string"?z.precedence:void 0,{crossOrigin:Q,integrity:F,fetchPriority:Se}):N==="script"&&o.d.X(M,{crossOrigin:Q,integrity:F,fetchPriority:Se,nonce:typeof z.nonce=="string"?z.nonce:void 0})}},tt.preinitModule=function(M,z){if(typeof M=="string")if(typeof z=="object"&&z!==null){if(z.as==null||z.as==="script"){var N=V(z.as,z.crossOrigin);o.d.M(M,{crossOrigin:N,integrity:typeof z.integrity=="string"?z.integrity:void 0,nonce:typeof z.nonce=="string"?z.nonce:void 0})}}else z==null&&o.d.M(M)},tt.preload=function(M,z){if(typeof M=="string"&&typeof z=="object"&&z!==null&&typeof z.as=="string"){var N=z.as,Q=V(N,z.crossOrigin);o.d.L(M,N,{crossOrigin:Q,integrity:typeof z.integrity=="string"?z.integrity:void 0,nonce:typeof z.nonce=="string"?z.nonce:void 0,type:typeof z.type=="string"?z.type:void 0,fetchPriority:typeof z.fetchPriority=="string"?z.fetchPriority:void 0,referrerPolicy:typeof z.referrerPolicy=="string"?z.referrerPolicy:void 0,imageSrcSet:typeof z.imageSrcSet=="string"?z.imageSrcSet:void 0,imageSizes:typeof z.imageSizes=="string"?z.imageSizes:void 0,media:typeof z.media=="string"?z.media:void 0})}},tt.preloadModule=function(M,z){if(typeof M=="string")if(z){var N=V(z.as,z.crossOrigin);o.d.m(M,{as:typeof z.as=="string"&&z.as!=="script"?z.as:void 0,crossOrigin:N,integrity:typeof z.integrity=="string"?z.integrity:void 0})}else o.d.m(M)},tt.requestFormReset=function(M){o.d.r(M)},tt.unstable_batchedUpdates=function(M,z){return M(z)},tt.useFormState=function(M,z,N){return L.H.useFormState(M,z,N)},tt.useFormStatus=function(){return L.H.useHostTransitionStatus()},tt.version="19.1.0",tt}var Yd;function qm(){if(Yd)return Or.exports;Yd=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(f){console.error(f)}}return r(),Or.exports=Lm(),Or.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gd;function Cm(){if(Gd)return qn;Gd=1;var r=Nm(),f=Lr(),g=qm();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)t+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function S(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function U(e){var t=e,l=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(l=t.return),e=t.return;while(e)}return t.tag===3?l:null}function L(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function V(e){if(U(e)!==e)throw Error(o(188))}function M(e){var t=e.alternate;if(!t){if(t=U(e),t===null)throw Error(o(188));return t!==e?null:e}for(var l=e,a=t;;){var n=l.return;if(n===null)break;var i=n.alternate;if(i===null){if(a=n.return,a!==null){l=a;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===l)return V(n),e;if(i===a)return V(n),t;i=i.sibling}throw Error(o(188))}if(l.return!==a.return)l=n,a=i;else{for(var u=!1,c=n.child;c;){if(c===l){u=!0,l=n,a=i;break}if(c===a){u=!0,a=n,l=i;break}c=c.sibling}if(!u){for(c=i.child;c;){if(c===l){u=!0,l=i,a=n;break}if(c===a){u=!0,a=i,l=n;break}c=c.sibling}if(!u)throw Error(o(189))}}if(l.alternate!==a)throw Error(o(190))}if(l.tag!==3)throw Error(o(188));return l.stateNode.current===l?e:t}function z(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=z(e),t!==null)return t;e=e.sibling}return null}var N=Object.assign,Q=Symbol.for("react.element"),F=Symbol.for("react.transitional.element"),Se=Symbol.for("react.portal"),Oe=Symbol.for("react.fragment"),Te=Symbol.for("react.strict_mode"),Ee=Symbol.for("react.profiler"),Ke=Symbol.for("react.provider"),ee=Symbol.for("react.consumer"),ue=Symbol.for("react.context"),Me=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),se=Symbol.for("react.suspense_list"),le=Symbol.for("react.memo"),Ae=Symbol.for("react.lazy"),he=Symbol.for("react.activity"),ie=Symbol.for("react.memo_cache_sentinel"),je=Symbol.iterator;function He(e){return e===null||typeof e!="object"?null:(e=je&&e[je]||e["@@iterator"],typeof e=="function"?e:null)}var ke=Symbol.for("react.client.reference");function at(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ke?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Oe:return"Fragment";case Ee:return"Profiler";case Te:return"StrictMode";case k:return"Suspense";case se:return"SuspenseList";case he:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Se:return"Portal";case ue:return(e.displayName||"Context")+".Provider";case ee:return(e._context.displayName||"Context")+".Consumer";case Me:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case le:return t=e.displayName||null,t!==null?t:at(e.type)||"Memo";case Ae:t=e._payload,e=e._init;try{return at(e(t))}catch{}}return null}var J=Array.isArray,T=f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,_=g.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G={pending:!1,data:null,method:null,action:null},oe=[],d=-1;function A(e){return{current:e}}function x(e){0>d||(e.current=oe[d],oe[d]=null,d--)}function R(e,t){d++,oe[d]=e.current,e.current=t}var C=A(null),ce=A(null),W=A(null),nt=A(null);function H(e,t){switch(R(W,t),R(ce,e),R(C,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?cd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=cd(t),e=rd(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}x(C),R(C,e)}function D(){x(C),x(ce),x(W)}function B(e){e.memoizedState!==null&&R(nt,e);var t=C.current,l=rd(t,e.type);t!==l&&(R(ce,e),R(C,l))}function Y(e){ce.current===e&&(x(C),x(ce)),nt.current===e&&(x(nt),xn._currentValue=G)}var Be=Object.prototype.hasOwnProperty,De=r.unstable_scheduleCallback,Je=r.unstable_cancelCallback,Xt=r.unstable_shouldYield,$l=r.unstable_requestPaint,it=r.unstable_now,fh=r.unstable_getCurrentPriorityLevel,jr=r.unstable_ImmediatePriority,Yr=r.unstable_UserBlockingPriority,Xn=r.unstable_NormalPriority,dh=r.unstable_LowPriority,Gr=r.unstable_IdlePriority,hh=r.log,gh=r.unstable_setDisableYieldValue,Ca=null,dt=null;function cl(e){if(typeof hh=="function"&&gh(e),dt&&typeof dt.setStrictMode=="function")try{dt.setStrictMode(Ca,e)}catch{}}var ht=Math.clz32?Math.clz32:yh,mh=Math.log,ph=Math.LN2;function yh(e){return e>>>=0,e===0?32:31-(mh(e)/ph|0)|0}var Zn=256,Qn=4194304;function _l(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Kn(e,t,l){var a=e.pendingLanes;if(a===0)return 0;var n=0,i=e.suspendedLanes,u=e.pingedLanes;e=e.warmLanes;var c=a&134217727;return c!==0?(a=c&~i,a!==0?n=_l(a):(u&=c,u!==0?n=_l(u):l||(l=c&~e,l!==0&&(n=_l(l))))):(c=a&~i,c!==0?n=_l(c):u!==0?n=_l(u):l||(l=a&~e,l!==0&&(n=_l(l)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,l=t&-t,i>=l||i===32&&(l&4194048)!==0)?t:n}function ja(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function bh(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kr(){var e=Zn;return Zn<<=1,(Zn&4194048)===0&&(Zn=256),e}function Vr(){var e=Qn;return Qn<<=1,(Qn&62914560)===0&&(Qn=4194304),e}function su(e){for(var t=[],l=0;31>l;l++)t.push(e);return t}function Ya(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function vh(e,t,l,a,n,i){var u=e.pendingLanes;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=l,e.entangledLanes&=l,e.errorRecoveryDisabledLanes&=l,e.shellSuspendCounter=0;var c=e.entanglements,s=e.expirationTimes,y=e.hiddenUpdates;for(l=u&~l;0<l;){var E=31-ht(l),O=1<<E;c[E]=0,s[E]=-1;var b=y[E];if(b!==null)for(y[E]=null,E=0;E<b.length;E++){var v=b[E];v!==null&&(v.lane&=-536870913)}l&=~O}a!==0&&Xr(e,a,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(u&~t))}function Xr(e,t,l){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-ht(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|l&4194090}function Zr(e,t){var l=e.entangledLanes|=t;for(e=e.entanglements;l;){var a=31-ht(l),n=1<<a;n&t|e[a]&t&&(e[a]|=t),l&=~n}}function fu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function du(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Qr(){var e=_.p;return e!==0?e:(e=window.event,e===void 0?32:Md(e.type))}function Sh(e,t){var l=_.p;try{return _.p=e,t()}finally{_.p=l}}var rl=Math.random().toString(36).slice(2),Pe="__reactFiber$"+rl,ct="__reactProps$"+rl,Il="__reactContainer$"+rl,hu="__reactEvents$"+rl,Th="__reactListeners$"+rl,zh="__reactHandles$"+rl,Kr="__reactResources$"+rl,Ga="__reactMarker$"+rl;function gu(e){delete e[Pe],delete e[ct],delete e[hu],delete e[Th],delete e[zh]}function Pl(e){var t=e[Pe];if(t)return t;for(var l=e.parentNode;l;){if(t=l[Il]||l[Pe]){if(l=t.alternate,t.child!==null||l!==null&&l.child!==null)for(e=dd(e);e!==null;){if(l=e[Pe])return l;e=dd(e)}return t}e=l,l=e.parentNode}return null}function ea(e){if(e=e[Pe]||e[Il]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function ka(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function ta(e){var t=e[Kr];return t||(t=e[Kr]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ve(e){e[Ga]=!0}var Jr=new Set,Wr={};function Bl(e,t){la(e,t),la(e+"Capture",t)}function la(e,t){for(Wr[e]=t,e=0;e<t.length;e++)Jr.add(t[e])}var Eh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Fr={},$r={};function Ah(e){return Be.call($r,e)?!0:Be.call(Fr,e)?!1:Eh.test(e)?$r[e]=!0:(Fr[e]=!0,!1)}function Jn(e,t,l){if(Ah(t))if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+l)}}function Wn(e,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+l)}}function Zt(e,t,l,a){if(a===null)e.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(l);return}e.setAttributeNS(t,l,""+a)}}var mu,Ir;function aa(e){if(mu===void 0)try{throw Error()}catch(l){var t=l.stack.trim().match(/\n( *(at )?)/);mu=t&&t[1]||"",Ir=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+mu+e+Ir}var pu=!1;function yu(e,t){if(!e||pu)return"";pu=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var O=function(){throw Error()};if(Object.defineProperty(O.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(O,[])}catch(v){var b=v}Reflect.construct(e,[],O)}else{try{O.call()}catch(v){b=v}e.call(O.prototype)}}else{try{throw Error()}catch(v){b=v}(O=e())&&typeof O.catch=="function"&&O.catch(function(){})}}catch(v){if(v&&b&&typeof v.stack=="string")return[v.stack,b.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),u=i[0],c=i[1];if(u&&c){var s=u.split(`
`),y=c.split(`
`);for(n=a=0;a<s.length&&!s[a].includes("DetermineComponentFrameRoot");)a++;for(;n<y.length&&!y[n].includes("DetermineComponentFrameRoot");)n++;if(a===s.length||n===y.length)for(a=s.length-1,n=y.length-1;1<=a&&0<=n&&s[a]!==y[n];)n--;for(;1<=a&&0<=n;a--,n--)if(s[a]!==y[n]){if(a!==1||n!==1)do if(a--,n--,0>n||s[a]!==y[n]){var E=`
`+s[a].replace(" at new "," at ");return e.displayName&&E.includes("<anonymous>")&&(E=E.replace("<anonymous>",e.displayName)),E}while(1<=a&&0<=n);break}}}finally{pu=!1,Error.prepareStackTrace=l}return(l=e?e.displayName||e.name:"")?aa(l):""}function wh(e){switch(e.tag){case 26:case 27:case 5:return aa(e.type);case 16:return aa("Lazy");case 13:return aa("Suspense");case 19:return aa("SuspenseList");case 0:case 15:return yu(e.type,!1);case 11:return yu(e.type.render,!1);case 1:return yu(e.type,!0);case 31:return aa("Activity");default:return""}}function Pr(e){try{var t="";do t+=wh(e),e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}function zt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function eo(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Oh(e){var t=eo(e)?"checked":"value",l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(u){a=""+u,i.call(this,u)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(u){a=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Fn(e){e._valueTracker||(e._valueTracker=Oh(e))}function to(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var l=t.getValue(),a="";return e&&(a=eo(e)?e.checked?"true":"false":e.value),e=a,e!==l?(t.setValue(e),!0):!1}function $n(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Mh=/[\n"\\]/g;function Et(e){return e.replace(Mh,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function bu(e,t,l,a,n,i,u,c){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),t!=null?u==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+zt(t)):e.value!==""+zt(t)&&(e.value=""+zt(t)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),t!=null?vu(e,u,zt(t)):l!=null?vu(e,u,zt(l)):a!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.name=""+zt(c):e.removeAttribute("name")}function lo(e,t,l,a,n,i,u,c){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||l!=null){if(!(i!=="submit"&&i!=="reset"||t!=null))return;l=l!=null?""+zt(l):"",t=t!=null?""+zt(t):l,c||t===e.value||(e.value=t),e.defaultValue=t}a=a??n,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=c?e.checked:!!a,e.defaultChecked=!!a,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u)}function vu(e,t,l){t==="number"&&$n(e.ownerDocument)===e||e.defaultValue===""+l||(e.defaultValue=""+l)}function na(e,t,l,a){if(e=e.options,t){t={};for(var n=0;n<l.length;n++)t["$"+l[n]]=!0;for(l=0;l<e.length;l++)n=t.hasOwnProperty("$"+e[l].value),e[l].selected!==n&&(e[l].selected=n),n&&a&&(e[l].defaultSelected=!0)}else{for(l=""+zt(l),t=null,n=0;n<e.length;n++){if(e[n].value===l){e[n].selected=!0,a&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function ao(e,t,l){if(t!=null&&(t=""+zt(t),t!==e.value&&(e.value=t),l==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=l!=null?""+zt(l):""}function no(e,t,l,a){if(t==null){if(a!=null){if(l!=null)throw Error(o(92));if(J(a)){if(1<a.length)throw Error(o(93));a=a[0]}l=a}l==null&&(l=""),t=l}l=zt(t),e.defaultValue=l,a=e.textContent,a===l&&a!==""&&a!==null&&(e.value=a)}function ia(e,t){if(t){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=t;return}}e.textContent=t}var Dh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function io(e,t,l){var a=t.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,l):typeof l!="number"||l===0||Dh.has(t)?t==="float"?e.cssFloat=l:e[t]=(""+l).trim():e[t]=l+"px"}function uo(e,t,l){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var n in t)a=t[n],t.hasOwnProperty(n)&&l[n]!==a&&io(e,n,a)}else for(var i in t)t.hasOwnProperty(i)&&io(e,i,t[i])}function Su(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Uh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Hh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function In(e){return Hh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Tu=null;function zu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ua=null,ca=null;function co(e){var t=ea(e);if(t&&(e=t.stateNode)){var l=e[ct]||null;e:switch(e=t.stateNode,t.type){case"input":if(bu(e,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),t=l.name,l.type==="radio"&&t!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+Et(""+t)+'"][type="radio"]'),t=0;t<l.length;t++){var a=l[t];if(a!==e&&a.form===e.form){var n=a[ct]||null;if(!n)throw Error(o(90));bu(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<l.length;t++)a=l[t],a.form===e.form&&to(a)}break e;case"textarea":ao(e,l.value,l.defaultValue);break e;case"select":t=l.value,t!=null&&na(e,!!l.multiple,t,!1)}}}var Eu=!1;function ro(e,t,l){if(Eu)return e(t,l);Eu=!0;try{var a=e(t);return a}finally{if(Eu=!1,(ua!==null||ca!==null)&&(qi(),ua&&(t=ua,e=ca,ca=ua=null,co(t),e)))for(t=0;t<e.length;t++)co(e[t])}}function Va(e,t){var l=e.stateNode;if(l===null)return null;var a=l[ct]||null;if(a===null)return null;l=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(o(231,t,typeof l));return l}var Qt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Au=!1;if(Qt)try{var Xa={};Object.defineProperty(Xa,"passive",{get:function(){Au=!0}}),window.addEventListener("test",Xa,Xa),window.removeEventListener("test",Xa,Xa)}catch{Au=!1}var ol=null,wu=null,Pn=null;function oo(){if(Pn)return Pn;var e,t=wu,l=t.length,a,n="value"in ol?ol.value:ol.textContent,i=n.length;for(e=0;e<l&&t[e]===n[e];e++);var u=l-e;for(a=1;a<=u&&t[l-a]===n[i-a];a++);return Pn=n.slice(e,1<a?1-a:void 0)}function ei(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ti(){return!0}function so(){return!1}function rt(e){function t(l,a,n,i,u){this._reactName=l,this._targetInst=n,this.type=a,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(l=e[c],this[c]=l?l(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ti:so,this.isPropagationStopped=so,this}return N(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=ti)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=ti)},persist:function(){},isPersistent:ti}),t}var Nl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},li=rt(Nl),Za=N({},Nl,{view:0,detail:0}),xh=rt(Za),Ou,Mu,Qa,ai=N({},Za,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Uu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Qa&&(Qa&&e.type==="mousemove"?(Ou=e.screenX-Qa.screenX,Mu=e.screenY-Qa.screenY):Mu=Ou=0,Qa=e),Ou)},movementY:function(e){return"movementY"in e?e.movementY:Mu}}),fo=rt(ai),Rh=N({},ai,{dataTransfer:0}),_h=rt(Rh),Bh=N({},Za,{relatedTarget:0}),Du=rt(Bh),Nh=N({},Nl,{animationName:0,elapsedTime:0,pseudoElement:0}),Lh=rt(Nh),qh=N({},Nl,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ch=rt(qh),jh=N({},Nl,{data:0}),ho=rt(jh),Yh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=kh[e])?!!t[e]:!1}function Uu(){return Vh}var Xh=N({},Za,{key:function(e){if(e.key){var t=Yh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ei(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Gh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Uu,charCode:function(e){return e.type==="keypress"?ei(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ei(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Zh=rt(Xh),Qh=N({},ai,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),go=rt(Qh),Kh=N({},Za,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Uu}),Jh=rt(Kh),Wh=N({},Nl,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fh=rt(Wh),$h=N({},ai,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ih=rt($h),Ph=N({},Nl,{newState:0,oldState:0}),eg=rt(Ph),tg=[9,13,27,32],Hu=Qt&&"CompositionEvent"in window,Ka=null;Qt&&"documentMode"in document&&(Ka=document.documentMode);var lg=Qt&&"TextEvent"in window&&!Ka,mo=Qt&&(!Hu||Ka&&8<Ka&&11>=Ka),po=" ",yo=!1;function bo(e,t){switch(e){case"keyup":return tg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vo(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ra=!1;function ag(e,t){switch(e){case"compositionend":return vo(t);case"keypress":return t.which!==32?null:(yo=!0,po);case"textInput":return e=t.data,e===po&&yo?null:e;default:return null}}function ng(e,t){if(ra)return e==="compositionend"||!Hu&&bo(e,t)?(e=oo(),Pn=wu=ol=null,ra=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return mo&&t.locale!=="ko"?null:t.data;default:return null}}var ig={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function So(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ig[e.type]:t==="textarea"}function To(e,t,l,a){ua?ca?ca.push(a):ca=[a]:ua=a,t=Vi(t,"onChange"),0<t.length&&(l=new li("onChange","change",null,l,a),e.push({event:l,listeners:t}))}var Ja=null,Wa=null;function ug(e){ld(e,0)}function ni(e){var t=ka(e);if(to(t))return e}function zo(e,t){if(e==="change")return t}var Eo=!1;if(Qt){var xu;if(Qt){var Ru="oninput"in document;if(!Ru){var Ao=document.createElement("div");Ao.setAttribute("oninput","return;"),Ru=typeof Ao.oninput=="function"}xu=Ru}else xu=!1;Eo=xu&&(!document.documentMode||9<document.documentMode)}function wo(){Ja&&(Ja.detachEvent("onpropertychange",Oo),Wa=Ja=null)}function Oo(e){if(e.propertyName==="value"&&ni(Wa)){var t=[];To(t,Wa,e,zu(e)),ro(ug,t)}}function cg(e,t,l){e==="focusin"?(wo(),Ja=t,Wa=l,Ja.attachEvent("onpropertychange",Oo)):e==="focusout"&&wo()}function rg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ni(Wa)}function og(e,t){if(e==="click")return ni(t)}function sg(e,t){if(e==="input"||e==="change")return ni(t)}function fg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var gt=typeof Object.is=="function"?Object.is:fg;function Fa(e,t){if(gt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var l=Object.keys(e),a=Object.keys(t);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var n=l[a];if(!Be.call(t,n)||!gt(e[n],t[n]))return!1}return!0}function Mo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Do(e,t){var l=Mo(e);e=0;for(var a;l;){if(l.nodeType===3){if(a=e+l.textContent.length,e<=t&&a>=t)return{node:l,offset:t-e};e=a}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Mo(l)}}function Uo(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Uo(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ho(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=$n(e.document);t instanceof e.HTMLIFrameElement;){try{var l=typeof t.contentWindow.location.href=="string"}catch{l=!1}if(l)e=t.contentWindow;else break;t=$n(e.document)}return t}function _u(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var dg=Qt&&"documentMode"in document&&11>=document.documentMode,oa=null,Bu=null,$a=null,Nu=!1;function xo(e,t,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Nu||oa==null||oa!==$n(a)||(a=oa,"selectionStart"in a&&_u(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),$a&&Fa($a,a)||($a=a,a=Vi(Bu,"onSelect"),0<a.length&&(t=new li("onSelect","select",null,t,l),e.push({event:t,listeners:a}),t.target=oa)))}function Ll(e,t){var l={};return l[e.toLowerCase()]=t.toLowerCase(),l["Webkit"+e]="webkit"+t,l["Moz"+e]="moz"+t,l}var sa={animationend:Ll("Animation","AnimationEnd"),animationiteration:Ll("Animation","AnimationIteration"),animationstart:Ll("Animation","AnimationStart"),transitionrun:Ll("Transition","TransitionRun"),transitionstart:Ll("Transition","TransitionStart"),transitioncancel:Ll("Transition","TransitionCancel"),transitionend:Ll("Transition","TransitionEnd")},Lu={},Ro={};Qt&&(Ro=document.createElement("div").style,"AnimationEvent"in window||(delete sa.animationend.animation,delete sa.animationiteration.animation,delete sa.animationstart.animation),"TransitionEvent"in window||delete sa.transitionend.transition);function ql(e){if(Lu[e])return Lu[e];if(!sa[e])return e;var t=sa[e],l;for(l in t)if(t.hasOwnProperty(l)&&l in Ro)return Lu[e]=t[l];return e}var _o=ql("animationend"),Bo=ql("animationiteration"),No=ql("animationstart"),hg=ql("transitionrun"),gg=ql("transitionstart"),mg=ql("transitioncancel"),Lo=ql("transitionend"),qo=new Map,qu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");qu.push("scrollEnd");function Rt(e,t){qo.set(e,t),Bl(t,[e])}var Co=new WeakMap;function At(e,t){if(typeof e=="object"&&e!==null){var l=Co.get(e);return l!==void 0?l:(t={value:e,source:t,stack:Pr(t)},Co.set(e,t),t)}return{value:e,source:t,stack:Pr(t)}}var wt=[],fa=0,Cu=0;function ii(){for(var e=fa,t=Cu=fa=0;t<e;){var l=wt[t];wt[t++]=null;var a=wt[t];wt[t++]=null;var n=wt[t];wt[t++]=null;var i=wt[t];if(wt[t++]=null,a!==null&&n!==null){var u=a.pending;u===null?n.next=n:(n.next=u.next,u.next=n),a.pending=n}i!==0&&jo(l,n,i)}}function ui(e,t,l,a){wt[fa++]=e,wt[fa++]=t,wt[fa++]=l,wt[fa++]=a,Cu|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function ju(e,t,l,a){return ui(e,t,l,a),ci(e)}function da(e,t){return ui(e,null,null,t),ci(e)}function jo(e,t,l){e.lanes|=l;var a=e.alternate;a!==null&&(a.lanes|=l);for(var n=!1,i=e.return;i!==null;)i.childLanes|=l,a=i.alternate,a!==null&&(a.childLanes|=l),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-ht(l),e=i.hiddenUpdates,a=e[n],a===null?e[n]=[t]:a.push(t),t.lane=l|536870912),i):null}function ci(e){if(50<En)throw En=0,Zc=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ha={};function pg(e,t,l,a){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mt(e,t,l,a){return new pg(e,t,l,a)}function Yu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Kt(e,t){var l=e.alternate;return l===null?(l=mt(e.tag,t,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=t,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&65011712,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,t=e.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l.refCleanup=e.refCleanup,l}function Yo(e,t){e.flags&=65011714;var l=e.alternate;return l===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,e.type=l.type,t=l.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ri(e,t,l,a,n,i){var u=0;if(a=e,typeof e=="function")Yu(e)&&(u=1);else if(typeof e=="string")u=bm(e,l,C.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case he:return e=mt(31,l,t,n),e.elementType=he,e.lanes=i,e;case Oe:return Cl(l.children,n,i,t);case Te:u=8,n|=24;break;case Ee:return e=mt(12,l,t,n|2),e.elementType=Ee,e.lanes=i,e;case k:return e=mt(13,l,t,n),e.elementType=k,e.lanes=i,e;case se:return e=mt(19,l,t,n),e.elementType=se,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ke:case ue:u=10;break e;case ee:u=9;break e;case Me:u=11;break e;case le:u=14;break e;case Ae:u=16,a=null;break e}u=29,l=Error(o(130,e===null?"null":typeof e,"")),a=null}return t=mt(u,l,t,n),t.elementType=e,t.type=a,t.lanes=i,t}function Cl(e,t,l,a){return e=mt(7,e,a,t),e.lanes=l,e}function Gu(e,t,l){return e=mt(6,e,null,t),e.lanes=l,e}function ku(e,t,l){return t=mt(4,e.children!==null?e.children:[],e.key,t),t.lanes=l,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var ga=[],ma=0,oi=null,si=0,Ot=[],Mt=0,jl=null,Jt=1,Wt="";function Yl(e,t){ga[ma++]=si,ga[ma++]=oi,oi=e,si=t}function Go(e,t,l){Ot[Mt++]=Jt,Ot[Mt++]=Wt,Ot[Mt++]=jl,jl=e;var a=Jt;e=Wt;var n=32-ht(a)-1;a&=~(1<<n),l+=1;var i=32-ht(t)+n;if(30<i){var u=n-n%5;i=(a&(1<<u)-1).toString(32),a>>=u,n-=u,Jt=1<<32-ht(t)+n|l<<n|a,Wt=i+e}else Jt=1<<i|l<<n|a,Wt=e}function Vu(e){e.return!==null&&(Yl(e,1),Go(e,1,0))}function Xu(e){for(;e===oi;)oi=ga[--ma],ga[ma]=null,si=ga[--ma],ga[ma]=null;for(;e===jl;)jl=Ot[--Mt],Ot[Mt]=null,Wt=Ot[--Mt],Ot[Mt]=null,Jt=Ot[--Mt],Ot[Mt]=null}var ut=null,Re=null,de=!1,Gl=null,jt=!1,Zu=Error(o(519));function kl(e){var t=Error(o(418,""));throw en(At(t,e)),Zu}function ko(e){var t=e.stateNode,l=e.type,a=e.memoizedProps;switch(t[Pe]=e,t[ct]=a,l){case"dialog":ne("cancel",t),ne("close",t);break;case"iframe":case"object":case"embed":ne("load",t);break;case"video":case"audio":for(l=0;l<wn.length;l++)ne(wn[l],t);break;case"source":ne("error",t);break;case"img":case"image":case"link":ne("error",t),ne("load",t);break;case"details":ne("toggle",t);break;case"input":ne("invalid",t),lo(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),Fn(t);break;case"select":ne("invalid",t);break;case"textarea":ne("invalid",t),no(t,a.value,a.defaultValue,a.children),Fn(t)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||t.textContent===""+l||a.suppressHydrationWarning===!0||ud(t.textContent,l)?(a.popover!=null&&(ne("beforetoggle",t),ne("toggle",t)),a.onScroll!=null&&ne("scroll",t),a.onScrollEnd!=null&&ne("scrollend",t),a.onClick!=null&&(t.onclick=Xi),t=!0):t=!1,t||kl(e)}function Vo(e){for(ut=e.return;ut;)switch(ut.tag){case 5:case 13:jt=!1;return;case 27:case 3:jt=!0;return;default:ut=ut.return}}function Ia(e){if(e!==ut)return!1;if(!de)return Vo(e),de=!0,!1;var t=e.tag,l;if((l=t!==3&&t!==27)&&((l=t===5)&&(l=e.type,l=!(l!=="form"&&l!=="button")||cr(e.type,e.memoizedProps)),l=!l),l&&Re&&kl(e),Vo(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(l=e.data,l==="/$"){if(t===0){Re=Bt(e.nextSibling);break e}t--}else l!=="$"&&l!=="$!"&&l!=="$?"||t++;e=e.nextSibling}Re=null}}else t===27?(t=Re,wl(e.type)?(e=fr,fr=null,Re=e):Re=t):Re=ut?Bt(e.stateNode.nextSibling):null;return!0}function Pa(){Re=ut=null,de=!1}function Xo(){var e=Gl;return e!==null&&(ft===null?ft=e:ft.push.apply(ft,e),Gl=null),e}function en(e){Gl===null?Gl=[e]:Gl.push(e)}var Qu=A(null),Vl=null,Ft=null;function sl(e,t,l){R(Qu,t._currentValue),t._currentValue=l}function $t(e){e._currentValue=Qu.current,x(Qu)}function Ku(e,t,l){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===l)break;e=e.return}}function Ju(e,t,l,a){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var u=n.child;i=i.firstContext;e:for(;i!==null;){var c=i;i=n;for(var s=0;s<t.length;s++)if(c.context===t[s]){i.lanes|=l,c=i.alternate,c!==null&&(c.lanes|=l),Ku(i.return,l,e),a||(u=null);break e}i=c.next}}else if(n.tag===18){if(u=n.return,u===null)throw Error(o(341));u.lanes|=l,i=u.alternate,i!==null&&(i.lanes|=l),Ku(u,l,e),u=null}else u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===e){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}function tn(e,t,l,a){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var u=n.alternate;if(u===null)throw Error(o(387));if(u=u.memoizedProps,u!==null){var c=n.type;gt(n.pendingProps.value,u.value)||(e!==null?e.push(c):e=[c])}}else if(n===nt.current){if(u=n.alternate,u===null)throw Error(o(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(xn):e=[xn])}n=n.return}e!==null&&Ju(t,e,l,a),t.flags|=262144}function fi(e){for(e=e.firstContext;e!==null;){if(!gt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Xl(e){Vl=e,Ft=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function et(e){return Zo(Vl,e)}function di(e,t){return Vl===null&&Xl(e),Zo(e,t)}function Zo(e,t){var l=t._currentValue;if(t={context:t,memoizedValue:l,next:null},Ft===null){if(e===null)throw Error(o(308));Ft=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ft=Ft.next=t;return l}var yg=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(l,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(l){return l()})}},bg=r.unstable_scheduleCallback,vg=r.unstable_NormalPriority,Ye={$$typeof:ue,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Wu(){return{controller:new yg,data:new Map,refCount:0}}function ln(e){e.refCount--,e.refCount===0&&bg(vg,function(){e.controller.abort()})}var an=null,Fu=0,pa=0,ya=null;function Sg(e,t){if(an===null){var l=an=[];Fu=0,pa=Ic(),ya={status:"pending",value:void 0,then:function(a){l.push(a)}}}return Fu++,t.then(Qo,Qo),t}function Qo(){if(--Fu===0&&an!==null){ya!==null&&(ya.status="fulfilled");var e=an;an=null,pa=0,ya=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Tg(e,t){var l=[],a={status:"pending",value:null,reason:null,then:function(n){l.push(n)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var n=0;n<l.length;n++)(0,l[n])(t)},function(n){for(a.status="rejected",a.reason=n,n=0;n<l.length;n++)(0,l[n])(void 0)}),a}var Ko=T.S;T.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&Sg(e,t),Ko!==null&&Ko(e,t)};var Zl=A(null);function $u(){var e=Zl.current;return e!==null?e:we.pooledCache}function hi(e,t){t===null?R(Zl,Zl.current):R(Zl,t.pool)}function Jo(){var e=$u();return e===null?null:{parent:Ye._currentValue,pool:e}}var nn=Error(o(460)),Wo=Error(o(474)),gi=Error(o(542)),Iu={then:function(){}};function Fo(e){return e=e.status,e==="fulfilled"||e==="rejected"}function mi(){}function $o(e,t,l){switch(l=e[l],l===void 0?e.push(t):l!==t&&(t.then(mi,mi),t=l),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Po(e),e;default:if(typeof t.status=="string")t.then(mi,mi);else{if(e=we,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=a}},function(a){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Po(e),e}throw un=t,nn}}var un=null;function Io(){if(un===null)throw Error(o(459));var e=un;return un=null,e}function Po(e){if(e===nn||e===gi)throw Error(o(483))}var fl=!1;function Pu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ec(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function dl(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function hl(e,t,l){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(ge&2)!==0){var n=a.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),a.pending=t,t=ci(e),jo(e,null,l),t}return ui(e,a,t,l),ci(e)}function cn(e,t,l){if(t=t.updateQueue,t!==null&&(t=t.shared,(l&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,Zr(e,l)}}function tc(e,t){var l=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var n=null,i=null;if(l=l.firstBaseUpdate,l!==null){do{var u={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};i===null?n=i=u:i=i.next=u,l=l.next}while(l!==null);i===null?n=i=t:i=i.next=t}else n=i=t;l={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=t:e.next=t,l.lastBaseUpdate=t}var lc=!1;function rn(){if(lc){var e=ya;if(e!==null)throw e}}function on(e,t,l,a){lc=!1;var n=e.updateQueue;fl=!1;var i=n.firstBaseUpdate,u=n.lastBaseUpdate,c=n.shared.pending;if(c!==null){n.shared.pending=null;var s=c,y=s.next;s.next=null,u===null?i=y:u.next=y,u=s;var E=e.alternate;E!==null&&(E=E.updateQueue,c=E.lastBaseUpdate,c!==u&&(c===null?E.firstBaseUpdate=y:c.next=y,E.lastBaseUpdate=s))}if(i!==null){var O=n.baseState;u=0,E=y=s=null,c=i;do{var b=c.lane&-536870913,v=b!==c.lane;if(v?(re&b)===b:(a&b)===b){b!==0&&b===pa&&(lc=!0),E!==null&&(E=E.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});e:{var K=e,X=c;b=t;var ve=l;switch(X.tag){case 1:if(K=X.payload,typeof K=="function"){O=K.call(ve,O,b);break e}O=K;break e;case 3:K.flags=K.flags&-65537|128;case 0:if(K=X.payload,b=typeof K=="function"?K.call(ve,O,b):K,b==null)break e;O=N({},O,b);break e;case 2:fl=!0}}b=c.callback,b!==null&&(e.flags|=64,v&&(e.flags|=8192),v=n.callbacks,v===null?n.callbacks=[b]:v.push(b))}else v={lane:b,tag:c.tag,payload:c.payload,callback:c.callback,next:null},E===null?(y=E=v,s=O):E=E.next=v,u|=b;if(c=c.next,c===null){if(c=n.shared.pending,c===null)break;v=c,c=v.next,v.next=null,n.lastBaseUpdate=v,n.shared.pending=null}}while(!0);E===null&&(s=O),n.baseState=s,n.firstBaseUpdate=y,n.lastBaseUpdate=E,i===null&&(n.shared.lanes=0),Tl|=u,e.lanes=u,e.memoizedState=O}}function es(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function ts(e,t){var l=e.callbacks;if(l!==null)for(e.callbacks=null,e=0;e<l.length;e++)es(l[e],t)}var ba=A(null),pi=A(0);function ls(e,t){e=nl,R(pi,e),R(ba,t),nl=e|t.baseLanes}function ac(){R(pi,nl),R(ba,ba.current)}function nc(){nl=pi.current,x(ba),x(pi)}var gl=0,P=null,ye=null,qe=null,yi=!1,va=!1,Ql=!1,bi=0,sn=0,Sa=null,zg=0;function Ne(){throw Error(o(321))}function ic(e,t){if(t===null)return!1;for(var l=0;l<t.length&&l<e.length;l++)if(!gt(e[l],t[l]))return!1;return!0}function uc(e,t,l,a,n,i){return gl=i,P=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,T.H=e===null||e.memoizedState===null?js:Ys,Ql=!1,i=l(a,n),Ql=!1,va&&(i=ns(t,l,a,n)),as(e),i}function as(e){T.H=Ai;var t=ye!==null&&ye.next!==null;if(gl=0,qe=ye=P=null,yi=!1,sn=0,Sa=null,t)throw Error(o(300));e===null||Xe||(e=e.dependencies,e!==null&&fi(e)&&(Xe=!0))}function ns(e,t,l,a){P=e;var n=0;do{if(va&&(Sa=null),sn=0,va=!1,25<=n)throw Error(o(301));if(n+=1,qe=ye=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}T.H=Ug,i=t(l,a)}while(va);return i}function Eg(){var e=T.H,t=e.useState()[0];return t=typeof t.then=="function"?fn(t):t,e=e.useState()[0],(ye!==null?ye.memoizedState:null)!==e&&(P.flags|=1024),t}function cc(){var e=bi!==0;return bi=0,e}function rc(e,t,l){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l}function oc(e){if(yi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}yi=!1}gl=0,qe=ye=P=null,va=!1,sn=bi=0,Sa=null}function ot(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qe===null?P.memoizedState=qe=e:qe=qe.next=e,qe}function Ce(){if(ye===null){var e=P.alternate;e=e!==null?e.memoizedState:null}else e=ye.next;var t=qe===null?P.memoizedState:qe.next;if(t!==null)qe=t,ye=e;else{if(e===null)throw P.alternate===null?Error(o(467)):Error(o(310));ye=e,e={memoizedState:ye.memoizedState,baseState:ye.baseState,baseQueue:ye.baseQueue,queue:ye.queue,next:null},qe===null?P.memoizedState=qe=e:qe=qe.next=e}return qe}function sc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function fn(e){var t=sn;return sn+=1,Sa===null&&(Sa=[]),e=$o(Sa,e,t),t=P,(qe===null?t.memoizedState:qe.next)===null&&(t=t.alternate,T.H=t===null||t.memoizedState===null?js:Ys),e}function vi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return fn(e);if(e.$$typeof===ue)return et(e)}throw Error(o(438,String(e)))}function fc(e){var t=null,l=P.updateQueue;if(l!==null&&(t=l.memoCache),t==null){var a=P.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),l===null&&(l=sc(),P.updateQueue=l),l.memoCache=t,l=t.data[t.index],l===void 0)for(l=t.data[t.index]=Array(e),a=0;a<e;a++)l[a]=ie;return t.index++,l}function It(e,t){return typeof t=="function"?t(e):t}function Si(e){var t=Ce();return dc(t,ye,e)}function dc(e,t,l){var a=e.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=l;var n=e.baseQueue,i=a.pending;if(i!==null){if(n!==null){var u=n.next;n.next=i.next,i.next=u}t.baseQueue=n=i,a.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var c=u=null,s=null,y=t,E=!1;do{var O=y.lane&-536870913;if(O!==y.lane?(re&O)===O:(gl&O)===O){var b=y.revertLane;if(b===0)s!==null&&(s=s.next={lane:0,revertLane:0,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null}),O===pa&&(E=!0);else if((gl&b)===b){y=y.next,b===pa&&(E=!0);continue}else O={lane:0,revertLane:y.revertLane,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null},s===null?(c=s=O,u=i):s=s.next=O,P.lanes|=b,Tl|=b;O=y.action,Ql&&l(i,O),i=y.hasEagerState?y.eagerState:l(i,O)}else b={lane:O,revertLane:y.revertLane,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null},s===null?(c=s=b,u=i):s=s.next=b,P.lanes|=O,Tl|=O;y=y.next}while(y!==null&&y!==t);if(s===null?u=i:s.next=c,!gt(i,e.memoizedState)&&(Xe=!0,E&&(l=ya,l!==null)))throw l;e.memoizedState=i,e.baseState=u,e.baseQueue=s,a.lastRenderedState=i}return n===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function hc(e){var t=Ce(),l=t.queue;if(l===null)throw Error(o(311));l.lastRenderedReducer=e;var a=l.dispatch,n=l.pending,i=t.memoizedState;if(n!==null){l.pending=null;var u=n=n.next;do i=e(i,u.action),u=u.next;while(u!==n);gt(i,t.memoizedState)||(Xe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),l.lastRenderedState=i}return[i,a]}function is(e,t,l){var a=P,n=Ce(),i=de;if(i){if(l===void 0)throw Error(o(407));l=l()}else l=t();var u=!gt((ye||n).memoizedState,l);u&&(n.memoizedState=l,Xe=!0),n=n.queue;var c=rs.bind(null,a,n,e);if(dn(2048,8,c,[e]),n.getSnapshot!==t||u||qe!==null&&qe.memoizedState.tag&1){if(a.flags|=2048,Ta(9,Ti(),cs.bind(null,a,n,l,t),null),we===null)throw Error(o(349));i||(gl&124)!==0||us(a,t,l)}return l}function us(e,t,l){e.flags|=16384,e={getSnapshot:t,value:l},t=P.updateQueue,t===null?(t=sc(),P.updateQueue=t,t.stores=[e]):(l=t.stores,l===null?t.stores=[e]:l.push(e))}function cs(e,t,l,a){t.value=l,t.getSnapshot=a,os(t)&&ss(e)}function rs(e,t,l){return l(function(){os(t)&&ss(e)})}function os(e){var t=e.getSnapshot;e=e.value;try{var l=t();return!gt(e,l)}catch{return!0}}function ss(e){var t=da(e,2);t!==null&&St(t,e,2)}function gc(e){var t=ot();if(typeof e=="function"){var l=e;if(e=l(),Ql){cl(!0);try{l()}finally{cl(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:It,lastRenderedState:e},t}function fs(e,t,l,a){return e.baseState=l,dc(e,ye,typeof a=="function"?a:It)}function Ag(e,t,l,a,n){if(Ei(e))throw Error(o(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};T.T!==null?l(!0):i.isTransition=!1,a(i),l=t.pending,l===null?(i.next=t.pending=i,ds(t,i)):(i.next=l.next,t.pending=l.next=i)}}function ds(e,t){var l=t.action,a=t.payload,n=e.state;if(t.isTransition){var i=T.T,u={};T.T=u;try{var c=l(n,a),s=T.S;s!==null&&s(u,c),hs(e,t,c)}catch(y){mc(e,t,y)}finally{T.T=i}}else try{i=l(n,a),hs(e,t,i)}catch(y){mc(e,t,y)}}function hs(e,t,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){gs(e,t,a)},function(a){return mc(e,t,a)}):gs(e,t,l)}function gs(e,t,l){t.status="fulfilled",t.value=l,ms(t),e.state=l,t=e.pending,t!==null&&(l=t.next,l===t?e.pending=null:(l=l.next,t.next=l,ds(e,l)))}function mc(e,t,l){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=l,ms(t),t=t.next;while(t!==a)}e.action=null}function ms(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ps(e,t){return t}function ys(e,t){if(de){var l=we.formState;if(l!==null){e:{var a=P;if(de){if(Re){t:{for(var n=Re,i=jt;n.nodeType!==8;){if(!i){n=null;break t}if(n=Bt(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){Re=Bt(n.nextSibling),a=n.data==="F!";break e}}kl(a)}a=!1}a&&(t=l[0])}}return l=ot(),l.memoizedState=l.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ps,lastRenderedState:t},l.queue=a,l=Ls.bind(null,P,a),a.dispatch=l,a=gc(!1),i=Sc.bind(null,P,!1,a.queue),a=ot(),n={state:t,dispatch:null,action:e,pending:null},a.queue=n,l=Ag.bind(null,P,n,i,l),n.dispatch=l,a.memoizedState=e,[t,l,!1]}function bs(e){var t=Ce();return vs(t,ye,e)}function vs(e,t,l){if(t=dc(e,t,ps)[0],e=Si(It)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=fn(t)}catch(u){throw u===nn?gi:u}else a=t;t=Ce();var n=t.queue,i=n.dispatch;return l!==t.memoizedState&&(P.flags|=2048,Ta(9,Ti(),wg.bind(null,n,l),null)),[a,i,e]}function wg(e,t){e.action=t}function Ss(e){var t=Ce(),l=ye;if(l!==null)return vs(t,l,e);Ce(),t=t.memoizedState,l=Ce();var a=l.queue.dispatch;return l.memoizedState=e,[t,a,!1]}function Ta(e,t,l,a){return e={tag:e,create:l,deps:a,inst:t,next:null},t=P.updateQueue,t===null&&(t=sc(),P.updateQueue=t),l=t.lastEffect,l===null?t.lastEffect=e.next=e:(a=l.next,l.next=e,e.next=a,t.lastEffect=e),e}function Ti(){return{destroy:void 0,resource:void 0}}function Ts(){return Ce().memoizedState}function zi(e,t,l,a){var n=ot();a=a===void 0?null:a,P.flags|=e,n.memoizedState=Ta(1|t,Ti(),l,a)}function dn(e,t,l,a){var n=Ce();a=a===void 0?null:a;var i=n.memoizedState.inst;ye!==null&&a!==null&&ic(a,ye.memoizedState.deps)?n.memoizedState=Ta(t,i,l,a):(P.flags|=e,n.memoizedState=Ta(1|t,i,l,a))}function zs(e,t){zi(8390656,8,e,t)}function Es(e,t){dn(2048,8,e,t)}function As(e,t){return dn(4,2,e,t)}function ws(e,t){return dn(4,4,e,t)}function Os(e,t){if(typeof t=="function"){e=e();var l=t(e);return function(){typeof l=="function"?l():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ms(e,t,l){l=l!=null?l.concat([e]):null,dn(4,4,Os.bind(null,t,e),l)}function pc(){}function Ds(e,t){var l=Ce();t=t===void 0?null:t;var a=l.memoizedState;return t!==null&&ic(t,a[1])?a[0]:(l.memoizedState=[e,t],e)}function Us(e,t){var l=Ce();t=t===void 0?null:t;var a=l.memoizedState;if(t!==null&&ic(t,a[1]))return a[0];if(a=e(),Ql){cl(!0);try{e()}finally{cl(!1)}}return l.memoizedState=[a,t],a}function yc(e,t,l){return l===void 0||(gl&1073741824)!==0?e.memoizedState=t:(e.memoizedState=l,e=_f(),P.lanes|=e,Tl|=e,l)}function Hs(e,t,l,a){return gt(l,t)?l:ba.current!==null?(e=yc(e,l,a),gt(e,t)||(Xe=!0),e):(gl&42)===0?(Xe=!0,e.memoizedState=l):(e=_f(),P.lanes|=e,Tl|=e,t)}function xs(e,t,l,a,n){var i=_.p;_.p=i!==0&&8>i?i:8;var u=T.T,c={};T.T=c,Sc(e,!1,t,l);try{var s=n(),y=T.S;if(y!==null&&y(c,s),s!==null&&typeof s=="object"&&typeof s.then=="function"){var E=Tg(s,a);hn(e,t,E,vt(e))}else hn(e,t,a,vt(e))}catch(O){hn(e,t,{then:function(){},status:"rejected",reason:O},vt())}finally{_.p=i,T.T=u}}function Og(){}function bc(e,t,l,a){if(e.tag!==5)throw Error(o(476));var n=Rs(e).queue;xs(e,n,t,G,l===null?Og:function(){return _s(e),l(a)})}function Rs(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:G,baseState:G,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:It,lastRenderedState:G},next:null};var l={};return t.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:It,lastRenderedState:l},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function _s(e){var t=Rs(e).next.queue;hn(e,t,{},vt())}function vc(){return et(xn)}function Bs(){return Ce().memoizedState}function Ns(){return Ce().memoizedState}function Mg(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var l=vt();e=dl(l);var a=hl(t,e,l);a!==null&&(St(a,t,l),cn(a,t,l)),t={cache:Wu()},e.payload=t;return}t=t.return}}function Dg(e,t,l){var a=vt();l={lane:a,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null},Ei(e)?qs(t,l):(l=ju(e,t,l,a),l!==null&&(St(l,e,a),Cs(l,t,a)))}function Ls(e,t,l){var a=vt();hn(e,t,l,a)}function hn(e,t,l,a){var n={lane:a,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null};if(Ei(e))qs(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var u=t.lastRenderedState,c=i(u,l);if(n.hasEagerState=!0,n.eagerState=c,gt(c,u))return ui(e,t,n,0),we===null&&ii(),!1}catch{}finally{}if(l=ju(e,t,n,a),l!==null)return St(l,e,a),Cs(l,t,a),!0}return!1}function Sc(e,t,l,a){if(a={lane:2,revertLane:Ic(),action:a,hasEagerState:!1,eagerState:null,next:null},Ei(e)){if(t)throw Error(o(479))}else t=ju(e,l,a,2),t!==null&&St(t,e,2)}function Ei(e){var t=e.alternate;return e===P||t!==null&&t===P}function qs(e,t){va=yi=!0;var l=e.pending;l===null?t.next=t:(t.next=l.next,l.next=t),e.pending=t}function Cs(e,t,l){if((l&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,Zr(e,l)}}var Ai={readContext:et,use:vi,useCallback:Ne,useContext:Ne,useEffect:Ne,useImperativeHandle:Ne,useLayoutEffect:Ne,useInsertionEffect:Ne,useMemo:Ne,useReducer:Ne,useRef:Ne,useState:Ne,useDebugValue:Ne,useDeferredValue:Ne,useTransition:Ne,useSyncExternalStore:Ne,useId:Ne,useHostTransitionStatus:Ne,useFormState:Ne,useActionState:Ne,useOptimistic:Ne,useMemoCache:Ne,useCacheRefresh:Ne},js={readContext:et,use:vi,useCallback:function(e,t){return ot().memoizedState=[e,t===void 0?null:t],e},useContext:et,useEffect:zs,useImperativeHandle:function(e,t,l){l=l!=null?l.concat([e]):null,zi(4194308,4,Os.bind(null,t,e),l)},useLayoutEffect:function(e,t){return zi(4194308,4,e,t)},useInsertionEffect:function(e,t){zi(4,2,e,t)},useMemo:function(e,t){var l=ot();t=t===void 0?null:t;var a=e();if(Ql){cl(!0);try{e()}finally{cl(!1)}}return l.memoizedState=[a,t],a},useReducer:function(e,t,l){var a=ot();if(l!==void 0){var n=l(t);if(Ql){cl(!0);try{l(t)}finally{cl(!1)}}}else n=t;return a.memoizedState=a.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=Dg.bind(null,P,e),[a.memoizedState,e]},useRef:function(e){var t=ot();return e={current:e},t.memoizedState=e},useState:function(e){e=gc(e);var t=e.queue,l=Ls.bind(null,P,t);return t.dispatch=l,[e.memoizedState,l]},useDebugValue:pc,useDeferredValue:function(e,t){var l=ot();return yc(l,e,t)},useTransition:function(){var e=gc(!1);return e=xs.bind(null,P,e.queue,!0,!1),ot().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,l){var a=P,n=ot();if(de){if(l===void 0)throw Error(o(407));l=l()}else{if(l=t(),we===null)throw Error(o(349));(re&124)!==0||us(a,t,l)}n.memoizedState=l;var i={value:l,getSnapshot:t};return n.queue=i,zs(rs.bind(null,a,i,e),[e]),a.flags|=2048,Ta(9,Ti(),cs.bind(null,a,i,l,t),null),l},useId:function(){var e=ot(),t=we.identifierPrefix;if(de){var l=Wt,a=Jt;l=(a&~(1<<32-ht(a)-1)).toString(32)+l,t="«"+t+"R"+l,l=bi++,0<l&&(t+="H"+l.toString(32)),t+="»"}else l=zg++,t="«"+t+"r"+l.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:vc,useFormState:ys,useActionState:ys,useOptimistic:function(e){var t=ot();t.memoizedState=t.baseState=e;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=l,t=Sc.bind(null,P,!0,l),l.dispatch=t,[e,t]},useMemoCache:fc,useCacheRefresh:function(){return ot().memoizedState=Mg.bind(null,P)}},Ys={readContext:et,use:vi,useCallback:Ds,useContext:et,useEffect:Es,useImperativeHandle:Ms,useInsertionEffect:As,useLayoutEffect:ws,useMemo:Us,useReducer:Si,useRef:Ts,useState:function(){return Si(It)},useDebugValue:pc,useDeferredValue:function(e,t){var l=Ce();return Hs(l,ye.memoizedState,e,t)},useTransition:function(){var e=Si(It)[0],t=Ce().memoizedState;return[typeof e=="boolean"?e:fn(e),t]},useSyncExternalStore:is,useId:Bs,useHostTransitionStatus:vc,useFormState:bs,useActionState:bs,useOptimistic:function(e,t){var l=Ce();return fs(l,ye,e,t)},useMemoCache:fc,useCacheRefresh:Ns},Ug={readContext:et,use:vi,useCallback:Ds,useContext:et,useEffect:Es,useImperativeHandle:Ms,useInsertionEffect:As,useLayoutEffect:ws,useMemo:Us,useReducer:hc,useRef:Ts,useState:function(){return hc(It)},useDebugValue:pc,useDeferredValue:function(e,t){var l=Ce();return ye===null?yc(l,e,t):Hs(l,ye.memoizedState,e,t)},useTransition:function(){var e=hc(It)[0],t=Ce().memoizedState;return[typeof e=="boolean"?e:fn(e),t]},useSyncExternalStore:is,useId:Bs,useHostTransitionStatus:vc,useFormState:Ss,useActionState:Ss,useOptimistic:function(e,t){var l=Ce();return ye!==null?fs(l,ye,e,t):(l.baseState=e,[e,l.queue.dispatch])},useMemoCache:fc,useCacheRefresh:Ns},za=null,gn=0;function wi(e){var t=gn;return gn+=1,za===null&&(za=[]),$o(za,e,t)}function mn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Oi(e,t){throw t.$$typeof===Q?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Gs(e){var t=e._init;return t(e._payload)}function ks(e){function t(m,h){if(e){var p=m.deletions;p===null?(m.deletions=[h],m.flags|=16):p.push(h)}}function l(m,h){if(!e)return null;for(;h!==null;)t(m,h),h=h.sibling;return null}function a(m){for(var h=new Map;m!==null;)m.key!==null?h.set(m.key,m):h.set(m.index,m),m=m.sibling;return h}function n(m,h){return m=Kt(m,h),m.index=0,m.sibling=null,m}function i(m,h,p){return m.index=p,e?(p=m.alternate,p!==null?(p=p.index,p<h?(m.flags|=67108866,h):p):(m.flags|=67108866,h)):(m.flags|=1048576,h)}function u(m){return e&&m.alternate===null&&(m.flags|=67108866),m}function c(m,h,p,w){return h===null||h.tag!==6?(h=Gu(p,m.mode,w),h.return=m,h):(h=n(h,p),h.return=m,h)}function s(m,h,p,w){var q=p.type;return q===Oe?E(m,h,p.props.children,w,p.key):h!==null&&(h.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===Ae&&Gs(q)===h.type)?(h=n(h,p.props),mn(h,p),h.return=m,h):(h=ri(p.type,p.key,p.props,null,m.mode,w),mn(h,p),h.return=m,h)}function y(m,h,p,w){return h===null||h.tag!==4||h.stateNode.containerInfo!==p.containerInfo||h.stateNode.implementation!==p.implementation?(h=ku(p,m.mode,w),h.return=m,h):(h=n(h,p.children||[]),h.return=m,h)}function E(m,h,p,w,q){return h===null||h.tag!==7?(h=Cl(p,m.mode,w,q),h.return=m,h):(h=n(h,p),h.return=m,h)}function O(m,h,p){if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return h=Gu(""+h,m.mode,p),h.return=m,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case F:return p=ri(h.type,h.key,h.props,null,m.mode,p),mn(p,h),p.return=m,p;case Se:return h=ku(h,m.mode,p),h.return=m,h;case Ae:var w=h._init;return h=w(h._payload),O(m,h,p)}if(J(h)||He(h))return h=Cl(h,m.mode,p,null),h.return=m,h;if(typeof h.then=="function")return O(m,wi(h),p);if(h.$$typeof===ue)return O(m,di(m,h),p);Oi(m,h)}return null}function b(m,h,p,w){var q=h!==null?h.key:null;if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return q!==null?null:c(m,h,""+p,w);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case F:return p.key===q?s(m,h,p,w):null;case Se:return p.key===q?y(m,h,p,w):null;case Ae:return q=p._init,p=q(p._payload),b(m,h,p,w)}if(J(p)||He(p))return q!==null?null:E(m,h,p,w,null);if(typeof p.then=="function")return b(m,h,wi(p),w);if(p.$$typeof===ue)return b(m,h,di(m,p),w);Oi(m,p)}return null}function v(m,h,p,w,q){if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return m=m.get(p)||null,c(h,m,""+w,q);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case F:return m=m.get(w.key===null?p:w.key)||null,s(h,m,w,q);case Se:return m=m.get(w.key===null?p:w.key)||null,y(h,m,w,q);case Ae:var te=w._init;return w=te(w._payload),v(m,h,p,w,q)}if(J(w)||He(w))return m=m.get(p)||null,E(h,m,w,q,null);if(typeof w.then=="function")return v(m,h,p,wi(w),q);if(w.$$typeof===ue)return v(m,h,p,di(h,w),q);Oi(h,w)}return null}function K(m,h,p,w){for(var q=null,te=null,j=h,Z=h=0,Qe=null;j!==null&&Z<p.length;Z++){j.index>Z?(Qe=j,j=null):Qe=j.sibling;var fe=b(m,j,p[Z],w);if(fe===null){j===null&&(j=Qe);break}e&&j&&fe.alternate===null&&t(m,j),h=i(fe,h,Z),te===null?q=fe:te.sibling=fe,te=fe,j=Qe}if(Z===p.length)return l(m,j),de&&Yl(m,Z),q;if(j===null){for(;Z<p.length;Z++)j=O(m,p[Z],w),j!==null&&(h=i(j,h,Z),te===null?q=j:te.sibling=j,te=j);return de&&Yl(m,Z),q}for(j=a(j);Z<p.length;Z++)Qe=v(j,m,Z,p[Z],w),Qe!==null&&(e&&Qe.alternate!==null&&j.delete(Qe.key===null?Z:Qe.key),h=i(Qe,h,Z),te===null?q=Qe:te.sibling=Qe,te=Qe);return e&&j.forEach(function(Hl){return t(m,Hl)}),de&&Yl(m,Z),q}function X(m,h,p,w){if(p==null)throw Error(o(151));for(var q=null,te=null,j=h,Z=h=0,Qe=null,fe=p.next();j!==null&&!fe.done;Z++,fe=p.next()){j.index>Z?(Qe=j,j=null):Qe=j.sibling;var Hl=b(m,j,fe.value,w);if(Hl===null){j===null&&(j=Qe);break}e&&j&&Hl.alternate===null&&t(m,j),h=i(Hl,h,Z),te===null?q=Hl:te.sibling=Hl,te=Hl,j=Qe}if(fe.done)return l(m,j),de&&Yl(m,Z),q;if(j===null){for(;!fe.done;Z++,fe=p.next())fe=O(m,fe.value,w),fe!==null&&(h=i(fe,h,Z),te===null?q=fe:te.sibling=fe,te=fe);return de&&Yl(m,Z),q}for(j=a(j);!fe.done;Z++,fe=p.next())fe=v(j,m,Z,fe.value,w),fe!==null&&(e&&fe.alternate!==null&&j.delete(fe.key===null?Z:fe.key),h=i(fe,h,Z),te===null?q=fe:te.sibling=fe,te=fe);return e&&j.forEach(function(Hm){return t(m,Hm)}),de&&Yl(m,Z),q}function ve(m,h,p,w){if(typeof p=="object"&&p!==null&&p.type===Oe&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case F:e:{for(var q=p.key;h!==null;){if(h.key===q){if(q=p.type,q===Oe){if(h.tag===7){l(m,h.sibling),w=n(h,p.props.children),w.return=m,m=w;break e}}else if(h.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===Ae&&Gs(q)===h.type){l(m,h.sibling),w=n(h,p.props),mn(w,p),w.return=m,m=w;break e}l(m,h);break}else t(m,h);h=h.sibling}p.type===Oe?(w=Cl(p.props.children,m.mode,w,p.key),w.return=m,m=w):(w=ri(p.type,p.key,p.props,null,m.mode,w),mn(w,p),w.return=m,m=w)}return u(m);case Se:e:{for(q=p.key;h!==null;){if(h.key===q)if(h.tag===4&&h.stateNode.containerInfo===p.containerInfo&&h.stateNode.implementation===p.implementation){l(m,h.sibling),w=n(h,p.children||[]),w.return=m,m=w;break e}else{l(m,h);break}else t(m,h);h=h.sibling}w=ku(p,m.mode,w),w.return=m,m=w}return u(m);case Ae:return q=p._init,p=q(p._payload),ve(m,h,p,w)}if(J(p))return K(m,h,p,w);if(He(p)){if(q=He(p),typeof q!="function")throw Error(o(150));return p=q.call(p),X(m,h,p,w)}if(typeof p.then=="function")return ve(m,h,wi(p),w);if(p.$$typeof===ue)return ve(m,h,di(m,p),w);Oi(m,p)}return typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint"?(p=""+p,h!==null&&h.tag===6?(l(m,h.sibling),w=n(h,p),w.return=m,m=w):(l(m,h),w=Gu(p,m.mode,w),w.return=m,m=w),u(m)):l(m,h)}return function(m,h,p,w){try{gn=0;var q=ve(m,h,p,w);return za=null,q}catch(j){if(j===nn||j===gi)throw j;var te=mt(29,j,null,m.mode);return te.lanes=w,te.return=m,te}finally{}}}var Ea=ks(!0),Vs=ks(!1),Dt=A(null),Yt=null;function ml(e){var t=e.alternate;R(Ge,Ge.current&1),R(Dt,e),Yt===null&&(t===null||ba.current!==null||t.memoizedState!==null)&&(Yt=e)}function Xs(e){if(e.tag===22){if(R(Ge,Ge.current),R(Dt,e),Yt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Yt=e)}}else pl()}function pl(){R(Ge,Ge.current),R(Dt,Dt.current)}function Pt(e){x(Dt),Yt===e&&(Yt=null),x(Ge)}var Ge=A(0);function Mi(e){for(var t=e;t!==null;){if(t.tag===13){var l=t.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||sr(l)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Tc(e,t,l,a){t=e.memoizedState,l=l(a,t),l=l==null?t:N({},t,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var zc={enqueueSetState:function(e,t,l){e=e._reactInternals;var a=vt(),n=dl(a);n.payload=t,l!=null&&(n.callback=l),t=hl(e,n,a),t!==null&&(St(t,e,a),cn(t,e,a))},enqueueReplaceState:function(e,t,l){e=e._reactInternals;var a=vt(),n=dl(a);n.tag=1,n.payload=t,l!=null&&(n.callback=l),t=hl(e,n,a),t!==null&&(St(t,e,a),cn(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var l=vt(),a=dl(l);a.tag=2,t!=null&&(a.callback=t),t=hl(e,a,l),t!==null&&(St(t,e,l),cn(t,e,l))}};function Zs(e,t,l,a,n,i,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,u):t.prototype&&t.prototype.isPureReactComponent?!Fa(l,a)||!Fa(n,i):!0}function Qs(e,t,l,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(l,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(l,a),t.state!==e&&zc.enqueueReplaceState(t,t.state,null)}function Kl(e,t){var l=t;if("ref"in t){l={};for(var a in t)a!=="ref"&&(l[a]=t[a])}if(e=e.defaultProps){l===t&&(l=N({},l));for(var n in e)l[n]===void 0&&(l[n]=e[n])}return l}var Di=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Ks(e){Di(e)}function Js(e){console.error(e)}function Ws(e){Di(e)}function Ui(e,t){try{var l=e.onUncaughtError;l(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Fs(e,t,l){try{var a=e.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Ec(e,t,l){return l=dl(l),l.tag=3,l.payload={element:null},l.callback=function(){Ui(e,t)},l}function $s(e){return e=dl(e),e.tag=3,e}function Is(e,t,l,a){var n=l.type.getDerivedStateFromError;if(typeof n=="function"){var i=a.value;e.payload=function(){return n(i)},e.callback=function(){Fs(t,l,a)}}var u=l.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){Fs(t,l,a),typeof n!="function"&&(zl===null?zl=new Set([this]):zl.add(this));var c=a.stack;this.componentDidCatch(a.value,{componentStack:c!==null?c:""})})}function Hg(e,t,l,a,n){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=l.alternate,t!==null&&tn(t,l,n,!0),l=Dt.current,l!==null){switch(l.tag){case 13:return Yt===null?Kc():l.alternate===null&&_e===0&&(_e=3),l.flags&=-257,l.flags|=65536,l.lanes=n,a===Iu?l.flags|=16384:(t=l.updateQueue,t===null?l.updateQueue=new Set([a]):t.add(a),Wc(e,a,n)),!1;case 22:return l.flags|=65536,a===Iu?l.flags|=16384:(t=l.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=t):(l=t.retryQueue,l===null?t.retryQueue=new Set([a]):l.add(a)),Wc(e,a,n)),!1}throw Error(o(435,l.tag))}return Wc(e,a,n),Kc(),!1}if(de)return t=Dt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,a!==Zu&&(e=Error(o(422),{cause:a}),en(At(e,l)))):(a!==Zu&&(t=Error(o(423),{cause:a}),en(At(t,l))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,a=At(a,l),n=Ec(e.stateNode,a,n),tc(e,n),_e!==4&&(_e=2)),!1;var i=Error(o(520),{cause:a});if(i=At(i,l),zn===null?zn=[i]:zn.push(i),_e!==4&&(_e=2),t===null)return!0;a=At(a,l),l=t;do{switch(l.tag){case 3:return l.flags|=65536,e=n&-n,l.lanes|=e,e=Ec(l.stateNode,a,e),tc(l,e),!1;case 1:if(t=l.type,i=l.stateNode,(l.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(zl===null||!zl.has(i))))return l.flags|=65536,n&=-n,l.lanes|=n,n=$s(n),Is(n,e,l,a),tc(l,n),!1}l=l.return}while(l!==null);return!1}var Ps=Error(o(461)),Xe=!1;function We(e,t,l,a){t.child=e===null?Vs(t,null,l,a):Ea(t,e.child,l,a)}function ef(e,t,l,a,n){l=l.render;var i=t.ref;if("ref"in a){var u={};for(var c in a)c!=="ref"&&(u[c]=a[c])}else u=a;return Xl(t),a=uc(e,t,l,u,i,n),c=cc(),e!==null&&!Xe?(rc(e,t,n),el(e,t,n)):(de&&c&&Vu(t),t.flags|=1,We(e,t,a,n),t.child)}function tf(e,t,l,a,n){if(e===null){var i=l.type;return typeof i=="function"&&!Yu(i)&&i.defaultProps===void 0&&l.compare===null?(t.tag=15,t.type=i,lf(e,t,i,a,n)):(e=ri(l.type,null,a,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!xc(e,n)){var u=i.memoizedProps;if(l=l.compare,l=l!==null?l:Fa,l(u,a)&&e.ref===t.ref)return el(e,t,n)}return t.flags|=1,e=Kt(i,a),e.ref=t.ref,e.return=t,t.child=e}function lf(e,t,l,a,n){if(e!==null){var i=e.memoizedProps;if(Fa(i,a)&&e.ref===t.ref)if(Xe=!1,t.pendingProps=a=i,xc(e,n))(e.flags&131072)!==0&&(Xe=!0);else return t.lanes=e.lanes,el(e,t,n)}return Ac(e,t,l,a,n)}function af(e,t,l){var a=t.pendingProps,n=a.children,i=e!==null?e.memoizedState:null;if(a.mode==="hidden"){if((t.flags&128)!==0){if(a=i!==null?i.baseLanes|l:l,e!==null){for(n=t.child=e.child,i=0;n!==null;)i=i|n.lanes|n.childLanes,n=n.sibling;t.childLanes=i&~a}else t.childLanes=0,t.child=null;return nf(e,t,a,l)}if((l&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&hi(t,i!==null?i.cachePool:null),i!==null?ls(t,i):ac(),Xs(t);else return t.lanes=t.childLanes=536870912,nf(e,t,i!==null?i.baseLanes|l:l,l)}else i!==null?(hi(t,i.cachePool),ls(t,i),pl(),t.memoizedState=null):(e!==null&&hi(t,null),ac(),pl());return We(e,t,n,l),t.child}function nf(e,t,l,a){var n=$u();return n=n===null?null:{parent:Ye._currentValue,pool:n},t.memoizedState={baseLanes:l,cachePool:n},e!==null&&hi(t,null),ac(),Xs(t),e!==null&&tn(e,t,a,!0),null}function Hi(e,t){var l=t.ref;if(l===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(o(284));(e===null||e.ref!==l)&&(t.flags|=4194816)}}function Ac(e,t,l,a,n){return Xl(t),l=uc(e,t,l,a,void 0,n),a=cc(),e!==null&&!Xe?(rc(e,t,n),el(e,t,n)):(de&&a&&Vu(t),t.flags|=1,We(e,t,l,n),t.child)}function uf(e,t,l,a,n,i){return Xl(t),t.updateQueue=null,l=ns(t,a,l,n),as(e),a=cc(),e!==null&&!Xe?(rc(e,t,i),el(e,t,i)):(de&&a&&Vu(t),t.flags|=1,We(e,t,l,i),t.child)}function cf(e,t,l,a,n){if(Xl(t),t.stateNode===null){var i=ha,u=l.contextType;typeof u=="object"&&u!==null&&(i=et(u)),i=new l(a,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=zc,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=a,i.state=t.memoizedState,i.refs={},Pu(t),u=l.contextType,i.context=typeof u=="object"&&u!==null?et(u):ha,i.state=t.memoizedState,u=l.getDerivedStateFromProps,typeof u=="function"&&(Tc(t,l,u,a),i.state=t.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&zc.enqueueReplaceState(i,i.state,null),on(t,a,i,n),rn(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){i=t.stateNode;var c=t.memoizedProps,s=Kl(l,c);i.props=s;var y=i.context,E=l.contextType;u=ha,typeof E=="object"&&E!==null&&(u=et(E));var O=l.getDerivedStateFromProps;E=typeof O=="function"||typeof i.getSnapshotBeforeUpdate=="function",c=t.pendingProps!==c,E||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c||y!==u)&&Qs(t,i,a,u),fl=!1;var b=t.memoizedState;i.state=b,on(t,a,i,n),rn(),y=t.memoizedState,c||b!==y||fl?(typeof O=="function"&&(Tc(t,l,O,a),y=t.memoizedState),(s=fl||Zs(t,l,s,a,b,y,u))?(E||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=y),i.props=a,i.state=y,i.context=u,a=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{i=t.stateNode,ec(e,t),u=t.memoizedProps,E=Kl(l,u),i.props=E,O=t.pendingProps,b=i.context,y=l.contextType,s=ha,typeof y=="object"&&y!==null&&(s=et(y)),c=l.getDerivedStateFromProps,(y=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==O||b!==s)&&Qs(t,i,a,s),fl=!1,b=t.memoizedState,i.state=b,on(t,a,i,n),rn();var v=t.memoizedState;u!==O||b!==v||fl||e!==null&&e.dependencies!==null&&fi(e.dependencies)?(typeof c=="function"&&(Tc(t,l,c,a),v=t.memoizedState),(E=fl||Zs(t,l,E,a,b,v,s)||e!==null&&e.dependencies!==null&&fi(e.dependencies))?(y||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,v,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,v,s)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&b===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&b===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=v),i.props=a,i.state=v,i.context=s,a=E):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&b===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&b===e.memoizedState||(t.flags|=1024),a=!1)}return i=a,Hi(e,t),a=(t.flags&128)!==0,i||a?(i=t.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&a?(t.child=Ea(t,e.child,null,n),t.child=Ea(t,null,l,n)):We(e,t,l,n),t.memoizedState=i.state,e=t.child):e=el(e,t,n),e}function rf(e,t,l,a){return Pa(),t.flags|=256,We(e,t,l,a),t.child}var wc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Oc(e){return{baseLanes:e,cachePool:Jo()}}function Mc(e,t,l){return e=e!==null?e.childLanes&~l:0,t&&(e|=Ut),e}function of(e,t,l){var a=t.pendingProps,n=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(Ge.current&2)!==0),u&&(n=!0,t.flags&=-129),u=(t.flags&32)!==0,t.flags&=-33,e===null){if(de){if(n?ml(t):pl(),de){var c=Re,s;if(s=c){e:{for(s=c,c=jt;s.nodeType!==8;){if(!c){c=null;break e}if(s=Bt(s.nextSibling),s===null){c=null;break e}}c=s}c!==null?(t.memoizedState={dehydrated:c,treeContext:jl!==null?{id:Jt,overflow:Wt}:null,retryLane:536870912,hydrationErrors:null},s=mt(18,null,null,0),s.stateNode=c,s.return=t,t.child=s,ut=t,Re=null,s=!0):s=!1}s||kl(t)}if(c=t.memoizedState,c!==null&&(c=c.dehydrated,c!==null))return sr(c)?t.lanes=32:t.lanes=536870912,null;Pt(t)}return c=a.children,a=a.fallback,n?(pl(),n=t.mode,c=xi({mode:"hidden",children:c},n),a=Cl(a,n,l,null),c.return=t,a.return=t,c.sibling=a,t.child=c,n=t.child,n.memoizedState=Oc(l),n.childLanes=Mc(e,u,l),t.memoizedState=wc,a):(ml(t),Dc(t,c))}if(s=e.memoizedState,s!==null&&(c=s.dehydrated,c!==null)){if(i)t.flags&256?(ml(t),t.flags&=-257,t=Uc(e,t,l)):t.memoizedState!==null?(pl(),t.child=e.child,t.flags|=128,t=null):(pl(),n=a.fallback,c=t.mode,a=xi({mode:"visible",children:a.children},c),n=Cl(n,c,l,null),n.flags|=2,a.return=t,n.return=t,a.sibling=n,t.child=a,Ea(t,e.child,null,l),a=t.child,a.memoizedState=Oc(l),a.childLanes=Mc(e,u,l),t.memoizedState=wc,t=n);else if(ml(t),sr(c)){if(u=c.nextSibling&&c.nextSibling.dataset,u)var y=u.dgst;u=y,a=Error(o(419)),a.stack="",a.digest=u,en({value:a,source:null,stack:null}),t=Uc(e,t,l)}else if(Xe||tn(e,t,l,!1),u=(l&e.childLanes)!==0,Xe||u){if(u=we,u!==null&&(a=l&-l,a=(a&42)!==0?1:fu(a),a=(a&(u.suspendedLanes|l))!==0?0:a,a!==0&&a!==s.retryLane))throw s.retryLane=a,da(e,a),St(u,e,a),Ps;c.data==="$?"||Kc(),t=Uc(e,t,l)}else c.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=s.treeContext,Re=Bt(c.nextSibling),ut=t,de=!0,Gl=null,jt=!1,e!==null&&(Ot[Mt++]=Jt,Ot[Mt++]=Wt,Ot[Mt++]=jl,Jt=e.id,Wt=e.overflow,jl=t),t=Dc(t,a.children),t.flags|=4096);return t}return n?(pl(),n=a.fallback,c=t.mode,s=e.child,y=s.sibling,a=Kt(s,{mode:"hidden",children:a.children}),a.subtreeFlags=s.subtreeFlags&65011712,y!==null?n=Kt(y,n):(n=Cl(n,c,l,null),n.flags|=2),n.return=t,a.return=t,a.sibling=n,t.child=a,a=n,n=t.child,c=e.child.memoizedState,c===null?c=Oc(l):(s=c.cachePool,s!==null?(y=Ye._currentValue,s=s.parent!==y?{parent:y,pool:y}:s):s=Jo(),c={baseLanes:c.baseLanes|l,cachePool:s}),n.memoizedState=c,n.childLanes=Mc(e,u,l),t.memoizedState=wc,a):(ml(t),l=e.child,e=l.sibling,l=Kt(l,{mode:"visible",children:a.children}),l.return=t,l.sibling=null,e!==null&&(u=t.deletions,u===null?(t.deletions=[e],t.flags|=16):u.push(e)),t.child=l,t.memoizedState=null,l)}function Dc(e,t){return t=xi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function xi(e,t){return e=mt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Uc(e,t,l){return Ea(t,e.child,null,l),e=Dc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function sf(e,t,l){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Ku(e.return,t,l)}function Hc(e,t,l,a,n){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:n}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=a,i.tail=l,i.tailMode=n)}function ff(e,t,l){var a=t.pendingProps,n=a.revealOrder,i=a.tail;if(We(e,t,a.children,l),a=Ge.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&sf(e,l,t);else if(e.tag===19)sf(e,l,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}switch(R(Ge,a),n){case"forwards":for(l=t.child,n=null;l!==null;)e=l.alternate,e!==null&&Mi(e)===null&&(n=l),l=l.sibling;l=n,l===null?(n=t.child,t.child=null):(n=l.sibling,l.sibling=null),Hc(t,!1,n,l,i);break;case"backwards":for(l=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&Mi(e)===null){t.child=n;break}e=n.sibling,n.sibling=l,l=n,n=e}Hc(t,!0,l,null,i);break;case"together":Hc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function el(e,t,l){if(e!==null&&(t.dependencies=e.dependencies),Tl|=t.lanes,(l&t.childLanes)===0)if(e!==null){if(tn(e,t,l,!1),(l&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,l=Kt(e,e.pendingProps),t.child=l,l.return=t;e.sibling!==null;)e=e.sibling,l=l.sibling=Kt(e,e.pendingProps),l.return=t;l.sibling=null}return t.child}function xc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&fi(e)))}function xg(e,t,l){switch(t.tag){case 3:H(t,t.stateNode.containerInfo),sl(t,Ye,e.memoizedState.cache),Pa();break;case 27:case 5:B(t);break;case 4:H(t,t.stateNode.containerInfo);break;case 10:sl(t,t.type,t.memoizedProps.value);break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(ml(t),t.flags|=128,null):(l&t.child.childLanes)!==0?of(e,t,l):(ml(t),e=el(e,t,l),e!==null?e.sibling:null);ml(t);break;case 19:var n=(e.flags&128)!==0;if(a=(l&t.childLanes)!==0,a||(tn(e,t,l,!1),a=(l&t.childLanes)!==0),n){if(a)return ff(e,t,l);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),R(Ge,Ge.current),a)break;return null;case 22:case 23:return t.lanes=0,af(e,t,l);case 24:sl(t,Ye,e.memoizedState.cache)}return el(e,t,l)}function df(e,t,l){if(e!==null)if(e.memoizedProps!==t.pendingProps)Xe=!0;else{if(!xc(e,l)&&(t.flags&128)===0)return Xe=!1,xg(e,t,l);Xe=(e.flags&131072)!==0}else Xe=!1,de&&(t.flags&1048576)!==0&&Go(t,si,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var a=t.elementType,n=a._init;if(a=n(a._payload),t.type=a,typeof a=="function")Yu(a)?(e=Kl(a,e),t.tag=1,t=cf(null,t,a,e,l)):(t.tag=0,t=Ac(null,t,a,e,l));else{if(a!=null){if(n=a.$$typeof,n===Me){t.tag=11,t=ef(null,t,a,e,l);break e}else if(n===le){t.tag=14,t=tf(null,t,a,e,l);break e}}throw t=at(a)||a,Error(o(306,t,""))}}return t;case 0:return Ac(e,t,t.type,t.pendingProps,l);case 1:return a=t.type,n=Kl(a,t.pendingProps),cf(e,t,a,n,l);case 3:e:{if(H(t,t.stateNode.containerInfo),e===null)throw Error(o(387));a=t.pendingProps;var i=t.memoizedState;n=i.element,ec(e,t),on(t,a,null,l);var u=t.memoizedState;if(a=u.cache,sl(t,Ye,a),a!==i.cache&&Ju(t,[Ye],l,!0),rn(),a=u.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:u.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=rf(e,t,a,l);break e}else if(a!==n){n=At(Error(o(424)),t),en(n),t=rf(e,t,a,l);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Re=Bt(e.firstChild),ut=t,de=!0,Gl=null,jt=!0,l=Vs(t,null,a,l),t.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(Pa(),a===n){t=el(e,t,l);break e}We(e,t,a,l)}t=t.child}return t;case 26:return Hi(e,t),e===null?(l=pd(t.type,null,t.pendingProps,null))?t.memoizedState=l:de||(l=t.type,e=t.pendingProps,a=Zi(W.current).createElement(l),a[Pe]=t,a[ct]=e,$e(a,l,e),Ve(a),t.stateNode=a):t.memoizedState=pd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return B(t),e===null&&de&&(a=t.stateNode=hd(t.type,t.pendingProps,W.current),ut=t,jt=!0,n=Re,wl(t.type)?(fr=n,Re=Bt(a.firstChild)):Re=n),We(e,t,t.pendingProps.children,l),Hi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&de&&((n=a=Re)&&(a=im(a,t.type,t.pendingProps,jt),a!==null?(t.stateNode=a,ut=t,Re=Bt(a.firstChild),jt=!1,n=!0):n=!1),n||kl(t)),B(t),n=t.type,i=t.pendingProps,u=e!==null?e.memoizedProps:null,a=i.children,cr(n,i)?a=null:u!==null&&cr(n,u)&&(t.flags|=32),t.memoizedState!==null&&(n=uc(e,t,Eg,null,null,l),xn._currentValue=n),Hi(e,t),We(e,t,a,l),t.child;case 6:return e===null&&de&&((e=l=Re)&&(l=um(l,t.pendingProps,jt),l!==null?(t.stateNode=l,ut=t,Re=null,e=!0):e=!1),e||kl(t)),null;case 13:return of(e,t,l);case 4:return H(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Ea(t,null,a,l):We(e,t,a,l),t.child;case 11:return ef(e,t,t.type,t.pendingProps,l);case 7:return We(e,t,t.pendingProps,l),t.child;case 8:return We(e,t,t.pendingProps.children,l),t.child;case 12:return We(e,t,t.pendingProps.children,l),t.child;case 10:return a=t.pendingProps,sl(t,t.type,a.value),We(e,t,a.children,l),t.child;case 9:return n=t.type._context,a=t.pendingProps.children,Xl(t),n=et(n),a=a(n),t.flags|=1,We(e,t,a,l),t.child;case 14:return tf(e,t,t.type,t.pendingProps,l);case 15:return lf(e,t,t.type,t.pendingProps,l);case 19:return ff(e,t,l);case 31:return a=t.pendingProps,l=t.mode,a={mode:a.mode,children:a.children},e===null?(l=xi(a,l),l.ref=t.ref,t.child=l,l.return=t,t=l):(l=Kt(e.child,a),l.ref=t.ref,t.child=l,l.return=t,t=l),t;case 22:return af(e,t,l);case 24:return Xl(t),a=et(Ye),e===null?(n=$u(),n===null&&(n=we,i=Wu(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=l),n=i),t.memoizedState={parent:a,cache:n},Pu(t),sl(t,Ye,n)):((e.lanes&l)!==0&&(ec(e,t),on(t,null,null,l),rn()),n=e.memoizedState,i=t.memoizedState,n.parent!==a?(n={parent:a,cache:a},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),sl(t,Ye,a)):(a=i.cache,sl(t,Ye,a),a!==n.cache&&Ju(t,[Ye],l,!0))),We(e,t,t.pendingProps.children,l),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function tl(e){e.flags|=4}function hf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Td(t)){if(t=Dt.current,t!==null&&((re&4194048)===re?Yt!==null:(re&62914560)!==re&&(re&536870912)===0||t!==Yt))throw un=Iu,Wo;e.flags|=8192}}function Ri(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Vr():536870912,e.lanes|=t,Ma|=t)}function pn(e,t){if(!de)switch(e.tailMode){case"hidden":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?e.tail=null:l.sibling=null;break;case"collapsed":l=e.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function xe(e){var t=e.alternate!==null&&e.alternate.child===e.child,l=0,a=0;if(t)for(var n=e.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags&65011712,a|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=a,e.childLanes=l,t}function Rg(e,t,l){var a=t.pendingProps;switch(Xu(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xe(t),null;case 1:return xe(t),null;case 3:return l=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),$t(Ye),D(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(Ia(t)?tl(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Xo())),xe(t),null;case 26:return l=t.memoizedState,e===null?(tl(t),l!==null?(xe(t),hf(t,l)):(xe(t),t.flags&=-16777217)):l?l!==e.memoizedState?(tl(t),xe(t),hf(t,l)):(xe(t),t.flags&=-16777217):(e.memoizedProps!==a&&tl(t),xe(t),t.flags&=-16777217),null;case 27:Y(t),l=W.current;var n=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==a&&tl(t);else{if(!a){if(t.stateNode===null)throw Error(o(166));return xe(t),null}e=C.current,Ia(t)?ko(t):(e=hd(n,a,l),t.stateNode=e,tl(t))}return xe(t),null;case 5:if(Y(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&tl(t);else{if(!a){if(t.stateNode===null)throw Error(o(166));return xe(t),null}if(e=C.current,Ia(t))ko(t);else{switch(n=Zi(W.current),e){case 1:e=n.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:e=n.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":e=n.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":e=n.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":e=n.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof a.is=="string"?n.createElement("select",{is:a.is}):n.createElement("select"),a.multiple?e.multiple=!0:a.size&&(e.size=a.size);break;default:e=typeof a.is=="string"?n.createElement(l,{is:a.is}):n.createElement(l)}}e[Pe]=t,e[ct]=a;e:for(n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.tag!==27&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}t.stateNode=e;e:switch($e(e,l,a),l){case"button":case"input":case"select":case"textarea":e=!!a.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&tl(t)}}return xe(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&tl(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(o(166));if(e=W.current,Ia(t)){if(e=t.stateNode,l=t.memoizedProps,a=null,n=ut,n!==null)switch(n.tag){case 27:case 5:a=n.memoizedProps}e[Pe]=t,e=!!(e.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||ud(e.nodeValue,l)),e||kl(t)}else e=Zi(e).createTextNode(a),e[Pe]=t,t.stateNode=e}return xe(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=Ia(t),a!==null&&a.dehydrated!==null){if(e===null){if(!n)throw Error(o(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(o(317));n[Pe]=t}else Pa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;xe(t),n=!1}else n=Xo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(Pt(t),t):(Pt(t),null)}if(Pt(t),(t.flags&128)!==0)return t.lanes=l,t;if(l=a!==null,e=e!==null&&e.memoizedState!==null,l){a=t.child,n=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(n=a.alternate.memoizedState.cachePool.pool);var i=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==n&&(a.flags|=2048)}return l!==e&&l&&(t.child.flags|=8192),Ri(t,t.updateQueue),xe(t),null;case 4:return D(),e===null&&lr(t.stateNode.containerInfo),xe(t),null;case 10:return $t(t.type),xe(t),null;case 19:if(x(Ge),n=t.memoizedState,n===null)return xe(t),null;if(a=(t.flags&128)!==0,i=n.rendering,i===null)if(a)pn(n,!1);else{if(_e!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Mi(e),i!==null){for(t.flags|=128,pn(n,!1),e=i.updateQueue,t.updateQueue=e,Ri(t,e),t.subtreeFlags=0,e=l,l=t.child;l!==null;)Yo(l,e),l=l.sibling;return R(Ge,Ge.current&1|2),t.child}e=e.sibling}n.tail!==null&&it()>Ni&&(t.flags|=128,a=!0,pn(n,!1),t.lanes=4194304)}else{if(!a)if(e=Mi(i),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Ri(t,e),pn(n,!0),n.tail===null&&n.tailMode==="hidden"&&!i.alternate&&!de)return xe(t),null}else 2*it()-n.renderingStartTime>Ni&&l!==536870912&&(t.flags|=128,a=!0,pn(n,!1),t.lanes=4194304);n.isBackwards?(i.sibling=t.child,t.child=i):(e=n.last,e!==null?e.sibling=i:t.child=i,n.last=i)}return n.tail!==null?(t=n.tail,n.rendering=t,n.tail=t.sibling,n.renderingStartTime=it(),t.sibling=null,e=Ge.current,R(Ge,a?e&1|2:e&1),t):(xe(t),null);case 22:case 23:return Pt(t),nc(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(l&536870912)!==0&&(t.flags&128)===0&&(xe(t),t.subtreeFlags&6&&(t.flags|=8192)):xe(t),l=t.updateQueue,l!==null&&Ri(t,l.retryQueue),l=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==l&&(t.flags|=2048),e!==null&&x(Zl),null;case 24:return l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),$t(Ye),xe(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function _g(e,t){switch(Xu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return $t(Ye),D(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Y(t),null;case 13:if(Pt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));Pa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return x(Ge),null;case 4:return D(),null;case 10:return $t(t.type),null;case 22:case 23:return Pt(t),nc(),e!==null&&x(Zl),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return $t(Ye),null;case 25:return null;default:return null}}function gf(e,t){switch(Xu(t),t.tag){case 3:$t(Ye),D();break;case 26:case 27:case 5:Y(t);break;case 4:D();break;case 13:Pt(t);break;case 19:x(Ge);break;case 10:$t(t.type);break;case 22:case 23:Pt(t),nc(),e!==null&&x(Zl);break;case 24:$t(Ye)}}function yn(e,t){try{var l=t.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var n=a.next;l=n;do{if((l.tag&e)===e){a=void 0;var i=l.create,u=l.inst;a=i(),u.destroy=a}l=l.next}while(l!==n)}}catch(c){ze(t,t.return,c)}}function yl(e,t,l){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&e)===e){var u=a.inst,c=u.destroy;if(c!==void 0){u.destroy=void 0,n=t;var s=l,y=c;try{y()}catch(E){ze(n,s,E)}}}a=a.next}while(a!==i)}}catch(E){ze(t,t.return,E)}}function mf(e){var t=e.updateQueue;if(t!==null){var l=e.stateNode;try{ts(t,l)}catch(a){ze(e,e.return,a)}}}function pf(e,t,l){l.props=Kl(e.type,e.memoizedProps),l.state=e.memoizedState;try{l.componentWillUnmount()}catch(a){ze(e,t,a)}}function bn(e,t){try{var l=e.ref;if(l!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof l=="function"?e.refCleanup=l(a):l.current=a}}catch(n){ze(e,t,n)}}function Gt(e,t){var l=e.ref,a=e.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(n){ze(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(n){ze(e,t,n)}else l.current=null}function yf(e){var t=e.type,l=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break e;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(n){ze(e,e.return,n)}}function Rc(e,t,l){try{var a=e.stateNode;em(a,e.type,l,t),a[ct]=t}catch(n){ze(e,e.return,n)}}function bf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&wl(e.type)||e.tag===4}function _c(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||bf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&wl(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Bc(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(e,t):(t=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,t.appendChild(e),l=l._reactRootContainer,l!=null||t.onclick!==null||(t.onclick=Xi));else if(a!==4&&(a===27&&wl(e.type)&&(l=e.stateNode,t=null),e=e.child,e!==null))for(Bc(e,t,l),e=e.sibling;e!==null;)Bc(e,t,l),e=e.sibling}function _i(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?l.insertBefore(e,t):l.appendChild(e);else if(a!==4&&(a===27&&wl(e.type)&&(l=e.stateNode),e=e.child,e!==null))for(_i(e,t,l),e=e.sibling;e!==null;)_i(e,t,l),e=e.sibling}function vf(e){var t=e.stateNode,l=e.memoizedProps;try{for(var a=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);$e(t,a,l),t[Pe]=e,t[ct]=l}catch(i){ze(e,e.return,i)}}var ll=!1,Le=!1,Nc=!1,Sf=typeof WeakSet=="function"?WeakSet:Set,Ze=null;function Bg(e,t){if(e=e.containerInfo,ir=$i,e=Ho(e),_u(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var n=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{l.nodeType,i.nodeType}catch{l=null;break e}var u=0,c=-1,s=-1,y=0,E=0,O=e,b=null;t:for(;;){for(var v;O!==l||n!==0&&O.nodeType!==3||(c=u+n),O!==i||a!==0&&O.nodeType!==3||(s=u+a),O.nodeType===3&&(u+=O.nodeValue.length),(v=O.firstChild)!==null;)b=O,O=v;for(;;){if(O===e)break t;if(b===l&&++y===n&&(c=u),b===i&&++E===a&&(s=u),(v=O.nextSibling)!==null)break;O=b,b=O.parentNode}O=v}l=c===-1||s===-1?null:{start:c,end:s}}else l=null}l=l||{start:0,end:0}}else l=null;for(ur={focusedElem:e,selectionRange:l},$i=!1,Ze=t;Ze!==null;)if(t=Ze,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Ze=e;else for(;Ze!==null;){switch(t=Ze,i=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,l=t,n=i.memoizedProps,i=i.memoizedState,a=l.stateNode;try{var K=Kl(l.type,n,l.elementType===l.type);e=a.getSnapshotBeforeUpdate(K,i),a.__reactInternalSnapshotBeforeUpdate=e}catch(X){ze(l,l.return,X)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,l=e.nodeType,l===9)or(e);else if(l===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":or(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,Ze=e;break}Ze=t.return}}function Tf(e,t,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:bl(e,l),a&4&&yn(5,l);break;case 1:if(bl(e,l),a&4)if(e=l.stateNode,t===null)try{e.componentDidMount()}catch(u){ze(l,l.return,u)}else{var n=Kl(l.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(u){ze(l,l.return,u)}}a&64&&mf(l),a&512&&bn(l,l.return);break;case 3:if(bl(e,l),a&64&&(e=l.updateQueue,e!==null)){if(t=null,l.child!==null)switch(l.child.tag){case 27:case 5:t=l.child.stateNode;break;case 1:t=l.child.stateNode}try{ts(e,t)}catch(u){ze(l,l.return,u)}}break;case 27:t===null&&a&4&&vf(l);case 26:case 5:bl(e,l),t===null&&a&4&&yf(l),a&512&&bn(l,l.return);break;case 12:bl(e,l);break;case 13:bl(e,l),a&4&&Af(e,l),a&64&&(e=l.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(l=Vg.bind(null,l),cm(e,l))));break;case 22:if(a=l.memoizedState!==null||ll,!a){t=t!==null&&t.memoizedState!==null||Le,n=ll;var i=Le;ll=a,(Le=t)&&!i?vl(e,l,(l.subtreeFlags&8772)!==0):bl(e,l),ll=n,Le=i}break;case 30:break;default:bl(e,l)}}function zf(e){var t=e.alternate;t!==null&&(e.alternate=null,zf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&gu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ue=null,st=!1;function al(e,t,l){for(l=l.child;l!==null;)Ef(e,t,l),l=l.sibling}function Ef(e,t,l){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(Ca,l)}catch{}switch(l.tag){case 26:Le||Gt(l,t),al(e,t,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Le||Gt(l,t);var a=Ue,n=st;wl(l.type)&&(Ue=l.stateNode,st=!1),al(e,t,l),Mn(l.stateNode),Ue=a,st=n;break;case 5:Le||Gt(l,t);case 6:if(a=Ue,n=st,Ue=null,al(e,t,l),Ue=a,st=n,Ue!==null)if(st)try{(Ue.nodeType===9?Ue.body:Ue.nodeName==="HTML"?Ue.ownerDocument.body:Ue).removeChild(l.stateNode)}catch(i){ze(l,t,i)}else try{Ue.removeChild(l.stateNode)}catch(i){ze(l,t,i)}break;case 18:Ue!==null&&(st?(e=Ue,fd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.stateNode),Nn(e)):fd(Ue,l.stateNode));break;case 4:a=Ue,n=st,Ue=l.stateNode.containerInfo,st=!0,al(e,t,l),Ue=a,st=n;break;case 0:case 11:case 14:case 15:Le||yl(2,l,t),Le||yl(4,l,t),al(e,t,l);break;case 1:Le||(Gt(l,t),a=l.stateNode,typeof a.componentWillUnmount=="function"&&pf(l,t,a)),al(e,t,l);break;case 21:al(e,t,l);break;case 22:Le=(a=Le)||l.memoizedState!==null,al(e,t,l),Le=a;break;default:al(e,t,l)}}function Af(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Nn(e)}catch(l){ze(t,t.return,l)}}function Ng(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Sf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Sf),t;default:throw Error(o(435,e.tag))}}function Lc(e,t){var l=Ng(e);t.forEach(function(a){var n=Xg.bind(null,e,a);l.has(a)||(l.add(a),a.then(n,n))})}function pt(e,t){var l=t.deletions;if(l!==null)for(var a=0;a<l.length;a++){var n=l[a],i=e,u=t,c=u;e:for(;c!==null;){switch(c.tag){case 27:if(wl(c.type)){Ue=c.stateNode,st=!1;break e}break;case 5:Ue=c.stateNode,st=!1;break e;case 3:case 4:Ue=c.stateNode.containerInfo,st=!0;break e}c=c.return}if(Ue===null)throw Error(o(160));Ef(i,u,n),Ue=null,st=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)wf(t,e),t=t.sibling}var _t=null;function wf(e,t){var l=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:pt(t,e),yt(e),a&4&&(yl(3,e,e.return),yn(3,e),yl(5,e,e.return));break;case 1:pt(t,e),yt(e),a&512&&(Le||l===null||Gt(l,l.return)),a&64&&ll&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(l=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var n=_t;if(pt(t,e),yt(e),a&512&&(Le||l===null||Gt(l,l.return)),a&4){var i=l!==null?l.memoizedState:null;if(a=e.memoizedState,l===null)if(a===null)if(e.stateNode===null){e:{a=e.type,l=e.memoizedProps,n=n.ownerDocument||n;t:switch(a){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Ga]||i[Pe]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(a),n.head.insertBefore(i,n.querySelector("head > title"))),$e(i,a,l),i[Pe]=e,Ve(i),a=i;break e;case"link":var u=vd("link","href",n).get(a+(l.href||""));if(u){for(var c=0;c<u.length;c++)if(i=u[c],i.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&i.getAttribute("rel")===(l.rel==null?null:l.rel)&&i.getAttribute("title")===(l.title==null?null:l.title)&&i.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){u.splice(c,1);break t}}i=n.createElement(a),$e(i,a,l),n.head.appendChild(i);break;case"meta":if(u=vd("meta","content",n).get(a+(l.content||""))){for(c=0;c<u.length;c++)if(i=u[c],i.getAttribute("content")===(l.content==null?null:""+l.content)&&i.getAttribute("name")===(l.name==null?null:l.name)&&i.getAttribute("property")===(l.property==null?null:l.property)&&i.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&i.getAttribute("charset")===(l.charSet==null?null:l.charSet)){u.splice(c,1);break t}}i=n.createElement(a),$e(i,a,l),n.head.appendChild(i);break;default:throw Error(o(468,a))}i[Pe]=e,Ve(i),a=i}e.stateNode=a}else Sd(n,e.type,e.stateNode);else e.stateNode=bd(n,a,e.memoizedProps);else i!==a?(i===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):i.count--,a===null?Sd(n,e.type,e.stateNode):bd(n,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Rc(e,e.memoizedProps,l.memoizedProps)}break;case 27:pt(t,e),yt(e),a&512&&(Le||l===null||Gt(l,l.return)),l!==null&&a&4&&Rc(e,e.memoizedProps,l.memoizedProps);break;case 5:if(pt(t,e),yt(e),a&512&&(Le||l===null||Gt(l,l.return)),e.flags&32){n=e.stateNode;try{ia(n,"")}catch(v){ze(e,e.return,v)}}a&4&&e.stateNode!=null&&(n=e.memoizedProps,Rc(e,n,l!==null?l.memoizedProps:n)),a&1024&&(Nc=!0);break;case 6:if(pt(t,e),yt(e),a&4){if(e.stateNode===null)throw Error(o(162));a=e.memoizedProps,l=e.stateNode;try{l.nodeValue=a}catch(v){ze(e,e.return,v)}}break;case 3:if(Ji=null,n=_t,_t=Qi(t.containerInfo),pt(t,e),_t=n,yt(e),a&4&&l!==null&&l.memoizedState.isDehydrated)try{Nn(t.containerInfo)}catch(v){ze(e,e.return,v)}Nc&&(Nc=!1,Of(e));break;case 4:a=_t,_t=Qi(e.stateNode.containerInfo),pt(t,e),yt(e),_t=a;break;case 12:pt(t,e),yt(e);break;case 13:pt(t,e),yt(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(kc=it()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Lc(e,a)));break;case 22:n=e.memoizedState!==null;var s=l!==null&&l.memoizedState!==null,y=ll,E=Le;if(ll=y||n,Le=E||s,pt(t,e),Le=E,ll=y,yt(e),a&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(l===null||s||ll||Le||Jl(e)),l=null,t=e;;){if(t.tag===5||t.tag===26){if(l===null){s=l=t;try{if(i=s.stateNode,n)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{c=s.stateNode;var O=s.memoizedProps.style,b=O!=null&&O.hasOwnProperty("display")?O.display:null;c.style.display=b==null||typeof b=="boolean"?"":(""+b).trim()}}catch(v){ze(s,s.return,v)}}}else if(t.tag===6){if(l===null){s=t;try{s.stateNode.nodeValue=n?"":s.memoizedProps}catch(v){ze(s,s.return,v)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;l===t&&(l=null),t=t.return}l===t&&(l=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,Lc(e,l))));break;case 19:pt(t,e),yt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Lc(e,a)));break;case 30:break;case 21:break;default:pt(t,e),yt(e)}}function yt(e){var t=e.flags;if(t&2){try{for(var l,a=e.return;a!==null;){if(bf(a)){l=a;break}a=a.return}if(l==null)throw Error(o(160));switch(l.tag){case 27:var n=l.stateNode,i=_c(e);_i(e,i,n);break;case 5:var u=l.stateNode;l.flags&32&&(ia(u,""),l.flags&=-33);var c=_c(e);_i(e,c,u);break;case 3:case 4:var s=l.stateNode.containerInfo,y=_c(e);Bc(e,y,s);break;default:throw Error(o(161))}}catch(E){ze(e,e.return,E)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Of(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Of(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function bl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Tf(e,t.alternate,t),t=t.sibling}function Jl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:yl(4,t,t.return),Jl(t);break;case 1:Gt(t,t.return);var l=t.stateNode;typeof l.componentWillUnmount=="function"&&pf(t,t.return,l),Jl(t);break;case 27:Mn(t.stateNode);case 26:case 5:Gt(t,t.return),Jl(t);break;case 22:t.memoizedState===null&&Jl(t);break;case 30:Jl(t);break;default:Jl(t)}e=e.sibling}}function vl(e,t,l){for(l=l&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,n=e,i=t,u=i.flags;switch(i.tag){case 0:case 11:case 15:vl(n,i,l),yn(4,i);break;case 1:if(vl(n,i,l),a=i,n=a.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(y){ze(a,a.return,y)}if(a=i,n=a.updateQueue,n!==null){var c=a.stateNode;try{var s=n.shared.hiddenCallbacks;if(s!==null)for(n.shared.hiddenCallbacks=null,n=0;n<s.length;n++)es(s[n],c)}catch(y){ze(a,a.return,y)}}l&&u&64&&mf(i),bn(i,i.return);break;case 27:vf(i);case 26:case 5:vl(n,i,l),l&&a===null&&u&4&&yf(i),bn(i,i.return);break;case 12:vl(n,i,l);break;case 13:vl(n,i,l),l&&u&4&&Af(n,i);break;case 22:i.memoizedState===null&&vl(n,i,l),bn(i,i.return);break;case 30:break;default:vl(n,i,l)}t=t.sibling}}function qc(e,t){var l=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==l&&(e!=null&&e.refCount++,l!=null&&ln(l))}function Cc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ln(e))}function kt(e,t,l,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Mf(e,t,l,a),t=t.sibling}function Mf(e,t,l,a){var n=t.flags;switch(t.tag){case 0:case 11:case 15:kt(e,t,l,a),n&2048&&yn(9,t);break;case 1:kt(e,t,l,a);break;case 3:kt(e,t,l,a),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ln(e)));break;case 12:if(n&2048){kt(e,t,l,a),e=t.stateNode;try{var i=t.memoizedProps,u=i.id,c=i.onPostCommit;typeof c=="function"&&c(u,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(s){ze(t,t.return,s)}}else kt(e,t,l,a);break;case 13:kt(e,t,l,a);break;case 23:break;case 22:i=t.stateNode,u=t.alternate,t.memoizedState!==null?i._visibility&2?kt(e,t,l,a):vn(e,t):i._visibility&2?kt(e,t,l,a):(i._visibility|=2,Aa(e,t,l,a,(t.subtreeFlags&10256)!==0)),n&2048&&qc(u,t);break;case 24:kt(e,t,l,a),n&2048&&Cc(t.alternate,t);break;default:kt(e,t,l,a)}}function Aa(e,t,l,a,n){for(n=n&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var i=e,u=t,c=l,s=a,y=u.flags;switch(u.tag){case 0:case 11:case 15:Aa(i,u,c,s,n),yn(8,u);break;case 23:break;case 22:var E=u.stateNode;u.memoizedState!==null?E._visibility&2?Aa(i,u,c,s,n):vn(i,u):(E._visibility|=2,Aa(i,u,c,s,n)),n&&y&2048&&qc(u.alternate,u);break;case 24:Aa(i,u,c,s,n),n&&y&2048&&Cc(u.alternate,u);break;default:Aa(i,u,c,s,n)}t=t.sibling}}function vn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var l=e,a=t,n=a.flags;switch(a.tag){case 22:vn(l,a),n&2048&&qc(a.alternate,a);break;case 24:vn(l,a),n&2048&&Cc(a.alternate,a);break;default:vn(l,a)}t=t.sibling}}var Sn=8192;function wa(e){if(e.subtreeFlags&Sn)for(e=e.child;e!==null;)Df(e),e=e.sibling}function Df(e){switch(e.tag){case 26:wa(e),e.flags&Sn&&e.memoizedState!==null&&Sm(_t,e.memoizedState,e.memoizedProps);break;case 5:wa(e);break;case 3:case 4:var t=_t;_t=Qi(e.stateNode.containerInfo),wa(e),_t=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Sn,Sn=16777216,wa(e),Sn=t):wa(e));break;default:wa(e)}}function Uf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Tn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];Ze=a,xf(a,e)}Uf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Hf(e),e=e.sibling}function Hf(e){switch(e.tag){case 0:case 11:case 15:Tn(e),e.flags&2048&&yl(9,e,e.return);break;case 3:Tn(e);break;case 12:Tn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Bi(e)):Tn(e);break;default:Tn(e)}}function Bi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];Ze=a,xf(a,e)}Uf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:yl(8,t,t.return),Bi(t);break;case 22:l=t.stateNode,l._visibility&2&&(l._visibility&=-3,Bi(t));break;default:Bi(t)}e=e.sibling}}function xf(e,t){for(;Ze!==null;){var l=Ze;switch(l.tag){case 0:case 11:case 15:yl(8,l,t);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:ln(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,Ze=a;else e:for(l=e;Ze!==null;){a=Ze;var n=a.sibling,i=a.return;if(zf(a),a===l){Ze=null;break e}if(n!==null){n.return=i,Ze=n;break e}Ze=i}}}var Lg={getCacheForType:function(e){var t=et(Ye),l=t.data.get(e);return l===void 0&&(l=e(),t.data.set(e,l)),l}},qg=typeof WeakMap=="function"?WeakMap:Map,ge=0,we=null,ae=null,re=0,me=0,bt=null,Sl=!1,Oa=!1,jc=!1,nl=0,_e=0,Tl=0,Wl=0,Yc=0,Ut=0,Ma=0,zn=null,ft=null,Gc=!1,kc=0,Ni=1/0,Li=null,zl=null,Fe=0,El=null,Da=null,Ua=0,Vc=0,Xc=null,Rf=null,En=0,Zc=null;function vt(){if((ge&2)!==0&&re!==0)return re&-re;if(T.T!==null){var e=pa;return e!==0?e:Ic()}return Qr()}function _f(){Ut===0&&(Ut=(re&536870912)===0||de?kr():536870912);var e=Dt.current;return e!==null&&(e.flags|=32),Ut}function St(e,t,l){(e===we&&(me===2||me===9)||e.cancelPendingCommit!==null)&&(Ha(e,0),Al(e,re,Ut,!1)),Ya(e,l),((ge&2)===0||e!==we)&&(e===we&&((ge&2)===0&&(Wl|=l),_e===4&&Al(e,re,Ut,!1)),Vt(e))}function Bf(e,t,l){if((ge&6)!==0)throw Error(o(327));var a=!l&&(t&124)===0&&(t&e.expiredLanes)===0||ja(e,t),n=a?Yg(e,t):Jc(e,t,!0),i=a;do{if(n===0){Oa&&!a&&Al(e,t,0,!1);break}else{if(l=e.current.alternate,i&&!Cg(l)){n=Jc(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){t=u;e:{var c=e;n=zn;var s=c.current.memoizedState.isDehydrated;if(s&&(Ha(c,u).flags|=256),u=Jc(c,u,!1),u!==2){if(jc&&!s){c.errorRecoveryDisabledLanes|=i,Wl|=i,n=4;break e}i=ft,ft=n,i!==null&&(ft===null?ft=i:ft.push.apply(ft,i))}n=u}if(i=!1,n!==2)continue}}if(n===1){Ha(e,0),Al(e,t,0,!0);break}e:{switch(a=e,i=n,i){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:Al(a,t,Ut,!Sl);break e;case 2:ft=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(n=kc+300-it(),10<n)){if(Al(a,t,Ut,!Sl),Kn(a,0,!0)!==0)break e;a.timeoutHandle=od(Nf.bind(null,a,l,ft,Li,Gc,t,Ut,Wl,Ma,Sl,i,2,-0,0),n);break e}Nf(a,l,ft,Li,Gc,t,Ut,Wl,Ma,Sl,i,0,-0,0)}}break}while(!0);Vt(e)}function Nf(e,t,l,a,n,i,u,c,s,y,E,O,b,v){if(e.timeoutHandle=-1,O=t.subtreeFlags,(O&8192||(O&16785408)===16785408)&&(Hn={stylesheets:null,count:0,unsuspend:vm},Df(t),O=Tm(),O!==null)){e.cancelPendingCommit=O(kf.bind(null,e,t,i,l,a,n,u,c,s,E,1,b,v)),Al(e,i,u,!y);return}kf(e,t,i,l,a,n,u,c,s)}function Cg(e){for(var t=e;;){var l=t.tag;if((l===0||l===11||l===15)&&t.flags&16384&&(l=t.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var n=l[a],i=n.getSnapshot;n=n.value;try{if(!gt(i(),n))return!1}catch{return!1}}if(l=t.child,t.subtreeFlags&16384&&l!==null)l.return=t,t=l;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Al(e,t,l,a){t&=~Yc,t&=~Wl,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var n=t;0<n;){var i=31-ht(n),u=1<<i;a[i]=-1,n&=~u}l!==0&&Xr(e,l,t)}function qi(){return(ge&6)===0?(An(0),!1):!0}function Qc(){if(ae!==null){if(me===0)var e=ae.return;else e=ae,Ft=Vl=null,oc(e),za=null,gn=0,e=ae;for(;e!==null;)gf(e.alternate,e),e=e.return;ae=null}}function Ha(e,t){var l=e.timeoutHandle;l!==-1&&(e.timeoutHandle=-1,lm(l)),l=e.cancelPendingCommit,l!==null&&(e.cancelPendingCommit=null,l()),Qc(),we=e,ae=l=Kt(e.current,null),re=t,me=0,bt=null,Sl=!1,Oa=ja(e,t),jc=!1,Ma=Ut=Yc=Wl=Tl=_e=0,ft=zn=null,Gc=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var n=31-ht(a),i=1<<n;t|=e[n],a&=~i}return nl=t,ii(),l}function Lf(e,t){P=null,T.H=Ai,t===nn||t===gi?(t=Io(),me=3):t===Wo?(t=Io(),me=4):me=t===Ps?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,bt=t,ae===null&&(_e=1,Ui(e,At(t,e.current)))}function qf(){var e=T.H;return T.H=Ai,e===null?Ai:e}function Cf(){var e=T.A;return T.A=Lg,e}function Kc(){_e=4,Sl||(re&4194048)!==re&&Dt.current!==null||(Oa=!0),(Tl&134217727)===0&&(Wl&134217727)===0||we===null||Al(we,re,Ut,!1)}function Jc(e,t,l){var a=ge;ge|=2;var n=qf(),i=Cf();(we!==e||re!==t)&&(Li=null,Ha(e,t)),t=!1;var u=_e;e:do try{if(me!==0&&ae!==null){var c=ae,s=bt;switch(me){case 8:Qc(),u=6;break e;case 3:case 2:case 9:case 6:Dt.current===null&&(t=!0);var y=me;if(me=0,bt=null,xa(e,c,s,y),l&&Oa){u=0;break e}break;default:y=me,me=0,bt=null,xa(e,c,s,y)}}jg(),u=_e;break}catch(E){Lf(e,E)}while(!0);return t&&e.shellSuspendCounter++,Ft=Vl=null,ge=a,T.H=n,T.A=i,ae===null&&(we=null,re=0,ii()),u}function jg(){for(;ae!==null;)jf(ae)}function Yg(e,t){var l=ge;ge|=2;var a=qf(),n=Cf();we!==e||re!==t?(Li=null,Ni=it()+500,Ha(e,t)):Oa=ja(e,t);e:do try{if(me!==0&&ae!==null){t=ae;var i=bt;t:switch(me){case 1:me=0,bt=null,xa(e,t,i,1);break;case 2:case 9:if(Fo(i)){me=0,bt=null,Yf(t);break}t=function(){me!==2&&me!==9||we!==e||(me=7),Vt(e)},i.then(t,t);break e;case 3:me=7;break e;case 4:me=5;break e;case 7:Fo(i)?(me=0,bt=null,Yf(t)):(me=0,bt=null,xa(e,t,i,7));break;case 5:var u=null;switch(ae.tag){case 26:u=ae.memoizedState;case 5:case 27:var c=ae;if(!u||Td(u)){me=0,bt=null;var s=c.sibling;if(s!==null)ae=s;else{var y=c.return;y!==null?(ae=y,Ci(y)):ae=null}break t}}me=0,bt=null,xa(e,t,i,5);break;case 6:me=0,bt=null,xa(e,t,i,6);break;case 8:Qc(),_e=6;break e;default:throw Error(o(462))}}Gg();break}catch(E){Lf(e,E)}while(!0);return Ft=Vl=null,T.H=a,T.A=n,ge=l,ae!==null?0:(we=null,re=0,ii(),_e)}function Gg(){for(;ae!==null&&!Xt();)jf(ae)}function jf(e){var t=df(e.alternate,e,nl);e.memoizedProps=e.pendingProps,t===null?Ci(e):ae=t}function Yf(e){var t=e,l=t.alternate;switch(t.tag){case 15:case 0:t=uf(l,t,t.pendingProps,t.type,void 0,re);break;case 11:t=uf(l,t,t.pendingProps,t.type.render,t.ref,re);break;case 5:oc(t);default:gf(l,t),t=ae=Yo(t,nl),t=df(l,t,nl)}e.memoizedProps=e.pendingProps,t===null?Ci(e):ae=t}function xa(e,t,l,a){Ft=Vl=null,oc(t),za=null,gn=0;var n=t.return;try{if(Hg(e,n,t,l,re)){_e=1,Ui(e,At(l,e.current)),ae=null;return}}catch(i){if(n!==null)throw ae=n,i;_e=1,Ui(e,At(l,e.current)),ae=null;return}t.flags&32768?(de||a===1?e=!0:Oa||(re&536870912)!==0?e=!1:(Sl=e=!0,(a===2||a===9||a===3||a===6)&&(a=Dt.current,a!==null&&a.tag===13&&(a.flags|=16384))),Gf(t,e)):Ci(t)}function Ci(e){var t=e;do{if((t.flags&32768)!==0){Gf(t,Sl);return}e=t.return;var l=Rg(t.alternate,t,nl);if(l!==null){ae=l;return}if(t=t.sibling,t!==null){ae=t;return}ae=t=e}while(t!==null);_e===0&&(_e=5)}function Gf(e,t){do{var l=_g(e.alternate,e);if(l!==null){l.flags&=32767,ae=l;return}if(l=e.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!t&&(e=e.sibling,e!==null)){ae=e;return}ae=e=l}while(e!==null);_e=6,ae=null}function kf(e,t,l,a,n,i,u,c,s){e.cancelPendingCommit=null;do ji();while(Fe!==0);if((ge&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(i=t.lanes|t.childLanes,i|=Cu,vh(e,l,i,u,c,s),e===we&&(ae=we=null,re=0),Da=t,El=e,Ua=l,Vc=i,Xc=n,Rf=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Zg(Xn,function(){return Kf(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=T.T,T.T=null,n=_.p,_.p=2,u=ge,ge|=4;try{Bg(e,t,l)}finally{ge=u,_.p=n,T.T=a}}Fe=1,Vf(),Xf(),Zf()}}function Vf(){if(Fe===1){Fe=0;var e=El,t=Da,l=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||l){l=T.T,T.T=null;var a=_.p;_.p=2;var n=ge;ge|=4;try{wf(t,e);var i=ur,u=Ho(e.containerInfo),c=i.focusedElem,s=i.selectionRange;if(u!==c&&c&&c.ownerDocument&&Uo(c.ownerDocument.documentElement,c)){if(s!==null&&_u(c)){var y=s.start,E=s.end;if(E===void 0&&(E=y),"selectionStart"in c)c.selectionStart=y,c.selectionEnd=Math.min(E,c.value.length);else{var O=c.ownerDocument||document,b=O&&O.defaultView||window;if(b.getSelection){var v=b.getSelection(),K=c.textContent.length,X=Math.min(s.start,K),ve=s.end===void 0?X:Math.min(s.end,K);!v.extend&&X>ve&&(u=ve,ve=X,X=u);var m=Do(c,X),h=Do(c,ve);if(m&&h&&(v.rangeCount!==1||v.anchorNode!==m.node||v.anchorOffset!==m.offset||v.focusNode!==h.node||v.focusOffset!==h.offset)){var p=O.createRange();p.setStart(m.node,m.offset),v.removeAllRanges(),X>ve?(v.addRange(p),v.extend(h.node,h.offset)):(p.setEnd(h.node,h.offset),v.addRange(p))}}}}for(O=[],v=c;v=v.parentNode;)v.nodeType===1&&O.push({element:v,left:v.scrollLeft,top:v.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<O.length;c++){var w=O[c];w.element.scrollLeft=w.left,w.element.scrollTop=w.top}}$i=!!ir,ur=ir=null}finally{ge=n,_.p=a,T.T=l}}e.current=t,Fe=2}}function Xf(){if(Fe===2){Fe=0;var e=El,t=Da,l=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||l){l=T.T,T.T=null;var a=_.p;_.p=2;var n=ge;ge|=4;try{Tf(e,t.alternate,t)}finally{ge=n,_.p=a,T.T=l}}Fe=3}}function Zf(){if(Fe===4||Fe===3){Fe=0,$l();var e=El,t=Da,l=Ua,a=Rf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Fe=5:(Fe=0,Da=El=null,Qf(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(zl=null),du(l),t=t.stateNode,dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(Ca,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=T.T,n=_.p,_.p=2,T.T=null;try{for(var i=e.onRecoverableError,u=0;u<a.length;u++){var c=a[u];i(c.value,{componentStack:c.stack})}}finally{T.T=t,_.p=n}}(Ua&3)!==0&&ji(),Vt(e),n=e.pendingLanes,(l&4194090)!==0&&(n&42)!==0?e===Zc?En++:(En=0,Zc=e):En=0,An(0)}}function Qf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ln(t)))}function ji(e){return Vf(),Xf(),Zf(),Kf()}function Kf(){if(Fe!==5)return!1;var e=El,t=Vc;Vc=0;var l=du(Ua),a=T.T,n=_.p;try{_.p=32>l?32:l,T.T=null,l=Xc,Xc=null;var i=El,u=Ua;if(Fe=0,Da=El=null,Ua=0,(ge&6)!==0)throw Error(o(331));var c=ge;if(ge|=4,Hf(i.current),Mf(i,i.current,u,l),ge=c,An(0,!1),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(Ca,i)}catch{}return!0}finally{_.p=n,T.T=a,Qf(e,t)}}function Jf(e,t,l){t=At(l,t),t=Ec(e.stateNode,t,2),e=hl(e,t,2),e!==null&&(Ya(e,2),Vt(e))}function ze(e,t,l){if(e.tag===3)Jf(e,e,l);else for(;t!==null;){if(t.tag===3){Jf(t,e,l);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(zl===null||!zl.has(a))){e=At(l,e),l=$s(2),a=hl(t,l,2),a!==null&&(Is(l,a,t,e),Ya(a,2),Vt(a));break}}t=t.return}}function Wc(e,t,l){var a=e.pingCache;if(a===null){a=e.pingCache=new qg;var n=new Set;a.set(t,n)}else n=a.get(t),n===void 0&&(n=new Set,a.set(t,n));n.has(l)||(jc=!0,n.add(l),e=kg.bind(null,e,t,l),t.then(e,e))}function kg(e,t,l){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&l,e.warmLanes&=~l,we===e&&(re&l)===l&&(_e===4||_e===3&&(re&62914560)===re&&300>it()-kc?(ge&2)===0&&Ha(e,0):Yc|=l,Ma===re&&(Ma=0)),Vt(e)}function Wf(e,t){t===0&&(t=Vr()),e=da(e,t),e!==null&&(Ya(e,t),Vt(e))}function Vg(e){var t=e.memoizedState,l=0;t!==null&&(l=t.retryLane),Wf(e,l)}function Xg(e,t){var l=0;switch(e.tag){case 13:var a=e.stateNode,n=e.memoizedState;n!==null&&(l=n.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(o(314))}a!==null&&a.delete(t),Wf(e,l)}function Zg(e,t){return De(e,t)}var Yi=null,Ra=null,Fc=!1,Gi=!1,$c=!1,Fl=0;function Vt(e){e!==Ra&&e.next===null&&(Ra===null?Yi=Ra=e:Ra=Ra.next=e),Gi=!0,Fc||(Fc=!0,Kg())}function An(e,t){if(!$c&&Gi){$c=!0;do for(var l=!1,a=Yi;a!==null;){if(e!==0){var n=a.pendingLanes;if(n===0)var i=0;else{var u=a.suspendedLanes,c=a.pingedLanes;i=(1<<31-ht(42|e)+1)-1,i&=n&~(u&~c),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(l=!0,Pf(a,i))}else i=re,i=Kn(a,a===we?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||ja(a,i)||(l=!0,Pf(a,i));a=a.next}while(l);$c=!1}}function Qg(){Ff()}function Ff(){Gi=Fc=!1;var e=0;Fl!==0&&(tm()&&(e=Fl),Fl=0);for(var t=it(),l=null,a=Yi;a!==null;){var n=a.next,i=$f(a,t);i===0?(a.next=null,l===null?Yi=n:l.next=n,n===null&&(Ra=l)):(l=a,(e!==0||(i&3)!==0)&&(Gi=!0)),a=n}An(e)}function $f(e,t){for(var l=e.suspendedLanes,a=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var u=31-ht(i),c=1<<u,s=n[u];s===-1?((c&l)===0||(c&a)!==0)&&(n[u]=bh(c,t)):s<=t&&(e.expiredLanes|=c),i&=~c}if(t=we,l=re,l=Kn(e,e===t?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,l===0||e===t&&(me===2||me===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Je(a),e.callbackNode=null,e.callbackPriority=0;if((l&3)===0||ja(e,l)){if(t=l&-l,t===e.callbackPriority)return t;switch(a!==null&&Je(a),du(l)){case 2:case 8:l=Yr;break;case 32:l=Xn;break;case 268435456:l=Gr;break;default:l=Xn}return a=If.bind(null,e),l=De(l,a),e.callbackPriority=t,e.callbackNode=l,t}return a!==null&&a!==null&&Je(a),e.callbackPriority=2,e.callbackNode=null,2}function If(e,t){if(Fe!==0&&Fe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var l=e.callbackNode;if(ji()&&e.callbackNode!==l)return null;var a=re;return a=Kn(e,e===we?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Bf(e,a,t),$f(e,it()),e.callbackNode!=null&&e.callbackNode===l?If.bind(null,e):null)}function Pf(e,t){if(ji())return null;Bf(e,t,!0)}function Kg(){am(function(){(ge&6)!==0?De(jr,Qg):Ff()})}function Ic(){return Fl===0&&(Fl=kr()),Fl}function ed(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:In(""+e)}function td(e,t){var l=t.ownerDocument.createElement("input");return l.name=t.name,l.value=t.value,e.id&&l.setAttribute("form",e.id),t.parentNode.insertBefore(l,t),e=new FormData(e),l.parentNode.removeChild(l),e}function Jg(e,t,l,a,n){if(t==="submit"&&l&&l.stateNode===n){var i=ed((n[ct]||null).action),u=a.submitter;u&&(t=(t=u[ct]||null)?ed(t.formAction):u.getAttribute("formAction"),t!==null&&(i=t,u=null));var c=new li("action","action",null,a,n);e.push({event:c,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Fl!==0){var s=u?td(n,u):new FormData(n);bc(l,{pending:!0,data:s,method:n.method,action:i},null,s)}}else typeof i=="function"&&(c.preventDefault(),s=u?td(n,u):new FormData(n),bc(l,{pending:!0,data:s,method:n.method,action:i},i,s))},currentTarget:n}]})}}for(var Pc=0;Pc<qu.length;Pc++){var er=qu[Pc],Wg=er.toLowerCase(),Fg=er[0].toUpperCase()+er.slice(1);Rt(Wg,"on"+Fg)}Rt(_o,"onAnimationEnd"),Rt(Bo,"onAnimationIteration"),Rt(No,"onAnimationStart"),Rt("dblclick","onDoubleClick"),Rt("focusin","onFocus"),Rt("focusout","onBlur"),Rt(hg,"onTransitionRun"),Rt(gg,"onTransitionStart"),Rt(mg,"onTransitionCancel"),Rt(Lo,"onTransitionEnd"),la("onMouseEnter",["mouseout","mouseover"]),la("onMouseLeave",["mouseout","mouseover"]),la("onPointerEnter",["pointerout","pointerover"]),la("onPointerLeave",["pointerout","pointerover"]),Bl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Bl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Bl("onBeforeInput",["compositionend","keypress","textInput","paste"]),Bl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Bl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Bl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$g=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(wn));function ld(e,t){t=(t&4)!==0;for(var l=0;l<e.length;l++){var a=e[l],n=a.event;a=a.listeners;e:{var i=void 0;if(t)for(var u=a.length-1;0<=u;u--){var c=a[u],s=c.instance,y=c.currentTarget;if(c=c.listener,s!==i&&n.isPropagationStopped())break e;i=c,n.currentTarget=y;try{i(n)}catch(E){Di(E)}n.currentTarget=null,i=s}else for(u=0;u<a.length;u++){if(c=a[u],s=c.instance,y=c.currentTarget,c=c.listener,s!==i&&n.isPropagationStopped())break e;i=c,n.currentTarget=y;try{i(n)}catch(E){Di(E)}n.currentTarget=null,i=s}}}}function ne(e,t){var l=t[hu];l===void 0&&(l=t[hu]=new Set);var a=e+"__bubble";l.has(a)||(ad(t,e,2,!1),l.add(a))}function tr(e,t,l){var a=0;t&&(a|=4),ad(l,e,a,t)}var ki="_reactListening"+Math.random().toString(36).slice(2);function lr(e){if(!e[ki]){e[ki]=!0,Jr.forEach(function(l){l!=="selectionchange"&&($g.has(l)||tr(l,!1,e),tr(l,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ki]||(t[ki]=!0,tr("selectionchange",!1,t))}}function ad(e,t,l,a){switch(Md(t)){case 2:var n=Am;break;case 8:n=wm;break;default:n=pr}l=n.bind(null,t,l,e),n=void 0,!Au||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),a?n!==void 0?e.addEventListener(t,l,{capture:!0,passive:n}):e.addEventListener(t,l,!0):n!==void 0?e.addEventListener(t,l,{passive:n}):e.addEventListener(t,l,!1)}function ar(e,t,l,a,n){var i=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var u=a.tag;if(u===3||u===4){var c=a.stateNode.containerInfo;if(c===n)break;if(u===4)for(u=a.return;u!==null;){var s=u.tag;if((s===3||s===4)&&u.stateNode.containerInfo===n)return;u=u.return}for(;c!==null;){if(u=Pl(c),u===null)return;if(s=u.tag,s===5||s===6||s===26||s===27){a=i=u;continue e}c=c.parentNode}}a=a.return}ro(function(){var y=i,E=zu(l),O=[];e:{var b=qo.get(e);if(b!==void 0){var v=li,K=e;switch(e){case"keypress":if(ei(l)===0)break e;case"keydown":case"keyup":v=Zh;break;case"focusin":K="focus",v=Du;break;case"focusout":K="blur",v=Du;break;case"beforeblur":case"afterblur":v=Du;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=fo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=_h;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Jh;break;case _o:case Bo:case No:v=Lh;break;case Lo:v=Fh;break;case"scroll":case"scrollend":v=xh;break;case"wheel":v=Ih;break;case"copy":case"cut":case"paste":v=Ch;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=go;break;case"toggle":case"beforetoggle":v=eg}var X=(t&4)!==0,ve=!X&&(e==="scroll"||e==="scrollend"),m=X?b!==null?b+"Capture":null:b;X=[];for(var h=y,p;h!==null;){var w=h;if(p=w.stateNode,w=w.tag,w!==5&&w!==26&&w!==27||p===null||m===null||(w=Va(h,m),w!=null&&X.push(On(h,w,p))),ve)break;h=h.return}0<X.length&&(b=new v(b,K,null,l,E),O.push({event:b,listeners:X}))}}if((t&7)===0){e:{if(b=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",b&&l!==Tu&&(K=l.relatedTarget||l.fromElement)&&(Pl(K)||K[Il]))break e;if((v||b)&&(b=E.window===E?E:(b=E.ownerDocument)?b.defaultView||b.parentWindow:window,v?(K=l.relatedTarget||l.toElement,v=y,K=K?Pl(K):null,K!==null&&(ve=U(K),X=K.tag,K!==ve||X!==5&&X!==27&&X!==6)&&(K=null)):(v=null,K=y),v!==K)){if(X=fo,w="onMouseLeave",m="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(X=go,w="onPointerLeave",m="onPointerEnter",h="pointer"),ve=v==null?b:ka(v),p=K==null?b:ka(K),b=new X(w,h+"leave",v,l,E),b.target=ve,b.relatedTarget=p,w=null,Pl(E)===y&&(X=new X(m,h+"enter",K,l,E),X.target=p,X.relatedTarget=ve,w=X),ve=w,v&&K)t:{for(X=v,m=K,h=0,p=X;p;p=_a(p))h++;for(p=0,w=m;w;w=_a(w))p++;for(;0<h-p;)X=_a(X),h--;for(;0<p-h;)m=_a(m),p--;for(;h--;){if(X===m||m!==null&&X===m.alternate)break t;X=_a(X),m=_a(m)}X=null}else X=null;v!==null&&nd(O,b,v,X,!1),K!==null&&ve!==null&&nd(O,ve,K,X,!0)}}e:{if(b=y?ka(y):window,v=b.nodeName&&b.nodeName.toLowerCase(),v==="select"||v==="input"&&b.type==="file")var q=zo;else if(So(b))if(Eo)q=sg;else{q=rg;var te=cg}else v=b.nodeName,!v||v.toLowerCase()!=="input"||b.type!=="checkbox"&&b.type!=="radio"?y&&Su(y.elementType)&&(q=zo):q=og;if(q&&(q=q(e,y))){To(O,q,l,E);break e}te&&te(e,b,y),e==="focusout"&&y&&b.type==="number"&&y.memoizedProps.value!=null&&vu(b,"number",b.value)}switch(te=y?ka(y):window,e){case"focusin":(So(te)||te.contentEditable==="true")&&(oa=te,Bu=y,$a=null);break;case"focusout":$a=Bu=oa=null;break;case"mousedown":Nu=!0;break;case"contextmenu":case"mouseup":case"dragend":Nu=!1,xo(O,l,E);break;case"selectionchange":if(dg)break;case"keydown":case"keyup":xo(O,l,E)}var j;if(Hu)e:{switch(e){case"compositionstart":var Z="onCompositionStart";break e;case"compositionend":Z="onCompositionEnd";break e;case"compositionupdate":Z="onCompositionUpdate";break e}Z=void 0}else ra?bo(e,l)&&(Z="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&(Z="onCompositionStart");Z&&(mo&&l.locale!=="ko"&&(ra||Z!=="onCompositionStart"?Z==="onCompositionEnd"&&ra&&(j=oo()):(ol=E,wu="value"in ol?ol.value:ol.textContent,ra=!0)),te=Vi(y,Z),0<te.length&&(Z=new ho(Z,e,null,l,E),O.push({event:Z,listeners:te}),j?Z.data=j:(j=vo(l),j!==null&&(Z.data=j)))),(j=lg?ag(e,l):ng(e,l))&&(Z=Vi(y,"onBeforeInput"),0<Z.length&&(te=new ho("onBeforeInput","beforeinput",null,l,E),O.push({event:te,listeners:Z}),te.data=j)),Jg(O,e,y,l,E)}ld(O,t)})}function On(e,t,l){return{instance:e,listener:t,currentTarget:l}}function Vi(e,t){for(var l=t+"Capture",a=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Va(e,l),n!=null&&a.unshift(On(e,n,i)),n=Va(e,t),n!=null&&a.push(On(e,n,i))),e.tag===3)return a;e=e.return}return[]}function _a(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function nd(e,t,l,a,n){for(var i=t._reactName,u=[];l!==null&&l!==a;){var c=l,s=c.alternate,y=c.stateNode;if(c=c.tag,s!==null&&s===a)break;c!==5&&c!==26&&c!==27||y===null||(s=y,n?(y=Va(l,i),y!=null&&u.unshift(On(l,y,s))):n||(y=Va(l,i),y!=null&&u.push(On(l,y,s)))),l=l.return}u.length!==0&&e.push({event:t,listeners:u})}var Ig=/\r\n?/g,Pg=/\u0000|\uFFFD/g;function id(e){return(typeof e=="string"?e:""+e).replace(Ig,`
`).replace(Pg,"")}function ud(e,t){return t=id(t),id(e)===t}function Xi(){}function be(e,t,l,a,n,i){switch(l){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||ia(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&ia(e,""+a);break;case"className":Wn(e,"class",a);break;case"tabIndex":Wn(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Wn(e,l,a);break;case"style":uo(e,a,i);break;case"data":if(t!=="object"){Wn(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||l!=="href")){e.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=In(""+a),e.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(l==="formAction"?(t!=="input"&&be(e,t,"name",n.name,n,null),be(e,t,"formEncType",n.formEncType,n,null),be(e,t,"formMethod",n.formMethod,n,null),be(e,t,"formTarget",n.formTarget,n,null)):(be(e,t,"encType",n.encType,n,null),be(e,t,"method",n.method,n,null),be(e,t,"target",n.target,n,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=In(""+a),e.setAttribute(l,a);break;case"onClick":a!=null&&(e.onclick=Xi);break;case"onScroll":a!=null&&ne("scroll",e);break;case"onScrollEnd":a!=null&&ne("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(o(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(o(60));e.innerHTML=l}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}l=In(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""+a):e.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""):e.removeAttribute(l);break;case"capture":case"download":a===!0?e.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,a):e.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(l,a):e.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(l):e.setAttribute(l,a);break;case"popover":ne("beforetoggle",e),ne("toggle",e),Jn(e,"popover",a);break;case"xlinkActuate":Zt(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Zt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Zt(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Zt(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Zt(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Zt(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Zt(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Zt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Zt(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Jn(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=Uh.get(l)||l,Jn(e,l,a))}}function nr(e,t,l,a,n,i){switch(l){case"style":uo(e,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(o(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(o(60));e.innerHTML=l}}break;case"children":typeof a=="string"?ia(e,a):(typeof a=="number"||typeof a=="bigint")&&ia(e,""+a);break;case"onScroll":a!=null&&ne("scroll",e);break;case"onScrollEnd":a!=null&&ne("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Xi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Wr.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(n=l.endsWith("Capture"),t=l.slice(2,n?l.length-7:void 0),i=e[ct]||null,i=i!=null?i[l]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof a=="function")){typeof i!="function"&&i!==null&&(l in e?e[l]=null:e.hasAttribute(l)&&e.removeAttribute(l)),e.addEventListener(t,a,n);break e}l in e?e[l]=a:a===!0?e.setAttribute(l,""):Jn(e,l,a)}}}function $e(e,t,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ne("error",e),ne("load",e);var a=!1,n=!1,i;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];if(u!=null)switch(i){case"src":a=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:be(e,t,i,u,l,null)}}n&&be(e,t,"srcSet",l.srcSet,l,null),a&&be(e,t,"src",l.src,l,null);return;case"input":ne("invalid",e);var c=i=u=n=null,s=null,y=null;for(a in l)if(l.hasOwnProperty(a)){var E=l[a];if(E!=null)switch(a){case"name":n=E;break;case"type":u=E;break;case"checked":s=E;break;case"defaultChecked":y=E;break;case"value":i=E;break;case"defaultValue":c=E;break;case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(o(137,t));break;default:be(e,t,a,E,l,null)}}lo(e,i,c,s,y,u,n,!1),Fn(e);return;case"select":ne("invalid",e),a=u=i=null;for(n in l)if(l.hasOwnProperty(n)&&(c=l[n],c!=null))switch(n){case"value":i=c;break;case"defaultValue":u=c;break;case"multiple":a=c;default:be(e,t,n,c,l,null)}t=i,l=u,e.multiple=!!a,t!=null?na(e,!!a,t,!1):l!=null&&na(e,!!a,l,!0);return;case"textarea":ne("invalid",e),i=n=a=null;for(u in l)if(l.hasOwnProperty(u)&&(c=l[u],c!=null))switch(u){case"value":a=c;break;case"defaultValue":n=c;break;case"children":i=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(o(91));break;default:be(e,t,u,c,l,null)}no(e,a,n,i),Fn(e);return;case"option":for(s in l)if(l.hasOwnProperty(s)&&(a=l[s],a!=null))switch(s){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:be(e,t,s,a,l,null)}return;case"dialog":ne("beforetoggle",e),ne("toggle",e),ne("cancel",e),ne("close",e);break;case"iframe":case"object":ne("load",e);break;case"video":case"audio":for(a=0;a<wn.length;a++)ne(wn[a],e);break;case"image":ne("error",e),ne("load",e);break;case"details":ne("toggle",e);break;case"embed":case"source":case"link":ne("error",e),ne("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(y in l)if(l.hasOwnProperty(y)&&(a=l[y],a!=null))switch(y){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:be(e,t,y,a,l,null)}return;default:if(Su(t)){for(E in l)l.hasOwnProperty(E)&&(a=l[E],a!==void 0&&nr(e,t,E,a,l,void 0));return}}for(c in l)l.hasOwnProperty(c)&&(a=l[c],a!=null&&be(e,t,c,a,l,null))}function em(e,t,l,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,u=null,c=null,s=null,y=null,E=null;for(v in l){var O=l[v];if(l.hasOwnProperty(v)&&O!=null)switch(v){case"checked":break;case"value":break;case"defaultValue":s=O;default:a.hasOwnProperty(v)||be(e,t,v,null,a,O)}}for(var b in a){var v=a[b];if(O=l[b],a.hasOwnProperty(b)&&(v!=null||O!=null))switch(b){case"type":i=v;break;case"name":n=v;break;case"checked":y=v;break;case"defaultChecked":E=v;break;case"value":u=v;break;case"defaultValue":c=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(o(137,t));break;default:v!==O&&be(e,t,b,v,a,O)}}bu(e,u,c,s,y,E,i,n);return;case"select":v=u=c=b=null;for(i in l)if(s=l[i],l.hasOwnProperty(i)&&s!=null)switch(i){case"value":break;case"multiple":v=s;default:a.hasOwnProperty(i)||be(e,t,i,null,a,s)}for(n in a)if(i=a[n],s=l[n],a.hasOwnProperty(n)&&(i!=null||s!=null))switch(n){case"value":b=i;break;case"defaultValue":c=i;break;case"multiple":u=i;default:i!==s&&be(e,t,n,i,a,s)}t=c,l=u,a=v,b!=null?na(e,!!l,b,!1):!!a!=!!l&&(t!=null?na(e,!!l,t,!0):na(e,!!l,l?[]:"",!1));return;case"textarea":v=b=null;for(c in l)if(n=l[c],l.hasOwnProperty(c)&&n!=null&&!a.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:be(e,t,c,null,a,n)}for(u in a)if(n=a[u],i=l[u],a.hasOwnProperty(u)&&(n!=null||i!=null))switch(u){case"value":b=n;break;case"defaultValue":v=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(o(91));break;default:n!==i&&be(e,t,u,n,a,i)}ao(e,b,v);return;case"option":for(var K in l)if(b=l[K],l.hasOwnProperty(K)&&b!=null&&!a.hasOwnProperty(K))switch(K){case"selected":e.selected=!1;break;default:be(e,t,K,null,a,b)}for(s in a)if(b=a[s],v=l[s],a.hasOwnProperty(s)&&b!==v&&(b!=null||v!=null))switch(s){case"selected":e.selected=b&&typeof b!="function"&&typeof b!="symbol";break;default:be(e,t,s,b,a,v)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var X in l)b=l[X],l.hasOwnProperty(X)&&b!=null&&!a.hasOwnProperty(X)&&be(e,t,X,null,a,b);for(y in a)if(b=a[y],v=l[y],a.hasOwnProperty(y)&&b!==v&&(b!=null||v!=null))switch(y){case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(o(137,t));break;default:be(e,t,y,b,a,v)}return;default:if(Su(t)){for(var ve in l)b=l[ve],l.hasOwnProperty(ve)&&b!==void 0&&!a.hasOwnProperty(ve)&&nr(e,t,ve,void 0,a,b);for(E in a)b=a[E],v=l[E],!a.hasOwnProperty(E)||b===v||b===void 0&&v===void 0||nr(e,t,E,b,a,v);return}}for(var m in l)b=l[m],l.hasOwnProperty(m)&&b!=null&&!a.hasOwnProperty(m)&&be(e,t,m,null,a,b);for(O in a)b=a[O],v=l[O],!a.hasOwnProperty(O)||b===v||b==null&&v==null||be(e,t,O,b,a,v)}var ir=null,ur=null;function Zi(e){return e.nodeType===9?e:e.ownerDocument}function cd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function rd(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function cr(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var rr=null;function tm(){var e=window.event;return e&&e.type==="popstate"?e===rr?!1:(rr=e,!0):(rr=null,!1)}var od=typeof setTimeout=="function"?setTimeout:void 0,lm=typeof clearTimeout=="function"?clearTimeout:void 0,sd=typeof Promise=="function"?Promise:void 0,am=typeof queueMicrotask=="function"?queueMicrotask:typeof sd<"u"?function(e){return sd.resolve(null).then(e).catch(nm)}:od;function nm(e){setTimeout(function(){throw e})}function wl(e){return e==="head"}function fd(e,t){var l=t,a=0,n=0;do{var i=l.nextSibling;if(e.removeChild(l),i&&i.nodeType===8)if(l=i.data,l==="/$"){if(0<a&&8>a){l=a;var u=e.ownerDocument;if(l&1&&Mn(u.documentElement),l&2&&Mn(u.body),l&4)for(l=u.head,Mn(l),u=l.firstChild;u;){var c=u.nextSibling,s=u.nodeName;u[Ga]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&u.rel.toLowerCase()==="stylesheet"||l.removeChild(u),u=c}}if(n===0){e.removeChild(i),Nn(t);return}n--}else l==="$"||l==="$?"||l==="$!"?n++:a=l.charCodeAt(0)-48;else a=0;l=i}while(l);Nn(t)}function or(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var l=t;switch(t=t.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":or(l),gu(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}e.removeChild(l)}}function im(e,t,l,a){for(;e.nodeType===1;){var n=l;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Ga])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Bt(e.nextSibling),e===null)break}return null}function um(e,t,l){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!l||(e=Bt(e.nextSibling),e===null))return null;return e}function sr(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function cm(e,t){var l=e.ownerDocument;if(e.data!=="$?"||l.readyState==="complete")t();else{var a=function(){t(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Bt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var fr=null;function dd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"){if(t===0)return e;t--}else l==="/$"&&t++}e=e.previousSibling}return null}function hd(e,t,l){switch(t=Zi(l),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function Mn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);gu(e)}var Ht=new Map,gd=new Set;function Qi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var il=_.d;_.d={f:rm,r:om,D:sm,C:fm,L:dm,m:hm,X:mm,S:gm,M:pm};function rm(){var e=il.f(),t=qi();return e||t}function om(e){var t=ea(e);t!==null&&t.tag===5&&t.type==="form"?_s(t):il.r(e)}var Ba=typeof document>"u"?null:document;function md(e,t,l){var a=Ba;if(a&&typeof t=="string"&&t){var n=Et(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof l=="string"&&(n+='[crossorigin="'+l+'"]'),gd.has(n)||(gd.add(n),e={rel:e,crossOrigin:l,href:t},a.querySelector(n)===null&&(t=a.createElement("link"),$e(t,"link",e),Ve(t),a.head.appendChild(t)))}}function sm(e){il.D(e),md("dns-prefetch",e,null)}function fm(e,t){il.C(e,t),md("preconnect",e,t)}function dm(e,t,l){il.L(e,t,l);var a=Ba;if(a&&e&&t){var n='link[rel="preload"][as="'+Et(t)+'"]';t==="image"&&l&&l.imageSrcSet?(n+='[imagesrcset="'+Et(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(n+='[imagesizes="'+Et(l.imageSizes)+'"]')):n+='[href="'+Et(e)+'"]';var i=n;switch(t){case"style":i=Na(e);break;case"script":i=La(e)}Ht.has(i)||(e=N({rel:"preload",href:t==="image"&&l&&l.imageSrcSet?void 0:e,as:t},l),Ht.set(i,e),a.querySelector(n)!==null||t==="style"&&a.querySelector(Dn(i))||t==="script"&&a.querySelector(Un(i))||(t=a.createElement("link"),$e(t,"link",e),Ve(t),a.head.appendChild(t)))}}function hm(e,t){il.m(e,t);var l=Ba;if(l&&e){var a=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+Et(a)+'"][href="'+Et(e)+'"]',i=n;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=La(e)}if(!Ht.has(i)&&(e=N({rel:"modulepreload",href:e},t),Ht.set(i,e),l.querySelector(n)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(Un(i)))return}a=l.createElement("link"),$e(a,"link",e),Ve(a),l.head.appendChild(a)}}}function gm(e,t,l){il.S(e,t,l);var a=Ba;if(a&&e){var n=ta(a).hoistableStyles,i=Na(e);t=t||"default";var u=n.get(i);if(!u){var c={loading:0,preload:null};if(u=a.querySelector(Dn(i)))c.loading=5;else{e=N({rel:"stylesheet",href:e,"data-precedence":t},l),(l=Ht.get(i))&&dr(e,l);var s=u=a.createElement("link");Ve(s),$e(s,"link",e),s._p=new Promise(function(y,E){s.onload=y,s.onerror=E}),s.addEventListener("load",function(){c.loading|=1}),s.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Ki(u,t,a)}u={type:"stylesheet",instance:u,count:1,state:c},n.set(i,u)}}}function mm(e,t){il.X(e,t);var l=Ba;if(l&&e){var a=ta(l).hoistableScripts,n=La(e),i=a.get(n);i||(i=l.querySelector(Un(n)),i||(e=N({src:e,async:!0},t),(t=Ht.get(n))&&hr(e,t),i=l.createElement("script"),Ve(i),$e(i,"link",e),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function pm(e,t){il.M(e,t);var l=Ba;if(l&&e){var a=ta(l).hoistableScripts,n=La(e),i=a.get(n);i||(i=l.querySelector(Un(n)),i||(e=N({src:e,async:!0,type:"module"},t),(t=Ht.get(n))&&hr(e,t),i=l.createElement("script"),Ve(i),$e(i,"link",e),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function pd(e,t,l,a){var n=(n=W.current)?Qi(n):null;if(!n)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(t=Na(l.href),l=ta(n).hoistableStyles,a=l.get(t),a||(a={type:"style",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){e=Na(l.href);var i=ta(n).hoistableStyles,u=i.get(e);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,u),(i=n.querySelector(Dn(e)))&&!i._p&&(u.instance=i,u.state.loading=5),Ht.has(e)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Ht.set(e,l),i||ym(n,e,l,u.state))),t&&a===null)throw Error(o(528,""));return u}if(t&&a!==null)throw Error(o(529,""));return null;case"script":return t=l.async,l=l.src,typeof l=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=La(l),l=ta(n).hoistableScripts,a=l.get(t),a||(a={type:"script",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function Na(e){return'href="'+Et(e)+'"'}function Dn(e){return'link[rel="stylesheet"]['+e+"]"}function yd(e){return N({},e,{"data-precedence":e.precedence,precedence:null})}function ym(e,t,l,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),$e(t,"link",l),Ve(t),e.head.appendChild(t))}function La(e){return'[src="'+Et(e)+'"]'}function Un(e){return"script[async]"+e}function bd(e,t,l){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+Et(l.href)+'"]');if(a)return t.instance=a,Ve(a),a;var n=N({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Ve(a),$e(a,"style",n),Ki(a,l.precedence,e),t.instance=a;case"stylesheet":n=Na(l.href);var i=e.querySelector(Dn(n));if(i)return t.state.loading|=4,t.instance=i,Ve(i),i;a=yd(l),(n=Ht.get(n))&&dr(a,n),i=(e.ownerDocument||e).createElement("link"),Ve(i);var u=i;return u._p=new Promise(function(c,s){u.onload=c,u.onerror=s}),$e(i,"link",a),t.state.loading|=4,Ki(i,l.precedence,e),t.instance=i;case"script":return i=La(l.src),(n=e.querySelector(Un(i)))?(t.instance=n,Ve(n),n):(a=l,(n=Ht.get(i))&&(a=N({},l),hr(a,n)),e=e.ownerDocument||e,n=e.createElement("script"),Ve(n),$e(n,"link",a),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Ki(a,l.precedence,e));return t.instance}function Ki(e,t,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=a.length?a[a.length-1]:null,i=n,u=0;u<a.length;u++){var c=a[u];if(c.dataset.precedence===t)i=c;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=l.nodeType===9?l.head:l,t.insertBefore(e,t.firstChild))}function dr(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function hr(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ji=null;function vd(e,t,l){if(Ji===null){var a=new Map,n=Ji=new Map;n.set(l,a)}else n=Ji,a=n.get(l),a||(a=new Map,n.set(l,a));if(a.has(e))return a;for(a.set(e,null),l=l.getElementsByTagName(e),n=0;n<l.length;n++){var i=l[n];if(!(i[Ga]||i[Pe]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(t)||"";u=e+u;var c=a.get(u);c?c.push(i):a.set(u,[i])}}return a}function Sd(e,t,l){e=e.ownerDocument||e,e.head.insertBefore(l,t==="title"?e.querySelector("head > title"):null)}function bm(e,t,l){if(l===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Td(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Hn=null;function vm(){}function Sm(e,t,l){if(Hn===null)throw Error(o(475));var a=Hn;if(t.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var n=Na(l.href),i=e.querySelector(Dn(n));if(i){e=i._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(a.count++,a=Wi.bind(a),e.then(a,a)),t.state.loading|=4,t.instance=i,Ve(i);return}i=e.ownerDocument||e,l=yd(l),(n=Ht.get(n))&&dr(l,n),i=i.createElement("link"),Ve(i);var u=i;u._p=new Promise(function(c,s){u.onload=c,u.onerror=s}),$e(i,"link",l),t.instance=i}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(a.count++,t=Wi.bind(a),e.addEventListener("load",t),e.addEventListener("error",t))}}function Tm(){if(Hn===null)throw Error(o(475));var e=Hn;return e.stylesheets&&e.count===0&&gr(e,e.stylesheets),0<e.count?function(t){var l=setTimeout(function(){if(e.stylesheets&&gr(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(l)}}:null}function Wi(){if(this.count--,this.count===0){if(this.stylesheets)gr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Fi=null;function gr(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Fi=new Map,t.forEach(zm,e),Fi=null,Wi.call(e))}function zm(e,t){if(!(t.state.loading&4)){var l=Fi.get(e);if(l)var a=l.get(null);else{l=new Map,Fi.set(e,l);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var u=n[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(l.set(u.dataset.precedence,u),a=u)}a&&l.set(null,a)}n=t.instance,u=n.getAttribute("data-precedence"),i=l.get(u)||a,i===a&&l.set(null,n),l.set(u,n),this.count++,a=Wi.bind(this),n.addEventListener("load",a),n.addEventListener("error",a),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var xn={$$typeof:ue,Provider:null,Consumer:null,_currentValue:G,_currentValue2:G,_threadCount:0};function Em(e,t,l,a,n,i,u,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=su(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=su(0),this.hiddenUpdates=su(null),this.identifierPrefix=a,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function zd(e,t,l,a,n,i,u,c,s,y,E,O){return e=new Em(e,t,l,u,c,s,y,O),t=1,i===!0&&(t|=24),i=mt(3,null,null,t),e.current=i,i.stateNode=e,t=Wu(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:a,isDehydrated:l,cache:t},Pu(i),e}function Ed(e){return e?(e=ha,e):ha}function Ad(e,t,l,a,n,i){n=Ed(n),a.context===null?a.context=n:a.pendingContext=n,a=dl(t),a.payload={element:l},i=i===void 0?null:i,i!==null&&(a.callback=i),l=hl(e,a,t),l!==null&&(St(l,e,t),cn(l,e,t))}function wd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<t?l:t}}function mr(e,t){wd(e,t),(e=e.alternate)&&wd(e,t)}function Od(e){if(e.tag===13){var t=da(e,67108864);t!==null&&St(t,e,67108864),mr(e,67108864)}}var $i=!0;function Am(e,t,l,a){var n=T.T;T.T=null;var i=_.p;try{_.p=2,pr(e,t,l,a)}finally{_.p=i,T.T=n}}function wm(e,t,l,a){var n=T.T;T.T=null;var i=_.p;try{_.p=8,pr(e,t,l,a)}finally{_.p=i,T.T=n}}function pr(e,t,l,a){if($i){var n=yr(a);if(n===null)ar(e,t,a,Ii,l),Dd(e,a);else if(Mm(n,e,t,l,a))a.stopPropagation();else if(Dd(e,a),t&4&&-1<Om.indexOf(e)){for(;n!==null;){var i=ea(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=_l(i.pendingLanes);if(u!==0){var c=i;for(c.pendingLanes|=2,c.entangledLanes|=2;u;){var s=1<<31-ht(u);c.entanglements[1]|=s,u&=~s}Vt(i),(ge&6)===0&&(Ni=it()+500,An(0))}}break;case 13:c=da(i,2),c!==null&&St(c,i,2),qi(),mr(i,2)}if(i=yr(a),i===null&&ar(e,t,a,Ii,l),i===n)break;n=i}n!==null&&a.stopPropagation()}else ar(e,t,a,null,l)}}function yr(e){return e=zu(e),br(e)}var Ii=null;function br(e){if(Ii=null,e=Pl(e),e!==null){var t=U(e);if(t===null)e=null;else{var l=t.tag;if(l===13){if(e=L(t),e!==null)return e;e=null}else if(l===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ii=e,null}function Md(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(fh()){case jr:return 2;case Yr:return 8;case Xn:case dh:return 32;case Gr:return 268435456;default:return 32}default:return 32}}var vr=!1,Ol=null,Ml=null,Dl=null,Rn=new Map,_n=new Map,Ul=[],Om="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Dd(e,t){switch(e){case"focusin":case"focusout":Ol=null;break;case"dragenter":case"dragleave":Ml=null;break;case"mouseover":case"mouseout":Dl=null;break;case"pointerover":case"pointerout":Rn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":_n.delete(t.pointerId)}}function Bn(e,t,l,a,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:l,eventSystemFlags:a,nativeEvent:i,targetContainers:[n]},t!==null&&(t=ea(t),t!==null&&Od(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function Mm(e,t,l,a,n){switch(t){case"focusin":return Ol=Bn(Ol,e,t,l,a,n),!0;case"dragenter":return Ml=Bn(Ml,e,t,l,a,n),!0;case"mouseover":return Dl=Bn(Dl,e,t,l,a,n),!0;case"pointerover":var i=n.pointerId;return Rn.set(i,Bn(Rn.get(i)||null,e,t,l,a,n)),!0;case"gotpointercapture":return i=n.pointerId,_n.set(i,Bn(_n.get(i)||null,e,t,l,a,n)),!0}return!1}function Ud(e){var t=Pl(e.target);if(t!==null){var l=U(t);if(l!==null){if(t=l.tag,t===13){if(t=L(l),t!==null){e.blockedOn=t,Sh(e.priority,function(){if(l.tag===13){var a=vt();a=fu(a);var n=da(l,a);n!==null&&St(n,l,a),mr(l,a)}});return}}else if(t===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Pi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var l=yr(e.nativeEvent);if(l===null){l=e.nativeEvent;var a=new l.constructor(l.type,l);Tu=a,l.target.dispatchEvent(a),Tu=null}else return t=ea(l),t!==null&&Od(t),e.blockedOn=l,!1;t.shift()}return!0}function Hd(e,t,l){Pi(e)&&l.delete(t)}function Dm(){vr=!1,Ol!==null&&Pi(Ol)&&(Ol=null),Ml!==null&&Pi(Ml)&&(Ml=null),Dl!==null&&Pi(Dl)&&(Dl=null),Rn.forEach(Hd),_n.forEach(Hd)}function eu(e,t){e.blockedOn===t&&(e.blockedOn=null,vr||(vr=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Dm)))}var tu=null;function xd(e){tu!==e&&(tu=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){tu===e&&(tu=null);for(var t=0;t<e.length;t+=3){var l=e[t],a=e[t+1],n=e[t+2];if(typeof a!="function"){if(br(a||l)===null)continue;break}var i=ea(l);i!==null&&(e.splice(t,3),t-=3,bc(i,{pending:!0,data:n,method:l.method,action:a},a,n))}}))}function Nn(e){function t(s){return eu(s,e)}Ol!==null&&eu(Ol,e),Ml!==null&&eu(Ml,e),Dl!==null&&eu(Dl,e),Rn.forEach(t),_n.forEach(t);for(var l=0;l<Ul.length;l++){var a=Ul[l];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Ul.length&&(l=Ul[0],l.blockedOn===null);)Ud(l),l.blockedOn===null&&Ul.shift();if(l=(e.ownerDocument||e).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var n=l[a],i=l[a+1],u=n[ct]||null;if(typeof i=="function")u||xd(l);else if(u){var c=null;if(i&&i.hasAttribute("formAction")){if(n=i,u=i[ct]||null)c=u.formAction;else if(br(n)!==null)continue}else c=u.action;typeof c=="function"?l[a+1]=c:(l.splice(a,3),a-=3),xd(l)}}}function Sr(e){this._internalRoot=e}lu.prototype.render=Sr.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var l=t.current,a=vt();Ad(l,a,e,t,null,null)},lu.prototype.unmount=Sr.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ad(e.current,2,null,e,null,null),qi(),t[Il]=null}};function lu(e){this._internalRoot=e}lu.prototype.unstable_scheduleHydration=function(e){if(e){var t=Qr();e={blockedOn:null,target:e,priority:t};for(var l=0;l<Ul.length&&t!==0&&t<Ul[l].priority;l++);Ul.splice(l,0,e),l===0&&Ud(e)}};var Rd=f.version;if(Rd!=="19.1.0")throw Error(o(527,Rd,"19.1.0"));_.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=M(t),e=e!==null?z(e):null,e=e===null?null:e.stateNode,e};var Um={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:T,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var au=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!au.isDisabled&&au.supportsFiber)try{Ca=au.inject(Um),dt=au}catch{}}return qn.createRoot=function(e,t){if(!S(e))throw Error(o(299));var l=!1,a="",n=Ks,i=Js,u=Ws,c=null;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(c=t.unstable_transitionCallbacks)),t=zd(e,1,!1,null,null,l,a,n,i,u,c,null),e[Il]=t.current,lr(e),new Sr(t)},qn.hydrateRoot=function(e,t,l){if(!S(e))throw Error(o(299));var a=!1,n="",i=Ks,u=Js,c=Ws,s=null,y=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(n=l.identifierPrefix),l.onUncaughtError!==void 0&&(i=l.onUncaughtError),l.onCaughtError!==void 0&&(u=l.onCaughtError),l.onRecoverableError!==void 0&&(c=l.onRecoverableError),l.unstable_transitionCallbacks!==void 0&&(s=l.unstable_transitionCallbacks),l.formState!==void 0&&(y=l.formState)),t=zd(e,1,!0,t,l??null,a,n,i,u,c,s,y),t.context=Ed(null),l=t.current,a=vt(),a=fu(a),n=dl(a),n.callback=null,hl(l,n,a),l=a,t.current.lanes=l,Ya(t,l),Vt(t),e[Il]=t.current,lr(e),new lu(t)},qn.version="19.1.0",qn}var kd;function jm(){if(kd)return Er.exports;kd=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(f){console.error(f)}}return r(),Er.exports=Cm(),Er.exports}var Ym=jm();function Gm(r,f,g){return f in r?Object.defineProperty(r,f,{value:g,enumerable:!0,configurable:!0,writable:!0}):r[f]=g,r}function Vd(r,f){var g=Object.keys(r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);f&&(o=o.filter(function(S){return Object.getOwnPropertyDescriptor(r,S).enumerable})),g.push.apply(g,o)}return g}function Xd(r){for(var f=1;f<arguments.length;f++){var g=arguments[f]!=null?arguments[f]:{};f%2?Vd(Object(g),!0).forEach(function(o){Gm(r,o,g[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(g)):Vd(Object(g)).forEach(function(o){Object.defineProperty(r,o,Object.getOwnPropertyDescriptor(g,o))})}return r}function km(r,f){if(r==null)return{};var g={},o=Object.keys(r),S,U;for(U=0;U<o.length;U++)S=o[U],!(f.indexOf(S)>=0)&&(g[S]=r[S]);return g}function Vm(r,f){if(r==null)return{};var g=km(r,f),o,S;if(Object.getOwnPropertySymbols){var U=Object.getOwnPropertySymbols(r);for(S=0;S<U.length;S++)o=U[S],!(f.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(r,o)&&(g[o]=r[o])}return g}function Xm(r,f){return Zm(r)||Qm(r,f)||Km(r,f)||Jm()}function Zm(r){if(Array.isArray(r))return r}function Qm(r,f){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(r)))){var g=[],o=!0,S=!1,U=void 0;try{for(var L=r[Symbol.iterator](),V;!(o=(V=L.next()).done)&&(g.push(V.value),!(f&&g.length===f));o=!0);}catch(M){S=!0,U=M}finally{try{!o&&L.return!=null&&L.return()}finally{if(S)throw U}}return g}}function Km(r,f){if(r){if(typeof r=="string")return Zd(r,f);var g=Object.prototype.toString.call(r).slice(8,-1);if(g==="Object"&&r.constructor&&(g=r.constructor.name),g==="Map"||g==="Set")return Array.from(r);if(g==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(g))return Zd(r,f)}}function Zd(r,f){(f==null||f>r.length)&&(f=r.length);for(var g=0,o=new Array(f);g<f;g++)o[g]=r[g];return o}function Jm(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Wm(r,f,g){return f in r?Object.defineProperty(r,f,{value:g,enumerable:!0,configurable:!0,writable:!0}):r[f]=g,r}function Qd(r,f){var g=Object.keys(r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);f&&(o=o.filter(function(S){return Object.getOwnPropertyDescriptor(r,S).enumerable})),g.push.apply(g,o)}return g}function Kd(r){for(var f=1;f<arguments.length;f++){var g=arguments[f]!=null?arguments[f]:{};f%2?Qd(Object(g),!0).forEach(function(o){Wm(r,o,g[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(g)):Qd(Object(g)).forEach(function(o){Object.defineProperty(r,o,Object.getOwnPropertyDescriptor(g,o))})}return r}function Fm(){for(var r=arguments.length,f=new Array(r),g=0;g<r;g++)f[g]=arguments[g];return function(o){return f.reduceRight(function(S,U){return U(S)},o)}}function jn(r){return function f(){for(var g=this,o=arguments.length,S=new Array(o),U=0;U<o;U++)S[U]=arguments[U];return S.length>=r.length?r.apply(this,S):function(){for(var L=arguments.length,V=new Array(L),M=0;M<L;M++)V[M]=arguments[M];return f.apply(g,[].concat(S,V))}}}function ru(r){return{}.toString.call(r).includes("Object")}function $m(r){return!Object.keys(r).length}function Gn(r){return typeof r=="function"}function Im(r,f){return Object.prototype.hasOwnProperty.call(r,f)}function Pm(r,f){return ru(f)||Rl("changeType"),Object.keys(f).some(function(g){return!Im(r,g)})&&Rl("changeField"),f}function ep(r){Gn(r)||Rl("selectorType")}function tp(r){Gn(r)||ru(r)||Rl("handlerType"),ru(r)&&Object.values(r).some(function(f){return!Gn(f)})&&Rl("handlersType")}function lp(r){r||Rl("initialIsRequired"),ru(r)||Rl("initialType"),$m(r)&&Rl("initialContent")}function ap(r,f){throw new Error(r[f]||r.default)}var np={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},Rl=jn(ap)(np),nu={changes:Pm,selector:ep,handler:tp,initial:lp};function ip(r){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};nu.initial(r),nu.handler(f);var g={current:r},o=jn(rp)(g,f),S=jn(cp)(g),U=jn(nu.changes)(r),L=jn(up)(g);function V(){var z=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(N){return N};return nu.selector(z),z(g.current)}function M(z){Fm(o,S,U,L)(z)}return[V,M]}function up(r,f){return Gn(f)?f(r.current):f}function cp(r,f){return r.current=Kd(Kd({},r.current),f),f}function rp(r,f,g){return Gn(f)?f(r.current):Object.keys(g).forEach(function(o){var S;return(S=f[o])===null||S===void 0?void 0:S.call(f,r.current[o])}),g}var op={create:ip},sp={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs"}};function fp(r){return function f(){for(var g=this,o=arguments.length,S=new Array(o),U=0;U<o;U++)S[U]=arguments[U];return S.length>=r.length?r.apply(this,S):function(){for(var L=arguments.length,V=new Array(L),M=0;M<L;M++)V[M]=arguments[M];return f.apply(g,[].concat(S,V))}}}function dp(r){return{}.toString.call(r).includes("Object")}function hp(r){return r||Jd("configIsRequired"),dp(r)||Jd("configType"),r.urls?(gp(),{paths:{vs:r.urls.monacoBase}}):r}function gp(){console.warn(lh.deprecation)}function mp(r,f){throw new Error(r[f]||r.default)}var lh={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},Jd=fp(mp)(lh),pp={config:hp},yp=function(){for(var f=arguments.length,g=new Array(f),o=0;o<f;o++)g[o]=arguments[o];return function(S){return g.reduceRight(function(U,L){return L(U)},S)}};function ah(r,f){return Object.keys(f).forEach(function(g){f[g]instanceof Object&&r[g]&&Object.assign(f[g],ah(r[g],f[g]))}),Xd(Xd({},r),f)}var bp={type:"cancelation",msg:"operation is manually canceled"};function Mr(r){var f=!1,g=new Promise(function(o,S){r.then(function(U){return f?S(bp):o(U)}),r.catch(S)});return g.cancel=function(){return f=!0},g}var vp=op.create({config:sp,isInitialized:!1,resolve:null,reject:null,monaco:null}),nh=Xm(vp,2),Vn=nh[0],ou=nh[1];function Sp(r){var f=pp.config(r),g=f.monaco,o=Vm(f,["monaco"]);ou(function(S){return{config:ah(S.config,o),monaco:g}})}function Tp(){var r=Vn(function(f){var g=f.monaco,o=f.isInitialized,S=f.resolve;return{monaco:g,isInitialized:o,resolve:S}});if(!r.isInitialized){if(ou({isInitialized:!0}),r.monaco)return r.resolve(r.monaco),Mr(Dr);if(window.monaco&&window.monaco.editor)return ih(window.monaco),r.resolve(window.monaco),Mr(Dr);yp(zp,Ap)(wp)}return Mr(Dr)}function zp(r){return document.body.appendChild(r)}function Ep(r){var f=document.createElement("script");return r&&(f.src=r),f}function Ap(r){var f=Vn(function(o){var S=o.config,U=o.reject;return{config:S,reject:U}}),g=Ep("".concat(f.config.paths.vs,"/loader.js"));return g.onload=function(){return r()},g.onerror=f.reject,g}function wp(){var r=Vn(function(g){var o=g.config,S=g.resolve,U=g.reject;return{config:o,resolve:S,reject:U}}),f=window.require;f.config(r.config),f(["vs/editor/editor.main"],function(g){ih(g),r.resolve(g)},function(g){r.reject(g)})}function ih(r){Vn().monaco||ou({monaco:r})}function Op(){return Vn(function(r){var f=r.monaco;return f})}var Dr=new Promise(function(r,f){return ou({resolve:r,reject:f})}),uh={config:Sp,init:Tp,__getMonacoInstance:Op},Mp={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},Ur=Mp,Dp={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},Up=Dp;function Hp({children:r}){return xl.createElement("div",{style:Up.container},r)}var xp=Hp,Rp=xp;function _p({width:r,height:f,isEditorReady:g,loading:o,_ref:S,className:U,wrapperProps:L}){return xl.createElement("section",{style:{...Ur.wrapper,width:r,height:f},...L},!g&&xl.createElement(Rp,null,o),xl.createElement("div",{ref:S,style:{...Ur.fullWidth,...!g&&Ur.hide},className:U}))}var Bp=_p,ch=I.memo(Bp);function Np(r){I.useEffect(r,[])}var rh=Np;function Lp(r,f,g=!0){let o=I.useRef(!0);I.useEffect(o.current||!g?()=>{o.current=!1}:r,f)}var Tt=Lp;function Yn(){}function qa(r,f,g,o){return qp(r,o)||Cp(r,f,g,o)}function qp(r,f){return r.editor.getModel(oh(r,f))}function Cp(r,f,g,o){return r.editor.createModel(f,g,o?oh(r,o):void 0)}function oh(r,f){return r.Uri.parse(f)}function jp({original:r,modified:f,language:g,originalLanguage:o,modifiedLanguage:S,originalModelPath:U,modifiedModelPath:L,keepCurrentOriginalModel:V=!1,keepCurrentModifiedModel:M=!1,theme:z="light",loading:N="Loading...",options:Q={},height:F="100%",width:Se="100%",className:Oe,wrapperProps:Te={},beforeMount:Ee=Yn,onMount:Ke=Yn}){let[ee,ue]=I.useState(!1),[Me,k]=I.useState(!0),se=I.useRef(null),le=I.useRef(null),Ae=I.useRef(null),he=I.useRef(Ke),ie=I.useRef(Ee),je=I.useRef(!1);rh(()=>{let J=uh.init();return J.then(T=>(le.current=T)&&k(!1)).catch(T=>T?.type!=="cancelation"&&console.error("Monaco initialization: error:",T)),()=>se.current?at():J.cancel()}),Tt(()=>{if(se.current&&le.current){let J=se.current.getOriginalEditor(),T=qa(le.current,r||"",o||g||"text",U||"");T!==J.getModel()&&J.setModel(T)}},[U],ee),Tt(()=>{if(se.current&&le.current){let J=se.current.getModifiedEditor(),T=qa(le.current,f||"",S||g||"text",L||"");T!==J.getModel()&&J.setModel(T)}},[L],ee),Tt(()=>{let J=se.current.getModifiedEditor();J.getOption(le.current.editor.EditorOption.readOnly)?J.setValue(f||""):f!==J.getValue()&&(J.executeEdits("",[{range:J.getModel().getFullModelRange(),text:f||"",forceMoveMarkers:!0}]),J.pushUndoStop())},[f],ee),Tt(()=>{se.current?.getModel()?.original.setValue(r||"")},[r],ee),Tt(()=>{let{original:J,modified:T}=se.current.getModel();le.current.editor.setModelLanguage(J,o||g||"text"),le.current.editor.setModelLanguage(T,S||g||"text")},[g,o,S],ee),Tt(()=>{le.current?.editor.setTheme(z)},[z],ee),Tt(()=>{se.current?.updateOptions(Q)},[Q],ee);let He=I.useCallback(()=>{if(!le.current)return;ie.current(le.current);let J=qa(le.current,r||"",o||g||"text",U||""),T=qa(le.current,f||"",S||g||"text",L||"");se.current?.setModel({original:J,modified:T})},[g,f,S,r,o,U,L]),ke=I.useCallback(()=>{!je.current&&Ae.current&&(se.current=le.current.editor.createDiffEditor(Ae.current,{automaticLayout:!0,...Q}),He(),le.current?.editor.setTheme(z),ue(!0),je.current=!0)},[Q,z,He]);I.useEffect(()=>{ee&&he.current(se.current,le.current)},[ee]),I.useEffect(()=>{!Me&&!ee&&ke()},[Me,ee,ke]);function at(){let J=se.current?.getModel();V||J?.original?.dispose(),M||J?.modified?.dispose(),se.current?.dispose()}return xl.createElement(ch,{width:Se,height:F,isEditorReady:ee,loading:N,_ref:Ae,className:Oe,wrapperProps:Te})}var Yp=jp;I.memo(Yp);function Gp(r){let f=I.useRef();return I.useEffect(()=>{f.current=r},[r]),f.current}var kp=Gp,iu=new Map;function Vp({defaultValue:r,defaultLanguage:f,defaultPath:g,value:o,language:S,path:U,theme:L="light",line:V,loading:M="Loading...",options:z={},overrideServices:N={},saveViewState:Q=!0,keepCurrentModel:F=!1,width:Se="100%",height:Oe="100%",className:Te,wrapperProps:Ee={},beforeMount:Ke=Yn,onMount:ee=Yn,onChange:ue,onValidate:Me=Yn}){let[k,se]=I.useState(!1),[le,Ae]=I.useState(!0),he=I.useRef(null),ie=I.useRef(null),je=I.useRef(null),He=I.useRef(ee),ke=I.useRef(Ke),at=I.useRef(),J=I.useRef(o),T=kp(U),_=I.useRef(!1),G=I.useRef(!1);rh(()=>{let A=uh.init();return A.then(x=>(he.current=x)&&Ae(!1)).catch(x=>x?.type!=="cancelation"&&console.error("Monaco initialization: error:",x)),()=>ie.current?d():A.cancel()}),Tt(()=>{let A=qa(he.current,r||o||"",f||S||"",U||g||"");A!==ie.current?.getModel()&&(Q&&iu.set(T,ie.current?.saveViewState()),ie.current?.setModel(A),Q&&ie.current?.restoreViewState(iu.get(U)))},[U],k),Tt(()=>{ie.current?.updateOptions(z)},[z],k),Tt(()=>{!ie.current||o===void 0||(ie.current.getOption(he.current.editor.EditorOption.readOnly)?ie.current.setValue(o):o!==ie.current.getValue()&&(G.current=!0,ie.current.executeEdits("",[{range:ie.current.getModel().getFullModelRange(),text:o,forceMoveMarkers:!0}]),ie.current.pushUndoStop(),G.current=!1))},[o],k),Tt(()=>{let A=ie.current?.getModel();A&&S&&he.current?.editor.setModelLanguage(A,S)},[S],k),Tt(()=>{V!==void 0&&ie.current?.revealLine(V)},[V],k),Tt(()=>{he.current?.editor.setTheme(L)},[L],k);let oe=I.useCallback(()=>{if(!(!je.current||!he.current)&&!_.current){ke.current(he.current);let A=U||g,x=qa(he.current,o||r||"",f||S||"",A||"");ie.current=he.current?.editor.create(je.current,{model:x,automaticLayout:!0,...z},N),Q&&ie.current.restoreViewState(iu.get(A)),he.current.editor.setTheme(L),V!==void 0&&ie.current.revealLine(V),se(!0),_.current=!0}},[r,f,g,o,S,U,z,N,Q,L,V]);I.useEffect(()=>{k&&He.current(ie.current,he.current)},[k]),I.useEffect(()=>{!le&&!k&&oe()},[le,k,oe]),J.current=o,I.useEffect(()=>{k&&ue&&(at.current?.dispose(),at.current=ie.current?.onDidChangeModelContent(A=>{G.current||ue(ie.current.getValue(),A)}))},[k,ue]),I.useEffect(()=>{if(k){let A=he.current.editor.onDidChangeMarkers(x=>{let R=ie.current.getModel()?.uri;if(R&&x.find(C=>C.path===R.path)){let C=he.current.editor.getModelMarkers({resource:R});Me?.(C)}});return()=>{A?.dispose()}}return()=>{}},[k,Me]);function d(){at.current?.dispose(),F?Q&&iu.set(U,ie.current.saveViewState()):ie.current.getModel()?.dispose(),ie.current.dispose()}return xl.createElement(ch,{width:Se,height:Oe,isEditorReady:k,loading:M,_ref:je,className:Te,wrapperProps:Ee})}var Xp=Vp,Zp=I.memo(Xp),Qp=Zp;const Hr=[`<!DOCTYPE html>
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
</form>`]};var xr={exports:{}},Rr,Fd;function Kp(){if(Fd)return Rr;Fd=1;var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Rr=r,Rr}var _r,$d;function Jp(){if($d)return _r;$d=1;var r=Kp();function f(){}function g(){}return g.resetWarningCache=f,_r=function(){function o(L,V,M,z,N,Q){if(Q!==r){var F=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw F.name="Invariant Violation",F}}o.isRequired=o;function S(){return o}var U={array:o,bigint:o,bool:o,func:o,number:o,object:o,string:o,symbol:o,any:o,arrayOf:S,element:o,elementType:o,instanceOf:S,node:o,objectOf:S,oneOf:S,oneOfType:S,shape:S,exact:S,checkPropTypes:g,resetWarningCache:f};return U.PropTypes=U,U},_r}var Id;function Wp(){return Id||(Id=1,xr.exports=Jp()()),xr.exports}var Fp=Wp();const pe=th(Fp);var xt=typeof window<"u"?window:null,qr=xt===null,kn=qr?void 0:xt.document,Nt="addEventListener",Lt="removeEventListener",Br="getBoundingClientRect",Cn="_a",qt="_b",ul="_c",uu="horizontal",Ct=function(){return!1},$p=qr?"calc":["","-webkit-","-moz-","-o-"].filter(function(r){var f=kn.createElement("div");return f.style.cssText="width:"+r+"calc(9px)",!!f.style.length}).shift()+"calc",sh=function(r){return typeof r=="string"||r instanceof String},Pd=function(r){if(sh(r)){var f=kn.querySelector(r);if(!f)throw new Error("Selector "+r+" did not match a DOM element");return f}return r},lt=function(r,f,g){var o=r[f];return o!==void 0?o:g},cu=function(r,f,g,o){if(f){if(o==="end")return 0;if(o==="center")return r/2}else if(g){if(o==="start")return 0;if(o==="center")return r/2}return r},Ip=function(r,f){var g=kn.createElement("div");return g.className="gutter gutter-"+f,g},Pp=function(r,f,g){var o={};return sh(f)?o[r]=f:o[r]=$p+"("+f+"% - "+g+"px)",o},ey=function(r,f){var g;return g={},g[r]=f+"px",g},eh=function(r,f){if(f===void 0&&(f={}),qr)return{};var g=r,o,S,U,L,V,M;Array.from&&(g=Array.from(g));var z=Pd(g[0]),N=z.parentNode,Q=getComputedStyle?getComputedStyle(N):null,F=Q?Q.flexDirection:null,Se=lt(f,"sizes")||g.map(function(){return 100/g.length}),Oe=lt(f,"minSize",100),Te=Array.isArray(Oe)?Oe:g.map(function(){return Oe}),Ee=lt(f,"maxSize",1/0),Ke=Array.isArray(Ee)?Ee:g.map(function(){return Ee}),ee=lt(f,"expandToMin",!1),ue=lt(f,"gutterSize",10),Me=lt(f,"gutterAlign","center"),k=lt(f,"snapOffset",30),se=Array.isArray(k)?k:g.map(function(){return k}),le=lt(f,"dragInterval",1),Ae=lt(f,"direction",uu),he=lt(f,"cursor",Ae===uu?"col-resize":"row-resize"),ie=lt(f,"gutter",Ip),je=lt(f,"elementStyle",Pp),He=lt(f,"gutterStyle",ey);Ae===uu?(o="width",S="clientX",U="left",L="right",V="clientWidth"):Ae==="vertical"&&(o="height",S="clientY",U="top",L="bottom",V="clientHeight");function ke(H,D,B,Y){var Be=je(o,D,B,Y);Object.keys(Be).forEach(function(De){H.style[De]=Be[De]})}function at(H,D,B){var Y=He(o,D,B);Object.keys(Y).forEach(function(Be){H.style[Be]=Y[Be]})}function J(){return M.map(function(H){return H.size})}function T(H){return"touches"in H?H.touches[0][S]:H[S]}function _(H){var D=M[this.a],B=M[this.b],Y=D.size+B.size;D.size=H/this.size*Y,B.size=Y-H/this.size*Y,ke(D.element,D.size,this[qt],D.i),ke(B.element,B.size,this[ul],B.i)}function G(H){var D,B=M[this.a],Y=M[this.b];this.dragging&&(D=T(H)-this.start+(this[qt]-this.dragOffset),le>1&&(D=Math.round(D/le)*le),D<=B.minSize+B.snapOffset+this[qt]?D=B.minSize+this[qt]:D>=this.size-(Y.minSize+Y.snapOffset+this[ul])&&(D=this.size-(Y.minSize+this[ul])),D>=B.maxSize-B.snapOffset+this[qt]?D=B.maxSize+this[qt]:D<=this.size-(Y.maxSize-Y.snapOffset+this[ul])&&(D=this.size-(Y.maxSize+this[ul])),_.call(this,D),lt(f,"onDrag",Ct)(J()))}function oe(){var H=M[this.a].element,D=M[this.b].element,B=H[Br](),Y=D[Br]();this.size=B[o]+Y[o]+this[qt]+this[ul],this.start=B[U],this.end=B[L]}function d(H){if(!getComputedStyle)return null;var D=getComputedStyle(H);if(!D)return null;var B=H[V];return B===0?null:(Ae===uu?B-=parseFloat(D.paddingLeft)+parseFloat(D.paddingRight):B-=parseFloat(D.paddingTop)+parseFloat(D.paddingBottom),B)}function A(H){var D=d(N);if(D===null||Te.reduce(function(De,Je){return De+Je},0)>D)return H;var B=0,Y=[],Be=H.map(function(De,Je){var Xt=D*De/100,$l=cu(ue,Je===0,Je===H.length-1,Me),it=Te[Je]+$l;return Xt<it?(B+=it-Xt,Y.push(0),it):(Y.push(Xt-it),Xt)});return B===0?H:Be.map(function(De,Je){var Xt=De;if(B>0&&Y[Je]-B>0){var $l=Math.min(B,Y[Je]-B);B-=$l,Xt=De-$l}return Xt/D*100})}function x(){var H=this,D=M[H.a].element,B=M[H.b].element;H.dragging&&lt(f,"onDragEnd",Ct)(J()),H.dragging=!1,xt[Lt]("mouseup",H.stop),xt[Lt]("touchend",H.stop),xt[Lt]("touchcancel",H.stop),xt[Lt]("mousemove",H.move),xt[Lt]("touchmove",H.move),H.stop=null,H.move=null,D[Lt]("selectstart",Ct),D[Lt]("dragstart",Ct),B[Lt]("selectstart",Ct),B[Lt]("dragstart",Ct),D.style.userSelect="",D.style.webkitUserSelect="",D.style.MozUserSelect="",D.style.pointerEvents="",B.style.userSelect="",B.style.webkitUserSelect="",B.style.MozUserSelect="",B.style.pointerEvents="",H.gutter.style.cursor="",H.parent.style.cursor="",kn.body.style.cursor=""}function R(H){if(!("button"in H&&H.button!==0)){var D=this,B=M[D.a].element,Y=M[D.b].element;D.dragging||lt(f,"onDragStart",Ct)(J()),H.preventDefault(),D.dragging=!0,D.move=G.bind(D),D.stop=x.bind(D),xt[Nt]("mouseup",D.stop),xt[Nt]("touchend",D.stop),xt[Nt]("touchcancel",D.stop),xt[Nt]("mousemove",D.move),xt[Nt]("touchmove",D.move),B[Nt]("selectstart",Ct),B[Nt]("dragstart",Ct),Y[Nt]("selectstart",Ct),Y[Nt]("dragstart",Ct),B.style.userSelect="none",B.style.webkitUserSelect="none",B.style.MozUserSelect="none",B.style.pointerEvents="none",Y.style.userSelect="none",Y.style.webkitUserSelect="none",Y.style.MozUserSelect="none",Y.style.pointerEvents="none",D.gutter.style.cursor=he,D.parent.style.cursor=he,kn.body.style.cursor=he,oe.call(D),D.dragOffset=T(H)-D.end}}Se=A(Se);var C=[];M=g.map(function(H,D){var B={element:Pd(H),size:Se[D],minSize:Te[D],maxSize:Ke[D],snapOffset:se[D],i:D},Y;if(D>0&&(Y={a:D-1,b:D,dragging:!1,direction:Ae,parent:N},Y[qt]=cu(ue,D-1===0,!1,Me),Y[ul]=cu(ue,!1,D===g.length-1,Me),F==="row-reverse"||F==="column-reverse")){var Be=Y.a;Y.a=Y.b,Y.b=Be}if(D>0){var De=ie(D,Ae,B.element);at(De,ue,D),Y[Cn]=R.bind(Y),De[Nt]("mousedown",Y[Cn]),De[Nt]("touchstart",Y[Cn]),N.insertBefore(De,B.element),Y.gutter=De}return ke(B.element,B.size,cu(ue,D===0,D===g.length-1,Me),D),D>0&&C.push(Y),B});function ce(H){var D=H.i===C.length,B=D?C[H.i-1]:C[H.i];oe.call(B);var Y=D?B.size-H.minSize-B[ul]:H.minSize+B[qt];_.call(B,Y)}M.forEach(function(H){var D=H.element[Br]()[o];D<H.minSize&&(ee?ce(H):H.minSize=D)});function W(H){var D=A(H);D.forEach(function(B,Y){if(Y>0){var Be=C[Y-1],De=M[Be.a],Je=M[Be.b];De.size=D[Y-1],Je.size=B,ke(De.element,De.size,Be[qt],De.i),ke(Je.element,Je.size,Be[ul],Je.i)}})}function nt(H,D){C.forEach(function(B){if(D!==!0?B.parent.removeChild(B.gutter):(B.gutter[Lt]("mousedown",B[Cn]),B.gutter[Lt]("touchstart",B[Cn])),H!==!0){var Y=je(o,B.a.size,B[qt]);Object.keys(Y).forEach(function(Be){M[B.a].element.style[Be]="",M[B.b].element.style[Be]=""})}})}return{setSizes:W,getSizes:J,collapse:function(D){ce(M[D])},destroy:nt,parent:N,pairs:C}};function Nr(r,f){var g={};for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&f.indexOf(o)===-1&&(g[o]=r[o]);return g}var Cr=function(r){function f(){r.apply(this,arguments)}return r&&(f.__proto__=r),f.prototype=Object.create(r&&r.prototype),f.prototype.constructor=f,f.prototype.componentDidMount=function(){var o=this.props;o.children;var S=o.gutter,U=Nr(o,["children","gutter"]),L=U;L.gutter=function(V,M){var z;return S?z=S(V,M):(z=document.createElement("div"),z.className="gutter gutter-"+M),z.__isSplitGutter=!0,z},this.split=eh(this.parent.children,L)},f.prototype.componentDidUpdate=function(o){var S=this,U=this.props;U.children;var L=U.minSize,V=U.sizes,M=U.collapsed,z=Nr(U,["children","minSize","sizes","collapsed"]),N=z,Q=o.minSize,F=o.sizes,Se=o.collapsed,Oe=["maxSize","expandToMin","gutterSize","gutterAlign","snapOffset","dragInterval","direction","cursor"],Te=Oe.map(function(ee){return S.props[ee]!==o[ee]}).reduce(function(ee,ue){return ee||ue},!1);if(Array.isArray(L)&&Array.isArray(Q)){var Ee=!1;L.forEach(function(ee,ue){Ee=Ee||ee!==Q[ue]}),Te=Te||Ee}else Array.isArray(L)||Array.isArray(Q)?Te=!0:Te=Te||L!==Q;if(Te)N.minSize=L,N.sizes=V||this.split.getSizes(),this.split.destroy(!0,!0),N.gutter=function(ee,ue,Me){return Me.previousSibling},this.split=eh(Array.from(this.parent.children).filter(function(ee){return!ee.__isSplitGutter}),N);else if(V){var Ke=!1;V.forEach(function(ee,ue){Ke=Ke||ee!==F[ue]}),Ke&&this.split.setSizes(this.props.sizes)}Number.isInteger(M)&&(M!==Se||Te)&&this.split.collapse(M)},f.prototype.componentWillUnmount=function(){this.split.destroy(),delete this.split},f.prototype.render=function(){var o=this,S=this.props;S.sizes,S.minSize,S.maxSize,S.expandToMin,S.gutterSize,S.gutterAlign,S.snapOffset,S.dragInterval,S.direction,S.cursor,S.gutter,S.elementStyle,S.gutterStyle,S.onDrag,S.onDragStart,S.onDragEnd,S.collapsed;var U=S.children,L=Nr(S,["sizes","minSize","maxSize","expandToMin","gutterSize","gutterAlign","snapOffset","dragInterval","direction","cursor","gutter","elementStyle","gutterStyle","onDrag","onDragStart","onDragEnd","collapsed","children"]),V=L;return xl.createElement("div",Object.assign({},{ref:function(M){o.parent=M}},V),U)},f}(xl.Component);Cr.propTypes={sizes:pe.arrayOf(pe.number),minSize:pe.oneOfType([pe.number,pe.arrayOf(pe.number)]),maxSize:pe.oneOfType([pe.number,pe.arrayOf(pe.number)]),expandToMin:pe.bool,gutterSize:pe.number,gutterAlign:pe.string,snapOffset:pe.oneOfType([pe.number,pe.arrayOf(pe.number)]),dragInterval:pe.number,direction:pe.string,cursor:pe.string,gutter:pe.func,elementStyle:pe.func,gutterStyle:pe.func,onDrag:pe.func,onDragStart:pe.func,onDragEnd:pe.func,collapsed:pe.number,children:pe.arrayOf(pe.element)};Cr.defaultProps={sizes:void 0,minSize:void 0,maxSize:void 0,expandToMin:void 0,gutterSize:void 0,gutterAlign:void 0,snapOffset:void 0,dragInterval:void 0,direction:void 0,cursor:void 0,gutter:void 0,elementStyle:void 0,gutterStyle:void 0,onDrag:void 0,onDragStart:void 0,onDragEnd:void 0,collapsed:void 0,children:void 0};function ty(){const[r,f]=I.useState(""),[g,o]=I.useState(r),[S,U]=I.useState(0),L=["YOU DID GREAT!","I'm proud of you, keep it up!","This is great work","A+++","1000% on this!","Super floober fantastic"],V=["Oh, not quite?","Hey, let's give that one another try","Let's look over that again?","Not quite, but I'm glad you're trying"],M=()=>{if(Object.keys(Wd).includes(S.toString())){const z=S.toString(),N=r.trim().replace(/\s+/g," "),Q=Wd[z].some(Se=>N===Se.trim().replace(/\s+/g," "));let F="Default easter egg text";Q?(F=L[Math.floor(Math.random()*L.length)],alert(F)):(F=V[Math.floor(Math.random()*V.length)],alert(F))}};return Ie.jsx("div",{className:"h-screen bg-gray-900 text-white",children:Ie.jsxs(Cr,{className:"flex h-full",sizes:[25,50,25],minSize:100,gutterSize:6,children:[Ie.jsxs("div",{className:"p-4  border-r border-gray-700",children:[Ie.jsxs("div",{className:"absolute bottom-4 right-4 flex space-x-2",children:[Ie.jsx("button",{onClick:()=>U(Math.max(0,S-1)),className:"bg-yellow-400 text-black px-4 py-1 rounded",disabled:S===0,children:"Back"}),Ie.jsx("button",{onClick:()=>U(Math.min(S+1,100)),className:"bg-yellow-400 text-black px-4 py-1 rounded",disabled:S===Hr.length-1,children:"Next"})]}),Ie.jsxs("h2",{className:"font-bold text-lg",children:["Lesson ",S+1]}),Ie.jsx("iframe",{title:"live preview",srcDoc:Hr[Math.min(Math.max(0,S),Hr.length-1)],className:"w-full h-full bg-white"})]}),Ie.jsxs("div",{className:"border-b border-gray-700",children:[Ie.jsx(Qp,{height:"90%",language:"html",theme:"vs-dark",value:r,onChange:z=>f(z||"")}),Ie.jsx("div",{className:"p-2",children:Ie.jsx("button",{onClick:()=>o(r),className:"bg-green-50 hover:bg-green-600 p-2",children:"Run"})})]}),Ie.jsxs("div",{className:"w-1/4 p-2",children:[Ie.jsx("iframe",{title:"live preview",srcDoc:g,className:"w-full h-full bg-white"}),Ie.jsx("button",{onClick:M,className:"mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded mt-2  ",children:"Check Answer"})]})]})})}Ym.createRoot(document.getElementById("root")).render(Ie.jsx(I.StrictMode,{children:Ie.jsx(ty,{})}));
