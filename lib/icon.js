!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.icon=e():t.icon=e()}(this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=2)}([function(t,e){},function(t,e,n){"use strict";e.a={name:"VmIcon",componentName:"VmIcon",props:{tag:{type:String,default:"i"},type:String,size:[Number,String],color:String},render:function(t){var e={};return this.size&&(e.fontSize=this.size+"px"),this.color&&(e.color=this.color),t(this.tag,{class:["vm-icon-"+this.type],style:e},this.$slots.default)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(0);n.n(r);e.default=o.a}])});