(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(8431)}])},6416:function(e,t,r){"use strict";var n=r(5893),a=r(3476),s=r.n(a);t.Z=function(e){var t=e.children;return(0,n.jsx)("div",{className:s().container,children:t})}},2824:function(e,t,r){"use strict";var n=r(5893),a=r(9199),s=r.n(a);t.Z=function(){return(0,n.jsx)("header",{className:s().wrapper,children:(0,n.jsx)("div",{className:s().header,children:(0,n.jsx)("a",{href:"/",children:(0,n.jsx)("img",{src:"/assets/Plot_Logo_Black.svg",alt:"Plot Logo"})})})})}},8431:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return z}});var n=r(5666),a=r.n(n),s=r(5893),i=r(7294),o=r(9669),c=r.n(o),l=r(5218),u=r(2824),d=r(8859),h=r.n(d),m=function(e){var t=e.children;return(0,s.jsx)("div",{className:h().alert,children:(0,s.jsx)("div",{className:h().header,children:t})})},p=r(4758),f=r.n(p),v=function(){return(0,s.jsxs)("div",{className:f().wrapper,children:[(0,s.jsx)("a",{href:"/",children:(0,s.jsx)("img",{className:f().discord,src:"/assets/discord.png",alt:"discord Logo"})}),(0,s.jsx)("a",{href:"/",children:(0,s.jsx)("img",{className:f().reddit,src:"/assets/reddit.png",alt:"Reddit Logo"})}),(0,s.jsx)("a",{href:"/",children:(0,s.jsx)("img",{className:f().twitter,src:"/assets/twitter.png",alt:"twitter Logo"})})]})},x=r(9210),w=r.n(x),_=function(){var e=(new Date).getFullYear();return(0,s.jsxs)("footer",{className:w().footer,children:[(0,s.jsx)("p",{children:"Follow Us"}),(0,s.jsx)(v,{}),(0,s.jsxs)("p",{children:["\xa9Plot. ",e,"."]})]})},j=r(7495),g=r(4038),b=r.n(g);function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,a=!1,s=void 0;try{for(var i,o=e[Symbol.iterator]();!(n=(i=o.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(c){a=!0,s=c}finally{try{n||null==o.return||o.return()}finally{if(a)throw s}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var N=function(e){var t=e.chainState,r=(0,j.K)().activateBrowserWallet,n=y(t,2),a=n[0],o=n[1],c=y((0,l.a)(),1)[0];return i.useEffect((function(){(window.ethereum?window.ethereum:void 0)&&(a||window.ethereum.on("chainChanged",(function(e){o(e)})),c.wallet&&!a&&o(window.ethereum.networkVersion))}),[a,o,c]),(0,s.jsxs)("div",{className:"".concat(b().wrapper," ").concat(c.wallet?"":b().notLogin),children:[!c.wallet&&(0,s.jsx)("button",{className:b().button,onClick:function(){return r()},children:"Connect Metamask"}),c.wallet&&(0,s.jsx)("div",{children:(0,s.jsx)("div",{children:(0,s.jsx)("p",{className:b().header,children:"Your Metamask is now connected."})})})]})},k=r(5667),S=r.n(k);function M(e,t,r,n,a,s,i){try{var o=e[s](i),c=o.value}catch(l){return void r(l)}o.done?t(c):Promise.resolve(c).then(n,a)}function C(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,a=!1,s=void 0;try{for(var i,o=e[Symbol.iterator]();!(n=(i=o.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(c){a=!0,s=c}finally{try{n||null==o.return||o.return()}finally{if(a)throw s}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var E=function(){var e,t=C(i.useState(""),2),r=t[0],n=t[1],o=C(i.useState(""),2),u=o[0],d=o[1],h=C((0,l.a)(),2),m=h[0],p=h[1],f=(e=a().mark((function e(t){var s,i,o,l,u;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!r.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){e.next=26;break}return s={wallet:m.wallet,email:r},p({type:"submitting"}),e.prev=5,e.next=8,c().post("/api/mailing",{email:r});case 8:if(i=e.sent,!(o=i.data).error){e.next=14;break}d(o.error),p({type:"failed"}),e.next=19;break;case 14:return e.next=16,c().put("/api/whitelist",s);case 16:l=e.sent,(u=l.data).error?(d(u.error),p({type:"failed"})):(n(""),d(u.message),p({type:"success",payload:{wallet:u.data.wallet,mailingStatus:u.data.mailingStatus}}));case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(5),console.error(e.t0);case 24:e.next=27;break;case 26:d("Enter valid email");case 27:case"end":return e.stop()}}),e,null,[[5,21]])})),function(){var t=this,r=arguments;return new Promise((function(n,a){var s=e.apply(t,r);function i(e){M(s,n,a,i,o,"next",e)}function o(e){M(s,n,a,i,o,"throw",e)}i(void 0)}))});return m.wallet?"registered"===m.mailingStatus?(0,s.jsx)("div",{className:S().wrapper,children:"We will notify you. Keep on waiting."}):(0,s.jsxs)("div",{className:S().wrapper,children:[(0,s.jsx)("p",{children:"If you want to be notified about the release on February the 1st of 2022, leave us you E-Mail below."}),(0,s.jsx)("p",{children:"Your E-Mail will not be connected to your Metamask and stored separately."}),(0,s.jsxs)("form",{className:S().form,onSubmit:f,children:[(0,s.jsxs)("div",{className:S().formGroup,children:[(0,s.jsx)("label",{htmlFor:"email",children:"Email"}),(0,s.jsx)("input",{type:"email",name:"email",id:"email",onChange:function(e){n(e.target.value),u.length&&d("")},placeholder:"name@mail.com",value:r,required:!0}),(0,s.jsx)("span",{children:u})]}),(0,s.jsx)("button",{className:S().button,type:"submit",disabled:"submitting"===m.status,children:"submitting"===m.status?"Submitting...":"Subscribe"})]})]}):null},L=r(6416),B=r(8130),A=r(6759),P=r.n(A),D=function(e){var t=e.days,r=e.hours,n=e.minutes,a=e.seconds;return(0,s.jsxs)("div",{className:P().counterWrapper,children:[(0,s.jsxs)("div",{className:P().counterBox,children:[(0,s.jsx)("div",{className:P().time,children:t}),(0,s.jsx)("div",{className:P().label,children:"Days"})]}),(0,s.jsx)("div",{className:P().timeDivider,children:":"}),(0,s.jsxs)("div",{className:P().counterBox,children:[(0,s.jsxs)("div",{className:P().time,children:[" ",r]}),(0,s.jsx)("div",{className:P().label,children:"Hours"})]}),(0,s.jsx)("div",{className:P().timeDivider,children:":"}),(0,s.jsxs)("div",{className:P().counterBox,children:[(0,s.jsx)("div",{className:P().time,children:n}),(0,s.jsx)("div",{className:P().label,children:"Minutes"})]}),(0,s.jsx)("div",{className:P().timeDivider,children:":"}),(0,s.jsxs)("div",{className:P().counterBox,children:[(0,s.jsx)("div",{className:P().time,children:a}),(0,s.jsx)("div",{className:P().label,children:"Seconds"})]})]})},F=function(){return(0,s.jsx)(B.ZP,{date:new Date(2022,1,1),renderer:D,children:(0,s.jsx)("h2",{children:"We have launched!"})})};function W(e,t,r,n,a,s,i){try{var o=e[s](i),c=o.value}catch(l){return void r(l)}o.done?t(c):Promise.resolve(c).then(n,a)}function Z(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var s=e.apply(t,r);function i(e){W(s,n,a,i,o,"next",e)}function o(e){W(s,n,a,i,o,"throw",e)}i(void 0)}))}}function T(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,a=!1,s=void 0;try{for(var i,o=e[Symbol.iterator]();!(n=(i=o.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(c){a=!0,s=c}finally{try{n||null==o.return||o.return()}finally{if(a)throw s}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var z=function(){var e=T(i.useState(null),2),t=e[0],r=e[1],n=T(i.useState(!1),2),o=n[0],d=n[1],h=T((0,l.a)(),2),p=h[0],f=h[1],v=Z(a().mark((function e(t){var r,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c().get("https://chainid.network/chains_mini.json");case 3:return r=e.sent.data,n=r.find((function(e){return e.chainId===t})),e.abrupt("return",n.name);case 8:return e.prev=8,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[0,8]])}))),x=Z(a().mark((function e(t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c().get("/api/whitelist?wallet=".concat(t));case 3:return r=e.sent.data,e.abrupt("return",r.data[0]);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return i.useEffect((function(){var e=window.ethereum?window.ethereum:void 0;e?("idle"===p.status&&e.on("accountsChanged",Z(a().mark((function t(r){var n,s,i,o,l;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(f({type:"loading"}),!r.length){t.next=27;break}return t.next=4,x(r[0]);case 4:if(n=t.sent){t.next=24;break}return s=Number(e.networkVersion),t.next=9,v(s);case 9:return i=t.sent,o={wallet:r[0],network:{chainId:s,chainName:i||""}},t.prev=11,t.next=14,c().post("/api/whitelist",o);case 14:l=t.sent.data,console.log("success adding wallet address to whitelist"),f({type:"success",payload:{wallet:l.data.wallet,mailingStatus:l.data.mailingStatus}}),t.next=22;break;case 19:t.prev=19,t.t0=t.catch(11),console.error(t.t0);case 22:t.next=25;break;case 24:f({type:"success",payload:{wallet:n.wallet,mailingStatus:n.mailingStatus}});case 25:t.next=28;break;case 27:f({type:"logout"});case 28:case"end":return t.stop()}}),t,null,[[11,19]])})))),Z(a().mark((function t(){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.selectedAddress||"idle"!==p.status){t.next=6;break}return f({type:"loading"}),t.next=4,x(e.selectedAddress);case 4:r=t.sent,f(r?{type:"success",payload:{wallet:r.wallet,mailingStatus:r.mailingStatus}}:{type:"success",payload:{wallet:p.wallet,mailingStatus:p.mailingStatus}});case 6:case"end":return t.stop()}}),t)})))()):d(!0)}),[t,f,p]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(u.Z,{}),(0,s.jsx)(L.Z,{children:"loading"===p.status?(0,s.jsx)("h3",{className:"loading",children:"Loading..."}):(0,s.jsxs)(s.Fragment,{children:[o?(0,s.jsxs)(m,{children:["Please install metamask to use Web3 Service,"," ",(0,s.jsx)("a",{href:"https://metamask.io/",children:"https://metamask.io/"})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(N,{chainState:[t,r]}),p.wallet&&(0,s.jsx)(E,{})]}),(0,s.jsx)(F,{})]})}),(0,s.jsx)(_,{})]})}},8859:function(e){e.exports={alert:"Alert_alert__WCmrJ"}},3476:function(e){e.exports={container:"Container_container__B3zyu"}},6759:function(e){e.exports={counterWrapper:"Counter_counterWrapper__vjjUJ",counterBox:"Counter_counterBox__VVqPs",time:"Counter_time__eLsNf",label:"Counter_label__LjzcG",timeDivider:"Counter_timeDivider__XbMhL"}},9210:function(e){e.exports={footer:"Footer_footer__Dhw_9"}},4758:function(e){e.exports={wrapper:"SocialMedia_wrapper__4yWOy",twitter:"SocialMedia_twitter__U68ME",discord:"SocialMedia_discord__1VSlK",reddit:"SocialMedia_reddit__M_Xju"}},5667:function(e){e.exports={wrapper:"Form_wrapper__8D3n_",form:"Form_form__ictTD",formGroup:"Form_formGroup__bbArs",button:"Form_button__LTzWN"}},9199:function(e){e.exports={header:"Header_header__Z8PUO",pin:"Header_pin__TM8Cv",wrapper:"Header_wrapper__KxwYn",button:"Header_button__fzu3_"}},4038:function(e){e.exports={wrapper:"MetamaskButton_wrapper__BCN5q",notLogin:"MetamaskButton_notLogin__AMnhb",wrapperLogin:"MetamaskButton_wrapperLogin__jpw10",button:"MetamaskButton_button__CpzZN"}}},function(e){e.O(0,[532,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);