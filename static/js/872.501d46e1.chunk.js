"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[872],{7872:function(r,n,e){e.r(n),e.d(n,{default:function(){return v}});var t=e(1413),a=e(5861),c=e(885),u=e(7757),s=e.n(u),i=e(2791),o=e(501),p=e(6871),f=e(184),d=function(r){var n=r.poster_path,e=r.title,t=r.vote_average,a=r.overview,c=r.genres,u="https://image.tmdb.org/t/p/w500".concat(n),s=c.map((function(r){return r.name})).join(", ");return(0,f.jsxs)("div",{children:[(0,f.jsx)("img",{src:u,alt:e}),(0,f.jsx)("h2",{children:e}),(0,f.jsxs)("p",{children:["User Score: ",t]}),(0,f.jsx)("h3",{children:"Overview"}),(0,f.jsx)("p",{children:a}),(0,f.jsx)("h3",{children:"Genres"}),(0,f.jsx)("p",{children:s})]})},l=e(615),v=function(){var r,n=(0,i.useState)({post:{},loading:!1,error:null}),e=(0,c.Z)(n,2),u=e[0],v=e[1],h=(0,p.UO)().id,x=(0,p.s0)(),m=(0,p.TH)();(0,i.useEffect)((function(){var r=function(){var r=(0,a.Z)(s().mark((function r(){var n,e;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return v((function(r){return(0,t.Z)((0,t.Z)({},r),{},{loading:!0})})),r.prev=1,r.next=4,(0,l.Xz)(h);case 4:n=r.sent,e=n.data,v((function(r){return(0,t.Z)((0,t.Z)({},r),{},{post:(0,t.Z)({},e),loading:!1})})),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(1),v((function(n){return{loading:!1,error:r.t0}}));case 12:case"end":return r.stop()}}),r,null,[[1,9]])})));return function(){return r.apply(this,arguments)}}();r()}),[h]);var g=(null===(r=m.state)||void 0===r?void 0:r.from)||"/",w=u.post,j=u.loading,k=u.error,b=Object.keys(w).length>0;return(0,f.jsx)("main",{children:(0,f.jsxs)("div",{className:"container",children:[j&&(0,f.jsx)("p",{children:"...Loading"}),k&&(0,f.jsx)("p",{children:"Post not found"}),b&&m.state&&(0,f.jsx)("button",{onClick:function(){return x(g)},children:"Go back"}),b&&(0,f.jsx)(d,(0,t.Z)({},w)),b&&(0,f.jsx)(o.rU,{state:{from:g},to:"cast",children:"Cast"}),b&&(0,f.jsx)(o.rU,{state:{from:g},to:"reviews",children:"Reviews"}),(0,f.jsx)(p.j3,{})]})})}},615:function(r,n,e){e.d(n,{$W:function(){return p},Do:function(){return f},PI:function(){return d},Xz:function(){return o},Zh:function(){return i}});var t=e(5861),a=e(7757),c=e.n(a),u=e(4569),s=e.n(u)().create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"196da2d2dd4f95fd9bfe0927ab5d4d33",language:"en-US"}}),i=function(){var r=(0,t.Z)(c().mark((function r(){var n,e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s.get("trending/all/day");case 2:return n=r.sent,e=n.data,r.abrupt("return",e);case 5:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),o=function(){var r=(0,t.Z)(c().mark((function r(n){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s.get("/movie/".concat(n));case 2:return e=r.sent,r.abrupt("return",e);case 4:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),p=function(){var r=(0,t.Z)(c().mark((function r(n){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s.get("/search/movie?&page=1&include_adult=false&query=".concat(n));case 2:return e=r.sent,r.abrupt("return",e);case 4:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),f=function(){var r=(0,t.Z)(c().mark((function r(n){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s.get("/movie/".concat(n,"/credits"));case 2:return e=r.sent,r.abrupt("return",e);case 4:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),d=function(){var r=(0,t.Z)(c().mark((function r(n){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s.get("/movie/".concat(n,"/reviews"));case 2:return e=r.sent,r.abrupt("return",e);case 4:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=872.501d46e1.chunk.js.map