"use strict";(self.webpackChunktyphoon=self.webpackChunktyphoon||[]).push([[1740],{31516:(e,t,i)=>{i.d(t,{F:()=>n});var s=i(82111),r=(i(18690),i(63241),i(53084),i(76460),i(18288));i(72027);function n(e,t,i){if(null==(null===e||void 0===e?void 0:e.timeInfo))return null;const{datesInUnknownTimezone:n=!1,timeOffset:l,useViewTime:o}=e;let a=e.timeExtent;n&&(a=function(e){if(!e)return e;const{start:t,end:i}=e;return new s.A({start:null!=t?(0,r.S1)(t,t.getTimezoneOffset(),"minutes"):t,end:null!=i?(0,r.S1)(i,i.getTimezoneOffset(),"minutes"):i})}(a));let p=o?t&&a?t.intersection(a):t||a:a;return!p||p.isEmpty||p.isAllTime?p:(l&&(p=p.offset(-l.value,l.unit)),n&&(p=function(e){if(!e)return e;const{start:t,end:i}=e;return new s.A({start:null!=t?(0,r.S1)(t,-t.getTimezoneOffset(),"minutes"):t,end:null!=i?(0,r.S1)(i,-i.getTimezoneOffset(),"minutes"):i})}(p)),p.equals(i)?i:p)}},72027:(e,t,i)=>{i.d(t,{X:()=>s});const s=Symbol("WebScene")},90104:(e,t,i)=>{i.d(t,{e:()=>b});var s,r=i(35143),n=i(94643),l=i(3975),o=i(50076),a=i(68134),p=i(46053),d=(i(81806),i(76460),i(47249),i(85842)),u=i(21904),h=i(7464),c=i(97001);let v=s=class extends c.A{constructor(e){super(e),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new s({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}commitVersionProperties(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom")}};(0,r._)([(0,p.MZ)({type:[Number,String],json:{write:!0}})],v.prototype,"left",void 0),(0,r._)([(0,p.MZ)({type:[Number,String],json:{write:!0}})],v.prototype,"right",void 0),(0,r._)([(0,p.MZ)({type:[Number,String],json:{write:!0}})],v.prototype,"top",void 0),(0,r._)([(0,p.MZ)({type:[Number,String],json:{write:!0}})],v.prototype,"bottom",void 0),v=s=(0,r._)([(0,d.$)("esri.views.layers.support.ClipRect")],v);const y=v;var g=i(47266);let f=class extends c.A{constructor(e){super(e),this.type="path",this.path=[]}commitVersionProperties(){this.commitProperty("path")}};(0,r._)([(0,p.MZ)({type:[[[Number]]],json:{write:!0}})],f.prototype,"path",void 0),f=(0,r._)([(0,d.$)("esri.views.layers.support.Path")],f);const m=f;var w=i(90992);const S=n.A.ofType({key:"type",base:null,typeMap:{rect:y,path:m,geometry:g.A}}),b=e=>{let t=class extends e{constructor(){super(...arguments),this.attached=!1,this.clips=new S,this.highlightOptions=null,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1,this._visibleAtCurrentScale=!0}initialize(){var e,t,i,s;const r=null===(e=null===(t=this.view)||void 0===t?void 0:t.spatialReferenceLocked)||void 0===e||e;(null===(i=this.view)||void 0===i?void 0:i.spatialReference)&&r&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new o.A("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new u.m),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.addHandles([(0,a.wB)((()=>this.suspended),(e=>{this.container&&(this.container.visible=!e)}),a.pc),(0,a.wB)((()=>this.updateSuspended),(e=>{this.view&&!e&&this.updateRequested&&this.view.requestUpdate()}),a.pc),(0,a.wB)((()=>{var e,t;return null!==(e=null===(t=this.layer)||void 0===t?void 0:t.opacity)&&void 0!==e?e:1}),(e=>{this.container&&(this.container.opacity=e)}),a.pc),(0,a.wB)((()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal"),(e=>{this.container&&(this.container.blendMode=e)}),a.pc),(0,a.wB)((()=>this.layer&&"effect"in this.layer?this.layer.effect:null),(e=>{this.container&&(this.container.effect=e)}),a.pc),(0,a.wB)((()=>this.highlightOptions),(e=>this.container.highlightOptions=e),a.pc),(0,a.on)((()=>this.clips),"change",(()=>{this.container&&(this.container.clips=this.clips)}),a.pc),(0,a.wB)((()=>{var e;return{scale:null===(e=this.view)||void 0===e?void 0:e.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null}}),(e=>{let{scale:t,scaleRange:i}=e;const s=(0,w.E5)(i,t);s!==this._visibleAtCurrentScale&&(this._visibleAtCurrentScale=s)}),a.pc)],"constructor"),null!==(s=this.view)&&void 0!==s&&s.whenLayerView?this.view.whenLayerView(this.layer).then((e=>{e===this&&this.processAttach()}),(()=>{})):this.when().then((()=>{this.processAttach()}),(()=>{})))}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){var e;const t=null===(e=this.view)||void 0===e?void 0:e.spatialReference;return null==t||this.supportsSpatialReference(t)}get updating(){var e;return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!(null===(e=this._updatingHandles)||void 0===e||!e.updating))}get visibleAtCurrentScale(){return this._visibleAtCurrentScale}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.removeHandles("attach"),this.detach(),this.updateRequested=!1)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.updateSuspended||this.view.requestUpdate())}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.updateSuspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}hitTest(e,t){return Promise.resolve(null)}supportsSpatialReference(e){return!0}canResume(){return!!this.spatialReferenceSupported&&!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const e=super.getSuspendInfo(),t=!this.spatialReferenceSupported;return t&&(e.spatialReferenceNotSupported=t),e}addAttachHandles(e){this.addHandles(e,"attach")}};return(0,r._)([(0,p.MZ)()],t.prototype,"attached",void 0),(0,r._)([(0,p.MZ)({type:S,set(e){const t=(0,l.V)(e,this._get("clips"),S);this._set("clips",t)}})],t.prototype,"clips",void 0),(0,r._)([(0,p.MZ)()],t.prototype,"container",void 0),(0,r._)([(0,p.MZ)({type:h.A})],t.prototype,"highlightOptions",void 0),(0,r._)([(0,p.MZ)()],t.prototype,"moving",void 0),(0,r._)([(0,p.MZ)({readOnly:!0})],t.prototype,"spatialReferenceSupported",null),(0,r._)([(0,p.MZ)({readOnly:!0})],t.prototype,"updateParameters",void 0),(0,r._)([(0,p.MZ)()],t.prototype,"updateRequested",void 0),(0,r._)([(0,p.MZ)()],t.prototype,"updating",null),(0,r._)([(0,p.MZ)()],t.prototype,"view",void 0),(0,r._)([(0,p.MZ)()],t.prototype,"_visibleAtCurrentScale",void 0),(0,r._)([(0,p.MZ)({readOnly:!0})],t.prototype,"visibleAtCurrentScale",null),t=(0,r._)([(0,d.$)("esri.views.2d.layers.LayerView2D")],t),t}},91196:(e,t,i)=>{i.d(t,{A:()=>y});var s=i(35143),r=i(91967),n=i(54099),l=i(5632),o=i(76460),a=i(30726),p=i(91291),d=i(46053),u=(i(81806),i(47249),i(85842)),h=i(19451),c=i(90992);let v=class extends((0,l.sA)((0,p.g)(n.A.EventedMixin(r.A)))){constructor(e){super(e),this._updatingHandles=new h.U,this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){var t;const i=this.layer&&this.layer.id||"no id",s=(null===(t=this.layer)||void 0===t?void 0:t.title)||"no title";o.A.getLogger(this).error("#resolve()","Failed to resolve layer view (layer title: '".concat(s,"', id: '").concat(i,"')"),e)}}))}destroy(){this._updatingHandles=(0,a.pR)(this._updatingHandles)}get fullOpacity(){var e,t,i,s;return(null!==(e=null===(t=this.layer)||void 0===t?void 0:t.opacity)&&void 0!==e?e:1)*(null!==(i=null===(s=this.parent)||void 0===s?void 0:s.fullOpacity)&&void 0!==i?i:1)}get suspended(){return this.destroyed||!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){var e;return!this.suspended&&!0===(null===(e=this.layer)||void 0===e?void 0:e.legendEnabled)}get updating(){var e;return!((null===(e=this._updatingHandles)||void 0===e||!e.updating)&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get updateSuspended(){return this.suspended}get visible(){var e;return!0===(null===(e=this.layer)||void 0===e?void 0:e.visible)}set visible(e){this._overrideIfSome("visible",e)}get visibleAtCurrentScale(){return!0}get visibleAtCurrentTimeExtent(){var e;const t=this.view.timeExtent,i=null===(e=this.layer)||void 0===e?void 0:e.visibilityTimeExtent;return!t||!i||!t.intersection(i).isEmpty}canResume(){var e,t,i;const s=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return this.visible&&(null===(e=this.layer)||void 0===e?void 0:e.loaded)&&!(null!==(t=this.parent)&&void 0!==t&&t.suspended)&&(null===(i=this.view)||void 0===i?void 0:i.ready)&&(0,c.g7)(s)&&this.visibleAtCurrentScale&&this.visibleAtCurrentTimeExtent||!1}getSuspendInfo(){var e,t;const i=null!==(e=this.parent)&&void 0!==e&&e.suspended?this.parent.suspendInfo:{};null!==(t=this.view)&&void 0!==t&&t.ready||(i.viewNotReady=!0),this.layer&&this.layer.loaded||(i.layerNotLoaded=!0);const s=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return(0,c.g7)(s)&&this.visibleAtCurrentScale||(i.outsideScaleRange=!0),this.visibleAtCurrentTimeExtent||(i.outsideVisibilityTimeExtent=!0),this.visible||(i.layerInvisible=!0),i}isUpdating(){return!1}};(0,s._)([(0,d.MZ)()],v.prototype,"view",void 0),(0,s._)([(0,d.MZ)()],v.prototype,"fullOpacity",null),(0,s._)([(0,d.MZ)()],v.prototype,"layer",void 0),(0,s._)([(0,d.MZ)()],v.prototype,"parent",void 0),(0,s._)([(0,d.MZ)({readOnly:!0})],v.prototype,"suspended",null),(0,s._)([(0,d.MZ)({readOnly:!0})],v.prototype,"suspendInfo",null),(0,s._)([(0,d.MZ)({readOnly:!0})],v.prototype,"legendEnabled",null),(0,s._)([(0,d.MZ)({type:Boolean,readOnly:!0})],v.prototype,"updating",null),(0,s._)([(0,d.MZ)({readOnly:!0})],v.prototype,"updatingProgress",null),(0,s._)([(0,d.MZ)()],v.prototype,"updateSuspended",null),(0,s._)([(0,d.MZ)()],v.prototype,"visible",null),(0,s._)([(0,d.MZ)({readOnly:!0})],v.prototype,"visibleAtCurrentScale",null),(0,s._)([(0,d.MZ)({readOnly:!0})],v.prototype,"visibleAtCurrentTimeExtent",null),v=(0,s._)([(0,u.$)("esri.views.layers.LayerView")],v);const y=v},771:(e,t,i)=>{i.d(t,{A:()=>a});var s=i(35143),r=i(76460),n=i(50346),l=i(68134),o=(i(81806),i(47249),i(50076),i(85842));const a=e=>{let t=class extends e{initialize(){this.addHandles((0,l.on)((()=>this.layer),"refresh",(e=>{this.doRefresh(e.dataChanged).catch((e=>{(0,n.zf)(e)||r.A.getLogger(this).error(e)}))})),"RefreshableLayerView")}};return t=(0,s._)([(0,o.$)("esri.views.layers.RefreshableLayerView")],t),t}},97001:(e,t,i)=>{i.d(t,{A:()=>a});var s=i(35143),r=i(42553),n=i(46053),l=(i(81806),i(76460),i(47249),i(85842));let o=class extends r.oY{get version(){return this.commitVersionProperties(),(this._get("version")||0)+1}};(0,s._)([(0,n.MZ)({readOnly:!0})],o.prototype,"version",null),o=(0,s._)([(0,l.$)("esri.views.layers.support.ClipArea")],o);const a=o},47266:(e,t,i)=>{i.d(t,{A:()=>v});var s,r=i(35143),n=(i(35238),i(46053)),l=(i(81806),i(76460),i(47249),i(85842)),o=i(89189),a=i(19902),p=i(97001),d=i(76797),u=i(65215);const h={base:o.A,key:"type",typeMap:{extent:d.A,polygon:u.A}};let c=s=class extends p.A{constructor(e){super(e),this.type="geometry",this.geometry=null}clone(){var e,t;return new s({geometry:null!==(e=null===(t=this.geometry)||void 0===t?void 0:t.clone())&&void 0!==e?e:null})}commitVersionProperties(){this.commitProperty("geometry")}};(0,r._)([(0,n.MZ)({types:h,json:{read:a.rS,write:!0}})],c.prototype,"geometry",void 0),c=s=(0,r._)([(0,l.$)("esri.views.layers.support.Geometry")],c);const v=c},90992:(e,t,i)=>{function s(e){return e&&"function"==typeof e.highlight}function r(e,t){if(t&&e){const{minScale:i,maxScale:s}=e;if(function(e,t){return null!=e&&e>0||null!=t&&t>0}(i,s))return function(e,t,i){return null==e||e>=i&&(0===t||e<=t)}(t,i,s)}return!0}function n(e){return!(null!==e&&void 0!==e&&e.minScale)||!e.maxScale||e.minScale>=e.maxScale}i.d(t,{E5:()=>r,Of:()=>s,g7:()=>n})}}]);
//# sourceMappingURL=1740.767942ce.chunk.js.map