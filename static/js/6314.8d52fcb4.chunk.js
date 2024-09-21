"use strict";(self.webpackChunktyphoon=self.webpackChunktyphoon||[]).push([[6314],{93795:(e,o,n)=>{function l(e){return e=e||globalThis.location.hostname,c.some((o=>{var n;return null!=(null===(n=e)||void 0===n?void 0:n.match(o))}))}function t(e,o){return e&&(o=o||globalThis.location.hostname)?null!=o.match(r)||null!=o.match(s)?e.replace("static.arcgis.com","staticdev.arcgis.com"):null!=o.match(i)||null!=o.match(a)?e.replace("static.arcgis.com","staticqa.arcgis.com"):e:e}n.d(o,{EM:()=>t,b5:()=>l});const r=/^devext\.arcgis\.com$/,i=/^qaext\.arcgis\.com$/,s=/^[\w-]*\.mapsdevext\.arcgis\.com$/,a=/^[\w-]*\.mapsqa\.arcgis\.com$/,c=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local\.esri\.com$/,r,i,/^jsapps\.esri\.com$/,s,a]},31111:(e,o,n)=>{n.d(o,{Vd:()=>t,Vo:()=>s});var l=n(81806);const t=()=>!!(0,l.A)("enable-feature:force-wosr"),r=()=>l.A.add("enable-feature:direct-3d-object-feature-layer-display",!1,!0,!0),i=()=>l.A.add("enable-i3s-patching",!1,!0,!0),s=()=>!!(0,l.A)("enable-feature:SceneLayer-editing");!function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"i3s-patching";switch(i(),r(),l.A.add("enable-feature:SceneLayer-editing",!0,!0,!0),e){case"feature-layer-view":l.A.add("enable-feature:direct-3d-object-feature-layer-display",!0,!0,!0);break;case"i3s-patching":l.A.add("enable-i3s-patching",!0,!0,!0)}}("i3s-patching")},84202:(e,o,n)=>{n.d(o,{A7:()=>c,Cx:()=>m,Hk:()=>u,JJ:()=>f,UK:()=>a,jM:()=>y,x3:()=>d});n(81806);var l=n(86875),t=n(7246),r=n(76940),i=n(86659),s=n(44460);const a=r.A.fromJSON(s.Cb),c=t.A.fromJSON(s.yM),m=l.A.fromJSON(s.WR),u=i.A.fromJSON(s.JZ);const y=r.A.fromJSON(s.nC),d=t.A.fromJSON(s.HW),f=l.A.fromJSON(s.b6)},44460:(e,o,n)=>{n.d(o,{Cb:()=>r,HW:()=>m,JR:()=>t,JZ:()=>a,WR:()=>s,b6:()=>u,fT:()=>l,nC:()=>c,yM:()=>i});const l=[252,146,31,255],t=[153,153,153,255],r={type:"esriSMS",style:"esriSMSCircle",size:6,color:l,outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[153,153,153,255]}},i={type:"esriSLS",style:"esriSLSSolid",width:.75,color:l},s={type:"esriSFS",style:"esriSFSSolid",color:[252,146,31,196],outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[255,255,255,191]}},a={type:"esriTS",color:[255,255,255,255],font:{family:"arial-unicode-ms",size:10,weight:"bold"},horizontalAlignment:"center",kerning:!0,haloColor:[0,0,0,255],haloSize:1,rotated:!1,text:"",xoffset:0,yoffset:0,angle:0},c={type:"esriSMS",style:"esriSMSCircle",color:[0,0,0,255],outline:null,size:10.5},m={type:"esriSLS",style:"esriSLSSolid",color:[0,0,0,255],width:1.5},u={type:"esriSFS",style:"esriSFSSolid",color:[0,0,0,255],outline:null}},18331:(e,o,n)=>{n.d(o,{rS:()=>J,M9:()=>x,oO:()=>U});var l=n(95444),t=n(50076),r=n(31933),i=n(78135),s=n(69539),a=n(94643),c=(n(81806),n(76931)),m=n(84847),u=n(34913),y=n(94918),d=n(37471),f=n(74343),b=n(73471),p=n(84202),S=n(44460),A=n(22189);d.A.fromSimpleMarkerSymbol(p.UK),u.A.fromSimpleLineSymbol(p.A7),f.A.fromSimpleFillSymbol(p.Cx),new y.A({symbolLayers:new a.A([new m.A({material:{color:S.fT},edges:new b.A({size:(0,c.PN)(1),color:new s.A(S.JR)})})])});const g=new u.A({symbolLayers:new a.A([new A.A({material:{color:new s.A([0,0,0])},size:(0,c.PN)(1)})])}),w=new f.A({symbolLayers:new a.A([new m.A({outline:{color:new s.A([0,0,0]),size:(0,c.PN)(1)}})])});var h=n(89579),v=n(7246),C=n(76940),M=n(27410),L=n(86875),N=n(86659),k=n(16911);const I={retainId:!1,ignoreDrivers:!1,hasLabelingContext:!0};function x(e,o,n,l){const t=j(e,{},{context:l,isLabelSymbol:!1});null!=t&&(o[n]=t)}function U(e,o,n,l){const t=j(e,{},{context:l,isLabelSymbol:!0});null!=t&&(o[n]=t)}function D(e){return e instanceof i.A||e instanceof h.A}function j(e,o,n){if(null==e)return null;const{context:i,isLabelSymbol:s}=n,a=null===i||void 0===i?void 0:i.origin,c=null===i||void 0===i?void 0:i.messages;if("web-scene"===a&&!D(e)){const n=function(e){var o,n;let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:I;if(!e)return{symbol:null};const{retainId:i=I.retainId,ignoreDrivers:s=I.ignoreDrivers,hasLabelingContext:a=I.hasLabelingContext,retainCIM:c=I.retainCIM,cimFallbackEnabled:m=I.cimFallbackEnabled}=r;let b=null;if((0,l.wk)(e)||e instanceof h.A)b=e.clone();else if("cim"===e.type){var p;const l=null===(p=e.data)||void 0===p||null===(p=p.symbol)||void 0===p?void 0:p.type;switch(l){case"CIMPointSymbol":b=c?e.clone():d.A.fromCIMSymbol(e);break;case"CIMLineSymbol":m&&(b=g.clone(),null===r||void 0===r||null===(o=r.logWarning)||void 0===o||o.call(r,"Unsupported CIM line symbology converted to fallback 3D line symbology"));break;case"CIMPolygonSymbol":m&&(b=w.clone(),null===r||void 0===r||null===(n=r.logWarning)||void 0===n||n.call(r,"Unsupported CIM polygon symbology converted to fallback 3D polygon symbology"))}if(!b)return{error:new t.A("symbol-conversion:unsupported-cim-symbol","CIM symbol of type '".concat(l||"unknown","' is unsupported in 3D"),{symbol:e})}}else if(e instanceof v.A)b=u.A.fromSimpleLineSymbol(e);else if(e instanceof C.A)b=d.A.fromSimpleMarkerSymbol(e);else if(e instanceof M.A)b=d.A.fromPictureMarkerSymbol(e);else if(e instanceof L.A)b=r.geometryType&&"mesh"===r.geometryType?y.A.fromSimpleFillSymbol(e):f.A.fromSimpleFillSymbol(e);else{if(!(e instanceof N.A))return{error:new t.A("symbol-conversion:unsupported-2d-symbol","2D symbol of type '".concat(e.type||e.declaredClass,"' is unsupported in 3D"),{symbol:e})};b=a?k.A.fromTextSymbol(e):d.A.fromTextSymbol(e)}return i&&b&&"cim"!==b.type&&(b.id=e.id),s&&(0,l.wk)(b)&&b.symbolLayers.forEach((e=>e.ignoreDrivers=!0)),{symbol:b}}(e,{retainCIM:!0,hasLabelingContext:s});return null!=n.symbol?n.symbol.write(o,i):(null!==c&&void 0!==c&&c.push(new t.A("symbol:unsupported","Symbols of type '".concat(e.declaredClass,"' are not supported in scenes. Use 3D symbology instead when working with WebScene and SceneView"),{symbol:e,context:i,error:n.error})),null)}return("web-map"===a||"portal-item"===a&&!(0,r.TU)(null===i||void 0===i?void 0:i.layer))&&D(e)?(null!==c&&void 0!==c&&c.push(new t.A("symbol:unsupported","Symbols of type '".concat(e.declaredClass,"' are not supported in web maps and portal items. Use 2D symbology and CIMSymbol instead when working with MapView"),{symbol:e,context:i})),null):e.write(o,i)}function J(e,o){return(0,l.Bu)(e,null,o)}},8446:(e,o,n)=>{n.d(o,{bo:()=>d,cF:()=>y,jg:()=>A,o5:()=>f,yA:()=>b});var l=n(3825),t=n(50076),r=n(50346),i=n(90534),s=n(65308),a=n(36351),c=n(31111);let m={};function u(e,o,n){var l;const r=null!=o.portal?o.portal:s.A.getDefault();let i;const c="".concat(r.url," - ").concat(null===(l=r.user)||void 0===l?void 0:l.username," - ").concat(e);return m[c]||(m[c]=function(e,o,n){return o.load(n).then((()=>{const l=new a.A({disableExtraQuery:!0,query:"owner:".concat(p," AND type:").concat(S,' AND typekeywords:"').concat(e,'"')});return o.queryItems(l,n)})).then((o=>{let{results:l}=o,r=null;const i=e.toLowerCase();if(l&&Array.isArray(l))for(const e of l){var s;const o=null===(s=e.typeKeywords)||void 0===s?void 0:s.some((e=>e.toLowerCase()===i));if(o&&e.type===S&&e.owner===p){r=e;break}}if(!r)throw new t.A("symbolstyleutils:style-not-found","The style '".concat(e,"' could not be found"),{styleName:e});return r.load(n)}))}(e,r,n).then((e=>(i=e,e.fetchData()))).then((o=>{var n;return{data:o,baseUrl:null!==(n=i.itemUrl)&&void 0!==n?n:"",styleName:e}}))),m[c]}function y(e,o,n){return null!=(null===e||void 0===e?void 0:e.styleUrl)?async function(e,o){try{return{data:(await b(e,o)).data,baseUrl:(0,i.nM)(e),styleUrl:e}}catch(n){return(0,r.QP)(n),null}}(e.styleUrl,n):null!=(null===e||void 0===e?void 0:e.styleName)?u(e.styleName,o,n):Promise.reject(new t.A("symbolstyleutils:style-url-and-name-missing","Either styleUrl or styleName is required to resolve a style"))}function d(e){return null===e||"CIMSymbolReference"===e.type?e:{type:"CIMSymbolReference",symbol:e}}function f(e,o){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:["gltf"];if("cimRef"===o)return encodeURI(e.cimRef);if(e.formatInfos&&!(0,c.Vd)())for(const l of n){const o=e.formatInfos.find((e=>e.type===l));if(o)return o.href}return encodeURI(e.webRef)}function b(e,o){const n={responseType:"json",query:{f:"json"},...o};return(0,l.A)((0,i.S8)(e),n)}const p="esri_en",S="Style",A="https://cdn.arcgis.com/sharing/rest/content/items/220936cc6ed342c9937abd8f180e7d1e/resources/styles/cim/{SymbolName}.json?f=json"},26314:(e,o,n)=>{n.d(o,{resolveWebStyleSymbol:()=>d});var l=n(95444),t=n(93795),r=n(50076),i=n(90534),s=n(65308),a=n(79453),c=n(18331),m=n(24141),u=n(8446),y=n(25158);function d(e,o,n,d){const f=e.name;return null==f?Promise.reject(new r.A("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference")):e.styleName&&"Esri2DPointSymbolsStyle"===e.styleName?function(e,o,n){const l=u.jg.replaceAll(/\{SymbolName\}/gi,e),t=null!=o.portal?o.portal:s.A.getDefault();return(0,u.yA)(l,n).then((e=>{const o=(0,u.bo)(e.data);return(0,c.rS)(o,{portal:t,url:(0,i.An)((0,i.nM)(l)),origin:"portal-item"})}))}(f,o,d):(0,u.cF)(e,o,d).then((e=>function(e,o,n,d,f,b){var p,S,A,g;const w=null!=(null===n||void 0===n?void 0:n.portal)?n.portal:s.A.getDefault(),h={portal:w,url:(0,i.An)(e.baseUrl),origin:"portal-item"},v=function(e,o){return o.items.find((o=>o.name===e))}(o,e.data);if(!v){const e="The symbol name '".concat(o,"' could not be found");return Promise.reject(new r.A("symbolstyleutils:symbol-name-not-found",e,{symbolName:o}))}let C=(0,a.f)(f(v,d),h),M=null!==(p=null===(S=v.thumbnail)||void 0===S?void 0:S.href)&&void 0!==p?p:null;const L=null===(A=v.thumbnail)||void 0===A?void 0:A.imageData;(0,t.b5)()&&(C=null!==(g=(0,t.EM)(C))&&void 0!==g?g:"",M=(0,t.EM)(M));const N={portal:w,url:(0,i.An)((0,i.nM)(C)),origin:"portal-item"};return(0,u.yA)(C,b).then((t=>{const r="cimRef"===d?(0,u.bo)(t.data):t.data,i=(0,c.rS)(r,N);if(i&&(0,l.wk)(i)){if(M){const e=(0,a.f)(M,h);i.thumbnail=new y.V({url:e})}else L&&(i.thumbnail=new y.V({url:"data:image/png;base64,".concat(L)}));e.styleUrl?i.styleOrigin=new m.A({portal:n.portal,styleUrl:e.styleUrl,name:o}):e.styleName&&(i.styleOrigin=new m.A({portal:n.portal,styleName:e.styleName,name:o}))}return i}))}(e,f,o,n,u.o5,d)))}}}]);
//# sourceMappingURL=6314.8d52fcb4.chunk.js.map