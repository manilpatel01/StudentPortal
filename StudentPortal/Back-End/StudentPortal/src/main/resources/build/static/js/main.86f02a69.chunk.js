(this.webpackJsonpfront_ldce=this.webpackJsonpfront_ldce||[]).push([[3],{1:function(e,t,a){"use strict";a.d(t,"h",(function(){return n})),a.d(t,"k",(function(){return c})),a.d(t,"l",(function(){return r})),a.d(t,"g",(function(){return o})),a.d(t,"e",(function(){return l})),a.d(t,"f",(function(){return i})),a.d(t,"a",(function(){return u})),a.d(t,"i",(function(){return s})),a.d(t,"d",(function(){return d})),a.d(t,"b",(function(){return m})),a.d(t,"m",(function(){return p})),a.d(t,"j",(function(){return f})),a.d(t,"c",(function(){return b}));var n="SET_AUTHENTICATED",c="SET_UNAUTHENTICATED",r="SET_USER",o="SET_ADMIN",l="LOADING_USER",i="LOGOUT",u="CHANGE_SIGN_OR_PHOTO",s="SET_ERRORS",d="LOADING_UI",m="CLEAR_ERRORS",p="STOP_LOADING_UI",f="SET_OPERATION_SUCCESS",b="LOADING_DATA"},113:function(e,t,a){},114:function(e,t,a){},176:function(e,t,a){},177:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(35),o=a.n(r),l=a(4),i=a(6),u=a(14),s=a(21),d=a(36),m=(a(113),a(48)),p=a(17),f=a(70),b=a(179),h=a(37),E=a(5),g=a(1),v={authenticated:!1,loading:!1,credentials:{}};var y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g.h:return Object(E.a)(Object(E.a)({},e),{},{authenticated:!0});case g.k:return v;case g.l:return{loading:!1,authenticated:!0,credentials:Object(E.a)({},t.payload)};case g.g:return{loading:!1,authenticated:!0,credentials:Object(E.a)({},t.payload),dashboard:Object(E.a)({},t.dashboard)};case g.e:return Object(E.a)(Object(E.a)({},e),{},{loading:!0});case g.a:var a=t.fieldname;return Object(E.a)(Object(E.a)({},e),{},{credentials:Object(E.a)(Object(E.a)({},e.credentials),{},Object(h.a)({},a,t.payload))});case g.f:return v;default:return e}},O={loading:!1,success:!1,successMessage:{},errors:{}};var N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g.i:return Object(E.a)(Object(E.a)({},e),{},{loading:!1,errors:t.payload});case g.d:return Object(E.a)(Object(E.a)({},e),{},{loading:!0});case g.m:return Object(E.a)(Object(E.a)({},e),{},{loading:!1});case g.b:return O;case g.j:return Object(E.a)(Object(E.a)({},e),{},{successMessage:t.payload,loading:!1,success:!0});default:return e}},j={loading:!1,students:[]};var S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g.c:return Object(E.a)(Object(E.a)({},e),{},{loading:!0});default:return e}},T=[f.a],D=Object(p.c)({User:y,UI:N,Data:S,form:b.a}),w=Object(p.e)(D,{},Object(p.d)(p.a.apply(void 0,T),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e})),k=a(27);var _=Object(u.b)((function(e){return{authenticated:e.User.authenticated}}))((function(e){var t=e.authenticated,a=e.component,n=Object(k.a)(e,["authenticated","component"]),r=localStorage.getItem("token");return r&&Object(d.a)(r).exp<Date.now()/1e3&&w.dispatch(Object(s.g)()),c.a.createElement(i.b,Object.assign({},n,{render:function(e){return!0===t?c.a.createElement(a,e):c.a.createElement(i.a,{to:"/login"})}}))}));var I=Object(u.b)((function(e){return{authenticated:e.User.authenticated,role:e.User.credentials.role}}))((function(e){var t=e.authenticated,a=e.component,n=e.role,r=Object(k.a)(e,["authenticated","component","role"]);return c.a.createElement(i.b,Object.assign({},r,{render:function(e){return!1===t?c.a.createElement(a,e):c.a.createElement(i.a,{to:n?"ROLE_STUDENT"===n?"/student/":"/admin/":"/"})}}))}));a(176);var U=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("li",{className:"nav-item"},c.a.createElement(l.b,{className:"nav-link",to:"/"},"Home")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(l.b,{className:"nav-link",to:"/login"},"Login")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(l.b,{className:"nav-link",to:"/student/"},"Student-panel")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(l.b,{className:"nav-link",to:"/admin/"},"Admin-panel")))};var x=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("li",{className:"nav-item"},c.a.createElement(l.b,{className:"nav-link",to:"/student/"},"DashBoard")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(l.b,{className:"nav-link",to:"/profile"},"View-Profile")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(l.b,{className:"nav-link",to:"/student/request"},"Request Certificate")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(l.b,{className:"nav-link",to:"/logout"},"Logout")))};var A=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("li",{className:"nav-item"},c.a.createElement(l.b,{className:"nav-link",to:"/admin/"},"DashBoard")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(l.b,{className:"nav-link",to:"/admin/pendingVerification"},"Pendding Verification")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(l.b,{className:"nav-link",to:"/admin/pendingDocument"},"Pendding Document")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(l.b,{className:"nav-link",to:"/admin/findDocument"},"Search Document")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(l.b,{className:"nav-link",to:"/admin/search-student"},"Search Student")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(l.b,{className:"nav-link",to:"/importExcel"},"Import Student")),c.a.createElement("li",{class:"nav-item dropdown"},c.a.createElement("a",{class:"nav-link dropdown-toggle",href:"#","data-toggle":"dropdown"},c.a.createElement("i",{className:"fa fa-user"})),c.a.createElement("ul",{class:"dropdown-menu"},c.a.createElement("li",{className:"nav-item"},c.a.createElement(l.b,{className:"nav-link",to:"/profile/"},"View Profile")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(l.b,{className:"nav-link",to:"/logout"},"Logout")))))};var L=function(){var e=Object(u.d)((function(e){return e.User.authenticated})),t=Object(u.d)((function(e){return e.User.credentials.role}));return Object(n.useEffect)((function(){document.querySelector("#navigation-bar .navbar-toggler").addEventListener("click",(function(){document.getElementById("navbarToggler").classList.toggle("show"),document.querySelector("#navigation-bar .overlay").classList.toggle("show")}))}),[]),Object(n.useEffect)((function(){document.querySelectorAll("#navigation-bar .overlay, #navbarToggler li:not(.dropdown)").forEach((function(e){e.addEventListener("click",(function(){document.getElementById("navbarToggler").classList.remove("show"),document.querySelector("#navigation-bar .overlay").classList.remove("show")}))}))}),[t,e]),c.a.createElement("nav",{id:"navigation-bar"},c.a.createElement("nav",{className:"navbar navbar-expand-lg"},c.a.createElement("div",{className:"container"},c.a.createElement(l.b,{className:"navbar-brand",to:"/"},c.a.createElement("img",{id:"logo-header",className:"img-fluid",src:"/static/images/header.png",alt:"LDCE LOGO",title:"L.D. College of Engineering"})),c.a.createElement("img",{id:"logo-header",className:"pull-right navbar-right-logo d-lg-block d-none",src:"/static/images/affiliated.png",alt:"Approved by AICTE and Affiliated to GTU"}),c.a.createElement("button",{className:"navbar-toggler",type:"button"},c.a.createElement("span",{className:"fa fa-bars"})))),c.a.createElement("div",{className:"overlay"}),c.a.createElement("nav",{id:"navbarToggler",className:"navbar navbar-expand-lg navbar-collapse mobile-sidebar"},c.a.createElement("ul",{className:"navbar-nav"},e?"ROLE_STUDENT"===t?c.a.createElement(x,null):c.a.createElement(A,null):c.a.createElement(U,null))))},P=Object(n.lazy)((function(){return a.e(11).then(a.bind(null,324))})),z=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(2),a.e(9)]).then(a.bind(null,322))})),R=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(10)]).then(a.bind(null,321))})),C=Object(n.lazy)((function(){return a.e(17).then(a.bind(null,311))})),G=Object(n.lazy)((function(){return a.e(16).then(a.bind(null,312))})),q=Object(n.lazy)((function(){return a.e(21).then(a.bind(null,313))})),B=Object(n.lazy)((function(){return a.e(8).then(a.bind(null,325))})),F=Object(n.lazy)((function(){return Promise.all([a.e(2),a.e(6)]).then(a.bind(null,326))})),V=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(19)]).then(a.bind(null,320))})),H=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(20)]).then(a.bind(null,314))})),M=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(15)]).then(a.bind(null,323))})),X=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(1),a.e(23)]).then(a.bind(null,315))})),J=Object(n.lazy)((function(){return Promise.all([a.e(7),a.e(12)]).then(a.bind(null,327))})),W=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(1),a.e(14)]).then(a.bind(null,319))})),$=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(13)]).then(a.bind(null,316))})),K=Object(n.lazy)((function(){return a.e(22).then(a.bind(null,317))})),Q=Object(n.lazy)((function(){return a.e(18).then(a.bind(null,318))}));var Y=function(){var e=localStorage.getItem("token"),t=localStorage.getItem("domain");return e&&t&&(Object(d.a)(e).exp<Date.now()/1e3?w.dispatch(Object(s.g)()):w.dispatch(Object(s.i)(e,t))),c.a.createElement(u.a,{store:w},c.a.createElement(l.a,null,c.a.createElement(L,null),c.a.createElement(n.Suspense,{fallback:c.a.createElement(m.a,null)},c.a.createElement(i.d,null,c.a.createElement(I,{exact:!0,path:"/",component:C}),c.a.createElement(I,{exact:!0,path:"/login",component:$}),c.a.createElement(i.b,{exact:!0,path:"/logout",component:K}),c.a.createElement(I,{exact:!0,path:"/forgotPassword",component:H}),c.a.createElement(I,{exact:!0,path:"/registerStudent",component:X}),c.a.createElement(I,{exact:!0,path:"/registerFaculty",component:M}),c.a.createElement(_,{exact:!0,path:"/profile",component:W}),c.a.createElement(_,{exact:!0,path:"/student",component:G}),c.a.createElement(_,{exact:!0,path:"/admin",component:q}),c.a.createElement(_,{exact:!0,path:"/admin/pendingVerification",component:B}),c.a.createElement(_,{exact:!0,path:"/admin/pendingDocument",component:F}),c.a.createElement(_,{exact:!0,path:"/admin/pendingFeeRefund",component:P}),c.a.createElement(_,{exact:!0,path:"/admin/search-student",component:R}),c.a.createElement(_,{exact:!0,path:"/admin/findDocument",component:z}),c.a.createElement(_,{exact:!0,path:"/student/request",component:V}),c.a.createElement(_,{exact:!0,path:"/importExcel",component:J}),c.a.createElement(i.b,{path:"*",component:Q})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},21:function(e,t,a){"use strict";a.d(t,"f",(function(){return u})),a.d(t,"b",(function(){return d})),a.d(t,"j",(function(){return m})),a.d(t,"a",(function(){return p})),a.d(t,"d",(function(){return f})),a.d(t,"c",(function(){return b})),a.d(t,"h",(function(){return h})),a.d(t,"e",(function(){return E})),a.d(t,"g",(function(){return g})),a.d(t,"i",(function(){return v}));var n=a(20),c=a.n(n),r=a(38),o=a(1),l=a(7),i=a.n(l),u=function(e,t){return function(){var a=Object(r.a)(c.a.mark((function a(n){return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:n({type:o.b}),n({type:o.d}),i.a.post("/api/authenticate",e).then((function(e){n(v(e.data.jwt,e.data.domain)),y(e.data.jwt,e.data.domain),n({type:o.m}),"STUDENT"===e.data.domain?t.push("/student"):t.push("/admin")})).catch((function(e){console.log(e),n({type:o.i,payload:e.response.data})}));case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},s=function(e){return function(t){var a;"STUDENT"===e?(a="/api/student/data",i.a.get(a).then((function(e){t({type:o.l,payload:e.data})})).catch((function(e){console.log(e),t({type:o.i,payload:e})}))):(a="/api/admin/data",i.a.get(a).then((function(e){i.a.get("/api/admin/adminDashbord").then((function(a){console.log(a.data),t({type:o.g,payload:e.data,dashboard:a.data})})).catch((function(e){return console.log(e)}))})))}},d=function(e,t){return function(a){a({type:o.b}),a({type:o.d});i.a.post("/api/registerStudent",e,{header:{"content-type":"multipart/form-data"}}).then((function(e){a({type:o.j,payload:e.data}),setTimeout((function(){t.push("/login")}),1e3)})).catch((function(e){console.error(e),a({type:o.i,payload:e.response.data})}))}},m=function(e){return function(t){t({type:o.b}),t({type:o.d});i.a.post("/api/student/updateStudent",e,{header:{"content-type":"multipart/form-data"}}).then((function(e){t(s("STUDENT")),t({type:o.j,payload:"success"})})).catch((function(e){console.log(e),t({type:o.i,payload:e.response.data})}))}},p=function(e,t){return function(a){a({type:o.b}),a({type:o.d});i.a.post("/api/registerFaculty",e,{header:{"content-type":"multipart/form-data"}}).then((function(e){a({type:o.j,payload:e.data}),setTimeout((function(){t.push("/login")}),1e3)})).catch((function(e){console.error(e),a({type:o.i,payload:e.response.data})}))}},f=function(e,t){return function(a){a({type:o.b});var n,l,u=new FormData;e.sign?(l="sign",u.append(l,e[l],e[l].name),n=t+"/changeSign"):(l="photo",u.append(l,e[l],e[l].name),n=t+"/changePhoto");i.a.post("/api"+n,u,{header:{"content-type":"multipart/form-data"}}).then(function(){var e=Object(r.a)(c.a.mark((function e(n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a(s("/student"===t?"STUDENT":"ADMIN"));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e),a({type:o.i,payload:e.response.data})}))}},b=function(e,t){return function(a){a({type:o.b}),a({type:o.d});i.a.post("/api".concat(t,"/changePassword"),e,{header:{"content-type":"multipart/form-data"}}).then((function(e){a({type:o.j,payload:"success"})})).catch((function(e){console.error(e),a({type:o.i,payload:e.response.data})}))}},h=function(e,t,a){return function(n){n({type:o.b}),n({type:o.d});var c="feerefund"===e?"/api/student/feeRefund":"/api/student/DocumentSubmit/".concat(e);i.a.post(c,t,{header:{"content-type":"multipart/form-data"}}).then((function(e){n({type:o.j,payload:"Success"}),n(s("STUDENT")),n({type:o.b}),a.push("/student")})).catch((function(e){console.error(e),n({type:o.i,payload:e.response.data})}))}},E=function(e){return function(t){t({type:o.b}),t({type:o.d}),console.log(e);i.a.post("/api/forgotPassword",e,{header:{"content-type":"multipart/form-data"}}).then((function(e){t({type:o.j,payload:e.data})})).catch((function(e){console.error(e),t({type:o.i,payload:e.response.data})}))}},g=function(){return function(e){i.a.defaults.headers.common.Authorization&&delete i.a.defaults.headers.common.Authorization,i.a.defaults.headers.common.Domain&&delete i.a.defaults.headers.common.Domain,O(),e({type:o.f})}},v=function(e,t){return function(a){a({type:o.h}),i.a.defaults.headers.common.Authorization="Bearer ".concat(e),i.a.defaults.headers.common.Domain=t,a(s(t))}},y=function(e,t){localStorage.setItem("token",e),localStorage.setItem("domain",t)},O=function(){localStorage.removeItem("token"),localStorage.removeItem("domain")}},48:function(e,t,a){"use strict";var n=a(0),c=a.n(n);a(114);t.a=function(){return c.a.createElement("div",{className:"loading"},c.a.createElement("div",{className:"circle"}),c.a.createElement("div",{className:"circle"}),c.a.createElement("div",{className:"circle"}),c.a.createElement("div",{className:"circle"}),c.a.createElement("div",{className:"circle"}))}},88:function(e,t,a){e.exports=a(177)}},[[88,4,5]]]);
//# sourceMappingURL=main.86f02a69.chunk.js.map