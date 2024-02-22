"use strict";var l=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var y=l(function(z,q){
function g(r,e,f,s,v,t,m,o){var a,n,u,i;if(r<=0)return t;for(f<0?a=(1-r)*f:a=0,v<0?n=(1-r)*v:n=0,m<0?u=(1-r)*m:u=0,i=0;i<r;i++)s[n]===0&&(t[u]=o(e[a])),a+=f,n+=v,u+=m;return t}q.exports=g
});var R=l(function(A,O){
function h(r,e,f,s,v,t,m,o,a,n,u){var i,c,p,x;if(r<=0)return o;for(i=s,c=m,p=n,x=0;x<r;x++)v[c]===0&&(o[p]=u(e[i])),i+=f,c+=t,p+=a;return o}O.exports=h
});var j=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),b=y(),k=R();j(b,"ndarray",k);module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
