import $ from"jquery";import Util from"./util";const Alert=(e=>{const t="alert",n="4.1.3",r="bs.alert",s=`.${r}`,o=".data-api",l=e.fn[t],i={DISMISS:'[data-dismiss="alert"]'},a={CLOSE:`close${s}`,CLOSED:`closed${s}`,CLICK_DATA_API:`click${s}${o}`},c={ALERT:"alert",FADE:"fade",SHOW:"show"};class m{constructor(e){this._element=e}static get VERSION(){return n}close(e){let t=this._element;e&&(t=this._getRootElement(e)),this._triggerCloseEvent(t).isDefaultPrevented()||this._removeElement(t)}dispose(){e.removeData(this._element,r),this._element=null}_getRootElement(t){const n=Util.getSelectorFromElement(t);let r=!1;return n&&(r=document.querySelector(n)),r||(r=e(t).closest(`.${c.ALERT}`)[0]),r}_triggerCloseEvent(t){const n=e.Event(a.CLOSE);return e(t).trigger(n),n}_removeElement(t){if(e(t).removeClass(c.SHOW),!e(t).hasClass(c.FADE))return void this._destroyElement(t);const n=Util.getTransitionDurationFromElement(t);e(t).one(Util.TRANSITION_END,e=>this._destroyElement(t,e)).emulateTransitionEnd(n)}_destroyElement(t){e(t).detach().trigger(a.CLOSED).remove()}static _jQueryInterface(t){return this.each(function(){const n=e(this);let s=n.data(r);s||(s=new m(this),n.data(r,s)),"close"===t&&s[t](this)})}static _handleDismiss(e){return function(t){t&&t.preventDefault(),e.close(this)}}}return e(document).on(a.CLICK_DATA_API,i.DISMISS,m._handleDismiss(new m)),e.fn[t]=m._jQueryInterface,e.fn[t].Constructor=m,e.fn[t].noConflict=function(){return e.fn[t]=l,m._jQueryInterface},m})($);export default Alert;