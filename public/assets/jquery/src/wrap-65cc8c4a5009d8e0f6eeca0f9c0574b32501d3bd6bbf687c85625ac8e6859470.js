define(["./core","./var/isFunction","./core/init","./manipulation","./traversing"],function(t,n){"use strict";return t.fn.extend({wrapAll:function(i){var e;return this[0]&&(n(i)&&(i=i.call(this[0])),e=t(i,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&e.insertBefore(this[0]),e.map(function(){for(var t=this;t.firstElementChild;)t=t.firstElementChild;return t}).append(this)),this},wrapInner:function(i){return n(i)?this.each(function(n){t(this).wrapInner(i.call(this,n))}):this.each(function(){var n=t(this),e=n.contents();e.length?e.wrapAll(i):n.append(i)})},wrap:function(i){var e=n(i);return this.each(function(n){t(this).wrapAll(e?i.call(this,n):i)})},unwrap:function(n){return this.parent(n).not("body").each(function(){t(this).replaceWith(this.childNodes)}),this}}),t});