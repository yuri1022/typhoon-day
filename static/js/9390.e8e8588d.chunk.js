"use strict";(self.webpackChunktyphoon=self.webpackChunktyphoon||[]).push([[9390],{39539:(e,t,r)=>{function n(e,t){const r=e.count;t||(t=new e.TypedArrayConstructor(r));for(let n=0;n<r;n++)t[n]=e.get(n);return t}r.d(t,{m:()=>n});Object.freeze(Object.defineProperty({__proto__:null,makeDense:n},Symbol.toStringTag,{value:"Module"}))},52007:(e,t,r)=>{r.d(t,{a:()=>o,f:()=>a,n:()=>s});var n=r(78393);function o(e,t){s(e.typedBuffer,t.typedBuffer,e.typedBufferStride,t.typedBufferStride)}function s(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:r;const s=t.length/2;let a=0,i=0;if((0,n.cy)(t)||(0,n.dk)(t)){for(let n=0;n<s;++n)e[a]=t[i],e[a+1]=t[i+1],a+=r,i+=o;return}const u=(0,n.a3)(t);if((0,n.JI)(t))for(let n=0;n<s;++n)e[a]=Math.max(t[i]/u,-1),e[a+1]=Math.max(t[i+1]/u,-1),a+=r,i+=o;else for(let n=0;n<s;++n)e[a]=t[i]/u,e[a+1]=t[i+1]/u,a+=r,i+=o}function a(e,t,r,n){var o,s;const a=e.typedBuffer,i=e.typedBufferStride,u=null!==(o=null===n||void 0===n?void 0:n.count)&&void 0!==o?o:e.count;let l=(null!==(s=null===n||void 0===n?void 0:n.dstIndex)&&void 0!==s?s:0)*i;for(let c=0;c<u;++c)a[l]=t,a[l+1]=r,l+=i}Object.freeze(Object.defineProperty({__proto__:null,fill:a,normalizeIntegerBuffer:s,normalizeIntegerBufferView:o},Symbol.toStringTag,{value:"Module"}))},64591:(e,t,r)=>{function n(e,t){o(e.typedBuffer,t.typedBuffer,e.typedBufferStride,t.typedBufferStride)}function o(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:r;const o=t.length/n;let s=0,a=0;for(let i=0;i<o;++i)e[s]=t[a],e[s+1]=t[a+1],e[s+2]=t[a+2],s+=r,a+=n}function s(e,t,r,n,o){var s,a;const i=e.typedBuffer,u=e.typedBufferStride,l=null!==(s=null===o||void 0===o?void 0:o.count)&&void 0!==s?s:e.count;let c=(null!==(a=null===o||void 0===o?void 0:o.dstIndex)&&void 0!==a?a:0)*u;for(let d=0;d<l;++d)i[c]=t,i[c+1]=r,i[c+2]=n,c+=u}r.d(t,{a:()=>n,c:()=>o,f:()=>s});Object.freeze(Object.defineProperty({__proto__:null,copy:o,copyView:n,fill:s},Symbol.toStringTag,{value:"Module"}))},2e3:(e,t,r)=>{function n(e,t){o(e.typedBuffer,t,e.typedBufferStride)}function o(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:4;const n=t.typedBuffer,o=t.typedBufferStride,s=t.count;let a=0,i=0;for(let u=0;u<s;++u)e[a]=n[i],e[a+1]=n[i+1],e[a+2]=n[i+2],e[a+3]=n[i+3],a+=r,i+=o}function s(e,t,r,n,o,s){var a,i;const u=e.typedBuffer,l=e.typedBufferStride,c=null!==(a=null===s||void 0===s?void 0:s.count)&&void 0!==a?a:e.count;let d=(null!==(i=null===s||void 0===s?void 0:s.dstIndex)&&void 0!==i?i:0)*l;for(let f=0;f<c;++f)u[d]=t,u[d+1]=r,u[d+2]=n,u[d+3]=o,d+=l}r.d(t,{a:()=>n,c:()=>o,f:()=>s});Object.freeze(Object.defineProperty({__proto__:null,copy:o,copyView:n,fill:s},Symbol.toStringTag,{value:"Module"}))},6381:(e,t,r)=>{function n(e){switch(e){case"u8":case"i8":return 1;case"u16":case"i16":return 2;case"u32":case"i32":case"f32":return 4;case"f64":return 8}}r.d(t,{GJ:()=>n})},11109:(e,t,r)=>{r.d(t,{R:()=>u});var n=r(3825),o=r(98773),s=r(50076),a=r(50346),i=r(90534);class u{constructor(e){this._streamDataRequester=e}async loadJSON(e,t){return this._load("json",e,t)}async loadBinary(e,t){return(0,i.DB)(e)?((0,a.Te)(t),(0,i.lJ)(e)):this._load("binary",e,t)}async loadImage(e,t){return this._load("image",e,t)}async _load(e,t,r){if(null==this._streamDataRequester)return(await(0,n.A)(t,{responseType:l[e]})).data;const i=await(0,o.Ke)(this._streamDataRequester.request(t,e,r));if(!0===i.ok)return i.value;throw(0,a.QP)(i.error),new s.A("","Request for resource failed: ".concat(i.error))}}const l={image:"image",binary:"array-buffer",json:"json","image+type":void 0}},420:(e,t,r)=>{r.d(t,{x:()=>a});var n=r(78393),o=r(38496),s=r(93345);function a(e,t){switch(t){case s.WR.TRIANGLES:return"number"==typeof(r=e)?(0,o.tM)(r):(0,n.mg)(r)?new Uint16Array(r):r;case s.WR.TRIANGLE_STRIP:return function(e){const t="number"==typeof e?e:e.length;if(t<3)return[];const r=t-2,n=(0,o.my)(3*r);if("number"==typeof e){let e=0;for(let t=0;t<r;t+=1)t%2==0?(n[e++]=t,n[e++]=t+1,n[e++]=t+2):(n[e++]=t+1,n[e++]=t,n[e++]=t+2)}else{let t=0;for(let o=0;o<r;o+=1)o%2==0?(n[t++]=e[o],n[t++]=e[o+1],n[t++]=e[o+2]):(n[t++]=e[o+1],n[t++]=e[o],n[t++]=e[o+2])}return n}(e);case s.WR.TRIANGLE_FAN:return function(e){const t="number"==typeof e?e:e.length;if(t<3)return new Uint16Array(0);const r=t-2,n=r<=65536?new Uint16Array(3*r):new Uint32Array(3*r);if("number"==typeof e){let e=0;for(let t=0;t<r;++t)n[e++]=0,n[e++]=t+1,n[e++]=t+2;return n}const o=e[0];let s=e[1],a=0;for(let i=0;i<r;++i){const t=e[i+2];n[a++]=o,n[a++]=s,n[a++]=t,s=t}return n}(e)}var r}},37040:(e,t,r)=>{r.d(t,{KB:()=>i,Xi:()=>s,pn:()=>u,x3:()=>a});var n=r(81806),o=r(83490);class s{constructor(e){this.data=e,this.type="encoded-mesh-texture",this.encoding=o.JS.KTX2_ENCODING}}function a(e){return"encoded-mesh-texture"===(null===e||void 0===e?void 0:e.type)}async function i(e){const t=new Blob([e]),r=await t.text();return JSON.parse(r)}async function u(e,t){if(t===o.JS.KTX2_ENCODING)return new s(e);const r=new Blob([e],{type:t}),a=URL.createObjectURL(r),i=new Image;if((0,n.A)("esri-iPhone"))return new Promise(((e,t)=>{const r=()=>{o(),e(i)},n=e=>{o(),t(e)},o=()=>{URL.revokeObjectURL(a),i.removeEventListener("load",r),i.removeEventListener("error",n)};i.addEventListener("load",r),i.addEventListener("error",n),i.src=a}));try{i.src=a,await i.decode()}catch(u){console.warn("Failed decoding HTMLImageElement")}return URL.revokeObjectURL(a),i}},56516:(e,t,r)=>{r.d(t,{y:()=>j});var n=r(76460),o=r(13191),s=r(93345);var a,i,u=r(50076),l=r(87663),c=r(50346),d=r(90534),f=r(19898),p=r(34761),h=r(60008),m=r(4336),T=r(88105),y=r(39539);r(81806);class g{constructor(e){this._data=e,this._offset4=0,this._dataUint32=new Uint32Array(this._data,0,Math.floor(this._data.byteLength/4))}readUint32(){const e=this._offset4;return this._offset4+=1,this._dataUint32[e]}readUint8Array(e){const t=4*this._offset4;return this._offset4+=e/4,new Uint8Array(this._data,t,e)}remainingBytes(){return this._data.byteLength-4*this._offset4}}!function(e){e.SCALAR="SCALAR",e.VEC2="VEC2",e.VEC3="VEC3",e.VEC4="VEC4",e.MAT2="MAT2",e.MAT3="MAT3",e.MAT4="MAT4"}(a||(a={})),function(e){e[e.ARRAY_BUFFER=34962]="ARRAY_BUFFER",e[e.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER"}(i||(i={}));var w=r(4212);const b={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1},x={pbrMetallicRoughness:b,emissiveFactor:[0,0,0],alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1},v={ESRI_externalColorMixMode:"tint",ESRI_receiveShadows:!0,ESRI_receiveAmbientOcclusion:!0},_=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t={...b,...e.pbrMetallicRoughness},r=function(e){switch(e.ESRI_externalColorMixMode){case"multiply":case"tint":case"ignore":case"replace":break;default:(0,w.Xb)(e.ESRI_externalColorMixMode),e.ESRI_externalColorMixMode="tint"}return e}({...v,...e.extras});return{...x,...e,pbrMetallicRoughness:t,extras:r}};const A={magFilter:s.Cj.LINEAR,minFilter:s.Cj.LINEAR_MIPMAP_LINEAR,wrapS:s.pF.REPEAT,wrapT:s.pF.REPEAT};var O=r(37040);const S=1179937895,E=1313821514,N=5130562;class R{constructor(e,t,r,n){if(this._context=e,this.uri=t,this.json=r,this._glbBuffer=n,this._bufferLoaders=new Map,this._textureLoaders=new Map,this._textureCache=new Map,this._materialCache=new Map,this._nodeParentMap=new Map,this._nodeTransformCache=new Map,this._supportedExtensions=["KHR_texture_basisu","KHR_texture_transform"],this._baseUri=function(e){let t,r;return e.replace(/^(.*\/)?([^/]*)$/,((e,n,o)=>(t=n||"",r=o||"",""))),{dirPart:t,filePart:r}}(this.uri).dirPart,this._checkVersionSupported(),this._checkRequiredExtensionsSupported(),null==r.scenes)throw new u.A("gltf-loader-unsupported-feature","Scenes must be defined.");if(null==r.meshes)throw new u.A("gltf-loader-unsupported-feature","Meshes must be defined");if(null==r.nodes)throw new u.A("gltf-loader-unsupported-feature","Nodes must be defined.");this._computeNodeParents()}static async load(e,t,r){if((0,d.DB)(t)){const r=(0,d.r$)(t);if(r&&"model/gltf-binary"!==r.mediaType)try{const n=JSON.parse(r.isBase64?atob(r.data):r.data);return new R(e,t,n)}catch{}const n=(0,d.lJ)(t);if(R._isGLBData(n))return this._fromGLBData(e,t,n)}if(D.test(t)||"gltf"===(null===r||void 0===r?void 0:r.expectedType)){const n=await e.loadJSON(t,r);return new R(e,t,n)}const n=await e.loadBinary(t,r);if(R._isGLBData(n))return this._fromGLBData(e,t,n);if(P.test(t)||"glb"===(null===r||void 0===r?void 0:r.expectedType))throw new u.A("gltf-loader-invalid-glb","This is not a valid glb file.");const o=await e.loadJSON(t,r);return new R(e,t,o)}static _isGLBData(e){if(null==e)return!1;const t=new g(e);return t.remainingBytes()>=4&&t.readUint32()===S}static async _fromGLBData(e,t,r){const n=await R._parseGLBData(r);return new R(e,t,n.json,n.binaryData)}static async _parseGLBData(e){const t=new g(e);if(t.remainingBytes()<12)throw new u.A("gltf-loader-error","glb binary data is insufficiently large.");const r=t.readUint32(),o=t.readUint32(),s=t.readUint32();if(r!==S)throw new u.A("gltf-loader-error","Magic first 4 bytes do not fit to expected glb value.");if(e.byteLength<s)throw new u.A("gltf-loader-error","glb binary data is smaller than header specifies.");if(2!==o)throw new u.A("gltf-loader-unsupported-feature","An unsupported glb container version was detected. Only version 2 is supported.");let a,i,l=0;for(;t.remainingBytes()>=8;){const e=t.readUint32(),r=t.readUint32();if(0===l){if(r!==E)throw new u.A("gltf-loader-error","First glb chunk must be JSON.");if(e<0)throw new u.A("gltf-loader-error","No JSON data found.");a=await(0,O.KB)(t.readUint8Array(e))}else if(1===l){if(r!==N)throw new u.A("gltf-loader-unsupported-feature","Second glb chunk expected to be BIN.");i=t.readUint8Array(e)}else n.A.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] More than 2 glb chunks detected. Skipping.");l+=1}if(!a)throw new u.A("gltf-loader-error","No glb JSON chunk detected.");return{json:a,binaryData:i}}async getBuffer(e,t){const r=this.json.buffers[e];if(null==r.uri){if(null==this._glbBuffer)throw new u.A("gltf-loader-error","glb buffer not present");return this._glbBuffer}const n=await this._getBufferLoader(e,t);if(n.byteLength!==r.byteLength)throw new u.A("gltf-loader-error","Buffer byte lengths should match.");return n}async _getBufferLoader(e,t){const r=this._bufferLoaders.get(e);if(r)return r;const n=this.json.buffers[e].uri,o=this._context.loadBinary(this._resolveUri(n),t).then((e=>new Uint8Array(e)));return this._bufferLoaders.set(e,o),o}async getAccessor(e,t){if(!this.json.accessors)throw new u.A("gltf-loader-unsupported-feature","Accessors missing.");const r=this.json.accessors[e];if(null==(null===r||void 0===r?void 0:r.bufferView))throw new u.A("gltf-loader-unsupported-feature","Some accessor does not specify a bufferView.");if(r.type in[a.MAT2,a.MAT3,a.MAT4])throw new u.A("gltf-loader-unsupported-feature","AttributeType ".concat(r.type," is not supported"));const n=this.json.bufferViews[r.bufferView],o=await this.getBuffer(n.buffer,t),s=L[r.type],i=F[r.componentType],l=s*i,c=n.byteStride||l;return{raw:o.buffer,byteStride:c,byteOffset:o.byteOffset+(n.byteOffset||0)+(r.byteOffset||0),entryCount:r.count,isDenselyPacked:c===l,componentCount:s,componentByteSize:i,componentType:r.componentType,min:r.min,max:r.max,normalized:!!r.normalized}}async getIndexData(e,t){if(null==e.indices)return;const r=await this.getAccessor(e.indices,t);if(r.isDenselyPacked)switch(r.componentType){case s.pe.UNSIGNED_BYTE:return new Uint8Array(r.raw,r.byteOffset,r.entryCount);case s.pe.UNSIGNED_SHORT:return new Uint16Array(r.raw,r.byteOffset,r.entryCount);case s.pe.UNSIGNED_INT:return new Uint32Array(r.raw,r.byteOffset,r.entryCount)}else switch(r.componentType){case s.pe.UNSIGNED_BYTE:return(0,y.m)(B(T.SL,r));case s.pe.UNSIGNED_SHORT:return(0,y.m)(B(T.h,r));case s.pe.UNSIGNED_INT:return(0,y.m)(B(T.P,r))}}async getPositionData(e,t){if(null==e.attributes.POSITION)throw new u.A("gltf-loader-unsupported-feature","No POSITION vertex data found.");const r=await this.getAccessor(e.attributes.POSITION,t);if(r.componentType!==s.pe.FLOAT)throw new u.A("gltf-loader-unsupported-feature","Expected type FLOAT for POSITION vertex attribute, but found "+s.pe[r.componentType]);if(3!==r.componentCount)throw new u.A("gltf-loader-unsupported-feature","POSITION vertex attribute must have 3 components, but found "+r.componentCount.toFixed());return B(T.xs,r)}async getNormalData(e,t){if(null==e.attributes.NORMAL)throw new u.A("gltf-loader-error","No NORMAL vertex data found.");const r=await this.getAccessor(e.attributes.NORMAL,t);if(r.componentType!==s.pe.FLOAT)throw new u.A("gltf-loader-unsupported-feature","Expected type FLOAT for NORMAL vertex attribute, but found "+s.pe[r.componentType]);if(3!==r.componentCount)throw new u.A("gltf-loader-unsupported-feature","NORMAL vertex attribute must have 3 components, but found "+r.componentCount.toFixed());return B(T.xs,r)}async getTangentData(e,t){if(null==e.attributes.TANGENT)throw new u.A("gltf-loader-error","No TANGENT vertex data found.");const r=await this.getAccessor(e.attributes.TANGENT,t);if(r.componentType!==s.pe.FLOAT)throw new u.A("gltf-loader-unsupported-feature","Expected type FLOAT for TANGENT vertex attribute, but found "+s.pe[r.componentType]);if(4!==r.componentCount)throw new u.A("gltf-loader-unsupported-feature","TANGENT vertex attribute must have 4 components, but found "+r.componentCount.toFixed());return new T.Eq(r.raw,r.byteOffset,r.byteStride,r.byteOffset+r.byteStride*r.entryCount)}async getTextureCoordinates(e,t){if(null==e.attributes.TEXCOORD_0)throw new u.A("gltf-loader-error","No TEXCOORD_0 vertex data found.");const r=await this.getAccessor(e.attributes.TEXCOORD_0,t);if(2!==r.componentCount)throw new u.A("gltf-loader-unsupported-feature","TEXCOORD_0 vertex attribute must have 2 components, but found "+r.componentCount.toFixed());if(r.componentType===s.pe.FLOAT)return B(T.gH,r);if(!r.normalized)throw new u.A("gltf-loader-unsupported-feature","Integer component types are only supported for a normalized accessor for TEXCOORD_0.");return function(e){switch(e.componentType){case s.pe.BYTE:return new T.D6(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case s.pe.UNSIGNED_BYTE:return new T.LC(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case s.pe.SHORT:return new T.mJ(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case s.pe.UNSIGNED_SHORT:return new T.Yi(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case s.pe.UNSIGNED_INT:return new T.An(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case s.pe.FLOAT:return new T.gH(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount)}}(r)}async getVertexColors(e,t){if(null==e.attributes.COLOR_0)throw new u.A("gltf-loader-error","No COLOR_0 vertex data found.");const r=await this.getAccessor(e.attributes.COLOR_0,t);if(4!==r.componentCount&&3!==r.componentCount)throw new u.A("gltf-loader-unsupported-feature","COLOR_0 attribute must have 3 or 4 components, but found "+r.componentCount.toFixed());if(4===r.componentCount){if(r.componentType===s.pe.FLOAT)return B(T.Eq,r);if(r.componentType===s.pe.UNSIGNED_BYTE)return B(T.XP,r);if(r.componentType===s.pe.UNSIGNED_SHORT)return B(T.Uz,r)}else if(3===r.componentCount){if(r.componentType===s.pe.FLOAT)return B(T.xs,r);if(r.componentType===s.pe.UNSIGNED_BYTE)return B(T.eI,r);if(r.componentType===s.pe.UNSIGNED_SHORT)return B(T.nS,r)}throw new u.A("gltf-loader-unsupported-feature","Unsupported component type for COLOR_0 attribute: "+s.pe[r.componentType])}hasPositions(e){return void 0!==e.attributes.POSITION}hasNormals(e){return void 0!==e.attributes.NORMAL}hasVertexColors(e){return void 0!==e.attributes.COLOR_0}hasTextureCoordinates(e){return void 0!==e.attributes.TEXCOORD_0}hasTangents(e){return void 0!==e.attributes.TANGENT}async getMaterial(e,t,r){let n=e.material?this._materialCache.get(e.material):void 0;if(!n){var o,s,a,i,u;const l=null!=e.material?_(this.json.materials[e.material]):_(),c=l.pbrMetallicRoughness,d=this.hasVertexColors(e),f=this.getTexture(c.baseColorTexture,t),p=this.getTexture(l.normalTexture,t),h=r?this.getTexture(l.occlusionTexture,t):void 0,m=r?this.getTexture(l.emissiveTexture,t):void 0,T=r?this.getTexture(c.metallicRoughnessTexture,t):void 0,y=null!=e.material?e.material:-1;n={alphaMode:l.alphaMode,alphaCutoff:l.alphaCutoff,color:c.baseColorFactor,doubleSided:!!l.doubleSided,colorTexture:await f,normalTexture:await p,name:l.name,id:y,occlusionTexture:await h,emissiveTexture:await m,emissiveFactor:l.emissiveFactor,metallicFactor:c.metallicFactor,roughnessFactor:c.roughnessFactor,metallicRoughnessTexture:await T,hasVertexColors:d,ESRI_externalColorMixMode:l.extras.ESRI_externalColorMixMode,colorTextureTransform:null===c||void 0===c||null===(o=c.baseColorTexture)||void 0===o||null===(o=o.extensions)||void 0===o?void 0:o.KHR_texture_transform,normalTextureTransform:null===(s=l.normalTexture)||void 0===s||null===(s=s.extensions)||void 0===s?void 0:s.KHR_texture_transform,occlusionTextureTransform:null===(a=l.occlusionTexture)||void 0===a||null===(a=a.extensions)||void 0===a?void 0:a.KHR_texture_transform,emissiveTextureTransform:null===(i=l.emissiveTexture)||void 0===i||null===(i=i.extensions)||void 0===i?void 0:i.KHR_texture_transform,metallicRoughnessTextureTransform:null===c||void 0===c||null===(u=c.metallicRoughnessTexture)||void 0===u||null===(u=u.extensions)||void 0===u?void 0:u.KHR_texture_transform,receiveAmbientOcclusion:l.extras.ESRI_receiveAmbientOcclusion,receiveShadows:l.extras.ESRI_receiveShadows}}return n}async getTexture(e,t){if(!e)return;if(0!==(e.texCoord||0))throw new u.A("gltf-loader-unsupported-feature","Only TEXCOORD with index 0 is supported.");const r=e.index,n=this.json.textures[r],o=(c=null!=n.sampler?this.json.samplers[n.sampler]:{},{...A,...c}),s=U(n),a=this.json.images[s],i=await this._loadTextureImageData(r,n,t);var c;return(0,l.tE)(this._textureCache,r,(()=>{const e=e=>33071===e||33648===e||10497===e,t=e=>{throw new u.A("gltf-loader-error","Unexpected TextureSampler WrapMode: ".concat(e))};return{data:i,wrapS:e(o.wrapS)?o.wrapS:t(o.wrapS),wrapT:e(o.wrapT)?o.wrapT:t(o.wrapT),minFilter:o.minFilter,name:a.name,id:r}}))}getNodeTransform(e){if(void 0===e)return C;let t=this._nodeTransformCache.get(e);if(!t){const r=this.getNodeTransform(this._getNodeParent(e)),n=this.json.nodes[e];n.matrix?t=(0,p.lw)((0,o.vt)(),r,n.matrix):n.translation||n.rotation||n.scale?(t=(0,o.o8)(r),n.translation&&(0,p.Tl)(t,t,n.translation),n.rotation&&(M[3]=(0,h.Xd)(M,n.rotation),(0,p.e$)(t,t,M[3],M)),n.scale&&(0,p.hs)(t,t,n.scale)):t=(0,o.o8)(r),this._nodeTransformCache.set(e,t)}return t}_resolveUri(e){return(0,d.s2)(e,this._baseUri)}_getNodeParent(e){return this._nodeParentMap.get(e)}_checkVersionSupported(){const e=f.R.parse(this.json.asset.version,"glTF");I.validate(e)}_checkRequiredExtensionsSupported(){const e=this.json;if(e.extensionsRequired&&!e.extensionsRequired.every((e=>this._supportedExtensions.includes(e))))throw new u.A("gltf-loader-unsupported-feature","gltf loader was not able to load unsupported feature. Required extensions: "+e.extensionsRequired.join(", "))}_computeNodeParents(){this.json.nodes.forEach(((e,t)=>{e.children&&e.children.forEach((e=>{this._nodeParentMap.set(e,t)}))}))}async _loadTextureImageData(e,t,r){const n=this._textureLoaders.get(e);if(n)return n;const o=this._createTextureLoader(t,r);return this._textureLoaders.set(e,o),o}async _createTextureLoader(e,t){const r=U(e),n=this.json.images[r];if(n.uri){if(n.uri.endsWith(".ktx2")){const e=await this._context.loadBinary(this._resolveUri(n.uri),t);return new O.Xi(new Uint8Array(e))}return this._context.loadImage(this._resolveUri(n.uri),t)}if(null==n.bufferView)throw new u.A("gltf-loader-unsupported-feature","Image bufferView must be defined.");if(null==n.mimeType)throw new u.A("gltf-loader-unsupported-feature","Image mimeType must be defined.");const o=this.json.bufferViews[n.bufferView],s=await this.getBuffer(o.buffer,t);if(null!=o.byteStride)throw new u.A("gltf-loader-unsupported-feature","byteStride not supported for image buffer");const a=s.byteOffset+(o.byteOffset||0);return(0,O.pn)(new Uint8Array(s.buffer,a,o.byteLength),n.mimeType)}async getLoadedBuffersSize(){if(this._glbBuffer)return this._glbBuffer.byteLength;const e=await(0,c.nA)(Array.from(this._bufferLoaders.values())),t=await(0,c.nA)(Array.from(this._textureLoaders.values()));return e.reduce(((e,t)=>{var r;return e+(null!==(r=null===t||void 0===t?void 0:t.byteLength)&&void 0!==r?r:0)}),0)+t.reduce(((e,t)=>e+(t?(0,O.x3)(t)?t.data.byteLength:t.width*t.height*4:0)),0)}}const C=(0,p.hM)((0,o.vt)(),Math.PI/2),I=new f.R(2,0,"glTF"),M=(0,m.vt)(),L={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},F={[s.pe.BYTE]:1,[s.pe.UNSIGNED_BYTE]:1,[s.pe.SHORT]:2,[s.pe.UNSIGNED_SHORT]:2,[s.pe.HALF_FLOAT]:2,[s.pe.FLOAT]:4,[s.pe.INT]:4,[s.pe.UNSIGNED_INT]:4};function B(e,t){return new e(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*(t.entryCount-1)+t.componentByteSize*t.componentCount)}function U(e){var t;if(null!=(null===(t=e.extensions)||void 0===t?void 0:t.KHR_texture_basisu))return e.extensions.KHR_texture_basisu.source;if(null!==e.source)return e.source;throw new u.A("gltf-loader-unsupported-feature","Source is expected to be defined for a texture. It can also be omitted in favour of an KHR_texture_basisu extension tag.")}const D=/\.gltf$/i,P=/\.glb$/i;let G=0;async function j(e,t){var r;let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];const u=await R.load(e,t,a),l="gltf_"+G++,c={lods:[],materials:new Map,textures:new Map,meta:k(u)},d=!(!u.json.asset.extras||"symbolResource"!==u.json.asset.extras.ESRI_type),f=null===(r=u.json.asset.extras)||void 0===r||null===(r=r.ESRI_webstyleSymbol)||void 0===r?void 0:r.webstyle,p=new Map;await V(u,(async(e,t,r,d)=>{var f,h;const m=null!==(f=p.get(r))&&void 0!==f?f:0;p.set(r,m+1);const T=void 0!==e.mode?e.mode:s.WR.TRIANGLES,y=T===s.WR.TRIANGLES||T===s.WR.TRIANGLE_STRIP||T===s.WR.TRIANGLE_FAN?T:null;if(null==y)return void n.A.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] Unsupported primitive mode ("+s.WR[T]+"). Skipping primitive.");if(!u.hasPositions(e))return void n.A.getLogger("esri.views.3d.glTF").warn("Skipping primitive without POSITION vertex attribute.");const g=u.getPositionData(e,a),w=u.getMaterial(e,a,i),b=u.hasNormals(e)?u.getNormalData(e,a):null,x=u.hasTangents(e)?u.getTangentData(e,a):null,v=u.hasTextureCoordinates(e)?u.getTextureCoordinates(e,a):null,_=u.hasVertexColors(e)?u.getVertexColors(e,a):null,A=u.getIndexData(e,a),O={name:d,transform:(0,o.o8)(t),attributes:{position:await g,normal:b?await b:null,texCoord0:v?await v:null,color:_?await _:null,tangent:x?await x:null},indices:await A,primitiveType:y,material:K(c,await w,l)};let S=null;null!=(null===(h=c.meta)||void 0===h?void 0:h.ESRI_lod)&&"screenSpaceRadius"===c.meta.ESRI_lod.metric&&(S=c.meta.ESRI_lod.thresholds[r]),c.lods[r]=c.lods[r]||{parts:[],name:d,lodThreshold:S},c.lods[r].parts[m]=O}));for(const n of c.lods)n.parts=n.parts.filter((e=>!!e));const h=await u.getLoadedBuffersSize();return{model:c,meta:{isEsriSymbolResource:d,uri:u.uri,ESRI_webstyle:f},customMeta:{},size:h}}function k(e){const t=e.json;let r=null;return t.nodes.forEach((e=>{const t=e.extras;null!=t&&(t.ESRI_proxyEllipsoid||t.ESRI_lod)&&(r=t)})),r}async function V(e,t){const r=e.json,o=r.scenes[r.scene||0].nodes,s=o.length>1,a=[];for(const n of o){const e=r.nodes[n];a.push(i(n,0)),H(e)&&!s&&e.extensions.MSFT_lod.ids.forEach(((e,t)=>i(e,t+1)))}async function i(o,s){const u=r.nodes[o],l=e.getNodeTransform(o);if(null!=u.weights&&n.A.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] Morph targets are not supported."),null!=u.mesh){const e=r.meshes[u.mesh];for(const r of e.primitives)a.push(t(r,l,s,e.name))}for(const e of u.children||[])a.push(i(e,s))}await Promise.all(a)}function H(e){var t;return(null===(t=e.extensions)||void 0===t?void 0:t.MSFT_lod)&&Array.isArray(e.extensions.MSFT_lod.ids)}function K(e,t,r){const n=t=>{const n="".concat(r,"_tex_").concat(t&&t.id).concat(null!==t&&void 0!==t&&t.name?"_"+t.name:"");if(t&&!e.textures.has(n)){const r=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{data:e,parameters:{wrap:{s:s.pF.REPEAT,t:s.pF.REPEAT,...t.wrap},noUnpackFlip:!0,mipmap:!1,...t}}}(t.data,{wrap:{s:t.wrapS,t:t.wrapT},mipmap:q.has(t.minFilter),noUnpackFlip:!0});e.textures.set(n,r)}return n},o="".concat(r,"_mat_").concat(t.id,"_").concat(t.name);if(!e.materials.has(o)){const r=function(){return{color:[1,1,1],opacity:1,alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1,castShadows:!0,receiveShadows:!0,receiveAmbientOcclustion:!0,textureColor:null,textureNormal:null,textureOcclusion:null,textureEmissive:null,textureMetallicRoughness:null,colorTextureTransform:null,normalTextureTransform:null,occlusionTextureTransform:null,emissiveTextureTransform:null,metallicRoughnessTextureTransform:null,emissiveFactor:[0,0,0],metallicFactor:1,roughnessFactor:1,colorMixMode:"multiply",...arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}}}({color:[t.color[0],t.color[1],t.color[2]],opacity:t.color[3],alphaMode:t.alphaMode,alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,colorMixMode:t.ESRI_externalColorMixMode,textureColor:t.colorTexture?n(t.colorTexture):void 0,textureNormal:t.normalTexture?n(t.normalTexture):void 0,textureOcclusion:t.occlusionTexture?n(t.occlusionTexture):void 0,textureEmissive:t.emissiveTexture?n(t.emissiveTexture):void 0,textureMetallicRoughness:t.metallicRoughnessTexture?n(t.metallicRoughnessTexture):void 0,emissiveFactor:[t.emissiveFactor[0],t.emissiveFactor[1],t.emissiveFactor[2]],colorTextureTransform:t.colorTextureTransform,normalTextureTransform:t.normalTextureTransform,occlusionTextureTransform:t.occlusionTextureTransform,emissiveTextureTransform:t.emissiveTextureTransform,metallicRoughnessTextureTransform:t.metallicRoughnessTextureTransform,metallicFactor:t.metallicFactor,roughnessFactor:t.roughnessFactor,receiveShadows:t.receiveShadows,receiveAmbientOcclustion:t.receiveAmbientOcclusion});e.materials.set(o,r)}return o}const q=new Set([s.Cj.LINEAR_MIPMAP_LINEAR,s.Cj.LINEAR_MIPMAP_NEAREST])},83490:(e,t,r)=>{var n,o,s,a,i,u,l,c,d;r.d(t,{Am:()=>a,C7:()=>s,ID:()=>c,JS:()=>d,Mg:()=>u,dd:()=>i,it:()=>o,s2:()=>n,sf:()=>l}),function(e){e[e.None=0]="None",e[e.Front=1]="Front",e[e.Back=2]="Back",e[e.COUNT=3]="COUNT"}(n||(n={})),function(e){e[e.Less=0]="Less",e[e.Lequal=1]="Lequal",e[e.COUNT=2]="COUNT"}(o||(o={})),function(e){e[e.BACKGROUND=0]="BACKGROUND",e[e.UPDATE=1]="UPDATE"}(s||(s={})),function(e){e[e.NOT_LOADED=0]="NOT_LOADED",e[e.LOADING=1]="LOADING",e[e.LOADED=2]="LOADED"}(a||(a={})),function(e){e[e.IntegratedMeshMaskExcluded=1]="IntegratedMeshMaskExcluded",e[e.OutlineVisualElementMask=2]="OutlineVisualElementMask"}(i||(i={})),function(e){e[e.Highlight=0]="Highlight",e[e.MaskOccludee=1]="MaskOccludee",e[e.COUNT=2]="COUNT"}(u||(u={})),function(e){e[e.Blend=0]="Blend",e[e.Opaque=1]="Opaque",e[e.Mask=2]="Mask",e[e.MaskBlend=3]="MaskBlend",e[e.COUNT=4]="COUNT"}(l||(l={})),function(e){e[e.OFF=0]="OFF",e[e.ON=1]="ON"}(c||(c={})),function(e){e.DDS_ENCODING="image/vnd-ms.dds",e.KTX2_ENCODING="image/ktx2",e.BASIS_ENCODING="image/x.basis"}(d||(d={}))},50791:(e,t,r)=>{r.d(t,{T:()=>n});const n=2.1}}]);
//# sourceMappingURL=9390.e8e8588d.chunk.js.map