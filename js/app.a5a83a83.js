(function(t){function e(e){for(var r,a,c=e[0],s=e[1],u=e[2],l=0,d=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);p&&p(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,c=1;c<n.length;c++){var s=n[c];0!==i[s]&&(r=!1)}r&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},i={app:0},o=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var p=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"1dd6":function(t,e,n){"use strict";n("dfb2")},"322b":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h2",{staticClass:"thisisme"},[t._v(t._s(t.whoisme))]),n("hr",{staticClass:"separator separator--line glow"}),n("h3",{staticClass:"myintro"},[t._v("A place for you to know me better ...")]),n("b-container",{attrs:{fluid:"xl"}},[n("b-row",t._l(t.projList,(function(t,e){return n("myProject",{key:e,attrs:{pname:t.projName,plink:t.link,pimg:t.pimg,pdura:t.pdura}})})),1)],1)],1)},o=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-col",{staticClass:"card-block",attrs:{md:"6",lg:"4",xl:"3"}},[n("div",{staticClass:"project-border"},[n("h4",[t._v("Project Name:")]),n("h5",{staticClass:"ans"},[t._v(t._s(t.pname))]),n("h4",[t._v("Duration:")]),n("h5",{staticClass:"ans"},[t._v(t._s(t.pdura))]),n("div",{staticClass:"imgdiv"},[n("b-img",{attrs:{thumbnail:"",rounded:"",src:t.getImageUrl(),fluid:"",alt:"Failed To Load Image!"}})],1),n("b-button",{attrs:{pill:"",variant:"outline-success"},on:{click:function(e){return t.openAction()}}},[t._v("Visit Site")])],1)])},c=[],s={props:["pname","plink","pimg","pdura"],data:function(){return{myProject:{}}},methods:{openAction:function(){window.open(this.plink)},getImageUrl:function(){return"".concat(this.pimg)}},created:function(){}},u=s,p=(n("1dd6"),n("2877")),l=Object(p["a"])(u,a,c,!1,null,"509d639e",null),d=l.exports,f={name:"app",data:function(){return{whoisme:"Walladon Turabhakpibul",projList:[{projName:"Online Service Web",link:"https://www.thaiins.co.th/UATOnlineServiceWeb/",pimg:"https://i.ibb.co/R46KD70/OLS.png",pdura:"3 Months"},{projName:"Claim Tracking Web",link:"https://www.thaiins.co.th/claimcheck/index?utm_source=LINE&utm_medium=richmenu&utm_campaign=claim",pimg:"https://i.ibb.co/BtXQRtR/CTW.png",pdura:"1 Week"},{projName:"ttb Tablet (UAT)",link:"https://app1.thaiins.co.th/UATThaiInsTMBInsuranceWeb/authen/gotoTmbLogin",pimg:"https://i.ibb.co/cFpC5Gh/ttb.png",pdura:"4 Months"},{projName:"Tic The Surveyor (UAT)",link:"https://cc.stage.insurtech.in.th/",pimg:"https://i.ibb.co/4tBf4pC/IST.png",pdura:"5 Months"}]}},components:{myProject:d}},h=f,m=(n("034f"),n("7d60"),Object(p["a"])(h,i,o,!1,null,"3e2c1608",null)),b=m.exports,g=n("ea9a");n("32f0"),n("60d7");r["a"].use(g["a"]),new r["a"]({render:function(t){return t(b)}}).$mount("#app")},"7d60":function(t,e,n){"use strict";n("322b")},"85ec":function(t,e,n){},dfb2:function(t,e,n){}});
//# sourceMappingURL=app.a5a83a83.js.map