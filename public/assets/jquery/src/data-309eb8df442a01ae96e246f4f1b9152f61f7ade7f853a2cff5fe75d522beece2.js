define(["./core","./core/access","./core/camelCase","./data/var/dataPriv","./data/var/dataUser"],function(e,t,n,a,r){"use strict";function i(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:u.test(e)?JSON.parse(e):e)}function s(e,t,n){var a;if(n===undefined&&1===e.nodeType)if(a="data-"+t.replace(c,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(a))){try{n=i(n)}catch(s){}r.set(e,t,n)}else n=undefined;return n}var u=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,c=/[A-Z]/g;return e.extend({hasData:function(e){return r.hasData(e)||a.hasData(e)},data:function(e,t,n){return r.access(e,t,n)},removeData:function(e,t){r.remove(e,t)},_data:function(e,t,n){return a.access(e,t,n)},_removeData:function(e,t){a.remove(e,t)}}),e.fn.extend({data:function(e,i){var u,c,f,o=this[0],d=o&&o.attributes;if(e===undefined){if(this.length&&(f=r.get(o),1===o.nodeType&&!a.get(o,"hasDataAttrs"))){for(u=d.length;u--;)d[u]&&0===(c=d[u].name).indexOf("data-")&&(c=n(c.slice(5)),s(o,c,f[c]));a.set(o,"hasDataAttrs",!0)}return f}return"object"==typeof e?this.each(function(){r.set(this,e)}):t(this,function(t){var n;if(o&&t===undefined)return(n=r.get(o,e))!==undefined?n:(n=s(o,e))!==undefined?n:void 0;this.each(function(){r.set(this,e,t)})},null,i,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){r.remove(this,e)})}}),e});