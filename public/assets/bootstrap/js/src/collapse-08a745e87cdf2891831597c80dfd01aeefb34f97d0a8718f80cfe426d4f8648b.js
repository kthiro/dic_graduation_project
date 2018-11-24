import $ from"jquery";import Util from"./util";const Collapse=(e=>{const t="collapse",n="4.1.3",i="bs.collapse",s=`.${i}`,l=".data-api",r=e.fn[t],a={toggle:!0,parent:""},o={toggle:"boolean",parent:"(string|element)"},g={SHOW:`show${s}`,SHOWN:`shown${s}`,HIDE:`hide${s}`,HIDDEN:`hidden${s}`,CLICK_DATA_API:`click${s}${l}`},h={SHOW:"show",COLLAPSE:"collapse",COLLAPSING:"collapsing",COLLAPSED:"collapsed"},c={WIDTH:"width",HEIGHT:"height"},_={ACTIVES:".show, .collapsing",DATA_TOGGLE:'[data-toggle="collapse"]'};class d{constructor(t,n){this._isTransitioning=!1,this._element=t,this._config=this._getConfig(n),this._triggerArray=e.makeArray(document.querySelectorAll(`[data-toggle="collapse"][href="#${t.id}"],`+`[data-toggle="collapse"][data-target="#${t.id}"]`));const i=[].slice.call(document.querySelectorAll(_.DATA_TOGGLE));for(let e=0,n=i.length;e<n;e++){const n=i[e],s=Util.getSelectorFromElement(n),l=[].slice.call(document.querySelectorAll(s)).filter(e=>e===t);null!==s&&l.length>0&&(this._selector=s,this._triggerArray.push(n))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}static get VERSION(){return n}static get Default(){return a}toggle(){e(this._element).hasClass(h.SHOW)?this.hide():this.show()}show(){if(this._isTransitioning||e(this._element).hasClass(h.SHOW))return;let t,n;if(this._parent&&0===(t=[].slice.call(this._parent.querySelectorAll(_.ACTIVES)).filter(e=>e.getAttribute("data-parent")===this._config.parent)).length&&(t=null),t&&(n=e(t).not(this._selector).data(i))&&n._isTransitioning)return;const s=e.Event(g.SHOW);if(e(this._element).trigger(s),s.isDefaultPrevented())return;t&&(d._jQueryInterface.call(e(t).not(this._selector),"hide"),n||e(t).data(i,null));const l=this._getDimension();e(this._element).removeClass(h.COLLAPSE).addClass(h.COLLAPSING),this._element.style[l]=0,this._triggerArray.length&&e(this._triggerArray).removeClass(h.COLLAPSED).attr("aria-expanded",!0),this.setTransitioning(!0);const r=()=>{e(this._element).removeClass(h.COLLAPSING).addClass(h.COLLAPSE).addClass(h.SHOW),this._element.style[l]="",this.setTransitioning(!1),e(this._element).trigger(g.SHOWN)},a=`scroll${l[0].toUpperCase()+l.slice(1)}`,o=Util.getTransitionDurationFromElement(this._element);e(this._element).one(Util.TRANSITION_END,r).emulateTransitionEnd(o),this._element.style[l]=`${this._element[a]}px`}hide(){if(this._isTransitioning||!e(this._element).hasClass(h.SHOW))return;const t=e.Event(g.HIDE);if(e(this._element).trigger(t),t.isDefaultPrevented())return;const n=this._getDimension();this._element.style[n]=`${this._element.getBoundingClientRect()[n]}px`,Util.reflow(this._element),e(this._element).addClass(h.COLLAPSING).removeClass(h.COLLAPSE).removeClass(h.SHOW);const i=this._triggerArray.length;if(i>0)for(let t=0;t<i;t++){const n=this._triggerArray[t],i=Util.getSelectorFromElement(n);if(null!==i){e([].slice.call(document.querySelectorAll(i))).hasClass(h.SHOW)||e(n).addClass(h.COLLAPSED).attr("aria-expanded",!1)}}this.setTransitioning(!0);const s=()=>{this.setTransitioning(!1),e(this._element).removeClass(h.COLLAPSING).addClass(h.COLLAPSE).trigger(g.HIDDEN)};this._element.style[n]="";const l=Util.getTransitionDurationFromElement(this._element);e(this._element).one(Util.TRANSITION_END,s).emulateTransitionEnd(l)}setTransitioning(e){this._isTransitioning=e}dispose(){e.removeData(this._element,i),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null}_getConfig(e){return(e={...a,...e}).toggle=Boolean(e.toggle),Util.typeCheckConfig(t,e,o),e}_getDimension(){return e(this._element).hasClass(c.WIDTH)?c.WIDTH:c.HEIGHT}_getParent(){let t=null;Util.isElement(this._config.parent)?(t=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(t=this._config.parent[0])):t=document.querySelector(this._config.parent);const n=`[data-toggle="collapse"][data-parent="${this._config.parent}"]`,i=[].slice.call(t.querySelectorAll(n));return e(i).each((e,t)=>{this._addAriaAndCollapsedClass(d._getTargetFromElement(t),[t])}),t}_addAriaAndCollapsedClass(t,n){if(t){const i=e(t).hasClass(h.SHOW);n.length&&e(n).toggleClass(h.COLLAPSED,!i).attr("aria-expanded",i)}}static _getTargetFromElement(e){const t=Util.getSelectorFromElement(e);return t?document.querySelector(t):null}static _jQueryInterface(t){return this.each(function(){const n=e(this);let s=n.data(i);const l={...a,...n.data(),..."object"==typeof t&&t?t:{}};if(!s&&l.toggle&&/show|hide/.test(t)&&(l.toggle=!1),s||(s=new d(this,l),n.data(i,s)),"string"==typeof t){if("undefined"==typeof s[t])throw new TypeError(`No method named "${t}"`);s[t]()}})}}return e(document).on(g.CLICK_DATA_API,_.DATA_TOGGLE,function(t){"A"===t.currentTarget.tagName&&t.preventDefault();const n=e(this),s=Util.getSelectorFromElement(this),l=[].slice.call(document.querySelectorAll(s));e(l).each(function(){const t=e(this),s=t.data(i)?"toggle":n.data();d._jQueryInterface.call(t,s)})}),e.fn[t]=d._jQueryInterface,e.fn[t].Constructor=d,e.fn[t].noConflict=function(){return e.fn[t]=r,d._jQueryInterface},d})($);export default Collapse;