"use strict";(self.webpackChunktyphoon=self.webpackChunktyphoon||[]).push([[8664],{14522:(e,t,n)=>{n.d(t,{T:()=>i,U:()=>r});var o=n(15941);function r(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;const r=(0,o.qE)(e,0,u);for(let o=0;o<4;o++)t[n+o]=Math.floor(256*s(r*c[o]))}function i(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=0;for(let o=0;o<4;o++)n+=e[t+o]*a[o];return n}const c=[1,256,65536,16777216],a=[1/256,1/65536,1/16777216,1/4294967296],u=i(new Uint8ClampedArray([255,255,255,255]));function s(e){return e-Math.floor(e)}},62562:(e,t,n)=>{n.d(t,{MA:()=>d,m0:()=>b,wH:()=>w});var o=n(50076),r=n(53084),i=n(76460),c=n(87041),a=n(66470);const u=()=>i.A.getLogger("esri.views.3d.layers.i3s.I3SBinaryReader");function s(e,t,n){let r="",i=0;for(;i<n;){const c=e[t+i];if(c<128)r+=String.fromCharCode(c),i++;else if(c>=192&&c<224){if(i+1>=n)throw new o.A("utf8-decode-error","UTF-8 Decode failed. Two byte character was truncated.");const a=(31&c)<<6|63&e[t+i+1];r+=String.fromCharCode(a),i+=2}else if(c>=224&&c<240){if(i+2>=n)throw new o.A("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const a=(15&c)<<12|(63&e[t+i+1])<<6|63&e[t+i+2];r+=String.fromCharCode(a),i+=3}else{if(!(c>=240&&c<248))throw new o.A("utf8-decode-error","UTF-8 Decode failed. Invalid multi byte sequence.");{if(i+3>=n)throw new o.A("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const a=(7&c)<<18|(63&e[t+i+1])<<12|(63&e[t+i+2])<<6|63&e[t+i+3];if(a>=65536){const e=55296+(a-65536>>10),t=56320+(1023&a);r+=String.fromCharCode(e,t)}else r+=String.fromCharCode(a);i+=4}}}return r}function l(e,t){const n={byteOffset:0,byteCount:0,fields:Object.create(null)};let o=0;for(let r=0;r<t.length;r++){const i=t[r],c=i.valueType||i.type,a=A[c];n.fields[i.property]=a(e,o),o+=p[c].BYTES_PER_ELEMENT}return n.byteCount=o,n}function f(e,t,n){const r=[];let i,c,a=0;for(c=0;c<e;c+=1){if(i=t[c],i>0){if(r.push(s(n,a,i-1)),0!==n[a+i-1])throw new o.A("string-array-error","Invalid string array: missing null termination.")}else r.push(null);a+=i}return r}function d(e,t){return new(0,p[t.valueType])(e,t.byteOffset,t.count*t.valuesPerElement)}function y(e,t,n){const i=null!=t.header?l(e,t.header):{byteOffset:0,byteCount:0,fields:{count:n}},c={header:i,byteOffset:i.byteCount,byteCount:0,entries:Object.create(null)};let a=i.byteCount;for(let l=0;l<t.ordering.length;l++){var u,s;const e=t.ordering[l],n=(0,r.o8)(t[e]);if(n.count=null!==(u=i.fields.count)&&void 0!==u?u:0,"String"===n.valueType){if(n.byteOffset=a,n.byteCount=i.fields[e+"ByteCount"],"UTF-8"!==n.encoding)throw new o.A("unsupported-encoding","Unsupported String encoding.",{encoding:n.encoding});if(n.timeEncoding&&"ECMA_ISO8601"!==n.timeEncoding)throw new o.A("unsupported-time-encoding","Unsupported time encoding.",{timeEncoding:n.timeEncoding})}else{if(!U(n.valueType))throw new o.A("unsupported-value-type","Unsupported binary valueType",{valueType:n.valueType});{const e=C(n.valueType);a+=a%e!=0?e-a%e:0,n.byteOffset=a,n.byteCount=e*n.valuesPerElement*n.count}}a+=null!==(s=n.byteCount)&&void 0!==s?s:0,c.entries[e]=n}return c.byteCount=a-c.byteOffset,c}function g(e,t,n){if(t!==e&&u().error("Invalid ".concat(n," buffer size\n expected: ").concat(e,", actual: ").concat(t,")")),t<e)throw new o.A("buffer-too-small","Binary buffer is too small",{expectedSize:e,actualSize:t})}function w(e,t){const n=l(e,t&&t.header);let o=n.byteCount;const r={isDraco:!1,header:n,byteOffset:n.byteCount,byteCount:0,vertexAttributes:{}},i=n.fields,c=null!=i.vertexCount?i.vertexCount:i.count;for(const s of t.ordering){if(!t.vertexAttributes[s])continue;const e={...t.vertexAttributes[s],byteOffset:o,count:c},n=h[s]||"_"+s;r.vertexAttributes[n]=e,o+=C(e.valueType)*e.valuesPerElement*c}const a=i.faceCount;if(t.faces&&a){r.faces={};for(const e of t.ordering){if(!t.faces[e])continue;const n={...t.faces[e],byteOffset:o,count:a};r.faces[e]=n,o+=C(n.valueType)*n.valuesPerElement*a}}const u=i.featureCount;if(t.featureAttributes&&t.featureAttributeOrder&&u){r.featureAttributes={};for(const e of t.featureAttributeOrder){if(!t.featureAttributes[e])continue;const n={...t.featureAttributes[e],byteOffset:o,count:u};r.featureAttributes[e]=n,o+=("UInt64"===n.valueType?8:C(n.valueType))*n.valuesPerElement*u}}return g(o,e.byteLength,"geometry"),r.byteCount=o-r.byteOffset,r}const h={position:a.r.POSITION,normal:a.r.NORMAL,color:a.r.COLOR,uv0:a.r.UV0,region:a.r.UVREGION};function b(e,t,n){if("lepcc-rgb"===e.encoding)return(0,c.mb)(t);if("lepcc-intensity"===e.encoding)return(0,c.Ax)(t);if(null!=e.encoding&&""!==e.encoding)throw new o.A("unknown-attribute-storage-info-encoding","Unknown Attribute Storage Info Encoding");e["attributeByteCounts "]&&!e.attributeByteCounts&&(u().warn("Warning: Trailing space in 'attributeByteCounts '."),e.attributeByteCounts=e["attributeByteCounts "]),"ObjectIds"===e.ordering[0]&&e.hasOwnProperty("objectIds")&&(u().warn("Warning: Case error in objectIds"),e.ordering[0]="objectIds");const r=y(t,e,n);g(r.byteOffset+r.byteCount,t.byteLength,"attribute");const i=r.entries.attributeValues||r.entries.objectIds;if(i){if("String"===i.valueType){const e=r.entries.attributeByteCounts,n=d(t,e),o=function(e,t){return new Uint8Array(e,t.byteOffset,t.byteCount)}(t,i);return i.timeEncoding?function(e,t,n){return f(e,t,n).map((e=>{const t=e?Date.parse(e):null;return null==t||Number.isNaN(t)?null:t}))}(e.count,n,o):f(e.count,n,o)}return d(t,i)}throw new o.A("bad-attribute-storage-info","Bad attributeStorageInfo specification.")}const p={Float32:Float32Array,Float64:Float64Array,UInt8:Uint8Array,Int8:Int8Array,UInt16:Uint16Array,Int16:Int16Array,UInt32:Uint32Array,Int32:Int32Array},A={Float32:(e,t)=>new DataView(e,0).getFloat32(t,!0),Float64:(e,t)=>new DataView(e,0).getFloat64(t,!0),UInt8:(e,t)=>new DataView(e,0).getUint8(t),Int8:(e,t)=>new DataView(e,0).getInt8(t),UInt16:(e,t)=>new DataView(e,0).getUint16(t,!0),Int16:(e,t)=>new DataView(e,0).getInt16(t,!0),UInt32:(e,t)=>new DataView(e,0).getUint32(t,!0),Int32:(e,t)=>new DataView(e,0).getInt32(t,!0)};function U(e){return p.hasOwnProperty(e)}function C(e){return U(e)?p[e].BYTES_PER_ELEMENT:0}},68664:(e,t,n)=>{n.d(t,{Q7:()=>E,s1:()=>U});n(35238);var o=n(3825),r=(n(18690),n(50076),n(81806),n(78393)),i=(n(34761),n(13191)),c=(n(20664),n(9392)),a=(n(26346),n(98510),n(13312));n(64232);a.A.WGS84;var u=n(2413),s=(n(93582),n(97015),n(62562));n(34111),n(90707);n(69539);var l,f=n(55855);!function(e){e[e.INVISIBLE=0]="INVISIBLE",e[e.TRANSPARENT=1]="TRANSPARENT",e[e.OPAQUE=2]="OPAQUE"}(l||(l={}));n(4212),n(14522),n(59581),n(34981),n(81449);var d=n(7223);n(24245);d.n;d.n;var y;n(64839),n(27374),n(66470);!function(e){e[e.Uniform=0]="Uniform",e[e.Varying=1]="Varying",e[e.COUNT=2]="COUNT"}(y||(y={}));var g,w;n(59046),n(89299),n(72468),n(5517),n(21390),n(42759),n(72106),n(43425);function h(e){return{...b,...e,type:g.Solid}}!function(e){e[e.Solid=0]="Solid",e[e.Sketch=1]="Sketch",e[e.Mixed=2]="Mixed",e[e.COUNT=3]="COUNT"}(g||(g={})),function(e){e[e.REGULAR=0]="REGULAR",e[e.SILHOUETTE=1]="SILHOUETTE"}(w||(w={}));const b={color:(0,f.fA)(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:l.OPAQUE,hasSlicePlane:!1};(0,f.fA)(0,0,0,.2),l.OPAQUE;n(51990);var p=n(59231);(0,u.vt)();var A;async function U(e,t,n,r,i,c,a,u){const l=[];for(const o of t)if(o&&i.includes(o.name)){const t="".concat(e,"/nodes/").concat(n,"/attributes/").concat(o.key,"/0");l.push({url:t,storageInfo:o})}const f=await Promise.allSettled(l.map((e=>(0,o.A)(e.url,{responseType:"array-buffer",query:{...a,token:c},signal:null===u||void 0===u?void 0:u.signal}).then((t=>(0,s.m0)(e.storageInfo,t.data)))))),d=[];for(const o of r){const e={};for(let t=0;t<f.length;t++){const n=f[t];if("fulfilled"===n.status){const r=n.value;e[l[t].storageInfo.name]=v(r,o)}}d.push(e)}return d}!function(e){e[e.OUTSIDE=0]="OUTSIDE",e[e.INTERSECTS_CENTER_OUTSIDE=1]="INTERSECTS_CENTER_OUTSIDE",e[e.INTERSECTS_CENTER_INSIDE=2]="INTERSECTS_CENTER_INSIDE",e[e.INSIDE=3]="INSIDE"}(A||(A={}));const C=-32768,m=-(2**31);function v(e,t){if(!e)return null;const n=e[t];return(0,r.IY)(e)?n===C?null:n:(0,r._G)(e)?n===m?null:n:n!=n?null:n}h({color:[0,0,0,0],opacity:0});function E(e){null!=e&&(e[3]=-1)}(0,c.vt)(),(0,c.vt)(),(0,c.vt)(),(0,c.vt)(),(0,c.vt)(),(0,c.vt)(),(0,c.vt)(),(0,c.vt)(),(0,u.vt)(),(0,u.vt)(),new p.ab,(0,c.vt)(),new Array(72),(0,i.vt)()},87041:(e,t,n)=>{n.d(t,{Ax:()=>b,Me:()=>s,mb:()=>g});var o=n(50076);const r=!0,i={identifierOffset:0,identifierLength:10,versionOffset:10,checksumOffset:12,byteCount:16};function c(e,t,n){return{identifier:String.fromCharCode.apply(null,new Uint8Array(e,n+i.identifierOffset,i.identifierLength)),version:t.getUint16(n+i.versionOffset,r),checksum:t.getUint32(n+i.checksumOffset,r)}}const a={sizeLo:0,sizeHi:4,minX:8,minY:16,minZ:24,maxX:32,maxY:40,maxZ:48,errorX:56,errorY:64,errorZ:72,count:80,reserved:84,byteCount:88};function u(e,t){return{sizeLo:e.getUint32(t+a.sizeLo,r),sizeHi:e.getUint32(t+a.sizeHi,r),minX:e.getFloat64(t+a.minX,r),minY:e.getFloat64(t+a.minY,r),minZ:e.getFloat64(t+a.minZ,r),maxX:e.getFloat64(t+a.maxX,r),maxY:e.getFloat64(t+a.maxY,r),maxZ:e.getFloat64(t+a.maxZ,r),errorX:e.getFloat64(t+a.errorX,r),errorY:e.getFloat64(t+a.errorY,r),errorZ:e.getFloat64(t+a.errorZ,r),count:e.getUint32(t+a.count,r),reserved:e.getUint32(t+a.reserved,r)}}function s(e){const t=new DataView(e,0);let n=0;const{identifier:r,version:s}=c(e,t,n);if(n+=i.byteCount,"LEPCC     "!==r)throw new o.A("lepcc-decode-error","Bad identifier");if(s>1)throw new o.A("lepcc-decode-error","Unknown version");const f=u(t,n);if(n+=a.byteCount,f.sizeHi*2**32+f.sizeLo!==e.byteLength)throw new o.A("lepcc-decode-error","Bad size");const d=new Float64Array(3*f.count),y=[],g=[],w=[],h=[];if(n=l(e,n,y),n=l(e,n,g),n=l(e,n,w),n=l(e,n,h),n!==e.byteLength)throw new o.A("lepcc-decode-error","Bad length");let b=0,p=0;for(let o=0;o<y.length;o++){p+=y[o];let e=0;for(let t=0;t<g[o];t++){e+=w[b];const t=h[b];d[3*b]=Math.min(f.maxX,f.minX+2*f.errorX*e),d[3*b+1]=Math.min(f.maxY,f.minY+2*f.errorY*p),d[3*b+2]=Math.min(f.maxZ,f.minZ+2*f.errorZ*t),b++}}return{errorX:f.errorX,errorY:f.errorY,errorZ:f.errorZ,result:d}}function l(e,t,n){const o=[];t=f(e,t,o);const r=[];for(let i=0;i<o.length;i++){r.length=0,t=f(e,t,r);for(let e=0;e<r.length;e++)n.push(r[e]+o[i])}return t}function f(e,t,n){const i=new DataView(e,t),c=i.getUint8(0),a=31&c,u=!!(32&c),s=(192&c)>>6;let l=0;if(0===s)l=i.getUint32(1,r),t+=5;else if(1===s)l=i.getUint16(1,r),t+=3;else{if(2!==s)throw new o.A("lepcc-decode-error","Bad count type");l=i.getUint8(1),t+=2}if(u)throw new o.A("lepcc-decode-error","LUT not implemented");const f=Math.ceil(l*a/8),d=new Uint8Array(e,t,f);let y=0,g=0,w=0;const h=-1>>>32-a;for(let o=0;o<l;o++){for(;g<a;)y|=d[w]<<g,g+=8,w+=1;n[o]=y&h,y>>>=a,g-=a,g+a>32&&(y|=d[w-1]>>8-g)}return t+w}const d={sizeLo:0,sizeHi:4,count:8,colorMapCount:12,lookupMethod:14,compressionMethod:15,byteCount:16};function y(e,t){return{sizeLo:e.getUint32(t+d.sizeLo,r),sizeHi:e.getUint32(t+d.sizeHi,r),count:e.getUint32(t+d.count,r),colorMapCount:e.getUint16(t+d.colorMapCount,r),lookupMethod:e.getUint8(t+d.lookupMethod),compressionMethod:e.getUint8(t+d.compressionMethod)}}function g(e){const t=new DataView(e,0);let n=0;const{identifier:r,version:a}=c(e,t,n);if(n+=i.byteCount,"ClusterRGB"!==r)throw new o.A("lepcc-decode-error","Bad identifier");if(a>1)throw new o.A("lepcc-decode-error","Unknown version");const u=y(t,n);if(n+=d.byteCount,u.sizeHi*2**32+u.sizeLo!==e.byteLength)throw new o.A("lepcc-decode-error","Bad size");if((2===u.lookupMethod||1===u.lookupMethod)&&0===u.compressionMethod){if(3*u.colorMapCount+u.count+n!==e.byteLength||u.colorMapCount>256)throw new o.A("lepcc-decode-error","Bad count");const t=new Uint8Array(e,n,3*u.colorMapCount),r=new Uint8Array(e,n+3*u.colorMapCount,u.count),i=new Uint8Array(3*u.count);for(let e=0;e<u.count;e++){const n=r[e];i[3*e]=t[3*n],i[3*e+1]=t[3*n+1],i[3*e+2]=t[3*n+2]}return i}if(0===u.lookupMethod&&0===u.compressionMethod){if(3*u.count+n!==e.byteLength||0!==u.colorMapCount)throw new o.A("lepcc-decode-error","Bad count");return new Uint8Array(e,n).slice()}if(u.lookupMethod<=2&&1===u.compressionMethod){if(n+3!==e.byteLength||1!==u.colorMapCount)throw new o.A("lepcc-decode-error","Bad count");const r=t.getUint8(n),i=t.getUint8(n+1),c=t.getUint8(n+2),a=new Uint8Array(3*u.count);for(let e=0;e<u.count;e++)a[3*e]=r,a[3*e+1]=i,a[3*e+2]=c;return a}throw new o.A("lepcc-decode-error","Bad method "+u.lookupMethod+","+u.compressionMethod)}const w={sizeLo:0,sizeHi:4,count:8,scaleFactor:12,bitsPerPoint:14,reserved:15,byteCount:16};function h(e,t){return{sizeLo:e.getUint32(t+w.sizeLo,r),sizeHi:e.getUint32(t+w.sizeHi,r),count:e.getUint32(t+w.count,r),scaleFactor:e.getUint16(t+w.scaleFactor,r),bitsPerPoint:e.getUint8(t+w.bitsPerPoint),reserved:e.getUint8(t+w.reserved)}}function b(e){const t=new DataView(e,0);let n=0;const{identifier:r,version:a}=c(e,t,n);if(n+=i.byteCount,"Intensity "!==r)throw new o.A("lepcc-decode-error","Bad identifier");if(a>1)throw new o.A("lepcc-decode-error","Unknown version");const u=h(t,n);if(n+=w.byteCount,u.sizeHi*2**32+u.sizeLo!==e.byteLength)throw new o.A("lepcc-decode-error","Bad size");const s=new Uint16Array(u.count);if(8===u.bitsPerPoint){if(u.count+n!==e.byteLength)throw new o.A("lepcc-decode-error","Bad size");const t=new Uint8Array(e,n,u.count);for(let e=0;e<u.count;e++)s[e]=t[e]*u.scaleFactor}else if(16===u.bitsPerPoint){if(2*u.count+n!==e.byteLength)throw new o.A("lepcc-decode-error","Bad size");const t=new Uint16Array(e,n,u.count);for(let e=0;e<u.count;e++)s[e]=t[e]*u.scaleFactor}else{const t=[];if(f(e,n,t)!==e.byteLength)throw new o.A("lepcc-decode-error","Bad size");for(let e=0;e<u.count;e++)s[e]=t[e]*u.scaleFactor}return s}}}]);
//# sourceMappingURL=8664.47959332.chunk.js.map