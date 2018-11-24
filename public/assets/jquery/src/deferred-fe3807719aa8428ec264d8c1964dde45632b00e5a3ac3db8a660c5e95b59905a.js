define(["./core","./var/isFunction","./var/slice","./callbacks"],function(e,n,t){"use strict";function r(e){return e}function o(e){throw e}function i(e,t,r,o){var i;try{e&&n(i=e.promise)?i.call(e).done(t).fail(r):e&&n(i=e.then)?i.call(e,t,r):t.apply(undefined,[e].slice(o))}catch(e){r.apply(undefined,[e])}}return e.extend({Deferred:function(t){var i=[["notify","progress",e.Callbacks("memory"),e.Callbacks("memory"),2],["resolve","done",e.Callbacks("once memory"),e.Callbacks("once memory"),0,"resolved"],["reject","fail",e.Callbacks("once memory"),e.Callbacks("once memory"),1,"rejected"]],c="pending",a={state:function(){return c},always:function(){return l.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var t=arguments;return e.Deferred(function(r){e.each(i,function(e,o){var i=n(t[o[4]])&&t[o[4]];l[o[1]](function(){var e=i&&i.apply(this,arguments);e&&n(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[o[0]+"With"](this,i?[e]:arguments)})}),t=null}).promise()},then:function(t,c,a){function l(t,i,c,a){return function(){var u=this,s=arguments,d=function(){var e,d;if(!(t<f)){if((e=c.apply(u,s))===i.promise())throw new TypeError("Thenable self-resolution");d=e&&("object"==typeof e||"function"==typeof e)&&e.then,n(d)?a?d.call(e,l(f,i,r,a),l(f,i,o,a)):(f++,d.call(e,l(f,i,r,a),l(f,i,o,a),l(f,i,r,i.notifyWith))):(c!==r&&(u=undefined,s=[e]),(a||i.resolveWith)(u,s))}},h=a?d:function(){try{d()}catch(n){e.Deferred.exceptionHook&&e.Deferred.exceptionHook(n,h.stackTrace),t+1>=f&&(c!==o&&(u=undefined,s=[n]),i.rejectWith(u,s))}};t?h():(e.Deferred.getStackHook&&(h.stackTrace=e.Deferred.getStackHook()),window.setTimeout(h))}}var f=0;return e.Deferred(function(e){i[0][3].add(l(0,e,n(a)?a:r,e.notifyWith)),i[1][3].add(l(0,e,n(t)?t:r)),i[2][3].add(l(0,e,n(c)?c:o))}).promise()},promise:function(n){return null!=n?e.extend(n,a):a}},l={};return e.each(i,function(e,n){var t=n[2],r=n[5];a[n[1]]=t.add,r&&t.add(function(){c=r},i[3-e][2].disable,i[3-e][3].disable,i[0][2].lock,i[0][3].lock),t.add(n[3].fire),l[n[0]]=function(){return l[n[0]+"With"](this===l?undefined:this,arguments),this},l[n[0]+"With"]=t.fireWith}),a.promise(l),t&&t.call(l,l),l},when:function(r){var o=arguments.length,c=o,a=Array(c),l=t.call(arguments),f=e.Deferred(),u=function(e){return function(n){a[e]=this,l[e]=arguments.length>1?t.call(arguments):n,--o||f.resolveWith(a,l)}};if(o<=1&&(i(r,f.done(u(c)).resolve,f.reject,!o),"pending"===f.state()||n(l[c]&&l[c].then)))return f.then();for(;c--;)i(l[c],u(c),f.reject);return f.promise()}}),e});