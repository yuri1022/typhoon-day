"use strict";(self.webpackChunktyphoon=self.webpackChunktyphoon||[]).push([[4144],{43047:(t,e,n)=>{n.d(e,{a:()=>x,b:()=>d,c:()=>s,e:()=>b,f:()=>o,g:()=>y,i:()=>f,j:()=>p,l:()=>g,n:()=>m,s:()=>r,t:()=>_});var i=n(53494);function s(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function r(t,e,n,i,s){return t[0]=e,t[1]=n,t[2]=i,t[3]=s,t}function o(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2],t[3]=e[3]+n[3],t}function a(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t[2]=e[2]-n[2],t[3]=e[3]-n[3],t}function l(t,e,n){return t[0]=e[0]*n[0],t[1]=e[1]*n[1],t[2]=e[2]*n[2],t[3]=e[3]*n[3],t}function u(t,e,n){return t[0]=e[0]/n[0],t[1]=e[1]/n[1],t[2]=e[2]/n[2],t[3]=e[3]/n[3],t}function d(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t[3]=e[3]*n,t}function c(t,e){const n=e[0]-t[0],i=e[1]-t[1],s=e[2]-t[2],r=e[3]-t[3];return Math.sqrt(n*n+i*i+s*s+r*r)}function h(t,e){const n=e[0]-t[0],i=e[1]-t[1],s=e[2]-t[2],r=e[3]-t[3];return n*n+i*i+s*s+r*r}function f(t){const e=t[0],n=t[1],i=t[2],s=t[3];return Math.sqrt(e*e+n*n+i*i+s*s)}function p(t){const e=t[0],n=t[1],i=t[2],s=t[3];return e*e+n*n+i*i+s*s}function m(t,e){const n=e[0],i=e[1],s=e[2],r=e[3];let o=n*n+i*i+s*s+r*r;return o>0&&(o=1/Math.sqrt(o),t[0]=n*o,t[1]=i*o,t[2]=s*o,t[3]=r*o),t}function y(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]+t[3]*e[3]}function g(t,e,n,i){const s=e[0],r=e[1],o=e[2],a=e[3];return t[0]=s+i*(n[0]-s),t[1]=r+i*(n[1]-r),t[2]=o+i*(n[2]-o),t[3]=a+i*(n[3]-a),t}function _(t,e,n){const i=e[0],s=e[1],r=e[2],o=e[3];return t[0]=n[0]*i+n[4]*s+n[8]*r+n[12]*o,t[1]=n[1]*i+n[5]*s+n[9]*r+n[13]*o,t[2]=n[2]*i+n[6]*s+n[10]*r+n[14]*o,t[3]=n[3]*i+n[7]*s+n[11]*r+n[15]*o,t}function x(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]}function b(t,e){const n=t[0],s=t[1],r=t[2],o=t[3],a=e[0],l=e[1],u=e[2],d=e[3],c=(0,i.FD)();return Math.abs(n-a)<=c*Math.max(1,Math.abs(n),Math.abs(a))&&Math.abs(s-l)<=c*Math.max(1,Math.abs(s),Math.abs(l))&&Math.abs(r-u)<=c*Math.max(1,Math.abs(r),Math.abs(u))&&Math.abs(o-d)<=c*Math.max(1,Math.abs(o),Math.abs(d))}const I=a,v=l,M=u,S=c,w=h,F=f,B=p;Object.freeze(Object.defineProperty({__proto__:null,add:o,ceil:function(t,e){return t[0]=Math.ceil(e[0]),t[1]=Math.ceil(e[1]),t[2]=Math.ceil(e[2]),t[3]=Math.ceil(e[3]),t},copy:s,copyVec3:function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t},dist:S,distance:c,div:M,divide:u,dot:y,equals:b,exactEquals:x,floor:function(t,e){return t[0]=Math.floor(e[0]),t[1]=Math.floor(e[1]),t[2]=Math.floor(e[2]),t[3]=Math.floor(e[3]),t},inverse:function(t,e){return t[0]=1/e[0],t[1]=1/e[1],t[2]=1/e[2],t[3]=1/e[3],t},len:F,length:f,lerp:g,max:function(t,e,n){return t[0]=Math.max(e[0],n[0]),t[1]=Math.max(e[1],n[1]),t[2]=Math.max(e[2],n[2]),t[3]=Math.max(e[3],n[3]),t},min:function(t,e,n){return t[0]=Math.min(e[0],n[0]),t[1]=Math.min(e[1],n[1]),t[2]=Math.min(e[2],n[2]),t[3]=Math.min(e[3],n[3]),t},mul:v,multiply:l,negate:function(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=-e[3],t},normalize:m,random:function(t,e){const n=i.Ov;let s,r,o,a,l,u;e=e||1;do{s=2*n()-1,r=2*n()-1,l=s*s+r*r}while(l>=1);do{o=2*n()-1,a=2*n()-1,u=o*o+a*a}while(u>=1);const d=Math.sqrt((1-l)/u);return t[0]=e*s,t[1]=e*r,t[2]=e*o*d,t[3]=e*a*d,t},round:function(t,e){return t[0]=Math.round(e[0]),t[1]=Math.round(e[1]),t[2]=Math.round(e[2]),t[3]=Math.round(e[3]),t},scale:d,scaleAndAdd:function(t,e,n,i){return t[0]=e[0]+n[0]*i,t[1]=e[1]+n[1]*i,t[2]=e[2]+n[2]*i,t[3]=e[3]+n[3]*i,t},set:r,sqrDist:w,sqrLen:B,squaredDistance:h,squaredLength:p,str:function(t){return"vec4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"},sub:I,subtract:a,transformMat4:_,transformQuat:function(t,e,n){const i=e[0],s=e[1],r=e[2],o=n[0],a=n[1],l=n[2],u=n[3],d=u*i+a*r-l*s,c=u*s+l*i-o*r,h=u*r+o*s-a*i,f=-o*i-a*s-l*r;return t[0]=d*u+f*-o+c*-l-h*-a,t[1]=c*u+f*-a+h*-o-d*-l,t[2]=h*u+f*-l+d*-a-c*-o,t[3]=e[3],t}},Symbol.toStringTag,{value:"Module"}))},51344:(t,e,n)=>{function i(t){return null!=a(t)||null!=o(t)}function s(t){return l.test(t)}function r(t){var e;return null!==(e=a(t))&&void 0!==e?e:o(t)}function o(t){const e=new Date(t);return function(t,e){if(Number.isNaN(t.getTime()))return!1;let n=!0;if(d&&/\d+\W*$/.test(e)){const t=e.match(/[a-zA-Z]{2,}/);if(t){let e=!1,i=0;for(;!e&&i<=t.length;)e=!u.test(t[i]),i++;n=!e}}return n}(e,t)?Number.isNaN(e.getTime())?null:e.getTime()-6e4*e.getTimezoneOffset():null}function a(t){var e,n,i,s;const r=l.exec(t);if(null===r||void 0===r||!r.groups)return null;const o=r.groups,a=+o.year,u=+o.month-1,d=+o.day,c=+(null!==(e=o.hours)&&void 0!==e?e:"0"),h=+(null!==(n=o.minutes)&&void 0!==n?n:"0"),f=+(null!==(i=o.seconds)&&void 0!==i?i:"0");if(c>23)return null;if(h>59)return null;if(f>59)return null;const p=null!==(s=o.ms)&&void 0!==s?s:"0",m=p?+p.padEnd(3,"0").substring(0,3):0;let y;if(o.isUTC||!o.offsetSign)y=Date.UTC(a,u,d,c,h,f,m);else{const t=+o.offsetHours,e=+o.offsetMinutes;y=6e4*("+"===o.offsetSign?-1:1)*(60*t+e)+Date.UTC(a,u,d,c,h,f,m)}return Number.isNaN(y)?null:y}n.d(e,{Br:()=>s,Cq:()=>i,_U:()=>r});const l=/^(?:(?<year>-?\d{4,})-(?<month>\d{2})-(?<day>\d{2}))(?:T(?<hours>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?:\.(?<ms>\d+))?)?(?:(?<isUTC>Z)|(?:(?<offsetSign>\+|-)(?<offsetHours>\d{2}):(?<offsetMinutes>\d{2})))?$/;const u=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,d=!Number.isNaN(new Date("technology 10").getTime())},55855:(t,e,n)=>{function i(){return[0,0,0,0]}function s(t,e,n,i){return[t,e,n,i]}function r(){return[0,0,0,0]}function o(){return s(1,1,1,1)}function a(){return s(1,0,0,0)}function l(){return s(0,1,0,0)}function u(){return s(0,0,1,0)}function d(){return s(0,0,0,1)}n.d(e,{fA:()=>s,vt:()=>i});const c=[0,0,0,0],h=o(),f=a(),p=l(),m=u(),y=d();Object.freeze(Object.defineProperty({__proto__:null,ONES:h,UNIT_W:y,UNIT_X:f,UNIT_Y:p,UNIT_Z:m,ZEROS:c,clone:function(t){return[t[0],t[1],t[2],t[3]]},create:i,createView:function(t,e){return new Float64Array(t,e,4)},fromArray:function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[0,0,0,0];const n=Math.min(4,t.length);for(let i=0;i<n;++i)e[i]=t[i];return e},fromValues:s,ones:o,unitW:d,unitX:a,unitY:l,unitZ:u,zeros:r},Symbol.toStringTag,{value:"Module"}))},70373:(t,e,n)=>{n.d(e,{w:()=>o});var i=n(18690),s=(n(81806),n(30015)),r=n(61196);class o{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:9,e=arguments.length>1?arguments[1]:void 0;this._compareMinX=c,this._compareMinY=h,this._toBBox=t=>t,this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),e&&("function"==typeof e?this._toBBox=e:this._initFormat(e)),this.clear()}destroy(){this.clear(),b.prune(),I.prune(),v.prune(),M.prune()}all(t){a(this._data,t)}search(t,e){let n=this._data;const i=this._toBBox;if(_(t,n))for(b.clear();n;){for(let s=0,r=n.children.length;s<r;s++){const r=n.children[s],o=n.leaf?i(r):r;_(t,o)&&(n.leaf?e(r):g(t,o)?a(r,e):b.push(r))}n=b.pop()}}collides(t){let e=this._data;const n=this._toBBox;if(!_(t,e))return!1;for(b.clear();e;){for(let i=0,s=e.children.length;i<s;i++){const s=e.children[i],r=e.leaf?n(s):s;if(_(t,r)){if(e.leaf||g(t,r))return!0;b.push(s)}}e=b.pop()}return!1}load(t){if(!t.length)return this;if(t.length<this._minEntries){for(let e=0,n=t.length;e<n;e++)this.insert(t[e]);return this}let e=this._build(t.slice(0,t.length),0,t.length-1,0);if(this._data.children.length)if(this._data.height===e.height)this._splitRoot(this._data,e);else{if(this._data.height<e.height){const t=this._data;this._data=e,e=t}this._insert(e,this._data.height-e.height-1,!0)}else this._data=e;return this}insert(t){return t&&this._insert(t,this._data.height-1),this}clear(){return this._data=new F([]),this}remove(t){if(!t)return this;let e,n=this._data,s=null,r=0,o=!1;const a=this._toBBox(t);for(v.clear(),M.clear();n||v.length>0;){var l;if(n||(n=v.pop(),s=v.data[v.length-1],r=null!==(l=M.pop())&&void 0!==l?l:0,o=!0),n.leaf&&(e=(0,i.qh)(n.children,t,n.children.length,n.indexHint),-1!==e))return n.children.splice(e,1),v.push(n),this._condense(v),this;o||n.leaf||!g(n,a)?s?(r++,n=s.children[r],o=!1):n=null:(v.push(n),M.push(r),r=0,s=n,n=n.children[0])}return this}toJSON(){return this._data}fromJSON(t){return this._data=t,this}_build(t,e,n,i){const s=n-e+1;let r=this._maxEntries;if(s<=r){const i=new F(t.slice(e,n+1));return l(i,this._toBBox),i}i||(i=Math.ceil(Math.log(s)/Math.log(r)),r=Math.ceil(s/r**(i-1)));const o=new B([]);o.height=i;const a=Math.ceil(s/r),u=a*Math.ceil(Math.sqrt(r));x(t,e,n,u,this._compareMinX);for(let l=e;l<=n;l+=u){const e=Math.min(l+u-1,n);x(t,l,e,a,this._compareMinY);for(let n=l;n<=e;n+=a){const s=Math.min(n+a-1,e);o.children.push(this._build(t,n,s,i-1))}}return l(o,this._toBBox),o}_insert(t,e,n){const i=this._toBBox,s=n?t:i(t);v.clear();const r=function(t,e,n,i){for(;i.push(e),!0!==e.leaf&&i.length-1!==n;){let n,i=1/0,s=1/0;for(let r=0,o=e.children.length;r<o;r++){const o=e.children[r],a=f(o),l=m(t,o)-a;l<s?(s=l,i=a<i?a:i,n=o):l===s&&a<i&&(i=a,n=o)}e=n||e.children[0]}return e}(s,this._data,e,v);for(r.children.push(t),d(r,s);e>=0&&v.data[e].children.length>this._maxEntries;)this._split(v,e),e--;!function(t,e,n){for(let i=n;i>=0;i--)d(e.data[i],t)}(s,v,e)}_split(t,e){const n=t.data[e],i=n.children.length,s=this._minEntries;this._chooseSplitAxis(n,s,i);const r=this._chooseSplitIndex(n,s,i);if(!r)return;const o=n.children.splice(r,n.children.length-r),a=n.leaf?new F(o):new B(o);a.height=n.height,l(n,this._toBBox),l(a,this._toBBox),e?t.data[e-1].children.push(a):this._splitRoot(n,a)}_splitRoot(t,e){this._data=new B([t,e]),this._data.height=t.height+1,l(this._data,this._toBBox)}_chooseSplitIndex(t,e,n){let i,s,r;i=s=1/0;for(let o=e;o<=n-e;o++){const e=u(t,0,o,this._toBBox),a=u(t,o,n,this._toBBox),l=y(e,a),d=f(e)+f(a);l<i?(i=l,r=o,s=d<s?d:s):l===i&&d<s&&(s=d,r=o)}return r}_chooseSplitAxis(t,e,n){const i=t.leaf?this._compareMinX:c,s=t.leaf?this._compareMinY:h;this._allDistMargin(t,e,n,i)<this._allDistMargin(t,e,n,s)&&t.children.sort(i)}_allDistMargin(t,e,n,i){t.children.sort(i);const s=this._toBBox,r=u(t,0,e,s),o=u(t,n-e,n,s);let a=p(r)+p(o);for(let l=e;l<n-e;l++){const e=t.children[l];d(r,t.leaf?s(e):e),a+=p(r)}for(let l=n-e-1;l>=e;l--){const e=t.children[l];d(o,t.leaf?s(e):e),a+=p(o)}return a}_condense(t){for(let e=t.length-1;e>=0;e--){const n=t.data[e];if(0===n.children.length)if(e>0){const s=t.data[e-1],r=s.children;r.splice((0,i.qh)(r,n,r.length,s.indexHint),1)}else this.clear();else l(n,this._toBBox)}}_initFormat(t){const e=["return a"," - b",";"];this._compareMinX=new Function("a","b",e.join(t[0])),this._compareMinY=new Function("a","b",e.join(t[1])),this._toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}function a(t,e){let n=t;for(I.clear();n;){var i;if(!0===n.leaf)for(const t of n.children)e(t);else I.pushArray(n.children);n=null!==(i=I.pop())&&void 0!==i?i:null}}function l(t,e){u(t,0,t.children.length,e,t)}function u(t,e,n,i,s){s||(s=new F([])),s.minX=1/0,s.minY=1/0,s.maxX=-1/0,s.maxY=-1/0;for(let r,o=e;o<n;o++)r=t.children[o],d(s,t.leaf?i(r):r);return s}function d(t,e){t.minX=Math.min(t.minX,e.minX),t.minY=Math.min(t.minY,e.minY),t.maxX=Math.max(t.maxX,e.maxX),t.maxY=Math.max(t.maxY,e.maxY)}function c(t,e){return t.minX-e.minX}function h(t,e){return t.minY-e.minY}function f(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function p(t){return t.maxX-t.minX+(t.maxY-t.minY)}function m(t,e){return(Math.max(e.maxX,t.maxX)-Math.min(e.minX,t.minX))*(Math.max(e.maxY,t.maxY)-Math.min(e.minY,t.minY))}function y(t,e){const n=Math.max(t.minX,e.minX),i=Math.max(t.minY,e.minY),s=Math.min(t.maxX,e.maxX),r=Math.min(t.maxY,e.maxY);return Math.max(0,s-n)*Math.max(0,r-i)}function g(t,e){return t.minX<=e.minX&&t.minY<=e.minY&&e.maxX<=t.maxX&&e.maxY<=t.maxY}function _(t,e){return e.minX<=t.maxX&&e.minY<=t.maxY&&e.maxX>=t.minX&&e.maxY>=t.minY}function x(t,e,n,i,s){const o=[e,n];for(;o.length;){const e=o.pop(),n=o.pop();if(e-n<=i)continue;const a=n+Math.ceil((e-n)/i/2)*i;(0,r.q)(t,a,n,e,s),o.push(n,a,a,e)}}const b=new s.A,I=new s.A,v=new s.A,M=new s.A({deallocator:void 0});class S{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}class w extends S{constructor(){super(...arguments),this.height=1,this.indexHint=new i.vW}}class F extends w{constructor(t){super(),this.children=t,this.leaf=!0}}class B extends w{constructor(t){super(),this.children=t,this.leaf=!1}}},33328:(t,e,n)=>{n.d(e,{F:()=>l});var i=n(81806),s=n(70373),r=n(2413);const o={minX:0,minY:0,maxX:0,maxY:0};function a(t,e,n){(function(t){o.minX=t[0],o.minY=t[1],o.maxX=t[2],o.maxY=t[3]})(e),t.search(o,n)}class l{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=new s.w(9,(0,i.A)("esri-csp-restrictions")?t=>({minX:t[0],minY:t[1],maxX:t[2],maxY:t[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const t=new Array(this._idByBounds.size);let e=0;this._idByBounds.forEach(((n,i)=>{t[e++]=i})),this._indexInvalid=!1,this._index.clear(),this._index.load(t)}else this._boundsToLoad.length&&(this._index.load(Array.from(new Set(this._boundsToLoad.filter((t=>this._idByBounds.has(t)))))),this._boundsToLoad.length=0)}}get fullBounds(){if(!this._boundsById.size)return null;const t=(0,r.Ie)();for(const e of this._boundsById.values())e&&(t[0]=Math.min(e[0],t[0]),t[1]=Math.min(e[1],t[1]),t[2]=Math.max(e[2],t[2]),t[3]=Math.max(e[3],t[3]));return t}get valid(){return!this._indexInvalid}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}delete(t){const e=this._boundsById.get(t);this._boundsById.delete(t),e&&(this._idByBounds.delete(e),this._indexInvalid||this._index.remove(e))}forEachInBounds(t,e){this._loadIndex(),a(this._index,t,(t=>e(this._idByBounds.get(t))))}get(t){return this._boundsById.get(t)}has(t){return this._boundsById.has(t)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}set(t,e){if(!this._indexInvalid){const e=this._boundsById.get(t);e&&(this._index.remove(e),this._idByBounds.delete(e))}this._boundsById.set(t,e),e&&(this._idByBounds.set(e,t),this._indexInvalid||(this._boundsToLoad.push(e),this._boundsToLoad.length>5e4&&this._loadIndex()))}}},72547:(t,e,n)=>{n.d(e,{A:()=>p});var i=n(18690),s=n(50076),r=n(54099),o=n(76460),a=n(42294),l=n(2413),u=n(98618),d=n(33328),c=n(55167),h=n(33376);const f=(0,a.vt)();class p{constructor(t){this.geometryInfo=t,this._boundsStore=new d.F,this._featuresById=new Map,this._markedIds=new Set,this.events=new r.A,this.featureAdapter=h.T}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){return this._boundsStore.fullBounds}get storeStatistics(){let t=0;return this._featuresById.forEach((e=>{null!=e.geometry&&e.geometry.coords&&(t+=e.geometry.coords.length)})),{featureCount:this._featuresById.size,vertexCount:t/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}getFullExtent(t){if(null==this.fullBounds)return null;const[e,n,i,s]=this.fullBounds;return{xmin:e,ymin:n,xmax:i,ymax:s,spatialReference:(0,c.ag)(t)}}add(t){this._add(t),this._emitChanged()}addMany(t){for(const e of t)this._add(e);this._emitChanged()}upsertMany(t){const e=t.map((t=>this._upsert(t)));return this._emitChanged(),e.filter(i.Ru)}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}removeById(t){const e=this._featuresById.get(t);return e?(this._remove(e),this._emitChanged(),e):null}removeManyById(t){this._boundsStore.invalidateIndex();for(const e of t){const t=this._featuresById.get(e);t&&this._remove(t)}this._emitChanged()}forEachBounds(t,e){for(const n of t){const t=this._boundsStore.get(n.objectId);t&&e((0,a.Jt)(f,t))}}getFeature(t){return this._featuresById.get(t)}has(t){return this._featuresById.has(t)}forEach(t){this._featuresById.forEach((e=>t(e)))}forEachInBounds(t,e){this._boundsStore.forEachInBounds(t,(t=>{e(this._featuresById.get(t))}))}startMarkingUsedFeatures(){this._boundsStore.invalidateIndex(),this._markedIds.clear()}sweep(){let t=!1;this._featuresById.forEach(((e,n)=>{this._markedIds.has(n)||(t=!0,this._remove(e))})),this._markedIds.clear(),t&&this._emitChanged()}_emitChanged(){this.events.emit("changed",void 0)}_add(t){var e;if(!t)return;const n=t.objectId;if(null==n)return void o.A.getLogger("esri.layers.graphics.data.FeatureStore").error(new s.A("featurestore:invalid-feature","feature id is missing",{feature:t}));const i=this._featuresById.get(n);let r;if(this._markedIds.add(n),i?(t.displayId=i.displayId,r=this._boundsStore.get(n),this._boundsStore.delete(n)):null!=this.onFeatureAdd&&this.onFeatureAdd(t),null===(e=t.geometry)||void 0===e||null===(e=e.coords)||void 0===e||!e.length)return this._boundsStore.set(n,null),void this._featuresById.set(n,t);r=(0,u.jQ)(null!=r?r:(0,l.vt)(),t.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),null!=r&&this._boundsStore.set(n,r),this._featuresById.set(n,t)}_upsert(t){var e;const n=null===t||void 0===t?void 0:t.objectId;if(null==n)return o.A.getLogger("esri.layers.graphics.data.FeatureStore").error(new s.A("featurestore:invalid-feature","feature id is missing",{feature:t})),null;const i=this._featuresById.get(n);if(!i)return this._add(t),t;this._markedIds.add(n);const{geometry:r,attributes:a}=t;for(const s in a)i.attributes[s]=a[s];return r&&(i.geometry=r,this._boundsStore.set(n,null!==(e=(0,u.jQ)((0,l.vt)(),r,this.geometryInfo.hasZ,this.geometryInfo.hasM))&&void 0!==e?e:null)),i}_remove(t){null!=this.onFeatureRemove&&this.onFeatureRemove(t);const e=t.objectId;return this._markedIds.delete(e),this._boundsStore.delete(e),this._featuresById.delete(e),t}}},29184:(t,e,n)=>{n.r(e),n.d(e,{default:()=>v});var i=n(3825),s=n(98773),r=n(50076),o=n(76460),a=n(50346),l=n(19902),u=n(80963),d=n(98618),c=n(72547),h=n(24586),f=n(16744),p=n(10907),m=n(40296),y=n(40098),g=n(1900),_=n(6127),x=n(53430),b=n(67478);const I={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};class v{constructor(){this._queryEngine=null,this._snapshotFeatures=async t=>{const e=await this._fetch(t);return this._createFeatures(e)}}destroy(){var t;null!==(t=this._queryEngine)&&void 0!==t&&t.destroy(),this._queryEngine=this._createDefaultAttributes=null}async load(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._loadOptions={url:t.url,customParameters:t.customParameters};const n=[],[i]=await Promise.all([t.url?this._fetch(null===e||void 0===e?void 0:e.signal):null,this._checkProjection(t.spatialReference)]),s=(0,p.BM)(i,{geometryType:t.geometryType}),o=t.fields||s.fields||[],a=null!=t.hasZ?t.hasZ:s.hasZ,l=s.geometryType;let d=t.objectIdField||s.objectIdFieldName||"__OBJECTID";const h=t.spatialReference||u.KK;let y=t.timeInfo;o===s.fields&&s.unknownFields.length>0&&n.push({name:"geojson-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:s.unknownFields}});const v=new g.A(o);let M=v.get(d);M?("esriFieldTypeString"!==M.type&&(M.type="esriFieldTypeOID"),M.editable=!1,M.nullable=!1,d=M.name):(M={alias:d,name:d,type:"string"===s.objectIdFieldType?"esriFieldTypeString":"esriFieldTypeOID",editable:!1,nullable:!1},o.unshift(M));const S={};for(const u of o){if(null==u.name&&(u.name=u.alias),null==u.alias&&(u.alias=u.name),!u.name)throw new r.A("geojson-layer:invalid-field-name","field name is missing",{field:u});if(!_.m.jsonValues.includes(u.type))throw new r.A("geojson-layer:invalid-field-type",'invalid type for field "'.concat(u.name,'"'),{field:u});if(u.name!==M.name){const t=(0,x.lD)(u);void 0!==t&&(S[u.name]=t)}null==u.length&&(u.length=(0,x._b)(u))}if(y){if(y.startTimeField){const t=v.get(y.startTimeField);t?(y.startTimeField=t.name,t.type="esriFieldTypeDate"):y.startTimeField=null}if(y.endTimeField){const t=v.get(y.endTimeField);t?(y.endTimeField=t.name,t.type="esriFieldTypeDate"):y.endTimeField=null}if(y.trackIdField){const t=v.get(y.trackIdField);t?y.trackIdField=t.name:(y.trackIdField=null,n.push({name:"geojson-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:y}}))}y.startTimeField||y.endTimeField||(n.push({name:"geojson-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:y}}),y=null)}const w=l?(0,m.F0)(l):void 0,F=v.dateFields.length?{timeZoneIANA:b.n$}:null,B={warnings:n,featureErrors:[],layerDefinition:{...I,drawingInfo:null!==w&&void 0!==w?w:void 0,templates:(0,m.e2)(S),extent:void 0,geometryType:l,objectIdField:d,fields:o,hasZ:!!a,timeInfo:y,dateFieldsTimeReference:F}};this._queryEngine=new f.d({fieldsIndex:g.A.fromLayerJSON({fields:o,timeInfo:y,dateFieldsTimeReference:F}),geometryType:l,hasM:!1,hasZ:a,objectIdField:d,spatialReference:h,timeInfo:y,featureStore:new c.A({geometryType:l,hasM:!1,hasZ:a}),cacheSpatialQueries:!0});const E=this._queryEngine.fieldsIndex.requiredFields.indexOf(M);E>-1&&this._queryEngine.fieldsIndex.requiredFields.splice(E,1),this._createDefaultAttributes=(0,m.Vx)(S,d);const T=await this._createFeatures(i);this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,T);const A=this._normalizeFeatures(T,B.featureErrors);this._queryEngine.featureStore.addMany(A);const{fullExtent:j,timeExtent:q}=await this._queryEngine.fetchRecomputedExtents();if(B.layerDefinition.extent=j,q){const{start:t,end:e}=q;B.layerDefinition.timeInfo.timeExtent=[t,e]}return B}async applyEdits(t){const{spatialReference:e,geometryType:n}=this._queryEngine;return await Promise.all([(0,y.$1)(e,n),(0,h.Nk)(t.adds,e),(0,h.Nk)(t.updates,e)]),await this._waitSnapshotComplete(),this._applyEdits(t)}async queryFeatures(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(t,e.signal)}async queryFeatureCount(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(t,e.signal)}async queryObjectIds(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(t,e.signal)}async queryExtent(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(t,e.signal)}async querySnapping(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(t,e.signal)}async refresh(t){var e;this._loadOptions.customParameters=t,null!==(e=this._snapshotTask)&&void 0!==e&&e.abort(),this._snapshotTask=(0,s.UT)(this._snapshotFeatures),this._snapshotTask.promise.then((t=>{this._queryEngine.featureStore.clear(),this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,t);const e=this._normalizeFeatures(t);e&&this._queryEngine.featureStore.addMany(e)}),(t=>{this._queryEngine.featureStore.clear(),(0,a.zf)(t)||o.A.getLogger("esri.layers.GeoJSONLayer").error(new r.A("geojson-layer:refresh","An error occurred during refresh",{error:t}))})),await this._waitSnapshotComplete();const{fullExtent:n,timeExtent:i}=await this._queryEngine.fetchRecomputedExtents();return{extent:n,timeExtent:i}}async _createFeatures(t){if(null==t)return[];const{geometryType:e,hasZ:n,objectIdField:i}=this._queryEngine,s=(0,p.bd)(t,{geometryType:e,hasZ:n,objectIdField:i});if(!(0,u.aI)(this._queryEngine.spatialReference,u.KK))for(const r of s)null!=r.geometry&&(r.geometry=(0,d.Ux)((0,h.Cv)((0,d.zv)(r.geometry,this._queryEngine.geometryType,this._queryEngine.hasZ,!1),u.KK,this._queryEngine.spatialReference)));return s}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _fetch(t){const{url:e,customParameters:n}=this._loadOptions,s=(await(0,i.A)(null!==e&&void 0!==e?e:"",{responseType:"json",query:{...n},signal:t})).data;return(0,p.sO)(s),s}_normalizeFeatures(t,e){const{objectIdField:n,fieldsIndex:i}=this._queryEngine,s=[];for(const r of t){const t=this._createDefaultAttributes(),o=(0,y.MB)(i,t,r.attributes,!0);o?null===e||void 0===e||e.push(o):(this._assignObjectId(t,r.attributes,!0),r.attributes=t,r.objectId=t[n],s.push(r))}return s}async _applyEdits(t){const{adds:e,updates:n,deletes:i}=t,s={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(null!==e&&void 0!==e&&e.length&&this._applyAddEdits(s,e),null!==n&&void 0!==n&&n.length&&this._applyUpdateEdits(s,n),null!==i&&void 0!==i&&i.length){for(const t of i)s.deleteResults.push((0,y.bP)(t));this._queryEngine.featureStore.removeManyById(i)}const{fullExtent:r,timeExtent:o}=await this._queryEngine.fetchRecomputedExtents();return{extent:r,timeExtent:o,featureEditResults:s}}_applyAddEdits(t,e){const{addResults:n}=t,{geometryType:i,hasM:s,hasZ:r,objectIdField:o,spatialReference:a,featureStore:u,fieldsIndex:c}=this._queryEngine,f=[];for(const d of e){if(d.geometry&&i!==(0,l.$B)(d.geometry)){n.push((0,y.Yx)("Incorrect geometry type."));continue}const e=this._createDefaultAttributes(),s=(0,y.MB)(c,e,d.attributes);if(s)n.push(s);else{if(this._assignObjectId(e,d.attributes),d.attributes=e,null!=d.uid){const e=d.attributes[o];t.uidToObjectId[d.uid]=e}if(null!=d.geometry){var p;const t=null!==(p=d.geometry.spatialReference)&&void 0!==p?p:a;d.geometry=(0,h.Cv)((0,y.CR)(d.geometry,t),t,a)}f.push(d),n.push((0,y.bP)(d.attributes[o]))}}u.addMany((0,d.Di)([],f,i,r,s,o))}_applyUpdateEdits(t,e){let{updateResults:n}=t;const{geometryType:i,hasM:s,hasZ:r,objectIdField:o,spatialReference:a,featureStore:u,fieldsIndex:c}=this._queryEngine;for(const p of e){const{attributes:t,geometry:e}=p,m=null===t||void 0===t?void 0:t[o];if(null==m){n.push((0,y.Yx)("Identifier field ".concat(o," missing")));continue}if(!u.has(m)){n.push((0,y.Yx)("Feature with object id ".concat(m," missing")));continue}const g=(0,d.oN)(u.getFeature(m),i,r,s);if(null!=e){var f;if(i!==(0,l.$B)(e)){n.push((0,y.Yx)("Incorrect geometry type."));continue}const t=null!==(f=e.spatialReference)&&void 0!==f?f:a;g.geometry=(0,h.Cv)((0,y.CR)(e,t),t,a)}if(t){const e=(0,y.MB)(c,g.attributes,t);if(e){n.push(e);continue}}u.add((0,d.E2)(g,i,r,s,o)),n.push((0,y.bP)(m))}}_createObjectIdGenerator(t,e){const n=t.fieldsIndex.get(t.objectIdField);if("esriFieldTypeString"===n.type)return()=>n.name+"-"+Date.now().toString(16);let i=Number.NEGATIVE_INFINITY;for(const s of e)s.objectId&&(i=Math.max(i,s.objectId));return i=Math.max(0,i)+1,()=>i++}_assignObjectId(t,e){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const i=this._queryEngine.objectIdField;t[i]=n&&i in e?e[i]:this._objectIdGenerator()}async _checkProjection(t){try{await(0,h.Nk)(u.KK,t)}catch{throw new r.A("geojson-layer","Projection not supported")}}}},10907:(t,e,n)=>{n.d(e,{BM:()=>S,bd:()=>w,sO:()=>M,xD:()=>d});var i=n(51344),s=n(50076),r=n(80963),o=n(20176),a=n(1484),l=n(53430);const u={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function d(t){return u[t]}function*c(t){switch(t.type){case"Feature":yield t;break;case"FeatureCollection":for(const e of t.features)e&&(yield e)}}function*h(t){if(t)switch(t.type){case"Point":yield t.coordinates;break;case"LineString":case"MultiPoint":yield*t.coordinates;break;case"MultiLineString":case"Polygon":for(const e of t.coordinates)yield*e;break;case"MultiPolygon":for(const e of t.coordinates)for(const t of e)yield*t}}function f(t){for(const e of t)if(e.length>2)return!0;return!1}function p(t){let e=0;for(let n=0;n<t.length;n++){const i=t[n],s=t[(n+1)%t.length];e+=i[0]*s[1]-s[0]*i[1]}return e<=0}function m(t){const e=t[0],n=t[t.length-1];return e[0]===n[0]&&e[1]===n[1]&&e[2]===n[2]||t.push(e),t}function y(t,e,n){switch(e.type){case"LineString":case"MultiPoint":return function(t,e,n){return x(t,e.coordinates,n),t}(t,e,n);case"MultiLineString":return function(t,e,n){for(const i of e.coordinates)x(t,i,n);return t}(t,e,n);case"MultiPolygon":return function(t,e,n){for(const i of e.coordinates){g(t,i[0],n);for(let e=1;e<i.length;e++)_(t,i[e],n)}return t}(t,e,n);case"Point":return function(t,e,n){return I(t,e.coordinates,n),t}(t,e,n);case"Polygon":return function(t,e,n){const i=e.coordinates;g(t,i[0],n);for(let s=1;s<i.length;s++)_(t,i[s],n);return t}(t,e,n)}}function g(t,e,n){const i=m(e);!function(t){return!p(t)}(i)?x(t,i,n):b(t,i,n)}function _(t,e,n){const i=m(e);!function(t){return p(t)}(i)?x(t,i,n):b(t,i,n)}function x(t,e,n){for(const i of e)I(t,i,n);t.lengths.push(e.length)}function b(t,e,n){for(let i=e.length-1;i>=0;i--)I(t,e[i],n);t.lengths.push(e.length)}function I(t,e,n){const[i,s,r]=e;t.coords.push(i,s),n.hasZ&&t.coords.push(r||0)}function v(t){switch(typeof t){case"string":return(0,i.Br)(t)?"esriFieldTypeDate":"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function M(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4326;if(!t)throw new s.A("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==t.type&&"FeatureCollection"!==t.type)throw new s.A("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:t});const{crs:n}=t;if(!n)return;const i="string"==typeof n?n:"name"===n.type?n.properties.name:"EPSG"===n.type?n.properties.code:null,o=(0,r.oT)({wkid:e})?new RegExp(".*(CRS84H?|4326)$","i"):new RegExp(".*(".concat(e,")$"),"i");if(!i||!o.test(i))throw new s.A("geojson:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:n})}function S(t){var e,n;let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const s=[],r=new Set,o=new Set;let a,u=!1,p=null,m=!1,{geometryType:y=null}=i,g=!1;for(const x of c(t)){const{geometry:t,properties:e,id:n}=x;if((!t||(y||(y=d(t.type)),d(t.type)===y))&&(u||(u=f(h(t))),m||(m=null!=n,m&&(a=typeof n,e&&(p=Object.keys(e).filter((t=>e[t]===n))))),e&&p&&m&&null!=n&&(p.length>1?p=p.filter((t=>e[t]===n)):1===p.length&&(p=e[p[0]]===n?p:[])),!g&&e)){let t=!0;for(const n in e){if(r.has(n))continue;const i=e[n];if(null==i){t=!1,o.add(n);continue}const a=v(i);if("unknown"===a){o.add(n);continue}o.delete(n),r.add(n);const u=(0,l.rS)(n);u&&s.push({name:u,alias:n,type:a})}g=t}}const _=null!==(e=(0,l.rS)(1===(null===(n=p)||void 0===n?void 0:n.length)&&p[0]||null))&&void 0!==e?e:void 0;if(_)for(const d of s)if(d.name===_&&(0,l.WA)(d)){d.type="esriFieldTypeOID";break}return{fields:s,geometryType:y,hasZ:u,objectIdFieldName:_,objectIdFieldType:a,unknownFields:Array.from(o)}}function w(t,e){return Array.from(function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function*(){const{geometryType:n,objectIdField:i}=e;for(const r of t){var s;const{geometry:t,properties:l,id:u}=r;if(t&&d(t.type)!==n)continue;const c=l||{};let h;i&&(h=c[i],null==u||h||(c[i]=h=u));const f=new o.Om(t?y(new a.A,t,e):null,c,null,null!==(s=h)&&void 0!==s?s:void 0);yield f}}()}(c(t),e))}},40296:(t,e,n)=>{n.d(e,{F0:()=>a,Vx:()=>d,e2:()=>h,f:()=>f});var i=n(81806),s=n(53084),r=n(8298),o=n(44460);function a(t){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===t||"esriGeometryMultipoint"===t?o.Cb:"esriGeometryPolyline"===t?o.yM:o.WR}}}const l=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let u=1;function d(t,e){if((0,i.A)("esri-csp-restrictions"))return()=>({[e]:null,...t});try{let n="this".concat(c(e)," = null;");for(const e in t)n+="this".concat(c(e)," = ").concat(JSON.stringify(t[e]),";");const i=new Function("\n      return class AttributesClass$".concat(u++," {\n        constructor() {\n          ").concat(n,";\n        }\n      }\n    "))();return()=>new i}catch(n){return()=>({[e]:null,...t})}}function c(t){return l.test(t)?".".concat(t):'["'.concat(t,'"]')}function h(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{name:"New Feature",description:"",prototype:{attributes:(0,s.o8)(t)}}]}function f(t,e){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:t},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:e,supportsDelete:e,supportsEditing:e,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:e,supportsExceedsLimitStatistics:!0,supportsAsyncConvert3D:!1},query:r.F,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:e,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}},40098:(t,e,n)=>{n.d(e,{$1:()=>y,CR:()=>m,MB:()=>h,Yx:()=>l,bP:()=>d});var i=n(51344),s=n(80963),r=n(53430);class o{constructor(){this.code=null,this.description=null}}class a{constructor(t){this.error=new o,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=t}}function l(t){return new a(t)}class u{constructor(t){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=t}}function d(t){return new u(t)}const c=new Set;function h(t,e,n){let i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];c.clear();for(const o in n){const s=t.get(o);if(!s)continue;const a=f(s,n[o]);if(c.add(s.name),s&&(i||s.editable)){const t=(0,r.CJ)(s,a);if(t)return l((0,r.uo)(t,s,a));e[s.name]=a}}for(const r of null!==(s=null===t||void 0===t?void 0:t.requiredFields)&&void 0!==s?s:[]){var s;if(!c.has(r.name))return l('missing required field "'.concat(r.name,'"'))}return null}function f(t,e){let n=e;return(0,r.WA)(t)&&"string"==typeof e?n=parseFloat(e):(0,r.yM)(t)&&null!=e&&"string"!=typeof e?n=String(e):(0,r.vE)(t)&&"string"==typeof e&&(n=(0,i._U)(e)),(0,r.WX)(n)}let p;function m(t,e){if(!t||!(0,s.fn)(e))return t;if("rings"in t||"paths"in t){if(null==p)throw new TypeError("geometry engine not loaded");return p.simplify(e,t)}return t}async function y(t,e){!(0,s.fn)(t)||"esriGeometryPolygon"!==e&&"esriGeometryPolyline"!==e||await async function(){return null==p&&(p=await n.e(1669).then(n.bind(n,1669))),p}()}},44460:(t,e,n)=>{n.d(e,{Cb:()=>r,HW:()=>d,JR:()=>s,JZ:()=>l,WR:()=>a,b6:()=>c,fT:()=>i,nC:()=>u,yM:()=>o});const i=[252,146,31,255],s=[153,153,153,255],r={type:"esriSMS",style:"esriSMSCircle",size:6,color:i,outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[153,153,153,255]}},o={type:"esriSLS",style:"esriSLSSolid",width:.75,color:i},a={type:"esriSFS",style:"esriSFSSolid",color:[252,146,31,196],outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[255,255,255,191]}},l={type:"esriTS",color:[255,255,255,255],font:{family:"arial-unicode-ms",size:10,weight:"bold"},horizontalAlignment:"center",kerning:!0,haloColor:[0,0,0,255],haloSize:1,rotated:!1,text:"",xoffset:0,yoffset:0,angle:0},u={type:"esriSMS",style:"esriSMSCircle",color:[0,0,0,255],outline:null,size:10.5},d={type:"esriSLS",style:"esriSLSSolid",color:[0,0,0,255],width:1.5},c={type:"esriSFS",style:"esriSFSSolid",color:[0,0,0,255],outline:null}}}]);
//# sourceMappingURL=4144.922f556f.chunk.js.map