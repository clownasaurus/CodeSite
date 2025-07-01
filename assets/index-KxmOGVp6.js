(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const S of document.querySelectorAll('link[rel="modulepreload"]'))c(S);new MutationObserver(S=>{for(const O of S)if(O.type==="childList")for(const C of O.addedNodes)C.tagName==="LINK"&&C.rel==="modulepreload"&&c(C)}).observe(document,{childList:!0,subtree:!0});function g(S){const O={};return S.integrity&&(O.integrity=S.integrity),S.referrerPolicy&&(O.referrerPolicy=S.referrerPolicy),S.crossOrigin==="use-credentials"?O.credentials="include":S.crossOrigin==="anonymous"?O.credentials="omit":O.credentials="same-origin",O}function c(S){if(S.ep)return;S.ep=!0;const O=g(S);fetch(S.href,O)}})();function th(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var wr={exports:{}},Cn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bf;function Um(){if(Bf)return Cn;Bf=1;var r=Symbol.for("react.transitional.element"),d=Symbol.for("react.fragment");function g(c,S,O){var C=null;if(O!==void 0&&(C=""+O),S.key!==void 0&&(C=""+S.key),"key"in S){O={};for(var V in S)V!=="key"&&(O[V]=S[V])}else O=S;return S=O.ref,{$$typeof:r,type:c,key:C,ref:S!==void 0?S:null,props:O}}return Cn.Fragment=d,Cn.jsx=g,Cn.jsxs=g,Cn}var kf;function Rm(){return kf||(kf=1,wr.exports=Um()),wr.exports}var $e=Rm(),zr={exports:{}},I={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _f;function Bm(){if(_f)return I;_f=1;var r=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),g=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),C=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),w=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),Q=Symbol.iterator;function F(f){return f===null||typeof f!="object"?null:(f=Q&&f[Q]||f["@@iterator"],typeof f=="function"?f:null)}var Se={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},xe=Object.assign,Te={};function ze(f,E,U){this.props=f,this.context=E,this.refs=Te,this.updater=U||Se}ze.prototype.isReactComponent={},ze.prototype.setState=function(f,E){if(typeof f!="object"&&typeof f!="function"&&f!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,f,E,"setState")},ze.prototype.forceUpdate=function(f){this.updater.enqueueForceUpdate(this,f,"forceUpdate")};function Ke(){}Ke.prototype=ze.prototype;function ee(f,E,U){this.props=f,this.context=E,this.refs=Te,this.updater=U||Se}var ue=ee.prototype=new Ke;ue.constructor=ee,xe(ue,ze.prototype),ue.isPureReactComponent=!0;var De=Array.isArray,G={H:null,A:null,T:null,S:null,V:null},se=Object.prototype.hasOwnProperty;function le(f,E,U,R,L,oe){return U=oe.ref,{$$typeof:r,type:f,key:E,ref:U!==void 0?U:null,props:oe}}function Ee(f,E){return le(f.type,E,void 0,void 0,void 0,f.props)}function he(f){return typeof f=="object"&&f!==null&&f.$$typeof===r}function ae(f){var E={"=":"=0",":":"=2"};return"$"+f.replace(/[=:]/g,function(U){return E[U]})}var qe=/\/+/g;function He(f,E){return typeof f=="object"&&f!==null&&f.key!=null?ae(""+f.key):E.toString(36)}function Ge(){}function it(f){switch(f.status){case"fulfilled":return f.value;case"rejected":throw f.reason;default:switch(typeof f.status=="string"?f.then(Ge,Ge):(f.status="pending",f.then(function(E){f.status==="pending"&&(f.status="fulfilled",f.value=E)},function(E){f.status==="pending"&&(f.status="rejected",f.reason=E)})),f.status){case"fulfilled":return f.value;case"rejected":throw f.reason}}throw f}function W(f,E,U,R,L){var oe=typeof f;(oe==="undefined"||oe==="boolean")&&(f=null);var J=!1;if(f===null)J=!0;else switch(oe){case"bigint":case"string":case"number":J=!0;break;case"object":switch(f.$$typeof){case r:case d:J=!0;break;case _:return J=f._init,W(J(f._payload),E,U,R,L)}}if(J)return L=L(f),J=R===""?"."+He(f,0):R,De(L)?(U="",J!=null&&(U=J.replace(qe,"$&/")+"/"),W(L,E,U,"",function(M){return M})):L!=null&&(he(L)&&(L=Ee(L,U+(L.key==null||f&&f.key===L.key?"":(""+L.key).replace(qe,"$&/")+"/")+J)),E.push(L)),1;J=0;var nt=R===""?".":R+":";if(De(f))for(var H=0;H<f.length;H++)R=f[H],oe=nt+He(R,H),J+=W(R,E,U,oe,L);else if(H=F(f),typeof H=="function")for(f=H.call(f),H=0;!(R=f.next()).done;)R=R.value,oe=nt+He(R,H++),J+=W(R,E,U,oe,L);else if(oe==="object"){if(typeof f.then=="function")return W(it(f),E,U,R,L);throw E=String(f),Error("Objects are not valid as a React child (found: "+(E==="[object Object]"?"object with keys {"+Object.keys(f).join(", ")+"}":E)+"). If you meant to render a collection of children, use an array instead.")}return J}function T(f,E,U){if(f==null)return f;var R=[],L=0;return W(f,R,"","",function(oe){return E.call(U,oe,L++)}),R}function B(f){if(f._status===-1){var E=f._result;E=E(),E.then(function(U){(f._status===0||f._status===-1)&&(f._status=1,f._result=U)},function(U){(f._status===0||f._status===-1)&&(f._status=2,f._result=U)}),f._status===-1&&(f._status=0,f._result=E)}if(f._status===1)return f._result.default;throw f._result}var Y=typeof reportError=="function"?reportError:function(f){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var E=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof f=="object"&&f!==null&&typeof f.message=="string"?String(f.message):String(f),error:f});if(!window.dispatchEvent(E))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",f);return}console.error(f)};function ce(){}return I.Children={map:T,forEach:function(f,E,U){T(f,function(){E.apply(this,arguments)},U)},count:function(f){var E=0;return T(f,function(){E++}),E},toArray:function(f){return T(f,function(E){return E})||[]},only:function(f){if(!he(f))throw Error("React.Children.only expected to receive a single React element child.");return f}},I.Component=ze,I.Fragment=g,I.Profiler=S,I.PureComponent=ee,I.StrictMode=c,I.Suspense=D,I.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=G,I.__COMPILER_RUNTIME={__proto__:null,c:function(f){return G.H.useMemoCache(f)}},I.cache=function(f){return function(){return f.apply(null,arguments)}},I.cloneElement=function(f,E,U){if(f==null)throw Error("The argument must be a React element, but you passed "+f+".");var R=xe({},f.props),L=f.key,oe=void 0;if(E!=null)for(J in E.ref!==void 0&&(oe=void 0),E.key!==void 0&&(L=""+E.key),E)!se.call(E,J)||J==="key"||J==="__self"||J==="__source"||J==="ref"&&E.ref===void 0||(R[J]=E[J]);var J=arguments.length-2;if(J===1)R.children=U;else if(1<J){for(var nt=Array(J),H=0;H<J;H++)nt[H]=arguments[H+2];R.children=nt}return le(f.type,L,void 0,void 0,oe,R)},I.createContext=function(f){return f={$$typeof:C,_currentValue:f,_currentValue2:f,_threadCount:0,Provider:null,Consumer:null},f.Provider=f,f.Consumer={$$typeof:O,_context:f},f},I.createElement=function(f,E,U){var R,L={},oe=null;if(E!=null)for(R in E.key!==void 0&&(oe=""+E.key),E)se.call(E,R)&&R!=="key"&&R!=="__self"&&R!=="__source"&&(L[R]=E[R]);var J=arguments.length-2;if(J===1)L.children=U;else if(1<J){for(var nt=Array(J),H=0;H<J;H++)nt[H]=arguments[H+2];L.children=nt}if(f&&f.defaultProps)for(R in J=f.defaultProps,J)L[R]===void 0&&(L[R]=J[R]);return le(f,oe,void 0,void 0,null,L)},I.createRef=function(){return{current:null}},I.forwardRef=function(f){return{$$typeof:V,render:f}},I.isValidElement=he,I.lazy=function(f){return{$$typeof:_,_payload:{_status:-1,_result:f},_init:B}},I.memo=function(f,E){return{$$typeof:w,type:f,compare:E===void 0?null:E}},I.startTransition=function(f){var E=G.T,U={};G.T=U;try{var R=f(),L=G.S;L!==null&&L(U,R),typeof R=="object"&&R!==null&&typeof R.then=="function"&&R.then(ce,Y)}catch(oe){Y(oe)}finally{G.T=E}},I.unstable_useCacheRefresh=function(){return G.H.useCacheRefresh()},I.use=function(f){return G.H.use(f)},I.useActionState=function(f,E,U){return G.H.useActionState(f,E,U)},I.useCallback=function(f,E){return G.H.useCallback(f,E)},I.useContext=function(f){return G.H.useContext(f)},I.useDebugValue=function(){},I.useDeferredValue=function(f,E){return G.H.useDeferredValue(f,E)},I.useEffect=function(f,E,U){var R=G.H;if(typeof U=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return R.useEffect(f,E)},I.useId=function(){return G.H.useId()},I.useImperativeHandle=function(f,E,U){return G.H.useImperativeHandle(f,E,U)},I.useInsertionEffect=function(f,E){return G.H.useInsertionEffect(f,E)},I.useLayoutEffect=function(f,E){return G.H.useLayoutEffect(f,E)},I.useMemo=function(f,E){return G.H.useMemo(f,E)},I.useOptimistic=function(f,E){return G.H.useOptimistic(f,E)},I.useReducer=function(f,E,U){return G.H.useReducer(f,E,U)},I.useRef=function(f){return G.H.useRef(f)},I.useState=function(f){return G.H.useState(f)},I.useSyncExternalStore=function(f,E,U){return G.H.useSyncExternalStore(f,E,U)},I.useTransition=function(){return G.H.useTransition()},I.version="19.1.0",I}var Cf;function Nr(){return Cf||(Cf=1,zr.exports=Bm()),zr.exports}var $=Nr();const Ul=th($);var Er={exports:{}},Nn={},Ar={exports:{}},xr={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nf;function km(){return Nf||(Nf=1,function(r){function d(T,B){var Y=T.length;T.push(B);e:for(;0<Y;){var ce=Y-1>>>1,f=T[ce];if(0<S(f,B))T[ce]=B,T[Y]=f,Y=ce;else break e}}function g(T){return T.length===0?null:T[0]}function c(T){if(T.length===0)return null;var B=T[0],Y=T.pop();if(Y!==B){T[0]=Y;e:for(var ce=0,f=T.length,E=f>>>1;ce<E;){var U=2*(ce+1)-1,R=T[U],L=U+1,oe=T[L];if(0>S(R,Y))L<f&&0>S(oe,R)?(T[ce]=oe,T[L]=Y,ce=L):(T[ce]=R,T[U]=Y,ce=U);else if(L<f&&0>S(oe,Y))T[ce]=oe,T[L]=Y,ce=L;else break e}}return B}function S(T,B){var Y=T.sortIndex-B.sortIndex;return Y!==0?Y:T.id-B.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var O=performance;r.unstable_now=function(){return O.now()}}else{var C=Date,V=C.now();r.unstable_now=function(){return C.now()-V}}var D=[],w=[],_=1,Q=null,F=3,Se=!1,xe=!1,Te=!1,ze=!1,Ke=typeof setTimeout=="function"?setTimeout:null,ee=typeof clearTimeout=="function"?clearTimeout:null,ue=typeof setImmediate<"u"?setImmediate:null;function De(T){for(var B=g(w);B!==null;){if(B.callback===null)c(w);else if(B.startTime<=T)c(w),B.sortIndex=B.expirationTime,d(D,B);else break;B=g(w)}}function G(T){if(Te=!1,De(T),!xe)if(g(D)!==null)xe=!0,se||(se=!0,He());else{var B=g(w);B!==null&&W(G,B.startTime-T)}}var se=!1,le=-1,Ee=5,he=-1;function ae(){return ze?!0:!(r.unstable_now()-he<Ee)}function qe(){if(ze=!1,se){var T=r.unstable_now();he=T;var B=!0;try{e:{xe=!1,Te&&(Te=!1,ee(le),le=-1),Se=!0;var Y=F;try{t:{for(De(T),Q=g(D);Q!==null&&!(Q.expirationTime>T&&ae());){var ce=Q.callback;if(typeof ce=="function"){Q.callback=null,F=Q.priorityLevel;var f=ce(Q.expirationTime<=T);if(T=r.unstable_now(),typeof f=="function"){Q.callback=f,De(T),B=!0;break t}Q===g(D)&&c(D),De(T)}else c(D);Q=g(D)}if(Q!==null)B=!0;else{var E=g(w);E!==null&&W(G,E.startTime-T),B=!1}}break e}finally{Q=null,F=Y,Se=!1}B=void 0}}finally{B?He():se=!1}}}var He;if(typeof ue=="function")He=function(){ue(qe)};else if(typeof MessageChannel<"u"){var Ge=new MessageChannel,it=Ge.port2;Ge.port1.onmessage=qe,He=function(){it.postMessage(null)}}else He=function(){Ke(qe,0)};function W(T,B){le=Ke(function(){T(r.unstable_now())},B)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(T){T.callback=null},r.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ee=0<T?Math.floor(1e3/T):5},r.unstable_getCurrentPriorityLevel=function(){return F},r.unstable_next=function(T){switch(F){case 1:case 2:case 3:var B=3;break;default:B=F}var Y=F;F=B;try{return T()}finally{F=Y}},r.unstable_requestPaint=function(){ze=!0},r.unstable_runWithPriority=function(T,B){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var Y=F;F=T;try{return B()}finally{F=Y}},r.unstable_scheduleCallback=function(T,B,Y){var ce=r.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?ce+Y:ce):Y=ce,T){case 1:var f=-1;break;case 2:f=250;break;case 5:f=1073741823;break;case 4:f=1e4;break;default:f=5e3}return f=Y+f,T={id:_++,callback:B,priorityLevel:T,startTime:Y,expirationTime:f,sortIndex:-1},Y>ce?(T.sortIndex=Y,d(w,T),g(D)===null&&T===g(w)&&(Te?(ee(le),le=-1):Te=!0,W(G,Y-ce))):(T.sortIndex=f,d(D,T),xe||Se||(xe=!0,se||(se=!0,He()))),T},r.unstable_shouldYield=ae,r.unstable_wrapCallback=function(T){var B=F;return function(){var Y=F;F=B;try{return T.apply(this,arguments)}finally{F=Y}}}}(xr)),xr}var Lf;function _m(){return Lf||(Lf=1,Ar.exports=km()),Ar.exports}var Dr={exports:{}},tt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qf;function Cm(){if(qf)return tt;qf=1;var r=Nr();function d(D){var w="https://react.dev/errors/"+D;if(1<arguments.length){w+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)w+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+D+"; visit "+w+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function g(){}var c={d:{f:g,r:function(){throw Error(d(522))},D:g,C:g,L:g,m:g,X:g,S:g,M:g},p:0,findDOMNode:null},S=Symbol.for("react.portal");function O(D,w,_){var Q=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:S,key:Q==null?null:""+Q,children:D,containerInfo:w,implementation:_}}var C=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function V(D,w){if(D==="font")return"";if(typeof w=="string")return w==="use-credentials"?w:""}return tt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,tt.createPortal=function(D,w){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!w||w.nodeType!==1&&w.nodeType!==9&&w.nodeType!==11)throw Error(d(299));return O(D,w,null,_)},tt.flushSync=function(D){var w=C.T,_=c.p;try{if(C.T=null,c.p=2,D)return D()}finally{C.T=w,c.p=_,c.d.f()}},tt.preconnect=function(D,w){typeof D=="string"&&(w?(w=w.crossOrigin,w=typeof w=="string"?w==="use-credentials"?w:"":void 0):w=null,c.d.C(D,w))},tt.prefetchDNS=function(D){typeof D=="string"&&c.d.D(D)},tt.preinit=function(D,w){if(typeof D=="string"&&w&&typeof w.as=="string"){var _=w.as,Q=V(_,w.crossOrigin),F=typeof w.integrity=="string"?w.integrity:void 0,Se=typeof w.fetchPriority=="string"?w.fetchPriority:void 0;_==="style"?c.d.S(D,typeof w.precedence=="string"?w.precedence:void 0,{crossOrigin:Q,integrity:F,fetchPriority:Se}):_==="script"&&c.d.X(D,{crossOrigin:Q,integrity:F,fetchPriority:Se,nonce:typeof w.nonce=="string"?w.nonce:void 0})}},tt.preinitModule=function(D,w){if(typeof D=="string")if(typeof w=="object"&&w!==null){if(w.as==null||w.as==="script"){var _=V(w.as,w.crossOrigin);c.d.M(D,{crossOrigin:_,integrity:typeof w.integrity=="string"?w.integrity:void 0,nonce:typeof w.nonce=="string"?w.nonce:void 0})}}else w==null&&c.d.M(D)},tt.preload=function(D,w){if(typeof D=="string"&&typeof w=="object"&&w!==null&&typeof w.as=="string"){var _=w.as,Q=V(_,w.crossOrigin);c.d.L(D,_,{crossOrigin:Q,integrity:typeof w.integrity=="string"?w.integrity:void 0,nonce:typeof w.nonce=="string"?w.nonce:void 0,type:typeof w.type=="string"?w.type:void 0,fetchPriority:typeof w.fetchPriority=="string"?w.fetchPriority:void 0,referrerPolicy:typeof w.referrerPolicy=="string"?w.referrerPolicy:void 0,imageSrcSet:typeof w.imageSrcSet=="string"?w.imageSrcSet:void 0,imageSizes:typeof w.imageSizes=="string"?w.imageSizes:void 0,media:typeof w.media=="string"?w.media:void 0})}},tt.preloadModule=function(D,w){if(typeof D=="string")if(w){var _=V(w.as,w.crossOrigin);c.d.m(D,{as:typeof w.as=="string"&&w.as!=="script"?w.as:void 0,crossOrigin:_,integrity:typeof w.integrity=="string"?w.integrity:void 0})}else c.d.m(D)},tt.requestFormReset=function(D){c.d.r(D)},tt.unstable_batchedUpdates=function(D,w){return D(w)},tt.useFormState=function(D,w,_){return C.H.useFormState(D,w,_)},tt.useFormStatus=function(){return C.H.useHostTransitionStatus()},tt.version="19.1.0",tt}var jf;function Nm(){if(jf)return Dr.exports;jf=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(d){console.error(d)}}return r(),Dr.exports=Cm(),Dr.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yf;function Lm(){if(Yf)return Nn;Yf=1;var r=_m(),d=Nr(),g=Nm();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)t+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function S(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function O(e){var t=e,l=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(l=t.return),e=t.return;while(e)}return t.tag===3?l:null}function C(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function V(e){if(O(e)!==e)throw Error(c(188))}function D(e){var t=e.alternate;if(!t){if(t=O(e),t===null)throw Error(c(188));return t!==e?null:e}for(var l=e,i=t;;){var n=l.return;if(n===null)break;var a=n.alternate;if(a===null){if(i=n.return,i!==null){l=i;continue}break}if(n.child===a.child){for(a=n.child;a;){if(a===l)return V(n),e;if(a===i)return V(n),t;a=a.sibling}throw Error(c(188))}if(l.return!==i.return)l=n,i=a;else{for(var u=!1,o=n.child;o;){if(o===l){u=!0,l=n,i=a;break}if(o===i){u=!0,i=n,l=a;break}o=o.sibling}if(!u){for(o=a.child;o;){if(o===l){u=!0,l=a,i=n;break}if(o===i){u=!0,i=a,l=n;break}o=o.sibling}if(!u)throw Error(c(189))}}if(l.alternate!==i)throw Error(c(190))}if(l.tag!==3)throw Error(c(188));return l.stateNode.current===l?e:t}function w(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=w(e),t!==null)return t;e=e.sibling}return null}var _=Object.assign,Q=Symbol.for("react.element"),F=Symbol.for("react.transitional.element"),Se=Symbol.for("react.portal"),xe=Symbol.for("react.fragment"),Te=Symbol.for("react.strict_mode"),ze=Symbol.for("react.profiler"),Ke=Symbol.for("react.provider"),ee=Symbol.for("react.consumer"),ue=Symbol.for("react.context"),De=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),se=Symbol.for("react.suspense_list"),le=Symbol.for("react.memo"),Ee=Symbol.for("react.lazy"),he=Symbol.for("react.activity"),ae=Symbol.for("react.memo_cache_sentinel"),qe=Symbol.iterator;function He(e){return e===null||typeof e!="object"?null:(e=qe&&e[qe]||e["@@iterator"],typeof e=="function"?e:null)}var Ge=Symbol.for("react.client.reference");function it(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ge?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case xe:return"Fragment";case ze:return"Profiler";case Te:return"StrictMode";case G:return"Suspense";case se:return"SuspenseList";case he:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Se:return"Portal";case ue:return(e.displayName||"Context")+".Provider";case ee:return(e._context.displayName||"Context")+".Consumer";case De:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case le:return t=e.displayName||null,t!==null?t:it(e.type)||"Memo";case Ee:t=e._payload,e=e._init;try{return it(e(t))}catch{}}return null}var W=Array.isArray,T=d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=g.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},ce=[],f=-1;function E(e){return{current:e}}function U(e){0>f||(e.current=ce[f],ce[f]=null,f--)}function R(e,t){f++,ce[f]=e.current,e.current=t}var L=E(null),oe=E(null),J=E(null),nt=E(null);function H(e,t){switch(R(J,t),R(oe,e),R(L,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?of(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=of(t),e=rf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}U(L),R(L,e)}function M(){U(L),U(oe),U(J)}function k(e){e.memoizedState!==null&&R(nt,e);var t=L.current,l=rf(t,e.type);t!==l&&(R(oe,e),R(L,l))}function j(e){oe.current===e&&(U(L),U(oe)),nt.current===e&&(U(nt),Un._currentValue=Y)}var ke=Object.prototype.hasOwnProperty,Me=r.unstable_scheduleCallback,We=r.unstable_cancelCallback,Zt=r.unstable_shouldYield,Il=r.unstable_requestPaint,at=r.unstable_now,dh=r.unstable_getCurrentPriorityLevel,jr=r.unstable_ImmediatePriority,Yr=r.unstable_UserBlockingPriority,Zn=r.unstable_NormalPriority,fh=r.unstable_LowPriority,Gr=r.unstable_IdlePriority,hh=r.log,gh=r.unstable_setDisableYieldValue,Li=null,ft=null;function ol(e){if(typeof hh=="function"&&gh(e),ft&&typeof ft.setStrictMode=="function")try{ft.setStrictMode(Li,e)}catch{}}var ht=Math.clz32?Math.clz32:bh,mh=Math.log,ph=Math.LN2;function bh(e){return e>>>=0,e===0?32:31-(mh(e)/ph|0)|0}var Xn=256,Qn=4194304;function Bl(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Kn(e,t,l){var i=e.pendingLanes;if(i===0)return 0;var n=0,a=e.suspendedLanes,u=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~a,i!==0?n=Bl(i):(u&=o,u!==0?n=Bl(u):l||(l=o&~e,l!==0&&(n=Bl(l))))):(o=i&~a,o!==0?n=Bl(o):u!==0?n=Bl(u):l||(l=i&~e,l!==0&&(n=Bl(l)))),n===0?0:t!==0&&t!==n&&(t&a)===0&&(a=n&-n,l=t&-t,a>=l||a===32&&(l&4194048)!==0)?t:n}function qi(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function yh(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vr(){var e=Xn;return Xn<<=1,(Xn&4194048)===0&&(Xn=256),e}function Zr(){var e=Qn;return Qn<<=1,(Qn&62914560)===0&&(Qn=4194304),e}function su(e){for(var t=[],l=0;31>l;l++)t.push(e);return t}function ji(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function vh(e,t,l,i,n,a){var u=e.pendingLanes;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=l,e.entangledLanes&=l,e.errorRecoveryDisabledLanes&=l,e.shellSuspendCounter=0;var o=e.entanglements,s=e.expirationTimes,b=e.hiddenUpdates;for(l=u&~l;0<l;){var z=31-ht(l),x=1<<z;o[z]=0,s[z]=-1;var y=b[z];if(y!==null)for(b[z]=null,z=0;z<y.length;z++){var v=y[z];v!==null&&(v.lane&=-536870913)}l&=~x}i!==0&&Xr(e,i,0),a!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=a&~(u&~t))}function Xr(e,t,l){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-ht(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|l&4194090}function Qr(e,t){var l=e.entangledLanes|=t;for(e=e.entanglements;l;){var i=31-ht(l),n=1<<i;n&t|e[i]&t&&(e[i]|=t),l&=~n}}function du(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function fu(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Kr(){var e=B.p;return e!==0?e:(e=window.event,e===void 0?32:Df(e.type))}function Sh(e,t){var l=B.p;try{return B.p=e,t()}finally{B.p=l}}var rl=Math.random().toString(36).slice(2),Pe="__reactFiber$"+rl,ot="__reactProps$"+rl,$l="__reactContainer$"+rl,hu="__reactEvents$"+rl,Th="__reactListeners$"+rl,wh="__reactHandles$"+rl,Wr="__reactResources$"+rl,Yi="__reactMarker$"+rl;function gu(e){delete e[Pe],delete e[ot],delete e[hu],delete e[Th],delete e[wh]}function Pl(e){var t=e[Pe];if(t)return t;for(var l=e.parentNode;l;){if(t=l[$l]||l[Pe]){if(l=t.alternate,t.child!==null||l!==null&&l.child!==null)for(e=ff(e);e!==null;){if(l=e[Pe])return l;e=ff(e)}return t}e=l,l=e.parentNode}return null}function ei(e){if(e=e[Pe]||e[$l]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Gi(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function ti(e){var t=e[Wr];return t||(t=e[Wr]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ve(e){e[Yi]=!0}var Jr=new Set,Fr={};function kl(e,t){li(e,t),li(e+"Capture",t)}function li(e,t){for(Fr[e]=t,e=0;e<t.length;e++)Jr.add(t[e])}var zh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ir={},$r={};function Eh(e){return ke.call($r,e)?!0:ke.call(Ir,e)?!1:zh.test(e)?$r[e]=!0:(Ir[e]=!0,!1)}function Wn(e,t,l){if(Eh(t))if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+l)}}function Jn(e,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+l)}}function Xt(e,t,l,i){if(i===null)e.removeAttribute(l);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(l);return}e.setAttributeNS(t,l,""+i)}}var mu,Pr;function ii(e){if(mu===void 0)try{throw Error()}catch(l){var t=l.stack.trim().match(/\n( *(at )?)/);mu=t&&t[1]||"",Pr=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+mu+e+Pr}var pu=!1;function bu(e,t){if(!e||pu)return"";pu=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var x=function(){throw Error()};if(Object.defineProperty(x.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(x,[])}catch(v){var y=v}Reflect.construct(e,[],x)}else{try{x.call()}catch(v){y=v}e.call(x.prototype)}}else{try{throw Error()}catch(v){y=v}(x=e())&&typeof x.catch=="function"&&x.catch(function(){})}}catch(v){if(v&&y&&typeof v.stack=="string")return[v.stack,y.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=i.DetermineComponentFrameRoot(),u=a[0],o=a[1];if(u&&o){var s=u.split(`
`),b=o.split(`
`);for(n=i=0;i<s.length&&!s[i].includes("DetermineComponentFrameRoot");)i++;for(;n<b.length&&!b[n].includes("DetermineComponentFrameRoot");)n++;if(i===s.length||n===b.length)for(i=s.length-1,n=b.length-1;1<=i&&0<=n&&s[i]!==b[n];)n--;for(;1<=i&&0<=n;i--,n--)if(s[i]!==b[n]){if(i!==1||n!==1)do if(i--,n--,0>n||s[i]!==b[n]){var z=`
`+s[i].replace(" at new "," at ");return e.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",e.displayName)),z}while(1<=i&&0<=n);break}}}finally{pu=!1,Error.prepareStackTrace=l}return(l=e?e.displayName||e.name:"")?ii(l):""}function Ah(e){switch(e.tag){case 26:case 27:case 5:return ii(e.type);case 16:return ii("Lazy");case 13:return ii("Suspense");case 19:return ii("SuspenseList");case 0:case 15:return bu(e.type,!1);case 11:return bu(e.type.render,!1);case 1:return bu(e.type,!0);case 31:return ii("Activity");default:return""}}function ec(e){try{var t="";do t+=Ah(e),e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}function wt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function tc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function xh(e){var t=tc(e)?"checked":"value",l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,a=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(u){i=""+u,a.call(this,u)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return i},setValue:function(u){i=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Fn(e){e._valueTracker||(e._valueTracker=xh(e))}function lc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var l=t.getValue(),i="";return e&&(i=tc(e)?e.checked?"true":"false":e.value),e=i,e!==l?(t.setValue(e),!0):!1}function In(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Dh=/[\n"\\]/g;function zt(e){return e.replace(Dh,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function yu(e,t,l,i,n,a,u,o){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),t!=null?u==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+wt(t)):e.value!==""+wt(t)&&(e.value=""+wt(t)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),t!=null?vu(e,u,wt(t)):l!=null?vu(e,u,wt(l)):i!=null&&e.removeAttribute("value"),n==null&&a!=null&&(e.defaultChecked=!!a),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+wt(o):e.removeAttribute("name")}function ic(e,t,l,i,n,a,u,o){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.type=a),t!=null||l!=null){if(!(a!=="submit"&&a!=="reset"||t!=null))return;l=l!=null?""+wt(l):"",t=t!=null?""+wt(t):l,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??n,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u)}function vu(e,t,l){t==="number"&&In(e.ownerDocument)===e||e.defaultValue===""+l||(e.defaultValue=""+l)}function ni(e,t,l,i){if(e=e.options,t){t={};for(var n=0;n<l.length;n++)t["$"+l[n]]=!0;for(l=0;l<e.length;l++)n=t.hasOwnProperty("$"+e[l].value),e[l].selected!==n&&(e[l].selected=n),n&&i&&(e[l].defaultSelected=!0)}else{for(l=""+wt(l),t=null,n=0;n<e.length;n++){if(e[n].value===l){e[n].selected=!0,i&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function nc(e,t,l){if(t!=null&&(t=""+wt(t),t!==e.value&&(e.value=t),l==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=l!=null?""+wt(l):""}function ac(e,t,l,i){if(t==null){if(i!=null){if(l!=null)throw Error(c(92));if(W(i)){if(1<i.length)throw Error(c(93));i=i[0]}l=i}l==null&&(l=""),t=l}l=wt(t),e.defaultValue=l,i=e.textContent,i===l&&i!==""&&i!==null&&(e.value=i)}function ai(e,t){if(t){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=t;return}}e.textContent=t}var Mh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function uc(e,t,l){var i=t.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,l):typeof l!="number"||l===0||Mh.has(t)?t==="float"?e.cssFloat=l:e[t]=(""+l).trim():e[t]=l+"px"}function oc(e,t,l){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,l!=null){for(var i in l)!l.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var n in t)i=t[n],t.hasOwnProperty(n)&&l[n]!==i&&uc(e,n,i)}else for(var a in t)t.hasOwnProperty(a)&&uc(e,a,t[a])}function Su(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Oh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Hh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function $n(e){return Hh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Tu=null;function wu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ui=null,oi=null;function rc(e){var t=ei(e);if(t&&(e=t.stateNode)){var l=e[ot]||null;e:switch(e=t.stateNode,t.type){case"input":if(yu(e,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),t=l.name,l.type==="radio"&&t!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+zt(""+t)+'"][type="radio"]'),t=0;t<l.length;t++){var i=l[t];if(i!==e&&i.form===e.form){var n=i[ot]||null;if(!n)throw Error(c(90));yu(i,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<l.length;t++)i=l[t],i.form===e.form&&lc(i)}break e;case"textarea":nc(e,l.value,l.defaultValue);break e;case"select":t=l.value,t!=null&&ni(e,!!l.multiple,t,!1)}}}var zu=!1;function cc(e,t,l){if(zu)return e(t,l);zu=!0;try{var i=e(t);return i}finally{if(zu=!1,(ui!==null||oi!==null)&&(Na(),ui&&(t=ui,e=oi,oi=ui=null,rc(t),e)))for(t=0;t<e.length;t++)rc(e[t])}}function Vi(e,t){var l=e.stateNode;if(l===null)return null;var i=l[ot]||null;if(i===null)return null;l=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(c(231,t,typeof l));return l}var Qt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Eu=!1;if(Qt)try{var Zi={};Object.defineProperty(Zi,"passive",{get:function(){Eu=!0}}),window.addEventListener("test",Zi,Zi),window.removeEventListener("test",Zi,Zi)}catch{Eu=!1}var cl=null,Au=null,Pn=null;function sc(){if(Pn)return Pn;var e,t=Au,l=t.length,i,n="value"in cl?cl.value:cl.textContent,a=n.length;for(e=0;e<l&&t[e]===n[e];e++);var u=l-e;for(i=1;i<=u&&t[l-i]===n[a-i];i++);return Pn=n.slice(e,1<i?1-i:void 0)}function ea(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ta(){return!0}function dc(){return!1}function rt(e){function t(l,i,n,a,u){this._reactName=l,this._targetInst=n,this.type=i,this.nativeEvent=a,this.target=u,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(l=e[o],this[o]=l?l(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?ta:dc,this.isPropagationStopped=dc,this}return _(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=ta)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=ta)},persist:function(){},isPersistent:ta}),t}var _l={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},la=rt(_l),Xi=_({},_l,{view:0,detail:0}),Uh=rt(Xi),xu,Du,Qi,ia=_({},Xi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ou,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Qi&&(Qi&&e.type==="mousemove"?(xu=e.screenX-Qi.screenX,Du=e.screenY-Qi.screenY):Du=xu=0,Qi=e),xu)},movementY:function(e){return"movementY"in e?e.movementY:Du}}),fc=rt(ia),Rh=_({},ia,{dataTransfer:0}),Bh=rt(Rh),kh=_({},Xi,{relatedTarget:0}),Mu=rt(kh),_h=_({},_l,{animationName:0,elapsedTime:0,pseudoElement:0}),Ch=rt(_h),Nh=_({},_l,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Lh=rt(Nh),qh=_({},_l,{data:0}),hc=rt(qh),jh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Gh[e])?!!t[e]:!1}function Ou(){return Vh}var Zh=_({},Xi,{key:function(e){if(e.key){var t=jh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ea(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Yh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ou,charCode:function(e){return e.type==="keypress"?ea(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ea(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Xh=rt(Zh),Qh=_({},ia,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gc=rt(Qh),Kh=_({},Xi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ou}),Wh=rt(Kh),Jh=_({},_l,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fh=rt(Jh),Ih=_({},ia,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),$h=rt(Ih),Ph=_({},_l,{newState:0,oldState:0}),eg=rt(Ph),tg=[9,13,27,32],Hu=Qt&&"CompositionEvent"in window,Ki=null;Qt&&"documentMode"in document&&(Ki=document.documentMode);var lg=Qt&&"TextEvent"in window&&!Ki,mc=Qt&&(!Hu||Ki&&8<Ki&&11>=Ki),pc=" ",bc=!1;function yc(e,t){switch(e){case"keyup":return tg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ri=!1;function ig(e,t){switch(e){case"compositionend":return vc(t);case"keypress":return t.which!==32?null:(bc=!0,pc);case"textInput":return e=t.data,e===pc&&bc?null:e;default:return null}}function ng(e,t){if(ri)return e==="compositionend"||!Hu&&yc(e,t)?(e=sc(),Pn=Au=cl=null,ri=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return mc&&t.locale!=="ko"?null:t.data;default:return null}}var ag={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ag[e.type]:t==="textarea"}function Tc(e,t,l,i){ui?oi?oi.push(i):oi=[i]:ui=i,t=Va(t,"onChange"),0<t.length&&(l=new la("onChange","change",null,l,i),e.push({event:l,listeners:t}))}var Wi=null,Ji=null;function ug(e){tf(e,0)}function na(e){var t=Gi(e);if(lc(t))return e}function wc(e,t){if(e==="change")return t}var zc=!1;if(Qt){var Uu;if(Qt){var Ru="oninput"in document;if(!Ru){var Ec=document.createElement("div");Ec.setAttribute("oninput","return;"),Ru=typeof Ec.oninput=="function"}Uu=Ru}else Uu=!1;zc=Uu&&(!document.documentMode||9<document.documentMode)}function Ac(){Wi&&(Wi.detachEvent("onpropertychange",xc),Ji=Wi=null)}function xc(e){if(e.propertyName==="value"&&na(Ji)){var t=[];Tc(t,Ji,e,wu(e)),cc(ug,t)}}function og(e,t,l){e==="focusin"?(Ac(),Wi=t,Ji=l,Wi.attachEvent("onpropertychange",xc)):e==="focusout"&&Ac()}function rg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return na(Ji)}function cg(e,t){if(e==="click")return na(t)}function sg(e,t){if(e==="input"||e==="change")return na(t)}function dg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var gt=typeof Object.is=="function"?Object.is:dg;function Fi(e,t){if(gt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var l=Object.keys(e),i=Object.keys(t);if(l.length!==i.length)return!1;for(i=0;i<l.length;i++){var n=l[i];if(!ke.call(t,n)||!gt(e[n],t[n]))return!1}return!0}function Dc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Mc(e,t){var l=Dc(e);e=0;for(var i;l;){if(l.nodeType===3){if(i=e+l.textContent.length,e<=t&&i>=t)return{node:l,offset:t-e};e=i}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Dc(l)}}function Oc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Oc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Hc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=In(e.document);t instanceof e.HTMLIFrameElement;){try{var l=typeof t.contentWindow.location.href=="string"}catch{l=!1}if(l)e=t.contentWindow;else break;t=In(e.document)}return t}function Bu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var fg=Qt&&"documentMode"in document&&11>=document.documentMode,ci=null,ku=null,Ii=null,_u=!1;function Uc(e,t,l){var i=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;_u||ci==null||ci!==In(i)||(i=ci,"selectionStart"in i&&Bu(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ii&&Fi(Ii,i)||(Ii=i,i=Va(ku,"onSelect"),0<i.length&&(t=new la("onSelect","select",null,t,l),e.push({event:t,listeners:i}),t.target=ci)))}function Cl(e,t){var l={};return l[e.toLowerCase()]=t.toLowerCase(),l["Webkit"+e]="webkit"+t,l["Moz"+e]="moz"+t,l}var si={animationend:Cl("Animation","AnimationEnd"),animationiteration:Cl("Animation","AnimationIteration"),animationstart:Cl("Animation","AnimationStart"),transitionrun:Cl("Transition","TransitionRun"),transitionstart:Cl("Transition","TransitionStart"),transitioncancel:Cl("Transition","TransitionCancel"),transitionend:Cl("Transition","TransitionEnd")},Cu={},Rc={};Qt&&(Rc=document.createElement("div").style,"AnimationEvent"in window||(delete si.animationend.animation,delete si.animationiteration.animation,delete si.animationstart.animation),"TransitionEvent"in window||delete si.transitionend.transition);function Nl(e){if(Cu[e])return Cu[e];if(!si[e])return e;var t=si[e],l;for(l in t)if(t.hasOwnProperty(l)&&l in Rc)return Cu[e]=t[l];return e}var Bc=Nl("animationend"),kc=Nl("animationiteration"),_c=Nl("animationstart"),hg=Nl("transitionrun"),gg=Nl("transitionstart"),mg=Nl("transitioncancel"),Cc=Nl("transitionend"),Nc=new Map,Nu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Nu.push("scrollEnd");function Rt(e,t){Nc.set(e,t),kl(t,[e])}var Lc=new WeakMap;function Et(e,t){if(typeof e=="object"&&e!==null){var l=Lc.get(e);return l!==void 0?l:(t={value:e,source:t,stack:ec(t)},Lc.set(e,t),t)}return{value:e,source:t,stack:ec(t)}}var At=[],di=0,Lu=0;function aa(){for(var e=di,t=Lu=di=0;t<e;){var l=At[t];At[t++]=null;var i=At[t];At[t++]=null;var n=At[t];At[t++]=null;var a=At[t];if(At[t++]=null,i!==null&&n!==null){var u=i.pending;u===null?n.next=n:(n.next=u.next,u.next=n),i.pending=n}a!==0&&qc(l,n,a)}}function ua(e,t,l,i){At[di++]=e,At[di++]=t,At[di++]=l,At[di++]=i,Lu|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function qu(e,t,l,i){return ua(e,t,l,i),oa(e)}function fi(e,t){return ua(e,null,null,t),oa(e)}function qc(e,t,l){e.lanes|=l;var i=e.alternate;i!==null&&(i.lanes|=l);for(var n=!1,a=e.return;a!==null;)a.childLanes|=l,i=a.alternate,i!==null&&(i.childLanes|=l),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(n=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,n&&t!==null&&(n=31-ht(l),e=a.hiddenUpdates,i=e[n],i===null?e[n]=[t]:i.push(t),t.lane=l|536870912),a):null}function oa(e){if(50<zn)throw zn=0,Qo=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var hi={};function pg(e,t,l,i){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mt(e,t,l,i){return new pg(e,t,l,i)}function ju(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Kt(e,t){var l=e.alternate;return l===null?(l=mt(e.tag,t,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=t,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&65011712,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,t=e.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l.refCleanup=e.refCleanup,l}function jc(e,t){e.flags&=65011714;var l=e.alternate;return l===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,e.type=l.type,t=l.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ra(e,t,l,i,n,a){var u=0;if(i=e,typeof e=="function")ju(e)&&(u=1);else if(typeof e=="string")u=ym(e,l,L.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case he:return e=mt(31,l,t,n),e.elementType=he,e.lanes=a,e;case xe:return Ll(l.children,n,a,t);case Te:u=8,n|=24;break;case ze:return e=mt(12,l,t,n|2),e.elementType=ze,e.lanes=a,e;case G:return e=mt(13,l,t,n),e.elementType=G,e.lanes=a,e;case se:return e=mt(19,l,t,n),e.elementType=se,e.lanes=a,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ke:case ue:u=10;break e;case ee:u=9;break e;case De:u=11;break e;case le:u=14;break e;case Ee:u=16,i=null;break e}u=29,l=Error(c(130,e===null?"null":typeof e,"")),i=null}return t=mt(u,l,t,n),t.elementType=e,t.type=i,t.lanes=a,t}function Ll(e,t,l,i){return e=mt(7,e,i,t),e.lanes=l,e}function Yu(e,t,l){return e=mt(6,e,null,t),e.lanes=l,e}function Gu(e,t,l){return t=mt(4,e.children!==null?e.children:[],e.key,t),t.lanes=l,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var gi=[],mi=0,ca=null,sa=0,xt=[],Dt=0,ql=null,Wt=1,Jt="";function jl(e,t){gi[mi++]=sa,gi[mi++]=ca,ca=e,sa=t}function Yc(e,t,l){xt[Dt++]=Wt,xt[Dt++]=Jt,xt[Dt++]=ql,ql=e;var i=Wt;e=Jt;var n=32-ht(i)-1;i&=~(1<<n),l+=1;var a=32-ht(t)+n;if(30<a){var u=n-n%5;a=(i&(1<<u)-1).toString(32),i>>=u,n-=u,Wt=1<<32-ht(t)+n|l<<n|i,Jt=a+e}else Wt=1<<a|l<<n|i,Jt=e}function Vu(e){e.return!==null&&(jl(e,1),Yc(e,1,0))}function Zu(e){for(;e===ca;)ca=gi[--mi],gi[mi]=null,sa=gi[--mi],gi[mi]=null;for(;e===ql;)ql=xt[--Dt],xt[Dt]=null,Jt=xt[--Dt],xt[Dt]=null,Wt=xt[--Dt],xt[Dt]=null}var ut=null,Re=null,fe=!1,Yl=null,qt=!1,Xu=Error(c(519));function Gl(e){var t=Error(c(418,""));throw en(Et(t,e)),Xu}function Gc(e){var t=e.stateNode,l=e.type,i=e.memoizedProps;switch(t[Pe]=e,t[ot]=i,l){case"dialog":ne("cancel",t),ne("close",t);break;case"iframe":case"object":case"embed":ne("load",t);break;case"video":case"audio":for(l=0;l<An.length;l++)ne(An[l],t);break;case"source":ne("error",t);break;case"img":case"image":case"link":ne("error",t),ne("load",t);break;case"details":ne("toggle",t);break;case"input":ne("invalid",t),ic(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0),Fn(t);break;case"select":ne("invalid",t);break;case"textarea":ne("invalid",t),ac(t,i.value,i.defaultValue,i.children),Fn(t)}l=i.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||t.textContent===""+l||i.suppressHydrationWarning===!0||uf(t.textContent,l)?(i.popover!=null&&(ne("beforetoggle",t),ne("toggle",t)),i.onScroll!=null&&ne("scroll",t),i.onScrollEnd!=null&&ne("scrollend",t),i.onClick!=null&&(t.onclick=Za),t=!0):t=!1,t||Gl(e)}function Vc(e){for(ut=e.return;ut;)switch(ut.tag){case 5:case 13:qt=!1;return;case 27:case 3:qt=!0;return;default:ut=ut.return}}function $i(e){if(e!==ut)return!1;if(!fe)return Vc(e),fe=!0,!1;var t=e.tag,l;if((l=t!==3&&t!==27)&&((l=t===5)&&(l=e.type,l=!(l!=="form"&&l!=="button")||rr(e.type,e.memoizedProps)),l=!l),l&&Re&&Gl(e),Vc(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(l=e.data,l==="/$"){if(t===0){Re=kt(e.nextSibling);break e}t--}else l!=="$"&&l!=="$!"&&l!=="$?"||t++;e=e.nextSibling}Re=null}}else t===27?(t=Re,Al(e.type)?(e=fr,fr=null,Re=e):Re=t):Re=ut?kt(e.stateNode.nextSibling):null;return!0}function Pi(){Re=ut=null,fe=!1}function Zc(){var e=Yl;return e!==null&&(dt===null?dt=e:dt.push.apply(dt,e),Yl=null),e}function en(e){Yl===null?Yl=[e]:Yl.push(e)}var Qu=E(null),Vl=null,Ft=null;function sl(e,t,l){R(Qu,t._currentValue),t._currentValue=l}function It(e){e._currentValue=Qu.current,U(Qu)}function Ku(e,t,l){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===l)break;e=e.return}}function Wu(e,t,l,i){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var a=n.dependencies;if(a!==null){var u=n.child;a=a.firstContext;e:for(;a!==null;){var o=a;a=n;for(var s=0;s<t.length;s++)if(o.context===t[s]){a.lanes|=l,o=a.alternate,o!==null&&(o.lanes|=l),Ku(a.return,l,e),i||(u=null);break e}a=o.next}}else if(n.tag===18){if(u=n.return,u===null)throw Error(c(341));u.lanes|=l,a=u.alternate,a!==null&&(a.lanes|=l),Ku(u,l,e),u=null}else u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===e){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}function tn(e,t,l,i){e=null;for(var n=t,a=!1;n!==null;){if(!a){if((n.flags&524288)!==0)a=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var u=n.alternate;if(u===null)throw Error(c(387));if(u=u.memoizedProps,u!==null){var o=n.type;gt(n.pendingProps.value,u.value)||(e!==null?e.push(o):e=[o])}}else if(n===nt.current){if(u=n.alternate,u===null)throw Error(c(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(Un):e=[Un])}n=n.return}e!==null&&Wu(t,e,l,i),t.flags|=262144}function da(e){for(e=e.firstContext;e!==null;){if(!gt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Zl(e){Vl=e,Ft=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function et(e){return Xc(Vl,e)}function fa(e,t){return Vl===null&&Zl(e),Xc(e,t)}function Xc(e,t){var l=t._currentValue;if(t={context:t,memoizedValue:l,next:null},Ft===null){if(e===null)throw Error(c(308));Ft=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ft=Ft.next=t;return l}var bg=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(l,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(l){return l()})}},yg=r.unstable_scheduleCallback,vg=r.unstable_NormalPriority,je={$$typeof:ue,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ju(){return{controller:new bg,data:new Map,refCount:0}}function ln(e){e.refCount--,e.refCount===0&&yg(vg,function(){e.controller.abort()})}var nn=null,Fu=0,pi=0,bi=null;function Sg(e,t){if(nn===null){var l=nn=[];Fu=0,pi=Po(),bi={status:"pending",value:void 0,then:function(i){l.push(i)}}}return Fu++,t.then(Qc,Qc),t}function Qc(){if(--Fu===0&&nn!==null){bi!==null&&(bi.status="fulfilled");var e=nn;nn=null,pi=0,bi=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Tg(e,t){var l=[],i={status:"pending",value:null,reason:null,then:function(n){l.push(n)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var n=0;n<l.length;n++)(0,l[n])(t)},function(n){for(i.status="rejected",i.reason=n,n=0;n<l.length;n++)(0,l[n])(void 0)}),i}var Kc=T.S;T.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&Sg(e,t),Kc!==null&&Kc(e,t)};var Xl=E(null);function Iu(){var e=Xl.current;return e!==null?e:Ae.pooledCache}function ha(e,t){t===null?R(Xl,Xl.current):R(Xl,t.pool)}function Wc(){var e=Iu();return e===null?null:{parent:je._currentValue,pool:e}}var an=Error(c(460)),Jc=Error(c(474)),ga=Error(c(542)),$u={then:function(){}};function Fc(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ma(){}function Ic(e,t,l){switch(l=e[l],l===void 0?e.push(t):l!==t&&(t.then(ma,ma),t=l),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Pc(e),e;default:if(typeof t.status=="string")t.then(ma,ma);else{if(e=Ae,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=i}},function(i){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Pc(e),e}throw un=t,an}}var un=null;function $c(){if(un===null)throw Error(c(459));var e=un;return un=null,e}function Pc(e){if(e===an||e===ga)throw Error(c(483))}var dl=!1;function Pu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function eo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function fl(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function hl(e,t,l){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(ge&2)!==0){var n=i.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),i.pending=t,t=oa(e),qc(e,null,l),t}return ua(e,i,t,l),oa(e)}function on(e,t,l){if(t=t.updateQueue,t!==null&&(t=t.shared,(l&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,l|=i,t.lanes=l,Qr(e,l)}}function to(e,t){var l=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,l===i)){var n=null,a=null;if(l=l.firstBaseUpdate,l!==null){do{var u={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};a===null?n=a=u:a=a.next=u,l=l.next}while(l!==null);a===null?n=a=t:a=a.next=t}else n=a=t;l={baseState:i.baseState,firstBaseUpdate:n,lastBaseUpdate:a,shared:i.shared,callbacks:i.callbacks},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=t:e.next=t,l.lastBaseUpdate=t}var lo=!1;function rn(){if(lo){var e=bi;if(e!==null)throw e}}function cn(e,t,l,i){lo=!1;var n=e.updateQueue;dl=!1;var a=n.firstBaseUpdate,u=n.lastBaseUpdate,o=n.shared.pending;if(o!==null){n.shared.pending=null;var s=o,b=s.next;s.next=null,u===null?a=b:u.next=b,u=s;var z=e.alternate;z!==null&&(z=z.updateQueue,o=z.lastBaseUpdate,o!==u&&(o===null?z.firstBaseUpdate=b:o.next=b,z.lastBaseUpdate=s))}if(a!==null){var x=n.baseState;u=0,z=b=s=null,o=a;do{var y=o.lane&-536870913,v=y!==o.lane;if(v?(re&y)===y:(i&y)===y){y!==0&&y===pi&&(lo=!0),z!==null&&(z=z.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var K=e,Z=o;y=t;var ve=l;switch(Z.tag){case 1:if(K=Z.payload,typeof K=="function"){x=K.call(ve,x,y);break e}x=K;break e;case 3:K.flags=K.flags&-65537|128;case 0:if(K=Z.payload,y=typeof K=="function"?K.call(ve,x,y):K,y==null)break e;x=_({},x,y);break e;case 2:dl=!0}}y=o.callback,y!==null&&(e.flags|=64,v&&(e.flags|=8192),v=n.callbacks,v===null?n.callbacks=[y]:v.push(y))}else v={lane:y,tag:o.tag,payload:o.payload,callback:o.callback,next:null},z===null?(b=z=v,s=x):z=z.next=v,u|=y;if(o=o.next,o===null){if(o=n.shared.pending,o===null)break;v=o,o=v.next,v.next=null,n.lastBaseUpdate=v,n.shared.pending=null}}while(!0);z===null&&(s=x),n.baseState=s,n.firstBaseUpdate=b,n.lastBaseUpdate=z,a===null&&(n.shared.lanes=0),Tl|=u,e.lanes=u,e.memoizedState=x}}function es(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function ts(e,t){var l=e.callbacks;if(l!==null)for(e.callbacks=null,e=0;e<l.length;e++)es(l[e],t)}var yi=E(null),pa=E(0);function ls(e,t){e=nl,R(pa,e),R(yi,t),nl=e|t.baseLanes}function io(){R(pa,nl),R(yi,yi.current)}function no(){nl=pa.current,U(yi),U(pa)}var gl=0,P=null,be=null,Ne=null,ba=!1,vi=!1,Ql=!1,ya=0,sn=0,Si=null,wg=0;function _e(){throw Error(c(321))}function ao(e,t){if(t===null)return!1;for(var l=0;l<t.length&&l<e.length;l++)if(!gt(e[l],t[l]))return!1;return!0}function uo(e,t,l,i,n,a){return gl=a,P=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,T.H=e===null||e.memoizedState===null?qs:js,Ql=!1,a=l(i,n),Ql=!1,vi&&(a=ns(t,l,i,n)),is(e),a}function is(e){T.H=Ea;var t=be!==null&&be.next!==null;if(gl=0,Ne=be=P=null,ba=!1,sn=0,Si=null,t)throw Error(c(300));e===null||Ze||(e=e.dependencies,e!==null&&da(e)&&(Ze=!0))}function ns(e,t,l,i){P=e;var n=0;do{if(vi&&(Si=null),sn=0,vi=!1,25<=n)throw Error(c(301));if(n+=1,Ne=be=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}T.H=Og,a=t(l,i)}while(vi);return a}function zg(){var e=T.H,t=e.useState()[0];return t=typeof t.then=="function"?dn(t):t,e=e.useState()[0],(be!==null?be.memoizedState:null)!==e&&(P.flags|=1024),t}function oo(){var e=ya!==0;return ya=0,e}function ro(e,t,l){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l}function co(e){if(ba){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ba=!1}gl=0,Ne=be=P=null,vi=!1,sn=ya=0,Si=null}function ct(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ne===null?P.memoizedState=Ne=e:Ne=Ne.next=e,Ne}function Le(){if(be===null){var e=P.alternate;e=e!==null?e.memoizedState:null}else e=be.next;var t=Ne===null?P.memoizedState:Ne.next;if(t!==null)Ne=t,be=e;else{if(e===null)throw P.alternate===null?Error(c(467)):Error(c(310));be=e,e={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},Ne===null?P.memoizedState=Ne=e:Ne=Ne.next=e}return Ne}function so(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function dn(e){var t=sn;return sn+=1,Si===null&&(Si=[]),e=Ic(Si,e,t),t=P,(Ne===null?t.memoizedState:Ne.next)===null&&(t=t.alternate,T.H=t===null||t.memoizedState===null?qs:js),e}function va(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return dn(e);if(e.$$typeof===ue)return et(e)}throw Error(c(438,String(e)))}function fo(e){var t=null,l=P.updateQueue;if(l!==null&&(t=l.memoCache),t==null){var i=P.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),l===null&&(l=so(),P.updateQueue=l),l.memoCache=t,l=t.data[t.index],l===void 0)for(l=t.data[t.index]=Array(e),i=0;i<e;i++)l[i]=ae;return t.index++,l}function $t(e,t){return typeof t=="function"?t(e):t}function Sa(e){var t=Le();return ho(t,be,e)}function ho(e,t,l){var i=e.queue;if(i===null)throw Error(c(311));i.lastRenderedReducer=l;var n=e.baseQueue,a=i.pending;if(a!==null){if(n!==null){var u=n.next;n.next=a.next,a.next=u}t.baseQueue=n=a,i.pending=null}if(a=e.baseState,n===null)e.memoizedState=a;else{t=n.next;var o=u=null,s=null,b=t,z=!1;do{var x=b.lane&-536870913;if(x!==b.lane?(re&x)===x:(gl&x)===x){var y=b.revertLane;if(y===0)s!==null&&(s=s.next={lane:0,revertLane:0,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null}),x===pi&&(z=!0);else if((gl&y)===y){b=b.next,y===pi&&(z=!0);continue}else x={lane:0,revertLane:b.revertLane,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null},s===null?(o=s=x,u=a):s=s.next=x,P.lanes|=y,Tl|=y;x=b.action,Ql&&l(a,x),a=b.hasEagerState?b.eagerState:l(a,x)}else y={lane:x,revertLane:b.revertLane,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null},s===null?(o=s=y,u=a):s=s.next=y,P.lanes|=x,Tl|=x;b=b.next}while(b!==null&&b!==t);if(s===null?u=a:s.next=o,!gt(a,e.memoizedState)&&(Ze=!0,z&&(l=bi,l!==null)))throw l;e.memoizedState=a,e.baseState=u,e.baseQueue=s,i.lastRenderedState=a}return n===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function go(e){var t=Le(),l=t.queue;if(l===null)throw Error(c(311));l.lastRenderedReducer=e;var i=l.dispatch,n=l.pending,a=t.memoizedState;if(n!==null){l.pending=null;var u=n=n.next;do a=e(a,u.action),u=u.next;while(u!==n);gt(a,t.memoizedState)||(Ze=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),l.lastRenderedState=a}return[a,i]}function as(e,t,l){var i=P,n=Le(),a=fe;if(a){if(l===void 0)throw Error(c(407));l=l()}else l=t();var u=!gt((be||n).memoizedState,l);u&&(n.memoizedState=l,Ze=!0),n=n.queue;var o=rs.bind(null,i,n,e);if(fn(2048,8,o,[e]),n.getSnapshot!==t||u||Ne!==null&&Ne.memoizedState.tag&1){if(i.flags|=2048,Ti(9,Ta(),os.bind(null,i,n,l,t),null),Ae===null)throw Error(c(349));a||(gl&124)!==0||us(i,t,l)}return l}function us(e,t,l){e.flags|=16384,e={getSnapshot:t,value:l},t=P.updateQueue,t===null?(t=so(),P.updateQueue=t,t.stores=[e]):(l=t.stores,l===null?t.stores=[e]:l.push(e))}function os(e,t,l,i){t.value=l,t.getSnapshot=i,cs(t)&&ss(e)}function rs(e,t,l){return l(function(){cs(t)&&ss(e)})}function cs(e){var t=e.getSnapshot;e=e.value;try{var l=t();return!gt(e,l)}catch{return!0}}function ss(e){var t=fi(e,2);t!==null&&St(t,e,2)}function mo(e){var t=ct();if(typeof e=="function"){var l=e;if(e=l(),Ql){ol(!0);try{l()}finally{ol(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$t,lastRenderedState:e},t}function ds(e,t,l,i){return e.baseState=l,ho(e,be,typeof i=="function"?i:$t)}function Eg(e,t,l,i,n){if(za(e))throw Error(c(485));if(e=t.action,e!==null){var a={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){a.listeners.push(u)}};T.T!==null?l(!0):a.isTransition=!1,i(a),l=t.pending,l===null?(a.next=t.pending=a,fs(t,a)):(a.next=l.next,t.pending=l.next=a)}}function fs(e,t){var l=t.action,i=t.payload,n=e.state;if(t.isTransition){var a=T.T,u={};T.T=u;try{var o=l(n,i),s=T.S;s!==null&&s(u,o),hs(e,t,o)}catch(b){po(e,t,b)}finally{T.T=a}}else try{a=l(n,i),hs(e,t,a)}catch(b){po(e,t,b)}}function hs(e,t,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(i){gs(e,t,i)},function(i){return po(e,t,i)}):gs(e,t,l)}function gs(e,t,l){t.status="fulfilled",t.value=l,ms(t),e.state=l,t=e.pending,t!==null&&(l=t.next,l===t?e.pending=null:(l=l.next,t.next=l,fs(e,l)))}function po(e,t,l){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=l,ms(t),t=t.next;while(t!==i)}e.action=null}function ms(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ps(e,t){return t}function bs(e,t){if(fe){var l=Ae.formState;if(l!==null){e:{var i=P;if(fe){if(Re){t:{for(var n=Re,a=qt;n.nodeType!==8;){if(!a){n=null;break t}if(n=kt(n.nextSibling),n===null){n=null;break t}}a=n.data,n=a==="F!"||a==="F"?n:null}if(n){Re=kt(n.nextSibling),i=n.data==="F!";break e}}Gl(i)}i=!1}i&&(t=l[0])}}return l=ct(),l.memoizedState=l.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ps,lastRenderedState:t},l.queue=i,l=Cs.bind(null,P,i),i.dispatch=l,i=mo(!1),a=To.bind(null,P,!1,i.queue),i=ct(),n={state:t,dispatch:null,action:e,pending:null},i.queue=n,l=Eg.bind(null,P,n,a,l),n.dispatch=l,i.memoizedState=e,[t,l,!1]}function ys(e){var t=Le();return vs(t,be,e)}function vs(e,t,l){if(t=ho(e,t,ps)[0],e=Sa($t)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=dn(t)}catch(u){throw u===an?ga:u}else i=t;t=Le();var n=t.queue,a=n.dispatch;return l!==t.memoizedState&&(P.flags|=2048,Ti(9,Ta(),Ag.bind(null,n,l),null)),[i,a,e]}function Ag(e,t){e.action=t}function Ss(e){var t=Le(),l=be;if(l!==null)return vs(t,l,e);Le(),t=t.memoizedState,l=Le();var i=l.queue.dispatch;return l.memoizedState=e,[t,i,!1]}function Ti(e,t,l,i){return e={tag:e,create:l,deps:i,inst:t,next:null},t=P.updateQueue,t===null&&(t=so(),P.updateQueue=t),l=t.lastEffect,l===null?t.lastEffect=e.next=e:(i=l.next,l.next=e,e.next=i,t.lastEffect=e),e}function Ta(){return{destroy:void 0,resource:void 0}}function Ts(){return Le().memoizedState}function wa(e,t,l,i){var n=ct();i=i===void 0?null:i,P.flags|=e,n.memoizedState=Ti(1|t,Ta(),l,i)}function fn(e,t,l,i){var n=Le();i=i===void 0?null:i;var a=n.memoizedState.inst;be!==null&&i!==null&&ao(i,be.memoizedState.deps)?n.memoizedState=Ti(t,a,l,i):(P.flags|=e,n.memoizedState=Ti(1|t,a,l,i))}function ws(e,t){wa(8390656,8,e,t)}function zs(e,t){fn(2048,8,e,t)}function Es(e,t){return fn(4,2,e,t)}function As(e,t){return fn(4,4,e,t)}function xs(e,t){if(typeof t=="function"){e=e();var l=t(e);return function(){typeof l=="function"?l():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ds(e,t,l){l=l!=null?l.concat([e]):null,fn(4,4,xs.bind(null,t,e),l)}function bo(){}function Ms(e,t){var l=Le();t=t===void 0?null:t;var i=l.memoizedState;return t!==null&&ao(t,i[1])?i[0]:(l.memoizedState=[e,t],e)}function Os(e,t){var l=Le();t=t===void 0?null:t;var i=l.memoizedState;if(t!==null&&ao(t,i[1]))return i[0];if(i=e(),Ql){ol(!0);try{e()}finally{ol(!1)}}return l.memoizedState=[i,t],i}function yo(e,t,l){return l===void 0||(gl&1073741824)!==0?e.memoizedState=t:(e.memoizedState=l,e=Rd(),P.lanes|=e,Tl|=e,l)}function Hs(e,t,l,i){return gt(l,t)?l:yi.current!==null?(e=yo(e,l,i),gt(e,t)||(Ze=!0),e):(gl&42)===0?(Ze=!0,e.memoizedState=l):(e=Rd(),P.lanes|=e,Tl|=e,t)}function Us(e,t,l,i,n){var a=B.p;B.p=a!==0&&8>a?a:8;var u=T.T,o={};T.T=o,To(e,!1,t,l);try{var s=n(),b=T.S;if(b!==null&&b(o,s),s!==null&&typeof s=="object"&&typeof s.then=="function"){var z=Tg(s,i);hn(e,t,z,vt(e))}else hn(e,t,i,vt(e))}catch(x){hn(e,t,{then:function(){},status:"rejected",reason:x},vt())}finally{B.p=a,T.T=u}}function xg(){}function vo(e,t,l,i){if(e.tag!==5)throw Error(c(476));var n=Rs(e).queue;Us(e,n,t,Y,l===null?xg:function(){return Bs(e),l(i)})}function Rs(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$t,lastRenderedState:Y},next:null};var l={};return t.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$t,lastRenderedState:l},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Bs(e){var t=Rs(e).next.queue;hn(e,t,{},vt())}function So(){return et(Un)}function ks(){return Le().memoizedState}function _s(){return Le().memoizedState}function Dg(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var l=vt();e=fl(l);var i=hl(t,e,l);i!==null&&(St(i,t,l),on(i,t,l)),t={cache:Ju()},e.payload=t;return}t=t.return}}function Mg(e,t,l){var i=vt();l={lane:i,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null},za(e)?Ns(t,l):(l=qu(e,t,l,i),l!==null&&(St(l,e,i),Ls(l,t,i)))}function Cs(e,t,l){var i=vt();hn(e,t,l,i)}function hn(e,t,l,i){var n={lane:i,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null};if(za(e))Ns(t,n);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var u=t.lastRenderedState,o=a(u,l);if(n.hasEagerState=!0,n.eagerState=o,gt(o,u))return ua(e,t,n,0),Ae===null&&aa(),!1}catch{}finally{}if(l=qu(e,t,n,i),l!==null)return St(l,e,i),Ls(l,t,i),!0}return!1}function To(e,t,l,i){if(i={lane:2,revertLane:Po(),action:i,hasEagerState:!1,eagerState:null,next:null},za(e)){if(t)throw Error(c(479))}else t=qu(e,l,i,2),t!==null&&St(t,e,2)}function za(e){var t=e.alternate;return e===P||t!==null&&t===P}function Ns(e,t){vi=ba=!0;var l=e.pending;l===null?t.next=t:(t.next=l.next,l.next=t),e.pending=t}function Ls(e,t,l){if((l&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,l|=i,t.lanes=l,Qr(e,l)}}var Ea={readContext:et,use:va,useCallback:_e,useContext:_e,useEffect:_e,useImperativeHandle:_e,useLayoutEffect:_e,useInsertionEffect:_e,useMemo:_e,useReducer:_e,useRef:_e,useState:_e,useDebugValue:_e,useDeferredValue:_e,useTransition:_e,useSyncExternalStore:_e,useId:_e,useHostTransitionStatus:_e,useFormState:_e,useActionState:_e,useOptimistic:_e,useMemoCache:_e,useCacheRefresh:_e},qs={readContext:et,use:va,useCallback:function(e,t){return ct().memoizedState=[e,t===void 0?null:t],e},useContext:et,useEffect:ws,useImperativeHandle:function(e,t,l){l=l!=null?l.concat([e]):null,wa(4194308,4,xs.bind(null,t,e),l)},useLayoutEffect:function(e,t){return wa(4194308,4,e,t)},useInsertionEffect:function(e,t){wa(4,2,e,t)},useMemo:function(e,t){var l=ct();t=t===void 0?null:t;var i=e();if(Ql){ol(!0);try{e()}finally{ol(!1)}}return l.memoizedState=[i,t],i},useReducer:function(e,t,l){var i=ct();if(l!==void 0){var n=l(t);if(Ql){ol(!0);try{l(t)}finally{ol(!1)}}}else n=t;return i.memoizedState=i.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},i.queue=e,e=e.dispatch=Mg.bind(null,P,e),[i.memoizedState,e]},useRef:function(e){var t=ct();return e={current:e},t.memoizedState=e},useState:function(e){e=mo(e);var t=e.queue,l=Cs.bind(null,P,t);return t.dispatch=l,[e.memoizedState,l]},useDebugValue:bo,useDeferredValue:function(e,t){var l=ct();return yo(l,e,t)},useTransition:function(){var e=mo(!1);return e=Us.bind(null,P,e.queue,!0,!1),ct().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,l){var i=P,n=ct();if(fe){if(l===void 0)throw Error(c(407));l=l()}else{if(l=t(),Ae===null)throw Error(c(349));(re&124)!==0||us(i,t,l)}n.memoizedState=l;var a={value:l,getSnapshot:t};return n.queue=a,ws(rs.bind(null,i,a,e),[e]),i.flags|=2048,Ti(9,Ta(),os.bind(null,i,a,l,t),null),l},useId:function(){var e=ct(),t=Ae.identifierPrefix;if(fe){var l=Jt,i=Wt;l=(i&~(1<<32-ht(i)-1)).toString(32)+l,t="«"+t+"R"+l,l=ya++,0<l&&(t+="H"+l.toString(32)),t+="»"}else l=wg++,t="«"+t+"r"+l.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:So,useFormState:bs,useActionState:bs,useOptimistic:function(e){var t=ct();t.memoizedState=t.baseState=e;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=l,t=To.bind(null,P,!0,l),l.dispatch=t,[e,t]},useMemoCache:fo,useCacheRefresh:function(){return ct().memoizedState=Dg.bind(null,P)}},js={readContext:et,use:va,useCallback:Ms,useContext:et,useEffect:zs,useImperativeHandle:Ds,useInsertionEffect:Es,useLayoutEffect:As,useMemo:Os,useReducer:Sa,useRef:Ts,useState:function(){return Sa($t)},useDebugValue:bo,useDeferredValue:function(e,t){var l=Le();return Hs(l,be.memoizedState,e,t)},useTransition:function(){var e=Sa($t)[0],t=Le().memoizedState;return[typeof e=="boolean"?e:dn(e),t]},useSyncExternalStore:as,useId:ks,useHostTransitionStatus:So,useFormState:ys,useActionState:ys,useOptimistic:function(e,t){var l=Le();return ds(l,be,e,t)},useMemoCache:fo,useCacheRefresh:_s},Og={readContext:et,use:va,useCallback:Ms,useContext:et,useEffect:zs,useImperativeHandle:Ds,useInsertionEffect:Es,useLayoutEffect:As,useMemo:Os,useReducer:go,useRef:Ts,useState:function(){return go($t)},useDebugValue:bo,useDeferredValue:function(e,t){var l=Le();return be===null?yo(l,e,t):Hs(l,be.memoizedState,e,t)},useTransition:function(){var e=go($t)[0],t=Le().memoizedState;return[typeof e=="boolean"?e:dn(e),t]},useSyncExternalStore:as,useId:ks,useHostTransitionStatus:So,useFormState:Ss,useActionState:Ss,useOptimistic:function(e,t){var l=Le();return be!==null?ds(l,be,e,t):(l.baseState=e,[e,l.queue.dispatch])},useMemoCache:fo,useCacheRefresh:_s},wi=null,gn=0;function Aa(e){var t=gn;return gn+=1,wi===null&&(wi=[]),Ic(wi,e,t)}function mn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function xa(e,t){throw t.$$typeof===Q?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Ys(e){var t=e._init;return t(e._payload)}function Gs(e){function t(m,h){if(e){var p=m.deletions;p===null?(m.deletions=[h],m.flags|=16):p.push(h)}}function l(m,h){if(!e)return null;for(;h!==null;)t(m,h),h=h.sibling;return null}function i(m){for(var h=new Map;m!==null;)m.key!==null?h.set(m.key,m):h.set(m.index,m),m=m.sibling;return h}function n(m,h){return m=Kt(m,h),m.index=0,m.sibling=null,m}function a(m,h,p){return m.index=p,e?(p=m.alternate,p!==null?(p=p.index,p<h?(m.flags|=67108866,h):p):(m.flags|=67108866,h)):(m.flags|=1048576,h)}function u(m){return e&&m.alternate===null&&(m.flags|=67108866),m}function o(m,h,p,A){return h===null||h.tag!==6?(h=Yu(p,m.mode,A),h.return=m,h):(h=n(h,p),h.return=m,h)}function s(m,h,p,A){var N=p.type;return N===xe?z(m,h,p.props.children,A,p.key):h!==null&&(h.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Ee&&Ys(N)===h.type)?(h=n(h,p.props),mn(h,p),h.return=m,h):(h=ra(p.type,p.key,p.props,null,m.mode,A),mn(h,p),h.return=m,h)}function b(m,h,p,A){return h===null||h.tag!==4||h.stateNode.containerInfo!==p.containerInfo||h.stateNode.implementation!==p.implementation?(h=Gu(p,m.mode,A),h.return=m,h):(h=n(h,p.children||[]),h.return=m,h)}function z(m,h,p,A,N){return h===null||h.tag!==7?(h=Ll(p,m.mode,A,N),h.return=m,h):(h=n(h,p),h.return=m,h)}function x(m,h,p){if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return h=Yu(""+h,m.mode,p),h.return=m,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case F:return p=ra(h.type,h.key,h.props,null,m.mode,p),mn(p,h),p.return=m,p;case Se:return h=Gu(h,m.mode,p),h.return=m,h;case Ee:var A=h._init;return h=A(h._payload),x(m,h,p)}if(W(h)||He(h))return h=Ll(h,m.mode,p,null),h.return=m,h;if(typeof h.then=="function")return x(m,Aa(h),p);if(h.$$typeof===ue)return x(m,fa(m,h),p);xa(m,h)}return null}function y(m,h,p,A){var N=h!==null?h.key:null;if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return N!==null?null:o(m,h,""+p,A);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case F:return p.key===N?s(m,h,p,A):null;case Se:return p.key===N?b(m,h,p,A):null;case Ee:return N=p._init,p=N(p._payload),y(m,h,p,A)}if(W(p)||He(p))return N!==null?null:z(m,h,p,A,null);if(typeof p.then=="function")return y(m,h,Aa(p),A);if(p.$$typeof===ue)return y(m,h,fa(m,p),A);xa(m,p)}return null}function v(m,h,p,A,N){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return m=m.get(p)||null,o(h,m,""+A,N);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case F:return m=m.get(A.key===null?p:A.key)||null,s(h,m,A,N);case Se:return m=m.get(A.key===null?p:A.key)||null,b(h,m,A,N);case Ee:var te=A._init;return A=te(A._payload),v(m,h,p,A,N)}if(W(A)||He(A))return m=m.get(p)||null,z(h,m,A,N,null);if(typeof A.then=="function")return v(m,h,p,Aa(A),N);if(A.$$typeof===ue)return v(m,h,p,fa(h,A),N);xa(h,A)}return null}function K(m,h,p,A){for(var N=null,te=null,q=h,X=h=0,Qe=null;q!==null&&X<p.length;X++){q.index>X?(Qe=q,q=null):Qe=q.sibling;var de=y(m,q,p[X],A);if(de===null){q===null&&(q=Qe);break}e&&q&&de.alternate===null&&t(m,q),h=a(de,h,X),te===null?N=de:te.sibling=de,te=de,q=Qe}if(X===p.length)return l(m,q),fe&&jl(m,X),N;if(q===null){for(;X<p.length;X++)q=x(m,p[X],A),q!==null&&(h=a(q,h,X),te===null?N=q:te.sibling=q,te=q);return fe&&jl(m,X),N}for(q=i(q);X<p.length;X++)Qe=v(q,m,X,p[X],A),Qe!==null&&(e&&Qe.alternate!==null&&q.delete(Qe.key===null?X:Qe.key),h=a(Qe,h,X),te===null?N=Qe:te.sibling=Qe,te=Qe);return e&&q.forEach(function(Hl){return t(m,Hl)}),fe&&jl(m,X),N}function Z(m,h,p,A){if(p==null)throw Error(c(151));for(var N=null,te=null,q=h,X=h=0,Qe=null,de=p.next();q!==null&&!de.done;X++,de=p.next()){q.index>X?(Qe=q,q=null):Qe=q.sibling;var Hl=y(m,q,de.value,A);if(Hl===null){q===null&&(q=Qe);break}e&&q&&Hl.alternate===null&&t(m,q),h=a(Hl,h,X),te===null?N=Hl:te.sibling=Hl,te=Hl,q=Qe}if(de.done)return l(m,q),fe&&jl(m,X),N;if(q===null){for(;!de.done;X++,de=p.next())de=x(m,de.value,A),de!==null&&(h=a(de,h,X),te===null?N=de:te.sibling=de,te=de);return fe&&jl(m,X),N}for(q=i(q);!de.done;X++,de=p.next())de=v(q,m,X,de.value,A),de!==null&&(e&&de.alternate!==null&&q.delete(de.key===null?X:de.key),h=a(de,h,X),te===null?N=de:te.sibling=de,te=de);return e&&q.forEach(function(Hm){return t(m,Hm)}),fe&&jl(m,X),N}function ve(m,h,p,A){if(typeof p=="object"&&p!==null&&p.type===xe&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case F:e:{for(var N=p.key;h!==null;){if(h.key===N){if(N=p.type,N===xe){if(h.tag===7){l(m,h.sibling),A=n(h,p.props.children),A.return=m,m=A;break e}}else if(h.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Ee&&Ys(N)===h.type){l(m,h.sibling),A=n(h,p.props),mn(A,p),A.return=m,m=A;break e}l(m,h);break}else t(m,h);h=h.sibling}p.type===xe?(A=Ll(p.props.children,m.mode,A,p.key),A.return=m,m=A):(A=ra(p.type,p.key,p.props,null,m.mode,A),mn(A,p),A.return=m,m=A)}return u(m);case Se:e:{for(N=p.key;h!==null;){if(h.key===N)if(h.tag===4&&h.stateNode.containerInfo===p.containerInfo&&h.stateNode.implementation===p.implementation){l(m,h.sibling),A=n(h,p.children||[]),A.return=m,m=A;break e}else{l(m,h);break}else t(m,h);h=h.sibling}A=Gu(p,m.mode,A),A.return=m,m=A}return u(m);case Ee:return N=p._init,p=N(p._payload),ve(m,h,p,A)}if(W(p))return K(m,h,p,A);if(He(p)){if(N=He(p),typeof N!="function")throw Error(c(150));return p=N.call(p),Z(m,h,p,A)}if(typeof p.then=="function")return ve(m,h,Aa(p),A);if(p.$$typeof===ue)return ve(m,h,fa(m,p),A);xa(m,p)}return typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint"?(p=""+p,h!==null&&h.tag===6?(l(m,h.sibling),A=n(h,p),A.return=m,m=A):(l(m,h),A=Yu(p,m.mode,A),A.return=m,m=A),u(m)):l(m,h)}return function(m,h,p,A){try{gn=0;var N=ve(m,h,p,A);return wi=null,N}catch(q){if(q===an||q===ga)throw q;var te=mt(29,q,null,m.mode);return te.lanes=A,te.return=m,te}finally{}}}var zi=Gs(!0),Vs=Gs(!1),Mt=E(null),jt=null;function ml(e){var t=e.alternate;R(Ye,Ye.current&1),R(Mt,e),jt===null&&(t===null||yi.current!==null||t.memoizedState!==null)&&(jt=e)}function Zs(e){if(e.tag===22){if(R(Ye,Ye.current),R(Mt,e),jt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(jt=e)}}else pl()}function pl(){R(Ye,Ye.current),R(Mt,Mt.current)}function Pt(e){U(Mt),jt===e&&(jt=null),U(Ye)}var Ye=E(0);function Da(e){for(var t=e;t!==null;){if(t.tag===13){var l=t.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||dr(l)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function wo(e,t,l,i){t=e.memoizedState,l=l(i,t),l=l==null?t:_({},t,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var zo={enqueueSetState:function(e,t,l){e=e._reactInternals;var i=vt(),n=fl(i);n.payload=t,l!=null&&(n.callback=l),t=hl(e,n,i),t!==null&&(St(t,e,i),on(t,e,i))},enqueueReplaceState:function(e,t,l){e=e._reactInternals;var i=vt(),n=fl(i);n.tag=1,n.payload=t,l!=null&&(n.callback=l),t=hl(e,n,i),t!==null&&(St(t,e,i),on(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var l=vt(),i=fl(l);i.tag=2,t!=null&&(i.callback=t),t=hl(e,i,l),t!==null&&(St(t,e,l),on(t,e,l))}};function Xs(e,t,l,i,n,a,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,u):t.prototype&&t.prototype.isPureReactComponent?!Fi(l,i)||!Fi(n,a):!0}function Qs(e,t,l,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(l,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(l,i),t.state!==e&&zo.enqueueReplaceState(t,t.state,null)}function Kl(e,t){var l=t;if("ref"in t){l={};for(var i in t)i!=="ref"&&(l[i]=t[i])}if(e=e.defaultProps){l===t&&(l=_({},l));for(var n in e)l[n]===void 0&&(l[n]=e[n])}return l}var Ma=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Ks(e){Ma(e)}function Ws(e){console.error(e)}function Js(e){Ma(e)}function Oa(e,t){try{var l=e.onUncaughtError;l(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function Fs(e,t,l){try{var i=e.onCaughtError;i(l.value,{componentStack:l.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Eo(e,t,l){return l=fl(l),l.tag=3,l.payload={element:null},l.callback=function(){Oa(e,t)},l}function Is(e){return e=fl(e),e.tag=3,e}function $s(e,t,l,i){var n=l.type.getDerivedStateFromError;if(typeof n=="function"){var a=i.value;e.payload=function(){return n(a)},e.callback=function(){Fs(t,l,i)}}var u=l.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){Fs(t,l,i),typeof n!="function"&&(wl===null?wl=new Set([this]):wl.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function Hg(e,t,l,i,n){if(l.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=l.alternate,t!==null&&tn(t,l,n,!0),l=Mt.current,l!==null){switch(l.tag){case 13:return jt===null?Wo():l.alternate===null&&Be===0&&(Be=3),l.flags&=-257,l.flags|=65536,l.lanes=n,i===$u?l.flags|=16384:(t=l.updateQueue,t===null?l.updateQueue=new Set([i]):t.add(i),Fo(e,i,n)),!1;case 22:return l.flags|=65536,i===$u?l.flags|=16384:(t=l.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},l.updateQueue=t):(l=t.retryQueue,l===null?t.retryQueue=new Set([i]):l.add(i)),Fo(e,i,n)),!1}throw Error(c(435,l.tag))}return Fo(e,i,n),Wo(),!1}if(fe)return t=Mt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,i!==Xu&&(e=Error(c(422),{cause:i}),en(Et(e,l)))):(i!==Xu&&(t=Error(c(423),{cause:i}),en(Et(t,l))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,i=Et(i,l),n=Eo(e.stateNode,i,n),to(e,n),Be!==4&&(Be=2)),!1;var a=Error(c(520),{cause:i});if(a=Et(a,l),wn===null?wn=[a]:wn.push(a),Be!==4&&(Be=2),t===null)return!0;i=Et(i,l),l=t;do{switch(l.tag){case 3:return l.flags|=65536,e=n&-n,l.lanes|=e,e=Eo(l.stateNode,i,e),to(l,e),!1;case 1:if(t=l.type,a=l.stateNode,(l.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(wl===null||!wl.has(a))))return l.flags|=65536,n&=-n,l.lanes|=n,n=Is(n),$s(n,e,l,i),to(l,n),!1}l=l.return}while(l!==null);return!1}var Ps=Error(c(461)),Ze=!1;function Je(e,t,l,i){t.child=e===null?Vs(t,null,l,i):zi(t,e.child,l,i)}function ed(e,t,l,i,n){l=l.render;var a=t.ref;if("ref"in i){var u={};for(var o in i)o!=="ref"&&(u[o]=i[o])}else u=i;return Zl(t),i=uo(e,t,l,u,a,n),o=oo(),e!==null&&!Ze?(ro(e,t,n),el(e,t,n)):(fe&&o&&Vu(t),t.flags|=1,Je(e,t,i,n),t.child)}function td(e,t,l,i,n){if(e===null){var a=l.type;return typeof a=="function"&&!ju(a)&&a.defaultProps===void 0&&l.compare===null?(t.tag=15,t.type=a,ld(e,t,a,i,n)):(e=ra(l.type,null,i,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Ro(e,n)){var u=a.memoizedProps;if(l=l.compare,l=l!==null?l:Fi,l(u,i)&&e.ref===t.ref)return el(e,t,n)}return t.flags|=1,e=Kt(a,i),e.ref=t.ref,e.return=t,t.child=e}function ld(e,t,l,i,n){if(e!==null){var a=e.memoizedProps;if(Fi(a,i)&&e.ref===t.ref)if(Ze=!1,t.pendingProps=i=a,Ro(e,n))(e.flags&131072)!==0&&(Ze=!0);else return t.lanes=e.lanes,el(e,t,n)}return Ao(e,t,l,i,n)}function id(e,t,l){var i=t.pendingProps,n=i.children,a=e!==null?e.memoizedState:null;if(i.mode==="hidden"){if((t.flags&128)!==0){if(i=a!==null?a.baseLanes|l:l,e!==null){for(n=t.child=e.child,a=0;n!==null;)a=a|n.lanes|n.childLanes,n=n.sibling;t.childLanes=a&~i}else t.childLanes=0,t.child=null;return nd(e,t,i,l)}if((l&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ha(t,a!==null?a.cachePool:null),a!==null?ls(t,a):io(),Zs(t);else return t.lanes=t.childLanes=536870912,nd(e,t,a!==null?a.baseLanes|l:l,l)}else a!==null?(ha(t,a.cachePool),ls(t,a),pl(),t.memoizedState=null):(e!==null&&ha(t,null),io(),pl());return Je(e,t,n,l),t.child}function nd(e,t,l,i){var n=Iu();return n=n===null?null:{parent:je._currentValue,pool:n},t.memoizedState={baseLanes:l,cachePool:n},e!==null&&ha(t,null),io(),Zs(t),e!==null&&tn(e,t,i,!0),null}function Ha(e,t){var l=t.ref;if(l===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(c(284));(e===null||e.ref!==l)&&(t.flags|=4194816)}}function Ao(e,t,l,i,n){return Zl(t),l=uo(e,t,l,i,void 0,n),i=oo(),e!==null&&!Ze?(ro(e,t,n),el(e,t,n)):(fe&&i&&Vu(t),t.flags|=1,Je(e,t,l,n),t.child)}function ad(e,t,l,i,n,a){return Zl(t),t.updateQueue=null,l=ns(t,i,l,n),is(e),i=oo(),e!==null&&!Ze?(ro(e,t,a),el(e,t,a)):(fe&&i&&Vu(t),t.flags|=1,Je(e,t,l,a),t.child)}function ud(e,t,l,i,n){if(Zl(t),t.stateNode===null){var a=hi,u=l.contextType;typeof u=="object"&&u!==null&&(a=et(u)),a=new l(i,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=zo,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=i,a.state=t.memoizedState,a.refs={},Pu(t),u=l.contextType,a.context=typeof u=="object"&&u!==null?et(u):hi,a.state=t.memoizedState,u=l.getDerivedStateFromProps,typeof u=="function"&&(wo(t,l,u,i),a.state=t.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(u=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),u!==a.state&&zo.enqueueReplaceState(a,a.state,null),cn(t,i,a,n),rn(),a.state=t.memoizedState),typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){a=t.stateNode;var o=t.memoizedProps,s=Kl(l,o);a.props=s;var b=a.context,z=l.contextType;u=hi,typeof z=="object"&&z!==null&&(u=et(z));var x=l.getDerivedStateFromProps;z=typeof x=="function"||typeof a.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,z||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o||b!==u)&&Qs(t,a,i,u),dl=!1;var y=t.memoizedState;a.state=y,cn(t,i,a,n),rn(),b=t.memoizedState,o||y!==b||dl?(typeof x=="function"&&(wo(t,l,x,i),b=t.memoizedState),(s=dl||Xs(t,l,s,i,y,b,u))?(z||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=b),a.props=i,a.state=b,a.context=u,i=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{a=t.stateNode,eo(e,t),u=t.memoizedProps,z=Kl(l,u),a.props=z,x=t.pendingProps,y=a.context,b=l.contextType,s=hi,typeof b=="object"&&b!==null&&(s=et(b)),o=l.getDerivedStateFromProps,(b=typeof o=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(u!==x||y!==s)&&Qs(t,a,i,s),dl=!1,y=t.memoizedState,a.state=y,cn(t,i,a,n),rn();var v=t.memoizedState;u!==x||y!==v||dl||e!==null&&e.dependencies!==null&&da(e.dependencies)?(typeof o=="function"&&(wo(t,l,o,i),v=t.memoizedState),(z=dl||Xs(t,l,z,i,y,v,s)||e!==null&&e.dependencies!==null&&da(e.dependencies))?(b||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,v,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,v,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||u===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=v),a.props=i,a.state=v,a.context=s,i=z):(typeof a.componentDidUpdate!="function"||u===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),i=!1)}return a=i,Ha(e,t),i=(t.flags&128)!==0,a||i?(a=t.stateNode,l=i&&typeof l.getDerivedStateFromError!="function"?null:a.render(),t.flags|=1,e!==null&&i?(t.child=zi(t,e.child,null,n),t.child=zi(t,null,l,n)):Je(e,t,l,n),t.memoizedState=a.state,e=t.child):e=el(e,t,n),e}function od(e,t,l,i){return Pi(),t.flags|=256,Je(e,t,l,i),t.child}var xo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Do(e){return{baseLanes:e,cachePool:Wc()}}function Mo(e,t,l){return e=e!==null?e.childLanes&~l:0,t&&(e|=Ot),e}function rd(e,t,l){var i=t.pendingProps,n=!1,a=(t.flags&128)!==0,u;if((u=a)||(u=e!==null&&e.memoizedState===null?!1:(Ye.current&2)!==0),u&&(n=!0,t.flags&=-129),u=(t.flags&32)!==0,t.flags&=-33,e===null){if(fe){if(n?ml(t):pl(),fe){var o=Re,s;if(s=o){e:{for(s=o,o=qt;s.nodeType!==8;){if(!o){o=null;break e}if(s=kt(s.nextSibling),s===null){o=null;break e}}o=s}o!==null?(t.memoizedState={dehydrated:o,treeContext:ql!==null?{id:Wt,overflow:Jt}:null,retryLane:536870912,hydrationErrors:null},s=mt(18,null,null,0),s.stateNode=o,s.return=t,t.child=s,ut=t,Re=null,s=!0):s=!1}s||Gl(t)}if(o=t.memoizedState,o!==null&&(o=o.dehydrated,o!==null))return dr(o)?t.lanes=32:t.lanes=536870912,null;Pt(t)}return o=i.children,i=i.fallback,n?(pl(),n=t.mode,o=Ua({mode:"hidden",children:o},n),i=Ll(i,n,l,null),o.return=t,i.return=t,o.sibling=i,t.child=o,n=t.child,n.memoizedState=Do(l),n.childLanes=Mo(e,u,l),t.memoizedState=xo,i):(ml(t),Oo(t,o))}if(s=e.memoizedState,s!==null&&(o=s.dehydrated,o!==null)){if(a)t.flags&256?(ml(t),t.flags&=-257,t=Ho(e,t,l)):t.memoizedState!==null?(pl(),t.child=e.child,t.flags|=128,t=null):(pl(),n=i.fallback,o=t.mode,i=Ua({mode:"visible",children:i.children},o),n=Ll(n,o,l,null),n.flags|=2,i.return=t,n.return=t,i.sibling=n,t.child=i,zi(t,e.child,null,l),i=t.child,i.memoizedState=Do(l),i.childLanes=Mo(e,u,l),t.memoizedState=xo,t=n);else if(ml(t),dr(o)){if(u=o.nextSibling&&o.nextSibling.dataset,u)var b=u.dgst;u=b,i=Error(c(419)),i.stack="",i.digest=u,en({value:i,source:null,stack:null}),t=Ho(e,t,l)}else if(Ze||tn(e,t,l,!1),u=(l&e.childLanes)!==0,Ze||u){if(u=Ae,u!==null&&(i=l&-l,i=(i&42)!==0?1:du(i),i=(i&(u.suspendedLanes|l))!==0?0:i,i!==0&&i!==s.retryLane))throw s.retryLane=i,fi(e,i),St(u,e,i),Ps;o.data==="$?"||Wo(),t=Ho(e,t,l)}else o.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=s.treeContext,Re=kt(o.nextSibling),ut=t,fe=!0,Yl=null,qt=!1,e!==null&&(xt[Dt++]=Wt,xt[Dt++]=Jt,xt[Dt++]=ql,Wt=e.id,Jt=e.overflow,ql=t),t=Oo(t,i.children),t.flags|=4096);return t}return n?(pl(),n=i.fallback,o=t.mode,s=e.child,b=s.sibling,i=Kt(s,{mode:"hidden",children:i.children}),i.subtreeFlags=s.subtreeFlags&65011712,b!==null?n=Kt(b,n):(n=Ll(n,o,l,null),n.flags|=2),n.return=t,i.return=t,i.sibling=n,t.child=i,i=n,n=t.child,o=e.child.memoizedState,o===null?o=Do(l):(s=o.cachePool,s!==null?(b=je._currentValue,s=s.parent!==b?{parent:b,pool:b}:s):s=Wc(),o={baseLanes:o.baseLanes|l,cachePool:s}),n.memoizedState=o,n.childLanes=Mo(e,u,l),t.memoizedState=xo,i):(ml(t),l=e.child,e=l.sibling,l=Kt(l,{mode:"visible",children:i.children}),l.return=t,l.sibling=null,e!==null&&(u=t.deletions,u===null?(t.deletions=[e],t.flags|=16):u.push(e)),t.child=l,t.memoizedState=null,l)}function Oo(e,t){return t=Ua({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ua(e,t){return e=mt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Ho(e,t,l){return zi(t,e.child,null,l),e=Oo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function cd(e,t,l){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Ku(e.return,t,l)}function Uo(e,t,l,i,n){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:l,tailMode:n}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=l,a.tailMode=n)}function sd(e,t,l){var i=t.pendingProps,n=i.revealOrder,a=i.tail;if(Je(e,t,i.children,l),i=Ye.current,(i&2)!==0)i=i&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&cd(e,l,t);else if(e.tag===19)cd(e,l,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}switch(R(Ye,i),n){case"forwards":for(l=t.child,n=null;l!==null;)e=l.alternate,e!==null&&Da(e)===null&&(n=l),l=l.sibling;l=n,l===null?(n=t.child,t.child=null):(n=l.sibling,l.sibling=null),Uo(t,!1,n,l,a);break;case"backwards":for(l=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&Da(e)===null){t.child=n;break}e=n.sibling,n.sibling=l,l=n,n=e}Uo(t,!0,l,null,a);break;case"together":Uo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function el(e,t,l){if(e!==null&&(t.dependencies=e.dependencies),Tl|=t.lanes,(l&t.childLanes)===0)if(e!==null){if(tn(e,t,l,!1),(l&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,l=Kt(e,e.pendingProps),t.child=l,l.return=t;e.sibling!==null;)e=e.sibling,l=l.sibling=Kt(e,e.pendingProps),l.return=t;l.sibling=null}return t.child}function Ro(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&da(e)))}function Ug(e,t,l){switch(t.tag){case 3:H(t,t.stateNode.containerInfo),sl(t,je,e.memoizedState.cache),Pi();break;case 27:case 5:k(t);break;case 4:H(t,t.stateNode.containerInfo);break;case 10:sl(t,t.type,t.memoizedProps.value);break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(ml(t),t.flags|=128,null):(l&t.child.childLanes)!==0?rd(e,t,l):(ml(t),e=el(e,t,l),e!==null?e.sibling:null);ml(t);break;case 19:var n=(e.flags&128)!==0;if(i=(l&t.childLanes)!==0,i||(tn(e,t,l,!1),i=(l&t.childLanes)!==0),n){if(i)return sd(e,t,l);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),R(Ye,Ye.current),i)break;return null;case 22:case 23:return t.lanes=0,id(e,t,l);case 24:sl(t,je,e.memoizedState.cache)}return el(e,t,l)}function dd(e,t,l){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ze=!0;else{if(!Ro(e,l)&&(t.flags&128)===0)return Ze=!1,Ug(e,t,l);Ze=(e.flags&131072)!==0}else Ze=!1,fe&&(t.flags&1048576)!==0&&Yc(t,sa,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var i=t.elementType,n=i._init;if(i=n(i._payload),t.type=i,typeof i=="function")ju(i)?(e=Kl(i,e),t.tag=1,t=ud(null,t,i,e,l)):(t.tag=0,t=Ao(null,t,i,e,l));else{if(i!=null){if(n=i.$$typeof,n===De){t.tag=11,t=ed(null,t,i,e,l);break e}else if(n===le){t.tag=14,t=td(null,t,i,e,l);break e}}throw t=it(i)||i,Error(c(306,t,""))}}return t;case 0:return Ao(e,t,t.type,t.pendingProps,l);case 1:return i=t.type,n=Kl(i,t.pendingProps),ud(e,t,i,n,l);case 3:e:{if(H(t,t.stateNode.containerInfo),e===null)throw Error(c(387));i=t.pendingProps;var a=t.memoizedState;n=a.element,eo(e,t),cn(t,i,null,l);var u=t.memoizedState;if(i=u.cache,sl(t,je,i),i!==a.cache&&Wu(t,[je],l,!0),rn(),i=u.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:u.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=od(e,t,i,l);break e}else if(i!==n){n=Et(Error(c(424)),t),en(n),t=od(e,t,i,l);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Re=kt(e.firstChild),ut=t,fe=!0,Yl=null,qt=!0,l=Vs(t,null,i,l),t.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(Pi(),i===n){t=el(e,t,l);break e}Je(e,t,i,l)}t=t.child}return t;case 26:return Ha(e,t),e===null?(l=pf(t.type,null,t.pendingProps,null))?t.memoizedState=l:fe||(l=t.type,e=t.pendingProps,i=Xa(J.current).createElement(l),i[Pe]=t,i[ot]=e,Ie(i,l,e),Ve(i),t.stateNode=i):t.memoizedState=pf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return k(t),e===null&&fe&&(i=t.stateNode=hf(t.type,t.pendingProps,J.current),ut=t,qt=!0,n=Re,Al(t.type)?(fr=n,Re=kt(i.firstChild)):Re=n),Je(e,t,t.pendingProps.children,l),Ha(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&fe&&((n=i=Re)&&(i=am(i,t.type,t.pendingProps,qt),i!==null?(t.stateNode=i,ut=t,Re=kt(i.firstChild),qt=!1,n=!0):n=!1),n||Gl(t)),k(t),n=t.type,a=t.pendingProps,u=e!==null?e.memoizedProps:null,i=a.children,rr(n,a)?i=null:u!==null&&rr(n,u)&&(t.flags|=32),t.memoizedState!==null&&(n=uo(e,t,zg,null,null,l),Un._currentValue=n),Ha(e,t),Je(e,t,i,l),t.child;case 6:return e===null&&fe&&((e=l=Re)&&(l=um(l,t.pendingProps,qt),l!==null?(t.stateNode=l,ut=t,Re=null,e=!0):e=!1),e||Gl(t)),null;case 13:return rd(e,t,l);case 4:return H(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=zi(t,null,i,l):Je(e,t,i,l),t.child;case 11:return ed(e,t,t.type,t.pendingProps,l);case 7:return Je(e,t,t.pendingProps,l),t.child;case 8:return Je(e,t,t.pendingProps.children,l),t.child;case 12:return Je(e,t,t.pendingProps.children,l),t.child;case 10:return i=t.pendingProps,sl(t,t.type,i.value),Je(e,t,i.children,l),t.child;case 9:return n=t.type._context,i=t.pendingProps.children,Zl(t),n=et(n),i=i(n),t.flags|=1,Je(e,t,i,l),t.child;case 14:return td(e,t,t.type,t.pendingProps,l);case 15:return ld(e,t,t.type,t.pendingProps,l);case 19:return sd(e,t,l);case 31:return i=t.pendingProps,l=t.mode,i={mode:i.mode,children:i.children},e===null?(l=Ua(i,l),l.ref=t.ref,t.child=l,l.return=t,t=l):(l=Kt(e.child,i),l.ref=t.ref,t.child=l,l.return=t,t=l),t;case 22:return id(e,t,l);case 24:return Zl(t),i=et(je),e===null?(n=Iu(),n===null&&(n=Ae,a=Ju(),n.pooledCache=a,a.refCount++,a!==null&&(n.pooledCacheLanes|=l),n=a),t.memoizedState={parent:i,cache:n},Pu(t),sl(t,je,n)):((e.lanes&l)!==0&&(eo(e,t),cn(t,null,null,l),rn()),n=e.memoizedState,a=t.memoizedState,n.parent!==i?(n={parent:i,cache:i},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),sl(t,je,i)):(i=a.cache,sl(t,je,i),i!==n.cache&&Wu(t,[je],l,!0))),Je(e,t,t.pendingProps.children,l),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function tl(e){e.flags|=4}function fd(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Tf(t)){if(t=Mt.current,t!==null&&((re&4194048)===re?jt!==null:(re&62914560)!==re&&(re&536870912)===0||t!==jt))throw un=$u,Jc;e.flags|=8192}}function Ra(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Zr():536870912,e.lanes|=t,Di|=t)}function pn(e,t){if(!fe)switch(e.tailMode){case"hidden":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?e.tail=null:l.sibling=null;break;case"collapsed":l=e.tail;for(var i=null;l!==null;)l.alternate!==null&&(i=l),l=l.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Ue(e){var t=e.alternate!==null&&e.alternate.child===e.child,l=0,i=0;if(t)for(var n=e.child;n!==null;)l|=n.lanes|n.childLanes,i|=n.subtreeFlags&65011712,i|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)l|=n.lanes|n.childLanes,i|=n.subtreeFlags,i|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=i,e.childLanes=l,t}function Rg(e,t,l){var i=t.pendingProps;switch(Zu(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ue(t),null;case 1:return Ue(t),null;case 3:return l=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),It(je),M(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&($i(t)?tl(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Zc())),Ue(t),null;case 26:return l=t.memoizedState,e===null?(tl(t),l!==null?(Ue(t),fd(t,l)):(Ue(t),t.flags&=-16777217)):l?l!==e.memoizedState?(tl(t),Ue(t),fd(t,l)):(Ue(t),t.flags&=-16777217):(e.memoizedProps!==i&&tl(t),Ue(t),t.flags&=-16777217),null;case 27:j(t),l=J.current;var n=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==i&&tl(t);else{if(!i){if(t.stateNode===null)throw Error(c(166));return Ue(t),null}e=L.current,$i(t)?Gc(t):(e=hf(n,i,l),t.stateNode=e,tl(t))}return Ue(t),null;case 5:if(j(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&tl(t);else{if(!i){if(t.stateNode===null)throw Error(c(166));return Ue(t),null}if(e=L.current,$i(t))Gc(t);else{switch(n=Xa(J.current),e){case 1:e=n.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:e=n.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":e=n.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":e=n.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":e=n.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof i.is=="string"?n.createElement("select",{is:i.is}):n.createElement("select"),i.multiple?e.multiple=!0:i.size&&(e.size=i.size);break;default:e=typeof i.is=="string"?n.createElement(l,{is:i.is}):n.createElement(l)}}e[Pe]=t,e[ot]=i;e:for(n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.tag!==27&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}t.stateNode=e;e:switch(Ie(e,l,i),l){case"button":case"input":case"select":case"textarea":e=!!i.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&tl(t)}}return Ue(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&tl(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(c(166));if(e=J.current,$i(t)){if(e=t.stateNode,l=t.memoizedProps,i=null,n=ut,n!==null)switch(n.tag){case 27:case 5:i=n.memoizedProps}e[Pe]=t,e=!!(e.nodeValue===l||i!==null&&i.suppressHydrationWarning===!0||uf(e.nodeValue,l)),e||Gl(t)}else e=Xa(e).createTextNode(i),e[Pe]=t,t.stateNode=e}return Ue(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=$i(t),i!==null&&i.dehydrated!==null){if(e===null){if(!n)throw Error(c(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(c(317));n[Pe]=t}else Pi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ue(t),n=!1}else n=Zc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(Pt(t),t):(Pt(t),null)}if(Pt(t),(t.flags&128)!==0)return t.lanes=l,t;if(l=i!==null,e=e!==null&&e.memoizedState!==null,l){i=t.child,n=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(n=i.alternate.memoizedState.cachePool.pool);var a=null;i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(a=i.memoizedState.cachePool.pool),a!==n&&(i.flags|=2048)}return l!==e&&l&&(t.child.flags|=8192),Ra(t,t.updateQueue),Ue(t),null;case 4:return M(),e===null&&ir(t.stateNode.containerInfo),Ue(t),null;case 10:return It(t.type),Ue(t),null;case 19:if(U(Ye),n=t.memoizedState,n===null)return Ue(t),null;if(i=(t.flags&128)!==0,a=n.rendering,a===null)if(i)pn(n,!1);else{if(Be!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=Da(e),a!==null){for(t.flags|=128,pn(n,!1),e=a.updateQueue,t.updateQueue=e,Ra(t,e),t.subtreeFlags=0,e=l,l=t.child;l!==null;)jc(l,e),l=l.sibling;return R(Ye,Ye.current&1|2),t.child}e=e.sibling}n.tail!==null&&at()>_a&&(t.flags|=128,i=!0,pn(n,!1),t.lanes=4194304)}else{if(!i)if(e=Da(a),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,Ra(t,e),pn(n,!0),n.tail===null&&n.tailMode==="hidden"&&!a.alternate&&!fe)return Ue(t),null}else 2*at()-n.renderingStartTime>_a&&l!==536870912&&(t.flags|=128,i=!0,pn(n,!1),t.lanes=4194304);n.isBackwards?(a.sibling=t.child,t.child=a):(e=n.last,e!==null?e.sibling=a:t.child=a,n.last=a)}return n.tail!==null?(t=n.tail,n.rendering=t,n.tail=t.sibling,n.renderingStartTime=at(),t.sibling=null,e=Ye.current,R(Ye,i?e&1|2:e&1),t):(Ue(t),null);case 22:case 23:return Pt(t),no(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(l&536870912)!==0&&(t.flags&128)===0&&(Ue(t),t.subtreeFlags&6&&(t.flags|=8192)):Ue(t),l=t.updateQueue,l!==null&&Ra(t,l.retryQueue),l=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==l&&(t.flags|=2048),e!==null&&U(Xl),null;case 24:return l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),It(je),Ue(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function Bg(e,t){switch(Zu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return It(je),M(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return j(t),null;case 13:if(Pt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));Pi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return U(Ye),null;case 4:return M(),null;case 10:return It(t.type),null;case 22:case 23:return Pt(t),no(),e!==null&&U(Xl),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return It(je),null;case 25:return null;default:return null}}function hd(e,t){switch(Zu(t),t.tag){case 3:It(je),M();break;case 26:case 27:case 5:j(t);break;case 4:M();break;case 13:Pt(t);break;case 19:U(Ye);break;case 10:It(t.type);break;case 22:case 23:Pt(t),no(),e!==null&&U(Xl);break;case 24:It(je)}}function bn(e,t){try{var l=t.updateQueue,i=l!==null?l.lastEffect:null;if(i!==null){var n=i.next;l=n;do{if((l.tag&e)===e){i=void 0;var a=l.create,u=l.inst;i=a(),u.destroy=i}l=l.next}while(l!==n)}}catch(o){we(t,t.return,o)}}function bl(e,t,l){try{var i=t.updateQueue,n=i!==null?i.lastEffect:null;if(n!==null){var a=n.next;i=a;do{if((i.tag&e)===e){var u=i.inst,o=u.destroy;if(o!==void 0){u.destroy=void 0,n=t;var s=l,b=o;try{b()}catch(z){we(n,s,z)}}}i=i.next}while(i!==a)}}catch(z){we(t,t.return,z)}}function gd(e){var t=e.updateQueue;if(t!==null){var l=e.stateNode;try{ts(t,l)}catch(i){we(e,e.return,i)}}}function md(e,t,l){l.props=Kl(e.type,e.memoizedProps),l.state=e.memoizedState;try{l.componentWillUnmount()}catch(i){we(e,t,i)}}function yn(e,t){try{var l=e.ref;if(l!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof l=="function"?e.refCleanup=l(i):l.current=i}}catch(n){we(e,t,n)}}function Yt(e,t){var l=e.ref,i=e.refCleanup;if(l!==null)if(typeof i=="function")try{i()}catch(n){we(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(n){we(e,t,n)}else l.current=null}function pd(e){var t=e.type,l=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":l.autoFocus&&i.focus();break e;case"img":l.src?i.src=l.src:l.srcSet&&(i.srcset=l.srcSet)}}catch(n){we(e,e.return,n)}}function Bo(e,t,l){try{var i=e.stateNode;em(i,e.type,l,t),i[ot]=t}catch(n){we(e,e.return,n)}}function bd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Al(e.type)||e.tag===4}function ko(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||bd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Al(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function _o(e,t,l){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(e,t):(t=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,t.appendChild(e),l=l._reactRootContainer,l!=null||t.onclick!==null||(t.onclick=Za));else if(i!==4&&(i===27&&Al(e.type)&&(l=e.stateNode,t=null),e=e.child,e!==null))for(_o(e,t,l),e=e.sibling;e!==null;)_o(e,t,l),e=e.sibling}function Ba(e,t,l){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?l.insertBefore(e,t):l.appendChild(e);else if(i!==4&&(i===27&&Al(e.type)&&(l=e.stateNode),e=e.child,e!==null))for(Ba(e,t,l),e=e.sibling;e!==null;)Ba(e,t,l),e=e.sibling}function yd(e){var t=e.stateNode,l=e.memoizedProps;try{for(var i=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ie(t,i,l),t[Pe]=e,t[ot]=l}catch(a){we(e,e.return,a)}}var ll=!1,Ce=!1,Co=!1,vd=typeof WeakSet=="function"?WeakSet:Set,Xe=null;function kg(e,t){if(e=e.containerInfo,ur=Ia,e=Hc(e),Bu(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var i=l.getSelection&&l.getSelection();if(i&&i.rangeCount!==0){l=i.anchorNode;var n=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{l.nodeType,a.nodeType}catch{l=null;break e}var u=0,o=-1,s=-1,b=0,z=0,x=e,y=null;t:for(;;){for(var v;x!==l||n!==0&&x.nodeType!==3||(o=u+n),x!==a||i!==0&&x.nodeType!==3||(s=u+i),x.nodeType===3&&(u+=x.nodeValue.length),(v=x.firstChild)!==null;)y=x,x=v;for(;;){if(x===e)break t;if(y===l&&++b===n&&(o=u),y===a&&++z===i&&(s=u),(v=x.nextSibling)!==null)break;x=y,y=x.parentNode}x=v}l=o===-1||s===-1?null:{start:o,end:s}}else l=null}l=l||{start:0,end:0}}else l=null;for(or={focusedElem:e,selectionRange:l},Ia=!1,Xe=t;Xe!==null;)if(t=Xe,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Xe=e;else for(;Xe!==null;){switch(t=Xe,a=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&a!==null){e=void 0,l=t,n=a.memoizedProps,a=a.memoizedState,i=l.stateNode;try{var K=Kl(l.type,n,l.elementType===l.type);e=i.getSnapshotBeforeUpdate(K,a),i.__reactInternalSnapshotBeforeUpdate=e}catch(Z){we(l,l.return,Z)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,l=e.nodeType,l===9)sr(e);else if(l===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":sr(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,Xe=e;break}Xe=t.return}}function Sd(e,t,l){var i=l.flags;switch(l.tag){case 0:case 11:case 15:yl(e,l),i&4&&bn(5,l);break;case 1:if(yl(e,l),i&4)if(e=l.stateNode,t===null)try{e.componentDidMount()}catch(u){we(l,l.return,u)}else{var n=Kl(l.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(u){we(l,l.return,u)}}i&64&&gd(l),i&512&&yn(l,l.return);break;case 3:if(yl(e,l),i&64&&(e=l.updateQueue,e!==null)){if(t=null,l.child!==null)switch(l.child.tag){case 27:case 5:t=l.child.stateNode;break;case 1:t=l.child.stateNode}try{ts(e,t)}catch(u){we(l,l.return,u)}}break;case 27:t===null&&i&4&&yd(l);case 26:case 5:yl(e,l),t===null&&i&4&&pd(l),i&512&&yn(l,l.return);break;case 12:yl(e,l);break;case 13:yl(e,l),i&4&&zd(e,l),i&64&&(e=l.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(l=Vg.bind(null,l),om(e,l))));break;case 22:if(i=l.memoizedState!==null||ll,!i){t=t!==null&&t.memoizedState!==null||Ce,n=ll;var a=Ce;ll=i,(Ce=t)&&!a?vl(e,l,(l.subtreeFlags&8772)!==0):yl(e,l),ll=n,Ce=a}break;case 30:break;default:yl(e,l)}}function Td(e){var t=e.alternate;t!==null&&(e.alternate=null,Td(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&gu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Oe=null,st=!1;function il(e,t,l){for(l=l.child;l!==null;)wd(e,t,l),l=l.sibling}function wd(e,t,l){if(ft&&typeof ft.onCommitFiberUnmount=="function")try{ft.onCommitFiberUnmount(Li,l)}catch{}switch(l.tag){case 26:Ce||Yt(l,t),il(e,t,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Ce||Yt(l,t);var i=Oe,n=st;Al(l.type)&&(Oe=l.stateNode,st=!1),il(e,t,l),Dn(l.stateNode),Oe=i,st=n;break;case 5:Ce||Yt(l,t);case 6:if(i=Oe,n=st,Oe=null,il(e,t,l),Oe=i,st=n,Oe!==null)if(st)try{(Oe.nodeType===9?Oe.body:Oe.nodeName==="HTML"?Oe.ownerDocument.body:Oe).removeChild(l.stateNode)}catch(a){we(l,t,a)}else try{Oe.removeChild(l.stateNode)}catch(a){we(l,t,a)}break;case 18:Oe!==null&&(st?(e=Oe,df(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.stateNode),_n(e)):df(Oe,l.stateNode));break;case 4:i=Oe,n=st,Oe=l.stateNode.containerInfo,st=!0,il(e,t,l),Oe=i,st=n;break;case 0:case 11:case 14:case 15:Ce||bl(2,l,t),Ce||bl(4,l,t),il(e,t,l);break;case 1:Ce||(Yt(l,t),i=l.stateNode,typeof i.componentWillUnmount=="function"&&md(l,t,i)),il(e,t,l);break;case 21:il(e,t,l);break;case 22:Ce=(i=Ce)||l.memoizedState!==null,il(e,t,l),Ce=i;break;default:il(e,t,l)}}function zd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{_n(e)}catch(l){we(t,t.return,l)}}function _g(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new vd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new vd),t;default:throw Error(c(435,e.tag))}}function No(e,t){var l=_g(e);t.forEach(function(i){var n=Zg.bind(null,e,i);l.has(i)||(l.add(i),i.then(n,n))})}function pt(e,t){var l=t.deletions;if(l!==null)for(var i=0;i<l.length;i++){var n=l[i],a=e,u=t,o=u;e:for(;o!==null;){switch(o.tag){case 27:if(Al(o.type)){Oe=o.stateNode,st=!1;break e}break;case 5:Oe=o.stateNode,st=!1;break e;case 3:case 4:Oe=o.stateNode.containerInfo,st=!0;break e}o=o.return}if(Oe===null)throw Error(c(160));wd(a,u,n),Oe=null,st=!1,a=n.alternate,a!==null&&(a.return=null),n.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)Ed(t,e),t=t.sibling}var Bt=null;function Ed(e,t){var l=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:pt(t,e),bt(e),i&4&&(bl(3,e,e.return),bn(3,e),bl(5,e,e.return));break;case 1:pt(t,e),bt(e),i&512&&(Ce||l===null||Yt(l,l.return)),i&64&&ll&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(l=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=l===null?i:l.concat(i))));break;case 26:var n=Bt;if(pt(t,e),bt(e),i&512&&(Ce||l===null||Yt(l,l.return)),i&4){var a=l!==null?l.memoizedState:null;if(i=e.memoizedState,l===null)if(i===null)if(e.stateNode===null){e:{i=e.type,l=e.memoizedProps,n=n.ownerDocument||n;t:switch(i){case"title":a=n.getElementsByTagName("title")[0],(!a||a[Yi]||a[Pe]||a.namespaceURI==="http://www.w3.org/2000/svg"||a.hasAttribute("itemprop"))&&(a=n.createElement(i),n.head.insertBefore(a,n.querySelector("head > title"))),Ie(a,i,l),a[Pe]=e,Ve(a),i=a;break e;case"link":var u=vf("link","href",n).get(i+(l.href||""));if(u){for(var o=0;o<u.length;o++)if(a=u[o],a.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&a.getAttribute("rel")===(l.rel==null?null:l.rel)&&a.getAttribute("title")===(l.title==null?null:l.title)&&a.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){u.splice(o,1);break t}}a=n.createElement(i),Ie(a,i,l),n.head.appendChild(a);break;case"meta":if(u=vf("meta","content",n).get(i+(l.content||""))){for(o=0;o<u.length;o++)if(a=u[o],a.getAttribute("content")===(l.content==null?null:""+l.content)&&a.getAttribute("name")===(l.name==null?null:l.name)&&a.getAttribute("property")===(l.property==null?null:l.property)&&a.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&a.getAttribute("charset")===(l.charSet==null?null:l.charSet)){u.splice(o,1);break t}}a=n.createElement(i),Ie(a,i,l),n.head.appendChild(a);break;default:throw Error(c(468,i))}a[Pe]=e,Ve(a),i=a}e.stateNode=i}else Sf(n,e.type,e.stateNode);else e.stateNode=yf(n,i,e.memoizedProps);else a!==i?(a===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):a.count--,i===null?Sf(n,e.type,e.stateNode):yf(n,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Bo(e,e.memoizedProps,l.memoizedProps)}break;case 27:pt(t,e),bt(e),i&512&&(Ce||l===null||Yt(l,l.return)),l!==null&&i&4&&Bo(e,e.memoizedProps,l.memoizedProps);break;case 5:if(pt(t,e),bt(e),i&512&&(Ce||l===null||Yt(l,l.return)),e.flags&32){n=e.stateNode;try{ai(n,"")}catch(v){we(e,e.return,v)}}i&4&&e.stateNode!=null&&(n=e.memoizedProps,Bo(e,n,l!==null?l.memoizedProps:n)),i&1024&&(Co=!0);break;case 6:if(pt(t,e),bt(e),i&4){if(e.stateNode===null)throw Error(c(162));i=e.memoizedProps,l=e.stateNode;try{l.nodeValue=i}catch(v){we(e,e.return,v)}}break;case 3:if(Wa=null,n=Bt,Bt=Qa(t.containerInfo),pt(t,e),Bt=n,bt(e),i&4&&l!==null&&l.memoizedState.isDehydrated)try{_n(t.containerInfo)}catch(v){we(e,e.return,v)}Co&&(Co=!1,Ad(e));break;case 4:i=Bt,Bt=Qa(e.stateNode.containerInfo),pt(t,e),bt(e),Bt=i;break;case 12:pt(t,e),bt(e);break;case 13:pt(t,e),bt(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Vo=at()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,No(e,i)));break;case 22:n=e.memoizedState!==null;var s=l!==null&&l.memoizedState!==null,b=ll,z=Ce;if(ll=b||n,Ce=z||s,pt(t,e),Ce=z,ll=b,bt(e),i&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(l===null||s||ll||Ce||Wl(e)),l=null,t=e;;){if(t.tag===5||t.tag===26){if(l===null){s=l=t;try{if(a=s.stateNode,n)u=a.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{o=s.stateNode;var x=s.memoizedProps.style,y=x!=null&&x.hasOwnProperty("display")?x.display:null;o.style.display=y==null||typeof y=="boolean"?"":(""+y).trim()}}catch(v){we(s,s.return,v)}}}else if(t.tag===6){if(l===null){s=t;try{s.stateNode.nodeValue=n?"":s.memoizedProps}catch(v){we(s,s.return,v)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;l===t&&(l=null),t=t.return}l===t&&(l=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(l=i.retryQueue,l!==null&&(i.retryQueue=null,No(e,l))));break;case 19:pt(t,e),bt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,No(e,i)));break;case 30:break;case 21:break;default:pt(t,e),bt(e)}}function bt(e){var t=e.flags;if(t&2){try{for(var l,i=e.return;i!==null;){if(bd(i)){l=i;break}i=i.return}if(l==null)throw Error(c(160));switch(l.tag){case 27:var n=l.stateNode,a=ko(e);Ba(e,a,n);break;case 5:var u=l.stateNode;l.flags&32&&(ai(u,""),l.flags&=-33);var o=ko(e);Ba(e,o,u);break;case 3:case 4:var s=l.stateNode.containerInfo,b=ko(e);_o(e,b,s);break;default:throw Error(c(161))}}catch(z){we(e,e.return,z)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ad(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Ad(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function yl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Sd(e,t.alternate,t),t=t.sibling}function Wl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:bl(4,t,t.return),Wl(t);break;case 1:Yt(t,t.return);var l=t.stateNode;typeof l.componentWillUnmount=="function"&&md(t,t.return,l),Wl(t);break;case 27:Dn(t.stateNode);case 26:case 5:Yt(t,t.return),Wl(t);break;case 22:t.memoizedState===null&&Wl(t);break;case 30:Wl(t);break;default:Wl(t)}e=e.sibling}}function vl(e,t,l){for(l=l&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,n=e,a=t,u=a.flags;switch(a.tag){case 0:case 11:case 15:vl(n,a,l),bn(4,a);break;case 1:if(vl(n,a,l),i=a,n=i.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(b){we(i,i.return,b)}if(i=a,n=i.updateQueue,n!==null){var o=i.stateNode;try{var s=n.shared.hiddenCallbacks;if(s!==null)for(n.shared.hiddenCallbacks=null,n=0;n<s.length;n++)es(s[n],o)}catch(b){we(i,i.return,b)}}l&&u&64&&gd(a),yn(a,a.return);break;case 27:yd(a);case 26:case 5:vl(n,a,l),l&&i===null&&u&4&&pd(a),yn(a,a.return);break;case 12:vl(n,a,l);break;case 13:vl(n,a,l),l&&u&4&&zd(n,a);break;case 22:a.memoizedState===null&&vl(n,a,l),yn(a,a.return);break;case 30:break;default:vl(n,a,l)}t=t.sibling}}function Lo(e,t){var l=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==l&&(e!=null&&e.refCount++,l!=null&&ln(l))}function qo(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ln(e))}function Gt(e,t,l,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)xd(e,t,l,i),t=t.sibling}function xd(e,t,l,i){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Gt(e,t,l,i),n&2048&&bn(9,t);break;case 1:Gt(e,t,l,i);break;case 3:Gt(e,t,l,i),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ln(e)));break;case 12:if(n&2048){Gt(e,t,l,i),e=t.stateNode;try{var a=t.memoizedProps,u=a.id,o=a.onPostCommit;typeof o=="function"&&o(u,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(s){we(t,t.return,s)}}else Gt(e,t,l,i);break;case 13:Gt(e,t,l,i);break;case 23:break;case 22:a=t.stateNode,u=t.alternate,t.memoizedState!==null?a._visibility&2?Gt(e,t,l,i):vn(e,t):a._visibility&2?Gt(e,t,l,i):(a._visibility|=2,Ei(e,t,l,i,(t.subtreeFlags&10256)!==0)),n&2048&&Lo(u,t);break;case 24:Gt(e,t,l,i),n&2048&&qo(t.alternate,t);break;default:Gt(e,t,l,i)}}function Ei(e,t,l,i,n){for(n=n&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var a=e,u=t,o=l,s=i,b=u.flags;switch(u.tag){case 0:case 11:case 15:Ei(a,u,o,s,n),bn(8,u);break;case 23:break;case 22:var z=u.stateNode;u.memoizedState!==null?z._visibility&2?Ei(a,u,o,s,n):vn(a,u):(z._visibility|=2,Ei(a,u,o,s,n)),n&&b&2048&&Lo(u.alternate,u);break;case 24:Ei(a,u,o,s,n),n&&b&2048&&qo(u.alternate,u);break;default:Ei(a,u,o,s,n)}t=t.sibling}}function vn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var l=e,i=t,n=i.flags;switch(i.tag){case 22:vn(l,i),n&2048&&Lo(i.alternate,i);break;case 24:vn(l,i),n&2048&&qo(i.alternate,i);break;default:vn(l,i)}t=t.sibling}}var Sn=8192;function Ai(e){if(e.subtreeFlags&Sn)for(e=e.child;e!==null;)Dd(e),e=e.sibling}function Dd(e){switch(e.tag){case 26:Ai(e),e.flags&Sn&&e.memoizedState!==null&&Sm(Bt,e.memoizedState,e.memoizedProps);break;case 5:Ai(e);break;case 3:case 4:var t=Bt;Bt=Qa(e.stateNode.containerInfo),Ai(e),Bt=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Sn,Sn=16777216,Ai(e),Sn=t):Ai(e));break;default:Ai(e)}}function Md(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Tn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var i=t[l];Xe=i,Hd(i,e)}Md(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Od(e),e=e.sibling}function Od(e){switch(e.tag){case 0:case 11:case 15:Tn(e),e.flags&2048&&bl(9,e,e.return);break;case 3:Tn(e);break;case 12:Tn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,ka(e)):Tn(e);break;default:Tn(e)}}function ka(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var i=t[l];Xe=i,Hd(i,e)}Md(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:bl(8,t,t.return),ka(t);break;case 22:l=t.stateNode,l._visibility&2&&(l._visibility&=-3,ka(t));break;default:ka(t)}e=e.sibling}}function Hd(e,t){for(;Xe!==null;){var l=Xe;switch(l.tag){case 0:case 11:case 15:bl(8,l,t);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var i=l.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:ln(l.memoizedState.cache)}if(i=l.child,i!==null)i.return=l,Xe=i;else e:for(l=e;Xe!==null;){i=Xe;var n=i.sibling,a=i.return;if(Td(i),i===l){Xe=null;break e}if(n!==null){n.return=a,Xe=n;break e}Xe=a}}}var Cg={getCacheForType:function(e){var t=et(je),l=t.data.get(e);return l===void 0&&(l=e(),t.data.set(e,l)),l}},Ng=typeof WeakMap=="function"?WeakMap:Map,ge=0,Ae=null,ie=null,re=0,me=0,yt=null,Sl=!1,xi=!1,jo=!1,nl=0,Be=0,Tl=0,Jl=0,Yo=0,Ot=0,Di=0,wn=null,dt=null,Go=!1,Vo=0,_a=1/0,Ca=null,wl=null,Fe=0,zl=null,Mi=null,Oi=0,Zo=0,Xo=null,Ud=null,zn=0,Qo=null;function vt(){if((ge&2)!==0&&re!==0)return re&-re;if(T.T!==null){var e=pi;return e!==0?e:Po()}return Kr()}function Rd(){Ot===0&&(Ot=(re&536870912)===0||fe?Vr():536870912);var e=Mt.current;return e!==null&&(e.flags|=32),Ot}function St(e,t,l){(e===Ae&&(me===2||me===9)||e.cancelPendingCommit!==null)&&(Hi(e,0),El(e,re,Ot,!1)),ji(e,l),((ge&2)===0||e!==Ae)&&(e===Ae&&((ge&2)===0&&(Jl|=l),Be===4&&El(e,re,Ot,!1)),Vt(e))}function Bd(e,t,l){if((ge&6)!==0)throw Error(c(327));var i=!l&&(t&124)===0&&(t&e.expiredLanes)===0||qi(e,t),n=i?jg(e,t):Jo(e,t,!0),a=i;do{if(n===0){xi&&!i&&El(e,t,0,!1);break}else{if(l=e.current.alternate,a&&!Lg(l)){n=Jo(e,t,!1),a=!1;continue}if(n===2){if(a=t,e.errorRecoveryDisabledLanes&a)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){t=u;e:{var o=e;n=wn;var s=o.current.memoizedState.isDehydrated;if(s&&(Hi(o,u).flags|=256),u=Jo(o,u,!1),u!==2){if(jo&&!s){o.errorRecoveryDisabledLanes|=a,Jl|=a,n=4;break e}a=dt,dt=n,a!==null&&(dt===null?dt=a:dt.push.apply(dt,a))}n=u}if(a=!1,n!==2)continue}}if(n===1){Hi(e,0),El(e,t,0,!0);break}e:{switch(i=e,a=n,a){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:El(i,t,Ot,!Sl);break e;case 2:dt=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(n=Vo+300-at(),10<n)){if(El(i,t,Ot,!Sl),Kn(i,0,!0)!==0)break e;i.timeoutHandle=cf(kd.bind(null,i,l,dt,Ca,Go,t,Ot,Jl,Di,Sl,a,2,-0,0),n);break e}kd(i,l,dt,Ca,Go,t,Ot,Jl,Di,Sl,a,0,-0,0)}}break}while(!0);Vt(e)}function kd(e,t,l,i,n,a,u,o,s,b,z,x,y,v){if(e.timeoutHandle=-1,x=t.subtreeFlags,(x&8192||(x&16785408)===16785408)&&(Hn={stylesheets:null,count:0,unsuspend:vm},Dd(t),x=Tm(),x!==null)){e.cancelPendingCommit=x(Yd.bind(null,e,t,a,l,i,n,u,o,s,z,1,y,v)),El(e,a,u,!b);return}Yd(e,t,a,l,i,n,u,o,s)}function Lg(e){for(var t=e;;){var l=t.tag;if((l===0||l===11||l===15)&&t.flags&16384&&(l=t.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var i=0;i<l.length;i++){var n=l[i],a=n.getSnapshot;n=n.value;try{if(!gt(a(),n))return!1}catch{return!1}}if(l=t.child,t.subtreeFlags&16384&&l!==null)l.return=t,t=l;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function El(e,t,l,i){t&=~Yo,t&=~Jl,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var n=t;0<n;){var a=31-ht(n),u=1<<a;i[a]=-1,n&=~u}l!==0&&Xr(e,l,t)}function Na(){return(ge&6)===0?(En(0),!1):!0}function Ko(){if(ie!==null){if(me===0)var e=ie.return;else e=ie,Ft=Vl=null,co(e),wi=null,gn=0,e=ie;for(;e!==null;)hd(e.alternate,e),e=e.return;ie=null}}function Hi(e,t){var l=e.timeoutHandle;l!==-1&&(e.timeoutHandle=-1,lm(l)),l=e.cancelPendingCommit,l!==null&&(e.cancelPendingCommit=null,l()),Ko(),Ae=e,ie=l=Kt(e.current,null),re=t,me=0,yt=null,Sl=!1,xi=qi(e,t),jo=!1,Di=Ot=Yo=Jl=Tl=Be=0,dt=wn=null,Go=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var n=31-ht(i),a=1<<n;t|=e[n],i&=~a}return nl=t,aa(),l}function _d(e,t){P=null,T.H=Ea,t===an||t===ga?(t=$c(),me=3):t===Jc?(t=$c(),me=4):me=t===Ps?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,yt=t,ie===null&&(Be=1,Oa(e,Et(t,e.current)))}function Cd(){var e=T.H;return T.H=Ea,e===null?Ea:e}function Nd(){var e=T.A;return T.A=Cg,e}function Wo(){Be=4,Sl||(re&4194048)!==re&&Mt.current!==null||(xi=!0),(Tl&134217727)===0&&(Jl&134217727)===0||Ae===null||El(Ae,re,Ot,!1)}function Jo(e,t,l){var i=ge;ge|=2;var n=Cd(),a=Nd();(Ae!==e||re!==t)&&(Ca=null,Hi(e,t)),t=!1;var u=Be;e:do try{if(me!==0&&ie!==null){var o=ie,s=yt;switch(me){case 8:Ko(),u=6;break e;case 3:case 2:case 9:case 6:Mt.current===null&&(t=!0);var b=me;if(me=0,yt=null,Ui(e,o,s,b),l&&xi){u=0;break e}break;default:b=me,me=0,yt=null,Ui(e,o,s,b)}}qg(),u=Be;break}catch(z){_d(e,z)}while(!0);return t&&e.shellSuspendCounter++,Ft=Vl=null,ge=i,T.H=n,T.A=a,ie===null&&(Ae=null,re=0,aa()),u}function qg(){for(;ie!==null;)Ld(ie)}function jg(e,t){var l=ge;ge|=2;var i=Cd(),n=Nd();Ae!==e||re!==t?(Ca=null,_a=at()+500,Hi(e,t)):xi=qi(e,t);e:do try{if(me!==0&&ie!==null){t=ie;var a=yt;t:switch(me){case 1:me=0,yt=null,Ui(e,t,a,1);break;case 2:case 9:if(Fc(a)){me=0,yt=null,qd(t);break}t=function(){me!==2&&me!==9||Ae!==e||(me=7),Vt(e)},a.then(t,t);break e;case 3:me=7;break e;case 4:me=5;break e;case 7:Fc(a)?(me=0,yt=null,qd(t)):(me=0,yt=null,Ui(e,t,a,7));break;case 5:var u=null;switch(ie.tag){case 26:u=ie.memoizedState;case 5:case 27:var o=ie;if(!u||Tf(u)){me=0,yt=null;var s=o.sibling;if(s!==null)ie=s;else{var b=o.return;b!==null?(ie=b,La(b)):ie=null}break t}}me=0,yt=null,Ui(e,t,a,5);break;case 6:me=0,yt=null,Ui(e,t,a,6);break;case 8:Ko(),Be=6;break e;default:throw Error(c(462))}}Yg();break}catch(z){_d(e,z)}while(!0);return Ft=Vl=null,T.H=i,T.A=n,ge=l,ie!==null?0:(Ae=null,re=0,aa(),Be)}function Yg(){for(;ie!==null&&!Zt();)Ld(ie)}function Ld(e){var t=dd(e.alternate,e,nl);e.memoizedProps=e.pendingProps,t===null?La(e):ie=t}function qd(e){var t=e,l=t.alternate;switch(t.tag){case 15:case 0:t=ad(l,t,t.pendingProps,t.type,void 0,re);break;case 11:t=ad(l,t,t.pendingProps,t.type.render,t.ref,re);break;case 5:co(t);default:hd(l,t),t=ie=jc(t,nl),t=dd(l,t,nl)}e.memoizedProps=e.pendingProps,t===null?La(e):ie=t}function Ui(e,t,l,i){Ft=Vl=null,co(t),wi=null,gn=0;var n=t.return;try{if(Hg(e,n,t,l,re)){Be=1,Oa(e,Et(l,e.current)),ie=null;return}}catch(a){if(n!==null)throw ie=n,a;Be=1,Oa(e,Et(l,e.current)),ie=null;return}t.flags&32768?(fe||i===1?e=!0:xi||(re&536870912)!==0?e=!1:(Sl=e=!0,(i===2||i===9||i===3||i===6)&&(i=Mt.current,i!==null&&i.tag===13&&(i.flags|=16384))),jd(t,e)):La(t)}function La(e){var t=e;do{if((t.flags&32768)!==0){jd(t,Sl);return}e=t.return;var l=Rg(t.alternate,t,nl);if(l!==null){ie=l;return}if(t=t.sibling,t!==null){ie=t;return}ie=t=e}while(t!==null);Be===0&&(Be=5)}function jd(e,t){do{var l=Bg(e.alternate,e);if(l!==null){l.flags&=32767,ie=l;return}if(l=e.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!t&&(e=e.sibling,e!==null)){ie=e;return}ie=e=l}while(e!==null);Be=6,ie=null}function Yd(e,t,l,i,n,a,u,o,s){e.cancelPendingCommit=null;do qa();while(Fe!==0);if((ge&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(a=t.lanes|t.childLanes,a|=Lu,vh(e,l,a,u,o,s),e===Ae&&(ie=Ae=null,re=0),Mi=t,zl=e,Oi=l,Zo=a,Xo=n,Ud=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Xg(Zn,function(){return Qd(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=T.T,T.T=null,n=B.p,B.p=2,u=ge,ge|=4;try{kg(e,t,l)}finally{ge=u,B.p=n,T.T=i}}Fe=1,Gd(),Vd(),Zd()}}function Gd(){if(Fe===1){Fe=0;var e=zl,t=Mi,l=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||l){l=T.T,T.T=null;var i=B.p;B.p=2;var n=ge;ge|=4;try{Ed(t,e);var a=or,u=Hc(e.containerInfo),o=a.focusedElem,s=a.selectionRange;if(u!==o&&o&&o.ownerDocument&&Oc(o.ownerDocument.documentElement,o)){if(s!==null&&Bu(o)){var b=s.start,z=s.end;if(z===void 0&&(z=b),"selectionStart"in o)o.selectionStart=b,o.selectionEnd=Math.min(z,o.value.length);else{var x=o.ownerDocument||document,y=x&&x.defaultView||window;if(y.getSelection){var v=y.getSelection(),K=o.textContent.length,Z=Math.min(s.start,K),ve=s.end===void 0?Z:Math.min(s.end,K);!v.extend&&Z>ve&&(u=ve,ve=Z,Z=u);var m=Mc(o,Z),h=Mc(o,ve);if(m&&h&&(v.rangeCount!==1||v.anchorNode!==m.node||v.anchorOffset!==m.offset||v.focusNode!==h.node||v.focusOffset!==h.offset)){var p=x.createRange();p.setStart(m.node,m.offset),v.removeAllRanges(),Z>ve?(v.addRange(p),v.extend(h.node,h.offset)):(p.setEnd(h.node,h.offset),v.addRange(p))}}}}for(x=[],v=o;v=v.parentNode;)v.nodeType===1&&x.push({element:v,left:v.scrollLeft,top:v.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<x.length;o++){var A=x[o];A.element.scrollLeft=A.left,A.element.scrollTop=A.top}}Ia=!!ur,or=ur=null}finally{ge=n,B.p=i,T.T=l}}e.current=t,Fe=2}}function Vd(){if(Fe===2){Fe=0;var e=zl,t=Mi,l=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||l){l=T.T,T.T=null;var i=B.p;B.p=2;var n=ge;ge|=4;try{Sd(e,t.alternate,t)}finally{ge=n,B.p=i,T.T=l}}Fe=3}}function Zd(){if(Fe===4||Fe===3){Fe=0,Il();var e=zl,t=Mi,l=Oi,i=Ud;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Fe=5:(Fe=0,Mi=zl=null,Xd(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(wl=null),fu(l),t=t.stateNode,ft&&typeof ft.onCommitFiberRoot=="function")try{ft.onCommitFiberRoot(Li,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=T.T,n=B.p,B.p=2,T.T=null;try{for(var a=e.onRecoverableError,u=0;u<i.length;u++){var o=i[u];a(o.value,{componentStack:o.stack})}}finally{T.T=t,B.p=n}}(Oi&3)!==0&&qa(),Vt(e),n=e.pendingLanes,(l&4194090)!==0&&(n&42)!==0?e===Qo?zn++:(zn=0,Qo=e):zn=0,En(0)}}function Xd(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ln(t)))}function qa(e){return Gd(),Vd(),Zd(),Qd()}function Qd(){if(Fe!==5)return!1;var e=zl,t=Zo;Zo=0;var l=fu(Oi),i=T.T,n=B.p;try{B.p=32>l?32:l,T.T=null,l=Xo,Xo=null;var a=zl,u=Oi;if(Fe=0,Mi=zl=null,Oi=0,(ge&6)!==0)throw Error(c(331));var o=ge;if(ge|=4,Od(a.current),xd(a,a.current,u,l),ge=o,En(0,!1),ft&&typeof ft.onPostCommitFiberRoot=="function")try{ft.onPostCommitFiberRoot(Li,a)}catch{}return!0}finally{B.p=n,T.T=i,Xd(e,t)}}function Kd(e,t,l){t=Et(l,t),t=Eo(e.stateNode,t,2),e=hl(e,t,2),e!==null&&(ji(e,2),Vt(e))}function we(e,t,l){if(e.tag===3)Kd(e,e,l);else for(;t!==null;){if(t.tag===3){Kd(t,e,l);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(wl===null||!wl.has(i))){e=Et(l,e),l=Is(2),i=hl(t,l,2),i!==null&&($s(l,i,t,e),ji(i,2),Vt(i));break}}t=t.return}}function Fo(e,t,l){var i=e.pingCache;if(i===null){i=e.pingCache=new Ng;var n=new Set;i.set(t,n)}else n=i.get(t),n===void 0&&(n=new Set,i.set(t,n));n.has(l)||(jo=!0,n.add(l),e=Gg.bind(null,e,t,l),t.then(e,e))}function Gg(e,t,l){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&l,e.warmLanes&=~l,Ae===e&&(re&l)===l&&(Be===4||Be===3&&(re&62914560)===re&&300>at()-Vo?(ge&2)===0&&Hi(e,0):Yo|=l,Di===re&&(Di=0)),Vt(e)}function Wd(e,t){t===0&&(t=Zr()),e=fi(e,t),e!==null&&(ji(e,t),Vt(e))}function Vg(e){var t=e.memoizedState,l=0;t!==null&&(l=t.retryLane),Wd(e,l)}function Zg(e,t){var l=0;switch(e.tag){case 13:var i=e.stateNode,n=e.memoizedState;n!==null&&(l=n.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(c(314))}i!==null&&i.delete(t),Wd(e,l)}function Xg(e,t){return Me(e,t)}var ja=null,Ri=null,Io=!1,Ya=!1,$o=!1,Fl=0;function Vt(e){e!==Ri&&e.next===null&&(Ri===null?ja=Ri=e:Ri=Ri.next=e),Ya=!0,Io||(Io=!0,Kg())}function En(e,t){if(!$o&&Ya){$o=!0;do for(var l=!1,i=ja;i!==null;){if(e!==0){var n=i.pendingLanes;if(n===0)var a=0;else{var u=i.suspendedLanes,o=i.pingedLanes;a=(1<<31-ht(42|e)+1)-1,a&=n&~(u&~o),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(l=!0,$d(i,a))}else a=re,a=Kn(i,i===Ae?a:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(a&3)===0||qi(i,a)||(l=!0,$d(i,a));i=i.next}while(l);$o=!1}}function Qg(){Jd()}function Jd(){Ya=Io=!1;var e=0;Fl!==0&&(tm()&&(e=Fl),Fl=0);for(var t=at(),l=null,i=ja;i!==null;){var n=i.next,a=Fd(i,t);a===0?(i.next=null,l===null?ja=n:l.next=n,n===null&&(Ri=l)):(l=i,(e!==0||(a&3)!==0)&&(Ya=!0)),i=n}En(e)}function Fd(e,t){for(var l=e.suspendedLanes,i=e.pingedLanes,n=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var u=31-ht(a),o=1<<u,s=n[u];s===-1?((o&l)===0||(o&i)!==0)&&(n[u]=yh(o,t)):s<=t&&(e.expiredLanes|=o),a&=~o}if(t=Ae,l=re,l=Kn(e,e===t?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,l===0||e===t&&(me===2||me===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&We(i),e.callbackNode=null,e.callbackPriority=0;if((l&3)===0||qi(e,l)){if(t=l&-l,t===e.callbackPriority)return t;switch(i!==null&&We(i),fu(l)){case 2:case 8:l=Yr;break;case 32:l=Zn;break;case 268435456:l=Gr;break;default:l=Zn}return i=Id.bind(null,e),l=Me(l,i),e.callbackPriority=t,e.callbackNode=l,t}return i!==null&&i!==null&&We(i),e.callbackPriority=2,e.callbackNode=null,2}function Id(e,t){if(Fe!==0&&Fe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var l=e.callbackNode;if(qa()&&e.callbackNode!==l)return null;var i=re;return i=Kn(e,e===Ae?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Bd(e,i,t),Fd(e,at()),e.callbackNode!=null&&e.callbackNode===l?Id.bind(null,e):null)}function $d(e,t){if(qa())return null;Bd(e,t,!0)}function Kg(){im(function(){(ge&6)!==0?Me(jr,Qg):Jd()})}function Po(){return Fl===0&&(Fl=Vr()),Fl}function Pd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:$n(""+e)}function ef(e,t){var l=t.ownerDocument.createElement("input");return l.name=t.name,l.value=t.value,e.id&&l.setAttribute("form",e.id),t.parentNode.insertBefore(l,t),e=new FormData(e),l.parentNode.removeChild(l),e}function Wg(e,t,l,i,n){if(t==="submit"&&l&&l.stateNode===n){var a=Pd((n[ot]||null).action),u=i.submitter;u&&(t=(t=u[ot]||null)?Pd(t.formAction):u.getAttribute("formAction"),t!==null&&(a=t,u=null));var o=new la("action","action",null,i,n);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Fl!==0){var s=u?ef(n,u):new FormData(n);vo(l,{pending:!0,data:s,method:n.method,action:a},null,s)}}else typeof a=="function"&&(o.preventDefault(),s=u?ef(n,u):new FormData(n),vo(l,{pending:!0,data:s,method:n.method,action:a},a,s))},currentTarget:n}]})}}for(var er=0;er<Nu.length;er++){var tr=Nu[er],Jg=tr.toLowerCase(),Fg=tr[0].toUpperCase()+tr.slice(1);Rt(Jg,"on"+Fg)}Rt(Bc,"onAnimationEnd"),Rt(kc,"onAnimationIteration"),Rt(_c,"onAnimationStart"),Rt("dblclick","onDoubleClick"),Rt("focusin","onFocus"),Rt("focusout","onBlur"),Rt(hg,"onTransitionRun"),Rt(gg,"onTransitionStart"),Rt(mg,"onTransitionCancel"),Rt(Cc,"onTransitionEnd"),li("onMouseEnter",["mouseout","mouseover"]),li("onMouseLeave",["mouseout","mouseover"]),li("onPointerEnter",["pointerout","pointerover"]),li("onPointerLeave",["pointerout","pointerover"]),kl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),kl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),kl("onBeforeInput",["compositionend","keypress","textInput","paste"]),kl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),kl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),kl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var An="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ig=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(An));function tf(e,t){t=(t&4)!==0;for(var l=0;l<e.length;l++){var i=e[l],n=i.event;i=i.listeners;e:{var a=void 0;if(t)for(var u=i.length-1;0<=u;u--){var o=i[u],s=o.instance,b=o.currentTarget;if(o=o.listener,s!==a&&n.isPropagationStopped())break e;a=o,n.currentTarget=b;try{a(n)}catch(z){Ma(z)}n.currentTarget=null,a=s}else for(u=0;u<i.length;u++){if(o=i[u],s=o.instance,b=o.currentTarget,o=o.listener,s!==a&&n.isPropagationStopped())break e;a=o,n.currentTarget=b;try{a(n)}catch(z){Ma(z)}n.currentTarget=null,a=s}}}}function ne(e,t){var l=t[hu];l===void 0&&(l=t[hu]=new Set);var i=e+"__bubble";l.has(i)||(lf(t,e,2,!1),l.add(i))}function lr(e,t,l){var i=0;t&&(i|=4),lf(l,e,i,t)}var Ga="_reactListening"+Math.random().toString(36).slice(2);function ir(e){if(!e[Ga]){e[Ga]=!0,Jr.forEach(function(l){l!=="selectionchange"&&(Ig.has(l)||lr(l,!1,e),lr(l,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ga]||(t[Ga]=!0,lr("selectionchange",!1,t))}}function lf(e,t,l,i){switch(Df(t)){case 2:var n=Em;break;case 8:n=Am;break;default:n=br}l=n.bind(null,t,l,e),n=void 0,!Eu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),i?n!==void 0?e.addEventListener(t,l,{capture:!0,passive:n}):e.addEventListener(t,l,!0):n!==void 0?e.addEventListener(t,l,{passive:n}):e.addEventListener(t,l,!1)}function nr(e,t,l,i,n){var a=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var u=i.tag;if(u===3||u===4){var o=i.stateNode.containerInfo;if(o===n)break;if(u===4)for(u=i.return;u!==null;){var s=u.tag;if((s===3||s===4)&&u.stateNode.containerInfo===n)return;u=u.return}for(;o!==null;){if(u=Pl(o),u===null)return;if(s=u.tag,s===5||s===6||s===26||s===27){i=a=u;continue e}o=o.parentNode}}i=i.return}cc(function(){var b=a,z=wu(l),x=[];e:{var y=Nc.get(e);if(y!==void 0){var v=la,K=e;switch(e){case"keypress":if(ea(l)===0)break e;case"keydown":case"keyup":v=Xh;break;case"focusin":K="focus",v=Mu;break;case"focusout":K="blur",v=Mu;break;case"beforeblur":case"afterblur":v=Mu;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=fc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Bh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Wh;break;case Bc:case kc:case _c:v=Ch;break;case Cc:v=Fh;break;case"scroll":case"scrollend":v=Uh;break;case"wheel":v=$h;break;case"copy":case"cut":case"paste":v=Lh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=gc;break;case"toggle":case"beforetoggle":v=eg}var Z=(t&4)!==0,ve=!Z&&(e==="scroll"||e==="scrollend"),m=Z?y!==null?y+"Capture":null:y;Z=[];for(var h=b,p;h!==null;){var A=h;if(p=A.stateNode,A=A.tag,A!==5&&A!==26&&A!==27||p===null||m===null||(A=Vi(h,m),A!=null&&Z.push(xn(h,A,p))),ve)break;h=h.return}0<Z.length&&(y=new v(y,K,null,l,z),x.push({event:y,listeners:Z}))}}if((t&7)===0){e:{if(y=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",y&&l!==Tu&&(K=l.relatedTarget||l.fromElement)&&(Pl(K)||K[$l]))break e;if((v||y)&&(y=z.window===z?z:(y=z.ownerDocument)?y.defaultView||y.parentWindow:window,v?(K=l.relatedTarget||l.toElement,v=b,K=K?Pl(K):null,K!==null&&(ve=O(K),Z=K.tag,K!==ve||Z!==5&&Z!==27&&Z!==6)&&(K=null)):(v=null,K=b),v!==K)){if(Z=fc,A="onMouseLeave",m="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(Z=gc,A="onPointerLeave",m="onPointerEnter",h="pointer"),ve=v==null?y:Gi(v),p=K==null?y:Gi(K),y=new Z(A,h+"leave",v,l,z),y.target=ve,y.relatedTarget=p,A=null,Pl(z)===b&&(Z=new Z(m,h+"enter",K,l,z),Z.target=p,Z.relatedTarget=ve,A=Z),ve=A,v&&K)t:{for(Z=v,m=K,h=0,p=Z;p;p=Bi(p))h++;for(p=0,A=m;A;A=Bi(A))p++;for(;0<h-p;)Z=Bi(Z),h--;for(;0<p-h;)m=Bi(m),p--;for(;h--;){if(Z===m||m!==null&&Z===m.alternate)break t;Z=Bi(Z),m=Bi(m)}Z=null}else Z=null;v!==null&&nf(x,y,v,Z,!1),K!==null&&ve!==null&&nf(x,ve,K,Z,!0)}}e:{if(y=b?Gi(b):window,v=y.nodeName&&y.nodeName.toLowerCase(),v==="select"||v==="input"&&y.type==="file")var N=wc;else if(Sc(y))if(zc)N=sg;else{N=rg;var te=og}else v=y.nodeName,!v||v.toLowerCase()!=="input"||y.type!=="checkbox"&&y.type!=="radio"?b&&Su(b.elementType)&&(N=wc):N=cg;if(N&&(N=N(e,b))){Tc(x,N,l,z);break e}te&&te(e,y,b),e==="focusout"&&b&&y.type==="number"&&b.memoizedProps.value!=null&&vu(y,"number",y.value)}switch(te=b?Gi(b):window,e){case"focusin":(Sc(te)||te.contentEditable==="true")&&(ci=te,ku=b,Ii=null);break;case"focusout":Ii=ku=ci=null;break;case"mousedown":_u=!0;break;case"contextmenu":case"mouseup":case"dragend":_u=!1,Uc(x,l,z);break;case"selectionchange":if(fg)break;case"keydown":case"keyup":Uc(x,l,z)}var q;if(Hu)e:{switch(e){case"compositionstart":var X="onCompositionStart";break e;case"compositionend":X="onCompositionEnd";break e;case"compositionupdate":X="onCompositionUpdate";break e}X=void 0}else ri?yc(e,l)&&(X="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&(X="onCompositionStart");X&&(mc&&l.locale!=="ko"&&(ri||X!=="onCompositionStart"?X==="onCompositionEnd"&&ri&&(q=sc()):(cl=z,Au="value"in cl?cl.value:cl.textContent,ri=!0)),te=Va(b,X),0<te.length&&(X=new hc(X,e,null,l,z),x.push({event:X,listeners:te}),q?X.data=q:(q=vc(l),q!==null&&(X.data=q)))),(q=lg?ig(e,l):ng(e,l))&&(X=Va(b,"onBeforeInput"),0<X.length&&(te=new hc("onBeforeInput","beforeinput",null,l,z),x.push({event:te,listeners:X}),te.data=q)),Wg(x,e,b,l,z)}tf(x,t)})}function xn(e,t,l){return{instance:e,listener:t,currentTarget:l}}function Va(e,t){for(var l=t+"Capture",i=[];e!==null;){var n=e,a=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||a===null||(n=Vi(e,l),n!=null&&i.unshift(xn(e,n,a)),n=Vi(e,t),n!=null&&i.push(xn(e,n,a))),e.tag===3)return i;e=e.return}return[]}function Bi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function nf(e,t,l,i,n){for(var a=t._reactName,u=[];l!==null&&l!==i;){var o=l,s=o.alternate,b=o.stateNode;if(o=o.tag,s!==null&&s===i)break;o!==5&&o!==26&&o!==27||b===null||(s=b,n?(b=Vi(l,a),b!=null&&u.unshift(xn(l,b,s))):n||(b=Vi(l,a),b!=null&&u.push(xn(l,b,s)))),l=l.return}u.length!==0&&e.push({event:t,listeners:u})}var $g=/\r\n?/g,Pg=/\u0000|\uFFFD/g;function af(e){return(typeof e=="string"?e:""+e).replace($g,`
`).replace(Pg,"")}function uf(e,t){return t=af(t),af(e)===t}function Za(){}function ye(e,t,l,i,n,a){switch(l){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||ai(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&ai(e,""+i);break;case"className":Jn(e,"class",i);break;case"tabIndex":Jn(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Jn(e,l,i);break;case"style":oc(e,i,a);break;case"data":if(t!=="object"){Jn(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||l!=="href")){e.removeAttribute(l);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(l);break}i=$n(""+i),e.setAttribute(l,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(l==="formAction"?(t!=="input"&&ye(e,t,"name",n.name,n,null),ye(e,t,"formEncType",n.formEncType,n,null),ye(e,t,"formMethod",n.formMethod,n,null),ye(e,t,"formTarget",n.formTarget,n,null)):(ye(e,t,"encType",n.encType,n,null),ye(e,t,"method",n.method,n,null),ye(e,t,"target",n.target,n,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(l);break}i=$n(""+i),e.setAttribute(l,i);break;case"onClick":i!=null&&(e.onclick=Za);break;case"onScroll":i!=null&&ne("scroll",e);break;case"onScrollEnd":i!=null&&ne("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(c(61));if(l=i.__html,l!=null){if(n.children!=null)throw Error(c(60));e.innerHTML=l}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}l=$n(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(l,""+i):e.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(l,""):e.removeAttribute(l);break;case"capture":case"download":i===!0?e.setAttribute(l,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(l,i):e.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(l,i):e.removeAttribute(l);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(l):e.setAttribute(l,i);break;case"popover":ne("beforetoggle",e),ne("toggle",e),Wn(e,"popover",i);break;case"xlinkActuate":Xt(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Xt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Xt(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Xt(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Xt(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Xt(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Wn(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=Oh.get(l)||l,Wn(e,l,i))}}function ar(e,t,l,i,n,a){switch(l){case"style":oc(e,i,a);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(c(61));if(l=i.__html,l!=null){if(n.children!=null)throw Error(c(60));e.innerHTML=l}}break;case"children":typeof i=="string"?ai(e,i):(typeof i=="number"||typeof i=="bigint")&&ai(e,""+i);break;case"onScroll":i!=null&&ne("scroll",e);break;case"onScrollEnd":i!=null&&ne("scrollend",e);break;case"onClick":i!=null&&(e.onclick=Za);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Fr.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(n=l.endsWith("Capture"),t=l.slice(2,n?l.length-7:void 0),a=e[ot]||null,a=a!=null?a[l]:null,typeof a=="function"&&e.removeEventListener(t,a,n),typeof i=="function")){typeof a!="function"&&a!==null&&(l in e?e[l]=null:e.hasAttribute(l)&&e.removeAttribute(l)),e.addEventListener(t,i,n);break e}l in e?e[l]=i:i===!0?e.setAttribute(l,""):Wn(e,l,i)}}}function Ie(e,t,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ne("error",e),ne("load",e);var i=!1,n=!1,a;for(a in l)if(l.hasOwnProperty(a)){var u=l[a];if(u!=null)switch(a){case"src":i=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:ye(e,t,a,u,l,null)}}n&&ye(e,t,"srcSet",l.srcSet,l,null),i&&ye(e,t,"src",l.src,l,null);return;case"input":ne("invalid",e);var o=a=u=n=null,s=null,b=null;for(i in l)if(l.hasOwnProperty(i)){var z=l[i];if(z!=null)switch(i){case"name":n=z;break;case"type":u=z;break;case"checked":s=z;break;case"defaultChecked":b=z;break;case"value":a=z;break;case"defaultValue":o=z;break;case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(c(137,t));break;default:ye(e,t,i,z,l,null)}}ic(e,a,o,s,b,u,n,!1),Fn(e);return;case"select":ne("invalid",e),i=u=a=null;for(n in l)if(l.hasOwnProperty(n)&&(o=l[n],o!=null))switch(n){case"value":a=o;break;case"defaultValue":u=o;break;case"multiple":i=o;default:ye(e,t,n,o,l,null)}t=a,l=u,e.multiple=!!i,t!=null?ni(e,!!i,t,!1):l!=null&&ni(e,!!i,l,!0);return;case"textarea":ne("invalid",e),a=n=i=null;for(u in l)if(l.hasOwnProperty(u)&&(o=l[u],o!=null))switch(u){case"value":i=o;break;case"defaultValue":n=o;break;case"children":a=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(c(91));break;default:ye(e,t,u,o,l,null)}ac(e,i,n,a),Fn(e);return;case"option":for(s in l)if(l.hasOwnProperty(s)&&(i=l[s],i!=null))switch(s){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:ye(e,t,s,i,l,null)}return;case"dialog":ne("beforetoggle",e),ne("toggle",e),ne("cancel",e),ne("close",e);break;case"iframe":case"object":ne("load",e);break;case"video":case"audio":for(i=0;i<An.length;i++)ne(An[i],e);break;case"image":ne("error",e),ne("load",e);break;case"details":ne("toggle",e);break;case"embed":case"source":case"link":ne("error",e),ne("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(b in l)if(l.hasOwnProperty(b)&&(i=l[b],i!=null))switch(b){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:ye(e,t,b,i,l,null)}return;default:if(Su(t)){for(z in l)l.hasOwnProperty(z)&&(i=l[z],i!==void 0&&ar(e,t,z,i,l,void 0));return}}for(o in l)l.hasOwnProperty(o)&&(i=l[o],i!=null&&ye(e,t,o,i,l,null))}function em(e,t,l,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,a=null,u=null,o=null,s=null,b=null,z=null;for(v in l){var x=l[v];if(l.hasOwnProperty(v)&&x!=null)switch(v){case"checked":break;case"value":break;case"defaultValue":s=x;default:i.hasOwnProperty(v)||ye(e,t,v,null,i,x)}}for(var y in i){var v=i[y];if(x=l[y],i.hasOwnProperty(y)&&(v!=null||x!=null))switch(y){case"type":a=v;break;case"name":n=v;break;case"checked":b=v;break;case"defaultChecked":z=v;break;case"value":u=v;break;case"defaultValue":o=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(c(137,t));break;default:v!==x&&ye(e,t,y,v,i,x)}}yu(e,u,o,s,b,z,a,n);return;case"select":v=u=o=y=null;for(a in l)if(s=l[a],l.hasOwnProperty(a)&&s!=null)switch(a){case"value":break;case"multiple":v=s;default:i.hasOwnProperty(a)||ye(e,t,a,null,i,s)}for(n in i)if(a=i[n],s=l[n],i.hasOwnProperty(n)&&(a!=null||s!=null))switch(n){case"value":y=a;break;case"defaultValue":o=a;break;case"multiple":u=a;default:a!==s&&ye(e,t,n,a,i,s)}t=o,l=u,i=v,y!=null?ni(e,!!l,y,!1):!!i!=!!l&&(t!=null?ni(e,!!l,t,!0):ni(e,!!l,l?[]:"",!1));return;case"textarea":v=y=null;for(o in l)if(n=l[o],l.hasOwnProperty(o)&&n!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:ye(e,t,o,null,i,n)}for(u in i)if(n=i[u],a=l[u],i.hasOwnProperty(u)&&(n!=null||a!=null))switch(u){case"value":y=n;break;case"defaultValue":v=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(c(91));break;default:n!==a&&ye(e,t,u,n,i,a)}nc(e,y,v);return;case"option":for(var K in l)if(y=l[K],l.hasOwnProperty(K)&&y!=null&&!i.hasOwnProperty(K))switch(K){case"selected":e.selected=!1;break;default:ye(e,t,K,null,i,y)}for(s in i)if(y=i[s],v=l[s],i.hasOwnProperty(s)&&y!==v&&(y!=null||v!=null))switch(s){case"selected":e.selected=y&&typeof y!="function"&&typeof y!="symbol";break;default:ye(e,t,s,y,i,v)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Z in l)y=l[Z],l.hasOwnProperty(Z)&&y!=null&&!i.hasOwnProperty(Z)&&ye(e,t,Z,null,i,y);for(b in i)if(y=i[b],v=l[b],i.hasOwnProperty(b)&&y!==v&&(y!=null||v!=null))switch(b){case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(c(137,t));break;default:ye(e,t,b,y,i,v)}return;default:if(Su(t)){for(var ve in l)y=l[ve],l.hasOwnProperty(ve)&&y!==void 0&&!i.hasOwnProperty(ve)&&ar(e,t,ve,void 0,i,y);for(z in i)y=i[z],v=l[z],!i.hasOwnProperty(z)||y===v||y===void 0&&v===void 0||ar(e,t,z,y,i,v);return}}for(var m in l)y=l[m],l.hasOwnProperty(m)&&y!=null&&!i.hasOwnProperty(m)&&ye(e,t,m,null,i,y);for(x in i)y=i[x],v=l[x],!i.hasOwnProperty(x)||y===v||y==null&&v==null||ye(e,t,x,y,i,v)}var ur=null,or=null;function Xa(e){return e.nodeType===9?e:e.ownerDocument}function of(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function rf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function rr(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var cr=null;function tm(){var e=window.event;return e&&e.type==="popstate"?e===cr?!1:(cr=e,!0):(cr=null,!1)}var cf=typeof setTimeout=="function"?setTimeout:void 0,lm=typeof clearTimeout=="function"?clearTimeout:void 0,sf=typeof Promise=="function"?Promise:void 0,im=typeof queueMicrotask=="function"?queueMicrotask:typeof sf<"u"?function(e){return sf.resolve(null).then(e).catch(nm)}:cf;function nm(e){setTimeout(function(){throw e})}function Al(e){return e==="head"}function df(e,t){var l=t,i=0,n=0;do{var a=l.nextSibling;if(e.removeChild(l),a&&a.nodeType===8)if(l=a.data,l==="/$"){if(0<i&&8>i){l=i;var u=e.ownerDocument;if(l&1&&Dn(u.documentElement),l&2&&Dn(u.body),l&4)for(l=u.head,Dn(l),u=l.firstChild;u;){var o=u.nextSibling,s=u.nodeName;u[Yi]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&u.rel.toLowerCase()==="stylesheet"||l.removeChild(u),u=o}}if(n===0){e.removeChild(a),_n(t);return}n--}else l==="$"||l==="$?"||l==="$!"?n++:i=l.charCodeAt(0)-48;else i=0;l=a}while(l);_n(t)}function sr(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var l=t;switch(t=t.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":sr(l),gu(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}e.removeChild(l)}}function am(e,t,l,i){for(;e.nodeType===1;){var n=l;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Yi])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(a=e.getAttribute("rel"),a==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(a!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(a=e.getAttribute("src"),(a!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var a=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===a)return e}else return e;if(e=kt(e.nextSibling),e===null)break}return null}function um(e,t,l){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!l||(e=kt(e.nextSibling),e===null))return null;return e}function dr(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function om(e,t){var l=e.ownerDocument;if(e.data!=="$?"||l.readyState==="complete")t();else{var i=function(){t(),l.removeEventListener("DOMContentLoaded",i)};l.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function kt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var fr=null;function ff(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"){if(t===0)return e;t--}else l==="/$"&&t++}e=e.previousSibling}return null}function hf(e,t,l){switch(t=Xa(l),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function Dn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);gu(e)}var Ht=new Map,gf=new Set;function Qa(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var al=B.d;B.d={f:rm,r:cm,D:sm,C:dm,L:fm,m:hm,X:mm,S:gm,M:pm};function rm(){var e=al.f(),t=Na();return e||t}function cm(e){var t=ei(e);t!==null&&t.tag===5&&t.type==="form"?Bs(t):al.r(e)}var ki=typeof document>"u"?null:document;function mf(e,t,l){var i=ki;if(i&&typeof t=="string"&&t){var n=zt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof l=="string"&&(n+='[crossorigin="'+l+'"]'),gf.has(n)||(gf.add(n),e={rel:e,crossOrigin:l,href:t},i.querySelector(n)===null&&(t=i.createElement("link"),Ie(t,"link",e),Ve(t),i.head.appendChild(t)))}}function sm(e){al.D(e),mf("dns-prefetch",e,null)}function dm(e,t){al.C(e,t),mf("preconnect",e,t)}function fm(e,t,l){al.L(e,t,l);var i=ki;if(i&&e&&t){var n='link[rel="preload"][as="'+zt(t)+'"]';t==="image"&&l&&l.imageSrcSet?(n+='[imagesrcset="'+zt(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(n+='[imagesizes="'+zt(l.imageSizes)+'"]')):n+='[href="'+zt(e)+'"]';var a=n;switch(t){case"style":a=_i(e);break;case"script":a=Ci(e)}Ht.has(a)||(e=_({rel:"preload",href:t==="image"&&l&&l.imageSrcSet?void 0:e,as:t},l),Ht.set(a,e),i.querySelector(n)!==null||t==="style"&&i.querySelector(Mn(a))||t==="script"&&i.querySelector(On(a))||(t=i.createElement("link"),Ie(t,"link",e),Ve(t),i.head.appendChild(t)))}}function hm(e,t){al.m(e,t);var l=ki;if(l&&e){var i=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+zt(i)+'"][href="'+zt(e)+'"]',a=n;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=Ci(e)}if(!Ht.has(a)&&(e=_({rel:"modulepreload",href:e},t),Ht.set(a,e),l.querySelector(n)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(On(a)))return}i=l.createElement("link"),Ie(i,"link",e),Ve(i),l.head.appendChild(i)}}}function gm(e,t,l){al.S(e,t,l);var i=ki;if(i&&e){var n=ti(i).hoistableStyles,a=_i(e);t=t||"default";var u=n.get(a);if(!u){var o={loading:0,preload:null};if(u=i.querySelector(Mn(a)))o.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":t},l),(l=Ht.get(a))&&hr(e,l);var s=u=i.createElement("link");Ve(s),Ie(s,"link",e),s._p=new Promise(function(b,z){s.onload=b,s.onerror=z}),s.addEventListener("load",function(){o.loading|=1}),s.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Ka(u,t,i)}u={type:"stylesheet",instance:u,count:1,state:o},n.set(a,u)}}}function mm(e,t){al.X(e,t);var l=ki;if(l&&e){var i=ti(l).hoistableScripts,n=Ci(e),a=i.get(n);a||(a=l.querySelector(On(n)),a||(e=_({src:e,async:!0},t),(t=Ht.get(n))&&gr(e,t),a=l.createElement("script"),Ve(a),Ie(a,"link",e),l.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(n,a))}}function pm(e,t){al.M(e,t);var l=ki;if(l&&e){var i=ti(l).hoistableScripts,n=Ci(e),a=i.get(n);a||(a=l.querySelector(On(n)),a||(e=_({src:e,async:!0,type:"module"},t),(t=Ht.get(n))&&gr(e,t),a=l.createElement("script"),Ve(a),Ie(a,"link",e),l.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(n,a))}}function pf(e,t,l,i){var n=(n=J.current)?Qa(n):null;if(!n)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(t=_i(l.href),l=ti(n).hoistableStyles,i=l.get(t),i||(i={type:"style",instance:null,count:0,state:null},l.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){e=_i(l.href);var a=ti(n).hoistableStyles,u=a.get(e);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(e,u),(a=n.querySelector(Mn(e)))&&!a._p&&(u.instance=a,u.state.loading=5),Ht.has(e)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Ht.set(e,l),a||bm(n,e,l,u.state))),t&&i===null)throw Error(c(528,""));return u}if(t&&i!==null)throw Error(c(529,""));return null;case"script":return t=l.async,l=l.src,typeof l=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ci(l),l=ti(n).hoistableScripts,i=l.get(t),i||(i={type:"script",instance:null,count:0,state:null},l.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function _i(e){return'href="'+zt(e)+'"'}function Mn(e){return'link[rel="stylesheet"]['+e+"]"}function bf(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function bm(e,t,l,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),Ie(t,"link",l),Ve(t),e.head.appendChild(t))}function Ci(e){return'[src="'+zt(e)+'"]'}function On(e){return"script[async]"+e}function yf(e,t,l){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+zt(l.href)+'"]');if(i)return t.instance=i,Ve(i),i;var n=_({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),Ve(i),Ie(i,"style",n),Ka(i,l.precedence,e),t.instance=i;case"stylesheet":n=_i(l.href);var a=e.querySelector(Mn(n));if(a)return t.state.loading|=4,t.instance=a,Ve(a),a;i=bf(l),(n=Ht.get(n))&&hr(i,n),a=(e.ownerDocument||e).createElement("link"),Ve(a);var u=a;return u._p=new Promise(function(o,s){u.onload=o,u.onerror=s}),Ie(a,"link",i),t.state.loading|=4,Ka(a,l.precedence,e),t.instance=a;case"script":return a=Ci(l.src),(n=e.querySelector(On(a)))?(t.instance=n,Ve(n),n):(i=l,(n=Ht.get(a))&&(i=_({},l),gr(i,n)),e=e.ownerDocument||e,n=e.createElement("script"),Ve(n),Ie(n,"link",i),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,Ka(i,l.precedence,e));return t.instance}function Ka(e,t,l){for(var i=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=i.length?i[i.length-1]:null,a=n,u=0;u<i.length;u++){var o=i[u];if(o.dataset.precedence===t)a=o;else if(a!==n)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=l.nodeType===9?l.head:l,t.insertBefore(e,t.firstChild))}function hr(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function gr(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Wa=null;function vf(e,t,l){if(Wa===null){var i=new Map,n=Wa=new Map;n.set(l,i)}else n=Wa,i=n.get(l),i||(i=new Map,n.set(l,i));if(i.has(e))return i;for(i.set(e,null),l=l.getElementsByTagName(e),n=0;n<l.length;n++){var a=l[n];if(!(a[Yi]||a[Pe]||e==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var u=a.getAttribute(t)||"";u=e+u;var o=i.get(u);o?o.push(a):i.set(u,[a])}}return i}function Sf(e,t,l){e=e.ownerDocument||e,e.head.insertBefore(l,t==="title"?e.querySelector("head > title"):null)}function ym(e,t,l){if(l===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Tf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Hn=null;function vm(){}function Sm(e,t,l){if(Hn===null)throw Error(c(475));var i=Hn;if(t.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var n=_i(l.href),a=e.querySelector(Mn(n));if(a){e=a._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(i.count++,i=Ja.bind(i),e.then(i,i)),t.state.loading|=4,t.instance=a,Ve(a);return}a=e.ownerDocument||e,l=bf(l),(n=Ht.get(n))&&hr(l,n),a=a.createElement("link"),Ve(a);var u=a;u._p=new Promise(function(o,s){u.onload=o,u.onerror=s}),Ie(a,"link",l),t.instance=a}i.stylesheets===null&&(i.stylesheets=new Map),i.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(i.count++,t=Ja.bind(i),e.addEventListener("load",t),e.addEventListener("error",t))}}function Tm(){if(Hn===null)throw Error(c(475));var e=Hn;return e.stylesheets&&e.count===0&&mr(e,e.stylesheets),0<e.count?function(t){var l=setTimeout(function(){if(e.stylesheets&&mr(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(l)}}:null}function Ja(){if(this.count--,this.count===0){if(this.stylesheets)mr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Fa=null;function mr(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Fa=new Map,t.forEach(wm,e),Fa=null,Ja.call(e))}function wm(e,t){if(!(t.state.loading&4)){var l=Fa.get(e);if(l)var i=l.get(null);else{l=new Map,Fa.set(e,l);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<n.length;a++){var u=n[a];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(l.set(u.dataset.precedence,u),i=u)}i&&l.set(null,i)}n=t.instance,u=n.getAttribute("data-precedence"),a=l.get(u)||i,a===i&&l.set(null,n),l.set(u,n),this.count++,i=Ja.bind(this),n.addEventListener("load",i),n.addEventListener("error",i),a?a.parentNode.insertBefore(n,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var Un={$$typeof:ue,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function zm(e,t,l,i,n,a,u,o){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=su(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=su(0),this.hiddenUpdates=su(null),this.identifierPrefix=i,this.onUncaughtError=n,this.onCaughtError=a,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function wf(e,t,l,i,n,a,u,o,s,b,z,x){return e=new zm(e,t,l,u,o,s,b,x),t=1,a===!0&&(t|=24),a=mt(3,null,null,t),e.current=a,a.stateNode=e,t=Ju(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:i,isDehydrated:l,cache:t},Pu(a),e}function zf(e){return e?(e=hi,e):hi}function Ef(e,t,l,i,n,a){n=zf(n),i.context===null?i.context=n:i.pendingContext=n,i=fl(t),i.payload={element:l},a=a===void 0?null:a,a!==null&&(i.callback=a),l=hl(e,i,t),l!==null&&(St(l,e,t),on(l,e,t))}function Af(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<t?l:t}}function pr(e,t){Af(e,t),(e=e.alternate)&&Af(e,t)}function xf(e){if(e.tag===13){var t=fi(e,67108864);t!==null&&St(t,e,67108864),pr(e,67108864)}}var Ia=!0;function Em(e,t,l,i){var n=T.T;T.T=null;var a=B.p;try{B.p=2,br(e,t,l,i)}finally{B.p=a,T.T=n}}function Am(e,t,l,i){var n=T.T;T.T=null;var a=B.p;try{B.p=8,br(e,t,l,i)}finally{B.p=a,T.T=n}}function br(e,t,l,i){if(Ia){var n=yr(i);if(n===null)nr(e,t,i,$a,l),Mf(e,i);else if(Dm(n,e,t,l,i))i.stopPropagation();else if(Mf(e,i),t&4&&-1<xm.indexOf(e)){for(;n!==null;){var a=ei(n);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var u=Bl(a.pendingLanes);if(u!==0){var o=a;for(o.pendingLanes|=2,o.entangledLanes|=2;u;){var s=1<<31-ht(u);o.entanglements[1]|=s,u&=~s}Vt(a),(ge&6)===0&&(_a=at()+500,En(0))}}break;case 13:o=fi(a,2),o!==null&&St(o,a,2),Na(),pr(a,2)}if(a=yr(i),a===null&&nr(e,t,i,$a,l),a===n)break;n=a}n!==null&&i.stopPropagation()}else nr(e,t,i,null,l)}}function yr(e){return e=wu(e),vr(e)}var $a=null;function vr(e){if($a=null,e=Pl(e),e!==null){var t=O(e);if(t===null)e=null;else{var l=t.tag;if(l===13){if(e=C(t),e!==null)return e;e=null}else if(l===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return $a=e,null}function Df(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(dh()){case jr:return 2;case Yr:return 8;case Zn:case fh:return 32;case Gr:return 268435456;default:return 32}default:return 32}}var Sr=!1,xl=null,Dl=null,Ml=null,Rn=new Map,Bn=new Map,Ol=[],xm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Mf(e,t){switch(e){case"focusin":case"focusout":xl=null;break;case"dragenter":case"dragleave":Dl=null;break;case"mouseover":case"mouseout":Ml=null;break;case"pointerover":case"pointerout":Rn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bn.delete(t.pointerId)}}function kn(e,t,l,i,n,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:l,eventSystemFlags:i,nativeEvent:a,targetContainers:[n]},t!==null&&(t=ei(t),t!==null&&xf(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function Dm(e,t,l,i,n){switch(t){case"focusin":return xl=kn(xl,e,t,l,i,n),!0;case"dragenter":return Dl=kn(Dl,e,t,l,i,n),!0;case"mouseover":return Ml=kn(Ml,e,t,l,i,n),!0;case"pointerover":var a=n.pointerId;return Rn.set(a,kn(Rn.get(a)||null,e,t,l,i,n)),!0;case"gotpointercapture":return a=n.pointerId,Bn.set(a,kn(Bn.get(a)||null,e,t,l,i,n)),!0}return!1}function Of(e){var t=Pl(e.target);if(t!==null){var l=O(t);if(l!==null){if(t=l.tag,t===13){if(t=C(l),t!==null){e.blockedOn=t,Sh(e.priority,function(){if(l.tag===13){var i=vt();i=du(i);var n=fi(l,i);n!==null&&St(n,l,i),pr(l,i)}});return}}else if(t===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Pa(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var l=yr(e.nativeEvent);if(l===null){l=e.nativeEvent;var i=new l.constructor(l.type,l);Tu=i,l.target.dispatchEvent(i),Tu=null}else return t=ei(l),t!==null&&xf(t),e.blockedOn=l,!1;t.shift()}return!0}function Hf(e,t,l){Pa(e)&&l.delete(t)}function Mm(){Sr=!1,xl!==null&&Pa(xl)&&(xl=null),Dl!==null&&Pa(Dl)&&(Dl=null),Ml!==null&&Pa(Ml)&&(Ml=null),Rn.forEach(Hf),Bn.forEach(Hf)}function eu(e,t){e.blockedOn===t&&(e.blockedOn=null,Sr||(Sr=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Mm)))}var tu=null;function Uf(e){tu!==e&&(tu=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){tu===e&&(tu=null);for(var t=0;t<e.length;t+=3){var l=e[t],i=e[t+1],n=e[t+2];if(typeof i!="function"){if(vr(i||l)===null)continue;break}var a=ei(l);a!==null&&(e.splice(t,3),t-=3,vo(a,{pending:!0,data:n,method:l.method,action:i},i,n))}}))}function _n(e){function t(s){return eu(s,e)}xl!==null&&eu(xl,e),Dl!==null&&eu(Dl,e),Ml!==null&&eu(Ml,e),Rn.forEach(t),Bn.forEach(t);for(var l=0;l<Ol.length;l++){var i=Ol[l];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Ol.length&&(l=Ol[0],l.blockedOn===null);)Of(l),l.blockedOn===null&&Ol.shift();if(l=(e.ownerDocument||e).$$reactFormReplay,l!=null)for(i=0;i<l.length;i+=3){var n=l[i],a=l[i+1],u=n[ot]||null;if(typeof a=="function")u||Uf(l);else if(u){var o=null;if(a&&a.hasAttribute("formAction")){if(n=a,u=a[ot]||null)o=u.formAction;else if(vr(n)!==null)continue}else o=u.action;typeof o=="function"?l[i+1]=o:(l.splice(i,3),i-=3),Uf(l)}}}function Tr(e){this._internalRoot=e}lu.prototype.render=Tr.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var l=t.current,i=vt();Ef(l,i,e,t,null,null)},lu.prototype.unmount=Tr.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ef(e.current,2,null,e,null,null),Na(),t[$l]=null}};function lu(e){this._internalRoot=e}lu.prototype.unstable_scheduleHydration=function(e){if(e){var t=Kr();e={blockedOn:null,target:e,priority:t};for(var l=0;l<Ol.length&&t!==0&&t<Ol[l].priority;l++);Ol.splice(l,0,e),l===0&&Of(e)}};var Rf=d.version;if(Rf!=="19.1.0")throw Error(c(527,Rf,"19.1.0"));B.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=D(t),e=e!==null?w(e):null,e=e===null?null:e.stateNode,e};var Om={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:T,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var iu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!iu.isDisabled&&iu.supportsFiber)try{Li=iu.inject(Om),ft=iu}catch{}}return Nn.createRoot=function(e,t){if(!S(e))throw Error(c(299));var l=!1,i="",n=Ks,a=Ws,u=Js,o=null;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(o=t.unstable_transitionCallbacks)),t=wf(e,1,!1,null,null,l,i,n,a,u,o,null),e[$l]=t.current,ir(e),new Tr(t)},Nn.hydrateRoot=function(e,t,l){if(!S(e))throw Error(c(299));var i=!1,n="",a=Ks,u=Ws,o=Js,s=null,b=null;return l!=null&&(l.unstable_strictMode===!0&&(i=!0),l.identifierPrefix!==void 0&&(n=l.identifierPrefix),l.onUncaughtError!==void 0&&(a=l.onUncaughtError),l.onCaughtError!==void 0&&(u=l.onCaughtError),l.onRecoverableError!==void 0&&(o=l.onRecoverableError),l.unstable_transitionCallbacks!==void 0&&(s=l.unstable_transitionCallbacks),l.formState!==void 0&&(b=l.formState)),t=wf(e,1,!0,t,l??null,i,n,a,u,o,s,b),t.context=zf(null),l=t.current,i=vt(),i=du(i),n=fl(i),n.callback=null,hl(l,n,i),l=i,t.current.lanes=l,ji(t,l),Vt(t),e[$l]=t.current,ir(e),new lu(t)},Nn.version="19.1.0",Nn}var Gf;function qm(){if(Gf)return Er.exports;Gf=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(d){console.error(d)}}return r(),Er.exports=Lm(),Er.exports}var jm=qm();function Ym(r,d,g){return d in r?Object.defineProperty(r,d,{value:g,enumerable:!0,configurable:!0,writable:!0}):r[d]=g,r}function Vf(r,d){var g=Object.keys(r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(r);d&&(c=c.filter(function(S){return Object.getOwnPropertyDescriptor(r,S).enumerable})),g.push.apply(g,c)}return g}function Zf(r){for(var d=1;d<arguments.length;d++){var g=arguments[d]!=null?arguments[d]:{};d%2?Vf(Object(g),!0).forEach(function(c){Ym(r,c,g[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(g)):Vf(Object(g)).forEach(function(c){Object.defineProperty(r,c,Object.getOwnPropertyDescriptor(g,c))})}return r}function Gm(r,d){if(r==null)return{};var g={},c=Object.keys(r),S,O;for(O=0;O<c.length;O++)S=c[O],!(d.indexOf(S)>=0)&&(g[S]=r[S]);return g}function Vm(r,d){if(r==null)return{};var g=Gm(r,d),c,S;if(Object.getOwnPropertySymbols){var O=Object.getOwnPropertySymbols(r);for(S=0;S<O.length;S++)c=O[S],!(d.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(r,c)&&(g[c]=r[c])}return g}function Zm(r,d){return Xm(r)||Qm(r,d)||Km(r,d)||Wm()}function Xm(r){if(Array.isArray(r))return r}function Qm(r,d){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(r)))){var g=[],c=!0,S=!1,O=void 0;try{for(var C=r[Symbol.iterator](),V;!(c=(V=C.next()).done)&&(g.push(V.value),!(d&&g.length===d));c=!0);}catch(D){S=!0,O=D}finally{try{!c&&C.return!=null&&C.return()}finally{if(S)throw O}}return g}}function Km(r,d){if(r){if(typeof r=="string")return Xf(r,d);var g=Object.prototype.toString.call(r).slice(8,-1);if(g==="Object"&&r.constructor&&(g=r.constructor.name),g==="Map"||g==="Set")return Array.from(r);if(g==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(g))return Xf(r,d)}}function Xf(r,d){(d==null||d>r.length)&&(d=r.length);for(var g=0,c=new Array(d);g<d;g++)c[g]=r[g];return c}function Wm(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Jm(r,d,g){return d in r?Object.defineProperty(r,d,{value:g,enumerable:!0,configurable:!0,writable:!0}):r[d]=g,r}function Qf(r,d){var g=Object.keys(r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(r);d&&(c=c.filter(function(S){return Object.getOwnPropertyDescriptor(r,S).enumerable})),g.push.apply(g,c)}return g}function Kf(r){for(var d=1;d<arguments.length;d++){var g=arguments[d]!=null?arguments[d]:{};d%2?Qf(Object(g),!0).forEach(function(c){Jm(r,c,g[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(g)):Qf(Object(g)).forEach(function(c){Object.defineProperty(r,c,Object.getOwnPropertyDescriptor(g,c))})}return r}function Fm(){for(var r=arguments.length,d=new Array(r),g=0;g<r;g++)d[g]=arguments[g];return function(c){return d.reduceRight(function(S,O){return O(S)},c)}}function qn(r){return function d(){for(var g=this,c=arguments.length,S=new Array(c),O=0;O<c;O++)S[O]=arguments[O];return S.length>=r.length?r.apply(this,S):function(){for(var C=arguments.length,V=new Array(C),D=0;D<C;D++)V[D]=arguments[D];return d.apply(g,[].concat(S,V))}}}function ru(r){return{}.toString.call(r).includes("Object")}function Im(r){return!Object.keys(r).length}function Yn(r){return typeof r=="function"}function $m(r,d){return Object.prototype.hasOwnProperty.call(r,d)}function Pm(r,d){return ru(d)||Rl("changeType"),Object.keys(d).some(function(g){return!$m(r,g)})&&Rl("changeField"),d}function ep(r){Yn(r)||Rl("selectorType")}function tp(r){Yn(r)||ru(r)||Rl("handlerType"),ru(r)&&Object.values(r).some(function(d){return!Yn(d)})&&Rl("handlersType")}function lp(r){r||Rl("initialIsRequired"),ru(r)||Rl("initialType"),Im(r)&&Rl("initialContent")}function ip(r,d){throw new Error(r[d]||r.default)}var np={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},Rl=qn(ip)(np),nu={changes:Pm,selector:ep,handler:tp,initial:lp};function ap(r){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};nu.initial(r),nu.handler(d);var g={current:r},c=qn(rp)(g,d),S=qn(op)(g),O=qn(nu.changes)(r),C=qn(up)(g);function V(){var w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(_){return _};return nu.selector(w),w(g.current)}function D(w){Fm(c,S,O,C)(w)}return[V,D]}function up(r,d){return Yn(d)?d(r.current):d}function op(r,d){return r.current=Kf(Kf({},r.current),d),d}function rp(r,d,g){return Yn(d)?d(r.current):Object.keys(g).forEach(function(c){var S;return(S=d[c])===null||S===void 0?void 0:S.call(d,r.current[c])}),g}var cp={create:ap},sp={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs"}};function dp(r){return function d(){for(var g=this,c=arguments.length,S=new Array(c),O=0;O<c;O++)S[O]=arguments[O];return S.length>=r.length?r.apply(this,S):function(){for(var C=arguments.length,V=new Array(C),D=0;D<C;D++)V[D]=arguments[D];return d.apply(g,[].concat(S,V))}}}function fp(r){return{}.toString.call(r).includes("Object")}function hp(r){return r||Wf("configIsRequired"),fp(r)||Wf("configType"),r.urls?(gp(),{paths:{vs:r.urls.monacoBase}}):r}function gp(){console.warn(lh.deprecation)}function mp(r,d){throw new Error(r[d]||r.default)}var lh={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},Wf=dp(mp)(lh),pp={config:hp},bp=function(){for(var d=arguments.length,g=new Array(d),c=0;c<d;c++)g[c]=arguments[c];return function(S){return g.reduceRight(function(O,C){return C(O)},S)}};function ih(r,d){return Object.keys(d).forEach(function(g){d[g]instanceof Object&&r[g]&&Object.assign(d[g],ih(r[g],d[g]))}),Zf(Zf({},r),d)}var yp={type:"cancelation",msg:"operation is manually canceled"};function Mr(r){var d=!1,g=new Promise(function(c,S){r.then(function(O){return d?S(yp):c(O)}),r.catch(S)});return g.cancel=function(){return d=!0},g}var vp=cp.create({config:sp,isInitialized:!1,resolve:null,reject:null,monaco:null}),nh=Zm(vp,2),Vn=nh[0],cu=nh[1];function Sp(r){var d=pp.config(r),g=d.monaco,c=Vm(d,["monaco"]);cu(function(S){return{config:ih(S.config,c),monaco:g}})}function Tp(){var r=Vn(function(d){var g=d.monaco,c=d.isInitialized,S=d.resolve;return{monaco:g,isInitialized:c,resolve:S}});if(!r.isInitialized){if(cu({isInitialized:!0}),r.monaco)return r.resolve(r.monaco),Mr(Or);if(window.monaco&&window.monaco.editor)return ah(window.monaco),r.resolve(window.monaco),Mr(Or);bp(wp,Ep)(Ap)}return Mr(Or)}function wp(r){return document.body.appendChild(r)}function zp(r){var d=document.createElement("script");return r&&(d.src=r),d}function Ep(r){var d=Vn(function(c){var S=c.config,O=c.reject;return{config:S,reject:O}}),g=zp("".concat(d.config.paths.vs,"/loader.js"));return g.onload=function(){return r()},g.onerror=d.reject,g}function Ap(){var r=Vn(function(g){var c=g.config,S=g.resolve,O=g.reject;return{config:c,resolve:S,reject:O}}),d=window.require;d.config(r.config),d(["vs/editor/editor.main"],function(g){ah(g),r.resolve(g)},function(g){r.reject(g)})}function ah(r){Vn().monaco||cu({monaco:r})}function xp(){return Vn(function(r){var d=r.monaco;return d})}var Or=new Promise(function(r,d){return cu({resolve:r,reject:d})}),uh={config:Sp,init:Tp,__getMonacoInstance:xp},Dp={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},Hr=Dp,Mp={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},Op=Mp;function Hp({children:r}){return Ul.createElement("div",{style:Op.container},r)}var Up=Hp,Rp=Up;function Bp({width:r,height:d,isEditorReady:g,loading:c,_ref:S,className:O,wrapperProps:C}){return Ul.createElement("section",{style:{...Hr.wrapper,width:r,height:d},...C},!g&&Ul.createElement(Rp,null,c),Ul.createElement("div",{ref:S,style:{...Hr.fullWidth,...!g&&Hr.hide},className:O}))}var kp=Bp,oh=$.memo(kp);function _p(r){$.useEffect(r,[])}var rh=_p;function Cp(r,d,g=!0){let c=$.useRef(!0);$.useEffect(c.current||!g?()=>{c.current=!1}:r,d)}var Tt=Cp;function jn(){}function Ni(r,d,g,c){return Np(r,c)||Lp(r,d,g,c)}function Np(r,d){return r.editor.getModel(ch(r,d))}function Lp(r,d,g,c){return r.editor.createModel(d,g,c?ch(r,c):void 0)}function ch(r,d){return r.Uri.parse(d)}function qp({original:r,modified:d,language:g,originalLanguage:c,modifiedLanguage:S,originalModelPath:O,modifiedModelPath:C,keepCurrentOriginalModel:V=!1,keepCurrentModifiedModel:D=!1,theme:w="light",loading:_="Loading...",options:Q={},height:F="100%",width:Se="100%",className:xe,wrapperProps:Te={},beforeMount:ze=jn,onMount:Ke=jn}){let[ee,ue]=$.useState(!1),[De,G]=$.useState(!0),se=$.useRef(null),le=$.useRef(null),Ee=$.useRef(null),he=$.useRef(Ke),ae=$.useRef(ze),qe=$.useRef(!1);rh(()=>{let W=uh.init();return W.then(T=>(le.current=T)&&G(!1)).catch(T=>T?.type!=="cancelation"&&console.error("Monaco initialization: error:",T)),()=>se.current?it():W.cancel()}),Tt(()=>{if(se.current&&le.current){let W=se.current.getOriginalEditor(),T=Ni(le.current,r||"",c||g||"text",O||"");T!==W.getModel()&&W.setModel(T)}},[O],ee),Tt(()=>{if(se.current&&le.current){let W=se.current.getModifiedEditor(),T=Ni(le.current,d||"",S||g||"text",C||"");T!==W.getModel()&&W.setModel(T)}},[C],ee),Tt(()=>{let W=se.current.getModifiedEditor();W.getOption(le.current.editor.EditorOption.readOnly)?W.setValue(d||""):d!==W.getValue()&&(W.executeEdits("",[{range:W.getModel().getFullModelRange(),text:d||"",forceMoveMarkers:!0}]),W.pushUndoStop())},[d],ee),Tt(()=>{se.current?.getModel()?.original.setValue(r||"")},[r],ee),Tt(()=>{let{original:W,modified:T}=se.current.getModel();le.current.editor.setModelLanguage(W,c||g||"text"),le.current.editor.setModelLanguage(T,S||g||"text")},[g,c,S],ee),Tt(()=>{le.current?.editor.setTheme(w)},[w],ee),Tt(()=>{se.current?.updateOptions(Q)},[Q],ee);let He=$.useCallback(()=>{if(!le.current)return;ae.current(le.current);let W=Ni(le.current,r||"",c||g||"text",O||""),T=Ni(le.current,d||"",S||g||"text",C||"");se.current?.setModel({original:W,modified:T})},[g,d,S,r,c,O,C]),Ge=$.useCallback(()=>{!qe.current&&Ee.current&&(se.current=le.current.editor.createDiffEditor(Ee.current,{automaticLayout:!0,...Q}),He(),le.current?.editor.setTheme(w),ue(!0),qe.current=!0)},[Q,w,He]);$.useEffect(()=>{ee&&he.current(se.current,le.current)},[ee]),$.useEffect(()=>{!De&&!ee&&Ge()},[De,ee,Ge]);function it(){let W=se.current?.getModel();V||W?.original?.dispose(),D||W?.modified?.dispose(),se.current?.dispose()}return Ul.createElement(oh,{width:Se,height:F,isEditorReady:ee,loading:_,_ref:Ee,className:xe,wrapperProps:Te})}var jp=qp;$.memo(jp);function Yp(r){let d=$.useRef();return $.useEffect(()=>{d.current=r},[r]),d.current}var Gp=Yp,au=new Map;function Vp({defaultValue:r,defaultLanguage:d,defaultPath:g,value:c,language:S,path:O,theme:C="light",line:V,loading:D="Loading...",options:w={},overrideServices:_={},saveViewState:Q=!0,keepCurrentModel:F=!1,width:Se="100%",height:xe="100%",className:Te,wrapperProps:ze={},beforeMount:Ke=jn,onMount:ee=jn,onChange:ue,onValidate:De=jn}){let[G,se]=$.useState(!1),[le,Ee]=$.useState(!0),he=$.useRef(null),ae=$.useRef(null),qe=$.useRef(null),He=$.useRef(ee),Ge=$.useRef(Ke),it=$.useRef(),W=$.useRef(c),T=Gp(O),B=$.useRef(!1),Y=$.useRef(!1);rh(()=>{let E=uh.init();return E.then(U=>(he.current=U)&&Ee(!1)).catch(U=>U?.type!=="cancelation"&&console.error("Monaco initialization: error:",U)),()=>ae.current?f():E.cancel()}),Tt(()=>{let E=Ni(he.current,r||c||"",d||S||"",O||g||"");E!==ae.current?.getModel()&&(Q&&au.set(T,ae.current?.saveViewState()),ae.current?.setModel(E),Q&&ae.current?.restoreViewState(au.get(O)))},[O],G),Tt(()=>{ae.current?.updateOptions(w)},[w],G),Tt(()=>{!ae.current||c===void 0||(ae.current.getOption(he.current.editor.EditorOption.readOnly)?ae.current.setValue(c):c!==ae.current.getValue()&&(Y.current=!0,ae.current.executeEdits("",[{range:ae.current.getModel().getFullModelRange(),text:c,forceMoveMarkers:!0}]),ae.current.pushUndoStop(),Y.current=!1))},[c],G),Tt(()=>{let E=ae.current?.getModel();E&&S&&he.current?.editor.setModelLanguage(E,S)},[S],G),Tt(()=>{V!==void 0&&ae.current?.revealLine(V)},[V],G),Tt(()=>{he.current?.editor.setTheme(C)},[C],G);let ce=$.useCallback(()=>{if(!(!qe.current||!he.current)&&!B.current){Ge.current(he.current);let E=O||g,U=Ni(he.current,c||r||"",d||S||"",E||"");ae.current=he.current?.editor.create(qe.current,{model:U,automaticLayout:!0,...w},_),Q&&ae.current.restoreViewState(au.get(E)),he.current.editor.setTheme(C),V!==void 0&&ae.current.revealLine(V),se(!0),B.current=!0}},[r,d,g,c,S,O,w,_,Q,C,V]);$.useEffect(()=>{G&&He.current(ae.current,he.current)},[G]),$.useEffect(()=>{!le&&!G&&ce()},[le,G,ce]),W.current=c,$.useEffect(()=>{G&&ue&&(it.current?.dispose(),it.current=ae.current?.onDidChangeModelContent(E=>{Y.current||ue(ae.current.getValue(),E)}))},[G,ue]),$.useEffect(()=>{if(G){let E=he.current.editor.onDidChangeMarkers(U=>{let R=ae.current.getModel()?.uri;if(R&&U.find(L=>L.path===R.path)){let L=he.current.editor.getModelMarkers({resource:R});De?.(L)}});return()=>{E?.dispose()}}return()=>{}},[G,De]);function f(){it.current?.dispose(),F?Q&&au.set(O,ae.current.saveViewState()):ae.current.getModel()?.dispose(),ae.current.dispose()}return Ul.createElement(oh,{width:Se,height:xe,isEditorReady:G,loading:D,_ref:qe,className:Te,wrapperProps:ze})}var Zp=Vp,Xp=$.memo(Zp),Qp=Xp;const Ur=[`<!DOCTYPE html>
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

<img src = "https://m.media-amazon.com/images/I/71WZ2kqPG3L.jpg" width = 300>
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

<h3>🎯 Studienziel – Aufgabe im Code Editor</h3>

<p>In dieser Übung lernst du, wie man eine einfache Webseite mit HTML und CSS erstellt. Du wirst eine Überschrift definieren und sie mit einer Farbe formatieren.</p>

<h4>Schritt-für-Schritt-Anleitung:</h4>
<ol>
  <li>Öffne deinen Code-Editor und erstelle ein neues HTML-Dokument.</li>
  <li>Schreibe den grundlegenden Aufbau mit <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>, und <code>&lt;body&gt;</code>-Bereichen.</li>
  <li>Im <code>&lt;head&gt;</code>-Teil fügst du einen <code>&lt;style&gt;</code>-Block ein, um CSS direkt in der HTML-Datei zu schreiben.</li>
  <li>Verwende einen Selektor für den <code>h1</code>-Tag, da du eine große Überschrift formatieren möchtest.</li>
  <li>Innerhalb der geschweiften Klammern gibst du eine Regel an, um die Textfarbe zu ändern:
    <ul>
      <li>Nutze <code>color</code> als Eigenschaft.</li>
      <li>Wähle eine benannte Farbe wie <strong>blau</strong> (Englisch: <code>blue</code>).</li>
      <li>Vergiss das <strong>Semikolon</strong> am Ende der Anweisung nicht.</li>
    </ul>
  </li>
  <li>Im <code>&lt;body&gt;</code>-Teil deiner Datei schreibe einen <code>h1</code>-Tag mit einem beliebigen Text, z. B. „Hello, blue!“</li>
  <li>Speichere die Datei und öffne sie im Browser.</li>
  <li>Überprüfe, ob die Überschrift in der gewünschten Farbe angezeigt wird.</li>
</ol>

<h4>Hinweis:</h4>
<p>Wenn deine Überschrift keine Farbe hat, prüfe Folgendes:</p>
<ul>
  <li>Hast du die richtige Eigenschaft und einen gültigen Farbnamen verwendet?</li>
  <li>Hast du das Semikolon am Ende der CSS-Zeile gesetzt?</li>
  <li>Ist dein <code>&lt;style&gt;</code>-Block korrekt innerhalb des <code>&lt;head&gt;</code>-Bereichs eingefügt?</li>
</ul>

<hr />

<h4>English Translation:</h4>
<ul>
  <li><em>Learning goal – task in the code editor</em></li>
  <li><em>In this exercise, you’ll learn how to create a simple web page using HTML and CSS. You will define a heading and format it with a color.</em></li>
</ul>

<p><em>Step-by-step instructions:</em></p>
<ol>
  <li><em>Open your code editor and create a new HTML document.</em></li>
  <li><em>Write the basic structure using &lt;html&gt;, &lt;head&gt;, and &lt;body&gt; sections.</em></li>
  <li><em>In the &lt;head&gt; section, insert a &lt;style&gt; block to write CSS directly in the HTML file.</em></li>
  <li><em>Use a selector for the h1 tag, since you want to format a large heading.</em></li>
  <li><em>Inside curly braces, write a rule to change the text color:</em>
    <ul>
      <li><em>Use <code>color</code> as the property.</em></li>
      <li><em>Choose a named color like <code>blue</code>.</em></li>
      <li><em>Don’t forget the semicolon at the end of the line.</em></li>
    </ul>
  </li>
  <li><em>In the &lt;body&gt; part, write an h1 tag with any text, such as “Hello, blue!”</em></li>
  <li><em>Save the file and open it in a browser.</em></li>
  <li><em>Check if the heading is displayed in the desired color.</em></li>
</ol>

<p><em>Tip:</em></p>
<ul>
  <li><em>If your heading doesn't change color, check the following:</em></li>
  <li><em>Did you use the correct property and a valid color name?</em></li>
  <li><em>Did you include the semicolon at the end of the CSS line?</em></li>
  <li><em>Is your &lt;style&gt; block correctly placed inside the &lt;head&gt; section?</em></li>
</ul>
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

<h3>🧠 A.I. Tutor Additional Review</h3>

<p>Let’s slow this down and break it into clear, practical ideas — because <strong>this part of CSS is actually really powerful once it clicks</strong>.</p>

<hr />

<h4>🎯 What are Selectors?</h4>
<p>Think of a <em>selector</em> as <strong>who</strong> you’re talking to in your CSS file.</p>
<p>You're saying:<br />
<em>"Hey, I want to style <strong>these</strong> parts of my webpage."</em></p>

<p>Here are the types of selectors you’ve just met:</p>

<hr />

<h4>1. Tag Selectors – The Basics</h4>
<p>When you use just the name of a tag, like <code>h1</code>, it applies the rule to <strong>all</strong> those tags.</p>

<pre><code>h1 {
  color: blue;
}
</code></pre>

<p>This will make <strong>every &lt;h1&gt; on the page blue</strong>.<br />
No symbols, just the tag name.</p>

<hr />

<h4>2. ID Selectors – One Specific Thing</h4>
<p>If you want to target <strong>only one unique element</strong>, use an <code>id</code>. In CSS, you write that with a <code>#</code>:</p>

<pre><code>#main-title {
  text-align: center;
}
</code></pre>

<p>And in HTML, it would look like this:</p>

<pre><code>&lt;h1 id="main-title"&gt;Welcome&lt;/h1&gt;
</code></pre>

<p><strong>Use IDs only once per page</strong> – they’re meant to be unique!</p>

<hr />

<h4>3. Class Selectors – Style Many at Once</h4>
<p>When you want to style <strong>several elements the same way</strong>, give them a class.</p>

<pre><code>.highlight {
  background-color: yellow;
}
</code></pre>

<pre><code>&lt;p class="highlight"&gt;This is important!&lt;/p&gt;
&lt;span class="highlight"&gt;So is this!&lt;/span&gt;
</code></pre>

<p>In CSS, class names start with a <strong>dot</strong> (<code>.</code>).<br />
You can reuse a class as much as you want.</p>

<hr />

<h4>4. Combinations – Be More Specific</h4>
<p>You can mix tag, id, and class in one selector:</p>

<pre><code>p.note { font-style: italic; }      /* A &lt;p&gt; with class="note" */
div#header { padding: 20px; }       /* A &lt;div&gt; with id="header" */
#menu.active { display: block; }    /* An element with both id and class */
</code></pre>

<p>This helps you target <em>just the right element</em>.</p>

<hr />

<h4>5. Groups of Selectors – One Style, Many Targets</h4>
<p>You can apply the same style to multiple things at once by listing them with commas:</p>

<pre><code>p, .highlight, #main-title {
  color: purple;
}
</code></pre>

<p>This rule sets the text color to purple for:</p>
<ul>
  <li>all <code>&lt;p&gt;</code> tags</li>
  <li>anything with class <code>highlight</code></li>
  <li>the element with ID <code>main-title</code></li>
</ul>

<hr />

<h4>6. Pseudoselectors – Reacting to Behavior</h4>
<p>These selectors let you style elements in special states — like when someone hovers their mouse or visits a link:</p>

<pre><code>a:link { color: blue; }
a:visited { color: purple; }
a:hover { color: red; }
</code></pre>

<p>These can make your page <strong>feel more interactive</strong>.</p>

<hr />

<h3>✍️ Formatting Rules (How You Style)</h3>
<p>Now that you know <strong>what</strong> you're styling, here’s <strong>how</strong> to write the rules:</p>

<p>Each CSS rule follows this format:</p>

<pre><code>selector {
  property: value;
}
</code></pre>

<p>For example:</p>

<pre><code>p {
  font-size: 18px;
  color: darkgreen;
  text-align: justify;
}
</code></pre>

<p><strong>Important rules to follow:</strong></p>
<ul>
  <li>Each property ends with a <strong>semicolon</strong> <code>;</code></li>
  <li>Everything goes between <strong>curly brackets</strong> <code>{ }</code></li>
  <li>Use real property names like:
    <ul>
      <li><code>font-size</code>, <code>color</code>, <code>text-align</code></li>
      <li><code>background-color</code>, <code>width</code>, <code>height</code></li>
    </ul>
  </li>
</ul>

<hr />

<h3>🔍 Why this is cool:</h3>
<p>By mixing selectors and rules, you can build your own <strong>design system</strong>.<br />
No more repeating the same code over and over in HTML — just define it once in CSS and apply it with a class or ID.</p>

<p>This is how real websites stay clean, powerful, and flexible.</p>

<h3>🎯 Studienziel – Aufgabe im Code Editor</h3>

<p>In dieser Übung wirst du lernen, wie du eine HTML-Seite mit verschiedenen CSS-Selektoren gestalten kannst. Du wirst die Unterschiede zwischen <strong>Tag-Selektoren</strong>, <strong>Klassen-Selektoren</strong> und <strong>ID-Selektoren</strong> praktisch anwenden.</p>

<h4>Schritt-für-Schritt-Anleitung:</h4>
<ol>
  <li>Öffne deinen Code-Editor und beginne mit einer leeren HTML-Datei.</li>
  <li>Erstelle im <code>&lt;head&gt;</code>-Bereich einen <code>&lt;style&gt;</code>-Block. In diesem Bereich schreibst du deine CSS-Regeln.</li>
  <li>Schreibe zuerst eine Regel für das Tag <code>p</code>, um die Schriftfarbe für alle Absätze zu setzen. Verwende den Farbwert <strong>green</strong>.</li>
  <li>Danach erstellst du eine Regel für eine Klasse mit dem Namen <code>highlight</code>.
    <ul>
      <li>Die Schrift soll <strong>fett</strong> sein.</li>
      <li>Die Farbe des Textes soll <strong>yellow</strong> sein.</li>
      <li>Der Hintergrund soll <strong>black</strong> sein.</li>
    </ul>
  </li>
  <li>Dann erstellst du eine Regel für eine ID mit dem Namen <code>main-title</code>.
    <ul>
      <li>Die Schriftfarbe soll <strong>blue</strong> sein.</li>
      <li>Der Text soll <strong>zentriert</strong> werden.</li>
    </ul>
  </li>
  <li>Gehe in den <code>&lt;body&gt;</code>-Bereich.
    <ul>
      <li>Füge eine Hauptüberschrift mit dem <code>h1</code>-Tag ein und gib ihr die ID <code>main-title</code>.</li>
      <li>Der Text muss <strong>genau</strong> lauten:<br /><strong>Welcome to CSS Land</strong></li>
      <li>Füge eine zweite <code>h1</code>-Überschrift darunter ein mit dem Text:<br /><strong>Watch and be amazed!</strong></li>
    </ul>
  </li>
  <li>Füge zwei Absätze (<code>&lt;p&gt;</code>) hinzu:
    <ul>
      <li>Der erste Absatz enthält den Text: <strong>Swamp letters!</strong></li>
      <li>Der zweite Absatz verwendet die Klasse <code>highlight</code> und hat den Text: <strong>Spooky looking highlight!</strong></li>
    </ul>
  </li>
  <li>Achte darauf, dass alle Texte und Klassennamen <strong>buchstabengetreu</strong> geschrieben sind. Groß- und Kleinschreibung muss exakt stimmen.</li>
  <li>Speichere die Datei, öffne sie im Browser und vergleiche mit der Musterlösung.</li>
</ol>

<hr />

<h4>English Translation:</h4>
<ul>
  <li><em>Learning goal – task in the code editor</em></li>
  <li><em>In this exercise, you’ll learn how to style a webpage using tag, class, and ID selectors. You’ll apply each one correctly through hands-on practice.</em></li>
</ul>

<p><em>Step-by-step instructions:</em></p>
<ol>
  <li><em>Open your code editor and start with a blank HTML file.</em></li>
  <li><em>In the <code>&lt;head&gt;</code> section, create a <code>&lt;style&gt;</code> block. This is where your CSS rules go.</em></li>
  <li><em>Write a rule for the <code>p</code> tag to set the text color to <strong>green</strong> for all paragraphs.</em></li>
  <li><em>Next, create a rule for a class called <code>highlight</code>:</em>
    <ul>
      <li><em>Make the text bold.</em></li>
      <li><em>Set the text color to <strong>yellow</strong>.</em></li>
      <li><em>Set the background color to <strong>black</strong>.</em></li>
    </ul>
  </li>
  <li><em>Now write a rule for an ID named <code>main-title</code>:</em>
    <ul>
      <li><em>Set the text color to <strong>blue</strong>.</em></li>
      <li><em>Center the text.</em></li>
    </ul>
  </li>
  <li><em>In the <code>&lt;body&gt;</code> section:</em>
    <ul>
      <li><em>Add an <code>h1</code> heading with the ID <code>main-title</code> and the exact text:<br /><strong>Welcome to CSS Land</strong></em></li>
      <li><em>Below it, add another <code>h1</code> heading with the text:<br /><strong>Watch and be amazed!</strong></em></li>
    </ul>
  </li>
  <li><em>Add two <code>p</code> paragraphs:</em>
    <ul>
      <li><em>The first one should say: <strong>Swamp letters!</strong></em></li>
      <li><em>The second one should use the class <code>highlight</code> and say: <strong>Spooky looking highlight!</strong></em></li>
    </ul>
  </li>
  <li><em>Make sure every word, space, and capitalization matches the instructions exactly.</em></li>
  <li><em>Save the file, open it in the browser, and compare it to the expected result.</em></li>
</ol>`,`<h3>CSS: font-size und line-height</h3>

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


<h3>🎯 Studienziel – Aufgabe im Code Editor</h3>

<p>In dieser Aufgabe wirst du mit drei CSS-Klassen arbeiten, um unterschiedliche Schriftgrößen darzustellen. Du verwendest dafür die Einheiten <code>px</code>, <code>em</code> und <code>rem</code>.</p>

<h4>Schritt-für-Schritt-Anleitung:</h4>
<ol>
  <li>Schreibe im <code>&lt;head&gt;</code>-Bereich einen <code>&lt;style&gt;</code>-Block mit drei Klassen:
    <ul>
      <li><code>small</code> mit <code>font-size: 12px</code></li>
      <li><code>medium</code> mit <code>font-size: 1em</code></li>
      <li><code>large</code> mit <code>font-size: 2rem</code></li>
    </ul>
  </li>
  <li>Wechsle in den <code>&lt;body&gt;</code>-Bereich.</li>
  <li>Erstelle drei <code>&lt;p&gt;</code>-Elemente:
    <ul>
      <li>Das erste verwendet die Klasse <code>small</code> und enthält den Text: <strong>Oh!</strong></li>
      <li>Das zweite verwendet die Klasse <code>medium</code> und enthält den Text: <strong>Oh Lawd-</strong></li>
      <li>Das dritte verwendet die Klasse <code>large</code> und enthält den Text: <strong>OH LAWD HE COMIN 🐈</strong></li>
    </ul>
  </li>
  <li>Achte darauf, dass alle Klassennamen, Texte und Sonderzeichen <strong>exakt</strong> geschrieben sind – inklusive Großbuchstaben, Bindestrichen und Emoji.</li>
  <li>Überprüfe deine Ausgabe sorgfältig und vergleiche sie mit der Vorgabe.</li>
</ol>

<hr />

<h4>English Translation:</h4>
<ul>
  <li><em>Learning goal – task in the code editor</em></li>
  <li><em>In this task, you'll use three CSS classes to display different font sizes. You'll apply the units <code>px</code>, <code>em</code>, and <code>rem</code>.</em></li>
</ul>

<p><em>Step-by-step instructions:</em></p>
<ol>
  <li><em>In the <code>&lt;head&gt;</code> section, write a <code>&lt;style&gt;</code> block with three classes:</em>
    <ul>
      <li><em><code>small</code> with <code>font-size: 12px</code></em></li>
      <li><em><code>medium</code> with <code>font-size: 1em</code></em></li>
      <li><em><code>large</code> with <code>font-size: 2rem</code></em></li>
    </ul>
  </li>
  <li><em>In the <code>&lt;body&gt;</code> section, create three <code>&lt;p&gt;</code> elements:</em>
    <ul>
      <li><em>The first uses the class <code>small</code> and says: <strong>Oh!</strong></em></li>
      <li><em>The second uses the class <code>medium</code> and says: <strong>Oh Lawd-</strong></em></li>
      <li><em>The third uses the class <code>large</code> and says: <strong>OH LAWD HE COMIN 🐈</strong></em></li>
    </ul>
  </li>
  <li><em>Make sure all class names, text, punctuation, and emoji are typed exactly as shown.</em></li>
  <li><em>Carefully check your output and compare it to the model.</em></li>
</ol>
`,`<h3>CSS-Defaults sichtbar machen</h3>

<pre><code class="language-html">
&lt;style&gt;
  body {
    border: 1px dashed black;
  }f

  h1 {
    border: 1px solid red;
  }

  p {
    border: 1px solid green;
  }
&lt;/style&gt;
</code></pre>



<h3>🧠 A.I. Tutor Additional Review</h3>

<p>This lesson introduces a powerful way to understand how HTML elements behave in the browser — by making their invisible boundaries <strong>visually visible</strong> using borders.</p>

<hr />

<h4>📦 Every Element Is a Box — Even If You Can’t See It</h4>

<p>When a webpage loads, the browser automatically applies <strong>default styles</strong> to elements like <code>&lt;body&gt;</code>, <code>&lt;h1&gt;</code>, and <code>&lt;p&gt;</code>. These styles often include things like margin and spacing — but they’re not always easy to see.</p>

<p>That’s where CSS borders come in. By adding borders, it becomes easier to understand:</p>
<ul>
  <li>How much space each element takes up</li>
  <li>Where the browser adds default margins or padding</li>
  <li>How elements are stacked on the page</li>
</ul>

<hr />

<h4>🎨 What the CSS in this lesson does:</h4>

<pre><code>body {
  border: 1px dashed black;
}

h1 {
  border: 1px solid red;
}

p {
  border: 1px solid green;
}
</code></pre>

<p>Here’s what each rule is doing:</p>
<ul>
  <li>The <code>&lt;body&gt;</code> tag is outlined with a <strong>black dashed border</strong>, showing the entire content area of the page.</li>
  <li>All <code>&lt;h1&gt;</code> elements are outlined with a <strong>solid red border</strong>, making their spacing and size easy to observe.</li>
  <li>All <code>&lt;p&gt;</code> elements are outlined with a <strong>solid green border</strong>, clearly showing their vertical space.</li>
</ul>

<p>This technique doesn’t change how the elements behave — it simply helps visualize the structure.</p>

<hr />

<h4>🧪 Why It Matters</h4>

<p>By turning on borders temporarily, developers and learners can:</p>
<ul>
  <li>See the <strong>true layout</strong> of a page</li>
  <li>Understand spacing and stacking</li>
  <li>Debug confusing visual issues</li>
  <li>Observe the browser’s default behavior before applying custom styles</li>
</ul>

<p>It’s like turning on "developer goggles" — useful for checking margins, testing layout flow, or seeing how text wraps inside elements.</p>

<hr />

<h4>💡 Pro Tip</h4>

<p>This is a common technique even among experienced developers. Borders are often used temporarily during development and removed once the layout is finalized.</p>

<p>It’s especially helpful when combining with <code>margin</code>, <code>padding</code>, or <code>display</code> rules — making invisible layout behavior easy to observe.</p>

<hr />

<p><em>Let me know if you want a short hands-on practice that extends this lesson using color, padding, or box model inspection!</em></p>



<h3>🎯 Studienziel – Aufgabe im Code Editor</h3>

<p>In dieser Aufgabe lernst du, wie du mit CSS die Begrenzungen von HTML-Elementen sichtbar machst. Du wirst einen Absatz außerhalb und einen innerhalb eines <code>div</code>-Blocks platzieren und beide mit Rahmen versehen.</p>

<h4>Schritt-für-Schritt-Anleitung:</h4>
<ol>
  <li>Schreibe zuerst einen <code>&lt;style&gt;</code>-Block.
    <ul>
      <li>Füge eine Regel hinzu, die allen <code>p</code>-Elementen einen <strong>grünen, durchgehenden Rahmen</strong> gibt: <code>border: 1px solid green;</code></li>
      <li>Füge eine zweite Regel hinzu, die allen <code>div</code>-Elementen einen <strong>blauen, durchgehenden Rahmen</strong> gibt: <code>border: 1px solid blue;</code></li>
    </ul>
  </li>
  <li>Direkt unter dem <code>&lt;style&gt;</code>-Block:
    <ul>
      <li>Erstelle ein einzelnes <code>&lt;p&gt;</code>-Element mit dem exakten Text:<br><strong>Sentence without a home :(</strong></li>
    </ul>
  </li>
  <li>Füge danach ein <code>&lt;div&gt;</code>-Element ein.
    <ul>
      <li>Innerhalb des <code>div</code> steht ein weiteres <code>&lt;p&gt;</code>-Element mit dem exakten Text:<br><strong>Sentence with a home :)</strong></li>
    </ul>
  </li>
  <li>Achte besonders auf die <strong>exakte Schreibweise</strong>: Groß- und Kleinschreibung, Leerzeichen, Doppelpunkte und Emojis müssen stimmen.</li>
  <li>Gib keine weiteren HTML-Strukturen an – es darf nur das stehen, was hier verlangt ist.</li>
</ol>

<hr />

<h4>English Translation:</h4>
<ul>
  <li><em>Learning goal – task in the code editor</em></li>
  <li><em>In this task, you’ll use CSS to make element boundaries visible. You’ll place one paragraph outside a <code>div</code>, and one inside, with borders applied to both.</em></li>
</ul>

<p><em>Step-by-step instructions:</em></p>
<ol>
  <li><em>Start with a <code>&lt;style&gt;</code> block.</em>
    <ul>
      <li><em>Add a rule that gives all <code>p</code> elements a green solid border: <code>border: 1px solid green;</code></em></li>
      <li><em>Add another rule that gives all <code>div</code> elements a blue solid border: <code>border: 1px solid blue;</code></em></li>
    </ul>
  </li>
  <li><em>Directly below the <code>&lt;style&gt;</code> block:</em>
    <ul>
      <li><em>Create a single <code>&lt;p&gt;</code> element with the exact text:<br><strong>Sentence without a home :(</strong></em></li>
    </ul>
  </li>
  <li><em>Then add a <code>&lt;div&gt;</code> element.</em>
    <ul>
      <li><em>Inside the <code>div</code>, place a <code>&lt;p&gt;</code> with the exact text:<br><strong>Sentence with a home :)</strong></em></li>
    </ul>
  </li>
  <li><em>Be very careful with spelling, spacing, colons, and emoji.</em></li>
  <li><em>Do not include any extra HTML structure — only the lines shown in these steps should be written.</em></li>
</ol>



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


<h3>🎯 Studienziel – Aufgabe im Code Editor</h3>

<p>Erstelle ein Layout mit vier verschiedenen <code>margin</code>-Varianten mithilfe von CSS-Klassen. Jede Klasse soll eine andere Kurzschreibweise für <code>margin</code> verwenden und mit einer bestimmten Hintergrundfarbe versehen werden.</p>

<ul>
  <li>Erstelle einen <code>&lt;style&gt;</code>-Block ganz oben.</li>
  <li>Lege <strong>vier CSS-Klassen</strong> an:
    <ul>
      <li><code>box1</code> verwendet <code>margin: 20px;</code> und <code>background-color: lightcoral;</code></li>
      <li><code>box2</code> verwendet <code>margin: 10px 20px;</code> und <code>background-color: lightgreen;</code></li>
      <li><code>box3</code> verwendet <code>margin: 10px 15px 20px;</code> und <code>background-color: lightblue;</code></li>
      <li><code>box4</code> verwendet <code>margin: 5px 10px 15px 20px;</code> und <code>background-color: lightgoldenrodyellow;</code></li>
    </ul>
  </li>
  <li>Danach erstellst du den sichtbaren Bereich mit folgendem Inhalt:
    <ul>
      <li>Eine Überschrift <code>&lt;h1&gt;</code> mit dem Text <strong>Dream Sandwich:</strong></li>
      <li>Füge <strong>fünf</strong> <code>&lt;div&gt;</code>-Elemente unter der Überschrift ein, jede mit einer der obigen Klassen.</li>
    </ul>
  </li>
  <li>Die <strong>genauen Inhalte</strong> der Boxen:
    <ul>
      <li><code>box4</code> → <code>Bread</code></li>
      <li><code>box1</code> → <code>Meat</code></li>
      <li><code>box2</code> → <code>Lettuce</code></li>
      <li><code>box3</code> → <code>Smurf Meat</code></li>
      <li><code>box4</code> → <code>Bread</code> (noch einmal)</li>
    </ul>
  </li>
  <li>Achte darauf:
    <ul>
      <li>dass die <strong>Klassenbezeichnungen exakt stimmen</strong></li>
      <li>dass die <strong>Texte exakt geschrieben sind</strong></li>
      <li>dass <strong>keine Kommentare</strong> vorhanden sind</li>
    </ul>
  </li>
</ul>

<h4><em>English Translation:</em></h4>
<ul>
  <li><em>Create a layout using four different <code>margin</code> shorthand styles with CSS classes.</em></li>
  <li><em>Each class should have a specific <code>margin</code> value and a unique background color.</em></li>
  <li><em>Start with a <code>&lt;style&gt;</code> block.</em></li>
  <li><em>Define four CSS classes with the following properties:</em>
    <ul>
      <li><em><code>box1</code>: <code>margin: 20px;</code> and <code>background-color: lightcoral;</code></em></li>
      <li><em><code>box2</code>: <code>margin: 10px 20px;</code> and <code>background-color: lightgreen;</code></em></li>
      <li><em><code>box3</code>: <code>margin: 10px 15px 20px;</code> and <code>background-color: lightblue;</code></em></li>
      <li><em><code>box4</code>: <code>margin: 5px 10px 15px 20px;</code> and <code>background-color: lightgoldenrodyellow;</code></em></li>
    </ul>
  </li>
  <li><em>In the display section:</em>
    <ul>
      <li><em>Add an <code>&lt;h1&gt;</code> element with the exact text: <code>Dream Sandwich:</code></em></li>
      <li><em>Then add five <code>&lt;div&gt;</code> elements below the heading, each using one of the above class names.</em></li>
    </ul>
  </li>
  <li><em>The exact inner text for each class should be:</em>
    <ul>
      <li><em><code>box4</code>: <code>Bread</code></em></li>
      <li><em><code>box1</code>: <code>Meat</code></em></li>
      <li><em><code>box2</code>: <code>Lettuce</code></em></li>
      <li><em><code>box3</code>: <code>Smurf Meat</code></em></li>
      <li><em><code>box4</code>: <code>Bread</code> again</em></li>
    </ul>
  </li>
  <li><em>Make sure that:</em>
    <ul>
      <li><em>Class names are typed exactly</em></li>
      <li><em>Text content is exactly correct</em></li>
      <li><em>No comments are included</em></li>
    </ul>
  </li>
</ul>`,`<h3>Vertikal zusammenfallende margin-Werte</h3>

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

<h3>🎯 Studienziel – Aufgabe im Code Editor</h3>
<p><em>Ziel: Erstellen Sie eine Webseite, die interne und Inline-CSS-Stile kombiniert, um Text visuell hervorzuheben.</em></p>

<ul>
  <li>Erstellen Sie zuerst einen internen CSS-Block mit dem <code>&lt;style&gt;</code>-Tag.</li>
  <li>Darin soll ein Stil für das <code>&lt;h1&gt;</code>-Element definiert werden:
    <ul>
      <li>Die Textfarbe (<code>color</code>) soll <strong>rot</strong> sein.</li>
      <li>Der Text soll <strong>zentriert</strong> werden (<code>text-align</code>).</li>
    </ul>
  </li>
  <li>Danach schreiben Sie eine <strong>Überschrift</strong> mit dem <code>&lt;h1&gt;</code>-Tag.
    <br />
    Der Text muss genau so lauten:<br />
    <em>Oh, woah-...🛸an Alien!</em>
  </li>
  <li>Darunter soll ein <strong>Absatz <code>&lt;p&gt;</code></strong> stehen, der <strong>Inline-CSS</strong> verwendet:
    <ul>
      <li><code>background-color</code> soll <strong>lightyellow</strong> sein.</li>
      <li><code>padding</code> soll <strong>10px</strong> betragen.</li>
      <li><code>font-size</code> soll <strong>18px</strong> sein.</li>
    </ul>
  </li>
  <li>Der Text im Absatz muss exakt sein:<br />
    <em>aAaaaAAA we're 🐄🐄🐄 being abducted!</em>
  </li>
</ul>

<h4><em>English Translation:</em></h4>
<p><em>Goal: Create a web page using both internal and inline CSS styles to highlight text visually.</em></p>

<ul>
  <li><em>Start with a <code>&lt;style&gt;</code> tag to define internal CSS.</em></li>
  <li><em>Inside it, add a rule for the <code>&lt;h1&gt;</code>:</em>
    <ul>
      <li><em>Set <code>color</code> to <strong>red</strong>.</em></li>
      <li><em>Set <code>text-align</code> to <strong>center</strong>.</em></li>
    </ul>
  </li>
  <li><em>Then, create an <code>&lt;h1&gt;</code> element with this exact text:</em><br />
    <em>Oh, woah-...🛸an Alien!</em>
  </li>
  <li><em>After that, write a <code>&lt;p&gt;</code> element using <strong>inline CSS</strong>:</em>
    <ul>
      <li><em><code>background-color</code> should be <strong>lightyellow</strong>.</em></li>
      <li><em><code>padding</code> should be <strong>10px</strong>.</em></li>
      <li><em><code>font-size</code> should be <strong>18px</strong>.</em></li>
    </ul>
  </li>
  <li><em>The paragraph text must be exactly:</em><br />
    <em>aAaaaAAA we're 🐄🐄🐄 being abducted!</em>
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

<img src = "https://i.imgur.com/pgGtL4v.png" width = "350">
`],Jf={1:["<h1>Hello, World!</h1>","<h1>Hello, Weird!</h1>"],2:["<em>I am small</em>"],3:[`<!DOCTYPE html>
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
</form>`],38:[`<style>
    h1 {color: blue};
</style>

<h1>Hello, blue!</h1>`],39:[`<style>
  p {
    color: green;
  }

  .highlight {
    font-weight: bold;
    color: yellow;
    background-color: black;
  }

  #main-title {
    color: blue;
    text-align: center;
  }
</style>

<h1 id="main-title">Welcome to CSS Land</h1>
<h1>Watch and be amazed!</h1>

<p>Swamp letters!</p>
<p class="highlight">Spooky looking highlight!</p>`],40:[`<style>
  .small {
    font-size: 12px;
  }

  .medium {
    font-size: 1em;
  }

  .large {
    font-size: 2rem;
  }
</style>

<p class="small">Oh!</p>
<p class="medium">Oh Lawd-</p>
<p class="large">OH LAWD HE COMIN 🐈</p>`],41:[`<style>
  p {
    border: 1px solid green;
  }

  div {
    border: 1px solid blue;
  }
</style>

<p>Sentence without a home :(</p>
<div>
  <p>Sentence with a home :)</p>
</div>
`],42:[`<style>
  .box1 {
    margin: 20px;
    background-color: lightcoral;
  }

  .box2 {
    margin: 10px 20px;
    background-color: lightgreen;
  }

  .box3 {
    margin: 10px 15px 20px;
    background-color: lightblue;
  }

  .box4 {
    margin: 5px 10px 15px 20px;
    background-color: lightgoldenrodyellow;
  }
</style>

<h1>Dream Sandwich:</h1>
<div class="box4">Bread</div>
<div class="box1">Meat</div>
<div class="box2">Lettuce</div>
<div class="box3">Smurf Meat</div>
<div class="box4">Bread</div>`],43:[`<style>
  h1 {
    color: red;
    text-align: center;
  }
</style>

<h1>Oh, woah-...🛸an Alien!</h1>
<p style="background-color: lightyellow; padding: 10px; font-size: 18px;">
  aAaaaAAA we're 🐄🐄🐄 being abducted!
</p>`],44:[`<style>
  body {
    background-color: green;
    margin: 0;
    padding: 0;
    text-align: center;
    color: black;
    font-family: sans-serif;
  }

  .yellow-box {
    background-color: yellow;
    margin: 100px auto;
    padding: 40px;
    width: 500px;
  }

  .title {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 40px;
  }

  .blue-box {
    background-color: blue;
    padding: 60px;
  }

  .button {
    color: white;
    border: 1px solid white;
    display: inline-block;
    padding: 10px 30px;
    font-weight: bold;
  }

  .year {
    font-size: 24px;
    font-weight: bold;
    margin-top: 40px;
  }
</style>

<div class="yellow-box">
  <div class="title">Fußballweltmeisterschaft</div>
  <div class="blue-box">
    <div class="button">Brasilien</div>
  </div>
  <div class="year">2014</div>
</div>`],25:[`<script>
    function fartCheck() {
        alert("Did you just fart?")
    }
<\/script>

<input type = "button" value="Fart Check?" onclick="fartCheck()"/>`],26:[`<script>
  var x = 1;
  var z = 1;
  z = x + 10;
  document.write(z);
<\/script>`],28:[`<script>
  var name = "Rat";
  var message = name + " is me";
  alert(message);
<\/script>`],29:[`<script>
  var t1 = prompt("Please enter text", "Type here");
  var t2 = prompt("Please enter text", "Type here");
  var t3 = t1 + t2;
  document.write(t3);
<\/script>`],31:[`<script>
  var response = prompt("Was the moon landing fake?", "Your opinion here...");
  var toldTruth = (response == "yes");
<\/script>`],32:[`<script>
  var q1 = prompt("Do you like fish sticks", "Type here");
  var q2 = prompt("So, you're a gay fish?", "Type here");
  var verdict = (q1 == "yes" && q2 == "yes");
  alert(verdict);
<\/script>`],33:[`<script>
  var response = prompt("In your personal opinion, what's the best animal?", "Type here");
  var verdict = (response != "cat");
  alert(verdict);
<\/script>`],34:[`<script>
  var q1 = prompt("Do you like fish sticks", "Type here");
  var q2 = prompt("So, you're a gay fish?", "Type here");
  var verdict = (q1 == "yes" && q2 == "yes");
  if (verdict) {
    alert("HAHAHAHAHA YOU'RE A GAY FISH");
  };
<\/script>`]};var Rr={exports:{}},Br,Ff;function Kp(){if(Ff)return Br;Ff=1;var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Br=r,Br}var kr,If;function Wp(){if(If)return kr;If=1;var r=Kp();function d(){}function g(){}return g.resetWarningCache=d,kr=function(){function c(C,V,D,w,_,Q){if(Q!==r){var F=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw F.name="Invariant Violation",F}}c.isRequired=c;function S(){return c}var O={array:c,bigint:c,bool:c,func:c,number:c,object:c,string:c,symbol:c,any:c,arrayOf:S,element:c,elementType:c,instanceOf:S,node:c,objectOf:S,oneOf:S,oneOfType:S,shape:S,exact:S,checkPropTypes:g,resetWarningCache:d};return O.PropTypes=O,O},kr}var $f;function Jp(){return $f||($f=1,Rr.exports=Wp()()),Rr.exports}var Fp=Jp();const pe=th(Fp);var Ut=typeof window<"u"?window:null,Lr=Ut===null,Gn=Lr?void 0:Ut.document,_t="addEventListener",Ct="removeEventListener",_r="getBoundingClientRect",Ln="_a",Nt="_b",ul="_c",uu="horizontal",Lt=function(){return!1},Ip=Lr?"calc":["","-webkit-","-moz-","-o-"].filter(function(r){var d=Gn.createElement("div");return d.style.cssText="width:"+r+"calc(9px)",!!d.style.length}).shift()+"calc",sh=function(r){return typeof r=="string"||r instanceof String},Pf=function(r){if(sh(r)){var d=Gn.querySelector(r);if(!d)throw new Error("Selector "+r+" did not match a DOM element");return d}return r},lt=function(r,d,g){var c=r[d];return c!==void 0?c:g},ou=function(r,d,g,c){if(d){if(c==="end")return 0;if(c==="center")return r/2}else if(g){if(c==="start")return 0;if(c==="center")return r/2}return r},$p=function(r,d){var g=Gn.createElement("div");return g.className="gutter gutter-"+d,g},Pp=function(r,d,g){var c={};return sh(d)?c[r]=d:c[r]=Ip+"("+d+"% - "+g+"px)",c},eb=function(r,d){var g;return g={},g[r]=d+"px",g},eh=function(r,d){if(d===void 0&&(d={}),Lr)return{};var g=r,c,S,O,C,V,D;Array.from&&(g=Array.from(g));var w=Pf(g[0]),_=w.parentNode,Q=getComputedStyle?getComputedStyle(_):null,F=Q?Q.flexDirection:null,Se=lt(d,"sizes")||g.map(function(){return 100/g.length}),xe=lt(d,"minSize",100),Te=Array.isArray(xe)?xe:g.map(function(){return xe}),ze=lt(d,"maxSize",1/0),Ke=Array.isArray(ze)?ze:g.map(function(){return ze}),ee=lt(d,"expandToMin",!1),ue=lt(d,"gutterSize",10),De=lt(d,"gutterAlign","center"),G=lt(d,"snapOffset",30),se=Array.isArray(G)?G:g.map(function(){return G}),le=lt(d,"dragInterval",1),Ee=lt(d,"direction",uu),he=lt(d,"cursor",Ee===uu?"col-resize":"row-resize"),ae=lt(d,"gutter",$p),qe=lt(d,"elementStyle",Pp),He=lt(d,"gutterStyle",eb);Ee===uu?(c="width",S="clientX",O="left",C="right",V="clientWidth"):Ee==="vertical"&&(c="height",S="clientY",O="top",C="bottom",V="clientHeight");function Ge(H,M,k,j){var ke=qe(c,M,k,j);Object.keys(ke).forEach(function(Me){H.style[Me]=ke[Me]})}function it(H,M,k){var j=He(c,M,k);Object.keys(j).forEach(function(ke){H.style[ke]=j[ke]})}function W(){return D.map(function(H){return H.size})}function T(H){return"touches"in H?H.touches[0][S]:H[S]}function B(H){var M=D[this.a],k=D[this.b],j=M.size+k.size;M.size=H/this.size*j,k.size=j-H/this.size*j,Ge(M.element,M.size,this[Nt],M.i),Ge(k.element,k.size,this[ul],k.i)}function Y(H){var M,k=D[this.a],j=D[this.b];this.dragging&&(M=T(H)-this.start+(this[Nt]-this.dragOffset),le>1&&(M=Math.round(M/le)*le),M<=k.minSize+k.snapOffset+this[Nt]?M=k.minSize+this[Nt]:M>=this.size-(j.minSize+j.snapOffset+this[ul])&&(M=this.size-(j.minSize+this[ul])),M>=k.maxSize-k.snapOffset+this[Nt]?M=k.maxSize+this[Nt]:M<=this.size-(j.maxSize-j.snapOffset+this[ul])&&(M=this.size-(j.maxSize+this[ul])),B.call(this,M),lt(d,"onDrag",Lt)(W()))}function ce(){var H=D[this.a].element,M=D[this.b].element,k=H[_r](),j=M[_r]();this.size=k[c]+j[c]+this[Nt]+this[ul],this.start=k[O],this.end=k[C]}function f(H){if(!getComputedStyle)return null;var M=getComputedStyle(H);if(!M)return null;var k=H[V];return k===0?null:(Ee===uu?k-=parseFloat(M.paddingLeft)+parseFloat(M.paddingRight):k-=parseFloat(M.paddingTop)+parseFloat(M.paddingBottom),k)}function E(H){var M=f(_);if(M===null||Te.reduce(function(Me,We){return Me+We},0)>M)return H;var k=0,j=[],ke=H.map(function(Me,We){var Zt=M*Me/100,Il=ou(ue,We===0,We===H.length-1,De),at=Te[We]+Il;return Zt<at?(k+=at-Zt,j.push(0),at):(j.push(Zt-at),Zt)});return k===0?H:ke.map(function(Me,We){var Zt=Me;if(k>0&&j[We]-k>0){var Il=Math.min(k,j[We]-k);k-=Il,Zt=Me-Il}return Zt/M*100})}function U(){var H=this,M=D[H.a].element,k=D[H.b].element;H.dragging&&lt(d,"onDragEnd",Lt)(W()),H.dragging=!1,Ut[Ct]("mouseup",H.stop),Ut[Ct]("touchend",H.stop),Ut[Ct]("touchcancel",H.stop),Ut[Ct]("mousemove",H.move),Ut[Ct]("touchmove",H.move),H.stop=null,H.move=null,M[Ct]("selectstart",Lt),M[Ct]("dragstart",Lt),k[Ct]("selectstart",Lt),k[Ct]("dragstart",Lt),M.style.userSelect="",M.style.webkitUserSelect="",M.style.MozUserSelect="",M.style.pointerEvents="",k.style.userSelect="",k.style.webkitUserSelect="",k.style.MozUserSelect="",k.style.pointerEvents="",H.gutter.style.cursor="",H.parent.style.cursor="",Gn.body.style.cursor=""}function R(H){if(!("button"in H&&H.button!==0)){var M=this,k=D[M.a].element,j=D[M.b].element;M.dragging||lt(d,"onDragStart",Lt)(W()),H.preventDefault(),M.dragging=!0,M.move=Y.bind(M),M.stop=U.bind(M),Ut[_t]("mouseup",M.stop),Ut[_t]("touchend",M.stop),Ut[_t]("touchcancel",M.stop),Ut[_t]("mousemove",M.move),Ut[_t]("touchmove",M.move),k[_t]("selectstart",Lt),k[_t]("dragstart",Lt),j[_t]("selectstart",Lt),j[_t]("dragstart",Lt),k.style.userSelect="none",k.style.webkitUserSelect="none",k.style.MozUserSelect="none",k.style.pointerEvents="none",j.style.userSelect="none",j.style.webkitUserSelect="none",j.style.MozUserSelect="none",j.style.pointerEvents="none",M.gutter.style.cursor=he,M.parent.style.cursor=he,Gn.body.style.cursor=he,ce.call(M),M.dragOffset=T(H)-M.end}}Se=E(Se);var L=[];D=g.map(function(H,M){var k={element:Pf(H),size:Se[M],minSize:Te[M],maxSize:Ke[M],snapOffset:se[M],i:M},j;if(M>0&&(j={a:M-1,b:M,dragging:!1,direction:Ee,parent:_},j[Nt]=ou(ue,M-1===0,!1,De),j[ul]=ou(ue,!1,M===g.length-1,De),F==="row-reverse"||F==="column-reverse")){var ke=j.a;j.a=j.b,j.b=ke}if(M>0){var Me=ae(M,Ee,k.element);it(Me,ue,M),j[Ln]=R.bind(j),Me[_t]("mousedown",j[Ln]),Me[_t]("touchstart",j[Ln]),_.insertBefore(Me,k.element),j.gutter=Me}return Ge(k.element,k.size,ou(ue,M===0,M===g.length-1,De),M),M>0&&L.push(j),k});function oe(H){var M=H.i===L.length,k=M?L[H.i-1]:L[H.i];ce.call(k);var j=M?k.size-H.minSize-k[ul]:H.minSize+k[Nt];B.call(k,j)}D.forEach(function(H){var M=H.element[_r]()[c];M<H.minSize&&(ee?oe(H):H.minSize=M)});function J(H){var M=E(H);M.forEach(function(k,j){if(j>0){var ke=L[j-1],Me=D[ke.a],We=D[ke.b];Me.size=M[j-1],We.size=k,Ge(Me.element,Me.size,ke[Nt],Me.i),Ge(We.element,We.size,ke[ul],We.i)}})}function nt(H,M){L.forEach(function(k){if(M!==!0?k.parent.removeChild(k.gutter):(k.gutter[Ct]("mousedown",k[Ln]),k.gutter[Ct]("touchstart",k[Ln])),H!==!0){var j=qe(c,k.a.size,k[Nt]);Object.keys(j).forEach(function(ke){D[k.a].element.style[ke]="",D[k.b].element.style[ke]=""})}})}return{setSizes:J,getSizes:W,collapse:function(M){oe(D[M])},destroy:nt,parent:_,pairs:L}};function Cr(r,d){var g={};for(var c in r)Object.prototype.hasOwnProperty.call(r,c)&&d.indexOf(c)===-1&&(g[c]=r[c]);return g}var qr=function(r){function d(){r.apply(this,arguments)}return r&&(d.__proto__=r),d.prototype=Object.create(r&&r.prototype),d.prototype.constructor=d,d.prototype.componentDidMount=function(){var c=this.props;c.children;var S=c.gutter,O=Cr(c,["children","gutter"]),C=O;C.gutter=function(V,D){var w;return S?w=S(V,D):(w=document.createElement("div"),w.className="gutter gutter-"+D),w.__isSplitGutter=!0,w},this.split=eh(this.parent.children,C)},d.prototype.componentDidUpdate=function(c){var S=this,O=this.props;O.children;var C=O.minSize,V=O.sizes,D=O.collapsed,w=Cr(O,["children","minSize","sizes","collapsed"]),_=w,Q=c.minSize,F=c.sizes,Se=c.collapsed,xe=["maxSize","expandToMin","gutterSize","gutterAlign","snapOffset","dragInterval","direction","cursor"],Te=xe.map(function(ee){return S.props[ee]!==c[ee]}).reduce(function(ee,ue){return ee||ue},!1);if(Array.isArray(C)&&Array.isArray(Q)){var ze=!1;C.forEach(function(ee,ue){ze=ze||ee!==Q[ue]}),Te=Te||ze}else Array.isArray(C)||Array.isArray(Q)?Te=!0:Te=Te||C!==Q;if(Te)_.minSize=C,_.sizes=V||this.split.getSizes(),this.split.destroy(!0,!0),_.gutter=function(ee,ue,De){return De.previousSibling},this.split=eh(Array.from(this.parent.children).filter(function(ee){return!ee.__isSplitGutter}),_);else if(V){var Ke=!1;V.forEach(function(ee,ue){Ke=Ke||ee!==F[ue]}),Ke&&this.split.setSizes(this.props.sizes)}Number.isInteger(D)&&(D!==Se||Te)&&this.split.collapse(D)},d.prototype.componentWillUnmount=function(){this.split.destroy(),delete this.split},d.prototype.render=function(){var c=this,S=this.props;S.sizes,S.minSize,S.maxSize,S.expandToMin,S.gutterSize,S.gutterAlign,S.snapOffset,S.dragInterval,S.direction,S.cursor,S.gutter,S.elementStyle,S.gutterStyle,S.onDrag,S.onDragStart,S.onDragEnd,S.collapsed;var O=S.children,C=Cr(S,["sizes","minSize","maxSize","expandToMin","gutterSize","gutterAlign","snapOffset","dragInterval","direction","cursor","gutter","elementStyle","gutterStyle","onDrag","onDragStart","onDragEnd","collapsed","children"]),V=C;return Ul.createElement("div",Object.assign({},{ref:function(D){c.parent=D}},V),O)},d}(Ul.Component);qr.propTypes={sizes:pe.arrayOf(pe.number),minSize:pe.oneOfType([pe.number,pe.arrayOf(pe.number)]),maxSize:pe.oneOfType([pe.number,pe.arrayOf(pe.number)]),expandToMin:pe.bool,gutterSize:pe.number,gutterAlign:pe.string,snapOffset:pe.oneOfType([pe.number,pe.arrayOf(pe.number)]),dragInterval:pe.number,direction:pe.string,cursor:pe.string,gutter:pe.func,elementStyle:pe.func,gutterStyle:pe.func,onDrag:pe.func,onDragStart:pe.func,onDragEnd:pe.func,collapsed:pe.number,children:pe.arrayOf(pe.element)};qr.defaultProps={sizes:void 0,minSize:void 0,maxSize:void 0,expandToMin:void 0,gutterSize:void 0,gutterAlign:void 0,snapOffset:void 0,dragInterval:void 0,direction:void 0,cursor:void 0,gutter:void 0,elementStyle:void 0,gutterStyle:void 0,onDrag:void 0,onDragStart:void 0,onDragEnd:void 0,collapsed:void 0,children:void 0};function tb(){const[r,d]=$.useState(""),[g,c]=$.useState(r),[S,O]=$.useState(0),C=["YOU DID GREAT!","I'm proud of you, keep it up!","This is great work","A+++","1000% on this!","Super floober fantastic"],V=["Oh, not quite?","Hey, let's give that one another try","Let's look over that again?","Not quite, but I'm glad you're trying"],D=()=>{if(Object.keys(Jf).includes(S.toString())){const w=S.toString(),_=r.trim().replace(/\s+/g," "),Q=Jf[w].some(Se=>_===Se.trim().replace(/\s+/g," "));let F="Default easter egg text";Q?(F=C[Math.floor(Math.random()*C.length)],alert(F)):(F=V[Math.floor(Math.random()*V.length)],alert(F))}};return $e.jsx("div",{className:"h-screen bg-gray-900 text-white",children:$e.jsxs(qr,{className:"flex h-full",sizes:[25,50,25],minSize:100,gutterSize:6,children:[$e.jsxs("div",{className:"p-4  border-r border-gray-700",children:[$e.jsxs("div",{className:"absolute bottom-4 right-4 flex space-x-2",children:[$e.jsx("button",{onClick:()=>O(Math.max(0,S-1)),className:"bg-yellow-400 text-black px-4 py-1 rounded",disabled:S===0,children:"Back"}),$e.jsx("button",{onClick:()=>O(Math.min(S+1,100)),className:"bg-yellow-400 text-black px-4 py-1 rounded",disabled:S===Ur.length-1,children:"Next"})]}),$e.jsxs("h2",{className:"font-bold text-lg",children:["Lesson ",S+1]}),$e.jsx("iframe",{title:"live preview",srcDoc:Ur[Math.min(Math.max(0,S),Ur.length-1)],className:"w-full h-full bg-white"})]}),$e.jsxs("div",{className:"border-b border-gray-700",children:[$e.jsx(Qp,{height:"90%",language:"html",theme:"vs-dark",value:r,onChange:w=>d(w||"")}),$e.jsx("div",{className:"p-2",children:$e.jsx("button",{onClick:()=>c(r),className:"bg-green-50 hover:bg-green-600 p-2",children:"Run"})})]}),$e.jsxs("div",{className:"w-1/4 p-2",children:[$e.jsx("iframe",{title:"live preview",srcDoc:g,className:"w-full h-full bg-white"}),$e.jsx("button",{onClick:D,className:"mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded mt-2  ",children:"Check Answer"})]})]})})}jm.createRoot(document.getElementById("root")).render($e.jsx($.StrictMode,{children:$e.jsx(tb,{})}));
