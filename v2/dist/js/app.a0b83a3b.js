(function(t){function e(e){for(var a,l,i=e[0],r=e[1],c=e[2],u=0,p=[];u<i.length;u++)l=i[u],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&p.push(n[l][0]),n[l]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);d&&d(e);while(p.length)p.shift()();return s.push.apply(s,c||[]),o()}function o(){for(var t,e=0;e<s.length;e++){for(var o=s[e],a=!0,i=1;i<o.length;i++){var r=o[i];0!==n[r]&&(a=!1)}a&&(s.splice(e--,1),t=l(l.s=o[0]))}return t}var a={},n={app:0},s=[];function l(e){if(a[e])return a[e].exports;var o=a[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.m=t,l.c=a,l.d=function(t,e,o){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(o,a,function(e){return t[e]}.bind(null,a));return o},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],r=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var d=r;s.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"56d7":function(t,e,o){"use strict";o.r(e);var a=o("2b0e"),n=(o("ab8b"),o("7b17"),function(){var t=this,e=t._self._c;return e("div",{staticClass:"container",staticStyle:{height:"100%"},attrs:{id:"app"}},[e("div",{staticClass:"row",staticStyle:{height:"200px"}}),e("div",{staticClass:"row",staticStyle:{height:"100%"}},[e("div",{staticClass:"col-3"}),e("div",{staticClass:"col-6 well"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("form",{staticClass:"row g-3"},[e("div",{staticClass:"col-6"},[e("label",{staticClass:"visually-hidden",attrs:{for:"staticEmail2"}},[t._v("Phone")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"form-control",attrs:{type:"text",id:"phone",placeholder:"phone number"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})]),e("div",{staticClass:"col-3"},[t.isIdle?e("a",{staticClass:"btn btn-primary col-12",on:{click:function(e){return t.call()}}},[t._v("Call")]):t._e(),t.isCall?e("button",{staticClass:"btn btn-danger col-12",attrs:{type:"submit"}},[t._v("End")]):t._e()]),t._m(0)])])])]),e("div",{staticClass:"col-3"})]),t._m(1)])}),s=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-3"},[e("button",{staticClass:"btn btn-outline-secondary col-12",attrs:{type:"button","data-bs-toggle":"modal","data-bs-target":"#staticBackdrop"}},[t._v(" Settings ")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal fade",attrs:{id:"staticBackdrop","data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-dialog-centered modal-dialog-scrollable"},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("h1",{staticClass:"modal-title fs-5",attrs:{id:"staticBackdropLabel"}},[t._v("Settings")]),e("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}})]),e("div",{staticClass:"modal-body"},[e("div",{staticClass:"mb-3"},[e("label",{staticClass:"form-label",attrs:{for:"exampleFormControlInput1"}},[t._v("Email address")]),e("input",{staticClass:"form-control",attrs:{type:"email",id:"exampleFormControlInput1",placeholder:"name@example.com"}})]),e("div",{staticClass:"mb-3"},[e("label",{staticClass:"form-label",attrs:{for:"exampleFormControlTextarea1"}},[t._v("Example textarea")]),e("textarea",{staticClass:"form-control",attrs:{id:"exampleFormControlTextarea1",rows:"3"}})])]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-bs-dismiss":"modal"}},[t._v("Close")]),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v("Save")])])])])])}],l=o("9715"),i=o.n(l);i.a.debug.enable("JsSIP:*");var r={iceServers:[{urls:["turn:62.109.24.81:3478"],username:"user1",credential:"password1"}],iceTransportPolicy:"relay"};function c(t){if(t&&""!==t){var e={progress:function(t){console.log("call is in progress",t)},failed:function(t){console.log("call failed with cause: ",t)},ended:function(t){console.log("call ended with cause: ",t)},confirmed:function(t){console.log("call confirmed",t)},peerconnection:function(t){console.log("peerconnection",t),t.peerconnection.onaddstream=function(t){console.log(" *** addstream",t);var e=document.createElement("audio");document.body.appendChild(e),e.srcObject=t.stream,e.play()}}},o={eventHandlers:e,mediaConstraints:{audio:!0,video:!1},rtcpMuxPolicy:"negotiate",rtcOfferConstraints:{offerToReceiveAudio:!0},pcConfig:r};console.log("call");var a=p.call("sip:"+t+"@62.109.24.81",o);console.log("call",a)}}var d=new i.a.WebSocketInterface("wss://serge.dmitriev.fvds.ru:8089/ws"),u={sockets:[d],uri:"sip:103@62.109.24.81",password:"zxcv1234",register:!0,register_expires:120},p=new i.a.UA(u);p.start(),p.on("newRTCSession",(function(t){console.log("new session",t);var e={mediaConstraints:{audio:!0,video:!1},pcConfig:r},o=t.session;console.log("session",o,o.direction),o.on("accepted",(function(t){console.log("accepted",t)})),o.on("confirmed",(function(t){console.log("confirmed",t)})),o.on("ended",(function(){console.log("ended")})),o.on("failed",(function(){console.log("failed")})),o.on("peerconnection:createanswerfailed",(function(t){console.log("peerconnection:createanswerfailed",t)})),o.on("icecandidate",(function(t){console.log("icecandidate",t)})),o.on("getusermediafailed",(function(t){console.log("getusermediafailed",t)})),o.on("peerconnection",(function(t){console.log("peerconnection",t),t.peerconnection.onaddstream=function(t){console.log(" *** addstream",t);var e=document.createElement("audio");document.body.appendChild(e),e.srcObject=t.stream,e.play()}})),"incoming"===o.direction&&(console.log("incoming call, try answer"),o.answer(e))}));var f={name:"App",data(){return{phone:"",isCall:!1,isIdle:!0}},methods:{call(){c(this.phone)}}},m=f,b=o("2877"),v=Object(b["a"])(m,n,s,!1,null,null,null),g=v.exports;a["a"].config.productionTip=!1,new a["a"]({render:t=>t(g)}).$mount("#app")}});
//# sourceMappingURL=app.a0b83a3b.js.map