!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("jquery"),require("./util.js")):"function"==typeof define&&define.amd?define(["jquery","./util.js"],t):e.Tab=t(e.jQuery,e.Util)}(this,function(e,t){"use strict";function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}return e=e&&e.hasOwnProperty("default")?e["default"]:e,t=t&&t.hasOwnProperty("default")?t["default"]:t,function(e){var n="tab",a="4.1.3",i="bs.tab",o="."+i,l=".data-api",s=e.fn[n],d={HIDE:"hide"+o,HIDDEN:"hidden"+o,SHOW:"show"+o,SHOWN:"shown"+o,CLICK_DATA_API:"click"+o+l},u={DROPDOWN_MENU:"dropdown-menu",ACTIVE:"active",DISABLED:"disabled",FADE:"fade",SHOW:"show"},f={DROPDOWN:".dropdown",NAV_LIST_GROUP:".nav, .list-group",ACTIVE:".active",ACTIVE_UL:"> li > .active",DATA_TOGGLE:'[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',DROPDOWN_TOGGLE:".dropdown-toggle",DROPDOWN_ACTIVE_CHILD:"> .dropdown-menu .active"},c=function(){function n(e){this._element=e}var o=n.prototype;return o.show=function(){var n=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&e(this._element).hasClass(u.ACTIVE)||e(this._element).hasClass(u.DISABLED))){var r,a,i=e(this._element).closest(f.NAV_LIST_GROUP)[0],o=t.getSelectorFromElement(this._element);if(i){var l="UL"===i.nodeName?f.ACTIVE_UL:f.ACTIVE;a=(a=e.makeArray(e(i).find(l)))[a.length-1]}var s=e.Event(d.HIDE,{relatedTarget:this._element}),c=e.Event(d.SHOW,{relatedTarget:a});if(a&&e(a).trigger(s),e(this._element).trigger(c),!c.isDefaultPrevented()&&!s.isDefaultPrevented()){o&&(r=document.querySelector(o)),this._activate(this._element,i);var _=function(){var t=e.Event(d.HIDDEN,{relatedTarget:n._element}),r=e.Event(d.SHOWN,{relatedTarget:a});e(a).trigger(t),e(n._element).trigger(r)};r?this._activate(r,r.parentNode,_):_()}}},o.dispose=function(){e.removeData(this._element,i),this._element=null},o._activate=function(n,r,a){var i=this,o=("UL"===r.nodeName?e(r).find(f.ACTIVE_UL):e(r).children(f.ACTIVE))[0],l=a&&o&&e(o).hasClass(u.FADE),s=function(){return i._transitionComplete(n,o,a)};if(o&&l){var d=t.getTransitionDurationFromElement(o);e(o).one(t.TRANSITION_END,s).emulateTransitionEnd(d)}else s()},o._transitionComplete=function(n,r,a){if(r){e(r).removeClass(u.SHOW+" "+u.ACTIVE);var i=e(r.parentNode).find(f.DROPDOWN_ACTIVE_CHILD)[0];i&&e(i).removeClass(u.ACTIVE),"tab"===r.getAttribute("role")&&r.setAttribute("aria-selected",!1)}if(e(n).addClass(u.ACTIVE),"tab"===n.getAttribute("role")&&n.setAttribute("aria-selected",!0),t.reflow(n),e(n).addClass(u.SHOW),n.parentNode&&e(n.parentNode).hasClass(u.DROPDOWN_MENU)){var o=e(n).closest(f.DROPDOWN)[0];if(o){var l=[].slice.call(o.querySelectorAll(f.DROPDOWN_TOGGLE));e(l).addClass(u.ACTIVE)}n.setAttribute("aria-expanded",!0)}a&&a()},n._jQueryInterface=function(t){return this.each(function(){var r=e(this),a=r.data(i);if(a||(a=new n(this),r.data(i,a)),"string"==typeof t){if("undefined"==typeof a[t])throw new TypeError('No method named "'+t+'"');a[t]()}})},r(n,null,[{key:"VERSION",get:function(){return a}}]),n}();return e(document).on(d.CLICK_DATA_API,f.DATA_TOGGLE,function(t){t.preventDefault(),c._jQueryInterface.call(e(this),"show")}),e.fn[n]=c._jQueryInterface,e.fn[n].Constructor=c,e.fn[n].noConflict=function(){return e.fn[n]=s,c._jQueryInterface},c}(e)});