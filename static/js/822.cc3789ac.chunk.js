"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[822],{5822:function(n,r,t){t.r(r),t.d(r,{default:function(){return l}});var e=t(1413),u=t(5861),a=t(885),c=t(7757),i=t.n(c),o=t(2791),s=t(6871),f=t(615),p=t(184),d=function(){var n=(0,o.useState)({items:[],loading:!1,error:null}),r=(0,a.Z)(n,2),t=r[0],c=r[1],d=(0,s.UO)().id;(0,o.useEffect)((function(){var n=function(){var n=(0,u.Z)(i().mark((function n(){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c((function(n){return(0,e.Z)((0,e.Z)({},n),{},{loading:!0})})),n.prev=1,n.next=4,(0,f.PI)(d);case 4:r=n.sent,t=r.data,c((function(n){return(0,e.Z)((0,e.Z)({},n),{},{loading:!1,items:t.results})})),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),c((function(r){return(0,e.Z)((0,e.Z)({},r),{},{loading:!1,error:n.t0})}));case 12:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(){return n.apply(this,arguments)}}();n()}),[d]);var l=t.items,v=t.loading,h=t.error,m=l.map((function(n){var r=n.id,t=n.author,e=n.content;return(0,p.jsxs)("li",{children:[(0,p.jsxs)("h3",{children:["Author: ",t]}),(0,p.jsx)("p",{children:e})]},r)})),x=0===l.length?(0,p.jsx)("p",{children:"reviews not found"}):m;return(0,p.jsxs)(p.Fragment,{children:[v&&(0,p.jsx)("p",{children:"...Loading"}),h&&(0,p.jsx)("p",{children:"page not found"}),x]})};d.defaultProps={items:[]};var l=d},615:function(n,r,t){t.d(r,{$W:function(){return f},Do:function(){return p},PI:function(){return d},Xz:function(){return s},Zh:function(){return o}});var e=t(5861),u=t(7757),a=t.n(u),c=t(4569),i=t.n(c)().create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"196da2d2dd4f95fd9bfe0927ab5d4d33",language:"en-US"}}),o=function(){var n=(0,e.Z)(a().mark((function n(){var r,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.get("trending/all/day");case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(a().mark((function n(r){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.get("/movie/".concat(r));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(a().mark((function n(r){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.get("/search/movie?&page=1&include_adult=false&query=".concat(r));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(a().mark((function n(r){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.get("/movie/".concat(r,"/credits"));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(a().mark((function n(r){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.get("/movie/".concat(r,"/reviews"));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=822.cc3789ac.chunk.js.map