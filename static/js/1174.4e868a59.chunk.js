"use strict";(self.webpackChunktyphoon=self.webpackChunktyphoon||[]).push([[1174],{71174:(e,t,r)=>{r.r(t),r.d(t,{default:()=>P});var l,i=r(35143),a=r(3825),s=r(50076),o=r(27741),n=r(77717),c=r(50346),p=r(90534),u=r(46053),h=r(21403),d=(r(47249),r(81806),r(28379)),v=r(85842),y=r(17707),f=r(13312),m=r(25515),_=r(12406),g=r(76328),S=r(36648),w=r(19502),b=r(65624),T=r(31362),A=r(11270),M=r(94729),O=r(21617),L=r(5682),D=r(73907),I=r(13096),Z=r(95363),x=r(16852),C=r(39568);const R=["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Elevation/World_Hillshade_Dark","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"];let k=l=class extends((0,b.dM)((0,L.j)((0,D.I)((0,g.f)((0,S.V)((0,A.q)((0,M.A)((0,w.b)((0,n.P)((0,O.J)((0,_.p)((0,T.d)(m.A))))))))))))){constructor(){super(...arguments),this.listMode="show",this.isReference=null,this.operationalLayerType="ArcGISTiledMapServiceLayer",this.resampling=!0,this.sourceJSON=null,this.spatialReference=null,this.path=null,this.sublayers=null,this.type="tile",this.url=null}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){const t=null!=e?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(c.QP).then((()=>this._fetchService(t)))),Promise.resolve(this)}get attributionDataUrl(){var e;const t=null===(e=this.parsedUrl)||void 0===e?void 0:e.path.toLowerCase();return t?this._getDefaultAttribution(this._getMapName(t)):null}readSpatialReference(e,t){var r;return(e=e||(null===(r=t.tileInfo)||void 0===r?void 0:r.spatialReference))&&f.A.fromJSON(e)}writeSublayers(e,t,r,l){if(!this.loaded||!e)return;const i=e.slice().reverse().flatten((e=>{let{sublayers:t}=e;return t&&t.toArray().reverse()})).toArray(),a=[],s={writeSublayerStructure:!1,...l};i.forEach((e=>{const t=e.write({},s);a.push(t)})),a.some((e=>Object.keys(e).length>1))&&(t.layers=a)}get tileServers(){var e;return this._getDefaultTileServers(null===(e=this.parsedUrl)||void 0===e?void 0:e.path)}castTileServers(e){return Array.isArray(e)?e.map((e=>(0,p.An)(e).path)):null}fetchTile(e,t,r){let l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const{signal:i}=l,s=this.getTileUrl(e,t,r),o={responseType:"image",signal:i,query:{...this.refreshParameters}};return(0,a.A)(s,o).then((e=>e.data))}async fetchImageBitmapTile(e,t,r){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const{signal:s}=i;if(this.fetchTile!==l.prototype.fetchTile){const l=await this.fetchTile(e,t,r,i);return(0,x.C)(l,e,t,r,s)}const o=this.getTileUrl(e,t,r),n={responseType:"blob",signal:s,query:{...this.refreshParameters}},{data:c}=await(0,a.A)(o,n);return(0,x.C)(c,e,t,r,s)}getTileUrl(e,t,r){var l,i;const a=!this.capabilities.operations.supportsTileMap&&this.supportsBlankTile,s=(0,p.x0)({...null===(l=this.parsedUrl)||void 0===l?void 0:l.query,blankTile:!a&&null,...this.customParameters,token:this.apiKey}),o=this.tileServers;return"".concat(o&&o.length?o[t%o.length]:null===(i=this.parsedUrl)||void 0===i?void 0:i.path,"/tile/").concat(e,"/").concat(t,"/").concat(r).concat(s?"?"+s:"")}loadAll(){return(0,o.g)(this,(e=>{e(this.allSublayers)}))}_fetchService(e){return new Promise(((t,r)=>{if(this.sourceJSON){if(null!=this.sourceJSON.bandCount&&null!=this.sourceJSON.pixelSizeX)throw new s.A("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");return void t({data:this.sourceJSON})}if(!this.parsedUrl)throw new s.A("tile-layer:undefined-url","layer's url is not defined");const l=(0,I.qg)(this.parsedUrl.path);if(null!=l&&"ImageServer"===l.serverType)throw new s.A("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");(0,a.A)(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},responseType:"json",signal:e}).then(t,r)})).then((t=>{let r=this.url;if(t.ssl&&(r=this.url=r.replace(/^http:/i,"https:")),this.sourceJSON=t.data,this.read(t.data,{origin:"service",url:this.parsedUrl}),10.1===this.version&&!(0,I.Wo)(r))return this._fetchServerVersion(r,e).then((e=>{this.read({currentVersion:e})})).catch((()=>{}))}))}_fetchServerVersion(e,t){if(!(0,I.Fi)(e))return Promise.reject();const r=e.replace(/(.*\/rest)\/.*/i,"$1")+"/info";return(0,a.A)(r,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:t}).then((e=>{if(e.data&&e.data.currentVersion)return e.data.currentVersion;throw new s.A("tile-layer:version-not-available")}))}_getMapName(e){const t=e.match(/^(?:https?:)?\/\/(server\.arcgisonline\.com|services\.arcgisonline\.com|ibasemaps-api\.arcgis\.com)\/arcgis\/rest\/services\/([^/]+(\/[^/]+)*)\/mapserver/i);return t?t[2]:void 0}_getDefaultAttribution(e){if(null==e)return null;let t;e=e.toLowerCase();for(let r=0,l=R.length;r<l;r++)if(t=R[r],t.toLowerCase().includes(e))return(0,p.s2)("//static.arcgis.com/attribution/"+t);return null}_getDefaultTileServers(e){if(null==e)return[];const t=-1!==e.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i),r=-1!==e.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i);return t||r?[e,e.replace(t?/server\.arcgisonline/i:/services\.arcgisonline/i,t?"services.arcgisonline":"server.arcgisonline")]:[]}get hasOverriddenFetchTile(){return!this.fetchTile[U]}};(0,i._)([(0,u.MZ)({readOnly:!0})],k.prototype,"attributionDataUrl",null),(0,i._)([(0,u.MZ)({type:["show","hide","hide-children"]})],k.prototype,"listMode",void 0),(0,i._)([(0,u.MZ)({json:{read:!0,write:!0}})],k.prototype,"blendMode",void 0),(0,i._)([(0,u.MZ)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],k.prototype,"isReference",void 0),(0,i._)([(0,u.MZ)({readOnly:!0,type:["ArcGISTiledMapServiceLayer"]})],k.prototype,"operationalLayerType",void 0),(0,i._)([(0,u.MZ)({type:Boolean})],k.prototype,"resampling",void 0),(0,i._)([(0,u.MZ)()],k.prototype,"sourceJSON",void 0),(0,i._)([(0,u.MZ)({type:f.A})],k.prototype,"spatialReference",void 0),(0,i._)([(0,d.w)("spatialReference",["spatialReference","tileInfo"])],k.prototype,"readSpatialReference",null),(0,i._)([(0,u.MZ)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],k.prototype,"path",void 0),(0,i._)([(0,u.MZ)({readOnly:!0})],k.prototype,"sublayers",void 0),(0,i._)([(0,y.K)("sublayers",{layers:{type:[C.A]}})],k.prototype,"writeSublayers",null),(0,i._)([(0,u.MZ)({json:{read:!1,write:!1}})],k.prototype,"popupEnabled",void 0),(0,i._)([(0,u.MZ)()],k.prototype,"tileServers",null),(0,i._)([(0,h.w)("tileServers")],k.prototype,"castTileServers",null),(0,i._)([(0,u.MZ)({readOnly:!0,json:{read:!1}})],k.prototype,"type",void 0),(0,i._)([(0,u.MZ)(Z.OZ)],k.prototype,"url",void 0),k=l=(0,i._)([(0,v.$)("esri.layers.TileLayer")],k);const U=Symbol("default-fetch-tile");k.prototype.fetchTile[U]=!0;const P=k},76328:(e,t,r)=>{r.d(t,{f:()=>u});var l=r(35143),i=(r(35238),r(46053)),a=(r(81806),r(76460),r(47249),r(28379)),s=r(85842),o=r(88235),n=r(44067),c=r(82356),p=r(13312);const u=e=>{let t=class extends e{constructor(){super(...arguments),this.copyright=null,this.minScale=0,this.maxScale=0,this.spatialReference=null,this.tileInfo=null,this.tilemapCache=null}destroy(){var e,t;null===(e=this.tilemapCache)||void 0===e||null===(t=e.destroy)||void 0===t||t.call(e)}readMinScale(e,t){return null!=t.minLOD&&null!=t.maxLOD?e:0}readMaxScale(e,t){return null!=t.minLOD&&null!=t.maxLOD?e:0}get supportsBlankTile(){return this.version>=10.2}readTilemapCache(e,t,r){var l;const i=null===(l=t.capabilities)||void 0===l?void 0:l.includes("Tilemap");let{minLOD:a,maxLOD:s,minScale:p,maxScale:u}=t;if(null==a&&null==s&&0!==p&&0!==u){const e=e=>Math.round(1e4*e)/1e4;p=e(p||t.tileInfo.lods[0].scale),u=e(u||t.tileInfo.lods[t.tileInfo.lods.length-1].scale);for(const r of t.tileInfo.lods){const t=e(r.scale);a=t>=p?r.level:a,s=t>=u?r.level:s}}if(i)return new c.d({layer:this,minLOD:a,maxLOD:s});if(t.tileInfo){const e=new o.A;return e.read(t.tileInfo,r),new n.A(e,a,s)}return null}};return(0,l._)([(0,i.MZ)({json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),(0,l._)([(0,i.MZ)()],t.prototype,"minScale",void 0),(0,l._)([(0,a.w)("service","minScale")],t.prototype,"readMinScale",null),(0,l._)([(0,i.MZ)()],t.prototype,"maxScale",void 0),(0,l._)([(0,a.w)("service","maxScale")],t.prototype,"readMaxScale",null),(0,l._)([(0,i.MZ)({type:p.A})],t.prototype,"spatialReference",void 0),(0,l._)([(0,i.MZ)({readOnly:!0})],t.prototype,"supportsBlankTile",null),(0,l._)([(0,i.MZ)({type:o.A})],t.prototype,"tileInfo",void 0),(0,l._)([(0,i.MZ)()],t.prototype,"tilemapCache",void 0),(0,l._)([(0,a.w)("service","tilemapCache",["capabilities","tileInfo"])],t.prototype,"readTilemapCache",null),(0,l._)([(0,i.MZ)()],t.prototype,"version",void 0),t=(0,l._)([(0,s.$)("esri.layers.mixins.ArcGISCachedService")],t),t}},44067:(e,t,r)=>{r.d(t,{A:()=>a});var l=r(50076),i=r(50346);class a{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e.lods[e.lods.length-1].level;this.tileInfo=e,this.minLOD=t,this.maxLOD=r,e.lodAt(t)||(this.minLOD=e.lods[0].level),e.lodAt(r)||(this.maxLOD=e.lods[e.lods.length-1].level)}get effectiveMinLOD(){var e;return null!==(e=this.minLOD)&&void 0!==e?e:this.tileInfo.lods[0].level}get effectiveMaxLOD(){var e;return null!==(e=this.maxLOD)&&void 0!==e?e:this.tileInfo.lods[this.tileInfo.lods.length-1].level}getAvailability(e,t,r){var l;const i=null===(l=this.tileInfo)||void 0===l?void 0:l.lodAt(e);return!i||e<this.minLOD||e>this.maxLOD?"unavailable":i.cols&&i.rows?r>=i.cols[0]&&r<=i.cols[1]&&t>=i.rows[0]&&t<=i.rows[1]?"unknown":"unavailable":"unknown"}async fetchAvailability(e,t,r,a){await(0,i.NO)(a);const s=this.getAvailability(e,t,r);if("unavailable"===s)throw new l.A("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:r});return s}async fetchAvailabilityUpsample(e,t,r,l,a){await(0,i.NO)(a),l.level=e,l.row=t,l.col=r;const s=this.tileInfo;return s.updateTileInfo(l),this.fetchAvailability(e,t,r,a).catch((e=>{if((0,i.zf)(e))throw e;if(s.upsampleTile(l))return this.fetchAvailabilityUpsample(l.level,l.row,l.col,l,a);throw e}))}}}}]);
//# sourceMappingURL=1174.4e868a59.chunk.js.map