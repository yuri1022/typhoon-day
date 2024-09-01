"use strict";(self.webpackChunktyphoon=self.webpackChunktyphoon||[]).push([[2544],{62544:(e,a,r)=>{r.r(a),r.d(a,{fromUrl:()=>y});var t=r(50076),n=r(90534),l=r(13096),i=r(39323),o=r(11668),s=r(31933),u=r(62487),c=r(67061);const d={FeatureLayer:!0,SceneLayer:!0};async function y(e){const{properties:a,url:t}=e,n={...a,url:t},l=await m(t,null===a||void 0===a?void 0:a.customParameters),{Constructor:i,layerId:o,sourceJSON:s,parsedUrl:u,layers:c,tables:d}=l;if(c.length+d.length===0)return null!=o&&(n.layerId=o),null!=s&&(n.sourceJSON=s),new i(n);const y=new(0,(await Promise.all([r.e(7847),r.e(7114),r.e(6095)]).then(r.bind(r,16095))).default)({title:u.title});return await async function(e,a,r){const t=a.sublayerConstructorProvider;for(const{id:l,serverUrl:i}of a.layers){var n;const o=v(a.sublayerInfos,l),s=f(i,l,o,null!==(n=o&&(null===t||void 0===t?void 0:t(o)))&&void 0!==n?n:a.Constructor,r);e.add(s)}if(a.tables.length){const t=await h("FeatureLayer");a.tables.forEach((n=>{let{id:l,serverUrl:i}=n;const o=f(i,l,v(a.tableInfos,l),t,r);e.tables.add(o)}))}}(y,l,n),y}function v(e,a){return e?e.find((e=>{let{id:r}=e;return r===a})):null}function f(e,a,r,t,n){const l={...n,layerId:a};return null!=e&&(l.url=e),null!=r&&(l.sourceJSON=r),"sublayerTitleMode"in t.prototype&&(l.sublayerTitleMode="service-name"),new t(l)}async function m(e,a){let r=(0,l.qg)(e);if(null==r&&(r=await async function(e,a){var r,t;const i=await(0,c.V)(e,{customParameters:a});let o=null,s=null;const u=i.type;if("Feature Layer"===u||"Table"===u?(o="FeatureServer",s=null!==(r=i.id)&&void 0!==r?r:null):"indexedVector"===u?o="VectorTileServer":i.hasOwnProperty("mapName")?o="MapServer":i.hasOwnProperty("bandCount")&&i.hasOwnProperty("pixelSizeX")?o="ImageServer":i.hasOwnProperty("maxRecordCount")&&i.hasOwnProperty("allowGeometryUpdates")?o="FeatureServer":i.hasOwnProperty("streamUrls")?o="StreamServer":w(i)?(o="SceneServer",s=i.id):i.hasOwnProperty("layers")&&w(null===(t=i.layers)||void 0===t?void 0:t[0])&&(o="SceneServer"),!o)return null;const d=null!=s?(0,l.iz)(e):null;return{title:null!=d&&i.name||(0,n.e7)(e),serverType:o,sublayer:s,url:{path:null!=d?d.serviceUrl:(0,n.An)(e).path}}}(e,a)),null==r)throw new t.A("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:e});const{serverType:u,sublayer:y}=r;let v;const f={FeatureServer:"FeatureLayer",KnowledgeGraphServer:"KnowledgeGraphLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer",VideoServer:"VideoLayer"},m="FeatureServer"===u,p="SceneServer"===u,b={parsedUrl:r,Constructor:null,layerId:(m||p)&&null!==y&&void 0!==y?y:void 0,layers:[],tables:[]};switch(u){case"MapServer":if(null!=y){const{type:r}=await(0,c.V)(e,{customParameters:a});switch(v="FeatureLayer",r){case"Catalog Layer":v="CatalogLayer";break;case"Catalog Dynamic Group Layer":throw new t.A("arcgis-layers:unsupported",'fromUrl() not supported for "'.concat(r,'" layers'))}}else v=await async function(e,a){return(await(0,c.V)(e,{customParameters:a})).tileInfo}(e,a)?"TileLayer":"MapImageLayer";break;case"ImageServer":{var L;const r=await(0,c.V)(e,{customParameters:a}),{tileInfo:t,cacheType:n}=r;v=t?"LERC"!==(null===t||void 0===t||null===(L=t.format)||void 0===L?void 0:L.toUpperCase())||n&&"elevation"!==n.toLowerCase()?"ImageryTileLayer":"ElevationLayer":"ImageryLayer";break}case"SceneServer":{const e=await(0,c.V)(r.url.path,{customParameters:a});if(v="SceneLayer",e){const a=null===e||void 0===e?void 0:e.layers;if("Voxel"===(null===e||void 0===e?void 0:e.layerType))v="VoxelLayer";else if(null!==a&&void 0!==a&&a.length){var S;const e=null===(S=a[0])||void 0===S?void 0:S.layerType;null!=e&&null!=s.XX[e]&&(v=s.XX[e])}}break}case"3DTilesServer":throw new t.A("arcgis-layers:unsupported","fromUrl() not supported for 3DTiles layers");case"FeatureServer":if(v="FeatureLayer",null!=y){const r=await(0,c.V)(e,{customParameters:a});b.sourceJSON=r,v=(0,o.K)(r.type)}break;default:v=f[u]}if(d[v]&&null==y){var P;const r=await async function(e,a,r){var t,n;let l,s,u=!1;switch(a){case"FeatureServer":{const a=await(0,o.Q)(e,{customParameters:r});u=!!a.layersJSON,l=a.layersJSON||a.serviceJSON;break}case"SceneServer":{const a=await async function(e,a){var r;const t=await(0,c.V)(e,{customParameters:a}),n=null===(r=t.layers)||void 0===r?void 0:r[0];if(!n)return{serviceInfo:t};try{const{serverUrl:r}=await(0,i.L)(e),n=await(0,c.V)(r,{customParameters:a}).catch((()=>null));return n&&(t.tables=n.tables),{serviceInfo:t,tableServerUrl:r}}catch{return{serviceInfo:t}}}(e,r);l=a.serviceInfo,s=a.tableServerUrl;break}default:l=await(0,c.V)(e,{customParameters:r})}const d=null===(t=l)||void 0===t?void 0:t.layers,y=null===(n=l)||void 0===n?void 0:n.tables;return{layers:(null===d||void 0===d?void 0:d.map((e=>({id:e.id}))).reverse())||[],tables:(null===y||void 0===y?void 0:y.map((e=>({serverUrl:s,id:e.id}))).reverse())||[],layerInfos:u?d:[],tableInfos:u?y:[]}}(e,u,a);if(m&&(b.sublayerInfos=r.layerInfos,b.tableInfos=r.tableInfos),1!==r.layers.length+r.tables.length)b.layers=r.layers,b.tables=r.tables,m&&(null===(P=r.layerInfos)||void 0===P?void 0:P.length)&&(b.sublayerConstructorProvider=await async function(e){if(!e.length)return;const a=new Set,r=[];for(const{type:l}of e)a.has(l)||(a.add(l),r.push(h((0,o.K)(l))));const t=await Promise.all(r),n=new Map;return Array.from(a).forEach(((e,a)=>{n.set(e,t[a])})),e=>n.get(e.type)}(r.layerInfos));else if(m||p){var g,I,T,U,O,C;const e=null!==(g=null===(I=r.layerInfos)||void 0===I?void 0:I[0])&&void 0!==g?g:null===(T=r.tableInfos)||void 0===T?void 0:T[0];if(b.layerId=null!==(U=null===(O=r.layers[0])||void 0===O?void 0:O.id)&&void 0!==U?U:null===(C=r.tables[0])||void 0===C?void 0:C.id,b.sourceJSON=e,m){const a=null===e||void 0===e?void 0:e.type;v=(0,o.K)(a)}}}return b.Constructor=await h(v),b}function w(e){return null!=e&&e.hasOwnProperty("store")&&e.hasOwnProperty("id")&&"number"==typeof e.id}async function h(e){return(0,u.S[e])()}},39323:(e,a,r)=>{r.d(a,{L:()=>c});var t=r(55171),n=r(3825),l=r(50076),i=r(50346),o=r(13096),s=r(65308),u=r(70652);async function c(e,a){var r,c;const v=(0,o.qg)(e);if(!v)throw new l.A("invalid-url","Invalid scene service url");const f={...a,sceneServerUrl:v.url.path,layerId:null!==(r=v.sublayer)&&void 0!==r?r:void 0};if(null!==(c=f.sceneLayerItem)&&void 0!==c||(f.sceneLayerItem=await async function(e){const a=(await d(e)).serviceItemId;if(!a)return null;const r=new u.default({id:a,apiKey:e.apiKey}),l=await async function(e){const a=null===t.id||void 0===t.id?void 0:t.id.findServerInfo(e.sceneServerUrl);if(null!==a&&void 0!==a&&a.owningSystemUrl)return a.owningSystemUrl;const r=e.sceneServerUrl.replace(/(.*\/rest)\/.*/i,"$1")+"/info";try{const a=(await(0,n.A)(r,{query:{f:"json"},responseType:"json",signal:e.signal})).data.owningSystemUrl;if(a)return a}catch(m){(0,i.QP)(m)}return null}(e);null!=l&&(r.portal=new s.A({url:l}));try{return r.load({signal:e.signal})}catch(w){return(0,i.QP)(w),null}}(f)),null==f.sceneLayerItem)return y(f.sceneServerUrl.replace("/SceneServer","/FeatureServer"),f);const m=await async function(e){let{sceneLayerItem:a,signal:r}=e;if(!a)return null;try{const e=(await a.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:r})).find((e=>"Feature Service"===e.type))||null;if(!e)return null;const t=new u.default({portal:e.portal,id:e.id});return await t.load(),t}catch(t){return(0,i.QP)(t),null}}(f);if(null===m||void 0===m||!m.url)throw new l.A("related-service-not-found","Could not find feature service through portal item relationship");f.featureServiceItem=m;const w=await y(m.url,f);return w.portalItem=m,w}async function d(e){if(e.rootDocument)return e.rootDocument;const a={query:{f:"json",...e.customParameters,token:e.apiKey},responseType:"json",signal:e.signal};try{const r=await(0,n.A)(e.sceneServerUrl,a);e.rootDocument=r.data}catch{e.rootDocument={}}return e.rootDocument}async function y(e,a){var r,t,i;const s=(0,o.qg)(e);if(!s)throw new l.A("invalid-feature-service-url","Invalid feature service url");const u=s.url.path,c=a.layerId;if(null==c)return{serverUrl:u};const y=d(a),v=a.featureServiceItem?await a.featureServiceItem.fetchData("json"):null,f=null===(r=(null===v||void 0===v||null===(t=v.layers)||void 0===t?void 0:t[0])||(null===v||void 0===v||null===(i=v.tables)||void 0===i?void 0:i[0]))||void 0===r?void 0:r.customParameters,m=e=>{const r={query:{f:"json",...f},responseType:"json",authMode:e,signal:a.signal};return(0,n.A)(u,r)},w=m("anonymous").catch((()=>m("no-prompt"))),[h,p]=await Promise.all([w,y]),b=null===p||void 0===p?void 0:p.layers,L=h.data&&h.data.layers;if(!Array.isArray(L))throw new Error("expected layers array");if(Array.isArray(b)){for(let n=0;n<Math.min(b.length,L.length);n++)if(b[n].id===c)return{serverUrl:u,layerId:L[n].id}}else if(null!=c&&c<L.length)return{serverUrl:u,layerId:L[c].id};throw new Error("could not find matching associated sublayer")}},11668:(e,a,r)=>{r.d(a,{K:()=>y,Q:()=>l});var t=r(67061);const n=new Set(["Catalog Layer","Feature Layer","Oriented Imagery Layer"]);async function l(e,a){var r;const{loadContext:n,...l}=a||{},i=n?await n.fetchServiceMetadata(e,l):await(0,t.V)(e,l);d(i),s(i);const o={serviceJSON:i};if((null!==(r=i.currentVersion)&&void 0!==r?r:0)<10.5)return o;const u="".concat(e,"/layers"),c=n?await n.fetchServiceMetadata(u,l):await(0,t.V)(u,l);return d(c),s(c),o.layersJSON={layers:c.layers,tables:c.tables},o}function i(e){const{type:a}=e;return!!a&&n.has(a)}function o(e){return"Table"===e.type}function s(e){var a,r;e.layers=null===(a=e.layers)||void 0===a?void 0:a.filter(i),e.tables=null===(r=e.tables)||void 0===r?void 0:r.filter(o)}function u(e){e.type||(e.type="Feature Layer")}function c(e){e.type||(e.type="Table")}function d(e){var a,r;null!==(a=e.layers)&&void 0!==a&&a.forEach(u),null===(r=e.tables)||void 0===r||r.forEach(c)}function y(e){switch(e){case"Feature Layer":case"Table":return"FeatureLayer";case"Oriented Imagery Layer":return"OrientedImageryLayer";case"Catalog Layer":return"CatalogLayer"}return"FeatureLayer"}},62487:(e,a,r)=>{r.d(a,{S:()=>t});const t={BingMapsLayer:async()=>(await Promise.all([r.e(7847),r.e(7114),r.e(3993)]).then(r.bind(r,13993))).default,BuildingSceneLayer:async()=>(await Promise.all([r.e(7847),r.e(8100),r.e(7114),r.e(7851),r.e(6616),r.e(8593),r.e(5224),r.e(6281),r.e(1108),r.e(8451),r.e(9592),r.e(3020),r.e(9189),r.e(8664),r.e(8126),r.e(4141)]).then(r.bind(r,30188))).default,CSVLayer:async()=>(await Promise.all([r.e(7847),r.e(8100),r.e(7114),r.e(7851),r.e(6616),r.e(8593),r.e(5224),r.e(6281),r.e(1108),r.e(8451),r.e(3395)]).then(r.bind(r,1365))).default,CatalogLayer:async()=>(await Promise.all([r.e(7847),r.e(8100),r.e(7114),r.e(8618),r.e(7851),r.e(6616),r.e(8593),r.e(6281),r.e(9122),r.e(1108),r.e(9346),r.e(7872),r.e(9078),r.e(6594)]).then(r.bind(r,84397))).default,DimensionLayer:async()=>(await Promise.all([r.e(7114),r.e(2798)]).then(r.bind(r,72798))).default,ElevationLayer:async()=>(await Promise.all([r.e(7114),r.e(6693),r.e(3875)]).then(r.bind(r,43875))).default,FeatureLayer:async()=>(await Promise.all([r.e(7847),r.e(8100),r.e(7114),r.e(7851),r.e(6616),r.e(8593),r.e(5224),r.e(6281),r.e(1108),r.e(8451),r.e(779)]).then(r.bind(r,38451))).default,GeoJSONLayer:async()=>(await Promise.all([r.e(7847),r.e(8100),r.e(7114),r.e(7851),r.e(6616),r.e(8593),r.e(5224),r.e(6281),r.e(3778)]).then(r.bind(r,50709))).default,GeoRSSLayer:async()=>(await Promise.all([r.e(7847),r.e(7114),r.e(2551)]).then(r.bind(r,52551))).default,GroupLayer:async()=>(await Promise.all([r.e(7847),r.e(7114),r.e(6095)]).then(r.bind(r,16095))).default,ImageryLayer:async()=>(await Promise.all([r.e(7847),r.e(8100),r.e(7114),r.e(7851),r.e(9122),r.e(3092),r.e(6964),r.e(8333),r.e(4739),r.e(4773)]).then(r.bind(r,59051))).default,ImageryTileLayer:async()=>(await Promise.all([r.e(7847),r.e(8100),r.e(7114),r.e(7851),r.e(3092),r.e(9844),r.e(6693),r.e(6964),r.e(8333),r.e(9571),r.e(4739),r.e(1425)]).then(r.bind(r,11425))).default,IntegratedMesh3DTilesLayer:async()=>(await Promise.all([r.e(7114),r.e(6790)]).then(r.bind(r,76790))).default,IntegratedMeshLayer:async()=>(await Promise.all([r.e(7114),r.e(3020),r.e(3196)]).then(r.bind(r,3196))).default,KMLLayer:async()=>(await Promise.all([r.e(7847),r.e(8100),r.e(7114),r.e(7851),r.e(6616),r.e(9699),r.e(6743)]).then(r.bind(r,41324))).default,KnowledgeGraphLayer:async()=>(await Promise.all([r.e(7847),r.e(8100),r.e(7114),r.e(8618),r.e(7851),r.e(6616),r.e(3620),r.e(8593),r.e(842),r.e(5224),r.e(7216),r.e(9346),r.e(8153),r.e(4476),r.e(1323),r.e(6570)]).then(r.bind(r,26570))).default,LineOfSightLayer:async()=>(await Promise.all([r.e(7114),r.e(2897)]).then(r.bind(r,22897))).default,LinkChartLayer:async()=>(await Promise.all([r.e(7847),r.e(8100),r.e(8618),r.e(7851),r.e(6616),r.e(3620),r.e(8593),r.e(842),r.e(5224),r.e(7216),r.e(9346),r.e(8153),r.e(4476),r.e(1323),r.e(1064)]).then(r.bind(r,92218))).default,MapImageLayer:async()=>(await Promise.all([r.e(7847),r.e(8100),r.e(7114),r.e(8618),r.e(7851),r.e(6616),r.e(8593),r.e(6281),r.e(9122),r.e(7872),r.e(9862),r.e(8679)]).then(r.bind(r,82951))).default,MapNotesLayer:async()=>(await Promise.all([r.e(7847),r.e(8100),r.e(7114),r.e(7851),r.e(6616),r.e(8593),r.e(5224),r.e(6281),r.e(1108),r.e(8451),r.e(4341)]).then(r.bind(r,43311))).default,MediaLayer:async()=>(await Promise.all([r.e(7847),r.e(7114),r.e(9522)]).then(r.bind(r,39522))).default,OGCFeatureLayer:async()=>(await Promise.all([r.e(7847),r.e(8100),r.e(7114),r.e(8618),r.e(7851),r.e(6616),r.e(8593),r.e(5224),r.e(6281),r.e(6799),r.e(809)]).then(r.bind(r,1741))).default,OpenStreetMapLayer:async()=>(await Promise.all([r.e(7847),r.e(7114),r.e(4552),r.e(803)]).then(r.bind(r,50803))).default,OrientedImageryLayer:async()=>(await Promise.all([r.e(7847),r.e(8100),r.e(7114),r.e(7851),r.e(6616),r.e(8593),r.e(5224),r.e(6281),r.e(1108),r.e(8451),r.e(1083)]).then(r.bind(r,52593))).default,PointCloudLayer:async()=>(await Promise.all([r.e(7114),r.e(3020),r.e(1830)]).then(r.bind(r,11830))).default,RouteLayer:async()=>(await Promise.all([r.e(7847),r.e(8100),r.e(7114),r.e(7851),r.e(6616),r.e(1297),r.e(5249)]).then(r.bind(r,91301))).default,SceneLayer:async()=>(await Promise.all([r.e(8100),r.e(7114),r.e(7851),r.e(6616),r.e(8593),r.e(8105),r.e(9592),r.e(3020),r.e(3848),r.e(9189),r.e(8664),r.e(2923),r.e(8126),r.e(8320)]).then(r.bind(r,48320))).default,StreamLayer:async()=>(await Promise.all([r.e(7847),r.e(8100),r.e(7114),r.e(7851),r.e(6616),r.e(8593),r.e(5224),r.e(3870)]).then(r.bind(r,84369))).default,SubtypeGroupLayer:async()=>(await Promise.all([r.e(7847),r.e(8100),r.e(7114),r.e(7851),r.e(6616),r.e(8593),r.e(6281),r.e(1108),r.e(8216)]).then(r.bind(r,69005))).default,TileLayer:async()=>(await Promise.all([r.e(7847),r.e(8100),r.e(7114),r.e(8618),r.e(7851),r.e(6616),r.e(8593),r.e(6281),r.e(9122),r.e(7872),r.e(6693),r.e(9862),r.e(1174)]).then(r.bind(r,71174))).default,UnknownLayer:async()=>(await r.e(8896).then(r.bind(r,8896))).default,UnsupportedLayer:async()=>(await r.e(2043).then(r.bind(r,72043))).default,VectorTileLayer:async()=>(await Promise.all([r.e(7847),r.e(7114),r.e(5663),r.e(6693),r.e(5995),r.e(117)]).then(r.bind(r,53451))).default,VideoLayer:async()=>(await Promise.all([r.e(7847),r.e(9029)]).then(r.bind(r,79029))).default,VoxelLayer:async()=>(await Promise.all([r.e(7114),r.e(3020),r.e(8560)]).then(r.bind(r,88560))).default,WFSLayer:async()=>(await Promise.all([r.e(7847),r.e(8100),r.e(7114),r.e(7851),r.e(6616),r.e(8593),r.e(5224),r.e(1316),r.e(2548)]).then(r.bind(r,4583))).default,WMSLayer:async()=>(await Promise.all([r.e(7847),r.e(7114),r.e(2015)]).then(r.bind(r,52015))).default,WMTSLayer:async()=>(await Promise.all([r.e(7847),r.e(7114),r.e(4552),r.e(1845)]).then(r.bind(r,1845))).default,WebTileLayer:async()=>(await Promise.all([r.e(7847),r.e(7114),r.e(4552)]).then(r.bind(r,24552))).default}},67061:(e,a,r)=>{r.d(a,{V:()=>n});var t=r(3825);async function n(e,a){const{data:r}=await(0,t.A)(e,{responseType:"json",query:{f:"json",...null===a||void 0===a?void 0:a.customParameters,token:null===a||void 0===a?void 0:a.apiKey}});return r}}}]);
//# sourceMappingURL=2544.b0d4e477.chunk.js.map