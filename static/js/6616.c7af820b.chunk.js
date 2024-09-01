"use strict";(self.webpackChunktyphoon=self.webpackChunktyphoon||[]).push([[6616],{19898:(e,t,i)=>{i.d(t,{R:()=>s});var r=i(50076);let s=class e{constructor(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";this.major=e,this.minor=t,this._context=i}lessThan(e,t){return this.major<e||e===this.major&&this.minor<t}since(e,t){return!this.lessThan(e,t)}validate(e){if(this.major!==e.major){const t=this._context&&this._context+":",i=this._context&&this._context+" ";throw new r.A(t+"unsupported-version","Required major ".concat(i,"version is '").concat(this.major,"', but got '${version.major}.${version.minor}'"),{version:e})}}clone(){return new e(this.major,this.minor,this._context)}static parse(t){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";const[s,o]=t.split("."),n=/^\s*\d+\s*$/;if(null===s||void 0===s||!s.match||!n.test(s))throw new r.A((i&&i+":")+"invalid-version","Expected major version to be a number, but got '${version}'",{version:t});if(null===o||void 0===o||!o.match||!n.test(o))throw new r.A((i&&i+":")+"invalid-version","Expected minor version to be a number, but got '${version}'",{version:t});const l=parseInt(s,10),a=parseInt(o,10);return new e(l,a,i)}}},14873:(e,t,i)=>{i.d(t,{A:()=>O});var r=i(35143),s=i(53084),o=i(46053),n=(i(81806),i(76460)),l=i(85842),a=i(17707),u=i(53430),p=i(71832),c=i(29107),d=i(69539),y=i(3825),h=i(50076),m=i(53521),f=i(50346),v=i(19898),b=i(1900),g=i(98976),w=i(89465),x=i(42436),_=i(97763);const M="esri.renderers.support.DictionaryLoader",S={type:"CIMSimpleLineCallout",lineSymbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",width:.5,color:[0,0,0,255]}]}};class A{constructor(e,t,i){this.config=null,this.fieldMap=null,this.url=null,this._ongoingRequests=new Map,this._symbolCache=new m.q(100),this._dictionaryVersion=null,this._fieldIndex=null,this._dictionaryPromise=null,this.url=e,this.config=t,this.fieldMap=i}getSymbolFields(){return this._symbolFields}async getSymbolAsync(e,t){var i;let r;this._dictionaryPromise||(this._dictionaryPromise=this.fetchResources(t));try{r=await this._dictionaryPromise}catch(y){if((0,f.zf)(y))return this._dictionaryPromise=null,null}const s=null===(i=this._dictionaryVersion)||void 0===i?void 0:i.since(4,0),o={};if(this.fieldMap)for(const d of this._symbolFields){const t=(0,_.MO)(this.fieldMap[d],this._fieldIndex);if(t){const i=e.attributes[t];o[d]=s?i:null!=i?""+e.attributes[t]:""}else o[d]=""}let n=null;try{var l;n=null===(l=r)||void 0===l?void 0:l(o,t)}catch(h){return null}if(!n||"string"!=typeof n||"invalid"===n)return null;const a=n.split(";"),u=[],p=[];for(const m of a)if(m)if(m.includes("po:")){const e=m.substr(3).split("|");if(3===e.length){const t=e[0],i=e[1];let r=e[2];if("DashTemplate"===i)r=r.split(" ").map((e=>Number(e)));else if("Color"===i){const e=new d.A(r).toRgba();r=[e[0],e[1],e[2],255*e[3]]}else r=Number(r);p.push({primitiveName:t,propertyName:i,value:r,defaultValue:null})}}else if(m.includes("|")){for(const e of m.split("|"))if(this._itemNames.has(e)){u.push(e);break}}else this._itemNames.has(m)&&u.push(m);const c=null==e.geometry||!e.geometry.hasZ&&"point"===e.geometry.type;return this._cimPartsToCIMSymbol(e,u,p,c,t)}async fetchResources(e){if(this._dictionaryPromise)return this._dictionaryPromise;if(!this.url)return void n.A.getLogger(M).error("no valid URL!");const t=(0,y.A)(this.url+"/resources/styles/dictionary-info.json",{responseType:"json",query:{f:"json"},signal:null!=e?e.signal:null}),[{data:i}]=await Promise.all([t,(0,g.lw)()]);if(!i)throw this._dictionaryPromise=null,new h.A("esri.renderers.DictionaryRenderer","Bad dictionary data!");const{authoringInfo:r,dictionary_version:s,expression:o,itemsNames:l}=i,a=o;let u=!1;s&&(this._dictionaryVersion=v.R.parse(s),u=this._dictionaryVersion.since(4,0)),this._refSymbolUrlTemplate=this.url+"/"+i.cimRefTemplateUrl,this._itemNames=new Set(l),this._symbolFields=r.symbol;const p={};if(this.config){const e=this.config;for(const t in e)p[t]=e[t]}if(r.configuration)for(const n of r.configuration)p.hasOwnProperty(n.name)||(p[n.name]=n.value);const c=[];if(null!==e&&void 0!==e&&e.fields&&this.fieldMap)for(const n in this.fieldMap){const t=this.fieldMap[n],i=e.fields.filter((e=>e.name.toLowerCase()===(null===t||void 0===t?void 0:t.toLowerCase())));i.length>0&&c.push({...i[0],type:u?i[0].type:"esriFieldTypeString"})}c.length>0&&(this._fieldIndex=new b.A(c));const d=(0,g.xR)(a,null!=e?e.spatialReference:null,c,p).then((e=>{const t={scale:0};return(i,r)=>{var s;if(null==e)return null;const o=e.repurposeFeature({geometry:null,attributes:i});return t.scale=null!=r&&null!==(s=r.scale)&&void 0!==s?s:void 0,e.evaluate({$feature:o,$view:t},e.services)}})).catch((e=>(n.A.getLogger(M).error("Creating dictionary expression failed:",e),null)));return this._dictionaryPromise=d,d}async _cimPartsToCIMSymbol(e,t,i,r,o){const n=new Array(t.length);for(let s=0;s<t.length;s++)n[s]=this._getSymbolPart(t[s],o);let l=await Promise.all(n);const a=this.fieldMap;if(a){l=(0,s.o8)(l);for(const t of l)x.$.applyDictionaryTextOverrides(t,e,a,this._fieldIndex,(0,_.bs)(t))}return new w.A({data:I(l,i,r)})}async _getSymbolPart(e,t){const i=this._symbolCache.get(e);if(i)return i;if(this._ongoingRequests.has(e))return this._ongoingRequests.get(e).then((e=>e.data));const r=this._refSymbolUrlTemplate.replaceAll(/\{itemName\}/gi,e),s=(0,y.A)(r,{responseType:"json",query:{f:"json"},...t});this._ongoingRequests.set(e,s),s.finally((()=>this._ongoingRequests.delete(e)));try{const t=await s;return this._symbolCache.put(e,t.data),t.data}catch(o){throw o}}}function I(e,t,i){if(!e||0===e.length)return null;const r={...e[0]};if(e.length>1){r.symbolLayers=[];for(const t of e){const e=t;r.symbolLayers.unshift(...e.symbolLayers)}}return i&&(r.callout=S),{type:"CIMSymbolReference",symbol:r,primitiveOverrides:t}}var C;let j=C=class extends((0,c.h)(p.A)){constructor(e){super(e),this.config=null,this.fieldMap=null,this.scaleExpression=null,this.scaleExpressionTitle=null,this.url=null,this.type="dictionary"}get _loader(){return new A(this.url,this.config,this.fieldMap)}writeData(e,t){e&&(t.scalingExpressionInfo={expression:e,returnType:"number"})}writeVisualVariables(e,t,i,r){(null===r||void 0===r?void 0:r.origin)||super.writeVisualVariables(e,t,i,r)}clone(){return new C({config:(0,s.o8)(this.config),scaleExpression:this.scaleExpression,scaleExpressionTitle:this.scaleExpressionTitle,fieldMap:(0,s.o8)(this.fieldMap),url:(0,s.o8)(this.url),visualVariables:(0,s.o8)(this.visualVariables)})}async getSymbolAsync(e,t){return this._loader.getSymbolAsync(e,t)}async collectRequiredFields(e,t){await this.collectVVRequiredFields(e,t),this.scaleExpression&&await(0,u.Dx)(e,t,this.scaleExpression);for(const i in this.fieldMap){const r=this.fieldMap[i];t.has(r)&&e.add(r)}}get arcadeRequired(){return!0}getSymbol(){return null}getSymbols(){return[]}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce(((e,t)=>e+t.getAttributeHash()),"")}getMeshHash(){return"".concat(this.url,"-").concat(JSON.stringify(this.fieldMap))}getSymbolFields(){return this._loader.getSymbolFields()}};(0,r._)([(0,o.MZ)({type:A})],j.prototype,"_loader",null),(0,r._)([(0,o.MZ)({type:Object,json:{read:{source:"configuration"},write:{target:"configuration"}}})],j.prototype,"config",void 0),(0,r._)([(0,o.MZ)({type:Object,json:{write:!0}})],j.prototype,"fieldMap",void 0),(0,r._)([(0,o.MZ)({type:String,json:{read:{source:"scalingExpressionInfo.expression"},write:!0}})],j.prototype,"scaleExpression",void 0),(0,r._)([(0,a.K)("scaleExpression")],j.prototype,"writeData",null),(0,r._)([(0,o.MZ)({type:String,json:{read:{source:"scalingExpressionInfo.title"},write:{target:"scalingExpressionInfo.title",overridePolicy(e){return{enabled:!!e&&!!this.scaleExpression}}}}})],j.prototype,"scaleExpressionTitle",void 0),(0,r._)([(0,o.MZ)({type:String,json:{write:!0}})],j.prototype,"url",void 0),(0,r._)([(0,a.K)("visualVariables")],j.prototype,"writeVisualVariables",null),j=C=(0,r._)([(0,l.$)("esri.renderers.DictionaryRenderer")],j);const O=j},47662:(e,t,i)=>{i.d(t,{A:()=>x});var r,s=i(35143),o=i(69539),n=i(53084),l=i(46053),a=(i(81806),i(76460),i(6409)),u=i(85842),p=i(53430),c=i(71832),d=i(29107),y=i(79364),h=i(42553);i(47249);let m=r=class extends h.oY{constructor(){super(...arguments),this.unit=null}clone(){return new r({unit:this.unit})}};(0,s._)([(0,l.MZ)({type:String,json:{write:!0}})],m.prototype,"unit",void 0),m=r=(0,s._)([(0,u.$)("esri.renderers.support.DotDensityLegendOptions")],m);const f=m;var v,b=i(86875),g=i(7246);let w=v=class extends((0,d.h)(c.A)){constructor(e){super(e),this.attributes=null,this.backgroundColor=new o.A([0,0,0,0]),this.dotBlendingEnabled=!0,this.dotShape="square",this.dotSize=1,this.legendOptions=null,this.outline=new g.A,this.dotValue=null,this.referenceScale=null,this.seed=1,this.type="dot-density"}calculateDotValue(e){if(null==this.referenceScale)return this.dotValue;const t=e/this.referenceScale*this.dotValue;return t<1?1:t}getSymbol(){return new b.A({outline:this.outline})}async getSymbolAsync(){return this.getSymbol()}getSymbols(){return[this.getSymbol()]}getAttributeHash(){var e,t;return null!==(e=null===(t=this.attributes)||void 0===t?void 0:t.reduce(((e,t)=>e+t.getAttributeHash()),""))&&void 0!==e?e:""}getMeshHash(){return JSON.stringify(this.outline)}clone(){return new v({attributes:(0,n.o8)(this.attributes),backgroundColor:(0,n.o8)(this.backgroundColor),dotBlendingEnabled:(0,n.o8)(this.dotBlendingEnabled),dotShape:(0,n.o8)(this.dotShape),dotSize:(0,n.o8)(this.dotSize),dotValue:(0,n.o8)(this.dotValue),legendOptions:(0,n.o8)(this.legendOptions),outline:(0,n.o8)(this.outline),referenceScale:(0,n.o8)(this.referenceScale),seed:(0,n.o8)(this.seed),visualVariables:(0,n.o8)(this.visualVariables),authoringInfo:(0,n.o8)(this.authoringInfo)})}getControllerHash(){var e;const t=null===(e=this.attributes)||void 0===e?void 0:e.map((e=>e.field||e.valueExpression||""));return"".concat(t,"-").concat(this.outline&&JSON.stringify(this.outline.toJSON())||"")}async collectRequiredFields(e,t){await this.collectVVRequiredFields(e,t);for(const r of null!==(i=this.attributes)&&void 0!==i?i:[]){var i;r.valueExpression&&await(0,p.Dx)(e,t,r.valueExpression),r.field&&e.add(r.field)}}};(0,s._)([(0,l.MZ)({type:[y.A],json:{write:!0}})],w.prototype,"attributes",void 0),(0,s._)([(0,l.MZ)({type:o.A,json:{write:!0}})],w.prototype,"backgroundColor",void 0),(0,s._)([(0,l.MZ)({type:Boolean,json:{write:!0}})],w.prototype,"dotBlendingEnabled",void 0),(0,s._)([(0,l.MZ)({type:String,json:{write:!1}})],w.prototype,"dotShape",void 0),(0,s._)([(0,l.MZ)({type:Number,json:{write:!0}})],w.prototype,"dotSize",void 0),(0,s._)([(0,l.MZ)({type:f,json:{write:!0}})],w.prototype,"legendOptions",void 0),(0,s._)([(0,l.MZ)({type:g.A,json:{default:null,write:!0}})],w.prototype,"outline",void 0),(0,s._)([(0,l.MZ)({type:Number,json:{write:!0}})],w.prototype,"dotValue",void 0),(0,s._)([(0,l.MZ)({type:Number,json:{write:!0}})],w.prototype,"referenceScale",void 0),(0,s._)([(0,l.MZ)({type:Number,json:{write:!0}})],w.prototype,"seed",void 0),(0,s._)([(0,a.e)({dotDensity:"dot-density"})],w.prototype,"type",void 0),w=v=(0,s._)([(0,u.$)("esri.renderers.DotDensityRenderer")],w);const x=w},72690:(e,t,i)=>{i.d(t,{A:()=>I});var r=i(35143),s=i(69539),o=(i(95444),i(63241)),n=i(53084),l=i(76460),a=i(52394),u=i(76931),p=i(46053),c=(i(81806),i(39314)),d=i(6409),y=i(85842),h=i(53430),m=i(71832),f=i(33285),v=i(83804),b=i(69098),g=i(42553);i(47249);let w=class extends((0,b.O)(g.oY)){constructor(){super(...arguments),this.minLabel=null,this.maxLabel=null,this.title=null}};(0,r._)([(0,p.MZ)({type:String,json:{write:!0}})],w.prototype,"minLabel",void 0),(0,r._)([(0,p.MZ)({type:String,json:{write:!0}})],w.prototype,"maxLabel",void 0),(0,r._)([(0,p.MZ)({type:String,json:{write:!0}})],w.prototype,"title",void 0),w=(0,r._)([(0,y.$)("esri.renderers.support.HeatmapLegendOptions")],w);var x,_=i(4414),M=i(76940);function S(e){if(null!=e){const{maxDensity:t,minDensity:i,radius:r}=e;if(null!=t||null!=i||null!=r){const{blurRadius:t,maxPixelIntensity:i,minPixelIntensity:r,...s}=e;return s}}return e}let A=x=class extends m.A{constructor(e){super(e),this.authoringInfo=null,this.colorStops=[new v.A({ratio:0,color:new s.A("rgba(255, 140, 0, 0)")}),new v.A({ratio:.75,color:new s.A("rgba(255, 140, 0, 1)")}),new v.A({ratio:.9,color:new s.A("rgba(255, 0,   0, 1)")})],this.field=null,this.legendOptions=null,this.maxDensity=.04,this.minDensity=0,this.radius=18,this.referenceScale=0,this.type="heatmap",this.valueExpression=null,this.valueExpressionTitle=null,this._warnedProps={blurRadius:!1,maxPixelIntensity:!1,minPixelIntensity:!1}}normalizeCtorArgs(e){return S(e)}get blurRadius(){return(0,_.PU)(this.radius)}set blurRadius(e){const t=this.maxPixelIntensity,i=this.minPixelIntensity;this._set("radius",(0,_.zp)(e)),this._warnAboutDeprecatedGaussianBlurProp("blurRadius","radius"),this._set("maxDensity",t*this._pixelIntensityToDensity),this._set("minDensity",i*this._pixelIntensityToDensity)}get maxPixelIntensity(){return this.maxDensity/this._pixelIntensityToDensity}set maxPixelIntensity(e){this._set("maxDensity",e*this._pixelIntensityToDensity),this._warnAboutDeprecatedGaussianBlurProp("maxPixelIntensity","maxDensity")}get minPixelIntensity(){return this.minDensity/this._pixelIntensityToDensity}set minPixelIntensity(e){this._set("minDensity",e*this._pixelIntensityToDensity),this._warnAboutDeprecatedGaussianBlurProp("minPixelIntensity","minDensity")}get _pixelIntensityToDensity(){return 24/(_.ex**2*this.blurRadius**4)}_warnAboutDeprecatedGaussianBlurProp(e,t){this._warnedProps[e]||"user"===(0,c.oY)(this).getDefaultOrigin()&&(this._warnedProps[e]=!0,(0,a._)((()=>{(0,o.Lx)(l.A.getLogger(this),e,{replacement:"".concat(String(t)," (suggested value: ").concat(this._get(t),")"),version:"4.24"})})))}read(e,t){e=S(e),super.read(e,t)}getSymbol(){return new M.A}async getSymbolAsync(){return this.getSymbol()}getSymbols(){return[this.getSymbol()]}async collectRequiredFields(e,t){const i=this.field,r=this.valueExpression;i&&"string"==typeof i&&(0,h.rq)(e,t,i),r&&"string"==typeof r&&await(0,h.Dx)(e,t,r)}getAttributeHash(){return null}getMeshHash(){return"".concat(JSON.stringify(this.colorStops),".").concat(this.blurRadius,".").concat(this.field)}clone(){return new x({authoringInfo:this.authoringInfo&&this.authoringInfo.clone(),colorStops:(0,n.o8)(this.colorStops),field:this.field,legendOptions:(0,n.o8)(this.legendOptions),maxDensity:this.maxDensity,minDensity:this.minDensity,radius:this.radius,referenceScale:this.referenceScale,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle})}};(0,r._)([(0,p.MZ)({type:f.A,json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],A.prototype,"authoringInfo",void 0),(0,r._)([(0,p.MZ)({type:Number,json:{origins:{"portal-item":{write:!0},"web-map":{write:!0}}}})],A.prototype,"blurRadius",null),(0,r._)([(0,p.MZ)({type:[v.A],json:{write:!0}})],A.prototype,"colorStops",void 0),(0,r._)([(0,p.MZ)({type:String,json:{write:!0}})],A.prototype,"field",void 0),(0,r._)([(0,p.MZ)({type:w,json:{write:!0}})],A.prototype,"legendOptions",void 0),(0,r._)([(0,p.MZ)({type:Number,json:{write:!0}})],A.prototype,"maxDensity",void 0),(0,r._)([(0,p.MZ)({type:Number,json:{origins:{"portal-item":{write:!0},"web-map":{write:!0}}}})],A.prototype,"maxPixelIntensity",null),(0,r._)([(0,p.MZ)({type:Number,json:{write:!0}})],A.prototype,"minDensity",void 0),(0,r._)([(0,p.MZ)({type:Number,json:{origins:{"portal-item":{write:!0},"web-map":{write:!0}}}})],A.prototype,"minPixelIntensity",null),(0,r._)([(0,p.MZ)({type:Number,cast:u.cr,json:{write:!0}})],A.prototype,"radius",void 0),(0,r._)([(0,p.MZ)({type:Number,range:{min:0},json:{default:0,write:!0}})],A.prototype,"referenceScale",void 0),(0,r._)([(0,d.e)({heatmap:"heatmap"})],A.prototype,"type",void 0),(0,r._)([(0,p.MZ)({type:String,json:{write:!0,origins:{"web-document":{write:!1},"portal-item":{write:!1}}}})],A.prototype,"valueExpression",void 0),(0,r._)([(0,p.MZ)({type:String})],A.prototype,"valueExpressionTitle",void 0),(0,r._)([(0,p.MZ)({readOnly:!0})],A.prototype,"_pixelIntensityToDensity",null),A=x=(0,r._)([(0,y.$)("esri.renderers.HeatmapRenderer")],A);const I=A},86946:(e,t,i)=>{i.d(t,{A:()=>_});var r=i(35143),s=i(69539),o=(i(95444),i(18690)),n=i(69098),l=i(76931),a=i(46053),u=(i(81806),i(76460),i(6409)),p=i(85842),c=i(53430),d=i(71832),y=i(29107),h=i(79364),m=i(42553);i(47249);let f=class extends((0,n.O)(m.oY)){constructor(){super(...arguments),this.color=new s.A([0,0,0,0]),this.label=null,this.threshold=0}};(0,r._)([(0,a.MZ)({type:s.A,json:{write:!0}})],f.prototype,"color",void 0),(0,r._)([(0,a.MZ)({type:String,json:{write:!0}})],f.prototype,"label",void 0),(0,r._)([(0,a.MZ)({type:Number,range:{min:0,max:1},json:{write:!0}})],f.prototype,"threshold",void 0),f=(0,r._)([(0,p.$)("esri.renderers.support.OthersCategory")],f);let v=class extends((0,n.O)(m.oY)){constructor(){super(...arguments),this.title=null}};(0,r._)([(0,a.MZ)({type:String,json:{write:!0}})],v.prototype,"title",void 0),v=(0,r._)([(0,p.$)("esri.renderers.support.PieChartLegendOptions")],v);var b=i(76940),g=i(86875),w=i(7246);let x=class extends((0,y.h)((0,n.O)(d.A))){constructor(e){super(e),this.attributes=null,this.backgroundFillSymbol=null,this.defaultColor=new s.A([0,0,0,0]),this.defaultLabel=null,this.holePercentage=0,this.othersCategory=new f,this.legendOptions=null,this.outline=null,this.size=12,this.type="pie-chart"}getSymbol(){var e;return new b.A({size:this.size?this.size/2+((null===(e=this.outline)||void 0===e?void 0:e.width)||0):0})}async getSymbolAsync(){return this.getSymbol()}getSymbols(){return[this.getSymbol(),this.backgroundFillSymbol].filter(o.Ru)}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce(((e,t)=>e+t.getAttributeHash()),"")}getMeshHash(){return this.getSymbols().reduce(((e,t)=>e+JSON.stringify(t)),"")}async collectRequiredFields(e,t){await this.collectVVRequiredFields(e,t);for(const i of this.attributes)i.valueExpression&&await(0,c.Dx)(e,t,i.valueExpression),i.field&&e.add(i.field)}};(0,r._)([(0,a.MZ)({type:[h.A],json:{write:!0}})],x.prototype,"attributes",void 0),(0,r._)([(0,a.MZ)({type:g.A,json:{default:null,write:!0}})],x.prototype,"backgroundFillSymbol",void 0),(0,r._)([(0,a.MZ)({type:s.A,json:{write:!0}})],x.prototype,"defaultColor",void 0),(0,r._)([(0,a.MZ)({type:String,json:{write:!0}})],x.prototype,"defaultLabel",void 0),(0,r._)([(0,a.MZ)({type:Number,range:{min:0,max:1},json:{write:!0}})],x.prototype,"holePercentage",void 0),(0,r._)([(0,a.MZ)({type:f,json:{write:!0}})],x.prototype,"othersCategory",void 0),(0,r._)([(0,a.MZ)({type:v,json:{write:!0}})],x.prototype,"legendOptions",void 0),(0,r._)([(0,a.MZ)({type:w.A,json:{default:null,write:!0}})],x.prototype,"outline",void 0),(0,r._)([(0,a.MZ)({type:Number,cast:l.cr,json:{write:!0}})],x.prototype,"size",void 0),(0,r._)([(0,u.e)({pieChart:"pie-chart"})],x.prototype,"type",void 0),x=(0,r._)([(0,p.$)("esri.renderers.PieChartRenderer")],x);const _=x},5766:(e,t,i)=>{i.d(t,{A:()=>y});var r,s=i(35143),o=i(53084),n=i(46053),l=(i(81806),i(76460),i(6409)),a=i(85842),u=i(71832),p=i(29107),c=i(23243);let d=r=class extends((0,p.h)(u.A)){constructor(e){super(e),this.description=null,this.label=null,this.symbol=null,this.type="simple"}async collectRequiredFields(e,t){await Promise.all([this.collectSymbolFields(e,t),this.collectVVRequiredFields(e,t)])}async collectSymbolFields(e,t){await Promise.all(this.getSymbols().map((i=>i.collectRequiredFields(e,t))))}getSymbol(e,t){return this.symbol}async getSymbolAsync(e,t){return this.symbol}getSymbols(){return this.symbol?[this.symbol]:[]}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce(((e,t)=>e+t.getAttributeHash()),"")}getMeshHash(){return this.getSymbols().reduce(((e,t)=>e+JSON.stringify(t)),"")}get arcadeRequired(){return this.arcadeRequiredForVisualVariables}clone(){return new r({description:this.description,label:this.label,symbol:(0,o.o8)(this.symbol),visualVariables:(0,o.o8)(this.visualVariables),authoringInfo:(0,o.o8)(this.authoringInfo)})}};(0,s._)([(0,n.MZ)({type:String,json:{write:!0}})],d.prototype,"description",void 0),(0,s._)([(0,n.MZ)({type:String,json:{write:!0}})],d.prototype,"label",void 0),(0,s._)([(0,n.MZ)(c.Wp)],d.prototype,"symbol",void 0),(0,s._)([(0,l.e)({simple:"simple"})],d.prototype,"type",void 0),d=r=(0,s._)([(0,a.$)("esri.renderers.SimpleRenderer")],d);const y=d},79364:(e,t,i)=>{i.d(t,{A:()=>y});var r,s=i(35143),o=i(69539),n=i(42553),l=i(76460),a=i(46053),u=i(21403),p=(i(47249),i(81806),i(85842)),c=i(40565);let d=r=class extends n.oY{constructor(e){super(e),this.color=null,this.field=null,this.label=null,this.valueExpression=null,this.valueExpressionTitle=null}castField(e){return null==e?e:"function"==typeof e?(l.A.getLogger(this).error(".field: field must be a string value"),null):(0,c.GX)(e)}getAttributeHash(){return"".concat(this.field,"-").concat(this.valueExpression)}clone(){var e;return new r({color:null===(e=this.color)||void 0===e?void 0:e.clone(),field:this.field,label:this.label,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle})}};(0,s._)([(0,a.MZ)({type:o.A,json:{type:[Number],write:!0}})],d.prototype,"color",void 0),(0,s._)([(0,a.MZ)({type:String,json:{write:!0}})],d.prototype,"field",void 0),(0,s._)([(0,u.w)("field")],d.prototype,"castField",null),(0,s._)([(0,a.MZ)({type:String,json:{write:!0}})],d.prototype,"label",void 0),(0,s._)([(0,a.MZ)({type:String,json:{write:!0}})],d.prototype,"valueExpression",void 0),(0,s._)([(0,a.MZ)({type:String,json:{write:!0}})],d.prototype,"valueExpressionTitle",void 0),d=r=(0,s._)([(0,p.$)("esri.renderers.support.AttributeColorInfo")],d);const y=d},83804:(e,t,i)=>{i.d(t,{A:()=>c});var r,s=i(35143),o=i(69539),n=i(42553),l=i(46053),a=i(40565),u=(i(47249),i(81806),i(85842));let p=r=class extends n.oY{constructor(e){super(e),this.color=null,this.ratio=null}clone(){return new r({color:this.color&&this.color.clone(),ratio:this.ratio})}};(0,s._)([(0,l.MZ)({type:o.A,json:{type:[a.jz],default:null,write:!0}})],p.prototype,"color",void 0),(0,s._)([(0,l.MZ)({type:Number,json:{write:!0}})],p.prototype,"ratio",void 0),p=r=(0,s._)([(0,u.$)("esri.renderers.support.HeatmapColorStop")],p);const c=p},86616:(e,t,i)=>{i.d(t,{L:()=>a,r:()=>n});var r=i(62754),s=i(7982),o=i(31382);function n(e,t){return a(e,null,t)}const l=(0,s.C)({types:o.H});function a(e,t,i){return e?e&&(e.styleName||e.styleUrl)&&"uniqueValue"!==e.type?(null!==i&&void 0!==i&&i.messages&&i.messages.push(new r.A("renderer:unsupported","Only UniqueValueRenderer can be referenced from a web style, but found '"+e.type+"'",{definition:e,context:i})),null):l(e,t,i):null}},31382:(e,t,i)=>{i.d(t,{H:()=>d,X:()=>y});var r=i(76460),s=i(63844),o=i(14873),n=i(47662),l=i(72690),a=i(86946),u=i(71832),p=i(5766),c=i(35039);const d={key:"type",base:u.A,typeMap:{heatmap:l.A,simple:p.A,"unique-value":c.A,"class-breaks":s.A,"dot-density":n.A,dictionary:o.A,"pie-chart":a.A},errorContext:"renderer"},y={key:"type",base:u.A,typeMap:{simple:p.A,"unique-value":c.A,"class-breaks":s.A,heatmap:l.A},errorContext:"renderer",validate:function(e){switch(e.type){case"simple":return function(e){if(e.symbol)return e;r.A.getLogger("esri.renderers.support.types").error("Removed invalid 'simple' renderer without a symbol from web scene.")}(e);case"unique-value":return function(e){const t=e.uniqueValueInfos,i=null===t||void 0===t?void 0:t.filter(((e,t)=>{let{symbol:i,label:s}=e;return i||r.A.getLogger("esri.renderers.support.types").error("Removed invalid unique value info ([".concat(t,"] ").concat(s,") without a symbol from web scene.")),!!i}));return(null===i||void 0===i?void 0:i.length)!==(null===t||void 0===t?void 0:t.length)&&(e.uniqueValueInfos=i),e}(e);case"class-breaks":return function(e){const t=e.classBreakInfos,i=null===t||void 0===t?void 0:t.filter(((e,t)=>{let{symbol:i,label:s}=e;return i||r.A.getLogger("esri.renderers.support.types").error("Removed invalid class break info ([".concat(t,"] ").concat(s,") without a symbol from web scene.")),!!i}));return(null===i||void 0===i?void 0:i.length)!==(null===t||void 0===t?void 0:t.length)&&(e.classBreakInfos=i),e}(e);case"heatmap":return e}}}},42436:(e,t,i)=>{i.d(t,{$:()=>m});var r=i(69539),s=i(59784),o=i(53084),n=i(98976),l=i(97763),a=i(50076),u=i(76460),p=i(76279);function c(e,t,i,r,s){if(null==e)return null;const o=e.referencesGeometry()&&s?y(t,r,s):t,n=e.repurposeFeature(o);try{return e.evaluate({...i,$feature:n},e.services)}catch(l){return u.A.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",l),null}}const d=new Map;function y(e,t,i){const{transform:r,hasZ:s,hasM:o}=i;d.has(t)||d.set(t,function(e){const t={};switch(e){case"esriGeometryPoint":return(e,i,r,s)=>(0,p.Tr)(i,t,e,r,s);case"esriGeometryPolygon":return(e,i,r,s)=>(0,p.$X)(i,t,e,r,s);case"esriGeometryPolyline":return(e,i,r,s)=>(0,p.P5)(i,t,e,r,s);case"esriGeometryMultipoint":return(e,i,r,s)=>(0,p.SW)(i,t,e,r,s);default:return u.A.getLogger("esri.views.2d.support.arcadeOnDemand").error(new a.A("mapview-arcade","Unable to handle geometryType: ".concat(e))),e=>e}}(t));const n=d.get(t)(e.geometry,r,s,o);return{...e,geometry:n}}const h=e=>{if(!e)return[0,0,0,0];const{r:t,g:i,b:r,a:s}=e;return[t,i,r,255*s]};class m{static findApplicableOverrides(e,t,i){if(e&&t){if(e.primitiveName){let r=!1;for(const t of i)if(t.primitiveName===e.primitiveName){r=!0;break}if(!r)for(const s of t)s.primitiveName===e.primitiveName&&i.push(s)}switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(e.effects)for(const r of e.effects)m.findApplicableOverrides(r,t,i);if(e.symbolLayers)for(const r of e.symbolLayers)m.findApplicableOverrides(r,t,i);break;case"CIMTextSymbol":break;case"CIMSolidStroke":case"CIMPictureStroke":case"CIMGradientStroke":case"CIMSolidFill":case"CIMPictureFill":case"CIMHatchFill":case"CIMGradientFill":case"CIMVectorMarker":case"CIMCharacterMarker":case"CIMPictureMarker":if(e.effects)for(const r of e.effects)m.findApplicableOverrides(r,t,i);if(e.markerPlacement&&m.findApplicableOverrides(e.markerPlacement,t,i),"CIMVectorMarker"===e.type){if(e.markerGraphics)for(const r of e.markerGraphics)m.findApplicableOverrides(r,t,i),m.findApplicableOverrides(r.symbol,t,i)}else"CIMCharacterMarker"===e.type?m.findApplicableOverrides(e.symbol,t,i):"CIMHatchFill"===e.type?m.findApplicableOverrides(e.lineSymbol,t,i):"CIMPictureMarker"===e.type&&m.findApplicableOverrides(e.animatedSymbolProperties,t,i)}}}static findEffectOverrides(e,t){if(!e)return null;if("CIMGeometricEffectDashes"===e.type&&(0,l.K3)(e),!t||!e.primitiveName)return{type:"cim-effect-param",effect:e,overrides:[]};const i=(0,l.rB)(e),r=e.primitiveName,s=[];for(const o of t)o.primitiveName===r&&s.push((0,l.rB)(o));return{type:"cim-effect-param",effect:i,overrides:(0,l.pk)(s)}}static async resolveSymbolOverrides(e,t,i,r,s,n,a){if(null===e||void 0===e||!e.symbol)return null;let{symbol:u,primitiveOverrides:p}=e;const c=!!p;if(!c&&!r)return u;u=(0,o.o8)(u),p=(0,o.o8)(p);let d=!0;if(t||(t={attributes:{}},d=!1),c){if(d||(p=p.filter((e=>{var t;return!(null!==(t=e.valueExpressionInfo)&&void 0!==t&&t.expression.includes("$feature"))}))),a||(p=p.filter((e=>{var t;return!(null!==(t=e.valueExpressionInfo)&&void 0!==t&&t.expression.includes("$view"))}))),p.length>0){const e={spatialReference:i,fields:(0,l.O2)(t.attributes),geometryType:s};await m.createRenderExpressions(p,e),m.evaluateOverrides(p,t,null!==s&&void 0!==s?s:"esriGeometryPoint",n,a)}m.applyOverrides(u,p)}return r&&m.applyDictionaryTextOverrides(u,t,r,null),u}static async createRenderExpressions(e,t){const i=[];for(const r of e){const e=r.valueExpressionInfo;if(!e||m._expressionToRenderExpression.has(e.expression))continue;const s=(0,n.Ad)(e.expression,t.spatialReference,t.fields);i.push(s),s.then((t=>m._expressionToRenderExpression.set(e.expression,t)))}i.length>0&&await Promise.all(i)}static evaluateOverrides(e,t,i,r,o){const n={$view:{scale:null===o||void 0===o?void 0:o.scale}};for(const l of e){l.value&&"object"==typeof l.value&&(0,s.IB)(l.value)&&("Color"===l.propertyName||"StrokeColor"===l.propertyName)&&(l.value=h(l.value));const e=l.valueExpressionInfo;if(!e)continue;const o=m._expressionToRenderExpression.get(e.expression);o&&(l.value=c(o,t,n,i,r))}}static applyDictionaryTextOverrides(e,t,i,r){let s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"Normal";if(null!==e&&void 0!==e&&e.type)switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":case"CIMTextSymbol":{const o=e.symbolLayers;if(!o)return;for(const n of o)n&&"CIMVectorMarker"===n.type&&m.applyDictionaryTextOverrides(n,t,i,r,"CIMTextSymbol"===e.type?e.textCase:s)}break;case"CIMVectorMarker":{const s=e.markerGraphics;if(!s)return;for(const e of s)e&&m.applyDictionaryTextOverrides(e,t,i,r)}break;case"CIMMarkerGraphic":{const o=e.textString;if(o&&o.includes("[")){const n=(0,l.gQ)(o,i);e.textString=(0,l.FM)(t,n,r,s)}}}}static applyOverrides(e,t,i,r){if(e.primitiveName)for(const s of t)if(s.primitiveName===e.primitiveName){const t=(0,l.YF)(s.propertyName);if(r&&r.push({cim:e,nocapPropertyName:t,value:e[t]}),i){let t=!1;for(const r of i)r.primitiveName===e.primitiveName&&(t=!0);t||i.push(s)}null!=s.value&&(e[t]=s.value)}switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(e.effects)for(const s of e.effects)m.applyOverrides(s,t,i,r);if(e.symbolLayers)for(const s of e.symbolLayers)m.applyOverrides(s,t,i,r);break;case"CIMTextSymbol":break;case"CIMSolidStroke":case"CIMSolidFill":case"CIMVectorMarker":if(e.effects)for(const s of e.effects)m.applyOverrides(s,t,i,r);if("CIMVectorMarker"===e.type&&e.markerGraphics)for(const s of e.markerGraphics)m.applyOverrides(s,t,i,r),m.applyOverrides(s.symbol,t,i,r)}}static restoreOverrides(e){for(const t of e)t.cim[t.nocapPropertyName]=t.value}static buildOverrideKey(e){let t="";for(const i of e)void 0!==i.value&&(t+="".concat(i.primitiveName).concat(i.propertyName).concat(JSON.stringify(i.value)));return t}static toValue(e,t){if("DashTemplate"===e)return t.split(" ").map((e=>Number(e)));if("Color"===e){const e=new r.A(t).toRgba();return e[3]*=255,e}return t}}m._expressionToRenderExpression=new Map}}]);
//# sourceMappingURL=6616.c7af820b.chunk.js.map