"use strict";(self.webpackChunktyphoon=self.webpackChunktyphoon||[]).push([[2945],{72945:(e,t,n)=>{n.d(t,{It:()=>f,LG:()=>s,OM:()=>u,Y:()=>c,bK:()=>l,mm:()=>d,sQ:()=>a});var i=n(26346),o=n(13312),r=n(45417);function s(e,t){if(!c(e,t)){const n=e.typeKeywords;n?n.push(t):e.typeKeywords=[t]}}function c(e,t){var n;return!(null===(n=e.typeKeywords)||void 0===n||!n.includes(t))}function l(e){return c(e,d.HOSTED_SERVICE)}function u(e,t){const n=e.typeKeywords;if(n){const e=n.indexOf(t);e>-1&&n.splice(e,1)}}async function a(e){const t=e.clone().normalize();let n;if(t.length>1)for(const i of t)n?i.width>n.width&&(n=i):n=i;else n=t[0];return async function(e){const t=e.spatialReference;if(t.isWGS84)return e.clone();if(t.isWebMercator)return(0,r.ci)(e);const n=o.A.WGS84;return await(0,i.initializeProjection)(t,n),(0,i.project)(e,n)}(n)}const d={DEVELOPER_BASEMAP:"DeveloperBasemap",JSAPI:"ArcGIS API for JavaScript",METADATA:"Metadata",MULTI_LAYER:"Multilayer",SINGLE_LAYER:"Singlelayer",TABLE:"Table",HOSTED_SERVICE:"Hosted Service",LOCAL_SCENE:"ViewingMode-Local",TILED_IMAGERY:"Tiled Imagery",GROUP_LAYER_MAP:"Map"};function f(e){var t;const{portal:n,isOrgItem:i,itemControl:o}=e,r=null===(t=n.user)||void 0===t?void 0:t.privileges;let s=!r||r.includes("features:user:edit"),c=!!i&&!(null===r||void 0===r||!r.includes("features:user:fullEdit"));const l="update"===o||"admin"===o;return l?c=s=!0:c&&(s=!0),{features:{edit:s,fullEdit:c},content:{updateItem:l}}}}}]);
//# sourceMappingURL=2945.dc225a09.chunk.js.map