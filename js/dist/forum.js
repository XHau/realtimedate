module.exports=function(t){var r={};function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var o in t)e.d(n,o,function(r){return t[r]}.bind(null,o));return n},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.p="",e(e.s=4)}([function(t,r){t.exports=xhau.core.compat.app},function(t,r){t.exports=xhau.core.compat["utils/humanTime"]},function(t,r,e){t.exports=function(){"use strict";return function(t,r,e){t=t||{};var n=r.prototype,o={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};e.en.relativeTime=o;var u=function(r,n,u,a){for(var i,d,s,l=u.$locale().relativeTime||o,f=t.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],c=f.length,m=0;m<c;m+=1){var h=f[m];h.d&&(i=a?e(r).diff(u,h.d,!0):u.diff(r,h.d,!0));var y=(t.rounding||Math.round)(Math.abs(i));if(s=i>0,y<=h.r||!h.r){y<=1&&m>0&&(h=f[m-1]);var p=l[h.l];d="string"==typeof p?p.replace("%d",y):p(y,n,h.l,s);break}}if(n)return d;var v=s?l.future:l.past;return"function"==typeof v?v(d):v.replace("%s",d)};n.to=function(t,r){return u(t,r,this,!0)},n.from=function(t,r){return u(t,r,this)};var a=function(t){return t.$u?e.utc():e()};n.toNow=function(t){return this.to(a(this),t)},n.fromNow=function(t){return this.from(a(this),t)}}}()},function(t,r,e){t.exports=function(){"use strict";return function(t,r,e){e.updateLocale=function(t,r){var n=e.Ls[t];if(n)return(r?Object.keys(r):[]).forEach((function(t){n[t]=r[t]})),n}}}()},function(t,r,e){"use strict";e.r(r);var n=e(0),o=e.n(n),u=e(1),a=e.n(u),i=e(2),d=e.n(i),s=e(3),l=e.n(s);o.a.initializers.add("xhau-realtimedate",(function(){var t={thresholds:[{l:"s",r:59,d:"second"},{l:"ss",r:10},{l:"m",r:1},{l:"mm",r:59,d:"minute"},{l:"h",r:1},{l:"hh",r:23,d:"hour"},{l:"d",r:1},{l:"dd",r:29,d:"day"},{l:"M",r:1},{l:"MM",r:11,d:"month"},{l:"y"},{l:"yy",d:"year"}],rounding:Math.round};function r(){$("[data-humantime]").each((function(){var t=$(this),r=a()(t.attr("datetime"));t.html(r)}))}dayjs.extend(d.a,t),dayjs.extend(l.a),dayjs.updateLocale("en",{relativeTime:{future:"trong %s",past:"%s trước",s:"%d giây",ss:"một giây",m:"một phút",mm:"%d phút",h:"một giờ",hh:"%d giờ",d:"một ngày",dd:"%d ngày",M:"một tháng",MM:"%d tháng",y:"một năm",yy:"%d năm"}}),$(document).ready((function(){setInterval(r,1e3)}))}))}]);
//# sourceMappingURL=forum.js.map