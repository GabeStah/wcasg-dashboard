webpackJsonp([1],{

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.swal=e():t.swal=e()}(this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=8)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o="swal-button";e.CLASS_NAMES={MODAL:"swal-modal",OVERLAY:"swal-overlay",SHOW_MODAL:"swal-overlay--show-modal",MODAL_TITLE:"swal-title",MODAL_TEXT:"swal-text",ICON:"swal-icon",ICON_CUSTOM:"swal-icon--custom",CONTENT:"swal-content",FOOTER:"swal-footer",BUTTON_CONTAINER:"swal-button-container",BUTTON:o,CONFIRM_BUTTON:o+"--confirm",CANCEL_BUTTON:o+"--cancel",DANGER_BUTTON:o+"--danger",BUTTON_LOADING:o+"--loading",BUTTON_LOADER:o+"__loader"},e.default=e.CLASS_NAMES},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getNode=function(t){var e="."+t;return document.querySelector(e)},e.stringToNode=function(t){var e=document.createElement("div");return e.innerHTML=t.trim(),e.firstChild},e.insertAfter=function(t,e){var n=e.nextSibling;e.parentNode.insertBefore(t,n)},e.removeNode=function(t){t.parentElement.removeChild(t)},e.throwErr=function(t){throw t=t.replace(/ +(?= )/g,""),"SweetAlert: "+(t=t.trim())},e.isPlainObject=function(t){if("[object Object]"!==Object.prototype.toString.call(t))return!1;var e=Object.getPrototypeOf(t);return null===e||e===Object.prototype},e.ordinalSuffixOf=function(t){var e=t%10,n=t%100;return 1===e&&11!==n?t+"st":2===e&&12!==n?t+"nd":3===e&&13!==n?t+"rd":t+"th"}},function(t,e,n){"use strict";function o(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}Object.defineProperty(e,"__esModule",{value:!0}),o(n(25));var r=n(26);e.overlayMarkup=r.default,o(n(27)),o(n(28)),o(n(29));var i=n(0),a=i.default.MODAL_TITLE,s=i.default.MODAL_TEXT,c=i.default.ICON,l=i.default.FOOTER;e.iconMarkup='\n  <div class="'+c+'"></div>',e.titleMarkup='\n  <div class="'+a+'"></div>\n',e.textMarkup='\n  <div class="'+s+'"></div>',e.footerMarkup='\n  <div class="'+l+'"></div>\n'},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1);e.CONFIRM_KEY="confirm",e.CANCEL_KEY="cancel";var r={visible:!0,text:null,value:null,className:"",closeModal:!0},i=Object.assign({},r,{visible:!1,text:"Cancel",value:null}),a=Object.assign({},r,{text:"OK",value:!0});e.defaultButtonList={cancel:i,confirm:a};var s=function(t){switch(t){case e.CONFIRM_KEY:return a;case e.CANCEL_KEY:return i;default:var n=t.charAt(0).toUpperCase()+t.slice(1);return Object.assign({},r,{text:n,value:t})}},c=function(t,e){var n=s(t);return!0===e?Object.assign({},n,{visible:!0}):"string"==typeof e?Object.assign({},n,{visible:!0,text:e}):o.isPlainObject(e)?Object.assign({visible:!0},n,e):Object.assign({},n,{visible:!1})},l=function(t){for(var e={},n=0,o=Object.keys(t);n<o.length;n++){var r=o[n],a=t[r],s=c(r,a);e[r]=s}return e.cancel||(e.cancel=i),e},u=function(t){var n={};switch(t.length){case 1:n[e.CANCEL_KEY]=Object.assign({},i,{visible:!1});break;case 2:n[e.CANCEL_KEY]=c(e.CANCEL_KEY,t[0]),n[e.CONFIRM_KEY]=c(e.CONFIRM_KEY,t[1]);break;default:o.throwErr("Invalid number of 'buttons' in array ("+t.length+").\n      If you want more than 2 buttons, you need to use an object!")}return n};e.getButtonListOpts=function(t){var n=e.defaultButtonList;return"string"==typeof t?n[e.CONFIRM_KEY]=c(e.CONFIRM_KEY,t):Array.isArray(t)?n=u(t):o.isPlainObject(t)?n=l(t):!0===t?n=u([!0,!0]):!1===t?n=u([!1,!1]):void 0===t&&(n=e.defaultButtonList),n}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(2),i=n(0),a=i.default.MODAL,s=i.default.OVERLAY,c=n(30),l=n(31),u=n(32),f=n(33);e.injectElIntoModal=function(t){var e=o.getNode(a),n=o.stringToNode(t);return e.appendChild(n),n};var d=function(t){t.className=a,t.textContent=""},p=function(t,e){d(t);var n=e.className;n&&t.classList.add(n)};e.initModalContent=function(t){var e=o.getNode(a);p(e,t),c.default(t.icon),l.initTitle(t.title),l.initText(t.text),f.default(t.content),u.default(t.buttons,t.dangerMode)};var m=function(){var t=o.getNode(s),e=o.stringToNode(r.modalMarkup);t.appendChild(e)};e.default=m},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),r={isOpen:!1,promise:null,actions:{},timer:null},i=Object.assign({},r);e.resetState=function(){i=Object.assign({},r)},e.setActionValue=function(t){if("string"==typeof t)return a(o.CONFIRM_KEY,t);for(var e in t)a(e,t[e])};var a=function(t,e){i.actions[t]||(i.actions[t]={}),Object.assign(i.actions[t],{value:e})};e.setActionOptionsFor=function(t,e){var n=(void 0===e?{}:e).closeModal,o=void 0===n||n;Object.assign(i.actions[t],{closeModal:o})},e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(3),i=n(0),a=i.default.OVERLAY,s=i.default.SHOW_MODAL,c=i.default.BUTTON,l=i.default.BUTTON_LOADING,u=n(5);e.openModal=function(){o.getNode(a).classList.add(s),u.default.isOpen=!0};var f=function(){o.getNode(a).classList.remove(s),u.default.isOpen=!1};e.onAction=function(t){void 0===t&&(t=r.CANCEL_KEY);var e=u.default.actions[t],n=e.value;if(!1===e.closeModal){var i=c+"--"+t;o.getNode(i).classList.add(l)}else f();u.default.promise.resolve(n)},e.getState=function(){var t=Object.assign({},u.default);return delete t.promise,delete t.timer,t},e.stopLoading=function(){for(var t=document.querySelectorAll("."+c),e=0;e<t.length;e++){t[e].classList.remove(l)}}},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){(function(e){t.exports=e.sweetAlert=n(9)}).call(e,n(7))},function(t,e,n){(function(e){t.exports=e.swal=n(10)}).call(e,n(7))},function(t,e,n){"undefined"!=typeof window&&n(11),n(16);var o=n(23).default;t.exports=o},function(t,e,n){var o=n(12);"string"==typeof o&&(o=[[t.i,o,""]]);var r={insertAt:"top"};r.transform=void 0;n(14)(o,r);o.locals&&(t.exports=o.locals)},function(t,e,n){e=t.exports=n(13)(void 0),e.push([t.i,'.swal-icon--error{border-color:#f27474;-webkit-animation:animateErrorIcon .5s;animation:animateErrorIcon .5s}.swal-icon--error__x-mark{position:relative;display:block;-webkit-animation:animateXMark .5s;animation:animateXMark .5s}.swal-icon--error__line{position:absolute;height:5px;width:47px;background-color:#f27474;display:block;top:37px;border-radius:2px}.swal-icon--error__line--left{-webkit-transform:rotate(45deg);transform:rotate(45deg);left:17px}.swal-icon--error__line--right{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);right:16px}@-webkit-keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@-webkit-keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}@keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}.swal-icon--warning{border-color:#f8bb86;-webkit-animation:pulseWarning .75s infinite alternate;animation:pulseWarning .75s infinite alternate}.swal-icon--warning__body{width:5px;height:47px;top:10px;border-radius:2px;margin-left:-2px}.swal-icon--warning__body,.swal-icon--warning__dot{position:absolute;left:50%;background-color:#f8bb86}.swal-icon--warning__dot{width:7px;height:7px;border-radius:50%;margin-left:-4px;bottom:-11px}@-webkit-keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}@keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}.swal-icon--success{border-color:#a5dc86}.swal-icon--success:after,.swal-icon--success:before{content:"";border-radius:50%;position:absolute;width:60px;height:120px;background:#fff;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal-icon--success:before{border-radius:120px 0 0 120px;top:-7px;left:-33px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:60px 60px;transform-origin:60px 60px}.swal-icon--success:after{border-radius:0 120px 120px 0;top:-11px;left:30px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 60px;transform-origin:0 60px;-webkit-animation:rotatePlaceholder 4.25s ease-in;animation:rotatePlaceholder 4.25s ease-in}.swal-icon--success__ring{width:80px;height:80px;border:4px solid hsla(98,55%,69%,.2);border-radius:50%;box-sizing:content-box;position:absolute;left:-4px;top:-4px;z-index:2}.swal-icon--success__hide-corners{width:5px;height:90px;background-color:#fff;padding:1px;position:absolute;left:28px;top:8px;z-index:1;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal-icon--success__line{height:5px;background-color:#a5dc86;display:block;border-radius:2px;position:absolute;z-index:2}.swal-icon--success__line--tip{width:25px;left:14px;top:46px;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-animation:animateSuccessTip .75s;animation:animateSuccessTip .75s}.swal-icon--success__line--long{width:47px;right:8px;top:38px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-animation:animateSuccessLong .75s;animation:animateSuccessLong .75s}@-webkit-keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@-webkit-keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}@keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}.swal-icon--info{border-color:#c9dae1}.swal-icon--info:before{width:5px;height:29px;bottom:17px;border-radius:2px;margin-left:-2px}.swal-icon--info:after,.swal-icon--info:before{content:"";position:absolute;left:50%;background-color:#c9dae1}.swal-icon--info:after{width:7px;height:7px;border-radius:50%;margin-left:-3px;top:19px}.swal-icon{width:80px;height:80px;border-width:4px;border-style:solid;border-radius:50%;padding:0;position:relative;box-sizing:content-box;margin:20px auto}.swal-icon:first-child{margin-top:32px}.swal-icon--custom{width:auto;height:auto;max-width:100%;border:none;border-radius:0}.swal-icon img{max-width:100%;max-height:100%}.swal-title{color:rgba(0,0,0,.65);font-weight:600;text-transform:none;position:relative;display:block;padding:13px 16px;font-size:27px;line-height:normal;text-align:center;margin-bottom:0}.swal-title:first-child{margin-top:26px}.swal-title:not(:first-child){padding-bottom:0}.swal-title:not(:last-child){margin-bottom:13px}.swal-text{font-size:16px;position:relative;float:none;line-height:normal;vertical-align:top;text-align:left;display:inline-block;margin:0;padding:0 10px;font-weight:400;color:rgba(0,0,0,.64);max-width:calc(100% - 20px);overflow-wrap:break-word;box-sizing:border-box}.swal-text:first-child{margin-top:45px}.swal-text:last-child{margin-bottom:45px}.swal-footer{text-align:right;padding-top:13px;margin-top:13px;padding:13px 16px;border-radius:inherit;border-top-left-radius:0;border-top-right-radius:0}.swal-button-container{margin:5px;display:inline-block;position:relative}.swal-button{background-color:#7cd1f9;color:#fff;border:none;box-shadow:none;border-radius:5px;font-weight:600;font-size:14px;padding:10px 24px;margin:0;cursor:pointer}.swal-button:not([disabled]):hover{background-color:#78cbf2}.swal-button:active{background-color:#70bce0}.swal-button:focus{outline:none;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(43,114,165,.29)}.swal-button[disabled]{opacity:.5;cursor:default}.swal-button::-moz-focus-inner{border:0}.swal-button--cancel{color:#555;background-color:#efefef}.swal-button--cancel:not([disabled]):hover{background-color:#e8e8e8}.swal-button--cancel:active{background-color:#d7d7d7}.swal-button--cancel:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(116,136,150,.29)}.swal-button--danger{background-color:#e64942}.swal-button--danger:not([disabled]):hover{background-color:#df4740}.swal-button--danger:active{background-color:#cf423b}.swal-button--danger:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(165,43,43,.29)}.swal-content{padding:0 20px;margin-top:20px;font-size:medium}.swal-content:last-child{margin-bottom:20px}.swal-content__input,.swal-content__textarea{-webkit-appearance:none;background-color:#fff;border:none;font-size:14px;display:block;box-sizing:border-box;width:100%;border:1px solid rgba(0,0,0,.14);padding:10px 13px;border-radius:2px;transition:border-color .2s}.swal-content__input:focus,.swal-content__textarea:focus{outline:none;border-color:#6db8ff}.swal-content__textarea{resize:vertical}.swal-button--loading{color:transparent}.swal-button--loading~.swal-button__loader{opacity:1}.swal-button__loader{position:absolute;height:auto;width:43px;z-index:2;left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);text-align:center;pointer-events:none;opacity:0}.swal-button__loader div{display:inline-block;float:none;vertical-align:baseline;width:9px;height:9px;padding:0;border:none;margin:2px;opacity:.4;border-radius:7px;background-color:hsla(0,0%,100%,.9);transition:background .2s;-webkit-animation:swal-loading-anim 1s infinite;animation:swal-loading-anim 1s infinite}.swal-button__loader div:nth-child(3n+2){-webkit-animation-delay:.15s;animation-delay:.15s}.swal-button__loader div:nth-child(3n+3){-webkit-animation-delay:.3s;animation-delay:.3s}@-webkit-keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}@keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}.swal-overlay{position:fixed;top:0;bottom:0;left:0;right:0;text-align:center;font-size:0;overflow-y:auto;background-color:rgba(0,0,0,.4);z-index:10000;pointer-events:none;opacity:0;transition:opacity .3s}.swal-overlay:before{content:" ";display:inline-block;vertical-align:middle;height:100%}.swal-overlay--show-modal{opacity:1;pointer-events:auto}.swal-overlay--show-modal .swal-modal{opacity:1;pointer-events:auto;box-sizing:border-box;-webkit-animation:showSweetAlert .3s;animation:showSweetAlert .3s;will-change:transform}.swal-modal{width:478px;opacity:0;pointer-events:none;background-color:#fff;text-align:center;border-radius:5px;position:static;margin:20px auto;display:inline-block;vertical-align:middle;-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;z-index:10001;transition:opacity .2s,-webkit-transform .3s;transition:transform .3s,opacity .2s;transition:transform .3s,opacity .2s,-webkit-transform .3s}@media (max-width:500px){.swal-modal{width:calc(100% - 20px)}}@-webkit-keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}',""])},function(t,e){function n(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=o(r);return[n].concat(r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"})).concat([i]).join("\n")}return[n].join("\n")}function o(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var o=n(e,t);return e[2]?"@media "+e[2]+"{"+o+"}":o}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){function o(t,e){for(var n=0;n<t.length;n++){var o=t[n],r=m[o.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(u(o.parts[i],e))}else{for(var a=[],i=0;i<o.parts.length;i++)a.push(u(o.parts[i],e));m[o.id]={id:o.id,refs:1,parts:a}}}}function r(t,e){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],a=e.base?i[0]+e.base:i[0],s=i[1],c=i[2],l=i[3],u={css:s,media:c,sourceMap:l};o[a]?o[a].parts.push(u):n.push(o[a]={id:a,parts:[u]})}return n}function i(t,e){var n=v(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=w[w.length-1];if("top"===t.insertAt)o?o.nextSibling?n.insertBefore(e,o.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),w.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function a(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=w.indexOf(t);e>=0&&w.splice(e,1)}function s(t){var e=document.createElement("style");return t.attrs.type="text/css",l(e,t.attrs),i(t,e),e}function c(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",l(e,t.attrs),i(t,e),e}function l(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function u(t,e){var n,o,r,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var l=h++;n=g||(g=s(e)),o=f.bind(null,n,l,!1),r=f.bind(null,n,l,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(e),o=p.bind(null,n,e),r=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(e),o=d.bind(null,n),r=function(){a(n)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}function f(t,e,n,o){var r=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=x(e,r);else{var i=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function d(t,e){var n=e.css,o=e.media;if(o&&t.setAttribute("media",o),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function p(t,e,n){var o=n.css,r=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||i)&&(o=y(o)),r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var m={},b=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),v=function(t){var e={};return function(n){return void 0===e[n]&&(e[n]=t.call(this,n)),e[n]}}(function(t){return document.querySelector(t)}),g=null,h=0,w=[],y=n(15);t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||(e.singleton=b()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=r(t,e);return o(n,e),function(t){for(var i=[],a=0;a<n.length;a++){var s=n[a],c=m[s.id];c.refs--,i.push(c)}if(t){o(r(t,e),e)}for(var a=0;a<i.length;a++){var c=i[a];if(0===c.refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete m[c.id]}}}};var x=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,o=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var r=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(r))return t;var i;return i=0===r.indexOf("//")?r:0===r.indexOf("/")?n+r:o+r.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},function(t,e,n){var o=n(17);"undefined"==typeof window||window.Promise||(window.Promise=o),n(21),String.prototype.includes||(String.prototype.includes=function(t,e){"use strict";return"number"!=typeof e&&(e=0),!(e+t.length>this.length)&&-1!==this.indexOf(t,e)}),Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(t,e){if(null==this)throw new TypeError('"this" is null or not defined');var n=Object(this),o=n.length>>>0;if(0===o)return!1;for(var r=0|e,i=Math.max(r>=0?r:o-Math.abs(r),0);i<o;){if(function(t,e){return t===e||"number"==typeof t&&"number"==typeof e&&isNaN(t)&&isNaN(e)}(n[i],t))return!0;i++}return!1}}),"undefined"!=typeof window&&function(t){t.forEach(function(t){t.hasOwnProperty("remove")||Object.defineProperty(t,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function(){this.parentNode.removeChild(this)}})})}([Element.prototype,CharacterData.prototype,DocumentType.prototype])},function(t,e,n){(function(e){!function(n){function o(){}function r(t,e){return function(){t.apply(e,arguments)}}function i(t){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],f(t,this)}function a(t,e){for(;3===t._state;)t=t._value;if(0===t._state)return void t._deferreds.push(e);t._handled=!0,i._immediateFn(function(){var n=1===t._state?e.onFulfilled:e.onRejected;if(null===n)return void(1===t._state?s:c)(e.promise,t._value);var o;try{o=n(t._value)}catch(t){return void c(e.promise,t)}s(e.promise,o)})}function s(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if(e instanceof i)return t._state=3,t._value=e,void l(t);if("function"==typeof n)return void f(r(n,e),t)}t._state=1,t._value=e,l(t)}catch(e){c(t,e)}}function c(t,e){t._state=2,t._value=e,l(t)}function l(t){2===t._state&&0===t._deferreds.length&&i._immediateFn(function(){t._handled||i._unhandledRejectionFn(t._value)});for(var e=0,n=t._deferreds.length;e<n;e++)a(t,t._deferreds[e]);t._deferreds=null}function u(t,e,n){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=n}function f(t,e){var n=!1;try{t(function(t){n||(n=!0,s(e,t))},function(t){n||(n=!0,c(e,t))})}catch(t){if(n)return;n=!0,c(e,t)}}var d=setTimeout;i.prototype.catch=function(t){return this.then(null,t)},i.prototype.then=function(t,e){var n=new this.constructor(o);return a(this,new u(t,e,n)),n},i.all=function(t){var e=Array.prototype.slice.call(t);return new i(function(t,n){function o(i,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var s=a.then;if("function"==typeof s)return void s.call(a,function(t){o(i,t)},n)}e[i]=a,0==--r&&t(e)}catch(t){n(t)}}if(0===e.length)return t([]);for(var r=e.length,i=0;i<e.length;i++)o(i,e[i])})},i.resolve=function(t){return t&&"object"==typeof t&&t.constructor===i?t:new i(function(e){e(t)})},i.reject=function(t){return new i(function(e,n){n(t)})},i.race=function(t){return new i(function(e,n){for(var o=0,r=t.length;o<r;o++)t[o].then(e,n)})},i._immediateFn="function"==typeof e&&function(t){e(t)}||function(t){d(t,0)},i._unhandledRejectionFn=function(t){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",t)},i._setImmediateFn=function(t){i._immediateFn=t},i._setUnhandledRejectionFn=function(t){i._unhandledRejectionFn=t},void 0!==t&&t.exports?t.exports=i:n.Promise||(n.Promise=i)}(this)}).call(e,n(18).setImmediate)},function(t,e,n){function o(t,e){this._id=t,this._clearFn=e}var r=Function.prototype.apply;e.setTimeout=function(){return new o(r.call(setTimeout,window,arguments),clearTimeout)},e.setInterval=function(){return new o(r.call(setInterval,window,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(window,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},n(19),e.setImmediate=setImmediate,e.clearImmediate=clearImmediate},function(t,e,n){(function(t,e){!function(t,n){"use strict";function o(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];var o={callback:t,args:e};return l[c]=o,s(c),c++}function r(t){delete l[t]}function i(t){var e=t.callback,o=t.args;switch(o.length){case 0:e();break;case 1:e(o[0]);break;case 2:e(o[0],o[1]);break;case 3:e(o[0],o[1],o[2]);break;default:e.apply(n,o)}}function a(t){if(u)setTimeout(a,0,t);else{var e=l[t];if(e){u=!0;try{i(e)}finally{r(t),u=!1}}}}if(!t.setImmediate){var s,c=1,l={},u=!1,f=t.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(t);d=d&&d.setTimeout?d:t,"[object process]"==={}.toString.call(t.process)?function(){s=function(t){e.nextTick(function(){a(t)})}}():function(){if(t.postMessage&&!t.importScripts){var e=!0,n=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=n,e}}()?function(){var e="setImmediate$"+Math.random()+"$",n=function(n){n.source===t&&"string"==typeof n.data&&0===n.data.indexOf(e)&&a(+n.data.slice(e.length))};t.addEventListener?t.addEventListener("message",n,!1):t.attachEvent("onmessage",n),s=function(n){t.postMessage(e+n,"*")}}():t.MessageChannel?function(){var t=new MessageChannel;t.port1.onmessage=function(t){a(t.data)},s=function(e){t.port2.postMessage(e)}}():f&&"onreadystatechange"in f.createElement("script")?function(){var t=f.documentElement;s=function(e){var n=f.createElement("script");n.onreadystatechange=function(){a(e),n.onreadystatechange=null,t.removeChild(n),n=null},t.appendChild(n)}}():function(){s=function(t){setTimeout(a,0,t)}}(),d.setImmediate=o,d.clearImmediate=r}}("undefined"==typeof self?void 0===t?this:t:self)}).call(e,n(7),n(20))},function(t,e){function n(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(t){if(u===setTimeout)return setTimeout(t,0);if((u===n||!u)&&setTimeout)return u=setTimeout,setTimeout(t,0);try{return u(t,0)}catch(e){try{return u.call(null,t,0)}catch(e){return u.call(this,t,0)}}}function i(t){if(f===clearTimeout)return clearTimeout(t);if((f===o||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(t);try{return f(t)}catch(e){try{return f.call(null,t)}catch(e){return f.call(this,t)}}}function a(){b&&p&&(b=!1,p.length?m=p.concat(m):v=-1,m.length&&s())}function s(){if(!b){var t=r(a);b=!0;for(var e=m.length;e;){for(p=m,m=[];++v<e;)p&&p[v].run();v=-1,e=m.length}p=null,b=!1,i(t)}}function c(t,e){this.fun=t,this.array=e}function l(){}var u,f,d=t.exports={};!function(){try{u="function"==typeof setTimeout?setTimeout:n}catch(t){u=n}try{f="function"==typeof clearTimeout?clearTimeout:o}catch(t){f=o}}();var p,m=[],b=!1,v=-1;d.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];m.push(new c(t,e)),1!==m.length||b||r(s)},c.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=l,d.addListener=l,d.once=l,d.off=l,d.removeListener=l,d.removeAllListeners=l,d.emit=l,d.prependListener=l,d.prependOnceListener=l,d.listeners=function(t){return[]},d.binding=function(t){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(t){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(t,e,n){"use strict";n(22).polyfill()},function(t,e,n){"use strict";function o(t,e){if(void 0===t||null===t)throw new TypeError("Cannot convert first argument to object");for(var n=Object(t),o=1;o<arguments.length;o++){var r=arguments[o];if(void 0!==r&&null!==r)for(var i=Object.keys(Object(r)),a=0,s=i.length;a<s;a++){var c=i[a],l=Object.getOwnPropertyDescriptor(r,c);void 0!==l&&l.enumerable&&(n[c]=r[c])}}return n}function r(){Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:o})}t.exports={assign:o,polyfill:r}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(24),r=n(6),i=n(5),a=n(36),s=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if("undefined"!=typeof window){var n=a.getOpts.apply(void 0,t);return new Promise(function(t,e){i.default.promise={resolve:t,reject:e},o.default(n),setTimeout(function(){r.openModal()})})}};s.close=r.onAction,s.getState=r.getState,s.setActionValue=i.setActionValue,s.stopLoading=r.stopLoading,s.setDefaults=a.setDefaults,e.default=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(0),i=r.default.MODAL,a=n(4),s=n(34),c=n(35),l=n(1);e.init=function(t){o.getNode(i)||(document.body||l.throwErr("You can only use SweetAlert AFTER the DOM has loaded!"),s.default(),a.default()),a.initModalContent(t),c.default(t)},e.default=e.init},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.MODAL;e.modalMarkup='\n  <div class="'+r+'" role="dialog" aria-modal="true"></div>',e.default=e.modalMarkup},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.OVERLAY,i='<div \n    class="'+r+'"\n    tabIndex="-1">\n  </div>';e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.ICON;e.errorIconMarkup=function(){var t=r+"--error",e=t+"__line";return'\n    <div class="'+t+'__x-mark">\n      <span class="'+e+" "+e+'--left"></span>\n      <span class="'+e+" "+e+'--right"></span>\n    </div>\n  '},e.warningIconMarkup=function(){var t=r+"--warning";return'\n    <span class="'+t+'__body">\n      <span class="'+t+'__dot"></span>\n    </span>\n  '},e.successIconMarkup=function(){var t=r+"--success";return'\n    <span class="'+t+"__line "+t+'__line--long"></span>\n    <span class="'+t+"__line "+t+'__line--tip"></span>\n\n    <div class="'+t+'__ring"></div>\n    <div class="'+t+'__hide-corners"></div>\n  '}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.CONTENT;e.contentMarkup='\n  <div class="'+r+'">\n\n  </div>\n'},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.BUTTON_CONTAINER,i=o.default.BUTTON,a=o.default.BUTTON_LOADER;e.buttonMarkup='\n  <div class="'+r+'">\n\n    <button\n      class="'+i+'"\n    ></button>\n\n    <div class="'+a+'">\n      <div></div>\n      <div></div>\n      <div></div>\n    </div>\n\n  </div>\n'},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(4),r=n(2),i=n(0),a=i.default.ICON,s=i.default.ICON_CUSTOM,c=["error","warning","success","info"],l={error:r.errorIconMarkup(),warning:r.warningIconMarkup(),success:r.successIconMarkup()},u=function(t,e){var n=a+"--"+t;e.classList.add(n);var o=l[t];o&&(e.innerHTML=o)},f=function(t,e){e.classList.add(s);var n=document.createElement("img");n.src=t,e.appendChild(n)},d=function(t){if(t){var e=o.injectElIntoModal(r.iconMarkup);c.includes(t)?u(t,e):f(t,e)}};e.default=d},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),r=n(4),i=function(t){navigator.userAgent.includes("AppleWebKit")&&(t.style.display="none",t.offsetHeight,t.style.display="")};e.initTitle=function(t){if(t){var e=r.injectElIntoModal(o.titleMarkup);e.textContent=t,i(e)}},e.initText=function(t){if(t){var e=document.createDocumentFragment();t.split("\n").forEach(function(t,n,o){e.appendChild(document.createTextNode(t)),n<o.length-1&&e.appendChild(document.createElement("br"))});var n=r.injectElIntoModal(o.textMarkup);n.appendChild(e),i(n)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(4),i=n(0),a=i.default.BUTTON,s=i.default.DANGER_BUTTON,c=n(3),l=n(2),u=n(6),f=n(5),d=function(t,e,n){var r=e.text,i=e.value,d=e.className,p=e.closeModal,m=o.stringToNode(l.buttonMarkup),b=m.querySelector("."+a),v=a+"--"+t;if(b.classList.add(v),d){(Array.isArray(d)?d:d.split(" ")).filter(function(t){return t.length>0}).forEach(function(t){b.classList.add(t)})}n&&t===c.CONFIRM_KEY&&b.classList.add(s),b.textContent=r;var g={};return g[t]=i,f.setActionValue(g),f.setActionOptionsFor(t,{closeModal:p}),b.addEventListener("click",function(){return u.onAction(t)}),m},p=function(t,e){var n=r.injectElIntoModal(l.footerMarkup);for(var o in t){var i=t[o],a=d(o,i,e);i.visible&&n.appendChild(a)}0===n.children.length&&n.remove()};e.default=p},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),r=n(4),i=n(2),a=n(5),s=n(6),c=n(0),l=c.default.CONTENT,u=function(t){t.addEventListener("input",function(t){var e=t.target,n=e.value;a.setActionValue(n)}),t.addEventListener("keyup",function(t){if("Enter"===t.key)return s.onAction(o.CONFIRM_KEY)}),setTimeout(function(){t.focus(),a.setActionValue("")},0)},f=function(t,e,n){var o=document.createElement(e),r=l+"__"+e;o.classList.add(r);for(var i in n){var a=n[i];o[i]=a}"input"===e&&u(o),t.appendChild(o)},d=function(t){if(t){var e=r.injectElIntoModal(i.contentMarkup),n=t.element,o=t.attributes;"string"==typeof n?f(e,n,o):e.appendChild(n)}};e.default=d},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(2),i=function(){var t=o.stringToNode(r.overlayMarkup);document.body.appendChild(t)};e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(5),r=n(6),i=n(1),a=n(3),s=n(0),c=s.default.MODAL,l=s.default.BUTTON,u=s.default.OVERLAY,f=function(t){t.preventDefault(),v()},d=function(t){t.preventDefault(),g()},p=function(t){if(o.default.isOpen)switch(t.key){case"Escape":return r.onAction(a.CANCEL_KEY)}},m=function(t){if(o.default.isOpen)switch(t.key){case"Tab":return f(t)}},b=function(t){if(o.default.isOpen)return"Tab"===t.key&&t.shiftKey?d(t):void 0},v=function(){var t=i.getNode(l);t&&(t.tabIndex=0,t.focus())},g=function(){var t=i.getNode(c),e=t.querySelectorAll("."+l),n=e.length-1,o=e[n];o&&o.focus()},h=function(t){t[t.length-1].addEventListener("keydown",m)},w=function(t){t[0].addEventListener("keydown",b)},y=function(){var t=i.getNode(c),e=t.querySelectorAll("."+l);e.length&&(h(e),w(e))},x=function(t){if(i.getNode(u)===t.target)return r.onAction(a.CANCEL_KEY)},_=function(t){var e=i.getNode(u);e.removeEventListener("click",x),t&&e.addEventListener("click",x)},k=function(t){o.default.timer&&clearTimeout(o.default.timer),t&&(o.default.timer=window.setTimeout(function(){return r.onAction(a.CANCEL_KEY)},t))},O=function(t){t.closeOnEsc?document.addEventListener("keyup",p):document.removeEventListener("keyup",p),t.dangerMode?v():g(),y(),_(t.closeOnClickOutside),k(t.timer)};e.default=O},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(3),i=n(37),a=n(38),s={title:null,text:null,icon:null,buttons:r.defaultButtonList,content:null,className:null,closeOnClickOutside:!0,closeOnEsc:!0,dangerMode:!1,timer:null},c=Object.assign({},s);e.setDefaults=function(t){c=Object.assign({},s,t)};var l=function(t){var e=t&&t.button,n=t&&t.buttons;return void 0!==e&&void 0!==n&&o.throwErr("Cannot set both 'button' and 'buttons' options!"),void 0!==e?{confirm:e}:n},u=function(t){return o.ordinalSuffixOf(t+1)},f=function(t,e){o.throwErr(u(e)+" argument ('"+t+"') is invalid")},d=function(t,e){var n=t+1,r=e[n];o.isPlainObject(r)||void 0===r||o.throwErr("Expected "+u(n)+" argument ('"+r+"') to be a plain object")},p=function(t,e){var n=t+1,r=e[n];void 0!==r&&o.throwErr("Unexpected "+u(n)+" argument ("+r+")")},m=function(t,e,n,r){var i=typeof e,a="string"===i,s=e instanceof Element;if(a){if(0===n)return{text:e};if(1===n)return{text:e,title:r[0]};if(2===n)return d(n,r),{icon:e};f(e,n)}else{if(s&&0===n)return d(n,r),{content:e};if(o.isPlainObject(e))return p(n,r),e;f(e,n)}};e.getOpts=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n={};t.forEach(function(e,o){var r=m(0,e,o,t);Object.assign(n,r)});var o=l(n);n.buttons=r.getButtonListOpts(o),delete n.button,n.content=i.getContentOpts(n.content);var u=Object.assign({},s,c,n);return Object.keys(u).forEach(function(t){a.DEPRECATED_OPTS[t]&&a.logDeprecation(t)}),u}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r={element:"input",attributes:{placeholder:""}};e.getContentOpts=function(t){var e={};return o.isPlainObject(t)?Object.assign(e,t):t instanceof Element?{element:t}:"input"===t?r:null}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.logDeprecation=function(t){var n=e.DEPRECATED_OPTS[t],o=n.onlyRename,r=n.replacement,i=n.subOption,a=n.link,s=o?"renamed":"deprecated",c='SweetAlert warning: "'+t+'" option has been '+s+".";if(r){c+=" Please use"+(i?' "'+i+'" in ':" ")+'"'+r+'" instead.'}var l="https://sweetalert.js.org";c+=a?" More details: "+l+a:" More details: "+l+"/guides/#upgrading-from-1x",console.warn(c)},e.DEPRECATED_OPTS={type:{replacement:"icon",link:"/docs/#icon"},imageUrl:{replacement:"icon",link:"/docs/#icon"},customClass:{replacement:"className",onlyRename:!0,link:"/docs/#classname"},imageSize:{},showCancelButton:{replacement:"buttons",link:"/docs/#buttons"},showConfirmButton:{replacement:"button",link:"/docs/#button"},confirmButtonText:{replacement:"button",link:"/docs/#button"},confirmButtonColor:{},cancelButtonText:{replacement:"buttons",link:"/docs/#buttons"},closeOnConfirm:{replacement:"button",subOption:"closeModal",link:"/docs/#button"},closeOnCancel:{replacement:"buttons",subOption:"closeModal",link:"/docs/#buttons"},showLoaderOnConfirm:{replacement:"buttons"},animation:{},inputType:{replacement:"content",link:"/docs/#content"},inputValue:{replacement:"content",link:"/docs/#content"},inputPlaceholder:{replacement:"content",link:"/docs/#content"},html:{replacement:"content",link:"/docs/#content"},allowEscapeKey:{replacement:"closeOnEsc",onlyRename:!0,link:"/docs/#closeonesc"},allowClickOutside:{replacement:"closeOnClickOutside",onlyRename:!0,link:"/docs/#closeonclickoutside"}}}])});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13).setImmediate, __webpack_require__(13).clearImmediate))

/***/ }),

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(105);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ 105:
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    isLoading: Boolean,
    onClick: Function,
    type: {
      type: String,
      default: 'url'
    }
  }
});

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "button",
    {
      staticClass: "btn btn-block btn-primary",
      attrs: { disabled: _vm.isLoading },
      on: {
        click: function($event) {
          return _vm.onClick(_vm.type)
        }
      }
    },
    [
      _vm.isLoading
        ? _c("span", {
            staticClass: "spinner-border spinner-border-sm",
            attrs: { role: "status", "aria-hidden": "true" }
          })
        : _vm._e(),
      _vm._v(" "),
      _c("span", { staticClass: "sr-only" }, [_vm._v("Loading...")]),
      _vm._v(" "),
      _vm.isLoading
        ? _c("span", [_vm._v("Loading...")])
        : _c("span", [_vm._v("Begin Audit")])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0e4fc7b4", module.exports)
  }
}

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['error', 'isLoading']
});

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.error && !_vm.isLoading
    ? _c("div", { staticClass: "row my-3 justify-content-center" }, [
        _c(
          "div",
          { staticClass: "alert alert-danger", attrs: { role: "alert" } },
          [_vm._v("\n        " + _vm._s(_vm.error) + "\n    ")]
        )
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6941b502", module.exports)
  }
}

/***/ }),

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(300)
/* template */
var __vue_template__ = __webpack_require__(301)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/extension/admin/Index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-cbe67cca", Component.options)
  } else {
    hotAPI.reload("data-v-cbe67cca", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return extensionMixin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lz_string__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lz_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lz_string__);


var extensionMixin = {
  data: function data() {
    return {
      error: null,
      isLoading: false,
      results: null,
      token: null
    };
  },

  methods: {
    compress: function compress(value) {
      return __WEBPACK_IMPORTED_MODULE_0_lz_string___default.a.compressToBase64(value);
    },
    decompress: function decompress(value) {
      return __WEBPACK_IMPORTED_MODULE_0_lz_string___default.a.decompressFromBase64(value);
    },
    url: function url() {
      return '/api/extension' + (this.isAdmin ? '/admin' : '') + '?XDEBUG_SESSION_START=1';
    },
    reset: function reset() {
      this.error = null;
      this.isLoading = false;
      this.results = null;
    }
  },
  props: {
    isAdmin: {
      type: Boolean,
      required: false,
      default: false
    }
  }
};

/***/ }),

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(254)
/* template */
var __vue_template__ = __webpack_require__(258)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/extension/partials/Editor.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0a5cba53", Component.options)
  } else {
    hotAPI.reload("data-v-0a5cba53", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* AUTO-GENERATED. DO NOT MODIFY. */
/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.

 JS Beautifier
---------------


  Written by Einar Lielmanis, <einar@beautifier.io>
      https://beautifier.io/

  Originally converted to javascript by Vital, <vital76@gmail.com>
  "End braces on own line" added by Chris J. Shull, <chrisjshull@gmail.com>
  Parsing improvements for brace-less statements by Liam Newman <bitwiseman@beautifier.io>


  Usage:
    js_beautify(js_source_text);
    js_beautify(js_source_text, options);

  The options are:
    indent_size (default 4)          - indentation size,
    indent_char (default space)      - character to indent with,
    preserve_newlines (default true) - whether existing line breaks should be preserved,
    max_preserve_newlines (default unlimited) - maximum number of line breaks to be preserved in one chunk,

    jslint_happy (default false) - if true, then jslint-stricter mode is enforced.

            jslint_happy        !jslint_happy
            ---------------------------------
            function ()         function()

            switch () {         switch() {
            case 1:               case 1:
              break;                break;
            }                   }

    space_after_anon_function (default false) - should the space before an anonymous function's parens be added, "function()" vs "function ()",
          NOTE: This option is overriden by jslint_happy (i.e. if jslint_happy is true, space_after_anon_function is true by design)

    brace_style (default "collapse") - "collapse" | "expand" | "end-expand" | "none" | any of the former + ",preserve-inline"
            put braces on the same line as control statements (default), or put braces on own line (Allman / ANSI style), or just put end braces on own line, or attempt to keep them where they are.
            preserve-inline will try to preserve inline blocks of curly braces

    space_before_conditional (default true) - should the space before conditional statement be added, "if(true)" vs "if (true)",

    unescape_strings (default false) - should printable characters in strings encoded in \xNN notation be unescaped, "example" vs "\x65\x78\x61\x6d\x70\x6c\x65"

    wrap_line_length (default unlimited) - lines should wrap at next opportunity after this number of characters.
          NOTE: This is not a hard limit. Lines will continue until a point where a newline would
                be preserved if it were present.

    end_with_newline (default false)  - end output with a newline


    e.g

    js_beautify(js_source_text, {
      'indent_size': 1,
      'indent_char': '\t'
    });

*/

(function() {

/* GENERATED_BUILD_OUTPUT */
var legacy_beautify_js =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*jshint node:true */
/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/



var Beautifier = __webpack_require__(1).Beautifier,
  Options = __webpack_require__(5).Options;

function js_beautify(js_source_text, options) {
  var beautifier = new Beautifier(js_source_text, options);
  return beautifier.beautify();
}

module.exports = js_beautify;
module.exports.defaultOptions = function() {
  return new Options();
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*jshint node:true */
/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/



var Output = __webpack_require__(2).Output;
var Token = __webpack_require__(3).Token;
var acorn = __webpack_require__(4);
var Options = __webpack_require__(5).Options;
var Tokenizer = __webpack_require__(7).Tokenizer;
var line_starters = __webpack_require__(7).line_starters;
var positionable_operators = __webpack_require__(7).positionable_operators;
var TOKEN = __webpack_require__(7).TOKEN;


function in_array(what, arr) {
  return arr.indexOf(what) !== -1;
}

function ltrim(s) {
  return s.replace(/^\s+/g, '');
}

function generateMapFromStrings(list) {
  var result = {};
  for (var x = 0; x < list.length; x++) {
    // make the mapped names underscored instead of dash
    result[list[x].replace(/-/g, '_')] = list[x];
  }
  return result;
}

function reserved_word(token, word) {
  return token && token.type === TOKEN.RESERVED && token.text === word;
}

function reserved_array(token, words) {
  return token && token.type === TOKEN.RESERVED && in_array(token.text, words);
}
// Unsure of what they mean, but they work. Worth cleaning up in future.
var special_words = ['case', 'return', 'do', 'if', 'throw', 'else', 'await', 'break', 'continue', 'async'];

var validPositionValues = ['before-newline', 'after-newline', 'preserve-newline'];

// Generate map from array
var OPERATOR_POSITION = generateMapFromStrings(validPositionValues);

var OPERATOR_POSITION_BEFORE_OR_PRESERVE = [OPERATOR_POSITION.before_newline, OPERATOR_POSITION.preserve_newline];

var MODE = {
  BlockStatement: 'BlockStatement', // 'BLOCK'
  Statement: 'Statement', // 'STATEMENT'
  ObjectLiteral: 'ObjectLiteral', // 'OBJECT',
  ArrayLiteral: 'ArrayLiteral', //'[EXPRESSION]',
  ForInitializer: 'ForInitializer', //'(FOR-EXPRESSION)',
  Conditional: 'Conditional', //'(COND-EXPRESSION)',
  Expression: 'Expression' //'(EXPRESSION)'
};

function remove_redundant_indentation(output, frame) {
  // This implementation is effective but has some issues:
  //     - can cause line wrap to happen too soon due to indent removal
  //           after wrap points are calculated
  // These issues are minor compared to ugly indentation.

  if (frame.multiline_frame ||
    frame.mode === MODE.ForInitializer ||
    frame.mode === MODE.Conditional) {
    return;
  }

  // remove one indent from each line inside this section
  output.remove_indent(frame.start_line_index);
}

// we could use just string.split, but
// IE doesn't like returning empty strings
function split_linebreaks(s) {
  //return s.split(/\x0d\x0a|\x0a/);

  s = s.replace(acorn.allLineBreaks, '\n');
  var out = [],
    idx = s.indexOf("\n");
  while (idx !== -1) {
    out.push(s.substring(0, idx));
    s = s.substring(idx + 1);
    idx = s.indexOf("\n");
  }
  if (s.length) {
    out.push(s);
  }
  return out;
}

function is_array(mode) {
  return mode === MODE.ArrayLiteral;
}

function is_expression(mode) {
  return in_array(mode, [MODE.Expression, MODE.ForInitializer, MODE.Conditional]);
}

function all_lines_start_with(lines, c) {
  for (var i = 0; i < lines.length; i++) {
    var line = lines[i].trim();
    if (line.charAt(0) !== c) {
      return false;
    }
  }
  return true;
}

function each_line_matches_indent(lines, indent) {
  var i = 0,
    len = lines.length,
    line;
  for (; i < len; i++) {
    line = lines[i];
    // allow empty lines to pass through
    if (line && line.indexOf(indent) !== 0) {
      return false;
    }
  }
  return true;
}


function Beautifier(source_text, options) {
  options = options || {};
  this._source_text = source_text || '';

  this._output = null;
  this._tokens = null;
  this._last_last_text = null;
  this._flags = null;
  this._previous_flags = null;

  this._flag_store = null;
  this._options = new Options(options);
}

Beautifier.prototype.create_flags = function(flags_base, mode) {
  var next_indent_level = 0;
  if (flags_base) {
    next_indent_level = flags_base.indentation_level;
    if (!this._output.just_added_newline() &&
      flags_base.line_indent_level > next_indent_level) {
      next_indent_level = flags_base.line_indent_level;
    }
  }

  var next_flags = {
    mode: mode,
    parent: flags_base,
    last_token: flags_base ? flags_base.last_token : new Token(TOKEN.START_BLOCK, ''), // last token text
    last_word: flags_base ? flags_base.last_word : '', // last TOKEN.WORD passed
    declaration_statement: false,
    declaration_assignment: false,
    multiline_frame: false,
    inline_frame: false,
    if_block: false,
    else_block: false,
    do_block: false,
    do_while: false,
    import_block: false,
    in_case_statement: false, // switch(..){ INSIDE HERE }
    in_case: false, // we're on the exact line with "case 0:"
    case_body: false, // the indented case-action block
    indentation_level: next_indent_level,
    alignment: 0,
    line_indent_level: flags_base ? flags_base.line_indent_level : next_indent_level,
    start_line_index: this._output.get_line_number(),
    ternary_depth: 0
  };
  return next_flags;
};

Beautifier.prototype._reset = function(source_text) {
  var baseIndentString = source_text.match(/^[\t ]*/)[0];

  this._last_last_text = ''; // pre-last token text
  this._output = new Output(this._options, baseIndentString);

  // If testing the ignore directive, start with output disable set to true
  this._output.raw = this._options.test_output_raw;


  // Stack of parsing/formatting states, including MODE.
  // We tokenize, parse, and output in an almost purely a forward-only stream of token input
  // and formatted output.  This makes the beautifier less accurate than full parsers
  // but also far more tolerant of syntax errors.
  //
  // For example, the default mode is MODE.BlockStatement. If we see a '{' we push a new frame of type
  // MODE.BlockStatement on the the stack, even though it could be object literal.  If we later
  // encounter a ":", we'll switch to to MODE.ObjectLiteral.  If we then see a ";",
  // most full parsers would die, but the beautifier gracefully falls back to
  // MODE.BlockStatement and continues on.
  this._flag_store = [];
  this.set_mode(MODE.BlockStatement);
  var tokenizer = new Tokenizer(source_text, this._options);
  this._tokens = tokenizer.tokenize();
  return source_text;
};

Beautifier.prototype.beautify = function() {
  // if disabled, return the input unchanged.
  if (this._options.disabled) {
    return this._source_text;
  }

  var sweet_code;
  var source_text = this._reset(this._source_text);

  var eol = this._options.eol;
  if (this._options.eol === 'auto') {
    eol = '\n';
    if (source_text && acorn.lineBreak.test(source_text || '')) {
      eol = source_text.match(acorn.lineBreak)[0];
    }
  }

  var current_token = this._tokens.next();
  while (current_token) {
    this.handle_token(current_token);

    this._last_last_text = this._flags.last_token.text;
    this._flags.last_token = current_token;

    current_token = this._tokens.next();
  }

  sweet_code = this._output.get_code(eol);

  return sweet_code;
};

Beautifier.prototype.handle_token = function(current_token, preserve_statement_flags) {
  if (current_token.type === TOKEN.START_EXPR) {
    this.handle_start_expr(current_token);
  } else if (current_token.type === TOKEN.END_EXPR) {
    this.handle_end_expr(current_token);
  } else if (current_token.type === TOKEN.START_BLOCK) {
    this.handle_start_block(current_token);
  } else if (current_token.type === TOKEN.END_BLOCK) {
    this.handle_end_block(current_token);
  } else if (current_token.type === TOKEN.WORD) {
    this.handle_word(current_token);
  } else if (current_token.type === TOKEN.RESERVED) {
    this.handle_word(current_token);
  } else if (current_token.type === TOKEN.SEMICOLON) {
    this.handle_semicolon(current_token);
  } else if (current_token.type === TOKEN.STRING) {
    this.handle_string(current_token);
  } else if (current_token.type === TOKEN.EQUALS) {
    this.handle_equals(current_token);
  } else if (current_token.type === TOKEN.OPERATOR) {
    this.handle_operator(current_token);
  } else if (current_token.type === TOKEN.COMMA) {
    this.handle_comma(current_token);
  } else if (current_token.type === TOKEN.BLOCK_COMMENT) {
    this.handle_block_comment(current_token, preserve_statement_flags);
  } else if (current_token.type === TOKEN.COMMENT) {
    this.handle_comment(current_token, preserve_statement_flags);
  } else if (current_token.type === TOKEN.DOT) {
    this.handle_dot(current_token);
  } else if (current_token.type === TOKEN.EOF) {
    this.handle_eof(current_token);
  } else if (current_token.type === TOKEN.UNKNOWN) {
    this.handle_unknown(current_token, preserve_statement_flags);
  } else {
    this.handle_unknown(current_token, preserve_statement_flags);
  }
};

Beautifier.prototype.handle_whitespace_and_comments = function(current_token, preserve_statement_flags) {
  var newlines = current_token.newlines;
  var keep_whitespace = this._options.keep_array_indentation && is_array(this._flags.mode);

  if (current_token.comments_before) {
    var comment_token = current_token.comments_before.next();
    while (comment_token) {
      // The cleanest handling of inline comments is to treat them as though they aren't there.
      // Just continue formatting and the behavior should be logical.
      // Also ignore unknown tokens.  Again, this should result in better behavior.
      this.handle_whitespace_and_comments(comment_token, preserve_statement_flags);
      this.handle_token(comment_token, preserve_statement_flags);
      comment_token = current_token.comments_before.next();
    }
  }

  if (keep_whitespace) {
    for (var i = 0; i < newlines; i += 1) {
      this.print_newline(i > 0, preserve_statement_flags);
    }
  } else {
    if (this._options.max_preserve_newlines && newlines > this._options.max_preserve_newlines) {
      newlines = this._options.max_preserve_newlines;
    }

    if (this._options.preserve_newlines) {
      if (newlines > 1) {
        this.print_newline(false, preserve_statement_flags);
        for (var j = 1; j < newlines; j += 1) {
          this.print_newline(true, preserve_statement_flags);
        }
      }
    }
  }

};

var newline_restricted_tokens = ['async', 'break', 'continue', 'return', 'throw', 'yield'];

Beautifier.prototype.allow_wrap_or_preserved_newline = function(current_token, force_linewrap) {
  force_linewrap = (force_linewrap === undefined) ? false : force_linewrap;

  // Never wrap the first token on a line
  if (this._output.just_added_newline()) {
    return;
  }

  var shouldPreserveOrForce = (this._options.preserve_newlines && current_token.newlines) || force_linewrap;
  var operatorLogicApplies = in_array(this._flags.last_token.text, positionable_operators) ||
    in_array(current_token.text, positionable_operators);

  if (operatorLogicApplies) {
    var shouldPrintOperatorNewline = (
        in_array(this._flags.last_token.text, positionable_operators) &&
        in_array(this._options.operator_position, OPERATOR_POSITION_BEFORE_OR_PRESERVE)
      ) ||
      in_array(current_token.text, positionable_operators);
    shouldPreserveOrForce = shouldPreserveOrForce && shouldPrintOperatorNewline;
  }

  if (shouldPreserveOrForce) {
    this.print_newline(false, true);
  } else if (this._options.wrap_line_length) {
    if (reserved_array(this._flags.last_token, newline_restricted_tokens)) {
      // These tokens should never have a newline inserted
      // between them and the following expression.
      return;
    }
    this._output.set_wrap_point();
  }
};

Beautifier.prototype.print_newline = function(force_newline, preserve_statement_flags) {
  if (!preserve_statement_flags) {
    if (this._flags.last_token.text !== ';' && this._flags.last_token.text !== ',' && this._flags.last_token.text !== '=' && (this._flags.last_token.type !== TOKEN.OPERATOR || this._flags.last_token.text === '--' || this._flags.last_token.text === '++')) {
      var next_token = this._tokens.peek();
      while (this._flags.mode === MODE.Statement &&
        !(this._flags.if_block && reserved_word(next_token, 'else')) &&
        !this._flags.do_block) {
        this.restore_mode();
      }
    }
  }

  if (this._output.add_new_line(force_newline)) {
    this._flags.multiline_frame = true;
  }
};

Beautifier.prototype.print_token_line_indentation = function(current_token) {
  if (this._output.just_added_newline()) {
    if (this._options.keep_array_indentation &&
      current_token.newlines &&
      (current_token.text === '[' || is_array(this._flags.mode))) {
      this._output.current_line.set_indent(-1);
      this._output.current_line.push(current_token.whitespace_before);
      this._output.space_before_token = false;
    } else if (this._output.set_indent(this._flags.indentation_level, this._flags.alignment)) {
      this._flags.line_indent_level = this._flags.indentation_level;
    }
  }
};

Beautifier.prototype.print_token = function(current_token) {
  if (this._output.raw) {
    this._output.add_raw_token(current_token);
    return;
  }

  if (this._options.comma_first && current_token.previous && current_token.previous.type === TOKEN.COMMA &&
    this._output.just_added_newline()) {
    if (this._output.previous_line.last() === ',') {
      var popped = this._output.previous_line.pop();
      // if the comma was already at the start of the line,
      // pull back onto that line and reprint the indentation
      if (this._output.previous_line.is_empty()) {
        this._output.previous_line.push(popped);
        this._output.trim(true);
        this._output.current_line.pop();
        this._output.trim();
      }

      // add the comma in front of the next token
      this.print_token_line_indentation(current_token);
      this._output.add_token(',');
      this._output.space_before_token = true;
    }
  }

  this.print_token_line_indentation(current_token);
  this._output.non_breaking_space = true;
  this._output.add_token(current_token.text);
  if (this._output.previous_token_wrapped) {
    this._flags.multiline_frame = true;
  }
};

Beautifier.prototype.indent = function() {
  this._flags.indentation_level += 1;
  this._output.set_indent(this._flags.indentation_level, this._flags.alignment);
};

Beautifier.prototype.deindent = function() {
  if (this._flags.indentation_level > 0 &&
    ((!this._flags.parent) || this._flags.indentation_level > this._flags.parent.indentation_level)) {
    this._flags.indentation_level -= 1;
    this._output.set_indent(this._flags.indentation_level, this._flags.alignment);
  }
};

Beautifier.prototype.set_mode = function(mode) {
  if (this._flags) {
    this._flag_store.push(this._flags);
    this._previous_flags = this._flags;
  } else {
    this._previous_flags = this.create_flags(null, mode);
  }

  this._flags = this.create_flags(this._previous_flags, mode);
  this._output.set_indent(this._flags.indentation_level, this._flags.alignment);
};


Beautifier.prototype.restore_mode = function() {
  if (this._flag_store.length > 0) {
    this._previous_flags = this._flags;
    this._flags = this._flag_store.pop();
    if (this._previous_flags.mode === MODE.Statement) {
      remove_redundant_indentation(this._output, this._previous_flags);
    }
    this._output.set_indent(this._flags.indentation_level, this._flags.alignment);
  }
};

Beautifier.prototype.start_of_object_property = function() {
  return this._flags.parent.mode === MODE.ObjectLiteral && this._flags.mode === MODE.Statement && (
    (this._flags.last_token.text === ':' && this._flags.ternary_depth === 0) || (reserved_array(this._flags.last_token, ['get', 'set'])));
};

Beautifier.prototype.start_of_statement = function(current_token) {
  var start = false;
  start = start || reserved_array(this._flags.last_token, ['var', 'let', 'const']) && current_token.type === TOKEN.WORD;
  start = start || reserved_word(this._flags.last_token, 'do');
  start = start || (!(this._flags.parent.mode === MODE.ObjectLiteral && this._flags.mode === MODE.Statement)) && reserved_array(this._flags.last_token, newline_restricted_tokens) && !current_token.newlines;
  start = start || reserved_word(this._flags.last_token, 'else') &&
    !(reserved_word(current_token, 'if') && !current_token.comments_before);
  start = start || (this._flags.last_token.type === TOKEN.END_EXPR && (this._previous_flags.mode === MODE.ForInitializer || this._previous_flags.mode === MODE.Conditional));
  start = start || (this._flags.last_token.type === TOKEN.WORD && this._flags.mode === MODE.BlockStatement &&
    !this._flags.in_case &&
    !(current_token.text === '--' || current_token.text === '++') &&
    this._last_last_text !== 'function' &&
    current_token.type !== TOKEN.WORD && current_token.type !== TOKEN.RESERVED);
  start = start || (this._flags.mode === MODE.ObjectLiteral && (
    (this._flags.last_token.text === ':' && this._flags.ternary_depth === 0) || reserved_array(this._flags.last_token, ['get', 'set'])));

  if (start) {
    this.set_mode(MODE.Statement);
    this.indent();

    this.handle_whitespace_and_comments(current_token, true);

    // Issue #276:
    // If starting a new statement with [if, for, while, do], push to a new line.
    // if (a) if (b) if(c) d(); else e(); else f();
    if (!this.start_of_object_property()) {
      this.allow_wrap_or_preserved_newline(current_token,
        reserved_array(current_token, ['do', 'for', 'if', 'while']));
    }
    return true;
  }
  return false;
};

Beautifier.prototype.handle_start_expr = function(current_token) {
  // The conditional starts the statement if appropriate.
  if (!this.start_of_statement(current_token)) {
    this.handle_whitespace_and_comments(current_token);
  }

  var next_mode = MODE.Expression;
  if (current_token.text === '[') {

    if (this._flags.last_token.type === TOKEN.WORD || this._flags.last_token.text === ')') {
      // this is array index specifier, break immediately
      // a[x], fn()[x]
      if (reserved_array(this._flags.last_token, line_starters)) {
        this._output.space_before_token = true;
      }
      this.print_token(current_token);
      this.set_mode(next_mode);
      this.indent();
      if (this._options.space_in_paren) {
        this._output.space_before_token = true;
      }
      return;
    }

    next_mode = MODE.ArrayLiteral;
    if (is_array(this._flags.mode)) {
      if (this._flags.last_token.text === '[' ||
        (this._flags.last_token.text === ',' && (this._last_last_text === ']' || this._last_last_text === '}'))) {
        // ], [ goes to new line
        // }, [ goes to new line
        if (!this._options.keep_array_indentation) {
          this.print_newline();
        }
      }
    }

    if (!in_array(this._flags.last_token.type, [TOKEN.START_EXPR, TOKEN.END_EXPR, TOKEN.WORD, TOKEN.OPERATOR])) {
      this._output.space_before_token = true;
    }
  } else {
    if (this._flags.last_token.type === TOKEN.RESERVED) {
      if (this._flags.last_token.text === 'for') {
        this._output.space_before_token = this._options.space_before_conditional;
        next_mode = MODE.ForInitializer;
      } else if (in_array(this._flags.last_token.text, ['if', 'while'])) {
        this._output.space_before_token = this._options.space_before_conditional;
        next_mode = MODE.Conditional;
      } else if (in_array(this._flags.last_word, ['await', 'async'])) {
        // Should be a space between await and an IIFE, or async and an arrow function
        this._output.space_before_token = true;
      } else if (this._flags.last_token.text === 'import' && current_token.whitespace_before === '') {
        this._output.space_before_token = false;
      } else if (in_array(this._flags.last_token.text, line_starters) || this._flags.last_token.text === 'catch') {
        this._output.space_before_token = true;
      }
    } else if (this._flags.last_token.type === TOKEN.EQUALS || this._flags.last_token.type === TOKEN.OPERATOR) {
      // Support of this kind of newline preservation.
      // a = (b &&
      //     (c || d));
      if (!this.start_of_object_property()) {
        this.allow_wrap_or_preserved_newline(current_token);
      }
    } else if (this._flags.last_token.type === TOKEN.WORD) {
      this._output.space_before_token = false;

      // function name() vs function name ()
      // function* name() vs function* name ()
      // async name() vs async name ()
      // In ES6, you can also define the method properties of an object
      // var obj = {a: function() {}}
      // It can be abbreviated
      // var obj = {a() {}}
      // var obj = { a() {}} vs var obj = { a () {}}
      // var obj = { * a() {}} vs var obj = { * a () {}}
      var peek_back_two = this._tokens.peek(-3);
      if (this._options.space_after_named_function && peek_back_two) {
        // peek starts at next character so -1 is current token
        var peek_back_three = this._tokens.peek(-4);
        if (reserved_array(peek_back_two, ['async', 'function']) ||
          (peek_back_two.text === '*' && reserved_array(peek_back_three, ['async', 'function']))) {
          this._output.space_before_token = true;
        } else if (this._flags.mode === MODE.ObjectLiteral) {
          if ((peek_back_two.text === '{' || peek_back_two.text === ',') ||
            (peek_back_two.text === '*' && (peek_back_three.text === '{' || peek_back_three.text === ','))) {
            this._output.space_before_token = true;
          }
        }
      }
    } else {
      // Support preserving wrapped arrow function expressions
      // a.b('c',
      //     () => d.e
      // )
      this.allow_wrap_or_preserved_newline(current_token);
    }

    // function() vs function ()
    // yield*() vs yield* ()
    // function*() vs function* ()
    if ((this._flags.last_token.type === TOKEN.RESERVED && (this._flags.last_word === 'function' || this._flags.last_word === 'typeof')) ||
      (this._flags.last_token.text === '*' &&
        (in_array(this._last_last_text, ['function', 'yield']) ||
          (this._flags.mode === MODE.ObjectLiteral && in_array(this._last_last_text, ['{', ',']))))) {
      this._output.space_before_token = this._options.space_after_anon_function;
    }
  }

  if (this._flags.last_token.text === ';' || this._flags.last_token.type === TOKEN.START_BLOCK) {
    this.print_newline();
  } else if (this._flags.last_token.type === TOKEN.END_EXPR || this._flags.last_token.type === TOKEN.START_EXPR || this._flags.last_token.type === TOKEN.END_BLOCK || this._flags.last_token.text === '.' || this._flags.last_token.type === TOKEN.COMMA) {
    // do nothing on (( and )( and ][ and ]( and .(
    // TODO: Consider whether forcing this is required.  Review failing tests when removed.
    this.allow_wrap_or_preserved_newline(current_token, current_token.newlines);
  }

  this.print_token(current_token);
  this.set_mode(next_mode);
  if (this._options.space_in_paren) {
    this._output.space_before_token = true;
  }

  // In all cases, if we newline while inside an expression it should be indented.
  this.indent();
};

Beautifier.prototype.handle_end_expr = function(current_token) {
  // statements inside expressions are not valid syntax, but...
  // statements must all be closed when their container closes
  while (this._flags.mode === MODE.Statement) {
    this.restore_mode();
  }

  this.handle_whitespace_and_comments(current_token);

  if (this._flags.multiline_frame) {
    this.allow_wrap_or_preserved_newline(current_token,
      current_token.text === ']' && is_array(this._flags.mode) && !this._options.keep_array_indentation);
  }

  if (this._options.space_in_paren) {
    if (this._flags.last_token.type === TOKEN.START_EXPR && !this._options.space_in_empty_paren) {
      // () [] no inner space in empty parens like these, ever, ref #320
      this._output.trim();
      this._output.space_before_token = false;
    } else {
      this._output.space_before_token = true;
    }
  }
  this.deindent();
  this.print_token(current_token);
  this.restore_mode();

  remove_redundant_indentation(this._output, this._previous_flags);

  // do {} while () // no statement required after
  if (this._flags.do_while && this._previous_flags.mode === MODE.Conditional) {
    this._previous_flags.mode = MODE.Expression;
    this._flags.do_block = false;
    this._flags.do_while = false;

  }
};

Beautifier.prototype.handle_start_block = function(current_token) {
  this.handle_whitespace_and_comments(current_token);

  // Check if this is should be treated as a ObjectLiteral
  var next_token = this._tokens.peek();
  var second_token = this._tokens.peek(1);
  if (this._flags.last_word === 'switch' && this._flags.last_token.type === TOKEN.END_EXPR) {
    this.set_mode(MODE.BlockStatement);
    this._flags.in_case_statement = true;
  } else if (this._flags.case_body) {
    this.set_mode(MODE.BlockStatement);
  } else if (second_token && (
      (in_array(second_token.text, [':', ',']) && in_array(next_token.type, [TOKEN.STRING, TOKEN.WORD, TOKEN.RESERVED])) ||
      (in_array(next_token.text, ['get', 'set', '...']) && in_array(second_token.type, [TOKEN.WORD, TOKEN.RESERVED]))
    )) {
    // We don't support TypeScript,but we didn't break it for a very long time.
    // We'll try to keep not breaking it.
    if (!in_array(this._last_last_text, ['class', 'interface'])) {
      this.set_mode(MODE.ObjectLiteral);
    } else {
      this.set_mode(MODE.BlockStatement);
    }
  } else if (this._flags.last_token.type === TOKEN.OPERATOR && this._flags.last_token.text === '=>') {
    // arrow function: (param1, paramN) => { statements }
    this.set_mode(MODE.BlockStatement);
  } else if (in_array(this._flags.last_token.type, [TOKEN.EQUALS, TOKEN.START_EXPR, TOKEN.COMMA, TOKEN.OPERATOR]) ||
    reserved_array(this._flags.last_token, ['return', 'throw', 'import', 'default'])
  ) {
    // Detecting shorthand function syntax is difficult by scanning forward,
    //     so check the surrounding context.
    // If the block is being returned, imported, export default, passed as arg,
    //     assigned with = or assigned in a nested object, treat as an ObjectLiteral.
    this.set_mode(MODE.ObjectLiteral);
  } else {
    this.set_mode(MODE.BlockStatement);
  }

  var empty_braces = !next_token.comments_before && next_token.text === '}';
  var empty_anonymous_function = empty_braces && this._flags.last_word === 'function' &&
    this._flags.last_token.type === TOKEN.END_EXPR;

  if (this._options.brace_preserve_inline) // check for inline, set inline_frame if so
  {
    // search forward for a newline wanted inside this block
    var index = 0;
    var check_token = null;
    this._flags.inline_frame = true;
    do {
      index += 1;
      check_token = this._tokens.peek(index - 1);
      if (check_token.newlines) {
        this._flags.inline_frame = false;
        break;
      }
    } while (check_token.type !== TOKEN.EOF &&
      !(check_token.type === TOKEN.END_BLOCK && check_token.opened === current_token));
  }

  if ((this._options.brace_style === "expand" ||
      (this._options.brace_style === "none" && current_token.newlines)) &&
    !this._flags.inline_frame) {
    if (this._flags.last_token.type !== TOKEN.OPERATOR &&
      (empty_anonymous_function ||
        this._flags.last_token.type === TOKEN.EQUALS ||
        (reserved_array(this._flags.last_token, special_words) && this._flags.last_token.text !== 'else'))) {
      this._output.space_before_token = true;
    } else {
      this.print_newline(false, true);
    }
  } else { // collapse || inline_frame
    if (is_array(this._previous_flags.mode) && (this._flags.last_token.type === TOKEN.START_EXPR || this._flags.last_token.type === TOKEN.COMMA)) {
      if (this._flags.last_token.type === TOKEN.COMMA || this._options.space_in_paren) {
        this._output.space_before_token = true;
      }

      if (this._flags.last_token.type === TOKEN.COMMA || (this._flags.last_token.type === TOKEN.START_EXPR && this._flags.inline_frame)) {
        this.allow_wrap_or_preserved_newline(current_token);
        this._previous_flags.multiline_frame = this._previous_flags.multiline_frame || this._flags.multiline_frame;
        this._flags.multiline_frame = false;
      }
    }
    if (this._flags.last_token.type !== TOKEN.OPERATOR && this._flags.last_token.type !== TOKEN.START_EXPR) {
      if (this._flags.last_token.type === TOKEN.START_BLOCK && !this._flags.inline_frame) {
        this.print_newline();
      } else {
        this._output.space_before_token = true;
      }
    }
  }
  this.print_token(current_token);
  this.indent();

  // Except for specific cases, open braces are followed by a new line.
  if (!empty_braces && !(this._options.brace_preserve_inline && this._flags.inline_frame)) {
    this.print_newline();
  }
};

Beautifier.prototype.handle_end_block = function(current_token) {
  // statements must all be closed when their container closes
  this.handle_whitespace_and_comments(current_token);

  while (this._flags.mode === MODE.Statement) {
    this.restore_mode();
  }

  var empty_braces = this._flags.last_token.type === TOKEN.START_BLOCK;

  if (this._flags.inline_frame && !empty_braces) { // try inline_frame (only set if this._options.braces-preserve-inline) first
    this._output.space_before_token = true;
  } else if (this._options.brace_style === "expand") {
    if (!empty_braces) {
      this.print_newline();
    }
  } else {
    // skip {}
    if (!empty_braces) {
      if (is_array(this._flags.mode) && this._options.keep_array_indentation) {
        // we REALLY need a newline here, but newliner would skip that
        this._options.keep_array_indentation = false;
        this.print_newline();
        this._options.keep_array_indentation = true;

      } else {
        this.print_newline();
      }
    }
  }
  this.restore_mode();
  this.print_token(current_token);
};

Beautifier.prototype.handle_word = function(current_token) {
  if (current_token.type === TOKEN.RESERVED) {
    if (in_array(current_token.text, ['set', 'get']) && this._flags.mode !== MODE.ObjectLiteral) {
      current_token.type = TOKEN.WORD;
    } else if (current_token.text === 'import' && this._tokens.peek().text === '(') {
      current_token.type = TOKEN.WORD;
    } else if (in_array(current_token.text, ['as', 'from']) && !this._flags.import_block) {
      current_token.type = TOKEN.WORD;
    } else if (this._flags.mode === MODE.ObjectLiteral) {
      var next_token = this._tokens.peek();
      if (next_token.text === ':') {
        current_token.type = TOKEN.WORD;
      }
    }
  }

  if (this.start_of_statement(current_token)) {
    // The conditional starts the statement if appropriate.
    if (reserved_array(this._flags.last_token, ['var', 'let', 'const']) && current_token.type === TOKEN.WORD) {
      this._flags.declaration_statement = true;
    }
  } else if (current_token.newlines && !is_expression(this._flags.mode) &&
    (this._flags.last_token.type !== TOKEN.OPERATOR || (this._flags.last_token.text === '--' || this._flags.last_token.text === '++')) &&
    this._flags.last_token.type !== TOKEN.EQUALS &&
    (this._options.preserve_newlines || !reserved_array(this._flags.last_token, ['var', 'let', 'const', 'set', 'get']))) {
    this.handle_whitespace_and_comments(current_token);
    this.print_newline();
  } else {
    this.handle_whitespace_and_comments(current_token);
  }

  if (this._flags.do_block && !this._flags.do_while) {
    if (reserved_word(current_token, 'while')) {
      // do {} ## while ()
      this._output.space_before_token = true;
      this.print_token(current_token);
      this._output.space_before_token = true;
      this._flags.do_while = true;
      return;
    } else {
      // do {} should always have while as the next word.
      // if we don't see the expected while, recover
      this.print_newline();
      this._flags.do_block = false;
    }
  }

  // if may be followed by else, or not
  // Bare/inline ifs are tricky
  // Need to unwind the modes correctly: if (a) if (b) c(); else d(); else e();
  if (this._flags.if_block) {
    if (!this._flags.else_block && reserved_word(current_token, 'else')) {
      this._flags.else_block = true;
    } else {
      while (this._flags.mode === MODE.Statement) {
        this.restore_mode();
      }
      this._flags.if_block = false;
      this._flags.else_block = false;
    }
  }

  if (this._flags.in_case_statement && reserved_array(current_token, ['case', 'default'])) {
    this.print_newline();
    if (this._flags.last_token.type !== TOKEN.END_BLOCK && (this._flags.case_body || this._options.jslint_happy)) {
      // switch cases following one another
      this.deindent();
    }
    this._flags.case_body = false;

    this.print_token(current_token);
    this._flags.in_case = true;
    return;
  }

  if (this._flags.last_token.type === TOKEN.COMMA || this._flags.last_token.type === TOKEN.START_EXPR || this._flags.last_token.type === TOKEN.EQUALS || this._flags.last_token.type === TOKEN.OPERATOR) {
    if (!this.start_of_object_property()) {
      this.allow_wrap_or_preserved_newline(current_token);
    }
  }

  if (reserved_word(current_token, 'function')) {
    if (in_array(this._flags.last_token.text, ['}', ';']) ||
      (this._output.just_added_newline() && !(in_array(this._flags.last_token.text, ['(', '[', '{', ':', '=', ',']) || this._flags.last_token.type === TOKEN.OPERATOR))) {
      // make sure there is a nice clean space of at least one blank line
      // before a new function definition
      if (!this._output.just_added_blankline() && !current_token.comments_before) {
        this.print_newline();
        this.print_newline(true);
      }
    }
    if (this._flags.last_token.type === TOKEN.RESERVED || this._flags.last_token.type === TOKEN.WORD) {
      if (reserved_array(this._flags.last_token, ['get', 'set', 'new', 'export']) ||
        reserved_array(this._flags.last_token, newline_restricted_tokens)) {
        this._output.space_before_token = true;
      } else if (reserved_word(this._flags.last_token, 'default') && this._last_last_text === 'export') {
        this._output.space_before_token = true;
      } else if (this._flags.last_token.text === 'declare') {
        // accomodates Typescript declare function formatting
        this._output.space_before_token = true;
      } else {
        this.print_newline();
      }
    } else if (this._flags.last_token.type === TOKEN.OPERATOR || this._flags.last_token.text === '=') {
      // foo = function
      this._output.space_before_token = true;
    } else if (!this._flags.multiline_frame && (is_expression(this._flags.mode) || is_array(this._flags.mode))) {
      // (function
    } else {
      this.print_newline();
    }

    this.print_token(current_token);
    this._flags.last_word = current_token.text;
    return;
  }

  var prefix = 'NONE';

  if (this._flags.last_token.type === TOKEN.END_BLOCK) {

    if (this._previous_flags.inline_frame) {
      prefix = 'SPACE';
    } else if (!reserved_array(current_token, ['else', 'catch', 'finally', 'from'])) {
      prefix = 'NEWLINE';
    } else {
      if (this._options.brace_style === "expand" ||
        this._options.brace_style === "end-expand" ||
        (this._options.brace_style === "none" && current_token.newlines)) {
        prefix = 'NEWLINE';
      } else {
        prefix = 'SPACE';
        this._output.space_before_token = true;
      }
    }
  } else if (this._flags.last_token.type === TOKEN.SEMICOLON && this._flags.mode === MODE.BlockStatement) {
    // TODO: Should this be for STATEMENT as well?
    prefix = 'NEWLINE';
  } else if (this._flags.last_token.type === TOKEN.SEMICOLON && is_expression(this._flags.mode)) {
    prefix = 'SPACE';
  } else if (this._flags.last_token.type === TOKEN.STRING) {
    prefix = 'NEWLINE';
  } else if (this._flags.last_token.type === TOKEN.RESERVED || this._flags.last_token.type === TOKEN.WORD ||
    (this._flags.last_token.text === '*' &&
      (in_array(this._last_last_text, ['function', 'yield']) ||
        (this._flags.mode === MODE.ObjectLiteral && in_array(this._last_last_text, ['{', ',']))))) {
    prefix = 'SPACE';
  } else if (this._flags.last_token.type === TOKEN.START_BLOCK) {
    if (this._flags.inline_frame) {
      prefix = 'SPACE';
    } else {
      prefix = 'NEWLINE';
    }
  } else if (this._flags.last_token.type === TOKEN.END_EXPR) {
    this._output.space_before_token = true;
    prefix = 'NEWLINE';
  }

  if (reserved_array(current_token, line_starters) && this._flags.last_token.text !== ')') {
    if (this._flags.inline_frame || this._flags.last_token.text === 'else' || this._flags.last_token.text === 'export') {
      prefix = 'SPACE';
    } else {
      prefix = 'NEWLINE';
    }

  }

  if (reserved_array(current_token, ['else', 'catch', 'finally'])) {
    if ((!(this._flags.last_token.type === TOKEN.END_BLOCK && this._previous_flags.mode === MODE.BlockStatement) ||
        this._options.brace_style === "expand" ||
        this._options.brace_style === "end-expand" ||
        (this._options.brace_style === "none" && current_token.newlines)) &&
      !this._flags.inline_frame) {
      this.print_newline();
    } else {
      this._output.trim(true);
      var line = this._output.current_line;
      // If we trimmed and there's something other than a close block before us
      // put a newline back in.  Handles '} // comment' scenario.
      if (line.last() !== '}') {
        this.print_newline();
      }
      this._output.space_before_token = true;
    }
  } else if (prefix === 'NEWLINE') {
    if (reserved_array(this._flags.last_token, special_words)) {
      // no newline between 'return nnn'
      this._output.space_before_token = true;
    } else if (this._flags.last_token.text === 'declare' && reserved_array(current_token, ['var', 'let', 'const'])) {
      // accomodates Typescript declare formatting
      this._output.space_before_token = true;
    } else if (this._flags.last_token.type !== TOKEN.END_EXPR) {
      if ((this._flags.last_token.type !== TOKEN.START_EXPR || !reserved_array(current_token, ['var', 'let', 'const'])) && this._flags.last_token.text !== ':') {
        // no need to force newline on 'var': for (var x = 0...)
        if (reserved_word(current_token, 'if') && reserved_word(current_token.previous, 'else')) {
          // no newline for } else if {
          this._output.space_before_token = true;
        } else {
          this.print_newline();
        }
      }
    } else if (reserved_array(current_token, line_starters) && this._flags.last_token.text !== ')') {
      this.print_newline();
    }
  } else if (this._flags.multiline_frame && is_array(this._flags.mode) && this._flags.last_token.text === ',' && this._last_last_text === '}') {
    this.print_newline(); // }, in lists get a newline treatment
  } else if (prefix === 'SPACE') {
    this._output.space_before_token = true;
  }
  if (current_token.previous && (current_token.previous.type === TOKEN.WORD || current_token.previous.type === TOKEN.RESERVED)) {
    this._output.space_before_token = true;
  }
  this.print_token(current_token);
  this._flags.last_word = current_token.text;

  if (current_token.type === TOKEN.RESERVED) {
    if (current_token.text === 'do') {
      this._flags.do_block = true;
    } else if (current_token.text === 'if') {
      this._flags.if_block = true;
    } else if (current_token.text === 'import') {
      this._flags.import_block = true;
    } else if (this._flags.import_block && reserved_word(current_token, 'from')) {
      this._flags.import_block = false;
    }
  }
};

Beautifier.prototype.handle_semicolon = function(current_token) {
  if (this.start_of_statement(current_token)) {
    // The conditional starts the statement if appropriate.
    // Semicolon can be the start (and end) of a statement
    this._output.space_before_token = false;
  } else {
    this.handle_whitespace_and_comments(current_token);
  }

  var next_token = this._tokens.peek();
  while (this._flags.mode === MODE.Statement &&
    !(this._flags.if_block && reserved_word(next_token, 'else')) &&
    !this._flags.do_block) {
    this.restore_mode();
  }

  // hacky but effective for the moment
  if (this._flags.import_block) {
    this._flags.import_block = false;
  }
  this.print_token(current_token);
};

Beautifier.prototype.handle_string = function(current_token) {
  if (this.start_of_statement(current_token)) {
    // The conditional starts the statement if appropriate.
    // One difference - strings want at least a space before
    this._output.space_before_token = true;
  } else {
    this.handle_whitespace_and_comments(current_token);
    if (this._flags.last_token.type === TOKEN.RESERVED || this._flags.last_token.type === TOKEN.WORD || this._flags.inline_frame) {
      this._output.space_before_token = true;
    } else if (this._flags.last_token.type === TOKEN.COMMA || this._flags.last_token.type === TOKEN.START_EXPR || this._flags.last_token.type === TOKEN.EQUALS || this._flags.last_token.type === TOKEN.OPERATOR) {
      if (!this.start_of_object_property()) {
        this.allow_wrap_or_preserved_newline(current_token);
      }
    } else {
      this.print_newline();
    }
  }
  this.print_token(current_token);
};

Beautifier.prototype.handle_equals = function(current_token) {
  if (this.start_of_statement(current_token)) {
    // The conditional starts the statement if appropriate.
  } else {
    this.handle_whitespace_and_comments(current_token);
  }

  if (this._flags.declaration_statement) {
    // just got an '=' in a var-line, different formatting/line-breaking, etc will now be done
    this._flags.declaration_assignment = true;
  }
  this._output.space_before_token = true;
  this.print_token(current_token);
  this._output.space_before_token = true;
};

Beautifier.prototype.handle_comma = function(current_token) {
  this.handle_whitespace_and_comments(current_token, true);

  this.print_token(current_token);
  this._output.space_before_token = true;
  if (this._flags.declaration_statement) {
    if (is_expression(this._flags.parent.mode)) {
      // do not break on comma, for(var a = 1, b = 2)
      this._flags.declaration_assignment = false;
    }

    if (this._flags.declaration_assignment) {
      this._flags.declaration_assignment = false;
      this.print_newline(false, true);
    } else if (this._options.comma_first) {
      // for comma-first, we want to allow a newline before the comma
      // to turn into a newline after the comma, which we will fixup later
      this.allow_wrap_or_preserved_newline(current_token);
    }
  } else if (this._flags.mode === MODE.ObjectLiteral ||
    (this._flags.mode === MODE.Statement && this._flags.parent.mode === MODE.ObjectLiteral)) {
    if (this._flags.mode === MODE.Statement) {
      this.restore_mode();
    }

    if (!this._flags.inline_frame) {
      this.print_newline();
    }
  } else if (this._options.comma_first) {
    // EXPR or DO_BLOCK
    // for comma-first, we want to allow a newline before the comma
    // to turn into a newline after the comma, which we will fixup later
    this.allow_wrap_or_preserved_newline(current_token);
  }
};

Beautifier.prototype.handle_operator = function(current_token) {
  var isGeneratorAsterisk = current_token.text === '*' &&
    (reserved_array(this._flags.last_token, ['function', 'yield']) ||
      (in_array(this._flags.last_token.type, [TOKEN.START_BLOCK, TOKEN.COMMA, TOKEN.END_BLOCK, TOKEN.SEMICOLON]))
    );
  var isUnary = in_array(current_token.text, ['-', '+']) && (
    in_array(this._flags.last_token.type, [TOKEN.START_BLOCK, TOKEN.START_EXPR, TOKEN.EQUALS, TOKEN.OPERATOR]) ||
    in_array(this._flags.last_token.text, line_starters) ||
    this._flags.last_token.text === ','
  );

  if (this.start_of_statement(current_token)) {
    // The conditional starts the statement if appropriate.
  } else {
    var preserve_statement_flags = !isGeneratorAsterisk;
    this.handle_whitespace_and_comments(current_token, preserve_statement_flags);
  }

  if (reserved_array(this._flags.last_token, special_words)) {
    // "return" had a special handling in TK_WORD. Now we need to return the favor
    this._output.space_before_token = true;
    this.print_token(current_token);
    return;
  }

  // hack for actionscript's import .*;
  if (current_token.text === '*' && this._flags.last_token.type === TOKEN.DOT) {
    this.print_token(current_token);
    return;
  }

  if (current_token.text === '::') {
    // no spaces around exotic namespacing syntax operator
    this.print_token(current_token);
    return;
  }

  // Allow line wrapping between operators when operator_position is
  //   set to before or preserve
  if (this._flags.last_token.type === TOKEN.OPERATOR && in_array(this._options.operator_position, OPERATOR_POSITION_BEFORE_OR_PRESERVE)) {
    this.allow_wrap_or_preserved_newline(current_token);
  }

  if (current_token.text === ':' && this._flags.in_case) {
    this.print_token(current_token);

    this._flags.in_case = false;
    this._flags.case_body = true;
    if (this._tokens.peek().type !== TOKEN.START_BLOCK) {
      this.indent();
      this.print_newline();
    } else {
      this._output.space_before_token = true;
    }
    return;
  }

  var space_before = true;
  var space_after = true;
  var in_ternary = false;
  if (current_token.text === ':') {
    if (this._flags.ternary_depth === 0) {
      // Colon is invalid javascript outside of ternary and object, but do our best to guess what was meant.
      space_before = false;
    } else {
      this._flags.ternary_depth -= 1;
      in_ternary = true;
    }
  } else if (current_token.text === '?') {
    this._flags.ternary_depth += 1;
  }

  // let's handle the operator_position option prior to any conflicting logic
  if (!isUnary && !isGeneratorAsterisk && this._options.preserve_newlines && in_array(current_token.text, positionable_operators)) {
    var isColon = current_token.text === ':';
    var isTernaryColon = (isColon && in_ternary);
    var isOtherColon = (isColon && !in_ternary);

    switch (this._options.operator_position) {
      case OPERATOR_POSITION.before_newline:
        // if the current token is : and it's not a ternary statement then we set space_before to false
        this._output.space_before_token = !isOtherColon;

        this.print_token(current_token);

        if (!isColon || isTernaryColon) {
          this.allow_wrap_or_preserved_newline(current_token);
        }

        this._output.space_before_token = true;
        return;

      case OPERATOR_POSITION.after_newline:
        // if the current token is anything but colon, or (via deduction) it's a colon and in a ternary statement,
        //   then print a newline.

        this._output.space_before_token = true;

        if (!isColon || isTernaryColon) {
          if (this._tokens.peek().newlines) {
            this.print_newline(false, true);
          } else {
            this.allow_wrap_or_preserved_newline(current_token);
          }
        } else {
          this._output.space_before_token = false;
        }

        this.print_token(current_token);

        this._output.space_before_token = true;
        return;

      case OPERATOR_POSITION.preserve_newline:
        if (!isOtherColon) {
          this.allow_wrap_or_preserved_newline(current_token);
        }

        // if we just added a newline, or the current token is : and it's not a ternary statement,
        //   then we set space_before to false
        space_before = !(this._output.just_added_newline() || isOtherColon);

        this._output.space_before_token = space_before;
        this.print_token(current_token);
        this._output.space_before_token = true;
        return;
    }
  }

  if (isGeneratorAsterisk) {
    this.allow_wrap_or_preserved_newline(current_token);
    space_before = false;
    var next_token = this._tokens.peek();
    space_after = next_token && in_array(next_token.type, [TOKEN.WORD, TOKEN.RESERVED]);
  } else if (current_token.text === '...') {
    this.allow_wrap_or_preserved_newline(current_token);
    space_before = this._flags.last_token.type === TOKEN.START_BLOCK;
    space_after = false;
  } else if (in_array(current_token.text, ['--', '++', '!', '~']) || isUnary) {
    // unary operators (and binary +/- pretending to be unary) special cases
    if (this._flags.last_token.type === TOKEN.COMMA || this._flags.last_token.type === TOKEN.START_EXPR) {
      this.allow_wrap_or_preserved_newline(current_token);
    }

    space_before = false;
    space_after = false;

    // http://www.ecma-international.org/ecma-262/5.1/#sec-7.9.1
    // if there is a newline between -- or ++ and anything else we should preserve it.
    if (current_token.newlines && (current_token.text === '--' || current_token.text === '++')) {
      this.print_newline(false, true);
    }

    if (this._flags.last_token.text === ';' && is_expression(this._flags.mode)) {
      // for (;; ++i)
      //        ^^^
      space_before = true;
    }

    if (this._flags.last_token.type === TOKEN.RESERVED) {
      space_before = true;
    } else if (this._flags.last_token.type === TOKEN.END_EXPR) {
      space_before = !(this._flags.last_token.text === ']' && (current_token.text === '--' || current_token.text === '++'));
    } else if (this._flags.last_token.type === TOKEN.OPERATOR) {
      // a++ + ++b;
      // a - -b
      space_before = in_array(current_token.text, ['--', '-', '++', '+']) && in_array(this._flags.last_token.text, ['--', '-', '++', '+']);
      // + and - are not unary when preceeded by -- or ++ operator
      // a-- + b
      // a * +b
      // a - -b
      if (in_array(current_token.text, ['+', '-']) && in_array(this._flags.last_token.text, ['--', '++'])) {
        space_after = true;
      }
    }


    if (((this._flags.mode === MODE.BlockStatement && !this._flags.inline_frame) || this._flags.mode === MODE.Statement) &&
      (this._flags.last_token.text === '{' || this._flags.last_token.text === ';')) {
      // { foo; --i }
      // foo(); --bar;
      this.print_newline();
    }
  }

  this._output.space_before_token = this._output.space_before_token || space_before;
  this.print_token(current_token);
  this._output.space_before_token = space_after;
};

Beautifier.prototype.handle_block_comment = function(current_token, preserve_statement_flags) {
  if (this._output.raw) {
    this._output.add_raw_token(current_token);
    if (current_token.directives && current_token.directives.preserve === 'end') {
      // If we're testing the raw output behavior, do not allow a directive to turn it off.
      this._output.raw = this._options.test_output_raw;
    }
    return;
  }

  if (current_token.directives) {
    this.print_newline(false, preserve_statement_flags);
    this.print_token(current_token);
    if (current_token.directives.preserve === 'start') {
      this._output.raw = true;
    }
    this.print_newline(false, true);
    return;
  }

  // inline block
  if (!acorn.newline.test(current_token.text) && !current_token.newlines) {
    this._output.space_before_token = true;
    this.print_token(current_token);
    this._output.space_before_token = true;
    return;
  } else {
    this.print_block_commment(current_token, preserve_statement_flags);
  }
};

Beautifier.prototype.print_block_commment = function(current_token, preserve_statement_flags) {
  var lines = split_linebreaks(current_token.text);
  var j; // iterator for this case
  var javadoc = false;
  var starless = false;
  var lastIndent = current_token.whitespace_before;
  var lastIndentLength = lastIndent.length;

  // block comment starts with a new line
  this.print_newline(false, preserve_statement_flags);

  // first line always indented
  this.print_token_line_indentation(current_token);
  this._output.add_token(lines[0]);
  this.print_newline(false, preserve_statement_flags);


  if (lines.length > 1) {
    lines = lines.slice(1);
    javadoc = all_lines_start_with(lines, '*');
    starless = each_line_matches_indent(lines, lastIndent);

    if (javadoc) {
      this._flags.alignment = 1;
    }

    for (j = 0; j < lines.length; j++) {
      if (javadoc) {
        // javadoc: reformat and re-indent
        this.print_token_line_indentation(current_token);
        this._output.add_token(ltrim(lines[j]));
      } else if (starless && lines[j]) {
        // starless: re-indent non-empty content, avoiding trim
        this.print_token_line_indentation(current_token);
        this._output.add_token(lines[j].substring(lastIndentLength));
      } else {
        // normal comments output raw
        this._output.current_line.set_indent(-1);
        this._output.add_token(lines[j]);
      }

      // for comments on their own line or  more than one line, make sure there's a new line after
      this.print_newline(false, preserve_statement_flags);
    }

    this._flags.alignment = 0;
  }
};


Beautifier.prototype.handle_comment = function(current_token, preserve_statement_flags) {
  if (current_token.newlines) {
    this.print_newline(false, preserve_statement_flags);
  } else {
    this._output.trim(true);
  }

  this._output.space_before_token = true;
  this.print_token(current_token);
  this.print_newline(false, preserve_statement_flags);
};

Beautifier.prototype.handle_dot = function(current_token) {
  if (this.start_of_statement(current_token)) {
    // The conditional starts the statement if appropriate.
  } else {
    this.handle_whitespace_and_comments(current_token, true);
  }

  if (reserved_array(this._flags.last_token, special_words)) {
    this._output.space_before_token = false;
  } else {
    // allow preserved newlines before dots in general
    // force newlines on dots after close paren when break_chained - for bar().baz()
    this.allow_wrap_or_preserved_newline(current_token,
      this._flags.last_token.text === ')' && this._options.break_chained_methods);
  }

  // Only unindent chained method dot if this dot starts a new line.
  // Otherwise the automatic extra indentation removal will handle the over indent
  if (this._options.unindent_chained_methods && this._output.just_added_newline()) {
    this.deindent();
  }

  this.print_token(current_token);
};

Beautifier.prototype.handle_unknown = function(current_token, preserve_statement_flags) {
  this.print_token(current_token);

  if (current_token.text[current_token.text.length - 1] === '\n') {
    this.print_newline(false, preserve_statement_flags);
  }
};

Beautifier.prototype.handle_eof = function(current_token) {
  // Unwind any open statements
  while (this._flags.mode === MODE.Statement) {
    this.restore_mode();
  }
  this.handle_whitespace_and_comments(current_token);
};

module.exports.Beautifier = Beautifier;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*jshint node:true */
/*
  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/



function OutputLine(parent) {
  this.__parent = parent;
  this.__character_count = 0;
  // use indent_count as a marker for this.__lines that have preserved indentation
  this.__indent_count = -1;
  this.__alignment_count = 0;
  this.__wrap_point_index = 0;
  this.__wrap_point_character_count = 0;
  this.__wrap_point_indent_count = -1;
  this.__wrap_point_alignment_count = 0;

  this.__items = [];
}

OutputLine.prototype.clone_empty = function() {
  var line = new OutputLine(this.__parent);
  line.set_indent(this.__indent_count, this.__alignment_count);
  return line;
};

OutputLine.prototype.item = function(index) {
  if (index < 0) {
    return this.__items[this.__items.length + index];
  } else {
    return this.__items[index];
  }
};

OutputLine.prototype.has_match = function(pattern) {
  for (var lastCheckedOutput = this.__items.length - 1; lastCheckedOutput >= 0; lastCheckedOutput--) {
    if (this.__items[lastCheckedOutput].match(pattern)) {
      return true;
    }
  }
  return false;
};

OutputLine.prototype.set_indent = function(indent, alignment) {
  if (this.is_empty()) {
    this.__indent_count = indent || 0;
    this.__alignment_count = alignment || 0;
    this.__character_count = this.__parent.get_indent_size(this.__indent_count, this.__alignment_count);
  }
};

OutputLine.prototype._set_wrap_point = function() {
  if (this.__parent.wrap_line_length) {
    this.__wrap_point_index = this.__items.length;
    this.__wrap_point_character_count = this.__character_count;
    this.__wrap_point_indent_count = this.__parent.next_line.__indent_count;
    this.__wrap_point_alignment_count = this.__parent.next_line.__alignment_count;
  }
};

OutputLine.prototype._should_wrap = function() {
  return this.__wrap_point_index &&
    this.__character_count > this.__parent.wrap_line_length &&
    this.__wrap_point_character_count > this.__parent.next_line.__character_count;
};

OutputLine.prototype._allow_wrap = function() {
  if (this._should_wrap()) {
    this.__parent.add_new_line();
    var next = this.__parent.current_line;
    next.set_indent(this.__wrap_point_indent_count, this.__wrap_point_alignment_count);
    next.__items = this.__items.slice(this.__wrap_point_index);
    this.__items = this.__items.slice(0, this.__wrap_point_index);

    next.__character_count += this.__character_count - this.__wrap_point_character_count;
    this.__character_count = this.__wrap_point_character_count;

    if (next.__items[0] === " ") {
      next.__items.splice(0, 1);
      next.__character_count -= 1;
    }
    return true;
  }
  return false;
};

OutputLine.prototype.is_empty = function() {
  return this.__items.length === 0;
};

OutputLine.prototype.last = function() {
  if (!this.is_empty()) {
    return this.__items[this.__items.length - 1];
  } else {
    return null;
  }
};

OutputLine.prototype.push = function(item) {
  this.__items.push(item);
  var last_newline_index = item.lastIndexOf('\n');
  if (last_newline_index !== -1) {
    this.__character_count = item.length - last_newline_index;
  } else {
    this.__character_count += item.length;
  }
};

OutputLine.prototype.pop = function() {
  var item = null;
  if (!this.is_empty()) {
    item = this.__items.pop();
    this.__character_count -= item.length;
  }
  return item;
};


OutputLine.prototype._remove_indent = function() {
  if (this.__indent_count > 0) {
    this.__indent_count -= 1;
    this.__character_count -= this.__parent.indent_size;
  }
};

OutputLine.prototype._remove_wrap_indent = function() {
  if (this.__wrap_point_indent_count > 0) {
    this.__wrap_point_indent_count -= 1;
  }
};
OutputLine.prototype.trim = function() {
  while (this.last() === ' ') {
    this.__items.pop();
    this.__character_count -= 1;
  }
};

OutputLine.prototype.toString = function() {
  var result = '';
  if (this.is_empty()) {
    if (this.__parent.indent_empty_lines) {
      result = this.__parent.get_indent_string(this.__indent_count);
    }
  } else {
    result = this.__parent.get_indent_string(this.__indent_count, this.__alignment_count);
    result += this.__items.join('');
  }
  return result;
};

function IndentStringCache(options, baseIndentString) {
  this.__cache = [''];
  this.__indent_size = options.indent_size;
  this.__indent_string = options.indent_char;
  if (!options.indent_with_tabs) {
    this.__indent_string = new Array(options.indent_size + 1).join(options.indent_char);
  }

  // Set to null to continue support for auto detection of base indent
  baseIndentString = baseIndentString || '';
  if (options.indent_level > 0) {
    baseIndentString = new Array(options.indent_level + 1).join(this.__indent_string);
  }

  this.__base_string = baseIndentString;
  this.__base_string_length = baseIndentString.length;
}

IndentStringCache.prototype.get_indent_size = function(indent, column) {
  var result = this.__base_string_length;
  column = column || 0;
  if (indent < 0) {
    result = 0;
  }
  result += indent * this.__indent_size;
  result += column;
  return result;
};

IndentStringCache.prototype.get_indent_string = function(indent_level, column) {
  var result = this.__base_string;
  column = column || 0;
  if (indent_level < 0) {
    indent_level = 0;
    result = '';
  }
  column += indent_level * this.__indent_size;
  this.__ensure_cache(column);
  result += this.__cache[column];
  return result;
};

IndentStringCache.prototype.__ensure_cache = function(column) {
  while (column >= this.__cache.length) {
    this.__add_column();
  }
};

IndentStringCache.prototype.__add_column = function() {
  var column = this.__cache.length;
  var indent = 0;
  var result = '';
  if (this.__indent_size && column >= this.__indent_size) {
    indent = Math.floor(column / this.__indent_size);
    column -= indent * this.__indent_size;
    result = new Array(indent + 1).join(this.__indent_string);
  }
  if (column) {
    result += new Array(column + 1).join(' ');
  }

  this.__cache.push(result);
};

function Output(options, baseIndentString) {
  this.__indent_cache = new IndentStringCache(options, baseIndentString);
  this.raw = false;
  this._end_with_newline = options.end_with_newline;
  this.indent_size = options.indent_size;
  this.wrap_line_length = options.wrap_line_length;
  this.indent_empty_lines = options.indent_empty_lines;
  this.__lines = [];
  this.previous_line = null;
  this.current_line = null;
  this.next_line = new OutputLine(this);
  this.space_before_token = false;
  this.non_breaking_space = false;
  this.previous_token_wrapped = false;
  // initialize
  this.__add_outputline();
}

Output.prototype.__add_outputline = function() {
  this.previous_line = this.current_line;
  this.current_line = this.next_line.clone_empty();
  this.__lines.push(this.current_line);
};

Output.prototype.get_line_number = function() {
  return this.__lines.length;
};

Output.prototype.get_indent_string = function(indent, column) {
  return this.__indent_cache.get_indent_string(indent, column);
};

Output.prototype.get_indent_size = function(indent, column) {
  return this.__indent_cache.get_indent_size(indent, column);
};

Output.prototype.is_empty = function() {
  return !this.previous_line && this.current_line.is_empty();
};

Output.prototype.add_new_line = function(force_newline) {
  // never newline at the start of file
  // otherwise, newline only if we didn't just add one or we're forced
  if (this.is_empty() ||
    (!force_newline && this.just_added_newline())) {
    return false;
  }

  // if raw output is enabled, don't print additional newlines,
  // but still return True as though you had
  if (!this.raw) {
    this.__add_outputline();
  }
  return true;
};

Output.prototype.get_code = function(eol) {
  this.trim(true);

  // handle some edge cases where the last tokens
  // has text that ends with newline(s)
  var last_item = this.current_line.pop();
  if (last_item) {
    if (last_item[last_item.length - 1] === '\n') {
      last_item = last_item.replace(/\n+$/g, '');
    }
    this.current_line.push(last_item);
  }

  if (this._end_with_newline) {
    this.__add_outputline();
  }

  var sweet_code = this.__lines.join('\n');

  if (eol !== '\n') {
    sweet_code = sweet_code.replace(/[\n]/g, eol);
  }
  return sweet_code;
};

Output.prototype.set_wrap_point = function() {
  this.current_line._set_wrap_point();
};

Output.prototype.set_indent = function(indent, alignment) {
  indent = indent || 0;
  alignment = alignment || 0;

  // Next line stores alignment values
  this.next_line.set_indent(indent, alignment);

  // Never indent your first output indent at the start of the file
  if (this.__lines.length > 1) {
    this.current_line.set_indent(indent, alignment);
    return true;
  }

  this.current_line.set_indent();
  return false;
};

Output.prototype.add_raw_token = function(token) {
  for (var x = 0; x < token.newlines; x++) {
    this.__add_outputline();
  }
  this.current_line.set_indent(-1);
  this.current_line.push(token.whitespace_before);
  this.current_line.push(token.text);
  this.space_before_token = false;
  this.non_breaking_space = false;
  this.previous_token_wrapped = false;
};

Output.prototype.add_token = function(printable_token) {
  this.__add_space_before_token();
  this.current_line.push(printable_token);
  this.space_before_token = false;
  this.non_breaking_space = false;
  this.previous_token_wrapped = this.current_line._allow_wrap();
};

Output.prototype.__add_space_before_token = function() {
  if (this.space_before_token && !this.just_added_newline()) {
    if (!this.non_breaking_space) {
      this.set_wrap_point();
    }
    this.current_line.push(' ');
  }
};

Output.prototype.remove_indent = function(index) {
  var output_length = this.__lines.length;
  while (index < output_length) {
    this.__lines[index]._remove_indent();
    index++;
  }
  this.current_line._remove_wrap_indent();
};

Output.prototype.trim = function(eat_newlines) {
  eat_newlines = (eat_newlines === undefined) ? false : eat_newlines;

  this.current_line.trim();

  while (eat_newlines && this.__lines.length > 1 &&
    this.current_line.is_empty()) {
    this.__lines.pop();
    this.current_line = this.__lines[this.__lines.length - 1];
    this.current_line.trim();
  }

  this.previous_line = this.__lines.length > 1 ?
    this.__lines[this.__lines.length - 2] : null;
};

Output.prototype.just_added_newline = function() {
  return this.current_line.is_empty();
};

Output.prototype.just_added_blankline = function() {
  return this.is_empty() ||
    (this.current_line.is_empty() && this.previous_line.is_empty());
};

Output.prototype.ensure_empty_line_above = function(starts_with, ends_with) {
  var index = this.__lines.length - 2;
  while (index >= 0) {
    var potentialEmptyLine = this.__lines[index];
    if (potentialEmptyLine.is_empty()) {
      break;
    } else if (potentialEmptyLine.item(0).indexOf(starts_with) !== 0 &&
      potentialEmptyLine.item(-1) !== ends_with) {
      this.__lines.splice(index + 1, 0, new OutputLine(this));
      this.previous_line = this.__lines[this.__lines.length - 2];
      break;
    }
    index--;
  }
};

module.exports.Output = Output;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*jshint node:true */
/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/



function Token(type, text, newlines, whitespace_before) {
  this.type = type;
  this.text = text;

  // comments_before are
  // comments that have a new line before them
  // and may or may not have a newline after
  // this is a set of comments before
  this.comments_before = null; /* inline comment*/


  // this.comments_after =  new TokenStream(); // no new line before and newline after
  this.newlines = newlines || 0;
  this.whitespace_before = whitespace_before || '';
  this.parent = null;
  this.next = null;
  this.previous = null;
  this.opened = null;
  this.closed = null;
  this.directives = null;
}


module.exports.Token = Token;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* jshint node: true, curly: false */
// Parts of this section of code is taken from acorn.
//
// Acorn was written by Marijn Haverbeke and released under an MIT
// license. The Unicode regexps (for identifiers and whitespace) were
// taken from [Esprima](http://esprima.org) by Ariya Hidayat.
//
// Git repositories for Acorn are available at
//
//     http://marijnhaverbeke.nl/git/acorn
//     https://github.com/marijnh/acorn.git

// ## Character categories




// acorn used char codes to squeeze the last bit of performance out
// Beautifier is okay without that, so we're using regex
// permit $ (36) and @ (64). @ is used in ES7 decorators.
// 65 through 91 are uppercase letters.
// permit _ (95).
// 97 through 123 are lowercase letters.
var baseASCIIidentifierStartChars = "\\x24\\x40\\x41-\\x5a\\x5f\\x61-\\x7a";

// inside an identifier @ is not allowed but 0-9 are.
var baseASCIIidentifierChars = "\\x24\\x30-\\x39\\x41-\\x5a\\x5f\\x61-\\x7a";

// Big ugly regular expressions that match characters in the
// whitespace, identifier, and identifier-start categories. These
// are only applied when a character is found to actually have a
// code point above 128.
var nonASCIIidentifierStartChars = "\\xaa\\xb5\\xba\\xc0-\\xd6\\xd8-\\xf6\\xf8-\\u02c1\\u02c6-\\u02d1\\u02e0-\\u02e4\\u02ec\\u02ee\\u0370-\\u0374\\u0376\\u0377\\u037a-\\u037d\\u0386\\u0388-\\u038a\\u038c\\u038e-\\u03a1\\u03a3-\\u03f5\\u03f7-\\u0481\\u048a-\\u0527\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05d0-\\u05ea\\u05f0-\\u05f2\\u0620-\\u064a\\u066e\\u066f\\u0671-\\u06d3\\u06d5\\u06e5\\u06e6\\u06ee\\u06ef\\u06fa-\\u06fc\\u06ff\\u0710\\u0712-\\u072f\\u074d-\\u07a5\\u07b1\\u07ca-\\u07ea\\u07f4\\u07f5\\u07fa\\u0800-\\u0815\\u081a\\u0824\\u0828\\u0840-\\u0858\\u08a0\\u08a2-\\u08ac\\u0904-\\u0939\\u093d\\u0950\\u0958-\\u0961\\u0971-\\u0977\\u0979-\\u097f\\u0985-\\u098c\\u098f\\u0990\\u0993-\\u09a8\\u09aa-\\u09b0\\u09b2\\u09b6-\\u09b9\\u09bd\\u09ce\\u09dc\\u09dd\\u09df-\\u09e1\\u09f0\\u09f1\\u0a05-\\u0a0a\\u0a0f\\u0a10\\u0a13-\\u0a28\\u0a2a-\\u0a30\\u0a32\\u0a33\\u0a35\\u0a36\\u0a38\\u0a39\\u0a59-\\u0a5c\\u0a5e\\u0a72-\\u0a74\\u0a85-\\u0a8d\\u0a8f-\\u0a91\\u0a93-\\u0aa8\\u0aaa-\\u0ab0\\u0ab2\\u0ab3\\u0ab5-\\u0ab9\\u0abd\\u0ad0\\u0ae0\\u0ae1\\u0b05-\\u0b0c\\u0b0f\\u0b10\\u0b13-\\u0b28\\u0b2a-\\u0b30\\u0b32\\u0b33\\u0b35-\\u0b39\\u0b3d\\u0b5c\\u0b5d\\u0b5f-\\u0b61\\u0b71\\u0b83\\u0b85-\\u0b8a\\u0b8e-\\u0b90\\u0b92-\\u0b95\\u0b99\\u0b9a\\u0b9c\\u0b9e\\u0b9f\\u0ba3\\u0ba4\\u0ba8-\\u0baa\\u0bae-\\u0bb9\\u0bd0\\u0c05-\\u0c0c\\u0c0e-\\u0c10\\u0c12-\\u0c28\\u0c2a-\\u0c33\\u0c35-\\u0c39\\u0c3d\\u0c58\\u0c59\\u0c60\\u0c61\\u0c85-\\u0c8c\\u0c8e-\\u0c90\\u0c92-\\u0ca8\\u0caa-\\u0cb3\\u0cb5-\\u0cb9\\u0cbd\\u0cde\\u0ce0\\u0ce1\\u0cf1\\u0cf2\\u0d05-\\u0d0c\\u0d0e-\\u0d10\\u0d12-\\u0d3a\\u0d3d\\u0d4e\\u0d60\\u0d61\\u0d7a-\\u0d7f\\u0d85-\\u0d96\\u0d9a-\\u0db1\\u0db3-\\u0dbb\\u0dbd\\u0dc0-\\u0dc6\\u0e01-\\u0e30\\u0e32\\u0e33\\u0e40-\\u0e46\\u0e81\\u0e82\\u0e84\\u0e87\\u0e88\\u0e8a\\u0e8d\\u0e94-\\u0e97\\u0e99-\\u0e9f\\u0ea1-\\u0ea3\\u0ea5\\u0ea7\\u0eaa\\u0eab\\u0ead-\\u0eb0\\u0eb2\\u0eb3\\u0ebd\\u0ec0-\\u0ec4\\u0ec6\\u0edc-\\u0edf\\u0f00\\u0f40-\\u0f47\\u0f49-\\u0f6c\\u0f88-\\u0f8c\\u1000-\\u102a\\u103f\\u1050-\\u1055\\u105a-\\u105d\\u1061\\u1065\\u1066\\u106e-\\u1070\\u1075-\\u1081\\u108e\\u10a0-\\u10c5\\u10c7\\u10cd\\u10d0-\\u10fa\\u10fc-\\u1248\\u124a-\\u124d\\u1250-\\u1256\\u1258\\u125a-\\u125d\\u1260-\\u1288\\u128a-\\u128d\\u1290-\\u12b0\\u12b2-\\u12b5\\u12b8-\\u12be\\u12c0\\u12c2-\\u12c5\\u12c8-\\u12d6\\u12d8-\\u1310\\u1312-\\u1315\\u1318-\\u135a\\u1380-\\u138f\\u13a0-\\u13f4\\u1401-\\u166c\\u166f-\\u167f\\u1681-\\u169a\\u16a0-\\u16ea\\u16ee-\\u16f0\\u1700-\\u170c\\u170e-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176c\\u176e-\\u1770\\u1780-\\u17b3\\u17d7\\u17dc\\u1820-\\u1877\\u1880-\\u18a8\\u18aa\\u18b0-\\u18f5\\u1900-\\u191c\\u1950-\\u196d\\u1970-\\u1974\\u1980-\\u19ab\\u19c1-\\u19c7\\u1a00-\\u1a16\\u1a20-\\u1a54\\u1aa7\\u1b05-\\u1b33\\u1b45-\\u1b4b\\u1b83-\\u1ba0\\u1bae\\u1baf\\u1bba-\\u1be5\\u1c00-\\u1c23\\u1c4d-\\u1c4f\\u1c5a-\\u1c7d\\u1ce9-\\u1cec\\u1cee-\\u1cf1\\u1cf5\\u1cf6\\u1d00-\\u1dbf\\u1e00-\\u1f15\\u1f18-\\u1f1d\\u1f20-\\u1f45\\u1f48-\\u1f4d\\u1f50-\\u1f57\\u1f59\\u1f5b\\u1f5d\\u1f5f-\\u1f7d\\u1f80-\\u1fb4\\u1fb6-\\u1fbc\\u1fbe\\u1fc2-\\u1fc4\\u1fc6-\\u1fcc\\u1fd0-\\u1fd3\\u1fd6-\\u1fdb\\u1fe0-\\u1fec\\u1ff2-\\u1ff4\\u1ff6-\\u1ffc\\u2071\\u207f\\u2090-\\u209c\\u2102\\u2107\\u210a-\\u2113\\u2115\\u2119-\\u211d\\u2124\\u2126\\u2128\\u212a-\\u212d\\u212f-\\u2139\\u213c-\\u213f\\u2145-\\u2149\\u214e\\u2160-\\u2188\\u2c00-\\u2c2e\\u2c30-\\u2c5e\\u2c60-\\u2ce4\\u2ceb-\\u2cee\\u2cf2\\u2cf3\\u2d00-\\u2d25\\u2d27\\u2d2d\\u2d30-\\u2d67\\u2d6f\\u2d80-\\u2d96\\u2da0-\\u2da6\\u2da8-\\u2dae\\u2db0-\\u2db6\\u2db8-\\u2dbe\\u2dc0-\\u2dc6\\u2dc8-\\u2dce\\u2dd0-\\u2dd6\\u2dd8-\\u2dde\\u2e2f\\u3005-\\u3007\\u3021-\\u3029\\u3031-\\u3035\\u3038-\\u303c\\u3041-\\u3096\\u309d-\\u309f\\u30a1-\\u30fa\\u30fc-\\u30ff\\u3105-\\u312d\\u3131-\\u318e\\u31a0-\\u31ba\\u31f0-\\u31ff\\u3400-\\u4db5\\u4e00-\\u9fcc\\ua000-\\ua48c\\ua4d0-\\ua4fd\\ua500-\\ua60c\\ua610-\\ua61f\\ua62a\\ua62b\\ua640-\\ua66e\\ua67f-\\ua697\\ua6a0-\\ua6ef\\ua717-\\ua71f\\ua722-\\ua788\\ua78b-\\ua78e\\ua790-\\ua793\\ua7a0-\\ua7aa\\ua7f8-\\ua801\\ua803-\\ua805\\ua807-\\ua80a\\ua80c-\\ua822\\ua840-\\ua873\\ua882-\\ua8b3\\ua8f2-\\ua8f7\\ua8fb\\ua90a-\\ua925\\ua930-\\ua946\\ua960-\\ua97c\\ua984-\\ua9b2\\ua9cf\\uaa00-\\uaa28\\uaa40-\\uaa42\\uaa44-\\uaa4b\\uaa60-\\uaa76\\uaa7a\\uaa80-\\uaaaf\\uaab1\\uaab5\\uaab6\\uaab9-\\uaabd\\uaac0\\uaac2\\uaadb-\\uaadd\\uaae0-\\uaaea\\uaaf2-\\uaaf4\\uab01-\\uab06\\uab09-\\uab0e\\uab11-\\uab16\\uab20-\\uab26\\uab28-\\uab2e\\uabc0-\\uabe2\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\uf900-\\ufa6d\\ufa70-\\ufad9\\ufb00-\\ufb06\\ufb13-\\ufb17\\ufb1d\\ufb1f-\\ufb28\\ufb2a-\\ufb36\\ufb38-\\ufb3c\\ufb3e\\ufb40\\ufb41\\ufb43\\ufb44\\ufb46-\\ufbb1\\ufbd3-\\ufd3d\\ufd50-\\ufd8f\\ufd92-\\ufdc7\\ufdf0-\\ufdfb\\ufe70-\\ufe74\\ufe76-\\ufefc\\uff21-\\uff3a\\uff41-\\uff5a\\uff66-\\uffbe\\uffc2-\\uffc7\\uffca-\\uffcf\\uffd2-\\uffd7\\uffda-\\uffdc";
var nonASCIIidentifierChars = "\\u0300-\\u036f\\u0483-\\u0487\\u0591-\\u05bd\\u05bf\\u05c1\\u05c2\\u05c4\\u05c5\\u05c7\\u0610-\\u061a\\u0620-\\u0649\\u0672-\\u06d3\\u06e7-\\u06e8\\u06fb-\\u06fc\\u0730-\\u074a\\u0800-\\u0814\\u081b-\\u0823\\u0825-\\u0827\\u0829-\\u082d\\u0840-\\u0857\\u08e4-\\u08fe\\u0900-\\u0903\\u093a-\\u093c\\u093e-\\u094f\\u0951-\\u0957\\u0962-\\u0963\\u0966-\\u096f\\u0981-\\u0983\\u09bc\\u09be-\\u09c4\\u09c7\\u09c8\\u09d7\\u09df-\\u09e0\\u0a01-\\u0a03\\u0a3c\\u0a3e-\\u0a42\\u0a47\\u0a48\\u0a4b-\\u0a4d\\u0a51\\u0a66-\\u0a71\\u0a75\\u0a81-\\u0a83\\u0abc\\u0abe-\\u0ac5\\u0ac7-\\u0ac9\\u0acb-\\u0acd\\u0ae2-\\u0ae3\\u0ae6-\\u0aef\\u0b01-\\u0b03\\u0b3c\\u0b3e-\\u0b44\\u0b47\\u0b48\\u0b4b-\\u0b4d\\u0b56\\u0b57\\u0b5f-\\u0b60\\u0b66-\\u0b6f\\u0b82\\u0bbe-\\u0bc2\\u0bc6-\\u0bc8\\u0bca-\\u0bcd\\u0bd7\\u0be6-\\u0bef\\u0c01-\\u0c03\\u0c46-\\u0c48\\u0c4a-\\u0c4d\\u0c55\\u0c56\\u0c62-\\u0c63\\u0c66-\\u0c6f\\u0c82\\u0c83\\u0cbc\\u0cbe-\\u0cc4\\u0cc6-\\u0cc8\\u0cca-\\u0ccd\\u0cd5\\u0cd6\\u0ce2-\\u0ce3\\u0ce6-\\u0cef\\u0d02\\u0d03\\u0d46-\\u0d48\\u0d57\\u0d62-\\u0d63\\u0d66-\\u0d6f\\u0d82\\u0d83\\u0dca\\u0dcf-\\u0dd4\\u0dd6\\u0dd8-\\u0ddf\\u0df2\\u0df3\\u0e34-\\u0e3a\\u0e40-\\u0e45\\u0e50-\\u0e59\\u0eb4-\\u0eb9\\u0ec8-\\u0ecd\\u0ed0-\\u0ed9\\u0f18\\u0f19\\u0f20-\\u0f29\\u0f35\\u0f37\\u0f39\\u0f41-\\u0f47\\u0f71-\\u0f84\\u0f86-\\u0f87\\u0f8d-\\u0f97\\u0f99-\\u0fbc\\u0fc6\\u1000-\\u1029\\u1040-\\u1049\\u1067-\\u106d\\u1071-\\u1074\\u1082-\\u108d\\u108f-\\u109d\\u135d-\\u135f\\u170e-\\u1710\\u1720-\\u1730\\u1740-\\u1750\\u1772\\u1773\\u1780-\\u17b2\\u17dd\\u17e0-\\u17e9\\u180b-\\u180d\\u1810-\\u1819\\u1920-\\u192b\\u1930-\\u193b\\u1951-\\u196d\\u19b0-\\u19c0\\u19c8-\\u19c9\\u19d0-\\u19d9\\u1a00-\\u1a15\\u1a20-\\u1a53\\u1a60-\\u1a7c\\u1a7f-\\u1a89\\u1a90-\\u1a99\\u1b46-\\u1b4b\\u1b50-\\u1b59\\u1b6b-\\u1b73\\u1bb0-\\u1bb9\\u1be6-\\u1bf3\\u1c00-\\u1c22\\u1c40-\\u1c49\\u1c5b-\\u1c7d\\u1cd0-\\u1cd2\\u1d00-\\u1dbe\\u1e01-\\u1f15\\u200c\\u200d\\u203f\\u2040\\u2054\\u20d0-\\u20dc\\u20e1\\u20e5-\\u20f0\\u2d81-\\u2d96\\u2de0-\\u2dff\\u3021-\\u3028\\u3099\\u309a\\ua640-\\ua66d\\ua674-\\ua67d\\ua69f\\ua6f0-\\ua6f1\\ua7f8-\\ua800\\ua806\\ua80b\\ua823-\\ua827\\ua880-\\ua881\\ua8b4-\\ua8c4\\ua8d0-\\ua8d9\\ua8f3-\\ua8f7\\ua900-\\ua909\\ua926-\\ua92d\\ua930-\\ua945\\ua980-\\ua983\\ua9b3-\\ua9c0\\uaa00-\\uaa27\\uaa40-\\uaa41\\uaa4c-\\uaa4d\\uaa50-\\uaa59\\uaa7b\\uaae0-\\uaae9\\uaaf2-\\uaaf3\\uabc0-\\uabe1\\uabec\\uabed\\uabf0-\\uabf9\\ufb20-\\ufb28\\ufe00-\\ufe0f\\ufe20-\\ufe26\\ufe33\\ufe34\\ufe4d-\\ufe4f\\uff10-\\uff19\\uff3f";
//var nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]");
//var nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]");

var identifierStart = "(?:\\\\u[0-9a-fA-F]{4}|[" + baseASCIIidentifierStartChars + nonASCIIidentifierStartChars + "])";
var identifierChars = "(?:\\\\u[0-9a-fA-F]{4}|[" + baseASCIIidentifierChars + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "])*";

exports.identifier = new RegExp(identifierStart + identifierChars, 'g');
exports.identifierStart = new RegExp(identifierStart);
exports.identifierMatch = new RegExp("(?:\\\\u[0-9a-fA-F]{4}|[" + baseASCIIidentifierChars + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "])+");

var nonASCIIwhitespace = /[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/; // jshint ignore:line

// Whether a single character denotes a newline.

exports.newline = /[\n\r\u2028\u2029]/;

// Matches a whole line break (where CRLF is considered a single
// line break). Used to count lines.

// in javascript, these two differ
// in python they are the same, different methods are called on them
exports.lineBreak = new RegExp('\r\n|' + exports.newline.source);
exports.allLineBreaks = new RegExp(exports.lineBreak.source, 'g');


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*jshint node:true */
/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/



var BaseOptions = __webpack_require__(6).Options;

var validPositionValues = ['before-newline', 'after-newline', 'preserve-newline'];

function Options(options) {
  BaseOptions.call(this, options, 'js');

  // compatibility, re
  var raw_brace_style = this.raw_options.brace_style || null;
  if (raw_brace_style === "expand-strict") { //graceful handling of deprecated option
    this.raw_options.brace_style = "expand";
  } else if (raw_brace_style === "collapse-preserve-inline") { //graceful handling of deprecated option
    this.raw_options.brace_style = "collapse,preserve-inline";
  } else if (this.raw_options.braces_on_own_line !== undefined) { //graceful handling of deprecated option
    this.raw_options.brace_style = this.raw_options.braces_on_own_line ? "expand" : "collapse";
    // } else if (!raw_brace_style) { //Nothing exists to set it
    //   raw_brace_style = "collapse";
  }

  //preserve-inline in delimited string will trigger brace_preserve_inline, everything
  //else is considered a brace_style and the last one only will have an effect

  var brace_style_split = this._get_selection_list('brace_style', ['collapse', 'expand', 'end-expand', 'none', 'preserve-inline']);

  this.brace_preserve_inline = false; //Defaults in case one or other was not specified in meta-option
  this.brace_style = "collapse";

  for (var bs = 0; bs < brace_style_split.length; bs++) {
    if (brace_style_split[bs] === "preserve-inline") {
      this.brace_preserve_inline = true;
    } else {
      this.brace_style = brace_style_split[bs];
    }
  }

  this.unindent_chained_methods = this._get_boolean('unindent_chained_methods');
  this.break_chained_methods = this._get_boolean('break_chained_methods');
  this.space_in_paren = this._get_boolean('space_in_paren');
  this.space_in_empty_paren = this._get_boolean('space_in_empty_paren');
  this.jslint_happy = this._get_boolean('jslint_happy');
  this.space_after_anon_function = this._get_boolean('space_after_anon_function');
  this.space_after_named_function = this._get_boolean('space_after_named_function');
  this.keep_array_indentation = this._get_boolean('keep_array_indentation');
  this.space_before_conditional = this._get_boolean('space_before_conditional', true);
  this.unescape_strings = this._get_boolean('unescape_strings');
  this.e4x = this._get_boolean('e4x');
  this.comma_first = this._get_boolean('comma_first');
  this.operator_position = this._get_selection('operator_position', validPositionValues);

  // For testing of beautify preserve:start directive
  this.test_output_raw = this._get_boolean('test_output_raw');

  // force this._options.space_after_anon_function to true if this._options.jslint_happy
  if (this.jslint_happy) {
    this.space_after_anon_function = true;
  }

}
Options.prototype = new BaseOptions();



module.exports.Options = Options;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*jshint node:true */
/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/



function Options(options, merge_child_field) {
  this.raw_options = _mergeOpts(options, merge_child_field);

  // Support passing the source text back with no change
  this.disabled = this._get_boolean('disabled');

  this.eol = this._get_characters('eol', 'auto');
  this.end_with_newline = this._get_boolean('end_with_newline');
  this.indent_size = this._get_number('indent_size', 4);
  this.indent_char = this._get_characters('indent_char', ' ');
  this.indent_level = this._get_number('indent_level');

  this.preserve_newlines = this._get_boolean('preserve_newlines', true);
  this.max_preserve_newlines = this._get_number('max_preserve_newlines', 32786);
  if (!this.preserve_newlines) {
    this.max_preserve_newlines = 0;
  }

  this.indent_with_tabs = this._get_boolean('indent_with_tabs', this.indent_char === '\t');
  if (this.indent_with_tabs) {
    this.indent_char = '\t';

    // indent_size behavior changed after 1.8.6
    // It used to be that indent_size would be
    // set to 1 for indent_with_tabs. That is no longer needed and
    // actually doesn't make sense - why not use spaces? Further,
    // that might produce unexpected behavior - tabs being used
    // for single-column alignment. So, when indent_with_tabs is true
    // and indent_size is 1, reset indent_size to 4.
    if (this.indent_size === 1) {
      this.indent_size = 4;
    }
  }

  // Backwards compat with 1.3.x
  this.wrap_line_length = this._get_number('wrap_line_length', this._get_number('max_char'));

  this.indent_empty_lines = this._get_boolean('indent_empty_lines');

  // valid templating languages ['django', 'erb', 'handlebars', 'php']
  // For now, 'auto' = all off for javascript, all on for html (and inline javascript).
  // other values ignored
  this.templating = this._get_selection_list('templating', ['auto', 'none', 'django', 'erb', 'handlebars', 'php'], ['auto']);
}

Options.prototype._get_array = function(name, default_value) {
  var option_value = this.raw_options[name];
  var result = default_value || [];
  if (typeof option_value === 'object') {
    if (option_value !== null && typeof option_value.concat === 'function') {
      result = option_value.concat();
    }
  } else if (typeof option_value === 'string') {
    result = option_value.split(/[^a-zA-Z0-9_\/\-]+/);
  }
  return result;
};

Options.prototype._get_boolean = function(name, default_value) {
  var option_value = this.raw_options[name];
  var result = option_value === undefined ? !!default_value : !!option_value;
  return result;
};

Options.prototype._get_characters = function(name, default_value) {
  var option_value = this.raw_options[name];
  var result = default_value || '';
  if (typeof option_value === 'string') {
    result = option_value.replace(/\\r/, '\r').replace(/\\n/, '\n').replace(/\\t/, '\t');
  }
  return result;
};

Options.prototype._get_number = function(name, default_value) {
  var option_value = this.raw_options[name];
  default_value = parseInt(default_value, 10);
  if (isNaN(default_value)) {
    default_value = 0;
  }
  var result = parseInt(option_value, 10);
  if (isNaN(result)) {
    result = default_value;
  }
  return result;
};

Options.prototype._get_selection = function(name, selection_list, default_value) {
  var result = this._get_selection_list(name, selection_list, default_value);
  if (result.length !== 1) {
    throw new Error(
      "Invalid Option Value: The option '" + name + "' can only be one of the following values:\n" +
      selection_list + "\nYou passed in: '" + this.raw_options[name] + "'");
  }

  return result[0];
};


Options.prototype._get_selection_list = function(name, selection_list, default_value) {
  if (!selection_list || selection_list.length === 0) {
    throw new Error("Selection list cannot be empty.");
  }

  default_value = default_value || [selection_list[0]];
  if (!this._is_valid_selection(default_value, selection_list)) {
    throw new Error("Invalid Default Value!");
  }

  var result = this._get_array(name, default_value);
  if (!this._is_valid_selection(result, selection_list)) {
    throw new Error(
      "Invalid Option Value: The option '" + name + "' can contain only the following values:\n" +
      selection_list + "\nYou passed in: '" + this.raw_options[name] + "'");
  }

  return result;
};

Options.prototype._is_valid_selection = function(result, selection_list) {
  return result.length && selection_list.length &&
    !result.some(function(item) { return selection_list.indexOf(item) === -1; });
};


// merges child options up with the parent options object
// Example: obj = {a: 1, b: {a: 2}}
//          mergeOpts(obj, 'b')
//
//          Returns: {a: 2}
function _mergeOpts(allOptions, childFieldName) {
  var finalOpts = {};
  allOptions = _normalizeOpts(allOptions);
  var name;

  for (name in allOptions) {
    if (name !== childFieldName) {
      finalOpts[name] = allOptions[name];
    }
  }

  //merge in the per type settings for the childFieldName
  if (childFieldName && allOptions[childFieldName]) {
    for (name in allOptions[childFieldName]) {
      finalOpts[name] = allOptions[childFieldName][name];
    }
  }
  return finalOpts;
}

function _normalizeOpts(options) {
  var convertedOpts = {};
  var key;

  for (key in options) {
    var newKey = key.replace(/-/g, "_");
    convertedOpts[newKey] = options[key];
  }
  return convertedOpts;
}

module.exports.Options = Options;
module.exports.normalizeOpts = _normalizeOpts;
module.exports.mergeOpts = _mergeOpts;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*jshint node:true */
/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/



var InputScanner = __webpack_require__(8).InputScanner;
var BaseTokenizer = __webpack_require__(9).Tokenizer;
var BASETOKEN = __webpack_require__(9).TOKEN;
var Directives = __webpack_require__(13).Directives;
var acorn = __webpack_require__(4);
var Pattern = __webpack_require__(12).Pattern;
var TemplatablePattern = __webpack_require__(14).TemplatablePattern;


function in_array(what, arr) {
  return arr.indexOf(what) !== -1;
}


var TOKEN = {
  START_EXPR: 'TK_START_EXPR',
  END_EXPR: 'TK_END_EXPR',
  START_BLOCK: 'TK_START_BLOCK',
  END_BLOCK: 'TK_END_BLOCK',
  WORD: 'TK_WORD',
  RESERVED: 'TK_RESERVED',
  SEMICOLON: 'TK_SEMICOLON',
  STRING: 'TK_STRING',
  EQUALS: 'TK_EQUALS',
  OPERATOR: 'TK_OPERATOR',
  COMMA: 'TK_COMMA',
  BLOCK_COMMENT: 'TK_BLOCK_COMMENT',
  COMMENT: 'TK_COMMENT',
  DOT: 'TK_DOT',
  UNKNOWN: 'TK_UNKNOWN',
  START: BASETOKEN.START,
  RAW: BASETOKEN.RAW,
  EOF: BASETOKEN.EOF
};


var directives_core = new Directives(/\/\*/, /\*\//);

var number_pattern = /0[xX][0123456789abcdefABCDEF]*|0[oO][01234567]*|0[bB][01]*|\d+n|(?:\.\d+|\d+\.?\d*)(?:[eE][+-]?\d+)?/;

var digit = /[0-9]/;

// Dot "." must be distinguished from "..." and decimal
var dot_pattern = /[^\d\.]/;

var positionable_operators = (
  ">>> === !== " +
  "<< && >= ** != == <= >> || " +
  "< / - + > : & % ? ^ | *").split(' ');

// IMPORTANT: this must be sorted longest to shortest or tokenizing many not work.
// Also, you must update possitionable operators separately from punct
var punct =
  ">>>= " +
  "... >>= <<= === >>> !== **= " +
  "=> ^= :: /= << <= == && -= >= >> != -- += ** || ++ %= &= *= |= " +
  "= ! ? > < : / ^ - + * & % ~ |";

punct = punct.replace(/[-[\]{}()*+?.,\\^$|#]/g, "\\$&");
punct = punct.replace(/ /g, '|');

var punct_pattern = new RegExp(punct);

// words which should always start on new line.
var line_starters = 'continue,try,throw,return,var,let,const,if,switch,case,default,for,while,break,function,import,export'.split(',');
var reserved_words = line_starters.concat(['do', 'in', 'of', 'else', 'get', 'set', 'new', 'catch', 'finally', 'typeof', 'yield', 'async', 'await', 'from', 'as']);
var reserved_word_pattern = new RegExp('^(?:' + reserved_words.join('|') + ')$');

// var template_pattern = /(?:(?:<\?php|<\?=)[\s\S]*?\?>)|(?:<%[\s\S]*?%>)/g;

var in_html_comment;

var Tokenizer = function(input_string, options) {
  BaseTokenizer.call(this, input_string, options);

  this._patterns.whitespace = this._patterns.whitespace.matching(
    /\u00A0\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff/.source,
    /\u2028\u2029/.source);

  var pattern_reader = new Pattern(this._input);
  var templatable = new TemplatablePattern(this._input)
    .read_options(this._options);

  this.__patterns = {
    template: templatable,
    identifier: templatable.starting_with(acorn.identifier).matching(acorn.identifierMatch),
    number: pattern_reader.matching(number_pattern),
    punct: pattern_reader.matching(punct_pattern),
    // comment ends just before nearest linefeed or end of file
    comment: pattern_reader.starting_with(/\/\//).until(/[\n\r\u2028\u2029]/),
    //  /* ... */ comment ends with nearest */ or end of file
    block_comment: pattern_reader.starting_with(/\/\*/).until_after(/\*\//),
    html_comment_start: pattern_reader.matching(/<!--/),
    html_comment_end: pattern_reader.matching(/-->/),
    include: pattern_reader.starting_with(/#include/).until_after(acorn.lineBreak),
    shebang: pattern_reader.starting_with(/#!/).until_after(acorn.lineBreak),
    xml: pattern_reader.matching(/[\s\S]*?<(\/?)([-a-zA-Z:0-9_.]+|{[\s\S]+?}|!\[CDATA\[[\s\S]*?\]\])(\s+{[\s\S]+?}|\s+[-a-zA-Z:0-9_.]+|\s+[-a-zA-Z:0-9_.]+\s*=\s*('[^']*'|"[^"]*"|{[\s\S]+?}))*\s*(\/?)\s*>/),
    single_quote: templatable.until(/['\\\n\r\u2028\u2029]/),
    double_quote: templatable.until(/["\\\n\r\u2028\u2029]/),
    template_text: templatable.until(/[`\\$]/),
    template_expression: templatable.until(/[`}\\]/)
  };

};
Tokenizer.prototype = new BaseTokenizer();

Tokenizer.prototype._is_comment = function(current_token) {
  return current_token.type === TOKEN.COMMENT || current_token.type === TOKEN.BLOCK_COMMENT || current_token.type === TOKEN.UNKNOWN;
};

Tokenizer.prototype._is_opening = function(current_token) {
  return current_token.type === TOKEN.START_BLOCK || current_token.type === TOKEN.START_EXPR;
};

Tokenizer.prototype._is_closing = function(current_token, open_token) {
  return (current_token.type === TOKEN.END_BLOCK || current_token.type === TOKEN.END_EXPR) &&
    (open_token && (
      (current_token.text === ']' && open_token.text === '[') ||
      (current_token.text === ')' && open_token.text === '(') ||
      (current_token.text === '}' && open_token.text === '{')));
};

Tokenizer.prototype._reset = function() {
  in_html_comment = false;
};

Tokenizer.prototype._get_next_token = function(previous_token, open_token) { // jshint unused:false
  var token = null;
  this._readWhitespace();
  var c = this._input.peek();

  if (c === null) {
    return this._create_token(TOKEN.EOF, '');
  }

  token = token || this._read_string(c);
  token = token || this._read_word(previous_token);
  token = token || this._read_singles(c);
  token = token || this._read_comment(c);
  token = token || this._read_regexp(c, previous_token);
  token = token || this._read_xml(c, previous_token);
  token = token || this._read_non_javascript(c);
  token = token || this._read_punctuation();
  token = token || this._create_token(TOKEN.UNKNOWN, this._input.next());

  return token;
};

Tokenizer.prototype._read_word = function(previous_token) {
  var resulting_string;
  resulting_string = this.__patterns.identifier.read();
  if (resulting_string !== '') {
    resulting_string = resulting_string.replace(acorn.allLineBreaks, '\n');
    if (!(previous_token.type === TOKEN.DOT ||
        (previous_token.type === TOKEN.RESERVED && (previous_token.text === 'set' || previous_token.text === 'get'))) &&
      reserved_word_pattern.test(resulting_string)) {
      if (resulting_string === 'in' || resulting_string === 'of') { // hack for 'in' and 'of' operators
        return this._create_token(TOKEN.OPERATOR, resulting_string);
      }
      return this._create_token(TOKEN.RESERVED, resulting_string);
    }
    return this._create_token(TOKEN.WORD, resulting_string);
  }

  resulting_string = this.__patterns.number.read();
  if (resulting_string !== '') {
    return this._create_token(TOKEN.WORD, resulting_string);
  }
};

Tokenizer.prototype._read_singles = function(c) {
  var token = null;
  if (c === '(' || c === '[') {
    token = this._create_token(TOKEN.START_EXPR, c);
  } else if (c === ')' || c === ']') {
    token = this._create_token(TOKEN.END_EXPR, c);
  } else if (c === '{') {
    token = this._create_token(TOKEN.START_BLOCK, c);
  } else if (c === '}') {
    token = this._create_token(TOKEN.END_BLOCK, c);
  } else if (c === ';') {
    token = this._create_token(TOKEN.SEMICOLON, c);
  } else if (c === '.' && dot_pattern.test(this._input.peek(1))) {
    token = this._create_token(TOKEN.DOT, c);
  } else if (c === ',') {
    token = this._create_token(TOKEN.COMMA, c);
  }

  if (token) {
    this._input.next();
  }
  return token;
};

Tokenizer.prototype._read_punctuation = function() {
  var resulting_string = this.__patterns.punct.read();

  if (resulting_string !== '') {
    if (resulting_string === '=') {
      return this._create_token(TOKEN.EQUALS, resulting_string);
    } else {
      return this._create_token(TOKEN.OPERATOR, resulting_string);
    }
  }
};

Tokenizer.prototype._read_non_javascript = function(c) {
  var resulting_string = '';

  if (c === '#') {
    if (this._is_first_token()) {
      resulting_string = this.__patterns.shebang.read();

      if (resulting_string) {
        return this._create_token(TOKEN.UNKNOWN, resulting_string.trim() + '\n');
      }
    }

    // handles extendscript #includes
    resulting_string = this.__patterns.include.read();

    if (resulting_string) {
      return this._create_token(TOKEN.UNKNOWN, resulting_string.trim() + '\n');
    }

    c = this._input.next();

    // Spidermonkey-specific sharp variables for circular references. Considered obsolete.
    var sharp = '#';
    if (this._input.hasNext() && this._input.testChar(digit)) {
      do {
        c = this._input.next();
        sharp += c;
      } while (this._input.hasNext() && c !== '#' && c !== '=');
      if (c === '#') {
        //
      } else if (this._input.peek() === '[' && this._input.peek(1) === ']') {
        sharp += '[]';
        this._input.next();
        this._input.next();
      } else if (this._input.peek() === '{' && this._input.peek(1) === '}') {
        sharp += '{}';
        this._input.next();
        this._input.next();
      }
      return this._create_token(TOKEN.WORD, sharp);
    }

    this._input.back();

  } else if (c === '<' && this._is_first_token()) {
    resulting_string = this.__patterns.html_comment_start.read();
    if (resulting_string) {
      while (this._input.hasNext() && !this._input.testChar(acorn.newline)) {
        resulting_string += this._input.next();
      }
      in_html_comment = true;
      return this._create_token(TOKEN.COMMENT, resulting_string);
    }
  } else if (in_html_comment && c === '-') {
    resulting_string = this.__patterns.html_comment_end.read();
    if (resulting_string) {
      in_html_comment = false;
      return this._create_token(TOKEN.COMMENT, resulting_string);
    }
  }

  return null;
};

Tokenizer.prototype._read_comment = function(c) {
  var token = null;
  if (c === '/') {
    var comment = '';
    if (this._input.peek(1) === '*') {
      // peek for comment /* ... */
      comment = this.__patterns.block_comment.read();
      var directives = directives_core.get_directives(comment);
      if (directives && directives.ignore === 'start') {
        comment += directives_core.readIgnored(this._input);
      }
      comment = comment.replace(acorn.allLineBreaks, '\n');
      token = this._create_token(TOKEN.BLOCK_COMMENT, comment);
      token.directives = directives;
    } else if (this._input.peek(1) === '/') {
      // peek for comment // ...
      comment = this.__patterns.comment.read();
      token = this._create_token(TOKEN.COMMENT, comment);
    }
  }
  return token;
};

Tokenizer.prototype._read_string = function(c) {
  if (c === '`' || c === "'" || c === '"') {
    var resulting_string = this._input.next();
    this.has_char_escapes = false;

    if (c === '`') {
      resulting_string += this._read_string_recursive('`', true, '${');
    } else {
      resulting_string += this._read_string_recursive(c);
    }

    if (this.has_char_escapes && this._options.unescape_strings) {
      resulting_string = unescape_string(resulting_string);
    }

    if (this._input.peek() === c) {
      resulting_string += this._input.next();
    }

    resulting_string = resulting_string.replace(acorn.allLineBreaks, '\n');

    return this._create_token(TOKEN.STRING, resulting_string);
  }

  return null;
};

Tokenizer.prototype._allow_regexp_or_xml = function(previous_token) {
  // regex and xml can only appear in specific locations during parsing
  return (previous_token.type === TOKEN.RESERVED && in_array(previous_token.text, ['return', 'case', 'throw', 'else', 'do', 'typeof', 'yield'])) ||
    (previous_token.type === TOKEN.END_EXPR && previous_token.text === ')' &&
      previous_token.opened.previous.type === TOKEN.RESERVED && in_array(previous_token.opened.previous.text, ['if', 'while', 'for'])) ||
    (in_array(previous_token.type, [TOKEN.COMMENT, TOKEN.START_EXPR, TOKEN.START_BLOCK, TOKEN.START,
      TOKEN.END_BLOCK, TOKEN.OPERATOR, TOKEN.EQUALS, TOKEN.EOF, TOKEN.SEMICOLON, TOKEN.COMMA
    ]));
};

Tokenizer.prototype._read_regexp = function(c, previous_token) {

  if (c === '/' && this._allow_regexp_or_xml(previous_token)) {
    // handle regexp
    //
    var resulting_string = this._input.next();
    var esc = false;

    var in_char_class = false;
    while (this._input.hasNext() &&
      ((esc || in_char_class || this._input.peek() !== c) &&
        !this._input.testChar(acorn.newline))) {
      resulting_string += this._input.peek();
      if (!esc) {
        esc = this._input.peek() === '\\';
        if (this._input.peek() === '[') {
          in_char_class = true;
        } else if (this._input.peek() === ']') {
          in_char_class = false;
        }
      } else {
        esc = false;
      }
      this._input.next();
    }

    if (this._input.peek() === c) {
      resulting_string += this._input.next();

      // regexps may have modifiers /regexp/MOD , so fetch those, too
      // Only [gim] are valid, but if the user puts in garbage, do what we can to take it.
      resulting_string += this._input.read(acorn.identifier);
    }
    return this._create_token(TOKEN.STRING, resulting_string);
  }
  return null;
};

Tokenizer.prototype._read_xml = function(c, previous_token) {

  if (this._options.e4x && c === "<" && this._allow_regexp_or_xml(previous_token)) {
    var xmlStr = '';
    var match = this.__patterns.xml.read_match();
    // handle e4x xml literals
    //
    if (match) {
      // Trim root tag to attempt to
      var rootTag = match[2].replace(/^{\s+/, '{').replace(/\s+}$/, '}');
      var isCurlyRoot = rootTag.indexOf('{') === 0;
      var depth = 0;
      while (match) {
        var isEndTag = !!match[1];
        var tagName = match[2];
        var isSingletonTag = (!!match[match.length - 1]) || (tagName.slice(0, 8) === "![CDATA[");
        if (!isSingletonTag &&
          (tagName === rootTag || (isCurlyRoot && tagName.replace(/^{\s+/, '{').replace(/\s+}$/, '}')))) {
          if (isEndTag) {
            --depth;
          } else {
            ++depth;
          }
        }
        xmlStr += match[0];
        if (depth <= 0) {
          break;
        }
        match = this.__patterns.xml.read_match();
      }
      // if we didn't close correctly, keep unformatted.
      if (!match) {
        xmlStr += this._input.match(/[\s\S]*/g)[0];
      }
      xmlStr = xmlStr.replace(acorn.allLineBreaks, '\n');
      return this._create_token(TOKEN.STRING, xmlStr);
    }
  }

  return null;
};

function unescape_string(s) {
  // You think that a regex would work for this
  // return s.replace(/\\x([0-9a-f]{2})/gi, function(match, val) {
  //         return String.fromCharCode(parseInt(val, 16));
  //     })
  // However, dealing with '\xff', '\\xff', '\\\xff' makes this more fun.
  var out = '',
    escaped = 0;

  var input_scan = new InputScanner(s);
  var matched = null;

  while (input_scan.hasNext()) {
    // Keep any whitespace, non-slash characters
    // also keep slash pairs.
    matched = input_scan.match(/([\s]|[^\\]|\\\\)+/g);

    if (matched) {
      out += matched[0];
    }

    if (input_scan.peek() === '\\') {
      input_scan.next();
      if (input_scan.peek() === 'x') {
        matched = input_scan.match(/x([0-9A-Fa-f]{2})/g);
      } else if (input_scan.peek() === 'u') {
        matched = input_scan.match(/u([0-9A-Fa-f]{4})/g);
      } else {
        out += '\\';
        if (input_scan.hasNext()) {
          out += input_scan.next();
        }
        continue;
      }

      // If there's some error decoding, return the original string
      if (!matched) {
        return s;
      }

      escaped = parseInt(matched[1], 16);

      if (escaped > 0x7e && escaped <= 0xff && matched[0].indexOf('x') === 0) {
        // we bail out on \x7f..\xff,
        // leaving whole string escaped,
        // as it's probably completely binary
        return s;
      } else if (escaped >= 0x00 && escaped < 0x20) {
        // leave 0x00...0x1f escaped
        out += '\\' + matched[0];
        continue;
      } else if (escaped === 0x22 || escaped === 0x27 || escaped === 0x5c) {
        // single-quote, apostrophe, backslash - escape these
        out += '\\' + String.fromCharCode(escaped);
      } else {
        out += String.fromCharCode(escaped);
      }
    }
  }

  return out;
}

// handle string
//
Tokenizer.prototype._read_string_recursive = function(delimiter, allow_unescaped_newlines, start_sub) {
  var current_char;
  var pattern;
  if (delimiter === '\'') {
    pattern = this.__patterns.single_quote;
  } else if (delimiter === '"') {
    pattern = this.__patterns.double_quote;
  } else if (delimiter === '`') {
    pattern = this.__patterns.template_text;
  } else if (delimiter === '}') {
    pattern = this.__patterns.template_expression;
  }

  var resulting_string = pattern.read();
  var next = '';
  while (this._input.hasNext()) {
    next = this._input.next();
    if (next === delimiter ||
      (!allow_unescaped_newlines && acorn.newline.test(next))) {
      this._input.back();
      break;
    } else if (next === '\\' && this._input.hasNext()) {
      current_char = this._input.peek();

      if (current_char === 'x' || current_char === 'u') {
        this.has_char_escapes = true;
      } else if (current_char === '\r' && this._input.peek(1) === '\n') {
        this._input.next();
      }
      next += this._input.next();
    } else if (start_sub) {
      if (start_sub === '${' && next === '$' && this._input.peek() === '{') {
        next += this._input.next();
      }

      if (start_sub === next) {
        if (delimiter === '`') {
          next += this._read_string_recursive('}', allow_unescaped_newlines, '`');
        } else {
          next += this._read_string_recursive('`', allow_unescaped_newlines, '${');
        }
        if (this._input.hasNext()) {
          next += this._input.next();
        }
      }
    }
    next += pattern.read();
    resulting_string += next;
  }

  return resulting_string;
};

module.exports.Tokenizer = Tokenizer;
module.exports.TOKEN = TOKEN;
module.exports.positionable_operators = positionable_operators.slice();
module.exports.line_starters = line_starters.slice();


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*jshint node:true */
/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/



var regexp_has_sticky = RegExp.prototype.hasOwnProperty('sticky');

function InputScanner(input_string) {
  this.__input = input_string || '';
  this.__input_length = this.__input.length;
  this.__position = 0;
}

InputScanner.prototype.restart = function() {
  this.__position = 0;
};

InputScanner.prototype.back = function() {
  if (this.__position > 0) {
    this.__position -= 1;
  }
};

InputScanner.prototype.hasNext = function() {
  return this.__position < this.__input_length;
};

InputScanner.prototype.next = function() {
  var val = null;
  if (this.hasNext()) {
    val = this.__input.charAt(this.__position);
    this.__position += 1;
  }
  return val;
};

InputScanner.prototype.peek = function(index) {
  var val = null;
  index = index || 0;
  index += this.__position;
  if (index >= 0 && index < this.__input_length) {
    val = this.__input.charAt(index);
  }
  return val;
};

// This is a JavaScript only helper function (not in python)
// Javascript doesn't have a match method
// and not all implementation support "sticky" flag.
// If they do not support sticky then both this.match() and this.test() method
// must get the match and check the index of the match.
// If sticky is supported and set, this method will use it.
// Otherwise it will check that global is set, and fall back to the slower method.
InputScanner.prototype.__match = function(pattern, index) {
  pattern.lastIndex = index;
  var pattern_match = pattern.exec(this.__input);

  if (pattern_match && !(regexp_has_sticky && pattern.sticky)) {
    if (pattern_match.index !== index) {
      pattern_match = null;
    }
  }

  return pattern_match;
};

InputScanner.prototype.test = function(pattern, index) {
  index = index || 0;
  index += this.__position;

  if (index >= 0 && index < this.__input_length) {
    return !!this.__match(pattern, index);
  } else {
    return false;
  }
};

InputScanner.prototype.testChar = function(pattern, index) {
  // test one character regex match
  var val = this.peek(index);
  pattern.lastIndex = 0;
  return val !== null && pattern.test(val);
};

InputScanner.prototype.match = function(pattern) {
  var pattern_match = this.__match(pattern, this.__position);
  if (pattern_match) {
    this.__position += pattern_match[0].length;
  } else {
    pattern_match = null;
  }
  return pattern_match;
};

InputScanner.prototype.read = function(starting_pattern, until_pattern, until_after) {
  var val = '';
  var match;
  if (starting_pattern) {
    match = this.match(starting_pattern);
    if (match) {
      val += match[0];
    }
  }
  if (until_pattern && (match || !starting_pattern)) {
    val += this.readUntil(until_pattern, until_after);
  }
  return val;
};

InputScanner.prototype.readUntil = function(pattern, until_after) {
  var val = '';
  var match_index = this.__position;
  pattern.lastIndex = this.__position;
  var pattern_match = pattern.exec(this.__input);
  if (pattern_match) {
    match_index = pattern_match.index;
    if (until_after) {
      match_index += pattern_match[0].length;
    }
  } else {
    match_index = this.__input_length;
  }

  val = this.__input.substring(this.__position, match_index);
  this.__position = match_index;
  return val;
};

InputScanner.prototype.readUntilAfter = function(pattern) {
  return this.readUntil(pattern, true);
};

InputScanner.prototype.get_regexp = function(pattern, match_from) {
  var result = null;
  var flags = 'g';
  if (match_from && regexp_has_sticky) {
    flags = 'y';
  }
  // strings are converted to regexp
  if (typeof pattern === "string" && pattern !== '') {
    // result = new RegExp(pattern.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), flags);
    result = new RegExp(pattern, flags);
  } else if (pattern) {
    result = new RegExp(pattern.source, flags);
  }
  return result;
};

InputScanner.prototype.get_literal_regexp = function(literal_string) {
  return RegExp(literal_string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'));
};

/* css beautifier legacy helpers */
InputScanner.prototype.peekUntilAfter = function(pattern) {
  var start = this.__position;
  var val = this.readUntilAfter(pattern);
  this.__position = start;
  return val;
};

InputScanner.prototype.lookBack = function(testVal) {
  var start = this.__position - 1;
  return start >= testVal.length && this.__input.substring(start - testVal.length, start)
    .toLowerCase() === testVal;
};

module.exports.InputScanner = InputScanner;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*jshint node:true */
/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/



var InputScanner = __webpack_require__(8).InputScanner;
var Token = __webpack_require__(3).Token;
var TokenStream = __webpack_require__(10).TokenStream;
var WhitespacePattern = __webpack_require__(11).WhitespacePattern;

var TOKEN = {
  START: 'TK_START',
  RAW: 'TK_RAW',
  EOF: 'TK_EOF'
};

var Tokenizer = function(input_string, options) {
  this._input = new InputScanner(input_string);
  this._options = options || {};
  this.__tokens = null;

  this._patterns = {};
  this._patterns.whitespace = new WhitespacePattern(this._input);
};

Tokenizer.prototype.tokenize = function() {
  this._input.restart();
  this.__tokens = new TokenStream();

  this._reset();

  var current;
  var previous = new Token(TOKEN.START, '');
  var open_token = null;
  var open_stack = [];
  var comments = new TokenStream();

  while (previous.type !== TOKEN.EOF) {
    current = this._get_next_token(previous, open_token);
    while (this._is_comment(current)) {
      comments.add(current);
      current = this._get_next_token(previous, open_token);
    }

    if (!comments.isEmpty()) {
      current.comments_before = comments;
      comments = new TokenStream();
    }

    current.parent = open_token;

    if (this._is_opening(current)) {
      open_stack.push(open_token);
      open_token = current;
    } else if (open_token && this._is_closing(current, open_token)) {
      current.opened = open_token;
      open_token.closed = current;
      open_token = open_stack.pop();
      current.parent = open_token;
    }

    current.previous = previous;
    previous.next = current;

    this.__tokens.add(current);
    previous = current;
  }

  return this.__tokens;
};


Tokenizer.prototype._is_first_token = function() {
  return this.__tokens.isEmpty();
};

Tokenizer.prototype._reset = function() {};

Tokenizer.prototype._get_next_token = function(previous_token, open_token) { // jshint unused:false
  this._readWhitespace();
  var resulting_string = this._input.read(/.+/g);
  if (resulting_string) {
    return this._create_token(TOKEN.RAW, resulting_string);
  } else {
    return this._create_token(TOKEN.EOF, '');
  }
};

Tokenizer.prototype._is_comment = function(current_token) { // jshint unused:false
  return false;
};

Tokenizer.prototype._is_opening = function(current_token) { // jshint unused:false
  return false;
};

Tokenizer.prototype._is_closing = function(current_token, open_token) { // jshint unused:false
  return false;
};

Tokenizer.prototype._create_token = function(type, text) {
  var token = new Token(type, text,
    this._patterns.whitespace.newline_count,
    this._patterns.whitespace.whitespace_before_token);
  return token;
};

Tokenizer.prototype._readWhitespace = function() {
  return this._patterns.whitespace.read();
};



module.exports.Tokenizer = Tokenizer;
module.exports.TOKEN = TOKEN;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*jshint node:true */
/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/



function TokenStream(parent_token) {
  // private
  this.__tokens = [];
  this.__tokens_length = this.__tokens.length;
  this.__position = 0;
  this.__parent_token = parent_token;
}

TokenStream.prototype.restart = function() {
  this.__position = 0;
};

TokenStream.prototype.isEmpty = function() {
  return this.__tokens_length === 0;
};

TokenStream.prototype.hasNext = function() {
  return this.__position < this.__tokens_length;
};

TokenStream.prototype.next = function() {
  var val = null;
  if (this.hasNext()) {
    val = this.__tokens[this.__position];
    this.__position += 1;
  }
  return val;
};

TokenStream.prototype.peek = function(index) {
  var val = null;
  index = index || 0;
  index += this.__position;
  if (index >= 0 && index < this.__tokens_length) {
    val = this.__tokens[index];
  }
  return val;
};

TokenStream.prototype.add = function(token) {
  if (this.__parent_token) {
    token.parent = this.__parent_token;
  }
  this.__tokens.push(token);
  this.__tokens_length += 1;
};

module.exports.TokenStream = TokenStream;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*jshint node:true */
/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/



var Pattern = __webpack_require__(12).Pattern;

function WhitespacePattern(input_scanner, parent) {
  Pattern.call(this, input_scanner, parent);
  if (parent) {
    this._line_regexp = this._input.get_regexp(parent._line_regexp);
  } else {
    this.__set_whitespace_patterns('', '');
  }

  this.newline_count = 0;
  this.whitespace_before_token = '';
}
WhitespacePattern.prototype = new Pattern();

WhitespacePattern.prototype.__set_whitespace_patterns = function(whitespace_chars, newline_chars) {
  whitespace_chars += '\\t ';
  newline_chars += '\\n\\r';

  this._match_pattern = this._input.get_regexp(
    '[' + whitespace_chars + newline_chars + ']+', true);
  this._newline_regexp = this._input.get_regexp(
    '\\r\\n|[' + newline_chars + ']');
};

WhitespacePattern.prototype.read = function() {
  this.newline_count = 0;
  this.whitespace_before_token = '';

  var resulting_string = this._input.read(this._match_pattern);
  if (resulting_string === ' ') {
    this.whitespace_before_token = ' ';
  } else if (resulting_string) {
    var matches = this.__split(this._newline_regexp, resulting_string);
    this.newline_count = matches.length - 1;
    this.whitespace_before_token = matches[this.newline_count];
  }

  return resulting_string;
};

WhitespacePattern.prototype.matching = function(whitespace_chars, newline_chars) {
  var result = this._create();
  result.__set_whitespace_patterns(whitespace_chars, newline_chars);
  result._update();
  return result;
};

WhitespacePattern.prototype._create = function() {
  return new WhitespacePattern(this._input, this);
};

WhitespacePattern.prototype.__split = function(regexp, input_string) {
  regexp.lastIndex = 0;
  var start_index = 0;
  var result = [];
  var next_match = regexp.exec(input_string);
  while (next_match) {
    result.push(input_string.substring(start_index, next_match.index));
    start_index = next_match.index + next_match[0].length;
    next_match = regexp.exec(input_string);
  }

  if (start_index < input_string.length) {
    result.push(input_string.substring(start_index, input_string.length));
  } else {
    result.push('');
  }

  return result;
};



module.exports.WhitespacePattern = WhitespacePattern;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*jshint node:true */
/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/



function Pattern(input_scanner, parent) {
  this._input = input_scanner;
  this._starting_pattern = null;
  this._match_pattern = null;
  this._until_pattern = null;
  this._until_after = false;

  if (parent) {
    this._starting_pattern = this._input.get_regexp(parent._starting_pattern, true);
    this._match_pattern = this._input.get_regexp(parent._match_pattern, true);
    this._until_pattern = this._input.get_regexp(parent._until_pattern);
    this._until_after = parent._until_after;
  }
}

Pattern.prototype.read = function() {
  var result = this._input.read(this._starting_pattern);
  if (!this._starting_pattern || result) {
    result += this._input.read(this._match_pattern, this._until_pattern, this._until_after);
  }
  return result;
};

Pattern.prototype.read_match = function() {
  return this._input.match(this._match_pattern);
};

Pattern.prototype.until_after = function(pattern) {
  var result = this._create();
  result._until_after = true;
  result._until_pattern = this._input.get_regexp(pattern);
  result._update();
  return result;
};

Pattern.prototype.until = function(pattern) {
  var result = this._create();
  result._until_after = false;
  result._until_pattern = this._input.get_regexp(pattern);
  result._update();
  return result;
};

Pattern.prototype.starting_with = function(pattern) {
  var result = this._create();
  result._starting_pattern = this._input.get_regexp(pattern, true);
  result._update();
  return result;
};

Pattern.prototype.matching = function(pattern) {
  var result = this._create();
  result._match_pattern = this._input.get_regexp(pattern, true);
  result._update();
  return result;
};

Pattern.prototype._create = function() {
  return new Pattern(this._input, this);
};

Pattern.prototype._update = function() {};

module.exports.Pattern = Pattern;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*jshint node:true */
/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/



function Directives(start_block_pattern, end_block_pattern) {
  start_block_pattern = typeof start_block_pattern === 'string' ? start_block_pattern : start_block_pattern.source;
  end_block_pattern = typeof end_block_pattern === 'string' ? end_block_pattern : end_block_pattern.source;
  this.__directives_block_pattern = new RegExp(start_block_pattern + / beautify( \w+[:]\w+)+ /.source + end_block_pattern, 'g');
  this.__directive_pattern = / (\w+)[:](\w+)/g;

  this.__directives_end_ignore_pattern = new RegExp(start_block_pattern + /\sbeautify\signore:end\s/.source + end_block_pattern, 'g');
}

Directives.prototype.get_directives = function(text) {
  if (!text.match(this.__directives_block_pattern)) {
    return null;
  }

  var directives = {};
  this.__directive_pattern.lastIndex = 0;
  var directive_match = this.__directive_pattern.exec(text);

  while (directive_match) {
    directives[directive_match[1]] = directive_match[2];
    directive_match = this.__directive_pattern.exec(text);
  }

  return directives;
};

Directives.prototype.readIgnored = function(input) {
  return input.readUntilAfter(this.__directives_end_ignore_pattern);
};


module.exports.Directives = Directives;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*jshint node:true */
/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/



var Pattern = __webpack_require__(12).Pattern;


var template_names = {
  django: false,
  erb: false,
  handlebars: false,
  php: false
};

// This lets templates appear anywhere we would do a readUntil
// The cost is higher but it is pay to play.
function TemplatablePattern(input_scanner, parent) {
  Pattern.call(this, input_scanner, parent);
  this.__template_pattern = null;
  this._disabled = Object.assign({}, template_names);
  this._excluded = Object.assign({}, template_names);

  if (parent) {
    this.__template_pattern = this._input.get_regexp(parent.__template_pattern);
    this._excluded = Object.assign(this._excluded, parent._excluded);
    this._disabled = Object.assign(this._disabled, parent._disabled);
  }
  var pattern = new Pattern(input_scanner);
  this.__patterns = {
    handlebars_comment: pattern.starting_with(/{{!--/).until_after(/--}}/),
    handlebars: pattern.starting_with(/{{/).until_after(/}}/),
    php: pattern.starting_with(/<\?(?:[=]|php)/).until_after(/\?>/),
    erb: pattern.starting_with(/<%[^%]/).until_after(/[^%]%>/),
    // django coflicts with handlebars a bit.
    django: pattern.starting_with(/{%/).until_after(/%}/),
    django_value: pattern.starting_with(/{{/).until_after(/}}/),
    django_comment: pattern.starting_with(/{#/).until_after(/#}/)
  };
}
TemplatablePattern.prototype = new Pattern();

TemplatablePattern.prototype._create = function() {
  return new TemplatablePattern(this._input, this);
};

TemplatablePattern.prototype._update = function() {
  this.__set_templated_pattern();
};

TemplatablePattern.prototype.disable = function(language) {
  var result = this._create();
  result._disabled[language] = true;
  result._update();
  return result;
};

TemplatablePattern.prototype.read_options = function(options) {
  var result = this._create();
  for (var language in template_names) {
    result._disabled[language] = options.templating.indexOf(language) === -1;
  }
  result._update();
  return result;
};

TemplatablePattern.prototype.exclude = function(language) {
  var result = this._create();
  result._excluded[language] = true;
  result._update();
  return result;
};

TemplatablePattern.prototype.read = function() {
  var result = '';
  if (this._match_pattern) {
    result = this._input.read(this._starting_pattern);
  } else {
    result = this._input.read(this._starting_pattern, this.__template_pattern);
  }
  var next = this._read_template();
  while (next) {
    if (this._match_pattern) {
      next += this._input.read(this._match_pattern);
    } else {
      next += this._input.readUntil(this.__template_pattern);
    }
    result += next;
    next = this._read_template();
  }

  if (this._until_after) {
    result += this._input.readUntilAfter(this._until_pattern);
  }
  return result;
};

TemplatablePattern.prototype.__set_templated_pattern = function() {
  var items = [];

  if (!this._disabled.php) {
    items.push(this.__patterns.php._starting_pattern.source);
  }
  if (!this._disabled.handlebars) {
    items.push(this.__patterns.handlebars._starting_pattern.source);
  }
  if (!this._disabled.erb) {
    items.push(this.__patterns.erb._starting_pattern.source);
  }
  if (!this._disabled.django) {
    items.push(this.__patterns.django._starting_pattern.source);
    items.push(this.__patterns.django_value._starting_pattern.source);
    items.push(this.__patterns.django_comment._starting_pattern.source);
  }

  if (this._until_pattern) {
    items.push(this._until_pattern.source);
  }
  this.__template_pattern = this._input.get_regexp('(?:' + items.join('|') + ')');
};

TemplatablePattern.prototype._read_template = function() {
  var resulting_string = '';
  var c = this._input.peek();
  if (c === '<') {
    var peek1 = this._input.peek(1);
    //if we're in a comment, do something special
    // We treat all comments as literals, even more than preformatted tags
    // we just look for the appropriate close tag
    if (!this._disabled.php && !this._excluded.php && peek1 === '?') {
      resulting_string = resulting_string ||
        this.__patterns.php.read();
    }
    if (!this._disabled.erb && !this._excluded.erb && peek1 === '%') {
      resulting_string = resulting_string ||
        this.__patterns.erb.read();
    }
  } else if (c === '{') {
    if (!this._disabled.handlebars && !this._excluded.handlebars) {
      resulting_string = resulting_string ||
        this.__patterns.handlebars_comment.read();
      resulting_string = resulting_string ||
        this.__patterns.handlebars.read();
    }
    if (!this._disabled.django) {
      // django coflicts with handlebars a bit.
      if (!this._excluded.django && !this._excluded.handlebars) {
        resulting_string = resulting_string ||
          this.__patterns.django_value.read();
      }
      if (!this._excluded.django) {
        resulting_string = resulting_string ||
          this.__patterns.django_comment.read();
        resulting_string = resulting_string ||
          this.__patterns.django.read();
      }
    }
  }
  return resulting_string;
};


module.exports.TemplatablePattern = TemplatablePattern;


/***/ })
/******/ ]);
var js_beautify = legacy_beautify_js;
/* Footer */
if (true) {
    // Add support for AMD ( https://github.com/amdjs/amdjs-api/wiki/AMD#defineamd-property- )
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
        return { js_beautify: js_beautify };
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else if (typeof exports !== "undefined") {
    // Add support for CommonJS. Just put this file somewhere on your require.paths
    // and you will be able to `var js_beautify = require("beautify").js_beautify`.
    exports.js_beautify = js_beautify;
} else if (typeof window !== "undefined") {
    // If we're running a web page and don't have either of the above, add our one global
    window.js_beautify = js_beautify;
} else if (typeof global !== "undefined") {
    // If we don't even have window, try global.
    global.js_beautify = js_beautify;
}

}());



/***/ }),

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* AUTO-GENERATED. DO NOT MODIFY. */
/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.


 CSS Beautifier
---------------

    Written by Harutyun Amirjanyan, (amirjanyan@gmail.com)

    Based on code initially developed by: Einar Lielmanis, <einar@beautifier.io>
        https://beautifier.io/

    Usage:
        css_beautify(source_text);
        css_beautify(source_text, options);

    The options are (default in brackets):
        indent_size (4)                         — indentation size,
        indent_char (space)                     — character to indent with,
        selector_separator_newline (true)       - separate selectors with newline or
                                                  not (e.g. "a,\nbr" or "a, br")
        end_with_newline (false)                - end with a newline
        newline_between_rules (true)            - add a new line after every css rule
        space_around_selector_separator (false) - ensure space around selector separators:
                                                  '>', '+', '~' (e.g. "a>b" -> "a > b")
    e.g

    css_beautify(css_source_text, {
      'indent_size': 1,
      'indent_char': '\t',
      'selector_separator': ' ',
      'end_with_newline': false,
      'newline_between_rules': true,
      'space_around_selector_separator': true
    });
*/

// http://www.w3.org/TR/CSS21/syndata.html#tokenization
// http://www.w3.org/TR/css3-syntax/

(function() {

/* GENERATED_BUILD_OUTPUT */
var legacy_beautify_css =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*jshint node:true */
/*
  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/



function OutputLine(parent) {
  this.__parent = parent;
  this.__character_count = 0;
  // use indent_count as a marker for this.__lines that have preserved indentation
  this.__indent_count = -1;
  this.__alignment_count = 0;
  this.__wrap_point_index = 0;
  this.__wrap_point_character_count = 0;
  this.__wrap_point_indent_count = -1;
  this.__wrap_point_alignment_count = 0;

  this.__items = [];
}

OutputLine.prototype.clone_empty = function() {
  var line = new OutputLine(this.__parent);
  line.set_indent(this.__indent_count, this.__alignment_count);
  return line;
};

OutputLine.prototype.item = function(index) {
  if (index < 0) {
    return this.__items[this.__items.length + index];
  } else {
    return this.__items[index];
  }
};

OutputLine.prototype.has_match = function(pattern) {
  for (var lastCheckedOutput = this.__items.length - 1; lastCheckedOutput >= 0; lastCheckedOutput--) {
    if (this.__items[lastCheckedOutput].match(pattern)) {
      return true;
    }
  }
  return false;
};

OutputLine.prototype.set_indent = function(indent, alignment) {
  if (this.is_empty()) {
    this.__indent_count = indent || 0;
    this.__alignment_count = alignment || 0;
    this.__character_count = this.__parent.get_indent_size(this.__indent_count, this.__alignment_count);
  }
};

OutputLine.prototype._set_wrap_point = function() {
  if (this.__parent.wrap_line_length) {
    this.__wrap_point_index = this.__items.length;
    this.__wrap_point_character_count = this.__character_count;
    this.__wrap_point_indent_count = this.__parent.next_line.__indent_count;
    this.__wrap_point_alignment_count = this.__parent.next_line.__alignment_count;
  }
};

OutputLine.prototype._should_wrap = function() {
  return this.__wrap_point_index &&
    this.__character_count > this.__parent.wrap_line_length &&
    this.__wrap_point_character_count > this.__parent.next_line.__character_count;
};

OutputLine.prototype._allow_wrap = function() {
  if (this._should_wrap()) {
    this.__parent.add_new_line();
    var next = this.__parent.current_line;
    next.set_indent(this.__wrap_point_indent_count, this.__wrap_point_alignment_count);
    next.__items = this.__items.slice(this.__wrap_point_index);
    this.__items = this.__items.slice(0, this.__wrap_point_index);

    next.__character_count += this.__character_count - this.__wrap_point_character_count;
    this.__character_count = this.__wrap_point_character_count;

    if (next.__items[0] === " ") {
      next.__items.splice(0, 1);
      next.__character_count -= 1;
    }
    return true;
  }
  return false;
};

OutputLine.prototype.is_empty = function() {
  return this.__items.length === 0;
};

OutputLine.prototype.last = function() {
  if (!this.is_empty()) {
    return this.__items[this.__items.length - 1];
  } else {
    return null;
  }
};

OutputLine.prototype.push = function(item) {
  this.__items.push(item);
  var last_newline_index = item.lastIndexOf('\n');
  if (last_newline_index !== -1) {
    this.__character_count = item.length - last_newline_index;
  } else {
    this.__character_count += item.length;
  }
};

OutputLine.prototype.pop = function() {
  var item = null;
  if (!this.is_empty()) {
    item = this.__items.pop();
    this.__character_count -= item.length;
  }
  return item;
};


OutputLine.prototype._remove_indent = function() {
  if (this.__indent_count > 0) {
    this.__indent_count -= 1;
    this.__character_count -= this.__parent.indent_size;
  }
};

OutputLine.prototype._remove_wrap_indent = function() {
  if (this.__wrap_point_indent_count > 0) {
    this.__wrap_point_indent_count -= 1;
  }
};
OutputLine.prototype.trim = function() {
  while (this.last() === ' ') {
    this.__items.pop();
    this.__character_count -= 1;
  }
};

OutputLine.prototype.toString = function() {
  var result = '';
  if (this.is_empty()) {
    if (this.__parent.indent_empty_lines) {
      result = this.__parent.get_indent_string(this.__indent_count);
    }
  } else {
    result = this.__parent.get_indent_string(this.__indent_count, this.__alignment_count);
    result += this.__items.join('');
  }
  return result;
};

function IndentStringCache(options, baseIndentString) {
  this.__cache = [''];
  this.__indent_size = options.indent_size;
  this.__indent_string = options.indent_char;
  if (!options.indent_with_tabs) {
    this.__indent_string = new Array(options.indent_size + 1).join(options.indent_char);
  }

  // Set to null to continue support for auto detection of base indent
  baseIndentString = baseIndentString || '';
  if (options.indent_level > 0) {
    baseIndentString = new Array(options.indent_level + 1).join(this.__indent_string);
  }

  this.__base_string = baseIndentString;
  this.__base_string_length = baseIndentString.length;
}

IndentStringCache.prototype.get_indent_size = function(indent, column) {
  var result = this.__base_string_length;
  column = column || 0;
  if (indent < 0) {
    result = 0;
  }
  result += indent * this.__indent_size;
  result += column;
  return result;
};

IndentStringCache.prototype.get_indent_string = function(indent_level, column) {
  var result = this.__base_string;
  column = column || 0;
  if (indent_level < 0) {
    indent_level = 0;
    result = '';
  }
  column += indent_level * this.__indent_size;
  this.__ensure_cache(column);
  result += this.__cache[column];
  return result;
};

IndentStringCache.prototype.__ensure_cache = function(column) {
  while (column >= this.__cache.length) {
    this.__add_column();
  }
};

IndentStringCache.prototype.__add_column = function() {
  var column = this.__cache.length;
  var indent = 0;
  var result = '';
  if (this.__indent_size && column >= this.__indent_size) {
    indent = Math.floor(column / this.__indent_size);
    column -= indent * this.__indent_size;
    result = new Array(indent + 1).join(this.__indent_string);
  }
  if (column) {
    result += new Array(column + 1).join(' ');
  }

  this.__cache.push(result);
};

function Output(options, baseIndentString) {
  this.__indent_cache = new IndentStringCache(options, baseIndentString);
  this.raw = false;
  this._end_with_newline = options.end_with_newline;
  this.indent_size = options.indent_size;
  this.wrap_line_length = options.wrap_line_length;
  this.indent_empty_lines = options.indent_empty_lines;
  this.__lines = [];
  this.previous_line = null;
  this.current_line = null;
  this.next_line = new OutputLine(this);
  this.space_before_token = false;
  this.non_breaking_space = false;
  this.previous_token_wrapped = false;
  // initialize
  this.__add_outputline();
}

Output.prototype.__add_outputline = function() {
  this.previous_line = this.current_line;
  this.current_line = this.next_line.clone_empty();
  this.__lines.push(this.current_line);
};

Output.prototype.get_line_number = function() {
  return this.__lines.length;
};

Output.prototype.get_indent_string = function(indent, column) {
  return this.__indent_cache.get_indent_string(indent, column);
};

Output.prototype.get_indent_size = function(indent, column) {
  return this.__indent_cache.get_indent_size(indent, column);
};

Output.prototype.is_empty = function() {
  return !this.previous_line && this.current_line.is_empty();
};

Output.prototype.add_new_line = function(force_newline) {
  // never newline at the start of file
  // otherwise, newline only if we didn't just add one or we're forced
  if (this.is_empty() ||
    (!force_newline && this.just_added_newline())) {
    return false;
  }

  // if raw output is enabled, don't print additional newlines,
  // but still return True as though you had
  if (!this.raw) {
    this.__add_outputline();
  }
  return true;
};

Output.prototype.get_code = function(eol) {
  this.trim(true);

  // handle some edge cases where the last tokens
  // has text that ends with newline(s)
  var last_item = this.current_line.pop();
  if (last_item) {
    if (last_item[last_item.length - 1] === '\n') {
      last_item = last_item.replace(/\n+$/g, '');
    }
    this.current_line.push(last_item);
  }

  if (this._end_with_newline) {
    this.__add_outputline();
  }

  var sweet_code = this.__lines.join('\n');

  if (eol !== '\n') {
    sweet_code = sweet_code.replace(/[\n]/g, eol);
  }
  return sweet_code;
};

Output.prototype.set_wrap_point = function() {
  this.current_line._set_wrap_point();
};

Output.prototype.set_indent = function(indent, alignment) {
  indent = indent || 0;
  alignment = alignment || 0;

  // Next line stores alignment values
  this.next_line.set_indent(indent, alignment);

  // Never indent your first output indent at the start of the file
  if (this.__lines.length > 1) {
    this.current_line.set_indent(indent, alignment);
    return true;
  }

  this.current_line.set_indent();
  return false;
};

Output.prototype.add_raw_token = function(token) {
  for (var x = 0; x < token.newlines; x++) {
    this.__add_outputline();
  }
  this.current_line.set_indent(-1);
  this.current_line.push(token.whitespace_before);
  this.current_line.push(token.text);
  this.space_before_token = false;
  this.non_breaking_space = false;
  this.previous_token_wrapped = false;
};

Output.prototype.add_token = function(printable_token) {
  this.__add_space_before_token();
  this.current_line.push(printable_token);
  this.space_before_token = false;
  this.non_breaking_space = false;
  this.previous_token_wrapped = this.current_line._allow_wrap();
};

Output.prototype.__add_space_before_token = function() {
  if (this.space_before_token && !this.just_added_newline()) {
    if (!this.non_breaking_space) {
      this.set_wrap_point();
    }
    this.current_line.push(' ');
  }
};

Output.prototype.remove_indent = function(index) {
  var output_length = this.__lines.length;
  while (index < output_length) {
    this.__lines[index]._remove_indent();
    index++;
  }
  this.current_line._remove_wrap_indent();
};

Output.prototype.trim = function(eat_newlines) {
  eat_newlines = (eat_newlines === undefined) ? false : eat_newlines;

  this.current_line.trim();

  while (eat_newlines && this.__lines.length > 1 &&
    this.current_line.is_empty()) {
    this.__lines.pop();
    this.current_line = this.__lines[this.__lines.length - 1];
    this.current_line.trim();
  }

  this.previous_line = this.__lines.length > 1 ?
    this.__lines[this.__lines.length - 2] : null;
};

Output.prototype.just_added_newline = function() {
  return this.current_line.is_empty();
};

Output.prototype.just_added_blankline = function() {
  return this.is_empty() ||
    (this.current_line.is_empty() && this.previous_line.is_empty());
};

Output.prototype.ensure_empty_line_above = function(starts_with, ends_with) {
  var index = this.__lines.length - 2;
  while (index >= 0) {
    var potentialEmptyLine = this.__lines[index];
    if (potentialEmptyLine.is_empty()) {
      break;
    } else if (potentialEmptyLine.item(0).indexOf(starts_with) !== 0 &&
      potentialEmptyLine.item(-1) !== ends_with) {
      this.__lines.splice(index + 1, 0, new OutputLine(this));
      this.previous_line = this.__lines[this.__lines.length - 2];
      break;
    }
    index--;
  }
};

module.exports.Output = Output;


/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*jshint node:true */
/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/



function Options(options, merge_child_field) {
  this.raw_options = _mergeOpts(options, merge_child_field);

  // Support passing the source text back with no change
  this.disabled = this._get_boolean('disabled');

  this.eol = this._get_characters('eol', 'auto');
  this.end_with_newline = this._get_boolean('end_with_newline');
  this.indent_size = this._get_number('indent_size', 4);
  this.indent_char = this._get_characters('indent_char', ' ');
  this.indent_level = this._get_number('indent_level');

  this.preserve_newlines = this._get_boolean('preserve_newlines', true);
  this.max_preserve_newlines = this._get_number('max_preserve_newlines', 32786);
  if (!this.preserve_newlines) {
    this.max_preserve_newlines = 0;
  }

  this.indent_with_tabs = this._get_boolean('indent_with_tabs', this.indent_char === '\t');
  if (this.indent_with_tabs) {
    this.indent_char = '\t';

    // indent_size behavior changed after 1.8.6
    // It used to be that indent_size would be
    // set to 1 for indent_with_tabs. That is no longer needed and
    // actually doesn't make sense - why not use spaces? Further,
    // that might produce unexpected behavior - tabs being used
    // for single-column alignment. So, when indent_with_tabs is true
    // and indent_size is 1, reset indent_size to 4.
    if (this.indent_size === 1) {
      this.indent_size = 4;
    }
  }

  // Backwards compat with 1.3.x
  this.wrap_line_length = this._get_number('wrap_line_length', this._get_number('max_char'));

  this.indent_empty_lines = this._get_boolean('indent_empty_lines');

  // valid templating languages ['django', 'erb', 'handlebars', 'php']
  // For now, 'auto' = all off for javascript, all on for html (and inline javascript).
  // other values ignored
  this.templating = this._get_selection_list('templating', ['auto', 'none', 'django', 'erb', 'handlebars', 'php'], ['auto']);
}

Options.prototype._get_array = function(name, default_value) {
  var option_value = this.raw_options[name];
  var result = default_value || [];
  if (typeof option_value === 'object') {
    if (option_value !== null && typeof option_value.concat === 'function') {
      result = option_value.concat();
    }
  } else if (typeof option_value === 'string') {
    result = option_value.split(/[^a-zA-Z0-9_\/\-]+/);
  }
  return result;
};

Options.prototype._get_boolean = function(name, default_value) {
  var option_value = this.raw_options[name];
  var result = option_value === undefined ? !!default_value : !!option_value;
  return result;
};

Options.prototype._get_characters = function(name, default_value) {
  var option_value = this.raw_options[name];
  var result = default_value || '';
  if (typeof option_value === 'string') {
    result = option_value.replace(/\\r/, '\r').replace(/\\n/, '\n').replace(/\\t/, '\t');
  }
  return result;
};

Options.prototype._get_number = function(name, default_value) {
  var option_value = this.raw_options[name];
  default_value = parseInt(default_value, 10);
  if (isNaN(default_value)) {
    default_value = 0;
  }
  var result = parseInt(option_value, 10);
  if (isNaN(result)) {
    result = default_value;
  }
  return result;
};

Options.prototype._get_selection = function(name, selection_list, default_value) {
  var result = this._get_selection_list(name, selection_list, default_value);
  if (result.length !== 1) {
    throw new Error(
      "Invalid Option Value: The option '" + name + "' can only be one of the following values:\n" +
      selection_list + "\nYou passed in: '" + this.raw_options[name] + "'");
  }

  return result[0];
};


Options.prototype._get_selection_list = function(name, selection_list, default_value) {
  if (!selection_list || selection_list.length === 0) {
    throw new Error("Selection list cannot be empty.");
  }

  default_value = default_value || [selection_list[0]];
  if (!this._is_valid_selection(default_value, selection_list)) {
    throw new Error("Invalid Default Value!");
  }

  var result = this._get_array(name, default_value);
  if (!this._is_valid_selection(result, selection_list)) {
    throw new Error(
      "Invalid Option Value: The option '" + name + "' can contain only the following values:\n" +
      selection_list + "\nYou passed in: '" + this.raw_options[name] + "'");
  }

  return result;
};

Options.prototype._is_valid_selection = function(result, selection_list) {
  return result.length && selection_list.length &&
    !result.some(function(item) { return selection_list.indexOf(item) === -1; });
};


// merges child options up with the parent options object
// Example: obj = {a: 1, b: {a: 2}}
//          mergeOpts(obj, 'b')
//
//          Returns: {a: 2}
function _mergeOpts(allOptions, childFieldName) {
  var finalOpts = {};
  allOptions = _normalizeOpts(allOptions);
  var name;

  for (name in allOptions) {
    if (name !== childFieldName) {
      finalOpts[name] = allOptions[name];
    }
  }

  //merge in the per type settings for the childFieldName
  if (childFieldName && allOptions[childFieldName]) {
    for (name in allOptions[childFieldName]) {
      finalOpts[name] = allOptions[childFieldName][name];
    }
  }
  return finalOpts;
}

function _normalizeOpts(options) {
  var convertedOpts = {};
  var key;

  for (key in options) {
    var newKey = key.replace(/-/g, "_");
    convertedOpts[newKey] = options[key];
  }
  return convertedOpts;
}

module.exports.Options = Options;
module.exports.normalizeOpts = _normalizeOpts;
module.exports.mergeOpts = _mergeOpts;


/***/ }),
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*jshint node:true */
/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/



var regexp_has_sticky = RegExp.prototype.hasOwnProperty('sticky');

function InputScanner(input_string) {
  this.__input = input_string || '';
  this.__input_length = this.__input.length;
  this.__position = 0;
}

InputScanner.prototype.restart = function() {
  this.__position = 0;
};

InputScanner.prototype.back = function() {
  if (this.__position > 0) {
    this.__position -= 1;
  }
};

InputScanner.prototype.hasNext = function() {
  return this.__position < this.__input_length;
};

InputScanner.prototype.next = function() {
  var val = null;
  if (this.hasNext()) {
    val = this.__input.charAt(this.__position);
    this.__position += 1;
  }
  return val;
};

InputScanner.prototype.peek = function(index) {
  var val = null;
  index = index || 0;
  index += this.__position;
  if (index >= 0 && index < this.__input_length) {
    val = this.__input.charAt(index);
  }
  return val;
};

// This is a JavaScript only helper function (not in python)
// Javascript doesn't have a match method
// and not all implementation support "sticky" flag.
// If they do not support sticky then both this.match() and this.test() method
// must get the match and check the index of the match.
// If sticky is supported and set, this method will use it.
// Otherwise it will check that global is set, and fall back to the slower method.
InputScanner.prototype.__match = function(pattern, index) {
  pattern.lastIndex = index;
  var pattern_match = pattern.exec(this.__input);

  if (pattern_match && !(regexp_has_sticky && pattern.sticky)) {
    if (pattern_match.index !== index) {
      pattern_match = null;
    }
  }

  return pattern_match;
};

InputScanner.prototype.test = function(pattern, index) {
  index = index || 0;
  index += this.__position;

  if (index >= 0 && index < this.__input_length) {
    return !!this.__match(pattern, index);
  } else {
    return false;
  }
};

InputScanner.prototype.testChar = function(pattern, index) {
  // test one character regex match
  var val = this.peek(index);
  pattern.lastIndex = 0;
  return val !== null && pattern.test(val);
};

InputScanner.prototype.match = function(pattern) {
  var pattern_match = this.__match(pattern, this.__position);
  if (pattern_match) {
    this.__position += pattern_match[0].length;
  } else {
    pattern_match = null;
  }
  return pattern_match;
};

InputScanner.prototype.read = function(starting_pattern, until_pattern, until_after) {
  var val = '';
  var match;
  if (starting_pattern) {
    match = this.match(starting_pattern);
    if (match) {
      val += match[0];
    }
  }
  if (until_pattern && (match || !starting_pattern)) {
    val += this.readUntil(until_pattern, until_after);
  }
  return val;
};

InputScanner.prototype.readUntil = function(pattern, until_after) {
  var val = '';
  var match_index = this.__position;
  pattern.lastIndex = this.__position;
  var pattern_match = pattern.exec(this.__input);
  if (pattern_match) {
    match_index = pattern_match.index;
    if (until_after) {
      match_index += pattern_match[0].length;
    }
  } else {
    match_index = this.__input_length;
  }

  val = this.__input.substring(this.__position, match_index);
  this.__position = match_index;
  return val;
};

InputScanner.prototype.readUntilAfter = function(pattern) {
  return this.readUntil(pattern, true);
};

InputScanner.prototype.get_regexp = function(pattern, match_from) {
  var result = null;
  var flags = 'g';
  if (match_from && regexp_has_sticky) {
    flags = 'y';
  }
  // strings are converted to regexp
  if (typeof pattern === "string" && pattern !== '') {
    // result = new RegExp(pattern.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), flags);
    result = new RegExp(pattern, flags);
  } else if (pattern) {
    result = new RegExp(pattern.source, flags);
  }
  return result;
};

InputScanner.prototype.get_literal_regexp = function(literal_string) {
  return RegExp(literal_string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'));
};

/* css beautifier legacy helpers */
InputScanner.prototype.peekUntilAfter = function(pattern) {
  var start = this.__position;
  var val = this.readUntilAfter(pattern);
  this.__position = start;
  return val;
};

InputScanner.prototype.lookBack = function(testVal) {
  var start = this.__position - 1;
  return start >= testVal.length && this.__input.substring(start - testVal.length, start)
    .toLowerCase() === testVal;
};

module.exports.InputScanner = InputScanner;


/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*jshint node:true */
/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/



function Directives(start_block_pattern, end_block_pattern) {
  start_block_pattern = typeof start_block_pattern === 'string' ? start_block_pattern : start_block_pattern.source;
  end_block_pattern = typeof end_block_pattern === 'string' ? end_block_pattern : end_block_pattern.source;
  this.__directives_block_pattern = new RegExp(start_block_pattern + / beautify( \w+[:]\w+)+ /.source + end_block_pattern, 'g');
  this.__directive_pattern = / (\w+)[:](\w+)/g;

  this.__directives_end_ignore_pattern = new RegExp(start_block_pattern + /\sbeautify\signore:end\s/.source + end_block_pattern, 'g');
}

Directives.prototype.get_directives = function(text) {
  if (!text.match(this.__directives_block_pattern)) {
    return null;
  }

  var directives = {};
  this.__directive_pattern.lastIndex = 0;
  var directive_match = this.__directive_pattern.exec(text);

  while (directive_match) {
    directives[directive_match[1]] = directive_match[2];
    directive_match = this.__directive_pattern.exec(text);
  }

  return directives;
};

Directives.prototype.readIgnored = function(input) {
  return input.readUntilAfter(this.__directives_end_ignore_pattern);
};


module.exports.Directives = Directives;


/***/ }),
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*jshint node:true */
/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/



var Beautifier = __webpack_require__(16).Beautifier,
  Options = __webpack_require__(17).Options;

function css_beautify(source_text, options) {
  var beautifier = new Beautifier(source_text, options);
  return beautifier.beautify();
}

module.exports = css_beautify;
module.exports.defaultOptions = function() {
  return new Options();
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*jshint node:true */
/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/



var Options = __webpack_require__(17).Options;
var Output = __webpack_require__(2).Output;
var InputScanner = __webpack_require__(8).InputScanner;
var Directives = __webpack_require__(13).Directives;

var directives_core = new Directives(/\/\*/, /\*\//);

var lineBreak = /\r\n|[\r\n]/;
var allLineBreaks = /\r\n|[\r\n]/g;

// tokenizer
var whitespaceChar = /\s/;
var whitespacePattern = /(?:\s|\n)+/g;
var block_comment_pattern = /\/\*(?:[\s\S]*?)((?:\*\/)|$)/g;
var comment_pattern = /\/\/(?:[^\n\r\u2028\u2029]*)/g;

function Beautifier(source_text, options) {
  this._source_text = source_text || '';
  // Allow the setting of language/file-type specific options
  // with inheritance of overall settings
  this._options = new Options(options);
  this._ch = null;
  this._input = null;

  // https://developer.mozilla.org/en-US/docs/Web/CSS/At-rule
  this.NESTED_AT_RULE = {
    "@page": true,
    "@font-face": true,
    "@keyframes": true,
    // also in CONDITIONAL_GROUP_RULE below
    "@media": true,
    "@supports": true,
    "@document": true
  };
  this.CONDITIONAL_GROUP_RULE = {
    "@media": true,
    "@supports": true,
    "@document": true
  };

}

Beautifier.prototype.eatString = function(endChars) {
  var result = '';
  this._ch = this._input.next();
  while (this._ch) {
    result += this._ch;
    if (this._ch === "\\") {
      result += this._input.next();
    } else if (endChars.indexOf(this._ch) !== -1 || this._ch === "\n") {
      break;
    }
    this._ch = this._input.next();
  }
  return result;
};

// Skips any white space in the source text from the current position.
// When allowAtLeastOneNewLine is true, will output new lines for each
// newline character found; if the user has preserve_newlines off, only
// the first newline will be output
Beautifier.prototype.eatWhitespace = function(allowAtLeastOneNewLine) {
  var result = whitespaceChar.test(this._input.peek());
  var isFirstNewLine = true;

  while (whitespaceChar.test(this._input.peek())) {
    this._ch = this._input.next();
    if (allowAtLeastOneNewLine && this._ch === '\n') {
      if (this._options.preserve_newlines || isFirstNewLine) {
        isFirstNewLine = false;
        this._output.add_new_line(true);
      }
    }
  }
  return result;
};

// Nested pseudo-class if we are insideRule
// and the next special character found opens
// a new block
Beautifier.prototype.foundNestedPseudoClass = function() {
  var openParen = 0;
  var i = 1;
  var ch = this._input.peek(i);
  while (ch) {
    if (ch === "{") {
      return true;
    } else if (ch === '(') {
      // pseudoclasses can contain ()
      openParen += 1;
    } else if (ch === ')') {
      if (openParen === 0) {
        return false;
      }
      openParen -= 1;
    } else if (ch === ";" || ch === "}") {
      return false;
    }
    i++;
    ch = this._input.peek(i);
  }
  return false;
};

Beautifier.prototype.print_string = function(output_string) {
  this._output.set_indent(this._indentLevel);
  this._output.non_breaking_space = true;
  this._output.add_token(output_string);
};

Beautifier.prototype.preserveSingleSpace = function(isAfterSpace) {
  if (isAfterSpace) {
    this._output.space_before_token = true;
  }
};

Beautifier.prototype.indent = function() {
  this._indentLevel++;
};

Beautifier.prototype.outdent = function() {
  if (this._indentLevel > 0) {
    this._indentLevel--;
  }
};

/*_____________________--------------------_____________________*/

Beautifier.prototype.beautify = function() {
  if (this._options.disabled) {
    return this._source_text;
  }

  var source_text = this._source_text;
  var eol = this._options.eol;
  if (eol === 'auto') {
    eol = '\n';
    if (source_text && lineBreak.test(source_text || '')) {
      eol = source_text.match(lineBreak)[0];
    }
  }


  // HACK: newline parsing inconsistent. This brute force normalizes the this._input.
  source_text = source_text.replace(allLineBreaks, '\n');

  // reset
  var baseIndentString = source_text.match(/^[\t ]*/)[0];

  this._output = new Output(this._options, baseIndentString);
  this._input = new InputScanner(source_text);
  this._indentLevel = 0;
  this._nestedLevel = 0;

  this._ch = null;
  var parenLevel = 0;

  var insideRule = false;
  // This is the value side of a property value pair (blue in the following ex)
  // label { content: blue }
  var insidePropertyValue = false;
  var enteringConditionalGroup = false;
  var insideAtExtend = false;
  var insideAtImport = false;
  var topCharacter = this._ch;
  var whitespace;
  var isAfterSpace;
  var previous_ch;

  while (true) {
    whitespace = this._input.read(whitespacePattern);
    isAfterSpace = whitespace !== '';
    previous_ch = topCharacter;
    this._ch = this._input.next();
    if (this._ch === '\\' && this._input.hasNext()) {
      this._ch += this._input.next();
    }
    topCharacter = this._ch;

    if (!this._ch) {
      break;
    } else if (this._ch === '/' && this._input.peek() === '*') {
      // /* css comment */
      // Always start block comments on a new line.
      // This handles scenarios where a block comment immediately
      // follows a property definition on the same line or where
      // minified code is being beautified.
      this._output.add_new_line();
      this._input.back();

      var comment = this._input.read(block_comment_pattern);

      // Handle ignore directive
      var directives = directives_core.get_directives(comment);
      if (directives && directives.ignore === 'start') {
        comment += directives_core.readIgnored(this._input);
      }

      this.print_string(comment);

      // Ensures any new lines following the comment are preserved
      this.eatWhitespace(true);

      // Block comments are followed by a new line so they don't
      // share a line with other properties
      this._output.add_new_line();
    } else if (this._ch === '/' && this._input.peek() === '/') {
      // // single line comment
      // Preserves the space before a comment
      // on the same line as a rule
      this._output.space_before_token = true;
      this._input.back();
      this.print_string(this._input.read(comment_pattern));

      // Ensures any new lines following the comment are preserved
      this.eatWhitespace(true);
    } else if (this._ch === '@') {
      this.preserveSingleSpace(isAfterSpace);

      // deal with less propery mixins @{...}
      if (this._input.peek() === '{') {
        this.print_string(this._ch + this.eatString('}'));
      } else {
        this.print_string(this._ch);

        // strip trailing space, if present, for hash property checks
        var variableOrRule = this._input.peekUntilAfter(/[: ,;{}()[\]\/='"]/g);

        if (variableOrRule.match(/[ :]$/)) {
          // we have a variable or pseudo-class, add it and insert one space before continuing
          variableOrRule = this.eatString(": ").replace(/\s$/, '');
          this.print_string(variableOrRule);
          this._output.space_before_token = true;
        }

        variableOrRule = variableOrRule.replace(/\s$/, '');

        if (variableOrRule === 'extend') {
          insideAtExtend = true;
        } else if (variableOrRule === 'import') {
          insideAtImport = true;
        }

        // might be a nesting at-rule
        if (variableOrRule in this.NESTED_AT_RULE) {
          this._nestedLevel += 1;
          if (variableOrRule in this.CONDITIONAL_GROUP_RULE) {
            enteringConditionalGroup = true;
          }
          // might be less variable
        } else if (!insideRule && parenLevel === 0 && variableOrRule.indexOf(':') !== -1) {
          insidePropertyValue = true;
          this.indent();
        }
      }
    } else if (this._ch === '#' && this._input.peek() === '{') {
      this.preserveSingleSpace(isAfterSpace);
      this.print_string(this._ch + this.eatString('}'));
    } else if (this._ch === '{') {
      if (insidePropertyValue) {
        insidePropertyValue = false;
        this.outdent();
      }
      this.indent();
      this._output.space_before_token = true;
      this.print_string(this._ch);

      // when entering conditional groups, only rulesets are allowed
      if (enteringConditionalGroup) {
        enteringConditionalGroup = false;
        insideRule = (this._indentLevel > this._nestedLevel);
      } else {
        // otherwise, declarations are also allowed
        insideRule = (this._indentLevel >= this._nestedLevel);
      }
      if (this._options.newline_between_rules && insideRule) {
        if (this._output.previous_line && this._output.previous_line.item(-1) !== '{') {
          this._output.ensure_empty_line_above('/', ',');
        }
      }
      this.eatWhitespace(true);
      this._output.add_new_line();
    } else if (this._ch === '}') {
      this.outdent();
      this._output.add_new_line();
      if (previous_ch === '{') {
        this._output.trim(true);
      }
      insideAtImport = false;
      insideAtExtend = false;
      if (insidePropertyValue) {
        this.outdent();
        insidePropertyValue = false;
      }
      this.print_string(this._ch);
      insideRule = false;
      if (this._nestedLevel) {
        this._nestedLevel--;
      }

      this.eatWhitespace(true);
      this._output.add_new_line();

      if (this._options.newline_between_rules && !this._output.just_added_blankline()) {
        if (this._input.peek() !== '}') {
          this._output.add_new_line(true);
        }
      }
    } else if (this._ch === ":") {
      if ((insideRule || enteringConditionalGroup) && !(this._input.lookBack("&") || this.foundNestedPseudoClass()) && !this._input.lookBack("(") && !insideAtExtend && parenLevel === 0) {
        // 'property: value' delimiter
        // which could be in a conditional group query
        this.print_string(':');
        if (!insidePropertyValue) {
          insidePropertyValue = true;
          this._output.space_before_token = true;
          this.eatWhitespace(true);
          this.indent();
        }
      } else {
        // sass/less parent reference don't use a space
        // sass nested pseudo-class don't use a space

        // preserve space before pseudoclasses/pseudoelements, as it means "in any child"
        if (this._input.lookBack(" ")) {
          this._output.space_before_token = true;
        }
        if (this._input.peek() === ":") {
          // pseudo-element
          this._ch = this._input.next();
          this.print_string("::");
        } else {
          // pseudo-class
          this.print_string(':');
        }
      }
    } else if (this._ch === '"' || this._ch === '\'') {
      this.preserveSingleSpace(isAfterSpace);
      this.print_string(this._ch + this.eatString(this._ch));
      this.eatWhitespace(true);
    } else if (this._ch === ';') {
      if (parenLevel === 0) {
        if (insidePropertyValue) {
          this.outdent();
          insidePropertyValue = false;
        }
        insideAtExtend = false;
        insideAtImport = false;
        this.print_string(this._ch);
        this.eatWhitespace(true);

        // This maintains single line comments on the same
        // line. Block comments are also affected, but
        // a new line is always output before one inside
        // that section
        if (this._input.peek() !== '/') {
          this._output.add_new_line();
        }
      } else {
        this.print_string(this._ch);
        this.eatWhitespace(true);
        this._output.space_before_token = true;
      }
    } else if (this._ch === '(') { // may be a url
      if (this._input.lookBack("url")) {
        this.print_string(this._ch);
        this.eatWhitespace();
        parenLevel++;
        this.indent();
        this._ch = this._input.next();
        if (this._ch === ')' || this._ch === '"' || this._ch === '\'') {
          this._input.back();
        } else if (this._ch) {
          this.print_string(this._ch + this.eatString(')'));
          if (parenLevel) {
            parenLevel--;
            this.outdent();
          }
        }
      } else {
        this.preserveSingleSpace(isAfterSpace);
        this.print_string(this._ch);
        this.eatWhitespace();
        parenLevel++;
        this.indent();
      }
    } else if (this._ch === ')') {
      if (parenLevel) {
        parenLevel--;
        this.outdent();
      }
      this.print_string(this._ch);
    } else if (this._ch === ',') {
      this.print_string(this._ch);
      this.eatWhitespace(true);
      if (this._options.selector_separator_newline && !insidePropertyValue && parenLevel === 0 && !insideAtImport) {
        this._output.add_new_line();
      } else {
        this._output.space_before_token = true;
      }
    } else if ((this._ch === '>' || this._ch === '+' || this._ch === '~') && !insidePropertyValue && parenLevel === 0) {
      //handle combinator spacing
      if (this._options.space_around_combinator) {
        this._output.space_before_token = true;
        this.print_string(this._ch);
        this._output.space_before_token = true;
      } else {
        this.print_string(this._ch);
        this.eatWhitespace();
        // squash extra whitespace
        if (this._ch && whitespaceChar.test(this._ch)) {
          this._ch = '';
        }
      }
    } else if (this._ch === ']') {
      this.print_string(this._ch);
    } else if (this._ch === '[') {
      this.preserveSingleSpace(isAfterSpace);
      this.print_string(this._ch);
    } else if (this._ch === '=') { // no whitespace before or after
      this.eatWhitespace();
      this.print_string('=');
      if (whitespaceChar.test(this._ch)) {
        this._ch = '';
      }
    } else if (this._ch === '!' && !this._input.lookBack("\\")) { // !important
      this.print_string(' ');
      this.print_string(this._ch);
    } else {
      this.preserveSingleSpace(isAfterSpace);
      this.print_string(this._ch);
    }
  }

  var sweetCode = this._output.get_code(eol);

  return sweetCode;
};

module.exports.Beautifier = Beautifier;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*jshint node:true */
/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/



var BaseOptions = __webpack_require__(6).Options;

function Options(options) {
  BaseOptions.call(this, options, 'css');

  this.selector_separator_newline = this._get_boolean('selector_separator_newline', true);
  this.newline_between_rules = this._get_boolean('newline_between_rules', true);
  var space_around_selector_separator = this._get_boolean('space_around_selector_separator');
  this.space_around_combinator = this._get_boolean('space_around_combinator') || space_around_selector_separator;

}
Options.prototype = new BaseOptions();



module.exports.Options = Options;


/***/ })
/******/ ]);
var css_beautify = legacy_beautify_css;
/* Footer */
if (true) {
    // Add support for AMD ( https://github.com/amdjs/amdjs-api/wiki/AMD#defineamd-property- )
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
        return {
            css_beautify: css_beautify
        };
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else if (typeof exports !== "undefined") {
    // Add support for CommonJS. Just put this file somewhere on your require.paths
    // and you will be able to `var html_beautify = require("beautify").html_beautify`.
    exports.css_beautify = css_beautify;
} else if (typeof window !== "undefined") {
    // If we're running a web page and don't have either of the above, add our one global
    window.css_beautify = css_beautify;
} else if (typeof global !== "undefined") {
    // If we don't even have window, try global.
    global.css_beautify = css_beautify;
}

}());


/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(259)
/* template */
var __vue_template__ = __webpack_require__(260)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/extension/partials/Button.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7c805598", Component.options)
  } else {
    hotAPI.reload("data-v-7c805598", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(253)
/* template */
var __vue_template__ = __webpack_require__(262)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/extension/partials/Action.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-54faeac8", Component.options)
  } else {
    hotAPI.reload("data-v-54faeac8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(265)
/* template */
var __vue_template__ = __webpack_require__(266)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/extension/partials/Predicate.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-34972d7e", Component.options)
  } else {
    hotAPI.reload("data-v-34972d7e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__partials_Editor__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__partials_Editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__partials_Editor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Button__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mixins__ = __webpack_require__(246);


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Editor: __WEBPACK_IMPORTED_MODULE_1__partials_Editor___default.a,
    UpdateButton: __WEBPACK_IMPORTED_MODULE_2__Button___default.a
  },
  data: function data() {
    return {
      content: String,
      isLoading: false
    };
  },

  methods: {
    handleChange: function handleChange(value) {
      if (value && value !== this.content) {
        this.content = value;
        this.$emit('action-change-content', this.content);
      }
    },
    update: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var result;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.isLoading = true;
                _context.next = 3;
                return __WEBPACK_IMPORTED_MODULE_3_axios___default.a.post(this.url(), {
                  fn: this.content,
                  id: this.action.id,
                  site_id: this.site ? this.site.id : null,
                  type: 'action'
                }).catch(function (error) {
                  return console.log(error);
                });

              case 3:
                result = _context.sent;

                this.isLoading = false;

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function update() {
        return _ref.apply(this, arguments);
      }

      return update;
    }()
  },
  mixins: [__WEBPACK_IMPORTED_MODULE_4__mixins__["a" /* extensionMixin */]],
  props: {
    isAdmin: {
      type: Boolean,
      require: false,
      default: false
    },
    i8n: Object,
    action: Object,
    site: {
      type: Object,
      required: false
    }
  }
});

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ace_ace__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ace_ace___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__ace_ace__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_js_beautify__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_js_beautify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_js_beautify__);
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['editorId', 'content', 'lang', 'theme'],
  data: function data() {
    return {
      beforeContent: '',
      editor: Object
    };
  },

  watch: {
    content: function content(value) {
      if (this.beforeContent !== value) {
        this.editor.setValue(value, 1);
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    var lang = this.lang || 'javascript';
    var theme = this.theme || 'chrome';
    __WEBPACK_IMPORTED_MODULE_0__ace_ace___default.a.config.set('basePath', '../../../../../../vendor/ace');

    this.editor = __WEBPACK_IMPORTED_MODULE_0__ace_ace___default.a.edit(this.editorId);
    this.editor.setValue(__WEBPACK_IMPORTED_MODULE_1_js_beautify___default()(this.content, {
      indent_size: 4,
      space_in_empty_paren: true,
      wrap_line_length: 120
    }), 1);

    this.editor.setShowPrintMargin(false);
    this.editor.getSession().setMode('ace/mode/' + lang);
    this.editor.setTheme('ace/theme/' + theme);

    this.editor.on('change', function () {
      _this.beforeContent = _this.editor.getValue();
      _this.$emit('change-content', __WEBPACK_IMPORTED_MODULE_1_js_beautify___default()(_this.editor.getValue(), {
        indent_size: 4,
        space_in_empty_paren: true,
        wrap_line_length: 120
      }));
    });
  }
});

/***/ }),

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function () {
    function o(n) {
        var i = e;n && (e[n] || (e[n] = {}), i = e[n]);if (!i.define || !i.define.packaged) t.original = i.define, i.define = t, i.define.packaged = !0;if (!i.require || !i.require.packaged) r.original = i.require, i.require = r, i.require.packaged = !0;
    }var ACE_NAMESPACE = "ace",
        e = function () {
        return this;
    }();!e && typeof window != "undefined" && (e = window);if (!ACE_NAMESPACE && typeof requirejs != "undefined") return;var t = function t(e, n, r) {
        if (typeof e != "string") {
            t.original ? t.original.apply(this, arguments) : (console.error("dropping module because define wasn't a string."), console.trace());return;
        }arguments.length == 2 && (r = n), t.modules[e] || (t.payloads[e] = r, t.modules[e] = null);
    };t.modules = {}, t.payloads = {};var n = function n(e, t, _n) {
        if (typeof t == "string") {
            var i = s(e, t);if (i != undefined) return _n && _n(), i;
        } else if (Object.prototype.toString.call(t) === "[object Array]") {
            var o = [];for (var u = 0, a = t.length; u < a; ++u) {
                var f = s(e, t[u]);if (f == undefined && r.original) return;o.push(f);
            }return _n && _n.apply(null, o) || !0;
        }
    },
        r = function r(e, t) {
        var i = n("", e, t);return i == undefined && r.original ? r.original.apply(this, arguments) : i;
    },
        i = function i(e, t) {
        if (t.indexOf("!") !== -1) {
            var n = t.split("!");return i(e, n[0]) + "!" + i(e, n[1]);
        }if (t.charAt(0) == ".") {
            var r = e.split("/").slice(0, -1).join("/");t = r + "/" + t;while (t.indexOf(".") !== -1 && s != t) {
                var s = t;t = t.replace(/\/\.\//, "/").replace(/[^\/]+\/\.\.\//, "");
            }
        }return t;
    },
        s = function s(e, r) {
        r = i(e, r);var s = t.modules[r];if (!s) {
            s = t.payloads[r];if (typeof s == "function") {
                var o = {},
                    u = { id: r, uri: "", exports: o, packaged: !0 },
                    a = function a(e, t) {
                    return n(r, e, t);
                },
                    f = s(a, o, u);o = f || u.exports, t.modules[r] = o, delete t.payloads[r];
            }s = t.modules[r] = o || s;
        }return s;
    };o(ACE_NAMESPACE);
})(), ace.define("ace/lib/regexp", ["require", "exports", "module"], function (e, t, n) {
    "use strict";
    function o(e) {
        return (e.global ? "g" : "") + (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.extended ? "x" : "") + (e.sticky ? "y" : "");
    }function u(e, t, n) {
        if (Array.prototype.indexOf) return e.indexOf(t, n);for (var r = n || 0; r < e.length; r++) {
            if (e[r] === t) return r;
        }return -1;
    }var r = { exec: RegExp.prototype.exec, test: RegExp.prototype.test, match: String.prototype.match, replace: String.prototype.replace, split: String.prototype.split },
        i = r.exec.call(/()??/, "")[1] === undefined,
        s = function () {
        var e = /^/g;return r.test.call(e, ""), !e.lastIndex;
    }();if (s && i) return;RegExp.prototype.exec = function (e) {
        var t = r.exec.apply(this, arguments),
            n,
            a;if (typeof e == "string" && t) {
            !i && t.length > 1 && u(t, "") > -1 && (a = RegExp(this.source, r.replace.call(o(this), "g", "")), r.replace.call(e.slice(t.index), a, function () {
                for (var e = 1; e < arguments.length - 2; e++) {
                    arguments[e] === undefined && (t[e] = undefined);
                }
            }));if (this._xregexp && this._xregexp.captureNames) for (var f = 1; f < t.length; f++) {
                n = this._xregexp.captureNames[f - 1], n && (t[n] = t[f]);
            }!s && this.global && !t[0].length && this.lastIndex > t.index && this.lastIndex--;
        }return t;
    }, s || (RegExp.prototype.test = function (e) {
        var t = r.exec.call(this, e);return t && this.global && !t[0].length && this.lastIndex > t.index && this.lastIndex--, !!t;
    });
}), ace.define("ace/lib/es5-shim", ["require", "exports", "module"], function (e, t, n) {
    function r() {}function w(e) {
        try {
            return Object.defineProperty(e, "sentinel", {}), "sentinel" in e;
        } catch (t) {}
    }function H(e) {
        return e = +e, e !== e ? e = 0 : e !== 0 && e !== 1 / 0 && e !== -1 / 0 && (e = (e > 0 || -1) * Math.floor(Math.abs(e))), e;
    }function B(e) {
        var t = typeof e === "undefined" ? "undefined" : _typeof(e);return e === null || t === "undefined" || t === "boolean" || t === "number" || t === "string";
    }function j(e) {
        var t, n, r;if (B(e)) return e;n = e.valueOf;if (typeof n == "function") {
            t = n.call(e);if (B(t)) return t;
        }r = e.toString;if (typeof r == "function") {
            t = r.call(e);if (B(t)) return t;
        }throw new TypeError();
    }Function.prototype.bind || (Function.prototype.bind = function (t) {
        var n = this;if (typeof n != "function") throw new TypeError("Function.prototype.bind called on incompatible " + n);var i = u.call(arguments, 1),
            s = function s() {
            if (this instanceof s) {
                var e = n.apply(this, i.concat(u.call(arguments)));return Object(e) === e ? e : this;
            }return n.apply(t, i.concat(u.call(arguments)));
        };return n.prototype && (r.prototype = n.prototype, s.prototype = new r(), r.prototype = null), s;
    });var i = Function.prototype.call,
        s = Array.prototype,
        o = Object.prototype,
        u = s.slice,
        a = i.bind(o.toString),
        f = i.bind(o.hasOwnProperty),
        l,
        c,
        h,
        p,
        d;if (d = f(o, "__defineGetter__")) l = i.bind(o.__defineGetter__), c = i.bind(o.__defineSetter__), h = i.bind(o.__lookupGetter__), p = i.bind(o.__lookupSetter__);if ([1, 2].splice(0).length != 2) if (!function () {
        function e(e) {
            var t = new Array(e + 2);return t[0] = t[1] = 0, t;
        }var t = [],
            n;t.splice.apply(t, e(20)), t.splice.apply(t, e(26)), n = t.length, t.splice(5, 0, "XXX"), n + 1 == t.length;if (n + 1 == t.length) return !0;
    }()) Array.prototype.splice = function (e, t) {
        var n = this.length;e > 0 ? e > n && (e = n) : e == void 0 ? e = 0 : e < 0 && (e = Math.max(n + e, 0)), e + t < n || (t = n - e);var r = this.slice(e, e + t),
            i = u.call(arguments, 2),
            s = i.length;if (e === n) s && this.push.apply(this, i);else {
            var o = Math.min(t, n - e),
                a = e + o,
                f = a + s - o,
                l = n - a,
                c = n - o;if (f < a) for (var h = 0; h < l; ++h) {
                this[f + h] = this[a + h];
            } else if (f > a) for (h = l; h--;) {
                this[f + h] = this[a + h];
            }if (s && e === c) this.length = c, this.push.apply(this, i);else {
                this.length = c + s;for (h = 0; h < s; ++h) {
                    this[e + h] = i[h];
                }
            }
        }return r;
    };else {
        var v = Array.prototype.splice;Array.prototype.splice = function (e, t) {
            return arguments.length ? v.apply(this, [e === void 0 ? 0 : e, t === void 0 ? this.length - e : t].concat(u.call(arguments, 2))) : [];
        };
    }Array.isArray || (Array.isArray = function (t) {
        return a(t) == "[object Array]";
    });var m = Object("a"),
        g = m[0] != "a" || !(0 in m);Array.prototype.forEach || (Array.prototype.forEach = function (t) {
        var n = F(this),
            r = g && a(this) == "[object String]" ? this.split("") : n,
            i = arguments[1],
            s = -1,
            o = r.length >>> 0;if (a(t) != "[object Function]") throw new TypeError();while (++s < o) {
            s in r && t.call(i, r[s], s, n);
        }
    }), Array.prototype.map || (Array.prototype.map = function (t) {
        var n = F(this),
            r = g && a(this) == "[object String]" ? this.split("") : n,
            i = r.length >>> 0,
            s = Array(i),
            o = arguments[1];if (a(t) != "[object Function]") throw new TypeError(t + " is not a function");for (var u = 0; u < i; u++) {
            u in r && (s[u] = t.call(o, r[u], u, n));
        }return s;
    }), Array.prototype.filter || (Array.prototype.filter = function (t) {
        var n = F(this),
            r = g && a(this) == "[object String]" ? this.split("") : n,
            i = r.length >>> 0,
            s = [],
            o,
            u = arguments[1];if (a(t) != "[object Function]") throw new TypeError(t + " is not a function");for (var f = 0; f < i; f++) {
            f in r && (o = r[f], t.call(u, o, f, n) && s.push(o));
        }return s;
    }), Array.prototype.every || (Array.prototype.every = function (t) {
        var n = F(this),
            r = g && a(this) == "[object String]" ? this.split("") : n,
            i = r.length >>> 0,
            s = arguments[1];if (a(t) != "[object Function]") throw new TypeError(t + " is not a function");for (var o = 0; o < i; o++) {
            if (o in r && !t.call(s, r[o], o, n)) return !1;
        }return !0;
    }), Array.prototype.some || (Array.prototype.some = function (t) {
        var n = F(this),
            r = g && a(this) == "[object String]" ? this.split("") : n,
            i = r.length >>> 0,
            s = arguments[1];if (a(t) != "[object Function]") throw new TypeError(t + " is not a function");for (var o = 0; o < i; o++) {
            if (o in r && t.call(s, r[o], o, n)) return !0;
        }return !1;
    }), Array.prototype.reduce || (Array.prototype.reduce = function (t) {
        var n = F(this),
            r = g && a(this) == "[object String]" ? this.split("") : n,
            i = r.length >>> 0;if (a(t) != "[object Function]") throw new TypeError(t + " is not a function");if (!i && arguments.length == 1) throw new TypeError("reduce of empty array with no initial value");var s = 0,
            o;if (arguments.length >= 2) o = arguments[1];else do {
            if (s in r) {
                o = r[s++];break;
            }if (++s >= i) throw new TypeError("reduce of empty array with no initial value");
        } while (!0);for (; s < i; s++) {
            s in r && (o = t.call(void 0, o, r[s], s, n));
        }return o;
    }), Array.prototype.reduceRight || (Array.prototype.reduceRight = function (t) {
        var n = F(this),
            r = g && a(this) == "[object String]" ? this.split("") : n,
            i = r.length >>> 0;if (a(t) != "[object Function]") throw new TypeError(t + " is not a function");if (!i && arguments.length == 1) throw new TypeError("reduceRight of empty array with no initial value");var s,
            o = i - 1;if (arguments.length >= 2) s = arguments[1];else do {
            if (o in r) {
                s = r[o--];break;
            }if (--o < 0) throw new TypeError("reduceRight of empty array with no initial value");
        } while (!0);do {
            o in this && (s = t.call(void 0, s, r[o], o, n));
        } while (o--);return s;
    });if (!Array.prototype.indexOf || [0, 1].indexOf(1, 2) != -1) Array.prototype.indexOf = function (t) {
        var n = g && a(this) == "[object String]" ? this.split("") : F(this),
            r = n.length >>> 0;if (!r) return -1;var i = 0;arguments.length > 1 && (i = H(arguments[1])), i = i >= 0 ? i : Math.max(0, r + i);for (; i < r; i++) {
            if (i in n && n[i] === t) return i;
        }return -1;
    };if (!Array.prototype.lastIndexOf || [0, 1].lastIndexOf(0, -3) != -1) Array.prototype.lastIndexOf = function (t) {
        var n = g && a(this) == "[object String]" ? this.split("") : F(this),
            r = n.length >>> 0;if (!r) return -1;var i = r - 1;arguments.length > 1 && (i = Math.min(i, H(arguments[1]))), i = i >= 0 ? i : r - Math.abs(i);for (; i >= 0; i--) {
            if (i in n && t === n[i]) return i;
        }return -1;
    };Object.getPrototypeOf || (Object.getPrototypeOf = function (t) {
        return t.__proto__ || (t.constructor ? t.constructor.prototype : o);
    });if (!Object.getOwnPropertyDescriptor) {
        var y = "Object.getOwnPropertyDescriptor called on a non-object: ";Object.getOwnPropertyDescriptor = function (t, n) {
            if ((typeof t === "undefined" ? "undefined" : _typeof(t)) != "object" && typeof t != "function" || t === null) throw new TypeError(y + t);if (!f(t, n)) return;var r, i, s;r = { enumerable: !0, configurable: !0 };if (d) {
                var u = t.__proto__;t.__proto__ = o;var i = h(t, n),
                    s = p(t, n);t.__proto__ = u;if (i || s) return i && (r.get = i), s && (r.set = s), r;
            }return r.value = t[n], r;
        };
    }Object.getOwnPropertyNames || (Object.getOwnPropertyNames = function (t) {
        return Object.keys(t);
    });if (!Object.create) {
        var b;Object.prototype.__proto__ === null ? b = function b() {
            return { __proto__: null };
        } : b = function b() {
            var e = {};for (var t in e) {
                e[t] = null;
            }return e.constructor = e.hasOwnProperty = e.propertyIsEnumerable = e.isPrototypeOf = e.toLocaleString = e.toString = e.valueOf = e.__proto__ = null, e;
        }, Object.create = function (t, n) {
            var r;if (t === null) r = b();else {
                if ((typeof t === "undefined" ? "undefined" : _typeof(t)) != "object") throw new TypeError("typeof prototype[" + (typeof t === "undefined" ? "undefined" : _typeof(t)) + "] != 'object'");var i = function i() {};i.prototype = t, r = new i(), r.__proto__ = t;
            }return n !== void 0 && Object.defineProperties(r, n), r;
        };
    }if (Object.defineProperty) {
        var E = w({}),
            S = typeof document == "undefined" || w(document.createElement("div"));if (!E || !S) var x = Object.defineProperty;
    }if (!Object.defineProperty || x) {
        var T = "Property description must be an object: ",
            N = "Object.defineProperty called on non-object: ",
            C = "getters & setters can not be defined on this javascript engine";Object.defineProperty = function (t, n, r) {
            if ((typeof t === "undefined" ? "undefined" : _typeof(t)) != "object" && typeof t != "function" || t === null) throw new TypeError(N + t);if ((typeof r === "undefined" ? "undefined" : _typeof(r)) != "object" && typeof r != "function" || r === null) throw new TypeError(T + r);if (x) try {
                return x.call(Object, t, n, r);
            } catch (i) {}if (f(r, "value")) {
                if (d && (h(t, n) || p(t, n))) {
                    var s = t.__proto__;t.__proto__ = o, delete t[n], t[n] = r.value, t.__proto__ = s;
                } else t[n] = r.value;
            } else {
                if (!d) throw new TypeError(C);f(r, "get") && l(t, n, r.get), f(r, "set") && c(t, n, r.set);
            }return t;
        };
    }Object.defineProperties || (Object.defineProperties = function (t, n) {
        for (var r in n) {
            f(n, r) && Object.defineProperty(t, r, n[r]);
        }return t;
    }), Object.seal || (Object.seal = function (t) {
        return t;
    }), Object.freeze || (Object.freeze = function (t) {
        return t;
    });try {
        Object.freeze(function () {});
    } catch (k) {
        Object.freeze = function (t) {
            return function (n) {
                return typeof n == "function" ? n : t(n);
            };
        }(Object.freeze);
    }Object.preventExtensions || (Object.preventExtensions = function (t) {
        return t;
    }), Object.isSealed || (Object.isSealed = function (t) {
        return !1;
    }), Object.isFrozen || (Object.isFrozen = function (t) {
        return !1;
    }), Object.isExtensible || (Object.isExtensible = function (t) {
        if (Object(t) === t) throw new TypeError();var n = "";while (f(t, n)) {
            n += "?";
        }t[n] = !0;var r = f(t, n);return delete t[n], r;
    });if (!Object.keys) {
        var L = !0,
            A = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
            O = A.length;for (var M in { toString: null }) {
            L = !1;
        }Object.keys = function I(e) {
            if ((typeof e === "undefined" ? "undefined" : _typeof(e)) != "object" && typeof e != "function" || e === null) throw new TypeError("Object.keys called on a non-object");var I = [];for (var t in e) {
                f(e, t) && I.push(t);
            }if (L) for (var n = 0, r = O; n < r; n++) {
                var i = A[n];f(e, i) && I.push(i);
            }return I;
        };
    }Date.now || (Date.now = function () {
        return new Date().getTime();
    });var _ = "\t\n\x0B\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";if (!String.prototype.trim) {
        _ = "[" + _ + "]";var D = new RegExp("^" + _ + _ + "*"),
            P = new RegExp(_ + _ + "*$");String.prototype.trim = function () {
            return String(this).replace(D, "").replace(P, "");
        };
    }var F = function F(e) {
        if (e == null) throw new TypeError("can't convert " + e + " to object");return Object(e);
    };
}), ace.define("ace/lib/fixoldbrowsers", ["require", "exports", "module", "ace/lib/regexp", "ace/lib/es5-shim"], function (e, t, n) {
    "use strict";
    e("./regexp"), e("./es5-shim"), typeof Element != "undefined" && !Element.prototype.remove && Object.defineProperty(Element.prototype, "remove", { enumerable: !1, writable: !0, configurable: !0, value: function value() {
            this.parentNode && this.parentNode.removeChild(this);
        } });
}), ace.define("ace/lib/useragent", ["require", "exports", "module"], function (e, t, n) {
    "use strict";
    t.OS = { LINUX: "LINUX", MAC: "MAC", WINDOWS: "WINDOWS" }, t.getOS = function () {
        return t.isMac ? t.OS.MAC : t.isLinux ? t.OS.LINUX : t.OS.WINDOWS;
    };var r = (typeof navigator === "undefined" ? "undefined" : _typeof(navigator)) == "object" ? navigator : {},
        i = (/mac|win|linux/i.exec(r.platform) || ["other"])[0].toLowerCase(),
        s = r.userAgent || "",
        o = r.appName || "";t.isWin = i == "win", t.isMac = i == "mac", t.isLinux = i == "linux", t.isIE = o == "Microsoft Internet Explorer" || o.indexOf("MSAppHost") >= 0 ? parseFloat((s.match(/(?:MSIE |Trident\/[0-9]+[\.0-9]+;.*rv:)([0-9]+[\.0-9]+)/) || [])[1]) : parseFloat((s.match(/(?:Trident\/[0-9]+[\.0-9]+;.*rv:)([0-9]+[\.0-9]+)/) || [])[1]), t.isOldIE = t.isIE && t.isIE < 9, t.isGecko = t.isMozilla = s.match(/ Gecko\/\d+/), t.isOpera = (typeof opera === "undefined" ? "undefined" : _typeof(opera)) == "object" && Object.prototype.toString.call(window.opera) == "[object Opera]", t.isWebKit = parseFloat(s.split("WebKit/")[1]) || undefined, t.isChrome = parseFloat(s.split(" Chrome/")[1]) || undefined, t.isEdge = parseFloat(s.split(" Edge/")[1]) || undefined, t.isAIR = s.indexOf("AdobeAIR") >= 0, t.isAndroid = s.indexOf("Android") >= 0, t.isChromeOS = s.indexOf(" CrOS ") >= 0, t.isIOS = /iPad|iPhone|iPod/.test(s) && !window.MSStream, t.isIOS && (t.isMac = !0), t.isMobile = t.isIOS || t.isAndroid;
}), ace.define("ace/lib/dom", ["require", "exports", "module", "ace/lib/useragent"], function (e, t, n) {
    "use strict";
    var r = e("./useragent"),
        i = "http://www.w3.org/1999/xhtml";t.buildDom = function o(e, t, n) {
        if (typeof e == "string" && e) {
            var r = document.createTextNode(e);return t && t.appendChild(r), r;
        }if (!Array.isArray(e)) return e;if (typeof e[0] != "string" || !e[0]) {
            var i = [];for (var s = 0; s < e.length; s++) {
                var u = o(e[s], t, n);u && i.push(u);
            }return i;
        }var a = document.createElement(e[0]),
            f = e[1],
            l = 1;f && (typeof f === "undefined" ? "undefined" : _typeof(f)) == "object" && !Array.isArray(f) && (l = 2);for (var s = l; s < e.length; s++) {
            o(e[s], a, n);
        }return l == 2 && Object.keys(f).forEach(function (e) {
            var t = f[e];e === "class" ? a.className = Array.isArray(t) ? t.join(" ") : t : typeof t == "function" || e == "value" ? a[e] = t : e === "ref" ? n && (n[t] = a) : t != null && a.setAttribute(e, t);
        }), t && t.appendChild(a), a;
    }, t.getDocumentHead = function (e) {
        return e || (e = document), e.head || e.getElementsByTagName("head")[0] || e.documentElement;
    }, t.createElement = function (e, t) {
        return document.createElementNS ? document.createElementNS(t || i, e) : document.createElement(e);
    }, t.removeChildren = function (e) {
        e.innerHTML = "";
    }, t.createTextNode = function (e, t) {
        var n = t ? t.ownerDocument : document;return n.createTextNode(e);
    }, t.createFragment = function (e) {
        var t = e ? e.ownerDocument : document;return t.createDocumentFragment();
    }, t.hasCssClass = function (e, t) {
        var n = (e.className + "").split(/\s+/g);return n.indexOf(t) !== -1;
    }, t.addCssClass = function (e, n) {
        t.hasCssClass(e, n) || (e.className += " " + n);
    }, t.removeCssClass = function (e, t) {
        var n = e.className.split(/\s+/g);for (;;) {
            var r = n.indexOf(t);if (r == -1) break;n.splice(r, 1);
        }e.className = n.join(" ");
    }, t.toggleCssClass = function (e, t) {
        var n = e.className.split(/\s+/g),
            r = !0;for (;;) {
            var i = n.indexOf(t);if (i == -1) break;r = !1, n.splice(i, 1);
        }return r && n.push(t), e.className = n.join(" "), r;
    }, t.setCssClass = function (e, n, r) {
        r ? t.addCssClass(e, n) : t.removeCssClass(e, n);
    }, t.hasCssString = function (e, t) {
        var n = 0,
            r;t = t || document;if (r = t.querySelectorAll("style")) while (n < r.length) {
            if (r[n++].id === e) return !0;
        }
    }, t.importCssString = function (n, r, i) {
        var s = i;if (!i || !i.getRootNode) s = document;else {
            s = i.getRootNode();if (!s || s == i) s = document;
        }var o = s.ownerDocument || s;if (r && t.hasCssString(r, s)) return null;r && (n += "\n/*# sourceURL=ace/css/" + r + " */");var u = t.createElement("style");u.appendChild(o.createTextNode(n)), r && (u.id = r), s == o && (s = t.getDocumentHead(o)), s.insertBefore(u, s.firstChild);
    }, t.importCssStylsheet = function (e, n) {
        t.buildDom(["link", { rel: "stylesheet", href: e }], t.getDocumentHead(n));
    }, t.scrollbarWidth = function (e) {
        var n = t.createElement("ace_inner");n.style.width = "100%", n.style.minWidth = "0px", n.style.height = "200px", n.style.display = "block";var r = t.createElement("ace_outer"),
            i = r.style;i.position = "absolute", i.left = "-10000px", i.overflow = "hidden", i.width = "200px", i.minWidth = "0px", i.height = "150px", i.display = "block", r.appendChild(n);var s = e.documentElement;s.appendChild(r);var o = n.offsetWidth;i.overflow = "scroll";var u = n.offsetWidth;return o == u && (u = r.clientWidth), s.removeChild(r), o - u;
    }, typeof document == "undefined" && (t.importCssString = function () {}), t.computedStyle = function (e, t) {
        return window.getComputedStyle(e, "") || {};
    }, t.setStyle = function (e, t, n) {
        e[t] !== n && (e[t] = n);
    }, t.HAS_CSS_ANIMATION = !1, t.HAS_CSS_TRANSFORMS = !1, t.HI_DPI = r.isWin ? typeof window != "undefined" && window.devicePixelRatio >= 1.5 : !0;if (typeof document != "undefined") {
        var s = document.createElement("div");t.HI_DPI && s.style.transform !== undefined && (t.HAS_CSS_TRANSFORMS = !0), !r.isEdge && typeof s.style.animationName != "undefined" && (t.HAS_CSS_ANIMATION = !0), s = null;
    }t.HAS_CSS_TRANSFORMS ? t.translate = function (e, t, n) {
        e.style.transform = "translate(" + Math.round(t) + "px, " + Math.round(n) + "px)";
    } : t.translate = function (e, t, n) {
        e.style.top = Math.round(n) + "px", e.style.left = Math.round(t) + "px";
    };
}), ace.define("ace/lib/oop", ["require", "exports", "module"], function (e, t, n) {
    "use strict";
    t.inherits = function (e, t) {
        e.super_ = t, e.prototype = Object.create(t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } });
    }, t.mixin = function (e, t) {
        for (var n in t) {
            e[n] = t[n];
        }return e;
    }, t.implement = function (e, n) {
        t.mixin(e, n);
    };
}), ace.define("ace/lib/keys", ["require", "exports", "module", "ace/lib/oop"], function (e, t, n) {
    "use strict";
    var r = e("./oop"),
        i = function () {
        var e = { MODIFIER_KEYS: { 16: "Shift", 17: "Ctrl", 18: "Alt", 224: "Meta", 91: "MetaLeft", 92: "MetaRight", 93: "ContextMenu" }, KEY_MODS: { ctrl: 1, alt: 2, option: 2, shift: 4, "super": 8, meta: 8, command: 8, cmd: 8 }, FUNCTION_KEYS: { 8: "Backspace", 9: "Tab", 13: "Return", 19: "Pause", 27: "Esc", 32: "Space", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "Left", 38: "Up", 39: "Right", 40: "Down", 44: "Print", 45: "Insert", 46: "Delete", 96: "Numpad0", 97: "Numpad1", 98: "Numpad2", 99: "Numpad3", 100: "Numpad4", 101: "Numpad5", 102: "Numpad6", 103: "Numpad7", 104: "Numpad8", 105: "Numpad9", "-13": "NumpadEnter", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "Numlock", 145: "Scrolllock" }, PRINTABLE_KEYS: { 32: " ", 48: "0", 49: "1", 50: "2", 51: "3", 52: "4", 53: "5", 54: "6", 55: "7", 56: "8", 57: "9", 59: ";", 61: "=", 65: "a", 66: "b", 67: "c", 68: "d", 69: "e", 70: "f", 71: "g", 72: "h", 73: "i", 74: "j", 75: "k", 76: "l", 77: "m", 78: "n", 79: "o", 80: "p", 81: "q", 82: "r", 83: "s", 84: "t", 85: "u", 86: "v", 87: "w", 88: "x", 89: "y", 90: "z", 107: "+", 109: "-", 110: ".", 186: ";", 187: "=", 188: ",", 189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\", 221: "]", 222: "'", 111: "/", 106: "*" } },
            t,
            n;for (n in e.FUNCTION_KEYS) {
            t = e.FUNCTION_KEYS[n].toLowerCase(), e[t] = parseInt(n, 10);
        }for (n in e.PRINTABLE_KEYS) {
            t = e.PRINTABLE_KEYS[n].toLowerCase(), e[t] = parseInt(n, 10);
        }return r.mixin(e, e.MODIFIER_KEYS), r.mixin(e, e.PRINTABLE_KEYS), r.mixin(e, e.FUNCTION_KEYS), e.enter = e["return"], e.escape = e.esc, e.del = e["delete"], e[173] = "-", function () {
            var t = ["cmd", "ctrl", "alt", "shift"];for (var n = Math.pow(2, t.length); n--;) {
                e.KEY_MODS[n] = t.filter(function (t) {
                    return n & e.KEY_MODS[t];
                }).join("-") + "-";
            }
        }(), e.KEY_MODS[0] = "", e.KEY_MODS[-1] = "input-", e;
    }();r.mixin(t, i), t.keyCodeToString = function (e) {
        var t = i[e];return typeof t != "string" && (t = String.fromCharCode(e)), t.toLowerCase();
    };
}), ace.define("ace/lib/event", ["require", "exports", "module", "ace/lib/keys", "ace/lib/useragent"], function (e, t, n) {
    "use strict";
    function a() {
        u = !1;try {
            document.createComment("").addEventListener("test", function () {}, { get passive() {
                    u = { passive: !1 };
                } });
        } catch (e) {}
    }function f() {
        return u == undefined && a(), u;
    }function c(e, t, n) {
        var u = l(t);if (!i.isMac && s) {
            t.getModifierState && (t.getModifierState("OS") || t.getModifierState("Win")) && (u |= 8);if (s.altGr) {
                if ((3 & u) == 3) return;s.altGr = 0;
            }if (n === 18 || n === 17) {
                var a = "location" in t ? t.location : t.keyLocation;if (n === 17 && a === 1) s[n] == 1 && (o = t.timeStamp);else if (n === 18 && u === 3 && a === 2) {
                    var f = t.timeStamp - o;f < 50 && (s.altGr = !0);
                }
            }
        }n in r.MODIFIER_KEYS && (n = -1);if (!u && n === 13) {
            var a = "location" in t ? t.location : t.keyLocation;if (a === 3) {
                e(t, u, -n);if (t.defaultPrevented) return;
            }
        }if (i.isChromeOS && u & 8) {
            e(t, u, n);if (t.defaultPrevented) return;u &= -9;
        }return !!u || n in r.FUNCTION_KEYS || n in r.PRINTABLE_KEYS ? e(t, u, n) : !1;
    }function h() {
        s = Object.create(null);
    }var r = e("./keys"),
        i = e("./useragent"),
        s = null,
        o = 0,
        u;t.addListener = function (e, t, n) {
        return e.addEventListener(t, n, f());
    }, t.removeListener = function (e, t, n) {
        return e.removeEventListener(t, n, f());
    }, t.stopEvent = function (e) {
        return t.stopPropagation(e), t.preventDefault(e), !1;
    }, t.stopPropagation = function (e) {
        e.stopPropagation && e.stopPropagation();
    }, t.preventDefault = function (e) {
        e.preventDefault && e.preventDefault();
    }, t.getButton = function (e) {
        return e.type == "dblclick" ? 0 : e.type == "contextmenu" || i.isMac && e.ctrlKey && !e.altKey && !e.shiftKey ? 2 : e.button;
    }, t.capture = function (e, n, r) {
        function i(e) {
            n && n(e), r && r(e), t.removeListener(document, "mousemove", n, !0), t.removeListener(document, "mouseup", i, !0), t.removeListener(document, "dragstart", i, !0);
        }return t.addListener(document, "mousemove", n, !0), t.addListener(document, "mouseup", i, !0), t.addListener(document, "dragstart", i, !0), i;
    }, t.addMouseWheelListener = function (e, n) {
        "onmousewheel" in e ? t.addListener(e, "mousewheel", function (e) {
            var t = 8;e.wheelDeltaX !== undefined ? (e.wheelX = -e.wheelDeltaX / t, e.wheelY = -e.wheelDeltaY / t) : (e.wheelX = 0, e.wheelY = -e.wheelDelta / t), n(e);
        }) : "onwheel" in e ? t.addListener(e, "wheel", function (e) {
            var t = .35;switch (e.deltaMode) {case e.DOM_DELTA_PIXEL:
                    e.wheelX = e.deltaX * t || 0, e.wheelY = e.deltaY * t || 0;break;case e.DOM_DELTA_LINE:case e.DOM_DELTA_PAGE:
                    e.wheelX = (e.deltaX || 0) * 5, e.wheelY = (e.deltaY || 0) * 5;}n(e);
        }) : t.addListener(e, "DOMMouseScroll", function (e) {
            e.axis && e.axis == e.HORIZONTAL_AXIS ? (e.wheelX = (e.detail || 0) * 5, e.wheelY = 0) : (e.wheelX = 0, e.wheelY = (e.detail || 0) * 5), n(e);
        });
    }, t.addMultiMouseDownListener = function (e, n, r, s) {
        function c(e) {
            t.getButton(e) !== 0 ? o = 0 : e.detail > 1 ? (o++, o > 4 && (o = 1)) : o = 1;if (i.isIE) {
                var c = Math.abs(e.clientX - u) > 5 || Math.abs(e.clientY - a) > 5;if (!f || c) o = 1;f && clearTimeout(f), f = setTimeout(function () {
                    f = null;
                }, n[o - 1] || 600), o == 1 && (u = e.clientX, a = e.clientY);
            }e._clicks = o, r[s]("mousedown", e);if (o > 4) o = 0;else if (o > 1) return r[s](l[o], e);
        }var o = 0,
            u,
            a,
            f,
            l = { 2: "dblclick", 3: "tripleclick", 4: "quadclick" };Array.isArray(e) || (e = [e]), e.forEach(function (e) {
            t.addListener(e, "mousedown", c);
        });
    };var l = function l(e) {
        return 0 | (e.ctrlKey ? 1 : 0) | (e.altKey ? 2 : 0) | (e.shiftKey ? 4 : 0) | (e.metaKey ? 8 : 0);
    };t.getModifierString = function (e) {
        return r.KEY_MODS[l(e)];
    }, t.addCommandKeyListener = function (e, n) {
        var r = t.addListener;if (i.isOldGecko || i.isOpera && !("KeyboardEvent" in window)) {
            var o = null;r(e, "keydown", function (e) {
                o = e.keyCode;
            }), r(e, "keypress", function (e) {
                return c(n, e, o);
            });
        } else {
            var u = null;r(e, "keydown", function (e) {
                s[e.keyCode] = (s[e.keyCode] || 0) + 1;var t = c(n, e, e.keyCode);return u = e.defaultPrevented, t;
            }), r(e, "keypress", function (e) {
                u && (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) && (t.stopEvent(e), u = null);
            }), r(e, "keyup", function (e) {
                s[e.keyCode] = null;
            }), s || (h(), r(window, "focus", h));
        }
    };if ((typeof window === "undefined" ? "undefined" : _typeof(window)) == "object" && window.postMessage && !i.isOldIE) {
        var p = 1;t.nextTick = function (e, n) {
            n = n || window;var r = "zero-timeout-message-" + p++,
                i = function i(s) {
                s.data == r && (t.stopPropagation(s), t.removeListener(n, "message", i), e());
            };t.addListener(n, "message", i), n.postMessage(r, "*");
        };
    }t.$idleBlocked = !1, t.onIdle = function (e, n) {
        return setTimeout(function r() {
            t.$idleBlocked ? setTimeout(r, 100) : e();
        }, n);
    }, t.$idleBlockId = null, t.blockIdle = function (e) {
        t.$idleBlockId && clearTimeout(t.$idleBlockId), t.$idleBlocked = !0, t.$idleBlockId = setTimeout(function () {
            t.$idleBlocked = !1;
        }, e || 100);
    }, t.nextFrame = (typeof window === "undefined" ? "undefined" : _typeof(window)) == "object" && (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame), t.nextFrame ? t.nextFrame = t.nextFrame.bind(window) : t.nextFrame = function (e) {
        setTimeout(e, 17);
    };
}), ace.define("ace/range", ["require", "exports", "module"], function (e, t, n) {
    "use strict";
    var r = function r(e, t) {
        return e.row - t.row || e.column - t.column;
    },
        i = function i(e, t, n, r) {
        this.start = { row: e, column: t }, this.end = { row: n, column: r };
    };(function () {
        this.isEqual = function (e) {
            return this.start.row === e.start.row && this.end.row === e.end.row && this.start.column === e.start.column && this.end.column === e.end.column;
        }, this.toString = function () {
            return "Range: [" + this.start.row + "/" + this.start.column + "] -> [" + this.end.row + "/" + this.end.column + "]";
        }, this.contains = function (e, t) {
            return this.compare(e, t) == 0;
        }, this.compareRange = function (e) {
            var t,
                n = e.end,
                r = e.start;return t = this.compare(n.row, n.column), t == 1 ? (t = this.compare(r.row, r.column), t == 1 ? 2 : t == 0 ? 1 : 0) : t == -1 ? -2 : (t = this.compare(r.row, r.column), t == -1 ? -1 : t == 1 ? 42 : 0);
        }, this.comparePoint = function (e) {
            return this.compare(e.row, e.column);
        }, this.containsRange = function (e) {
            return this.comparePoint(e.start) == 0 && this.comparePoint(e.end) == 0;
        }, this.intersects = function (e) {
            var t = this.compareRange(e);return t == -1 || t == 0 || t == 1;
        }, this.isEnd = function (e, t) {
            return this.end.row == e && this.end.column == t;
        }, this.isStart = function (e, t) {
            return this.start.row == e && this.start.column == t;
        }, this.setStart = function (e, t) {
            (typeof e === "undefined" ? "undefined" : _typeof(e)) == "object" ? (this.start.column = e.column, this.start.row = e.row) : (this.start.row = e, this.start.column = t);
        }, this.setEnd = function (e, t) {
            (typeof e === "undefined" ? "undefined" : _typeof(e)) == "object" ? (this.end.column = e.column, this.end.row = e.row) : (this.end.row = e, this.end.column = t);
        }, this.inside = function (e, t) {
            return this.compare(e, t) == 0 ? this.isEnd(e, t) || this.isStart(e, t) ? !1 : !0 : !1;
        }, this.insideStart = function (e, t) {
            return this.compare(e, t) == 0 ? this.isEnd(e, t) ? !1 : !0 : !1;
        }, this.insideEnd = function (e, t) {
            return this.compare(e, t) == 0 ? this.isStart(e, t) ? !1 : !0 : !1;
        }, this.compare = function (e, t) {
            return !this.isMultiLine() && e === this.start.row ? t < this.start.column ? -1 : t > this.end.column ? 1 : 0 : e < this.start.row ? -1 : e > this.end.row ? 1 : this.start.row === e ? t >= this.start.column ? 0 : -1 : this.end.row === e ? t <= this.end.column ? 0 : 1 : 0;
        }, this.compareStart = function (e, t) {
            return this.start.row == e && this.start.column == t ? -1 : this.compare(e, t);
        }, this.compareEnd = function (e, t) {
            return this.end.row == e && this.end.column == t ? 1 : this.compare(e, t);
        }, this.compareInside = function (e, t) {
            return this.end.row == e && this.end.column == t ? 1 : this.start.row == e && this.start.column == t ? -1 : this.compare(e, t);
        }, this.clipRows = function (e, t) {
            if (this.end.row > t) var n = { row: t + 1, column: 0 };else if (this.end.row < e) var n = { row: e, column: 0 };if (this.start.row > t) var r = { row: t + 1, column: 0 };else if (this.start.row < e) var r = { row: e, column: 0 };return i.fromPoints(r || this.start, n || this.end);
        }, this.extend = function (e, t) {
            var n = this.compare(e, t);if (n == 0) return this;if (n == -1) var r = { row: e, column: t };else var s = { row: e, column: t };return i.fromPoints(r || this.start, s || this.end);
        }, this.isEmpty = function () {
            return this.start.row === this.end.row && this.start.column === this.end.column;
        }, this.isMultiLine = function () {
            return this.start.row !== this.end.row;
        }, this.clone = function () {
            return i.fromPoints(this.start, this.end);
        }, this.collapseRows = function () {
            return this.end.column == 0 ? new i(this.start.row, 0, Math.max(this.start.row, this.end.row - 1), 0) : new i(this.start.row, 0, this.end.row, 0);
        }, this.toScreenRange = function (e) {
            var t = e.documentToScreenPosition(this.start),
                n = e.documentToScreenPosition(this.end);return new i(t.row, t.column, n.row, n.column);
        }, this.moveBy = function (e, t) {
            this.start.row += e, this.start.column += t, this.end.row += e, this.end.column += t;
        };
    }).call(i.prototype), i.fromPoints = function (e, t) {
        return new i(e.row, e.column, t.row, t.column);
    }, i.comparePoints = r, i.comparePoints = function (e, t) {
        return e.row - t.row || e.column - t.column;
    }, t.Range = i;
}), ace.define("ace/lib/lang", ["require", "exports", "module"], function (e, t, n) {
    "use strict";
    t.last = function (e) {
        return e[e.length - 1];
    }, t.stringReverse = function (e) {
        return e.split("").reverse().join("");
    }, t.stringRepeat = function (e, t) {
        var n = "";while (t > 0) {
            t & 1 && (n += e);if (t >>= 1) e += e;
        }return n;
    };var r = /^\s\s*/,
        i = /\s\s*$/;t.stringTrimLeft = function (e) {
        return e.replace(r, "");
    }, t.stringTrimRight = function (e) {
        return e.replace(i, "");
    }, t.copyObject = function (e) {
        var t = {};for (var n in e) {
            t[n] = e[n];
        }return t;
    }, t.copyArray = function (e) {
        var t = [];for (var n = 0, r = e.length; n < r; n++) {
            e[n] && _typeof(e[n]) == "object" ? t[n] = this.copyObject(e[n]) : t[n] = e[n];
        }return t;
    }, t.deepCopy = function s(e) {
        if ((typeof e === "undefined" ? "undefined" : _typeof(e)) != "object" || !e) return e;var t;if (Array.isArray(e)) {
            t = [];for (var n = 0; n < e.length; n++) {
                t[n] = s(e[n]);
            }return t;
        }if (Object.prototype.toString.call(e) !== "[object Object]") return e;t = {};for (var n in e) {
            t[n] = s(e[n]);
        }return t;
    }, t.arrayToMap = function (e) {
        var t = {};for (var n = 0; n < e.length; n++) {
            t[e[n]] = 1;
        }return t;
    }, t.createMap = function (e) {
        var t = Object.create(null);for (var n in e) {
            t[n] = e[n];
        }return t;
    }, t.arrayRemove = function (e, t) {
        for (var n = 0; n <= e.length; n++) {
            t === e[n] && e.splice(n, 1);
        }
    }, t.escapeRegExp = function (e) {
        return e.replace(/([.*+?^${}()|[\]\/\\])/g, "\\$1");
    }, t.escapeHTML = function (e) {
        return ("" + e).replace(/&/g, "&#38;").replace(/"/g, "&#34;").replace(/'/g, "&#39;").replace(/</g, "&#60;");
    }, t.getMatchOffsets = function (e, t) {
        var n = [];return e.replace(t, function (e) {
            n.push({ offset: arguments[arguments.length - 2], length: e.length });
        }), n;
    }, t.deferredCall = function (e) {
        var t = null,
            n = function n() {
            t = null, e();
        },
            r = function r(e) {
            return r.cancel(), t = setTimeout(n, e || 0), r;
        };return r.schedule = r, r.call = function () {
            return this.cancel(), e(), r;
        }, r.cancel = function () {
            return clearTimeout(t), t = null, r;
        }, r.isPending = function () {
            return t;
        }, r;
    }, t.delayedCall = function (e, t) {
        var n = null,
            r = function r() {
            n = null, e();
        },
            i = function i(e) {
            n == null && (n = setTimeout(r, e || t));
        };return i.delay = function (e) {
            n && clearTimeout(n), n = setTimeout(r, e || t);
        }, i.schedule = i, i.call = function () {
            this.cancel(), e();
        }, i.cancel = function () {
            n && clearTimeout(n), n = null;
        }, i.isPending = function () {
            return n;
        }, i;
    };
}), ace.define("ace/clipboard", ["require", "exports", "module"], function (e, t, n) {
    "use strict";
    var r;n.exports = { lineMode: !1, pasteCancelled: function pasteCancelled() {
            return r && r > Date.now() - 50 ? !0 : r = !1;
        }, cancel: function cancel() {
            r = Date.now();
        } };
}), ace.define("ace/keyboard/textinput", ["require", "exports", "module", "ace/lib/event", "ace/lib/useragent", "ace/lib/dom", "ace/lib/lang", "ace/clipboard", "ace/lib/keys"], function (e, t, n) {
    "use strict";
    var r = e("../lib/event"),
        i = e("../lib/useragent"),
        s = e("../lib/dom"),
        o = e("../lib/lang"),
        u = e("../clipboard"),
        a = i.isChrome < 18,
        f = i.isIE,
        l = i.isChrome > 63,
        c = 400,
        h = e("../lib/keys"),
        p = h.KEY_MODS,
        d = i.isIOS,
        v = d ? /\s/ : /\n/,
        m = function m(e, t) {
        function W() {
            S = !0, n.blur(), n.focus(), S = !1;
        }function V(e) {
            e.keyCode == 27 && n.value.length < n.selectionStart && (y || (x = n.value), T = N = -1, A()), X();
        }function J() {
            clearTimeout($), $ = setTimeout(function () {
                w && (n.style.cssText = w, w = ""), t.renderer.$isMousePressed = !1, t.renderer.$keepTextAreaAtCursor && t.renderer.$moveTextAreaToCursor();
            }, 0);
        }function Q(e, t, n) {
            var r = null,
                i = !1;n.addEventListener("keydown", function (e) {
                r && clearTimeout(r), i = !0;
            }, !0), n.addEventListener("keyup", function (e) {
                r = setTimeout(function () {
                    i = !1;
                }, 100);
            }, !0);var s = function s(e) {
                if (document.activeElement !== n) return;if (i || y || t.$mouseHandler.isMousePressed) return;if (m) return;var r = n.selectionStart,
                    s = n.selectionEnd,
                    o = null,
                    u = 0;if (r == 0) o = h.up;else if (r == 1) o = h.home;else if (s > N && x[s] == "\n") o = h.end;else if (r < T && x[r - 1] == " ") o = h.left, u = p.option;else if (r < T || r == T && N != T && r == s) o = h.left;else if (s > N && x.slice(0, s).split("\n").length > 2) o = h.down;else if (s > N && x[s - 1] == " ") o = h.right, u = p.option;else if (s > N || s == N && N != T && r == s) o = h.right;r !== s && (u |= p.shift);if (o) {
                    var a = t.onCommandKey({}, u, o);if (!a && t.commands) {
                        o = h.keyCodeToString(o);var f = t.commands.findKeyCommand(u, o);f && t.execCommand(f);
                    }T = r, N = s, A("");
                }
            };document.addEventListener("selectionchange", s), t.on("destroy", function () {
                document.removeEventListener("selectionchange", s);
            });
        }var n = s.createElement("textarea");n.className = "ace_text-input", n.setAttribute("wrap", "off"), n.setAttribute("autocorrect", "off"), n.setAttribute("autocapitalize", "off"), n.setAttribute("spellcheck", !1), n.style.opacity = "0", e.insertBefore(n, e.firstChild);var m = !1,
            g = !1,
            y = !1,
            b = !1,
            w = "";i.isMobile || (n.style.fontSize = "1px");var E = !1,
            S = !1,
            x = "",
            T = 0,
            N = 0,
            C = 0;try {
            var k = document.activeElement === n;
        } catch (L) {}r.addListener(n, "blur", function (e) {
            if (S) return;t.onBlur(e), k = !1;
        }), r.addListener(n, "focus", function (e) {
            if (S) return;k = !0;if (i.isEdge) try {
                if (!document.hasFocus()) return;
            } catch (e) {}t.onFocus(e), i.isEdge ? setTimeout(A) : A();
        }), this.$focusScroll = !1, this.focus = function () {
            if (w || l || this.$focusScroll == "browser") return n.focus({ preventScroll: !0 });var e = n.style.top;n.style.position = "fixed", n.style.top = "0px";try {
                var t = n.getBoundingClientRect().top != 0;
            } catch (r) {
                return;
            }var i = [];if (t) {
                var s = n.parentElement;while (s && s.nodeType == 1) {
                    i.push(s), s.setAttribute("ace_nocontext", !0), !s.parentElement && s.getRootNode ? s = s.getRootNode().host : s = s.parentElement;
                }
            }n.focus({ preventScroll: !0 }), t && i.forEach(function (e) {
                e.removeAttribute("ace_nocontext");
            }), setTimeout(function () {
                n.style.position = "", n.style.top == "0px" && (n.style.top = e);
            }, 0);
        }, this.blur = function () {
            n.blur();
        }, this.isFocused = function () {
            return k;
        }, t.on("beforeEndOperation", function () {
            if (t.curOp && t.curOp.command.name == "insertstring") return;y && (x = n.value = "", z()), A();
        });var A = d ? function (e) {
            if (!k || m && !e || b) return;e || (e = "");var r = "\n ab" + e + "cde fg\n";r != n.value && (n.value = x = r);var i = 4,
                s = 4 + (e.length || (t.selection.isEmpty() ? 0 : 1));(T != i || N != s) && n.setSelectionRange(i, s), T = i, N = s;
        } : function () {
            if (y || b) return;if (!k && !D) return;y = !0;var e = t.selection,
                r = e.getRange(),
                i = e.cursor.row,
                s = r.start.column,
                o = r.end.column,
                u = t.session.getLine(i);if (r.start.row != i) {
                var a = t.session.getLine(i - 1);s = r.start.row < i - 1 ? 0 : s, o += a.length + 1, u = a + "\n" + u;
            } else if (r.end.row != i) {
                var f = t.session.getLine(i + 1);o = r.end.row > i + 1 ? f.length : o, o += u.length + 1, u = u + "\n" + f;
            }u.length > c && (s < c && o < c ? u = u.slice(0, c) : (u = "\n", s = 0, o = 1));var l = u + "\n\n";l != x && (n.value = x = l, T = N = l.length), D && (T = n.selectionStart, N = n.selectionEnd);if (N != o || T != s || n.selectionEnd != N) try {
                n.setSelectionRange(s, o), T = s, N = o;
            } catch (h) {}y = !1;
        };k && t.onFocus();var O = function O(e) {
            return e.selectionStart === 0 && e.selectionEnd >= x.length && e.value === x && x && e.selectionEnd !== N;
        },
            M = function M(e) {
            if (y) return;m ? m = !1 : O(n) && (t.selectAll(), A());
        },
            _ = null;this.setInputHandler = function (e) {
            _ = e;
        }, this.getInputHandler = function () {
            return _;
        };var D = !1,
            P = function P(e, r) {
            D && (D = !1);if (g) return A(), e && t.onPaste(e), g = !1, "";var i = n.selectionStart,
                s = n.selectionEnd,
                o = T,
                u = x.length - N,
                a = e,
                f = e.length - i,
                l = e.length - s,
                c = 0;while (o > 0 && x[c] == e[c]) {
                c++, o--;
            }a = a.slice(c), c = 1;while (u > 0 && x.length - c > T - 1 && x[x.length - c] == e[e.length - c]) {
                c++, u--;
            }f -= c - 1, l -= c - 1;var h = a.length - c + 1;return h < 0 && (o = -h, h = 0), a = a.slice(0, h), !r && !a && !f && !o && !u && !l ? "" : (b = !0, a && !o && !u && !f && !l || E ? t.onTextInput(a) : t.onTextInput(a, { extendLeft: o, extendRight: u, restoreStart: f, restoreEnd: l }), b = !1, x = e, T = i, N = s, C = l, a);
        },
            H = function H(e) {
            if (y) return U();if (e && e.inputType) {
                if (e.inputType == "historyUndo") return t.execCommand("undo");if (e.inputType == "historyRedo") return t.execCommand("redo");
            }var r = n.value,
                i = P(r, !0);(r.length > c + 100 || v.test(i)) && A();
        },
            B = function B(e, t, n) {
            var r = e.clipboardData || window.clipboardData;if (!r || a) return;var i = f || n ? "Text" : "text/plain";try {
                return t ? r.setData(i, t) !== !1 : r.getData(i);
            } catch (e) {
                if (!n) return B(e, t, !0);
            }
        },
            j = function j(e, i) {
            var s = t.getCopyText();if (!s) return r.preventDefault(e);B(e, s) ? (d && (A(s), m = s, setTimeout(function () {
                m = !1;
            }, 10)), i ? t.onCut() : t.onCopy(), r.preventDefault(e)) : (m = !0, n.value = s, n.select(), setTimeout(function () {
                m = !1, A(), i ? t.onCut() : t.onCopy();
            }));
        },
            F = function F(e) {
            j(e, !0);
        },
            I = function I(e) {
            j(e, !1);
        },
            q = function q(e) {
            var s = B(e);if (u.pasteCancelled()) return;typeof s == "string" ? (s && t.onPaste(s, e), i.isIE && setTimeout(A), r.preventDefault(e)) : (n.value = "", g = !0);
        };r.addCommandKeyListener(n, t.onCommandKey.bind(t)), r.addListener(n, "select", M), r.addListener(n, "input", H), r.addListener(n, "cut", F), r.addListener(n, "copy", I), r.addListener(n, "paste", q), (!("oncut" in n) || !("oncopy" in n) || !("onpaste" in n)) && r.addListener(e, "keydown", function (e) {
            if (i.isMac && !e.metaKey || !e.ctrlKey) return;switch (e.keyCode) {case 67:
                    I(e);break;case 86:
                    q(e);break;case 88:
                    F(e);}
        });var R = function R(e) {
            if (y || !t.onCompositionStart || t.$readOnly) return;y = {};if (E) return;setTimeout(U, 0), t.on("mousedown", W);var r = t.getSelectionRange();r.end.row = r.start.row, r.end.column = r.start.column, y.markerRange = r, y.selectionStart = T, t.onCompositionStart(y), y.useTextareaForIME ? (n.value = "", x = "", T = 0, N = 0) : (n.msGetInputContext && (y.context = n.msGetInputContext()), n.getInputContext && (y.context = n.getInputContext()));
        },
            U = function U() {
            if (!y || !t.onCompositionUpdate || t.$readOnly) return;if (E) return W();if (y.useTextareaForIME) t.onCompositionUpdate(n.value);else {
                var e = n.value;P(e), y.markerRange && (y.context && (y.markerRange.start.column = y.selectionStart = y.context.compositionStartOffset), y.markerRange.end.column = y.markerRange.start.column + N - y.selectionStart + C);
            }
        },
            z = function z(e) {
            if (!t.onCompositionEnd || t.$readOnly) return;y = !1, t.onCompositionEnd(), t.off("mousedown", W), e && H();
        },
            X = o.delayedCall(U, 50).schedule.bind(null, null);r.addListener(n, "compositionstart", R), r.addListener(n, "compositionupdate", U), r.addListener(n, "keyup", V), r.addListener(n, "keydown", X), r.addListener(n, "compositionend", z), this.getElement = function () {
            return n;
        }, this.setCommandMode = function (e) {
            E = e, n.readOnly = !1;
        }, this.setReadOnly = function (e) {
            E || (n.readOnly = e);
        }, this.setCopyWithEmptySelection = function (e) {}, this.onContextMenu = function (e) {
            D = !0, A(), t._emit("nativecontextmenu", { target: t, domEvent: e }), this.moveToMouse(e, !0);
        }, this.moveToMouse = function (e, o) {
            w || (w = n.style.cssText), n.style.cssText = (o ? "z-index:100000;" : "") + (i.isIE ? "opacity:0.1;" : "") + "text-indent: -" + (T + N) * t.renderer.characterWidth * .5 + "px;";var u = t.container.getBoundingClientRect(),
                a = s.computedStyle(t.container),
                f = u.top + (parseInt(a.borderTopWidth) || 0),
                l = u.left + (parseInt(u.borderLeftWidth) || 0),
                c = u.bottom - f - n.clientHeight - 2,
                h = function h(e) {
                s.translate(n, e.clientX - l - 2, Math.min(e.clientY - f - 2, c));
            };h(e);if (e.type != "mousedown") return;t.renderer.$isMousePressed = !0, clearTimeout($), i.isWin && r.capture(t.container, h, J);
        }, this.onContextMenuClose = J;var $,
            K = function K(e) {
            t.textInput.onContextMenu(e), J();
        };r.addListener(n, "mouseup", K), r.addListener(n, "mousedown", function (e) {
            e.preventDefault(), J();
        }), r.addListener(t.renderer.scroller, "contextmenu", K), r.addListener(n, "contextmenu", K), d && Q(e, t, n);
    };t.TextInput = m;
}), ace.define("ace/mouse/default_handlers", ["require", "exports", "module", "ace/lib/useragent"], function (e, t, n) {
    "use strict";
    function o(e) {
        e.$clickSelection = null;var t = e.editor;t.setDefaultHandler("mousedown", this.onMouseDown.bind(e)), t.setDefaultHandler("dblclick", this.onDoubleClick.bind(e)), t.setDefaultHandler("tripleclick", this.onTripleClick.bind(e)), t.setDefaultHandler("quadclick", this.onQuadClick.bind(e)), t.setDefaultHandler("mousewheel", this.onMouseWheel.bind(e));var n = ["select", "startSelect", "selectEnd", "selectAllEnd", "selectByWordsEnd", "selectByLinesEnd", "dragWait", "dragWaitEnd", "focusWait"];n.forEach(function (t) {
            e[t] = this[t];
        }, this), e.selectByLines = this.extendSelectionBy.bind(e, "getLineRange"), e.selectByWords = this.extendSelectionBy.bind(e, "getWordRange");
    }function u(e, t, n, r) {
        return Math.sqrt(Math.pow(n - e, 2) + Math.pow(r - t, 2));
    }function a(e, t) {
        if (e.start.row == e.end.row) var n = 2 * t.column - e.start.column - e.end.column;else if (e.start.row == e.end.row - 1 && !e.start.column && !e.end.column) var n = t.column - 4;else var n = 2 * t.row - e.start.row - e.end.row;return n < 0 ? { cursor: e.start, anchor: e.end } : { cursor: e.end, anchor: e.start };
    }var r = e("../lib/useragent"),
        i = 0,
        s = 550;(function () {
        this.onMouseDown = function (e) {
            var t = e.inSelection(),
                n = e.getDocumentPosition();this.mousedownEvent = e;var i = this.editor,
                s = e.getButton();if (s !== 0) {
                var o = i.getSelectionRange(),
                    u = o.isEmpty();(u || s == 1) && i.selection.moveToPosition(n), s == 2 && (i.textInput.onContextMenu(e.domEvent), r.isMozilla || e.preventDefault());return;
            }this.mousedownEvent.time = Date.now();if (t && !i.isFocused()) {
                i.focus();if (this.$focusTimeout && !this.$clickSelection && !i.inMultiSelectMode) {
                    this.setState("focusWait"), this.captureMouse(e);return;
                }
            }return this.captureMouse(e), this.startSelect(n, e.domEvent._clicks > 1), e.preventDefault();
        }, this.startSelect = function (e, t) {
            e = e || this.editor.renderer.screenToTextCoordinates(this.x, this.y);var n = this.editor;if (!this.mousedownEvent) return;this.mousedownEvent.getShiftKey() ? n.selection.selectToPosition(e) : t || n.selection.moveToPosition(e), t || this.select(), n.renderer.scroller.setCapture && n.renderer.scroller.setCapture(), n.setStyle("ace_selecting"), this.setState("select");
        }, this.select = function () {
            var e,
                t = this.editor,
                n = t.renderer.screenToTextCoordinates(this.x, this.y);if (this.$clickSelection) {
                var r = this.$clickSelection.comparePoint(n);if (r == -1) e = this.$clickSelection.end;else if (r == 1) e = this.$clickSelection.start;else {
                    var i = a(this.$clickSelection, n);n = i.cursor, e = i.anchor;
                }t.selection.setSelectionAnchor(e.row, e.column);
            }t.selection.selectToPosition(n), t.renderer.scrollCursorIntoView();
        }, this.extendSelectionBy = function (e) {
            var t,
                n = this.editor,
                r = n.renderer.screenToTextCoordinates(this.x, this.y),
                i = n.selection[e](r.row, r.column);if (this.$clickSelection) {
                var s = this.$clickSelection.comparePoint(i.start),
                    o = this.$clickSelection.comparePoint(i.end);if (s == -1 && o <= 0) {
                    t = this.$clickSelection.end;if (i.end.row != r.row || i.end.column != r.column) r = i.start;
                } else if (o == 1 && s >= 0) {
                    t = this.$clickSelection.start;if (i.start.row != r.row || i.start.column != r.column) r = i.end;
                } else if (s == -1 && o == 1) r = i.end, t = i.start;else {
                    var u = a(this.$clickSelection, r);r = u.cursor, t = u.anchor;
                }n.selection.setSelectionAnchor(t.row, t.column);
            }n.selection.selectToPosition(r), n.renderer.scrollCursorIntoView();
        }, this.selectEnd = this.selectAllEnd = this.selectByWordsEnd = this.selectByLinesEnd = function () {
            this.$clickSelection = null, this.editor.unsetStyle("ace_selecting"), this.editor.renderer.scroller.releaseCapture && this.editor.renderer.scroller.releaseCapture();
        }, this.focusWait = function () {
            var e = u(this.mousedownEvent.x, this.mousedownEvent.y, this.x, this.y),
                t = Date.now();(e > i || t - this.mousedownEvent.time > this.$focusTimeout) && this.startSelect(this.mousedownEvent.getDocumentPosition());
        }, this.onDoubleClick = function (e) {
            var t = e.getDocumentPosition(),
                n = this.editor,
                r = n.session,
                i = r.getBracketRange(t);i ? (i.isEmpty() && (i.start.column--, i.end.column++), this.setState("select")) : (i = n.selection.getWordRange(t.row, t.column), this.setState("selectByWords")), this.$clickSelection = i, this.select();
        }, this.onTripleClick = function (e) {
            var t = e.getDocumentPosition(),
                n = this.editor;this.setState("selectByLines");var r = n.getSelectionRange();r.isMultiLine() && r.contains(t.row, t.column) ? (this.$clickSelection = n.selection.getLineRange(r.start.row), this.$clickSelection.end = n.selection.getLineRange(r.end.row).end) : this.$clickSelection = n.selection.getLineRange(t.row), this.select();
        }, this.onQuadClick = function (e) {
            var t = this.editor;t.selectAll(), this.$clickSelection = t.getSelectionRange(), this.setState("selectAll");
        }, this.onMouseWheel = function (e) {
            if (e.getAccelKey()) return;e.getShiftKey() && e.wheelY && !e.wheelX && (e.wheelX = e.wheelY, e.wheelY = 0);var t = this.editor;this.$lastScroll || (this.$lastScroll = { t: 0, vx: 0, vy: 0, allowed: 0 });var n = this.$lastScroll,
                r = e.domEvent.timeStamp,
                i = r - n.t,
                o = i ? e.wheelX / i : n.vx,
                u = i ? e.wheelY / i : n.vy;i < s && (o = (o + n.vx) / 2, u = (u + n.vy) / 2);var a = Math.abs(o / u),
                f = !1;a >= 1 && t.renderer.isScrollableBy(e.wheelX * e.speed, 0) && (f = !0), a <= 1 && t.renderer.isScrollableBy(0, e.wheelY * e.speed) && (f = !0);if (f) n.allowed = r;else if (r - n.allowed < s) {
                var l = Math.abs(o) <= 1.5 * Math.abs(n.vx) && Math.abs(u) <= 1.5 * Math.abs(n.vy);l ? (f = !0, n.allowed = r) : n.allowed = 0;
            }n.t = r, n.vx = o, n.vy = u;if (f) return t.renderer.scrollBy(e.wheelX * e.speed, e.wheelY * e.speed), e.stop();
        };
    }).call(o.prototype), t.DefaultHandlers = o;
}), ace.define("ace/tooltip", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom"], function (e, t, n) {
    "use strict";
    function s(e) {
        this.isOpen = !1, this.$element = null, this.$parentNode = e;
    }var r = e("./lib/oop"),
        i = e("./lib/dom");(function () {
        this.$init = function () {
            return this.$element = i.createElement("div"), this.$element.className = "ace_tooltip", this.$element.style.display = "none", this.$parentNode.appendChild(this.$element), this.$element;
        }, this.getElement = function () {
            return this.$element || this.$init();
        }, this.setText = function (e) {
            this.getElement().textContent = e;
        }, this.setHtml = function (e) {
            this.getElement().innerHTML = e;
        }, this.setPosition = function (e, t) {
            this.getElement().style.left = e + "px", this.getElement().style.top = t + "px";
        }, this.setClassName = function (e) {
            i.addCssClass(this.getElement(), e);
        }, this.show = function (e, t, n) {
            e != null && this.setText(e), t != null && n != null && this.setPosition(t, n), this.isOpen || (this.getElement().style.display = "block", this.isOpen = !0);
        }, this.hide = function () {
            this.isOpen && (this.getElement().style.display = "none", this.isOpen = !1);
        }, this.getHeight = function () {
            return this.getElement().offsetHeight;
        }, this.getWidth = function () {
            return this.getElement().offsetWidth;
        }, this.destroy = function () {
            this.isOpen = !1, this.$element && this.$element.parentNode && this.$element.parentNode.removeChild(this.$element);
        };
    }).call(s.prototype), t.Tooltip = s;
}), ace.define("ace/mouse/default_gutter_handler", ["require", "exports", "module", "ace/lib/dom", "ace/lib/oop", "ace/lib/event", "ace/tooltip"], function (e, t, n) {
    "use strict";
    function u(e) {
        function l() {
            var r = u.getDocumentPosition().row,
                s = n.$annotations[r];if (!s) return c();var o = t.session.getLength();if (r == o) {
                var a = t.renderer.pixelToScreenCoordinates(0, u.y).row,
                    l = u.$pos;if (a > t.session.documentToScreenRow(l.row, l.column)) return c();
            }if (f == s) return;f = s.text.join("<br/>"), i.setHtml(f), i.show(), t._signal("showGutterTooltip", i), t.on("mousewheel", c);if (e.$tooltipFollowsMouse) h(u);else {
                var p = u.domEvent.target,
                    d = p.getBoundingClientRect(),
                    v = i.getElement().style;v.left = d.right + "px", v.top = d.bottom + "px";
            }
        }function c() {
            o && (o = clearTimeout(o)), f && (i.hide(), f = null, t._signal("hideGutterTooltip", i), t.removeEventListener("mousewheel", c));
        }function h(e) {
            i.setPosition(e.x, e.y);
        }var t = e.editor,
            n = t.renderer.$gutterLayer,
            i = new a(t.container);e.editor.setDefaultHandler("guttermousedown", function (r) {
            if (!t.isFocused() || r.getButton() != 0) return;var i = n.getRegion(r);if (i == "foldWidgets") return;var s = r.getDocumentPosition().row,
                o = t.session.selection;if (r.getShiftKey()) o.selectTo(s, 0);else {
                if (r.domEvent.detail == 2) return t.selectAll(), r.preventDefault();e.$clickSelection = t.selection.getLineRange(s);
            }return e.setState("selectByLines"), e.captureMouse(r), r.preventDefault();
        });var o, u, f;e.editor.setDefaultHandler("guttermousemove", function (t) {
            var n = t.domEvent.target || t.domEvent.srcElement;if (r.hasCssClass(n, "ace_fold-widget")) return c();f && e.$tooltipFollowsMouse && h(t), u = t;if (o) return;o = setTimeout(function () {
                o = null, u && !e.isMousePressed ? l() : c();
            }, 50);
        }), s.addListener(t.renderer.$gutter, "mouseout", function (e) {
            u = null;if (!f || o) return;o = setTimeout(function () {
                o = null, c();
            }, 50);
        }), t.on("changeSession", c);
    }function a(e) {
        o.call(this, e);
    }var r = e("../lib/dom"),
        i = e("../lib/oop"),
        s = e("../lib/event"),
        o = e("../tooltip").Tooltip;i.inherits(a, o), function () {
        this.setPosition = function (e, t) {
            var n = window.innerWidth || document.documentElement.clientWidth,
                r = window.innerHeight || document.documentElement.clientHeight,
                i = this.getWidth(),
                s = this.getHeight();e += 15, t += 15, e + i > n && (e -= e + i - n), t + s > r && (t -= 20 + s), o.prototype.setPosition.call(this, e, t);
        };
    }.call(a.prototype), t.GutterHandler = u;
}), ace.define("ace/mouse/mouse_event", ["require", "exports", "module", "ace/lib/event", "ace/lib/useragent"], function (e, t, n) {
    "use strict";
    var r = e("../lib/event"),
        i = e("../lib/useragent"),
        s = t.MouseEvent = function (e, t) {
        this.domEvent = e, this.editor = t, this.x = this.clientX = e.clientX, this.y = this.clientY = e.clientY, this.$pos = null, this.$inSelection = null, this.propagationStopped = !1, this.defaultPrevented = !1;
    };(function () {
        this.stopPropagation = function () {
            r.stopPropagation(this.domEvent), this.propagationStopped = !0;
        }, this.preventDefault = function () {
            r.preventDefault(this.domEvent), this.defaultPrevented = !0;
        }, this.stop = function () {
            this.stopPropagation(), this.preventDefault();
        }, this.getDocumentPosition = function () {
            return this.$pos ? this.$pos : (this.$pos = this.editor.renderer.screenToTextCoordinates(this.clientX, this.clientY), this.$pos);
        }, this.inSelection = function () {
            if (this.$inSelection !== null) return this.$inSelection;var e = this.editor,
                t = e.getSelectionRange();if (t.isEmpty()) this.$inSelection = !1;else {
                var n = this.getDocumentPosition();this.$inSelection = t.contains(n.row, n.column);
            }return this.$inSelection;
        }, this.getButton = function () {
            return r.getButton(this.domEvent);
        }, this.getShiftKey = function () {
            return this.domEvent.shiftKey;
        }, this.getAccelKey = i.isMac ? function () {
            return this.domEvent.metaKey;
        } : function () {
            return this.domEvent.ctrlKey;
        };
    }).call(s.prototype);
}), ace.define("ace/mouse/dragdrop_handler", ["require", "exports", "module", "ace/lib/dom", "ace/lib/event", "ace/lib/useragent"], function (e, t, n) {
    "use strict";
    function f(e) {
        function T(e, n) {
            var r = Date.now(),
                i = !n || e.row != n.row,
                s = !n || e.column != n.column;if (!S || i || s) t.moveCursorToPosition(e), S = r, x = { x: p, y: d };else {
                var o = l(x.x, x.y, p, d);o > a ? S = null : r - S >= u && (t.renderer.scrollCursorIntoView(), S = null);
            }
        }function N(e, n) {
            var r = Date.now(),
                i = t.renderer.layerConfig.lineHeight,
                s = t.renderer.layerConfig.characterWidth,
                u = t.renderer.scroller.getBoundingClientRect(),
                a = { x: { left: p - u.left, right: u.right - p }, y: { top: d - u.top, bottom: u.bottom - d } },
                f = Math.min(a.x.left, a.x.right),
                l = Math.min(a.y.top, a.y.bottom),
                c = { row: e.row, column: e.column };f / s <= 2 && (c.column += a.x.left < a.x.right ? -3 : 2), l / i <= 1 && (c.row += a.y.top < a.y.bottom ? -1 : 1);var h = e.row != c.row,
                v = e.column != c.column,
                m = !n || e.row != n.row;h || v && !m ? E ? r - E >= o && t.renderer.scrollCursorIntoView(c) : E = r : E = null;
        }function C() {
            var e = g;g = t.renderer.screenToTextCoordinates(p, d), T(g, e), N(g, e);
        }function k() {
            m = t.selection.toOrientedRange(), h = t.session.addMarker(m, "ace_selection", t.getSelectionStyle()), t.clearSelection(), t.isFocused() && t.renderer.$cursorLayer.setBlinking(!1), clearInterval(v), C(), v = setInterval(C, 20), y = 0, i.addListener(document, "mousemove", O);
        }function L() {
            clearInterval(v), t.session.removeMarker(h), h = null, t.selection.fromOrientedRange(m), t.isFocused() && !w && t.$resetCursorStyle(), m = null, g = null, y = 0, E = null, S = null, i.removeListener(document, "mousemove", O);
        }function O() {
            A == null && (A = setTimeout(function () {
                A != null && h && L();
            }, 20));
        }function M(e) {
            var t = e.types;return !t || Array.prototype.some.call(t, function (e) {
                return e == "text/plain" || e == "Text";
            });
        }function _(e) {
            var t = ["copy", "copymove", "all", "uninitialized"],
                n = ["move", "copymove", "linkmove", "all", "uninitialized"],
                r = s.isMac ? e.altKey : e.ctrlKey,
                i = "uninitialized";try {
                i = e.dataTransfer.effectAllowed.toLowerCase();
            } catch (e) {}var o = "none";return r && t.indexOf(i) >= 0 ? o = "copy" : n.indexOf(i) >= 0 ? o = "move" : t.indexOf(i) >= 0 && (o = "copy"), o;
        }var t = e.editor,
            n = r.createElement("img");n.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", s.isOpera && (n.style.cssText = "width:1px;height:1px;position:fixed;top:0;left:0;z-index:2147483647;opacity:0;");var f = ["dragWait", "dragWaitEnd", "startDrag", "dragReadyEnd", "onMouseDrag"];f.forEach(function (t) {
            e[t] = this[t];
        }, this), t.addEventListener("mousedown", this.onMouseDown.bind(e));var c = t.container,
            h,
            p,
            d,
            v,
            m,
            g,
            y = 0,
            b,
            w,
            E,
            S,
            x;this.onDragStart = function (e) {
            if (this.cancelDrag || !c.draggable) {
                var r = this;return setTimeout(function () {
                    r.startSelect(), r.captureMouse(e);
                }, 0), e.preventDefault();
            }m = t.getSelectionRange();var i = e.dataTransfer;i.effectAllowed = t.getReadOnly() ? "copy" : "copyMove", s.isOpera && (t.container.appendChild(n), n.scrollTop = 0), i.setDragImage && i.setDragImage(n, 0, 0), s.isOpera && t.container.removeChild(n), i.clearData(), i.setData("Text", t.session.getTextRange()), w = !0, this.setState("drag");
        }, this.onDragEnd = function (e) {
            c.draggable = !1, w = !1, this.setState(null);if (!t.getReadOnly()) {
                var n = e.dataTransfer.dropEffect;!b && n == "move" && t.session.remove(t.getSelectionRange()), t.$resetCursorStyle();
            }this.editor.unsetStyle("ace_dragging"), this.editor.renderer.setCursorStyle("");
        }, this.onDragEnter = function (e) {
            if (t.getReadOnly() || !M(e.dataTransfer)) return;return p = e.clientX, d = e.clientY, h || k(), y++, e.dataTransfer.dropEffect = b = _(e), i.preventDefault(e);
        }, this.onDragOver = function (e) {
            if (t.getReadOnly() || !M(e.dataTransfer)) return;return p = e.clientX, d = e.clientY, h || (k(), y++), A !== null && (A = null), e.dataTransfer.dropEffect = b = _(e), i.preventDefault(e);
        }, this.onDragLeave = function (e) {
            y--;if (y <= 0 && h) return L(), b = null, i.preventDefault(e);
        }, this.onDrop = function (e) {
            if (!g) return;var n = e.dataTransfer;if (w) switch (b) {case "move":
                    m.contains(g.row, g.column) ? m = { start: g, end: g } : m = t.moveText(m, g);break;case "copy":
                    m = t.moveText(m, g, !0);} else {
                var r = n.getData("Text");m = { start: g, end: t.session.insert(g, r) }, t.focus(), b = null;
            }return L(), i.preventDefault(e);
        }, i.addListener(c, "dragstart", this.onDragStart.bind(e)), i.addListener(c, "dragend", this.onDragEnd.bind(e)), i.addListener(c, "dragenter", this.onDragEnter.bind(e)), i.addListener(c, "dragover", this.onDragOver.bind(e)), i.addListener(c, "dragleave", this.onDragLeave.bind(e)), i.addListener(c, "drop", this.onDrop.bind(e));var A = null;
    }function l(e, t, n, r) {
        return Math.sqrt(Math.pow(n - e, 2) + Math.pow(r - t, 2));
    }var r = e("../lib/dom"),
        i = e("../lib/event"),
        s = e("../lib/useragent"),
        o = 200,
        u = 200,
        a = 5;(function () {
        this.dragWait = function () {
            var e = Date.now() - this.mousedownEvent.time;e > this.editor.getDragDelay() && this.startDrag();
        }, this.dragWaitEnd = function () {
            var e = this.editor.container;e.draggable = !1, this.startSelect(this.mousedownEvent.getDocumentPosition()), this.selectEnd();
        }, this.dragReadyEnd = function (e) {
            this.editor.$resetCursorStyle(), this.editor.unsetStyle("ace_dragging"), this.editor.renderer.setCursorStyle(""), this.dragWaitEnd();
        }, this.startDrag = function () {
            this.cancelDrag = !1;var e = this.editor,
                t = e.container;t.draggable = !0, e.renderer.$cursorLayer.setBlinking(!1), e.setStyle("ace_dragging");var n = s.isWin ? "default" : "move";e.renderer.setCursorStyle(n), this.setState("dragReady");
        }, this.onMouseDrag = function (e) {
            var t = this.editor.container;if (s.isIE && this.state == "dragReady") {
                var n = l(this.mousedownEvent.x, this.mousedownEvent.y, this.x, this.y);n > 3 && t.dragDrop();
            }if (this.state === "dragWait") {
                var n = l(this.mousedownEvent.x, this.mousedownEvent.y, this.x, this.y);n > 0 && (t.draggable = !1, this.startSelect(this.mousedownEvent.getDocumentPosition()));
            }
        }, this.onMouseDown = function (e) {
            if (!this.$dragEnabled) return;this.mousedownEvent = e;var t = this.editor,
                n = e.inSelection(),
                r = e.getButton(),
                i = e.domEvent.detail || 1;if (i === 1 && r === 0 && n) {
                if (e.editor.inMultiSelectMode && (e.getAccelKey() || e.getShiftKey())) return;this.mousedownEvent.time = Date.now();var o = e.domEvent.target || e.domEvent.srcElement;"unselectable" in o && (o.unselectable = "on");if (t.getDragDelay()) {
                    if (s.isWebKit) {
                        this.cancelDrag = !0;var u = t.container;u.draggable = !0;
                    }this.setState("dragWait");
                } else this.startDrag();this.captureMouse(e, this.onMouseDrag.bind(this)), e.defaultPrevented = !0;
            }
        };
    }).call(f.prototype), t.DragdropHandler = f;
}), ace.define("ace/mouse/touch_handler", ["require", "exports", "module", "ace/mouse/mouse_event", "ace/lib/event", "ace/lib/dom"], function (e, t, n) {
    "use strict";
    var r = e("./mouse_event").MouseEvent,
        i = e("../lib/event"),
        s = e("../lib/dom");t.addTouchListeners = function (e, t) {
        function b() {
            var e = window.navigator && window.navigator.clipboard,
                r = !1,
                i = function i() {
                var n = t.getCopyText(),
                    i = t.session.getUndoManager().hasUndo();y.replaceChild(s.buildDom(r ? ["span", !n && ["span", { "class": "ace_mobile-button", action: "selectall" }, "Select All"], n && ["span", { "class": "ace_mobile-button", action: "copy" }, "Copy"], n && ["span", { "class": "ace_mobile-button", action: "cut" }, "Cut"], e && ["span", { "class": "ace_mobile-button", action: "paste" }, "Paste"], i && ["span", { "class": "ace_mobile-button", action: "undo" }, "Undo"], ["span", { "class": "ace_mobile-button", action: "find" }, "Find"], ["span", { "class": "ace_mobile-button", action: "openCommandPallete" }, "Pallete"]] : ["span"]), y.firstChild);
            },
                o = function o(n) {
                var s = n.target.getAttribute("action");if (s == "more" || !r) return r = !r, i();if (s == "paste") e.readText().then(function (e) {
                    t.execCommand(s, e);
                });else if (s) {
                    if (s == "cut" || s == "copy") e ? e.writeText(t.getCopyText()) : document.execCommand("copy");t.execCommand(s);
                }y.firstChild.style.display = "none", r = !1, s != "openCommandPallete" && t.focus();
            };y = s.buildDom(["div", { "class": "ace_mobile-menu", ontouchstart: function ontouchstart(e) {
                    n = "menu", e.stopPropagation(), e.preventDefault(), t.textInput.focus();
                }, ontouchend: function ontouchend(e) {
                    e.stopPropagation(), e.preventDefault(), o(e);
                }, onclick: o }, ["span"], ["span", { "class": "ace_mobile-button", action: "more" }, "..."]], t.container);
        }function w() {
            y || b();var e = t.selection.cursor,
                n = t.renderer.textToScreenCoordinates(e.row, e.column),
                r = t.container.getBoundingClientRect();y.style.top = n.pageY - r.top - 3 + "px", y.style.right = "10px", y.style.display = "", y.firstChild.style.display = "none", t.on("input", E);
        }function E(e) {
            y && (y.style.display = "none"), t.off("input", E);
        }function S() {
            l = null, clearTimeout(l);var e = t.selection.getRange(),
                r = e.contains(p.row, p.column);if (e.isEmpty() || !r) t.selection.moveToPosition(p), t.selection.selectWord();n = "wait", w();
        }function x() {
            l = null, clearTimeout(l), t.selection.moveToPosition(p);var e = d >= 2 ? t.selection.getLineRange(p.row) : t.session.getBracketRange(p);e && !e.isEmpty() ? t.selection.setRange(e) : t.selection.selectWord(), n = "wait";
        }function T() {
            h += 60, c = setInterval(function () {
                h-- <= 0 && (clearInterval(c), c = null), Math.abs(v) < .01 && (v = 0), Math.abs(m) < .01 && (m = 0), h < 20 && (v = .9 * v), h < 20 && (m = .9 * m);var e = t.session.getScrollTop();t.renderer.scrollBy(10 * v, 10 * m), e == t.session.getScrollTop() && (h = 0);
            }, 10);
        }var n = "scroll",
            o,
            u,
            a,
            f,
            l,
            c,
            h = 0,
            p,
            d = 0,
            v = 0,
            m = 0,
            g,
            y;i.addListener(e, "contextmenu", function (e) {
            if (!g) return;var n = t.textInput.getElement();n.focus();
        }), i.addListener(e, "touchstart", function (e) {
            var i = e.touches;if (l || i.length > 1) {
                clearTimeout(l), l = null, a = -1, n = "zoom";return;
            }g = t.$mouseHandler.isMousePressed = !0;var s = t.renderer.layerConfig.lineHeight,
                c = t.renderer.layerConfig.lineHeight,
                y = e.timeStamp;f = y;var b = i[0],
                w = b.clientX,
                E = b.clientY;Math.abs(o - w) + Math.abs(u - E) > s && (a = -1), o = e.clientX = w, u = e.clientY = E, v = m = 0;var T = new r(e, t);p = T.getDocumentPosition();if (y - a < 500 && i.length == 1 && !h) d++, e.preventDefault(), e.button = 0, x();else {
                d = 0;var N = t.selection.cursor,
                    C = t.selection.isEmpty() ? N : t.selection.anchor,
                    k = t.renderer.$cursorLayer.getPixelPosition(N, !0),
                    L = t.renderer.$cursorLayer.getPixelPosition(C, !0),
                    A = t.renderer.scroller.getBoundingClientRect(),
                    O = function O(e, t) {
                    return e /= c, t = t / s - .75, e * e + t * t;
                };if (e.clientX < A.left) {
                    n = "zoom";return;
                }var M = O(e.clientX - A.left - k.left, e.clientY - A.top - k.top),
                    _ = O(e.clientX - A.left - L.left, e.clientY - A.top - L.top);M < 3.5 && _ < 3.5 && (n = M > _ ? "cursor" : "anchor"), _ < 3.5 ? n = "anchor" : M < 3.5 ? n = "cursor" : n = "scroll", l = setTimeout(S, 450);
            }a = y;
        }), i.addListener(e, "touchend", function (e) {
            g = t.$mouseHandler.isMousePressed = !1, c && clearInterval(c), n == "zoom" ? (n = "", h = 0) : l ? (t.selection.moveToPosition(p), h = 0, w()) : n == "scroll" ? (T(), e.preventDefault(), E()) : w(), clearTimeout(l), l = null;
        }), i.addListener(e, "touchmove", function (e) {
            l && (clearTimeout(l), l = null);var i = e.touches;if (i.length > 1 || n == "zoom") return;var s = i[0],
                a = o - s.clientX,
                c = u - s.clientY;if (n == "wait") {
                if (!(a * a + c * c > 4)) return e.preventDefault();n = "cursor";
            }o = s.clientX, u = s.clientY, e.clientX = s.clientX, e.clientY = s.clientY;var h = e.timeStamp,
                p = h - f;f = h;if (n == "scroll") {
                var d = new r(e, t);d.speed = 1, d.wheelX = a, d.wheelY = c, 10 * Math.abs(a) < Math.abs(c) && (a = 0), 10 * Math.abs(c) < Math.abs(a) && (c = 0), p != 0 && (v = a / p, m = c / p), t._emit("mousewheel", d), d.propagationStopped || (v = m = 0);
            } else {
                var g = new r(e, t),
                    y = g.getDocumentPosition();n == "cursor" ? t.selection.moveCursorToPosition(y) : n == "anchor" && t.selection.setSelectionAnchor(y.row, y.column), t.renderer.scrollCursorIntoView(y), e.preventDefault();
            }
        });
    };
}), ace.define("ace/lib/net", ["require", "exports", "module", "ace/lib/dom"], function (e, t, n) {
    "use strict";
    var r = e("./dom");t.get = function (e, t) {
        var n = new XMLHttpRequest();n.open("GET", e, !0), n.onreadystatechange = function () {
            n.readyState === 4 && t(n.responseText);
        }, n.send(null);
    }, t.loadScript = function (e, t) {
        var n = r.getDocumentHead(),
            i = document.createElement("script");i.src = e, n.appendChild(i), i.onload = i.onreadystatechange = function (e, n) {
            if (n || !i.readyState || i.readyState == "loaded" || i.readyState == "complete") i = i.onload = i.onreadystatechange = null, n || t();
        };
    }, t.qualifyURL = function (e) {
        var t = document.createElement("a");return t.href = e, t.href;
    };
}), ace.define("ace/lib/event_emitter", ["require", "exports", "module"], function (e, t, n) {
    "use strict";
    var r = {},
        i = function i() {
        this.propagationStopped = !0;
    },
        s = function s() {
        this.defaultPrevented = !0;
    };r._emit = r._dispatchEvent = function (e, t) {
        this._eventRegistry || (this._eventRegistry = {}), this._defaultHandlers || (this._defaultHandlers = {});var n = this._eventRegistry[e] || [],
            r = this._defaultHandlers[e];if (!n.length && !r) return;if ((typeof t === "undefined" ? "undefined" : _typeof(t)) != "object" || !t) t = {};t.type || (t.type = e), t.stopPropagation || (t.stopPropagation = i), t.preventDefault || (t.preventDefault = s), n = n.slice();for (var o = 0; o < n.length; o++) {
            n[o](t, this);if (t.propagationStopped) break;
        }if (r && !t.defaultPrevented) return r(t, this);
    }, r._signal = function (e, t) {
        var n = (this._eventRegistry || {})[e];if (!n) return;n = n.slice();for (var r = 0; r < n.length; r++) {
            n[r](t, this);
        }
    }, r.once = function (e, t) {
        var n = this;this.addEventListener(e, function r() {
            n.removeEventListener(e, r), t.apply(null, arguments);
        });if (!t) return new Promise(function (e) {
            t = e;
        });
    }, r.setDefaultHandler = function (e, t) {
        var n = this._defaultHandlers;n || (n = this._defaultHandlers = { _disabled_: {} });if (n[e]) {
            var r = n[e],
                i = n._disabled_[e];i || (n._disabled_[e] = i = []), i.push(r);var s = i.indexOf(t);s != -1 && i.splice(s, 1);
        }n[e] = t;
    }, r.removeDefaultHandler = function (e, t) {
        var n = this._defaultHandlers;if (!n) return;var r = n._disabled_[e];if (n[e] == t) r && this.setDefaultHandler(e, r.pop());else if (r) {
            var i = r.indexOf(t);i != -1 && r.splice(i, 1);
        }
    }, r.on = r.addEventListener = function (e, t, n) {
        this._eventRegistry = this._eventRegistry || {};var r = this._eventRegistry[e];return r || (r = this._eventRegistry[e] = []), r.indexOf(t) == -1 && r[n ? "unshift" : "push"](t), t;
    }, r.off = r.removeListener = r.removeEventListener = function (e, t) {
        this._eventRegistry = this._eventRegistry || {};var n = this._eventRegistry[e];if (!n) return;var r = n.indexOf(t);r !== -1 && n.splice(r, 1);
    }, r.removeAllListeners = function (e) {
        this._eventRegistry && (this._eventRegistry[e] = []);
    }, t.EventEmitter = r;
}), ace.define("ace/lib/app_config", ["require", "exports", "module", "ace/lib/oop", "ace/lib/event_emitter"], function (e, t, n) {
    "no use strict";
    function o(e) {
        typeof console != "undefined" && console.warn && console.warn.apply(console, arguments);
    }function u(e, t) {
        var n = new Error(e);n.data = t, (typeof console === "undefined" ? "undefined" : _typeof(console)) == "object" && console.error && console.error(n), setTimeout(function () {
            throw n;
        });
    }var r = e("./oop"),
        i = e("./event_emitter").EventEmitter,
        s = { setOptions: function setOptions(e) {
            Object.keys(e).forEach(function (t) {
                this.setOption(t, e[t]);
            }, this);
        }, getOptions: function getOptions(e) {
            var t = {};if (!e) {
                var n = this.$options;e = Object.keys(n).filter(function (e) {
                    return !n[e].hidden;
                });
            } else Array.isArray(e) || (t = e, e = Object.keys(t));return e.forEach(function (e) {
                t[e] = this.getOption(e);
            }, this), t;
        }, setOption: function setOption(e, t) {
            if (this["$" + e] === t) return;var n = this.$options[e];if (!n) return o('misspelled option "' + e + '"');if (n.forwardTo) return this[n.forwardTo] && this[n.forwardTo].setOption(e, t);n.handlesSet || (this["$" + e] = t), n && n.set && n.set.call(this, t);
        }, getOption: function getOption(e) {
            var t = this.$options[e];return t ? t.forwardTo ? this[t.forwardTo] && this[t.forwardTo].getOption(e) : t && t.get ? t.get.call(this) : this["$" + e] : o('misspelled option "' + e + '"');
        } },
        a = function a() {
        this.$defaultOptions = {};
    };(function () {
        r.implement(this, i), this.defineOptions = function (e, t, n) {
            return e.$options || (this.$defaultOptions[t] = e.$options = {}), Object.keys(n).forEach(function (t) {
                var r = n[t];typeof r == "string" && (r = { forwardTo: r }), r.name || (r.name = t), e.$options[r.name] = r, "initialValue" in r && (e["$" + r.name] = r.initialValue);
            }), r.implement(e, s), this;
        }, this.resetOptions = function (e) {
            Object.keys(e.$options).forEach(function (t) {
                var n = e.$options[t];"value" in n && e.setOption(t, n.value);
            });
        }, this.setDefaultValue = function (e, t, n) {
            if (!e) {
                for (e in this.$defaultOptions) {
                    if (this.$defaultOptions[e][t]) break;
                }if (!this.$defaultOptions[e][t]) return !1;
            }var r = this.$defaultOptions[e] || (this.$defaultOptions[e] = {});r[t] && (r.forwardTo ? this.setDefaultValue(r.forwardTo, t, n) : r[t].value = n);
        }, this.setDefaultValues = function (e, t) {
            Object.keys(t).forEach(function (n) {
                this.setDefaultValue(e, n, t[n]);
            }, this);
        }, this.warn = o, this.reportError = u;
    }).call(a.prototype), t.AppConfig = a;
}), ace.define("ace/config", ["require", "exports", "module", "ace/lib/lang", "ace/lib/oop", "ace/lib/net", "ace/lib/app_config"], function (e, t, n) {
    "no use strict";
    function l(r) {
        if (!u || !u.document) return;a.packaged = r || e.packaged || n.packaged || u.define && __webpack_require__(30).packaged;var i = {},
            s = "",
            o = document.currentScript || document._currentScript,
            f = o && o.ownerDocument || document,
            l = f.getElementsByTagName("script");for (var h = 0; h < l.length; h++) {
            var p = l[h],
                d = p.src || p.getAttribute("src");if (!d) continue;var v = p.attributes;for (var m = 0, g = v.length; m < g; m++) {
                var y = v[m];y.name.indexOf("data-ace-") === 0 && (i[c(y.name.replace(/^data-ace-/, ""))] = y.value);
            }var b = d.match(/^(.*)\/ace(\-\w+)?\.js(\?|$)/);b && (s = b[1]);
        }s && (i.base = i.base || s, i.packaged = !0), i.basePath = i.base, i.workerPath = i.workerPath || i.base, i.modePath = i.modePath || i.base, i.themePath = i.themePath || i.base, delete i.base;for (var w in i) {
            typeof i[w] != "undefined" && t.set(w, i[w]);
        }
    }function c(e) {
        return e.replace(/-(.)/g, function (e, t) {
            return t.toUpperCase();
        });
    }var r = e("./lib/lang"),
        i = e("./lib/oop"),
        s = e("./lib/net"),
        o = e("./lib/app_config").AppConfig;n.exports = t = new o();var u = function () {
        return this || typeof window != "undefined" && window;
    }(),
        a = { packaged: !1, workerPath: null, modePath: null, themePath: null, basePath: "", suffix: ".js", $moduleUrls: {}, loadWorkerFromBlob: !0, sharedPopups: !1 };t.get = function (e) {
        if (!a.hasOwnProperty(e)) throw new Error("Unknown config key: " + e);return a[e];
    }, t.set = function (e, t) {
        if (a.hasOwnProperty(e)) a[e] = t;else if (this.setDefaultValue("", e, t) == 0) throw new Error("Unknown config key: " + e);
    }, t.all = function () {
        return r.copyObject(a);
    }, t.$modes = {}, t.moduleUrl = function (e, t) {
        if (a.$moduleUrls[e]) return a.$moduleUrls[e];var n = e.split("/");t = t || n[n.length - 2] || "";var r = t == "snippets" ? "/" : "-",
            i = n[n.length - 1];if (t == "worker" && r == "-") {
            var s = new RegExp("^" + t + "[\\-_]|[\\-_]" + t + "$", "g");i = i.replace(s, "");
        }(!i || i == t) && n.length > 1 && (i = n[n.length - 2]);var o = a[t + "Path"];return o == null ? o = a.basePath : r == "/" && (t = r = ""), o && o.slice(-1) != "/" && (o += "/"), o + t + r + i + this.get("suffix");
    }, t.setModuleUrl = function (e, t) {
        return a.$moduleUrls[e] = t;
    }, t.$loading = {}, t.loadModule = function (n, r) {
        var i, o;Array.isArray(n) && (o = n[0], n = n[1]);try {
            i = e(n);
        } catch (u) {}if (i && !t.$loading[n]) return r && r(i);t.$loading[n] || (t.$loading[n] = []), t.$loading[n].push(r);if (t.$loading[n].length > 1) return;var a = function a() {
            e([n], function (e) {
                t._emit("load.module", { name: n, module: e });var r = t.$loading[n];t.$loading[n] = null, r.forEach(function (t) {
                    t && t(e);
                });
            });
        };if (!t.get("packaged")) return a();s.loadScript(t.moduleUrl(n, o), a), _f();
    };var _f = function f() {
        !a.basePath && !a.workerPath && !a.modePath && !a.themePath && !Object.keys(a.$moduleUrls).length && (console.error("Unable to infer path to ace from script src,", "use ace.config.set('basePath', 'path') to enable dynamic loading of modes and themes", "or with webpack use ace/webpack-resolver"), _f = function f() {});
    };t.init = l, t.version = "1.4.8";
}), ace.define("ace/mouse/mouse_handler", ["require", "exports", "module", "ace/lib/event", "ace/lib/useragent", "ace/mouse/default_handlers", "ace/mouse/default_gutter_handler", "ace/mouse/mouse_event", "ace/mouse/dragdrop_handler", "ace/mouse/touch_handler", "ace/config"], function (e, t, n) {
    "use strict";
    var r = e("../lib/event"),
        i = e("../lib/useragent"),
        s = e("./default_handlers").DefaultHandlers,
        o = e("./default_gutter_handler").GutterHandler,
        u = e("./mouse_event").MouseEvent,
        a = e("./dragdrop_handler").DragdropHandler,
        f = e("./touch_handler").addTouchListeners,
        l = e("../config"),
        c = function c(e) {
        var t = this;this.editor = e, new s(this), new o(this), new a(this);var n = function n(t) {
            var n = !document.hasFocus || !document.hasFocus() || !e.isFocused() && document.activeElement == (e.textInput && e.textInput.getElement());n && window.focus(), e.focus();
        },
            u = e.renderer.getMouseEventTarget();r.addListener(u, "click", this.onMouseEvent.bind(this, "click")), r.addListener(u, "mousemove", this.onMouseMove.bind(this, "mousemove")), r.addMultiMouseDownListener([u, e.renderer.scrollBarV && e.renderer.scrollBarV.inner, e.renderer.scrollBarH && e.renderer.scrollBarH.inner, e.textInput && e.textInput.getElement()].filter(Boolean), [400, 300, 250], this, "onMouseEvent"), r.addMouseWheelListener(e.container, this.onMouseWheel.bind(this, "mousewheel")), f(e.container, e);var l = e.renderer.$gutter;r.addListener(l, "mousedown", this.onMouseEvent.bind(this, "guttermousedown")), r.addListener(l, "click", this.onMouseEvent.bind(this, "gutterclick")), r.addListener(l, "dblclick", this.onMouseEvent.bind(this, "gutterdblclick")), r.addListener(l, "mousemove", this.onMouseEvent.bind(this, "guttermousemove")), r.addListener(u, "mousedown", n), r.addListener(l, "mousedown", n), i.isIE && e.renderer.scrollBarV && (r.addListener(e.renderer.scrollBarV.element, "mousedown", n), r.addListener(e.renderer.scrollBarH.element, "mousedown", n)), e.on("mousemove", function (n) {
            if (t.state || t.$dragDelay || !t.$dragEnabled) return;var r = e.renderer.screenToTextCoordinates(n.x, n.y),
                i = e.session.selection.getRange(),
                s = e.renderer;!i.isEmpty() && i.insideStart(r.row, r.column) ? s.setCursorStyle("default") : s.setCursorStyle("");
        });
    };(function () {
        this.onMouseEvent = function (e, t) {
            this.editor._emit(e, new u(t, this.editor));
        }, this.onMouseMove = function (e, t) {
            var n = this.editor._eventRegistry && this.editor._eventRegistry.mousemove;if (!n || !n.length) return;this.editor._emit(e, new u(t, this.editor));
        }, this.onMouseWheel = function (e, t) {
            var n = new u(t, this.editor);n.speed = this.$scrollSpeed * 2, n.wheelX = t.wheelX, n.wheelY = t.wheelY, this.editor._emit(e, n);
        }, this.setState = function (e) {
            this.state = e;
        }, this.captureMouse = function (e, t) {
            this.x = e.x, this.y = e.y, this.isMousePressed = !0;var n = this.editor,
                s = this.editor.renderer;s.$isMousePressed = !0;var o = this,
                a = function a(e) {
                if (!e) return;if (i.isWebKit && !e.which && o.releaseMouse) return o.releaseMouse();o.x = e.clientX, o.y = e.clientY, t && t(e), o.mouseEvent = new u(e, o.editor), o.$mouseMoved = !0;
            },
                f = function f(e) {
                n.off("beforeEndOperation", c), clearInterval(h), l(), o[o.state + "End"] && o[o.state + "End"](e), o.state = "", o.isMousePressed = s.$isMousePressed = !1, s.$keepTextAreaAtCursor && s.$moveTextAreaToCursor(), o.$onCaptureMouseMove = o.releaseMouse = null, e && o.onMouseEvent("mouseup", e), n.endOperation();
            },
                l = function l() {
                o[o.state] && o[o.state](), o.$mouseMoved = !1;
            };if (i.isOldIE && e.domEvent.type == "dblclick") return setTimeout(function () {
                f(e);
            });var c = function c(e) {
                if (!o.releaseMouse) return;n.curOp.command.name && n.curOp.selectionChanged && (o[o.state + "End"] && o[o.state + "End"](), o.state = "", o.releaseMouse());
            };n.on("beforeEndOperation", c), n.startOperation({ command: { name: "mouse" } }), o.$onCaptureMouseMove = a, o.releaseMouse = r.capture(this.editor.container, a, f);var h = setInterval(l, 20);
        }, this.releaseMouse = null, this.cancelContextMenu = function () {
            var e = function (t) {
                if (t && t.domEvent && t.domEvent.type != "contextmenu") return;this.editor.off("nativecontextmenu", e), t && t.domEvent && r.stopEvent(t.domEvent);
            }.bind(this);setTimeout(e, 10), this.editor.on("nativecontextmenu", e);
        };
    }).call(c.prototype), l.defineOptions(c.prototype, "mouseHandler", { scrollSpeed: { initialValue: 2 }, dragDelay: { initialValue: i.isMac ? 150 : 0 }, dragEnabled: { initialValue: !0 }, focusTimeout: { initialValue: 0 }, tooltipFollowsMouse: { initialValue: !0 } }), t.MouseHandler = c;
}), ace.define("ace/mouse/fold_handler", ["require", "exports", "module", "ace/lib/dom"], function (e, t, n) {
    "use strict";
    function i(e) {
        e.on("click", function (t) {
            var n = t.getDocumentPosition(),
                i = e.session,
                s = i.getFoldAt(n.row, n.column, 1);s && (t.getAccelKey() ? i.removeFold(s) : i.expandFold(s), t.stop());var o = t.domEvent && t.domEvent.target;o && r.hasCssClass(o, "ace_inline_button") && r.hasCssClass(o, "ace_toggle_wrap") && (i.setOption("wrap", !i.getUseWrapMode()), e.renderer.scrollCursorIntoView());
        }), e.on("gutterclick", function (t) {
            var n = e.renderer.$gutterLayer.getRegion(t);if (n == "foldWidgets") {
                var r = t.getDocumentPosition().row,
                    i = e.session;i.foldWidgets && i.foldWidgets[r] && e.session.onFoldWidgetClick(r, t), e.isFocused() || e.focus(), t.stop();
            }
        }), e.on("gutterdblclick", function (t) {
            var n = e.renderer.$gutterLayer.getRegion(t);if (n == "foldWidgets") {
                var r = t.getDocumentPosition().row,
                    i = e.session,
                    s = i.getParentFoldRangeData(r, !0),
                    o = s.range || s.firstRange;if (o) {
                    r = o.start.row;var u = i.getFoldAt(r, i.getLine(r).length, 1);u ? i.removeFold(u) : (i.addFold("...", o), e.renderer.scrollCursorIntoView({ row: o.start.row, column: 0 }));
                }t.stop();
            }
        });
    }var r = e("../lib/dom");t.FoldHandler = i;
}), ace.define("ace/keyboard/keybinding", ["require", "exports", "module", "ace/lib/keys", "ace/lib/event"], function (e, t, n) {
    "use strict";
    var r = e("../lib/keys"),
        i = e("../lib/event"),
        s = function s(e) {
        this.$editor = e, this.$data = { editor: e }, this.$handlers = [], this.setDefaultHandler(e.commands);
    };(function () {
        this.setDefaultHandler = function (e) {
            this.removeKeyboardHandler(this.$defaultHandler), this.$defaultHandler = e, this.addKeyboardHandler(e, 0);
        }, this.setKeyboardHandler = function (e) {
            var t = this.$handlers;if (t[t.length - 1] == e) return;while (t[t.length - 1] && t[t.length - 1] != this.$defaultHandler) {
                this.removeKeyboardHandler(t[t.length - 1]);
            }this.addKeyboardHandler(e, 1);
        }, this.addKeyboardHandler = function (e, t) {
            if (!e) return;typeof e == "function" && !e.handleKeyboard && (e.handleKeyboard = e);var n = this.$handlers.indexOf(e);n != -1 && this.$handlers.splice(n, 1), t == undefined ? this.$handlers.push(e) : this.$handlers.splice(t, 0, e), n == -1 && e.attach && e.attach(this.$editor);
        }, this.removeKeyboardHandler = function (e) {
            var t = this.$handlers.indexOf(e);return t == -1 ? !1 : (this.$handlers.splice(t, 1), e.detach && e.detach(this.$editor), !0);
        }, this.getKeyboardHandler = function () {
            return this.$handlers[this.$handlers.length - 1];
        }, this.getStatusText = function () {
            var e = this.$data,
                t = e.editor;return this.$handlers.map(function (n) {
                return n.getStatusText && n.getStatusText(t, e) || "";
            }).filter(Boolean).join(" ");
        }, this.$callKeyboardHandlers = function (e, t, n, r) {
            var s,
                o = !1,
                u = this.$editor.commands;for (var a = this.$handlers.length; a--;) {
                s = this.$handlers[a].handleKeyboard(this.$data, e, t, n, r);if (!s || !s.command) continue;s.command == "null" ? o = !0 : o = u.exec(s.command, this.$editor, s.args, r), o && r && e != -1 && s.passEvent != 1 && s.command.passEvent != 1 && i.stopEvent(r);if (o) break;
            }return !o && e == -1 && (s = { command: "insertstring" }, o = u.exec("insertstring", this.$editor, t)), o && this.$editor._signal && this.$editor._signal("keyboardActivity", s), o;
        }, this.onCommandKey = function (e, t, n) {
            var i = r.keyCodeToString(n);return this.$callKeyboardHandlers(t, i, n, e);
        }, this.onTextInput = function (e) {
            return this.$callKeyboardHandlers(-1, e);
        };
    }).call(s.prototype), t.KeyBinding = s;
}), ace.define("ace/lib/bidiutil", ["require", "exports", "module"], function (e, t, n) {
    "use strict";
    function F(e, t, n, r) {
        var i = s ? d : p,
            c = null,
            h = null,
            v = null,
            m = 0,
            g = null,
            y = null,
            b = -1,
            w = null,
            E = null,
            T = [];if (!r) for (w = 0, r = []; w < n; w++) {
            r[w] = R(e[w]);
        }o = s, u = !1, a = !1, f = !1, l = !1;for (E = 0; E < n; E++) {
            c = m, T[E] = h = q(e, r, T, E), m = i[c][h], g = m & 240, m &= 15, t[E] = v = i[m][5];if (g > 0) if (g == 16) {
                for (w = b; w < E; w++) {
                    t[w] = 1;
                }b = -1;
            } else b = -1;y = i[m][6];if (y) b == -1 && (b = E);else if (b > -1) {
                for (w = b; w < E; w++) {
                    t[w] = v;
                }b = -1;
            }r[E] == S && (t[E] = 0), o |= v;
        }if (l) for (w = 0; w < n; w++) {
            if (r[w] == x) {
                t[w] = s;for (var C = w - 1; C >= 0; C--) {
                    if (r[C] != N) break;t[C] = s;
                }
            }
        }
    }function I(e, t, n) {
        if (o < e) return;if (e == 1 && s == m && !f) {
            n.reverse();return;
        }var r = n.length,
            i = 0,
            u,
            a,
            l,
            c;while (i < r) {
            if (t[i] >= e) {
                u = i + 1;while (u < r && t[u] >= e) {
                    u++;
                }for (a = i, l = u - 1; a < l; a++, l--) {
                    c = n[a], n[a] = n[l], n[l] = c;
                }i = u;
            }i++;
        }
    }function q(e, t, n, r) {
        var i = t[r],
            o,
            c,
            h,
            p;switch (i) {case g:case y:
                u = !1;case E:case w:
                return i;case b:
                return u ? w : b;case T:
                return u = !0, a = !0, y;case N:
                return E;case C:
                if (r < 1 || r + 1 >= t.length || (o = n[r - 1]) != b && o != w || (c = t[r + 1]) != b && c != w) return E;return u && (c = w), c == o ? c : E;case k:
                o = r > 0 ? n[r - 1] : S;if (o == b && r + 1 < t.length && t[r + 1] == b) return b;return E;case L:
                if (r > 0 && n[r - 1] == b) return b;if (u) return E;p = r + 1, h = t.length;while (p < h && t[p] == L) {
                    p++;
                }if (p < h && t[p] == b) return b;return E;case A:
                h = t.length, p = r + 1;while (p < h && t[p] == A) {
                    p++;
                }if (p < h) {
                    var d = e[r],
                        v = d >= 1425 && d <= 2303 || d == 64286;o = t[p];if (v && (o == y || o == T)) return y;
                }if (r < 1 || (o = t[r - 1]) == S) return E;return n[r - 1];case S:
                return u = !1, f = !0, s;case x:
                return l = !0, E;case O:case M:case D:case P:case _:
                u = !1;case H:
                return E;}
    }function R(e) {
        var t = e.charCodeAt(0),
            n = t >> 8;return n == 0 ? t > 191 ? g : B[t] : n == 5 ? /[\u0591-\u05f4]/.test(e) ? y : g : n == 6 ? /[\u0610-\u061a\u064b-\u065f\u06d6-\u06e4\u06e7-\u06ed]/.test(e) ? A : /[\u0660-\u0669\u066b-\u066c]/.test(e) ? w : t == 1642 ? L : /[\u06f0-\u06f9]/.test(e) ? b : T : n == 32 && t <= 8287 ? j[t & 255] : n == 254 ? t >= 65136 ? T : E : E;
    }function U(e) {
        return e >= "\u064B" && e <= "\u0655";
    }var r = ["\u0621", "\u0641"],
        i = ["\u063A", "\u064A"],
        s = 0,
        o = 0,
        u = !1,
        a = !1,
        f = !1,
        l = !1,
        c = !1,
        h = !1,
        p = [[0, 3, 0, 1, 0, 0, 0], [0, 3, 0, 1, 2, 2, 0], [0, 3, 0, 17, 2, 0, 1], [0, 3, 5, 5, 4, 1, 0], [0, 3, 21, 21, 4, 0, 1], [0, 3, 5, 5, 4, 2, 0]],
        d = [[2, 0, 1, 1, 0, 1, 0], [2, 0, 1, 1, 0, 2, 0], [2, 0, 2, 1, 3, 2, 0], [2, 0, 2, 33, 3, 1, 1]],
        v = 0,
        m = 1,
        g = 0,
        y = 1,
        b = 2,
        w = 3,
        E = 4,
        S = 5,
        x = 6,
        T = 7,
        N = 8,
        C = 9,
        k = 10,
        L = 11,
        A = 12,
        O = 13,
        M = 14,
        _ = 15,
        D = 16,
        P = 17,
        H = 18,
        B = [H, H, H, H, H, H, H, H, H, x, S, x, N, S, H, H, H, H, H, H, H, H, H, H, H, H, H, H, S, S, S, x, N, E, E, L, L, L, E, E, E, E, E, k, C, k, C, C, b, b, b, b, b, b, b, b, b, b, C, E, E, E, E, E, E, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, E, E, E, E, E, E, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, E, E, E, E, H, H, H, H, H, H, S, H, H, H, H, H, H, H, H, H, H, H, H, H, H, H, H, H, H, H, H, H, H, H, H, H, H, C, E, L, L, L, L, E, E, E, E, g, E, E, H, E, E, L, L, b, b, E, g, E, E, E, b, g, E, E, E, E, E],
        j = [N, N, N, N, N, N, N, N, N, N, N, H, H, H, g, y, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, N, S, O, M, _, D, P, C, L, L, L, L, L, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, C, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, N];t.L = g, t.R = y, t.EN = b, t.ON_R = 3, t.AN = 4, t.R_H = 5, t.B = 6, t.RLE = 7, t.DOT = "\xB7", t.doBidiReorder = function (e, n, r) {
        if (e.length < 2) return {};var i = e.split(""),
            o = new Array(i.length),
            u = new Array(i.length),
            a = [];s = r ? m : v, F(i, a, i.length, n);for (var f = 0; f < o.length; o[f] = f, f++) {}I(2, a, o), I(1, a, o);for (var f = 0; f < o.length - 1; f++) {
            n[f] === w ? a[f] = t.AN : a[f] === y && (n[f] > T && n[f] < O || n[f] === E || n[f] === H) ? a[f] = t.ON_R : f > 0 && i[f - 1] === "\u0644" && /\u0622|\u0623|\u0625|\u0627/.test(i[f]) && (a[f - 1] = a[f] = t.R_H, f++);
        }i[i.length - 1] === t.DOT && (a[i.length - 1] = t.B), i[0] === "\u202B" && (a[0] = t.RLE);for (var f = 0; f < o.length; f++) {
            u[f] = a[o[f]];
        }return { logicalFromVisual: o, bidiLevels: u };
    }, t.hasBidiCharacters = function (e, t) {
        var n = !1;for (var r = 0; r < e.length; r++) {
            t[r] = R(e.charAt(r)), !n && (t[r] == y || t[r] == T || t[r] == w) && (n = !0);
        }return n;
    }, t.getVisualFromLogicalIdx = function (e, t) {
        for (var n = 0; n < t.logicalFromVisual.length; n++) {
            if (t.logicalFromVisual[n] == e) return n;
        }return 0;
    };
}), ace.define("ace/bidihandler", ["require", "exports", "module", "ace/lib/bidiutil", "ace/lib/lang"], function (e, t, n) {
    "use strict";
    var r = e("./lib/bidiutil"),
        i = e("./lib/lang"),
        s = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\u202B]/,
        o = function o(e) {
        this.session = e, this.bidiMap = {}, this.currentRow = null, this.bidiUtil = r, this.charWidths = [], this.EOL = "\xAC", this.showInvisibles = !0, this.isRtlDir = !1, this.$isRtl = !1, this.line = "", this.wrapIndent = 0, this.EOF = "\xB6", this.RLE = "\u202B", this.contentWidth = 0, this.fontMetrics = null, this.rtlLineOffset = 0, this.wrapOffset = 0, this.isMoveLeftOperation = !1, this.seenBidi = s.test(e.getValue());
    };(function () {
        this.isBidiRow = function (e, t, n) {
            return this.seenBidi ? (e !== this.currentRow && (this.currentRow = e, this.updateRowLine(t, n), this.updateBidiMap()), this.bidiMap.bidiLevels) : !1;
        }, this.onChange = function (e) {
            this.seenBidi ? this.currentRow = null : e.action == "insert" && s.test(e.lines.join("\n")) && (this.seenBidi = !0, this.currentRow = null);
        }, this.getDocumentRow = function () {
            var e = 0,
                t = this.session.$screenRowCache;if (t.length) {
                var n = this.session.$getRowCacheIndex(t, this.currentRow);n >= 0 && (e = this.session.$docRowCache[n]);
            }return e;
        }, this.getSplitIndex = function () {
            var e = 0,
                t = this.session.$screenRowCache;if (t.length) {
                var n,
                    r = this.session.$getRowCacheIndex(t, this.currentRow);while (this.currentRow - e > 0) {
                    n = this.session.$getRowCacheIndex(t, this.currentRow - e - 1);if (n !== r) break;r = n, e++;
                }
            } else e = this.currentRow;return e;
        }, this.updateRowLine = function (e, t) {
            e === undefined && (e = this.getDocumentRow());var n = e === this.session.getLength() - 1,
                s = n ? this.EOF : this.EOL;this.wrapIndent = 0, this.line = this.session.getLine(e), this.isRtlDir = this.$isRtl || this.line.charAt(0) === this.RLE;if (this.session.$useWrapMode) {
                var o = this.session.$wrapData[e];o && (t === undefined && (t = this.getSplitIndex()), t > 0 && o.length ? (this.wrapIndent = o.indent, this.wrapOffset = this.wrapIndent * this.charWidths[r.L], this.line = t < o.length ? this.line.substring(o[t - 1], o[t]) : this.line.substring(o[o.length - 1])) : this.line = this.line.substring(0, o[t])), t == o.length && (this.line += this.showInvisibles ? s : r.DOT);
            } else this.line += this.showInvisibles ? s : r.DOT;var u = this.session,
                a = 0,
                f;this.line = this.line.replace(/\t|[\u1100-\u2029, \u202F-\uFFE6]/g, function (e, t) {
                return e === "	" || u.isFullWidth(e.charCodeAt(0)) ? (f = e === "	" ? u.getScreenTabSize(t + a) : 2, a += f - 1, i.stringRepeat(r.DOT, f)) : e;
            }), this.isRtlDir && (this.fontMetrics.$main.textContent = this.line.charAt(this.line.length - 1) == r.DOT ? this.line.substr(0, this.line.length - 1) : this.line, this.rtlLineOffset = this.contentWidth - this.fontMetrics.$main.getBoundingClientRect().width);
        }, this.updateBidiMap = function () {
            var e = [];r.hasBidiCharacters(this.line, e) || this.isRtlDir ? this.bidiMap = r.doBidiReorder(this.line, e, this.isRtlDir) : this.bidiMap = {};
        }, this.markAsDirty = function () {
            this.currentRow = null;
        }, this.updateCharacterWidths = function (e) {
            if (this.characterWidth === e.$characterSize.width) return;this.fontMetrics = e;var t = this.characterWidth = e.$characterSize.width,
                n = e.$measureCharWidth("\u05D4");this.charWidths[r.L] = this.charWidths[r.EN] = this.charWidths[r.ON_R] = t, this.charWidths[r.R] = this.charWidths[r.AN] = n, this.charWidths[r.R_H] = n * .45, this.charWidths[r.B] = this.charWidths[r.RLE] = 0, this.currentRow = null;
        }, this.setShowInvisibles = function (e) {
            this.showInvisibles = e, this.currentRow = null;
        }, this.setEolChar = function (e) {
            this.EOL = e;
        }, this.setContentWidth = function (e) {
            this.contentWidth = e;
        }, this.isRtlLine = function (e) {
            return this.$isRtl ? !0 : e != undefined ? this.session.getLine(e).charAt(0) == this.RLE : this.isRtlDir;
        }, this.setRtlDirection = function (e, t) {
            var n = e.getCursorPosition();for (var r = e.selection.getSelectionAnchor().row; r <= n.row; r++) {
                !t && e.session.getLine(r).charAt(0) === e.session.$bidiHandler.RLE ? e.session.doc.removeInLine(r, 0, 1) : t && e.session.getLine(r).charAt(0) !== e.session.$bidiHandler.RLE && e.session.doc.insert({ column: 0, row: r }, e.session.$bidiHandler.RLE);
            }
        }, this.getPosLeft = function (e) {
            e -= this.wrapIndent;var t = this.line.charAt(0) === this.RLE ? 1 : 0,
                n = e > t ? this.session.getOverwrite() ? e : e - 1 : t,
                i = r.getVisualFromLogicalIdx(n, this.bidiMap),
                s = this.bidiMap.bidiLevels,
                o = 0;!this.session.getOverwrite() && e <= t && s[i] % 2 !== 0 && i++;for (var u = 0; u < i; u++) {
                o += this.charWidths[s[u]];
            }return !this.session.getOverwrite() && e > t && s[i] % 2 === 0 && (o += this.charWidths[s[i]]), this.wrapIndent && (o += this.isRtlDir ? -1 * this.wrapOffset : this.wrapOffset), this.isRtlDir && (o += this.rtlLineOffset), o;
        }, this.getSelections = function (e, t) {
            var n = this.bidiMap,
                r = n.bidiLevels,
                i,
                s = [],
                o = 0,
                u = Math.min(e, t) - this.wrapIndent,
                a = Math.max(e, t) - this.wrapIndent,
                f = !1,
                l = !1,
                c = 0;this.wrapIndent && (o += this.isRtlDir ? -1 * this.wrapOffset : this.wrapOffset);for (var h, p = 0; p < r.length; p++) {
                h = n.logicalFromVisual[p], i = r[p], f = h >= u && h < a, f && !l ? c = o : !f && l && s.push({ left: c, width: o - c }), o += this.charWidths[i], l = f;
            }f && p === r.length && s.push({ left: c, width: o - c });if (this.isRtlDir) for (var d = 0; d < s.length; d++) {
                s[d].left += this.rtlLineOffset;
            }return s;
        }, this.offsetToCol = function (e) {
            this.isRtlDir && (e -= this.rtlLineOffset);var t = 0,
                e = Math.max(e, 0),
                n = 0,
                r = 0,
                i = this.bidiMap.bidiLevels,
                s = this.charWidths[i[r]];this.wrapIndent && (e -= this.isRtlDir ? -1 * this.wrapOffset : this.wrapOffset);while (e > n + s / 2) {
                n += s;if (r === i.length - 1) {
                    s = 0;break;
                }s = this.charWidths[i[++r]];
            }return r > 0 && i[r - 1] % 2 !== 0 && i[r] % 2 === 0 ? (e < n && r--, t = this.bidiMap.logicalFromVisual[r]) : r > 0 && i[r - 1] % 2 === 0 && i[r] % 2 !== 0 ? t = 1 + (e > n ? this.bidiMap.logicalFromVisual[r] : this.bidiMap.logicalFromVisual[r - 1]) : this.isRtlDir && r === i.length - 1 && s === 0 && i[r - 1] % 2 === 0 || !this.isRtlDir && r === 0 && i[r] % 2 !== 0 ? t = 1 + this.bidiMap.logicalFromVisual[r] : (r > 0 && i[r - 1] % 2 !== 0 && s !== 0 && r--, t = this.bidiMap.logicalFromVisual[r]), t === 0 && this.isRtlDir && t++, t + this.wrapIndent;
        };
    }).call(o.prototype), t.BidiHandler = o;
}), ace.define("ace/selection", ["require", "exports", "module", "ace/lib/oop", "ace/lib/lang", "ace/lib/event_emitter", "ace/range"], function (e, t, n) {
    "use strict";
    var r = e("./lib/oop"),
        i = e("./lib/lang"),
        s = e("./lib/event_emitter").EventEmitter,
        o = e("./range").Range,
        u = function u(e) {
        this.session = e, this.doc = e.getDocument(), this.clearSelection(), this.cursor = this.lead = this.doc.createAnchor(0, 0), this.anchor = this.doc.createAnchor(0, 0), this.$silent = !1;var t = this;this.cursor.on("change", function (e) {
            t.$cursorChanged = !0, t.$silent || t._emit("changeCursor"), !t.$isEmpty && !t.$silent && t._emit("changeSelection"), !t.$keepDesiredColumnOnChange && e.old.column != e.value.column && (t.$desiredColumn = null);
        }), this.anchor.on("change", function () {
            t.$anchorChanged = !0, !t.$isEmpty && !t.$silent && t._emit("changeSelection");
        });
    };(function () {
        r.implement(this, s), this.isEmpty = function () {
            return this.$isEmpty || this.anchor.row == this.lead.row && this.anchor.column == this.lead.column;
        }, this.isMultiLine = function () {
            return !this.$isEmpty && this.anchor.row != this.cursor.row;
        }, this.getCursor = function () {
            return this.lead.getPosition();
        }, this.setSelectionAnchor = function (e, t) {
            this.$isEmpty = !1, this.anchor.setPosition(e, t);
        }, this.getAnchor = this.getSelectionAnchor = function () {
            return this.$isEmpty ? this.getSelectionLead() : this.anchor.getPosition();
        }, this.getSelectionLead = function () {
            return this.lead.getPosition();
        }, this.isBackwards = function () {
            var e = this.anchor,
                t = this.lead;return e.row > t.row || e.row == t.row && e.column > t.column;
        }, this.getRange = function () {
            var e = this.anchor,
                t = this.lead;return this.$isEmpty ? o.fromPoints(t, t) : this.isBackwards() ? o.fromPoints(t, e) : o.fromPoints(e, t);
        }, this.clearSelection = function () {
            this.$isEmpty || (this.$isEmpty = !0, this._emit("changeSelection"));
        }, this.selectAll = function () {
            this.$setSelection(0, 0, Number.MAX_VALUE, Number.MAX_VALUE);
        }, this.setRange = this.setSelectionRange = function (e, t) {
            var n = t ? e.end : e.start,
                r = t ? e.start : e.end;this.$setSelection(n.row, n.column, r.row, r.column);
        }, this.$setSelection = function (e, t, n, r) {
            if (this.$silent) return;var i = this.$isEmpty,
                s = this.inMultiSelectMode;this.$silent = !0, this.$cursorChanged = this.$anchorChanged = !1, this.anchor.setPosition(e, t), this.cursor.setPosition(n, r), this.$isEmpty = !o.comparePoints(this.anchor, this.cursor), this.$silent = !1, this.$cursorChanged && this._emit("changeCursor"), (this.$cursorChanged || this.$anchorChanged || i != this.$isEmpty || s) && this._emit("changeSelection");
        }, this.$moveSelection = function (e) {
            var t = this.lead;this.$isEmpty && this.setSelectionAnchor(t.row, t.column), e.call(this);
        }, this.selectTo = function (e, t) {
            this.$moveSelection(function () {
                this.moveCursorTo(e, t);
            });
        }, this.selectToPosition = function (e) {
            this.$moveSelection(function () {
                this.moveCursorToPosition(e);
            });
        }, this.moveTo = function (e, t) {
            this.clearSelection(), this.moveCursorTo(e, t);
        }, this.moveToPosition = function (e) {
            this.clearSelection(), this.moveCursorToPosition(e);
        }, this.selectUp = function () {
            this.$moveSelection(this.moveCursorUp);
        }, this.selectDown = function () {
            this.$moveSelection(this.moveCursorDown);
        }, this.selectRight = function () {
            this.$moveSelection(this.moveCursorRight);
        }, this.selectLeft = function () {
            this.$moveSelection(this.moveCursorLeft);
        }, this.selectLineStart = function () {
            this.$moveSelection(this.moveCursorLineStart);
        }, this.selectLineEnd = function () {
            this.$moveSelection(this.moveCursorLineEnd);
        }, this.selectFileEnd = function () {
            this.$moveSelection(this.moveCursorFileEnd);
        }, this.selectFileStart = function () {
            this.$moveSelection(this.moveCursorFileStart);
        }, this.selectWordRight = function () {
            this.$moveSelection(this.moveCursorWordRight);
        }, this.selectWordLeft = function () {
            this.$moveSelection(this.moveCursorWordLeft);
        }, this.getWordRange = function (e, t) {
            if (typeof t == "undefined") {
                var n = e || this.lead;e = n.row, t = n.column;
            }return this.session.getWordRange(e, t);
        }, this.selectWord = function () {
            this.setSelectionRange(this.getWordRange());
        }, this.selectAWord = function () {
            var e = this.getCursor(),
                t = this.session.getAWordRange(e.row, e.column);this.setSelectionRange(t);
        }, this.getLineRange = function (e, t) {
            var n = typeof e == "number" ? e : this.lead.row,
                r,
                i = this.session.getFoldLine(n);return i ? (n = i.start.row, r = i.end.row) : r = n, t === !0 ? new o(n, 0, r, this.session.getLine(r).length) : new o(n, 0, r + 1, 0);
        }, this.selectLine = function () {
            this.setSelectionRange(this.getLineRange());
        }, this.moveCursorUp = function () {
            this.moveCursorBy(-1, 0);
        }, this.moveCursorDown = function () {
            this.moveCursorBy(1, 0);
        }, this.wouldMoveIntoSoftTab = function (e, t, n) {
            var r = e.column,
                i = e.column + t;return n < 0 && (r = e.column - t, i = e.column), this.session.isTabStop(e) && this.doc.getLine(e.row).slice(r, i).split(" ").length - 1 == t;
        }, this.moveCursorLeft = function () {
            var e = this.lead.getPosition(),
                t;if (t = this.session.getFoldAt(e.row, e.column, -1)) this.moveCursorTo(t.start.row, t.start.column);else if (e.column === 0) e.row > 0 && this.moveCursorTo(e.row - 1, this.doc.getLine(e.row - 1).length);else {
                var n = this.session.getTabSize();this.wouldMoveIntoSoftTab(e, n, -1) && !this.session.getNavigateWithinSoftTabs() ? this.moveCursorBy(0, -n) : this.moveCursorBy(0, -1);
            }
        }, this.moveCursorRight = function () {
            var e = this.lead.getPosition(),
                t;if (t = this.session.getFoldAt(e.row, e.column, 1)) this.moveCursorTo(t.end.row, t.end.column);else if (this.lead.column == this.doc.getLine(this.lead.row).length) this.lead.row < this.doc.getLength() - 1 && this.moveCursorTo(this.lead.row + 1, 0);else {
                var n = this.session.getTabSize(),
                    e = this.lead;this.wouldMoveIntoSoftTab(e, n, 1) && !this.session.getNavigateWithinSoftTabs() ? this.moveCursorBy(0, n) : this.moveCursorBy(0, 1);
            }
        }, this.moveCursorLineStart = function () {
            var e = this.lead.row,
                t = this.lead.column,
                n = this.session.documentToScreenRow(e, t),
                r = this.session.screenToDocumentPosition(n, 0),
                i = this.session.getDisplayLine(e, null, r.row, r.column),
                s = i.match(/^\s*/);s[0].length != t && !this.session.$useEmacsStyleLineStart && (r.column += s[0].length), this.moveCursorToPosition(r);
        }, this.moveCursorLineEnd = function () {
            var e = this.lead,
                t = this.session.getDocumentLastRowColumnPosition(e.row, e.column);if (this.lead.column == t.column) {
                var n = this.session.getLine(t.row);if (t.column == n.length) {
                    var r = n.search(/\s+$/);r > 0 && (t.column = r);
                }
            }this.moveCursorTo(t.row, t.column);
        }, this.moveCursorFileEnd = function () {
            var e = this.doc.getLength() - 1,
                t = this.doc.getLine(e).length;this.moveCursorTo(e, t);
        }, this.moveCursorFileStart = function () {
            this.moveCursorTo(0, 0);
        }, this.moveCursorLongWordRight = function () {
            var e = this.lead.row,
                t = this.lead.column,
                n = this.doc.getLine(e),
                r = n.substring(t);this.session.nonTokenRe.lastIndex = 0, this.session.tokenRe.lastIndex = 0;var i = this.session.getFoldAt(e, t, 1);if (i) {
                this.moveCursorTo(i.end.row, i.end.column);return;
            }this.session.nonTokenRe.exec(r) && (t += this.session.nonTokenRe.lastIndex, this.session.nonTokenRe.lastIndex = 0, r = n.substring(t));if (t >= n.length) {
                this.moveCursorTo(e, n.length), this.moveCursorRight(), e < this.doc.getLength() - 1 && this.moveCursorWordRight();return;
            }this.session.tokenRe.exec(r) && (t += this.session.tokenRe.lastIndex, this.session.tokenRe.lastIndex = 0), this.moveCursorTo(e, t);
        }, this.moveCursorLongWordLeft = function () {
            var e = this.lead.row,
                t = this.lead.column,
                n;if (n = this.session.getFoldAt(e, t, -1)) {
                this.moveCursorTo(n.start.row, n.start.column);return;
            }var r = this.session.getFoldStringAt(e, t, -1);r == null && (r = this.doc.getLine(e).substring(0, t));var s = i.stringReverse(r);this.session.nonTokenRe.lastIndex = 0, this.session.tokenRe.lastIndex = 0, this.session.nonTokenRe.exec(s) && (t -= this.session.nonTokenRe.lastIndex, s = s.slice(this.session.nonTokenRe.lastIndex), this.session.nonTokenRe.lastIndex = 0);if (t <= 0) {
                this.moveCursorTo(e, 0), this.moveCursorLeft(), e > 0 && this.moveCursorWordLeft();return;
            }this.session.tokenRe.exec(s) && (t -= this.session.tokenRe.lastIndex, this.session.tokenRe.lastIndex = 0), this.moveCursorTo(e, t);
        }, this.$shortWordEndIndex = function (e) {
            var t = 0,
                n,
                r = /\s/,
                i = this.session.tokenRe;i.lastIndex = 0;if (this.session.tokenRe.exec(e)) t = this.session.tokenRe.lastIndex;else {
                while ((n = e[t]) && r.test(n)) {
                    t++;
                }if (t < 1) {
                    i.lastIndex = 0;while ((n = e[t]) && !i.test(n)) {
                        i.lastIndex = 0, t++;if (r.test(n)) {
                            if (t > 2) {
                                t--;break;
                            }while ((n = e[t]) && r.test(n)) {
                                t++;
                            }if (t > 2) break;
                        }
                    }
                }
            }return i.lastIndex = 0, t;
        }, this.moveCursorShortWordRight = function () {
            var e = this.lead.row,
                t = this.lead.column,
                n = this.doc.getLine(e),
                r = n.substring(t),
                i = this.session.getFoldAt(e, t, 1);if (i) return this.moveCursorTo(i.end.row, i.end.column);if (t == n.length) {
                var s = this.doc.getLength();do {
                    e++, r = this.doc.getLine(e);
                } while (e < s && /^\s*$/.test(r));/^\s+/.test(r) || (r = ""), t = 0;
            }var o = this.$shortWordEndIndex(r);this.moveCursorTo(e, t + o);
        }, this.moveCursorShortWordLeft = function () {
            var e = this.lead.row,
                t = this.lead.column,
                n;if (n = this.session.getFoldAt(e, t, -1)) return this.moveCursorTo(n.start.row, n.start.column);var r = this.session.getLine(e).substring(0, t);if (t === 0) {
                do {
                    e--, r = this.doc.getLine(e);
                } while (e > 0 && /^\s*$/.test(r));t = r.length, /\s+$/.test(r) || (r = "");
            }var s = i.stringReverse(r),
                o = this.$shortWordEndIndex(s);return this.moveCursorTo(e, t - o);
        }, this.moveCursorWordRight = function () {
            this.session.$selectLongWords ? this.moveCursorLongWordRight() : this.moveCursorShortWordRight();
        }, this.moveCursorWordLeft = function () {
            this.session.$selectLongWords ? this.moveCursorLongWordLeft() : this.moveCursorShortWordLeft();
        }, this.moveCursorBy = function (e, t) {
            var n = this.session.documentToScreenPosition(this.lead.row, this.lead.column),
                r;t === 0 && (e !== 0 && (this.session.$bidiHandler.isBidiRow(n.row, this.lead.row) ? (r = this.session.$bidiHandler.getPosLeft(n.column), n.column = Math.round(r / this.session.$bidiHandler.charWidths[0])) : r = n.column * this.session.$bidiHandler.charWidths[0]), this.$desiredColumn ? n.column = this.$desiredColumn : this.$desiredColumn = n.column);if (e != 0 && this.session.lineWidgets && this.session.lineWidgets[this.lead.row]) {
                var i = this.session.lineWidgets[this.lead.row];e < 0 ? e -= i.rowsAbove || 0 : e > 0 && (e += i.rowCount - (i.rowsAbove || 0));
            }var s = this.session.screenToDocumentPosition(n.row + e, n.column, r);e !== 0 && t === 0 && s.row === this.lead.row && s.column === this.lead.column, this.moveCursorTo(s.row, s.column + t, t === 0);
        }, this.moveCursorToPosition = function (e) {
            this.moveCursorTo(e.row, e.column);
        }, this.moveCursorTo = function (e, t, n) {
            var r = this.session.getFoldAt(e, t, 1);r && (e = r.start.row, t = r.start.column), this.$keepDesiredColumnOnChange = !0;var i = this.session.getLine(e);/[\uDC00-\uDFFF]/.test(i.charAt(t)) && i.charAt(t - 1) && (this.lead.row == e && this.lead.column == t + 1 ? t -= 1 : t += 1), this.lead.setPosition(e, t), this.$keepDesiredColumnOnChange = !1, n || (this.$desiredColumn = null);
        }, this.moveCursorToScreen = function (e, t, n) {
            var r = this.session.screenToDocumentPosition(e, t);this.moveCursorTo(r.row, r.column, n);
        }, this.detach = function () {
            this.lead.detach(), this.anchor.detach(), this.session = this.doc = null;
        }, this.fromOrientedRange = function (e) {
            this.setSelectionRange(e, e.cursor == e.start), this.$desiredColumn = e.desiredColumn || this.$desiredColumn;
        }, this.toOrientedRange = function (e) {
            var t = this.getRange();return e ? (e.start.column = t.start.column, e.start.row = t.start.row, e.end.column = t.end.column, e.end.row = t.end.row) : e = t, e.cursor = this.isBackwards() ? e.start : e.end, e.desiredColumn = this.$desiredColumn, e;
        }, this.getRangeOfMovements = function (e) {
            var t = this.getCursor();try {
                e(this);var n = this.getCursor();return o.fromPoints(t, n);
            } catch (r) {
                return o.fromPoints(t, t);
            } finally {
                this.moveCursorToPosition(t);
            }
        }, this.toJSON = function () {
            if (this.rangeCount) var e = this.ranges.map(function (e) {
                var t = e.clone();return t.isBackwards = e.cursor == e.start, t;
            });else {
                var e = this.getRange();e.isBackwards = this.isBackwards();
            }return e;
        }, this.fromJSON = function (e) {
            if (e.start == undefined) {
                if (this.rangeList && e.length > 1) {
                    this.toSingleRange(e[0]);for (var t = e.length; t--;) {
                        var n = o.fromPoints(e[t].start, e[t].end);e[t].isBackwards && (n.cursor = n.start), this.addRange(n, !0);
                    }return;
                }e = e[0];
            }this.rangeList && this.toSingleRange(e), this.setSelectionRange(e, e.isBackwards);
        }, this.isEqual = function (e) {
            if ((e.length || this.rangeCount) && e.length != this.rangeCount) return !1;if (!e.length || !this.ranges) return this.getRange().isEqual(e);for (var t = this.ranges.length; t--;) {
                if (!this.ranges[t].isEqual(e[t])) return !1;
            }return !0;
        };
    }).call(u.prototype), t.Selection = u;
}), ace.define("ace/tokenizer", ["require", "exports", "module", "ace/config"], function (e, t, n) {
    "use strict";
    var r = e("./config"),
        i = 2e3,
        s = function s(e) {
        this.states = e, this.regExps = {}, this.matchMappings = {};for (var t in this.states) {
            var n = this.states[t],
                r = [],
                i = 0,
                s = this.matchMappings[t] = { defaultToken: "text" },
                o = "g",
                u = [];for (var a = 0; a < n.length; a++) {
                var f = n[a];f.defaultToken && (s.defaultToken = f.defaultToken), f.caseInsensitive && (o = "gi");if (f.regex == null) continue;f.regex instanceof RegExp && (f.regex = f.regex.toString().slice(1, -1));var l = f.regex,
                    c = new RegExp("(?:(" + l + ")|(.))").exec("a").length - 2;Array.isArray(f.token) ? f.token.length == 1 || c == 1 ? f.token = f.token[0] : c - 1 != f.token.length ? (this.reportError("number of classes and regexp groups doesn't match", { rule: f, groupCount: c - 1 }), f.token = f.token[0]) : (f.tokenArray = f.token, f.token = null, f.onMatch = this.$arrayTokens) : typeof f.token == "function" && !f.onMatch && (c > 1 ? f.onMatch = this.$applyToken : f.onMatch = f.token), c > 1 && (/\\\d/.test(f.regex) ? l = f.regex.replace(/\\([0-9]+)/g, function (e, t) {
                    return "\\" + (parseInt(t, 10) + i + 1);
                }) : (c = 1, l = this.removeCapturingGroups(f.regex)), !f.splitRegex && typeof f.token != "string" && u.push(f)), s[i] = a, i += c, r.push(l), f.onMatch || (f.onMatch = null);
            }r.length || (s[0] = 0, r.push("$")), u.forEach(function (e) {
                e.splitRegex = this.createSplitterRegexp(e.regex, o);
            }, this), this.regExps[t] = new RegExp("(" + r.join(")|(") + ")|($)", o);
        }
    };(function () {
        this.$setMaxTokenCount = function (e) {
            i = e | 0;
        }, this.$applyToken = function (e) {
            var t = this.splitRegex.exec(e).slice(1),
                n = this.token.apply(this, t);if (typeof n == "string") return [{ type: n, value: e }];var r = [];for (var i = 0, s = n.length; i < s; i++) {
                t[i] && (r[r.length] = { type: n[i], value: t[i] });
            }return r;
        }, this.$arrayTokens = function (e) {
            if (!e) return [];var t = this.splitRegex.exec(e);if (!t) return "text";var n = [],
                r = this.tokenArray;for (var i = 0, s = r.length; i < s; i++) {
                t[i + 1] && (n[n.length] = { type: r[i], value: t[i + 1] });
            }return n;
        }, this.removeCapturingGroups = function (e) {
            var t = e.replace(/\\.|\[(?:\\.|[^\\\]])*|\(\?[:=!]|(\()/g, function (e, t) {
                return t ? "(?:" : e;
            });return t;
        }, this.createSplitterRegexp = function (e, t) {
            if (e.indexOf("(?=") != -1) {
                var n = 0,
                    r = !1,
                    i = {};e.replace(/(\\.)|(\((?:\?[=!])?)|(\))|([\[\]])/g, function (e, t, s, o, u, a) {
                    return r ? r = u != "]" : u ? r = !0 : o ? (n == i.stack && (i.end = a + 1, i.stack = -1), n--) : s && (n++, s.length != 1 && (i.stack = n, i.start = a)), e;
                }), i.end != null && /^\)*$/.test(e.substr(i.end)) && (e = e.substring(0, i.start) + e.substr(i.end));
            }return e.charAt(0) != "^" && (e = "^" + e), e.charAt(e.length - 1) != "$" && (e += "$"), new RegExp(e, (t || "").replace("g", ""));
        }, this.getLineTokens = function (e, t) {
            if (t && typeof t != "string") {
                var n = t.slice(0);t = n[0], t === "#tmp" && (n.shift(), t = n.shift());
            } else var n = [];var r = t || "start",
                s = this.states[r];s || (r = "start", s = this.states[r]);var o = this.matchMappings[r],
                u = this.regExps[r];u.lastIndex = 0;var a,
                f = [],
                l = 0,
                c = 0,
                h = { type: null, value: "" };while (a = u.exec(e)) {
                var p = o.defaultToken,
                    d = null,
                    v = a[0],
                    m = u.lastIndex;if (m - v.length > l) {
                    var g = e.substring(l, m - v.length);h.type == p ? h.value += g : (h.type && f.push(h), h = { type: p, value: g });
                }for (var y = 0; y < a.length - 2; y++) {
                    if (a[y + 1] === undefined) continue;d = s[o[y]], d.onMatch ? p = d.onMatch(v, r, n, e) : p = d.token, d.next && (typeof d.next == "string" ? r = d.next : r = d.next(r, n), s = this.states[r], s || (this.reportError("state doesn't exist", r), r = "start", s = this.states[r]), o = this.matchMappings[r], l = m, u = this.regExps[r], u.lastIndex = m), d.consumeLineEnd && (l = m);break;
                }if (v) if (typeof p == "string") !!d && d.merge === !1 || h.type !== p ? (h.type && f.push(h), h = { type: p, value: v }) : h.value += v;else if (p) {
                    h.type && f.push(h), h = { type: null, value: "" };for (var y = 0; y < p.length; y++) {
                        f.push(p[y]);
                    }
                }if (l == e.length) break;l = m;if (c++ > i) {
                    c > 2 * e.length && this.reportError("infinite loop with in ace tokenizer", { startState: t, line: e });while (l < e.length) {
                        h.type && f.push(h), h = { value: e.substring(l, l += 500), type: "overflow" };
                    }r = "start", n = [];break;
                }
            }return h.type && f.push(h), n.length > 1 && n[0] !== r && n.unshift("#tmp", r), { tokens: f, state: n.length ? n : r };
        }, this.reportError = r.reportError;
    }).call(s.prototype), t.Tokenizer = s;
}), ace.define("ace/mode/text_highlight_rules", ["require", "exports", "module", "ace/lib/lang"], function (e, t, n) {
    "use strict";
    var r = e("../lib/lang"),
        i = function i() {
        this.$rules = { start: [{ token: "empty_line", regex: "^$" }, { defaultToken: "text" }] };
    };(function () {
        this.addRules = function (e, t) {
            if (!t) {
                for (var n in e) {
                    this.$rules[n] = e[n];
                }return;
            }for (var n in e) {
                var r = e[n];for (var i = 0; i < r.length; i++) {
                    var s = r[i];if (s.next || s.onMatch) typeof s.next == "string" && s.next.indexOf(t) !== 0 && (s.next = t + s.next), s.nextState && s.nextState.indexOf(t) !== 0 && (s.nextState = t + s.nextState);
                }this.$rules[t + n] = r;
            }
        }, this.getRules = function () {
            return this.$rules;
        }, this.embedRules = function (e, t, n, i, s) {
            var o = typeof e == "function" ? new e().getRules() : e;if (i) for (var u = 0; u < i.length; u++) {
                i[u] = t + i[u];
            } else {
                i = [];for (var a in o) {
                    i.push(t + a);
                }
            }this.addRules(o, t);if (n) {
                var f = Array.prototype[s ? "push" : "unshift"];for (var u = 0; u < i.length; u++) {
                    f.apply(this.$rules[i[u]], r.deepCopy(n));
                }
            }this.$embeds || (this.$embeds = []), this.$embeds.push(t);
        }, this.getEmbeds = function () {
            return this.$embeds;
        };var e = function e(_e, t) {
            return (_e != "start" || t.length) && t.unshift(this.nextState, _e), this.nextState;
        },
            t = function t(e, _t) {
            return _t.shift(), _t.shift() || "start";
        };this.normalizeRules = function () {
            function i(s) {
                var o = r[s];o.processed = !0;for (var u = 0; u < o.length; u++) {
                    var a = o[u],
                        f = null;Array.isArray(a) && (f = a, a = {}), !a.regex && a.start && (a.regex = a.start, a.next || (a.next = []), a.next.push({ defaultToken: a.token }, { token: a.token + ".end", regex: a.end || a.start, next: "pop" }), a.token = a.token + ".start", a.push = !0);var l = a.next || a.push;if (l && Array.isArray(l)) {
                        var c = a.stateName;c || (c = a.token, typeof c != "string" && (c = c[0] || ""), r[c] && (c += n++)), r[c] = l, a.next = c, i(c);
                    } else l == "pop" && (a.next = t);a.push && (a.nextState = a.next || a.push, a.next = e, delete a.push);if (a.rules) for (var h in a.rules) {
                        r[h] ? r[h].push && r[h].push.apply(r[h], a.rules[h]) : r[h] = a.rules[h];
                    }var p = typeof a == "string" ? a : a.include;p && (Array.isArray(p) ? f = p.map(function (e) {
                        return r[e];
                    }) : f = r[p]);if (f) {
                        var d = [u, 1].concat(f);a.noEscape && (d = d.filter(function (e) {
                            return !e.next;
                        })), o.splice.apply(o, d), u--;
                    }a.keywordMap && (a.token = this.createKeywordMapper(a.keywordMap, a.defaultToken || "text", a.caseInsensitive), delete a.defaultToken);
                }
            }var n = 0,
                r = this.$rules;Object.keys(r).forEach(i, this);
        }, this.createKeywordMapper = function (e, t, n, r) {
            var i = Object.create(null);return Object.keys(e).forEach(function (t) {
                var s = e[t];n && (s = s.toLowerCase());var o = s.split(r || "|");for (var u = o.length; u--;) {
                    i[o[u]] = t;
                }
            }), Object.getPrototypeOf(i) && (i.__proto__ = null), this.$keywordList = Object.keys(i), e = null, n ? function (e) {
                return i[e.toLowerCase()] || t;
            } : function (e) {
                return i[e] || t;
            };
        }, this.getKeywords = function () {
            return this.$keywords;
        };
    }).call(i.prototype), t.TextHighlightRules = i;
}), ace.define("ace/mode/behaviour", ["require", "exports", "module"], function (e, t, n) {
    "use strict";
    var r = function r() {
        this.$behaviours = {};
    };(function () {
        this.add = function (e, t, n) {
            switch (undefined) {case this.$behaviours:
                    this.$behaviours = {};case this.$behaviours[e]:
                    this.$behaviours[e] = {};}this.$behaviours[e][t] = n;
        }, this.addBehaviours = function (e) {
            for (var t in e) {
                for (var n in e[t]) {
                    this.add(t, n, e[t][n]);
                }
            }
        }, this.remove = function (e) {
            this.$behaviours && this.$behaviours[e] && delete this.$behaviours[e];
        }, this.inherit = function (e, t) {
            if (typeof e == "function") var n = new e().getBehaviours(t);else var n = e.getBehaviours(t);this.addBehaviours(n);
        }, this.getBehaviours = function (e) {
            if (!e) return this.$behaviours;var t = {};for (var n = 0; n < e.length; n++) {
                this.$behaviours[e[n]] && (t[e[n]] = this.$behaviours[e[n]]);
            }return t;
        };
    }).call(r.prototype), t.Behaviour = r;
}), ace.define("ace/token_iterator", ["require", "exports", "module", "ace/range"], function (e, t, n) {
    "use strict";
    var r = e("./range").Range,
        i = function i(e, t, n) {
        this.$session = e, this.$row = t, this.$rowTokens = e.getTokens(t);var r = e.getTokenAt(t, n);this.$tokenIndex = r ? r.index : -1;
    };(function () {
        this.stepBackward = function () {
            this.$tokenIndex -= 1;while (this.$tokenIndex < 0) {
                this.$row -= 1;if (this.$row < 0) return this.$row = 0, null;this.$rowTokens = this.$session.getTokens(this.$row), this.$tokenIndex = this.$rowTokens.length - 1;
            }return this.$rowTokens[this.$tokenIndex];
        }, this.stepForward = function () {
            this.$tokenIndex += 1;var e;while (this.$tokenIndex >= this.$rowTokens.length) {
                this.$row += 1, e || (e = this.$session.getLength());if (this.$row >= e) return this.$row = e - 1, null;this.$rowTokens = this.$session.getTokens(this.$row), this.$tokenIndex = 0;
            }return this.$rowTokens[this.$tokenIndex];
        }, this.getCurrentToken = function () {
            return this.$rowTokens[this.$tokenIndex];
        }, this.getCurrentTokenRow = function () {
            return this.$row;
        }, this.getCurrentTokenColumn = function () {
            var e = this.$rowTokens,
                t = this.$tokenIndex,
                n = e[t].start;if (n !== undefined) return n;n = 0;while (t > 0) {
                t -= 1, n += e[t].value.length;
            }return n;
        }, this.getCurrentTokenPosition = function () {
            return { row: this.$row, column: this.getCurrentTokenColumn() };
        }, this.getCurrentTokenRange = function () {
            var e = this.$rowTokens[this.$tokenIndex],
                t = this.getCurrentTokenColumn();return new r(this.$row, t, this.$row, t + e.value.length);
        };
    }).call(i.prototype), t.TokenIterator = i;
}), ace.define("ace/mode/behaviour/cstyle", ["require", "exports", "module", "ace/lib/oop", "ace/mode/behaviour", "ace/token_iterator", "ace/lib/lang"], function (e, t, n) {
    "use strict";
    var r = e("../../lib/oop"),
        i = e("../behaviour").Behaviour,
        s = e("../../token_iterator").TokenIterator,
        o = e("../../lib/lang"),
        u = ["text", "paren.rparen", "rparen", "paren", "punctuation.operator"],
        a = ["text", "paren.rparen", "rparen", "paren", "punctuation.operator", "comment"],
        f,
        l = {},
        c = { '"': '"', "'": "'" },
        h = function h(e) {
        var t = -1;e.multiSelect && (t = e.selection.index, l.rangeCount != e.multiSelect.rangeCount && (l = { rangeCount: e.multiSelect.rangeCount }));if (l[t]) return f = l[t];f = l[t] = { autoInsertedBrackets: 0, autoInsertedRow: -1, autoInsertedLineEnd: "", maybeInsertedBrackets: 0, maybeInsertedRow: -1, maybeInsertedLineStart: "", maybeInsertedLineEnd: "" };
    },
        p = function p(e, t, n, r) {
        var i = e.end.row - e.start.row;return { text: n + t + r, selection: [0, e.start.column + 1, i, e.end.column + (i ? 0 : 1)] };
    },
        d = function d(e) {
        this.add("braces", "insertion", function (t, n, r, i, s) {
            var u = r.getCursorPosition(),
                a = i.doc.getLine(u.row);if (s == "{") {
                h(r);var l = r.getSelectionRange(),
                    c = i.doc.getTextRange(l);if (c !== "" && c !== "{" && r.getWrapBehavioursEnabled()) return p(l, c, "{", "}");if (d.isSaneInsertion(r, i)) return (/[\]\}\)]/.test(a[u.column]) || r.inMultiSelectMode || e && e.braces ? (d.recordAutoInsert(r, i, "}"), { text: "{}", selection: [1, 1] }) : (d.recordMaybeInsert(r, i, "{"), { text: "{", selection: [1, 1] })
                );
            } else if (s == "}") {
                h(r);var v = a.substring(u.column, u.column + 1);if (v == "}") {
                    var m = i.$findOpeningBracket("}", { column: u.column + 1, row: u.row });if (m !== null && d.isAutoInsertedClosing(u, a, s)) return d.popAutoInsertedClosing(), { text: "", selection: [1, 1] };
                }
            } else {
                if (s == "\n" || s == "\r\n") {
                    h(r);var g = "";d.isMaybeInsertedClosing(u, a) && (g = o.stringRepeat("}", f.maybeInsertedBrackets), d.clearMaybeInsertedClosing());var v = a.substring(u.column, u.column + 1);if (v === "}") {
                        var y = i.findMatchingBracket({ row: u.row, column: u.column + 1 }, "}");if (!y) return null;var b = this.$getIndent(i.getLine(y.row));
                    } else {
                        if (!g) {
                            d.clearMaybeInsertedClosing();return;
                        }var b = this.$getIndent(a);
                    }var w = b + i.getTabString();return { text: "\n" + w + "\n" + b + g, selection: [1, w.length, 1, w.length] };
                }d.clearMaybeInsertedClosing();
            }
        }), this.add("braces", "deletion", function (e, t, n, r, i) {
            var s = r.doc.getTextRange(i);if (!i.isMultiLine() && s == "{") {
                h(n);var o = r.doc.getLine(i.start.row),
                    u = o.substring(i.end.column, i.end.column + 1);if (u == "}") return i.end.column++, i;f.maybeInsertedBrackets--;
            }
        }), this.add("parens", "insertion", function (e, t, n, r, i) {
            if (i == "(") {
                h(n);var s = n.getSelectionRange(),
                    o = r.doc.getTextRange(s);if (o !== "" && n.getWrapBehavioursEnabled()) return p(s, o, "(", ")");if (d.isSaneInsertion(n, r)) return d.recordAutoInsert(n, r, ")"), { text: "()", selection: [1, 1] };
            } else if (i == ")") {
                h(n);var u = n.getCursorPosition(),
                    a = r.doc.getLine(u.row),
                    f = a.substring(u.column, u.column + 1);if (f == ")") {
                    var l = r.$findOpeningBracket(")", { column: u.column + 1, row: u.row });if (l !== null && d.isAutoInsertedClosing(u, a, i)) return d.popAutoInsertedClosing(), { text: "", selection: [1, 1] };
                }
            }
        }), this.add("parens", "deletion", function (e, t, n, r, i) {
            var s = r.doc.getTextRange(i);if (!i.isMultiLine() && s == "(") {
                h(n);var o = r.doc.getLine(i.start.row),
                    u = o.substring(i.start.column + 1, i.start.column + 2);if (u == ")") return i.end.column++, i;
            }
        }), this.add("brackets", "insertion", function (e, t, n, r, i) {
            if (i == "[") {
                h(n);var s = n.getSelectionRange(),
                    o = r.doc.getTextRange(s);if (o !== "" && n.getWrapBehavioursEnabled()) return p(s, o, "[", "]");if (d.isSaneInsertion(n, r)) return d.recordAutoInsert(n, r, "]"), { text: "[]", selection: [1, 1] };
            } else if (i == "]") {
                h(n);var u = n.getCursorPosition(),
                    a = r.doc.getLine(u.row),
                    f = a.substring(u.column, u.column + 1);if (f == "]") {
                    var l = r.$findOpeningBracket("]", { column: u.column + 1, row: u.row });if (l !== null && d.isAutoInsertedClosing(u, a, i)) return d.popAutoInsertedClosing(), { text: "", selection: [1, 1] };
                }
            }
        }), this.add("brackets", "deletion", function (e, t, n, r, i) {
            var s = r.doc.getTextRange(i);if (!i.isMultiLine() && s == "[") {
                h(n);var o = r.doc.getLine(i.start.row),
                    u = o.substring(i.start.column + 1, i.start.column + 2);if (u == "]") return i.end.column++, i;
            }
        }), this.add("string_dquotes", "insertion", function (e, t, n, r, i) {
            var s = r.$mode.$quotes || c;if (i.length == 1 && s[i]) {
                if (this.lineCommentStart && this.lineCommentStart.indexOf(i) != -1) return;h(n);var o = i,
                    u = n.getSelectionRange(),
                    a = r.doc.getTextRange(u);if (a !== "" && (a.length != 1 || !s[a]) && n.getWrapBehavioursEnabled()) return p(u, a, o, o);if (!a) {
                    var f = n.getCursorPosition(),
                        l = r.doc.getLine(f.row),
                        d = l.substring(f.column - 1, f.column),
                        v = l.substring(f.column, f.column + 1),
                        m = r.getTokenAt(f.row, f.column),
                        g = r.getTokenAt(f.row, f.column + 1);if (d == "\\" && m && /escape/.test(m.type)) return null;var y = m && /string|escape/.test(m.type),
                        b = !g || /string|escape/.test(g.type),
                        w;if (v == o) w = y !== b, w && /string\.end/.test(g.type) && (w = !1);else {
                        if (y && !b) return null;if (y && b) return null;var E = r.$mode.tokenRe;E.lastIndex = 0;var S = E.test(d);E.lastIndex = 0;var x = E.test(d);if (S || x) return null;if (v && !/[\s;,.})\]\\]/.test(v)) return null;var T = l[f.column - 2];if (!(d != o || T != o && !E.test(T))) return null;w = !0;
                    }return { text: w ? o + o : "", selection: [1, 1] };
                }
            }
        }), this.add("string_dquotes", "deletion", function (e, t, n, r, i) {
            var s = r.$mode.$quotes || c,
                o = r.doc.getTextRange(i);if (!i.isMultiLine() && s.hasOwnProperty(o)) {
                h(n);var u = r.doc.getLine(i.start.row),
                    a = u.substring(i.start.column + 1, i.start.column + 2);if (a == o) return i.end.column++, i;
            }
        });
    };d.isSaneInsertion = function (e, t) {
        var n = e.getCursorPosition(),
            r = new s(t, n.row, n.column);if (!this.$matchTokenType(r.getCurrentToken() || "text", u)) {
            if (/[)}\]]/.test(e.session.getLine(n.row)[n.column])) return !0;var i = new s(t, n.row, n.column + 1);if (!this.$matchTokenType(i.getCurrentToken() || "text", u)) return !1;
        }return r.stepForward(), r.getCurrentTokenRow() !== n.row || this.$matchTokenType(r.getCurrentToken() || "text", a);
    }, d.$matchTokenType = function (e, t) {
        return t.indexOf(e.type || e) > -1;
    }, d.recordAutoInsert = function (e, t, n) {
        var r = e.getCursorPosition(),
            i = t.doc.getLine(r.row);this.isAutoInsertedClosing(r, i, f.autoInsertedLineEnd[0]) || (f.autoInsertedBrackets = 0), f.autoInsertedRow = r.row, f.autoInsertedLineEnd = n + i.substr(r.column), f.autoInsertedBrackets++;
    }, d.recordMaybeInsert = function (e, t, n) {
        var r = e.getCursorPosition(),
            i = t.doc.getLine(r.row);this.isMaybeInsertedClosing(r, i) || (f.maybeInsertedBrackets = 0), f.maybeInsertedRow = r.row, f.maybeInsertedLineStart = i.substr(0, r.column) + n, f.maybeInsertedLineEnd = i.substr(r.column), f.maybeInsertedBrackets++;
    }, d.isAutoInsertedClosing = function (e, t, n) {
        return f.autoInsertedBrackets > 0 && e.row === f.autoInsertedRow && n === f.autoInsertedLineEnd[0] && t.substr(e.column) === f.autoInsertedLineEnd;
    }, d.isMaybeInsertedClosing = function (e, t) {
        return f.maybeInsertedBrackets > 0 && e.row === f.maybeInsertedRow && t.substr(e.column) === f.maybeInsertedLineEnd && t.substr(0, e.column) == f.maybeInsertedLineStart;
    }, d.popAutoInsertedClosing = function () {
        f.autoInsertedLineEnd = f.autoInsertedLineEnd.substr(1), f.autoInsertedBrackets--;
    }, d.clearMaybeInsertedClosing = function () {
        f && (f.maybeInsertedBrackets = 0, f.maybeInsertedRow = -1);
    }, r.inherits(d, i), t.CstyleBehaviour = d;
}), ace.define("ace/unicode", ["require", "exports", "module"], function (e, t, n) {
    "use strict";
    var r = [48, 9, 8, 25, 5, 0, 2, 25, 48, 0, 11, 0, 5, 0, 6, 22, 2, 30, 2, 457, 5, 11, 15, 4, 8, 0, 2, 0, 18, 116, 2, 1, 3, 3, 9, 0, 2, 2, 2, 0, 2, 19, 2, 82, 2, 138, 2, 4, 3, 155, 12, 37, 3, 0, 8, 38, 10, 44, 2, 0, 2, 1, 2, 1, 2, 0, 9, 26, 6, 2, 30, 10, 7, 61, 2, 9, 5, 101, 2, 7, 3, 9, 2, 18, 3, 0, 17, 58, 3, 100, 15, 53, 5, 0, 6, 45, 211, 57, 3, 18, 2, 5, 3, 11, 3, 9, 2, 1, 7, 6, 2, 2, 2, 7, 3, 1, 3, 21, 2, 6, 2, 0, 4, 3, 3, 8, 3, 1, 3, 3, 9, 0, 5, 1, 2, 4, 3, 11, 16, 2, 2, 5, 5, 1, 3, 21, 2, 6, 2, 1, 2, 1, 2, 1, 3, 0, 2, 4, 5, 1, 3, 2, 4, 0, 8, 3, 2, 0, 8, 15, 12, 2, 2, 8, 2, 2, 2, 21, 2, 6, 2, 1, 2, 4, 3, 9, 2, 2, 2, 2, 3, 0, 16, 3, 3, 9, 18, 2, 2, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 3, 8, 3, 1, 3, 2, 9, 1, 5, 1, 2, 4, 3, 9, 2, 0, 17, 1, 2, 5, 4, 2, 2, 3, 4, 1, 2, 0, 2, 1, 4, 1, 4, 2, 4, 11, 5, 4, 4, 2, 2, 3, 3, 0, 7, 0, 15, 9, 18, 2, 2, 7, 2, 2, 2, 22, 2, 9, 2, 4, 4, 7, 2, 2, 2, 3, 8, 1, 2, 1, 7, 3, 3, 9, 19, 1, 2, 7, 2, 2, 2, 22, 2, 9, 2, 4, 3, 8, 2, 2, 2, 3, 8, 1, 8, 0, 2, 3, 3, 9, 19, 1, 2, 7, 2, 2, 2, 22, 2, 15, 4, 7, 2, 2, 2, 3, 10, 0, 9, 3, 3, 9, 11, 5, 3, 1, 2, 17, 4, 23, 2, 8, 2, 0, 3, 6, 4, 0, 5, 5, 2, 0, 2, 7, 19, 1, 14, 57, 6, 14, 2, 9, 40, 1, 2, 0, 3, 1, 2, 0, 3, 0, 7, 3, 2, 6, 2, 2, 2, 0, 2, 0, 3, 1, 2, 12, 2, 2, 3, 4, 2, 0, 2, 5, 3, 9, 3, 1, 35, 0, 24, 1, 7, 9, 12, 0, 2, 0, 2, 0, 5, 9, 2, 35, 5, 19, 2, 5, 5, 7, 2, 35, 10, 0, 58, 73, 7, 77, 3, 37, 11, 42, 2, 0, 4, 328, 2, 3, 3, 6, 2, 0, 2, 3, 3, 40, 2, 3, 3, 32, 2, 3, 3, 6, 2, 0, 2, 3, 3, 14, 2, 56, 2, 3, 3, 66, 5, 0, 33, 15, 17, 84, 13, 619, 3, 16, 2, 25, 6, 74, 22, 12, 2, 6, 12, 20, 12, 19, 13, 12, 2, 2, 2, 1, 13, 51, 3, 29, 4, 0, 5, 1, 3, 9, 34, 2, 3, 9, 7, 87, 9, 42, 6, 69, 11, 28, 4, 11, 5, 11, 11, 39, 3, 4, 12, 43, 5, 25, 7, 10, 38, 27, 5, 62, 2, 28, 3, 10, 7, 9, 14, 0, 89, 75, 5, 9, 18, 8, 13, 42, 4, 11, 71, 55, 9, 9, 4, 48, 83, 2, 2, 30, 14, 230, 23, 280, 3, 5, 3, 37, 3, 5, 3, 7, 2, 0, 2, 0, 2, 0, 2, 30, 3, 52, 2, 6, 2, 0, 4, 2, 2, 6, 4, 3, 3, 5, 5, 12, 6, 2, 2, 6, 67, 1, 20, 0, 29, 0, 14, 0, 17, 4, 60, 12, 5, 0, 4, 11, 18, 0, 5, 0, 3, 9, 2, 0, 4, 4, 7, 0, 2, 0, 2, 0, 2, 3, 2, 10, 3, 3, 6, 4, 5, 0, 53, 1, 2684, 46, 2, 46, 2, 132, 7, 6, 15, 37, 11, 53, 10, 0, 17, 22, 10, 6, 2, 6, 2, 6, 2, 6, 2, 6, 2, 6, 2, 6, 2, 6, 2, 31, 48, 0, 470, 1, 36, 5, 2, 4, 6, 1, 5, 85, 3, 1, 3, 2, 2, 89, 2, 3, 6, 40, 4, 93, 18, 23, 57, 15, 513, 6581, 75, 20939, 53, 1164, 68, 45, 3, 268, 4, 27, 21, 31, 3, 13, 13, 1, 2, 24, 9, 69, 11, 1, 38, 8, 3, 102, 3, 1, 111, 44, 25, 51, 13, 68, 12, 9, 7, 23, 4, 0, 5, 45, 3, 35, 13, 28, 4, 64, 15, 10, 39, 54, 10, 13, 3, 9, 7, 22, 4, 1, 5, 66, 25, 2, 227, 42, 2, 1, 3, 9, 7, 11171, 13, 22, 5, 48, 8453, 301, 3, 61, 3, 105, 39, 6, 13, 4, 6, 11, 2, 12, 2, 4, 2, 0, 2, 1, 2, 1, 2, 107, 34, 362, 19, 63, 3, 53, 41, 11, 5, 15, 17, 6, 13, 1, 25, 2, 33, 4, 2, 134, 20, 9, 8, 25, 5, 0, 2, 25, 12, 88, 4, 5, 3, 5, 3, 5, 3, 2],
        i = 0,
        s = [];for (var o = 0; o < r.length; o += 2) {
        s.push(i += r[o]), r[o + 1] && s.push(45, i += r[o + 1]);
    }t.wordChars = String.fromCharCode.apply(null, s);
}), ace.define("ace/mode/text", ["require", "exports", "module", "ace/config", "ace/tokenizer", "ace/mode/text_highlight_rules", "ace/mode/behaviour/cstyle", "ace/unicode", "ace/lib/lang", "ace/token_iterator", "ace/range"], function (e, t, n) {
    "use strict";
    var r = e("../config"),
        i = e("../tokenizer").Tokenizer,
        s = e("./text_highlight_rules").TextHighlightRules,
        o = e("./behaviour/cstyle").CstyleBehaviour,
        u = e("../unicode"),
        a = e("../lib/lang"),
        f = e("../token_iterator").TokenIterator,
        l = e("../range").Range,
        c = function c() {
        this.HighlightRules = s;
    };(function () {
        this.$defaultBehaviour = new o(), this.tokenRe = new RegExp("^[" + u.wordChars + "\\$_]+", "g"), this.nonTokenRe = new RegExp("^(?:[^" + u.wordChars + "\\$_]|\\s])+", "g"), this.getTokenizer = function () {
            return this.$tokenizer || (this.$highlightRules = this.$highlightRules || new this.HighlightRules(this.$highlightRuleConfig), this.$tokenizer = new i(this.$highlightRules.getRules())), this.$tokenizer;
        }, this.lineCommentStart = "", this.blockComment = "", this.toggleCommentLines = function (e, t, n, r) {
            function w(e) {
                for (var t = n; t <= r; t++) {
                    e(i.getLine(t), t);
                }
            }var i = t.doc,
                s = !0,
                o = !0,
                u = Infinity,
                f = t.getTabSize(),
                l = !1;if (!this.lineCommentStart) {
                if (!this.blockComment) return !1;var c = this.blockComment.start,
                    h = this.blockComment.end,
                    p = new RegExp("^(\\s*)(?:" + a.escapeRegExp(c) + ")"),
                    d = new RegExp("(?:" + a.escapeRegExp(h) + ")\\s*$"),
                    v = function v(e, t) {
                    if (g(e, t)) return;if (!s || /\S/.test(e)) i.insertInLine({ row: t, column: e.length }, h), i.insertInLine({ row: t, column: u }, c);
                },
                    m = function m(e, t) {
                    var n;(n = e.match(d)) && i.removeInLine(t, e.length - n[0].length, e.length), (n = e.match(p)) && i.removeInLine(t, n[1].length, n[0].length);
                },
                    g = function g(e, n) {
                    if (p.test(e)) return !0;var r = t.getTokens(n);for (var i = 0; i < r.length; i++) {
                        if (r[i].type === "comment") return !0;
                    }
                };
            } else {
                if (Array.isArray(this.lineCommentStart)) var p = this.lineCommentStart.map(a.escapeRegExp).join("|"),
                    c = this.lineCommentStart[0];else var p = a.escapeRegExp(this.lineCommentStart),
                    c = this.lineCommentStart;p = new RegExp("^(\\s*)(?:" + p + ") ?"), l = t.getUseSoftTabs();var m = function m(e, t) {
                    var n = e.match(p);if (!n) return;var r = n[1].length,
                        s = n[0].length;!b(e, r, s) && n[0][s - 1] == " " && s--, i.removeInLine(t, r, s);
                },
                    y = c + " ",
                    v = function v(e, t) {
                    if (!s || /\S/.test(e)) b(e, u, u) ? i.insertInLine({ row: t, column: u }, y) : i.insertInLine({ row: t, column: u }, c);
                },
                    g = function g(e, t) {
                    return p.test(e);
                },
                    b = function b(e, t, n) {
                    var r = 0;while (t-- && e.charAt(t) == " ") {
                        r++;
                    }if (r % f != 0) return !1;var r = 0;while (e.charAt(n++) == " ") {
                        r++;
                    }return f > 2 ? r % f != f - 1 : r % f == 0;
                };
            }var E = Infinity;w(function (e, t) {
                var n = e.search(/\S/);n !== -1 ? (n < u && (u = n), o && !g(e, t) && (o = !1)) : E > e.length && (E = e.length);
            }), u == Infinity && (u = E, s = !1, o = !1), l && u % f != 0 && (u = Math.floor(u / f) * f), w(o ? m : v);
        }, this.toggleBlockComment = function (e, t, n, r) {
            var i = this.blockComment;if (!i) return;!i.start && i[0] && (i = i[0]);var s = new f(t, r.row, r.column),
                o = s.getCurrentToken(),
                u = t.selection,
                a = t.selection.toOrientedRange(),
                c,
                h;if (o && /comment/.test(o.type)) {
                var p, d;while (o && /comment/.test(o.type)) {
                    var v = o.value.indexOf(i.start);if (v != -1) {
                        var m = s.getCurrentTokenRow(),
                            g = s.getCurrentTokenColumn() + v;p = new l(m, g, m, g + i.start.length);break;
                    }o = s.stepBackward();
                }var s = new f(t, r.row, r.column),
                    o = s.getCurrentToken();while (o && /comment/.test(o.type)) {
                    var v = o.value.indexOf(i.end);if (v != -1) {
                        var m = s.getCurrentTokenRow(),
                            g = s.getCurrentTokenColumn() + v;d = new l(m, g, m, g + i.end.length);break;
                    }o = s.stepForward();
                }d && t.remove(d), p && (t.remove(p), c = p.start.row, h = -i.start.length);
            } else h = i.start.length, c = n.start.row, t.insert(n.end, i.end), t.insert(n.start, i.start);a.start.row == c && (a.start.column += h), a.end.row == c && (a.end.column += h), t.selection.fromOrientedRange(a);
        }, this.getNextLineIndent = function (e, t, n) {
            return this.$getIndent(t);
        }, this.checkOutdent = function (e, t, n) {
            return !1;
        }, this.autoOutdent = function (e, t, n) {}, this.$getIndent = function (e) {
            return e.match(/^\s*/)[0];
        }, this.createWorker = function (e) {
            return null;
        }, this.createModeDelegates = function (e) {
            this.$embeds = [], this.$modes = {};for (var t in e) {
                if (e[t]) {
                    var n = e[t],
                        i = n.prototype.$id,
                        s = r.$modes[i];s || (r.$modes[i] = s = new n()), r.$modes[t] || (r.$modes[t] = s), this.$embeds.push(t), this.$modes[t] = s;
                }
            }var o = ["toggleBlockComment", "toggleCommentLines", "getNextLineIndent", "checkOutdent", "autoOutdent", "transformAction", "getCompletions"];for (var t = 0; t < o.length; t++) {
                (function (e) {
                    var n = o[t],
                        r = e[n];e[o[t]] = function () {
                        return this.$delegator(n, arguments, r);
                    };
                })(this);
            }
        }, this.$delegator = function (e, t, n) {
            var r = t[0] || "start";if (typeof r != "string") {
                if (Array.isArray(r[2])) {
                    var i = r[2][r[2].length - 1],
                        s = this.$modes[i];if (s) return s[e].apply(s, [r[1]].concat([].slice.call(t, 1)));
                }r = r[0] || "start";
            }for (var o = 0; o < this.$embeds.length; o++) {
                if (!this.$modes[this.$embeds[o]]) continue;var u = r.split(this.$embeds[o]);if (!u[0] && u[1]) {
                    t[0] = u[1];var s = this.$modes[this.$embeds[o]];return s[e].apply(s, t);
                }
            }var a = n.apply(this, t);return n ? a : undefined;
        }, this.transformAction = function (e, t, n, r, i) {
            if (this.$behaviour) {
                var s = this.$behaviour.getBehaviours();for (var o in s) {
                    if (s[o][t]) {
                        var u = s[o][t].apply(this, arguments);if (u) return u;
                    }
                }
            }
        }, this.getKeywords = function (e) {
            if (!this.completionKeywords) {
                var t = this.$tokenizer.rules,
                    n = [];for (var r in t) {
                    var i = t[r];for (var s = 0, o = i.length; s < o; s++) {
                        if (typeof i[s].token == "string") /keyword|support|storage/.test(i[s].token) && n.push(i[s].regex);else if (_typeof(i[s].token) == "object") for (var u = 0, a = i[s].token.length; u < a; u++) {
                            if (/keyword|support|storage/.test(i[s].token[u])) {
                                var r = i[s].regex.match(/\(.+?\)/g)[u];n.push(r.substr(1, r.length - 2));
                            }
                        }
                    }
                }this.completionKeywords = n;
            }return e ? n.concat(this.$keywordList || []) : this.$keywordList;
        }, this.$createKeywordList = function () {
            return this.$highlightRules || this.getTokenizer(), this.$keywordList = this.$highlightRules.$keywordList || [];
        }, this.getCompletions = function (e, t, n, r) {
            var i = this.$keywordList || this.$createKeywordList();return i.map(function (e) {
                return { name: e, value: e, score: 0, meta: "keyword" };
            });
        }, this.$id = "ace/mode/text";
    }).call(c.prototype), t.Mode = c;
}), ace.define("ace/apply_delta", ["require", "exports", "module"], function (e, t, n) {
    "use strict";
    function r(e, t) {
        throw console.log("Invalid Delta:", e), "Invalid Delta: " + t;
    }function i(e, t) {
        return t.row >= 0 && t.row < e.length && t.column >= 0 && t.column <= e[t.row].length;
    }function s(e, t) {
        t.action != "insert" && t.action != "remove" && r(t, "delta.action must be 'insert' or 'remove'"), t.lines instanceof Array || r(t, "delta.lines must be an Array"), (!t.start || !t.end) && r(t, "delta.start/end must be an present");var n = t.start;i(e, t.start) || r(t, "delta.start must be contained in document");var s = t.end;t.action == "remove" && !i(e, s) && r(t, "delta.end must contained in document for 'remove' actions");var o = s.row - n.row,
            u = s.column - (o == 0 ? n.column : 0);(o != t.lines.length - 1 || t.lines[o].length != u) && r(t, "delta.range must match delta lines");
    }t.applyDelta = function (e, t, n) {
        var r = t.start.row,
            i = t.start.column,
            s = e[r] || "";switch (t.action) {case "insert":
                var o = t.lines;if (o.length === 1) e[r] = s.substring(0, i) + t.lines[0] + s.substring(i);else {
                    var u = [r, 1].concat(t.lines);e.splice.apply(e, u), e[r] = s.substring(0, i) + e[r], e[r + t.lines.length - 1] += s.substring(i);
                }break;case "remove":
                var a = t.end.column,
                    f = t.end.row;r === f ? e[r] = s.substring(0, i) + s.substring(a) : e.splice(r, f - r + 1, s.substring(0, i) + e[f].substring(a));}
    };
}), ace.define("ace/anchor", ["require", "exports", "module", "ace/lib/oop", "ace/lib/event_emitter"], function (e, t, n) {
    "use strict";
    var r = e("./lib/oop"),
        i = e("./lib/event_emitter").EventEmitter,
        s = t.Anchor = function (e, t, n) {
        this.$onChange = this.onChange.bind(this), this.attach(e), typeof n == "undefined" ? this.setPosition(t.row, t.column) : this.setPosition(t, n);
    };(function () {
        function e(e, t, n) {
            var r = n ? e.column <= t.column : e.column < t.column;return e.row < t.row || e.row == t.row && r;
        }function t(t, n, r) {
            var i = t.action == "insert",
                s = (i ? 1 : -1) * (t.end.row - t.start.row),
                o = (i ? 1 : -1) * (t.end.column - t.start.column),
                u = t.start,
                a = i ? u : t.end;return e(n, u, r) ? { row: n.row, column: n.column } : e(a, n, !r) ? { row: n.row + s, column: n.column + (n.row == a.row ? o : 0) } : { row: u.row, column: u.column };
        }r.implement(this, i), this.getPosition = function () {
            return this.$clipPositionToDocument(this.row, this.column);
        }, this.getDocument = function () {
            return this.document;
        }, this.$insertRight = !1, this.onChange = function (e) {
            if (e.start.row == e.end.row && e.start.row != this.row) return;if (e.start.row > this.row) return;var n = t(e, { row: this.row, column: this.column }, this.$insertRight);this.setPosition(n.row, n.column, !0);
        }, this.setPosition = function (e, t, n) {
            var r;n ? r = { row: e, column: t } : r = this.$clipPositionToDocument(e, t);if (this.row == r.row && this.column == r.column) return;var i = { row: this.row, column: this.column };this.row = r.row, this.column = r.column, this._signal("change", { old: i, value: r });
        }, this.detach = function () {
            this.document.removeEventListener("change", this.$onChange);
        }, this.attach = function (e) {
            this.document = e || this.document, this.document.on("change", this.$onChange);
        }, this.$clipPositionToDocument = function (e, t) {
            var n = {};return e >= this.document.getLength() ? (n.row = Math.max(0, this.document.getLength() - 1), n.column = this.document.getLine(n.row).length) : e < 0 ? (n.row = 0, n.column = 0) : (n.row = e, n.column = Math.min(this.document.getLine(n.row).length, Math.max(0, t))), t < 0 && (n.column = 0), n;
        };
    }).call(s.prototype);
}), ace.define("ace/document", ["require", "exports", "module", "ace/lib/oop", "ace/apply_delta", "ace/lib/event_emitter", "ace/range", "ace/anchor"], function (e, t, n) {
    "use strict";
    var r = e("./lib/oop"),
        i = e("./apply_delta").applyDelta,
        s = e("./lib/event_emitter").EventEmitter,
        o = e("./range").Range,
        u = e("./anchor").Anchor,
        a = function a(e) {
        this.$lines = [""], e.length === 0 ? this.$lines = [""] : Array.isArray(e) ? this.insertMergedLines({ row: 0, column: 0 }, e) : this.insert({ row: 0, column: 0 }, e);
    };(function () {
        r.implement(this, s), this.setValue = function (e) {
            var t = this.getLength() - 1;this.remove(new o(0, 0, t, this.getLine(t).length)), this.insert({ row: 0, column: 0 }, e);
        }, this.getValue = function () {
            return this.getAllLines().join(this.getNewLineCharacter());
        }, this.createAnchor = function (e, t) {
            return new u(this, e, t);
        }, "aaa".split(/a/).length === 0 ? this.$split = function (e) {
            return e.replace(/\r\n|\r/g, "\n").split("\n");
        } : this.$split = function (e) {
            return e.split(/\r\n|\r|\n/);
        }, this.$detectNewLine = function (e) {
            var t = e.match(/^.*?(\r\n|\r|\n)/m);this.$autoNewLine = t ? t[1] : "\n", this._signal("changeNewLineMode");
        }, this.getNewLineCharacter = function () {
            switch (this.$newLineMode) {case "windows":
                    return "\r\n";case "unix":
                    return "\n";default:
                    return this.$autoNewLine || "\n";}
        }, this.$autoNewLine = "", this.$newLineMode = "auto", this.setNewLineMode = function (e) {
            if (this.$newLineMode === e) return;this.$newLineMode = e, this._signal("changeNewLineMode");
        }, this.getNewLineMode = function () {
            return this.$newLineMode;
        }, this.isNewLine = function (e) {
            return e == "\r\n" || e == "\r" || e == "\n";
        }, this.getLine = function (e) {
            return this.$lines[e] || "";
        }, this.getLines = function (e, t) {
            return this.$lines.slice(e, t + 1);
        }, this.getAllLines = function () {
            return this.getLines(0, this.getLength());
        }, this.getLength = function () {
            return this.$lines.length;
        }, this.getTextRange = function (e) {
            return this.getLinesForRange(e).join(this.getNewLineCharacter());
        }, this.getLinesForRange = function (e) {
            var t;if (e.start.row === e.end.row) t = [this.getLine(e.start.row).substring(e.start.column, e.end.column)];else {
                t = this.getLines(e.start.row, e.end.row), t[0] = (t[0] || "").substring(e.start.column);var n = t.length - 1;e.end.row - e.start.row == n && (t[n] = t[n].substring(0, e.end.column));
            }return t;
        }, this.insertLines = function (e, t) {
            return console.warn("Use of document.insertLines is deprecated. Use the insertFullLines method instead."), this.insertFullLines(e, t);
        }, this.removeLines = function (e, t) {
            return console.warn("Use of document.removeLines is deprecated. Use the removeFullLines method instead."), this.removeFullLines(e, t);
        }, this.insertNewLine = function (e) {
            return console.warn("Use of document.insertNewLine is deprecated. Use insertMergedLines(position, ['', '']) instead."), this.insertMergedLines(e, ["", ""]);
        }, this.insert = function (e, t) {
            return this.getLength() <= 1 && this.$detectNewLine(t), this.insertMergedLines(e, this.$split(t));
        }, this.insertInLine = function (e, t) {
            var n = this.clippedPos(e.row, e.column),
                r = this.pos(e.row, e.column + t.length);return this.applyDelta({ start: n, end: r, action: "insert", lines: [t] }, !0), this.clonePos(r);
        }, this.clippedPos = function (e, t) {
            var n = this.getLength();e === undefined ? e = n : e < 0 ? e = 0 : e >= n && (e = n - 1, t = undefined);var r = this.getLine(e);return t == undefined && (t = r.length), t = Math.min(Math.max(t, 0), r.length), { row: e, column: t };
        }, this.clonePos = function (e) {
            return { row: e.row, column: e.column };
        }, this.pos = function (e, t) {
            return { row: e, column: t };
        }, this.$clipPosition = function (e) {
            var t = this.getLength();return e.row >= t ? (e.row = Math.max(0, t - 1), e.column = this.getLine(t - 1).length) : (e.row = Math.max(0, e.row), e.column = Math.min(Math.max(e.column, 0), this.getLine(e.row).length)), e;
        }, this.insertFullLines = function (e, t) {
            e = Math.min(Math.max(e, 0), this.getLength());var n = 0;e < this.getLength() ? (t = t.concat([""]), n = 0) : (t = [""].concat(t), e--, n = this.$lines[e].length), this.insertMergedLines({ row: e, column: n }, t);
        }, this.insertMergedLines = function (e, t) {
            var n = this.clippedPos(e.row, e.column),
                r = { row: n.row + t.length - 1, column: (t.length == 1 ? n.column : 0) + t[t.length - 1].length };return this.applyDelta({ start: n, end: r, action: "insert", lines: t }), this.clonePos(r);
        }, this.remove = function (e) {
            var t = this.clippedPos(e.start.row, e.start.column),
                n = this.clippedPos(e.end.row, e.end.column);return this.applyDelta({ start: t, end: n, action: "remove", lines: this.getLinesForRange({ start: t, end: n }) }), this.clonePos(t);
        }, this.removeInLine = function (e, t, n) {
            var r = this.clippedPos(e, t),
                i = this.clippedPos(e, n);return this.applyDelta({ start: r, end: i, action: "remove", lines: this.getLinesForRange({ start: r, end: i }) }, !0), this.clonePos(r);
        }, this.removeFullLines = function (e, t) {
            e = Math.min(Math.max(0, e), this.getLength() - 1), t = Math.min(Math.max(0, t), this.getLength() - 1);var n = t == this.getLength() - 1 && e > 0,
                r = t < this.getLength() - 1,
                i = n ? e - 1 : e,
                s = n ? this.getLine(i).length : 0,
                u = r ? t + 1 : t,
                a = r ? 0 : this.getLine(u).length,
                f = new o(i, s, u, a),
                l = this.$lines.slice(e, t + 1);return this.applyDelta({ start: f.start, end: f.end, action: "remove", lines: this.getLinesForRange(f) }), l;
        }, this.removeNewLine = function (e) {
            e < this.getLength() - 1 && e >= 0 && this.applyDelta({ start: this.pos(e, this.getLine(e).length), end: this.pos(e + 1, 0), action: "remove", lines: ["", ""] });
        }, this.replace = function (e, t) {
            e instanceof o || (e = o.fromPoints(e.start, e.end));if (t.length === 0 && e.isEmpty()) return e.start;if (t == this.getTextRange(e)) return e.end;this.remove(e);var n;return t ? n = this.insert(e.start, t) : n = e.start, n;
        }, this.applyDeltas = function (e) {
            for (var t = 0; t < e.length; t++) {
                this.applyDelta(e[t]);
            }
        }, this.revertDeltas = function (e) {
            for (var t = e.length - 1; t >= 0; t--) {
                this.revertDelta(e[t]);
            }
        }, this.applyDelta = function (e, t) {
            var n = e.action == "insert";if (n ? e.lines.length <= 1 && !e.lines[0] : !o.comparePoints(e.start, e.end)) return;n && e.lines.length > 2e4 ? this.$splitAndapplyLargeDelta(e, 2e4) : (i(this.$lines, e, t), this._signal("change", e));
        }, this.$splitAndapplyLargeDelta = function (e, t) {
            var n = e.lines,
                r = n.length - t + 1,
                i = e.start.row,
                s = e.start.column;for (var o = 0, u = 0; o < r; o = u) {
                u += t - 1;var a = n.slice(o, u);a.push(""), this.applyDelta({ start: this.pos(i + o, s), end: this.pos(i + u, s = 0), action: e.action, lines: a }, !0);
            }e.lines = n.slice(o), e.start.row = i + o, e.start.column = s, this.applyDelta(e, !0);
        }, this.revertDelta = function (e) {
            this.applyDelta({ start: this.clonePos(e.start), end: this.clonePos(e.end), action: e.action == "insert" ? "remove" : "insert", lines: e.lines.slice() });
        }, this.indexToPosition = function (e, t) {
            var n = this.$lines || this.getAllLines(),
                r = this.getNewLineCharacter().length;for (var i = t || 0, s = n.length; i < s; i++) {
                e -= n[i].length + r;if (e < 0) return { row: i, column: e + n[i].length + r };
            }return { row: s - 1, column: e + n[s - 1].length + r };
        }, this.positionToIndex = function (e, t) {
            var n = this.$lines || this.getAllLines(),
                r = this.getNewLineCharacter().length,
                i = 0,
                s = Math.min(e.row, n.length);for (var o = t || 0; o < s; ++o) {
                i += n[o].length + r;
            }return i + e.column;
        };
    }).call(a.prototype), t.Document = a;
}), ace.define("ace/background_tokenizer", ["require", "exports", "module", "ace/lib/oop", "ace/lib/event_emitter"], function (e, t, n) {
    "use strict";
    var r = e("./lib/oop"),
        i = e("./lib/event_emitter").EventEmitter,
        s = function s(e, t) {
        this.running = !1, this.lines = [], this.states = [], this.currentLine = 0, this.tokenizer = e;var n = this;this.$worker = function () {
            if (!n.running) return;var e = new Date(),
                t = n.currentLine,
                r = -1,
                i = n.doc,
                s = t;while (n.lines[t]) {
                t++;
            }var o = i.getLength(),
                u = 0;n.running = !1;while (t < o) {
                n.$tokenizeRow(t), r = t;do {
                    t++;
                } while (n.lines[t]);u++;if (u % 5 === 0 && new Date() - e > 20) {
                    n.running = setTimeout(n.$worker, 20);break;
                }
            }n.currentLine = t, r == -1 && (r = t), s <= r && n.fireUpdateEvent(s, r);
        };
    };(function () {
        r.implement(this, i), this.setTokenizer = function (e) {
            this.tokenizer = e, this.lines = [], this.states = [], this.start(0);
        }, this.setDocument = function (e) {
            this.doc = e, this.lines = [], this.states = [], this.stop();
        }, this.fireUpdateEvent = function (e, t) {
            var n = { first: e, last: t };this._signal("update", { data: n });
        }, this.start = function (e) {
            this.currentLine = Math.min(e || 0, this.currentLine, this.doc.getLength()), this.lines.splice(this.currentLine, this.lines.length), this.states.splice(this.currentLine, this.states.length), this.stop(), this.running = setTimeout(this.$worker, 700);
        }, this.scheduleStart = function () {
            this.running || (this.running = setTimeout(this.$worker, 700));
        }, this.$updateOnChange = function (e) {
            var t = e.start.row,
                n = e.end.row - t;if (n === 0) this.lines[t] = null;else if (e.action == "remove") this.lines.splice(t, n + 1, null), this.states.splice(t, n + 1, null);else {
                var r = Array(n + 1);r.unshift(t, 1), this.lines.splice.apply(this.lines, r), this.states.splice.apply(this.states, r);
            }this.currentLine = Math.min(t, this.currentLine, this.doc.getLength()), this.stop();
        }, this.stop = function () {
            this.running && clearTimeout(this.running), this.running = !1;
        }, this.getTokens = function (e) {
            return this.lines[e] || this.$tokenizeRow(e);
        }, this.getState = function (e) {
            return this.currentLine == e && this.$tokenizeRow(e), this.states[e] || "start";
        }, this.$tokenizeRow = function (e) {
            var t = this.doc.getLine(e),
                n = this.states[e - 1],
                r = this.tokenizer.getLineTokens(t, n, e);return this.states[e] + "" != r.state + "" ? (this.states[e] = r.state, this.lines[e + 1] = null, this.currentLine > e + 1 && (this.currentLine = e + 1)) : this.currentLine == e && (this.currentLine = e + 1), this.lines[e] = r.tokens;
        };
    }).call(s.prototype), t.BackgroundTokenizer = s;
}), ace.define("ace/search_highlight", ["require", "exports", "module", "ace/lib/lang", "ace/lib/oop", "ace/range"], function (e, t, n) {
    "use strict";
    var r = e("./lib/lang"),
        i = e("./lib/oop"),
        s = e("./range").Range,
        o = function o(e, t, n) {
        this.setRegexp(e), this.clazz = t, this.type = n || "text";
    };(function () {
        this.MAX_RANGES = 500, this.setRegexp = function (e) {
            if (this.regExp + "" == e + "") return;this.regExp = e, this.cache = [];
        }, this.update = function (e, t, n, i) {
            if (!this.regExp) return;var o = i.firstRow,
                u = i.lastRow;for (var a = o; a <= u; a++) {
                var f = this.cache[a];f == null && (f = r.getMatchOffsets(n.getLine(a), this.regExp), f.length > this.MAX_RANGES && (f = f.slice(0, this.MAX_RANGES)), f = f.map(function (e) {
                    return new s(a, e.offset, a, e.offset + e.length);
                }), this.cache[a] = f.length ? f : "");for (var l = f.length; l--;) {
                    t.drawSingleLineMarker(e, f[l].toScreenRange(n), this.clazz, i);
                }
            }
        };
    }).call(o.prototype), t.SearchHighlight = o;
}), ace.define("ace/edit_session/fold_line", ["require", "exports", "module", "ace/range"], function (e, t, n) {
    "use strict";
    function i(e, t) {
        this.foldData = e, Array.isArray(t) ? this.folds = t : t = this.folds = [t];var n = t[t.length - 1];this.range = new r(t[0].start.row, t[0].start.column, n.end.row, n.end.column), this.start = this.range.start, this.end = this.range.end, this.folds.forEach(function (e) {
            e.setFoldLine(this);
        }, this);
    }var r = e("../range").Range;(function () {
        this.shiftRow = function (e) {
            this.start.row += e, this.end.row += e, this.folds.forEach(function (t) {
                t.start.row += e, t.end.row += e;
            });
        }, this.addFold = function (e) {
            if (e.sameRow) {
                if (e.start.row < this.startRow || e.endRow > this.endRow) throw new Error("Can't add a fold to this FoldLine as it has no connection");this.folds.push(e), this.folds.sort(function (e, t) {
                    return -e.range.compareEnd(t.start.row, t.start.column);
                }), this.range.compareEnd(e.start.row, e.start.column) > 0 ? (this.end.row = e.end.row, this.end.column = e.end.column) : this.range.compareStart(e.end.row, e.end.column) < 0 && (this.start.row = e.start.row, this.start.column = e.start.column);
            } else if (e.start.row == this.end.row) this.folds.push(e), this.end.row = e.end.row, this.end.column = e.end.column;else {
                if (e.end.row != this.start.row) throw new Error("Trying to add fold to FoldRow that doesn't have a matching row");this.folds.unshift(e), this.start.row = e.start.row, this.start.column = e.start.column;
            }e.foldLine = this;
        }, this.containsRow = function (e) {
            return e >= this.start.row && e <= this.end.row;
        }, this.walk = function (e, t, n) {
            var r = 0,
                i = this.folds,
                s,
                o,
                u,
                a = !0;t == null && (t = this.end.row, n = this.end.column);for (var f = 0; f < i.length; f++) {
                s = i[f], o = s.range.compareStart(t, n);if (o == -1) {
                    e(null, t, n, r, a);return;
                }u = e(null, s.start.row, s.start.column, r, a), u = !u && e(s.placeholder, s.start.row, s.start.column, r);if (u || o === 0) return;a = !s.sameRow, r = s.end.column;
            }e(null, t, n, r, a);
        }, this.getNextFoldTo = function (e, t) {
            var n, r;for (var i = 0; i < this.folds.length; i++) {
                n = this.folds[i], r = n.range.compareEnd(e, t);if (r == -1) return { fold: n, kind: "after" };if (r === 0) return { fold: n, kind: "inside" };
            }return null;
        }, this.addRemoveChars = function (e, t, n) {
            var r = this.getNextFoldTo(e, t),
                i,
                s;if (r) {
                i = r.fold;if (r.kind == "inside" && i.start.column != t && i.start.row != e) window.console && window.console.log(e, t, i);else if (i.start.row == e) {
                    s = this.folds;var o = s.indexOf(i);o === 0 && (this.start.column += n);for (o; o < s.length; o++) {
                        i = s[o], i.start.column += n;if (!i.sameRow) return;i.end.column += n;
                    }this.end.column += n;
                }
            }
        }, this.split = function (e, t) {
            var n = this.getNextFoldTo(e, t);if (!n || n.kind == "inside") return null;var r = n.fold,
                s = this.folds,
                o = this.foldData,
                u = s.indexOf(r),
                a = s[u - 1];this.end.row = a.end.row, this.end.column = a.end.column, s = s.splice(u, s.length - u);var f = new i(o, s);return o.splice(o.indexOf(this) + 1, 0, f), f;
        }, this.merge = function (e) {
            var t = e.folds;for (var n = 0; n < t.length; n++) {
                this.addFold(t[n]);
            }var r = this.foldData;r.splice(r.indexOf(e), 1);
        }, this.toString = function () {
            var e = [this.range.toString() + ": ["];return this.folds.forEach(function (t) {
                e.push("  " + t.toString());
            }), e.push("]"), e.join("\n");
        }, this.idxToPosition = function (e) {
            var t = 0;for (var n = 0; n < this.folds.length; n++) {
                var r = this.folds[n];e -= r.start.column - t;if (e < 0) return { row: r.start.row, column: r.start.column + e };e -= r.placeholder.length;if (e < 0) return r.start;t = r.end.column;
            }return { row: this.end.row, column: this.end.column + e };
        };
    }).call(i.prototype), t.FoldLine = i;
}), ace.define("ace/range_list", ["require", "exports", "module", "ace/range"], function (e, t, n) {
    "use strict";
    var r = e("./range").Range,
        i = r.comparePoints,
        s = function s() {
        this.ranges = [], this.$bias = 1;
    };(function () {
        this.comparePoints = i, this.pointIndex = function (e, t, n) {
            var r = this.ranges;for (var s = n || 0; s < r.length; s++) {
                var o = r[s],
                    u = i(e, o.end);if (u > 0) continue;var a = i(e, o.start);return u === 0 ? t && a !== 0 ? -s - 2 : s : a > 0 || a === 0 && !t ? s : -s - 1;
            }return -s - 1;
        }, this.add = function (e) {
            var t = !e.isEmpty(),
                n = this.pointIndex(e.start, t);n < 0 && (n = -n - 1);var r = this.pointIndex(e.end, t, n);return r < 0 ? r = -r - 1 : r++, this.ranges.splice(n, r - n, e);
        }, this.addList = function (e) {
            var t = [];for (var n = e.length; n--;) {
                t.push.apply(t, this.add(e[n]));
            }return t;
        }, this.substractPoint = function (e) {
            var t = this.pointIndex(e);if (t >= 0) return this.ranges.splice(t, 1);
        }, this.merge = function () {
            var e = [],
                t = this.ranges;t = t.sort(function (e, t) {
                return i(e.start, t.start);
            });var n = t[0],
                r;for (var s = 1; s < t.length; s++) {
                r = n, n = t[s];var o = i(r.end, n.start);if (o < 0) continue;if (o == 0 && !r.isEmpty() && !n.isEmpty()) continue;i(r.end, n.end) < 0 && (r.end.row = n.end.row, r.end.column = n.end.column), t.splice(s, 1), e.push(n), n = r, s--;
            }return this.ranges = t, e;
        }, this.contains = function (e, t) {
            return this.pointIndex({ row: e, column: t }) >= 0;
        }, this.containsPoint = function (e) {
            return this.pointIndex(e) >= 0;
        }, this.rangeAtPoint = function (e) {
            var t = this.pointIndex(e);if (t >= 0) return this.ranges[t];
        }, this.clipRows = function (e, t) {
            var n = this.ranges;if (n[0].start.row > t || n[n.length - 1].start.row < e) return [];var r = this.pointIndex({ row: e, column: 0 });r < 0 && (r = -r - 1);var i = this.pointIndex({ row: t, column: 0 }, r);i < 0 && (i = -i - 1);var s = [];for (var o = r; o < i; o++) {
                s.push(n[o]);
            }return s;
        }, this.removeAll = function () {
            return this.ranges.splice(0, this.ranges.length);
        }, this.attach = function (e) {
            this.session && this.detach(), this.session = e, this.onChange = this.$onChange.bind(this), this.session.on("change", this.onChange);
        }, this.detach = function () {
            if (!this.session) return;this.session.removeListener("change", this.onChange), this.session = null;
        }, this.$onChange = function (e) {
            var t = e.start,
                n = e.end,
                r = t.row,
                i = n.row,
                s = this.ranges;for (var o = 0, u = s.length; o < u; o++) {
                var a = s[o];if (a.end.row >= r) break;
            }if (e.action == "insert") {
                var f = i - r,
                    l = -t.column + n.column;for (; o < u; o++) {
                    var a = s[o];if (a.start.row > r) break;a.start.row == r && a.start.column >= t.column && (a.start.column == t.column && this.$bias <= 0 || (a.start.column += l, a.start.row += f));if (a.end.row == r && a.end.column >= t.column) {
                        if (a.end.column == t.column && this.$bias < 0) continue;a.end.column == t.column && l > 0 && o < u - 1 && a.end.column > a.start.column && a.end.column == s[o + 1].start.column && (a.end.column -= l), a.end.column += l, a.end.row += f;
                    }
                }
            } else {
                var f = r - i,
                    l = t.column - n.column;for (; o < u; o++) {
                    var a = s[o];if (a.start.row > i) break;if (a.end.row < i && (r < a.end.row || r == a.end.row && t.column < a.end.column)) a.end.row = r, a.end.column = t.column;else if (a.end.row == i) {
                        if (a.end.column <= n.column) {
                            if (f || a.end.column > t.column) a.end.column = t.column, a.end.row = t.row;
                        } else a.end.column += l, a.end.row += f;
                    } else a.end.row > i && (a.end.row += f);if (a.start.row < i && (r < a.start.row || r == a.start.row && t.column < a.start.column)) a.start.row = r, a.start.column = t.column;else if (a.start.row == i) {
                        if (a.start.column <= n.column) {
                            if (f || a.start.column > t.column) a.start.column = t.column, a.start.row = t.row;
                        } else a.start.column += l, a.start.row += f;
                    } else a.start.row > i && (a.start.row += f);
                }
            }if (f != 0 && o < u) for (; o < u; o++) {
                var a = s[o];a.start.row += f, a.end.row += f;
            }
        };
    }).call(s.prototype), t.RangeList = s;
}), ace.define("ace/edit_session/fold", ["require", "exports", "module", "ace/range_list", "ace/lib/oop"], function (e, t, n) {
    "use strict";
    function o(e, t) {
        e.row -= t.row, e.row == 0 && (e.column -= t.column);
    }function u(e, t) {
        o(e.start, t), o(e.end, t);
    }function a(e, t) {
        e.row == 0 && (e.column += t.column), e.row += t.row;
    }function f(e, t) {
        a(e.start, t), a(e.end, t);
    }var r = e("../range_list").RangeList,
        i = e("../lib/oop"),
        s = t.Fold = function (e, t) {
        this.foldLine = null, this.placeholder = t, this.range = e, this.start = e.start, this.end = e.end, this.sameRow = e.start.row == e.end.row, this.subFolds = this.ranges = [];
    };i.inherits(s, r), function () {
        this.toString = function () {
            return '"' + this.placeholder + '" ' + this.range.toString();
        }, this.setFoldLine = function (e) {
            this.foldLine = e, this.subFolds.forEach(function (t) {
                t.setFoldLine(e);
            });
        }, this.clone = function () {
            var e = this.range.clone(),
                t = new s(e, this.placeholder);return this.subFolds.forEach(function (e) {
                t.subFolds.push(e.clone());
            }), t.collapseChildren = this.collapseChildren, t;
        }, this.addSubFold = function (e) {
            if (this.range.isEqual(e)) return;u(e, this.start);var t = e.start.row,
                n = e.start.column;for (var r = 0, i = -1; r < this.subFolds.length; r++) {
                i = this.subFolds[r].range.compare(t, n);if (i != 1) break;
            }var s = this.subFolds[r],
                o = 0;if (i == 0) {
                if (s.range.containsRange(e)) return s.addSubFold(e);o = 1;
            }var t = e.range.end.row,
                n = e.range.end.column;for (var a = r, i = -1; a < this.subFolds.length; a++) {
                i = this.subFolds[a].range.compare(t, n);if (i != 1) break;
            }i == 0 && a++;var f = this.subFolds.splice(r, a - r, e),
                l = i == 0 ? f.length - 1 : f.length;for (var c = o; c < l; c++) {
                e.addSubFold(f[c]);
            }return e.setFoldLine(this.foldLine), e;
        }, this.restoreRange = function (e) {
            return f(e, this.start);
        };
    }.call(s.prototype);
}), ace.define("ace/edit_session/folding", ["require", "exports", "module", "ace/range", "ace/edit_session/fold_line", "ace/edit_session/fold", "ace/token_iterator"], function (e, t, n) {
    "use strict";
    function u() {
        this.getFoldAt = function (e, t, n) {
            var r = this.getFoldLine(e);if (!r) return null;var i = r.folds;for (var s = 0; s < i.length; s++) {
                var o = i[s].range;if (o.contains(e, t)) {
                    if (n == 1 && o.isEnd(e, t) && !o.isEmpty()) continue;if (n == -1 && o.isStart(e, t) && !o.isEmpty()) continue;return i[s];
                }
            }
        }, this.getFoldsInRange = function (e) {
            var t = e.start,
                n = e.end,
                r = this.$foldData,
                i = [];t.column += 1, n.column -= 1;for (var s = 0; s < r.length; s++) {
                var o = r[s].range.compareRange(e);if (o == 2) continue;if (o == -2) break;var u = r[s].folds;for (var a = 0; a < u.length; a++) {
                    var f = u[a];o = f.range.compareRange(e);if (o == -2) break;if (o == 2) continue;if (o == 42) break;i.push(f);
                }
            }return t.column -= 1, n.column += 1, i;
        }, this.getFoldsInRangeList = function (e) {
            if (Array.isArray(e)) {
                var t = [];e.forEach(function (e) {
                    t = t.concat(this.getFoldsInRange(e));
                }, this);
            } else var t = this.getFoldsInRange(e);return t;
        }, this.getAllFolds = function () {
            var e = [],
                t = this.$foldData;for (var n = 0; n < t.length; n++) {
                for (var r = 0; r < t[n].folds.length; r++) {
                    e.push(t[n].folds[r]);
                }
            }return e;
        }, this.getFoldStringAt = function (e, t, n, r) {
            r = r || this.getFoldLine(e);if (!r) return null;var i = { end: { column: 0 } },
                s,
                o;for (var u = 0; u < r.folds.length; u++) {
                o = r.folds[u];var a = o.range.compareEnd(e, t);if (a == -1) {
                    s = this.getLine(o.start.row).substring(i.end.column, o.start.column);break;
                }if (a === 0) return null;i = o;
            }return s || (s = this.getLine(o.start.row).substring(i.end.column)), n == -1 ? s.substring(0, t - i.end.column) : n == 1 ? s.substring(t - i.end.column) : s;
        }, this.getFoldLine = function (e, t) {
            var n = this.$foldData,
                r = 0;t && (r = n.indexOf(t)), r == -1 && (r = 0);for (r; r < n.length; r++) {
                var i = n[r];if (i.start.row <= e && i.end.row >= e) return i;if (i.end.row > e) return null;
            }return null;
        }, this.getNextFoldLine = function (e, t) {
            var n = this.$foldData,
                r = 0;t && (r = n.indexOf(t)), r == -1 && (r = 0);for (r; r < n.length; r++) {
                var i = n[r];if (i.end.row >= e) return i;
            }return null;
        }, this.getFoldedRowCount = function (e, t) {
            var n = this.$foldData,
                r = t - e + 1;for (var i = 0; i < n.length; i++) {
                var s = n[i],
                    o = s.end.row,
                    u = s.start.row;if (o >= t) {
                    u < t && (u >= e ? r -= t - u : r = 0);break;
                }o >= e && (u >= e ? r -= o - u : r -= o - e + 1);
            }return r;
        }, this.$addFoldLine = function (e) {
            return this.$foldData.push(e), this.$foldData.sort(function (e, t) {
                return e.start.row - t.start.row;
            }), e;
        }, this.addFold = function (e, t) {
            var n = this.$foldData,
                r = !1,
                o;e instanceof s ? o = e : (o = new s(t, e), o.collapseChildren = t.collapseChildren), this.$clipRangeToDocument(o.range);var u = o.start.row,
                a = o.start.column,
                f = o.end.row,
                l = o.end.column,
                c = this.getFoldAt(u, a, 1),
                h = this.getFoldAt(f, l, -1);if (c && h == c) return c.addSubFold(o);c && !c.range.isStart(u, a) && this.removeFold(c), h && !h.range.isEnd(f, l) && this.removeFold(h);var p = this.getFoldsInRange(o.range);p.length > 0 && (this.removeFolds(p), p.forEach(function (e) {
                o.addSubFold(e);
            }));for (var d = 0; d < n.length; d++) {
                var v = n[d];if (f == v.start.row) {
                    v.addFold(o), r = !0;break;
                }if (u == v.end.row) {
                    v.addFold(o), r = !0;if (!o.sameRow) {
                        var m = n[d + 1];if (m && m.start.row == f) {
                            v.merge(m);break;
                        }
                    }break;
                }if (f <= v.start.row) break;
            }return r || (v = this.$addFoldLine(new i(this.$foldData, o))), this.$useWrapMode ? this.$updateWrapData(v.start.row, v.start.row) : this.$updateRowLengthCache(v.start.row, v.start.row), this.$modified = !0, this._signal("changeFold", { data: o, action: "add" }), o;
        }, this.addFolds = function (e) {
            e.forEach(function (e) {
                this.addFold(e);
            }, this);
        }, this.removeFold = function (e) {
            var t = e.foldLine,
                n = t.start.row,
                r = t.end.row,
                i = this.$foldData,
                s = t.folds;if (s.length == 1) i.splice(i.indexOf(t), 1);else if (t.range.isEnd(e.end.row, e.end.column)) s.pop(), t.end.row = s[s.length - 1].end.row, t.end.column = s[s.length - 1].end.column;else if (t.range.isStart(e.start.row, e.start.column)) s.shift(), t.start.row = s[0].start.row, t.start.column = s[0].start.column;else if (e.sameRow) s.splice(s.indexOf(e), 1);else {
                var o = t.split(e.start.row, e.start.column);s = o.folds, s.shift(), o.start.row = s[0].start.row, o.start.column = s[0].start.column;
            }this.$updating || (this.$useWrapMode ? this.$updateWrapData(n, r) : this.$updateRowLengthCache(n, r)), this.$modified = !0, this._signal("changeFold", { data: e, action: "remove" });
        }, this.removeFolds = function (e) {
            var t = [];for (var n = 0; n < e.length; n++) {
                t.push(e[n]);
            }t.forEach(function (e) {
                this.removeFold(e);
            }, this), this.$modified = !0;
        }, this.expandFold = function (e) {
            this.removeFold(e), e.subFolds.forEach(function (t) {
                e.restoreRange(t), this.addFold(t);
            }, this), e.collapseChildren > 0 && this.foldAll(e.start.row + 1, e.end.row, e.collapseChildren - 1), e.subFolds = [];
        }, this.expandFolds = function (e) {
            e.forEach(function (e) {
                this.expandFold(e);
            }, this);
        }, this.unfold = function (e, t) {
            var n, i;e == null ? (n = new r(0, 0, this.getLength(), 0), t = !0) : typeof e == "number" ? n = new r(e, 0, e, this.getLine(e).length) : "row" in e ? n = r.fromPoints(e, e) : n = e, i = this.getFoldsInRangeList(n);if (t) this.removeFolds(i);else {
                var s = i;while (s.length) {
                    this.expandFolds(s), s = this.getFoldsInRangeList(n);
                }
            }if (i.length) return i;
        }, this.isRowFolded = function (e, t) {
            return !!this.getFoldLine(e, t);
        }, this.getRowFoldEnd = function (e, t) {
            var n = this.getFoldLine(e, t);return n ? n.end.row : e;
        }, this.getRowFoldStart = function (e, t) {
            var n = this.getFoldLine(e, t);return n ? n.start.row : e;
        }, this.getFoldDisplayLine = function (e, t, n, r, i) {
            r == null && (r = e.start.row), i == null && (i = 0), t == null && (t = e.end.row), n == null && (n = this.getLine(t).length);var s = this.doc,
                o = "";return e.walk(function (e, t, n, u) {
                if (t < r) return;if (t == r) {
                    if (n < i) return;u = Math.max(i, u);
                }e != null ? o += e : o += s.getLine(t).substring(u, n);
            }, t, n), o;
        }, this.getDisplayLine = function (e, t, n, r) {
            var i = this.getFoldLine(e);if (!i) {
                var s;return s = this.doc.getLine(e), s.substring(r || 0, t || s.length);
            }return this.getFoldDisplayLine(i, e, t, n, r);
        }, this.$cloneFoldData = function () {
            var e = [];return e = this.$foldData.map(function (t) {
                var n = t.folds.map(function (e) {
                    return e.clone();
                });return new i(e, n);
            }), e;
        }, this.toggleFold = function (e) {
            var t = this.selection,
                n = t.getRange(),
                r,
                i;if (n.isEmpty()) {
                var s = n.start;r = this.getFoldAt(s.row, s.column);if (r) {
                    this.expandFold(r);return;
                }(i = this.findMatchingBracket(s)) ? n.comparePoint(i) == 1 ? n.end = i : (n.start = i, n.start.column++, n.end.column--) : (i = this.findMatchingBracket({ row: s.row, column: s.column + 1 })) ? (n.comparePoint(i) == 1 ? n.end = i : n.start = i, n.start.column++) : n = this.getCommentFoldRange(s.row, s.column) || n;
            } else {
                var o = this.getFoldsInRange(n);if (e && o.length) {
                    this.expandFolds(o);return;
                }o.length == 1 && (r = o[0]);
            }r || (r = this.getFoldAt(n.start.row, n.start.column));if (r && r.range.toString() == n.toString()) {
                this.expandFold(r);return;
            }var u = "...";if (!n.isMultiLine()) {
                u = this.getTextRange(n);if (u.length < 4) return;u = u.trim().substring(0, 2) + "..";
            }this.addFold(u, n);
        }, this.getCommentFoldRange = function (e, t, n) {
            var i = new o(this, e, t),
                s = i.getCurrentToken(),
                u = s.type;if (s && /^comment|string/.test(u)) {
                u = u.match(/comment|string/)[0], u == "comment" && (u += "|doc-start");var a = new RegExp(u),
                    f = new r();if (n != 1) {
                    do {
                        s = i.stepBackward();
                    } while (s && a.test(s.type));i.stepForward();
                }f.start.row = i.getCurrentTokenRow(), f.start.column = i.getCurrentTokenColumn() + 2, i = new o(this, e, t);if (n != -1) {
                    var l = -1;do {
                        s = i.stepForward();if (l == -1) {
                            var c = this.getState(i.$row);a.test(c) || (l = i.$row);
                        } else if (i.$row > l) break;
                    } while (s && a.test(s.type));s = i.stepBackward();
                } else s = i.getCurrentToken();return f.end.row = i.getCurrentTokenRow(), f.end.column = i.getCurrentTokenColumn() + s.value.length - 2, f;
            }
        }, this.foldAll = function (e, t, n) {
            n == undefined && (n = 1e5);var r = this.foldWidgets;if (!r) return;t = t || this.getLength(), e = e || 0;for (var i = e; i < t; i++) {
                r[i] == null && (r[i] = this.getFoldWidget(i));if (r[i] != "start") continue;var s = this.getFoldWidgetRange(i);if (s && s.isMultiLine() && s.end.row <= t && s.start.row >= e) {
                    i = s.end.row;try {
                        var o = this.addFold("...", s);o && (o.collapseChildren = n);
                    } catch (u) {}
                }
            }
        }, this.$foldStyles = { manual: 1, markbegin: 1, markbeginend: 1 }, this.$foldStyle = "markbegin", this.setFoldStyle = function (e) {
            if (!this.$foldStyles[e]) throw new Error("invalid fold style: " + e + "[" + Object.keys(this.$foldStyles).join(", ") + "]");if (this.$foldStyle == e) return;this.$foldStyle = e, e == "manual" && this.unfold();var t = this.$foldMode;this.$setFolding(null), this.$setFolding(t);
        }, this.$setFolding = function (e) {
            if (this.$foldMode == e) return;this.$foldMode = e, this.off("change", this.$updateFoldWidgets), this.off("tokenizerUpdate", this.$tokenizerUpdateFoldWidgets), this._signal("changeAnnotation");if (!e || this.$foldStyle == "manual") {
                this.foldWidgets = null;return;
            }this.foldWidgets = [], this.getFoldWidget = e.getFoldWidget.bind(e, this, this.$foldStyle), this.getFoldWidgetRange = e.getFoldWidgetRange.bind(e, this, this.$foldStyle), this.$updateFoldWidgets = this.updateFoldWidgets.bind(this), this.$tokenizerUpdateFoldWidgets = this.tokenizerUpdateFoldWidgets.bind(this), this.on("change", this.$updateFoldWidgets), this.on("tokenizerUpdate", this.$tokenizerUpdateFoldWidgets);
        }, this.getParentFoldRangeData = function (e, t) {
            var n = this.foldWidgets;if (!n || t && n[e]) return {};var r = e - 1,
                i;while (r >= 0) {
                var s = n[r];s == null && (s = n[r] = this.getFoldWidget(r));if (s == "start") {
                    var o = this.getFoldWidgetRange(r);i || (i = o);if (o && o.end.row >= e) break;
                }r--;
            }return { range: r !== -1 && o, firstRange: i };
        }, this.onFoldWidgetClick = function (e, t) {
            t = t.domEvent;var n = { children: t.shiftKey, all: t.ctrlKey || t.metaKey, siblings: t.altKey },
                r = this.$toggleFoldWidget(e, n);if (!r) {
                var i = t.target || t.srcElement;i && /ace_fold-widget/.test(i.className) && (i.className += " ace_invalid");
            }
        }, this.$toggleFoldWidget = function (e, t) {
            if (!this.getFoldWidget) return;var n = this.getFoldWidget(e),
                r = this.getLine(e),
                i = n === "end" ? -1 : 1,
                s = this.getFoldAt(e, i === -1 ? 0 : r.length, i);if (s) return t.children || t.all ? this.removeFold(s) : this.expandFold(s), s;var o = this.getFoldWidgetRange(e, !0);if (o && !o.isMultiLine()) {
                s = this.getFoldAt(o.start.row, o.start.column, 1);if (s && o.isEqual(s.range)) return this.removeFold(s), s;
            }if (t.siblings) {
                var u = this.getParentFoldRangeData(e);if (u.range) var a = u.range.start.row + 1,
                    f = u.range.end.row;this.foldAll(a, f, t.all ? 1e4 : 0);
            } else t.children ? (f = o ? o.end.row : this.getLength(), this.foldAll(e + 1, f, t.all ? 1e4 : 0)) : o && (t.all && (o.collapseChildren = 1e4), this.addFold("...", o));return o;
        }, this.toggleFoldWidget = function (e) {
            var t = this.selection.getCursor().row;t = this.getRowFoldStart(t);var n = this.$toggleFoldWidget(t, {});if (n) return;var r = this.getParentFoldRangeData(t, !0);n = r.range || r.firstRange;if (n) {
                t = n.start.row;var i = this.getFoldAt(t, this.getLine(t).length, 1);i ? this.removeFold(i) : this.addFold("...", n);
            }
        }, this.updateFoldWidgets = function (e) {
            var t = e.start.row,
                n = e.end.row - t;if (n === 0) this.foldWidgets[t] = null;else if (e.action == "remove") this.foldWidgets.splice(t, n + 1, null);else {
                var r = Array(n + 1);r.unshift(t, 1), this.foldWidgets.splice.apply(this.foldWidgets, r);
            }
        }, this.tokenizerUpdateFoldWidgets = function (e) {
            var t = e.data;t.first != t.last && this.foldWidgets.length > t.first && this.foldWidgets.splice(t.first, this.foldWidgets.length);
        };
    }var r = e("../range").Range,
        i = e("./fold_line").FoldLine,
        s = e("./fold").Fold,
        o = e("../token_iterator").TokenIterator;t.Folding = u;
}), ace.define("ace/edit_session/bracket_match", ["require", "exports", "module", "ace/token_iterator", "ace/range"], function (e, t, n) {
    "use strict";
    function s() {
        this.findMatchingBracket = function (e, t) {
            if (e.column == 0) return null;var n = t || this.getLine(e.row).charAt(e.column - 1);if (n == "") return null;var r = n.match(/([\(\[\{])|([\)\]\}])/);return r ? r[1] ? this.$findClosingBracket(r[1], e) : this.$findOpeningBracket(r[2], e) : null;
        }, this.getBracketRange = function (e) {
            var t = this.getLine(e.row),
                n = !0,
                r,
                s = t.charAt(e.column - 1),
                o = s && s.match(/([\(\[\{])|([\)\]\}])/);o || (s = t.charAt(e.column), e = { row: e.row, column: e.column + 1 }, o = s && s.match(/([\(\[\{])|([\)\]\}])/), n = !1);if (!o) return null;if (o[1]) {
                var u = this.$findClosingBracket(o[1], e);if (!u) return null;r = i.fromPoints(e, u), n || (r.end.column++, r.start.column--), r.cursor = r.end;
            } else {
                var u = this.$findOpeningBracket(o[2], e);if (!u) return null;r = i.fromPoints(u, e), n || (r.start.column++, r.end.column--), r.cursor = r.start;
            }return r;
        }, this.getMatchingBracketRanges = function (e) {
            var t = this.getLine(e.row),
                n = t.charAt(e.column - 1),
                r = n && n.match(/([\(\[\{])|([\)\]\}])/);r || (n = t.charAt(e.column), e = { row: e.row, column: e.column + 1 }, r = n && n.match(/([\(\[\{])|([\)\]\}])/));if (!r) return null;var s = new i(e.row, e.column - 1, e.row, e.column),
                o = r[1] ? this.$findClosingBracket(r[1], e) : this.$findOpeningBracket(r[2], e);if (!o) return [s];var u = new i(o.row, o.column, o.row, o.column + 1);return [s, u];
        }, this.$brackets = { ")": "(", "(": ")", "]": "[", "[": "]", "{": "}", "}": "{", "<": ">", ">": "<" }, this.$findOpeningBracket = function (e, t, n) {
            var i = this.$brackets[e],
                s = 1,
                o = new r(this, t.row, t.column),
                u = o.getCurrentToken();u || (u = o.stepForward());if (!u) return;n || (n = new RegExp("(\\.?" + u.type.replace(".", "\\.").replace("rparen", ".paren").replace(/\b(?:end)\b/, "(?:start|begin|end)") + ")+"));var a = t.column - o.getCurrentTokenColumn() - 2,
                f = u.value;for (;;) {
                while (a >= 0) {
                    var l = f.charAt(a);if (l == i) {
                        s -= 1;if (s == 0) return { row: o.getCurrentTokenRow(), column: a + o.getCurrentTokenColumn() };
                    } else l == e && (s += 1);a -= 1;
                }do {
                    u = o.stepBackward();
                } while (u && !n.test(u.type));if (u == null) break;f = u.value, a = f.length - 1;
            }return null;
        }, this.$findClosingBracket = function (e, t, n) {
            var i = this.$brackets[e],
                s = 1,
                o = new r(this, t.row, t.column),
                u = o.getCurrentToken();u || (u = o.stepForward());if (!u) return;n || (n = new RegExp("(\\.?" + u.type.replace(".", "\\.").replace("lparen", ".paren").replace(/\b(?:start|begin)\b/, "(?:start|begin|end)") + ")+"));var a = t.column - o.getCurrentTokenColumn();for (;;) {
                var f = u.value,
                    l = f.length;while (a < l) {
                    var c = f.charAt(a);if (c == i) {
                        s -= 1;if (s == 0) return { row: o.getCurrentTokenRow(), column: a + o.getCurrentTokenColumn() };
                    } else c == e && (s += 1);a += 1;
                }do {
                    u = o.stepForward();
                } while (u && !n.test(u.type));if (u == null) break;a = 0;
            }return null;
        };
    }var r = e("../token_iterator").TokenIterator,
        i = e("../range").Range;t.BracketMatch = s;
}), ace.define("ace/edit_session", ["require", "exports", "module", "ace/lib/oop", "ace/lib/lang", "ace/bidihandler", "ace/config", "ace/lib/event_emitter", "ace/selection", "ace/mode/text", "ace/range", "ace/document", "ace/background_tokenizer", "ace/search_highlight", "ace/edit_session/folding", "ace/edit_session/bracket_match"], function (e, t, n) {
    "use strict";
    var r = e("./lib/oop"),
        i = e("./lib/lang"),
        s = e("./bidihandler").BidiHandler,
        o = e("./config"),
        u = e("./lib/event_emitter").EventEmitter,
        a = e("./selection").Selection,
        f = e("./mode/text").Mode,
        l = e("./range").Range,
        c = e("./document").Document,
        h = e("./background_tokenizer").BackgroundTokenizer,
        p = e("./search_highlight").SearchHighlight,
        d = function d(e, t) {
        this.$breakpoints = [], this.$decorations = [], this.$frontMarkers = {}, this.$backMarkers = {}, this.$markerId = 1, this.$undoSelect = !0, this.$foldData = [], this.id = "session" + ++d.$uid, this.$foldData.toString = function () {
            return this.join("\n");
        }, this.on("changeFold", this.onChangeFold.bind(this)), this.$onChange = this.onChange.bind(this);if ((typeof e === "undefined" ? "undefined" : _typeof(e)) != "object" || !e.getLine) e = new c(e);this.setDocument(e), this.selection = new a(this), this.$bidiHandler = new s(this), o.resetOptions(this), this.setMode(t), o._signal("session", this);
    };d.$uid = 0, function () {
        function m(e) {
            return e < 4352 ? !1 : e >= 4352 && e <= 4447 || e >= 4515 && e <= 4519 || e >= 4602 && e <= 4607 || e >= 9001 && e <= 9002 || e >= 11904 && e <= 11929 || e >= 11931 && e <= 12019 || e >= 12032 && e <= 12245 || e >= 12272 && e <= 12283 || e >= 12288 && e <= 12350 || e >= 12353 && e <= 12438 || e >= 12441 && e <= 12543 || e >= 12549 && e <= 12589 || e >= 12593 && e <= 12686 || e >= 12688 && e <= 12730 || e >= 12736 && e <= 12771 || e >= 12784 && e <= 12830 || e >= 12832 && e <= 12871 || e >= 12880 && e <= 13054 || e >= 13056 && e <= 19903 || e >= 19968 && e <= 42124 || e >= 42128 && e <= 42182 || e >= 43360 && e <= 43388 || e >= 44032 && e <= 55203 || e >= 55216 && e <= 55238 || e >= 55243 && e <= 55291 || e >= 63744 && e <= 64255 || e >= 65040 && e <= 65049 || e >= 65072 && e <= 65106 || e >= 65108 && e <= 65126 || e >= 65128 && e <= 65131 || e >= 65281 && e <= 65376 || e >= 65504 && e <= 65510;
        }r.implement(this, u), this.setDocument = function (e) {
            this.doc && this.doc.removeListener("change", this.$onChange), this.doc = e, e.on("change", this.$onChange), this.bgTokenizer && this.bgTokenizer.setDocument(this.getDocument()), this.resetCaches();
        }, this.getDocument = function () {
            return this.doc;
        }, this.$resetRowCache = function (e) {
            if (!e) {
                this.$docRowCache = [], this.$screenRowCache = [];return;
            }var t = this.$docRowCache.length,
                n = this.$getRowCacheIndex(this.$docRowCache, e) + 1;t > n && (this.$docRowCache.splice(n, t), this.$screenRowCache.splice(n, t));
        }, this.$getRowCacheIndex = function (e, t) {
            var n = 0,
                r = e.length - 1;while (n <= r) {
                var i = n + r >> 1,
                    s = e[i];if (t > s) n = i + 1;else {
                    if (!(t < s)) return i;r = i - 1;
                }
            }return n - 1;
        }, this.resetCaches = function () {
            this.$modified = !0, this.$wrapData = [], this.$rowLengthCache = [], this.$resetRowCache(0), this.bgTokenizer && this.bgTokenizer.start(0);
        }, this.onChangeFold = function (e) {
            var t = e.data;this.$resetRowCache(t.start.row);
        }, this.onChange = function (e) {
            this.$modified = !0, this.$bidiHandler.onChange(e), this.$resetRowCache(e.start.row);var t = this.$updateInternalDataOnChange(e);!this.$fromUndo && this.$undoManager && (t && t.length && (this.$undoManager.add({ action: "removeFolds", folds: t }, this.mergeUndoDeltas), this.mergeUndoDeltas = !0), this.$undoManager.add(e, this.mergeUndoDeltas), this.mergeUndoDeltas = !0, this.$informUndoManager.schedule()), this.bgTokenizer && this.bgTokenizer.$updateOnChange(e), this._signal("change", e);
        }, this.setValue = function (e) {
            this.doc.setValue(e), this.selection.moveTo(0, 0), this.$resetRowCache(0), this.setUndoManager(this.$undoManager), this.getUndoManager().reset();
        }, this.getValue = this.toString = function () {
            return this.doc.getValue();
        }, this.getSelection = function () {
            return this.selection;
        }, this.getState = function (e) {
            return this.bgTokenizer.getState(e);
        }, this.getTokens = function (e) {
            return this.bgTokenizer.getTokens(e);
        }, this.getTokenAt = function (e, t) {
            var n = this.bgTokenizer.getTokens(e),
                r,
                i = 0;if (t == null) {
                var s = n.length - 1;i = this.getLine(e).length;
            } else for (var s = 0; s < n.length; s++) {
                i += n[s].value.length;if (i >= t) break;
            }return r = n[s], r ? (r.index = s, r.start = i - r.value.length, r) : null;
        }, this.setUndoManager = function (e) {
            this.$undoManager = e, this.$informUndoManager && this.$informUndoManager.cancel();if (e) {
                var t = this;e.addSession(this), this.$syncInformUndoManager = function () {
                    t.$informUndoManager.cancel(), t.mergeUndoDeltas = !1;
                }, this.$informUndoManager = i.delayedCall(this.$syncInformUndoManager);
            } else this.$syncInformUndoManager = function () {};
        }, this.markUndoGroup = function () {
            this.$syncInformUndoManager && this.$syncInformUndoManager();
        }, this.$defaultUndoManager = { undo: function undo() {}, redo: function redo() {}, hasUndo: function hasUndo() {}, hasRedo: function hasRedo() {}, reset: function reset() {}, add: function add() {}, addSelection: function addSelection() {}, startNewGroup: function startNewGroup() {}, addSession: function addSession() {} }, this.getUndoManager = function () {
            return this.$undoManager || this.$defaultUndoManager;
        }, this.getTabString = function () {
            return this.getUseSoftTabs() ? i.stringRepeat(" ", this.getTabSize()) : "	";
        }, this.setUseSoftTabs = function (e) {
            this.setOption("useSoftTabs", e);
        }, this.getUseSoftTabs = function () {
            return this.$useSoftTabs && !this.$mode.$indentWithTabs;
        }, this.setTabSize = function (e) {
            this.setOption("tabSize", e);
        }, this.getTabSize = function () {
            return this.$tabSize;
        }, this.isTabStop = function (e) {
            return this.$useSoftTabs && e.column % this.$tabSize === 0;
        }, this.setNavigateWithinSoftTabs = function (e) {
            this.setOption("navigateWithinSoftTabs", e);
        }, this.getNavigateWithinSoftTabs = function () {
            return this.$navigateWithinSoftTabs;
        }, this.$overwrite = !1, this.setOverwrite = function (e) {
            this.setOption("overwrite", e);
        }, this.getOverwrite = function () {
            return this.$overwrite;
        }, this.toggleOverwrite = function () {
            this.setOverwrite(!this.$overwrite);
        }, this.addGutterDecoration = function (e, t) {
            this.$decorations[e] || (this.$decorations[e] = ""), this.$decorations[e] += " " + t, this._signal("changeBreakpoint", {});
        }, this.removeGutterDecoration = function (e, t) {
            this.$decorations[e] = (this.$decorations[e] || "").replace(" " + t, ""), this._signal("changeBreakpoint", {});
        }, this.getBreakpoints = function () {
            return this.$breakpoints;
        }, this.setBreakpoints = function (e) {
            this.$breakpoints = [];for (var t = 0; t < e.length; t++) {
                this.$breakpoints[e[t]] = "ace_breakpoint";
            }this._signal("changeBreakpoint", {});
        }, this.clearBreakpoints = function () {
            this.$breakpoints = [], this._signal("changeBreakpoint", {});
        }, this.setBreakpoint = function (e, t) {
            t === undefined && (t = "ace_breakpoint"), t ? this.$breakpoints[e] = t : delete this.$breakpoints[e], this._signal("changeBreakpoint", {});
        }, this.clearBreakpoint = function (e) {
            delete this.$breakpoints[e], this._signal("changeBreakpoint", {});
        }, this.addMarker = function (e, t, n, r) {
            var i = this.$markerId++,
                s = { range: e, type: n || "line", renderer: typeof n == "function" ? n : null, clazz: t, inFront: !!r, id: i };return r ? (this.$frontMarkers[i] = s, this._signal("changeFrontMarker")) : (this.$backMarkers[i] = s, this._signal("changeBackMarker")), i;
        }, this.addDynamicMarker = function (e, t) {
            if (!e.update) return;var n = this.$markerId++;return e.id = n, e.inFront = !!t, t ? (this.$frontMarkers[n] = e, this._signal("changeFrontMarker")) : (this.$backMarkers[n] = e, this._signal("changeBackMarker")), e;
        }, this.removeMarker = function (e) {
            var t = this.$frontMarkers[e] || this.$backMarkers[e];if (!t) return;var n = t.inFront ? this.$frontMarkers : this.$backMarkers;delete n[e], this._signal(t.inFront ? "changeFrontMarker" : "changeBackMarker");
        }, this.getMarkers = function (e) {
            return e ? this.$frontMarkers : this.$backMarkers;
        }, this.highlight = function (e) {
            if (!this.$searchHighlight) {
                var t = new p(null, "ace_selected-word", "text");this.$searchHighlight = this.addDynamicMarker(t);
            }this.$searchHighlight.setRegexp(e);
        }, this.highlightLines = function (e, t, n, r) {
            typeof t != "number" && (n = t, t = e), n || (n = "ace_step");var i = new l(e, 0, t, Infinity);return i.id = this.addMarker(i, n, "fullLine", r), i;
        }, this.setAnnotations = function (e) {
            this.$annotations = e, this._signal("changeAnnotation", {});
        }, this.getAnnotations = function () {
            return this.$annotations || [];
        }, this.clearAnnotations = function () {
            this.setAnnotations([]);
        }, this.$detectNewLine = function (e) {
            var t = e.match(/^.*?(\r?\n)/m);t ? this.$autoNewLine = t[1] : this.$autoNewLine = "\n";
        }, this.getWordRange = function (e, t) {
            var n = this.getLine(e),
                r = !1;t > 0 && (r = !!n.charAt(t - 1).match(this.tokenRe)), r || (r = !!n.charAt(t).match(this.tokenRe));if (r) var i = this.tokenRe;else if (/^\s+$/.test(n.slice(t - 1, t + 1))) var i = /\s/;else var i = this.nonTokenRe;var s = t;if (s > 0) {
                do {
                    s--;
                } while (s >= 0 && n.charAt(s).match(i));s++;
            }var o = t;while (o < n.length && n.charAt(o).match(i)) {
                o++;
            }return new l(e, s, e, o);
        }, this.getAWordRange = function (e, t) {
            var n = this.getWordRange(e, t),
                r = this.getLine(n.end.row);while (r.charAt(n.end.column).match(/[ \t]/)) {
                n.end.column += 1;
            }return n;
        }, this.setNewLineMode = function (e) {
            this.doc.setNewLineMode(e);
        }, this.getNewLineMode = function () {
            return this.doc.getNewLineMode();
        }, this.setUseWorker = function (e) {
            this.setOption("useWorker", e);
        }, this.getUseWorker = function () {
            return this.$useWorker;
        }, this.onReloadTokenizer = function (e) {
            var t = e.data;this.bgTokenizer.start(t.first), this._signal("tokenizerUpdate", e);
        }, this.$modes = o.$modes, this.$mode = null, this.$modeId = null, this.setMode = function (e, t) {
            if (e && (typeof e === "undefined" ? "undefined" : _typeof(e)) == "object") {
                if (e.getTokenizer) return this.$onChangeMode(e);var n = e,
                    r = n.path;
            } else r = e || "ace/mode/text";this.$modes["ace/mode/text"] || (this.$modes["ace/mode/text"] = new f());if (this.$modes[r] && !n) {
                this.$onChangeMode(this.$modes[r]), t && t();return;
            }this.$modeId = r, o.loadModule(["mode", r], function (e) {
                if (this.$modeId !== r) return t && t();this.$modes[r] && !n ? this.$onChangeMode(this.$modes[r]) : e && e.Mode && (e = new e.Mode(n), n || (this.$modes[r] = e, e.$id = r), this.$onChangeMode(e)), t && t();
            }.bind(this)), this.$mode || this.$onChangeMode(this.$modes["ace/mode/text"], !0);
        }, this.$onChangeMode = function (e, t) {
            t || (this.$modeId = e.$id);if (this.$mode === e) return;this.$mode = e, this.$stopWorker(), this.$useWorker && this.$startWorker();var n = e.getTokenizer();if (n.addEventListener !== undefined) {
                var r = this.onReloadTokenizer.bind(this);n.addEventListener("update", r);
            }if (!this.bgTokenizer) {
                this.bgTokenizer = new h(n);var i = this;this.bgTokenizer.addEventListener("update", function (e) {
                    i._signal("tokenizerUpdate", e);
                });
            } else this.bgTokenizer.setTokenizer(n);this.bgTokenizer.setDocument(this.getDocument()), this.tokenRe = e.tokenRe, this.nonTokenRe = e.nonTokenRe, t || (e.attachToSession && e.attachToSession(this), this.$options.wrapMethod.set.call(this, this.$wrapMethod), this.$setFolding(e.foldingRules), this.bgTokenizer.start(0), this._emit("changeMode"));
        }, this.$stopWorker = function () {
            this.$worker && (this.$worker.terminate(), this.$worker = null);
        }, this.$startWorker = function () {
            try {
                this.$worker = this.$mode.createWorker(this);
            } catch (e) {
                o.warn("Could not load worker", e), this.$worker = null;
            }
        }, this.getMode = function () {
            return this.$mode;
        }, this.$scrollTop = 0, this.setScrollTop = function (e) {
            if (this.$scrollTop === e || isNaN(e)) return;this.$scrollTop = e, this._signal("changeScrollTop", e);
        }, this.getScrollTop = function () {
            return this.$scrollTop;
        }, this.$scrollLeft = 0, this.setScrollLeft = function (e) {
            if (this.$scrollLeft === e || isNaN(e)) return;this.$scrollLeft = e, this._signal("changeScrollLeft", e);
        }, this.getScrollLeft = function () {
            return this.$scrollLeft;
        }, this.getScreenWidth = function () {
            return this.$computeWidth(), this.lineWidgets ? Math.max(this.getLineWidgetMaxWidth(), this.screenWidth) : this.screenWidth;
        }, this.getLineWidgetMaxWidth = function () {
            if (this.lineWidgetsWidth != null) return this.lineWidgetsWidth;var e = 0;return this.lineWidgets.forEach(function (t) {
                t && t.screenWidth > e && (e = t.screenWidth);
            }), this.lineWidgetWidth = e;
        }, this.$computeWidth = function (e) {
            if (this.$modified || e) {
                this.$modified = !1;if (this.$useWrapMode) return this.screenWidth = this.$wrapLimit;var t = this.doc.getAllLines(),
                    n = this.$rowLengthCache,
                    r = 0,
                    i = 0,
                    s = this.$foldData[i],
                    o = s ? s.start.row : Infinity,
                    u = t.length;for (var a = 0; a < u; a++) {
                    if (a > o) {
                        a = s.end.row + 1;if (a >= u) break;s = this.$foldData[i++], o = s ? s.start.row : Infinity;
                    }n[a] == null && (n[a] = this.$getStringScreenWidth(t[a])[0]), n[a] > r && (r = n[a]);
                }this.screenWidth = r;
            }
        }, this.getLine = function (e) {
            return this.doc.getLine(e);
        }, this.getLines = function (e, t) {
            return this.doc.getLines(e, t);
        }, this.getLength = function () {
            return this.doc.getLength();
        }, this.getTextRange = function (e) {
            return this.doc.getTextRange(e || this.selection.getRange());
        }, this.insert = function (e, t) {
            return this.doc.insert(e, t);
        }, this.remove = function (e) {
            return this.doc.remove(e);
        }, this.removeFullLines = function (e, t) {
            return this.doc.removeFullLines(e, t);
        }, this.undoChanges = function (e, t) {
            if (!e.length) return;this.$fromUndo = !0;for (var n = e.length - 1; n != -1; n--) {
                var r = e[n];r.action == "insert" || r.action == "remove" ? this.doc.revertDelta(r) : r.folds && this.addFolds(r.folds);
            }!t && this.$undoSelect && (e.selectionBefore ? this.selection.fromJSON(e.selectionBefore) : this.selection.setRange(this.$getUndoSelection(e, !0))), this.$fromUndo = !1;
        }, this.redoChanges = function (e, t) {
            if (!e.length) return;this.$fromUndo = !0;for (var n = 0; n < e.length; n++) {
                var r = e[n];(r.action == "insert" || r.action == "remove") && this.doc.applyDelta(r);
            }!t && this.$undoSelect && (e.selectionAfter ? this.selection.fromJSON(e.selectionAfter) : this.selection.setRange(this.$getUndoSelection(e, !1))), this.$fromUndo = !1;
        }, this.setUndoSelect = function (e) {
            this.$undoSelect = e;
        }, this.$getUndoSelection = function (e, t) {
            function n(e) {
                return t ? e.action !== "insert" : e.action === "insert";
            }var r, i, s;for (var o = 0; o < e.length; o++) {
                var u = e[o];if (!u.start) continue;if (!r) {
                    n(u) ? (r = l.fromPoints(u.start, u.end), s = !0) : (r = l.fromPoints(u.start, u.start), s = !1);continue;
                }n(u) ? (i = u.start, r.compare(i.row, i.column) == -1 && r.setStart(i), i = u.end, r.compare(i.row, i.column) == 1 && r.setEnd(i), s = !0) : (i = u.start, r.compare(i.row, i.column) == -1 && (r = l.fromPoints(u.start, u.start)), s = !1);
            }return r;
        }, this.replace = function (e, t) {
            return this.doc.replace(e, t);
        }, this.moveText = function (e, t, n) {
            var r = this.getTextRange(e),
                i = this.getFoldsInRange(e),
                s = l.fromPoints(t, t);if (!n) {
                this.remove(e);var o = e.start.row - e.end.row,
                    u = o ? -e.end.column : e.start.column - e.end.column;u && (s.start.row == e.end.row && s.start.column > e.end.column && (s.start.column += u), s.end.row == e.end.row && s.end.column > e.end.column && (s.end.column += u)), o && s.start.row >= e.end.row && (s.start.row += o, s.end.row += o);
            }s.end = this.insert(s.start, r);if (i.length) {
                var a = e.start,
                    f = s.start,
                    o = f.row - a.row,
                    u = f.column - a.column;this.addFolds(i.map(function (e) {
                    return e = e.clone(), e.start.row == a.row && (e.start.column += u), e.end.row == a.row && (e.end.column += u), e.start.row += o, e.end.row += o, e;
                }));
            }return s;
        }, this.indentRows = function (e, t, n) {
            n = n.replace(/\t/g, this.getTabString());for (var r = e; r <= t; r++) {
                this.doc.insertInLine({ row: r, column: 0 }, n);
            }
        }, this.outdentRows = function (e) {
            var t = e.collapseRows(),
                n = new l(0, 0, 0, 0),
                r = this.getTabSize();for (var i = t.start.row; i <= t.end.row; ++i) {
                var s = this.getLine(i);n.start.row = i, n.end.row = i;for (var o = 0; o < r; ++o) {
                    if (s.charAt(o) != " ") break;
                }o < r && s.charAt(o) == "	" ? (n.start.column = o, n.end.column = o + 1) : (n.start.column = 0, n.end.column = o), this.remove(n);
            }
        }, this.$moveLines = function (e, t, n) {
            e = this.getRowFoldStart(e), t = this.getRowFoldEnd(t);if (n < 0) {
                var r = this.getRowFoldStart(e + n);if (r < 0) return 0;var i = r - e;
            } else if (n > 0) {
                var r = this.getRowFoldEnd(t + n);if (r > this.doc.getLength() - 1) return 0;var i = r - t;
            } else {
                e = this.$clipRowToDocument(e), t = this.$clipRowToDocument(t);var i = t - e + 1;
            }var s = new l(e, 0, t, Number.MAX_VALUE),
                o = this.getFoldsInRange(s).map(function (e) {
                return e = e.clone(), e.start.row += i, e.end.row += i, e;
            }),
                u = n == 0 ? this.doc.getLines(e, t) : this.doc.removeFullLines(e, t);return this.doc.insertFullLines(e + i, u), o.length && this.addFolds(o), i;
        }, this.moveLinesUp = function (e, t) {
            return this.$moveLines(e, t, -1);
        }, this.moveLinesDown = function (e, t) {
            return this.$moveLines(e, t, 1);
        }, this.duplicateLines = function (e, t) {
            return this.$moveLines(e, t, 0);
        }, this.$clipRowToDocument = function (e) {
            return Math.max(0, Math.min(e, this.doc.getLength() - 1));
        }, this.$clipColumnToRow = function (e, t) {
            return t < 0 ? 0 : Math.min(this.doc.getLine(e).length, t);
        }, this.$clipPositionToDocument = function (e, t) {
            t = Math.max(0, t);if (e < 0) e = 0, t = 0;else {
                var n = this.doc.getLength();e >= n ? (e = n - 1, t = this.doc.getLine(n - 1).length) : t = Math.min(this.doc.getLine(e).length, t);
            }return { row: e, column: t };
        }, this.$clipRangeToDocument = function (e) {
            e.start.row < 0 ? (e.start.row = 0, e.start.column = 0) : e.start.column = this.$clipColumnToRow(e.start.row, e.start.column);var t = this.doc.getLength() - 1;return e.end.row > t ? (e.end.row = t, e.end.column = this.doc.getLine(t).length) : e.end.column = this.$clipColumnToRow(e.end.row, e.end.column), e;
        }, this.$wrapLimit = 80, this.$useWrapMode = !1, this.$wrapLimitRange = { min: null, max: null }, this.setUseWrapMode = function (e) {
            if (e != this.$useWrapMode) {
                this.$useWrapMode = e, this.$modified = !0, this.$resetRowCache(0);if (e) {
                    var t = this.getLength();this.$wrapData = Array(t), this.$updateWrapData(0, t - 1);
                }this._signal("changeWrapMode");
            }
        }, this.getUseWrapMode = function () {
            return this.$useWrapMode;
        }, this.setWrapLimitRange = function (e, t) {
            if (this.$wrapLimitRange.min !== e || this.$wrapLimitRange.max !== t) this.$wrapLimitRange = { min: e, max: t }, this.$modified = !0, this.$bidiHandler.markAsDirty(), this.$useWrapMode && this._signal("changeWrapMode");
        }, this.adjustWrapLimit = function (e, t) {
            var n = this.$wrapLimitRange;n.max < 0 && (n = { min: t, max: t });var r = this.$constrainWrapLimit(e, n.min, n.max);return r != this.$wrapLimit && r > 1 ? (this.$wrapLimit = r, this.$modified = !0, this.$useWrapMode && (this.$updateWrapData(0, this.getLength() - 1), this.$resetRowCache(0), this._signal("changeWrapLimit")), !0) : !1;
        }, this.$constrainWrapLimit = function (e, t, n) {
            return t && (e = Math.max(t, e)), n && (e = Math.min(n, e)), e;
        }, this.getWrapLimit = function () {
            return this.$wrapLimit;
        }, this.setWrapLimit = function (e) {
            this.setWrapLimitRange(e, e);
        }, this.getWrapLimitRange = function () {
            return { min: this.$wrapLimitRange.min, max: this.$wrapLimitRange.max };
        }, this.$updateInternalDataOnChange = function (e) {
            var t = this.$useWrapMode,
                n = e.action,
                r = e.start,
                i = e.end,
                s = r.row,
                o = i.row,
                u = o - s,
                a = null;this.$updating = !0;if (u != 0) {
                if (n === "remove") {
                    this[t ? "$wrapData" : "$rowLengthCache"].splice(s, u);var f = this.$foldData;a = this.getFoldsInRange(e), this.removeFolds(a);var l = this.getFoldLine(i.row),
                        c = 0;if (l) {
                        l.addRemoveChars(i.row, i.column, r.column - i.column), l.shiftRow(-u);var h = this.getFoldLine(s);h && h !== l && (h.merge(l), l = h), c = f.indexOf(l) + 1;
                    }for (c; c < f.length; c++) {
                        var l = f[c];l.start.row >= i.row && l.shiftRow(-u);
                    }o = s;
                } else {
                    var p = Array(u);p.unshift(s, 0);var d = t ? this.$wrapData : this.$rowLengthCache;d.splice.apply(d, p);var f = this.$foldData,
                        l = this.getFoldLine(s),
                        c = 0;if (l) {
                        var v = l.range.compareInside(r.row, r.column);v == 0 ? (l = l.split(r.row, r.column), l && (l.shiftRow(u), l.addRemoveChars(o, 0, i.column - r.column))) : v == -1 && (l.addRemoveChars(s, 0, i.column - r.column), l.shiftRow(u)), c = f.indexOf(l) + 1;
                    }for (c; c < f.length; c++) {
                        var l = f[c];l.start.row >= s && l.shiftRow(u);
                    }
                }
            } else {
                u = Math.abs(e.start.column - e.end.column), n === "remove" && (a = this.getFoldsInRange(e), this.removeFolds(a), u = -u);var l = this.getFoldLine(s);l && l.addRemoveChars(s, r.column, u);
            }return t && this.$wrapData.length != this.doc.getLength() && console.error("doc.getLength() and $wrapData.length have to be the same!"), this.$updating = !1, t ? this.$updateWrapData(s, o) : this.$updateRowLengthCache(s, o), a;
        }, this.$updateRowLengthCache = function (e, t, n) {
            this.$rowLengthCache[e] = null, this.$rowLengthCache[t] = null;
        }, this.$updateWrapData = function (e, t) {
            var r = this.doc.getAllLines(),
                i = this.getTabSize(),
                o = this.$wrapData,
                u = this.$wrapLimit,
                a,
                f,
                l = e;t = Math.min(t, r.length - 1);while (l <= t) {
                f = this.getFoldLine(l, f), f ? (a = [], f.walk(function (e, t, i, o) {
                    var u;if (e != null) {
                        u = this.$getDisplayTokens(e, a.length), u[0] = n;for (var f = 1; f < u.length; f++) {
                            u[f] = s;
                        }
                    } else u = this.$getDisplayTokens(r[t].substring(o, i), a.length);a = a.concat(u);
                }.bind(this), f.end.row, r[f.end.row].length + 1), o[f.start.row] = this.$computeWrapSplits(a, u, i), l = f.end.row + 1) : (a = this.$getDisplayTokens(r[l]), o[l] = this.$computeWrapSplits(a, u, i), l++);
            }
        };var e = 1,
            t = 2,
            n = 3,
            s = 4,
            a = 9,
            c = 10,
            d = 11,
            v = 12;this.$computeWrapSplits = function (e, r, i) {
            function g() {
                var t = 0;if (m === 0) return t;if (p) for (var n = 0; n < e.length; n++) {
                    var r = e[n];if (r == c) t += 1;else {
                        if (r != d) {
                            if (r == v) continue;break;
                        }t += i;
                    }
                }return h && p !== !1 && (t += i), Math.min(t, m);
            }function y(t) {
                var n = t - f;for (var r = f; r < t; r++) {
                    var i = e[r];if (i === 12 || i === 2) n -= 1;
                }o.length || (b = g(), o.indent = b), l += n, o.push(l), f = t;
            }if (e.length == 0) return [];var o = [],
                u = e.length,
                f = 0,
                l = 0,
                h = this.$wrapAsCode,
                p = this.$indentedSoftWrap,
                m = r <= Math.max(2 * i, 8) || p === !1 ? 0 : Math.floor(r / 2),
                b = 0;while (u - f > r - b) {
                var w = f + r - b;if (e[w - 1] >= c && e[w] >= c) {
                    y(w);continue;
                }if (e[w] == n || e[w] == s) {
                    for (w; w != f - 1; w--) {
                        if (e[w] == n) break;
                    }if (w > f) {
                        y(w);continue;
                    }w = f + r;for (w; w < e.length; w++) {
                        if (e[w] != s) break;
                    }if (w == e.length) break;y(w);continue;
                }var E = Math.max(w - (r - (r >> 2)), f - 1);while (w > E && e[w] < n) {
                    w--;
                }if (h) {
                    while (w > E && e[w] < n) {
                        w--;
                    }while (w > E && e[w] == a) {
                        w--;
                    }
                } else while (w > E && e[w] < c) {
                    w--;
                }if (w > E) {
                    y(++w);continue;
                }w = f + r, e[w] == t && w--, y(w - b);
            }return o;
        }, this.$getDisplayTokens = function (n, r) {
            var i = [],
                s;r = r || 0;for (var o = 0; o < n.length; o++) {
                var u = n.charCodeAt(o);if (u == 9) {
                    s = this.getScreenTabSize(i.length + r), i.push(d);for (var f = 1; f < s; f++) {
                        i.push(v);
                    }
                } else u == 32 ? i.push(c) : u > 39 && u < 48 || u > 57 && u < 64 ? i.push(a) : u >= 4352 && m(u) ? i.push(e, t) : i.push(e);
            }return i;
        }, this.$getStringScreenWidth = function (e, t, n) {
            if (t == 0) return [0, 0];t == null && (t = Infinity), n = n || 0;var r, i;for (i = 0; i < e.length; i++) {
                r = e.charCodeAt(i), r == 9 ? n += this.getScreenTabSize(n) : r >= 4352 && m(r) ? n += 2 : n += 1;if (n > t) break;
            }return [n, i];
        }, this.lineWidgets = null, this.getRowLength = function (e) {
            var t = 1;return this.lineWidgets && (t += this.lineWidgets[e] && this.lineWidgets[e].rowCount || 0), !this.$useWrapMode || !this.$wrapData[e] ? t : this.$wrapData[e].length + t;
        }, this.getRowLineCount = function (e) {
            return !this.$useWrapMode || !this.$wrapData[e] ? 1 : this.$wrapData[e].length + 1;
        }, this.getRowWrapIndent = function (e) {
            if (this.$useWrapMode) {
                var t = this.screenToDocumentPosition(e, Number.MAX_VALUE),
                    n = this.$wrapData[t.row];return n.length && n[0] < t.column ? n.indent : 0;
            }return 0;
        }, this.getScreenLastRowColumn = function (e) {
            var t = this.screenToDocumentPosition(e, Number.MAX_VALUE);return this.documentToScreenColumn(t.row, t.column);
        }, this.getDocumentLastRowColumn = function (e, t) {
            var n = this.documentToScreenRow(e, t);return this.getScreenLastRowColumn(n);
        }, this.getDocumentLastRowColumnPosition = function (e, t) {
            var n = this.documentToScreenRow(e, t);return this.screenToDocumentPosition(n, Number.MAX_VALUE / 10);
        }, this.getRowSplitData = function (e) {
            return this.$useWrapMode ? this.$wrapData[e] : undefined;
        }, this.getScreenTabSize = function (e) {
            return this.$tabSize - (e % this.$tabSize | 0);
        }, this.screenToDocumentRow = function (e, t) {
            return this.screenToDocumentPosition(e, t).row;
        }, this.screenToDocumentColumn = function (e, t) {
            return this.screenToDocumentPosition(e, t).column;
        }, this.screenToDocumentPosition = function (e, t, n) {
            if (e < 0) return { row: 0, column: 0 };var r,
                i = 0,
                s = 0,
                o,
                u = 0,
                a = 0,
                f = this.$screenRowCache,
                l = this.$getRowCacheIndex(f, e),
                c = f.length;if (c && l >= 0) var u = f[l],
                i = this.$docRowCache[l],
                h = e > f[c - 1];else var h = !c;var p = this.getLength() - 1,
                d = this.getNextFoldLine(i),
                v = d ? d.start.row : Infinity;while (u <= e) {
                a = this.getRowLength(i);if (u + a > e || i >= p) break;u += a, i++, i > v && (i = d.end.row + 1, d = this.getNextFoldLine(i, d), v = d ? d.start.row : Infinity), h && (this.$docRowCache.push(i), this.$screenRowCache.push(u));
            }if (d && d.start.row <= i) r = this.getFoldDisplayLine(d), i = d.start.row;else {
                if (u + a <= e || i > p) return { row: p, column: this.getLine(p).length };r = this.getLine(i), d = null;
            }var m = 0,
                g = Math.floor(e - u);if (this.$useWrapMode) {
                var y = this.$wrapData[i];y && (o = y[g], g > 0 && y.length && (m = y.indent, s = y[g - 1] || y[y.length - 1], r = r.substring(s)));
            }return n !== undefined && this.$bidiHandler.isBidiRow(u + g, i, g) && (t = this.$bidiHandler.offsetToCol(n)), s += this.$getStringScreenWidth(r, t - m)[1], this.$useWrapMode && s >= o && (s = o - 1), d ? d.idxToPosition(s) : { row: i, column: s };
        }, this.documentToScreenPosition = function (e, t) {
            if (typeof t == "undefined") var n = this.$clipPositionToDocument(e.row, e.column);else n = this.$clipPositionToDocument(e, t);e = n.row, t = n.column;var r = 0,
                i = null,
                s = null;s = this.getFoldAt(e, t, 1), s && (e = s.start.row, t = s.start.column);var o,
                u = 0,
                a = this.$docRowCache,
                f = this.$getRowCacheIndex(a, e),
                l = a.length;if (l && f >= 0) var u = a[f],
                r = this.$screenRowCache[f],
                c = e > a[l - 1];else var c = !l;var h = this.getNextFoldLine(u),
                p = h ? h.start.row : Infinity;while (u < e) {
                if (u >= p) {
                    o = h.end.row + 1;if (o > e) break;h = this.getNextFoldLine(o, h), p = h ? h.start.row : Infinity;
                } else o = u + 1;r += this.getRowLength(u), u = o, c && (this.$docRowCache.push(u), this.$screenRowCache.push(r));
            }var d = "";h && u >= p ? (d = this.getFoldDisplayLine(h, e, t), i = h.start.row) : (d = this.getLine(e).substring(0, t), i = e);var v = 0;if (this.$useWrapMode) {
                var m = this.$wrapData[i];if (m) {
                    var g = 0;while (d.length >= m[g]) {
                        r++, g++;
                    }d = d.substring(m[g - 1] || 0, d.length), v = g > 0 ? m.indent : 0;
                }
            }return this.lineWidgets && this.lineWidgets[u] && this.lineWidgets[u].rowsAbove && (r += this.lineWidgets[u].rowsAbove), { row: r, column: v + this.$getStringScreenWidth(d)[0] };
        }, this.documentToScreenColumn = function (e, t) {
            return this.documentToScreenPosition(e, t).column;
        }, this.documentToScreenRow = function (e, t) {
            return this.documentToScreenPosition(e, t).row;
        }, this.getScreenLength = function () {
            var e = 0,
                t = null;if (!this.$useWrapMode) {
                e = this.getLength();var n = this.$foldData;for (var r = 0; r < n.length; r++) {
                    t = n[r], e -= t.end.row - t.start.row;
                }
            } else {
                var i = this.$wrapData.length,
                    s = 0,
                    r = 0,
                    t = this.$foldData[r++],
                    o = t ? t.start.row : Infinity;while (s < i) {
                    var u = this.$wrapData[s];e += u ? u.length + 1 : 1, s++, s > o && (s = t.end.row + 1, t = this.$foldData[r++], o = t ? t.start.row : Infinity);
                }
            }return this.lineWidgets && (e += this.$getWidgetScreenLength()), e;
        }, this.$setFontMetrics = function (e) {
            if (!this.$enableVarChar) return;this.$getStringScreenWidth = function (t, n, r) {
                if (n === 0) return [0, 0];n || (n = Infinity), r = r || 0;var i, s;for (s = 0; s < t.length; s++) {
                    i = t.charAt(s), i === "	" ? r += this.getScreenTabSize(r) : r += e.getCharacterWidth(i);if (r > n) break;
                }return [r, s];
            };
        }, this.destroy = function () {
            this.bgTokenizer && (this.bgTokenizer.setDocument(null), this.bgTokenizer = null), this.$stopWorker();
        }, this.isFullWidth = m;
    }.call(d.prototype), e("./edit_session/folding").Folding.call(d.prototype), e("./edit_session/bracket_match").BracketMatch.call(d.prototype), o.defineOptions(d.prototype, "session", { wrap: { set: function set(e) {
                !e || e == "off" ? e = !1 : e == "free" ? e = !0 : e == "printMargin" ? e = -1 : typeof e == "string" && (e = parseInt(e, 10) || !1);if (this.$wrap == e) return;this.$wrap = e;if (!e) this.setUseWrapMode(!1);else {
                    var t = typeof e == "number" ? e : null;this.setWrapLimitRange(t, t), this.setUseWrapMode(!0);
                }
            }, get: function get() {
                return this.getUseWrapMode() ? this.$wrap == -1 ? "printMargin" : this.getWrapLimitRange().min ? this.$wrap : "free" : "off";
            }, handlesSet: !0 }, wrapMethod: { set: function set(e) {
                e = e == "auto" ? this.$mode.type != "text" : e != "text", e != this.$wrapAsCode && (this.$wrapAsCode = e, this.$useWrapMode && (this.$useWrapMode = !1, this.setUseWrapMode(!0)));
            }, initialValue: "auto" }, indentedSoftWrap: { set: function set() {
                this.$useWrapMode && (this.$useWrapMode = !1, this.setUseWrapMode(!0));
            }, initialValue: !0 }, firstLineNumber: { set: function set() {
                this._signal("changeBreakpoint");
            }, initialValue: 1 }, useWorker: { set: function set(e) {
                this.$useWorker = e, this.$stopWorker(), e && this.$startWorker();
            }, initialValue: !0 }, useSoftTabs: { initialValue: !0 }, tabSize: { set: function set(e) {
                e = parseInt(e), e > 0 && this.$tabSize !== e && (this.$modified = !0, this.$rowLengthCache = [], this.$tabSize = e, this._signal("changeTabSize"));
            }, initialValue: 4, handlesSet: !0 }, navigateWithinSoftTabs: { initialValue: !1 }, foldStyle: { set: function set(e) {
                this.setFoldStyle(e);
            }, handlesSet: !0 }, overwrite: { set: function set(e) {
                this._signal("changeOverwrite");
            }, initialValue: !1 }, newLineMode: { set: function set(e) {
                this.doc.setNewLineMode(e);
            }, get: function get() {
                return this.doc.getNewLineMode();
            }, handlesSet: !0 }, mode: { set: function set(e) {
                this.setMode(e);
            }, get: function get() {
                return this.$modeId;
            }, handlesSet: !0 } }), t.EditSession = d;
}), ace.define("ace/search", ["require", "exports", "module", "ace/lib/lang", "ace/lib/oop", "ace/range"], function (e, t, n) {
    "use strict";
    function u(e, t) {
        function n(e) {
            return (/\w/.test(e) || t.regExp ? "\\b" : ""
            );
        }return n(e[0]) + e + n(e[e.length - 1]);
    }var r = e("./lib/lang"),
        i = e("./lib/oop"),
        s = e("./range").Range,
        o = function o() {
        this.$options = {};
    };(function () {
        this.set = function (e) {
            return i.mixin(this.$options, e), this;
        }, this.getOptions = function () {
            return r.copyObject(this.$options);
        }, this.setOptions = function (e) {
            this.$options = e;
        }, this.find = function (e) {
            var t = this.$options,
                n = this.$matchIterator(e, t);if (!n) return !1;var r = null;return n.forEach(function (e, n, i, o) {
                return r = new s(e, n, i, o), n == o && t.start && t.start.start && t.skipCurrent != 0 && r.isEqual(t.start) ? (r = null, !1) : !0;
            }), r;
        }, this.findAll = function (e) {
            var t = this.$options;if (!t.needle) return [];this.$assembleRegExp(t);var n = t.range,
                i = n ? e.getLines(n.start.row, n.end.row) : e.doc.getAllLines(),
                o = [],
                u = t.re;if (t.$isMultiLine) {
                var a = u.length,
                    f = i.length - a,
                    l;e: for (var c = u.offset || 0; c <= f; c++) {
                    for (var h = 0; h < a; h++) {
                        if (i[c + h].search(u[h]) == -1) continue e;
                    }var p = i[c],
                        d = i[c + a - 1],
                        v = p.length - p.match(u[0])[0].length,
                        m = d.match(u[a - 1])[0].length;if (l && l.end.row === c && l.end.column > v) continue;o.push(l = new s(c, v, c + a - 1, m)), a > 2 && (c = c + a - 2);
                }
            } else for (var g = 0; g < i.length; g++) {
                var y = r.getMatchOffsets(i[g], u);for (var h = 0; h < y.length; h++) {
                    var b = y[h];o.push(new s(g, b.offset, g, b.offset + b.length));
                }
            }if (n) {
                var w = n.start.column,
                    E = n.start.column,
                    g = 0,
                    h = o.length - 1;while (g < h && o[g].start.column < w && o[g].start.row == n.start.row) {
                    g++;
                }while (g < h && o[h].end.column > E && o[h].end.row == n.end.row) {
                    h--;
                }o = o.slice(g, h + 1);for (g = 0, h = o.length; g < h; g++) {
                    o[g].start.row += n.start.row, o[g].end.row += n.start.row;
                }
            }return o;
        }, this.replace = function (e, t) {
            var n = this.$options,
                r = this.$assembleRegExp(n);if (n.$isMultiLine) return t;if (!r) return;var i = r.exec(e);if (!i || i[0].length != e.length) return null;t = e.replace(r, t);if (n.preserveCase) {
                t = t.split("");for (var s = Math.min(e.length, e.length); s--;) {
                    var o = e[s];o && o.toLowerCase() != o ? t[s] = t[s].toUpperCase() : t[s] = t[s].toLowerCase();
                }t = t.join("");
            }return t;
        }, this.$assembleRegExp = function (e, t) {
            if (e.needle instanceof RegExp) return e.re = e.needle;var n = e.needle;if (!e.needle) return e.re = !1;e.regExp || (n = r.escapeRegExp(n)), e.wholeWord && (n = u(n, e));var i = e.caseSensitive ? "gm" : "gmi";e.$isMultiLine = !t && /[\n\r]/.test(n);if (e.$isMultiLine) return e.re = this.$assembleMultilineRegExp(n, i);try {
                var s = new RegExp(n, i);
            } catch (o) {
                s = !1;
            }return e.re = s;
        }, this.$assembleMultilineRegExp = function (e, t) {
            var n = e.replace(/\r\n|\r|\n/g, "$\n^").split("\n"),
                r = [];for (var i = 0; i < n.length; i++) {
                try {
                    r.push(new RegExp(n[i], t));
                } catch (s) {
                    return !1;
                }
            }return r;
        }, this.$matchIterator = function (e, t) {
            var n = this.$assembleRegExp(t);if (!n) return !1;var r = t.backwards == 1,
                i = t.skipCurrent != 0,
                s = t.range,
                o = t.start;o || (o = s ? s[r ? "end" : "start"] : e.selection.getRange()), o.start && (o = o[i != r ? "end" : "start"]);var u = s ? s.start.row : 0,
                a = s ? s.end.row : e.getLength() - 1;if (r) var f = function f(e) {
                var n = o.row;if (c(n, o.column, e)) return;for (n--; n >= u; n--) {
                    if (c(n, Number.MAX_VALUE, e)) return;
                }if (t.wrap == 0) return;for (n = a, u = o.row; n >= u; n--) {
                    if (c(n, Number.MAX_VALUE, e)) return;
                }
            };else var f = function f(e) {
                var n = o.row;if (c(n, o.column, e)) return;for (n += 1; n <= a; n++) {
                    if (c(n, 0, e)) return;
                }if (t.wrap == 0) return;for (n = u, a = o.row; n <= a; n++) {
                    if (c(n, 0, e)) return;
                }
            };if (t.$isMultiLine) var l = n.length,
                c = function c(t, i, s) {
                var o = r ? t - l + 1 : t;if (o < 0) return;var u = e.getLine(o),
                    a = u.search(n[0]);if (!r && a < i || a === -1) return;for (var f = 1; f < l; f++) {
                    u = e.getLine(o + f);if (u.search(n[f]) == -1) return;
                }var c = u.match(n[l - 1])[0].length;if (r && c > i) return;if (s(o, a, o + l - 1, c)) return !0;
            };else if (r) var c = function c(t, r, i) {
                var s = e.getLine(t),
                    o = [],
                    u,
                    a = 0;n.lastIndex = 0;while (u = n.exec(s)) {
                    var f = u[0].length;a = u.index;if (!f) {
                        if (a >= s.length) break;n.lastIndex = a += 1;
                    }if (u.index + f > r) break;o.push(u.index, f);
                }for (var l = o.length - 1; l >= 0; l -= 2) {
                    var c = o[l - 1],
                        f = o[l];if (i(t, c, t, c + f)) return !0;
                }
            };else var c = function c(t, r, i) {
                var s = e.getLine(t),
                    o,
                    u;n.lastIndex = r;while (u = n.exec(s)) {
                    var a = u[0].length;o = u.index;if (i(t, o, t, o + a)) return !0;if (!a) {
                        n.lastIndex = o += 1;if (o >= s.length) return !1;
                    }
                }
            };return { forEach: f };
        };
    }).call(o.prototype), t.Search = o;
}), ace.define("ace/keyboard/hash_handler", ["require", "exports", "module", "ace/lib/keys", "ace/lib/useragent"], function (e, t, n) {
    "use strict";
    function o(e, t) {
        this.platform = t || (i.isMac ? "mac" : "win"), this.commands = {}, this.commandKeyBinding = {}, this.addCommands(e), this.$singleCommand = !0;
    }function u(e, t) {
        o.call(this, e, t), this.$singleCommand = !1;
    }var r = e("../lib/keys"),
        i = e("../lib/useragent"),
        s = r.KEY_MODS;u.prototype = o.prototype, function () {
        function e(e) {
            return (typeof e === "undefined" ? "undefined" : _typeof(e)) == "object" && e.bindKey && e.bindKey.position || (e.isDefault ? -100 : 0);
        }this.addCommand = function (e) {
            this.commands[e.name] && this.removeCommand(e), this.commands[e.name] = e, e.bindKey && this._buildKeyHash(e);
        }, this.removeCommand = function (e, t) {
            var n = e && (typeof e == "string" ? e : e.name);e = this.commands[n], t || delete this.commands[n];var r = this.commandKeyBinding;for (var i in r) {
                var s = r[i];if (s == e) delete r[i];else if (Array.isArray(s)) {
                    var o = s.indexOf(e);o != -1 && (s.splice(o, 1), s.length == 1 && (r[i] = s[0]));
                }
            }
        }, this.bindKey = function (e, t, n) {
            (typeof e === "undefined" ? "undefined" : _typeof(e)) == "object" && e && (n == undefined && (n = e.position), e = e[this.platform]);if (!e) return;if (typeof t == "function") return this.addCommand({ exec: t, bindKey: e, name: t.name || e });e.split("|").forEach(function (e) {
                var r = "";if (e.indexOf(" ") != -1) {
                    var i = e.split(/\s+/);e = i.pop(), i.forEach(function (e) {
                        var t = this.parseKeys(e),
                            n = s[t.hashId] + t.key;r += (r ? " " : "") + n, this._addCommandToBinding(r, "chainKeys");
                    }, this), r += " ";
                }var o = this.parseKeys(e),
                    u = s[o.hashId] + o.key;this._addCommandToBinding(r + u, t, n);
            }, this);
        }, this._addCommandToBinding = function (t, n, r) {
            var i = this.commandKeyBinding,
                s;if (!n) delete i[t];else if (!i[t] || this.$singleCommand) i[t] = n;else {
                Array.isArray(i[t]) ? (s = i[t].indexOf(n)) != -1 && i[t].splice(s, 1) : i[t] = [i[t]], typeof r != "number" && (r = e(n));var o = i[t];for (s = 0; s < o.length; s++) {
                    var u = o[s],
                        a = e(u);if (a > r) break;
                }o.splice(s, 0, n);
            }
        }, this.addCommands = function (e) {
            e && Object.keys(e).forEach(function (t) {
                var n = e[t];if (!n) return;if (typeof n == "string") return this.bindKey(n, t);typeof n == "function" && (n = { exec: n });if ((typeof n === "undefined" ? "undefined" : _typeof(n)) != "object") return;n.name || (n.name = t), this.addCommand(n);
            }, this);
        }, this.removeCommands = function (e) {
            Object.keys(e).forEach(function (t) {
                this.removeCommand(e[t]);
            }, this);
        }, this.bindKeys = function (e) {
            Object.keys(e).forEach(function (t) {
                this.bindKey(t, e[t]);
            }, this);
        }, this._buildKeyHash = function (e) {
            this.bindKey(e.bindKey, e);
        }, this.parseKeys = function (e) {
            var t = e.toLowerCase().split(/[\-\+]([\-\+])?/).filter(function (e) {
                return e;
            }),
                n = t.pop(),
                i = r[n];if (r.FUNCTION_KEYS[i]) n = r.FUNCTION_KEYS[i].toLowerCase();else {
                if (!t.length) return { key: n, hashId: -1 };if (t.length == 1 && t[0] == "shift") return { key: n.toUpperCase(), hashId: -1 };
            }var s = 0;for (var o = t.length; o--;) {
                var u = r.KEY_MODS[t[o]];if (u == null) return typeof console != "undefined" && console.error("invalid modifier " + t[o] + " in " + e), !1;s |= u;
            }return { key: n, hashId: s };
        }, this.findKeyCommand = function (t, n) {
            var r = s[t] + n;return this.commandKeyBinding[r];
        }, this.handleKeyboard = function (e, t, n, r) {
            if (r < 0) return;var i = s[t] + n,
                o = this.commandKeyBinding[i];e.$keyChain && (e.$keyChain += " " + i, o = this.commandKeyBinding[e.$keyChain] || o);if (o) if (o == "chainKeys" || o[o.length - 1] == "chainKeys") return e.$keyChain = e.$keyChain || i, { command: "null" };if (e.$keyChain) if (!!t && t != 4 || n.length != 1) {
                if (t == -1 || r > 0) e.$keyChain = "";
            } else e.$keyChain = e.$keyChain.slice(0, -i.length - 1);return { command: o };
        }, this.getStatusText = function (e, t) {
            return t.$keyChain || "";
        };
    }.call(o.prototype), t.HashHandler = o, t.MultiHashHandler = u;
}), ace.define("ace/commands/command_manager", ["require", "exports", "module", "ace/lib/oop", "ace/keyboard/hash_handler", "ace/lib/event_emitter"], function (e, t, n) {
    "use strict";
    var r = e("../lib/oop"),
        i = e("../keyboard/hash_handler").MultiHashHandler,
        s = e("../lib/event_emitter").EventEmitter,
        o = function o(e, t) {
        i.call(this, t, e), this.byName = this.commands, this.setDefaultHandler("exec", function (e) {
            return e.command.exec(e.editor, e.args || {});
        });
    };r.inherits(o, i), function () {
        r.implement(this, s), this.exec = function (e, t, n) {
            if (Array.isArray(e)) {
                for (var r = e.length; r--;) {
                    if (this.exec(e[r], t, n)) return !0;
                }return !1;
            }typeof e == "string" && (e = this.commands[e]);if (!e) return !1;if (t && t.$readOnly && !e.readOnly) return !1;if (this.$checkCommandState != 0 && e.isAvailable && !e.isAvailable(t)) return !1;var i = { editor: t, command: e, args: n };return i.returnValue = this._emit("exec", i), this._signal("afterExec", i), i.returnValue === !1 ? !1 : !0;
        }, this.toggleRecording = function (e) {
            if (this.$inReplay) return;return e && e._emit("changeStatus"), this.recording ? (this.macro.pop(), this.removeEventListener("exec", this.$addCommandToMacro), this.macro.length || (this.macro = this.oldMacro), this.recording = !1) : (this.$addCommandToMacro || (this.$addCommandToMacro = function (e) {
                this.macro.push([e.command, e.args]);
            }.bind(this)), this.oldMacro = this.macro, this.macro = [], this.on("exec", this.$addCommandToMacro), this.recording = !0);
        }, this.replay = function (e) {
            if (this.$inReplay || !this.macro) return;if (this.recording) return this.toggleRecording(e);try {
                this.$inReplay = !0, this.macro.forEach(function (t) {
                    typeof t == "string" ? this.exec(t, e) : this.exec(t[0], e, t[1]);
                }, this);
            } finally {
                this.$inReplay = !1;
            }
        }, this.trimMacro = function (e) {
            return e.map(function (e) {
                return typeof e[0] != "string" && (e[0] = e[0].name), e[1] || (e = e[0]), e;
            });
        };
    }.call(o.prototype), t.CommandManager = o;
}), ace.define("ace/commands/default_commands", ["require", "exports", "module", "ace/lib/lang", "ace/config", "ace/range"], function (e, t, n) {
    "use strict";
    function o(e, t) {
        return { win: e, mac: t };
    }var r = e("../lib/lang"),
        i = e("../config"),
        s = e("../range").Range;t.commands = [{ name: "showSettingsMenu", bindKey: o("Ctrl-,", "Command-,"), exec: function exec(e) {
            i.loadModule("ace/ext/settings_menu", function (t) {
                t.init(e), e.showSettingsMenu();
            });
        }, readOnly: !0 }, { name: "goToNextError", bindKey: o("Alt-E", "F4"), exec: function exec(e) {
            i.loadModule("./ext/error_marker", function (t) {
                t.showErrorMarker(e, 1);
            });
        }, scrollIntoView: "animate", readOnly: !0 }, { name: "goToPreviousError", bindKey: o("Alt-Shift-E", "Shift-F4"), exec: function exec(e) {
            i.loadModule("./ext/error_marker", function (t) {
                t.showErrorMarker(e, -1);
            });
        }, scrollIntoView: "animate", readOnly: !0 }, { name: "selectall", description: "Select all", bindKey: o("Ctrl-A", "Command-A"), exec: function exec(e) {
            e.selectAll();
        }, readOnly: !0 }, { name: "centerselection", description: "Center selection", bindKey: o(null, "Ctrl-L"), exec: function exec(e) {
            e.centerSelection();
        }, readOnly: !0 }, { name: "gotoline", description: "Go to line...", bindKey: o("Ctrl-L", "Command-L"), exec: function exec(e, t) {
            typeof t == "number" && !isNaN(t) && e.gotoLine(t), e.prompt({ $type: "gotoLine" });
        }, readOnly: !0 }, { name: "fold", bindKey: o("Alt-L|Ctrl-F1", "Command-Alt-L|Command-F1"), exec: function exec(e) {
            e.session.toggleFold(!1);
        }, multiSelectAction: "forEach", scrollIntoView: "center", readOnly: !0 }, { name: "unfold", bindKey: o("Alt-Shift-L|Ctrl-Shift-F1", "Command-Alt-Shift-L|Command-Shift-F1"), exec: function exec(e) {
            e.session.toggleFold(!0);
        }, multiSelectAction: "forEach", scrollIntoView: "center", readOnly: !0 }, { name: "toggleFoldWidget", bindKey: o("F2", "F2"), exec: function exec(e) {
            e.session.toggleFoldWidget();
        }, multiSelectAction: "forEach", scrollIntoView: "center", readOnly: !0 }, { name: "toggleParentFoldWidget", bindKey: o("Alt-F2", "Alt-F2"), exec: function exec(e) {
            e.session.toggleFoldWidget(!0);
        }, multiSelectAction: "forEach", scrollIntoView: "center", readOnly: !0 }, { name: "foldall", description: "Fold all", bindKey: o(null, "Ctrl-Command-Option-0"), exec: function exec(e) {
            e.session.foldAll();
        }, scrollIntoView: "center", readOnly: !0 }, { name: "foldOther", description: "Fold other", bindKey: o("Alt-0", "Command-Option-0"), exec: function exec(e) {
            e.session.foldAll(), e.session.unfold(e.selection.getAllRanges());
        }, scrollIntoView: "center", readOnly: !0 }, { name: "unfoldall", description: "Unfold all", bindKey: o("Alt-Shift-0", "Command-Option-Shift-0"), exec: function exec(e) {
            e.session.unfold();
        }, scrollIntoView: "center", readOnly: !0 }, { name: "findnext", description: "Find next", bindKey: o("Ctrl-K", "Command-G"), exec: function exec(e) {
            e.findNext();
        }, multiSelectAction: "forEach", scrollIntoView: "center", readOnly: !0 }, { name: "findprevious", description: "Find previous", bindKey: o("Ctrl-Shift-K", "Command-Shift-G"), exec: function exec(e) {
            e.findPrevious();
        }, multiSelectAction: "forEach", scrollIntoView: "center", readOnly: !0 }, { name: "selectOrFindNext", description: "Select or find next", bindKey: o("Alt-K", "Ctrl-G"), exec: function exec(e) {
            e.selection.isEmpty() ? e.selection.selectWord() : e.findNext();
        }, readOnly: !0 }, { name: "selectOrFindPrevious", description: "Select or find previous", bindKey: o("Alt-Shift-K", "Ctrl-Shift-G"), exec: function exec(e) {
            e.selection.isEmpty() ? e.selection.selectWord() : e.findPrevious();
        }, readOnly: !0 }, { name: "find", description: "Find", bindKey: o("Ctrl-F", "Command-F"), exec: function exec(e) {
            i.loadModule("ace/ext/searchbox", function (t) {
                t.Search(e);
            });
        }, readOnly: !0 }, { name: "overwrite", description: "Overwrite", bindKey: "Insert", exec: function exec(e) {
            e.toggleOverwrite();
        }, readOnly: !0 }, { name: "selecttostart", description: "Select to start", bindKey: o("Ctrl-Shift-Home", "Command-Shift-Home|Command-Shift-Up"), exec: function exec(e) {
            e.getSelection().selectFileStart();
        }, multiSelectAction: "forEach", readOnly: !0, scrollIntoView: "animate", aceCommandGroup: "fileJump" }, { name: "gotostart", description: "Go to start", bindKey: o("Ctrl-Home", "Command-Home|Command-Up"), exec: function exec(e) {
            e.navigateFileStart();
        }, multiSelectAction: "forEach", readOnly: !0, scrollIntoView: "animate", aceCommandGroup: "fileJump" }, { name: "selectup", description: "Select up", bindKey: o("Shift-Up", "Shift-Up|Ctrl-Shift-P"), exec: function exec(e) {
            e.getSelection().selectUp();
        }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0 }, { name: "golineup", description: "Go line up", bindKey: o("Up", "Up|Ctrl-P"), exec: function exec(e, t) {
            e.navigateUp(t.times);
        }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0 }, { name: "selecttoend", description: "Select to end", bindKey: o("Ctrl-Shift-End", "Command-Shift-End|Command-Shift-Down"), exec: function exec(e) {
            e.getSelection().selectFileEnd();
        }, multiSelectAction: "forEach", readOnly: !0, scrollIntoView: "animate", aceCommandGroup: "fileJump" }, { name: "gotoend", description: "Go to end", bindKey: o("Ctrl-End", "Command-End|Command-Down"), exec: function exec(e) {
            e.navigateFileEnd();
        }, multiSelectAction: "forEach", readOnly: !0, scrollIntoView: "animate", aceCommandGroup: "fileJump" }, { name: "selectdown", description: "Select down", bindKey: o("Shift-Down", "Shift-Down|Ctrl-Shift-N"), exec: function exec(e) {
            e.getSelection().selectDown();
        }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0 }, { name: "golinedown", description: "Go line down", bindKey: o("Down", "Down|Ctrl-N"), exec: function exec(e, t) {
            e.navigateDown(t.times);
        }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0 }, { name: "selectwordleft", description: "Select word left", bindKey: o("Ctrl-Shift-Left", "Option-Shift-Left"), exec: function exec(e) {
            e.getSelection().selectWordLeft();
        }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0 }, { name: "gotowordleft", description: "Go to word left", bindKey: o("Ctrl-Left", "Option-Left"), exec: function exec(e) {
            e.navigateWordLeft();
        }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0 }, { name: "selecttolinestart", description: "Select to line start", bindKey: o("Alt-Shift-Left", "Command-Shift-Left|Ctrl-Shift-A"), exec: function exec(e) {
            e.getSelection().selectLineStart();
        }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0 }, { name: "gotolinestart", description: "Go to line start", bindKey: o("Alt-Left|Home", "Command-Left|Home|Ctrl-A"), exec: function exec(e) {
            e.navigateLineStart();
        }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0 }, { name: "selectleft", description: "Select left", bindKey: o("Shift-Left", "Shift-Left|Ctrl-Shift-B"), exec: function exec(e) {
            e.getSelection().selectLeft();
        }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0 }, { name: "gotoleft", description: "Go to left", bindKey: o("Left", "Left|Ctrl-B"), exec: function exec(e, t) {
            e.navigateLeft(t.times);
        }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0 }, { name: "selectwordright", description: "Select word right", bindKey: o("Ctrl-Shift-Right", "Option-Shift-Right"), exec: function exec(e) {
            e.getSelection().selectWordRight();
        }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0 }, { name: "gotowordright", description: "Go to word right", bindKey: o("Ctrl-Right", "Option-Right"), exec: function exec(e) {
            e.navigateWordRight();
        }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0 }, { name: "selecttolineend", description: "Select to line end", bindKey: o("Alt-Shift-Right", "Command-Shift-Right|Shift-End|Ctrl-Shift-E"), exec: function exec(e) {
            e.getSelection().selectLineEnd();
        }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0 }, { name: "gotolineend", description: "Go to line end", bindKey: o("Alt-Right|End", "Command-Right|End|Ctrl-E"), exec: function exec(e) {
            e.navigateLineEnd();
        }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0 }, { name: "selectright", description: "Select right", bindKey: o("Shift-Right", "Shift-Right"), exec: function exec(e) {
            e.getSelection().selectRight();
        }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0 }, { name: "gotoright", description: "Go to right", bindKey: o("Right", "Right|Ctrl-F"), exec: function exec(e, t) {
            e.navigateRight(t.times);
        }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0 }, { name: "selectpagedown", description: "Select page down", bindKey: "Shift-PageDown", exec: function exec(e) {
            e.selectPageDown();
        }, readOnly: !0 }, { name: "pagedown", description: "Page down", bindKey: o(null, "Option-PageDown"), exec: function exec(e) {
            e.scrollPageDown();
        }, readOnly: !0 }, { name: "gotopagedown", description: "Go to page down", bindKey: o("PageDown", "PageDown|Ctrl-V"), exec: function exec(e) {
            e.gotoPageDown();
        }, readOnly: !0 }, { name: "selectpageup", description: "Select page up", bindKey: "Shift-PageUp", exec: function exec(e) {
            e.selectPageUp();
        }, readOnly: !0 }, { name: "pageup", description: "Page up", bindKey: o(null, "Option-PageUp"), exec: function exec(e) {
            e.scrollPageUp();
        }, readOnly: !0 }, { name: "gotopageup", description: "Go to page up", bindKey: "PageUp", exec: function exec(e) {
            e.gotoPageUp();
        }, readOnly: !0 }, { name: "scrollup", description: "Scroll up", bindKey: o("Ctrl-Up", null), exec: function exec(e) {
            e.renderer.scrollBy(0, -2 * e.renderer.layerConfig.lineHeight);
        }, readOnly: !0 }, { name: "scrolldown", description: "Scroll down", bindKey: o("Ctrl-Down", null), exec: function exec(e) {
            e.renderer.scrollBy(0, 2 * e.renderer.layerConfig.lineHeight);
        }, readOnly: !0 }, { name: "selectlinestart", description: "Select line start", bindKey: "Shift-Home", exec: function exec(e) {
            e.getSelection().selectLineStart();
        }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0 }, { name: "selectlineend", description: "Select line end", bindKey: "Shift-End", exec: function exec(e) {
            e.getSelection().selectLineEnd();
        }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0 }, { name: "togglerecording", description: "Toggle recording", bindKey: o("Ctrl-Alt-E", "Command-Option-E"), exec: function exec(e) {
            e.commands.toggleRecording(e);
        }, readOnly: !0 }, { name: "replaymacro", description: "Replay macro", bindKey: o("Ctrl-Shift-E", "Command-Shift-E"), exec: function exec(e) {
            e.commands.replay(e);
        }, readOnly: !0 }, { name: "jumptomatching", description: "Jump to matching", bindKey: o("Ctrl-\\|Ctrl-P", "Command-\\"), exec: function exec(e) {
            e.jumpToMatching();
        }, multiSelectAction: "forEach", scrollIntoView: "animate", readOnly: !0 }, { name: "selecttomatching", description: "Select to matching", bindKey: o("Ctrl-Shift-\\|Ctrl-Shift-P", "Command-Shift-\\"), exec: function exec(e) {
            e.jumpToMatching(!0);
        }, multiSelectAction: "forEach", scrollIntoView: "animate", readOnly: !0 }, { name: "expandToMatching", description: "Expand to matching", bindKey: o("Ctrl-Shift-M", "Ctrl-Shift-M"), exec: function exec(e) {
            e.jumpToMatching(!0, !0);
        }, multiSelectAction: "forEach", scrollIntoView: "animate", readOnly: !0 }, { name: "passKeysToBrowser", description: "Pass keys to browser", bindKey: o(null, null), exec: function exec() {}, passEvent: !0, readOnly: !0 }, { name: "copy", description: "Copy", exec: function exec(e) {}, readOnly: !0 }, { name: "cut", description: "Cut", exec: function exec(e) {
            var t = e.$copyWithEmptySelection && e.selection.isEmpty(),
                n = t ? e.selection.getLineRange() : e.selection.getRange();e._emit("cut", n), n.isEmpty() || e.session.remove(n), e.clearSelection();
        }, scrollIntoView: "cursor", multiSelectAction: "forEach" }, { name: "paste", description: "Paste", exec: function exec(e, t) {
            e.$handlePaste(t);
        }, scrollIntoView: "cursor" }, { name: "removeline", description: "Remove line", bindKey: o("Ctrl-D", "Command-D"), exec: function exec(e) {
            e.removeLines();
        }, scrollIntoView: "cursor", multiSelectAction: "forEachLine" }, { name: "duplicateSelection", description: "Duplicate selection", bindKey: o("Ctrl-Shift-D", "Command-Shift-D"), exec: function exec(e) {
            e.duplicateSelection();
        }, scrollIntoView: "cursor", multiSelectAction: "forEach" }, { name: "sortlines", description: "Sort lines", bindKey: o("Ctrl-Alt-S", "Command-Alt-S"), exec: function exec(e) {
            e.sortLines();
        }, scrollIntoView: "selection", multiSelectAction: "forEachLine" }, { name: "togglecomment", description: "Toggle comment", bindKey: o("Ctrl-/", "Command-/"), exec: function exec(e) {
            e.toggleCommentLines();
        }, multiSelectAction: "forEachLine", scrollIntoView: "selectionPart" }, { name: "toggleBlockComment", description: "Toggle block comment", bindKey: o("Ctrl-Shift-/", "Command-Shift-/"), exec: function exec(e) {
            e.toggleBlockComment();
        }, multiSelectAction: "forEach", scrollIntoView: "selectionPart" }, { name: "modifyNumberUp", description: "Modify number up", bindKey: o("Ctrl-Shift-Up", "Alt-Shift-Up"), exec: function exec(e) {
            e.modifyNumber(1);
        }, scrollIntoView: "cursor", multiSelectAction: "forEach" }, { name: "modifyNumberDown", description: "Modify number down", bindKey: o("Ctrl-Shift-Down", "Alt-Shift-Down"), exec: function exec(e) {
            e.modifyNumber(-1);
        }, scrollIntoView: "cursor", multiSelectAction: "forEach" }, { name: "replace", description: "Replace", bindKey: o("Ctrl-H", "Command-Option-F"), exec: function exec(e) {
            i.loadModule("ace/ext/searchbox", function (t) {
                t.Search(e, !0);
            });
        } }, { name: "undo", description: "Undo", bindKey: o("Ctrl-Z", "Command-Z"), exec: function exec(e) {
            e.undo();
        } }, { name: "redo", description: "Redo", bindKey: o("Ctrl-Shift-Z|Ctrl-Y", "Command-Shift-Z|Command-Y"), exec: function exec(e) {
            e.redo();
        } }, { name: "copylinesup", description: "Copy lines up", bindKey: o("Alt-Shift-Up", "Command-Option-Up"), exec: function exec(e) {
            e.copyLinesUp();
        }, scrollIntoView: "cursor" }, { name: "movelinesup", description: "Move lines up", bindKey: o("Alt-Up", "Option-Up"), exec: function exec(e) {
            e.moveLinesUp();
        }, scrollIntoView: "cursor" }, { name: "copylinesdown", description: "Copy lines down", bindKey: o("Alt-Shift-Down", "Command-Option-Down"), exec: function exec(e) {
            e.copyLinesDown();
        }, scrollIntoView: "cursor" }, { name: "movelinesdown", description: "Move lines down", bindKey: o("Alt-Down", "Option-Down"), exec: function exec(e) {
            e.moveLinesDown();
        }, scrollIntoView: "cursor" }, { name: "del", description: "Delete", bindKey: o("Delete", "Delete|Ctrl-D|Shift-Delete"), exec: function exec(e) {
            e.remove("right");
        }, multiSelectAction: "forEach", scrollIntoView: "cursor" }, { name: "backspace", description: "Backspace", bindKey: o("Shift-Backspace|Backspace", "Ctrl-Backspace|Shift-Backspace|Backspace|Ctrl-H"), exec: function exec(e) {
            e.remove("left");
        }, multiSelectAction: "forEach", scrollIntoView: "cursor" }, { name: "cut_or_delete", description: "Cut or delete", bindKey: o("Shift-Delete", null), exec: function exec(e) {
            if (!e.selection.isEmpty()) return !1;e.remove("left");
        }, multiSelectAction: "forEach", scrollIntoView: "cursor" }, { name: "removetolinestart", description: "Remove to line start", bindKey: o("Alt-Backspace", "Command-Backspace"), exec: function exec(e) {
            e.removeToLineStart();
        }, multiSelectAction: "forEach", scrollIntoView: "cursor" }, { name: "removetolineend", description: "Remove to line end", bindKey: o("Alt-Delete", "Ctrl-K|Command-Delete"), exec: function exec(e) {
            e.removeToLineEnd();
        }, multiSelectAction: "forEach", scrollIntoView: "cursor" }, { name: "removetolinestarthard", description: "Remove to line start hard", bindKey: o("Ctrl-Shift-Backspace", null), exec: function exec(e) {
            var t = e.selection.getRange();t.start.column = 0, e.session.remove(t);
        }, multiSelectAction: "forEach", scrollIntoView: "cursor" }, { name: "removetolineendhard", description: "Remove to line end hard", bindKey: o("Ctrl-Shift-Delete", null), exec: function exec(e) {
            var t = e.selection.getRange();t.end.column = Number.MAX_VALUE, e.session.remove(t);
        }, multiSelectAction: "forEach", scrollIntoView: "cursor" }, { name: "removewordleft", description: "Remove word left", bindKey: o("Ctrl-Backspace", "Alt-Backspace|Ctrl-Alt-Backspace"), exec: function exec(e) {
            e.removeWordLeft();
        }, multiSelectAction: "forEach", scrollIntoView: "cursor" }, { name: "removewordright", description: "Remove word right", bindKey: o("Ctrl-Delete", "Alt-Delete"), exec: function exec(e) {
            e.removeWordRight();
        }, multiSelectAction: "forEach", scrollIntoView: "cursor" }, { name: "outdent", description: "Outdent", bindKey: o("Shift-Tab", "Shift-Tab"), exec: function exec(e) {
            e.blockOutdent();
        }, multiSelectAction: "forEach", scrollIntoView: "selectionPart" }, { name: "indent", description: "Indent", bindKey: o("Tab", "Tab"), exec: function exec(e) {
            e.indent();
        }, multiSelectAction: "forEach", scrollIntoView: "selectionPart" }, { name: "blockoutdent", description: "Block outdent", bindKey: o("Ctrl-[", "Ctrl-["), exec: function exec(e) {
            e.blockOutdent();
        }, multiSelectAction: "forEachLine", scrollIntoView: "selectionPart" }, { name: "blockindent", description: "Block indent", bindKey: o("Ctrl-]", "Ctrl-]"), exec: function exec(e) {
            e.blockIndent();
        }, multiSelectAction: "forEachLine", scrollIntoView: "selectionPart" }, { name: "insertstring", description: "Insert string", exec: function exec(e, t) {
            e.insert(t);
        }, multiSelectAction: "forEach", scrollIntoView: "cursor" }, { name: "inserttext", description: "Insert text", exec: function exec(e, t) {
            e.insert(r.stringRepeat(t.text || "", t.times || 1));
        }, multiSelectAction: "forEach", scrollIntoView: "cursor" }, { name: "splitline", description: "Split line", bindKey: o(null, "Ctrl-O"), exec: function exec(e) {
            e.splitLine();
        }, multiSelectAction: "forEach", scrollIntoView: "cursor" }, { name: "transposeletters", description: "Transpose letters", bindKey: o("Alt-Shift-X", "Ctrl-T"), exec: function exec(e) {
            e.transposeLetters();
        }, multiSelectAction: function multiSelectAction(e) {
            e.transposeSelections(1);
        }, scrollIntoView: "cursor" }, { name: "touppercase", description: "To uppercase", bindKey: o("Ctrl-U", "Ctrl-U"), exec: function exec(e) {
            e.toUpperCase();
        }, multiSelectAction: "forEach", scrollIntoView: "cursor" }, { name: "tolowercase", description: "To lowercase", bindKey: o("Ctrl-Shift-U", "Ctrl-Shift-U"), exec: function exec(e) {
            e.toLowerCase();
        }, multiSelectAction: "forEach", scrollIntoView: "cursor" }, { name: "expandtoline", description: "Expand to line", bindKey: o("Ctrl-Shift-L", "Command-Shift-L"), exec: function exec(e) {
            var t = e.selection.getRange();t.start.column = t.end.column = 0, t.end.row++, e.selection.setRange(t, !1);
        }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0 }, { name: "joinlines", description: "Join lines", bindKey: o(null, null), exec: function exec(e) {
            var t = e.selection.isBackwards(),
                n = t ? e.selection.getSelectionLead() : e.selection.getSelectionAnchor(),
                i = t ? e.selection.getSelectionAnchor() : e.selection.getSelectionLead(),
                o = e.session.doc.getLine(n.row).length,
                u = e.session.doc.getTextRange(e.selection.getRange()),
                a = u.replace(/\n\s*/, " ").length,
                f = e.session.doc.getLine(n.row);for (var l = n.row + 1; l <= i.row + 1; l++) {
                var c = r.stringTrimLeft(r.stringTrimRight(e.session.doc.getLine(l)));c.length !== 0 && (c = " " + c), f += c;
            }i.row + 1 < e.session.doc.getLength() - 1 && (f += e.session.doc.getNewLineCharacter()), e.clearSelection(), e.session.doc.replace(new s(n.row, 0, i.row + 2, 0), f), a > 0 ? (e.selection.moveCursorTo(n.row, n.column), e.selection.selectTo(n.row, n.column + a)) : (o = e.session.doc.getLine(n.row).length > o ? o + 1 : o, e.selection.moveCursorTo(n.row, o));
        }, multiSelectAction: "forEach", readOnly: !0 }, { name: "invertSelection", description: "Invert selection", bindKey: o(null, null), exec: function exec(e) {
            var t = e.session.doc.getLength() - 1,
                n = e.session.doc.getLine(t).length,
                r = e.selection.rangeList.ranges,
                i = [];r.length < 1 && (r = [e.selection.getRange()]);for (var o = 0; o < r.length; o++) {
                o == r.length - 1 && (r[o].end.row !== t || r[o].end.column !== n) && i.push(new s(r[o].end.row, r[o].end.column, t, n)), o === 0 ? (r[o].start.row !== 0 || r[o].start.column !== 0) && i.push(new s(0, 0, r[o].start.row, r[o].start.column)) : i.push(new s(r[o - 1].end.row, r[o - 1].end.column, r[o].start.row, r[o].start.column));
            }e.exitMultiSelectMode(), e.clearSelection();for (var o = 0; o < i.length; o++) {
                e.selection.addRange(i[o], !1);
            }
        }, readOnly: !0, scrollIntoView: "none" }, { name: "addLineAfter", exec: function exec(e) {
            e.selection.clearSelection(), e.navigateLineEnd(), e.insert("\n");
        }, multiSelectAction: "forEach", scrollIntoView: "cursor" }, { name: "addLineBefore", exec: function exec(e) {
            e.selection.clearSelection();var t = e.getCursorPosition();e.selection.moveTo(t.row - 1, Number.MAX_VALUE), e.insert("\n"), t.row === 0 && e.navigateUp();
        }, multiSelectAction: "forEach", scrollIntoView: "cursor" }, { name: "openCommandPallete", description: "Open command pallete", bindKey: o("F1", "F1"), exec: function exec(e) {
            e.prompt({ $type: "commands" });
        }, readOnly: !0 }, { name: "modeSelect", description: "Change language mode...", bindKey: o(null, null), exec: function exec(e) {
            e.prompt({ $type: "modes" });
        }, readOnly: !0 }];
}), ace.define("ace/editor", ["require", "exports", "module", "ace/lib/fixoldbrowsers", "ace/lib/oop", "ace/lib/dom", "ace/lib/lang", "ace/lib/useragent", "ace/keyboard/textinput", "ace/mouse/mouse_handler", "ace/mouse/fold_handler", "ace/keyboard/keybinding", "ace/edit_session", "ace/search", "ace/range", "ace/lib/event_emitter", "ace/commands/command_manager", "ace/commands/default_commands", "ace/config", "ace/token_iterator", "ace/clipboard"], function (e, t, n) {
    "use strict";
    e("./lib/fixoldbrowsers");var r = e("./lib/oop"),
        i = e("./lib/dom"),
        s = e("./lib/lang"),
        o = e("./lib/useragent"),
        u = e("./keyboard/textinput").TextInput,
        a = e("./mouse/mouse_handler").MouseHandler,
        f = e("./mouse/fold_handler").FoldHandler,
        l = e("./keyboard/keybinding").KeyBinding,
        c = e("./edit_session").EditSession,
        h = e("./search").Search,
        p = e("./range").Range,
        d = e("./lib/event_emitter").EventEmitter,
        v = e("./commands/command_manager").CommandManager,
        m = e("./commands/default_commands").commands,
        g = e("./config"),
        y = e("./token_iterator").TokenIterator,
        b = e("./clipboard"),
        w = function w(e, t, n) {
        var r = e.getContainerElement();this.container = r, this.renderer = e, this.id = "editor" + ++w.$uid, this.commands = new v(o.isMac ? "mac" : "win", m), (typeof document === "undefined" ? "undefined" : _typeof(document)) == "object" && (this.textInput = new u(e.getTextAreaContainer(), this), this.renderer.textarea = this.textInput.getElement(), this.$mouseHandler = new a(this), new f(this)), this.keyBinding = new l(this), this.$search = new h().set({ wrap: !0 }), this.$historyTracker = this.$historyTracker.bind(this), this.commands.on("exec", this.$historyTracker), this.$initOperationListeners(), this._$emitInputEvent = s.delayedCall(function () {
            this._signal("input", {}), this.session && this.session.bgTokenizer && this.session.bgTokenizer.scheduleStart();
        }.bind(this)), this.on("change", function (e, t) {
            t._$emitInputEvent.schedule(31);
        }), this.setSession(t || n && n.session || new c("")), g.resetOptions(this), n && this.setOptions(n), g._signal("editor", this);
    };w.$uid = 0, function () {
        r.implement(this, d), this.$initOperationListeners = function () {
            this.commands.on("exec", this.startOperation.bind(this), !0), this.commands.on("afterExec", this.endOperation.bind(this), !0), this.$opResetTimer = s.delayedCall(this.endOperation.bind(this, !0)), this.on("change", function () {
                this.curOp || (this.startOperation(), this.curOp.selectionBefore = this.$lastSel), this.curOp.docChanged = !0;
            }.bind(this), !0), this.on("changeSelection", function () {
                this.curOp || (this.startOperation(), this.curOp.selectionBefore = this.$lastSel), this.curOp.selectionChanged = !0;
            }.bind(this), !0);
        }, this.curOp = null, this.prevOp = {}, this.startOperation = function (e) {
            if (this.curOp) {
                if (!e || this.curOp.command) return;this.prevOp = this.curOp;
            }e || (this.previousCommand = null, e = {}), this.$opResetTimer.schedule(), this.curOp = this.session.curOp = { command: e.command || {}, args: e.args, scrollTop: this.renderer.scrollTop }, this.curOp.selectionBefore = this.selection.toJSON();
        }, this.endOperation = function (e) {
            if (this.curOp) {
                if (e && e.returnValue === !1) return this.curOp = null;if (e == 1 && this.curOp.command && this.curOp.command.name == "mouse") return;this._signal("beforeEndOperation");if (!this.curOp) return;var t = this.curOp.command,
                    n = t && t.scrollIntoView;if (n) {
                    switch (n) {case "center-animate":
                            n = "animate";case "center":
                            this.renderer.scrollCursorIntoView(null, .5);break;case "animate":case "cursor":
                            this.renderer.scrollCursorIntoView();break;case "selectionPart":
                            var r = this.selection.getRange(),
                                i = this.renderer.layerConfig;(r.start.row >= i.lastRow || r.end.row <= i.firstRow) && this.renderer.scrollSelectionIntoView(this.selection.anchor, this.selection.lead);break;default:}n == "animate" && this.renderer.animateScrolling(this.curOp.scrollTop);
                }var s = this.selection.toJSON();this.curOp.selectionAfter = s, this.$lastSel = this.selection.toJSON(), this.session.getUndoManager().addSelection(s), this.prevOp = this.curOp, this.curOp = null;
            }
        }, this.$mergeableCommands = ["backspace", "del", "insertstring"], this.$historyTracker = function (e) {
            if (!this.$mergeUndoDeltas) return;var t = this.prevOp,
                n = this.$mergeableCommands,
                r = t.command && e.command.name == t.command.name;if (e.command.name == "insertstring") {
                var i = e.args;this.mergeNextCommand === undefined && (this.mergeNextCommand = !0), r = r && this.mergeNextCommand && (!/\s/.test(i) || /\s/.test(t.args)), this.mergeNextCommand = !0;
            } else r = r && n.indexOf(e.command.name) !== -1;this.$mergeUndoDeltas != "always" && Date.now() - this.sequenceStartTime > 2e3 && (r = !1), r ? this.session.mergeUndoDeltas = !0 : n.indexOf(e.command.name) !== -1 && (this.sequenceStartTime = Date.now());
        }, this.setKeyboardHandler = function (e, t) {
            if (e && typeof e == "string" && e != "ace") {
                this.$keybindingId = e;var n = this;g.loadModule(["keybinding", e], function (r) {
                    n.$keybindingId == e && n.keyBinding.setKeyboardHandler(r && r.handler), t && t();
                });
            } else this.$keybindingId = null, this.keyBinding.setKeyboardHandler(e), t && t();
        }, this.getKeyboardHandler = function () {
            return this.keyBinding.getKeyboardHandler();
        }, this.setSession = function (e) {
            if (this.session == e) return;this.curOp && this.endOperation(), this.curOp = {};var t = this.session;if (t) {
                this.session.off("change", this.$onDocumentChange), this.session.off("changeMode", this.$onChangeMode), this.session.off("tokenizerUpdate", this.$onTokenizerUpdate), this.session.off("changeTabSize", this.$onChangeTabSize), this.session.off("changeWrapLimit", this.$onChangeWrapLimit), this.session.off("changeWrapMode", this.$onChangeWrapMode), this.session.off("changeFold", this.$onChangeFold), this.session.off("changeFrontMarker", this.$onChangeFrontMarker), this.session.off("changeBackMarker", this.$onChangeBackMarker), this.session.off("changeBreakpoint", this.$onChangeBreakpoint), this.session.off("changeAnnotation", this.$onChangeAnnotation), this.session.off("changeOverwrite", this.$onCursorChange), this.session.off("changeScrollTop", this.$onScrollTopChange), this.session.off("changeScrollLeft", this.$onScrollLeftChange);var n = this.session.getSelection();n.off("changeCursor", this.$onCursorChange), n.off("changeSelection", this.$onSelectionChange);
            }this.session = e, e ? (this.$onDocumentChange = this.onDocumentChange.bind(this), e.on("change", this.$onDocumentChange), this.renderer.setSession(e), this.$onChangeMode = this.onChangeMode.bind(this), e.on("changeMode", this.$onChangeMode), this.$onTokenizerUpdate = this.onTokenizerUpdate.bind(this), e.on("tokenizerUpdate", this.$onTokenizerUpdate), this.$onChangeTabSize = this.renderer.onChangeTabSize.bind(this.renderer), e.on("changeTabSize", this.$onChangeTabSize), this.$onChangeWrapLimit = this.onChangeWrapLimit.bind(this), e.on("changeWrapLimit", this.$onChangeWrapLimit), this.$onChangeWrapMode = this.onChangeWrapMode.bind(this), e.on("changeWrapMode", this.$onChangeWrapMode), this.$onChangeFold = this.onChangeFold.bind(this), e.on("changeFold", this.$onChangeFold), this.$onChangeFrontMarker = this.onChangeFrontMarker.bind(this), this.session.on("changeFrontMarker", this.$onChangeFrontMarker), this.$onChangeBackMarker = this.onChangeBackMarker.bind(this), this.session.on("changeBackMarker", this.$onChangeBackMarker), this.$onChangeBreakpoint = this.onChangeBreakpoint.bind(this), this.session.on("changeBreakpoint", this.$onChangeBreakpoint), this.$onChangeAnnotation = this.onChangeAnnotation.bind(this), this.session.on("changeAnnotation", this.$onChangeAnnotation), this.$onCursorChange = this.onCursorChange.bind(this), this.session.on("changeOverwrite", this.$onCursorChange), this.$onScrollTopChange = this.onScrollTopChange.bind(this), this.session.on("changeScrollTop", this.$onScrollTopChange), this.$onScrollLeftChange = this.onScrollLeftChange.bind(this), this.session.on("changeScrollLeft", this.$onScrollLeftChange), this.selection = e.getSelection(), this.selection.on("changeCursor", this.$onCursorChange), this.$onSelectionChange = this.onSelectionChange.bind(this), this.selection.on("changeSelection", this.$onSelectionChange), this.onChangeMode(), this.onCursorChange(), this.onScrollTopChange(), this.onScrollLeftChange(), this.onSelectionChange(), this.onChangeFrontMarker(), this.onChangeBackMarker(), this.onChangeBreakpoint(), this.onChangeAnnotation(), this.session.getUseWrapMode() && this.renderer.adjustWrapLimit(), this.renderer.updateFull()) : (this.selection = null, this.renderer.setSession(e)), this._signal("changeSession", { session: e, oldSession: t }), this.curOp = null, t && t._signal("changeEditor", { oldEditor: this }), e && e._signal("changeEditor", { editor: this }), e && e.bgTokenizer && e.bgTokenizer.scheduleStart();
        }, this.getSession = function () {
            return this.session;
        }, this.setValue = function (e, t) {
            return this.session.doc.setValue(e), t ? t == 1 ? this.navigateFileEnd() : t == -1 && this.navigateFileStart() : this.selectAll(), e;
        }, this.getValue = function () {
            return this.session.getValue();
        }, this.getSelection = function () {
            return this.selection;
        }, this.resize = function (e) {
            this.renderer.onResize(e);
        }, this.setTheme = function (e, t) {
            this.renderer.setTheme(e, t);
        }, this.getTheme = function () {
            return this.renderer.getTheme();
        }, this.setStyle = function (e) {
            this.renderer.setStyle(e);
        }, this.unsetStyle = function (e) {
            this.renderer.unsetStyle(e);
        }, this.getFontSize = function () {
            return this.getOption("fontSize") || i.computedStyle(this.container).fontSize;
        }, this.setFontSize = function (e) {
            this.setOption("fontSize", e);
        }, this.$highlightBrackets = function () {
            if (this.$highlightPending) return;var e = this;this.$highlightPending = !0, setTimeout(function () {
                e.$highlightPending = !1;var t = e.session;if (!t || !t.bgTokenizer) return;t.$bracketHighlight && (t.$bracketHighlight.markerIds.forEach(function (e) {
                    t.removeMarker(e);
                }), t.$bracketHighlight = null);var n = t.getMatchingBracketRanges(e.getCursorPosition());!n && t.$mode.getMatching && (n = t.$mode.getMatching(e.session));if (!n) return;var r = "ace_bracket";Array.isArray(n) ? n.length == 1 && (r = "ace_error_bracket") : n = [n], n.length == 2 && (p.comparePoints(n[0].end, n[1].start) == 0 ? n = [p.fromPoints(n[0].start, n[1].end)] : p.comparePoints(n[0].start, n[1].end) == 0 && (n = [p.fromPoints(n[1].start, n[0].end)])), t.$bracketHighlight = { ranges: n, markerIds: n.map(function (e) {
                        return t.addMarker(e, r, "text");
                    }) };
            }, 50);
        }, this.$highlightTags = function () {
            if (this.$highlightTagPending) return;var e = this;this.$highlightTagPending = !0, setTimeout(function () {
                e.$highlightTagPending = !1;var t = e.session;if (!t || !t.bgTokenizer) return;var n = e.getCursorPosition(),
                    r = new y(e.session, n.row, n.column),
                    i = r.getCurrentToken();if (!i || !/\b(?:tag-open|tag-name)/.test(i.type)) {
                    t.removeMarker(t.$tagHighlight), t.$tagHighlight = null;return;
                }if (i.type.indexOf("tag-open") != -1) {
                    i = r.stepForward();if (!i) return;
                }var s = i.value,
                    o = 0,
                    u = r.stepBackward();if (u.value == "<") {
                    do {
                        u = i, i = r.stepForward(), i && i.value === s && i.type.indexOf("tag-name") !== -1 && (u.value === "<" ? o++ : u.value === "</" && o--);
                    } while (i && o >= 0);
                } else {
                    do {
                        i = u, u = r.stepBackward(), i && i.value === s && i.type.indexOf("tag-name") !== -1 && (u.value === "<" ? o++ : u.value === "</" && o--);
                    } while (u && o <= 0);r.stepForward();
                }if (!i) {
                    t.removeMarker(t.$tagHighlight), t.$tagHighlight = null;return;
                }var a = r.getCurrentTokenRow(),
                    f = r.getCurrentTokenColumn(),
                    l = new p(a, f, a, f + i.value.length),
                    c = t.$backMarkers[t.$tagHighlight];t.$tagHighlight && c != undefined && l.compareRange(c.range) !== 0 && (t.removeMarker(t.$tagHighlight), t.$tagHighlight = null), t.$tagHighlight || (t.$tagHighlight = t.addMarker(l, "ace_bracket", "text"));
            }, 50);
        }, this.focus = function () {
            var e = this;setTimeout(function () {
                e.isFocused() || e.textInput.focus();
            }), this.textInput.focus();
        }, this.isFocused = function () {
            return this.textInput.isFocused();
        }, this.blur = function () {
            this.textInput.blur();
        }, this.onFocus = function (e) {
            if (this.$isFocused) return;this.$isFocused = !0, this.renderer.showCursor(), this.renderer.visualizeFocus(), this._emit("focus", e);
        }, this.onBlur = function (e) {
            if (!this.$isFocused) return;this.$isFocused = !1, this.renderer.hideCursor(), this.renderer.visualizeBlur(), this._emit("blur", e);
        }, this.$cursorChange = function () {
            this.renderer.updateCursor();
        }, this.onDocumentChange = function (e) {
            var t = this.session.$useWrapMode,
                n = e.start.row == e.end.row ? e.end.row : Infinity;this.renderer.updateLines(e.start.row, n, t), this._signal("change", e), this.$cursorChange(), this.$updateHighlightActiveLine();
        }, this.onTokenizerUpdate = function (e) {
            var t = e.data;this.renderer.updateLines(t.first, t.last);
        }, this.onScrollTopChange = function () {
            this.renderer.scrollToY(this.session.getScrollTop());
        }, this.onScrollLeftChange = function () {
            this.renderer.scrollToX(this.session.getScrollLeft());
        }, this.onCursorChange = function () {
            this.$cursorChange(), this.$highlightBrackets(), this.$highlightTags(), this.$updateHighlightActiveLine(), this._signal("changeSelection");
        }, this.$updateHighlightActiveLine = function () {
            var e = this.getSession(),
                t;if (this.$highlightActiveLine) {
                if (this.$selectionStyle != "line" || !this.selection.isMultiLine()) t = this.getCursorPosition();this.renderer.theme && this.renderer.theme.$selectionColorConflict && !this.selection.isEmpty() && (t = !1), this.renderer.$maxLines && this.session.getLength() === 1 && !(this.renderer.$minLines > 1) && (t = !1);
            }if (e.$highlightLineMarker && !t) e.removeMarker(e.$highlightLineMarker.id), e.$highlightLineMarker = null;else if (!e.$highlightLineMarker && t) {
                var n = new p(t.row, t.column, t.row, Infinity);n.id = e.addMarker(n, "ace_active-line", "screenLine"), e.$highlightLineMarker = n;
            } else t && (e.$highlightLineMarker.start.row = t.row, e.$highlightLineMarker.end.row = t.row, e.$highlightLineMarker.start.column = t.column, e._signal("changeBackMarker"));
        }, this.onSelectionChange = function (e) {
            var t = this.session;t.$selectionMarker && t.removeMarker(t.$selectionMarker), t.$selectionMarker = null;if (!this.selection.isEmpty()) {
                var n = this.selection.getRange(),
                    r = this.getSelectionStyle();t.$selectionMarker = t.addMarker(n, "ace_selection", r);
            } else this.$updateHighlightActiveLine();var i = this.$highlightSelectedWord && this.$getSelectionHighLightRegexp();this.session.highlight(i), this._signal("changeSelection");
        }, this.$getSelectionHighLightRegexp = function () {
            var e = this.session,
                t = this.getSelectionRange();if (t.isEmpty() || t.isMultiLine()) return;var n = t.start.column,
                r = t.end.column,
                i = e.getLine(t.start.row),
                s = i.substring(n, r);if (s.length > 5e3 || !/[\w\d]/.test(s)) return;var o = this.$search.$assembleRegExp({ wholeWord: !0, caseSensitive: !0, needle: s }),
                u = i.substring(n - 1, r + 1);if (!o.test(u)) return;return o;
        }, this.onChangeFrontMarker = function () {
            this.renderer.updateFrontMarkers();
        }, this.onChangeBackMarker = function () {
            this.renderer.updateBackMarkers();
        }, this.onChangeBreakpoint = function () {
            this.renderer.updateBreakpoints();
        }, this.onChangeAnnotation = function () {
            this.renderer.setAnnotations(this.session.getAnnotations());
        }, this.onChangeMode = function (e) {
            this.renderer.updateText(), this._emit("changeMode", e);
        }, this.onChangeWrapLimit = function () {
            this.renderer.updateFull();
        }, this.onChangeWrapMode = function () {
            this.renderer.onResize(!0);
        }, this.onChangeFold = function () {
            this.$updateHighlightActiveLine(), this.renderer.updateFull();
        }, this.getSelectedText = function () {
            return this.session.getTextRange(this.getSelectionRange());
        }, this.getCopyText = function () {
            var e = this.getSelectedText(),
                t = this.session.doc.getNewLineCharacter(),
                n = !1;if (!e && this.$copyWithEmptySelection) {
                n = !0;var r = this.selection.getAllRanges();for (var i = 0; i < r.length; i++) {
                    var s = r[i];if (i && r[i - 1].start.row == s.start.row) continue;e += this.session.getLine(s.start.row) + t;
                }
            }var o = { text: e };return this._signal("copy", o), b.lineMode = n ? o.text : "", o.text;
        }, this.onCopy = function () {
            this.commands.exec("copy", this);
        }, this.onCut = function () {
            this.commands.exec("cut", this);
        }, this.onPaste = function (e, t) {
            var n = { text: e, event: t };this.commands.exec("paste", this, n);
        }, this.$handlePaste = function (e) {
            typeof e == "string" && (e = { text: e }), this._signal("paste", e);var t = e.text,
                n = t == b.lineMode,
                r = this.session;if (!this.inMultiSelectMode || this.inVirtualSelectionMode) n ? r.insert({ row: this.selection.lead.row, column: 0 }, t) : this.insert(t);else if (n) this.selection.rangeList.ranges.forEach(function (e) {
                r.insert({ row: e.start.row, column: 0 }, t);
            });else {
                var i = t.split(/\r\n|\r|\n/),
                    s = this.selection.rangeList.ranges,
                    o = i.length == 2 && (!i[0] || !i[1]);if (i.length != s.length || o) return this.commands.exec("insertstring", this, t);for (var u = s.length; u--;) {
                    var a = s[u];a.isEmpty() || r.remove(a), r.insert(a.start, i[u]);
                }
            }
        }, this.execCommand = function (e, t) {
            return this.commands.exec(e, this, t);
        }, this.insert = function (e, t) {
            var n = this.session,
                r = n.getMode(),
                i = this.getCursorPosition();if (this.getBehavioursEnabled() && !t) {
                var s = r.transformAction(n.getState(i.row), "insertion", this, n, e);s && (e !== s.text && (this.inVirtualSelectionMode || (this.session.mergeUndoDeltas = !1, this.mergeNextCommand = !1)), e = s.text);
            }e == "	" && (e = this.session.getTabString());if (!this.selection.isEmpty()) {
                var o = this.getSelectionRange();i = this.session.remove(o), this.clearSelection();
            } else if (this.session.getOverwrite() && e.indexOf("\n") == -1) {
                var o = new p.fromPoints(i, i);o.end.column += e.length, this.session.remove(o);
            }if (e == "\n" || e == "\r\n") {
                var u = n.getLine(i.row);if (i.column > u.search(/\S|$/)) {
                    var a = u.substr(i.column).search(/\S|$/);n.doc.removeInLine(i.row, i.column, i.column + a);
                }
            }this.clearSelection();var f = i.column,
                l = n.getState(i.row),
                u = n.getLine(i.row),
                c = r.checkOutdent(l, u, e);n.insert(i, e), s && s.selection && (s.selection.length == 2 ? this.selection.setSelectionRange(new p(i.row, f + s.selection[0], i.row, f + s.selection[1])) : this.selection.setSelectionRange(new p(i.row + s.selection[0], s.selection[1], i.row + s.selection[2], s.selection[3])));if (n.getDocument().isNewLine(e)) {
                var h = r.getNextLineIndent(l, u.slice(0, i.column), n.getTabString());n.insert({ row: i.row + 1, column: 0 }, h);
            }c && r.autoOutdent(l, n, i.row);
        }, this.onTextInput = function (e, t) {
            if (!t) return this.keyBinding.onTextInput(e);this.startOperation({ command: { name: "insertstring" } });var n = this.applyComposition.bind(this, e, t);this.selection.rangeCount ? this.forEachSelection(n) : n(), this.endOperation();
        }, this.applyComposition = function (e, t) {
            if (t.extendLeft || t.extendRight) {
                var n = this.selection.getRange();n.start.column -= t.extendLeft, n.end.column += t.extendRight, this.selection.setRange(n), !e && !n.isEmpty() && this.remove();
            }(e || !this.selection.isEmpty()) && this.insert(e, !0);if (t.restoreStart || t.restoreEnd) {
                var n = this.selection.getRange();n.start.column -= t.restoreStart, n.end.column -= t.restoreEnd, this.selection.setRange(n);
            }
        }, this.onCommandKey = function (e, t, n) {
            return this.keyBinding.onCommandKey(e, t, n);
        }, this.setOverwrite = function (e) {
            this.session.setOverwrite(e);
        }, this.getOverwrite = function () {
            return this.session.getOverwrite();
        }, this.toggleOverwrite = function () {
            this.session.toggleOverwrite();
        }, this.setScrollSpeed = function (e) {
            this.setOption("scrollSpeed", e);
        }, this.getScrollSpeed = function () {
            return this.getOption("scrollSpeed");
        }, this.setDragDelay = function (e) {
            this.setOption("dragDelay", e);
        }, this.getDragDelay = function () {
            return this.getOption("dragDelay");
        }, this.setSelectionStyle = function (e) {
            this.setOption("selectionStyle", e);
        }, this.getSelectionStyle = function () {
            return this.getOption("selectionStyle");
        }, this.setHighlightActiveLine = function (e) {
            this.setOption("highlightActiveLine", e);
        }, this.getHighlightActiveLine = function () {
            return this.getOption("highlightActiveLine");
        }, this.setHighlightGutterLine = function (e) {
            this.setOption("highlightGutterLine", e);
        }, this.getHighlightGutterLine = function () {
            return this.getOption("highlightGutterLine");
        }, this.setHighlightSelectedWord = function (e) {
            this.setOption("highlightSelectedWord", e);
        }, this.getHighlightSelectedWord = function () {
            return this.$highlightSelectedWord;
        }, this.setAnimatedScroll = function (e) {
            this.renderer.setAnimatedScroll(e);
        }, this.getAnimatedScroll = function () {
            return this.renderer.getAnimatedScroll();
        }, this.setShowInvisibles = function (e) {
            this.renderer.setShowInvisibles(e);
        }, this.getShowInvisibles = function () {
            return this.renderer.getShowInvisibles();
        }, this.setDisplayIndentGuides = function (e) {
            this.renderer.setDisplayIndentGuides(e);
        }, this.getDisplayIndentGuides = function () {
            return this.renderer.getDisplayIndentGuides();
        }, this.setShowPrintMargin = function (e) {
            this.renderer.setShowPrintMargin(e);
        }, this.getShowPrintMargin = function () {
            return this.renderer.getShowPrintMargin();
        }, this.setPrintMarginColumn = function (e) {
            this.renderer.setPrintMarginColumn(e);
        }, this.getPrintMarginColumn = function () {
            return this.renderer.getPrintMarginColumn();
        }, this.setReadOnly = function (e) {
            this.setOption("readOnly", e);
        }, this.getReadOnly = function () {
            return this.getOption("readOnly");
        }, this.setBehavioursEnabled = function (e) {
            this.setOption("behavioursEnabled", e);
        }, this.getBehavioursEnabled = function () {
            return this.getOption("behavioursEnabled");
        }, this.setWrapBehavioursEnabled = function (e) {
            this.setOption("wrapBehavioursEnabled", e);
        }, this.getWrapBehavioursEnabled = function () {
            return this.getOption("wrapBehavioursEnabled");
        }, this.setShowFoldWidgets = function (e) {
            this.setOption("showFoldWidgets", e);
        }, this.getShowFoldWidgets = function () {
            return this.getOption("showFoldWidgets");
        }, this.setFadeFoldWidgets = function (e) {
            this.setOption("fadeFoldWidgets", e);
        }, this.getFadeFoldWidgets = function () {
            return this.getOption("fadeFoldWidgets");
        }, this.remove = function (e) {
            this.selection.isEmpty() && (e == "left" ? this.selection.selectLeft() : this.selection.selectRight());var t = this.getSelectionRange();if (this.getBehavioursEnabled()) {
                var n = this.session,
                    r = n.getState(t.start.row),
                    i = n.getMode().transformAction(r, "deletion", this, n, t);if (t.end.column === 0) {
                    var s = n.getTextRange(t);if (s[s.length - 1] == "\n") {
                        var o = n.getLine(t.end.row);/^\s+$/.test(o) && (t.end.column = o.length);
                    }
                }i && (t = i);
            }this.session.remove(t), this.clearSelection();
        }, this.removeWordRight = function () {
            this.selection.isEmpty() && this.selection.selectWordRight(), this.session.remove(this.getSelectionRange()), this.clearSelection();
        }, this.removeWordLeft = function () {
            this.selection.isEmpty() && this.selection.selectWordLeft(), this.session.remove(this.getSelectionRange()), this.clearSelection();
        }, this.removeToLineStart = function () {
            this.selection.isEmpty() && this.selection.selectLineStart(), this.selection.isEmpty() && this.selection.selectLeft(), this.session.remove(this.getSelectionRange()), this.clearSelection();
        }, this.removeToLineEnd = function () {
            this.selection.isEmpty() && this.selection.selectLineEnd();var e = this.getSelectionRange();e.start.column == e.end.column && e.start.row == e.end.row && (e.end.column = 0, e.end.row++), this.session.remove(e), this.clearSelection();
        }, this.splitLine = function () {
            this.selection.isEmpty() || (this.session.remove(this.getSelectionRange()), this.clearSelection());var e = this.getCursorPosition();this.insert("\n"), this.moveCursorToPosition(e);
        }, this.transposeLetters = function () {
            if (!this.selection.isEmpty()) return;var e = this.getCursorPosition(),
                t = e.column;if (t === 0) return;var n = this.session.getLine(e.row),
                r,
                i;t < n.length ? (r = n.charAt(t) + n.charAt(t - 1), i = new p(e.row, t - 1, e.row, t + 1)) : (r = n.charAt(t - 1) + n.charAt(t - 2), i = new p(e.row, t - 2, e.row, t)), this.session.replace(i, r), this.session.selection.moveToPosition(i.end);
        }, this.toLowerCase = function () {
            var e = this.getSelectionRange();this.selection.isEmpty() && this.selection.selectWord();var t = this.getSelectionRange(),
                n = this.session.getTextRange(t);this.session.replace(t, n.toLowerCase()), this.selection.setSelectionRange(e);
        }, this.toUpperCase = function () {
            var e = this.getSelectionRange();this.selection.isEmpty() && this.selection.selectWord();var t = this.getSelectionRange(),
                n = this.session.getTextRange(t);this.session.replace(t, n.toUpperCase()), this.selection.setSelectionRange(e);
        }, this.indent = function () {
            var e = this.session,
                t = this.getSelectionRange();if (t.start.row < t.end.row) {
                var n = this.$getSelectedRows();e.indentRows(n.first, n.last, "	");return;
            }if (t.start.column < t.end.column) {
                var r = e.getTextRange(t);if (!/^\s+$/.test(r)) {
                    var n = this.$getSelectedRows();e.indentRows(n.first, n.last, "	");return;
                }
            }var i = e.getLine(t.start.row),
                o = t.start,
                u = e.getTabSize(),
                a = e.documentToScreenColumn(o.row, o.column);if (this.session.getUseSoftTabs()) var f = u - a % u,
                l = s.stringRepeat(" ", f);else {
                var f = a % u;while (i[t.start.column - 1] == " " && f) {
                    t.start.column--, f--;
                }this.selection.setSelectionRange(t), l = "	";
            }return this.insert(l);
        }, this.blockIndent = function () {
            var e = this.$getSelectedRows();this.session.indentRows(e.first, e.last, "	");
        }, this.blockOutdent = function () {
            var e = this.session.getSelection();this.session.outdentRows(e.getRange());
        }, this.sortLines = function () {
            var e = this.$getSelectedRows(),
                t = this.session,
                n = [];for (var r = e.first; r <= e.last; r++) {
                n.push(t.getLine(r));
            }n.sort(function (e, t) {
                return e.toLowerCase() < t.toLowerCase() ? -1 : e.toLowerCase() > t.toLowerCase() ? 1 : 0;
            });var i = new p(0, 0, 0, 0);for (var r = e.first; r <= e.last; r++) {
                var s = t.getLine(r);i.start.row = r, i.end.row = r, i.end.column = s.length, t.replace(i, n[r - e.first]);
            }
        }, this.toggleCommentLines = function () {
            var e = this.session.getState(this.getCursorPosition().row),
                t = this.$getSelectedRows();this.session.getMode().toggleCommentLines(e, this.session, t.first, t.last);
        }, this.toggleBlockComment = function () {
            var e = this.getCursorPosition(),
                t = this.session.getState(e.row),
                n = this.getSelectionRange();this.session.getMode().toggleBlockComment(t, this.session, n, e);
        }, this.getNumberAt = function (e, t) {
            var n = /[\-]?[0-9]+(?:\.[0-9]+)?/g;n.lastIndex = 0;var r = this.session.getLine(e);while (n.lastIndex < t) {
                var i = n.exec(r);if (i.index <= t && i.index + i[0].length >= t) {
                    var s = { value: i[0], start: i.index, end: i.index + i[0].length };return s;
                }
            }return null;
        }, this.modifyNumber = function (e) {
            var t = this.selection.getCursor().row,
                n = this.selection.getCursor().column,
                r = new p(t, n - 1, t, n),
                i = this.session.getTextRange(r);if (!isNaN(parseFloat(i)) && isFinite(i)) {
                var s = this.getNumberAt(t, n);if (s) {
                    var o = s.value.indexOf(".") >= 0 ? s.start + s.value.indexOf(".") + 1 : s.end,
                        u = s.start + s.value.length - o,
                        a = parseFloat(s.value);a *= Math.pow(10, u), o !== s.end && n < o ? e *= Math.pow(10, s.end - n - 1) : e *= Math.pow(10, s.end - n), a += e, a /= Math.pow(10, u);var f = a.toFixed(u),
                        l = new p(t, s.start, t, s.end);this.session.replace(l, f), this.moveCursorTo(t, Math.max(s.start + 1, n + f.length - s.value.length));
                }
            } else this.toggleWord();
        }, this.$toggleWordPairs = [["first", "last"], ["true", "false"], ["yes", "no"], ["width", "height"], ["top", "bottom"], ["right", "left"], ["on", "off"], ["x", "y"], ["get", "set"], ["max", "min"], ["horizontal", "vertical"], ["show", "hide"], ["add", "remove"], ["up", "down"], ["before", "after"], ["even", "odd"], ["in", "out"], ["inside", "outside"], ["next", "previous"], ["increase", "decrease"], ["attach", "detach"], ["&&", "||"], ["==", "!="]], this.toggleWord = function () {
            var e = this.selection.getCursor().row,
                t = this.selection.getCursor().column;this.selection.selectWord();var n = this.getSelectedText(),
                r = this.selection.getWordRange().start.column,
                i = n.replace(/([a-z]+|[A-Z]+)(?=[A-Z_]|$)/g, "$1 ").split(/\s/),
                o = t - r - 1;o < 0 && (o = 0);var u = 0,
                a = 0,
                f = this;n.match(/[A-Za-z0-9_]+/) && i.forEach(function (t, i) {
                a = u + t.length, o >= u && o <= a && (n = t, f.selection.clearSelection(), f.moveCursorTo(e, u + r), f.selection.selectTo(e, a + r)), u = a;
            });var l = this.$toggleWordPairs,
                c;for (var h = 0; h < l.length; h++) {
                var p = l[h];for (var d = 0; d <= 1; d++) {
                    var v = +!d,
                        m = n.match(new RegExp("^\\s?_?(" + s.escapeRegExp(p[d]) + ")\\s?$", "i"));if (m) {
                        var g = n.match(new RegExp("([_]|^|\\s)(" + s.escapeRegExp(m[1]) + ")($|\\s)", "g"));g && (c = n.replace(new RegExp(s.escapeRegExp(p[d]), "i"), function (e) {
                            var t = p[v];return e.toUpperCase() == e ? t = t.toUpperCase() : e.charAt(0).toUpperCase() == e.charAt(0) && (t = t.substr(0, 0) + p[v].charAt(0).toUpperCase() + t.substr(1)), t;
                        }), this.insert(c), c = "");
                    }
                }
            }
        }, this.removeLines = function () {
            var e = this.$getSelectedRows();this.session.removeFullLines(e.first, e.last), this.clearSelection();
        }, this.duplicateSelection = function () {
            var e = this.selection,
                t = this.session,
                n = e.getRange(),
                r = e.isBackwards();if (n.isEmpty()) {
                var i = n.start.row;t.duplicateLines(i, i);
            } else {
                var s = r ? n.start : n.end,
                    o = t.insert(s, t.getTextRange(n), !1);n.start = s, n.end = o, e.setSelectionRange(n, r);
            }
        }, this.moveLinesDown = function () {
            this.$moveLines(1, !1);
        }, this.moveLinesUp = function () {
            this.$moveLines(-1, !1);
        }, this.moveText = function (e, t, n) {
            return this.session.moveText(e, t, n);
        }, this.copyLinesUp = function () {
            this.$moveLines(-1, !0);
        }, this.copyLinesDown = function () {
            this.$moveLines(1, !0);
        }, this.$moveLines = function (e, t) {
            var n,
                r,
                i = this.selection;if (!i.inMultiSelectMode || this.inVirtualSelectionMode) {
                var s = i.toOrientedRange();n = this.$getSelectedRows(s), r = this.session.$moveLines(n.first, n.last, t ? 0 : e), t && e == -1 && (r = 0), s.moveBy(r, 0), i.fromOrientedRange(s);
            } else {
                var o = i.rangeList.ranges;i.rangeList.detach(this.session), this.inVirtualSelectionMode = !0;var u = 0,
                    a = 0,
                    f = o.length;for (var l = 0; l < f; l++) {
                    var c = l;o[l].moveBy(u, 0), n = this.$getSelectedRows(o[l]);var h = n.first,
                        p = n.last;while (++l < f) {
                        a && o[l].moveBy(a, 0);var d = this.$getSelectedRows(o[l]);if (t && d.first != p) break;if (!t && d.first > p + 1) break;p = d.last;
                    }l--, u = this.session.$moveLines(h, p, t ? 0 : e), t && e == -1 && (c = l + 1);while (c <= l) {
                        o[c].moveBy(u, 0), c++;
                    }t || (u = 0), a += u;
                }i.fromOrientedRange(i.ranges[0]), i.rangeList.attach(this.session), this.inVirtualSelectionMode = !1;
            }
        }, this.$getSelectedRows = function (e) {
            return e = (e || this.getSelectionRange()).collapseRows(), { first: this.session.getRowFoldStart(e.start.row), last: this.session.getRowFoldEnd(e.end.row) };
        }, this.onCompositionStart = function (e) {
            this.renderer.showComposition(e);
        }, this.onCompositionUpdate = function (e) {
            this.renderer.setCompositionText(e);
        }, this.onCompositionEnd = function () {
            this.renderer.hideComposition();
        }, this.getFirstVisibleRow = function () {
            return this.renderer.getFirstVisibleRow();
        }, this.getLastVisibleRow = function () {
            return this.renderer.getLastVisibleRow();
        }, this.isRowVisible = function (e) {
            return e >= this.getFirstVisibleRow() && e <= this.getLastVisibleRow();
        }, this.isRowFullyVisible = function (e) {
            return e >= this.renderer.getFirstFullyVisibleRow() && e <= this.renderer.getLastFullyVisibleRow();
        }, this.$getVisibleRowCount = function () {
            return this.renderer.getScrollBottomRow() - this.renderer.getScrollTopRow() + 1;
        }, this.$moveByPage = function (e, t) {
            var n = this.renderer,
                r = this.renderer.layerConfig,
                i = e * Math.floor(r.height / r.lineHeight);t === !0 ? this.selection.$moveSelection(function () {
                this.moveCursorBy(i, 0);
            }) : t === !1 && (this.selection.moveCursorBy(i, 0), this.selection.clearSelection());var s = n.scrollTop;n.scrollBy(0, i * r.lineHeight), t != null && n.scrollCursorIntoView(null, .5), n.animateScrolling(s);
        }, this.selectPageDown = function () {
            this.$moveByPage(1, !0);
        }, this.selectPageUp = function () {
            this.$moveByPage(-1, !0);
        }, this.gotoPageDown = function () {
            this.$moveByPage(1, !1);
        }, this.gotoPageUp = function () {
            this.$moveByPage(-1, !1);
        }, this.scrollPageDown = function () {
            this.$moveByPage(1);
        }, this.scrollPageUp = function () {
            this.$moveByPage(-1);
        }, this.scrollToRow = function (e) {
            this.renderer.scrollToRow(e);
        }, this.scrollToLine = function (e, t, n, r) {
            this.renderer.scrollToLine(e, t, n, r);
        }, this.centerSelection = function () {
            var e = this.getSelectionRange(),
                t = { row: Math.floor(e.start.row + (e.end.row - e.start.row) / 2), column: Math.floor(e.start.column + (e.end.column - e.start.column) / 2) };this.renderer.alignCursor(t, .5);
        }, this.getCursorPosition = function () {
            return this.selection.getCursor();
        }, this.getCursorPositionScreen = function () {
            return this.session.documentToScreenPosition(this.getCursorPosition());
        }, this.getSelectionRange = function () {
            return this.selection.getRange();
        }, this.selectAll = function () {
            this.selection.selectAll();
        }, this.clearSelection = function () {
            this.selection.clearSelection();
        }, this.moveCursorTo = function (e, t) {
            this.selection.moveCursorTo(e, t);
        }, this.moveCursorToPosition = function (e) {
            this.selection.moveCursorToPosition(e);
        }, this.jumpToMatching = function (e, t) {
            var n = this.getCursorPosition(),
                r = new y(this.session, n.row, n.column),
                i = r.getCurrentToken(),
                s = i || r.stepForward();if (!s) return;var o,
                u = !1,
                a = {},
                f = n.column - s.start,
                l,
                c = { ")": "(", "(": "(", "]": "[", "[": "[", "{": "{", "}": "{" };do {
                if (s.value.match(/[{}()\[\]]/g)) for (; f < s.value.length && !u; f++) {
                    if (!c[s.value[f]]) continue;l = c[s.value[f]] + "." + s.type.replace("rparen", "lparen"), isNaN(a[l]) && (a[l] = 0);switch (s.value[f]) {case "(":case "[":case "{":
                            a[l]++;break;case ")":case "]":case "}":
                            a[l]--, a[l] === -1 && (o = "bracket", u = !0);}
                } else s.type.indexOf("tag-name") !== -1 && (isNaN(a[s.value]) && (a[s.value] = 0), i.value === "<" ? a[s.value]++ : i.value === "</" && a[s.value]--, a[s.value] === -1 && (o = "tag", u = !0));u || (i = s, s = r.stepForward(), f = 0);
            } while (s && !u);if (!o) return;var h, d;if (o === "bracket") {
                h = this.session.getBracketRange(n);if (!h) {
                    h = new p(r.getCurrentTokenRow(), r.getCurrentTokenColumn() + f - 1, r.getCurrentTokenRow(), r.getCurrentTokenColumn() + f - 1), d = h.start;if (t || d.row === n.row && Math.abs(d.column - n.column) < 2) h = this.session.getBracketRange(d);
                }
            } else if (o === "tag") {
                if (!s || s.type.indexOf("tag-name") === -1) return;var v = s.value;h = new p(r.getCurrentTokenRow(), r.getCurrentTokenColumn() - 2, r.getCurrentTokenRow(), r.getCurrentTokenColumn() - 2);if (h.compare(n.row, n.column) === 0) {
                    u = !1;do {
                        s = i, i = r.stepBackward(), i && (i.type.indexOf("tag-close") !== -1 && h.setEnd(r.getCurrentTokenRow(), r.getCurrentTokenColumn() + 1), s.value === v && s.type.indexOf("tag-name") !== -1 && (i.value === "<" ? a[v]++ : i.value === "</" && a[v]--, a[v] === 0 && (u = !0)));
                    } while (i && !u);
                }s && s.type.indexOf("tag-name") && (d = h.start, d.row == n.row && Math.abs(d.column - n.column) < 2 && (d = h.end));
            }d = h && h.cursor || d, d && (e ? h && t ? this.selection.setRange(h) : h && h.isEqual(this.getSelectionRange()) ? this.clearSelection() : this.selection.selectTo(d.row, d.column) : this.selection.moveTo(d.row, d.column));
        }, this.gotoLine = function (e, t, n) {
            this.selection.clearSelection(), this.session.unfold({ row: e - 1, column: t || 0 }), this.exitMultiSelectMode && this.exitMultiSelectMode(), this.moveCursorTo(e - 1, t || 0), this.isRowFullyVisible(e - 1) || this.scrollToLine(e - 1, !0, n);
        }, this.navigateTo = function (e, t) {
            this.selection.moveTo(e, t);
        }, this.navigateUp = function (e) {
            if (this.selection.isMultiLine() && !this.selection.isBackwards()) {
                var t = this.selection.anchor.getPosition();return this.moveCursorToPosition(t);
            }this.selection.clearSelection(), this.selection.moveCursorBy(-e || -1, 0);
        }, this.navigateDown = function (e) {
            if (this.selection.isMultiLine() && this.selection.isBackwards()) {
                var t = this.selection.anchor.getPosition();return this.moveCursorToPosition(t);
            }this.selection.clearSelection(), this.selection.moveCursorBy(e || 1, 0);
        }, this.navigateLeft = function (e) {
            if (!this.selection.isEmpty()) {
                var t = this.getSelectionRange().start;this.moveCursorToPosition(t);
            } else {
                e = e || 1;while (e--) {
                    this.selection.moveCursorLeft();
                }
            }this.clearSelection();
        }, this.navigateRight = function (e) {
            if (!this.selection.isEmpty()) {
                var t = this.getSelectionRange().end;this.moveCursorToPosition(t);
            } else {
                e = e || 1;while (e--) {
                    this.selection.moveCursorRight();
                }
            }this.clearSelection();
        }, this.navigateLineStart = function () {
            this.selection.moveCursorLineStart(), this.clearSelection();
        }, this.navigateLineEnd = function () {
            this.selection.moveCursorLineEnd(), this.clearSelection();
        }, this.navigateFileEnd = function () {
            this.selection.moveCursorFileEnd(), this.clearSelection();
        }, this.navigateFileStart = function () {
            this.selection.moveCursorFileStart(), this.clearSelection();
        }, this.navigateWordRight = function () {
            this.selection.moveCursorWordRight(), this.clearSelection();
        }, this.navigateWordLeft = function () {
            this.selection.moveCursorWordLeft(), this.clearSelection();
        }, this.replace = function (e, t) {
            t && this.$search.set(t);var n = this.$search.find(this.session),
                r = 0;return n ? (this.$tryReplace(n, e) && (r = 1), this.selection.setSelectionRange(n), this.renderer.scrollSelectionIntoView(n.start, n.end), r) : r;
        }, this.replaceAll = function (e, t) {
            t && this.$search.set(t);var n = this.$search.findAll(this.session),
                r = 0;if (!n.length) return r;var i = this.getSelectionRange();this.selection.moveTo(0, 0);for (var s = n.length - 1; s >= 0; --s) {
                this.$tryReplace(n[s], e) && r++;
            }return this.selection.setSelectionRange(i), r;
        }, this.$tryReplace = function (e, t) {
            var n = this.session.getTextRange(e);return t = this.$search.replace(n, t), t !== null ? (e.end = this.session.replace(e, t), e) : null;
        }, this.getLastSearchOptions = function () {
            return this.$search.getOptions();
        }, this.find = function (e, t, n) {
            t || (t = {}), typeof e == "string" || e instanceof RegExp ? t.needle = e : (typeof e === "undefined" ? "undefined" : _typeof(e)) == "object" && r.mixin(t, e);var i = this.selection.getRange();t.needle == null && (e = this.session.getTextRange(i) || this.$search.$options.needle, e || (i = this.session.getWordRange(i.start.row, i.start.column), e = this.session.getTextRange(i)), this.$search.set({ needle: e })), this.$search.set(t), t.start || this.$search.set({ start: i });var s = this.$search.find(this.session);if (t.preventScroll) return s;if (s) return this.revealRange(s, n), s;t.backwards ? i.start = i.end : i.end = i.start, this.selection.setRange(i);
        }, this.findNext = function (e, t) {
            this.find({ skipCurrent: !0, backwards: !1 }, e, t);
        }, this.findPrevious = function (e, t) {
            this.find(e, { skipCurrent: !0, backwards: !0 }, t);
        }, this.revealRange = function (e, t) {
            this.session.unfold(e), this.selection.setSelectionRange(e);var n = this.renderer.scrollTop;this.renderer.scrollSelectionIntoView(e.start, e.end, .5), t !== !1 && this.renderer.animateScrolling(n);
        }, this.undo = function () {
            this.session.getUndoManager().undo(this.session), this.renderer.scrollCursorIntoView(null, .5);
        }, this.redo = function () {
            this.session.getUndoManager().redo(this.session), this.renderer.scrollCursorIntoView(null, .5);
        }, this.destroy = function () {
            this.renderer.destroy(), this._signal("destroy", this), this.session && this.session.destroy(), this._$emitInputEvent && this._$emitInputEvent.cancel(), this.session = null;
        }, this.setAutoScrollEditorIntoView = function (e) {
            if (!e) return;var t,
                n = this,
                r = !1;this.$scrollAnchor || (this.$scrollAnchor = document.createElement("div"));var i = this.$scrollAnchor;i.style.cssText = "position:absolute", this.container.insertBefore(i, this.container.firstChild);var s = this.on("changeSelection", function () {
                r = !0;
            }),
                o = this.renderer.on("beforeRender", function () {
                r && (t = n.renderer.container.getBoundingClientRect());
            }),
                u = this.renderer.on("afterRender", function () {
                if (r && t && (n.isFocused() || n.searchBox && n.searchBox.isFocused())) {
                    var e = n.renderer,
                        s = e.$cursorLayer.$pixelPos,
                        o = e.layerConfig,
                        u = s.top - o.offset;s.top >= 0 && u + t.top < 0 ? r = !0 : s.top < o.height && s.top + t.top + o.lineHeight > window.innerHeight ? r = !1 : r = null, r != null && (i.style.top = u + "px", i.style.left = s.left + "px", i.style.height = o.lineHeight + "px", i.scrollIntoView(r)), r = t = null;
                }
            });this.setAutoScrollEditorIntoView = function (e) {
                if (e) return;delete this.setAutoScrollEditorIntoView, this.off("changeSelection", s), this.renderer.off("afterRender", u), this.renderer.off("beforeRender", o);
            };
        }, this.$resetCursorStyle = function () {
            var e = this.$cursorStyle || "ace",
                t = this.renderer.$cursorLayer;if (!t) return;t.setSmoothBlinking(/smooth/.test(e)), t.isBlinking = !this.$readOnly && e != "wide", i.setCssClass(t.element, "ace_slim-cursors", /slim/.test(e));
        }, this.prompt = function (e, t, n) {
            var r = this;g.loadModule("./ext/prompt", function (i) {
                i.prompt(r, e, t, n);
            });
        };
    }.call(w.prototype), g.defineOptions(w.prototype, "editor", { selectionStyle: { set: function set(e) {
                this.onSelectionChange(), this._signal("changeSelectionStyle", { data: e });
            }, initialValue: "line" }, highlightActiveLine: { set: function set() {
                this.$updateHighlightActiveLine();
            }, initialValue: !0 }, highlightSelectedWord: { set: function set(e) {
                this.$onSelectionChange();
            }, initialValue: !0 }, readOnly: { set: function set(e) {
                this.textInput.setReadOnly(e), this.$resetCursorStyle();
            }, initialValue: !1 }, copyWithEmptySelection: { set: function set(e) {
                this.textInput.setCopyWithEmptySelection(e);
            }, initialValue: !1 }, cursorStyle: { set: function set(e) {
                this.$resetCursorStyle();
            }, values: ["ace", "slim", "smooth", "wide"], initialValue: "ace" }, mergeUndoDeltas: { values: [!1, !0, "always"], initialValue: !0 }, behavioursEnabled: { initialValue: !0 }, wrapBehavioursEnabled: { initialValue: !0 }, autoScrollEditorIntoView: { set: function set(e) {
                this.setAutoScrollEditorIntoView(e);
            } }, keyboardHandler: { set: function set(e) {
                this.setKeyboardHandler(e);
            }, get: function get() {
                return this.$keybindingId;
            }, handlesSet: !0 }, value: { set: function set(e) {
                this.session.setValue(e);
            }, get: function get() {
                return this.getValue();
            }, handlesSet: !0, hidden: !0 }, session: { set: function set(e) {
                this.setSession(e);
            }, get: function get() {
                return this.session;
            }, handlesSet: !0, hidden: !0 }, showLineNumbers: { set: function set(e) {
                this.renderer.$gutterLayer.setShowLineNumbers(e), this.renderer.$loop.schedule(this.renderer.CHANGE_GUTTER), e && this.$relativeLineNumbers ? E.attach(this) : E.detach(this);
            }, initialValue: !0 }, relativeLineNumbers: { set: function set(e) {
                this.$showLineNumbers && e ? E.attach(this) : E.detach(this);
            } }, placeholder: { set: function set(e) {
                this.$updatePlaceholder || (this.$updatePlaceholder = function () {
                    var e = this.renderer.$composition || this.getValue();if (e && this.renderer.placeholderNode) this.renderer.off("afterRender", this.$updatePlaceholder), i.removeCssClass(this.container, "ace_hasPlaceholder"), this.renderer.placeholderNode.remove(), this.renderer.placeholderNode = null;else if (!e && !this.renderer.placeholderNode) {
                        this.renderer.on("afterRender", this.$updatePlaceholder), i.addCssClass(this.container, "ace_hasPlaceholder");var t = i.createElement("div");t.className = "ace_placeholder", t.textContent = this.$placeholder || "", this.renderer.placeholderNode = t, this.renderer.content.appendChild(this.renderer.placeholderNode);
                    }
                }.bind(this), this.on("input", this.$updatePlaceholder)), this.$updatePlaceholder();
            } }, hScrollBarAlwaysVisible: "renderer", vScrollBarAlwaysVisible: "renderer", highlightGutterLine: "renderer", animatedScroll: "renderer", showInvisibles: "renderer", showPrintMargin: "renderer", printMarginColumn: "renderer", printMargin: "renderer", fadeFoldWidgets: "renderer", showFoldWidgets: "renderer", displayIndentGuides: "renderer", showGutter: "renderer", fontSize: "renderer", fontFamily: "renderer", maxLines: "renderer", minLines: "renderer", scrollPastEnd: "renderer", fixedWidthGutter: "renderer", theme: "renderer", hasCssTransforms: "renderer", maxPixelHeight: "renderer", useTextareaForIME: "renderer", scrollSpeed: "$mouseHandler", dragDelay: "$mouseHandler", dragEnabled: "$mouseHandler", focusTimeout: "$mouseHandler", tooltipFollowsMouse: "$mouseHandler", firstLineNumber: "session", overwrite: "session", newLineMode: "session", useWorker: "session", useSoftTabs: "session", navigateWithinSoftTabs: "session", tabSize: "session", wrap: "session", indentedSoftWrap: "session", foldStyle: "session", mode: "session" });var E = { getText: function getText(e, t) {
            return (Math.abs(e.selection.lead.row - t) || t + 1 + (t < 9 ? "\xB7" : "")) + "";
        }, getWidth: function getWidth(e, t, n) {
            return Math.max(t.toString().length, (n.lastRow + 1).toString().length, 2) * n.characterWidth;
        }, update: function update(e, t) {
            t.renderer.$loop.schedule(t.renderer.CHANGE_GUTTER);
        }, attach: function attach(e) {
            e.renderer.$gutterLayer.$renderer = this, e.on("changeSelection", this.update), this.update(null, e);
        }, detach: function detach(e) {
            e.renderer.$gutterLayer.$renderer == this && (e.renderer.$gutterLayer.$renderer = null), e.off("changeSelection", this.update), this.update(null, e);
        } };t.Editor = w;
}), ace.define("ace/undomanager", ["require", "exports", "module", "ace/range"], function (e, t, n) {
    "use strict";
    function i(e, t) {
        for (var n = t; n--;) {
            var r = e[n];if (r && !r[0].ignore) {
                while (n < t - 1) {
                    var i = d(e[n], e[n + 1]);e[n] = i[0], e[n + 1] = i[1], n++;
                }return !0;
            }
        }
    }function a(e) {
        var t = e.action == "insert",
            n = e.start,
            r = e.end,
            i = (r.row - n.row) * (t ? 1 : -1),
            s = (r.column - n.column) * (t ? 1 : -1);t && (r = n);for (var o in this.marks) {
            var a = this.marks[o],
                f = u(a, n);if (f < 0) continue;if (f === 0 && t) {
                if (a.bias != 1) {
                    a.bias == -1;continue;
                }f = 1;
            }var l = t ? f : u(a, r);if (l > 0) {
                a.row += i, a.column += a.row == r.row ? s : 0;continue;
            }!t && l <= 0 && (a.row = n.row, a.column = n.column, l === 0 && (a.bias = 1));
        }
    }function f(e) {
        return { row: e.row, column: e.column };
    }function l(e) {
        return { start: f(e.start), end: f(e.end), action: e.action, lines: e.lines.slice() };
    }function c(e) {
        e = e || this;if (Array.isArray(e)) return e.map(c).join("\n");var t = "";e.action ? (t = e.action == "insert" ? "+" : "-", t += "[" + e.lines + "]") : e.value && (Array.isArray(e.value) ? t = e.value.map(h).join("\n") : t = h(e.value)), e.start && (t += h(e));if (e.id || e.rev) t += "	(" + (e.id || e.rev) + ")";return t;
    }function h(e) {
        return e.start.row + ":" + e.start.column + "=>" + e.end.row + ":" + e.end.column;
    }function p(e, t) {
        var n = e.action == "insert",
            r = t.action == "insert";if (n && r) {
            if (o(t.start, e.end) >= 0) m(t, e, -1);else {
                if (!(o(t.start, e.start) <= 0)) return null;m(e, t, 1);
            }
        } else if (n && !r) {
            if (o(t.start, e.end) >= 0) m(t, e, -1);else {
                if (!(o(t.end, e.start) <= 0)) return null;m(e, t, -1);
            }
        } else if (!n && r) {
            if (o(t.start, e.start) >= 0) m(t, e, 1);else {
                if (!(o(t.start, e.start) <= 0)) return null;m(e, t, 1);
            }
        } else if (!n && !r) if (o(t.start, e.start) >= 0) m(t, e, 1);else {
            if (!(o(t.end, e.start) <= 0)) return null;m(e, t, -1);
        }return [t, e];
    }function d(e, t) {
        for (var n = e.length; n--;) {
            for (var r = 0; r < t.length; r++) {
                if (!p(e[n], t[r])) {
                    while (n < e.length) {
                        while (r--) {
                            p(t[r], e[n]);
                        }r = t.length, n++;
                    }return [e, t];
                }
            }
        }return e.selectionBefore = t.selectionBefore = e.selectionAfter = t.selectionAfter = null, [t, e];
    }function v(e, t) {
        var n = e.action == "insert",
            r = t.action == "insert";if (n && r) o(e.start, t.start) < 0 ? m(t, e, 1) : m(e, t, 1);else if (n && !r) o(e.start, t.end) >= 0 ? m(e, t, -1) : o(e.start, t.start) <= 0 ? m(t, e, 1) : (m(e, s.fromPoints(t.start, e.start), -1), m(t, e, 1));else if (!n && r) o(t.start, e.end) >= 0 ? m(t, e, -1) : o(t.start, e.start) <= 0 ? m(e, t, 1) : (m(t, s.fromPoints(e.start, t.start), -1), m(e, t, 1));else if (!n && !r) if (o(t.start, e.end) >= 0) m(t, e, -1);else {
            if (!(o(t.end, e.start) <= 0)) {
                var i, u;return o(e.start, t.start) < 0 && (i = e, e = y(e, t.start)), o(e.end, t.end) > 0 && (u = y(e, t.end)), g(t.end, e.start, e.end, -1), u && !i && (e.lines = u.lines, e.start = u.start, e.end = u.end, u = e), [t, i, u].filter(Boolean);
            }m(e, t, -1);
        }return [t, e];
    }function m(e, t, n) {
        g(e.start, t.start, t.end, n), g(e.end, t.start, t.end, n);
    }function g(e, t, n, r) {
        e.row == (r == 1 ? t : n).row && (e.column += r * (n.column - t.column)), e.row += r * (n.row - t.row);
    }function y(e, t) {
        var n = e.lines,
            r = e.end;e.end = f(t);var i = e.end.row - e.start.row,
            s = n.splice(i, n.length),
            o = i ? t.column : t.column - e.start.column;n.push(s[0].substring(0, o)), s[0] = s[0].substr(o);var u = { start: f(t), end: r, lines: s, action: e.action };return u;
    }function b(e, t) {
        t = l(t);for (var n = e.length; n--;) {
            var r = e[n];for (var i = 0; i < r.length; i++) {
                var s = r[i],
                    o = v(s, t);t = o[0], o.length != 2 && (o[2] ? (r.splice(i + 1, 1, o[1], o[2]), i++) : o[1] || (r.splice(i, 1), i--));
            }r.length || e.splice(n, 1);
        }return e;
    }function w(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];for (var i = 0; i < r.length; i++) {
                b(e, r[i]);
            }
        }
    }var r = function r() {
        this.$maxRev = 0, this.$fromUndo = !1, this.reset();
    };(function () {
        this.addSession = function (e) {
            this.$session = e;
        }, this.add = function (e, t, n) {
            if (this.$fromUndo) return;if (e == this.$lastDelta) return;this.$keepRedoStack || (this.$redoStack.length = 0);if (t === !1 || !this.lastDeltas) this.lastDeltas = [], this.$undoStack.push(this.lastDeltas), e.id = this.$rev = ++this.$maxRev;if (e.action == "remove" || e.action == "insert") this.$lastDelta = e;this.lastDeltas.push(e);
        }, this.addSelection = function (e, t) {
            this.selections.push({ value: e, rev: t || this.$rev });
        }, this.startNewGroup = function () {
            return this.lastDeltas = null, this.$rev;
        }, this.markIgnored = function (e, t) {
            t == null && (t = this.$rev + 1);var n = this.$undoStack;for (var r = n.length; r--;) {
                var i = n[r][0];if (i.id <= e) break;i.id < t && (i.ignore = !0);
            }this.lastDeltas = null;
        }, this.getSelection = function (e, t) {
            var n = this.selections;for (var r = n.length; r--;) {
                var i = n[r];if (i.rev < e) return t && (i = n[r + 1]), i;
            }
        }, this.getRevision = function () {
            return this.$rev;
        }, this.getDeltas = function (e, t) {
            t == null && (t = this.$rev + 1);var n = this.$undoStack,
                r = null,
                i = 0;for (var s = n.length; s--;) {
                var o = n[s][0];o.id < t && !r && (r = s + 1);if (o.id <= e) {
                    i = s + 1;break;
                }
            }return n.slice(i, r);
        }, this.getChangedRanges = function (e, t) {
            t == null && (t = this.$rev + 1);
        }, this.getChangedLines = function (e, t) {
            t == null && (t = this.$rev + 1);
        }, this.validateDeltaBoundaries = function (e, t, n) {
            return e ? e.every(function (e) {
                var r = e.action;n && e.action === "insert" && (r = "remove"), n && e.action === "remove" && (r = "insert");switch (r) {case "insert":
                        return e.start.row <= t;case "remove":
                        return e.start.row < t && e.end.row < t;default:
                        return !0;}
            }) : !1;
        }, this.undo = function (e, t) {
            this.lastDeltas = null;var n = this.$undoStack;if (!i(n, n.length)) return;e || (e = this.$session), this.$redoStackBaseRev !== this.$rev && this.$redoStack.length && (this.$redoStack = []), this.$fromUndo = !0;var r = n.pop(),
                s = null;return this.validateDeltaBoundaries(r, e.getLength(), !0) && (s = e.undoChanges(r, t), this.$redoStack.push(r), this.$syncRev()), this.$fromUndo = !1, s;
        }, this.redo = function (e, t) {
            this.lastDeltas = null, e || (e = this.$session), this.$fromUndo = !0;if (this.$redoStackBaseRev != this.$rev) {
                var n = this.getDeltas(this.$redoStackBaseRev, this.$rev + 1);w(this.$redoStack, n), this.$redoStackBaseRev = this.$rev, this.$redoStack.forEach(function (e) {
                    e[0].id = ++this.$maxRev;
                }, this);
            }var r = this.$redoStack.pop(),
                i = null;return this.validateDeltaBoundaries(r, e.getLength(), !1) && (i = e.redoChanges(r, t), this.$undoStack.push(r), this.$syncRev()), this.$fromUndo = !1, i;
        }, this.$syncRev = function () {
            var e = this.$undoStack,
                t = e[e.length - 1],
                n = t && t[0].id || 0;this.$redoStackBaseRev = n, this.$rev = n;
        }, this.reset = function () {
            this.lastDeltas = null, this.$lastDelta = null, this.$undoStack = [], this.$redoStack = [], this.$rev = 0, this.mark = 0, this.$redoStackBaseRev = this.$rev, this.selections = [];
        }, this.canUndo = function () {
            return this.$undoStack.length > 0;
        }, this.canRedo = function () {
            return this.$redoStack.length > 0;
        }, this.bookmark = function (e) {
            e == undefined && (e = this.$rev), this.mark = e;
        }, this.isAtBookmark = function () {
            return this.$rev === this.mark;
        }, this.toJSON = function () {}, this.fromJSON = function () {}, this.hasUndo = this.canUndo, this.hasRedo = this.canRedo, this.isClean = this.isAtBookmark, this.markClean = this.bookmark, this.$prettyPrint = function (e) {
            return e ? c(e) : c(this.$undoStack) + "\n---\n" + c(this.$redoStack);
        };
    }).call(r.prototype);var s = e("./range").Range,
        o = s.comparePoints,
        u = s.comparePoints;t.UndoManager = r;
}), ace.define("ace/layer/lines", ["require", "exports", "module", "ace/lib/dom"], function (e, t, n) {
    "use strict";
    var r = e("../lib/dom"),
        i = function i(e, t) {
        this.element = e, this.canvasHeight = t || 5e5, this.element.style.height = this.canvasHeight * 2 + "px", this.cells = [], this.cellCache = [], this.$offsetCoefficient = 0;
    };(function () {
        this.moveContainer = function (e) {
            r.translate(this.element, 0, -(e.firstRowScreen * e.lineHeight % this.canvasHeight) - e.offset * this.$offsetCoefficient);
        }, this.pageChanged = function (e, t) {
            return Math.floor(e.firstRowScreen * e.lineHeight / this.canvasHeight) !== Math.floor(t.firstRowScreen * t.lineHeight / this.canvasHeight);
        }, this.computeLineTop = function (e, t, n) {
            var r = t.firstRowScreen * t.lineHeight,
                i = Math.floor(r / this.canvasHeight),
                s = n.documentToScreenRow(e, 0) * t.lineHeight;return s - i * this.canvasHeight;
        }, this.computeLineHeight = function (e, t, n) {
            return t.lineHeight * n.getRowLineCount(e);
        }, this.getLength = function () {
            return this.cells.length;
        }, this.get = function (e) {
            return this.cells[e];
        }, this.shift = function () {
            this.$cacheCell(this.cells.shift());
        }, this.pop = function () {
            this.$cacheCell(this.cells.pop());
        }, this.push = function (e) {
            if (Array.isArray(e)) {
                this.cells.push.apply(this.cells, e);var t = r.createFragment(this.element);for (var n = 0; n < e.length; n++) {
                    t.appendChild(e[n].element);
                }this.element.appendChild(t);
            } else this.cells.push(e), this.element.appendChild(e.element);
        }, this.unshift = function (e) {
            if (Array.isArray(e)) {
                this.cells.unshift.apply(this.cells, e);var t = r.createFragment(this.element);for (var n = 0; n < e.length; n++) {
                    t.appendChild(e[n].element);
                }this.element.firstChild ? this.element.insertBefore(t, this.element.firstChild) : this.element.appendChild(t);
            } else this.cells.unshift(e), this.element.insertAdjacentElement("afterbegin", e.element);
        }, this.last = function () {
            return this.cells.length ? this.cells[this.cells.length - 1] : null;
        }, this.$cacheCell = function (e) {
            if (!e) return;e.element.remove(), this.cellCache.push(e);
        }, this.createCell = function (e, t, n, i) {
            var s = this.cellCache.pop();if (!s) {
                var o = r.createElement("div");i && i(o), this.element.appendChild(o), s = { element: o, text: "", row: e };
            }return s.row = e, s;
        };
    }).call(i.prototype), t.Lines = i;
}), ace.define("ace/layer/gutter", ["require", "exports", "module", "ace/lib/dom", "ace/lib/oop", "ace/lib/lang", "ace/lib/event_emitter", "ace/layer/lines"], function (e, t, n) {
    "use strict";
    function f(e) {
        var t = document.createTextNode("");e.appendChild(t);var n = r.createElement("span");return e.appendChild(n), e;
    }var r = e("../lib/dom"),
        i = e("../lib/oop"),
        s = e("../lib/lang"),
        o = e("../lib/event_emitter").EventEmitter,
        u = e("./lines").Lines,
        a = function a(e) {
        this.element = r.createElement("div"), this.element.className = "ace_layer ace_gutter-layer", e.appendChild(this.element), this.setShowFoldWidgets(this.$showFoldWidgets), this.gutterWidth = 0, this.$annotations = [], this.$updateAnnotations = this.$updateAnnotations.bind(this), this.$lines = new u(this.element), this.$lines.$offsetCoefficient = 1;
    };(function () {
        i.implement(this, o), this.setSession = function (e) {
            this.session && this.session.removeEventListener("change", this.$updateAnnotations), this.session = e, e && e.on("change", this.$updateAnnotations);
        }, this.addGutterDecoration = function (e, t) {
            window.console && console.warn && console.warn("deprecated use session.addGutterDecoration"), this.session.addGutterDecoration(e, t);
        }, this.removeGutterDecoration = function (e, t) {
            window.console && console.warn && console.warn("deprecated use session.removeGutterDecoration"), this.session.removeGutterDecoration(e, t);
        }, this.setAnnotations = function (e) {
            this.$annotations = [];for (var t = 0; t < e.length; t++) {
                var n = e[t],
                    r = n.row,
                    i = this.$annotations[r];i || (i = this.$annotations[r] = { text: [] });var o = n.text;o = o ? s.escapeHTML(o) : n.html || "", i.text.indexOf(o) === -1 && i.text.push(o);var u = n.type;u == "error" ? i.className = " ace_error" : u == "warning" && i.className != " ace_error" ? i.className = " ace_warning" : u == "info" && !i.className && (i.className = " ace_info");
            }
        }, this.$updateAnnotations = function (e) {
            if (!this.$annotations.length) return;var t = e.start.row,
                n = e.end.row - t;if (n !== 0) if (e.action == "remove") this.$annotations.splice(t, n + 1, null);else {
                var r = new Array(n + 1);r.unshift(t, 1), this.$annotations.splice.apply(this.$annotations, r);
            }
        }, this.update = function (e) {
            this.config = e;var t = this.session,
                n = e.firstRow,
                r = Math.min(e.lastRow + e.gutterOffset, t.getLength() - 1);this.oldLastRow = r, this.config = e, this.$lines.moveContainer(e), this.$updateCursorRow();var i = t.getNextFoldLine(n),
                s = i ? i.start.row : Infinity,
                o = null,
                u = -1,
                a = n;for (;;) {
                a > s && (a = i.end.row + 1, i = t.getNextFoldLine(a, i), s = i ? i.start.row : Infinity);if (a > r) {
                    while (this.$lines.getLength() > u + 1) {
                        this.$lines.pop();
                    }break;
                }o = this.$lines.get(++u), o ? o.row = a : (o = this.$lines.createCell(a, e, this.session, f), this.$lines.push(o)), this.$renderCell(o, e, i, a), a++;
            }this._signal("afterRender"), this.$updateGutterWidth(e);
        }, this.$updateGutterWidth = function (e) {
            var t = this.session,
                n = t.gutterRenderer || this.$renderer,
                r = t.$firstLineNumber,
                i = this.$lines.last() ? this.$lines.last().text : "";if (this.$fixedWidth || t.$useWrapMode) i = t.getLength() + r - 1;var s = n ? n.getWidth(t, i, e) : i.toString().length * e.characterWidth,
                o = this.$padding || this.$computePadding();s += o.left + o.right, s !== this.gutterWidth && !isNaN(s) && (this.gutterWidth = s, this.element.parentNode.style.width = this.element.style.width = Math.ceil(this.gutterWidth) + "px", this._signal("changeGutterWidth", s));
        }, this.$updateCursorRow = function () {
            if (!this.$highlightGutterLine) return;var e = this.session.selection.getCursor();if (this.$cursorRow === e.row) return;this.$cursorRow = e.row;
        }, this.updateLineHighlight = function () {
            if (!this.$highlightGutterLine) return;var e = this.session.selection.cursor.row;this.$cursorRow = e;if (this.$cursorCell && this.$cursorCell.row == e) return;this.$cursorCell && (this.$cursorCell.element.className = this.$cursorCell.element.className.replace("ace_gutter-active-line ", ""));var t = this.$lines.cells;this.$cursorCell = null;for (var n = 0; n < t.length; n++) {
                var r = t[n];if (r.row >= this.$cursorRow) {
                    if (r.row > this.$cursorRow) {
                        var i = this.session.getFoldLine(this.$cursorRow);if (!(n > 0 && i && i.start.row == t[n - 1].row)) break;r = t[n - 1];
                    }r.element.className = "ace_gutter-active-line " + r.element.className, this.$cursorCell = r;break;
                }
            }
        }, this.scrollLines = function (e) {
            var t = this.config;this.config = e, this.$updateCursorRow();if (this.$lines.pageChanged(t, e)) return this.update(e);this.$lines.moveContainer(e);var n = Math.min(e.lastRow + e.gutterOffset, this.session.getLength() - 1),
                r = this.oldLastRow;this.oldLastRow = n;if (!t || r < e.firstRow) return this.update(e);if (n < t.firstRow) return this.update(e);if (t.firstRow < e.firstRow) for (var i = this.session.getFoldedRowCount(t.firstRow, e.firstRow - 1); i > 0; i--) {
                this.$lines.shift();
            }if (r > n) for (var i = this.session.getFoldedRowCount(n + 1, r); i > 0; i--) {
                this.$lines.pop();
            }e.firstRow < t.firstRow && this.$lines.unshift(this.$renderLines(e, e.firstRow, t.firstRow - 1)), n > r && this.$lines.push(this.$renderLines(e, r + 1, n)), this.updateLineHighlight(), this._signal("afterRender"), this.$updateGutterWidth(e);
        }, this.$renderLines = function (e, t, n) {
            var r = [],
                i = t,
                s = this.session.getNextFoldLine(i),
                o = s ? s.start.row : Infinity;for (;;) {
                i > o && (i = s.end.row + 1, s = this.session.getNextFoldLine(i, s), o = s ? s.start.row : Infinity);if (i > n) break;var u = this.$lines.createCell(i, e, this.session, f);this.$renderCell(u, e, s, i), r.push(u), i++;
            }return r;
        }, this.$renderCell = function (e, t, n, i) {
            var s = e.element,
                o = this.session,
                u = s.childNodes[0],
                a = s.childNodes[1],
                f = o.$firstLineNumber,
                l = o.$breakpoints,
                c = o.$decorations,
                h = o.gutterRenderer || this.$renderer,
                p = this.$showFoldWidgets && o.foldWidgets,
                d = n ? n.start.row : Number.MAX_VALUE,
                v = "ace_gutter-cell ";this.$highlightGutterLine && (i == this.$cursorRow || n && i < this.$cursorRow && i >= d && this.$cursorRow <= n.end.row) && (v += "ace_gutter-active-line ", this.$cursorCell != e && (this.$cursorCell && (this.$cursorCell.element.className = this.$cursorCell.element.className.replace("ace_gutter-active-line ", "")), this.$cursorCell = e)), l[i] && (v += l[i]), c[i] && (v += c[i]), this.$annotations[i] && (v += this.$annotations[i].className), s.className != v && (s.className = v);if (p) {
                var m = p[i];m == null && (m = p[i] = o.getFoldWidget(i));
            }if (m) {
                var v = "ace_fold-widget ace_" + m;m == "start" && i == d && i < n.end.row ? v += " ace_closed" : v += " ace_open", a.className != v && (a.className = v);var g = t.lineHeight + "px";r.setStyle(a.style, "height", g), r.setStyle(a.style, "display", "inline-block");
            } else a && r.setStyle(a.style, "display", "none");var y = (h ? h.getText(o, i) : i + f).toString();return y !== u.data && (u.data = y), r.setStyle(e.element.style, "height", this.$lines.computeLineHeight(i, t, o) + "px"), r.setStyle(e.element.style, "top", this.$lines.computeLineTop(i, t, o) + "px"), e.text = y, e;
        }, this.$fixedWidth = !1, this.$highlightGutterLine = !0, this.$renderer = "", this.setHighlightGutterLine = function (e) {
            this.$highlightGutterLine = e;
        }, this.$showLineNumbers = !0, this.$renderer = "", this.setShowLineNumbers = function (e) {
            this.$renderer = !e && { getWidth: function getWidth() {
                    return 0;
                }, getText: function getText() {
                    return "";
                } };
        }, this.getShowLineNumbers = function () {
            return this.$showLineNumbers;
        }, this.$showFoldWidgets = !0, this.setShowFoldWidgets = function (e) {
            e ? r.addCssClass(this.element, "ace_folding-enabled") : r.removeCssClass(this.element, "ace_folding-enabled"), this.$showFoldWidgets = e, this.$padding = null;
        }, this.getShowFoldWidgets = function () {
            return this.$showFoldWidgets;
        }, this.$computePadding = function () {
            if (!this.element.firstChild) return { left: 0, right: 0 };var e = r.computedStyle(this.element.firstChild);return this.$padding = {}, this.$padding.left = (parseInt(e.borderLeftWidth) || 0) + (parseInt(e.paddingLeft) || 0) + 1, this.$padding.right = (parseInt(e.borderRightWidth) || 0) + (parseInt(e.paddingRight) || 0), this.$padding;
        }, this.getRegion = function (e) {
            var t = this.$padding || this.$computePadding(),
                n = this.element.getBoundingClientRect();if (e.x < t.left + n.left) return "markers";if (this.$showFoldWidgets && e.x > n.right - t.right) return "foldWidgets";
        };
    }).call(a.prototype), t.Gutter = a;
}), ace.define("ace/layer/marker", ["require", "exports", "module", "ace/range", "ace/lib/dom"], function (e, t, n) {
    "use strict";
    var r = e("../range").Range,
        i = e("../lib/dom"),
        s = function s(e) {
        this.element = i.createElement("div"), this.element.className = "ace_layer ace_marker-layer", e.appendChild(this.element);
    };(function () {
        function e(e, t, n, r) {
            return (e ? 1 : 0) | (t ? 2 : 0) | (n ? 4 : 0) | (r ? 8 : 0);
        }this.$padding = 0, this.setPadding = function (e) {
            this.$padding = e;
        }, this.setSession = function (e) {
            this.session = e;
        }, this.setMarkers = function (e) {
            this.markers = e;
        }, this.elt = function (e, t) {
            var n = this.i != -1 && this.element.childNodes[this.i];n ? this.i++ : (n = document.createElement("div"), this.element.appendChild(n), this.i = -1), n.style.cssText = t, n.className = e;
        }, this.update = function (e) {
            if (!e) return;this.config = e, this.i = 0;var t;for (var n in this.markers) {
                var r = this.markers[n];if (!r.range) {
                    r.update(t, this, this.session, e);continue;
                }var i = r.range.clipRows(e.firstRow, e.lastRow);if (i.isEmpty()) continue;i = i.toScreenRange(this.session);if (r.renderer) {
                    var s = this.$getTop(i.start.row, e),
                        o = this.$padding + i.start.column * e.characterWidth;r.renderer(t, i, o, s, e);
                } else r.type == "fullLine" ? this.drawFullLineMarker(t, i, r.clazz, e) : r.type == "screenLine" ? this.drawScreenLineMarker(t, i, r.clazz, e) : i.isMultiLine() ? r.type == "text" ? this.drawTextMarker(t, i, r.clazz, e) : this.drawMultiLineMarker(t, i, r.clazz, e) : this.drawSingleLineMarker(t, i, r.clazz + " ace_start" + " ace_br15", e);
            }if (this.i != -1) while (this.i < this.element.childElementCount) {
                this.element.removeChild(this.element.lastChild);
            }
        }, this.$getTop = function (e, t) {
            return (e - t.firstRowScreen) * t.lineHeight;
        }, this.drawTextMarker = function (t, n, i, s, o) {
            var u = this.session,
                a = n.start.row,
                f = n.end.row,
                l = a,
                c = 0,
                h = 0,
                p = u.getScreenLastRowColumn(l),
                d = new r(l, n.start.column, l, h);for (; l <= f; l++) {
                d.start.row = d.end.row = l, d.start.column = l == a ? n.start.column : u.getRowWrapIndent(l), d.end.column = p, c = h, h = p, p = l + 1 < f ? u.getScreenLastRowColumn(l + 1) : l == f ? 0 : n.end.column, this.drawSingleLineMarker(t, d, i + (l == a ? " ace_start" : "") + " ace_br" + e(l == a || l == a + 1 && n.start.column, c < h, h > p, l == f), s, l == f ? 0 : 1, o);
            }
        }, this.drawMultiLineMarker = function (e, t, n, r, i) {
            var s = this.$padding,
                o = r.lineHeight,
                u = this.$getTop(t.start.row, r),
                a = s + t.start.column * r.characterWidth;i = i || "";if (this.session.$bidiHandler.isBidiRow(t.start.row)) {
                var f = t.clone();f.end.row = f.start.row, f.end.column = this.session.getLine(f.start.row).length, this.drawBidiSingleLineMarker(e, f, n + " ace_br1 ace_start", r, null, i);
            } else this.elt(n + " ace_br1 ace_start", "height:" + o + "px;" + "right:0;" + "top:" + u + "px;left:" + a + "px;" + (i || ""));if (this.session.$bidiHandler.isBidiRow(t.end.row)) {
                var f = t.clone();f.start.row = f.end.row, f.start.column = 0, this.drawBidiSingleLineMarker(e, f, n + " ace_br12", r, null, i);
            } else {
                u = this.$getTop(t.end.row, r);var l = t.end.column * r.characterWidth;this.elt(n + " ace_br12", "height:" + o + "px;" + "width:" + l + "px;" + "top:" + u + "px;" + "left:" + s + "px;" + (i || ""));
            }o = (t.end.row - t.start.row - 1) * r.lineHeight;if (o <= 0) return;u = this.$getTop(t.start.row + 1, r);var c = (t.start.column ? 1 : 0) | (t.end.column ? 0 : 8);this.elt(n + (c ? " ace_br" + c : ""), "height:" + o + "px;" + "right:0;" + "top:" + u + "px;" + "left:" + s + "px;" + (i || ""));
        }, this.drawSingleLineMarker = function (e, t, n, r, i, s) {
            if (this.session.$bidiHandler.isBidiRow(t.start.row)) return this.drawBidiSingleLineMarker(e, t, n, r, i, s);var o = r.lineHeight,
                u = (t.end.column + (i || 0) - t.start.column) * r.characterWidth,
                a = this.$getTop(t.start.row, r),
                f = this.$padding + t.start.column * r.characterWidth;this.elt(n, "height:" + o + "px;" + "width:" + u + "px;" + "top:" + a + "px;" + "left:" + f + "px;" + (s || ""));
        }, this.drawBidiSingleLineMarker = function (e, t, n, r, i, s) {
            var o = r.lineHeight,
                u = this.$getTop(t.start.row, r),
                a = this.$padding,
                f = this.session.$bidiHandler.getSelections(t.start.column, t.end.column);f.forEach(function (e) {
                this.elt(n, "height:" + o + "px;" + "width:" + e.width + (i || 0) + "px;" + "top:" + u + "px;" + "left:" + (a + e.left) + "px;" + (s || ""));
            }, this);
        }, this.drawFullLineMarker = function (e, t, n, r, i) {
            var s = this.$getTop(t.start.row, r),
                o = r.lineHeight;t.start.row != t.end.row && (o += this.$getTop(t.end.row, r) - s), this.elt(n, "height:" + o + "px;" + "top:" + s + "px;" + "left:0;right:0;" + (i || ""));
        }, this.drawScreenLineMarker = function (e, t, n, r, i) {
            var s = this.$getTop(t.start.row, r),
                o = r.lineHeight;this.elt(n, "height:" + o + "px;" + "top:" + s + "px;" + "left:0;right:0;" + (i || ""));
        };
    }).call(s.prototype), t.Marker = s;
}), ace.define("ace/layer/text", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/lib/lang", "ace/layer/lines", "ace/lib/event_emitter"], function (e, t, n) {
    "use strict";
    var r = e("../lib/oop"),
        i = e("../lib/dom"),
        s = e("../lib/lang"),
        o = e("./lines").Lines,
        u = e("../lib/event_emitter").EventEmitter,
        a = function a(e) {
        this.dom = i, this.element = this.dom.createElement("div"), this.element.className = "ace_layer ace_text-layer", e.appendChild(this.element), this.$updateEolChar = this.$updateEolChar.bind(this), this.$lines = new o(this.element);
    };(function () {
        r.implement(this, u), this.EOF_CHAR = "\xB6", this.EOL_CHAR_LF = "\xAC", this.EOL_CHAR_CRLF = "\xA4", this.EOL_CHAR = this.EOL_CHAR_LF, this.TAB_CHAR = "\u2014", this.SPACE_CHAR = "\xB7", this.$padding = 0, this.MAX_LINE_LENGTH = 1e4, this.$updateEolChar = function () {
            var e = this.session.doc,
                t = e.getNewLineCharacter() == "\n" && e.getNewLineMode() != "windows",
                n = t ? this.EOL_CHAR_LF : this.EOL_CHAR_CRLF;if (this.EOL_CHAR != n) return this.EOL_CHAR = n, !0;
        }, this.setPadding = function (e) {
            this.$padding = e, this.element.style.margin = "0 " + e + "px";
        }, this.getLineHeight = function () {
            return this.$fontMetrics.$characterSize.height || 0;
        }, this.getCharacterWidth = function () {
            return this.$fontMetrics.$characterSize.width || 0;
        }, this.$setFontMetrics = function (e) {
            this.$fontMetrics = e, this.$fontMetrics.on("changeCharacterSize", function (e) {
                this._signal("changeCharacterSize", e);
            }.bind(this)), this.$pollSizeChanges();
        }, this.checkForSizeChanges = function () {
            this.$fontMetrics.checkForSizeChanges();
        }, this.$pollSizeChanges = function () {
            return this.$pollSizeChangesTimer = this.$fontMetrics.$pollSizeChanges();
        }, this.setSession = function (e) {
            this.session = e, e && this.$computeTabString();
        }, this.showInvisibles = !1, this.setShowInvisibles = function (e) {
            return this.showInvisibles == e ? !1 : (this.showInvisibles = e, this.$computeTabString(), !0);
        }, this.displayIndentGuides = !0, this.setDisplayIndentGuides = function (e) {
            return this.displayIndentGuides == e ? !1 : (this.displayIndentGuides = e, this.$computeTabString(), !0);
        }, this.$tabStrings = [], this.onChangeTabSize = this.$computeTabString = function () {
            var e = this.session.getTabSize();this.tabSize = e;var t = this.$tabStrings = [0];for (var n = 1; n < e + 1; n++) {
                if (this.showInvisibles) {
                    var r = this.dom.createElement("span");r.className = "ace_invisible ace_invisible_tab", r.textContent = s.stringRepeat(this.TAB_CHAR, n), t.push(r);
                } else t.push(this.dom.createTextNode(s.stringRepeat(" ", n), this.element));
            }if (this.displayIndentGuides) {
                this.$indentGuideRe = /\s\S| \t|\t |\s$/;var i = "ace_indent-guide",
                    o = "",
                    u = "";if (this.showInvisibles) {
                    i += " ace_invisible", o = " ace_invisible_space", u = " ace_invisible_tab";var a = s.stringRepeat(this.SPACE_CHAR, this.tabSize),
                        f = s.stringRepeat(this.TAB_CHAR, this.tabSize);
                } else var a = s.stringRepeat(" ", this.tabSize),
                    f = a;var r = this.dom.createElement("span");r.className = i + o, r.textContent = a, this.$tabStrings[" "] = r;var r = this.dom.createElement("span");r.className = i + u, r.textContent = f, this.$tabStrings["	"] = r;
            }
        }, this.updateLines = function (e, t, n) {
            if (this.config.lastRow != e.lastRow || this.config.firstRow != e.firstRow) return this.update(e);this.config = e;var r = Math.max(t, e.firstRow),
                i = Math.min(n, e.lastRow),
                s = this.element.childNodes,
                o = 0;for (var u = e.firstRow; u < r; u++) {
                var a = this.session.getFoldLine(u);if (a) {
                    if (a.containsRow(r)) {
                        r = a.start.row;break;
                    }u = a.end.row;
                }o++;
            }var f = !1,
                u = r,
                a = this.session.getNextFoldLine(u),
                l = a ? a.start.row : Infinity;for (;;) {
                u > l && (u = a.end.row + 1, a = this.session.getNextFoldLine(u, a), l = a ? a.start.row : Infinity);if (u > i) break;var c = s[o++];if (c) {
                    this.dom.removeChildren(c), this.$renderLine(c, u, u == l ? a : !1), f && (c.style.top = this.$lines.computeLineTop(u, e, this.session) + "px");var h = e.lineHeight * this.session.getRowLength(u) + "px";c.style.height != h && (f = !0, c.style.height = h);
                }u++;
            }if (f) while (o < this.$lines.cells.length) {
                var p = this.$lines.cells[o++];p.element.style.top = this.$lines.computeLineTop(p.row, e, this.session) + "px";
            }
        }, this.scrollLines = function (e) {
            var t = this.config;this.config = e;if (this.$lines.pageChanged(t, e)) return this.update(e);this.$lines.moveContainer(e);var n = e.lastRow,
                r = t ? t.lastRow : -1;if (!t || r < e.firstRow) return this.update(e);if (n < t.firstRow) return this.update(e);if (!t || t.lastRow < e.firstRow) return this.update(e);if (e.lastRow < t.firstRow) return this.update(e);if (t.firstRow < e.firstRow) for (var i = this.session.getFoldedRowCount(t.firstRow, e.firstRow - 1); i > 0; i--) {
                this.$lines.shift();
            }if (t.lastRow > e.lastRow) for (var i = this.session.getFoldedRowCount(e.lastRow + 1, t.lastRow); i > 0; i--) {
                this.$lines.pop();
            }e.firstRow < t.firstRow && this.$lines.unshift(this.$renderLinesFragment(e, e.firstRow, t.firstRow - 1)), e.lastRow > t.lastRow && this.$lines.push(this.$renderLinesFragment(e, t.lastRow + 1, e.lastRow));
        }, this.$renderLinesFragment = function (e, t, n) {
            var r = [],
                s = t,
                o = this.session.getNextFoldLine(s),
                u = o ? o.start.row : Infinity;for (;;) {
                s > u && (s = o.end.row + 1, o = this.session.getNextFoldLine(s, o), u = o ? o.start.row : Infinity);if (s > n) break;var a = this.$lines.createCell(s, e, this.session),
                    f = a.element;this.dom.removeChildren(f), i.setStyle(f.style, "height", this.$lines.computeLineHeight(s, e, this.session) + "px"), i.setStyle(f.style, "top", this.$lines.computeLineTop(s, e, this.session) + "px"), this.$renderLine(f, s, s == u ? o : !1), this.$useLineGroups() ? f.className = "ace_line_group" : f.className = "ace_line", r.push(a), s++;
            }return r;
        }, this.update = function (e) {
            this.$lines.moveContainer(e), this.config = e;var t = e.firstRow,
                n = e.lastRow,
                r = this.$lines;while (r.getLength()) {
                r.pop();
            }r.push(this.$renderLinesFragment(e, t, n));
        }, this.$textToken = { text: !0, rparen: !0, lparen: !0 }, this.$renderToken = function (e, t, n, r) {
            var i = this,
                o = /(\t)|( +)|([\x00-\x1f\x80-\xa0\xad\u1680\u180E\u2000-\u200f\u2028\u2029\u202F\u205F\uFEFF\uFFF9-\uFFFC]+)|(\u3000)|([\u1100-\u115F\u11A3-\u11A7\u11FA-\u11FF\u2329-\u232A\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3001-\u303E\u3041-\u3096\u3099-\u30FF\u3105-\u312D\u3131-\u318E\u3190-\u31BA\u31C0-\u31E3\u31F0-\u321E\u3220-\u3247\u3250-\u32FE\u3300-\u4DBF\u4E00-\uA48C\uA490-\uA4C6\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFAFF\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE66\uFE68-\uFE6B\uFF01-\uFF60\uFFE0-\uFFE6]|[\uD800-\uDBFF][\uDC00-\uDFFF])/g,
                u = this.dom.createFragment(this.element),
                a,
                f = 0;while (a = o.exec(r)) {
                var l = a[1],
                    c = a[2],
                    h = a[3],
                    p = a[4],
                    d = a[5];if (!i.showInvisibles && c) continue;var v = f != a.index ? r.slice(f, a.index) : "";f = a.index + a[0].length, v && u.appendChild(this.dom.createTextNode(v, this.element));if (l) {
                    var m = i.session.getScreenTabSize(t + a.index);u.appendChild(i.$tabStrings[m].cloneNode(!0)), t += m - 1;
                } else if (c) {
                    if (i.showInvisibles) {
                        var g = this.dom.createElement("span");g.className = "ace_invisible ace_invisible_space", g.textContent = s.stringRepeat(i.SPACE_CHAR, c.length), u.appendChild(g);
                    } else u.appendChild(this.com.createTextNode(c, this.element));
                } else if (h) {
                    var g = this.dom.createElement("span");g.className = "ace_invisible ace_invisible_space ace_invalid", g.textContent = s.stringRepeat(i.SPACE_CHAR, h.length), u.appendChild(g);
                } else if (p) {
                    t += 1;var g = this.dom.createElement("span");g.style.width = i.config.characterWidth * 2 + "px", g.className = i.showInvisibles ? "ace_cjk ace_invisible ace_invisible_space" : "ace_cjk", g.textContent = i.showInvisibles ? i.SPACE_CHAR : p, u.appendChild(g);
                } else if (d) {
                    t += 1;var g = this.dom.createElement("span");g.style.width = i.config.characterWidth * 2 + "px", g.className = "ace_cjk", g.textContent = d, u.appendChild(g);
                }
            }u.appendChild(this.dom.createTextNode(f ? r.slice(f) : r, this.element));if (!this.$textToken[n.type]) {
                var y = "ace_" + n.type.replace(/\./g, " ace_"),
                    g = this.dom.createElement("span");n.type == "fold" && (g.style.width = n.value.length * this.config.characterWidth + "px"), g.className = y, g.appendChild(u), e.appendChild(g);
            } else e.appendChild(u);return t + r.length;
        }, this.renderIndentGuide = function (e, t, n) {
            var r = t.search(this.$indentGuideRe);if (r <= 0 || r >= n) return t;if (t[0] == " ") {
                r -= r % this.tabSize;var i = r / this.tabSize;for (var s = 0; s < i; s++) {
                    e.appendChild(this.$tabStrings[" "].cloneNode(!0));
                }return t.substr(r);
            }if (t[0] == "	") {
                for (var s = 0; s < r; s++) {
                    e.appendChild(this.$tabStrings["	"].cloneNode(!0));
                }return t.substr(r);
            }return t;
        }, this.$createLineElement = function (e) {
            var t = this.dom.createElement("div");return t.className = "ace_line", t.style.height = this.config.lineHeight + "px", t;
        }, this.$renderWrappedLine = function (e, t, n) {
            var r = 0,
                i = 0,
                o = n[0],
                u = 0,
                a = this.$createLineElement();e.appendChild(a);for (var f = 0; f < t.length; f++) {
                var l = t[f],
                    c = l.value;if (f == 0 && this.displayIndentGuides) {
                    r = c.length, c = this.renderIndentGuide(a, c, o);if (!c) continue;r -= c.length;
                }if (r + c.length < o) u = this.$renderToken(a, u, l, c), r += c.length;else {
                    while (r + c.length >= o) {
                        u = this.$renderToken(a, u, l, c.substring(0, o - r)), c = c.substring(o - r), r = o, a = this.$createLineElement(), e.appendChild(a), a.appendChild(this.dom.createTextNode(s.stringRepeat("\xA0", n.indent), this.element)), i++, u = 0, o = n[i] || Number.MAX_VALUE;
                    }c.length != 0 && (r += c.length, u = this.$renderToken(a, u, l, c));
                }
            }n[n.length - 1] > this.MAX_LINE_LENGTH && this.$renderOverflowMessage(a, u, null, "", !0);
        }, this.$renderSimpleLine = function (e, t) {
            var n = 0,
                r = t[0],
                i = r.value;this.displayIndentGuides && (i = this.renderIndentGuide(e, i)), i && (n = this.$renderToken(e, n, r, i));for (var s = 1; s < t.length; s++) {
                r = t[s], i = r.value;if (n + i.length > this.MAX_LINE_LENGTH) return this.$renderOverflowMessage(e, n, r, i);n = this.$renderToken(e, n, r, i);
            }
        }, this.$renderOverflowMessage = function (e, t, n, r, i) {
            n && this.$renderToken(e, t, n, r.slice(0, this.MAX_LINE_LENGTH - t));var s = this.dom.createElement("span");s.className = "ace_inline_button ace_keyword ace_toggle_wrap", s.textContent = i ? "<hide>" : "<click to see more...>", e.appendChild(s);
        }, this.$renderLine = function (e, t, n) {
            !n && n != 0 && (n = this.session.getFoldLine(t));if (n) var r = this.$getFoldLineTokens(t, n);else var r = this.session.getTokens(t);var i = e;if (r.length) {
                var s = this.session.getRowSplitData(t);if (s && s.length) {
                    this.$renderWrappedLine(e, r, s);var i = e.lastChild;
                } else {
                    var i = e;this.$useLineGroups() && (i = this.$createLineElement(), e.appendChild(i)), this.$renderSimpleLine(i, r);
                }
            } else this.$useLineGroups() && (i = this.$createLineElement(), e.appendChild(i));if (this.showInvisibles && i) {
                n && (t = n.end.row);var o = this.dom.createElement("span");o.className = "ace_invisible ace_invisible_eol", o.textContent = t == this.session.getLength() - 1 ? this.EOF_CHAR : this.EOL_CHAR, i.appendChild(o);
            }
        }, this.$getFoldLineTokens = function (e, t) {
            function i(e, t, n) {
                var i = 0,
                    s = 0;while (s + e[i].value.length < t) {
                    s += e[i].value.length, i++;if (i == e.length) return;
                }if (s != t) {
                    var o = e[i].value.substring(t - s);o.length > n - t && (o = o.substring(0, n - t)), r.push({ type: e[i].type, value: o }), s = t + o.length, i += 1;
                }while (s < n && i < e.length) {
                    var o = e[i].value;o.length + s > n ? r.push({ type: e[i].type, value: o.substring(0, n - s) }) : r.push(e[i]), s += o.length, i += 1;
                }
            }var n = this.session,
                r = [],
                s = n.getTokens(e);return t.walk(function (e, t, o, u, a) {
                e != null ? r.push({ type: "fold", value: e }) : (a && (s = n.getTokens(t)), s.length && i(s, u, o));
            }, t.end.row, this.session.getLine(t.end.row).length), r;
        }, this.$useLineGroups = function () {
            return this.session.getUseWrapMode();
        }, this.destroy = function () {};
    }).call(a.prototype), t.Text = a;
}), ace.define("ace/layer/cursor", ["require", "exports", "module", "ace/lib/dom"], function (e, t, n) {
    "use strict";
    var r = e("../lib/dom"),
        i = function i(e) {
        this.element = r.createElement("div"), this.element.className = "ace_layer ace_cursor-layer", e.appendChild(this.element), this.isVisible = !1, this.isBlinking = !0, this.blinkInterval = 1e3, this.smoothBlinking = !1, this.cursors = [], this.cursor = this.addCursor(), r.addCssClass(this.element, "ace_hidden-cursors"), this.$updateCursors = this.$updateOpacity.bind(this);
    };(function () {
        this.$updateOpacity = function (e) {
            var t = this.cursors;for (var n = t.length; n--;) {
                r.setStyle(t[n].style, "opacity", e ? "" : "0");
            }
        }, this.$startCssAnimation = function () {
            var e = this.cursors;for (var t = e.length; t--;) {
                e[t].style.animationDuration = this.blinkInterval + "ms";
            }setTimeout(function () {
                r.addCssClass(this.element, "ace_animate-blinking");
            }.bind(this));
        }, this.$stopCssAnimation = function () {
            r.removeCssClass(this.element, "ace_animate-blinking");
        }, this.$padding = 0, this.setPadding = function (e) {
            this.$padding = e;
        }, this.setSession = function (e) {
            this.session = e;
        }, this.setBlinking = function (e) {
            e != this.isBlinking && (this.isBlinking = e, this.restartTimer());
        }, this.setBlinkInterval = function (e) {
            e != this.blinkInterval && (this.blinkInterval = e, this.restartTimer());
        }, this.setSmoothBlinking = function (e) {
            e != this.smoothBlinking && (this.smoothBlinking = e, r.setCssClass(this.element, "ace_smooth-blinking", e), this.$updateCursors(!0), this.restartTimer());
        }, this.addCursor = function () {
            var e = r.createElement("div");return e.className = "ace_cursor", this.element.appendChild(e), this.cursors.push(e), e;
        }, this.removeCursor = function () {
            if (this.cursors.length > 1) {
                var e = this.cursors.pop();return e.parentNode.removeChild(e), e;
            }
        }, this.hideCursor = function () {
            this.isVisible = !1, r.addCssClass(this.element, "ace_hidden-cursors"), this.restartTimer();
        }, this.showCursor = function () {
            this.isVisible = !0, r.removeCssClass(this.element, "ace_hidden-cursors"), this.restartTimer();
        }, this.restartTimer = function () {
            var e = this.$updateCursors;clearInterval(this.intervalId), clearTimeout(this.timeoutId), this.$stopCssAnimation(), this.smoothBlinking && r.removeCssClass(this.element, "ace_smooth-blinking"), e(!0);if (!this.isBlinking || !this.blinkInterval || !this.isVisible) {
                this.$stopCssAnimation();return;
            }this.smoothBlinking && setTimeout(function () {
                r.addCssClass(this.element, "ace_smooth-blinking");
            }.bind(this));if (r.HAS_CSS_ANIMATION) this.$startCssAnimation();else {
                var t = function () {
                    this.timeoutId = setTimeout(function () {
                        e(!1);
                    }, .6 * this.blinkInterval);
                }.bind(this);this.intervalId = setInterval(function () {
                    e(!0), t();
                }, this.blinkInterval), t();
            }
        }, this.getPixelPosition = function (e, t) {
            if (!this.config || !this.session) return { left: 0, top: 0 };e || (e = this.session.selection.getCursor());var n = this.session.documentToScreenPosition(e),
                r = this.$padding + (this.session.$bidiHandler.isBidiRow(n.row, e.row) ? this.session.$bidiHandler.getPosLeft(n.column) : n.column * this.config.characterWidth),
                i = (n.row - (t ? this.config.firstRowScreen : 0)) * this.config.lineHeight;return { left: r, top: i };
        }, this.isCursorInView = function (e, t) {
            return e.top >= 0 && e.top < t.maxHeight;
        }, this.update = function (e) {
            this.config = e;var t = this.session.$selectionMarkers,
                n = 0,
                i = 0;if (t === undefined || t.length === 0) t = [{ cursor: null }];for (var n = 0, s = t.length; n < s; n++) {
                var o = this.getPixelPosition(t[n].cursor, !0);if ((o.top > e.height + e.offset || o.top < 0) && n > 1) continue;var u = this.cursors[i++] || this.addCursor(),
                    a = u.style;this.drawCursor ? this.drawCursor(u, o, e, t[n], this.session) : this.isCursorInView(o, e) ? (r.setStyle(a, "display", "block"), r.translate(u, o.left, o.top), r.setStyle(a, "width", Math.round(e.characterWidth) + "px"), r.setStyle(a, "height", e.lineHeight + "px")) : r.setStyle(a, "display", "none");
            }while (this.cursors.length > i) {
                this.removeCursor();
            }var f = this.session.getOverwrite();this.$setOverwrite(f), this.$pixelPos = o, this.restartTimer();
        }, this.drawCursor = null, this.$setOverwrite = function (e) {
            e != this.overwrite && (this.overwrite = e, e ? r.addCssClass(this.element, "ace_overwrite-cursors") : r.removeCssClass(this.element, "ace_overwrite-cursors"));
        }, this.destroy = function () {
            clearInterval(this.intervalId), clearTimeout(this.timeoutId);
        };
    }).call(i.prototype), t.Cursor = i;
}), ace.define("ace/scrollbar", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/lib/event", "ace/lib/event_emitter"], function (e, t, n) {
    "use strict";
    var r = e("./lib/oop"),
        i = e("./lib/dom"),
        s = e("./lib/event"),
        o = e("./lib/event_emitter").EventEmitter,
        u = 32768,
        a = function a(e) {
        this.element = i.createElement("div"), this.element.className = "ace_scrollbar ace_scrollbar" + this.classSuffix, this.inner = i.createElement("div"), this.inner.className = "ace_scrollbar-inner", this.inner.textContent = "\xA0", this.element.appendChild(this.inner), e.appendChild(this.element), this.setVisible(!1), this.skipEvent = !1, s.addListener(this.element, "scroll", this.onScroll.bind(this)), s.addListener(this.element, "mousedown", s.preventDefault);
    };(function () {
        r.implement(this, o), this.setVisible = function (e) {
            this.element.style.display = e ? "" : "none", this.isVisible = e, this.coeff = 1;
        };
    }).call(a.prototype);var f = function f(e, t) {
        a.call(this, e), this.scrollTop = 0, this.scrollHeight = 0, t.$scrollbarWidth = this.width = i.scrollbarWidth(e.ownerDocument), this.inner.style.width = this.element.style.width = (this.width || 15) + 5 + "px", this.$minWidth = 0;
    };r.inherits(f, a), function () {
        this.classSuffix = "-v", this.onScroll = function () {
            if (!this.skipEvent) {
                this.scrollTop = this.element.scrollTop;if (this.coeff != 1) {
                    var e = this.element.clientHeight / this.scrollHeight;this.scrollTop = this.scrollTop * (1 - e) / (this.coeff - e);
                }this._emit("scroll", { data: this.scrollTop });
            }this.skipEvent = !1;
        }, this.getWidth = function () {
            return Math.max(this.isVisible ? this.width : 0, this.$minWidth || 0);
        }, this.setHeight = function (e) {
            this.element.style.height = e + "px";
        }, this.setInnerHeight = this.setScrollHeight = function (e) {
            this.scrollHeight = e, e > u ? (this.coeff = u / e, e = u) : this.coeff != 1 && (this.coeff = 1), this.inner.style.height = e + "px";
        }, this.setScrollTop = function (e) {
            this.scrollTop != e && (this.skipEvent = !0, this.scrollTop = e, this.element.scrollTop = e * this.coeff);
        };
    }.call(f.prototype);var l = function l(e, t) {
        a.call(this, e), this.scrollLeft = 0, this.height = t.$scrollbarWidth, this.inner.style.height = this.element.style.height = (this.height || 15) + 5 + "px";
    };r.inherits(l, a), function () {
        this.classSuffix = "-h", this.onScroll = function () {
            this.skipEvent || (this.scrollLeft = this.element.scrollLeft, this._emit("scroll", { data: this.scrollLeft })), this.skipEvent = !1;
        }, this.getHeight = function () {
            return this.isVisible ? this.height : 0;
        }, this.setWidth = function (e) {
            this.element.style.width = e + "px";
        }, this.setInnerWidth = function (e) {
            this.inner.style.width = e + "px";
        }, this.setScrollWidth = function (e) {
            this.inner.style.width = e + "px";
        }, this.setScrollLeft = function (e) {
            this.scrollLeft != e && (this.skipEvent = !0, this.scrollLeft = this.element.scrollLeft = e);
        };
    }.call(l.prototype), t.ScrollBar = f, t.ScrollBarV = f, t.ScrollBarH = l, t.VScrollBar = f, t.HScrollBar = l;
}), ace.define("ace/renderloop", ["require", "exports", "module", "ace/lib/event"], function (e, t, n) {
    "use strict";
    var r = e("./lib/event"),
        i = function i(e, t) {
        this.onRender = e, this.pending = !1, this.changes = 0, this.$recursionLimit = 2, this.window = t || window;var n = this;this._flush = function (e) {
            n.pending = !1;var t = n.changes;t && (r.blockIdle(100), n.changes = 0, n.onRender(t));if (n.changes) {
                if (n.$recursionLimit-- < 0) return;n.schedule();
            } else n.$recursionLimit = 2;
        };
    };(function () {
        this.schedule = function (e) {
            this.changes = this.changes | e, this.changes && !this.pending && (r.nextFrame(this._flush), this.pending = !0);
        }, this.clear = function (e) {
            var t = this.changes;return this.changes = 0, t;
        };
    }).call(i.prototype), t.RenderLoop = i;
}), ace.define("ace/layer/font_metrics", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/lib/lang", "ace/lib/event", "ace/lib/useragent", "ace/lib/event_emitter"], function (e, t, n) {
    var r = e("../lib/oop"),
        i = e("../lib/dom"),
        s = e("../lib/lang"),
        o = e("../lib/event"),
        u = e("../lib/useragent"),
        a = e("../lib/event_emitter").EventEmitter,
        f = 256,
        l = typeof ResizeObserver == "function",
        c = 200,
        h = t.FontMetrics = function (e) {
        this.el = i.createElement("div"), this.$setMeasureNodeStyles(this.el.style, !0), this.$main = i.createElement("div"), this.$setMeasureNodeStyles(this.$main.style), this.$measureNode = i.createElement("div"), this.$setMeasureNodeStyles(this.$measureNode.style), this.el.appendChild(this.$main), this.el.appendChild(this.$measureNode), e.appendChild(this.el), this.$measureNode.innerHTML = s.stringRepeat("X", f), this.$characterSize = { width: 0, height: 0 }, l ? this.$addObserver() : this.checkForSizeChanges();
    };(function () {
        r.implement(this, a), this.$characterSize = { width: 0, height: 0 }, this.$setMeasureNodeStyles = function (e, t) {
            e.width = e.height = "auto", e.left = e.top = "0px", e.visibility = "hidden", e.position = "absolute", e.whiteSpace = "pre", u.isIE < 8 ? e["font-family"] = "inherit" : e.font = "inherit", e.overflow = t ? "hidden" : "visible";
        }, this.checkForSizeChanges = function (e) {
            e === undefined && (e = this.$measureSizes());if (e && (this.$characterSize.width !== e.width || this.$characterSize.height !== e.height)) {
                this.$measureNode.style.fontWeight = "bold";var t = this.$measureSizes();this.$measureNode.style.fontWeight = "", this.$characterSize = e, this.charSizes = Object.create(null), this.allowBoldFonts = t && t.width === e.width && t.height === e.height, this._emit("changeCharacterSize", { data: e });
            }
        }, this.$addObserver = function () {
            var e = this;this.$observer = new window.ResizeObserver(function (t) {
                var n = t[0].contentRect;e.checkForSizeChanges({ height: n.height, width: n.width / f });
            }), this.$observer.observe(this.$measureNode);
        }, this.$pollSizeChanges = function () {
            if (this.$pollSizeChangesTimer || this.$observer) return this.$pollSizeChangesTimer;var e = this;return this.$pollSizeChangesTimer = o.onIdle(function t() {
                e.checkForSizeChanges(), o.onIdle(t, 500);
            }, 500);
        }, this.setPolling = function (e) {
            e ? this.$pollSizeChanges() : this.$pollSizeChangesTimer && (clearInterval(this.$pollSizeChangesTimer), this.$pollSizeChangesTimer = 0);
        }, this.$measureSizes = function (e) {
            var t = { height: (e || this.$measureNode).clientHeight, width: (e || this.$measureNode).clientWidth / f };return t.width === 0 || t.height === 0 ? null : t;
        }, this.$measureCharWidth = function (e) {
            this.$main.innerHTML = s.stringRepeat(e, f);var t = this.$main.getBoundingClientRect();return t.width / f;
        }, this.getCharacterWidth = function (e) {
            var t = this.charSizes[e];return t === undefined && (t = this.charSizes[e] = this.$measureCharWidth(e) / this.$characterSize.width), t;
        }, this.destroy = function () {
            clearInterval(this.$pollSizeChangesTimer), this.$observer && this.$observer.disconnect(), this.el && this.el.parentNode && this.el.parentNode.removeChild(this.el);
        }, this.$getZoom = function e(t) {
            return t ? (window.getComputedStyle(t).zoom || 1) * e(t.parentElement) : 1;
        }, this.$initTransformMeasureNodes = function () {
            var e = function e(_e2, t) {
                return ["div", { style: "position: absolute;top:" + _e2 + "px;left:" + t + "px;" }];
            };this.els = i.buildDom([e(0, 0), e(c, 0), e(0, c), e(c, c)], this.el);
        }, this.transformCoordinates = function (e, t) {
            function r(e, t, n) {
                var r = e[1] * t[0] - e[0] * t[1];return [(-t[1] * n[0] + t[0] * n[1]) / r, (+e[1] * n[0] - e[0] * n[1]) / r];
            }function i(e, t) {
                return [e[0] - t[0], e[1] - t[1]];
            }function s(e, t) {
                return [e[0] + t[0], e[1] + t[1]];
            }function o(e, t) {
                return [e * t[0], e * t[1]];
            }function u(e) {
                var t = e.getBoundingClientRect();return [t.left, t.top];
            }if (e) {
                var n = this.$getZoom(this.el);e = o(1 / n, e);
            }this.els || this.$initTransformMeasureNodes();var a = u(this.els[0]),
                f = u(this.els[1]),
                l = u(this.els[2]),
                h = u(this.els[3]),
                p = r(i(h, f), i(h, l), i(s(f, l), s(h, a))),
                d = o(1 + p[0], i(f, a)),
                v = o(1 + p[1], i(l, a));if (t) {
                var m = t,
                    g = p[0] * m[0] / c + p[1] * m[1] / c + 1,
                    y = s(o(m[0], d), o(m[1], v));return s(o(1 / g / c, y), a);
            }var b = i(e, a),
                w = r(i(d, o(p[0], b)), i(v, o(p[1], b)), b);return o(c, w);
        };
    }).call(h.prototype);
}), ace.define("ace/virtual_renderer", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/config", "ace/layer/gutter", "ace/layer/marker", "ace/layer/text", "ace/layer/cursor", "ace/scrollbar", "ace/scrollbar", "ace/renderloop", "ace/layer/font_metrics", "ace/lib/event_emitter", "ace/lib/useragent"], function (e, t, n) {
    "use strict";
    var r = e("./lib/oop"),
        i = e("./lib/dom"),
        s = e("./config"),
        o = e("./layer/gutter").Gutter,
        u = e("./layer/marker").Marker,
        a = e("./layer/text").Text,
        f = e("./layer/cursor").Cursor,
        l = e("./scrollbar").HScrollBar,
        c = e("./scrollbar").VScrollBar,
        h = e("./renderloop").RenderLoop,
        p = e("./layer/font_metrics").FontMetrics,
        d = e("./lib/event_emitter").EventEmitter,
        v = '.ace_br1 {border-top-left-radius    : 3px;}.ace_br2 {border-top-right-radius   : 3px;}.ace_br3 {border-top-left-radius    : 3px; border-top-right-radius:    3px;}.ace_br4 {border-bottom-right-radius: 3px;}.ace_br5 {border-top-left-radius    : 3px; border-bottom-right-radius: 3px;}.ace_br6 {border-top-right-radius   : 3px; border-bottom-right-radius: 3px;}.ace_br7 {border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-right-radius: 3px;}.ace_br8 {border-bottom-left-radius : 3px;}.ace_br9 {border-top-left-radius    : 3px; border-bottom-left-radius:  3px;}.ace_br10{border-top-right-radius   : 3px; border-bottom-left-radius:  3px;}.ace_br11{border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-left-radius:  3px;}.ace_br12{border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}.ace_br13{border-top-left-radius    : 3px; border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}.ace_br14{border-top-right-radius   : 3px; border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}.ace_br15{border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-right-radius: 3px; border-bottom-left-radius: 3px;}.ace_editor {position: relative;overflow: hidden;font: 12px/normal \'Monaco\', \'Menlo\', \'Ubuntu Mono\', \'Consolas\', \'source-code-pro\', monospace;direction: ltr;text-align: left;-webkit-tap-highlight-color: rgba(0, 0, 0, 0);}.ace_scroller {position: absolute;overflow: hidden;top: 0;bottom: 0;background-color: inherit;-ms-user-select: none;-moz-user-select: none;-webkit-user-select: none;user-select: none;cursor: text;}.ace_content {position: absolute;box-sizing: border-box;min-width: 100%;contain: style size layout;font-variant-ligatures: no-common-ligatures;}.ace_dragging .ace_scroller:before{position: absolute;top: 0;left: 0;right: 0;bottom: 0;content: \'\';background: rgba(250, 250, 250, 0.01);z-index: 1000;}.ace_dragging.ace_dark .ace_scroller:before{background: rgba(0, 0, 0, 0.01);}.ace_selecting, .ace_selecting * {cursor: text !important;}.ace_gutter {position: absolute;overflow : hidden;width: auto;top: 0;bottom: 0;left: 0;cursor: default;z-index: 4;-ms-user-select: none;-moz-user-select: none;-webkit-user-select: none;user-select: none;contain: style size layout;}.ace_gutter-active-line {position: absolute;left: 0;right: 0;}.ace_scroller.ace_scroll-left {box-shadow: 17px 0 16px -16px rgba(0, 0, 0, 0.4) inset;}.ace_gutter-cell {position: absolute;top: 0;left: 0;right: 0;padding-left: 19px;padding-right: 6px;background-repeat: no-repeat;}.ace_gutter-cell.ace_error {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAABOFBMVEX/////////QRswFAb/Ui4wFAYwFAYwFAaWGAfDRymzOSH/PxswFAb/SiUwFAYwFAbUPRvjQiDllog5HhHdRybsTi3/Tyv9Tir+Syj/UC3////XurebMBIwFAb/RSHbPx/gUzfdwL3kzMivKBAwFAbbvbnhPx66NhowFAYwFAaZJg8wFAaxKBDZurf/RB6mMxb/SCMwFAYwFAbxQB3+RB4wFAb/Qhy4Oh+4QifbNRcwFAYwFAYwFAb/QRzdNhgwFAYwFAbav7v/Uy7oaE68MBK5LxLewr/r2NXewLswFAaxJw4wFAbkPRy2PyYwFAaxKhLm1tMwFAazPiQwFAaUGAb/QBrfOx3bvrv/VC/maE4wFAbRPBq6MRO8Qynew8Dp2tjfwb0wFAbx6eju5+by6uns4uH9/f36+vr/GkHjAAAAYnRSTlMAGt+64rnWu/bo8eAA4InH3+DwoN7j4eLi4xP99Nfg4+b+/u9B/eDs1MD1mO7+4PHg2MXa347g7vDizMLN4eG+Pv7i5evs/v79yu7S3/DV7/498Yv24eH+4ufQ3Ozu/v7+y13sRqwAAADLSURBVHjaZc/XDsFgGIBhtDrshlitmk2IrbHFqL2pvXf/+78DPokj7+Fz9qpU/9UXJIlhmPaTaQ6QPaz0mm+5gwkgovcV6GZzd5JtCQwgsxoHOvJO15kleRLAnMgHFIESUEPmawB9ngmelTtipwwfASilxOLyiV5UVUyVAfbG0cCPHig+GBkzAENHS0AstVF6bacZIOzgLmxsHbt2OecNgJC83JERmePUYq8ARGkJx6XtFsdddBQgZE2nPR6CICZhawjA4Fb/chv+399kfR+MMMDGOQAAAABJRU5ErkJggg==");background-repeat: no-repeat;background-position: 2px center;}.ace_gutter-cell.ace_warning {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAmVBMVEX///8AAAD///8AAAAAAABPSzb/5sAAAAB/blH/73z/ulkAAAAAAAD85pkAAAAAAAACAgP/vGz/rkDerGbGrV7/pkQICAf////e0IsAAAD/oED/qTvhrnUAAAD/yHD/njcAAADuv2r/nz//oTj/p064oGf/zHAAAAA9Nir/tFIAAAD/tlTiuWf/tkIAAACynXEAAAAAAAAtIRW7zBpBAAAAM3RSTlMAABR1m7RXO8Ln31Z36zT+neXe5OzooRDfn+TZ4p3h2hTf4t3k3ucyrN1K5+Xaks52Sfs9CXgrAAAAjklEQVR42o3PbQ+CIBQFYEwboPhSYgoYunIqqLn6/z8uYdH8Vmdnu9vz4WwXgN/xTPRD2+sgOcZjsge/whXZgUaYYvT8QnuJaUrjrHUQreGczuEafQCO/SJTufTbroWsPgsllVhq3wJEk2jUSzX3CUEDJC84707djRc5MTAQxoLgupWRwW6UB5fS++NV8AbOZgnsC7BpEAAAAABJRU5ErkJggg==");background-position: 2px center;}.ace_gutter-cell.ace_info {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAAAAAA6mKC9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAJ0Uk5TAAB2k804AAAAPklEQVQY02NgIB68QuO3tiLznjAwpKTgNyDbMegwisCHZUETUZV0ZqOquBpXj2rtnpSJT1AEnnRmL2OgGgAAIKkRQap2htgAAAAASUVORK5CYII=");background-position: 2px center;}.ace_dark .ace_gutter-cell.ace_info {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAJFBMVEUAAAChoaGAgIAqKiq+vr6tra1ZWVmUlJSbm5s8PDxubm56enrdgzg3AAAAAXRSTlMAQObYZgAAAClJREFUeNpjYMAPdsMYHegyJZFQBlsUlMFVCWUYKkAZMxZAGdxlDMQBAG+TBP4B6RyJAAAAAElFTkSuQmCC");}.ace_scrollbar {contain: strict;position: absolute;right: 0;bottom: 0;z-index: 6;}.ace_scrollbar-inner {position: absolute;cursor: text;left: 0;top: 0;}.ace_scrollbar-v{overflow-x: hidden;overflow-y: scroll;top: 0;}.ace_scrollbar-h {overflow-x: scroll;overflow-y: hidden;left: 0;}.ace_print-margin {position: absolute;height: 100%;}.ace_text-input {position: absolute;z-index: 0;width: 0.5em;height: 1em;opacity: 0;background: transparent;-moz-appearance: none;appearance: none;border: none;resize: none;outline: none;overflow: hidden;font: inherit;padding: 0 1px;margin: 0 -1px;contain: strict;-ms-user-select: text;-moz-user-select: text;-webkit-user-select: text;user-select: text;white-space: pre!important;}.ace_text-input.ace_composition {background: transparent;color: inherit;z-index: 1000;opacity: 1;}.ace_composition_placeholder { color: transparent }.ace_composition_marker { border-bottom: 1px solid;position: absolute;border-radius: 0;margin-top: 1px;}[ace_nocontext=true] {transform: none!important;filter: none!important;clip-path: none!important;mask : none!important;contain: none!important;perspective: none!important;mix-blend-mode: initial!important;z-index: auto;}.ace_layer {z-index: 1;position: absolute;overflow: hidden;word-wrap: normal;white-space: pre;height: 100%;width: 100%;box-sizing: border-box;pointer-events: none;}.ace_gutter-layer {position: relative;width: auto;text-align: right;pointer-events: auto;height: 1000000px;contain: style size layout;}.ace_text-layer {font: inherit !important;position: absolute;height: 1000000px;width: 1000000px;contain: style size layout;}.ace_text-layer > .ace_line, .ace_text-layer > .ace_line_group {contain: style size layout;position: absolute;top: 0;left: 0;right: 0;}.ace_hidpi .ace_text-layer,.ace_hidpi .ace_gutter-layer,.ace_hidpi .ace_content,.ace_hidpi .ace_gutter {contain: strict;will-change: transform;}.ace_hidpi .ace_text-layer > .ace_line, .ace_hidpi .ace_text-layer > .ace_line_group {contain: strict;}.ace_cjk {display: inline-block;text-align: center;}.ace_cursor-layer {z-index: 4;}.ace_cursor {z-index: 4;position: absolute;box-sizing: border-box;border-left: 2px solid;transform: translatez(0);}.ace_multiselect .ace_cursor {border-left-width: 1px;}.ace_slim-cursors .ace_cursor {border-left-width: 1px;}.ace_overwrite-cursors .ace_cursor {border-left-width: 0;border-bottom: 1px solid;}.ace_hidden-cursors .ace_cursor {opacity: 0.2;}.ace_hasPlaceholder .ace_hidden-cursors .ace_cursor {opacity: 0;}.ace_smooth-blinking .ace_cursor {transition: opacity 0.18s;}.ace_animate-blinking .ace_cursor {animation-duration: 1000ms;animation-timing-function: step-end;animation-name: blink-ace-animate;animation-iteration-count: infinite;}.ace_animate-blinking.ace_smooth-blinking .ace_cursor {animation-duration: 1000ms;animation-timing-function: ease-in-out;animation-name: blink-ace-animate-smooth;}@keyframes blink-ace-animate {from, to { opacity: 1; }60% { opacity: 0; }}@keyframes blink-ace-animate-smooth {from, to { opacity: 1; }45% { opacity: 1; }60% { opacity: 0; }85% { opacity: 0; }}.ace_marker-layer .ace_step, .ace_marker-layer .ace_stack {position: absolute;z-index: 3;}.ace_marker-layer .ace_selection {position: absolute;z-index: 5;}.ace_marker-layer .ace_bracket {position: absolute;z-index: 6;}.ace_marker-layer .ace_error_bracket {position: absolute;border-bottom: 1px solid #DE5555;border-radius: 0;}.ace_marker-layer .ace_active-line {position: absolute;z-index: 2;}.ace_marker-layer .ace_selected-word {position: absolute;z-index: 4;box-sizing: border-box;}.ace_line .ace_fold {box-sizing: border-box;display: inline-block;height: 11px;margin-top: -2px;vertical-align: middle;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII="),url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACJJREFUeNpi+P//fxgTAwPDBxDxD078RSX+YeEyDFMCIMAAI3INmXiwf2YAAAAASUVORK5CYII=");background-repeat: no-repeat, repeat-x;background-position: center center, top left;color: transparent;border: 1px solid black;border-radius: 2px;cursor: pointer;pointer-events: auto;}.ace_dark .ace_fold {}.ace_fold:hover{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII="),url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACBJREFUeNpi+P//fz4TAwPDZxDxD5X4i5fLMEwJgAADAEPVDbjNw87ZAAAAAElFTkSuQmCC");}.ace_tooltip {background-color: #FFF;background-image: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.1));border: 1px solid gray;border-radius: 1px;box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);color: black;max-width: 100%;padding: 3px 4px;position: fixed;z-index: 999999;box-sizing: border-box;cursor: default;white-space: pre;word-wrap: break-word;line-height: normal;font-style: normal;font-weight: normal;letter-spacing: normal;pointer-events: none;}.ace_folding-enabled > .ace_gutter-cell {padding-right: 13px;}.ace_fold-widget {box-sizing: border-box;margin: 0 -12px 0 1px;display: none;width: 11px;vertical-align: top;background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42mWKsQ0AMAzC8ixLlrzQjzmBiEjp0A6WwBCSPgKAXoLkqSot7nN3yMwR7pZ32NzpKkVoDBUxKAAAAABJRU5ErkJggg==");background-repeat: no-repeat;background-position: center;border-radius: 3px;border: 1px solid transparent;cursor: pointer;}.ace_folding-enabled .ace_fold-widget {display: inline-block;   }.ace_fold-widget.ace_end {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42m3HwQkAMAhD0YzsRchFKI7sAikeWkrxwScEB0nh5e7KTPWimZki4tYfVbX+MNl4pyZXejUO1QAAAABJRU5ErkJggg==");}.ace_fold-widget.ace_closed {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAGCAYAAAAG5SQMAAAAOUlEQVR42jXKwQkAMAgDwKwqKD4EwQ26sSOkVWjgIIHAzPiCgaqiqnJHZnKICBERHN194O5b9vbLuAVRL+l0YWnZAAAAAElFTkSuQmCCXA==");}.ace_fold-widget:hover {border: 1px solid rgba(0, 0, 0, 0.3);background-color: rgba(255, 255, 255, 0.2);box-shadow: 0 1px 1px rgba(255, 255, 255, 0.7);}.ace_fold-widget:active {border: 1px solid rgba(0, 0, 0, 0.4);background-color: rgba(0, 0, 0, 0.05);box-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);}.ace_dark .ace_fold-widget {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHklEQVQIW2P4//8/AzoGEQ7oGCaLLAhWiSwB146BAQCSTPYocqT0AAAAAElFTkSuQmCC");}.ace_dark .ace_fold-widget.ace_end {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAH0lEQVQIW2P4//8/AxQ7wNjIAjDMgC4AxjCVKBirIAAF0kz2rlhxpAAAAABJRU5ErkJggg==");}.ace_dark .ace_fold-widget.ace_closed {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAFCAYAAACAcVaiAAAAHElEQVQIW2P4//+/AxAzgDADlOOAznHAKgPWAwARji8UIDTfQQAAAABJRU5ErkJggg==");}.ace_dark .ace_fold-widget:hover {box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);background-color: rgba(255, 255, 255, 0.1);}.ace_dark .ace_fold-widget:active {box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);}.ace_inline_button {border: 1px solid lightgray;display: inline-block;margin: -1px 8px;padding: 0 5px;pointer-events: auto;cursor: pointer;}.ace_inline_button:hover {border-color: gray;background: rgba(200,200,200,0.2);display: inline-block;pointer-events: auto;}.ace_fold-widget.ace_invalid {background-color: #FFB4B4;border-color: #DE5555;}.ace_fade-fold-widgets .ace_fold-widget {transition: opacity 0.4s ease 0.05s;opacity: 0;}.ace_fade-fold-widgets:hover .ace_fold-widget {transition: opacity 0.05s ease 0.05s;opacity:1;}.ace_underline {text-decoration: underline;}.ace_bold {font-weight: bold;}.ace_nobold .ace_bold {font-weight: normal;}.ace_italic {font-style: italic;}.ace_error-marker {background-color: rgba(255, 0, 0,0.2);position: absolute;z-index: 9;}.ace_highlight-marker {background-color: rgba(255, 255, 0,0.2);position: absolute;z-index: 8;}.ace_mobile-menu {position: absolute;line-height: 1.5;border-radius: 4px;-ms-user-select: none;-moz-user-select: none;-webkit-user-select: none;user-select: none;background: white;box-shadow: 1px 3px 2px grey;border: 1px solid #dcdcdc;color: black;}.ace_dark > .ace_mobile-menu {background: #333;color: #ccc;box-shadow: 1px 3px 2px grey;border: 1px solid #444;}.ace_mobile-button {padding: 2px;cursor: pointer;overflow: hidden;}.ace_mobile-button:hover {background-color: #eee;opacity:1;}.ace_mobile-button:active {background-color: #ddd;}.ace_placeholder {font-family: arial;transform: scale(0.9);transform-origin: left;white-space: pre;opacity: 0.7;margin: 0 10px;}',
        m = e("./lib/useragent"),
        g = m.isIE;i.importCssString(v, "ace_editor.css");var y = function y(e, t) {
        var n = this;this.container = e || i.createElement("div"), i.addCssClass(this.container, "ace_editor"), i.HI_DPI && i.addCssClass(this.container, "ace_hidpi"), this.setTheme(t), this.$gutter = i.createElement("div"), this.$gutter.className = "ace_gutter", this.container.appendChild(this.$gutter), this.$gutter.setAttribute("aria-hidden", !0), this.scroller = i.createElement("div"), this.scroller.className = "ace_scroller", this.container.appendChild(this.scroller), this.content = i.createElement("div"), this.content.className = "ace_content", this.scroller.appendChild(this.content), this.$gutterLayer = new o(this.$gutter), this.$gutterLayer.on("changeGutterWidth", this.onGutterResize.bind(this)), this.$markerBack = new u(this.content);var r = this.$textLayer = new a(this.content);this.canvas = r.element, this.$markerFront = new u(this.content), this.$cursorLayer = new f(this.content), this.$horizScroll = !1, this.$vScroll = !1, this.scrollBar = this.scrollBarV = new c(this.container, this), this.scrollBarH = new l(this.container, this), this.scrollBarV.addEventListener("scroll", function (e) {
            n.$scrollAnimation || n.session.setScrollTop(e.data - n.scrollMargin.top);
        }), this.scrollBarH.addEventListener("scroll", function (e) {
            n.$scrollAnimation || n.session.setScrollLeft(e.data - n.scrollMargin.left);
        }), this.scrollTop = 0, this.scrollLeft = 0, this.cursorPos = { row: 0, column: 0 }, this.$fontMetrics = new p(this.container), this.$textLayer.$setFontMetrics(this.$fontMetrics), this.$textLayer.addEventListener("changeCharacterSize", function (e) {
            n.updateCharacterSize(), n.onResize(!0, n.gutterWidth, n.$size.width, n.$size.height), n._signal("changeCharacterSize", e);
        }), this.$size = { width: 0, height: 0, scrollerHeight: 0, scrollerWidth: 0, $dirty: !0 }, this.layerConfig = { width: 1, padding: 0, firstRow: 0, firstRowScreen: 0, lastRow: 0, lineHeight: 0, characterWidth: 0, minHeight: 1, maxHeight: 1, offset: 0, height: 1, gutterOffset: 1 }, this.scrollMargin = { left: 0, right: 0, top: 0, bottom: 0, v: 0, h: 0 }, this.margin = { left: 0, right: 0, top: 0, bottom: 0, v: 0, h: 0 }, this.$keepTextAreaAtCursor = !m.isIOS, this.$loop = new h(this.$renderChanges.bind(this), this.container.ownerDocument.defaultView), this.$loop.schedule(this.CHANGE_FULL), this.updateCharacterSize(), this.setPadding(4), s.resetOptions(this), s._signal("renderer", this);
    };(function () {
        this.CHANGE_CURSOR = 1, this.CHANGE_MARKER = 2, this.CHANGE_GUTTER = 4, this.CHANGE_SCROLL = 8, this.CHANGE_LINES = 16, this.CHANGE_TEXT = 32, this.CHANGE_SIZE = 64, this.CHANGE_MARKER_BACK = 128, this.CHANGE_MARKER_FRONT = 256, this.CHANGE_FULL = 512, this.CHANGE_H_SCROLL = 1024, r.implement(this, d), this.updateCharacterSize = function () {
            this.$textLayer.allowBoldFonts != this.$allowBoldFonts && (this.$allowBoldFonts = this.$textLayer.allowBoldFonts, this.setStyle("ace_nobold", !this.$allowBoldFonts)), this.layerConfig.characterWidth = this.characterWidth = this.$textLayer.getCharacterWidth(), this.layerConfig.lineHeight = this.lineHeight = this.$textLayer.getLineHeight(), this.$updatePrintMargin(), i.setStyle(this.scroller.style, "line-height", this.lineHeight + "px");
        }, this.setSession = function (e) {
            this.session && this.session.doc.off("changeNewLineMode", this.onChangeNewLineMode), this.session = e, e && this.scrollMargin.top && e.getScrollTop() <= 0 && e.setScrollTop(-this.scrollMargin.top), this.$cursorLayer.setSession(e), this.$markerBack.setSession(e), this.$markerFront.setSession(e), this.$gutterLayer.setSession(e), this.$textLayer.setSession(e);if (!e) return;this.$loop.schedule(this.CHANGE_FULL), this.session.$setFontMetrics(this.$fontMetrics), this.scrollBarH.scrollLeft = this.scrollBarV.scrollTop = null, this.onChangeNewLineMode = this.onChangeNewLineMode.bind(this), this.onChangeNewLineMode(), this.session.doc.on("changeNewLineMode", this.onChangeNewLineMode);
        }, this.updateLines = function (e, t, n) {
            t === undefined && (t = Infinity), this.$changedLines ? (this.$changedLines.firstRow > e && (this.$changedLines.firstRow = e), this.$changedLines.lastRow < t && (this.$changedLines.lastRow = t)) : this.$changedLines = { firstRow: e, lastRow: t };if (this.$changedLines.lastRow < this.layerConfig.firstRow) {
                if (!n) return;this.$changedLines.lastRow = this.layerConfig.lastRow;
            }if (this.$changedLines.firstRow > this.layerConfig.lastRow) return;this.$loop.schedule(this.CHANGE_LINES);
        }, this.onChangeNewLineMode = function () {
            this.$loop.schedule(this.CHANGE_TEXT), this.$textLayer.$updateEolChar(), this.session.$bidiHandler.setEolChar(this.$textLayer.EOL_CHAR);
        }, this.onChangeTabSize = function () {
            this.$loop.schedule(this.CHANGE_TEXT | this.CHANGE_MARKER), this.$textLayer.onChangeTabSize();
        }, this.updateText = function () {
            this.$loop.schedule(this.CHANGE_TEXT);
        }, this.updateFull = function (e) {
            e ? this.$renderChanges(this.CHANGE_FULL, !0) : this.$loop.schedule(this.CHANGE_FULL);
        }, this.updateFontSize = function () {
            this.$textLayer.checkForSizeChanges();
        }, this.$changes = 0, this.$updateSizeAsync = function () {
            this.$loop.pending ? this.$size.$dirty = !0 : this.onResize();
        }, this.onResize = function (e, t, n, r) {
            if (this.resizing > 2) return;this.resizing > 0 ? this.resizing++ : this.resizing = e ? 1 : 0;var i = this.container;r || (r = i.clientHeight || i.scrollHeight), n || (n = i.clientWidth || i.scrollWidth);var s = this.$updateCachedSize(e, t, n, r);if (!this.$size.scrollerHeight || !n && !r) return this.resizing = 0;e && (this.$gutterLayer.$padding = null), e ? this.$renderChanges(s | this.$changes, !0) : this.$loop.schedule(s | this.$changes), this.resizing && (this.resizing = 0), this.scrollBarV.scrollLeft = this.scrollBarV.scrollTop = null;
        }, this.$updateCachedSize = function (e, t, n, r) {
            r -= this.$extraHeight || 0;var s = 0,
                o = this.$size,
                u = { width: o.width, height: o.height, scrollerHeight: o.scrollerHeight, scrollerWidth: o.scrollerWidth };r && (e || o.height != r) && (o.height = r, s |= this.CHANGE_SIZE, o.scrollerHeight = o.height, this.$horizScroll && (o.scrollerHeight -= this.scrollBarH.getHeight()), this.scrollBarV.element.style.bottom = this.scrollBarH.getHeight() + "px", s |= this.CHANGE_SCROLL);if (n && (e || o.width != n)) {
                s |= this.CHANGE_SIZE, o.width = n, t == null && (t = this.$showGutter ? this.$gutter.offsetWidth : 0), this.gutterWidth = t, i.setStyle(this.scrollBarH.element.style, "left", t + "px"), i.setStyle(this.scroller.style, "left", t + this.margin.left + "px"), o.scrollerWidth = Math.max(0, n - t - this.scrollBarV.getWidth() - this.margin.h), i.setStyle(this.$gutter.style, "left", this.margin.left + "px");var a = this.scrollBarV.getWidth() + "px";i.setStyle(this.scrollBarH.element.style, "right", a), i.setStyle(this.scroller.style, "right", a), i.setStyle(this.scroller.style, "bottom", this.scrollBarH.getHeight());if (this.session && this.session.getUseWrapMode() && this.adjustWrapLimit() || e) s |= this.CHANGE_FULL;
            }return o.$dirty = !n || !r, s && this._signal("resize", u), s;
        }, this.onGutterResize = function (e) {
            var t = this.$showGutter ? e : 0;t != this.gutterWidth && (this.$changes |= this.$updateCachedSize(!0, t, this.$size.width, this.$size.height)), this.session.getUseWrapMode() && this.adjustWrapLimit() ? this.$loop.schedule(this.CHANGE_FULL) : this.$size.$dirty ? this.$loop.schedule(this.CHANGE_FULL) : this.$computeLayerConfig();
        }, this.adjustWrapLimit = function () {
            var e = this.$size.scrollerWidth - this.$padding * 2,
                t = Math.floor(e / this.characterWidth);return this.session.adjustWrapLimit(t, this.$showPrintMargin && this.$printMarginColumn);
        }, this.setAnimatedScroll = function (e) {
            this.setOption("animatedScroll", e);
        }, this.getAnimatedScroll = function () {
            return this.$animatedScroll;
        }, this.setShowInvisibles = function (e) {
            this.setOption("showInvisibles", e), this.session.$bidiHandler.setShowInvisibles(e);
        }, this.getShowInvisibles = function () {
            return this.getOption("showInvisibles");
        }, this.getDisplayIndentGuides = function () {
            return this.getOption("displayIndentGuides");
        }, this.setDisplayIndentGuides = function (e) {
            this.setOption("displayIndentGuides", e);
        }, this.setShowPrintMargin = function (e) {
            this.setOption("showPrintMargin", e);
        }, this.getShowPrintMargin = function () {
            return this.getOption("showPrintMargin");
        }, this.setPrintMarginColumn = function (e) {
            this.setOption("printMarginColumn", e);
        }, this.getPrintMarginColumn = function () {
            return this.getOption("printMarginColumn");
        }, this.getShowGutter = function () {
            return this.getOption("showGutter");
        }, this.setShowGutter = function (e) {
            return this.setOption("showGutter", e);
        }, this.getFadeFoldWidgets = function () {
            return this.getOption("fadeFoldWidgets");
        }, this.setFadeFoldWidgets = function (e) {
            this.setOption("fadeFoldWidgets", e);
        }, this.setHighlightGutterLine = function (e) {
            this.setOption("highlightGutterLine", e);
        }, this.getHighlightGutterLine = function () {
            return this.getOption("highlightGutterLine");
        }, this.$updatePrintMargin = function () {
            if (!this.$showPrintMargin && !this.$printMarginEl) return;if (!this.$printMarginEl) {
                var e = i.createElement("div");e.className = "ace_layer ace_print-margin-layer", this.$printMarginEl = i.createElement("div"), this.$printMarginEl.className = "ace_print-margin", e.appendChild(this.$printMarginEl), this.content.insertBefore(e, this.content.firstChild);
            }var t = this.$printMarginEl.style;t.left = Math.round(this.characterWidth * this.$printMarginColumn + this.$padding) + "px", t.visibility = this.$showPrintMargin ? "visible" : "hidden", this.session && this.session.$wrap == -1 && this.adjustWrapLimit();
        }, this.getContainerElement = function () {
            return this.container;
        }, this.getMouseEventTarget = function () {
            return this.scroller;
        }, this.getTextAreaContainer = function () {
            return this.container;
        }, this.$moveTextAreaToCursor = function () {
            if (this.$isMousePressed) return;var e = this.textarea.style,
                t = this.$composition;if (!this.$keepTextAreaAtCursor && !t) {
                i.translate(this.textarea, -100, 0);return;
            }var n = this.$cursorLayer.$pixelPos;if (!n) return;t && t.markerRange && (n = this.$cursorLayer.getPixelPosition(t.markerRange.start, !0));var r = this.layerConfig,
                s = n.top,
                o = n.left;s -= r.offset;var u = t && t.useTextareaForIME ? this.lineHeight : g ? 0 : 1;if (s < 0 || s > r.height - u) {
                i.translate(this.textarea, 0, 0);return;
            }var a = 1,
                f = this.$size.height - u;if (!t) s += this.lineHeight;else if (t.useTextareaForIME) {
                var l = this.textarea.value;a = this.characterWidth * this.session.$getStringScreenWidth(l)[0];
            } else s += this.lineHeight + 2;o -= this.scrollLeft, o > this.$size.scrollerWidth - a && (o = this.$size.scrollerWidth - a), o += this.gutterWidth + this.margin.left, i.setStyle(e, "height", u + "px"), i.setStyle(e, "width", a + "px"), i.translate(this.textarea, Math.min(o, this.$size.scrollerWidth - a), Math.min(s, f));
        }, this.getFirstVisibleRow = function () {
            return this.layerConfig.firstRow;
        }, this.getFirstFullyVisibleRow = function () {
            return this.layerConfig.firstRow + (this.layerConfig.offset === 0 ? 0 : 1);
        }, this.getLastFullyVisibleRow = function () {
            var e = this.layerConfig,
                t = e.lastRow,
                n = this.session.documentToScreenRow(t, 0) * e.lineHeight;return n - this.session.getScrollTop() > e.height - e.lineHeight ? t - 1 : t;
        }, this.getLastVisibleRow = function () {
            return this.layerConfig.lastRow;
        }, this.$padding = null, this.setPadding = function (e) {
            this.$padding = e, this.$textLayer.setPadding(e), this.$cursorLayer.setPadding(e), this.$markerFront.setPadding(e), this.$markerBack.setPadding(e), this.$loop.schedule(this.CHANGE_FULL), this.$updatePrintMargin();
        }, this.setScrollMargin = function (e, t, n, r) {
            var i = this.scrollMargin;i.top = e | 0, i.bottom = t | 0, i.right = r | 0, i.left = n | 0, i.v = i.top + i.bottom, i.h = i.left + i.right, i.top && this.scrollTop <= 0 && this.session && this.session.setScrollTop(-i.top), this.updateFull();
        }, this.setMargin = function (e, t, n, r) {
            var i = this.margin;i.top = e | 0, i.bottom = t | 0, i.right = r | 0, i.left = n | 0, i.v = i.top + i.bottom, i.h = i.left + i.right, this.$updateCachedSize(!0, this.gutterWidth, this.$size.width, this.$size.height), this.updateFull();
        }, this.getHScrollBarAlwaysVisible = function () {
            return this.$hScrollBarAlwaysVisible;
        }, this.setHScrollBarAlwaysVisible = function (e) {
            this.setOption("hScrollBarAlwaysVisible", e);
        }, this.getVScrollBarAlwaysVisible = function () {
            return this.$vScrollBarAlwaysVisible;
        }, this.setVScrollBarAlwaysVisible = function (e) {
            this.setOption("vScrollBarAlwaysVisible", e);
        }, this.$updateScrollBarV = function () {
            var e = this.layerConfig.maxHeight,
                t = this.$size.scrollerHeight;!this.$maxLines && this.$scrollPastEnd && (e -= (t - this.lineHeight) * this.$scrollPastEnd, this.scrollTop > e - t && (e = this.scrollTop + t, this.scrollBarV.scrollTop = null)), this.scrollBarV.setScrollHeight(e + this.scrollMargin.v), this.scrollBarV.setScrollTop(this.scrollTop + this.scrollMargin.top);
        }, this.$updateScrollBarH = function () {
            this.scrollBarH.setScrollWidth(this.layerConfig.width + 2 * this.$padding + this.scrollMargin.h), this.scrollBarH.setScrollLeft(this.scrollLeft + this.scrollMargin.left);
        }, this.$frozen = !1, this.freeze = function () {
            this.$frozen = !0;
        }, this.unfreeze = function () {
            this.$frozen = !1;
        }, this.$renderChanges = function (e, t) {
            this.$changes && (e |= this.$changes, this.$changes = 0);if (!this.session || !this.container.offsetWidth || this.$frozen || !e && !t) {
                this.$changes |= e;return;
            }if (this.$size.$dirty) return this.$changes |= e, this.onResize(!0);this.lineHeight || this.$textLayer.checkForSizeChanges(), this._signal("beforeRender", e), this.session && this.session.$bidiHandler && this.session.$bidiHandler.updateCharacterWidths(this.$fontMetrics);var n = this.layerConfig;if (e & this.CHANGE_FULL || e & this.CHANGE_SIZE || e & this.CHANGE_TEXT || e & this.CHANGE_LINES || e & this.CHANGE_SCROLL || e & this.CHANGE_H_SCROLL) {
                e |= this.$computeLayerConfig() | this.$loop.clear();if (n.firstRow != this.layerConfig.firstRow && n.firstRowScreen == this.layerConfig.firstRowScreen) {
                    var r = this.scrollTop + (n.firstRow - this.layerConfig.firstRow) * this.lineHeight;r > 0 && (this.scrollTop = r, e |= this.CHANGE_SCROLL, e |= this.$computeLayerConfig() | this.$loop.clear());
                }n = this.layerConfig, this.$updateScrollBarV(), e & this.CHANGE_H_SCROLL && this.$updateScrollBarH(), i.translate(this.content, -this.scrollLeft, -n.offset);var s = n.width + 2 * this.$padding + "px",
                    o = n.minHeight + "px";i.setStyle(this.content.style, "width", s), i.setStyle(this.content.style, "height", o);
            }e & this.CHANGE_H_SCROLL && (i.translate(this.content, -this.scrollLeft, -n.offset), this.scroller.className = this.scrollLeft <= 0 ? "ace_scroller" : "ace_scroller ace_scroll-left");if (e & this.CHANGE_FULL) {
                this.$changedLines = null, this.$textLayer.update(n), this.$showGutter && this.$gutterLayer.update(n), this.$markerBack.update(n), this.$markerFront.update(n), this.$cursorLayer.update(n), this.$moveTextAreaToCursor(), this._signal("afterRender", e);return;
            }if (e & this.CHANGE_SCROLL) {
                this.$changedLines = null, e & this.CHANGE_TEXT || e & this.CHANGE_LINES ? this.$textLayer.update(n) : this.$textLayer.scrollLines(n), this.$showGutter && (e & this.CHANGE_GUTTER || e & this.CHANGE_LINES ? this.$gutterLayer.update(n) : this.$gutterLayer.scrollLines(n)), this.$markerBack.update(n), this.$markerFront.update(n), this.$cursorLayer.update(n), this.$moveTextAreaToCursor(), this._signal("afterRender", e);return;
            }e & this.CHANGE_TEXT ? (this.$changedLines = null, this.$textLayer.update(n), this.$showGutter && this.$gutterLayer.update(n)) : e & this.CHANGE_LINES ? (this.$updateLines() || e & this.CHANGE_GUTTER && this.$showGutter) && this.$gutterLayer.update(n) : e & this.CHANGE_TEXT || e & this.CHANGE_GUTTER ? this.$showGutter && this.$gutterLayer.update(n) : e & this.CHANGE_CURSOR && this.$highlightGutterLine && this.$gutterLayer.updateLineHighlight(n), e & this.CHANGE_CURSOR && (this.$cursorLayer.update(n), this.$moveTextAreaToCursor()), e & (this.CHANGE_MARKER | this.CHANGE_MARKER_FRONT) && this.$markerFront.update(n), e & (this.CHANGE_MARKER | this.CHANGE_MARKER_BACK) && this.$markerBack.update(n), this._signal("afterRender", e);
        }, this.$autosize = function () {
            var e = this.session.getScreenLength() * this.lineHeight,
                t = this.$maxLines * this.lineHeight,
                n = Math.min(t, Math.max((this.$minLines || 1) * this.lineHeight, e)) + this.scrollMargin.v + (this.$extraHeight || 0);this.$horizScroll && (n += this.scrollBarH.getHeight()), this.$maxPixelHeight && n > this.$maxPixelHeight && (n = this.$maxPixelHeight);var r = n <= 2 * this.lineHeight,
                i = !r && e > t;if (n != this.desiredHeight || this.$size.height != this.desiredHeight || i != this.$vScroll) {
                i != this.$vScroll && (this.$vScroll = i, this.scrollBarV.setVisible(i));var s = this.container.clientWidth;this.container.style.height = n + "px", this.$updateCachedSize(!0, this.$gutterWidth, s, n), this.desiredHeight = n, this._signal("autosize");
            }
        }, this.$computeLayerConfig = function () {
            var e = this.session,
                t = this.$size,
                n = t.height <= 2 * this.lineHeight,
                r = this.session.getScreenLength(),
                i = r * this.lineHeight,
                s = this.$getLongestLine(),
                o = !n && (this.$hScrollBarAlwaysVisible || t.scrollerWidth - s - 2 * this.$padding < 0),
                u = this.$horizScroll !== o;u && (this.$horizScroll = o, this.scrollBarH.setVisible(o));var a = this.$vScroll;this.$maxLines && this.lineHeight > 1 && this.$autosize();var f = t.scrollerHeight + this.lineHeight,
                l = !this.$maxLines && this.$scrollPastEnd ? (t.scrollerHeight - this.lineHeight) * this.$scrollPastEnd : 0;i += l;var c = this.scrollMargin;this.session.setScrollTop(Math.max(-c.top, Math.min(this.scrollTop, i - t.scrollerHeight + c.bottom))), this.session.setScrollLeft(Math.max(-c.left, Math.min(this.scrollLeft, s + 2 * this.$padding - t.scrollerWidth + c.right)));var h = !n && (this.$vScrollBarAlwaysVisible || t.scrollerHeight - i + l < 0 || this.scrollTop > c.top),
                p = a !== h;p && (this.$vScroll = h, this.scrollBarV.setVisible(h));var d = this.scrollTop % this.lineHeight,
                v = Math.ceil(f / this.lineHeight) - 1,
                m = Math.max(0, Math.round((this.scrollTop - d) / this.lineHeight)),
                g = m + v,
                y,
                b,
                w = this.lineHeight;m = e.screenToDocumentRow(m, 0);var E = e.getFoldLine(m);E && (m = E.start.row), y = e.documentToScreenRow(m, 0), b = e.getRowLength(m) * w, g = Math.min(e.screenToDocumentRow(g, 0), e.getLength() - 1), f = t.scrollerHeight + e.getRowLength(g) * w + b, d = this.scrollTop - y * w;var S = 0;if (this.layerConfig.width != s || u) S = this.CHANGE_H_SCROLL;if (u || p) S |= this.$updateCachedSize(!0, this.gutterWidth, t.width, t.height), this._signal("scrollbarVisibilityChanged"), p && (s = this.$getLongestLine());return this.layerConfig = { width: s, padding: this.$padding, firstRow: m, firstRowScreen: y, lastRow: g, lineHeight: w, characterWidth: this.characterWidth, minHeight: f, maxHeight: i, offset: d, gutterOffset: w ? Math.max(0, Math.ceil((d + t.height - t.scrollerHeight) / w)) : 0, height: this.$size.scrollerHeight }, this.session.$bidiHandler && this.session.$bidiHandler.setContentWidth(s - this.$padding), S;
        }, this.$updateLines = function () {
            if (!this.$changedLines) return;var e = this.$changedLines.firstRow,
                t = this.$changedLines.lastRow;this.$changedLines = null;var n = this.layerConfig;if (e > n.lastRow + 1) return;if (t < n.firstRow) return;if (t === Infinity) {
                this.$showGutter && this.$gutterLayer.update(n), this.$textLayer.update(n);return;
            }return this.$textLayer.updateLines(n, e, t), !0;
        }, this.$getLongestLine = function () {
            var e = this.session.getScreenWidth();return this.showInvisibles && !this.session.$useWrapMode && (e += 1), this.$textLayer && e > this.$textLayer.MAX_LINE_LENGTH && (e = this.$textLayer.MAX_LINE_LENGTH + 30), Math.max(this.$size.scrollerWidth - 2 * this.$padding, Math.round(e * this.characterWidth));
        }, this.updateFrontMarkers = function () {
            this.$markerFront.setMarkers(this.session.getMarkers(!0)), this.$loop.schedule(this.CHANGE_MARKER_FRONT);
        }, this.updateBackMarkers = function () {
            this.$markerBack.setMarkers(this.session.getMarkers()), this.$loop.schedule(this.CHANGE_MARKER_BACK);
        }, this.addGutterDecoration = function (e, t) {
            this.$gutterLayer.addGutterDecoration(e, t);
        }, this.removeGutterDecoration = function (e, t) {
            this.$gutterLayer.removeGutterDecoration(e, t);
        }, this.updateBreakpoints = function (e) {
            this.$loop.schedule(this.CHANGE_GUTTER);
        }, this.setAnnotations = function (e) {
            this.$gutterLayer.setAnnotations(e), this.$loop.schedule(this.CHANGE_GUTTER);
        }, this.updateCursor = function () {
            this.$loop.schedule(this.CHANGE_CURSOR);
        }, this.hideCursor = function () {
            this.$cursorLayer.hideCursor();
        }, this.showCursor = function () {
            this.$cursorLayer.showCursor();
        }, this.scrollSelectionIntoView = function (e, t, n) {
            this.scrollCursorIntoView(e, n), this.scrollCursorIntoView(t, n);
        }, this.scrollCursorIntoView = function (e, t, n) {
            if (this.$size.scrollerHeight === 0) return;var r = this.$cursorLayer.getPixelPosition(e),
                i = r.left,
                s = r.top,
                o = n && n.top || 0,
                u = n && n.bottom || 0,
                a = this.$scrollAnimation ? this.session.getScrollTop() : this.scrollTop;a + o > s ? (t && a + o > s + this.lineHeight && (s -= t * this.$size.scrollerHeight), s === 0 && (s = -this.scrollMargin.top), this.session.setScrollTop(s)) : a + this.$size.scrollerHeight - u < s + this.lineHeight && (t && a + this.$size.scrollerHeight - u < s - this.lineHeight && (s += t * this.$size.scrollerHeight), this.session.setScrollTop(s + this.lineHeight + u - this.$size.scrollerHeight));var f = this.scrollLeft;f > i ? (i < this.$padding + 2 * this.layerConfig.characterWidth && (i = -this.scrollMargin.left), this.session.setScrollLeft(i)) : f + this.$size.scrollerWidth < i + this.characterWidth ? this.session.setScrollLeft(Math.round(i + this.characterWidth - this.$size.scrollerWidth)) : f <= this.$padding && i - f < this.characterWidth && this.session.setScrollLeft(0);
        }, this.getScrollTop = function () {
            return this.session.getScrollTop();
        }, this.getScrollLeft = function () {
            return this.session.getScrollLeft();
        }, this.getScrollTopRow = function () {
            return this.scrollTop / this.lineHeight;
        }, this.getScrollBottomRow = function () {
            return Math.max(0, Math.floor((this.scrollTop + this.$size.scrollerHeight) / this.lineHeight) - 1);
        }, this.scrollToRow = function (e) {
            this.session.setScrollTop(e * this.lineHeight);
        }, this.alignCursor = function (e, t) {
            typeof e == "number" && (e = { row: e, column: 0 });var n = this.$cursorLayer.getPixelPosition(e),
                r = this.$size.scrollerHeight - this.lineHeight,
                i = n.top - r * (t || 0);return this.session.setScrollTop(i), i;
        }, this.STEPS = 8, this.$calcSteps = function (e, t) {
            var n = 0,
                r = this.STEPS,
                i = [],
                s = function s(e, t, n) {
                return n * (Math.pow(e - 1, 3) + 1) + t;
            };for (n = 0; n < r; ++n) {
                i.push(s(n / this.STEPS, e, t - e));
            }return i;
        }, this.scrollToLine = function (e, t, n, r) {
            var i = this.$cursorLayer.getPixelPosition({ row: e, column: 0 }),
                s = i.top;t && (s -= this.$size.scrollerHeight / 2);var o = this.scrollTop;this.session.setScrollTop(s), n !== !1 && this.animateScrolling(o, r);
        }, this.animateScrolling = function (e, t) {
            var n = this.scrollTop;if (!this.$animatedScroll) return;var r = this;if (e == n) return;if (this.$scrollAnimation) {
                var i = this.$scrollAnimation.steps;if (i.length) {
                    e = i[0];if (e == n) return;
                }
            }var s = r.$calcSteps(e, n);this.$scrollAnimation = { from: e, to: n, steps: s }, clearInterval(this.$timer), r.session.setScrollTop(s.shift()), r.session.$scrollTop = n, this.$timer = setInterval(function () {
                s.length ? (r.session.setScrollTop(s.shift()), r.session.$scrollTop = n) : n != null ? (r.session.$scrollTop = -1, r.session.setScrollTop(n), n = null) : (r.$timer = clearInterval(r.$timer), r.$scrollAnimation = null, t && t());
            }, 10);
        }, this.scrollToY = function (e) {
            this.scrollTop !== e && (this.$loop.schedule(this.CHANGE_SCROLL), this.scrollTop = e);
        }, this.scrollToX = function (e) {
            this.scrollLeft !== e && (this.scrollLeft = e), this.$loop.schedule(this.CHANGE_H_SCROLL);
        }, this.scrollTo = function (e, t) {
            this.session.setScrollTop(t), this.session.setScrollLeft(t);
        }, this.scrollBy = function (e, t) {
            t && this.session.setScrollTop(this.session.getScrollTop() + t), e && this.session.setScrollLeft(this.session.getScrollLeft() + e);
        }, this.isScrollableBy = function (e, t) {
            if (t < 0 && this.session.getScrollTop() >= 1 - this.scrollMargin.top) return !0;if (t > 0 && this.session.getScrollTop() + this.$size.scrollerHeight - this.layerConfig.maxHeight < -1 + this.scrollMargin.bottom) return !0;if (e < 0 && this.session.getScrollLeft() >= 1 - this.scrollMargin.left) return !0;if (e > 0 && this.session.getScrollLeft() + this.$size.scrollerWidth - this.layerConfig.width < -1 + this.scrollMargin.right) return !0;
        }, this.pixelToScreenCoordinates = function (e, t) {
            var n;if (this.$hasCssTransforms) {
                n = { top: 0, left: 0 };var r = this.$fontMetrics.transformCoordinates([e, t]);e = r[1] - this.gutterWidth - this.margin.left, t = r[0];
            } else n = this.scroller.getBoundingClientRect();var i = e + this.scrollLeft - n.left - this.$padding,
                s = i / this.characterWidth,
                o = Math.floor((t + this.scrollTop - n.top) / this.lineHeight),
                u = this.$blockCursor ? Math.floor(s) : Math.round(s);return { row: o, column: u, side: s - u > 0 ? 1 : -1, offsetX: i };
        }, this.screenToTextCoordinates = function (e, t) {
            var n;if (this.$hasCssTransforms) {
                n = { top: 0, left: 0 };var r = this.$fontMetrics.transformCoordinates([e, t]);e = r[1] - this.gutterWidth - this.margin.left, t = r[0];
            } else n = this.scroller.getBoundingClientRect();var i = e + this.scrollLeft - n.left - this.$padding,
                s = i / this.characterWidth,
                o = this.$blockCursor ? Math.floor(s) : Math.round(s),
                u = Math.floor((t + this.scrollTop - n.top) / this.lineHeight);return this.session.screenToDocumentPosition(u, Math.max(o, 0), i);
        }, this.textToScreenCoordinates = function (e, t) {
            var n = this.scroller.getBoundingClientRect(),
                r = this.session.documentToScreenPosition(e, t),
                i = this.$padding + (this.session.$bidiHandler.isBidiRow(r.row, e) ? this.session.$bidiHandler.getPosLeft(r.column) : Math.round(r.column * this.characterWidth)),
                s = r.row * this.lineHeight;return { pageX: n.left + i - this.scrollLeft, pageY: n.top + s - this.scrollTop };
        }, this.visualizeFocus = function () {
            i.addCssClass(this.container, "ace_focus");
        }, this.visualizeBlur = function () {
            i.removeCssClass(this.container, "ace_focus");
        }, this.showComposition = function (e) {
            this.$composition = e, e.cssText || (e.cssText = this.textarea.style.cssText), e.useTextareaForIME = this.$useTextareaForIME, this.$useTextareaForIME ? (i.addCssClass(this.textarea, "ace_composition"), this.textarea.style.cssText = "", this.$moveTextAreaToCursor(), this.$cursorLayer.element.style.display = "none") : e.markerId = this.session.addMarker(e.markerRange, "ace_composition_marker", "text");
        }, this.setCompositionText = function (e) {
            var t = this.session.selection.cursor;this.addToken(e, "composition_placeholder", t.row, t.column), this.$moveTextAreaToCursor();
        }, this.hideComposition = function () {
            if (!this.$composition) return;this.$composition.markerId && this.session.removeMarker(this.$composition.markerId), i.removeCssClass(this.textarea, "ace_composition"), this.textarea.style.cssText = this.$composition.cssText, this.$composition = null, this.$cursorLayer.element.style.display = "";
        }, this.addToken = function (e, t, n, r) {
            var i = this.session;i.bgTokenizer.lines[n] = null;var s = { type: t, value: e },
                o = i.getTokens(n);if (r == null) o.push(s);else {
                var u = 0;for (var a = 0; a < o.length; a++) {
                    var f = o[a];u += f.value.length;if (r <= u) {
                        var l = f.value.length - (u - r),
                            c = f.value.slice(0, l),
                            h = f.value.slice(l);o.splice(a, 1, { type: f.type, value: c }, s, { type: f.type, value: h });break;
                    }
                }
            }this.updateLines(n, n);
        }, this.setTheme = function (e, t) {
            function o(r) {
                if (n.$themeId != e) return t && t();if (!r || !r.cssClass) throw new Error("couldn't load module " + e + " or it didn't call define");r.$id && (n.$themeId = r.$id), i.importCssString(r.cssText, r.cssClass, n.container), n.theme && i.removeCssClass(n.container, n.theme.cssClass);var s = "padding" in r ? r.padding : "padding" in (n.theme || {}) ? 4 : n.$padding;n.$padding && s != n.$padding && n.setPadding(s), n.$theme = r.cssClass, n.theme = r, i.addCssClass(n.container, r.cssClass), i.setCssClass(n.container, "ace_dark", r.isDark), n.$size && (n.$size.width = 0, n.$updateSizeAsync()), n._dispatchEvent("themeLoaded", { theme: r }), t && t();
            }var n = this;this.$themeId = e, n._dispatchEvent("themeChange", { theme: e });if (!e || typeof e == "string") {
                var r = e || this.$options.theme.initialValue;s.loadModule(["theme", r], o);
            } else o(e);
        }, this.getTheme = function () {
            return this.$themeId;
        }, this.setStyle = function (e, t) {
            i.setCssClass(this.container, e, t !== !1);
        }, this.unsetStyle = function (e) {
            i.removeCssClass(this.container, e);
        }, this.setCursorStyle = function (e) {
            i.setStyle(this.scroller.style, "cursor", e);
        }, this.setMouseCursor = function (e) {
            i.setStyle(this.scroller.style, "cursor", e);
        }, this.attachToShadowRoot = function () {
            i.importCssString(v, "ace_editor.css", this.container);
        }, this.destroy = function () {
            this.freeze(), this.$fontMetrics.destroy(), this.$cursorLayer.destroy();
        };
    }).call(y.prototype), s.defineOptions(y.prototype, "renderer", { animatedScroll: { initialValue: !1 }, showInvisibles: { set: function set(e) {
                this.$textLayer.setShowInvisibles(e) && this.$loop.schedule(this.CHANGE_TEXT);
            }, initialValue: !1 }, showPrintMargin: { set: function set() {
                this.$updatePrintMargin();
            }, initialValue: !0 }, printMarginColumn: { set: function set() {
                this.$updatePrintMargin();
            }, initialValue: 80 }, printMargin: { set: function set(e) {
                typeof e == "number" && (this.$printMarginColumn = e), this.$showPrintMargin = !!e, this.$updatePrintMargin();
            }, get: function get() {
                return this.$showPrintMargin && this.$printMarginColumn;
            } }, showGutter: { set: function set(e) {
                this.$gutter.style.display = e ? "block" : "none", this.$loop.schedule(this.CHANGE_FULL), this.onGutterResize();
            }, initialValue: !0 }, fadeFoldWidgets: { set: function set(e) {
                i.setCssClass(this.$gutter, "ace_fade-fold-widgets", e);
            }, initialValue: !1 }, showFoldWidgets: { set: function set(e) {
                this.$gutterLayer.setShowFoldWidgets(e), this.$loop.schedule(this.CHANGE_GUTTER);
            }, initialValue: !0 }, displayIndentGuides: { set: function set(e) {
                this.$textLayer.setDisplayIndentGuides(e) && this.$loop.schedule(this.CHANGE_TEXT);
            }, initialValue: !0 }, highlightGutterLine: { set: function set(e) {
                this.$gutterLayer.setHighlightGutterLine(e), this.$loop.schedule(this.CHANGE_GUTTER);
            }, initialValue: !0 }, hScrollBarAlwaysVisible: { set: function set(e) {
                (!this.$hScrollBarAlwaysVisible || !this.$horizScroll) && this.$loop.schedule(this.CHANGE_SCROLL);
            }, initialValue: !1 }, vScrollBarAlwaysVisible: { set: function set(e) {
                (!this.$vScrollBarAlwaysVisible || !this.$vScroll) && this.$loop.schedule(this.CHANGE_SCROLL);
            }, initialValue: !1 }, fontSize: { set: function set(e) {
                typeof e == "number" && (e += "px"), this.container.style.fontSize = e, this.updateFontSize();
            }, initialValue: 12 }, fontFamily: { set: function set(e) {
                this.container.style.fontFamily = e, this.updateFontSize();
            } }, maxLines: { set: function set(e) {
                this.updateFull();
            } }, minLines: { set: function set(e) {
                this.$minLines < 562949953421311 || (this.$minLines = 0), this.updateFull();
            } }, maxPixelHeight: { set: function set(e) {
                this.updateFull();
            }, initialValue: 0 }, scrollPastEnd: { set: function set(e) {
                e = +e || 0;if (this.$scrollPastEnd == e) return;this.$scrollPastEnd = e, this.$loop.schedule(this.CHANGE_SCROLL);
            }, initialValue: 0, handlesSet: !0 }, fixedWidthGutter: { set: function set(e) {
                this.$gutterLayer.$fixedWidth = !!e, this.$loop.schedule(this.CHANGE_GUTTER);
            } }, theme: { set: function set(e) {
                this.setTheme(e);
            }, get: function get() {
                return this.$themeId || this.theme;
            }, initialValue: "./theme/textmate", handlesSet: !0 }, hasCssTransforms: {}, useTextareaForIME: { initialValue: !m.isMobile && !m.isIE } }), t.VirtualRenderer = y;
}), ace.define("ace/worker/worker_client", ["require", "exports", "module", "ace/lib/oop", "ace/lib/net", "ace/lib/event_emitter", "ace/config"], function (e, t, n) {
    "use strict";
    function u(e) {
        var t = "importScripts('" + i.qualifyURL(e) + "');";try {
            return new Blob([t], { type: "application/javascript" });
        } catch (n) {
            var r = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder,
                s = new r();return s.append(t), s.getBlob("application/javascript");
        }
    }function a(e) {
        if (typeof Worker == "undefined") return { postMessage: function postMessage() {}, terminate: function terminate() {} };if (o.get("loadWorkerFromBlob")) {
            var t = u(e),
                n = window.URL || window.webkitURL,
                r = n.createObjectURL(t);return new Worker(r);
        }return new Worker(e);
    }var r = e("../lib/oop"),
        i = e("../lib/net"),
        s = e("../lib/event_emitter").EventEmitter,
        o = e("../config"),
        f = function f(e) {
        e.postMessage || (e = this.$createWorkerFromOldConfig.apply(this, arguments)), this.$worker = e, this.$sendDeltaQueue = this.$sendDeltaQueue.bind(this), this.changeListener = this.changeListener.bind(this), this.onMessage = this.onMessage.bind(this), this.callbackId = 1, this.callbacks = {}, this.$worker.onmessage = this.onMessage;
    };(function () {
        r.implement(this, s), this.$createWorkerFromOldConfig = function (t, n, r, i, s) {
            e.nameToUrl && !e.toUrl && (e.toUrl = e.nameToUrl);if (o.get("packaged") || !e.toUrl) i = i || o.moduleUrl(n, "worker");else {
                var u = this.$normalizePath;i = i || u(e.toUrl("ace/worker/worker.js", null, "_"));var f = {};t.forEach(function (t) {
                    f[t] = u(e.toUrl(t, null, "_").replace(/(\.js)?(\?.*)?$/, ""));
                });
            }return this.$worker = a(i), s && this.send("importScripts", s), this.$worker.postMessage({ init: !0, tlns: f, module: n, classname: r }), this.$worker;
        }, this.onMessage = function (e) {
            var t = e.data;switch (t.type) {case "event":
                    this._signal(t.name, { data: t.data });break;case "call":
                    var n = this.callbacks[t.id];n && (n(t.data), delete this.callbacks[t.id]);break;case "error":
                    this.reportError(t.data);break;case "log":
                    window.console && console.log && console.log.apply(console, t.data);}
        }, this.reportError = function (e) {
            window.console && console.error && console.error(e);
        }, this.$normalizePath = function (e) {
            return i.qualifyURL(e);
        }, this.terminate = function () {
            this._signal("terminate", {}), this.deltaQueue = null, this.$worker.terminate(), this.$worker = null, this.$doc && this.$doc.off("change", this.changeListener), this.$doc = null;
        }, this.send = function (e, t) {
            this.$worker.postMessage({ command: e, args: t });
        }, this.call = function (e, t, n) {
            if (n) {
                var r = this.callbackId++;this.callbacks[r] = n, t.push(r);
            }this.send(e, t);
        }, this.emit = function (e, t) {
            try {
                t.data && t.data.err && (t.data.err = { message: t.data.err.message, stack: t.data.err.stack, code: t.data.err.code }), this.$worker.postMessage({ event: e, data: { data: t.data } });
            } catch (n) {
                console.error(n.stack);
            }
        }, this.attachToDocument = function (e) {
            this.$doc && this.terminate(), this.$doc = e, this.call("setValue", [e.getValue()]), e.on("change", this.changeListener);
        }, this.changeListener = function (e) {
            this.deltaQueue || (this.deltaQueue = [], setTimeout(this.$sendDeltaQueue, 0)), e.action == "insert" ? this.deltaQueue.push(e.start, e.lines) : this.deltaQueue.push(e.start, e.end);
        }, this.$sendDeltaQueue = function () {
            var e = this.deltaQueue;if (!e) return;this.deltaQueue = null, e.length > 50 && e.length > this.$doc.getLength() >> 1 ? this.call("setValue", [this.$doc.getValue()]) : this.emit("change", { data: e });
        };
    }).call(f.prototype);var l = function l(e, t, n) {
        var r = null,
            i = !1,
            u = Object.create(s),
            a = [],
            l = new f({ messageBuffer: a, terminate: function terminate() {}, postMessage: function postMessage(e) {
                a.push(e);if (!r) return;i ? setTimeout(c) : c();
            } });l.setEmitSync = function (e) {
            i = e;
        };var c = function c() {
            var e = a.shift();e.command ? r[e.command].apply(r, e.args) : e.event && u._signal(e.event, e.data);
        };return u.postMessage = function (e) {
            l.onMessage({ data: e });
        }, u.callback = function (e, t) {
            this.postMessage({ type: "call", id: t, data: e });
        }, u.emit = function (e, t) {
            this.postMessage({ type: "event", name: e, data: t });
        }, o.loadModule(["worker", t], function (e) {
            r = new e[n](u);while (a.length) {
                c();
            }
        }), l;
    };t.UIWorkerClient = l, t.WorkerClient = f, t.createWorker = a;
}), ace.define("ace/placeholder", ["require", "exports", "module", "ace/range", "ace/lib/event_emitter", "ace/lib/oop"], function (e, t, n) {
    "use strict";
    var r = e("./range").Range,
        i = e("./lib/event_emitter").EventEmitter,
        s = e("./lib/oop"),
        o = function o(e, t, n, r, i, s) {
        var o = this;this.length = t, this.session = e, this.doc = e.getDocument(), this.mainClass = i, this.othersClass = s, this.$onUpdate = this.onUpdate.bind(this), this.doc.on("change", this.$onUpdate), this.$others = r, this.$onCursorChange = function () {
            setTimeout(function () {
                o.onCursorChange();
            });
        }, this.$pos = n;var u = e.getUndoManager().$undoStack || e.getUndoManager().$undostack || { length: -1 };this.$undoStackDepth = u.length, this.setup(), e.selection.on("changeCursor", this.$onCursorChange);
    };(function () {
        s.implement(this, i), this.setup = function () {
            var e = this,
                t = this.doc,
                n = this.session;this.selectionBefore = n.selection.toJSON(), n.selection.inMultiSelectMode && n.selection.toSingleRange(), this.pos = t.createAnchor(this.$pos.row, this.$pos.column);var i = this.pos;i.$insertRight = !0, i.detach(), i.markerId = n.addMarker(new r(i.row, i.column, i.row, i.column + this.length), this.mainClass, null, !1), this.others = [], this.$others.forEach(function (n) {
                var r = t.createAnchor(n.row, n.column);r.$insertRight = !0, r.detach(), e.others.push(r);
            }), n.setUndoSelect(!1);
        }, this.showOtherMarkers = function () {
            if (this.othersActive) return;var e = this.session,
                t = this;this.othersActive = !0, this.others.forEach(function (n) {
                n.markerId = e.addMarker(new r(n.row, n.column, n.row, n.column + t.length), t.othersClass, null, !1);
            });
        }, this.hideOtherMarkers = function () {
            if (!this.othersActive) return;this.othersActive = !1;for (var e = 0; e < this.others.length; e++) {
                this.session.removeMarker(this.others[e].markerId);
            }
        }, this.onUpdate = function (e) {
            if (this.$updating) return this.updateAnchors(e);var t = e;if (t.start.row !== t.end.row) return;if (t.start.row !== this.pos.row) return;this.$updating = !0;var n = e.action === "insert" ? t.end.column - t.start.column : t.start.column - t.end.column,
                i = t.start.column >= this.pos.column && t.start.column <= this.pos.column + this.length + 1,
                s = t.start.column - this.pos.column;this.updateAnchors(e), i && (this.length += n);if (i && !this.session.$fromUndo) if (e.action === "insert") for (var o = this.others.length - 1; o >= 0; o--) {
                var u = this.others[o],
                    a = { row: u.row, column: u.column + s };this.doc.insertMergedLines(a, e.lines);
            } else if (e.action === "remove") for (var o = this.others.length - 1; o >= 0; o--) {
                var u = this.others[o],
                    a = { row: u.row, column: u.column + s };this.doc.remove(new r(a.row, a.column, a.row, a.column - n));
            }this.$updating = !1, this.updateMarkers();
        }, this.updateAnchors = function (e) {
            this.pos.onChange(e);for (var t = this.others.length; t--;) {
                this.others[t].onChange(e);
            }this.updateMarkers();
        }, this.updateMarkers = function () {
            if (this.$updating) return;var e = this,
                t = this.session,
                n = function n(_n2, i) {
                t.removeMarker(_n2.markerId), _n2.markerId = t.addMarker(new r(_n2.row, _n2.column, _n2.row, _n2.column + e.length), i, null, !1);
            };n(this.pos, this.mainClass);for (var i = this.others.length; i--;) {
                n(this.others[i], this.othersClass);
            }
        }, this.onCursorChange = function (e) {
            if (this.$updating || !this.session) return;var t = this.session.selection.getCursor();t.row === this.pos.row && t.column >= this.pos.column && t.column <= this.pos.column + this.length ? (this.showOtherMarkers(), this._emit("cursorEnter", e)) : (this.hideOtherMarkers(), this._emit("cursorLeave", e));
        }, this.detach = function () {
            this.session.removeMarker(this.pos && this.pos.markerId), this.hideOtherMarkers(), this.doc.removeEventListener("change", this.$onUpdate), this.session.selection.removeEventListener("changeCursor", this.$onCursorChange), this.session.setUndoSelect(!0), this.session = null;
        }, this.cancel = function () {
            if (this.$undoStackDepth === -1) return;var e = this.session.getUndoManager(),
                t = (e.$undoStack || e.$undostack).length - this.$undoStackDepth;for (var n = 0; n < t; n++) {
                e.undo(this.session, !0);
            }this.selectionBefore && this.session.selection.fromJSON(this.selectionBefore);
        };
    }).call(o.prototype), t.PlaceHolder = o;
}), ace.define("ace/mouse/multi_select_handler", ["require", "exports", "module", "ace/lib/event", "ace/lib/useragent"], function (e, t, n) {
    function s(e, t) {
        return e.row == t.row && e.column == t.column;
    }function o(e) {
        var t = e.domEvent,
            n = t.altKey,
            o = t.shiftKey,
            u = t.ctrlKey,
            a = e.getAccelKey(),
            f = e.getButton();u && i.isMac && (f = t.button);if (e.editor.inMultiSelectMode && f == 2) {
            e.editor.textInput.onContextMenu(e.domEvent);return;
        }if (!u && !n && !a) {
            f === 0 && e.editor.inMultiSelectMode && e.editor.exitMultiSelectMode();return;
        }if (f !== 0) return;var l = e.editor,
            c = l.selection,
            h = l.inMultiSelectMode,
            p = e.getDocumentPosition(),
            d = c.getCursor(),
            v = e.inSelection() || c.isEmpty() && s(p, d),
            m = e.x,
            g = e.y,
            y = function y(e) {
            m = e.clientX, g = e.clientY;
        },
            b = l.session,
            w = l.renderer.pixelToScreenCoordinates(m, g),
            E = w,
            S;if (l.$mouseHandler.$enableJumpToDef) u && n || a && n ? S = o ? "block" : "add" : n && l.$blockSelectEnabled && (S = "block");else if (a && !n) {
            S = "add";if (!h && o) return;
        } else n && l.$blockSelectEnabled && (S = "block");S && i.isMac && t.ctrlKey && l.$mouseHandler.cancelContextMenu();if (S == "add") {
            if (!h && v) return;if (!h) {
                var x = c.toOrientedRange();l.addSelectionMarker(x);
            }var T = c.rangeList.rangeAtPoint(p);l.inVirtualSelectionMode = !0, o && (T = null, x = c.ranges[0] || x, l.removeSelectionMarker(x)), l.once("mouseup", function () {
                var e = c.toOrientedRange();T && e.isEmpty() && s(T.cursor, e.cursor) ? c.substractPoint(e.cursor) : (o ? c.substractPoint(x.cursor) : x && (l.removeSelectionMarker(x), c.addRange(x)), c.addRange(e)), l.inVirtualSelectionMode = !1;
            });
        } else if (S == "block") {
            e.stop(), l.inVirtualSelectionMode = !0;var N,
                C = [],
                k = function k() {
                var e = l.renderer.pixelToScreenCoordinates(m, g),
                    t = b.screenToDocumentPosition(e.row, e.column, e.offsetX);if (s(E, e) && s(t, c.lead)) return;E = e, l.selection.moveToPosition(t), l.renderer.scrollCursorIntoView(), l.removeSelectionMarkers(C), C = c.rectangularRangeBlock(E, w), l.$mouseHandler.$clickSelection && C.length == 1 && C[0].isEmpty() && (C[0] = l.$mouseHandler.$clickSelection.clone()), C.forEach(l.addSelectionMarker, l), l.updateSelectionMarkers();
            };h && !a ? c.toSingleRange() : !h && a && (N = c.toOrientedRange(), l.addSelectionMarker(N)), o ? w = b.documentToScreenPosition(c.lead) : c.moveToPosition(p), E = { row: -1, column: -1 };var L = function L(e) {
                k(), clearInterval(O), l.removeSelectionMarkers(C), C.length || (C = [c.toOrientedRange()]), N && (l.removeSelectionMarker(N), c.toSingleRange(N));for (var t = 0; t < C.length; t++) {
                    c.addRange(C[t]);
                }l.inVirtualSelectionMode = !1, l.$mouseHandler.$clickSelection = null;
            },
                A = k;r.capture(l.container, y, L);var O = setInterval(function () {
                A();
            }, 20);return e.preventDefault();
        }
    }var r = e("../lib/event"),
        i = e("../lib/useragent");t.onMouseDown = o;
}), ace.define("ace/commands/multi_select_commands", ["require", "exports", "module", "ace/keyboard/hash_handler"], function (e, t, n) {
    t.defaultCommands = [{ name: "addCursorAbove", description: "Add cursor above", exec: function exec(e) {
            e.selectMoreLines(-1);
        }, bindKey: { win: "Ctrl-Alt-Up", mac: "Ctrl-Alt-Up" }, scrollIntoView: "cursor", readOnly: !0 }, { name: "addCursorBelow", description: "Add cursor below", exec: function exec(e) {
            e.selectMoreLines(1);
        }, bindKey: { win: "Ctrl-Alt-Down", mac: "Ctrl-Alt-Down" }, scrollIntoView: "cursor", readOnly: !0 }, { name: "addCursorAboveSkipCurrent", description: "Add cursor above (skip current)", exec: function exec(e) {
            e.selectMoreLines(-1, !0);
        }, bindKey: { win: "Ctrl-Alt-Shift-Up", mac: "Ctrl-Alt-Shift-Up" }, scrollIntoView: "cursor", readOnly: !0 }, { name: "addCursorBelowSkipCurrent", description: "Add cursor below (skip current)", exec: function exec(e) {
            e.selectMoreLines(1, !0);
        }, bindKey: { win: "Ctrl-Alt-Shift-Down", mac: "Ctrl-Alt-Shift-Down" }, scrollIntoView: "cursor", readOnly: !0 }, { name: "selectMoreBefore", description: "Select more before", exec: function exec(e) {
            e.selectMore(-1);
        }, bindKey: { win: "Ctrl-Alt-Left", mac: "Ctrl-Alt-Left" }, scrollIntoView: "cursor", readOnly: !0 }, { name: "selectMoreAfter", description: "Select more after", exec: function exec(e) {
            e.selectMore(1);
        }, bindKey: { win: "Ctrl-Alt-Right", mac: "Ctrl-Alt-Right" }, scrollIntoView: "cursor", readOnly: !0 }, { name: "selectNextBefore", description: "Select next before", exec: function exec(e) {
            e.selectMore(-1, !0);
        }, bindKey: { win: "Ctrl-Alt-Shift-Left", mac: "Ctrl-Alt-Shift-Left" }, scrollIntoView: "cursor", readOnly: !0 }, { name: "selectNextAfter", description: "Select next after", exec: function exec(e) {
            e.selectMore(1, !0);
        }, bindKey: { win: "Ctrl-Alt-Shift-Right", mac: "Ctrl-Alt-Shift-Right" }, scrollIntoView: "cursor", readOnly: !0 }, { name: "toggleSplitSelectionIntoLines", description: "Split into lines", exec: function exec(e) {
            e.multiSelect.rangeCount > 1 ? e.multiSelect.joinSelections() : e.multiSelect.splitIntoLines();
        }, bindKey: { win: "Ctrl-Alt-L", mac: "Ctrl-Alt-L" }, readOnly: !0 }, { name: "splitSelectionIntoLines", description: "Split into lines", exec: function exec(e) {
            e.multiSelect.splitIntoLines();
        }, readOnly: !0 }, { name: "alignCursors", description: "Align cursors", exec: function exec(e) {
            e.alignCursors();
        }, bindKey: { win: "Ctrl-Alt-A", mac: "Ctrl-Alt-A" }, scrollIntoView: "cursor" }, { name: "findAll", description: "Find all", exec: function exec(e) {
            e.findAll();
        }, bindKey: { win: "Ctrl-Alt-K", mac: "Ctrl-Alt-G" }, scrollIntoView: "cursor", readOnly: !0 }], t.multiSelectCommands = [{ name: "singleSelection", description: "Single selection", bindKey: "esc", exec: function exec(e) {
            e.exitMultiSelectMode();
        }, scrollIntoView: "cursor", readOnly: !0, isAvailable: function isAvailable(e) {
            return e && e.inMultiSelectMode;
        } }];var r = e("../keyboard/hash_handler").HashHandler;t.keyboardHandler = new r(t.multiSelectCommands);
}), ace.define("ace/multi_select", ["require", "exports", "module", "ace/range_list", "ace/range", "ace/selection", "ace/mouse/multi_select_handler", "ace/lib/event", "ace/lib/lang", "ace/commands/multi_select_commands", "ace/search", "ace/edit_session", "ace/editor", "ace/config"], function (e, t, n) {
    function h(e, t, n) {
        return c.$options.wrap = !0, c.$options.needle = t, c.$options.backwards = n == -1, c.find(e);
    }function v(e, t) {
        return e.row == t.row && e.column == t.column;
    }function m(e) {
        if (e.$multiselectOnSessionChange) return;e.$onAddRange = e.$onAddRange.bind(e), e.$onRemoveRange = e.$onRemoveRange.bind(e), e.$onMultiSelect = e.$onMultiSelect.bind(e), e.$onSingleSelect = e.$onSingleSelect.bind(e), e.$multiselectOnSessionChange = t.onSessionChange.bind(e), e.$checkMultiselectChange = e.$checkMultiselectChange.bind(e), e.$multiselectOnSessionChange(e), e.on("changeSession", e.$multiselectOnSessionChange), e.on("mousedown", o), e.commands.addCommands(f.defaultCommands), g(e);
    }function g(e) {
        function r(t) {
            n && (e.renderer.setMouseCursor(""), n = !1);
        }if (!e.textInput) return;var t = e.textInput.getElement(),
            n = !1;u.addListener(t, "keydown", function (t) {
            var i = t.keyCode == 18 && !(t.ctrlKey || t.shiftKey || t.metaKey);e.$blockSelectEnabled && i ? n || (e.renderer.setMouseCursor("crosshair"), n = !0) : n && r();
        }), u.addListener(t, "keyup", r), u.addListener(t, "blur", r);
    }var r = e("./range_list").RangeList,
        i = e("./range").Range,
        s = e("./selection").Selection,
        o = e("./mouse/multi_select_handler").onMouseDown,
        u = e("./lib/event"),
        a = e("./lib/lang"),
        f = e("./commands/multi_select_commands");t.commands = f.defaultCommands.concat(f.multiSelectCommands);var l = e("./search").Search,
        c = new l(),
        p = e("./edit_session").EditSession;(function () {
        this.getSelectionMarkers = function () {
            return this.$selectionMarkers;
        };
    }).call(p.prototype), function () {
        this.ranges = null, this.rangeList = null, this.addRange = function (e, t) {
            if (!e) return;if (!this.inMultiSelectMode && this.rangeCount === 0) {
                var n = this.toOrientedRange();this.rangeList.add(n), this.rangeList.add(e);if (this.rangeList.ranges.length != 2) return this.rangeList.removeAll(), t || this.fromOrientedRange(e);this.rangeList.removeAll(), this.rangeList.add(n), this.$onAddRange(n);
            }e.cursor || (e.cursor = e.end);var r = this.rangeList.add(e);return this.$onAddRange(e), r.length && this.$onRemoveRange(r), this.rangeCount > 1 && !this.inMultiSelectMode && (this._signal("multiSelect"), this.inMultiSelectMode = !0, this.session.$undoSelect = !1, this.rangeList.attach(this.session)), t || this.fromOrientedRange(e);
        }, this.toSingleRange = function (e) {
            e = e || this.ranges[0];var t = this.rangeList.removeAll();t.length && this.$onRemoveRange(t), e && this.fromOrientedRange(e);
        }, this.substractPoint = function (e) {
            var t = this.rangeList.substractPoint(e);if (t) return this.$onRemoveRange(t), t[0];
        }, this.mergeOverlappingRanges = function () {
            var e = this.rangeList.merge();e.length && this.$onRemoveRange(e);
        }, this.$onAddRange = function (e) {
            this.rangeCount = this.rangeList.ranges.length, this.ranges.unshift(e), this._signal("addRange", { range: e });
        }, this.$onRemoveRange = function (e) {
            this.rangeCount = this.rangeList.ranges.length;if (this.rangeCount == 1 && this.inMultiSelectMode) {
                var t = this.rangeList.ranges.pop();e.push(t), this.rangeCount = 0;
            }for (var n = e.length; n--;) {
                var r = this.ranges.indexOf(e[n]);this.ranges.splice(r, 1);
            }this._signal("removeRange", { ranges: e }), this.rangeCount === 0 && this.inMultiSelectMode && (this.inMultiSelectMode = !1, this._signal("singleSelect"), this.session.$undoSelect = !0, this.rangeList.detach(this.session)), t = t || this.ranges[0], t && !t.isEqual(this.getRange()) && this.fromOrientedRange(t);
        }, this.$initRangeList = function () {
            if (this.rangeList) return;this.rangeList = new r(), this.ranges = [], this.rangeCount = 0;
        }, this.getAllRanges = function () {
            return this.rangeCount ? this.rangeList.ranges.concat() : [this.getRange()];
        }, this.splitIntoLines = function () {
            var e = this.ranges.length ? this.ranges : [this.getRange()],
                t = [];for (var n = 0; n < e.length; n++) {
                var r = e[n],
                    s = r.start.row,
                    o = r.end.row;if (s === o) t.push(r.clone());else {
                    t.push(new i(s, r.start.column, s, this.session.getLine(s).length));while (++s < o) {
                        t.push(this.getLineRange(s, !0));
                    }t.push(new i(o, 0, o, r.end.column));
                }n == 0 && !this.isBackwards() && (t = t.reverse());
            }this.toSingleRange();for (var n = t.length; n--;) {
                this.addRange(t[n]);
            }
        }, this.joinSelections = function () {
            var e = this.rangeList.ranges,
                t = e[e.length - 1],
                n = i.fromPoints(e[0].start, t.end);this.toSingleRange(), this.setSelectionRange(n, t.cursor == t.start);
        }, this.toggleBlockSelection = function () {
            if (this.rangeCount > 1) {
                var e = this.rangeList.ranges,
                    t = e[e.length - 1],
                    n = i.fromPoints(e[0].start, t.end);this.toSingleRange(), this.setSelectionRange(n, t.cursor == t.start);
            } else {
                var r = this.session.documentToScreenPosition(this.cursor),
                    s = this.session.documentToScreenPosition(this.anchor),
                    o = this.rectangularRangeBlock(r, s);o.forEach(this.addRange, this);
            }
        }, this.rectangularRangeBlock = function (e, t, n) {
            var r = [],
                s = e.column < t.column;if (s) var o = e.column,
                u = t.column,
                a = e.offsetX,
                f = t.offsetX;else var o = t.column,
                u = e.column,
                a = t.offsetX,
                f = e.offsetX;var l = e.row < t.row;if (l) var c = e.row,
                h = t.row;else var c = t.row,
                h = e.row;o < 0 && (o = 0), c < 0 && (c = 0), c == h && (n = !0);var p;for (var d = c; d <= h; d++) {
                var m = i.fromPoints(this.session.screenToDocumentPosition(d, o, a), this.session.screenToDocumentPosition(d, u, f));if (m.isEmpty()) {
                    if (p && v(m.end, p)) break;p = m.end;
                }m.cursor = s ? m.start : m.end, r.push(m);
            }l && r.reverse();if (!n) {
                var g = r.length - 1;while (r[g].isEmpty() && g > 0) {
                    g--;
                }if (g > 0) {
                    var y = 0;while (r[y].isEmpty()) {
                        y++;
                    }
                }for (var b = g; b >= y; b--) {
                    r[b].isEmpty() && r.splice(b, 1);
                }
            }return r;
        };
    }.call(s.prototype);var d = e("./editor").Editor;(function () {
        this.updateSelectionMarkers = function () {
            this.renderer.updateCursor(), this.renderer.updateBackMarkers();
        }, this.addSelectionMarker = function (e) {
            e.cursor || (e.cursor = e.end);var t = this.getSelectionStyle();return e.marker = this.session.addMarker(e, "ace_selection", t), this.session.$selectionMarkers.push(e), this.session.selectionMarkerCount = this.session.$selectionMarkers.length, e;
        }, this.removeSelectionMarker = function (e) {
            if (!e.marker) return;this.session.removeMarker(e.marker);var t = this.session.$selectionMarkers.indexOf(e);t != -1 && this.session.$selectionMarkers.splice(t, 1), this.session.selectionMarkerCount = this.session.$selectionMarkers.length;
        }, this.removeSelectionMarkers = function (e) {
            var t = this.session.$selectionMarkers;for (var n = e.length; n--;) {
                var r = e[n];if (!r.marker) continue;this.session.removeMarker(r.marker);var i = t.indexOf(r);i != -1 && t.splice(i, 1);
            }this.session.selectionMarkerCount = t.length;
        }, this.$onAddRange = function (e) {
            this.addSelectionMarker(e.range), this.renderer.updateCursor(), this.renderer.updateBackMarkers();
        }, this.$onRemoveRange = function (e) {
            this.removeSelectionMarkers(e.ranges), this.renderer.updateCursor(), this.renderer.updateBackMarkers();
        }, this.$onMultiSelect = function (e) {
            if (this.inMultiSelectMode) return;this.inMultiSelectMode = !0, this.setStyle("ace_multiselect"), this.keyBinding.addKeyboardHandler(f.keyboardHandler), this.commands.setDefaultHandler("exec", this.$onMultiSelectExec), this.renderer.updateCursor(), this.renderer.updateBackMarkers();
        }, this.$onSingleSelect = function (e) {
            if (this.session.multiSelect.inVirtualMode) return;this.inMultiSelectMode = !1, this.unsetStyle("ace_multiselect"), this.keyBinding.removeKeyboardHandler(f.keyboardHandler), this.commands.removeDefaultHandler("exec", this.$onMultiSelectExec), this.renderer.updateCursor(), this.renderer.updateBackMarkers(), this._emit("changeSelection");
        }, this.$onMultiSelectExec = function (e) {
            var t = e.command,
                n = e.editor;if (!n.multiSelect) return;if (!t.multiSelectAction) {
                var r = t.exec(n, e.args || {});n.multiSelect.addRange(n.multiSelect.toOrientedRange()), n.multiSelect.mergeOverlappingRanges();
            } else t.multiSelectAction == "forEach" ? r = n.forEachSelection(t, e.args) : t.multiSelectAction == "forEachLine" ? r = n.forEachSelection(t, e.args, !0) : t.multiSelectAction == "single" ? (n.exitMultiSelectMode(), r = t.exec(n, e.args || {})) : r = t.multiSelectAction(n, e.args || {});return r;
        }, this.forEachSelection = function (e, t, n) {
            if (this.inVirtualSelectionMode) return;var r = n && n.keepOrder,
                i = n == 1 || n && n.$byLines,
                o = this.session,
                u = this.selection,
                a = u.rangeList,
                f = (r ? u : a).ranges,
                l;if (!f.length) return e.exec ? e.exec(this, t || {}) : e(this, t || {});var c = u._eventRegistry;u._eventRegistry = {};var h = new s(o);this.inVirtualSelectionMode = !0;for (var p = f.length; p--;) {
                if (i) while (p > 0 && f[p].start.row == f[p - 1].end.row) {
                    p--;
                }h.fromOrientedRange(f[p]), h.index = p, this.selection = o.selection = h;var d = e.exec ? e.exec(this, t || {}) : e(this, t || {});!l && d !== undefined && (l = d), h.toOrientedRange(f[p]);
            }h.detach(), this.selection = o.selection = u, this.inVirtualSelectionMode = !1, u._eventRegistry = c, u.mergeOverlappingRanges(), u.ranges[0] && u.fromOrientedRange(u.ranges[0]);var v = this.renderer.$scrollAnimation;return this.onCursorChange(), this.onSelectionChange(), v && v.from == v.to && this.renderer.animateScrolling(v.from), l;
        }, this.exitMultiSelectMode = function () {
            if (!this.inMultiSelectMode || this.inVirtualSelectionMode) return;this.multiSelect.toSingleRange();
        }, this.getSelectedText = function () {
            var e = "";if (this.inMultiSelectMode && !this.inVirtualSelectionMode) {
                var t = this.multiSelect.rangeList.ranges,
                    n = [];for (var r = 0; r < t.length; r++) {
                    n.push(this.session.getTextRange(t[r]));
                }var i = this.session.getDocument().getNewLineCharacter();e = n.join(i), e.length == (n.length - 1) * i.length && (e = "");
            } else this.selection.isEmpty() || (e = this.session.getTextRange(this.getSelectionRange()));return e;
        }, this.$checkMultiselectChange = function (e, t) {
            if (this.inMultiSelectMode && !this.inVirtualSelectionMode) {
                var n = this.multiSelect.ranges[0];if (this.multiSelect.isEmpty() && t == this.multiSelect.anchor) return;var r = t == this.multiSelect.anchor ? n.cursor == n.start ? n.end : n.start : n.cursor;r.row != t.row || this.session.$clipPositionToDocument(r.row, r.column).column != t.column ? this.multiSelect.toSingleRange(this.multiSelect.toOrientedRange()) : this.multiSelect.mergeOverlappingRanges();
            }
        }, this.findAll = function (e, t, n) {
            t = t || {}, t.needle = e || t.needle;if (t.needle == undefined) {
                var r = this.selection.isEmpty() ? this.selection.getWordRange() : this.selection.getRange();t.needle = this.session.getTextRange(r);
            }this.$search.set(t);var i = this.$search.findAll(this.session);if (!i.length) return 0;var s = this.multiSelect;n || s.toSingleRange(i[0]);for (var o = i.length; o--;) {
                s.addRange(i[o], !0);
            }return r && s.rangeList.rangeAtPoint(r.start) && s.addRange(r, !0), i.length;
        }, this.selectMoreLines = function (e, t) {
            var n = this.selection.toOrientedRange(),
                r = n.cursor == n.end,
                s = this.session.documentToScreenPosition(n.cursor);this.selection.$desiredColumn && (s.column = this.selection.$desiredColumn);var o = this.session.screenToDocumentPosition(s.row + e, s.column);if (!n.isEmpty()) var u = this.session.documentToScreenPosition(r ? n.end : n.start),
                a = this.session.screenToDocumentPosition(u.row + e, u.column);else var a = o;if (r) {
                var f = i.fromPoints(o, a);f.cursor = f.start;
            } else {
                var f = i.fromPoints(a, o);f.cursor = f.end;
            }f.desiredColumn = s.column;if (!this.selection.inMultiSelectMode) this.selection.addRange(n);else if (t) var l = n.cursor;this.selection.addRange(f), l && this.selection.substractPoint(l);
        }, this.transposeSelections = function (e) {
            var t = this.session,
                n = t.multiSelect,
                r = n.ranges;for (var i = r.length; i--;) {
                var s = r[i];if (s.isEmpty()) {
                    var o = t.getWordRange(s.start.row, s.start.column);s.start.row = o.start.row, s.start.column = o.start.column, s.end.row = o.end.row, s.end.column = o.end.column;
                }
            }n.mergeOverlappingRanges();var u = [];for (var i = r.length; i--;) {
                var s = r[i];u.unshift(t.getTextRange(s));
            }e < 0 ? u.unshift(u.pop()) : u.push(u.shift());for (var i = r.length; i--;) {
                var s = r[i],
                    o = s.clone();t.replace(s, u[i]), s.start.row = o.start.row, s.start.column = o.start.column;
            }n.fromOrientedRange(n.ranges[0]);
        }, this.selectMore = function (e, t, n) {
            var r = this.session,
                i = r.multiSelect,
                s = i.toOrientedRange();if (s.isEmpty()) {
                s = r.getWordRange(s.start.row, s.start.column), s.cursor = e == -1 ? s.start : s.end, this.multiSelect.addRange(s);if (n) return;
            }var o = r.getTextRange(s),
                u = h(r, o, e);u && (u.cursor = e == -1 ? u.start : u.end, this.session.unfold(u), this.multiSelect.addRange(u), this.renderer.scrollCursorIntoView(null, .5)), t && this.multiSelect.substractPoint(s.cursor);
        }, this.alignCursors = function () {
            var e = this.session,
                t = e.multiSelect,
                n = t.ranges,
                r = -1,
                s = n.filter(function (e) {
                if (e.cursor.row == r) return !0;r = e.cursor.row;
            });if (!n.length || s.length == n.length - 1) {
                var o = this.selection.getRange(),
                    u = o.start.row,
                    f = o.end.row,
                    l = u == f;if (l) {
                    var c = this.session.getLength(),
                        h;do {
                        h = this.session.getLine(f);
                    } while (/[=:]/.test(h) && ++f < c);do {
                        h = this.session.getLine(u);
                    } while (/[=:]/.test(h) && --u > 0);u < 0 && (u = 0), f >= c && (f = c - 1);
                }var p = this.session.removeFullLines(u, f);p = this.$reAlignText(p, l), this.session.insert({ row: u, column: 0 }, p.join("\n") + "\n"), l || (o.start.column = 0, o.end.column = p[p.length - 1].length), this.selection.setRange(o);
            } else {
                s.forEach(function (e) {
                    t.substractPoint(e.cursor);
                });var d = 0,
                    v = Infinity,
                    m = n.map(function (t) {
                    var n = t.cursor,
                        r = e.getLine(n.row),
                        i = r.substr(n.column).search(/\S/g);return i == -1 && (i = 0), n.column > d && (d = n.column), i < v && (v = i), i;
                });n.forEach(function (t, n) {
                    var r = t.cursor,
                        s = d - r.column,
                        o = m[n] - v;s > o ? e.insert(r, a.stringRepeat(" ", s - o)) : e.remove(new i(r.row, r.column, r.row, r.column - s + o)), t.start.column = t.end.column = d, t.start.row = t.end.row = r.row, t.cursor = t.end;
                }), t.fromOrientedRange(n[0]), this.renderer.updateCursor(), this.renderer.updateBackMarkers();
            }
        }, this.$reAlignText = function (e, t) {
            function u(e) {
                return a.stringRepeat(" ", e);
            }function f(e) {
                return e[2] ? u(i) + e[2] + u(s - e[2].length + o) + e[4].replace(/^([=:])\s+/, "$1 ") : e[0];
            }function l(e) {
                return e[2] ? u(i + s - e[2].length) + e[2] + u(o) + e[4].replace(/^([=:])\s+/, "$1 ") : e[0];
            }function c(e) {
                return e[2] ? u(i) + e[2] + u(o) + e[4].replace(/^([=:])\s+/, "$1 ") : e[0];
            }var n = !0,
                r = !0,
                i,
                s,
                o;return e.map(function (e) {
                var t = e.match(/(\s*)(.*?)(\s*)([=:].*)/);return t ? i == null ? (i = t[1].length, s = t[2].length, o = t[3].length, t) : (i + s + o != t[1].length + t[2].length + t[3].length && (r = !1), i != t[1].length && (n = !1), i > t[1].length && (i = t[1].length), s < t[2].length && (s = t[2].length), o > t[3].length && (o = t[3].length), t) : [e];
            }).map(t ? f : n ? r ? l : f : c);
        };
    }).call(d.prototype), t.onSessionChange = function (e) {
        var t = e.session;t && !t.multiSelect && (t.$selectionMarkers = [], t.selection.$initRangeList(), t.multiSelect = t.selection), this.multiSelect = t && t.multiSelect;var n = e.oldSession;n && (n.multiSelect.off("addRange", this.$onAddRange), n.multiSelect.off("removeRange", this.$onRemoveRange), n.multiSelect.off("multiSelect", this.$onMultiSelect), n.multiSelect.off("singleSelect", this.$onSingleSelect), n.multiSelect.lead.off("change", this.$checkMultiselectChange), n.multiSelect.anchor.off("change", this.$checkMultiselectChange)), t && (t.multiSelect.on("addRange", this.$onAddRange), t.multiSelect.on("removeRange", this.$onRemoveRange), t.multiSelect.on("multiSelect", this.$onMultiSelect), t.multiSelect.on("singleSelect", this.$onSingleSelect), t.multiSelect.lead.on("change", this.$checkMultiselectChange), t.multiSelect.anchor.on("change", this.$checkMultiselectChange)), t && this.inMultiSelectMode != t.selection.inMultiSelectMode && (t.selection.inMultiSelectMode ? this.$onMultiSelect() : this.$onSingleSelect());
    }, t.MultiSelect = m, e("./config").defineOptions(d.prototype, "editor", { enableMultiselect: { set: function set(e) {
                m(this), e ? (this.on("changeSession", this.$multiselectOnSessionChange), this.on("mousedown", o)) : (this.off("changeSession", this.$multiselectOnSessionChange), this.off("mousedown", o));
            }, value: !0 }, enableBlockSelect: { set: function set(e) {
                this.$blockSelectEnabled = e;
            }, value: !0 } });
}), ace.define("ace/mode/folding/fold_mode", ["require", "exports", "module", "ace/range"], function (e, t, n) {
    "use strict";
    var r = e("../../range").Range,
        i = t.FoldMode = function () {};(function () {
        this.foldingStartMarker = null, this.foldingStopMarker = null, this.getFoldWidget = function (e, t, n) {
            var r = e.getLine(n);return this.foldingStartMarker.test(r) ? "start" : t == "markbeginend" && this.foldingStopMarker && this.foldingStopMarker.test(r) ? "end" : "";
        }, this.getFoldWidgetRange = function (e, t, n) {
            return null;
        }, this.indentationBlock = function (e, t, n) {
            var i = /\S/,
                s = e.getLine(t),
                o = s.search(i);if (o == -1) return;var u = n || s.length,
                a = e.getLength(),
                f = t,
                l = t;while (++t < a) {
                var c = e.getLine(t).search(i);if (c == -1) continue;if (c <= o) {
                    var h = e.getTokenAt(t, 0);if (!h || h.type !== "string") break;
                }l = t;
            }if (l > f) {
                var p = e.getLine(l).length;return new r(f, u, l, p);
            }
        }, this.openingBracketBlock = function (e, t, n, i, s) {
            var o = { row: n, column: i + 1 },
                u = e.$findClosingBracket(t, o, s);if (!u) return;var a = e.foldWidgets[u.row];return a == null && (a = e.getFoldWidget(u.row)), a == "start" && u.row > o.row && (u.row--, u.column = e.getLine(u.row).length), r.fromPoints(o, u);
        }, this.closingBracketBlock = function (e, t, n, i, s) {
            var o = { row: n, column: i },
                u = e.$findOpeningBracket(t, o);if (!u) return;return u.column++, o.column--, r.fromPoints(u, o);
        };
    }).call(i.prototype);
}), ace.define("ace/theme/textmate", ["require", "exports", "module", "ace/lib/dom"], function (e, t, n) {
    "use strict";
    t.isDark = !1, t.cssClass = "ace-tm", t.cssText = '.ace-tm .ace_gutter {background: #f0f0f0;color: #333;}.ace-tm .ace_print-margin {width: 1px;background: #e8e8e8;}.ace-tm .ace_fold {background-color: #6B72E6;}.ace-tm {background-color: #FFFFFF;color: black;}.ace-tm .ace_cursor {color: black;}.ace-tm .ace_invisible {color: rgb(191, 191, 191);}.ace-tm .ace_storage,.ace-tm .ace_keyword {color: blue;}.ace-tm .ace_constant {color: rgb(197, 6, 11);}.ace-tm .ace_constant.ace_buildin {color: rgb(88, 72, 246);}.ace-tm .ace_constant.ace_language {color: rgb(88, 92, 246);}.ace-tm .ace_constant.ace_library {color: rgb(6, 150, 14);}.ace-tm .ace_invalid {background-color: rgba(255, 0, 0, 0.1);color: red;}.ace-tm .ace_support.ace_function {color: rgb(60, 76, 114);}.ace-tm .ace_support.ace_constant {color: rgb(6, 150, 14);}.ace-tm .ace_support.ace_type,.ace-tm .ace_support.ace_class {color: rgb(109, 121, 222);}.ace-tm .ace_keyword.ace_operator {color: rgb(104, 118, 135);}.ace-tm .ace_string {color: rgb(3, 106, 7);}.ace-tm .ace_comment {color: rgb(76, 136, 107);}.ace-tm .ace_comment.ace_doc {color: rgb(0, 102, 255);}.ace-tm .ace_comment.ace_doc.ace_tag {color: rgb(128, 159, 191);}.ace-tm .ace_constant.ace_numeric {color: rgb(0, 0, 205);}.ace-tm .ace_variable {color: rgb(49, 132, 149);}.ace-tm .ace_xml-pe {color: rgb(104, 104, 91);}.ace-tm .ace_entity.ace_name.ace_function {color: #0000A2;}.ace-tm .ace_heading {color: rgb(12, 7, 255);}.ace-tm .ace_list {color:rgb(185, 6, 144);}.ace-tm .ace_meta.ace_tag {color:rgb(0, 22, 142);}.ace-tm .ace_string.ace_regex {color: rgb(255, 0, 0)}.ace-tm .ace_marker-layer .ace_selection {background: rgb(181, 213, 255);}.ace-tm.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px white;}.ace-tm .ace_marker-layer .ace_step {background: rgb(252, 255, 0);}.ace-tm .ace_marker-layer .ace_stack {background: rgb(164, 229, 101);}.ace-tm .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid rgb(192, 192, 192);}.ace-tm .ace_marker-layer .ace_active-line {background: rgba(0, 0, 0, 0.07);}.ace-tm .ace_gutter-active-line {background-color : #dcdcdc;}.ace-tm .ace_marker-layer .ace_selected-word {background: rgb(250, 250, 255);border: 1px solid rgb(200, 200, 250);}.ace-tm .ace_indent-guide {background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;}', t.$id = "ace/theme/textmate";var r = e("../lib/dom");r.importCssString(t.cssText, t.cssClass);
}), ace.define("ace/line_widgets", ["require", "exports", "module", "ace/lib/dom"], function (e, t, n) {
    "use strict";
    function i(e) {
        this.session = e, this.session.widgetManager = this, this.session.getRowLength = this.getRowLength, this.session.$getWidgetScreenLength = this.$getWidgetScreenLength, this.updateOnChange = this.updateOnChange.bind(this), this.renderWidgets = this.renderWidgets.bind(this), this.measureWidgets = this.measureWidgets.bind(this), this.session._changedWidgets = [], this.$onChangeEditor = this.$onChangeEditor.bind(this), this.session.on("change", this.updateOnChange), this.session.on("changeFold", this.updateOnFold), this.session.on("changeEditor", this.$onChangeEditor);
    }var r = e("./lib/dom");(function () {
        this.getRowLength = function (e) {
            var t;return this.lineWidgets ? t = this.lineWidgets[e] && this.lineWidgets[e].rowCount || 0 : t = 0, !this.$useWrapMode || !this.$wrapData[e] ? 1 + t : this.$wrapData[e].length + 1 + t;
        }, this.$getWidgetScreenLength = function () {
            var e = 0;return this.lineWidgets.forEach(function (t) {
                t && t.rowCount && !t.hidden && (e += t.rowCount);
            }), e;
        }, this.$onChangeEditor = function (e) {
            this.attach(e.editor);
        }, this.attach = function (e) {
            e && e.widgetManager && e.widgetManager != this && e.widgetManager.detach();if (this.editor == e) return;this.detach(), this.editor = e, e && (e.widgetManager = this, e.renderer.on("beforeRender", this.measureWidgets), e.renderer.on("afterRender", this.renderWidgets));
        }, this.detach = function (e) {
            var t = this.editor;if (!t) return;this.editor = null, t.widgetManager = null, t.renderer.off("beforeRender", this.measureWidgets), t.renderer.off("afterRender", this.renderWidgets);var n = this.session.lineWidgets;n && n.forEach(function (e) {
                e && e.el && e.el.parentNode && (e._inDocument = !1, e.el.parentNode.removeChild(e.el));
            });
        }, this.updateOnFold = function (e, t) {
            var n = t.lineWidgets;if (!n || !e.action) return;var r = e.data,
                i = r.start.row,
                s = r.end.row,
                o = e.action == "add";for (var u = i + 1; u < s; u++) {
                n[u] && (n[u].hidden = o);
            }n[s] && (o ? n[i] ? n[s].hidden = o : n[i] = n[s] : (n[i] == n[s] && (n[i] = undefined), n[s].hidden = o));
        }, this.updateOnChange = function (e) {
            var t = this.session.lineWidgets;if (!t) return;var n = e.start.row,
                r = e.end.row - n;if (r !== 0) if (e.action == "remove") {
                var i = t.splice(n + 1, r);!t[n] && i[i.length - 1] && (t[n] = i.pop()), i.forEach(function (e) {
                    e && this.removeLineWidget(e);
                }, this), this.$updateRows();
            } else {
                var s = new Array(r);t[n] && t[n].column != null && e.start.column > t[n].column && n++, s.unshift(n, 0), t.splice.apply(t, s), this.$updateRows();
            }
        }, this.$updateRows = function () {
            var e = this.session.lineWidgets;if (!e) return;var t = !0;e.forEach(function (e, n) {
                if (e) {
                    t = !1, e.row = n;while (e.$oldWidget) {
                        e.$oldWidget.row = n, e = e.$oldWidget;
                    }
                }
            }), t && (this.session.lineWidgets = null);
        }, this.$registerLineWidget = function (e) {
            this.session.lineWidgets || (this.session.lineWidgets = new Array(this.session.getLength()));var t = this.session.lineWidgets[e.row];return t && (e.$oldWidget = t, t.el && t.el.parentNode && (t.el.parentNode.removeChild(t.el), t._inDocument = !1)), this.session.lineWidgets[e.row] = e, e;
        }, this.addLineWidget = function (e) {
            this.$registerLineWidget(e), e.session = this.session;if (!this.editor) return e;var t = this.editor.renderer;e.html && !e.el && (e.el = r.createElement("div"), e.el.innerHTML = e.html), e.el && (r.addCssClass(e.el, "ace_lineWidgetContainer"), e.el.style.position = "absolute", e.el.style.zIndex = 5, t.container.appendChild(e.el), e._inDocument = !0, e.coverGutter || (e.el.style.zIndex = 3), e.pixelHeight == null && (e.pixelHeight = e.el.offsetHeight)), e.rowCount == null && (e.rowCount = e.pixelHeight / t.layerConfig.lineHeight);var n = this.session.getFoldAt(e.row, 0);e.$fold = n;if (n) {
                var i = this.session.lineWidgets;e.row == n.end.row && !i[n.start.row] ? i[n.start.row] = e : e.hidden = !0;
            }return this.session._emit("changeFold", { data: { start: { row: e.row } } }), this.$updateRows(), this.renderWidgets(null, t), this.onWidgetChanged(e), e;
        }, this.removeLineWidget = function (e) {
            e._inDocument = !1, e.session = null, e.el && e.el.parentNode && e.el.parentNode.removeChild(e.el);if (e.editor && e.editor.destroy) try {
                e.editor.destroy();
            } catch (t) {}if (this.session.lineWidgets) {
                var n = this.session.lineWidgets[e.row];if (n == e) this.session.lineWidgets[e.row] = e.$oldWidget, e.$oldWidget && this.onWidgetChanged(e.$oldWidget);else while (n) {
                    if (n.$oldWidget == e) {
                        n.$oldWidget = e.$oldWidget;break;
                    }n = n.$oldWidget;
                }
            }this.session._emit("changeFold", { data: { start: { row: e.row } } }), this.$updateRows();
        }, this.getWidgetsAtRow = function (e) {
            var t = this.session.lineWidgets,
                n = t && t[e],
                r = [];while (n) {
                r.push(n), n = n.$oldWidget;
            }return r;
        }, this.onWidgetChanged = function (e) {
            this.session._changedWidgets.push(e), this.editor && this.editor.renderer.updateFull();
        }, this.measureWidgets = function (e, t) {
            var n = this.session._changedWidgets,
                r = t.layerConfig;if (!n || !n.length) return;var i = Infinity;for (var s = 0; s < n.length; s++) {
                var o = n[s];if (!o || !o.el) continue;if (o.session != this.session) continue;if (!o._inDocument) {
                    if (this.session.lineWidgets[o.row] != o) continue;o._inDocument = !0, t.container.appendChild(o.el);
                }o.h = o.el.offsetHeight, o.fixedWidth || (o.w = o.el.offsetWidth, o.screenWidth = Math.ceil(o.w / r.characterWidth));var u = o.h / r.lineHeight;o.coverLine && (u -= this.session.getRowLineCount(o.row), u < 0 && (u = 0)), o.rowCount != u && (o.rowCount = u, o.row < i && (i = o.row));
            }i != Infinity && (this.session._emit("changeFold", { data: { start: { row: i } } }), this.session.lineWidgetWidth = null), this.session._changedWidgets = [];
        }, this.renderWidgets = function (e, t) {
            var n = t.layerConfig,
                r = this.session.lineWidgets;if (!r) return;var i = Math.min(this.firstRow, n.firstRow),
                s = Math.max(this.lastRow, n.lastRow, r.length);while (i > 0 && !r[i]) {
                i--;
            }this.firstRow = n.firstRow, this.lastRow = n.lastRow, t.$cursorLayer.config = n;for (var o = i; o <= s; o++) {
                var u = r[o];if (!u || !u.el) continue;if (u.hidden) {
                    u.el.style.top = -100 - (u.pixelHeight || 0) + "px";continue;
                }u._inDocument || (u._inDocument = !0, t.container.appendChild(u.el));var a = t.$cursorLayer.getPixelPosition({ row: o, column: 0 }, !0).top;u.coverLine || (a += n.lineHeight * this.session.getRowLineCount(u.row)), u.el.style.top = a - n.offset + "px";var f = u.coverGutter ? 0 : t.gutterWidth;u.fixedWidth || (f -= t.scrollLeft), u.el.style.left = f + "px", u.fullWidth && u.screenWidth && (u.el.style.minWidth = n.width + 2 * n.padding + "px"), u.fixedWidth ? u.el.style.right = t.scrollBar.getWidth() + "px" : u.el.style.right = "";
            }
        };
    }).call(i.prototype), t.LineWidgets = i;
}), ace.define("ace/ext/error_marker", ["require", "exports", "module", "ace/line_widgets", "ace/lib/dom", "ace/range"], function (e, t, n) {
    "use strict";
    function o(e, t, n) {
        var r = 0,
            i = e.length - 1;while (r <= i) {
            var s = r + i >> 1,
                o = n(t, e[s]);if (o > 0) r = s + 1;else {
                if (!(o < 0)) return s;i = s - 1;
            }
        }return -(r + 1);
    }function u(e, t, n) {
        var r = e.getAnnotations().sort(s.comparePoints);if (!r.length) return;var i = o(r, { row: t, column: -1 }, s.comparePoints);i < 0 && (i = -i - 1), i >= r.length ? i = n > 0 ? 0 : r.length - 1 : i === 0 && n < 0 && (i = r.length - 1);var u = r[i];if (!u || !n) return;if (u.row === t) {
            do {
                u = r[i += n];
            } while (u && u.row === t);if (!u) return r.slice();
        }var a = [];t = u.row;do {
            a[n < 0 ? "unshift" : "push"](u), u = r[i += n];
        } while (u && u.row == t);return a.length && a;
    }var r = e("../line_widgets").LineWidgets,
        i = e("../lib/dom"),
        s = e("../range").Range;t.showErrorMarker = function (e, t) {
        var n = e.session;n.widgetManager || (n.widgetManager = new r(n), n.widgetManager.attach(e));var s = e.getCursorPosition(),
            o = s.row,
            a = n.widgetManager.getWidgetsAtRow(o).filter(function (e) {
            return e.type == "errorMarker";
        })[0];a ? a.destroy() : o -= t;var f = u(n, o, t),
            l;if (f) {
            var c = f[0];s.column = (c.pos && typeof c.column != "number" ? c.pos.sc : c.column) || 0, s.row = c.row, l = e.renderer.$gutterLayer.$annotations[s.row];
        } else {
            if (a) return;l = { text: ["Looks good!"], className: "ace_ok" };
        }e.session.unfold(s.row), e.selection.moveToPosition(s);var h = { row: s.row, fixedWidth: !0, coverGutter: !0, el: i.createElement("div"), type: "errorMarker" },
            p = h.el.appendChild(i.createElement("div")),
            d = h.el.appendChild(i.createElement("div"));d.className = "error_widget_arrow " + l.className;var v = e.renderer.$cursorLayer.getPixelPosition(s).left;d.style.left = v + e.renderer.gutterWidth - 5 + "px", h.el.className = "error_widget_wrapper", p.className = "error_widget " + l.className, p.innerHTML = l.text.join("<br>"), p.appendChild(i.createElement("div"));var m = function m(e, t, n) {
            if (t === 0 && (n === "esc" || n === "return")) return h.destroy(), { command: "null" };
        };h.destroy = function () {
            if (e.$mouseHandler.isMousePressed) return;e.keyBinding.removeKeyboardHandler(m), n.widgetManager.removeLineWidget(h), e.off("changeSelection", h.destroy), e.off("changeSession", h.destroy), e.off("mouseup", h.destroy), e.off("change", h.destroy);
        }, e.keyBinding.addKeyboardHandler(m), e.on("changeSelection", h.destroy), e.on("changeSession", h.destroy), e.on("mouseup", h.destroy), e.on("change", h.destroy), e.session.widgetManager.addLineWidget(h), h.el.onmousedown = e.focus.bind(e), e.renderer.scrollCursorIntoView(null, .5, { bottom: h.el.offsetHeight });
    }, i.importCssString("    .error_widget_wrapper {        background: inherit;        color: inherit;        border:none    }    .error_widget {        border-top: solid 2px;        border-bottom: solid 2px;        margin: 5px 0;        padding: 10px 40px;        white-space: pre-wrap;    }    .error_widget.ace_error, .error_widget_arrow.ace_error{        border-color: #ff5a5a    }    .error_widget.ace_warning, .error_widget_arrow.ace_warning{        border-color: #F1D817    }    .error_widget.ace_info, .error_widget_arrow.ace_info{        border-color: #5a5a5a    }    .error_widget.ace_ok, .error_widget_arrow.ace_ok{        border-color: #5aaa5a    }    .error_widget_arrow {        position: absolute;        border: solid 5px;        border-top-color: transparent!important;        border-right-color: transparent!important;        border-left-color: transparent!important;        top: -5px;    }", "");
}), ace.define("ace/ace", ["require", "exports", "module", "ace/lib/fixoldbrowsers", "ace/lib/dom", "ace/lib/event", "ace/range", "ace/editor", "ace/edit_session", "ace/undomanager", "ace/virtual_renderer", "ace/worker/worker_client", "ace/keyboard/hash_handler", "ace/placeholder", "ace/multi_select", "ace/mode/folding/fold_mode", "ace/theme/textmate", "ace/ext/error_marker", "ace/config"], function (e, t, n) {
    "use strict";
    e("./lib/fixoldbrowsers");var r = e("./lib/dom"),
        i = e("./lib/event"),
        s = e("./range").Range,
        o = e("./editor").Editor,
        u = e("./edit_session").EditSession,
        a = e("./undomanager").UndoManager,
        f = e("./virtual_renderer").VirtualRenderer;e("./worker/worker_client"), e("./keyboard/hash_handler"), e("./placeholder"), e("./multi_select"), e("./mode/folding/fold_mode"), e("./theme/textmate"), e("./ext/error_marker"), t.config = e("./config"), t.require = e, "function" == "function" && (t.define = __webpack_require__(30)), t.edit = function (e, n) {
        if (typeof e == "string") {
            var s = e;e = document.getElementById(s);if (!e) throw new Error("ace.edit can't find div #" + s);
        }if (e && e.env && e.env.editor instanceof o) return e.env.editor;var u = "";if (e && /input|textarea/i.test(e.tagName)) {
            var a = e;u = a.value, e = r.createElement("pre"), a.parentNode.replaceChild(e, a);
        } else e && (u = e.textContent, e.innerHTML = "");var l = t.createEditSession(u),
            c = new o(new f(e), l, n),
            h = { document: l, editor: c, onResize: c.resize.bind(c, null) };return a && (h.textarea = a), i.addListener(window, "resize", h.onResize), c.on("destroy", function () {
            i.removeListener(window, "resize", h.onResize), h.editor.container.env = null;
        }), c.container.env = c.env = h, c;
    }, t.createEditSession = function (e, t) {
        var n = new u(e, t);return n.setUndoManager(new a()), n;
    }, t.Range = s, t.Editor = o, t.EditSession = u, t.UndoManager = a, t.VirtualRenderer = f, t.version = t.config.version;
});(function () {
    ace.require(["ace/ace"], function (a) {
        if (a) {
            a.config.init(true);
            a.define = ace.define;
        }
        if (!window.ace) window.ace = a;
        for (var key in a) {
            if (a.hasOwnProperty(key)) window.ace[key] = a[key];
        }window.ace["default"] = window.ace;
        if (( false ? "undefined" : _typeof(module)) == "object" && ( false ? "undefined" : _typeof(exports)) == "object" && module) {
            module.exports = window.ace;
        }
    });
})();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(72)(module)))

/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*jshint node:true */
/* globals define */
/*
  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.

*/



/**
The following batches are equivalent:

var beautify_js = require('js-beautify');
var beautify_js = require('js-beautify').js;
var beautify_js = require('js-beautify').js_beautify;

var beautify_css = require('js-beautify').css;
var beautify_css = require('js-beautify').css_beautify;

var beautify_html = require('js-beautify').html;
var beautify_html = require('js-beautify').html_beautify;

All methods returned accept two arguments, the source string and an options object.
**/

function get_beautify(js_beautify, css_beautify, html_beautify) {
  // the default is js
  var beautify = function(src, config) {
    return js_beautify.js_beautify(src, config);
  };

  // short aliases
  beautify.js = js_beautify.js_beautify;
  beautify.css = css_beautify.css_beautify;
  beautify.html = html_beautify.html_beautify;

  // legacy aliases
  beautify.js_beautify = js_beautify.js_beautify;
  beautify.css_beautify = css_beautify.css_beautify;
  beautify.html_beautify = html_beautify.html_beautify;

  return beautify;
}

if (true) {
  // Add support for AMD ( https://github.com/amdjs/amdjs-api/wiki/AMD#defineamd-property- )
  !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(248),
    __webpack_require__(249),
    __webpack_require__(257)
  ], __WEBPACK_AMD_DEFINE_RESULT__ = (function(js_beautify, css_beautify, html_beautify) {
    return get_beautify(js_beautify, css_beautify, html_beautify);
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  (function(mod) {
    var beautifier = require('./src/index');
    beautifier.js_beautify = beautifier.js;
    beautifier.css_beautify = beautifier.css;
    beautifier.html_beautify = beautifier.html;

    mod.exports = get_beautify(beautifier, beautifier, beautifier);

  })(module);
}

/***/ }),

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* AUTO-GENERATED. DO NOT MODIFY. */
/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.


 Style HTML
---------------

  Written by Nochum Sossonko, (nsossonko@hotmail.com)

  Based on code initially developed by: Einar Lielmanis, <einar@beautifier.io>
    https://beautifier.io/

  Usage:
    style_html(html_source);

    style_html(html_source, options);

  The options are:
    indent_inner_html (default false)  — indent <head> and <body> sections,
    indent_size (default 4)          — indentation size,
    indent_char (default space)      — character to indent with,
    wrap_line_length (default 250)            -  maximum amount of characters per line (0 = disable)
    brace_style (default "collapse") - "collapse" | "expand" | "end-expand" | "none"
            put braces on the same line as control statements (default), or put braces on own line (Allman / ANSI style), or just put end braces on own line, or attempt to keep them where they are.
    inline (defaults to inline tags) - list of tags to be considered inline tags
    unformatted (defaults to inline tags) - list of tags, that shouldn't be reformatted
    content_unformatted (defaults to ["pre", "textarea"] tags) - list of tags, whose content shouldn't be reformatted
    indent_scripts (default normal)  - "keep"|"separate"|"normal"
    preserve_newlines (default true) - whether existing line breaks before elements should be preserved
                                        Only works before elements, not inside tags or for text.
    max_preserve_newlines (default unlimited) - maximum number of line breaks to be preserved in one chunk
    indent_handlebars (default false) - format and indent {{#foo}} and {{/foo}}
    end_with_newline (false)          - end with a newline
    extra_liners (default [head,body,/html]) -List of tags that should have an extra newline before them.

    e.g.

    style_html(html_source, {
      'indent_inner_html': false,
      'indent_size': 2,
      'indent_char': ' ',
      'wrap_line_length': 78,
      'brace_style': 'expand',
      'preserve_newlines': true,
      'max_preserve_newlines': 5,
      'indent_handlebars': false,
      'extra_liners': ['/html']
    });
*/

(function() {

/* GENERATED_BUILD_OUTPUT */
var legacy_beautify_html =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*jshint node:true */
/*
  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/



function OutputLine(parent) {
  this.__parent = parent;
  this.__character_count = 0;
  // use indent_count as a marker for this.__lines that have preserved indentation
  this.__indent_count = -1;
  this.__alignment_count = 0;
  this.__wrap_point_index = 0;
  this.__wrap_point_character_count = 0;
  this.__wrap_point_indent_count = -1;
  this.__wrap_point_alignment_count = 0;

  this.__items = [];
}

OutputLine.prototype.clone_empty = function() {
  var line = new OutputLine(this.__parent);
  line.set_indent(this.__indent_count, this.__alignment_count);
  return line;
};

OutputLine.prototype.item = function(index) {
  if (index < 0) {
    return this.__items[this.__items.length + index];
  } else {
    return this.__items[index];
  }
};

OutputLine.prototype.has_match = function(pattern) {
  for (var lastCheckedOutput = this.__items.length - 1; lastCheckedOutput >= 0; lastCheckedOutput--) {
    if (this.__items[lastCheckedOutput].match(pattern)) {
      return true;
    }
  }
  return false;
};

OutputLine.prototype.set_indent = function(indent, alignment) {
  if (this.is_empty()) {
    this.__indent_count = indent || 0;
    this.__alignment_count = alignment || 0;
    this.__character_count = this.__parent.get_indent_size(this.__indent_count, this.__alignment_count);
  }
};

OutputLine.prototype._set_wrap_point = function() {
  if (this.__parent.wrap_line_length) {
    this.__wrap_point_index = this.__items.length;
    this.__wrap_point_character_count = this.__character_count;
    this.__wrap_point_indent_count = this.__parent.next_line.__indent_count;
    this.__wrap_point_alignment_count = this.__parent.next_line.__alignment_count;
  }
};

OutputLine.prototype._should_wrap = function() {
  return this.__wrap_point_index &&
    this.__character_count > this.__parent.wrap_line_length &&
    this.__wrap_point_character_count > this.__parent.next_line.__character_count;
};

OutputLine.prototype._allow_wrap = function() {
  if (this._should_wrap()) {
    this.__parent.add_new_line();
    var next = this.__parent.current_line;
    next.set_indent(this.__wrap_point_indent_count, this.__wrap_point_alignment_count);
    next.__items = this.__items.slice(this.__wrap_point_index);
    this.__items = this.__items.slice(0, this.__wrap_point_index);

    next.__character_count += this.__character_count - this.__wrap_point_character_count;
    this.__character_count = this.__wrap_point_character_count;

    if (next.__items[0] === " ") {
      next.__items.splice(0, 1);
      next.__character_count -= 1;
    }
    return true;
  }
  return false;
};

OutputLine.prototype.is_empty = function() {
  return this.__items.length === 0;
};

OutputLine.prototype.last = function() {
  if (!this.is_empty()) {
    return this.__items[this.__items.length - 1];
  } else {
    return null;
  }
};

OutputLine.prototype.push = function(item) {
  this.__items.push(item);
  var last_newline_index = item.lastIndexOf('\n');
  if (last_newline_index !== -1) {
    this.__character_count = item.length - last_newline_index;
  } else {
    this.__character_count += item.length;
  }
};

OutputLine.prototype.pop = function() {
  var item = null;
  if (!this.is_empty()) {
    item = this.__items.pop();
    this.__character_count -= item.length;
  }
  return item;
};


OutputLine.prototype._remove_indent = function() {
  if (this.__indent_count > 0) {
    this.__indent_count -= 1;
    this.__character_count -= this.__parent.indent_size;
  }
};

OutputLine.prototype._remove_wrap_indent = function() {
  if (this.__wrap_point_indent_count > 0) {
    this.__wrap_point_indent_count -= 1;
  }
};
OutputLine.prototype.trim = function() {
  while (this.last() === ' ') {
    this.__items.pop();
    this.__character_count -= 1;
  }
};

OutputLine.prototype.toString = function() {
  var result = '';
  if (this.is_empty()) {
    if (this.__parent.indent_empty_lines) {
      result = this.__parent.get_indent_string(this.__indent_count);
    }
  } else {
    result = this.__parent.get_indent_string(this.__indent_count, this.__alignment_count);
    result += this.__items.join('');
  }
  return result;
};

function IndentStringCache(options, baseIndentString) {
  this.__cache = [''];
  this.__indent_size = options.indent_size;
  this.__indent_string = options.indent_char;
  if (!options.indent_with_tabs) {
    this.__indent_string = new Array(options.indent_size + 1).join(options.indent_char);
  }

  // Set to null to continue support for auto detection of base indent
  baseIndentString = baseIndentString || '';
  if (options.indent_level > 0) {
    baseIndentString = new Array(options.indent_level + 1).join(this.__indent_string);
  }

  this.__base_string = baseIndentString;
  this.__base_string_length = baseIndentString.length;
}

IndentStringCache.prototype.get_indent_size = function(indent, column) {
  var result = this.__base_string_length;
  column = column || 0;
  if (indent < 0) {
    result = 0;
  }
  result += indent * this.__indent_size;
  result += column;
  return result;
};

IndentStringCache.prototype.get_indent_string = function(indent_level, column) {
  var result = this.__base_string;
  column = column || 0;
  if (indent_level < 0) {
    indent_level = 0;
    result = '';
  }
  column += indent_level * this.__indent_size;
  this.__ensure_cache(column);
  result += this.__cache[column];
  return result;
};

IndentStringCache.prototype.__ensure_cache = function(column) {
  while (column >= this.__cache.length) {
    this.__add_column();
  }
};

IndentStringCache.prototype.__add_column = function() {
  var column = this.__cache.length;
  var indent = 0;
  var result = '';
  if (this.__indent_size && column >= this.__indent_size) {
    indent = Math.floor(column / this.__indent_size);
    column -= indent * this.__indent_size;
    result = new Array(indent + 1).join(this.__indent_string);
  }
  if (column) {
    result += new Array(column + 1).join(' ');
  }

  this.__cache.push(result);
};

function Output(options, baseIndentString) {
  this.__indent_cache = new IndentStringCache(options, baseIndentString);
  this.raw = false;
  this._end_with_newline = options.end_with_newline;
  this.indent_size = options.indent_size;
  this.wrap_line_length = options.wrap_line_length;
  this.indent_empty_lines = options.indent_empty_lines;
  this.__lines = [];
  this.previous_line = null;
  this.current_line = null;
  this.next_line = new OutputLine(this);
  this.space_before_token = false;
  this.non_breaking_space = false;
  this.previous_token_wrapped = false;
  // initialize
  this.__add_outputline();
}

Output.prototype.__add_outputline = function() {
  this.previous_line = this.current_line;
  this.current_line = this.next_line.clone_empty();
  this.__lines.push(this.current_line);
};

Output.prototype.get_line_number = function() {
  return this.__lines.length;
};

Output.prototype.get_indent_string = function(indent, column) {
  return this.__indent_cache.get_indent_string(indent, column);
};

Output.prototype.get_indent_size = function(indent, column) {
  return this.__indent_cache.get_indent_size(indent, column);
};

Output.prototype.is_empty = function() {
  return !this.previous_line && this.current_line.is_empty();
};

Output.prototype.add_new_line = function(force_newline) {
  // never newline at the start of file
  // otherwise, newline only if we didn't just add one or we're forced
  if (this.is_empty() ||
    (!force_newline && this.just_added_newline())) {
    return false;
  }

  // if raw output is enabled, don't print additional newlines,
  // but still return True as though you had
  if (!this.raw) {
    this.__add_outputline();
  }
  return true;
};

Output.prototype.get_code = function(eol) {
  this.trim(true);

  // handle some edge cases where the last tokens
  // has text that ends with newline(s)
  var last_item = this.current_line.pop();
  if (last_item) {
    if (last_item[last_item.length - 1] === '\n') {
      last_item = last_item.replace(/\n+$/g, '');
    }
    this.current_line.push(last_item);
  }

  if (this._end_with_newline) {
    this.__add_outputline();
  }

  var sweet_code = this.__lines.join('\n');

  if (eol !== '\n') {
    sweet_code = sweet_code.replace(/[\n]/g, eol);
  }
  return sweet_code;
};

Output.prototype.set_wrap_point = function() {
  this.current_line._set_wrap_point();
};

Output.prototype.set_indent = function(indent, alignment) {
  indent = indent || 0;
  alignment = alignment || 0;

  // Next line stores alignment values
  this.next_line.set_indent(indent, alignment);

  // Never indent your first output indent at the start of the file
  if (this.__lines.length > 1) {
    this.current_line.set_indent(indent, alignment);
    return true;
  }

  this.current_line.set_indent();
  return false;
};

Output.prototype.add_raw_token = function(token) {
  for (var x = 0; x < token.newlines; x++) {
    this.__add_outputline();
  }
  this.current_line.set_indent(-1);
  this.current_line.push(token.whitespace_before);
  this.current_line.push(token.text);
  this.space_before_token = false;
  this.non_breaking_space = false;
  this.previous_token_wrapped = false;
};

Output.prototype.add_token = function(printable_token) {
  this.__add_space_before_token();
  this.current_line.push(printable_token);
  this.space_before_token = false;
  this.non_breaking_space = false;
  this.previous_token_wrapped = this.current_line._allow_wrap();
};

Output.prototype.__add_space_before_token = function() {
  if (this.space_before_token && !this.just_added_newline()) {
    if (!this.non_breaking_space) {
      this.set_wrap_point();
    }
    this.current_line.push(' ');
  }
};

Output.prototype.remove_indent = function(index) {
  var output_length = this.__lines.length;
  while (index < output_length) {
    this.__lines[index]._remove_indent();
    index++;
  }
  this.current_line._remove_wrap_indent();
};

Output.prototype.trim = function(eat_newlines) {
  eat_newlines = (eat_newlines === undefined) ? false : eat_newlines;

  this.current_line.trim();

  while (eat_newlines && this.__lines.length > 1 &&
    this.current_line.is_empty()) {
    this.__lines.pop();
    this.current_line = this.__lines[this.__lines.length - 1];
    this.current_line.trim();
  }

  this.previous_line = this.__lines.length > 1 ?
    this.__lines[this.__lines.length - 2] : null;
};

Output.prototype.just_added_newline = function() {
  return this.current_line.is_empty();
};

Output.prototype.just_added_blankline = function() {
  return this.is_empty() ||
    (this.current_line.is_empty() && this.previous_line.is_empty());
};

Output.prototype.ensure_empty_line_above = function(starts_with, ends_with) {
  var index = this.__lines.length - 2;
  while (index >= 0) {
    var potentialEmptyLine = this.__lines[index];
    if (potentialEmptyLine.is_empty()) {
      break;
    } else if (potentialEmptyLine.item(0).indexOf(starts_with) !== 0 &&
      potentialEmptyLine.item(-1) !== ends_with) {
      this.__lines.splice(index + 1, 0, new OutputLine(this));
      this.previous_line = this.__lines[this.__lines.length - 2];
      break;
    }
    index--;
  }
};

module.exports.Output = Output;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*jshint node:true */
/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/



function Token(type, text, newlines, whitespace_before) {
  this.type = type;
  this.text = text;

  // comments_before are
  // comments that have a new line before them
  // and may or may not have a newline after
  // this is a set of comments before
  this.comments_before = null; /* inline comment*/


  // this.comments_after =  new TokenStream(); // no new line before and newline after
  this.newlines = newlines || 0;
  this.whitespace_before = whitespace_before || '';
  this.parent = null;
  this.next = null;
  this.previous = null;
  this.opened = null;
  this.closed = null;
  this.directives = null;
}


module.exports.Token = Token;


/***/ }),
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*jshint node:true */
/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/



function Options(options, merge_child_field) {
  this.raw_options = _mergeOpts(options, merge_child_field);

  // Support passing the source text back with no change
  this.disabled = this._get_boolean('disabled');

  this.eol = this._get_characters('eol', 'auto');
  this.end_with_newline = this._get_boolean('end_with_newline');
  this.indent_size = this._get_number('indent_size', 4);
  this.indent_char = this._get_characters('indent_char', ' ');
  this.indent_level = this._get_number('indent_level');

  this.preserve_newlines = this._get_boolean('preserve_newlines', true);
  this.max_preserve_newlines = this._get_number('max_preserve_newlines', 32786);
  if (!this.preserve_newlines) {
    this.max_preserve_newlines = 0;
  }

  this.indent_with_tabs = this._get_boolean('indent_with_tabs', this.indent_char === '\t');
  if (this.indent_with_tabs) {
    this.indent_char = '\t';

    // indent_size behavior changed after 1.8.6
    // It used to be that indent_size would be
    // set to 1 for indent_with_tabs. That is no longer needed and
    // actually doesn't make sense - why not use spaces? Further,
    // that might produce unexpected behavior - tabs being used
    // for single-column alignment. So, when indent_with_tabs is true
    // and indent_size is 1, reset indent_size to 4.
    if (this.indent_size === 1) {
      this.indent_size = 4;
    }
  }

  // Backwards compat with 1.3.x
  this.wrap_line_length = this._get_number('wrap_line_length', this._get_number('max_char'));

  this.indent_empty_lines = this._get_boolean('indent_empty_lines');

  // valid templating languages ['django', 'erb', 'handlebars', 'php']
  // For now, 'auto' = all off for javascript, all on for html (and inline javascript).
  // other values ignored
  this.templating = this._get_selection_list('templating', ['auto', 'none', 'django', 'erb', 'handlebars', 'php'], ['auto']);
}

Options.prototype._get_array = function(name, default_value) {
  var option_value = this.raw_options[name];
  var result = default_value || [];
  if (typeof option_value === 'object') {
    if (option_value !== null && typeof option_value.concat === 'function') {
      result = option_value.concat();
    }
  } else if (typeof option_value === 'string') {
    result = option_value.split(/[^a-zA-Z0-9_\/\-]+/);
  }
  return result;
};

Options.prototype._get_boolean = function(name, default_value) {
  var option_value = this.raw_options[name];
  var result = option_value === undefined ? !!default_value : !!option_value;
  return result;
};

Options.prototype._get_characters = function(name, default_value) {
  var option_value = this.raw_options[name];
  var result = default_value || '';
  if (typeof option_value === 'string') {
    result = option_value.replace(/\\r/, '\r').replace(/\\n/, '\n').replace(/\\t/, '\t');
  }
  return result;
};

Options.prototype._get_number = function(name, default_value) {
  var option_value = this.raw_options[name];
  default_value = parseInt(default_value, 10);
  if (isNaN(default_value)) {
    default_value = 0;
  }
  var result = parseInt(option_value, 10);
  if (isNaN(result)) {
    result = default_value;
  }
  return result;
};

Options.prototype._get_selection = function(name, selection_list, default_value) {
  var result = this._get_selection_list(name, selection_list, default_value);
  if (result.length !== 1) {
    throw new Error(
      "Invalid Option Value: The option '" + name + "' can only be one of the following values:\n" +
      selection_list + "\nYou passed in: '" + this.raw_options[name] + "'");
  }

  return result[0];
};


Options.prototype._get_selection_list = function(name, selection_list, default_value) {
  if (!selection_list || selection_list.length === 0) {
    throw new Error("Selection list cannot be empty.");
  }

  default_value = default_value || [selection_list[0]];
  if (!this._is_valid_selection(default_value, selection_list)) {
    throw new Error("Invalid Default Value!");
  }

  var result = this._get_array(name, default_value);
  if (!this._is_valid_selection(result, selection_list)) {
    throw new Error(
      "Invalid Option Value: The option '" + name + "' can contain only the following values:\n" +
      selection_list + "\nYou passed in: '" + this.raw_options[name] + "'");
  }

  return result;
};

Options.prototype._is_valid_selection = function(result, selection_list) {
  return result.length && selection_list.length &&
    !result.some(function(item) { return selection_list.indexOf(item) === -1; });
};


// merges child options up with the parent options object
// Example: obj = {a: 1, b: {a: 2}}
//          mergeOpts(obj, 'b')
//
//          Returns: {a: 2}
function _mergeOpts(allOptions, childFieldName) {
  var finalOpts = {};
  allOptions = _normalizeOpts(allOptions);
  var name;

  for (name in allOptions) {
    if (name !== childFieldName) {
      finalOpts[name] = allOptions[name];
    }
  }

  //merge in the per type settings for the childFieldName
  if (childFieldName && allOptions[childFieldName]) {
    for (name in allOptions[childFieldName]) {
      finalOpts[name] = allOptions[childFieldName][name];
    }
  }
  return finalOpts;
}

function _normalizeOpts(options) {
  var convertedOpts = {};
  var key;

  for (key in options) {
    var newKey = key.replace(/-/g, "_");
    convertedOpts[newKey] = options[key];
  }
  return convertedOpts;
}

module.exports.Options = Options;
module.exports.normalizeOpts = _normalizeOpts;
module.exports.mergeOpts = _mergeOpts;


/***/ }),
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*jshint node:true */
/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/



var regexp_has_sticky = RegExp.prototype.hasOwnProperty('sticky');

function InputScanner(input_string) {
  this.__input = input_string || '';
  this.__input_length = this.__input.length;
  this.__position = 0;
}

InputScanner.prototype.restart = function() {
  this.__position = 0;
};

InputScanner.prototype.back = function() {
  if (this.__position > 0) {
    this.__position -= 1;
  }
};

InputScanner.prototype.hasNext = function() {
  return this.__position < this.__input_length;
};

InputScanner.prototype.next = function() {
  var val = null;
  if (this.hasNext()) {
    val = this.__input.charAt(this.__position);
    this.__position += 1;
  }
  return val;
};

InputScanner.prototype.peek = function(index) {
  var val = null;
  index = index || 0;
  index += this.__position;
  if (index >= 0 && index < this.__input_length) {
    val = this.__input.charAt(index);
  }
  return val;
};

// This is a JavaScript only helper function (not in python)
// Javascript doesn't have a match method
// and not all implementation support "sticky" flag.
// If they do not support sticky then both this.match() and this.test() method
// must get the match and check the index of the match.
// If sticky is supported and set, this method will use it.
// Otherwise it will check that global is set, and fall back to the slower method.
InputScanner.prototype.__match = function(pattern, index) {
  pattern.lastIndex = index;
  var pattern_match = pattern.exec(this.__input);

  if (pattern_match && !(regexp_has_sticky && pattern.sticky)) {
    if (pattern_match.index !== index) {
      pattern_match = null;
    }
  }

  return pattern_match;
};

InputScanner.prototype.test = function(pattern, index) {
  index = index || 0;
  index += this.__position;

  if (index >= 0 && index < this.__input_length) {
    return !!this.__match(pattern, index);
  } else {
    return false;
  }
};

InputScanner.prototype.testChar = function(pattern, index) {
  // test one character regex match
  var val = this.peek(index);
  pattern.lastIndex = 0;
  return val !== null && pattern.test(val);
};

InputScanner.prototype.match = function(pattern) {
  var pattern_match = this.__match(pattern, this.__position);
  if (pattern_match) {
    this.__position += pattern_match[0].length;
  } else {
    pattern_match = null;
  }
  return pattern_match;
};

InputScanner.prototype.read = function(starting_pattern, until_pattern, until_after) {
  var val = '';
  var match;
  if (starting_pattern) {
    match = this.match(starting_pattern);
    if (match) {
      val += match[0];
    }
  }
  if (until_pattern && (match || !starting_pattern)) {
    val += this.readUntil(until_pattern, until_after);
  }
  return val;
};

InputScanner.prototype.readUntil = function(pattern, until_after) {
  var val = '';
  var match_index = this.__position;
  pattern.lastIndex = this.__position;
  var pattern_match = pattern.exec(this.__input);
  if (pattern_match) {
    match_index = pattern_match.index;
    if (until_after) {
      match_index += pattern_match[0].length;
    }
  } else {
    match_index = this.__input_length;
  }

  val = this.__input.substring(this.__position, match_index);
  this.__position = match_index;
  return val;
};

InputScanner.prototype.readUntilAfter = function(pattern) {
  return this.readUntil(pattern, true);
};

InputScanner.prototype.get_regexp = function(pattern, match_from) {
  var result = null;
  var flags = 'g';
  if (match_from && regexp_has_sticky) {
    flags = 'y';
  }
  // strings are converted to regexp
  if (typeof pattern === "string" && pattern !== '') {
    // result = new RegExp(pattern.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), flags);
    result = new RegExp(pattern, flags);
  } else if (pattern) {
    result = new RegExp(pattern.source, flags);
  }
  return result;
};

InputScanner.prototype.get_literal_regexp = function(literal_string) {
  return RegExp(literal_string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'));
};

/* css beautifier legacy helpers */
InputScanner.prototype.peekUntilAfter = function(pattern) {
  var start = this.__position;
  var val = this.readUntilAfter(pattern);
  this.__position = start;
  return val;
};

InputScanner.prototype.lookBack = function(testVal) {
  var start = this.__position - 1;
  return start >= testVal.length && this.__input.substring(start - testVal.length, start)
    .toLowerCase() === testVal;
};

module.exports.InputScanner = InputScanner;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*jshint node:true */
/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/



var InputScanner = __webpack_require__(8).InputScanner;
var Token = __webpack_require__(3).Token;
var TokenStream = __webpack_require__(10).TokenStream;
var WhitespacePattern = __webpack_require__(11).WhitespacePattern;

var TOKEN = {
  START: 'TK_START',
  RAW: 'TK_RAW',
  EOF: 'TK_EOF'
};

var Tokenizer = function(input_string, options) {
  this._input = new InputScanner(input_string);
  this._options = options || {};
  this.__tokens = null;

  this._patterns = {};
  this._patterns.whitespace = new WhitespacePattern(this._input);
};

Tokenizer.prototype.tokenize = function() {
  this._input.restart();
  this.__tokens = new TokenStream();

  this._reset();

  var current;
  var previous = new Token(TOKEN.START, '');
  var open_token = null;
  var open_stack = [];
  var comments = new TokenStream();

  while (previous.type !== TOKEN.EOF) {
    current = this._get_next_token(previous, open_token);
    while (this._is_comment(current)) {
      comments.add(current);
      current = this._get_next_token(previous, open_token);
    }

    if (!comments.isEmpty()) {
      current.comments_before = comments;
      comments = new TokenStream();
    }

    current.parent = open_token;

    if (this._is_opening(current)) {
      open_stack.push(open_token);
      open_token = current;
    } else if (open_token && this._is_closing(current, open_token)) {
      current.opened = open_token;
      open_token.closed = current;
      open_token = open_stack.pop();
      current.parent = open_token;
    }

    current.previous = previous;
    previous.next = current;

    this.__tokens.add(current);
    previous = current;
  }

  return this.__tokens;
};


Tokenizer.prototype._is_first_token = function() {
  return this.__tokens.isEmpty();
};

Tokenizer.prototype._reset = function() {};

Tokenizer.prototype._get_next_token = function(previous_token, open_token) { // jshint unused:false
  this._readWhitespace();
  var resulting_string = this._input.read(/.+/g);
  if (resulting_string) {
    return this._create_token(TOKEN.RAW, resulting_string);
  } else {
    return this._create_token(TOKEN.EOF, '');
  }
};

Tokenizer.prototype._is_comment = function(current_token) { // jshint unused:false
  return false;
};

Tokenizer.prototype._is_opening = function(current_token) { // jshint unused:false
  return false;
};

Tokenizer.prototype._is_closing = function(current_token, open_token) { // jshint unused:false
  return false;
};

Tokenizer.prototype._create_token = function(type, text) {
  var token = new Token(type, text,
    this._patterns.whitespace.newline_count,
    this._patterns.whitespace.whitespace_before_token);
  return token;
};

Tokenizer.prototype._readWhitespace = function() {
  return this._patterns.whitespace.read();
};



module.exports.Tokenizer = Tokenizer;
module.exports.TOKEN = TOKEN;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*jshint node:true */
/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/



function TokenStream(parent_token) {
  // private
  this.__tokens = [];
  this.__tokens_length = this.__tokens.length;
  this.__position = 0;
  this.__parent_token = parent_token;
}

TokenStream.prototype.restart = function() {
  this.__position = 0;
};

TokenStream.prototype.isEmpty = function() {
  return this.__tokens_length === 0;
};

TokenStream.prototype.hasNext = function() {
  return this.__position < this.__tokens_length;
};

TokenStream.prototype.next = function() {
  var val = null;
  if (this.hasNext()) {
    val = this.__tokens[this.__position];
    this.__position += 1;
  }
  return val;
};

TokenStream.prototype.peek = function(index) {
  var val = null;
  index = index || 0;
  index += this.__position;
  if (index >= 0 && index < this.__tokens_length) {
    val = this.__tokens[index];
  }
  return val;
};

TokenStream.prototype.add = function(token) {
  if (this.__parent_token) {
    token.parent = this.__parent_token;
  }
  this.__tokens.push(token);
  this.__tokens_length += 1;
};

module.exports.TokenStream = TokenStream;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*jshint node:true */
/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/



var Pattern = __webpack_require__(12).Pattern;

function WhitespacePattern(input_scanner, parent) {
  Pattern.call(this, input_scanner, parent);
  if (parent) {
    this._line_regexp = this._input.get_regexp(parent._line_regexp);
  } else {
    this.__set_whitespace_patterns('', '');
  }

  this.newline_count = 0;
  this.whitespace_before_token = '';
}
WhitespacePattern.prototype = new Pattern();

WhitespacePattern.prototype.__set_whitespace_patterns = function(whitespace_chars, newline_chars) {
  whitespace_chars += '\\t ';
  newline_chars += '\\n\\r';

  this._match_pattern = this._input.get_regexp(
    '[' + whitespace_chars + newline_chars + ']+', true);
  this._newline_regexp = this._input.get_regexp(
    '\\r\\n|[' + newline_chars + ']');
};

WhitespacePattern.prototype.read = function() {
  this.newline_count = 0;
  this.whitespace_before_token = '';

  var resulting_string = this._input.read(this._match_pattern);
  if (resulting_string === ' ') {
    this.whitespace_before_token = ' ';
  } else if (resulting_string) {
    var matches = this.__split(this._newline_regexp, resulting_string);
    this.newline_count = matches.length - 1;
    this.whitespace_before_token = matches[this.newline_count];
  }

  return resulting_string;
};

WhitespacePattern.prototype.matching = function(whitespace_chars, newline_chars) {
  var result = this._create();
  result.__set_whitespace_patterns(whitespace_chars, newline_chars);
  result._update();
  return result;
};

WhitespacePattern.prototype._create = function() {
  return new WhitespacePattern(this._input, this);
};

WhitespacePattern.prototype.__split = function(regexp, input_string) {
  regexp.lastIndex = 0;
  var start_index = 0;
  var result = [];
  var next_match = regexp.exec(input_string);
  while (next_match) {
    result.push(input_string.substring(start_index, next_match.index));
    start_index = next_match.index + next_match[0].length;
    next_match = regexp.exec(input_string);
  }

  if (start_index < input_string.length) {
    result.push(input_string.substring(start_index, input_string.length));
  } else {
    result.push('');
  }

  return result;
};



module.exports.WhitespacePattern = WhitespacePattern;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*jshint node:true */
/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/



function Pattern(input_scanner, parent) {
  this._input = input_scanner;
  this._starting_pattern = null;
  this._match_pattern = null;
  this._until_pattern = null;
  this._until_after = false;

  if (parent) {
    this._starting_pattern = this._input.get_regexp(parent._starting_pattern, true);
    this._match_pattern = this._input.get_regexp(parent._match_pattern, true);
    this._until_pattern = this._input.get_regexp(parent._until_pattern);
    this._until_after = parent._until_after;
  }
}

Pattern.prototype.read = function() {
  var result = this._input.read(this._starting_pattern);
  if (!this._starting_pattern || result) {
    result += this._input.read(this._match_pattern, this._until_pattern, this._until_after);
  }
  return result;
};

Pattern.prototype.read_match = function() {
  return this._input.match(this._match_pattern);
};

Pattern.prototype.until_after = function(pattern) {
  var result = this._create();
  result._until_after = true;
  result._until_pattern = this._input.get_regexp(pattern);
  result._update();
  return result;
};

Pattern.prototype.until = function(pattern) {
  var result = this._create();
  result._until_after = false;
  result._until_pattern = this._input.get_regexp(pattern);
  result._update();
  return result;
};

Pattern.prototype.starting_with = function(pattern) {
  var result = this._create();
  result._starting_pattern = this._input.get_regexp(pattern, true);
  result._update();
  return result;
};

Pattern.prototype.matching = function(pattern) {
  var result = this._create();
  result._match_pattern = this._input.get_regexp(pattern, true);
  result._update();
  return result;
};

Pattern.prototype._create = function() {
  return new Pattern(this._input, this);
};

Pattern.prototype._update = function() {};

module.exports.Pattern = Pattern;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*jshint node:true */
/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/



function Directives(start_block_pattern, end_block_pattern) {
  start_block_pattern = typeof start_block_pattern === 'string' ? start_block_pattern : start_block_pattern.source;
  end_block_pattern = typeof end_block_pattern === 'string' ? end_block_pattern : end_block_pattern.source;
  this.__directives_block_pattern = new RegExp(start_block_pattern + / beautify( \w+[:]\w+)+ /.source + end_block_pattern, 'g');
  this.__directive_pattern = / (\w+)[:](\w+)/g;

  this.__directives_end_ignore_pattern = new RegExp(start_block_pattern + /\sbeautify\signore:end\s/.source + end_block_pattern, 'g');
}

Directives.prototype.get_directives = function(text) {
  if (!text.match(this.__directives_block_pattern)) {
    return null;
  }

  var directives = {};
  this.__directive_pattern.lastIndex = 0;
  var directive_match = this.__directive_pattern.exec(text);

  while (directive_match) {
    directives[directive_match[1]] = directive_match[2];
    directive_match = this.__directive_pattern.exec(text);
  }

  return directives;
};

Directives.prototype.readIgnored = function(input) {
  return input.readUntilAfter(this.__directives_end_ignore_pattern);
};


module.exports.Directives = Directives;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*jshint node:true */
/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/



var Pattern = __webpack_require__(12).Pattern;


var template_names = {
  django: false,
  erb: false,
  handlebars: false,
  php: false
};

// This lets templates appear anywhere we would do a readUntil
// The cost is higher but it is pay to play.
function TemplatablePattern(input_scanner, parent) {
  Pattern.call(this, input_scanner, parent);
  this.__template_pattern = null;
  this._disabled = Object.assign({}, template_names);
  this._excluded = Object.assign({}, template_names);

  if (parent) {
    this.__template_pattern = this._input.get_regexp(parent.__template_pattern);
    this._excluded = Object.assign(this._excluded, parent._excluded);
    this._disabled = Object.assign(this._disabled, parent._disabled);
  }
  var pattern = new Pattern(input_scanner);
  this.__patterns = {
    handlebars_comment: pattern.starting_with(/{{!--/).until_after(/--}}/),
    handlebars: pattern.starting_with(/{{/).until_after(/}}/),
    php: pattern.starting_with(/<\?(?:[=]|php)/).until_after(/\?>/),
    erb: pattern.starting_with(/<%[^%]/).until_after(/[^%]%>/),
    // django coflicts with handlebars a bit.
    django: pattern.starting_with(/{%/).until_after(/%}/),
    django_value: pattern.starting_with(/{{/).until_after(/}}/),
    django_comment: pattern.starting_with(/{#/).until_after(/#}/)
  };
}
TemplatablePattern.prototype = new Pattern();

TemplatablePattern.prototype._create = function() {
  return new TemplatablePattern(this._input, this);
};

TemplatablePattern.prototype._update = function() {
  this.__set_templated_pattern();
};

TemplatablePattern.prototype.disable = function(language) {
  var result = this._create();
  result._disabled[language] = true;
  result._update();
  return result;
};

TemplatablePattern.prototype.read_options = function(options) {
  var result = this._create();
  for (var language in template_names) {
    result._disabled[language] = options.templating.indexOf(language) === -1;
  }
  result._update();
  return result;
};

TemplatablePattern.prototype.exclude = function(language) {
  var result = this._create();
  result._excluded[language] = true;
  result._update();
  return result;
};

TemplatablePattern.prototype.read = function() {
  var result = '';
  if (this._match_pattern) {
    result = this._input.read(this._starting_pattern);
  } else {
    result = this._input.read(this._starting_pattern, this.__template_pattern);
  }
  var next = this._read_template();
  while (next) {
    if (this._match_pattern) {
      next += this._input.read(this._match_pattern);
    } else {
      next += this._input.readUntil(this.__template_pattern);
    }
    result += next;
    next = this._read_template();
  }

  if (this._until_after) {
    result += this._input.readUntilAfter(this._until_pattern);
  }
  return result;
};

TemplatablePattern.prototype.__set_templated_pattern = function() {
  var items = [];

  if (!this._disabled.php) {
    items.push(this.__patterns.php._starting_pattern.source);
  }
  if (!this._disabled.handlebars) {
    items.push(this.__patterns.handlebars._starting_pattern.source);
  }
  if (!this._disabled.erb) {
    items.push(this.__patterns.erb._starting_pattern.source);
  }
  if (!this._disabled.django) {
    items.push(this.__patterns.django._starting_pattern.source);
    items.push(this.__patterns.django_value._starting_pattern.source);
    items.push(this.__patterns.django_comment._starting_pattern.source);
  }

  if (this._until_pattern) {
    items.push(this._until_pattern.source);
  }
  this.__template_pattern = this._input.get_regexp('(?:' + items.join('|') + ')');
};

TemplatablePattern.prototype._read_template = function() {
  var resulting_string = '';
  var c = this._input.peek();
  if (c === '<') {
    var peek1 = this._input.peek(1);
    //if we're in a comment, do something special
    // We treat all comments as literals, even more than preformatted tags
    // we just look for the appropriate close tag
    if (!this._disabled.php && !this._excluded.php && peek1 === '?') {
      resulting_string = resulting_string ||
        this.__patterns.php.read();
    }
    if (!this._disabled.erb && !this._excluded.erb && peek1 === '%') {
      resulting_string = resulting_string ||
        this.__patterns.erb.read();
    }
  } else if (c === '{') {
    if (!this._disabled.handlebars && !this._excluded.handlebars) {
      resulting_string = resulting_string ||
        this.__patterns.handlebars_comment.read();
      resulting_string = resulting_string ||
        this.__patterns.handlebars.read();
    }
    if (!this._disabled.django) {
      // django coflicts with handlebars a bit.
      if (!this._excluded.django && !this._excluded.handlebars) {
        resulting_string = resulting_string ||
          this.__patterns.django_value.read();
      }
      if (!this._excluded.django) {
        resulting_string = resulting_string ||
          this.__patterns.django_comment.read();
        resulting_string = resulting_string ||
          this.__patterns.django.read();
      }
    }
  }
  return resulting_string;
};


module.exports.TemplatablePattern = TemplatablePattern;


/***/ }),
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*jshint node:true */
/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/



var Beautifier = __webpack_require__(19).Beautifier,
  Options = __webpack_require__(20).Options;

function style_html(html_source, options, js_beautify, css_beautify) {
  var beautifier = new Beautifier(html_source, options, js_beautify, css_beautify);
  return beautifier.beautify();
}

module.exports = style_html;
module.exports.defaultOptions = function() {
  return new Options();
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*jshint node:true */
/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/



var Options = __webpack_require__(20).Options;
var Output = __webpack_require__(2).Output;
var Tokenizer = __webpack_require__(21).Tokenizer;
var TOKEN = __webpack_require__(21).TOKEN;

var lineBreak = /\r\n|[\r\n]/;
var allLineBreaks = /\r\n|[\r\n]/g;

var Printer = function(options, base_indent_string) { //handles input/output and some other printing functions

  this.indent_level = 0;
  this.alignment_size = 0;
  this.max_preserve_newlines = options.max_preserve_newlines;
  this.preserve_newlines = options.preserve_newlines;

  this._output = new Output(options, base_indent_string);

};

Printer.prototype.current_line_has_match = function(pattern) {
  return this._output.current_line.has_match(pattern);
};

Printer.prototype.set_space_before_token = function(value, non_breaking) {
  this._output.space_before_token = value;
  this._output.non_breaking_space = non_breaking;
};

Printer.prototype.set_wrap_point = function() {
  this._output.set_indent(this.indent_level, this.alignment_size);
  this._output.set_wrap_point();
};


Printer.prototype.add_raw_token = function(token) {
  this._output.add_raw_token(token);
};

Printer.prototype.print_preserved_newlines = function(raw_token) {
  var newlines = 0;
  if (raw_token.type !== TOKEN.TEXT && raw_token.previous.type !== TOKEN.TEXT) {
    newlines = raw_token.newlines ? 1 : 0;
  }

  if (this.preserve_newlines) {
    newlines = raw_token.newlines < this.max_preserve_newlines + 1 ? raw_token.newlines : this.max_preserve_newlines + 1;
  }
  for (var n = 0; n < newlines; n++) {
    this.print_newline(n > 0);
  }

  return newlines !== 0;
};

Printer.prototype.traverse_whitespace = function(raw_token) {
  if (raw_token.whitespace_before || raw_token.newlines) {
    if (!this.print_preserved_newlines(raw_token)) {
      this._output.space_before_token = true;
    }
    return true;
  }
  return false;
};

Printer.prototype.previous_token_wrapped = function() {
  return this._output.previous_token_wrapped;
};

Printer.prototype.print_newline = function(force) {
  this._output.add_new_line(force);
};

Printer.prototype.print_token = function(token) {
  if (token.text) {
    this._output.set_indent(this.indent_level, this.alignment_size);
    this._output.add_token(token.text);
  }
};

Printer.prototype.indent = function() {
  this.indent_level++;
};

Printer.prototype.get_full_indent = function(level) {
  level = this.indent_level + (level || 0);
  if (level < 1) {
    return '';
  }

  return this._output.get_indent_string(level);
};

var get_type_attribute = function(start_token) {
  var result = null;
  var raw_token = start_token.next;

  // Search attributes for a type attribute
  while (raw_token.type !== TOKEN.EOF && start_token.closed !== raw_token) {
    if (raw_token.type === TOKEN.ATTRIBUTE && raw_token.text === 'type') {
      if (raw_token.next && raw_token.next.type === TOKEN.EQUALS &&
        raw_token.next.next && raw_token.next.next.type === TOKEN.VALUE) {
        result = raw_token.next.next.text;
      }
      break;
    }
    raw_token = raw_token.next;
  }

  return result;
};

var get_custom_beautifier_name = function(tag_check, raw_token) {
  var typeAttribute = null;
  var result = null;

  if (!raw_token.closed) {
    return null;
  }

  if (tag_check === 'script') {
    typeAttribute = 'text/javascript';
  } else if (tag_check === 'style') {
    typeAttribute = 'text/css';
  }

  typeAttribute = get_type_attribute(raw_token) || typeAttribute;

  // For script and style tags that have a type attribute, only enable custom beautifiers for matching values
  // For those without a type attribute use default;
  if (typeAttribute.search('text/css') > -1) {
    result = 'css';
  } else if (typeAttribute.search(/(text|application|dojo)\/(x-)?(javascript|ecmascript|jscript|livescript|(ld\+)?json|method|aspect)/) > -1) {
    result = 'javascript';
  } else if (typeAttribute.search(/(text|application|dojo)\/(x-)?(html)/) > -1) {
    result = 'html';
  } else if (typeAttribute.search(/test\/null/) > -1) {
    // Test only mime-type for testing the beautifier when null is passed as beautifing function
    result = 'null';
  }

  return result;
};

function in_array(what, arr) {
  return arr.indexOf(what) !== -1;
}

function TagFrame(parent, parser_token, indent_level) {
  this.parent = parent || null;
  this.tag = parser_token ? parser_token.tag_name : '';
  this.indent_level = indent_level || 0;
  this.parser_token = parser_token || null;
}

function TagStack(printer) {
  this._printer = printer;
  this._current_frame = null;
}

TagStack.prototype.get_parser_token = function() {
  return this._current_frame ? this._current_frame.parser_token : null;
};

TagStack.prototype.record_tag = function(parser_token) { //function to record a tag and its parent in this.tags Object
  var new_frame = new TagFrame(this._current_frame, parser_token, this._printer.indent_level);
  this._current_frame = new_frame;
};

TagStack.prototype._try_pop_frame = function(frame) { //function to retrieve the opening tag to the corresponding closer
  var parser_token = null;

  if (frame) {
    parser_token = frame.parser_token;
    this._printer.indent_level = frame.indent_level;
    this._current_frame = frame.parent;
  }

  return parser_token;
};

TagStack.prototype._get_frame = function(tag_list, stop_list) { //function to retrieve the opening tag to the corresponding closer
  var frame = this._current_frame;

  while (frame) { //till we reach '' (the initial value);
    if (tag_list.indexOf(frame.tag) !== -1) { //if this is it use it
      break;
    } else if (stop_list && stop_list.indexOf(frame.tag) !== -1) {
      frame = null;
      break;
    }
    frame = frame.parent;
  }

  return frame;
};

TagStack.prototype.try_pop = function(tag, stop_list) { //function to retrieve the opening tag to the corresponding closer
  var frame = this._get_frame([tag], stop_list);
  return this._try_pop_frame(frame);
};

TagStack.prototype.indent_to_tag = function(tag_list) {
  var frame = this._get_frame(tag_list);
  if (frame) {
    this._printer.indent_level = frame.indent_level;
  }
};

function Beautifier(source_text, options, js_beautify, css_beautify) {
  //Wrapper function to invoke all the necessary constructors and deal with the output.
  this._source_text = source_text || '';
  options = options || {};
  this._js_beautify = js_beautify;
  this._css_beautify = css_beautify;
  this._tag_stack = null;

  // Allow the setting of language/file-type specific options
  // with inheritance of overall settings
  var optionHtml = new Options(options, 'html');

  this._options = optionHtml;

  this._is_wrap_attributes_force = this._options.wrap_attributes.substr(0, 'force'.length) === 'force';
  this._is_wrap_attributes_force_expand_multiline = (this._options.wrap_attributes === 'force-expand-multiline');
  this._is_wrap_attributes_force_aligned = (this._options.wrap_attributes === 'force-aligned');
  this._is_wrap_attributes_aligned_multiple = (this._options.wrap_attributes === 'aligned-multiple');
  this._is_wrap_attributes_preserve = this._options.wrap_attributes.substr(0, 'preserve'.length) === 'preserve';
  this._is_wrap_attributes_preserve_aligned = (this._options.wrap_attributes === 'preserve-aligned');
}

Beautifier.prototype.beautify = function() {

  // if disabled, return the input unchanged.
  if (this._options.disabled) {
    return this._source_text;
  }

  var source_text = this._source_text;
  var eol = this._options.eol;
  if (this._options.eol === 'auto') {
    eol = '\n';
    if (source_text && lineBreak.test(source_text)) {
      eol = source_text.match(lineBreak)[0];
    }
  }

  // HACK: newline parsing inconsistent. This brute force normalizes the input.
  source_text = source_text.replace(allLineBreaks, '\n');

  var baseIndentString = source_text.match(/^[\t ]*/)[0];

  var last_token = {
    text: '',
    type: ''
  };

  var last_tag_token = new TagOpenParserToken();

  var printer = new Printer(this._options, baseIndentString);
  var tokens = new Tokenizer(source_text, this._options).tokenize();

  this._tag_stack = new TagStack(printer);

  var parser_token = null;
  var raw_token = tokens.next();
  while (raw_token.type !== TOKEN.EOF) {

    if (raw_token.type === TOKEN.TAG_OPEN || raw_token.type === TOKEN.COMMENT) {
      parser_token = this._handle_tag_open(printer, raw_token, last_tag_token, last_token);
      last_tag_token = parser_token;
    } else if ((raw_token.type === TOKEN.ATTRIBUTE || raw_token.type === TOKEN.EQUALS || raw_token.type === TOKEN.VALUE) ||
      (raw_token.type === TOKEN.TEXT && !last_tag_token.tag_complete)) {
      parser_token = this._handle_inside_tag(printer, raw_token, last_tag_token, tokens);
    } else if (raw_token.type === TOKEN.TAG_CLOSE) {
      parser_token = this._handle_tag_close(printer, raw_token, last_tag_token);
    } else if (raw_token.type === TOKEN.TEXT) {
      parser_token = this._handle_text(printer, raw_token, last_tag_token);
    } else {
      // This should never happen, but if it does. Print the raw token
      printer.add_raw_token(raw_token);
    }

    last_token = parser_token;

    raw_token = tokens.next();
  }
  var sweet_code = printer._output.get_code(eol);

  return sweet_code;
};

Beautifier.prototype._handle_tag_close = function(printer, raw_token, last_tag_token) {
  var parser_token = {
    text: raw_token.text,
    type: raw_token.type
  };
  printer.alignment_size = 0;
  last_tag_token.tag_complete = true;

  printer.set_space_before_token(raw_token.newlines || raw_token.whitespace_before !== '', true);
  if (last_tag_token.is_unformatted) {
    printer.add_raw_token(raw_token);
  } else {
    if (last_tag_token.tag_start_char === '<') {
      printer.set_space_before_token(raw_token.text[0] === '/', true); // space before />, no space before >
      if (this._is_wrap_attributes_force_expand_multiline && last_tag_token.has_wrapped_attrs) {
        printer.print_newline(false);
      }
    }
    printer.print_token(raw_token);

  }

  if (last_tag_token.indent_content &&
    !(last_tag_token.is_unformatted || last_tag_token.is_content_unformatted)) {
    printer.indent();

    // only indent once per opened tag
    last_tag_token.indent_content = false;
  }

  if (!last_tag_token.is_inline_element &&
    !(last_tag_token.is_unformatted || last_tag_token.is_content_unformatted)) {
    printer.set_wrap_point();
  }

  return parser_token;
};

Beautifier.prototype._handle_inside_tag = function(printer, raw_token, last_tag_token, tokens) {
  var wrapped = last_tag_token.has_wrapped_attrs;
  var parser_token = {
    text: raw_token.text,
    type: raw_token.type
  };

  printer.set_space_before_token(raw_token.newlines || raw_token.whitespace_before !== '', true);
  if (last_tag_token.is_unformatted) {
    printer.add_raw_token(raw_token);
  } else if (last_tag_token.tag_start_char === '{' && raw_token.type === TOKEN.TEXT) {
    // For the insides of handlebars allow newlines or a single space between open and contents
    if (printer.print_preserved_newlines(raw_token)) {
      raw_token.newlines = 0;
      printer.add_raw_token(raw_token);
    } else {
      printer.print_token(raw_token);
    }
  } else {
    if (raw_token.type === TOKEN.ATTRIBUTE) {
      printer.set_space_before_token(true);
      last_tag_token.attr_count += 1;
    } else if (raw_token.type === TOKEN.EQUALS) { //no space before =
      printer.set_space_before_token(false);
    } else if (raw_token.type === TOKEN.VALUE && raw_token.previous.type === TOKEN.EQUALS) { //no space before value
      printer.set_space_before_token(false);
    }

    if (raw_token.type === TOKEN.ATTRIBUTE && last_tag_token.tag_start_char === '<') {
      if (this._is_wrap_attributes_preserve || this._is_wrap_attributes_preserve_aligned) {
        printer.traverse_whitespace(raw_token);
        wrapped = wrapped || raw_token.newlines !== 0;
      }


      if (this._is_wrap_attributes_force) {
        var force_attr_wrap = last_tag_token.attr_count > 1;
        if (this._is_wrap_attributes_force_expand_multiline && last_tag_token.attr_count === 1) {
          var is_only_attribute = true;
          var peek_index = 0;
          var peek_token;
          do {
            peek_token = tokens.peek(peek_index);
            if (peek_token.type === TOKEN.ATTRIBUTE) {
              is_only_attribute = false;
              break;
            }
            peek_index += 1;
          } while (peek_index < 4 && peek_token.type !== TOKEN.EOF && peek_token.type !== TOKEN.TAG_CLOSE);

          force_attr_wrap = !is_only_attribute;
        }

        if (force_attr_wrap) {
          printer.print_newline(false);
          wrapped = true;
        }
      }
    }
    printer.print_token(raw_token);
    wrapped = wrapped || printer.previous_token_wrapped();
    last_tag_token.has_wrapped_attrs = wrapped;
  }
  return parser_token;
};

Beautifier.prototype._handle_text = function(printer, raw_token, last_tag_token) {
  var parser_token = {
    text: raw_token.text,
    type: 'TK_CONTENT'
  };
  if (last_tag_token.custom_beautifier_name) { //check if we need to format javascript
    this._print_custom_beatifier_text(printer, raw_token, last_tag_token);
  } else if (last_tag_token.is_unformatted || last_tag_token.is_content_unformatted) {
    printer.add_raw_token(raw_token);
  } else {
    printer.traverse_whitespace(raw_token);
    printer.print_token(raw_token);
  }
  return parser_token;
};

Beautifier.prototype._print_custom_beatifier_text = function(printer, raw_token, last_tag_token) {
  var local = this;
  if (raw_token.text !== '') {

    var text = raw_token.text,
      _beautifier,
      script_indent_level = 1,
      pre = '',
      post = '';
    if (last_tag_token.custom_beautifier_name === 'javascript' && typeof this._js_beautify === 'function') {
      _beautifier = this._js_beautify;
    } else if (last_tag_token.custom_beautifier_name === 'css' && typeof this._css_beautify === 'function') {
      _beautifier = this._css_beautify;
    } else if (last_tag_token.custom_beautifier_name === 'html') {
      _beautifier = function(html_source, options) {
        var beautifier = new Beautifier(html_source, options, local._js_beautify, local._css_beautify);
        return beautifier.beautify();
      };
    }

    if (this._options.indent_scripts === "keep") {
      script_indent_level = 0;
    } else if (this._options.indent_scripts === "separate") {
      script_indent_level = -printer.indent_level;
    }

    var indentation = printer.get_full_indent(script_indent_level);

    // if there is at least one empty line at the end of this text, strip it
    // we'll be adding one back after the text but before the containing tag.
    text = text.replace(/\n[ \t]*$/, '');

    // Handle the case where content is wrapped in a comment or cdata.
    if (last_tag_token.custom_beautifier_name !== 'html' &&
      text[0] === '<' && text.match(/^(<!--|<!\[CDATA\[)/)) {
      var matched = /^(<!--[^\n]*|<!\[CDATA\[)(\n?)([ \t\n]*)([\s\S]*)(-->|]]>)$/.exec(text);

      // if we start to wrap but don't finish, print raw
      if (!matched) {
        printer.add_raw_token(raw_token);
        return;
      }

      pre = indentation + matched[1] + '\n';
      text = matched[4];
      if (matched[5]) {
        post = indentation + matched[5];
      }

      // if there is at least one empty line at the end of this text, strip it
      // we'll be adding one back after the text but before the containing tag.
      text = text.replace(/\n[ \t]*$/, '');

      if (matched[2] || matched[3].indexOf('\n') !== -1) {
        // if the first line of the non-comment text has spaces
        // use that as the basis for indenting in null case.
        matched = matched[3].match(/[ \t]+$/);
        if (matched) {
          raw_token.whitespace_before = matched[0];
        }
      }
    }

    if (text) {
      if (_beautifier) {

        // call the Beautifier if avaliable
        var Child_options = function() {
          this.eol = '\n';
        };
        Child_options.prototype = this._options.raw_options;
        var child_options = new Child_options();
        text = _beautifier(indentation + text, child_options);
      } else {
        // simply indent the string otherwise
        var white = raw_token.whitespace_before;
        if (white) {
          text = text.replace(new RegExp('\n(' + white + ')?', 'g'), '\n');
        }

        text = indentation + text.replace(/\n/g, '\n' + indentation);
      }
    }

    if (pre) {
      if (!text) {
        text = pre + post;
      } else {
        text = pre + text + '\n' + post;
      }
    }

    printer.print_newline(false);
    if (text) {
      raw_token.text = text;
      raw_token.whitespace_before = '';
      raw_token.newlines = 0;
      printer.add_raw_token(raw_token);
      printer.print_newline(true);
    }
  }
};

Beautifier.prototype._handle_tag_open = function(printer, raw_token, last_tag_token, last_token) {
  var parser_token = this._get_tag_open_token(raw_token);

  if ((last_tag_token.is_unformatted || last_tag_token.is_content_unformatted) &&
    raw_token.type === TOKEN.TAG_OPEN && raw_token.text.indexOf('</') === 0) {
    // End element tags for unformatted or content_unformatted elements
    // are printed raw to keep any newlines inside them exactly the same.
    printer.add_raw_token(raw_token);
  } else {
    printer.traverse_whitespace(raw_token);
    this._set_tag_position(printer, raw_token, parser_token, last_tag_token, last_token);
    if (!parser_token.is_inline_element) {
      printer.set_wrap_point();
    }
    printer.print_token(raw_token);
  }

  //indent attributes an auto, forced, aligned or forced-align line-wrap
  if (this._is_wrap_attributes_force_aligned || this._is_wrap_attributes_aligned_multiple || this._is_wrap_attributes_preserve_aligned) {
    parser_token.alignment_size = raw_token.text.length + 1;
  }

  if (!parser_token.tag_complete && !parser_token.is_unformatted) {
    printer.alignment_size = parser_token.alignment_size;
  }

  return parser_token;
};

var TagOpenParserToken = function(parent, raw_token) {
  this.parent = parent || null;
  this.text = '';
  this.type = 'TK_TAG_OPEN';
  this.tag_name = '';
  this.is_inline_element = false;
  this.is_unformatted = false;
  this.is_content_unformatted = false;
  this.is_empty_element = false;
  this.is_start_tag = false;
  this.is_end_tag = false;
  this.indent_content = false;
  this.multiline_content = false;
  this.custom_beautifier_name = null;
  this.start_tag_token = null;
  this.attr_count = 0;
  this.has_wrapped_attrs = false;
  this.alignment_size = 0;
  this.tag_complete = false;
  this.tag_start_char = '';
  this.tag_check = '';

  if (!raw_token) {
    this.tag_complete = true;
  } else {
    var tag_check_match;

    this.tag_start_char = raw_token.text[0];
    this.text = raw_token.text;

    if (this.tag_start_char === '<') {
      tag_check_match = raw_token.text.match(/^<([^\s>]*)/);
      this.tag_check = tag_check_match ? tag_check_match[1] : '';
    } else {
      tag_check_match = raw_token.text.match(/^{{[#\^]?([^\s}]+)/);
      this.tag_check = tag_check_match ? tag_check_match[1] : '';
    }
    this.tag_check = this.tag_check.toLowerCase();

    if (raw_token.type === TOKEN.COMMENT) {
      this.tag_complete = true;
    }

    this.is_start_tag = this.tag_check.charAt(0) !== '/';
    this.tag_name = !this.is_start_tag ? this.tag_check.substr(1) : this.tag_check;
    this.is_end_tag = !this.is_start_tag ||
      (raw_token.closed && raw_token.closed.text === '/>');

    // handlebars tags that don't start with # or ^ are single_tags, and so also start and end.
    this.is_end_tag = this.is_end_tag ||
      (this.tag_start_char === '{' && (this.text.length < 3 || (/[^#\^]/.test(this.text.charAt(2)))));
  }
};

Beautifier.prototype._get_tag_open_token = function(raw_token) { //function to get a full tag and parse its type
  var parser_token = new TagOpenParserToken(this._tag_stack.get_parser_token(), raw_token);

  parser_token.alignment_size = this._options.wrap_attributes_indent_size;

  parser_token.is_end_tag = parser_token.is_end_tag ||
    in_array(parser_token.tag_check, this._options.void_elements);

  parser_token.is_empty_element = parser_token.tag_complete ||
    (parser_token.is_start_tag && parser_token.is_end_tag);

  parser_token.is_unformatted = !parser_token.tag_complete && in_array(parser_token.tag_check, this._options.unformatted);
  parser_token.is_content_unformatted = !parser_token.is_empty_element && in_array(parser_token.tag_check, this._options.content_unformatted);
  parser_token.is_inline_element = in_array(parser_token.tag_name, this._options.inline) || parser_token.tag_start_char === '{';

  return parser_token;
};

Beautifier.prototype._set_tag_position = function(printer, raw_token, parser_token, last_tag_token, last_token) {

  if (!parser_token.is_empty_element) {
    if (parser_token.is_end_tag) { //this tag is a double tag so check for tag-ending
      parser_token.start_tag_token = this._tag_stack.try_pop(parser_token.tag_name); //remove it and all ancestors
    } else { // it's a start-tag
      // check if this tag is starting an element that has optional end element
      // and do an ending needed
      if (this._do_optional_end_element(parser_token)) {
        if (!parser_token.is_inline_element) {
          if (parser_token.parent) {
            parser_token.parent.multiline_content = true;
          }
          printer.print_newline(false);
        }

      }

      this._tag_stack.record_tag(parser_token); //push it on the tag stack

      if ((parser_token.tag_name === 'script' || parser_token.tag_name === 'style') &&
        !(parser_token.is_unformatted || parser_token.is_content_unformatted)) {
        parser_token.custom_beautifier_name = get_custom_beautifier_name(parser_token.tag_check, raw_token);
      }
    }
  }

  if (in_array(parser_token.tag_check, this._options.extra_liners)) { //check if this double needs an extra line
    printer.print_newline(false);
    if (!printer._output.just_added_blankline()) {
      printer.print_newline(true);
    }
  }

  if (parser_token.is_empty_element) { //if this tag name is a single tag type (either in the list or has a closing /)

    // if you hit an else case, reset the indent level if you are inside an:
    // 'if', 'unless', or 'each' block.
    if (parser_token.tag_start_char === '{' && parser_token.tag_check === 'else') {
      this._tag_stack.indent_to_tag(['if', 'unless', 'each']);
      parser_token.indent_content = true;
      // Don't add a newline if opening {{#if}} tag is on the current line
      var foundIfOnCurrentLine = printer.current_line_has_match(/{{#if/);
      if (!foundIfOnCurrentLine) {
        printer.print_newline(false);
      }
    }

    // Don't add a newline before elements that should remain where they are.
    if (parser_token.tag_name === '!--' && last_token.type === TOKEN.TAG_CLOSE &&
      last_tag_token.is_end_tag && parser_token.text.indexOf('\n') === -1) {
      //Do nothing. Leave comments on same line.
    } else if (!parser_token.is_inline_element && !parser_token.is_unformatted) {
      printer.print_newline(false);
    }
  } else if (parser_token.is_unformatted || parser_token.is_content_unformatted) {
    if (!parser_token.is_inline_element && !parser_token.is_unformatted) {
      printer.print_newline(false);
    }
  } else if (parser_token.is_end_tag) { //this tag is a double tag so check for tag-ending
    if ((parser_token.start_tag_token && parser_token.start_tag_token.multiline_content) ||
      !(parser_token.is_inline_element ||
        (last_tag_token.is_inline_element) ||
        (last_token.type === TOKEN.TAG_CLOSE &&
          parser_token.start_tag_token === last_tag_token) ||
        (last_token.type === 'TK_CONTENT')
      )) {
      printer.print_newline(false);
    }
  } else { // it's a start-tag
    parser_token.indent_content = !parser_token.custom_beautifier_name;

    if (parser_token.tag_start_char === '<') {
      if (parser_token.tag_name === 'html') {
        parser_token.indent_content = this._options.indent_inner_html;
      } else if (parser_token.tag_name === 'head') {
        parser_token.indent_content = this._options.indent_head_inner_html;
      } else if (parser_token.tag_name === 'body') {
        parser_token.indent_content = this._options.indent_body_inner_html;
      }
    }

    if (!parser_token.is_inline_element && last_token.type !== 'TK_CONTENT') {
      if (parser_token.parent) {
        parser_token.parent.multiline_content = true;
      }
      printer.print_newline(false);
    }
  }
};

//To be used for <p> tag special case:
//var p_closers = ['address', 'article', 'aside', 'blockquote', 'details', 'div', 'dl', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'header', 'hr', 'main', 'nav', 'ol', 'p', 'pre', 'section', 'table', 'ul'];

Beautifier.prototype._do_optional_end_element = function(parser_token) {
  var result = null;
  // NOTE: cases of "if there is no more content in the parent element"
  // are handled automatically by the beautifier.
  // It assumes parent or ancestor close tag closes all children.
  // https://www.w3.org/TR/html5/syntax.html#optional-tags
  if (parser_token.is_empty_element || !parser_token.is_start_tag || !parser_token.parent) {
    return;

  } else if (parser_token.tag_name === 'body') {
    // A head element’s end tag may be omitted if the head element is not immediately followed by a space character or a comment.
    result = result || this._tag_stack.try_pop('head');

    //} else if (parser_token.tag_name === 'body') {
    // DONE: A body element’s end tag may be omitted if the body element is not immediately followed by a comment.

  } else if (parser_token.tag_name === 'li') {
    // An li element’s end tag may be omitted if the li element is immediately followed by another li element or if there is no more content in the parent element.
    result = result || this._tag_stack.try_pop('li', ['ol', 'ul']);

  } else if (parser_token.tag_name === 'dd' || parser_token.tag_name === 'dt') {
    // A dd element’s end tag may be omitted if the dd element is immediately followed by another dd element or a dt element, or if there is no more content in the parent element.
    // A dt element’s end tag may be omitted if the dt element is immediately followed by another dt element or a dd element.
    result = result || this._tag_stack.try_pop('dt', ['dl']);
    result = result || this._tag_stack.try_pop('dd', ['dl']);

    //} else if (p_closers.indexOf(parser_token.tag_name) !== -1) {
    //TODO: THIS IS A BUG FARM. We are not putting this into 1.8.0 as it is likely to blow up.
    //A p element’s end tag may be omitted if the p element is immediately followed by an address, article, aside, blockquote, details, div, dl, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, hr, main, nav, ol, p, pre, section, table, or ul element, or if there is no more content in the parent element and the parent element is an HTML element that is not an a, audio, del, ins, map, noscript, or video element, or an autonomous custom element.
    //result = result || this._tag_stack.try_pop('p', ['body']);

  } else if (parser_token.tag_name === 'rp' || parser_token.tag_name === 'rt') {
    // An rt element’s end tag may be omitted if the rt element is immediately followed by an rt or rp element, or if there is no more content in the parent element.
    // An rp element’s end tag may be omitted if the rp element is immediately followed by an rt or rp element, or if there is no more content in the parent element.
    result = result || this._tag_stack.try_pop('rt', ['ruby', 'rtc']);
    result = result || this._tag_stack.try_pop('rp', ['ruby', 'rtc']);

  } else if (parser_token.tag_name === 'optgroup') {
    // An optgroup element’s end tag may be omitted if the optgroup element is immediately followed by another optgroup element, or if there is no more content in the parent element.
    // An option element’s end tag may be omitted if the option element is immediately followed by another option element, or if it is immediately followed by an optgroup element, or if there is no more content in the parent element.
    result = result || this._tag_stack.try_pop('optgroup', ['select']);
    //result = result || this._tag_stack.try_pop('option', ['select']);

  } else if (parser_token.tag_name === 'option') {
    // An option element’s end tag may be omitted if the option element is immediately followed by another option element, or if it is immediately followed by an optgroup element, or if there is no more content in the parent element.
    result = result || this._tag_stack.try_pop('option', ['select', 'datalist', 'optgroup']);

  } else if (parser_token.tag_name === 'colgroup') {
    // DONE: A colgroup element’s end tag may be omitted if the colgroup element is not immediately followed by a space character or a comment.
    // A caption element's end tag may be ommitted if a colgroup, thead, tfoot, tbody, or tr element is started.
    result = result || this._tag_stack.try_pop('caption', ['table']);

  } else if (parser_token.tag_name === 'thead') {
    // A colgroup element's end tag may be ommitted if a thead, tfoot, tbody, or tr element is started.
    // A caption element's end tag may be ommitted if a colgroup, thead, tfoot, tbody, or tr element is started.
    result = result || this._tag_stack.try_pop('caption', ['table']);
    result = result || this._tag_stack.try_pop('colgroup', ['table']);

    //} else if (parser_token.tag_name === 'caption') {
    // DONE: A caption element’s end tag may be omitted if the caption element is not immediately followed by a space character or a comment.

  } else if (parser_token.tag_name === 'tbody' || parser_token.tag_name === 'tfoot') {
    // A thead element’s end tag may be omitted if the thead element is immediately followed by a tbody or tfoot element.
    // A tbody element’s end tag may be omitted if the tbody element is immediately followed by a tbody or tfoot element, or if there is no more content in the parent element.
    // A colgroup element's end tag may be ommitted if a thead, tfoot, tbody, or tr element is started.
    // A caption element's end tag may be ommitted if a colgroup, thead, tfoot, tbody, or tr element is started.
    result = result || this._tag_stack.try_pop('caption', ['table']);
    result = result || this._tag_stack.try_pop('colgroup', ['table']);
    result = result || this._tag_stack.try_pop('thead', ['table']);
    result = result || this._tag_stack.try_pop('tbody', ['table']);

    //} else if (parser_token.tag_name === 'tfoot') {
    // DONE: A tfoot element’s end tag may be omitted if there is no more content in the parent element.

  } else if (parser_token.tag_name === 'tr') {
    // A tr element’s end tag may be omitted if the tr element is immediately followed by another tr element, or if there is no more content in the parent element.
    // A colgroup element's end tag may be ommitted if a thead, tfoot, tbody, or tr element is started.
    // A caption element's end tag may be ommitted if a colgroup, thead, tfoot, tbody, or tr element is started.
    result = result || this._tag_stack.try_pop('caption', ['table']);
    result = result || this._tag_stack.try_pop('colgroup', ['table']);
    result = result || this._tag_stack.try_pop('tr', ['table', 'thead', 'tbody', 'tfoot']);

  } else if (parser_token.tag_name === 'th' || parser_token.tag_name === 'td') {
    // A td element’s end tag may be omitted if the td element is immediately followed by a td or th element, or if there is no more content in the parent element.
    // A th element’s end tag may be omitted if the th element is immediately followed by a td or th element, or if there is no more content in the parent element.
    result = result || this._tag_stack.try_pop('td', ['table', 'thead', 'tbody', 'tfoot', 'tr']);
    result = result || this._tag_stack.try_pop('th', ['table', 'thead', 'tbody', 'tfoot', 'tr']);
  }

  // Start element omission not handled currently
  // A head element’s start tag may be omitted if the element is empty, or if the first thing inside the head element is an element.
  // A tbody element’s start tag may be omitted if the first thing inside the tbody element is a tr element, and if the element is not immediately preceded by a tbody, thead, or tfoot element whose end tag has been omitted. (It can’t be omitted if the element is empty.)
  // A colgroup element’s start tag may be omitted if the first thing inside the colgroup element is a col element, and if the element is not immediately preceded by another colgroup element whose end tag has been omitted. (It can’t be omitted if the element is empty.)

  // Fix up the parent of the parser token
  parser_token.parent = this._tag_stack.get_parser_token();

  return result;
};

module.exports.Beautifier = Beautifier;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*jshint node:true */
/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/



var BaseOptions = __webpack_require__(6).Options;

function Options(options) {
  BaseOptions.call(this, options, 'html');
  if (this.templating.length === 1 && this.templating[0] === 'auto') {
    this.templating = ['django', 'erb', 'handlebars', 'php'];
  }

  this.indent_inner_html = this._get_boolean('indent_inner_html');
  this.indent_body_inner_html = this._get_boolean('indent_body_inner_html', true);
  this.indent_head_inner_html = this._get_boolean('indent_head_inner_html', true);

  this.indent_handlebars = this._get_boolean('indent_handlebars', true);
  this.wrap_attributes = this._get_selection('wrap_attributes',
    ['auto', 'force', 'force-aligned', 'force-expand-multiline', 'aligned-multiple', 'preserve', 'preserve-aligned']);
  this.wrap_attributes_indent_size = this._get_number('wrap_attributes_indent_size', this.indent_size);
  this.extra_liners = this._get_array('extra_liners', ['head', 'body', '/html']);

  // Block vs inline elements
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements
  // https://www.w3.org/TR/html5/dom.html#phrasing-content
  this.inline = this._get_array('inline', [
    'a', 'abbr', 'area', 'audio', 'b', 'bdi', 'bdo', 'br', 'button', 'canvas', 'cite',
    'code', 'data', 'datalist', 'del', 'dfn', 'em', 'embed', 'i', 'iframe', 'img',
    'input', 'ins', 'kbd', 'keygen', 'label', 'map', 'mark', 'math', 'meter', 'noscript',
    'object', 'output', 'progress', 'q', 'ruby', 's', 'samp', /* 'script', */ 'select', 'small',
    'span', 'strong', 'sub', 'sup', 'svg', 'template', 'textarea', 'time', 'u', 'var',
    'video', 'wbr', 'text',
    // obsolete inline tags
    'acronym', 'big', 'strike', 'tt'
  ]);
  this.void_elements = this._get_array('void_elements', [
    // HTLM void elements - aka self-closing tags - aka singletons
    // https://www.w3.org/html/wg/drafts/html/master/syntax.html#void-elements
    'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'keygen',
    'link', 'menuitem', 'meta', 'param', 'source', 'track', 'wbr',
    // NOTE: Optional tags are too complex for a simple list
    // they are hard coded in _do_optional_end_element

    // Doctype and xml elements
    '!doctype', '?xml',

    // obsolete tags
    // basefont: https://www.computerhope.com/jargon/h/html-basefont-tag.htm
    // isndex: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/isindex
    'basefont', 'isindex'
  ]);
  this.unformatted = this._get_array('unformatted', []);
  this.content_unformatted = this._get_array('content_unformatted', [
    'pre', 'textarea'
  ]);
  this.unformatted_content_delimiter = this._get_characters('unformatted_content_delimiter');
  this.indent_scripts = this._get_selection('indent_scripts', ['normal', 'keep', 'separate']);

}
Options.prototype = new BaseOptions();



module.exports.Options = Options;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*jshint node:true */
/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/



var BaseTokenizer = __webpack_require__(9).Tokenizer;
var BASETOKEN = __webpack_require__(9).TOKEN;
var Directives = __webpack_require__(13).Directives;
var TemplatablePattern = __webpack_require__(14).TemplatablePattern;
var Pattern = __webpack_require__(12).Pattern;

var TOKEN = {
  TAG_OPEN: 'TK_TAG_OPEN',
  TAG_CLOSE: 'TK_TAG_CLOSE',
  ATTRIBUTE: 'TK_ATTRIBUTE',
  EQUALS: 'TK_EQUALS',
  VALUE: 'TK_VALUE',
  COMMENT: 'TK_COMMENT',
  TEXT: 'TK_TEXT',
  UNKNOWN: 'TK_UNKNOWN',
  START: BASETOKEN.START,
  RAW: BASETOKEN.RAW,
  EOF: BASETOKEN.EOF
};

var directives_core = new Directives(/<\!--/, /-->/);

var Tokenizer = function(input_string, options) {
  BaseTokenizer.call(this, input_string, options);
  this._current_tag_name = '';

  // Words end at whitespace or when a tag starts
  // if we are indenting handlebars, they are considered tags
  var templatable_reader = new TemplatablePattern(this._input).read_options(this._options);
  var pattern_reader = new Pattern(this._input);

  this.__patterns = {
    word: templatable_reader.until(/[\n\r\t <]/),
    single_quote: templatable_reader.until_after(/'/),
    double_quote: templatable_reader.until_after(/"/),
    attribute: templatable_reader.until(/[\n\r\t =\/>]/),
    element_name: templatable_reader.until(/[\n\r\t >\/]/),

    handlebars_comment: pattern_reader.starting_with(/{{!--/).until_after(/--}}/),
    handlebars: pattern_reader.starting_with(/{{/).until_after(/}}/),
    handlebars_open: pattern_reader.until(/[\n\r\t }]/),
    handlebars_raw_close: pattern_reader.until(/}}/),
    comment: pattern_reader.starting_with(/<!--/).until_after(/-->/),
    cdata: pattern_reader.starting_with(/<!\[CDATA\[/).until_after(/]]>/),
    // https://en.wikipedia.org/wiki/Conditional_comment
    conditional_comment: pattern_reader.starting_with(/<!\[/).until_after(/]>/),
    processing: pattern_reader.starting_with(/<\?/).until_after(/\?>/)
  };

  if (this._options.indent_handlebars) {
    this.__patterns.word = this.__patterns.word.exclude('handlebars');
  }

  this._unformatted_content_delimiter = null;

  if (this._options.unformatted_content_delimiter) {
    var literal_regexp = this._input.get_literal_regexp(this._options.unformatted_content_delimiter);
    this.__patterns.unformatted_content_delimiter =
      pattern_reader.matching(literal_regexp)
      .until_after(literal_regexp);
  }
};
Tokenizer.prototype = new BaseTokenizer();

Tokenizer.prototype._is_comment = function(current_token) { // jshint unused:false
  return false; //current_token.type === TOKEN.COMMENT || current_token.type === TOKEN.UNKNOWN;
};

Tokenizer.prototype._is_opening = function(current_token) {
  return current_token.type === TOKEN.TAG_OPEN;
};

Tokenizer.prototype._is_closing = function(current_token, open_token) {
  return current_token.type === TOKEN.TAG_CLOSE &&
    (open_token && (
      ((current_token.text === '>' || current_token.text === '/>') && open_token.text[0] === '<') ||
      (current_token.text === '}}' && open_token.text[0] === '{' && open_token.text[1] === '{')));
};

Tokenizer.prototype._reset = function() {
  this._current_tag_name = '';
};

Tokenizer.prototype._get_next_token = function(previous_token, open_token) { // jshint unused:false
  var token = null;
  this._readWhitespace();
  var c = this._input.peek();

  if (c === null) {
    return this._create_token(TOKEN.EOF, '');
  }

  token = token || this._read_open_handlebars(c, open_token);
  token = token || this._read_attribute(c, previous_token, open_token);
  token = token || this._read_raw_content(c, previous_token, open_token);
  token = token || this._read_close(c, open_token);
  token = token || this._read_content_word(c);
  token = token || this._read_comment_or_cdata(c);
  token = token || this._read_processing(c);
  token = token || this._read_open(c, open_token);
  token = token || this._create_token(TOKEN.UNKNOWN, this._input.next());

  return token;
};

Tokenizer.prototype._read_comment_or_cdata = function(c) { // jshint unused:false
  var token = null;
  var resulting_string = null;
  var directives = null;

  if (c === '<') {
    var peek1 = this._input.peek(1);
    // We treat all comments as literals, even more than preformatted tags
    // we only look for the appropriate closing marker
    if (peek1 === '!') {
      resulting_string = this.__patterns.comment.read();

      // only process directive on html comments
      if (resulting_string) {
        directives = directives_core.get_directives(resulting_string);
        if (directives && directives.ignore === 'start') {
          resulting_string += directives_core.readIgnored(this._input);
        }
      } else {
        resulting_string = this.__patterns.cdata.read();
      }
    }

    if (resulting_string) {
      token = this._create_token(TOKEN.COMMENT, resulting_string);
      token.directives = directives;
    }
  }

  return token;
};

Tokenizer.prototype._read_processing = function(c) { // jshint unused:false
  var token = null;
  var resulting_string = null;
  var directives = null;

  if (c === '<') {
    var peek1 = this._input.peek(1);
    if (peek1 === '!' || peek1 === '?') {
      resulting_string = this.__patterns.conditional_comment.read();
      resulting_string = resulting_string || this.__patterns.processing.read();
    }

    if (resulting_string) {
      token = this._create_token(TOKEN.COMMENT, resulting_string);
      token.directives = directives;
    }
  }

  return token;
};

Tokenizer.prototype._read_open = function(c, open_token) {
  var resulting_string = null;
  var token = null;
  if (!open_token) {
    if (c === '<') {

      resulting_string = this._input.next();
      if (this._input.peek() === '/') {
        resulting_string += this._input.next();
      }
      resulting_string += this.__patterns.element_name.read();
      token = this._create_token(TOKEN.TAG_OPEN, resulting_string);
    }
  }
  return token;
};

Tokenizer.prototype._read_open_handlebars = function(c, open_token) {
  var resulting_string = null;
  var token = null;
  if (!open_token) {
    if (this._options.indent_handlebars && c === '{' && this._input.peek(1) === '{') {
      if (this._input.peek(2) === '!') {
        resulting_string = this.__patterns.handlebars_comment.read();
        resulting_string = resulting_string || this.__patterns.handlebars.read();
        token = this._create_token(TOKEN.COMMENT, resulting_string);
      } else {
        resulting_string = this.__patterns.handlebars_open.read();
        token = this._create_token(TOKEN.TAG_OPEN, resulting_string);
      }
    }
  }
  return token;
};


Tokenizer.prototype._read_close = function(c, open_token) {
  var resulting_string = null;
  var token = null;
  if (open_token) {
    if (open_token.text[0] === '<' && (c === '>' || (c === '/' && this._input.peek(1) === '>'))) {
      resulting_string = this._input.next();
      if (c === '/') { //  for close tag "/>"
        resulting_string += this._input.next();
      }
      token = this._create_token(TOKEN.TAG_CLOSE, resulting_string);
    } else if (open_token.text[0] === '{' && c === '}' && this._input.peek(1) === '}') {
      this._input.next();
      this._input.next();
      token = this._create_token(TOKEN.TAG_CLOSE, '}}');
    }
  }

  return token;
};

Tokenizer.prototype._read_attribute = function(c, previous_token, open_token) {
  var token = null;
  var resulting_string = '';
  if (open_token && open_token.text[0] === '<') {

    if (c === '=') {
      token = this._create_token(TOKEN.EQUALS, this._input.next());
    } else if (c === '"' || c === "'") {
      var content = this._input.next();
      if (c === '"') {
        content += this.__patterns.double_quote.read();
      } else {
        content += this.__patterns.single_quote.read();
      }
      token = this._create_token(TOKEN.VALUE, content);
    } else {
      resulting_string = this.__patterns.attribute.read();

      if (resulting_string) {
        if (previous_token.type === TOKEN.EQUALS) {
          token = this._create_token(TOKEN.VALUE, resulting_string);
        } else {
          token = this._create_token(TOKEN.ATTRIBUTE, resulting_string);
        }
      }
    }
  }
  return token;
};

Tokenizer.prototype._is_content_unformatted = function(tag_name) {
  // void_elements have no content and so cannot have unformatted content
  // script and style tags should always be read as unformatted content
  // finally content_unformatted and unformatted element contents are unformatted
  return this._options.void_elements.indexOf(tag_name) === -1 &&
    (this._options.content_unformatted.indexOf(tag_name) !== -1 ||
      this._options.unformatted.indexOf(tag_name) !== -1);
};


Tokenizer.prototype._read_raw_content = function(c, previous_token, open_token) { // jshint unused:false
  var resulting_string = '';
  if (open_token && open_token.text[0] === '{') {
    resulting_string = this.__patterns.handlebars_raw_close.read();
  } else if (previous_token.type === TOKEN.TAG_CLOSE && (previous_token.opened.text[0] === '<')) {
    var tag_name = previous_token.opened.text.substr(1).toLowerCase();
    if (tag_name === 'script' || tag_name === 'style') {
      // Script and style tags are allowed to have comments wrapping their content
      // or just have regular content.
      var token = this._read_comment_or_cdata(c);
      if (token) {
        token.type = TOKEN.TEXT;
        return token;
      }
      resulting_string = this._input.readUntil(new RegExp('</' + tag_name + '[\\n\\r\\t ]*?>', 'ig'));
    } else if (this._is_content_unformatted(tag_name)) {
      resulting_string = this._input.readUntil(new RegExp('</' + tag_name + '[\\n\\r\\t ]*?>', 'ig'));
    }
  }

  if (resulting_string) {
    return this._create_token(TOKEN.TEXT, resulting_string);
  }

  return null;
};

Tokenizer.prototype._read_content_word = function(c) {
  var resulting_string = '';
  if (this._options.unformatted_content_delimiter) {
    if (c === this._options.unformatted_content_delimiter[0]) {
      resulting_string = this.__patterns.unformatted_content_delimiter.read();
    }
  }

  if (!resulting_string) {
    resulting_string = this.__patterns.word.read();
  }
  if (resulting_string) {
    return this._create_token(TOKEN.TEXT, resulting_string);
  }
};

module.exports.Tokenizer = Tokenizer;
module.exports.TOKEN = TOKEN;


/***/ })
/******/ ]);
var style_html = legacy_beautify_html;
/* Footer */
if (true) {
    // Add support for AMD ( https://github.com/amdjs/amdjs-api/wiki/AMD#defineamd-property- )
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, __webpack_require__(248), __webpack_require__(249)], __WEBPACK_AMD_DEFINE_RESULT__ = (function(requireamd) {
        var js_beautify = __webpack_require__(248);
        var css_beautify = __webpack_require__(249);

        return {
            html_beautify: function(html_source, options) {
                return style_html(html_source, options, js_beautify.js_beautify, css_beautify.css_beautify);
            }
        };
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else if (typeof exports !== "undefined") {
    // Add support for CommonJS. Just put this file somewhere on your require.paths
    // and you will be able to `var html_beautify = require("beautify").html_beautify`.
    var js_beautify = require('./beautify.js');
    var css_beautify = require('./beautify-css.js');

    exports.html_beautify = function(html_source, options) {
        return style_html(html_source, options, js_beautify.js_beautify, css_beautify.css_beautify);
    };
} else if (typeof window !== "undefined") {
    // If we're running a web page and don't have either of the above, add our one global
    window.html_beautify = function(html_source, options) {
        return style_html(html_source, options, window.js_beautify, window.css_beautify);
    };
} else if (typeof global !== "undefined") {
    // If we don't even have window, try global.
    global.html_beautify = function(html_source, options) {
        return style_html(html_source, options, global.js_beautify, global.css_beautify);
    };
}

}());


/***/ }),

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", {
    staticStyle: { width: "100%", height: "100%" },
    attrs: { id: _vm.editorId }
  })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0a5cba53", module.exports)
  }
}

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    classes: {
      type: String, default: 'btn btn-block btn-primary'
    },
    isLoading: Boolean,
    onClick: Function,
    onLoadingText: String,
    text: String
  }
});

/***/ }),

/***/ 260:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "button",
    {
      class: _vm.classes,
      attrs: { disabled: _vm.isLoading },
      on: { click: _vm.onClick }
    },
    [
      _vm.isLoading
        ? _c("span", {
            staticClass: "spinner-border spinner-border-sm",
            attrs: { role: "status", "aria-hidden": "true" }
          })
        : _vm._e(),
      _vm._v(" "),
      _c("span", { staticClass: "sr-only" }, [
        _vm._v(_vm._s(_vm.onLoadingText))
      ]),
      _vm._v(" "),
      _vm.isLoading
        ? _c("span", [_vm._v(_vm._s(_vm.onLoadingText))])
        : _c("span", [_vm._v(_vm._s(_vm.text))])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7c805598", module.exports)
  }
}

/***/ }),

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;// Copyright (c) 2013 Pieroxy <pieroxy@pieroxy.net>
// This work is free. You can redistribute it and/or modify it
// under the terms of the WTFPL, Version 2
// For more information see LICENSE.txt or http://www.wtfpl.net/
//
// For more information, the home page:
// http://pieroxy.net/blog/pages/lz-string/testing.html
//
// LZ-based compression algorithm, version 1.4.4
var LZString = (function() {

// private property
var f = String.fromCharCode;
var keyStrBase64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
var keyStrUriSafe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$";
var baseReverseDic = {};

function getBaseValue(alphabet, character) {
  if (!baseReverseDic[alphabet]) {
    baseReverseDic[alphabet] = {};
    for (var i=0 ; i<alphabet.length ; i++) {
      baseReverseDic[alphabet][alphabet.charAt(i)] = i;
    }
  }
  return baseReverseDic[alphabet][character];
}

var LZString = {
  compressToBase64 : function (input) {
    if (input == null) return "";
    var res = LZString._compress(input, 6, function(a){return keyStrBase64.charAt(a);});
    switch (res.length % 4) { // To produce valid Base64
    default: // When could this happen ?
    case 0 : return res;
    case 1 : return res+"===";
    case 2 : return res+"==";
    case 3 : return res+"=";
    }
  },

  decompressFromBase64 : function (input) {
    if (input == null) return "";
    if (input == "") return null;
    return LZString._decompress(input.length, 32, function(index) { return getBaseValue(keyStrBase64, input.charAt(index)); });
  },

  compressToUTF16 : function (input) {
    if (input == null) return "";
    return LZString._compress(input, 15, function(a){return f(a+32);}) + " ";
  },

  decompressFromUTF16: function (compressed) {
    if (compressed == null) return "";
    if (compressed == "") return null;
    return LZString._decompress(compressed.length, 16384, function(index) { return compressed.charCodeAt(index) - 32; });
  },

  //compress into uint8array (UCS-2 big endian format)
  compressToUint8Array: function (uncompressed) {
    var compressed = LZString.compress(uncompressed);
    var buf=new Uint8Array(compressed.length*2); // 2 bytes per character

    for (var i=0, TotalLen=compressed.length; i<TotalLen; i++) {
      var current_value = compressed.charCodeAt(i);
      buf[i*2] = current_value >>> 8;
      buf[i*2+1] = current_value % 256;
    }
    return buf;
  },

  //decompress from uint8array (UCS-2 big endian format)
  decompressFromUint8Array:function (compressed) {
    if (compressed===null || compressed===undefined){
        return LZString.decompress(compressed);
    } else {
        var buf=new Array(compressed.length/2); // 2 bytes per character
        for (var i=0, TotalLen=buf.length; i<TotalLen; i++) {
          buf[i]=compressed[i*2]*256+compressed[i*2+1];
        }

        var result = [];
        buf.forEach(function (c) {
          result.push(f(c));
        });
        return LZString.decompress(result.join(''));

    }

  },


  //compress into a string that is already URI encoded
  compressToEncodedURIComponent: function (input) {
    if (input == null) return "";
    return LZString._compress(input, 6, function(a){return keyStrUriSafe.charAt(a);});
  },

  //decompress from an output of compressToEncodedURIComponent
  decompressFromEncodedURIComponent:function (input) {
    if (input == null) return "";
    if (input == "") return null;
    input = input.replace(/ /g, "+");
    return LZString._decompress(input.length, 32, function(index) { return getBaseValue(keyStrUriSafe, input.charAt(index)); });
  },

  compress: function (uncompressed) {
    return LZString._compress(uncompressed, 16, function(a){return f(a);});
  },
  _compress: function (uncompressed, bitsPerChar, getCharFromInt) {
    if (uncompressed == null) return "";
    var i, value,
        context_dictionary= {},
        context_dictionaryToCreate= {},
        context_c="",
        context_wc="",
        context_w="",
        context_enlargeIn= 2, // Compensate for the first entry which should not count
        context_dictSize= 3,
        context_numBits= 2,
        context_data=[],
        context_data_val=0,
        context_data_position=0,
        ii;

    for (ii = 0; ii < uncompressed.length; ii += 1) {
      context_c = uncompressed.charAt(ii);
      if (!Object.prototype.hasOwnProperty.call(context_dictionary,context_c)) {
        context_dictionary[context_c] = context_dictSize++;
        context_dictionaryToCreate[context_c] = true;
      }

      context_wc = context_w + context_c;
      if (Object.prototype.hasOwnProperty.call(context_dictionary,context_wc)) {
        context_w = context_wc;
      } else {
        if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate,context_w)) {
          if (context_w.charCodeAt(0)<256) {
            for (i=0 ; i<context_numBits ; i++) {
              context_data_val = (context_data_val << 1);
              if (context_data_position == bitsPerChar-1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }
            }
            value = context_w.charCodeAt(0);
            for (i=0 ; i<8 ; i++) {
              context_data_val = (context_data_val << 1) | (value&1);
              if (context_data_position == bitsPerChar-1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }
              value = value >> 1;
            }
          } else {
            value = 1;
            for (i=0 ; i<context_numBits ; i++) {
              context_data_val = (context_data_val << 1) | value;
              if (context_data_position ==bitsPerChar-1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }
              value = 0;
            }
            value = context_w.charCodeAt(0);
            for (i=0 ; i<16 ; i++) {
              context_data_val = (context_data_val << 1) | (value&1);
              if (context_data_position == bitsPerChar-1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }
              value = value >> 1;
            }
          }
          context_enlargeIn--;
          if (context_enlargeIn == 0) {
            context_enlargeIn = Math.pow(2, context_numBits);
            context_numBits++;
          }
          delete context_dictionaryToCreate[context_w];
        } else {
          value = context_dictionary[context_w];
          for (i=0 ; i<context_numBits ; i++) {
            context_data_val = (context_data_val << 1) | (value&1);
            if (context_data_position == bitsPerChar-1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }
            value = value >> 1;
          }


        }
        context_enlargeIn--;
        if (context_enlargeIn == 0) {
          context_enlargeIn = Math.pow(2, context_numBits);
          context_numBits++;
        }
        // Add wc to the dictionary.
        context_dictionary[context_wc] = context_dictSize++;
        context_w = String(context_c);
      }
    }

    // Output the code for w.
    if (context_w !== "") {
      if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate,context_w)) {
        if (context_w.charCodeAt(0)<256) {
          for (i=0 ; i<context_numBits ; i++) {
            context_data_val = (context_data_val << 1);
            if (context_data_position == bitsPerChar-1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }
          }
          value = context_w.charCodeAt(0);
          for (i=0 ; i<8 ; i++) {
            context_data_val = (context_data_val << 1) | (value&1);
            if (context_data_position == bitsPerChar-1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }
            value = value >> 1;
          }
        } else {
          value = 1;
          for (i=0 ; i<context_numBits ; i++) {
            context_data_val = (context_data_val << 1) | value;
            if (context_data_position == bitsPerChar-1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }
            value = 0;
          }
          value = context_w.charCodeAt(0);
          for (i=0 ; i<16 ; i++) {
            context_data_val = (context_data_val << 1) | (value&1);
            if (context_data_position == bitsPerChar-1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }
            value = value >> 1;
          }
        }
        context_enlargeIn--;
        if (context_enlargeIn == 0) {
          context_enlargeIn = Math.pow(2, context_numBits);
          context_numBits++;
        }
        delete context_dictionaryToCreate[context_w];
      } else {
        value = context_dictionary[context_w];
        for (i=0 ; i<context_numBits ; i++) {
          context_data_val = (context_data_val << 1) | (value&1);
          if (context_data_position == bitsPerChar-1) {
            context_data_position = 0;
            context_data.push(getCharFromInt(context_data_val));
            context_data_val = 0;
          } else {
            context_data_position++;
          }
          value = value >> 1;
        }


      }
      context_enlargeIn--;
      if (context_enlargeIn == 0) {
        context_enlargeIn = Math.pow(2, context_numBits);
        context_numBits++;
      }
    }

    // Mark the end of the stream
    value = 2;
    for (i=0 ; i<context_numBits ; i++) {
      context_data_val = (context_data_val << 1) | (value&1);
      if (context_data_position == bitsPerChar-1) {
        context_data_position = 0;
        context_data.push(getCharFromInt(context_data_val));
        context_data_val = 0;
      } else {
        context_data_position++;
      }
      value = value >> 1;
    }

    // Flush the last char
    while (true) {
      context_data_val = (context_data_val << 1);
      if (context_data_position == bitsPerChar-1) {
        context_data.push(getCharFromInt(context_data_val));
        break;
      }
      else context_data_position++;
    }
    return context_data.join('');
  },

  decompress: function (compressed) {
    if (compressed == null) return "";
    if (compressed == "") return null;
    return LZString._decompress(compressed.length, 32768, function(index) { return compressed.charCodeAt(index); });
  },

  _decompress: function (length, resetValue, getNextValue) {
    var dictionary = [],
        next,
        enlargeIn = 4,
        dictSize = 4,
        numBits = 3,
        entry = "",
        result = [],
        i,
        w,
        bits, resb, maxpower, power,
        c,
        data = {val:getNextValue(0), position:resetValue, index:1};

    for (i = 0; i < 3; i += 1) {
      dictionary[i] = i;
    }

    bits = 0;
    maxpower = Math.pow(2,2);
    power=1;
    while (power!=maxpower) {
      resb = data.val & data.position;
      data.position >>= 1;
      if (data.position == 0) {
        data.position = resetValue;
        data.val = getNextValue(data.index++);
      }
      bits |= (resb>0 ? 1 : 0) * power;
      power <<= 1;
    }

    switch (next = bits) {
      case 0:
          bits = 0;
          maxpower = Math.pow(2,8);
          power=1;
          while (power!=maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;
            if (data.position == 0) {
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }
            bits |= (resb>0 ? 1 : 0) * power;
            power <<= 1;
          }
        c = f(bits);
        break;
      case 1:
          bits = 0;
          maxpower = Math.pow(2,16);
          power=1;
          while (power!=maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;
            if (data.position == 0) {
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }
            bits |= (resb>0 ? 1 : 0) * power;
            power <<= 1;
          }
        c = f(bits);
        break;
      case 2:
        return "";
    }
    dictionary[3] = c;
    w = c;
    result.push(c);
    while (true) {
      if (data.index > length) {
        return "";
      }

      bits = 0;
      maxpower = Math.pow(2,numBits);
      power=1;
      while (power!=maxpower) {
        resb = data.val & data.position;
        data.position >>= 1;
        if (data.position == 0) {
          data.position = resetValue;
          data.val = getNextValue(data.index++);
        }
        bits |= (resb>0 ? 1 : 0) * power;
        power <<= 1;
      }

      switch (c = bits) {
        case 0:
          bits = 0;
          maxpower = Math.pow(2,8);
          power=1;
          while (power!=maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;
            if (data.position == 0) {
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }
            bits |= (resb>0 ? 1 : 0) * power;
            power <<= 1;
          }

          dictionary[dictSize++] = f(bits);
          c = dictSize-1;
          enlargeIn--;
          break;
        case 1:
          bits = 0;
          maxpower = Math.pow(2,16);
          power=1;
          while (power!=maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;
            if (data.position == 0) {
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }
            bits |= (resb>0 ? 1 : 0) * power;
            power <<= 1;
          }
          dictionary[dictSize++] = f(bits);
          c = dictSize-1;
          enlargeIn--;
          break;
        case 2:
          return result.join('');
      }

      if (enlargeIn == 0) {
        enlargeIn = Math.pow(2, numBits);
        numBits++;
      }

      if (dictionary[c]) {
        entry = dictionary[c];
      } else {
        if (c === dictSize) {
          entry = w + w.charAt(0);
        } else {
          return null;
        }
      }
      result.push(entry);

      // Add w+entry[0] to the dictionary.
      dictionary[dictSize++] = w + entry.charAt(0);
      enlargeIn--;

      w = entry;

      if (enlargeIn == 0) {
        enlargeIn = Math.pow(2, numBits);
        numBits++;
      }

    }
  }
};
  return LZString;
})();

if (true) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () { return LZString; }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else if( typeof module !== 'undefined' && module != null ) {
  module.exports = LZString
}


/***/ }),

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      !_vm.action.dirty
        ? _c("div", [
            _c(
              "h3",
              [
                _c("info-icon", { attrs: { text: _vm.i8n.action } }),
                _vm._v("Action: " + _vm._s(_vm.action.name))
              ],
              1
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.action.dirty
        ? _c(
            "div",
            { staticClass: "d-flex" },
            [
              _c("info-icon", { attrs: { text: _vm.i8n.action } }),
              _vm._v(" "),
              _vm.action.dirty
                ? _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.action.name,
                        expression: "action.name"
                      }
                    ],
                    staticClass: "d-inline-flex form-control w-25 ml-2",
                    attrs: { type: "text", placeholder: "Enter Action Name" },
                    domProps: { value: _vm.action.name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.action, "name", $event.target.value)
                      }
                    }
                  })
                : _vm._e()
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mb-4 mt-2", staticStyle: { height: "300px" } },
        [
          _c("editor", {
            attrs: {
              "editor-id": "action-" + _vm.action.id,
              content: _vm.decompress(_vm.action.function),
              type: "action",
              "model-id": _vm.action.id
            },
            on: { "change-content": _vm.handleChange }
          })
        ],
        1
      ),
      _vm._v(" "),
      !_vm.action.dirty
        ? _c("update-button", {
            attrs: {
              "on-loading-text": "Saving...",
              "is-loading": _vm.isLoading,
              "on-click": _vm.update,
              text: "Update Action"
            }
          })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-54faeac8", module.exports)
  }
}

/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(264)
/* template */
var __vue_template__ = __webpack_require__(267)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/extension/partials/Extension.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f703506e", Component.options)
  } else {
    hotAPI.reload("data-v-f703506e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Action__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Action___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Action__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Predicate__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Predicate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Predicate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__partials_Button__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__partials_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__partials_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__audit_partials_Button__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__audit_partials_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__audit_partials_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_sweetalert__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_sweetalert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_sweetalert__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mixins__ = __webpack_require__(246);


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      extension: this.initialExtension,
      isExpanded: false,
      isDeleting: false,
      isDisabling: false,
      isEnabling: false,
      isLoading: false,
      isSaving: false
    };
  },

  components: {
    Button: __WEBPACK_IMPORTED_MODULE_5__audit_partials_Button___default.a,
    Action: __WEBPACK_IMPORTED_MODULE_1__Action___default.a,
    Predicate: __WEBPACK_IMPORTED_MODULE_2__Predicate___default.a,
    ReactiveButton: __WEBPACK_IMPORTED_MODULE_3__partials_Button___default.a
  },
  computed: {
    isEnabled: function isEnabled() {
      // If admin view then check extension enabled
      if (this.isAdmin) {
        return this.extension.enabled;
      } else {
        // Non-admin, check pivot site enabled_at
        if (this.extension.pivot && this.extension.pivot.enabled_at) {
          return this.getUTCEnabledAtDate <= new Date();
        } else {
          return false;
        }
      }
    },
    getUTCEnabledAtDate: function getUTCEnabledAtDate() {
      return new Date(this.extension.pivot.enabled_at + ' UTC');
    }
  },
  methods: {
    cancel: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.$emit('delete', this.extension.id);

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function cancel() {
        return _ref.apply(this, arguments);
      }

      return cancel;
    }(),
    create: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var _this = this;

        var result;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.isSaving = true;
                _context2.next = 3;
                return __WEBPACK_IMPORTED_MODULE_4_axios___default.a.post(this.url(), {
                  extension: this.extension,
                  site_id: this.site ? this.site.id : null,
                  type: 'extension'
                }).then(function (result) {
                  if (result.status === 200 && result.data.status === 200 && result.data.data && result.data.data.data.id) {
                    _this.$emit('update', {
                      id: _this.extension.id,
                      extension: result.data.data.data
                    });
                  }
                }).catch(function (error) {
                  return console.log(error);
                });

              case 3:
                result = _context2.sent;

                this.isSaving = false;

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function create() {
        return _ref2.apply(this, arguments);
      }

      return create;
    }(),
    deleteExtension: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var _this2 = this;

        var choice, result;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.isDeleting = true;
                _context3.next = 3;
                return __WEBPACK_IMPORTED_MODULE_6_sweetalert___default()({
                  title: 'Confirm Delete',
                  text: 'Are you sure you wish to delete the "' + this.extension.name + '" extension?',
                  icon: 'error',
                  buttons: ['No', 'Yes'],
                  dangerMode: true
                });

              case 3:
                choice = _context3.sent;

                if (!choice) {
                  _context3.next = 8;
                  break;
                }

                _context3.next = 7;
                return __WEBPACK_IMPORTED_MODULE_4_axios___default.a.post(this.url(), {
                  extension: this.extension,
                  site_id: this.site ? this.site.id : null,
                  type: 'extension',
                  action: 'delete'
                }).then(function (result) {
                  if (result.status === 200 && result.data.status === 200) {
                    _this2.$emit('delete', _this2.extension.id);
                  }
                }).catch(function (error) {
                  return console.log(error);
                });

              case 7:
                result = _context3.sent;

              case 8:
                this.isDeleting = false;

              case 9:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function deleteExtension() {
        return _ref3.apply(this, arguments);
      }

      return deleteExtension;
    }(),
    enable: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee4() {
        var _this3 = this;

        var result;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (this.isEnabled) {
                  _context4.next = 6;
                  break;
                }

                this.isEnabling = true;
                _context4.next = 4;
                return __WEBPACK_IMPORTED_MODULE_4_axios___default.a.post(this.url(), {
                  extension: this.extension,
                  site_id: this.site ? this.site.id : null,
                  type: 'extension',
                  action: 'enable'
                }).then(function (result) {
                  if (result.status === 200 && result.data.status === 200 && result.data.data && result.data.data.data && result.data.data.data.extension && result.data.data.data.extension.id) {
                    if (_this3.extension.pivot) {
                      _this3.extension.pivot.enabled_at = result.data.data.data.extension.pivot.enabled_at;
                    } else {
                      _this3.extension.enabled = result.data.data.data.extension.enabled;
                    }
                    _this3.$emit('update', {
                      id: _this3.extension.id,
                      extension: _this3.extension
                    });
                  }
                }).catch(function (error) {
                  return console.log(error);
                });

              case 4:
                result = _context4.sent;

                this.isEnabling = false;

              case 6:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function enable() {
        return _ref4.apply(this, arguments);
      }

      return enable;
    }(),
    disable: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee5() {
        var _this4 = this;

        var result;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (!this.isEnabled) {
                  _context5.next = 6;
                  break;
                }

                this.isDisabling = true;
                _context5.next = 4;
                return __WEBPACK_IMPORTED_MODULE_4_axios___default.a.post(this.url(), {
                  extension: this.extension,
                  site_id: this.site ? this.site.id : null,
                  type: 'extension',
                  action: 'disable'
                }).then(function (result) {
                  if (result.status === 200 && result.data.status === 200 && result.data.data && result.data.data.data && result.data.data.data.extension && result.data.data.data.extension.id) {
                    if (_this4.extension.pivot) {
                      _this4.extension.pivot.enabled_at = result.data.data.data.extension.pivot.enabled_at;
                    } else {
                      _this4.extension.enabled = result.data.data.data.extension.enabled;
                    }
                    _this4.$emit('update', {
                      id: _this4.extension.id,
                      extension: _this4.extension
                    });
                  }
                }).catch(function (error) {
                  return console.log(error);
                });

              case 4:
                result = _context5.sent;

                this.isDisabling = false;

              case 6:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function disable() {
        return _ref5.apply(this, arguments);
      }

      return disable;
    }(),
    actionChangeContent: function actionChangeContent(content) {
      this.extension.actions[0].fn = content;
    },
    predicateChangeContent: function predicateChangeContent(content) {
      this.extension.predicates[0].fn = content;
    },
    toggleExpanded: function toggleExpanded() {
      this.isExpanded = !this.isExpanded;
    }
  },
  beforeMount: function beforeMount() {
    this.isExpanded = !!this.extension.dirty;
  },
  mounted: function mounted() {
    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    });
  },
  updated: function updated() {
    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    });
  },

  mixins: [__WEBPACK_IMPORTED_MODULE_7__mixins__["a" /* extensionMixin */]],
  props: {
    initialExtension: Object,
    i8n: Object,
    site: {
      type: Object,
      required: false
    }
  }
});

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__partials_Editor__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__partials_Editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__partials_Editor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Button__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mixins__ = __webpack_require__(246);


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Editor: __WEBPACK_IMPORTED_MODULE_1__partials_Editor___default.a,
    UpdateButton: __WEBPACK_IMPORTED_MODULE_2__Button___default.a
  },
  data: function data() {
    return {
      content: String,
      isLoading: false
    };
  },

  methods: {
    handleChange: function handleChange(value) {
      if (value && value !== this.content) {
        this.content = value;
        this.$emit('predicate-change-content', this.content);
      }
    },
    update: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var result;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.isLoading = true;
                _context.next = 3;
                return __WEBPACK_IMPORTED_MODULE_3_axios___default.a.post(this.url(), {
                  fn: this.content,
                  id: this.predicate.id,
                  site_id: this.site ? this.site.id : null,
                  type: 'predicate'
                }).catch(function (error) {
                  return console.log(error);
                });

              case 3:
                result = _context.sent;

                this.isLoading = false;

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function update() {
        return _ref.apply(this, arguments);
      }

      return update;
    }()
  },
  mixins: [__WEBPACK_IMPORTED_MODULE_4__mixins__["a" /* extensionMixin */]],
  props: {
    i8n: Object,
    predicate: Object,
    site: {
      type: Object,
      required: false
    }
  }
});

/***/ }),

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      !_vm.predicate.dirty
        ? _c("div", [
            _c(
              "h3",
              [
                _c("info-icon", { attrs: { text: _vm.i8n.assertion } }),
                _vm._v("Assertion: " + _vm._s(_vm.predicate.name) + "\n    ")
              ],
              1
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.predicate.dirty
        ? _c(
            "div",
            { staticClass: "d-flex" },
            [
              _c("info-icon", { attrs: { text: _vm.i8n.assertion } }),
              _vm._v(" "),
              _vm.predicate.dirty
                ? _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.predicate.name,
                        expression: "predicate.name"
                      }
                    ],
                    staticClass: "d-inline-flex form-control w-25 ml-2",
                    attrs: {
                      type: "text",
                      placeholder: "Enter Assertion Name"
                    },
                    domProps: { value: _vm.predicate.name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.predicate, "name", $event.target.value)
                      }
                    }
                  })
                : _vm._e()
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mb-4 mt-2", staticStyle: { height: "300px" } },
        [
          _c("editor", {
            attrs: {
              "editor-id": "predicate-" + _vm.predicate.id,
              content: _vm.decompress(_vm.predicate.function),
              type: "predicate",
              "model-id": _vm.predicate.id
            },
            on: { "change-content": _vm.handleChange }
          })
        ],
        1
      ),
      _vm._v(" "),
      !_vm.predicate.dirty
        ? _c("update-button", {
            attrs: {
              "on-loading-text": "Saving...",
              "is-loading": _vm.isLoading,
              "on-click": _vm.update,
              text: "Update Assertion"
            }
          })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-34972d7e", module.exports)
  }
}

/***/ }),

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      {
        class: {
          "card-header": true,
          "d-flex": true
        },
        attrs: { "aria-controls": "#extension-body-" + _vm.extension.id }
      },
      [
        _c("div", { staticClass: "flex-fill" }, [
          _c("div", { staticClass: "pb-2" }, [
            _vm.extension.dirty
              ? _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.extension.name,
                      expression: "extension.name"
                    }
                  ],
                  staticClass: "w-25 form-control d-inline-flex",
                  attrs: { type: "text", placeholder: "Enter Extension Name" },
                  domProps: { value: _vm.extension.name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.extension, "name", $event.target.value)
                    }
                  }
                })
              : _vm._e(),
            _vm._v(" "),
            !_vm.extension.dirty
              ? _c("span", [_vm._v(_vm._s(_vm.extension.name))])
              : _vm._e(),
            _vm._v(" "),
            _vm.extension.imported
              ? _c(
                  "span",
                  { staticClass: "badge badge-primary" },
                  [
                    _vm._v("Built-In"),
                    _c("info-icon", { attrs: { text: _vm.i8n.type.built_in } })
                  ],
                  1
                )
              : !_vm.extension.imported
              ? _c(
                  "span",
                  { staticClass: "badge badge-secondary" },
                  [
                    _vm._v("Custom"),
                    _c("info-icon", { attrs: { text: _vm.i8n.type.custom } })
                  ],
                  1
                )
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("div", [
            _vm.extension.dirty
              ? _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.extension.description,
                      expression: "extension.description"
                    }
                  ],
                  staticClass: "w-50 form-control",
                  attrs: {
                    type: "text",
                    placeholder: "Enter Extension Description"
                  },
                  domProps: { value: _vm.extension.description },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.extension,
                        "description",
                        $event.target.value
                      )
                    }
                  }
                })
              : _vm._e(),
            _vm._v(" "),
            !_vm.extension.dirty
              ? _c("p", { staticClass: "card-text" }, [
                  _vm._v(
                    "\n          " +
                      _vm._s(_vm.extension.description) +
                      "\n        "
                  )
                ])
              : _vm._e()
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          [
            !_vm.extension.dirty
              ? _c("reactive-button", {
                  class: {
                    "btn-primary": _vm.isEnabled,
                    "btn-outline-primary": !_vm.isEnabled,
                    active: _vm.isEnabled
                  },
                  attrs: {
                    classes: "btn",
                    "on-loading-text": "Enabling...",
                    "is-loading": _vm.isEnabling,
                    "on-click": _vm.enable,
                    text: "" + (_vm.isEnabled ? "Enabled" : "Enable")
                  }
                })
              : _vm._e(),
            _vm._v(" "),
            !_vm.extension.dirty
              ? _c("reactive-button", {
                  class: {
                    "btn-primary": !_vm.isEnabled,
                    "btn-outline-primary": _vm.isEnabled,
                    active: !_vm.isEnabled
                  },
                  attrs: {
                    classes: "btn",
                    "on-loading-text": "Disabling...",
                    "is-loading": _vm.isDisabling,
                    "on-click": _vm.disable,
                    text: "" + (!_vm.isEnabled ? "Disabled" : "Disable")
                  }
                })
              : _vm._e(),
            _vm._v(" "),
            _vm.extension.dirty
              ? _c("reactive-button", {
                  attrs: {
                    classes: "btn btn-outline-success",
                    "on-loading-text": "Saving...",
                    "is-loading": _vm.isSaving,
                    "on-click": _vm.create,
                    text: "Save"
                  }
                })
              : _vm._e(),
            _vm._v(" "),
            _vm.extension.dirty
              ? _c(
                  "button",
                  {
                    staticClass: "btn btn-outline-darker",
                    on: { click: _vm.cancel }
                  },
                  [_vm._v("\n        Cancel\n      ")]
                )
              : _vm._e(),
            _vm._v(" "),
            !_vm.extension.dirty && (_vm.isAdmin || !_vm.extension.imported)
              ? _c("reactive-button", {
                  attrs: {
                    classes: "btn btn-outline-danger",
                    "on-loading-text": "Deleting...",
                    "is-loading": _vm.isDeleting,
                    "on-click": _vm.deleteExtension,
                    text: "Delete"
                  }
                })
              : _vm._e(),
            _vm._v(" "),
            _vm.isAdmin || !_vm.extension.imported
              ? _c(
                  "button",
                  {
                    staticClass: "btn btn-outline-light",
                    attrs: {
                      "data-target": "#extension-body-" + _vm.extension.id,
                      "aria-expanded": _vm.isExpanded
                    },
                    on: { click: _vm.toggleExpanded }
                  },
                  [
                    _vm._v(
                      "\n        " +
                        _vm._s(_vm.isExpanded ? "Hide" : "Edit") +
                        "\n      "
                    )
                  ]
                )
              : _vm._e()
          ],
          1
        )
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        class: "collapse multi-collapse " + (_vm.isExpanded ? "show" : ""),
        attrs: { id: "extension-body-" + _vm.extension.id }
      },
      [
        _vm._l(_vm.extension.predicates, function(predicate) {
          return _c(
            "div",
            {
              key: "predicate-" + predicate.id,
              staticClass: "col col-9 m-3 px-4 pl-4"
            },
            [
              _c("predicate", {
                attrs: {
                  "is-admin": _vm.isAdmin,
                  i8n: _vm.i8n,
                  predicate: predicate,
                  site: _vm.site
                },
                on: { "predicate-change-content": _vm.predicateChangeContent }
              })
            ],
            1
          )
        }),
        _vm._v(" "),
        _vm._l(_vm.extension.actions, function(action) {
          return _c(
            "div",
            {
              key: "action-" + action.id,
              staticClass: "col col-9 m-3 pl-4 px-4"
            },
            [
              _c("action", {
                attrs: {
                  "is-admin": _vm.isAdmin,
                  i8n: _vm.i8n,
                  action: action,
                  site: _vm.site
                },
                on: { "action-change-content": _vm.actionChangeContent }
              })
            ],
            1
          )
        })
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-f703506e", module.exports)
  }
}

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__partials_Action__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__partials_Action___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__partials_Action__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__partials_Editor__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__partials_Editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__partials_Editor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__partials_Error__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__partials_Error___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__partials_Error__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__partials_Extension__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__partials_Extension___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__partials_Extension__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__partials_Predicate__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__partials_Predicate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__partials_Predicate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mixins__ = __webpack_require__(246);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Action: __WEBPACK_IMPORTED_MODULE_0__partials_Action___default.a,
    Extension: __WEBPACK_IMPORTED_MODULE_3__partials_Extension___default.a,
    Predicate: __WEBPACK_IMPORTED_MODULE_4__partials_Predicate___default.a,
    Editor: __WEBPACK_IMPORTED_MODULE_1__partials_Editor___default.a,
    Error: __WEBPACK_IMPORTED_MODULE_2__partials_Error___default.a
  },
  data: function data() {
    return {
      actions: Object,
      extensions: this.initialExtensions,
      predicates: Object
    };
  },

  methods: {
    addExtension: function addExtension() {
      this.extensions.push({
        id: this.getRandomInt(),
        enabled: true,
        dirty: true,
        // Attempting to create built-in as Admin
        imported: true,
        actions: [{
          id: this.getRandomInt(),
          dirty: true,
          function: this.compress('function fn() {\n    // Add logic here\n}')
        }],
        pivot: {
          enabled_at: new Date(new Date().getTime() - 1000)
        },
        predicates: [{
          id: this.getRandomInt(),
          dirty: true,
          function: this.compress('function fn() {\n    // Add logic here\n}')
        }]
      });
    },
    getRandomInt: function getRandomInt() {
      var max = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 999999999;

      return Math.floor(Math.random() * Math.floor(max));
    },
    handleExtensionUpdated: function handleExtensionUpdated(data) {
      var id = data.id,
          extension = data.extension;

      var index = this.extensions.findIndex(function (extension) {
        return extension.id === id;
      });
      if (index) {
        this.$set(this.extensions, index, extension);
      }
    },
    handleExtensionDeleted: function handleExtensionDeleted(id) {
      var index = this.extensions.findIndex(function (extension) {
        return extension.id === id;
      });
      if (index) {
        this.extensions.splice(index, 1);
      }
    }
  },
  mixins: [__WEBPACK_IMPORTED_MODULE_5__mixins__["a" /* extensionMixin */]],
  props: {
    initialExtensions: Array,
    i8n: Object
  }
});

/***/ }),

/***/ 301:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "admin" },
    [
      _vm.extensions
        ? _c(
            "div",
            _vm._l(_vm.extensions, function(extension) {
              return _c(
                "div",
                { key: extension.id, staticClass: "col-sm-12" },
                [
                  _c("extension", {
                    attrs: {
                      "initial-extension": extension,
                      "is-admin": true,
                      i8n: _vm.i8n
                    },
                    on: {
                      update: _vm.handleExtensionUpdated,
                      delete: _vm.handleExtensionDeleted
                    }
                  })
                ],
                1
              )
            }),
            0
          )
        : _vm._e(),
      _vm._v(" "),
      _c("div", [
        _c("a", { attrs: { href: "#" } }, [
          _c(
            "button",
            {
              staticClass: "btn btn-primary m-3 ml-4",
              on: { click: _vm.addExtension }
            },
            [_vm._v("\n        " + _vm._s(_vm.i8n.add_new_button) + "\n      ")]
          )
        ])
      ]),
      _vm._v(" "),
      _c("error", { attrs: { error: _vm.error, "is-loading": _vm.isLoading } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-cbe67cca", module.exports)
  }
}

/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(104);


/***/ }),

/***/ 72:
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(181)
/* template */
var __vue_template__ = __webpack_require__(182)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/audit/partials/Button.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0e4fc7b4", Component.options)
  } else {
    hotAPI.reload("data-v-0e4fc7b4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(183)
/* template */
var __vue_template__ = __webpack_require__(184)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/partials/Error.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6941b502", Component.options)
  } else {
    hotAPI.reload("data-v-6941b502", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});