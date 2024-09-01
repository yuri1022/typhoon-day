"use strict";(self.webpackChunktyphoon=self.webpackChunktyphoon||[]).push([[8679],{53666:(e,t,i)=>{i.d(t,{A:()=>c});var s=i(35143),r=i(69098),o=i(42553),n=i(18288),l=i(46053),a=(i(81806),i(76460),i(47249),i(6409)),d=i(85842),h=i(90115);let u=class extends((0,r.O)(o.oY)){constructor(e){super(e),this.unit="milliseconds",this.value=0}toMilliseconds(){return(0,n.t)(this.value,this.unit,"milliseconds")}};(0,s._)([(0,a.e)(h.j,{nonNullable:!0})],u.prototype,"unit",void 0),(0,s._)([(0,l.MZ)({type:Number,json:{write:!0},nonNullable:!0})],u.prototype,"value",void 0),u=(0,s._)([(0,d.$)("esri.TimeInterval")],u);const c=u},53521:(e,t,i)=>{i.d(t,{q:()=>r});var s=i(79369);class r{constructor(e,t){this._storage=new s.F,this.id="",this.name="",this.size=0,this._storage.maxSize=e,this._storage.register(this),t&&this._storage.registerRemoveFunc("",t)}destroy(){this._storage.deregister(this),this._storage.destroy()}put(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;this._storage.put(this,e,t,i,1)}pop(e){return this._storage.pop(this,e)}get(e){return this._storage.get(this,e)}clear(){this._storage.clearAll()}get maxSize(){return this._storage.maxSize}set maxSize(e){this._storage.maxSize=e}resetHitRate(){}}},79369:(e,t,i)=>{i.d(t,{F:()=>l,Mn:()=>n});var s=i(30015);var r,o;(o=r||(r={}))[o.ALL=0]="ALL",o[o.SOME=1]="SOME";class n{constructor(e,t,i){this.name=e,this._storage=t,this.id=a+++":",this.size=0,this.maxSize=-1,this._removeFunc=!1,this._hit=0,this._miss=0,this._storage.register(this),i&&(this._storage.registerRemoveFunc(this.id,i),this._removeFunc=!0)}destroy(){this._storage.clear(this),this._removeFunc&&this._storage.deregisterRemoveFunc(this.id),this._storage.deregister(this),this._storage=null}get hitRate(){return this._hit/(this._hit+this._miss)}get storageSize(){return this._storage.size}getSize(e){return this._storage.getSize(this,e)}resetHitRate(){this._hit=this._miss=0}put(e,t,i){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;this._storage.put(this,e,t,i,s)}pop(e){const t=this._storage.pop(this,e);return void 0===t?++this._miss:++this._hit,t}get(e){const t=this._storage.get(this,e);return void 0===t?++this._miss:++this._hit,t}peek(e){return this._storage.peek(this,e)}updateSize(e,t,i){this._storage.updateSize(this,e,t,i)}clear(){this._storage.clear(this)}clearAll(){this._storage.clearAll()}get performanceInfo(){return this._storage.performanceInfo}resetStats(){this._storage.resetStats()}}class l{get size(){return this._size}constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10485760;this._maxSize=e,this._db=new Map,this._size=0,this._hit=0,this._miss=0,this._removeFuncs=new s.A,this._users=new s.A}destroy(){this.clearAll(),this._removeFuncs.clear(),this._users.clear(),this._db=null}register(e){this._users.push(e)}deregister(e){this._users.removeUnordered(e)}registerRemoveFunc(e,t){this._removeFuncs.push([e,t])}deregisterRemoveFunc(e){this._removeFuncs.filterInPlace((t=>t[0]!==e))}get maxSize(){return this._maxSize}set maxSize(e){this._maxSize=Math.max(e,-1),this._checkSize()}getSize(e,t){var i;const s=this._db.get(e.id+t);return null!==(i=null===s||void 0===s?void 0:s.size)&&void 0!==i?i:0}put(e,t,i,s,o){t=e.id+t;const n=this._db.get(t);if(n&&(this._size-=n.size,e.size-=n.size,this._db.delete(t),n.entry!==i&&this._notifyRemove(t,n.entry,n.size,r.ALL)),s>this._maxSize)return void this._notifyRemove(t,i,s,r.ALL);if(void 0===i)return void console.warn("Refusing to cache undefined entry ");if(!s||s<0)return console.warn("Refusing to cache entry with size ".concat(s," for key ").concat(t)),void this._notifyRemove(t,i,0,r.ALL);const l=1+Math.max(o,-4)- -3;this._db.set(t,new d(i,s,l)),this._size+=s,e.size+=s,this._checkSize()}updateSize(e,t,i,s){t=e.id+t;const o=this._db.get(t);if(o&&o.entry===i){for(this._size-=o.size,e.size-=o.size;s>this._maxSize;){const e=this._notifyRemove(t,i,s,r.SOME);if(!(null!=e&&e>0))return void this._db.delete(t);s=e}o.size=s,this._size+=s,e.size+=s,this._checkSize()}}pop(e,t){t=e.id+t;const i=this._db.get(t);if(i)return this._size-=i.size,e.size-=i.size,this._db.delete(t),++this._hit,i.entry;++this._miss}get(e,t){t=e.id+t;const i=this._db.get(t);if(void 0!==i)return this._db.delete(t),i.lives=i.lifetime,this._db.set(t,i),++this._hit,i.entry;++this._miss}peek(e,t){const i=this._db.get(e.id+t);return i?++this._hit:++this._miss,null===i||void 0===i?void 0:i.entry}get performanceInfo(){const e={Size:Math.round(this._size/1048576)+"/"+Math.round(this._maxSize/1048576)+"MB","Hit rate":Math.round(100*this._getHitRate())+"%",Entries:this._db.size.toString()},t={},i=new Array;this._db.forEach(((e,s)=>{const r=e.lifetime;i[r]=(i[r]||0)+e.size,this._users.forAll((i=>{const{id:r,name:o}=i;if(s.startsWith(r)){const i=t[o]||0;t[o]=i+e.size}}))}));const s={};this._users.forAll((e=>{const i=e.name;if("hitRate"in e&&"number"==typeof e.hitRate&&!isNaN(e.hitRate)&&e.hitRate>0){const r=t[i]||0;t[i]=r,s[i]=Math.round(100*e.hitRate)+"%"}else s[i]="0%"}));const r=Object.keys(t);r.sort(((e,i)=>t[i]-t[e])),r.forEach((i=>e[i]=Math.round(t[i]/2**20)+"MB / "+s[i]));for(let o=i.length-1;o>=0;--o){const t=i[o];t&&(e["Priority "+(o+-3-1)]=Math.round(t/this._size*100)+"%")}return e}resetStats(){this._hit=this._miss=0,this._users.forAll((e=>e.resetHitRate()))}clear(e){const t=e.id;this._db.forEach(((e,i)=>{i.startsWith(t)&&(this._size-=e.size,this._db.delete(i),this._notifyRemove(i,e.entry,e.size,r.ALL))})),e.size=0}clearAll(){this._db.forEach(((e,t)=>this._notifyRemove(t,e.entry,e.size,r.ALL))),this._users.forAll((e=>e.size=0)),this._size=0,this._db.clear()}_getHitRate(){return this._hit/(this._hit+this._miss)}_notifyRemove(e,t,i,s){let r;return this._removeFuncs.some((o=>{if(e.startsWith(o[0])){const e=o[1](t,s,i);return"number"==typeof e&&(r=e),!0}return!1})),r}_checkSize(){this._users.forAll((e=>this._checkSizeLimits(e))),this._checkSizeLimits()}_checkSizeLimits(e){const t=null!==e&&void 0!==e?e:this;if(t.maxSize<0||t.size<=t.maxSize)return;const i=null===e||void 0===e?void 0:e.id;let s=!0;for(;s;){s=!1;for(const[r,o]of this._db)if(0===o.lifetime&&(!i||r.startsWith(i))){if(this._purgeItem(r,o,e),t.size<=.9*t.maxSize)return;s||(s=this._db.has(r))}}for(const[r,o]of this._db)if((!i||r.startsWith(i))&&(this._purgeItem(r,o,e),t.size<=.9*t.maxSize))return}_purgeItem(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this._users.find((t=>e.startsWith(t.id)));if(this._db.delete(e),t.lives<=1){this._size-=t.size,i&&(i.size-=t.size);const s=this._notifyRemove(e,t.entry,t.size,r.SOME);null!=s&&s>0&&(this._size+=s,i&&(i.size+=s),t.lives=t.lifetime,t.size=s,this._db.set(e,t))}else--t.lives,this._db.set(e,t)}}let a=0;class d{constructor(e,t,i){this.entry=e,this.size=t,this.lifetime=i,this.lives=i}}},68002:(e,t,i)=>{i.d(t,{X_:()=>n,i1:()=>l,zx:()=>a});var s=i(15941),r=i(31633);const o=96;function n(e,t){const i=t||e.extent,s=e.width,n=(0,r.GA)(null===i||void 0===i?void 0:i.spatialReference);return i&&s?i.width/s*n*r.dy*o:0}function l(e,t){return e/((0,r.GA)(t)*r.dy*o)}function a(e,t,i){return function(e,t){return 0===t||(0,s.Sp)(e,t)||e<t}(e,t)&&function(e,t){return 0===t||(0,s.Sp)(e,t)||e>t}(e,i)}},82951:(e,t,i)=>{i.r(t),i.d(t,{default:()=>k});var s=i(35143),r=i(3825),o=i(82111),n=i(50076),l=i(27741),a=i(77717),d=i(50346),h=i(46053),u=i(40565),c=(i(47249),i(81806),i(28379)),m=i(85842),p=i(17707),y=i(49140),f=i(76797),v=i(68002),_=i(80963),g=i(25515),b=i(12406),S=i(36648),x=i(19502),z=i(65624),w=i(31362),M=i(11270),I=i(94729),A=i(21617),T=i(5682),O=i(73907),L=i(78817),Z=i(95363),E=i(1420),F=i(16852),R=i(39568),N=i(65419),P=i(38278),U=i(67478);let j=class extends((0,z.dM)((0,L.e)((0,T.j)((0,O.I)((0,S.V)((0,x.b)((0,M.q)((0,I.A)((0,a.P)((0,A.J)((0,b.p)((0,w.d)(g.A))))))))))))){constructor(){super(...arguments),this._exportImageParameters=new E.g({layer:this}),this.dateFieldsTimeZone=null,this.datesInUnknownTimezone=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.preferredTimeZone=null,this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){const t=null!=e?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(d.QP).then((()=>this._fetchService(t)))),Promise.resolve(this)}destroy(){this._exportImageParameters.destroy()}readImageFormat(e,t){const i=t.supportedImageFormatTypes;return i&&i.includes("PNG32")?"png32":"png24"}writeSublayers(e,t,i,s){var r,o;if(!this.loaded||!e)return;const n=e.slice().reverse().flatten((e=>{let{sublayers:t}=e;return t&&t.toArray().reverse()})).toArray();let l=!1;const a=(0,y.aB)(s.origin);if(null!==(r=this.capabilities)&&void 0!==r&&r.operations.supportsExportMap&&null!==(o=this.capabilities)&&void 0!==o&&null!==(o=o.exportMap)&&void 0!==o&&o.supportsDynamicLayers)if(a===y.Gr.PORTAL_ITEM){const e=this.createSublayersForOrigin("service").sublayers;l=(0,N.Zx)(n,e,y.Gr.SERVICE)}else if(a>y.Gr.PORTAL_ITEM){const e=this.createSublayersForOrigin("portal-item");l=(0,N.Zx)(n,e.sublayers,(0,y.aB)(e.origin))}const d=[],h={writeSublayerStructure:l,...s};let u=l||this.hasVisibleLayersForOrigin(a);n.forEach((e=>{const t=e.write({},h);d.push(t),u=u||"user"===e.originOf("visible")})),d.some((e=>Object.keys(e).length>1))&&(t.layers=d),u&&(t.visibleLayers=n.filter((e=>e.visible)).map((e=>e.id)))}createExportImageParameters(e,t,i,s){var r,o;const n=(null===s||void 0===s?void 0:s.pixelRatio)||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian()),this._exportImageParameters.floors=null!==(r=null===s||void 0===s?void 0:s.floors)&&void 0!==r?r:null,this._exportImageParameters.scale=(0,v.X_)({extent:e,width:t})*n;const l=this._exportImageParameters.toJSON(),a=null===s||void 0===s||!s.rotation||this.version<10.3?{}:{rotation:-s.rotation},d=null===(o=e)||void 0===o?void 0:o.spatialReference,h=(0,_.YX)(d);l.dpi*=n;const u={};if(null!==s&&void 0!==s&&s.timeExtent){const{start:e,end:t}=s.timeExtent.toJSON();u.time=e&&t&&e===t?""+e:"".concat(null!==e&&void 0!==e?e:"null",",").concat(null!==t&&void 0!==t?t:"null")}else this.timeInfo&&!this.timeInfo.hasLiveData&&(u.time="null,null");return{bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:h,imageSR:h,size:t+","+i,...l,...a,...u}}async fetchImage(e,t,i,s){const{data:r}=await this._fetchImage("image",e,t,i,s);return r}async fetchImageBitmap(e,t,i,s){const{data:r,url:o}=await this._fetchImage("blob",e,t,i,s);return(0,F.m)(r,o,null===s||void 0===s?void 0:s.signal)}async fetchRecomputedExtents(){const e={...arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},query:{returnUpdates:!0,f:"json",...this.customParameters,token:this.apiKey}},{data:t}=await(0,r.A)(this.url,e),{extent:i,fullExtent:s,timeExtent:n}=t,l=i||s;return{fullExtent:l&&f.A.fromJSON(l),timeExtent:n&&o.A.fromJSON({start:n[0],end:n[1]})}}loadAll(){return(0,l.g)(this,(e=>{e(this.allSublayers),e(this.subtables)}))}serviceSupportsSpatialReference(e){return(0,P.D)(this,e)}async _fetchImage(e,t,i,s,o){var l,a,h;const u={responseType:e,signal:null!==(l=null===o||void 0===o?void 0:o.signal)&&void 0!==l?l:null,query:{...this.parsedUrl.query,...this.createExportImageParameters(t,i,s,o),f:"image",...this.refreshParameters,...this.customParameters,token:this.apiKey}},c=this.parsedUrl.path+"/export";if(null!=(null===(a=u.query)||void 0===a?void 0:a.dynamicLayers)&&(null===(h=this.capabilities)||void 0===h||null===(h=h.exportMap)||void 0===h||!h.supportsDynamicLayers))throw new n.A("mapimagelayer:dynamiclayer-not-supported","service ".concat(this.url," doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source."),{query:u.query});try{const{data:e}=await(0,r.A)(c,u);return{data:e,url:c}}catch(m){if((0,d.zf)(m))throw m;throw new n.A("mapimagelayer:image-fetch-error","Unable to load image: ".concat(c),{error:m})}}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:t,ssl:i}=await(0,r.A)(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},signal:e});i&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=t,this.read(t,{origin:"service",url:this.parsedUrl})}hasVisibleLayersForOrigin(e){var t;return!(null==e||null===(t=this.sublayersSourceJSON[e])||void 0===t||!t.visibleLayers)}};(0,s._)([(0,h.MZ)((0,U.P6)("dateFieldsTimeReference"))],j.prototype,"dateFieldsTimeZone",void 0),(0,s._)([(0,h.MZ)({type:Boolean})],j.prototype,"datesInUnknownTimezone",void 0),(0,s._)([(0,h.MZ)()],j.prototype,"dpi",void 0),(0,s._)([(0,h.MZ)()],j.prototype,"gdbVersion",void 0),(0,s._)([(0,h.MZ)()],j.prototype,"imageFormat",void 0),(0,s._)([(0,c.w)("imageFormat",["supportedImageFormatTypes"])],j.prototype,"readImageFormat",null),(0,s._)([(0,h.MZ)({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],j.prototype,"imageMaxHeight",void 0),(0,s._)([(0,h.MZ)({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],j.prototype,"imageMaxWidth",void 0),(0,s._)([(0,h.MZ)()],j.prototype,"imageTransparency",void 0),(0,s._)([(0,h.MZ)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],j.prototype,"isReference",void 0),(0,s._)([(0,h.MZ)({json:{read:!1,write:!1}})],j.prototype,"labelsVisible",void 0),(0,s._)([(0,h.MZ)({type:["ArcGISMapServiceLayer"]})],j.prototype,"operationalLayerType",void 0),(0,s._)([(0,h.MZ)({json:{read:!1,write:!1}})],j.prototype,"popupEnabled",void 0),(0,s._)([(0,h.MZ)((0,U.P6)("preferredTimeReference"))],j.prototype,"preferredTimeZone",void 0),(0,s._)([(0,h.MZ)()],j.prototype,"sourceJSON",void 0),(0,s._)([(0,h.MZ)({json:{write:{ignoreOrigin:!0}}})],j.prototype,"sublayers",void 0),(0,s._)([(0,p.K)("sublayers",{layers:{type:[R.A]},visibleLayers:{type:[u.jz]}})],j.prototype,"writeSublayers",null),(0,s._)([(0,h.MZ)({type:["show","hide","hide-children"]})],j.prototype,"listMode",void 0),(0,s._)([(0,h.MZ)({json:{read:!1},readOnly:!0,value:"map-image"})],j.prototype,"type",void 0),(0,s._)([(0,h.MZ)(Z.OZ)],j.prototype,"url",void 0),j=(0,s._)([(0,m.$)("esri.layers.MapImageLayer")],j);const k=j},19502:(e,t,i)=>{i.d(t,{b:()=>a});var s=i(35143),r=i(76460),o=i(46053),n=(i(81806),i(47249),i(85842)),l=i(13096);const a=e=>{let t=class extends e{get title(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){const e=(0,l.qg)(this.url);if(null!=e&&e.title)return e.title}return this._get("title")||""}set title(e){this._set("title",e)}set url(e){this._set("url",(0,l.Jf)(e,r.A.getLogger(this)))}};return(0,s._)([(0,o.MZ)()],t.prototype,"title",null),(0,s._)([(0,o.MZ)({type:String})],t.prototype,"url",null),t=(0,s._)([(0,n.$)("esri.layers.mixins.ArcGISService")],t),t}},78817:(e,t,i)=>{i.d(t,{B:()=>m,e:()=>p});var s=i(35143),r=i(82111),o=i(53666),n=i(46053),l=(i(81806),i(76460),i(47249),i(28379)),a=i(85842),d=i(80979),h=i(53430),u=i(83982),c=i(90115);const m={type:Boolean,json:{read:{source:"timeAnimation"},write:{target:"timeAnimation",layerContainerTypes:d.K}}},p=e=>{let t=class extends e{constructor(){super(...arguments),this.timeExtent=null,this.timeOffset=null,this.useViewTime=!0}readOffset(e,t){const i=t.timeInfo.exportOptions;if(!i)return null;const s=i.timeOffset,r=c.j.fromJSON(i.timeOffsetUnits);return s&&r?new o.A({value:s,unit:r}):null}set timeInfo(e){(0,h.sv)(e,this.fieldsIndex),this._set("timeInfo",e)}};return(0,s._)([(0,n.MZ)({type:r.A,json:{write:!1}})],t.prototype,"timeExtent",void 0),(0,s._)([(0,n.MZ)({type:o.A})],t.prototype,"timeOffset",void 0),(0,s._)([(0,l.w)("service","timeOffset",["timeInfo.exportOptions"])],t.prototype,"readOffset",null),(0,s._)([(0,n.MZ)({value:null,type:u.A,json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],t.prototype,"timeInfo",null),(0,s._)([(0,n.MZ)(m)],t.prototype,"useViewTime",void 0),t=(0,s._)([(0,a.$)("esri.layers.mixins.TemporalLayer")],t),t}},1420:(e,t,i)=>{i.d(t,{g:()=>c});var s=i(35143),r=i(91967),o=i(34154),n=i(46053),l=(i(81806),i(76460),i(47249),i(85842)),a=i(68002),d=i(46530),h=i(65419);const u={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"};let c=class extends r.A{constructor(e){super(e),this.floors=null,this.scale=0}destroy(){this.layer=null}get dynamicLayers(){if(!this.hasDynamicLayers)return null;const e=this.visibleSublayers.map((e=>{const t=(0,d.f)(this.floors,e);return e.toExportImageJSON(t)}));return e.length?JSON.stringify(e):null}get hasDynamicLayers(){return this.layer&&(0,h.Sk)(this.visibleSublayers,this.layer.serviceSublayers,this.layer.gdbVersion)}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.removeHandles("layer"),e&&this.addHandles([e.allSublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("sublayer-update",(e=>this.notifyChange(u[e.propertyName])))],"layer"))}get layers(){const e=this.visibleSublayers;return e?e.length?"show:"+e.map((e=>e.id)).join(","):"show:-1":null}get layerDefs(){var e;const t=!(null===(e=this.floors)||void 0===e||!e.length),i=this.visibleSublayers.filter((e=>null!=e.definitionExpression||t&&null!=e.floorInfo));return i.length?JSON.stringify(i.reduce(((e,t)=>{const i=(0,d.f)(this.floors,t),s=(0,o.m)(i,t.definitionExpression);return null!=s&&(e[t.id]=s),e}),{})):null}get version(){this.commitProperty("layers"),this.commitProperty("layerDefs"),this.commitProperty("dynamicLayers");const e=this.layer;return e&&(e.commitProperty("dpi"),e.commitProperty("imageFormat"),e.commitProperty("imageTransparency"),e.commitProperty("gdbVersion")),(this._get("version")||0)+1}get visibleSublayers(){const e=[];if(!this.layer)return e;const t=this.layer.sublayers,i=this.scale,s=t=>{t.visible&&(0===i||(0,a.zx)(i,t.minScale,t.maxScale))&&(t.sublayers?t.sublayers.forEach(s):e.unshift(t))};t&&t.forEach(s);const r=this._get("visibleSublayers");return!r||r.length!==e.length||r.some(((t,i)=>e[i]!==t))?e:r}toJSON(){const e=this.layer;let t={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?t.dynamicLayers=this.dynamicLayers:t={...t,layers:this.layers,layerDefs:this.layerDefs},t}};(0,s._)([(0,n.MZ)({readOnly:!0})],c.prototype,"dynamicLayers",null),(0,s._)([(0,n.MZ)()],c.prototype,"floors",void 0),(0,s._)([(0,n.MZ)({readOnly:!0})],c.prototype,"hasDynamicLayers",null),(0,s._)([(0,n.MZ)()],c.prototype,"layer",null),(0,s._)([(0,n.MZ)({readOnly:!0})],c.prototype,"layers",null),(0,s._)([(0,n.MZ)({readOnly:!0})],c.prototype,"layerDefs",null),(0,s._)([(0,n.MZ)({type:Number})],c.prototype,"scale",void 0),(0,s._)([(0,n.MZ)({readOnly:!0})],c.prototype,"version",null),(0,s._)([(0,n.MZ)({readOnly:!0})],c.prototype,"visibleSublayers",null),c=(0,s._)([(0,l.$)("esri.layers.support.ExportImageParameters")],c)},83982:(e,t,i)=>{i.d(t,{A:()=>y});var s=i(35143),r=i(82111),o=i(53666),n=i(69098),l=i(42553),a=i(46053),d=(i(81806),i(76460),i(47249),i(28379)),h=i(85842),u=i(17707),c=i(67478);function m(e,t){return o.A.fromJSON({value:e,unit:t})}let p=class extends((0,n.O)(l.oY)){constructor(e){super(e),this.cumulative=!1,this.endField=null,this.fullTimeExtent=null,this.hasLiveData=!1,this.interval=null,this.startField=null,this.timeZone=null,this.trackIdField=null,this.useTime=!0,this.stops=null}readFullTimeExtent(e,t){return t.timeExtent&&Array.isArray(t.timeExtent)&&2===t.timeExtent.length?r.A.fromArray(t.timeExtent):null}writeFullTimeExtent(e,t){null!=(null===e||void 0===e?void 0:e.start)&&null!=e.end?t.timeExtent=e.toArray():t.timeExtent=null}readInterval(e,t){return t.timeInterval&&t.timeIntervalUnits?m(t.timeInterval,t.timeIntervalUnits):t.defaultTimeInterval&&t.defaultTimeIntervalUnits?m(t.defaultTimeInterval,t.defaultTimeIntervalUnits):null}writeInterval(e,t){var i,s;t.timeInterval=null!==(i=null===e||void 0===e?void 0:e.toJSON().value)&&void 0!==i?i:null,t.timeIntervalUnits=null!==(s=null===e||void 0===e?void 0:e.toJSON().unit)&&void 0!==s?s:null}};(0,s._)([(0,a.MZ)({type:Boolean,json:{name:"exportOptions.timeDataCumulative",write:!0}})],p.prototype,"cumulative",void 0),(0,s._)([(0,a.MZ)({type:String,json:{name:"endTimeField",write:{enabled:!0,allowNull:!0}}})],p.prototype,"endField",void 0),(0,s._)([(0,a.MZ)({type:r.A,json:{write:{enabled:!0,allowNull:!0}}})],p.prototype,"fullTimeExtent",void 0),(0,s._)([(0,d.w)("fullTimeExtent",["timeExtent"])],p.prototype,"readFullTimeExtent",null),(0,s._)([(0,u.K)("fullTimeExtent")],p.prototype,"writeFullTimeExtent",null),(0,s._)([(0,a.MZ)({type:Boolean,json:{write:!0}})],p.prototype,"hasLiveData",void 0),(0,s._)([(0,a.MZ)({type:o.A,json:{write:{enabled:!0,allowNull:!0}}})],p.prototype,"interval",void 0),(0,s._)([(0,d.w)("interval",["timeInterval","timeIntervalUnits","defaultTimeInterval","defaultTimeIntervalUnits"])],p.prototype,"readInterval",null),(0,s._)([(0,u.K)("interval")],p.prototype,"writeInterval",null),(0,s._)([(0,a.MZ)({type:String,json:{name:"startTimeField",write:{enabled:!0,allowNull:!0}}})],p.prototype,"startField",void 0),(0,s._)([(0,a.MZ)((0,c.P6)("timeReference",!0))],p.prototype,"timeZone",void 0),(0,s._)([(0,a.MZ)({type:String,json:{write:{enabled:!0,allowNull:!0}}})],p.prototype,"trackIdField",void 0),(0,s._)([(0,a.MZ)({type:Boolean,json:{name:"exportOptions.useTime",write:!0}})],p.prototype,"useTime",void 0),(0,s._)([(0,a.MZ)({type:[Date],json:{read:!1}})],p.prototype,"stops",void 0),p=(0,s._)([(0,h.$)("esri.layers.support.TimeInfo")],p);const y=p},46530:(e,t,i)=>{function s(e){var t;const i=e.layer;return"floorInfo"in i&&null!==(t=i.floorInfo)&&void 0!==t&&t.floorField&&"floors"in e.view?o(e.view.floors,i.floorInfo.floorField):null}function r(e,t){var i;return"floorInfo"in t&&null!==(i=t.floorInfo)&&void 0!==i&&i.floorField?o(e,t.floorInfo.floorField):null}function o(e,t){if(null===e||void 0===e||!e.length)return null;const i=e.filter((e=>""!==e)).map((e=>"'".concat(e,"'")));return i.push("''"),"".concat(t," IN (").concat(i.join(","),") OR ").concat(t," IS NULL")}i.d(t,{E:()=>s,f:()=>r})},38278:(e,t,i)=>{i.d(t,{D:()=>o});var s=i(13096);const r=[];function o(e,t){var i;if((0,s.Wo)(null!==(i=e.url)&&void 0!==i?i:""))return!0;const{wkid:o}=t;for(const s of r){var n;if((null!==(n=e.version)&&void 0!==n?n:0)>=s[0])return!0;if("function"==typeof s[1]&&(s[1]=s[1]()),s[1].has(o))return!1}return!0}r.push([10.91,()=>{const e=new Set([9709,9716,9741,9761,9766]);for(let t=9712;t<=9713;t++)e.add(t);for(let t=9748;t<=9749;t++)e.add(t);for(let t=20904;t<=20932;t++)e.add(t);for(let t=21004;t<=21032;t++)e.add(t);for(let t=21207;t<=21264;t++)e.add(t);for(let t=21307;t<=21364;t++)e.add(t);for(let t=23301;t<=23333;t++)e.add(t);for(let t=102759;t<=102760;t++)e.add(t);for(let t=102934;t<=102955;t++)e.add(t);return e}]),r.push([10.9,()=>{const e=new Set([9300,9354,9364,9367,9373,9377,9387,9456,9473,9498,9678,9680,29874,103599,103872,104028]);for(let t=9356;t<=9360;t++)e.add(t);for(let t=9404;t<=9407;t++)e.add(t);for(let t=9476;t<=9482;t++)e.add(t);for(let t=9487;t<=9494;t++)e.add(t);for(let t=9697;t<=9699;t++)e.add(t);return e}]),r.push([10.81,()=>{const e=new Set([9265,9333,103598,103699]);for(let t=9248;t<=9254;t++)e.add(t);for(let t=9271;t<=9273;t++)e.add(t);for(let t=9284;t<=9285;t++)e.add(t);for(let t=21453;t<=21463;t++)e.add(t);return e}]),r.push([10.8,()=>{const e=new Set([8088,8395,8428,8433,8531,8687,8692,8694,8699,8900,9003,9006,9009,9012,9017,9191]);for(let t=8035;t<=8036;t++)e.add(t);for(let t=8455;t<=8456;t++)e.add(t);for(let t=8518;t<=8529;t++)e.add(t);for(let t=8533;t<=8536;t++)e.add(t);for(let t=8538;t<=8540;t++)e.add(t);for(let t=8677;t<=8679;t++)e.add(t);for(let t=8902;t<=8903;t++)e.add(t);for(let t=8907;t<=8910;t++)e.add(t);for(let t=8949;t<=8951;t++)e.add(t);for(let t=8972;t<=8987;t++)e.add(t);for(let t=9039;t<=9040;t++)e.add(t);for(let t=9068;t<=9069;t++)e.add(t);for(let t=9140;t<=9141;t++)e.add(t);for(let t=9148;t<=9150;t++)e.add(t);for(let t=9153;t<=9159;t++)e.add(t);for(let t=9205;t<=9218;t++)e.add(t);for(let t=9221;t<=9222;t++)e.add(t);for(let t=54098;t<=54101;t++)e.add(t);return e}]),r.push([10.71,()=>{const e=new Set([6316]);for(let t=8351;t<=8353;t++)e.add(t);for(let t=9294;t<=9297;t++)e.add(t);for(let t=22619;t<=22621;t++)e.add(t);for(let t=103586;t<=103594;t++)e.add(t);return e}])},90115:(e,t,i)=>{i.d(t,{j:()=>s});const s=(0,i(45802).O)()({esriTimeUnitsMilliseconds:"milliseconds",esriTimeUnitsSeconds:"seconds",esriTimeUnitsMinutes:"minutes",esriTimeUnitsHours:"hours",esriTimeUnitsDays:"days",esriTimeUnitsWeeks:"weeks",esriTimeUnitsMonths:"months",esriTimeUnitsYears:"years",esriTimeUnitsDecades:"decades",esriTimeUnitsCenturies:"centuries",esriTimeUnitsUnknown:void 0})}}]);
//# sourceMappingURL=8679.ce4e563b.chunk.js.map