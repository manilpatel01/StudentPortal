(this.webpackJsonpfront_ldce=this.webpackJsonpfront_ldce||[]).push([[11],{182:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(188);function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,l=!1,r=void 0;try{for(var c,o=e[Symbol.iterator]();!(n=(c=o.next()).done)&&(a.push(c.value),!t||a.length!==t);n=!0);}catch(m){l=!0,r=m}finally{try{n||null==o.return||o.return()}finally{if(l)throw r}}return a}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},188:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(189);function l(e,t){if(e){if("string"===typeof e)return Object(n.a)(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Object(n.a)(e,t):void 0}}},189:function(e,t,a){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}a.d(t,"a",(function(){return n}))},230:function(e,t,a){"use strict";var n=a(0),l=a.n(n);t.a=function(e){var t=e.src;return l.a.createElement("div",{className:"modal fade",id:"openDocumentModal",tabIndex:"-1",role:"dialog"},l.a.createElement("div",{className:"modal-dialog modal-lg",role:"document"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("h4",{className:"modal-title",id:"openDocumentModal_title"},"Document"),l.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),l.a.createElement("div",{className:"modal-body"},l.a.createElement("img",{className:"img-fluid img-thumbnail",src:t,id:"fee_Receipt",alt:"fee receipt"})),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("button",{type:"button",className:"btn btn-danger btn-lg","data-dismiss":"modal"},"Close")))))}},325:function(e,t,a){"use strict";a.r(t);var n=a(20),l=a.n(n),r=a(38),c=a(182),o=a(0),m=a.n(o),u=a(7),s=a.n(u),d=a(48),i=a(230);function b(e){var t=e.data;console.log(t);var a;return m.a.createElement("div",{class:"modal fade",id:"openFeeRefundModal",tabindex:"-1",role:"dialog"},m.a.createElement("div",{class:"modal-dialog modal-lg",role:"document"},m.a.createElement("div",{class:"modal-content"},m.a.createElement("div",{class:"modal-header"},m.a.createElement("h4",{class:"modal-title",id:"change_photo_title"},"Fee Receipt"),m.a.createElement("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},m.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),m.a.createElement("div",{class:"modal-body"},m.a.createElement("table",{class:"table table-bordered"},m.a.createElement("thead",null),t&&m.a.createElement("tbody",null,m.a.createElement("tr",null,m.a.createElement("th",{scope:"row"},"Fee Type "),m.a.createElement("td",null,"string"!==typeof(a=t.type.toLowerCase())?"":a.charAt(0).toUpperCase()+a.slice(1)," Fee")),m.a.createElement("tr",null,m.a.createElement("th",{scope:"row"},"Amount"),m.a.createElement("td",null,t.amount," ")),m.a.createElement("tr",null,m.a.createElement("th",{scope:"row"},"Transection Id "),m.a.createElement("td",null,t.transaction_no," ")),m.a.createElement("tr",null,m.a.createElement("th",{scope:"row"},"Bank Name "),m.a.createElement("td",null,t.bank_name," ")),m.a.createElement("tr",null,m.a.createElement("th",{scope:"row"},"Bank Ifsc Code "),m.a.createElement("td",null,t.bank_ifsc," ")),m.a.createElement("tr",null,m.a.createElement("th",{scope:"row"},"Bank Branch "),m.a.createElement("td",null,t.bank_branch," ")),m.a.createElement("tr",null,m.a.createElement("th",{scope:"row"},"Bank Account Number "),m.a.createElement("td",null,t.bank_ac_no," "))))),m.a.createElement("div",{class:"modal-footer"},m.a.createElement("button",{type:"button",class:"btn btn-danger btn-lg","data-dismiss":"modal"},"Close")))))}t.default=function(){var e=Object(o.useState)(),t=Object(c.a)(e,2),a=t[0],n=t[1],u=Object(o.useState)(),E=Object(c.a)(u,2),f=E[0],p=E[1],h=Object(o.useState)(""),v=Object(c.a)(h,2),g=v[0],y=v[1],_=function(e,t,l,r){document.getElementById("reject-".concat(e)).disabled="true",document.getElementById("approve-".concat(e)).disabled="true";var c=new FormData;c.set("enrollment",t),c.set("status",l),null!==r&&c.set("comment",r),s.a.post("/api/admin/FeeRefundApprove",c).then((function(t){return n(a.filter((function(t){return t.refund_id!==e})))})).catch((function(t){console.log(t),document.getElementById("reject-".concat(e)).disabled=!1,document.getElementById("approve-".concat(e)).disabled=!1}))};Object(o.useEffect)((function(){Object(r.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("/admin/pendingFeeRefund").then((function(e){n(e.data),console.log(e.data)})).catch((function(e){return console.log(e)}));case 2:case"end":return e.stop()}}),e)})))()}),[]);var j=1;return m.a.createElement("div",{class:"container-fluid mt-4"},m.a.createElement("div",{class:"row"},m.a.createElement("div",{class:"col"},a?0===a.length?m.a.createElement("h1",{className:"text-center"},"No Fee Refund Requests Found For Approval!"):a&&m.a.createElement("div",{class:"table-responsive"},m.a.createElement("table",{class:"table table-bordered table-hover"},m.a.createElement("thead",null,m.a.createElement("tr",null,m.a.createElement("th",null,"Sr No."),m.a.createElement("th",null,"Enrollment"),m.a.createElement("th",null,"Name"),m.a.createElement("th",null,"Semester"),m.a.createElement("th",null,"Fee Details"),m.a.createElement("th",null,"Fee Receipt"),m.a.createElement("th",null,"Approve"),m.a.createElement("th",null,"Reject"))),m.a.createElement("tbody",null,a.map((function(e){return m.a.createElement("tr",null,m.a.createElement("td",null,j++),m.a.createElement("td",null,e.enrollment),m.a.createElement("td",null,e.first_name," ",e.middle_name," ",e.last_name," "),m.a.createElement("td",null,e.semester),m.a.createElement("td",null,m.a.createElement("button",{type:"button",class:"btn btn-outline-primary btn-sm",id:j,"data-toggle":"modal","data-target":"#openFeeRefundModal",onClick:function(t){var a={};a.type=e.fees_type,a.transaction_no=e.transaction_no,a.bank_ac_no=e.bank_ac_no,a.bank_branch=e.bank_branch,a.bank_ifsc=e.bank_ifsc,a.bank_name=e.bank_name,a.amount=e.amount,p(a)}},"fee Details")),m.a.createElement("td",null,m.a.createElement("button",{type:"button",class:"btn btn-outline-primary btn-sm",id:j,"data-toggle":"modal","data-target":"#openDocumentModal",onClick:function(t){return y("/upload/"+e.fee_document_url)}},"fee Receipt")),m.a.createElement("td",null,m.a.createElement("form",{onSubmit:function(t){t.preventDefault(),_(e.refund_id,e.enrollment,1,null)}},m.a.createElement("button",{type:"submit",class:"btn btn-outline-success btn-sm",id:"approve-".concat(e.refund_id)},"Aprrove"))),m.a.createElement("td",null,m.a.createElement("form",{onSubmit:function(t){t.preventDefault(),_(e.refund_id,e.enrollment,2,t.target.comment.value)}},m.a.createElement("div",{class:"input-group"},m.a.createElement("input",{type:"text",class:"form-control",name:"comment",placeholder:"Enter Comment on reject...",required:!0}),m.a.createElement("div",{class:"input-group-append"},m.a.createElement("button",{type:"submit",id:"reject-".concat(e.refund_id),class:"btn btn-outline-danger btn-sm"},"Reject"))))))}))))):m.a.createElement(d.a,null))),m.a.createElement(i.a,{src:g}),m.a.createElement(b,{data:f}))}}}]);
//# sourceMappingURL=11.2d5b665e.chunk.js.map