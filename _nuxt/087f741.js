(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{134:function(t,e,n){},135:function(t,e,n){},154:function(t,e,n){},162:function(t,e,n){"use strict";var r=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"navbar header has-shadow is-primary",attrs:{role:"navigation","aria-label":"main navigation"}},[r("div",{staticClass:"navbar-brand"},[r("a",{staticClass:"navbar-item",attrs:{href:"/"}},[r("img",{attrs:{src:n(211),alt:"Buefy",height:"28"}})]),t._v(" "),r("div",{staticClass:"navbar-burger"},[r("span"),t._v(" "),r("span"),t._v(" "),r("span")])])])}],c={data:function(){return{items:[{title:"Home",icon:"home",to:{name:"index"}},{title:"Inspire",icon:"lightbulb",to:{name:"inspire"}}]}}},o=n(9),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),n("section",{staticClass:"main-content columns"},[n("aside",{staticClass:"column is-2 section"},[n("p",{staticClass:"menu-label is-hidden-touch"},[t._v("\n        General\n      ")]),t._v(" "),n("ul",{staticClass:"menu-list"},t._l(t.items,(function(e,r){return n("li",{key:r},[n("nuxt-link",{attrs:{to:e.to,"exact-active-class":"is-active"}},[n("b-icon",{attrs:{icon:e.icon}}),t._v(" "+t._s(e.title)+"\n          ")],1)],1)})),0)]),t._v(" "),n("div",{staticClass:"container column is-10"},[n("nuxt")],1)])])}),r,!1,null,null,null);e.a=component.exports},163:function(t,e,n){"use strict";n(60);var r={name:"NuxtLoading",data:function(){return{percent:0,show:!1,canSucceed:!0,reversed:!1,skipTimerCount:0,rtl:!1,throttle:200,duration:5e3,continuous:!1}},computed:{left:function(){return!(!this.continuous&&!this.rtl)&&(this.rtl?this.reversed?"0px":"auto":this.reversed?"auto":"0px")}},beforeDestroy:function(){this.clear()},methods:{clear:function(){clearInterval(this._timer),clearTimeout(this._throttle),this._timer=null},start:function(){var t=this;return this.clear(),this.percent=0,this.reversed=!1,this.skipTimerCount=0,this.canSucceed=!0,this.throttle?this._throttle=setTimeout((function(){return t.startTimer()}),this.throttle):this.startTimer(),this},set:function(t){return this.show=!0,this.canSucceed=!0,this.percent=Math.min(100,Math.max(0,Math.floor(t))),this},get:function(){return this.percent},increase:function(t){return this.percent=Math.min(100,Math.floor(this.percent+t)),this},decrease:function(t){return this.percent=Math.max(0,Math.floor(this.percent-t)),this},pause:function(){return clearInterval(this._timer),this},resume:function(){return this.startTimer(),this},finish:function(){return this.percent=this.reversed?0:100,this.hide(),this},hide:function(){var t=this;return this.clear(),setTimeout((function(){t.show=!1,t.$nextTick((function(){t.percent=0,t.reversed=!1}))}),500),this},fail:function(t){return this.canSucceed=!1,this},startTimer:function(){var t=this;this.show||(this.show=!0),void 0===this._cut&&(this._cut=1e4/Math.floor(this.duration)),this._timer=setInterval((function(){t.skipTimerCount>0?t.skipTimerCount--:(t.reversed?t.decrease(t._cut):t.increase(t._cut),t.continuous&&(t.percent>=100||t.percent<=0)&&(t.skipTimerCount=1,t.reversed=!t.reversed))}),100)}},render:function(t){var e=t(!1);return this.show&&(e=t("div",{staticClass:"nuxt-progress",class:{"nuxt-progress-notransition":this.skipTimerCount>0,"nuxt-progress-failed":!this.canSucceed},style:{width:this.percent+"%",left:this.left}})),e}},c=(n(208),n(9)),component=Object(c.a)(r,undefined,undefined,!1,null,null,null);e.a=component.exports},207:function(t,e,n){"use strict";n(134)},208:function(t,e,n){"use strict";n(135)},210:function(t,e,n){},238:function(t,e,n){"use strict";n(154)},239:function(t,e,n){"use strict";n.r(e);var r={name:"HomePage",components:{Card:n(93).default}},c=n(9),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section"},[n("div",{staticClass:"columns is-mobile"},[n("card",{attrs:{title:"Free",icon:"github"}},[t._v("\n      Open source on "),n("a",{attrs:{href:"https://github.com/buefy/buefy"}},[t._v("\n        GitHub\n      ")])]),t._v(" "),n("card",{attrs:{title:"Responsive",icon:"cellphone-link"}},[n("b",{staticClass:"has-text-grey"},[t._v("\n        Every\n      ")]),t._v(" component is responsive\n    ")]),t._v(" "),n("card",{attrs:{title:"Modern",icon:"alert-decagram"}},[t._v("\n      Built with "),n("a",{attrs:{href:"https://vuejs.org/"}},[t._v("\n        Vue.js\n      ")]),t._v(" and "),n("a",{attrs:{href:"http://bulma.io/"}},[t._v("\n        Bulma\n      ")])]),t._v(" "),n("card",{attrs:{title:"Lightweight",icon:"arrange-bring-to-front"}},[t._v("\n      No other internal dependency\n    ")])],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Card:n(93).default})},24:function(t,e,n){"use strict";var r={name:"NuxtError",props:{error:{type:Object,default:null}},computed:{statusCode:function(){return this.error&&this.error.statusCode||500},message:function(){return this.error.message||"Error"}},head:function(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0"}]}}},c=(n(207),n(9)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"__nuxt-error-page"},[n("div",{staticClass:"error"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"90",height:"90",fill:"#DBE1EC",viewBox:"0 0 48 48"}},[n("path",{attrs:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"}})]),t._v(" "),n("div",{staticClass:"title"},[t._v(t._s(t.message))]),t._v(" "),404===t.statusCode?n("p",{staticClass:"description"},[void 0===t.$route?n("a",{staticClass:"error-link",attrs:{href:"/"}}):n("NuxtLink",{staticClass:"error-link",attrs:{to:"/"}},[t._v("Back to the home page")])],1):t._e(),t._v(" "),t._m(0)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logo"},[n("a",{attrs:{href:"https://nuxtjs.org",target:"_blank",rel:"noopener"}},[t._v("Nuxt")])])}],!1,null,null,null);e.a=component.exports},240:function(t,e,n){"use strict";n.r(e);var r=n(9),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section"},[n("h2",{staticClass:"title is-3 has-text-grey"},[t._v('\n    "Just start  '),n("b-icon",{attrs:{icon:"rocket",size:"is-large"}}),t._v('"\n  ')],1),t._v(" "),t._m(0)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",{staticClass:"subtitle is-6 has-text-grey"},[t._v("\n    Author: "),n("a",{attrs:{href:"https://github.com/anteriovieira"}},[t._v("\n      Antério Vieira\n    ")])])}],!1,null,null,null);e.default=component.exports},241:function(t,e,n){"use strict";n.r(e);n(238);var r=n(9),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{staticClass:"NuxtLogo",attrs:{width:"245",height:"180",viewBox:"0 0 452 342",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M139 330l-1-2c-2-4-2-8-1-13H29L189 31l67 121 22-16-67-121c-1-2-9-14-22-14-6 0-15 2-22 15L5 303c-1 3-8 16-2 27 4 6 10 12 24 12h136c-14 0-21-6-24-12z",fill:"#00C58E"}}),t._v(" "),n("path",{attrs:{d:"M447 304L317 70c-2-2-9-15-22-15-6 0-15 3-22 15l-17 28v54l39-67 129 230h-49a23 23 0 0 1-2 14l-1 1c-6 11-21 12-23 12h76c3 0 17-1 24-12 3-5 5-14-2-26z",fill:"#108775"}}),t._v(" "),n("path",{attrs:{d:"M376 330v-1l1-2c1-4 2-8 1-12l-4-12-102-178-15-27h-1l-15 27-102 178-4 12a24 24 0 0 0 2 15c4 6 10 12 24 12h190c3 0 18-1 25-12zM256 152l93 163H163l93-163z",fill:"#2F495E"}})])}),[],!1,null,null,null);e.default=component.exports},93:function(t,e,n){"use strict";n.r(e);var r={props:{title:{type:String,required:!0},icon:{type:String,required:!0}}},c=n(9),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"column"},[n("div",{staticClass:"card"},[n("header",{staticClass:"card-header"},[n("p",{staticClass:"card-header-title has-text-grey"},[t._v("\n        "+t._s(t.title)+"\n      ")])]),t._v(" "),n("div",{staticClass:"card-content"},[n("div",{staticClass:"content has-text-centered"},[n("b-icon",{attrs:{icon:t.icon,size:"is-large",type:"is-primary"}})],1)]),t._v(" "),n("footer",{staticClass:"card-footer"},[n("div",{staticClass:"card-footer-item"},[n("span",[t._t("default")],2)])])])])}),[],!1,null,null,null);e.default=component.exports}}]);