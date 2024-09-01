"use strict";(self.webpackChunktyphoon=self.webpackChunktyphoon||[]).push([[5220],{43047:(e,t,o)=>{o.d(t,{a:()=>g,b:()=>c,c:()=>r,e:()=>v,f:()=>s,g:()=>b,i:()=>p,j:()=>y,l:()=>w,n:()=>h,s:()=>i,t:()=>m});var n=o(53494);function r(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e}function i(e,t,o,n,r){return e[0]=t,e[1]=o,e[2]=n,e[3]=r,e}function s(e,t,o){return e[0]=t[0]+o[0],e[1]=t[1]+o[1],e[2]=t[2]+o[2],e[3]=t[3]+o[3],e}function l(e,t,o){return e[0]=t[0]-o[0],e[1]=t[1]-o[1],e[2]=t[2]-o[2],e[3]=t[3]-o[3],e}function u(e,t,o){return e[0]=t[0]*o[0],e[1]=t[1]*o[1],e[2]=t[2]*o[2],e[3]=t[3]*o[3],e}function a(e,t,o){return e[0]=t[0]/o[0],e[1]=t[1]/o[1],e[2]=t[2]/o[2],e[3]=t[3]/o[3],e}function c(e,t,o){return e[0]=t[0]*o,e[1]=t[1]*o,e[2]=t[2]*o,e[3]=t[3]*o,e}function f(e,t){const o=t[0]-e[0],n=t[1]-e[1],r=t[2]-e[2],i=t[3]-e[3];return Math.sqrt(o*o+n*n+r*r+i*i)}function d(e,t){const o=t[0]-e[0],n=t[1]-e[1],r=t[2]-e[2],i=t[3]-e[3];return o*o+n*n+r*r+i*i}function p(e){const t=e[0],o=e[1],n=e[2],r=e[3];return Math.sqrt(t*t+o*o+n*n+r*r)}function y(e){const t=e[0],o=e[1],n=e[2],r=e[3];return t*t+o*o+n*n+r*r}function h(e,t){const o=t[0],n=t[1],r=t[2],i=t[3];let s=o*o+n*n+r*r+i*i;return s>0&&(s=1/Math.sqrt(s),e[0]=o*s,e[1]=n*s,e[2]=r*s,e[3]=i*s),e}function b(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3]}function w(e,t,o,n){const r=t[0],i=t[1],s=t[2],l=t[3];return e[0]=r+n*(o[0]-r),e[1]=i+n*(o[1]-i),e[2]=s+n*(o[2]-s),e[3]=l+n*(o[3]-l),e}function m(e,t,o){const n=t[0],r=t[1],i=t[2],s=t[3];return e[0]=o[0]*n+o[4]*r+o[8]*i+o[12]*s,e[1]=o[1]*n+o[5]*r+o[9]*i+o[13]*s,e[2]=o[2]*n+o[6]*r+o[10]*i+o[14]*s,e[3]=o[3]*n+o[7]*r+o[11]*i+o[15]*s,e}function g(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]}function v(e,t){const o=e[0],r=e[1],i=e[2],s=e[3],l=t[0],u=t[1],a=t[2],c=t[3],f=(0,n.FD)();return Math.abs(o-l)<=f*Math.max(1,Math.abs(o),Math.abs(l))&&Math.abs(r-u)<=f*Math.max(1,Math.abs(r),Math.abs(u))&&Math.abs(i-a)<=f*Math.max(1,Math.abs(i),Math.abs(a))&&Math.abs(s-c)<=f*Math.max(1,Math.abs(s),Math.abs(c))}const M=l,A=u,C=a,T=f,U=d,_=p,I=y;Object.freeze(Object.defineProperty({__proto__:null,add:s,ceil:function(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e[2]=Math.ceil(t[2]),e[3]=Math.ceil(t[3]),e},copy:r,copyVec3:function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e},dist:T,distance:f,div:C,divide:a,dot:b,equals:v,exactEquals:g,floor:function(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e[2]=Math.floor(t[2]),e[3]=Math.floor(t[3]),e},inverse:function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e[3]=1/t[3],e},len:_,length:p,lerp:w,max:function(e,t,o){return e[0]=Math.max(t[0],o[0]),e[1]=Math.max(t[1],o[1]),e[2]=Math.max(t[2],o[2]),e[3]=Math.max(t[3],o[3]),e},min:function(e,t,o){return e[0]=Math.min(t[0],o[0]),e[1]=Math.min(t[1],o[1]),e[2]=Math.min(t[2],o[2]),e[3]=Math.min(t[3],o[3]),e},mul:A,multiply:u,negate:function(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=-t[3],e},normalize:h,random:function(e,t){const o=n.Ov;let r,i,s,l,u,a;t=t||1;do{r=2*o()-1,i=2*o()-1,u=r*r+i*i}while(u>=1);do{s=2*o()-1,l=2*o()-1,a=s*s+l*l}while(a>=1);const c=Math.sqrt((1-u)/a);return e[0]=t*r,e[1]=t*i,e[2]=t*s*c,e[3]=t*l*c,e},round:function(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e[2]=Math.round(t[2]),e[3]=Math.round(t[3]),e},scale:c,scaleAndAdd:function(e,t,o,n){return e[0]=t[0]+o[0]*n,e[1]=t[1]+o[1]*n,e[2]=t[2]+o[2]*n,e[3]=t[3]+o[3]*n,e},set:i,sqrDist:U,sqrLen:I,squaredDistance:d,squaredLength:y,str:function(e){return"vec4("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"},sub:M,subtract:l,transformMat4:m,transformQuat:function(e,t,o){const n=t[0],r=t[1],i=t[2],s=o[0],l=o[1],u=o[2],a=o[3],c=a*n+l*i-u*r,f=a*r+u*n-s*i,d=a*i+s*r-l*n,p=-s*n-l*r-u*i;return e[0]=c*a+p*-s+f*-u-d*-l,e[1]=f*a+p*-l+d*-s-c*-u,e[2]=d*a+p*-u+c*-l-f*-s,e[3]=t[3],e}},Symbol.toStringTag,{value:"Module"}))},83755:(e,t,o)=>{function n(){return new Float32Array(3)}function r(e){const t=new Float32Array(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function i(e,t,o){const n=new Float32Array(3);return n[0]=e,n[1]=t,n[2]=o,n}function s(){return n()}function l(){return i(1,1,1)}function u(){return i(1,0,0)}function a(){return i(0,1,0)}function c(){return i(0,0,1)}o.d(t,{fA:()=>i,o8:()=>r,vt:()=>n});const f=s(),d=l(),p=u(),y=a(),h=c();Object.freeze(Object.defineProperty({__proto__:null,ONES:d,UNIT_X:p,UNIT_Y:y,UNIT_Z:h,ZEROS:f,clone:r,create:n,createView:function(e,t){return new Float32Array(e,t,3)},fromValues:i,ones:l,unitX:u,unitY:a,unitZ:c,zeros:s},Symbol.toStringTag,{value:"Module"}))},55855:(e,t,o)=>{function n(){return[0,0,0,0]}function r(e,t,o,n){return[e,t,o,n]}function i(){return[0,0,0,0]}function s(){return r(1,1,1,1)}function l(){return r(1,0,0,0)}function u(){return r(0,1,0,0)}function a(){return r(0,0,1,0)}function c(){return r(0,0,0,1)}o.d(t,{fA:()=>r,vt:()=>n});const f=[0,0,0,0],d=s(),p=l(),y=u(),h=a(),b=c();Object.freeze(Object.defineProperty({__proto__:null,ONES:d,UNIT_W:b,UNIT_X:p,UNIT_Y:y,UNIT_Z:h,ZEROS:f,clone:function(e){return[e[0],e[1],e[2],e[3]]},create:n,createView:function(e,t){return new Float64Array(e,t,4)},fromArray:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[0,0,0,0];const o=Math.min(4,e.length);for(let n=0;n<o;++n)t[n]=e[n];return t},fromValues:r,ones:s,unitW:c,unitX:l,unitY:u,unitZ:a,zeros:i},Symbol.toStringTag,{value:"Module"}))},90975:(e,t,o)=>{o.d(t,{A:()=>m});var n,r=o(35143),i=o(53084),s=o(46053),l=(o(81806),o(76460),o(6409)),u=o(85842),a=o(120),c=o(71006),f=o(69539),d=o(42553),p=o(40565);let y=n=class extends d.oY{constructor(){super(...arguments),this.description=null,this.label=null,this.minValue=0,this.maxValue=0,this.color=null}clone(){return new n({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,color:(0,i.o8)(this.color)})}};(0,r._)([(0,s.MZ)({type:String,json:{write:!0}})],y.prototype,"description",void 0),(0,r._)([(0,s.MZ)({type:String,json:{write:!0}})],y.prototype,"label",void 0),(0,r._)([(0,s.MZ)({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],y.prototype,"minValue",void 0),(0,r._)([(0,s.MZ)({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],y.prototype,"maxValue",void 0),(0,r._)([(0,s.MZ)({type:f.A,json:{type:[p.jz],write:!0}})],y.prototype,"color",void 0),y=n=(0,r._)([(0,u.$)("esri.renderers.support.pointCloud.ColorClassBreakInfo")],y);const h=y;var b;let w=b=class extends a.A{constructor(e){super(e),this.type="point-cloud-class-breaks",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.colorClassBreakInfos=null}clone(){return new b({...this.cloneProperties(),field:this.field,fieldTransformType:this.fieldTransformType,colorClassBreakInfos:(0,i.o8)(this.colorClassBreakInfos),legendOptions:(0,i.o8)(this.legendOptions)})}};(0,r._)([(0,l.e)({pointCloudClassBreaksRenderer:"point-cloud-class-breaks"})],w.prototype,"type",void 0),(0,r._)([(0,s.MZ)({json:{write:!0},type:String})],w.prototype,"field",void 0),(0,r._)([(0,s.MZ)({type:c.q,json:{write:!0}})],w.prototype,"legendOptions",void 0),(0,r._)([(0,s.MZ)({type:a.A.fieldTransformTypeKebabDict.apiValues,json:{type:a.A.fieldTransformTypeKebabDict.jsonValues,read:a.A.fieldTransformTypeKebabDict.read,write:a.A.fieldTransformTypeKebabDict.write}})],w.prototype,"fieldTransformType",void 0),(0,r._)([(0,s.MZ)({type:[h],json:{write:!0}})],w.prototype,"colorClassBreakInfos",void 0),w=b=(0,r._)([(0,u.$)("esri.renderers.PointCloudClassBreaksRenderer")],w);const m=w},120:(e,t,o)=>{o.d(t,{A:()=>T});var n,r=o(35143),i=o(45802),s=o(42553),l=o(53084),u=o(46053),a=(o(81806),o(76460),o(85842));o(47249);let c=n=class extends s.oY{constructor(){super(...arguments),this.field=null,this.minValue=0,this.maxValue=255}clone(){return new n({field:this.field,minValue:this.minValue,maxValue:this.maxValue})}};(0,r._)([(0,u.MZ)({type:String,json:{write:!0}})],c.prototype,"field",void 0),(0,r._)([(0,u.MZ)({type:Number,nonNullable:!0,json:{write:!0}})],c.prototype,"minValue",void 0),(0,r._)([(0,u.MZ)({type:Number,nonNullable:!0,json:{write:!0}})],c.prototype,"maxValue",void 0),c=n=(0,r._)([(0,a.$)("esri.renderers.support.pointCloud.ColorModulation")],c);const f=c,d=new i.J({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"});let p=class extends s.oY{};(0,r._)([(0,u.MZ)({type:d.apiValues,readOnly:!0,nonNullable:!0,json:{type:d.jsonValues,read:!1,write:d.write}})],p.prototype,"type",void 0),p=(0,r._)([(0,a.$)("esri.renderers.support.pointCloud.PointSizeAlgorithm")],p);const y=p;var h,b=o(6409);let w=h=class extends y{constructor(){super(...arguments),this.type="fixed-size",this.size=0,this.useRealWorldSymbolSizes=null}clone(){return new h({size:this.size,useRealWorldSymbolSizes:this.useRealWorldSymbolSizes})}};(0,r._)([(0,b.e)({pointCloudFixedSizeAlgorithm:"fixed-size"})],w.prototype,"type",void 0),(0,r._)([(0,u.MZ)({type:Number,nonNullable:!0,json:{write:!0}})],w.prototype,"size",void 0),(0,r._)([(0,u.MZ)({type:Boolean,json:{write:!0}})],w.prototype,"useRealWorldSymbolSizes",void 0),w=h=(0,r._)([(0,a.$)("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")],w);const m=w;var g;let v=g=class extends y{constructor(){super(...arguments),this.type="splat",this.scaleFactor=1}clone(){return new g({scaleFactor:this.scaleFactor})}};(0,r._)([(0,b.e)({pointCloudSplatAlgorithm:"splat"})],v.prototype,"type",void 0),(0,r._)([(0,u.MZ)({type:Number,value:1,nonNullable:!0,json:{write:!0}})],v.prototype,"scaleFactor",void 0),v=g=(0,r._)([(0,a.$)("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],v);const M={key:"type",base:y,typeMap:{"fixed-size":m,splat:v}},A=(0,i.O)()({pointCloudClassBreaksRenderer:"point-cloud-class-breaks",pointCloudRGBRenderer:"point-cloud-rgb",pointCloudStretchRenderer:"point-cloud-stretch",pointCloudUniqueValueRenderer:"point-cloud-unique-value"});let C=class extends s.oY{constructor(e){super(e),this.type=void 0,this.pointSizeAlgorithm=null,this.colorModulation=null,this.pointsPerInch=10}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}cloneProperties(){return{pointSizeAlgorithm:(0,l.o8)(this.pointSizeAlgorithm),colorModulation:(0,l.o8)(this.colorModulation),pointsPerInch:(0,l.o8)(this.pointsPerInch)}}};(0,r._)([(0,u.MZ)({type:A.apiValues,readOnly:!0,nonNullable:!0,json:{type:A.jsonValues,read:!1,write:A.write}})],C.prototype,"type",void 0),(0,r._)([(0,u.MZ)({types:M,json:{write:!0}})],C.prototype,"pointSizeAlgorithm",void 0),(0,r._)([(0,u.MZ)({type:f,json:{write:!0}})],C.prototype,"colorModulation",void 0),(0,r._)([(0,u.MZ)({json:{write:!0},nonNullable:!0,type:Number})],C.prototype,"pointsPerInch",void 0),C=(0,r._)([(0,a.$)("esri.renderers.PointCloudRenderer")],C),(C||(C={})).fieldTransformTypeKebabDict=new i.J({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"});const T=C},42600:(e,t,o)=>{o.d(t,{A:()=>p});var n,r=o(35143),i=o(53084),s=o(46053),l=(o(81806),o(76460),o(6409)),u=o(85842),a=o(120),c=o(71006),f=o(77718);let d=n=class extends a.A{constructor(e){super(e),this.type="point-cloud-stretch",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.stops=null}clone(){return new n({...this.cloneProperties(),field:(0,i.o8)(this.field),fieldTransformType:(0,i.o8)(this.fieldTransformType),stops:(0,i.o8)(this.stops),legendOptions:(0,i.o8)(this.legendOptions)})}};(0,r._)([(0,l.e)({pointCloudStretchRenderer:"point-cloud-stretch"})],d.prototype,"type",void 0),(0,r._)([(0,s.MZ)({json:{write:!0},type:String})],d.prototype,"field",void 0),(0,r._)([(0,s.MZ)({type:c.q,json:{write:!0}})],d.prototype,"legendOptions",void 0),(0,r._)([(0,s.MZ)({type:a.A.fieldTransformTypeKebabDict.apiValues,json:{type:a.A.fieldTransformTypeKebabDict.jsonValues,read:a.A.fieldTransformTypeKebabDict.read,write:a.A.fieldTransformTypeKebabDict.write}})],d.prototype,"fieldTransformType",void 0),(0,r._)([(0,s.MZ)({type:[f.A],json:{write:!0}})],d.prototype,"stops",void 0),d=n=(0,r._)([(0,u.$)("esri.renderers.PointCloudStretchRenderer")],d);const p=d},64724:(e,t,o)=>{o.d(t,{A:()=>m});var n,r=o(35143),i=o(53084),s=o(46053),l=(o(81806),o(76460),o(6409)),u=o(85842),a=o(120),c=o(71006),f=o(69539),d=o(42553),p=o(40565);let y=n=class extends d.oY{constructor(){super(...arguments),this.description=null,this.label=null,this.values=null,this.color=null}clone(){return new n({description:this.description,label:this.label,values:(0,i.o8)(this.values),color:(0,i.o8)(this.color)})}};(0,r._)([(0,s.MZ)({type:String,json:{write:!0}})],y.prototype,"description",void 0),(0,r._)([(0,s.MZ)({type:String,json:{write:!0}})],y.prototype,"label",void 0),(0,r._)([(0,s.MZ)({type:[String],json:{write:!0}})],y.prototype,"values",void 0),(0,r._)([(0,s.MZ)({type:f.A,json:{type:[p.jz],write:!0}})],y.prototype,"color",void 0),y=n=(0,r._)([(0,u.$)("esri.renderers.support.pointCloud.ColorUniqueValueInfo")],y);const h=y;var b;let w=b=class extends a.A{constructor(e){super(e),this.type="point-cloud-unique-value",this.field=null,this.fieldTransformType=null,this.colorUniqueValueInfos=null,this.legendOptions=null}clone(){return new b({...this.cloneProperties(),field:(0,i.o8)(this.field),fieldTransformType:(0,i.o8)(this.fieldTransformType),colorUniqueValueInfos:(0,i.o8)(this.colorUniqueValueInfos),legendOptions:(0,i.o8)(this.legendOptions)})}};(0,r._)([(0,l.e)({pointCloudUniqueValueRenderer:"point-cloud-unique-value"})],w.prototype,"type",void 0),(0,r._)([(0,s.MZ)({json:{write:!0},type:String})],w.prototype,"field",void 0),(0,r._)([(0,s.MZ)({type:a.A.fieldTransformTypeKebabDict.apiValues,json:{type:a.A.fieldTransformTypeKebabDict.jsonValues,read:a.A.fieldTransformTypeKebabDict.read,write:a.A.fieldTransformTypeKebabDict.write}})],w.prototype,"fieldTransformType",void 0),(0,r._)([(0,s.MZ)({type:[h],json:{write:!0}})],w.prototype,"colorUniqueValueInfos",void 0),(0,r._)([(0,s.MZ)({type:c.q,json:{write:!0}})],w.prototype,"legendOptions",void 0),w=b=(0,r._)([(0,u.$)("esri.renderers.PointCloudUniqueValueRenderer")],w);const m=w},71006:(e,t,o)=>{o.d(t,{q:()=>u});var n,r=o(35143),i=o(42553),s=o(46053),l=(o(81806),o(76460),o(47249),o(85842));let u=n=class extends i.oY{constructor(){super(...arguments),this.title=null}clone(){return new n({title:this.title})}};(0,r._)([(0,s.MZ)({type:String,json:{write:!0}})],u.prototype,"title",void 0),u=n=(0,r._)([(0,l.$)("esri.renderers.support.LegendOptions")],u)},77718:(e,t,o)=>{o.d(t,{A:()=>d});var n,r=o(35143),i=o(69539),s=o(42553),l=o(46053),u=o(40565),a=(o(47249),o(81806),o(85842)),c=o(17707);let f=n=class extends s.oY{constructor(e){super(e),this.color=null,this.label=null,this.value=null}writeValue(e,t,o){t[o]=null!==e&&void 0!==e?e:0}clone(){return new n({color:this.color&&this.color.clone(),label:this.label,value:this.value})}};(0,r._)([(0,l.MZ)({type:i.A,json:{type:[u.jz],write:!0}})],f.prototype,"color",void 0),(0,r._)([(0,l.MZ)({type:String,json:{write:!0}})],f.prototype,"label",void 0),(0,r._)([(0,l.MZ)({type:Number,json:{write:{writerEnsuresNonNull:!0}}})],f.prototype,"value",void 0),(0,r._)([(0,c.K)("value")],f.prototype,"writeValue",null),f=n=(0,r._)([(0,a.$)("esri.renderers.visualVariables.support.ColorStop")],f);const d=f},94116:(e,t,o)=>{o.r(t),o.d(t,{default:()=>C});var n=o(18690),r=o(78393),i=o(60008),s=o(4336),l=o(20664),u=o(83755),a=o(13312),c=o(45308),f=(o(81806),o(90975)),d=o(42600),p=o(64724),y=o(62562),h=o(87041);function b(e,t,o){return null!==e&&void 0!==e&&e.attributeInfo.useElevation?t?function(e,t){const o=new Float64Array(t);for(let n=0;n<t;n++)o[n]=e[3*n+2];return o}(t,o):null:null!==e&&void 0!==e&&e.attributeInfo.storageInfo?(0,y.m0)(e.attributeInfo.storageInfo,e.buffer,o):null}function w(e){switch(e){default:case null:case"none":return e=>e;case"low-four-bit":return e=>15&e;case"high-four-bit":return e=>(240&e)>>4;case"absolute-value":return e=>Math.abs(e);case"modulo-ten":return e=>e%10}}function m(e){let t=0;for(const o of e||[])t|=1<<o;return t}var g=o(59231);class v{transform(e){const t=this._transform(e),o=[t.points.buffer,t.rgb.buffer];null!=t.pointIdFilterMap&&o.push(t.pointIdFilterMap.buffer);for(const n of t.attributes)"buffer"in n.values&&(0,r.mw)(n.values.buffer)&&n.values.buffer!==t.rgb.buffer&&o.push(n.values.buffer);return Promise.resolve({result:t,transferList:o})}_transform(e){const t=function(e,t){if(null==e.encoding||""===e.encoding){const o=(0,y.wH)(t,e);if(null==o.vertexAttributes.position)return;const n=(0,y.MA)(t,o.vertexAttributes.position),r=o.header.fields,i=[r.offsetX,r.offsetY,r.offsetZ],s=[r.scaleX,r.scaleY,r.scaleZ],l=n.length/3,u=new Float64Array(3*l);for(let e=0;e<l;e++)u[3*e]=n[3*e]*s[0]+i[0],u[3*e+1]=n[3*e+1]*s[1]+i[1],u[3*e+2]=n[3*e+2]*s[2]+i[2];return u}if("lepcc-xyz"===e.encoding)return(0,h.Me)(t).result}(e.schema,e.geometryBuffer);let o=t.length/3,r=null;const i=new Array,s=b(e.primaryAttributeData,t,o);null!=e.primaryAttributeData&&s&&i.push({attributeInfo:e.primaryAttributeData.attributeInfo,values:s});const l=b(e.modulationAttributeData,t,o);null!=e.modulationAttributeData&&l&&i.push({attributeInfo:e.modulationAttributeData.attributeInfo,values:l});let u=function(e,t,o,n){var r;const{rendererJSON:i,isRGBRenderer:s}=e;let l=null,u=null;if(t&&s)l=t;else if(t&&"pointCloudUniqueValueRenderer"===(null===i||void 0===i?void 0:i.type)){u=p.A.fromJSON(i);const e=u.colorUniqueValueInfos;l=new Uint8Array(3*n);const o=w(u.fieldTransformType);for(let r=0;r<n;r++){const n=(o?o(t[r]):t[r])+"";for(let t=0;t<e.length;t++)if(e[t].values.includes(n)){l[3*r]=e[t].color.r,l[3*r+1]=e[t].color.g,l[3*r+2]=e[t].color.b;break}}}else if(t&&"pointCloudStretchRenderer"===(null===i||void 0===i?void 0:i.type)){u=d.A.fromJSON(i);const e=u.stops;l=new Uint8Array(3*n);const o=w(u.fieldTransformType);for(let r=0;r<n;r++){const n=o?o(t[r]):t[r],i=e.length-1;if(n<e[0].value)l[3*r]=e[0].color.r,l[3*r+1]=e[0].color.g,l[3*r+2]=e[0].color.b;else if(n>=e[i].value)l[3*r]=e[i].color.r,l[3*r+1]=e[i].color.g,l[3*r+2]=e[i].color.b;else for(let t=1;t<e.length;t++)if(n<e[t].value){const o=(n-e[t-1].value)/(e[t].value-e[t-1].value);l[3*r]=e[t].color.r*o+e[t-1].color.r*(1-o),l[3*r+1]=e[t].color.g*o+e[t-1].color.g*(1-o),l[3*r+2]=e[t].color.b*o+e[t-1].color.b*(1-o);break}}}else if(t&&"pointCloudClassBreaksRenderer"===(null===i||void 0===i?void 0:i.type)){u=f.A.fromJSON(i);const e=u.colorClassBreakInfos;l=new Uint8Array(3*n);const o=w(u.fieldTransformType);for(let r=0;r<n;r++){const n=o?o(t[r]):t[r];for(let t=0;t<e.length;t++)if(n>=e[t].minValue&&n<=e[t].maxValue){l[3*r]=e[t].color.r,l[3*r+1]=e[t].color.g,l[3*r+2]=e[t].color.b;break}}}else l=new Uint8Array(3*n).fill(255);if(o&&null!==(r=u)&&void 0!==r&&r.colorModulation){const e=u.colorModulation.minValue,t=u.colorModulation.maxValue,r=.3;for(let i=0;i<n;i++){const n=o[i],s=n>=t?1:n<=e?r:r+(1-r)*(n-e)/(t-e);l[3*i]=s*l[3*i],l[3*i+1]=s*l[3*i+1],l[3*i+2]=s*l[3*i+2]}}return l}(e.rendererInfo,s,l,o);if(e.filterInfo&&e.filterInfo.length>0&&null!=e.filterAttributesData){const s=e.filterAttributesData.filter(n.Ru).map((e=>{const n=b(e,t,o),r={attributeInfo:e.attributeInfo,values:n};return i.push(r),r}));r=new Uint32Array(o),o=function(e,t,o,n,r){const i=e.length/3;let s=0;for(let l=0;l<i;l++){let i=!0;for(let e=0;e<n.length&&i;e++){const{filterJSON:t}=n[e],o=r[e].values[l];switch(t.type){case"pointCloudValueFilter":{const e="exclude"===t.mode;t.values.includes(o)===e&&(i=!1);break}case"pointCloudBitfieldFilter":{const e=m(t.requiredSetBits),n=m(t.requiredClearBits);((o&e)!==e||o&n)&&(i=!1);break}case"pointCloudReturnFilter":{const e=15&o,n=o>>>4&15,r=n>1,s=1===e,l=e===n;let u=!1;for(const o of t.includedReturns)if("last"===o&&l||"firstOfMany"===o&&s&&r||"lastOfMany"===o&&l&&r||"single"===o&&!r){u=!0;break}u||(i=!1);break}}}i&&(o[s]=l,e[3*s]=e[3*l],e[3*s+1]=e[3*l+1],e[3*s+2]=e[3*l+2],t[3*s]=t[3*l],t[3*s+1]=t[3*l+1],t[3*s+2]=t[3*l+2],s++)}return s}(t,u,r,e.filterInfo,s)}for(const n of e.userAttributesData){const e=b(n,t,o);i.push({attributeInfo:n.attributeInfo,values:e})}3*o<u.length&&(u=new Uint8Array(u.buffer.slice(0,3*o))),function(e,t,o){if(0!==o)for(let n=0;n<t;n++)e[3*n+2]+=o}(t,o,e.elevationOffset);const c=M(t,o,g.ab.fromData(e.obbData),a.A.fromJSON(e.inSR),a.A.fromJSON(e.outSR));return{obbData:e.obbData,points:c,rgb:u,attributes:i,pointIdFilterMap:r}}}function M(e,t,o,n,r){if(!(0,c.projectBuffer)(e,n,0,e,r,0,t))throw new Error("Can't reproject");const s=(0,u.o8)(o.center),a=(0,u.vt)(),f=(0,u.vt)(),d=(0,u.o8)(o.halfSize);(0,i.Xr)(A,o.quaternion);const p=new Float32Array(3*t);for(let i=0;i<t;i++){let t=3*i;a[0]=e[t]-s[0],a[1]=e[t+1]-s[1],a[2]=e[t+2]-s[2],(0,l.u)(f,a,A),d[0]=Math.max(d[0],Math.abs(f[0])),d[1]=Math.max(d[1],Math.abs(f[1])),d[2]=Math.max(d[2],Math.abs(f[2])),p[t++]=a[0],p[t++]=a[1],p[t]=a[2]}return o.halfSize=d,p}const A=(0,s.vt)();function C(){return new v}},62562:(e,t,o)=>{o.d(t,{MA:()=>d,m0:()=>w,wH:()=>h});var n=o(50076),r=o(53084),i=o(76460),s=o(87041),l=o(66470);const u=()=>i.A.getLogger("esri.views.3d.layers.i3s.I3SBinaryReader");function a(e,t,o){let r="",i=0;for(;i<o;){const s=e[t+i];if(s<128)r+=String.fromCharCode(s),i++;else if(s>=192&&s<224){if(i+1>=o)throw new n.A("utf8-decode-error","UTF-8 Decode failed. Two byte character was truncated.");const l=(31&s)<<6|63&e[t+i+1];r+=String.fromCharCode(l),i+=2}else if(s>=224&&s<240){if(i+2>=o)throw new n.A("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const l=(15&s)<<12|(63&e[t+i+1])<<6|63&e[t+i+2];r+=String.fromCharCode(l),i+=3}else{if(!(s>=240&&s<248))throw new n.A("utf8-decode-error","UTF-8 Decode failed. Invalid multi byte sequence.");{if(i+3>=o)throw new n.A("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const l=(7&s)<<18|(63&e[t+i+1])<<12|(63&e[t+i+2])<<6|63&e[t+i+3];if(l>=65536){const e=55296+(l-65536>>10),t=56320+(1023&l);r+=String.fromCharCode(e,t)}else r+=String.fromCharCode(l);i+=4}}}return r}function c(e,t){const o={byteOffset:0,byteCount:0,fields:Object.create(null)};let n=0;for(let r=0;r<t.length;r++){const i=t[r],s=i.valueType||i.type,l=g[s];o.fields[i.property]=l(e,n),n+=m[s].BYTES_PER_ELEMENT}return o.byteCount=n,o}function f(e,t,o){const r=[];let i,s,l=0;for(s=0;s<e;s+=1){if(i=t[s],i>0){if(r.push(a(o,l,i-1)),0!==o[l+i-1])throw new n.A("string-array-error","Invalid string array: missing null termination.")}else r.push(null);l+=i}return r}function d(e,t){return new(0,m[t.valueType])(e,t.byteOffset,t.count*t.valuesPerElement)}function p(e,t,o){const i=null!=t.header?c(e,t.header):{byteOffset:0,byteCount:0,fields:{count:o}},s={header:i,byteOffset:i.byteCount,byteCount:0,entries:Object.create(null)};let l=i.byteCount;for(let c=0;c<t.ordering.length;c++){var u,a;const e=t.ordering[c],o=(0,r.o8)(t[e]);if(o.count=null!==(u=i.fields.count)&&void 0!==u?u:0,"String"===o.valueType){if(o.byteOffset=l,o.byteCount=i.fields[e+"ByteCount"],"UTF-8"!==o.encoding)throw new n.A("unsupported-encoding","Unsupported String encoding.",{encoding:o.encoding});if(o.timeEncoding&&"ECMA_ISO8601"!==o.timeEncoding)throw new n.A("unsupported-time-encoding","Unsupported time encoding.",{timeEncoding:o.timeEncoding})}else{if(!v(o.valueType))throw new n.A("unsupported-value-type","Unsupported binary valueType",{valueType:o.valueType});{const e=M(o.valueType);l+=l%e!=0?e-l%e:0,o.byteOffset=l,o.byteCount=e*o.valuesPerElement*o.count}}l+=null!==(a=o.byteCount)&&void 0!==a?a:0,s.entries[e]=o}return s.byteCount=l-s.byteOffset,s}function y(e,t,o){if(t!==e&&u().error("Invalid ".concat(o," buffer size\n expected: ").concat(e,", actual: ").concat(t,")")),t<e)throw new n.A("buffer-too-small","Binary buffer is too small",{expectedSize:e,actualSize:t})}function h(e,t){const o=c(e,t&&t.header);let n=o.byteCount;const r={isDraco:!1,header:o,byteOffset:o.byteCount,byteCount:0,vertexAttributes:{}},i=o.fields,s=null!=i.vertexCount?i.vertexCount:i.count;for(const a of t.ordering){if(!t.vertexAttributes[a])continue;const e={...t.vertexAttributes[a],byteOffset:n,count:s},o=b[a]||"_"+a;r.vertexAttributes[o]=e,n+=M(e.valueType)*e.valuesPerElement*s}const l=i.faceCount;if(t.faces&&l){r.faces={};for(const e of t.ordering){if(!t.faces[e])continue;const o={...t.faces[e],byteOffset:n,count:l};r.faces[e]=o,n+=M(o.valueType)*o.valuesPerElement*l}}const u=i.featureCount;if(t.featureAttributes&&t.featureAttributeOrder&&u){r.featureAttributes={};for(const e of t.featureAttributeOrder){if(!t.featureAttributes[e])continue;const o={...t.featureAttributes[e],byteOffset:n,count:u};r.featureAttributes[e]=o,n+=("UInt64"===o.valueType?8:M(o.valueType))*o.valuesPerElement*u}}return y(n,e.byteLength,"geometry"),r.byteCount=n-r.byteOffset,r}const b={position:l.r.POSITION,normal:l.r.NORMAL,color:l.r.COLOR,uv0:l.r.UV0,region:l.r.UVREGION};function w(e,t,o){if("lepcc-rgb"===e.encoding)return(0,s.mb)(t);if("lepcc-intensity"===e.encoding)return(0,s.Ax)(t);if(null!=e.encoding&&""!==e.encoding)throw new n.A("unknown-attribute-storage-info-encoding","Unknown Attribute Storage Info Encoding");e["attributeByteCounts "]&&!e.attributeByteCounts&&(u().warn("Warning: Trailing space in 'attributeByteCounts '."),e.attributeByteCounts=e["attributeByteCounts "]),"ObjectIds"===e.ordering[0]&&e.hasOwnProperty("objectIds")&&(u().warn("Warning: Case error in objectIds"),e.ordering[0]="objectIds");const r=p(t,e,o);y(r.byteOffset+r.byteCount,t.byteLength,"attribute");const i=r.entries.attributeValues||r.entries.objectIds;if(i){if("String"===i.valueType){const e=r.entries.attributeByteCounts,o=d(t,e),n=function(e,t){return new Uint8Array(e,t.byteOffset,t.byteCount)}(t,i);return i.timeEncoding?function(e,t,o){return f(e,t,o).map((e=>{const t=e?Date.parse(e):null;return null==t||Number.isNaN(t)?null:t}))}(e.count,o,n):f(e.count,o,n)}return d(t,i)}throw new n.A("bad-attribute-storage-info","Bad attributeStorageInfo specification.")}const m={Float32:Float32Array,Float64:Float64Array,UInt8:Uint8Array,Int8:Int8Array,UInt16:Uint16Array,Int16:Int16Array,UInt32:Uint32Array,Int32:Int32Array},g={Float32:(e,t)=>new DataView(e,0).getFloat32(t,!0),Float64:(e,t)=>new DataView(e,0).getFloat64(t,!0),UInt8:(e,t)=>new DataView(e,0).getUint8(t),Int8:(e,t)=>new DataView(e,0).getInt8(t),UInt16:(e,t)=>new DataView(e,0).getUint16(t,!0),Int16:(e,t)=>new DataView(e,0).getInt16(t,!0),UInt32:(e,t)=>new DataView(e,0).getUint32(t,!0),Int32:(e,t)=>new DataView(e,0).getInt32(t,!0)};function v(e){return m.hasOwnProperty(e)}function M(e){return v(e)?m[e].BYTES_PER_ELEMENT:0}},87041:(e,t,o)=>{o.d(t,{Ax:()=>w,Me:()=>a,mb:()=>y});var n=o(50076);const r=!0,i={identifierOffset:0,identifierLength:10,versionOffset:10,checksumOffset:12,byteCount:16};function s(e,t,o){return{identifier:String.fromCharCode.apply(null,new Uint8Array(e,o+i.identifierOffset,i.identifierLength)),version:t.getUint16(o+i.versionOffset,r),checksum:t.getUint32(o+i.checksumOffset,r)}}const l={sizeLo:0,sizeHi:4,minX:8,minY:16,minZ:24,maxX:32,maxY:40,maxZ:48,errorX:56,errorY:64,errorZ:72,count:80,reserved:84,byteCount:88};function u(e,t){return{sizeLo:e.getUint32(t+l.sizeLo,r),sizeHi:e.getUint32(t+l.sizeHi,r),minX:e.getFloat64(t+l.minX,r),minY:e.getFloat64(t+l.minY,r),minZ:e.getFloat64(t+l.minZ,r),maxX:e.getFloat64(t+l.maxX,r),maxY:e.getFloat64(t+l.maxY,r),maxZ:e.getFloat64(t+l.maxZ,r),errorX:e.getFloat64(t+l.errorX,r),errorY:e.getFloat64(t+l.errorY,r),errorZ:e.getFloat64(t+l.errorZ,r),count:e.getUint32(t+l.count,r),reserved:e.getUint32(t+l.reserved,r)}}function a(e){const t=new DataView(e,0);let o=0;const{identifier:r,version:a}=s(e,t,o);if(o+=i.byteCount,"LEPCC     "!==r)throw new n.A("lepcc-decode-error","Bad identifier");if(a>1)throw new n.A("lepcc-decode-error","Unknown version");const f=u(t,o);if(o+=l.byteCount,f.sizeHi*2**32+f.sizeLo!==e.byteLength)throw new n.A("lepcc-decode-error","Bad size");const d=new Float64Array(3*f.count),p=[],y=[],h=[],b=[];if(o=c(e,o,p),o=c(e,o,y),o=c(e,o,h),o=c(e,o,b),o!==e.byteLength)throw new n.A("lepcc-decode-error","Bad length");let w=0,m=0;for(let n=0;n<p.length;n++){m+=p[n];let e=0;for(let t=0;t<y[n];t++){e+=h[w];const t=b[w];d[3*w]=Math.min(f.maxX,f.minX+2*f.errorX*e),d[3*w+1]=Math.min(f.maxY,f.minY+2*f.errorY*m),d[3*w+2]=Math.min(f.maxZ,f.minZ+2*f.errorZ*t),w++}}return{errorX:f.errorX,errorY:f.errorY,errorZ:f.errorZ,result:d}}function c(e,t,o){const n=[];t=f(e,t,n);const r=[];for(let i=0;i<n.length;i++){r.length=0,t=f(e,t,r);for(let e=0;e<r.length;e++)o.push(r[e]+n[i])}return t}function f(e,t,o){const i=new DataView(e,t),s=i.getUint8(0),l=31&s,u=!!(32&s),a=(192&s)>>6;let c=0;if(0===a)c=i.getUint32(1,r),t+=5;else if(1===a)c=i.getUint16(1,r),t+=3;else{if(2!==a)throw new n.A("lepcc-decode-error","Bad count type");c=i.getUint8(1),t+=2}if(u)throw new n.A("lepcc-decode-error","LUT not implemented");const f=Math.ceil(c*l/8),d=new Uint8Array(e,t,f);let p=0,y=0,h=0;const b=-1>>>32-l;for(let n=0;n<c;n++){for(;y<l;)p|=d[h]<<y,y+=8,h+=1;o[n]=p&b,p>>>=l,y-=l,y+l>32&&(p|=d[h-1]>>8-y)}return t+h}const d={sizeLo:0,sizeHi:4,count:8,colorMapCount:12,lookupMethod:14,compressionMethod:15,byteCount:16};function p(e,t){return{sizeLo:e.getUint32(t+d.sizeLo,r),sizeHi:e.getUint32(t+d.sizeHi,r),count:e.getUint32(t+d.count,r),colorMapCount:e.getUint16(t+d.colorMapCount,r),lookupMethod:e.getUint8(t+d.lookupMethod),compressionMethod:e.getUint8(t+d.compressionMethod)}}function y(e){const t=new DataView(e,0);let o=0;const{identifier:r,version:l}=s(e,t,o);if(o+=i.byteCount,"ClusterRGB"!==r)throw new n.A("lepcc-decode-error","Bad identifier");if(l>1)throw new n.A("lepcc-decode-error","Unknown version");const u=p(t,o);if(o+=d.byteCount,u.sizeHi*2**32+u.sizeLo!==e.byteLength)throw new n.A("lepcc-decode-error","Bad size");if((2===u.lookupMethod||1===u.lookupMethod)&&0===u.compressionMethod){if(3*u.colorMapCount+u.count+o!==e.byteLength||u.colorMapCount>256)throw new n.A("lepcc-decode-error","Bad count");const t=new Uint8Array(e,o,3*u.colorMapCount),r=new Uint8Array(e,o+3*u.colorMapCount,u.count),i=new Uint8Array(3*u.count);for(let e=0;e<u.count;e++){const o=r[e];i[3*e]=t[3*o],i[3*e+1]=t[3*o+1],i[3*e+2]=t[3*o+2]}return i}if(0===u.lookupMethod&&0===u.compressionMethod){if(3*u.count+o!==e.byteLength||0!==u.colorMapCount)throw new n.A("lepcc-decode-error","Bad count");return new Uint8Array(e,o).slice()}if(u.lookupMethod<=2&&1===u.compressionMethod){if(o+3!==e.byteLength||1!==u.colorMapCount)throw new n.A("lepcc-decode-error","Bad count");const r=t.getUint8(o),i=t.getUint8(o+1),s=t.getUint8(o+2),l=new Uint8Array(3*u.count);for(let e=0;e<u.count;e++)l[3*e]=r,l[3*e+1]=i,l[3*e+2]=s;return l}throw new n.A("lepcc-decode-error","Bad method "+u.lookupMethod+","+u.compressionMethod)}const h={sizeLo:0,sizeHi:4,count:8,scaleFactor:12,bitsPerPoint:14,reserved:15,byteCount:16};function b(e,t){return{sizeLo:e.getUint32(t+h.sizeLo,r),sizeHi:e.getUint32(t+h.sizeHi,r),count:e.getUint32(t+h.count,r),scaleFactor:e.getUint16(t+h.scaleFactor,r),bitsPerPoint:e.getUint8(t+h.bitsPerPoint),reserved:e.getUint8(t+h.reserved)}}function w(e){const t=new DataView(e,0);let o=0;const{identifier:r,version:l}=s(e,t,o);if(o+=i.byteCount,"Intensity "!==r)throw new n.A("lepcc-decode-error","Bad identifier");if(l>1)throw new n.A("lepcc-decode-error","Unknown version");const u=b(t,o);if(o+=h.byteCount,u.sizeHi*2**32+u.sizeLo!==e.byteLength)throw new n.A("lepcc-decode-error","Bad size");const a=new Uint16Array(u.count);if(8===u.bitsPerPoint){if(u.count+o!==e.byteLength)throw new n.A("lepcc-decode-error","Bad size");const t=new Uint8Array(e,o,u.count);for(let e=0;e<u.count;e++)a[e]=t[e]*u.scaleFactor}else if(16===u.bitsPerPoint){if(2*u.count+o!==e.byteLength)throw new n.A("lepcc-decode-error","Bad size");const t=new Uint16Array(e,o,u.count);for(let e=0;e<u.count;e++)a[e]=t[e]*u.scaleFactor}else{const t=[];if(f(e,o,t)!==e.byteLength)throw new n.A("lepcc-decode-error","Bad size");for(let e=0;e<u.count;e++)a[e]=t[e]*u.scaleFactor}return a}}}]);
//# sourceMappingURL=5220.cb25e7d0.chunk.js.map