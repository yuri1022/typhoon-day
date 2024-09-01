"use strict";(self.webpackChunktyphoon=self.webpackChunktyphoon||[]).push([[132],{47751:(n,t,e)=>{e.r(t),e.d(t,{a:()=>f});var r,a,i,o=e(54787),u={exports:{}};r=u,a="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0,i=function(n){var t,e,r;n=n||{},t||(t=void 0!==n?n:{}),t.ready=new Promise((function(n,t){e=n,r=t}));var i=Object.assign({},t),u="./this.program",c="";"undefined"!=typeof document&&document.currentScript&&(c=document.currentScript.src),a&&(c=a),c=0!==c.indexOf("blob:")?c.substr(0,c.replace(/[?#].*/,"").lastIndexOf("/")+1):"";var f,s=t.print||console.log.bind(console),l=t.printErr||console.warn.bind(console);Object.assign(t,i),i=null,t.thisProgram&&(u=t.thisProgram),t.wasmBinary&&(f=t.wasmBinary),t.noExitRuntime,"object"!=typeof WebAssembly&&R("no native wasm support detected");var h,p,v,d,g,y,m,b,w,A,T,C,_=!1,P="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function k(n,t,e){var r=t+e;for(e=t;n[e]&&!(e>=r);)++e;if(16<e-t&&n.buffer&&P)return P.decode(n.subarray(t,e));for(r="";t<e;){var a=n[t++];if(128&a){var i=63&n[t++];if(192==(224&a))r+=String.fromCharCode((31&a)<<6|i);else{var o=63&n[t++];65536>(a=224==(240&a)?(15&a)<<12|i<<6|o:(7&a)<<18|i<<12|o<<6|63&n[t++])?r+=String.fromCharCode(a):(a-=65536,r+=String.fromCharCode(55296|a>>10,56320|1023&a))}}else r+=String.fromCharCode(a)}return r}function $(n,t,e,r){if(0<r){r=e+r-1;for(var a=0;a<n.length;++a){var i=n.charCodeAt(a);if(55296<=i&&57343>=i&&(i=65536+((1023&i)<<10)|1023&n.charCodeAt(++a)),127>=i){if(e>=r)break;t[e++]=i}else{if(2047>=i){if(e+1>=r)break;t[e++]=192|i>>6}else{if(65535>=i){if(e+2>=r)break;t[e++]=224|i>>12}else{if(e+3>=r)break;t[e++]=240|i>>18,t[e++]=128|i>>12&63}t[e++]=128|i>>6&63}t[e++]=128|63&i}}t[e]=0}}function W(n){for(var t=0,e=0;e<n.length;++e){var r=n.charCodeAt(e);127>=r?t++:2047>=r?t+=2:55296<=r&&57343>=r?(t+=4,++e):t+=3}return t}function E(){var n=h.buffer;p=n,t.HEAP8=v=new Int8Array(n),t.HEAP16=g=new Int16Array(n),t.HEAP32=m=new Int32Array(n),t.HEAPU8=d=new Uint8Array(n),t.HEAPU16=y=new Uint16Array(n),t.HEAPU32=b=new Uint32Array(n),t.HEAPF32=w=new Float32Array(n),t.HEAPF64=C=new Float64Array(n),t.HEAP64=A=new BigInt64Array(n),t.HEAPU64=T=new BigUint64Array(n)}var O,j=[],S=[],F=[];function D(){var n=t.preRun.shift();j.unshift(n)}var M,U=0,I=null;function R(n){throw t.onAbort&&t.onAbort(n),l(n="Aborted("+n+")"),_=!0,n=new WebAssembly.RuntimeError(n+". Build with -sASSERTIONS for more info."),r(n),n}function x(){return M.startsWith("data:application/octet-stream;base64,")}if(M="arcgis-knowledge-client-core.wasm",!x()){var H=M;M=t.locateFile?t.locateFile(H,c):c+H}function Y(){var n=M;try{if(n==M&&f)return new Uint8Array(f);throw"both async and sync fetching of the wasm failed"}catch(t){R(t)}}function V(n){for(;0<n.length;)n.shift()(t)}function B(n){this.ga=n-24,this.Za=function(n){b[this.ga+4>>2]=n},this.Ua=function(n){b[this.ga+8>>2]=n},this.Va=function(){m[this.ga>>2]=0},this.Oa=function(){v[this.ga+12|0]=0},this.Ya=function(){v[this.ga+13|0]=0},this.La=function(n,t){this.Ma(),this.Za(n),this.Ua(t),this.Va(),this.Oa(),this.Ya()},this.Ma=function(){b[this.ga+16>>2]=0}}var z={};function q(n){for(;n.length;){var t=n.pop();n.pop()(t)}}function N(n){return this.fromWireType(m[n>>2])}var L={},G={},J={};function Z(n){if(void 0===n)return"_unknown";var t=(n=n.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return 48<=t&&57>=t?"_"+n:n}function X(n,t){return n=Z(n),function(){return t.apply(this,arguments)}}function K(n){var t=Error,e=X(n,(function(t){this.name=n,this.message=t,void 0!==(t=Error(t).stack)&&(this.stack=this.toString()+"\n"+t.replace(/^Error(:[^\n]*)?\n/,""))}));return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message},e}var Q=void 0;function nn(n){throw new Q(n)}function tn(n,t,e){function r(t){(t=e(t)).length!==n.length&&nn("Mismatched type converter count");for(var r=0;r<n.length;++r)cn(n[r],t[r])}n.forEach((function(n){J[n]=t}));var a=Array(t.length),i=[],o=0;t.forEach(((n,t)=>{G.hasOwnProperty(n)?a[t]=G[n]:(i.push(n),L.hasOwnProperty(n)||(L[n]=[]),L[n].push((()=>{a[t]=G[n],++o===i.length&&r(a)})))})),0===i.length&&r(a)}function en(n){if(null===n)return"null";var t=typeof n;return"object"===t||"array"===t||"function"===t?n.toString():""+n}var rn=void 0;function an(n){for(var t="";d[n];)t+=rn[d[n++]];return t}var on=void 0;function un(n){throw new on(n)}function cn(n,t){let e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!("argPackAdvance"in t))throw new TypeError("registerType registeredInstance requires argPackAdvance");var r=t.name;if(n||un('type "'+r+'" must have a positive integer typeid pointer'),G.hasOwnProperty(n)){if(e.Wa)return;un("Cannot register type '"+r+"' twice")}G[n]=t,delete J[n],L.hasOwnProperty(n)&&(t=L[n],delete L[n],t.forEach((n=>n())))}function fn(n,t,e){switch(t){case 0:return e?function(n){return v[n]}:function(n){return d[n]};case 1:return e?function(n){return g[n>>1]}:function(n){return y[n>>1]};case 2:return e?function(n){return m[n>>2]}:function(n){return b[n>>2]};case 3:return e?function(n){return A[n>>3]}:function(n){return T[n>>3]};default:throw new TypeError("Unknown integer type: "+n)}}function sn(n){switch(n){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+n)}}function ln(n){un(n.ea.ha.fa.name+" instance already deleted")}var hn=!1;function pn(){}function vn(n){--n.count.value,0===n.count.value&&(n.ja?n.la.oa(n.ja):n.ha.fa.oa(n.ga))}function dn(n,t,e){return t===e?n:void 0===e.ma||null===(n=dn(n,t,e.ma))?null:e.Ka(n)}var gn={},yn=[];function mn(){for(;yn.length;){var n=yn.pop();n.ea.ua=!1,n.delete()}}var bn=void 0,wn={};function An(n,t){return t.ha&&t.ga||nn("makeClassHandle requires ptr and ptrType"),!!t.la!=!!t.ja&&nn("Both smartPtrType and smartPtr must be specified"),t.count={value:1},Tn(Object.create(n,{ea:{value:t}}))}function Tn(n){return"undefined"==typeof FinalizationRegistry?(Tn=n=>n,n):(hn=new FinalizationRegistry((n=>{vn(n.ea)})),pn=n=>{hn.unregister(n)},(Tn=n=>{var t=n.ea;return t.ja&&hn.register(n,{ea:t},n),n})(n))}function Cn(){}function _n(n,t,e){if(void 0===n[t].ia){var r=n[t];n[t]=function(){return n[t].ia.hasOwnProperty(arguments.length)||un("Function '"+e+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+n[t].ia+")!"),n[t].ia[arguments.length].apply(this,arguments)},n[t].ia=[],n[t].ia[r.ta]=r}}function Pn(n,e,r){t.hasOwnProperty(n)?((void 0===r||void 0!==t[n].ia&&void 0!==t[n].ia[r])&&un("Cannot register public name '"+n+"' twice"),_n(t,n,n),t.hasOwnProperty(r)&&un("Cannot register multiple overloads of a function with the same number of arguments ("+r+")!"),t[n].ia[r]=e):(t[n]=e,void 0!==r&&(t[n].lb=r))}function kn(n,t,e,r,a,i,o,u){this.name=n,this.constructor=t,this.pa=e,this.oa=r,this.ma=a,this.Pa=i,this.wa=o,this.Ka=u,this.ab=[]}function $n(n,t,e){for(;t!==e;)t.wa||un("Expected null or instance of "+e.name+", got an instance of "+t.name),n=t.wa(n),t=t.ma;return n}function Wn(n,t){return null===t?(this.Ba&&un("null is not a valid "+this.name),0):(t.ea||un('Cannot pass "'+en(t)+'" as a '+this.name),t.ea.ga||un("Cannot pass deleted object as a pointer of type "+this.name),$n(t.ea.ga,t.ea.ha.fa,this.fa))}function En(n,t){if(null===t){if(this.Ba&&un("null is not a valid "+this.name),this.ya){var e=this.Ca();return null!==n&&n.push(this.oa,e),e}return 0}if(t.ea||un('Cannot pass "'+en(t)+'" as a '+this.name),t.ea.ga||un("Cannot pass deleted object as a pointer of type "+this.name),!this.xa&&t.ea.ha.xa&&un("Cannot convert argument of type "+(t.ea.la?t.ea.la.name:t.ea.ha.name)+" to parameter type "+this.name),e=$n(t.ea.ga,t.ea.ha.fa,this.fa),this.ya)switch(void 0===t.ea.ja&&un("Passing raw pointer to smart pointer is illegal"),this.gb){case 0:t.ea.la===this?e=t.ea.ja:un("Cannot convert argument of type "+(t.ea.la?t.ea.la.name:t.ea.ha.name)+" to parameter type "+this.name);break;case 1:e=t.ea.ja;break;case 2:if(t.ea.la===this)e=t.ea.ja;else{var r=t.clone();e=this.bb(e,qn((function(){r.delete()}))),null!==n&&n.push(this.oa,e)}break;default:un("Unsupporting sharing policy")}return e}function On(n,t){return null===t?(this.Ba&&un("null is not a valid "+this.name),0):(t.ea||un('Cannot pass "'+en(t)+'" as a '+this.name),t.ea.ga||un("Cannot pass deleted object as a pointer of type "+this.name),t.ea.ha.xa&&un("Cannot convert argument of type "+t.ea.ha.name+" to parameter type "+this.name),$n(t.ea.ga,t.ea.ha.fa,this.fa))}function jn(n,t,e,r,a,i,o,u,c,f,s){this.name=n,this.fa=t,this.Ba=e,this.xa=r,this.ya=a,this.$a=i,this.gb=o,this.Ha=u,this.Ca=c,this.bb=f,this.oa=s,a||void 0!==t.ma?this.toWireType=En:(this.toWireType=r?Wn:On,this.ka=null)}function Sn(n,e,r){t.hasOwnProperty(n)||nn("Replacing nonexistant public symbol"),void 0!==t[n].ia&&void 0!==r?t[n].ia[r]=e:(t[n]=e,t[n].ta=r)}var Fn=[];function Dn(n,t){n=an(n);var e=Fn[t];return e||(t>=Fn.length&&(Fn.length=t+1),Fn[t]=e=O.get(t)),"function"!=typeof e&&un("unknown function pointer with signature "+n+": "+t),e}var Mn=void 0;function Un(n){var t=an(n=Tt(n));return At(n),t}function In(n,t){var e=[],r={};throw t.forEach((function n(t){r[t]||G[t]||(J[t]?J[t].forEach(n):(e.push(t),r[t]=!0))})),new Mn(n+": "+e.map(Un).join([", "]))}function Rn(n,t,e,r,a){var i=t.length;2>i&&un("argTypes array size mismatch! Must at least get return value and 'this' types!");var o=null!==t[1]&&null!==e,u=!1;for(e=1;e<t.length;++e)if(null!==t[e]&&void 0===t[e].ka){u=!0;break}var c="void"!==t[0].name,f=i-2,s=Array(f),l=[],h=[];return function(){if(arguments.length!==f&&un("function "+n+" called with "+arguments.length+" arguments, expected "+f+" args!"),h.length=0,l.length=o?2:1,l[0]=a,o){var e=t[1].toWireType(h,this);l[1]=e}for(var i=0;i<f;++i)s[i]=t[i+2].toWireType(h,arguments[i]),l.push(s[i]);if(i=r.apply(null,l),u)q(h);else for(var p=o?1:2;p<t.length;p++){var v=1===p?e:s[p-2];null!==t[p].ka&&t[p].ka(v)}return c?t[0].fromWireType(i):void 0}}function xn(n,t){for(var e=[],r=0;r<n;r++)e.push(b[t+4*r>>2]);return e}function Hn(n,t,e){return n instanceof Object||un(e+' with invalid "this": '+n),n instanceof t.fa.constructor||un(e+' incompatible with "this" of type '+n.constructor.name),n.ea.ga||un("cannot call emscripten binding method "+e+" on deleted object"),$n(n.ea.ga,n.ea.ha.fa,t.fa)}var Yn=[],Vn=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function Bn(n){4<n&&0==--Vn[n].Da&&(Vn[n]=void 0,Yn.push(n))}var zn=n=>(n||un("Cannot use deleted val. handle = "+n),Vn[n].value),qn=n=>{switch(n){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var t=Yn.length?Yn.pop():Vn.length;return Vn[t]={Da:1,value:n},t}};function Nn(n,t,e){switch(t){case 0:return function(n){return this.fromWireType((e?v:d)[n])};case 1:return function(n){return this.fromWireType((e?g:y)[n>>1])};case 2:return function(n){return this.fromWireType((e?m:b)[n>>2])};default:throw new TypeError("Unknown integer type: "+n)}}function Ln(n,t){var e=G[n];return void 0===e&&un(t+" has unknown type "+Un(n)),e}function Gn(n,t){switch(t){case 2:return function(n){return this.fromWireType(w[n>>2])};case 3:return function(n){return this.fromWireType(C[n>>3])};default:throw new TypeError("Unknown float type: "+n)}}var Jn="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0;function Zn(n,t){for(var e=n>>1,r=e+t/2;!(e>=r)&&y[e];)++e;if(32<(e<<=1)-n&&Jn)return Jn.decode(d.subarray(n,e));for(e="",r=0;!(r>=t/2);++r){var a=g[n+2*r>>1];if(0==a)break;e+=String.fromCharCode(a)}return e}function Xn(n,t,e){if(void 0===e&&(e=2147483647),2>e)return 0;var r=t;e=(e-=2)<2*n.length?e/2:n.length;for(var a=0;a<e;++a)g[t>>1]=n.charCodeAt(a),t+=2;return g[t>>1]=0,t-r}function Kn(n){return 2*n.length}function Qn(n,t){for(var e=0,r="";!(e>=t/4);){var a=m[n+4*e>>2];if(0==a)break;++e,65536<=a?(a-=65536,r+=String.fromCharCode(55296|a>>10,56320|1023&a)):r+=String.fromCharCode(a)}return r}function nt(n,t,e){if(void 0===e&&(e=2147483647),4>e)return 0;var r=t;e=r+e-4;for(var a=0;a<n.length;++a){var i=n.charCodeAt(a);if(55296<=i&&57343>=i&&(i=65536+((1023&i)<<10)|1023&n.charCodeAt(++a)),m[t>>2]=i,(t+=4)+4>e)break}return m[t>>2]=0,t-r}function tt(n){for(var t=0,e=0;e<n.length;++e){var r=n.charCodeAt(e);55296<=r&&57343>=r&&++e,t+=4}return t}function et(n,t){for(var e=Array(n),r=0;r<n;++r)e[r]=Ln(b[t+4*r>>2],"parameter "+r);return e}var rt={};function at(n){var t=rt[n];return void 0===t?an(n):t}var it=[];function ot(){function n(n){n.$$$embind_global$$$=n;var t="object"==typeof $$$embind_global$$$&&n.$$$embind_global$$$==n;return t||delete n.$$$embind_global$$$,t}if("object"==typeof globalThis)return globalThis;if("object"==typeof $$$embind_global$$$)return $$$embind_global$$$;if("object"==typeof o.c&&n(o.c)?$$$embind_global$$$=o.c:"object"==typeof self&&n(self)&&($$$embind_global$$$=self),"object"==typeof $$$embind_global$$$)return $$$embind_global$$$;throw Error("unable to get global object.")}var ut=[],ct={};function ft(){if(!st){var n,t={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"==typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:u||"./this.program"};for(n in ct)void 0===ct[n]?delete t[n]:t[n]=ct[n];var e=[];for(n in t)e.push(n+"="+t[n]);st=e}return st}var st,lt=[null,[],[]];function ht(n){return 0==n%4&&(0!=n%100||0==n%400)}var pt=[31,29,31,30,31,30,31,31,30,31,30,31],vt=[31,28,31,30,31,30,31,31,30,31,30,31];function dt(n,t,e,r){function a(n,t,e){for(n="number"==typeof n?n.toString():n||"";n.length<t;)n=e[0]+n;return n}function i(n,t){return a(n,t,"0")}function o(n,t){function e(n){return 0>n?-1:0<n?1:0}var r;return 0===(r=e(n.getFullYear()-t.getFullYear()))&&0===(r=e(n.getMonth()-t.getMonth()))&&(r=e(n.getDate()-t.getDate())),r}function u(n){switch(n.getDay()){case 0:return new Date(n.getFullYear()-1,11,29);case 1:return n;case 2:return new Date(n.getFullYear(),0,3);case 3:return new Date(n.getFullYear(),0,2);case 4:return new Date(n.getFullYear(),0,1);case 5:return new Date(n.getFullYear()-1,11,31);case 6:return new Date(n.getFullYear()-1,11,30)}}function c(n){var t=n.ra;for(n=new Date(new Date(n.sa+1900,0,1).getTime());0<t;){var e=n.getMonth(),r=(ht(n.getFullYear())?pt:vt)[e];if(!(t>r-n.getDate())){n.setDate(n.getDate()+t);break}t-=r-n.getDate()+1,n.setDate(1),11>e?n.setMonth(e+1):(n.setMonth(0),n.setFullYear(n.getFullYear()+1))}return e=new Date(n.getFullYear()+1,0,4),t=u(new Date(n.getFullYear(),0,4)),e=u(e),0>=o(t,n)?0>=o(e,n)?n.getFullYear()+1:n.getFullYear():n.getFullYear()-1}var f=m[r+40>>2];for(var s in r={jb:m[r>>2],ib:m[r+4>>2],za:m[r+8>>2],Ea:m[r+12>>2],Aa:m[r+16>>2],sa:m[r+20>>2],na:m[r+24>>2],ra:m[r+28>>2],mb:m[r+32>>2],hb:m[r+36>>2],kb:f&&f?k(d,f):""},e=e?k(d,e):"",f={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"})e=e.replace(new RegExp(s,"g"),f[s]);var l="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),h="January February March April May June July August September October November December".split(" ");for(s in f={"%a":function(n){return l[n.na].substring(0,3)},"%A":function(n){return l[n.na]},"%b":function(n){return h[n.Aa].substring(0,3)},"%B":function(n){return h[n.Aa]},"%C":function(n){return i((n.sa+1900)/100|0,2)},"%d":function(n){return i(n.Ea,2)},"%e":function(n){return a(n.Ea,2," ")},"%g":function(n){return c(n).toString().substring(2)},"%G":function(n){return c(n)},"%H":function(n){return i(n.za,2)},"%I":function(n){return 0==(n=n.za)?n=12:12<n&&(n-=12),i(n,2)},"%j":function(n){for(var t=0,e=0;e<=n.Aa-1;t+=(ht(n.sa+1900)?pt:vt)[e++]);return i(n.Ea+t,3)},"%m":function(n){return i(n.Aa+1,2)},"%M":function(n){return i(n.ib,2)},"%n":function(){return"\n"},"%p":function(n){return 0<=n.za&&12>n.za?"AM":"PM"},"%S":function(n){return i(n.jb,2)},"%t":function(){return"\t"},"%u":function(n){return n.na||7},"%U":function(n){return i(Math.floor((n.ra+7-n.na)/7),2)},"%V":function(n){var t=Math.floor((n.ra+7-(n.na+6)%7)/7);if(2>=(n.na+371-n.ra-2)%7&&t++,t)53==t&&(4==(e=(n.na+371-n.ra)%7)||3==e&&ht(n.sa)||(t=1));else{t=52;var e=(n.na+7-n.ra-1)%7;(4==e||5==e&&ht(n.sa%400-1))&&t++}return i(t,2)},"%w":function(n){return n.na},"%W":function(n){return i(Math.floor((n.ra+7-(n.na+6)%7)/7),2)},"%y":function(n){return(n.sa+1900).toString().substring(2)},"%Y":function(n){return n.sa+1900},"%z":function(n){var t=0<=(n=n.hb);return n=Math.abs(n)/60,(t?"+":"-")+String("0000"+(n/60*100+n%60)).slice(-4)},"%Z":function(n){return n.kb},"%%":function(){return"%"}},e=e.replace(/%%/g,"\0\0"),f)e.includes(s)&&(e=e.replace(new RegExp(s,"g"),f[s](r)));return(s=function(n){var t=Array(W(n)+1);return $(n,t,0,t.length),t}(e=e.replace(/\0\0/g,"%"))).length>t?0:(v.set(s,n),s.length-1)}Q=t.InternalError=K("InternalError");for(var gt=Array(256),yt=0;256>yt;++yt)gt[yt]=String.fromCharCode(yt);rn=gt,on=t.BindingError=K("BindingError"),Cn.prototype.isAliasOf=function(n){if(!(this instanceof Cn&&n instanceof Cn))return!1;var t=this.ea.ha.fa,e=this.ea.ga,r=n.ea.ha.fa;for(n=n.ea.ga;t.ma;)e=t.wa(e),t=t.ma;for(;r.ma;)n=r.wa(n),r=r.ma;return t===r&&e===n},Cn.prototype.clone=function(){if(this.ea.ga||ln(this),this.ea.va)return this.ea.count.value+=1,this;var n=Tn,t=Object,e=t.create,r=Object.getPrototypeOf(this),a=this.ea;return(n=n(e.call(t,r,{ea:{value:{count:a.count,ua:a.ua,va:a.va,ga:a.ga,ha:a.ha,ja:a.ja,la:a.la}}}))).ea.count.value+=1,n.ea.ua=!1,n},Cn.prototype.delete=function(){this.ea.ga||ln(this),this.ea.ua&&!this.ea.va&&un("Object already scheduled for deletion"),pn(this),vn(this.ea),this.ea.va||(this.ea.ja=void 0,this.ea.ga=void 0)},Cn.prototype.isDeleted=function(){return!this.ea.ga},Cn.prototype.deleteLater=function(){return this.ea.ga||ln(this),this.ea.ua&&!this.ea.va&&un("Object already scheduled for deletion"),yn.push(this),1===yn.length&&bn&&bn(mn),this.ea.ua=!0,this},t.getInheritedInstanceCount=function(){return Object.keys(wn).length},t.getLiveInheritedInstances=function(){var n,t=[];for(n in wn)wn.hasOwnProperty(n)&&t.push(wn[n]);return t},t.flushPendingDeletes=mn,t.setDelayFunction=function(n){bn=n,yn.length&&bn&&bn(mn)},jn.prototype.Qa=function(n){return this.Ha&&(n=this.Ha(n)),n},jn.prototype.Fa=function(n){this.oa&&this.oa(n)},jn.prototype.argPackAdvance=8,jn.prototype.readValueFromPointer=N,jn.prototype.deleteObject=function(n){null!==n&&n.delete()},jn.prototype.fromWireType=function(n){function t(){return this.ya?An(this.fa.pa,{ha:this.$a,ga:e,la:this,ja:n}):An(this.fa.pa,{ha:this,ga:n})}var e=this.Qa(n);if(!e)return this.Fa(n),null;var r=function(n,t){for(void 0===t&&un("ptr should not be undefined");n.ma;)t=n.wa(t),n=n.ma;return wn[t]}(this.fa,e);if(void 0!==r)return 0===r.ea.count.value?(r.ea.ga=e,r.ea.ja=n,r.clone()):(r=r.clone(),this.Fa(n),r);if(r=this.fa.Pa(e),!(r=gn[r]))return t.call(this);r=this.xa?r.Ia:r.pointerType;var a=dn(e,this.fa,r.fa);return null===a?t.call(this):this.ya?An(r.fa.pa,{ha:r,ga:a,la:this,ja:n}):An(r.fa.pa,{ha:r,ga:a})},Mn=t.UnboundTypeError=K("UnboundTypeError"),t.count_emval_handles=function(){for(var n=0,t=5;t<Vn.length;++t)void 0!==Vn[t]&&++n;return n},t.get_first_emval=function(){for(var n=5;n<Vn.length;++n)if(void 0!==Vn[n])return Vn[n];return null};var mt={n:function(n){return wt(n+24)+24},m:function(n,t,e){throw new B(n).La(t,e),n},s:function(n){var t=z[n];delete z[n];var e=t.Ca,r=t.oa,a=t.Ga;tn([n],a.map((n=>n.Ta)).concat(a.map((n=>n.eb))),(n=>{var i={};return a.forEach(((t,e)=>{var r=n[e],o=t.Ra,u=t.Sa,c=n[e+a.length],f=t.cb,s=t.fb;i[t.Na]={read:n=>r.fromWireType(o(u,n)),write:(n,t)=>{var e=[];f(s,n,c.toWireType(e,t)),q(e)}}})),[{name:t.name,fromWireType:function(n){var t,e={};for(t in i)e[t]=i[t].read(n);return r(n),e},toWireType:function(n,t){for(var a in i)if(!(a in t))throw new TypeError('Missing field:  "'+a+'"');var o=e();for(a in i)i[a].write(o,t[a]);return null!==n&&n.push(r,o),o},argPackAdvance:8,readValueFromPointer:N,ka:r}]}))},F:function(n,t,e,r,a){t=an(t),e=sn(e);var i=-1!=t.indexOf("u");i&&(a=(1n<<64n)-1n),cn(n,{name:t,fromWireType:function(n){return n},toWireType:function(n,e){if("bigint"!=typeof e&&"number"!=typeof e)throw new TypeError('Cannot convert "'+en(e)+'" to '+this.name);if(e<r||e>a)throw new TypeError('Passing a number "'+en(e)+'" from JS side to C/C++ side to an argument of type "'+t+'", which is outside the valid range ['+r+", "+a+"]!");return e},argPackAdvance:8,readValueFromPointer:fn(t,e,!i),ka:null})},S:function(n,t,e,r,a){var i=sn(e);cn(n,{name:t=an(t),fromWireType:function(n){return!!n},toWireType:function(n,t){return t?r:a},argPackAdvance:8,readValueFromPointer:function(n){if(1===e)var r=v;else if(2===e)r=g;else{if(4!==e)throw new TypeError("Unknown boolean type size: "+t);r=m}return this.fromWireType(r[n>>i])},ka:null})},f:function(n,t,e,r,a,i,o,u,c,f,s,l,h){s=an(s),i=Dn(a,i),u&&(u=Dn(o,u)),f&&(f=Dn(c,f)),h=Dn(l,h);var p=Z(s);Pn(p,(function(){In("Cannot construct "+s+" due to unbound types",[r])})),tn([n,t,e],r?[r]:[],(function(t){if(t=t[0],r)var e=t.fa,a=e.pa;else a=Cn.prototype;t=X(p,(function(){if(Object.getPrototypeOf(this)!==o)throw new on("Use 'new' to construct "+s);if(void 0===c.qa)throw new on(s+" has no accessible constructor");var n=c.qa[arguments.length];if(void 0===n)throw new on("Tried to invoke ctor of "+s+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(c.qa).toString()+") parameters instead!");return n.apply(this,arguments)}));var o=Object.create(a,{constructor:{value:t}});t.prototype=o;var c=new kn(s,t,o,h,e,i,u,f);e=new jn(s,c,!0,!1,!1),a=new jn(s+"*",c,!1,!1,!1);var l=new jn(s+" const*",c,!1,!0,!1);return gn[n]={pointerType:a,Ia:l},Sn(p,t),[e,a,l]}))},v:function(n,t,e,r,a,i,o){var u=xn(e,r);t=an(t),i=Dn(a,i),tn([],[n],(function(n){function r(){In("Cannot call "+a+" due to unbound types",u)}var a=(n=n[0]).name+"."+t;t.startsWith("@@")&&(t=Symbol[t.substring(2)]);var c=n.fa.constructor;return void 0===c[t]?(r.ta=e-1,c[t]=r):(_n(c,t,a),c[t].ia[e-1]=r),tn([],u,(function(n){return n=Rn(a,[n[0],null].concat(n.slice(1)),null,i,o),void 0===c[t].ia?(n.ta=e-1,c[t]=n):c[t].ia[e-1]=n,[]})),[]}))},i:function(n,t,e,r,a,i){0<t||R();var o=xn(t,e);a=Dn(r,a),tn([],[n],(function(n){var e="constructor "+(n=n[0]).name;if(void 0===n.fa.qa&&(n.fa.qa=[]),void 0!==n.fa.qa[t-1])throw new on("Cannot register multiple constructors with identical number of parameters ("+(t-1)+") for class '"+n.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");return n.fa.qa[t-1]=()=>{In("Cannot construct "+n.name+" due to unbound types",o)},tn([],o,(function(r){return r.splice(1,0,null),n.fa.qa[t-1]=Rn(e,r,null,a,i),[]})),[]}))},b:function(n,t,e,r,a,i,o,u){var c=xn(e,r);t=an(t),i=Dn(a,i),tn([],[n],(function(n){function r(){In("Cannot call "+a+" due to unbound types",c)}var a=(n=n[0]).name+"."+t;t.startsWith("@@")&&(t=Symbol[t.substring(2)]),u&&n.fa.ab.push(t);var f=n.fa.pa,s=f[t];return void 0===s||void 0===s.ia&&s.className!==n.name&&s.ta===e-2?(r.ta=e-2,r.className=n.name,f[t]=r):(_n(f,t,a),f[t].ia[e-2]=r),tn([],c,(function(r){return r=Rn(a,r,n,i,o),void 0===f[t].ia?(r.ta=e-2,f[t]=r):f[t].ia[e-2]=r,[]})),[]}))},c:function(n,t,e,r,a,i,o,u,c,f){t=an(t),a=Dn(r,a),tn([],[n],(function(n){var r=(n=n[0]).name+"."+t,s={get:function(){In("Cannot access "+r+" due to unbound types",[e,o])},enumerable:!0,configurable:!0};return s.set=c?()=>{In("Cannot access "+r+" due to unbound types",[e,o])}:()=>{un(r+" is a read-only property")},Object.defineProperty(n.fa.pa,t,s),tn([],c?[e,o]:[e],(function(e){var o=e[0],s={get:function(){var t=Hn(this,n,r+" getter");return o.fromWireType(a(i,t))},enumerable:!0};if(c){c=Dn(u,c);var l=e[1];s.set=function(t){var e=Hn(this,n,r+" setter"),a=[];c(f,e,l.toWireType(a,t)),q(a)}}return Object.defineProperty(n.fa.pa,t,s),[]})),[]}))},R:function(n,t){cn(n,{name:t=an(t),fromWireType:function(n){var t=zn(n);return Bn(n),t},toWireType:function(n,t){return qn(t)},argPackAdvance:8,readValueFromPointer:N,ka:null})},o:function(n,t,e,r){function a(){}e=sn(e),t=an(t),a.values={},cn(n,{name:t,constructor:a,fromWireType:function(n){return this.constructor.values[n]},toWireType:function(n,t){return t.value},argPackAdvance:8,readValueFromPointer:Nn(t,e,r),ka:null}),Pn(t,a)},e:function(n,t,e){var r=Ln(n,"enum");t=an(t),n=r.constructor,r=Object.create(r.constructor.prototype,{value:{value:e},constructor:{value:X(r.name+"_"+t,(function(){}))}}),n.values[e]=r,n[t]=r},E:function(n,t,e){e=sn(e),cn(n,{name:t=an(t),fromWireType:function(n){return n},toWireType:function(n,t){return t},argPackAdvance:8,readValueFromPointer:Gn(t,e),ka:null})},W:function(n,t,e,r,a,i){var o=xn(t,e);n=an(n),a=Dn(r,a),Pn(n,(function(){In("Cannot call "+n+" due to unbound types",o)}),t-1),tn([],o,(function(e){return Sn(n,Rn(n,[e[0],null].concat(e.slice(1)),null,a,i),t-1),[]}))},w:function(n,t,e,r,a){t=an(t),-1===a&&(a=4294967295),a=sn(e);var i=n=>n;if(0===r){var o=32-8*e;i=n=>n<<o>>>o}e=t.includes("unsigned")?function(n,t){return t>>>0}:function(n,t){return t},cn(n,{name:t,fromWireType:i,toWireType:e,argPackAdvance:8,readValueFromPointer:fn(t,a,0!==r),ka:null})},r:function(n,t,e){function r(n){var t=b;return new a(p,t[1+(n>>=2)],t[n])}var a=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][t];cn(n,{name:e=an(e),fromWireType:r,argPackAdvance:8,readValueFromPointer:r},{Wa:!0})},h:function(n,t,e,r,a,i,o,u,c,f,s,l){e=an(e),i=Dn(a,i),u=Dn(o,u),f=Dn(c,f),l=Dn(s,l),tn([n],[t],(function(n){return n=n[0],[new jn(e,n.fa,!1,!1,!0,n,r,i,u,f,l)]}))},G:function(n,t){var e="std::string"===(t=an(t));cn(n,{name:t,fromWireType:function(n){var t=b[n>>2],r=n+4;if(e)for(var a=r,i=0;i<=t;++i){var o=r+i;if(i==t||0==d[o]){if(a=a?k(d,a,o-a):"",void 0===u)var u=a;else u+=String.fromCharCode(0),u+=a;a=o+1}}else{for(u=Array(t),i=0;i<t;++i)u[i]=String.fromCharCode(d[r+i]);u=u.join("")}return At(n),u},toWireType:function(n,t){t instanceof ArrayBuffer&&(t=new Uint8Array(t));var r="string"==typeof t;r||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Int8Array||un("Cannot pass non-string to std::string");var a=e&&r?W(t):t.length,i=wt(4+a+1),o=i+4;if(b[i>>2]=a,e&&r)$(t,d,o,a+1);else if(r)for(r=0;r<a;++r){var u=t.charCodeAt(r);255<u&&(At(o),un("String has UTF-16 code units that do not fit in 8 bits")),d[o+r]=u}else for(r=0;r<a;++r)d[o+r]=t[r];return null!==n&&n.push(At,i),i},argPackAdvance:8,readValueFromPointer:N,ka:function(n){At(n)}})},B:function(n,t,e){if(e=an(e),2===t)var r=Zn,a=Xn,i=Kn,o=()=>y,u=1;else 4===t&&(r=Qn,a=nt,i=tt,o=()=>b,u=2);cn(n,{name:e,fromWireType:function(n){for(var e,a=b[n>>2],i=o(),c=n+4,f=0;f<=a;++f){var s=n+4+f*t;f!=a&&0!=i[s>>u]||(c=r(c,s-c),void 0===e?e=c:(e+=String.fromCharCode(0),e+=c),c=s+t)}return At(n),e},toWireType:function(n,r){"string"!=typeof r&&un("Cannot pass non-string to C++ string type "+e);var o=i(r),c=wt(4+o+t);return b[c>>2]=o>>u,a(r,c+4,o+t),null!==n&&n.push(At,c),c},argPackAdvance:8,readValueFromPointer:N,ka:function(n){At(n)}})},t:function(n,t,e,r,a,i){z[n]={name:an(t),Ca:Dn(e,r),oa:Dn(a,i),Ga:[]}},j:function(n,t,e,r,a,i,o,u,c,f){z[n].Ga.push({Na:an(t),Ta:e,Ra:Dn(r,a),Sa:i,eb:o,cb:Dn(u,c),fb:f})},T:function(n,t){cn(n,{Xa:!0,name:t=an(t),argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},l:function(n,t,e){n=zn(n),t=Ln(t,"emval::as");var r=[],a=qn(r);return b[e>>2]=a,t.toWireType(r,n)},z:function(n,t){return n=zn(n),(t=Ln(t,"emval::as")).toWireType(null,n)},X:function(n,t,e,r){n=zn(n),e=et(t,e);for(var a=Array(t),i=0;i<t;++i){var o=e[i];a[i]=o.readValueFromPointer(r),r+=o.argPackAdvance}return n=n.apply(void 0,a),qn(n)},U:function(n,t,e,r,a){n=it[n],t=zn(t),e=at(e);var i=[];return b[r>>2]=qn(i),n(t,e,i,a)},C:function(n,t,e,r){(n=it[n])(t=zn(t),e=at(e),null,r)},a:Bn,H:function(n){return 0===n?qn(ot()):(n=at(n),qn(ot()[n]))},A:function(n,t){var e=et(n,t),r=e[0];t=r.name+"_$"+e.slice(1).map((function(n){return n.name})).join("_")+"$";var a=ut[t];if(void 0!==a)return a;var i=Array(n-1);return a=function(n){var t=it.length;return it.push(n),t}(((t,a,o,u)=>{for(var c=0,f=0;f<n-1;++f)i[f]=e[f+1].readValueFromPointer(u+c),c+=e[f+1].argPackAdvance;for(t=t[a].apply(t,i),f=0;f<n-1;++f)e[f+1].Ja&&e[f+1].Ja(i[f]);if(!r.Xa)return r.toWireType(o,t)})),ut[t]=a},q:function(n,t){return n=zn(n),t=zn(t),qn(n[t])},g:function(n){4<n&&(Vn[n].Da+=1)},I:function(n,t){return(n=zn(n))instanceof zn(t)},u:function(n){return"number"==typeof(n=zn(n))},x:function(n){return"string"==typeof(n=zn(n))},V:function(){return qn([])},p:function(n){return qn(at(n))},k:function(n){q(zn(n)),Bn(n)},d:function(n,t){return n=(n=Ln(n,"_emval_take_value")).readValueFromPointer(t),qn(n)},y:function(n){return n=zn(n),qn(typeof n)},D:function(){R("")},N:function(n,t,e){d.copyWithin(n,t,t+e)},M:function(n){var t=d.length;if(2147483648<(n>>>=0))return!1;for(var e=1;4>=e;e*=2){var r=t*(1+.2/e);r=Math.min(r,n+100663296);var a=Math;r=Math.max(n,r),a=a.min.call(a,2147483648,r+(65536-r%65536)%65536);n:{try{h.grow(a-p.byteLength+65535>>>16),E();var o=1;break n}catch(i){}o=void 0}if(o)return!0}return!1},K:function(n,t){var e=0;return ft().forEach((function(r,a){var i=t+e;for(a=b[n+4*a>>2]=i,i=0;i<r.length;++i)v[0|a++]=r.charCodeAt(i);v[0|a]=0,e+=r.length+1})),0},L:function(n,t){var e=ft();b[n>>2]=e.length;var r=0;return e.forEach((function(n){r+=n.length+1})),b[t>>2]=r,0},Q:function(){return 52},P:function(){return 70},O:function(n,t,e,r){for(var a=0,i=0;i<e;i++){var o=b[t>>2],u=b[t+4>>2];t+=8;for(var c=0;c<u;c++){var f=d[o+c],h=lt[n];0===f||10===f?((1===n?s:l)(k(h,0)),h.length=0):h.push(f)}a+=u}return b[r>>2]=a,0},J:function(n,t,e,r){return dt(n,t,e,r)}};!function(){function n(n){t.asm=n.exports,h=t.asm.Y,E(),O=t.asm.ca,S.unshift(t.asm.Z),U--,t.monitorRunDependencies&&t.monitorRunDependencies(U),0==U&&I&&(n=I,I=null,n())}function e(t){n(t.instance)}function a(n){return(f||"function"!=typeof fetch?Promise.resolve().then((function(){return Y()})):fetch(M,{credentials:"same-origin"}).then((function(n){if(!n.ok)throw"failed to load wasm binary file at '"+M+"'";return n.arrayBuffer()})).catch((function(){return Y()}))).then((function(n){return WebAssembly.instantiate(n,o)})).then((function(n){return n})).then(n,(function(n){l("failed to asynchronously prepare wasm: "+n),R(n)}))}var o={a:mt};if(U++,t.monitorRunDependencies&&t.monitorRunDependencies(U),t.instantiateWasm)try{return t.instantiateWasm(o,n)}catch(i){l("Module.instantiateWasm callback failed with error: "+i),r(i)}(f||"function"!=typeof WebAssembly.instantiateStreaming||x()||"function"!=typeof fetch?a(e):fetch(M,{credentials:"same-origin"}).then((function(n){return WebAssembly.instantiateStreaming(n,o).then(e,(function(n){return l("wasm streaming compile failed: "+n),l("falling back to ArrayBuffer instantiation"),a(e)}))}))).catch(r)}(),t.___wasm_call_ctors=function(){return(t.___wasm_call_ctors=t.asm.Z).apply(null,arguments)};var bt,wt=t._malloc=function(){return(wt=t._malloc=t.asm._).apply(null,arguments)},At=t._free=function(){return(At=t._free=t.asm.$).apply(null,arguments)},Tt=t.___getTypeName=function(){return(Tt=t.___getTypeName=t.asm.aa).apply(null,arguments)};function Ct(){function n(){if(!bt&&(bt=!0,t.calledRun=!0,!_)){if(V(S),e(t),t.onRuntimeInitialized&&t.onRuntimeInitialized(),t.postRun)for("function"==typeof t.postRun&&(t.postRun=[t.postRun]);t.postRun.length;){var n=t.postRun.shift();F.unshift(n)}V(F)}}if(!(0<U)){if(t.preRun)for("function"==typeof t.preRun&&(t.preRun=[t.preRun]);t.preRun.length;)D();V(j),0<U||(t.setStatus?(t.setStatus("Running..."),setTimeout((function(){setTimeout((function(){t.setStatus("")}),1),n()}),1)):n())}}if(t.__embind_initialize_bindings=function(){return(t.__embind_initialize_bindings=t.asm.ba).apply(null,arguments)},t.___cxa_is_pointer_type=function(){return(t.___cxa_is_pointer_type=t.asm.da).apply(null,arguments)},I=function n(){bt||Ct(),bt||(I=n)},t.preInit)for("function"==typeof t.preInit&&(t.preInit=[t.preInit]);0<t.preInit.length;)t.preInit.pop()();return Ct(),n.ready},r.exports=i;const c=(0,o.g)(u.exports),f=Object.freeze(Object.defineProperty({__proto__:null,default:c},Symbol.toStringTag,{value:"Module"}))}}]);
//# sourceMappingURL=132.d2ddba31.chunk.js.map