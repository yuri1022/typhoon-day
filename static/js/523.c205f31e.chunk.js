"use strict";(self.webpackChunktyphoon=self.webpackChunktyphoon||[]).push([[523],{43047:(t,r,n)=>{n.d(r,{a:()=>v,b:()=>c,c:()=>o,e:()=>g,f:()=>s,g:()=>y,i:()=>m,j:()=>p,l:()=>M,n:()=>d,s:()=>i,t:()=>b});var e=n(53494);function o(t,r){return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t}function i(t,r,n,e,o){return t[0]=r,t[1]=n,t[2]=e,t[3]=o,t}function s(t,r,n){return t[0]=r[0]+n[0],t[1]=r[1]+n[1],t[2]=r[2]+n[2],t[3]=r[3]+n[3],t}function a(t,r,n){return t[0]=r[0]-n[0],t[1]=r[1]-n[1],t[2]=r[2]-n[2],t[3]=r[3]-n[3],t}function u(t,r,n){return t[0]=r[0]*n[0],t[1]=r[1]*n[1],t[2]=r[2]*n[2],t[3]=r[3]*n[3],t}function l(t,r,n){return t[0]=r[0]/n[0],t[1]=r[1]/n[1],t[2]=r[2]/n[2],t[3]=r[3]/n[3],t}function c(t,r,n){return t[0]=r[0]*n,t[1]=r[1]*n,t[2]=r[2]*n,t[3]=r[3]*n,t}function f(t,r){const n=r[0]-t[0],e=r[1]-t[1],o=r[2]-t[2],i=r[3]-t[3];return Math.sqrt(n*n+e*e+o*o+i*i)}function h(t,r){const n=r[0]-t[0],e=r[1]-t[1],o=r[2]-t[2],i=r[3]-t[3];return n*n+e*e+o*o+i*i}function m(t){const r=t[0],n=t[1],e=t[2],o=t[3];return Math.sqrt(r*r+n*n+e*e+o*o)}function p(t){const r=t[0],n=t[1],e=t[2],o=t[3];return r*r+n*n+e*e+o*o}function d(t,r){const n=r[0],e=r[1],o=r[2],i=r[3];let s=n*n+e*e+o*o+i*i;return s>0&&(s=1/Math.sqrt(s),t[0]=n*s,t[1]=e*s,t[2]=o*s,t[3]=i*s),t}function y(t,r){return t[0]*r[0]+t[1]*r[1]+t[2]*r[2]+t[3]*r[3]}function M(t,r,n,e){const o=r[0],i=r[1],s=r[2],a=r[3];return t[0]=o+e*(n[0]-o),t[1]=i+e*(n[1]-i),t[2]=s+e*(n[2]-s),t[3]=a+e*(n[3]-a),t}function b(t,r,n){const e=r[0],o=r[1],i=r[2],s=r[3];return t[0]=n[0]*e+n[4]*o+n[8]*i+n[12]*s,t[1]=n[1]*e+n[5]*o+n[9]*i+n[13]*s,t[2]=n[2]*e+n[6]*o+n[10]*i+n[14]*s,t[3]=n[3]*e+n[7]*o+n[11]*i+n[15]*s,t}function v(t,r){return t[0]===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}function g(t,r){const n=t[0],o=t[1],i=t[2],s=t[3],a=r[0],u=r[1],l=r[2],c=r[3],f=(0,e.FD)();return Math.abs(n-a)<=f*Math.max(1,Math.abs(n),Math.abs(a))&&Math.abs(o-u)<=f*Math.max(1,Math.abs(o),Math.abs(u))&&Math.abs(i-l)<=f*Math.max(1,Math.abs(i),Math.abs(l))&&Math.abs(s-c)<=f*Math.max(1,Math.abs(s),Math.abs(c))}const S=a,x=u,A=l,O=f,N=h,w=m,k=p;Object.freeze(Object.defineProperty({__proto__:null,add:s,ceil:function(t,r){return t[0]=Math.ceil(r[0]),t[1]=Math.ceil(r[1]),t[2]=Math.ceil(r[2]),t[3]=Math.ceil(r[3]),t},copy:o,copyVec3:function(t,r){return t[0]=r[0],t[1]=r[1],t[2]=r[2],t},dist:O,distance:f,div:A,divide:l,dot:y,equals:g,exactEquals:v,floor:function(t,r){return t[0]=Math.floor(r[0]),t[1]=Math.floor(r[1]),t[2]=Math.floor(r[2]),t[3]=Math.floor(r[3]),t},inverse:function(t,r){return t[0]=1/r[0],t[1]=1/r[1],t[2]=1/r[2],t[3]=1/r[3],t},len:w,length:m,lerp:M,max:function(t,r,n){return t[0]=Math.max(r[0],n[0]),t[1]=Math.max(r[1],n[1]),t[2]=Math.max(r[2],n[2]),t[3]=Math.max(r[3],n[3]),t},min:function(t,r,n){return t[0]=Math.min(r[0],n[0]),t[1]=Math.min(r[1],n[1]),t[2]=Math.min(r[2],n[2]),t[3]=Math.min(r[3],n[3]),t},mul:x,multiply:u,negate:function(t,r){return t[0]=-r[0],t[1]=-r[1],t[2]=-r[2],t[3]=-r[3],t},normalize:d,random:function(t,r){const n=e.Ov;let o,i,s,a,u,l;r=r||1;do{o=2*n()-1,i=2*n()-1,u=o*o+i*i}while(u>=1);do{s=2*n()-1,a=2*n()-1,l=s*s+a*a}while(l>=1);const c=Math.sqrt((1-u)/l);return t[0]=r*o,t[1]=r*i,t[2]=r*s*c,t[3]=r*a*c,t},round:function(t,r){return t[0]=Math.round(r[0]),t[1]=Math.round(r[1]),t[2]=Math.round(r[2]),t[3]=Math.round(r[3]),t},scale:c,scaleAndAdd:function(t,r,n,e){return t[0]=r[0]+n[0]*e,t[1]=r[1]+n[1]*e,t[2]=r[2]+n[2]*e,t[3]=r[3]+n[3]*e,t},set:i,sqrDist:N,sqrLen:k,squaredDistance:h,squaredLength:p,str:function(t){return"vec4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"},sub:S,subtract:a,transformMat4:b,transformQuat:function(t,r,n){const e=r[0],o=r[1],i=r[2],s=n[0],a=n[1],u=n[2],l=n[3],c=l*e+a*i-u*o,f=l*o+u*e-s*i,h=l*i+s*o-a*e,m=-s*e-a*o-u*i;return t[0]=c*l+m*-s+f*-u-h*-a,t[1]=f*l+m*-a+h*-s-c*-u,t[2]=h*l+m*-u+c*-a-f*-s,t[3]=r[3],t}},Symbol.toStringTag,{value:"Module"}))},59784:(t,r,n)=>{n.d(r,{$:()=>M,IB:()=>o,N2:()=>b,RH:()=>g,Ws:()=>x,ZD:()=>v});var e=n(69539);n(43047),n(55855);function o(t){return"r"in t&&"g"in t&&"b"in t}function i(t){return"h"in t&&"s"in t&&"v"in t}function s(t){return"l"in t&&"a"in t&&"b"in t}function a(t){return"l"in t&&"c"in t&&"h"in t}const u=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],l=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]];function c(t,r){const n=[];let e,o;if(t[0].length!==r.length)throw new Error("dimensions do not match");const i=t.length,s=t[0].length;let a=0;for(e=0;e<i;e++){for(a=0,o=0;o<s;o++)a+=t[e][o]*r[o];n.push(a)}return n}function f(t){const r=[t.r/255,t.g/255,t.b/255].map((t=>t<=.04045?t/12.92:((t+.055)/1.055)**2.4)),n=c(u,r);return{x:100*n[0],y:100*n[1],z:100*n[2]}}function h(t){const r=c(l,[t.x/100,t.y/100,t.z/100]).map((t=>{const r=t<=.0031308?12.92*t:1.055*t**(1/2.4)-.055;return Math.min(1,Math.max(r,0))}));return{r:Math.round(255*r[0]),g:Math.round(255*r[1]),b:Math.round(255*r[2])}}function m(t){const r=[t.x/95.047,t.y/100,t.z/108.883].map((t=>t>(6/29)**3?t**(1/3):1/3*(29/6)**2*t+4/29));return{l:116*r[1]-16,a:500*(r[0]-r[1]),b:200*(r[1]-r[2])}}function p(t){const r=t.l,n=[(r+16)/116+t.a/500,(r+16)/116,(r+16)/116-t.b/200].map((t=>t>6/29?t**3:3*(6/29)**2*(t-4/29)));return{x:95.047*n[0],y:100*n[1],z:108.883*n[2]}}function d(t){return function(t){const r=t.l,n=t.a,e=t.b,o=Math.sqrt(n*n+e*e);let i=Math.atan2(e,n);return i=i>0?i:i+2*Math.PI,{l:r,c:o,h:i}}(m(f(t)))}function y(t){return h(p(function(t){const r=t.l,n=t.c,e=t.h;return{l:r,a:n*Math.cos(e),b:n*Math.sin(e)}}(t)))}function M(t){return o(t)?t:a(t)?y(t):s(t)?function(t){return h(p(t))}(t):function(t){return"x"in t&&"y"in t&&"z"in t}(t)?h(t):i(t)?function(t){const r=(t.h+360)%360/60,n=t.s/100,e=t.v/100*255,o=e*n,i=o*(1-Math.abs(r%2-1));let s;switch(Math.floor(r)){case 0:s={r:o,g:i,b:0};break;case 1:s={r:i,g:o,b:0};break;case 2:s={r:0,g:o,b:i};break;case 3:s={r:0,g:i,b:o};break;case 4:s={r:i,g:0,b:o};break;case 5:case 6:s={r:o,g:0,b:i};break;default:s={r:0,g:0,b:0}}return s.r=Math.round(s.r+e-o),s.g=Math.round(s.g+e-o),s.b=Math.round(s.b+e-o),s}(t):t}function b(t){return i(t)?t:function(t){const r=t.r,n=t.g,e=t.b,o=Math.max(r,n,e),i=o-Math.min(r,n,e);let s=o,a=0===i?0:o===r?(n-e)/i%6:o===n?(e-r)/i+2:(r-n)/i+4,u=0===i?0:i/s;return a<0&&(a+=6),a*=60,u*=100,s*=100/255,{h:a,s:u,v:s}}(M(t))}function v(t){return s(t)?t:function(t){return m(f(t))}(M(t))}function g(t){return a(t)?t:d(M(t))}function S(t){let{r:r,g:n,b:o,a:i}=t;return i<1&&(r=Math.round(i*r+255*(1-i)),n=Math.round(i*n+255*(1-i)),o=Math.round(i*o+255*(1-i))),new e.A({r:r,g:n,b:o})}function x(t,r){const{r:n,g:e,b:o}=null!==r&&void 0!==r&&r.ignoreAlpha?t:S(t);return.2126*n+.7152*e+.0722*o}var A;!function(t){t[t.Low=160]="Low",t[t.High=225]="High"}(A||(A={}))},55855:(t,r,n)=>{function e(){return[0,0,0,0]}function o(t,r,n,e){return[t,r,n,e]}function i(){return[0,0,0,0]}function s(){return o(1,1,1,1)}function a(){return o(1,0,0,0)}function u(){return o(0,1,0,0)}function l(){return o(0,0,1,0)}function c(){return o(0,0,0,1)}n.d(r,{fA:()=>o,vt:()=>e});const f=[0,0,0,0],h=s(),m=a(),p=u(),d=l(),y=c();Object.freeze(Object.defineProperty({__proto__:null,ONES:h,UNIT_W:y,UNIT_X:m,UNIT_Y:p,UNIT_Z:d,ZEROS:f,clone:function(t){return[t[0],t[1],t[2],t[3]]},create:e,createView:function(t,r){return new Float64Array(t,r,4)},fromArray:function(t){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[0,0,0,0];const n=Math.min(4,t.length);for(let e=0;e<n;++e)r[e]=t[e];return r},fromValues:o,ones:s,unitW:c,unitX:a,unitY:u,unitZ:l,zeros:i},Symbol.toStringTag,{value:"Module"}))},5294:(t,r,n)=>{n.r(r),n.d(r,{default:()=>w});n(35238);var e,o=n(64681),i=n(66486),s=n(37267),a=n(52494),u=n(41030),l=n(59844),c=n(86866),f=n(99846),h=n(26855),m=n(35143),p=(n(76460),n(81806),n(47249),n(50076),n(6409)),d=n(85842),y=n(75116);let M=e=class extends y.A{constructor(){super(...arguments),this.type="identity"}clone(){return new e}};(0,m._)([(0,p.e)({IdentityXform:"identity"})],M.prototype,"type",void 0),M=e=(0,m._)([(0,d.$)("esri.layers.support.rasterTransforms.IdentityTransform")],M);const b=M;var v=n(29754);const g={GCSShiftXform:h.A,IdentityXform:b,PolynomialXform:v.A};Object.keys(g);function S(t){if(!(null===t||void 0===t?void 0:t.type))return null;const r=g[null===t||void 0===t?void 0:t.type];if(r){const n=new r;return n.read(t),n}return null}var x=n(20118),A=n(46533),O=n(76797),N=n(19247);class w{convertVectorFieldData(t){const r=i.A.fromJSON(t.pixelBlock),n=(0,f.FI)(r,t.type);return Promise.resolve(null!=n?n.toJSON():null)}computeStatisticsHistograms(t){const r=i.A.fromJSON(t.pixelBlock),n=(0,c.eH)(r);return Promise.resolve(n)}async decode(t){const r=await(0,s.D)(t.data,t.options);return r&&r.toJSON()}symbolize(t){t.pixelBlock=i.A.fromJSON(t.pixelBlock),t.extent=t.extent?O.A.fromJSON(t.extent):null;const r=this.symbolizer.symbolize(t);return Promise.resolve(null!=r?r.toJSON():null)}async updateSymbolizer(t){var r;this.symbolizer=x.A.fromJSON(t.symbolizerJSON),t.histograms&&"rasterStretch"===(null===(r=this.symbolizer)||void 0===r?void 0:r.rendererJSON.type)&&(this.symbolizer.rendererJSON.histograms=t.histograms)}async updateRasterFunction(t){this.rasterFunction=(0,u.vt)(t.rasterFunctionJSON)}async process(t){var r;const n=this.rasterFunction.process({extent:O.A.fromJSON(t.extent),primaryPixelBlocks:t.primaryPixelBlocks.map((t=>null!=t?i.A.fromJSON(t):null)),primaryPixelSizes:null===(r=t.primaryPixelSizes)||void 0===r?void 0:r.map((t=>null!=t?N.A.fromJSON(t):null)),primaryRasterIds:t.primaryRasterIds});return null!=n?n.toJSON():null}stretch(t){const r=this.symbolizer.simpleStretch(i.A.fromJSON(t.srcPixelBlock),t.stretchParams);return Promise.resolve(null===r||void 0===r?void 0:r.toJSON())}estimateStatisticsHistograms(t){const r=(0,c.f4)(i.A.fromJSON(t.srcPixelBlock));return Promise.resolve(r)}split(t){var r;const n=(0,a.lD)(i.A.fromJSON(t.srcPixelBlock),t.tileSize,null!==(r=t.maximumPyramidLevel)&&void 0!==r?r:0,!1===t.useBilinear);return n&&n.forEach(((t,r)=>{n.set(r,null===t||void 0===t?void 0:t.toJSON())})),Promise.resolve(n)}clipTile(t){const r=i.A.fromJSON(t.pixelBlock),n=(0,a.J$)({...t,pixelBlock:r});return Promise.resolve(null===n||void 0===n?void 0:n.toJSON())}async mosaicAndTransform(t){var r;const n=t.srcPixelBlocks.map((t=>t?new i.A(t):null)),e=(0,a.z7)(n,t.srcMosaicSize,{blockWidths:t.blockWidths,alignmentInfo:t.alignmentInfo,clipOffset:t.clipOffset,clipSize:t.clipSize});let o,s=e;return t.coefs&&(s=(0,a.$i)(e,t.destDimension,t.coefs,t.sampleSpacing,t.interpolation)),t.projectDirections&&t.gcsGrid&&(o=(0,a.QF)(t.destDimension,t.gcsGrid),s=(0,f.Y2)(s,t.isUV?"vector-uv":"vector-magdir",o)),{pixelBlock:null===(r=s)||void 0===r?void 0:r.toJSON(),localNorthDirections:o}}async createFlowMesh(t,r){const n={data:new Float32Array(t.flowData.buffer),mask:new Uint8Array(t.flowData.maskBuffer),width:t.flowData.width,height:t.flowData.height},{vertexData:e,indexData:o}=await(0,A.CW)(t.meshType,t.simulationSettings,n,r.signal);return{result:{vertexBuffer:e.buffer,indexBuffer:o.buffer},transferList:[e.buffer,o.buffer]}}async getProjectionOffsetGrid(t){const r=O.A.fromJSON(t.projectedExtent),n=O.A.fromJSON(t.srcBufferExtent);let e=null;t.datumTransformationSteps&&(e=new o.A({steps:t.datumTransformationSteps})),(t.includeGCSGrid||(0,l.xh)(r.spatialReference,n.spatialReference,e))&&await(0,l.Hh)();const i=t.rasterTransform?S(t.rasterTransform):null;return(0,l.l0)({...t,projectedExtent:r,srcBufferExtent:n,datumTransformation:e,rasterTransform:i})}}},6259:(t,r,n)=>{n.d(r,{A:()=>m});var e,o=n(35143),i=n(69539),s=n(53084),a=n(46053),u=n(40565),l=n(6409),c=n(85842),f=n(56280);let h=e=class extends f.A{constructor(t){super(t),this.algorithm=null,this.fromColor=null,this.toColor=null,this.type="algorithmic"}clone(){return new e({fromColor:(0,s.o8)(this.fromColor),toColor:(0,s.o8)(this.toColor),algorithm:this.algorithm})}};(0,o._)([(0,l.e)({esriCIELabAlgorithm:"cie-lab",esriHSVAlgorithm:"hsv",esriLabLChAlgorithm:"lab-lch"})],h.prototype,"algorithm",void 0),(0,o._)([(0,a.MZ)({type:i.A,json:{type:[u.jz],write:!0}})],h.prototype,"fromColor",void 0),(0,o._)([(0,a.MZ)({type:i.A,json:{type:[u.jz],write:!0}})],h.prototype,"toColor",void 0),(0,o._)([(0,a.MZ)({type:["algorithmic"]})],h.prototype,"type",void 0),h=e=(0,o._)([(0,c.$)("esri.rest.support.AlgorithmicColorRamp")],h);const m=h},56280:(t,r,n)=>{n.d(r,{A:()=>u});var e=n(35143),o=n(42553),i=n(46053),s=(n(81806),n(76460),n(47249),n(85842));let a=class extends o.oY{constructor(t){super(t),this.type=null}};(0,e._)([(0,i.MZ)({readOnly:!0,json:{read:!1,write:!0}})],a.prototype,"type",void 0),a=(0,e._)([(0,s.$)("esri.rest.support.ColorRamp")],a);const u=a},63068:(t,r,n)=>{n.d(r,{A:()=>f});var e,o=n(35143),i=n(53084),s=n(46053),a=(n(81806),n(76460),n(85842)),u=n(6259),l=n(56280);let c=e=class extends l.A{constructor(t){super(t),this.colorRamps=null,this.type="multipart"}clone(){return new e({colorRamps:(0,i.o8)(this.colorRamps)})}};(0,o._)([(0,s.MZ)({type:[u.A],json:{write:!0}})],c.prototype,"colorRamps",void 0),(0,o._)([(0,s.MZ)({type:["multipart"]})],c.prototype,"type",void 0),c=e=(0,o._)([(0,a.$)("esri.rest.support.MultipartColorRamp")],c);const f=c},22471:(t,r,n)=>{n.d(r,{g:()=>s,r:()=>a});var e=n(6259),o=n(56280),i=n(63068);const s={key:"type",base:o.A,typeMap:{algorithmic:e.A,multipart:i.A}};function a(t){return null!==t&&void 0!==t&&t.type?"algorithmic"===t.type?e.A.fromJSON(t):"multipart"===t.type?i.A.fromJSON(t):null:null}}}]);
//# sourceMappingURL=523.c205f31e.chunk.js.map