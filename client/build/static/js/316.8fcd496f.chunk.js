"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[316],{32099:function(e,n,t){t(72791);var r=t(80184);n.Z=function(e){var n=e.handleSubmit,t=e.name,a=e.setName;return(0,r.jsx)("form",{onSubmit:n,children:(0,r.jsxs)("div",{className:"form-group",children:[(0,r.jsx)("label",{children:"Name"}),(0,r.jsx)("input",{type:"text",className:"form-control",onChange:function(e){return a(e.target.value)},value:t,autoFocus:!0,required:!0}),(0,r.jsx)("br",{}),(0,r.jsx)("button",{className:"btn btn-outline-primary",children:"Save"})]})})}},77834:function(e,n,t){t(72791);var r=t(91523),a=t(80184);n.Z=function(){return(0,a.jsx)("nav",{children:(0,a.jsxs)("ul",{className:"nav flex-column",children:[(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(r.rU,{to:"/admin/dashboard",className:"nav-link",children:"Dashboard"})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(r.rU,{to:"/admin/product",className:"nav-link",children:"Product"})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(r.rU,{to:"/admin/products",className:"nav-link",children:"Products"})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(r.rU,{to:"/admin/category",className:"nav-link",children:"Category"})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(r.rU,{to:"/admin/sub",className:"nav-link",children:"Sub Category"})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(r.rU,{to:"/admin/coupon",className:"nav-link",children:"Coupon"})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(r.rU,{to:"/user/password",className:"nav-link",children:"Password"})})]})})}},86729:function(e,n,t){t.d(n,{CP:function(){return u},Gu:function(){return d},k4:function(){return p},n3:function(){return i},sT:function(){return o},yr:function(){return l}});var r=t(74165),a=t(15861),c=t(74569),s=t.n(c),u=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("".concat("https://ecom-backend-steel.vercel.app/api","/categories"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("".concat("https://ecom-backend-steel.vercel.app/api","/category/").concat(n));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),o=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().delete("".concat("https://ecom-backend-steel.vercel.app/api","/category/").concat(n),{headers:{authtoken:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t,a){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().put("".concat("https://ecom-backend-steel.vercel.app/api","/category/").concat(n),t,{headers:{authtoken:a}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().post("".concat("https://ecom-backend-steel.vercel.app/api","/category"),n,{headers:{authtoken:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),d=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("".concat("https://ecom-backend-steel.vercel.app/api","/category/subs/").concat(n));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},17316:function(e,n,t){t.r(n);var r=t(29439),a=t(1413),c=t(72791),s=t(77834),u=t(9085),i=t(59434),o=t(86729),l=t(32099),p=t(80184);n.default=function(e){var n=e.history,t=e.match,d=(0,i.v9)((function(e){return(0,a.Z)({},e)})).user,m=(0,c.useState)(""),h=(0,r.Z)(m,2),f=h[0],v=h[1],x=(0,c.useState)(!1),j=(0,r.Z)(x,2),k=j[0],b=j[1];(0,c.useEffect)((function(){N()}),[]);var N=function(){return(0,o.n3)(t.params.slug).then((function(e){return v(e.data.name)}))};return(0,p.jsx)("div",{className:"container-fluid",children:(0,p.jsxs)("div",{className:"row",children:[(0,p.jsx)("div",{className:"col-md-2",children:(0,p.jsx)(s.Z,{})}),(0,p.jsxs)("div",{className:"col",children:[k?(0,p.jsx)("h4",{className:"text-danger",children:"Loading.."}):(0,p.jsx)("h4",{children:"Update category"}),(0,p.jsx)(l.Z,{handleSubmit:function(e){e.preventDefault(),b(!0),(0,o.yr)(t.params.slug,{name:f},d.token).then((function(e){b(!1),v(""),u.Am.success('"'.concat(e.data.name,'" is updated')),n.push("/admin/category")})).catch((function(e){console.log(e),b(!1),400===e.response.status&&u.Am.error(e.response.data)}))},name:f,setName:v}),(0,p.jsx)("hr",{})]})]})})}}}]);
//# sourceMappingURL=316.8fcd496f.chunk.js.map