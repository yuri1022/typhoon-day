"use strict";(self.webpackChunktyphoon=self.webpackChunktyphoon||[]).push([[2551,2945],{52551:(e,t,r)=>{r.r(t),r.d(t,{default:()=>L});var i=r(35143),s=r(86560),a=r(3825),n=(r(95444),r(77717)),o=r(50346),l=r(90534),c=r(46053),u=(r(81806),r(76460),r(47249),r(28379)),d=r(85842),p=r(76797),h=r(80963),f=r(25515),y=r(65624),m=r(11270),v=r(94729),g=r(21617),S=r(5682),w=r(95363),_=r(25900),I=r(7246),b=r(27410),M=r(76940),P=r(86875);const E=["atom","xml"],A={base:_.A,key:"type",typeMap:{"simple-line":I.A},errorContext:"symbol"},x={base:_.A,key:"type",typeMap:{"picture-marker":b.A,"simple-marker":M.A},errorContext:"symbol"},R={base:_.A,key:"type",typeMap:{"simple-fill":P.A},errorContext:"symbol"};let C=class extends((0,y.dM)((0,g.J)((0,m.q)((0,v.A)((0,S.j)((0,n.P)(f.A))))))){constructor(){super(...arguments),this.description=null,this.fullExtent=null,this.legendEnabled=!0,this.lineSymbol=null,this.pointSymbol=null,this.polygonSymbol=null,this.operationalLayerType="GeoRSS",this.url=null,this.type="geo-rss"}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}readFeatureCollections(e,t){return t.featureCollection.layers.forEach((e=>{var t;const r=e.layerDefinition.drawingInfo.renderer.symbol;r&&"esriSFS"===r.type&&(null===(t=r.outline)||void 0===t?void 0:t.style.includes("esriSFS"))&&(r.outline.style="esriSLSSolid")})),t.featureCollection.layers}get hasPoints(){return this._hasGeometry("esriGeometryPoint")}get hasPolylines(){return this._hasGeometry("esriGeometryPolyline")}get hasPolygons(){return this._hasGeometry("esriGeometryPolygon")}get title(){const e=this._get("title");return e&&"defaults"!==this.originOf("title")?e:this.url?(0,l.e7)(this.url,E)||"GeoRSS":e}set title(e){this._set("title",e)}load(e){const t=null!=e?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},e).catch(o.QP).then((()=>this._fetchService(t))).then((e=>{this.read(e,{origin:"service"})}))),Promise.resolve(this)}async hasDataChanged(){const e=await this._fetchService();return this.read(e,{origin:"service",ignoreDefaults:!0}),!0}async _fetchService(e){var t;const r=this.spatialReference,{data:i}=await(0,a.A)(s.A.geoRSSServiceUrl,{query:{url:this.url,refresh:!!this.loaded||void 0,outSR:(0,h.oT)(r)?void 0:null!==(t=r.wkid)&&void 0!==t?t:JSON.stringify(r)},signal:e});return i}_hasGeometry(e){var t,r;return null!==(t=null===(r=this.featureCollections)||void 0===r?void 0:r.some((t=>{var r,i;return(null===(r=t.featureSet)||void 0===r?void 0:r.geometryType)===e&&(null===(i=t.featureSet.features)||void 0===i?void 0:i.length)>0})))&&void 0!==t&&t}};(0,i._)([(0,c.MZ)()],C.prototype,"description",void 0),(0,i._)([(0,c.MZ)()],C.prototype,"featureCollections",void 0),(0,i._)([(0,u.w)("service","featureCollections",["featureCollection.layers"])],C.prototype,"readFeatureCollections",null),(0,i._)([(0,c.MZ)({type:p.A,json:{name:"lookAtExtent"}})],C.prototype,"fullExtent",void 0),(0,i._)([(0,c.MZ)(w.id)],C.prototype,"id",void 0),(0,i._)([(0,c.MZ)(w.fV)],C.prototype,"legendEnabled",void 0),(0,i._)([(0,c.MZ)({types:A,json:{write:!0}})],C.prototype,"lineSymbol",void 0),(0,i._)([(0,c.MZ)({type:["show","hide"]})],C.prototype,"listMode",void 0),(0,i._)([(0,c.MZ)({types:x,json:{write:!0}})],C.prototype,"pointSymbol",void 0),(0,i._)([(0,c.MZ)({types:R,json:{write:!0}})],C.prototype,"polygonSymbol",void 0),(0,i._)([(0,c.MZ)({type:["GeoRSS"]})],C.prototype,"operationalLayerType",void 0),(0,i._)([(0,c.MZ)(w.OZ)],C.prototype,"url",void 0),(0,i._)([(0,c.MZ)({json:{origins:{service:{read:{source:"name",reader:e=>e||void 0}}}}})],C.prototype,"title",null),(0,i._)([(0,c.MZ)({readOnly:!0,json:{read:!1},value:"geo-rss"})],C.prototype,"type",void 0),C=(0,i._)([(0,d.$)("esri.layers.GeoRSSLayer")],C);const L=C},44081:(e,t,r)=>{r.d(t,{LF:()=>o,M9:()=>l,zu:()=>c});var i=r(50076),s=r(48611),a=r(7847),n=r(58503);function o(e,t,r){try{return function(e){if(!e||0===e.length)return null;if(function(e){const t=e[0];return!!t&&"scale"in t}(e)){const t=[];for(const r of e)t.push({scale:r.scale,value:c(r.value)});return t}return c(e)}(e)}catch(s){var i;null===r||void 0===r||null===(i=r.messages)||void 0===i||i.push(s)}return null}function l(e,t,r,i){try{const i=function(e){const t=(0,a.q)(e);return t?(0,n.dw)(t)?t.map((e=>e.toJSON())):t.map((e=>{let{scale:t,effects:r}=e;return{scale:t,value:r.map((e=>e.toJSON()))}})):null}(e);(0,s.sM)(r,i,t)}catch(l){i.messages&&i.messages.push(l)}}function c(e){if(null===e||void 0===e||!e.length)return"";const t=[];for(const r of e){let e=[];switch(r.type){case"grayscale":case"sepia":case"saturate":case"invert":case"brightness":case"contrast":case"opacity":e=[u(r,"amount")];break;case"blur":e=[u(r,"radius","pt")];break;case"hue-rotate":e=[u(r,"angle","deg")];break;case"drop-shadow":e=[u(r,"xoffset","pt"),u(r,"yoffset","pt"),u(r,"blurRadius","pt"),d(r,"color")];break;case"bloom":e=[u(r,"strength"),u(r,"radius","pt"),u(r,"threshold")]}const i="".concat(r.type,"(").concat(e.filter(Boolean).join(" "),")");(0,a.q)(i),t.push(i)}return t.join(" ")}function u(e,t,r){if(null==e[t])throw new i.A("effect:missing-parameter","Missing parameter '".concat(t,"' in ").concat(e.type," effect"),{effect:e});return r?e[t]+r:""+e[t]}function d(e,t){if(null==e[t])throw new i.A("effect:missing-parameter","Missing parameter '".concat(t,"' in ").concat(e.type," effect"),{effect:e});const r=e[t];return"rgba(".concat(r[0]||0,", ").concat(r[1]||0,", ").concat(r[2]||0,", ").concat(r[3]/255||0,")")}},65624:(e,t,r)=>{r.d(t,{LF:()=>c,dM:()=>u,sU:()=>o});var i=r(35143),s=r(46053),a=(r(81806),r(76460),r(47249),r(85842)),n=r(44081);const o={type:["average","color-burn","color-dodge","color","darken","destination-atop","destination-in","destination-out","destination-over","difference","exclusion","hard-light","hue","invert","lighten","lighter","luminosity","minus","multiply","normal","overlay","plus","reflect","saturation","screen","soft-light","source-atop","source-in","source-out","vivid-light","xor"],nonNullable:!0,json:{read:!1,write:!1,origins:{"web-map":{read:!0,write:!0},"portal-item":{read:!0,write:!0}}}},l={read:{reader:n.LF},write:{allowNull:!0,writer:n.M9}},c={json:{read:!1,write:!1,origins:{"web-map":l,"portal-item":l}}},u=e=>{let t=class extends e{constructor(){super(...arguments),this.blendMode="normal",this.effect=null}};return(0,i._)([(0,s.MZ)(o)],t.prototype,"blendMode",void 0),(0,i._)([(0,s.MZ)(c)],t.prototype,"effect",void 0),t=(0,i._)([(0,a.$)("esri.layers.mixins.BlendLayer")],t),t}},94729:(e,t,r)=>{r.d(t,{A:()=>I});var i=r(35143),s=r(86560),a=r(55171),n=r(3825),o=r(98773),l=r(50076),c=r(76460),u=r(30726),d=r(50346),p=r(90534),h=r(46053),f=(r(81806),r(47249),r(28379)),y=r(85842),m=r(17707),v=r(31933),g=r(65308),S=r(70652),w=r(38665),_=r(72945);const I=e=>{let t=class extends e{constructor(){super(...arguments),this.resourceReferences={portalItem:null,paths:[]},this.userHasEditingPrivileges=!0,this.userHasFullEditingPrivileges=!1,this.userHasUpdateItemPrivileges=!1}destroy(){this.portalItem=(0,u.pR)(this.portalItem),this.resourceReferences.portalItem=null,this.resourceReferences.paths.length=0}set portalItem(e){e!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",e))}readPortalItem(e,t,r){if(t.itemId)return new S.default({id:t.itemId,portal:null===r||void 0===r?void 0:r.portal})}writePortalItem(e,t){(null===e||void 0===e?void 0:e.id)&&(t.itemId=e.id)}async loadFromPortal(e,t){var i;if(null!==(i=this.portalItem)&&void 0!==i&&i.id)try{const{load:i}=await Promise.all([r.e(2487),r.e(3814)]).then(r.bind(r,73814));return(0,d.Te)(t),await i({instance:this,supportedTypes:e.supportedTypes,validateItem:e.validateItem,supportsData:e.supportsData,layerModuleTypeMap:e.layerModuleTypeMap},t)}catch(s){throw(0,d.zf)(s)||c.A.getLogger(this).warn("Failed to load layer (".concat(this.title,", ").concat(this.id,") portal item (").concat(this.portalItem.id,")\n  ").concat(s)),s}}async finishLoadEditablePortalLayer(e){this._set("userHasEditingPrivileges",await this._fetchUserHasEditingPrivileges(e).catch((e=>((0,d.QP)(e),!0))))}async setUserPrivileges(e,t){if(!s.A.userPrivilegesApplied)return this.finishLoadEditablePortalLayer(t);if(this.url)try{const{features:{edit:r,fullEdit:i},content:{updateItem:s}}=await this._fetchUserPrivileges(e,t);this._set("userHasEditingPrivileges",r),this._set("userHasFullEditingPrivileges",i),this._set("userHasUpdateItemPrivileges",s)}catch(r){(0,d.QP)(r)}}async _fetchUserPrivileges(e,t){let r=this.portalItem;if(!e||!r||!r.loaded||r.sourceUrl)return this._fetchFallbackUserPrivileges(t);const i=e===r.id;if(i&&r.portal.user)return(0,_.It)(r);let s,n;if(i)s=r.portal.url;else try{s=await(0,v.wI)(this.url,t)}catch(u){(0,d.QP)(u)}if(!s||!(0,p.b8)(s,r.portal.url))return this._fetchFallbackUserPrivileges(t);try{const e=null!=t?t.signal:null;n=await(null===a.id||void 0===a.id?void 0:a.id.getCredential("".concat(s,"/sharing"),{prompt:!1,signal:e}))}catch(u){(0,d.QP)(u)}const o=!0,l=!1,c=!1;if(!n)return{features:{edit:o,fullEdit:l},content:{updateItem:c}};try{if(i?await r.reload():(r=new S.default({id:e,portal:{url:s}}),await r.load(t)),r.portal.user)return(0,_.It)(r)}catch(u){(0,d.QP)(u)}return{features:{edit:o,fullEdit:l},content:{updateItem:c}}}async _fetchFallbackUserPrivileges(e){let t=!0;try{t=await this._fetchUserHasEditingPrivileges(e)}catch(r){(0,d.QP)(r)}return{features:{edit:t,fullEdit:!1},content:{updateItem:!1}}}async _fetchUserHasEditingPrivileges(e){const t=this.url?null===a.id||void 0===a.id?void 0:a.id.findCredential(this.url):null;if(!t)return!0;const r=b.credential===t?b.user:await this._fetchEditingUser(e);return b.credential=t,b.user=r,null==(null===r||void 0===r?void 0:r.privileges)||r.privileges.includes("features:user:edit")}async _fetchEditingUser(e){var t,r;const i=null===(t=this.portalItem)||void 0===t||null===(t=t.portal)||void 0===t?void 0:t.user;if(i)return i;const s=null===a.id||void 0===a.id?void 0:a.id.findServerInfo(null!==(r=this.url)&&void 0!==r?r:"");if(null===s||void 0===s||!s.owningSystemUrl)return null;const l="".concat(s.owningSystemUrl,"/sharing/rest"),c=g.A.getDefault();if(c&&c.loaded&&(0,p.S8)(c.restUrl)===(0,p.S8)(l))return c.user;const u="".concat(l,"/community/self"),d=null!=e?e.signal:null,h=await(0,o.Ke)((0,n.A)(u,{authMode:"no-prompt",query:{f:"json"},signal:d}));return h.ok?w.A.fromJSON(h.value.data):null}read(e,t){t&&(t.layer=this),super.read(e,t)}write(e,t){var r;const i=null===t||void 0===t?void 0:t.portal,s=(null===(r=this.portalItem)||void 0===r?void 0:r.id)&&(this.portalItem.portal||g.A.getDefault());return i&&s&&!(0,p.ut)(s.restUrl,i.restUrl)?(t.messages&&t.messages.push(new l.A("layer:cross-portal","The layer '".concat(this.title," (").concat(this.id,")' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save, set layer.portalItem to null or save to the same portal as the item associated with the layer"),{layer:this})),null):super.write(e,{...t,layer:this})}};return(0,i._)([(0,h.MZ)({type:S.default})],t.prototype,"portalItem",null),(0,i._)([(0,f.w)("web-document","portalItem",["itemId"])],t.prototype,"readPortalItem",null),(0,i._)([(0,m.K)("web-document","portalItem",{itemId:{type:String}})],t.prototype,"writePortalItem",null),(0,i._)([(0,h.MZ)({clonable:!1})],t.prototype,"resourceReferences",void 0),(0,i._)([(0,h.MZ)({type:Boolean,readOnly:!0})],t.prototype,"userHasEditingPrivileges",void 0),(0,i._)([(0,h.MZ)({type:Boolean,readOnly:!0})],t.prototype,"userHasFullEditingPrivileges",void 0),(0,i._)([(0,h.MZ)({type:Boolean,readOnly:!0})],t.prototype,"userHasUpdateItemPrivileges",void 0),t=(0,i._)([(0,y.$)("esri.layers.mixins.PortalLayer")],t),t},b={credential:null,user:null}},21617:(e,t,r)=>{r.d(t,{J:()=>w});var i=r(35143),s=(r(81806),r(76460)),a=r(50346),n=r(46053),o=r(21403),l=(r(47249),r(85842)),c=r(80979),u=r(94643),d=(r(98773),r(50076),r(68452),r(49281));const p=new u.A,h=new WeakMap;function f(e){y(e)&&p.push(new WeakRef(e))}function y(e){return null!=e&&"object"==typeof e&&"refreshInterval"in e&&"refresh"in e}function m(e,t){return Number.isFinite(e)&&Number.isFinite(t)?t<=0?e:m(t,e%t):0}let v=0,g=0;function S(){const e=Date.now();let t=!1;for(const i of p){const s=i.deref();var r;if(s){if(s.refreshInterval)e-(null!==(r=h.get(s))&&void 0!==r?r:0)+5>=6e4*s.refreshInterval&&(h.set(s,e),s.refresh(e))}else t=!0}if(t)for(let i=p.length-1;i>=0;i--)p.at(i).deref()||p.removeAt(i)}(0,d.fm)((()=>{const e=Date.now();let t=0;for(const r of p){const i=r.deref();i&&(t=m(Math.round(6e4*i.refreshInterval),t),i.refreshInterval?h.get(i)||h.set(i,e):h.delete(i))}if(t!==g){if(g=t,clearInterval(v),0===g)return void(v=0);v=setInterval(S,g)}}));const w=e=>{let t=class extends e{constructor(){super(...arguments),this.refreshInterval=0,this.refreshTimestamp=0,this._debounceHasDataChanged=(0,a.sg)((()=>this.hasDataChanged())),this.when().then((()=>{this.destroyed||f(this)}),(()=>{}))}destroy(){!function(e){const t=p.find((t=>t.deref()===e));t&&p.remove(t)}(this)}castRefreshInterval(e){return e>=.1?e:e<=0?0:.1}get refreshParameters(){return{_ts:this.refreshTimestamp||null}}refresh(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Date.now();(0,a.QZ)(this._debounceHasDataChanged()).then((t=>{t&&this._set("refreshTimestamp",e),this.emit("refresh",{dataChanged:t})}),(e=>{s.A.getLogger(this).error(e),this.emit("refresh",{dataChanged:!1,error:e})}))}async hasDataChanged(){return!0}get test(){}};return(0,i._)([(0,n.MZ)({type:Number,json:{write:!0,origins:{"web-scene":{write:{enabled:!0,layerContainerTypes:c.K}}}}})],t.prototype,"refreshInterval",void 0),(0,i._)([(0,o.w)("refreshInterval")],t.prototype,"castRefreshInterval",null),(0,i._)([(0,n.MZ)({readOnly:!0})],t.prototype,"refreshTimestamp",void 0),(0,i._)([(0,n.MZ)({readOnly:!0})],t.prototype,"refreshParameters",null),t=(0,i._)([(0,l.$)("esri.layers.mixins.RefreshableLayer")],t),t}},5682:(e,t,r)=>{r.d(t,{j:()=>n});var i=r(35143),s=r(46053),a=(r(81806),r(76460),r(47249),r(85842));const n=e=>{let t=class extends e{constructor(){super(...arguments),this.minScale=0,this.maxScale=0}get effectiveScaleRange(){const e={minScale:this.minScale,maxScale:this.maxScale},t=this.parent;t&&"effectiveScaleRange"in t&&function(e,t){e.minScale=e.minScale>0?t.minScale>0?Math.min(e.minScale,t.minScale):e.minScale:t.minScale,e.maxScale=e.maxScale>0?t.maxScale>0?Math.max(e.maxScale,t.maxScale):e.maxScale:t.maxScale}(e,t.effectiveScaleRange);const r=this._get("effectiveScaleRange");return r&&r.minScale===e.minScale&&r.maxScale===e.maxScale?r:e}};return(0,i._)([(0,s.MZ)({type:Number,nonNullable:!0,json:{write:!0}})],t.prototype,"minScale",void 0),(0,i._)([(0,s.MZ)({type:Number,nonNullable:!0,json:{write:!0}})],t.prototype,"maxScale",void 0),(0,i._)([(0,s.MZ)({readOnly:!0})],t.prototype,"effectiveScaleRange",null),t=(0,i._)([(0,a.$)("esri.layers.mixins.ScaleRangeLayer")],t),t}},72945:(e,t,r)=>{r.d(t,{It:()=>p,LG:()=>n,OM:()=>c,Y:()=>o,bK:()=>l,mm:()=>d,sQ:()=>u});var i=r(26346),s=r(13312),a=r(45417);function n(e,t){if(!o(e,t)){const r=e.typeKeywords;r?r.push(t):e.typeKeywords=[t]}}function o(e,t){var r;return!(null===(r=e.typeKeywords)||void 0===r||!r.includes(t))}function l(e){return o(e,d.HOSTED_SERVICE)}function c(e,t){const r=e.typeKeywords;if(r){const e=r.indexOf(t);e>-1&&r.splice(e,1)}}async function u(e){const t=e.clone().normalize();let r;if(t.length>1)for(const i of t)r?i.width>r.width&&(r=i):r=i;else r=t[0];return async function(e){const t=e.spatialReference;if(t.isWGS84)return e.clone();if(t.isWebMercator)return(0,a.ci)(e);const r=s.A.WGS84;return await(0,i.initializeProjection)(t,r),(0,i.project)(e,r)}(r)}const d={DEVELOPER_BASEMAP:"DeveloperBasemap",JSAPI:"ArcGIS API for JavaScript",METADATA:"Metadata",MULTI_LAYER:"Multilayer",SINGLE_LAYER:"Singlelayer",TABLE:"Table",HOSTED_SERVICE:"Hosted Service",LOCAL_SCENE:"ViewingMode-Local",TILED_IMAGERY:"Tiled Imagery",GROUP_LAYER_MAP:"Map"};function p(e){var t;const{portal:r,isOrgItem:i,itemControl:s}=e,a=null===(t=r.user)||void 0===t?void 0:t.privileges;let n=!a||a.includes("features:user:edit"),o=!!i&&!(null===a||void 0===a||!a.includes("features:user:fullEdit"));const l="update"===s||"admin"===s;return l?o=n=!0:o&&(n=!0),{features:{edit:n,fullEdit:o},content:{updateItem:l}}}}}]);
//# sourceMappingURL=2551.ff658a08.chunk.js.map