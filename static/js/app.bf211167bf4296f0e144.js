webpackJsonp([1],{150:function(t,e,n){function a(t){n(406)}var s=n(24)(n(167),n(428),a,null,null);t.exports=s.exports},151:function(t,e,n){function a(t){n(407)}var s=n(24)(n(168),n(429),a,"data-v-c64b9a6e",null);t.exports=s.exports},152:function(t,e){t.exports=[{year:94,rate:62.7,population:1210},{year:95,rate:64.4,population:1260},{year:96,rate:65.6,population:1300},{year:97,rate:68.5,population:1371},{year:98,rate:67.6,population:1365},{year:99,rate:70.9,population:1446},{year:100,rate:72,population:1478},{year:101,rate:73,population:1510},{year:102,rate:76.3,population:1587},{year:103,rate:78,population:1631},{year:104,rate:78,population:1638},{year:105,rate:79.7,population:1677}]},153:function(t,e,n){"use strict";var a=n(73),s=n(430),i=n(418),M=n.n(i),u=n(419),r=n.n(u),o=n(417),c=n.n(o);a.a.use(s.a),e.a=new s.a({routes:[{path:"/",name:"Home",component:M.a},{path:"/simple",name:"Simple",component:r.a},{path:"/graphical",name:"Graphical",component:c.a}]})},154:function(t,e,n){"use strict";var a=n(73),s=n(432);a.a.use(s.a);var i=new s.a.Store({state:{isLoaded:!1},mutations:{loaded:function(t){t.isLoaded=!0}}});e.a=i},156:function(t,e){},158:function(t,e,n){function a(t){n(405)}var s=n(24)(n(164),n(427),a,null,null);t.exports=s.exports},159:function(t,e,n){"use strict";var a=n(56),s=n.n(a),i=n(55),M=n.n(i),u=n(175),r=n.n(u),o=n(176),c=n.n(o),L=n(160),l=n(395),w=(n.n(l),function(){function t(e){r()(this,t),this.attr=e}return c()(t,[{key:"render",value:function(t){return M()(this.attr,s()({},t,{count:Math.ceil(t.population/this.attr.base*10)})),n.i(L.a)(this.attr)}}]),t}());e.a=w},160:function(t,e,n){"use strict";e.a=function(t){var e=t.ratio,n=t.count,a=t.color,s=t.population,i=t.year,M="re-tooltip",u=Array(10).fill(1).map(function(t,e){var s=e+1<n?a:"#ccc";return'\n      <span class="re-tooltip-man">\n        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 174">\n          <ellipse cx="30" cy="17.25" rx="17.07" ry="17.25" style="fill: '+s+'" />\n          <path d="M60,53.41a10.44,10.44,0,0,0-10.38-10.5H10.38A10.44,10.44,0,0,0,0,53.41v66.48H15.23V174H44.77V119.88H60Z" style="fill: '+s+'" />\n        </svg>\n      </span>\n    '}).join("");return'\n  <div class="re-tooltip-wrapper">\n    <table>\n      <tbody>\n        <tr class="align-baseline">\n          <th rowspan="4" class="re-tooltip-title">\n            <h3>'+i+'<small>年</small></h3>\n          </th>\n          <td class="'+M+'-col-first">\n            <span class="'+M+'-label">上網率</span>\n          </td>\n          <td>\n            <span class="'+M+'-value" style="color: '+a+'">'+e+'<span class="'+M+'-unit">%</span></span>\n          </td>\n        </tr>\n        <tr>\n          <td colspan="2" class="'+M+'-col-first">\n            <div class="'+M+'-bar">\n              <div class="'+M+'-fill" style="width: '+e+"%;background: "+a+';"></div>\n            </div>\n          </td>\n        </tr>\n        <tr class="align-baseline">\n          <td class="'+M+'-col-first">\n            <span class="'+M+'-label">上網人口</span>\n          </td>\n          <td>\n            <span class="'+M+'-value" style="color: '+a+'">'+s+'<span class="'+M+'-unit">萬人</span></span>\n          </td>\n        </tr>\n        <tr>\n          <td colspan="2" class="'+M+'-col-first">\n            <div class="'+M+'-population">\n              '+u+"\n            </div>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>"}},161:function(t,e,n){"use strict";var a=n(409),s=n.n(a),i=n(410),M=n.n(i),u=n(411),r=n.n(u),o=n(412),c=n.n(o);e.a={bubble:s.a,computer:M.a,globe:r.a,satellite:c.a}},162:function(t,e,n){"use strict";var a=n(74),s=n.n(a),i=n(55),M=n.n(i),u=n(110),r=n.n(u),o=n(149),c=n.n(o),L=n(161),l=n(433),w=n.n(l),D=c.a.format(".2%"),d=w.a.width,p=w.a.height,j=w.a.layers.slice(),x=j.findIndex(function(t){return"chart"===t.name}),C=j.splice(x,1)[0],g=function(t,e){var n={top:t.y/p,left:t.x/d,width:t.width/d,height:t.height/p},a=r()(n),i=M()({},{position:"absolute",name:t.name},e&&{backgroundImage:"url("+e+")",pointerEvents:"none"});return a.reduce(function(t,e){return M()({},t,s()({},e,D(n[e])))},i)};e.a={width:d,height:p,aspectRatio:D(p/d),chart:g(C),chartLayer:C,layers:j.map(function(t){return g(t,L.a[t.name])})}},163:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(73),s=n(157),i=n.n(s),M=n(155),u=(n.n(M),n(156)),r=(n.n(u),n(158)),o=n.n(r),c=n(153),L=n(154);a.a.config.productionTip=!1,new i.a("cwTeXYen",{weight:500}).load("圓體測試",1e4).then(function(){L.a.commit("loaded")},function(){L.a.commit("loaded")}),new a.a({el:"#app",router:c.a,store:L.a,template:"<App/>",components:{App:o.a}})},164:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},165:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(74),s=n.n(a),i=n(56),M=n.n(i),u=n(152),r=n.n(u),o=n(150),c=n.n(o),L=n(162);e.default={components:{LineChart:c.a},name:"home",data:function(){return{columns:{ratio:r.a.map(function(t){return t.rate})},data:{x:"year",columns:[["year"].concat(r.a.map(function(t){return t.year})),["ratio",r.a[0].rate]],axes:{ratio:"y"},colors:{ratio:"black"},types:{ratio:"spline"},classes:{ratio:"graphical-network-ratio"}},options:{legend:{show:!1},padding:{top:10,right:15,bottom:10},axis:{x:{label:{text:"年份(民國)",position:"outer-right"},tick:{culling:!1},padding:{left:0,right:0},min:r.a[0].year,max:r.a[r.a.length-1].year},y:{label:{text:"上網率(%)",position:"outer-top"},inner:!0,padding:{bottom:0,top:0},min:60,max:80,tick:{values:[65,70,75,80]}}},point:{r:0,focus:{expand:{enabled:!0,r:4}}},grid:{lines:{front:!0}},transition:{duration:500},tooltip:{contents:function(t){var e=t.reduce(function(t,e){var n;return M()({},t,(n={},s()(n,e.id,e.value),s()(n,"year",e.x),n))},{});return'\n              <div class="g-tooltip-container font-round">\n                '+e.year+"年："+e.ratio+"%\n              </div>\n            "}}},chartStyle:L.a.chart,chartLayer:L.a.chartLayer,layers:L.a.layers,containerStyle:{paddingTop:L.a.aspectRatio}}}}},166:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(74),s=n.n(a),i=n(56),M=n.n(i),u=n(152),r=n.n(u),o=n(150),c=n.n(o),L=n(159),l=n(416),w=n.n(l),D=n(415),d=n.n(D),p="rgb(255, 233, 141)",j=new L.a({base:1800,color:"#E59A38"});e.default={components:{LineChart:c.a,LegendRect:w.a,LegendLine:d.a},name:"net-user",data:function(){return{color:p,columns:{population:r.a.map(function(t){return t.population}),ratio:r.a.map(function(t){return t.rate})},data:{x:"year",columns:[["year"].concat(r.a.map(function(t){return t.year})),["population",r.a[0].population],["ratio",r.a[0].rate]],axes:{ratio:"y",population:"y2"},colors:{ratio:"black",population:p},types:{ratio:"line",population:"area"},classes:{ratio:"network-ratio",population:"network-population"}},options:{padding:{top:10},legend:{show:!1},axis:{x:{label:{text:"年份(民國)",position:"outer-center"},tick:{culling:!1},padding:{left:0,right:0},min:r.a[0].year,max:r.a[r.a.length-1].year},y:{label:{text:"上網率(%)",position:"outer-middle"},padding:{bottom:0,top:0},min:55,max:80,tick:{values:[60,65,70,75,80]}},y2:{show:!0,label:{text:"上網人口數(萬人)",position:"outer-middle"},padding:{bottom:0,top:0},min:0,max:2e3,tick:{count:5}}},point:{r:0,focus:{expand:{enabled:!0,r:4}}},grid:{lines:{front:!0}},transition:{duration:500},tooltip:{contents:function(t){var e=t.reduce(function(t,e){var n;return M()({},t,(n={},s()(n,e.id,e.value),s()(n,"year",e.x),n))},{});return j.render(e)}}}}}}},167:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(177),s=n.n(a),i=n(110),M=n.n(i),u=n(55),r=n.n(u),o=n(56),c=n.n(o),L=n(178),l=n.n(L),w=n(394);n.n(w);e.default={name:"c3-line",props:{options:Object,data:{type:Object,required:!0},columns:{type:Object,required:!0},width:[Number,String],height:[Number,String],delay:{type:Number,default:30}},mounted:function(){var t=this,e=this.data,n=this.options,a=this.delay,i=this.columns,u=this.width,o=this.height,L=c()({bindto:this.$el,data:e},n);u&&o&&r()(L,{size:{width:u,height:o},oninit:function(){t.$el.style.width="100%",t.$el.style.height="100%",t.$el.style.maxHeight="none",t.svgEle=t.$el.querySelector("svg"),t.svgEle.setAttribute("viewBox","0 0 "+u+" "+o),t.svgEle.style.width="100%"},onrendered:function(){t.$el.style.maxHeight="none",t.svgEle.removeAttribute("width"),t.svgEle.removeAttribute("height")}}),this.chart=l.a.generate(L);var w=M()(i).map(function(t){return[t].concat(s()(i[t]))}),D=1;!function e(){D<=w[0].length&&setTimeout(function(){t.chart.load({columns:w.map(function(t){return t.slice(0,D)})}),D+=1,e()},a)}()}}},168:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"legend-base"}},169:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(151),s=n.n(a);e.default={components:{LegendBase:s.a},props:{label:String},name:"legend-line"}},170:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(151),s=n.n(a);e.default={components:{LegendBase:s.a},props:{label:String,color:String},name:"legend-rect"}},171:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(413),s=n.n(a);e.default={components:{GraphicalNetUser:s.a},name:"graphical"}},172:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"home"}},173:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(414),s=n.n(a);e.default={components:{NetUser:s.a},name:"simple"}},394:function(t,e){},395:function(t,e){},396:function(t,e){},397:function(t,e){},398:function(t,e){},399:function(t,e){},400:function(t,e){},401:function(t,e){},402:function(t,e){},403:function(t,e){},404:function(t,e){},405:function(t,e){},406:function(t,e){},407:function(t,e){},409:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MjguOTkgMTgxLjk5Ij48dGl0bGU+YnViYmxlPC90aXRsZT48cGF0aCBkPSJNNDI3LDczLjQ3QzQyNywyMi4yLDMzMS44NiwyLDIxNC41LDJTMiwyMi4yLDIsNzMuNDdjMCw0OS42MSw4OS4wNyw3MC4xMywyMDEuMTYsNzEuNDEsMS41MywxMC43OSwyLjg5LDI3LjQzLTEuNzIsMzUuMTIsMCwwLDE5LjEtMTguMSwyNS41Mi0zNS4xNEMzMzguNTIsMTQzLjQ2LDQyNywxMjIuOTEsNDI3LDczLjQ3WiIgc3R5bGU9ImZpbGw6I2ZmZjtzdHJva2U6IzFkMWQxYjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLXdpZHRoOjMuOTkzNzE5NDMxMDM0MzNweCIvPjwvc3ZnPg=="},410:function(t,e,n){t.exports=n.p+"static/img/computer.c10ddee.svg"},411:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDEgOTIiPjx0aXRsZT5nbG9iZTwvdGl0bGU+PHBhdGggZD0iTTIsNDIuNjdhNTksNTksMCwwLDEsMTkuNDMtMy4yOUg1Ny44MSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzFkMWQxYjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6My45OTc3MjcyMjk3ODMxM3B4Ii8+PHJlY3QgeD0iNDguMTMiIHk9IjM2LjQzIiB3aWR0aD0iMyIgaGVpZ2h0PSI2LjUzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5OS4yNiA3OS4zOSkgcm90YXRlKC0xODApIiBzdHlsZT0iZmlsbDojZmZmO3N0cm9rZTojMWQxZDFiO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDowLjk5OTQzMTgwNzQ0NTc4M3B4Ii8+PHBhdGggZD0iTTQxLjg1LDM1LjY4aDYuMjhWNDMuNUg0MS44NWMtMS42OCwwLTYtMS4zNi02LTNWMzguNzJDMzUuODIsMzcsNDAuMTcsMzUuNjgsNDEuODUsMzUuNjhaIiBzdHlsZT0iZmlsbDojZmQwO3N0cm9rZTojMWQxZDFiO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDowLjk5OTQzMTgwNzQ0NTc4M3B4Ii8+PGxpbmUgeDE9IjM4Ljg1IiB5MT0iMzguNzUiIHgyPSIzOC44NSIgeTI9IjM1LjgxIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMWQxZDFiO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDowLjk5OTQzMTgwNzQ0NTc4M3B4Ii8+PGxpbmUgeDE9IjQwLjM1IiB5MT0iNDMuOSIgeDI9IjQwLjM1IiB5Mj0iMzUuMjgiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMxZDFkMWI7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjAuOTk5NDMxODA3NDQ1NzgzcHgiLz48bGluZSB4MT0iNDEuODUiIHkxPSIzOC43NSIgeDI9IjQxLjg1IiB5Mj0iMzUuMjgiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMxZDFkMWI7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjAuOTk5NDMxODA3NDQ1NzgzcHgiLz48bGluZSB4MT0iMzguODUiIHkxPSI0MC40MiIgeDI9IjM4Ljg1IiB5Mj0iNDMuMzciIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMxZDFkMWI7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjAuOTk5NDMxODA3NDQ1NzgzcHgiLz48bGluZSB4MT0iNDEuODUiIHkxPSI0MC40MiIgeDI9IjQxLjg1IiB5Mj0iNDMuOSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzFkMWQxYjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6MC45OTk0MzE4MDc0NDU3ODNweCIvPjxyZWN0IHg9IjQ2LjEzIiB5PSIzOC43NSIgd2lkdGg9IjMuMDgiIGhlaWdodD0iMS44OSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTUuMzQgNzkuMzkpIHJvdGF0ZSgtMTgwKSIgc3R5bGU9ImZpbGw6I2ZmZjtzdHJva2U6IzFkMWQxYjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6MC45OTk0MzE4MDc0NDU3ODNweCIvPjxlbGxpcHNlIGN4PSI5NS4xMSIgY3k9IjQ2IiByeD0iNDQuODkiIHJ5PSI0NSIgc3R5bGU9ImZpbGw6I2ZkMDtzdHJva2U6IzFkMWQxYjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6MS45OTg4NjM2MTQ4OTE1N3B4Ii8+PHBhdGggZD0iTTEwMy41Miw5Ljc5bDIuNzYtMS40NC4wOS0uODYsMy4zNy00QTQ0Ljg1LDQ0Ljg1LDAsMCwwLDUwLjU2LDQwLjU1bDIuODctLjYyLDQuMzgtLjM5LS4wOS44NiwyLjU3LjI4TDYxLjQ1LDQ2bC0uODQsNy43Miw0LjE5LDEuMzMuMyw1LjI0LDUsMi4yOCwxLTEuNjIsMS43MS4xOUw3Ny4zNyw1OWw0LjI5LjQ3LDMsNC42NiwyLjU3LjI4LjY3LDEuODEsMS43MS4xOS4yOC0yLjU3LDktMy4zNiwzLjQzLjM3LDEtLjc2LDYuMTctOC44OCwxLjc5LTguNDlMMTA1LjY3LDMwbC0zLjgyLTQuNzYsMS43OS04LjQ5LDEuNzEuMTktLjU4LTIuNjctMy40My0uMzctMS45LDEuNTMtNC43Ny00LDUtNi40LDEuNjIsMUwxMDEsOC42NVoiIHN0eWxlPSJmaWxsOiNmMjkxMDA7c3Ryb2tlOiMxZDFkMWI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjAuOTk5NDMxODA3NDQ1NzgzcHgiLz48cGF0aCBkPSJNMTE1Ljg4LDU0LjIyczAsMC0uMDYsMCwwLS4wNiwwLS4wOWEuMTguMTgsMCwwLDAtLjA4LS4wOGwtLjEsMC0uMDksMC0uMDgsMC0uMDcsMGgtLjFsLS4wOCwwLS4wNS0uMDZhLjM1LjM1LDAsMCwxLS4xLS4xMWMtLjE0LDAtLjE0LDAtLjE1LS4wN2EuNDMuNDMsMCwwLDAtLjA1LS4xMS4xMy4xMywwLDAsMC0uMDktLjA2LjIzLjIzLDAsMCwwLS4xNCwwbC0uMTYuMTFhLjgxLjgxLDAsMCwwLS4xMy4xLjI3LjI3LDAsMCwwLDAsLjFsMCwuMDYtLjA1LDBMMTE0LDU0bC0uMTUsMC0uMjEuMDVhLjMyLjMyLDAsMCwwLS4xMS4wOGwtLjE5LjEzLS4xLjA2LS4xLjA5LS4xMS4xNC0uMTIuMTZhLjYxLjYxLDAsMCwwLS4xMS4xNC41NS41NSwwLDAsMCwwLC4xN2MwLC4wNSwwLC4wOSwwLC4xMmEuMzEuMzEsMCwwLDEsMCwuMDhsLS4wNS4wNnMtLjA1LjA5LS4wOC4xMmEuMTMuMTMsMCwwLDEtLjA5LDBsLS4wOCwwYS40OC40OCwwLDAsMC0uMDguMDkuODIuODIsMCwwLDAtLjEyLjE2Yy0uMDkuMTctLjE0LjI3LS4yLjM3bC0uMTUuMjZhMS4xNiwxLjE2LDAsMCwwLS4wNi4xNi45NC45NCwwLDAsMS0uMDguMTdjMCwuMDUtLjA3LjA5LS4xMS4xNnMtLjA4LjE2LS4xLjIyYS42NS42NSwwLDAsMS0uMDcuMTJsLS4wOC4xMS0uMDkuMTNhLjkyLjkyLDAsMCwwLS4xLjIuNTMuNTMsMCwwLDEtLjEzLjI1LDEuNTksMS41OSwwLDAsMC0uMi4yOSwxLjU2LDEuNTYsMCwwLDAtLjEuMjQuODkuODksMCwwLDAsMCwuMiwxLDEsMCwwLDAsMCwuMTdzMCwuMDksMCwuMTJhMS4wNywxLjA3LDAsMCwxLDAsLjEzYzAsLjA1LDAsLjEyLDAsLjE4czAsLjEsMCwuMTcsMCwuMTQsMCwuMjIsMCwuMTcsMCwuMjJhLjY5LjY5LDAsMCwwLDAsLjA5LDAsMCwwLDAsMCwwLDBzMCwwLDAsLjA2LDAsLjEyLDAsLjE3LDAsLjA3LjA5LjEzYTMuNDcsMy40NywwLDAsMSwuMjcuM2wuMi40YS44Ni44NiwwLDAsMCwuMDguMTNsMCwuMDhhLjA3LjA3LDAsMCwxLDAsMGgwYS4wNy4wNywwLDAsMCwwLDBzMCwwLDAsLjA5bC4xMS4xNC4wNy4wOC4wNS4wNSwwLDBhMCwwLDAsMCwxLDAsMGgwbDAsMHMwLDAsMCwwLDAsMCwwLDBsLjA3LDBoLjA2bDAsMCwuMDguMDUuMS4wNS4wNiwwczAsMCwwLDBsMCwwczAsMCwwLDBsMCwwLDAsMCwuMDYsMCwuMDguMDVjLjE0LjE0LjI2LjI0LjMyLjNsLjEuMDcsMCwuMDYuMTguMjhjMCwuMDYsMCwuMDcsMCwuMDlsMCwuMDgsMCwuMWEuMDcuMDcsMCwwLDAsMCwuMDVsLjA2LjA5YTEuMTMsMS4xMywwLDAsMSwuMS4xM3MwLC4wOSwwLC4xMSwwLDAsMCwwYS4xMy4xMywwLDAsMCwwLS4wNi4yNC4yNCwwLDAsMSwwLS4wN3MwLDAsMCwwbC4wOC4wOGMuMDksMCwuMDkuMDYuMDkuMDhhLjA5LjA5LDAsMCwwLDAsLjA1aDBzMCwwLDAsMGEuNzMuNzMsMCwwLDAsMC0uMTFzMC0uMDcsMC0uMTIsMC0uMTIsMC0uMTgsMC0uMDcuMDYtLjEsMCwwLDAsMGwwLDBhLjE4LjE4LDAsMCwxLDAtLjEyLDEuMjUsMS4yNSwwLDAsMCwwLS4zMy4zOS4zOSwwLDAsMSwwLS4yLjk0Ljk0LDAsMCwxLDAtLjE2LjcxLjcxLDAsMCwxLC4wNy0uMTEuNDIuNDIsMCwwLDAsMC0uMTQsMS4wNiwxLjA2LDAsMCwxLDAtLjEyczAtLjExLjA1LS4xN2EuNzguNzgsMCwwLDEsMC0uMTQsMS4xNiwxLjE2LDAsMCwxLC4xNy0uMjNsLjMxLS4zN2MuMDgtLjA5LjA5LS4xMS4wOS0uMTNhLjM5LjM5LDAsMCwwLDAtLjA2LjA3LjA3LDAsMCwxLDAtLjA3LjE2LjE2LDAsMCwxLC4wOSwwaC4wNnMwLDAsLjA3LS4xbC4xOS0uMzFhMS44NCwxLjg0LDAsMCwwLC4xNC0uMjMuMTQuMTQsMCwwLDAsMC0uMTEuNS41LDAsMCwxLDAtLjA5LjM2LjM2LDAsMCwxLDAtLjFzMCwwLC4wNi0uMTMuMDgtLjI0LjEtLjMzYS4zMi4zMiwwLDAsMCwwLS4xNS43LjcsMCwwLDEsMC0uMDguMDcuMDcsMCwwLDEsMCwwbDAtLjA1YS4xLjEsMCwwLDAsMC0uMDcuMzQuMzQsMCwwLDEsMC0uMS4xMy4xMywwLDAsMSwwLS4wOS40NC40NCwwLDAsMCwwLS4xNGMwLS4wOSwwLS4yNC4wNi0uMzdzMC0uMjMsMC0uMzEsMC0uMTIsMC0uMThhMSwxLDAsMCwxLDAtLjE2LDEuMDksMS4wOSwwLDAsMSwuMDYtLjEzLjA3LjA3LDAsMCwwLDAtLjA2bDAtLjA4YS4yNS4yNSwwLDAsMSwwLS4wOS41MS41MSwwLDAsMSwwLS4xbDAtLjExYS4wNy4wNywwLDAsMCwwLS4wNmwwLS4wOHMwLDAsLjA1LS4wNWwuMTgtLjE0czAsMCwwLS4wN2EuNS41LDAsMCwxLDAtLjA5LjE5LjE5LDAsMCwxLDAtLjA4LDEsMSwwLDAsMSwuMDYtLjEzLDEuNTcsMS41NywwLDAsMCwuMDktLjE0Ljc1Ljc1LDAsMCwwLDAtLjExczAsMCwwLS4wOCwwLS4wOCwwLS4xMmEuNTIuNTIsMCwwLDEsLjA2LS4xczAsMCwwLDBsMCwwLS4xLS4xMiwwLS4wNWEuMjEuMjEsMCwwLDEsMCwwczAtLjA4LDAtLjEyLDAtLjEsMC0uMTIsMCwwLDAtLjA2YS42OS42OSwwLDAsMSwwLS4xbDAtLjFhLjczLjczLDAsMCwxLC4wNy0uMTRsLjExLS4xNS4wNy0uMDdoLjA2bDAsMGEwLDAsMCwwLDAsMCwwLC4xLjEsMCwwLDAsMCwwWiIgc3R5bGU9ImZpbGw6I2YyOTEwMDtzdHJva2U6IzFkMWQxYjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6MC45OTk0MzE4MDc0NDU3ODNweCIvPjwvc3ZnPg=="},412:function(t,e,n){t.exports=n.p+"static/img/satellite.20a3901.svg"},413:function(t,e,n){function a(t){n(401),n(402)}var s=n(24)(n(165),n(424),a,"data-v-4a20403c",null);t.exports=s.exports},414:function(t,e,n){function a(t){n(396),n(397)}var s=n(24)(n(166),n(420),a,"data-v-1139bb11",null);t.exports=s.exports},415:function(t,e,n){function a(t){n(403)}var s=n(24)(n(169),n(425),a,"data-v-4a4f926c",null);t.exports=s.exports},416:function(t,e,n){function a(t){n(404)}var s=n(24)(n(170),n(426),a,"data-v-57e87748",null);t.exports=s.exports},417:function(t,e,n){function a(t){n(400)}var s=n(24)(n(171),n(423),a,"data-v-3c330794",null);t.exports=s.exports},418:function(t,e,n){function a(t){n(398)}var s=n(24)(n(172),n(421),a,"data-v-216f5f0c",null);t.exports=s.exports},419:function(t,e,n){function a(t){n(399)}var s=n(24)(n(173),n(422),a,"data-v-3742891f",null);t.exports=s.exports},420:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.$store.state.isLoaded?n("div",{staticClass:"container"},[n("div",{staticClass:"chart-title"},[n("h2",[t._v("12歲以上上網率及上網人口")]),t._v(" "),n("legend-line",{attrs:{label:"上網率"}}),t._v(" "),n("legend-rect",{attrs:{label:"上網人口",color:t.color}})],1),t._v(" "),n("div",{staticStyle:{position:"relative"}},[n("line-chart",{attrs:{columns:t.columns,data:t.data,options:t.options}}),t._v(" "),t._m(0)],1)]):t._e()},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tilde-sign"},[n("img",{attrs:{src:"/static/tilde.svg",alt:""}})])}]}},421:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div")},staticRenderFns:[]}},422:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("net-user")],1)},staticRenderFns:[]}},423:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("graphical-net-user")],1)},staticRenderFns:[]}},424:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.$store.state.isLoaded?n("div",{staticClass:"container"},[n("div",{staticClass:"chart-container font-round",style:t.containerStyle},[n("div",{style:t.chartStyle},[n("line-chart",{attrs:{columns:t.columns,data:t.data,options:t.options,width:t.chartLayer.width,height:t.chartLayer.height}}),t._v(" "),t._m(0)],1),t._v(" "),t._l(t.layers,function(e){return n("div",{style:e},["bubble"===e.name?n("div",{staticClass:"bubble-title font-round"},[t._v("個人上網率")]):t._e()])})],2)]):t._e()},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tilde-sign"},[n("img",{attrs:{src:"/static/tilde.svg",alt:""}})])}]}},425:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("legend-base",[n("span",{staticClass:"legend-line",slot:"legend"}),t._v("\n  "+t._s(t.label)+"\n")])},staticRenderFns:[]}},426:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("legend-base",[n("span",{staticClass:"legend-rect",style:{background:t.color},slot:"legend"}),t._v("\n  "+t._s(t.label)+"\n")])},staticRenderFns:[]}},427:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",[n("ul",[n("li",[n("router-link",{attrs:{to:"/simple"}},[t._v("Simple")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/graphical"}},[t._v("Graphical")])],1)])]),t._v(" "),t.$store.state.isLoaded?t._e():n("p",[t._v("\n    loading...\n  ")]),t._v(" "),n("router-view")],1)},staticRenderFns:[]}},428:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div")},staticRenderFns:[]}},429:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"legend-wrapper"},[n("span",{staticClass:"legend"},[t._t("legend")],2),t._v(" "),n("span",{staticClass:"legend-label"},[t._t("default")],2)])},staticRenderFns:[]}},433:function(t,e){t.exports={name:"linchart_0626.ai",width:842,height:596,layers:[{x:"177",y:"179",r:"620.42",b:"510.10",width:"442",height:"350",layername:"chart.png",name:"chart",type:"png",filename:"chart.png",visible:!0,items:[]},{x:"-7",y:"292",r:"207.57",b:"475.01",width:"216",height:"206",layername:"computer.png",name:"computer",type:"png",filename:"computer.png",visible:!0,items:[]},{x:"600",y:"157",r:"757.67",b:"237.33",width:"141",height:"92",layername:"globe.png",name:"globe",type:"png",filename:"globe.png",visible:!0,items:[]},{x:"547",y:"278",r:"927.95",b:"478.39",width:"450.94",height:"189.74",layername:"satellite.png",name:"satellite",type:"png",filename:"satellite.png",visible:!0,items:[]},{x:"206.04",y:"20.65",r:"635.85",b:"202.86",width:"429.81",height:"182.21",layername:"bubble.png",name:"bubble",type:"png",filename:"bubble.png",visible:!0,items:[]}]}}},[163]);
//# sourceMappingURL=app.bf211167bf4296f0e144.js.map