"use strict";(self.webpackChunktyphoon=self.webpackChunktyphoon||[]).push([[9189],{57528:(t,n,e)=>{function r(t,n){return n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))}e.d(n,{A:()=>r})},93582:(t,n,e)=>{e.d(n,{a:()=>b,b:()=>A,c:()=>v,f:()=>y,g:()=>M,j:()=>_,n:()=>T});e(81806),e(76460);var r=e(15941),o=e(34761),i=e(20664),c=e(9392),s=e(43047),a=e(55855),l=e(53494),u=e(5568),d=e(95925),h=e(96190),f=e(75762);const m=v();function v(){return(0,a.vt)()}const g=s.e,p=s.e;function b(t,n){return(0,s.c)(n,t)}function A(t){return t[3]}function M(t){return t}function y(t,n,e,r){return(0,a.fA)(t,n,e,r)}function w(t,n,e){if(null==n)return!1;if(!C(t,n,x))return!1;let{t0:r,t1:o}=x;if((r<0||o<r&&o>0)&&(r=o),r<0)return!1;if(e){const{origin:t,direction:o}=n;e[0]=t[0]+o[0]*r,e[1]=t[1]+o[1]*r,e[2]=t[2]+o[2]*r}return!0}const x={t0:0,t1:0};function C(t,n,e){const{origin:r,direction:o}=n,i=S;i[0]=r[0]-t[0],i[1]=r[1]-t[1],i[2]=r[2]-t[2];const c=o[0]*o[0]+o[1]*o[1]+o[2]*o[2];if(0===c)return!1;const s=2*(o[0]*i[0]+o[1]*i[1]+o[2]*i[2]),a=s*s-4*c*(i[0]*i[0]+i[1]*i[1]+i[2]*i[2]-t[3]*t[3]);if(a<0)return!1;const l=Math.sqrt(a);return e.t0=(-s-l)/(2*c),e.t1=(-s+l)/(2*c),!0}const S=(0,c.vt)();function _(t,n){return w(t,n,null)}function P(t,n,e){const r=f.rq.get(),c=f.Rc.get();(0,i.b)(r,n.origin,n.direction);const s=A(t);(0,i.b)(e,r,n.origin),(0,i.j)(e,e,1/(0,i.l)(e)*s);const a=D(t,n.origin),l=(0,h.g7)(n.origin,e);return(0,o.$0)(c,l+a,r),(0,i.h)(e,e,c),e}function H(t,n,e){const r=(0,i.f)(f.rq.get(),n,t),o=(0,i.j)(f.rq.get(),r,t[3]/(0,i.l)(r));return(0,i.g)(e,o,t)}function D(t,n){const e=(0,i.f)(f.rq.get(),n,t),o=(0,i.l)(e),c=A(t),s=c+Math.abs(c-o);return(0,r.XM)(c/s)}const O=(0,c.vt)();function j(t,n,e,o){const c=(0,i.f)(O,n,t);switch(e){case u._.X:{const t=(0,r.jU)(c,O)[2];return(0,i.s)(o,-Math.sin(t),Math.cos(t),0)}case u._.Y:{const t=(0,r.jU)(c,O),n=t[1],e=t[2],s=Math.sin(n);return(0,i.s)(o,-s*Math.cos(e),-s*Math.sin(e),Math.cos(n))}case u._.Z:return(0,i.n)(o,c);default:return}}function R(t,n){const e=(0,i.f)(q,n,t);return(0,i.l)(e)-t[3]}function T(t,n){const e=(0,i.a)(t,n),r=A(t);return e<=r*r}const q=(0,c.vt)(),k=v();Object.freeze(Object.defineProperty({__proto__:null,NullSphere:m,altitudeAt:R,angleToSilhouette:D,axisAt:j,clear:function(t){t[0]=t[1]=t[2]=t[3]=0},closestPoint:function(t,n,e){return w(t,n,e)?e:((0,d.oC)(n,t,e),H(t,e,e))},closestPointOnSilhouette:P,containsPoint:T,copy:b,create:v,distanceToSilhouette:function(t,n){const e=(0,i.f)(f.rq.get(),n,t),r=(0,i.q)(e),o=t[3]*t[3];return Math.sqrt(Math.abs(r-o))},elevate:function(t,n,e){return t!==e&&(e[0]=t[0],e[1]=t[1],e[2]=t[2]),e[3]=t[3]+n,e},equals:p,exactEquals:g,fromCenterAndRadius:function(t,n){return(0,a.fA)(t[0],t[1],t[2],n)},fromRadius:function(t,n){return t[0]=t[1]=t[2]=0,t[3]=n,t},fromValues:y,getCenter:M,getRadius:A,intersectLine:function(t,n,e){const r=(0,d.Cr)(n,e);if(!C(t,r,x))return[];const{origin:o,direction:s}=r,{t0:a,t1:u}=x,h=n=>{const e=(0,c.vt)();return(0,i.r)(e,o,s,n),H(t,e,e)};return Math.abs(a-u)<(0,l.FD)()?[h(a)]:[h(a),h(u)]},intersectRay:w,intersectRayClosestSilhouette:function(t,n,e){if(w(t,n,e))return e;const r=P(t,n,f.rq.get());return(0,i.g)(e,n.origin,(0,i.j)(f.rq.get(),n.direction,(0,i.p)(n.origin,r)/(0,i.l)(n.direction))),e},intersectsRay:_,projectPoint:H,setAltitudeAt:function(t,n,e,r){const o=R(t,n),c=j(t,n,u._.Z,q),s=(0,i.j)(q,c,e-o);return(0,i.g)(r,n,s)},setExtent:function(t,n,e){return t!==e&&b(t,e),e},tmpSphere:k,union:function(t,n){let e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:(0,a.vt)();const r=(0,i.p)(t,n),o=t[3],c=n[3];return r+c<o?((0,s.c)(e,t),e):r+o<c?((0,s.c)(e,n),e):((0,i.o)(e,t,n,(r+c-o)/(2*r)),e[3]=(r+o+c)/2,e)},wrap:function(t){return t}},Symbol.toStringTag,{value:"Module"}))},97467:(t,n,e)=>{e.d(n,{I:()=>o});var r=e(77944);class o{constructor(t){this._allocator=t,this._items=[],this._itemsPtr=0,this._grow()}get(){return 0===this._itemsPtr&&(0,r.d)((()=>this._reset())),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const t=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*i);this._items.length=Math.min(t,this._items.length),this._itemsPtr=0}_grow(){for(let t=0;t<Math.max(8,Math.min(this._items.length,i));t++)this._items.push(this._allocator())}}const i=1024},95925:(t,n,e)=>{e.d(n,{Cr:()=>l,LV:()=>a,oC:()=>u,vt:()=>c});e(18690);var r=e(97467),o=e(20664),i=e(9392);e(75762);function c(t){return t?s((0,i.o8)(t.origin),(0,i.o8)(t.direction)):s((0,i.vt)(),(0,i.vt)())}function s(t,n){return{origin:t,direction:n}}function a(t,n){const e=d.get();return e.origin=t,e.direction=n,e}function l(t,n){let e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:c();return(0,o.c)(e.origin,t),(0,o.f)(e.direction,n,t),e}function u(t,n,e){const r=(0,o.m)(t.direction,(0,o.f)(e,n,t.origin));return(0,o.g)(e,t.origin,(0,o.j)(e,t.direction,r)),e}const d=new r.I((()=>c()));(0,i.vt)()},51990:(t,n,e)=>{e.d(n,{k5:()=>r});var r;e(15941);!function(t){t[t.Multiply=1]="Multiply",t[t.Ignore=2]="Ignore",t[t.Replace=3]="Replace",t[t.Tint=4]="Tint"}(r||(r={}))},59581:(t,n,e)=>{e.d(n,{A:()=>s});var r,o=e(57528),i=e(51990),c=e(64839);function s(t){t.vertex.code.add((0,c.H)(r||(r=(0,o.A)(["\n    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {\n      float symbolAlpha = 0.0;\n\n      const float maxTint = 85.0;\n      const float maxReplace = 170.0;\n      const float scaleAlpha = 3.0;\n\n      if (symbolColor.a > maxReplace) {\n        colorMixMode = ",";\n        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);\n      } else if (symbolColor.a > maxTint) {\n        colorMixMode = ",";\n        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);\n      } else if (symbolColor.a > 0.0) {\n        colorMixMode = ",";\n        symbolAlpha = scaleAlpha * symbolColor.a;\n      } else {\n        colorMixMode = ",";\n        symbolAlpha = 0.0;\n      }\n\n      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);\n    }\n  "])),c.H.int(i.k5.Multiply),c.H.int(i.k5.Replace),c.H.int(i.k5.Tint),c.H.int(i.k5.Multiply)))}},34981:(t,n,e)=>{var r;function o(t){return t===r.Shadow||t===r.ShadowHighlight||t===r.ShadowExcludeHighlight||t===r.ViewshedShadow}function i(t){return function(t){return function(t){return s(t)||c(t)}(t)||a(t)}(t)||t===r.Normal}function c(t){return t===r.Highlight||t===r.ObjectAndLayerIdColor}function s(t){return t===r.Color}function a(t){return t===r.Depth}e.d(n,{PJ:()=>o,V:()=>r,XY:()=>i}),function(t){t[t.Color=0]="Color",t[t.Depth=1]="Depth",t[t.Normal=2]="Normal",t[t.Shadow=3]="Shadow",t[t.ShadowHighlight=4]="ShadowHighlight",t[t.ShadowExcludeHighlight=5]="ShadowExcludeHighlight",t[t.ViewshedShadow=6]="ViewshedShadow",t[t.Highlight=7]="Highlight",t[t.ObjectAndLayerIdColor=8]="ObjectAndLayerIdColor",t[t.COUNT=9]="COUNT"}(r||(r={}))},59046:(t,n,e)=>{e.d(n,{W:()=>c,Y:()=>d});var r,o,i,c,s=e(57528),a=e(4212),l=e(64839),u=e(66470);function d(t,n){switch(n.normalType){case c.Compressed:t.attributes.add(u.r.NORMALCOMPRESSED,"vec2"),t.vertex.code.add((0,l.H)(r||(r=(0,s.A)(["vec3 decompressNormal(vec2 normal) {\nfloat z = 1.0 - abs(normal.x) - abs(normal.y);\nreturn vec3(normal + sign(normal) * min(z, 0.0), z);\n}\nvec3 normalModel() {\nreturn decompressNormal(normalCompressed);\n}"]))));break;case c.Attribute:t.attributes.add(u.r.NORMAL,"vec3"),t.vertex.code.add((0,l.H)(o||(o=(0,s.A)(["vec3 normalModel() {\nreturn normal;\n}"]))));break;case c.ScreenDerivative:t.fragment.code.add((0,l.H)(i||(i=(0,s.A)(["vec3 screenDerivativeNormal(vec3 positionView) {\nreturn normalize(cross(dFdx(positionView), dFdy(positionView)));\n}"]))));break;default:(0,a.Xb)(n.normalType);case c.COUNT:case c.Ground:}}!function(t){t[t.Attribute=0]="Attribute",t[t.Compressed=1]="Compressed",t[t.Ground=2]="Ground",t[t.ScreenDerivative=3]="ScreenDerivative",t[t.COUNT=4]="COUNT"}(c||(c={}))},89299:(t,n,e)=>{e.d(n,{u:()=>s});var r,o,i=e(57528),c=e(64839);function s(t,n){let{code:e}=t;n.doublePrecisionRequiresObfuscation?e.add((0,c.H)(r||(r=(0,i.A)(["vec3 dpPlusFrc(vec3 a, vec3 b) {\nreturn mix(a, a + b, vec3(notEqual(b, vec3(0))));\n}\nvec3 dpMinusFrc(vec3 a, vec3 b) {\nreturn mix(vec3(0), a - b, vec3(notEqual(a, b)));\n}\nvec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\nvec3 t1 = dpPlusFrc(hiA, hiB);\nvec3 e = dpMinusFrc(t1, hiA);\nvec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;\nreturn t1 + t2;\n}"])))):e.add((0,c.H)(o||(o=(0,i.A)(["vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\nvec3 t1 = hiA + hiB;\nvec3 e = t1 - hiA;\nvec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;\nreturn t1 + t2;\n}"]))))}},81449:(t,n,e)=>{e(64839)},72468:(t,n,e)=>{e.d(n,{W:()=>i});var r=e(7223),o=e(24245);class i extends r.n{constructor(t,n){super(t,"vec3",o.c.Draw,((e,r,o,i)=>e.setUniform3fv(t,n(r,o,i))))}}},5517:(t,n,e)=>{e.d(n,{t:()=>i});var r=e(7223),o=e(24245);class i extends r.n{constructor(t,n){super(t,"vec3",o.c.Pass,((e,r,o)=>e.setUniform3fv(t,n(r,o))))}}},21390:(t,n,e)=>{e.d(n,{m:()=>i});var r=e(7223),o=e(24245);class i extends r.n{constructor(t,n){super(t,"float",o.c.Pass,((e,r,o)=>e.setUniform1f(t,n(r,o))))}}},42759:(t,n,e)=>{e.d(n,{h:()=>i});var r=e(7223),o=e(24245);class i extends r.n{constructor(t,n){super(t,"mat3",o.c.Draw,((e,r,o)=>e.setUniformMatrix3fv(t,n(r,o))))}}},72106:(t,n,e)=>{e.d(n,{k:()=>i});var r=e(7223),o=e(24245);class i extends r.n{constructor(t,n){super(t,"mat3",o.c.Pass,((e,r,o)=>e.setUniformMatrix3fv(t,n(r,o))))}}},43425:(t,n,e)=>{e.d(n,{X:()=>i});var r=e(7223),o=e(24245);class i extends r.n{constructor(t,n){super(t,"mat4",o.c.Pass,((e,r,o)=>e.setUniformMatrix4fv(t,n(r,o))))}}},27374:(t,n,e)=>{e.d(n,{o:()=>i});var r=e(7223),o=e(24245);class i extends r.n{constructor(t,n){super(t,"sampler2D",o.c.Draw,((e,r,o)=>e.bindTexture(t,n(r,o))))}}},7223:(t,n,e)=>{e.d(n,{n:()=>o});var r=e(24245);class o{constructor(t,n,e,o){let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(this.name=t,this.type=n,this.arraySize=i,this.bind={[r.c.Pass]:null,[r.c.Draw]:null},o)switch(e){case r.c.Pass:this.bind[r.c.Pass]=o;break;case r.c.Draw:this.bind[r.c.Draw]=o}}equals(t){return this.type===t.type&&this.name===t.name&&this.arraySize===t.arraySize}}},64839:(t,n,e)=>{e.d(n,{H:()=>o,Y:()=>r});const r=class{};function o(t){let n="";for(let e=0;e<(arguments.length<=1?0:arguments.length-1);e++)n+=t[e]+(e+1<1||arguments.length<=e+1?void 0:arguments[e+1]);return n+=t[t.length-1],n}!function(t){t.int=function(t){return Math.round(t).toString()},t.float=function(t){return t.toPrecision(8)}}(o||(o={}))},24245:(t,n,e)=>{var r;e.d(n,{c:()=>r}),function(t){t[t.Pass=0]="Pass",t[t.Draw=1]="Draw"}(r||(r={}))}}]);
//# sourceMappingURL=9189.2cf623ee.chunk.js.map