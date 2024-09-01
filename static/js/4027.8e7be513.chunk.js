"use strict";(self.webpackChunktyphoon=self.webpackChunktyphoon||[]).push([[4027],{84027:(t,r,e)=>{var n;e.r(r),e.d(r,{default:()=>o});var a,o=(a="undefined"!=typeof document?null===(n=document.currentScript)||void 0===n?void 0:n.src:void 0,function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var r,e,n=Object.assign({},t),o=new Promise(((t,n)=>{r=t,e=n})),i=!0,s=Object.assign({},n),c="";"undefined"!=typeof document&&document.currentScript&&(c=document.currentScript.src),a&&(c=a),c=c.startsWith("blob:")?"":c.substr(0,c.replace(/[?#].*/,"").lastIndexOf("/")+1);var u,l,p=n.print||console.log.bind(console),h=n.printErr||console.error.bind(console);Object.assign(n,s),s=null,n.arguments&&n.arguments,n.thisProgram&&n.thisProgram,n.quit&&n.quit,n.wasmBinary&&(u=n.wasmBinary);var d,f,v,y,m,g,w,T,b=!1;function C(){var t=l.buffer;n.HEAP8=d=new Int8Array(t),n.HEAP16=v=new Int16Array(t),n.HEAPU8=f=new Uint8Array(t),n.HEAPU16=y=new Uint16Array(t),n.HEAP32=m=new Int32Array(t),n.HEAPU32=g=new Uint32Array(t),n.HEAPF32=w=new Float32Array(t),n.HEAPF64=T=new Float64Array(t)}var $=[],P=[],A=[];function W(t){$.unshift(t)}function _(t){A.unshift(t)}var F=0,k=null;function S(t){var r;null!==(r=n.onAbort)&&void 0!==r&&r.call(n,t),h(t="Aborted("+t+")"),b=!0,t+=". Build with -sASSERTIONS for more info.";var a=new WebAssembly.RuntimeError(t);throw e(a),a}var O,j=t=>t.startsWith("data:application/octet-stream;base64,");function E(){var t="basis_transcoder.wasm";return j(t)?t:function(t){return n.locateFile?n.locateFile(t,c):c+t}(t)}function R(t){if(t==O&&u)return new Uint8Array(u);throw"both async and sync fetching of the wasm failed"}function D(t,r,e){return function(t){return!u&&i&&"function"==typeof fetch?fetch(t,{credentials:"same-origin"}).then((r=>{if(!r.ok)throw"failed to load wasm binary file at '".concat(t,"'");return r.arrayBuffer()})).catch((()=>R(t))):Promise.resolve().then((()=>R(t)))}(t).then((t=>WebAssembly.instantiate(t,r))).then(e,(t=>{h("failed to asynchronously prepare wasm: ".concat(t)),S(t)}))}var x=t=>{for(;t.length>0;)t.shift()(n)};n.noExitRuntime;class I{constructor(t){this.excPtr=t,this.ptr=t-24}set_type(t){g[this.ptr+4>>2]=t}get_type(){return g[this.ptr+4>>2]}set_destructor(t){g[this.ptr+8>>2]=t}get_destructor(){return g[this.ptr+8>>2]}set_caught(t){t=t?1:0,d[this.ptr+12]=t}get_caught(){return 0!=d[this.ptr+12]}set_rethrown(t){t=t?1:0,d[this.ptr+13]=t}get_rethrown(){return 0!=d[this.ptr+13]}init(t,r){this.set_adjusted_ptr(0),this.set_type(t),this.set_destructor(r)}set_adjusted_ptr(t){g[this.ptr+16>>2]=t}get_adjusted_ptr(){return g[this.ptr+16>>2]}get_exception_ptr(){if(Cr(this.get_type()))return g[this.excPtr>>2];var t=this.get_adjusted_ptr();return 0!==t?t:this.excPtr}}var V={},H=t=>{for(;t.length;){var r=t.pop();t.pop()(r)}};function U(t){return this.fromWireType(g[t>>2])}var B,N,M,z={},q={},G={},L=t=>{throw new B(t)},J=(t,r,e)=>{function n(r){var n=e(r);n.length!==t.length&&L("Mismatched type converter count");for(var a=0;a<t.length;++a)Z(t[a],n[a])}t.forEach((function(t){G[t]=r}));var a=new Array(r.length),o=[],i=0;r.forEach(((t,r)=>{q.hasOwnProperty(t)?a[r]=q[t]:(o.push(t),z.hasOwnProperty(t)||(z[t]=[]),z[t].push((()=>{a[r]=q[t],++i===o.length&&n(a)})))})),0===o.length&&n(a)},K=t=>{for(var r="",e=t;f[e];)r+=N[f[e++]];return r},Q=t=>{throw new M(t)};function Z(t,r){let e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!("argPackAdvance"in r))throw new TypeError("registerType registeredInstance requires argPackAdvance");return function(t,r){let e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};var n=r.name;if(t||Q('type "'.concat(n,'" must have a positive integer typeid pointer')),q.hasOwnProperty(t)){if(e.ignoreDuplicateRegistrations)return;Q("Cannot register type '".concat(n,"' twice"))}if(q[t]=r,delete G[t],z.hasOwnProperty(t)){var a=z[t];delete z[t],a.forEach((t=>t()))}}(t,r,e)}var X,Y=8,tt=t=>({count:t.count,deleteScheduled:t.deleteScheduled,preservePointerOnDelete:t.preservePointerOnDelete,ptr:t.ptr,ptrType:t.ptrType,smartPtr:t.smartPtr,smartPtrType:t.smartPtrType}),rt=t=>{Q(function(t){return t.$$.ptrType.registeredClass.name}(t)+" instance already deleted")},et=!1,nt=t=>{},at=t=>{t.count.value-=1,0===t.count.value&&(t=>{t.smartPtr?t.smartPtrType.rawDestructor(t.smartPtr):t.ptrType.registeredClass.rawDestructor(t.ptr)})(t)},ot=(t,r,e)=>{if(r===e)return t;if(void 0===e.baseClass)return null;var n=ot(t,r,e.baseClass);return null===n?null:e.downcast(n)},it={},st=()=>Object.keys(ht).length,ct=()=>{var t=[];for(var r in ht)ht.hasOwnProperty(r)&&t.push(ht[r]);return t},ut=[],lt=()=>{for(;ut.length;){var t=ut.pop();t.$$.deleteScheduled=!1,t.delete()}},pt=t=>{X=t,ut.length&&X&&X(lt)},ht={},dt=(t,r)=>(r=((t,r)=>{for(void 0===r&&Q("ptr should not be undefined");t.baseClass;)r=t.upcast(r),t=t.baseClass;return r})(t,r),ht[r]),ft=(t,r)=>(r.ptrType&&r.ptr||L("makeClassHandle requires ptr and ptrType"),!!r.smartPtrType!=!!r.smartPtr&&L("Both smartPtrType and smartPtr must be specified"),r.count={value:1},yt(Object.create(t,{$$:{value:r,writable:!0}})));function vt(t){var r=this.getPointee(t);if(!r)return this.destructor(t),null;var e=dt(this.registeredClass,r);if(void 0!==e){if(0===e.$$.count.value)return e.$$.ptr=r,e.$$.smartPtr=t,e.clone();var n=e.clone();return this.destructor(t),n}function a(){return this.isSmartPointer?ft(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:r,smartPtrType:this,smartPtr:t}):ft(this.registeredClass.instancePrototype,{ptrType:this,ptr:t})}var o,i=this.registeredClass.getActualType(r),s=it[i];if(!s)return a.call(this);o=this.isConst?s.constPointerType:s.pointerType;var c=ot(r,this.registeredClass,o.registeredClass);return null===c?a.call(this):this.isSmartPointer?ft(o.registeredClass.instancePrototype,{ptrType:o,ptr:c,smartPtrType:this,smartPtr:t}):ft(o.registeredClass.instancePrototype,{ptrType:o,ptr:c})}var yt=t=>"undefined"==typeof FinalizationRegistry?(yt=t=>t,t):(et=new FinalizationRegistry((t=>{at(t.$$)})),yt=t=>{var r=t.$$;if(r.smartPtr){var e={$$:r};et.register(t,e,t)}return t},nt=t=>et.unregister(t),yt(t));function mt(){}var gt=(t,r)=>Object.defineProperty(r,"name",{value:t}),wt=(t,r,e)=>{if(void 0===t[r].overloadTable){var n=t[r];t[r]=function(){for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return t[r].overloadTable.hasOwnProperty(a.length)||Q("Function '".concat(e,"' called with an invalid number of arguments (").concat(a.length,") - expects one of (").concat(t[r].overloadTable,")!")),t[r].overloadTable[a.length].apply(this,a)},t[r].overloadTable=[],t[r].overloadTable[n.argCount]=n}},Tt=(t,r,e)=>{n.hasOwnProperty(t)?((void 0===e||void 0!==n[t].overloadTable&&void 0!==n[t].overloadTable[e])&&Q("Cannot register public name '".concat(t,"' twice")),wt(n,t,t),n.hasOwnProperty(e)&&Q("Cannot register multiple overloads of a function with the same number of arguments (".concat(e,")!")),n[t].overloadTable[e]=r):(n[t]=r,void 0!==e&&(n[t].numArguments=e))};function bt(t,r,e,n,a,o,i,s){this.name=t,this.constructor=r,this.instancePrototype=e,this.rawDestructor=n,this.baseClass=a,this.getActualType=o,this.upcast=i,this.downcast=s,this.pureVirtualFunctions=[]}var Ct=(t,r,e)=>{for(;r!==e;)r.upcast||Q("Expected null or instance of ".concat(e.name,", got an instance of ").concat(r.name)),t=r.upcast(t),r=r.baseClass;return t};function $t(t,r){if(null===r)return this.isReference&&Q("null is not a valid ".concat(this.name)),0;r.$$||Q('Cannot pass "'.concat(Kt(r),'" as a ').concat(this.name)),r.$$.ptr||Q("Cannot pass deleted object as a pointer of type ".concat(this.name));var e=r.$$.ptrType.registeredClass;return Ct(r.$$.ptr,e,this.registeredClass)}function Pt(t,r){var e;if(null===r)return this.isReference&&Q("null is not a valid ".concat(this.name)),this.isSmartPointer?(e=this.rawConstructor(),null!==t&&t.push(this.rawDestructor,e),e):0;r&&r.$$||Q('Cannot pass "'.concat(Kt(r),'" as a ').concat(this.name)),r.$$.ptr||Q("Cannot pass deleted object as a pointer of type ".concat(this.name)),!this.isConst&&r.$$.ptrType.isConst&&Q("Cannot convert argument of type ".concat(r.$$.smartPtrType?r.$$.smartPtrType.name:r.$$.ptrType.name," to parameter type ").concat(this.name));var n=r.$$.ptrType.registeredClass;if(e=Ct(r.$$.ptr,n,this.registeredClass),this.isSmartPointer)switch(void 0===r.$$.smartPtr&&Q("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:r.$$.smartPtrType===this?e=r.$$.smartPtr:Q("Cannot convert argument of type ".concat(r.$$.smartPtrType?r.$$.smartPtrType.name:r.$$.ptrType.name," to parameter type ").concat(this.name));break;case 1:e=r.$$.smartPtr;break;case 2:if(r.$$.smartPtrType===this)e=r.$$.smartPtr;else{var a=r.clone();e=this.rawShare(e,qt.toHandle((()=>a.delete()))),null!==t&&t.push(this.rawDestructor,e)}break;default:Q("Unsupporting sharing policy")}return e}function At(t,r){if(null===r)return this.isReference&&Q("null is not a valid ".concat(this.name)),0;r.$$||Q('Cannot pass "'.concat(Kt(r),'" as a ').concat(this.name)),r.$$.ptr||Q("Cannot pass deleted object as a pointer of type ".concat(this.name)),r.$$.ptrType.isConst&&Q("Cannot convert argument of type ".concat(r.$$.ptrType.name," to parameter type ").concat(this.name));var e=r.$$.ptrType.registeredClass;return Ct(r.$$.ptr,e,this.registeredClass)}function Wt(t,r,e,n,a,o,i,s,c,u,l){this.name=t,this.registeredClass=r,this.isReference=e,this.isConst=n,this.isSmartPointer=a,this.pointeeType=o,this.sharingPolicy=i,this.rawGetPointee=s,this.rawConstructor=c,this.rawShare=u,this.rawDestructor=l,a||void 0!==r.baseClass?this.toWireType=Pt:n?(this.toWireType=$t,this.destructorFunction=null):(this.toWireType=At,this.destructorFunction=null)}var _t,Ft,kt=(t,r,e)=>{n.hasOwnProperty(t)||L("Replacing nonexistent public symbol"),void 0!==n[t].overloadTable&&void 0!==e?n[t].overloadTable[e]=r:(n[t]=r,n[t].argCount=e)},St=[],Ot=t=>{var r=St[t];return r||(t>=St.length&&(St.length=t+1),St[t]=r=_t.get(t)),r},jt=function(t,r){let e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return t.includes("j")?((t,r,e)=>(t=t.replace(/p/g,"i"),(0,n["dynCall_"+t])(r,...e)))(t,r,e):Ot(r)(...e)},Et=(t,r)=>{var e=(t=K(t)).includes("j")?((t,r)=>function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];return jt(t,r,n)})(t,r):Ot(r);return"function"!=typeof e&&Q("unknown function pointer with signature ".concat(t,": ").concat(r)),e},Rt=t=>{var r=wr(t),e=K(r);return br(r),e},Dt=(t,r)=>{var e=[],n={};throw r.forEach((function t(r){n[r]||q[r]||(G[r]?G[r].forEach(t):(e.push(r),n[r]=!0))})),new Ft("".concat(t,": ")+e.map(Rt).join([", "]))},xt=(t,r)=>{for(var e=[],n=0;n<t;n++)e.push(g[r+4*n>>2]);return e};function It(t){for(var r=1;r<t.length;++r)if(null!==t[r]&&void 0===t[r].destructorFunction)return!0;return!1}function Vt(t,r){if(!(t instanceof Function))throw new TypeError("new_ called with constructor type ".concat(typeof t," which is not a function"));var e=gt(t.name||"unknownFunctionName",(function(){}));e.prototype=t.prototype;var n=new e,a=t.apply(n,r);return a instanceof Object?a:n}function Ht(t,r,e,n,a,o){var i=r.length;i<2&&Q("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var s=null!==r[1]&&null!==e,c=It(r),u="void"!==r[0].name,l=[t,Q,n,a,H,r[0],r[1]],p=0;p<i-2;++p)l.push(r[p+2]);if(!c)for(p=s?1:2;p<r.length;++p)null!==r[p].destructorFunction&&l.push(r[p].destructorFunction);let[h,d]=function(t,r,e,n){for(var a=It(t),o=t.length,i="",s="",c=0;c<o-2;++c)i+=(0!==c?", ":"")+"arg"+c,s+=(0!==c?", ":"")+"arg"+c+"Wired";var u="\n        return function (".concat(i,") {\n        if (arguments.length !== ").concat(o-2,") {\n          throwBindingError('function ' + humanName + ' called with ' + arguments.length + ' arguments, expected ").concat(o-2,"');\n        }");a&&(u+="var destructors = [];\n");var l=a?"destructors":"null",p=["humanName","throwBindingError","invoker","fn","runDestructors","retType","classParam"];for(r&&(u+="var thisWired = classParam['toWireType']("+l+", this);\n"),c=0;c<o-2;++c)u+="var arg"+c+"Wired = argType"+c+"['toWireType']("+l+", arg"+c+");\n",p.push("argType"+c);if(r&&(s="thisWired"+(s.length>0?", ":"")+s),u+=(e||n?"var rv = ":"")+"invoker(fn"+(s.length>0?", ":"")+s+");\n",a)u+="runDestructors(destructors);\n";else for(c=r?1:2;c<t.length;++c){var h=1===c?"thisWired":"arg"+(c-2)+"Wired";null!==t[c].destructorFunction&&(u+="".concat(h,"_dtor(").concat(h,");\n"),p.push("".concat(h,"_dtor")))}return e&&(u+="var ret = retType['fromWireType'](rv);\nreturn ret;\n"),[p,u+="}\n"]}(r,s,u,o);h.push(d);var f=Vt(Function,h)(...l);return gt(t,f)}var Ut=t=>{const r=(t=t.trim()).indexOf("(");return-1!==r?t.substr(0,r):t},Bt=[],Nt=[],Mt=t=>{t>9&&0==--Nt[t+1]&&(Nt[t]=void 0,Bt.push(t))},zt=()=>Nt.length/2-5-Bt.length,qt={toValue:t=>(t||Q("Cannot use deleted val. handle = "+t),Nt[t]),toHandle:t=>{switch(t){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const r=Bt.pop()||Nt.length;return Nt[r]=t,Nt[r+1]=1,r}}}},Gt={name:"emscripten::val",fromWireType:t=>{var r=qt.toValue(t);return Mt(t),r},toWireType:(t,r)=>qt.toHandle(r),argPackAdvance:Y,readValueFromPointer:U,destructorFunction:null},Lt=(t,r,e)=>{switch(r){case 1:return e?function(t){return this.fromWireType(d[t])}:function(t){return this.fromWireType(f[t])};case 2:return e?function(t){return this.fromWireType(v[t>>1])}:function(t){return this.fromWireType(y[t>>1])};case 4:return e?function(t){return this.fromWireType(m[t>>2])}:function(t){return this.fromWireType(g[t>>2])};default:throw new TypeError("invalid integer width (".concat(r,"): ").concat(t))}},Jt=(t,r)=>{var e=q[t];return void 0===e&&Q("".concat(r," has unknown type ").concat(Rt(t))),e},Kt=t=>{if(null===t)return"null";var r=typeof t;return"object"===r||"array"===r||"function"===r?t.toString():""+t},Qt=(t,r)=>{switch(r){case 4:return function(t){return this.fromWireType(w[t>>2])};case 8:return function(t){return this.fromWireType(T[t>>3])};default:throw new TypeError("invalid float width (".concat(r,"): ").concat(t))}},Zt=(t,r,e)=>{switch(r){case 1:return e?t=>d[t]:t=>f[t];case 2:return e?t=>v[t>>1]:t=>y[t>>1];case 4:return e?t=>m[t>>2]:t=>g[t>>2];default:throw new TypeError("invalid integer width (".concat(r,"): ").concat(t))}},Xt="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0,Yt=(t,r,e)=>{for(var n=r+e,a=r;t[a]&&!(a>=n);)++a;if(a-r>16&&t.buffer&&Xt)return Xt.decode(t.subarray(r,a));for(var o="";r<a;){var i=t[r++];if(128&i){var s=63&t[r++];if(192!=(224&i)){var c=63&t[r++];if((i=224==(240&i)?(15&i)<<12|s<<6|c:(7&i)<<18|s<<12|c<<6|63&t[r++])<65536)o+=String.fromCharCode(i);else{var u=i-65536;o+=String.fromCharCode(55296|u>>10,56320|1023&u)}}else o+=String.fromCharCode((31&i)<<6|s)}else o+=String.fromCharCode(i)}return o},tr=(t,r)=>t?Yt(f,t,r):"",rr="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0,er=(t,r)=>{for(var e=t,n=e>>1,a=n+r/2;!(n>=a)&&y[n];)++n;if((e=n<<1)-t>32&&rr)return rr.decode(f.subarray(t,e));for(var o="",i=0;!(i>=r/2);++i){var s=v[t+2*i>>1];if(0==s)break;o+=String.fromCharCode(s)}return o},nr=(t,r,e)=>{var n;if(null!==(n=e)&&void 0!==n||(e=2147483647),e<2)return 0;for(var a=r,o=(e-=2)<2*t.length?e/2:t.length,i=0;i<o;++i){var s=t.charCodeAt(i);v[r>>1]=s,r+=2}return v[r>>1]=0,r-a},ar=t=>2*t.length,or=(t,r)=>{for(var e=0,n="";!(e>=r/4);){var a=m[t+4*e>>2];if(0==a)break;if(++e,a>=65536){var o=a-65536;n+=String.fromCharCode(55296|o>>10,56320|1023&o)}else n+=String.fromCharCode(a)}return n},ir=(t,r,e)=>{var n;if(null!==(n=e)&&void 0!==n||(e=2147483647),e<4)return 0;for(var a=r,o=a+e-4,i=0;i<t.length;++i){var s=t.charCodeAt(i);if(s>=55296&&s<=57343&&(s=65536+((1023&s)<<10)|1023&t.charCodeAt(++i)),m[r>>2]=s,(r+=4)+4>o)break}return m[r>>2]=0,r-a},sr=t=>{for(var r=0,e=0;e<t.length;++e){var n=t.charCodeAt(e);n>=55296&&n<=57343&&++e,r+=4}return r},cr=(t,r,e)=>{var n=[],a=t.toWireType(n,e);return n.length&&(g[r>>2]=qt.toHandle(n)),a},ur=[],lr={},pr=t=>{var r=lr[t];return void 0===r?K(t):r},hr=()=>"object"==typeof globalThis?globalThis:Function("return this")(),dr=t=>{var e=(t-l.buffer.byteLength+65535)/65536;try{return l.grow(e),C(),1}catch(r){}};var fr=[null,[],[]],vr=(t,r)=>{var e=fr[t];0===r||10===r?((1===t?p:h)(Yt(e,0)),e.length=0):e.push(r)};B=n.InternalError=class extends Error{constructor(t){super(t),this.name="InternalError"}},(()=>{for(var t=new Array(256),r=0;r<256;++r)t[r]=String.fromCharCode(r);N=t})(),M=n.BindingError=class extends Error{constructor(t){super(t),this.name="BindingError"}},Object.assign(mt.prototype,{isAliasOf(t){if(!(this instanceof mt))return!1;if(!(t instanceof mt))return!1;var r=this.$$.ptrType.registeredClass,e=this.$$.ptr;t.$$=t.$$;for(var n=t.$$.ptrType.registeredClass,a=t.$$.ptr;r.baseClass;)e=r.upcast(e),r=r.baseClass;for(;n.baseClass;)a=n.upcast(a),n=n.baseClass;return r===n&&e===a},clone(){if(this.$$.ptr||rt(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var t=yt(Object.create(Object.getPrototypeOf(this),{$$:{value:tt(this.$$)}}));return t.$$.count.value+=1,t.$$.deleteScheduled=!1,t},delete(){this.$$.ptr||rt(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&Q("Object already scheduled for deletion"),nt(this),at(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},isDeleted(){return!this.$$.ptr},deleteLater(){return this.$$.ptr||rt(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&Q("Object already scheduled for deletion"),ut.push(this),1===ut.length&&X&&X(lt),this.$$.deleteScheduled=!0,this}}),n.getInheritedInstanceCount=st,n.getLiveInheritedInstances=ct,n.flushPendingDeletes=lt,n.setDelayFunction=pt,Object.assign(Wt.prototype,{getPointee(t){return this.rawGetPointee&&(t=this.rawGetPointee(t)),t},destructor(t){var r;null===(r=this.rawDestructor)||void 0===r||r.call(this,t)},argPackAdvance:Y,readValueFromPointer:U,fromWireType:vt}),Ft=n.UnboundTypeError=((t,r)=>{var e=gt(r,(function(t){this.name=r,this.message=t;var e=new Error(t).stack;void 0!==e&&(this.stack=this.toString()+"\n"+e.replace(/^Error(:[^\n]*)?\n/,""))}));return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.prototype.toString=function(){return void 0===this.message?this.name:"".concat(this.name,": ").concat(this.message)},e})(Error,"UnboundTypeError"),Nt.push(0,1,void 0,1,null,1,!0,1,!1,1),n.count_emval_handles=zt;var yr,mr={K:(t,r,e)=>{throw new I(t).init(r,e),t},G:()=>{S("")},s:t=>{var r=V[t];delete V[t];var e=r.rawConstructor,n=r.rawDestructor,a=r.fields,o=a.map((t=>t.getterReturnType)).concat(a.map((t=>t.setterArgumentType)));J([t],o,(t=>{var o={};return a.forEach(((r,e)=>{var n=r.fieldName,i=t[e],s=r.getter,c=r.getterContext,u=t[e+a.length],l=r.setter,p=r.setterContext;o[n]={read:t=>i.fromWireType(s(c,t)),write:(t,r)=>{var e=[];l(p,t,u.toWireType(e,r)),H(e)}}})),[{name:r.name,fromWireType:t=>{var r={};for(var e in o)r[e]=o[e].read(t);return n(t),r},toWireType:(t,r)=>{for(var a in o)if(!(a in r))throw new TypeError('Missing field: "'.concat(a,'"'));var i=e();for(a in o)o[a].write(i,r[a]);return null!==t&&t.push(n,i),i},argPackAdvance:Y,readValueFromPointer:U,destructorFunction:n}]}))},C:(t,r,e,n,a)=>{},I:(t,r,e,n)=>{Z(t,{name:r=K(r),fromWireType:function(t){return!!t},toWireType:function(t,r){return r?e:n},argPackAdvance:Y,readValueFromPointer:function(t){return this.fromWireType(f[t])},destructorFunction:null})},w:(t,r,e,n,a,o,i,s,c,u,l,p,h)=>{l=K(l),o=Et(a,o),s&&(s=Et(i,s)),u&&(u=Et(c,u)),h=Et(p,h);var d=(t=>{if(void 0===t)return"_unknown";var r=(t=t.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return r>=48&&r<=57?"_".concat(t):t})(l);Tt(d,(function(){Dt("Cannot construct ".concat(l," due to unbound types"),[n])})),J([t,r,e],n?[n]:[],(r=>{var e,a,i,c;r=r[0],c=n?(i=r.registeredClass).instancePrototype:mt.prototype;var p=gt(l,(function(){if(Object.getPrototypeOf(this)!==f)throw new M("Use 'new' to construct "+l);if(void 0===v.constructor_body)throw new M(l+" has no accessible constructor");for(var t=arguments.length,r=new Array(t),e=0;e<t;e++)r[e]=arguments[e];var n=v.constructor_body[r.length];if(void 0===n)throw new M("Tried to invoke ctor of ".concat(l," with invalid number of parameters (").concat(r.length,") - expected (").concat(Object.keys(v.constructor_body).toString(),") parameters instead!"));return n.apply(this,r)})),f=Object.create(c,{constructor:{value:p}});p.prototype=f;var v=new bt(l,p,f,h,i,o,s,u);v.baseClass&&(null!==(a=(e=v.baseClass).__derivedClasses)&&void 0!==a||(e.__derivedClasses=[]),v.baseClass.__derivedClasses.push(v));var y=new Wt(l,v,!0,!1,!1),m=new Wt(l+"*",v,!1,!1,!1),g=new Wt(l+" const*",v,!1,!0,!1);return it[t]={pointerType:m,constPointerType:g},kt(d,p),[y,m,g]}))},v:(t,r,e,n,a,o)=>{var i=xt(r,e);a=Et(n,a),J([],[t],(t=>{var e="constructor ".concat((t=t[0]).name);if(void 0===t.registeredClass.constructor_body&&(t.registeredClass.constructor_body=[]),void 0!==t.registeredClass.constructor_body[r-1])throw new M("Cannot register multiple constructors with identical number of parameters (".concat(r-1,") for class '").concat(t.name,"'! Overload resolution is currently only performed using the parameter count, not actual type info!"));return t.registeredClass.constructor_body[r-1]=()=>{Dt("Cannot construct ".concat(t.name," due to unbound types"),i)},J([],i,(n=>(n.splice(1,0,null),t.registeredClass.constructor_body[r-1]=Ht(e,n,null,a,o),[]))),[]}))},d:(t,r,e,n,a,o,i,s,c)=>{var u=xt(e,n);r=K(r),r=Ut(r),o=Et(a,o),J([],[t],(t=>{var n="".concat((t=t[0]).name,".").concat(r);function a(){Dt("Cannot call ".concat(n," due to unbound types"),u)}r.startsWith("@@")&&(r=Symbol[r.substring(2)]),s&&t.registeredClass.pureVirtualFunctions.push(r);var l=t.registeredClass.instancePrototype,p=l[r];return void 0===p||void 0===p.overloadTable&&p.className!==t.name&&p.argCount===e-2?(a.argCount=e-2,a.className=t.name,l[r]=a):(wt(l,r,n),l[r].overloadTable[e-2]=a),J([],u,(a=>{var s=Ht(n,a,t,o,i,c);return void 0===l[r].overloadTable?(s.argCount=e-2,l[r]=s):l[r].overloadTable[e-2]=s,[]})),[]}))},m:(t,r,e)=>{t=K(t),J([],[r],(r=>(r=r[0],n[t]=r.fromWireType(e),[])))},H:t=>Z(t,Gt),o:(t,r,e,n)=>{function a(){}r=K(r),a.values={},Z(t,{name:r,constructor:a,fromWireType:function(t){return this.constructor.values[t]},toWireType:(t,r)=>r.value,argPackAdvance:Y,readValueFromPointer:Lt(r,e,n),destructorFunction:null}),Tt(r,a)},a:(t,r,e)=>{var n=Jt(t,"enum");r=K(r);var a=n.constructor,o=Object.create(n.constructor.prototype,{value:{value:e},constructor:{value:gt("".concat(n.name,"_").concat(r),(function(){}))}});a.values[e]=o,a[r]=o},A:(t,r,e)=>{Z(t,{name:r=K(r),fromWireType:t=>t,toWireType:(t,r)=>r,argPackAdvance:Y,readValueFromPointer:Qt(r,e),destructorFunction:null})},k:(t,r,e,n,a,o,i)=>{var s=xt(r,e);t=K(t),t=Ut(t),a=Et(n,a),Tt(t,(function(){Dt("Cannot call ".concat(t," due to unbound types"),s)}),r-1),J([],s,(e=>{var n=[e[0],null].concat(e.slice(1));return kt(t,Ht(t,n,null,a,o,i),r-1),[]}))},l:(t,r,e,n,a)=>{r=K(r);var o=t=>t;if(0===n){var i=32-8*e;o=t=>t<<i>>>i}var s=r.includes("unsigned");Z(t,{name:r,fromWireType:o,toWireType:s?function(t,r){return this.name,r>>>0}:function(t,r){return this.name,r},argPackAdvance:Y,readValueFromPointer:Zt(r,e,0!==n),destructorFunction:null})},f:(t,r,e)=>{var n=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][r];function a(t){var r=g[t>>2],e=g[t+4>>2];return new n(d.buffer,e,r)}Z(t,{name:e=K(e),fromWireType:a,argPackAdvance:Y,readValueFromPointer:a},{ignoreDuplicateRegistrations:!0})},z:(t,r)=>{var e="std::string"===(r=K(r));Z(t,{name:r,fromWireType(t){var r,n=g[t>>2],a=t+4;if(e)for(var o=a,i=0;i<=n;++i){var s=a+i;if(i==n||0==f[s]){var c=tr(o,s-o);void 0===r?r=c:(r+=String.fromCharCode(0),r+=c),o=s+1}}else{var u=new Array(n);for(i=0;i<n;++i)u[i]=String.fromCharCode(f[a+i]);r=u.join("")}return br(t),r},toWireType(t,r){var n;r instanceof ArrayBuffer&&(r=new Uint8Array(r));var a="string"==typeof r;a||r instanceof Uint8Array||r instanceof Uint8ClampedArray||r instanceof Int8Array||Q("Cannot pass non-string to std::string"),n=e&&a?(t=>{for(var r=0,e=0;e<t.length;++e){var n=t.charCodeAt(e);n<=127?r++:n<=2047?r+=2:n>=55296&&n<=57343?(r+=4,++e):r+=3}return r})(r):r.length;var o=Tr(4+n+1),i=o+4;if(g[o>>2]=n,e&&a)((t,r,e)=>{((t,r,e,n)=>{if(!(n>0))return 0;for(var a=e,o=e+n-1,i=0;i<t.length;++i){var s=t.charCodeAt(i);if(s>=55296&&s<=57343&&(s=65536+((1023&s)<<10)|1023&t.charCodeAt(++i)),s<=127){if(e>=o)break;r[e++]=s}else if(s<=2047){if(e+1>=o)break;r[e++]=192|s>>6,r[e++]=128|63&s}else if(s<=65535){if(e+2>=o)break;r[e++]=224|s>>12,r[e++]=128|s>>6&63,r[e++]=128|63&s}else{if(e+3>=o)break;r[e++]=240|s>>18,r[e++]=128|s>>12&63,r[e++]=128|s>>6&63,r[e++]=128|63&s}}r[e]=0})(t,f,r,e)})(r,i,n+1);else if(a)for(var s=0;s<n;++s){var c=r.charCodeAt(s);c>255&&(br(i),Q("String has UTF-16 code units that do not fit in 8 bits")),f[i+s]=c}else for(s=0;s<n;++s)f[i+s]=r[s];return null!==t&&t.push(br,o),o},argPackAdvance:Y,readValueFromPointer:U,destructorFunction(t){br(t)}})},u:(t,r,e)=>{var n,a,o,i;e=K(e),2===r?(n=er,a=nr,i=ar,o=t=>y[t>>1]):4===r&&(n=or,a=ir,i=sr,o=t=>g[t>>2]),Z(t,{name:e,fromWireType:t=>{for(var e,a=g[t>>2],i=t+4,s=0;s<=a;++s){var c=t+4+s*r;if(s==a||0==o(c)){var u=n(i,c-i);void 0===e?e=u:(e+=String.fromCharCode(0),e+=u),i=c+r}}return br(t),e},toWireType:(t,n)=>{"string"!=typeof n&&Q("Cannot pass non-string to C++ string type ".concat(e));var o=i(n),s=Tr(4+o+r);return g[s>>2]=o/r,a(n,s+4,o+r),null!==t&&t.push(br,s),s},argPackAdvance:Y,readValueFromPointer:U,destructorFunction(t){br(t)}})},t:(t,r,e,n,a,o)=>{V[t]={name:K(r),rawConstructor:Et(e,n),rawDestructor:Et(a,o),fields:[]}},c:(t,r,e,n,a,o,i,s,c,u)=>{V[t].fields.push({fieldName:K(r),getterReturnType:e,getter:Et(n,a),getterContext:o,setterArgumentType:i,setter:Et(s,c),setterContext:u})},J:(t,r)=>{Z(t,{isVoid:!0,name:r=K(r),argPackAdvance:0,fromWireType:()=>{},toWireType:(t,r)=>{}})},F:(t,r,e)=>f.copyWithin(t,r,r+e),n:(t,r,e)=>(t=qt.toValue(t),r=Jt(r,"emval::as"),cr(r,e,t)),q:(t,r,e,n)=>(t=ur[t])(null,r=qt.toValue(r),e,n),p:(t,r,e,n,a)=>(t=ur[t])(r=qt.toValue(r),r[e=pr(e)],n,a),b:Mt,x:t=>0===t?qt.toHandle(hr()):(t=pr(t),qt.toHandle(hr()[t])),i:(t,r,e)=>{var n=((t,r)=>{for(var e=new Array(t),n=0;n<t;++n)e[n]=Jt(g[r+4*n>>2],"parameter "+n);return e})(t,r),a=n.shift();t--;var o="return function (obj, func, destructorsRef, args) {\n",i=0,s=[];0===e&&s.push("obj");for(var c=["retType"],u=[a],l=0;l<t;++l)s.push("arg"+l),c.push("argType"+l),u.push(n[l]),o+="  var arg".concat(l," = argType").concat(l,".readValueFromPointer(args").concat(i?"+"+i:"",");\n"),i+=n[l].argPackAdvance;o+="  var rv = ".concat(1===e?"new func":"func.call","(").concat(s.join(", "),");\n"),a.isVoid||(c.push("emval_returnValue"),u.push(cr),o+="  return emval_returnValue(retType, destructorsRef, rv);\n"),o+="};\n",c.push(o);var p=Vt(Function,c)(...u),h="methodCaller<(".concat(n.map((t=>t.name)).join(", "),") => ").concat(a.name,">");return(t=>{var r=ur.length;return ur.push(t),r})(gt(h,p))},r:t=>(t=pr(t),qt.toHandle(n[t])),g:(t,r)=>(t=qt.toValue(t),r=qt.toValue(r),qt.toHandle(t[r])),j:t=>{t>9&&(Nt[t+1]+=1)},h:t=>qt.toHandle(pr(t)),e:t=>{var r=qt.toValue(t);H(r),Mt(t)},D:t=>{var r=f.length,e=2147483648;if((t>>>=0)>e)return!1;for(var n=(t,r)=>t+(r-t%r)%r,a=1;a<=4;a*=2){var o=r*(1+.2/a);o=Math.min(o,t+100663296);var i=Math.min(e,n(Math.max(t,o),65536));if(dr(i))return!0}return!1},E:t=>52,B:function(t,r,e,n,a){return 70},y:(t,r,e,n)=>{for(var a=0,o=0;o<e;o++){var i=g[r>>2],s=g[r+4>>2];r+=8;for(var c=0;c<s;c++)vr(t,f[i+c]);a+=s}return g[n>>2]=a,0}},gr=function(){var t={a:mr};function r(t,r){return gr=t.exports,l=gr.L,C(),_t=gr.Q,function(t){P.unshift(t)}(gr.M),function(t){var r;if(F--,null!==(r=n.monitorRunDependencies)&&void 0!==r&&r.call(n,F),0==F&&k){var e=k;k=null,e()}}(),gr}if(function(t){var r;F++,null===(r=n.monitorRunDependencies)||void 0===r||r.call(n,F)}(),n.instantiateWasm)try{return n.instantiateWasm(t,r)}catch(o){h("Module.instantiateWasm callback failed with error: ".concat(o)),e(o)}return O||(O=E()),function(t,r,e,n){return t||"function"!=typeof WebAssembly.instantiateStreaming||j(r)||"function"!=typeof fetch?D(r,e,n):fetch(r,{credentials:"same-origin"}).then((t=>WebAssembly.instantiateStreaming(t,e).then(n,(function(t){return h("wasm streaming compile failed: ".concat(t)),h("falling back to ArrayBuffer instantiation"),D(r,e,n)}))))}(u,O,t,(function(t){r(t.instance)})).catch(e),{}}(),wr=t=>(wr=gr.N)(t),Tr=t=>(Tr=gr.O)(t),br=t=>(br=gr.P)(t),Cr=t=>(Cr=gr.R)(t);function $r(){function t(){yr||(yr=!0,n.calledRun=!0,b||(x(P),r(n),n.onRuntimeInitialized&&n.onRuntimeInitialized(),function(){if(n.postRun)for("function"==typeof n.postRun&&(n.postRun=[n.postRun]);n.postRun.length;)_(n.postRun.shift());x(A)}()))}F>0||(function(){if(n.preRun)for("function"==typeof n.preRun&&(n.preRun=[n.preRun]);n.preRun.length;)W(n.preRun.shift());x($)}(),F>0||(n.setStatus?(n.setStatus("Running..."),setTimeout((function(){setTimeout((function(){n.setStatus("")}),1),t()}),1)):t()))}if(n.dynCall_jiji=(t,r,e,a,o)=>(n.dynCall_jiji=gr.S)(t,r,e,a,o),k=function t(){yr||$r(),yr||(k=t)},n.preInit)for("function"==typeof n.preInit&&(n.preInit=[n.preInit]);n.preInit.length>0;)n.preInit.pop()();return $r(),o})}}]);
//# sourceMappingURL=4027.8e7be513.chunk.js.map