"use strict";(self.webpackChunktyphoon=self.webpackChunktyphoon||[]).push([[6790,2945],{76790:(e,t,i)=>{i.r(t),i.d(t,{default:()=>b});var r=i(35143),n=i(3825),a=i(50076),l=i(76460),s=i(15941),o=i(77717),u=i(50346),c=i(46053),d=(i(81806),i(47249),i(85842)),p=i(20664),f=i(9392),h=i(34111),y=i(76797),m=i(13312),v=i(45308),g=i(25515),_=i(12406),A=i(19502),I=i(31362),S=i(11270),x=i(94729),w=i(5682),E=i(95363),M=i(12482);let P=class extends((0,A.b)((0,S.q)((0,x.A)((0,w.j)((0,o.P)((0,I.d)((0,_.p)(g.A)))))))){constructor(e){super(e),this.operationalLayerType="IntegratedMesh3DTilesLayer",this.spatialReference=new m.A({wkid:4326,vcsWkid:115700}),this.fullExtent=new y.A(-180,-90,180,90,this.spatialReference),this.url=null,this.type="integrated-mesh-3dtiles",this.path=null,this.minScale=0,this.maxScale=0}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}_verifyArray(e,t){if(!Array.isArray(e)||e.length<t)return!1;for(const i of e)if("number"!=typeof i)return!1;return!0}_initFullExtent(e){var t,i;const r=null===(t=e.root)||void 0===t?void 0:t.boundingVolume;if(!r)return;if(r.box){const e=null===r||void 0===r?void 0:r.box;if(e[3]>7972671&&e[7]>7972671&&e[11]>7945940)return}const n=null===(i=e.root)||void 0===i?void 0:i.transform,a=(0,f.vt)();if(r.region&&this._verifyArray(r.region,6)){const e=r.region,t=(0,s.KJ)(e[0]),i=(0,s.KJ)(e[1]),n=e[4],a=(0,s.KJ)(e[2]),l=(0,s.KJ)(e[3]),o=e[5];this.fullExtent=new y.A({xmin:t,ymin:i,zmin:n,xmax:a,ymax:l,zmax:o,spatialReference:this.spatialReference})}else if(r.sphere&&this._verifyArray(r.sphere,4)){const e=r.sphere,t=(0,f.fA)(e[0],e[1],e[2]),i=e[3]/Math.sqrt(3),l=(0,f.vt)();(0,p.f)(l,t,(0,f.fA)(i,i,i));const s=(0,f.vt)();if((0,p.g)(s,t,(0,f.fA)(i,i,i)),n&&this._verifyArray(n,16)){const e=n;(0,p.h)(a,l,e),(0,p.c)(l,a),(0,p.h)(a,s,e),(0,p.c)(s,a)}(0,v.projectBuffer)(l,h.Ro,0,l,m.A.WGS84,0,1),(0,v.projectBuffer)(s,h.Ro,0,s,m.A.WGS84,0,1);const o=(0,f.vt)(),u=(0,f.vt)();(0,p.y)(o,l,s),(0,p.C)(u,l,s),this.fullExtent=new y.A({xmin:o[0],ymin:o[1],zmin:o[2],xmax:u[0],ymax:u[1],zmax:u[2],spatialReference:this.spatialReference})}else if(r.box&&this._verifyArray(r.box,12)){const e=r.box,t=(0,f.fA)(e[0],e[1],e[2]),i=(0,f.fA)(e[3],e[4],e[5]),a=(0,f.fA)(e[6],e[7],e[8]),l=(0,f.fA)(e[9],e[10],e[11]),s=[];for(let r=0;r<8;++r)s.push((0,f.vt)());if((0,p.g)(s[0],t,i),(0,p.g)(s[0],s[0],a),(0,p.g)(s[0],s[0],l),(0,p.z)(s[1],t,i),(0,p.g)(s[1],s[1],a),(0,p.g)(s[1],s[1],l),(0,p.g)(s[2],t,i),(0,p.z)(s[2],s[2],a),(0,p.g)(s[2],s[2],l),(0,p.z)(s[3],t,i),(0,p.z)(s[3],s[3],a),(0,p.g)(s[3],s[3],l),(0,p.g)(s[4],t,i),(0,p.g)(s[4],s[4],a),(0,p.z)(s[4],s[4],l),(0,p.z)(s[5],t,i),(0,p.g)(s[5],s[5],a),(0,p.z)(s[5],s[5],l),(0,p.g)(s[6],t,i),(0,p.z)(s[6],s[6],a),(0,p.z)(s[6],s[6],l),(0,p.z)(s[7],t,i),(0,p.z)(s[7],s[7],a),(0,p.z)(s[7],s[7],l),n&&this._verifyArray(n,16)){const e=n;for(let t=0;t<8;++t)(0,p.h)(s[t],s[t],e)}const o=(0,f.fA)(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),u=(0,f.fA)(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE);for(let r=0;r<8;++r)(0,v.projectBuffer)(s[r],h.Ro,0,s[r],m.A.WGS84,0,1),(0,p.y)(u,u,s[r]),(0,p.C)(o,o,s[r]);this.fullExtent=new y.A({xmin:u[0],ymin:u[1],zmin:u[2],xmax:o[0],ymax:o[1],zmax:o[2],spatialReference:this.spatialReference})}}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const t=null!=e?e.signal:null;try{await this.loadFromPortal({supportedTypes:["3DTiles Service"],validateItem:e=>{var t;if(null!==(t=e.typeKeywords)&&void 0!==t&&t.includes("IntegratedMesh"))return!0;throw new a.A("portal:invalid-layer-item-type","Invalid layer item, expected '${expectedType}' ",{expectedType:"3DTiles Service containing IntegratedMesh"})}},e)}catch(i){(0,u.QP)(i)}if(this.url){const e=(0,n.A)(this.url,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:t}).then((e=>{this._initFullExtent(e.data)}),(e=>{(0,u.QP)(e)}));await e}}async fetchAttributionData(){return this.load().then((()=>({})))}_validateElevationInfo(){const e=this.elevationInfo,t="Integrated mesh 3d tiles layers";(0,M.XF)(l.A.getLogger(this),(0,M.B)(t,"absolute-height",e)),(0,M.XF)(l.A.getLogger(this),(0,M.tW)(t,e))}};(0,r._)([(0,c.MZ)({type:["IntegratedMesh3DTilesLayer"]})],P.prototype,"operationalLayerType",void 0),(0,r._)([(0,c.MZ)({type:m.A})],P.prototype,"spatialReference",void 0),(0,r._)([(0,c.MZ)({type:y.A})],P.prototype,"fullExtent",void 0),(0,r._)([(0,c.MZ)(E.Yj)],P.prototype,"elevationInfo",null),(0,r._)([(0,c.MZ)({type:["show","hide"]})],P.prototype,"listMode",void 0),(0,r._)([(0,c.MZ)(E.OZ)],P.prototype,"url",void 0),(0,r._)([(0,c.MZ)({readOnly:!0})],P.prototype,"type",void 0),(0,r._)([(0,c.MZ)({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],P.prototype,"path",void 0),(0,r._)([(0,c.MZ)({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:!1,write:!1}}}})],P.prototype,"minScale",void 0),(0,r._)([(0,c.MZ)({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:!1,write:!1}}}})],P.prototype,"maxScale",void 0),P=(0,r._)([(0,d.$)("esri.layers.IntegratedMesh3DTilesLayer")],P);const b=P},12406:(e,t,i)=>{i.d(t,{p:()=>l});var r=i(35143),n=i(46053),a=(i(81806),i(76460),i(47249),i(85842));const l=e=>{let t=class extends e{get apiKey(){var e;return this._isOverridden("apiKey")?this._get("apiKey"):function(e){return"portalItem"in e}(this)?null===(e=this.portalItem)||void 0===e?void 0:e.apiKey:null}set apiKey(e){null!=e?this._override("apiKey",e):(this._clearOverride("apiKey"),this.clear("apiKey","user"))}};return(0,r._)([(0,n.MZ)({type:String})],t.prototype,"apiKey",null),t=(0,r._)([(0,a.$)("esri.layers.mixins.APIKeyMixin")],t),t}},19502:(e,t,i)=>{i.d(t,{b:()=>o});var r=i(35143),n=i(76460),a=i(46053),l=(i(81806),i(47249),i(85842)),s=i(13096);const o=e=>{let t=class extends e{get title(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){const e=(0,s.qg)(this.url);if(null!=e&&e.title)return e.title}return this._get("title")||""}set title(e){this._set("title",e)}set url(e){this._set("url",(0,s.Jf)(e,n.A.getLogger(this)))}};return(0,r._)([(0,a.MZ)()],t.prototype,"title",null),(0,r._)([(0,a.MZ)({type:String})],t.prototype,"url",null),t=(0,r._)([(0,l.$)("esri.layers.mixins.ArcGISService")],t),t}},31362:(e,t,i)=>{i.d(t,{d:()=>l});var r=i(35143),n=i(46053),a=(i(81806),i(76460),i(47249),i(85842));const l=e=>{let t=class extends e{constructor(){super(...arguments),this.customParameters=null}};return(0,r._)([(0,n.MZ)({type:Object,json:{write:{overridePolicy:e=>({enabled:!!(e&&Object.keys(e).length>0)})}}})],t.prototype,"customParameters",void 0),t=(0,r._)([(0,a.$)("esri.layers.mixins.CustomParametersMixin")],t),t}},94729:(e,t,i)=>{i.d(t,{A:()=>S});var r=i(35143),n=i(86560),a=i(55171),l=i(3825),s=i(98773),o=i(50076),u=i(76460),c=i(30726),d=i(50346),p=i(90534),f=i(46053),h=(i(81806),i(47249),i(28379)),y=i(85842),m=i(17707),v=i(31933),g=i(65308),_=i(70652),A=i(38665),I=i(72945);const S=e=>{let t=class extends e{constructor(){super(...arguments),this.resourceReferences={portalItem:null,paths:[]},this.userHasEditingPrivileges=!0,this.userHasFullEditingPrivileges=!1,this.userHasUpdateItemPrivileges=!1}destroy(){this.portalItem=(0,c.pR)(this.portalItem),this.resourceReferences.portalItem=null,this.resourceReferences.paths.length=0}set portalItem(e){e!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",e))}readPortalItem(e,t,i){if(t.itemId)return new _.default({id:t.itemId,portal:null===i||void 0===i?void 0:i.portal})}writePortalItem(e,t){(null===e||void 0===e?void 0:e.id)&&(t.itemId=e.id)}async loadFromPortal(e,t){var r;if(null!==(r=this.portalItem)&&void 0!==r&&r.id)try{const{load:r}=await Promise.all([i.e(2487),i.e(3814)]).then(i.bind(i,73814));return(0,d.Te)(t),await r({instance:this,supportedTypes:e.supportedTypes,validateItem:e.validateItem,supportsData:e.supportsData,layerModuleTypeMap:e.layerModuleTypeMap},t)}catch(n){throw(0,d.zf)(n)||u.A.getLogger(this).warn("Failed to load layer (".concat(this.title,", ").concat(this.id,") portal item (").concat(this.portalItem.id,")\n  ").concat(n)),n}}async finishLoadEditablePortalLayer(e){this._set("userHasEditingPrivileges",await this._fetchUserHasEditingPrivileges(e).catch((e=>((0,d.QP)(e),!0))))}async setUserPrivileges(e,t){if(!n.A.userPrivilegesApplied)return this.finishLoadEditablePortalLayer(t);if(this.url)try{const{features:{edit:i,fullEdit:r},content:{updateItem:n}}=await this._fetchUserPrivileges(e,t);this._set("userHasEditingPrivileges",i),this._set("userHasFullEditingPrivileges",r),this._set("userHasUpdateItemPrivileges",n)}catch(i){(0,d.QP)(i)}}async _fetchUserPrivileges(e,t){let i=this.portalItem;if(!e||!i||!i.loaded||i.sourceUrl)return this._fetchFallbackUserPrivileges(t);const r=e===i.id;if(r&&i.portal.user)return(0,I.It)(i);let n,l;if(r)n=i.portal.url;else try{n=await(0,v.wI)(this.url,t)}catch(c){(0,d.QP)(c)}if(!n||!(0,p.b8)(n,i.portal.url))return this._fetchFallbackUserPrivileges(t);try{const e=null!=t?t.signal:null;l=await(null===a.id||void 0===a.id?void 0:a.id.getCredential("".concat(n,"/sharing"),{prompt:!1,signal:e}))}catch(c){(0,d.QP)(c)}const s=!0,o=!1,u=!1;if(!l)return{features:{edit:s,fullEdit:o},content:{updateItem:u}};try{if(r?await i.reload():(i=new _.default({id:e,portal:{url:n}}),await i.load(t)),i.portal.user)return(0,I.It)(i)}catch(c){(0,d.QP)(c)}return{features:{edit:s,fullEdit:o},content:{updateItem:u}}}async _fetchFallbackUserPrivileges(e){let t=!0;try{t=await this._fetchUserHasEditingPrivileges(e)}catch(i){(0,d.QP)(i)}return{features:{edit:t,fullEdit:!1},content:{updateItem:!1}}}async _fetchUserHasEditingPrivileges(e){const t=this.url?null===a.id||void 0===a.id?void 0:a.id.findCredential(this.url):null;if(!t)return!0;const i=x.credential===t?x.user:await this._fetchEditingUser(e);return x.credential=t,x.user=i,null==(null===i||void 0===i?void 0:i.privileges)||i.privileges.includes("features:user:edit")}async _fetchEditingUser(e){var t,i;const r=null===(t=this.portalItem)||void 0===t||null===(t=t.portal)||void 0===t?void 0:t.user;if(r)return r;const n=null===a.id||void 0===a.id?void 0:a.id.findServerInfo(null!==(i=this.url)&&void 0!==i?i:"");if(null===n||void 0===n||!n.owningSystemUrl)return null;const o="".concat(n.owningSystemUrl,"/sharing/rest"),u=g.A.getDefault();if(u&&u.loaded&&(0,p.S8)(u.restUrl)===(0,p.S8)(o))return u.user;const c="".concat(o,"/community/self"),d=null!=e?e.signal:null,f=await(0,s.Ke)((0,l.A)(c,{authMode:"no-prompt",query:{f:"json"},signal:d}));return f.ok?A.A.fromJSON(f.value.data):null}read(e,t){t&&(t.layer=this),super.read(e,t)}write(e,t){var i;const r=null===t||void 0===t?void 0:t.portal,n=(null===(i=this.portalItem)||void 0===i?void 0:i.id)&&(this.portalItem.portal||g.A.getDefault());return r&&n&&!(0,p.ut)(n.restUrl,r.restUrl)?(t.messages&&t.messages.push(new o.A("layer:cross-portal","The layer '".concat(this.title," (").concat(this.id,")' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save, set layer.portalItem to null or save to the same portal as the item associated with the layer"),{layer:this})),null):super.write(e,{...t,layer:this})}};return(0,r._)([(0,f.MZ)({type:_.default})],t.prototype,"portalItem",null),(0,r._)([(0,h.w)("web-document","portalItem",["itemId"])],t.prototype,"readPortalItem",null),(0,r._)([(0,m.K)("web-document","portalItem",{itemId:{type:String}})],t.prototype,"writePortalItem",null),(0,r._)([(0,f.MZ)({clonable:!1})],t.prototype,"resourceReferences",void 0),(0,r._)([(0,f.MZ)({type:Boolean,readOnly:!0})],t.prototype,"userHasEditingPrivileges",void 0),(0,r._)([(0,f.MZ)({type:Boolean,readOnly:!0})],t.prototype,"userHasFullEditingPrivileges",void 0),(0,r._)([(0,f.MZ)({type:Boolean,readOnly:!0})],t.prototype,"userHasUpdateItemPrivileges",void 0),t=(0,r._)([(0,y.$)("esri.layers.mixins.PortalLayer")],t),t},x={credential:null,user:null}},5682:(e,t,i)=>{i.d(t,{j:()=>l});var r=i(35143),n=i(46053),a=(i(81806),i(76460),i(47249),i(85842));const l=e=>{let t=class extends e{constructor(){super(...arguments),this.minScale=0,this.maxScale=0}get effectiveScaleRange(){const e={minScale:this.minScale,maxScale:this.maxScale},t=this.parent;t&&"effectiveScaleRange"in t&&function(e,t){e.minScale=e.minScale>0?t.minScale>0?Math.min(e.minScale,t.minScale):e.minScale:t.minScale,e.maxScale=e.maxScale>0?t.maxScale>0?Math.max(e.maxScale,t.maxScale):e.maxScale:t.maxScale}(e,t.effectiveScaleRange);const i=this._get("effectiveScaleRange");return i&&i.minScale===e.minScale&&i.maxScale===e.maxScale?i:e}};return(0,r._)([(0,n.MZ)({type:Number,nonNullable:!0,json:{write:!0}})],t.prototype,"minScale",void 0),(0,r._)([(0,n.MZ)({type:Number,nonNullable:!0,json:{write:!0}})],t.prototype,"maxScale",void 0),(0,r._)([(0,n.MZ)({readOnly:!0})],t.prototype,"effectiveScaleRange",null),t=(0,r._)([(0,a.$)("esri.layers.mixins.ScaleRangeLayer")],t),t}},72945:(e,t,i)=>{i.d(t,{It:()=>p,LG:()=>l,OM:()=>u,Y:()=>s,bK:()=>o,mm:()=>d,sQ:()=>c});var r=i(26346),n=i(13312),a=i(45417);function l(e,t){if(!s(e,t)){const i=e.typeKeywords;i?i.push(t):e.typeKeywords=[t]}}function s(e,t){var i;return!(null===(i=e.typeKeywords)||void 0===i||!i.includes(t))}function o(e){return s(e,d.HOSTED_SERVICE)}function u(e,t){const i=e.typeKeywords;if(i){const e=i.indexOf(t);e>-1&&i.splice(e,1)}}async function c(e){const t=e.clone().normalize();let i;if(t.length>1)for(const r of t)i?r.width>i.width&&(i=r):i=r;else i=t[0];return async function(e){const t=e.spatialReference;if(t.isWGS84)return e.clone();if(t.isWebMercator)return(0,a.ci)(e);const i=n.A.WGS84;return await(0,r.initializeProjection)(t,i),(0,r.project)(e,i)}(i)}const d={DEVELOPER_BASEMAP:"DeveloperBasemap",JSAPI:"ArcGIS API for JavaScript",METADATA:"Metadata",MULTI_LAYER:"Multilayer",SINGLE_LAYER:"Singlelayer",TABLE:"Table",HOSTED_SERVICE:"Hosted Service",LOCAL_SCENE:"ViewingMode-Local",TILED_IMAGERY:"Tiled Imagery",GROUP_LAYER_MAP:"Map"};function p(e){var t;const{portal:i,isOrgItem:r,itemControl:n}=e,a=null===(t=i.user)||void 0===t?void 0:t.privileges;let l=!a||a.includes("features:user:edit"),s=!!r&&!(null===a||void 0===a||!a.includes("features:user:fullEdit"));const o="update"===n||"admin"===n;return o?s=l=!0:s&&(l=!0),{features:{edit:l,fullEdit:s},content:{updateItem:o}}}},12482:(e,t,i)=>{i.d(t,{$7:()=>s,B:()=>l,M7:()=>c,XF:()=>u,tW:()=>o,w7:()=>a});i(31633);var r=i(59097);function n(e){return e?d:p}function a(e,t){return function(e,t){return null!==t&&void 0!==t&&t.mode?t.mode:n(e).mode}(null!=e&&e.hasZ,t)}function l(e,t,i){return i&&i.mode!==t?"".concat(e," only support ").concat(t," elevation mode"):null}function s(e,t,i){return(null===i||void 0===i?void 0:i.mode)===t?"".concat(e," do not support ").concat(t," elevation mode"):null}function o(e,t){return null!=(null===t||void 0===t?void 0:t.featureExpressionInfo)&&"0"!==t.featureExpressionInfo.expression?"".concat(e," do not support featureExpressionInfo"):null}function u(e,t){t&&e.warn(".elevationInfo=",t)}function c(e){var t;return(null!==(t=null===e||void 0===e?void 0:e.offset)&&void 0!==t?t:0)*(0,r.Ao)(null===e||void 0===e?void 0:e.unit)}const d={mode:"absolute-height",offset:0},p={mode:"on-the-ground",offset:null}}}]);
//# sourceMappingURL=6790.91030e3b.chunk.js.map