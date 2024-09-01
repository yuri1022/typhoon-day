"use strict";(self.webpackChunktyphoon=self.webpackChunktyphoon||[]).push([[739,2945],{60239:(e,r,a)=>{a.d(r,{N:()=>w,populateOperationalLayers:()=>L});var t=a(94643),n=(a(81806),a(77491)),i=a(62487),y=a(70652);function o(e,r){return!(!e.layerType||"ArcGISFeatureLayer"!==e.layerType)&&e.featureCollectionType===r}var l=a(2487),c=a(81589);async function L(e,r,a){if(!r)return;const t=r.map((e=>async function(e,r){return async function(e,r,a){const t=new e;return t.read(r,a.context),"group"===t.type&&("GroupLayer"===r.layerType?await w(t,r,a):m(r)?function(e,r,a){r.itemId&&(e.portalItem=new y.default({id:r.itemId,portal:null===a||void 0===a?void 0:a.portal}),e.when((()=>{var t,n;const i=t=>{var n;const i=t.layerId;b(t,e,r,i,a);const y=null===(n=r.featureCollection)||void 0===n||null===(n=n.layers)||void 0===n?void 0:n[i];y&&t.read(y,a)};null!==(t=e.layers)&&void 0!==t&&t.forEach(i),null===(n=e.tables)||void 0===n||n.forEach(i)})))}(t,r,a.context):M(r)&&await async function(e,r,a){var t;const n=i.S.FeatureLayer,y=await n(),o=r.featureCollection,l=null===o||void 0===o?void 0:o.showLegend,c=null===o||void 0===o||null===(t=o.layers)||void 0===t?void 0:t.map(((t,n)=>{const i=new y;i.read(t,a);const o={...a,ignoreDefaults:!0};return b(i,e,r,n,o),null!=l&&i.read({showLegend:l},o),i}));e.layers.addMany(null!==c&&void 0!==c?c:[])}(t,r,a.context)),await(0,c.L)(t,a.context),t}(await G(e,r),e,r)}(e,a))),n=await Promise.allSettled(t);for(const i of n)"rejected"===i.status||i.value&&e.add(i.value)}const u={ArcGISDimensionLayer:"DimensionLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISSceneServiceLayer:"SceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BuildingSceneLayer:"BuildingSceneLayer",CatalogLayer:"CatalogLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoJSON:"GeoJSONLayer",GroupLayer:"GroupLayer",IntegratedMesh3DTilesLayer:"IntegratedMesh3DTilesLayer",IntegratedMeshLayer:"IntegratedMeshLayer",KML:"KMLLayer",LineOfSightLayer:"LineOfSightLayer",MediaLayer:"MediaLayer",OGCFeatureLayer:"OGCFeatureLayer",PointCloudLayer:"PointCloudLayer",RasterDataLayer:"UnsupportedLayer",VectorTileLayer:"VectorTileLayer",Voxel:"VoxelLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},s={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},d={ArcGISFeatureLayer:"FeatureLayer"},S={ArcGISImageServiceLayer:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",ArcGISSceneServiceLayer:"SceneLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",DefaultTileLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WMS:"UnsupportedLayer",WebTiledLayer:"WebTileLayer"},p={ArcGISAnnotationLayer:"UnsupportedLayer",ArcGISDimensionLayer:"UnsupportedLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",CatalogLayer:"CatalogLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoJSON:"GeoJSONLayer",GeoRSS:"GeoRSSLayer",GroupLayer:"GroupLayer",KML:"KMLLayer",KnowledgeGraphLayer:"KnowledgeGraphLayer",MediaLayer:"MediaLayer",OGCFeatureLayer:"OGCFeatureLayer",OrientedImageryLayer:"OrientedImageryLayer",SubtypeGroupLayer:"SubtypeGroupLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},v={ArcGISFeatureLayer:"FeatureLayer",SubtypeGroupTable:"UnsupportedLayer"},I={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",DefaultTileLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},f={...p,LinkChartLayer:"LinkChartLayer"},g={...v},T={...I};async function G(e,r){var a,t;const c=r.context,L=A(c);let u=e.layerType||e.type;!u&&(null===r||void 0===r?void 0:r.defaultLayerType)&&(u=r.defaultLayerType);const s=L[u];let d=s?i.S[s]:i.S.UnknownLayer;if(m(e)){const r=null===c||void 0===c?void 0:c.portal;if(e.itemId){const a=new y.default({id:e.itemId,portal:r});await a.load();const t=(await(0,l.n)(a,new n.v)).className||"UnknownLayer";d=i.S[t]}}else"ArcGISFeatureLayer"===u?function(e){return o(e,"notes")}(e)||function(e){return o(e,"markup")}(e)?d=i.S.MapNotesLayer:function(e){return o(e,"route")}(e)?d=i.S.RouteLayer:M(e)&&(d=i.S.GroupLayer):null!==(a=e.wmtsInfo)&&void 0!==a&&a.url&&e.wmtsInfo.layerIdentifier?d=i.S.WMTSLayer:"WFS"===u&&"2.0.0"!==(null===(t=e.wfsInfo)||void 0===t?void 0:t.version)&&(d=i.S.UnsupportedLayer);return d()}function M(e){var r,a;return"ArcGISFeatureLayer"===e.layerType&&!m(e)&&(null!==(r=null===(a=e.featureCollection)||void 0===a||null===(a=a.layers)||void 0===a?void 0:a.length)&&void 0!==r?r:0)>1}function m(e){return"Feature Collection"===e.type}function A(e){let r;switch(e.origin){case"web-scene":switch(e.layerContainerType){case"basemap":r=S;break;case"ground":r=s;break;case"tables":r=d;break;default:r=u}break;case"link-chart":switch(e.layerContainerType){case"basemap":r=T;break;case"tables":r=g;break;default:r=f}break;default:switch(e.layerContainerType){case"basemap":r=I;break;case"tables":r=v;break;default:r=p}}return r}async function w(e,r,a){const n=new t.A,i=L(n,Array.isArray(r.layers)?r.layers:[],a);try{try{if(await i,"group"===e.type)return e.layers.addMany(n),e}catch(y){e.destroy();for(const e of n)e.destroy();throw y}}catch(y){throw y}}function b(e,r,a,t,n){var i,y;e.read({id:"".concat(r.id,"-sublayer-").concat(t),visibility:null===(i=null===(y=a.visibleLayers)||void 0===y?void 0:y.includes(t))||void 0===i||i},n)}},72945:(e,r,a)=>{a.d(r,{It:()=>s,LG:()=>y,OM:()=>c,Y:()=>o,bK:()=>l,mm:()=>u,sQ:()=>L});var t=a(26346),n=a(13312),i=a(45417);function y(e,r){if(!o(e,r)){const a=e.typeKeywords;a?a.push(r):e.typeKeywords=[r]}}function o(e,r){var a;return!(null===(a=e.typeKeywords)||void 0===a||!a.includes(r))}function l(e){return o(e,u.HOSTED_SERVICE)}function c(e,r){const a=e.typeKeywords;if(a){const e=a.indexOf(r);e>-1&&a.splice(e,1)}}async function L(e){const r=e.clone().normalize();let a;if(r.length>1)for(const t of r)a?t.width>a.width&&(a=t):a=t;else a=r[0];return async function(e){const r=e.spatialReference;if(r.isWGS84)return e.clone();if(r.isWebMercator)return(0,i.ci)(e);const a=n.A.WGS84;return await(0,t.initializeProjection)(r,a),(0,t.project)(e,a)}(a)}const u={DEVELOPER_BASEMAP:"DeveloperBasemap",JSAPI:"ArcGIS API for JavaScript",METADATA:"Metadata",MULTI_LAYER:"Multilayer",SINGLE_LAYER:"Singlelayer",TABLE:"Table",HOSTED_SERVICE:"Hosted Service",LOCAL_SCENE:"ViewingMode-Local",TILED_IMAGERY:"Tiled Imagery",GROUP_LAYER_MAP:"Map"};function s(e){var r;const{portal:a,isOrgItem:t,itemControl:n}=e,i=null===(r=a.user)||void 0===r?void 0:r.privileges;let y=!i||i.includes("features:user:edit"),o=!!t&&!(null===i||void 0===i||!i.includes("features:user:fullEdit"));const l="update"===n||"admin"===n;return l?o=y=!0:o&&(y=!0),{features:{edit:y,fullEdit:o},content:{updateItem:l}}}},81589:(e,r,a)=>{a.d(r,{L:()=>y});var t=a(98773),n=a(50346),i=a(62754);async function y(e,r,a){const y=e&&e.getAtOrigin&&e.getAtOrigin("renderer",r.origin);if(y&&"unique-value"===y.type&&y.styleOrigin){const o=await(0,t.Ke)(y.populateFromStyle());if((0,n.Te)(a),!1===o.ok){const a=o.error;null!==r&&void 0!==r&&r.messages&&r.messages.push(new i.A("renderer:style-reference","Failed to create unique value renderer from style reference: ".concat(a.message),{error:a,context:r})),e.clear("renderer",null===r||void 0===r?void 0:r.origin)}}}}}]);
//# sourceMappingURL=739.1a587bbf.chunk.js.map