"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[536],{3536:function(n,r,t){t.r(r),t.d(r,{default:function(){return m}});var e=t(907);var a=t(181);function u(n){return function(n){if(Array.isArray(n))return(0,e.Z)(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||(0,a.Z)(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var c=t(1413),i=t(5861),o=t(885),s=t(7757),f=t.n(s),p=t(2791),l=t(615),d=t(3471),v=t(184),h=function(){var n=(0,p.useState)({items:[],loading:!1,error:null}),r=(0,o.Z)(n,2),t=r[0],e=r[1];(0,p.useEffect)((function(){var n=function(){var n=(0,i.Z)(f().mark((function n(){var r;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e((function(n){return(0,c.Z)((0,c.Z)({},n),{},{loading:!0})})),n.prev=1,n.next=4,(0,l.Zh)();case 4:r=n.sent,e((function(n){return(0,c.Z)((0,c.Z)({},n),{},{items:u(r.results),loading:!1})})),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),e((function(r){return(0,c.Z)((0,c.Z)({},r),{},{loading:!1,error:n.t0})}));case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(){return n.apply(this,arguments)}}();n()}),[]);var a=t.items,s=t.loading,h=t.error;return(0,v.jsxs)(v.Fragment,{children:[s&&(0,v.jsx)("p",{children:"...Loading"}),h&&(0,v.jsx)("p",{children:"Films not found"}),(0,v.jsx)(d.Z,{items:a})]})},m=function(){return(0,v.jsx)("main",{children:(0,v.jsxs)("div",{className:"container",children:[(0,v.jsx)("h2",{children:"Trending today"}),(0,v.jsx)(h,{})]})})}},615:function(n,r,t){t.d(r,{$W:function(){return p},Do:function(){return l},PI:function(){return d},Xz:function(){return f},Zh:function(){return s}});var e=t(5861),a=t(7757),u=t.n(a),c=t(4569),i="196da2d2dd4f95fd9bfe0927ab5d4d33",o=t.n(c)().create({baseURL:"https://api.themoviedb.org/3/"}),s=function(){var n=(0,e.Z)(u().mark((function n(){var r,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.get("trending/all/day?api_key=".concat(i));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(u().mark((function n(r){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.get("/movie/".concat(r,"?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(u().mark((function n(r){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.get("/search/movie?api_key=".concat(i,"&language=en-US&page=1&include_adult=false&query=").concat(r));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),l=function(){var n=(0,e.Z)(u().mark((function n(r){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.get("/movie/".concat(r,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(u().mark((function n(r){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.get("/movie/".concat(r,"/reviews?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()},3471:function(n,r,t){t.d(r,{Z:function(){return i}});var e=t(501),a=t(6871),u=t(184),c=function(n){var r=n.items,t=(0,a.TH)(),c=r.map((function(n){var r=n.id,a=n.title;return(0,u.jsx)("li",{children:(0,u.jsx)(e.rU,{to:"/movies/".concat(r),state:{from:t},children:a})},r)}));return(0,u.jsx)("ul",{children:c})};c.defaultProps={items:[]};var i=c}}]);
//# sourceMappingURL=536.a1e63c7c.chunk.js.map