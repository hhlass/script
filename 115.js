/*
FileBall 挂载 115

*/
!function(n){"use strict";function d(n,t){var r=(65535&n)+(65535&t);return(n>>16)+(t>>16)+(r>>16)<<16|65535&r}function f(n,t,r,e,o,u){return d((c=d(d(t,n),d(e,u)))<<(f=o)|c>>>32-f,r);var c,f}function l(n,t,r,e,o,u,c){return f(t&r|~t&e,n,t,o,u,c)}function v(n,t,r,e,o,u,c){return f(t&e|r&~e,n,t,o,u,c)}function g(n,t,r,e,o,u,c){return f(t^r^e,n,t,o,u,c)}function m(n,t,r,e,o,u,c){return f(r^(t|~e),n,t,o,u,c)}function i(n,t){var r,e,o,u;n[t>>5]|=128<<t%32,n[14+(t+64>>>9<<4)]=t;for(var c=1732584193,f=-271733879,i=-1732584194,a=271733878,h=0;h<n.length;h+=16)c=l(r=c,e=f,o=i,u=a,n[h],7,-680876936),a=l(a,c,f,i,n[h+1],12,-389564586),i=l(i,a,c,f,n[h+2],17,606105819),f=l(f,i,a,c,n[h+3],22,-1044525330),c=l(c,f,i,a,n[h+4],7,-176418897),a=l(a,c,f,i,n[h+5],12,1200080426),i=l(i,a,c,f,n[h+6],17,-1473231341),f=l(f,i,a,c,n[h+7],22,-45705983),c=l(c,f,i,a,n[h+8],7,1770035416),a=l(a,c,f,i,n[h+9],12,-1958414417),i=l(i,a,c,f,n[h+10],17,-42063),f=l(f,i,a,c,n[h+11],22,-1990404162),c=l(c,f,i,a,n[h+12],7,1804603682),a=l(a,c,f,i,n[h+13],12,-40341101),i=l(i,a,c,f,n[h+14],17,-1502002290),c=v(c,f=l(f,i,a,c,n[h+15],22,1236535329),i,a,n[h+1],5,-165796510),a=v(a,c,f,i,n[h+6],9,-1069501632),i=v(i,a,c,f,n[h+11],14,643717713),f=v(f,i,a,c,n[h],20,-373897302),c=v(c,f,i,a,n[h+5],5,-701558691),a=v(a,c,f,i,n[h+10],9,38016083),i=v(i,a,c,f,n[h+15],14,-660478335),f=v(f,i,a,c,n[h+4],20,-405537848),c=v(c,f,i,a,n[h+9],5,568446438),a=v(a,c,f,i,n[h+14],9,-1019803690),i=v(i,a,c,f,n[h+3],14,-187363961),f=v(f,i,a,c,n[h+8],20,1163531501),c=v(c,f,i,a,n[h+13],5,-1444681467),a=v(a,c,f,i,n[h+2],9,-51403784),i=v(i,a,c,f,n[h+7],14,1735328473),c=g(c,f=v(f,i,a,c,n[h+12],20,-1926607734),i,a,n[h+5],4,-378558),a=g(a,c,f,i,n[h+8],11,-2022574463),i=g(i,a,c,f,n[h+11],16,1839030562),f=g(f,i,a,c,n[h+14],23,-35309556),c=g(c,f,i,a,n[h+1],4,-1530992060),a=g(a,c,f,i,n[h+4],11,1272893353),i=g(i,a,c,f,n[h+7],16,-155497632),f=g(f,i,a,c,n[h+10],23,-1094730640),c=g(c,f,i,a,n[h+13],4,681279174),a=g(a,c,f,i,n[h],11,-358537222),i=g(i,a,c,f,n[h+3],16,-722521979),f=g(f,i,a,c,n[h+6],23,76029189),c=g(c,f,i,a,n[h+9],4,-640364487),a=g(a,c,f,i,n[h+12],11,-421815835),i=g(i,a,c,f,n[h+15],16,530742520),c=m(c,f=g(f,i,a,c,n[h+2],23,-995338651),i,a,n[h],6,-198630844),a=m(a,c,f,i,n[h+7],10,1126891415),i=m(i,a,c,f,n[h+14],15,-1416354905),f=m(f,i,a,c,n[h+5],21,-57434055),c=m(c,f,i,a,n[h+12],6,1700485571),a=m(a,c,f,i,n[h+3],10,-1894986606),i=m(i,a,c,f,n[h+10],15,-1051523),f=m(f,i,a,c,n[h+1],21,-2054922799),c=m(c,f,i,a,n[h+8],6,1873313359),a=m(a,c,f,i,n[h+15],10,-30611744),i=m(i,a,c,f,n[h+6],15,-1560198380),f=m(f,i,a,c,n[h+13],21,1309151649),c=m(c,f,i,a,n[h+4],6,-145523070),a=m(a,c,f,i,n[h+11],10,-1120210379),i=m(i,a,c,f,n[h+2],15,718787259),f=m(f,i,a,c,n[h+9],21,-343485551),c=d(c,r),f=d(f,e),i=d(i,o),a=d(a,u);return[c,f,i,a]}function a(n){for(var t="",r=32*n.length,e=0;e<r;e+=8)t+=String.fromCharCode(n[e>>5]>>>e%32&255);return t}function h(n){var t=[];for(t[(n.length>>2)-1]=void 0,e=0;e<t.length;e+=1)t[e]=0;for(var r=8*n.length,e=0;e<r;e+=8)t[e>>5]|=(255&n.charCodeAt(e/8))<<e%32;return t}function e(n){for(var t,r="0123456789abcdef",e="",o=0;o<n.length;o+=1)t=n.charCodeAt(o),e+=r.charAt(t>>>4&15)+r.charAt(15&t);return e}function r(n){return unescape(encodeURIComponent(n))}function o(n){return a(i(h(t=r(n)),8*t.length));var t}function u(n,t){return function(n,t){var r,e,o=h(n),u=[],c=[];for(u[15]=c[15]=void 0,16<o.length&&(o=i(o,8*n.length)),r=0;r<16;r+=1)u[r]=909522486^o[r],c[r]=1549556828^o[r];return e=i(u.concat(h(t)),512+8*t.length),a(i(c.concat(e),640))}(r(n),r(t))}function t(n,t,r){return t?r?u(t,n):e(u(t,n)):r?o(n):e(o(n))}"function"==typeof define&&define.amd?define(function(){return t}):"object"==typeof module&&module.exports?module.exports=t:n.md5=t}(this);
//# sourceMappingURL=md5.min.js.map

var bigInt=function(t){"use strict";var e=1e7,r=9007199254740992,o=f(r),n="0123456789abcdefghijklmnopqrstuvwxyz",i="function"==typeof BigInt;function u(t,e,r,o){return void 0===t?u[0]:void 0!==e&&(10!=+e||r)?_(t,e,r,o):K(t)}function p(t,e){this.value=t,this.sign=e,this.isSmall=!1}function a(t){this.value=t,this.sign=t<0,this.isSmall=!0}function s(t){this.value=t}function l(t){return-r<t&&t<r}function f(t){return t<1e7?[t]:t<1e14?[t%1e7,Math.floor(t/1e7)]:[t%1e7,Math.floor(t/1e7)%1e7,Math.floor(t/1e14)]}function v(t){h(t);var r=t.length;if(r<4&&A(t,o)<0)switch(r){case 0:return 0;case 1:return t[0];case 2:return t[0]+t[1]*e;default:return t[0]+(t[1]+t[2]*e)*e}return t}function h(t){for(var e=t.length;0===t[--e];);t.length=e+1}function y(t){for(var e=new Array(t),r=-1;++r<t;)e[r]=0;return e}function g(t){return t>0?Math.floor(t):Math.ceil(t)}function c(t,r){var o,n,i=t.length,u=r.length,p=new Array(i),a=0,s=e;for(n=0;n<u;n++)a=(o=t[n]+r[n]+a)>=s?1:0,p[n]=o-a*s;for(;n<i;)a=(o=t[n]+a)===s?1:0,p[n++]=o-a*s;return a>0&&p.push(a),p}function m(t,e){return t.length>=e.length?c(t,e):c(e,t)}function d(t,r){var o,n,i=t.length,u=new Array(i),p=e;for(n=0;n<i;n++)o=t[n]-p+r,r=Math.floor(o/p),u[n]=o-r*p,r+=1;for(;r>0;)u[n++]=r%p,r=Math.floor(r/p);return u}function b(t,r){var o,n,i=t.length,u=r.length,p=new Array(i),a=0,s=e;for(o=0;o<u;o++)(n=t[o]-a-r[o])<0?(n+=s,a=1):a=0,p[o]=n;for(o=u;o<i;o++){if(!((n=t[o]-a)<0)){p[o++]=n;break}n+=s,p[o]=n}for(;o<i;o++)p[o]=t[o];return h(p),p}function w(t,r,o){var n,i,u=t.length,s=new Array(u),l=-r,f=e;for(n=0;n<u;n++)i=t[n]+l,l=Math.floor(i/f),i%=f,s[n]=i<0?i+f:i;return"number"==typeof(s=v(s))?(o&&(s=-s),new a(s)):new p(s,o)}function S(t,r){var o,n,i,u,p=t.length,a=r.length,s=y(p+a),l=e;for(i=0;i<p;++i){u=t[i];for(var f=0;f<a;++f)o=u*r[f]+s[i+f],n=Math.floor(o/l),s[i+f]=o-n*l,s[i+f+1]+=n}return h(s),s}function I(t,r){var o,n,i=t.length,u=new Array(i),p=e,a=0;for(n=0;n<i;n++)o=t[n]*r+a,a=Math.floor(o/p),u[n]=o-a*p;for(;a>0;)u[n++]=a%p,a=Math.floor(a/p);return u}function q(t,e){for(var r=[];e-- >0;)r.push(0);return r.concat(t)}function M(t,e){var r=Math.max(t.length,e.length);if(r<=30)return S(t,e);r=Math.ceil(r/2);var o=t.slice(r),n=t.slice(0,r),i=e.slice(r),u=e.slice(0,r),p=M(n,u),a=M(o,i),s=M(m(n,o),m(u,i)),l=m(m(p,q(b(b(s,p),a),r)),q(a,2*r));return h(l),l}function N(t,r,o){return new p(t<e?I(r,t):S(r,f(t)),o)}function E(t){var r,o,n,i,u=t.length,p=y(u+u),a=e;for(n=0;n<u;n++){o=0-(i=t[n])*i;for(var s=n;s<u;s++)r=i*t[s]*2+p[n+s]+o,o=Math.floor(r/a),p[n+s]=r-o*a;p[n+u]=o}return h(p),p}function O(t,e){var r,o,n,i,u=t.length,p=y(u);for(n=0,r=u-1;r>=0;--r)n=(i=1e7*n+t[r])-(o=g(i/e))*e,p[r]=0|o;return[p,0|n]}function B(t,r){var o,n=K(r);if(i)return[new s(t.value/n.value),new s(t.value%n.value)];var l,c=t.value,m=n.value;if(0===m)throw new Error("Cannot divide by zero");if(t.isSmall)return n.isSmall?[new a(g(c/m)),new a(c%m)]:[u[0],t];if(n.isSmall){if(1===m)return[t,u[0]];if(-1==m)return[t.negate(),u[0]];var d=Math.abs(m);if(d<e){l=v((o=O(c,d))[0]);var w=o[1];return t.sign&&(w=-w),"number"==typeof l?(t.sign!==n.sign&&(l=-l),[new a(l),new a(w)]):[new p(l,t.sign!==n.sign),new a(w)]}m=f(d)}var S=A(c,m);if(-1===S)return[u[0],t];if(0===S)return[u[t.sign===n.sign?1:-1],u[0]];o=c.length+m.length<=200?function(t,r){var o,n,i,u,p,a,s,l=t.length,f=r.length,h=e,g=y(r.length),c=r[f-1],m=Math.ceil(h/(2*c)),d=I(t,m),b=I(r,m);for(d.length<=l&&d.push(0),b.push(0),c=b[f-1],n=l-f;n>=0;n--){for(o=h-1,d[n+f]!==c&&(o=Math.floor((d[n+f]*h+d[n+f-1])/c)),i=0,u=0,a=b.length,p=0;p<a;p++)i+=o*b[p],s=Math.floor(i/h),u+=d[n+p]-(i-s*h),i=s,u<0?(d[n+p]=u+h,u=-1):(d[n+p]=u,u=0);for(;0!==u;){for(o-=1,i=0,p=0;p<a;p++)(i+=d[n+p]-h+b[p])<0?(d[n+p]=i+h,i=0):(d[n+p]=i,i=1);u+=i}g[n]=o}return d=O(d,m)[0],[v(g),v(d)]}(c,m):function(t,r){for(var o,n,i,u,p,a=t.length,s=r.length,l=[],f=[],y=e;a;)if(f.unshift(t[--a]),h(f),A(f,r)<0)l.push(0);else{i=f[(n=f.length)-1]*y+f[n-2],u=r[s-1]*y+r[s-2],n>s&&(i=(i+1)*y),o=Math.ceil(i/u);do{if(A(p=I(r,o),f)<=0)break;o--}while(o);l.push(o),f=b(f,p)}return l.reverse(),[v(l),v(f)]}(c,m),l=o[0];var q=t.sign!==n.sign,M=o[1],N=t.sign;return"number"==typeof l?(q&&(l=-l),l=new a(l)):l=new p(l,q),"number"==typeof M?(N&&(M=-M),M=new a(M)):M=new p(M,N),[l,M]}function A(t,e){if(t.length!==e.length)return t.length>e.length?1:-1;for(var r=t.length-1;r>=0;r--)if(t[r]!==e[r])return t[r]>e[r]?1:-1;return 0}function P(t){var e=t.abs();return!e.isUnit()&&(!!(e.equals(2)||e.equals(3)||e.equals(5))||!(e.isEven()||e.isDivisibleBy(3)||e.isDivisibleBy(5))&&(!!e.lesser(49)||void 0))}function Z(t,e){for(var r,o,n,i=t.prev(),u=i,p=0;u.isEven();)u=u.divide(2),p++;t:for(o=0;o<e.length;o++)if(!t.lesser(e[o])&&!(n=bigInt(e[o]).modPow(u,t)).isUnit()&&!n.equals(i)){for(r=p-1;0!=r;r--){if((n=n.square().mod(t)).isUnit())return!1;if(n.equals(i))continue t}return!1}return!0}p.prototype=Object.create(u.prototype),a.prototype=Object.create(u.prototype),s.prototype=Object.create(u.prototype),p.prototype.add=function(t){var e=K(t);if(this.sign!==e.sign)return this.subtract(e.negate());var r=this.value,o=e.value;return e.isSmall?new p(d(r,Math.abs(o)),this.sign):new p(m(r,o),this.sign)},p.prototype.plus=p.prototype.add,a.prototype.add=function(t){var e=K(t),r=this.value;if(r<0!==e.sign)return this.subtract(e.negate());var o=e.value;if(e.isSmall){if(l(r+o))return new a(r+o);o=f(Math.abs(o))}return new p(d(o,Math.abs(r)),r<0)},a.prototype.plus=a.prototype.add,s.prototype.add=function(t){return new s(this.value+K(t).value)},s.prototype.plus=s.prototype.add,p.prototype.subtract=function(t){var e=K(t);if(this.sign!==e.sign)return this.add(e.negate());var r=this.value,o=e.value;return e.isSmall?w(r,Math.abs(o),this.sign):function(t,e,r){var o;return A(t,e)>=0?o=b(t,e):(o=b(e,t),r=!r),"number"==typeof(o=v(o))?(r&&(o=-o),new a(o)):new p(o,r)}(r,o,this.sign)},p.prototype.minus=p.prototype.subtract,a.prototype.subtract=function(t){var e=K(t),r=this.value;if(r<0!==e.sign)return this.add(e.negate());var o=e.value;return e.isSmall?new a(r-o):w(o,Math.abs(r),r>=0)},a.prototype.minus=a.prototype.subtract,s.prototype.subtract=function(t){return new s(this.value-K(t).value)},s.prototype.minus=s.prototype.subtract,p.prototype.negate=function(){return new p(this.value,!this.sign)},a.prototype.negate=function(){var t=this.sign,e=new a(-this.value);return e.sign=!t,e},s.prototype.negate=function(){return new s(-this.value)},p.prototype.abs=function(){return new p(this.value,!1)},a.prototype.abs=function(){return new a(Math.abs(this.value))},s.prototype.abs=function(){return new s(this.value>=0?this.value:-this.value)},p.prototype.multiply=function(t){var r,o,n,i=K(t),a=this.value,s=i.value,l=this.sign!==i.sign;if(i.isSmall){if(0===s)return u[0];if(1===s)return this;if(-1===s)return this.negate();if((r=Math.abs(s))<e)return new p(I(a,r),l);s=f(r)}return o=a.length,n=s.length,new p(-.012*o-.012*n+15e-6*o*n>0?M(a,s):S(a,s),l)},p.prototype.times=p.prototype.multiply,a.prototype._multiplyBySmall=function(t){return l(t.value*this.value)?new a(t.value*this.value):N(Math.abs(t.value),f(Math.abs(this.value)),this.sign!==t.sign)},p.prototype._multiplyBySmall=function(t){return 0===t.value?u[0]:1===t.value?this:-1===t.value?this.negate():N(Math.abs(t.value),this.value,this.sign!==t.sign)},a.prototype.multiply=function(t){return K(t)._multiplyBySmall(this)},a.prototype.times=a.prototype.multiply,s.prototype.multiply=function(t){return new s(this.value*K(t).value)},s.prototype.times=s.prototype.multiply,p.prototype.square=function(){return new p(E(this.value),!1)},a.prototype.square=function(){var t=this.value*this.value;return l(t)?new a(t):new p(E(f(Math.abs(this.value))),!1)},s.prototype.square=function(t){return new s(this.value*this.value)},p.prototype.divmod=function(t){var e=B(this,t);return{quotient:e[0],remainder:e[1]}},s.prototype.divmod=a.prototype.divmod=p.prototype.divmod,p.prototype.divide=function(t){return B(this,t)[0]},s.prototype.over=s.prototype.divide=function(t){return new s(this.value/K(t).value)},a.prototype.over=a.prototype.divide=p.prototype.over=p.prototype.divide,p.prototype.mod=function(t){return B(this,t)[1]},s.prototype.mod=s.prototype.remainder=function(t){return new s(this.value%K(t).value)},a.prototype.remainder=a.prototype.mod=p.prototype.remainder=p.prototype.mod,p.prototype.pow=function(t){var e,r,o,n=K(t),i=this.value,p=n.value;if(0===p)return u[1];if(0===i)return u[0];if(1===i)return u[1];if(-1===i)return n.isEven()?u[1]:u[-1];if(n.sign)return u[0];if(!n.isSmall)throw new Error("The exponent "+n.toString()+" is too large.");if(this.isSmall&&l(e=Math.pow(i,p)))return new a(g(e));for(r=this,o=u[1];!0&p&&(o=o.times(r),--p),0!==p;)p/=2,r=r.square();return o},a.prototype.pow=p.prototype.pow,s.prototype.pow=function(t){var e=K(t),r=this.value,o=e.value,n=BigInt(0),i=BigInt(1),p=BigInt(2);if(o===n)return u[1];if(r===n)return u[0];if(r===i)return u[1];if(r===BigInt(-1))return e.isEven()?u[1]:u[-1];if(e.isNegative())return new s(n);for(var a=this,l=u[1];(o&i)===i&&(l=l.times(a),--o),o!==n;)o/=p,a=a.square();return l},p.prototype.modPow=function(t,e){if(t=K(t),(e=K(e)).isZero())throw new Error("Cannot take modPow with modulus 0");var r=u[1],o=this.mod(e);for(t.isNegative()&&(t=t.multiply(u[-1]),o=o.modInv(e));t.isPositive();){if(o.isZero())return u[0];t.isOdd()&&(r=r.multiply(o).mod(e)),t=t.divide(2),o=o.square().mod(e)}return r},s.prototype.modPow=a.prototype.modPow=p.prototype.modPow,p.prototype.compareAbs=function(t){var e=K(t),r=this.value,o=e.value;return e.isSmall?1:A(r,o)},a.prototype.compareAbs=function(t){var e=K(t),r=Math.abs(this.value),o=e.value;return e.isSmall?r===(o=Math.abs(o))?0:r>o?1:-1:-1},s.prototype.compareAbs=function(t){var e=this.value,r=K(t).value;return(e=e>=0?e:-e)===(r=r>=0?r:-r)?0:e>r?1:-1},p.prototype.compare=function(t){if(t===1/0)return-1;if(t===-1/0)return 1;var e=K(t),r=this.value,o=e.value;return this.sign!==e.sign?e.sign?1:-1:e.isSmall?this.sign?-1:1:A(r,o)*(this.sign?-1:1)},p.prototype.compareTo=p.prototype.compare,a.prototype.compare=function(t){if(t===1/0)return-1;if(t===-1/0)return 1;var e=K(t),r=this.value,o=e.value;return e.isSmall?r==o?0:r>o?1:-1:r<0!==e.sign?r<0?-1:1:r<0?1:-1},a.prototype.compareTo=a.prototype.compare,s.prototype.compare=function(t){if(t===1/0)return-1;if(t===-1/0)return 1;var e=this.value,r=K(t).value;return e===r?0:e>r?1:-1},s.prototype.compareTo=s.prototype.compare,p.prototype.equals=function(t){return 0===this.compare(t)},s.prototype.eq=s.prototype.equals=a.prototype.eq=a.prototype.equals=p.prototype.eq=p.prototype.equals,p.prototype.notEquals=function(t){return 0!==this.compare(t)},s.prototype.neq=s.prototype.notEquals=a.prototype.neq=a.prototype.notEquals=p.prototype.neq=p.prototype.notEquals,p.prototype.greater=function(t){return this.compare(t)>0},s.prototype.gt=s.prototype.greater=a.prototype.gt=a.prototype.greater=p.prototype.gt=p.prototype.greater,p.prototype.lesser=function(t){return this.compare(t)<0},s.prototype.lt=s.prototype.lesser=a.prototype.lt=a.prototype.lesser=p.prototype.lt=p.prototype.lesser,p.prototype.greaterOrEquals=function(t){return this.compare(t)>=0},s.prototype.geq=s.prototype.greaterOrEquals=a.prototype.geq=a.prototype.greaterOrEquals=p.prototype.geq=p.prototype.greaterOrEquals,p.prototype.lesserOrEquals=function(t){return this.compare(t)<=0},s.prototype.leq=s.prototype.lesserOrEquals=a.prototype.leq=a.prototype.lesserOrEquals=p.prototype.leq=p.prototype.lesserOrEquals,p.prototype.isEven=function(){return 0==(1&this.value[0])},a.prototype.isEven=function(){return 0==(1&this.value)},s.prototype.isEven=function(){return(this.value&BigInt(1))===BigInt(0)},p.prototype.isOdd=function(){return 1==(1&this.value[0])},a.prototype.isOdd=function(){return 1==(1&this.value)},s.prototype.isOdd=function(){return(this.value&BigInt(1))===BigInt(1)},p.prototype.isPositive=function(){return!this.sign},a.prototype.isPositive=function(){return this.value>0},s.prototype.isPositive=a.prototype.isPositive,p.prototype.isNegative=function(){return this.sign},a.prototype.isNegative=function(){return this.value<0},s.prototype.isNegative=a.prototype.isNegative,p.prototype.isUnit=function(){return!1},a.prototype.isUnit=function(){return 1===Math.abs(this.value)},s.prototype.isUnit=function(){return this.abs().value===BigInt(1)},p.prototype.isZero=function(){return!1},a.prototype.isZero=function(){return 0===this.value},s.prototype.isZero=function(){return this.value===BigInt(0)},p.prototype.isDivisibleBy=function(t){var e=K(t);return!e.isZero()&&(!!e.isUnit()||(0===e.compareAbs(2)?this.isEven():this.mod(e).isZero()))},s.prototype.isDivisibleBy=a.prototype.isDivisibleBy=p.prototype.isDivisibleBy,p.prototype.isPrime=function(e){var r=P(this);if(r!==t)return r;var o=this.abs(),n=o.bitLength();if(n<=64)return Z(o,[2,3,5,7,11,13,17,19,23,29,31,37]);for(var i=Math.log(2)*n.toJSNumber(),u=Math.ceil(!0===e?2*Math.pow(i,2):i),p=[],a=0;a<u;a++)p.push(bigInt(a+2));return Z(o,p)},s.prototype.isPrime=a.prototype.isPrime=p.prototype.isPrime,p.prototype.isProbablePrime=function(e,r){var o=P(this);if(o!==t)return o;for(var n=this.abs(),i=e===t?5:e,u=[],p=0;p<i;p++)u.push(bigInt.randBetween(2,n.minus(2),r));return Z(n,u)},s.prototype.isProbablePrime=a.prototype.isProbablePrime=p.prototype.isProbablePrime,p.prototype.modInv=function(t){for(var e,r,o,n=bigInt.zero,i=bigInt.one,u=K(t),p=this.abs();!p.isZero();)e=u.divide(p),r=n,o=u,n=i,u=p,i=r.subtract(e.multiply(i)),p=o.subtract(e.multiply(p));if(!u.isUnit())throw new Error(this.toString()+" and "+t.toString()+" are not co-prime");return-1===n.compare(0)&&(n=n.add(t)),this.isNegative()?n.negate():n},s.prototype.modInv=a.prototype.modInv=p.prototype.modInv,p.prototype.next=function(){var t=this.value;return this.sign?w(t,1,this.sign):new p(d(t,1),this.sign)},a.prototype.next=function(){var t=this.value;return t+1<r?new a(t+1):new p(o,!1)},s.prototype.next=function(){return new s(this.value+BigInt(1))},p.prototype.prev=function(){var t=this.value;return this.sign?new p(d(t,1),!0):w(t,1,this.sign)},a.prototype.prev=function(){var t=this.value;return t-1>-r?new a(t-1):new p(o,!0)},s.prototype.prev=function(){return new s(this.value-BigInt(1))};for(var x=[1];2*x[x.length-1]<=e;)x.push(2*x[x.length-1]);var J=x.length,L=x[J-1];function U(t){return Math.abs(t)<=e}function T(t,e,r){e=K(e);for(var o=t.isNegative(),n=e.isNegative(),i=o?t.not():t,u=n?e.not():e,p=0,a=0,s=null,l=null,f=[];!i.isZero()||!u.isZero();)p=(s=B(i,L))[1].toJSNumber(),o&&(p=L-1-p),a=(l=B(u,L))[1].toJSNumber(),n&&(a=L-1-a),i=s[0],u=l[0],f.push(r(p,a));for(var v=0!==r(o?1:0,n?1:0)?bigInt(-1):bigInt(0),h=f.length-1;h>=0;h-=1)v=v.multiply(L).add(bigInt(f[h]));return v}p.prototype.shiftLeft=function(t){var e=K(t).toJSNumber();if(!U(e))throw new Error(String(e)+" is too large for shifting.");if(e<0)return this.shiftRight(-e);var r=this;if(r.isZero())return r;for(;e>=J;)r=r.multiply(L),e-=J-1;return r.multiply(x[e])},s.prototype.shiftLeft=a.prototype.shiftLeft=p.prototype.shiftLeft,p.prototype.shiftRight=function(t){var e,r=K(t).toJSNumber();if(!U(r))throw new Error(String(r)+" is too large for shifting.");if(r<0)return this.shiftLeft(-r);for(var o=this;r>=J;){if(o.isZero()||o.isNegative()&&o.isUnit())return o;o=(e=B(o,L))[1].isNegative()?e[0].prev():e[0],r-=J-1}return(e=B(o,x[r]))[1].isNegative()?e[0].prev():e[0]},s.prototype.shiftRight=a.prototype.shiftRight=p.prototype.shiftRight,p.prototype.not=function(){return this.negate().prev()},s.prototype.not=a.prototype.not=p.prototype.not,p.prototype.and=function(t){return T(this,t,(function(t,e){return t&e}))},s.prototype.and=a.prototype.and=p.prototype.and,p.prototype.or=function(t){return T(this,t,(function(t,e){return t|e}))},s.prototype.or=a.prototype.or=p.prototype.or,p.prototype.xor=function(t){return T(this,t,(function(t,e){return t^e}))},s.prototype.xor=a.prototype.xor=p.prototype.xor;var j=1<<30;function C(t){var r=t.value,o="number"==typeof r?r|j:"bigint"==typeof r?r|BigInt(j):r[0]+r[1]*e|1073758208;return o&-o}function D(t,e){if(e.compareTo(t)<=0){var r=D(t,e.square(e)),o=r.p,n=r.e,i=o.multiply(e);return i.compareTo(t)<=0?{p:i,e:2*n+1}:{p:o,e:2*n}}return{p:bigInt(1),e:0}}function z(t,e){return t=K(t),e=K(e),t.greater(e)?t:e}function R(t,e){return t=K(t),e=K(e),t.lesser(e)?t:e}function k(t,e){if(t=K(t).abs(),e=K(e).abs(),t.equals(e))return t;if(t.isZero())return e;if(e.isZero())return t;for(var r,o,n=u[1];t.isEven()&&e.isEven();)r=R(C(t),C(e)),t=t.divide(r),e=e.divide(r),n=n.multiply(r);for(;t.isEven();)t=t.divide(C(t));do{for(;e.isEven();)e=e.divide(C(e));t.greater(e)&&(o=e,e=t,t=o),e=e.subtract(t)}while(!e.isZero());return n.isUnit()?t:t.multiply(n)}p.prototype.bitLength=function(){var t=this;return t.compareTo(bigInt(0))<0&&(t=t.negate().subtract(bigInt(1))),0===t.compareTo(bigInt(0))?bigInt(0):bigInt(D(t,bigInt(2)).e).add(bigInt(1))},s.prototype.bitLength=a.prototype.bitLength=p.prototype.bitLength;var _=function(t,e,r,o){r=r||n,t=String(t),o||(t=t.toLowerCase(),r=r.toLowerCase());var i,u=t.length,p=Math.abs(e),a={};for(i=0;i<r.length;i++)a[r[i]]=i;for(i=0;i<u;i++){if("-"!==(f=t[i])&&(f in a&&a[f]>=p)){if("1"===f&&1===p)continue;throw new Error(f+" is not a valid digit in base "+e+".")}}e=K(e);var s=[],l="-"===t[0];for(i=l?1:0;i<t.length;i++){var f;if((f=t[i])in a)s.push(K(a[f]));else{if("<"!==f)throw new Error(f+" is not a valid character");var v=i;do{i++}while(">"!==t[i]&&i<t.length);s.push(K(t.slice(v+1,i)))}}return $(s,e,l)};function $(t,e,r){var o,n=u[0],i=u[1];for(o=t.length-1;o>=0;o--)n=n.add(t[o].times(i)),i=i.times(e);return r?n.negate():n}function F(t,e){if((e=bigInt(e)).isZero()){if(t.isZero())return{value:[0],isNegative:!1};throw new Error("Cannot convert nonzero numbers to base 0.")}if(e.equals(-1)){if(t.isZero())return{value:[0],isNegative:!1};if(t.isNegative())return{value:[].concat.apply([],Array.apply(null,Array(-t.toJSNumber())).map(Array.prototype.valueOf,[1,0])),isNegative:!1};var r=Array.apply(null,Array(t.toJSNumber()-1)).map(Array.prototype.valueOf,[0,1]);return r.unshift([1]),{value:[].concat.apply([],r),isNegative:!1}}var o=!1;if(t.isNegative()&&e.isPositive()&&(o=!0,t=t.abs()),e.isUnit())return t.isZero()?{value:[0],isNegative:!1}:{value:Array.apply(null,Array(t.toJSNumber())).map(Number.prototype.valueOf,1),isNegative:o};for(var n,i=[],u=t;u.isNegative()||u.compareAbs(e)>=0;){n=u.divmod(e),u=n.quotient;var p=n.remainder;p.isNegative()&&(p=e.minus(p).abs(),u=u.next()),i.push(p.toJSNumber())}return i.push(u.toJSNumber()),{value:i.reverse(),isNegative:o}}function G(t,e,r){var o=F(t,e);return(o.isNegative?"-":"")+o.value.map((function(t){return function(t,e){return t<(e=e||n).length?e[t]:"<"+t+">"}(t,r)})).join("")}function H(t){if(l(+t)){var e=+t;if(e===g(e))return i?new s(BigInt(e)):new a(e);throw new Error("Invalid integer: "+t)}var r="-"===t[0];r&&(t=t.slice(1));var o=t.split(/e/i);if(o.length>2)throw new Error("Invalid integer: "+o.join("e"));if(2===o.length){var n=o[1];if("+"===n[0]&&(n=n.slice(1)),(n=+n)!==g(n)||!l(n))throw new Error("Invalid integer: "+n+" is not a valid exponent.");var u=o[0],f=u.indexOf(".");if(f>=0&&(n-=u.length-f-1,u=u.slice(0,f)+u.slice(f+1)),n<0)throw new Error("Cannot include negative exponent part for integers");t=u+=new Array(n+1).join("0")}if(!/^([0-9][0-9]*)$/.test(t))throw new Error("Invalid integer: "+t);if(i)return new s(BigInt(r?"-"+t:t));for(var v=[],y=t.length,c=y-7;y>0;)v.push(+t.slice(c,y)),(c-=7)<0&&(c=0),y-=7;return h(v),new p(v,r)}function K(t){return"number"==typeof t?function(t){if(i)return new s(BigInt(t));if(l(t)){if(t!==g(t))throw new Error(t+" is not an integer.");return new a(t)}return H(t.toString())}(t):"string"==typeof t?H(t):"bigint"==typeof t?new s(t):t}p.prototype.toArray=function(t){return F(this,t)},a.prototype.toArray=function(t){return F(this,t)},s.prototype.toArray=function(t){return F(this,t)},p.prototype.toString=function(e,r){if(e===t&&(e=10),10!==e)return G(this,e,r);for(var o,n=this.value,i=n.length,u=String(n[--i]);--i>=0;)o=String(n[i]),u+="0000000".slice(o.length)+o;return(this.sign?"-":"")+u},a.prototype.toString=function(e,r){return e===t&&(e=10),10!=e?G(this,e,r):String(this.value)},s.prototype.toString=a.prototype.toString,s.prototype.toJSON=p.prototype.toJSON=a.prototype.toJSON=function(){return this.toString()},p.prototype.valueOf=function(){return parseInt(this.toString(),10)},p.prototype.toJSNumber=p.prototype.valueOf,a.prototype.valueOf=function(){return this.value},a.prototype.toJSNumber=a.prototype.valueOf,s.prototype.valueOf=s.prototype.toJSNumber=function(){return parseInt(this.toString(),10)};for(var Q=0;Q<1e3;Q++)u[Q]=K(Q),Q>0&&(u[-Q]=K(-Q));return u.one=u[1],u.zero=u[0],u.minusOne=u[-1],u.max=z,u.min=R,u.gcd=k,u.lcm=function(t,e){return t=K(t).abs(),e=K(e).abs(),t.divide(k(t,e)).multiply(e)},u.isInstance=function(t){return t instanceof p||t instanceof a||t instanceof s},u.randBetween=function(t,r,o){t=K(t),r=K(r);var n=o||Math.random,i=R(t,r),p=z(t,r).subtract(i).add(1);if(p.isSmall)return i.add(Math.floor(n()*p));for(var a=F(p,e).value,s=[],l=!0,f=0;f<a.length;f++){var v=l?a[f]+(f+1<a.length?a[f+1]/e:0):e,h=g(n()*v);s.push(h),h<a[f]&&(l=!1)}return i.add(u.fromArray(s,e,!1))},u.fromArray=function(t,e,r){return $(t.map(K),K(e||10),r)},u}();"undefined"!=typeof module&&module.hasOwnProperty("exports")&&(module.exports=bigInt),"function"==typeof define&&define.amd&&define((function(){return bigInt}));

const tk = new ToolKit(`115_get_cookie`, `115CookieGet`, { httpApi: "" });
const new_rsa = new Tool115();
const cookieCacheKey = "115Cookie";
const cookieCache = tk.getVal(cookieCacheKey);

const g_kts = [
  240, 229, 105, 174, 191, 220, 191, 138, 26, 69, 232, 190, 125, 166, 115, 184,
  222, 143, 231, 196, 69, 218, 134, 196, 155, 100, 139, 20, 106, 180, 241, 170,
  56, 1, 53, 158, 38, 105, 44, 134, 0, 107, 79, 165, 54, 52, 98, 166, 42, 150,
  104, 24, 242, 74, 253, 189, 107, 151, 143, 77, 143, 137, 19, 183, 108, 142,
  147, 237, 14, 13, 72, 62, 215, 47, 136, 216, 254, 254, 126, 134, 80, 149, 79,
  209, 235, 131, 38, 52, 219, 102, 123, 156, 126, 157, 122, 129, 50, 234, 182,
  51, 222, 58, 169, 89, 52, 102, 59, 170, 186, 129, 96, 72, 185, 213, 129, 156,
  248, 108, 132, 119, 255, 84, 120, 38, 95, 190, 232, 30, 54, 159, 52, 128, 92,
  69, 44, 155, 118, 213, 27, 143, 204, 195, 184, 245,
];

const g_key_s = [0x29, 0x23, 0x21, 0x5e];

const g_key_l = [120, 6, 173, 76, 51, 134, 93, 24, 76, 1, 63, 70];

let url = $request.url;
let body = $request.body;
var myResponse = {
  status: "HTTP/1.1 200 OK",
};
!(async () => {
  let req = {
    url: `https://webapi.115.com/files?aid=1&cid=0&o=user_ptime&asc=0&offset=0&show_dir=1&limit=115&code=&scid=&snap=0&natsort=1&record_open_time=1&source=&format=json`,
    headers: { Cookie: cookieCache },
  };
  switch (url.match(/(auth|entry)\.cgi$/)?.[0]) {
    case "auth.cgi":
      obj = {
        success: true,
        data: {
          sid: "",
        },
      };
      myResponse.body = JSON.stringify(obj);
      $done(myResponse);
      break;
    case "entry.cgi":
      if (body.match("Delete&")) {
        //删除文件
        // console.log('entry - delete')
        console.log("delete - " + url + " - " + body);
        myResponse.url =
          "https://api-drive.mypikpak.com/drive/v1/files:batchTrash";
        myResponse.body = `{"ids":["${body.match(/path=([^&]+)/)[1]}"]}`;
        $done(myResponse);
      } else {
        //加载目录
        // console.log('entry - load dir')
        console.log("dir - " + url + " - " + body);
        let path = body.match(/folder_path=([^&]+)/)?.[1];
        let a = path
          ? ((req.url = req.url.replace("cid=0", `cid=${path}`)), "files")
          : "shares";
        items = (await http(req, "get")).data;
        tk.log(JSON.stringify(items));
        let shares = JSON.stringify(
          items.map((item) => {
            let path_data = {
              n: item.n,
              pc: item.pc,
              is_dir: !item.fid,
            };
            return {
              isdir: !item.fid,
              path: JSON.stringify(path_data),
              name: item.n,
              additional: { size: parseInt(item.s) },
            };
          })
        );
        tk.log(shares);
        myResponse.body = `{"success":true,"data":{"total":0,"offset":0,"${a}":${shares}}}`;
        $done(myResponse);
      }
      break;
    default:
      //加载文件
      // console.log('entry - load file')
      console.log("file - " + url + " - " + body);
      let fids = url.match("fbdownload")
        ? hex2str(url.match(/dlink=%22(.*)%22/)[1])
        : url.match(/path=(.*$)/)[1];
      console.log("fids - " + fids);
      let item = JSON.parse(fids);
      let downlaod_data = await download_detail(item);
      console.log(downlaod_data.url);
      myResponse.headers = { Location: downlaod_data.url };
      myResponse.status = "HTTP/1.1 302 OK";
      $done(myResponse);
  }
})();

function http(req, method = "get") {
  req["method"] = method;
  try {
    return new Promise((res) => {
      $task.fetch(req).then((resp) => {
        resp?.status === 401 ? res() : res(JSON.parse(resp.body));
      });
    });
  } catch (error) {
    tk.log("error " + error);
    return new Promise((res) => {
      res();
    });
  }
}

function m115_getkey(length, key) {
    var i;
    if (key != null) {
      return (function () {
        var j, ref, results;
        results = [];
        for (
          i = j = 0, ref = length;
          0 <= ref ? j < ref : j > ref;
          i = 0 <= ref ? ++j : --j
        ) {
          results.push(
            ((key[i] + g_kts[length * i]) & 0xff) ^
              g_kts[length * (length - 1 - i)]
          );
        }
        return results;
      })();
    }
    if (length === 12) {
      return g_key_l.slice(0);
    }
    return g_key_s.slice(0);
};

function xor115_enc(src, srclen, key, keylen) {
    var i, j, k, mod4, ref, ref1, ref2, ret;
    mod4 = srclen % 4;
    ret = [];
    if (mod4 !== 0) {
      for (
        i = j = 0, ref = mod4;
        0 <= ref ? j < ref : j > ref;
        i = 0 <= ref ? ++j : --j
      ) {
        ret.push(src[i] ^ key[i % keylen]);
      }
    }
    for (
      i = k = ref1 = mod4, ref2 = srclen;
      ref1 <= ref2 ? k < ref2 : k > ref2;
      i = ref1 <= ref2 ? ++k : --k
    ) {
      ret.push(src[i] ^ key[(i - mod4) % keylen]);
    }
    return ret;
};

function m115_sym_encode(src, srclen, key1, key2) {
    var k1, k2, ret;
    k1 = m115_getkey(4, key1);
    k2 = m115_getkey(12, key2);
    ret = xor115_enc(src, srclen, k1, 4);
    ret.reverse();
    ret = xor115_enc(ret, srclen, k2, 12);
    return ret;
};

function m115_sym_decode(src, srclen, key1, key2) {
    var k1, k2, ret;
    k1 = m115_getkey(4, key1);
    k2 = m115_getkey(12, key2);
    ret = xor115_enc(src, srclen, k2, 12);
    ret.reverse();
    ret = xor115_enc(ret, srclen, k1, 4);
    return ret;
};

function stringToBytes(s) {
    var i, j, ref, ret;
    ret = [];
    for (
      i = j = 0, ref = s.length;
      0 <= ref ? j < ref : j > ref;
      i = 0 <= ref ? ++j : --j
    ) {
      ret.push(s.charCodeAt(i));
    }
    return ret;
};

function bytesToString(b) {
    var i, j, len, ret;
    ret = "";
    for (j = 0, len = b.length; j < len; j++) {
      i = b[j];
      ret += String.fromCharCode(i);
    }
    return ret;
};

function m115_asym_encode(src, srclen) {
    var i, j, m, ref, ret;
    m = 128 - 11;
    ret = "";
    for (
      i = j = 0, ref = Math.floor((srclen + m - 1) / m);
      0 <= ref ? j < ref : j > ref;
      i = 0 <= ref ? ++j : --j
    ) {
      ret += new_rsa.encrypt(
        bytesToString(src.slice(i * m, Math.min((i + 1) * m, srclen)))
      );
    }
    return window.btoa(new_rsa.hex2a(ret));
};

function m115_asym_decode(src, srclen) {
    var i, j, m, ref, ret;
    m = 128;
    ret = "";
    for (
      i = j = 0, ref = Math.floor((srclen + m - 1) / m);
      0 <= ref ? j < ref : j > ref;
      i = 0 <= ref ? ++j : --j
    ) {
      ret += new_rsa.decrypt(
        bytesToString(src.slice(i * m, Math.min((i + 1) * m, srclen)))
      );
    }
    return stringToBytes(ret);
};

function m115_encode(src, tm) {
    var key, tmp, zz;
    key = stringToBytes(md5(`!@###@#${tm}DFDR@#@#`));
    tmp = stringToBytes(src);
    tmp = m115_sym_encode(tmp, tmp.length, key, null);
    tmp = key.slice(0, 16).concat(tmp);
    return {
      data: m115_asym_encode(tmp, tmp.length),
      key,
    };
};

function m115_decode(src, key) {
    var tmp;
    tmp = stringToBytes(window.atob(src));
    tmp = m115_asym_decode(tmp, tmp.length);
    return bytesToString(
      m115_sym_decode(tmp.slice(16), tmp.length - 16, key, tmp.slice(0, 16))
    );
};

async function download_detail(f) {
  var data, key, tm, tmus;
  tmus = new Date().getTime();
  tm = Math.floor(tmus / 1000);
  ({ data, key } = m115_encode(
    JSON.stringify({
      pickcode: f.pc,
    }),
    tm
  ));
  let req_tmp = {
    url: `http://proapi.115.com/app/chrome/downurl?t=${tm}`,
    data: `data=${encodeURIComponent(data)}`,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };
  let data = await http(req_tmp, "post");
  let json = JSON.parse(response.responseText);
  return JSON.parse(m115_decode(json.data, key));
}


// 1115tool-start
function Tool115(){ return new (class { constructor() {this.n = bigInt( "8686980c0f5a24c4b9d43020cd2c22703ff3f450756529058b1cf88f09b8602136477198a6e2683149659bd122c33592fdb5ad47944ad1ea4d36c6b172aad6338c3bb6ac6227502d010993ac967d1aef00f0c8e038de2e4d3bc2ec368af2e9f10a6f1eda4f7262f136420c07c331b871bf139f74f3010e3c4fe57df3afb71683", 16 ); this.e = bigInt("10001", 16); } a2hex(byteArray) { var hexString = ""; var nextHexByte; for (var i = 0; i < byteArray.length; i++) { nextHexByte = byteArray[i].toString(16); if (nextHexByte.length < 2) { nextHexByte = "0" + nextHexByte; } hexString += nextHexByte; } return hexString; } hex2a(hex) { var str = ""; for (var i = 0; i < hex.length; i += 2) { str += String.fromCharCode(parseInt(hex.substr(i, 2), 16)); } return str; } pkcs1pad2(s, n) { if (n < s.length + 11) { return null; } var ba = []; var i = s.length - 1; while (i >= 0 && n > 0) { ba[--n] = s.charCodeAt(i--); } ba[--n] = 0; while (n > 2) { // random non-zero pad ba[--n] = 0xff; } ba[--n] = 2; ba[--n] = 0; var c = this.a2hex(ba); return bigInt(c, 16); } pkcs1unpad2(a) { var b = a.toString(16); if (b.length % 2 !== 0) { b = "0" + b; } var c = this.hex2a(b); var i = 1; while (c.charCodeAt(i) !== 0) { i++; } return c.slice(i + 1); } encrypt(text) { var m = this.pkcs1pad2(text, 0x80); var c = m.modPow(this.e, this.n); var h = c.toString(16); while (h.length < 0x80 * 2) { h = "0" + h; } return h; } decrypt(text) { var ba = []; var i = 0; while (i < text.length) { ba[i] = text.charCodeAt(i); i += 1; } var a = bigInt(this.a2hex(ba), 16); var c = a.modPow(this.e, this.n); var d = this.pkcs1unpad2(c); return d; } })() }
//1115tool-end


//ToolKit-start
function ToolKit(t, s, i) { return new (class { constructor(t, s, i) { this.tgEscapeCharMapping = { "&": "＆", "#": "＃" }; this.userAgent = `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0.2 Safari/605.1.15`; this.prefix = `lk`; this.name = t; this.id = s; this.data = null; this.dataFile = this.getRealPath(`${this.prefix}${this.id}.dat`); this.boxJsJsonFile = this.getRealPath( `${this.prefix}${this.id}.boxjs.json` ); this.options = i; this.isExecComm = false; this.isEnableLog = this.getVal(`${this.prefix}IsEnableLog${this.id}`); this.isEnableLog = this.isEmpty(this.isEnableLog) ? true : JSON.parse(this.isEnableLog); this.isNotifyOnlyFail = this.getVal( `${this.prefix}NotifyOnlyFail${this.id}` ); this.isNotifyOnlyFail = this.isEmpty(this.isNotifyOnlyFail) ? false : JSON.parse(this.isNotifyOnlyFail); this.isEnableTgNotify = this.getVal( `${this.prefix}IsEnableTgNotify${this.id}` ); this.isEnableTgNotify = this.isEmpty(this.isEnableTgNotify) ? false : JSON.parse(this.isEnableTgNotify); this.tgNotifyUrl = this.getVal(`${this.prefix}TgNotifyUrl${this.id}`); this.isEnableTgNotify = this.isEnableTgNotify ? !this.isEmpty(this.tgNotifyUrl) : this.isEnableTgNotify; this.costTotalStringKey = `${this.prefix}CostTotalString${this.id}`; this.costTotalString = this.getVal(this.costTotalStringKey); this.costTotalString = this.isEmpty(this.costTotalString) ? `0,0` : this.costTotalString.replace('"', ""); this.costTotalMs = this.costTotalString.split(",")[0]; this.execCount = this.costTotalString.split(",")[1]; this.costTotalMs = this.isEmpty(this.costTotalMs) ? 0 : parseInt(this.costTotalMs); this.execCount = this.isEmpty(this.execCount) ? 0 : parseInt(this.execCount); this.logSeparator = "\n██"; this.startTime = new Date().getTime(); this.node = (() => { if (this.isNode()) { const t = require("request"); return { request: t }; } else { return null; } })(); this.execStatus = true; this.notifyInfo = []; this.log(`${this.name}, 开始执行!`); this.execComm(); } getRealPath(t) { if (this.isNode()) { let s = process.argv.slice(1, 2)[0].split("/"); s[s.length - 1] = t; return s.join("/"); } return t; } async execComm() { if (this.isNode()) { this.comm = process.argv.slice(1); let t = false; if (this.comm[1] == "p") { this.isExecComm = true; this.log(`开始执行指令【${this.comm[1]}】=> 发送到手机测试脚本！`); if ( this.isEmpty(this.options) || this.isEmpty(this.options.httpApi) ) { this.log(`未设置options，使用默认值`); if (this.isEmpty(this.options)) { this.options = {}; } this.options.httpApi = `ffff@10.0.0.9:6166`; } else { if (!/.*?@.*?:[0-9]+/.test(this.options.httpApi)) { t = true; this.log(`❌httpApi格式错误！格式：ffff@3.3.3.18:6166`); this.done(); } } if (!t) { this.callApi(this.comm[2]); } } } } callApi(t) { let s = this.comm[0]; this.log(`获取【${s}】内容传给手机`); let i = ""; this.fs = this.fs ? this.fs : require("fs"); this.path = this.path ? this.path : require("path"); const e = this.path.resolve(s); const o = this.path.resolve(process.cwd(), s); const h = this.fs.existsSync(e); const r = !h && this.fs.existsSync(o); if (h || r) { const t = h ? e : o; try { i = this.fs.readFileSync(t); } catch (t) { i = ""; } } else { i = ""; } let n = { url: `http://${ this.options.httpApi.split("@")[1] }/v1/scripting/evaluate`, headers: { "X-Key": `${this.options.httpApi.split("@")[0]}` }, body: { script_text: `${i}`, mock_type: "cron", timeout: !this.isEmpty(t) && t > 5 ? t : 5, }, json: true, }; this.post(n, (t, i, e) => { this.log(`已将脚本【${s}】发给手机！`); this.done(); }); } getCallerFileNameAndLine() { let t; try { throw Error(""); } catch (s) { t = s; } const s = t.stack; const i = s.split("\n"); let e = 1; if (e !== 0) { const t = i[e]; this.path = this.path ? this.path : require("path"); return `[${t.substring( t.lastIndexOf(this.path.sep) + 1, t.lastIndexOf(":") )}]`; } else { return "[-]"; } } getFunName(t) { var s = t.toString(); s = s.substr("function ".length); s = s.substr(0, s.indexOf("(")); return s; } boxJsJsonBuilder(t, s) { if (this.isNode()) { if (!this.isJsonObject(t) || !this.isJsonObject(s)) { this.log("构建BoxJsJson传入参数格式错误，请传入json对象"); return; } this.log("using node"); let i = ["settings", "keys"]; const e = "https://raw.githubusercontent.com/Orz-3"; let o = {}; let h = "#lk{script_url}"; if (s && s.hasOwnProperty("script_url")) { h = this.isEmpty(s["script_url"]) ? "#lk{script_url}" : s["script_url"]; } o.id = `${this.prefix}${this.id}`; o.name = this.name; o.desc_html = `⚠️使用说明</br>详情【<a href='${h}?raw=true'><font class='red--text'>点我查看</font></a>】`; o.icons = [ `${e}/mini/master/Alpha/${this.id.toLocaleLowerCase()}.png`, `${e}/mini/master/Color/${this.id.toLocaleLowerCase()}.png`, ]; o.keys = []; o.settings = [ { id: `${this.prefix}IsEnableLog${this.id}`, name: "开启/关闭日志", val: true, type: "boolean", desc: "默认开启", }, { id: `${this.prefix}NotifyOnlyFail${this.id}`, name: "只当执行失败才通知", val: false, type: "boolean", desc: "默认关闭", }, { id: `${this.prefix}IsEnableTgNotify${this.id}`, name: "开启/关闭Telegram通知", val: false, type: "boolean", desc: "默认关闭", }, { id: `${this.prefix}TgNotifyUrl${this.id}`, name: "Telegram通知地址", val: "", type: "text", desc: "Tg的通知地址，如：https://api.telegram.org/bot-token/sendMessage?chat_id=-100140&parse_mode=Markdown&text=", }, ]; o.author = "#lk{author}"; o.repo = "#lk{repo}"; o.script = `${h}?raw=true`; if (!this.isEmpty(t)) { for (let s in i) { let e = i[s]; if (!this.isEmpty(t[e])) { if (e === "settings") { for (let s = 0; s < t[e].length; s++) { let i = t[e][s]; for (let t = 0; t < o.settings.length; t++) { let s = o.settings[t]; if (i.id === s.id) { o.settings.splice(t, 1); } } } } o[e] = o[e].concat(t[e]); } delete t[e]; } } Object.assign(o, t); if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"); this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.boxJsJsonFile); const i = this.path.resolve(process.cwd(), this.boxJsJsonFile); const e = this.fs.existsSync(t); const h = !e && this.fs.existsSync(i); const r = JSON.stringify(o, null, "\t"); if (e) { this.fs.writeFileSync(t, r); } else if (h) { this.fs.writeFileSync(i, r); } else { this.fs.writeFileSync(t, r); } let n = "/Users/lowking/Desktop/Scripts/lowking.boxjs.json"; if (s.hasOwnProperty("target_boxjs_json_path")) { n = s["target_boxjs_json_path"]; } let a = JSON.parse(this.fs.readFileSync(n)); if ( a.hasOwnProperty("apps") && Array.isArray(a["apps"]) && a["apps"].length > 0 ) { let t = a.apps; let i = t.indexOf( t.filter((t) => { return t.id == o.id; })[0] ); if (i >= 0) { a.apps[i] = o; } else { a.apps.push(o); } let e = JSON.stringify(a, null, 2); if (!this.isEmpty(s)) { for (const t in s) { let i = ""; if (s.hasOwnProperty(t)) { i = s[t]; } else if (t === "author") { i = "@lowking"; } else if (t === "repo") { i = "https://github.com/lowking/Scripts"; } e = e.replace(`#lk{${t}}`, i); } } const h = /(?:#lk\{)(.+?)(?=\})/; let r = h.exec(e); if (r !== null) { this.log( `生成BoxJs还有未配置的参数，请参考https://github.com/lowking/Scripts/blob/master/util/example/ToolKitDemo.js#L17-L18传入参数：\n` ); } let l = new Set(); while ((r = h.exec(e)) !== null) { l.add(r[1]); e = e.replace(`#lk{${r[1]}}`, ``); } l.forEach((t) => { console.log(`${t} `); }); this.fs.writeFileSync(n, e); } } } } isJsonObject(t) { return ( typeof t == "object" && Object.prototype.toString.call(t).toLowerCase() == "[object object]" && !t.length ); } appendNotifyInfo(t, s) { if (s == 1) { this.notifyInfo = t; } else { this.notifyInfo.push(t); } } prependNotifyInfo(t) { this.notifyInfo.splice(0, 0, t); } execFail() { this.execStatus = false; } isRequest() { return typeof $request != "undefined"; } isSurge() { return typeof $httpClient != "undefined"; } isQuanX() { return typeof $task != "undefined"; } isLoon() { return typeof $loon != "undefined"; } isJSBox() { return typeof $app != "undefined" && typeof $http != "undefined"; } isStash() { return ( "undefined" !== typeof $environment && $environment["stash-version"] ); } isNode() { return typeof require == "function" && !this.isJSBox(); } sleep(t) { return new Promise((s) => setTimeout(s, t)); } log(t) { if (this.isEnableLog) console.log(`${this.logSeparator}${t}`); } logErr(t) { this.execStatus = true; if (this.isEnableLog) { console.log(`${this.logSeparator}${this.name}执行异常:`); console.log(t); console.log(`\n${t.message}`); } } msg(t, s, i, e) { if (!this.isRequest() && this.isNotifyOnlyFail && this.execStatus) { } else { if (this.isEmpty(s)) { if (Array.isArray(this.notifyInfo)) { s = this.notifyInfo.join("\n"); } else { s = this.notifyInfo; } } if (!this.isEmpty(s)) { if (this.isEnableTgNotify) { this.log(`${this.name}Tg通知开始`); for (let t in this.tgEscapeCharMapping) { if (!this.tgEscapeCharMapping.hasOwnProperty(t)) { continue; } s = s.replace(t, this.tgEscapeCharMapping[t]); } this.get( { url: encodeURI(`${this.tgNotifyUrl}📌${this.name}\n${s}`) }, (t, s, i) => { this.log(`Tg通知完毕`); } ); } else { let o = {}; const h = !this.isEmpty(i); const r = !this.isEmpty(e); if (this.isQuanX()) { if (h) o["open-url"] = i; if (r) o["media-url"] = e; $notify(this.name, t, s, o); } if (this.isSurge() || this.isStash()) { if (h) o["url"] = i; $notification.post(this.name, t, s, o); } if (this.isNode()) this.log("⭐️" + this.name + t + s); if (this.isJSBox()) $push.schedule({ title: this.name, body: t ? t + "\n" + s : s }); } } } } getVal(t) { if (this.isSurge() || this.isLoon() || this.isStash()) { return $persistentStore.read(t); } else if (this.isQuanX()) { return $prefs.valueForKey(t); } else if (this.isNode()) { this.data = this.loadData(); return this.data[t]; } else { return (this.data && this.data[t]) || null; } } setVal(t, s) { if (this.isSurge() || this.isLoon() || this.isStash()) { return $persistentStore.write(s, t); } else if (this.isQuanX()) { return $prefs.setValueForKey(s, t); } else if (this.isNode()) { this.data = this.loadData(); this.data[t] = s; this.writeData(); return true; } else { return (this.data && this.data[t]) || null; } } loadData() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"); this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile); const s = this.path.resolve(process.cwd(), this.dataFile); const i = this.fs.existsSync(t); const e = !i && this.fs.existsSync(s); if (i || e) { const e = i ? t : s; try { return JSON.parse(this.fs.readFileSync(e)); } catch (t) { return {}; } } else return {}; } else return {}; } writeData() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"); this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile); const s = this.path.resolve(process.cwd(), this.dataFile); const i = this.fs.existsSync(t); const e = !i && this.fs.existsSync(s); const o = JSON.stringify(this.data); if (i) { this.fs.writeFileSync(t, o); } else if (e) { this.fs.writeFileSync(s, o); } else { this.fs.writeFileSync(t, o); } } } adapterStatus(t) { if (t) { if (t.status) { t["statusCode"] = t.status; } else if (t.statusCode) { t["status"] = t.statusCode; } } return t; } get(t, s = () => {}) { if (this.isQuanX()) { if (typeof t == "string") t = { url: t }; t["method"] = "GET"; $task.fetch(t).then( (t) => { s(null, this.adapterStatus(t), t.body); }, (t) => s(t.error, null, null) ); } if (this.isSurge() || this.isLoon() || this.isStash()) $httpClient.get(t, (t, i, e) => { s(t, this.adapterStatus(i), e); }); if (this.isNode()) { this.node.request(t, (t, i, e) => { s(t, this.adapterStatus(i), e); }); } if (this.isJSBox()) { if (typeof t == "string") t = { url: t }; t["header"] = t["headers"]; t["handler"] = function (t) { let i = t.error; if (i) i = JSON.stringify(t.error); let e = t.data; if (typeof e == "object") e = JSON.stringify(t.data); s(i, this.adapterStatus(t.response), e); }; $http.get(t); } } post(t, s = () => {}) { if (this.isQuanX()) { if (typeof t == "string") t = { url: t }; t["method"] = "POST"; $task.fetch(t).then( (t) => { s(null, this.adapterStatus(t), t.body); }, (t) => s(t.error, null, null) ); } if (this.isSurge() || this.isLoon() || this.isStash()) { $httpClient.post(t, (t, i, e) => { s(t, this.adapterStatus(i), e); }); } if (this.isNode()) { this.node.request.post(t, (t, i, e) => { s(t, this.adapterStatus(i), e); }); } if (this.isJSBox()) { if (typeof t == "string") t = { url: t }; t["header"] = t["headers"]; t["handler"] = function (t) { let i = t.error; if (i) i = JSON.stringify(t.error); let e = t.data; if (typeof e == "object") e = JSON.stringify(t.data); s(i, this.adapterStatus(t.response), e); }; $http.post(t); } } put(t, s = () => {}) { if (this.isQuanX()) { if (typeof t == "string") t = { url: t }; t["method"] = "PUT"; $task.fetch(t).then( (t) => { s(null, this.adapterStatus(t), t.body); }, (t) => s(t.error, null, null) ); } if (this.isSurge() || this.isLoon() || this.isStash()) { t.method = "PUT"; $httpClient.put(t, (t, i, e) => { s(t, this.adapterStatus(i), e); }); } if (this.isNode()) { t.method = "PUT"; this.node.request.put(t, (t, i, e) => { s(t, this.adapterStatus(i), e); }); } if (this.isJSBox()) { if (typeof t == "string") t = { url: t }; t["header"] = t["headers"]; t["handler"] = function (t) { let i = t.error; if (i) i = JSON.stringify(t.error); let e = t.data; if (typeof e == "object") e = JSON.stringify(t.data); s(i, this.adapterStatus(t.response), e); }; $http.post(t); } } costTime() { let t = `${this.name}执行完毕！`; if (this.isNode() && this.isExecComm) { t = `指令【${this.comm[1]}】执行完毕！`; } const s = new Date().getTime(); const i = s - this.startTime; const e = i / 1e3; this.execCount++; this.costTotalMs += i; this.log( `${t}耗时【${e}】秒\n总共执行【${this.execCount}】次，平均耗时【${( this.costTotalMs / this.execCount / 1e3 ).toFixed(4)}】秒` ); this.setVal( this.costTotalStringKey, JSON.stringify(`${this.costTotalMs},${this.execCount}`) ); } done(t = {}) { this.costTime(); if (this.isSurge() || this.isQuanX() || this.isLoon() || this.isStash()) { $done(t); } } getRequestUrl() { return $request.url; } getResponseBody() { return $response.body; } getResponseHeaders() { return $response.headers; } getRequestHeaders() { return $request.headers; } isGetCookie(t) { return !!($request.method != "OPTIONS" && this.getRequestUrl().match(t)); } isEmpty(t) { return ( typeof t == "undefined" || t == null || t == "" || t == "null" || t == "undefined" || t.length === 0 ); } randomString(t) { t = t || 32; var s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"; var i = s.length; var e = ""; for (let o = 0; o < t; o++) { e += s.charAt(Math.floor(Math.random() * i)); } return e; } autoComplete(t, s, i, e, o, h, r, n, a, l) { t += ``; if (t.length < o) { while (t.length < o) { if (h == 0) { t += e; } else { t = e + t; } } } if (r) { let s = ``; for (var f = 0; f < n; f++) { s += l; } t = t.substring(0, a) + s + t.substring(n + a); } t = s + t + i; return this.toDBC(t); } customReplace(t, s, i, e) { try { if (this.isEmpty(i)) { i = "#{"; } if (this.isEmpty(e)) { e = "}"; } for (let o in s) { t = t.replace(`${i}${o}${e}`, s[o]); } } catch (t) { this.logErr(t); } return t; } toDBC(t) { var s = ""; for (var i = 0; i < t.length; i++) { if (t.charCodeAt(i) == 32) { s = s + String.fromCharCode(12288); } else if (t.charCodeAt(i) < 127) { s = s + String.fromCharCode(t.charCodeAt(i) + 65248); } } return s; } hash(t) { let s = 0, i, e; for (i = 0; i < t.length; i++) { e = t.charCodeAt(i); s = (s << 5) - s + e; s |= 0; } return String(s); } formatDate(t, s) { let i = { "M+": t.getMonth() + 1, "d+": t.getDate(), "H+": t.getHours(), "m+": t.getMinutes(), "s+": t.getSeconds(), "q+": Math.floor((t.getMonth() + 3) / 3), S: t.getMilliseconds(), }; if (/(y+)/.test(s)) s = s.replace( RegExp.$1, (t.getFullYear() + "").substr(4 - RegExp.$1.length) ); for (let t in i) if (new RegExp("(" + t + ")").test(s)) s = s.replace( RegExp.$1, RegExp.$1.length == 1 ? i[t] : ("00" + i[t]).substr(("" + i[t]).length) ); return s; } })(t, s, i); }
//ToolKit-end
