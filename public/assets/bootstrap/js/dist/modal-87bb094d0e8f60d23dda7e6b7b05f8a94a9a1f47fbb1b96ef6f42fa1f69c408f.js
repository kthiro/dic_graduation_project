!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("jquery"),require("./util.js")):"function"==typeof define&&define.amd?define(["jquery","./util.js"],t):e.Modal=t(e.jQuery,e.Util)}(this,function(e,t){"use strict";function i(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function n(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},n=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),n.forEach(function(t){o(e,t,i[t])})}return e}return e=e&&e.hasOwnProperty("default")?e["default"]:e,t=t&&t.hasOwnProperty("default")?t["default"]:t,function(e){var i="modal",o="4.1.3",r="bs.modal",a="."+r,l=".data-api",d=e.fn[i],h=27,c={backdrop:!0,keyboard:!0,focus:!0,show:!0},u={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},_={HIDE:"hide"+a,HIDDEN:"hidden"+a,SHOW:"show"+a,SHOWN:"shown"+a,FOCUSIN:"focusin"+a,RESIZE:"resize"+a,CLICK_DISMISS:"click.dismiss"+a,KEYDOWN_DISMISS:"keydown.dismiss"+a,MOUSEUP_DISMISS:"mouseup.dismiss"+a,MOUSEDOWN_DISMISS:"mousedown.dismiss"+a,CLICK_DATA_API:"click"+a+l},f={SCROLLBAR_MEASURER:"modal-scrollbar-measure",BACKDROP:"modal-backdrop",OPEN:"modal-open",FADE:"fade",SHOW:"show"},m={DIALOG:".modal-dialog",DATA_TOGGLE:'[data-toggle="modal"]',DATA_DISMISS:'[data-dismiss="modal"]',FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top"},g=function(){function l(e,t){this._config=this._getConfig(t),this._element=e,this._dialog=e.querySelector(m.DIALOG),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._scrollbarWidth=0}var d=l.prototype;return d.toggle=function(e){return this._isShown?this.hide():this.show(e)},d.show=function(t){var i=this;if(!this._isTransitioning&&!this._isShown){e(this._element).hasClass(f.FADE)&&(this._isTransitioning=!0);var n=e.Event(_.SHOW,{relatedTarget:t});e(this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),e(document.body).addClass(f.OPEN),this._setEscapeEvent(),this._setResizeEvent(),e(this._element).on(_.CLICK_DISMISS,m.DATA_DISMISS,function(e){return i.hide(e)}),e(this._dialog).on(_.MOUSEDOWN_DISMISS,function(){e(i._element).one(_.MOUSEUP_DISMISS,function(t){e(t.target).is(i._element)&&(i._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return i._showElement(t)}))}},d.hide=function(i){var n=this;if(i&&i.preventDefault(),!this._isTransitioning&&this._isShown){var o=e.Event(_.HIDE);if(e(this._element).trigger(o),this._isShown&&!o.isDefaultPrevented()){this._isShown=!1;var s=e(this._element).hasClass(f.FADE);if(s&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),e(document).off(_.FOCUSIN),e(this._element).removeClass(f.SHOW),e(this._element).off(_.CLICK_DISMISS),e(this._dialog).off(_.MOUSEDOWN_DISMISS),s){var r=t.getTransitionDurationFromElement(this._element);e(this._element).one(t.TRANSITION_END,function(e){return n._hideModal(e)}).emulateTransitionEnd(r)}else this._hideModal()}}},d.dispose=function(){e.removeData(this._element,r),e(window,document,this._element,this._backdrop).off(a),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._scrollbarWidth=null},d.handleUpdate=function(){this._adjustDialog()},d._getConfig=function(e){return e=s({},c,e),t.typeCheckConfig(i,e,u),e},d._showElement=function(i){var n=this,o=e(this._element).hasClass(f.FADE);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.scrollTop=0,o&&t.reflow(this._element),e(this._element).addClass(f.SHOW),this._config.focus&&this._enforceFocus();var s=e.Event(_.SHOWN,{relatedTarget:i}),r=function(){n._config.focus&&n._element.focus(),n._isTransitioning=!1,e(n._element).trigger(s)};if(o){var a=t.getTransitionDurationFromElement(this._element);e(this._dialog).one(t.TRANSITION_END,r).emulateTransitionEnd(a)}else r()},d._enforceFocus=function(){var t=this;e(document).off(_.FOCUSIN).on(_.FOCUSIN,function(i){document!==i.target&&t._element!==i.target&&0===e(t._element).has(i.target).length&&t._element.focus()})},d._setEscapeEvent=function(){var t=this;this._isShown&&this._config.keyboard?e(this._element).on(_.KEYDOWN_DISMISS,function(e){e.which===h&&(e.preventDefault(),t.hide())}):this._isShown||e(this._element).off(_.KEYDOWN_DISMISS)},d._setResizeEvent=function(){var t=this;this._isShown?e(window).on(_.RESIZE,function(e){return t.handleUpdate(e)}):e(window).off(_.RESIZE)},d._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._isTransitioning=!1,this._showBackdrop(function(){e(document.body).removeClass(f.OPEN),t._resetAdjustments(),t._resetScrollbar(),e(t._element).trigger(_.HIDDEN)})},d._removeBackdrop=function(){this._backdrop&&(e(this._backdrop).remove(),this._backdrop=null)},d._showBackdrop=function(i){var n=this,o=e(this._element).hasClass(f.FADE)?f.FADE:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=f.BACKDROP,o&&this._backdrop.classList.add(o),e(this._backdrop).appendTo(document.body),e(this._element).on(_.CLICK_DISMISS,function(e){n._ignoreBackdropClick?n._ignoreBackdropClick=!1:e.target===e.currentTarget&&("static"===n._config.backdrop?n._element.focus():n.hide())}),o&&t.reflow(this._backdrop),e(this._backdrop).addClass(f.SHOW),!i)return;if(!o)return void i();var s=t.getTransitionDurationFromElement(this._backdrop);e(this._backdrop).one(t.TRANSITION_END,i).emulateTransitionEnd(s)}else if(!this._isShown&&this._backdrop){e(this._backdrop).removeClass(f.SHOW);var r=function(){n._removeBackdrop(),i&&i()};if(e(this._element).hasClass(f.FADE)){var a=t.getTransitionDurationFromElement(this._backdrop);e(this._backdrop).one(t.TRANSITION_END,r).emulateTransitionEnd(a)}else r()}else i&&i()},d._adjustDialog=function(){var e=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&e&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!e&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},d._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},d._checkScrollbar=function(){var e=document.body.getBoundingClientRect();this._isBodyOverflowing=e.left+e.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},d._setScrollbar=function(){var t=this;if(this._isBodyOverflowing){var i=[].slice.call(document.querySelectorAll(m.FIXED_CONTENT)),n=[].slice.call(document.querySelectorAll(m.STICKY_CONTENT));e(i).each(function(i,n){var o=n.style.paddingRight,s=e(n).css("padding-right");e(n).data("padding-right",o).css("padding-right",parseFloat(s)+t._scrollbarWidth+"px")}),e(n).each(function(i,n){var o=n.style.marginRight,s=e(n).css("margin-right");e(n).data("margin-right",o).css("margin-right",parseFloat(s)-t._scrollbarWidth+"px")});var o=document.body.style.paddingRight,s=e(document.body).css("padding-right");e(document.body).data("padding-right",o).css("padding-right",parseFloat(s)+this._scrollbarWidth+"px")}},d._resetScrollbar=function(){var t=[].slice.call(document.querySelectorAll(m.FIXED_CONTENT));e(t).each(function(t,i){var n=e(i).data("padding-right");e(i).removeData("padding-right"),i.style.paddingRight=n||""});var i=[].slice.call(document.querySelectorAll(""+m.STICKY_CONTENT));e(i).each(function(t,i){var n=e(i).data("margin-right");void 0!==n&&e(i).css("margin-right",n).removeData("margin-right")});var n=e(document.body).data("padding-right");e(document.body).removeData("padding-right"),document.body.style.paddingRight=n||""},d._getScrollbarWidth=function(){var e=document.createElement("div");e.className=f.SCROLLBAR_MEASURER,document.body.appendChild(e);var t=e.getBoundingClientRect().width-e.clientWidth;return document.body.removeChild(e),t},l._jQueryInterface=function(t,i){return this.each(function(){var n=e(this).data(r),o=s({},c,e(this).data(),"object"==typeof t&&t?t:{});if(n||(n=new l(this,o),e(this).data(r,n)),"string"==typeof t){if("undefined"==typeof n[t])throw new TypeError('No method named "'+t+'"');n[t](i)}else o.show&&n.show(i)})},n(l,null,[{key:"VERSION",get:function(){return o}},{key:"Default",get:function(){return c}}]),l}();return e(document).on(_.CLICK_DATA_API,m.DATA_TOGGLE,function(i){var n,o=this,a=t.getSelectorFromElement(this);a&&(n=document.querySelector(a));var l=e(n).data(r)?"toggle":s({},e(n).data(),e(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||i.preventDefault();var d=e(n).one(_.SHOW,function(t){t.isDefaultPrevented()||d.one(_.HIDDEN,function(){e(o).is(":visible")&&o.focus()})});g._jQueryInterface.call(e(n),l,this)}),e.fn[i]=g._jQueryInterface,e.fn[i].Constructor=g,e.fn[i].noConflict=function(){return e.fn[i]=d,g._jQueryInterface},g}(e)});