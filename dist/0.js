(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{66:function(n,t,e){"use strict";var r=e.w[n.i];n.exports=r.exports,e(67),r.exports.__webpack_init__()},67:function(n,t,e){"use strict";e.r(t),e.d(t,"Cell",function(){return _}),e.d(t,"Galaxy",function(){return u}),e.d(t,"__wbindgen_object_clone_ref",function(){return f}),e.d(t,"__wbindgen_object_drop_ref",function(){return d}),e.d(t,"__wbindgen_string_new",function(){return p}),e.d(t,"__wbindgen_number_new",function(){return h}),e.d(t,"__wbindgen_number_get",function(){return m}),e.d(t,"__wbindgen_undefined_new",function(){return y}),e.d(t,"__wbindgen_null_new",function(){return x}),e.d(t,"__wbindgen_is_null",function(){return k}),e.d(t,"__wbindgen_is_undefined",function(){return j}),e.d(t,"__wbindgen_boolean_new",function(){return v}),e.d(t,"__wbindgen_boolean_get",function(){return A}),e.d(t,"__wbindgen_symbol_new",function(){return E}),e.d(t,"__wbindgen_is_symbol",function(){return J}),e.d(t,"__wbindgen_string_get",function(){return U}),e.d(t,"__wbindgen_throw",function(){return C});var r=e(66);class _{static __construct(n){return new _(n)}constructor(n){this.ptr=n}get mass(){return r.__wbg_get_cell_mass(this.ptr)}set mass(n){return r.__wbg_set_cell_mass(this.ptr,n)}get accel_mangitude(){return r.__wbg_get_cell_accel_mangitude(this.ptr)}set accel_mangitude(n){return r.__wbg_set_cell_accel_mangitude(this.ptr,n)}get accel_degree(){return r.__wbg_get_cell_accel_degree(this.ptr)}set accel_degree(n){return r.__wbg_set_cell_accel_degree(this.ptr,n)}free(){const n=this.ptr;this.ptr=0,r.__wbg_cell_free(n)}get_type(){return r.cell_get_type(this.ptr)}is_gas(){return 0!==r.cell_is_gas(this.ptr)}is_star(){return 0!==r.cell_is_star(this.ptr)}}class u{static __construct(n){return new u(n)}constructor(n){this.ptr=n}free(){const n=this.ptr;this.ptr=0,r.__wbg_galaxy_free(n)}static new(n){return u.__construct(r.galaxy_new(n))}cells_pointer(){return r.galaxy_cells_pointer(this.ptr)}seed(){return r.galaxy_seed(this.ptr)}tick(){return r.galaxy_tick(this.ptr)}}let i=[],c=0;function o(n){c===i.length&&i.push(i.length+1);const t=c,e=i[t];return c=e,i[t]={obj:n,cnt:1},t<<1}let l=[];function s(n){if(1==(1&n))return l[n>>1];return i[n>>1].obj}function f(n){if(1==(1&n))return o(s(n));return i[n>>1].cnt+=1,n}function d(n){!function(n){let t=i[n>>1];t.cnt-=1,t.cnt>0||(i[n>>1]=c,c=n>>1)}(n)}let g=new TextDecoder("utf-8"),a=null;function b(){return null!==a&&a.buffer===r.memory.buffer||(a=new Uint8Array(r.memory.buffer)),a}function w(n,t){return g.decode(b().subarray(n,n+t))}function p(n,t){return o(w(n,t))}function h(n){return o(n)}function m(n,t){let e=s(n);return"number"==typeof e?e:(b()[t]=1,0)}function y(){return o(void 0)}function x(){return o(null)}function k(n){return null===s(n)?1:0}function j(n){return void 0===s(n)?1:0}function v(n){return o(1===n)}function A(n){let t=s(n);return"boolean"==typeof t?t?1:0:2}function E(n,t){let e;return o(e=0===n?Symbol():Symbol(w(n,t)))}function J(n){return"symbol"==typeof s(n)?1:0}let S=new TextEncoder("utf-8");let T=null;function U(n,t){let e=s(n);if("string"!=typeof e)return 0;const[_,u]=function(n){const t=S.encode(n),e=r.__wbindgen_malloc(t.length);return b().set(t,e),[e,t.length]}(e);return(null!==T&&T.buffer===r.memory.buffer||(T=new Uint32Array(r.memory.buffer)),T)[t/4]=u,_}function C(n,t){throw new Error(w(n,t))}}}]);