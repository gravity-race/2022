"use strict"
function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}define("website/adapters/-json-api",["exports","@ember-data/adapter/json-api"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("website/app",["exports","ember-resolver","ember-load-initializers","website/config/environment"],(function(e,t,n,r){function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=l(e)
if(t){var o=l(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return u(this,n)}}function u(e,t){if(t&&("object"===_typeof(t)||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return f(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var c=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)})(u,Ember.Application)
var n=a(u)
function u(){var e
o(this,u)
for(var i=arguments.length,a=new Array(i),l=0;l<i;l++)a[l]=arguments[l]
return s(f(e=n.call.apply(n,[this].concat(a))),"modulePrefix",r.default.modulePrefix),s(f(e),"podModulePrefix",r.default.podModulePrefix),s(f(e),"Resolver",t.default),e}return u}()
e.default=c,(0,n.default)(c,r.default.modulePrefix)})),define("website/component-managers/glimmer",["exports","@glimmer/component/-private/ember-component-manager"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("website/data-adapter",["exports","@ember-data/debug"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("website/helpers/app-version",["exports","website/config/environment","ember-cli-app-version/utils/regexp"],(function(e,t,n){function r(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=t.default.APP.version,i=r.versionOnly||r.hideSha,a=r.shaOnly||r.hideVersion,u=null
return i&&(r.showExtended&&(u=o.match(n.versionExtendedRegExp)),u||(u=o.match(n.versionRegExp))),a&&(u=o.match(n.shaRegExp)),u?u[0]:o}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=r,e.default=void 0
var o=Ember.Helper.helper(r)
e.default=o})),define("website/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=t.default
e.default=n})),define("website/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=t.default
e.default=n})),define("website/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","website/config/environment"],(function(e,t,n){var r,o
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n.default.APP&&(r=n.default.APP.name,o=n.default.APP.version)
var i={name:"App Version",initialize:(0,t.default)(r,o)}
e.default=i})),define("website/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default)}}
e.default=n})),define("website/initializers/ember-data-data-adapter",["exports","@ember-data/debug/setup"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("website/initializers/ember-data",["exports","ember-data","ember-data/setup-container"],(function(e,t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r={name:"ember-data",initialize:n.default}
e.default=r})),define("website/initializers/export-application-global",["exports","website/config/environment"],(function(e,t){function n(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var n
if("undefined"!=typeof window)n=window
else if("undefined"!=typeof global)n=global
else{if("undefined"==typeof self)return
n=self}var r,o=t.default.exportApplicationGlobal
r="string"==typeof o?o:Ember.String.classify(t.default.modulePrefix),n[r]||(n[r]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete n[r]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=n,e.default=void 0
var r={name:"export-application-global",initialize:n}
e.default=r})),define("website/instance-initializers/ember-data",["exports","ember-data/initialize-store-service"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n={name:"ember-data",initialize:t.default}
e.default=n})),define("website/router",["exports","website/config/environment"],(function(e,t){function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=u(e)
if(t){var o=u(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return i(this,n)}}function i(e,t){if(t&&("object"===_typeof(t)||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return a(e)}function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var l=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)})(u,Ember.Router)
var i=o(u)
function u(){var e
n(this,u)
for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l]
return f(a(e=i.call.apply(i,[this].concat(o))),"location",t.default.locationType),f(a(e),"rootURL",t.default.rootURL),e}return u}()
e.default=l,l.map((function(){this.route("partners")}))})),define("website/routes/index",["exports"],(function(e){function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function r(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=i(e)
if(t){var a=i(this).constructor
n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments)
return o(this,n)}}function o(e,t){if(t&&("object"===_typeof(t)||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e)}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)})(i,Ember.Route)
var o=r(i)
function i(){return t(this,i),o.apply(this,arguments)}return i}()
e.default=a})),define("website/routes/partners",["exports"],(function(e){function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function r(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=i(e)
if(t){var a=i(this).constructor
n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments)
return o(this,n)}}function o(e,t){if(t&&("object"===_typeof(t)||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e)}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)})(i,Ember.Route)
var o=r(i)
function i(){return t(this,i),o.apply(this,arguments)}return i}()
e.default=a})),define("website/serializers/-default",["exports","@ember-data/serializer/json"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("website/serializers/-json-api",["exports","@ember-data/serializer/json-api"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("website/serializers/-rest",["exports","@ember-data/serializer/rest"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("website/services/store",["exports","ember-data/store"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("website/templates/application",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"jLrFdYkA",block:'{"symbols":[],"statements":[[10,"header"],[14,0,"main-header"],[12],[2,"\\n  "],[10,"ul"],[14,0,"internal-links"],[12],[2,"\\n    "],[10,"li"],[12],[2,"\\n      "],[10,"a"],[14,"target","_blank"],[14,6,"https://www.njuko.net/gravity_race_annecy_2021/select_competition"],[14,0,"gvt-link"],[12],[2,"\\n        Inscriptions\\n      "],[13],[2,"\\n    "],[13],[2,"\\n\\n    "],[10,"li"],[12],[2,"\\n      "],[8,"link-to",[[24,0,"gvt-link"]],[["@route"],["partners"]],[["default"],[{"statements":[[2,"\\n        Parternaires\\n      "]],"parameters":[]}]]],[2,"\\n    "],[13],[2,"\\n  "],[13],[2,"\\n\\n  "],[10,"div"],[14,0,"logo"],[12],[2,"\\n    "],[8,"link-to",[],[["@route"],["index"]],[["default"],[{"statements":[[2,"\\n      "],[10,"img"],[14,"src","assets/images/gravity-659028e14b047740f4c582fe08feccaa.jpg"],[12],[13],[2,"\\n    "]],"parameters":[]}]]],[2,"\\n  "],[13],[2,"\\n\\n  "],[10,"ul"],[14,0,"social-medias"],[12],[2,"\\n    "],[10,"li"],[12],[2,"\\n      "],[10,"a"],[14,6,"https://www.facebook.com/gravityraces/"],[14,"target","_blank"],[14,0,"gvt-link"],[12],[2,"\\n        "],[10,"i"],[14,0,"fa fa-facebook"],[12],[13],[2,"\\n      "],[13],[2,"\\n    "],[13],[2,"\\n\\n    "],[10,"li"],[12],[2,"\\n      "],[10,"a"],[14,6,"https://www.instagram.com/gravity_race"],[14,"target","_blank"],[14,0,"gvt-link"],[12],[2,"\\n        "],[10,"i"],[14,0,"fa fa-instagram"],[12],[13],[2,"\\n      "],[13],[2,"\\n    "],[13],[2,"\\n  "],[13],[2,"\\n"],[13],[2,"\\n\\n"],[1,[30,[36,1],[[30,[36,0],null,null]],null]],[2,"\\n"]],"hasEval":false,"upvars":["-outlet","component"]}',meta:{moduleName:"website/templates/application.hbs"}})
e.default=t})),define("website/templates/index",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"YfrcklE9",block:'{"symbols":[],"statements":[[10,"section"],[14,0,"movie"],[12],[2,"\\n  "],[10,"div"],[14,5,"padding:56.25% 0 0 0;position:relative;"],[12],[2,"\\n    "],[10,"iframe"],[14,"src","https://player.vimeo.com/video/134134439?h=4e57de82f2"],[14,5,"position:absolute;top:0;left:0;width:100%;height:100%;"],[14,"frameborder","0"],[14,"allow","autoplay; fullscreen; picture-in-picture"],[14,"allowfullscreen",""],[12],[2,"\\n    "],[13],[2,"\\n  "],[13],[2,"\\n  "],[10,"script"],[14,"src","https://player.vimeo.com/api/player.js"],[12],[13],[2,"\\n"],[13],[2,"\\n\\n"],[10,"section"],[14,0,"event_wrapper"],[12],[2,"\\n  "],[10,"div"],[14,0,"event"],[12],[2,"\\n    "],[10,"h2"],[14,0,"event__name"],[12],[2,"Gravity Race — Annecy"],[13],[2,"\\n    "],[10,"div"],[14,0,"event__date"],[12],[2,"\\n      09 Octobre 2021\\n    "],[13],[2,"\\n    "],[10,"p"],[14,0,"event__details"],[12],[2,"\\n      Les Swim Run sont des manifestations enchaînant\\n      des parcours de natation et course à pied répétés, d’un minimum de trois\\n      segments. Les participants effectuent la course principalement en\\n      binôme."],[10,"br"],[12],[13],[10,"br"],[12],[13],[2,"\\n\\n      L’idée du Swim Run est apparue en Suède en 2002 à l’occasion d’un pari entre\\n      amis. ”La dernière équipe arrivée à Sandham, village située 70 km plus au\\n      nord, en courant sur les différentes îles et en nageant entre elle, paiera\\n      l’hôtel et le dîner pour les autres.” En 2006, le premier SwimRun, l’Otillo,\\n      voit officiellement le jour en Suède. En 2017, la Fédération Française de\\n      Triathlon obtient la délégation du Swim Run. "],[10,"br"],[12],[13],[2," "],[10,"br"],[12],[13],[2,"\\n\\n      Les Swim Run sont caractérisés par un format laissant place à la créativité\\n      responsable des organisateurs et à l’adaptation au territoire. A la\\n      différence du triathlon qui possède des aires de transition permettant de\\n      changer de tenue/matériel, les swimrunners conservent leur tenue et leur\\n      matériel sur l’ensemble du parcours. C’est à dire qu’ils vont nager avec\\n      leurs chaussures et courir avec leur combinaison néoprène (spécifique à la\\n      pratique). "],[10,"br"],[12],[13],[2,"\\n    "],[13],[2,"\\n  "],[13],[2,"\\n"],[13],[2,"\\n\\n"],[10,"section"],[14,0,"cards-container"],[12],[2,"\\n  "],[10,"div"],[14,0,"card"],[12],[2,"\\n    "],[10,"img"],[14,"src","assets/images/benevoles-aa46eac250fdb88ddaae44718b3d2ebe.jpg"],[12],[13],[2,"\\n  "],[13],[2,"\\n\\n  "],[10,"div"],[14,0,"card"],[12],[2,"\\n    "],[10,"img"],[14,"src","assets/images/inscriptions-3c7a0f8959236688ac874ca842f3a1d1.jpg"],[12],[13],[2,"\\n  "],[13],[2,"\\n\\n  "],[10,"div"],[14,0,"card"],[12],[2,"\\n    "],[10,"img"],[14,"src","assets/images/faq-2275bd39981d42c77692820fab17f37a.jpg"],[12],[13],[2,"\\n  "],[13],[2,"\\n"],[13],[2,"\\n"]],"hasEval":false,"upvars":[]}',meta:{moduleName:"website/templates/index.hbs"}})
e.default=t})),define("website/templates/partners",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"Bmp9hpql",block:'{"symbols":[],"statements":[],"hasEval":false,"upvars":[]}',meta:{moduleName:"website/templates/partners.hbs"}})
e.default=t})),define("website/transforms/boolean",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.BooleanTransform}})})),define("website/transforms/date",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.DateTransform}})})),define("website/transforms/number",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.NumberTransform}})})),define("website/transforms/string",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.StringTransform}})})),define("website/config/environment",[],(function(){try{var e="website/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),n={default:JSON.parse(decodeURIComponent(t))}
return Object.defineProperty(n,"__esModule",{value:!0}),n}catch(r){throw new Error('Could not read config from meta tag with name "'+e+'".')}})),runningTests||require("website/app").default.create({name:"website",version:"0.0.0+a0b80b54"})
