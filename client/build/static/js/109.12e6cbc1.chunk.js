"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[109],{14109:function(e,n,t){t.r(n);var r=t(74165),s=t(15861),a=t(1413),o=t(29439),c=t(72791),u=t(63108),i=t(9085),l=t(59434),f=t(99243),h=t(80184);n.default=function(e){var n=e.history,t=(0,c.useState)(""),d=(0,o.Z)(t,2),p=d[0],m=d[1],v=(0,c.useState)(!1),x=(0,o.Z)(v,2),b=x[0],g=x[1],k=(0,l.v9)((function(e){return(0,a.Z)({},e)})).user;(0,c.useEffect)((function(){k&&k.token&&n.push("/")}),[k,n]);var S=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),g(!0),t={url:"http://localhost:3000/login",handleCodeInApp:!0},e.next=5,(0,f.LS)(u.I,p,t).then((function(){m(""),g(!1),i.Am.success("Check your email for password reset link")})).catch((function(e){g(!1),i.Am.error(e.message),console.log("ERROR MSG IN FORGOT PASSWORD",e)}));case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,h.jsxs)("div",{className:"container col-md-6 offset-md-3 p-5",children:[b?(0,h.jsx)("h4",{className:"text-danger",children:"Loading"}):(0,h.jsx)("h4",{children:"Forgot Password"}),(0,h.jsxs)("form",{onSubmit:S,children:[(0,h.jsx)("input",{type:"email",className:"form-control",value:p,onChange:function(e){return m(e.target.value)},placeholder:"Type your email",autoFocus:!0}),(0,h.jsx)("br",{}),(0,h.jsx)("button",{className:"btn btn-raised",disabled:!p,children:"Submit"})]})]})}}}]);
//# sourceMappingURL=109.12e6cbc1.chunk.js.map