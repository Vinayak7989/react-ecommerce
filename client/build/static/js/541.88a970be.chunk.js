"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[541],{8541:function(e,t,n){n.r(t);var r=n(74165),s=n(15861),a=n(1413),c=n(29439),o=n(72791),i=n(63108),u=n(99243),l=n(9085),f=n(59434),h=n(80184);t.default=function(e){var t=e.history,n=(0,o.useState)(""),m=(0,c.Z)(n,2),p=m[0],d=m[1],v=(0,f.v9)((function(e){return(0,a.Z)({},e)})).user;(0,o.useEffect)((function(){v&&v.token&&t.push("/")}),[v,t]);var x=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={url:"http://localhost:3000/register/complete",handleCodeInApp:!0},e.next=4,(0,u.oo)(i.I,p,n);case 4:l.Am.success("Email is sent to ".concat(p,". Click the link to complete your registration.")),window.localStorage.setItem("emailForRegistration",p),d("");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,h.jsx)("div",{className:"container p-5",children:(0,h.jsx)("div",{className:"row",children:(0,h.jsxs)("div",{className:"col-md-6 offset-md-3",children:[(0,h.jsx)("h4",{children:"Register"}),(0,h.jsxs)("form",{onSubmit:x,children:[(0,h.jsx)("input",{type:"email",className:"form-control",value:p,onChange:function(e){return d(e.target.value)},placeholder:"Your email",autoFocus:!0}),(0,h.jsx)("br",{}),(0,h.jsx)("button",{type:"submit",className:"btn btn-raised",children:"Register"})]})]})})})}}}]);
//# sourceMappingURL=541.88a970be.chunk.js.map