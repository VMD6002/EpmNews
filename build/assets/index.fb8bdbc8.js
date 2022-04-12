const Lk=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}};Lk();var V={exports:{}},Q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ou=Symbol.for("react.element"),Mk=Symbol.for("react.portal"),$k=Symbol.for("react.fragment"),Uk=Symbol.for("react.strict_mode"),Fk=Symbol.for("react.profiler"),Vk=Symbol.for("react.provider"),Bk=Symbol.for("react.context"),qk=Symbol.for("react.forward_ref"),zk=Symbol.for("react.suspense"),jk=Symbol.for("react.memo"),Wk=Symbol.for("react.lazy"),_y=Symbol.iterator;function Hk(t){return t===null||typeof t!="object"?null:(t=_y&&t[_y]||t["@@iterator"],typeof t=="function"?t:null)}var V_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B_=Object.assign,q_={};function ro(t,e,n){this.props=t,this.context=e,this.refs=q_,this.updater=n||V_}ro.prototype.isReactComponent={};ro.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ro.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function z_(){}z_.prototype=ro.prototype;function bp(t,e,n){this.props=t,this.context=e,this.refs=q_,this.updater=n||V_}var xp=bp.prototype=new z_;xp.constructor=bp;B_(xp,ro.prototype);xp.isPureReactComponent=!0;var Iy=Array.isArray,j_=Object.prototype.hasOwnProperty,Pp={current:null},W_={key:!0,ref:!0,__self:!0,__source:!0};function H_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)j_.call(e,r)&&!W_.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),l=0;l<a;l++)u[l]=arguments[l+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ou,type:t,key:s,ref:o,props:i,_owner:Pp.current}}function Gk(t,e){return{$$typeof:ou,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Dp(t){return typeof t=="object"&&t!==null&&t.$$typeof===ou}function Kk(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ey=/\/+/g;function rd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Kk(""+t.key):e.toString(36)}function Sl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ou:case Mk:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+rd(o,0):r,Iy(i)?(n="",t!=null&&(n=t.replace(Ey,"$&/")+"/"),Sl(i,e,n,"",function(l){return l})):i!=null&&(Dp(i)&&(i=Gk(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Ey,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Iy(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+rd(s,a);o+=Sl(s,e,n,u,i)}else if(u=Hk(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+rd(s,a++),o+=Sl(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Bu(t,e,n){if(t==null)return t;var r=[],i=0;return Sl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Qk(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var vt={current:null},Tl={transition:null},Yk={ReactCurrentDispatcher:vt,ReactCurrentBatchConfig:Tl,ReactCurrentOwner:Pp};Q.Children={map:Bu,forEach:function(t,e,n){Bu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Bu(t,function(){e++}),e},toArray:function(t){return Bu(t,function(e){return e})||[]},only:function(t){if(!Dp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Q.Component=ro;Q.Fragment=$k;Q.Profiler=Fk;Q.PureComponent=bp;Q.StrictMode=Uk;Q.Suspense=zk;Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yk;Q.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=B_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Pp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)j_.call(e,u)&&!W_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var l=0;l<u;l++)a[l]=arguments[l+2];r.children=a}return{$$typeof:ou,type:t.type,key:i,ref:s,props:r,_owner:o}};Q.createContext=function(t){return t={$$typeof:Bk,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Vk,_context:t},t.Consumer=t};Q.createElement=H_;Q.createFactory=function(t){var e=H_.bind(null,t);return e.type=t,e};Q.createRef=function(){return{current:null}};Q.forwardRef=function(t){return{$$typeof:qk,render:t}};Q.isValidElement=Dp;Q.lazy=function(t){return{$$typeof:Wk,_payload:{_status:-1,_result:t},_init:Qk}};Q.memo=function(t,e){return{$$typeof:jk,type:t,compare:e===void 0?null:e}};Q.startTransition=function(t){var e=Tl.transition;Tl.transition={};try{t()}finally{Tl.transition=e}};Q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Q.useCallback=function(t,e){return vt.current.useCallback(t,e)};Q.useContext=function(t){return vt.current.useContext(t)};Q.useDebugValue=function(){};Q.useDeferredValue=function(t){return vt.current.useDeferredValue(t)};Q.useEffect=function(t,e){return vt.current.useEffect(t,e)};Q.useId=function(){return vt.current.useId()};Q.useImperativeHandle=function(t,e,n){return vt.current.useImperativeHandle(t,e,n)};Q.useInsertionEffect=function(t,e){return vt.current.useInsertionEffect(t,e)};Q.useLayoutEffect=function(t,e){return vt.current.useLayoutEffect(t,e)};Q.useMemo=function(t,e){return vt.current.useMemo(t,e)};Q.useReducer=function(t,e,n){return vt.current.useReducer(t,e,n)};Q.useRef=function(t){return vt.current.useRef(t)};Q.useState=function(t){return vt.current.useState(t)};Q.useSyncExternalStore=function(t,e,n){return vt.current.useSyncExternalStore(t,e,n)};Q.useTransition=function(){return vt.current.useTransition()};Q.version="18.0.0-fc46dba67-20220329";V.exports=Q;var Jk=V.exports,G_={exports:{}},$t={},K_={exports:{}},Q_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(M,W){var H=M.length;M.push(W);e:for(;0<H;){var ve=H-1>>>1,De=M[ve];if(0<i(De,W))M[ve]=W,M[H]=De,H=ve;else break e}}function n(M){return M.length===0?null:M[0]}function r(M){if(M.length===0)return null;var W=M[0],H=M.pop();if(H!==W){M[0]=H;e:for(var ve=0,De=M.length,Fu=De>>>1;ve<Fu;){var Hr=2*(ve+1)-1,nd=M[Hr],Gr=Hr+1,Vu=M[Gr];if(0>i(nd,H))Gr<De&&0>i(Vu,nd)?(M[ve]=Vu,M[Gr]=H,ve=Gr):(M[ve]=nd,M[Hr]=H,ve=Hr);else if(Gr<De&&0>i(Vu,H))M[ve]=Vu,M[Gr]=H,ve=Gr;else break e}}return W}function i(M,W){var H=M.sortIndex-W.sortIndex;return H!==0?H:M.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],l=[],c=1,h=null,d=3,p=!1,m=!1,I=!1,R=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(M){for(var W=n(l);W!==null;){if(W.callback===null)r(l);else if(W.startTime<=M)r(l),W.sortIndex=W.expirationTime,e(u,W);else break;W=n(l)}}function v(M){if(I=!1,y(M),!m)if(n(u)!==null)m=!0,ed(T);else{var W=n(l);W!==null&&td(v,W.startTime-M)}}function T(M,W){m=!1,I&&(I=!1,g(S),S=-1),p=!0;var H=d;try{for(y(W),h=n(u);h!==null&&(!(h.expirationTime>W)||M&&!q());){var ve=h.callback;if(typeof ve=="function"){h.callback=null,d=h.priorityLevel;var De=ve(h.expirationTime<=W);W=t.unstable_now(),typeof De=="function"?h.callback=De:h===n(u)&&r(u),y(W)}else r(u);h=n(u)}if(h!==null)var Fu=!0;else{var Hr=n(l);Hr!==null&&td(v,Hr.startTime-W),Fu=!1}return Fu}finally{h=null,d=H,p=!1}}var k=!1,E=null,S=-1,F=5,O=-1;function q(){return!(t.unstable_now()-O<F)}function Ae(){if(E!==null){var M=t.unstable_now();O=M;var W=!0;try{W=E(!0,M)}finally{W?Rn():(k=!1,E=null)}}else k=!1}var Rn;if(typeof f=="function")Rn=function(){f(Ae)};else if(typeof MessageChannel!="undefined"){var Wr=new MessageChannel,wy=Wr.port2;Wr.port1.onmessage=Ae,Rn=function(){wy.postMessage(null)}}else Rn=function(){R(Ae,0)};function ed(M){E=M,k||(k=!0,Rn())}function td(M,W){S=R(function(){M(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(M){M.callback=null},t.unstable_continueExecution=function(){m||p||(m=!0,ed(T))},t.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<M?Math.floor(1e3/M):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(M){switch(d){case 1:case 2:case 3:var W=3;break;default:W=d}var H=d;d=W;try{return M()}finally{d=H}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(M,W){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var H=d;d=M;try{return W()}finally{d=H}},t.unstable_scheduleCallback=function(M,W,H){var ve=t.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?ve+H:ve):H=ve,M){case 1:var De=-1;break;case 2:De=250;break;case 5:De=1073741823;break;case 4:De=1e4;break;default:De=5e3}return De=H+De,M={id:c++,callback:W,priorityLevel:M,startTime:H,expirationTime:De,sortIndex:-1},H>ve?(M.sortIndex=H,e(l,M),n(u)===null&&M===n(l)&&(I?(g(S),S=-1):I=!0,td(v,H-ve))):(M.sortIndex=De,e(u,M),m||p||(m=!0,ed(T))),M},t.unstable_shouldYield=q,t.unstable_wrapCallback=function(M){var W=d;return function(){var H=d;d=W;try{return M.apply(this,arguments)}finally{d=H}}}})(Q_);K_.exports=Q_;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y_=V.exports,Lt=K_.exports;function A(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var J_=new Set,fa={};function Li(t,e){Os(t,e),Os(t+"Capture",e)}function Os(t,e){for(fa[t]=e,t=0;t<e.length;t++)J_.add(e[t])}var Bn=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),Xd=Object.prototype.hasOwnProperty,Xk=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Sy={},Ty={};function Zk(t){return Xd.call(Ty,t)?!0:Xd.call(Sy,t)?!1:Xk.test(t)?Ty[t]=!0:(Sy[t]=!0,!1)}function eC(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function tC(t,e,n,r){if(e===null||typeof e=="undefined"||eC(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function wt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Xe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Xe[t]=new wt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Xe[e]=new wt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Xe[t]=new wt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Xe[t]=new wt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Xe[t]=new wt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Xe[t]=new wt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Xe[t]=new wt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Xe[t]=new wt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Xe[t]=new wt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Op=/[\-:]([a-z])/g;function Lp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Op,Lp);Xe[e]=new wt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Op,Lp);Xe[e]=new wt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Op,Lp);Xe[e]=new wt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Xe[t]=new wt(t,1,!1,t.toLowerCase(),null,!1,!1)});Xe.xlinkHref=new wt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Xe[t]=new wt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Mp(t,e,n,r){var i=Xe.hasOwnProperty(e)?Xe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(tC(e,n,i,r)&&(n=null),r||i===null?Zk(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Yn=Y_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,qu=Symbol.for("react.element"),os=Symbol.for("react.portal"),as=Symbol.for("react.fragment"),$p=Symbol.for("react.strict_mode"),Zd=Symbol.for("react.profiler"),X_=Symbol.for("react.provider"),Z_=Symbol.for("react.context"),Up=Symbol.for("react.forward_ref"),ef=Symbol.for("react.suspense"),tf=Symbol.for("react.suspense_list"),Fp=Symbol.for("react.memo"),sr=Symbol.for("react.lazy"),e0=Symbol.for("react.offscreen"),ky=Symbol.iterator;function So(t){return t===null||typeof t!="object"?null:(t=ky&&t[ky]||t["@@iterator"],typeof t=="function"?t:null)}var fe=Object.assign,id;function qo(t){if(id===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);id=e&&e[1]||""}return`
`+id+t}var sd=!1;function od(t,e){if(!t||sd)return"";sd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(l){var r=l}Reflect.construct(t,[],e)}else{try{e.call()}catch(l){r=l}t.call(e.prototype)}else{try{throw Error()}catch(l){r=l}t()}}catch(l){if(l&&r&&typeof l.stack=="string"){for(var i=l.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{sd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?qo(t):""}function nC(t){switch(t.tag){case 5:return qo(t.type);case 16:return qo("Lazy");case 13:return qo("Suspense");case 19:return qo("SuspenseList");case 0:case 2:case 15:return t=od(t.type,!1),t;case 11:return t=od(t.type.render,!1),t;case 1:return t=od(t.type,!0),t;default:return""}}function nf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case as:return"Fragment";case os:return"Portal";case Zd:return"Profiler";case $p:return"StrictMode";case ef:return"Suspense";case tf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Z_:return(t.displayName||"Context")+".Consumer";case X_:return(t._context.displayName||"Context")+".Provider";case Up:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Fp:return e=t.displayName||null,e!==null?e:nf(t.type)||"Memo";case sr:e=t._payload,t=t._init;try{return nf(t(e))}catch{}}return null}function rC(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return nf(e);case 8:return e===$p?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Sr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function t0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function iC(t){var e=t0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function zu(t){t._valueTracker||(t._valueTracker=iC(t))}function n0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=t0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Wl(t){if(t=t||(typeof document!="undefined"?document:void 0),typeof t=="undefined")return null;try{return t.activeElement||t.body}catch{return t.body}}function rf(t,e){var n=e.checked;return fe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function Cy(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Sr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function r0(t,e){e=e.checked,e!=null&&Mp(t,"checked",e,!1)}function sf(t,e){r0(t,e);var n=Sr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?of(t,e.type,n):e.hasOwnProperty("defaultValue")&&of(t,e.type,Sr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ry(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function of(t,e,n){(e!=="number"||Wl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var zo=Array.isArray;function Is(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Sr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function af(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(A(91));return fe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ay(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(A(92));if(zo(n)){if(1<n.length)throw Error(A(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Sr(n)}}function i0(t,e){var n=Sr(e.value),r=Sr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Ny(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function s0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function uf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?s0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ju,o0=function(t){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ju=ju||document.createElement("div"),ju.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ju.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function pa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Yo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},sC=["Webkit","ms","Moz","O"];Object.keys(Yo).forEach(function(t){sC.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Yo[e]=Yo[t]})});function a0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Yo.hasOwnProperty(t)&&Yo[t]?(""+e).trim():e+"px"}function u0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=a0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var oC=fe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function lf(t,e){if(e){if(oC[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(A(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(A(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(A(61))}if(e.style!=null&&typeof e.style!="object")throw Error(A(62))}}function cf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hf=null;function Vp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var df=null,Es=null,Ss=null;function by(t){if(t=lu(t)){if(typeof df!="function")throw Error(A(280));var e=t.stateNode;e&&(e=Yc(e),df(t.stateNode,t.type,e))}}function l0(t){Es?Ss?Ss.push(t):Ss=[t]:Es=t}function c0(){if(Es){var t=Es,e=Ss;if(Ss=Es=null,by(t),e)for(t=0;t<e.length;t++)by(e[t])}}function h0(t,e){return t(e)}function d0(){}var ad=!1;function f0(t,e,n){if(ad)return t(e,n);ad=!0;try{return h0(t,e,n)}finally{ad=!1,(Es!==null||Ss!==null)&&(d0(),c0())}}function ma(t,e){var n=t.stateNode;if(n===null)return null;var r=Yc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(A(231,e,typeof n));return n}var ff=!1;if(Bn)try{var To={};Object.defineProperty(To,"passive",{get:function(){ff=!0}}),window.addEventListener("test",To,To),window.removeEventListener("test",To,To)}catch{ff=!1}function aC(t,e,n,r,i,s,o,a,u){var l=Array.prototype.slice.call(arguments,3);try{e.apply(n,l)}catch(c){this.onError(c)}}var Jo=!1,Hl=null,Gl=!1,pf=null,uC={onError:function(t){Jo=!0,Hl=t}};function lC(t,e,n,r,i,s,o,a,u){Jo=!1,Hl=null,aC.apply(uC,arguments)}function cC(t,e,n,r,i,s,o,a,u){if(lC.apply(this,arguments),Jo){if(Jo){var l=Hl;Jo=!1,Hl=null}else throw Error(A(198));Gl||(Gl=!0,pf=l)}}function Mi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function p0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function xy(t){if(Mi(t)!==t)throw Error(A(188))}function hC(t){var e=t.alternate;if(!e){if(e=Mi(t),e===null)throw Error(A(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return xy(i),t;if(s===r)return xy(i),e;s=s.sibling}throw Error(A(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(A(189))}}if(n.alternate!==r)throw Error(A(190))}if(n.tag!==3)throw Error(A(188));return n.stateNode.current===n?t:e}function m0(t){return t=hC(t),t!==null?g0(t):null}function g0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=g0(t);if(e!==null)return e;t=t.sibling}return null}var y0=Lt.unstable_scheduleCallback,Py=Lt.unstable_cancelCallback,dC=Lt.unstable_shouldYield,fC=Lt.unstable_requestPaint,we=Lt.unstable_now,pC=Lt.unstable_getCurrentPriorityLevel,Bp=Lt.unstable_ImmediatePriority,v0=Lt.unstable_UserBlockingPriority,Kl=Lt.unstable_NormalPriority,mC=Lt.unstable_LowPriority,w0=Lt.unstable_IdlePriority,Hc=null,yn=null;function gC(t){if(yn&&typeof yn.onCommitFiberRoot=="function")try{yn.onCommitFiberRoot(Hc,t,void 0,(t.current.flags&128)===128)}catch{}}var rn=Math.clz32?Math.clz32:wC,yC=Math.log,vC=Math.LN2;function wC(t){return t>>>=0,t===0?32:31-(yC(t)/vC|0)|0}var Wu=64,Hu=4194304;function jo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ql(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=jo(a):(s&=o,s!==0&&(r=jo(s)))}else o=n&~i,o!==0?r=jo(o):s!==0&&(r=jo(s));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-rn(e),i=1<<n,r|=t[n],e&=~i;return r}function _C(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function IC(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-rn(s),a=1<<o,u=i[o];u===-1?((a&n)===0||(a&r)!==0)&&(i[o]=_C(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function mf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ud(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function au(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-rn(e),t[e]=n}function EC(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-rn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function qp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-rn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ne=0;function _0(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var I0,zp,E0,S0,T0,gf=!1,Gu=[],mr=null,gr=null,yr=null,ga=new Map,ya=new Map,ur=[],SC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Dy(t,e){switch(t){case"focusin":case"focusout":mr=null;break;case"dragenter":case"dragleave":gr=null;break;case"mouseover":case"mouseout":yr=null;break;case"pointerover":case"pointerout":ga.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ya.delete(e.pointerId)}}function ko(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=lu(e),e!==null&&zp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function TC(t,e,n,r,i){switch(e){case"focusin":return mr=ko(mr,t,e,n,r,i),!0;case"dragenter":return gr=ko(gr,t,e,n,r,i),!0;case"mouseover":return yr=ko(yr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ga.set(s,ko(ga.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ya.set(s,ko(ya.get(s)||null,t,e,n,r,i)),!0}return!1}function k0(t){var e=ti(t.target);if(e!==null){var n=Mi(e);if(n!==null){if(e=n.tag,e===13){if(e=p0(n),e!==null){t.blockedOn=e,T0(t.priority,function(){E0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function kl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=yf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);hf=r,n.target.dispatchEvent(r),hf=null}else return e=lu(n),e!==null&&zp(e),t.blockedOn=n,!1;e.shift()}return!0}function Oy(t,e,n){kl(t)&&n.delete(e)}function kC(){gf=!1,mr!==null&&kl(mr)&&(mr=null),gr!==null&&kl(gr)&&(gr=null),yr!==null&&kl(yr)&&(yr=null),ga.forEach(Oy),ya.forEach(Oy)}function Co(t,e){t.blockedOn===e&&(t.blockedOn=null,gf||(gf=!0,Lt.unstable_scheduleCallback(Lt.unstable_NormalPriority,kC)))}function va(t){function e(i){return Co(i,t)}if(0<Gu.length){Co(Gu[0],t);for(var n=1;n<Gu.length;n++){var r=Gu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(mr!==null&&Co(mr,t),gr!==null&&Co(gr,t),yr!==null&&Co(yr,t),ga.forEach(e),ya.forEach(e),n=0;n<ur.length;n++)r=ur[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ur.length&&(n=ur[0],n.blockedOn===null);)k0(n),n.blockedOn===null&&ur.shift()}var Ts=Yn.ReactCurrentBatchConfig;function CC(t,e,n,r){var i=ne,s=Ts.transition;Ts.transition=null;try{ne=1,jp(t,e,n,r)}finally{ne=i,Ts.transition=s}}function RC(t,e,n,r){var i=ne,s=Ts.transition;Ts.transition=null;try{ne=4,jp(t,e,n,r)}finally{ne=i,Ts.transition=s}}function jp(t,e,n,r){var i=yf(t,e,n,r);if(i===null)vd(t,e,r,Yl,n),Dy(t,r);else if(TC(i,t,e,n,r))r.stopPropagation();else if(Dy(t,r),e&4&&-1<SC.indexOf(t)){for(;i!==null;){var s=lu(i);if(s!==null&&I0(s),s=yf(t,e,n,r),s===null&&vd(t,e,r,Yl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else vd(t,e,r,null,n)}var Yl=null;function yf(t,e,n,r){if(Yl=null,t=Vp(r),t=ti(t),t!==null)if(e=Mi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=p0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Yl=t,null}function C0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(pC()){case Bp:return 1;case v0:return 4;case Kl:case mC:return 16;case w0:return 536870912;default:return 16}default:return 16}}var dr=null,Wp=null,Cl=null;function R0(){if(Cl)return Cl;var t,e=Wp,n=e.length,r,i="value"in dr?dr.value:dr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Cl=i.slice(t,1<r?1-r:void 0)}function Rl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ku(){return!0}function Ly(){return!1}function Ut(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ku:Ly,this.isPropagationStopped=Ly,this}return fe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ku)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ku)},persist:function(){},isPersistent:Ku}),e}var io={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hp=Ut(io),uu=fe({},io,{view:0,detail:0}),AC=Ut(uu),ld,cd,Ro,Gc=fe({},uu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ro&&(Ro&&t.type==="mousemove"?(ld=t.screenX-Ro.screenX,cd=t.screenY-Ro.screenY):cd=ld=0,Ro=t),ld)},movementY:function(t){return"movementY"in t?t.movementY:cd}}),My=Ut(Gc),NC=fe({},Gc,{dataTransfer:0}),bC=Ut(NC),xC=fe({},uu,{relatedTarget:0}),hd=Ut(xC),PC=fe({},io,{animationName:0,elapsedTime:0,pseudoElement:0}),DC=Ut(PC),OC=fe({},io,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),LC=Ut(OC),MC=fe({},io,{data:0}),$y=Ut(MC),$C={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},UC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},FC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function VC(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=FC[t])?!!e[t]:!1}function Gp(){return VC}var BC=fe({},uu,{key:function(t){if(t.key){var e=$C[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Rl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?UC[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gp,charCode:function(t){return t.type==="keypress"?Rl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Rl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),qC=Ut(BC),zC=fe({},Gc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Uy=Ut(zC),jC=fe({},uu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gp}),WC=Ut(jC),HC=fe({},io,{propertyName:0,elapsedTime:0,pseudoElement:0}),GC=Ut(HC),KC=fe({},Gc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),QC=Ut(KC),YC=[9,13,27,32],Kp=Bn&&"CompositionEvent"in window,Xo=null;Bn&&"documentMode"in document&&(Xo=document.documentMode);var JC=Bn&&"TextEvent"in window&&!Xo,A0=Bn&&(!Kp||Xo&&8<Xo&&11>=Xo),Fy=String.fromCharCode(32),Vy=!1;function N0(t,e){switch(t){case"keyup":return YC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function b0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var us=!1;function XC(t,e){switch(t){case"compositionend":return b0(e);case"keypress":return e.which!==32?null:(Vy=!0,Fy);case"textInput":return t=e.data,t===Fy&&Vy?null:t;default:return null}}function ZC(t,e){if(us)return t==="compositionend"||!Kp&&N0(t,e)?(t=R0(),Cl=Wp=dr=null,us=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return A0&&e.locale!=="ko"?null:e.data;default:return null}}var eR={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function By(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!eR[t.type]:e==="textarea"}function x0(t,e,n,r){l0(r),e=Jl(e,"onChange"),0<e.length&&(n=new Hp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Zo=null,wa=null;function tR(t){q0(t,0)}function Kc(t){var e=hs(t);if(n0(e))return t}function nR(t,e){if(t==="change")return e}var P0=!1;if(Bn){var dd;if(Bn){var fd="oninput"in document;if(!fd){var qy=document.createElement("div");qy.setAttribute("oninput","return;"),fd=typeof qy.oninput=="function"}dd=fd}else dd=!1;P0=dd&&(!document.documentMode||9<document.documentMode)}function zy(){Zo&&(Zo.detachEvent("onpropertychange",D0),wa=Zo=null)}function D0(t){if(t.propertyName==="value"&&Kc(wa)){var e=[];x0(e,wa,t,Vp(t)),f0(tR,e)}}function rR(t,e,n){t==="focusin"?(zy(),Zo=e,wa=n,Zo.attachEvent("onpropertychange",D0)):t==="focusout"&&zy()}function iR(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Kc(wa)}function sR(t,e){if(t==="click")return Kc(e)}function oR(t,e){if(t==="input"||t==="change")return Kc(e)}function aR(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var En=typeof Object.is=="function"?Object.is:aR;function _a(t,e){if(En(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Xd.call(e,i)||!En(t[i],e[i]))return!1}return!0}function jy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Wy(t,e){var n=jy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=jy(n)}}function O0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?O0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function L0(){for(var t=window,e=Wl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Wl(t.document)}return e}function Qp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function uR(t){var e=L0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&O0(n.ownerDocument.documentElement,n)){if(r!==null&&Qp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Wy(n,s);var o=Wy(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var lR=Bn&&"documentMode"in document&&11>=document.documentMode,ls=null,vf=null,ea=null,wf=!1;function Hy(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;wf||ls==null||ls!==Wl(r)||(r=ls,"selectionStart"in r&&Qp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ea&&_a(ea,r)||(ea=r,r=Jl(vf,"onSelect"),0<r.length&&(e=new Hp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ls)))}function Qu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var cs={animationend:Qu("Animation","AnimationEnd"),animationiteration:Qu("Animation","AnimationIteration"),animationstart:Qu("Animation","AnimationStart"),transitionend:Qu("Transition","TransitionEnd")},pd={},M0={};Bn&&(M0=document.createElement("div").style,"AnimationEvent"in window||(delete cs.animationend.animation,delete cs.animationiteration.animation,delete cs.animationstart.animation),"TransitionEvent"in window||delete cs.transitionend.transition);function Qc(t){if(pd[t])return pd[t];if(!cs[t])return t;var e=cs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in M0)return pd[t]=e[n];return t}var $0=Qc("animationend"),U0=Qc("animationiteration"),F0=Qc("animationstart"),V0=Qc("transitionend"),B0=new Map,Gy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Lr(t,e){B0.set(t,e),Li(e,[t])}for(var md=0;md<Gy.length;md++){var gd=Gy[md],cR=gd.toLowerCase(),hR=gd[0].toUpperCase()+gd.slice(1);Lr(cR,"on"+hR)}Lr($0,"onAnimationEnd");Lr(U0,"onAnimationIteration");Lr(F0,"onAnimationStart");Lr("dblclick","onDoubleClick");Lr("focusin","onFocus");Lr("focusout","onBlur");Lr(V0,"onTransitionEnd");Os("onMouseEnter",["mouseout","mouseover"]);Os("onMouseLeave",["mouseout","mouseover"]);Os("onPointerEnter",["pointerout","pointerover"]);Os("onPointerLeave",["pointerout","pointerover"]);Li("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Li("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Li("onBeforeInput",["compositionend","keypress","textInput","paste"]);Li("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Li("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Li("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dR=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wo));function Ky(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,cC(r,e,void 0,t),t.currentTarget=null}function q0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,l=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;Ky(i,a,l),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,l=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;Ky(i,a,l),s=u}}}if(Gl)throw t=pf,Gl=!1,pf=null,t}function ie(t,e){var n=e[Sf];n===void 0&&(n=e[Sf]=new Set);var r=t+"__bubble";n.has(r)||(z0(e,t,2,!1),n.add(r))}function yd(t,e,n){var r=0;e&&(r|=4),z0(n,t,r,e)}var Yu="_reactListening"+Math.random().toString(36).slice(2);function Ia(t){if(!t[Yu]){t[Yu]=!0,J_.forEach(function(n){n!=="selectionchange"&&(dR.has(n)||yd(n,!1,t),yd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Yu]||(e[Yu]=!0,yd("selectionchange",!1,e))}}function z0(t,e,n,r){switch(C0(e)){case 1:var i=CC;break;case 4:i=RC;break;default:i=jp}n=i.bind(null,e,n,t),i=void 0,!ff||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function vd(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=ti(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}f0(function(){var l=s,c=Vp(n),h=[];e:{var d=B0.get(t);if(d!==void 0){var p=Hp,m=t;switch(t){case"keypress":if(Rl(n)===0)break e;case"keydown":case"keyup":p=qC;break;case"focusin":m="focus",p=hd;break;case"focusout":m="blur",p=hd;break;case"beforeblur":case"afterblur":p=hd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=My;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=bC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=WC;break;case $0:case U0:case F0:p=DC;break;case V0:p=GC;break;case"scroll":p=AC;break;case"wheel":p=QC;break;case"copy":case"cut":case"paste":p=LC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Uy}var I=(e&4)!==0,R=!I&&t==="scroll",g=I?d!==null?d+"Capture":null:d;I=[];for(var f=l,y;f!==null;){y=f;var v=y.stateNode;if(y.tag===5&&v!==null&&(y=v,g!==null&&(v=ma(f,g),v!=null&&I.push(Ea(f,v,y)))),R)break;f=f.return}0<I.length&&(d=new p(d,m,null,n,c),h.push({event:d,listeners:I}))}}if((e&7)===0){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==hf&&(m=n.relatedTarget||n.fromElement)&&(ti(m)||m[qn]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(m=n.relatedTarget||n.toElement,p=l,m=m?ti(m):null,m!==null&&(R=Mi(m),m!==R||m.tag!==5&&m.tag!==6)&&(m=null)):(p=null,m=l),p!==m)){if(I=My,v="onMouseLeave",g="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(I=Uy,v="onPointerLeave",g="onPointerEnter",f="pointer"),R=p==null?d:hs(p),y=m==null?d:hs(m),d=new I(v,f+"leave",p,n,c),d.target=R,d.relatedTarget=y,v=null,ti(c)===l&&(I=new I(g,f+"enter",m,n,c),I.target=y,I.relatedTarget=R,v=I),R=v,p&&m)t:{for(I=p,g=m,f=0,y=I;y;y=Yi(y))f++;for(y=0,v=g;v;v=Yi(v))y++;for(;0<f-y;)I=Yi(I),f--;for(;0<y-f;)g=Yi(g),y--;for(;f--;){if(I===g||g!==null&&I===g.alternate)break t;I=Yi(I),g=Yi(g)}I=null}else I=null;p!==null&&Qy(h,d,p,I,!1),m!==null&&R!==null&&Qy(h,R,m,I,!0)}}e:{if(d=l?hs(l):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var T=nR;else if(By(d))if(P0)T=oR;else{T=iR;var k=rR}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(T=sR);if(T&&(T=T(t,l))){x0(h,T,n,c);break e}k&&k(t,d,l),t==="focusout"&&(k=d._wrapperState)&&k.controlled&&d.type==="number"&&of(d,"number",d.value)}switch(k=l?hs(l):window,t){case"focusin":(By(k)||k.contentEditable==="true")&&(ls=k,vf=l,ea=null);break;case"focusout":ea=vf=ls=null;break;case"mousedown":wf=!0;break;case"contextmenu":case"mouseup":case"dragend":wf=!1,Hy(h,n,c);break;case"selectionchange":if(lR)break;case"keydown":case"keyup":Hy(h,n,c)}var E;if(Kp)e:{switch(t){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else us?N0(t,n)&&(S="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(S="onCompositionStart");S&&(A0&&n.locale!=="ko"&&(us||S!=="onCompositionStart"?S==="onCompositionEnd"&&us&&(E=R0()):(dr=c,Wp="value"in dr?dr.value:dr.textContent,us=!0)),k=Jl(l,S),0<k.length&&(S=new $y(S,t,null,n,c),h.push({event:S,listeners:k}),E?S.data=E:(E=b0(n),E!==null&&(S.data=E)))),(E=JC?XC(t,n):ZC(t,n))&&(l=Jl(l,"onBeforeInput"),0<l.length&&(c=new $y("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:l}),c.data=E))}q0(h,e)})}function Ea(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Jl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ma(t,n),s!=null&&r.unshift(Ea(t,s,i)),s=ma(t,e),s!=null&&r.push(Ea(t,s,i))),t=t.return}return r}function Yi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Qy(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,l=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&l!==null&&(a=l,i?(u=ma(n,s),u!=null&&o.unshift(Ea(n,u,a))):i||(u=ma(n,s),u!=null&&o.push(Ea(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var fR=/\r\n?/g,pR=/\u0000|\uFFFD/g;function Yy(t){return(typeof t=="string"?t:""+t).replace(fR,`
`).replace(pR,"")}function Ju(t,e,n){if(e=Yy(e),Yy(t)!==e&&n)throw Error(A(425))}function Xl(){}var _f=null;function If(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ef=typeof setTimeout=="function"?setTimeout:void 0,mR=typeof clearTimeout=="function"?clearTimeout:void 0,Jy=typeof Promise=="function"?Promise:void 0,gR=typeof queueMicrotask=="function"?queueMicrotask:typeof Jy!="undefined"?function(t){return Jy.resolve(null).then(t).catch(yR)}:Ef;function yR(t){setTimeout(function(){throw t})}function wd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),va(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);va(e)}function Pn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Xy(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var so=Math.random().toString(36).slice(2),ln="__reactFiber$"+so,Sa="__reactProps$"+so,qn="__reactContainer$"+so,Sf="__reactEvents$"+so,vR="__reactListeners$"+so,wR="__reactHandles$"+so;function ti(t){var e=t[ln];if(e)return e;for(var n=t.parentNode;n;){if(e=n[qn]||n[ln]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Xy(t);t!==null;){if(n=t[ln])return n;t=Xy(t)}return e}t=n,n=t.parentNode}return null}function lu(t){return t=t[ln]||t[qn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function hs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(A(33))}function Yc(t){return t[Sa]||null}var Tf=[],ds=-1;function Mr(t){return{current:t}}function oe(t){0>ds||(t.current=Tf[ds],Tf[ds]=null,ds--)}function re(t,e){ds++,Tf[ds]=t.current,t.current=e}var Tr={},at=Mr(Tr),kt=Mr(!1),yi=Tr;function Ls(t,e){var n=t.type.contextTypes;if(!n)return Tr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ct(t){return t=t.childContextTypes,t!=null}function Zl(){oe(kt),oe(at)}function Zy(t,e,n){if(at.current!==Tr)throw Error(A(168));re(at,e),re(kt,n)}function j0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(A(108,rC(t)||"Unknown",i));return fe({},n,r)}function ec(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Tr,yi=at.current,re(at,t),re(kt,kt.current),!0}function ev(t,e,n){var r=t.stateNode;if(!r)throw Error(A(169));n?(t=j0(t,e,yi),r.__reactInternalMemoizedMergedChildContext=t,oe(kt),oe(at),re(at,t)):oe(kt),re(kt,n)}var bn=null,Jc=!1,_d=!1;function W0(t){bn===null?bn=[t]:bn.push(t)}function _R(t){Jc=!0,W0(t)}function $r(){if(!_d&&bn!==null){_d=!0;var t=0,e=ne;try{var n=bn;for(ne=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}bn=null,Jc=!1}catch(i){throw bn!==null&&(bn=bn.slice(t+1)),y0(Bp,$r),i}finally{ne=e,_d=!1}}return null}var IR=Yn.ReactCurrentBatchConfig;function Zt(t,e){if(t&&t.defaultProps){e=fe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var tc=Mr(null),nc=null,fs=null,Yp=null;function Jp(){Yp=fs=nc=null}function Xp(t){var e=tc.current;oe(tc),t._currentValue=e}function kf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ks(t,e){nc=t,Yp=fs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(xt=!0),t.firstContext=null)}function Qt(t){var e=t._currentValue;if(Yp!==t)if(t={context:t,memoizedValue:e,next:null},fs===null){if(nc===null)throw Error(A(308));fs=t,nc.dependencies={lanes:0,firstContext:t}}else fs=fs.next=t;return e}var mn=null,or=!1;function Zp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function H0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Un(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function vr(t,e){var n=t.updateQueue;n!==null&&(n=n.shared,Ce!==null&&(t.mode&1)!==0&&(X&2)===0?(t=n.interleaved,t===null?(e.next=e,mn===null?mn=[n]:mn.push(n)):(e.next=t.next,t.next=e),n.interleaved=e):(t=n.pending,t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e))}function Al(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,qp(t,n)}}function tv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function rc(t,e,n,r){var i=t.updateQueue;or=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,l=u.next;u.next=null,o===null?s=l:o.next=l,o=u;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=l:a.next=l,c.lastBaseUpdate=u))}if(s!==null){var h=i.baseState;o=0,c=l=u=null,a=s;do{var d=a.lane,p=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=t,I=a;switch(d=e,p=n,I.tag){case 1:if(m=I.payload,typeof m=="function"){h=m.call(p,h,d);break e}h=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=I.payload,d=typeof m=="function"?m.call(p,h,d):m,d==null)break e;h=fe({},h,d);break e;case 2:or=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(l=c=p,u=h):c=c.next=p,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(u=h),i.baseState=u,i.firstBaseUpdate=l,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Vs|=o,t.lanes=o,t.memoizedState=h}}function nv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(A(191,i));i.call(r)}}}var G0=new Y_.Component().refs;function Cf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:fe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Xc={isMounted:function(t){return(t=t._reactInternals)?Mi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=yt(),i=_r(t),s=Un(r,i);s.payload=e,n!=null&&(s.callback=n),vr(t,s),e=Gt(t,i,r),e!==null&&Al(e,t,i)},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=yt(),i=_r(t),s=Un(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),vr(t,s),e=Gt(t,i,r),e!==null&&Al(e,t,i)},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=yt(),r=_r(t),i=Un(n,r);i.tag=2,e!=null&&(i.callback=e),vr(t,i),e=Gt(t,r,n),e!==null&&Al(e,t,r)}};function rv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!_a(n,r)||!_a(i,s):!0}function K0(t,e,n){var r=!1,i=Tr,s=e.contextType;return typeof s=="object"&&s!==null?s=Qt(s):(i=Ct(e)?yi:at.current,r=e.contextTypes,s=(r=r!=null)?Ls(t,i):Tr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Xc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function iv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Xc.enqueueReplaceState(e,e.state,null)}function Rf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=G0,Zp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Qt(s):(s=Ct(e)?yi:at.current,i.context=Ls(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Cf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Xc.enqueueReplaceState(i,i.state,null),rc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}var ps=[],ms=0,ic=null,sc=0,Ft=[],Vt=0,vi=null,Dn=1,On="";function Yr(t,e){ps[ms++]=sc,ps[ms++]=ic,ic=t,sc=e}function Q0(t,e,n){Ft[Vt++]=Dn,Ft[Vt++]=On,Ft[Vt++]=vi,vi=t;var r=Dn;t=On;var i=32-rn(r)-1;r&=~(1<<i),n+=1;var s=32-rn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Dn=1<<32-rn(e)+i|n<<i|r,On=s+t}else Dn=1<<s|n<<i|r,On=t}function em(t){t.return!==null&&(Yr(t,1),Q0(t,1,0))}function tm(t){for(;t===ic;)ic=ps[--ms],ps[ms]=null,sc=ps[--ms],ps[ms]=null;for(;t===vi;)vi=Ft[--Vt],Ft[Vt]=null,On=Ft[--Vt],Ft[Vt]=null,Dn=Ft[--Vt],Ft[Vt]=null}var Ot=null,St=null,ce=!1,en=null;function Y0(t,e){var n=Bt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function sv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ot=t,St=Pn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ot=t,St=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=vi!==null?{id:Dn,overflow:On}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Bt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ot=t,St=null,!0):!1;default:return!1}}function Af(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Nf(t){if(ce){var e=St;if(e){var n=e;if(!sv(t,e)){if(Af(t))throw Error(A(418));e=Pn(n.nextSibling);var r=Ot;e&&sv(t,e)?Y0(r,n):(t.flags=t.flags&-4097|2,ce=!1,Ot=t)}}else{if(Af(t))throw Error(A(418));t.flags=t.flags&-4097|2,ce=!1,Ot=t}}}function ov(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ot=t}function Ao(t){if(t!==Ot)return!1;if(!ce)return ov(t),ce=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!If(t.type,t.memoizedProps)),e&&(e=St)){if(Af(t)){for(t=St;t;)t=Pn(t.nextSibling);throw Error(A(418))}for(;e;)Y0(t,e),e=Pn(e.nextSibling)}if(ov(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(A(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){St=Pn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}St=null}}else St=Ot?Pn(t.stateNode.nextSibling):null;return!0}function Ms(){St=Ot=null,ce=!1}function nm(t){en===null?en=[t]:en.push(t)}function No(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(A(309));var r=n.stateNode}if(!r)throw Error(A(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===G0&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(A(284));if(!n._owner)throw Error(A(290,t))}return t}function Xu(t,e){throw t=Object.prototype.toString.call(e),Error(A(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function av(t){var e=t._init;return e(t._payload)}function J0(t){function e(g,f){if(t){var y=g.deletions;y===null?(g.deletions=[f],g.flags|=16):y.push(f)}}function n(g,f){if(!t)return null;for(;f!==null;)e(g,f),f=f.sibling;return null}function r(g,f){for(g=new Map;f!==null;)f.key!==null?g.set(f.key,f):g.set(f.index,f),f=f.sibling;return g}function i(g,f){return g=kr(g,f),g.index=0,g.sibling=null,g}function s(g,f,y){return g.index=y,t?(y=g.alternate,y!==null?(y=y.index,y<f?(g.flags|=2,f):y):(g.flags|=2,f)):(g.flags|=1048576,f)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,f,y,v){return f===null||f.tag!==6?(f=Cd(y,g.mode,v),f.return=g,f):(f=i(f,y),f.return=g,f)}function u(g,f,y,v){var T=y.type;return T===as?c(g,f,y.props.children,v,y.key):f!==null&&(f.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===sr&&av(T)===f.type)?(v=i(f,y.props),v.ref=No(g,f,y),v.return=g,v):(v=Dl(y.type,y.key,y.props,null,g.mode,v),v.ref=No(g,f,y),v.return=g,v)}function l(g,f,y,v){return f===null||f.tag!==4||f.stateNode.containerInfo!==y.containerInfo||f.stateNode.implementation!==y.implementation?(f=Rd(y,g.mode,v),f.return=g,f):(f=i(f,y.children||[]),f.return=g,f)}function c(g,f,y,v,T){return f===null||f.tag!==7?(f=di(y,g.mode,v,T),f.return=g,f):(f=i(f,y),f.return=g,f)}function h(g,f,y){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Cd(""+f,g.mode,y),f.return=g,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case qu:return y=Dl(f.type,f.key,f.props,null,g.mode,y),y.ref=No(g,null,f),y.return=g,y;case os:return f=Rd(f,g.mode,y),f.return=g,f;case sr:var v=f._init;return h(g,v(f._payload),y)}if(zo(f)||So(f))return f=di(f,g.mode,y,null),f.return=g,f;Xu(g,f)}return null}function d(g,f,y,v){var T=f!==null?f.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return T!==null?null:a(g,f,""+y,v);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case qu:return y.key===T?u(g,f,y,v):null;case os:return y.key===T?l(g,f,y,v):null;case sr:return T=y._init,d(g,f,T(y._payload),v)}if(zo(y)||So(y))return T!==null?null:c(g,f,y,v,null);Xu(g,y)}return null}function p(g,f,y,v,T){if(typeof v=="string"&&v!==""||typeof v=="number")return g=g.get(y)||null,a(f,g,""+v,T);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case qu:return g=g.get(v.key===null?y:v.key)||null,u(f,g,v,T);case os:return g=g.get(v.key===null?y:v.key)||null,l(f,g,v,T);case sr:var k=v._init;return p(g,f,y,k(v._payload),T)}if(zo(v)||So(v))return g=g.get(y)||null,c(f,g,v,T,null);Xu(f,v)}return null}function m(g,f,y,v){for(var T=null,k=null,E=f,S=f=0,F=null;E!==null&&S<y.length;S++){E.index>S?(F=E,E=null):F=E.sibling;var O=d(g,E,y[S],v);if(O===null){E===null&&(E=F);break}t&&E&&O.alternate===null&&e(g,E),f=s(O,f,S),k===null?T=O:k.sibling=O,k=O,E=F}if(S===y.length)return n(g,E),ce&&Yr(g,S),T;if(E===null){for(;S<y.length;S++)E=h(g,y[S],v),E!==null&&(f=s(E,f,S),k===null?T=E:k.sibling=E,k=E);return ce&&Yr(g,S),T}for(E=r(g,E);S<y.length;S++)F=p(E,g,S,y[S],v),F!==null&&(t&&F.alternate!==null&&E.delete(F.key===null?S:F.key),f=s(F,f,S),k===null?T=F:k.sibling=F,k=F);return t&&E.forEach(function(q){return e(g,q)}),ce&&Yr(g,S),T}function I(g,f,y,v){var T=So(y);if(typeof T!="function")throw Error(A(150));if(y=T.call(y),y==null)throw Error(A(151));for(var k=T=null,E=f,S=f=0,F=null,O=y.next();E!==null&&!O.done;S++,O=y.next()){E.index>S?(F=E,E=null):F=E.sibling;var q=d(g,E,O.value,v);if(q===null){E===null&&(E=F);break}t&&E&&q.alternate===null&&e(g,E),f=s(q,f,S),k===null?T=q:k.sibling=q,k=q,E=F}if(O.done)return n(g,E),ce&&Yr(g,S),T;if(E===null){for(;!O.done;S++,O=y.next())O=h(g,O.value,v),O!==null&&(f=s(O,f,S),k===null?T=O:k.sibling=O,k=O);return ce&&Yr(g,S),T}for(E=r(g,E);!O.done;S++,O=y.next())O=p(E,g,S,O.value,v),O!==null&&(t&&O.alternate!==null&&E.delete(O.key===null?S:O.key),f=s(O,f,S),k===null?T=O:k.sibling=O,k=O);return t&&E.forEach(function(Ae){return e(g,Ae)}),ce&&Yr(g,S),T}function R(g,f,y,v){if(typeof y=="object"&&y!==null&&y.type===as&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case qu:e:{for(var T=y.key,k=f;k!==null;){if(k.key===T){if(T=y.type,T===as){if(k.tag===7){n(g,k.sibling),f=i(k,y.props.children),f.return=g,g=f;break e}}else if(k.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===sr&&av(T)===k.type){n(g,k.sibling),f=i(k,y.props),f.ref=No(g,k,y),f.return=g,g=f;break e}n(g,k);break}else e(g,k);k=k.sibling}y.type===as?(f=di(y.props.children,g.mode,v,y.key),f.return=g,g=f):(v=Dl(y.type,y.key,y.props,null,g.mode,v),v.ref=No(g,f,y),v.return=g,g=v)}return o(g);case os:e:{for(k=y.key;f!==null;){if(f.key===k)if(f.tag===4&&f.stateNode.containerInfo===y.containerInfo&&f.stateNode.implementation===y.implementation){n(g,f.sibling),f=i(f,y.children||[]),f.return=g,g=f;break e}else{n(g,f);break}else e(g,f);f=f.sibling}f=Rd(y,g.mode,v),f.return=g,g=f}return o(g);case sr:return k=y._init,R(g,f,k(y._payload),v)}if(zo(y))return m(g,f,y,v);if(So(y))return I(g,f,y,v);Xu(g,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,f!==null&&f.tag===6?(n(g,f.sibling),f=i(f,y),f.return=g,g=f):(n(g,f),f=Cd(y,g.mode,v),f.return=g,g=f),o(g)):n(g,f)}return R}var $s=J0(!0),X0=J0(!1),cu={},vn=Mr(cu),Ta=Mr(cu),ka=Mr(cu);function ni(t){if(t===cu)throw Error(A(174));return t}function rm(t,e){switch(re(ka,e),re(Ta,t),re(vn,cu),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:uf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=uf(e,t)}oe(vn),re(vn,e)}function Us(){oe(vn),oe(Ta),oe(ka)}function Z0(t){ni(ka.current);var e=ni(vn.current),n=uf(e,t.type);e!==n&&(re(Ta,t),re(vn,n))}function im(t){Ta.current===t&&(oe(vn),oe(Ta))}var de=Mr(0);function oc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Id=[];function sm(){for(var t=0;t<Id.length;t++)Id[t]._workInProgressVersionPrimary=null;Id.length=0}var Nl=Yn.ReactCurrentDispatcher,Wt=Yn.ReactCurrentBatchConfig,Fs=0,me=null,rt=null,Le=null,ac=!1,ta=!1,Ca=0,ER=0;function tt(){throw Error(A(321))}function om(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!En(t[n],e[n]))return!1;return!0}function am(t,e,n,r,i,s){if(Fs=s,me=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Nl.current=t===null||t.memoizedState===null?CR:RR,t=n(r,i),ta){s=0;do{if(ta=!1,Ca=0,25<=s)throw Error(A(301));s+=1,Le=rt=null,e.updateQueue=null,Nl.current=AR,t=n(r,i)}while(ta)}if(Nl.current=uc,e=rt!==null&&rt.next!==null,Fs=0,Le=rt=me=null,ac=!1,e)throw Error(A(300));return t}function um(){var t=Ca!==0;return Ca=0,t}function Nn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?me.memoizedState=Le=t:Le=Le.next=t,Le}function Cn(){if(rt===null){var t=me.alternate;t=t!==null?t.memoizedState:null}else t=rt.next;var e=Le===null?me.memoizedState:Le.next;if(e!==null)Le=e,rt=t;else{if(t===null)throw Error(A(310));rt=t,t={memoizedState:rt.memoizedState,baseState:rt.baseState,baseQueue:rt.baseQueue,queue:rt.queue,next:null},Le===null?me.memoizedState=Le=t:Le=Le.next=t}return Le}function ci(t,e){return typeof e=="function"?e(t):e}function Zu(t){var e=Cn(),n=e.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=t;var r=rt,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,l=s;do{var c=l.lane;if((Fs&c)===c)u!==null&&(u=u.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),r=l.hasEagerState?l.eagerState:t(r,l.action);else{var h={lane:c,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null};u===null?(a=u=h,o=r):u=u.next=h,me.lanes|=c,Vs|=c}l=l.next}while(l!==null&&l!==s);u===null?o=r:u.next=a,En(r,e.memoizedState)||(xt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,me.lanes|=s,Vs|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function el(t){var e=Cn(),n=e.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);En(s,e.memoizedState)||(xt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function eI(){}function tI(t,e){var n=me,r=Cn(),i=e(),s=!En(r.memoizedState,i);if(s&&(r.memoizedState=i,xt=!0),r=r.queue,Aa(iI.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Le!==null&&Le.memoizedState.tag&1){if(n.flags|=2048,Ra(9,rI.bind(null,n,r,i,e),void 0,null),Ce===null)throw Error(A(349));(Fs&30)!==0||nI(n,e,i)}return i}function nI(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=me.updateQueue,e===null?(e={lastEffect:null,stores:null},me.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function rI(t,e,n,r){e.value=n,e.getSnapshot=r,sI(e)&&Gt(t,1,-1)}function iI(t,e,n){return n(function(){sI(e)&&Gt(t,1,-1)})}function sI(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!En(t,n)}catch{return!0}}function Ed(t){var e=Nn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ci,lastRenderedState:t},e.queue=t,t=t.dispatch=kR.bind(null,me,t),[e.memoizedState,t]}function Ra(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=me.updateQueue,e===null?(e={lastEffect:null,stores:null},me.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function oI(){return Cn().memoizedState}function bl(t,e,n,r){var i=Nn();me.flags|=t,i.memoizedState=Ra(1|e,n,void 0,r===void 0?null:r)}function Zc(t,e,n,r){var i=Cn();r=r===void 0?null:r;var s=void 0;if(rt!==null){var o=rt.memoizedState;if(s=o.destroy,r!==null&&om(r,o.deps)){i.memoizedState=Ra(e,n,s,r);return}}me.flags|=t,i.memoizedState=Ra(1|e,n,s,r)}function Sd(t,e){return bl(8390656,8,t,e)}function Aa(t,e){return Zc(2048,8,t,e)}function aI(t,e){return Zc(4,2,t,e)}function uI(t,e){return Zc(4,4,t,e)}function lI(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function cI(t,e,n){return n=n!=null?n.concat([t]):null,Zc(4,4,lI.bind(null,e,t),n)}function lm(){}function hI(t,e){var n=Cn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&om(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function dI(t,e){var n=Cn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&om(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function SR(t,e){var n=ne;ne=n!==0&&4>n?n:4,t(!0);var r=Wt.transition;Wt.transition={};try{t(!1),e()}finally{ne=n,Wt.transition=r}}function fI(){return Cn().memoizedState}function TR(t,e,n){var r=_r(t);n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},pI(t)?mI(e,n):(gI(t,e,n),n=yt(),t=Gt(t,r,n),t!==null&&yI(t,e,r))}function kR(t,e,n){var r=_r(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(pI(t))mI(e,i);else{gI(t,e,i);var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,En(a,o))return}catch{}finally{}n=yt(),t=Gt(t,r,n),t!==null&&yI(t,e,r)}}function pI(t){var e=t.alternate;return t===me||e!==null&&e===me}function mI(t,e){ta=ac=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function gI(t,e,n){Ce!==null&&(t.mode&1)!==0&&(X&2)===0?(t=e.interleaved,t===null?(n.next=n,mn===null?mn=[e]:mn.push(e)):(n.next=t.next,t.next=n),e.interleaved=n):(t=e.pending,t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n)}function yI(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,qp(t,n)}}var uc={readContext:Qt,useCallback:tt,useContext:tt,useEffect:tt,useImperativeHandle:tt,useInsertionEffect:tt,useLayoutEffect:tt,useMemo:tt,useReducer:tt,useRef:tt,useState:tt,useDebugValue:tt,useDeferredValue:tt,useTransition:tt,useMutableSource:tt,useSyncExternalStore:tt,useId:tt,unstable_isNewReconciler:!1},CR={readContext:Qt,useCallback:function(t,e){return Nn().memoizedState=[t,e===void 0?null:e],t},useContext:Qt,useEffect:Sd,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,bl(4194308,4,lI.bind(null,e,t),n)},useLayoutEffect:function(t,e){return bl(4194308,4,t,e)},useInsertionEffect:function(t,e){return bl(4,2,t,e)},useMemo:function(t,e){var n=Nn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Nn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=TR.bind(null,me,t),[r.memoizedState,t]},useRef:function(t){var e=Nn();return t={current:t},e.memoizedState=t},useState:Ed,useDebugValue:lm,useDeferredValue:function(t){var e=Ed(t),n=e[0],r=e[1];return Sd(function(){var i=Wt.transition;Wt.transition={};try{r(t)}finally{Wt.transition=i}},[t]),n},useTransition:function(){var t=Ed(!1),e=t[0];return t=SR.bind(null,t[1]),Nn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=me,i=Nn();if(ce){if(n===void 0)throw Error(A(407));n=n()}else{if(n=e(),Ce===null)throw Error(A(349));(Fs&30)!==0||nI(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Sd(iI.bind(null,r,s,t),[t]),r.flags|=2048,Ra(9,rI.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Nn(),e=Ce.identifierPrefix;if(ce){var n=On,r=Dn;n=(r&~(1<<32-rn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ca++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ER++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},RR={readContext:Qt,useCallback:hI,useContext:Qt,useEffect:Aa,useImperativeHandle:cI,useInsertionEffect:aI,useLayoutEffect:uI,useMemo:dI,useReducer:Zu,useRef:oI,useState:function(){return Zu(ci)},useDebugValue:lm,useDeferredValue:function(t){var e=Zu(ci),n=e[0],r=e[1];return Aa(function(){var i=Wt.transition;Wt.transition={};try{r(t)}finally{Wt.transition=i}},[t]),n},useTransition:function(){var t=Zu(ci)[0],e=Cn().memoizedState;return[t,e]},useMutableSource:eI,useSyncExternalStore:tI,useId:fI,unstable_isNewReconciler:!1},AR={readContext:Qt,useCallback:hI,useContext:Qt,useEffect:Aa,useImperativeHandle:cI,useInsertionEffect:aI,useLayoutEffect:uI,useMemo:dI,useReducer:el,useRef:oI,useState:function(){return el(ci)},useDebugValue:lm,useDeferredValue:function(t){var e=el(ci),n=e[0],r=e[1];return Aa(function(){var i=Wt.transition;Wt.transition={};try{r(t)}finally{Wt.transition=i}},[t]),n},useTransition:function(){var t=el(ci)[0],e=Cn().memoizedState;return[t,e]},useMutableSource:eI,useSyncExternalStore:tI,useId:fI,unstable_isNewReconciler:!1};function cm(t,e){try{var n="",r=e;do n+=nC(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i}}function bf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var NR=typeof WeakMap=="function"?WeakMap:Map;function vI(t,e,n){n=Un(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){hc||(hc=!0,Ff=r),bf(t,e)},n}function wI(t,e,n){n=Un(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){bf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){bf(t,e),typeof r!="function"&&(wr===null?wr=new Set([this]):wr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function uv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new NR;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=zR.bind(null,t,e,n),e.then(t,t))}function lv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function cv(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Un(-1,1),e.tag=2,vr(n,e))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var _I,xf,II,EI;_I=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};xf=function(){};II=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ni(vn.current);var s=null;switch(n){case"input":i=rf(t,i),r=rf(t,r),s=[];break;case"select":i=fe({},i,{value:void 0}),r=fe({},r,{value:void 0}),s=[];break;case"textarea":i=af(t,i),r=af(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Xl)}lf(n,r);var o;n=null;for(l in i)if(!r.hasOwnProperty(l)&&i.hasOwnProperty(l)&&i[l]!=null)if(l==="style"){var a=i[l];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else l!=="dangerouslySetInnerHTML"&&l!=="children"&&l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(fa.hasOwnProperty(l)?s||(s=[]):(s=s||[]).push(l,null));for(l in r){var u=r[l];if(a=i!=null?i[l]:void 0,r.hasOwnProperty(l)&&u!==a&&(u!=null||a!=null))if(l==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(l,n)),n=u;else l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(l,u)):l==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(l,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&(fa.hasOwnProperty(l)?(u!=null&&l==="onScroll"&&ie("scroll",t),s||a===u||(s=[])):(s=s||[]).push(l,u))}n&&(s=s||[]).push("style",n);var l=s;(e.updateQueue=l)&&(e.flags|=4)}};EI=function(t,e,n,r){n!==r&&(e.flags|=4)};function bo(t,e){if(!ce)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function nt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function bR(t,e,n){var r=e.pendingProps;switch(tm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(e),null;case 1:return Ct(e.type)&&Zl(),nt(e),null;case 3:return r=e.stateNode,Us(),oe(kt),oe(at),sm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ao(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,en!==null&&(qf(en),en=null))),xf(t,e),nt(e),null;case 5:im(e);var i=ni(ka.current);if(n=e.type,t!==null&&e.stateNode!=null)II(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(A(166));return nt(e),null}if(t=ni(vn.current),Ao(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[ln]=e,r[Sa]=s,t=(e.mode&1)!==0,n){case"dialog":ie("cancel",r),ie("close",r);break;case"iframe":case"object":case"embed":ie("load",r);break;case"video":case"audio":for(i=0;i<Wo.length;i++)ie(Wo[i],r);break;case"source":ie("error",r);break;case"img":case"image":case"link":ie("error",r),ie("load",r);break;case"details":ie("toggle",r);break;case"input":Cy(r,s),ie("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ie("invalid",r);break;case"textarea":Ay(r,s),ie("invalid",r)}lf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(Ju(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(Ju(r.textContent,a,t),i=["children",""+a]):fa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ie("scroll",r)}switch(n){case"input":zu(r),Ry(r,s,!0);break;case"textarea":zu(r),Ny(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Xl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=s0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[ln]=e,t[Sa]=r,_I(t,e,!1,!1),e.stateNode=t;e:{switch(o=cf(n,r),n){case"dialog":ie("cancel",t),ie("close",t),i=r;break;case"iframe":case"object":case"embed":ie("load",t),i=r;break;case"video":case"audio":for(i=0;i<Wo.length;i++)ie(Wo[i],t);i=r;break;case"source":ie("error",t),i=r;break;case"img":case"image":case"link":ie("error",t),ie("load",t),i=r;break;case"details":ie("toggle",t),i=r;break;case"input":Cy(t,r),i=rf(t,r),ie("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=fe({},r,{value:void 0}),ie("invalid",t);break;case"textarea":Ay(t,r),i=af(t,r),ie("invalid",t);break;default:i=r}lf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?u0(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&o0(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&pa(t,u):typeof u=="number"&&pa(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(fa.hasOwnProperty(s)?u!=null&&s==="onScroll"&&ie("scroll",t):u!=null&&Mp(t,s,u,o))}switch(n){case"input":zu(t),Ry(t,r,!1);break;case"textarea":zu(t),Ny(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Sr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Is(t,!!r.multiple,s,!1):r.defaultValue!=null&&Is(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Xl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return nt(e),null;case 6:if(t&&e.stateNode!=null)EI(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(A(166));if(n=ni(ka.current),ni(vn.current),Ao(e)){if(r=e.stateNode,n=e.memoizedProps,r[ln]=e,(s=r.nodeValue!==n)&&(t=Ot,t!==null))switch(o=(t.mode&1)!==0,t.tag){case 3:Ju(r.nodeValue,n,o);break;case 5:t.memoizedProps[void 0]!==!0&&Ju(r.nodeValue,n,o)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ln]=e,e.stateNode=r}return nt(e),null;case 13:if(oe(de),r=e.memoizedState,ce&&St!==null&&(e.mode&1)!==0&&(e.flags&128)===0){for(r=St;r;)r=Pn(r.nextSibling);return Ms(),e.flags|=98560,e}if(r!==null&&r.dehydrated!==null){if(r=Ao(e),t===null){if(!r)throw Error(A(318));if(r=e.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(A(317));r[ln]=e}else Ms(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;return nt(e),null}return en!==null&&(qf(en),en=null),(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,n=!1,t===null?Ao(e):n=t.memoizedState!==null,r&&!n&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(de.current&1)!==0?be===0&&(be=3):gm())),e.updateQueue!==null&&(e.flags|=4),nt(e),null);case 4:return Us(),xf(t,e),t===null&&Ia(e.stateNode.containerInfo),nt(e),null;case 10:return Xp(e.type._context),nt(e),null;case 17:return Ct(e.type)&&Zl(),nt(e),null;case 19:if(oe(de),s=e.memoizedState,s===null)return nt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)bo(s,!1);else{if(be!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=oc(t),o!==null){for(e.flags|=128,bo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return re(de,de.current&1|2),e.child}t=t.sibling}s.tail!==null&&we()>Bs&&(e.flags|=128,r=!0,bo(s,!1),e.lanes=4194304)}else{if(!r)if(t=oc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),bo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ce)return nt(e),null}else 2*we()-s.renderingStartTime>Bs&&n!==1073741824&&(e.flags|=128,r=!0,bo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=we(),e.sibling=null,n=de.current,re(de,r?n&1|2:n&1),e):(nt(e),null);case 22:case 23:return mm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(Nt&1073741824)!==0&&(nt(e),e.subtreeFlags&6&&(e.flags|=8192)):nt(e),null;case 24:return null;case 25:return null}throw Error(A(156,e.tag))}var xR=Yn.ReactCurrentOwner,xt=!1;function ct(t,e,n,r){e.child=t===null?X0(e,null,n,r):$s(e,t.child,n,r)}function hv(t,e,n,r,i){n=n.render;var s=e.ref;return ks(e,i),r=am(t,e,n,r,s,i),n=um(),t!==null&&!xt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,zn(t,e,i)):(ce&&n&&em(e),e.flags|=1,ct(t,e,r,i),e.child)}function dv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!ym(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,SI(t,e,s,r,i)):(t=Dl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:_a,n(o,r)&&t.ref===e.ref)return zn(t,e,i)}return e.flags|=1,t=kr(s,r),t.ref=e.ref,t.return=e,e.child=t}function SI(t,e,n,r,i){if(t!==null&&_a(t.memoizedProps,r)&&t.ref===e.ref)if(xt=!1,(t.lanes&i)!==0)(t.flags&131072)!==0&&(xt=!0);else return e.lanes=t.lanes,zn(t,e,i);return Pf(t,e,n,r,i)}function TI(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null},re(gs,Nt),Nt|=n;else if((n&1073741824)!==0)e.memoizedState={baseLanes:0,cachePool:null},r=s!==null?s.baseLanes:n,re(gs,Nt),Nt|=r;else return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null},e.updateQueue=null,re(gs,Nt),Nt|=t,null;else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,re(gs,Nt),Nt|=r;return ct(t,e,i,n),e.child}function kI(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Pf(t,e,n,r,i){var s=Ct(n)?yi:at.current;return s=Ls(e,s),ks(e,i),n=am(t,e,n,r,s,i),r=um(),t!==null&&!xt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,zn(t,e,i)):(ce&&r&&em(e),e.flags|=1,ct(t,e,n,i),e.child)}function fv(t,e,n,r,i){if(Ct(n)){var s=!0;ec(e)}else s=!1;if(ks(e,i),e.stateNode===null)t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),K0(e,n,r),Rf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,l=n.contextType;typeof l=="object"&&l!==null?l=Qt(l):(l=Ct(n)?yi:at.current,l=Ls(e,l));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==l)&&iv(e,o,r,l),or=!1;var d=e.memoizedState;o.state=d,rc(e,r,o,i),u=e.memoizedState,a!==r||d!==u||kt.current||or?(typeof c=="function"&&(Cf(e,n,c,r),u=e.memoizedState),(a=or||rv(e,n,a,r,d,u,l))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=l,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,H0(t,e),a=e.memoizedProps,l=e.type===e.elementType?a:Zt(e.type,a),o.props=l,h=e.pendingProps,d=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Qt(u):(u=Ct(n)?yi:at.current,u=Ls(e,u));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==u)&&iv(e,o,r,u),or=!1,d=e.memoizedState,o.state=d,rc(e,r,o,i);var m=e.memoizedState;a!==h||d!==m||kt.current||or?(typeof p=="function"&&(Cf(e,n,p,r),m=e.memoizedState),(l=or||rv(e,n,l,r,d,m,u)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,m,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,m,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=m),o.props=r,o.state=m,o.context=u,r=l):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Df(t,e,n,r,s,i)}function Df(t,e,n,r,i,s){kI(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&ev(e,n,!1),zn(t,e,s);r=e.stateNode,xR.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=$s(e,t.child,null,s),e.child=$s(e,null,a,s)):ct(t,e,a,s),e.memoizedState=r.state,i&&ev(e,n,!0),e.child}function CI(t){var e=t.stateNode;e.pendingContext?Zy(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Zy(t,e.context,!1),rm(t,e.containerInfo)}function pv(t,e,n,r,i){return Ms(),nm(i),e.flags|=256,ct(t,e,n,r),e.child}var tl={dehydrated:null,treeContext:null,retryLane:0};function nl(t){return{baseLanes:t,cachePool:null}}function RI(t,e,n){var r=e.pendingProps,i=de.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),re(de,i&1),t===null)return Nf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(i=r.children,t=r.fallback,s?(r=e.mode,s=e.child,i={mode:"hidden",children:i},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=i):s=pc(i,r,0,null),t=di(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=nl(n),e.memoizedState=tl,t):Of(e,i));if(i=t.memoizedState,i!==null){if(a=i.dehydrated,a!==null){if(o)return e.flags&256?(e.flags&=-257,rl(t,e,n,Error(A(422)))):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=pc({mode:"visible",children:r.children},i,0,null),s=di(s,i,n,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,(e.mode&1)!==0&&$s(e,t.child,null,n),e.child.memoizedState=nl(n),e.memoizedState=tl,s);if((e.mode&1)===0)e=rl(t,e,n,null);else if(a.data==="$!")e=rl(t,e,n,Error(A(419)));else if(r=(n&t.childLanes)!==0,xt||r){if(r=Ce,r!==null){switch(n&-n){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}r=(s&(r.suspendedLanes|n))!==0?0:s,r!==0&&r!==i.retryLane&&(i.retryLane=r,Gt(t,r,-1))}gm(),e=rl(t,e,n,Error(A(421)))}else a.data==="$?"?(e.flags|=128,e.child=t.child,e=jR.bind(null,t),a._reactRetry=e,e=null):(n=i.treeContext,St=Pn(a.nextSibling),Ot=e,ce=!0,en=null,n!==null&&(Ft[Vt++]=Dn,Ft[Vt++]=On,Ft[Vt++]=vi,Dn=n.id,On=n.overflow,vi=e),e=Of(e,e.pendingProps.children),e.flags|=4096);return e}return s?(r=gv(t,e,r.children,r.fallback,n),s=e.child,i=t.child.memoizedState,s.memoizedState=i===null?nl(n):{baseLanes:i.baseLanes|n,cachePool:null},s.childLanes=t.childLanes&~n,e.memoizedState=tl,r):(n=mv(t,e,r.children,n),e.memoizedState=null,n)}return s?(r=gv(t,e,r.children,r.fallback,n),s=e.child,i=t.child.memoizedState,s.memoizedState=i===null?nl(n):{baseLanes:i.baseLanes|n,cachePool:null},s.childLanes=t.childLanes&~n,e.memoizedState=tl,r):(n=mv(t,e,r.children,n),e.memoizedState=null,n)}function Of(t,e){return e=pc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function mv(t,e,n,r){var i=t.child;return t=i.sibling,n=kr(i,{mode:"visible",children:n}),(e.mode&1)===0&&(n.lanes=r),n.return=e,n.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=n}function gv(t,e,n,r,i){var s=e.mode;t=t.child;var o=t.sibling,a={mode:"hidden",children:n};return(s&1)===0&&e.child!==t?(n=e.child,n.childLanes=0,n.pendingProps=a,e.deletions=null):(n=kr(t,a),n.subtreeFlags=t.subtreeFlags&14680064),o!==null?r=kr(o,r):(r=di(r,s,i,null),r.flags|=2),r.return=e,n.return=e,n.sibling=r,e.child=n,r}function rl(t,e,n,r){return r!==null&&nm(r),$s(e,t.child,null,n),t=Of(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function yv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),kf(t.return,e,n)}function Td(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function AI(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ct(t,e,r.children,n),r=de.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&yv(t,n,e);else if(t.tag===19)yv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(re(de,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&oc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Td(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&oc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Td(e,!0,n,null,s);break;case"together":Td(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function zn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Vs|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(A(153));if(e.child!==null){for(t=e.child,n=kr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=kr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function PR(t,e,n){switch(e.tag){case 3:CI(e),Ms();break;case 5:Z0(e);break;case 1:Ct(e.type)&&ec(e);break;case 4:rm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;re(tc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(re(de,de.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?RI(t,e,n):(re(de,de.current&1),t=zn(t,e,n),t!==null?t.sibling:null);re(de,de.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return AI(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),re(de,de.current),r)break;return null;case 22:case 23:return e.lanes=0,TI(t,e,n)}return zn(t,e,n)}function DR(t,e){switch(tm(e),e.tag){case 1:return Ct(e.type)&&Zl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Us(),oe(kt),oe(at),sm(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return im(e),null;case 13:if(oe(de),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(A(340));Ms()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return oe(de),null;case 4:return Us(),null;case 10:return Xp(e.type._context),null;case 22:case 23:return mm(),null;case 24:return null;default:return null}}var il=!1,ri=!1,OR=typeof WeakSet=="function"?WeakSet:Set,D=null;function lc(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Tt(t,e,r)}else n.current=null}function Lf(t,e,n){try{n()}catch(r){Tt(t,e,r)}}var vv=!1;function LR(t,e){if(t=L0(),Qp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,l=0,c=0,h=t,d=null;t:for(;;){for(var p;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(u=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++l===i&&(a=o),d===s&&++c===r&&(u=o),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(_f={focusedElem:t,selectionRange:n},D=e;D!==null;)if(e=D,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,D=t;else for(;D!==null;){e=D;try{var m=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var I=m.memoizedProps,R=m.memoizedState,g=e.stateNode,f=g.getSnapshotBeforeUpdate(e.elementType===e.type?I:Zt(e.type,I),R);g.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var y=e.stateNode.containerInfo;if(y.nodeType===1)y.textContent="";else if(y.nodeType===9){var v=y.body;v!=null&&(v.textContent="")}break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(T){Tt(e,e.return,T)}if(t=e.sibling,t!==null){t.return=e.return,D=t;break}D=e.return}return m=vv,vv=!1,m}function Na(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Lf(e,n,s)}i=i.next}while(i!==r)}}function eh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Mf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function wv(t,e,n){if(yn&&typeof yn.onCommitFiberUnmount=="function")try{yn.onCommitFiberUnmount(Hc,e)}catch{}switch(e.tag){case 0:case 11:case 14:case 15:if(t=e.updateQueue,t!==null&&(t=t.lastEffect,t!==null)){var r=t=t.next;do{var i=r,s=i.destroy;i=i.tag,s!==void 0&&((i&2)!==0||(i&4)!==0)&&Lf(e,n,s),r=r.next}while(r!==t)}break;case 1:if(lc(e,n),t=e.stateNode,typeof t.componentWillUnmount=="function")try{t.props=e.memoizedProps,t.state=e.memoizedState,t.componentWillUnmount()}catch(o){Tt(e,n,o)}break;case 5:lc(e,n);break;case 4:xI(t,e,n)}}function NI(t){var e=t.alternate;e!==null&&(t.alternate=null,NI(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ln],delete e[Sa],delete e[Sf],delete e[vR],delete e[wR])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function bI(t){return t.tag===5||t.tag===3||t.tag===4}function _v(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||bI(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Iv(t){e:{for(var e=t.return;e!==null;){if(bI(e))break e;e=e.return}throw Error(A(160))}var n=e;switch(n.tag){case 5:e=n.stateNode,n.flags&32&&(pa(e,""),n.flags&=-33),n=_v(t),Uf(t,n,e);break;case 3:case 4:e=n.stateNode.containerInfo,n=_v(t),$f(t,n,e);break;default:throw Error(A(161))}}function $f(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Xl));else if(r!==4&&(t=t.child,t!==null))for($f(t,e,n),t=t.sibling;t!==null;)$f(t,e,n),t=t.sibling}function Uf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Uf(t,e,n),t=t.sibling;t!==null;)Uf(t,e,n),t=t.sibling}function xI(t,e,n){for(var r=e,i=!1,s,o;;){if(!i){i=r.return;e:for(;;){if(i===null)throw Error(A(160));switch(s=i.stateNode,i.tag){case 5:o=!1;break e;case 3:s=s.containerInfo,o=!0;break e;case 4:s=s.containerInfo,o=!0;break e}i=i.return}i=!0}if(r.tag===5||r.tag===6){e:for(var a=t,u=r,l=n,c=u;;)if(wv(a,c,l),c.child!==null&&c.tag!==4)c.child.return=c,c=c.child;else{if(c===u)break e;for(;c.sibling===null;){if(c.return===null||c.return===u)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}o?(a=s,u=r.stateNode,a.nodeType===8?a.parentNode.removeChild(u):a.removeChild(u)):s.removeChild(r.stateNode)}else if(r.tag===18)o?(a=s,u=r.stateNode,a.nodeType===8?wd(a.parentNode,u):a.nodeType===1&&wd(a,u),va(a)):wd(s,r.stateNode);else if(r.tag===4){if(r.child!==null){s=r.stateNode.containerInfo,o=!0,r.child.return=r,r=r.child;continue}}else if(wv(t,r,n),r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return;r=r.return,r.tag===4&&(i=!1)}r.sibling.return=r.return,r=r.sibling}}function kd(t,e){switch(e.tag){case 0:case 11:case 14:case 15:Na(3,e,e.return),eh(3,e),Na(5,e,e.return);return;case 1:return;case 5:var n=e.stateNode;if(n!=null){var r=e.memoizedProps,i=t!==null?t.memoizedProps:r;t=e.type;var s=e.updateQueue;if(e.updateQueue=null,s!==null){for(t==="input"&&r.type==="radio"&&r.name!=null&&r0(n,r),cf(t,i),e=cf(t,r),i=0;i<s.length;i+=2){var o=s[i],a=s[i+1];o==="style"?u0(n,a):o==="dangerouslySetInnerHTML"?o0(n,a):o==="children"?pa(n,a):Mp(n,o,a,e)}switch(t){case"input":sf(n,r);break;case"textarea":i0(n,r);break;case"select":t=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,s=r.value,s!=null?Is(n,!!r.multiple,s,!1):t!==!!r.multiple&&(r.defaultValue!=null?Is(n,!!r.multiple,r.defaultValue,!0):Is(n,!!r.multiple,r.multiple?[]:"",!1))}n[Sa]=r}}return;case 6:if(e.stateNode===null)throw Error(A(162));e.stateNode.nodeValue=e.memoizedProps;return;case 3:t!==null&&t.memoizedState.isDehydrated&&va(e.stateNode.containerInfo);return;case 12:return;case 13:Ev(e);return;case 19:Ev(e);return;case 17:return}throw Error(A(163))}function Ev(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new OR),e.forEach(function(r){var i=WR.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function MR(t,e){for(D=e;D!==null;){e=D;var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{xI(t,i,e);var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(S){Tt(i,e,S)}}if(n=e.child,(e.subtreeFlags&12854)!==0&&n!==null)n.return=e,D=n;else for(;D!==null;){e=D;try{var o=e.flags;if(o&32&&pa(e.stateNode,""),o&512){var a=e.alternate;if(a!==null){var u=a.ref;u!==null&&(typeof u=="function"?u(null):u.current=null)}}if(o&8192)switch(e.tag){case 13:if(e.memoizedState!==null){var l=e.alternate;(l===null||l.memoizedState===null)&&(fm=we())}break;case 22:var c=e.memoizedState!==null,h=e.alternate,d=h!==null&&h.memoizedState!==null;n=e;e:{r=n,i=c;for(var p=null,m=r;;){if(m.tag===5){if(p===null){p=m;var I=m.stateNode;if(i){var R=I.style;typeof R.setProperty=="function"?R.setProperty("display","none","important"):R.display="none"}else{var g=m.stateNode,f=m.memoizedProps.style,y=f!=null&&f.hasOwnProperty("display")?f.display:null;g.style.display=a0("display",y)}}}else if(m.tag===6)p===null&&(m.stateNode.nodeValue=i?"":m.memoizedProps);else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===r)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===r)break;for(;m.sibling===null;){if(m.return===null||m.return===r)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}if(c&&!d&&(n.mode&1)!==0){D=n;for(var v=n.child;v!==null;){for(n=D=v;D!==null;){r=D;var T=r.child;switch(r.tag){case 0:case 11:case 14:case 15:Na(4,r,r.return);break;case 1:lc(r,r.return);var k=r.stateNode;if(typeof k.componentWillUnmount=="function"){var E=r.return;try{k.props=r.memoizedProps,k.state=r.memoizedState,k.componentWillUnmount()}catch(S){Tt(r,E,S)}}break;case 5:lc(r,r.return);break;case 22:if(r.memoizedState!==null){Tv(n);continue}}T!==null?(T.return=r,D=T):Tv(n)}v=v.sibling}}}switch(o&4102){case 2:Iv(e),e.flags&=-3;break;case 6:Iv(e),e.flags&=-3,kd(e.alternate,e);break;case 4096:e.flags&=-4097;break;case 4100:e.flags&=-4097,kd(e.alternate,e);break;case 4:kd(e.alternate,e)}}catch(S){Tt(e,e.return,S)}if(n=e.sibling,n!==null){n.return=e.return,D=n;break}D=e.return}}}function $R(t,e,n){D=t,PI(t)}function PI(t,e,n){for(var r=(t.mode&1)!==0;D!==null;){var i=D,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||il;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||ri;a=il;var l=ri;if(il=o,(ri=u)&&!l)for(D=i;D!==null;)o=D,u=o.child,o.tag===22&&o.memoizedState!==null?kv(i):u!==null?(u.return=o,D=u):kv(i);for(;s!==null;)D=s,PI(s),s=s.sibling;D=i,il=a,ri=l}Sv(t)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,D=s):Sv(t)}}function Sv(t){for(;D!==null;){var e=D;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:ri||eh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ri)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Zt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&nv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}nv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var l=e.alternate;if(l!==null){var c=l.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&va(h)}}}break;case 19:case 17:case 21:case 22:case 23:break;default:throw Error(A(163))}ri||e.flags&512&&Mf(e)}catch(d){Tt(e,e.return,d)}}if(e===t){D=null;break}if(n=e.sibling,n!==null){n.return=e.return,D=n;break}D=e.return}}function Tv(t){for(;D!==null;){var e=D;if(e===t){D=null;break}var n=e.sibling;if(n!==null){n.return=e.return,D=n;break}D=e.return}}function kv(t){for(;D!==null;){var e=D;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{eh(4,e)}catch(u){Tt(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Tt(e,i,u)}}var s=e.return;try{Mf(e)}catch(u){Tt(e,s,u)}break;case 5:var o=e.return;try{Mf(e)}catch(u){Tt(e,o,u)}}}catch(u){Tt(e,e.return,u)}if(e===t){D=null;break}var a=e.sibling;if(a!==null){a.return=e.return,D=a;break}D=e.return}}var UR=Math.ceil,cc=Yn.ReactCurrentDispatcher,hm=Yn.ReactCurrentOwner,Ht=Yn.ReactCurrentBatchConfig,X=0,Ce=null,Se=null,Ke=0,Nt=0,gs=Mr(0),be=0,ba=null,Vs=0,th=0,dm=0,na=null,Et=null,fm=0,Bs=1/0,hc=!1,Ff=null,wr=null,sl=!1,fr=null,dc=0,ra=0,Vf=null,xl=-1,Pl=0;function yt(){return(X&6)!==0?we():xl!==-1?xl:xl=we()}function _r(t){return(t.mode&1)===0?1:(X&2)!==0&&Ke!==0?Ke&-Ke:IR.transition!==null?(Pl===0&&(t=Wu,Wu<<=1,(Wu&4194240)===0&&(Wu=64),Pl=t),Pl):(t=ne,t!==0||(t=window.event,t=t===void 0?16:C0(t.type)),t)}function Gt(t,e,n){if(50<ra)throw ra=0,Vf=null,Error(A(185));var r=nh(t,e);return r===null?null:(au(r,e,n),((X&2)===0||r!==Ce)&&(r===Ce&&((X&2)===0&&(th|=e),be===4&&lr(r,Ke)),Rt(r,n),e===1&&X===0&&(t.mode&1)===0&&(Bs=we()+500,Jc&&$r())),r)}function nh(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}function Rt(t,e){var n=t.callbackNode;IC(t,e);var r=Ql(t,t===Ce?Ke:0);if(r===0)n!==null&&Py(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Py(n),e===1)t.tag===0?_R(Cv.bind(null,t)):W0(Cv.bind(null,t)),gR(function(){X===0&&$r()}),n=null;else{switch(_0(r)){case 1:n=Bp;break;case 4:n=v0;break;case 16:n=Kl;break;case 536870912:n=w0;break;default:n=Kl}n=VI(n,DI.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function DI(t,e){if(xl=-1,Pl=0,(X&6)!==0)throw Error(A(327));var n=t.callbackNode;if(Cs()&&t.callbackNode!==n)return null;var r=Ql(t,t===Ce?Ke:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=fc(t,r);else{e=r;var i=X;X|=2;var s=LI();(Ce!==t||Ke!==e)&&(Bs=we()+500,hi(t,e));do try{BR();break}catch(a){OI(t,a)}while(1);Jp(),cc.current=s,X=i,Se!==null?e=0:(Ce=null,Ke=0,e=be)}if(e!==0){if(e===2&&(i=mf(t),i!==0&&(r=i,e=Bf(t,i))),e===1)throw n=ba,hi(t,0),lr(t,r),Rt(t,we()),n;if(e===6)lr(t,r);else{if(i=t.current.alternate,(r&30)===0&&!FR(i)&&(e=fc(t,r),e===2&&(s=mf(t),s!==0&&(r=s,e=Bf(t,s))),e===1))throw n=ba,hi(t,0),lr(t,r),Rt(t,we()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(A(345));case 2:Jr(t,Et);break;case 3:if(lr(t,r),(r&130023424)===r&&(e=fm+500-we(),10<e)){if(Ql(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){yt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Ef(Jr.bind(null,t,Et),e);break}Jr(t,Et);break;case 4:if(lr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-rn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=we()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*UR(r/1960))-r,10<r){t.timeoutHandle=Ef(Jr.bind(null,t,Et),r);break}Jr(t,Et);break;case 5:Jr(t,Et);break;default:throw Error(A(329))}}}return Rt(t,we()),t.callbackNode===n?DI.bind(null,t):null}function Bf(t,e){var n=na;return t.current.memoizedState.isDehydrated&&(hi(t,e).flags|=256),t=fc(t,e),t!==2&&(e=Et,Et=n,e!==null&&qf(e)),t}function qf(t){Et===null?Et=t:Et.push.apply(Et,t)}function FR(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!En(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function lr(t,e){for(e&=~dm,e&=~th,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-rn(e),r=1<<n;t[n]=-1,e&=~r}}function Cv(t){if((X&6)!==0)throw Error(A(327));Cs();var e=Ql(t,0);if((e&1)===0)return Rt(t,we()),null;var n=fc(t,e);if(t.tag!==0&&n===2){var r=mf(t);r!==0&&(e=r,n=Bf(t,r))}if(n===1)throw n=ba,hi(t,0),lr(t,e),Rt(t,we()),n;if(n===6)throw Error(A(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Jr(t,Et),Rt(t,we()),null}function pm(t,e){var n=X;X|=1;try{return t(e)}finally{X=n,X===0&&(Bs=we()+500,Jc&&$r())}}function wi(t){fr!==null&&fr.tag===0&&(X&6)===0&&Cs();var e=X;X|=1;var n=Ht.transition,r=ne;try{if(Ht.transition=null,ne=1,t)return t()}finally{ne=r,Ht.transition=n,X=e,(X&6)===0&&$r()}}function mm(){Nt=gs.current,oe(gs)}function hi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,mR(n)),Se!==null)for(n=Se.return;n!==null;){var r=n;switch(tm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Zl();break;case 3:Us(),oe(kt),oe(at),sm();break;case 5:im(r);break;case 4:Us();break;case 13:oe(de);break;case 19:oe(de);break;case 10:Xp(r.type._context);break;case 22:case 23:mm()}n=n.return}if(Ce=t,Se=t=kr(t.current,null),Ke=Nt=e,be=0,ba=null,dm=th=Vs=0,Et=na=null,mn!==null){for(e=0;e<mn.length;e++)if(n=mn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}mn=null}return t}function OI(t,e){do{var n=Se;try{if(Jp(),Nl.current=uc,ac){for(var r=me.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ac=!1}if(Fs=0,Le=rt=me=null,ta=!1,Ca=0,hm.current=null,n===null||n.return===null){be=1,ba=e,Se=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=Ke,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var l=u,c=a,h=c.tag;if((c.mode&1)===0&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=lv(o);if(p!==null){p.flags&=-257,cv(p,o,a,s,e),p.mode&1&&uv(s,l,e),e=p,u=l;var m=e.updateQueue;if(m===null){var I=new Set;I.add(u),e.updateQueue=I}else m.add(u);break e}else{if((e&1)===0){uv(s,l,e),gm();break e}u=Error(A(426))}}else if(ce&&a.mode&1){var R=lv(o);if(R!==null){(R.flags&65536)===0&&(R.flags|=256),cv(R,o,a,s,e),nm(u);break e}}s=u,be!==4&&(be=2),na===null?na=[s]:na.push(s),u=cm(u,a),a=o;do{switch(a.tag){case 3:a.flags|=65536,e&=-e,a.lanes|=e;var g=vI(a,u,e);tv(a,g);break e;case 1:s=u;var f=a.type,y=a.stateNode;if((a.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(wr===null||!wr.has(y)))){a.flags|=65536,e&=-e,a.lanes|=e;var v=wI(a,s,e);tv(a,v);break e}}a=a.return}while(a!==null)}$I(n)}catch(T){e=T,Se===n&&n!==null&&(Se=n=n.return);continue}break}while(1)}function LI(){var t=cc.current;return cc.current=uc,t===null?uc:t}function gm(){(be===0||be===3||be===2)&&(be=4),Ce===null||(Vs&268435455)===0&&(th&268435455)===0||lr(Ce,Ke)}function fc(t,e){var n=X;X|=2;var r=LI();Ce===t&&Ke===e||hi(t,e);do try{VR();break}catch(i){OI(t,i)}while(1);if(Jp(),X=n,cc.current=r,Se!==null)throw Error(A(261));return Ce=null,Ke=0,be}function VR(){for(;Se!==null;)MI(Se)}function BR(){for(;Se!==null&&!dC();)MI(Se)}function MI(t){var e=FI(t.alternate,t,Nt);t.memoizedProps=t.pendingProps,e===null?$I(t):Se=e,hm.current=null}function $I(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=bR(n,e,Nt),n!==null){Se=n;return}}else{if(n=DR(n,e),n!==null){n.flags&=32767,Se=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{be=6,Se=null;return}}if(e=e.sibling,e!==null){Se=e;return}Se=e=t}while(e!==null);be===0&&(be=5)}function Jr(t,e){var n=ne,r=Ht.transition;try{Ht.transition=null,ne=1,qR(t,e,n)}finally{Ht.transition=r,ne=n}return null}function qR(t,e,n){do Cs();while(fr!==null);if((X&6)!==0)throw Error(A(327));var r=t.finishedWork,i=t.finishedLanes;if(r===null)return null;if(t.finishedWork=null,t.finishedLanes=0,r===t.current)throw Error(A(177));t.callbackNode=null,t.callbackPriority=0;var s=r.lanes|r.childLanes;if(EC(t,s),t===Ce&&(Se=Ce=null,Ke=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||sl||(sl=!0,VI(Kl,function(){return Cs(),null})),s=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||s){s=Ht.transition,Ht.transition=null;var o=ne;ne=1;var a=X;X|=4,hm.current=null,LR(t,r),MR(t,r),uR(_f),_f=null,t.current=r,$R(r),fC(),X=a,ne=o,Ht.transition=s}else t.current=r;if(sl&&(sl=!1,fr=t,dc=i),s=t.pendingLanes,s===0&&(wr=null),gC(r.stateNode),Rt(t,we()),e!==null)for(n=t.onRecoverableError,r=0;r<e.length;r++)n(e[r]);if(hc)throw hc=!1,t=Ff,Ff=null,t;return(dc&1)!==0&&t.tag!==0&&Cs(),s=t.pendingLanes,(s&1)!==0?t===Vf?ra++:(ra=0,Vf=t):ra=0,$r(),null}function Cs(){if(fr!==null){var t=_0(dc),e=Ht.transition,n=ne;try{if(Ht.transition=null,ne=16>t?16:t,fr===null)var r=!1;else{if(t=fr,fr=null,dc=0,(X&6)!==0)throw Error(A(331));var i=X;for(X|=4,D=t.current;D!==null;){var s=D,o=s.child;if((D.flags&16)!==0){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var l=a[u];for(D=l;D!==null;){var c=D;switch(c.tag){case 0:case 11:case 15:Na(8,c,s)}var h=c.child;if(h!==null)h.return=c,D=h;else for(;D!==null;){c=D;var d=c.sibling,p=c.return;if(NI(c),c===l){D=null;break}if(d!==null){d.return=p,D=d;break}D=p}}}var m=s.alternate;if(m!==null){var I=m.child;if(I!==null){m.child=null;do{var R=I.sibling;I.sibling=null,I=R}while(I!==null)}}D=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,D=o;else e:for(;D!==null;){if(s=D,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Na(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,D=g;break e}D=s.return}}var f=t.current;for(D=f;D!==null;){o=D;var y=o.child;if((o.subtreeFlags&2064)!==0&&y!==null)y.return=o,D=y;else e:for(o=f;D!==null;){if(a=D,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:eh(9,a)}}catch(T){Tt(a,a.return,T)}if(a===o){D=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,D=v;break e}D=a.return}}if(X=i,$r(),yn&&typeof yn.onPostCommitFiberRoot=="function")try{yn.onPostCommitFiberRoot(Hc,t)}catch{}r=!0}return r}finally{ne=n,Ht.transition=e}}return!1}function Rv(t,e,n){e=cm(n,e),e=vI(t,e,1),vr(t,e),e=yt(),t=nh(t,1),t!==null&&(au(t,1,e),Rt(t,e))}function Tt(t,e,n){if(t.tag===3)Rv(t,t,n);else for(;e!==null;){if(e.tag===3){Rv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(wr===null||!wr.has(r))){t=cm(n,t),t=wI(e,t,1),vr(e,t),t=yt(),e=nh(e,1),e!==null&&(au(e,1,t),Rt(e,t));break}}e=e.return}}function zR(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=yt(),t.pingedLanes|=t.suspendedLanes&n,Ce===t&&(Ke&n)===n&&(be===4||be===3&&(Ke&130023424)===Ke&&500>we()-fm?hi(t,0):dm|=n),Rt(t,e)}function UI(t,e){e===0&&((t.mode&1)===0?e=1:(e=Hu,Hu<<=1,(Hu&130023424)===0&&(Hu=4194304)));var n=yt();t=nh(t,e),t!==null&&(au(t,e,n),Rt(t,n))}function jR(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),UI(t,n)}function WR(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(A(314))}r!==null&&r.delete(e),UI(t,n)}var FI;FI=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||kt.current)xt=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return xt=!1,PR(t,e,n);xt=(t.flags&131072)!==0}else xt=!1,ce&&(e.flags&1048576)!==0&&Q0(e,sc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps;var i=Ls(e,at.current);ks(e,n),i=am(null,e,r,t,i,n);var s=um();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ct(r)?(s=!0,ec(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Zp(e),i.updater=Xc,e.stateNode=i,i._reactInternals=e,Rf(e,r,t,n),e=Df(null,e,r,!0,s,n)):(e.tag=0,ce&&s&&em(e),ct(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=GR(r),t=Zt(r,t),i){case 0:e=Pf(null,e,r,t,n);break e;case 1:e=fv(null,e,r,t,n);break e;case 11:e=hv(null,e,r,t,n);break e;case 14:e=dv(null,e,r,Zt(r.type,t),n);break e}throw Error(A(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Zt(r,i),Pf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Zt(r,i),fv(t,e,r,i,n);case 3:e:{if(CI(e),t===null)throw Error(A(387));r=e.pendingProps,s=e.memoizedState,i=s.element,H0(t,e),rc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Error(A(423)),e=pv(t,e,r,n,i);break e}else if(r!==i){i=Error(A(424)),e=pv(t,e,r,n,i);break e}else for(St=Pn(e.stateNode.containerInfo.firstChild),Ot=e,ce=!0,en=null,n=X0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ms(),r===i){e=zn(t,e,n);break e}ct(t,e,r,n)}e=e.child}return e;case 5:return Z0(e),t===null&&Nf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,If(r,i)?o=null:s!==null&&If(r,s)&&(e.flags|=32),kI(t,e),ct(t,e,o,n),e.child;case 6:return t===null&&Nf(e),null;case 13:return RI(t,e,n);case 4:return rm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=$s(e,null,r,n):ct(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Zt(r,i),hv(t,e,r,i,n);case 7:return ct(t,e,e.pendingProps,n),e.child;case 8:return ct(t,e,e.pendingProps.children,n),e.child;case 12:return ct(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,re(tc,r._currentValue),r._currentValue=o,s!==null)if(En(s.value,o)){if(s.children===i.children&&!kt.current){e=zn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Un(-1,n&-n),u.tag=2;var l=s.updateQueue;if(l!==null){l=l.shared;var c=l.pending;c===null?u.next=u:(u.next=c.next,c.next=u),l.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),kf(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(A(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),kf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ct(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ks(e,n),i=Qt(i),r=r(i),e.flags|=1,ct(t,e,r,n),e.child;case 14:return r=e.type,i=Zt(r,e.pendingProps),i=Zt(r.type,i),dv(t,e,r,i,n);case 15:return SI(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Zt(r,i),t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),e.tag=1,Ct(r)?(t=!0,ec(e)):t=!1,ks(e,n),K0(e,r,i),Rf(e,r,i,n),Df(null,e,r,!0,t,n);case 19:return AI(t,e,n);case 22:return TI(t,e,n)}throw Error(A(156,e.tag))};function VI(t,e){return y0(t,e)}function HR(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bt(t,e,n,r){return new HR(t,e,n,r)}function ym(t){return t=t.prototype,!(!t||!t.isReactComponent)}function GR(t){if(typeof t=="function")return ym(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Up)return 11;if(t===Fp)return 14}return 2}function kr(t,e){var n=t.alternate;return n===null?(n=Bt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Dl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")ym(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case as:return di(n.children,i,s,e);case $p:o=8,i|=8;break;case Zd:return t=Bt(12,n,e,i|2),t.elementType=Zd,t.lanes=s,t;case ef:return t=Bt(13,n,e,i),t.elementType=ef,t.lanes=s,t;case tf:return t=Bt(19,n,e,i),t.elementType=tf,t.lanes=s,t;case e0:return pc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case X_:o=10;break e;case Z_:o=9;break e;case Up:o=11;break e;case Fp:o=14;break e;case sr:o=16,r=null;break e}throw Error(A(130,t==null?t:typeof t,""))}return e=Bt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function di(t,e,n,r){return t=Bt(7,t,r,e),t.lanes=n,t}function pc(t,e,n,r){return t=Bt(22,t,r,e),t.elementType=e0,t.lanes=n,t.stateNode={},t}function Cd(t,e,n){return t=Bt(6,t,null,e),t.lanes=n,t}function Rd(t,e,n){return e=Bt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function KR(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ud(0),this.expirationTimes=ud(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ud(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function vm(t,e,n,r,i,s,o,a,u){return t=new KR(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Bt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null},Zp(s),t}function QR(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:os,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function BI(t){if(!t)return Tr;t=t._reactInternals;e:{if(Mi(t)!==t||t.tag!==1)throw Error(A(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ct(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(A(171))}if(t.tag===1){var n=t.type;if(Ct(n))return j0(t,n,e)}return e}function qI(t,e,n,r,i,s,o,a,u){return t=vm(n,r,!0,t,i,s,o,a,u),t.context=BI(null),n=t.current,r=yt(),i=_r(n),s=Un(r,i),s.callback=e!=null?e:null,vr(n,s),t.current.lanes=i,au(t,i,r),Rt(t,r),t}function rh(t,e,n,r){var i=e.current,s=yt(),o=_r(i);return n=BI(n),e.context===null?e.context=n:e.pendingContext=n,e=Un(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),vr(i,e),t=Gt(i,o,s),t!==null&&Al(t,i,o),o}function mc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Av(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function wm(t,e){Av(t,e),(t=t.alternate)&&Av(t,e)}function YR(){return null}var zI=typeof reportError=="function"?reportError:function(t){console.error(t)};function _m(t){this._internalRoot=t}ih.prototype.render=_m.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(A(409));rh(t,e,null,null)};ih.prototype.unmount=_m.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;wi(function(){rh(null,t,null,null)}),e[qn]=null}};function ih(t){this._internalRoot=t}ih.prototype.unstable_scheduleHydration=function(t){if(t){var e=S0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ur.length&&e!==0&&e<ur[n].priority;n++);ur.splice(n,0,t),n===0&&k0(t)}};function Im(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function sh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Nv(){}function JR(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var l=mc(o);s.call(l)}}var o=qI(e,r,t,0,null,!1,!1,"",Nv);return t._reactRootContainer=o,t[qn]=o.current,Ia(t.nodeType===8?t.parentNode:t),wi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var l=mc(u);a.call(l)}}var u=vm(t,0,!1,null,null,!1,!1,"",Nv);return t._reactRootContainer=u,t[qn]=u.current,Ia(t.nodeType===8?t.parentNode:t),wi(function(){rh(e,u,n,r)}),u}function oh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=mc(o);a.call(u)}}rh(e,o,t,i)}else o=JR(n,e,t,i,r);return mc(o)}I0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=jo(e.pendingLanes);n!==0&&(qp(e,n|1),Rt(e,we()),(X&6)===0&&(Bs=we()+500,$r()))}break;case 13:var r=yt();wi(function(){return Gt(t,1,r)}),wm(t,1)}};zp=function(t){if(t.tag===13){var e=yt();Gt(t,134217728,e),wm(t,134217728)}};E0=function(t){if(t.tag===13){var e=yt(),n=_r(t);Gt(t,n,e),wm(t,n)}};S0=function(){return ne};T0=function(t,e){var n=ne;try{return ne=t,e()}finally{ne=n}};df=function(t,e,n){switch(e){case"input":if(sf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Yc(r);if(!i)throw Error(A(90));n0(r),sf(r,i)}}}break;case"textarea":i0(t,n);break;case"select":e=n.value,e!=null&&Is(t,!!n.multiple,e,!1)}};h0=pm;d0=wi;var XR={usingClientEntryPoint:!1,Events:[lu,hs,Yc,l0,c0,pm]},xo={findFiberByHostInstance:ti,bundleType:0,version:"18.0.0-fc46dba67-20220329",rendererPackageName:"react-dom"},ZR={bundleType:xo.bundleType,version:xo.version,rendererPackageName:xo.rendererPackageName,rendererConfig:xo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Yn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=m0(t),t===null?null:t.stateNode},findFiberByHostInstance:xo.findFiberByHostInstance||YR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.0.0-fc46dba67-20220329"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var ol=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ol.isDisabled&&ol.supportsFiber)try{Hc=ol.inject(ZR),yn=ol}catch{}}$t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=XR;$t.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Im(e))throw Error(A(200));return QR(t,e,null,n)};$t.createRoot=function(t,e){if(!Im(t))throw Error(A(299));var n=!1,r="",i=zI;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=vm(t,1,!1,null,null,n,!1,r,i),t[qn]=e.current,Ia(t.nodeType===8?t.parentNode:t),new _m(e)};$t.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(A(188)):(t=Object.keys(t).join(","),Error(A(268,t)));return t=m0(e),t=t===null?null:t.stateNode,t};$t.flushSync=function(t){return wi(t)};$t.hydrate=function(t,e,n){if(!sh(e))throw Error(A(200));return oh(null,t,e,!0,n)};$t.hydrateRoot=function(t,e,n){if(!Im(t))throw Error(A(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=zI;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=qI(e,null,t,1,n!=null?n:null,i,!1,s,o),t[qn]=e.current,Ia(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new ih(e)};$t.render=function(t,e,n){if(!sh(e))throw Error(A(200));return oh(null,t,e,!1,n)};$t.unmountComponentAtNode=function(t){if(!sh(t))throw Error(A(40));return t._reactRootContainer?(wi(function(){oh(null,null,t,!1,function(){t._reactRootContainer=null,t[qn]=null})}),!0):!1};$t.unstable_batchedUpdates=pm;$t.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!sh(n))throw Error(A(200));if(t==null||t._reactInternals===void 0)throw Error(A(38));return oh(t,e,n,!1,r)};$t.version="18.0.0-fc46dba67-20220329";function jI(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jI)}catch(t){console.error(t)}}jI(),G_.exports=$t;var eA=G_.exports;const tA="modulepreload",bv={},nA="/",hu=function(e,n){return!n||n.length===0?e():Promise.all(n.map(r=>{if(r=`${nA}${r}`,r in bv)return;bv[r]=!0;const i=r.endsWith(".css"),s=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${s}`))return;const o=document.createElement("link");if(o.rel=i?"stylesheet":tA,i||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),i)return new Promise((a,u)=>{o.addEventListener("load",a),o.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};/**
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
 */const WI=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},rA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},HI={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,l=u?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|l>>6,p=l&63;u||(p=64,o||(d=64)),r.push(n[c],n[h],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(WI(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):rA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||l==null||h==null)throw Error();const d=s<<2|a>>4;if(r.push(d),l!==64){const p=a<<4&240|l>>2;if(r.push(p),h!==64){const m=l<<6&192|h;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},iA=function(t){const e=WI(t);return HI.encodeByteArray(e,!0)},gc=function(t){return iA(t).replace(/\./g,"")},sA=function(t){try{return HI.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function yc(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!oA(n)||(t[n]=yc(t[n],e[n]));return t}function oA(t){return t!=="__proto__"}/**
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
 */class aA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function GI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[gc(JSON.stringify(n)),gc(JSON.stringify(o)),a].join(".")}/**
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
 */function le(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function KI(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(le())}function Em(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function uA(){return typeof self=="object"&&self.self===self}function Sm(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ah(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function lA(){return le().indexOf("Electron/")>=0}function Tm(){const t=le();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function cA(){return le().indexOf("MSAppHost/")>=0}function hA(){return!Em()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function xa(){return typeof indexedDB=="object"}function dA(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const fA="FirebaseError";class At extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=fA,Object.setPrototypeOf(this,At.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$i.prototype.create)}}class $i{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?pA(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new At(i,a,r)}}function pA(t,e){return t.replace(mA,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const mA=/\{\$([^}]+)}/g;/**
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
 */function xv(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function gA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function zf(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Pv(s)&&Pv(o)){if(!zf(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Pv(t){return t!==null&&typeof t=="object"}/**
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
 */function oo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ys(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ho(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function QI(t,e){const n=new yA(t,e);return n.subscribe.bind(n)}class yA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");vA(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ad),i.error===void 0&&(i.error=Ad),i.complete===void 0&&(i.complete=Ad);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function vA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ad(){}/**
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
 */function U(t){return t&&t._delegate?t._delegate:t}/**
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
 */function Go(t,e){return new Promise((n,r)=>{t.onsuccess=i=>{n(i.target.result)},t.onerror=i=>{var s;r(`${e}: ${(s=i.target.error)===null||s===void 0?void 0:s.message}`)}})}class Dv{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,n){return new YI(this._db.transaction.call(this._db,e,n))}createObjectStore(e,n){return new JI(this._db.createObjectStore(e,n))}close(){this._db.close()}}class YI{constructor(e){this._transaction=e,this.complete=new Promise((n,r)=>{this._transaction.oncomplete=function(){n()},this._transaction.onerror=()=>{r(this._transaction.error)},this._transaction.onabort=()=>{r(this._transaction.error)}})}objectStore(e){return new JI(this._transaction.objectStore(e))}}class JI{constructor(e){this._store=e}index(e){return new Ov(this._store.index(e))}createIndex(e,n,r){return new Ov(this._store.createIndex(e,n,r))}get(e){const n=this._store.get(e);return Go(n,"Error reading from IndexedDB")}put(e,n){const r=this._store.put(e,n);return Go(r,"Error writing to IndexedDB")}delete(e){const n=this._store.delete(e);return Go(n,"Error deleting from IndexedDB")}clear(){const e=this._store.clear();return Go(e,"Error clearing IndexedDB object store")}}class Ov{constructor(e){this._index=e}get(e){const n=this._index.get(e);return Go(n,"Error reading from IndexedDB")}}function wA(t,e,n){return new Promise((r,i)=>{try{const s=indexedDB.open(t,e);s.onsuccess=o=>{r(new Dv(o.target.result))},s.onerror=o=>{var a;i(`Error opening indexedDB: ${(a=o.target.error)===null||a===void 0?void 0:a.message}`)},s.onupgradeneeded=o=>{n(new Dv(s.result),o.oldVersion,o.newVersion,new YI(s.transaction))}}catch(s){i(`Error opening indexedDB: ${s.message}`)}})}class Yt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Xr="[DEFAULT]";/**
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
 */class _A{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new aA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(EA(e))try{this.getOrInitializeService({instanceIdentifier:Xr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Xr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Xr){return this.instances.has(e)}getOptions(e=Xr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:IA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Xr){return this.component?this.component.multipleInstances?e:Xr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function IA(t){return t===Xr?void 0:t}function EA(t){return t.instantiationMode==="EAGER"}/**
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
 */class SA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new _A(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const km=[];var Z;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Z||(Z={}));const XI={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},TA=Z.INFO,kA={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},CA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=kA[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class uh{constructor(e){this.name=e,this._logLevel=TA,this._logHandler=CA,this._userLogHandler=null,km.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?XI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...e),this._logHandler(this,Z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...e),this._logHandler(this,Z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...e),this._logHandler(this,Z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...e),this._logHandler(this,Z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...e),this._logHandler(this,Z.ERROR,...e)}}function RA(t){km.forEach(e=>{e.setLogLevel(t)})}function AA(t,e){for(const n of km){let r=null;e&&e.level&&(r=XI[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(u=>{if(u==null)return null;if(typeof u=="string")return u;if(typeof u=="number"||typeof u=="boolean")return u.toString();if(u instanceof Error)return u.message;try{return JSON.stringify(u)}catch{return null}}).filter(u=>u).join(" ");s>=(r!=null?r:i.logLevel)&&t({level:Z[s].toLowerCase(),message:a,args:o,type:i.name})}}}/**
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
 */class NA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(bA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function bA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const jf="@firebase/app",Lv="0.7.20";/**
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
 */const Cm=new uh("@firebase/app"),xA="@firebase/app-compat",PA="@firebase/analytics-compat",DA="@firebase/analytics",OA="@firebase/app-check-compat",LA="@firebase/app-check",MA="@firebase/auth",$A="@firebase/auth-compat",UA="@firebase/database",FA="@firebase/database-compat",VA="@firebase/functions",BA="@firebase/functions-compat",qA="@firebase/installations",zA="@firebase/installations-compat",jA="@firebase/messaging",WA="@firebase/messaging-compat",HA="@firebase/performance",GA="@firebase/performance-compat",KA="@firebase/remote-config",QA="@firebase/remote-config-compat",YA="@firebase/storage",JA="@firebase/storage-compat",XA="@firebase/firestore",ZA="@firebase/firestore-compat",eN="firebase",tN="9.6.10";/**
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
 */const _i="[DEFAULT]",nN={[jf]:"fire-core",[xA]:"fire-core-compat",[DA]:"fire-analytics",[PA]:"fire-analytics-compat",[LA]:"fire-app-check",[OA]:"fire-app-check-compat",[MA]:"fire-auth",[$A]:"fire-auth-compat",[UA]:"fire-rtdb",[FA]:"fire-rtdb-compat",[VA]:"fire-fn",[BA]:"fire-fn-compat",[qA]:"fire-iid",[zA]:"fire-iid-compat",[jA]:"fire-fcm",[WA]:"fire-fcm-compat",[HA]:"fire-perf",[GA]:"fire-perf-compat",[KA]:"fire-rc",[QA]:"fire-rc-compat",[YA]:"fire-gcs",[JA]:"fire-gcs-compat",[XA]:"fire-fst",[ZA]:"fire-fst-compat","fire-js":"fire-js",[eN]:"fire-js-all"};/**
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
 */const Cr=new Map,Pa=new Map;function vc(t,e){try{t.container.addComponent(e)}catch(n){Cm.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ZI(t,e){t.container.addOrOverwriteComponent(e)}function jn(t){const e=t.name;if(Pa.has(e))return Cm.debug(`There were multiple attempts to register component ${e}.`),!1;Pa.set(e,t);for(const n of Cr.values())vc(n,t);return!0}function eE(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function rN(t,e,n=_i){eE(t,e).clearInstance(n)}function iN(){Pa.clear()}/**
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
 */const sN={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Rr=new $i("app","Firebase",sN);/**
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
 */class oN{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Yt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Rr.create("app-deleted",{appName:this._name})}}/**
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
 */const Ur=tN;function tE(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:_i,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw Rr.create("bad-app-name",{appName:String(r)});const i=Cr.get(r);if(i){if(zf(t,i.options)&&zf(n,i.config))return i;throw Rr.create("duplicate-app",{appName:r})}const s=new SA(r);for(const a of Pa.values())s.addComponent(a);const o=new oN(t,n,s);return Cr.set(r,o),o}function aN(t=_i){const e=Cr.get(t);if(!e)throw Rr.create("no-app",{appName:t});return e}function uN(){return Array.from(Cr.values())}async function nE(t){const e=t.name;Cr.has(e)&&(Cr.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function Kt(t,e,n){var r;let i=(r=nN[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Cm.warn(a.join(" "));return}jn(new Yt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function rE(t,e){if(t!==null&&typeof t!="function")throw Rr.create("invalid-log-argument");AA(t,e)}function iE(t){RA(t)}/**
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
 */const lN="firebase-heartbeat-database",cN=1,Da="firebase-heartbeat-store";let Nd=null;function sE(){return Nd||(Nd=wA(lN,cN,(t,e)=>{switch(e){case 0:t.createObjectStore(Da)}}).catch(t=>{throw Rr.create("storage-open",{originalErrorMessage:t.message})})),Nd}async function hN(t){try{return(await sE()).transaction(Da).objectStore(Da).get(oE(t))}catch(e){throw Rr.create("storage-get",{originalErrorMessage:e.message})}}async function Mv(t,e){try{const r=(await sE()).transaction(Da,"readwrite");return await r.objectStore(Da).put(e,oE(t)),r.complete}catch(n){throw Rr.create("storage-set",{originalErrorMessage:n.message})}}function oE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const dN=1024,fN=30*24*60*60*1e3;class pN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new gN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=$v();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=fN}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=$v(),{heartbeatsToSend:n,unsentEntries:r}=mN(this._heartbeatsCache.heartbeats),i=gc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function $v(){return new Date().toISOString().substring(0,10)}function mN(t,e=dN){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Uv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Uv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class gN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xa()?dA().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await hN(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Mv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Mv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Uv(t){return gc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function yN(t){jn(new Yt("platform-logger",e=>new NA(e),"PRIVATE")),jn(new Yt("heartbeat",e=>new pN(e),"PRIVATE")),Kt(jf,Lv,t),Kt(jf,Lv,"esm2017"),Kt("fire-js","")}yN("");var vN=Object.freeze(Object.defineProperty({__proto__:null,SDK_VERSION:Ur,_DEFAULT_ENTRY_NAME:_i,_addComponent:vc,_addOrOverwriteComponent:ZI,_apps:Cr,_clearComponents:iN,_components:Pa,_getProvider:eE,_registerComponent:jn,_removeServiceInstance:rN,deleteApp:nE,getApp:aN,getApps:uN,initializeApp:tE,onLog:rE,registerVersion:Kt,setLogLevel:iE,FirebaseError:At},Symbol.toStringTag,{value:"Module"}));/**
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
 */class wN{constructor(e,n){this._delegate=e,this.firebase=n,vc(e,new Yt("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),nE(this._delegate)))}_getService(e,n=_i){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=_i){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){vc(this._delegate,e)}_addOrOverwriteComponent(e){ZI(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const _N={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},Fv=new $i("app-compat","Firebase",_N);/**
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
 */function IN(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:Kt,setLogLevel:iE,onLog:rE,apps:null,SDK_VERSION:Ur,INTERNAL:{registerComponent:a,removeApp:r,useAsService:u,modularAPIs:vN}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(l){delete e[l]}function i(l){if(l=l||_i,!xv(e,l))throw Fv.create("no-app",{appName:l});return e[l]}i.App=t;function s(l,c={}){const h=tE(l,c);if(xv(e,h.name))return e[h.name];const d=new t(h,n);return e[h.name]=d,d}function o(){return Object.keys(e).map(l=>e[l])}function a(l){const c=l.name,h=c.replace("-compat","");if(jn(l)&&l.type==="PUBLIC"){const d=(p=i())=>{if(typeof p[h]!="function")throw Fv.create("invalid-app-argument",{appName:c});return p[h]()};l.serviceProps!==void 0&&yc(d,l.serviceProps),n[h]=d,t.prototype[h]=function(...p){return this._getService.bind(this,c).apply(this,l.multipleInstances?p:[])}}return l.type==="PUBLIC"?n[h]:null}function u(l,c){return c==="serverAuth"?null:c}return n}/**
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
 */function aE(){const t=IN(wN);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:aE,extendNamespace:e,createSubscribe:QI,ErrorFactory:$i,deepExtend:yc});function e(n){yc(t,n)}return t}const EN=aE();/**
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
 */const Vv=new uh("@firebase/app-compat"),SN="@firebase/app-compat",TN="0.1.21";/**
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
 */function kN(t){Kt(SN,TN,t)}/**
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
 */if(uA()&&self.firebase!==void 0){Vv.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&Vv.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const un=EN;kN();var CN="firebase",RN="9.6.10";/**
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
 */un.registerVersion(CN,RN,"app-compat");/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function Rm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const Po={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Ji={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function AN(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function uE(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const NN=AN,bN=uE,lE=new $i("auth","Firebase",uE());/**
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
 */const Bv=new uh("@firebase/auth");function Ol(t,...e){Bv.logLevel<=Z.ERROR&&Bv.error(`Auth (${Ur}): ${t}`,...e)}/**
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
 */function Ze(t,...e){throw Am(t,...e)}function Qe(t,...e){return Am(t,...e)}function cE(t,e,n){const r=Object.assign(Object.assign({},bN()),{[e]:n});return new $i("auth","Firebase",r).create(e,{appName:t.name})}function ao(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ze(t,"argument-error"),cE(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Am(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return lE.create(t,...e)}function b(t,e,...n){if(!t)throw Am(e,...n)}function gn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ol(e),new Error(e)}function on(t,e){t||gn(e)}/**
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
 */const qv=new Map;function Pt(t){on(t instanceof Function,"Expected a class definition");let e=qv.get(t);return e?(on(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,qv.set(t,e),e)}function xN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Pt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Oa(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Nm(){return zv()==="http:"||zv()==="https:"}function zv(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function PN(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Nm()||Sm()||"connection"in navigator)?navigator.onLine:!0}function DN(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class du{constructor(e,n){this.shortDelay=e,this.longDelay=n,on(n>e,"Short delay should be less than long delay!"),this.isMobile=KI()||ah()}get(){return PN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function bm(t,e){on(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class hE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;gn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;gn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;gn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ON={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const LN=new du(3e4,6e4);function Pe(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function qe(t,e,n,r,i={}){return dE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=oo(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),hE.fetch()(fE(t,t.config.apiHost,n,a),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function dE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},ON),e);try{const i=new MN(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ll(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,l]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ll(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ll(t,"email-already-in-use",o);const c=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw cE(t,c,l);Ze(t,c)}}catch(i){if(i instanceof At)throw i;Ze(t,"network-request-failed")}}async function Jn(t,e,n,r,i={}){const s=await qe(t,e,n,r,i);return"mfaPendingCredential"in s&&Ze(t,"multi-factor-auth-required",{_serverResponse:s}),s}function fE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?bm(t.config,i):`${t.config.apiScheme}://${i}`}class MN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Qe(this.auth,"network-request-failed")),LN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ll(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Qe(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function $N(t,e){return qe(t,"POST","/v1/accounts:delete",e)}async function UN(t,e){return qe(t,"POST","/v1/accounts:update",e)}async function FN(t,e){return qe(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ia(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function VN(t,e=!1){const n=U(t),r=await n.getIdToken(e),i=lh(r);b(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ia(bd(i.auth_time)),issuedAtTime:ia(bd(i.iat)),expirationTime:ia(bd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function bd(t){return Number(t)*1e3}function lh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ol("JWT malformed, contained fewer than 3 sections"),null;try{const i=sA(n);return i?JSON.parse(i):(Ol("Failed to decode base64 JWT payload"),null)}catch(i){return Ol("Caught error parsing JWT payload as JSON",i),null}}function BN(t){const e=lh(t);return b(e,"internal-error"),b(typeof e.exp!="undefined","internal-error"),b(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Wn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof At&&qN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function qN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class zN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class pE{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ia(this.lastLoginAt),this.creationTime=ia(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function La(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Wn(t,FN(n,{idToken:r}));b(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?HN(s.providerUserInfo):[],a=WN(t.providerData,o),u=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=u?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new pE(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function jN(t){const e=U(t);await La(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function WN(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function HN(t){return t.map(e=>{var{providerId:n}=e,r=Rm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function GN(t,e){const n=await dE(t,{},async()=>{const r=oo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=fE(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",hE.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Ma{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){b(e.idToken,"internal-error"),b(typeof e.idToken!="undefined","internal-error"),b(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):BN(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return b(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await GN(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ma;return r&&(b(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(b(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(b(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ma,this.toJSON())}_performRefresh(){return gn("not implemented")}}/**
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
 */function nr(t,e){b(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class fi{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Rm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new zN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new pE(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Wn(this,this.stsTokenManager.getToken(this.auth,e));return b(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return VN(this,e)}reload(){return jN(this)}_assign(e){this!==e&&(b(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new fi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){b(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await La(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Wn(this,$N(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,l,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,I=(a=n.tenantId)!==null&&a!==void 0?a:void 0,R=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,g=(l=n.createdAt)!==null&&l!==void 0?l:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:y,emailVerified:v,isAnonymous:T,providerData:k,stsTokenManager:E}=n;b(y&&E,e,"internal-error");const S=Ma.fromJSON(this.name,E);b(typeof y=="string",e,"internal-error"),nr(h,e.name),nr(d,e.name),b(typeof v=="boolean",e,"internal-error"),b(typeof T=="boolean",e,"internal-error"),nr(p,e.name),nr(m,e.name),nr(I,e.name),nr(R,e.name),nr(g,e.name),nr(f,e.name);const F=new fi({uid:y,auth:e,email:d,emailVerified:v,displayName:h,isAnonymous:T,photoURL:m,phoneNumber:p,tenantId:I,stsTokenManager:S,createdAt:g,lastLoginAt:f});return k&&Array.isArray(k)&&(F.providerData=k.map(O=>Object.assign({},O))),R&&(F._redirectEventId=R),F}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ma;i.updateFromServerResponse(n);const s=new fi({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await La(s),s}}/**
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
 */class mE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}mE.type="NONE";const qs=mE;/**
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
 */function pi(t,e,n){return`firebase:${t}:${e}:${n}`}class Rs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=pi(this.userKey,i.apiKey,s),this.fullPersistenceKey=pi("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?fi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Rs(Pt(qs),e,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||Pt(qs);const o=pi(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const c=await l._get(o);if(c){const h=fi._fromJSON(e,c);l!==s&&(a=h),s=l;break}}catch{}const u=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Rs(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new Rs(s,e,r))}}/**
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
 */function jv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(vE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(gE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(wE(e))return"Blackberry";if(_E(e))return"Webos";if(xm(e))return"Safari";if((e.includes("chrome/")||yE(e))&&!e.includes("edge/"))return"Chrome";if(fu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function gE(t=le()){return/firefox\//i.test(t)}function xm(t=le()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function yE(t=le()){return/crios\//i.test(t)}function vE(t=le()){return/iemobile/i.test(t)}function fu(t=le()){return/android/i.test(t)}function wE(t=le()){return/blackberry/i.test(t)}function _E(t=le()){return/webos/i.test(t)}function uo(t=le()){return/iphone|ipad|ipod/i.test(t)}function KN(t=le()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function QN(t=le()){var e;return uo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function YN(){return Tm()&&document.documentMode===10}function IE(t=le()){return uo(t)||fu(t)||_E(t)||wE(t)||/windows phone/i.test(t)||vE(t)}function JN(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function EE(t,e=[]){let n;switch(t){case"Browser":n=jv(le());break;case"Worker":n=`${jv(le())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ur}/${r}`}/**
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
 */class XN{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Wv(this),this.idTokenSubscription=new Wv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=lE,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Pt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Rs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,s=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!i||i===s)&&(o==null?void 0:o.user)&&(r=o.user)}return r?r._redirectEventId?(b(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await La(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=DN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?U(e):null;return n&&b(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&b(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Pt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new $i("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Pt(e)||this._popupRedirectResolver;b(n,this,"argument-error"),this.redirectPersistenceManager=await Rs.create(this,[Pt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return b(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return b(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=EE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Ve(t){return U(t)}class Wv{constructor(e){this.auth=e,this.observer=null,this.addObserver=QI(n=>this.observer=n)}get next(){return b(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function ZN(t,e,n){const r=Ve(t);b(r._canInitEmulator,r,"emulator-config-failed"),b(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=SE(e),{host:o,port:a}=eb(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||tb()}function SE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function eb(t){const e=SE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Hv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Hv(o)}}}function Hv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function tb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class lo{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return gn("not implemented")}_getIdTokenResponse(e){return gn("not implemented")}_linkToIdToken(e,n){return gn("not implemented")}_getReauthenticationResolver(e){return gn("not implemented")}}/**
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
 */async function TE(t,e){return qe(t,"POST","/v1/accounts:resetPassword",Pe(t,e))}async function kE(t,e){return qe(t,"POST","/v1/accounts:update",e)}async function nb(t,e){return qe(t,"POST","/v1/accounts:update",Pe(t,e))}/**
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
 */async function rb(t,e){return Jn(t,"POST","/v1/accounts:signInWithPassword",Pe(t,e))}async function ch(t,e){return qe(t,"POST","/v1/accounts:sendOobCode",Pe(t,e))}async function ib(t,e){return ch(t,e)}async function sb(t,e){return ch(t,e)}async function ob(t,e){return ch(t,e)}async function ab(t,e){return ch(t,e)}/**
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
 */async function ub(t,e){return Jn(t,"POST","/v1/accounts:signInWithEmailLink",Pe(t,e))}async function lb(t,e){return Jn(t,"POST","/v1/accounts:signInWithEmailLink",Pe(t,e))}/**
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
 */class $a extends lo{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new $a(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new $a(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return rb(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ub(e,{email:this._email,oobCode:this._password});default:Ze(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return kE(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return lb(e,{idToken:n,email:this._email,oobCode:this._password});default:Ze(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Fn(t,e){return Jn(t,"POST","/v1/accounts:signInWithIdp",Pe(t,e))}/**
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
 */const cb="http://localhost";class Sn extends lo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Sn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ze("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Rm(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Sn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Fn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Fn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Fn(e,n)}buildRequest(){const e={requestUri:cb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=oo(n)}return e}}/**
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
 */async function hb(t,e){return qe(t,"POST","/v1/accounts:sendVerificationCode",Pe(t,e))}async function db(t,e){return Jn(t,"POST","/v1/accounts:signInWithPhoneNumber",Pe(t,e))}async function fb(t,e){const n=await Jn(t,"POST","/v1/accounts:signInWithPhoneNumber",Pe(t,e));if(n.temporaryProof)throw Ll(t,"account-exists-with-different-credential",n);return n}const pb={USER_NOT_FOUND:"user-not-found"};async function mb(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Jn(t,"POST","/v1/accounts:signInWithPhoneNumber",Pe(t,n),pb)}/**
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
 */class mi extends lo{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new mi({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new mi({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return db(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return fb(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return mb(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new mi({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
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
 */function gb(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function yb(t){const e=ys(Ho(t)).link,n=e?ys(Ho(e)).deep_link_id:null,r=ys(Ho(t)).deep_link_id;return(r?ys(Ho(r)).link:null)||r||n||e||t}class hh{constructor(e){var n,r,i,s,o,a;const u=ys(Ho(e)),l=(n=u.apiKey)!==null&&n!==void 0?n:null,c=(r=u.oobCode)!==null&&r!==void 0?r:null,h=gb((i=u.mode)!==null&&i!==void 0?i:null);b(l&&c&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=c,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=yb(e);try{return new hh(n)}catch{return null}}}/**
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
 */class Fr{constructor(){this.providerId=Fr.PROVIDER_ID}static credential(e,n){return $a._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=hh.parseLink(n);return b(r,"argument-error"),$a._fromEmailAndCode(e,r.code,r.tenantId)}}Fr.PROVIDER_ID="password";Fr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Fr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Xn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class co extends Xn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class As extends co{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return b("providerId"in n&&"signInMethod"in n,"argument-error"),Sn._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return b(e.idToken||e.accessToken,"argument-error"),Sn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return As.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return As.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new As(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
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
 */class cn extends co{constructor(){super("facebook.com")}static credential(e){return Sn._fromParams({providerId:cn.PROVIDER_ID,signInMethod:cn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cn.credentialFromTaggedObject(e)}static credentialFromError(e){return cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cn.credential(e.oauthAccessToken)}catch{return null}}}cn.FACEBOOK_SIGN_IN_METHOD="facebook.com";cn.PROVIDER_ID="facebook.com";/**
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
 */class hn extends co{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Sn._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return hn.credential(n,r)}catch{return null}}}hn.GOOGLE_SIGN_IN_METHOD="google.com";hn.PROVIDER_ID="google.com";/**
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
 */class dn extends co{constructor(){super("github.com")}static credential(e){return Sn._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dn.credential(e.oauthAccessToken)}catch{return null}}}dn.GITHUB_SIGN_IN_METHOD="github.com";dn.PROVIDER_ID="github.com";/**
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
 */const vb="http://localhost";class zs extends lo{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return Fn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Fn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Fn(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new zs(r,s)}static _create(e,n){return new zs(e,n)}buildRequest(){return{requestUri:vb,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const wb="saml.";class wc extends Xn{constructor(e){b(e.startsWith(wb),"argument-error"),super(e)}static credentialFromResult(e){return wc.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return wc.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=zs.fromJSON(e);return b(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return zs._create(r,n)}catch{return null}}}/**
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
 */class fn extends co{constructor(){super("twitter.com")}static credential(e,n){return Sn._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return fn.credential(n,r)}catch{return null}}}fn.TWITTER_SIGN_IN_METHOD="twitter.com";fn.PROVIDER_ID="twitter.com";/**
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
 */async function CE(t,e){return Jn(t,"POST","/v1/accounts:signUp",Pe(t,e))}/**
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
 */class Jt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await fi._fromIdTokenResponse(e,r,i),o=Gv(r);return new Jt({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Gv(r);return new Jt({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Gv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function _b(t){var e;const n=Ve(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Jt({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await CE(n,{returnSecureToken:!0}),i=await Jt._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class _c extends At{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,_c.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new _c(e,n,r,i)}}function RE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?_c._fromErrorAndOperation(t,s,e,r):s})}/**
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
 */function AE(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function Ib(t,e){const n=U(t);await dh(!0,n,e);const{providerUserInfo:r}=await UN(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=AE(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Pm(t,e,n=!1){const r=await Wn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Jt._forOperation(t,"link",r)}async function dh(t,e,n){await La(e);const r=AE(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";b(r.has(n)===t,e.auth,i)}/**
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
 */async function NE(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Wn(t,RE(r,i,e,t),n);b(s.idToken,r,"internal-error");const o=lh(s.idToken);b(o,r,"internal-error");const{sub:a}=o;return b(t.uid===a,r,"user-mismatch"),Jt._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ze(r,"user-mismatch"),s}}/**
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
 */async function bE(t,e,n=!1){const r="signIn",i=await RE(t,r,e),s=await Jt._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function fh(t,e){return bE(Ve(t),e)}async function xE(t,e){const n=U(t);return await dh(!1,n,e.providerId),Pm(n,e)}async function PE(t,e){return NE(U(t),e)}/**
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
 */async function Eb(t,e){return Jn(t,"POST","/v1/accounts:signInWithCustomToken",Pe(t,e))}/**
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
 */async function Sb(t,e){const n=Ve(t),r=await Eb(n,{token:e,returnSecureToken:!0}),i=await Jt._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
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
 */class ph{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?Dm._fromServerResponse(e,n):Ze(e,"internal-error")}}class Dm extends ph{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new Dm(n)}}/**
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
 */function mh(t,e,n){var r;b(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),b(typeof n.dynamicLinkDomain=="undefined"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(b(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(b(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function Tb(t,e,n){const r=U(t),i={requestType:"PASSWORD_RESET",email:e};n&&mh(r,i,n),await sb(r,i)}async function kb(t,e,n){await TE(U(t),{oobCode:e,newPassword:n})}async function Cb(t,e){await nb(U(t),{oobCode:e})}async function DE(t,e){const n=U(t),r=await TE(n,{oobCode:e}),i=r.requestType;switch(b(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":b(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":b(r.mfaInfo,n,"internal-error");default:b(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=ph._fromServerResponse(Ve(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function Rb(t,e){const{data:n}=await DE(U(t),e);return n.email}async function Ab(t,e,n){const r=Ve(t),i=await CE(r,{returnSecureToken:!0,email:e,password:n}),s=await Jt._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function Nb(t,e,n){return fh(U(t),Fr.credential(e,n))}/**
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
 */async function bb(t,e,n){const r=U(t),i={requestType:"EMAIL_SIGNIN",email:e};b(n.handleCodeInApp,r,"argument-error"),n&&mh(r,i,n),await ob(r,i)}function xb(t,e){const n=hh.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function Pb(t,e,n){const r=U(t),i=Fr.credentialWithLink(e,n||Oa());return b(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),fh(r,i)}/**
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
 */async function Db(t,e){return qe(t,"POST","/v1/accounts:createAuthUri",Pe(t,e))}/**
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
 */async function Ob(t,e){const n=Nm()?Oa():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await Db(U(t),r);return i||[]}async function Lb(t,e){const n=U(t),r=await t.getIdToken(),i={requestType:"VERIFY_EMAIL",idToken:r};e&&mh(n.auth,i,e);const{email:s}=await ib(n.auth,i);s!==t.email&&await t.reload()}async function Mb(t,e,n){const r=U(t),i=await t.getIdToken(),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:i,newEmail:e};n&&mh(r.auth,s,n);const{email:o}=await ab(r.auth,s);o!==t.email&&await t.reload()}/**
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
 */async function $b(t,e){return qe(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Ub(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=U(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Wn(r,$b(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:u})=>u==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function Fb(t,e){return OE(U(t),e,null)}function Vb(t,e){return OE(U(t),null,e)}async function OE(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await Wn(t,kE(r,s));await t._updateTokensIfNecessary(o,!0)}/**
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
 */function Bb(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t==null?void 0:t.idToken)){const o=(n=(e=lh(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new Ns(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new qb(s,i);case"github.com":return new zb(s,i);case"google.com":return new jb(s,i);case"twitter.com":return new Wb(s,i,t.screenName||null);case"custom":case"anonymous":return new Ns(s,null);default:return new Ns(s,r,i)}}class Ns{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class LE extends Ns{constructor(e,n,r,i){super(e,n,r),this.username=i}}class qb extends Ns{constructor(e,n){super(e,"facebook.com",n)}}class zb extends LE{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class jb extends Ns{constructor(e,n){super(e,"google.com",n)}}class Wb extends LE{constructor(e,n,r){super(e,"twitter.com",n,r)}}function Hb(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:Bb(n)}class ii{constructor(e,n){this.type=e,this.credential=n}static _fromIdtoken(e){return new ii("enroll",e)}static _fromMfaPendingCredential(e){return new ii("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return ii._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return ii._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class Om{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=Ve(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>ph._fromServerResponse(r,a));b(i.mfaPendingCredential,r,"internal-error");const o=ii._fromMfaPendingCredential(i.mfaPendingCredential);return new Om(o,s,async a=>{const u=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const l=Object.assign(Object.assign({},i),{idToken:u.idToken,refreshToken:u.refreshToken});switch(n.operationType){case"signIn":const c=await Jt._fromIdTokenResponse(r,n.operationType,l);return await r._updateCurrentUser(c.user),c;case"reauthenticate":return b(n.user,r,"internal-error"),Jt._forOperation(n.user,n.operationType,l);default:Ze(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function Gb(t,e){var n;const r=U(t),i=e;return b(e.customData.operationType,r,"argument-error"),b((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),Om._fromError(r,i)}/**
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
 */function Kb(t,e){return qe(t,"POST","/v2/accounts/mfaEnrollment:start",Pe(t,e))}function Qb(t,e){return qe(t,"POST","/v2/accounts/mfaEnrollment:finalize",Pe(t,e))}function Yb(t,e){return qe(t,"POST","/v2/accounts/mfaEnrollment:withdraw",Pe(t,e))}class Lm{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>ph._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Lm(e)}async getSession(){return ii._fromIdtoken(await this.user.getIdToken())}async enroll(e,n){const r=e,i=await this.getSession(),s=await Wn(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken(),i=await Wn(this.user,Yb(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i);try{await this.user.reload()}catch(s){if(s.code!=="auth/user-token-expired")throw s}}}const xd=new WeakMap;function Jb(t){const e=U(t);return xd.has(e)||xd.set(e,Lm._fromUser(e)),xd.get(e)}const Ic="__sak";/**
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
 */class ME{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ic,"1"),this.storage.removeItem(Ic),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Xb(){const t=le();return xm(t)||uo(t)}const Zb=1e3,ex=10;class $E extends ME{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Xb()&&JN(),this.fallbackToPolling=IE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);YN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,ex):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Zb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}$E.type="LOCAL";const Mm=$E;/**
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
 */class UE extends ME{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}UE.type="SESSION";const Ii=UE;/**
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
 */function tx(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class gh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new gh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,s)),u=await tx(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}gh.receivers=[];/**
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
 */function pu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class nx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const l=pu("",20);i.port1.start();const c=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ne(){return window}function rx(t){Ne().location.href=t}/**
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
 */function $m(){return typeof Ne().WorkerGlobalScope!="undefined"&&typeof Ne().importScripts=="function"}async function ix(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function sx(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function ox(){return $m()?self:null}/**
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
 */const FE="firebaseLocalStorageDb",ax=1,Ec="firebaseLocalStorage",VE="fbase_key";class mu{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function yh(t,e){return t.transaction([Ec],e?"readwrite":"readonly").objectStore(Ec)}function ux(){const t=indexedDB.deleteDatabase(FE);return new mu(t).toPromise()}function Wf(){const t=indexedDB.open(FE,ax);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ec,{keyPath:VE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ec)?e(r):(r.close(),await ux(),e(await Wf()))})})}async function Kv(t,e,n){const r=yh(t,!0).put({[VE]:e,value:n});return new mu(r).toPromise()}async function lx(t,e){const n=yh(t,!1).get(e),r=await new mu(n).toPromise();return r===void 0?null:r.value}function Qv(t,e){const n=yh(t,!0).delete(e);return new mu(n).toPromise()}const cx=800,hx=3;class BE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Wf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>hx)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return $m()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=gh._getInstance(ox()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await ix(),!this.activeServiceWorker)return;this.sender=new nx(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||sx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Wf();return await Kv(e,Ic,"1"),await Qv(e,Ic),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Kv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>lx(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Qv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=yh(i,!1).getAll();return new mu(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),cx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}BE.type="LOCAL";const Ua=BE;/**
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
 */function dx(t,e){return qe(t,"POST","/v2/accounts/mfaSignIn:start",Pe(t,e))}function fx(t,e){return qe(t,"POST","/v2/accounts/mfaSignIn:finalize",Pe(t,e))}/**
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
 */async function px(t){return(await qe(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
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
 */function mx(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function qE(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Qe("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",mx().appendChild(r)})}function zE(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */const gx=500,yx=6e4,al=1e12;class vx{constructor(e){this.auth=e,this.counter=al,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new wx(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||al;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||al;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||al;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class wx{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;b(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=_x(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},yx)},gx))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function _x(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
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
 */const Pd=zE("rcb"),Ix=new du(3e4,6e4),Ex="https://www.google.com/recaptcha/api.js?";class Sx{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!Ne().grecaptcha}load(e,n=""){return b(Tx(n),e,"argument-error"),this.shouldResolveImmediately(n)?Promise.resolve(Ne().grecaptcha):new Promise((r,i)=>{const s=Ne().setTimeout(()=>{i(Qe(e,"network-request-failed"))},Ix.get());Ne()[Pd]=()=>{Ne().clearTimeout(s),delete Ne()[Pd];const a=Ne().grecaptcha;if(!a){i(Qe(e,"internal-error"));return}const u=a.render;a.render=(l,c)=>{const h=u(l,c);return this.counter++,h},this.hostLanguage=n,r(a)};const o=`${Ex}?${oo({onload:Pd,render:"explicit",hl:n})}`;qE(o).catch(()=>{clearTimeout(s),i(Qe(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!Ne().grecaptcha&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function Tx(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class kx{async load(e){return new vx(e)}clearedOneInstance(){}}/**
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
 */const jE="recaptcha",Cx={theme:"light",type:"image"};class Rx{constructor(e,n=Object.assign({},Cx),r){this.parameters=n,this.type=jE,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Ve(r),this.isInvisible=this.parameters.size==="invisible",b(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment");const i=typeof e=="string"?document.getElementById(e):e;b(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new kx:new Sx,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{!o||(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){b(!this.parameters.sitekey,this.auth,"argument-error"),b(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),b(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=Ne()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){b(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){b(Nm()&&!$m(),this.auth,"internal-error"),await Ax(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await px(this.auth);b(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return b(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function Ax(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */class Um{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=mi._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function Nx(t,e,n){const r=Ve(t),i=await vh(r,e,U(n));return new Um(i,s=>fh(r,s))}async function bx(t,e,n){const r=U(t);await dh(!1,r,"phone");const i=await vh(r.auth,e,U(n));return new Um(i,s=>xE(r,s))}async function xx(t,e,n){const r=U(t),i=await vh(r.auth,e,U(n));return new Um(i,s=>PE(r,s))}async function vh(t,e,n){var r;const i=await n.verify();try{b(typeof i=="string",t,"argument-error"),b(n.type===jE,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return b(o.type==="enroll",t,"internal-error"),(await Kb(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{b(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return b(a,t,"missing-multi-factor-info"),(await dx(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await hb(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function Px(t,e){await Pm(U(t),e)}/**
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
 */class sn{constructor(e){this.providerId=sn.PROVIDER_ID,this.auth=Ve(e)}verifyPhoneNumber(e,n){return vh(this.auth,e,U(n))}static credential(e,n){return mi._fromVerification(e,n)}static credentialFromResult(e){const n=e;return sn.credentialFromTaggedObject(n)}static credentialFromError(e){return sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?mi._fromTokenResponse(n,r):null}}sn.PROVIDER_ID="phone";sn.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function Ui(t,e){return e?Pt(e):(b(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Fm extends lo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Fn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Fn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Fn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Dx(t){return bE(t.auth,new Fm(t),t.bypassAuthState)}function Ox(t){const{auth:e,user:n}=t;return b(n,e,"internal-error"),NE(n,new Fm(t),t.bypassAuthState)}async function Lx(t){const{auth:e,user:n}=t;return b(n,e,"internal-error"),Pm(n,new Fm(t),t.bypassAuthState)}/**
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
 */class WE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Dx;case"linkViaPopup":case"linkViaRedirect":return Lx;case"reauthViaPopup":case"reauthViaRedirect":return Ox;default:Ze(this.auth,"internal-error")}}resolve(e){on(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){on(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Mx=new du(2e3,1e4);async function $x(t,e,n){const r=Ve(t);ao(t,e,Xn);const i=Ui(r,n);return new Ln(r,"signInViaPopup",e,i).executeNotNull()}async function Ux(t,e,n){const r=U(t);ao(r.auth,e,Xn);const i=Ui(r.auth,n);return new Ln(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function Fx(t,e,n){const r=U(t);ao(r.auth,e,Xn);const i=Ui(r.auth,n);return new Ln(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class Ln extends WE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ln.currentPopupAction&&Ln.currentPopupAction.cancel(),Ln.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return b(e,this.auth,"internal-error"),e}async onExecution(){on(this.filter.length===1,"Popup operations only handle one event");const e=pu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Qe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Qe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ln.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qe(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Mx.get())};e()}}Ln.currentPopupAction=null;/**
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
 */const Vx="pendingRedirect",Ml=new Map;class Bx extends WE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ml.get(this.auth._key());if(!e){try{const r=await qx(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ml.set(this.auth._key(),e)}return this.bypassAuthState||Ml.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function qx(t,e){const n=GE(e),r=HE(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function Vm(t,e){return HE(t)._set(GE(e),"true")}function zx(){Ml.clear()}function HE(t){return Pt(t._redirectPersistence)}function GE(t){return pi(Vx,t.config.apiKey,t.name)}/**
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
 */function jx(t,e,n){return Wx(t,e,n)}async function Wx(t,e,n){const r=Ve(t);ao(t,e,Xn);const i=Ui(r,n);return await Vm(i,r),i._openRedirect(r,e,"signInViaRedirect")}function Hx(t,e,n){return Gx(t,e,n)}async function Gx(t,e,n){const r=U(t);ao(r.auth,e,Xn);const i=Ui(r.auth,n);await Vm(i,r.auth);const s=await KE(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function Kx(t,e,n){return Qx(t,e,n)}async function Qx(t,e,n){const r=U(t);ao(r.auth,e,Xn);const i=Ui(r.auth,n);await dh(!1,r,e.providerId),await Vm(i,r.auth);const s=await KE(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function Yx(t,e){return await Ve(t)._initializationPromise,wh(t,e,!1)}async function wh(t,e,n=!1){const r=Ve(t),i=Ui(r,e),o=await new Bx(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function KE(t){const e=pu(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
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
 */const Jx=10*60*1e3;class QE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Xx(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!YE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Qe(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Jx&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yv(e))}saveEventToCache(e){this.cachedEventUids.add(Yv(e)),this.lastProcessedEventTime=Date.now()}}function Yv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function YE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Xx(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return YE(t);default:return!1}}/**
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
 */async function JE(t,e={}){return qe(t,"GET","/v1/projects",e)}/**
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
 */const Zx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,eP=/^https?/;async function tP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await JE(t);for(const n of e)try{if(nP(n))return}catch{}Ze(t,"unauthorized-domain")}function nP(t){const e=Oa(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!eP.test(n))return!1;if(Zx.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const rP=new du(3e4,6e4);function Jv(){const t=Ne().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function iP(t){return new Promise((e,n)=>{var r,i,s;function o(){Jv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Jv(),n(Qe(t,"network-request-failed"))},timeout:rP.get()})}if(!((i=(r=Ne().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Ne().gapi)===null||s===void 0)&&s.load)o();else{const a=zE("iframefcb");return Ne()[a]=()=>{gapi.load?o():n(Qe(t,"network-request-failed"))},qE(`https://apis.google.com/js/api.js?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw $l=null,e})}let $l=null;function sP(t){return $l=$l||iP(t),$l}/**
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
 */const oP=new du(5e3,15e3),aP="__/auth/iframe",uP="emulator/auth/iframe",lP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},cP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function hP(t){const e=t.config;b(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?bm(e,uP):`https://${t.config.authDomain}/${aP}`,r={apiKey:e.apiKey,appName:t.name,v:Ur},i=cP.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${oo(r).slice(1)}`}async function dP(t){const e=await sP(t),n=Ne().gapi;return b(n,t,"internal-error"),e.open({where:document.body,url:hP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lP,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Qe(t,"network-request-failed"),a=Ne().setTimeout(()=>{s(o)},oP.get());function u(){Ne().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const fP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},pP=500,mP=600,gP="_blank",yP="http://localhost";class Xv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function vP(t,e,n,r=pP,i=mP){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},fP),{width:r.toString(),height:i.toString(),top:s,left:o}),l=le().toLowerCase();n&&(a=yE(l)?gP:n),gE(l)&&(e=e||yP,u.scrollbars="yes");const c=Object.entries(u).reduce((d,[p,m])=>`${d}${p}=${m},`,"");if(QN(l)&&a!=="_self")return wP(e||"",a),new Xv(null);const h=window.open(e||"",a,c);b(h,t,"popup-blocked");try{h.focus()}catch{}return new Xv(h)}function wP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const _P="__/auth/handler",IP="emulator/auth/handler";function Hf(t,e,n,r,i,s){b(t.config.authDomain,t,"auth-domain-config-required"),b(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ur,eventId:i};if(e instanceof Xn){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",gA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,l]of Object.entries(s||{}))o[u]=l}if(e instanceof co){const u=e.getScopes().filter(l=>l!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];return`${EP(t)}?${oo(a).slice(1)}`}function EP({config:t}){return t.emulator?bm(t,IP):`https://${t.authDomain}/${_P}`}/**
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
 */const Dd="webStorageSupport";class SP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ii,this._completeRedirectFn=wh}async _openPopup(e,n,r,i){var s;on((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Hf(e,n,r,Oa(),i);return vP(e,o,pu())}async _openRedirect(e,n,r,i){return await this._originValidation(e),rx(Hf(e,n,r,Oa(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(on(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await dP(e),r=new QE(e);return n.register("authEvent",i=>(b(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Dd,{type:Dd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Dd];o!==void 0&&n(!!o),Ze(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=tP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return IE()||xm()||uo()}}const TP=SP;class kP{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return gn("unexpected MultiFactorSessionType")}}}class Bm extends kP{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Bm(e)}_finalizeEnroll(e,n,r){return Qb(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return fx(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class XE{constructor(){}static assertion(e){return Bm._fromCredential(e)}}XE.FACTOR_ID="phone";var Zv="@firebase/auth",ew="0.19.11";/**
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
 */class CP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){b(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function RP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function AP(t){jn(new Yt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,u)=>{b(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),b(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:EE(t)},c=new XN(a,u,l);return xN(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),jn(new Yt("auth-internal",e=>{const n=Ve(e.getProvider("auth").getImmediate());return(r=>new CP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Kt(Zv,ew,RP(t)),Kt(Zv,ew,"esm2017")}AP("Browser");/**
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
 */function Ei(){return window}/**
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
 */const NP=2e3;async function bP(t,e,n){var r;const{BuildInfo:i}=Ei();on(e.sessionId,"AuthEvent did not contain a session ID");const s=await LP(e.sessionId),o={};return uo()?o.ibi=i.packageName:fu()?o.apn=i.packageName:Ze(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,Hf(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function xP(t){const{BuildInfo:e}=Ei(),n={};uo()?n.iosBundleId=e.packageName:fu()?n.androidPackageName=e.packageName:Ze(t,"operation-not-supported-in-this-environment"),await JE(t,n)}function PP(t){const{cordova:e}=Ei();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,KN()?"_blank":"_system","location=yes"),n(i)})})}async function DP(t,e,n){const{cordova:r}=Ei();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function u(){var h;s();const d=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function l(){a||(a=window.setTimeout(()=>{o(Qe(t,"redirect-cancelled-by-user"))},NP))}function c(){(document==null?void 0:document.visibilityState)==="visible"&&l()}e.addPassiveListener(u),document.addEventListener("resume",l,!1),fu()&&document.addEventListener("visibilitychange",c,!1),i=()=>{e.removePassiveListener(u),document.removeEventListener("resume",l,!1),document.removeEventListener("visibilitychange",c,!1),a&&window.clearTimeout(a)}})}finally{i()}}function OP(t){var e,n,r,i,s,o,a,u,l,c;const h=Ei();b(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),b(typeof((n=h==null?void 0:h.BuildInfo)===null||n===void 0?void 0:n.packageName)!="undefined",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),b(typeof((s=(i=(r=h==null?void 0:h.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),b(typeof((u=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||u===void 0?void 0:u.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),b(typeof((c=(l=h==null?void 0:h.cordova)===null||l===void 0?void 0:l.InAppBrowser)===null||c===void 0?void 0:c.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function LP(t){const e=MP(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function MP(t){if(on(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder!="undefined")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
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
 */const $P=20;class UP extends QE{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function FP(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:qP(),postBody:null,tenantId:t.tenantId,error:Qe(t,"no-auth-event")}}function VP(t,e){return Gf()._set(Kf(t),e)}async function tw(t){const e=await Gf()._get(Kf(t));return e&&await Gf()._remove(Kf(t)),e}function BP(t,e){var n,r;const i=jP(e);if(i.includes("/__/auth/callback")){const s=Ul(i),o=s.firebaseError?zP(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],u=a?Qe(a):null;return u?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:u,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function qP(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<$P;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function Gf(){return Pt(Mm)}function Kf(t){return pi("authEvent",t.config.apiKey,t.name)}function zP(t){try{return JSON.parse(t)}catch{return null}}function jP(t){const e=Ul(t),n=e.link?decodeURIComponent(e.link):void 0,r=Ul(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Ul(i).link||i||r||n||t}function Ul(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return ys(n.join("?"))}/**
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
 */const WP=500;class HP{constructor(){this._redirectPersistence=Ii,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=wh}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new UP(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){Ze(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){OP(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),zx(),await this._originValidation(e);const o=FP(e,r,i);await VP(e,o);const a=await bP(e,o,n),u=await PP(a);return DP(e,s,u)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=xP(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=Ei(),o=setTimeout(async()=>{await tw(e),n.onEvent(nw())},WP),a=async c=>{clearTimeout(o);const h=await tw(e);let d=null;h&&(c==null?void 0:c.url)&&(d=BP(h,c.url)),n.onEvent(d||nw())};typeof r!="undefined"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const u=i,l=`${s.packageName.toLowerCase()}://`;Ei().handleOpenURL=async c=>{if(c.toLowerCase().startsWith(l)&&a({url:c}),typeof u=="function")try{u(c)}catch(h){console.error(h)}}}}const GP=HP;function nw(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Qe("no-auth-event")}}/**
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
 */function KP(t,e){Ve(t)._logFramework(e)}var QP="@firebase/auth-compat",YP="0.2.11";/**
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
 */const JP=1e3;function Sc(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function XP(){return Sc()==="http:"||Sc()==="https:"}function ZE(t=le()){return!!((Sc()==="file:"||Sc()==="ionic:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function ZP(){return ah()||Em()}function eD(){return Tm()&&(document==null?void 0:document.documentMode)===11}function tD(t=le()){return/Edge\/\d+/.test(t)}function nD(t=le()){return eD()||tD(t)}function e1(){try{const t=self.localStorage,e=pu();if(t)return t.setItem(e,"1"),t.removeItem(e),nD()?xa():!0}catch{return qm()&&xa()}return!1}function qm(){return typeof global!="undefined"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Od(){return(XP()||Sm()||ZE())&&!ZP()&&e1()&&!qm()}function t1(){return ZE()&&typeof document!="undefined"}async function rD(){return t1()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},JP);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function iD(){return typeof window!="undefined"?window:null}/**
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
 */const bt={LOCAL:"local",NONE:"none",SESSION:"session"},Do=b,n1="persistence";function sD(t,e){if(Do(Object.values(bt).includes(e),t,"invalid-persistence-type"),ah()){Do(e!==bt.SESSION,t,"unsupported-persistence-type");return}if(Em()){Do(e===bt.NONE,t,"unsupported-persistence-type");return}if(qm()){Do(e===bt.NONE||e===bt.LOCAL&&xa(),t,"unsupported-persistence-type");return}Do(e===bt.NONE||e1(),t,"unsupported-persistence-type")}async function Qf(t){await t._initializationPromise;const e=r1(),n=pi(n1,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function oD(t,e){const n=r1();if(!n)return[];const r=pi(n1,t,e);switch(n.getItem(r)){case bt.NONE:return[qs];case bt.LOCAL:return[Ua,Ii];case bt.SESSION:return[Ii];default:return[]}}function r1(){var t;try{return((t=iD())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
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
 */const aD=b;class pr{constructor(){this.browserResolver=Pt(TP),this.cordovaResolver=Pt(GP),this.underlyingResolver=null,this._redirectPersistence=Ii,this._completeRedirectFn=wh}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return t1()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return aD(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await rD();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function i1(t){return t.unwrap()}function uD(t){return t.wrapped()}/**
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
 */function lD(t){return s1(t)}function cD(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if(e.code==="auth/multi-factor-auth-required"){const i=e;i.resolver=new hD(t,Gb(t,e))}else if(r){const i=s1(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function s1(t){const{_tokenResponse:e}=t instanceof At?t.customData:t;if(!e)return null;if(!(t instanceof At)&&"temporaryProof"in e&&"phoneNumber"in e)return sn.credentialFromResult(t);const n=e.providerId;if(!n||n===Po.PASSWORD)return null;let r;switch(n){case Po.GOOGLE:r=hn;break;case Po.FACEBOOK:r=cn;break;case Po.GITHUB:r=dn;break;case Po.TWITTER:r=fn;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:u}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?zs._create(n,a):Sn._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new As(n).credential({idToken:i,accessToken:s,rawNonce:u})}return t instanceof At?r.credentialFromError(t):r.credentialFromResult(t)}function _t(t,e){return e.catch(n=>{throw n instanceof At&&cD(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:lD(n),additionalUserInfo:Hb(n),user:Mn.getOrCreate(i)}})}async function Yf(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>_t(t,n.confirm(r))}}class hD{constructor(e,n){this.resolver=n,this.auth=uD(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return _t(i1(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */class Mn{constructor(e){this._delegate=e,this.multiFactor=Jb(e)}static getOrCreate(e){return Mn.USER_MAP.has(e)||Mn.USER_MAP.set(e,new Mn(e)),Mn.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return _t(this.auth,xE(this._delegate,e))}async linkWithPhoneNumber(e,n){return Yf(this.auth,bx(this._delegate,e,n))}async linkWithPopup(e){return _t(this.auth,Fx(this._delegate,e,pr))}async linkWithRedirect(e){return await Qf(Ve(this.auth)),Kx(this._delegate,e,pr)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return _t(this.auth,PE(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return Yf(this.auth,xx(this._delegate,e,n))}reauthenticateWithPopup(e){return _t(this.auth,Ux(this._delegate,e,pr))}async reauthenticateWithRedirect(e){return await Qf(Ve(this.auth)),Hx(this._delegate,e,pr)}sendEmailVerification(e){return Lb(this._delegate,e)}async unlink(e){return await Ib(this._delegate,e),this}updateEmail(e){return Fb(this._delegate,e)}updatePassword(e){return Vb(this._delegate,e)}updatePhoneNumber(e){return Px(this._delegate,e)}updateProfile(e){return Ub(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return Mb(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}Mn.USER_MAP=new WeakMap;/**
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
 */const Oo=b;class Jf{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;Oo(r,"invalid-api-key",{appName:e.name}),Oo(r,"invalid-api-key",{appName:e.name});const i=typeof window!="undefined"?pr:void 0;this._delegate=n.initialize({options:{persistence:dD(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(NN),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Mn.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){ZN(this._delegate,e,n)}applyActionCode(e){return Cb(this._delegate,e)}checkActionCode(e){return DE(this._delegate,e)}confirmPasswordReset(e,n){return kb(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return _t(this._delegate,Ab(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return Ob(this._delegate,e)}isSignInWithEmailLink(e){return xb(this._delegate,e)}async getRedirectResult(){Oo(Od(),this._delegate,"operation-not-supported-in-this-environment");const e=await Yx(this._delegate,pr);return e?_t(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){KP(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=rw(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=rw(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return bb(this._delegate,e,n)}sendPasswordResetEmail(e,n){return Tb(this._delegate,e,n||void 0)}async setPersistence(e){sD(this._delegate,e);let n;switch(e){case bt.SESSION:n=Ii;break;case bt.LOCAL:n=await Pt(Ua)._isAvailable()?Ua:Mm;break;case bt.NONE:n=qs;break;default:return Ze("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return _t(this._delegate,_b(this._delegate))}signInWithCredential(e){return _t(this._delegate,fh(this._delegate,e))}signInWithCustomToken(e){return _t(this._delegate,Sb(this._delegate,e))}signInWithEmailAndPassword(e,n){return _t(this._delegate,Nb(this._delegate,e,n))}signInWithEmailLink(e,n){return _t(this._delegate,Pb(this._delegate,e,n))}signInWithPhoneNumber(e,n){return Yf(this._delegate,Nx(this._delegate,e,n))}async signInWithPopup(e){return Oo(Od(),this._delegate,"operation-not-supported-in-this-environment"),_t(this._delegate,$x(this._delegate,e,pr))}async signInWithRedirect(e){return Oo(Od(),this._delegate,"operation-not-supported-in-this-environment"),await Qf(this._delegate),jx(this._delegate,e,pr)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return Rb(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Jf.Persistence=bt;function rw(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&Mn.getOrCreate(o)),error:e,complete:n}}function dD(t,e){const n=oD(t,e);if(typeof self!="undefined"&&!n.includes(Ua)&&n.push(Ua),typeof window!="undefined")for(const r of[Mm,Ii])n.includes(r)||n.push(r);return n.includes(qs)||n.push(qs),n}/**
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
 */class zm{constructor(){this.providerId="phone",this._delegate=new sn(i1(un.auth()))}static credential(e,n){return sn.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}zm.PHONE_SIGN_IN_METHOD=sn.PHONE_SIGN_IN_METHOD;zm.PROVIDER_ID=sn.PROVIDER_ID;/**
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
 */const fD=b;class pD{constructor(e,n,r=un.app()){var i;fD((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new Rx(e,n,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const mD="auth-compat";function gD(t){t.INTERNAL.registerComponent(new Yt(mD,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new Jf(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Ji.EMAIL_SIGNIN,PASSWORD_RESET:Ji.PASSWORD_RESET,RECOVER_EMAIL:Ji.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Ji.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Ji.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Ji.VERIFY_EMAIL}},EmailAuthProvider:Fr,FacebookAuthProvider:cn,GithubAuthProvider:dn,GoogleAuthProvider:hn,OAuthProvider:As,SAMLAuthProvider:wc,PhoneAuthProvider:zm,PhoneMultiFactorGenerator:XE,RecaptchaVerifier:pD,TwitterAuthProvider:fn,Auth:Jf,AuthCredential:lo,Error:At}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(QP,YP)}gD(un);/**
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
 */const o1="firebasestorage.googleapis.com",a1="storageBucket",yD=2*60*1e3,vD=10*60*1e3;/**
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
 */class ye extends At{constructor(e,n){super(Ld(e),`Firebase Storage: ${n} (${Ld(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ye.prototype)}_codeEquals(e){return Ld(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function Ld(t){return"storage/"+t}function jm(){const t="An unknown error occurred, please check the error payload for server response.";return new ye("unknown",t)}function wD(t){return new ye("object-not-found","Object '"+t+"' does not exist.")}function _D(t){return new ye("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function ID(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ye("unauthenticated",t)}function ED(){return new ye("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function SD(t){return new ye("unauthorized","User does not have permission to access '"+t+"'.")}function TD(){return new ye("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function u1(){return new ye("canceled","User canceled the upload/download.")}function kD(t){return new ye("invalid-url","Invalid URL '"+t+"'.")}function CD(t){return new ye("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function RD(){return new ye("no-default-bucket","No default bucket found. Did you set the '"+a1+"' property when initializing the app?")}function l1(){return new ye("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function AD(){return new ye("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.")}function ND(){return new ye("no-download-url","The given file does not have any download URLs.")}function bs(t){return new ye("invalid-argument",t)}function c1(){return new ye("app-deleted","The Firebase app was deleted.")}function h1(t){return new ye("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function sa(t,e){return new ye("invalid-format","String does not match format '"+t+"': "+e)}function Lo(t){throw new ye("internal-error","Internal error: "+t)}/**
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
 */class st{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=st.makeFromUrl(e,n)}catch{return new st(e,"")}if(r.path==="")return r;throw CD(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(v){v.path.charAt(v.path.length-1)==="/"&&(v.path_=v.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function l(v){v.path_=decodeURIComponent(v.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),m={bucket:1,path:3},I=n===o1?"(?:storage.googleapis.com|storage.cloud.google.com)":n,R="([^?#]*)",g=new RegExp(`^https?://${I}/${i}/${R}`,"i"),y=[{regex:a,indices:u,postModify:s},{regex:p,indices:m,postModify:l},{regex:g,indices:{bucket:1,path:2},postModify:l}];for(let v=0;v<y.length;v++){const T=y[v],k=T.regex.exec(e);if(k){const E=k[T.indices.bucket];let S=k[T.indices.path];S||(S=""),r=new st(E,S),T.postModify(r);break}}if(r==null)throw kD(e);return r}}class bD{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function xD(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function u(){return a===2}let l=!1;function c(...R){l||(l=!0,e.apply(null,R))}function h(R){i=setTimeout(()=>{i=null,t(p,u())},R)}function d(){s&&clearTimeout(s)}function p(R,...g){if(l){d();return}if(R){d(),c.call(null,R,...g);return}if(u()||o){d(),c.call(null,R,...g);return}r<64&&(r*=2);let y;a===1?(a=2,y=0):y=(r+Math.random())*1e3,h(y)}let m=!1;function I(R){m||(m=!0,d(),!l&&(i!==null?(R||(a=2),clearTimeout(i),h(0)):R||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,I(!0)},n),I}function PD(t){t(!1)}/**
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
 */function DD(t){return t!==void 0}function OD(t){return typeof t=="function"}function LD(t){return typeof t=="object"&&!Array.isArray(t)}function _h(t){return typeof t=="string"||t instanceof String}function iw(t){return Wm()&&t instanceof Blob}function Wm(){return typeof Blob!="undefined"}function Xf(t,e,n,r){if(r<e)throw bs(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw bs(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Vr(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function d1(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var gi;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(gi||(gi={}));/**
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
 */class MD{constructor(e,n,r,i,s,o,a,u,l,c,h){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=u,this.timeout_=l,this.progressCallback_=c,this.connectionFactory_=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,p)=>{this.resolve_=d,this.reject_=p,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new ul(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const u=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,l)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===gi.NO_ERROR,u=s.getStatus();if(!a||this.isRetryStatusCode_(u)){const c=s.getErrorCode()===gi.ABORT;r(!1,new ul(!1,null,c));return}const l=this.successCodes_.indexOf(u)!==-1;r(!0,new ul(l,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(a,a.getResponse());DD(u)?s(u):s()}catch(u){o(u)}else if(a!==null){const u=jm();u.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,u)):o(u)}else if(i.canceled){const u=this.appDelete_?c1():u1();o(u)}else{const u=TD();o(u)}};this.canceled_?n(!1,new ul(!1,null,!0)):this.backoffId_=xD(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&PD(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,s=this.additionalRetryCodes_.indexOf(e)!==-1;return n||i||s}}class ul{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function $D(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function UD(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function FD(t,e){e&&(t["X-Firebase-GMPID"]=e)}function VD(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function BD(t,e,n,r,i,s){const o=d1(t.urlParams),a=t.url+o,u=Object.assign({},t.headers);return FD(u,e),$D(u,n),UD(u,s),VD(u,r),new MD(a,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i)}/**
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
 */function qD(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function zD(...t){const e=qD();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Wm())return new Blob(t);throw new ye("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function jD(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function WD(t){return atob(t)}/**
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
 */const qt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Md{constructor(e,n){this.data=e,this.contentType=n||null}}function f1(t,e){switch(t){case qt.RAW:return new Md(p1(e));case qt.BASE64:case qt.BASE64URL:return new Md(m1(t,e));case qt.DATA_URL:return new Md(GD(e),KD(e))}throw jm()}function p1(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function HD(t){let e;try{e=decodeURIComponent(t)}catch{throw sa(qt.DATA_URL,"Malformed data URL.")}return p1(e)}function m1(t,e){switch(t){case qt.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw sa(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case qt.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw sa(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=WD(e)}catch{throw sa(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class g1{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw sa(qt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=QD(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function GD(t){const e=new g1(t);return e.base64?m1(qt.BASE64,e.rest):HD(e.rest)}function KD(t){return new g1(t).contentType}function QD(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class xn{constructor(e,n){let r=0,i="";iw(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(iw(this.data_)){const r=this.data_,i=jD(r,e,n);return i===null?null:new xn(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new xn(r,!0)}}static getBlob(...e){if(Wm()){const n=e.map(r=>r instanceof xn?r.data_:r);return new xn(zD.apply(null,n))}else{const n=e.map(o=>_h(o)?f1(qt.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new xn(i,!0)}}uploadData(){return this.data_}}/**
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
 */function Hm(t){let e;try{e=JSON.parse(t)}catch{return null}return LD(e)?e:null}/**
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
 */function YD(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function JD(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function y1(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function XD(t,e){return e}class lt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||XD}}let ll=null;function ZD(t){return!_h(t)||t.length<2?t:y1(t)}function Ih(){if(ll)return ll;const t=[];t.push(new lt("bucket")),t.push(new lt("generation")),t.push(new lt("metageneration")),t.push(new lt("name","fullPath",!0));function e(s,o){return ZD(o)}const n=new lt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new lt("size");return i.xform=r,t.push(i),t.push(new lt("timeCreated")),t.push(new lt("updated")),t.push(new lt("md5Hash",null,!0)),t.push(new lt("cacheControl",null,!0)),t.push(new lt("contentDisposition",null,!0)),t.push(new lt("contentEncoding",null,!0)),t.push(new lt("contentLanguage",null,!0)),t.push(new lt("contentType",null,!0)),t.push(new lt("metadata","customMetadata",!0)),ll=t,ll}function eO(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new st(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function tO(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return eO(r,t),r}function v1(t,e,n){const r=Hm(e);return r===null?null:tO(t,r,n)}function nO(t,e,n,r){const i=Hm(e);if(i===null||!_h(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(l=>{const c=t.bucket,h=t.fullPath,d="/b/"+o(c)+"/o/"+o(h),p=Vr(d,n,r),m=d1({alt:"media",token:l});return p+m})[0]}function Gm(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}/**
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
 */const sw="prefixes",ow="items";function rO(t,e,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[sw])for(const i of n[sw]){const s=i.replace(/\/$/,""),o=t._makeStorageReference(new st(e,s));r.prefixes.push(o)}if(n[ow])for(const i of n[ow]){const s=t._makeStorageReference(new st(e,i.name));r.items.push(s)}return r}function iO(t,e,n){const r=Hm(n);return r===null?null:rO(t,e,r)}class Zn{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function wn(t){if(!t)throw jm()}function Eh(t,e){function n(r,i){const s=v1(t,i,e);return wn(s!==null),s}return n}function sO(t,e){function n(r,i){const s=iO(t,e,i);return wn(s!==null),s}return n}function oO(t,e){function n(r,i){const s=v1(t,i,e);return wn(s!==null),nO(s,i,t.host,t._protocol)}return n}function ho(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=ED():i=ID():n.getStatus()===402?i=_D(t.bucket):n.getStatus()===403?i=SD(t.path):i=r,i.serverResponse=r.serverResponse,i}return e}function Sh(t){const e=ho(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=wD(t.path)),s.serverResponse=i.serverResponse,s}return n}function w1(t,e,n){const r=e.fullServerUrl(),i=Vr(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Zn(i,s,Eh(t,n),o);return a.errorHandler=Sh(e),a}function aO(t,e,n,r,i){const s={};e.isRoot?s.prefix="":s.prefix=e.path+"/",n&&n.length>0&&(s.delimiter=n),r&&(s.pageToken=r),i&&(s.maxResults=i);const o=e.bucketOnlyServerUrl(),a=Vr(o,t.host,t._protocol),u="GET",l=t.maxOperationRetryTime,c=new Zn(a,u,sO(t,e.bucket),l);return c.urlParams=s,c.errorHandler=ho(e),c}function uO(t,e,n){const r=e.fullServerUrl(),i=Vr(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Zn(i,s,oO(t,n),o);return a.errorHandler=Sh(e),a}function lO(t,e,n,r){const i=e.fullServerUrl(),s=Vr(i,t.host,t._protocol),o="PATCH",a=Gm(n,r),u={"Content-Type":"application/json; charset=utf-8"},l=t.maxOperationRetryTime,c=new Zn(s,o,Eh(t,r),l);return c.headers=u,c.body=a,c.errorHandler=Sh(e),c}function cO(t,e){const n=e.fullServerUrl(),r=Vr(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(u,l){}const a=new Zn(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=Sh(e),a}function hO(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function _1(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=hO(null,e)),r}function dO(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let y="";for(let v=0;v<2;v++)y=y+Math.random().toString().slice(2);return y}const u=a();o["Content-Type"]="multipart/related; boundary="+u;const l=_1(e,r,i),c=Gm(l,n),h="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+u+`\r
Content-Type: `+l.contentType+`\r
\r
`,d=`\r
--`+u+"--",p=xn.getBlob(h,r,d);if(p===null)throw l1();const m={name:l.fullPath},I=Vr(s,t.host,t._protocol),R="POST",g=t.maxUploadRetryTime,f=new Zn(I,R,Eh(t,n),g);return f.urlParams=m,f.headers=o,f.body=p.uploadData(),f.errorHandler=ho(e),f}class Tc{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function Km(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{wn(!1)}return wn(!!n&&(e||["active"]).indexOf(n)!==-1),n}function fO(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=_1(e,r,i),a={name:o.fullPath},u=Vr(s,t.host,t._protocol),l="POST",c={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=Gm(o,n),d=t.maxUploadRetryTime;function p(I){Km(I);let R;try{R=I.getResponseHeader("X-Goog-Upload-URL")}catch{wn(!1)}return wn(_h(R)),R}const m=new Zn(u,l,p,d);return m.urlParams=a,m.headers=c,m.body=h,m.errorHandler=ho(e),m}function pO(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(l){const c=Km(l,["active","final"]);let h=null;try{h=l.getResponseHeader("X-Goog-Upload-Size-Received")}catch{wn(!1)}h||wn(!1);const d=Number(h);return wn(!isNaN(d)),new Tc(d,r.size(),c==="final")}const o="POST",a=t.maxUploadRetryTime,u=new Zn(n,o,s,a);return u.headers=i,u.errorHandler=ho(e),u}const aw=256*1024;function mO(t,e,n,r,i,s,o,a){const u=new Tc(0,0);if(o?(u.current=o.current,u.total=o.total):(u.current=0,u.total=r.size()),r.size()!==u.total)throw AD();const l=u.total-u.current;let c=l;i>0&&(c=Math.min(c,i));const h=u.current,d=h+c,m={"X-Goog-Upload-Command":c===l?"upload, finalize":"upload","X-Goog-Upload-Offset":`${u.current}`},I=r.slice(h,d);if(I===null)throw l1();function R(v,T){const k=Km(v,["active","final"]),E=u.current+c,S=r.size();let F;return k==="final"?F=Eh(e,s)(v,T):F=null,new Tc(E,S,k==="final",F)}const g="POST",f=e.maxUploadRetryTime,y=new Zn(n,g,R,f);return y.headers=m,y.body=I.uploadData(),y.progressCallback=a||null,y.errorHandler=ho(t),y}/**
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
 */const gO={STATE_CHANGED:"state_changed"},dt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function $d(t){switch(t){case"running":case"pausing":case"canceling":return dt.RUNNING;case"paused":return dt.PAUSED;case"success":return dt.SUCCESS;case"canceled":return dt.CANCELED;case"error":return dt.ERROR;default:return dt.ERROR}}/**
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
 */class yO{constructor(e,n,r){if(OD(e)||n!=null||r!=null)this.next=e,this.error=n!=null?n:void 0,this.complete=r!=null?r:void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
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
 */function Xi(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class vO{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=gi.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=gi.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=gi.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Lo("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Lo("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Lo("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Lo("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Lo("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class wO extends vO{initXhr(){this.xhr_.responseType="text"}}function pn(){return new wO}/**
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
 */class I1{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=Ih(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{this._request=void 0,this._chunkMultiplier=1,i._codeEquals("canceled")?(this._needToFetchStatus=!0,this.completeTransitions_()):(this._error=i,this._transition("error"))},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals("canceled")?this.completeTransitions_():(this._error=i,this._transition("error"))},this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this._continueUpload():this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=fO(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,pn,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=pO(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,pn,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=aw*this._chunkMultiplier,n=new Tc(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=mO(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(u){this._error=u,this._transition("error");return}const a=this._ref.storage._makeRequest(o,pn,i,s);this._request=a,a.getPromise().then(u=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(u.current),u.finalized?(this._metadata=u.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){aw*this._chunkMultiplier<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=w1(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,pn,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=dO(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,pn,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":this._state=e,this._request!==void 0&&this._request.cancel();break;case"pausing":this._state=e,this._request!==void 0&&this._request.cancel();break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=u1(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=$d(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new yO(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch($d(this._state)){case dt.SUCCESS:Xi(this._resolve.bind(null,this.snapshot))();break;case dt.CANCELED:case dt.ERROR:const n=this._reject;Xi(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch($d(this._state)){case dt.RUNNING:case dt.PAUSED:e.next&&Xi(e.next.bind(e,this.snapshot))();break;case dt.SUCCESS:e.complete&&Xi(e.complete.bind(e))();break;case dt.CANCELED:case dt.ERROR:e.error&&Xi(e.error.bind(e,this._error))();break;default:e.error&&Xi(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class Si{constructor(e,n){this._service=e,n instanceof st?this._location=n:this._location=st.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Si(e,n)}get root(){const e=new st(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return y1(this._location.path)}get storage(){return this._service}get parent(){const e=YD(this._location.path);if(e===null)return null;const n=new st(this._location.bucket,e);return new Si(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw h1(e)}}function _O(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new I1(t,new xn(e),n)}function IO(t){const e={prefixes:[],items:[]};return E1(t,e).then(()=>e)}async function E1(t,e,n){const i=await S1(t,{pageToken:n});e.prefixes.push(...i.prefixes),e.items.push(...i.items),i.nextPageToken!=null&&await E1(t,e,i.nextPageToken)}function S1(t,e){e!=null&&typeof e.maxResults=="number"&&Xf("options.maxResults",1,1e3,e.maxResults);const n=e||{},r=aO(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(r,pn)}function EO(t){t._throwIfRoot("getMetadata");const e=w1(t.storage,t._location,Ih());return t.storage.makeRequestWithTokens(e,pn)}function SO(t,e){t._throwIfRoot("updateMetadata");const n=lO(t.storage,t._location,e,Ih());return t.storage.makeRequestWithTokens(n,pn)}function TO(t){t._throwIfRoot("getDownloadURL");const e=uO(t.storage,t._location,Ih());return t.storage.makeRequestWithTokens(e,pn).then(n=>{if(n===null)throw ND();return n})}function kO(t){t._throwIfRoot("deleteObject");const e=cO(t.storage,t._location);return t.storage.makeRequestWithTokens(e,pn)}function T1(t,e){const n=JD(t._location.path,e),r=new st(t._location.bucket,n);return new Si(t.storage,r)}/**
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
 */function CO(t){return/^[A-Za-z]+:\/\//.test(t)}function RO(t,e){return new Si(t,e)}function k1(t,e){if(t instanceof Qm){const n=t;if(n._bucket==null)throw RD();const r=new Si(n,n._bucket);return e!=null?k1(r,e):r}else return e!==void 0?T1(t,e):t}function AO(t,e){if(e&&CO(e)){if(t instanceof Qm)return RO(t,e);throw bs("To use ref(service, url), the first argument must be a Storage instance.")}else return k1(t,e)}function uw(t,e){const n=e==null?void 0:e[a1];return n==null?null:st.makeFromBucketSpec(n,t)}function NO(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:GI(i,t.app.options.projectId))}class Qm{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=o1,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=yD,this._maxUploadRetryTime=vD,this._requests=new Set,i!=null?this._bucket=st.makeFromBucketSpec(i,this._host):this._bucket=uw(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=st.makeFromBucketSpec(this._url,e):this._bucket=uw(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Xf("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Xf("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Si(this,e)}_makeRequest(e,n,r,i){if(this._deleted)return new bD(c1());{const s=BD(e,this._appId,r,i,n,this._firebaseVersion);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const lw="@firebase/storage",cw="0.9.4";/**
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
 */const bO="storage";function xO(t,e,n){return t=U(t),_O(t,e,n)}function PO(t){return t=U(t),EO(t)}function DO(t,e){return t=U(t),SO(t,e)}function OO(t,e){return t=U(t),S1(t,e)}function LO(t){return t=U(t),IO(t)}function MO(t){return t=U(t),TO(t)}function $O(t){return t=U(t),kO(t)}function hw(t,e){return t=U(t),AO(t,e)}function UO(t,e){return T1(t,e)}function FO(t,e,n,r={}){NO(t,e,n,r)}function VO(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Qm(n,r,i,e,Ur)}function BO(){jn(new Yt(bO,VO,"PUBLIC").setMultipleInstances(!0)),Kt(lw,cw,""),Kt(lw,cw,"esm2017")}BO();/**
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
 */class cl{constructor(e,n,r){this._delegate=e,this.task=n,this.ref=r}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}/**
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
 */class dw{constructor(e,n){this._delegate=e,this._ref=n,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new cl(this._delegate.snapshot,this,this._ref)}then(e,n){return this._delegate.then(r=>{if(e)return e(new cl(r,this,this._ref))},n)}on(e,n,r,i){let s;return n&&(typeof n=="function"?s=o=>n(new cl(o,this,this._ref)):s={next:n.next?o=>n.next(new cl(o,this,this._ref)):void 0,complete:n.complete||void 0,error:n.error||void 0}),this._delegate.on(e,s,r||void 0,i||void 0)}}class fw{constructor(e,n){this._delegate=e,this._service=n}get prefixes(){return this._delegate.prefixes.map(e=>new Vn(e,this._service))}get items(){return this._delegate.items.map(e=>new Vn(e,this._service))}get nextPageToken(){return this._delegate.nextPageToken||null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e,n){this._delegate=e,this.storage=n}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(e){const n=UO(this._delegate,e);return new Vn(n,this.storage)}get root(){return new Vn(this._delegate.root,this.storage)}get parent(){const e=this._delegate.parent;return e==null?null:new Vn(e,this.storage)}put(e,n){return this._throwIfRoot("put"),new dw(xO(this._delegate,e,n),this)}putString(e,n=qt.RAW,r){this._throwIfRoot("putString");const i=f1(n,e),s=Object.assign({},r);return s.contentType==null&&i.contentType!=null&&(s.contentType=i.contentType),new dw(new I1(this._delegate,new xn(i.data,!0),s),this)}listAll(){return LO(this._delegate).then(e=>new fw(e,this.storage))}list(e){return OO(this._delegate,e||void 0).then(n=>new fw(n,this.storage))}getMetadata(){return PO(this._delegate)}updateMetadata(e){return DO(this._delegate,e)}getDownloadURL(){return MO(this._delegate)}delete(){return this._throwIfRoot("delete"),$O(this._delegate)}_throwIfRoot(e){if(this._delegate._location.path==="")throw h1(e)}}/**
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
 */class C1{constructor(e,n){this.app=e,this._delegate=n}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(e){if(pw(e))throw bs("ref() expected a child path but got a URL, use refFromURL instead.");return new Vn(hw(this._delegate,e),this)}refFromURL(e){if(!pw(e))throw bs("refFromURL() expected a full URL but got a child path, use ref() instead.");try{st.makeFromUrl(e,this._delegate.host)}catch{throw bs("refFromUrl() expected a valid full URL but got an invalid one.")}return new Vn(hw(this._delegate,e),this)}setMaxUploadRetryTime(e){this._delegate.maxUploadRetryTime=e}setMaxOperationRetryTime(e){this._delegate.maxOperationRetryTime=e}useEmulator(e,n,r={}){FO(this._delegate,e,n,r)}}function pw(t){return/^[A-Za-z]+:\/\//.test(t)}const qO="@firebase/storage-compat",zO="0.1.12";/**
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
 */const jO="storage-compat";function WO(t,{instanceIdentifier:e}){const n=t.getProvider("app-compat").getImmediate(),r=t.getProvider("storage").getImmediate({identifier:e});return new C1(n,r)}function HO(t){const e={TaskState:dt,TaskEvent:gO,StringFormat:qt,Storage:C1,Reference:Vn};t.INTERNAL.registerComponent(new Yt(jO,WO,"PUBLIC").setServiceProps(e).setMultipleInstances(!0)),t.registerVersion(qO,zO)}HO(un);var GO=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},L,Ym=Ym||{},j=GO||self;function kc(){}function Zf(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function gu(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function KO(t){return Object.prototype.hasOwnProperty.call(t,Ud)&&t[Ud]||(t[Ud]=++QO)}var Ud="closure_uid_"+(1e9*Math.random()>>>0),QO=0;function YO(t,e,n){return t.call.apply(t.bind,arguments)}function JO(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Ye(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ye=YO:Ye=JO,Ye.apply(null,arguments)}function hl(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function et(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Br(){this.s=this.s,this.o=this.o}var XO=0,ZO={};Br.prototype.s=!1;Br.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),XO!=0)){var t=KO(this);delete ZO[t]}};Br.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const R1=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},A1=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i=typeof t=="string"?t.split(""):t;for(let s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function eL(t){e:{var e=WL;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function mw(t){return Array.prototype.concat.apply([],arguments)}function Jm(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Cc(t){return/^[\s\xa0]*$/.test(t)}var gw=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function pt(t,e){return t.indexOf(e)!=-1}function Fd(t,e){return t<e?-1:t>e?1:0}var mt;e:{var yw=j.navigator;if(yw){var vw=yw.userAgent;if(vw){mt=vw;break e}}mt=""}function Xm(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function N1(t){const e={};for(const n in t)e[n]=t[n];return e}var ww="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b1(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<ww.length;s++)n=ww[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Zm(t){return Zm[" "](t),t}Zm[" "]=kc;function tL(t){var e=iL;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var nL=pt(mt,"Opera"),js=pt(mt,"Trident")||pt(mt,"MSIE"),x1=pt(mt,"Edge"),ep=x1||js,P1=pt(mt,"Gecko")&&!(pt(mt.toLowerCase(),"webkit")&&!pt(mt,"Edge"))&&!(pt(mt,"Trident")||pt(mt,"MSIE"))&&!pt(mt,"Edge"),rL=pt(mt.toLowerCase(),"webkit")&&!pt(mt,"Edge");function D1(){var t=j.document;return t?t.documentMode:void 0}var Rc;e:{var Vd="",Bd=function(){var t=mt;if(P1)return/rv:([^\);]+)(\)|;)/.exec(t);if(x1)return/Edge\/([\d\.]+)/.exec(t);if(js)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(rL)return/WebKit\/(\S+)/.exec(t);if(nL)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Bd&&(Vd=Bd?Bd[1]:""),js){var qd=D1();if(qd!=null&&qd>parseFloat(Vd)){Rc=String(qd);break e}}Rc=Vd}var iL={};function sL(){return tL(function(){let t=0;const e=gw(String(Rc)).split("."),n=gw("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Fd(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Fd(i[2].length==0,s[2].length==0)||Fd(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var tp;if(j.document&&js){var _w=D1();tp=_w||parseInt(Rc,10)||void 0}else tp=void 0;var oL=tp,aL=function(){if(!j.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{j.addEventListener("test",kc,e),j.removeEventListener("test",kc,e)}catch{}return t}();function ot(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ot.prototype.h=function(){this.defaultPrevented=!0};function Fa(t,e){if(ot.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(P1){e:{try{Zm(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:uL[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Fa.Z.h.call(this)}}et(Fa,ot);var uL={2:"touch",3:"pen",4:"mouse"};Fa.prototype.h=function(){Fa.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var yu="closure_listenable_"+(1e6*Math.random()|0),lL=0;function cL(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++lL,this.ca=this.fa=!1}function Th(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function kh(t){this.src=t,this.g={},this.h=0}kh.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=rp(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new cL(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};function np(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=R1(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Th(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function rp(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}var eg="closure_lm_"+(1e6*Math.random()|0),zd={};function O1(t,e,n,r,i){if(r&&r.once)return M1(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)O1(t,e[s],n,r,i);return null}return n=rg(n),t&&t[yu]?t.N(e,n,gu(r)?!!r.capture:!!r,i):L1(t,e,n,!1,r,i)}function L1(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=gu(i)?!!i.capture:!!i,a=ng(t);if(a||(t[eg]=a=new kh(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=hL(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)aL||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(U1(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function hL(){function t(n){return e.call(t.src,t.listener,n)}var e=dL;return t}function M1(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)M1(t,e[s],n,r,i);return null}return n=rg(n),t&&t[yu]?t.O(e,n,gu(r)?!!r.capture:!!r,i):L1(t,e,n,!0,r,i)}function $1(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)$1(t,e[s],n,r,i);else r=gu(r)?!!r.capture:!!r,n=rg(n),t&&t[yu]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=rp(s,n,r,i),-1<n&&(Th(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=ng(t))&&(e=t.g[e.toString()],t=-1,e&&(t=rp(e,n,r,i)),(n=-1<t?e[t]:null)&&tg(n))}function tg(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[yu])np(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(U1(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=ng(e))?(np(n,t),n.h==0&&(n.src=null,e[eg]=null)):Th(t)}}}function U1(t){return t in zd?zd[t]:zd[t]="on"+t}function dL(t,e){if(t.ca)t=!0;else{e=new Fa(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&tg(t),t=n.call(r,e)}return t}function ng(t){return t=t[eg],t instanceof kh?t:null}var jd="__closure_events_fn_"+(1e9*Math.random()>>>0);function rg(t){return typeof t=="function"?t:(t[jd]||(t[jd]=function(e){return t.handleEvent(e)}),t[jd])}function Be(){Br.call(this),this.i=new kh(this),this.P=this,this.I=null}et(Be,Br);Be.prototype[yu]=!0;Be.prototype.removeEventListener=function(t,e,n,r){$1(this,t,e,n,r)};function Je(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new ot(e,t);else if(e instanceof ot)e.target=e.target||t;else{var i=e;e=new ot(r,t),b1(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=dl(o,r,!0,e)&&i}if(o=e.g=t,i=dl(o,r,!0,e)&&i,i=dl(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=dl(o,r,!1,e)&&i}Be.prototype.M=function(){if(Be.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Th(n[r]);delete t.g[e],t.h--}}this.I=null};Be.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Be.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function dl(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,u=o.ia||o.src;o.fa&&np(t.i,o),i=a.call(u,r)!==!1&&i}}return i&&!r.defaultPrevented}var ig=j.JSON.stringify;function fL(){var t=V1;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class pL{constructor(){this.h=this.g=null}add(e,n){const r=F1.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var F1=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new mL,t=>t.reset());class mL{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function gL(t){j.setTimeout(()=>{throw t},0)}function sg(t,e){ip||yL(),sp||(ip(),sp=!0),V1.add(t,e)}var ip;function yL(){var t=j.Promise.resolve(void 0);ip=function(){t.then(vL)}}var sp=!1,V1=new pL;function vL(){for(var t;t=fL();){try{t.h.call(t.g)}catch(n){gL(n)}var e=F1;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}sp=!1}function Ch(t,e){Be.call(this),this.h=t||1,this.g=e||j,this.j=Ye(this.kb,this),this.l=Date.now()}et(Ch,Be);L=Ch.prototype;L.da=!1;L.S=null;L.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Je(this,"tick"),this.da&&(og(this),this.start()))}};L.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function og(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}L.M=function(){Ch.Z.M.call(this),og(this),delete this.g};function ag(t,e,n){if(typeof t=="function")n&&(t=Ye(t,n));else if(t&&typeof t.handleEvent=="function")t=Ye(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:j.setTimeout(t,e||0)}function B1(t){t.g=ag(()=>{t.g=null,t.i&&(t.i=!1,B1(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class wL extends Br{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:B1(this)}M(){super.M(),this.g&&(j.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Va(t){Br.call(this),this.h=t,this.g={}}et(Va,Br);var Iw=[];function q1(t,e,n,r){Array.isArray(n)||(n&&(Iw[0]=n.toString()),n=Iw);for(var i=0;i<n.length;i++){var s=O1(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function z1(t){Xm(t.g,function(e,n){this.g.hasOwnProperty(n)&&tg(e)},t),t.g={}}Va.prototype.M=function(){Va.Z.M.call(this),z1(this)};Va.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Rh(){this.g=!0}Rh.prototype.Aa=function(){this.g=!1};function _L(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var l=a[u].split("=");if(1<l.length){var c=l[0];l=l[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+l+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function IL(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function vs(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+SL(t,n)+(r?" "+r:"")})}function EL(t,e){t.info(function(){return"TIMEOUT: "+e})}Rh.prototype.info=function(){};function SL(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return ig(n)}catch{return e}}var Fi={},Ew=null;function Ah(){return Ew=Ew||new Be}Fi.Ma="serverreachability";function j1(t){ot.call(this,Fi.Ma,t)}et(j1,ot);function Ba(t){const e=Ah();Je(e,new j1(e,t))}Fi.STAT_EVENT="statevent";function W1(t,e){ot.call(this,Fi.STAT_EVENT,t),this.stat=e}et(W1,ot);function gt(t){const e=Ah();Je(e,new W1(e,t))}Fi.Na="timingevent";function H1(t,e){ot.call(this,Fi.Na,t),this.size=e}et(H1,ot);function vu(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return j.setTimeout(function(){t()},e)}var Nh={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},G1={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ug(){}ug.prototype.h=null;function Sw(t){return t.h||(t.h=t.i())}function K1(){}var wu={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function lg(){ot.call(this,"d")}et(lg,ot);function cg(){ot.call(this,"c")}et(cg,ot);var op;function bh(){}et(bh,ug);bh.prototype.g=function(){return new XMLHttpRequest};bh.prototype.i=function(){return{}};op=new bh;function _u(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new Va(this),this.P=TL,t=ep?125:void 0,this.W=new Ch(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Q1}function Q1(){this.i=null,this.g="",this.h=!1}var TL=45e3,ap={},Ac={};L=_u.prototype;L.setTimeout=function(t){this.P=t};function up(t,e,n){t.K=1,t.v=Ph(Hn(e)),t.s=n,t.U=!0,Y1(t,null)}function Y1(t,e){t.F=Date.now(),Iu(t),t.A=Hn(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),rS(n.h,"t",r),t.C=0,n=t.l.H,t.h=new Q1,t.g=SS(t.l,n?e:null,!t.s),0<t.O&&(t.L=new wL(Ye(t.Ia,t,t.g),t.O)),q1(t.V,t.g,"readystatechange",t.gb),e=t.H?N1(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Ba(1),_L(t.j,t.u,t.A,t.m,t.X,t.s)}L.gb=function(t){t=t.target;const e=this.L;e&&$n(t)==3?e.l():this.Ia(t)};L.Ia=function(t){try{if(t==this.g)e:{const c=$n(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>c)&&(c!=3||ep||this.g&&(this.h.h||this.g.ga()||Rw(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?Ba(3):Ba(2)),xh(this);var n=this.g.ba();this.N=n;t:if(J1(this)){var r=Rw(this.g);t="";var i=r.length,s=$n(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){si(this),oa(this);var o="";break t}this.h.i=new j.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,IL(this.j,this.u,this.A,this.m,this.X,c,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Cc(a)){var l=a;break t}}l=null}if(n=l)vs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,lp(this,n);else{this.i=!1,this.o=3,gt(12),si(this),oa(this);break e}}this.U?(X1(this,c,o),ep&&this.i&&c==3&&(q1(this.V,this.W,"tick",this.fb),this.W.start())):(vs(this.j,this.m,o,null),lp(this,o)),c==4&&si(this),this.i&&!this.I&&(c==4?wS(this.l,this):(this.i=!1,Iu(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,gt(12)):(this.o=0,gt(13)),si(this),oa(this)}}}catch{}finally{}};function J1(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function X1(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=kL(t,n),i==Ac){e==4&&(t.o=4,gt(14),r=!1),vs(t.j,t.m,null,"[Incomplete Response]");break}else if(i==ap){t.o=4,gt(15),vs(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else vs(t.j,t.m,i,null),lp(t,i);J1(t)&&i!=Ac&&i!=ap&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,gt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),wg(e),e.L=!0,gt(11))):(vs(t.j,t.m,n,"[Invalid Chunked Response]"),si(t),oa(t))}L.fb=function(){if(this.g){var t=$n(this.g),e=this.g.ga();this.C<e.length&&(xh(this),X1(this,t,e),this.i&&t!=4&&Iu(this))}};function kL(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Ac:(n=Number(e.substring(n,r)),isNaN(n)?ap:(r+=1,r+n>e.length?Ac:(e=e.substr(r,n),t.C=r+n,e)))}L.cancel=function(){this.I=!0,si(this)};function Iu(t){t.Y=Date.now()+t.P,Z1(t,t.P)}function Z1(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=vu(Ye(t.eb,t),e)}function xh(t){t.B&&(j.clearTimeout(t.B),t.B=null)}L.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(EL(this.j,this.A),this.K!=2&&(Ba(3),gt(17)),si(this),this.o=2,oa(this)):Z1(this,this.Y-t)};function oa(t){t.l.G==0||t.I||wS(t.l,t)}function si(t){xh(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,og(t.W),z1(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function lp(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||cp(n.i,t))){if(n.I=t.N,!t.J&&cp(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Pc(n),Lh(n);else break e;vg(n),gt(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=vu(Ye(n.ab,n),6e3));if(1>=oS(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else oi(n,11)}else if((t.J||n.g==t)&&Pc(n),!Cc(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.U=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.J=l[1],n.la=l[2];const c=l[3];c!=null&&(n.ma=c,n.h.info("VER="+n.ma));const h=l[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const m=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var s=r.i;!s.g&&(pt(m,"spdy")||pt(m,"quic")||pt(m,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(fg(s,s.h),s.h=null))}if(r.D){const I=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;I&&(r.sa=I,he(r.F,r.D,I))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=ES(r,r.H?r.la:null,r.W),o.J){aS(r.i,o);var a=o,u=r.K;u&&a.setTimeout(u),a.B&&(xh(a),Iu(a)),r.g=o}else yS(r);0<n.l.length&&Mh(n)}else l[0]!="stop"&&l[0]!="close"||oi(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?oi(n,7):yg(n):l[0]!="noop"&&n.j&&n.j.wa(l),n.A=0)}}Ba(4)}catch{}}function CL(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(Zf(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function hg(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Zf(t)||typeof t=="string")A1(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(Zf(t)||typeof t=="string"){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=CL(t),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function fo(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof fo)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}L=fo.prototype;L.R=function(){dg(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};L.T=function(){return dg(this),this.g.concat()};function dg(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];Ti(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],Ti(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}L.get=function(t,e){return Ti(this.h,t)?this.h[t]:e};L.set=function(t,e){Ti(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};L.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};function Ti(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var eS=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function RL(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ki(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof ki){this.g=e!==void 0?e:t.g,Nc(this,t.j),this.s=t.s,bc(this,t.i),xc(this,t.m),this.l=t.l,e=t.h;var n=new qa;n.i=e.i,e.g&&(n.g=new fo(e.g),n.h=e.h),Tw(this,n),this.o=t.o}else t&&(n=String(t).match(eS))?(this.g=!!e,Nc(this,n[1]||"",!0),this.s=aa(n[2]||""),bc(this,n[3]||"",!0),xc(this,n[4]),this.l=aa(n[5]||"",!0),Tw(this,n[6]||"",!0),this.o=aa(n[7]||"")):(this.g=!!e,this.h=new qa(null,this.g))}ki.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ko(e,kw,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ko(e,kw,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(Ko(n,n.charAt(0)=="/"?PL:xL,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ko(n,OL)),t.join("")};function Hn(t){return new ki(t)}function Nc(t,e,n){t.j=n?aa(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function bc(t,e,n){t.i=n?aa(e,!0):e}function xc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Tw(t,e,n){e instanceof qa?(t.h=e,LL(t.h,t.g)):(n||(e=Ko(e,DL)),t.h=new qa(e,t.g))}function he(t,e,n){t.h.set(e,n)}function Ph(t){return he(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function AL(t){return t instanceof ki?Hn(t):new ki(t,void 0)}function NL(t,e,n,r){var i=new ki(null,void 0);return t&&Nc(i,t),e&&bc(i,e),n&&xc(i,n),r&&(i.l=r),i}function aa(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ko(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,bL),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function bL(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var kw=/[#\/\?@]/g,xL=/[#\?:]/g,PL=/[#\?]/g,DL=/[#\?@]/g,OL=/#/g;function qa(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function qr(t){t.g||(t.g=new fo,t.h=0,t.i&&RL(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}L=qa.prototype;L.add=function(t,e){qr(this),this.i=null,t=po(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function tS(t,e){qr(t),e=po(t,e),Ti(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Ti(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&dg(t)))}function nS(t,e){return qr(t),e=po(t,e),Ti(t.g.h,e)}L.forEach=function(t,e){qr(this),this.g.forEach(function(n,r){A1(n,function(i){t.call(e,i,r,this)},this)},this)};L.T=function(){qr(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n};L.R=function(t){qr(this);var e=[];if(typeof t=="string")nS(this,t)&&(e=mw(e,this.g.get(po(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=mw(e,t[n])}return e};L.set=function(t,e){return qr(this),this.i=null,t=po(this,t),nS(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};L.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function rS(t,e,n){tS(t,e),0<n.length&&(t.i=null,t.g.set(po(t,e),Jm(n)),t.h+=n.length)}L.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;r[s]!==""&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};function po(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function LL(t,e){e&&!t.j&&(qr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(tS(this,r),rS(this,i,n))},t)),t.j=e}var ML=class{constructor(t,e){this.h=t,this.g=e}};function iS(t){this.l=t||$L,j.PerformanceNavigationTiming?(t=j.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(j.g&&j.g.Ea&&j.g.Ea()&&j.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var $L=10;function sS(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function oS(t){return t.h?1:t.g?t.g.size:0}function cp(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function fg(t,e){t.g?t.g.add(e):t.h=e}function aS(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}iS.prototype.cancel=function(){if(this.i=uS(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function uS(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Jm(t.i)}function pg(){}pg.prototype.stringify=function(t){return j.JSON.stringify(t,void 0)};pg.prototype.parse=function(t){return j.JSON.parse(t,void 0)};function UL(){this.g=new pg}function FL(t,e,n){const r=n||"";try{hg(t,function(i,s){let o=i;gu(i)&&(o=ig(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function VL(t,e){const n=new Rh;if(j.Image){const r=new Image;r.onload=hl(fl,n,r,"TestLoadImage: loaded",!0,e),r.onerror=hl(fl,n,r,"TestLoadImage: error",!1,e),r.onabort=hl(fl,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=hl(fl,n,r,"TestLoadImage: timeout",!1,e),j.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function fl(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Eu(t){this.l=t.$b||null,this.j=t.ib||!1}et(Eu,ug);Eu.prototype.g=function(){return new Dh(this.l,this.j)};Eu.prototype.i=function(t){return function(){return t}}({});function Dh(t,e){Be.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=mg,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}et(Dh,Be);var mg=0;L=Dh.prototype;L.open=function(t,e){if(this.readyState!=mg)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,za(this)};L.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||j).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};L.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Su(this)),this.readyState=mg};L.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,za(this)),this.g&&(this.readyState=3,za(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof j.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;lS(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function lS(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}L.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Su(this):za(this),this.readyState==3&&lS(this)}};L.Ua=function(t){this.g&&(this.response=this.responseText=t,Su(this))};L.Ta=function(t){this.g&&(this.response=t,Su(this))};L.ha=function(){this.g&&Su(this)};function Su(t){t.readyState=4,t.l=null,t.j=null,t.A=null,za(t)}L.setRequestHeader=function(t,e){this.v.append(t,e)};L.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};L.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function za(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Dh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var BL=j.JSON.parse;function Re(t){Be.call(this),this.headers=new fo,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=cS,this.K=this.L=!1}et(Re,Be);var cS="",qL=/^https?$/i,zL=["POST","PUT"];L=Re.prototype;L.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():op.g(),this.C=this.u?Sw(this.u):Sw(op),this.g.onreadystatechange=Ye(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){Cw(this,s);return}t=n||"";const i=new fo(this.headers);r&&hg(r,function(s,o){i.set(o,s)}),r=eL(i.T()),n=j.FormData&&t instanceof j.FormData,!(0<=R1(zL,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(s,o){this.g.setRequestHeader(o,s)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{fS(this),0<this.B&&((this.K=jL(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ye(this.pa,this)):this.A=ag(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Cw(this,s)}};function jL(t){return js&&sL()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function WL(t){return t.toLowerCase()=="content-type"}L.pa=function(){typeof Ym!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Je(this,"timeout"),this.abort(8))};function Cw(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,hS(t),Oh(t)}function hS(t){t.D||(t.D=!0,Je(t,"complete"),Je(t,"error"))}L.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Je(this,"complete"),Je(this,"abort"),Oh(this))};L.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Oh(this,!0)),Re.Z.M.call(this)};L.Fa=function(){this.s||(this.F||this.v||this.l?dS(this):this.cb())};L.cb=function(){dS(this)};function dS(t){if(t.h&&typeof Ym!="undefined"&&(!t.C[1]||$n(t)!=4||t.ba()!=2)){if(t.v&&$n(t)==4)ag(t.Fa,0,t);else if(Je(t,"readystatechange"),$n(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(eS)[1]||null;if(!i&&j.self&&j.self.location){var s=j.self.location.protocol;i=s.substr(0,s.length-1)}r=!qL.test(i?i.toLowerCase():"")}n=r}if(n)Je(t,"complete"),Je(t,"success");else{t.m=6;try{var o=2<$n(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",hS(t)}}finally{Oh(t)}}}}function Oh(t,e){if(t.g){fS(t);const n=t.g,r=t.C[0]?kc:null;t.g=null,t.C=null,e||Je(t,"ready");try{n.onreadystatechange=r}catch{}}}function fS(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(j.clearTimeout(t.A),t.A=null)}function $n(t){return t.g?t.g.readyState:0}L.ba=function(){try{return 2<$n(this)?this.g.status:-1}catch{return-1}};L.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};L.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),BL(e)}};function Rw(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case cS:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}L.Da=function(){return this.m};L.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function HL(t){let e="";return Xm(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function gg(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=HL(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):he(t,e,n))}function Mo(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function pS(t){this.za=0,this.l=[],this.h=new Rh,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Mo("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Mo("baseRetryDelayMs",5e3,t),this.$a=Mo("retryDelaySeedMs",1e4,t),this.Ya=Mo("forwardChannelMaxRetries",2,t),this.ra=Mo("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new iS(t&&t.concurrentRequestLimit),this.Ca=new UL,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}L=pS.prototype;L.ma=8;L.G=1;function yg(t){if(mS(t),t.G==3){var e=t.V++,n=Hn(t.F);he(n,"SID",t.J),he(n,"RID",e),he(n,"TYPE","terminate"),Tu(t,n),e=new _u(t,t.h,e,void 0),e.K=2,e.v=Ph(Hn(n)),n=!1,j.navigator&&j.navigator.sendBeacon&&(n=j.navigator.sendBeacon(e.v.toString(),"")),!n&&j.Image&&(new Image().src=e.v,n=!0),n||(e.g=SS(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Iu(e)}IS(t)}L.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function Lh(t){t.g&&(wg(t),t.g.cancel(),t.g=null)}function mS(t){Lh(t),t.u&&(j.clearTimeout(t.u),t.u=null),Pc(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&j.clearTimeout(t.m),t.m=null)}function Wd(t,e){t.l.push(new ML(t.Za++,e)),t.G==3&&Mh(t)}function Mh(t){sS(t.i)||t.m||(t.m=!0,sg(t.Ha,t),t.C=0)}function GL(t,e){return oS(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=vu(Ye(t.Ha,t,e),_S(t,t.C)),t.C++,!0)}L.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new _u(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=N1(s),b1(s,this.P)):s=this.P),this.o===null&&(i.H=s),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=gS(this,i,e),n=Hn(this.F),he(n,"RID",t),he(n,"CVER",22),this.D&&he(n,"X-HTTP-Session-Id",this.D),Tu(this,n),this.o&&s&&gg(n,this.o,s),fg(this.i,i),this.Ra&&he(n,"TYPE","init"),this.ja?(he(n,"$req",e),he(n,"SID","null"),i.$=!0,up(i,n,null)):up(i,n,e),this.G=2}}else this.G==3&&(t?Aw(this,t):this.l.length==0||sS(this.i)||Aw(this))};function Aw(t,e){var n;e?n=e.m:n=t.V++;const r=Hn(t.F);he(r,"SID",t.J),he(r,"RID",n),he(r,"AID",t.U),Tu(t,r),t.o&&t.s&&gg(r,t.o,t.s),n=new _u(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=gS(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),fg(t.i,n),up(n,r,e)}function Tu(t,e){t.j&&hg({},function(n,r){he(e,r,n)})}function gS(t,e,n){n=Math.min(t.l.length,n);var r=t.j?Ye(t.j.Oa,t.j,t):null;e:{var i=t.l;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let u=0;u<n;u++){let l=i[u].h;const c=i[u].g;if(l-=s,0>l)s=Math.max(0,i[u].h-100),a=!1;else try{FL(c,o,"req"+l+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function yS(t){t.g||t.u||(t.Y=1,sg(t.Ga,t),t.A=0)}function vg(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=vu(Ye(t.Ga,t),_S(t,t.A)),t.A++,!0)}L.Ga=function(){if(this.u=null,vS(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=vu(Ye(this.bb,this),t)}};L.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,gt(10),Lh(this),vS(this))};function wg(t){t.B!=null&&(j.clearTimeout(t.B),t.B=null)}function vS(t){t.g=new _u(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=Hn(t.oa);he(e,"RID","rpc"),he(e,"SID",t.J),he(e,"CI",t.N?"0":"1"),he(e,"AID",t.U),Tu(t,e),he(e,"TYPE","xmlhttp"),t.o&&t.s&&gg(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Ph(Hn(e)),n.s=null,n.U=!0,Y1(n,t)}L.ab=function(){this.v!=null&&(this.v=null,Lh(this),vg(this),gt(19))};function Pc(t){t.v!=null&&(j.clearTimeout(t.v),t.v=null)}function wS(t,e){var n=null;if(t.g==e){Pc(t),wg(t),t.g=null;var r=2}else if(cp(t.i,e))n=e.D,aS(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=Ah(),Je(r,new H1(r,n,e,i)),Mh(t)}else yS(t);else if(i=e.o,i==3||i==0&&0<t.I||!(r==1&&GL(t,e)||r==2&&vg(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:oi(t,5);break;case 4:oi(t,10);break;case 3:oi(t,6);break;default:oi(t,2)}}}function _S(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function oi(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=Ye(t.jb,t);n||(n=new ki("//www.google.com/images/cleardot.gif"),j.location&&j.location.protocol=="http"||Nc(n,"https"),Ph(n)),VL(n.toString(),r)}else gt(2);t.G=0,t.j&&t.j.va(e),IS(t),mS(t)}L.jb=function(t){t?(this.h.info("Successfully pinged google.com"),gt(2)):(this.h.info("Failed to ping google.com"),gt(1))};function IS(t){t.G=0,t.I=-1,t.j&&((uS(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Jm(t.l),t.l.length=0),t.j.ua())}function ES(t,e,n){let r=AL(n);if(r.i!="")e&&bc(r,e+"."+r.i),xc(r,r.m);else{const i=j.location;r=NL(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&Xm(t.aa,function(i,s){he(r,s,i)}),e=t.D,n=t.sa,e&&n&&he(r,e,n),he(r,"VER",t.ma),Tu(t,r),r}function SS(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Re(new Eu({ib:!0})):new Re(t.qa),e.L=t.H,e}function TS(){}L=TS.prototype;L.xa=function(){};L.wa=function(){};L.va=function(){};L.ua=function(){};L.Oa=function(){};function Dc(){if(js&&!(10<=Number(oL)))throw Error("Environmental error: no available transport.")}Dc.prototype.g=function(t,e){return new Mt(t,e)};function Mt(t,e){Be.call(this),this.g=new pS(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Cc(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Cc(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new mo(this)}et(Mt,Be);Mt.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),sg(Ye(t.hb,t,e))),gt(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=ES(t,null,t.W),Mh(t)};Mt.prototype.close=function(){yg(this.g)};Mt.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,Wd(this.g,e)}else this.v?(e={},e.__data__=ig(t),Wd(this.g,e)):Wd(this.g,t)};Mt.prototype.M=function(){this.g.j=null,delete this.j,yg(this.g),delete this.g,Mt.Z.M.call(this)};function kS(t){lg.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}et(kS,lg);function CS(){cg.call(this),this.status=1}et(CS,cg);function mo(t){this.g=t}et(mo,TS);mo.prototype.xa=function(){Je(this.g,"a")};mo.prototype.wa=function(t){Je(this.g,new kS(t))};mo.prototype.va=function(t){Je(this.g,new CS(t))};mo.prototype.ua=function(){Je(this.g,"b")};Dc.prototype.createWebChannel=Dc.prototype.g;Mt.prototype.send=Mt.prototype.u;Mt.prototype.open=Mt.prototype.m;Mt.prototype.close=Mt.prototype.close;Nh.NO_ERROR=0;Nh.TIMEOUT=8;Nh.HTTP_ERROR=6;G1.COMPLETE="complete";K1.EventType=wu;wu.OPEN="a";wu.CLOSE="b";wu.ERROR="c";wu.MESSAGE="d";Be.prototype.listen=Be.prototype.N;Re.prototype.listenOnce=Re.prototype.O;Re.prototype.getLastError=Re.prototype.La;Re.prototype.getLastErrorCode=Re.prototype.Da;Re.prototype.getStatus=Re.prototype.ba;Re.prototype.getResponseJson=Re.prototype.Qa;Re.prototype.getResponseText=Re.prototype.ga;Re.prototype.send=Re.prototype.ea;var KL=function(){return new Dc},QL=function(){return Ah()},Hd=Nh,YL=G1,JL=Fi,Nw={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},XL=Eu,pl=K1,ZL=Re;const bw="@firebase/firestore";/**
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
 */class We{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}We.UNAUTHENTICATED=new We(null),We.GOOGLE_CREDENTIALS=new We("google-credentials-uid"),We.FIRST_PARTY=new We("first-party-uid"),We.MOCK_USER=new We("mock-user");/**
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
 */let go="9.6.10";/**
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
 */const Ar=new uh("@firebase/firestore");function hp(){return Ar.logLevel}function eM(t){Ar.setLogLevel(t)}function N(t,...e){if(Ar.logLevel<=Z.DEBUG){const n=e.map(_g);Ar.debug(`Firestore (${go}): ${t}`,...n)}}function Te(t,...e){if(Ar.logLevel<=Z.ERROR){const n=e.map(_g);Ar.error(`Firestore (${go}): ${t}`,...n)}}function ja(t,...e){if(Ar.logLevel<=Z.WARN){const n=e.map(_g);Ar.warn(`Firestore (${go}): ${t}`,...n)}}function _g(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function $(t="Unexpected state"){const e=`FIRESTORE (${go}) INTERNAL ASSERTION FAILED: `+t;throw Te(e),new Error(e)}function z(t,e){t||$()}function tM(t,e){t||$()}function P(t,e){return t}/**
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
 */const w={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class C extends At{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ue{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class RS{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class nM{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(We.UNAUTHENTICATED))}shutdown(){}}class rM{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class iM{constructor(e){this.t=e,this.currentUser=We.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Ue;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ue,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ue)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(z(typeof r.accessToken=="string"),new RS(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return z(e===null||typeof e=="string"),new We(e)}}class sM{constructor(e,n,r){this.type="FirstParty",this.user=We.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const i=e.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class oM{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new sM(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(We.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class aM{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class uM{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const r=s=>{s.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.p;return this.p=s.token,N("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.g.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.g.getImmediate({optional:!0});s?i(s):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(z(typeof n.token=="string"),this.p=n.token,new aM(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Dt{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.I(r),this.T=r=>n.writeSequenceNumber(r))}I(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}/**
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
 */function lM(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */Dt.A=-1;class AS{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=lM(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function K(t,e){return t<e?-1:t>e?1:0}function Ws(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function NS(t){return t+"\0"}/**
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
 */class _e{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new C(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new C(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new C(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new C(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return _e.fromMillis(Date.now())}static fromDate(e){return _e.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new _e(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?K(this.nanoseconds,e.nanoseconds):K(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class B{constructor(e){this.timestamp=e}static fromTimestamp(e){return new B(e)}static min(){return new B(new _e(0,0))}static max(){return new B(new _e(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */function xw(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Vi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function bS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Wa{constructor(e,n,r){n===void 0?n=0:n>e.length&&$(),r===void 0?r=e.length-n:r>e.length-n&&$(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Wa.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Wa?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class J extends Wa{construct(e,n,r){return new J(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new C(w.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new J(n)}static emptyPath(){return new J([])}}const cM=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Me extends Wa{construct(e,n,r){return new Me(e,n,r)}static isValidIdentifier(e){return cM.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Me.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Me(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new C(w.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new C(w.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new C(w.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new C(w.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Me(n)}static emptyPath(){return new Me([])}}/**
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
 */class Hs{constructor(e){this.fields=e,e.sort(Me.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ws(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */function hM(){return typeof atob!="undefined"}/**
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
 */class xe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new xe(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new xe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return K(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}xe.EMPTY_BYTE_STRING=new xe("");const dM=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Nr(t){if(z(!!t),typeof t=="string"){let e=0;const n=dM.exec(t);if(z(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:pe(t.seconds),nanos:pe(t.nanos)}}function pe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ci(t){return typeof t=="string"?xe.fromBase64String(t):xe.fromUint8Array(t)}/**
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
 */function Ig(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function xS(t){const e=t.mapValue.fields.__previous_value__;return Ig(e)?xS(e):e}function Ha(t){const e=Nr(t.mapValue.fields.__local_write_time__.timestampValue);return new _e(e.seconds,e.nanos)}/**
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
 */class fM{constructor(e,n,r,i,s,o,a,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=u}}class Gn{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Gn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Gn&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function Bi(t){return t==null}function Ga(t){return t===0&&1/t==-1/0}function PS(t){return typeof t=="number"&&Number.isInteger(t)&&!Ga(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class x{constructor(e){this.path=e}static fromPath(e){return new x(J.fromString(e))}static fromName(e){return new x(J.fromString(e).popFirst(5))}static empty(){return new x(J.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&J.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return J.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new x(new J(e.slice()))}}/**
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
 */const Pw={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Dw={nullValue:"NULL_VALUE"};function Ri(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ig(t)?4:DS(t)?9:10:$()}function Tn(t,e){if(t===e)return!0;const n=Ri(t);if(n!==Ri(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ha(t).isEqual(Ha(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Nr(r.timestampValue),o=Nr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Ci(r.bytesValue).isEqual(Ci(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return pe(r.geoPointValue.latitude)===pe(i.geoPointValue.latitude)&&pe(r.geoPointValue.longitude)===pe(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return pe(r.integerValue)===pe(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=pe(r.doubleValue),o=pe(i.doubleValue);return s===o?Ga(s)===Ga(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return Ws(t.arrayValue.values||[],e.arrayValue.values||[],Tn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(xw(s)!==xw(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Tn(s[a],o[a])))return!1;return!0}(t,e);default:return $()}}function Ka(t,e){return(t.values||[]).find(n=>Tn(n,e))!==void 0}function br(t,e){if(t===e)return 0;const n=Ri(t),r=Ri(e);if(n!==r)return K(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return K(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=pe(i.integerValue||i.doubleValue),a=pe(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Ow(t.timestampValue,e.timestampValue);case 4:return Ow(Ha(t),Ha(e));case 5:return K(t.stringValue,e.stringValue);case 6:return function(i,s){const o=Ci(i),a=Ci(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let u=0;u<o.length&&u<a.length;u++){const l=K(o[u],a[u]);if(l!==0)return l}return K(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=K(pe(i.latitude),pe(s.latitude));return o!==0?o:K(pe(i.longitude),pe(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let u=0;u<o.length&&u<a.length;++u){const l=br(o[u],a[u]);if(l)return l}return K(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){const o=i.fields||{},a=Object.keys(o),u=s.fields||{},l=Object.keys(u);a.sort(),l.sort();for(let c=0;c<a.length&&c<l.length;++c){const h=K(a[c],l[c]);if(h!==0)return h;const d=br(o[a[c]],u[l[c]]);if(d!==0)return d}return K(a.length,l.length)}(t.mapValue,e.mapValue);default:throw $()}}function Ow(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return K(t,e);const n=Nr(t),r=Nr(e),i=K(n.seconds,r.seconds);return i!==0?i:K(n.nanos,r.nanos)}function xs(t){return dp(t)}function dp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=Nr(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ci(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,x.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=dp(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${dp(r.fields[a])}`;return s+"}"}(t.mapValue):$();var e,n}function Gs(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function fp(t){return!!t&&"integerValue"in t}function Qa(t){return!!t&&"arrayValue"in t}function Lw(t){return!!t&&"nullValue"in t}function Mw(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Fl(t){return!!t&&"mapValue"in t}function ua(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Vi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ua(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ua(t.arrayValue.values[n]);return e}return Object.assign({},t)}function DS(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function $w(t,e){return t===void 0?e:e===void 0||br(t,e)>0?t:e}function Uw(t,e){return t===void 0?e:e===void 0||br(t,e)<0?t:e}/**
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
 */class it{constructor(e){this.value=e}static empty(){return new it({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Fl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ua(n)}setAll(e){let n=Me.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=ua(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Fl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Tn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Fl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Vi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new it(ua(this.value))}}function OS(t){const e=[];return Vi(t.fields,(n,r)=>{const i=new Me([n]);if(Fl(r)){const s=OS(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Hs(e)}/**
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
 */class se{constructor(e,n,r,i,s,o){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new se(e,0,B.min(),B.min(),it.empty(),0)}static newFoundDocument(e,n,r){return new se(e,1,n,B.min(),r,0)}static newNoDocument(e,n){return new se(e,2,n,B.min(),it.empty(),0)}static newUnknownDocument(e,n){return new se(e,3,n,B.min(),it.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=it.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=it.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof se&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new se(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}class LS{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function pp(t){return t.fields.find(e=>e.kind===2)}function ns(t){return t.fields.filter(e=>e.kind!==2)}LS.UNKNOWN_ID=-1;class pM{constructor(e,n){this.fieldPath=e,this.kind=n}}class Oc{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new Oc(0,Kn.min())}}function MS(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=B.fromTimestamp(r===1e9?new _e(n+1,0):new _e(n,r));return new Kn(i,x.empty(),e)}function mM(t){return new Kn(t.readTime,t.key,-1)}class Kn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Kn(B.min(),x.empty(),-1)}static max(){return new Kn(B.max(),x.empty(),-1)}}function gM(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=x.comparator(t.documentKey,e.documentKey),n!==0?n:K(t.largestBatchId,e.largestBatchId))}/**
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
 */class yM{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.P=null}}function Fw(t,e=null,n=[],r=[],i=null,s=null,o=null){return new yM(t,e,n,r,i,s,o)}function Ai(t){const e=P(t);if(e.P===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(i=r).field.canonicalString()+i.op.toString()+xs(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Bi(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>xs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>xs(r)).join(",")),e.P=n}return e.P}function vM(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${xs(r.value)}`;var r}).join(", ")}]`),Bi(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>xs(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>xs(n)).join(",")),`Target(${e})`}function ku(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!CM(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!Tn(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Bw(t.startAt,e.startAt)&&Bw(t.endAt,e.endAt)}function Lc(t){return x.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function ml(t,e){return t.filters.filter(n=>n instanceof Ge&&n.field.isEqual(e))}class Ge extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.V(e,n,r):new wM(e,n,r):n==="array-contains"?new EM(e,r):n==="in"?new SM(e,r):n==="not-in"?new TM(e,r):n==="array-contains-any"?new kM(e,r):new Ge(e,n,r)}static V(e,n,r){return n==="in"?new _M(e,r):new IM(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.v(br(n,this.value)):n!==null&&Ri(this.value)===Ri(n)&&this.v(br(n,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return $()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class wM extends Ge{constructor(e,n,r){super(e,n,r),this.key=x.fromName(r.referenceValue)}matches(e){const n=x.comparator(e.key,this.key);return this.v(n)}}class _M extends Ge{constructor(e,n){super(e,"in",n),this.keys=$S("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class IM extends Ge{constructor(e,n){super(e,"not-in",n),this.keys=$S("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function $S(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>x.fromName(r.referenceValue))}class EM extends Ge{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Qa(n)&&Ka(n.arrayValue,this.value)}}class SM extends Ge{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ka(this.value.arrayValue,n)}}class TM extends Ge{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ka(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ka(this.value.arrayValue,n)}}class kM extends Ge{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Qa(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ka(this.value.arrayValue,r))}}class xr{constructor(e,n){this.position=e,this.inclusive=n}}class Ps{constructor(e,n="asc"){this.field=e,this.dir=n}}function CM(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Vw(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=x.comparator(x.fromName(o.referenceValue),n.key):r=br(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Bw(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Tn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class er{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.D=null,this.C=null,this.startAt,this.endAt}}function US(t,e,n,r,i,s,o,a){return new er(t,e,n,r,i,s,o,a)}function yo(t){return new er(t)}function Vl(t){return!Bi(t.limit)&&t.limitType==="F"}function Mc(t){return!Bi(t.limit)&&t.limitType==="L"}function Eg(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Sg(t){for(const e of t.filters)if(e.S())return e.field;return null}function Tg(t){return t.collectionGroup!==null}function Ks(t){const e=P(t);if(e.D===null){e.D=[];const n=Sg(e),r=Eg(e);if(n!==null&&r===null)n.isKeyField()||e.D.push(new Ps(n)),e.D.push(new Ps(Me.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.D.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new Ps(Me.keyField(),s))}}}return e.D}function Xt(t){const e=P(t);if(!e.C)if(e.limitType==="F")e.C=Fw(e.path,e.collectionGroup,Ks(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Ks(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Ps(s.field,o))}const r=e.endAt?new xr(e.endAt.position,!e.endAt.inclusive):null,i=e.startAt?new xr(e.startAt.position,!e.startAt.inclusive):null;e.C=Fw(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.C}function FS(t,e,n){return new er(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Cu(t,e){return ku(Xt(t),Xt(e))&&t.limitType===e.limitType}function VS(t){return`${Ai(Xt(t))}|lt:${t.limitType}`}function mp(t){return`Query(target=${vM(Xt(t))}; limitType=${t.limitType})`}function kg(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):x.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=Vw(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Ks(n),r)||n.endAt&&!function(i,s,o){const a=Vw(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Ks(n),r))}(t,e)}function BS(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function qS(t){return(e,n)=>{let r=!1;for(const i of Ks(t)){const s=RM(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function RM(t,e,n){const r=t.field.isKeyField()?x.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),u=o.data.field(i);return a!==null&&u!==null?br(a,u):$()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return $()}}/**
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
 */function zS(t,e){if(t.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ga(e)?"-0":e}}function jS(t){return{integerValue:""+t}}function WS(t,e){return PS(e)?jS(e):zS(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class $h{constructor(){this._=void 0}}function AM(t,e,n){return t instanceof Qs?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Ni?GS(t,e):t instanceof bi?KS(t,e):function(r,i){const s=HS(r,i),o=qw(s)+qw(r.k);return fp(s)&&fp(r.k)?jS(o):zS(r.M,o)}(t,e)}function NM(t,e,n){return t instanceof Ni?GS(t,e):t instanceof bi?KS(t,e):n}function HS(t,e){return t instanceof Ys?fp(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Qs extends $h{}class Ni extends $h{constructor(e){super(),this.elements=e}}function GS(t,e){const n=QS(e);for(const r of t.elements)n.some(i=>Tn(i,r))||n.push(r);return{arrayValue:{values:n}}}class bi extends $h{constructor(e){super(),this.elements=e}}function KS(t,e){let n=QS(e);for(const r of t.elements)n=n.filter(i=>!Tn(i,r));return{arrayValue:{values:n}}}class Ys extends $h{constructor(e,n){super(),this.M=e,this.k=n}}function qw(t){return pe(t.integerValue||t.doubleValue)}function QS(t){return Qa(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class Ru{constructor(e,n){this.field=e,this.transform=n}}function bM(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Ni&&r instanceof Ni||n instanceof bi&&r instanceof bi?Ws(n.elements,r.elements,Tn):n instanceof Ys&&r instanceof Ys?Tn(n.k,r.k):n instanceof Qs&&r instanceof Qs}(t.transform,e.transform)}class xM{constructor(e,n){this.version=e,this.transformResults=n}}class ke{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ke}static exists(e){return new ke(void 0,e)}static updateTime(e){return new ke(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Bl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Uh{}function PM(t,e,n){t instanceof Au?function(r,i,s){const o=r.value.clone(),a=Ww(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof qi?function(r,i,s){if(!Bl(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=Ww(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(YS(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function gp(t,e,n){t instanceof Au?function(r,i,s){if(!Bl(r.precondition,i))return;const o=r.value.clone(),a=Hw(r.fieldTransforms,s,i);o.setAll(a),i.convertToFoundDocument(jw(i),o).setHasLocalMutations()}(t,e,n):t instanceof qi?function(r,i,s){if(!Bl(r.precondition,i))return;const o=Hw(r.fieldTransforms,s,i),a=i.data;a.setAll(YS(r)),a.setAll(o),i.convertToFoundDocument(jw(i),a).setHasLocalMutations()}(t,e,n):function(r,i){Bl(r.precondition,i)&&i.convertToNoDocument(B.min())}(t,e)}function DM(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=HS(r.transform,i||null);s!=null&&(n==null&&(n=it.empty()),n.set(r.field,s))}return n||null}function zw(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Ws(n,r,(i,s)=>bM(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function jw(t){return t.isFoundDocument()?t.version:B.min()}class Au extends Uh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}}class qi extends Uh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}}function YS(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Ww(t,e,n){const r=new Map;z(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,NM(o,a,n[i]))}return r}function Hw(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,AM(s,o,e))}return r}class Nu extends Uh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class Cg extends Uh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
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
 */class OM{constructor(e){this.count=e}}/**
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
 */var Ee,Y;function JS(t){switch(t){default:return $();case w.CANCELLED:case w.UNKNOWN:case w.DEADLINE_EXCEEDED:case w.RESOURCE_EXHAUSTED:case w.INTERNAL:case w.UNAVAILABLE:case w.UNAUTHENTICATED:return!1;case w.INVALID_ARGUMENT:case w.NOT_FOUND:case w.ALREADY_EXISTS:case w.PERMISSION_DENIED:case w.FAILED_PRECONDITION:case w.ABORTED:case w.OUT_OF_RANGE:case w.UNIMPLEMENTED:case w.DATA_LOSS:return!0}}function XS(t){if(t===void 0)return Te("GRPC error has no .code"),w.UNKNOWN;switch(t){case Ee.OK:return w.OK;case Ee.CANCELLED:return w.CANCELLED;case Ee.UNKNOWN:return w.UNKNOWN;case Ee.DEADLINE_EXCEEDED:return w.DEADLINE_EXCEEDED;case Ee.RESOURCE_EXHAUSTED:return w.RESOURCE_EXHAUSTED;case Ee.INTERNAL:return w.INTERNAL;case Ee.UNAVAILABLE:return w.UNAVAILABLE;case Ee.UNAUTHENTICATED:return w.UNAUTHENTICATED;case Ee.INVALID_ARGUMENT:return w.INVALID_ARGUMENT;case Ee.NOT_FOUND:return w.NOT_FOUND;case Ee.ALREADY_EXISTS:return w.ALREADY_EXISTS;case Ee.PERMISSION_DENIED:return w.PERMISSION_DENIED;case Ee.FAILED_PRECONDITION:return w.FAILED_PRECONDITION;case Ee.ABORTED:return w.ABORTED;case Ee.OUT_OF_RANGE:return w.OUT_OF_RANGE;case Ee.UNIMPLEMENTED:return w.UNIMPLEMENTED;case Ee.DATA_LOSS:return w.DATA_LOSS;default:return $()}}(Y=Ee||(Ee={}))[Y.OK=0]="OK",Y[Y.CANCELLED=1]="CANCELLED",Y[Y.UNKNOWN=2]="UNKNOWN",Y[Y.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Y[Y.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Y[Y.NOT_FOUND=5]="NOT_FOUND",Y[Y.ALREADY_EXISTS=6]="ALREADY_EXISTS",Y[Y.PERMISSION_DENIED=7]="PERMISSION_DENIED",Y[Y.UNAUTHENTICATED=16]="UNAUTHENTICATED",Y[Y.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Y[Y.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Y[Y.ABORTED=10]="ABORTED",Y[Y.OUT_OF_RANGE=11]="OUT_OF_RANGE",Y[Y.UNIMPLEMENTED=12]="UNIMPLEMENTED",Y[Y.INTERNAL=13]="INTERNAL",Y[Y.UNAVAILABLE=14]="UNAVAILABLE",Y[Y.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class zr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Vi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return bS(this.inner)}size(){return this.innerSize}}/**
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
 */class Ie{constructor(e,n){this.comparator=e,this.root=n||He.EMPTY}insert(e,n){return new Ie(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,He.BLACK,null,null))}remove(e){return new Ie(this.comparator,this.root.remove(e,this.comparator).copy(null,null,He.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new gl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new gl(this.root,e,this.comparator,!1)}getReverseIterator(){return new gl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new gl(this.root,e,this.comparator,!0)}}class gl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class He{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:He.RED,this.left=i!=null?i:He.EMPTY,this.right=s!=null?s:He.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new He(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return He.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return He.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,He.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,He.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw $();const e=this.left.check();if(e!==this.right.check())throw $();return e+(this.isRed()?0:1)}}He.EMPTY=null,He.RED=!0,He.BLACK=!1;He.EMPTY=new class{constructor(){this.size=0}get key(){throw $()}get value(){throw $()}get color(){throw $()}get left(){throw $()}get right(){throw $()}copy(t,e,n,r,i){return this}insert(t,e,n){return new He(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ae{constructor(e){this.comparator=e,this.data=new Ie(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Gw(this.data.getIterator())}getIteratorFrom(e){return new Gw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ae)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ae(this.comparator);return n.data=e,n}}class Gw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Zi(t){return t.hasNext()?t.getNext():void 0}/**
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
 */const LM=new Ie(x.comparator);function zt(){return LM}const MM=new Ie(x.comparator);function yp(){return MM}function la(){return new zr(t=>t.toString(),(t,e)=>t.isEqual(e))}const $M=new Ie(x.comparator),UM=new ae(x.comparator);function te(...t){let e=UM;for(const n of t)e=e.add(n);return e}const FM=new ae(K);function Fh(){return FM}/**
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
 */class bu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,xu.createSynthesizedTargetChangeForCurrentChange(e,n)),new bu(B.min(),r,Fh(),zt(),te())}}class xu{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n){return new xu(xe.EMPTY_BYTE_STRING,n,te(),te(),te())}}/**
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
 */class ql{constructor(e,n,r,i){this.O=e,this.removedTargetIds=n,this.key=r,this.F=i}}class ZS{constructor(e,n){this.targetId=e,this.$=n}}class eT{constructor(e,n,r=xe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Kw{constructor(){this.B=0,this.L=Yw(),this.U=xe.EMPTY_BYTE_STRING,this.q=!1,this.G=!0}get current(){return this.q}get resumeToken(){return this.U}get K(){return this.B!==0}get j(){return this.G}W(e){e.approximateByteSize()>0&&(this.G=!0,this.U=e)}H(){let e=te(),n=te(),r=te();return this.L.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:$()}}),new xu(this.U,this.q,e,n,r)}J(){this.G=!1,this.L=Yw()}Y(e,n){this.G=!0,this.L=this.L.insert(e,n)}X(e){this.G=!0,this.L=this.L.remove(e)}Z(){this.B+=1}tt(){this.B-=1}et(){this.G=!0,this.q=!0}}class VM{constructor(e){this.nt=e,this.st=new Map,this.it=zt(),this.rt=Qw(),this.ot=new ae(K)}ut(e){for(const n of e.O)e.F&&e.F.isFoundDocument()?this.at(n,e.F):this.ct(n,e.key,e.F);for(const n of e.removedTargetIds)this.ct(n,e.key,e.F)}ht(e){this.forEachTarget(e,n=>{const r=this.lt(n);switch(e.state){case 0:this.ft(n)&&r.W(e.resumeToken);break;case 1:r.tt(),r.K||r.J(),r.W(e.resumeToken);break;case 2:r.tt(),r.K||this.removeTarget(n);break;case 3:this.ft(n)&&(r.et(),r.W(e.resumeToken));break;case 4:this.ft(n)&&(this.dt(n),r.W(e.resumeToken));break;default:$()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.st.forEach((r,i)=>{this.ft(i)&&n(i)})}_t(e){const n=e.targetId,r=e.$.count,i=this.wt(n);if(i){const s=i.target;if(Lc(s))if(r===0){const o=new x(s.path);this.ct(n,o,se.newNoDocument(o,B.min()))}else z(r===1);else this.gt(n)!==r&&(this.dt(n),this.ot=this.ot.add(n))}}yt(e){const n=new Map;this.st.forEach((s,o)=>{const a=this.wt(o);if(a){if(s.current&&Lc(a.target)){const u=new x(a.target.path);this.it.get(u)!==null||this.It(o,u)||this.ct(o,u,se.newNoDocument(u,e))}s.j&&(n.set(o,s.H()),s.J())}});let r=te();this.rt.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const l=this.wt(u);return!l||l.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.it.forEach((s,o)=>o.setReadTime(e));const i=new bu(e,n,this.ot,this.it,r);return this.it=zt(),this.rt=Qw(),this.ot=new ae(K),i}at(e,n){if(!this.ft(e))return;const r=this.It(e,n.key)?2:0;this.lt(e).Y(n.key,r),this.it=this.it.insert(n.key,n),this.rt=this.rt.insert(n.key,this.Tt(n.key).add(e))}ct(e,n,r){if(!this.ft(e))return;const i=this.lt(e);this.It(e,n)?i.Y(n,1):i.X(n),this.rt=this.rt.insert(n,this.Tt(n).delete(e)),r&&(this.it=this.it.insert(n,r))}removeTarget(e){this.st.delete(e)}gt(e){const n=this.lt(e).H();return this.nt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Z(e){this.lt(e).Z()}lt(e){let n=this.st.get(e);return n||(n=new Kw,this.st.set(e,n)),n}Tt(e){let n=this.rt.get(e);return n||(n=new ae(K),this.rt=this.rt.insert(e,n)),n}ft(e){const n=this.wt(e)!==null;return n||N("WatchChangeAggregator","Detected inactive target",e),n}wt(e){const n=this.st.get(e);return n&&n.K?null:this.nt.Et(e)}dt(e){this.st.set(e,new Kw),this.nt.getRemoteKeysForTarget(e).forEach(n=>{this.ct(e,n,null)})}It(e,n){return this.nt.getRemoteKeysForTarget(e).has(n)}}function Qw(){return new Ie(x.comparator)}function Yw(){return new Ie(x.comparator)}/**
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
 */const BM=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),qM=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class zM{constructor(e,n){this.databaseId=e,this.N=n}}function Ya(t,e){return t.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function tT(t,e){return t.N?e.toBase64():e.toUint8Array()}function jM(t,e){return Ya(t,e.toTimestamp())}function Fe(t){return z(!!t),B.fromTimestamp(function(e){const n=Nr(e);return new _e(n.seconds,n.nanos)}(t))}function Rg(t,e){return function(n){return new J(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function nT(t){const e=J.fromString(t);return z(cT(e)),e}function Ja(t,e){return Rg(t.databaseId,e.path)}function _n(t,e){const n=nT(e);if(n.get(1)!==t.databaseId.projectId)throw new C(w.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new C(w.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new x(iT(n))}function vp(t,e){return Rg(t.databaseId,e)}function rT(t){const e=nT(t);return e.length===4?J.emptyPath():iT(e)}function Xa(t){return new J(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function iT(t){return z(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Jw(t,e,n){return{name:Ja(t,e),fields:n.value.mapValue.fields}}function sT(t,e,n){const r=_n(t,e.name),i=Fe(e.updateTime),s=new it({mapValue:{fields:e.fields}}),o=se.newFoundDocument(r,i,s);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function WM(t,e){return"found"in e?function(n,r){z(!!r.found),r.found.name,r.found.updateTime;const i=_n(n,r.found.name),s=Fe(r.found.updateTime),o=new it({mapValue:{fields:r.found.fields}});return se.newFoundDocument(i,s,o)}(t,e):"missing"in e?function(n,r){z(!!r.missing),z(!!r.readTime);const i=_n(n,r.missing),s=Fe(r.readTime);return se.newNoDocument(i,s)}(t,e):$()}function HM(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:$()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,l){return u.N?(z(l===void 0||typeof l=="string"),xe.fromBase64String(l||"")):(z(l===void 0||l instanceof Uint8Array),xe.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const l=u.code===void 0?w.UNKNOWN:XS(u.code);return new C(l,u.message||"")}(o);n=new eT(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=_n(t,r.document.name),s=Fe(r.document.updateTime),o=new it({mapValue:{fields:r.document.fields}}),a=se.newFoundDocument(i,s,o),u=r.targetIds||[],l=r.removedTargetIds||[];n=new ql(u,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=_n(t,r.document),s=r.readTime?Fe(r.readTime):B.min(),o=se.newNoDocument(i,s),a=r.removedTargetIds||[];n=new ql([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=_n(t,r.document),s=r.removedTargetIds||[];n=new ql([],s,i,null)}else{if(!("filter"in e))return $();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new OM(i),o=r.targetId;n=new ZS(o,s)}}return n}function Za(t,e){let n;if(e instanceof Au)n={update:Jw(t,e.key,e.value)};else if(e instanceof Nu)n={delete:Ja(t,e.key)};else if(e instanceof qi)n={update:Jw(t,e.key,e.data),updateMask:ZM(e.fieldMask)};else{if(!(e instanceof Cg))return $();n={verify:Ja(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Qs)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ni)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof bi)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Ys)return{fieldPath:s.field.canonicalString(),increment:o.k};throw $()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:jM(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:$()}(t,e.precondition)),n}function wp(t,e){const n=e.currentDocument?function(i){return i.updateTime!==void 0?ke.updateTime(Fe(i.updateTime)):i.exists!==void 0?ke.exists(i.exists):ke.none()}(e.currentDocument):ke.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(s,o){let a=null;if("setToServerValue"in o)z(o.setToServerValue==="REQUEST_TIME"),a=new Qs;else if("appendMissingElements"in o){const l=o.appendMissingElements.values||[];a=new Ni(l)}else if("removeAllFromArray"in o){const l=o.removeAllFromArray.values||[];a=new bi(l)}else"increment"in o?a=new Ys(s,o.increment):$();const u=Me.fromServerFormat(o.fieldPath);return new Ru(u,a)}(t,i)):[];if(e.update){e.update.name;const i=_n(t,e.update.name),s=new it({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const u=a.fieldPaths||[];return new Hs(u.map(l=>Me.fromServerFormat(l)))}(e.updateMask);return new qi(i,s,o,n,r)}return new Au(i,s,n,r)}if(e.delete){const i=_n(t,e.delete);return new Nu(i,n)}if(e.verify){const i=_n(t,e.verify);return new Cg(i,n)}return $()}function GM(t,e){return t&&t.length>0?(z(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Fe(r.updateTime):Fe(i);return s.isEqual(B.min())&&(s=Fe(i)),new xM(s,r.transformResults||[])}(n,e))):[]}function oT(t,e){return{documents:[vp(t,e.path)]}}function aT(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=vp(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=vp(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(u){if(u.length===0)return;const l=u.map(c=>function(h){if(h.op==="=="){if(Mw(h.value))return{unaryFilter:{field:es(h.field),op:"IS_NAN"}};if(Lw(h.value))return{unaryFilter:{field:es(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(Mw(h.value))return{unaryFilter:{field:es(h.field),op:"IS_NOT_NAN"}};if(Lw(h.value))return{unaryFilter:{field:es(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:es(h.field),op:YM(h.op),value:h.value}}}(c));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(u){if(u.length!==0)return u.map(l=>function(c){return{field:es(c.field),direction:QM(c.dir)}}(l))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(u,l){return u.N||Bi(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),n}function uT(t){let e=rT(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){z(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=lT(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new Ps(ws(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,Bi(h)?null:h}(n.limit));let u=null;n.startAt&&(u=function(c){const h=!!c.before,d=c.values||[];return new xr(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(c){const h=!c.before,d=c.values||[];return new xr(d,h)}(n.endAt)),US(e,i,o,s,a,"F",u,l)}function KM(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return $()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function lT(t){return t?t.unaryFilter!==void 0?[XM(t)]:t.fieldFilter!==void 0?[JM(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>lT(e)).reduce((e,n)=>e.concat(n)):$():[]}function QM(t){return BM[t]}function YM(t){return qM[t]}function es(t){return{fieldPath:t.canonicalString()}}function ws(t){return Me.fromServerFormat(t.fieldPath)}function JM(t){return Ge.create(ws(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return $()}}(t.fieldFilter.op),t.fieldFilter.value)}function XM(t){switch(t.unaryFilter.op){case"IS_NAN":const e=ws(t.unaryFilter.field);return Ge.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=ws(t.unaryFilter.field);return Ge.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=ws(t.unaryFilter.field);return Ge.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=ws(t.unaryFilter.field);return Ge.create(i,"!=",{nullValue:"NULL_VALUE"});default:return $()}}function ZM(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function cT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */function $e(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Xw(e)),e=e$(t.get(n),e);return Xw(e)}function e$(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function Xw(t){return t+""}function tn(t){const e=t.length;if(z(e>=2),e===2)return z(t.charAt(0)===""&&t.charAt(1)===""),J.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&$(),t.charAt(o+1)){case"":const a=t.substring(s,o);let u;i.length===0?u=a:(i+=a,u=i,i=""),r.push(u);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:$()}s=o+2}return new J(r)}/**
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
 */const Zw=["userId","batchId"];/**
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
 */function zl(t,e){return[t,$e(e)]}function hT(t,e,n){return[t,$e(e),n]}const t$={},n$=["prefixPath","collectionGroup","readTime","documentId"],r$=["prefixPath","collectionGroup","documentId"],i$=["collectionGroup","readTime","prefixPath","documentId"],s$=["canonicalId","targetId"],o$=["targetId","path"],a$=["path","targetId"],u$=["collectionId","parent"],l$=["indexId","uid"],c$=["uid","sequenceNumber"],h$=["indexId","uid","arrayValue","directionalValue","documentKey"],d$=["indexId","uid","documentKey"],f$=["userId","collectionPath","documentId"],p$=["userId","collectionPath","largestBatchId"],m$=["userId","collectionGroup","largestBatchId"],dT=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],g$=[...dT,"documentOverlays"],fT=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],y$=[...fT,"indexConfiguration","indexState","indexEntries"];/**
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
 */const pT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class mT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */class _{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&$(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new _((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof _?n:_.resolve(n)}catch(n){return _.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):_.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):_.reject(n)}static resolve(e){return new _((n,r)=>{n(e)})}static reject(e){return new _((n,r)=>{r(e)})}static waitFor(e){return new _((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=_.resolve(!1);for(const r of e)n=n.next(i=>i?_.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}}/**
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
 */class Vh{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.At=new Ue,this.transaction.oncomplete=()=>{this.At.resolve()},this.transaction.onabort=()=>{n.error?this.At.reject(new ca(e,n.error)):this.At.resolve()},this.transaction.onerror=r=>{const i=Ag(r.target.error);this.At.reject(new ca(e,i))}}static open(e,n,r,i){try{return new Vh(n,e.transaction(i,r))}catch(s){throw new ca(n,s)}}get Rt(){return this.At.promise}abort(e){e&&this.At.reject(e),this.aborted||(N("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}bt(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new w$(n)}}class nn{constructor(e,n,r){this.name=e,this.version=n,this.Pt=r,nn.Vt(le())===12.2&&Te("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return N("SimpleDb","Removing database:",e),Zr(window.indexedDB.deleteDatabase(e)).toPromise()}static vt(){if(!xa())return!1;if(nn.St())return!0;const e=le(),n=nn.Vt(e),r=0<n&&n<10,i=nn.Dt(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static St(){var e;return typeof process!="undefined"&&((e=process.env)===null||e===void 0?void 0:e.Ct)==="YES"}static xt(e,n){return e.store(n)}static Vt(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static Dt(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async Nt(e){return this.db||(N("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new ca(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new C(w.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new C(w.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new ca(e,o))},i.onupgradeneeded=s=>{N("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.Pt.kt(o,i.transaction,s.oldVersion,this.version).next(()=>{N("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.Mt&&(this.db.onversionchange=n=>this.Mt(n)),this.db}Ot(e){this.Mt=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.Nt(e);const a=Vh.open(this.db,e,s?"readonly":"readwrite",r),u=i(a).next(l=>(a.bt(),l)).catch(l=>(a.abort(l),_.reject(l))).toPromise();return u.catch(()=>{}),await a.Rt,u}catch(a){const u=a.name!=="FirebaseError"&&o<3;if(N("SimpleDb","Transaction failed with error:",a.message,"Retrying:",u),this.close(),!u)return Promise.reject(a)}}}close(){this.db&&this.db.close(),this.db=void 0}}class v${constructor(e){this.Ft=e,this.$t=!1,this.Bt=null}get isDone(){return this.$t}get Lt(){return this.Bt}set cursor(e){this.Ft=e}done(){this.$t=!0}Ut(e){this.Bt=e}delete(){return Zr(this.Ft.delete())}}class ca extends C{constructor(e,n){super(w.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function zi(t){return t.name==="IndexedDbTransactionError"}class w${constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(N("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(N("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Zr(r)}add(e){return N("SimpleDb","ADD",this.store.name,e,e),Zr(this.store.add(e))}get(e){return Zr(this.store.get(e)).next(n=>(n===void 0&&(n=null),N("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return N("SimpleDb","DELETE",this.store.name,e),Zr(this.store.delete(e))}count(){return N("SimpleDb","COUNT",this.store.name),Zr(this.store.count())}qt(e,n){const r=this.options(e,n);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),s=[];return this.Gt(i,(o,a)=>{s.push(a)}).next(()=>s)}{const i=this.store.getAll(r.range);return new _((s,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{s(a.target.result)}})}}Kt(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new _((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}Qt(e,n){N("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.jt=!1;const i=this.cursor(r);return this.Gt(i,(s,o,a)=>a.delete())}Wt(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.Gt(i,n)}zt(e){const n=this.cursor({});return new _((r,i)=>{n.onerror=s=>{const o=Ag(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}Gt(e,n){const r=[];return new _((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const u=new v$(a),l=n(a.primaryKey,a.value,u);if(l instanceof _){const c=l.catch(h=>(u.done(),_.reject(h)));r.push(c)}u.isDone?i():u.Lt===null?a.continue():a.continue(u.Lt)}}).next(()=>_.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.jt?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function Zr(t){return new _((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=Ag(r.target.error);n(i)}})}let e_=!1;function Ag(t){const e=nn.Vt(le());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new C("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return e_||(e_=!0,setTimeout(()=>{throw r},0)),r}}return t}/**
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
 */class t_ extends mT{constructor(e,n){super(),this.Ht=e,this.currentSequenceNumber=n}}function ze(t,e){const n=P(t);return nn.xt(n.Ht,e)}/**
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
 */class Ng{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&PM(s,e,r[i])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&gp(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&gp(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const r=e.get(n.key),i=r;this.applyToLocalView(i),r.isValidDocument()||i.convertToNoDocument(B.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&Ws(this.mutations,e.mutations,(n,r)=>zw(n,r))&&Ws(this.baseMutations,e.baseMutations,(n,r)=>zw(n,r))}}class bg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){z(e.mutations.length===r.length);let i=$M;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new bg(e,n,r,i)}}/**
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
 */class xg{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class Ir{constructor(e,n,r,i,s=B.min(),o=B.min(),a=xe.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Ir(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Ir(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Ir(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class gT{constructor(e){this.Jt=e}}function _$(t,e){let n;if(e.document)n=sT(t.Jt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=x.fromSegments(e.noDocument.path),i=Pi(e.noDocument.readTime);n=se.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return $();{const r=x.fromSegments(e.unknownDocument.path),i=Pi(e.unknownDocument.version);n=se.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(r){const i=new _e(r[0],r[1]);return B.fromTimestamp(i)}(e.readTime)),n}function n_(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:$c(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(i,s){return{name:Ja(i,s.key),fields:s.data.value.mapValue.fields,updateTime:Ya(i,s.version.toTimestamp())}}(t.Jt,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:xi(e.version)};else{if(!e.isUnknownDocument())return $();r.unknownDocument={path:n.path.toArray(),version:xi(e.version)}}return r}function $c(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function xi(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Pi(t){const e=new _e(t.seconds,t.nanoseconds);return B.fromTimestamp(e)}function rs(t,e){const n=(e.baseMutations||[]).map(s=>wp(t.Jt,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>wp(t.Jt,s)),i=_e.fromMillis(e.localWriteTimeMs);return new Ng(e.batchId,i,n,r)}function Qo(t){const e=Pi(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?Pi(t.lastLimboFreeSnapshotVersion):B.min();let r;var i;return t.query.documents!==void 0?(z((i=t.query).documents.length===1),r=Xt(yo(rT(i.documents[0])))):r=function(s){return Xt(uT(s))}(t.query),new Ir(r,t.targetId,0,t.lastListenSequenceNumber,e,n,xe.fromBase64String(t.resumeToken))}function yT(t,e){const n=xi(e.snapshotVersion),r=xi(e.lastLimboFreeSnapshotVersion);let i;i=Lc(e.target)?oT(t.Jt,e.target):aT(t.Jt,e.target);const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Ai(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Pg(t){const e=uT({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?FS(e,e.limit,"L"):e}function Gd(t,e){return new xg(e.largestBatchId,wp(t.Jt,e.overlayMutation))}function r_(t,e){const n=e.path.lastSegment();return[t,$e(e.path.popLast()),n]}/**
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
 */class I${getBundleMetadata(e,n){return i_(e).get(n).next(r=>{if(r)return{id:(i=r).bundleId,createTime:Pi(i.createTime),version:i.version};var i})}saveBundleMetadata(e,n){return i_(e).put({bundleId:(r=n).id,createTime:xi(Fe(r.createTime)),version:r.version});var r}getNamedQuery(e,n){return s_(e).get(n).next(r=>{if(r)return{name:(i=r).name,query:Pg(i.bundledQuery),readTime:Pi(i.readTime)};var i})}saveNamedQuery(e,n){return s_(e).put(function(r){return{name:r.name,readTime:xi(Fe(r.readTime)),bundledQuery:r.bundledQuery}}(n))}}function i_(t){return ze(t,"bundles")}function s_(t){return ze(t,"namedQueries")}/**
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
 */class Dg{constructor(e,n){this.M=e,this.userId=n}static Yt(e,n){const r=n.uid||"";return new Dg(e,r)}getOverlay(e,n){return $o(e).get(r_(this.userId,n)).next(r=>r?Gd(this.M,r):null)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new xg(n,o);i.push(this.Xt(e,a))}),_.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add($e(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push($o(e).Qt("collectionPathOverlayIndex",a))}),_.waitFor(s)}getOverlaysForCollection(e,n,r){const i=la(),s=$e(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return $o(e).qt("collectionPathOverlayIndex",o).next(a=>{for(const u of a){const l=Gd(this.M,u);i.set(l.getKey(),l)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=la();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return $o(e).Wt({index:"collectionGroupOverlayIndex",range:a},(u,l,c)=>{const h=Gd(this.M,l);s.size()<i||h.largestBatchId===o?(s.set(h.getKey(),h),o=h.largestBatchId):c.done()}).next(()=>s)}Xt(e,n){return $o(e).put(function(r,i,s){const[o,a,u]=r_(i,s.mutation.key);return{userId:i,collectionPath:a,documentId:u,collectionGroup:s.mutation.key.getCollectionGroup(),largestBatchId:s.largestBatchId,overlayMutation:Za(r.Jt,s.mutation)}}(this.M,this.userId,n))}}function $o(t){return ze(t,"documentOverlays")}/**
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
 */class _s{constructor(){}Zt(e,n){this.te(e,n),n.ee()}te(e,n){if("nullValue"in e)this.ne(n,5);else if("booleanValue"in e)this.ne(n,10),n.se(e.booleanValue?1:0);else if("integerValue"in e)this.ne(n,15),n.se(pe(e.integerValue));else if("doubleValue"in e){const r=pe(e.doubleValue);isNaN(r)?this.ne(n,13):(this.ne(n,15),Ga(r)?n.se(0):n.se(r))}else if("timestampValue"in e){const r=e.timestampValue;this.ne(n,20),typeof r=="string"?n.ie(r):(n.ie(`${r.seconds||""}`),n.se(r.nanos||0))}else if("stringValue"in e)this.re(e.stringValue,n),this.oe(n);else if("bytesValue"in e)this.ne(n,30),n.ue(Ci(e.bytesValue)),this.oe(n);else if("referenceValue"in e)this.ae(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.ne(n,45),n.se(r.latitude||0),n.se(r.longitude||0)}else"mapValue"in e?DS(e)?this.ne(n,Number.MAX_SAFE_INTEGER):(this.ce(e.mapValue,n),this.oe(n)):"arrayValue"in e?(this.he(e.arrayValue,n),this.oe(n)):$()}re(e,n){this.ne(n,25),this.le(e,n)}le(e,n){n.ie(e)}ce(e,n){const r=e.fields||{};this.ne(n,55);for(const i of Object.keys(r))this.re(i,n),this.te(r[i],n)}he(e,n){const r=e.values||[];this.ne(n,50);for(const i of r)this.te(i,n)}ae(e,n){this.ne(n,37),x.fromName(e).path.forEach(r=>{this.ne(n,60),this.le(r,n)})}ne(e,n){e.se(n)}oe(e){e.se(2)}}_s.fe=new _s;function E$(t){if(t===0)return 8;let e=0;return t>>4==0&&(e+=4,t<<=4),t>>6==0&&(e+=2,t<<=2),t>>7==0&&(e+=1),e}function o_(t){const e=64-function(n){let r=0;for(let i=0;i<8;++i){const s=E$(255&n[i]);if(r+=s,s!==8)break}return r}(t);return Math.ceil(e/8)}class S${constructor(){this.buffer=new Uint8Array(1024),this.position=0}de(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this._e(r.value),r=n.next();this.we()}me(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.ge(r.value),r=n.next();this.ye()}pe(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this._e(r);else if(r<2048)this._e(960|r>>>6),this._e(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this._e(480|r>>>12),this._e(128|63&r>>>6),this._e(128|63&r);else{const i=n.codePointAt(0);this._e(240|i>>>18),this._e(128|63&i>>>12),this._e(128|63&i>>>6),this._e(128|63&i)}}this.we()}Ie(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.ge(r);else if(r<2048)this.ge(960|r>>>6),this.ge(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.ge(480|r>>>12),this.ge(128|63&r>>>6),this.ge(128|63&r);else{const i=n.codePointAt(0);this.ge(240|i>>>18),this.ge(128|63&i>>>12),this.ge(128|63&i>>>6),this.ge(128|63&i)}}this.ye()}Te(e){const n=this.Ee(e),r=o_(n);this.Ae(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}Re(e){const n=this.Ee(e),r=o_(n);this.Ae(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}be(){this.Pe(255),this.Pe(255)}Ve(){this.ve(255),this.ve(255)}reset(){this.position=0}seed(e){this.Ae(e.length),this.buffer.set(e,this.position),this.position+=e.length}Se(){return this.buffer.slice(0,this.position)}Ee(e){const n=function(i){const s=new DataView(new ArrayBuffer(8));return s.setFloat64(0,i,!1),new Uint8Array(s.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}_e(e){const n=255&e;n===0?(this.Pe(0),this.Pe(255)):n===255?(this.Pe(255),this.Pe(0)):this.Pe(n)}ge(e){const n=255&e;n===0?(this.ve(0),this.ve(255)):n===255?(this.ve(255),this.ve(0)):this.ve(e)}we(){this.Pe(0),this.Pe(1)}ye(){this.ve(0),this.ve(1)}Pe(e){this.Ae(1),this.buffer[this.position++]=e}ve(e){this.Ae(1),this.buffer[this.position++]=~e}Ae(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class T${constructor(e){this.De=e}ue(e){this.De.de(e)}ie(e){this.De.pe(e)}se(e){this.De.Te(e)}ee(){this.De.be()}}class k${constructor(e){this.De=e}ue(e){this.De.me(e)}ie(e){this.De.Ie(e)}se(e){this.De.Re(e)}ee(){this.De.Ve()}}class yl{constructor(){this.De=new S$,this.Ce=new T$(this.De),this.xe=new k$(this.De)}seed(e){this.De.seed(e)}Ne(e){return e===0?this.Ce:this.xe}Se(){return this.De.Se()}reset(){this.De.reset()}}/**
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
 */class ar{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}ke(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new ar(this.indexId,this.documentKey,this.arrayValue,r)}}function Kr(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=a_(t.arrayValue,e.arrayValue),n!==0?n:(n=a_(t.directionalValue,e.directionalValue),n!==0?n:x.comparator(t.documentKey,e.documentKey)))}function a_(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
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
 */class C${constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Me=e.orderBy,this.Oe=[];for(const n of e.filters){const r=n;r.S()?this.Fe=r:this.Oe.push(r)}}$e(e){const n=pp(e);if(n!==void 0&&!this.Be(n))return!1;const r=ns(e);let i=0,s=0;for(;i<r.length&&this.Be(r[i]);++i);if(i===r.length)return!0;if(this.Fe!==void 0){const o=r[i];if(!this.Le(this.Fe,o)||!this.Ue(this.Me[s++],o))return!1;++i}for(;i<r.length;++i){const o=r[i];if(s>=this.Me.length||!this.Ue(this.Me[s++],o))return!1}return!0}Be(e){for(const n of this.Oe)if(this.Le(n,e))return!0;return!1}Le(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}Ue(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
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
 */class R${constructor(){this.qe=new Og}addToCollectionParentIndex(e,n){return this.qe.add(n),_.resolve()}getCollectionParents(e,n){return _.resolve(this.qe.getEntries(n))}addFieldIndex(e,n){return _.resolve()}deleteFieldIndex(e,n){return _.resolve()}getDocumentsMatchingTarget(e,n){return _.resolve(null)}getFieldIndex(e,n){return _.resolve(null)}getFieldIndexes(e,n){return _.resolve([])}getNextCollectionGroupToUpdate(e){return _.resolve(null)}updateCollectionGroup(e,n,r){return _.resolve()}updateIndexEntries(e,n){return _.resolve()}}class Og{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ae(J.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ae(J.comparator)).toArray()}}/**
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
 */const vl=new Uint8Array(0);class A${constructor(e){this.user=e,this.Ge=new Og,this.Ke=new zr(n=>Ai(n),(n,r)=>ku(n,r)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.Ge.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.Ge.add(n)});const s={collectionId:r,parent:$e(i)};return u_(e).put(s)}return _.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[NS(n),""],!1,!0);return u_(e).qt(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(tn(o.parent))}return r})}addFieldIndex(e,n){const r=wl(e),i=function(s){return{indexId:s.indexId,collectionGroup:s.collectionGroup,fields:s.fields.map(o=>[o.fieldPath.canonicalString(),o.kind])}}(n);return delete i.indexId,r.add(i).next()}deleteFieldIndex(e,n){const r=wl(e),i=_l(e),s=Uo(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,n){const r=Uo(e);let i=!0;const s=new Map;return _.forEach(this.Qe(n),o=>this.getFieldIndex(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=te();return _.forEach(s,(a,u)=>{var l;N("IndexedDbIndexManager",`Using index ${l=a,`id=${l.indexId}|cg=${l.collectionGroup}|f=${l.fields.map(f=>`${f.fieldPath}:${f.kind}`).join(",")}`} to execute ${Ai(n)}`);const c=function(f,y){const v=pp(y);if(v===void 0)return null;for(const T of ml(f,v.fieldPath))switch(T.op){case"array-contains-any":return T.value.arrayValue.values||[];case"array-contains":return[T.value]}return null}(u,a),h=function(f,y){const v=new Map;for(const T of ns(y))for(const k of ml(f,T.fieldPath))switch(k.op){case"==":case"in":v.set(T.fieldPath.canonicalString(),k.value);break;case"not-in":case"!=":return v.set(T.fieldPath.canonicalString(),k.value),Array.from(v.values())}return null}(u,a),d=function(f,y){const v=[];let T=!0;for(const E of ns(y)){let S,F=!0;for(const O of ml(f,E.fieldPath)){let q,Ae=!0;switch(O.op){case"<":case"<=":q="nullValue"in(k=O.value)?Dw:"booleanValue"in k?{booleanValue:!1}:"integerValue"in k||"doubleValue"in k?{doubleValue:NaN}:"timestampValue"in k?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in k?{stringValue:""}:"bytesValue"in k?{bytesValue:""}:"referenceValue"in k?Gs(Gn.empty(),x.empty()):"geoPointValue"in k?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in k?{arrayValue:{}}:"mapValue"in k?{mapValue:{}}:$();break;case"==":case"in":case">=":q=O.value;break;case">":q=O.value,Ae=!1;break;case"!=":case"not-in":q=Dw}$w(S,q)===q&&(S=q,F=Ae)}if(f.startAt!==null){for(let O=0;O<f.orderBy.length;++O)if(f.orderBy[O].field.isEqual(E.fieldPath)){const q=f.startAt.position[O];$w(S,q)===q&&(S=q,F=f.startAt.inclusive);break}}if(S===void 0)return null;v.push(S),T&&(T=F)}var k;return new xr(v,T)}(u,a),p=function(f,y){const v=[];let T=!0;for(const E of ns(y)){let S,F=!0;for(const O of ml(f,E.fieldPath)){let q,Ae=!0;switch(O.op){case">=":case">":q="nullValue"in(k=O.value)?{booleanValue:!1}:"booleanValue"in k?{doubleValue:NaN}:"integerValue"in k||"doubleValue"in k?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in k?{stringValue:""}:"stringValue"in k?{bytesValue:""}:"bytesValue"in k?Gs(Gn.empty(),x.empty()):"referenceValue"in k?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in k?{arrayValue:{}}:"arrayValue"in k?{mapValue:{}}:"mapValue"in k?Pw:$(),Ae=!1;break;case"==":case"in":case"<=":q=O.value;break;case"<":q=O.value,Ae=!1;break;case"!=":case"not-in":q=Pw}Uw(S,q)===q&&(S=q,F=Ae)}if(f.endAt!==null){for(let O=0;O<f.orderBy.length;++O)if(f.orderBy[O].field.isEqual(E.fieldPath)){const q=f.endAt.position[O];Uw(S,q)===q&&(S=q,F=f.endAt.inclusive);break}}if(S===void 0)return null;v.push(S),T&&(T=F)}var k;return new xr(v,T)}(u,a),m=this.je(a,u,d),I=this.je(a,u,p),R=this.We(a,u,h),g=this.ze(a.indexId,c,m,!!d&&d.inclusive,I,!!p&&p.inclusive,R);return _.forEach(g,f=>r.Kt(f,n.limit).next(y=>{y.forEach(v=>{o=o.add(new x(tn(v.documentKey)))})}))}).next(()=>o)}return _.resolve(null)})}Qe(e){let n=this.Ke.get(e);return n||(n=[e],this.Ke.set(e,n),n)}ze(e,n,r,i,s,o,a){const u=(n!=null?n.length:1)*Math.max(r!=null?r.length:1,s!=null?s.length:1),l=u/(n!=null?n.length:1),c=[];for(let h=0;h<u;++h){const d=n?this.He(n[h/l]):vl,p=r?this.Je(e,d,r[h%l],i):this.Ye(e),m=s?this.Xe(e,d,s[h%l],o):this.Ye(e+1);c.push(...this.createRange(p,m,a.map(I=>this.Je(e,d,I,!0))))}return c}Je(e,n,r,i){const s=new ar(e,x.empty(),n,r);return i?s:s.ke()}Xe(e,n,r,i){const s=new ar(e,x.empty(),n,r);return i?s.ke():s}Ye(e){return new ar(e,x.empty(),vl,vl)}getFieldIndex(e,n){const r=new C$(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{const o=s.filter(a=>r.$e(a));return o.sort((a,u)=>u.fields.length-a.fields.length),o.length>0?o[0]:null})}Ze(e,n){const r=new yl;for(const i of ns(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.Ne(i.kind);_s.fe.Zt(s,o)}return r.Se()}He(e){const n=new yl;return _s.fe.Zt(e,n.Ne(0)),n.Se()}We(e,n,r){if(r===null)return[];let i=[];i.push(new yl);let s=0;for(const o of ns(e)){const a=r[s++];for(const u of i)if(this.tn(n,o.fieldPath)&&Qa(a))i=this.en(i,o,a);else{const l=u.Ne(o.kind);_s.fe.Zt(a,l)}}return this.nn(i)}je(e,n,r){return r==null?null:this.We(e,n,r.position)}nn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].Se();return n}en(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const u=new yl;u.seed(a.Se()),_s.fe.Zt(o,u.Ne(n.kind)),s.push(u)}return s}tn(e,n){return!!e.filters.find(r=>r instanceof Ge&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=wl(e),i=_l(e);return(n?r.qt("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.qt()).next(s=>{const o=[];return _.forEach(s,a=>i.get([a.indexId,this.uid]).next(u=>{o.push(function(l,c){const h=c?new Oc(c.sequenceNumber,new Kn(Pi(c.readTime),new x(tn(c.documentKey)),c.largestBatchId)):Oc.empty(),d=l.fields.map(([p,m])=>new pM(Me.fromServerFormat(p),m));return new LS(l.indexId,l.collectionGroup,d,h)}(a,u))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:K(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=wl(e),s=_l(e);return this.sn(e).next(o=>i.qt("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>_.forEach(a,u=>s.put(function(l,c,h,d){return{indexId:l,uid:c.uid||"",sequenceNumber:h,readTime:xi(d.readTime),documentKey:$e(d.documentKey.path),largestBatchId:d.largestBatchId}}(u.indexId,this.user,o,r)))))}updateIndexEntries(e,n){const r=new Map;return _.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?_.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),_.forEach(a,u=>this.rn(e,i,u).next(l=>{const c=this.on(s,u);return l.isEqual(c)?_.resolve():this.un(e,s,l,c)}))))})}an(e,n,r){return Uo(e).put({indexId:r.indexId,uid:this.uid,arrayValue:r.arrayValue,directionalValue:r.directionalValue,documentKey:$e(n.key.path)})}cn(e,n,r){return Uo(e).delete([r.indexId,this.uid,r.arrayValue,r.directionalValue,$e(n.key.path)])}rn(e,n,r){const i=Uo(e);let s=new ae(Kr);return i.Wt({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,$e(n.path)])},(o,a)=>{s=s.add(new ar(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}on(e,n){let r=new ae(Kr);const i=this.Ze(n,e);if(i==null)return r;const s=pp(n);if(s!=null){const o=e.data.field(s.fieldPath);if(Qa(o))for(const a of o.arrayValue.values||[])r=r.add(new ar(n.indexId,e.key,this.He(a),i))}else r=r.add(new ar(n.indexId,e.key,vl,i));return r}un(e,n,r,i){N("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const s=[];return function(o,a,u,l,c){const h=o.getIterator(),d=a.getIterator();let p=Zi(h),m=Zi(d);for(;p||m;){let I=!1,R=!1;if(p&&m){const g=u(p,m);g<0?R=!0:g>0&&(I=!0)}else p!=null?R=!0:I=!0;I?(l(m),m=Zi(d)):R?(c(p),p=Zi(h)):(p=Zi(h),m=Zi(d))}}(r,i,Kr,o=>{s.push(this.an(e,n,o))},o=>{s.push(this.cn(e,n,o))}),_.waitFor(s)}sn(e){let n=1;return _l(e).Wt({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>Kr(o,a)).filter((o,a,u)=>!a||Kr(o,u[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=Kr(o,e),u=Kr(o,n);if(a===0)i[0]=e.ke();else if(a>0&&u<0)i.push(o),i.push(o.ke());else if(u>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2)s.push(IDBKeyRange.bound([i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,""],[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,""]));return s}}function u_(t){return ze(t,"collectionParents")}function Uo(t){return ze(t,"indexEntries")}function wl(t){return ze(t,"indexConfiguration")}function _l(t){return ze(t,"indexState")}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const l_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class It{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new It(e,It.DEFAULT_COLLECTION_PERCENTILE,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function vT(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const u=r.Wt({range:o},(c,h,d)=>(a++,d.delete()));s.push(u.next(()=>{z(a===1)}));const l=[];for(const c of n.mutations){const h=hT(e,c.key.path,n.batchId);s.push(i.delete(h)),l.push(c.key)}return _.waitFor(s).next(()=>l)}function Uc(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw $();e=t.noDocument}return JSON.stringify(e).length}/**
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
 */It.DEFAULT_COLLECTION_PERCENTILE=10,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,It.DEFAULT=new It(41943040,It.DEFAULT_COLLECTION_PERCENTILE,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),It.DISABLED=new It(-1,0,0);class Lg{constructor(e,n,r,i){this.userId=e,this.M=n,this.indexManager=r,this.referenceDelegate=i,this.hn={}}static Yt(e,n,r,i){z(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new Lg(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return rr(e).Wt({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=is(e),o=rr(e);return o.add({}).next(a=>{z(typeof a=="number");const u=new Ng(a,n,r,i),l=function(d,p,m){const I=m.baseMutations.map(g=>Za(d.Jt,g)),R=m.mutations.map(g=>Za(d.Jt,g));return{userId:p,batchId:m.batchId,localWriteTimeMs:m.localWriteTime.toMillis(),baseMutations:I,mutations:R}}(this.M,this.userId,u),c=[];let h=new ae((d,p)=>K(d.canonicalString(),p.canonicalString()));for(const d of i){const p=hT(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),c.push(o.put(l)),c.push(s.put(p,t$))}return h.forEach(d=>{c.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.hn[a]=u.keys()}),_.waitFor(c).next(()=>u)})}lookupMutationBatch(e,n){return rr(e).get(n).next(r=>r?(z(r.userId===this.userId),rs(this.M,r)):null)}ln(e,n){return this.hn[n]?_.resolve(this.hn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.hn[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return rr(e).Wt({index:"userMutationsIndex",range:i},(o,a,u)=>{a.userId===this.userId&&(z(a.batchId>=r),s=rs(this.M,a)),u.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return rr(e).Wt({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return rr(e).qt("userMutationsIndex",n).next(r=>r.map(i=>rs(this.M,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=zl(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return is(e).Wt({range:i},(o,a,u)=>{const[l,c,h]=o,d=tn(c);if(l===this.userId&&n.path.isEqual(d))return rr(e).get(h).next(p=>{if(!p)throw $();z(p.userId===this.userId),s.push(rs(this.M,p))});u.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ae(K);const i=[];return n.forEach(s=>{const o=zl(this.userId,s.path),a=IDBKeyRange.lowerBound(o),u=is(e).Wt({range:a},(l,c,h)=>{const[d,p,m]=l,I=tn(p);d===this.userId&&s.path.isEqual(I)?r=r.add(m):h.done()});i.push(u)}),_.waitFor(i).next(()=>this.fn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=zl(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new ae(K);return is(e).Wt({range:o},(u,l,c)=>{const[h,d,p]=u,m=tn(d);h===this.userId&&r.isPrefixOf(m)?m.length===i&&(a=a.add(p)):c.done()}).next(()=>this.fn(e,a))}fn(e,n){const r=[],i=[];return n.forEach(s=>{i.push(rr(e).get(s).next(o=>{if(o===null)throw $();z(o.userId===this.userId),r.push(rs(this.M,o))}))}),_.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return vT(e.Ht,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.dn(n.batchId)}),_.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}dn(e){delete this.hn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return _.resolve();const r=IDBKeyRange.lowerBound([this.userId]),i=[];return is(e).Wt({range:r},(s,o,a)=>{if(s[0]===this.userId){const u=tn(s[1]);i.push(u)}else a.done()}).next(()=>{z(i.length===0)})})}containsKey(e,n){return wT(e,this.userId,n)}_n(e){return _T(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function wT(t,e,n){const r=zl(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return is(t).Wt({range:s,jt:!0},(a,u,l)=>{const[c,h,d]=a;c===e&&h===i&&(o=!0),l.done()}).next(()=>o)}function rr(t){return ze(t,"mutations")}function is(t){return ze(t,"documentMutations")}function _T(t){return ze(t,"mutationQueues")}/**
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
 */class Di{constructor(e){this.wn=e}next(){return this.wn+=2,this.wn}static mn(){return new Di(0)}static gn(){return new Di(-1)}}/**
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
 */class N${constructor(e,n){this.referenceDelegate=e,this.M=n}allocateTargetId(e){return this.yn(e).next(n=>{const r=new Di(n.highestTargetId);return n.highestTargetId=r.next(),this.pn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.yn(e).next(n=>B.fromTimestamp(new _e(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.yn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.yn(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.pn(e,i)))}addTargetData(e,n){return this.In(e,n).next(()=>this.yn(e).next(r=>(r.targetCount+=1,this.Tn(n,r),this.pn(e,r))))}updateTargetData(e,n){return this.In(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>ts(e).delete(n.targetId)).next(()=>this.yn(e)).next(r=>(z(r.targetCount>0),r.targetCount-=1,this.pn(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return ts(e).Wt((o,a)=>{const u=Qo(a);u.sequenceNumber<=n&&r.get(u.targetId)===null&&(i++,s.push(this.removeTargetData(e,u)))}).next(()=>_.waitFor(s)).next(()=>i)}forEachTarget(e,n){return ts(e).Wt((r,i)=>{const s=Qo(i);n(s)})}yn(e){return c_(e).get("targetGlobalKey").next(n=>(z(n!==null),n))}pn(e,n){return c_(e).put("targetGlobalKey",n)}In(e,n){return ts(e).put(yT(this.M,n))}Tn(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.yn(e).next(n=>n.targetCount)}getTargetData(e,n){const r=Ai(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return ts(e).Wt({range:i,index:"queryTargetsIndex"},(o,a,u)=>{const l=Qo(a);ku(n,l.target)&&(s=l,u.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=cr(e);return n.forEach(o=>{const a=$e(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),_.waitFor(i)}removeMatchingKeys(e,n,r){const i=cr(e);return _.forEach(n,s=>{const o=$e(s.path);return _.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=cr(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=cr(e);let s=te();return i.Wt({range:r,jt:!0},(o,a,u)=>{const l=tn(o[1]),c=new x(l);s=s.add(c)}).next(()=>s)}containsKey(e,n){const r=$e(n.path),i=IDBKeyRange.bound([r],[NS(r)],!1,!0);let s=0;return cr(e).Wt({index:"documentTargetsIndex",jt:!0,range:i},([o,a],u,l)=>{o!==0&&(s++,l.done())}).next(()=>s>0)}Et(e,n){return ts(e).get(n).next(r=>r?Qo(r):null)}}function ts(t){return ze(t,"targets")}function c_(t){return ze(t,"targetGlobal")}function cr(t){return ze(t,"targetDocuments")}/**
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
 */async function ji(t){if(t.code!==w.FAILED_PRECONDITION||t.message!==pT)throw t;N("LocalStore","Unexpectedly lost primary lease")}/**
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
 */function h_([t,e],[n,r]){const i=K(t,n);return i===0?K(e,r):i}class b${constructor(e){this.En=e,this.buffer=new ae(h_),this.An=0}Rn(){return++this.An}bn(e){const n=[e,this.Rn()];if(this.buffer.size<this.En)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();h_(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class x${constructor(e,n){this.garbageCollector=e,this.asyncQueue=n,this.Pn=!1,this.Vn=null}start(e){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.vn(e)}stop(){this.Vn&&(this.Vn.cancel(),this.Vn=null)}get started(){return this.Vn!==null}vn(e){const n=this.Pn?3e5:6e4;N("LruGarbageCollector",`Garbage collection scheduled in ${n}ms`),this.Vn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",n,async()=>{this.Vn=null,this.Pn=!0;try{await e.collectGarbage(this.garbageCollector)}catch(r){zi(r)?N("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",r):await ji(r)}await this.vn(e)})}}class P${constructor(e,n){this.Sn=e,this.params=n}calculateTargetCount(e,n){return this.Sn.Dn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return _.resolve(Dt.A);const r=new b$(n);return this.Sn.forEachTarget(e,i=>r.bn(i.sequenceNumber)).next(()=>this.Sn.Cn(e,i=>r.bn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Sn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Sn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(N("LruGarbageCollector","Garbage collection skipped; disabled"),_.resolve(l_)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(N("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),l_):this.xn(e,n))}getCacheSize(e){return this.Sn.getCacheSize(e)}xn(e,n){let r,i,s,o,a,u,l;const c=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(N("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,n))).next(h=>(s=h,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(l=Date.now(),hp()<=Z.DEBUG&&N("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-c}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(u-a)+`ms
	Removed ${h} documents in `+(l-u)+`ms
Total Duration: ${l-c}ms`),_.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}/**
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
 */class D${constructor(e,n){this.db=e,this.garbageCollector=function(r,i){return new P$(r,i)}(this,n)}Dn(e){const n=this.Nn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}Nn(e){let n=0;return this.Cn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Cn(e,n){return this.kn(e,(r,i)=>n(i))}addReference(e,n,r){return Il(e,r)}removeReference(e,n,r){return Il(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return Il(e,n)}Mn(e,n){return function(r,i){let s=!1;return _T(r).zt(o=>wT(r,o,i).next(a=>(a&&(s=!0),_.resolve(!a)))).next(()=>s)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.kn(e,(o,a)=>{if(a<=n){const u=this.Mn(e,o).next(l=>{if(!l)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,B.min()),cr(e).delete([0,$e(o.path)])))});i.push(u)}}).next(()=>_.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return Il(e,n)}kn(e,n){const r=cr(e);let i,s=Dt.A;return r.Wt({index:"documentTargetsIndex"},([o,a],{path:u,sequenceNumber:l})=>{o===0?(s!==Dt.A&&n(new x(tn(i)),s),s=l,i=u):s=Dt.A}).next(()=>{s!==Dt.A&&n(new x(tn(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Il(t,e){return cr(t).put(function(n,r){return{targetId:0,path:$e(n.path),sequenceNumber:r}}(e,t.currentSequenceNumber))}/**
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
 */class IT{constructor(){this.changes=new zr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,se.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?_.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class O${constructor(e){this.M=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return Qr(e).put(r)}removeEntry(e,n,r){return Qr(e).delete(function(i,s){const o=i.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],$c(s),o[o.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.On(e,r)))}getEntry(e,n){let r=se.newInvalidDocument(n);return Qr(e).Wt({index:"documentKeyIndex",range:IDBKeyRange.only(Fo(n))},(i,s)=>{r=this.Fn(n,s)}).next(()=>r)}$n(e,n){let r={size:0,document:se.newInvalidDocument(n)};return Qr(e).Wt({index:"documentKeyIndex",range:IDBKeyRange.only(Fo(n))},(i,s)=>{r={document:this.Fn(n,s),size:Uc(s)}}).next(()=>r)}getEntries(e,n){let r=zt();return this.Bn(e,n,(i,s)=>{const o=this.Fn(i,s);r=r.insert(i,o)}).next(()=>r)}Ln(e,n){let r=zt(),i=new Ie(x.comparator);return this.Bn(e,n,(s,o)=>{const a=this.Fn(s,o);r=r.insert(s,a),i=i.insert(s,Uc(o))}).next(()=>({documents:r,Un:i}))}Bn(e,n,r){if(n.isEmpty())return _.resolve();let i=new ae(p_);n.forEach(u=>i=i.add(u));const s=IDBKeyRange.bound(Fo(i.first()),Fo(i.last())),o=i.getIterator();let a=o.getNext();return Qr(e).Wt({index:"documentKeyIndex",range:s},(u,l,c)=>{const h=x.fromSegments([...l.prefixPath,l.collectionGroup,l.documentId]);for(;a&&p_(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,l),a=o.hasNext()?o.getNext():null),a?c.Ut(Fo(a)):c.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getAllFromCollection(e,n,r){const i=[n.popLast().toArray(),n.lastSegment(),$c(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],s=[n.popLast().toArray(),n.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Qr(e).qt(IDBKeyRange.bound(i,s,!0)).next(o=>{let a=zt();for(const u of o){const l=this.Fn(x.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);a=a.insert(l.key,l)}return a})}getAllFromCollectionGroup(e,n,r,i){let s=zt();const o=f_(n,r),a=f_(n,Kn.max());return Qr(e).Wt({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(u,l,c)=>{const h=this.Fn(x.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);s=s.insert(h.key,h),s.size===i&&c.done()}).next(()=>s)}newChangeBuffer(e){return new L$(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return d_(e).get("remoteDocumentGlobalKey").next(n=>(z(!!n),n))}On(e,n){return d_(e).put("remoteDocumentGlobalKey",n)}Fn(e,n){if(n){const r=_$(this.M,n);if(!(r.isNoDocument()&&r.version.isEqual(B.min())))return r}return se.newInvalidDocument(e)}}class L$ extends IT{constructor(e,n){super(),this.qn=e,this.trackRemovals=n,this.Gn=new zr(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new ae((s,o)=>K(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.Gn.get(s);if(n.push(this.qn.removeEntry(e,s,a.readTime)),o.isValidDocument()){const u=n_(this.qn.M,o);i=i.add(s.path.popLast()),r+=Uc(u)-a.size,n.push(this.qn.addEntry(e,s,u))}else if(r-=a.size,this.trackRemovals){const u=n_(this.qn.M,o.convertToNoDocument(B.min()));n.push(this.qn.addEntry(e,s,u))}}),i.forEach(s=>{n.push(this.qn.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.qn.updateMetadata(e,r)),_.waitFor(n)}getFromCache(e,n){return this.qn.$n(e,n).next(r=>(this.Gn.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.qn.Ln(e,n).next(({documents:r,Un:i})=>(i.forEach((s,o)=>{this.Gn.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function d_(t){return ze(t,"remoteDocumentGlobal")}function Qr(t){return ze(t,"remoteDocumentsV14")}function Fo(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function f_(t,e){const n=e.documentKey.path.toArray();return[t,$c(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function p_(t,e){const n=t.path.length-e.path.length;return n!==0?n:x.comparator(t,e)}/**
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
 */class M${constructor(e){this.M=e}kt(e,n,r,i){const s=new Vh("createOrUpgrade",n);r<1&&i>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Zw,{unique:!0}),a.createObjectStore("documentMutations")}(e),m_(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=_.resolve();return r<3&&i>=3&&(r!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),m_(e)),o=o.next(()=>function(a){const u=a.store("targetGlobal"),l={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:B.min().toTimestamp(),targetCount:0};return u.put("targetGlobalKey",l)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(a,u){return u.store("mutations").qt().next(l=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Zw,{unique:!0});const c=u.store("mutations"),h=l.map(d=>c.put(d));return _.waitFor(h)})}(e,s))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Kn(s))),r<6&&i>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.Qn(s)))),r<7&&i>=7&&(o=o.next(()=>this.jn(s))),r<8&&i>=8&&(o=o.next(()=>this.Wn(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.zn(s))),r<11&&i>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(a){const u=a.createObjectStore("documentOverlays",{keyPath:f$});u.createIndex("collectionPathOverlayIndex",p$,{unique:!1}),u.createIndex("collectionGroupOverlayIndex",m$,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(a){const u=a.createObjectStore("remoteDocumentsV14",{keyPath:n$});u.createIndex("documentKeyIndex",r$),u.createIndex("collectionGroupIndex",i$)}(e)).next(()=>this.Hn(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>{(function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:l$}).createIndex("sequenceNumberIndex",c$,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:h$}).createIndex("documentKeyIndex",d$,{unique:!1})})(e)})),o}Qn(e){let n=0;return e.store("remoteDocuments").Wt((r,i)=>{n+=Uc(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Kn(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.qt().next(i=>_.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.qt("userMutationsIndex",o).next(a=>_.forEach(a,u=>{z(u.userId===s.userId);const l=rs(this.M,u);return vT(e,s.userId,l).next(()=>{})}))}))}jn(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.Wt((o,a)=>{const u=new J(o),l=function(c){return[0,$e(c)]}(u);s.push(n.get(l).next(c=>c?_.resolve():(h=>n.put({targetId:0,path:$e(h),sequenceNumber:i.highestListenSequenceNumber}))(u)))}).next(()=>_.waitFor(s))})}Wn(e,n){e.createObjectStore("collectionParents",{keyPath:u$});const r=n.store("collectionParents"),i=new Og,s=o=>{if(i.add(o)){const a=o.lastSegment(),u=o.popLast();return r.put({collectionId:a,parent:$e(u)})}};return n.store("remoteDocuments").Wt({jt:!0},(o,a)=>{const u=new J(o);return s(u.popLast())}).next(()=>n.store("documentMutations").Wt({jt:!0},([o,a,u],l)=>{const c=tn(a);return s(c.popLast())}))}zn(e){const n=e.store("targets");return n.Wt((r,i)=>{const s=Qo(i),o=yT(this.M,s);return n.put(o)})}Hn(e,n){const r=n.store("remoteDocuments"),i=[];return r.Wt((s,o)=>{const a=n.store("remoteDocumentsV14"),u=(l=o,l.document?new x(J.fromString(l.document.name).popFirst(5)):l.noDocument?x.fromSegments(l.noDocument.path):l.unknownDocument?x.fromSegments(l.unknownDocument.path):$()).path.toArray();var l;/**
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
*/const c={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(c))}).next(()=>_.waitFor(i))}}function m_(t){t.createObjectStore("targetDocuments",{keyPath:o$}).createIndex("documentTargetsIndex",a$,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",s$,{unique:!0}),t.createObjectStore("targetGlobal")}const Kd="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Mg{constructor(e,n,r,i,s,o,a,u,l,c,h=13){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.Jn=s,this.window=o,this.document=a,this.Yn=l,this.Xn=c,this.Zn=h,this.ts=null,this.es=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ns=null,this.inForeground=!1,this.ss=null,this.rs=null,this.os=Number.NEGATIVE_INFINITY,this.us=d=>Promise.resolve(),!Mg.vt())throw new C(w.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new D$(this,i),this.cs=n+"main",this.M=new gT(u),this.hs=new nn(this.cs,this.Zn,new M$(this.M)),this.ls=new N$(this.referenceDelegate,this.M),this.fs=function(d){return new O$(d)}(this.M),this.ds=new I$,this.window&&this.window.localStorage?this._s=this.window.localStorage:(this._s=null,c===!1&&Te("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.ws().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new C(w.FAILED_PRECONDITION,Kd);return this.gs(),this.ys(),this.ps(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.ls.getHighestSequenceNumber(e))}).then(e=>{this.ts=new Dt(e,this.Yn)}).then(()=>{this.es=!0}).catch(e=>(this.hs&&this.hs.close(),Promise.reject(e)))}Is(e){return this.us=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.hs.Ot(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Jn.enqueueAndForget(async()=>{this.started&&await this.ws()}))}ws(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>El(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Ts(e).next(n=>{n||(this.isPrimary=!1,this.Jn.enqueueRetryable(()=>this.us(!1)))})}).next(()=>this.Es(e)).next(n=>this.isPrimary&&!n?this.As(e).next(()=>!1):!!n&&this.Rs(e).next(()=>!0))).catch(e=>{if(zi(e))return N("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return N("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Jn.enqueueRetryable(()=>this.us(e)),this.isPrimary=e})}Ts(e){return Vo(e).get("owner").next(n=>_.resolve(this.bs(n)))}Ps(e){return El(e).delete(this.clientId)}async Vs(){if(this.isPrimary&&!this.vs(this.os,18e5)){this.os=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=ze(n,"clientMetadata");return r.qt().next(i=>{const s=this.Ss(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return _.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this._s)for(const n of e)this._s.removeItem(this.Ds(n.clientId))}}ps(){this.rs=this.Jn.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.ws().then(()=>this.Vs()).then(()=>this.ps()))}bs(e){return!!e&&e.ownerId===this.clientId}Es(e){return this.Xn?_.resolve(!0):Vo(e).get("owner").next(n=>{if(n!==null&&this.vs(n.leaseTimestampMs,5e3)&&!this.Cs(n.ownerId)){if(this.bs(n)&&this.networkEnabled)return!0;if(!this.bs(n)){if(!n.allowTabSynchronization)throw new C(w.FAILED_PRECONDITION,Kd);return!1}}return!(!this.networkEnabled||!this.inForeground)||El(e).qt().next(r=>this.Ss(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&N("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.es=!1,this.xs(),this.rs&&(this.rs.cancel(),this.rs=null),this.Ns(),this.ks(),await this.hs.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new t_(e,Dt.A);return this.As(n).next(()=>this.Ps(n))}),this.hs.close(),this.Ms()}Ss(e,n){return e.filter(r=>this.vs(r.updateTimeMs,n)&&!this.Cs(r.clientId))}Os(){return this.runTransaction("getActiveClients","readonly",e=>El(e).qt().next(n=>this.Ss(n,18e5).map(r=>r.clientId)))}get started(){return this.es}getMutationQueue(e,n){return Lg.Yt(e,this.M,n,this.referenceDelegate)}getTargetCache(){return this.ls}getRemoteDocumentCache(){return this.fs}getIndexManager(e){return new A$(e)}getDocumentOverlayCache(e){return Dg.Yt(this.M,e)}getBundleCache(){return this.ds}runTransaction(e,n,r){N("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=(o=this.Zn)===14?y$:o===13?fT:o===12?g$:o===11?dT:void $();var o;let a;return this.hs.runTransaction(e,i,s,u=>(a=new t_(u,this.ts?this.ts.next():Dt.A),n==="readwrite-primary"?this.Ts(a).next(l=>!!l||this.Es(a)).next(l=>{if(!l)throw Te(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Jn.enqueueRetryable(()=>this.us(!1)),new C(w.FAILED_PRECONDITION,pT);return r(a)}).next(l=>this.Rs(a).next(()=>l)):this.Fs(a).next(()=>r(a)))).then(u=>(a.raiseOnCommittedEvent(),u))}Fs(e){return Vo(e).get("owner").next(n=>{if(n!==null&&this.vs(n.leaseTimestampMs,5e3)&&!this.Cs(n.ownerId)&&!this.bs(n)&&!(this.Xn||this.allowTabSynchronization&&n.allowTabSynchronization))throw new C(w.FAILED_PRECONDITION,Kd)})}Rs(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Vo(e).put("owner",n)}static vt(){return nn.vt()}As(e){const n=Vo(e);return n.get("owner").next(r=>this.bs(r)?(N("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):_.resolve())}vs(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(Te(`Detected an update time that is in the future: ${e} > ${r}`),!1))}gs(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ss=()=>{this.Jn.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.ws()))},this.document.addEventListener("visibilitychange",this.ss),this.inForeground=this.document.visibilityState==="visible")}Ns(){this.ss&&(this.document.removeEventListener("visibilitychange",this.ss),this.ss=null)}ys(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ns=()=>{this.xs(),hA()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Jn.enterRestrictedMode(!0),this.Jn.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ns))}ks(){this.ns&&(this.window.removeEventListener("pagehide",this.ns),this.ns=null)}Cs(e){var n;try{const r=((n=this._s)===null||n===void 0?void 0:n.getItem(this.Ds(e)))!==null;return N("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Te("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}xs(){if(this._s)try{this._s.setItem(this.Ds(this.clientId),String(Date.now()))}catch(e){Te("Failed to set zombie client id.",e)}}Ms(){if(this._s)try{this._s.removeItem(this.Ds(this.clientId))}catch{}}Ds(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Vo(t){return ze(t,"owner")}function El(t){return ze(t,"clientMetadata")}function $g(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
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
 */class $${constructor(e,n,r){this.fs=e,this.$s=n,this.indexManager=r}Bs(e,n){return this.$s.getAllMutationBatchesAffectingDocumentKey(e,n).next(r=>this.Ls(e,n,r))}Ls(e,n,r){return this.fs.getEntry(e,n).next(i=>{for(const s of r)s.applyToLocalView(i);return i})}Us(e,n){e.forEach((r,i)=>{for(const s of n)s.applyToLocalView(i)})}qs(e,n){return this.fs.getEntries(e,n).next(r=>this.Gs(e,r).next(()=>r))}Gs(e,n){return this.$s.getAllMutationBatchesAffectingDocumentKeys(e,n).next(r=>this.Us(n,r))}Ks(e,n,r){return function(i){return x.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.Qs(e,n.path):Tg(n)?this.js(e,n,r):this.Ws(e,n,r)}Qs(e,n){return this.Bs(e,new x(n)).next(r=>{let i=yp();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}js(e,n,r){const i=n.collectionGroup;let s=yp();return this.indexManager.getCollectionParents(e,i).next(o=>_.forEach(o,a=>{const u=function(l,c){return new er(c,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.Ws(e,u,r).next(l=>{l.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}Ws(e,n,r){let i;return this.fs.getAllFromCollection(e,n.path,r).next(s=>(i=s,this.$s.getAllMutationBatchesAffectingQuery(e,n))).next(s=>{for(const o of s)for(const a of o.mutations){const u=a.key;let l=i.get(u);l==null&&(l=se.newInvalidDocument(u),i=i.insert(u,l)),gp(a,l,o.localWriteTime),l.isFoundDocument()||(i=i.remove(u))}}).next(()=>(i.forEach((s,o)=>{kg(n,o)||(i=i.remove(s))}),i))}}/**
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
 */class Ug{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.zs=r,this.Hs=i}static Js(e,n){let r=te(),i=te();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Ug(e,n.fromCache,r,i)}}/**
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
 */class ET{Ys(e){this.Xs=e}Ks(e,n,r,i){return function(s){return s.filters.length===0&&s.limit===null&&s.startAt==null&&s.endAt==null&&(s.explicitOrderBy.length===0||s.explicitOrderBy.length===1&&s.explicitOrderBy[0].field.isKeyField())}(n)||r.isEqual(B.min())?this.Zs(e,n):this.Xs.qs(e,i).next(s=>{const o=this.ti(n,s);return(Vl(n)||Mc(n))&&this.ei(n.limitType,o,i,r)?this.Zs(e,n):(hp()<=Z.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),mp(n)),this.Xs.Ks(e,n,MS(r,-1)).next(a=>(o.forEach(u=>{a=a.insert(u.key,u)}),a)))})}ti(e,n){let r=new ae(qS(e));return n.forEach((i,s)=>{kg(e,s)&&(r=r.add(s))}),r}ei(e,n,r,i){if(r.size!==n.size)return!0;const s=e==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Zs(e,n){return hp()<=Z.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",mp(n)),this.Xs.Ks(e,n,Kn.min())}}/**
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
 */class U${constructor(e,n,r,i){this.persistence=e,this.ni=n,this.M=i,this.si=new Ie(K),this.ii=new zr(s=>Ai(s),ku),this.ri=new Map,this.oi=e.getRemoteDocumentCache(),this.ls=e.getTargetCache(),this.ds=e.getBundleCache(),this.ui(r)}ui(e){this.indexManager=this.persistence.getIndexManager(e),this.$s=this.persistence.getMutationQueue(e,this.indexManager),this.ai=new $$(this.oi,this.$s,this.indexManager),this.oi.setIndexManager(this.indexManager),this.ni.Ys(this.ai)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.si))}}function ST(t,e,n,r){return new U$(t,e,n,r)}async function TT(t,e){const n=P(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.$s.getAllMutationBatches(r).next(s=>(i=s,n.ui(e),n.$s.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=te();for(const l of i){o.push(l.batchId);for(const c of l.mutations)u=u.add(c.key)}for(const l of s){a.push(l.batchId);for(const c of l.mutations)u=u.add(c.key)}return n.ai.qs(r,u).next(l=>({ci:l,removedBatchIds:o,addedBatchIds:a}))})})}function F$(t,e){const n=P(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.oi.newChangeBuffer({trackRemovals:!0});return function(o,a,u,l){const c=u.batch,h=c.keys();let d=_.resolve();return h.forEach(p=>{d=d.next(()=>l.getEntry(a,p)).next(m=>{const I=u.docVersions.get(p);z(I!==null),m.version.compareTo(I)<0&&(c.applyToRemoteDocument(m,u),m.isValidDocument()&&(m.setReadTime(u.commitVersion),l.addEntry(m)))})}),d.next(()=>o.$s.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.$s.performConsistencyCheck(r)).next(()=>n.ai.qs(r,i))})}function kT(t){const e=P(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.ls.getLastRemoteSnapshotVersion(n))}function V$(t,e){const n=P(t),r=e.snapshotVersion;let i=n.si;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.oi.newChangeBuffer({trackRemovals:!0});i=n.si;const a=[];e.targetChanges.forEach((l,c)=>{const h=i.get(c);if(!h)return;a.push(n.ls.removeMatchingKeys(s,l.removedDocuments,c).next(()=>n.ls.addMatchingKeys(s,l.addedDocuments,c)));let d=h.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(c)?d=d.withResumeToken(xe.EMPTY_BYTE_STRING,B.min()).withLastLimboFreeSnapshotVersion(B.min()):l.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(l.resumeToken,r)),i=i.insert(c,d),function(p,m,I){return p.resumeToken.approximateByteSize()===0||m.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(h,d,l)&&a.push(n.ls.updateTargetData(s,d))});let u=zt();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,l))}),a.push(CT(s,o,e.documentUpdates).next(l=>{u=l})),!r.isEqual(B.min())){const l=n.ls.getLastRemoteSnapshotVersion(s).next(c=>n.ls.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(l)}return _.waitFor(a).next(()=>o.apply(s)).next(()=>n.ai.Gs(s,u)).next(()=>u)}).then(s=>(n.si=i,s))}function CT(t,e,n){let r=te();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let s=zt();return n.forEach((o,a)=>{const u=i.get(o);a.isNoDocument()&&a.version.isEqual(B.min())?(e.removeEntry(o,a.readTime),s=s.insert(o,a)):!u.isValidDocument()||a.version.compareTo(u.version)>0||a.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(a),s=s.insert(o,a)):N("LocalStore","Ignoring outdated watch update for ",o,". Current version:",u.version," Watch version:",a.version)}),s})}function B$(t,e){const n=P(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.$s.getNextMutationBatchAfterBatchId(r,e)))}function Js(t,e){const n=P(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.ls.getTargetData(r,e).next(s=>s?(i=s,_.resolve(i)):n.ls.allocateTargetId(r).next(o=>(i=new Ir(e,o,0,r.currentSequenceNumber),n.ls.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.si.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.si=n.si.insert(r.targetId,r),n.ii.set(e,r.targetId)),r})}async function Xs(t,e,n){const r=P(t),i=r.si.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!zi(o))throw o;N("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.si=r.si.remove(e),r.ii.delete(i.target)}function Fc(t,e,n){const r=P(t);let i=B.min(),s=te();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,u,l){const c=P(a),h=c.ii.get(l);return h!==void 0?_.resolve(c.si.get(h)):c.ls.getTargetData(u,l)}(r,o,Xt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.ls.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.ni.Ks(o,e,n?i:B.min(),n?s:te())).next(a=>(NT(r,BS(e),a),{documents:a,hi:s})))}function RT(t,e){const n=P(t),r=P(n.ls),i=n.si.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r.Et(s,e).next(o=>o?o.target:null))}function AT(t,e){const n=P(t),r=n.ri.get(e)||B.min();return n.persistence.runTransaction("Get new document changes","readonly",i=>n.oi.getAllFromCollectionGroup(i,e,MS(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(NT(n,e,i),i))}function NT(t,e,n){let r=B.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ri.set(e,r)}async function q$(t,e,n,r){const i=P(t);let s=te(),o=zt();for(const l of n){const c=e.li(l.metadata.name);l.document&&(s=s.add(c));const h=e.fi(l);h.setReadTime(e.di(l.metadata.readTime)),o=o.insert(c,h)}const a=i.oi.newChangeBuffer({trackRemovals:!0}),u=await Js(i,function(l){return Xt(yo(J.fromString(`__bundle__/docs/${l}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",l=>CT(l,a,o).next(c=>(a.apply(l),c)).next(c=>i.ls.removeMatchingKeysForTargetId(l,u.targetId).next(()=>i.ls.addMatchingKeys(l,s,u.targetId)).next(()=>i.ai.Gs(l,c)).next(()=>c)))}async function z$(t,e,n=te()){const r=await Js(t,Xt(Pg(e.bundledQuery))),i=P(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=Fe(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.ds.saveNamedQuery(s,e);const a=r.withResumeToken(xe.EMPTY_BYTE_STRING,o);return i.si=i.si.insert(a.targetId,a),i.ls.updateTargetData(s,a).next(()=>i.ls.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.ls.addMatchingKeys(s,n,r.targetId)).next(()=>i.ds.saveNamedQuery(s,e))})}/**
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
 */class j${constructor(e){this.M=e,this._i=new Map,this.wi=new Map}getBundleMetadata(e,n){return _.resolve(this._i.get(n))}saveBundleMetadata(e,n){var r;return this._i.set(n.id,{id:(r=n).id,version:r.version,createTime:Fe(r.createTime)}),_.resolve()}getNamedQuery(e,n){return _.resolve(this.wi.get(n))}saveNamedQuery(e,n){return this.wi.set(n.name,function(r){return{name:r.name,query:Pg(r.bundledQuery),readTime:Fe(r.readTime)}}(n)),_.resolve()}}/**
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
 */class W${constructor(){this.overlays=new Ie(x.comparator),this.mi=new Map}getOverlay(e,n){return _.resolve(this.overlays.get(n))}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.Xt(e,n,s)}),_.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.mi.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.mi.delete(r)),_.resolve()}getOverlaysForCollection(e,n,r){const i=la(),s=n.length+1,o=new x(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,l=u.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return _.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ie((l,c)=>l-c);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let c=s.get(l.largestBatchId);c===null&&(c=la(),s=s.insert(l.largestBatchId,c)),c.set(l.getKey(),l)}}const a=la(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((l,c)=>a.set(l,c)),!(a.size()>=i)););return _.resolve(a)}Xt(e,n,r){if(r===null)return;const i=this.overlays.get(r.key);if(i!==null){const o=this.mi.get(i.largestBatchId).delete(r.key);this.mi.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new xg(n,r));let s=this.mi.get(n);s===void 0&&(s=te(),this.mi.set(n,s)),this.mi.set(n,s.add(r.key))}}/**
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
 */class Fg{constructor(){this.gi=new ae(Oe.yi),this.pi=new ae(Oe.Ii)}isEmpty(){return this.gi.isEmpty()}addReference(e,n){const r=new Oe(e,n);this.gi=this.gi.add(r),this.pi=this.pi.add(r)}Ti(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ei(new Oe(e,n))}Ai(e,n){e.forEach(r=>this.removeReference(r,n))}Ri(e){const n=new x(new J([])),r=new Oe(n,e),i=new Oe(n,e+1),s=[];return this.pi.forEachInRange([r,i],o=>{this.Ei(o),s.push(o.key)}),s}bi(){this.gi.forEach(e=>this.Ei(e))}Ei(e){this.gi=this.gi.delete(e),this.pi=this.pi.delete(e)}Pi(e){const n=new x(new J([])),r=new Oe(n,e),i=new Oe(n,e+1);let s=te();return this.pi.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Oe(e,0),r=this.gi.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Oe{constructor(e,n){this.key=e,this.Vi=n}static yi(e,n){return x.comparator(e.key,n.key)||K(e.Vi,n.Vi)}static Ii(e,n){return K(e.Vi,n.Vi)||x.comparator(e.key,n.key)}}/**
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
 */class H${constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.$s=[],this.vi=1,this.Si=new ae(Oe.yi)}checkEmpty(e){return _.resolve(this.$s.length===0)}addMutationBatch(e,n,r,i){const s=this.vi;this.vi++,this.$s.length>0&&this.$s[this.$s.length-1];const o=new Ng(s,n,r,i);this.$s.push(o);for(const a of i)this.Si=this.Si.add(new Oe(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return _.resolve(o)}lookupMutationBatch(e,n){return _.resolve(this.Di(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Ci(r),s=i<0?0:i;return _.resolve(this.$s.length>s?this.$s[s]:null)}getHighestUnacknowledgedBatchId(){return _.resolve(this.$s.length===0?-1:this.vi-1)}getAllMutationBatches(e){return _.resolve(this.$s.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Oe(n,0),i=new Oe(n,Number.POSITIVE_INFINITY),s=[];return this.Si.forEachInRange([r,i],o=>{const a=this.Di(o.Vi);s.push(a)}),_.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ae(K);return n.forEach(i=>{const s=new Oe(i,0),o=new Oe(i,Number.POSITIVE_INFINITY);this.Si.forEachInRange([s,o],a=>{r=r.add(a.Vi)})}),_.resolve(this.xi(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;x.isDocumentKey(s)||(s=s.child(""));const o=new Oe(new x(s),0);let a=new ae(K);return this.Si.forEachWhile(u=>{const l=u.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(a=a.add(u.Vi)),!0)},o),_.resolve(this.xi(a))}xi(e){const n=[];return e.forEach(r=>{const i=this.Di(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){z(this.Ni(n.batchId,"removed")===0),this.$s.shift();let r=this.Si;return _.forEach(n.mutations,i=>{const s=new Oe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Si=r})}dn(e){}containsKey(e,n){const r=new Oe(n,0),i=this.Si.firstAfterOrEqual(r);return _.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.$s.length,_.resolve()}Ni(e,n){return this.Ci(e)}Ci(e){return this.$s.length===0?0:e-this.$s[0].batchId}Di(e){const n=this.Ci(e);return n<0||n>=this.$s.length?null:this.$s[n]}}/**
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
 */class G${constructor(e){this.ki=e,this.docs=new Ie(x.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ki(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return _.resolve(r?r.document.mutableCopy():se.newInvalidDocument(n))}getEntries(e,n){let r=zt();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():se.newInvalidDocument(i))}),_.resolve(r)}getAllFromCollection(e,n,r){let i=zt();const s=new x(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:u}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||gM(mM(u),r)<=0||(i=i.insert(u.key,u.mutableCopy()))}return _.resolve(i)}getAllFromCollectionGroup(e,n,r,i){$()}Mi(e,n){return _.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new K$(this)}getSize(e){return _.resolve(this.size)}}class K$ extends IT{constructor(e){super(),this.qn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.qn.addEntry(e,i)):this.qn.removeEntry(r)}),_.waitFor(n)}getFromCache(e,n){return this.qn.getEntry(e,n)}getAllFromCache(e,n){return this.qn.getEntries(e,n)}}/**
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
 */class Q${constructor(e){this.persistence=e,this.Oi=new zr(n=>Ai(n),ku),this.lastRemoteSnapshotVersion=B.min(),this.highestTargetId=0,this.Fi=0,this.$i=new Fg,this.targetCount=0,this.Bi=Di.mn()}forEachTarget(e,n){return this.Oi.forEach((r,i)=>n(i)),_.resolve()}getLastRemoteSnapshotVersion(e){return _.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return _.resolve(this.Fi)}allocateTargetId(e){return this.highestTargetId=this.Bi.next(),_.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Fi&&(this.Fi=n),_.resolve()}In(e){this.Oi.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Bi=new Di(n),this.highestTargetId=n),e.sequenceNumber>this.Fi&&(this.Fi=e.sequenceNumber)}addTargetData(e,n){return this.In(n),this.targetCount+=1,_.resolve()}updateTargetData(e,n){return this.In(n),_.resolve()}removeTargetData(e,n){return this.Oi.delete(n.target),this.$i.Ri(n.targetId),this.targetCount-=1,_.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Oi.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Oi.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),_.waitFor(s).next(()=>i)}getTargetCount(e){return _.resolve(this.targetCount)}getTargetData(e,n){const r=this.Oi.get(n)||null;return _.resolve(r)}addMatchingKeys(e,n,r){return this.$i.Ti(n,r),_.resolve()}removeMatchingKeys(e,n,r){this.$i.Ai(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),_.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.$i.Ri(n),_.resolve()}getMatchingKeysForTargetId(e,n){const r=this.$i.Pi(n);return _.resolve(r)}containsKey(e,n){return _.resolve(this.$i.containsKey(n))}}/**
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
 */class Y${constructor(e,n){this.Li={},this.overlays={},this.ts=new Dt(0),this.es=!1,this.es=!0,this.referenceDelegate=e(this),this.ls=new Q$(this),this.indexManager=new R$,this.fs=function(r){return new G$(r)}(r=>this.referenceDelegate.Ui(r)),this.M=new gT(n),this.ds=new j$(this.M)}start(){return Promise.resolve()}shutdown(){return this.es=!1,Promise.resolve()}get started(){return this.es}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new W$,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Li[e.toKey()];return r||(r=new H$(n,this.referenceDelegate),this.Li[e.toKey()]=r),r}getTargetCache(){return this.ls}getRemoteDocumentCache(){return this.fs}getBundleCache(){return this.ds}runTransaction(e,n,r){N("MemoryPersistence","Starting transaction:",e);const i=new J$(this.ts.next());return this.referenceDelegate.qi(),r(i).next(s=>this.referenceDelegate.Gi(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ki(e,n){return _.or(Object.values(this.Li).map(r=>()=>r.containsKey(e,n)))}}class J$ extends mT{constructor(e){super(),this.currentSequenceNumber=e}}class Vg{constructor(e){this.persistence=e,this.Qi=new Fg,this.ji=null}static Wi(e){return new Vg(e)}get zi(){if(this.ji)return this.ji;throw $()}addReference(e,n,r){return this.Qi.addReference(r,n),this.zi.delete(r.toString()),_.resolve()}removeReference(e,n,r){return this.Qi.removeReference(r,n),this.zi.add(r.toString()),_.resolve()}markPotentiallyOrphaned(e,n){return this.zi.add(n.toString()),_.resolve()}removeTarget(e,n){this.Qi.Ri(n.targetId).forEach(i=>this.zi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.zi.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}qi(){this.ji=new Set}Gi(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return _.forEach(this.zi,r=>{const i=x.fromPath(r);return this.Hi(e,i).next(s=>{s||n.removeEntry(i,B.min())})}).next(()=>(this.ji=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hi(e,n).next(r=>{r?this.zi.delete(n.toString()):this.zi.add(n.toString())})}Ui(e){return 0}Hi(e,n){return _.or([()=>_.resolve(this.Qi.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ki(e,n)])}}/**
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
 */function g_(t,e){return`firestore_clients_${t}_${e}`}function y_(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Qd(t,e){return`firestore_targets_${t}_${e}`}class Vc{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static Ji(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new C(i.error.code,i.error.message))),o?new Vc(e,n,i.state,s):(Te("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}Yi(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class ha{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static Ji(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new C(r.error.code,r.error.message))),s?new ha(e,r.state,i):(Te("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}Yi(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Bc{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static Ji(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=Fh();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=PS(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new Bc(e,s):(Te("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class Bg{constructor(e,n){this.clientId=e,this.onlineState=n}static Ji(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new Bg(n.clientId,n.onlineState):(Te("SharedClientState",`Failed to parse online state: ${e}`),null)}}class _p{constructor(){this.activeTargetIds=Fh()}Xi(e){this.activeTargetIds=this.activeTargetIds.add(e)}Zi(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Yi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Yd{constructor(e,n,r,i,s){this.window=e,this.Jn=n,this.persistenceKey=r,this.tr=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.er=this.nr.bind(this),this.sr=new Ie(K),this.started=!1,this.ir=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.rr=g_(this.persistenceKey,this.tr),this.ur=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.sr=this.sr.insert(this.tr,new _p),this.ar=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.cr=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.hr=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.lr=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.dr=function(a){return`firestore_bundle_loaded_v2_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this.er)}static vt(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Os();for(const r of e){if(r===this.tr)continue;const i=this.getItem(g_(this.persistenceKey,r));if(i){const s=Bc.Ji(r,i);s&&(this.sr=this.sr.insert(s.clientId,s))}}this._r();const n=this.storage.getItem(this.lr);if(n){const r=this.wr(n);r&&this.mr(r)}for(const r of this.ir)this.nr(r);this.ir=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.ur,JSON.stringify(e))}getAllActiveQueryTargets(){return this.gr(this.sr)}isActiveQueryTarget(e){let n=!1;return this.sr.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.yr(e,"pending")}updateMutationState(e,n,r){this.yr(e,n,r),this.pr(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(Qd(this.persistenceKey,e));if(r){const i=ha.Ji(e,r);i&&(n=i.state)}}return this.Ir.Xi(e),this._r(),n}removeLocalQueryTarget(e){this.Ir.Zi(e),this._r()}isLocalQueryTarget(e){return this.Ir.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Qd(this.persistenceKey,e))}updateQueryState(e,n,r){this.Tr(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.pr(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Er(e)}notifyBundleLoaded(e){this.Ar(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.er),this.removeItem(this.rr),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return N("SharedClientState","READ",e,n),n}setItem(e,n){N("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){N("SharedClientState","REMOVE",e),this.storage.removeItem(e)}nr(e){const n=e;if(n.storageArea===this.storage){if(N("SharedClientState","EVENT",n.key,n.newValue),n.key===this.rr)return void Te("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Jn.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.ar.test(n.key)){if(n.newValue==null){const r=this.Rr(n.key);return this.br(r,null)}{const r=this.Pr(n.key,n.newValue);if(r)return this.br(r.clientId,r)}}else if(this.cr.test(n.key)){if(n.newValue!==null){const r=this.Vr(n.key,n.newValue);if(r)return this.vr(r)}}else if(this.hr.test(n.key)){if(n.newValue!==null){const r=this.Sr(n.key,n.newValue);if(r)return this.Dr(r)}}else if(n.key===this.lr){if(n.newValue!==null){const r=this.wr(n.newValue);if(r)return this.mr(r)}}else if(n.key===this.ur){const r=function(i){let s=Dt.A;if(i!=null)try{const o=JSON.parse(i);z(typeof o=="number"),s=o}catch(o){Te("SharedClientState","Failed to read sequence number from WebStorage",o)}return s}(n.newValue);r!==Dt.A&&this.sequenceNumberHandler(r)}else if(n.key===this.dr){const r=this.Cr(n.newValue);await Promise.all(r.map(i=>this.syncEngine.Nr(i)))}}}else this.ir.push(n)})}}get Ir(){return this.sr.get(this.tr)}_r(){this.setItem(this.rr,this.Ir.Yi())}yr(e,n,r){const i=new Vc(this.currentUser,e,n,r),s=y_(this.persistenceKey,this.currentUser,e);this.setItem(s,i.Yi())}pr(e){const n=y_(this.persistenceKey,this.currentUser,e);this.removeItem(n)}Er(e){const n={clientId:this.tr,onlineState:e};this.storage.setItem(this.lr,JSON.stringify(n))}Tr(e,n,r){const i=Qd(this.persistenceKey,e),s=new ha(e,n,r);this.setItem(i,s.Yi())}Ar(e){const n=JSON.stringify(Array.from(e));this.setItem(this.dr,n)}Rr(e){const n=this.ar.exec(e);return n?n[1]:null}Pr(e,n){const r=this.Rr(e);return Bc.Ji(r,n)}Vr(e,n){const r=this.cr.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return Vc.Ji(new We(s),i,n)}Sr(e,n){const r=this.hr.exec(e),i=Number(r[1]);return ha.Ji(i,n)}wr(e){return Bg.Ji(e)}Cr(e){return JSON.parse(e)}async vr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.kr(e.batchId,e.state,e.error);N("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Dr(e){return this.syncEngine.Mr(e.targetId,e.state,e.error)}br(e,n){const r=n?this.sr.insert(e,n):this.sr.remove(e),i=this.gr(this.sr),s=this.gr(r),o=[],a=[];return s.forEach(u=>{i.has(u)||o.push(u)}),i.forEach(u=>{s.has(u)||a.push(u)}),this.syncEngine.Or(o,a).then(()=>{this.sr=r})}mr(e){this.sr.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}gr(e){let n=Fh();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class bT{constructor(){this.Fr=new _p,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Fr.Xi(e),this.$r[e]||"not-current"}updateQueryState(e,n,r){this.$r[e]=n}removeLocalQueryTarget(e){this.Fr.Zi(e)}isLocalQueryTarget(e){return this.Fr.activeTargetIds.has(e)}clearQueryState(e){delete this.$r[e]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(e){return this.Fr.activeTargetIds.has(e)}start(){return this.Fr=new _p,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class X${Br(e){}shutdown(){}}/**
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
 */class v_{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Gr(),this.Kr=[],this.Qr()}Br(e){this.Kr.push(e)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){N("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Kr)e(0)}Gr(){N("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Kr)e(1)}static vt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const Z$={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class eU{constructor(e){this.jr=e.jr,this.Wr=e.Wr}zr(e){this.Hr=e}Jr(e){this.Yr=e}onMessage(e){this.Xr=e}close(){this.Wr()}send(e){this.jr(e)}Zr(){this.Hr()}eo(e){this.Yr(e)}no(e){this.Xr(e)}}/**
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
 */class tU extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.so=n+"://"+e.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(e,n,r,i,s){const o=this.oo(e,n);N("RestConnection","Sending: ",o,r);const a={};return this.uo(a,i,s),this.ao(e,o,a,r).then(u=>(N("RestConnection","Received: ",u),u),u=>{throw ja("RestConnection",`${e} failed with error: `,u,"url: ",o,"request:",r),u})}co(e,n,r,i,s){return this.ro(e,n,r,i,s)}uo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+go,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}oo(e,n){const r=Z$[e];return`${this.so}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}ao(e,n,r,i){return new Promise((s,o)=>{const a=new ZL;a.listenOnce(YL.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Hd.NO_ERROR:const l=a.getResponseJson();N("Connection","XHR received:",JSON.stringify(l)),s(l);break;case Hd.TIMEOUT:N("Connection",'RPC "'+e+'" timed out'),o(new C(w.DEADLINE_EXCEEDED,"Request time out"));break;case Hd.HTTP_ERROR:const c=a.getStatus();if(N("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(p){const m=p.toLowerCase().replace(/_/g,"-");return Object.values(w).indexOf(m)>=0?m:w.UNKNOWN}(h.status);o(new C(d,h.message))}else o(new C(w.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new C(w.UNAVAILABLE,"Connection failed."));break;default:$()}}finally{N("Connection",'RPC "'+e+'" completed.')}});const u=JSON.stringify(i);a.send(n,"POST",u,r,15)})}ho(e,n,r){const i=[this.so,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=KL(),o=QL(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new XL({})),this.uo(a.initMessageHeaders,n,r),KI()||ah()||lA()||Tm()||cA()||Sm()||(a.httpHeadersOverwriteParam="$httpHeaders");const u=i.join("");N("Connection","Creating WebChannel: "+u,a);const l=s.createWebChannel(u,a);let c=!1,h=!1;const d=new eU({jr:m=>{h?N("Connection","Not sending because WebChannel is closed:",m):(c||(N("Connection","Opening WebChannel transport."),l.open(),c=!0),N("Connection","WebChannel sending:",m),l.send(m))},Wr:()=>l.close()}),p=(m,I,R)=>{m.listen(I,g=>{try{R(g)}catch(f){setTimeout(()=>{throw f},0)}})};return p(l,pl.EventType.OPEN,()=>{h||N("Connection","WebChannel transport opened.")}),p(l,pl.EventType.CLOSE,()=>{h||(h=!0,N("Connection","WebChannel transport closed"),d.eo())}),p(l,pl.EventType.ERROR,m=>{h||(h=!0,ja("Connection","WebChannel transport errored:",m),d.eo(new C(w.UNAVAILABLE,"The operation could not be completed")))}),p(l,pl.EventType.MESSAGE,m=>{var I;if(!h){const R=m.data[0];z(!!R);const g=R,f=g.error||((I=g[0])===null||I===void 0?void 0:I.error);if(f){N("Connection","WebChannel received error:",f);const y=f.status;let v=function(k){const E=Ee[k];if(E!==void 0)return XS(E)}(y),T=f.message;v===void 0&&(v=w.INTERNAL,T="Unknown error status: "+y+" with message "+f.message),h=!0,d.eo(new C(v,T)),l.close()}else N("Connection","WebChannel received:",R),d.no(R)}}),p(o,JL.STAT_EVENT,m=>{m.stat===Nw.PROXY?N("Connection","Detected buffering proxy"):m.stat===Nw.NOPROXY&&N("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.Zr()},0),d}}/**
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
 *//**
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
 */function xT(){return typeof window!="undefined"?window:null}function jl(){return typeof document!="undefined"?document:null}/**
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
 */function Pu(t){return new zM(t,!0)}class qg{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Jn=e,this.timerId=n,this.lo=r,this.fo=i,this._o=s,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(e){this.cancel();const n=Math.floor(this.wo+this.To()),r=Math.max(0,Date.now()-this.yo),i=Math.max(0,n-r);i>0&&N("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.wo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.mo=this.Jn.enqueueAfterDelay(this.timerId,i,()=>(this.yo=Date.now(),e())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
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
 */class PT{constructor(e,n,r,i,s,o,a,u){this.Jn=e,this.Ao=r,this.Ro=i,this.bo=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Po=0,this.Vo=null,this.vo=null,this.stream=null,this.So=new qg(e,n)}Do(){return this.state===1||this.state===5||this.Co()}Co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&this.Vo===null&&(this.Vo=this.Jn.enqueueAfterDelay(this.Ao,6e4,()=>this.Mo()))}Oo(e){this.Fo(),this.stream.send(e)}async Mo(){if(this.Co())return this.close(0)}Fo(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}$o(){this.vo&&(this.vo.cancel(),this.vo=null)}async close(e,n){this.Fo(),this.$o(),this.So.cancel(),this.Po++,e!==4?this.So.reset():n&&n.code===w.RESOURCE_EXHAUSTED?(Te(n.toString()),Te("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):n&&n.code===w.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Bo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Jr(n)}Bo(){}auth(){this.state=1;const e=this.Lo(this.Po),n=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Po===n&&this.Uo(r,i)},r=>{e(()=>{const i=new C(w.UNKNOWN,"Fetching auth token failed: "+r.message);return this.qo(i)})})}Uo(e,n){const r=this.Lo(this.Po);this.stream=this.Go(e,n),this.stream.zr(()=>{r(()=>(this.state=2,this.vo=this.Jn.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(i=>{r(()=>this.qo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(e){return N("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Lo(e){return n=>{this.Jn.enqueueAndForget(()=>this.Po===e?n():(N("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class nU extends PT{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.M=s}Go(e,n){return this.bo.ho("Listen",e,n)}onMessage(e){this.So.reset();const n=HM(this.M,e),r=function(i){if(!("targetChange"in i))return B.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?B.min():s.readTime?Fe(s.readTime):B.min()}(e);return this.listener.Ko(n,r)}Qo(e){const n={};n.database=Xa(this.M),n.addTarget=function(i,s){let o;const a=s.target;return o=Lc(a)?{documents:oT(i,a)}:{query:aT(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=tT(i,s.resumeToken):s.snapshotVersion.compareTo(B.min())>0&&(o.readTime=Ya(i,s.snapshotVersion.toTimestamp())),o}(this.M,e);const r=KM(this.M,e);r&&(n.labels=r),this.Oo(n)}jo(e){const n={};n.database=Xa(this.M),n.removeTarget=e,this.Oo(n)}}class rU extends PT{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.M=s,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Go(e,n){return this.bo.ho("Write",e,n)}onMessage(e){if(z(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Wo){this.So.reset();const n=GM(e.writeResults,e.commitTime),r=Fe(e.commitTime);return this.listener.Jo(r,n)}return z(!e.writeResults||e.writeResults.length===0),this.Wo=!0,this.listener.Yo()}Xo(){const e={};e.database=Xa(this.M),this.Oo(e)}Ho(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Za(this.M,r))};this.Oo(n)}}/**
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
 */class iU extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.bo=r,this.M=i,this.Zo=!1}tu(){if(this.Zo)throw new C(w.FAILED_PRECONDITION,"The client has already been terminated.")}ro(e,n,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.bo.ro(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new C(w.UNKNOWN,i.toString())})}co(e,n,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.bo.co(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new C(w.UNKNOWN,i.toString())})}terminate(){this.Zo=!0}}class sU{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){this.eu===0&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(e){this.state==="Online"?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.au(),this.ou(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ru("Offline")))}set(e){this.au(),this.eu=0,e==="Online"&&(this.su=!1),this.ru(e)}ru(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ou(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(Te(n),this.su=!1):N("OnlineStateTracker",n)}au(){this.nu!==null&&(this.nu.cancel(),this.nu=null)}}/**
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
 */class oU{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.cu=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=s,this.du.Br(o=>{r.enqueueAndForget(async()=>{jr(this)&&(N("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=P(a);u.lu.add(4),await vo(u),u._u.set("Unknown"),u.lu.delete(4),await Du(u)}(this))})}),this._u=new sU(r,i)}}async function Du(t){if(jr(t))for(const e of t.fu)await e(!0)}async function vo(t){for(const e of t.fu)await e(!1)}function Bh(t,e){const n=P(t);n.hu.has(e.targetId)||(n.hu.set(e.targetId,e),Wg(n)?jg(n):_o(n).Co()&&zg(n,e))}function eu(t,e){const n=P(t),r=_o(n);n.hu.delete(e),r.Co()&&DT(n,e),n.hu.size===0&&(r.Co()?r.ko():jr(n)&&n._u.set("Unknown"))}function zg(t,e){t.wu.Z(e.targetId),_o(t).Qo(e)}function DT(t,e){t.wu.Z(e),_o(t).jo(e)}function jg(t){t.wu=new VM({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.hu.get(e)||null}),_o(t).start(),t._u.iu()}function Wg(t){return jr(t)&&!_o(t).Do()&&t.hu.size>0}function jr(t){return P(t).lu.size===0}function OT(t){t.wu=void 0}async function aU(t){t.hu.forEach((e,n)=>{zg(t,e)})}async function uU(t,e){OT(t),Wg(t)?(t._u.uu(e),jg(t)):t._u.set("Unknown")}async function lU(t,e,n){if(t._u.set("Online"),e instanceof eT&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.hu.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.hu.delete(o),r.wu.removeTarget(o))}(t,e)}catch(r){N("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await qc(t,r)}else if(e instanceof ql?t.wu.ut(e):e instanceof ZS?t.wu._t(e):t.wu.ht(e),!n.isEqual(B.min()))try{const r=await kT(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.wu.yt(s);return o.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const l=i.hu.get(u);l&&i.hu.set(u,l.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const u=i.hu.get(a);if(!u)return;i.hu.set(a,u.withResumeToken(xe.EMPTY_BYTE_STRING,u.snapshotVersion)),DT(i,a);const l=new Ir(u.target,a,1,u.sequenceNumber);zg(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){N("RemoteStore","Failed to raise snapshot:",r),await qc(t,r)}}async function qc(t,e,n){if(!zi(e))throw e;t.lu.add(1),await vo(t),t._u.set("Offline"),n||(n=()=>kT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{N("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await Du(t)})}function LT(t,e){return e().catch(n=>qc(t,n,e))}async function wo(t){const e=P(t),n=Pr(e);let r=e.cu.length>0?e.cu[e.cu.length-1].batchId:-1;for(;cU(e);)try{const i=await B$(e.localStore,r);if(i===null){e.cu.length===0&&n.ko();break}r=i.batchId,hU(e,i)}catch(i){await qc(e,i)}MT(e)&&$T(e)}function cU(t){return jr(t)&&t.cu.length<10}function hU(t,e){t.cu.push(e);const n=Pr(t);n.Co()&&n.zo&&n.Ho(e.mutations)}function MT(t){return jr(t)&&!Pr(t).Do()&&t.cu.length>0}function $T(t){Pr(t).start()}async function dU(t){Pr(t).Xo()}async function fU(t){const e=Pr(t);for(const n of t.cu)e.Ho(n.mutations)}async function pU(t,e,n){const r=t.cu.shift(),i=bg.from(r,e,n);await LT(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await wo(t)}async function mU(t,e){e&&Pr(t).zo&&await async function(n,r){if(i=r.code,JS(i)&&i!==w.ABORTED){const s=n.cu.shift();Pr(n).No(),await LT(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await wo(n)}var i}(t,e),MT(t)&&$T(t)}async function w_(t,e){const n=P(t);n.asyncQueue.verifyOperationInProgress(),N("RemoteStore","RemoteStore received new credentials");const r=jr(n);n.lu.add(3),await vo(n),r&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await Du(n)}async function Ip(t,e){const n=P(t);e?(n.lu.delete(2),await Du(n)):e||(n.lu.add(2),await vo(n),n._u.set("Unknown"))}function _o(t){return t.mu||(t.mu=function(e,n,r){const i=P(e);return i.tu(),new nU(n,i.bo,i.authCredentials,i.appCheckCredentials,i.M,r)}(t.datastore,t.asyncQueue,{zr:aU.bind(null,t),Jr:uU.bind(null,t),Ko:lU.bind(null,t)}),t.fu.push(async e=>{e?(t.mu.No(),Wg(t)?jg(t):t._u.set("Unknown")):(await t.mu.stop(),OT(t))})),t.mu}function Pr(t){return t.gu||(t.gu=function(e,n,r){const i=P(e);return i.tu(),new rU(n,i.bo,i.authCredentials,i.appCheckCredentials,i.M,r)}(t.datastore,t.asyncQueue,{zr:dU.bind(null,t),Jr:mU.bind(null,t),Yo:fU.bind(null,t),Jo:pU.bind(null,t)}),t.fu.push(async e=>{e?(t.gu.No(),await wo(t)):(await t.gu.stop(),t.cu.length>0&&(N("RemoteStore",`Stopping write stream with ${t.cu.length} pending writes`),t.cu=[]))})),t.gu}/**
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
 */class Hg{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Ue,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Hg(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new C(w.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Io(t,e){if(Te("AsyncQueue",`${e}: ${t}`),zi(t))return new C(w.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ds{constructor(e){this.comparator=e?(n,r)=>e(n,r)||x.comparator(n.key,r.key):(n,r)=>x.comparator(n.key,r.key),this.keyedMap=yp(),this.sortedSet=new Ie(this.comparator)}static emptySet(e){return new Ds(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ds)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ds;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class __{constructor(){this.yu=new Ie(x.comparator)}track(e){const n=e.doc.key,r=this.yu.get(n);r?e.type!==0&&r.type===3?this.yu=this.yu.insert(n,e):e.type===3&&r.type!==1?this.yu=this.yu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.yu=this.yu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.yu=this.yu.remove(n):e.type===1&&r.type===2?this.yu=this.yu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):$():this.yu=this.yu.insert(n,e)}pu(){const e=[];return this.yu.inorderTraversal((n,r)=>{e.push(r)}),e}}class Zs{constructor(e,n,r,i,s,o,a,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u}static fromInitialDocuments(e,n,r,i){const s=[];return n.forEach(o=>{s.push({type:0,doc:o})}),new Zs(e,n,Ds.emptySet(n),s,r,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Cu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class gU{constructor(){this.Iu=void 0,this.listeners=[]}}class yU{constructor(){this.queries=new zr(e=>VS(e),Cu),this.onlineState="Unknown",this.Tu=new Set}}async function Gg(t,e){const n=P(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new gU),i)try{s.Iu=await n.onListen(r)}catch(o){const a=Io(o,`Initialization of query '${mp(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Eu(n.onlineState),s.Iu&&e.Au(s.Iu)&&Qg(n)}async function Kg(t,e){const n=P(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function vU(t,e){const n=P(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Au(i)&&(r=!0);o.Iu=i}}r&&Qg(n)}function wU(t,e,n){const r=P(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Qg(t){t.Tu.forEach(e=>{e.next()})}class Yg{constructor(e,n,r){this.query=e,this.Ru=n,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=r||{}}Au(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Zs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.bu?this.Vu(e)&&(this.Ru.next(e),n=!0):this.vu(e,this.onlineState)&&(this.Su(e),n=!0),this.Pu=e,n}onError(e){this.Ru.error(e)}Eu(e){this.onlineState=e;let n=!1;return this.Pu&&!this.bu&&this.vu(this.Pu,e)&&(this.Su(this.Pu),n=!0),n}vu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Du||!r)&&(!e.docs.isEmpty()||n==="Offline")}Vu(e){if(e.docChanges.length>0)return!0;const n=this.Pu&&this.Pu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Su(e){e=Zs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Ru.next(e)}}/**
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
 */class _U{constructor(e,n){this.payload=e,this.byteLength=n}Cu(){return"metadata"in this.payload}}/**
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
 */class I_{constructor(e){this.M=e}li(e){return _n(this.M,e)}fi(e){return e.metadata.exists?sT(this.M,e.document,!1):se.newNoDocument(this.li(e.metadata.name),this.di(e.metadata.readTime))}di(e){return Fe(e)}}class IU{constructor(e,n,r){this.xu=e,this.localStore=n,this.M=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=UT(e)}Nu(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.payload.namedQuery)this.queries.push(e.payload.namedQuery);else if(e.payload.documentMetadata){this.documents.push({metadata:e.payload.documentMetadata}),e.payload.documentMetadata.exists||++n;const r=J.fromString(e.payload.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.payload.document&&(this.documents[this.documents.length-1].document=e.payload.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}ku(e){const n=new Map,r=new I_(this.M);for(const i of e)if(i.metadata.queries){const s=r.li(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||te()).add(s);n.set(o,a)}}return n}async complete(){const e=await q$(this.localStore,new I_(this.M),this.documents,this.xu.id),n=this.ku(this.documents);for(const r of this.queries)await z$(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Mu:this.collectionGroups,Ou:e}}}function UT(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
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
 */class FT{constructor(e){this.key=e}}class VT{constructor(e){this.key=e}}class BT{constructor(e,n){this.query=e,this.Fu=n,this.$u=null,this.current=!1,this.Bu=te(),this.mutatedKeys=te(),this.Lu=qS(e),this.Uu=new Ds(this.Lu)}get qu(){return this.Fu}Gu(e,n){const r=n?n.Ku:new __,i=n?n.Uu:this.Uu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=Vl(this.query)&&i.size===this.query.limit?i.last():null,l=Mc(this.query)&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),p=kg(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),I=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let R=!1;d&&p?d.data.isEqual(p.data)?m!==I&&(r.track({type:3,doc:p}),R=!0):this.Qu(d,p)||(r.track({type:2,doc:p}),R=!0,(u&&this.Lu(p,u)>0||l&&this.Lu(p,l)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),R=!0):d&&!p&&(r.track({type:1,doc:d}),R=!0,(u||l)&&(a=!0)),R&&(p?(o=o.add(p),s=I?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),Vl(this.query)||Mc(this.query))for(;o.size>this.query.limit;){const c=Vl(this.query)?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Uu:o,Ku:r,ei:a,mutatedKeys:s}}Qu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Uu;this.Uu=e.Uu,this.mutatedKeys=e.mutatedKeys;const s=e.Ku.pu();s.sort((l,c)=>function(h,d){const p=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return $()}};return p(h)-p(d)}(l.type,c.type)||this.Lu(l.doc,c.doc)),this.ju(r);const o=n?this.Wu():[],a=this.Bu.size===0&&this.current?1:0,u=a!==this.$u;return this.$u=a,s.length!==0||u?{snapshot:new Zs(this.query,e.Uu,i,s,e.mutatedKeys,a===0,u,!1),zu:o}:{zu:o}}Eu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Uu:this.Uu,Ku:new __,mutatedKeys:this.mutatedKeys,ei:!1},!1)):{zu:[]}}Hu(e){return!this.Fu.has(e)&&!!this.Uu.has(e)&&!this.Uu.get(e).hasLocalMutations}ju(e){e&&(e.addedDocuments.forEach(n=>this.Fu=this.Fu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Fu=this.Fu.delete(n)),this.current=e.current)}Wu(){if(!this.current)return[];const e=this.Bu;this.Bu=te(),this.Uu.forEach(r=>{this.Hu(r.key)&&(this.Bu=this.Bu.add(r.key))});const n=[];return e.forEach(r=>{this.Bu.has(r)||n.push(new VT(r))}),this.Bu.forEach(r=>{e.has(r)||n.push(new FT(r))}),n}Ju(e){this.Fu=e.hi,this.Bu=te();const n=this.Gu(e.documents);return this.applyChanges(n,!0)}Yu(){return Zs.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,this.$u===0)}}class EU{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class SU{constructor(e){this.key=e,this.Xu=!1}}class TU{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Zu={},this.ta=new zr(a=>VS(a),Cu),this.ea=new Map,this.na=new Set,this.sa=new Ie(x.comparator),this.ia=new Map,this.ra=new Fg,this.oa={},this.ua=new Map,this.aa=Di.gn(),this.onlineState="Unknown",this.ca=void 0}get isPrimaryClient(){return this.ca===!0}}async function kU(t,e){const n=ty(t);let r,i;const s=n.ta.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Yu();else{const o=await Js(n.localStore,Xt(e));n.isPrimaryClient&&Bh(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await Jg(n,e,r,a==="current")}return i}async function Jg(t,e,n,r){t.ha=(c,h,d)=>async function(p,m,I,R){let g=m.view.Gu(I);g.ei&&(g=await Fc(p.localStore,m.query,!1).then(({documents:v})=>m.view.Gu(v,g)));const f=R&&R.targetChanges.get(m.targetId),y=m.view.applyChanges(g,p.isPrimaryClient,f);return Ep(p,m.targetId,y.zu),y.snapshot}(t,c,h,d);const i=await Fc(t.localStore,e,!0),s=new BT(e,i.hi),o=s.Gu(i.documents),a=xu.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),u=s.applyChanges(o,t.isPrimaryClient,a);Ep(t,n,u.zu);const l=new EU(e,n,s);return t.ta.set(e,l),t.ea.has(n)?t.ea.get(n).push(e):t.ea.set(n,[e]),u.snapshot}async function CU(t,e){const n=P(t),r=n.ta.get(e),i=n.ea.get(r.targetId);if(i.length>1)return n.ea.set(r.targetId,i.filter(s=>!Cu(s,e))),void n.ta.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Xs(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),eu(n.remoteStore,r.targetId),eo(n,r.targetId)}).catch(ji)):(eo(n,r.targetId),await Xs(n.localStore,r.targetId,!0))}async function RU(t,e,n){const r=ny(t);try{const i=await function(s,o){const a=P(s),u=_e.now(),l=o.reduce((h,d)=>h.add(d.key),te());let c;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>a.ai.qs(h,l).next(d=>{c=d;const p=[];for(const m of o){const I=DM(m,c.get(m.key));I!=null&&p.push(new qi(m.key,I,OS(I.value.mapValue),ke.exists(!0)))}return a.$s.addMutationBatch(h,u,p,o)})).then(h=>(h.applyToLocalDocumentSet(c),{batchId:h.batchId,changes:c}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let u=s.oa[s.currentUser.toKey()];u||(u=new Ie(K)),u=u.insert(o,a),s.oa[s.currentUser.toKey()]=u}(r,i.batchId,n),await tr(r,i.changes),await wo(r.remoteStore)}catch(i){const s=Io(i,"Failed to persist write");n.reject(s)}}async function qT(t,e){const n=P(t);try{const r=await V$(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.ia.get(s);o&&(z(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Xu=!0:i.modifiedDocuments.size>0?z(o.Xu):i.removedDocuments.size>0&&(z(o.Xu),o.Xu=!1))}),await tr(n,r,e)}catch(r){await ji(r)}}function E_(t,e,n){const r=P(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ta.forEach((s,o)=>{const a=o.view.Eu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=P(s);a.onlineState=o;let u=!1;a.queries.forEach((l,c)=>{for(const h of c.listeners)h.Eu(o)&&(u=!0)}),u&&Qg(a)}(r.eventManager,e),i.length&&r.Zu.Ko(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function AU(t,e,n){const r=P(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.ia.get(e),s=i&&i.key;if(s){let o=new Ie(x.comparator);o=o.insert(s,se.newNoDocument(s,B.min()));const a=te().add(s),u=new bu(B.min(),new Map,new ae(K),o,a);await qT(r,u),r.sa=r.sa.remove(s),r.ia.delete(e),ey(r)}else await Xs(r.localStore,e,!1).then(()=>eo(r,e,n)).catch(ji)}async function NU(t,e){const n=P(t),r=e.batch.batchId;try{const i=await F$(n.localStore,e);Zg(n,r,null),Xg(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await tr(n,i)}catch(i){await ji(i)}}async function bU(t,e,n){const r=P(t);try{const i=await function(s,o){const a=P(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let l;return a.$s.lookupMutationBatch(u,o).next(c=>(z(c!==null),l=c.keys(),a.$s.removeMutationBatch(u,c))).next(()=>a.$s.performConsistencyCheck(u)).next(()=>a.ai.qs(u,l))})}(r.localStore,e);Zg(r,e,n),Xg(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await tr(r,i)}catch(i){await ji(i)}}async function xU(t,e){const n=P(t);jr(n.remoteStore)||N("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(s){const o=P(s);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.$s.getHighestUnacknowledgedBatchId(a))}(n.localStore);if(r===-1)return void e.resolve();const i=n.ua.get(r)||[];i.push(e),n.ua.set(r,i)}catch(r){const i=Io(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function Xg(t,e){(t.ua.get(e)||[]).forEach(n=>{n.resolve()}),t.ua.delete(e)}function Zg(t,e,n){const r=P(t);let i=r.oa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.oa[r.currentUser.toKey()]=i}}function eo(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ea.get(e))t.ta.delete(r),n&&t.Zu.la(r,n);t.ea.delete(e),t.isPrimaryClient&&t.ra.Ri(e).forEach(r=>{t.ra.containsKey(r)||zT(t,r)})}function zT(t,e){t.na.delete(e.path.canonicalString());const n=t.sa.get(e);n!==null&&(eu(t.remoteStore,n),t.sa=t.sa.remove(e),t.ia.delete(n),ey(t))}function Ep(t,e,n){for(const r of n)r instanceof FT?(t.ra.addReference(r.key,e),PU(t,r)):r instanceof VT?(N("SyncEngine","Document no longer in limbo: "+r.key),t.ra.removeReference(r.key,e),t.ra.containsKey(r.key)||zT(t,r.key)):$()}function PU(t,e){const n=e.key,r=n.path.canonicalString();t.sa.get(n)||t.na.has(r)||(N("SyncEngine","New document in limbo: "+n),t.na.add(r),ey(t))}function ey(t){for(;t.na.size>0&&t.sa.size<t.maxConcurrentLimboResolutions;){const e=t.na.values().next().value;t.na.delete(e);const n=new x(J.fromString(e)),r=t.aa.next();t.ia.set(r,new SU(n)),t.sa=t.sa.insert(n,r),Bh(t.remoteStore,new Ir(Xt(yo(n.path)),r,2,Dt.A))}}async function tr(t,e,n){const r=P(t),i=[],s=[],o=[];r.ta.isEmpty()||(r.ta.forEach((a,u)=>{o.push(r.ha(u,e,n).then(l=>{if(l){r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,l.fromCache?"not-current":"current"),i.push(l);const c=Ug.Js(u.targetId,l);s.push(c)}}))}),await Promise.all(o),r.Zu.Ko(i),await async function(a,u){const l=P(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>_.forEach(u,h=>_.forEach(h.zs,d=>l.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>_.forEach(h.Hs,d=>l.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!zi(c))throw c;N("LocalStore","Failed to update sequence numbers: "+c)}for(const c of u){const h=c.targetId;if(!c.fromCache){const d=l.si.get(h),p=d.snapshotVersion,m=d.withLastLimboFreeSnapshotVersion(p);l.si=l.si.insert(h,m)}}}(r.localStore,s))}async function DU(t,e){const n=P(t);if(!n.currentUser.isEqual(e)){N("SyncEngine","User change. New user:",e.toKey());const r=await TT(n.localStore,e);n.currentUser=e,function(i,s){i.ua.forEach(o=>{o.forEach(a=>{a.reject(new C(w.CANCELLED,s))})}),i.ua.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await tr(n,r.ci)}}function OU(t,e){const n=P(t),r=n.ia.get(e);if(r&&r.Xu)return te().add(r.key);{let i=te();const s=n.ea.get(e);if(!s)return i;for(const o of s){const a=n.ta.get(o);i=i.unionWith(a.view.qu)}return i}}async function LU(t,e){const n=P(t),r=await Fc(n.localStore,e.query,!0),i=e.view.Ju(r);return n.isPrimaryClient&&Ep(n,e.targetId,i.zu),i}async function MU(t,e){const n=P(t);return AT(n.localStore,e).then(r=>tr(n,r))}async function $U(t,e,n,r){const i=P(t),s=await function(o,a){const u=P(o),l=P(u.$s);return u.persistence.runTransaction("Lookup mutation documents","readonly",c=>l.ln(c,a).next(h=>h?u.ai.qs(c,h):_.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await wo(i.remoteStore):n==="acknowledged"||n==="rejected"?(Zg(i,e,r||null),Xg(i,e),function(o,a){P(P(o).$s).dn(a)}(i.localStore,e)):$(),await tr(i,s)):N("SyncEngine","Cannot apply mutation batch with id: "+e)}async function UU(t,e){const n=P(t);if(ty(n),ny(n),e===!0&&n.ca!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await S_(n,r.toArray());n.ca=!0,await Ip(n.remoteStore,!0);for(const s of i)Bh(n.remoteStore,s)}else if(e===!1&&n.ca!==!1){const r=[];let i=Promise.resolve();n.ea.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(eo(n,o),Xs(n.localStore,o,!0))),eu(n.remoteStore,o)}),await i,await S_(n,r),function(s){const o=P(s);o.ia.forEach((a,u)=>{eu(o.remoteStore,u)}),o.ra.bi(),o.ia=new Map,o.sa=new Ie(x.comparator)}(n),n.ca=!1,await Ip(n.remoteStore,!1)}}async function S_(t,e,n){const r=P(t),i=[],s=[];for(const o of e){let a;const u=r.ea.get(o);if(u&&u.length!==0){a=await Js(r.localStore,Xt(u[0]));for(const l of u){const c=r.ta.get(l),h=await LU(r,c);h.snapshot&&s.push(h.snapshot)}}else{const l=await RT(r.localStore,o);a=await Js(r.localStore,l),await Jg(r,jT(l),o,!1)}i.push(a)}return r.Zu.Ko(s),i}function jT(t){return US(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function FU(t){const e=P(t);return P(P(e.localStore).persistence).Os()}async function VU(t,e,n,r){const i=P(t);if(i.ca)return void N("SyncEngine","Ignoring unexpected query state notification.");const s=i.ea.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const o=await AT(i.localStore,BS(s[0])),a=bu.createSynthesizedRemoteEventForCurrentChange(e,n==="current");await tr(i,o,a);break}case"rejected":await Xs(i.localStore,e,!0),eo(i,e,r);break;default:$()}}async function BU(t,e,n){const r=ty(t);if(r.ca){for(const i of e){if(r.ea.has(i)){N("SyncEngine","Adding an already active target "+i);continue}const s=await RT(r.localStore,i),o=await Js(r.localStore,s);await Jg(r,jT(s),o.targetId,!1),Bh(r.remoteStore,o)}for(const i of n)r.ea.has(i)&&await Xs(r.localStore,i,!1).then(()=>{eu(r.remoteStore,i),eo(r,i)}).catch(ji)}}function ty(t){const e=P(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=qT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=OU.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=AU.bind(null,e),e.Zu.Ko=vU.bind(null,e.eventManager),e.Zu.la=wU.bind(null,e.eventManager),e}function ny(t){const e=P(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=NU.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=bU.bind(null,e),e}function qU(t,e,n){const r=P(t);(async function(i,s,o){try{const a=await s.getMetadata();if(await function(h,d){const p=P(h),m=Fe(d.createTime);return p.persistence.runTransaction("hasNewerBundle","readonly",I=>p.ds.getBundleMetadata(I,d.id)).then(I=>!!I&&I.createTime.compareTo(m)>=0)}(i.localStore,a))return await s.close(),o._completeWith(function(h){return{taskState:"Success",documentsLoaded:h.totalDocuments,bytesLoaded:h.totalBytes,totalDocuments:h.totalDocuments,totalBytes:h.totalBytes}}(a)),Promise.resolve(new Set);o._updateProgress(UT(a));const u=new IU(a,i.localStore,s.M);let l=await s.fa();for(;l;){const h=await u.Nu(l);h&&o._updateProgress(h),l=await s.fa()}const c=await u.complete();return await tr(i,c.Ou,void 0),await function(h,d){const p=P(h);return p.persistence.runTransaction("Save bundle","readwrite",m=>p.ds.saveBundleMetadata(m,d))}(i.localStore,a),o._completeWith(c.progress),Promise.resolve(c.Mu)}catch(a){return ja("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a),Promise.resolve(new Set)}})(r,e,n).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class WT{constructor(){this.synchronizeTabs=!1}async initialize(e){this.M=Pu(e.databaseInfo.databaseId),this.sharedClientState=this.da(e),this.persistence=this._a(e),await this.persistence.start(),this.gcScheduler=this.wa(e),this.localStore=this.ma(e)}wa(e){return null}ma(e){return ST(this.persistence,new ET,e.initialUser,this.M)}_a(e){return new Y$(Vg.Wi,this.M)}da(e){return new bT}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class HT extends WT{constructor(e,n,r){super(),this.ga=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.ga.initialize(this,e),await ny(this.ga.syncEngine),await wo(this.ga.remoteStore),await this.persistence.Is(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(this.localStore),Promise.resolve()))}ma(e){return ST(this.persistence,new ET,e.initialUser,this.M)}wa(e){const n=this.persistence.referenceDelegate.garbageCollector;return new x$(n,e.asyncQueue)}_a(e){const n=$g(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?It.withCacheSize(this.cacheSizeBytes):It.DEFAULT;return new Mg(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,xT(),jl(),this.M,this.sharedClientState,!!this.forceOwnership)}da(e){return new bT}}class zU extends HT{constructor(e,n){super(e,n,!1),this.ga=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.ga.syncEngine;this.sharedClientState instanceof Yd&&(this.sharedClientState.syncEngine={kr:$U.bind(null,n),Mr:VU.bind(null,n),Or:BU.bind(null,n),Os:FU.bind(null,n),Nr:MU.bind(null,n)},await this.sharedClientState.start()),await this.persistence.Is(async r=>{await UU(this.ga.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start(this.localStore):r||this.gcScheduler.stop())})}da(e){const n=xT();if(!Yd.vt(n))throw new C(w.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=$g(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Yd(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class ry{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>E_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=DU.bind(null,this.syncEngine),await Ip(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new yU}createDatastore(e){const n=Pu(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new tU(i));var i;return function(s,o,a,u){return new iU(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>E_(this.syncEngine,a,0),o=v_.vt()?new v_:new X$,new oU(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,u,l){const c=new TU(r,i,s,o,a,u);return l&&(c.ca=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=P(e);N("RemoteStore","RemoteStore shutting down."),n.lu.add(5),await vo(n),n.du.shutdown(),n._u.set("Unknown")}(this.remoteStore)}}/**
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
 */function T_(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}/**
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
 */class qh{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.ya(this.observer.next,e)}error(e){this.observer.error?this.ya(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}pa(){this.muted=!0}ya(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class jU{constructor(e,n){this.Ia=e,this.M=n,this.metadata=new Ue,this.buffer=new Uint8Array,this.Ta=new TextDecoder("utf-8"),this.Ea().then(r=>{r&&r.Cu()?this.metadata.resolve(r.payload.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.payload)}`))},r=>this.metadata.reject(r))}close(){return this.Ia.cancel()}async getMetadata(){return this.metadata.promise}async fa(){return await this.getMetadata(),this.Ea()}async Ea(){const e=await this.Aa();if(e===null)return null;const n=this.Ta.decode(e),r=Number(n);isNaN(r)&&this.Ra(`length string (${n}) is not valid number`);const i=await this.ba(r);return new _U(JSON.parse(i),e.length+r)}Pa(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async Aa(){for(;this.Pa()<0&&!await this.Va(););if(this.buffer.length===0)return null;const e=this.Pa();e<0&&this.Ra("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async ba(e){for(;this.buffer.length<e;)await this.Va()&&this.Ra("Reached the end of bundle when more is expected.");const n=this.Ta.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}Ra(e){throw this.Ia.cancel(),new Error(`Invalid bundle format: ${e}`)}async Va(){const e=await this.Ia.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
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
 */class WU{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new C(w.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(r,i){const s=P(r),o=Xa(s.M)+"/documents",a={documents:i.map(h=>Ja(s.M,h))},u=await s.co("BatchGetDocuments",o,a),l=new Map;u.forEach(h=>{const d=WM(s.M,h);l.set(d.key.toString(),d)});const c=[];return i.forEach(h=>{const d=l.get(h.toString());z(!!d),c.push(d)}),c}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Nu(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=x.fromPath(r);this.mutations.push(new Cg(i,this.precondition(i)))}),await async function(n,r){const i=P(n),s=Xa(i.M)+"/documents",o={writes:r.map(a=>Za(i.M,a))};await i.ro("Commit",s,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw $();n=B.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new C(w.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?ke.updateTime(n):ke.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(B.min()))throw new C(w.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return ke.updateTime(n)}return ke.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class HU{constructor(e,n,r,i){this.asyncQueue=e,this.datastore=n,this.updateFunction=r,this.deferred=i,this.va=5,this.So=new qg(this.asyncQueue,"transaction_retry")}run(){this.va-=1,this.Sa()}Sa(){this.So.Io(async()=>{const e=new WU(this.datastore),n=this.Da(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Ca(i)}))}).catch(r=>{this.Ca(r)})})}Da(e){try{const n=this.updateFunction(e);return!Bi(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Ca(e){this.va>0&&this.xa(e)?(this.va-=1,this.asyncQueue.enqueueAndForget(()=>(this.Sa(),Promise.resolve()))):this.deferred.reject(e)}xa(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||!JS(n)}return!1}}/**
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
 */class GU{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=We.UNAUTHENTICATED,this.clientId=AS.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{N("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(N("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new C(w.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ue;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Io(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function GT(t,e){t.asyncQueue.verifyOperationInProgress(),N("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await TT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function KT(t,e){t.asyncQueue.verifyOperationInProgress();const n=await iy(t);N("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>w_(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>w_(e.remoteStore,s)),t.onlineComponents=e}async function iy(t){return t.offlineComponents||(N("FirestoreClient","Using default OfflineComponentProvider"),await GT(t,new WT)),t.offlineComponents}async function zh(t){return t.onlineComponents||(N("FirestoreClient","Using default OnlineComponentProvider"),await KT(t,new ry)),t.onlineComponents}function QT(t){return iy(t).then(e=>e.persistence)}function sy(t){return iy(t).then(e=>e.localStore)}function YT(t){return zh(t).then(e=>e.remoteStore)}function oy(t){return zh(t).then(e=>e.syncEngine)}async function to(t){const e=await zh(t),n=e.eventManager;return n.onListen=kU.bind(null,e.syncEngine),n.onUnlisten=CU.bind(null,e.syncEngine),n}function KU(t){return t.asyncQueue.enqueue(async()=>{const e=await QT(t),n=await YT(t);return e.setNetworkEnabled(!0),function(r){const i=P(r);return i.lu.delete(0),Du(i)}(n)})}function QU(t){return t.asyncQueue.enqueue(async()=>{const e=await QT(t),n=await YT(t);return e.setNetworkEnabled(!1),async function(r){const i=P(r);i.lu.add(0),await vo(i),i._u.set("Offline")}(n)})}function YU(t,e){const n=new Ue;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await function(a,u){const l=P(a);return l.persistence.runTransaction("read document","readonly",c=>l.ai.Bs(c,u))}(r,i);o.isFoundDocument()?s.resolve(o):o.isNoDocument()?s.resolve(null):s.reject(new C(w.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=Io(o,`Failed to get document '${i} from cache`);s.reject(a)}}(await sy(t),e,n)),n.promise}function JT(t,e,n={}){const r=new Ue;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,u){const l=new qh({next:h=>{s.enqueueAndForget(()=>Kg(i,c));const d=h.docs.has(o);!d&&h.fromCache?u.reject(new C(w.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?u.reject(new C(w.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(h)},error:h=>u.reject(h)}),c=new Yg(yo(o.path),l,{includeMetadataChanges:!0,Du:!0});return Gg(i,c)}(await to(t),t.asyncQueue,e,n,r)),r.promise}function JU(t,e){const n=new Ue;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await Fc(r,i,!0),a=new BT(i,o.hi),u=a.Gu(o.documents),l=a.applyChanges(u,!1);s.resolve(l.snapshot)}catch(o){const a=Io(o,`Failed to execute query '${i} against cache`);s.reject(a)}}(await sy(t),e,n)),n.promise}function XT(t,e,n={}){const r=new Ue;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,u){const l=new qh({next:h=>{s.enqueueAndForget(()=>Kg(i,c)),h.fromCache&&a.source==="server"?u.reject(new C(w.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(h)},error:h=>u.reject(h)}),c=new Yg(o,l,{includeMetadataChanges:!0,Du:!0});return Gg(i,c)}(await to(t),t.asyncQueue,e,n,r)),r.promise}function XU(t,e){const n=new qh(e);return t.asyncQueue.enqueueAndForget(async()=>function(r,i){P(r).Tu.add(i),i.next()}(await to(t),n)),()=>{n.pa(),t.asyncQueue.enqueueAndForget(async()=>function(r,i){P(r).Tu.delete(i)}(await to(t),n))}}function ZU(t,e){const n=new Ue;return t.asyncQueue.enqueueAndForget(async()=>{const r=await function(i){return zh(i).then(s=>s.datastore)}(t);new HU(t.asyncQueue,r,e,n).run()}),n.promise}function eF(t,e,n,r){const i=function(s,o){let a;return a=typeof s=="string"?new TextEncoder().encode(s):s,function(u,l){return new jU(u,l)}(function(u,l){if(u instanceof Uint8Array)return T_(u,l);if(u instanceof ArrayBuffer)return T_(new Uint8Array(u),l);if(u instanceof ReadableStream)return u.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(n,Pu(e));t.asyncQueue.enqueueAndForget(async()=>{qU(await oy(t),i,r)})}function tF(t,e){return t.asyncQueue.enqueue(async()=>function(n,r){const i=P(n);return i.persistence.runTransaction("Get named query","readonly",s=>i.ds.getNamedQuery(s,r))}(await sy(t),e))}const k_=new Map;/**
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
 */function ay(t,e,n){if(!n)throw new C(w.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ZT(t,e,n,r){if(e===!0&&r===!0)throw new C(w.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function C_(t){if(!x.isDocumentKey(t))throw new C(w.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function R_(t){if(x.isDocumentKey(t))throw new C(w.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function jh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":$()}function ee(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new C(w.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=jh(t);throw new C(w.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function ek(t,e){if(e<=0)throw new C(w.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class A_{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new C(w.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new C(w.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,ZT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Ou{constructor(e,n,r){this._authCredentials=n,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new A_({}),this._settingsFrozen=!1,e instanceof Gn?this._databaseId=e:(this._app=e,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new C(w.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Gn(i.options.projectId)}(e))}get app(){if(!this._app)throw new C(w.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new C(w.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new A_(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new nM;switch(n.type){case"gapi":const r=n.client;return z(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new oM(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new C(w.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=k_.get(e);n&&(N("ComponentProvider","Removing Datastore"),k_.delete(e),n.terminate())}(this),Promise.resolve()}}function nF(t,e,n,r={}){var i;const s=(t=ee(t,Ou))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&ja("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=We.MOCK_USER;else{o=GI(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new C(w.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new We(u)}t._authCredentials=new rM(new RS(o,a))}}/**
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
 */class ue{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new In(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ue(this.firestore,e,this._key)}}class ut{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ut(this.firestore,e,this._query)}}class In extends ut{constructor(e,n,r){super(e,n,yo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ue(this.firestore,null,new x(e))}withConverter(e){return new In(this.firestore,e,this._path)}}function tk(t,e,...n){if(t=U(t),ay("collection","path",e),t instanceof Ou){const r=J.fromString(e,...n);return R_(r),new In(t,null,r)}{if(!(t instanceof ue||t instanceof In))throw new C(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(J.fromString(e,...n));return R_(r),new In(t.firestore,null,r)}}function rF(t,e){if(t=ee(t,Ou),ay("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new C(w.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new ut(t,null,function(n){return new er(J.emptyPath(),n)}(e))}function zc(t,e,...n){if(t=U(t),arguments.length===1&&(e=AS.R()),ay("doc","path",e),t instanceof Ou){const r=J.fromString(e,...n);return C_(r),new ue(t,null,new x(r))}{if(!(t instanceof ue||t instanceof In))throw new C(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(J.fromString(e,...n));return C_(r),new ue(t.firestore,t instanceof In?t.converter:null,new x(r))}}function nk(t,e){return t=U(t),e=U(e),(t instanceof ue||t instanceof In)&&(e instanceof ue||e instanceof In)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function rk(t,e){return t=U(t),e=U(e),t instanceof ut&&e instanceof ut&&t.firestore===e.firestore&&Cu(t._query,e._query)&&t.converter===e.converter}/**
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
 */class iF{constructor(){this.Na=Promise.resolve(),this.ka=[],this.Ma=!1,this.Oa=[],this.Fa=null,this.$a=!1,this.Ba=!1,this.La=[],this.So=new qg(this,"async_queue_retry"),this.Ua=()=>{const n=jl();n&&N("AsyncQueue","Visibility state changed to "+n.visibilityState),this.So.Eo()};const e=jl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Ua)}get isShuttingDown(){return this.Ma}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.qa(),this.Ga(e)}enterRestrictedMode(e){if(!this.Ma){this.Ma=!0,this.Ba=e||!1;const n=jl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Ua)}}enqueue(e){if(this.qa(),this.Ma)return new Promise(()=>{});const n=new Ue;return this.Ga(()=>this.Ma&&this.Ba?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.ka.push(e),this.Ka()))}async Ka(){if(this.ka.length!==0){try{await this.ka[0](),this.ka.shift(),this.So.reset()}catch(e){if(!zi(e))throw e;N("AsyncQueue","Operation failed with retryable error: "+e)}this.ka.length>0&&this.So.Io(()=>this.Ka())}}Ga(e){const n=this.Na.then(()=>(this.$a=!0,e().catch(r=>{this.Fa=r,this.$a=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Te("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.$a=!1,r))));return this.Na=n,n}enqueueAfterDelay(e,n,r){this.qa(),this.La.indexOf(e)>-1&&(n=0);const i=Hg.createAndSchedule(this,e,n,r,s=>this.Qa(s));return this.Oa.push(i),i}qa(){this.Fa&&$()}verifyOperationInProgress(){}async ja(){let e;do e=this.Na,await e;while(e!==this.Na)}Wa(e){for(const n of this.Oa)if(n.timerId===e)return!0;return!1}za(e){return this.ja().then(()=>{this.Oa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Oa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ja()})}Ha(e){this.La.push(e)}Qa(e){const n=this.Oa.indexOf(e);this.Oa.splice(n,1)}}function Sp(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class sF{constructor(){this._progressObserver={},this._taskCompletionResolver=new Ue,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const oF=-1;class ge extends Ou{constructor(e,n,r){super(e,n,r),this.type="firestore",this._queue=new iF,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||ik(this),this._firestoreClient.terminate()}}function je(t){return t._firestoreClient||ik(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function ik(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new fM(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new GU(t._authCredentials,t._appCheckCredentials,t._queue,r)}function aF(t,e){ok(t=ee(t,ge));const n=je(t),r=t._freezeSettings(),i=new ry;return sk(n,i,new HT(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function uF(t){ok(t=ee(t,ge));const e=je(t),n=t._freezeSettings(),r=new ry;return sk(e,r,new zU(r,n.cacheSizeBytes))}function sk(t,e,n){const r=new Ue;return t.asyncQueue.enqueue(async()=>{try{await GT(t,n),await KT(t,e),r.resolve()}catch(i){if(!function(s){return s.name==="FirebaseError"?s.code===w.FAILED_PRECONDITION||s.code===w.UNIMPLEMENTED:typeof DOMException!="undefined"&&s instanceof DOMException?s.code===22||s.code===20||s.code===11:!0}(i))throw i;console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+i),r.reject(i)}}).then(()=>r.promise)}function lF(t){if(t._initialized&&!t._terminated)throw new C(w.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new Ue;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(n){if(!nn.vt())return Promise.resolve();const r=n+"main";await nn.delete(r)}($g(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function cF(t){return function(e){const n=new Ue;return e.asyncQueue.enqueueAndForget(async()=>xU(await oy(e),n)),n.promise}(je(t=ee(t,ge)))}function hF(t){return KU(je(t=ee(t,ge)))}function dF(t){return QU(je(t=ee(t,ge)))}function fF(t,e){const n=je(t=ee(t,ge)),r=new sF;return eF(n,t._databaseId,e,r),r}function pF(t,e){return tF(je(t=ee(t,ge)),e).then(n=>n?new ut(t,null,n.query):null)}function ok(t){if(t._initialized||t._terminated)throw new C(w.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
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
 *//**
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
 */class Dr{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new C(w.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Me(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class kn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new kn(xe.fromBase64String(e))}catch(n){throw new C(w.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new kn(xe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Wi{constructor(e){this._methodName=e}}/**
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
 */class Wh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new C(w.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new C(w.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return K(this._lat,e._lat)||K(this._long,e._long)}}/**
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
 */const mF=/^__.*__$/;class gF{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new qi(e,this.data,this.fieldMask,n,this.fieldTransforms):new Au(e,this.data,n,this.fieldTransforms)}}class ak{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new qi(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function uk(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw $()}}class Hh{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.M=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ja(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ya(){return this.settings.Ya}Xa(e){return new Hh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Za(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Xa({path:r,tc:!1});return i.ec(e),i}nc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Xa({path:r,tc:!1});return i.Ja(),i}sc(e){return this.Xa({path:void 0,tc:!0})}ic(e){return jc(e,this.settings.methodName,this.settings.rc||!1,this.path,this.settings.oc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ja(){if(this.path)for(let e=0;e<this.path.length;e++)this.ec(this.path.get(e))}ec(e){if(e.length===0)throw this.ic("Document fields must not be empty");if(uk(this.Ya)&&mF.test(e))throw this.ic('Document fields cannot begin and end with "__"')}}class yF{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.M=r||Pu(e)}uc(e,n,r,i=!1){return new Hh({Ya:e,methodName:n,oc:r,path:Me.emptyPath(),tc:!1,rc:i},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function Hi(t){const e=t._freezeSettings(),n=Pu(t._databaseId);return new yF(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Gh(t,e,n,r,i,s={}){const o=t.uc(s.merge||s.mergeFields?2:0,e,n,i);hy("Data must be an object, but it was:",o,r);const a=hk(r,o);let u,l;if(s.merge)u=new Hs(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=Tp(e,h,n);if(!o.contains(d))throw new C(w.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);fk(c,d)||c.push(d)}u=new Hs(c),l=o.fieldTransforms.filter(h=>u.covers(h.field))}else u=null,l=o.fieldTransforms;return new gF(new it(a),u,l)}class Lu extends Wi{_toFieldTransform(e){if(e.Ya!==2)throw e.Ya===1?e.ic(`${this._methodName}() can only appear at the top level of your update data`):e.ic(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Lu}}function lk(t,e,n){return new Hh({Ya:3,oc:e.settings.oc,methodName:t._methodName,tc:n},e.databaseId,e.M,e.ignoreUndefinedProperties)}class uy extends Wi{_toFieldTransform(e){return new Ru(e.path,new Qs)}isEqual(e){return e instanceof uy}}class vF extends Wi{constructor(e,n){super(e),this.ac=n}_toFieldTransform(e){const n=lk(this,e,!0),r=this.ac.map(s=>Gi(s,n)),i=new Ni(r);return new Ru(e.path,i)}isEqual(e){return this===e}}class wF extends Wi{constructor(e,n){super(e),this.ac=n}_toFieldTransform(e){const n=lk(this,e,!0),r=this.ac.map(s=>Gi(s,n)),i=new bi(r);return new Ru(e.path,i)}isEqual(e){return this===e}}class _F extends Wi{constructor(e,n){super(e),this.cc=n}_toFieldTransform(e){const n=new Ys(e.M,WS(e.M,this.cc));return new Ru(e.path,n)}isEqual(e){return this===e}}function ly(t,e,n,r){const i=t.uc(1,e,n);hy("Data must be an object, but it was:",i,r);const s=[],o=it.empty();Vi(r,(u,l)=>{const c=dy(e,u,n);l=U(l);const h=i.nc(c);if(l instanceof Lu)s.push(c);else{const d=Gi(l,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new Hs(s);return new ak(o,a,i.fieldTransforms)}function cy(t,e,n,r,i,s){const o=t.uc(1,e,n),a=[Tp(e,r,n)],u=[i];if(s.length%2!=0)throw new C(w.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Tp(e,s[d])),u.push(s[d+1]);const l=[],c=it.empty();for(let d=a.length-1;d>=0;--d)if(!fk(l,a[d])){const p=a[d];let m=u[d];m=U(m);const I=o.nc(p);if(m instanceof Lu)l.push(p);else{const R=Gi(m,I);R!=null&&(l.push(p),c.set(p,R))}}const h=new Hs(l);return new ak(c,h,o.fieldTransforms)}function ck(t,e,n,r=!1){return Gi(n,t.uc(r?4:3,e))}function Gi(t,e){if(dk(t=U(t)))return hy("Unsupported field value:",e,t),hk(t,e);if(t instanceof Wi)return function(n,r){if(!uk(r.Ya))throw r.ic(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ic(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.tc&&e.Ya!==4)throw e.ic("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=Gi(o,r.sc(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=U(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return WS(r.M,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=_e.fromDate(n);return{timestampValue:Ya(r.M,i)}}if(n instanceof _e){const i=new _e(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ya(r.M,i)}}if(n instanceof Wh)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof kn)return{bytesValue:tT(r.M,n._byteString)};if(n instanceof ue){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.ic(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Rg(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ic(`Unsupported field value: ${jh(n)}`)}(t,e)}function hk(t,e){const n={};return bS(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Vi(t,(r,i)=>{const s=Gi(i,e.Za(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function dk(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof _e||t instanceof Wh||t instanceof kn||t instanceof ue||t instanceof Wi)}function hy(t,e,n){if(!dk(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=jh(n);throw r==="an object"?e.ic(t+" a custom object"):e.ic(t+" "+r)}}function Tp(t,e,n){if((e=U(e))instanceof Dr)return e._internalPath;if(typeof e=="string")return dy(t,e);throw jc("Field path arguments must be of type string or ",t,!1,void 0,n)}const IF=new RegExp("[~\\*/\\[\\]]");function dy(t,e,n){if(e.search(IF)>=0)throw jc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Dr(...e.split("."))._internalPath}catch{throw jc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function jc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new C(w.INVALID_ARGUMENT,a+t+u)}function fk(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class tu{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ue(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new EF(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Kh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class EF extends tu{data(){return super.data()}}function Kh(t,e){return typeof e=="string"?dy(t,e):e instanceof Dr?e._internalPath:e._delegate._internalPath}/**
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
 */class ai{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Qn extends tu{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new da(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Kh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class da extends Qn{data(e={}){return super.data(e)}}class Or{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ai(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new da(this._firestore,this._userDataWriter,r.key,r,new ai(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new C(w.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new da(r._firestore,r._userDataWriter,o.doc.key,o.doc,new ai(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:s++}))}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new da(r._firestore,r._userDataWriter,o.doc.key,o.doc,new ai(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,l=-1;return o.type!==0&&(u=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),l=s.indexOf(o.doc.key)),{type:SF(o.type),doc:a,oldIndex:u,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function SF(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return $()}}function pk(t,e){return t instanceof Qn&&e instanceof Qn?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof Or&&e instanceof Or&&t._firestore===e._firestore&&rk(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
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
 */function mk(t){if(Mc(t)&&t.explicitOrderBy.length===0)throw new C(w.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Mu{}function ir(t,...e){for(const n of e)t=n._apply(t);return t}class TF extends Mu{constructor(e,n,r){super(),this.hc=e,this.lc=n,this.fc=r,this.type="where"}_apply(e){const n=Hi(e.firestore),r=function(i,s,o,a,u,l,c){let h;if(u.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new C(w.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){b_(c,l);const p=[];for(const m of c)p.push(N_(a,i,m));h={arrayValue:{values:p}}}else h=N_(a,i,c)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||b_(c,l),h=ck(o,s,c,l==="in"||l==="not-in");const d=Ge.create(u,l,h);return function(p,m){if(m.S()){const R=Sg(p);if(R!==null&&!R.isEqual(m.field))throw new C(w.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${R.toString()}' and '${m.field.toString()}'`);const g=Eg(p);g!==null&&_k(p,m.field,g)}const I=function(R,g){for(const f of R.filters)if(g.indexOf(f.op)>=0)return f.op;return null}(p,function(R){switch(R){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(m.op));if(I!==null)throw I===m.op?new C(w.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${m.op.toString()}' filter.`):new C(w.INVALID_ARGUMENT,`Invalid query. You cannot use '${m.op.toString()}' filters with '${I.toString()}' filters.`)}(i,d),d}(e._query,"where",n,e.firestore._databaseId,this.hc,this.lc,this.fc);return new ut(e.firestore,e.converter,function(i,s){const o=i.filters.concat([s]);return new er(i.path,i.collectionGroup,i.explicitOrderBy.slice(),o,i.limit,i.limitType,i.startAt,i.endAt)}(e._query,r))}}function kF(t,e,n){const r=e,i=Kh("where",t);return new TF(i,r,n)}class CF extends Mu{constructor(e,n){super(),this.hc=e,this.dc=n,this.type="orderBy"}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new C(w.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new C(w.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Ps(i,s);return function(a,u){if(Eg(a)===null){const l=Sg(a);l!==null&&_k(a,l,u.field)}}(r,o),o}(e._query,this.hc,this.dc);return new ut(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new er(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function RF(t,e="asc"){const n=e,r=Kh("orderBy",t);return new CF(r,n)}class gk extends Mu{constructor(e,n,r){super(),this.type=e,this._c=n,this.wc=r}_apply(e){return new ut(e.firestore,e.converter,FS(e._query,this._c,this.wc))}}function AF(t){return ek("limit",t),new gk("limit",t,"F")}function NF(t){return ek("limitToLast",t),new gk("limitToLast",t,"L")}class yk extends Mu{constructor(e,n,r){super(),this.type=e,this.mc=n,this.gc=r}_apply(e){const n=wk(e,this.type,this.mc,this.gc);return new ut(e.firestore,e.converter,function(r,i){return new er(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,i,r.endAt)}(e._query,n))}}function bF(...t){return new yk("startAt",t,!0)}function xF(...t){return new yk("startAfter",t,!1)}class vk extends Mu{constructor(e,n,r){super(),this.type=e,this.mc=n,this.gc=r}_apply(e){const n=wk(e,this.type,this.mc,this.gc);return new ut(e.firestore,e.converter,function(r,i){return new er(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,i)}(e._query,n))}}function PF(...t){return new vk("endBefore",t,!1)}function DF(...t){return new vk("endAt",t,!0)}function wk(t,e,n,r){if(n[0]=U(n[0]),n[0]instanceof tu)return function(i,s,o,a,u){if(!a)throw new C(w.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const l=[];for(const c of Ks(i))if(c.field.isKeyField())l.push(Gs(s,a.key));else{const h=a.data.field(c.field);if(Ig(h))throw new C(w.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+c.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=c.field.canonicalString();throw new C(w.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}l.push(h)}return new xr(l,u)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=Hi(t.firestore);return function(s,o,a,u,l,c){const h=s.explicitOrderBy;if(l.length>h.length)throw new C(w.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let p=0;p<l.length;p++){const m=l[p];if(h[p].field.isKeyField()){if(typeof m!="string")throw new C(w.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof m}`);if(!Tg(s)&&m.indexOf("/")!==-1)throw new C(w.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${m}' contains a slash.`);const I=s.path.child(J.fromString(m));if(!x.isDocumentKey(I))throw new C(w.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${I}' is not because it contains an odd number of segments.`);const R=new x(I);d.push(Gs(o,R))}else{const I=ck(a,u,m);d.push(I)}}return new xr(d,c)}(t._query,t.firestore._databaseId,i,e,n,r)}}function N_(t,e,n){if(typeof(n=U(n))=="string"){if(n==="")throw new C(w.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Tg(e)&&n.indexOf("/")!==-1)throw new C(w.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(J.fromString(n));if(!x.isDocumentKey(r))throw new C(w.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Gs(t,new x(r))}if(n instanceof ue)return Gs(t,n._key);throw new C(w.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${jh(n)}.`)}function b_(t,e){if(!Array.isArray(t)||t.length===0)throw new C(w.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new C(w.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function _k(t,e,n){if(!n.isEqual(e))throw new C(w.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
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
 */class fy{convertValue(e,n="none"){switch(Ri(e)){case 0:return null;case 1:return e.booleanValue;case 2:return pe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ci(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw $()}}convertObject(e,n){const r={};return Vi(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Wh(pe(e.latitude),pe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=xS(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ha(e));default:return null}}convertTimestamp(e){const n=Nr(e);return new _e(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=J.fromString(e);z(cT(r));const i=new Gn(r.get(1),r.get(3)),s=new x(r.popFirst(5));return i.isEqual(n)||Te(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function Qh(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class OF extends fy{constructor(e){super(),this.firestore=e}convertBytes(e){return new kn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ue(this.firestore,null,n)}}/**
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
 */class LF{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Hi(e)}set(e,n,r){this._verifyNotCommitted();const i=hr(e,this._firestore),s=Qh(i.converter,n,r),o=Gh(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,ke.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=hr(e,this._firestore);let o;return o=typeof(n=U(n))=="string"||n instanceof Dr?cy(this._dataReader,"WriteBatch.update",s._key,n,r,i):ly(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,ke.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=hr(e,this._firestore);return this._mutations=this._mutations.concat(new Nu(n._key,ke.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new C(w.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function hr(t,e){if((t=U(t)).firestore!==e)throw new C(w.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 *//**
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
 */function MF(t){t=ee(t,ue);const e=ee(t.firestore,ge);return JT(je(e),t._key).then(n=>py(e,t,n))}class Ki extends fy{constructor(e){super(),this.firestore=e}convertBytes(e){return new kn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ue(this.firestore,null,n)}}function $F(t){t=ee(t,ue);const e=ee(t.firestore,ge),n=je(e),r=new Ki(e);return YU(n,t._key).then(i=>new Qn(e,r,t._key,i,new ai(i!==null&&i.hasLocalMutations,!0),t.converter))}function UF(t){t=ee(t,ue);const e=ee(t.firestore,ge);return JT(je(e),t._key,{source:"server"}).then(n=>py(e,t,n))}function FF(t){t=ee(t,ut);const e=ee(t.firestore,ge),n=je(e),r=new Ki(e);return mk(t._query),XT(n,t._query).then(i=>new Or(e,r,t,i))}function VF(t){t=ee(t,ut);const e=ee(t.firestore,ge),n=je(e),r=new Ki(e);return JU(n,t._query).then(i=>new Or(e,r,t,i))}function BF(t){t=ee(t,ut);const e=ee(t.firestore,ge),n=je(e),r=new Ki(e);return XT(n,t._query,{source:"server"}).then(i=>new Or(e,r,t,i))}function x_(t,e,n){t=ee(t,ue);const r=ee(t.firestore,ge),i=Qh(t.converter,e,n);return $u(r,[Gh(Hi(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,ke.none())])}function P_(t,e,n,...r){t=ee(t,ue);const i=ee(t.firestore,ge),s=Hi(i);let o;return o=typeof(e=U(e))=="string"||e instanceof Dr?cy(s,"updateDoc",t._key,e,n,r):ly(s,"updateDoc",t._key,e),$u(i,[o.toMutation(t._key,ke.exists(!0))])}function qF(t){return $u(ee(t.firestore,ge),[new Nu(t._key,ke.none())])}function zF(t,e){const n=ee(t.firestore,ge),r=zc(t),i=Qh(t.converter,e);return $u(n,[Gh(Hi(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,ke.exists(!1))]).then(()=>r)}function Ik(t,...e){var n,r,i;t=U(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Sp(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Sp(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let u,l,c;if(t instanceof ue)l=ee(t.firestore,ge),c=yo(t._key.path),u={next:h=>{e[o]&&e[o](py(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=ee(t,ut);l=ee(h.firestore,ge),c=h._query;const d=new Ki(l);u={next:p=>{e[o]&&e[o](new Or(l,d,h,p))},error:e[o+1],complete:e[o+2]},mk(t._query)}return function(h,d,p,m){const I=new qh(m),R=new Yg(d,I,p);return h.asyncQueue.enqueueAndForget(async()=>Gg(await to(h),R)),()=>{I.pa(),h.asyncQueue.enqueueAndForget(async()=>Kg(await to(h),R))}}(je(l),c,a,u)}function jF(t,e){return XU(je(t=ee(t,ge)),Sp(e)?e:{next:e})}function $u(t,e){return function(n,r){const i=new Ue;return n.asyncQueue.enqueueAndForget(async()=>RU(await oy(n),r,i)),i.promise}(je(t),e)}function py(t,e,n){const r=n.docs.get(e._key),i=new Ki(t);return new Qn(t,i,e._key,r,new ai(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */class WF extends class{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=Hi(e)}get(e){const n=hr(e,this._firestore),r=new OF(this._firestore);return this._transaction.lookup([n._key]).then(i=>{if(!i||i.length!==1)return $();const s=i[0];if(s.isFoundDocument())return new tu(this._firestore,r,s.key,s,n.converter);if(s.isNoDocument())return new tu(this._firestore,r,n._key,null,n.converter);throw $()})}set(e,n,r){const i=hr(e,this._firestore),s=Qh(i.converter,n,r),o=Gh(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,r);return this._transaction.set(i._key,o),this}update(e,n,r,...i){const s=hr(e,this._firestore);let o;return o=typeof(n=U(n))=="string"||n instanceof Dr?cy(this._dataReader,"Transaction.update",s._key,n,r,i):ly(this._dataReader,"Transaction.update",s._key,n),this._transaction.update(s._key,o),this}delete(e){const n=hr(e,this._firestore);return this._transaction.delete(n._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=hr(e,this._firestore),r=new Ki(this._firestore);return super.get(e).then(i=>new Qn(this._firestore,r,n._key,i._document,new ai(!1,!1),n.converter))}}function HF(t,e){return ZU(je(t=ee(t,ge)),n=>e(new WF(t,n)))}/**
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
 */function GF(){return new Lu("deleteField")}function KF(){return new uy("serverTimestamp")}function QF(...t){return new vF("arrayUnion",t)}function YF(...t){return new wF("arrayRemove",t)}function JF(t){return new _F("increment",t)}(function(t,e=!0){(function(n){go=n})(Ur),jn(new Yt("firestore",(n,{options:r})=>{const i=n.getProvider("app").getImmediate(),s=new ge(i,new iM(n.getProvider("auth-internal")),new uM(n.getProvider("app-check-internal")));return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s},"PUBLIC")),Kt(bw,"3.4.7",t),Kt(bw,"3.4.7","esm2017")})();const XF="@firebase/firestore-compat",ZF="0.1.16";/**
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
 */function my(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new C("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function D_(){if(typeof Uint8Array=="undefined")throw new C("unimplemented","Uint8Arrays are not available in this environment.")}function O_(){if(!hM())throw new C("unimplemented","Blobs are unavailable in Firestore in this environment.")}class nu{constructor(e){this._delegate=e}static fromBase64String(e){return O_(),new nu(kn.fromBase64String(e))}static fromUint8Array(e){return D_(),new nu(kn.fromUint8Array(e))}toBase64(){return O_(),this._delegate.toBase64()}toUint8Array(){return D_(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
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
 */function kp(t){return e2(t,["next","error","complete"])}function e2(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
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
 */class t2{enableIndexedDbPersistence(e,n){return aF(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return uF(e._delegate)}clearIndexedDbPersistence(e){return lF(e._delegate)}}class Ek{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof Gn||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&ja("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){nF(this._delegate,e,n,r)}enableNetwork(){return hF(this._delegate)}disableNetwork(){return dF(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,ZT("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return cF(this._delegate)}onSnapshotsInSync(e){return jF(this._delegate,e)}get app(){if(!this._appCompat)throw new C("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new no(this,tk(this._delegate,e))}catch(n){throw ft(n,"collection()","Firestore.collection()")}}doc(e){try{return new jt(this,zc(this._delegate,e))}catch(n){throw ft(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new ht(this,rF(this._delegate,e))}catch(n){throw ft(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return HF(this._delegate,n=>e(new Sk(this,n)))}batch(){return je(this._delegate),new Tk(new LF(this._delegate,e=>$u(this._delegate,e)))}loadBundle(e){return fF(this._delegate,e)}namedQuery(e){return pF(this._delegate,e).then(n=>n?new ht(this,n):null)}}class Yh extends fy{constructor(e){super(),this.firestore=e}convertBytes(e){return new nu(new kn(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return jt.forKey(n,this.firestore,null)}}function n2(t){eM(t)}class Sk{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new Yh(e)}get(e){const n=ui(e);return this._delegate.get(n).then(r=>new ru(this._firestore,new Qn(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const i=ui(e);return r?(my("Transaction.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=ui(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=ui(e);return this._delegate.delete(n),this}}class Tk{constructor(e){this._delegate=e}set(e,n,r){const i=ui(e);return r?(my("WriteBatch.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=ui(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=ui(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class Oi{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new da(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new iu(this._firestore,r),n!=null?n:{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=Oi.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(n);return s||(s=new Oi(e,new Yh(e),n),i.set(n,s)),s}}Oi.INSTANCES=new WeakMap;class jt{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new Yh(e)}static forPath(e,n,r){if(e.length%2!==0)throw new C("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new jt(n,new ue(n._delegate,r,new x(e)))}static forKey(e,n,r){return new jt(n,new ue(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new no(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new no(this.firestore,tk(this._delegate,e))}catch(n){throw ft(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=U(e),e instanceof ue?nk(this._delegate,e):!1}set(e,n){n=my("DocumentReference.set",n);try{return n?x_(this._delegate,e,n):x_(this._delegate,e)}catch(r){throw ft(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?P_(this._delegate,e):P_(this._delegate,e,n,...r)}catch(i){throw ft(i,"updateDoc()","DocumentReference.update()")}}delete(){return qF(this._delegate)}onSnapshot(...e){const n=kk(e),r=Ck(e,i=>new ru(this.firestore,new Qn(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return Ik(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=$F(this._delegate):(e==null?void 0:e.source)==="server"?n=UF(this._delegate):n=MF(this._delegate),n.then(r=>new ru(this.firestore,new Qn(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new jt(this.firestore,e?this._delegate.withConverter(Oi.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function ft(t,e,n){return t.message=t.message.replace(e,n),t}function kk(t){for(const e of t)if(typeof e=="object"&&!kp(e))return e;return{}}function Ck(t,e){var n,r;let i;return kp(t[0])?i=t[0]:kp(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:s=>{i.next&&i.next(e(s))},error:(n=i.error)===null||n===void 0?void 0:n.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class ru{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new jt(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return pk(this._delegate,e._delegate)}}class iu extends ru{data(e){const n=this._delegate.data(e);return tM(n!==void 0),n}}class ht{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new Yh(e)}where(e,n,r){try{return new ht(this.firestore,ir(this._delegate,kF(e,n,r)))}catch(i){throw ft(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new ht(this.firestore,ir(this._delegate,RF(e,n)))}catch(r){throw ft(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new ht(this.firestore,ir(this._delegate,AF(e)))}catch(n){throw ft(n,"limit()","Query.limit()")}}limitToLast(e){try{return new ht(this.firestore,ir(this._delegate,NF(e)))}catch(n){throw ft(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new ht(this.firestore,ir(this._delegate,bF(...e)))}catch(n){throw ft(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new ht(this.firestore,ir(this._delegate,xF(...e)))}catch(n){throw ft(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new ht(this.firestore,ir(this._delegate,PF(...e)))}catch(n){throw ft(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new ht(this.firestore,ir(this._delegate,DF(...e)))}catch(n){throw ft(n,"endAt()","Query.endAt()")}}isEqual(e){return rk(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=VF(this._delegate):(e==null?void 0:e.source)==="server"?n=BF(this._delegate):n=FF(this._delegate),n.then(r=>new Cp(this.firestore,new Or(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=kk(e),r=Ck(e,i=>new Cp(this.firestore,new Or(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return Ik(this._delegate,n,r)}withConverter(e){return new ht(this.firestore,e?this._delegate.withConverter(Oi.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class r2{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new iu(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Cp{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new ht(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new iu(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new r2(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new iu(this._firestore,r))})}isEqual(e){return pk(this._delegate,e._delegate)}}class no extends ht{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new jt(this.firestore,e):null}doc(e){try{return e===void 0?new jt(this.firestore,zc(this._delegate)):new jt(this.firestore,zc(this._delegate,e))}catch(n){throw ft(n,"doc()","CollectionReference.doc()")}}add(e){return zF(this._delegate,e).then(n=>new jt(this.firestore,n))}isEqual(e){return nk(this._delegate,e._delegate)}withConverter(e){return new no(this.firestore,e?this._delegate.withConverter(Oi.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function ui(t){return ee(t,ue)}/**
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
 */class gy{constructor(...e){this._delegate=new Dr(...e)}static documentId(){return new gy(Me.keyField().canonicalString())}isEqual(e){return e=U(e),e instanceof Dr?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class ei{constructor(e){this._delegate=e}static serverTimestamp(){const e=KF();return e._methodName="FieldValue.serverTimestamp",new ei(e)}static delete(){const e=GF();return e._methodName="FieldValue.delete",new ei(e)}static arrayUnion(...e){const n=QF(...e);return n._methodName="FieldValue.arrayUnion",new ei(n)}static arrayRemove(...e){const n=YF(...e);return n._methodName="FieldValue.arrayRemove",new ei(n)}static increment(e){const n=JF(e);return n._methodName="FieldValue.increment",new ei(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const i2={Firestore:Ek,GeoPoint:Wh,Timestamp:_e,Blob:nu,Transaction:Sk,WriteBatch:Tk,DocumentReference:jt,DocumentSnapshot:ru,Query:ht,QueryDocumentSnapshot:iu,QuerySnapshot:Cp,CollectionReference:no,FieldPath:gy,FieldValue:ei,setLogLevel:n2,CACHE_SIZE_UNLIMITED:oF};function s2(t,e){t.INTERNAL.registerComponent(new Yt("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),i=n.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},i2)))}/**
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
 */function o2(t){s2(t,(e,n)=>new Ek(e,n,new t2)),t.registerVersion(XF,ZF)}o2(un);un.initializeApp({apiKey:"AIzaSyC0bWgbwItqW3LAIr4Fyi9OSYPGyYMmhj0",authDomain:"epmnews1.firebaseapp.com",projectId:"epmnews1",storageBucket:"epmnews1.appspot.com",messagingSenderId:"12500658406",appId:"1:12500658406:web:3fc1977d770f7ecfd9f327",measurementId:"G-W6PL87VTPR"});const An=un.auth(),iV=un.storage(),sV=un.firestore(),oV=un.firestore.FieldValue.serverTimestamp;var Jh={exports:{}},Xh={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a2=V.exports,u2=Symbol.for("react.element"),l2=Symbol.for("react.fragment"),c2=Object.prototype.hasOwnProperty,h2=a2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d2={key:!0,ref:!0,__self:!0,__source:!0};function Rk(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)c2.call(e,r)&&!d2.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:u2,type:t,key:s,ref:o,props:i,_owner:h2.current}}Xh.Fragment=l2;Xh.jsx=Rk;Xh.jsxs=Rk;Jh.exports=Xh;const G=Jh.exports.jsx,su=Jh.exports.jsxs,f2=Jh.exports.Fragment,Ak=V.exports.createContext();function p2(){return V.exports.useContext(Ak)}function m2({children:t}){const[e,n]=V.exports.useState(),[r,i]=V.exports.useState(!0);async function s(d,p){return An.createUserWithEmailAndPassword(d,p).then(()=>{An.currentUser.sendEmailVerification()}).catch(alert)}async function o(){return An.currentUser.delete()}async function a(d,p){return An.signInWithEmailAndPassword(d,p).then(()=>{An.currentUser.emailVerified!==!0&&An.currentUser.delete()})}function u(){return An.signOut()}function l(d){return An.sendPasswordResetEmail(d)}function c(d){return e.updatePassword(d)}V.exports.useEffect(()=>An.onAuthStateChanged(p=>{n(p),i(!1)}),[]);const h={currentUser:e,login:a,signup:s,logout:u,resetPassword:l,updatePassword:c,deltAccount:o};return G(Ak.Provider,{value:h,children:!r&&t})}function Wc(){return Wc=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Wc.apply(this,arguments)}var li;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(li||(li={}));var L_=function(t){return t},M_="beforeunload",g2="popstate";function y2(t){t===void 0&&(t={});var e=t,n=e.window,r=n===void 0?document.defaultView:n,i=r.history;function s(){var E=r.location,S=E.pathname,F=E.search,O=E.hash,q=i.state||{};return[q.idx,L_({pathname:S,search:F,hash:O,state:q.usr||null,key:q.key||"default"})]}var o=null;function a(){if(o)p.call(o),o=null;else{var E=li.Pop,S=s(),F=S[0],O=S[1];if(p.length){if(F!=null){var q=c-F;q&&(o={action:E,location:O,retry:function(){T(q*-1)}},T(q))}}else f(E)}}r.addEventListener(g2,a);var u=li.Pop,l=s(),c=l[0],h=l[1],d=U_(),p=U_();c==null&&(c=0,i.replaceState(Wc({},i.state,{idx:c}),""));function m(E){return typeof E=="string"?E:Rp(E)}function I(E,S){return S===void 0&&(S=null),L_(Wc({pathname:h.pathname,hash:"",search:""},typeof E=="string"?Qi(E):E,{state:S,key:v2()}))}function R(E,S){return[{usr:E.state,key:E.key,idx:S},m(E)]}function g(E,S,F){return!p.length||(p.call({action:E,location:S,retry:F}),!1)}function f(E){u=E;var S=s();c=S[0],h=S[1],d.call({action:u,location:h})}function y(E,S){var F=li.Push,O=I(E,S);function q(){y(E,S)}if(g(F,O,q)){var Ae=R(O,c+1),Rn=Ae[0],Wr=Ae[1];try{i.pushState(Rn,"",Wr)}catch{r.location.assign(Wr)}f(F)}}function v(E,S){var F=li.Replace,O=I(E,S);function q(){v(E,S)}if(g(F,O,q)){var Ae=R(O,c),Rn=Ae[0],Wr=Ae[1];i.replaceState(Rn,"",Wr),f(F)}}function T(E){i.go(E)}var k={get action(){return u},get location(){return h},createHref:m,push:y,replace:v,go:T,back:function(){T(-1)},forward:function(){T(1)},listen:function(S){return d.push(S)},block:function(S){var F=p.push(S);return p.length===1&&r.addEventListener(M_,$_),function(){F(),p.length||r.removeEventListener(M_,$_)}}};return k}function $_(t){t.preventDefault(),t.returnValue=""}function U_(){var t=[];return{get length(){return t.length},push:function(n){return t.push(n),function(){t=t.filter(function(r){return r!==n})}},call:function(n){t.forEach(function(r){return r&&r(n)})}}}function v2(){return Math.random().toString(36).substr(2,8)}function Rp(t){var e=t.pathname,n=e===void 0?"/":e,r=t.search,i=r===void 0?"":r,s=t.hash,o=s===void 0?"":s;return i&&i!=="?"&&(n+=i.charAt(0)==="?"?i:"?"+i),o&&o!=="#"&&(n+=o.charAt(0)==="#"?o:"#"+o),n}function Qi(t){var e={};if(t){var n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));var r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const yy=V.exports.createContext(null),vy=V.exports.createContext(null),Uu=V.exports.createContext({outlet:null,matches:[]});function an(t,e){if(!t)throw new Error(e)}function w2(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Qi(e):e,i=xk(r.pathname||"/",n);if(i==null)return null;let s=Nk(t);_2(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=N2(s[a],i);return o}function Nk(t,e,n,r){return e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r=""),t.forEach((i,s)=>{let o={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};o.relativePath.startsWith("/")&&(o.relativePath.startsWith(r)||an(!1),o.relativePath=o.relativePath.slice(r.length));let a=Er([r,o.relativePath]),u=n.concat(o);i.children&&i.children.length>0&&(i.index===!0&&an(!1),Nk(i.children,e,u,a)),!(i.path==null&&!i.index)&&e.push({path:a,score:R2(a,i.index),routesMeta:u})}),e}function _2(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:A2(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const I2=/^:\w+$/,E2=3,S2=2,T2=1,k2=10,C2=-2,F_=t=>t==="*";function R2(t,e){let n=t.split("/"),r=n.length;return n.some(F_)&&(r+=C2),e&&(r+=S2),n.filter(i=>!F_(i)).reduce((i,s)=>i+(I2.test(s)?E2:s===""?T2:k2),r)}function A2(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function N2(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],u=o===n.length-1,l=i==="/"?e:e.slice(i.length)||"/",c=b2({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},l);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:Er([i,c.pathname]),pathnameBase:Pk(Er([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=Er([i,c.pathnameBase]))}return s}function b2(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=x2(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((l,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return l[c]=P2(a[h]||""),l},{}),pathname:s,pathnameBase:o,pattern:t}}function x2(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0);let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(o,a)=>(r.push(a),"([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i+=n?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(i,e?void 0:"i"),r]}function P2(t,e){try{return decodeURIComponent(t)}catch{return t}}function D2(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Qi(t):t;return{pathname:n?n.startsWith("/")?n:O2(n,e):e,search:M2(r),hash:$2(i)}}function O2(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function bk(t,e,n){let r=typeof t=="string"?Qi(t):t,i=t===""||r.pathname===""?"/":r.pathname,s;if(i==null)s=n;else{let a=e.length-1;if(i.startsWith("..")){let u=i.split("/");for(;u[0]==="..";)u.shift(),a-=1;r.pathname=u.join("/")}s=a>=0?e[a]:"/"}let o=D2(r,s);return i&&i!=="/"&&i.endsWith("/")&&!o.pathname.endsWith("/")&&(o.pathname+="/"),o}function L2(t){return t===""||t.pathname===""?"/":typeof t=="string"?Qi(t).pathname:t.pathname}function xk(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=t.charAt(e.length);return n&&n!=="/"?null:t.slice(e.length)||"/"}const Er=t=>t.join("/").replace(/\/\/+/g,"/"),Pk=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),M2=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,$2=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function U2(t){Eo()||an(!1);let{basename:e,navigator:n}=V.exports.useContext(yy),{hash:r,pathname:i,search:s}=Ok(t),o=i;if(e!=="/"){let a=L2(t),u=a!=null&&a.endsWith("/");o=i==="/"?e+(u?"/":""):Er([e,i])}return n.createHref({pathname:o,search:s,hash:r})}function Eo(){return V.exports.useContext(vy)!=null}function Zh(){return Eo()||an(!1),V.exports.useContext(vy).location}function Dk(){Eo()||an(!1);let{basename:t,navigator:e}=V.exports.useContext(yy),{matches:n}=V.exports.useContext(Uu),{pathname:r}=Zh(),i=JSON.stringify(n.map(a=>a.pathnameBase)),s=V.exports.useRef(!1);return V.exports.useEffect(()=>{s.current=!0}),V.exports.useCallback(function(a,u){if(u===void 0&&(u={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let l=bk(a,JSON.parse(i),r);t!=="/"&&(l.pathname=Er([t,l.pathname])),(u.replace?e.replace:e.push)(l,u.state)},[t,e,i,r])}function aV(){let{matches:t}=V.exports.useContext(Uu),e=t[t.length-1];return e?e.params:{}}function Ok(t){let{matches:e}=V.exports.useContext(Uu),{pathname:n}=Zh(),r=JSON.stringify(e.map(i=>i.pathnameBase));return V.exports.useMemo(()=>bk(t,JSON.parse(r),n),[t,r,n])}function F2(t,e){Eo()||an(!1);let{matches:n}=V.exports.useContext(Uu),r=n[n.length-1],i=r?r.params:{};r&&r.pathname;let s=r?r.pathnameBase:"/";r&&r.route;let o=Zh(),a;if(e){var u;let d=typeof e=="string"?Qi(e):e;s==="/"||((u=d.pathname)==null?void 0:u.startsWith(s))||an(!1),a=d}else a=o;let l=a.pathname||"/",c=s==="/"?l:l.slice(s.length)||"/",h=w2(t,{pathname:c});return V2(h&&h.map(d=>Object.assign({},d,{params:Object.assign({},i,d.params),pathname:Er([s,d.pathname]),pathnameBase:d.pathnameBase==="/"?s:Er([s,d.pathnameBase])})),n)}function V2(t,e){return e===void 0&&(e=[]),t==null?null:t.reduceRight((n,r,i)=>V.exports.createElement(Uu.Provider,{children:r.route.element!==void 0?r.route.element:n,value:{outlet:n,matches:e.concat(t.slice(0,i+1))}}),null)}function B2(t){let{to:e,replace:n,state:r}=t;Eo()||an(!1);let i=Dk();return V.exports.useEffect(()=>{i(e,{replace:n,state:r})}),null}function ss(t){an(!1)}function q2(t){let{basename:e="/",children:n=null,location:r,navigationType:i=li.Pop,navigator:s,static:o=!1}=t;Eo()&&an(!1);let a=Pk(e),u=V.exports.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Qi(r));let{pathname:l="/",search:c="",hash:h="",state:d=null,key:p="default"}=r,m=V.exports.useMemo(()=>{let I=xk(l,a);return I==null?null:{pathname:I,search:c,hash:h,state:d,key:p}},[a,l,c,h,d,p]);return m==null?null:V.exports.createElement(yy.Provider,{value:u},V.exports.createElement(vy.Provider,{children:n,value:{location:m,navigationType:i}}))}function z2(t){let{children:e,location:n}=t;return F2(Ap(e),n)}function Ap(t){let e=[];return V.exports.Children.forEach(t,n=>{if(!V.exports.isValidElement(n))return;if(n.type===V.exports.Fragment){e.push.apply(e,Ap(n.props.children));return}n.type!==ss&&an(!1);let r={caseSensitive:n.props.caseSensitive,element:n.props.element,index:n.props.index,path:n.props.path};n.props.children&&(r.children=Ap(n.props.children)),e.push(r)}),e}/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Np(){return Np=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Np.apply(this,arguments)}function j2(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}const W2=["onClick","reloadDocument","replace","state","target","to"];function H2(t){let{basename:e,children:n,window:r}=t,i=V.exports.useRef();i.current==null&&(i.current=y2({window:r}));let s=i.current,[o,a]=V.exports.useState({action:s.action,location:s.location});return V.exports.useLayoutEffect(()=>s.listen(a),[s]),V.exports.createElement(q2,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}function G2(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}const K2=V.exports.forwardRef(function(e,n){let{onClick:r,reloadDocument:i,replace:s=!1,state:o,target:a,to:u}=e,l=j2(e,W2),c=U2(u),h=Q2(u,{replace:s,state:o,target:a});function d(p){r&&r(p),!p.defaultPrevented&&!i&&h(p)}return V.exports.createElement("a",Np({},l,{href:c,onClick:d,ref:n,target:a}))});function Q2(t,e){let{target:n,replace:r,state:i}=e===void 0?{}:e,s=Dk(),o=Zh(),a=Ok(t);return V.exports.useCallback(u=>{if(u.button===0&&(!n||n==="_self")&&!G2(u)){u.preventDefault();let l=!!r||Rp(o)===Rp(a);s(t,{replace:l,state:i})}},[o,s,a,r,i,n,t])}function Jd({children:t}){const{currentUser:e}=p2();return e?t:G(B2,{to:"/login"})}var Y2="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABmZJREFUWEeVl2tsHFcVx3/z2PWuX0vTNmnS2CYxprXakjggQerEr5bwJR8Rn4CqQS19SFbyoVJaSisKjcpDSBWthEqLAqlUUURjAQFUpail5uECDomE4jRVGid2Eqem9drrze7OzL3o3pmdndmdTeDKWs/u3Hvu/5zzP/97riGllCABA/VkGMSH/6o6JZgJQjiUT7yMvWkMO9eFgVm3sPZVIjGU/cCUelN9NnwA/99QK7zZN+D4QUT7BuzhJzCsthB8dKNGy1U4/htDSiGRhvrTjl5rSDzcpXMYkwewvDLKnLtxEHvgPgzTxAgNXR1GdR9DCqniEwmxH67kIXErRby3v02qMB/OE4DYugerexizmsPE/ePeBxHwc3At79VSKQXu9IvY5yf9cKsPzSCJsFqQOx7HzvVgRImkjQc71G3kv4qQIAaifrKUuLNvYf3rp41E1QGUuO0bsYYex0q1RWiWFMua8RBAIvmDspAIvPwsUuXdLV8lQRK3awh7YA+mYTXsHHgcK7WwCqql0AhEIpwi3p+eIrVyUedKFZRPnLphgKKUO7CHdNdILRXRNERrUFnRVRAYi0U9+OIJF+/YS9hzk03IWc8giWdmEEOPkurcnJguH4NP9pgO1ANVyuTMvol5/CCmlo5rjGo1BXxg6DFSdof2rxnRE4SoqooSd2kWY/I7WKJSU0O/dtDCkTQCEJqU3TtJbf0aRgIfajrQRAmdygpi8gDp5TmfNIHh0Mmmwaj5KjBwB+4J+JAk1ZoDjVKs6r1y7EVS598OyqmZLAW4FL7wRInPdc0shkpFblNywDSAugQ5Vz6k9N4ffcdV/qQknUprhvsiU0uTsiqEh+cJ/c6yLExTrfFrxXVczM4NtPUM1gHwbSRGoFgssm/fPrZs2cLCwgL9/f168dTUFLt27dIb3XrLLTz3/POMjo4yPT2NnUrx8Z4eSqUSa9asIZ/Pc/HiRSqVCqMjIwzu3JmoH00B7N+/n4Ft21gtFMh9LIel3MJgcXFRb7B9+3bePf0uE4cn6O7uJteZ4+7P38WRI0eYOTXD7t27WXvjWqam3tGAx8fHg5KMkldxQEgVrRCdJzy+OTHB1KkZfbplMhlaWlq0J6lUCqfiIFApSZG7sUxJnCRfKFAulWlryyKFQJGvJZOmtFqi4lToyLXx4PC97No4VqclVRKGkguHj/2TL77wkg65T47kYaUdPjn2PsV8nnNnzmuwiaovJa0b0my6uYs3x37N9ZnrFUFCOY6lYLGwymeeforZpRW/6hJLT4ES9Gy7zHU9HzJfvIQ4K/loeSVB+wV21qCjtx1MyVe7vsQPP30gFoWwH1BmH3j5EC/8+S8+OzUAXQJ1hj061q3St2MB4VWYLZ6n1cty+eQSnlSdgT987JLOvixmVpUFWJj88s6DDK0bDFMengVvzJzkC88+hxcLe62X881KTNvhtrvnybQ6OMJhtjinyWUvpvlgfinUfiEFretayNyUigCC3uxmjo5O0KmObK0fUsjlUpnPPvM0MwuLAfxAvHXP4UdBx0FKurdeYm3vso5RFIAhTYrvlSkVK9qGlTHp6MtgmD7rowo63vt1nrj9EV9nVBE8dvg1nnn9aGITEV3YfkOBW3dcwjD9UDvS4ezqHJbGKzGumHx0uqCfc5tbMdvN2MZ+DKFFpjky/AsG1tyB8c7Z9+XO73+XslfFWUt5dHPTdukfm6O13fdQA6imIHRRUr4gENIle3M6ocev2d7W8Sl+M/IKxlszp+TpDy7HuZZw4niZAofyz1KRTiOAqrZIQXdLF3v7HoIg9FWvwymR/vOu9cNKiEQgROpiEvYmjQe4hENnXuVHZ34SMjjKAbWRjcWvtv+MwbWfq7kaeUo6SeNSnHg1qvngiArj/9jP3/Mn9D1IA7gy5wOSkr2feJhv3LYXw7Tiut/Y6YS09AFETsPGBivCYCmZL17gnr89xIpYDTmgZgx03s5vh18ha2dj3je5HoTa39iS1SetLpgK7+8uvM63/v0DHKmEaI52M8sfRl6jv7MvfidITETD1axe6pK7t+qv6r8rPZ48cYDfXzrKueIc37vjSe7t/Yq+FdVWN+sC46giEQgW/E/rJP8pL/Plv97PdXY7P7/zx9imr3hJIzSZ0HZrJYzdBpsBiIbAUNc0mF48zvq2m1jfuq6xZb+qIzVj/wVDoSlwGUGicwAAAABJRU5ErkJggg==";const J2=()=>G("nav",{className:"relative flex w-full flex-wrap items-center justify-between bg-logo1",children:G("div",{className:"container lg:px-0 px-4 max-w-4xl mx-auto flex flex-wrap items-center justify-between",children:G("div",{className:"w-full relative flex justify-center",children:su(K2,{to:"/",className:"flex items-center text-base font-bold leading-relaxed mr-4 py-2 whitespace-nowrap uppercase text-white hover:opacity-90",children:[G("img",{className:"h-8 rounded-lg object-cover",src:Y2,alt:"logo"}),G("b",{className:"px-2",children:"EPM News"})]})})})});function Bo(){return G(f2,{children:su("div",{className:"flex flex-col w-full h-screen bg-logo2",children:[G("div",{className:"mx-auto my-auto",children:G("div",{className:"h-16 w-16 rounded-full animate-spin border-y-red-300 border-x-zinc-700 border-y-4 border-x-4 border-black"})}),su("div",{className:"flex w-full bg-logo1",children:[G("p",{className:"text-zinc-200 mx-auto py-5 text-xs",children:"Nothing Down here simply here for style"}),"]"]})]})})}const X2=V.exports.lazy(()=>hu(()=>import("./Editor.364c96ef.js"),["assets/Editor.364c96ef.js","assets/Helmet.0eafa913.js","assets/jodit-react.0c0a6c5c.js"])),Z2=V.exports.lazy(()=>hu(()=>import("./Dashboard.ee55f2e4.js"),["assets/Dashboard.ee55f2e4.js","assets/Helmet.0eafa913.js"])),eV=V.exports.lazy(()=>hu(()=>import("./UpdatePost.0631fc40.js"),["assets/UpdatePost.0631fc40.js","assets/jodit-react.0c0a6c5c.js","assets/Helmet.0eafa913.js"])),tV=V.exports.lazy(()=>hu(()=>import("./Login.4eea3ea1.js"),[])),nV=V.exports.lazy(()=>hu(()=>import("./Contents.f1c143b1.js"),[]));function rV(){return su(H2,{children:[G(J2,{}),G(m2,{children:su(z2,{children:[G(ss,{path:"/",element:G(V.exports.Suspense,{fallback:G(Bo,{}),children:G(Jd,{children:G(Z2,{})})})}),G(ss,{path:"/conts",element:G(V.exports.Suspense,{fallback:G(Bo,{}),children:G(nV,{})})}),G(ss,{path:"/login",element:G(V.exports.Suspense,{fallback:G(Bo,{}),children:G(tV,{})})}),G(ss,{path:"/edit",element:G(V.exports.Suspense,{fallback:G(Bo,{}),children:G(Jd,{children:G(X2,{})})})}),G(ss,{path:"/UpdatePost/:docID",element:G(V.exports.Suspense,{fallback:G(Bo,{}),children:G(Jd,{children:G(eV,{})})})})]})})]})}eA.render(G(Jk.StrictMode,{children:G(rV,{})}),document.getElementById("root"));export{f2 as F,K2 as L,Jk as R,Bo as S,G as a,Dk as b,An as c,sV as d,aV as e,su as j,V as r,iV as s,oV as t,p2 as u};
