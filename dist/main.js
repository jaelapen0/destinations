!function(t){var e={};function n(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist/",n(n.s=239)}([function(t,e,n){"use strict";n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return l}));var r=n(4),a=n(22),o=n(5),s=n(7),i=n(10);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function c(t,e){let n=t;if(Object(s.A)(t))return"string"===e?[]:[t.length];if(!Array.isArray(t))return[];const r=[];for(;Array.isArray(n)||Object(s.A)(n)&&"string"!==e;)r.push(n.length),n=n[0];return Array.isArray(t)&&Object(a.c)().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&function t(e,n,r){if(r=r||[],!Array.isArray(e)&&!Object(s.A)(e))return void Object(s.b)(0===n.length,()=>`Element arr[${r.join("][")}] is a primitive, but should be an array/TypedArray of ${n[0]} elements`);Object(s.b)(n.length>0,()=>`Element arr[${r.join("][")}] should be a primitive, but is an array of ${e.length} elements`),Object(s.b)(e.length===n[0],()=>`Element arr[${r.join("][")}] should have ${n[0]} elements, but has ${e.length} elements`);const a=n.slice(1);for(let n=0;n<e.length;++n)t(e[n],a,r.concat(n))}(t,r,[]),r}function u(t,e,n,r){if("string_or_numeric"!==t){if(null==t)throw new Error("Expected dtype cannot be null.");if("numeric"!==t&&t!==e||"numeric"===t&&"string"===e)throw new Error(`Argument '${n}' passed to '${r}' must be ${t} tensor, but got ${e} tensor`)}}function d(t,e,n,a="numeric"){if(t instanceof o.a)return u(a,t.dtype,e,n),t;let d=Object(s.r)(t);if("string"!==d&&["bool","int32","float32"].indexOf(a)>=0&&(d=a),u(a,d,e,n),null==t||!Object(s.A)(t)&&!Array.isArray(t)&&"number"!=typeof t&&"boolean"!=typeof t&&"string"!=typeof t){const r=null==t?"null":t.constructor.name;throw new Error(`Argument '${e}' passed to '${n}' must be a Tensor or TensorLike, but got '${r}'`)}const l=c(t,d);Object(s.A)(t)||Array.isArray(t)||(t=[t]);const p="string"!==d?Object(i.toTypedArray)(t,d):Object(s.m)(t,[],!0);return r.a.makeTensor(p,l,d)}function l(t,e,n,r="numeric"){if(!Array.isArray(t))throw new Error(`Argument ${e} passed to ${n} must be a \`Tensor[]\` or \`TensorLike[]\``);return t.map((t,a)=>d(t,`${e}[${a}]`,n,r))}},function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return s})),n.d(e,"e",(function(){return i})),n.d(e,"f",(function(){return c})),n.d(e,"g",(function(){return u})),n.d(e,"h",(function(){return d})),n.d(e,"i",(function(){return l})),n.d(e,"j",(function(){return p})),n.d(e,"k",(function(){return f})),n.d(e,"l",(function(){return h})),n.d(e,"n",(function(){return b})),n.d(e,"m",(function(){return m})),n.d(e,"o",(function(){return g})),n.d(e,"r",(function(){return y})),n.d(e,"p",(function(){return O})),n.d(e,"q",(function(){return j})),n.d(e,"s",(function(){return v})),n.d(e,"t",(function(){return w})),n.d(e,"u",(function(){return x})),n.d(e,"v",(function(){return k})),n.d(e,"w",(function(){return N})),n.d(e,"x",(function(){return S})),n.d(e,"y",(function(){return E})),n.d(e,"z",(function(){return T})),n.d(e,"A",(function(){return I})),n.d(e,"B",(function(){return A})),n.d(e,"C",(function(){return _})),n.d(e,"D",(function(){return D})),n.d(e,"E",(function(){return M})),n.d(e,"F",(function(){return F})),n.d(e,"G",(function(){return $})),n.d(e,"H",(function(){return R})),n.d(e,"I",(function(){return P})),n.d(e,"J",(function(){return C})),n.d(e,"L",(function(){return B})),n.d(e,"K",(function(){return L})),n.d(e,"M",(function(){return z})),n.d(e,"N",(function(){return V})),n.d(e,"O",(function(){return q})),n.d(e,"P",(function(){return U})),n.d(e,"Q",(function(){return H})),n.d(e,"R",(function(){return W})),n.d(e,"S",(function(){return G})),n.d(e,"U",(function(){return K})),n.d(e,"T",(function(){return Y})),n.d(e,"kc",(function(){return J})),n.d(e,"V",(function(){return X})),n.d(e,"W",(function(){return Q})),n.d(e,"Y",(function(){return Z})),n.d(e,"X",(function(){return tt})),n.d(e,"Z",(function(){return et})),n.d(e,"ab",(function(){return nt})),n.d(e,"bb",(function(){return rt})),n.d(e,"cb",(function(){return at})),n.d(e,"db",(function(){return ot})),n.d(e,"eb",(function(){return st})),n.d(e,"fb",(function(){return it})),n.d(e,"gb",(function(){return ct})),n.d(e,"ib",(function(){return ut})),n.d(e,"mb",(function(){return dt})),n.d(e,"lb",(function(){return lt})),n.d(e,"nb",(function(){return pt})),n.d(e,"ob",(function(){return ft})),n.d(e,"qb",(function(){return ht})),n.d(e,"pb",(function(){return bt})),n.d(e,"rb",(function(){return mt})),n.d(e,"sb",(function(){return gt})),n.d(e,"tb",(function(){return yt})),n.d(e,"ub",(function(){return Ot})),n.d(e,"xb",(function(){return jt})),n.d(e,"yb",(function(){return vt})),n.d(e,"zb",(function(){return wt})),n.d(e,"Ab",(function(){return xt})),n.d(e,"Bb",(function(){return kt})),n.d(e,"Cb",(function(){return Nt})),n.d(e,"Eb",(function(){return St})),n.d(e,"Fb",(function(){return Et})),n.d(e,"Gb",(function(){return Tt})),n.d(e,"Db",(function(){return It})),n.d(e,"vb",(function(){return At})),n.d(e,"wb",(function(){return _t})),n.d(e,"Hb",(function(){return Dt})),n.d(e,"Nb",(function(){return Mt})),n.d(e,"Ib",(function(){return Ft})),n.d(e,"Lb",(function(){return $t})),n.d(e,"Jb",(function(){return Rt})),n.d(e,"Kb",(function(){return Pt})),n.d(e,"Mb",(function(){return Ct})),n.d(e,"Ob",(function(){return Bt})),n.d(e,"Pb",(function(){return Lt})),n.d(e,"Qb",(function(){return zt})),n.d(e,"Rb",(function(){return Vt})),n.d(e,"Sb",(function(){return qt})),n.d(e,"Tb",(function(){return Ut})),n.d(e,"Ub",(function(){return Ht})),n.d(e,"Vb",(function(){return Wt})),n.d(e,"Zb",(function(){return Gt})),n.d(e,"Wb",(function(){return Kt})),n.d(e,"Xb",(function(){return Yt})),n.d(e,"Yb",(function(){return Jt})),n.d(e,"bc",(function(){return Xt})),n.d(e,"ac",(function(){return Qt})),n.d(e,"cc",(function(){return Zt})),n.d(e,"dc",(function(){return te})),n.d(e,"ec",(function(){return ee})),n.d(e,"fc",(function(){return ne})),n.d(e,"gc",(function(){return re})),n.d(e,"hc",(function(){return ae})),n.d(e,"ic",(function(){return oe})),n.d(e,"jc",(function(){return se})),n.d(e,"lc",(function(){return ie})),n.d(e,"mc",(function(){return ce})),n.d(e,"oc",(function(){return ue})),n.d(e,"rc",(function(){return de})),n.d(e,"sc",(function(){return le})),n.d(e,"pc",(function(){return pe})),n.d(e,"qc",(function(){return fe})),n.d(e,"nc",(function(){return he})),n.d(e,"tc",(function(){return be})),n.d(e,"vc",(function(){return me})),n.d(e,"wc",(function(){return ge})),n.d(e,"xc",(function(){return ye})),n.d(e,"yc",(function(){return Oe})),n.d(e,"zc",(function(){return je})),n.d(e,"Ec",(function(){return ve})),n.d(e,"Cc",(function(){return we})),n.d(e,"Dc",(function(){return xe})),n.d(e,"Bc",(function(){return ke})),n.d(e,"Ac",(function(){return Ne})),n.d(e,"Gc",(function(){return Se})),n.d(e,"Kc",(function(){return Ee})),n.d(e,"Qc",(function(){return Te})),n.d(e,"Hc",(function(){return Ie})),n.d(e,"Jc",(function(){return Ae})),n.d(e,"Fc",(function(){return _e})),n.d(e,"Mc",(function(){return De})),n.d(e,"Lc",(function(){return Me})),n.d(e,"Pc",(function(){return Fe})),n.d(e,"Ic",(function(){return $e})),n.d(e,"Oc",(function(){return Re})),n.d(e,"Rc",(function(){return Pe})),n.d(e,"Sc",(function(){return Ce})),n.d(e,"Tc",(function(){return Be})),n.d(e,"Uc",(function(){return Le})),n.d(e,"Vc",(function(){return ze})),n.d(e,"Wc",(function(){return Ve})),n.d(e,"Xc",(function(){return qe})),n.d(e,"Yc",(function(){return Ue})),n.d(e,"Zc",(function(){return He})),n.d(e,"Nc",(function(){return We})),n.d(e,"hb",(function(){return Ge})),n.d(e,"uc",(function(){return Ke})),n.d(e,"ad",(function(){return Ye})),n.d(e,"jb",(function(){return Je})),n.d(e,"kb",(function(){return Xe}));const r="Abs",a="Acos",o="Acosh",s="Add",i="AddN",c="All",u="Any",d="ArgMax",l="ArgMin",p="Asin",f="Asinh",h="Atan",b="Atanh",m="Atan2",g="AvgPool",y="AvgPoolGrad",O="AvgPool3D",j="AvgPool3DGrad",v="BatchMatMul",w="BatchToSpaceND",x="Bincount",k="BroadcastTo",N="Cast",S="Ceil",E="ClipByValue",T="Complex",I="ComplexAbs",A="Concat",_="Conv2D",D="Conv2DBackpropFilter",M="Conv2DBackpropInput",F="Conv3D",$="Conv3DBackpropFilterV2",R="Conv3DBackpropInputV2",P="Cos",C="Cosh",B="Cumsum",L="CropAndResize",z="DenseBincount",V="DepthToSpace",q="DepthwiseConv2dNative",U="DepthwiseConv2dNativeBackpropFilter",H="DepthwiseConv2dNativeBackpropInput",W="Diag",G="Dilation2D",K="Dilation2DBackpropInput",Y="Dilation2DBackpropFilter",J="RealDiv",X="Elu",Q="EluGrad",Z="Erf",tt="Equal",et="Exp",nt="ExpandDims",rt="Expm1",at="FFT",ot="Fill",st="FlipLeftRight",it="Floor",ct="FloorDiv",ut="FusedBatchNorm",dt="GatherV2",lt="GatherNd",pt="Greater",ft="GreaterEqual",ht="Identity",bt="IFFT",mt="Imag",gt="IsFinite",yt="IsInf",Ot="IsNan",jt="LeakyRelu",vt="Less",wt="LessEqual",xt="LinSpace",kt="Log",Nt="Log1p",St="LogicalAnd",Et="LogicalNot",Tt="LogicalOr",It="LogSoftmax",At="LRN",_t="LRNGrad",Dt="Max",Mt="Maximum",Ft="MaxPool",$t="MaxPoolGrad",Rt="MaxPool3D",Pt="MaxPool3DGrad",Ct="MaxPoolWithArgmax",Bt="Mean",Lt="Min",zt="Minimum",Vt="MirrorPad",qt="Mod",Ut="Multinomial",Ht="Multiply",Wt="Neg",Gt="NotEqual",Kt="NonMaxSuppressionV3",Yt="NonMaxSuppressionV4",Jt="NonMaxSuppressionV5",Xt="OnesLike",Qt="OneHot",Zt="Pack",te="PadV2",ee="Pool",ne="Pow",re="Prelu",ae="Prod",oe="Range",se="Real",ie="Reciprocal",ce="Relu",ue="Reshape",de="ResizeNearestNeighbor",le="ResizeNearestNeighborGrad",pe="ResizeBilinear",fe="ResizeBilinearGrad",he="Relu6",be="Reverse",me="Round",ge="Rsqrt",ye="ScatterNd",Oe="Select",je="Selu",ve="Slice",we="Sin",xe="Sinh",ke="Sign",Ne="Sigmoid",Se="Softplus",Ee="Sqrt",Te="Sum",Ie="SpaceToBatchND",Ae="SplitV",_e="Softmax",De="SquaredDifference",Me="Square",Fe="Sub",$e="SparseToDense",Re="StridedSlice",Pe="Tan",Ce="Tanh",Be="Tile",Le="TopK",ze="Transpose",Ve="Unique",qe="Unpack",Ue="UnsortedSegmentSum",He="ZerosLike",We="Step",Ge="FromPixels",Ke="RotateWithOffset",Ye="_FusedMatMul",Je="FusedConv2D",Xe="FusedDepthwiseConv2D"},function(t,e,n){"use strict";n.d(e,"d",(function(){return a})),n.d(e,"e",(function(){return o})),n.d(e,"f",(function(){return s})),n.d(e,"b",(function(){return i})),n.d(e,"g",(function(){return u})),n.d(e,"c",(function(){return d})),n.d(e,"a",(function(){return l}));var r=n(9);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function a(t,e,n,a,s){const i=e.inputParams[t];if(i&&void 0!==i.inputIndexStart){const t=i.inputIndexStart,c=0===i.inputIndexEnd?void 0:void 0===i.inputIndexEnd?t+1:i.inputIndexEnd;if("tensor"===i.type)return o(e.inputNames[i.inputIndexStart],n,a,s);if("tensors"===i.type){return e.inputNames.slice(t,c).map(t=>o(t,n,a,s))}const u=o(e.inputNames.slice(t)[0],n,a,s),d=u.dataSync();return"number"===i.type?d[0]:r.util.toNestedArray(u.shape,d)}const c=e.attrParams[t];return c&&c.value}function o(t,e,n,r){const[a,o]=u(t);if(null!=r){const t=r.getHashTableHandleByName(a);if(null!=t)return t}const s=n.currentContextIds.find(t=>!!e[c(a,t)]);return void 0!==s?e[c(a,s)][o]:void 0}function s(t,e,n){return e[c(t,n.currentContextId)]}function i(t,e){const[n,r]=u(t);return[c(n,e&&e.currentContextId),r]}function c(t,e){return e?`${t}-${e}`:t}function u(t){const e=t.split(":");if(1===e.length)return[t,0];return[e[0],Number(e[e.length-1])]}function d(t,e,n){let r=a("pad",t,e,n);if("explicit"===r){r=a("explicitPaddings",t,e,n);const o=[[0,0],[0,0],[0,0],[0,0]];for(let t=0;t<4;t++)o[t][0]=r[2*t],o[t][1]=r[2*t+1];return o}return r}function l(t){return t.kept?t:Object(r.clone)(t)}},function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return s}));var r=n(4),a=n(7);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const o="__op";function s(t){const e=Object.keys(t);if(1!==e.length)throw new Error("Please provide an object with a single key (operation name) mapping to a function. Got an object with "+e.length+" keys.");let n=e[0];const s=t[n];n.endsWith("_")&&(n=n.substring(0,n.length-1)),n+=o;const i=(...t)=>{r.a.startScope(n);try{const e=s(...t);return Object(a.x)(e)&&console.error("Cannot return a Promise inside of tidy."),r.a.endScope(e),e}catch(t){throw r.a.endScope(null),t}};return Object.defineProperty(i,"name",{value:n,configurable:!0}),i}},function(t,e,n){"use strict";n.d(e,"b",(function(){return g})),n.d(e,"a",(function(){return y}));var r=n(119),a=n(22),o=n(122),s=n(1),i=n(58),c=n(7);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class u{constructor(t,e){this.backendTimer=t,this.logger=e,null==e&&(this.logger=new l)}profileKernel(t,e,n){let r;const o=this.backendTimer.time(()=>{r=n()});if(Object(a.c)().getBool("CHECK_COMPUTATION_FOR_ERRORS"))for(let e=0;e<r.length;e++){const n=r[e];n.data().then(e=>{d(e,n.dtype,t)})}return{kernelName:t,outputs:r,inputs:e,timeMs:o.then(t=>t.kernelMs),extraInfo:o.then(t=>null!=t.getExtraProfileInfo?t.getExtraProfileInfo():"")}}logKernelProfile(t){const{kernelName:e,outputs:n,timeMs:r,inputs:a,extraInfo:o}=t;n.forEach(t=>{Promise.all([t.data(),r,o]).then(n=>{this.logger.logKernelProfile(e,t,n[0],n[1],a,n[2])})})}}function d(t,e,n){if("float32"!==e)return!1;for(let e=0;e<t.length;e++){const r=t[e];if(isNaN(r)||!isFinite(r))return console.warn(`Found ${r} in the result of '${n}'`),!0}return!1}class l{logKernelProfile(t,e,n,r,a,o){const s="number"==typeof r?c.L(r+"ms",9):r.error,i=c.L(t,25),u=e.rank,d=e.size,l=c.L(e.shape.toString(),14);let p="";for(const t in a){const n=a[t];if(null!=n){const r=n.shape||e.shape,a=r.length;p+=`${t}: ${a}D ${a>0?r:""} `}}console.log(`%c${i}\t%c${s}\t%c${u}D ${l}\t%c${d}\t%c${p}\t%c${o}`,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")}}
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var p=n(5),f=n(21),h=n(10);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class b{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map(t=>t.name)))}}}dispose(){for(const t in this.registeredVariables)this.registeredVariables[t].dispose()}}class m{constructor(t){this.ENV=t,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new b}async ready(){if(null!=this.pendingBackendInit)return this.pendingBackendInit.then(()=>{});if(null!=this.backendInstance)return;const t=this.getSortedBackends();for(let e=0;e<t.length;e++){const n=t[e];if(await this.initializeBackend(n).success)return void await this.setBackend(n)}throw new Error("Could not initialize any backends, all backend initializations failed.")}get backend(){if(null!=this.pendingBackendInit)throw new Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(null==this.backendInstance){const{name:t,asyncInit:e}=this.initializeBackendsAndReturnBest();if(e)throw new Error(`The highest priority backend '${t}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(t)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(t){if(!(t in this.registry)){if(!(t in this.registryFactory))return null;{const{asyncInit:e}=this.initializeBackend(t);if(e)return null}}return this.registry[t]}findBackendFactory(t){return t in this.registryFactory?this.registryFactory[t].factory:null}registerBackend(t,e,n=1){return t in this.registryFactory?(console.warn(t+" backend was already registered. Reusing existing backend factory."),!1):(this.registryFactory[t]={factory:e,priority:n},!0)}async setBackend(t){if(null==this.registryFactory[t])throw new Error(`Backend name '${t}' not found in registry`);if(this.backendName=t,null==this.registry[t]){this.backendInstance=null;const{success:e,asyncInit:n}=this.initializeBackend(t);if(!(n?await e:e))return!1}return this.backendInstance=this.registry[t],this.setupRegisteredKernels(),this.profiler=new u(this.backendInstance),!0}setupRegisteredKernels(){Object(i.d)(this.backendName).forEach(t=>{null!=t.setupFunc&&t.setupFunc(this.backendInstance)})}disposeRegisteredKernels(t){Object(i.d)(t).forEach(e=>{null!=e.disposeFunc&&e.disposeFunc(this.registry[t])})}initializeBackend(t){const e=this.registryFactory[t];if(null==e)throw new Error(`Cannot initialize backend ${t}, no registration found.`);try{const n=e.factory();if(!n||n instanceof r.b||"function"!=typeof n.then)return this.registry[t]=n,{success:!0,asyncInit:!1};{const e=++this.pendingBackendInitId,r=n.then(n=>!(e<this.pendingBackendInitId)&&(this.registry[t]=n,this.pendingBackendInit=null,!0)).catch(n=>(e<this.pendingBackendInitId||(this.pendingBackendInit=null,console.warn(`Initialization of backend ${t} failed`),console.warn(n.stack||n.message)),!1));return this.pendingBackendInit=r,{success:r,asyncInit:!0}}}catch(e){return console.warn(`Initialization of backend ${t} failed`),console.warn(e.stack||e.message),{success:!1,asyncInit:!1}}}removeBackend(t){if(!(t in this.registryFactory))throw new Error(t+" backend not found in registry");this.backendName===t&&null!=this.pendingBackendInit&&this.pendingBackendInitId++,t in this.registry&&(this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t]),delete this.registryFactory[t],this.backendName===t&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(0===Object.keys(this.registryFactory).length)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort((t,e)=>this.registryFactory[e].priority-this.registryFactory[t].priority)}initializeBackendsAndReturnBest(){const t=this.getSortedBackends();for(let e=0;e<t.length;e++){const n=t[e],{success:r,asyncInit:a}=this.initializeBackend(n);if(a||r)return{name:n,asyncInit:a}}throw new Error("Could not initialize any backends, all backend initializations failed.")}moveData(t,e){const n=this.state.tensorInfo.get(e),r=n.backend,a=this.readSync(e);r.disposeData(e),n.backend=t,t.move(e,a,n.shape,n.dtype),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(t,e){let n,r=null;if(null==e){if("function"!=typeof t)throw new Error("Please provide a function to tidy()");e=t}else{if("string"!=typeof t&&!(t instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if("function"!=typeof e)throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");r=t}return this.scopedRun(()=>this.startScope(r),()=>this.endScope(n),()=>(n=e(),n instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),n))}scopedRun(t,e,n){t();try{const t=n();return e(),t}catch(t){throw e(),t}}nextTensorId(){return m.nextTensorId++}nextVariableId(){return m.nextVariableId++}clone(t){const e=this.makeTensorFromDataId(t.dataId,t.shape,t.dtype),n={x:t};return this.addTapeNode(this.state.activeScope.name,n,[e],t=>({x:()=>{const e={x:t},n={dtype:"float32"};return y.runKernelFunc(e=>e.cast(t,"float32"),e,null,s.w,n)}}),[],{}),e}runKernel(t,e,n,r,a){return this.runKernelFunc(null,e,null,t,n,r,a)}shouldCheckForMemLeaks(){return this.ENV.getBool("IS_TEST")}checkKernelForMemLeak(t,e,n){const r=this.backend.numDataIds();let a=0;n.forEach(t=>{a+="complex64"===t.dtype?3:1});const o=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],s=r-e-a-o;if(s>0)throw new Error(`Backend '${this.backendName}' has an internal memory leak (${s} data ids) after running '${t}'`)}runKernelFunc(t,e,n,r,a,o,s){let c,u=[];const d=this.isTapeOn();null==r&&(r=null!=this.state.activeScope?this.state.activeScope.name:"");const l=this.state.numBytes,p=this.state.numTensors;let f;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0),null==this.backendName&&this.backend;const h=Object(i.c)(r,this.backendName);let b,m;if(null!=h)f=()=>{const t=this.backend.numDataIds();b=h.kernelFunc({inputs:e,attrs:a,backend:this.backend});const n=Array.isArray(b)?b:[b];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(r,t,n);const i=n.map(t=>{if(null!=t.rank)return t;const{dataId:e,shape:n,dtype:r}=t;return this.makeTensorFromDataId(e,n,r)});if(d){let t=this.getTensorsForGradient(r,e,i);if(null==t){null==s&&(s=[]);const e=i.filter((t,e)=>s[e]);t=(o||[]).slice().concat(e)}u=this.saveTensorsForBackwardMode(t)}return i};else{if(null==t)throw new Error(`Error running ${r}: Neither modular kernel nor forward func passed`);const e=t=>{d&&(u=t.map(t=>this.keep(this.clone(t))))};f=()=>{const n=this.backend.numDataIds();b=this.tidy(()=>t(this.backend,e));const a=Array.isArray(b)?b:[b];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(r,n,a),a}}return this.scopedRun(()=>this.state.kernelDepth++,()=>this.state.kernelDepth--,()=>{this.ENV.getBool("DEBUG")||this.state.profiling?(m=this.profiler.profileKernel(r,e,()=>f()),this.ENV.getBool("DEBUG")&&this.profiler.logKernelProfile(m),c=m.outputs):c=f()}),d&&this.addTapeNode(r,e,c,n,u,a),this.state.profiling&&this.state.activeProfile.kernels.push({name:r,bytesAdded:this.state.numBytes-l,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-p,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(e).map(t=>null!=e[t]?e[t].shape:null),outputShapes:c.map(t=>t.shape),kernelTimeMs:m.timeMs,extraInfo:m.extraInfo}),Array.isArray(b)?c:c[0]}saveTensorsForBackwardMode(t){return t.map(t=>this.keep(this.clone(t)))}getTensorsForGradient(t,e,n){const r=Object(i.b)(t);if(null!=r){const t=r.inputsToSave||[],a=r.outputsToSave||[];let o;r.saveAllInputs?(c.b(Array.isArray(e),()=>"saveAllInputs is true, expected inputs to be an array."),o=Object.keys(e).map(t=>e[t])):o=t.map(t=>e[t]);const s=n.filter((t,e)=>a[e]);return o.concat(s)}return null}makeTensor(t,e,n,r){if(null==t)throw new Error("Values passed to engine.makeTensor() are null");n=n||"float32",r=r||this.backend;let a=t;"string"===n&&c.z(t[0])&&(a=t.map(t=>h.encodeString(t)));const o=r.write(a,e,n),s=new p.a(e,n,o,this.nextTensorId());if(this.incRef(s,r),"string"===n){const t=this.state.tensorInfo.get(o),e=Object(c.f)(a);this.state.numBytes+=e-t.bytes,t.bytes=e}return s}makeTensorFromDataId(t,e,n,r){n=n||"float32";const a=new p.a(e,n,t,this.nextTensorId());return this.incRef(a,r),a}makeVariable(t,e=!0,n,r){n=n||this.nextVariableId().toString(),null!=r&&r!==t.dtype&&(t=t.cast(r));const a=new p.c(t,e,n,this.nextTensorId());if(null!=this.state.registeredVariables[a.name])throw new Error(`Variable with name ${a.name} was already registered`);return this.state.registeredVariables[a.name]=a,this.incRef(a,this.backend),a}incRef(t,e){const n=this.state.tensorInfo.has(t.dataId)?this.state.tensorInfo.get(t.dataId).refCount:0;if(this.state.numTensors++,"string"===t.dtype&&this.state.numStringTensors++,0===n){this.state.numDataBuffers++;let n=0;"complex64"!==t.dtype&&"string"!==t.dtype&&(n=t.size*c.g(t.dtype)),this.state.tensorInfo.set(t.dataId,{backend:e||this.backend,dtype:t.dtype,shape:t.shape,bytes:n,refCount:0}),this.state.numBytes+=n}this.state.tensorInfo.get(t.dataId).refCount++,t instanceof p.c||this.track(t)}disposeTensor(t){if(!this.state.tensorInfo.has(t.dataId))return;this.state.numTensors--,"string"===t.dtype&&this.state.numStringTensors--;const e=this.state.tensorInfo.get(t.dataId);e.refCount<=1?("complex64"!==t.dtype&&(this.state.numBytes-=e.bytes),this.state.numDataBuffers--,e.backend.disposeData(t.dataId),this.state.tensorInfo.delete(t.dataId)):(e.backend.decComplexRef(t.dataId),this.state.tensorInfo.get(t.dataId).refCount--)}disposeVariables(){for(const t in this.state.registeredVariables){const e=this.state.registeredVariables[t];this.disposeVariable(e)}}disposeVariable(t){this.disposeTensor(t),null!=this.state.registeredVariables[t.name]&&delete this.state.registeredVariables[t.name]}memory(){const t=this.backend.memory();return t.numTensors=this.state.numTensors,t.numDataBuffers=this.state.numDataBuffers,t.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(t.unreliable=!0,null==t.reasons&&(t.reasons=[]),t.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),t}async profile(t){this.state.profiling=!0;const e=this.state.numBytes,n=this.state.numTensors;this.state.activeProfile.kernels=[],this.state.activeProfile.result=await t(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map(t=>t.totalBytesSnapshot)),this.state.activeProfile.newBytes=this.state.numBytes-e,this.state.activeProfile.newTensors=this.state.numTensors-n;for(const t of this.state.activeProfile.kernels)t.kernelTimeMs=await t.kernelTimeMs,t.extraInfo=await t.extraInfo;return this.state.activeProfile}isTapeOn(){return this.state.gradientDepth>0&&0===this.state.kernelDepth}addTapeNode(t,e,n,r,a,o){const s={id:this.state.nextTapeNodeId++,kernelName:t,inputs:e,outputs:n,saved:a},u=Object(i.b)(t);null!=u&&(r=u.gradFunc),null!=r&&(s.gradient=t=>(t=t.map((t,e)=>{if(null==t){const t=n[e],r=c.F(t.size,t.dtype);return this.makeTensor(r,t.shape,t.dtype)}return t}),r(t.length>1?t:t[0],a,o))),this.state.activeTape.push(s)}keep(t){return t.kept=!0,t}startTape(){0===this.state.gradientDepth&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(t){const e={track:[],name:"unnamed scope",id:this.state.nextScopeId++};t&&(e.name=t),this.state.scopeStack.push(e),this.state.activeScope=e}endScope(t){const e=Object(f.getTensorsInContainer)(t),n=new Set(e.map(t=>t.id));for(let t=0;t<this.state.activeScope.track.length;t++){const e=this.state.activeScope.track[t];e.kept||n.has(e.id)||e.dispose()}const r=this.state.scopeStack.pop();this.state.activeScope=0===this.state.scopeStack.length?null:this.state.scopeStack[this.state.scopeStack.length-1],e.forEach(t=>{t.kept||t.scopeId!==r.id||this.track(t)})}gradients(t,e,n,r=!1){if(c.b(e.length>0,()=>"gradients() received an empty list of xs."),null!=n&&"float32"!==n.dtype)throw new Error(`dy must have 'float32' dtype, but has '${n.dtype}'`);const a=this.scopedRun(()=>this.startTape(),()=>this.endTape(),()=>this.tidy("forward",t));c.b(a instanceof p.a,()=>"The result y returned by f() must be a tensor.");const o=function(t,e,n){const r={},a={};for(let t=0;t<e.length;t++)r[e[t].id]=!0;for(let n=0;n<t.length;n++){const o=t[n],s=o.inputs;for(const t in s){const n=s[t];let i=!1;for(let t=0;t<e.length;t++)if(r[n.id]){o.outputs.forEach(t=>r[t.id]=!0),i=!0,a[o.id]=!0;break}if(i)break}}const o={};o[n.id]=!0;const s={};for(let e=t.length-1;e>=0;e--){const n=t[e],r=n.inputs;for(let t=0;t<n.outputs.length;t++)if(o[n.outputs[t].id]){for(const t in r)o[r[t].id]=!0,s[n.id]=!0;break}}const i=[];for(let e=0;e<t.length;e++){const n=t[e];if(a[n.id]&&s[n.id]){const t={};for(const e in n.inputs){const a=n.inputs[e];r[a.id]&&(t[e]=a)}const e=Object.assign({},n);e.inputs=t,e.outputs=n.outputs,i.push(e)}}return i}(this.state.activeTape,e,a);if(!r&&0===o.length&&e.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",()=>{const t={};t[a.id]=null==n?function(t){const e=Object(c.D)(Object(c.N)(t),"float32");return y.makeTensor(e,t,"float32")}(a.shape):n,function(t,e,n,r){for(let a=e.length-1;a>=0;a--){const o=e[a],s=[];if(o.outputs.forEach(e=>{const n=t[e.id];null!=n?s.push(n):s.push(null)}),null==o.gradient)throw new Error(`Cannot compute gradient: gradient function not found for ${o.kernelName}.`);const i=o.gradient(s);for(const e in o.inputs){if(!(e in i))throw new Error(`Cannot backprop through input ${e}. Available gradients found: ${Object.keys(i)}.`);const a=n(()=>i[e]());if("float32"!==a.dtype)throw new Error(`Error in gradient for op ${o.kernelName}. The gradient of input ${e} must have 'float32' dtype, but has '${a.dtype}'`);const s=o.inputs[e];if(!c.a(a.shape,s.shape))throw new Error(`Error in gradient for op ${o.kernelName}. The gradient of input '${e}' has shape '${a.shape}', which does not match the shape of the input '${s.shape}'`);if(null==t[s.id])t[s.id]=a;else{const e=t[s.id];t[s.id]=r(e,a),e.dispose()}}}}(t,o,t=>this.tidy(t),O);const r=e.map(e=>t[e.id]);return 0===this.state.gradientDepth&&(this.state.activeTape.forEach(t=>{for(const e of t.saved)e.dispose()}),this.state.activeTape=null),{value:a,grads:r}})}customGrad(t){return c.b(c.u(t),()=>"The f passed in customGrad(f) must be a function."),(...e)=>{let n;c.b(e.every(t=>t instanceof p.a),()=>"The args passed in customGrad(f)(x1, x2,...) must all be tensors");const r={};return e.forEach((t,e)=>{r[e]=t}),this.runKernelFunc((r,a)=>(n=t(...e,a),c.b(n.value instanceof p.a,()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"),c.b(c.u(n.gradFunc),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."),n.value),r,(t,r)=>{const a=n.gradFunc(t,r),o=Array.isArray(a)?a:[a];c.b(o.length===e.length,()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."),c.b(o.every(t=>t instanceof p.a),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.");const s={};return o.forEach((t,e)=>{s[e]=()=>t}),s})}}readSync(t){return this.state.tensorInfo.get(t).backend.readSync(t)}read(t){return this.state.tensorInfo.get(t).backend.read(t)}async time(t){const e=Object(h.now)(),n=await this.backend.time(t);return n.wallMs=Object(h.now)()-e,n}track(t){return null!=this.state.activeScope&&(t.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(t)),t}get registeredVariables(){return this.state.registeredVariables}reset(){this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new b;for(const t in this.registry)this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}}function g(){const t=Object(o.b)();if(null==t._tfengine){const e=new a.b(t);t._tfengine=new m(e)}return Object(a.d)(t._tfengine.ENV),Object(p.f)(()=>t._tfengine),t._tfengine}m.nextTensorId=0,m.nextVariableId=0;const y=g();function O(t,e){const n={a:t,b:e};return y.runKernel(s.d,n)}},function(t,e,n){"use strict";n.d(e,"b",(function(){return u})),n.d(e,"f",(function(){return f})),n.d(e,"e",(function(){return h})),n.d(e,"d",(function(){return b})),n.d(e,"a",(function(){return m})),n.d(e,"c",(function(){return g}));var r=n(7);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function a(t,e,n,a){const c=Object(r.j)(e),u=function(t,e,n,a){const s=Object(r.N)(e),c=a[a.length-1],u=new Array(c).fill(0),d=e.length,l="complex64"===n?i(t):t;if(d>1)for(let t=0;t<s/c;t++){const e=t*c;for(let t=0;t<c;t++)u[t]=Math.max(u[t],o(l[e+t],0,n).length)}return u}(t,e,n,c),d=e.length,l=function t(e,n,r,a,c,u=!0){const d="complex64"===r?2:1,l=n[0],p=n.length;if(0===p){if("complex64"===r){return[o(i(e)[0],0,r)]}return"bool"===r?[s(e[0])]:[e[0].toString()]}if(1===p){if(l>20){const t=3*d;let n=Array.from(e.slice(0,t)),a=Array.from(e.slice((l-3)*d,l*d));return"complex64"===r&&(n=i(n),a=i(a)),["["+n.map((t,e)=>o(t,c[e],r)).join(", ")+", ..., "+a.map((t,e)=>o(t,c[l-3+e],r)).join(", ")+"]"]}return["["+("complex64"===r?i(e):Array.from(e)).map((t,e)=>o(t,c[e],r)).join(", ")+"]"]}const f=n.slice(1),h=a.slice(1),b=a[0]*d,m=[];if(l>20){for(let n=0;n<3;n++){const a=n*b,o=a+b;m.push(...t(e.slice(a,o),f,r,h,c,!1))}m.push("...");for(let n=l-3;n<l;n++){const a=n*b,o=a+b;m.push(...t(e.slice(a,o),f,r,h,c,n===l-1))}}else for(let n=0;n<l;n++){const a=n*b,o=a+b;m.push(...t(e.slice(a,o),f,r,h,c,n===l-1))}const g=2===p?",":"";m[0]="["+m[0]+g;for(let t=1;t<m.length-1;t++)m[t]=" "+m[t]+g;let y=",\n";for(let t=2;t<p;t++)y+="\n";return m[m.length-1]=" "+m[m.length-1]+"]"+(u?"":y),m}(t,e,n,c,u),p=["Tensor"];return a&&(p.push("  dtype: "+n),p.push("  rank: "+d),p.push(`  shape: [${e}]`),p.push("  values:")),p.push(l.map(t=>"    "+t).join("\n")),p.join("\n")}function o(t,e,n){let a;return a=Array.isArray(t)?parseFloat(t[0].toFixed(7))+" + "+parseFloat(t[1].toFixed(7))+"j":Object(r.z)(t)?`'${t}'`:"bool"===n?s(t):parseFloat(t.toFixed(7)).toString(),Object(r.L)(a,e)}function s(t){return 0===t?"false":"true"}function i(t){const e=[];for(let n=0;n<t.length;n+=2)e.push([t[n],t[n+1]]);return e}var c=n(10);
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class u{constructor(t,e,n){if(this.dtype=e,this.shape=t.slice(),this.size=r.N(t),null!=n){const t=n.length;r.b(t===this.size,()=>`Length of values '${t}' does not match the size inferred by the shape '${this.size}'.`)}if("complex64"===e)throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=n||r.n(e,this.size),this.strides=Object(r.j)(t)}set(t,...e){0===e.length&&(e=[0]),r.b(e.length===this.rank,()=>`The number of provided coordinates (${e.length}) must match the rank (${this.rank})`);const n=this.locToIndex(e);this.values[n]=t}get(...t){0===t.length&&(t=[0]);let e=0;for(const n of t){if(n<0||n>=this.shape[e]){const e=`Requested out of range element at ${t}.   Buffer shape=`+this.shape;throw new Error(e)}e++}let n=t[t.length-1];for(let e=0;e<t.length-1;++e)n+=this.strides[e]*t[e];return this.values[n]}locToIndex(t){if(0===this.rank)return 0;if(1===this.rank)return t[0];let e=t[t.length-1];for(let n=0;n<t.length-1;++n)e+=this.strides[n]*t[n];return e}indexToLoc(t){if(0===this.rank)return[];if(1===this.rank)return[t];const e=new Array(this.shape.length);for(let n=0;n<e.length-1;++n)e[n]=Math.floor(t/this.strides[n]),t-=e[n]*this.strides[n];return e[e.length-1]=t,e}get rank(){return this.shape.length}toTensor(){return d().makeTensor(this.values,this.shape,this.dtype)}}let d=null,l=null,p=null;function f(t){d=t}function h(t){l=t}function b(t){p=t}class m{constructor(t,e,n,a){this.kept=!1,this.isDisposedInternal=!1,this.shape=t.slice(),this.dtype=e||"float32",this.size=r.N(t),this.strides=Object(r.j)(t),this.dataId=n,this.id=a,this.rankType=this.rank<5?this.rank.toString():"higher"}get rank(){return this.shape.length}async buffer(){const t=await this.data();return l.buffer(this.shape,this.dtype,t)}bufferSync(){return l.buffer(this.shape,this.dtype,this.dataSync())}async array(){const t=await this.data();return Object(r.S)(this.shape,t)}arraySync(){return Object(r.S)(this.shape,this.dataSync())}async data(){this.throwIfDisposed();const t=d().read(this.dataId);if("string"===this.dtype){const e=await t;try{return e.map(t=>c.decodeString(t))}catch(t){throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}}return t}dataSync(){this.throwIfDisposed();const t=d().readSync(this.dataId);if("string"===this.dtype)try{return t.map(t=>c.decodeString(t))}catch(t){throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return t}async bytes(){this.throwIfDisposed();const t=await d().read(this.dataId);return"string"===this.dtype?t:new Uint8Array(t.buffer)}dispose(){this.isDisposed||(d().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw new Error("Tensor is disposed.")}print(t=!1){return l.print(this,t)}clone(){return this.throwIfDisposed(),l.clone(this)}toString(t=!1){return a(this.dataSync(),this.shape,this.dtype,t)}cast(t){return this.throwIfDisposed(),l.cast(this,t)}variable(t=!0,e,n){return this.throwIfDisposed(),d().makeVariable(this,t,e,n)}}Object.defineProperty(m,Symbol.hasInstance,{value:t=>!!t&&null!=t.data&&null!=t.dataSync&&null!=t.throwIfDisposed});class g extends m{constructor(t,e,n,r){super(t.shape,t.dtype,t.dataId,r),this.trainable=e,this.name=n}assign(t){if(t.dtype!==this.dtype)throw new Error(`dtype of the new value (${t.dtype}) and previous value (${this.dtype}) must match`);if(!r.a(t.shape,this.shape))throw new Error(`shape of the new value (${t.shape}) and previous value (${this.shape}) must match`);d().disposeTensor(this),this.dataId=t.dataId,d().incRef(this,null)}dispose(){d().disposeVariable(this),this.isDisposedInternal=!0}}Object.defineProperty(g,Symbol.hasInstance,{value:t=>t instanceof m&&null!=t.assign&&t.assign instanceof Function})},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(4),a=n(1),o=n(0),s=n(3);const i=Object(s.b)({reshape_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e){const n={x:Object(o.a)(t,"x","reshape","string_or_numeric")},s={shape:e};return r.a.runKernel(a.oc,n,s)}})},function(t,e,n){"use strict";
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function r(t){let e=t.length,n=0,r=0;for(;e>0;)r=Math.random()*e|0,e--,n=t[e],t[e]=t[r],t[r]=n}function a(t,e,n){return Math.max(t,Math.min(e,n))}function o(t){return t%2==0?t:t+1}function s(t){let e=0;for(let n=0;n<t.length;n++)e+=t[n];return e}function i(t,e){const n=Math.random();return e*n+(1-n)*t}function c(t,e){let n=0;for(let r=0;r<t.length;r++){const a=Number(t[r])-Number(e[r]);n+=a*a}return n}function u(t,e){if(!t)throw new Error("string"==typeof e?e:e())}function d(t,e,n=""){u(b(t,e),()=>n+` Shapes ${t} and ${e} must match`)}function l(t){u(null!=t,()=>"The input to the tensor constructor must be a non-null value.")}function p(t,e=[],n=!1){if(null==e&&(e=[]),Array.isArray(t)||A(t)&&!n)for(let r=0;r<t.length;++r)p(t[r],e,n);else e.push(t);return e}function f(t){if(0===t.length)return 1;let e=t[0];for(let n=1;n<t.length;n++)e*=t[n];return e}function h(t){return 0===t.length}function b(t,e){if(t===e)return!0;if(null==t||null==e)return!1;if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}function m(t){return t%1==0}function g(t){if(null!=Math.tanh)return Math.tanh(t);if(t===1/0)return 1;if(t===-1/0)return-1;{const e=Math.exp(2*t);return(e-1)/(e+1)}}function y(t){const e=Math.ceil(Math.sqrt(t));return[e,Math.ceil(t/e)]}function O(t){const e=new Uint32Array(t);for(let n=0;n<t;++n)e[n]=n;return r(e),e}function j(t,e){return e<=t.length?t:t+" ".repeat(e-t.length)}function v(t,e=(t=>0),n){return new Promise((r,a)=>{let o=0;const s=()=>{if(t())return void r();o++;const i=e(o);null!=n&&o>=n?a():setTimeout(s,i)};s()})}function w(t,e){let n=1,r=-1;for(let e=0;e<t.length;++e)if(t[e]>=0)n*=t[e];else if(-1===t[e]){if(-1!==r)throw Error(`Shapes can only have 1 implicit size. Found -1 at dim ${r} and dim ${e}`);r=e}else if(t[e]<0)throw Error(`Shapes can not be < 0. Found ${t[e]} at dim ${e}`);if(-1===r){if(e>0&&e!==n)throw Error(`Size(${e}) must match the product of shape ${t}`);return t}if(0===n)throw Error(`Cannot infer the missing size in [${t}] when there are 0 elements`);if(e%n!=0)throw Error(`The implicit shape can't be a fractional number. Got ${e} / ${n}`);const a=t.slice();return a[r]=e/n,a}function x(t,e){const n=e.length;return u((t=null==t?e.map((t,e)=>e):[].concat(t)).every(t=>t>=-n&&t<n),()=>`All values in axis param must be in range [-${n}, ${n}) but got axis `+t),u(t.every(t=>m(t)),()=>"All values in axis param must be integers but got axis "+t),t.map(t=>t<0?n+t:t)}function k(t,e){const n=[],r=[],a=null!=e&&Array.isArray(e)&&0===e.length,o=null==e||a?null:x(e,t).sort();let s=0;for(let e=0;e<t.length;++e){if(null!=o){if(o[s]===e&&1!==t[e])throw new Error(`Can't squeeze axis ${e} since its dim '${t[e]}' is not 1`);(null==o[s]||o[s]>e)&&1===t[e]&&(n.push(t[e]),r.push(e)),o[s]<=e&&s++}1!==t[e]&&(n.push(t[e]),r.push(e))}return{newShape:n,keptDims:r}}function N(t,e){let n=null;if(null==t||"float32"===t)n=new Float32Array(e);else if("int32"===t)n=new Int32Array(e);else{if("bool"!==t)throw new Error("Unknown data type "+t);n=new Uint8Array(e)}return n}function S(t,e){let n=null;if(null==t||"float32"===t)n=new Float32Array(e);else if("int32"===t)n=new Int32Array(e);else if("bool"===t)n=new Uint8Array(e);else{if("string"!==t)throw new Error("Unknown data type "+t);n=new Array(e)}return n}function E(t,e){for(let n=0;n<t.length;n++){const r=t[n];if(isNaN(r)||!isFinite(r))throw Error(`A tensor of type ${e} being uploaded contains ${r}.`)}}function T(t){return"bool"===t||"complex64"===t||"float32"===t||"int32"===t||"string"===t}function I(t,e){return"complex64"!==e&&(("float32"!==e||"complex64"===t)&&(("int32"!==e||"float32"===t||"complex64"===t)&&("bool"!==e||"bool"!==t)))}function A(t){return t instanceof Float32Array||t instanceof Int32Array||t instanceof Uint8Array}function _(t){if("float32"===t||"int32"===t)return 4;if("complex64"===t)return 8;if("bool"===t)return 1;throw new Error("Unknown dtype "+t)}function D(t){if(null==t)return 0;let e=0;return t.forEach(t=>e+=t.length),e}function M(t){return"string"==typeof t||t instanceof String}function F(t){return"boolean"==typeof t}function $(t){return"number"==typeof t}function R(t){return Array.isArray(t)?R(t[0]):t instanceof Float32Array?"float32":t instanceof Int32Array||t instanceof Uint8Array?"int32":$(t)?"float32":M(t)?"string":F(t)?"bool":"float32"}function P(t){return!!(t&&t.constructor&&t.call&&t.apply)}function C(t,e){for(let n=e;n<t;++n)if(t%n==0)return n;return t}function B(t){const e=t.length;if(e<2)return[];const n=new Array(e-1);n[e-2]=t[e-1];for(let r=e-3;r>=0;--r)n[r]=n[r+1]*t[r+1];return n}function L(t,e){if(0===t.length)return e[0];const n=t.reduce((t,e)=>t*e);if(0===n)return[];if(n!==e.length)throw new Error(`[${t}] does not match the input size ${e.length}.`);return function t(e,n,r){const a=new Array;if(1===n.length){const t=n[0];for(let n=0;n<t;n++)a[n]=r[e+n]}else{const o=n[0],s=n.slice(1),i=s.reduce((t,e)=>t*e);for(let n=0;n<o;n++)a[n]=t(e+n*i,s,r)}return a}(0,t,e)}function z(t,e){const n=V(t,e);for(let t=0;t<n.length;t++)n[t]=1;return n}function V(t,e){if(null==e||"float32"===e||"complex64"===e)return new Float32Array(t);if("int32"===e)return new Int32Array(t);if("bool"===e)return new Uint8Array(t);throw new Error("Unknown data type "+e)}function q(t,e){const n=t.reduce((t,e)=>t*e,1);if(null==e||"float32"===e)return L(t,new Float32Array(n));if("int32"===e)return L(t,new Int32Array(n));if("bool"===e)return L(t,new Uint8Array(n));throw new Error("Unknown data type "+e)}function U(t){t.forEach(e=>{u(Number.isInteger(e)&&e>=0,()=>`Tensor must have a shape comprised of positive integers but got shape [${t}].`)})}function H(t,e,n){if(0===e)return 0;if(1===e)return t[0];let r=t[t.length-1];for(let e=0;e<t.length-1;++e)r+=n[e]*t[e];return r}function W(t,e,n){if(0===e)return[];if(1===e)return[t];const r=new Array(e);for(let e=0;e<r.length-1;++e)r[e]=Math.floor(t/n[e]),t-=r[e]*n[e];return r[r.length-1]=t,r}function G(t){return t&&t.then&&"function"==typeof t.then}n.d(e,"M",(function(){return r})),n.d(e,"i",(function(){return a})),n.d(e,"H",(function(){return o})),n.d(e,"Q",(function(){return s})),n.d(e,"J",(function(){return i})),n.d(e,"l",(function(){return c})),n.d(e,"b",(function(){return u})),n.d(e,"e",(function(){return d})),n.d(e,"d",(function(){return l})),n.d(e,"m",(function(){return p})),n.d(e,"N",(function(){return f})),n.d(e,"y",(function(){return h})),n.d(e,"a",(function(){return b})),n.d(e,"v",(function(){return m})),n.d(e,"R",(function(){return g})),n.d(e,"O",(function(){return y})),n.d(e,"k",(function(){return O})),n.d(e,"L",(function(){return j})),n.d(e,"K",(function(){return v})),n.d(e,"s",(function(){return w})),n.d(e,"I",(function(){return x})),n.d(e,"P",(function(){return k})),n.d(e,"o",(function(){return N})),n.d(e,"n",(function(){return S})),n.d(e,"h",(function(){return E})),n.d(e,"B",(function(){return T})),n.d(e,"p",(function(){return I})),n.d(e,"A",(function(){return A})),n.d(e,"g",(function(){return _})),n.d(e,"f",(function(){return D})),n.d(e,"z",(function(){return M})),n.d(e,"t",(function(){return F})),n.d(e,"w",(function(){return $})),n.d(e,"r",(function(){return R})),n.d(e,"u",(function(){return P})),n.d(e,"G",(function(){return C})),n.d(e,"j",(function(){return B})),n.d(e,"S",(function(){return L})),n.d(e,"D",(function(){return z})),n.d(e,"F",(function(){return V})),n.d(e,"E",(function(){return q})),n.d(e,"c",(function(){return U})),n.d(e,"C",(function(){return H})),n.d(e,"q",(function(){return W})),n.d(e,"x",(function(){return G}))},function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(4),a=n(1),o=n(21),s=n(0),i=n(3);const c=Object(i.b)({mul_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e){let n=Object(s.a)(t,"a","mul"),i=Object(s.a)(e,"b","mul");[n,i]=Object(o.makeTypesMatch)(n,i);const c={a:n,b:i};return r.a.runKernel(a.Ub,c)}})},function(t,e,n){"use strict";n.r(e),n.d(e,"AdadeltaOptimizer",(function(){return ce})),n.d(e,"AdagradOptimizer",(function(){return de})),n.d(e,"AdamOptimizer",(function(){return fe})),n.d(e,"AdamaxOptimizer",(function(){return me})),n.d(e,"MomentumOptimizer",(function(){return ye})),n.d(e,"Optimizer",(function(){return ie})),n.d(e,"RMSPropOptimizer",(function(){return Oe})),n.d(e,"SGDOptimizer",(function(){return ge})),n.d(e,"Tensor",(function(){return Y.a})),n.d(e,"TensorBuffer",(function(){return Y.b})),n.d(e,"Variable",(function(){return Y.c})),n.d(e,"Rank",(function(){return je.a})),n.d(e,"sumOutType",(function(){return je.b})),n.d(e,"upcastType",(function(){return je.c})),n.d(e,"abs",(function(){return ve.b})),n.d(e,"acos",(function(){return ve.c})),n.d(e,"acosh",(function(){return ve.d})),n.d(e,"add",(function(){return ve.e})),n.d(e,"addN",(function(){return ve.f})),n.d(e,"all",(function(){return ve.h})),n.d(e,"any",(function(){return ve.i})),n.d(e,"argMax",(function(){return ve.j})),n.d(e,"argMin",(function(){return ve.k})),n.d(e,"asin",(function(){return ve.l})),n.d(e,"asinh",(function(){return ve.m})),n.d(e,"atan",(function(){return ve.n})),n.d(e,"atan2",(function(){return ve.o})),n.d(e,"atanh",(function(){return ve.p})),n.d(e,"avgPool",(function(){return ve.q})),n.d(e,"avgPool3d",(function(){return ve.r})),n.d(e,"basicLSTMCell",(function(){return ve.s})),n.d(e,"batchToSpaceND",(function(){return ve.x})),n.d(e,"batchNorm",(function(){return ve.t})),n.d(e,"batchNorm2d",(function(){return ve.u})),n.d(e,"batchNorm3d",(function(){return ve.v})),n.d(e,"batchNorm4d",(function(){return ve.w})),n.d(e,"bincount",(function(){return ve.y})),n.d(e,"broadcastTo",(function(){return ve.A})),n.d(e,"buffer",(function(){return ve.B})),n.d(e,"cast",(function(){return ve.C})),n.d(e,"ceil",(function(){return ve.D})),n.d(e,"clipByValue",(function(){return ve.E})),n.d(e,"clone",(function(){return ve.F})),n.d(e,"complex",(function(){return ve.G})),n.d(e,"concat",(function(){return ve.H})),n.d(e,"concat1d",(function(){return ve.I})),n.d(e,"concat2d",(function(){return ve.J})),n.d(e,"concat3d",(function(){return ve.K})),n.d(e,"concat4d",(function(){return ve.L})),n.d(e,"conv1d",(function(){return ve.M})),n.d(e,"conv2d",(function(){return ve.N})),n.d(e,"conv2dTranspose",(function(){return ve.O})),n.d(e,"conv3d",(function(){return ve.P})),n.d(e,"conv3dTranspose",(function(){return ve.Q})),n.d(e,"cos",(function(){return ve.R})),n.d(e,"cosh",(function(){return ve.S})),n.d(e,"cumsum",(function(){return ve.U})),n.d(e,"denseBincount",(function(){return ve.V})),n.d(e,"depthToSpace",(function(){return ve.W})),n.d(e,"depthwiseConv2d",(function(){return ve.X})),n.d(e,"diag",(function(){return ve.Y})),n.d(e,"dilation2d",(function(){return ve.Z})),n.d(e,"div",(function(){return ve.ab})),n.d(e,"divNoNan",(function(){return ve.bb})),n.d(e,"dot",(function(){return ve.db})),n.d(e,"elu",(function(){return ve.fb})),n.d(e,"equal",(function(){return ve.hb})),n.d(e,"erf",(function(){return ve.jb})),n.d(e,"exp",(function(){return ve.kb})),n.d(e,"expandDims",(function(){return ve.lb})),n.d(e,"expm1",(function(){return ve.mb})),n.d(e,"eye",(function(){return ve.nb})),n.d(e,"fill",(function(){return ve.pb})),n.d(e,"floor",(function(){return ve.qb})),n.d(e,"floorDiv",(function(){return ve.rb})),n.d(e,"gather",(function(){return ve.tb})),n.d(e,"greater",(function(){return ve.vb})),n.d(e,"greaterEqual",(function(){return ve.wb})),n.d(e,"imag",(function(){return ve.Ab})),n.d(e,"isFinite",(function(){return ve.Eb})),n.d(e,"isInf",(function(){return ve.Fb})),n.d(e,"isNaN",(function(){return ve.Gb})),n.d(e,"leakyRelu",(function(){return ve.Hb})),n.d(e,"less",(function(){return ve.Ib})),n.d(e,"lessEqual",(function(){return ve.Jb})),n.d(e,"linspace",(function(){return ve.Nb})),n.d(e,"localResponseNormalization",(function(){return ve.Ob})),n.d(e,"log",(function(){return ve.Pb})),n.d(e,"log1p",(function(){return ve.Qb})),n.d(e,"logSigmoid",(function(){return ve.Rb})),n.d(e,"logSoftmax",(function(){return ve.Sb})),n.d(e,"logSumExp",(function(){return ve.Tb})),n.d(e,"logicalAnd",(function(){return ve.Ub})),n.d(e,"logicalNot",(function(){return ve.Vb})),n.d(e,"logicalOr",(function(){return ve.Wb})),n.d(e,"logicalXor",(function(){return ve.Xb})),n.d(e,"matMul",(function(){return ve.Zb})),n.d(e,"max",(function(){return ve.ac})),n.d(e,"maxPool",(function(){return ve.bc})),n.d(e,"maxPool3d",(function(){return ve.cc})),n.d(e,"maxPoolWithArgmax",(function(){return ve.dc})),n.d(e,"maximum",(function(){return ve.ec})),n.d(e,"mean",(function(){return ve.gc})),n.d(e,"min",(function(){return ve.hc})),n.d(e,"minimum",(function(){return ve.ic})),n.d(e,"mirrorPad",(function(){return ve.kc})),n.d(e,"mod",(function(){return ve.lc})),n.d(e,"moments",(function(){return ve.nc})),n.d(e,"mul",(function(){return ve.pc})),n.d(e,"multiRNNCell",(function(){return ve.rc})),n.d(e,"multinomial",(function(){return ve.sc})),n.d(e,"neg",(function(){return ve.tc})),n.d(e,"notEqual",(function(){return ve.vc})),n.d(e,"oneHot",(function(){return ve.xc})),n.d(e,"ones",(function(){return ve.yc})),n.d(e,"onesLike",(function(){return ve.zc})),n.d(e,"outerProduct",(function(){return ve.Bc})),n.d(e,"pad",(function(){return ve.Cc})),n.d(e,"pad1d",(function(){return ve.Dc})),n.d(e,"pad2d",(function(){return ve.Ec})),n.d(e,"pad3d",(function(){return ve.Fc})),n.d(e,"pad4d",(function(){return ve.Gc})),n.d(e,"pool",(function(){return ve.Hc})),n.d(e,"pow",(function(){return ve.Ic})),n.d(e,"prelu",(function(){return ve.Kc})),n.d(e,"print",(function(){return ve.Lc})),n.d(e,"prod",(function(){return ve.Mc})),n.d(e,"rand",(function(){return ve.Nc})),n.d(e,"randomGamma",(function(){return ve.Oc})),n.d(e,"randomNormal",(function(){return ve.Pc})),n.d(e,"randomUniform",(function(){return ve.Qc})),n.d(e,"range",(function(){return ve.Rc})),n.d(e,"real",(function(){return ve.Sc})),n.d(e,"reciprocal",(function(){return ve.Tc})),n.d(e,"relu",(function(){return ve.Uc})),n.d(e,"relu6",(function(){return ve.Vc})),n.d(e,"reshape",(function(){return ve.Wc})),n.d(e,"reverse",(function(){return ve.Xc})),n.d(e,"reverse1d",(function(){return ve.Yc})),n.d(e,"reverse2d",(function(){return ve.Zc})),n.d(e,"reverse3d",(function(){return ve.ad})),n.d(e,"reverse4d",(function(){return ve.bd})),n.d(e,"round",(function(){return ve.dd})),n.d(e,"rsqrt",(function(){return ve.ed})),n.d(e,"scalar",(function(){return ve.fd})),n.d(e,"selu",(function(){return ve.hd})),n.d(e,"separableConv2d",(function(){return ve.id})),n.d(e,"setdiff1dAsync",(function(){return ve.jd})),n.d(e,"sigmoid",(function(){return ve.kd})),n.d(e,"sign",(function(){return ve.ld})),n.d(e,"sin",(function(){return ve.nd})),n.d(e,"sinh",(function(){return ve.od})),n.d(e,"slice",(function(){return ve.pd})),n.d(e,"slice1d",(function(){return ve.qd})),n.d(e,"slice2d",(function(){return ve.rd})),n.d(e,"slice3d",(function(){return ve.sd})),n.d(e,"slice4d",(function(){return ve.td})),n.d(e,"softmax",(function(){return ve.ud})),n.d(e,"softplus",(function(){return ve.vd})),n.d(e,"spaceToBatchND",(function(){return ve.wd})),n.d(e,"fft",(function(){return ve.ob})),n.d(e,"ifft",(function(){return ve.zb})),n.d(e,"irfft",(function(){return ve.Db})),n.d(e,"rfft",(function(){return ve.cd})),n.d(e,"split",(function(){return ve.zd})),n.d(e,"sqrt",(function(){return ve.Ad})),n.d(e,"square",(function(){return ve.Bd})),n.d(e,"squaredDifference",(function(){return ve.Cd})),n.d(e,"squeeze",(function(){return ve.Ed})),n.d(e,"stack",(function(){return ve.Fd})),n.d(e,"step",(function(){return ve.Gd})),n.d(e,"stridedSlice",(function(){return ve.Hd})),n.d(e,"sub",(function(){return ve.Id})),n.d(e,"sum",(function(){return ve.Kd})),n.d(e,"tan",(function(){return ve.Ld})),n.d(e,"tanh",(function(){return ve.Md})),n.d(e,"tensor",(function(){return ve.Nd})),n.d(e,"tensor1d",(function(){return ve.Od})),n.d(e,"tensor2d",(function(){return ve.Pd})),n.d(e,"tensor3d",(function(){return ve.Qd})),n.d(e,"tensor4d",(function(){return ve.Rd})),n.d(e,"tensor5d",(function(){return ve.Sd})),n.d(e,"tensor6d",(function(){return ve.Td})),n.d(e,"tile",(function(){return ve.Ud})),n.d(e,"topk",(function(){return ve.Vd})),n.d(e,"truncatedNormal",(function(){return ve.Xd})),n.d(e,"unique",(function(){return ve.Yd})),n.d(e,"unsortedSegmentSum",(function(){return ve.Zd})),n.d(e,"unstack",(function(){return ve.ae})),n.d(e,"variable",(function(){return ve.be})),n.d(e,"where",(function(){return ve.ce})),n.d(e,"whereAsync",(function(){return ve.de})),n.d(e,"zeros",(function(){return ve.ee})),n.d(e,"zerosLike",(function(){return ve.fe})),n.d(e,"booleanMaskAsync",(function(){return ve.z})),n.d(e,"equalStrict",(function(){return ve.ib})),n.d(e,"greaterEqualStrict",(function(){return ve.xb})),n.d(e,"greaterStrict",(function(){return ve.yb})),n.d(e,"lessEqualStrict",(function(){return ve.Kb})),n.d(e,"lessStrict",(function(){return ve.Lb})),n.d(e,"notEqualStrict",(function(){return ve.wc})),n.d(e,"addStrict",(function(){return ve.g})),n.d(e,"divStrict",(function(){return ve.cb})),n.d(e,"maximumStrict",(function(){return ve.fc})),n.d(e,"minimumStrict",(function(){return ve.jc})),n.d(e,"modStrict",(function(){return ve.mc})),n.d(e,"mulStrict",(function(){return ve.qc})),n.d(e,"powStrict",(function(){return ve.Jc})),n.d(e,"squaredDifferenceStrict",(function(){return ve.Dd})),n.d(e,"subStrict",(function(){return ve.Jd})),n.d(e,"transpose",(function(){return ve.Wd})),n.d(e,"norm",(function(){return ve.uc})),n.d(e,"movingAverage",(function(){return ve.oc})),n.d(e,"scatterND",(function(){return ve.gd})),n.d(e,"sparseToDense",(function(){return ve.xd})),n.d(e,"gatherND",(function(){return ve.ub})),n.d(e,"dropout",(function(){return ve.eb})),n.d(e,"enclosingPowerOfTwo",(function(){return ve.gb})),n.d(e,"cosineWindow",(function(){return ve.T})),n.d(e,"inTopKAsync",(function(){return ve.Cb})),n.d(e,"op",(function(){return ve.Ac})),n.d(e,"OP_SCOPE_SUFFIX",(function(){return ve.a})),n.d(e,"image",(function(){return ve.Bb})),n.d(e,"linalg",(function(){return ve.Mb})),n.d(e,"losses",(function(){return ve.Yb})),n.d(e,"spectral",(function(){return ve.yd})),n.d(e,"fused",(function(){return ve.sb})),n.d(e,"signal",(function(){return ve.md})),n.d(e,"Reduction",(function(){return we.a})),n.d(e,"train",(function(){return ke})),n.d(e,"enableProdMode",(function(){return Qt.g})),n.d(e,"enableDebugMode",(function(){return Qt.f})),n.d(e,"disableDeprecationWarnings",(function(){return Qt.c})),n.d(e,"deprecationWarn",(function(){return Qt.b})),n.d(e,"disposeVariables",(function(){return Qt.e})),n.d(e,"engine",(function(){return Qt.h})),n.d(e,"memory",(function(){return Qt.m})),n.d(e,"profile",(function(){return Qt.n})),n.d(e,"tidy",(function(){return Qt.t})),n.d(e,"dispose",(function(){return Qt.d})),n.d(e,"keep",(function(){return Qt.l})),n.d(e,"time",(function(){return Qt.u})),n.d(e,"setBackend",(function(){return Qt.r})),n.d(e,"ready",(function(){return Qt.o})),n.d(e,"getBackend",(function(){return Qt.k})),n.d(e,"removeBackend",(function(){return Qt.q})),n.d(e,"findBackend",(function(){return Qt.i})),n.d(e,"findBackendFactory",(function(){return Qt.j})),n.d(e,"registerBackend",(function(){return Qt.p})),n.d(e,"backend",(function(){return Qt.a})),n.d(e,"setPlatform",(function(){return Qt.s})),n.d(e,"getKernel",(function(){return wt.c})),n.d(e,"getGradient",(function(){return wt.b})),n.d(e,"getKernelsForBackend",(function(){return wt.d})),n.d(e,"registerKernel",(function(){return wt.f})),n.d(e,"registerGradient",(function(){return wt.e})),n.d(e,"unregisterKernel",(function(){return wt.h})),n.d(e,"unregisterGradient",(function(){return wt.g})),n.d(e,"copyRegisteredKernels",(function(){return wt.a})),n.d(e,"customGrad",(function(){return oe.a})),n.d(e,"grad",(function(){return oe.b})),n.d(e,"grads",(function(){return oe.c})),n.d(e,"valueAndGrad",(function(){return oe.d})),n.d(e,"valueAndGrads",(function(){return oe.e})),n.d(e,"variableGrads",(function(){return oe.f})),n.d(e,"Environment",(function(){return f.b})),n.d(e,"env",(function(){return f.c})),n.d(e,"ENV",(function(){return f.a})),n.d(e,"version_core",(function(){return Xt})),n.d(e,"nextFrame",(function(){return Ne.a})),n.d(e,"browser",(function(){return o})),n.d(e,"io",(function(){return r})),n.d(e,"math",(function(){return a})),n.d(e,"serialization",(function(){return c})),n.d(e,"test_util",(function(){return Yt})),n.d(e,"util",(function(){return Jt})),n.d(e,"backend_util",(function(){return d})),n.d(e,"tensor_util",(function(){return Kt})),n.d(e,"slice_util",(function(){return i})),n.d(e,"gather_util",(function(){return s})),n.d(e,"scatter_util",(function(){return Tt})),n.d(e,"device_util",(function(){return hn})),n.d(e,"kernel_impls",(function(){return l})),n.d(e,"KernelBackend",(function(){return gn.b})),n.d(e,"DataStorage",(function(){return gn.a})),n.d(e,"Abs",(function(){return vt.a})),n.d(e,"Acos",(function(){return vt.b})),n.d(e,"Acosh",(function(){return vt.c})),n.d(e,"Add",(function(){return vt.d})),n.d(e,"AddN",(function(){return vt.e})),n.d(e,"All",(function(){return vt.f})),n.d(e,"Any",(function(){return vt.g})),n.d(e,"ArgMax",(function(){return vt.h})),n.d(e,"ArgMin",(function(){return vt.i})),n.d(e,"Asin",(function(){return vt.j})),n.d(e,"Asinh",(function(){return vt.k})),n.d(e,"Atan",(function(){return vt.l})),n.d(e,"Atanh",(function(){return vt.n})),n.d(e,"Atan2",(function(){return vt.m})),n.d(e,"AvgPool",(function(){return vt.o})),n.d(e,"AvgPoolGrad",(function(){return vt.r})),n.d(e,"AvgPool3D",(function(){return vt.p})),n.d(e,"AvgPool3DGrad",(function(){return vt.q})),n.d(e,"BatchMatMul",(function(){return vt.s})),n.d(e,"BatchToSpaceND",(function(){return vt.t})),n.d(e,"Bincount",(function(){return vt.u})),n.d(e,"BroadcastTo",(function(){return vt.v})),n.d(e,"Cast",(function(){return vt.w})),n.d(e,"Ceil",(function(){return vt.x})),n.d(e,"ClipByValue",(function(){return vt.y})),n.d(e,"Complex",(function(){return vt.z})),n.d(e,"ComplexAbs",(function(){return vt.A})),n.d(e,"Concat",(function(){return vt.B})),n.d(e,"Conv2D",(function(){return vt.C})),n.d(e,"Conv2DBackpropFilter",(function(){return vt.D})),n.d(e,"Conv2DBackpropInput",(function(){return vt.E})),n.d(e,"Conv3D",(function(){return vt.F})),n.d(e,"Conv3DBackpropFilterV2",(function(){return vt.G})),n.d(e,"Conv3DBackpropInputV2",(function(){return vt.H})),n.d(e,"Cos",(function(){return vt.I})),n.d(e,"Cosh",(function(){return vt.J})),n.d(e,"Cumsum",(function(){return vt.L})),n.d(e,"CropAndResize",(function(){return vt.K})),n.d(e,"DenseBincount",(function(){return vt.M})),n.d(e,"DepthToSpace",(function(){return vt.N})),n.d(e,"DepthwiseConv2dNative",(function(){return vt.O})),n.d(e,"DepthwiseConv2dNativeBackpropFilter",(function(){return vt.P})),n.d(e,"DepthwiseConv2dNativeBackpropInput",(function(){return vt.Q})),n.d(e,"Diag",(function(){return vt.R})),n.d(e,"Dilation2D",(function(){return vt.S})),n.d(e,"Dilation2DBackpropInput",(function(){return vt.U})),n.d(e,"Dilation2DBackpropFilter",(function(){return vt.T})),n.d(e,"RealDiv",(function(){return vt.kc})),n.d(e,"Elu",(function(){return vt.V})),n.d(e,"EluGrad",(function(){return vt.W})),n.d(e,"Erf",(function(){return vt.Y})),n.d(e,"Equal",(function(){return vt.X})),n.d(e,"Exp",(function(){return vt.Z})),n.d(e,"ExpandDims",(function(){return vt.ab})),n.d(e,"Expm1",(function(){return vt.bb})),n.d(e,"FFT",(function(){return vt.cb})),n.d(e,"Fill",(function(){return vt.db})),n.d(e,"FlipLeftRight",(function(){return vt.eb})),n.d(e,"Floor",(function(){return vt.fb})),n.d(e,"FloorDiv",(function(){return vt.gb})),n.d(e,"FusedBatchNorm",(function(){return vt.ib})),n.d(e,"GatherV2",(function(){return vt.mb})),n.d(e,"GatherNd",(function(){return vt.lb})),n.d(e,"Greater",(function(){return vt.nb})),n.d(e,"GreaterEqual",(function(){return vt.ob})),n.d(e,"Identity",(function(){return vt.qb})),n.d(e,"IFFT",(function(){return vt.pb})),n.d(e,"Imag",(function(){return vt.rb})),n.d(e,"IsFinite",(function(){return vt.sb})),n.d(e,"IsInf",(function(){return vt.tb})),n.d(e,"IsNan",(function(){return vt.ub})),n.d(e,"LeakyRelu",(function(){return vt.xb})),n.d(e,"Less",(function(){return vt.yb})),n.d(e,"LessEqual",(function(){return vt.zb})),n.d(e,"LinSpace",(function(){return vt.Ab})),n.d(e,"Log",(function(){return vt.Bb})),n.d(e,"Log1p",(function(){return vt.Cb})),n.d(e,"LogicalAnd",(function(){return vt.Eb})),n.d(e,"LogicalNot",(function(){return vt.Fb})),n.d(e,"LogicalOr",(function(){return vt.Gb})),n.d(e,"LogSoftmax",(function(){return vt.Db})),n.d(e,"LRN",(function(){return vt.vb})),n.d(e,"LRNGrad",(function(){return vt.wb})),n.d(e,"Max",(function(){return vt.Hb})),n.d(e,"Maximum",(function(){return vt.Nb})),n.d(e,"MaxPool",(function(){return vt.Ib})),n.d(e,"MaxPoolGrad",(function(){return vt.Lb})),n.d(e,"MaxPool3D",(function(){return vt.Jb})),n.d(e,"MaxPool3DGrad",(function(){return vt.Kb})),n.d(e,"MaxPoolWithArgmax",(function(){return vt.Mb})),n.d(e,"Mean",(function(){return vt.Ob})),n.d(e,"Min",(function(){return vt.Pb})),n.d(e,"Minimum",(function(){return vt.Qb})),n.d(e,"MirrorPad",(function(){return vt.Rb})),n.d(e,"Mod",(function(){return vt.Sb})),n.d(e,"Multinomial",(function(){return vt.Tb})),n.d(e,"Multiply",(function(){return vt.Ub})),n.d(e,"Neg",(function(){return vt.Vb})),n.d(e,"NotEqual",(function(){return vt.Zb})),n.d(e,"NonMaxSuppressionV3",(function(){return vt.Wb})),n.d(e,"NonMaxSuppressionV4",(function(){return vt.Xb})),n.d(e,"NonMaxSuppressionV5",(function(){return vt.Yb})),n.d(e,"OnesLike",(function(){return vt.bc})),n.d(e,"OneHot",(function(){return vt.ac})),n.d(e,"Pack",(function(){return vt.cc})),n.d(e,"PadV2",(function(){return vt.dc})),n.d(e,"Pool",(function(){return vt.ec})),n.d(e,"Pow",(function(){return vt.fc})),n.d(e,"Prelu",(function(){return vt.gc})),n.d(e,"Prod",(function(){return vt.hc})),n.d(e,"Range",(function(){return vt.ic})),n.d(e,"Real",(function(){return vt.jc})),n.d(e,"Reciprocal",(function(){return vt.lc})),n.d(e,"Relu",(function(){return vt.mc})),n.d(e,"Reshape",(function(){return vt.oc})),n.d(e,"ResizeNearestNeighbor",(function(){return vt.rc})),n.d(e,"ResizeNearestNeighborGrad",(function(){return vt.sc})),n.d(e,"ResizeBilinear",(function(){return vt.pc})),n.d(e,"ResizeBilinearGrad",(function(){return vt.qc})),n.d(e,"Relu6",(function(){return vt.nc})),n.d(e,"Reverse",(function(){return vt.tc})),n.d(e,"Round",(function(){return vt.vc})),n.d(e,"Rsqrt",(function(){return vt.wc})),n.d(e,"ScatterNd",(function(){return vt.xc})),n.d(e,"Select",(function(){return vt.yc})),n.d(e,"Selu",(function(){return vt.zc})),n.d(e,"Slice",(function(){return vt.Ec})),n.d(e,"Sin",(function(){return vt.Cc})),n.d(e,"Sinh",(function(){return vt.Dc})),n.d(e,"Sign",(function(){return vt.Bc})),n.d(e,"Sigmoid",(function(){return vt.Ac})),n.d(e,"Softplus",(function(){return vt.Gc})),n.d(e,"Sqrt",(function(){return vt.Kc})),n.d(e,"Sum",(function(){return vt.Qc})),n.d(e,"SpaceToBatchND",(function(){return vt.Hc})),n.d(e,"SplitV",(function(){return vt.Jc})),n.d(e,"Softmax",(function(){return vt.Fc})),n.d(e,"SquaredDifference",(function(){return vt.Mc})),n.d(e,"Square",(function(){return vt.Lc})),n.d(e,"Sub",(function(){return vt.Pc})),n.d(e,"SparseToDense",(function(){return vt.Ic})),n.d(e,"StridedSlice",(function(){return vt.Oc})),n.d(e,"Tan",(function(){return vt.Rc})),n.d(e,"Tanh",(function(){return vt.Sc})),n.d(e,"Tile",(function(){return vt.Tc})),n.d(e,"TopK",(function(){return vt.Uc})),n.d(e,"Transpose",(function(){return vt.Vc})),n.d(e,"Unique",(function(){return vt.Wc})),n.d(e,"Unpack",(function(){return vt.Xc})),n.d(e,"UnsortedSegmentSum",(function(){return vt.Yc})),n.d(e,"ZerosLike",(function(){return vt.Zc})),n.d(e,"Step",(function(){return vt.Nc})),n.d(e,"FromPixels",(function(){return vt.hb})),n.d(e,"RotateWithOffset",(function(){return vt.uc})),n.d(e,"_FusedMatMul",(function(){return vt.ad})),n.d(e,"FusedConv2D",(function(){return vt.jb})),n.d(e,"FusedDepthwiseConv2D",(function(){return vt.kb}));var r={};n.r(r),n.d(r,"copyModel",(function(){return V})),n.d(r,"listModels",(function(){return L})),n.d(r,"moveModel",(function(){return q})),n.d(r,"removeModel",(function(){return z})),n.d(r,"browserFiles",(function(){return tt})),n.d(r,"browserHTTPRequest",(function(){return dt})),n.d(r,"concatenateArrayBuffers",(function(){return h.d})),n.d(r,"decodeWeights",(function(){return h.e})),n.d(r,"encodeWeights",(function(){return h.f})),n.d(r,"fromMemory",(function(){return ft})),n.d(r,"getLoadHandlers",(function(){return O})),n.d(r,"getModelArtifactsInfoForJSON",(function(){return h.g})),n.d(r,"getSaveHandlers",(function(){return y})),n.d(r,"http",(function(){return ut})),n.d(r,"isHTTPScheme",(function(){return it})),n.d(r,"loadWeights",(function(){return at})),n.d(r,"registerLoadRouter",(function(){return g})),n.d(r,"registerSaveRouter",(function(){return m})),n.d(r,"weightsLoaderFactory",(function(){return ot})),n.d(r,"withSaveHandler",(function(){return ht}));var a={};n.r(a),n.d(a,"confusionMatrix",(function(){return jt}));var o={};n.r(o),n.d(o,"toPixels",(function(){return Nt})),n.d(o,"fromPixels",(function(){return St}));var s={};n.r(s),n.d(s,"prepareAndValidate",(function(){return Et}));var i={};n.r(i),n.d(i,"assertParamsValid",(function(){return It})),n.d(i,"maskToAxes",(function(){return At})),n.d(i,"computeOutShape",(function(){return _t})),n.d(i,"stridesWithElidedDims",(function(){return Dt})),n.d(i,"getNormalizedAxes",(function(){return $t})),n.d(i,"startIndicesWithElidedDims",(function(){return Rt})),n.d(i,"stopIndicesWithElidedDims",(function(){return Pt})),n.d(i,"stridesForAxis",(function(){return Ct})),n.d(i,"startForAxis",(function(){return Bt})),n.d(i,"stopForAxis",(function(){return Lt})),n.d(i,"isSliceContinous",(function(){return zt})),n.d(i,"computeFlatOffset",(function(){return Vt})),n.d(i,"parseSliceParams",(function(){return qt})),n.d(i,"sliceInfo",(function(){return Ut}));var c={};n.r(c),n.d(c,"Serializable",(function(){return Ht})),n.d(c,"SerializationMap",(function(){return Wt})),n.d(c,"registerClass",(function(){return Gt}));var u={};n.r(u),n.d(u,"segOpComputeOptimalWindowSize",(function(){return sn})),n.d(u,"computeOutShape",(function(){return cn})),n.d(u,"collectGatherOpShapeInfo",(function(){return un}));var d={};n.r(d),n.d(d,"axesAreInnerMostDims",(function(){return Ee.b})),n.d(d,"combineLocations",(function(){return Ee.c})),n.d(d,"computeOutAndReduceShapes",(function(){return Ee.d})),n.d(d,"expandShapeToKeepDim",(function(){return Ee.e})),n.d(d,"assertAxesAreInnerMostDims",(function(){return Ee.a})),n.d(d,"getAxesPermutation",(function(){return Ee.f})),n.d(d,"getUndoAxesPermutation",(function(){return Ee.h})),n.d(d,"getInnerMostAxes",(function(){return Ee.g})),n.d(d,"getBroadcastDims",(function(){return Te.b})),n.d(d,"getReductionAxes",(function(){return Te.c})),n.d(d,"assertAndGetBroadcastShape",(function(){return Te.a})),n.d(d,"assertParamsConsistent",(function(){return Ie})),n.d(d,"computeOutShape",(function(){return Ae})),n.d(d,"computeDilation2DInfo",(function(){return _e.d})),n.d(d,"computePool2DInfo",(function(){return _e.e})),n.d(d,"computePool3DInfo",(function(){return _e.f})),n.d(d,"computeConv2DInfo",(function(){return _e.a})),n.d(d,"computeConv3DInfo",(function(){return _e.b})),n.d(d,"computeDefaultPad",(function(){return _e.c})),n.d(d,"tupleValuesAreOne",(function(){return _e.i})),n.d(d,"eitherStridesOrDilationsAreOne",(function(){return _e.h})),n.d(d,"convertConv2DDataFormat",(function(){return _e.g})),n.d(d,"getFusedDyActivation",(function(){return De.c})),n.d(d,"getFusedBiasGradient",(function(){return De.b})),n.d(d,"applyActivation",(function(){return De.a})),n.d(d,"shouldFuse",(function(){return De.d})),n.d(d,"PARALLELIZE_THRESHOLD",(function(){return Me})),n.d(d,"computeOptimalWindowSize",(function(){return Fe})),n.d(d,"slice_util",(function(){return i})),n.d(d,"upcastType",(function(){return je.c})),n.d(d,"getImageCenter",(function(){return $e})),n.d(d,"getReshaped",(function(){return Re})),n.d(d,"getPermuted",(function(){return Pe})),n.d(d,"getReshapedPermuted",(function(){return Ce})),n.d(d,"getSliceBeginCoords",(function(){return Be})),n.d(d,"getSliceSize",(function(){return Le})),n.d(d,"prepareAndValidate",(function(){return Et})),n.d(d,"validateUpdateShape",(function(){return Tt.validateUpdateShape})),n.d(d,"validateInput",(function(){return Tt.validateInput})),n.d(d,"calculateShapes",(function(){return Tt.calculateShapes})),n.d(d,"SELU_SCALEALPHA",(function(){return ze})),n.d(d,"SELU_SCALE",(function(){return Ve})),n.d(d,"ERF_P",(function(){return qe})),n.d(d,"ERF_A1",(function(){return Ue})),n.d(d,"ERF_A2",(function(){return He})),n.d(d,"ERF_A3",(function(){return We})),n.d(d,"ERF_A4",(function(){return Ge})),n.d(d,"ERF_A5",(function(){return Ke})),n.d(d,"warn",(function(){return Ye})),n.d(d,"log",(function(){return Je})),n.d(d,"mergeRealAndImagArrays",(function(){return Xe})),n.d(d,"splitRealAndImagArrays",(function(){return Qe})),n.d(d,"complexWithEvenIndex",(function(){return Ze})),n.d(d,"complexWithOddIndex",(function(){return tn})),n.d(d,"getComplexWithIndex",(function(){return en})),n.d(d,"assignToTypedArray",(function(){return nn})),n.d(d,"exponents",(function(){return rn})),n.d(d,"exponent",(function(){return an})),n.d(d,"prepareSplitSize",(function(){return on})),n.d(d,"segment_util",(function(){return u})),n.d(d,"castTensor",(function(){return dn})),n.d(d,"reshapeTensor",(function(){return ln})),n.d(d,"fromUint8ToStringArray",(function(){return pn})),n.d(d,"fromStringArrayToUint8",(function(){return fn}));var l={};n.r(l),n.d(l,"nonMaxSuppressionV3Impl",(function(){return bn.a})),n.d(l,"nonMaxSuppressionV4Impl",(function(){return bn.b})),n.d(l,"nonMaxSuppressionV5Impl",(function(){return bn.c})),n.d(l,"whereImpl",(function(){return mn.a}));var p=n(4),f=(n(118),n(22)),h=n(34);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class b{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return null==b.instance&&(b.instance=new b),b.instance}static registerSaveRouter(t){b.getInstance().saveRouters.push(t)}static registerLoadRouter(t){b.getInstance().loadRouters.push(t)}static getSaveHandlers(t){return b.getHandlers(t,"save")}static getLoadHandlers(t,e){return b.getHandlers(t,"load",e)}static getHandlers(t,e,n){const r=[];return("load"===e?b.getInstance().loadRouters:b.getInstance().saveRouters).forEach(e=>{const a=e(t,n);null!==a&&r.push(a)}),r}}const m=t=>b.registerSaveRouter(t),g=t=>b.registerLoadRouter(t),y=t=>b.getSaveHandlers(t),O=(t,e)=>b.getLoadHandlers(t,e)
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */;function j(){if(!Object(f.c)().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");const t="undefined"==typeof window?self:window,e=t.indexedDB||t.mozIndexedDB||t.webkitIndexedDB||t.msIndexedDB||t.shimIndexedDB;if(null==e)throw new Error("The current browser does not appear to support IndexedDB.");return e}function v(t){const e=t.result;e.createObjectStore("models_store",{keyPath:"modelPath"}),e.createObjectStore("model_info_store",{keyPath:"modelPath"})}class w{constructor(t){if(this.indexedDB=j(),null==t||!t)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=t}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return this.databaseAction(this.modelPath,t)}async load(){return this.databaseAction(this.modelPath)}databaseAction(t,e){return new Promise((t,n)=>{const r=this.indexedDB.open("tensorflowjs",1);r.onupgradeneeded=()=>v(r),r.onsuccess=()=>{const a=r.result;if(null==e){const e=a.transaction("models_store","readonly"),r=e.objectStore("models_store").get(this.modelPath);r.onsuccess=()=>{if(null==r.result)return a.close(),n(new Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));t(r.result.modelArtifacts)},r.onerror=t=>(a.close(),n(r.error)),e.oncomplete=()=>a.close()}else{const r=Object(h.g)(e),o=a.transaction("model_info_store","readwrite");let s=o.objectStore("model_info_store");const i=s.put({modelPath:this.modelPath,modelArtifactsInfo:r});let c;i.onsuccess=()=>{c=a.transaction("models_store","readwrite");const i=c.objectStore("models_store").put({modelPath:this.modelPath,modelArtifacts:e,modelArtifactsInfo:r});i.onsuccess=()=>t({modelArtifactsInfo:r}),i.onerror=t=>{s=o.objectStore("model_info_store");const e=s.delete(this.modelPath);e.onsuccess=()=>(a.close(),n(i.error)),e.onerror=t=>(a.close(),n(i.error))}},i.onerror=t=>(a.close(),n(i.error)),o.oncomplete=()=>{null==c?a.close():c.oncomplete=()=>a.close()}}},r.onerror=t=>n(r.error)})}}w.URL_SCHEME="indexeddb://";const x=t=>{return Object(f.c)().getBool("IS_BROWSER")&&!Array.isArray(t)&&t.startsWith(w.URL_SCHEME)?(e=t.slice(w.URL_SCHEME.length),new w(e)):null;var e};b.registerSaveRouter(x),b.registerLoadRouter(x);class k{constructor(){this.indexedDB=j()}async listModels(){return new Promise((t,e)=>{const n=this.indexedDB.open("tensorflowjs",1);n.onupgradeneeded=()=>v(n),n.onsuccess=()=>{const r=n.result,a=r.transaction("model_info_store","readonly"),o=a.objectStore("model_info_store").getAll();o.onsuccess=()=>{const e={};for(const t of o.result)e[t.modelPath]=t.modelArtifactsInfo;t(e)},o.onerror=t=>(r.close(),e(o.error)),a.oncomplete=()=>r.close()},n.onerror=t=>e(n.error)})}async removeModel(t){var e;return t=(e=t).startsWith(w.URL_SCHEME)?e.slice(w.URL_SCHEME.length):e,new Promise((e,n)=>{const r=this.indexedDB.open("tensorflowjs",1);r.onupgradeneeded=()=>v(r),r.onsuccess=()=>{const a=r.result,o=a.transaction("model_info_store","readwrite"),s=o.objectStore("model_info_store"),i=s.get(t);let c;i.onsuccess=()=>{if(null==i.result)return a.close(),n(new Error(`Cannot find model with path '${t}' in IndexedDB.`));{const r=s.delete(t),o=()=>{c=a.transaction("models_store","readwrite");const r=c.objectStore("models_store").delete(t);r.onsuccess=()=>e(i.result.modelArtifactsInfo),r.onerror=t=>n(i.error)};r.onsuccess=o,r.onerror=t=>(o(),a.close(),n(i.error))}},i.onerror=t=>(a.close(),n(i.error)),o.oncomplete=()=>{null==c?a.close():c.oncomplete=()=>a.close()}},r.onerror=t=>n(r.error)})}}var N=n(7);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const S="tensorflowjs_models",E="info",T="model_topology",I="weight_specs",A="weight_data",_="model_metadata";function D(t){return{info:[S,t,E].join("/"),topology:[S,t,T].join("/"),weightSpecs:[S,t,I].join("/"),weightData:[S,t,A].join("/"),modelMetadata:[S,t,_].join("/")}}function M(t){const e=t.split("/");if(e.length<3)throw new Error("Invalid key format: "+t);return e.slice(1,e.length-1).join("/")}class F{constructor(t){if(!Object(f.c)().getBool("IS_BROWSER")||"undefined"==typeof window||void 0===window.localStorage)throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,null==t||!t)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=t,this.keys=D(this.modelPath)}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");{const e=JSON.stringify(t.modelTopology),n=JSON.stringify(t.weightSpecs),r=Object(h.g)(t);try{this.LS.setItem(this.keys.info,JSON.stringify(r)),this.LS.setItem(this.keys.topology,e),this.LS.setItem(this.keys.weightSpecs,n),this.LS.setItem(this.keys.weightData,Object(h.a)(t.weightData));const a={format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy};return null!=t.signature&&(a.signature=t.signature),null!=t.userDefinedMetadata&&(a.userDefinedMetadata=t.userDefinedMetadata),null!=t.modelInitializer&&(a.modelInitializer=t.modelInitializer),this.LS.setItem(this.keys.modelMetadata,JSON.stringify(a)),{modelArtifactsInfo:r}}catch(t){throw this.LS.removeItem(this.keys.info),this.LS.removeItem(this.keys.topology),this.LS.removeItem(this.keys.weightSpecs),this.LS.removeItem(this.keys.weightData),this.LS.removeItem(this.keys.modelMetadata),new Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${r.modelTopologyBytes}, weightSpecsBytes=${r.weightSpecsBytes}, weightDataBytes=${r.weightDataBytes}.`)}}}async load(){const t=JSON.parse(this.LS.getItem(this.keys.info));if(null==t)throw new Error(`In local storage, there is no model with name '${this.modelPath}'`);if("JSON"!==t.modelTopologyType)throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");const e={},n=JSON.parse(this.LS.getItem(this.keys.topology));if(null==n)throw new Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);e.modelTopology=n;const r=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(null==r)throw new Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);e.weightSpecs=r;const a=this.LS.getItem(this.keys.modelMetadata);if(null!=a){const t=JSON.parse(a);e.format=t.format,e.generatedBy=t.generatedBy,e.convertedBy=t.convertedBy,null!=t.signature&&(e.signature=t.signature),null!=t.userDefinedMetadata&&(e.userDefinedMetadata=t.userDefinedMetadata),null!=t.modelInitializer&&(e.modelInitializer=t.modelInitializer)}const o=this.LS.getItem(this.keys.weightData);if(null==o)throw new Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return e.weightData=Object(h.b)(o),e}}F.URL_SCHEME="localstorage://";const $=t=>{return Object(f.c)().getBool("IS_BROWSER")&&!Array.isArray(t)&&t.startsWith(F.URL_SCHEME)?(e=t.slice(F.URL_SCHEME.length),new F(e)):null;var e};b.registerSaveRouter($),b.registerLoadRouter($);class R{constructor(){Object(N.b)(Object(f.c)().getBool("IS_BROWSER"),()=>"Current environment is not a web browser"),Object(N.b)("undefined"==typeof window||void 0!==window.localStorage,()=>"Current browser does not appear to support localStorage"),this.LS=window.localStorage}async listModels(){const t={},e=S+"/",n="/"+E;for(let r=0;r<this.LS.length;++r){const a=this.LS.key(r);if(a.startsWith(e)&&a.endsWith(n)){t[M(a)]=JSON.parse(this.LS.getItem(a))}}return t}async removeModel(t){var e;const n=D(t=(e=t).startsWith(F.URL_SCHEME)?e.slice(F.URL_SCHEME.length):e);if(null==this.LS.getItem(n.info))throw new Error(`Cannot find model at path '${t}'`);const r=JSON.parse(this.LS.getItem(n.info));return this.LS.removeItem(n.info),this.LS.removeItem(n.topology),this.LS.removeItem(n.weightSpecs),this.LS.removeItem(n.weightData),r}}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class P{constructor(){this.managers={}}static getInstance(){return null==P.instance&&(P.instance=new P),P.instance}static registerManager(t,e){Object(N.b)(null!=t,()=>"scheme must not be undefined or null."),t.endsWith("://")&&(t=t.slice(0,t.indexOf("://"))),Object(N.b)(t.length>0,()=>"scheme must not be an empty string.");const n=P.getInstance();Object(N.b)(null==n.managers[t],()=>`A model store manager is already registered for scheme '${t}'.`),n.managers[t]=e}static getManager(t){const e=this.getInstance().managers[t];if(null==e)throw new Error(`Cannot find model manager for scheme '${t}'`);return e}static getSchemes(){return Object.keys(this.getInstance().managers)}}function C(t){if(-1===t.indexOf("://"))throw new Error("The url string provided does not contain a scheme. Supported schemes are: "+P.getSchemes().join(","));return{scheme:t.split("://")[0],path:t.split("://")[1]}}async function B(t,e,n=!1){Object(N.b)(t!==e,()=>`Old path and new path are the same: '${t}'`);const r=b.getLoadHandlers(t);Object(N.b)(r.length>0,()=>`Copying failed because no load handler is found for source URL ${t}.`),Object(N.b)(r.length<2,()=>`Copying failed because more than one (${r.length}) load handlers for source URL ${t}.`);const a=r[0],o=b.getSaveHandlers(e);Object(N.b)(o.length>0,()=>`Copying failed because no save handler is found for destination URL ${e}.`),Object(N.b)(o.length<2,()=>`Copying failed because more than one (${r.length}) save handlers for destination URL ${e}.`);const s=o[0],i=C(t).scheme,c=C(t).path,u=i===C(t).scheme,d=await a.load();n&&u&&await P.getManager(i).removeModel(c);const l=await s.save(d);return n&&!u&&await P.getManager(i).removeModel(c),l.modelArtifactsInfo}async function L(){const t=P.getSchemes(),e={};for(const n of t){const t=await P.getManager(n).listModels();for(const r in t){e[n+"://"+r]=t[r]}}return e}async function z(t){const e=C(t);return P.getManager(e.scheme).removeModel(e.path)}async function V(t,e){return B(t,e,!1)}async function q(t,e){return B(t,e,!0)}
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class U{fetch(t,e){return fetch(t,e)}now(){return performance.now()}encode(t,e){if("utf-8"!==e&&"utf8"!==e)throw new Error("Browser's encoder only supports utf-8, but got "+e);return null==this.textEncoder&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(t)}decode(t,e){return new TextDecoder(e).decode(t)}}if(Object(f.c)().get("IS_BROWSER")){Object(f.c)().setPlatform("browser",new U);try{P.registerManager(F.URL_SCHEME,new R)}catch(t){}try{P.registerManager(w.URL_SCHEME,new k)}catch(t){}}n(226);var H=n(39),W=n(11),G=n(56),K=n(127),Y=n(5);
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Object(p.b)();const J={buffer:H.a,cast:W.a,clone:G.a,print:K.a};Object(Y.e)(J);function X(t){return new Promise(t=>setTimeout(t)).then(t)}class Q{constructor(t){if(!Object(f.c)().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");t.startsWith(Q.URL_SCHEME)&&(t=t.slice(Q.URL_SCHEME.length)),null!=t&&0!==t.length||(t="model"),this.modelTopologyFileName=t+".json",this.weightDataFileName=t+".weights.bin"}async save(t){if("undefined"==typeof document)throw new Error("Browser downloads are not supported in this environment since `document` is not present");const e=window.URL.createObjectURL(new Blob([t.weightData],{type:"application/octet-stream"}));if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");{const n=[{paths:["./"+this.weightDataFileName],weights:t.weightSpecs}],r={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,weightsManifest:n};null!=t.signature&&(r.signature=t.signature),null!=t.userDefinedMetadata&&(r.userDefinedMetadata=t.userDefinedMetadata),null!=t.modelInitializer&&(r.modelInitializer=t.modelInitializer);const a=window.URL.createObjectURL(new Blob([JSON.stringify(r)],{type:"application/json"})),o=null==this.jsonAnchor?document.createElement("a"):this.jsonAnchor;if(o.download=this.modelTopologyFileName,o.href=a,await X(()=>o.dispatchEvent(new MouseEvent("click"))),null!=t.weightData){const t=null==this.weightDataAnchor?document.createElement("a"):this.weightDataAnchor;t.download=this.weightDataFileName,t.href=e,await X(()=>t.dispatchEvent(new MouseEvent("click")))}return{modelArtifactsInfo:Object(h.g)(t)}}}}Q.URL_SCHEME="downloads://";class Z{constructor(t){if(null==t||t.length<1)throw new Error("When calling browserFiles, at least 1 file is required, but received "+t);this.files=t}async load(){const t=this.files[0],e=this.files.slice(1);return new Promise((n,r)=>{const a=new FileReader;a.onload=a=>{const o=JSON.parse(a.target.result),s=o.modelTopology;if(null==s)return void r(new Error("modelTopology field is missing from file "+t.name));0===e.length&&n({modelTopology:s});const i=o.weightsManifest;if(null==i)return void r(new Error("weightManifest field is missing from file "+t.name));let c;try{c=this.checkManifestAndWeightFiles(i,e)}catch(t){return void r(t)}const u=[],d=[],l=[];i.forEach(t=>{t.paths.forEach(t=>{d.push(t),l.push(null)}),u.push(...t.weights)}),i.forEach(t=>{t.paths.forEach(t=>{const e=new FileReader;e.onload=e=>{const r=e.target.result,a=d.indexOf(t);if(l[a]=r,-1===l.indexOf(null)){const t={modelTopology:s,weightSpecs:u,weightData:Object(h.d)(l),format:o.format,generatedBy:o.generatedBy,convertedBy:o.convertedBy};null!=o.signature&&(t.signature=o.signature),null!=o.userDefinedMetadata&&(t.userDefinedMetadata=o.userDefinedMetadata),null!=o.modelInitializer&&(t.modelInitializer=o.modelInitializer),n(t)}},e.onerror=e=>r(`Failed to weights data from file of path '${t}'.`),e.readAsArrayBuffer(c[t])})})},a.onerror=e=>r(`Failed to read model topology and weights manifest JSON from file '${t.name}'. BrowserFiles supports loading Keras-style tf.Model artifacts only.`),a.readAsText(t)})}checkManifestAndWeightFiles(t,e){const n=[],r=e.map(t=>Object(h.c)(t.name)),a={};for(const o of t)o.paths.forEach(t=>{const o=Object(h.c)(t);if(-1!==n.indexOf(o))throw new Error(`Duplicate file basename found in weights manifest: '${o}'`);if(n.push(o),-1===r.indexOf(o))throw new Error(`Weight file with basename '${o}' is not provided.`);a[t]=e[r.indexOf(o)]});if(n.length!==e.length)throw new Error(`Mismatch in the number of files in weights manifest (${n.length}) and the number of weight files provided (${e.length}).`);return a}}function tt(t){return new Z(t)}
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function et(t,e,n,r){!function(t){Object(N.b)(null!=t&&Array.isArray(t)&&t.length>0,()=>"promises must be a none empty array")}(t),function(t,e){Object(N.b)(t>=0&&t<=1,()=>"Progress fraction must be in range [0, 1], but got startFraction "+t),Object(N.b)(e>=0&&e<=1,()=>"Progress fraction must be in range [0, 1], but got endFraction "+e),Object(N.b)(e>=t,()=>`startFraction must be no more than endFraction, but got startFraction ${t} and endFraction `+e)}(n=null==n?0:n,r=null==r?1:r);let a=0;return Promise.all(t.map(o=>(o.then(o=>{const s=n+ ++a/t.length*(r-n);return e(s),o}),o)))}b.registerSaveRouter(t=>Object(f.c)().getBool("IS_BROWSER")&&!Array.isArray(t)&&t.startsWith(Q.URL_SCHEME)?function(t="model"){return new Q(t)}(t.slice(Q.URL_SCHEME.length)):null);var nt=n(123);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function rt(t,e){null==e&&(e={});const n=null==e.fetchFunc?Object(f.c)().platform.fetch:e.fetchFunc,r=t.map(t=>n(t,e.requestInit,{isBinary:!0})),a=(null==e.onProgress?await Promise.all(r):await et(r,e.onProgress,0,.5)).map(t=>t.arrayBuffer());return null==e.onProgress?await Promise.all(a):await et(a,e.onProgress,.5,1)}async function at(t,e="",n,r){return ot(t=>rt(t,{requestInit:r}))(t,e,n)}function ot(t){return async(e,n="",r)=>{const a=e.map(()=>!1),o={},s=null!=r?r.map(()=>!1):[],i=[];if(e.forEach((t,e)=>{let n=0;t.weights.forEach(t=>{const c="quantization"in t?t.quantization.dtype:t.dtype,u=nt.a[c]*N.N(t.shape),d=()=>{a[e]=!0,null==o[e]&&(o[e]=[]),o[e].push({manifestEntry:t,groupOffset:n,sizeBytes:u})};null!=r?r.forEach((e,n)=>{e===t.name&&(d(),s[n]=!0)}):d(),i.push(t.name),n+=u})}),!s.every(t=>t)){const t=r.filter((t,e)=>!s[e]);throw new Error("Could not find weights in manifest with names: "+t.join(", ")+". \nManifest JSON has weights with names: "+i.join(", ")+".")}const c=a.reduce((t,e,n)=>(e&&t.push(n),t),[]),u=[];c.forEach(t=>{e[t].paths.forEach(t=>{const e=n+(n.endsWith("/")?"":"/")+t;u.push(e)})});const d=await t(u),l={};let p=0;return c.forEach(t=>{const n=e[t].paths.length;let r=0;for(let t=0;t<n;t++)r+=d[p+t].byteLength;const a=new ArrayBuffer(r),s=new Uint8Array(a);let i=0;for(let t=0;t<n;t++){const e=new Uint8Array(d[p+t]);s.set(e,i),i+=e.byteLength}o[t].forEach(t=>{const e=a.slice(t.groupOffset,t.groupOffset+t.sizeBytes),n=Object(h.e)(e,[t.manifestEntry]);for(const t in n)l[t]=n[t]}),p+=n}),l}}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class st{constructor(t,e){if(this.DEFAULT_METHOD="POST",null==e&&(e={}),this.weightPathPrefix=e.weightPathPrefix,this.onProgress=e.onProgress,this.weightUrlConverter=e.weightUrlConverter,null!=e.fetchFunc?(Object(N.b)("function"==typeof e.fetchFunc,()=>"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"),this.fetch=e.fetchFunc):this.fetch=Object(f.c)().platform.fetch,Object(N.b)(null!=t&&t.length>0,()=>"URL path for http must not be null, undefined or empty."),Array.isArray(t)&&Object(N.b)(2===t.length,()=>`URL paths for http must have a length of 2, (actual length is ${t.length}).`),this.path=t,null!=e.requestInit&&null!=e.requestInit.body)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=e.requestInit||{}}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");const e=Object.assign({method:this.DEFAULT_METHOD},this.requestInit);e.body=new FormData;const n=[{paths:["./model.weights.bin"],weights:t.weightSpecs}],r={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,weightsManifest:n};null!=t.signature&&(r.signature=t.signature),null!=t.userDefinedMetadata&&(r.userDefinedMetadata=t.userDefinedMetadata),null!=t.modelInitializer&&(r.modelInitializer=t.modelInitializer),e.body.append("model.json",new Blob([JSON.stringify(r)],{type:"application/json"}),"model.json"),null!=t.weightData&&e.body.append("model.weights.bin",new Blob([t.weightData],{type:"application/octet-stream"}),"model.weights.bin");const a=await this.fetch(this.path,e);if(a.ok)return{modelArtifactsInfo:Object(h.g)(t),responses:[a]};throw new Error("BrowserHTTPRequest.save() failed due to HTTP response status "+a.status+".")}async load(){const t=await this.fetch(this.path,this.requestInit);if(!t.ok)throw new Error(`Request to ${this.path} failed with status code `+t.status+". Please verify this URL points to the model JSON of the model to load.");let e;try{e=await t.json()}catch(t){let e=`Failed to parse model JSON of response from ${this.path}.`;throw this.path.endsWith(".pb")?e+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":e+=" Please make sure the server is serving valid JSON for this request.",new Error(e)}const n=e.modelTopology,r=e.weightsManifest,a=e.generatedBy,o=e.convertedBy,s=e.format,i=e.signature,c=e.userDefinedMetadata;if(null==n&&null==r)throw new Error(`The JSON from HTTP path ${this.path} contains neither model topology or manifest for weights.`);let u,d;if(null!=r){const t=await this.loadWeights(r);[u,d]=t}const l={modelTopology:n,weightSpecs:u,weightData:d,generatedBy:a,convertedBy:o,format:s};null!=i&&(l.signature=i),null!=c&&(l.userDefinedMetadata=c);const p=e.modelInitializer;return p&&(l.modelInitializer=p),l}async loadWeights(t){const e=Array.isArray(this.path)?this.path[1]:this.path,[n,r]=function(t){const e=t.lastIndexOf("/"),n=t.lastIndexOf("?"),r=t.substring(0,e),a=n>e?t.substring(n):"";return[r+"/",a]}(e),a=this.weightPathPrefix||n,o=[];for(const e of t)o.push(...e.weights);const s=[],i=[];for(const e of t)for(const t of e.paths)null!=this.weightUrlConverter?i.push(this.weightUrlConverter(t)):s.push(a+t+r);this.weightUrlConverter&&s.push(...await Promise.all(i));const c=await rt(s,{requestInit:this.requestInit,fetchFunc:this.fetch,onProgress:this.onProgress});return[o,Object(h.d)(c)]}}function it(t){return null!=t.match(st.URL_SCHEME_REGEX)}st.URL_SCHEME_REGEX=/^https?:\/\//;const ct=(t,e)=>{if("undefined"==typeof fetch&&(null==e||null==e.fetchFunc))return null;{let n=!0;if(n=Array.isArray(t)?t.every(t=>it(t)):it(t),n)return ut(t,e)}return null};function ut(t,e){return new st(t,e)}function dt(t,e){return ut(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */b.registerSaveRouter(ct),b.registerLoadRouter(ct);class lt{constructor(t){this.modelArtifacts=t}async load(){return this.modelArtifacts}}class pt{constructor(t){this.saveHandler=t}async save(t){return this.saveHandler(t)}}function ft(t,e,n,r){if(1===arguments.length){return null!=t.modelTopology||null!=t.weightSpecs?new lt(t):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new lt({modelTopology:t}))}return console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new lt({modelTopology:t,weightSpecs:e,weightData:n,trainingConfig:r})}function ht(t){return new pt(t)}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var bt=n(0),mt=n(25),gt=n(90),yt=n(3),Ot=n(43);const jt=Object(yt.b)({confusionMatrix_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e,n){const r=Object(bt.a)(t,"labels","confusionMatrix"),a=Object(bt.a)(e,"predictions","confusionMatrix");N.b(null==n||n>0&&Number.isInteger(n),()=>"If provided, numClasses must be a positive integer, but got "+n),N.b(1===r.rank,()=>"Expected the rank of labels to be 1, but got "+r.rank),N.b(1===a.rank,()=>"Expected the rank of predictions to be 1, but got "+a.rank),N.b(r.shape[0]===a.shape[0],()=>`Mismatch in the number of examples: ${r.shape[0]} vs. ${a.shape[0]}. Labels and predictions should have the same number of elements.`),N.b(n>0&&Number.isInteger(n),()=>"numClasses is required to be a positive integer, but got "+n);const o=Object(gt.a)(Object(W.a)(r,"int32"),n),s=Object(gt.a)(Object(W.a)(a,"int32"),n),i=Object(Ot.a)(o),c=Object(mt.a)(i,s);return Object(W.a)(c,"int32")}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var vt=n(1),wt=n(58),xt=n(154);
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
let kt;async function Nt(t,e){let n=Object(bt.a)(t,"img","toPixels");if(!(t instanceof Y.a)){const t=n;n=Object(W.a)(t,"int32"),t.dispose()}if(2!==n.rank&&3!==n.rank)throw new Error(`toPixels only supports rank 2 or 3 tensors, got rank ${n.rank}.`);const[r,a]=n.shape.slice(0,2),o=2===n.rank?1:n.shape[2];if(o>4||2===o)throw new Error("toPixels only supports depth of size 1, 3 or 4 but got "+o);if("float32"!==n.dtype&&"int32"!==n.dtype)throw new Error(`Unsupported type for toPixels: ${n.dtype}. Please use float32 or int32 tensors.`);const s=await n.data(),i="float32"===n.dtype?255:1,c=new Uint8ClampedArray(a*r*4);for(let t=0;t<r*a;++t){const e=[0,0,0,255];for(let r=0;r<o;r++){const a=s[t*o+r];if("float32"===n.dtype){if(a<0||a>1)throw new Error(`Tensor values for a float32 Tensor must be in the range [0 - 1] but encountered ${a}.`)}else if("int32"===n.dtype&&(a<0||a>255))throw new Error(`Tensor values for a int32 Tensor must be in the range [0 - 255] but encountered ${a}.`);1===o?(e[0]=a*i,e[1]=a*i,e[2]=a*i):e[r]=a*i}const r=4*t;c[r+0]=Math.round(e[0]),c[r+1]=Math.round(e[1]),c[r+2]=Math.round(e[2]),c[r+3]=Math.round(e[3])}if(null!=e){e.width=a,e.height=r;const t=e.getContext("2d"),n=new ImageData(c,a,r);t.putImageData(n,0,0)}return n!==t&&n.dispose(),c}const St=Object(yt.b)({fromPixels_:function(t,e=3){if(e>4)throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");if(null==t)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");let n=!1,r=!1,a=!1,o=!1,s=!1,i=!1;if(t.data instanceof Uint8Array)n=!0;else if("undefined"!=typeof ImageData&&t instanceof ImageData)r=!0;else if("undefined"!=typeof HTMLVideoElement&&t instanceof HTMLVideoElement)a=!0;else if("undefined"!=typeof HTMLImageElement&&t instanceof HTMLImageElement)o=!0;else if(null!=t.getContext)s=!0;else{if(!("undefined"!=typeof ImageBitmap&&t instanceof ImageBitmap))throw new Error("pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was "+t.constructor.name);i=!0}if(a){const e=2;if(a&&t.readyState<e)throw new Error("The video element has not loaded data yet. Please wait for `loadeddata` event on the <video> element.")}if(null!=Object(wt.c)(vt.hb,p.a.backendName)){const n={pixels:t},r={numChannels:e};return p.a.runKernel(vt.hb,n,r)}const[c,u]=a?[t.videoWidth,t.videoHeight]:[t.width,t.height];let d,l;if(s?d=t.getContext("2d").getImageData(0,0,c,u).data:r||n?d=t.data:(o||a||i)&&(null==kt&&(kt=document.createElement("canvas").getContext("2d")),kt.canvas.width=c,kt.canvas.height=u,kt.drawImage(t,0,0,c,u),d=kt.getImageData(0,0,c,u).data),4===e)l=new Int32Array(d);else{const t=c*u;l=new Int32Array(t*e);for(let n=0;n<t;n++)for(let t=0;t<e;++t)l[n*e+t]=d[4*n+t]}const f=[u,c,e];return Object(xt.a)(l,f,"int32")}});function Et(t,e){const n=t.shape.length,r=e.shape.length;if(n<1)throw new Error(`tf.gatherND() expects the input to be rank 1 or higher, but the rank was ${n}.`);if(r<1)throw new Error(`tf.gatherND() expects the indices to be rank 1 or higher, but the rank was ${r}.`);if("int32"!==e.dtype)throw new Error(`tf.gatherND() expects the indices to be int32 type, but the dtype was ${e.dtype}.`);if(e.shape[r-1]>n)throw new Error(`index innermost dimension length must be <= tensor rank; saw: ${e.shape[r-1]} vs. ${n}`);if(0===Object(N.N)(t.shape))throw new Error(`Requested more than 0 entries, but input is empty. Input shape: ${t.shape}.`);const a=e.shape,o=a[a.length-1];let s=1;for(let t=0;t<a.length-1;++t)s*=a[t];const i=t.shape,c=a.slice();c.pop();let u=1;for(let t=o;t<n;++t)u*=i[t],c.push(i[t]);const d=[...Object(N.j)(t.shape).map(t=>t/u),1].slice(0,o);return[c,s,u,d]}var Tt=n(95);
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function It(t,e,n){const r=t.shape.length;N.b(r===e.length,()=>`Error in slice${r}D: Length of begin ${e} must match the rank of the array (${r}).`),N.b(r===n.length,()=>`Error in slice${r}D: Length of size ${n} must match the rank of the array (${r}).`);for(let a=0;a<r;++a)N.b(e[a]+n[a]<=t.shape[a],()=>`Error in slice${r}D: begin[${a}] + size[${a}] (${e[a]+n[a]}) would overflow input.shape[${a}] (${t.shape[a]})`)}function At(t){const e=[];let n=0;for(;t>0;)1&t&&e.push(n),t/=2,n++;return e}function _t(t,e,n){const r=[];for(let a=0;a<t.length;a++)r[a]=Math.ceil((e[a]-t[a])/n[a]);return r}function Dt(t,e,n,r){const a=[...t];for(let t=a.length;t<r.length;t++)a.push(1);for(let t=0;t<n;t++)0===t?a[e]=1:(a.splice(e,0,1),a.pop());return a}function Mt(t,e,n){return n<=t?n:n-(e-1)}function Ft(t,e){const n=[];for(let r=0;r<t;r++)n.push(e+r);return n}function $t(t,e,n,r,a,o,s,i,c){const u=t.length;let d=new Array(u),l=new Array(u),p=new Array(u);if(e.length&&n>0){const c=e[0],u=n+1;d=Rt(s,c,u,r,t),l=Pt(i,c,u,a,t),p=Dt(o,c,u,t)}else for(let e=0;e<u;e++)d[e]=Bt(s,r,o,t,e,c),l[e]=Lt(i,a,o,t,e,c),p[e]=Ct(o,e,c);return{begin:d,end:l,strides:p}}function Rt(t,e,n,r,a){const o=[...a],s=Ft(n,e);for(let a=0;a<o.length;a++)if(s.indexOf(a)>-1)o[a]=0;else{const s=Mt(e,n,a);let i=r[s];t&1<<s&&(i=0),o[a]=i}return o}function Pt(t,e,n,r,a){const o=[...a],s=Ft(n,e);for(let a=0;a<o.length;a++)if(s.indexOf(a)>-1)o[a]=Number.MAX_SAFE_INTEGER;else{const s=Mt(e,n,a);let i=r[s];t&1<<s&&(i=Number.MAX_SAFE_INTEGER),o[a]=i}for(let t=0;t<o.length;t++){const e=a[t];o[t]<0&&(o[t]+=e),o[t]=N.i(0,o[t],a[t])}return o}function Ct(t,e,n){let r=t[e];return(n&1<<e||null==r)&&(r=1),r}function Bt(t,e,n,r,a,o){let s=e[a];const i=n[a]||1;(t&1<<a||o&1<<a||null==s)&&(s=i>0?Number.MIN_SAFE_INTEGER:Number.MAX_SAFE_INTEGER);const c=r[a];return s<0&&(s+=c),s=N.i(0,s,c-1),s}function Lt(t,e,n,r,a,o){let s=e[a];const i=n[a]||1;(t&1<<a||o&1<<a||null==s)&&(s=i>0?Number.MAX_SAFE_INTEGER:Number.MIN_SAFE_INTEGER);const c=r[a];return s<0&&(s+=c),s=i>0?N.i(0,s,c):N.i(-1,s,c-1),s}function zt(t,e,n){let r=n.length;for(let t=0;t<n.length;t++)if(n[t]>1){r=t;break}for(let a=r+1;a<n.length;a++)if(e[a]>0||n[a]!==t[a])return!1;return!0}function Vt(t,e){let n=t.length>0?t[t.length-1]:1;for(let r=0;r<t.length-1;r++)n+=t[r]*e[r];return n}function qt(t,e,n){let r;const a=t.shape.length;let o;return r="number"==typeof e?[e,...new Array(a-1).fill(0)]:e.length<a?e.concat(new Array(a-e.length).fill(0)):e.slice(),r.forEach(t=>{N.b(-1!==t,()=>"slice() does not support negative begin indexing.")}),o=null==n?new Array(a).fill(-1):"number"==typeof n?[n,...new Array(a-1).fill(-1)]:n.length<a?n.concat(new Array(a-n.length).fill(-1)):n,o=o.map((e,n)=>e>=0?e:(N.b(-1===e,()=>`Negative size values should be exactly -1 but got ${e} for the slice() size at index ${n}.`),t.shape[n]-r[n])),[r,o]}function Ut(t,e,n,r,a,o,s,i,c){let u=e.slice(),d=n.slice(),l=r;null==r&&(l=new Array(u.length));const p=At(s);if(p.length>1)throw new Error("Multiple ellipses in slice is not allowed.");if(0!==s&&0!==i)throw new Error("Using both ellipsisMask and newAxisMask is not yet supported.");if(0!==s&&0!==c)throw new Error("Using both ellipsisMask and shrinkAxisMask is not yet supported.");const f=t.length-u.length,h=At(i),b=t.slice();h.forEach(t=>{u[t]=0,d[t]=1,b.splice(t,0,1)});const{begin:m,end:g,strides:y}=$t(b,p,f,u,d,l,a,o,s);u=m,d=g,l=y;const O=At(c);O.forEach(t=>{d[t]=u[t]+1,l[t]=1});const j=_t(u,d,l),v=j.filter((t,e)=>-1===O.indexOf(e));return{nonStrided:l.every(t=>1===t),$begin:u,$end:d,$strides:l,size:j,newShape:b,outShape:v}}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Ht{getClassName(){return this.constructor.className}static fromConfig(t,e){return new t(e)}}class Wt{constructor(){this.classNameMap={}}static getMap(){return null==Wt.instance&&(Wt.instance=new Wt),Wt.instance}static register(t){Wt.getMap().classNameMap[t.className]=[t,t.fromConfig]}}function Gt(t){Object(N.b)(null!=t.className,()=>"Class being registered does not have the static className property defined."),Object(N.b)("string"==typeof t.className,()=>"className is required to be a string, but got type "+typeof t.className),Object(N.b)(t.className.length>0,()=>"Class being registered has an empty-string as its className, which is disallowed."),Wt.register(t)}var Kt=n(21),Yt=n(116),Jt=n(10);
/** @license See the LICENSE file. */
const Xt="2.8.6";var Qt=n(19),Zt=n(12),te=n(14),ee=n(8),ne=n(32),re=n(23),ae=n(20),oe=n(29),se=n(15);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class ie extends Ht{minimize(t,e=!1,n){const{value:r,grads:a}=this.computeGradients(t,n);if(null!=n){const t=n.map(t=>({name:t.name,tensor:a[t.name]}));this.applyGradients(t)}else this.applyGradients(a);return Object(Qt.d)(a),e?r:(r.dispose(),null)}get iterations(){return null==this.iterations_&&(this.iterations_=0),this.iterations_}incrementIterations(){this.iterations_=this.iterations+1}computeGradients(t,e){return Object(oe.f)(t,e)}dispose(){null!=this.iterations_&&Object(Qt.d)(this.iterations_)}async saveIterations(){return null==this.iterations_&&(this.iterations_=0),{name:"iter",tensor:Object(se.a)(this.iterations_,"int32")}}async getWeights(){throw new Error("getWeights() is not implemented for this optimizer yet.")}async setWeights(t){throw new Error("setWeights() is not implemented for this optimizer class "+this.getClassName())}async extractIterations(t){return this.iterations_=(await t[0].tensor.data())[0],t.slice(1)}}Object.defineProperty(ie,Symbol.hasInstance,{value:t=>null!=t.minimize&&null!=t.computeGradients&&null!=t.applyGradients});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class ce extends ie{constructor(t,e,n=null){super(),this.learningRate=t,this.rho=e,this.epsilon=n,this.accumulatedGrads=[],this.accumulatedUpdates=[],null==n&&(this.epsilon=p.a.backend.epsilon())}applyGradients(t){(Array.isArray(t)?t.map(t=>t.name):Object.keys(t)).forEach((e,n)=>{const r=p.a.registeredVariables[e];null==this.accumulatedGrads[n]&&(this.accumulatedGrads[n]={originalName:e+"/accum_grad",variable:Object(Qt.t)(()=>Object(ae.a)(r).variable(!1))}),null==this.accumulatedUpdates[n]&&(this.accumulatedUpdates[n]={originalName:e+"/accum_var",variable:Object(Qt.t)(()=>Object(ae.a)(r).variable(!1))});const a=Array.isArray(t)?t[n].tensor:t[e];if(null==a)return;const o=this.accumulatedGrads[n].variable,s=this.accumulatedUpdates[n].variable;Object(Qt.t)(()=>{const t=Object(Zt.a)(Object(ee.a)(o,this.rho),Object(ee.a)(Object(re.a)(a),1-this.rho)),e=Object(ee.a)(Object(te.a)(Object(ne.a)(Object(Zt.a)(s,this.epsilon)),Object(ne.a)(Object(Zt.a)(o,this.epsilon))),a),n=Object(Zt.a)(Object(ee.a)(s,this.rho),Object(ee.a)(Object(re.a)(e),1-this.rho));o.assign(t),s.assign(n);const i=Object(Zt.a)(Object(ee.a)(e,-this.learningRate),r);r.assign(i)})}),this.incrementIterations()}dispose(){null!=this.accumulatedUpdates&&(Object(Qt.d)(this.accumulatedGrads.map(t=>t.variable)),Object(Qt.d)(this.accumulatedUpdates.map(t=>t.variable)))}async getWeights(){const t=[...this.accumulatedGrads,...this.accumulatedUpdates];return[await this.saveIterations()].concat(t.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(t){const e=(t=await this.extractIterations(t)).length/2;this.accumulatedGrads=t.slice(0,e).map(t=>({originalName:t.name,variable:t.tensor.variable(!1)})),this.accumulatedUpdates=t.slice(e,2*e).map(t=>({originalName:t.name,variable:t.tensor.variable(!1)}))}getConfig(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}}static fromConfig(t,e){return new t(e.learningRate,e.rho,e.epsilon)}}ce.className="Adadelta",Gt(ce);var ue=n(97);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class de extends ie{constructor(t,e=.1){super(),this.learningRate=t,this.initialAccumulatorValue=e,this.accumulatedGrads=[]}applyGradients(t){(Array.isArray(t)?t.map(t=>t.name):Object.keys(t)).forEach((e,n)=>{const r=p.a.registeredVariables[e];if(null==this.accumulatedGrads[n]){const t=!1;this.accumulatedGrads[n]={originalName:e+"/accumulator",variable:Object(Qt.t)(()=>Object(ue.a)(r.shape,this.initialAccumulatorValue).variable(t))}}const a=Array.isArray(t)?t[n].tensor:t[e];if(null==a)return;const o=this.accumulatedGrads[n].variable;Object(Qt.t)(()=>{const t=Object(Zt.a)(o,Object(re.a)(a));o.assign(t);const e=Object(Zt.a)(Object(ee.a)(Object(te.a)(a,Object(ne.a)(Object(Zt.a)(t,p.a.backend.epsilon()))),-this.learningRate),r);r.assign(e)})}),this.incrementIterations()}dispose(){null!=this.accumulatedGrads&&Object(Qt.d)(this.accumulatedGrads.map(t=>t.variable))}async getWeights(){return[await this.saveIterations()].concat(this.accumulatedGrads.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(t){t=await this.extractIterations(t);this.accumulatedGrads=t.map(t=>({originalName:t.name,variable:t.tensor.variable(!1)}))}getConfig(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}}static fromConfig(t,e){return new t(e.learningRate,e.initialAccumulatorValue)}}de.className="Adagrad",Gt(de);var le=n(40),pe=n(13);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class fe extends ie{constructor(t,e,n,r=null){super(),this.learningRate=t,this.beta1=e,this.beta2=n,this.epsilon=r,this.accumulatedFirstMoment=[],this.accumulatedSecondMoment=[],Object(Qt.t)(()=>{this.accBeta1=Object(se.a)(e).variable(),this.accBeta2=Object(se.a)(n).variable()}),null==r&&(this.epsilon=p.a.backend.epsilon())}applyGradients(t){const e=Array.isArray(t)?t.map(t=>t.name):Object.keys(t);Object(Qt.t)(()=>{const n=Object(pe.a)(1,this.accBeta1),r=Object(pe.a)(1,this.accBeta2);e.forEach((e,a)=>{const o=p.a.registeredVariables[e];null==this.accumulatedFirstMoment[a]&&(this.accumulatedFirstMoment[a]={originalName:e+"/m",variable:Object(Qt.t)(()=>Object(ae.a)(o).variable(!1))}),null==this.accumulatedSecondMoment[a]&&(this.accumulatedSecondMoment[a]={originalName:e+"/v",variable:Object(Qt.t)(()=>Object(ae.a)(o).variable(!1))});const s=Array.isArray(t)?t[a].tensor:t[e];if(null==s)return;const i=this.accumulatedFirstMoment[a].variable,c=this.accumulatedSecondMoment[a].variable,u=Object(Zt.a)(Object(ee.a)(i,this.beta1),Object(ee.a)(s,1-this.beta1)),d=Object(Zt.a)(Object(ee.a)(c,this.beta2),Object(ee.a)(Object(re.a)(s),1-this.beta2)),l=Object(te.a)(u,n),f=Object(te.a)(d,r);i.assign(u),c.assign(d);const h=Object(Zt.a)(Object(ee.a)(Object(te.a)(l,Object(Zt.a)(Object(ne.a)(f),this.epsilon)),-this.learningRate),o);o.assign(h)}),this.accBeta1.assign(Object(ee.a)(this.accBeta1,this.beta1)),this.accBeta2.assign(Object(ee.a)(this.accBeta2,this.beta2))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.accBeta2.dispose(),null!=this.accumulatedFirstMoment&&Object(Qt.d)(this.accumulatedFirstMoment.map(t=>t.variable)),null!=this.accumulatedSecondMoment&&Object(Qt.d)(this.accumulatedSecondMoment.map(t=>t.variable))}async getWeights(){const t=[...this.accumulatedFirstMoment,...this.accumulatedSecondMoment];return[await this.saveIterations()].concat(t.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(t){t=await this.extractIterations(t),Object(Qt.t)(()=>{this.accBeta1.assign(Object(le.a)(this.beta1,this.iterations_+1)),this.accBeta2.assign(Object(le.a)(this.beta2,this.iterations_+1))});const e=t.length/2;this.accumulatedFirstMoment=t.slice(0,e).map(t=>({originalName:t.name,variable:t.tensor.variable(!1)})),this.accumulatedSecondMoment=t.slice(e,2*e).map(t=>({originalName:t.name,variable:t.tensor.variable(!1)}))}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}}static fromConfig(t,e){return new t(e.learningRate,e.beta1,e.beta2,e.epsilon)}}fe.className="Adam",Gt(fe);var he=n(36),be=n(63);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class me extends ie{constructor(t,e,n,r=null,a=0){super(),this.learningRate=t,this.beta1=e,this.beta2=n,this.epsilon=r,this.decay=a,this.accumulatedFirstMoment=[],this.accumulatedWeightedInfNorm=[],Object(Qt.t)(()=>{this.iteration=Object(se.a)(0).variable(),this.accBeta1=Object(se.a)(e).variable()}),null==r&&(this.epsilon=p.a.backend.epsilon())}applyGradients(t){const e=Array.isArray(t)?t.map(t=>t.name):Object.keys(t);Object(Qt.t)(()=>{const n=Object(pe.a)(1,this.accBeta1),r=Object(te.a)(-this.learningRate,Object(Zt.a)(Object(ee.a)(this.iteration,this.decay),1));e.forEach((e,a)=>{const o=p.a.registeredVariables[e];null==this.accumulatedFirstMoment[a]&&(this.accumulatedFirstMoment[a]={originalName:e+"/m",variable:Object(ae.a)(o).variable(!1)}),null==this.accumulatedWeightedInfNorm[a]&&(this.accumulatedWeightedInfNorm[a]={originalName:e+"/v",variable:Object(ae.a)(o).variable(!1)});const s=Array.isArray(t)?t[a].tensor:t[e];if(null==s)return;const i=this.accumulatedFirstMoment[a].variable,c=this.accumulatedWeightedInfNorm[a].variable,u=Object(Zt.a)(Object(ee.a)(i,this.beta1),Object(ee.a)(s,1-this.beta1)),d=Object(ee.a)(c,this.beta2),l=Object(he.a)(s),f=Object(be.a)(d,l);i.assign(u),c.assign(f);const h=Object(Zt.a)(Object(ee.a)(Object(te.a)(r,n),Object(te.a)(u,Object(Zt.a)(f,this.epsilon))),o);o.assign(h)}),this.iteration.assign(Object(Zt.a)(this.iteration,1)),this.accBeta1.assign(Object(ee.a)(this.accBeta1,this.beta1))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.iteration.dispose(),null!=this.accumulatedFirstMoment&&Object(Qt.d)(this.accumulatedFirstMoment.map(t=>t.variable)),null!=this.accumulatedWeightedInfNorm&&Object(Qt.d)(this.accumulatedWeightedInfNorm.map(t=>t.variable))}async getWeights(){throw new Error("getWeights() is not implemented for Adamax yet.")}async setWeights(t){throw new Error("setWeights() is not implemented for Adamax yet.")}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}}static fromConfig(t,e){return new t(e.learningRate,e.beta1,e.beta2,e.epsilon,e.decay)}}me.className="Adamax",Gt(me);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class ge extends ie{constructor(t){super(),this.learningRate=t,this.setLearningRate(t)}applyGradients(t){(Array.isArray(t)?t.map(t=>t.name):Object.keys(t)).forEach((e,n)=>{const r=Array.isArray(t)?t[n].tensor:t[e];if(null==r)return;const a=p.a.registeredVariables[e];Object(Qt.t)(()=>{const t=Object(Zt.a)(Object(ee.a)(this.c,r),a);a.assign(t)})}),this.incrementIterations()}setLearningRate(t){this.learningRate=t,null!=this.c&&this.c.dispose(),this.c=Object(Qt.l)(Object(se.a)(-t))}dispose(){this.c.dispose()}async getWeights(){return[await this.saveIterations()]}async setWeights(t){if(0!==(t=await this.extractIterations(t)).length)throw new Error("SGD optimizer does not have settable weights.")}getConfig(){return{learningRate:this.learningRate}}static fromConfig(t,e){return new t(e.learningRate)}}ge.className="SGD",Gt(ge);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class ye extends ge{constructor(t,e,n=!1){super(t),this.learningRate=t,this.momentum=e,this.useNesterov=n,this.accumulations=[],this.m=Object(se.a)(this.momentum)}applyGradients(t){(Array.isArray(t)?t.map(t=>t.name):Object.keys(t)).forEach((e,n)=>{const r=p.a.registeredVariables[e];if(null==this.accumulations[n]){const t=!1;this.accumulations[n]={originalName:e+"/momentum",variable:Object(Qt.t)(()=>Object(ae.a)(r).variable(t))}}const a=this.accumulations[n].variable,o=Array.isArray(t)?t[n].tensor:t[e];null!=o&&Object(Qt.t)(()=>{let t;const e=Object(Zt.a)(Object(ee.a)(this.m,a),o);t=this.useNesterov?Object(Zt.a)(Object(ee.a)(this.c,Object(Zt.a)(o,Object(ee.a)(e,this.m))),r):Object(Zt.a)(Object(ee.a)(this.c,e),r),a.assign(e),r.assign(t)})}),this.incrementIterations()}dispose(){this.m.dispose(),null!=this.accumulations&&Object(Qt.d)(this.accumulations.map(t=>t.variable))}setMomentum(t){this.momentum=t}async getWeights(){return[await this.saveIterations()].concat(this.accumulations.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(t){t=await this.extractIterations(t);this.accumulations=t.map(t=>({originalName:t.name,variable:t.tensor.variable(!1)}))}getConfig(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}}static fromConfig(t,e){return new t(e.learningRate,e.momentum,e.useNesterov)}}ye.className="Momentum",Gt(ye);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Oe extends ie{constructor(t,e=.9,n=0,r=null,a=!1){if(super(),this.learningRate=t,this.decay=e,this.momentum=n,this.epsilon=r,this.accumulatedMeanSquares=[],this.accumulatedMoments=[],this.accumulatedMeanGrads=[],this.centered=a,null==r&&(this.epsilon=p.a.backend.epsilon()),null==t)throw new Error("learningRate for RMSPropOptimizer must be defined.")}applyGradients(t){(Array.isArray(t)?t.map(t=>t.name):Object.keys(t)).forEach((e,n)=>{const r=p.a.registeredVariables[e];null==this.accumulatedMeanSquares[n]&&(this.accumulatedMeanSquares[n]={originalName:e+"/rms",variable:Object(Qt.t)(()=>Object(ae.a)(r).variable(!1))}),null==this.accumulatedMoments[n]&&(this.accumulatedMoments[n]={originalName:e+"/momentum",variable:Object(Qt.t)(()=>Object(ae.a)(r).variable(!1))}),null==this.accumulatedMeanGrads[n]&&this.centered&&(this.accumulatedMeanGrads[n]={originalName:e+"/mg",variable:Object(Qt.t)(()=>Object(ae.a)(r).variable(!1))});const a=Array.isArray(t)?t[n].tensor:t[e];if(null==a)return;const o=this.accumulatedMeanSquares[n].variable,s=this.accumulatedMoments[n].variable;Object(Qt.t)(()=>{const t=Object(Zt.a)(Object(ee.a)(o,this.decay),Object(ee.a)(Object(re.a)(a),1-this.decay));if(this.centered){const e=this.accumulatedMeanGrads[n].variable,i=Object(Zt.a)(Object(ee.a)(e,this.decay),Object(ee.a)(a,1-this.decay)),c=Object(te.a)(Object(ee.a)(a,this.learningRate),Object(ne.a)(Object(pe.a)(t,Object(Zt.a)(Object(re.a)(i),this.epsilon)))),u=Object(Zt.a)(Object(ee.a)(s,this.momentum),c);o.assign(t),e.assign(i),s.assign(u);const d=Object(pe.a)(r,u);r.assign(d)}else{const t=Object(Zt.a)(Object(ee.a)(o,this.decay),Object(ee.a)(Object(re.a)(a),1-this.decay)),e=Object(Zt.a)(Object(ee.a)(s,this.momentum),Object(te.a)(Object(ee.a)(a,this.learningRate),Object(ne.a)(Object(Zt.a)(t,this.epsilon))));o.assign(t),s.assign(e);const n=Object(pe.a)(r,e);r.assign(n)}})}),this.incrementIterations()}dispose(){null!=this.accumulatedMeanSquares&&Object(Qt.d)(this.accumulatedMeanSquares.map(t=>t.variable)),null!=this.accumulatedMeanGrads&&this.centered&&Object(Qt.d)(this.accumulatedMeanGrads.map(t=>t.variable)),null!=this.accumulatedMoments&&Object(Qt.d)(this.accumulatedMoments.map(t=>t.variable))}async getWeights(){const t=[...this.accumulatedMeanSquares,...this.accumulatedMoments];return this.centered&&t.push(...this.accumulatedMeanGrads),[await this.saveIterations()].concat(t.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(t){t=await this.extractIterations(t);const e=this.centered?t.length/3:t.length/2;this.accumulatedMeanSquares=t.slice(0,e).map(t=>({originalName:t.name,variable:t.tensor.variable(!1)})),this.accumulatedMoments=t.slice(e,2*e).map(t=>({originalName:t.name,variable:t.tensor.variable(!1)})),this.centered&&(this.accumulatedMeanGrads=t.slice(2*e,3*e).map(t=>({originalName:t.name,variable:t.tensor.variable(!1)})))}getConfig(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}}static fromConfig(t,e){return new t(e.learningRate,e.decay,e.momentum,e.epsilon,e.centered)}}Oe.className="RMSProp",Gt(Oe);var je=n(75),ve=n(17),we=n(30);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class xe{static sgd(t){return new ge(t)}static momentum(t,e,n=!1){return new ye(t,e,n)}static rmsprop(t,e=.9,n=0,r=null,a=!1){return new Oe(t,e,n,r,a)}static adam(t=.001,e=.9,n=.999,r=null){return new fe(t,e,n,r)}static adadelta(t=.001,e=.95,n=null){return new ce(t,e,n)}static adamax(t=.002,e=.9,n=.999,r=null,a=0){return new me(t,e,n,r,a)}static adagrad(t,e=.1){return new de(t,e)}}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ke={sgd:xe.sgd,momentum:xe.momentum,adadelta:xe.adadelta,adagrad:xe.adagrad,rmsprop:xe.rmsprop,adamax:xe.adamax,adam:xe.adam};var Ne=n(201),Se=n(55),Ee=n(33),Te=n(16);
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Ie(t,e){const n=t[0].length;t.forEach((t,e)=>{N.b(t.length===n,()=>`Error in concat${n}D: rank of tensors[${e}] must be the same as the rank of the rest (${n})`)}),N.b(e>=0&&e<n,()=>`Error in concat${n}D: axis must be between 0 and ${n-1}.`);const r=t[0];t.forEach((t,a)=>{for(let o=0;o<n;o++)N.b(o===e||t[o]===r[o],()=>`Error in concat${n}D: Shape of tensors[${a}] (${t}) does not match the shape of the rest (${r}) along the non-concatenated axis ${a}.`)})}function Ae(t,e){const n=t[0].slice();for(let r=1;r<t.length;r++)n[e]+=t[r][e];return n}var _e=n(26),De=n(37);
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Me=30;function Fe(t){return t<=Me?t:Object(N.G)(t,Math.floor(Math.sqrt(t)))}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $e(t,e,n){return[n*("number"==typeof t?t:t[0]),e*("number"==typeof t?t:t[1])]}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Re(t,e,n,r=!0){let a=[];if(r)a=a.concat(e.slice(0)),a.push(t[0]/n),a=a.concat(t.slice(1));else{a=a.concat(t[0]);const n=e.length;for(let r=0;r<n;++r)a=a.concat([t[r+1]/e[r],e[r]]);a=a.concat(t.slice(n+1))}return a}function Pe(t,e,n=!0){const r=[];if(n){r.push(e);for(let n=e+1;n<t;++n)n<=2*e?(r.push(n),r.push(n-(e+1))):r.push(n)}else{const n=[],a=[];for(let r=1;r<t;++r)r>=2*e+1||r%2==1?a.push(r):n.push(r);r.push(...n),r.push(0),r.push(...a)}return r}function Ce(t,e,n,r=!0){const a=[];r?a.push(t[0]/n):a.push(t[0]*n);for(let n=1;n<t.length;++n)n<=e.length?r?a.push(e[n-1]*t[n]):a.push(t[n]/e[n-1]):a.push(t[n]);return a}function Be(t,e){const n=[0];for(let r=0;r<e;++r)n.push(t[r][0]);return n}function Le(t,e,n){const r=t.slice(0,1);for(let a=0;a<n;++a)r.push(t[a+1]-e[a][0]-e[a][1]);return r}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ze=1.7580993408473768,Ve=1.0507009873554805,qe=.3275911,Ue=.254829592,He=-.284496736,We=1.421413741,Ge=-1.453152027,Ke=1.061405429;
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Ye(...t){Object(f.c)().getBool("IS_TEST")||console.warn(...t)}function Je(...t){Object(f.c)().getBool("IS_TEST")||console.log(...t)}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xe(t,e){if(t.length!==e.length)throw new Error(`Cannot merge real and imag arrays of different lengths. real:${t.length}, imag: ${e.length}.`);const n=new Float32Array(2*t.length);for(let r=0;r<n.length;r+=2)n[r]=t[r/2],n[r+1]=e[r/2];return n}function Qe(t){const e=new Float32Array(t.length/2),n=new Float32Array(t.length/2);for(let r=0;r<t.length;r+=2)e[r/2]=t[r],n[r/2]=t[r+1];return{real:e,imag:n}}function Ze(t){const e=Math.ceil(t.length/4),n=new Float32Array(e),r=new Float32Array(e);for(let e=0;e<t.length;e+=4)n[Math.floor(e/4)]=t[e],r[Math.floor(e/4)]=t[e+1];return{real:n,imag:r}}function tn(t){const e=Math.floor(t.length/4),n=new Float32Array(e),r=new Float32Array(e);for(let e=2;e<t.length;e+=4)n[Math.floor(e/4)]=t[e],r[Math.floor(e/4)]=t[e+1];return{real:n,imag:r}}function en(t,e){return{real:t[2*e],imag:t[2*e+1]}}function nn(t,e,n,r){t[2*r]=e,t[2*r+1]=n}function rn(t,e){const n=new Float32Array(t/2),r=new Float32Array(t/2);for(let a=0;a<Math.ceil(t/2);a++){const o=(e?2:-2)*Math.PI*(a/t);n[a]=Math.cos(o),r[a]=Math.sin(o)}return{real:n,imag:r}}function an(t,e,n){const r=(n?2:-2)*Math.PI*(t/e);return{real:Math.cos(r),imag:Math.sin(r)}}function on(t,e,n=0){let r=[];if("number"==typeof e)Object(N.b)(t.shape[n]%e==0,()=>"Number of splits must evenly divide the axis."),r=new Array(e).fill(t.shape[n]/e);else{const a=e.reduce((t,e)=>(-1===e&&(t+=1),t),0);Object(N.b)(a<=1,()=>"There should be only one negative value in split array.");const o=e.indexOf(-1);if(-1!==o){const r=e.reduce((t,e)=>e>0?t+e:t);e[o]=t.shape[n]-r}Object(N.b)(t.shape[n]===e.reduce((t,e)=>t+e),()=>"The sum of sizes must match the size of the axis dimension."),r=e}return r}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sn(t,e){let n,r=!1;for(t<=Me?(n=t,r=!0):n=Object(N.G)(t,Math.floor(Math.sqrt(t)));!r;)n>e||n===t?r=!0:n=Object(N.G)(t,n+1);return n}function cn(t,e,n){const r=[],a=t.length;for(let o=0;o<a;o++)o!==e?r.push(t[o]):r.push(n);return r}function un(t,e,n,r){const a=e.shape.length,o=t.shape.length;if(0!==r&&(r<-a||r>a))throw new Error(`Expect batchDims in the range of [-${a}, ${a}], but got ${r}`);if(r<0&&(r+=a),r>o)throw new Error(`batchDims (${r}) must be less than rank(x) (\n    ${o}).`);if(n<r)throw new Error(`batchDims (${r}) must be less than or equal to axis (${n}).`);for(let n=0;n<r;++n)if(t.shape[n]!==e.shape[n])throw new Error(`x.shape[${n}]: ${t.shape[n]} should be equal to indices.shape[${n}]: ${e.shape[n]}.`);const s=t.shape[n],i=[];let c=1,u=1,d=1;for(let e=0;e<r;++e)i.push(t.shape[e]),c*=t.shape[e];for(let e=r;e<n;e++)i.push(t.shape[e]),u*=t.shape[e];for(let t=r;t<a;t++)i.push(e.shape[t]);for(let e=n+1;e<o;e++)i.push(t.shape[e]),d*=t.shape[e];return{batchSize:c,sliceSize:d,outerSize:u,dimSize:s,outputShape:i}}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dn(t,e,n){if("complex64"===e){if("complex64"===t.dtype)return t.clone();const e=Object(Se.a)(t.shape),r=Object(W.a)(t,"float32"),a=n.complex(r,e);return e.dispose(),r.dispose(),a}if(!Object(N.p)(t.dtype,e))return p.a.makeTensorFromDataId(t.dataId,t.shape,e);if("complex64"===t.dtype){const r=n.real(t),a=Object(W.a)(r,e);return r.dispose(),a}if("int32"===e)return n.int(t);if("bool"===e){const e=Object(se.a)(0,t.dtype),r=n.notEqual(t,e);return e.dispose(),r}throw new Error(`Error in Cast: failed to cast ${t.dtype} to ${e}`)}function ln(t,e){return p.a.makeTensorFromDataId(t.dataId,e,t.dtype)}function pn(t){try{return t.map(t=>Object(Jt.decodeString)(t))}catch(t){throw new Error("Failed to decode encoded string bytes into utf-8, error: "+t)}}function fn(t){return t.map(t=>Object(Jt.encodeString)(t))}var hn=n(126),bn=n(62),mn=n(158),gn=n(119),yn=n(68);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const On={kernelName:vt.a,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>Object(ee.a)(t,Object(yn.a)(Object(W.a)(n,"float32"),-1))}}};var jn=n(27);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const vn={kernelName:vt.b,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>{const e=Object(re.a)(Object(W.a)(n,"float32")),r=Object(ne.a)(Object(pe.a)(Object(se.a)(1),e));return Object(jn.a)(Object(te.a)(t,r))}}}},wn={kernelName:vt.c,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>{const e=Object(ne.a)(Object(pe.a)(Object(re.a)(Object(W.a)(n,"float32")),1));return Object(te.a)(t,e)}}}};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var xn=n(6),kn=n(18);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Nn={kernelName:vt.d,inputsToSave:["a","b"],gradFunc:(t,e)=>{const[n,r]=e,a=Te.a(n.shape,r.shape);return{a:()=>{let e=t;const r=Te.c(n.shape,a);return r.length>0&&(e=Object(kn.a)(e,r)),Object(xn.a)(e,n.shape)},b:()=>{let e=t;const n=Te.c(r.shape,a);return n.length>0&&(e=Object(kn.a)(e,n)),Object(xn.a)(e,r.shape)}}}},Sn={kernelName:vt.e,saveAllInputs:!0,gradFunc:(t,e)=>{const n={};return e.forEach((e,r)=>{n[r]=()=>t.clone()}),n}},En={kernelName:vt.h,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>Object(ae.a)(n)}}},Tn={kernelName:vt.i,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>Object(ae.a)(n)}}},In={kernelName:vt.j,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>Object(te.a)(t,Object(ne.a)(Object(pe.a)(Object(se.a)(1),Object(re.a)(Object(W.a)(n,"float32")))))}}},An={kernelName:vt.k,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>{const e=Object(ne.a)(Object(Zt.a)(Object(se.a)(1),Object(re.a)(Object(W.a)(n,"float32"))));return Object(te.a)(t,e)}}}},_n={kernelName:vt.m,inputsToSave:["a","b"],gradFunc:(t,e)=>{const[n,r]=e,a=Object(Te.a)(n.shape,r.shape);return{a:()=>{const e=Object(Zt.a)(Object(re.a)(n),Object(re.a)(r));let o=Object(ee.a)(t,Object(te.a)(r,e));const s=Object(Te.c)(n.shape,a);return s.length>0&&(o=Object(kn.a)(o,s)),Object(xn.a)(o,n.shape)},b:()=>{const e=Object(Zt.a)(Object(re.a)(n),Object(re.a)(r));let o=Object(jn.a)(Object(ee.a)(t,Object(te.a)(n,e)));const s=Object(Te.c)(r.shape,a);return s.length>0&&(o=Object(kn.a)(o,s)),Object(xn.a)(o,r.shape)}}}},Dn={kernelName:vt.l,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>Object(te.a)(t,Object(Zt.a)(Object(re.a)(Object(W.a)(n,"float32")),1))}}},Mn={kernelName:vt.n,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>Object(te.a)(t,Object(pe.a)(Object(se.a)(1),Object(re.a)(Object(W.a)(n,"float32"))))}}};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Fn=Object(yt.b)({avgPool3dGrad_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e,n,r,a=[1,1,1],o,s){const i=Object(bt.a)(t,"dy","avgPool3dGrad"),c=Object(bt.a)(e,"input","avgPool3dGrad");let u=i,d=c,l=!1;4===c.rank&&(l=!0,u=Object(xn.a)(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]]),d=Object(xn.a)(c,[1,c.shape[0],c.shape[1],c.shape[2],c.shape[3]])),N.b(5===u.rank,()=>"Error in avgPool3dGrad: dy must be rank 5 but got rank "+u.rank+"."),N.b(5===d.rank,()=>"Error in avgPool3dGrad: input must be rank 5 but got rank "+d.rank+"."),N.b(_e.h(r,a),()=>`Error in avgPool3dGrad: Either strides or dilations must be 1. Got strides ${r} and dilations '${a}'`),null!=s&&N.b(N.v(o),()=>`Error in avgPool3dGrad: pad must be an integer when using, dimRoundingMode ${s} but got pad ${o}.`);const f={dy:u,input:d},h={filterSize:n,strides:r,dilations:a,pad:o,dimRoundingMode:s},b=p.a.runKernel(vt.q,f,h);return l?Object(xn.a)(b,[b.shape[1],b.shape[2],b.shape[3],b.shape[4]]):b}}),$n={kernelName:vt.p,inputsToSave:["x"],gradFunc:(t,e,n)=>{const[r]=e,{filterSize:a,strides:o,dilations:s,pad:i,dimRoundingMode:c}=n,u=null==s?[1,1,1]:s;return{x:()=>Fn(t,r,a,o,u,i,c)}}};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Rn=Object(yt.b)({avgPoolGrad_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e,n,r,a){const o=Object(bt.a)(t,"dy","avgPoolGrad"),s=Object(bt.a)(e,"input","avgPoolGrad");N.b(s.rank===o.rank,()=>`Rank of input (${s.rank}) does not match rank of dy (${o.rank})`);let i=s,c=o,u=!1;3===s.rank&&(u=!0,i=Object(xn.a)(s,[1,s.shape[0],s.shape[1],s.shape[2]]),c=Object(xn.a)(o,[1,o.shape[0],o.shape[1],o.shape[2]])),N.b(4===c.rank,()=>"Error in avgPoolGrad: dy must be rank 4 but got rank "+c.rank+"."),N.b(4===i.rank,()=>"Error in avgPoolGrad: input must be rank 4 but got rank "+i.rank+".");const d={dy:c,input:i},l={filterSize:n,strides:r,pad:a},f=p.a.runKernel(vt.r,d,l);return u?Object(xn.a)(f,[f.shape[1],f.shape[2],f.shape[3]]):f}}),Pn={kernelName:vt.o,inputsToSave:["x"],gradFunc:(t,e,n)=>{const[r]=e,{filterSize:a,strides:o,pad:s}=n;return{x:()=>Rn(t,r,a,o,s)}}},Cn={kernelName:vt.s,inputsToSave:["a","b"],gradFunc:(t,e,n)=>{const[r,a]=e,{transposeA:o,transposeB:s}=n;return o||s?!o&&s?{a:()=>Object(mt.a)(t,a,!1,!1),b:()=>Object(mt.a)(t,r,!0,!1)}:o&&!s?{a:()=>Object(mt.a)(a,t,!1,!0),b:()=>Object(mt.a)(r,t,!1,!1)}:{a:()=>Object(mt.a)(a,t,!0,!0),b:()=>Object(mt.a)(t,r,!0,!0)}:{a:()=>Object(mt.a)(t,a,!1,!0),b:()=>Object(mt.a)(r,t,!0,!1)}}};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var Bn=n(82);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ln={kernelName:vt.t,gradFunc:(t,e,n)=>{const{blockShape:r,crops:a}=n;return{x:()=>Object(Bn.a)(t,r,a)}}},zn={kernelName:vt.v,gradFunc:(t,e,n)=>{const r=n,a=r.inputShape,o=r.shape,s=Array.from(o);for(let t=a.length-1;t>=0;t--)if(a[t]===o[t])s[t]=1;else if(1!==a[t])throw new Error(`broadcastTo(): [${a}] cannot be broadcast to [${o}].`);const i=[];for(let t=0;t<s.length;t++)s[t]>1&&i.push(t);return{x:()=>Object(kn.a)(t,i,!0)}}},Vn={kernelName:vt.w,gradFunc:t=>({x:()=>t.clone()})},qn={kernelName:vt.x,gradFunc:t=>({x:()=>Object(ae.a)(t)})};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var Un=n(45),Hn=n(46),Wn=n(50),Gn=n(31);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Kn={kernelName:vt.y,inputsToSave:["x"],gradFunc:(t,e,n)=>{const[r]=e,{clipValueMin:a,clipValueMax:o}=n;return{x:()=>Object(Gn.a)(Object(Wn.a)(Object(Un.a)(r,a),Object(Hn.a)(r,o)),t,Object(ae.a)(t))}}},Yn={kernelName:vt.A,inputsToSave:["x"],gradFunc:On.gradFunc};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var Jn=n(60);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Xn={kernelName:vt.B,saveAllInputs:!0,gradFunc:(t,e,n)=>{const r=e.map(t=>t.shape),{axis:a}=n,o=Object(N.I)(a,e[0].shape)[0],s=r.map(t=>t[o]);return Object(Jn.a)(t,s,o).map(t=>()=>t)}};var Qn=n(117),Zn=n(115);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const tr={kernelName:vt.C,inputsToSave:["x","filter"],gradFunc:(t,e,n)=>{const[r,a]=e,{dilations:o,strides:s,pad:i,dataFormat:c}=n;return N.b(_e.i(o),()=>`Error in gradient of conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${o}'`),{x:()=>Object(Zn.a)(r.shape,t,a,s,i,c),filter:()=>Object(Qn.a)(r,t,a.shape,s,i,c)}}};var er=n(54);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const nr={kernelName:vt.E,inputsToSave:["dy","filter"],gradFunc:(t,e,n)=>{const[r,a]=e,{strides:o,pad:s,dataFormat:i,dimRoundingMode:c}=n;return{dy:()=>Object(er.a)(t,a,o,s,i,1,c),filter:()=>Object(Qn.a)(t,r,a.shape,o,s,i,c)}}};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const rr=Object(yt.b)({conv3DBackpropFilter_:function(t,e,n,r,a){let o=t;4===t.rank&&(o=Object(xn.a)(t,[1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]]));let s=e;4===s.rank&&(s=Object(xn.a)(e,[1,e.shape[0],e.shape[1],e.shape[2],e.shape[3]])),N.b(5===o.rank,()=>"Error in conv3dDerFilter: input must be rank 5, but got shape "+o.shape+"."),N.b(5===s.rank,()=>"Error in conv3dDerFilter: dy must be rank 5, but got shape "+s.shape+"."),N.b(5===n.length,()=>"Error in conv3dDerFilter: filterShape must be length 5, but got "+n+"."),N.b(o.shape[4]===n[3],()=>`Error in conv3dDerFilter: depth of input ${o.shape[4]}) must match input depth in filter (${n[3]}.`),N.b(s.shape[4]===n[4],()=>`Error in conv3dDerFilter: depth of dy (${s.shape[4]}) must match output depth for filter (${n[4]}).`);const i={x:o,dy:s},c={strides:r,pad:a,filterShape:n};return p.a.runKernel(vt.G,i,c)}});var ar=n(159);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const or={kernelName:vt.F,inputsToSave:["x","filter"],gradFunc:(t,e,n)=>{const{dilations:r,strides:a,pad:o}=n;N.b(Object(_e.i)(r),()=>`Error in gradient of conv3D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${r}'`);const[s,i]=e;return{x:()=>Object(ar.a)(s.shape,t,i,a,o),filter:()=>rr(s,t,i.shape,a,o)}}};var sr=n(151);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ir={kernelName:vt.I,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>Object(ee.a)(Object(jn.a)(Object(sr.a)(Object(W.a)(n,"float32"))),t)}}};var cr=n(152);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ur={kernelName:vt.J,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>Object(ee.a)(Object(cr.a)(Object(W.a)(n,"float32")),t)}}};var dr=n(100);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const lr={kernelName:vt.L,inputsToSave:["x"],gradFunc:(t,e,n)=>{const[r]=e,{axis:a,exclusive:o,reverse:s}=n;return{x:()=>{const e=Object(Ee.f)([a],r.rank);let n=Object(dr.a)(t,a,o,!s);return null!=e&&(n=Object(Ot.a)(n,e)),n}}}};var pr=n(163),fr=n(162);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const hr={kernelName:vt.O,inputsToSave:["x","filter"],gradFunc:(t,e,n)=>{const{dilations:r,strides:a,pad:o,dimRoundingMode:s}=n,i=null==r?[1,1]:r;N.b(_e.i(i),()=>`Error in gradient of depthwiseConv2dNative: dilation rates greater than 1 are not yet supported. Got dilations '${i}'`);const[c,u]=e;return N.b(4===c.rank,()=>`Error in gradient of depthwiseConv2dNative: input must be rank 4, but got rank ${c.rank}.`),N.b(4===u.rank,()=>`Error in gradient of depthwiseConv2dNative: filter must be rank 4, but got rank ${u.rank}.`),N.b(c.shape[3]===u.shape[2],()=>`Error in gradient of depthwiseConv2d: number of input channels (${c.shape[3]}) must match the inChannels dimension in filter ${u.shape[2]}.`),N.b(_e.h(a,i),()=>`Error in gradient of depthwiseConv2d: Either strides or dilations must be  1. Got strides ${a} and dilations '${i}'.`),null!=s&&N.b(N.v(o),()=>`Error in depthwiseConv2d: pad must be an integer when using, dimRoundingMode ${s} but got pad ${o}.`),{x:()=>Object(fr.a)(c.shape,t,u,a,o,r,s),filter:()=>Object(pr.a)(c,t,u.shape,a,o,r,s)}}},br={kernelName:vt.S,inputsToSave:["x","filter"],gradFunc:(t,e,n)=>{const[r,a]=e,o={x:r,filter:a,dy:t},s={x:r,filter:a,dy:t};return{x:()=>p.a.runKernel(vt.U,o,n),filter:()=>p.a.runKernel(vt.T,s,n)}}},mr={kernelName:vt.V,outputsToSave:[!0],gradFunc:(t,e)=>{const[n]=e,r={dy:t,y:n};return{x:()=>p.a.runKernel(vt.W,r)}}};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var gr=n(35);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const yr={kernelName:vt.Y,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e,r=Object(ee.a)(Object(gr.a)(Object(jn.a)(Object(re.a)(n))),2/Math.sqrt(Math.PI));return{x:()=>Object(ee.a)(t,r)}}},Or={kernelName:vt.Z,outputsToSave:[!0],gradFunc:(t,e)=>{const[n]=e;return{x:()=>Object(ee.a)(t,n)}}},jr={kernelName:vt.ab,inputsToSave:["input"],gradFunc:(t,e)=>{const[n]=e;return{input:()=>Object(xn.a)(t,n.shape)}}},vr={kernelName:vt.bb,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>Object(ee.a)(t,Object(gr.a)(n))}}},wr={kernelName:vt.fb,gradFunc:t=>({x:()=>Object(ae.a)(t)})},xr={kernelName:vt.gb,inputsToSave:["a","b"],gradFunc:(t,e)=>{const[n,r]=e,a=Object(Te.a)(n.shape,r.shape);return{a:()=>{const e=Object(te.a)(t,Object(W.a)(r,"float32")),o=Object(Te.c)(n.shape,a);return o.length>0?Object(xn.a)(Object(kn.a)(e,o),n.shape):e},b:()=>{let e=Object(ee.a)(t,Object(W.a)(n,"float32"));const o=Object(Te.c)(r.shape,a);o.length>0&&(e=Object(xn.a)(Object(kn.a)(e,o),r.shape));const s=Object(re.a)(r);return Object(jn.a)(Object(te.a)(e,Object(W.a)(s,"float32")))}}}};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var kr=n(148),Nr=n(72);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Sr={kernelName:vt.ib,inputsToSave:["x","mean","variance","scale"],gradFunc:(t,e,n)=>{const{varianceEpsilon:r}=n,[a,o,s,i]=e,c=null==i?Object(se.a)(1):i,u=Object(Te.c)(o.shape,a.shape),d=[];if(1===o.rank){for(let t=0;t<a.shape.length-1;++t)d.push(a.shape[t]);d.push(1)}const l=Object(pe.a)(a,o),p=Object(ee.a)(t,c),f=Object(kr.a)(Object(Zt.a)(s,Object(se.a)(r))),h=Object(ee.a)(Object(ee.a)(Object(ee.a)(f,f),f),Object(se.a)(-.5));return{x:()=>1===o.rank?Object(xn.a)(Object(ee.a)(Object(ee.a)(t,Object(Nr.a)(Object(xn.a)(f,[1,1,1,o.shape[0]]),d)),c),a.shape):Object(xn.a)(Object(ee.a)(Object(ee.a)(t,f),c),a.shape),mean:()=>{let t=Object(ee.a)(Object(ee.a)(f,Object(se.a)(-1)),p);return 1===o.rank&&(t=Object(kn.a)(t,u)),Object(xn.a)(t,o.shape)},variance:()=>{let t=Object(ee.a)(Object(ee.a)(h,l),p);return 1===o.rank&&(t=Object(kn.a)(t,u)),Object(xn.a)(t,o.shape)},scale:()=>{const e=Object(ee.a)(l,f);let n=Object(ee.a)(t,e);return 1===o.rank&&(n=Object(kn.a)(n,u)),Object(xn.a)(n,o.shape)},offset:()=>{let e=t;return 1===o.rank&&(e=Object(kn.a)(e,u)),Object(xn.a)(e,o.shape)}}}};var Er=n(113);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Tr={kernelName:vt.mb,inputsToSave:["x","indices"],gradFunc:(t,e,n)=>{const[r,a]=e,{axis:o}=n,s=Object(N.I)(o,r.shape)[0];return{x:()=>{const e=r.shape,n=a.size,i=e.slice(0,s),c=i.length,u=e.slice(o,e.length).slice(1),d=u.length,l=Ir(0,c),p=Ir(c+1,c+1+d),f=Ar([i,[n],u]),h=Object(xn.a)(t,f),b=Object(xn.a)(a,[n]),m=Ar([[c],l,p]),g=Object(Ot.a)(h,m);let y=Object(Er.a)(g,b,r.shape[s]);const O=Object(Ee.h)(m);return y=Object(Ot.a)(y,O),y},indices:()=>a}}};function Ir(t,e){const n=[];for(let r=t;r<e;++r)n.push(r);return n}function Ar(t){const e=[];for(let n=0;n<t.length;++n)for(let r=0;r<t[n].length;++r)e.push(t[n][r]);return e}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const _r={kernelName:vt.ob,inputsToSave:["a","b"],gradFunc:(t,e)=>{const[n,r]=e;return{a:()=>Object(ae.a)(n),b:()=>Object(ae.a)(r)}}},Dr={kernelName:vt.qb,gradFunc:t=>({x:()=>Object(W.a)(t,"float32")})},Mr={kernelName:vt.sb,gradFunc:t=>({x:()=>Object(ae.a)(t)})},Fr={kernelName:vt.tb,gradFunc:t=>({x:()=>Object(ae.a)(t)})},$r={kernelName:vt.ub,gradFunc:t=>({x:()=>Object(ae.a)(t)})};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var Rr=n(38);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Pr={kernelName:vt.xb,inputsToSave:["x"],gradFunc:(t,e,n)=>{const[r]=e,{alpha:a}=n,o=Object(Rr.a)(r,0);return{x:()=>Object(Gn.a)(o,t,Object(ee.a)(t,a))}}},Cr={kernelName:vt.Cb,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>Object(te.a)(t,Object(Zt.a)(n,1))}}},Br={kernelName:vt.Bb,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>Object(te.a)(t,Object(W.a)(n,"float32"))}}},Lr={kernelName:vt.Db,inputsToSave:[],outputsToSave:[!0],gradFunc:(t,e,n)=>{const[r]=e,{axis:a}=n;return{logits:()=>{const e=Object(gr.a)(r);return Object(pe.a)(t,Object(ee.a)(Object(kn.a)(t,a,!0),e))}}}};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const zr=Object(yt.b)({localResponseNormalizationBackprop_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e,n,r=5,a=1,o=1,s=.5){const i={x:t,y:e,dy:n},c={depthRadius:r,bias:a,alpha:o,beta:s};return p.a.runKernel(vt.wb,i,c)}}),Vr={kernelName:vt.vb,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(t,e,n)=>{const[r,a]=e,{depthRadius:o,bias:s,alpha:i,beta:c}=n;return{x:()=>zr(r,a,t,o,s,i,c)}}};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var qr=n(65);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ur(t,e,n,r){return e.rank<n.rank&&(e=Object(xn.a)(e,Ee.e(e.shape,r))),t.rank<n.rank&&(t=Object(xn.a)(t,Ee.e(t.shape,r))),{x:()=>Object(ee.a)(t,Object(W.a)(Object(qr.a)(n,e),t.dtype))}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Hr={kernelName:vt.Hb,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(t,e,n)=>{const r=n,{reductionIndices:a}=r,o=e[0],s=Ur(t,e[1],o,N.I(a,o.shape));return{x:()=>s.x()}}};var Wr=n(78);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Gr={kernelName:vt.Nb,inputsToSave:["a","b"],gradFunc:(t,e)=>{const[n,r]=e;return{a:()=>Object(ee.a)(t,Object(W.a)(Object(Un.a)(n,r),"float32")),b:()=>Object(ee.a)(t,Object(W.a)(Object(Wr.a)(n,r),"float32"))}}};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Kr=Object(yt.b)({maxPool3dGrad_:function(t,e,n,r,a,o=[1,1,1],s,i){const c=Object(bt.a)(t,"dy","maxPool3dGrad"),u=Object(bt.a)(e,"input","maxPool3dGrad"),d=Object(bt.a)(n,"output","maxPool3dGrad");let l=c,f=u,h=d,b=!1;4===u.rank&&(b=!0,l=Object(xn.a)(c,[1,c.shape[0],c.shape[1],c.shape[2],c.shape[3]]),f=Object(xn.a)(u,[1,u.shape[0],u.shape[1],u.shape[2],u.shape[3]]),h=Object(xn.a)(d,[1,d.shape[0],d.shape[1],d.shape[2],d.shape[3]])),N.b(5===l.rank,()=>"Error in maxPool3dGrad: dy must be rank 5 but got rank "+l.rank+"."),N.b(5===f.rank,()=>"Error in maxPool3dGrad: input must be rank 5 but got rank "+f.rank+"."),N.b(5===h.rank,()=>"Error in maxPool3dGrad: output must be rank 5 but got rank "+h.rank+"."),N.b(_e.h(a,o),()=>`Error in maxPool3dGrad: Either strides or dilations must be 1. Got strides ${a} and dilations '${o}'`),null!=i&&N.b(N.v(s),()=>`Error in maxPool3dGrad: pad must be an integer when using, dimRoundingMode ${i} but got pad ${s}.`);const m={dy:l,input:f,output:h},g={filterSize:r,strides:a,dilations:o,pad:s,dimRoundingMode:i},y=p.a.runKernel(vt.Kb,m,g);return b?Object(xn.a)(y,[y.shape[1],y.shape[2],y.shape[3],y.shape[4]]):y}}),Yr={kernelName:vt.Jb,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(t,e,n)=>{const[r,a]=e,{filterSize:o,strides:s,dilations:i,pad:c,dimRoundingMode:u}=n,d=null==i?[1,1,1]:i;return{x:()=>Kr(t,r,a,o,s,d,c,u)}}};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Jr=Object(yt.b)({maxPoolGrad_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e,n,r,a,o,s){const i=Object(bt.a)(t,"dy","maxPoolGrad"),c=Object(bt.a)(e,"input","maxPoolGrad"),u=Object(bt.a)(n,"output","maxPoolGrad");N.b(c.rank===i.rank,()=>`Rank of input (${c.rank}) does not match rank of dy (${i.rank})`),N.b(4===i.rank,()=>"Error in maxPoolGrad: dy must be rank 4 but got rank "+i.rank+"."),N.b(4===c.rank,()=>"Error in maxPoolGrad: input must be rank 4 but got rank "+c.rank+"."),null!=s&&N.b(N.v(o),()=>`Error in maxPoolGrad: pad must be an integer when using, dimRoundingMode ${s} but got pad ${o}.`);const d={dy:i,input:c,output:u},l={filterSize:r,strides:a,pad:o,dimRoundingMode:s};return p.a.runKernel(vt.Lb,d,l)}}),Xr={kernelName:vt.Ib,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(t,e,n)=>{const[r,a]=e,{filterSize:o,strides:s,pad:i}=n;return{x:()=>Jr(t,r,a,o,s,i)}}};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var Qr=n(66);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Zr={kernelName:vt.Ob,inputsToSave:["x"],gradFunc:(t,e,n)=>{const[r]=e,{axis:a}=n,o=N.I(a,r.shape),s=Object(Ee.d)(r.shape,o)[1],i=N.N(s);return{x:()=>{const e=r.shape.slice();o.forEach(t=>{e[t]=1});const n=Object(xn.a)(t,e);return Object(te.a)(Object(ee.a)(n,Object(Qr.a)(r.shape,"float32")),i)}}}},ta={kernelName:vt.Pb,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(t,e,n)=>{const r=n,{axis:a}=r,[o,s]=e,i=Ur(t,s,o,N.I(a,o.shape));return{x:()=>i.x()}}},ea={kernelName:vt.Qb,inputsToSave:["a","b"],gradFunc:(t,e)=>{const[n,r]=e;return{a:()=>Object(ee.a)(t,Object(W.a)(Object(Hn.a)(n,r),"float32")),b:()=>Object(ee.a)(t,Object(W.a)(Object(Rr.a)(n,r),"float32"))}}};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var na=n(24);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ra={kernelName:vt.Rb,inputsToSave:["x"],gradFunc:(t,e,n)=>{const r=e[0],{paddings:a}=n,o=a.map(t=>t[0]);return{x:()=>Object(na.a)(t,o,r.shape)}}};var aa=n(102);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const oa={kernelName:vt.Sb,inputsToSave:["a","b"],gradFunc:(t,e)=>{const[n,r]=e,a=Object(Te.a)(n.shape,r.shape);return{a:()=>{const e=Object(Te.c)(n.shape,a);return e.length>0?Object(xn.a)(Object(kn.a)(t,e),n.shape):t},b:()=>{const e=Object(ee.a)(t,Object(jn.a)(Object(aa.a)(Object(te.a)(n,r)))),o=Object(Te.c)(r.shape,a);return o.length>0?Object(xn.a)(Object(kn.a)(e,o),r.shape):e}}}},sa={kernelName:vt.Ub,inputsToSave:["a","b"],gradFunc:(t,e)=>{const[n,r]=e,a=Object(Te.a)(n.shape,r.shape);return{a:()=>{const e=Object(ee.a)(t,Object(W.a)(r,"float32")),o=Object(Te.c)(n.shape,a);return o.length>0?Object(xn.a)(Object(kn.a)(e,o),n.shape):e},b:()=>{const e=Object(ee.a)(t,Object(W.a)(n,"float32")),o=Object(Te.c)(r.shape,a);return o.length>0?Object(xn.a)(Object(kn.a)(e,o),r.shape):e}}}},ia={kernelName:vt.Vb,gradFunc:t=>({x:()=>Object(jn.a)(t)})},ca={kernelName:vt.ac,inputsToSave:["indices"],gradFunc:(t,e)=>{const n=e[0];return{indices:()=>Object(Se.a)(n.shape,"float32")}}},ua={kernelName:vt.bc,gradFunc:t=>({x:()=>Object(ae.a)(t)})};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var da=n(69);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const la={kernelName:vt.cc,saveAllInputs:!0,gradFunc:(t,e,n)=>{const{axis:r}=n;return Object(da.a)(t,r).map(t=>()=>t)}},pa={kernelName:vt.dc,inputsToSave:["x"],gradFunc:(t,e,n)=>{const r=e[0],{paddings:a}=n,o=a.map(t=>t[0]);return{x:()=>Object(na.a)(t,o,r.shape)}}};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var fa=n(59);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ha={kernelName:vt.fc,inputsToSave:["a","b"],outputsToSave:[!0],gradFunc:(t,e)=>{const[n,r,a]=e,o=n,s=r,i=Te.a(o.shape,s.shape);return{a:()=>{const e=Object(W.a)(s,"float32");let n=Object(ee.a)(t,Object(ee.a)(e,Object(le.a)(o,Object(pe.a)(e,Object(se.a)(1)))));const r=Te.c(o.shape,i);return r.length>0&&(n=Object(kn.a)(n,r)),Object(xn.a)(n,o.shape)},b:()=>{const e=Object(Rr.a)(o,0),n=Object(Gn.a)(e,Object(fa.a)(o),Object(ae.a)(o));let r=Object(ee.a)(t,Object(ee.a)(a,n));const c=Te.c(s.shape,i);return c.length>0&&(r=Object(kn.a)(r,c)),Object(xn.a)(r,s.shape)}}}},ba={kernelName:vt.gc,inputsToSave:["x","alpha"],gradFunc:(t,e)=>{const[n,r]=e,a=Object(Rr.a)(n,0);return{x:()=>Object(Gn.a)(a,t,Object(ee.a)(t,r)),alpha:()=>{let e=Object(Gn.a)(a,Object(ae.a)(t),Object(ee.a)(t,n));const o=Object(Te.c)(r.shape,t.shape);return o.length>0&&(e=Object(kn.a)(e,o)),Object(xn.a)(e,r.shape)}}}},ma={kernelName:vt.kc,inputsToSave:["a","b"],gradFunc:(t,e)=>{const[n,r]=e,a=Te.a(n.shape,r.shape);return{a:()=>{const e=Object(te.a)(t,Object(W.a)(r,"float32")),o=Te.c(n.shape,a);return o.length>0?Object(xn.a)(Object(kn.a)(e,o),n.shape):e},b:()=>{let e=Object(ee.a)(t,Object(W.a)(n,"float32"));const o=Te.c(r.shape,a);o.length>0&&(e=Object(xn.a)(Object(kn.a)(e,o),r.shape));const s=Object(re.a)(r);return Object(jn.a)(Object(te.a)(e,Object(W.a)(s,"float32")))}}}},ga={kernelName:vt.lc,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>Object(te.a)(t,Object(jn.a)(Object(re.a)(n)))}}},ya={kernelName:vt.nc,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e,r=Object(ee.a)(Object(Hn.a)(n,6),Object(yn.a)(n));return{x:()=>Object(ee.a)(t,Object(W.a)(r,"float32"))}}},Oa={kernelName:vt.mc,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>Object(ee.a)(t,Object(W.a)(Object(yn.a)(n),"float32"))}}},ja={kernelName:vt.oc,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>Object(xn.a)(t,n.shape)}}},va={kernelName:vt.pc,inputsToSave:["images"],gradFunc:(t,e,n)=>{const[r]=e,a={dy:t,images:r};return{images:()=>p.a.runKernel(vt.qc,a,n)}}},wa={kernelName:vt.rc,inputsToSave:["images"],gradFunc:(t,e,n)=>{const[r]=e,a={dy:t,images:r};return{images:()=>p.a.runKernel(vt.sc,a,n)}}};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var xa=n(41);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ka={kernelName:vt.tc,gradFunc:(t,e,n)=>{const{dims:r}=n,a=Object(N.I)(r,t.shape);return{x:()=>Object(xa.a)(t,a)}}},Na={kernelName:vt.vc,gradFunc:t=>({x:()=>Object(ae.a)(t)})},Sa={kernelName:vt.wc,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>Object(jn.a)(Object(te.a)(t,Object(ee.a)(Object(le.a)(n,1.5),2)))}}};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var Ea=n(79);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ta={kernelName:vt.yc,inputsToSave:["condition"],gradFunc:(t,e)=>{const[n]=e;return{condition:()=>Object(W.a)(Object(ae.a)(n),"float32"),t:()=>Object(ee.a)(t,Object(W.a)(n,t.dtype)),e:()=>Object(ee.a)(t,Object(W.a)(Object(Ea.a)(n),t.dtype))}}},Ia={kernelName:vt.zc,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>{const e=Object(Rr.a)(n,Object(se.a)(0)),r=Object(se.a)(ze),a=Object(se.a)(Ve),o=Object(ee.a)(t,a),s=Object(ee.a)(Object(ee.a)(t,r),Object(gr.a)(Object(W.a)(n,"float32")));return Object(Gn.a)(e,o,s)}}}},Aa={kernelName:vt.Ac,outputsToSave:[!0],gradFunc:(t,e)=>{const[n]=e;return{x:()=>Object(ee.a)(t,Object(ee.a)(n,Object(pe.a)(Object(se.a)(1),n)))}}},_a={kernelName:vt.Bc,gradFunc:t=>({x:()=>Object(ae.a)(t)})};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var Da=n(99);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ma={kernelName:vt.Cc,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>Object(ee.a)(Object(Da.a)(Object(W.a)(n,"float32")),t)}}};var Fa=n(135);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const $a={kernelName:vt.Dc,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>Object(ee.a)(Object(Fa.a)(Object(W.a)(n,"float32")),t)}}};var Ra=n(47);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Pa={kernelName:vt.Ec,inputsToSave:["x"],gradFunc:(t,e,n)=>{const[r]=e,{begin:a,size:o}=n,s=r.shape,[i,c]=qt(r,a,o),u=[];for(let e=0;e<t.rank;e++)u.push([i[e],s[e]-i[e]-c[e]]);return{x:()=>Object(Ra.a)(t,u)}}},Ca={kernelName:vt.Fc,outputsToSave:[!0],gradFunc:(t,e,n)=>{const[r]=e,{dim:a}=n,o=Object(ee.a)(t,r);return{logits:()=>Object(pe.a)(o,Object(ee.a)(Object(kn.a)(o,[a],!0),r))}}};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var Ba=n(71);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const La={kernelName:vt.Gc,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>Object(ee.a)(t,Object(Ba.a)(n))}}};var za=n(76);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Va={kernelName:vt.Hc,gradFunc:(t,e,n)=>{const{blockShape:r,paddings:a}=n;return{x:()=>Object(za.a)(t,r,a)}}};var qa=n(28);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ua={kernelName:vt.Jc,gradFunc:(t,e,n)=>{const{axis:r}=n;return{x:()=>Object(qa.a)(t,r)}}},Ha={kernelName:vt.Kc,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>Object(te.a)(t,Object(ee.a)(Object(ne.a)(Object(W.a)(n,"float32")),2))}}},Wa={kernelName:vt.Lc,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>Object(ee.a)(t,Object(ee.a)(Object(W.a)(n,"float32"),2))}}},Ga={kernelName:vt.Mc,inputsToSave:["a","b"],gradFunc:(t,e)=>{const[n,r]=e,a=Object(se.a)(2);return{a:()=>Object(ee.a)(t,Object(ee.a)(a,Object(pe.a)(n,r))),b:()=>Object(ee.a)(t,Object(ee.a)(a,Object(pe.a)(r,n)))}}},Ka={kernelName:vt.Nc,gradFunc:t=>({x:()=>Object(ae.a)(t)})},Ya={kernelName:vt.Pc,inputsToSave:["a","b"],gradFunc:(t,e)=>{const[n,r]=e,a=Te.a(n.shape,r.shape);return{a:()=>{let e=t;const r=Te.c(n.shape,a);return r.length>0&&(e=Object(kn.a)(e,r)),Object(xn.a)(e,n.shape)},b:()=>{let e=t;const n=Te.c(r.shape,a);return n.length>0&&(e=Object(kn.a)(e,n)),Object(xn.a)(Object(jn.a)(e),r.shape)}}}},Ja={kernelName:vt.Qc,inputsToSave:["x"],gradFunc:(t,e,n)=>{const[r]=e,a=r.shape.slice(),{axis:o}=n;Object(N.I)(o,r.shape).forEach(t=>{a[t]=1});const s=Object(xn.a)(t,a),i=Object(ee.a)(s,Object(Qr.a)(r.shape,"float32"));return{x:()=>i}}},Xa={kernelName:vt.Rc,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>Object(te.a)(t,Object(re.a)(Object(Da.a)(n)))}}},Qa={kernelName:vt.Sc,outputsToSave:[!0],gradFunc:(t,e)=>{const[n]=e;return{x:()=>Object(ee.a)(Object(pe.a)(Object(se.a)(1),Object(re.a)(n)),t)}}},Za={kernelName:vt.Tc,inputsToSave:["x"],gradFunc:(t,e,n)=>{const[r]=e,{reps:a}=n;return{x:()=>{let e=Object(ae.a)(r);if(1===r.rank)for(let n=0;n<a[0];++n)e=Object(Zt.a)(e,Object(na.a)(t,[n*r.shape[0]],[r.shape[0]]));else if(2===r.rank)for(let n=0;n<a[0];++n)for(let o=0;o<a[1];++o)e=Object(Zt.a)(e,Object(na.a)(t,[n*r.shape[0],o*r.shape[1]],[r.shape[0],r.shape[1]]));else if(3===r.rank)for(let n=0;n<a[0];++n)for(let o=0;o<a[1];++o)for(let s=0;s<a[2];++s)e=Object(Zt.a)(e,Object(na.a)(t,[n*r.shape[0],o*r.shape[1],s*r.shape[2]],[r.shape[0],r.shape[1],r.shape[2]]));else{if(4!==r.rank)throw new Error("Gradient for tile operation is not implemented for rank-"+r.rank+" tensors yet.");for(let n=0;n<a[0];++n)for(let o=0;o<a[1];++o)for(let s=0;s<a[2];++s)for(let i=0;i<a[3];++i)e=Object(Zt.a)(e,Object(na.a)(t,[n*r.shape[0],o*r.shape[1],s*r.shape[2],i*r.shape[3]],[r.shape[0],r.shape[1],r.shape[2],r.shape[3]]))}return e}}}},to={kernelName:vt.Vc,gradFunc:(t,e,n)=>{const r=n,{perm:a}=r,o=Ee.h(a);return{x:()=>Object(Ot.a)(t,o)}}};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var eo=n(51);
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const no={kernelName:vt.Xc,gradFunc:(t,e,n)=>{const r=n,{axis:a}=r;return{value:()=>Object(eo.a)(t,a)}}};var ro=n(52),ao=n(77);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const oo=[On,vn,wn,Nn,Sn,En,Tn,In,An,_n,Dn,Mn,$n,Pn,Cn,Ln,zn,Vn,qn,Kn,Yn,Xn,nr,tr,or,ir,ur,lr,hr,br,ma,mr,yr,Or,jr,vr,xr,wr,Sr,Tr,_r,Dr,Mr,Fr,$r,Pr,Cr,Br,Lr,Vr,Hr,Hr,Gr,Yr,Xr,Zr,ta,ea,ra,oa,sa,ia,ca,ua,la,pa,pa,ha,ba,ga,ya,Oa,ja,va,wa,ka,Na,Sa,Ta,Ia,Aa,_a,Ma,$a,Pa,Ca,La,Va,Va,Ua,Ua,Ha,Ga,Wa,Ka,Ya,Ja,Xa,Qa,Za,to,no,{kernelName:vt.Yc,inputsToSave:["segmentIds"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>function(t,e){const n=Object(be.a)(e,Object(ae.a)(e)),r=Object(ao.a)(t,n);let a=Object(Un.a)(e,Object(se.a)(0,"int32"));const o=r.rank-a.rank;for(let t=0;t<o;++t)a=Object(ro.a)(a,t+1);a=Object(Wn.a)(a,Object(Qr.a)(r.shape,"bool"));const s=Object(ae.a)(r);return Object(Gn.a)(a,r,s)}(t,n)}}},{kernelName:vt.Zc,gradFunc:t=>({x:()=>Object(ae.a)(t)})}];
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */for(const t of oo)Object(wt.e)(t);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Y.a.prototype.abs=function(){return this.throwIfDisposed(),Object(he.a)(this)};var so=n(166);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Y.a.prototype.acos=function(){return this.throwIfDisposed(),Object(so.a)(this)};var io=n(167);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Y.a.prototype.acosh=function(){return this.throwIfDisposed(),Object(io.a)(this)};var co=n(198);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Y.a.prototype.addStrict=function(t){return this.throwIfDisposed(),Object(co.a)(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Y.a.prototype.add=function(t){return this.throwIfDisposed(),Object(Zt.a)(this,t)};var uo=n(128);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Y.a.prototype.all=function(t,e){return this.throwIfDisposed(),Object(uo.a)(this,t,e)};var lo=n(129);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Y.a.prototype.any=function(t,e){return this.throwIfDisposed(),Object(lo.a)(this,t,e)};var po=n(130);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Y.a.prototype.argMax=function(t){return this.throwIfDisposed(),Object(po.a)(this,t)};var fo=n(131);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Y.a.prototype.argMin=function(t){return this.throwIfDisposed(),Object(fo.a)(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Y.a.prototype.asScalar=function(){return this.throwIfDisposed(),Object(N.b)(1===this.size,()=>"The array must have only 1 element."),Object(xn.a)(this,[])},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Y.a.prototype.asType=function(t){return this.throwIfDisposed(),Object(W.a)(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Y.a.prototype.as1D=function(){return this.throwIfDisposed(),Object(xn.a)(this,[this.size])},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Y.a.prototype.as2D=function(t,e){return this.throwIfDisposed(),Object(xn.a)(this,[t,e])},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Y.a.prototype.as3D=function(t,e,n){return this.throwIfDisposed(),Object(xn.a)(this,[t,e,n])},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Y.a.prototype.as4D=function(t,e,n,r){return this.throwIfDisposed(),Object(xn.a)(this,[t,e,n,r])},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Y.a.prototype.as5D=function(t,e,n,r,a){return this.throwIfDisposed(),Object(xn.a)(this,[t,e,n,r,a])};var ho=n(169);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Y.a.prototype.asin=function(){return this.throwIfDisposed(),Object(ho.a)(this)};var bo=n(170);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Y.a.prototype.asinh=function(){return this.throwIfDisposed(),Object(bo.a)(this)};var mo=n(171);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Y.a.prototype.atan=function(){return this.throwIfDisposed(),Object(mo.a)(this)};var go=n(132);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Y.a.prototype.atan2=function(t){return this.throwIfDisposed(),Object(go.a)(this,t)};var yo=n(172);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Y.a.prototype.atanh=function(){return this.throwIfDisposed(),Object(yo.a)(this)};var Oo=n(98);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Y.a.prototype.avgPool=function(t,e,n,r){return this.throwIfDisposed(),Object(Oo.a)(this,t,e,n,r)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Y.a.prototype.batchToSpaceND=function(t,e){return this.throwIfDisposed(),Object(za.a)(this,t,e)};var jo=n(70);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Y.a.prototype.batchNorm=function(t,e,n,r,a){return this.throwIfDisposed(),Object(jo.a)(this,t,e,n,r,a)};var vo=n(88);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Y.a.prototype.broadcastTo=function(t){return this.throwIfDisposed(),Object(vo.a)(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Y.a.prototype.cast=function(t){return this.throwIfDisposed(),Object(W.a)(this,t)};var wo=n(174);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Y.a.prototype.ceil=function(){return this.throwIfDisposed(),Object(wo.a)(this)};var xo=n(175);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Y.a.prototype.clipByValue=function(t,e){return this.throwIfDisposed(),Object(xo.a)(this,t,e)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Y.a.prototype.concat=function(t,e){return this.throwIfDisposed(),t instanceof Y.a&&(t=[t]),Object(qa.a)([this,...t],e)};var ko=n(133);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Y.a.prototype.conv1d=function(t,e,n,r,a,o){return this.throwIfDisposed(),Object(ko.a)(this,t,e,n,r,a,o)};var No=n(134);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Y.a.prototype.conv2dTranspose=function(t,e,n,r,a){return this.throwIfDisposed(),Object(No.a)(this,t,e,n,r,a)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Y.a.prototype.conv2d=function(t,e,n,r,a,o){return this.throwIfDisposed(),Object(er.a)(this,t,e,n,r,a,o)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Y.a.prototype.cos=function(){return this.throwIfDisposed(),Object(Da.a)(this)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Y.a.prototype.cosh=function(){return this.throwIfDisposed(),Object(Fa.a)(this)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Y.a.prototype.cumsum=function(t,e,n){return this.throwIfDisposed(),Object(dr.a)(this,t,e,n)};var So=n(136);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Y.a.prototype.depthToSpace=function(t,e){return this.throwIfDisposed(),Object(So.a)(this,t,e)};var Eo=n(64);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Y.a.prototype.depthwiseConv2D=function(t,e,n,r,a,o){return Object(Qt.b)("depthwiseConv2D is deprecated, use depthwiseConv2d instead"),this.throwIfDisposed(),Object(Eo.a)(this,t,e,n,r,a,o)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Y.a.prototype.depthwiseConv2d=function(t,e,n,r,a,o){return this.throwIfDisposed(),Object(Eo.a)(this,t,e,n,r,a,o)};var To=n(137);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Y.a.prototype.dilation2d=function(t,e,n,r,a){return this.throwIfDisposed(),Object(To.a)(this,t,e,n,r,a)};var Io=n(138);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Y.a.prototype.divNoNan=function(t){return this.throwIfDisposed(),Object(Io.a)(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Y.a.prototype.divStrict=function(t){return this.throwIfDisposed(),Object(co.b)(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Y.a.prototype.div=function(t){return this.throwIfDisposed(),Object(te.a)(this,t)};var Ao=n(139);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Y.a.prototype.dot=function(t){return this.throwIfDisposed(),Object(Ao.a)(this,t)};var _o=n(101);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Y.a.prototype.elu=function(){return this.throwIfDisposed(),Object(_o.a)(this)};var Do=n(197);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Y.a.prototype.equalStrict=function(t){return this.throwIfDisposed(),Object(Do.a)(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Y.a.prototype.equal=function(t){return this.throwIfDisposed(),Object(qr.a)(this,t)};var Mo=n(177);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Y.a.prototype.erf=function(){return this.throwIfDisposed(),Object(Mo.a)(this)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Y.a.prototype.exp=function(){return this.throwIfDisposed(),Object(gr.a)(this)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Y.a.prototype.expandDims=function(t){return this.throwIfDisposed(),Object(ro.a)(this,t)};var Fo=n(178);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Y.a.prototype.expm1=function(){return this.throwIfDisposed(),Object(Fo.a)(this)};var $o=n(111);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Y.a.prototype.fft=function(){return this.throwIfDisposed(),Object($o.a)(this)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Y.a.prototype.flatten=function(){return this.throwIfDisposed(),Object(xn.a)(this,[this.size])},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Y.a.prototype.floor=function(){return this.throwIfDisposed(),Object(aa.a)(this)};var Ro=n(96);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Y.a.prototype.floorDiv=function(t){return this.throwIfDisposed(),Object(Ro.a)(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Y.a.prototype.gather=function(t,e){return this.throwIfDisposed(),Object(ao.a)(this,t,e)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Y.a.prototype.greaterEqualStrict=function(t){return this.throwIfDisposed(),Object(Do.b)(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Y.a.prototype.greaterEqual=function(t){return this.throwIfDisposed(),Object(Un.a)(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Y.a.prototype.greaterStrict=function(t){return this.throwIfDisposed(),Object(Do.c)(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Y.a.prototype.greater=function(t){return this.throwIfDisposed(),Object(Rr.a)(this,t)};var Po=n(92);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Y.a.prototype.ifft=function(){return this.throwIfDisposed(),Object(Po.a)(this)};var Co=n(153);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Y.a.prototype.irfft=function(){return this.throwIfDisposed(),Object(Co.a)(this)};var Bo=n(179);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Y.a.prototype.isFinite=function(){return this.throwIfDisposed(),Object(Bo.a)(this)};var Lo=n(180);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Y.a.prototype.isInf=function(){return this.throwIfDisposed(),Object(Lo.a)(this)};var zo=n(181);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Y.a.prototype.isNaN=function(){return this.throwIfDisposed(),Object(zo.a)(this)};var Vo=n(104);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Y.a.prototype.leakyRelu=function(t){return this.throwIfDisposed(),Object(Vo.a)(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Y.a.prototype.lessEqualStrict=function(t){return this.throwIfDisposed(),Object(Do.d)(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Y.a.prototype.lessEqual=function(t){return this.throwIfDisposed(),Object(Hn.a)(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Y.a.prototype.lessStrict=function(t){return this.throwIfDisposed(),Object(Do.e)(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Y.a.prototype.less=function(t){return this.throwIfDisposed(),Object(Wr.a)(this,t)};var qo=n(140);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Y.a.prototype.localResponseNormalization=function(t,e,n,r){return this.throwIfDisposed(),Object(qo.a)(this,t,e,n,r)};var Uo=n(183);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Y.a.prototype.logSigmoid=function(){return this.throwIfDisposed(),Object(Uo.a)(this)};var Ho=n(184);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Y.a.prototype.logSoftmax=function(t){return this.throwIfDisposed(),Object(Ho.a)(this,t)};var Wo=n(105);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Y.a.prototype.logSumExp=function(t,e){return this.throwIfDisposed(),Object(Wo.a)(this,t,e)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Y.a.prototype.log=function(){return this.throwIfDisposed(),Object(fa.a)(this)};var Go=n(141);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Y.a.prototype.log1p=function(){return this.throwIfDisposed(),Object(Go.a)(this)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Y.a.prototype.logicalAnd=function(t){return this.throwIfDisposed(),Object(Wn.a)(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Y.a.prototype.logicalNot=function(){return this.throwIfDisposed(),Object(Ea.a)(this)};var Ko=n(106);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Y.a.prototype.logicalOr=function(t){return this.throwIfDisposed(),Object(Ko.a)(this,t)};var Yo=n(143);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Y.a.prototype.logicalXor=function(t){return this.throwIfDisposed(),Object(Yo.a)(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Y.a.prototype.matMul=function(t,e,n){return this.throwIfDisposed(),Object(mt.a)(this,t,e,n)};var Jo=n(107);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Y.a.prototype.maxPool=function(t,e,n,r){return this.throwIfDisposed(),Object(Jo.a)(this,t,e,n,r)};var Xo=n(57);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Y.a.prototype.max=function(t,e){return this.throwIfDisposed(),Object(Xo.a)(this,t,e)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Y.a.prototype.maximumStrict=function(t){return this.throwIfDisposed(),Object(co.c)(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Y.a.prototype.maximum=function(t){return this.throwIfDisposed(),Object(be.a)(this,t)};var Qo=n(74);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Y.a.prototype.mean=function(t,e){return this.throwIfDisposed(),Object(Qo.a)(this,t,e)};var Zo=n(89);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Y.a.prototype.min=function(t,e){return this.throwIfDisposed(),Object(Zo.a)(this,t,e)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Y.a.prototype.minimumStrict=function(t){return this.throwIfDisposed(),Object(co.d)(this,t)};var ts=n(80);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Y.a.prototype.minimum=function(t){return this.throwIfDisposed(),Object(ts.a)(this,t)};var es=n(144);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Y.a.prototype.mirrorPad=function(t,e){return this.throwIfDisposed(),Object(es.a)(this,t,e)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Y.a.prototype.modStrict=function(t){return this.throwIfDisposed(),Object(co.e)(this,t)};var ns=n(108);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Y.a.prototype.mod=function(t){return this.throwIfDisposed(),Object(ns.a)(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Y.a.prototype.mulStrict=function(t){return this.throwIfDisposed(),Object(co.f)(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Y.a.prototype.mul=function(t){return this.throwIfDisposed(),Object(ee.a)(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Y.a.prototype.neg=function(){return this.throwIfDisposed(),Object(jn.a)(this)};var rs=n(114);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Y.a.prototype.norm=function(t,e,n){return this.throwIfDisposed(),Object(rs.a)(this,t,e,n)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Y.a.prototype.notEqualStrict=function(t){return this.throwIfDisposed(),Object(Do.f)(this,t)};var as=n(81);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Y.a.prototype.notEqual=function(t){return this.throwIfDisposed(),Object(as.a)(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Y.a.prototype.oneHot=function(t,e=1,n=0){return this.throwIfDisposed(),Object(gt.a)(this,t,e,n)};var os=n(188);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Y.a.prototype.onesLike=function(){return this.throwIfDisposed(),Object(os.a)(this)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Y.a.prototype.pad=function(t,e){return this.throwIfDisposed(),Object(Ra.a)(this,t,e)};var ss=n(145);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Y.a.prototype.pool=function(t,e,n,r,a){return this.throwIfDisposed(),Object(ss.a)(this,t,e,n,r,a)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Y.a.prototype.powStrict=function(t){return this.throwIfDisposed(),Object(co.g)(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Y.a.prototype.pow=function(t){return this.throwIfDisposed(),Object(le.a)(this,t)};var is=n(109);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Y.a.prototype.prelu=function(t){return this.throwIfDisposed(),Object(is.a)(this,t)};var cs=n(146);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Y.a.prototype.prod=function(t,e){return this.throwIfDisposed(),Object(cs.a)(this,t,e)};var us=n(189);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Y.a.prototype.reciprocal=function(){return this.throwIfDisposed(),Object(us.a)(this)};var ds=n(67);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Y.a.prototype.relu=function(){return this.throwIfDisposed(),Object(ds.a)(this)};var ls=n(110);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Y.a.prototype.relu6=function(){return this.throwIfDisposed(),Object(ls.a)(this)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Y.a.prototype.reshapeAs=function(t){return this.throwIfDisposed(),Object(xn.a)(this,t.shape)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Y.a.prototype.reshape=function(t){return this.throwIfDisposed(),Object(xn.a)(this,t)};var ps=n(161);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Y.a.prototype.resizeBilinear=function(t,e,n){return this.throwIfDisposed(),Object(ps.a)(this,t,e,n)};var fs=n(160);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Y.a.prototype.resizeNearestNeighbor=function(t,e,n){return this.throwIfDisposed(),Object(fs.a)(this,t,e,n)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Y.a.prototype.reverse=function(t){return this.throwIfDisposed(),Object(xa.a)(this,t)};var hs=n(112);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Y.a.prototype.rfft=function(){return this.throwIfDisposed(),Object(hs.a)(this)};var bs=n(190);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Y.a.prototype.round=function(){return this.throwIfDisposed(),Object(bs.a)(this)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Y.a.prototype.rsqrt=function(){return this.throwIfDisposed(),Object(kr.a)(this)};var ms=n(149);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Y.a.prototype.selu=function(){return this.throwIfDisposed(),Object(ms.a)(this)};var gs=n(150);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Y.a.prototype.separableConv2d=function(t,e,n,r,a,o){return this.throwIfDisposed(),Object(gs.a)(this,t,e,n,r,a,o)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Y.a.prototype.sigmoid=function(){return this.throwIfDisposed(),Object(Ba.a)(this)};var ys=n(192);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Y.a.prototype.sign=function(){return this.throwIfDisposed(),Object(ys.a)(this)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Y.a.prototype.sin=function(){return this.throwIfDisposed(),Object(sr.a)(this)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Y.a.prototype.sinh=function(){return this.throwIfDisposed(),Object(cr.a)(this)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Y.a.prototype.slice=function(t,e){return this.throwIfDisposed(),Object(na.a)(this,t,e)};var Os=n(193);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Y.a.prototype.softmax=function(t){return this.throwIfDisposed(),Object(Os.a)(this,t)};var js=n(142);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Y.a.prototype.softplus=function(){return this.throwIfDisposed(),Object(js.a)(this)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Y.a.prototype.spaceToBatchND=function(t,e){return this.throwIfDisposed(),Object(Bn.a)(this,t,e)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Y.a.prototype.split=function(t,e){return this.throwIfDisposed(),Object(Jn.a)(this,t,e)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Y.a.prototype.sqrt=function(){return this.throwIfDisposed(),Object(ne.a)(this)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Y.a.prototype.square=function(){return this.throwIfDisposed(),Object(re.a)(this)};var vs=n(83);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Y.a.prototype.squaredDifference=function(t){return this.throwIfDisposed(),Object(vs.a)(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Y.a.prototype.squaredDifferenceStrict=function(t){return this.throwIfDisposed(),Object(co.h)(this,t)};var ws=n(84);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Y.a.prototype.squeeze=function(t){return this.throwIfDisposed(),Object(ws.a)(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Y.a.prototype.stack=function(t,e){this.throwIfDisposed();const n=t instanceof Y.a?[this,t]:[this,...t];return Object(eo.a)(n,e)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Y.a.prototype.step=function(t){return this.throwIfDisposed(),Object(yn.a)(this,t)};var xs=n(194);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Y.a.prototype.stridedSlice=function(t,e,n,r,a,o,s,i){return this.throwIfDisposed(),Object(xs.a)(this,t,e,n,r,a,o,s,i)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Y.a.prototype.subStrict=function(t){return this.throwIfDisposed(),Object(co.i)(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Y.a.prototype.sub=function(t){return this.throwIfDisposed(),Object(pe.a)(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Y.a.prototype.sum=function(t,e){return this.throwIfDisposed(),Object(kn.a)(this,t,e)};var ks=n(195);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Y.a.prototype.tan=function(){return this.throwIfDisposed(),Object(ks.a)(this)};var Ns=n(120);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Y.a.prototype.tanh=function(){return this.throwIfDisposed(),Object(Ns.a)(this)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Y.a.prototype.tile=function(t){return this.throwIfDisposed(),Object(Nr.a)(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Y.a.prototype.toBool=function(){return this.throwIfDisposed(),Object(W.a)(this,"bool")},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Y.a.prototype.toFloat=function(){return this.throwIfDisposed(),Object(W.a)(this,"float32")},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Y.a.prototype.toInt=function(){return this.throwIfDisposed(),Object(W.a)(this,"int32")};var Ss=n(155);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Y.a.prototype.topk=function(t,e){return this.throwIfDisposed(),Object(Ss.a)(this,t,e)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Y.a.prototype.transpose=function(t){return this.throwIfDisposed(),Object(Ot.a)(this,t)};var Es=n(156);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Y.a.prototype.unique=function(t){return this.throwIfDisposed(),Object(Es.a)(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Y.a.prototype.unsortedSegmentSum=function(t,e){return this.throwIfDisposed(),Object(Er.a)(this,t,e)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Y.a.prototype.unstack=function(t){return this.throwIfDisposed(),Object(da.a)(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Y.a.prototype.where=function(t,e){return this.throwIfDisposed(),Object(Gn.a)(t,this,e)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Y.a.prototype.zerosLike=function(){return this.throwIfDisposed(),Object(ae.a)(this)}},function(t,e,n){"use strict";n.r(e),n.d(e,"createScalarValue",(function(){return o})),n.d(e,"toTypedArray",(function(){return s})),n.d(e,"now",(function(){return i})),n.d(e,"fetch",(function(){return c})),n.d(e,"encodeString",(function(){return u})),n.d(e,"decodeString",(function(){return d}));var r=n(22),a=n(7);
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function o(t,e){return"string"===e?u(t):s([t],e)}function s(t,e){if("string"===e)throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(t)&&(t=a.m(t)),Object(r.c)().getBool("DEBUG")&&a.h(t,e),function(t,e){return t instanceof Float32Array&&"float32"===e||t instanceof Int32Array&&"int32"===e||t instanceof Uint8Array&&"bool"===e}(t,e))return t;if(null==e||"float32"===e||"complex64"===e)return new Float32Array(t);if("int32"===e)return new Int32Array(t);if("bool"===e){const e=new Uint8Array(t.length);for(let n=0;n<e.length;++n)0!==Math.round(t[n])&&(e[n]=1);return e}throw new Error("Unknown data type "+e)}function i(){return Object(r.c)().platform.now()}function c(t,e){return Object(r.c)().platform.fetch(t,e)}function u(t,e="utf-8"){return e=e||"utf-8",Object(r.c)().platform.encode(t,e)}function d(t,e="utf-8"){return e=e||"utf-8",Object(r.c)().platform.decode(t,e)}n.d(e,"shuffle",(function(){return a.M})),n.d(e,"clamp",(function(){return a.i})),n.d(e,"nearestLargerEven",(function(){return a.H})),n.d(e,"sum",(function(){return a.Q})),n.d(e,"randUniform",(function(){return a.J})),n.d(e,"distSquared",(function(){return a.l})),n.d(e,"assert",(function(){return a.b})),n.d(e,"assertShapesMatch",(function(){return a.e})),n.d(e,"assertNonNull",(function(){return a.d})),n.d(e,"flatten",(function(){return a.m})),n.d(e,"sizeFromShape",(function(){return a.N})),n.d(e,"isScalarShape",(function(){return a.y})),n.d(e,"arraysEqual",(function(){return a.a})),n.d(e,"isInt",(function(){return a.v})),n.d(e,"tanh",(function(){return a.R})),n.d(e,"sizeToSquarishShape",(function(){return a.O})),n.d(e,"createShuffledIndices",(function(){return a.k})),n.d(e,"rightPad",(function(){return a.L})),n.d(e,"repeatedTry",(function(){return a.K})),n.d(e,"inferFromImplicitShape",(function(){return a.s})),n.d(e,"parseAxisParam",(function(){return a.I})),n.d(e,"squeezeShape",(function(){return a.P})),n.d(e,"getTypedArrayFromDType",(function(){return a.o})),n.d(e,"getArrayFromDType",(function(){return a.n})),n.d(e,"checkConversionForErrors",(function(){return a.h})),n.d(e,"isValidDtype",(function(){return a.B})),n.d(e,"hasEncodingLoss",(function(){return a.p})),n.d(e,"isTypedArray",(function(){return a.A})),n.d(e,"bytesPerElement",(function(){return a.g})),n.d(e,"bytesFromStringArray",(function(){return a.f})),n.d(e,"isString",(function(){return a.z})),n.d(e,"isBoolean",(function(){return a.t})),n.d(e,"isNumber",(function(){return a.w})),n.d(e,"inferDtype",(function(){return a.r})),n.d(e,"isFunction",(function(){return a.u})),n.d(e,"nearestDivisor",(function(){return a.G})),n.d(e,"computeStrides",(function(){return a.j})),n.d(e,"toNestedArray",(function(){return a.S})),n.d(e,"makeOnesTypedArray",(function(){return a.D})),n.d(e,"makeZerosTypedArray",(function(){return a.F})),n.d(e,"makeZerosNestedTypedArray",(function(){return a.E})),n.d(e,"assertNonNegativeIntegerDimensions",(function(){return a.c})),n.d(e,"locToIndex",(function(){return a.C})),n.d(e,"indexToLoc",(function(){return a.q})),n.d(e,"isPromise",(function(){return a.x}))},function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(4),a=n(1),o=n(0),s=n(7),i=n(3);const c=Object(i.b)({cast_:
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e){const n=Object(o.a)(t,"x","cast");if(!s.B(e))throw new Error("Failed to cast to unknown dtype "+e);if("string"===e&&"string"!==n.dtype||"string"!==e&&"string"===n.dtype)throw new Error("Only strings can be casted to strings");const i={x:n},c={dtype:e};return r.a.runKernel(a.w,i,c)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(4),a=n(1),o=n(21),s=n(0),i=n(3);const c=Object(i.b)({add_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e){let n=Object(s.a)(t,"a","add"),i=Object(s.a)(e,"b","add");[n,i]=Object(o.makeTypesMatch)(n,i);const c={a:n,b:i};return r.a.runKernel(a.d,c)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(4),a=n(1),o=n(21),s=n(0),i=n(3);const c=Object(i.b)({sub_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e){let n=Object(s.a)(t,"a","sub"),i=Object(s.a)(e,"b","sub");[n,i]=Object(o.makeTypesMatch)(n,i);const c={a:n,b:i};return r.a.runKernel(a.Pc,c)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n(4),a=n(1),o=n(21),s=n(0),i=n(96),c=n(3);const u=Object(c.b)({div_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e){let n=Object(s.a)(t,"a","div"),c=Object(s.a)(e,"b","div");if([n,c]=Object(o.makeTypesMatch)(n,c),"int32"===n.dtype&&"int32"===c.dtype)return Object(i.a)(n,c);const u={a:n,b:c};return r.a.runKernel(a.kc,u,{})}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(7),a=n(42);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function o(t,e){if((Object(r.A)(t)&&"string"!==e||Array.isArray(t))&&"complex64"!==e)throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if("string"===e&&Object(r.A)(t)&&!(t instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return Object(a.a)(t,[],[],e)}},function(t,e,n){"use strict";
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function r(t,e){const n=t.length,r=[];for(let a=0;a<n;a++){const o=n-1-a,s=t[o]||1;(e[e.length-1-a]||1)>1&&1===s&&r.unshift(o)}return r}function a(t,e){const n=[];for(let r=0;r<e.length;r++){const a=t[t.length-r-1],o=e.length-r-1,s=e[o];(null==a||1===a&&s>1)&&n.unshift(o)}return n}function o(t,e){const n=[],r=Math.max(t.length,e.length);for(let a=0;a<r;a++){let r=t[t.length-a-1];null==r&&(r=1);let o=e[e.length-a-1];if(null==o&&(o=1),1===r)n.unshift(o);else if(1===o)n.unshift(r);else{if(r!==o){throw Error(`Operands could not be broadcast together with shapes ${t} and ${e}.`)}n.unshift(r)}}return n}n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}))},function(t,e,n){"use strict";n.d(e,"b",(function(){return a.a})),n.d(e,"c",(function(){return o.a})),n.d(e,"d",(function(){return s.a})),n.d(e,"e",(function(){return i.a})),n.d(e,"f",(function(){return c.a})),n.d(e,"h",(function(){return u.a})),n.d(e,"i",(function(){return d.a})),n.d(e,"j",(function(){return l.a})),n.d(e,"k",(function(){return p.a})),n.d(e,"l",(function(){return f.a})),n.d(e,"m",(function(){return h.a})),n.d(e,"n",(function(){return b.a})),n.d(e,"o",(function(){return m.a})),n.d(e,"p",(function(){return g.a})),n.d(e,"q",(function(){return y.a})),n.d(e,"r",(function(){return O.a})),n.d(e,"s",(function(){return T})),n.d(e,"x",(function(){return I.a})),n.d(e,"t",(function(){return A.a})),n.d(e,"u",(function(){return D})),n.d(e,"v",(function(){return M})),n.d(e,"w",(function(){return F})),n.d(e,"y",(function(){return P})),n.d(e,"A",(function(){return C.a})),n.d(e,"B",(function(){return B.a})),n.d(e,"C",(function(){return L.a})),n.d(e,"D",(function(){return z.a})),n.d(e,"E",(function(){return V.a})),n.d(e,"F",(function(){return q.a})),n.d(e,"G",(function(){return U.a})),n.d(e,"H",(function(){return v.a})),n.d(e,"I",(function(){return H})),n.d(e,"J",(function(){return W})),n.d(e,"K",(function(){return G})),n.d(e,"L",(function(){return K})),n.d(e,"M",(function(){return Y.a})),n.d(e,"N",(function(){return J.a})),n.d(e,"O",(function(){return X.a})),n.d(e,"P",(function(){return Q.a})),n.d(e,"Q",(function(){return tt})),n.d(e,"R",(function(){return et.a})),n.d(e,"S",(function(){return nt.a})),n.d(e,"U",(function(){return rt.a})),n.d(e,"V",(function(){return at})),n.d(e,"W",(function(){return ot.a})),n.d(e,"X",(function(){return st.a})),n.d(e,"Y",(function(){return it})),n.d(e,"Z",(function(){return ct.a})),n.d(e,"ab",(function(){return ut.a})),n.d(e,"bb",(function(){return dt.a})),n.d(e,"db",(function(){return lt.a})),n.d(e,"fb",(function(){return pt.a})),n.d(e,"hb",(function(){return ft.a})),n.d(e,"jb",(function(){return ht.a})),n.d(e,"kb",(function(){return bt.a})),n.d(e,"lb",(function(){return mt.a})),n.d(e,"mb",(function(){return gt.a})),n.d(e,"nb",(function(){return jt})),n.d(e,"pb",(function(){return vt.a})),n.d(e,"qb",(function(){return wt.a})),n.d(e,"rb",(function(){return xt.a})),n.d(e,"tb",(function(){return kt.a})),n.d(e,"vb",(function(){return Nt.a})),n.d(e,"wb",(function(){return St.a})),n.d(e,"Ab",(function(){return Et.a})),n.d(e,"Eb",(function(){return Tt.a})),n.d(e,"Fb",(function(){return It.a})),n.d(e,"Gb",(function(){return At.a})),n.d(e,"Hb",(function(){return _t.a})),n.d(e,"Ib",(function(){return Dt.a})),n.d(e,"Jb",(function(){return Mt.a})),n.d(e,"Nb",(function(){return Ft.a})),n.d(e,"Ob",(function(){return $t.a})),n.d(e,"Pb",(function(){return Rt.a})),n.d(e,"Qb",(function(){return Pt.a})),n.d(e,"Rb",(function(){return Ct.a})),n.d(e,"Sb",(function(){return Bt.a})),n.d(e,"Tb",(function(){return Lt.a})),n.d(e,"Ub",(function(){return zt.a})),n.d(e,"Vb",(function(){return Vt.a})),n.d(e,"Wb",(function(){return qt.a})),n.d(e,"Xb",(function(){return Ut.a})),n.d(e,"Zb",(function(){return w.a})),n.d(e,"ac",(function(){return Ht.a})),n.d(e,"bc",(function(){return Wt.a})),n.d(e,"cc",(function(){return Gt.a})),n.d(e,"dc",(function(){return Kt.a})),n.d(e,"ec",(function(){return Yt.a})),n.d(e,"gc",(function(){return Jt.a})),n.d(e,"hc",(function(){return Xt.a})),n.d(e,"ic",(function(){return Qt.a})),n.d(e,"kc",(function(){return Zt.a})),n.d(e,"lc",(function(){return te.a})),n.d(e,"nc",(function(){return ae})),n.d(e,"pc",(function(){return x.a})),n.d(e,"rc",(function(){return oe})),n.d(e,"sc",(function(){return se.a})),n.d(e,"tc",(function(){return ie.a})),n.d(e,"vc",(function(){return ce.a})),n.d(e,"xc",(function(){return ue.a})),n.d(e,"yc",(function(){return de.a})),n.d(e,"zc",(function(){return le.a})),n.d(e,"Bc",(function(){return pe})),n.d(e,"Cc",(function(){return fe.a})),n.d(e,"Dc",(function(){return he})),n.d(e,"Ec",(function(){return be})),n.d(e,"Fc",(function(){return me})),n.d(e,"Gc",(function(){return ge})),n.d(e,"Hc",(function(){return ye.a})),n.d(e,"Ic",(function(){return Oe.a})),n.d(e,"Kc",(function(){return je.a})),n.d(e,"Lc",(function(){return ve.a})),n.d(e,"Mc",(function(){return we.a})),n.d(e,"Nc",(function(){return xe})),n.d(e,"Oc",(function(){return Ne})),n.d(e,"Pc",(function(){return Se})),n.d(e,"Qc",(function(){return Ee.a})),n.d(e,"Rc",(function(){return Te.a})),n.d(e,"Sc",(function(){return Ie.a})),n.d(e,"Tc",(function(){return Ae.a})),n.d(e,"Uc",(function(){return _e.a})),n.d(e,"Vc",(function(){return De.a})),n.d(e,"Wc",(function(){return yt.a})),n.d(e,"Xc",(function(){return Me.a})),n.d(e,"Yc",(function(){return Fe})),n.d(e,"Zc",(function(){return $e})),n.d(e,"ad",(function(){return Re})),n.d(e,"bd",(function(){return Pe})),n.d(e,"dd",(function(){return Ce.a})),n.d(e,"ed",(function(){return Be.a})),n.d(e,"fd",(function(){return Le.a})),n.d(e,"hd",(function(){return ze.a})),n.d(e,"id",(function(){return Ve.a})),n.d(e,"jd",(function(){return qe.a})),n.d(e,"kd",(function(){return N.a})),n.d(e,"ld",(function(){return Ue.a})),n.d(e,"nd",(function(){return He.a})),n.d(e,"od",(function(){return We.a})),n.d(e,"pd",(function(){return S.a})),n.d(e,"qd",(function(){return Ge})),n.d(e,"rd",(function(){return Ke})),n.d(e,"sd",(function(){return Ye})),n.d(e,"td",(function(){return Je})),n.d(e,"ud",(function(){return Xe.a})),n.d(e,"vd",(function(){return Qe.a})),n.d(e,"wd",(function(){return Ze.a})),n.d(e,"ob",(function(){return tn.a})),n.d(e,"zb",(function(){return en.a})),n.d(e,"Db",(function(){return nn.a})),n.d(e,"cd",(function(){return rn.a})),n.d(e,"zd",(function(){return an.a})),n.d(e,"Ad",(function(){return on.a})),n.d(e,"Bd",(function(){return ne.a})),n.d(e,"Cd",(function(){return sn.a})),n.d(e,"Ed",(function(){return cn.a})),n.d(e,"Fd",(function(){return un.a})),n.d(e,"Gd",(function(){return dn.a})),n.d(e,"Hd",(function(){return ln.a})),n.d(e,"Id",(function(){return re.a})),n.d(e,"Kd",(function(){return pn.a})),n.d(e,"Ld",(function(){return fn.a})),n.d(e,"Md",(function(){return E.a})),n.d(e,"Nd",(function(){return hn.a})),n.d(e,"Od",(function(){return bn.a})),n.d(e,"Pd",(function(){return gn})),n.d(e,"Qd",(function(){return yn.a})),n.d(e,"Rd",(function(){return On})),n.d(e,"Sd",(function(){return jn})),n.d(e,"Td",(function(){return vn})),n.d(e,"Ud",(function(){return Ot.a})),n.d(e,"Vd",(function(){return wn.a})),n.d(e,"Xd",(function(){return xn.a})),n.d(e,"Yd",(function(){return kn.a})),n.d(e,"Zd",(function(){return Nn.a})),n.d(e,"ae",(function(){return Sn.a})),n.d(e,"be",(function(){return En})),n.d(e,"ce",(function(){return Tn.a})),n.d(e,"de",(function(){return In.a})),n.d(e,"ee",(function(){return An.a})),n.d(e,"fe",(function(){return _n.a})),n.d(e,"z",(function(){return Dn})),n.d(e,"ib",(function(){return Mn.a})),n.d(e,"xb",(function(){return Mn.b})),n.d(e,"yb",(function(){return Mn.c})),n.d(e,"Kb",(function(){return Mn.d})),n.d(e,"Lb",(function(){return Mn.e})),n.d(e,"wc",(function(){return Mn.f})),n.d(e,"g",(function(){return Fn.a})),n.d(e,"cb",(function(){return Fn.b})),n.d(e,"fc",(function(){return Fn.c})),n.d(e,"jc",(function(){return Fn.d})),n.d(e,"mc",(function(){return Fn.e})),n.d(e,"qc",(function(){return Fn.f})),n.d(e,"Jc",(function(){return Fn.g})),n.d(e,"Dd",(function(){return Fn.h})),n.d(e,"Jd",(function(){return Fn.i})),n.d(e,"Wd",(function(){return $n.a})),n.d(e,"uc",(function(){return Rn.a})),n.d(e,"oc",(function(){return Cn})),n.d(e,"gd",(function(){return Bn.a})),n.d(e,"xd",(function(){return Ln.a})),n.d(e,"ub",(function(){return zn.a})),n.d(e,"eb",(function(){return qn})),n.d(e,"gb",(function(){return Un})),n.d(e,"T",(function(){return Hn})),n.d(e,"Cb",(function(){return Wn})),n.d(e,"Ac",(function(){return k.b})),n.d(e,"a",(function(){return k.a})),n.d(e,"Bb",(function(){return Cr})),n.d(e,"Mb",(function(){return Br})),n.d(e,"Yb",(function(){return Lr})),n.d(e,"yd",(function(){return Rr})),n.d(e,"sb",(function(){return r})),n.d(e,"md",(function(){return Pr}));var r={};n.r(r),n.d(r,"conv2d",(function(){return Zn})),n.d(r,"depthwiseConv2d",(function(){return nr})),n.d(r,"matMul",(function(){return rr}));var a=n(36),o=n(166),s=n(167),i=n(12),c=n(168),u=n(128),d=n(129),l=n(130),p=n(131),f=n(169),h=n(170),b=n(171),m=n(132),g=n(172),y=n(98),O=n(173),j=n(0),v=n(28),w=n(25),x=n(8),k=n(3),N=n(71),S=n(24),E=n(120);const T=Object(k.b)({basicLSTMCell_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e,n,r,a,o){const s=Object(j.a)(t,"forgetBias","basicLSTMCell"),c=Object(j.a)(e,"lstmKernel","basicLSTMCell"),u=Object(j.a)(n,"lstmBias","basicLSTMCell"),d=Object(j.a)(r,"data","basicLSTMCell"),l=Object(j.a)(a,"c","basicLSTMCell"),p=Object(j.a)(o,"h","basicLSTMCell"),f=Object(v.a)([d,p],1),h=Object(w.a)(f,c),b=Object(i.a)(h,u),m=b.shape[0],g=b.shape[1]/4,y=[m,g],O=Object(S.a)(b,[0,0],y),k=Object(S.a)(b,[0,g],y),T=Object(S.a)(b,[0,2*g],y),I=Object(S.a)(b,[0,3*g],y),A=Object(i.a)(Object(x.a)(Object(N.a)(O),Object(E.a)(k)),Object(x.a)(l,Object(N.a)(Object(i.a)(s,T))));return[A,Object(x.a)(Object(E.a)(A),Object(N.a)(I))]}});var I=n(76),A=n(70),_=n(7);const D=Object(k.b)({batchNorm2d_:function(t,e,n,r,a,o){const s=Object(j.a)(t,"x","batchNorm"),i=Object(j.a)(e,"mean","batchNorm"),c=Object(j.a)(n,"variance","batchNorm");let u,d;return null!=a&&(u=Object(j.a)(a,"scale","batchNorm")),null!=r&&(d=Object(j.a)(r,"offset","batchNorm")),_.b(2===s.rank,()=>"Error in batchNorm2D: x must be rank 2 but got rank "+s.rank+"."),_.b(2===i.rank||1===i.rank,()=>`Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank ${i.rank}.`),_.b(2===c.rank||1===c.rank,()=>`Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank ${c.rank}.`),null!=u&&_.b(2===u.rank||1===u.rank,()=>`Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank ${u.rank}.`),null!=d&&_.b(2===d.rank||1===d.rank,()=>`Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank ${d.rank}.`),Object(A.a)(s,i,c,d,u,o)}});const M=Object(k.b)({batchNorm3d_:function(t,e,n,r,a,o){const s=Object(j.a)(t,"x","batchNorm"),i=Object(j.a)(e,"mean","batchNorm"),c=Object(j.a)(n,"variance","batchNorm");let u,d;return null!=a&&(u=Object(j.a)(a,"scale","batchNorm")),null!=r&&(d=Object(j.a)(r,"offset","batchNorm")),_.b(3===s.rank,()=>"Error in batchNorm3D: x must be rank 3 but got rank "+s.rank+"."),_.b(3===i.rank||1===i.rank,()=>`Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank ${i.rank}.`),_.b(3===c.rank||1===c.rank,()=>`Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank ${c.rank}.`),null!=u&&_.b(3===u.rank||1===u.rank,()=>`Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank ${u.rank}.`),null!=d&&_.b(3===d.rank||1===d.rank,()=>`Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank ${d.rank}.`),Object(A.a)(s,i,c,d,u,o)}});const F=Object(k.b)({batchNorm4d_:function(t,e,n,r,a,o){const s=Object(j.a)(t,"x","batchNorm"),i=Object(j.a)(e,"mean","batchNorm"),c=Object(j.a)(n,"variance","batchNorm");let u,d;return null!=a&&(u=Object(j.a)(a,"scale","batchNorm")),null!=r&&(d=Object(j.a)(r,"offset","batchNorm")),_.b(4===s.rank,()=>"Error in batchNorm4D: x must be rank 4 but got rank "+s.rank+"."),_.b(4===i.rank||1===i.rank,()=>`Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank ${i.rank}.`),_.b(4===c.rank||1===c.rank,()=>`Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank ${c.rank}.`),null!=u&&_.b(4===u.rank||1===u.rank,()=>`Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank ${u.rank}.`),null!=d&&_.b(4===d.rank||1===d.rank,()=>`Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank ${d.rank}.`),Object(A.a)(s,i,c,d,u,o)}});var $=n(4),R=n(1);const P=Object(k.b)({bincount_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e,n){const r=Object(j.a)(t,"x","bincount"),a=Object(j.a)(e,"weights","bincount");_.b("int32"===r.dtype,()=>"Error in bincount: input dtype must be int32, but got "+r.dtype),_.b(n>=0,()=>`size must be non-negative, but got ${n}.`),_.b(a.size===r.size||0===a.size,()=>`Error in bincount: weights must have the same size as input or0-length, but got input shape: ${r.shape}, weights shape: `+a.shape+".");const o={x:r,weights:a},s={size:n};return $.a.runKernel(R.u,o,s)}});var C=n(88),B=n(39),L=n(11),z=n(174),V=n(175),q=n(56),U=n(49);const H=Object(k.b)({concat1d_:function(t){return Object(v.a)(t,0)}});const W=Object(k.b)({concat2d_:function(t,e){return Object(v.a)(t,e)}});const G=Object(k.b)({concat3d_:function(t,e){return Object(v.a)(t,e)}});const K=Object(k.b)({concat4d_:function(t,e){return Object(v.a)(t,e)}});var Y=n(133),J=n(54),X=n(134),Q=n(176),Z=n(159);const tt=Object(k.b)({conv3dTranspose_:function(t,e,n,r,a){const o=Object(j.a)(t,"x","conv3dTranspose"),s=Object(j.a)(e,"filter","conv3dTranspose");return Object(Z.a)(n,o,s,r,a)}});var et=n(99),nt=n(135),rt=n(100);const at=Object(k.b)({denseBincount_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e,n,r=!1){const a=Object(j.a)(t,"x","denseBincount"),o=Object(j.a)(e,"weights","denseBincount");_.b("int32"===a.dtype,()=>"Error in denseBincount: input dtype must be int32, but got "+a.dtype),_.b(a.rank<=2,()=>`Error in denseBincount: input must be at most rank 2, but got rank ${a.rank}.`),_.b(n>=0,()=>`size must be non-negative, but got ${n}.`),_.b(o.size===a.size||0===o.size,()=>`Error in denseBincount: weights must have the same shape as x or 0-length, but got x shape: ${a.shape}, weights shape: `+o.shape+".");const s={x:a,weights:o},i={size:n,binaryOutput:r};return $.a.runKernel(R.M,s,i)}});var ot=n(136),st=n(64);const it=Object(k.b)({diag_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const e={x:Object(j.a)(t,"x","diag")};return $.a.runKernel(R.R,e)}});var ct=n(137),ut=n(14),dt=n(138),lt=n(139),pt=n(101),ft=n(65),ht=n(177),bt=n(35),mt=n(52),gt=n(178),yt=n(6),Ot=n(72);const jt=Object(k.b)({eye_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e,n,r="float32"){null==e&&(e=t);const a=Object(B.a)([t,e],r),o=t<=e?t:e;for(let t=0;t<o;++t)a.set(1,t,t);const s=Object(yt.a)(a.toTensor(),[t,e]);if(null==n)return s;if(1===n.length)return Object(Ot.a)(Object(mt.a)(s,0),[n[0],1,1]);if(2===n.length)return Object(Ot.a)(Object(mt.a)(Object(mt.a)(s,0),0),[n[0],n[1],1,1]);if(3===n.length)return Object(Ot.a)(Object(mt.a)(Object(mt.a)(Object(mt.a)(s,0),0),0),[n[0],n[1],n[2],1,1]);throw new Error(`eye() currently supports only 1D and 2D batchShapes, but received ${n.length}D.`)}});var vt=n(97),wt=n(102),xt=n(96),kt=n(77),Nt=n(38),St=n(45),Et=n(103),Tt=n(179),It=n(180),At=n(181),_t=n(104),Dt=n(78),Mt=n(46),Ft=n(182),$t=n(140),Rt=n(59),Pt=n(141),Ct=n(183),Bt=n(184),Lt=n(105),zt=n(50),Vt=n(79),qt=n(106),Ut=n(143),Ht=n(57),Wt=n(107),Gt=n(185),Kt=n(186),Yt=n(63),Jt=n(74),Xt=n(89),Qt=n(80),Zt=n(144),te=n(108),ee=n(33),ne=n(23),re=n(13);const ae=Object(k.b)({moments_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e=null,n=!1){t=Object(j.a)(t,"x","moments");const r=Object(_.I)(e,t.shape),a=Object(Jt.a)(t,r,n);let o=a.shape;n||(o=Object(ee.e)(a.shape,r));const s=Object(ne.a)(Object(re.a)(Object(L.a)(t,"float32"),Object(yt.a)(a,o)));return{mean:a,variance:Object(Jt.a)(s,r,n)}}});const oe=Object(k.b)({multiRNNCell_:function(t,e,n,r){const a=Object(j.a)(e,"data","multiRNNCell"),o=Object(j.b)(n,"c","multiRNNCell"),s=Object(j.b)(r,"h","multiRNNCell");let i=a;const c=[];for(let e=0;e<t.length;e++){const n=t[e](i,o[e],s[e]);c.push(n[0]),c.push(n[1]),i=n[1]}const u=[],d=[];for(let t=0;t<c.length;t+=2)u.push(c[t]),d.push(c[t+1]);return[u,d]}});var se=n(187),ie=n(27),ce=n(81),ue=n(90),de=n(66),le=n(188);const pe=Object(k.b)({outerProduct_:function(t,e){const n=Object(j.a)(t,"v1","outerProduct"),r=Object(j.a)(e,"v2","outerProduct");_.b(1===n.rank&&1===r.rank,()=>`Error in outerProduct: inputs must be rank 1, but got ranks ${n.rank} and ${r.rank}.`);const a=Object(yt.a)(n,[-1,1]),o=Object(yt.a)(r,[1,-1]);return Object(w.a)(a,o)}});var fe=n(47);const he=Object(k.b)({pad1d_:function(t,e,n=0){return Object(_.b)(2===e.length,()=>"Invalid number of paddings. Must be length of 2."),Object(fe.a)(t,[e],n)}});const be=Object(k.b)({pad2d_:function(t,e,n=0){return Object(_.b)(2===e.length&&2===e[0].length&&2===e[1].length,()=>"Invalid number of paddings. Must be length of 2 each."),Object(fe.a)(t,e,n)}});const me=Object(k.b)({pad3d_:function(t,e,n=0){return Object(_.b)(3===e.length&&2===e[0].length&&2===e[1].length&&2===e[2].length,()=>"Invalid number of paddings. Must be length of 2 each."),Object(fe.a)(t,e,n)}});const ge=Object(k.b)({pad4d_:function(t,e,n=0){return Object(_.b)(4===e.length&&2===e[0].length&&2===e[1].length&&2===e[2].length&&2===e[3].length,()=>"Invalid number of paddings. Must be length of 2 each."),Object(fe.a)(t,e,n)}});var ye=n(145),Oe=n(40),je=n(109),ve=n(127),we=n(146);const xe=Object(k.b)({rand_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e,n){const r=Object(_.N)(t);let a=null;if(null==n||"float32"===n)a=new Float32Array(r);else if("int32"===n)a=new Int32Array(r);else{if("bool"!==n)throw new Error("Unknown data type "+n);a=new Uint8Array(r)}for(let t=0;t<r;t++)a[t]=e();return $.a.makeTensor(a,t,n)}});var ke=n(86);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ne=Object(k.b)({randomGamma_:function(t,e,n=1,r="float32",a){if(null==n&&(n=1),null==r&&(r="float32"),"float32"!==r&&"int32"!==r)throw new Error("Unsupported data type "+r);const o=new ke.b(e,n,r,a),s=Object(B.a)(t,r);for(let t=0;t<s.values.length;t++)s.values[t]=o.nextValue();return s.toTensor()}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Se=Object(k.b)({randomNormal_:function(t,e=0,n=1,r,a){if(null!=r&&"bool"===r)throw new Error("Unsupported data type "+r);const o=new ke.a(e,n,r,!1,a),s=Object(B.a)(t,r);for(let t=0;t<s.values.length;t++)s.values[t]=o.nextValue();return s.toTensor()}});var Ee=n(147),Te=n(121),Ie=n(91),Ae=n(189),_e=n(67),De=n(110),Me=n(41);const Fe=Object(k.b)({reverse1d_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const e=Object(j.a)(t,"x","reverse");return _.b(1===e.rank,()=>`Error in reverse1D: x must be rank 1 but got rank ${e.rank}.`),Object(Me.a)(e,0)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const $e=Object(k.b)({reverse2d_:function(t,e){const n=Object(j.a)(t,"x","reverse");return _.b(2===n.rank,()=>`Error in reverse2D: x must be rank 2 but got rank ${n.rank}.`),Object(Me.a)(n,e)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Re=Object(k.b)({reverse3d_:function(t,e){const n=Object(j.a)(t,"x","reverse");return _.b(3===n.rank,()=>`Error in reverse3D: x must be rank 3 but got rank ${n.rank}.`),Object(Me.a)(n,e)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Pe=Object(k.b)({reverse4d_:function(t,e){const n=Object(j.a)(t,"x","reverse");return _.b(4===n.rank,()=>`Error in reverse4D: x must be rank 4 but got rank ${n.rank}.`),Object(Me.a)(n,e)}});var Ce=n(190),Be=n(148),Le=n(15),ze=n(149),Ve=n(150),qe=n(191),Ue=n(192),He=n(151),We=n(152);const Ge=Object(k.b)({slice1d_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e,n){const r=Object(j.a)(t,"x","slice1d");return _.b(1===r.rank,()=>`slice1d expects a rank-1 tensor, but got a rank-${r.rank} tensor`),Object(S.a)(r,[e],[n])}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ke=Object(k.b)({slice2d_:function(t,e,n){const r=Object(j.a)(t,"x","slice2d");return _.b(2===r.rank,()=>`slice2d expects a rank-2 tensor, but got a rank-${r.rank} tensor`),Object(S.a)(r,e,n)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ye=Object(k.b)({slice3d_:function(t,e,n){const r=Object(j.a)(t,"x","slice3d");return _.b(3===r.rank,()=>`slice3d expects a rank-3 tensor, but got a rank-${r.rank} tensor`),Object(S.a)(r,e,n)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Je=Object(k.b)({slice4d_:function(t,e,n){const r=Object(j.a)(t,"x","slice4d");return _.b(4===r.rank,()=>`slice4d expects a rank-4 tensor, but got a rank-${r.rank} tensor`),Object(S.a)(r,e,n)}});var Xe=n(193),Qe=n(142),Ze=n(82),tn=n(111),en=n(92),nn=n(153),rn=n(112),an=n(60),on=n(32),sn=n(83),cn=n(84),un=n(51),dn=n(68),ln=n(194),pn=n(18),fn=n(195),hn=n(85),bn=n(61),mn=n(42);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function gn(t,e,n){if(Object(_.d)(t),null!=e&&2!==e.length)throw new Error("tensor2d() requires shape to have two numbers");const r=Object(j.c)(t,n);if(2!==r.length&&1!==r.length)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(1===r.length&&null==e)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return Object(mn.a)(t,e,r,n)}var yn=n(154);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function On(t,e,n){if(Object(_.d)(t),null!=e&&4!==e.length)throw new Error("tensor4d() requires shape to have four numbers");const r=Object(j.c)(t,n);if(4!==r.length&&1!==r.length)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(1===r.length&&null==e)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return Object(mn.a)(t,e,r,n)}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jn(t,e,n){if(Object(_.d)(t),null!=e&&5!==e.length)throw new Error("tensor5d() requires shape to have five numbers");const r=Object(j.c)(t,n);if(5!==r.length&&1!==r.length)throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(1===r.length&&null==e)throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");return Object(mn.a)(t,e,r,n)}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vn(t,e,n){if(Object(_.d)(t),null!=e&&6!==e.length)throw new Error("tensor6d() requires shape to have six numbers");const r=Object(j.c)(t,n);if(6!==r.length&&1!==r.length)throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");if(1===r.length&&null==e)throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");return e=e||r,Object(mn.a)(t,e,r,n)}var wn=n(155),xn=n(196),kn=n(156),Nn=n(113),Sn=n(69);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function En(t,e=!0,n,r){return $.a.makeVariable(t,e,n,r)}var Tn=n(31),In=n(157),An=n(55),_n=n(20);const Dn=
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
async function(t,e,n){const r=Object(j.a)(t,"tensor","boolMask"),a=Object(j.a)(e,"mask","boolMask","bool"),o=null==n?0:n,s=a.rank,i=r.shape;_.b(s>0,()=>"mask cannot be scalar"),_.e(i.slice(o,o+s),a.shape,"mask's shape must match the first K dimensions of tensor's shape,");let c=1;for(let t=o;t<o+s;t++)c*=i[t];const u=i.slice(0,o).concat([c],i.slice(o+s)),d=Object(yt.a)(r,u),l=Object(yt.a)(a,[-1]),p=await Object(In.a)(l),f=Object(cn.a)(p,[1]),h=Object(kt.a)(d,f,o);return t!==r&&r.dispose(),e!==a&&a.dispose(),f.dispose(),d.dispose(),l.dispose(),p.dispose(),h};var Mn=n(197),Fn=n(198),$n=n(43),Rn=n(114),Pn=n(21);const Cn=Object(k.b)({movingAverage_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e,n,r,a=!0){const o=Object(j.a)(t,"v","movingAverage"),s=Object(j.a)(e,"x","movingAverage"),c=Object(j.a)(n,"decay","movingAverage");Object(Pn.assertTypesMatch)(o,s),_.b(_.a(o.shape,s.shape),()=>"Shape mismatch in v and x");const u=Object(Le.a)(1),d=Object(re.a)(u,c);let l=Object(x.a)(Object(re.a)(s,o),d);if(a){_.b(null!=r,()=>"When using zeroDebias: true, step is required.");const t=Object(j.a)(r,"step","movingAverage");l=Object(ut.a)(l,Object(re.a)(u,Object(Oe.a)(c,t)))}return Object(i.a)(o,l)}});var Bn=n(199),Ln=n(202),zn=n(200),Vn=n(5);const qn=Object(k.b)({dropout_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e,n,r){const a=Object(j.a)(t,"x","dropout");if(_.b("float32"===a.dtype,()=>`x has to be a floating point tensor since it's going to be scaled, but got a ${a.dtype} tensor instead.`),_.b(e>=0&&e<1,()=>`rate must be a float in the range [0, 1), but got ${e}.`),0===e)return t instanceof Vn.a?a.clone():a;const o=
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e){if(null==e)return t.shape.slice();if(_.a(t.shape,e))return e;if(t.shape.length===e.length){const n=[];for(let r=0;r<t.shape.length;r++)null==e[r]&&null!=t.shape[r]?n.push(t.shape[r]):n.push(e[r]);return n}return e}(a,n),s=1-e,c=Object(ut.a)(Object(wt.a)(Object(i.a)(Object(Ee.a)(o,0,1,"float32",r),s)),s);return Object(x.a)(a,c)}});
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Un(t){return Math.floor(Math.pow(2,Math.ceil(Math.log(t)/Math.log(2))))}function Hn(t,e,n){const r=1-t%2,a=new Float32Array(t);for(let o=0;o<t;++o){const s=2*Math.PI*o/(t+r-1);a[o]=e-n*Math.cos(s)}return Object(bn.a)(a,"float32")}
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Wn=async function(t,e,n=1){const r=Object(j.a)(t,"predictions","inTopK"),a=Object(j.a)(e,"targets","inTopK");Object(_.b)(r.rank>1,()=>"inTopK() expects the predictions to be of rank 2 or higher, but got "+r.rank),Object(_.b)(r.rank-1===a.rank,()=>`predictions rank should be 1 larger than targets rank, but got predictions rank ${r.rank} and targets rank ${a.rank}`),Object(_.e)(r.shape.slice(0,r.shape.length-1),a.shape,"predictions's shape should be align with the targets' shape, except the last dimension.");const o=r.shape[r.shape.length-1];Object(_.b)(n>0&&n<=o,()=>`'k' passed to inTopK() must be > 0 && <= the predictions last dimension (${o}), but got ${n}`);const s=await r.data(),i=await a.data(),[c,u]=[s.length/o,o],d=Object(_.o)("bool",c);for(let t=0;t<c;t++){const e=t*u,r=s.subarray(e,e+u),a=[];for(let t=0;t<r.length;t++)a.push({value:r[t],index:t});a.sort((t,e)=>e.value-t.value),d[t]=0;for(let e=0;e<n;e++)if(a[e].index===i[t]){d[t]=1;break}}return t!==r&&r.dispose(),e!==a&&a.dispose(),Object(hn.a)(d,a.shape,"bool")};var Gn=n(29),Kn=n(16),Yn=n(117),Jn=n(115),Xn=n(26),Qn=n(37);const Zn=Object(k.b)({fusedConv2d_:
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function({x:t,filter:e,strides:n,pad:r,dataFormat:a="NHWC",dilations:o=[1,1],dimRoundingMode:s,bias:c,activation:u="linear",preluActivationWeights:d,leakyreluAlpha:l}){if(u=u||"linear",!1===Object(Qn.d)($.a.state.gradientDepth,u)){let p=Object(J.a)(t,e,n,r,a,o,s);return null!=c&&(p=Object(i.a)(p,c)),Object(Qn.a)(p,u,d,l)}const p=Object(j.a)(t,"x","conv2d"),f=Object(j.a)(e,"filter","conv2d");let h=p,b=!1;3===p.rank&&(b=!0,h=Object(yt.a)(p,[1,p.shape[0],p.shape[1],p.shape[2]])),_.b(4===h.rank,()=>"Error in fused conv2d: input must be rank 4, but got rank "+h.rank+"."),_.b(4===f.rank,()=>"Error in fused conv2d: filter must be rank 4, but got rank "+f.rank+"."),null!=s&&_.b(_.v(r),()=>`Error in fused conv2d: pad must be an integer when using, dimRoundingMode ${s} but got pad ${r}.`),_.b(h.shape[3]===f.shape[2],()=>`Error in conv2d: depth of input (${h.shape[3]}) must match input depth for filter ${f.shape[2]}.`),_.b(Xn.h(n,o),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${n} and dilations '${o}'`),_.b("NHWC"===a,()=>`Error in conv2d: got dataFormat of ${a} but only NHWC is currently supported.`);const m=Xn.a(h.shape,f.shape,n,o,r,s);let g,y;null!=c&&(g=Object(j.a)(c,"bias","fused conv2d"),[g]=Object(Pn.makeTypesMatch)(g,p),Kn.a(m.outShape,g.shape)),null!=d&&(y=Object(j.a)(d,"prelu weights","fused conv2d"));const O=(t,e)=>{const[a,s,i,c]=e,d=Object(Qn.c)(t,i,u);_.b(Xn.i(o),()=>`Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${o}'`);const l=[Object(Jn.a)(s.shape,d,a,n,r),Object(Yn.a)(s,d,a.shape,n,r)];if(null!=c){const t=Object(Qn.b)(c,d);l.push(t)}return l},v={x:h,filter:f,bias:g,preluActivationWeights:y},w={strides:n,pad:r,dataFormat:a,dilations:o,dimRoundingMode:s,activation:u,leakyreluAlpha:l};if(null==c){return Object(Gn.a)((t,e,n)=>{let r=$.a.runKernel(R.jb,v,w);return n([e,t,r]),b&&(r=Object(yt.a)(r,[r.shape[1],r.shape[2],r.shape[3]])),{value:r,gradFunc:O}})(h,f)}return Object(Gn.a)((t,e,n,r)=>{let a=$.a.runKernel(R.jb,v,w);return r([e,t,a,n]),b&&(a=Object(yt.a)(a,[a.shape[1],a.shape[2],a.shape[3]])),{value:a,gradFunc:O}})(h,f,g)}});var tr=n(163),er=n(162);const nr=Object(k.b)({fusedDepthwiseConv2d_:
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function({x:t,filter:e,strides:n,pad:r,dataFormat:a="NHWC",dilations:o=[1,1],dimRoundingMode:s,bias:c,activation:u="linear",preluActivationWeights:d,leakyreluAlpha:l}){if(!1===Object(Qn.d)($.a.state.gradientDepth,u)){let p=Object(st.a)(t,e,n,r,a,o,s);return null!=c&&(p=Object(i.a)(p,c)),Object(Qn.a)(p,u,d,l)}const p=Object(j.a)(t,"x","depthwiseConv2d"),f=Object(j.a)(e,"filter","depthwiseConv2d");let h=p,b=!1;3===p.rank&&(b=!0,h=Object(yt.a)(p,[1,p.shape[0],p.shape[1],p.shape[2]])),_.b(4===h.rank,()=>`Error in fused depthwiseConv2d: input must be rank 4, but got rank ${h.rank}.`),_.b(4===f.rank,()=>`Error in fused depthwiseConv2d: filter must be rank 4, but got rank ${f.rank}.`),_.b(h.shape[3]===f.shape[2],()=>`Error in fused depthwiseConv2d: number of input channels (${h.shape[3]}) must match the inChannels dimension in filter ${f.shape[2]}.`),null==o&&(o=[1,1]),_.b(Xn.h(n,o),()=>`Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides ${n} and dilations '${o}'`),null!=s&&_.b(_.v(r),()=>`Error in fused depthwiseConv2d: pad must be an integer when using dimRoundingMode ${s} but got pad ${r}.`);const m=Xn.a(h.shape,f.shape,n,o,r,s,!0);let g,y;null!=c&&(g=Object(j.a)(c,"bias","fused conv2d"),[g]=Object(Pn.makeTypesMatch)(g,p),Kn.a(m.outShape,g.shape)),null!=d&&(y=Object(j.a)(d,"prelu weights","fused depthwiseConv2d"));const O=(t,e)=>{_.b(Xn.i(o),()=>`Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '${o}'`);const[a,i,c,d]=e,l=Object(Qn.c)(t,c,u),p=Object(er.a)(i.shape,l,a,n,r,o,s),f=Object(tr.a)(i,l,a.shape,n,r,o,s);if(null!=d){return[p,f,Object(Qn.b)(g,l)]}return[p,f]},v={x:h,filter:f,bias:g,preluActivationWeights:y},w={strides:n,pad:r,dataFormat:a,dilations:o,dimRoundingMode:s,activation:u,leakyreluAlpha:l};if(null==c){return Object(Gn.a)((t,e,n)=>{let r=$.a.runKernel(R.kb,v,w);return n([e,t,r]),b&&(r=Object(yt.a)(r,[r.shape[1],r.shape[2],r.shape[3]])),{value:r,gradFunc:O}})(h,f)}return Object(Gn.a)((t,e,n,r)=>{let a=$.a.runKernel(R.kb,v,w);return r([e,t,a,n]),b&&(a=Object(yt.a)(a,[a.shape[1],a.shape[2],a.shape[3]])),{value:a,gradFunc:O}})(h,f,g)}});
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const rr=Object(k.b)({fusedMatMul_:function({a:t,b:e,transposeA:n=!1,transposeB:r=!1,bias:a,activation:o="linear",preluActivationWeights:s,leakyreluAlpha:c}){if(!1===Object(Qn.d)($.a.state.gradientDepth,o)){let u=Object(w.a)(t,e,n,r);return null!=a&&(u=Object(i.a)(u,a)),Object(Qn.a)(u,o,s,c)}let u=Object(j.a)(t,"a","fused matMul"),d=Object(j.a)(e,"b","fused matMul");[u,d]=Object(Pn.makeTypesMatch)(u,d);const l=n?u.shape[u.rank-2]:u.shape[u.rank-1],p=r?d.shape[d.rank-1]:d.shape[d.rank-2],f=n?u.shape[u.rank-1]:u.shape[u.rank-2],h=r?d.shape[d.rank-2]:d.shape[d.rank-1],b=u.shape.slice(0,-2),m=d.shape.slice(0,-2),g=_.N(b),y=_.N(m);_.b(u.rank>=2&&d.rank>=2&&u.rank===d.rank,()=>`Error in fused matMul: inputs must have the same rank of at least 2, got ranks ${u.rank} and ${d.rank}.`),_.b(_.a(b,m),()=>`Error in fused matMul: outer dimensions (${b}) and (${m}) of Tensors with shapes ${u.shape} and `+d.shape+" must match."),_.b(l===p,()=>`Error in fused matMul: inner shapes (${l}) and (${p}) of Tensors with shapes ${u.shape} and ${d.shape} and transposeA=${n} and transposeB=${r} must match.`);const O=u.shape.slice(0,-2).concat([f,h]),v=n?Object(yt.a)(u,[g,l,f]):Object(yt.a)(u,[g,f,l]),x=r?Object(yt.a)(d,[y,h,p]):Object(yt.a)(d,[y,p,h]);let k,N;null!=a&&(k=Object(j.a)(a,"bias","fused matMul"),[k]=Object(Pn.makeTypesMatch)(k,u),Kn.a(O,k.shape)),null!=s&&(N=Object(j.a)(s,"prelu weights","fused matMul"));const S=(t,e)=>{const[s,i,c,u]=e,d=Object(Qn.c)(Object(yt.a)(t,c.shape),c,o);let l,p;if(n||r?!n&&r?(l=Object(w.a)(d,i,!1,!1),p=Object(w.a)(d,s,!0,!1)):n&&!r?(l=Object(w.a)(i,d,!1,!0),p=Object(w.a)(s,d,!1,!1)):(l=Object(w.a)(i,d,!0,!0),p=Object(w.a)(d,s,!0,!0)):(l=Object(w.a)(d,i,!1,!0),p=Object(w.a)(s,d,!0,!1)),null!=a){return[l,p,Object(Qn.b)(u,d)]}return[l,p]},E={a:v,b:x,bias:k,preluActivationWeights:N},T={transposeA:n,transposeB:r,activation:o,leakyreluAlpha:c};if(null==a){return Object(Gn.a)((t,e,n)=>{const r=$.a.runKernel(R.ad,E,T);return n([t,e,r]),{value:Object(yt.a)(r,O),gradFunc:S}})(v,x)}return Object(Gn.a)((t,e,n,r)=>{const a=$.a.runKernel(R.ad,E,T);return r([t,e,a,n]),{value:Object(yt.a)(a,O),gradFunc:S}})(v,x,k)}});
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ar=Object(k.b)({hammingWindow_:function(t){return Hn(t,.54,.46)}});
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const or=Object(k.b)({hannWindow_:function(t){return Hn(t,.5,.5)}});
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const sr=Object(k.b)({frame_:function(t,e,n,r=!1,a=0){let o=0;const s=[];for(;o+e<=t.size;)s.push(Object(S.a)(t,o,e)),o+=n;if(r)for(;o<t.size;){const r=o+e-t.size,i=Object(v.a)([Object(S.a)(t,o,e-r),Object(vt.a)([r],a)]);s.push(i),o+=n}return 0===s.length?gn([],[0,e]):Object(yt.a)(Object(v.a)(s),[s.length,e])}});
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ir=Object(k.b)({stft_:function(t,e,n,r,a=or){null==r&&(r=Un(e));const o=sr(t,e,n),s=Object(x.a)(o,a(e)),i=[];for(let t=0;t<o.shape[0];t++)i.push(Object(rn.a)(Object(S.a)(s,[t,0],[1,e]),r));return Object(v.a)(i)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const cr=Object(k.b)({cropAndResize_:function(t,e,n,r,a="bilinear",o=0){const s=Object(j.a)(t,"image","cropAndResize"),i=Object(j.a)(e,"boxes","cropAndResize","float32"),c=Object(j.a)(n,"boxInd","cropAndResize","int32"),u=i.shape[0];_.b(4===s.rank,()=>`Error in cropAndResize: image must be rank 4,but got rank ${s.rank}.`),_.b(2===i.rank&&4===i.shape[1],()=>`Error in cropAndResize: boxes must be have size [${u},4] but had shape ${i.shape}.`),_.b(1===c.rank&&c.shape[0]===u,()=>`Error in cropAndResize: boxInd must be have size [${u}] but had shape ${i.shape}.`),_.b(2===r.length,()=>`Error in cropAndResize: cropSize must be of length 2, but got length ${r.length}.`),_.b(r[0]>=1&&r[1]>=1,()=>"cropSize must be atleast [1,1], but was "+r),_.b("bilinear"===a||"nearest"===a,()=>"method must be bilinear or nearest, but was "+a);const d={image:s,boxes:i,boxInd:c},l={method:a,extrapolationValue:o,cropSize:r};return $.a.runKernel(R.K,d,l)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ur=Object(k.b)({flipLeftRight_:function(t){const e=Object(j.a)(t,"image","flipLeftRight","float32");_.b(4===e.rank,()=>`Error in flipLeftRight: image must be rank 4,but got rank ${e.rank}.`);const n={image:e};return $.a.runKernel(R.eb,n,{})}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const dr=Object(k.b)({rotateWithOffset_:function(t,e,n=0,r=.5){const a=Object(j.a)(t,"image","rotateWithOffset","float32");_.b(4===a.rank,()=>`Error in rotateWithOffset: image must be rank 4,but got rank ${a.rank}.`);const o={image:a},s={radians:e,fillValue:n,center:r};return $.a.runKernel(R.uc,o,s)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lr(t,e,n,r,a,o){null==r&&(r=.5),null==a&&(a=Number.NEGATIVE_INFINITY),null==o&&(o=0);const s=t.shape[0];return n=Math.min(n,s),_.b(0<=r&&r<=1,()=>`iouThreshold must be in [0, 1], but was '${r}'`),_.b(2===t.rank,()=>`boxes must be a 2D tensor, but was of rank '${t.rank}'`),_.b(4===t.shape[1],()=>"boxes must have 4 columns, but 2nd dimension was "+t.shape[1]),_.b(1===e.rank,()=>"scores must be a 1D tensor"),_.b(e.shape[0]===s,()=>`scores has incompatible shape with boxes. Expected ${s}, but was `+e.shape[0]),_.b(0<=o&&o<=1,()=>`softNmsSigma must be in [0, 1], but was '${o}'`),{maxOutputSize:n,iouThreshold:r,scoreThreshold:a,softNmsSigma:o}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const pr=Object(k.b)({nonMaxSuppression_:function(t,e,n,r=.5,a=Number.NEGATIVE_INFINITY){const o=Object(j.a)(t,"boxes","nonMaxSuppression"),s=Object(j.a)(e,"scores","nonMaxSuppression"),i=lr(o,s,n,r,a),c={maxOutputSize:n=i.maxOutputSize,iouThreshold:r=i.iouThreshold,scoreThreshold:a=i.scoreThreshold};return $.a.runKernel(R.Wb,{boxes:o,scores:s},c)}});var fr=n(62);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const hr=async function(t,e,n,r=.5,a=Number.NEGATIVE_INFINITY){const o=Object(j.a)(t,"boxes","nonMaxSuppressionAsync"),s=Object(j.a)(e,"scores","nonMaxSuppressionAsync"),i=lr(o,s,n,r,a);n=i.maxOutputSize,r=i.iouThreshold,a=i.scoreThreshold;const c=await Promise.all([o.data(),s.data()]),u=c[0],d=c[1],{selectedIndices:l}=Object(fr.a)(u,d,n,r,a);return o!==t&&o.dispose(),s!==e&&s.dispose(),Object(bn.a)(l,"int32")};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const br=Object(k.b)({nonMaxSuppressionWithScore_:function(t,e,n,r=.5,a=Number.NEGATIVE_INFINITY,o=0){const s=Object(j.a)(t,"boxes","nonMaxSuppression"),i=Object(j.a)(e,"scores","nonMaxSuppression"),c=lr(s,i,n,r,a,o),u={boxes:s,scores:i},d={maxOutputSize:n=c.maxOutputSize,iouThreshold:r=c.iouThreshold,scoreThreshold:a=c.scoreThreshold,softNmsSigma:o=c.softNmsSigma},l=$.a.runKernel(R.Yb,u,d);return{selectedIndices:l[0],selectedScores:l[1]}}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const mr=async function(t,e,n,r=.5,a=Number.NEGATIVE_INFINITY,o=0){const s=Object(j.a)(t,"boxes","nonMaxSuppressionAsync"),i=Object(j.a)(e,"scores","nonMaxSuppressionAsync"),c=lr(s,i,n,r,a,o);n=c.maxOutputSize,r=c.iouThreshold,a=c.scoreThreshold,o=c.softNmsSigma;const u=await Promise.all([s.data(),i.data()]),d=u[0],l=u[1],{selectedIndices:p,selectedScores:f}=Object(fr.c)(d,l,n,r,a,o);return s!==t&&s.dispose(),i!==e&&i.dispose(),{selectedIndices:Object(bn.a)(p,"int32"),selectedScores:Object(bn.a)(f)}};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const gr=Object(k.b)({nonMaxSuppressionPadded_:function(t,e,n,r=.5,a=Number.NEGATIVE_INFINITY,o=!1){const s=Object(j.a)(t,"boxes","nonMaxSuppression"),i=Object(j.a)(e,"scores","nonMaxSuppression"),c=lr(s,i,n,r,a,null),u={boxes:s,scores:i},d={maxOutputSize:c.maxOutputSize,iouThreshold:c.iouThreshold,scoreThreshold:c.scoreThreshold,padToMaxOutputSize:o},l=$.a.runKernel(R.Xb,u,d);return{selectedIndices:l[0],validOutputs:l[1]}}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const yr=async function(t,e,n,r=.5,a=Number.NEGATIVE_INFINITY,o=!1){const s=Object(j.a)(t,"boxes","nonMaxSuppressionAsync"),i=Object(j.a)(e,"scores","nonMaxSuppressionAsync"),c=lr(s,i,n,r,a,null),u=c.maxOutputSize,d=c.iouThreshold,l=c.scoreThreshold,[p,f]=await Promise.all([s.data(),i.data()]),{selectedIndices:h,validOutputs:b}=Object(fr.b)(p,f,u,d,l,o);return s!==t&&s.dispose(),i!==e&&i.dispose(),{selectedIndices:Object(bn.a)(h,"int32"),validOutputs:Object(Le.a)(b,"int32")}};var Or=n(161),jr=n(160);const vr=Object(k.b)({bandPart_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e,n){Object(_.b)(e%1==0,()=>`bandPart(): numLower must be an integer, got ${e}.`),Object(_.b)(n%1==0,()=>`bandPart(): numUpper must be an integer, got ${n}.`);const r=Object(j.a)(t,"a","bandPart");Object(_.b)(r.rank>=2,()=>`bandPart(): Rank must be at least 2, got ${r.rank}.`);const a=r.shape,[o,s]=r.shape.slice(-2);if(!(e<=o))throw new Error(`bandPart(): numLower (${e}) must not be greater than the number of rows (${o}).`);if(!(n<=s))throw new Error(`bandPart(): numUpper (${n}) must not be greater than the number of columns (${s}).`);e<0&&(e=o),n<0&&(n=s);const i=Object(yt.a)(Object(Te.a)(0,o,1,"int32"),[-1,1]),c=Object(Te.a)(0,s,1,"int32"),u=Object(re.a)(i,c),d=Object(zt.a)(Object(Mt.a)(u,Object(Le.a)(+e,"int32")),Object(St.a)(u,Object(Le.a)(-n,"int32"))),l=Object(An.a)([o,s],r.dtype);return Object(yt.a)(Object(un.a)(Object(Sn.a)(Object(yt.a)(r,[-1,o,s])).map(t=>Object(Tn.a)(d,t,l))),a)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const wr=Object(k.b)({gramSchmidt_:function(t){let e;if(Array.isArray(t)){e=!1,Object(_.b)(null!=t&&t.length>0,()=>"Gram-Schmidt process: input must not be null, undefined, or empty");const n=t[0].shape[0];for(let e=1;e<t.length;++e)Object(_.b)(t[e].shape[0]===n,()=>`Gram-Schmidt: Non-unique lengths found in the input vectors: (${t[e].shape[0]} vs. ${n})`)}else e=!0,t=Object(an.a)(t,t.shape[0],0).map(t=>Object(cn.a)(t,[0]));Object(_.b)(t.length<=t[0].shape[0],()=>`Gram-Schmidt: Number of vectors (${t.length}) exceeds number of dimensions (${t[0].shape[0]}).`);const n=[],r=t;for(let e=0;e<t.length;++e)n.push($.a.tidy(()=>{let t=r[e];if(e>0)for(let r=0;r<e;++r){const e=Object(x.a)(Object(pn.a)(Object(x.a)(n[r],t)),n[r]);t=Object(re.a)(t,e)}return Object(ut.a)(t,Object(Rn.a)(t,"euclidean"))}));return e?Object(un.a)(n,0):n}});var xr=n(19);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kr(t,e=!1){return $.a.tidy(()=>{Object(_.b)(2===t.shape.length,()=>`qr2d() requires a 2D Tensor, but got a ${t.shape.length}D Tensor.`);const n=t.shape[0],r=t.shape[1];let a=jt(n),o=Object(q.a)(t);const s=gn([[1]],[1,1]);let i=Object(q.a)(s);const c=n>=r?r:n;for(let t=0;t<c;++t){const e=o,c=i,u=a;[i,o,a]=$.a.tidy(()=>{const e=Object(S.a)(o,[t,t],[n-t,1]),c=Object(Rn.a)(e),u=Object(S.a)(o,[t,t],[1,1]),d=Object(Tn.a)(Object(Nt.a)(u,0),gn([[-1]]),gn([[1]])),l=Object(re.a)(u,Object(x.a)(d,c)),p=Object(ut.a)(e,l);i=1===p.shape[0]?Object(q.a)(s):Object(v.a)([s,Object(S.a)(p,[1,0],[p.shape[0]-1,p.shape[1]])],0);const f=Object(ie.a)(Object(ut.a)(Object(w.a)(d,l),c)),h=Object(S.a)(o,[t,0],[n-t,r]),b=Object(x.a)(f,i),m=Object($n.a)(i);if(0===t)o=Object(re.a)(h,Object(w.a)(b,Object(w.a)(m,h)));else{const e=Object(re.a)(h,Object(w.a)(b,Object(w.a)(m,h)));o=Object(v.a)([Object(S.a)(o,[0,0],[t,r]),e],0)}const g=Object($n.a)(b),y=Object(S.a)(a,[0,t],[n,a.shape[1]-t]);if(0===t)a=Object(re.a)(y,Object(w.a)(Object(w.a)(y,i),g));else{const e=Object(re.a)(y,Object(w.a)(Object(w.a)(y,i),g));a=Object(v.a)([Object(S.a)(a,[0,0],[n,t]),e],1)}return[i,o,a]}),Object(xr.d)([e,c,u])}return!e&&n>r&&(a=Object(S.a)(a,[0,0],[n,r]),o=Object(S.a)(o,[0,0],[r,r])),[a,o]})}const Nr=Object(k.b)({qr_:function(t,e=!1){if(Object(_.b)(t.rank>=2,()=>"qr() requires input tensor to have a rank >= 2, but got rank "+t.rank),2===t.rank)return kr(t,e);{const n=t.shape.slice(0,t.shape.length-2).reduce((t,e)=>t*e),r=Object(Sn.a)(Object(yt.a)(t,[n,t.shape[t.shape.length-2],t.shape[t.shape.length-1]]),0),a=[],o=[];r.forEach(t=>{const[n,r]=kr(t,e);a.push(n),o.push(r)});return[Object(yt.a)(Object(un.a)(a,0),t.shape),Object(yt.a)(Object(un.a)(o,0),t.shape)]}}});var Sr=n(30);const Er=Object(k.b)({computeWeightedLoss_:function(t,e,n=Sr.a.SUM_BY_NONZERO_WEIGHTS){const r=Object(j.a)(t,"losses","computeWeightedLoss");let a=null;null!=e&&(a=Object(j.a)(e,"weights","computeWeightedLoss"));const o=null==a?r:Object(x.a)(r,a);if(n===Sr.a.NONE)return o;if(n===Sr.a.SUM)return Object(pn.a)(o);if(n===Sr.a.MEAN){if(null==a)return Object(Jt.a)(o);{const t=r.size/a.size,e=Object(ut.a)(Object(pn.a)(o),Object(pn.a)(a));return t>1?Object(ut.a)(e,Object(Le.a)(t)):e}}if(n===Sr.a.SUM_BY_NONZERO_WEIGHTS){if(null==a)return Object(ut.a)(Object(pn.a)(o),Object(Le.a)(r.size));{const t=Object(x.a)(a,Object(de.a)(r.shape)),e=Object(L.a)(Object(pn.a)(Object(ce.a)(t,Object(Le.a)(0))),"float32");return Object(ut.a)(Object(pn.a)(o),e)}}throw Error("Unknown reduction: "+n)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Tr=Object(k.b)({absoluteDifference_:function(t,e,n,r=Sr.a.SUM_BY_NONZERO_WEIGHTS){const o=Object(j.a)(t,"labels","absoluteDifference"),s=Object(j.a)(e,"predictions","absoluteDifference");let i=null;null!=n&&(i=Object(j.a)(n,"weights","absoluteDifference")),Object(_.e)(o.shape,s.shape,"Error in absoluteDifference: ");const c=Object(a.a)(Object(re.a)(o,s));return Er(c,i,r)}});const Ir=Object(k.b)({cosineDistance_:function(t,e,n,r,a=Sr.a.SUM_BY_NONZERO_WEIGHTS){const o=Object(j.a)(t,"labels","cosineDistance"),s=Object(j.a)(e,"predictions","cosineDistance");let i=null;null!=r&&(i=Object(j.a)(r,"weights","cosineDistance")),Object(_.e)(o.shape,s.shape,"Error in cosineDistance: ");const c=Object(Le.a)(1),u=Object(re.a)(c,Object(pn.a)(Object(x.a)(o,s),n,!0));return Er(u,i,a)}});const Ar=Object(k.b)({hingeLoss_:function(t,e,n,r=Sr.a.SUM_BY_NONZERO_WEIGHTS){let a=Object(j.a)(t,"labels","hingeLoss");const o=Object(j.a)(e,"predictions","hingeLoss");let s=null;null!=n&&(s=Object(j.a)(n,"weights","hingeLoss")),Object(_.e)(a.shape,o.shape,"Error in hingeLoss: ");const i=Object(Le.a)(1);a=Object(re.a)(Object(x.a)(Object(Le.a)(2),a),i);const c=Object(_e.a)(Object(re.a)(i,Object(x.a)(a,o)));return Er(c,s,r)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const _r=Object(k.b)({huberLoss_:function(t,e,n,r=1,o=Sr.a.SUM_BY_NONZERO_WEIGHTS){const s=Object(j.a)(t,"labels","huberLoss"),c=Object(j.a)(e,"predictions","huberLoss");let u=null;null!=n&&(u=Object(j.a)(n,"weights","huberLoss")),Object(_.e)(s.shape,c.shape,"Error in huberLoss: ");const d=Object(Le.a)(r),l=Object(a.a)(Object(re.a)(c,s)),p=Object(Qt.a)(l,d),f=Object(re.a)(l,p),h=Object(i.a)(Object(x.a)(Object(Le.a)(.5),Object(ne.a)(p)),Object(x.a)(d,f));return Er(h,u,o)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Dr=Object(k.b)({logLoss_:function(t,e,n,r=1e-7,a=Sr.a.SUM_BY_NONZERO_WEIGHTS){const o=Object(j.a)(t,"labels","logLoss"),s=Object(j.a)(e,"predictions","logLoss");let c=null;null!=n&&(c=Object(j.a)(n,"weights","logLoss")),Object(_.e)(o.shape,s.shape,"Error in logLoss: ");const u=Object(Le.a)(1),d=Object(Le.a)(r),l=Object(ie.a)(Object(x.a)(o,Object(Rt.a)(Object(i.a)(s,d)))),p=Object(x.a)(Object(re.a)(u,o),Object(Rt.a)(Object(i.a)(Object(re.a)(u,s),d))),f=Object(re.a)(l,p);return Er(f,c,a)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Mr=Object(k.b)({meanSquaredError_:function(t,e,n,r=Sr.a.SUM_BY_NONZERO_WEIGHTS){const a=Object(j.a)(t,"labels","meanSquaredError"),o=Object(j.a)(e,"predictions","meanSquaredError");let s=null;null!=n&&(s=Object(j.a)(n,"weights","meanSquaredError")),Object(_.e)(a.shape,o.shape,"Error in meanSquaredError: ");const i=Object(sn.a)(a,o);return Er(i,s,r)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Fr=Object(k.b)({sigmoidCrossEntropy_:function(t,e,n,r=0,o=Sr.a.SUM_BY_NONZERO_WEIGHTS){let s=Object(j.a)(t,"multiClassLabels","sigmoidCrossEntropy");const c=Object(j.a)(e,"logits","sigmoidCrossEntropy");let u=null;if(null!=n&&(u=Object(j.a)(n,"weights","sigmoidCrossEntropy")),Object(_.e)(s.shape,c.shape,"Error in sigmoidCrossEntropy: "),r>0){const t=Object(Le.a)(r),e=Object(Le.a)(1),n=Object(Le.a)(.5);s=Object(i.a)(Object(x.a)(s,Object(re.a)(e,t)),Object(x.a)(n,t))}const d=function(t,e){const n=Object(j.a)(t,"labels","sigmoidCrossEntropyWithLogits"),r=Object(j.a)(e,"logits","sigmoidCrossEntropyWithLogits");Object(_.e)(n.shape,r.shape,"Error in sigmoidCrossEntropyWithLogits: ");const o=Object(_e.a)(r),s=Object(x.a)(r,n),c=Object(Pt.a)(Object(bt.a)(Object(ie.a)(Object(a.a)(r))));return Object(i.a)(Object(re.a)(o,s),c)}(s,c);return Er(d,u,o)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const $r=Object(k.b)({softmaxCrossEntropy_:function(t,e,n,r=0,a=Sr.a.SUM_BY_NONZERO_WEIGHTS){let o=Object(j.a)(t,"onehotLabels","softmaxCrossEntropy");const s=Object(j.a)(e,"logits","softmaxCrossEntropy");let c=null;if(null!=n&&(c=Object(j.a)(n,"weights","softmaxCrossEntropy")),Object(_.e)(o.shape,s.shape,"Error in softmaxCrossEntropy: "),r>0){const t=Object(Le.a)(r),e=Object(Le.a)(1),n=Object(Le.a)(o.shape[1]);o=Object(i.a)(Object(x.a)(o,Object(re.a)(e,t)),Object(ut.a)(t,n))}const u=function(t,e,n=-1){if(-1===n&&(n=e.rank-1),n!==e.rank-1)throw Error(`Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank ${e.rank} and dim was `+n);return Object(Gn.a)((t,e,r)=>{const a=Object(Lt.a)(e,[n],!0),o=Object(re.a)(Object(L.a)(e,"float32"),a);r([t,o]);const s=Object(ie.a)(Object(x.a)(o,t));return{value:Object(pn.a)(s,[n]),gradFunc:(t,e)=>{const[r,a]=e,o=Object(ee.e)(t.shape,[n]);return[Object(x.a)(Object(yt.a)(t,o),Object(re.a)(Object(L.a)(r,"float32"),Object(bt.a)(a))),Object(x.a)(Object(yt.a)(t,o),Object(re.a)(Object(bt.a)(a),Object(L.a)(r,"float32")))]}}})(t,e)}(o,s);return Er(u,c,a)}}),Rr={fft:tn.a,ifft:en.a,rfft:rn.a,irfft:nn.a},Pr={hammingWindow:ar,hannWindow:or,frame:sr,stft:ir},Cr={flipLeftRight:ur,resizeNearestNeighbor:jr.a,resizeBilinear:Or.a,rotateWithOffset:dr,cropAndResize:cr,nonMaxSuppression:pr,nonMaxSuppressionAsync:hr,nonMaxSuppressionWithScore:br,nonMaxSuppressionWithScoreAsync:mr,nonMaxSuppressionPadded:gr,nonMaxSuppressionPaddedAsync:yr},Br={bandPart:vr,gramSchmidt:wr,qr:Nr},Lr={absoluteDifference:Tr,computeWeightedLoss:Er,cosineDistance:Ir,hingeLoss:Ar,huberLoss:_r,logLoss:Dr,meanSquaredError:Mr,sigmoidCrossEntropy:Fr,softmaxCrossEntropy:$r};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */},function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(4),a=n(1),o=n(0),s=n(11),i=n(3);const c=Object(i.b)({sum_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e=null,n=!1){let i=Object(o.a)(t,"x","sum");"bool"===i.dtype&&(i=Object(s.a)(i,"int32"));const c={x:i},u={axis:e,keepDims:n};return r.a.runKernel(a.Qc,c,u)}})},function(t,e,n){"use strict";n.d(e,"g",(function(){return i})),n.d(e,"f",(function(){return c})),n.d(e,"c",(function(){return u})),n.d(e,"b",(function(){return d})),n.d(e,"e",(function(){return l})),n.d(e,"h",(function(){return p})),n.d(e,"m",(function(){return f})),n.d(e,"n",(function(){return h})),n.d(e,"t",(function(){return b})),n.d(e,"d",(function(){return m})),n.d(e,"l",(function(){return g})),n.d(e,"u",(function(){return y})),n.d(e,"r",(function(){return O})),n.d(e,"o",(function(){return j})),n.d(e,"k",(function(){return v})),n.d(e,"q",(function(){return w})),n.d(e,"i",(function(){return x})),n.d(e,"j",(function(){return k})),n.d(e,"p",(function(){return N})),n.d(e,"a",(function(){return S})),n.d(e,"s",(function(){return E}));var r=n(4),a=n(22),o=n(5),s=n(21);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function i(){Object(a.c)().set("PROD",!0)}function c(){Object(a.c)().set("DEBUG",!0)}function u(){Object(a.c)().set("DEPRECATION_WARNINGS_ENABLED",!1),console.warn("TensorFlow.js deprecation warnings have been disabled.")}function d(t){Object(a.c)().getBool("DEPRECATION_WARNINGS_ENABLED")&&console.warn(t+" You can disable deprecation warnings with tf.disableDeprecationWarnings().")}function l(){r.a.disposeVariables()}function p(){return r.a}function f(){return r.a.memory()}function h(t){return r.a.profile(t)}function b(t,e){return r.a.tidy(t,e)}function m(t){Object(s.getTensorsInContainer)(t).forEach(t=>t.dispose())}function g(t){return r.a.keep(t)}function y(t){return r.a.time(t)}function O(t){return r.a.setBackend(t)}function j(){return r.a.ready()}function v(){return r.a.backendName}function w(t){r.a.removeBackend(t)}function x(t){return r.a.findBackend(t)}function k(t){return r.a.findBackendFactory(t)}function N(t,e,n=1){return r.a.registerBackend(t,e,n)}function S(){return r.a.backend}function E(t,e){Object(a.c)().setPlatform(t,e)}Object(o.d)(d)},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(4),a=n(1),o=n(0),s=n(3);const i=Object(s.b)({zerosLike_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const e={x:Object(o.a)(t,"x","zerosLike")};return r.a.runKernel(a.Zc,e)}})},function(t,e,n){"use strict";n.r(e),n.d(e,"makeTypesMatch",(function(){return s})),n.d(e,"assertTypesMatch",(function(){return i})),n.d(e,"isTensorInList",(function(){return c})),n.d(e,"getTensorsInContainer",(function(){return u}));var r=n(5),a=n(75),o=n(7);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function s(t,e){if(t.dtype===e.dtype)return[t,e];const n=Object(a.c)(t.dtype,e.dtype);return[t.cast(n),e.cast(n)]}function i(t,e){Object(o.b)(t.dtype===e.dtype,()=>`The dtypes of the first(${t.dtype}) and second(${e.dtype}) input must match`)}function c(t,e){return e.some(e=>e.id===t.id)}function u(t){const e=[];return function t(e,n,a){if(null==e)return;if(e instanceof r.a)return void n.push(e);if(o=e,!Array.isArray(o)&&"object"!=typeof o)return;var o;const s=e;for(const e in s){const r=s[e];a.has(r)||(a.add(r),t(r,n,a))}}(t,e,new Set),e}},function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return s})),n.d(e,"d",(function(){return i}));var r=n(7);
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class a{constructor(t){this.global=t,this.flags={},this.flagRegistry={},this.urlFlags={},this.populateURLFlags()}setPlatform(t,e){null!=this.platform&&console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${e}.`),this.platformName=t,this.platform=e}registerFlag(t,e,n){if(this.flagRegistry[t]={evaluationFn:e,setHook:n},null!=this.urlFlags[t]){const e=this.urlFlags[t];console.warn(`Setting feature override from URL ${t}: ${e}.`),this.set(t,e)}}async getAsync(t){return t in this.flags||(this.flags[t]=await this.evaluateFlag(t)),this.flags[t]}get(t){if(t in this.flags)return this.flags[t];const e=this.evaluateFlag(t);if(Object(r.x)(e))throw new Error(`Flag ${t} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[t]=e,this.flags[t]}getNumber(t){return this.get(t)}getBool(t){return this.get(t)}getFlags(){return this.flags}get features(){return this.flags}set(t,e){if(null==this.flagRegistry[t])throw new Error(`Cannot set flag ${t} as it has not been registered.`);this.flags[t]=e,null!=this.flagRegistry[t].setHook&&this.flagRegistry[t].setHook(e)}evaluateFlag(t){if(null==this.flagRegistry[t])throw new Error(`Cannot evaluate flag '${t}': no evaluation function found.`);return this.flagRegistry[t].evaluationFn()}setFlags(t){this.flags=Object.assign({},t)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(void 0===this.global||void 0===this.global.location||void 0===this.global.location.search)return;const t=function(t){const e={};return t.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,(t,...n)=>(function(t,e,n){t[decodeURIComponent(e)]=decodeURIComponent(n||"")}(e,n[0],n[1]),n.join("="))),e}(this.global.location.search);if("tfjsflags"in t){t.tfjsflags.split(",").forEach(t=>{const[e,n]=t.split(":");this.urlFlags[e]=function(t,e){if("true"===(e=e.toLowerCase())||"false"===e)return"true"===e;if(""+ +e===e)return+e;throw new Error(`Could not parse value flag value ${e} for flag ${t}.`)}(e,n)})}}}function o(){return s}let s=null;function i(t){s=t}},function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n(4),a=n(0),o=n(3);const s=Object(o.b)({square_:
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const e=Object(a.a)(t,"x","square");return r.a.runKernel("Square",{x:e},{})}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(4),a=n(1),o=n(0),s=n(3);const i=Object(s.b)({slice_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e,n){const s=Object(o.a)(t,"x","slice","string_or_numeric");if(0===s.rank)throw new Error("Slicing scalar is not possible");const i={x:s},c={begin:e,size:n};return r.a.runKernel(a.Ec,i,c)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(4),a=n(1),o=n(21),s=n(0),i=n(3);const c=Object(i.b)({matMul_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e,n=!1,i=!1){let c=Object(s.a)(t,"a","matMul"),u=Object(s.a)(e,"b","matMul");[c,u]=Object(o.makeTypesMatch)(c,u);const d={a:c,b:u},l={transposeA:n,transposeB:i};return r.a.runKernel(a.s,d,l)}})},function(t,e,n){"use strict";
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function r(t,e,n,r,a="NHWC",o){return s(t,[...e,t[3]],n,o,r,null,null,b(a))}function a(t,e,n,r,a,o,i="channelsLast"){const[c,d]=u(e);let l;if("channelsLast"===i)l=[c,d,t[3],t[3]];else{if("channelsFirst"!==i)throw new Error("Unknown dataFormat "+i);l=[c,d,t[1],t[1]]}return s(t,l,n,r,a,o,!1,i)}function o(t,e,n,r,a,o,s="NDHWC"){const[c,u,l]=d(e);let p,f;if("NDHWC"===s)f="channelsLast",p=[c,u,l,t[4],t[4]];else{if("NCDHW"!==s)throw new Error("Unknown dataFormat "+s);f="channelsFirst",p=[c,u,l,t[1],t[1]]}return i(t,p,n,r,a,!1,f,o)}function s(t,e,n,r,a,o,s=!1,i="channelsLast"){let[d,f,h,b]=[-1,-1,-1,-1];if("channelsLast"===i)[d,f,h,b]=t;else{if("channelsFirst"!==i)throw new Error("Unknown dataFormat "+i);[d,b,f,h]=t}const[m,g,,y]=e,[O,j]=u(n),[v,w]=u(r),x=l(m,v),k=l(g,w),{padInfo:N,outHeight:S,outWidth:E}=function(t,e,n,r,a,o,s,i,u){let d,l,f;if("number"==typeof t){d={top:t,bottom:t,left:t,right:t,type:0===t?"VALID":"NUMBER"};const a=function(t,e,n,r,a){null==r&&(r=c(t,e,n));const o=t[0],s=t[1],i=p((o-e+2*r)/n+1,a),u=p((s-e+2*r)/n+1,a);return[i,u]}([e,n],o,r,t,i);l=a[0],f=a[1]}else if("same"===t){l=Math.ceil(e/r),f=Math.ceil(n/a);const t=Math.max(0,(l-1)*r+o-e),i=Math.max(0,(f-1)*a+s-n),c=Math.floor(t/2),u=t-c,p=Math.floor(i/2);d={top:c,bottom:u,left:p,right:i-p,type:"SAME"}}else if("valid"===t)d={top:0,bottom:0,left:0,right:0,type:"VALID"},l=Math.ceil((e-o+1)/r),f=Math.ceil((n-s+1)/a);else{if("object"!=typeof t)throw Error("Unknown padding parameter: "+t);{const c="channelsLast"===u?t[1][0]:t[2][0],h="channelsLast"===u?t[1][1]:t[2][1],b="channelsLast"===u?t[2][0]:t[3][0],m="channelsLast"===u?t[2][1]:t[3][1];d={top:c,bottom:h,left:b,right:m,type:0===c&&0===h&&0===b&&0===m?"VALID":"EXPLICIT"},l=p((e-o+c+h)/r+1,i),f=p((n-s+b+m)/a+1,i)}}return{padInfo:d,outHeight:l,outWidth:f}}(a,f,h,O,j,x,k,o,i),T=s?y*b:y;let I;return"channelsFirst"===i?I=[d,T,S,E]:"channelsLast"===i&&(I=[d,S,E,T]),{batchSize:d,dataFormat:i,inHeight:f,inWidth:h,inChannels:b,outHeight:S,outWidth:E,outChannels:T,padInfo:N,strideHeight:O,strideWidth:j,filterHeight:m,filterWidth:g,effectiveFilterHeight:x,effectiveFilterWidth:k,dilationHeight:v,dilationWidth:w,inShape:t,outShape:I,filterShape:e}}function i(t,e,n,r,a,o=!1,s="channelsLast",i){let[u,f,h,b,m]=[-1,-1,-1,-1,-1];if("channelsLast"===s)[u,f,h,b,m]=t;else{if("channelsFirst"!==s)throw new Error("Unknown dataFormat "+s);[u,m,f,h,b]=t}const[g,y,O,,j]=e,[v,w,x]=d(n),[k,N,S]=d(r),E=l(g,k),T=l(y,N),I=l(O,S),{padInfo:A,outDepth:_,outHeight:D,outWidth:M}=function(t,e,n,r,a,o,s,i,u,d,l){let f,h,b,m;if("number"==typeof t){f={top:t,bottom:t,left:t,right:t,front:t,back:t,type:0===t?"VALID":"NUMBER"};const o=function(t,e,n,r,a,o){null==a&&(a=c(t,e,r));const s=t[0],i=t[1],u=t[2],d=p((s-e+2*a)/r+1,o),l=p((i-e+2*a)/r+1,o),f=p((u-e+2*a)/r+1,o);return[d,l,f,n]}([e,n,r,1],i,1,a,t,l);h=o[0],b=o[1],m=o[2]}else if("same"===t){h=Math.ceil(e/a),b=Math.ceil(n/o),m=Math.ceil(r/s);const t=(h-1)*a+i-e,c=(b-1)*o+u-n,l=(m-1)*s+d-r,p=Math.floor(t/2),g=t-p,y=Math.floor(c/2),O=c-y,j=Math.floor(l/2);f={top:y,bottom:O,left:j,right:l-j,front:p,back:g,type:"SAME"}}else{if("valid"!==t)throw Error("Unknown padding parameter: "+t);f={top:0,bottom:0,left:0,right:0,front:0,back:0,type:"VALID"},h=Math.ceil((e-i+1)/a),b=Math.ceil((n-u+1)/o),m=Math.ceil((r-d+1)/s)}return{padInfo:f,outDepth:h,outHeight:b,outWidth:m}}(a,f,h,b,v,w,x,E,T,I,i),F=o?j*m:j;let $;return"channelsFirst"===s?$=[u,F,_,D,M]:"channelsLast"===s&&($=[u,_,D,M,F]),{batchSize:u,dataFormat:s,inDepth:f,inHeight:h,inWidth:b,inChannels:m,outDepth:_,outHeight:D,outWidth:M,outChannels:F,padInfo:A,strideDepth:v,strideHeight:w,strideWidth:x,filterDepth:g,filterHeight:y,filterWidth:O,effectiveFilterDepth:E,effectiveFilterHeight:T,effectiveFilterWidth:I,dilationDepth:k,dilationHeight:N,dilationWidth:S,inShape:t,outShape:$,filterShape:e}}function c(t,e,n,r=1){const a=l(e,r);return Math.floor((t[0]*(n-1)-n+a)/2)}function u(t){return"number"==typeof t?[t,t,t]:2===t.length?[t[0],t[1],1]:t}function d(t){return"number"==typeof t?[t,t,t]:t}function l(t,e){return e<=1?t:t+(t-1)*(e-1)}function p(t,e){if(!e)return Math.trunc(t);switch(e){case"round":return Math.round(t);case"ceil":return Math.ceil(t);case"floor":return Math.floor(t);default:throw new Error("Unknown roundingMode "+e)}}function f(t){const[e,n,r]=u(t);return 1===e&&1===n&&1===r}function h(t,e){return f(t)||f(e)}function b(t){if("NHWC"===t)return"channelsLast";if("NCHW"===t)return"channelsFirst";throw new Error("Unknown dataFormat "+t)}n.d(e,"d",(function(){return r})),n.d(e,"e",(function(){return a})),n.d(e,"f",(function(){return o})),n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return c})),n.d(e,"i",(function(){return f})),n.d(e,"h",(function(){return h})),n.d(e,"g",(function(){return b}))},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(4),a=n(1),o=n(0),s=n(3);const i=Object(s.b)({neg_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const e={x:Object(o.a)(t,"x","neg")};return r.a.runKernel(a.Vb,e)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n(4),a=n(1),o=n(0),s=n(7),i=n(56),c=n(3);const u=Object(c.b)({concat_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e=0){Object(s.b)(t.length>=1,()=>"Pass at least one tensor to concat");const n=Object(o.b)(t,"tensors","concat","string_or_numeric");if("complex64"===n[0].dtype&&n.forEach(t=>{if("complex64"!==t.dtype)throw new Error(`Cannot concatenate complex64 tensors with a tensor\n          with dtype ${t.dtype}. `)}),1===n.length)return Object(i.a)(n[0]);const c=n,u={axis:e};return r.a.runKernel(a.B,c,u)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return p})),n.d(e,"f",(function(){return l})),n.d(e,"d",(function(){return u})),n.d(e,"e",(function(){return d})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return c}));var r=n(4),a=n(5),o=n(0),s=n(7);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function i(t){return s.b(s.u(t),()=>"The f passed in grad(f) must be a function"),(e,n)=>{const a=Object(o.a)(e,"x","tf.grad","string_or_numeric"),i=null!=n?Object(o.a)(n,"dy","tf.grad"):null;return r.a.tidy(()=>{const{value:e,grads:n}=r.a.gradients(()=>t(a),[a],i);return null!=i&&s.e(e.shape,i.shape,"The shape of dy passed in grad(f)(x, dy) must match the shape returned by f(x)"),f(n),n[0]})}}function c(t){return s.b(s.u(t),()=>"The f passed in grads(f) must be a function"),(e,n)=>{s.b(Array.isArray(e),()=>"The args passed in grads(f)(args) must be an array of `Tensor`s or `TensorLike`s");const a=Object(o.b)(e,"args","tf.grads","string_or_numeric"),i=null!=n?Object(o.a)(n,"dy","tf.grads"):null;return r.a.tidy(()=>{const{value:e,grads:n}=r.a.gradients(()=>t(...a),a,i);return null!=i&&s.e(e.shape,i.shape,"The shape of dy passed in grads(f)([x1,...], dy) must match the shape returned by f([x1,...])"),f(n),n})}}function u(t){return s.b(s.u(t),()=>"The f passed in valueAndGrad(f) must be a function"),(e,n)=>{s.b(e instanceof a.a,()=>"The x passed in valueAndGrad(f)(x) must be a tensor"),s.b(null==n||n instanceof a.a,()=>"The dy passed in valueAndGrad(f)(x, dy) must be a tensor");const{grads:o,value:i}=r.a.gradients(()=>t(e),[e],n);return f(o),{grad:o[0],value:i}}}function d(t){return s.b(s.u(t),()=>"The f passed in valueAndGrads(f) must be a function"),(e,n)=>{s.b(Array.isArray(e)&&e.every(t=>t instanceof a.a),()=>"The args passed in valueAndGrads(f)(args) must be array of tensors"),s.b(null==n||n instanceof a.a,()=>"The dy passed in valueAndGrads(f)(args, dy) must be a tensor");const o=r.a.gradients(()=>t(...e),e,n);return null!=n&&s.e(o.value.shape,n.shape,"The shape of dy passed in valueAndGrads(f)([x1,...], dy) must match the shape returned by f([x1,...])"),f(o.grads),o}}function l(t,e){s.b(s.u(t),()=>"The f passed in variableGrads(f) must be a function"),s.b(null==e||Array.isArray(e)&&e.every(t=>t instanceof a.c),()=>"The varList passed in variableGrads(f, varList) must be an array of variables");const n=null!=e;if(!n){e=[];for(const t in r.a.registeredVariables)e.push(r.a.registeredVariables[t])}const o=n?e.filter(t=>!t.trainable):null,i=e.length;e=e.filter(t=>t.trainable),s.b(e.length>0,()=>`variableGrads() expects at least one of the input variables to be trainable, but none of the ${i} variables is trainable.`);const{value:c,grads:u}=r.a.gradients(t,e,null,!0);s.b(u.some(t=>null!=t),()=>"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."),s.b(0===c.rank,()=>`The f passed in variableGrads(f) must return a scalar, but it returned a rank-${c.rank} tensor`);const d={};return e.forEach((t,e)=>{null!=u[e]&&(d[t.name]=u[e])}),null!=o&&o.forEach(t=>d[t.name]=null),{value:c,grads:d}}function p(t){return r.a.customGrad(t)}function f(t){if(t.filter(t=>null==t).length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that\n    the f you passed encloses all operations that lead from x to y.")}},function(t,e,n){"use strict";
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
var r;n.d(e,"a",(function(){return r})),function(t){t[t.NONE=0]="NONE",t[t.MEAN=1]="MEAN",t[t.SUM=2]="SUM",t[t.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS"}(r||(r={}))},function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var r=n(4),a=n(1),o=n(0),s=n(7),i=n(88),c=n(16),u=n(3);const d=Object(u.b)({where_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e,n){const u=Object(o.a)(e,"a","where"),d=Object(o.a)(n,"b","where"),l=Object(o.a)(t,"condition","where","bool"),p=Object(c.a)(u.shape,d.shape),f=Object(i.a)(u,p),h=Object(i.a)(d,p);1===l.rank&&Object(s.b)(l.shape[0]===u.shape[0],()=>"The first dimension of `a` must match the size of `condition`."),1!==l.rank&&Object(s.e)(l.shape,h.shape,"Error in where: ");const b={condition:l,t:f,e:h};return r.a.runKernel(a.yc,b)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(4),a=n(1),o=n(0),s=n(3);const i=Object(s.b)({sqrt_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const e={x:Object(o.a)(t,"x","sqrt")};return r.a.runKernel(a.Kc,e)}})},function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return s})),n.d(e,"e",(function(){return i})),n.d(e,"a",(function(){return c})),n.d(e,"f",(function(){return u})),n.d(e,"h",(function(){return d})),n.d(e,"g",(function(){return l}));var r=n(7);
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function a(t,e){for(let n=0;n<t.length;++n)if(t[t.length-n-1]!==e-1-n)return!1;return!0}function o(t,e,n){const r=t.length+e.length,a=[];let o=0,s=0;for(let i=0;i<r;i++)-1===n.indexOf(i)?a.push(t[o++]):a.push(e[s++]);return a}function s(t,e){const n=[],r=t.length;for(let a=0;a<r;a++)-1===e.indexOf(a)&&n.push(t[a]);return[n,e.map(e=>t[e])]}function i(t,e){return o(t,e.map(t=>1),e)}function c(t,e,n){r.b(a(e,n),()=>t+" supports only inner-most axes for now. "+`Got axes ${e} and rank-${n} input.`)}function u(t,e){if(a(t,e))return null;const n=[];for(let r=0;r<e;++r)-1===t.indexOf(r)&&n.push(r);return t.forEach(t=>n.push(t)),n}function d(t){return t.map((t,e)=>[e,t]).sort((t,e)=>t[1]-e[1]).map(t=>t[0])}function l(t,e){const n=[];for(let r=e-t;r<e;++r)n.push(r);return n}},function(t,e,n){"use strict";(function(t){n.d(e,"f",(function(){return i})),n.d(e,"e",(function(){return c})),n.d(e,"a",(function(){return p})),n.d(e,"b",(function(){return f})),n.d(e,"d",(function(){return h})),n.d(e,"c",(function(){return b})),n.d(e,"g",(function(){return m}));var r=n(49),a=n(85),o=n(7),s=n(123);async function i(t,e){const n=[],r=[],a=Array.isArray(t)?t.map(t=>t.name):Object.keys(t);for(let o=0;o<a.length;++o){const s=a[o],i=Array.isArray(t)?t[o].tensor:t[s];if("float32"!==i.dtype&&"int32"!==i.dtype&&"bool"!==i.dtype&&"string"!==i.dtype&&"complex64"!==i.dtype)throw new Error(`Unsupported dtype in weight '${s}': ${i.dtype}`);const c={name:s,shape:i.shape,dtype:i.dtype};if("string"===i.dtype){const t=new Promise(async t=>{const e=await i.bytes(),n=e.reduce((t,e)=>t+e.length,0)+4*e.length,r=new Uint8Array(n);let a=0;for(let t=0;t<e.length;t++){const n=e[t],o=new Uint8Array(new Uint32Array([n.length]).buffer);r.set(o,a),a+=4,r.set(n,a),a+=n.length}t(r)});r.push(t)}else r.push(i.data());null!=e&&(c.group=e),n.push(c)}return{data:u(await Promise.all(r)),specs:n}}function c(t,e){const n={};let i,c=0;for(const u of e){const e=u.name,d=u.dtype,l=u.shape,p=Object(o.N)(l);let f;if("quantization"in u){const n=u.quantization;if("uint8"===n.dtype||"uint16"===n.dtype){if(!("min"in n)||!("scale"in n))throw new Error(`Weight ${u.name} with quantization ${n.dtype} doesn't have corresponding metadata min and scale.`)}else{if("float16"!==n.dtype)throw new Error(`Weight ${u.name} has unknown quantization dtype ${n.dtype}. Supported quantization dtypes are: 'uint8', 'uint16', and 'float16'.`);if("float32"!==d)throw new Error(`Weight ${u.name} is quantized with ${n.dtype} which only supports weights of type float32 not ${d}.`)}const r=s.a[n.dtype],a=t.slice(c,c+p*r),o="uint8"===n.dtype?new Uint8Array(a):new Uint16Array(a);if("float32"===d)if("uint8"===n.dtype||"uint16"===n.dtype){f=new Float32Array(o.length);for(let t=0;t<o.length;t++){const e=o[t];f[t]=e*n.scale+n.min}}else{if("float16"!==n.dtype)throw new Error(`Unsupported quantization type ${n.dtype} for weight type float32.`);void 0===i&&(i=g()),f=i(o)}else{if("int32"!==d)throw new Error(`Unsupported dtype in weight '${e}': ${d}`);if("uint8"!==n.dtype&&"uint16"!==n.dtype)throw new Error(`Unsupported quantization type ${n.dtype} for weight type int32.`);f=new Int32Array(o.length);for(let t=0;t<o.length;t++){const e=o[t];f[t]=Math.round(e*n.scale+n.min)}}c+=p*r}else if("string"===d){const e=Object(o.N)(u.shape);f=[];for(let n=0;n<e;n++){const e=new Uint32Array(t.slice(c,c+4))[0];c+=4;const n=new Uint8Array(t.slice(c,c+e));f.push(n),c+=e}}else{const o=s.a[d],i=t.slice(c,c+p*o);if("float32"===d)f=new Float32Array(i);else if("int32"===d)f=new Int32Array(i);else if("bool"===d)f=new Uint8Array(i);else{if("complex64"!==d)throw new Error(`Unsupported dtype in weight '${e}': ${d}`);{f=new Float32Array(i);const t=new Float32Array(f.length/2),o=new Float32Array(f.length/2);for(let e=0;e<t.length;e++)t[e]=f[2*e],o[e]=f[2*e+1];const s=Object(a.a)(t,l,"float32"),c=Object(a.a)(o,l,"float32");n[e]=Object(r.a)(s,c),s.dispose(),c.dispose()}}c+=p*o}"complex64"!==d&&(n[e]=Object(a.a)(f,l,d))}return n}function u(t){if(null===t)throw new Error("Invalid input value: "+JSON.stringify(t));let e=0;const n=[];t.forEach(t=>{if(e+=t.byteLength,n.push(t.byteLength===t.buffer.byteLength?t:new t.constructor(t)),!(t instanceof Float32Array||t instanceof Int32Array||t instanceof Uint8Array))throw new Error("Unsupported TypedArray subtype: "+t.constructor.name)});const r=new Uint8Array(e);let a=0;return n.forEach(t=>{r.set(new Uint8Array(t.buffer),a),a+=t.byteLength}),r.buffer}const d=void 0!==t&&("undefined"==typeof Blob||"undefined"==typeof atob||"undefined"==typeof btoa);function l(e){return d?t.byteLength(e):new Blob([e]).size}function p(e){if(d)return t.from(e).toString("base64");const n=new Uint8Array(e);let r="";for(let t=0,e=n.length;t<e;t++)r+=String.fromCharCode(n[t]);return btoa(r)}function f(e){if(d){const n=t.from(e,"base64");return n.buffer.slice(n.byteOffset,n.byteOffset+n.byteLength)}const n=atob(e),r=new Uint8Array(n.length);for(let t=0;t<n.length;++t)r.set([n.charCodeAt(t)],t);return r.buffer}function h(t){if(1===t.length)return t[0];let e=0;t.forEach(t=>{e+=t.byteLength});const n=new Uint8Array(e);let r=0;return t.forEach(t=>{n.set(new Uint8Array(t),r),r+=t.byteLength}),n.buffer}function b(t){for(t=t.trim();t.endsWith("/");)t=t.slice(0,t.length-1);const e=t.split("/");return e[e.length-1]}function m(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:null==t.modelTopology?0:l(JSON.stringify(t.modelTopology)),weightSpecsBytes:null==t.weightSpecs?0:l(JSON.stringify(t.weightSpecs)),weightDataBytes:null==t.weightData?0:t.weightData.byteLength}}function g(){const t=function(){const t=t=>{let e=t<<13,n=0;for(;0==(8388608&e);)n-=8388608,e<<=1;return e&=-8388609,n+=947912704,e|n},e=new Uint32Array(2048);e[0]=0;for(let n=1;n<1024;n++)e[n]=t(n);for(let t=1024;t<2048;t++)e[t]=939524096+(t-1024<<13);return e}(),e=function(){const t=new Uint32Array(64);t[0]=0,t[31]=1199570944,t[32]=2147483648,t[63]=3347054592;for(let e=1;e<31;e++)t[e]=e<<23;for(let e=33;e<63;e++)t[e]=2147483648+(e-32<<23);return t}(),n=function(){const t=new Uint32Array(64);for(let e=0;e<64;e++)t[e]=1024;return t[0]=t[32]=0,t}();return r=>{const a=new ArrayBuffer(4*r.length),o=new Uint32Array(a);for(let a=0;a<r.length;a++){const s=r[a],i=t[n[s>>10]+(1023&s)]+e[s>>10];o[a]=i}return new Float32Array(a)}}}).call(this,n(165).Buffer)},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(4),a=n(1),o=n(0),s=n(3);const i=Object(s.b)({exp_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const e={x:Object(o.a)(t,"x","exp")};return r.a.runKernel(a.Z,e)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(4),a=n(1),o=n(0),s=n(3);const i=Object(s.b)({abs_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const e=Object(o.a)(t,"x","abs");if("complex64"===e.dtype){const t={x:e};return r.a.runKernel(a.A,t)}{const t={x:e};return r.a.runKernel(a.a,t)}}})},function(t,e,n){"use strict";n.d(e,"c",(function(){return f})),n.d(e,"b",(function(){return h})),n.d(e,"a",(function(){return b})),n.d(e,"d",(function(){return m}));var r=n(16),a=n(101),o=n(104),s=n(8),i=n(109),c=n(67),u=n(110),d=n(6),l=n(68),p=n(18);
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function f(t,e,n){if(null==n||"linear"===n)return t;if("relu"===n)return Object(s.a)(t,Object(l.a)(e));throw new Error(`Cannot compute gradient for fused activation ${n}.`)}function h(t,e){let n=e;const a=r.c(t.shape,e.shape);return a.length>0&&(n=Object(p.a)(n,a)),Object(d.a)(n,t.shape)}function b(t,e,n,r){if("linear"===e)return t;if("relu"===e)return Object(c.a)(t);if("elu"===e)return Object(a.a)(t);if("relu6"===e)return Object(u.a)(t);if("prelu"===e)return Object(i.a)(t,n);if("leakyrelu"===e)return Object(o.a)(t,r);throw new Error(`Unknown fused activation ${e}.`)}const m=(t,e)=>!(t>0)||"linear"===e},function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n(4),a=n(1),o=n(21),s=n(0),i=n(16),c=n(3);const u=Object(c.b)({greater_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e){let n=Object(s.a)(t,"a","greater"),c=Object(s.a)(e,"b","greater");[n,c]=Object(o.makeTypesMatch)(n,c),Object(i.a)(n.shape,c.shape);const u={a:n,b:c};return r.a.runKernel(a.nb,u)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(5),a=n(7);
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function o(t,e="float32",n){return e=e||"float32",a.c(t),new r.b(t,e,n)}},function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(4),a=n(1),o=n(21),s=n(0),i=n(3);const c=Object(i.b)({pow_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e){let n=Object(s.a)(t,"base","pow"),i=Object(s.a)(e,"exp","pow");[n,i]=Object(o.makeTypesMatch)(n,i);const c={a:n,b:i};return r.a.runKernel(a.fc,c)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(4),a=n(1),o=n(0),s=n(3);const i=Object(s.b)({reverse_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e){const n={x:Object(o.a)(t,"x","reverse")},s={dims:e};return r.a.runKernel(a.tc,n,s)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n(4),a=n(7),o=n(10);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function s(t,e,n,s){if(null==s&&(s=Object(a.r)(t)),"complex64"===s)throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(!Object(a.A)(t)&&!Array.isArray(t)&&"number"!=typeof t&&"boolean"!=typeof t&&"string"!=typeof t)throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(null!=e){Object(a.c)(e);const t=Object(a.N)(e),r=Object(a.N)(n);Object(a.b)(t===r,()=>`Based on the provided shape, [${e}], the tensor should have ${t} values but has ${r}`);for(let t=0;t<n.length;++t){const r=n[t],o=t!==n.length-1||r!==Object(a.N)(e.slice(t));Object(a.b)(n[t]===e[t]||!o,()=>`Error creating a new Tensor. Inferred shape (${n}) does not match the provided shape (${e}). `)}}return Object(a.A)(t)||Array.isArray(t)||(t=[t]),e=e||n,t="string"!==s?Object(o.toTypedArray)(t,s):Object(a.m)(t,[],!0),r.a.makeTensor(t,e,s)}},function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(4),a=n(1),o=n(0),s=n(7),i=n(3);const c=Object(i.b)({transpose_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e){const n=Object(o.a)(t,"x","transpose");if(null==e&&(e=n.shape.map((t,e)=>e).reverse()),s.b(n.rank===e.length,()=>`Error in transpose: rank of input ${n.rank} must match length of perm ${e}.`),e.forEach(t=>{s.b(t>=0&&t<n.rank,()=>"All entries in 'perm' must be between 0 and "+(n.rank-1)+" but got "+e)}),n.rank<=1)return n.clone();const i={x:n},c={perm:e};return r.a.runKernel(a.Vc,i,c)}})},,function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n(4),a=n(1),o=n(21),s=n(0),i=n(16),c=n(3);const u=Object(c.b)({greaterEqual_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e){let n=Object(s.a)(t,"a","greaterEqual"),c=Object(s.a)(e,"b","greaterEqual");[n,c]=Object(o.makeTypesMatch)(n,c),Object(i.a)(n.shape,c.shape);const u={a:n,b:c};return r.a.runKernel(a.ob,u)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n(4),a=n(1),o=n(21),s=n(0),i=n(16),c=n(3);const u=Object(c.b)({lessEqual_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e){let n=Object(s.a)(t,"a","lessEqual"),c=Object(s.a)(e,"b","lessEqual");[n,c]=Object(o.makeTypesMatch)(n,c),Object(i.a)(n.shape,c.shape);const u={a:n,b:c};return r.a.runKernel(a.zb,u)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(4),a=n(1),o=n(0),s=n(3);const i=Object(s.b)({pad_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e,n=0){const s=Object(o.a)(t,"x","pad");if(0===s.rank)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");const i={paddings:e,constantValue:n},c={x:s};return r.a.runKernel(a.dc,c,i)}})},function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return k})),n.d(e,"i",(function(){return S})),n.d(e,"c",(function(){return E})),n.d(e,"f",(function(){return T})),n.d(e,"e",(function(){return _})),n.d(e,"d",(function(){return D})),n.d(e,"k",(function(){return F})),n.d(e,"g",(function(){return $})),n.d(e,"h",(function(){return R})),n.d(e,"j",(function(){return P})),n.d(e,"b",(function(){return C}));var r=n(9),a=n(73),o=n(87),s=n(2),i=n(203),c=n(204),u=n(205),d=n(206),l=n(207),p=n(208),f=n(209),h=n(210),b=n(211),m=n(212),g=n(213),y=n(214),O=n(215),j=n(216),v=n(217),w=n(218),x=n(219);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class k{static get Instance(){return this._instance||(this._instance=new this)}constructor(){const t=[].concat(...[i,c,u,d,l,p,f,g,m,h,y,O,j,v,w,x,b].map(t=>t.json));this.opMappers=t.reduce((t,e)=>(t[e.tfOpName]=e,t),{})}transformGraph(t,e={}){const n=t.node,r=[],a=[],o=[],i=n.reduce((t,e)=>(t[e.name]=this.mapNode(e),e.op.startsWith("Placeholder")?r.push(t[e.name]):"Const"===e.op?a.push(t[e.name]):null!=e.input&&0!==e.input.length||o.push(t[e.name]),t),{});let c=[];const u=[];let d={},l={};null!=e&&(d=this.mapSignatureEntries(e.inputs),l=this.mapSignatureEntries(e.outputs));const p=Object.keys(i);p.forEach(t=>{const e=i[t];e.inputNames.forEach(t=>{const[n]=Object(s.b)(t);e.inputs.push(i[n]),i[n].children.push(e)})}),0===Object.keys(l).length?p.forEach(t=>{const e=i[t];0===e.children.length&&u.push(e)}):Object.keys(l).forEach(t=>{const[e]=Object(s.b)(t),n=i[e];null!=n&&(n.signatureKey=l[t],u.push(n))}),Object.keys(d).length>0?Object.keys(d).forEach(t=>{const[e]=Object(s.b)(t),n=i[e];n&&(n.signatureKey=d[t],c.push(n))}):c=r;let f={};null!=t.library&&null!=t.library.function&&(f=t.library.function.reduce((t,e)=>(t[e.signature.name]=this.mapFunction(e),t),{}));const h={nodes:i,inputs:c,outputs:u,weights:a,placeholders:r,signature:e,functions:f};return o.length>0&&(h.initNodes=o),h}mapSignatureEntries(t){return Object.keys(t||{}).reduce((e,n)=>(e[t[n].name]=n,e),{})}mapNode(t){const e=Object(o.a)(t.op)||this.opMappers[t.op]||{};null==t.attr&&(t.attr={});const n={name:t.name,op:t.op,category:e.category,inputNames:(t.input||[]).map(t=>t.startsWith("^")?t.substr(1):t),inputs:[],children:[],inputParams:{},attrParams:{},rawAttrs:t.attr};return null!=e.inputs&&(n.inputParams=e.inputs.reduce((t,e)=>(t[e.name]={type:e.type,inputIndexStart:e.start,inputIndexEnd:e.end},t),{})),null!=e.attrs&&(n.attrParams=e.attrs.reduce((e,n)=>{const r=n.type;let a=void 0;switch(n.type){case"string":a=S(t.attr,n.tfName,n.defaultValue),void 0===a&&n.tfDeprecatedName&&(a=S(t.attr,n.tfDeprecatedName,n.defaultValue));break;case"string[]":a=R(t.attr,n.tfName,n.defaultValue),void 0===a&&n.tfDeprecatedName&&(a=R(t.attr,n.tfDeprecatedName,n.defaultValue));break;case"number":a=T(t.attr,n.tfName,n.defaultValue||0),void 0===a&&n.tfDeprecatedName&&(a=T(t.attr,n.tfDeprecatedName,n.defaultValue));break;case"number[]":a=$(t.attr,n.tfName,n.defaultValue),void 0===a&&n.tfDeprecatedName&&(a=$(t.attr,n.tfDeprecatedName,n.defaultValue));break;case"bool":a=E(t.attr,n.tfName,n.defaultValue),void 0===a&&n.tfDeprecatedName&&(a=E(t.attr,n.tfDeprecatedName,n.defaultValue));break;case"bool[]":a=C(t.attr,n.tfName,n.defaultValue),void 0===a&&n.tfDeprecatedName&&(a=C(t.attr,n.tfDeprecatedName,n.defaultValue));break;case"shape":a=F(t.attr,n.tfName,n.defaultValue),void 0===a&&n.tfDeprecatedName&&(a=F(t.attr,n.tfDeprecatedName,n.defaultValue));break;case"shape[]":a=P(t.attr,n.tfName,n.defaultValue),void 0===a&&n.tfDeprecatedName&&(a=P(t.attr,n.tfDeprecatedName,n.defaultValue));break;case"dtype":a=_(t.attr,n.tfName,n.defaultValue),void 0===a&&n.tfDeprecatedName&&(a=_(t.attr,n.tfDeprecatedName,n.defaultValue));break;case"dtype[]":a=D(t.attr,n.tfName,n.defaultValue),void 0===a&&n.tfDeprecatedName&&(a=D(t.attr,n.tfDeprecatedName,n.defaultValue));break;case"func":a=A(t.attr,n.tfName,n.defaultValue),void 0===a&&n.tfDeprecatedName&&(a=A(t.attr,n.tfDeprecatedName,n.defaultValue));break;case"tensor":case"tensors":break;default:throw new Error(`Unsupported param type: ${n.type} for op: ${t.op}`)}return e[n.name]={value:a,type:r},e},{})),n}mapFunction(t){const e=t.nodeDef,n=[];let r={};null!=e&&(r=e.reduce((t,e)=>(t[e.name]=this.mapNode(e),"Const"===e.op&&n.push(t[e.name]),t),{}));const a=[],o=[];t.signature.inputArg.forEach(t=>{const[e]=Object(s.b)(t.name),n={name:e,op:"Placeholder",inputs:[],inputNames:[],category:"graph",inputParams:{},attrParams:{dtype:{value:I(t.type),type:"dtype"}},children:[]};n.signatureKey=t.name,a.push(n),r[e]=n});Object.keys(r).forEach(t=>{const e=r[t];e.inputNames.forEach(t=>{const[n]=Object(s.b)(t);e.inputs.push(r[n]),r[n].children.push(e)})});const i=t.ret;t.signature.outputArg.forEach(t=>{const[e,n]=Object(s.b)(i[t.name]),a=r[e];null!=a&&(a.defaultOutput=n,o.push(a))});const c=this.mapArgsToSignature(t);return{nodes:r,inputs:a,outputs:o,weights:n,placeholders:[],signature:c}}mapArgsToSignature(t){return{methodName:t.signature.name,inputs:t.signature.inputArg.reduce((t,e)=>(t[e.name]=this.mapArgToTensorInfo(e),t),{}),outputs:t.signature.outputArg.reduce((e,n)=>(e[n.name]=this.mapArgToTensorInfo(n,t.ret),e),{})}}mapArgToTensorInfo(t,e){let n=t.name;return null!=e&&(n=e[n]),{name:n,dtype:t.type}}}function N(e,n){const a=Array.isArray(e)?String.fromCharCode.apply(null,e):function(e){const n=Object(r.env)().global;if(void 0!==n.atob)return n.atob(e);if(void 0!==t)return new t(e,"base64").toString();throw new Error("Unable to decode base64 in this environment. Missing built-in atob() or Buffer()")}(e);return n?a:a.toLowerCase()}function S(t,e,n,r=!1){const a=t[e];return null!=a?N(a.s,r):n}function E(t,e,n){const r=t[e];return r?r.b:n}function T(t,e,n){const r=t[e]||{},a=null!=r.i?r.i:null!=r.f?r.f:n;return"number"==typeof a?a:parseInt(a,10)}function I(t){switch("string"==typeof t&&(t=a.a[t]),t){case a.a.DT_FLOAT:return"float32";case a.a.DT_INT32:case a.a.DT_INT64:case a.a.DT_INT8:case a.a.DT_UINT8:return"int32";case a.a.DT_BOOL:return"bool";case a.a.DT_DOUBLE:return"float32";case a.a.DT_STRING:return"string";default:return null}}function A(t,e,n){const r=t[e];return r&&r.func?r.func.name:n}function _(t,e,n){const r=t[e];return r&&r.type?I(r.type):n}function D(t,e,n){const r=t[e];return r&&r.list&&r.list.type?r.list.type.map(t=>I(t)):n}function M(t){if(!t.unknownRank)return null!=t.dim?t.dim.map(t=>"number"==typeof t.size?t.size:parseInt(t.size,10)):[]}function F(t,e,n){const r=t[e];return r&&r.shape?M(r.shape):n}function $(t,e,n){const r=t[e];return r?((r.list.f&&r.list.f.length?r.list.f:r.list.i)||[]).map(t=>"number"==typeof t?t:parseInt(t,10)):n}function R(t,e,n,r=!1){const a=t[e];return a&&a.list&&a.list.s?a.list.s.map(t=>N(t,r)):n}function P(t,e,n){const r=t[e];return r&&r.list&&r.list.shape?r.list.shape.map(t=>M(t)):n}function C(t,e,n){const r=t[e];return r&&r.list&&r.list.b?r.list.b:n}}).call(this,n(165).Buffer)},function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(4),a=n(1),o=n(0),s=n(7),i=n(3);const c=Object(i.b)({complex_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e){const n=Object(o.a)(t,"real","complex"),i=Object(o.a)(e,"imag","complex");s.e(n.shape,i.shape,`real and imag shapes, ${n.shape} and ${i.shape}, must match in call to tf.complex().`);const c={real:n,imag:i};return r.a.runKernel(a.z,c)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(4),a=n(1),o=n(0),s=n(16),i=n(3);const c=Object(i.b)({logicalAnd_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e){const n=Object(o.a)(t,"a","logicalAnd","bool"),i=Object(o.a)(e,"b","logicalAnd","bool");Object(s.a)(n.shape,i.shape);const c={a:n,b:i};return r.a.runKernel(a.Eb,c)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(4),a=n(1),o=n(0),s=n(7),i=n(3);const c=Object(i.b)({stack_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e=0){const n=Object(o.b)(t,"tensors","stack","string_or_numeric");s.b(n.length>=1,()=>"Pass at least one tensor to tf.stack"),n.length>0&&s.b(e<=n[0].rank,()=>"Axis must be <= rank of the tensor");const i=n,c={axis:e};return r.a.runKernel(a.cc,i,c)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(4),a=n(1),o=n(0),s=n(7),i=n(3);const c=Object(i.b)({expandDims_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e=0){const n=Object(o.a)(t,"x","expandDims","string_or_numeric");s.b(e<=n.rank,()=>"Axis must be <= rank of the tensor");const i={input:n},c={dim:e};return r.a.runKernel(a.ab,i,c)}})},function(t,e){t.exports=function(){throw new Error("define cannot be used indirect")}},function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var r=n(4),a=n(1),o=n(0),s=n(7),i=n(26),c=n(3),u=n(6);const d=Object(c.b)({conv2d_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e,n,c,d="NHWC",l=[1,1],p){const f=Object(o.a)(t,"x","conv2d"),h=Object(o.a)(e,"filter","conv2d");let b=f,m=!1;3===f.rank&&(m=!0,b=Object(u.a)(f,[1,f.shape[0],f.shape[1],f.shape[2]])),s.b(4===b.rank,()=>`Error in conv2d: input must be rank 4, but got rank ${b.rank}.`),s.b(4===h.rank,()=>"Error in conv2d: filter must be rank 4, but got rank "+h.rank+"."),null!=p&&s.b(s.v(c),()=>`Error in conv2d: pad must be an integer when using, dimRoundingMode ${p} but got pad ${c}.`);const g="NHWC"===d?b.shape[3]:b.shape[1];s.b(g===h.shape[2],()=>`Error in conv2d: depth of input (${g}) must match input depth for filter ${h.shape[2]}.`),s.b(i.h(n,l),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${n} and dilations '${l}'`);const y={x:b,filter:h},O={strides:n,pad:c,dataFormat:d,dilations:l,dimRoundingMode:p},j=r.a.runKernel(a.C,y,O);return m?Object(u.a)(j,[j.shape[1],j.shape[2],j.shape[3]]):j}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n(4),a=n(7),o=n(49);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function s(t,e="float32"){if("complex64"===e){const e=s(t,"float32"),n=s(t,"float32");return Object(o.a)(e,n)}const n=Object(a.F)(Object(a.N)(t),e);return r.a.makeTensor(n,t,e)}},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(4),a=n(1),o=n(0),s=n(3);const i=Object(s.b)({clone_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const e={x:Object(o.a)(t,"x","clone","string_or_numeric")};return r.a.runKernel(a.qb,e)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(4),a=n(1),o=n(0),s=n(3);const i=Object(s.b)({max_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e=null,n=!1){const s={x:Object(o.a)(t,"x","max")},i={reductionIndices:e,keepDims:n};return r.a.runKernel(a.Hb,s,i)}})},function(t,e,n){"use strict";n.d(e,"c",(function(){return i})),n.d(e,"b",(function(){return c})),n.d(e,"d",(function(){return u})),n.d(e,"f",(function(){return d})),n.d(e,"e",(function(){return l})),n.d(e,"h",(function(){return p})),n.d(e,"g",(function(){return f})),n.d(e,"a",(function(){return h}));var r=n(22),a=n(122);
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const o=Object(a.a)("kernelRegistry",()=>new Map),s=Object(a.a)("gradRegistry",()=>new Map);function i(t,e){const n=b(t,e);return o.get(n)}function c(t){return s.get(t)}function u(t){const e=o.entries(),n=[];for(;;){const{done:r,value:a}=e.next();if(r)break;const[o,s]=a,[i]=o.split("_");i===t&&n.push(s)}return n}function d(t){const{kernelName:e,backendName:n}=t,r=b(e,n);o.has(r)&&console.warn(`The kernel '${e}' for backend '${n}' is already registered`),o.set(r,t)}function l(t){const{kernelName:e}=t;s.has(e)&&Object(r.c)().getBool("DEBUG")&&console.warn(`Overriding the gradient for '${e}'`),s.set(e,t)}function p(t,e){const n=b(t,e);if(!o.has(n))throw new Error(`The kernel '${t}' for backend '${e}' is not registered`);o.delete(n)}function f(t){if(!s.has(t))throw new Error(`The gradient '${t}' for backend is not registered`);s.delete(t)}function h(t,e){u(t).forEach(t=>{d(Object.assign({},t,{backendName:e}))})}function b(t,e){return`${e}_${t}`}},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(4),a=n(1),o=n(0),s=n(3);const i=Object(s.b)({log_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const e={x:Object(o.a)(t,"x","log")};return r.a.runKernel(a.Bb,e)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(4),a=n(1),o=n(0),s=n(3);const i=Object(s.b)({split_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e,n=0){const s={x:Object(o.a)(t,"x","split")},i={numOrSizeSplits:e,axis:n};return r.a.runKernel(a.Jc,s,i)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n(0),a=n(7),o=n(42);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function s(t,e){Object(a.d)(t);const n=Object(r.c)(t,e);if(1!==n.length)throw new Error("tensor1d() requires values to be a flat/TypedArray");return Object(o.a)(t,null,n,e)}},function(t,e,n){"use strict";
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function r(t,e,n){const r=function(t,e,n){return function(t,e,n){let r=0,a=t.length,o=0,s=!1;for(;r<a;){o=r+(a-r>>>1);const i=n(e,t[o]);i>0?r=o+1:(a=o,s=!i)}return s?r:-r-1}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */(t,e,n||a)}(t,e,n),o=r<0?-(r+1):r;t.splice(o,0,e)}function a(t,e){return t>e?1:t<e?-1:0}function o(t,e,n,r,a){return c(t,e,n,r,a,0)}function s(t,e,n,r,a,o){return c(t,e,n,r,a,0,!1,o,!0)}function i(t,e,n,r,a,o){return c(t,e,n,r,a,o,!0)}function c(t,e,n,a,o,s,i=!1,c=!1,p=!1){const f=[];for(let t=0;t<e.length;t++)e[t]>o&&f.push({score:e[t],boxIndex:t,suppressBeginIndex:0});f.sort(l);const h=s>0?-.5/s:0,b=[],m=[];for(;b.length<n&&f.length>0;){const e=f.pop(),{score:n,boxIndex:s,suppressBeginIndex:i}=e;if(n<o)break;let c=!1;for(let n=b.length-1;n>=i;--n){const r=u(t,s,b[n]);if(r>=a){c=!0;break}if(e.score=e.score*d(a,h,r),e.score<=o)break}e.suppressBeginIndex=b.length,c||(e.score===n?(b.push(s),m.push(e.score)):e.score>o&&r(f,e,l))}const g=b.length,y=n-g;c&&y>0&&(b.push(...new Array(y).fill(0)),m.push(...new Array(y).fill(0)));const O={selectedIndices:b};return i&&(O.selectedScores=m),p&&(O.validOutputs=g),O}function u(t,e,n){const r=t.subarray(4*e,4*e+4),a=t.subarray(4*n,4*n+4),o=Math.min(r[0],r[2]),s=Math.min(r[1],r[3]),i=Math.max(r[0],r[2]),c=Math.max(r[1],r[3]),u=Math.min(a[0],a[2]),d=Math.min(a[1],a[3]),l=Math.max(a[0],a[2]),p=Math.max(a[1],a[3]),f=(i-o)*(c-s),h=(l-u)*(p-d);if(f<=0||h<=0)return 0;const b=Math.max(o,u),m=Math.max(s,d),g=Math.min(i,l),y=Math.min(c,p),O=Math.max(g-b,0)*Math.max(y-m,0);return O/(f+h-O)}function d(t,e,n){const r=Math.exp(e*n*n);return n<=t?r:0}function l(t,e){return t.score-e.score||t.score===e.score&&e.boxIndex-t.boxIndex}n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return i}))},function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var r=n(4),a=n(1),o=n(21),s=n(0),i=n(16),c=n(11),u=n(3);const d=Object(u.b)({maximum_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e){let n=Object(s.a)(t,"a","maximum"),u=Object(s.a)(e,"b","maximum");[n,u]=Object(o.makeTypesMatch)(n,u),"bool"===n.dtype&&(n=Object(c.a)(n,"int32"),u=Object(c.a)(u,"int32")),Object(i.a)(n.shape,u.shape);const d={a:n,b:u};return r.a.runKernel(a.Nb,d)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n(4),a=n(1),o=n(0),s=n(7),i=n(3),c=n(6);const u=Object(i.b)({depthwiseConv2d_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e,n,i,u="NHWC",d=[1,1],l){const p=Object(o.a)(t,"x","depthwiseConv2d"),f=Object(o.a)(e,"filter","depthwiseConv2d");let h=p,b=!1;3===p.rank&&(b=!0,h=Object(c.a)(p,[1,p.shape[0],p.shape[1],p.shape[2]])),s.b(4===h.rank,()=>`Error in depthwiseConv2d: input must be rank 4, but got rank ${h.rank}.`),s.b(4===f.rank,()=>"Error in depthwiseConv2d: filter must be rank 4, but got rank "+f.rank+"."),s.b(h.shape[3]===f.shape[2],()=>`Error in depthwiseConv2d: number of input channels (${h.shape[3]}) must match the inChannels dimension in filter ${f.shape[2]}.`),null!=l&&s.b(s.v(i),()=>`Error in depthwiseConv2d: pad must be an integer when using, dimRoundingMode ${l} but got pad ${i}.`);const m={x:h,filter:f},g={strides:n,pad:i,dataFormat:u,dilations:d,dimRoundingMode:l},y=r.a.runKernel(a.O,m,g);return b?Object(c.a)(y,[y.shape[1],y.shape[2],y.shape[3]]):y}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n(4),a=n(1),o=n(21),s=n(0),i=n(16),c=n(3);const u=Object(c.b)({equal_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e){let n=Object(s.a)(t,"a","equal"),c=Object(s.a)(e,"b","equal");[n,c]=Object(o.makeTypesMatch)(n,c),Object(i.a)(n.shape,c.shape);const u={a:n,b:c};return r.a.runKernel(a.X,u)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(4),a=n(7),o=n(49),s=n(55);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function i(t,e="float32"){if("complex64"===e){const e=i(t,"float32"),n=Object(s.a)(t,"float32");return Object(o.a)(e,n)}const n=Object(a.D)(Object(a.N)(t),e);return r.a.makeTensor(n,t,e)}},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(4),a=n(1),o=n(0),s=n(3);const i=Object(s.b)({relu_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const e={x:Object(o.a)(t,"x","relu")};return r.a.runKernel(a.mc,e)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(4),a=n(1),o=n(0),s=n(3);const i=Object(s.b)({step_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e=0){const n={x:Object(o.a)(t,"x","step")},s={alpha:e};return r.a.runKernel(a.Nc,n,s)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(4),a=n(1),o=n(0),s=n(7),i=n(3);const c=Object(i.b)({unstack_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e=0){const n=Object(o.a)(t,"x","unstack","string_or_numeric");s.b(e>=-n.shape.length&&e<n.shape.length,()=>`Axis = ${e} is not in [-${n.shape.length}, ${n.shape.length})`);const i={value:n},c={axis:e};return r.a.runKernel(a.Xc,i,c)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n(4),a=n(1),o=n(0),s=n(7),i=n(6);var c=n(3);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const u=Object(c.b)({batchNorm_:function(t,e,n,c,u,d){null==d&&(d=.001);const l=Object(o.a)(t,"x","batchNorm"),p=Object(o.a)(e,"mean","batchNorm"),f=Object(o.a)(n,"variance","batchNorm");let h,b;null!=u&&(h=Object(o.a)(u,"scale","batchNorm")),null!=c&&(b=Object(o.a)(c,"offset","batchNorm")),s.b(p.rank===f.rank,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),s.b(null==b||p.rank===b.rank,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),s.b(null==h||p.rank===h.rank,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");const m={x:function(t){let e;return e=0===t.rank||1===t.rank?Object(i.a)(t,[1,1,1,t.size]):2===t.rank?Object(i.a)(t,[1,1,t.shape[0],t.shape[1]]):3===t.rank?Object(i.a)(t,[1,t.shape[0],t.shape[1],t.shape[2]]):t,e}(l),scale:h,offset:b,mean:p,variance:f},g={varianceEpsilon:d},y=r.a.runKernel(a.ib,m,g);return Object(i.a)(y,l.shape)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(4),a=n(1),o=n(0),s=n(3);const i=Object(s.b)({sigmoid_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const e={x:Object(o.a)(t,"x","sigmoid")};return r.a.runKernel(a.Ac,e)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(4),a=n(1),o=n(0),s=n(7),i=n(3);const c=Object(i.b)({tile_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e){const n=Object(o.a)(t,"x","tile","string_or_numeric");s.b(n.rank===e.length,()=>`Error in transpose: rank of input ${n.rank} must match length of reps ${e}.`);const i={x:n},c={reps:e};return r.a.runKernel(a.Tc,i,c)}})},function(t,e,n){"use strict";
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */
var r,a;n.d(e,"a",(function(){return r})),function(t){t[t.DT_INVALID=0]="DT_INVALID",t[t.DT_FLOAT=1]="DT_FLOAT",t[t.DT_DOUBLE=2]="DT_DOUBLE",t[t.DT_INT32=3]="DT_INT32",t[t.DT_UINT8=4]="DT_UINT8",t[t.DT_INT16=5]="DT_INT16",t[t.DT_INT8=6]="DT_INT8",t[t.DT_STRING=7]="DT_STRING",t[t.DT_COMPLEX64=8]="DT_COMPLEX64",t[t.DT_INT64=9]="DT_INT64",t[t.DT_BOOL=10]="DT_BOOL",t[t.DT_QINT8=11]="DT_QINT8",t[t.DT_QUINT8=12]="DT_QUINT8",t[t.DT_QINT32=13]="DT_QINT32",t[t.DT_BFLOAT16=14]="DT_BFLOAT16",t[t.DT_FLOAT_REF=101]="DT_FLOAT_REF",t[t.DT_DOUBLE_REF=102]="DT_DOUBLE_REF",t[t.DT_INT32_REF=103]="DT_INT32_REF",t[t.DT_UINT8_REF=104]="DT_UINT8_REF",t[t.DT_INT16_REF=105]="DT_INT16_REF",t[t.DT_INT8_REF=106]="DT_INT8_REF",t[t.DT_STRING_REF=107]="DT_STRING_REF",t[t.DT_COMPLEX64_REF=108]="DT_COMPLEX64_REF",t[t.DT_INT64_REF=109]="DT_INT64_REF",t[t.DT_BOOL_REF=110]="DT_BOOL_REF",t[t.DT_QINT8_REF=111]="DT_QINT8_REF",t[t.DT_QUINT8_REF=112]="DT_QUINT8_REF",t[t.DT_QINT32_REF=113]="DT_QINT32_REF",t[t.DT_BFLOAT16_REF=114]="DT_BFLOAT16_REF"}(r||(r={})),function(t){let e;!function(t){t[t.LEGACY=0]="LEGACY",t[t.V1=1]="V1",t[t.V2=2]="V2"}(e=t.CheckpointFormatVersion||(t.CheckpointFormatVersion={}))}(a||(a={}))},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(4),a=n(1),o=n(0),s=n(3);const i=Object(s.b)({mean_:
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e=null,n=!1){const s={x:Object(o.a)(t,"x","mean")},i={axis:e,keepDims:n};return r.a.runKernel(a.Ob,s,i)}})},function(t,e,n){"use strict";
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
var r,a,o,s,i;n.d(e,"a",(function(){return r})),n.d(e,"c",(function(){return u})),n.d(e,"b",(function(){return d})),function(t){t.R0="R0",t.R1="R1",t.R2="R2",t.R3="R3",t.R4="R4",t.R5="R5",t.R6="R6"}(r||(r={})),function(t){t.float32="float32",t.int32="int32",t.bool="int32",t.complex64="complex64"}(a||(a={})),function(t){t.float32="float32",t.int32="int32",t.bool="bool",t.complex64="complex64"}(o||(o={})),function(t){t.float32="float32",t.int32="float32",t.bool="float32",t.complex64="complex64"}(s||(s={})),function(t){t.float32="complex64",t.int32="complex64",t.bool="complex64",t.complex64="complex64"}(i||(i={}));const c={float32:s,int32:a,bool:o,complex64:i};function u(t,e){if("string"===t||"string"===e){if("string"===t&&"string"===e)return"string";throw new Error(`Can not upcast ${t} with ${e}`)}return c[t][e]}function d(t){return u(t,"int32")}},function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(4),a=n(1),o=n(0),s=n(7),i=n(3);const c=Object(i.b)({batchToSpaceND_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e,n){const i=Object(o.a)(t,"x","batchToSpaceND"),c=e.reduce((t,e)=>t*e);s.b(i.rank>=1+e.length,()=>`input rank is ${i.rank} but should be > than blockShape.length ${e.length}`),s.b(n.length===e.length,()=>`crops.length is ${n.length} but should be equal to blockShape.length  ${e.length}`),s.b(i.shape[0]%c==0,()=>`input tensor batch is ${i.shape[0]} but is not divisible by the product of the elements of blockShape ${e.join(" * ")} === ${c}`);const u={x:i},d={blockShape:e,crops:n};return r.a.runKernel(a.t,u,d)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(4),a=n(1),o=n(0),s=n(3);const i=Object(s.b)({gather_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e,n=0,s=0){const i={x:Object(o.a)(t,"x","gather"),indices:Object(o.a)(e,"indices","gather","int32")},c={axis:n,batchDims:s};return r.a.runKernel(a.mb,i,c)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n(4),a=n(1),o=n(21),s=n(0),i=n(16),c=n(3);const u=Object(c.b)({less_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e){let n=Object(s.a)(t,"a","less"),c=Object(s.a)(e,"b","less");[n,c]=Object(o.makeTypesMatch)(n,c),Object(i.a)(n.shape,c.shape);const u={a:n,b:c};return r.a.runKernel(a.yb,u)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(4),a=n(1),o=n(0),s=n(3);const i=Object(s.b)({logicalNot_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const e={x:Object(o.a)(t,"x","logicalNot","bool")};return r.a.runKernel(a.Fb,e)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var r=n(4),a=n(1),o=n(21),s=n(0),i=n(16),c=n(11),u=n(3);const d=Object(u.b)({minimum_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e){let n=Object(s.a)(t,"a","minimum"),u=Object(s.a)(e,"b","minimum");[n,u]=Object(o.makeTypesMatch)(n,u),"bool"===n.dtype&&(n=Object(c.a)(n,"int32"),u=Object(c.a)(u,"int32")),Object(i.a)(n.shape,u.shape);const d={a:n,b:u};return r.a.runKernel(a.Qb,d)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n(4),a=n(1),o=n(21),s=n(0),i=n(16),c=n(3);const u=Object(c.b)({notEqual_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e){let n=Object(s.a)(t,"a","notEqual"),c=Object(s.a)(e,"b","notEqual");[n,c]=Object(o.makeTypesMatch)(n,c),Object(i.a)(n.shape,c.shape);const u={a:n,b:c};return r.a.runKernel(a.Zb,u)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(4),a=n(1),o=n(0),s=n(7),i=n(3);const c=Object(i.b)({spaceToBatchND_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e,n){const i=Object(o.a)(t,"x","spaceToBatchND");s.b(i.rank>=1+e.length,()=>`input rank ${i.rank} should be > than [blockShape] ${e.length}`),s.b(n.length===e.length,()=>`paddings.shape[0] ${n.length} must be equal to [blockShape] ${e.length}`),s.b(i.shape.reduce((t,r,a)=>a>0&&a<=e.length?t&&(r+n[a-1][0]+n[a-1][1])%e[a-1]==0:t,!0),()=>`input spatial dimensions ${i.shape.slice(1)} with paddings ${n.toString()} must be divisible by blockShapes ${e.toString()}`);const c={x:i},u={blockShape:e,paddings:n};return r.a.runKernel(a.Hc,c,u)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n(4),a=n(1),o=n(21),s=n(0),i=n(16),c=n(3);const u=Object(c.b)({squaredDifference_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e){let n=Object(s.a)(t,"a","squaredDifference"),c=Object(s.a)(e,"b","squaredDifference");[n,c]=Object(o.makeTypesMatch)(n,c),Object(i.a)(n.shape,c.shape);const u={a:n,b:c};return r.a.runKernel(a.Mc,u,{})}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(0),a=n(7),o=n(3),s=n(6);const i=Object(o.b)({squeeze_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e){const n=Object(r.a)(t,"x","squeeze");return Object(s.a)(n,Object(a.P)(n.shape,e).newShape)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(0),a=n(42);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function o(t,e,n){const o=Object(r.c)(t,n);return Object(a.a)(t,e,o,n)}},function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return s}));var r=n(164);n(116);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class a{constructor(t,e,n,a,o){this.mean=t,this.stdDev=e,this.dtype=n,this.nextVal=NaN,this.truncated=a,this.truncated&&(this.upper=this.mean+2*this.stdDev,this.lower=this.mean-2*this.stdDev);const s=o||Math.random();this.random=r.alea(s.toString())}nextValue(){if(!isNaN(this.nextVal)){const t=this.nextVal;return this.nextVal=NaN,t}let t,e,n=!1;for(;!n;){let r,a,o;do{r=2*this.random()-1,a=2*this.random()-1,o=r*r+a*a}while(o>=1||0===o);const s=Math.sqrt(-2*Math.log(o)/o);t=this.mean+this.stdDev*r*s,e=this.mean+this.stdDev*a*s,this.truncated&&!this.isValidTruncated(t)||(n=!0)}return this.truncated&&!this.isValidTruncated(e)||(this.nextVal=this.convertValue(e)),this.convertValue(t)}convertValue(t){return null==this.dtype||"float32"===this.dtype?t:Math.round(t)}isValidTruncated(t){return t<=this.upper&&t>=this.lower}}class o{constructor(t,e,n,o){this.alpha=t,this.beta=1/e,this.dtype=n;const s=o||Math.random();this.randu=r.alea(s.toString()),this.randn=new a(0,1,n,!1,this.randu()),this.d=t<1?t+2/3:t-1/3,this.c=1/Math.sqrt(9*this.d)}nextValue(){let t,e,n,r,a,o;for(;;){do{r=this.randn.nextValue(),o=1+this.c*r}while(o<=0);if(o*=o*o,t=r*r,e=1-.331*t*t,n=.5*t+this.d*(1-o+Math.log(o)),a=this.randu(),a<e||Math.log(a)<n)break}return o=1/this.beta*this.d*o,this.alpha<1&&(o*=Math.pow(this.randu(),1/this.alpha)),this.convertValue(o)}convertValue(t){return"float32"===this.dtype?t:Math.round(t)}}class s{constructor(t=0,e=1,n,a){if(this.canReturnFloat=()=>null==this.dtype||"float32"===this.dtype,this.min=t,this.range=e-t,this.dtype=n,null==a&&(a=Math.random()),"number"==typeof a&&(a=a.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error(`The difference between ${t} - ${e} <= 1 and dtype is not float`);this.random=r.alea(a)}convertValue(t){return this.canReturnFloat()?t:Math.round(t)}nextValue(){return this.convertValue(this.min+this.range*this.random())}}},function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const r={};function a(t){return r[t]}},function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n(4),a=n(1),o=n(0),s=n(56),i=n(3),c=n(6);const u=Object(i.b)({broadcastTo_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e){let n=Object(o.a)(t,"broadcastTo","x");const i=n.shape;if(e.some(t=>!(t>0)||t%1!=0))throw new Error(`broadcastTo(): Invalid broadcast shape [${e}].`);if(e.length<n.rank)throw new Error(`broadcastTo(): shape.length=${e.length} < input.rank=${n.rank}.`);if(e.length>n.rank){const t=n.shape.slice();for(;t.length<e.length;)t.unshift(1);n=Object(c.a)(n,t)}const u=n.shape,d=Array.from(e);for(let t=e.length-1;t>=0;t--)if(u[t]===e[t])d[t]=1;else if(1!==n.shape[t])throw new Error(`broadcastTo(): [${i}] cannot be broadcast to [${e}].`);if(0===d.map((t,e)=>t>1?e:-1).filter(t=>t>=0).length)return Object(s.a)(n);const l={x:n},p={reps:d};return r.a.runKernel(a.Tc,l,p)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(4),a=n(1),o=n(0),s=n(3);const i=Object(s.b)({min_:
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e=null,n=!1){const s={x:Object(o.a)(t,"x","min")},i={axis:e,keepDims:n};return r.a.runKernel(a.Pb,s,i)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(4),a=n(1),o=n(0),s=n(3);const i=Object(s.b)({oneHot_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e,n=1,s=0){if(e<2)throw new Error("Error in oneHot: depth must be >=2, but it is "+e);const i={indices:Object(o.a)(t,"indices","oneHot","int32")},c={depth:e,onValue:n,offValue:s};return r.a.runKernel(a.ac,i,c)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(4),a=n(1),o=n(0),s=n(3);const i=Object(s.b)({real_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const e={input:Object(o.a)(t,"input","real")};return r.a.runKernel(a.jc,e)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(4),a=n(1),o=n(7),s=n(3);const i=Object(s.b)({ifft_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){Object(o.b)("complex64"===t.dtype,()=>`The dtype for tf.spectral.ifft() must be complex64 but got ${t.dtype}.`);const e={input:t};return r.a.runKernel(a.pb,e)}})},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e){(function(e){t.exports=e}).call(this,{})},function(t,e,n){"use strict";n.r(e),n.d(e,"validateUpdateShape",(function(){return a})),n.d(e,"validateInput",(function(){return o})),n.d(e,"calculateShapes",(function(){return s}));var r=n(7);function a(t,e,n){const r=e.rank>1?e.shape[e.rank-1]:1,a=e.rank>1?e.rank-1:1,o="Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: "+n.shape+`, indices.shape: ${e.shape}, shape: ${t}`+`, sliceDim: ${r}, and batchDim: ${a}.`;if(n.rank<a)throw new Error(o+` update.rank < ${a}. `);if(t.length<r+(n.rank-a))throw new Error(o+" Output shape length < "+(r+(n.rank-a)));if(n.rank!==a+t.length-r)throw new Error(o+" update.rank != "+(a+t.length-r));for(let t=0;t<a;++t)if(n.shape[t]!==e.shape[t])throw new Error(o+` updates.shape[${t}] (${n.shape[t]}) != indices.shape[${t}] (${e.shape[t]}).`);for(let e=0;e<n.rank-a;++e)if(n.shape[e+a]!==t[e+r])throw new Error(o+` updates.shape[${e+a}] (${n.shape[e+a]}) != shape[${e+a}] (${t[e+a]})`)}function o(t,e,n){if(e.rank<1)throw new Error(`tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ${e.rank}.`);if(t.rank<1)throw new Error(`tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ${t.rank}.`);if("int32"!==e.dtype)throw new Error("The dtype of 'indices' should be int32, but got dtype: "+e.dtype);if(n.length<1)throw new Error("Output rank must be greater or equal to 1, but got shape: "+n);if(0===n.length){if(0===e.size)throw new Error("Indices specified for empty output. indices shape: "+e.shape);if(0===t.size)throw new Error("Updates specified for empty output. updates shape: "+t.shape)}a(n,e,t)}function s(t,e,n){const a=e.shape.length,o=a>1?e.shape[a-1]:1,s=n.length;let i=1;for(let t=o;t<s;++t)i*=n[t];const c=o<1?1:o;return{sliceRank:o,numUpdates:Object(r.N)(e.shape)/c,sliceSize:i,strides:[...Object(r.j)(n.slice(0,o)),1],outputSize:Object(r.N)(n)}}},function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(4),a=n(1),o=n(21),s=n(0),i=n(3);const c=Object(i.b)({floorDiv_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e){let n=Object(s.a)(t,"a","floorDiv"),i=Object(s.a)(e,"b","floorDiv");[n,i]=Object(o.makeTypesMatch)(n,i);const c={a:n,b:i};return r.a.runKernel(a.gb,c)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(4),a=n(1);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function o(t,e,n){const o={shape:t,value:e,dtype:n};return r.a.runKernel(a.db,{},o)}},function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(4),a=n(1),o=n(0),s=n(7),i=n(11),c=n(26),u=n(3),d=n(6);const l=Object(u.b)({avgPool_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e,n,u,l){const p=Object(o.a)(t,"x","avgPool","float32");s.b(c.h(n,1),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${n} and dilations '1'`);let f=p,h=!1;3===p.rank&&(h=!0,f=Object(d.a)(p,[1,p.shape[0],p.shape[1],p.shape[2]])),s.b(4===f.rank,()=>`Error in avgPool: x must be rank 4 but got rank ${f.rank}.`),null!=l&&s.b(s.v(u),()=>`Error in avgPool: pad must be an integer when using, dimRoundingMode ${l} but got pad ${u}.`);const b={x:f},m={filterSize:e,strides:n,pad:u,dimRoundingMode:l};let g=r.a.runKernel(a.o,b,m);return g=Object(i.a)(g,p.dtype),h?Object(d.a)(g,[g.shape[1],g.shape[2],g.shape[3]]):g}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(4),a=n(1),o=n(0),s=n(3);const i=Object(s.b)({cos_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const e={x:Object(o.a)(t,"x","cos")};return r.a.runKernel(a.I,e)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(4),a=n(1),o=n(0),s=n(3);const i=Object(s.b)({cumsum_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e=0,n=!1,s=!1){const i={x:Object(o.a)(t,"x","cumsum")},c={axis:e,exclusive:n,reverse:s};return r.a.runKernel(a.L,i,c)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(4),a=n(1),o=n(0),s=n(3);const i=Object(s.b)({elu_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const e={x:Object(o.a)(t,"x","elu")};return r.a.runKernel(a.V,e)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(4),a=n(1),o=n(0),s=n(3);const i=Object(s.b)({floor_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const e={x:Object(o.a)(t,"x","floor")};return r.a.runKernel(a.fb,e)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(4),a=n(1),o=n(0),s=n(3);const i=Object(s.b)({imag_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const e={input:Object(o.a)(t,"input","imag")};return r.a.runKernel(a.rb,e)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(4),a=n(1),o=n(0),s=n(3);const i=Object(s.b)({leakyRelu_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e=.2){const n={x:Object(o.a)(t,"x","leakyRelu")},s={alpha:e};return r.a.runKernel(a.xb,n,s)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var r=n(0),a=n(7),o=n(12),s=n(33),i=n(35),c=n(59),u=n(57),d=n(3),l=n(6),p=n(13),f=n(18);const h=Object(d.b)({logSumExp_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e=null,n=!1){const d=Object(r.a)(t,"x","logSumExp"),h=Object(a.I)(e,d.shape),b=Object(u.a)(d,h,!0),m=Object(p.a)(d,b),g=Object(i.a)(m),y=Object(f.a)(g,h),O=Object(c.a)(y),j=Object(o.a)(Object(l.a)(b,O.shape),O);if(n){const t=Object(s.e)(j.shape,h);return Object(l.a)(j,t)}return j}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(4),a=n(1),o=n(0),s=n(16),i=n(3);const c=Object(i.b)({logicalOr_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e){const n=Object(o.a)(t,"a","logicalOr","bool"),i=Object(o.a)(e,"b","logicalOr","bool");Object(s.a)(n.shape,i.shape);const c={a:n,b:i};return r.a.runKernel(a.Gb,c)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var r=n(4),a=n(1),o=n(0),s=n(7),i=n(26),c=n(3),u=n(6);const d=Object(c.b)({maxPool_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e,n,c,d){const l=Object(o.a)(t,"x","maxPool");let p=l,f=!1;3===l.rank&&(f=!0,p=Object(u.a)(l,[1,l.shape[0],l.shape[1],l.shape[2]])),s.b(4===p.rank,()=>`Error in maxPool: input must be rank 4 but got rank ${p.rank}.`),s.b(i.h(n,1),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${n} and dilations '1'`),null!=d&&s.b(s.v(c),()=>`Error in maxPool: pad must be an integer when using, dimRoundingMode ${d} but got pad ${c}.`);const h={x:p},b={filterSize:e,strides:n,pad:c,dimRoundingMode:d},m=r.a.runKernel(a.Ib,h,b);return f?Object(u.a)(m,[m.shape[1],m.shape[2],m.shape[3]]):m}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(4),a=n(1),o=n(21),s=n(0),i=n(3);const c=Object(i.b)({mod_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e){let n=Object(s.a)(t,"a","mod"),i=Object(s.a)(e,"b","mod");[n,i]=Object(o.makeTypesMatch)(n,i);const c={a:n,b:i};return r.a.runKernel(a.Sb,c)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(4),a=n(1),o=n(0),s=n(3);const i=Object(s.b)({prelu_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e){const n={x:Object(o.a)(t,"x","prelu"),alpha:Object(o.a)(e,"alpha","prelu")};return r.a.runKernel(a.gc,n)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(4),a=n(1),o=n(0),s=n(3);const i=Object(s.b)({relu6_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const e={x:Object(o.a)(t,"x","relu6")};return r.a.runKernel(a.nc,e)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(4),a=n(1),o=n(7),s=n(3);const i=Object(s.b)({fft_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){Object(o.b)("complex64"===t.dtype,()=>`The dtype for tf.spectral.fft() must be complex64 but got ${t.dtype}.`);const e={input:t};return r.a.runKernel(a.cb,e)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return b}));var r=n(7),a=n(49),o=n(28),s=n(103),i=n(3),c=n(91),u=n(6),d=n(24),l=n(60),p=n(55),f=n(20),h=n(111);const b=Object(i.b)({rfft_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e){Object(r.b)("float32"===t.dtype,()=>"The dtype for rfft() must be real value but got "+t.dtype);let n=t.shape[t.shape.length-1];const i=t.size/n;let b;if(null!=e&&e<n){const r=t.shape.map(t=>0),a=t.shape.map(t=>t);a[t.shape.length-1]=e,b=Object(d.a)(t,r,a),n=e}else if(null!=e&&e>n){const r=t.shape.map(t=>t);r[t.shape.length-1]=e-n,b=Object(o.a)([t,Object(p.a)(r)],t.shape.length-1),n=e}else b=t;const m=Object(f.a)(b),g=Object(u.a)(Object(a.a)(b,m),[i,n]),y=Object(h.a)(g),O=Math.floor(n/2)+1,j=Object(c.a)(y),v=Object(s.a)(y),w=Object(l.a)(j,[O,n-O],j.shape.length-1),x=Object(l.a)(v,[O,n-O],v.shape.length-1),k=b.shape.slice();return k[b.shape.length-1]=O,Object(u.a)(Object(a.a)(w[0],x[0]),k)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(4),a=n(1),o=n(0),s=n(7),i=n(3);const c=Object(i.b)({unsortedSegmentSum_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e,n){const i=Object(o.a)(t,"x","unsortedSegmentSum"),c=Object(o.a)(e,"segmentIds","unsortedSegmentSum","int32");Object(s.b)(Object(s.v)(n),()=>"numSegments must be of dtype int");const u={x:i,segmentIds:c},d={numSegments:n};return r.a.runKernel(a.Yc,u,d)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return m}));var r=n(0),a=n(7),o=n(36),s=n(33),i=n(57),c=n(89),u=n(3),d=n(40),l=n(6),p=n(15),f=n(32),h=n(23),b=n(18);const m=Object(u.b)({norm_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e="euclidean",n=null,u=!1){const m=function t(e,n,r=null){if(0===e.rank)return Object(o.a)(e);if(1!==e.rank&&null===r)return t(Object(l.a)(e,[-1]),n,r);if(1===e.rank||"number"==typeof r||Array.isArray(r)&&1===r.length){if(1===n)return Object(b.a)(Object(o.a)(e),r);if(n===1/0)return Object(i.a)(Object(o.a)(e),r);if(n===-1/0)return Object(c.a)(Object(o.a)(e),r);if("euclidean"===n||2===n)return Object(f.a)(Object(b.a)(Object(d.a)(Object(o.a)(e),Object(p.a)(2,"int32")),r));throw new Error("Error in norm: invalid ord value: "+n)}if(Array.isArray(r)&&2===r.length){if(1===n)return Object(i.a)(Object(b.a)(Object(o.a)(e),r[0]),r[1]-1);if(n===1/0)return Object(i.a)(Object(b.a)(Object(o.a)(e),r[1]),r[0]);if(n===-1/0)return Object(c.a)(Object(b.a)(Object(o.a)(e),r[1]),r[0]);if("fro"===n||"euclidean"===n)return Object(f.a)(Object(b.a)(Object(h.a)(e),r));throw new Error("Error in norm: invalid ord value: "+n)}throw new Error("Error in norm: invalid axis: "+r)}(t=Object(r.a)(t,"x","norm"),e,n);let g=m.shape;if(u){const e=Object(a.I)(n,t.shape);g=s.e(m.shape,e)}return Object(l.a)(m,g)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(4),a=n(1),o=n(7),s=n(3),i=n(6);const c=Object(s.b)({conv2DBackpropInput_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e,n,s,c,u="NHWC",d){o.b(t.length===e.rank,()=>`Length of inShape (${t.length}) and rank of dy (${e.rank}) must match`);let l=t,p=e,f=!1;3===e.rank&&(f=!0,p=Object(i.a)(e,[1,e.shape[0],e.shape[1],e.shape[2]]),l=[1,t[0],t[1],t[2]]),o.b(4===l.length,()=>"Error in conv2dDerInput: inShape must be length 4, but got length "+l.length+"."),o.b(4===p.rank,()=>"Error in conv2dDerInput: dy must be rank 4, but got rank "+p.rank),o.b(4===n.rank,()=>"Error in conv2dDerInput: filter must be rank 4, but got rank "+n.rank);const h="NHWC"===u?l[3]:l[1],b="NHWC"===u?p.shape[3]:p.shape[1];o.b(h===n.shape[2],()=>`Error in conv2dDerInput: depth of input (${h}) must match input depth for filter ${n.shape[2]}.`),o.b(b===n.shape[3],()=>`Error in conv2dDerInput: depth of output (${b}) must match output depth for filter ${n.shape[3]}.`),null!=d&&o.b(o.v(c),()=>`Error in conv2dDerInput: pad must be an integer when using, dimRoundingMode ${d} but got pad ${c}.`);const m={dy:p,filter:n},g={strides:s,pad:c,dataFormat:u,dimRoundingMode:d,inputShape:l},y=r.a.runKernel(a.E,m,g);return f?Object(i.a)(y,[y.shape[1],y.shape[2],y.shape[3]]):y}})},function(t,e,n){"use strict";n.r(e),n.d(e,"TEST_EPSILON_FLOAT16",(function(){return i})),n.d(e,"expectArraysClose",(function(){return c})),n.d(e,"testEpsilon",(function(){return u})),n.d(e,"expectPromiseToFail",(function(){return l})),n.d(e,"expectArraysEqual",(function(){return p})),n.d(e,"expectNumbersClose",(function(){return f})),n.d(e,"expectValuesInRange",(function(){return b})),n.d(e,"expectArrayBuffersEqual",(function(){return m})),n.d(e,"encodeStrings",(function(){return g}));var r=n(4),a=n(0),o=n(7),s=n(10);
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const i=.1;function c(t,e,n){return null==n&&(n=u()),d(t,e,(t,e)=>h(t,e,n))}function u(){return 32===r.a.backend.floatPrecision()?.001:i}function d(t,e,n){let r=!0;if((Object(o.A)(t)||Object(o.A)(e))&&(r=!1),Object(o.A)(t)&&Object(o.A)(e)&&(r=!0),r){const n=t.constructor.name,r=e.constructor.name;if(n!==r)throw new Error(`Arrays are of different type. Actual: ${n}. Expected: `+r)}if(Array.isArray(t)&&Array.isArray(e)){const n=Object(a.c)(t),r=Object(a.c)(e);if(!Object(o.a)(n,r))throw new Error(`Arrays have different shapes. Actual: [${n}]. Expected: [${r}]`)}const s=Object(o.A)(t)?t:Object(o.m)(t),i=Object(o.A)(e)?e:Object(o.m)(e);if(s.length!==i.length)throw new Error(`Arrays have different lengths actual: ${s.length} vs expected: ${i.length}.\nActual:   ${s}.\nExpected: ${i}.`);for(let t=0;t<i.length;++t){const e=s[t],r=i[t];if(!n(e,r))throw new Error(`Arrays differ: actual[${t}] = ${e}, expected[${t}] = ${r}.\nActual:   ${s}.\nExpected: ${i}.`)}}function l(t,e){t().then(()=>e.fail(),()=>e())}function p(t,e){const n="string"==typeof e||"number"==typeof e||"boolean"==typeof e?[e]:e;return Object(o.z)(t)||Object(o.z)(t[0])||Object(o.z)(e)||Object(o.z)(e[0])?d(t,n,(t,e)=>t==e):d(t,e,(t,e)=>h(t,e,0))}function f(t,e,n){if(null==n&&(n=u()),!h(t,e,n))throw new Error(`Numbers differ: actual === ${t}, expected === ${e}`)}function h(t,e,n){return!isFinite(t)&&!isFinite(e)||!(isNaN(t)||isNaN(e)||Math.abs(t-e)>n)}function b(t,e,n){for(let r=0;r<t.length;r++)if(t[r]<e||t[r]>n)throw new Error(`Value out of range:${t[r]} low: ${e}, high: ${n}`)}function m(t,e){expect(new Float32Array(t)).toEqual(new Float32Array(e))}function g(t){for(let e=0;e<t.length;e++){const n=t[e];Array.isArray(n)?g(n):t[e]=Object(s.encodeString)(n)}return t}},function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(4),a=n(1),o=n(7),s=n(3),i=n(6);const c=Object(s.b)({conv2DBackpropFilter_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e,n,s,c,u="NHWC",d){let l=t;3===t.rank&&(l=Object(i.a)(t,[1,t.shape[0],t.shape[1],t.shape[2]]));let p=e;3===p.rank&&(p=Object(i.a)(e,[1,e.shape[0],e.shape[1],e.shape[2]])),o.b(4===l.rank,()=>"Error in conv2dDerFilter: input must be rank 4, but got shape "+l.shape+"."),o.b(4===p.rank,()=>"Error in conv2dDerFilter: dy must be rank 4, but got shape "+p.shape+"."),o.b(4===n.length,()=>"Error in conv2dDerFilter: filterShape must be length 4, but got "+n+".");const f="NHWC"===u?l.shape[3]:l.shape[1],h="NHWC"===u?p.shape[3]:p.shape[1];o.b(f===n[2],()=>`Error in conv2dDerFilter: depth of input ${f}) must match input depth in filter (${n[2]}.`),o.b(h===n[3],()=>`Error in conv2dDerFilter: depth of dy (${h}) must match output depth for filter (${n[3]}).`),null!=d&&o.b(o.v(c),()=>`Error in conv2dDerFilter: pad must be an integer when using, dimRoundingMode ${d} but got pad ${c}.`);const b={x:l,dy:p},m={strides:s,pad:c,dataFormat:u,dimRoundingMode:d,filterShape:n};return r.a.runKernel(a.D,b,m)}})},function(t,e,n){"use strict";(function(t){n(4);var e=n(126),r=n(22);
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const a=Object(r.c)();a.registerFlag("DEBUG",()=>!1,t=>{t&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")}),a.registerFlag("IS_BROWSER",()=>e.isBrowser()),a.registerFlag("IS_NODE",()=>void 0!==t&&void 0!==t.versions&&void 0!==t.versions.node),a.registerFlag("IS_CHROME",()=>"undefined"!=typeof navigator&&null!=navigator&&null!=navigator.userAgent&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)),a.registerFlag("PROD",()=>!1),a.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",()=>a.getBool("DEBUG")),a.registerFlag("DEPRECATION_WARNINGS_ENABLED",()=>!0),a.registerFlag("IS_TEST",()=>!1),a.registerFlag("CHECK_COMPUTATION_FOR_ERRORS",()=>!0)}).call(this,n(125))},function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a}));class r{constructor(t,e){this.backend=t,this.dataMover=e,this.data=new WeakMap,this.dataIdsCount=0}get(t){return this.data.has(t)||this.dataMover.moveData(this.backend,t),this.data.get(t)}set(t,e){this.dataIdsCount++,this.data.set(t,e)}has(t){return this.data.has(t)}delete(t){return this.dataIdsCount--,this.data.delete(t)}numDataIds(){return this.dataIdsCount}}class a{decComplexRef(t){}time(t){return o("time")}read(t){return o("read")}readSync(t){return o("readSync")}numDataIds(){return o("numDataIds")}disposeData(t){return o("disposeData")}write(t,e,n){return o("write")}move(t,e,n,r){return o("move")}memory(){return o("memory")}floatPrecision(){return o("floatPrecision")}epsilon(){return 32===this.floatPrecision()?1e-7:1e-4}batchMatMul(t,e,n,r){return o("batchMatMul")}fusedBatchMatMul({a:t,b:e,transposeA:n,transposeB:r,bias:a,activation:s,preluActivationWeights:i}){return o("fusedBatchMatMul")}slice(t,e,n){return o("slice")}stridedSlice(t,e,n,r){return o("stridedSlice")}unstack(t,e){return o("unstack")}reverse(t,e){return o("reverse")}concat(t,e){return o("concat")}neg(t){return o("neg")}add(t,e){return o("add")}addN(t){return o("addN")}subtract(t,e){return o("subtract")}multiply(t,e){return o("multiply")}realDivide(t,e){return o("realDivide")}floorDiv(t,e){return o("floorDiv")}sum(t,e){return o("sum")}prod(t,e){return o("prod")}unsortedSegmentSum(t,e,n){return o("unsortedSegmentSum")}argMin(t,e){return o("argMin")}argMax(t,e){return o("argMax")}equal(t,e){return o("equal")}notEqual(t,e){return o("notEqual")}less(t,e){return o("less")}lessEqual(t,e){return o("lessEqual")}greater(t,e){return o("greater")}greaterEqual(t,e){return o("greaterEqual")}logicalNot(t){return o("logicalNot")}logicalAnd(t,e){return o("logicalAnd")}logicalOr(t,e){return o("logicalOr")}where(t){return o("where")}select(t,e,n){return o("select")}topk(t,e,n){return o("topk")}min(t,e){return o("min")}minimum(t,e){return o("minimum")}mod(t,e){return o("mod")}max(t,e){return o("max")}maximum(t,e){return o("maximum")}all(t,e){return o("all")}any(t,e){return o("any")}squaredDifference(t,e){return o("squaredDifference")}ceil(t){return o("ceil")}floor(t){return o("floor")}round(t){return o("round")}sign(t){return o("sign")}isNaN(t){return o("isNaN")}isInf(t){return o("isInf")}isFinite(t){return o("isFinite")}pow(t,e){return o("pow")}exp(t){return o("exp")}expm1(t){return o("expm1")}softmax(t,e){return o("softmax")}log(t){return o("log")}log1p(t){return o("log1p")}sqrt(t){return o("sqrt")}rsqrt(t){return o("rsqrt")}square(t){return o("square")}reciprocal(t){return o("reciprocal")}relu(t){return o("relu")}relu6(t){return o("relu6")}prelu(t,e){return o("prelu")}elu(t){return o("elu")}eluDer(t,e){return o("eluDer")}selu(t){return o("selu")}int(t){return o("int")}clip(t,e,n){return o("clip")}abs(t){return o("abs")}complexAbs(t){return o("complexAbs")}sigmoid(t){return o("sigmoid")}softplus(t){return o("softplus")}sin(t){return o("sin")}cos(t){return o("cos")}tan(t){return o("tan")}asin(t){return o("asin")}acos(t){return o("acos")}atan(t){return o("atan")}atan2(t,e){return o("atan2")}sinh(t){return o("sinh")}cosh(t){return o("cosh")}tanh(t){return o("tanh")}asinh(t){return o("asinh")}acosh(t){return o("acosh")}atanh(t){return o("atanh")}erf(t){return o("erf")}step(t,e){return o("step")}fusedConv2d({input:t,filter:e,convInfo:n,bias:r,activation:a,preluActivationWeights:s}){return o("fusedConv2d")}conv2d(t,e,n){return o("conv2d")}conv2dDerInput(t,e,n){return o("conv2dDerInput")}conv2dDerFilter(t,e,n){return o("conv2dDerFilter")}fusedDepthwiseConv2D({input:t,filter:e,convInfo:n,bias:r,activation:a,preluActivationWeights:s}){return o("fusedDepthwiseConv2D")}depthwiseConv2D(t,e,n){return o("depthwiseConv2D")}depthwiseConv2DDerInput(t,e,n){return o("depthwiseConv2DDerInput")}depthwiseConv2DDerFilter(t,e,n){return o("depthwiseConv2DDerFilter")}conv3d(t,e,n){return o("conv3d")}conv3dDerInput(t,e,n){return o("conv3dDerInput")}conv3dDerFilter(t,e,n){return o("conv3dDerFilter")}maxPool(t,e){return o("maxPool")}maxPoolBackprop(t,e,n,r){return o("maxPoolBackprop")}avgPool(t,e){return o("avgPool")}avgPoolBackprop(t,e,n){return o("avgPoolBackprop")}avgPool3d(t,e){return o("avgPool3d")}avgPool3dBackprop(t,e,n){return o("avgPool3dBackprop")}maxPool3d(t,e){return o("maxPool3d")}maxPool3dBackprop(t,e,n,r){return o("maxPool3dBackprop")}reshape(t,e){return o("reshape")}cast(t,e){return o("cast")}tile(t,e){return o("tile")}pad(t,e,n){return o("pad")}transpose(t,e){return o("transpose")}gather(t,e,n,r=0){return o("gather")}gatherND(t,e){return o("gatherND")}scatterND(t,e,n){return o("scatterND")}batchToSpaceND(t,e,n){return o("batchToSpaceND")}spaceToBatchND(t,e,n){return o("spaceToBatchND")}resizeBilinear(t,e,n,r,a){return o("resizeBilinear")}resizeBilinearBackprop(t,e,n){return o("resizeBilinearBackprop")}resizeNearestNeighbor(t,e,n,r,a){return o("resizeNearestNeighbor")}resizeNearestNeighborBackprop(t,e,n){return o("resizeNearestNeighborBackprop")}batchNorm(t,e,n,r,a,s){return o("batchNorm")}localResponseNormalization4D(t,e,n,r,a){return o("localResponseNormalization4D")}LRNGrad(t,e,n,r,a,s,i){return o("LRNGrad")}multinomial(t,e,n,r){return o("multinomial")}oneHot(t,e,n,r){return o("oneHot")}cumsum(t,e,n,r){return o("cumsum")}nonMaxSuppression(t,e,n,r,a){return o("nonMaxSuppression")}fft(t){return o("fft")}ifft(t){return o("ifft")}complex(t,e){return o("complex")}real(t){return o("real")}imag(t){return o("imag")}cropAndResize(t,e,n,r,a,s){return o("cropAndResize")}depthToSpace(t,e,n){return o("depthToSpace")}split(t,e,n){return o("split")}sparseToDense(t,e,n,r){return o("sparseToDense")}diag(t){return o("diag")}fill(t,e,n){return o("fill")}onesLike(t){return o("onesLike")}zerosLike(t){return o("zerosLike")}linspace(t,e,n){return o("linspace")}dispose(){return o("dispose")}}function o(t){throw new Error(`'${t}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(4),a=n(1),o=n(0),s=n(3);const i=Object(s.b)({tanh_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const e={x:Object(o.a)(t,"x","tanh")};return r.a.runKernel(a.Sc,e)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(4),a=n(1);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function o(t,e,n=1,o="float32"){if(0===n)throw new Error("Cannot have a step of zero");const s={start:t,stop:e,step:n,dtype:o};return r.a.runKernel(a.ic,{},s)}},function(t,e,n){"use strict";(function(t,r){
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
let a;function o(){if(null==a){let e;if("undefined"!=typeof window)e=window;else if(void 0!==t)e=t;else if(void 0!==r)e=r;else{if("undefined"==typeof self)throw new Error("Could not find a global object");e=self}a=e}return a}function s(t,e){const n=function(){const t=o();return null==t._tfGlobals&&(t._tfGlobals=new Map),t._tfGlobals}();if(n.has(t))return n.get(t);{const r=e();return n.set(t,r),n.get(t)}}n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return s}))}).call(this,n(124),n(125))},function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const r={float32:4,float16:2,int32:4,uint16:2,uint8:1,bool:1,complex64:8}},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e){var n,r,a=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function i(t){if(n===setTimeout)return setTimeout(t,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(t){n=o}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(t){r=s}}();var c,u=[],d=!1,l=-1;function p(){d&&c&&(d=!1,c.length?u=c.concat(u):l=-1,u.length&&f())}function f(){if(!d){var t=i(p);d=!0;for(var e=u.length;e;){for(c=u,u=[];++l<e;)c&&c[l].run();l=-1,e=u.length}c=null,d=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function h(t,e){this.fun=t,this.array=e}function b(){}a.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];u.push(new h(t,e)),1!==u.length||d||i(f)},h.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=b,a.addListener=b,a.once=b,a.off=b,a.removeListener=b,a.removeAllListeners=b,a.emit=b,a.prependListener=b,a.prependOnceListener=b,a.listeners=function(t){return[]},a.binding=function(t){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(t){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},function(t,e,n){"use strict";function r(){if("undefined"!=typeof navigator&&null!=navigator){const t=navigator.userAgent||navigator.vendor||window.opera;return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4))}return!1}function a(){return"undefined"!=typeof window&&null!=window.document||"undefined"!=typeof WorkerGlobalScope}n.r(e),n.d(e,"isMobile",(function(){return r})),n.d(e,"isBrowser",(function(){return a}))},function(t,e,n){"use strict";
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function r(t,e=!1){console.log(t.toString(e))}n.d(e,"a",(function(){return r}))},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(4),a=n(1),o=n(0),s=n(3);const i=Object(s.b)({all_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e=null,n=!1){const s={x:Object(o.a)(t,"x","all","bool")},i={axis:e,keepDims:n};return r.a.runKernel(a.f,s,i)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(4),a=n(1),o=n(0),s=n(3);const i=Object(s.b)({any_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e=null,n=!1){const s={x:Object(o.a)(t,"x","any","bool")},i={axis:e,keepDims:n};return r.a.runKernel(a.g,s,i)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(4),a=n(1),o=n(0),s=n(3);const i=Object(s.b)({argMax_:
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e=0){const n={x:Object(o.a)(t,"x","argMax")},s={axis:e};return r.a.runKernel(a.h,n,s)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(4),a=n(1),o=n(0),s=n(3);const i=Object(s.b)({argMin_:
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e=0){const n={x:Object(o.a)(t,"x","argMin")},s={axis:e};return r.a.runKernel(a.i,n,s)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(4),a=n(1),o=n(21),s=n(0),i=n(3);const c=Object(i.b)({atan2_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e){let n=Object(s.a)(t,"a","atan2"),i=Object(s.a)(e,"b","atan2");[n,i]=Object(o.makeTypesMatch)(n,i);const c={a:n,b:i};return r.a.runKernel(a.m,c)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n(0),a=n(7),o=n(54),s=n(26),i=n(3),c=n(6);const u=Object(i.b)({conv1d_:function(t,e,n,i,u="NWC",d=1,l){const p=Object(r.a)(t,"x","conv1d"),f=Object(r.a)(e,"filter","conv1d");let h=p,b=!1;2===p.rank&&(b=!0,h=Object(c.a)(p,[1,p.shape[0],p.shape[1]])),a.b(3===h.rank,()=>`Error in conv1d: input must be rank 3, but got rank ${h.rank}.`),a.b(3===f.rank,()=>"Error in conv1d: filter must be rank 3, but got rank "+f.rank+"."),null!=l&&a.b(a.v(i),()=>`Error in conv1d: pad must be an integer when using, dimRoundingMode ${l} but got pad ${i}.`),a.b(h.shape[2]===f.shape[1],()=>`Error in conv1d: depth of input (${h.shape[2]}) must match input depth for filter ${f.shape[1]}.`),a.b(s.h(n,d),()=>`Error in conv1D: Either stride or dilation must be 1. Got stride ${n} and dilation '${d}'`),a.b("NWC"===u,()=>`Error in conv1d: got dataFormat of ${u} but only NWC is currently supported.`);const m=Object(c.a)(f,[1,f.shape[0],f.shape[1],f.shape[2]]),g=Object(c.a)(h,[h.shape[0],1,h.shape[1],h.shape[2]]),y=[1,n],O=[1,d],j=Object(o.a)(g,m,y,i,"NHWC",O,l);return b?Object(c.a)(j,[j.shape[2],j.shape[3]]):Object(c.a)(j,[j.shape[0],j.shape[2],j.shape[3]])}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n(0),a=n(115),o=n(3);const s=Object(o.b)({conv2dTranspose_:function(t,e,n,o,s,i){const c=Object(r.a)(t,"x","conv2dTranspose"),u=Object(r.a)(e,"filter","conv2dTranspose");return Object(a.a)(n,c,u,o,s,"NHWC",i)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(4),a=n(1),o=n(0),s=n(3);const i=Object(s.b)({cosh_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const e={x:Object(o.a)(t,"x","cosh")};return r.a.runKernel(a.J,e)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(4),a=n(1),o=n(0),s=n(7),i=n(3);const c=Object(i.b)({depthToSpace_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e,n="NHWC"){const i=Object(o.a)(t,"x","depthToSpace"),c="NHWC"===n?i.shape[1]:i.shape[2],u="NHWC"===n?i.shape[2]:i.shape[3],d="NHWC"===n?i.shape[3]:i.shape[1];s.b(c*e>=0,()=>`Negative dimension size caused by overflow when multiplying\n    ${c} and ${e}  for depthToSpace with input shape\n    ${i.shape}`),s.b(u*e>=0,()=>`Negative dimension size caused by overflow when multiplying\n    ${u} and ${e} for depthToSpace with input shape\n        ${i.shape}`),s.b(d%(e*e)==0,()=>`Dimension size must be evenly divisible by ${e*e} but is ${d} for depthToSpace with input shape ${i.shape}`);const l={x:i},p={blockSize:e,dataFormat:n};return r.a.runKernel(a.N,l,p)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n(4),a=n(1),o=n(0),s=n(7),i=n(3),c=n(6);const u=Object(i.b)({dilation2d_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e,n,i,u=[1,1],d="NHWC"){const l=Object(o.a)(t,"x","dilation2d"),p=Object(o.a)(e,"filter","dilation2d");s.b(3===l.rank||4===l.rank,()=>"Error in dilation2d: input must be rank 3 or 4, but got rank "+l.rank+"."),s.b(3===p.rank,()=>"Error in dilation2d: filter must be rank 3, but got rank "+p.rank+"."),s.b("NHWC"===d,()=>"Error in dilation2d: Only NHWC is currently supported, but got dataFormat of "+d);let f=l,h=!1;3===l.rank&&(f=Object(c.a)(l,[1,l.shape[0],l.shape[1],l.shape[2]]),h=!0);const b={x:f,filter:p},m={strides:n,pad:i,dilations:u},g=r.a.runKernel(a.S,b,m);return h?Object(c.a)(g,[g.shape[1],g.shape[2],g.shape[3]]):g}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var r=n(21),a=n(0),o=n(14),s=n(65),i=n(3),c=n(31),u=n(20);const d=Object(i.b)({divNoNan_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e){let n=Object(a.a)(t,"a","div"),i=Object(a.a)(e,"b","div");[n,i]=Object(r.makeTypesMatch)(n,i);const d=Object(o.a)(n,i),l=Object(u.a)(d),p=Object(s.a)(i,l);return Object(c.a)(p,l,d)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(0),a=n(7),o=n(25),s=n(3),i=n(6);const c=Object(s.b)({dot_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e){const n=Object(r.a)(t,"t1","dot"),s=Object(r.a)(e,"t2","dot");a.b(!(1!==n.rank&&2!==n.rank||1!==s.rank&&2!==s.rank),()=>`Error in dot: inputs must all be rank 1 or 2, but got ranks ${n.rank} and ${s.rank}.`);const c=1===n.rank?n.size:n.shape[1],u=1===s.rank?s.size:s.shape[0];if(a.b(c===u,()=>`Error in dot: inner dimensions of inputs must match, but got ${c} and ${u}.`),1===n.rank&&1===s.rank){const t=Object(i.a)(n,[1,-1]),e=Object(i.a)(s,[-1,1]),r=Object(o.a)(t,e);return Object(i.a)(r,[])}if(1===n.rank&&2===s.rank){const t=Object(i.a)(n,[1,-1]),e=Object(i.a)(s,[s.shape[0],s.shape[1]]),r=Object(o.a)(t,e);return Object(i.a)(r,[r.size])}if(2===n.rank&&1===s.rank){const t=Object(i.a)(s,[-1,1]),e=Object(o.a)(n,t);return Object(i.a)(e,[e.size])}{const t=Object(i.a)(s,[s.shape[0],s.shape[1]]);return Object(o.a)(n,t)}}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n(4),a=n(1),o=n(0),s=n(7),i=n(3),c=n(6);const u=Object(i.b)({localResponseNormalization_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e=5,n=1,i=1,u=.5){const d=Object(o.a)(t,"x","localResponseNormalization");s.b(4===d.rank||3===d.rank,()=>`Error in localResponseNormalization: x must be rank 3 or 4 but got\n               rank ${d.rank}.`),s.b(s.v(e),()=>`Error in localResponseNormalization: depthRadius must be an integer but got depthRadius ${e}.`);let l=d,p=!1;3===d.rank&&(p=!0,l=Object(c.a)(d,[1,d.shape[0],d.shape[1],d.shape[2]]));const f={x:l},h={depthRadius:e,bias:n,alpha:i,beta:u},b=r.a.runKernel(a.vb,f,h);return p?Object(c.a)(b,[b.shape[1],b.shape[2],b.shape[3]]):b}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(4),a=n(1),o=n(0),s=n(3);const i=Object(s.b)({log1p_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const e={x:Object(o.a)(t,"x","log1p")};return r.a.runKernel(a.Cb,e)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(4),a=n(1),o=n(0),s=n(3);const i=Object(s.b)({softplus_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const e={x:Object(o.a)(t,"x","softplus")};return r.a.runKernel(a.Gc,e)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n(0),a=n(16),o=n(50),s=n(79),i=n(106),c=n(3);const u=Object(c.b)({logicalXor_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e){const n=Object(r.a)(t,"a","logicalXor","bool"),c=Object(r.a)(e,"b","logicalXor","bool");return Object(a.a)(n.shape,c.shape),Object(o.a)(Object(i.a)(t,e),Object(s.a)(Object(o.a)(t,e)))}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(4),a=n(1),o=n(0),s=n(7),i=n(3);const c=Object(i.b)({mirrorPad_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e,n){s.b("reflect"===n||"symmetric"===n,()=>`Invalid mode. Mode must be either reflect or symmetric. Got ${n}.`);const i=Object(o.a)(t,"x","mirrorPad");if(0===i.rank)throw new Error("mirrorPad(scalar) is not defined. Pass non-scalar to mirrorPad");s.b(e.length===i.rank,()=>`Padding doesn't match input. Must be ${i.rank}. Got ${e.length}.`);const c="reflect"===n?1:0;for(let t=0;t<i.rank;t++)s.b(2===e[t].length,()=>"Invalid number of paddings. Must be length of 2 each."),s.b(e[t][0]>=0&&e[t][0]<=i.shape[t]-c&&e[t][1]>=0&&e[t][1]<=i.shape[t]-c,()=>`Padding in dimension ${t} cannot be greater than or equal to ${i.shape[t]-c} or less than 0 for input of shape `+i.shape);const u={paddings:e,mode:n},d={x:i};return r.a.runKernel(a.Rb,d,u)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var r=n(0),a=n(7),o=n(98),s=n(76),i=n(26),c=n(107),u=n(3),d=n(6),l=n(82);const p=Object(u.b)({pool_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e,n,u,p,f){null==p&&(p=[1,1]),null==f&&(f=1),0===u&&(u="valid");const h=Object(r.a)(t,"x","maxPool");let b=h,m=!1;3===h.rank&&(m=!0,b=Object(d.a)(h,[1,h.shape[0],h.shape[1],h.shape[2]])),a.b(i.h(f,p),()=>`Error in pool: Either strides or dilations must be 1. Got strides ${f} and dilations '${p}'`);const g=i.e(b.shape,e,f,p,u),y=[g.dilationHeight,g.dilationWidth];let O;O="same"===u?function(t,e){const n=t.map((t,n)=>t+(t-1)*(e[n]-1)).map(t=>t-1),r=n.map(t=>Math.floor(t/2)),a=n.map((t,e)=>t-r[e]);return n.map((t,e)=>[r[e],a[e]])}([g.filterHeight,g.filterWidth],y):[[0,0],[0,0]];const j=1===y[0]&&1===y[1],[v,w]=function(t,e,n){const r=n.map(t=>t[0]),a=n.map(t=>t[1]),o=t.concat(r,a),s=e.map((t,e)=>(t-o[e]%t)%t),i=a.map((t,e)=>t+s[e]),c=e.map((t,e)=>[r[e],i[e]]),u=e.map((t,e)=>[0,s[e]]);return[c,u]}([g.inHeight,g.inWidth],y,O),x=j?u:"valid",k=j?b:Object(l.a)(b,y,v),N=("avg"===n?()=>Object(o.a)(k,e,f,x):()=>Object(c.a)(k,e,f,x))(),S=j?N:Object(s.a)(N,y,w);return m?Object(d.a)(S,[S.shape[1],S.shape[2],S.shape[3]]):S}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(4),a=n(1),o=n(0),s=n(11),i=n(3);const c=Object(i.b)({prod_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e=null,n=!1){let i=Object(o.a)(t,"x","prod");"bool"===i.dtype&&(i=Object(s.a)(i,"int32"));const c={x:i},u={axis:e,keepDims:n};return r.a.runKernel(a.hc,c,u)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n(39),a=n(3),o=n(86);const s=Object(a.b)({randomUniform_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e=0,n=1,a="float32",s){const i=Object(r.a)(t,a),c=new o.c(e,n,null,s);for(let t=0;t<i.values.length;t++)i.values[t]=c.nextValue();return i.toTensor()}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(4),a=n(1),o=n(0),s=n(3);const i=Object(s.b)({rsqrt_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const e={x:Object(o.a)(t,"x","rsqrt")};return r.a.runKernel(a.wc,e)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(4),a=n(1),o=n(0),s=n(3);const i=Object(s.b)({selu_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const e={x:Object(o.a)(t,"x","selu")};return r.a.runKernel(a.zc,e)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n(0),a=n(7),o=n(54),s=n(64),i=n(3),c=n(6);const u=Object(i.b)({separableConv2d_:function(t,e,n,i,u,d=[1,1],l="NHWC"){const p=Object(r.a)(t,"x","separableConv2d"),f=Object(r.a)(e,"depthwiseFilter","separableConv2d"),h=Object(r.a)(n,"pointwiseFilter","separableConv2d");let b=p,m=!1;if(3===p.rank&&(m=!0,b=Object(c.a)(p,[1,p.shape[0],p.shape[1],p.shape[2]])),"NCHW"===l)throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");a.b(4===b.rank,()=>`Error in separableConv2d: input must be rank 4, but got rank ${b.rank}.`),a.b(4===f.rank,()=>`Error in separableConv2d: depthwise filter must be rank 4, but got rank ${f.rank}.`),a.b(4===h.rank,()=>`Error in separableConv2d: pointwise filter must be rank 4, but got rank ${f.rank}.`),a.b(1===h.shape[0],()=>`Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got ${h.shape[0]}.`),a.b(1===h.shape[1],()=>`Error in separableConv2d: the second dimension of pointwise filter must be 1, but got ${h.shape[1]}.`);const g=f.shape[2],y=f.shape[3];a.b(h.shape[2]===g*y,()=>`Error in separableConv2d: the third dimension of pointwise filter must be ${g*y}, but got ${h.shape[2]}.`);const O=Object(s.a)(b,f,i,u,l,d),j=Object(o.a)(O,h,1,"valid",l);return m?Object(c.a)(j,[j.shape[1],j.shape[2],j.shape[3]]):j}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(4),a=n(1),o=n(0),s=n(3);const i=Object(s.b)({sin_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const e={x:Object(o.a)(t,"x","sin")};return r.a.runKernel(a.Cc,e)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(4),a=n(1),o=n(0),s=n(3);const i=Object(s.b)({sinh_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const e={x:Object(o.a)(t,"x","sinh")};return r.a.runKernel(a.Dc,e)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var r=n(49),a=n(28),o=n(103),s=n(8),i=n(3),c=n(91),u=n(6),d=n(41),l=n(15),p=n(24),f=n(92);const h=Object(i.b)({irfft_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const e=t.shape[t.shape.length-1],n=t.size/e;let i;if(e<=2){const r=Object(u.a)(t,[n,e]);i=Object(f.a)(r)}else{const h=[n,2*(e-1)],b=Object(u.a)(Object(c.a)(t),[n,e]),m=Object(u.a)(Object(o.a)(t),[n,e]),g=Object(d.a)(Object(p.a)(b,[0,1],[n,e-2]),1),y=Object(s.a)(Object(d.a)(Object(p.a)(m,[0,1],[n,e-2]),1),Object(l.a)(-1)),O=Object(a.a)([b,g],1),j=Object(a.a)([m,y],1),v=Object(u.a)(Object(r.a)(O,j),[h[0],h[1]]);i=Object(f.a)(v)}if(i=Object(c.a)(i),3===t.rank&&0!==t.shape[0]){const e=i,n=t.shape[0];i=Object(u.a)(i,[n,i.shape[0]/n,i.shape[1]]),e.dispose()}return i}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n(0),a=n(7),o=n(42);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function s(t,e,n){if(Object(a.d)(t),null!=e&&3!==e.length)throw new Error("tensor3d() requires shape to have three numbers");const s=Object(r.c)(t,n);if(3!==s.length&&1!==s.length)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(1===s.length&&null==e)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return Object(o.a)(t,e,s,n)}},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(4),a=n(1),o=n(0),s=n(3);const i=Object(s.b)({topk_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e=1,n=!0){const s=Object(o.a)(t,"x","topk");if(0===s.rank)throw new Error("topk() expects the input to be of rank 1 or higher");const i=s.shape[s.shape.length-1];if(e>i)throw new Error(`'k' passed to topk() must be <= the last dimension (${i}) but got `+e);const c={x:s},u={k:e,sorted:n},[d,l]=r.a.runKernel(a.Uc,c,u);return{values:d,indices:l}}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(4),a=n(1),o=n(0),s=n(7),i=n(3);const c=Object(i.b)({unique_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e=0){const n=Object(o.a)(t,"x","unique","string_or_numeric");Object(s.b)(n.rank>0,()=>"The input tensor must be at least 1D");const i={x:n},c={axis:e},[u,d]=r.a.runKernel(a.Wc,i,c);return{values:u,indices:d}}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(158),a=n(0);const o=
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
async function(t){const e=Object(a.a)(t,"condition","whereAsync","bool"),n=await e.data(),o=Object(r.a)(e.shape,n);return t!==e&&e.dispose(),o}},function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(39);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function a(t,e){const n=[];for(let t=0;t<e.length;t++)e[t]&&n.push(t);const a=Object(r.a)(t,"int32"),o=Object(r.a)([n.length,t.length],"int32");for(let e=0;e<n.length;e++){const r=a.indexToLoc(n[e]),s=e*t.length;o.values.set(r,s)}return o.toTensor()}},function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(4),a=n(1),o=n(7),s=n(3),i=n(6);const c=Object(s.b)({conv3DBackpropInput_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e,n,s,c){o.b(t.length===e.rank,()=>`Length of inShape (${t.length}) and rank of dy (${e.rank}) must match`);let u=t,d=e,l=!1;4===e.rank&&(l=!0,d=Object(i.a)(e,[1,e.shape[0],e.shape[1],e.shape[2],e.shape[3]]),u=[1,t[0],t[1],t[2],t[3]]);const p=u[4],f=d.shape[4];o.b(5===u.length,()=>"Error in conv3dDerInput: inShape must be length 5, but got length "+u.length+"."),o.b(5===d.rank,()=>"Error in conv3dDerInput: dy must be rank 5, but got rank "+d.rank),o.b(5===n.rank,()=>"Error in conv3dDerInput: filter must be rank 5, but got rank "+n.rank),o.b(p===n.shape[3],()=>`Error in conv3dDerInput: depth of input (${p}) must match input depth for filter ${n.shape[3]}.`),o.b(f===n.shape[4],()=>`Error in conv3dDerInput: depth of output (${f}) must match output depth for filter ${n.shape[4]}.`);const h={dy:d,filter:n},b={pad:c,strides:s,inputShape:u},m=r.a.runKernel(a.H,h,b);return l?Object(i.a)(m,[m.shape[1],m.shape[2],m.shape[3],m.shape[4]]):m}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n(4),a=n(1),o=n(0),s=n(7),i=n(3),c=n(6);const u=Object(i.b)({resizeNearestNeighbor_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e,n=!1,i=!1){const u=Object(o.a)(t,"images","resizeNearestNeighbor");s.b(3===u.rank||4===u.rank,()=>`Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank ${u.rank}.`),s.b(2===e.length,()=>"Error in resizeNearestNeighbor: new shape must 2D, but got shape "+e+"."),s.b("float32"===u.dtype||"int32"===u.dtype,()=>"`images` must have `int32` or `float32` as dtype"),s.b(!1===i||!1===n,()=>"Error in resizeNearestNeighbor: If halfPixelCenters is true, alignCorners must be false.");let d=u,l=!1;3===u.rank&&(l=!0,d=Object(c.a)(u,[1,u.shape[0],u.shape[1],u.shape[2]]));const[]=e,p={images:d},f={alignCorners:n,halfPixelCenters:i,size:e},h=r.a.runKernel(a.rc,p,f);return l?Object(c.a)(h,[h.shape[1],h.shape[2],h.shape[3]]):h}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n(4),a=n(1),o=n(0),s=n(7),i=n(3),c=n(6);const u=Object(i.b)({resizeBilinear_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e,n=!1,i=!1){const u=Object(o.a)(t,"images","resizeBilinear");s.b(3===u.rank||4===u.rank,()=>`Error in resizeBilinear: x must be rank 3 or 4, but got rank ${u.rank}.`),s.b(2===e.length,()=>"Error in resizeBilinear: new shape must 2D, but got shape "+e+"."),s.b(!1===i||!1===n,()=>"Error in resizeBilinear: If halfPixelCenters is true, alignCorners must be false.");let d=u,l=!1;3===u.rank&&(l=!0,d=Object(c.a)(u,[1,u.shape[0],u.shape[1],u.shape[2]]));const[]=e,p={images:d},f={alignCorners:n,halfPixelCenters:i,size:e},h=r.a.runKernel(a.pc,p,f);return l?Object(c.a)(h,[h.shape[1],h.shape[2],h.shape[3]]):h}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(4),a=n(1),o=n(3),s=n(6);const i=Object(o.b)({depthwiseConv2dNativeBackpropInput_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e,n,o,i,c=[1,1],u){let d=e,l=!1;3===e.rank&&(l=!0,d=Object(s.a)(e,[1,e.shape[0],e.shape[1],e.shape[2]]));const p={dy:d,filter:n},f={strides:o,pad:i,dimRoundingMode:u,dilations:c,inputShape:t},h=r.a.runKernel(a.Q,p,f);return l?Object(s.a)(h,[h.shape[1],h.shape[2],h.shape[3]]):h}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(4),a=n(1),o=n(3),s=n(6);const i=Object(o.b)({depthwiseConv2dNativeBackpropFilter_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e,n,o,i,c=[1,1],u){let d=t;3===t.rank&&(d=Object(s.a)(t,[1,t.shape[0],t.shape[1],t.shape[2]]));let l=e;3===l.rank&&(l=Object(s.a)(e,[1,e.shape[0],e.shape[1],e.shape[2]]));const p={x:d,dy:l},f={strides:o,pad:i,dimRoundingMode:u,dilations:c,filterShape:n};return r.a.runKernel(a.P,p,f)}})},function(t,e,n){var r=n(229),a=n(230),o=n(231),s=n(232),i=n(233),c=n(234),u=n(235);u.alea=r,u.xor128=a,u.xorwow=o,u.xorshift7=s,u.xor4096=i,u.tychei=c,t.exports=u},function(t,e,n){"use strict";(function(t){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
var r=n(223),a=n(224),o=n(225);function s(){return c.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function i(t,e){if(s()<e)throw new RangeError("Invalid typed array length");return c.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(e)).__proto__=c.prototype:(null===t&&(t=new c(e)),t.length=e),t}function c(t,e,n){if(!(c.TYPED_ARRAY_SUPPORT||this instanceof c))return new c(t,e,n);if("number"==typeof t){if("string"==typeof e)throw new Error("If encoding is specified then the first argument must be a string");return l(this,t)}return u(this,t,e,n)}function u(t,e,n,r){if("number"==typeof e)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer?function(t,e,n,r){if(e.byteLength,n<0||e.byteLength<n)throw new RangeError("'offset' is out of bounds");if(e.byteLength<n+(r||0))throw new RangeError("'length' is out of bounds");e=void 0===n&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,n):new Uint8Array(e,n,r);c.TYPED_ARRAY_SUPPORT?(t=e).__proto__=c.prototype:t=p(t,e);return t}(t,e,n,r):"string"==typeof e?function(t,e,n){"string"==typeof n&&""!==n||(n="utf8");if(!c.isEncoding(n))throw new TypeError('"encoding" must be a valid string encoding');var r=0|h(e,n),a=(t=i(t,r)).write(e,n);a!==r&&(t=t.slice(0,a));return t}(t,e,n):function(t,e){if(c.isBuffer(e)){var n=0|f(e.length);return 0===(t=i(t,n)).length||e.copy(t,0,0,n),t}if(e){if("undefined"!=typeof ArrayBuffer&&e.buffer instanceof ArrayBuffer||"length"in e)return"number"!=typeof e.length||(r=e.length)!=r?i(t,0):p(t,e);if("Buffer"===e.type&&o(e.data))return p(t,e.data)}var r;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(t,e)}function d(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function l(t,e){if(d(e),t=i(t,e<0?0:0|f(e)),!c.TYPED_ARRAY_SUPPORT)for(var n=0;n<e;++n)t[n]=0;return t}function p(t,e){var n=e.length<0?0:0|f(e.length);t=i(t,n);for(var r=0;r<n;r+=1)t[r]=255&e[r];return t}function f(t){if(t>=s())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+s().toString(16)+" bytes");return 0|t}function h(t,e){if(c.isBuffer(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var n=t.length;if(0===n)return 0;for(var r=!1;;)switch(e){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":case void 0:return L(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return z(t).length;default:if(r)return L(t).length;e=(""+e).toLowerCase(),r=!0}}function b(t,e,n){var r=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return I(this,e,n);case"utf8":case"utf-8":return S(this,e,n);case"ascii":return E(this,e,n);case"latin1":case"binary":return T(this,e,n);case"base64":return N(this,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return A(this,e,n);default:if(r)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),r=!0}}function m(t,e,n){var r=t[e];t[e]=t[n],t[n]=r}function g(t,e,n,r,a){if(0===t.length)return-1;if("string"==typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,isNaN(n)&&(n=a?0:t.length-1),n<0&&(n=t.length+n),n>=t.length){if(a)return-1;n=t.length-1}else if(n<0){if(!a)return-1;n=0}if("string"==typeof e&&(e=c.from(e,r)),c.isBuffer(e))return 0===e.length?-1:y(t,e,n,r,a);if("number"==typeof e)return e&=255,c.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?a?Uint8Array.prototype.indexOf.call(t,e,n):Uint8Array.prototype.lastIndexOf.call(t,e,n):y(t,[e],n,r,a);throw new TypeError("val must be string, number or Buffer")}function y(t,e,n,r,a){var o,s=1,i=t.length,c=e.length;if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(t.length<2||e.length<2)return-1;s=2,i/=2,c/=2,n/=2}function u(t,e){return 1===s?t[e]:t.readUInt16BE(e*s)}if(a){var d=-1;for(o=n;o<i;o++)if(u(t,o)===u(e,-1===d?0:o-d)){if(-1===d&&(d=o),o-d+1===c)return d*s}else-1!==d&&(o-=o-d),d=-1}else for(n+c>i&&(n=i-c),o=n;o>=0;o--){for(var l=!0,p=0;p<c;p++)if(u(t,o+p)!==u(e,p)){l=!1;break}if(l)return o}return-1}function O(t,e,n,r){n=Number(n)||0;var a=t.length-n;r?(r=Number(r))>a&&(r=a):r=a;var o=e.length;if(o%2!=0)throw new TypeError("Invalid hex string");r>o/2&&(r=o/2);for(var s=0;s<r;++s){var i=parseInt(e.substr(2*s,2),16);if(isNaN(i))return s;t[n+s]=i}return s}function j(t,e,n,r){return V(L(e,t.length-n),t,n,r)}function v(t,e,n,r){return V(function(t){for(var e=[],n=0;n<t.length;++n)e.push(255&t.charCodeAt(n));return e}(e),t,n,r)}function w(t,e,n,r){return v(t,e,n,r)}function x(t,e,n,r){return V(z(e),t,n,r)}function k(t,e,n,r){return V(function(t,e){for(var n,r,a,o=[],s=0;s<t.length&&!((e-=2)<0);++s)n=t.charCodeAt(s),r=n>>8,a=n%256,o.push(a),o.push(r);return o}(e,t.length-n),t,n,r)}function N(t,e,n){return 0===e&&n===t.length?r.fromByteArray(t):r.fromByteArray(t.slice(e,n))}function S(t,e,n){n=Math.min(t.length,n);for(var r=[],a=e;a<n;){var o,s,i,c,u=t[a],d=null,l=u>239?4:u>223?3:u>191?2:1;if(a+l<=n)switch(l){case 1:u<128&&(d=u);break;case 2:128==(192&(o=t[a+1]))&&(c=(31&u)<<6|63&o)>127&&(d=c);break;case 3:o=t[a+1],s=t[a+2],128==(192&o)&&128==(192&s)&&(c=(15&u)<<12|(63&o)<<6|63&s)>2047&&(c<55296||c>57343)&&(d=c);break;case 4:o=t[a+1],s=t[a+2],i=t[a+3],128==(192&o)&&128==(192&s)&&128==(192&i)&&(c=(15&u)<<18|(63&o)<<12|(63&s)<<6|63&i)>65535&&c<1114112&&(d=c)}null===d?(d=65533,l=1):d>65535&&(d-=65536,r.push(d>>>10&1023|55296),d=56320|1023&d),r.push(d),a+=l}return function(t){var e=t.length;if(e<=4096)return String.fromCharCode.apply(String,t);var n="",r=0;for(;r<e;)n+=String.fromCharCode.apply(String,t.slice(r,r+=4096));return n}(r)}e.Buffer=c,e.SlowBuffer=function(t){+t!=t&&(t=0);return c.alloc(+t)},e.INSPECT_MAX_BYTES=50,c.TYPED_ARRAY_SUPPORT=void 0!==t.TYPED_ARRAY_SUPPORT?t.TYPED_ARRAY_SUPPORT:function(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"==typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(t){return!1}}(),e.kMaxLength=s(),c.poolSize=8192,c._augment=function(t){return t.__proto__=c.prototype,t},c.from=function(t,e,n){return u(null,t,e,n)},c.TYPED_ARRAY_SUPPORT&&(c.prototype.__proto__=Uint8Array.prototype,c.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&c[Symbol.species]===c&&Object.defineProperty(c,Symbol.species,{value:null,configurable:!0})),c.alloc=function(t,e,n){return function(t,e,n,r){return d(e),e<=0?i(t,e):void 0!==n?"string"==typeof r?i(t,e).fill(n,r):i(t,e).fill(n):i(t,e)}(null,t,e,n)},c.allocUnsafe=function(t){return l(null,t)},c.allocUnsafeSlow=function(t){return l(null,t)},c.isBuffer=function(t){return!(null==t||!t._isBuffer)},c.compare=function(t,e){if(!c.isBuffer(t)||!c.isBuffer(e))throw new TypeError("Arguments must be Buffers");if(t===e)return 0;for(var n=t.length,r=e.length,a=0,o=Math.min(n,r);a<o;++a)if(t[a]!==e[a]){n=t[a],r=e[a];break}return n<r?-1:r<n?1:0},c.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},c.concat=function(t,e){if(!o(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return c.alloc(0);var n;if(void 0===e)for(e=0,n=0;n<t.length;++n)e+=t[n].length;var r=c.allocUnsafe(e),a=0;for(n=0;n<t.length;++n){var s=t[n];if(!c.isBuffer(s))throw new TypeError('"list" argument must be an Array of Buffers');s.copy(r,a),a+=s.length}return r},c.byteLength=h,c.prototype._isBuffer=!0,c.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<t;e+=2)m(this,e,e+1);return this},c.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<t;e+=4)m(this,e,e+3),m(this,e+1,e+2);return this},c.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<t;e+=8)m(this,e,e+7),m(this,e+1,e+6),m(this,e+2,e+5),m(this,e+3,e+4);return this},c.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?S(this,0,t):b.apply(this,arguments)},c.prototype.equals=function(t){if(!c.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===c.compare(this,t)},c.prototype.inspect=function(){var t="",n=e.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,n).match(/.{2}/g).join(" "),this.length>n&&(t+=" ... ")),"<Buffer "+t+">"},c.prototype.compare=function(t,e,n,r,a){if(!c.isBuffer(t))throw new TypeError("Argument must be a Buffer");if(void 0===e&&(e=0),void 0===n&&(n=t?t.length:0),void 0===r&&(r=0),void 0===a&&(a=this.length),e<0||n>t.length||r<0||a>this.length)throw new RangeError("out of range index");if(r>=a&&e>=n)return 0;if(r>=a)return-1;if(e>=n)return 1;if(this===t)return 0;for(var o=(a>>>=0)-(r>>>=0),s=(n>>>=0)-(e>>>=0),i=Math.min(o,s),u=this.slice(r,a),d=t.slice(e,n),l=0;l<i;++l)if(u[l]!==d[l]){o=u[l],s=d[l];break}return o<s?-1:s<o?1:0},c.prototype.includes=function(t,e,n){return-1!==this.indexOf(t,e,n)},c.prototype.indexOf=function(t,e,n){return g(this,t,e,n,!0)},c.prototype.lastIndexOf=function(t,e,n){return g(this,t,e,n,!1)},c.prototype.write=function(t,e,n,r){if(void 0===e)r="utf8",n=this.length,e=0;else if(void 0===n&&"string"==typeof e)r=e,n=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e|=0,isFinite(n)?(n|=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}var a=this.length-e;if((void 0===n||n>a)&&(n=a),t.length>0&&(n<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");for(var o=!1;;)switch(r){case"hex":return O(this,t,e,n);case"utf8":case"utf-8":return j(this,t,e,n);case"ascii":return v(this,t,e,n);case"latin1":case"binary":return w(this,t,e,n);case"base64":return x(this,t,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return k(this,t,e,n);default:if(o)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),o=!0}},c.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function E(t,e,n){var r="";n=Math.min(t.length,n);for(var a=e;a<n;++a)r+=String.fromCharCode(127&t[a]);return r}function T(t,e,n){var r="";n=Math.min(t.length,n);for(var a=e;a<n;++a)r+=String.fromCharCode(t[a]);return r}function I(t,e,n){var r=t.length;(!e||e<0)&&(e=0),(!n||n<0||n>r)&&(n=r);for(var a="",o=e;o<n;++o)a+=B(t[o]);return a}function A(t,e,n){for(var r=t.slice(e,n),a="",o=0;o<r.length;o+=2)a+=String.fromCharCode(r[o]+256*r[o+1]);return a}function _(t,e,n){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+e>n)throw new RangeError("Trying to access beyond buffer length")}function D(t,e,n,r,a,o){if(!c.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>a||e<o)throw new RangeError('"value" argument is out of bounds');if(n+r>t.length)throw new RangeError("Index out of range")}function M(t,e,n,r){e<0&&(e=65535+e+1);for(var a=0,o=Math.min(t.length-n,2);a<o;++a)t[n+a]=(e&255<<8*(r?a:1-a))>>>8*(r?a:1-a)}function F(t,e,n,r){e<0&&(e=4294967295+e+1);for(var a=0,o=Math.min(t.length-n,4);a<o;++a)t[n+a]=e>>>8*(r?a:3-a)&255}function $(t,e,n,r,a,o){if(n+r>t.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function R(t,e,n,r,o){return o||$(t,0,n,4),a.write(t,e,n,r,23,4),n+4}function P(t,e,n,r,o){return o||$(t,0,n,8),a.write(t,e,n,r,52,8),n+8}c.prototype.slice=function(t,e){var n,r=this.length;if((t=~~t)<0?(t+=r)<0&&(t=0):t>r&&(t=r),(e=void 0===e?r:~~e)<0?(e+=r)<0&&(e=0):e>r&&(e=r),e<t&&(e=t),c.TYPED_ARRAY_SUPPORT)(n=this.subarray(t,e)).__proto__=c.prototype;else{var a=e-t;n=new c(a,void 0);for(var o=0;o<a;++o)n[o]=this[o+t]}return n},c.prototype.readUIntLE=function(t,e,n){t|=0,e|=0,n||_(t,e,this.length);for(var r=this[t],a=1,o=0;++o<e&&(a*=256);)r+=this[t+o]*a;return r},c.prototype.readUIntBE=function(t,e,n){t|=0,e|=0,n||_(t,e,this.length);for(var r=this[t+--e],a=1;e>0&&(a*=256);)r+=this[t+--e]*a;return r},c.prototype.readUInt8=function(t,e){return e||_(t,1,this.length),this[t]},c.prototype.readUInt16LE=function(t,e){return e||_(t,2,this.length),this[t]|this[t+1]<<8},c.prototype.readUInt16BE=function(t,e){return e||_(t,2,this.length),this[t]<<8|this[t+1]},c.prototype.readUInt32LE=function(t,e){return e||_(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},c.prototype.readUInt32BE=function(t,e){return e||_(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},c.prototype.readIntLE=function(t,e,n){t|=0,e|=0,n||_(t,e,this.length);for(var r=this[t],a=1,o=0;++o<e&&(a*=256);)r+=this[t+o]*a;return r>=(a*=128)&&(r-=Math.pow(2,8*e)),r},c.prototype.readIntBE=function(t,e,n){t|=0,e|=0,n||_(t,e,this.length);for(var r=e,a=1,o=this[t+--r];r>0&&(a*=256);)o+=this[t+--r]*a;return o>=(a*=128)&&(o-=Math.pow(2,8*e)),o},c.prototype.readInt8=function(t,e){return e||_(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},c.prototype.readInt16LE=function(t,e){e||_(t,2,this.length);var n=this[t]|this[t+1]<<8;return 32768&n?4294901760|n:n},c.prototype.readInt16BE=function(t,e){e||_(t,2,this.length);var n=this[t+1]|this[t]<<8;return 32768&n?4294901760|n:n},c.prototype.readInt32LE=function(t,e){return e||_(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},c.prototype.readInt32BE=function(t,e){return e||_(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},c.prototype.readFloatLE=function(t,e){return e||_(t,4,this.length),a.read(this,t,!0,23,4)},c.prototype.readFloatBE=function(t,e){return e||_(t,4,this.length),a.read(this,t,!1,23,4)},c.prototype.readDoubleLE=function(t,e){return e||_(t,8,this.length),a.read(this,t,!0,52,8)},c.prototype.readDoubleBE=function(t,e){return e||_(t,8,this.length),a.read(this,t,!1,52,8)},c.prototype.writeUIntLE=function(t,e,n,r){(t=+t,e|=0,n|=0,r)||D(this,t,e,n,Math.pow(2,8*n)-1,0);var a=1,o=0;for(this[e]=255&t;++o<n&&(a*=256);)this[e+o]=t/a&255;return e+n},c.prototype.writeUIntBE=function(t,e,n,r){(t=+t,e|=0,n|=0,r)||D(this,t,e,n,Math.pow(2,8*n)-1,0);var a=n-1,o=1;for(this[e+a]=255&t;--a>=0&&(o*=256);)this[e+a]=t/o&255;return e+n},c.prototype.writeUInt8=function(t,e,n){return t=+t,e|=0,n||D(this,t,e,1,255,0),c.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[e]=255&t,e+1},c.prototype.writeUInt16LE=function(t,e,n){return t=+t,e|=0,n||D(this,t,e,2,65535,0),c.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):M(this,t,e,!0),e+2},c.prototype.writeUInt16BE=function(t,e,n){return t=+t,e|=0,n||D(this,t,e,2,65535,0),c.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):M(this,t,e,!1),e+2},c.prototype.writeUInt32LE=function(t,e,n){return t=+t,e|=0,n||D(this,t,e,4,4294967295,0),c.TYPED_ARRAY_SUPPORT?(this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t):F(this,t,e,!0),e+4},c.prototype.writeUInt32BE=function(t,e,n){return t=+t,e|=0,n||D(this,t,e,4,4294967295,0),c.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):F(this,t,e,!1),e+4},c.prototype.writeIntLE=function(t,e,n,r){if(t=+t,e|=0,!r){var a=Math.pow(2,8*n-1);D(this,t,e,n,a-1,-a)}var o=0,s=1,i=0;for(this[e]=255&t;++o<n&&(s*=256);)t<0&&0===i&&0!==this[e+o-1]&&(i=1),this[e+o]=(t/s>>0)-i&255;return e+n},c.prototype.writeIntBE=function(t,e,n,r){if(t=+t,e|=0,!r){var a=Math.pow(2,8*n-1);D(this,t,e,n,a-1,-a)}var o=n-1,s=1,i=0;for(this[e+o]=255&t;--o>=0&&(s*=256);)t<0&&0===i&&0!==this[e+o+1]&&(i=1),this[e+o]=(t/s>>0)-i&255;return e+n},c.prototype.writeInt8=function(t,e,n){return t=+t,e|=0,n||D(this,t,e,1,127,-128),c.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[e]=255&t,e+1},c.prototype.writeInt16LE=function(t,e,n){return t=+t,e|=0,n||D(this,t,e,2,32767,-32768),c.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):M(this,t,e,!0),e+2},c.prototype.writeInt16BE=function(t,e,n){return t=+t,e|=0,n||D(this,t,e,2,32767,-32768),c.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):M(this,t,e,!1),e+2},c.prototype.writeInt32LE=function(t,e,n){return t=+t,e|=0,n||D(this,t,e,4,2147483647,-2147483648),c.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24):F(this,t,e,!0),e+4},c.prototype.writeInt32BE=function(t,e,n){return t=+t,e|=0,n||D(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),c.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):F(this,t,e,!1),e+4},c.prototype.writeFloatLE=function(t,e,n){return R(this,t,e,!0,n)},c.prototype.writeFloatBE=function(t,e,n){return R(this,t,e,!1,n)},c.prototype.writeDoubleLE=function(t,e,n){return P(this,t,e,!0,n)},c.prototype.writeDoubleBE=function(t,e,n){return P(this,t,e,!1,n)},c.prototype.copy=function(t,e,n,r){if(n||(n=0),r||0===r||(r=this.length),e>=t.length&&(e=t.length),e||(e=0),r>0&&r<n&&(r=n),r===n)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("sourceStart out of bounds");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),t.length-e<r-n&&(r=t.length-e+n);var a,o=r-n;if(this===t&&n<e&&e<r)for(a=o-1;a>=0;--a)t[a+e]=this[a+n];else if(o<1e3||!c.TYPED_ARRAY_SUPPORT)for(a=0;a<o;++a)t[a+e]=this[a+n];else Uint8Array.prototype.set.call(t,this.subarray(n,n+o),e);return o},c.prototype.fill=function(t,e,n,r){if("string"==typeof t){if("string"==typeof e?(r=e,e=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),1===t.length){var a=t.charCodeAt(0);a<256&&(t=a)}if(void 0!==r&&"string"!=typeof r)throw new TypeError("encoding must be a string");if("string"==typeof r&&!c.isEncoding(r))throw new TypeError("Unknown encoding: "+r)}else"number"==typeof t&&(t&=255);if(e<0||this.length<e||this.length<n)throw new RangeError("Out of range index");if(n<=e)return this;var o;if(e>>>=0,n=void 0===n?this.length:n>>>0,t||(t=0),"number"==typeof t)for(o=e;o<n;++o)this[o]=t;else{var s=c.isBuffer(t)?t:L(new c(t,r).toString()),i=s.length;for(o=0;o<n-e;++o)this[o+e]=s[o%i]}return this};var C=/[^+\/0-9A-Za-z-_]/g;function B(t){return t<16?"0"+t.toString(16):t.toString(16)}function L(t,e){var n;e=e||1/0;for(var r=t.length,a=null,o=[],s=0;s<r;++s){if((n=t.charCodeAt(s))>55295&&n<57344){if(!a){if(n>56319){(e-=3)>-1&&o.push(239,191,189);continue}if(s+1===r){(e-=3)>-1&&o.push(239,191,189);continue}a=n;continue}if(n<56320){(e-=3)>-1&&o.push(239,191,189),a=n;continue}n=65536+(a-55296<<10|n-56320)}else a&&(e-=3)>-1&&o.push(239,191,189);if(a=null,n<128){if((e-=1)<0)break;o.push(n)}else if(n<2048){if((e-=2)<0)break;o.push(n>>6|192,63&n|128)}else if(n<65536){if((e-=3)<0)break;o.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;o.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return o}function z(t){return r.toByteArray(function(t){if((t=function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}(t).replace(C,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function V(t,e,n,r){for(var a=0;a<r&&!(a+n>=e.length||a>=t.length);++a)e[a+n]=t[a];return a}}).call(this,n(124))},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(4),a=n(1),o=n(0),s=n(3);const i=Object(s.b)({acos_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const e={x:Object(o.a)(t,"x","acos")};return r.a.runKernel(a.b,e)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(4),a=n(1),o=n(0),s=n(3);const i=Object(s.b)({acosh_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const e={x:Object(o.a)(t,"x","acosh")};return r.a.runKernel(a.c,e)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(4),a=n(1),o=n(0),s=n(7),i=n(3);const c=Object(i.b)({addN_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){s.b(Array.isArray(t),()=>"The argument passed to tf.addN() must be a list of tensors"),s.b(t.length>=1,()=>"Must pass at least one tensor to tf.addN(), but got "+t.length);const e=t.map((t,e)=>Object(o.a)(t,"tensors"+e,"addN")),n=e[0];e.forEach(t=>{if(t.dtype!==n.dtype)throw new Error("All tensors passed to tf.addN() must have the same dtype")}),e.forEach(t=>{if(!s.a(t.shape,n.shape))throw new Error("All tensors passed to tf.addN() must have the same shape")});const i=e;return r.a.runKernel(a.e,i)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(4),a=n(1),o=n(0),s=n(3);const i=Object(s.b)({asin_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const e={x:Object(o.a)(t,"x","asin")};return r.a.runKernel(a.j,e)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(4),a=n(1),o=n(0),s=n(3);const i=Object(s.b)({asinh_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const e={x:Object(o.a)(t,"x","asinh")};return r.a.runKernel(a.k,e)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(4),a=n(1),o=n(0),s=n(3);const i=Object(s.b)({atan_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const e={x:Object(o.a)(t,"x","atan")};return r.a.runKernel(a.l,e)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(4),a=n(1),o=n(0),s=n(3);const i=Object(s.b)({atanh_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const e={x:Object(o.a)(t,"x","atanh")};return r.a.runKernel(a.n,e)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var r=n(4),a=n(19),o=n(1),s=n(0),i=n(7),c=n(11),u=n(26),d=n(3),l=n(6);const p=Object(d.b)({avgPool3d_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e,n,d,p,f="NDHWC",h){null==h?h=[1,1,1]:Object(a.b)("dilations is deprecated, this field will be gone in v3.0.0.");const b=Object(s.a)(t,"x","avgPool3d","float32");let m=b,g=!1;4===b.rank&&(g=!0,m=Object(l.a)(b,[1,b.shape[0],b.shape[1],b.shape[2],b.shape[3]])),i.b(5===m.rank,()=>`Error in avgPool3d: x must be rank 5 but got rank ${m.rank}.`),i.b("NDHWC"===f,()=>"Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of "+f),i.b(u.h(n,h),()=>`Error in avgPool3d: Either strides or dilations must be 1. Got strides ${n} and dilations '${h}'`),null!=p&&i.b(i.v(d),()=>`Error in avgPool3d: pad must be an integer when using, dimRoundingMode ${p} but got pad ${d}.`);const y={x:m},O={filterSize:e,strides:n,pad:d,dimRoundingMode:p,dataFormat:f,dilations:h};let j=r.a.runKernel(o.p,y,O);return j=Object(c.a)(j,m.dtype),g?Object(l.a)(j,[j.shape[1],j.shape[2],j.shape[3],j.shape[4]]):j}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(4),a=n(1),o=n(0),s=n(3);const i=Object(s.b)({ceil_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const e={x:Object(o.a)(t,"x","ceil")};return r.a.runKernel(a.x,e)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(4),a=n(1),o=n(0),s=n(7),i=n(3);const c=Object(i.b)({clipByValue_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e,n){const i=Object(o.a)(t,"x","clipByValue");s.b(e<=n,()=>`Error in clip: min (${e}) must be less than or equal to max (${n}).`);const c={x:i},u={clipValueMin:e,clipValueMax:n};return r.a.runKernel(a.y,c,u)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var r=n(4),a=n(1),o=n(0),s=n(7),i=n(26),c=n(3),u=n(6);const d=Object(c.b)({conv3d_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e,n,c,d="NDHWC",l=[1,1,1]){const p=Object(o.a)(t,"x","conv3d"),f=Object(o.a)(e,"filter","conv3d");let h=p,b=!1;4===p.rank&&(b=!0,h=Object(u.a)(p,[1,p.shape[0],p.shape[1],p.shape[2],p.shape[3]])),s.b(5===h.rank,()=>`Error in conv3d: input must be rank 5, but got rank ${h.rank}.`),s.b(5===f.rank,()=>"Error in conv3d: filter must be rank 5, but got rank "+f.rank+"."),s.b(h.shape[4]===f.shape[3],()=>`Error in conv3d: depth of input (${h.shape[4]}) must match input depth for filter ${f.shape[3]}.`),s.b(Object(i.h)(n,l),()=>`Error in conv3D: Either strides or dilations must be 1. Got strides ${n} and dilations '${l}'`),s.b("NDHWC"===d,()=>`Error in conv3d: got dataFormat of ${d} but only NDHWC is currently supported.`);const m={x:h,filter:f},g={strides:n,pad:c,dataFormat:d,dilations:l},y=r.a.runKernel(a.F,m,g);return b?Object(u.a)(y,[y.shape[1],y.shape[2],y.shape[3],y.shape[4]]):y}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n(4),a=n(1),o=n(0),s=n(7),i=n(11),c=n(3);const u=Object(c.b)({erf_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){let e=Object(o.a)(t,"x","erf");s.b("int32"===e.dtype||"float32"===e.dtype,()=>"Input dtype must be `int32` or `float32`."),"int32"===e.dtype&&(e=Object(i.a)(e,"float32"));const n={x:e};return r.a.runKernel(a.Y,n)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(4),a=n(1),o=n(0),s=n(3);const i=Object(s.b)({expm1_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const e={x:Object(o.a)(t,"x","expm1")};return r.a.runKernel(a.bb,e)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(4),a=n(1),o=n(0),s=n(3);const i=Object(s.b)({isFinite_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const e={x:Object(o.a)(t,"x","isFinite")};return r.a.runKernel(a.sb,e)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(4),a=n(1),o=n(0),s=n(3);const i=Object(s.b)({isInf_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const e={x:Object(o.a)(t,"x","isInf")};return r.a.runKernel(a.tb,e)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(4),a=n(1),o=n(0),s=n(3);const i=Object(s.b)({isNaN_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const e={x:Object(o.a)(t,"x","isNaN")};return r.a.runKernel(a.ub,e)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(4),a=n(1);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function o(t,e,n){if(n<=0)throw new Error("The number of values should be positive.");const o={start:t,stop:e,num:n};return r.a.runKernel(a.Ab,{},o)}},function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var r=n(29),a=n(0),o=n(8),s=n(27),i=n(3),c=n(71),u=n(142);const d=Object(i.b)({logSigmoid_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const e=Object(a.a)(t,"x","logSigmoid");return Object(r.a)(t=>({value:Object(s.a)(Object(u.a)(Object(s.a)(t))),gradFunc:e=>Object(o.a)(e,Object(c.a)(Object(s.a)(t)))}))(e)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var r=n(29),a=n(0),o=n(11),s=n(35),i=n(59),c=n(57),u=n(8),d=n(3),l=n(13),p=n(18);const f=Object(d.b)({logSoftmax_:
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e=-1){const n=Object(a.a)(t,"logits","logSoftmax");if(-1===e&&(e=n.rank-1),e!==n.rank-1)throw Error(`Log Softmax along a non-last dimension is not yet supported. Logits was rank ${n.rank} and axis was ${e}`);return Object(r.a)((t,n)=>{const r=Object(c.a)(t,e,!0),a=Object(l.a)(t,r),d=Object(l.a)(Object(o.a)(a,"float32"),Object(i.a)(Object(p.a)(Object(s.a)(a),e,!0)));n([d]);return{value:d,gradFunc:(t,n)=>{const[r]=n,a=Object(s.a)(r);return Object(l.a)(t,Object(u.a)(Object(p.a)(t,e,!0),a))}}})(n)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(4),a=n(19),o=n(1),s=n(0),i=n(7),c=n(26),u=n(3),d=n(6);const l=Object(u.b)({maxPool3d_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e=[1,1,1],n,u,l,p="NDHWC",f){null==f?f=[1,1,1]:Object(a.b)("dilations is deprecated, this field will be gone in v3.0.0.");const h=Object(s.a)(t,"x","maxPool3d");let b=h,m=!1;4===h.rank&&(m=!0,b=Object(d.a)(h,[1,h.shape[0],h.shape[1],h.shape[2],h.shape[3]])),i.b(5===b.rank,()=>`Error in maxPool3d: x must be rank 5 but got rank ${b.rank}.`),i.b("NDHWC"===p,()=>"Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of "+p),i.b(c.h(n,f),()=>`Error in maxPool3d: Either strides or dilations must be 1. Got strides ${n} and dilations '${f}'`),null!=l&&i.b(i.v(u),()=>`Error in maxPool3d: pad must be an integer when using, dimRoundingMode ${l} but got pad ${u}.`);const g={x:b},y={filterSize:e,strides:n,pad:u,dimRoundingMode:l,dataFormat:p,dilations:f},O=r.a.runKernel(o.Jb,g,y);return m?Object(d.a)(O,[O.shape[1],O.shape[2],O.shape[3],O.shape[4]]):O}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(4),a=n(1),o=n(0),s=n(3);const i=Object(s.b)({maxPoolWithArgmax_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e,n,s,i=!1){const c={x:Object(o.a)(t,"x","maxPoolWithArgmax")},u={filterSize:e,strides:n,pad:s,includeBatchInIndex:i},d=r.a.runKernel(a.Mb,c,u);return{result:d[0],indexes:d[1]}}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(4),a=n(1),o=n(0),s=n(3),i=n(6);const c=Object(s.b)({multinomial_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e,n,s=!1){const c=Object(o.a)(t,"logits","multinomial"),u=c.size,d=c.rank;if(u<2)throw new Error("Error in multinomial: you need at least 2 outcomes, but got "+u+".");if(d>2)throw new Error("Rank of probabilities must be 1 or 2, but is "+d);n=n||Math.random();const l={logits:1===d?Object(i.a)(c,[1,-1]):c},p={numSamples:e,seed:n,normalized:s},f=r.a.runKernel(a.Tb,l,p);return 1===d?Object(i.a)(f,[f.size]):f}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(4),a=n(1),o=n(0),s=n(3);const i=Object(s.b)({onesLike_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const e={x:Object(o.a)(t,"x","onesLike")};return r.a.runKernel(a.bc,e)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(4),a=n(1),o=n(0),s=n(3);const i=Object(s.b)({reciprocal_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const e={x:Object(o.a)(t,"x","reciprocal")};return r.a.runKernel(a.lc,e)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(4),a=n(1),o=n(0),s=n(3);const i=Object(s.b)({round_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const e={x:Object(o.a)(t,"x","round")};return r.a.runKernel(a.vc,e)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n(5),a=n(0),o=n(7);const s=
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
async function(t,e){const n=Object(a.a)(t,"x","setdiff1d"),s=Object(a.a)(e,"y","setdiff1d");o.b(n.dtype===s.dtype,()=>`x and y should have the same dtype, but got x (${n.dtype}) and y (${s.dtype}).`),o.b(1===n.rank,()=>`x should be 1D tensor, but got x (${n.shape}).`),o.b(1===s.rank,()=>`y should be 1D tensor, but got y (${s.shape}).`);const i=await n.data(),c=await s.data(),u=new Set(c);let d=0;for(let t=0;t<i.length;t++)u.has(i[t])||d++;const l=new r.b([d],n.dtype),p=new r.b([d],"int32");for(let t=0,e=0;t<i.length;t++)u.has(i[t])||(l.values[e]=i[t],p.values[e]=t,e++);return[l.toTensor(),p.toTensor()]}},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(4),a=n(1),o=n(0),s=n(3);const i=Object(s.b)({sign_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const e={x:Object(o.a)(t,"x","sign")};return r.a.runKernel(a.Bc,e)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(4),a=n(1),o=n(0),s=n(3);const i=Object(s.b)({softmax_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e=-1){const n=Object(o.a)(t,"logits","softmax","float32");if(-1===e&&(e=n.rank-1),e!==n.rank-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${n.rank} and dim was ${e}`);const s={logits:n},i={dim:e};return r.a.runKernel(a.Fc,s,i)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(4),a=n(1),o=n(0),s=n(3);const i=Object(s.b)({stridedSlice_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e,n,s,i=0,c=0,u=0,d=0,l=0){const p={x:Object(o.a)(t,"x","stridedSlice")},f={begin:e,end:n,strides:s,beginMask:i,endMask:c,ellipsisMask:u,newAxisMask:d,shrinkAxisMask:l};return r.a.runKernel(a.Oc,p,f)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(4),a=n(1),o=n(0),s=n(3);const i=Object(s.b)({tan_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const e={x:Object(o.a)(t,"x","tan")};return r.a.runKernel(a.Rc,e)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n(39),a=n(3),o=n(86);const s=Object(a.b)({truncatedNormal_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e=0,n=1,a,s){if(null!=a&&"bool"===a)throw new Error("Unsupported data type $ { dtype }");const i=new o.a(e,n,a,!0,s),c=Object(r.a)(t,a);for(let t=0;t<c.values.length;t++)c.values[t]=i.nextValue();return c.toTensor()}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return f})),n.d(e,"b",(function(){return h})),n.d(e,"c",(function(){return b})),n.d(e,"d",(function(){return m})),n.d(e,"e",(function(){return g})),n.d(e,"f",(function(){return y}));var r=n(19),a=n(0),o=n(7),s=n(65),i=n(38),c=n(45),u=n(78),d=n(46),l=n(81),p=n(3);const f=Object(p.b)({equalStrict_:function(t,e){Object(r.b)("strict variants of ops have been deprecated and will be removed in future");const n=Object(a.a)(t,"a","equalStrict"),i=Object(a.a)(e,"b","equalStrict");return Object(o.e)(n.shape,i.shape,"Error in equalStrict: "),Object(s.a)(n,i)}}),h=Object(p.b)({greaterEqualStrict_:function(t,e){Object(r.b)("strict variants of ops have been deprecated and will be removed in future");const n=Object(a.a)(t,"a","greaterEqualStrict"),s=Object(a.a)(e,"b","greaterEqualStrict");return Object(o.e)(n.shape,s.shape,"Error in greaterEqualStrict: "),Object(c.a)(n,s)}}),b=Object(p.b)({greaterStrict_:function(t,e){Object(r.b)("strict variants of ops have been deprecated and will be removed in future");const n=Object(a.a)(t,"a","greaterStrict"),s=Object(a.a)(e,"b","greaterStrict");return Object(o.e)(n.shape,s.shape,"Error in greaterStrict: "),Object(i.a)(n,s)}}),m=Object(p.b)({lessEqualStrict_:function(t,e){Object(r.b)("strict variants of ops have been deprecated and will be removed in future");const n=Object(a.a)(t,"a","lessEqualStrict"),s=Object(a.a)(e,"b","lessEqualStrict");return Object(o.e)(n.shape,s.shape,"Error in lessEqualStrict: "),Object(d.a)(n,s)}}),g=Object(p.b)({lessStrict_:function(t,e){Object(r.b)("strict variants of ops have been deprecated and will be removed in future");const n=Object(a.a)(t,"a","lessStrict"),s=Object(a.a)(e,"b","lessStrict");return Object(o.e)(n.shape,s.shape,"Error in lessStrict: "),Object(u.a)(n,s)}}),y=Object(p.b)({notEqualStrict_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e){Object(r.b)("strict variants of ops have been deprecated and will be removed in future");const n=Object(a.a)(t,"a","notEqualStrict"),s=Object(a.a)(e,"b","notEqualStrict");return Object(o.e)(n.shape,s.shape,"Error in notEqualStrict: "),Object(l.a)(n,s)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return m})),n.d(e,"b",(function(){return g})),n.d(e,"c",(function(){return y})),n.d(e,"d",(function(){return O})),n.d(e,"e",(function(){return j})),n.d(e,"f",(function(){return v})),n.d(e,"g",(function(){return w})),n.d(e,"h",(function(){return x})),n.d(e,"i",(function(){return k}));var r=n(19),a=n(0),o=n(7),s=n(12),i=n(14),c=n(63),u=n(80),d=n(108),l=n(8),p=n(3),f=n(40),h=n(83),b=n(13);const m=Object(p.b)({addStrict_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e){Object(r.b)("strict variants of ops have been deprecated and will be removed in future");const n=Object(a.a)(t,"a","addStrict"),i=Object(a.a)(e,"b","addStrict");return o.e(n.shape,i.shape,"Error in addStrict: "),Object(s.a)(n,i)}}),g=Object(p.b)({divStrict_:function(t,e){Object(r.b)("strict variants of ops have been deprecated and will be removed in future");const n=Object(a.a)(t,"a","div"),s=Object(a.a)(e,"b","div");return o.e(n.shape,s.shape,"Error in divideStrict: "),Object(i.a)(n,s)}}),y=Object(p.b)({maximumStrict_:function(t,e){Object(r.b)("strict variants of ops have been deprecated and will be removed in future");const n=Object(a.a)(t,"a","maximumStrict"),s=Object(a.a)(e,"b","maximumStrict");return o.e(n.shape,s.shape,"Error in maximumStrict: "),Object(c.a)(n,s)}}),O=Object(p.b)({minimumStrict_:function(t,e){Object(r.b)("strict variants of ops have been deprecated and will be removed in future");const n=Object(a.a)(t,"a","minimumStrict"),s=Object(a.a)(e,"b","minimumStrict");return o.e(n.shape,s.shape,"Error in minimumStrict: "),Object(u.a)(n,s)}}),j=Object(p.b)({modStrict_:function(t,e){Object(r.b)("strict variants of ops have been deprecated and will be removed in future");const n=Object(a.a)(t,"a","modStrict"),s=Object(a.a)(e,"b","modStrict");return o.e(n.shape,s.shape,"Error in modStrict: "),Object(d.a)(n,s)}}),v=Object(p.b)({mulStrict_:function(t,e){Object(r.b)("strict variants of ops have been deprecated and will be removed in future");const n=Object(a.a)(t,"a","mul"),s=Object(a.a)(e,"b","mul");return o.e(n.shape,s.shape,"Error in multiplyStrict: "),Object(l.a)(n,s)}}),w=Object(p.b)({powStrict_:function(t,e){return Object(r.b)("strict variants of ops have been deprecated and will be removed in future"),o.e(t.shape,e.shape,"Error in powStrict: "),Object(f.a)(t,e)}}),x=Object(p.b)({squaredDifferenceStrict_:function(t,e){Object(r.b)("strict variants of ops have been deprecated and will be removed in future");const n=Object(a.a)(t,"a","squaredDifferenceStrict"),s=Object(a.a)(e,"b","squaredDifferenceStrict");return o.e(n.shape,s.shape,"Error in squaredDifferenceStrict: "),Object(h.a)(n,s)}}),k=Object(p.b)({subStrict_:function(t,e){Object(r.b)("strict variants of ops have been deprecated and will be removed in future");const n=Object(a.a)(t,"a","subStrict"),s=Object(a.a)(e,"b","subStrict");return o.e(n.shape,s.shape,"Error in subStrict: "),Object(b.a)(n,s)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(4),a=n(1),o=n(0),s=n(3),i=n(95);const c=Object(s.b)({scatterND_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e,n){const s=Object(o.a)(t,"indices","scatterND","int32"),c=Object(o.a)(e,"updates","scatterND");i.validateInput(c,s,n);const u={indices:s,updates:c},d={shape:n};return r.a.runKernel(a.xc,u,d)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(4),a=n(1),o=n(0),s=n(3);const i=Object(s.b)({gatherND_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e){const n=Object(o.a)(e,"indices","gatherND","int32"),s={params:Object(o.a)(t,"x","gatherND"),indices:n};return r.a.runKernel(a.lb,s)}})},function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return a}));
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const r="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:void 0!==t?t:t=>t();function a(){return new Promise(t=>r(()=>t()))}}).call(this,n(237).setImmediate)},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(4),a=n(1);var o=n(0),s=n(3);const i=Object(s.b)({sparseToDense_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e,n,s=0){const i=Object(o.a)(t,"sparseIndices","sparseToDense","int32"),c=Object(o.a)(e,"sparseValues","sparseToDense"),u=Object(o.a)(s,"defaultValue","sparseToDense",c.dtype);!function(t,e,n,r){if("int32"!==t.dtype)throw new Error(`tf.sparseToDense() expects the indices to be int32 type, but the dtype was ${t.dtype}.`);if(t.rank>2)throw new Error(`sparseIndices should be a scalar, vector, or matrix, but got shape ${t.shape}.`);const a=t.rank>0?t.shape[0]:1,o=t.rank>1?t.shape[1]:1;if(n.length!==o)throw new Error(`outputShape has incorrect number of elements:, ${n.length}, should be: ${o}.`);const s=e.size;if(0!==e.rank&&(1!==e.rank||s!==a))throw new Error(`sparseValues has incorrect shape ${e.shape}, should be [] or [${a}]`);if(e.dtype!==r.dtype)throw new Error("sparseValues.dtype must match defaultValues.dtype")}(i,c,n,u);const d={sparseIndices:i,sparseValues:c,defaultValue:u},l={outputShape:n};return r.a.runKernel(a.Ic,d,l)}})},function(t,e,n){"use strict";n.r(e),n.d(e,"json",(function(){return r}));
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const r=[{tfOpName:"Add",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddV2",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddN",category:"arithmetic",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"BiasAdd",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sub",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"RealDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Div",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"DivNoNan",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mul",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Maximum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}]},{tfOpName:"Minimum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}]},{tfOpName:"Pow",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SquaredDifference",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorMod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}]},function(t,e,n){"use strict";n.r(e),n.d(e,"json",(function(){return r}));
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const r=[{tfOpName:"Abs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan2",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Ceil",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ClipByValue",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"clip_value_min",name:"clipValueMin",type:"number"},{tfName:"clip_value_max",name:"clipValueMax",type:"number"}]},{tfOpName:"Complex",category:"basic_math",inputs:[{start:0,name:"real",type:"tensor"},{start:1,name:"imag",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ComplexAbs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Elu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Exp",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Floor",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Imag",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Neg",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Real",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Prelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"alpha",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu6",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"clipValueMin",name:"clipValueMin",type:"number",defaultValue:0},{tfName:"clipValueMax",name:"clipValueMax",type:"number",defaultValue:6}]},{tfOpName:"Selu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sigmoid",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Rsqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Square",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sign",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Round",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Expm1",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log1p",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Reciprocal",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Softplus",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Erf",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Prod",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axes",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool",notSupported:!0},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LeakyRelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"alpha",name:"alpha",type:"number",defaultValue:.2},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}]},function(t,e,n){"use strict";n.r(e),n.d(e,"json",(function(){return r}));const r=[{tfOpName:"LoopCond",category:"control",inputs:[{start:0,name:"pred",type:"tensor"}]},{tfOpName:"Switch",category:"control",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"pred",type:"tensor"}]},{tfOpName:"Merge",category:"control",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"Enter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"frame_name",name:"frameName",type:"string"},{tfName:"is_constant",name:"isConstant",type:"bool"}]},{tfOpName:"Exit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NextIteration",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayV3",category:"control",inputs:[{start:0,name:"size",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"dynamic_size",name:"dynamicSize",type:"bool"},{tfName:"clear_after_read",name:"clearAfterRead",type:"bool"},{tfName:"identical_element_shapes",name:"identicalElementShapes",type:"bool"},{tfName:"tensor_array_name",name:"name",type:"string"}]},{tfOpName:"TensorArrayWriteV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayReadV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayGatherV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"}]},{tfOpName:"TensorArrayScatterV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArrayConcatV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape_except0",name:"elementShapeExcept0",type:"shape",notSupported:!0}]},{tfOpName:"TensorArraySplitV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"tensor",type:"tensor"},{start:2,name:"lengths",type:"number[]"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArraySizeV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}]},{tfOpName:"TensorArrayCloseV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"}]},{tfOpName:"StatelessIf",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"If",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"StatelessWhile",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"While",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"TensorListScatter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListScatterV2",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"},{start:3,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGather",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListSetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListReserve",category:"control",inputs:[{start:0,name:"elementShape",type:"shape"},{start:1,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListFromTensor",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListStack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"},{tfName:"num_elements",name:"numElements",type:"dtype"}]},{tfOpName:"TensorListSplit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"},{start:2,name:"lengths",type:"number[]"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListConcat",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}],attrs:[{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPopBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPushBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]}]},function(t,e,n){"use strict";n.r(e),n.d(e,"json",(function(){return r}));
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const r=[{tfOpName:"AvgPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPoolWithArgmax",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"include_batch_in_index",name:"includeBatchInIndex",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AvgPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Conv1D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"stride",name:"stride",type:"number"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NWC"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"dilation",name:"dilation",type:"number",defaultValue:1}]},{tfOpName:"Conv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"useCudnnOnGpu",name:"useCudnnOnGpu",type:"bool"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"_FusedConv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"use_cudnn_on_gpu",name:"useCudnnOnGpu",type:"bool",defaultValue:!0},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4}]},{tfOpName:"Conv2DBackpropInput",category:"convolution",inputs:[{start:2,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:0,name:"outputShape",type:"number[]"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]}]},{tfOpName:"DepthwiseConv2d",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"DepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"FusedDepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]}]},{tfOpName:"Conv3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"Dilation2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"rates",name:"dilations",type:"number[]"},{tfName:"padding",name:"pad",type:"string"}]}]},function(t,e,n){"use strict";n.r(e),n.d(e,"json",(function(){return r}));
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const r=[{tfOpName:"Fill",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"},{start:1,name:"value",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"LinSpace",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"num",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"OneHot",category:"creation",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"depth",type:"number"},{start:2,name:"onValue",type:"number",defaultValue:1},{start:3,name:"offValue",type:"number",defaultValue:0}],attrs:[{tfName:"axis",name:"axis",type:"number",notSupported:!0},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Ones",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"OnesLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"RandomUniform",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"minval",name:"minval",type:"number",defaultValue:0},{tfName:"maxval",name:"maxval",type:"number",defaultValue:1},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"Range",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"step",type:"number",defaultValue:0}],attrs:[{tfName:"Tidx",name:"dtype",type:"dtype"}]},{tfOpName:"TruncatedNormal",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"means",name:"mean",type:"number",defaultValue:0},{tfName:"stddev",name:"stdDev",type:"number",defaultValue:1},{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"Zeros",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"ZerosLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"Multinomial",category:"creation",inputs:[{start:0,name:"logits",type:"tensor"},{start:1,name:"numSamples",type:"number"}],attrs:[{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number"},{tfName:"T",name:"dtype",type:"dtype"},{tfName:"output_dtype",name:"output_dtype",type:"dtype"}]}]},function(t,e,n){"use strict";n.r(e),n.d(e,"json",(function(){return r}));
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const r=[{tfOpName:"NonMaxSuppressionV2",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV3",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV4",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"T_threshold",name:"threshold",type:"dtype",notSupported:!0},{tfName:"pad_to_max_output_size",name:"padToMaxOutputSize",type:"bool"}]},{tfOpName:"NonMaxSuppressionV5",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"},{start:5,name:"softNmsSigma",type:"number"}]},{tfOpName:"Where",category:"dynamic",inputs:[{start:0,name:"condition",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ListDiff",category:"dynamic",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}]},function(t,e,n){"use strict";n.r(e),n.d(e,"json",(function(){return r}));
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const r=[{tfOpName:"TopKV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"k",type:"number"}],attrs:[{tfName:"sorted",name:"sorted",type:"bool"}]},{tfOpName:"Unique",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"UniqueV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]}]},function(t,e,n){"use strict";n.r(e),n.d(e,"json",(function(){return r}));
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const r=[{tfOpName:"PlaceholderWithDefault",category:"graph",inputs:[{start:0,name:"default",type:"tensor"}],attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Placeholder",category:"graph",attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Const",category:"graph"},{tfOpName:"Identity",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IdentityN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Snapshot",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Rank",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Size",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Shape",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"ShapeN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Print",category:"graph",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"data",type:"tensors"}],attrs:[{tfName:"message",name:"message",type:"string"},{tfName:"first_n",name:"firstN",type:"number",notSupported:!0},{tfName:"summarize",name:"summarize",type:"number",defaultValue:3}]},{tfOpName:"NoOp",category:"graph",inputs:[]},{tfOpName:"StopGradient",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"FakeQuantWithMinMaxVars",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"min",name:"min",type:"number"},{tfName:"max",name:"max",type:"number"}]}]},function(t,e,n){"use strict";n.r(e),n.d(e,"json",(function(){return r}));const r=[{tfOpName:"HashTable",category:"hash_table",inputs:[],attrs:[{tfName:"shared_name",name:"sharedName",type:"string"},{tfName:"use_node_name_sharing",name:"useNodeNameSharing",type:"bool"},{tfName:"key_dtype",name:"keyDType",type:"dtype"},{tfName:"value_dtype",name:"valueDType",type:"dtype"}]},{tfOpName:"HashTableV2",category:"hash_table",inputs:[],attrs:[{tfName:"shared_name",name:"sharedName",type:"string"},{tfName:"use_node_name_sharing",name:"useNodeNameSharing",type:"bool"},{tfName:"key_dtype",name:"keyDType",type:"dtype"},{tfName:"value_dtype",name:"valueDType",type:"dtype"}]},{tfOpName:"LookupTableImport",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableImportV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableFind",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableFindV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]}]},function(t,e,n){"use strict";n.r(e),n.d(e,"json",(function(){return r}));
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const r=[{tfOpName:"ResizeBilinear",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ResizeNearestNeighbor",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"CropAndResize",category:"image",inputs:[{start:0,name:"image",type:"tensor"},{start:1,name:"boxes",type:"tensor"},{start:2,name:"boxInd",type:"tensor"},{start:3,name:"cropSize",type:"number[]"}],attrs:[{tfName:"method",name:"method",type:"string"},{tfName:"extrapolation_value",name:"extrapolationValue",type:"number"}]}]},function(t,e,n){"use strict";n.r(e),n.d(e,"json",(function(){return r}));
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const r=[{tfOpName:"Equal",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NotEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Greater",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"GreaterEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Less",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LessEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalAnd",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalNot",category:"logical",inputs:[{start:0,name:"a",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalOr",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Select",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SelectV2",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}]},function(t,e,n){"use strict";n.r(e),n.d(e,"json",(function(){return r}));
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const r=[{tfOpName:"_FusedMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMulV2",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Transpose",category:"matrices",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"perm",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}]},function(t,e,n){"use strict";n.r(e),n.d(e,"json",(function(){return r}));
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const r=[{tfOpName:"FusedBatchNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV2",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV3",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"LRN",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"depth_radius",name:"radius",type:"number",defaultValue:5},{tfName:"bias",name:"bias",type:"number",defaultValue:1},{tfName:"alpha",name:"alpha",type:"number",defaultValue:1},{tfName:"beta",name:"beta",type:"number",defaultValue:.5}]},{tfOpName:"Softmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"LogSoftmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"SparseToDense",category:"normalization",inputs:[{start:0,name:"sparseIndices",type:"tensor"},{start:1,name:"outputShape",type:"number[]"},{start:2,name:"sparseValues",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",defaultValue:!0,notSupported:!0}]}]},function(t,e,n){"use strict";n.r(e),n.d(e,"json",(function(){return r}));
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const r=[{tfOpName:"Max",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Mean",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Min",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Sum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"All",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Any",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"ArgMax",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"ArgMin",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"Prod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Cumsum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}],attrs:[{tfName:"exclusive",name:"exclusive",type:"bool"},{tfName:"reverse",name:"reverse",type:"bool"}]}]},function(t,e,n){"use strict";n.r(e),n.d(e,"json",(function(){return r}));
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const r=[{tfOpName:"ConcatV2",category:"slice_join",inputs:[{start:0,end:-1,name:"tensors",type:"tensors"},{start:-1,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"Concat",category:"slice_join",inputs:[{start:1,end:0,name:"tensors",type:"tensors"},{start:0,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"GatherV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"axis",type:"number",defaultValue:0}]},{tfOpName:"Gather",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0},{tfName:"validate_indices",name:"validateIndices",type:"bool",notSupported:!0}]},{tfOpName:"Reverse",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"dims",type:"bool",notSupported:!0}]},{tfOpName:"ReverseV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}]},{tfOpName:"Slice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"size",type:"number[]"}]},{tfOpName:"StridedSlice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"end",type:"number[]"},{start:3,name:"strides",type:"number[]"}],attrs:[{tfName:"begin_mask",name:"beginMask",type:"number",defaultValue:0},{tfName:"end_mask",name:"endMask",type:"number",defaultValue:0},{tfName:"new_axis_mask",name:"newAxisMask",type:"number",defaultValue:0},{tfName:"ellipsis_mask",name:"ellipsisMask",type:"number",defaultValue:0},{tfName:"shrink_axis_mask",name:"shrinkAxisMask",type:"number",defaultValue:0}]},{tfOpName:"Pack",category:"slice_join",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0}]},{tfOpName:"Unpack",category:"slice_join",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0},{tfName:"num",name:"num",type:"number",defaultValue:0,notSupported:!0}]},{tfOpName:"Tile",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"reps",type:"number[]"}]},{tfOpName:"Split",category:"slice_join",inputs:[{start:0,name:"axis",type:"number",defaultValue:0},{start:1,name:"x",type:"tensor"}],attrs:[{tfName:"num_split",name:"numOrSizeSplits",type:"number",defaultValue:1}]},{tfOpName:"SplitV",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"numOrSizeSplits",type:"number[]"},{start:2,name:"axis",type:"number",defaultValue:0}]},{tfOpName:"ScatterNd",category:"slice_join",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"shape",type:"number[]"}]},{tfOpName:"GatherNd",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}]},{tfOpName:"SparseToDense",category:"slice_join",inputs:[{start:0,name:"sparseIndices",type:"tensor"},{start:1,name:"outputShape",type:"number[]"},{start:2,name:"sparseValues",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",defaultValue:!1,notSupported:!0}]}]},function(t,e,n){"use strict";n.r(e),n.d(e,"json",(function(){return r}));
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const r=[{tfOpName:"FFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"RFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]},{tfOpName:"IRFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]}]},function(t,e,n){"use strict";n.r(e),n.d(e,"json",(function(){return r}));
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const r=[{tfOpName:"Cast",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"SrcT",name:"sdtype",type:"dtype",notSupported:!0},{tfName:"DstT",name:"dtype",type:"dtype"}]},{tfOpName:"ExpandDims",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"MirrorPad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"mode",name:"mode",type:"string"}]},{tfOpName:"Pad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"constant_value",name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"PadV2",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"},{start:2,name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"Reshape",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}]},{tfOpName:"Squeeze",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"axis",tfDeprecatedName:"squeeze_dims",name:"axis",type:"number[]"}]},{tfOpName:"SpaceToBatchND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"paddings",type:"number[]"}]},{tfOpName:"BatchToSpaceND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"crops",type:"number[]"}]},{tfOpName:"DepthToSpace",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"block_size",name:"blockSize",type:"number"},{tfName:"data_format",name:"dataFormat",type:"string"}]},{tfOpName:"BroadcastTo",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}],attrs:[]}]},function(t,e,n){!function(e){"use strict";var n=function(){return{escape:function(t){return t.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1")},parseExtension:e,mimeType:function(t){var n=e(t).toLowerCase();return(r="application/font-woff",{woff:r,woff2:r,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg",gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"})[n]||"";var r},dataAsUrl:function(t,e){return"data:"+e+";base64,"+t},isDataUrl:function(t){return-1!==t.search(/^(data:)/)},canvasToBlob:function(t){return t.toBlob?new Promise((function(e){t.toBlob(e)})):function(t){return new Promise((function(e){for(var n=window.atob(t.toDataURL().split(",")[1]),r=n.length,a=new Uint8Array(r),o=0;o<r;o++)a[o]=n.charCodeAt(o);e(new Blob([a],{type:"image/png"}))}))}(t)},resolveUrl:function(t,e){var n=document.implementation.createHTMLDocument(),r=n.createElement("base");n.head.appendChild(r);var a=n.createElement("a");return n.body.appendChild(a),r.href=e,a.href=t,a.href},getAndEncode:function(t){i.impl.options.cacheBust&&(t+=(/\?/.test(t)?"&":"?")+(new Date).getTime());return new Promise((function(e){var n,r=new XMLHttpRequest;if(r.onreadystatechange=function(){if(4!==r.readyState)return;if(200!==r.status)return void(n?e(n):o("cannot fetch resource: "+t+", status: "+r.status));var a=new FileReader;a.onloadend=function(){var t=a.result.split(/,/)[1];e(t)},a.readAsDataURL(r.response)},r.ontimeout=function(){n?e(n):o("timeout of 30000ms occured while fetching resource: "+t)},r.responseType="blob",r.timeout=3e4,r.open("GET",t,!0),r.send(),i.impl.options.imagePlaceholder){var a=i.impl.options.imagePlaceholder.split(/,/);a&&a[1]&&(n=a[1])}function o(t){console.error(t),e("")}}))},uid:(t=0,function(){return"u"+("0000"+(Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)+t++}),delay:function(t){return function(e){return new Promise((function(n){setTimeout((function(){n(e)}),t)}))}},asArray:function(t){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e},escapeXhtml:function(t){return t.replace(/#/g,"%23").replace(/\n/g,"%0A")},makeImage:function(t){return new Promise((function(e,n){var r=new Image;r.onload=function(){e(r)},r.onerror=n,r.src=t}))},width:function(t){var e=n(t,"border-left-width"),r=n(t,"border-right-width");return t.scrollWidth+e+r},height:function(t){var e=n(t,"border-top-width"),r=n(t,"border-bottom-width");return t.scrollHeight+e+r}};var t;function e(t){var e=/\.([^\.\/]*?)$/g.exec(t);return e?e[1]:""}function n(t,e){var n=window.getComputedStyle(t).getPropertyValue(e);return parseFloat(n.replace("px",""))}}(),r=function(){var t=/url\(['"]?([^'"]+?)['"]?\)/g;return{inlineAll:function(t,n,o){return function(){return!e(t)}()?Promise.resolve(t):Promise.resolve(t).then(r).then((function(e){var r=Promise.resolve(t);return e.forEach((function(t){r=r.then((function(e){return a(e,t,n,o)}))})),r}))},shouldProcess:e,impl:{readUrls:r,inline:a}};function e(e){return-1!==e.search(t)}function r(e){for(var r,a=[];null!==(r=t.exec(e));)a.push(r[1]);return a.filter((function(t){return!n.isDataUrl(t)}))}function a(t,e,r,a){return Promise.resolve(e).then((function(t){return r?n.resolveUrl(t,r):t})).then(a||n.getAndEncode).then((function(t){return n.dataAsUrl(t,n.mimeType(e))})).then((function(r){return t.replace(function(t){return new RegExp("(url\\(['\"]?)("+n.escape(t)+")(['\"]?\\))","g")}(e),"$1"+r+"$3")}))}}(),a=function(){return{resolveAll:function(){return t(document).then((function(t){return Promise.all(t.map((function(t){return t.resolve()})))})).then((function(t){return t.join("\n")}))},impl:{readAll:t}};function t(){return Promise.resolve(n.asArray(document.styleSheets)).then((function(t){var e=[];return t.forEach((function(t){try{n.asArray(t.cssRules||[]).forEach(e.push.bind(e))}catch(e){console.log("Error while reading CSS rules from "+t.href,e.toString())}})),e})).then((function(t){return t.filter((function(t){return t.type===CSSRule.FONT_FACE_RULE})).filter((function(t){return r.shouldProcess(t.style.getPropertyValue("src"))}))})).then((function(e){return e.map(t)}));function t(t){return{resolve:function(){var e=(t.parentStyleSheet||{}).href;return r.inlineAll(t.cssText,e)},src:function(){return t.style.getPropertyValue("src")}}}}}(),o=function(){return{inlineAll:function e(a){return a instanceof Element?function(t){var e=t.style.getPropertyValue("background");return e?r.inlineAll(e).then((function(e){t.style.setProperty("background",e,t.style.getPropertyPriority("background"))})).then((function(){return t})):Promise.resolve(t)}(a).then((function(){return a instanceof HTMLImageElement?t(a).inline():Promise.all(n.asArray(a.childNodes).map((function(t){return e(t)})))})):Promise.resolve(a)},impl:{newImage:t}};function t(t){return{inline:function(e){return n.isDataUrl(t.src)?Promise.resolve():Promise.resolve(t.src).then(e||n.getAndEncode).then((function(e){return n.dataAsUrl(e,n.mimeType(t.src))})).then((function(e){return new Promise((function(n,r){t.onload=n,t.onerror=r,t.src=e}))}))}}}}(),s={imagePlaceholder:void 0,cacheBust:!1},i={toSvg:c,toPng:function(t,e){return u(t,e||{}).then((function(t){return t.toDataURL()}))},toJpeg:function(t,e){return u(t,e=e||{}).then((function(t){return t.toDataURL("image/jpeg",e.quality||1)}))},toBlob:function(t,e){return u(t,e||{}).then(n.canvasToBlob)},toPixelData:function(t,e){return u(t,e||{}).then((function(e){return e.getContext("2d").getImageData(0,0,n.width(t),n.height(t)).data}))},impl:{fontFaces:a,images:o,util:n,inliner:r,options:{}}};function c(t,e){return function(t){void 0===t.imagePlaceholder?i.impl.options.imagePlaceholder=s.imagePlaceholder:i.impl.options.imagePlaceholder=t.imagePlaceholder;void 0===t.cacheBust?i.impl.options.cacheBust=s.cacheBust:i.impl.options.cacheBust=t.cacheBust}(e=e||{}),Promise.resolve(t).then((function(t){return function t(e,r,a){return a||!r||r(e)?Promise.resolve(e).then((function(t){return t instanceof HTMLCanvasElement?n.makeImage(t.toDataURL()):t.cloneNode(!1)})).then((function(t){return o(e,t,r)})).then((function(t){return function(t,e){return e instanceof Element?Promise.resolve().then(r).then(a).then(o).then(s).then((function(){return e})):e;function r(){var r,a;r=window.getComputedStyle(t),a=e.style,r.cssText?a.cssText=r.cssText:function(t,e){n.asArray(t).forEach((function(n){e.setProperty(n,t.getPropertyValue(n),t.getPropertyPriority(n))}))}(r,a)}function a(){[":before",":after"].forEach((function(r){!function(r){var a=window.getComputedStyle(t,r),o=a.getPropertyValue("content");if(""===o||"none"===o)return;var s=n.uid();e.className=e.className+" "+s;var i=document.createElement("style");i.appendChild(function(t,e,r){var a="."+t+":"+e,o=r.cssText?function(t){var e=t.getPropertyValue("content");return t.cssText+" content: "+e+";"}(r):function(t){return n.asArray(t).map((function(e){return e+": "+t.getPropertyValue(e)+(t.getPropertyPriority(e)?" !important":"")})).join("; ")+";"}(r);return document.createTextNode(a+"{"+o+"}")}(s,r,a)),e.appendChild(i)}(r)}))}function o(){t instanceof HTMLTextAreaElement&&(e.innerHTML=t.value),t instanceof HTMLInputElement&&e.setAttribute("value",t.value)}function s(){e instanceof SVGElement&&(e.setAttribute("xmlns","http://www.w3.org/2000/svg"),e instanceof SVGRectElement&&["width","height"].forEach((function(t){var n=e.getAttribute(t);n&&e.style.setProperty(t,n)})))}}(e,t)})):Promise.resolve();function o(e,r,a){var o=e.childNodes;return 0===o.length?Promise.resolve(r):s(r,n.asArray(o),a).then((function(){return r}));function s(e,n,r){var a=Promise.resolve();return n.forEach((function(n){a=a.then((function(){return t(n,r)})).then((function(t){t&&e.appendChild(t)}))})),a}}}(t,e.filter,!0)})).then(d).then(l).then((function(t){e.bgcolor&&(t.style.backgroundColor=e.bgcolor);e.width&&(t.style.width=e.width+"px");e.height&&(t.style.height=e.height+"px");e.style&&Object.keys(e.style).forEach((function(n){t.style[n]=e.style[n]}));return t})).then((function(r){return function(t,e,r){return Promise.resolve(t).then((function(t){return t.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),(new XMLSerializer).serializeToString(t)})).then(n.escapeXhtml).then((function(t){return'<foreignObject x="0" y="0" width="100%" height="100%">'+t+"</foreignObject>"})).then((function(t){return'<svg xmlns="http://www.w3.org/2000/svg" width="'+e+'" height="'+r+'">'+t+"</svg>"})).then((function(t){return"data:image/svg+xml;charset=utf-8,"+t}))}(r,e.width||n.width(t),e.height||n.height(t))}))}function u(t,e){return c(t,e).then(n.makeImage).then(n.delay(100)).then((function(r){var a=function(t){var r=document.createElement("canvas");if(r.width=e.width||n.width(t),r.height=e.height||n.height(t),e.bgcolor){var a=r.getContext("2d");a.fillStyle=e.bgcolor,a.fillRect(0,0,r.width,r.height)}return r}(t);return a.getContext("2d").drawImage(r,0,0),a}))}function d(t){return a.resolveAll().then((function(e){var n=document.createElement("style");return t.appendChild(n),n.appendChild(document.createTextNode(e)),t}))}function l(t){return o.inlineAll(t).then((function(){return t}))}t.exports=i}()},function(t,e,n){},function(t,e,n){var r=function(t){"use strict";var e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",s=r.toStringTag||"@@toStringTag";function i(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{i({},"")}catch(t){i=function(t,e,n){return t[e]=n}}function c(t,e,n,r){var a=e&&e.prototype instanceof l?e:l,o=Object.create(a.prototype),s=new x(r||[]);return o._invoke=function(t,e,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return N()}for(n.method=a,n.arg=o;;){var s=n.delegate;if(s){var i=j(s,n);if(i){if(i===d)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=u(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}(t,n,s),o}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var d={};function l(){}function p(){}function f(){}var h={};h[a]=function(){return this};var b=Object.getPrototypeOf,m=b&&b(b(k([])));m&&m!==e&&n.call(m,a)&&(h=m);var g=f.prototype=l.prototype=Object.create(h);function y(t){["next","throw","return"].forEach((function(e){i(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){var r;this._invoke=function(a,o){function s(){return new e((function(r,s){!function r(a,o,s,i){var c=u(t[a],t,o);if("throw"!==c.type){var d=c.arg,l=d.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,s,i)}),(function(t){r("throw",t,s,i)})):e.resolve(l).then((function(t){d.value=t,s(d)}),(function(t){return r("throw",t,s,i)}))}i(c.arg)}(a,o,r,s)}))}return r=r?r.then(s,s):s()}}function j(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,j(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var r=u(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,d;var a=r.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function v(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function w(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(v,this),this.reset(!0)}function k(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:N}}function N(){return{value:void 0,done:!0}}return p.prototype=g.constructor=f,f.constructor=p,p.displayName=i(f,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,f):(t.__proto__=f,i(t,s,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},y(O.prototype),O.prototype[o]=function(){return this},t.AsyncIterator=O,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var s=new O(c(e,n,r,a),o);return t.isGeneratorFunction(n)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},y(g),i(g,s,"Generator"),g[a]=function(){return this},g.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=k,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return s.type="throw",s.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var i=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(i&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var s=o?o.completion:{};return s.type=t,s.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),w(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;w(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:k(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},t}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}},function(t,e,n){"use strict";e.byteLength=function(t){var e=u(t),n=e[0],r=e[1];return 3*(n+r)/4-r},e.toByteArray=function(t){var e,n,r=u(t),s=r[0],i=r[1],c=new o(function(t,e,n){return 3*(e+n)/4-n}(0,s,i)),d=0,l=i>0?s-4:s;for(n=0;n<l;n+=4)e=a[t.charCodeAt(n)]<<18|a[t.charCodeAt(n+1)]<<12|a[t.charCodeAt(n+2)]<<6|a[t.charCodeAt(n+3)],c[d++]=e>>16&255,c[d++]=e>>8&255,c[d++]=255&e;2===i&&(e=a[t.charCodeAt(n)]<<2|a[t.charCodeAt(n+1)]>>4,c[d++]=255&e);1===i&&(e=a[t.charCodeAt(n)]<<10|a[t.charCodeAt(n+1)]<<4|a[t.charCodeAt(n+2)]>>2,c[d++]=e>>8&255,c[d++]=255&e);return c},e.fromByteArray=function(t){for(var e,n=t.length,a=n%3,o=[],s=0,i=n-a;s<i;s+=16383)o.push(d(t,s,s+16383>i?i:s+16383));1===a?(e=t[n-1],o.push(r[e>>2]+r[e<<4&63]+"==")):2===a&&(e=(t[n-2]<<8)+t[n-1],o.push(r[e>>10]+r[e>>4&63]+r[e<<2&63]+"="));return o.join("")};for(var r=[],a=[],o="undefined"!=typeof Uint8Array?Uint8Array:Array,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",i=0,c=s.length;i<c;++i)r[i]=s[i],a[s.charCodeAt(i)]=i;function u(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=t.indexOf("=");return-1===n&&(n=e),[n,n===e?0:4-n%4]}function d(t,e,n){for(var a,o,s=[],i=e;i<n;i+=3)a=(t[i]<<16&16711680)+(t[i+1]<<8&65280)+(255&t[i+2]),s.push(r[(o=a)>>18&63]+r[o>>12&63]+r[o>>6&63]+r[63&o]);return s.join("")}a["-".charCodeAt(0)]=62,a["_".charCodeAt(0)]=63},function(t,e){
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
e.read=function(t,e,n,r,a){var o,s,i=8*a-r-1,c=(1<<i)-1,u=c>>1,d=-7,l=n?a-1:0,p=n?-1:1,f=t[e+l];for(l+=p,o=f&(1<<-d)-1,f>>=-d,d+=i;d>0;o=256*o+t[e+l],l+=p,d-=8);for(s=o&(1<<-d)-1,o>>=-d,d+=r;d>0;s=256*s+t[e+l],l+=p,d-=8);if(0===o)o=1-u;else{if(o===c)return s?NaN:1/0*(f?-1:1);s+=Math.pow(2,r),o-=u}return(f?-1:1)*s*Math.pow(2,o-r)},e.write=function(t,e,n,r,a,o){var s,i,c,u=8*o-a-1,d=(1<<u)-1,l=d>>1,p=23===a?Math.pow(2,-24)-Math.pow(2,-77):0,f=r?0:o-1,h=r?1:-1,b=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(i=isNaN(e)?1:0,s=d):(s=Math.floor(Math.log(e)/Math.LN2),e*(c=Math.pow(2,-s))<1&&(s--,c*=2),(e+=s+l>=1?p/c:p*Math.pow(2,1-l))*c>=2&&(s++,c/=2),s+l>=d?(i=0,s=d):s+l>=1?(i=(e*c-1)*Math.pow(2,a),s+=l):(i=e*Math.pow(2,l-1)*Math.pow(2,a),s=0));a>=8;t[n+f]=255&i,f+=h,i/=256,a-=8);for(s=s<<a|i,u+=a;u>0;t[n+f]=255&s,f+=h,s/=256,u-=8);t[n+f-h]|=128*b}},function(t,e){var n={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==n.call(t)}},function(t,e,n){"use strict";(function(t){var e=n(22);
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const r=()=>n(227);let a;class o{constructor(){this.util=n(228),this.textEncoder=new this.util.TextEncoder}fetch(t,n){return null!=Object(e.c)().global.fetch?Object(e.c)().global.fetch(t,n):(null==a&&(a=r()),a(t,n))}now(){const e=t.hrtime();return 1e3*e[0]+e[1]/1e6}encode(t,e){if("utf-8"!==e&&"utf8"!==e)throw new Error("Node built-in encoder only supports utf-8, but got "+e);return this.textEncoder.encode(t)}decode(t,e){return 0===t.length?"":new this.util.TextDecoder(e).decode(t)}}Object(e.c)().get("IS_NODE")&&Object(e.c)().setPlatform("node",new o)}).call(this,n(125))},function(t,e){},function(t,e){},function(t,e,n){(function(t){var r;!function(t,a,o){function s(t){var e,n=this,r=(e=4022871197,function(t){t=t.toString();for(var n=0;n<t.length;n++){var r=.02519603282416938*(e+=t.charCodeAt(n));r-=e=r>>>0,e=(r*=e)>>>0,e+=4294967296*(r-=e)}return 2.3283064365386963e-10*(e>>>0)});n.next=function(){var t=2091639*n.s0+2.3283064365386963e-10*n.c;return n.s0=n.s1,n.s1=n.s2,n.s2=t-(n.c=0|t)},n.c=1,n.s0=r(" "),n.s1=r(" "),n.s2=r(" "),n.s0-=r(t),n.s0<0&&(n.s0+=1),n.s1-=r(t),n.s1<0&&(n.s1+=1),n.s2-=r(t),n.s2<0&&(n.s2+=1),r=null}function i(t,e){return e.c=t.c,e.s0=t.s0,e.s1=t.s1,e.s2=t.s2,e}function c(t,e){var n=new s(t),r=e&&e.state,a=n.next;return a.int32=function(){return 4294967296*n.next()|0},a.double=function(){return a()+11102230246251565e-32*(2097152*a()|0)},a.quick=a,r&&("object"==typeof r&&i(r,n),a.state=function(){return i(n,{})}),a}a&&a.exports?a.exports=c:n(53)&&n(94)?void 0===(r=function(){return c}.call(e,n,e,a))||(a.exports=r):this.alea=c}(0,t,n(53))}).call(this,n(93)(t))},function(t,e,n){(function(t){var r;!function(t,a,o){function s(t){var e=this,n="";e.x=0,e.y=0,e.z=0,e.w=0,e.next=function(){var t=e.x^e.x<<11;return e.x=e.y,e.y=e.z,e.z=e.w,e.w^=e.w>>>19^t^t>>>8},t===(0|t)?e.x=t:n+=t;for(var r=0;r<n.length+64;r++)e.x^=0|n.charCodeAt(r),e.next()}function i(t,e){return e.x=t.x,e.y=t.y,e.z=t.z,e.w=t.w,e}function c(t,e){var n=new s(t),r=e&&e.state,a=function(){return(n.next()>>>0)/4294967296};return a.double=function(){do{var t=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21)}while(0===t);return t},a.int32=n.next,a.quick=a,r&&("object"==typeof r&&i(r,n),a.state=function(){return i(n,{})}),a}a&&a.exports?a.exports=c:n(53)&&n(94)?void 0===(r=function(){return c}.call(e,n,e,a))||(a.exports=r):this.xor128=c}(0,t,n(53))}).call(this,n(93)(t))},function(t,e,n){(function(t){var r;!function(t,a,o){function s(t){var e=this,n="";e.next=function(){var t=e.x^e.x>>>2;return e.x=e.y,e.y=e.z,e.z=e.w,e.w=e.v,(e.d=e.d+362437|0)+(e.v=e.v^e.v<<4^t^t<<1)|0},e.x=0,e.y=0,e.z=0,e.w=0,e.v=0,t===(0|t)?e.x=t:n+=t;for(var r=0;r<n.length+64;r++)e.x^=0|n.charCodeAt(r),r==n.length&&(e.d=e.x<<10^e.x>>>4),e.next()}function i(t,e){return e.x=t.x,e.y=t.y,e.z=t.z,e.w=t.w,e.v=t.v,e.d=t.d,e}function c(t,e){var n=new s(t),r=e&&e.state,a=function(){return(n.next()>>>0)/4294967296};return a.double=function(){do{var t=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21)}while(0===t);return t},a.int32=n.next,a.quick=a,r&&("object"==typeof r&&i(r,n),a.state=function(){return i(n,{})}),a}a&&a.exports?a.exports=c:n(53)&&n(94)?void 0===(r=function(){return c}.call(e,n,e,a))||(a.exports=r):this.xorwow=c}(0,t,n(53))}).call(this,n(93)(t))},function(t,e,n){(function(t){var r;!function(t,a,o){function s(t){var e=this;e.next=function(){var t,n,r=e.x,a=e.i;return t=r[a],n=(t^=t>>>7)^t<<24,n^=(t=r[a+1&7])^t>>>10,n^=(t=r[a+3&7])^t>>>3,n^=(t=r[a+4&7])^t<<7,t=r[a+7&7],n^=(t^=t<<13)^t<<9,r[a]=n,e.i=a+1&7,n},function(t,e){var n,r=[];if(e===(0|e))r[0]=e;else for(e=""+e,n=0;n<e.length;++n)r[7&n]=r[7&n]<<15^e.charCodeAt(n)+r[n+1&7]<<13;for(;r.length<8;)r.push(0);for(n=0;n<8&&0===r[n];++n);for(8==n?r[7]=-1:r[n],t.x=r,t.i=0,n=256;n>0;--n)t.next()}(e,t)}function i(t,e){return e.x=t.x.slice(),e.i=t.i,e}function c(t,e){null==t&&(t=+new Date);var n=new s(t),r=e&&e.state,a=function(){return(n.next()>>>0)/4294967296};return a.double=function(){do{var t=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21)}while(0===t);return t},a.int32=n.next,a.quick=a,r&&(r.x&&i(r,n),a.state=function(){return i(n,{})}),a}a&&a.exports?a.exports=c:n(53)&&n(94)?void 0===(r=function(){return c}.call(e,n,e,a))||(a.exports=r):this.xorshift7=c}(0,t,n(53))}).call(this,n(93)(t))},function(t,e,n){(function(t){var r;!function(t,a,o){function s(t){var e=this;e.next=function(){var t,n,r=e.w,a=e.X,o=e.i;return e.w=r=r+1640531527|0,n=a[o+34&127],t=a[o=o+1&127],n^=n<<13,t^=t<<17,n^=n>>>15,t^=t>>>12,n=a[o]=n^t,e.i=o,n+(r^r>>>16)|0},function(t,e){var n,r,a,o,s,i=[],c=128;for(e===(0|e)?(r=e,e=null):(e+="\0",r=0,c=Math.max(c,e.length)),a=0,o=-32;o<c;++o)e&&(r^=e.charCodeAt((o+32)%e.length)),0===o&&(s=r),r^=r<<10,r^=r>>>15,r^=r<<4,r^=r>>>13,o>=0&&(s=s+1640531527|0,a=0==(n=i[127&o]^=r+s)?a+1:0);for(a>=128&&(i[127&(e&&e.length||0)]=-1),a=127,o=512;o>0;--o)r=i[a+34&127],n=i[a=a+1&127],r^=r<<13,n^=n<<17,r^=r>>>15,n^=n>>>12,i[a]=r^n;t.w=s,t.X=i,t.i=a}(e,t)}function i(t,e){return e.i=t.i,e.w=t.w,e.X=t.X.slice(),e}function c(t,e){null==t&&(t=+new Date);var n=new s(t),r=e&&e.state,a=function(){return(n.next()>>>0)/4294967296};return a.double=function(){do{var t=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21)}while(0===t);return t},a.int32=n.next,a.quick=a,r&&(r.X&&i(r,n),a.state=function(){return i(n,{})}),a}a&&a.exports?a.exports=c:n(53)&&n(94)?void 0===(r=function(){return c}.call(e,n,e,a))||(a.exports=r):this.xor4096=c}(0,t,n(53))}).call(this,n(93)(t))},function(t,e,n){(function(t){var r;!function(t,a,o){function s(t){var e=this,n="";e.next=function(){var t=e.b,n=e.c,r=e.d,a=e.a;return t=t<<25^t>>>7^n,n=n-r|0,r=r<<24^r>>>8^a,a=a-t|0,e.b=t=t<<20^t>>>12^n,e.c=n=n-r|0,e.d=r<<16^n>>>16^a,e.a=a-t|0},e.a=0,e.b=0,e.c=-1640531527,e.d=1367130551,t===Math.floor(t)?(e.a=t/4294967296|0,e.b=0|t):n+=t;for(var r=0;r<n.length+20;r++)e.b^=0|n.charCodeAt(r),e.next()}function i(t,e){return e.a=t.a,e.b=t.b,e.c=t.c,e.d=t.d,e}function c(t,e){var n=new s(t),r=e&&e.state,a=function(){return(n.next()>>>0)/4294967296};return a.double=function(){do{var t=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21)}while(0===t);return t},a.int32=n.next,a.quick=a,r&&("object"==typeof r&&i(r,n),a.state=function(){return i(n,{})}),a}a&&a.exports?a.exports=c:n(53)&&n(94)?void 0===(r=function(){return c}.call(e,n,e,a))||(a.exports=r):this.tychei=c}(0,t,n(53))}).call(this,n(93)(t))},function(t,e,n){var r;!function(a,o){var s,i=this,c=o.pow(256,6),u=o.pow(2,52),d=2*u;function l(t,e,n){var r=[],l=h(function t(e,n){var r,a=[],o=typeof e;if(n&&"object"==o)for(r in e)try{a.push(t(e[r],n-1))}catch(t){}return a.length?a:"string"==o?e:e+"\0"}((e=1==e?{entropy:!0}:e||{}).entropy?[t,b(a)]:null==t?function(){try{var t;return s&&(t=s.randomBytes)?t=t(256):(t=new Uint8Array(256),(i.crypto||i.msCrypto).getRandomValues(t)),b(t)}catch(t){var e=i.navigator,n=e&&e.plugins;return[+new Date,i,n,i.screen,b(a)]}}():t,3),r),m=new p(r),g=function(){for(var t=m.g(6),e=c,n=0;t<u;)t=256*(t+n),e*=256,n=m.g(1);for(;t>=d;)t/=2,e/=2,n>>>=1;return(t+n)/e};return g.int32=function(){return 0|m.g(4)},g.quick=function(){return m.g(4)/4294967296},g.double=g,h(b(m.S),a),(e.pass||n||function(t,e,n,r){return r&&(r.S&&f(r,m),t.state=function(){return f(m,{})}),n?(o.random=t,e):t})(g,l,"global"in e?e.global:this==o,e.state)}function p(t){var e,n=t.length,r=this,a=0,o=r.i=r.j=0,s=r.S=[];for(n||(t=[n++]);a<256;)s[a]=a++;for(a=0;a<256;a++)s[a]=s[o=255&o+t[a%n]+(e=s[a])],s[o]=e;(r.g=function(t){for(var e,n=0,a=r.i,o=r.j,s=r.S;t--;)e=s[a=255&a+1],n=256*n+s[255&(s[a]=s[o=255&o+e])+(s[o]=e)];return r.i=a,r.j=o,n})(256)}function f(t,e){return e.i=t.i,e.j=t.j,e.S=t.S.slice(),e}function h(t,e){for(var n,r=t+"",a=0;a<r.length;)e[255&a]=255&(n^=19*e[255&a])+r.charCodeAt(a++);return b(e)}function b(t){return String.fromCharCode.apply(0,t)}if(o.seedrandom=l,h(o.random(),a),t.exports){t.exports=l;try{s=n(236)}catch(t){}}else void 0===(r=function(){return l}.call(e,n,e,t))||(t.exports=r)}([],Math)},function(t,e){},function(t,e,n){(function(t){var r=void 0!==t&&t||"undefined"!=typeof self&&self||window,a=Function.prototype.apply;function o(t,e){this._id=t,this._clearFn=e}e.setTimeout=function(){return new o(a.call(setTimeout,r,arguments),clearTimeout)},e.setInterval=function(){return new o(a.call(setInterval,r,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(r,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout((function(){t._onTimeout&&t._onTimeout()}),e))},n(238),e.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==t&&t.setImmediate||this&&this.setImmediate,e.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==t&&t.clearImmediate||this&&this.clearImmediate}).call(this,n(124))},function(t,e,n){(function(t,e){!function(t,n){"use strict";if(!t.setImmediate){var r,a,o,s,i,c=1,u={},d=!1,l=t.document,p=Object.getPrototypeOf&&Object.getPrototypeOf(t);p=p&&p.setTimeout?p:t,"[object process]"==={}.toString.call(t.process)?r=function(t){e.nextTick((function(){h(t)}))}:!function(){if(t.postMessage&&!t.importScripts){var e=!0,n=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=n,e}}()?t.MessageChannel?((o=new MessageChannel).port1.onmessage=function(t){h(t.data)},r=function(t){o.port2.postMessage(t)}):l&&"onreadystatechange"in l.createElement("script")?(a=l.documentElement,r=function(t){var e=l.createElement("script");e.onreadystatechange=function(){h(t),e.onreadystatechange=null,a.removeChild(e),e=null},a.appendChild(e)}):r=function(t){setTimeout(h,0,t)}:(s="setImmediate$"+Math.random()+"$",i=function(e){e.source===t&&"string"==typeof e.data&&0===e.data.indexOf(s)&&h(+e.data.slice(s.length))},t.addEventListener?t.addEventListener("message",i,!1):t.attachEvent("onmessage",i),r=function(e){t.postMessage(s+e,"*")}),p.setImmediate=function(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];var a={callback:t,args:e};return u[c]=a,r(c),c++},p.clearImmediate=f}function f(t){delete u[t]}function h(t){if(d)setTimeout(h,0,t);else{var e=u[t];if(e){d=!0;try{!function(t){var e=t.callback,n=t.args;switch(n.length){case 0:e();break;case 1:e(n[0]);break;case 2:e(n[0],n[1]);break;case 3:e(n[0],n[1],n[2]);break;default:e.apply(void 0,n)}}(e)}finally{f(t),d=!1}}}}}("undefined"==typeof self?void 0===t?this:t:self)}).call(this,n(124),n(125))},function(t,e,n){"use strict";n.r(e),n.d(e,"startCam",(function(){return Nr})),n.d(e,"makeCapture",(function(){return Sr})),n.d(e,"drawPerson",(function(){return Tr})),n.d(e,"snap",(function(){return Ir}));n(221);var r=function(){null!==document.getElementById("description")?(document.getElementById("description").id="description2",document.getElementById("toggler").innerHTML="READ LESS"):(document.getElementById("description2").id="description",document.getElementById("toggler").innerHTML="READ MORE")},a=function(){!0===document.getElementById("photobooth").hidden?Array.from(document.getElementsByClassName("photo-button")).forEach((function(t){t.removeAttribute("hidden"),t.innerHTML="USE",t.onclick=function(){return o(t)}})):Array.from(document.getElementsByClassName("photo-button")).forEach((function(t){t.setAttribute("hidden","true"),t.innerHTML=""}))},o=function(t){document.getElementById("ayo").style.backgroundImage="url(".concat(t.previousElementSibling.href)},s=function(t){var e=document.createElement("script");e.id="wikiAPI",e.src="https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=".concat(t,"%20skyline&tagmode=all"),document.querySelector("head").appendChild(e)},i=function(t){var e=t.replace(" ","_").toLowerCase(),n=document.createElement("script");return"new york"===t.toLowerCase()?n.src="https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=nyc":"phoenix"===t.toLowerCase()?n.src="https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Phoenix,_Arizona":n.src="https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=".concat(e),$.ajax({url:n.src,dataType:"jsonp"}).then((function(t){null!==document.getElementById("description")?document.getElementById("description").innerHTML=Object.values(t.query.pages)[0].extract:null!==document.getElementById("description2")&&(document.getElementById("description2").innerHTML=Object.values(t.query.pages)[0].extract)}))},c=function(t){var e='<iframe \n      width="736" height="414" \n      src="https://www.youtube.com/embed/'.concat(t,'"\n      frameborder="0" \n      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" \n      allowfullscreen>\n   </iframe>');document.getElementById("vid").innerHTML=e},u=(n(222),n(9)),d=n(48),l=n(2);
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class p{constructor(t,e,n){this.node=t,this.tensorMap=e,this.context=n,this.inputs=[],this.attrs={},this.inputs=t.inputNames.map(t=>this.getInput(t)),null!=t.rawAttrs&&(this.attrs=Object.keys(t.rawAttrs).reduce((t,e)=>(t[e]=this.getAttr(e),t),{}))}getInput(t){return Object(l.e)(t,this.tensorMap,this.context)}getAttr(t,e){const n=this.node.rawAttrs[t];if(null!=n.tensor)return Object(l.e)(t,this.tensorMap,this.context);if(null!=n.i||null!=n.f)return Object(d.f)(this.node.rawAttrs,t,e);if(null!=n.s)return Object(d.i)(this.node.rawAttrs,t,e);if(null!=n.b)return Object(d.c)(this.node.rawAttrs,t,e);if(null!=n.shape)return Object(d.k)(this.node.rawAttrs,t,e);if(null!=n.type)return Object(d.e)(this.node.rawAttrs,t,e);if(null!=n.list){if(null!=n.list.i||null!=n.list.f)return Object(d.g)(this.node.rawAttrs,t,e);if(null!=n.list.s)return Object(d.h)(this.node.rawAttrs,t,e);if(null!=n.list.shape)return Object(d.j)(this.node.rawAttrs,t,e);if(null!=n.list.b)return Object(d.b)(this.node.rawAttrs,t,e);if(null!=n.list.type)return Object(d.d)(this.node.rawAttrs,t,e)}return e}}var f=n(87),h=n(12),b=n(168),m=n(108),g=n(8),y=n(14),O=n(138),j=n(96),v=n(13),w=n(80),x=n(63),k=n(40),N=n(83);var S=n(36),E=n(166),T=n(167),I=n(169),A=n(170),_=n(171),D=n(132),M=n(172),F=n(174),R=n(49),P=n(99),C=n(135),B=n(101),L=n(177),z=n(35),V=n(178),q=n(102),U=n(59),H=n(141),W=n(103),G=n(27),K=n(189),Y=n(91),J=n(67),X=n(190),Q=n(149),Z=n(71),tt=n(151),et=n(192),nt=n(152),rt=n(142),at=n(32),ot=n(23),st=n(120),it=n(195),ct=n(175),ut=n(148),dt=n(146),lt=n(104),pt=n(109);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function ft(t,e,n=""){u.util.assert(function(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(-1!==t[n]&&-1!==e[n]&&t[n]!==e[n])return!1;return!0}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */(t,e),()=>n+` Shapes ${t} and ${e} must match`)}class ht{constructor(t,e,n,r,a,o,s){this.name=t,this.dtype=e,this.maxSize=n,this.elementShape=r,this.identicalElementShapes=a,this.dynamicSize=o,this.clearAfterRead=s,this.tensors=[],this.closed_=!1,this.idTensor=Object(u.scalar)(0),Object(u.keep)(this.idTensor)}get id(){return this.idTensor.id}get closed(){return this.closed_}clearAndClose(t){this.tensors.forEach(e=>{null!=t&&t.has(e.tensor.id)||e.tensor.dispose()}),this.tensors=[],this.closed_=!0,this.idTensor.dispose()}size(){return this.tensors.length}read(t){if(this.closed_)throw new Error(`TensorArray ${this.name} has already been closed.`);if(t<0||t>=this.size())throw new Error(`Tried to read from index ${t}, but array size is: ${this.size()}`);const e=this.tensors[t];if(e.cleared)throw new Error(`TensorArray ${this.name}: Could not read index ${t} twice because it was cleared after a previous read (perhaps try setting clear_after_read = false?).`);return this.clearAfterRead&&(e.cleared=!0),e.read=!0,e.tensor}readMany(t){return t.map(t=>this.read(t))}write(t,e){if(this.closed_)throw new Error(`TensorArray ${this.name} has already been closed.`);if(t<0||!this.dynamicSize&&t>=this.maxSize)throw new Error(`Tried to write to index ${t}, but array is not resizeable and size is: ${this.maxSize}`);const n=this.tensors[t]||{};if(e.dtype!==this.dtype)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${t},\n          because the value dtype is ${e.dtype}, but TensorArray dtype is ${this.dtype}.`);if(0!==this.size()||null!=this.elementShape&&0!==this.elementShape.length||(this.elementShape=e.shape),ft(this.elementShape,e.shape,`TensorArray ${this.name}: Could not write to TensorArray index ${t}.`),n.read)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${t}, because it has already been read.`);if(n.written)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${t}, because it has already been written.`);n.tensor=e,Object(u.keep)(e),n.written=!0,this.tensors[t]=n}writeMany(t,e){if(t.length!==e.length)throw new Error(`TensorArray ${this.name}: could not write multiple tensors,because the index size: ${t.length} is not the same as tensors size: ${e.length}.`);t.forEach((t,n)=>this.write(t,e[n]))}gather(t,e){if(e&&e!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but gather requested dtype ${e}`);if(t)t=t.slice(0,this.size());else{t=[];for(let e=0;e<this.size();e++)t.push(e)}if(0===t.length)return Object(u.tensor)([],[0].concat(this.elementShape));const n=this.readMany(t);return ft(this.elementShape,n[0].shape,"TensorArray shape mismatch: "),Object(u.stack)(n,0)}concat(t){if(t&&t!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but concat requested dtype ${t}`);if(0===this.size())return Object(u.tensor)([],[0].concat(this.elementShape));const e=[];for(let t=0;t<this.size();t++)e.push(t);const n=this.readMany(e);return ft(this.elementShape,n[0].shape,`TensorArray shape mismatch: tensor array shape (${this.elementShape}) vs first tensor shape (${n[0].shape})`),Object(u.concat)(n,0)}scatter(t,e){if(e.dtype!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${e.dtype}`);if(t.length!==e.shape[0])throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${t.length} vs. ${e.shape[0]}`);const n=Math.max(...t);if(!this.dynamicSize&&n>=this.maxSize)throw new Error(`Max index must be < array size (${n}  vs. ${this.maxSize})`);this.writeMany(t,Object(u.unstack)(e,0))}split(t,e){if(e.dtype!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${e.dtype}`);let n=0;const r=t.map(t=>(n+=t,n));if(n!==e.shape[0])throw new Error(`Expected sum of lengths to be equal to\n          tensor.shape[0], but sum of lengths is\n        ${n}, and tensor's shape is: ${e.shape}`);if(!this.dynamicSize&&t.length!==this.maxSize)throw new Error(`TensorArray's size is not equal to the size of lengths (${this.maxSize} vs. ${t.length}), and the TensorArray is not marked as dynamically resizeable`);const a=0===n?0:e.size/n,o=[];Object(u.tidy)(()=>{e=Object(u.reshape)(e,[1,n,a]);for(let n=0;n<t.length;++n){const s=[0,0===n?0:r[n-1],0],i=[1,t[n],a];o[n]=Object(u.reshape)(Object(u.slice)(e,s,i),this.elementShape)}return o});const s=[];for(let e=0;e<t.length;e++)s[e]=e;this.writeMany(s,o)}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class bt{constructor(t,e,n,r=-1){this.tensors=t,this.elementShape=e,this.elementDtype=n,null!=t&&t.forEach(t=>{if(n!==t.dtype)throw new Error(`Invalid data types; op elements ${n}, but list elements ${t.dtype}`);ft(e,t.shape,"TensorList shape mismatch: "),Object(u.keep)(t)}),this.idTensor=Object(u.scalar)(0),this.maxNumElements=r,Object(u.keep)(this.idTensor)}get id(){return this.idTensor.id}copy(){return new bt([...this.tensors],this.elementShape,this.elementDtype)}clearAndClose(t){this.tensors.forEach(e=>{null!=t&&t.has(e.id)||e.dispose()}),this.tensors.length=0,this.idTensor.dispose()}size(){return this.tensors.length}stack(t,e,n=-1){if(e!==this.elementDtype)throw new Error(`Invalid data types; op elements ${e}, but list elements ${this.elementDtype}`);if(-1!==n&&this.tensors.length!==n)throw new Error(`Operation expected a list with ${n} elements but got a list with ${this.tensors.length} elements.`);return ft(t,this.elementShape,"TensorList shape mismatch: "),Object(u.tidy)(()=>{const e=this.tensors.map(e=>Object(u.reshape)(e,t));return Object(u.stack)(e,0)})}popBack(t,e){if(e!==this.elementDtype)throw new Error(`Invalid data types; op elements ${e}, but list elements ${this.elementDtype}`);if(0===this.size())throw new Error("Trying to pop from an empty list.");const n=this.tensors.pop();return ft(n.shape,t,"TensorList shape mismatch: "),Object(u.reshape)(n,t)}pushBack(t){if(t.dtype!==this.elementDtype)throw new Error(`Invalid data types; op elements ${t.dtype}, but list elements ${this.elementDtype}`);if(ft(t.shape,this.elementShape,"TensorList shape mismatch: "),this.maxNumElements===this.size())throw new Error("Trying to push element into a full list.");Object(u.keep)(t),this.tensors.push(t)}resize(t){if(t<0)throw new Error("TensorListResize expects size to be non-negative. Got: "+t);if(-1!==this.maxNumElements&&t>this.maxNumElements)throw new Error(`TensorListResize input size ${t} is greater maxNumElement ${this.maxNumElements}.`);this.tensors.length=t}getItem(t,e,n){if(n!==this.elementDtype)throw new Error(`Invalid data types; op elements ${n}, but list elements ${this.elementDtype}`);if(t<0||t>this.tensors.length)throw new Error(`Trying to access element ${t} in a list with ${this.tensors.length} elements.`);if(null==this.tensors[t])throw new Error(`element at index ${t} is null.`);return ft(this.tensors[t].shape,e,"TensorList shape mismatch: "),this.tensors[t]}setItem(t,e){if(e.dtype!==this.elementDtype)throw new Error(`Invalid data types; op elements ${e.dtype}, but list elements ${this.elementDtype}`);if(t<0||-1!==this.maxNumElements&&t>=this.maxNumElements)throw new Error(`Trying to set element ${t} in a list with max ${this.maxNumElements} elements.`);ft(this.elementShape,e.shape,"TensorList shape mismatch: "),Object(u.keep)(e),this.tensors[t]=e}gather(t,e,n){if(e!==this.elementDtype)throw new Error(`Invalid data types; op elements ${e}, but list elements ${this.elementDtype}`);return ft(this.elementShape,n,"TensorList shape mismatch: "),0===(t=t.slice(0,this.size())).length?Object(u.tensor)([],[0].concat(this.elementShape)):Object(u.tidy)(()=>{const e=t.map(t=>Object(u.reshape)(this.tensors[t],n));return Object(u.stack)(e,0)})}concat(t,e){if(t&&t!==this.elementDtype)throw new Error(`TensorList dtype is ${this.elementDtype} but concat requested dtype ${t}`);return ft(this.elementShape,e,"TensorList shape mismatch: "),0===this.size()?Object(u.tensor)([],[0].concat(this.elementShape)):Object(u.tidy)(()=>{const t=this.tensors.map(t=>Object(u.reshape)(t,e));return Object(u.concat)(t,0)})}}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const mt=async(t,e,n)=>{switch(t.op){case"If":case"StatelessIf":{const r=Object(l.d)("thenBranch",t,e,n),a=Object(l.d)("elseBranch",t,e,n),o=Object(l.d)("cond",t,e,n),s=Object(l.d)("args",t,e,n);return(await o.data())[0]?n.functionMap[r].executeFunctionAsync(s,n.tensorArrayMap,n.tensorListMap):n.functionMap[a].executeFunctionAsync(s,n.tensorArrayMap,n.tensorListMap)}case"While":case"StatelessWhile":{const r=Object(l.d)("body",t,e,n),a=Object(l.d)("cond",t,e,n),o=Object(l.d)("args",t,e,n),s=await n.functionMap[a].executeFunctionAsync(o,n.tensorArrayMap,n.tensorListMap),i=o.map(t=>t.id);let c=await s[0].data();s.forEach(t=>{t.kept||-1!==i.indexOf(t.id)||t.dispose()});let u=o;for(;c[0];){const t=u;u=await n.functionMap[r].executeFunctionAsync(u,n.tensorArrayMap,n.tensorListMap);const e=u.map(t=>t.id);t.forEach(t=>{t.kept||-1!==i.indexOf(t.id)||-1!==e.indexOf(t.id)||t.dispose()});const o=await n.functionMap[a].executeFunctionAsync(u,n.tensorArrayMap,n.tensorListMap);c=await o[0].data(),o.forEach(t=>{t.kept||-1!==i.indexOf(t.id)||-1!==e.indexOf(t.id)||t.dispose()})}return u}case"LoopCond":{const r=Object(l.d)("pred",t,e,n);return[Object(l.a)(r)]}case"Switch":{const r=Object(l.d)("pred",t,e,n);let a=Object(l.d)("data",t,e,n);return a.kept||(a=Object(l.a)(a)),(await r.data())[0]?[void 0,a]:[a,void 0]}case"Merge":{const r=t.inputNames.find(t=>void 0!==Object(l.e)(t,e,n));if(r){const t=Object(l.e)(r,e,n);return[Object(l.a)(t)]}return}case"Enter":{const r=Object(l.d)("frameName",t,e,n),a=Object(l.d)("tensor",t,e,n);return n.enterFrame(r),[Object(l.a)(a)]}case"Exit":{const r=Object(l.d)("tensor",t,e,n);return n.exitFrame(),[Object(l.a)(r)]}case"NextIteration":{const r=Object(l.d)("tensor",t,e,n);return n.nextIteration(),[Object(l.a)(r)]}case"TensorArrayV3":{const r=Object(l.d)("size",t,e,n),a=Object(l.d)("dtype",t,e,n),o=Object(l.d)("elementShape",t,e,n),s=Object(l.d)("dynamicSize",t,e,n),i=Object(l.d)("clearAfterRead",t,e,n),c=Object(l.d)("identicalElementShapes",t,e,n),d=Object(l.d)("name",t,e,n),p=new ht(d,a,r,o,c,s,i);return n.addTensorArray(p),[p.idTensor,Object(u.scalar)(1)]}case"TensorArrayWriteV3":{const r=Object(l.d)("tensorArrayId",t,e,n),a=Object(l.d)("index",t,e,n),o=Object(l.d)("tensor",t,e,n),s=n.getTensorArray(r.id);return s.write(a,o),[s.idTensor]}case"TensorArrayReadV3":{const r=Object(l.d)("tensorArrayId",t,e,n),a=Object(l.d)("index",t,e,n);return[n.getTensorArray(r.id).read(a)]}case"TensorArrayGatherV3":{const r=Object(l.d)("tensorArrayId",t,e,n),a=Object(l.d)("indices",t,e,n),o=Object(l.d)("dtype",t,e,n);return[n.getTensorArray(r.id).gather(a,o)]}case"TensorArrayScatterV3":{const r=Object(l.d)("tensorArrayId",t,e,n),a=Object(l.d)("indices",t,e,n),o=Object(l.d)("tensor",t,e,n),s=n.getTensorArray(r.id);return s.scatter(a,o),[s.idTensor]}case"TensorArrayConcatV3":{const r=Object(l.d)("tensorArrayId",t,e,n),a=n.getTensorArray(r.id),o=Object(l.d)("dtype",t,e,n);return[a.concat(o)]}case"TensorArraySplitV3":{const r=Object(l.d)("tensorArrayId",t,e,n),a=Object(l.d)("tensor",t,e,n),o=Object(l.d)("lengths",t,e,n),s=n.getTensorArray(r.id);return s.split(o,a),[s.idTensor]}case"TensorArraySizeV3":{const r=Object(l.d)("tensorArrayId",t,e,n),a=n.getTensorArray(r.id);return[Object(u.scalar)(a.size(),"int32")]}case"TensorArrayCloseV3":{const r=Object(l.d)("tensorArrayId",t,e,n),a=n.getTensorArray(r.id);return a.clearAndClose(),[a.idTensor]}case"TensorListSetItem":{const r=Object(l.d)("tensorListId",t,e,n),a=Object(l.d)("index",t,e,n),o=Object(l.d)("tensor",t,e,n),s=n.getTensorList(r.id);return s.setItem(a,o),[s.idTensor]}case"TensorListGetItem":{const r=Object(l.d)("tensorListId",t,e,n),a=Object(l.d)("index",t,e,n),o=Object(l.d)("elementShape",t,e,n),s=Object(l.d)("elementDType",t,e,n);return[n.getTensorList(r.id).getItem(a,o,s)]}case"TensorListScatterV2":case"TensorListScatter":{const r=Object(l.d)("indices",t,e,n),a=function(t,e,n,r){if(e.length!==t.shape[0])throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${e.length} vs. ${t.shape[0]}`);const a=Math.max(...e);if(null!=r&&-1!==r&&a>=r)throw new Error(`Max index must be < array size (${a}  vs. ${r})`);const o=new bt([],n,t.dtype,r),s=Object(u.unstack)(t,0);return e.forEach((t,e)=>{o.setItem(t,s[e])}),o}(Object(l.d)("tensor",t,e,n),r,Object(l.d)("elementShape",t,e,n),Object(l.d)("numElements",t,e,n));return n.addTensorList(a),[a.idTensor]}case"TensorListReserve":{const r=function(t,e,n){return new bt([],t,e,n)}(Object(l.d)("elementShape",t,e,n),Object(l.d)("elementDType",t,e,n),Object(l.d)("numElements",t,e,n));return n.addTensorList(r),[r.idTensor]}case"TensorListGather":{const r=Object(l.d)("tensorListId",t,e,n),a=Object(l.d)("indices",t,e,n),o=Object(l.d)("elementShape",t,e,n),s=Object(l.d)("elementDType",t,e,n);return[n.getTensorList(r.id).gather(a,s,o)]}case"TensorListStack":{const r=Object(l.d)("tensorListId",t,e,n),a=Object(l.d)("elementShape",t,e,n),o=Object(l.d)("elementDType",t,e,n),s=Object(l.d)("numElements",t,e,n);return[n.getTensorList(r.id).stack(a,o,s)]}case"TensorListFromTensor":{const r=function(t,e,n){const r=t.dtype;if(t.shape.length<1)throw new Error("Tensor must be at least a vector, but saw shape: "+t.shape);if(t.dtype!==n)throw new Error(`Invalid data types; op elements ${t.dtype}, but list elements ${n}`);ft(t.shape.slice(1),e,"TensorList shape mismatch: ");const a=Object(u.unstack)(t);return new bt(a,e,r)}(Object(l.d)("tensor",t,e,n),Object(l.d)("elementShape",t,e,n),Object(l.d)("elementDType",t,e,n));return n.addTensorList(r),[r.idTensor]}case"TensorListConcat":{const r=Object(l.d)("tensorListId",t,e,n),a=n.getTensorList(r.id),o=Object(l.d)("dtype",t,e,n),s=Object(l.d)("elementShape",t,e,n);return[a.concat(o,s)]}case"TensorListPushBack":{const r=Object(l.d)("tensorListId",t,e,n),a=Object(l.d)("tensor",t,e,n),o=n.getTensorList(r.id);return o.pushBack(a),[o.idTensor]}case"TensorListPopBack":{const r=Object(l.d)("tensorListId",t,e,n),a=Object(l.d)("elementShape",t,e,n),o=Object(l.d)("elementDType",t,e,n);return[n.getTensorList(r.id).popBack(a,o)]}case"TensorListSplit":{const r=Object(l.d)("tensor",t,e,n),a=Object(l.d)("elementShape",t,e,n),o=function(t,e,n){let r=0;const a=e.map(t=>(r+=t,r));if(r!==t.shape[0])throw new Error(`Expected sum of lengths to be equal to\n          tensor.shape[0], but sum of lengths is\n        ${r}, and tensor's shape is: ${t.shape}`);const o=0===r?0:t.size/r,s=Object(u.tidy)(()=>{const s=[];t=Object(u.reshape)(t,[1,r,o]);for(let r=0;r<e.length;++r){const i=[0,0===r?0:a[r-1],0],c=[1,e[r],o];s[r]=Object(u.reshape)(Object(u.slice)(t,i,c),n)}return t.dispose(),s}),i=new bt([],n,t.dtype,e.length);for(let t=0;t<s.length;t++)i.setItem(t,s[t]);return i}(r,Object(l.d)("lengths",t,e,n),a);return n.addTensorList(o),[o.idTensor]}default:throw TypeError(`Node type ${t.op} is not implemented`)}};var gt=n(133),yt=n(54),Ot=n(17),jt=n(134),vt=n(64),wt=n(176),xt=n(98),kt=n(107),Nt=n(186),St=n(173),Et=n(185),Tt=n(137);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function It(t,e,n){const[r,a]=Object(l.d)("fusedOps",t,e,n),o="biasadd"===r,s="prelu"===a,i="fusedbatchnorm"===r,c=Object(l.d)("numArgs",t,e,n);if(o){if(s&&2!==c)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!s&&1!==c)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd must have one extra argument: bias.")}if(i)throw new Error("FusedConv2d and DepthwiseConv2d with FusedBatchNorm is not supported.");const u=Object(l.d)("strides",t,e,n),d=Object(l.c)(t,e,n),p=Object(l.d)("dataFormat",t,e,n).toUpperCase(),f=Object(l.d)("dilations",t,e,n),[h,b]=Object(l.d)("args",t,e,n);return{stride:u,pad:d,dataFormat:p,dilations:f,biasArg:h,preluArg:b,activationFunc:a}}var At=n(97),_t=n(182),Dt=n(187),Mt=n(90),Ft=n(66),$t=n(188),Rt=n(147),Pt=n(121),Ct=n(196),Bt=n(55),Lt=n(20);var zt=n(11),Vt=n(157),qt=n(191);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Ut(t,e,n){return{boxes:Object(l.d)("boxes",t,e,n),scores:Object(l.d)("scores",t,e,n),maxOutputSize:Object(l.d)("maxOutputSize",t,e,n),iouThreshold:Object(l.d)("iouThreshold",t,e,n),scoreThreshold:Object(l.d)("scoreThreshold",t,e,n),softNmsSigma:Object(l.d)("softNmsSigma",t,e,n)}}var Ht=n(155),Wt=n(156);var Gt=n(61),Kt=n(15);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Yt{constructor(t,e){this.keyDType=t,this.valueDType=e,this.handle=Object(u.scalar)(0),this.tensorMap=new Map,Object(u.keep)(this.handle)}get id(){return this.handle.id}clearAndClose(){this.tensorMap.forEach(t=>t.dispose()),this.tensorMap.clear(),this.handle.dispose()}size(){return this.tensorMap.size}async import(t,e){this.checkKeyAndValueTensor(t,e);const n=await t.data();return this.tensorMap.forEach(t=>t.dispose()),this.tensorMap.clear(),Object(u.tidy)(()=>{const t=Object(u.unstack)(e),r=n.length,a=t.length;u.util.assert(r===a,()=>`The number of elements doesn't match, keys has ${r} elements, the values has ${a} elements.`);for(let e=0;e<r;e++){const r=n[e],a=t[e];Object(u.keep)(a),this.tensorMap.set(r,a)}return this.handle})}async find(t,e){this.checkKeyAndValueTensor(t,e);const n=await t.data();return Object(u.tidy)(()=>{const t=[];for(let r=0;r<n.length;r++){const a=n[r],o=this.findWithDefault(a,e);t.push(o)}return Object(u.stack)(t)})}findWithDefault(t,e){const n=this.tensorMap.get(t);return null!=n?n:e}checkKeyAndValueTensor(t,e){if(t.dtype!==this.keyDType)throw new Error(`Expect key dtype ${this.keyDType}, but got `+t.dtype);if(e.dtype!==this.valueDType)throw new Error(`Expect value dtype ${this.valueDType}, but got `+e.dtype)}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var Jt=n(65),Xt=n(81),Qt=n(38),Zt=n(45),te=n(78),ee=n(46),ne=n(50),re=n(79),ae=n(106),oe=n(31);var se=n(25),ie=n(43);var ce=n(70),ue=n(140),de=n(193),le=n(184),pe=n(202);var fe=n(57),he=n(74),be=n(89),me=n(18),ge=n(128),ye=n(129),Oe=n(130),je=n(131),ve=n(100);var we=n(28),xe=n(77),ke=n(41),Ne=n(24),Se=n(194),Ee=n(84),Te=n(6),Ie=n(51),Ae=n(69),_e=n(72),De=n(60),Me=n(199),Fe=n(200);var $e=n(111),Re=n(92),Pe=n(112),Ce=n(153);var Be=n(52),Le=n(144),ze=n(47),Ve=n(82),qe=n(76),Ue=n(136),He=n(88);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function We(t,e,n,r){const a=((t,e,n)=>{switch(t.category){case"arithmetic":return u.tidy(()=>((t,e,n)=>{switch(t.op){case"BiasAdd":case"AddV2":case"Add":return[h.a(Object(l.d)("a",t,e,n),Object(l.d)("b",t,e,n))];case"AddN":return[b.a(Object(l.d)("tensors",t,e,n))];case"FloorMod":case"Mod":return[m.a(Object(l.d)("a",t,e,n),Object(l.d)("b",t,e,n))];case"Mul":return[g.a(Object(l.d)("a",t,e,n),Object(l.d)("b",t,e,n))];case"RealDiv":case"Div":return[y.a(Object(l.d)("a",t,e,n),Object(l.d)("b",t,e,n))];case"DivNoNan":return[O.a(Object(l.d)("a",t,e,n),Object(l.d)("b",t,e,n))];case"FloorDiv":return[j.a(Object(l.d)("a",t,e,n),Object(l.d)("b",t,e,n))];case"Sub":return[v.a(Object(l.d)("a",t,e,n),Object(l.d)("b",t,e,n))];case"Minimum":return[w.a(Object(l.d)("a",t,e,n),Object(l.d)("b",t,e,n))];case"Maximum":return[x.a(Object(l.d)("a",t,e,n),Object(l.d)("b",t,e,n))];case"Pow":return[k.a(Object(l.d)("a",t,e,n),Object(l.d)("b",t,e,n))];case"SquaredDifference":return[N.a(Object(l.d)("a",t,e,n),Object(l.d)("b",t,e,n))];default:throw TypeError(`Node type ${t.op} is not implemented`)}})(t,e,n));case"basic_math":return u.tidy(()=>((t,e,n)=>{switch(t.op){case"Abs":case"ComplexAbs":return[S.a(Object(l.d)("x",t,e,n))];case"Acos":return[E.a(Object(l.d)("x",t,e,n))];case"Acosh":return[T.a(Object(l.d)("x",t,e,n))];case"Asin":return[I.a(Object(l.d)("x",t,e,n))];case"Asinh":return[A.a(Object(l.d)("x",t,e,n))];case"Atan":return[_.a(Object(l.d)("x",t,e,n))];case"Atan2":return[D.a(Object(l.d)("x",t,e,n),Object(l.d)("y",t,e,n))];case"Atanh":return[M.a(Object(l.d)("x",t,e,n))];case"Ceil":return[F.a(Object(l.d)("x",t,e,n))];case"Complex":return[R.a(Object(l.d)("real",t,e,n),Object(l.d)("imag",t,e,n))];case"Cos":return[P.a(Object(l.d)("x",t,e,n))];case"Cosh":return[C.a(Object(l.d)("x",t,e,n))];case"Elu":return[B.a(Object(l.d)("x",t,e,n))];case"Erf":return[L.a(Object(l.d)("x",t,e,n))];case"Exp":return[z.a(Object(l.d)("x",t,e,n))];case"Expm1":return[V.a(Object(l.d)("x",t,e,n))];case"Floor":return[q.a(Object(l.d)("x",t,e,n))];case"Log":return[U.a(Object(l.d)("x",t,e,n))];case"Log1p":return[H.a(Object(l.d)("x",t,e,n))];case"Imag":return[W.a(Object(l.d)("x",t,e,n))];case"Neg":return[G.a(Object(l.d)("x",t,e,n))];case"Reciprocal":return[K.a(Object(l.d)("x",t,e,n))];case"Real":return[Y.a(Object(l.d)("x",t,e,n))];case"Relu":return[J.a(Object(l.d)("x",t,e,n))];case"Round":return[X.a(Object(l.d)("x",t,e,n))];case"Selu":return[Q.a(Object(l.d)("x",t,e,n))];case"Sigmoid":return[Z.a(Object(l.d)("x",t,e,n))];case"Sin":return[tt.a(Object(l.d)("x",t,e,n))];case"Sign":return[et.a(Object(l.d)("x",t,e,n))];case"Sinh":return[nt.a(Object(l.d)("x",t,e,n))];case"Softplus":return[rt.a(Object(l.d)("x",t,e,n))];case"Sqrt":return[at.a(Object(l.d)("x",t,e,n))];case"Square":return[ot.a(Object(l.d)("x",t,e,n))];case"Tanh":return[st.a(Object(l.d)("x",t,e,n))];case"Tan":return[it.a(Object(l.d)("x",t,e,n))];case"Relu6":case"ClipByValue":return[ct.a(Object(l.d)("x",t,e,n),Object(l.d)("clipValueMin",t,e,n),Object(l.d)("clipValueMax",t,e,n))];case"Rsqrt":return[ut.a(Object(l.e)(t.inputNames[0],e,n))];case"Prod":return[dt.a(Object(l.d)("x",t,e,n),Object(l.d)("axes",t,e,n))];case"LeakyRelu":return[lt.a(Object(l.d)("x",t,e,n),Object(l.d)("alpha",t,e,n))];case"Prelu":return[pt.a(Object(l.d)("x",t,e,n),Object(l.d)("alpha",t,e,n))];default:throw TypeError(`Node type ${t.op} is not implemented`)}})(t,e,n));case"control":return mt(t,e,n);case"convolution":return u.tidy(()=>((t,e,n)=>{switch(t.op){case"Conv1D":{const r=Object(l.d)("stride",t,e,n),a=Object(l.d)("pad",t,e,n),o=Object(l.d)("dataFormat",t,e,n).toUpperCase(),s=Object(l.d)("dilation",t,e,n);return[gt.a(Object(l.d)("x",t,e,n),Object(l.d)("filter",t,e,n),r,a,o,s)]}case"Conv2D":{const r=Object(l.d)("strides",t,e,n),a=Object(l.c)(t,e,n),o=Object(l.d)("dataFormat",t,e,n).toUpperCase(),s=Object(l.d)("dilations",t,e,n);return[yt.a(Object(l.d)("x",t,e,n),Object(l.d)("filter",t,e,n),[r[1],r[2]],a,o,[s[1],s[2]])]}case"_FusedConv2D":{const{stride:r,pad:a,dataFormat:o,dilations:s,biasArg:i,preluArg:c,activationFunc:u}=It(t,e,n);return[Ot.sb.conv2d({x:Object(l.d)("x",t,e,n),filter:Object(l.d)("filter",t,e,n),strides:[r[1],r[2]],pad:a,dataFormat:o,dilations:[s[1],s[2]],bias:i,activation:u,preluActivationWeights:c})]}case"FusedDepthwiseConv2dNative":{const{stride:r,pad:a,dataFormat:o,dilations:s,biasArg:i,preluArg:c,activationFunc:u}=It(t,e,n);return[Ot.sb.depthwiseConv2d({x:Object(l.d)("x",t,e,n),filter:Object(l.d)("filter",t,e,n),strides:[r[1],r[2]],pad:a,dataFormat:o,dilations:[s[1],s[2]],bias:i,activation:u,preluActivationWeights:c})]}case"Conv2DBackpropInput":case"Conv2dTranspose":{const r=Object(l.d)("outputShape",t,e,n),a=Object(l.d)("strides",t,e,n),o=Object(l.c)(t,e,n);return[jt.a(Object(l.d)("x",t,e,n),Object(l.d)("filter",t,e,n),r,[a[1],a[2]],o)]}case"DepthwiseConv2dNative":case"DepthwiseConv2d":{const r=Object(l.d)("strides",t,e,n),a=Object(l.c)(t,e,n),o=Object(l.d)("dilations",t,e,n),s=Object(l.d)("dataFormat",t,e,n).toUpperCase();return[vt.a(Object(l.d)("input",t,e,n),Object(l.d)("filter",t,e,n),[r[1],r[2]],a,s,[o[1],o[2]])]}case"Conv3D":{const r=Object(l.d)("strides",t,e,n),a=Object(l.d)("pad",t,e,n),o=Object(l.d)("dataFormat",t,e,n).toUpperCase(),s=Object(l.d)("dilations",t,e,n);return[wt.a(Object(l.d)("x",t,e,n),Object(l.d)("filter",t,e,n),[r[1],r[2],r[3]],a,o,[s[1],s[2],s[3]])]}case"AvgPool":{const r=Object(l.d)("strides",t,e,n),a=Object(l.d)("pad",t,e,n),o=Object(l.d)("kernelSize",t,e,n);return[xt.a(Object(l.d)("x",t,e,n),[o[1],o[2]],[r[1],r[2]],a)]}case"MaxPool":{const r=Object(l.d)("strides",t,e,n),a=Object(l.d)("pad",t,e,n),o=Object(l.d)("kernelSize",t,e,n);return[kt.a(Object(l.d)("x",t,e,n),[o[1],o[2]],[r[1],r[2]],a)]}case"MaxPoolWithArgmax":{const r=Object(l.d)("strides",t,e,n),a=Object(l.d)("pad",t,e,n),o=Object(l.d)("kernelSize",t,e,n),s=Object(l.d)("includeBatchInIndex",t,e,n),{result:i,indexes:c}=Nt.a(Object(l.d)("x",t,e,n),[o[1],o[2]],[r[1],r[2]],a,s);return[i,c]}case"AvgPool3D":{const r=Object(l.d)("strides",t,e,n),a=Object(l.d)("pad",t,e,n),o=Object(l.d)("kernelSize",t,e,n);return[St.a(Object(l.d)("x",t,e,n),[o[1],o[2],o[3]],[r[1],r[2],r[3]],a)]}case"MaxPool3D":{const r=Object(l.d)("strides",t,e,n),a=Object(l.d)("pad",t,e,n),o=Object(l.d)("kernelSize",t,e,n);return[Et.a(Object(l.d)("x",t,e,n),[o[1],o[2],o[3]],[r[1],r[2],r[3]],a)]}case"Dilation2D":{const r=Object(l.d)("strides",t,e,n),a=Object(l.d)("pad",t,e,n),o=Object(l.d)("dilations",t,e,n),s=r[1],i=r[2],c=o[1],u=o[2];return[Tt.a(Object(l.d)("x",t,e,n),Object(l.d)("filter",t,e,n),[s,i],a,[c,u],"NHWC")]}default:throw TypeError(`Node type ${t.op} is not implemented`)}})(t,e,n));case"creation":return u.tidy(()=>((t,e,n)=>{switch(t.op){case"Fill":{const r=Object(l.d)("shape",t,e,n),a=Object(l.d)("dtype",t,e,n),o=Object(l.d)("value",t,e,n);return[At.a(r,o,a)]}case"LinSpace":{const r=Object(l.d)("start",t,e,n),a=Object(l.d)("stop",t,e,n),o=Object(l.d)("num",t,e,n);return[_t.a(r,a,o)]}case"Multinomial":{const r=Object(l.d)("logits",t,e,n),a=Object(l.d)("numSamples",t,e,n),o=Object(l.d)("seed",t,e,n);return[Dt.a(r,a,o)]}case"OneHot":{const r=Object(l.d)("indices",t,e,n),a=Object(l.d)("depth",t,e,n),o=Object(l.d)("onValue",t,e,n),s=Object(l.d)("offValue",t,e,n);return[Mt.a(r,a,o,s)]}case"Ones":return[Ft.a(Object(l.d)("shape",t,e,n),Object(l.d)("dtype",t,e,n))];case"OnesLike":return[$t.a(Object(l.d)("x",t,e,n))];case"RandomUniform":return[Rt.a(Object(l.d)("shape",t,e,n),Object(l.d)("minval",t,e,n),Object(l.d)("maxval",t,e,n),Object(l.d)("dtype",t,e,n))];case"Range":{const r=Object(l.d)("start",t,e,n),a=Object(l.d)("stop",t,e,n),o=Object(l.d)("step",t,e,n);return[Pt.a(r,a,o,Object(l.d)("dtype",t,e,n))]}case"TruncatedNormal":{const r=Object(l.d)("shape",t,e,n),a=Object(l.d)("mean",t,e,n),o=Object(l.d)("stdDev",t,e,n),s=Object(l.d)("seed",t,e,n);return[Ct.a(r,a,o,Object(l.d)("dtype",t,e,n),s)]}case"Zeros":return[Bt.a(Object(l.d)("shape",t,e,n),Object(l.d)("dtype",t,e,n))];case"ZerosLike":return[Lt.a(Object(l.d)("x",t,e,n))];default:throw TypeError(`Node type ${t.op} is not implemented`)}})(t,e,n));case"dynamic":return(async(t,e,n)=>{switch(t.op){case"NonMaxSuppressionV5":{const{boxes:r,scores:a,maxOutputSize:o,iouThreshold:s,scoreThreshold:i,softNmsSigma:c}=Ut(t,e,n),u=await Ot.Bb.nonMaxSuppressionWithScoreAsync(r,a,o,s,i,c);return[u.selectedIndices,u.selectedScores]}case"NonMaxSuppressionV4":{const{boxes:r,scores:a,maxOutputSize:o,iouThreshold:s,scoreThreshold:i}=Ut(t,e,n),c=Object(l.d)("padToMaxOutputSize",t,e,n),u=await Ot.Bb.nonMaxSuppressionPaddedAsync(r,a,o,s,i,c);return[u.selectedIndices,u.validOutputs]}case"NonMaxSuppressionV3":case"NonMaxSuppressionV2":{const{boxes:r,scores:a,maxOutputSize:o,iouThreshold:s,scoreThreshold:i}=Ut(t,e,n);return[await Ot.Bb.nonMaxSuppressionAsync(r,a,o,s,i)]}case"Where":{const r=zt.a(Object(l.d)("condition",t,e,n),"bool"),a=[await Vt.a(r)];return r.dispose(),a}case"ListDiff":return qt.a(Object(l.d)("x",t,e,n),Object(l.d)("y",t,e,n));default:throw TypeError(`Node type ${t.op} is not implemented`)}})(t,e,n);case"evaluation":return u.tidy(()=>((t,e,n)=>{switch(t.op){case"TopKV2":{const r=Object(l.d)("x",t,e,n),a=Object(l.d)("k",t,e,n),o=Object(l.d)("sorted",t,e,n),s=Ht.a(r,a,o);return[s.values,s.indices]}case"Unique":{const r=Object(l.d)("x",t,e,n),a=Wt.a(r);return[a.values,a.indices]}case"UniqueV2":{const r=Object(l.d)("x",t,e,n),a=Object(l.d)("axis",t,e,n),o=Wt.a(r,a);return[o.values,o.indices]}default:throw TypeError(`Node type ${t.op} is not implemented`)}})(t,e,n));case"image":return u.tidy(()=>((t,e,n)=>{switch(t.op){case"ResizeBilinear":{const r=Object(l.d)("images",t,e,n),a=Object(l.d)("size",t,e,n),o=Object(l.d)("alignCorners",t,e,n);return[Ot.Bb.resizeBilinear(r,[a[0],a[1]],o)]}case"ResizeNearestNeighbor":{const r=Object(l.d)("images",t,e,n),a=Object(l.d)("size",t,e,n),o=Object(l.d)("alignCorners",t,e,n);return[Ot.Bb.resizeNearestNeighbor(r,[a[0],a[1]],o)]}case"CropAndResize":{const r=Object(l.d)("image",t,e,n),a=Object(l.d)("boxes",t,e,n),o=Object(l.d)("boxInd",t,e,n),s=Object(l.d)("cropSize",t,e,n),i=Object(l.d)("method",t,e,n),c=Object(l.d)("extrapolationValue",t,e,n);return[Ot.Bb.cropAndResize(r,a,o,s,i,c)]}default:throw TypeError(`Node type ${t.op} is not implemented`)}})(t,e,n));case"graph":return u.tidy(()=>((t,e,n)=>{switch(t.op){case"Const":return e[t.name];case"PlaceholderWithDefault":const r=Object(l.d)("default",t,e,n);return[Object(l.e)(t.name,e,n)||r];case"Placeholder":return[Object(l.e)(t.name,e,n)];case"Identity":case"StopGradient":case"FakeQuantWithMinMaxVars":{const r=Object(l.d)("x",t,e,n);return[Object(l.a)(r)]}case"IdentityN":return Object(l.d)("x",t,e,n).map(t=>Object(l.a)(t));case"Snapshot":const a=Object(l.d)("x",t,e,n);return[Object(l.a)(a)];case"Shape":return[Gt.a(Object(l.d)("x",t,e,n).shape,"int32")];case"ShapeN":return Object(l.d)("x",t,e,n).map(t=>Gt.a(t.shape));case"Size":return[Kt.a(Object(l.d)("x",t,e,n).size,"int32")];case"Rank":return[Kt.a(Object(l.d)("x",t,e,n).rank,"int32")];case"NoOp":return[Kt.a(1)];case"Print":const o=Object(l.d)("x",t,e,n),s=Object(l.d)("data",t,e,n),i=Object(l.d)("message",t,e,n),c=Object(l.d)("summarize",t,e,n);console.warn("The graph has a tf.print() operation,usually used for debugging, which slows down performance."),console.log(i);for(let t=0;t<s.length;t++)console.log(Array.prototype.slice.call(s[t].dataSync()).slice(0,c));return[o];default:throw TypeError(`Node type ${t.op} is not implemented`)}})(t,e,n));case"logical":return u.tidy(()=>((t,e,n)=>{switch(t.op){case"Equal":return[Jt.a(Object(l.d)("a",t,e,n),Object(l.d)("b",t,e,n))];case"NotEqual":return[Xt.a(Object(l.d)("a",t,e,n),Object(l.d)("b",t,e,n))];case"Greater":return[Qt.a(Object(l.d)("a",t,e,n),Object(l.d)("b",t,e,n))];case"GreaterEqual":return[Zt.a(Object(l.d)("a",t,e,n),Object(l.d)("b",t,e,n))];case"Less":return[te.a(Object(l.d)("a",t,e,n),Object(l.d)("b",t,e,n))];case"LessEqual":return[ee.a(Object(l.d)("a",t,e,n),Object(l.d)("b",t,e,n))];case"LogicalAnd":return[ne.a(Object(l.d)("a",t,e,n),Object(l.d)("b",t,e,n))];case"LogicalNot":return[re.a(Object(l.d)("a",t,e,n))];case"LogicalOr":return[ae.a(Object(l.d)("a",t,e,n),Object(l.d)("b",t,e,n))];case"Select":case"SelectV2":return[oe.a(Object(l.d)("condition",t,e,n),Object(l.d)("a",t,e,n),Object(l.d)("b",t,e,n))];default:throw TypeError(`Node type ${t.op} is not implemented`)}})(t,e,n));case"matrices":return u.tidy(()=>((t,e,n)=>{switch(t.op){case"BatchMatMul":case"BatchMatMulV2":case"MatMul":return[se.a(Object(l.d)("a",t,e,n),Object(l.d)("b",t,e,n),Object(l.d)("transposeA",t,e,n),Object(l.d)("transposeB",t,e,n))];case"Transpose":return[ie.a(Object(l.d)("x",t,e,n),Object(l.d)("perm",t,e,n))];case"_FusedMatMul":const[r,a]=Object(l.d)("fusedOps",t,e,n),o="biasadd"===r,s="prelu"===a,i=Object(l.d)("numArgs",t,e,n);if(o){if(s&&2!==i)throw new Error("Fused MatMul with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!s&&1!==i)throw new Error("Fused MatMul with BiasAdd must have one extra argument: bias.")}const[c,u]=Object(l.d)("args",t,e,n);return[Ot.sb.matMul({a:Object(l.d)("a",t,e,n),b:Object(l.d)("b",t,e,n),transposeA:Object(l.d)("transposeA",t,e,n),transposeB:Object(l.d)("transposeB",t,e,n),bias:c,activation:a,preluActivationWeights:u})];default:throw TypeError(`Node type ${t.op} is not implemented`)}})(t,e,n));case"normalization":return u.tidy(()=>((t,e,n)=>{switch(t.op){case"FusedBatchNorm":case"FusedBatchNormV2":case"FusedBatchNormV3":return[ce.a(Object(l.d)("x",t,e,n),Object(l.d)("mean",t,e,n),Object(l.d)("variance",t,e,n),Object(l.d)("offset",t,e,n),Object(l.d)("scale",t,e,n),Object(l.d)("epsilon",t,e,n))];case"LRN":return[ue.a(Object(l.d)("x",t,e,n),Object(l.d)("radius",t,e,n),Object(l.d)("bias",t,e,n),Object(l.d)("alpha",t,e,n),Object(l.d)("beta",t,e,n))];case"Softmax":return[de.a(Object(l.d)("x",t,e,n))];case"LogSoftmax":return[le.a(Object(l.d)("x",t,e,n))];case"SparseToDense":return[pe.a(Object(l.d)("sparseIndices",t,e,n),Object(l.d)("outputShape",t,e,n),Object(l.d)("sparseValues",t,e,n),Object(l.d)("defaultValue",t,e,n))];default:throw TypeError(`Node type ${t.op} is not implemented`)}})(t,e,n));case"reduction":return u.tidy(()=>((t,e,n)=>{switch(t.op){case"Max":{const r=Object(l.d)("axis",t,e,n),a=Object(l.d)("keepDims",t,e,n);return[fe.a(Object(l.d)("x",t,e,n),r,a)]}case"Mean":{const r=Object(l.d)("axis",t,e,n),a=Object(l.d)("keepDims",t,e,n);return[he.a(Object(l.d)("x",t,e,n),r,a)]}case"Min":{const r=Object(l.d)("axis",t,e,n),a=Object(l.d)("keepDims",t,e,n);return[be.a(Object(l.d)("x",t,e,n),r,a)]}case"Sum":{const r=Object(l.d)("axis",t,e,n),a=Object(l.d)("keepDims",t,e,n);return[me.a(Object(l.d)("x",t,e,n),r,a)]}case"All":{const r=Object(l.d)("axis",t,e,n),a=Object(l.d)("keepDims",t,e,n);return[ge.a(Object(l.d)("x",t,e,n),r,a)]}case"Any":{const r=Object(l.d)("axis",t,e,n),a=Object(l.d)("keepDims",t,e,n);return[ye.a(Object(l.d)("x",t,e,n),r,a)]}case"ArgMax":{const r=Object(l.d)("axis",t,e,n);return[Oe.a(Object(l.d)("x",t,e,n),r)]}case"ArgMin":{const r=Object(l.d)("axis",t,e,n);return[je.a(Object(l.d)("x",t,e,n),r)]}case"Prod":{const r=Object(l.d)("axis",t,e,n),a=Object(l.d)("keepDims",t,e,n);return[dt.a(Object(l.d)("x",t,e,n),r,a)]}case"Cumsum":{const r=Object(l.d)("axis",t,e,n),a=Object(l.d)("exclusive",t,e,n),o=Object(l.d)("reverse",t,e,n);return[ve.a(Object(l.d)("x",t,e,n),r,a,o)]}default:throw TypeError(`Node type ${t.op} is not implemented`)}})(t,e,n));case"slice_join":return u.tidy(()=>((t,e,n)=>{switch(t.op){case"ConcatV2":case"Concat":{const r=Object(l.d)("n",t,e,n),a=Object(l.d)("axis",t,e,n);let o=Object(l.d)("tensors",t,e,n);return o=o.slice(0,r),[we.a(o,a)]}case"GatherV2":case"Gather":{const r=Object(l.d)("axis",t,e,n),a=Object(l.d)("x",t,e,n),o=Object(l.d)("indices",t,e,n);return[xe.a(a,zt.a(o,"int32"),r)]}case"ReverseV2":case"Reverse":{const r=Object(l.d)("axis",t,e,n),a=Object(l.d)("x",t,e,n);return[ke.a(a,r)]}case"Slice":{const r=Object(l.d)("begin",t,e,n),a=Object(l.d)("size",t,e,n);return[Ne.a(Object(l.d)("x",t,e,n),r,a)]}case"StridedSlice":{const r=Object(l.d)("begin",t,e,n),a=Object(l.d)("end",t,e,n),o=Object(l.d)("strides",t,e,n),s=Object(l.d)("beginMask",t,e,n),i=Object(l.d)("endMask",t,e,n),c=Object(l.d)("ellipsisMask",t,e,n),u=Object(l.d)("newAxisMask",t,e,n),d=Object(l.d)("shrinkAxisMask",t,e,n),p=Object(l.d)("x",t,e,n);return[Se.a(p,r,a,o,s,i,c,u,d)]}case"Pack":return Object(u.tidy)(()=>{const r=Object(l.d)("axis",t,e,n),a=Object(l.d)("tensors",t,e,n),o=a[0].shape,s=Ee.a(a[0]).shape,i=a.map(t=>{const e=u.util.arraysEqual(t.shape,o);if(!e&&!u.util.arraysEqual(Ee.a(t).shape,s))throw new Error("the input tensors shape does not match");return e?t:Te.a(t,o)});return[Ie.a(i,r)]});case"Unpack":{const r=Object(l.d)("axis",t,e,n),a=Object(l.d)("tensor",t,e,n);return Ae.a(a,r)}case"Tile":{const r=Object(l.d)("reps",t,e,n);return[_e.a(Object(l.d)("x",t,e,n),r)]}case"Split":case"SplitV":{const r=Object(l.d)("axis",t,e,n),a=Object(l.d)("numOrSizeSplits",t,e,n),o=Object(l.d)("x",t,e,n);return De.a(o,a,r)}case"ScatterNd":{const r=Object(l.d)("indices",t,e,n),a=Object(l.d)("values",t,e,n),o=Object(l.d)("shape",t,e,n);return[Me.a(r,a,o)]}case"GatherNd":{const r=Object(l.d)("x",t,e,n),a=Object(l.d)("indices",t,e,n);return[Fe.a(r,a)]}case"SparseToDense":{const r=Object(l.d)("sparseIndices",t,e,n),a=Object(l.d)("outputShape",t,e,n),o=Object(l.d)("sparseValues",t,e,n),s=Object(l.d)("defaultValue",t,e,n);return[pe.a(r,o,a,o.dtype===s.dtype?s:zt.a(s,o.dtype))]}default:throw TypeError(`Node type ${t.op} is not implemented`)}})(t,e,n));case"spectral":return u.tidy(()=>((t,e,n)=>{switch(t.op){case"FFT":return[$e.a(Object(l.d)("x",t,e,n))];case"IFFT":return[Re.a(Object(l.d)("x",t,e,n))];case"RFFT":return[Pe.a(Object(l.d)("x",t,e,n))];case"IRFFT":return[Ce.a(Object(l.d)("x",t,e,n))];default:throw TypeError(`Node type ${t.op} is not implemented`)}})(t,e,n));case"transformation":return u.tidy(()=>((t,e,n)=>{switch(t.op){case"Cast":return[zt.a(Object(l.d)("x",t,e,n),Object(l.d)("dtype",t,e,n))];case"ExpandDims":{const r=Object(l.d)("axis",t,e,n);return[Be.a(Object(l.d)("x",t,e,n),r)]}case"Squeeze":{const r=Object(l.d)("axis",t,e,n);return[Ee.a(Object(l.d)("x",t,e,n),r)]}case"Reshape":return[Te.a(Object(l.d)("x",t,e,n),Object(l.d)("shape",t,e,n))];case"MirrorPad":return[Le.a(Object(l.d)("x",t,e,n),Object(l.d)("padding",t,e,n),Object(l.d)("mode",t,e,n))];case"PadV2":case"Pad":return[ze.a(Object(l.d)("x",t,e,n),Object(l.d)("padding",t,e,n),Object(l.d)("constantValue",t,e,n))];case"SpaceToBatchND":{const r=Object(l.d)("blockShape",t,e,n),a=Object(l.d)("paddings",t,e,n);return[Ve.a(Object(l.d)("x",t,e,n),r,a)]}case"BatchToSpaceND":{const r=Object(l.d)("blockShape",t,e,n),a=Object(l.d)("crops",t,e,n);return[qe.a(Object(l.d)("x",t,e,n),r,a)]}case"DepthToSpace":{const r=Object(l.d)("blockSize",t,e,n),a=Object(l.d)("dataFormat",t,e,n).toUpperCase();return[Ue.a(Object(l.d)("x",t,e,n),r,a)]}case"BroadcastTo":return[He.a(Object(l.d)("x",t,e,n),Object(l.d)("shape",t,e,n))];default:throw TypeError(`Node type ${t.op} is not implemented`)}})(t,e,n));case"hash_table":return(async(t,e,n,r)=>{switch(t.op){case"HashTable":case"HashTableV2":{const a=Object(l.d)("keyDType",t,e,n),o=Object(l.d)("valueDType",t,e,n),s=new Yt(a,o);return r.addHashTable(t.name,s),[s.handle]}case"LookupTableImport":case"LookupTableImportV2":{const a=Object(l.d)("tableHandle",t,e,n,r),o=Object(l.d)("keys",t,e,n),s=Object(l.d)("values",t,e,n),i=r.getHashTableById(a.id);return[await i.import(o,s)]}case"LookupTableFind":case"LookupTableFindV2":{const a=Object(l.d)("tableHandle",t,e,n,r),o=Object(l.d)("keys",t,e,n),s=Object(l.d)("defaultValue",t,e,n),i=r.getHashTableById(a.id);return[await i.find(o,s)]}default:throw TypeError(`Node type ${t.op} is not implemented`)}})(t,e,n,r);case"custom":const a=Object(f.a)(t.op);if(a&&a.customExecutor)return a.customExecutor(new p(t,e,n));throw TypeError(`Custom op ${t.op} is not registered.`);default:throw TypeError(`Unknown op '${t.op}'. File an issue at https://github.com/tensorflow/tfjs/issues so we can add it, or register a custom execution with tf.registerOp()`)}})(t,e,n);return u.util.isPromise(a)?a.then(t=>[].concat(t)):[].concat(a)}class Ge{constructor(t={},e={},n={},r={}){this.weightMap=t,this.tensorArrayMap=e,this.tensorListMap=n,this.functionMap=r,this.rootContext={id:0,frameName:"",iterationId:0},this.contexts=[this.rootContext],this.lastId=0,this.generateCurrentContextIds()}newFrame(t,e){return{id:t,frameName:e,iterationId:0}}set currentContext(t){this.contexts!==t&&(this.contexts=t,this.generateCurrentContextIds())}get currentContext(){return this.contexts}get currentContextId(){return this._currentContextIds[0]}get currentContextIds(){return this._currentContextIds}generateCurrentContextIds(){const t=[];for(let e=0;e<this.contexts.length-1;e++){const n=this.contexts.slice(0,this.contexts.length-e);t.push(this.contextIdforContexts(n))}t.push(""),this._currentContextIds=t}contextIdforContexts(t){return t?t.map(t=>0===t.id&&0===t.iterationId?"":`${t.frameName}-${t.iterationId}`).join("/"):""}enterFrame(t){this.contexts&&(this.lastId++,this.contexts=this.contexts.slice(),this.contexts.push(this.newFrame(this.lastId,t)),this._currentContextIds.unshift(this.contextIdforContexts(this.contexts)))}exitFrame(){if(!(this.contexts&&this.contexts.length>1))throw new Error("Cannot exit frame, the context is empty");this.contexts=this.contexts.slice(),this.contexts.splice(-1),this.currentContextIds.shift()}nextIteration(){if(!(this.contexts&&this.contexts.length>0))throw new Error("Cannot increase frame iteration, the context is empty");{this.contexts=this.contexts.slice(),this.lastId++;const t=Object.assign({},this.contexts[this.contexts.length-1]);t.iterationId+=1,t.id=this.lastId,this.contexts.splice(-1,1,t),this._currentContextIds.splice(0,1,this.contextIdforContexts(this.contexts))}}getWeight(t){return this.weightMap[t]}addTensorArray(t){this.tensorArrayMap[t.id]=t}getTensorArray(t){return this.tensorArrayMap[t]}addTensorList(t){this.tensorListMap[t.id]=t}getTensorList(t){return this.tensorListMap[t]}dispose(t){for(const e in this.tensorArrayMap)this.tensorArrayMap[e].clearAndClose(t);for(const e in this.tensorListMap)this.tensorListMap[e].clearAndClose(t)}}
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ke(t,e,n,r){const a=new Set,o=[];let s=null,i=null;const c=new Set,u=Object.keys(t).map(t=>Object(l.g)(t)[0]);let d=[];null!=r&&(d=r.map(t=>Object(l.g)(t.name)[0]));const p=[...e];for(;p.length>0;){const t=p.pop();(Qe(t)||Ze(t)||tn(t))&&null==s&&(s=t,i=s.children.map(t=>t.name).filter(t=>a.has(t))),a.add(t.name),null==n[t.name]&&(-1===u.indexOf(t.name)&&-1===d.indexOf(t.name)&&(0!==t.inputs.length?t.inputs.forEach(t=>{c.has(t.name)||(c.add(t.name),p.push(t))}):o.push(t.name)))}return{inputs:t,outputs:e,usedNodes:a,missingInputs:o,dynamicNode:s,syncInputs:i}}const Ye=["Switch","Merge","Enter","Exit","NextIteration","StatelessIf","StatelessWhile","if","While"],Je=["NonMaxSuppressionV2","NonMaxSuppressionV3","NonMaxSuppressionV5","Where"],Xe=["HashTable","HashTableV2","LookupTableImport","LookupTableImportV2","LookupTableFind","LookupTableFindV2"];function Qe(t){return Ye.indexOf(t.op)>=0}function Ze(t){return Je.indexOf(t.op)>=0}function tn(t){return Xe.indexOf(t.op)>=0}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class en{constructor(t,e){this.graph=t,this.parent=e,this.compiledMap=new Map,this._weightMap={},this.SEPERATOR=",",this._functions={},this._functionExecutorMap={},this._outputs=t.outputs,this._inputs=t.inputs,this._initNodes=t.initNodes,this._signature=t.signature,this._functions=t.functions,null!=t.functions&&Object.keys(t.functions).forEach(e=>{this._functionExecutorMap[e]=new en(t.functions[e],this)})}get weightIds(){return this.parent?this.parent.weightIds:this._weightIds}get functionExecutorMap(){return this.parent?this.parent.functionExecutorMap:this._functionExecutorMap}get weightMap(){return this.parent?this.parent.weightMap:this._weightMap}set weightMap(t){const e=Object.keys(t).map(e=>t[e].map(t=>t.id));this._weightIds=[].concat(...e),this._weightMap=t}set resourceManager(t){this._resourceManager=t}get inputs(){return this._inputs.map(t=>({name:t.name,shape:t.attrParams.shape?t.attrParams.shape.value:void 0,dtype:t.attrParams.dtype?t.attrParams.dtype.value:void 0}))}get outputs(){return this._outputs.map(t=>({name:t.name,shape:t.attrParams.shape?t.attrParams.shape.value:void 0,dtype:t.attrParams.dtype?t.attrParams.dtype.value:void 0}))}get inputNodes(){return this._inputs.map(t=>t.signatureKey||t.name)}get outputNodes(){return this._outputs.map(t=>{const e=t.signatureKey||t.name;return t.defaultOutput?`${e}:${t.defaultOutput}`:e})}get functions(){return Object.keys(this._functions).reduce((t,e)=>(t[e]=this._functions[e].signature,t),{})}getCompilationKey(t,e){const n=t.map(t=>t.name).sort(),r=e.map(t=>t.name).sort();return n.join(this.SEPERATOR)+"--"+r.join(this.SEPERATOR)}compile(t,e){const n=Ke(t,e,this.weightMap,this._initNodes),{missingInputs:r,dynamicNode:a,syncInputs:o}=n;if(null!=a)throw new Error(`This execution contains the node '${a.name}', which has the dynamic op '${a.op}'. Please use model.executeAsync() instead. Alternatively, to avoid the dynamic ops, specify the inputs [${o}]`);if(r.length>0){const n=e.map(t=>t.name),a=Object.keys(t);throw new Error(`Cannot compute the outputs [${n}] from the provided inputs [${a}]. Missing the following inputs: [${r}]`)}return function(t,e,n){const{usedNodes:r,inputs:a}=n,o=[],s=Object.keys(a).map(t=>Object(l.g)(t)[0]).map(e=>t.nodes[e]),i=t.initNodes;s.forEach(t=>{r.has(t.name)&&o.push(t)}),t.weights.forEach(t=>{r.has(t.name)&&o.push(t)}),null!=i&&i.forEach(t=>{r.has(t.name)&&o.push(t)});const c=new Set,u=[];for(;o.length>0;){const t=o.pop();c.add(t.name),e[t.name]||u.push(t),t.children.forEach(t=>{!c.has(t.name)&&r.has(t.name)&&t.inputs.every(t=>c.has(t.name))&&o.push(t)})}return u}(this.graph,this.weightMap,n)}execute(t,e){t=this.mapInputs(t);const n=Object.keys(t).sort();this.checkInputs(t),this.checkInputShapeAndType(t),e=this.mapOutputs(e),this.checkOutputs(e);const r=n.map(t=>this.graph.nodes[Object(l.g)(t)[0]]),a=e.map(t=>Object(l.g)(t)[0]);let o=a.map(t=>this.graph.nodes[t]);0===o.length&&(o=this._outputs);const s=this.getCompilationKey(r,o);let i=this.compiledMap.get(s);null==i&&(i=this.compile(t,o),this.compiledMap.set(s,i));const c={},d={};return Object(u.tidy)(()=>{const n=new Ge(this.weightMap,c,d,this.functionExecutorMap),r=Object.assign({},this.weightMap);Object.keys(t).forEach(e=>{const[n,a]=Object(l.g)(e),o=[];o[a]=t[e],r[n]=o});const o=this.getFrozenTensorIds(r),s={};for(let t=0;t<i.length;t++){const e=i[t];if(!r[e.name]){const t=We(e,r,n,this._resourceManager);if(u.util.isPromise(t))throw new Error(`The execution of the op '${e.op}' returned a promise. Please use model.executeAsync() instead.`);r[e.name]=t,this.checkTensorForDisposal(e.name,e,r,n,o,a,s)}}return null==this.parent&&n.dispose(o),e.map(t=>Object(l.e)(t,r,n))})}getFrozenTensorIds(t){const e=[].concat.apply([],Object.keys(t).map(e=>t[e]).map(t=>t.map(t=>t.id)));return new Set(e)}checkTensorForDisposal(t,e,n,r,a,o,s){"control"!==e.category&&-1===o.indexOf(t)&&(n[t].forEach(t=>{null!=t&&(s[t.id]=(s[t.id]||0)+e.children.length)}),e.inputs.forEach(t=>{if("control"!==t.category){const e=Object(l.f)(t.name,n,r);null!=e&&e.forEach(t=>{if(t&&!a.has(t.id)){const e=s[t.id];1===e?(t.dispose(),delete s[t.id]):null!=e&&s[t.id]--}})}}))}async executeAsync(t,e){return this._executeAsync(t,e)}async _executeAsync(t,e,n=!1,r={},a={}){n||(t=this.mapInputs(t),this.checkInputs(t),this.checkInputShapeAndType(t),e=this.mapOutputs(e),this.checkOutputs(e));const o=new Ge(this.weightMap,r,a,this.functionExecutorMap),s=await this.executeWithControlFlow(t,o,e,n),i=e.map(t=>Object(l.e)(t,s,o)),c=i.map(t=>t.id),u=Object.keys(t).map(e=>t[e].id),d=new Set([...c,...u,...this.weightIds]);return Object.keys(s).forEach(t=>{s[t].forEach(t=>{!t||t.isDisposed||d.has(t.id)||t.dispose()})}),null==this.parent&&o.dispose(d),i}async executeFunctionAsync(t,e,n){const r=t.reduce((t,e,n)=>(t[this.inputs[n].name]=e,t),{});return this._executeAsync(r,this.outputNodes,!0,e,n)}async executeWithControlFlow(t,e,n,r){const a=Object.keys(t),o=a.map(t=>this.graph.nodes[Object(l.g)(t)[0]]),s=n.map(t=>Object(l.g)(t)[0]);let i=s.map(t=>this.graph.nodes[t]);0===i.length&&(i=this._outputs);const{usedNodes:c,missingInputs:u,dynamicNode:d,syncInputs:p}=Ke(t,i,this.weightMap,this._initNodes),f=[...o,...this.graph.weights,...this._initNodes||[]].map(t=>({node:t,contexts:e.currentContext})),h=Object.assign({},this.weightMap);Object.keys(t).forEach(e=>{const[n,r]=Object(l.g)(e),a=[];a[r]=t[e],h[n]=a});const b={},m=this.getFrozenTensorIds(h),g={};for(;f.length>0;){const t=this.processStack(o,f,e,h,g,m,s,b,c);await Promise.all(t)}null!=d||r||console.warn("This model execution did not contain any nodes with control flow or dynamic output shapes. You can use model.execute() instead.");const y=i.filter(t=>!Qe(t)&&!Object(l.e)(t.name,h,e)).map(t=>t.name);if(y.length>0){let t="";throw null!=d&&(t=`Alternatively, to avoid the dynamic ops, use model.execute() and specify the inputs [${p}]`),new Error(`Cannot compute the outputs [${y}] from the provided inputs [${a}]. Consider providing the following inputs: [${u}]. ${t}`)}return h}processStack(t,e,n,r,a,o,s,i,c){const d=[];for(;e.length>0;){const t=e.pop();n.currentContext=t.contexts;let p="";if("Enter"===t.node.op&&Object(l.d)("isConstant",t.node,r,n)&&([p]=Object(l.b)(t.node.name,n)),null==r[t.node.name]){const f=We(t.node,r,n,this._resourceManager);p||([p]=Object(l.b)(t.node.name,n));const h=n.currentContext;u.util.isPromise(f)?d.push(f.then(u=>(r[p]=u,n.currentContext=h,this.checkTensorForDisposal(p,t.node,r,n,o,s,i),this.processChildNodes(t.node,e,n,r,a,c),u))):(r[p]=f,this.checkTensorForDisposal(p,t.node,r,n,o,s,i),this.processChildNodes(t.node,e,n,r,a,c))}else this.processChildNodes(t.node,e,n,r,a,c)}return d}processChildNodes(t,e,n,r,a,o){t.children.forEach(t=>{const[s]=Object(l.b)(t.name,n);!a[s]&&o.has(t.name)&&("Merge"===t.op?t.inputNames.some(t=>!!Object(l.e)(t,r,n))&&(a[s]=!0,e.push({contexts:n.currentContext,node:t})):t.inputNames.every(t=>!!Object(l.e)(t,r,n))&&(a[s]=!0,e.push({contexts:n.currentContext,node:t})))})}dispose(){Object.keys(this.weightMap).forEach(t=>this.weightMap[t].forEach(t=>t.dispose()))}checkInputShapeAndType(t){Object.keys(t).forEach(e=>{const n=t[e],[r]=Object(l.g)(e),a=this.graph.nodes[r];if(a.attrParams.shape&&a.attrParams.shape.value){const t=a.attrParams.shape.value,e=t.length===n.shape.length&&n.shape.every((e,n)=>-1===t[n]||t[n]===e);u.util.assert(e,()=>`The shape of dict['${a.name}'] provided in model.execute(dict) must be [${t}], but was [${n.shape}]`)}a.attrParams.dtype&&a.attrParams.dtype.value&&u.util.assert(n.dtype===a.attrParams.dtype.value,()=>`The dtype of dict['${a.name}'] provided in model.execute(dict) must be ${a.attrParams.dtype.value}, but was ${n.dtype}`)})}mapInputs(t){const e={};for(const n in t)if(null!=this._signature&&null!=this._signature.inputs&&null!=this._signature.inputs[n]){e[this._signature.inputs[n].name]=t[n]}else e[n]=t[n];return e}checkInputs(t){const e=Object.keys(t).filter(t=>{const[e]=Object(l.g)(t);return null==this.graph.nodes[e]});if(e.length>0)throw new Error(`The dict provided in model.execute(dict) has keys: [${e}] that are not part of graph`)}mapOutputs(t){return t.map(t=>{if(null!=this._signature&&null!=this._signature.outputs&&null!=this._signature.outputs[t]){return this._signature.outputs[t].name}return t},{})}checkOutputs(t){t.forEach(t=>{const[e]=Object(l.g)(t);if(!this.graph.nodes[e])throw new Error(`The output '${t}' is not found in the graph`)})}}class nn{constructor(t={},e={}){this.hashTableNameToHandle=t,this.hashTableMap=e}addHashTable(t,e){this.hashTableNameToHandle[t]=e.handle,this.hashTableMap[e.id]=e}getHashTableHandleByName(t){return this.hashTableNameToHandle[t]}getHashTableById(t){return this.hashTableMap[t]}dispose(){for(const t in this.hashTableMap)this.hashTableMap[t].clearAndClose(),delete this.hashTableMap[t];for(const t in this.hashTableNameToHandle)this.hashTableNameToHandle[t].dispose(),delete this.hashTableNameToHandle[t]}}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class rn{constructor(t,e={}){this.modelUrl=t,this.loadOptions=e,this.version="n/a",null==e&&(this.loadOptions={}),this.resourceManager=new nn}get modelVersion(){return this.version}get inputNodes(){return this.executor.inputNodes}get outputNodes(){return this.executor.outputNodes}get inputs(){return this.executor.inputs}get outputs(){return this.executor.outputs}get weights(){return this.executor.weightMap}findIOHandler(){const t=this.modelUrl;if(null!=t.load)this.handler=t;else if(null!=this.loadOptions.requestInit)this.handler=u.io.browserHTTPRequest(t,this.loadOptions);else{const e=u.io.getLoadHandlers(t,this.loadOptions);if(0===e.length)e.push(u.io.browserHTTPRequest(t,this.loadOptions));else if(e.length>1)throw new Error(`Found more than one (${e.length}) load handlers for URL '${[t]}'`);this.handler=e[0]}}async load(){if(this.findIOHandler(),null==this.handler.load)throw new Error("Cannot proceed with model loading because the IOHandler provided does not have the `load` method implemented.");const t=await this.handler.load();return this.loadSync(t)}loadSync(t){this.artifacts=t;const e=this.artifacts.modelTopology;let n={};null!=this.artifacts.userDefinedMetadata&&(n=this.artifacts.userDefinedMetadata.signature),this.version=`${e.versions.producer}.${e.versions.minConsumer}`;const r=u.io.decodeWeights(this.artifacts.weightData,this.artifacts.weightSpecs);if(this.executor=new en(d.a.Instance.transformGraph(e,n)),this.executor.weightMap=this.convertTensorMapToTensorsMap(r),this.executor.resourceManager=this.resourceManager,null!=t.modelInitializer){const e=d.a.Instance.transformGraph(t.modelInitializer);this.initializer=new en(e),this.initializer.weightMap=this.executor.weightMap,this.initializer.resourceManager=this.resourceManager,this.initializer.executeAsync({},[])}return!0}async save(t,e){if("string"==typeof t){const e=u.io.getSaveHandlers(t);if(0===e.length)throw new Error(`Cannot find any save handlers for URL '${t}'`);if(e.length>1)throw new Error(`Found more than one (${e.length}) save handlers for URL '${t}'`);t=e[0]}if(null==t.save)throw new Error("GraphModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined.");return t.save(this.artifacts)}predict(t,e){return this.execute(t,this.outputNodes)}normalizeInputs(t){if(!(t instanceof u.Tensor||Array.isArray(t)))return t;if((t=Array.isArray(t)?t:[t]).length!==this.inputNodes.length)throw new Error(`Input tensor count mismatch,the graph model has ${this.inputNodes.length} placeholders, while there are ${t.length} input tensors.`);return this.inputNodes.reduce((e,n,r)=>(e[n]=t[r],e),{})}normalizeOutputs(t){return t=t||this.outputNodes,Array.isArray(t)?t:[t]}execute(t,e){t=this.normalizeInputs(t),e=this.normalizeOutputs(e);const n=this.executor.execute(t,e);return n.length>1?n:n[0]}async executeAsync(t,e){t=this.normalizeInputs(t),e=this.normalizeOutputs(e);const n=await this.executor.executeAsync(t,e);return n.length>1?n:n[0]}convertTensorMapToTensorsMap(t){return Object.keys(t).reduce((e,n)=>(e[n]=[t[n]],e),{})}dispose(){this.executor.dispose(),this.initializer&&this.initializer.dispose(),this.resourceManager.dispose()}}async function an(t,e={}){if(null==t)throw new Error("modelUrl in loadGraphModel() cannot be null. Please provide a url or an IOHandler that loads the model");null==e&&(e={}),e.fromTFHub&&null==t.load&&(t.endsWith("/")||(t+="/"),t+="model.json?tfjs-format=file");const n=new rn(t,e);return await n.load(),n}
/** @license See the LICENSE file. */
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
    * @license
    * Copyright 2021 Google LLC. All Rights Reserved.
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    * http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    * =============================================================================
    */
var on=function(t,e){return(on=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};function sn(t,e){function n(){this.constructor=t}on(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var cn=function(){return(cn=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}).apply(this,arguments)};function un(t,e,n,r){return new(n||(n=Promise))((function(a,o){function s(t){try{c(r.next(t))}catch(t){o(t)}}function i(t){try{c(r.throw(t))}catch(t){o(t)}}function c(t){t.done?a(t.value):new n((function(e){e(t.value)})).then(s,i)}c((r=r.apply(t,e||[])).next())}))}function dn(t,e){var n,r,a,o,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(o){return function(i){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(a=(a=s.trys).length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){s.label=o[1];break}if(6===o[0]&&s.label<a[1]){s.label=a[1],a=o;break}if(a&&s.label<a[2]){s.label=a[2],s.ops.push(o);break}a[2]&&s.ops.pop(),s.trys.pop();continue}o=e.call(t,s)}catch(t){o=[6,t],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,i])}}}function ln(t){var e=t.shape[2],n=Object(u.argMax)(t,2),r=Object(u.reshape)(n,[-1]);return Object(u.oneHot)(r,e)}function pn(t,e){return Object(u.tidy)((function(){return Object(u.cast)(Object(u.greater)(t,Object(u.scalar)(e)),"int32")}))}function fn(t,e){var n=e.shape,r=n[0],a=n[1],o=n[2];return Object(u.tidy)((function(){var n=ln(e),s=Object(u.expandDims)(Object(u.range)(0,o,1,"int32"),1),i=Object(u.cast)(Object(u.matMul)(n,s),"int32"),c=Object(u.reshape)(i,[r,a]),d=Object(u.add)(c,Object(u.scalar)(1,"int32"));return Object(u.sub)(function(t,e){return Object(u.mul)(t,e)}(d,t),Object(u.scalar)(1,"int32"))}))}function hn(t){var e=t.shape,n=e[0],r=e[1],a=e[2];return Object(u.tidy)((function(){var e=ln(t),o=Object(u.expandDims)(Object(u.range)(0,a,1,"int32"),1),s=Object(u.cast)(Object(u.matMul)(e,o),"int32");return Object(u.reshape)(s,[n,r])}))}var bn=function(){function t(t,e){this.model=t,this.outputStride=e;var n=this.model.inputs[0].shape;u.util.assert(-1===n[1]&&-1===n[2],(function(){return"Input shape ["+n[1]+", "+n[2]+"] must both be equal to or -1"}))}return t.prototype.predict=function(t){var e=this;return Object(u.tidy)((function(){var n=e.preprocessInput(Object(u.cast)(t,"float32")),r=Object(u.expandDims)(n,0),a=e.model.predict(r).map((function(t){return Object(u.squeeze)(t,[0])})),o=e.nameOutputResults(a);return{heatmapScores:Object(u.sigmoid)(o.heatmap),offsets:o.offsets,displacementFwd:o.displacementFwd,displacementBwd:o.displacementBwd,segmentation:o.segmentation,partHeatmaps:o.partHeatmaps,longOffsets:o.longOffsets,partOffsets:o.partOffsets}}))},t.prototype.dispose=function(){this.model.dispose()},t}(),mn=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return sn(e,t),e.prototype.preprocessInput=function(t){return Object(u.tidy)((function(){return Object(u.sub)(Object(u.div)(t,127.5),1)}))},e.prototype.nameOutputResults=function(t){return{offsets:t[0],segmentation:t[1],partHeatmaps:t[2],longOffsets:t[3],heatmap:t[4],displacementFwd:t[5],displacementBwd:t[6],partOffsets:t[7]}},e}(bn),gn=["nose","leftEye","rightEye","leftEar","rightEar","leftShoulder","rightShoulder","leftElbow","rightElbow","leftWrist","rightWrist","leftHip","rightHip","leftKnee","rightKnee","leftAnkle","rightAnkle"],yn=gn.length,On=gn.reduce((function(t,e,n){return t[e]=n,t}),{});[["leftHip","leftShoulder"],["leftElbow","leftShoulder"],["leftElbow","leftWrist"],["leftHip","leftKnee"],["leftKnee","leftAnkle"],["rightHip","rightShoulder"],["rightElbow","rightShoulder"],["rightElbow","rightWrist"],["rightHip","rightKnee"],["rightKnee","rightAnkle"],["leftShoulder","rightShoulder"],["leftHip","rightHip"]].map((function(t){var e=t[0],n=t[1];return[On[e],On[n]]}));function jn(t,e,n){var r=t[0],a=t[1],o=e[0],s=e[1],i=n.top,c=n.bottom;return[s/(n.left+n.right+a),o/(i+c+r)]}function vn(t,e,n,r){return{y:r.get(t,e,n),x:r.get(t,e,n+yn)}}function wn(t,e,n){var r=vn(t.heatmapY,t.heatmapX,t.id,n),a=r.y,o=r.x;return{x:t.heatmapX*e+o,y:t.heatmapY*e+a}}function xn(t,e,n){return t<e?e:t>n?n:t}function kn(t,e){return{x:t.x+e.x,y:t.y+e.y}}function Nn(t,e,n){void 0===n&&(n=.3);for(var r=0,a=0,o=0;o<t.length;o++)e.keypoints[o].score>n&&(a+=1,r+=Math.pow(t[o].x-e.keypoints[o].position.x,2)+Math.pow(t[o].y-e.keypoints[o].position.y,2));return 0===a?r=1/0:r/=a,r}function Sn(t,e,n,r,a,o,s){for(var i=s[0],c=s[1],u=n(t),d=u.y*r+u.x,l=a[yn*(2*d)+e],p=a[yn*(2*d+1)+e],f=t.y+l,h=t.x+p,b=0;b<o;b++){f=Math.min(f,i-1);var m=n({x:h=Math.min(h,c-1),y:f}),g=m.y*r+m.x;f+=l=a[yn*(2*g)+e],h+=p=a[yn*(2*g+1)+e]}return{x:h,y:f}}function En(t,e,n,r,a,o,s,i,c,u){for(var d=a[0],l=a[1],p=o[0],f=o[1],h=i[0],b=i[1],m=[],g=function(t){return function(t,e,n,r){var a=e[0],o=e[1],s=n[0],i=n[1],c=Math.round(((a+t.y+1)*i-1)/r);return{x:Math.round(((o+t.x+1)*s-1)/r),y:c}}(t,[d,l],[p,f],c)},y=0;y<r;y++){var O=Sn(t,y,g,s,e,u,[h,b]);m.push(O)}for(var j=-1,v=1/0,w=0;w<n.length;w++){var x=Nn(m,n[w]);x<v&&(j=w,v=x)}return j}function Tn(t,e){var n=t[0],r=t[1];return[Math.round((r-1)/e+1),Math.round((n-1)/e+1)]}function In(t,e,n,r,a,o,s,i,c,d,l){for(var p=s[0],f=s[1],h=t.shape,b=h[0],m=h[1],g=e.shape.slice(0,2),y=g[0],O=g[1],j=Object(u.reshape)(e,[y,O,2,yn]),v=new Float32Array(l*yn*3).fill(0),w=0;w<n.length;w++)for(var x=w*yn*3,k=n[w],N=0;N<yn;N++){var S=k.keypoints[N],E=x+3*N;v[E]=S.score,v[E+1]=S.position.y,v[E+2]=S.position.x}var T=jn([r,a],[p,f],i),I=T[0],A=T[1],_=Object(u.tensor)(v,[l,yn,3]),D=i.top,M=i.left,F={variableNames:["segmentation","longOffsets","poses"],outputShape:[b,m],userCode:"\n    int convertToPositionInOutput(int pos, int pad, float scale, int stride) {\n      return round(((float(pos + pad) + 1.0) * scale - 1.0) / float(stride));\n    }\n\n    float convertToPositionInOutputFloat(\n        int pos, int pad, float scale, int stride) {\n      return ((float(pos + pad) + 1.0) * scale - 1.0) / float(stride);\n    }\n\n    float dist(float x1, float y1, float x2, float y2) {\n      return pow(x1 - x2, 2.0) + pow(y1 - y2, 2.0);\n    }\n\n    float sampleLongOffsets(float h, float w, int d, int k) {\n      float fh = fract(h);\n      float fw = fract(w);\n      int clH = int(ceil(h));\n      int clW = int(ceil(w));\n      int flH = int(floor(h));\n      int flW = int(floor(w));\n      float o11 = getLongOffsets(flH, flW, d, k);\n      float o12 = getLongOffsets(flH, clW, d, k);\n      float o21 = getLongOffsets(clH, flW, d, k);\n      float o22 = getLongOffsets(clH, clW, d, k);\n      float o1 = mix(o11, o12, fw);\n      float o2 = mix(o21, o22, fw);\n      return mix(o1, o2, fh);\n    }\n\n    int findNearestPose(int h, int w) {\n      float prob = getSegmentation(h, w);\n      if (prob < 1.0) {\n        return -1;\n      }\n\n      // Done(Tyler): convert from output space h/w to strided space.\n      float stridedH = convertToPositionInOutputFloat(\n        h, "+D+", "+A+", "+o+");\n      float stridedW = convertToPositionInOutputFloat(\n        w, "+M+", "+I+", "+o+");\n\n      float minDist = 1000000.0;\n      int iMin = -1;\n      for (int i = 0; i < "+l+"; i++) {\n        float curDistSum = 0.0;\n        int numKpt = 0;\n        for (int k = 0; k < "+yn+"; k++) {\n          float dy = sampleLongOffsets(stridedH, stridedW, 0, k);\n          float dx = sampleLongOffsets(stridedH, stridedW, 1, k);\n\n          float y = float(h) + dy;\n          float x = float(w) + dx;\n\n          for (int s = 0; s < "+c+"; s++) {\n            int yRounded = round(min(y, float("+(r-1)+")));\n            int xRounded = round(min(x, float("+(a-1)+")));\n\n            float yStrided = convertToPositionInOutputFloat(\n              yRounded, "+D+", "+A+", "+o+");\n            float xStrided = convertToPositionInOutputFloat(\n              xRounded, "+M+", "+I+", "+o+");\n\n            float dy = sampleLongOffsets(yStrided, xStrided, 0, k);\n            float dx = sampleLongOffsets(yStrided, xStrided, 1, k);\n\n            y = y + dy;\n            x = x + dx;\n          }\n\n          float poseScore = getPoses(i, k, 0);\n          float poseY = getPoses(i, k, 1);\n          float poseX = getPoses(i, k, 2);\n          if (poseScore > "+d+") {\n            numKpt = numKpt + 1;\n            curDistSum = curDistSum + dist(x, y, poseX, poseY);\n          }\n        }\n        if (numKpt > 0 && curDistSum / float(numKpt) < minDist) {\n          minDist = curDistSum / float(numKpt);\n          iMin = i;\n        }\n      }\n      return iMin;\n    }\n\n    void main() {\n        ivec2 coords = getOutputCoords();\n        int nearestPose = findNearestPose(coords[0], coords[1]);\n        setOutput(float(nearestPose));\n      }\n  "};return Object(u.backend)().compileAndRun(F,[t,j,_])}function An(){return"webgl"===Object(u.getBackend)()}function _n(t,e,n,r,a,o,s,i,c,d,l,p){var f=s[0],h=s[1];return void 0===c&&(c=.2),void 0===d&&(d=8),void 0===l&&(l=.3),void 0===p&&(p=10),un(this,void 0,void 0,(function(){var s,b,m,g,y;return dn(this,(function(O){switch(O.label){case 0:return s=n.filter((function(t){return t.score>=c})),An()?(m=Object(u.tidy)((function(){var n=In(t,e,s,r,a,o,[f,h],i,d,l,p),c=Object(u.engine)().makeTensorFromDataId(n.dataId,n.shape,n.dtype);return s.map((function(t,e){return function(t,e){return Object(u.tidy)((function(){return Object(u.cast)(Object(u.equal)(t,Object(u.scalar)(e)),"int32")}))}(c,e)}))})),[4,Promise.all(m.map((function(t){return t.data()})))]):[3,2];case 1:return b=O.sent(),m.forEach((function(t){return t.dispose()})),[3,5];case 2:return[4,t.data()];case 3:return g=O.sent(),[4,e.data()];case 4:y=O.sent(),b=function(t,e,n,r,a,o,s,i,c,u){var d=s[0],l=s[1];void 0===u&&(u=5);for(var p=n.map((function(t){return new Uint8Array(r*a).fill(0)})),f=i.top,h=i.left,b=jn([r,a],[d,l],i),m=b[0],g=b[1],y=Tn([d,l],o)[0],O=0;O<r;O+=1)for(var j=0;j<a;j+=1){var v=O*a+j;if(1===t[v]){var w=En({x:j,y:O},e,n,u,[f,h],[m,g],y,[r,a],o,c);w>=0&&(p[w][v]=1)}}return p}(g,y,s,r,a,o,[f,h],i,d),O.label=5;case 5:return[2,b.map((function(t,e){return{data:t,pose:s[e],width:a,height:r}}))]}}))}))}function Dn(t,e,n,r,a,o,s,i,c,d,l,p,f){var h=i[0],b=i[1];return void 0===d&&(d=.2),void 0===l&&(l=8),void 0===p&&(p=.3),void 0===f&&(f=10),un(this,void 0,void 0,(function(){var i,m,g,y,O,j;return dn(this,(function(v){switch(v.label){case 0:return i=r.filter((function(t){return t.score>=d})),An()?(g=Object(u.tidy)((function(){var r=In(t,e,i,a,o,s,[h,b],c,l,p,f),d=Object(u.engine)().makeTensorFromDataId(r.dataId,r.shape,r.dtype);return i.map((function(t,e){return function(t,e,n){return Object(u.tidy)((function(){return Object(u.sub)(Object(u.mul)(Object(u.cast)(Object(u.equal)(t,Object(u.scalar)(n)),"int32"),Object(u.add)(e,1)),1)}))}(d,n,e)}))})),[4,Promise.all(g.map((function(t){return t.data()})))]):[3,2];case 1:return m=v.sent(),g.forEach((function(t){return t.dispose()})),[3,6];case 2:return[4,t.data()];case 3:return y=v.sent(),[4,e.data()];case 4:return O=v.sent(),[4,n.data()];case 5:j=v.sent(),m=function(t,e,n,r,a,o,s,i,c,u,d){var l=i[0],p=i[1];void 0===d&&(d=5);for(var f=r.map((function(t){return new Int32Array(a*o).fill(-1)})),h=c.top,b=c.left,m=jn([a,o],[l,p],c),g=m[0],y=m[1],O=Tn([l,p],s)[0],j=0;j<a;j+=1)for(var v=0;v<o;v+=1){var w=j*o+v;if(1===t[w]){var x=En({x:v,y:j},e,r,d,[h,b],[g,y],O,[a,o],s,u);x>=0&&(f[x][w]=n[w])}}return f}(y,O,j,i,a,o,s,[h,b],c,l),v.label=6;case 6:return[2,m.map((function(t,e){return{pose:i[e],data:t,height:a,width:o}}))]}}))}))}function Mn(t){return Math.floor(t/2)}var Fn=function(){function t(t,e){this.priorityQueue=new Array(t),this.numberOfElements=-1,this.getElementValue=e}return t.prototype.enqueue=function(t){this.priorityQueue[++this.numberOfElements]=t,this.swim(this.numberOfElements)},t.prototype.dequeue=function(){var t=this.priorityQueue[0];return this.exchange(0,this.numberOfElements--),this.sink(0),this.priorityQueue[this.numberOfElements+1]=null,t},t.prototype.empty=function(){return-1===this.numberOfElements},t.prototype.size=function(){return this.numberOfElements+1},t.prototype.all=function(){return this.priorityQueue.slice(0,this.numberOfElements+1)},t.prototype.max=function(){return this.priorityQueue[0]},t.prototype.swim=function(t){for(;t>0&&this.less(Mn(t),t);)this.exchange(t,Mn(t)),t=Mn(t)},t.prototype.sink=function(t){for(;2*t<=this.numberOfElements;){var e=2*t;if(e<this.numberOfElements&&this.less(e,e+1)&&e++,!this.less(t,e))break;this.exchange(t,e),t=e}},t.prototype.getValueAt=function(t){return this.getElementValue(this.priorityQueue[t])},t.prototype.less=function(t,e){return this.getValueAt(t)<this.getValueAt(e)},t.prototype.exchange=function(t,e){var n=this.priorityQueue[t];this.priorityQueue[t]=this.priorityQueue[e],this.priorityQueue[e]=n},t}();function $n(t,e,n,r,a,o){for(var s=o.shape,i=s[0],c=s[1],u=!0,d=Math.max(n-a,0),l=Math.min(n+a+1,i),p=d;p<l;++p){for(var f=Math.max(r-a,0),h=Math.min(r+a+1,c),b=f;b<h;++b)if(o.get(p,b,t)>e){u=!1;break}if(!u)break}return u}var Rn=[["nose","leftEye"],["leftEye","leftEar"],["nose","rightEye"],["rightEye","rightEar"],["nose","leftShoulder"],["leftShoulder","leftElbow"],["leftElbow","leftWrist"],["leftShoulder","leftHip"],["leftHip","leftKnee"],["leftKnee","leftAnkle"],["nose","rightShoulder"],["rightShoulder","rightElbow"],["rightElbow","rightWrist"],["rightShoulder","rightHip"],["rightHip","rightKnee"],["rightKnee","rightAnkle"]].map((function(t){var e=t[0],n=t[1];return[On[e],On[n]]})),Pn=Rn.map((function(t){return t[1]})),Cn=Rn.map((function(t){return t[0]}));function Bn(t,e,n,r){return{y:xn(Math.round(t.y/e),0,n-1),x:xn(Math.round(t.x/e),0,r-1)}}function Ln(t,e,n,r,a,o,s,i){void 0===i&&(i=2);for(var c=r.shape,u=c[0],d=c[1],l=function(t,e,n){var r=n.shape[2]/2;return{y:n.get(e.y,e.x,t),x:n.get(e.y,e.x,r+t)}}(t,Bn(e.position,o,u,d),s),p=kn(e.position,l),f=0;f<i;f++){var h=Bn(p,o,u,d),b=vn(h.y,h.x,n,a);p=kn({x:h.x*o,y:h.y*o},{x:b.x,y:b.y})}var m=Bn(p,o,u,d),g=r.get(m.y,m.x,n);return{position:p,part:gn[n],score:g}}function zn(t,e,n,r,a,o){var s=e.shape[2],i=Pn.length,c=new Array(s),u=t.part,d=t.score,l=wn(u,r,n);c[u.id]={score:d,part:gn[u.id],position:l};for(var p=i-1;p>=0;--p){var f=Pn[p],h=Cn[p];c[f]&&!c[h]&&(c[h]=Ln(p,c[f],h,e,n,r,o))}for(p=0;p<i;++p)f=Cn[p],h=Pn[p],c[f]&&!c[h]&&(c[h]=Ln(p,c[f],h,e,n,r,a));return c}function Vn(t,e,n,r){var a=n.x,o=n.y;return t.some((function(t){var n=t.keypoints[r].position;return function(t,e,n,r){var a=n-t,o=r-e;return a*a+o*o}(o,a,n.y,n.x)<=e}))}function qn(t,e,n){return n.reduce((function(n,r,a){var o=r.position,s=r.score;return Vn(t,e,o,a)||(n+=s),n}),0)/n.length}function Un(t,e,n,r,a,o,s,i){void 0===s&&(s=.5),void 0===i&&(i=20);for(var c=[],u=function(t,e,n){for(var r=n.shape,a=r[0],o=r[1],s=r[2],i=new Fn(a*o*s,(function(t){return t.score})),c=0;c<a;++c)for(var u=0;u<o;++u)for(var d=0;d<s;++d){var l=n.get(c,u,d);l<t||$n(d,l,c,u,e,n)&&i.enqueue({score:l,part:{heatmapY:c,heatmapX:u,id:d}})}return i}(s,1,t),d=i*i;c.length<o&&!u.empty();){var l=u.dequeue();if(!Vn(c,d,wn(l.part,a,e),l.part.id)){var p=zn(l,t,e,a,n,r),f=qn(c,d,p);c.push({keypoints:p,score:f})}}return c}var Hn,Wn=[-123.15,-115.9,-103.06],Gn=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return sn(e,t),e.prototype.preprocessInput=function(t){return Object(u.add)(t,Wn)},e.prototype.nameOutputResults=function(t){var e=t[0],n=t[1],r=t[2],a=t[3],o=t[4],s=t[5];return{offsets:o,segmentation:t[6],partHeatmaps:s,longOffsets:a,heatmap:r,displacementFwd:n,displacementBwd:e,partOffsets:t[7]}},e}(bn),Kn="https://storage.googleapis.com/tfjs-models/savedmodel/bodypix/resnet50/",Yn="https://storage.googleapis.com/tfjs-models/savedmodel/bodypix/mobilenet/";function Jn(t){if("undefined"!=typeof HTMLCanvasElement&&t instanceof HTMLCanvasElement||"undefined"!=typeof HTMLImageElement&&t instanceof HTMLImageElement)return function(t){if(0!==t.offsetHeight&&0!==t.offsetWidth)return[t.offsetHeight,t.offsetWidth];if(null!=t.height&&null!=t.width)return[t.height,t.width];throw new Error("HTMLImageElement must have height and width attributes set.")}(t);if("undefined"!=typeof ImageData&&t instanceof ImageData)return[t.height,t.width];if("undefined"!=typeof HTMLVideoElement&&t instanceof HTMLVideoElement)return function(t){return t.hasAttribute("height")&&t.hasAttribute("width")?[t.height,t.width]:[t.videoHeight,t.videoWidth]}(t);if(t instanceof u.Tensor)return[t.shape[0],t.shape[1]];throw new Error("error: Unknown input type: "+t+".")}function Xn(t,e){return function(t,e){return(t-1)%e==0}(t,e)?t:Math.floor(t/e)*e+1}var Qn={low:"low",medium:"medium",high:"high",full:"full"},Zn=((Hn={})[Qn.low]=.25,Hn[Qn.medium]=.5,Hn[Qn.high]=.75,Hn[Qn.full]=1,Hn);function tr(t,e,n){var r=n[0],a=n[1],o=function(t){if("string"==typeof t){var e=Zn[t];return u.util.assert("number"==typeof e,(function(){return"string value of inputResolution must be one of "+Object.values(Qn).join(",")+" but was "+t+"."})),e}return u.util.assert("number"==typeof t&&t<=2&&t>=.1,(function(){return"inputResolution must be a string or number between 0.1 and 2, but was "+t})),t}(t);return[Xn(r*o,e),Xn(a*o,e)]}function er(t,e,n,r,a){var o=e[0],s=e[1],i=n[0],c=n[1],d=r[0],l=d[0],p=d[1],f=r[1],h=f[0],b=f[1];return void 0===a&&(a=!1),Object(u.tidy)((function(){var e=u.image.resizeBilinear(t,[i,c],!0);return a&&(e=Object(u.sigmoid)(e)),function(t,e,n){var r=e[0],a=e[1],o=n[0],s=o[0],i=o[1],c=n[1],d=c[0],l=c[1];return Object(u.tidy)((function(){var e=Object(u.expandDims)(t);return Object(u.squeeze)(u.image.cropAndResize(e,[[s/(r+s+i-1),d/(a+d+l-1),(s+r-1)/(r+s+i-1),(d+a-1)/(a+d+l-1)]],[0],[r,a]),[0])}))}(e,[o,s],[[l,p],[h,b]])}))}function nr(t,e){var n=e[0],r=e[1],a=Jn(t),o=a[0],s=a[1],i=r/n,c=[0,0,0,0],d=c[0],l=c[1],p=c[2],f=c[3];return s/o<i?(d=0,l=0,p=Math.round(.5*(i*o-s)),f=Math.round(.5*(i*o-s))):(d=Math.round(.5*(1/i*s-o)),l=Math.round(.5*(1/i*s-o)),p=0,f=0),{resized:Object(u.tidy)((function(){var e=function(t){return t instanceof u.Tensor?t:u.browser.fromPixels(t)}(t);return e=Object(u.pad3d)(e,[[d,l],[p,f],[0,0]]),u.image.resizeBilinear(e,[n,r])})),padding:{top:d,left:p,right:f,bottom:l}}}function rr(t){return un(this,void 0,void 0,(function(){return dn(this,(function(e){return[2,Promise.all(t.map((function(t){return t.buffer()})))]}))}))}function ar(t,e,n,r,a){var o=e[0],s=e[1],i=n[0],c=n[1],u=function(t,e,n,r,a){return void 0===r&&(r=0),void 0===a&&(a=0),1===n&&1===e&&0===r&&0===a?t:t.map((function(t){return function(t,e,n,r,a){return void 0===r&&(r=0),void 0===a&&(a=0),{score:t.score,keypoints:t.keypoints.map((function(t){var o=t.score,s=t.part,i=t.position;return{score:o,part:s,position:{x:i.x*n+a,y:i.y*e+r}}}))}}(t,e,n,r,a)}))}(t,(o+r.top+r.bottom)/i,(s+r.left+r.right)/c,-r.top,-r.left);return a?function(t,e){return e<=0?t:t.map((function(t){return function(t,e){return{score:t.score,keypoints:t.keypoints.map((function(t){var n=t.score,r=t.part,a=t.position;return{score:n,part:r,position:{x:e-1-a.x,y:a.y}}}))}}(t,e)}))}(u,s):u}var or={architecture:"MobileNetV1",outputStride:16,quantBytes:4,multiplier:.75},sr=["MobileNetV1","ResNet50"],ir={MobileNetV1:[8,16,32],ResNet50:[32,16]},cr={MobileNetV1:[.5,.75,1],ResNet50:[1]},ur=[1,2,4];var dr={flipHorizontal:!1,internalResolution:"medium",segmentationThreshold:.7,maxDetections:10,scoreThreshold:.4,nmsRadius:20},lr={flipHorizontal:!1,internalResolution:"medium",segmentationThreshold:.7,maxDetections:10,scoreThreshold:.4,nmsRadius:20,minKeypointScore:.3,refineSteps:10};function pr(t){var e=t.segmentationThreshold,n=t.maxDetections,r=t.scoreThreshold,a=t.nmsRadius;if(e<0||e>1)throw new Error("segmentationThreshold "+e+". Should be in range [0.0, 1.0]");if(n<=0)throw new Error("Invalid maxDetections "+n+". Should be > 0");if(r<0||r>1)throw new Error("Invalid scoreThreshold "+r+". Should be in range [0.0, 1.0]");if(a<=0)throw new Error("Invalid nmsRadius "+a+".")}function fr(t){var e=t.segmentationThreshold,n=t.maxDetections,r=t.scoreThreshold,a=t.nmsRadius,o=t.minKeypointScore,s=t.refineSteps;if(e<0||e>1)throw new Error("segmentationThreshold "+e+". Should be in range [0.0, 1.0]");if(n<=0)throw new Error("Invalid maxDetections "+n+". Should be > 0");if(r<0||r>1)throw new Error("Invalid scoreThreshold "+r+". Should be in range [0.0, 1.0]");if(a<=0)throw new Error("Invalid nmsRadius "+a+".");if(o<0||o>1)throw new Error("Invalid minKeypointScore "+o+".Should be in range [0.0, 1.0]");if(s<=0||s>20)throw new Error("Invalid refineSteps "+s+".Should be in range [1, 20]")}var hr=function(){function t(t){this.baseModel=t}return t.prototype.predictForPersonSegmentation=function(t){var e=this.baseModel.predict(t);return{segmentLogits:e.segmentation,heatmapScores:e.heatmapScores,offsets:e.offsets,displacementFwd:e.displacementFwd,displacementBwd:e.displacementBwd}},t.prototype.predictForPersonSegmentationAndPart=function(t){var e=this.baseModel.predict(t);return{segmentLogits:e.segmentation,partHeatmapLogits:e.partHeatmaps,heatmapScores:e.heatmapScores,offsets:e.offsets,displacementFwd:e.displacementFwd,displacementBwd:e.displacementBwd}},t.prototype.predictForMultiPersonInstanceSegmentationAndPart=function(t){var e=this.baseModel.predict(t);return{segmentLogits:e.segmentation,longOffsets:e.longOffsets,heatmapScores:e.heatmapScores,offsets:e.offsets,displacementFwd:e.displacementFwd,displacementBwd:e.displacementBwd,partHeatmaps:e.partHeatmaps}},t.prototype.segmentPersonActivation=function(t,e,n){var r=this;void 0===n&&(n=.5);var a=Jn(t),o=a[0],s=a[1],i=tr(e,this.baseModel.outputStride,[o,s]),c=nr(t,i),d=c.resized,l=c.padding,p=Object(u.tidy)((function(){var t=r.predictForPersonSegmentation(d),e=t.segmentLogits,a=t.heatmapScores,i=t.offsets,c=t.displacementFwd,p=t.displacementBwd,f=d.shape,h=f[0],b=f[1],m=er(e,[o,s],[h,b],[[l.top,l.bottom],[l.left,l.right]],!0);return{segmentation:pn(Object(u.squeeze)(m),n),heatmapScores:a,offsets:i,displacementFwd:c,displacementBwd:p}})),f=p.segmentation,h=p.heatmapScores,b=p.offsets,m=p.displacementFwd,g=p.displacementBwd;return d.dispose(),{segmentation:f,heatmapScores:h,offsets:b,displacementFwd:m,displacementBwd:g,padding:l,internalResolutionHeightAndWidth:i}},t.prototype.segmentPerson=function(t,e){return void 0===e&&(e=dr),un(this,void 0,void 0,(function(){var n,r,a,o,s,i,c,u,d,l,p,f,h,b,m,g,y,O;return dn(this,(function(j){switch(j.label){case 0:return pr(e=cn({},dr,e)),n=this.segmentPersonActivation(t,e.internalResolution,e.segmentationThreshold),r=n.segmentation,a=n.heatmapScores,o=n.offsets,s=n.displacementFwd,i=n.displacementBwd,c=n.padding,u=n.internalResolutionHeightAndWidth,d=r.shape,l=d[0],p=d[1],[4,r.data()];case 1:return f=j.sent(),r.dispose(),[4,rr([a,o,s,i])];case 2:return h=j.sent(),b=h[0],m=h[1],g=h[2],y=h[3],O=ar(O=Un(b,m,g,y,this.baseModel.outputStride,e.maxDetections,e.scoreThreshold,e.nmsRadius),[l,p],u,c,!1),a.dispose(),o.dispose(),s.dispose(),i.dispose(),[2,{height:l,width:p,data:f,allPoses:O}]}}))}))},t.prototype.segmentMultiPerson=function(t,e){return void 0===e&&(e=lr),un(this,void 0,void 0,(function(){var n,r,a,o,s,i,c,d,l,p,f,h,b,m,g,y,O,j,v,w,x,k=this;return dn(this,(function(N){switch(N.label){case 0:return fr(e=cn({},lr,e)),n=Jn(t),r=n[0],a=n[1],o=tr(e.internalResolution,this.baseModel.outputStride,[r,a]),s=nr(t,o),i=s.resized,c=s.padding,d=Object(u.tidy)((function(){var t,n=k.predictForMultiPersonInstanceSegmentationAndPart(i),s=n.segmentLogits,d=n.longOffsets,l=n.heatmapScores,p=n.offsets,f=n.displacementFwd,h=n.displacementBwd,b=er(s,[r,a],o,[[c.top,c.bottom],[c.left,c.right]],!0);return t=d,{segmentation:pn(Object(u.squeeze)(b),e.segmentationThreshold),longOffsets:t,heatmapScoresRaw:l,offsetsRaw:p,displacementFwdRaw:f,displacementBwdRaw:h}})),l=d.segmentation,p=d.longOffsets,f=d.heatmapScoresRaw,h=d.offsetsRaw,b=d.displacementFwdRaw,m=d.displacementBwdRaw,[4,rr([f,h,b,m])];case 1:return g=N.sent(),y=g[0],O=g[1],j=g[2],v=g[3],w=ar(w=Un(y,O,j,v,this.baseModel.outputStride,e.maxDetections,e.scoreThreshold,e.nmsRadius),[r,a],o,c,!1),[4,_n(l,p,w,r,a,this.baseModel.outputStride,o,c,e.scoreThreshold,e.refineSteps,e.minKeypointScore,e.maxDetections)];case 2:return x=N.sent(),i.dispose(),l.dispose(),p.dispose(),f.dispose(),h.dispose(),b.dispose(),m.dispose(),[2,x]}}))}))},t.prototype.segmentPersonPartsActivation=function(t,e,n){var r=this;void 0===n&&(n=.5);var a=Jn(t),o=a[0],s=a[1],i=tr(e,this.baseModel.outputStride,[o,s]),c=nr(t,i),d=c.resized,l=c.padding,p=Object(u.tidy)((function(){var t=r.predictForPersonSegmentationAndPart(d),e=t.segmentLogits,a=t.partHeatmapLogits,i=t.heatmapScores,c=t.offsets,p=t.displacementFwd,f=t.displacementBwd,h=d.shape,b=h[0],m=h[1],g=er(e,[o,s],[b,m],[[l.top,l.bottom],[l.left,l.right]],!0),y=er(a,[o,s],[b,m],[[l.top,l.bottom],[l.left,l.right]],!0);return{partSegmentation:fn(pn(Object(u.squeeze)(g),n),y),heatmapScores:i,offsets:c,displacementFwd:p,displacementBwd:f}})),f=p.partSegmentation,h=p.heatmapScores,b=p.offsets,m=p.displacementFwd,g=p.displacementBwd;return d.dispose(),{partSegmentation:f,heatmapScores:h,offsets:b,displacementFwd:m,displacementBwd:g,padding:l,internalResolutionHeightAndWidth:i}},t.prototype.segmentPersonParts=function(t,e){return void 0===e&&(e=dr),un(this,void 0,void 0,(function(){var n,r,a,o,s,i,c,u,d,l,p,f,h,b,m,g,y,O;return dn(this,(function(j){switch(j.label){case 0:return pr(e=cn({},dr,e)),n=this.segmentPersonPartsActivation(t,e.internalResolution,e.segmentationThreshold),r=n.partSegmentation,a=n.heatmapScores,o=n.offsets,s=n.displacementFwd,i=n.displacementBwd,c=n.padding,u=n.internalResolutionHeightAndWidth,d=r.shape,l=d[0],p=d[1],[4,r.data()];case 1:return f=j.sent(),r.dispose(),[4,rr([a,o,s,i])];case 2:return h=j.sent(),b=h[0],m=h[1],g=h[2],y=h[3],O=ar(O=Un(b,m,g,y,this.baseModel.outputStride,e.maxDetections,e.scoreThreshold,e.nmsRadius),[l,p],u,c,!1),a.dispose(),o.dispose(),s.dispose(),i.dispose(),[2,{height:l,width:p,data:f,allPoses:O}]}}))}))},t.prototype.segmentMultiPersonParts=function(t,e){return void 0===e&&(e=lr),un(this,void 0,void 0,(function(){var n,r,a,o,s,i,c,d,l,p,f,h,b,m,g,y,O,j,v,w,x,k,N=this;return dn(this,(function(S){switch(S.label){case 0:return fr(e=cn({},lr,e)),n=Jn(t),r=n[0],a=n[1],o=tr(e.internalResolution,this.baseModel.outputStride,[r,a]),s=nr(t,o),i=s.resized,c=s.padding,d=Object(u.tidy)((function(){var t=N.predictForMultiPersonInstanceSegmentationAndPart(i),n=t.segmentLogits,s=t.longOffsets,d=t.heatmapScores,l=t.offsets,p=t.displacementFwd,f=t.displacementBwd,h=t.partHeatmaps,b=er(n,[r,a],o,[[c.top,c.bottom],[c.left,c.right]],!0),m=er(h,[r,a],o,[[c.top,c.bottom],[c.left,c.right]],!0),g=s;return{segmentation:pn(Object(u.squeeze)(b),e.segmentationThreshold),longOffsets:g,heatmapScoresRaw:d,offsetsRaw:l,displacementFwdRaw:p,displacementBwdRaw:f,partSegmentation:hn(m)}})),l=d.segmentation,p=d.longOffsets,f=d.heatmapScoresRaw,h=d.offsetsRaw,b=d.displacementFwdRaw,m=d.displacementBwdRaw,g=d.partSegmentation,[4,rr([f,h,b,m])];case 1:return y=S.sent(),O=y[0],j=y[1],v=y[2],w=y[3],x=ar(x=Un(O,j,v,w,this.baseModel.outputStride,e.maxDetections,e.scoreThreshold,e.nmsRadius),[r,a],o,c,!1),[4,Dn(l,p,g,x,r,a,this.baseModel.outputStride,o,c,e.scoreThreshold,e.refineSteps,e.minKeypointScore,e.maxDetections)];case 2:return k=S.sent(),i.dispose(),l.dispose(),p.dispose(),f.dispose(),h.dispose(),b.dispose(),m.dispose(),g.dispose(),[2,k]}}))}))},t.prototype.dispose=function(){this.baseModel.dispose()},t}();function br(t){return un(this,void 0,void 0,(function(){var e,n,r,a,o,s;return dn(this,(function(i){switch(i.label){case 0:if(e=t.outputStride,n=t.quantBytes,r=t.multiplier,null==u)throw new Error("Cannot find TensorFlow.js. If you are using a <script> tag, please also include @tensorflow/tfjs on the page before using this\n        model.");return a=function(t,e,n){var r={1:"100",.75:"075",.5:"050"},a="model-stride"+t+".json";return 4===n?Yn+"float/"+r[e]+"/"+a:Yn+"quant"+n+"/"+r[e]+"/"+a}(e,r,n),[4,an(t.modelUrl||a)];case 1:return o=i.sent(),s=new mn(o,e),[2,new hr(s)]}}))}))}function mr(t){return un(this,void 0,void 0,(function(){var e,n,r,a,o;return dn(this,(function(s){switch(s.label){case 0:if(e=t.outputStride,n=t.quantBytes,null==u)throw new Error("Cannot find TensorFlow.js. If you are using a <script> tag, please also include @tensorflow/tfjs on the page before using this\n        model.");return r=function(t,e){var n="model-stride"+t+".json";return 4===e?Kn+"float/"+n:Kn+"quant"+e+"/"+n}(e,n),[4,an(t.modelUrl||r)];case 1:return a=s.sent(),o=new Gn(a,e),[2,new hr(o)]}}))}))}function gr(t){return void 0===t&&(t=or),un(this,void 0,void 0,(function(){return dn(this,(function(e){return"ResNet50"===(t=function(t){if(null==(t=t||or).architecture&&(t.architecture="MobileNetV1"),sr.indexOf(t.architecture)<0)throw new Error("Invalid architecture "+t.architecture+". Should be one of "+sr);if(null==t.outputStride&&(t.outputStride=16),ir[t.architecture].indexOf(t.outputStride)<0)throw new Error("Invalid outputStride "+t.outputStride+". Should be one of "+ir[t.architecture]+" for architecture "+t.architecture+".");if(null==t.multiplier&&(t.multiplier=1),cr[t.architecture].indexOf(t.multiplier)<0)throw new Error("Invalid multiplier "+t.multiplier+". Should be one of "+cr[t.architecture]+" for architecture "+t.architecture+".");if(null==t.quantBytes&&(t.quantBytes=4),ur.indexOf(t.quantBytes)<0)throw new Error("Invalid quantBytes "+t.quantBytes+". Should be one of "+ur+" for architecture "+t.architecture+".");return t}(t)).architecture?[2,mr(t)]:"MobileNetV1"===t.architecture?[2,br(t)]:[2,null]}))}))}var yr=n(220);function Or(t,e,n,r,a,o,s){try{var i=t[o](s),c=i.value}catch(t){return void n(t)}i.done?e(c):Promise.resolve(c).then(r,a)}function jr(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var o=t.apply(e,n);function s(t){Or(o,r,a,s,i,"next",t)}function i(t){Or(o,r,a,s,i,"throw",t)}s(void 0)}))}}window.fetchPhotos=s,window.jsonFlickrFeed=function(t){t.title.includes("boston")&&(t.items=t.items.slice(6,15)),t.title.includes("chicago")&&(t.items=t.items.slice(8,13)),t.title.includes("dallas")&&(t.items=t.items.slice(8,16)),t.title.includes("denver")&&(t.items=t.items.slice(13,20)),t.title.includes("detroit")&&(t.items=t.items.slice(10,20)),t.title.includes("houston")&&(t.items=t.items.slice(1,8)),t.title.includes("honolulu")&&(t.items=t.items.slice(4,16)),t.title.includes("angeles")&&(t.items=t.items.slice(11,20)),t.title.includes("york")&&(t.items=t.items.slice(10,17)),t.title.includes("orlando")&&(t.items=t.items.slice(15,20)),t.title.includes("phoenix")&&(t.items=t.items.slice(7,16)),t.title.includes("seattle")&&(t.items=t.items.slice(12,20)),t.title.includes("toronto")&&(t.items=t.items.slice(11,17));var e="<h3>FLICKR FEED</h3>";t.items.forEach((function(t){var n=t.media.m,r="".concat(n.slice(0,n.length-5),"b.jpg");e+='<div class="photo-container"> \n                      <a href = '.concat(r,' target = "_blank"> \n                        <img class="photo" src="').concat(r,'""/>  \n                     </a>\n                     <div class="photo-button"> </div>\n               </div>')})),document.getElementById("imgs").innerHTML=e,document.getElementById("photobooth").hidden?Array.from(document.getElementsByClassName("photo-button")).forEach((function(t){t.setAttribute("hidden",!0)})):Array.from(document.getElementsByClassName("photo-button")).forEach((function(t){t.onclick=function(){return o(t)},t.innerHTML="USE"}))},window.wikiAPI=i,window.toggleRead=r,window.toggleUseButton=r,window.usePhotoButton=o,window.changeCity=function(t){s(t.innerText),i(t.innerText),c(t.title)},window.onload=function(){s("New York"),i("New York"),c("5V23-xQknDw")};var vr=document.getElementById("webcam");vr&&(vr.width=640,vr.height=480);var wr=document.getElementById("canvas"),xr=document.getElementById("snapSound"),kr=new class{constructor(t,e="user",n=null,r=null){this._webcamElement=t,this._webcamElement.width=this._webcamElement.width||640,this._webcamElement.height=this._webcamElement.height||this._webcamElement.width*(3/4),this._facingMode=e,this._webcamList=[],this._streamList=[],this._selectedDeviceId="",this._canvasElement=n,this._snapSoundElement=r}get facingMode(){return this._facingMode}set facingMode(t){this._facingMode=t}get webcamList(){return this._webcamList}get webcamCount(){return this._webcamList.length}get selectedDeviceId(){return this._selectedDeviceId}getVideoInputs(t){return this._webcamList=[],t.forEach(t=>{"videoinput"===t.kind&&this._webcamList.push(t)}),1==this._webcamList.length&&(this._facingMode="user"),this._webcamList}getMediaConstraints(){var t={};return""==this._selectedDeviceId?t.facingMode=this._facingMode:t.deviceId={exact:this._selectedDeviceId},{video:t,audio:!1}}selectCamera(){for(let t of this._webcamList)if("user"==this._facingMode&&t.label.toLowerCase().includes("front")||"enviroment"==this._facingMode&&t.label.toLowerCase().includes("back")){this._selectedDeviceId=t.deviceId;break}}flip(){this._facingMode="user"==this._facingMode?"enviroment":"user",this._webcamElement.style.transform="",this.selectCamera()}async start(t=!0){return new Promise((e,n)=>{this.stop(),navigator.mediaDevices.getUserMedia(this.getMediaConstraints()).then(r=>{this._streamList.push(r),this.info().then(r=>{this.selectCamera(),t?this.stream().then(t=>{e(this._facingMode)}).catch(t=>{n(t)}):e(this._selectedDeviceId)}).catch(t=>{n(t)})}).catch(t=>{n(t)})})}async info(){return new Promise((t,e)=>{navigator.mediaDevices.enumerateDevices().then(e=>{this.getVideoInputs(e),t(this._webcamList)}).catch(t=>{e(t)})})}async stream(){return new Promise((t,e)=>{navigator.mediaDevices.getUserMedia(this.getMediaConstraints()).then(e=>{this._streamList.push(e),this._webcamElement.srcObject=e,"user"==this._facingMode&&(this._webcamElement.style.transform="scale(-1,1)"),this._webcamElement.play(),t(this._facingMode)}).catch(t=>{console.log(t),e(t)})})}stop(){this._streamList.forEach(t=>{t.getTracks().forEach(t=>{t.stop()})})}snap(){if(null!=this._canvasElement){null!=this._snapSoundElement&&this._snapSoundElement.play(),this._canvasElement.height=this._webcamElement.scrollHeight,this._canvasElement.width=this._webcamElement.scrollWidth;let t=this._canvasElement.getContext("2d");return"user"==this._facingMode&&(t.translate(this._canvasElement.width,0),t.scale(-1,1)),t.clearRect(0,0,this._canvasElement.width,this._canvasElement.height),t.drawImage(this._webcamElement,0,0,this._canvasElement.width,this._canvasElement.height),this._canvasElement.toDataURL("image/png")}throw"canvas element is missing"}}(vr,"user",wr,xr),Nr=function(t){t.innerText.includes("START")?kr.start().then((function(e){console.log("webcam started"),a(),document.getElementById("photobooth").removeAttribute("hidden"),document.getElementById("webcam").id="webcam-enabled",document.getElementById("postcard").removeAttribute("hidden"),document.getElementById("converter").removeAttribute("hidden"),t.innerText="STOP POST CARD BOOTH"})).catch((function(t){alert(t)})):(a(),document.getElementById("photobooth").setAttribute("hidden",!0),document.getElementById("webcam-enabled").id="webcam",document.getElementById("postcard").setAttribute("hidden",!0),document.getElementById("converter").setAttribute("hidden",!0),t.innerText="START POST CARD BOOTH",kr.stop(),document.getElementById("download").setAttribute("hidden",!0))};function Sr(){return Er.apply(this,arguments)}function Er(){return(Er=jr(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return document.getElementById("converter").innerHTML='Loading <i class="fa fa-cog fa-spin" style="font-size:20px"></i>',document.getElementById("ayo2"),t.next=4,gr({architecture:"ResNet50"});case 4:t.sent.segmentPerson(vr,{flipHorizontal:!0,internalResolution:"full",segmentationThreshold:.7}).then((function(t){null!=t&&(document.getElementById("converter").innerHTML="CAPTURE Postcard",Tr(t))}));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}window.startCam=Nr,window.snap=Ir,window.makeCapture=Sr;var Tr=function(t){var e=document.getElementById("canvas2"),n=document.getElementById("canvas2"),r=n.getContext("2d");e.width=640,e.height=480;var a=e.getContext("2d");a.drawImage(vr,0,0);for(var o=a.getImageData(0,0,vr.width,vr.height),s=o.data,i=0;i<s.length;i+=4)0==t.data[i/4]&&(s[i+3]=0);a.imageSmoothingEnabled=!0,a.putImageData(o,0,0);var c=new Image;c.onload=function(){r.clearRect(0,0,n.width,n.height),r.imageSmoothingEnabled=!0,r.drawImage(c,0,0,n.width,n.height)},c.src=e.toDataURL(),document.getElementById("download").removeAttribute("hidden")},Ir=function(){kr.snap();var t=document.querySelector("#canvas").toDataURL("image/png");document.getElementById("ayo").innerHTML='<img id="ayo2" src="'+t+'"/>',document.querySelector("#canvas").remove()};window.takeScreenShot=function(){Object(yr.toJpeg)(document.getElementById("ayo"),{quality:.95}).then((function(t){var e=document.createElement("a");e.download="my-postcard",e.href=t,e.click()}))}}]);
//# sourceMappingURL=main.js.map