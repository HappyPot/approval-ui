(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-04f2e609"],{"272f":function(t,e,r){"use strict";var s=r("2ef0"),i=r("1fba");e["a"]={props:{betterScrollOptions:{type:Object,required:!1,default:function(){return{}}}},data:function(){return{BS:null}},mounted:function(){this.scrollInit()},beforeDestroy:function(){this.scrollDestroy()},methods:{scrollInit:function(){var t=this;this.BS=new i["a"](this.$refs.wrapper,Object(s["merge"])({mouseWheel:!0,click:!0,scrollbar:{fade:!0,interactive:!1}},this.betterScrollOptions)),this.BS.on("scroll",(function(e){var r=e.x,s=e.y;return t.$emit("scroll",{x:-r,y:-s})}))},scrollDestroy:function(){try{this.BS.destroy()}catch(t){delete this.BS,this.BS=null}},scrollToTop:function(){this.BS&&this.BS.scrollTo(0,0,300)},scroll:function(){this.BS&&this.$emit("scroll",{x:-this.BS.x,y:-this.BS.y})}}}},8221:function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d2-container-card-bs"},[t.$slots.header?r("div",{ref:"header",staticClass:"d2-container-card-bs__header"},[t._t("header")],2):t._e(),r("div",{ref:"wrapper",staticClass:"d2-container-card-bs__body"},[r("div",{staticClass:"d2-container-card-bs__body-wrapper-inner"},[r("div",{staticClass:"d2-container-card-bs__body-card"},[t._t("default")],2)])]),t.$slots.footer?r("div",{ref:"footer",staticClass:"d2-container-card-bs__footer"},[t._t("footer")],2):t._e()])},i=[],n=r("272f"),o={name:"d2-container-card-bs",mixins:[n["a"]]},c=o,a=r("2877"),l=Object(a["a"])(c,s,i,!1,null,null,null);e["default"]=l.exports}}]);