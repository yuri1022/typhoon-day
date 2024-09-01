"use strict";(self.webpackChunktyphoon=self.webpackChunktyphoon||[]).push([[5897],{85897:(e,t,i)=>{i.r(t),i.d(t,{default:()=>c});var s=i(35143),r=(i(76460),i(81806),i(47249),i(50076),i(85842)),l=i(90104),n=i(94643),a=i(3975),o=i(68134),d=i(46053),h=i(91196);let p=class extends h.A{constructor(e){super(e),this.type="group",this.layerViews=new n.A}destroy(){this.layerViews.length=0}_allLayerViewVisibility(e){this.layerViews.forEach((t=>{t.visible=e}))}initialize(){this.addHandles([this.layerViews.on("change",(e=>this._layerViewsChangeHandler(e))),(0,o.wB)((()=>{var e;return null===(e=this.layer)||void 0===e?void 0:e.visibilityMode}),(()=>{this.layer&&this._applyVisibility((()=>this._allLayerViewVisibility(this.visible)),(()=>this._applyExclusiveVisibility(null)))}),o.OH),(0,o.wB)((()=>this.visible),(e=>{this._applyVisibility((()=>this._allLayerViewVisibility(e)),(()=>{}))}),o.OH)],"grouplayerview"),this._layerViewsChangeHandler({target:null,added:this.layerViews.toArray(),removed:[],moved:[]})}get creatingLayerViews(){var e,t;return null!==(e=null===(t=this.view)||void 0===t||null===(t=t.layerViewManager)||void 0===t?void 0:t.isCreatingLayerViewsForLayer(this.layer))&&void 0!==e&&e}set layerViews(e){this._set("layerViews",(0,a.V)(e,this._get("layerViews")))}get updatingProgress(){return 0===this.layerViews.length?1:this.layerViews.reduce(((e,t)=>e+t.updatingProgress),0)/this.layerViews.length}isUpdating(){return this.creatingLayerViews||this.layerViews.some((e=>e.updating))}_hasLayerViewVisibleOverrides(){return this.layerViews.some((e=>e._isOverridden("visible")))}_findLayerViewForLayer(e){return e&&this.layerViews.find((t=>t.layer===e))}_firstVisibleOnLayerOrder(){const e=this.layer.layers.find((e=>{const t=this._findLayerViewForLayer(e);return!(null===t||void 0===t||!t.visible)}));return e&&this._findLayerViewForLayer(e)}_applyExclusiveVisibility(e){null==e&&null==(e=this._firstVisibleOnLayerOrder())&&this.layerViews.length>0&&(e=this._findLayerViewForLayer(this.layer.layers.at(0))),this.layerViews.forEach((t=>{t.visible=t===e}))}_layerViewsChangeHandler(e){this.removeHandles("grouplayerview:visible"),this.addHandles(this.layerViews.map((e=>(0,o.wB)((()=>e.visible),(t=>this._applyVisibility((()=>{t!==this.visible&&(e.visible=this.visible)}),(()=>this._applyExclusiveVisibility(t?e:null)))),o.OH))).toArray(),"grouplayerview:visible");const t=e.added[e.added.length-1];this._applyVisibility((()=>this._allLayerViewVisibility(this.visible)),(()=>this._applyExclusiveVisibility(null!==t&&void 0!==t&&t.visible?t:null)))}_applyVisibility(e,t){var i,s;this._hasLayerViewVisibleOverrides()&&("inherited"===(null===(i=this.layer)||void 0===i?void 0:i.visibilityMode)?e():"exclusive"===(null===(s=this.layer)||void 0===s?void 0:s.visibilityMode)&&t())}};(0,s._)([(0,d.MZ)({readOnly:!0})],p.prototype,"creatingLayerViews",null),(0,s._)([(0,d.MZ)({cast:a.H})],p.prototype,"layerViews",null),(0,s._)([(0,d.MZ)({readOnly:!0})],p.prototype,"updatingProgress",null),(0,s._)([(0,d.MZ)()],p.prototype,"view",void 0),p=(0,s._)([(0,r.$)("esri.views.layers.GroupLayerView")],p);const u=p;let y=class extends((0,l.e)(u)){attach(){this._updateStageChildren(),this.addAttachHandles(this.layerViews.on("after-changes",(()=>this._updateStageChildren())))}detach(){this.container.removeAllChildren()}update(e){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach(((e,t)=>this.container.addChildAt(e.container,t)))}};y=(0,s._)([(0,r.$)("esri.views.2d.layers.GroupLayerView2D")],y);const c=y},90104:(e,t,i)=>{i.d(t,{e:()=>m});var s,r=i(35143),l=i(94643),n=i(3975),a=i(50076),o=i(68134),d=i(46053),h=(i(81806),i(76460),i(47249),i(85842)),p=i(21904),u=i(7464),y=i(97001);let c=s=class extends y.A{constructor(e){super(e),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new s({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}commitVersionProperties(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom")}};(0,r._)([(0,d.MZ)({type:[Number,String],json:{write:!0}})],c.prototype,"left",void 0),(0,r._)([(0,d.MZ)({type:[Number,String],json:{write:!0}})],c.prototype,"right",void 0),(0,r._)([(0,d.MZ)({type:[Number,String],json:{write:!0}})],c.prototype,"top",void 0),(0,r._)([(0,d.MZ)({type:[Number,String],json:{write:!0}})],c.prototype,"bottom",void 0),c=s=(0,r._)([(0,h.$)("esri.views.layers.support.ClipRect")],c);const v=c;var g=i(47266);let w=class extends y.A{constructor(e){super(e),this.type="path",this.path=[]}commitVersionProperties(){this.commitProperty("path")}};(0,r._)([(0,d.MZ)({type:[[[Number]]],json:{write:!0}})],w.prototype,"path",void 0),w=(0,r._)([(0,h.$)("esri.views.layers.support.Path")],w);const _=w;var b=i(90992);const f=l.A.ofType({key:"type",base:null,typeMap:{rect:v,path:_,geometry:g.A}}),m=e=>{let t=class extends e{constructor(){super(...arguments),this.attached=!1,this.clips=new f,this.highlightOptions=null,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1,this._visibleAtCurrentScale=!0}initialize(){var e,t,i,s;const r=null===(e=null===(t=this.view)||void 0===t?void 0:t.spatialReferenceLocked)||void 0===e||e;(null===(i=this.view)||void 0===i?void 0:i.spatialReference)&&r&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new a.A("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new p.m),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.addHandles([(0,o.wB)((()=>this.suspended),(e=>{this.container&&(this.container.visible=!e)}),o.pc),(0,o.wB)((()=>this.updateSuspended),(e=>{this.view&&!e&&this.updateRequested&&this.view.requestUpdate()}),o.pc),(0,o.wB)((()=>{var e,t;return null!==(e=null===(t=this.layer)||void 0===t?void 0:t.opacity)&&void 0!==e?e:1}),(e=>{this.container&&(this.container.opacity=e)}),o.pc),(0,o.wB)((()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal"),(e=>{this.container&&(this.container.blendMode=e)}),o.pc),(0,o.wB)((()=>this.layer&&"effect"in this.layer?this.layer.effect:null),(e=>{this.container&&(this.container.effect=e)}),o.pc),(0,o.wB)((()=>this.highlightOptions),(e=>this.container.highlightOptions=e),o.pc),(0,o.on)((()=>this.clips),"change",(()=>{this.container&&(this.container.clips=this.clips)}),o.pc),(0,o.wB)((()=>{var e;return{scale:null===(e=this.view)||void 0===e?void 0:e.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null}}),(e=>{let{scale:t,scaleRange:i}=e;const s=(0,b.E5)(i,t);s!==this._visibleAtCurrentScale&&(this._visibleAtCurrentScale=s)}),o.pc)],"constructor"),null!==(s=this.view)&&void 0!==s&&s.whenLayerView?this.view.whenLayerView(this.layer).then((e=>{e===this&&this.processAttach()}),(()=>{})):this.when().then((()=>{this.processAttach()}),(()=>{})))}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){var e;const t=null===(e=this.view)||void 0===e?void 0:e.spatialReference;return null==t||this.supportsSpatialReference(t)}get updating(){var e;return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!(null===(e=this._updatingHandles)||void 0===e||!e.updating))}get visibleAtCurrentScale(){return this._visibleAtCurrentScale}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.removeHandles("attach"),this.detach(),this.updateRequested=!1)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.updateSuspended||this.view.requestUpdate())}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.updateSuspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}hitTest(e,t){return Promise.resolve(null)}supportsSpatialReference(e){return!0}canResume(){return!!this.spatialReferenceSupported&&!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const e=super.getSuspendInfo(),t=!this.spatialReferenceSupported;return t&&(e.spatialReferenceNotSupported=t),e}addAttachHandles(e){this.addHandles(e,"attach")}};return(0,r._)([(0,d.MZ)()],t.prototype,"attached",void 0),(0,r._)([(0,d.MZ)({type:f,set(e){const t=(0,n.V)(e,this._get("clips"),f);this._set("clips",t)}})],t.prototype,"clips",void 0),(0,r._)([(0,d.MZ)()],t.prototype,"container",void 0),(0,r._)([(0,d.MZ)({type:u.A})],t.prototype,"highlightOptions",void 0),(0,r._)([(0,d.MZ)()],t.prototype,"moving",void 0),(0,r._)([(0,d.MZ)({readOnly:!0})],t.prototype,"spatialReferenceSupported",null),(0,r._)([(0,d.MZ)({readOnly:!0})],t.prototype,"updateParameters",void 0),(0,r._)([(0,d.MZ)()],t.prototype,"updateRequested",void 0),(0,r._)([(0,d.MZ)()],t.prototype,"updating",null),(0,r._)([(0,d.MZ)()],t.prototype,"view",void 0),(0,r._)([(0,d.MZ)()],t.prototype,"_visibleAtCurrentScale",void 0),(0,r._)([(0,d.MZ)({readOnly:!0})],t.prototype,"visibleAtCurrentScale",null),t=(0,r._)([(0,h.$)("esri.views.2d.layers.LayerView2D")],t),t}},91196:(e,t,i)=>{i.d(t,{A:()=>v});var s=i(35143),r=i(91967),l=i(54099),n=i(5632),a=i(76460),o=i(30726),d=i(91291),h=i(46053),p=(i(81806),i(47249),i(85842)),u=i(19451),y=i(90992);let c=class extends((0,n.sA)((0,d.g)(l.A.EventedMixin(r.A)))){constructor(e){super(e),this._updatingHandles=new u.U,this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){var t;const i=this.layer&&this.layer.id||"no id",s=(null===(t=this.layer)||void 0===t?void 0:t.title)||"no title";a.A.getLogger(this).error("#resolve()","Failed to resolve layer view (layer title: '".concat(s,"', id: '").concat(i,"')"),e)}}))}destroy(){this._updatingHandles=(0,o.pR)(this._updatingHandles)}get fullOpacity(){var e,t,i,s;return(null!==(e=null===(t=this.layer)||void 0===t?void 0:t.opacity)&&void 0!==e?e:1)*(null!==(i=null===(s=this.parent)||void 0===s?void 0:s.fullOpacity)&&void 0!==i?i:1)}get suspended(){return this.destroyed||!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){var e;return!this.suspended&&!0===(null===(e=this.layer)||void 0===e?void 0:e.legendEnabled)}get updating(){var e;return!((null===(e=this._updatingHandles)||void 0===e||!e.updating)&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get updateSuspended(){return this.suspended}get visible(){var e;return!0===(null===(e=this.layer)||void 0===e?void 0:e.visible)}set visible(e){this._overrideIfSome("visible",e)}get visibleAtCurrentScale(){return!0}get visibleAtCurrentTimeExtent(){var e;const t=this.view.timeExtent,i=null===(e=this.layer)||void 0===e?void 0:e.visibilityTimeExtent;return!t||!i||!t.intersection(i).isEmpty}canResume(){var e,t,i;const s=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return this.visible&&(null===(e=this.layer)||void 0===e?void 0:e.loaded)&&!(null!==(t=this.parent)&&void 0!==t&&t.suspended)&&(null===(i=this.view)||void 0===i?void 0:i.ready)&&(0,y.g7)(s)&&this.visibleAtCurrentScale&&this.visibleAtCurrentTimeExtent||!1}getSuspendInfo(){var e,t;const i=null!==(e=this.parent)&&void 0!==e&&e.suspended?this.parent.suspendInfo:{};null!==(t=this.view)&&void 0!==t&&t.ready||(i.viewNotReady=!0),this.layer&&this.layer.loaded||(i.layerNotLoaded=!0);const s=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return(0,y.g7)(s)&&this.visibleAtCurrentScale||(i.outsideScaleRange=!0),this.visibleAtCurrentTimeExtent||(i.outsideVisibilityTimeExtent=!0),this.visible||(i.layerInvisible=!0),i}isUpdating(){return!1}};(0,s._)([(0,h.MZ)()],c.prototype,"view",void 0),(0,s._)([(0,h.MZ)()],c.prototype,"fullOpacity",null),(0,s._)([(0,h.MZ)()],c.prototype,"layer",void 0),(0,s._)([(0,h.MZ)()],c.prototype,"parent",void 0),(0,s._)([(0,h.MZ)({readOnly:!0})],c.prototype,"suspended",null),(0,s._)([(0,h.MZ)({readOnly:!0})],c.prototype,"suspendInfo",null),(0,s._)([(0,h.MZ)({readOnly:!0})],c.prototype,"legendEnabled",null),(0,s._)([(0,h.MZ)({type:Boolean,readOnly:!0})],c.prototype,"updating",null),(0,s._)([(0,h.MZ)({readOnly:!0})],c.prototype,"updatingProgress",null),(0,s._)([(0,h.MZ)()],c.prototype,"updateSuspended",null),(0,s._)([(0,h.MZ)()],c.prototype,"visible",null),(0,s._)([(0,h.MZ)({readOnly:!0})],c.prototype,"visibleAtCurrentScale",null),(0,s._)([(0,h.MZ)({readOnly:!0})],c.prototype,"visibleAtCurrentTimeExtent",null),c=(0,s._)([(0,p.$)("esri.views.layers.LayerView")],c);const v=c},97001:(e,t,i)=>{i.d(t,{A:()=>o});var s=i(35143),r=i(42553),l=i(46053),n=(i(81806),i(76460),i(47249),i(85842));let a=class extends r.oY{get version(){return this.commitVersionProperties(),(this._get("version")||0)+1}};(0,s._)([(0,l.MZ)({readOnly:!0})],a.prototype,"version",null),a=(0,s._)([(0,n.$)("esri.views.layers.support.ClipArea")],a);const o=a},47266:(e,t,i)=>{i.d(t,{A:()=>c});var s,r=i(35143),l=(i(35238),i(46053)),n=(i(81806),i(76460),i(47249),i(85842)),a=i(89189),o=i(19902),d=i(97001),h=i(76797),p=i(65215);const u={base:a.A,key:"type",typeMap:{extent:h.A,polygon:p.A}};let y=s=class extends d.A{constructor(e){super(e),this.type="geometry",this.geometry=null}clone(){var e,t;return new s({geometry:null!==(e=null===(t=this.geometry)||void 0===t?void 0:t.clone())&&void 0!==e?e:null})}commitVersionProperties(){this.commitProperty("geometry")}};(0,r._)([(0,l.MZ)({types:u,json:{read:o.rS,write:!0}})],y.prototype,"geometry",void 0),y=s=(0,r._)([(0,n.$)("esri.views.layers.support.Geometry")],y);const c=y},90992:(e,t,i)=>{function s(e){return e&&"function"==typeof e.highlight}function r(e,t){if(t&&e){const{minScale:i,maxScale:s}=e;if(function(e,t){return null!=e&&e>0||null!=t&&t>0}(i,s))return function(e,t,i){return null==e||e>=i&&(0===t||e<=t)}(t,i,s)}return!0}function l(e){return!(null!==e&&void 0!==e&&e.minScale)||!e.maxScale||e.minScale>=e.maxScale}i.d(t,{E5:()=>r,Of:()=>s,g7:()=>l})}}]);
//# sourceMappingURL=5897.1cb56c4c.chunk.js.map