(this.webpackJsonphw=this.webpackJsonphw||[]).push([[0],{104:function(e,t,a){"use strict";a.r(t);var c=a(0),r=a.n(c),n=a(23),s=a.n(n),o=a(6),i=a(20),d=a(10),j=a(8),l=a(108),u=a(11),b=a(1);function O(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),a=t[0],r=t[1],n=Object(c.useState)(""),s=Object(o.a)(n,2),d=s[0],l=s[1],O=Object(c.useState)(""),h=Object(o.a)(O,2),p=h[0],x=h[1],m=Object(c.useState)(!1),f=Object(o.a)(m,1)[0],g=Object(c.useState)(""),v=Object(o.a)(g,1)[0],C=Object(i.d)(),w=Object(c.useContext)(j.a),y=w.state,E=w.dispatch,L=y.user,k=Object(u.b)((function(e){var t=e.title,a=e.description,c=e.dateCreated,r=e.complete,n=e.dateCompleted;return{url:"/todo",method:"post",headers:{Authorization:"".concat(y.user.access_token)},data:{title:t,description:a,dateCreated:c,complete:r,dateCompleted:n}}})),T=Object(o.a)(k,2),S=T[0],D=T[1];return Object(c.useEffect)((function(){S&&S.data&&(E({type:"CREATE_TODO",title:S.data.title,description:S.data.description,dateCreated:S.data.dateCreated,complete:S.data.complete,dateCompleted:S.data.dateCompleted,id:S.data.id}),C.navigate("/todo/".concat(S.data.id)),console.log(S.data))}),[S]),Object(b.jsxs)("form",{name:"form",onSubmit:function(e){e.preventDefault(),D({title:a,description:d,dateCreated:p,complete:f,dateCompleted:v})},children:[Object(b.jsxs)("div",{children:["Author: ",Object(b.jsx)("b",{children:L.username})]}),Object(b.jsx)("br",{}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"create-title",children:"Title : \xa0"}),Object(b.jsx)("input",{type:"text",value:a,onChange:function(e){r(e.target.value)},name:"create-title",id:"create-title",required:"required"}),Object(b.jsx)("span",{children:"\xa0\xa0\xa0\xa0\xa0\xa0"}),Object(b.jsx)("label",{htmlFor:"create=description",children:"Description : \xa0"}),Object(b.jsx)("input",{type:"text",value:d,onChange:function(e){l(e.target.value)},name:"create-description",id:"create-description"})]}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"submit",value:"Create",onClick:function(){x((new Date).toLocaleDateString("en-us"))}}),Object(b.jsx)("br",{}),Object(b.jsx)("hr",{})]})}var h=a(112),p=a(111),x=a(2),m=a(113),f=a(110),g=a(107);function v(e){var t=e.show,a=e.handleClose,r=Object(c.useContext)(j.a).dispatch,n=Object(c.useState)({username:"",password:"",passwordRepeat:""}),s=Object(o.a)(n,2),i=s[0],d=s[1],l=Object(c.useState)(""),O=Object(o.a)(l,2),h=(O[0],O[1]),p=Object(u.b)((function(e,t){return{url:"auth/register",method:"post",data:{username:e,password:t,passwordConfirmation:t}}})),v=Object(o.a)(p,2),C=v[0],w=v[1];return Object(c.useEffect)((function(){C&&C.data&&r({type:"REGISTER",username:C.data.username})}),[C]),Object(c.useEffect)((function(){C&&!1===C.isLoading&&(C.data||C.error)&&(C.error?(console.log(C),h("Registration failed, please try again later."),alert("fail")):(console.log(C),h("Registration successful. You may now login."),alert("success")))}),[C]),Object(b.jsx)(m.a,{show:t,onHide:a,children:Object(b.jsxs)(f.a,{onSubmit:function(e){e.preventDefault(),w(i.username,i.password),a()},children:[Object(b.jsx)(m.a.Header,{closeButton:!0,children:Object(b.jsx)(m.a.Title,{children:"Register"})}),Object(b.jsxs)(m.a.Body,{children:[Object(b.jsx)(f.a.Label,{htmlFor:"register-username",children:"Username:"}),Object(b.jsx)(f.a.Control,{type:"text",value:i.username,onChange:function(e){return d(Object(x.a)(Object(x.a)({},i),{},{username:e.target.value}))},name:"register-username",id:"register-username"}),Object(b.jsx)(f.a.Label,{htmlFor:"register-password",children:"Password:"}),Object(b.jsx)(f.a.Control,{type:"password",name:"register-password",id:"register-password",value:i.password,onChange:function(e){return d(Object(x.a)(Object(x.a)({},i),{},{password:e.target.value}))}}),Object(b.jsx)(f.a.Label,{htmlFor:"register-password-repeat",children:"Repeat password:"}),Object(b.jsx)(f.a.Control,{type:"password",name:"register-password-repeat",id:"register-password-repeat",value:i.passwordRepeat,onChange:function(e){return d(Object(x.a)(Object(x.a)({},i),{},{passwordRepeat:e.target.value}))}})]}),Object(b.jsxs)(m.a.Footer,{children:[Object(b.jsx)(g.a,{variant:"secondary",onClick:a,children:"Cancel"}),Object(b.jsx)(g.a,{variant:"primary",type:"submit",disabled:0===i.username.length||0===i.password.length||i.password!==i.passwordRepeat,children:"Register"})]})]})})}function C(e){var t=e.show,a=e.handleClose,r=Object(c.useContext)(j.a).dispatch,n=Object(c.useState)(""),s=Object(o.a)(n,2),i=s[0],d=s[1],l=Object(c.useState)(""),O=Object(o.a)(l,2),h=O[0],p=O[1],x=Object(c.useState)(!1),v=Object(o.a)(x,2),C=v[0],w=v[1];var y=Object(u.b)((function(e,t){return{url:"auth/login",method:"post",data:{username:e,password:t}}})),E=Object(o.a)(y,2),L=E[0],k=E[1];return Object(c.useEffect)((function(){L&&!1===L.isLoading&&(L.data||L.error)&&(L.error?(w(!0),alert("failed")):(w(!1),console.log(L.data),r({type:"LOGIN",username:i,access_token:L.data.access_token})))}),[L]),Object(b.jsx)(m.a,{show:t,onHide:a,children:Object(b.jsxs)(f.a,{onSubmit:function(e){e.preventDefault(),k(i,h),a()},children:[Object(b.jsx)(m.a.Header,{closeButton:!0,children:Object(b.jsx)(m.a.Title,{children:"Login"})}),Object(b.jsxs)(m.a.Body,{children:[Object(b.jsx)(f.a.Label,{htmlFor:"login-username",children:"Username:"}),Object(b.jsx)(f.a.Control,{type:"text",value:i,onChange:function(e){d(e.target.value)},name:"login-username",id:"login-username"}),Object(b.jsx)(f.a.Label,{htmlFor:"login-password",children:"Password:"}),Object(b.jsx)(f.a.Control,{type:"password",value:h,onChange:function(e){p(e.target.value)},name:"login-password",id:"login-password"}),C&&Object(b.jsx)(f.a.Text,{style:{color:"red"},children:"Invalid username or password"})]}),Object(b.jsxs)(m.a.Footer,{children:[Object(b.jsx)(g.a,{variant:"secondary",onClick:a,children:"Cancel"}),Object(b.jsx)(g.a,{variant:"primary",disabled:0===i.length,type:"submit",children:"Login"})]})]})})}function w(){var e=r.a.lazy((function(){return a.e(3).then(a.bind(null,115))})),t=Object(c.useContext)(j.a).state,n=Object(c.useState)(!1),s=Object(o.a)(n,2),i=s[0],d=s[1],l=Object(c.useState)(!1),u=Object(o.a)(l,2),O=u[0],h=u[1];return t.user.username?Object(b.jsx)(e,{}):Object(b.jsxs)("div",{className:"justify-content-end",children:[Object(b.jsx)(g.a,{variant:"primary",onClick:function(e){return d(!0)},children:"Login"}),Object(b.jsx)(C,{show:i,handleClose:function(){return d(!1)}}),"\xa0\xa0\xa0\xa0\xa0",Object(b.jsx)(g.a,{variant:"primary",onClick:function(e){return h(!0)},children:"Register"}),Object(b.jsx)(v,{show:O,handleClose:function(){return h(!1)}})]})}var y=function(e){var t=e.text;return Object(b.jsx)(i.a,{href:"/",children:Object(b.jsx)(h.a.Brand,{style:{color:"blue"},children:Object(b.jsx)("h2",{children:t})})})};function E(){var e=Object(c.useContext)(j.a).state.user;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(h.a,{bg:"clear",expand:"lg",children:Object(b.jsxs)(l.a,{children:[Object(b.jsxs)(h.a.Brand,{href:"/",children:[Object(b.jsx)("br",{}),Object(b.jsx)(y,{text:"Home"})]}),Object(b.jsx)(h.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(b.jsxs)(h.a.Collapse,{id:"basic-navbar-nav",children:[Object(b.jsxs)(p.a,{className:"me-auto",children:[Object(b.jsx)(p.a.Link,{children:Object(b.jsx)(i.a,{href:"/users",children:Object(b.jsx)("h3",{children:" Users "})})}),e.username&&Object(b.jsx)(p.a.Link,{children:Object(b.jsx)(i.a,{href:"/todo/create",children:Object(b.jsx)("h3",{children:" Create New Todo "})})})]}),Object(b.jsx)(r.a.Suspense,{fallback:"Loading...",children:Object(b.jsx)(w,{})})]})]})}),Object(b.jsx)("hr",{})]})}var L=a(114),k=a(109),T=a(74);function S(e){var t=e.title,a=e.description,r=e.dateCreated,n=e.complete,s=(e.dateCompleted,e.todoId),i=e.short,d=void 0!==i&&i,l=Object(c.useContext)(j.a).dispatch,O=Object(c.useContext)(j.a).state,h=Object(u.b)((function(e,t){return{url:"/todo/delete",method:"delete",headers:{Authorization:"".concat(O.user.access_token)},data:{title:e,description:t}}})),p=Object(o.a)(h,2),x=p[0],m=p[1],f=Object(u.b)((function(e,t,a){return{url:"/todo/toggle",method:"patch",headers:{Authorization:"".concat(O.user.access_token)},data:{title:e,description:t,completed:a,dateCompleted:Date.now()}}})),v=Object(o.a)(f,2),C=v[0],w=v[1];Object(c.useEffect)((function(){x&&x.data&&!1===x.isLoading&&l({type:"DELETE_TODO",todoId:s})}),[x]),Object(c.useEffect)((function(){C&&C.data&&!1===C.isLoading&&l({type:"TOGGLE_TODO",complete:C.data.complete,dateCompleted:C.data.dateCompleted,todoId:s})}),[C]);var y=a;return d&&a.length>30&&(y=a.substring(0,30)+"..."),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(L.a,{children:[Object(b.jsx)(L.a.Header,{children:Object(b.jsx)("h4",{children:Object(b.jsx)("b",{children:t})})}),Object(b.jsx)(L.a.Body,{children:Object(b.jsxs)(L.a.Text,{children:[y,Object(b.jsx)("br",{})]})}),Object(b.jsxs)(k.a,{className:"list-group-flush",children:[Object(b.jsxs)(T.a,{children:["Date Created : ",r]}),Object(b.jsxs)(T.a,{children:["Completed ",Object(b.jsx)("input",{type:"checkbox",checked:n,onChange:function(e){w(t,a,e.target.checked)}}),n&&Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("i",{children:[" : ",(new Date).toLocaleDateString("en-us")]})})]})]}),Object(b.jsx)(L.a.Body,{children:Object(b.jsx)(g.a,{variant:"primary",onClick:function(e){m(t,a)},children:"Delete Post"})})]}),Object(b.jsx)("br",{})]})}var D=r.a.memo(S);function R(){var e=Object(c.useContext)(j.a).state.todos;return Object(b.jsxs)("div",{children:[0===e.length&&Object(b.jsx)("h2",{children:"No todos found for current user"}),e.length>0&&e.map((function(e,t){return Object(c.createElement)(D,Object(x.a)(Object(x.a)({},e),{},{short:!0,title:e.title,description:e.description,dateCreated:e.dateCreated,complete:e.complete,dateCompleted:e.dateCompleted,key:"todo-"+t,todoId:e.id}))}))]})}function _(){var e=Object(c.useContext)(j.a),t=e.state,a=e.dispatch,r=Object(u.b)((function(){return{url:"/todo",method:"get",headers:{Authorization:"".concat(t.user.access_token)}}})),n=Object(o.a)(r,2),s=n[0],i=n[1];Object(c.useEffect)((function(){i()}),[t.user]),Object(c.useEffect)((function(){s&&!1===s.isLoading&&s.data&&(console.log(s.data),a({type:"FETCH_TODOS",todos:s.data.todos}))}),[s]);s.data;var d=s.isLoading;return Object(b.jsxs)(b.Fragment,{children:[d&&"Todos loading..."," ",Object(b.jsx)(R,{})]})}function F(e){var t=e.id,a=Object(c.useContext)(j.a).state,r=Object(u.b)((function(){return{url:"/todo/".concat(t),headers:{Authorization:"".concat(a.user.access_token)},method:"get"}})),n=Object(o.a)(r,2),s=n[0],d=n[1];return Object(c.useEffect)(d,[t]),Object(b.jsxs)("div",{children:[s&&s.data?Object(b.jsx)(D,Object(x.a)({},s.data)):"Loading...",Object(b.jsx)("div",{children:Object(b.jsx)(i.a,{href:"/",children:"Go Back"})})]})}function I(e){e.username}var B=r.a.memo(I);function G(){var e=Object(c.useContext)(j.a).state.user;return Object(b.jsxs)("div",{children:[0===e.length&&Object(b.jsx)("h2",{children:"No users found"}),e.length>0&&e.map((function(e,t){return Object(c.createElement)(B,Object(x.a)(Object(x.a)({},e),{},{username:e.username,key:"user-"+t}))}))]})}function A(){return Object(b.jsx)(G,{})}var H=a(57);function N(e,t){switch(t.type){case"LOGIN":case"REGISTER":return{username:t.username,access_token:t.access_token};case"LOGOUT":return{username:void 0,access_token:void 0};default:return e}}function z(e,t){switch(t.type){case"FETCH_TODOS":return t.todos;case"CREATE_TODO":return[{title:t.title,description:t.description,dateCreated:t.dateCreated,complete:!1,dateCompelted:void 0,id:t.id}].concat(Object(H.a)(e));case"TOGGLE_TODO":return e.map((function(e){return e.id===t.todoId&&(e.complete=t.complete,e.dateCompleted=t.dateCompelted),e}));case"DELETE_TODO":return e.filter((function(e){return e.id!==t.todoId}));default:return e}}function U(e,t){return{user:N(e.user,t),todos:z(e.todos,t)}}var P=function(){var e=Object(c.useReducer)(U,{user:{},todos:[]}),t=Object(o.a)(e,2),a=t[0],r=t[1],n=Object(d.f)({"/":Object(d.g)({view:Object(b.jsx)(_,{})}),"/users":Object(d.g)({view:Object(b.jsx)(A,{})}),"/todo/create":Object(d.g)({view:Object(b.jsx)(O,{})}),"/todo/:id":Object(d.g)((function(e){return{view:Object(b.jsx)(F,{id:e.params.id})}}))});return Object(b.jsx)("div",{children:Object(b.jsx)(j.a.Provider,{value:{state:a,dispatch:r},children:Object(b.jsx)(i.b,{routes:n,children:Object(b.jsxs)(l.a,{children:[Object(b.jsx)(E,{}),Object(b.jsx)(i.c,{})]})})})})},q=a(39),J=a.n(q).a.create({baseURL:"/"});s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(u.a,{value:J,children:Object(b.jsx)(P,{})})}),document.getElementById("root"))},8:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var c=a(0),r=a.n(c).a.createContext({state:{},dispatch:function(){}})}},[[104,1,2]]]);
//# sourceMappingURL=main.b9e61e63.chunk.js.map