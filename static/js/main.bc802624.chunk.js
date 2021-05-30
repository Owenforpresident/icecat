(this.webpackJsonpmap_configs=this.webpackJsonpmap_configs||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),l=n(8),o=n.n(l),r=(n(13),n(7)),s=n(2),i=n(0),u=function(e){var t=e.color,n=e.text,c=e.onClick;return Object(i.jsx)("button",{onClick:c,style:{backgroundColor:t},className:"btn",children:n})};u.defaultProps={color:"steelblue"};var d=u,j=function(e){var t=e.onAdd,n=e.showForm;return Object(i.jsxs)("div",{className:"header",children:[Object(i.jsx)("h1",{children:"Config Mapper"}),Object(i.jsx)(d,{color:"blue",text:n?"Add Config":"Hide Form",onClick:t,showform:n})]})},b=function(e){var t=e.value;return Object(i.jsx)("div",{children:Object(i.jsxs)("p",{className:"values",children:["Value Code : ",t.code," ",Object(i.jsx)("br",{})," French Value: ",t.name.fr,Object(i.jsx)("br",{})," English Value : ",t.name.en]})})},h=function(e){var t=e.onEdit,n=e.config,a=e.onEditClick,l=Object(c.useState)(n.id),o=Object(s.a)(l,2),r=o[0],u=(o[1],Object(c.useState)(n.name)),d=Object(s.a)(u,2),j=d[0],b=d[1],h=Object(c.useState)(n.values.map((function(e){return e.code}))),f=Object(s.a)(h,2),O=f[0],m=f[1],v=Object(c.useState)(n.values.map((function(e){return e.name.en}))),g=Object(s.a)(v,2),x=g[0],p=g[1],C=Object(c.useState)(n.values.map((function(e){return e.name.fr}))),N=Object(s.a)(C,2),S=N[0],y=N[1];return Object(i.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),a(),t({id:r,name:j,code:O,french:S,english:x})},children:[Object(i.jsxs)("div",{className:"form-control",children:[Object(i.jsx)("label",{children:"Config Name"}),Object(i.jsx)("input",{type:"text",placeholder:"Add Config",value:j,onChange:function(e){return b(e.target.value)}})]}),Object(i.jsxs)("div",{className:"form-control",children:[Object(i.jsx)("label",{children:"Value Codes"}),Object(i.jsx)("input",{type:"text",placeholder:"Update value codes",value:O,onChange:function(e){return m(e.target.value)}})]}),Object(i.jsxs)("div",{className:"form-control",children:[Object(i.jsx)("label",{children:"French Values List"}),Object(i.jsx)("input",{type:"text",placeholder:"Update French values",value:S,onChange:function(e){return y(e.target.value)}})]}),Object(i.jsxs)("div",{className:"form-control",children:[Object(i.jsx)("label",{children:"English Values List"}),Object(i.jsx)("input",{type:"text",placeholder:"Update English values",value:x,onChange:function(e){return p(e.target.value)}})]}),Object(i.jsx)("input",{type:"submit",value:"Update Config",className:"btn btn-block"})]})},f=n(6),O=function(e){var t=e.config,n=e.onDelete,a=e.onEdit,l=Object(c.useState)(!1),o=Object(s.a)(l,2),r=o[0],u=o[1],d=function(){u(!r)};return Object(i.jsxs)("div",{className:"config",children:[Object(i.jsxs)("h3",{children:[t.name," ",Object(i.jsx)(f.b,{onClick:function(){return n(t.id)}})]}),Object(i.jsx)("div",{children:t.values.map((function(e){return Object(i.jsx)(b,{value:e})}))}),Object(i.jsx)("h3",{style:{float:"right"},children:Object(i.jsx)(f.a,{onClick:function(){return d()}})}),r?Object(i.jsx)(h,{onEditClick:d,onEdit:a,config:t}):""]})},m=function(e){var t=e.configs,n=e.onDelete,c=e.onEdit;return Object(i.jsx)("div",{children:t.map((function(e){return Object(i.jsx)(O,{config:e,onDelete:n,onEdit:c},e.id)}))})},v=function(e){var t=e.onAdd,n=(e.showForm,Object(c.useState)("")),a=Object(s.a)(n,2),l=a[0],o=a[1],r=Object(c.useState)(""),u=Object(s.a)(r,2),d=u[0],j=u[1],b=Object(c.useState)(""),h=Object(s.a)(b,2),f=h[0],O=h[1],m=Object(c.useState)(""),v=Object(s.a)(m,2),g=v[0],x=v[1];return Object(i.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),l?(t({name:l,code:d,french:g,english:f}),o(""),j("")):alert("Please add a Config Name")},children:[Object(i.jsxs)("div",{className:"form-control",children:[Object(i.jsx)("label",{children:"Config Name"}),Object(i.jsx)("input",{type:"text",placeholder:"Add Config",value:l,onChange:function(e){return o(e.target.value)}})]}),Object(i.jsxs)("div",{className:"form-control",children:[Object(i.jsx)("label",{children:"Value Codes"}),Object(i.jsx)("input",{type:"text",placeholder:"Add value codes",value:d,onChange:function(e){return j(e.target.value)}})]}),Object(i.jsxs)("div",{className:"form-control",children:[Object(i.jsx)("label",{children:"French Values List"}),Object(i.jsx)("input",{type:"text",placeholder:"Add the French values list",value:g,onChange:function(e){return x(e.target.value)}})]}),Object(i.jsxs)("div",{className:"form-control",children:[Object(i.jsx)("label",{children:"English Values List"}),Object(i.jsx)("input",{type:"text",placeholder:"Add the English values list",value:f,onChange:function(e){return O(e.target.value)}})]}),Object(i.jsx)("input",{type:"submit",value:"Save Config",className:"btn btn-block"})]})};var g=function(){var e=Object(c.useState)(!0),t=Object(s.a)(e,2),n=t[0],a=t[1],l=Object(c.useState)([{id:1,name:"Icecat Colors",values:[{code:"blue",name:{fr:"bleue",en:"blue"}},{code:"red",name:{fr:"rouge",en:"red"}}]},{id:2,name:"Lego Colors",values:[{code:"0",name:{fr:"bleue"}},{code:"1",name:{fr:"rouge"}}]}]),o=Object(s.a)(l,2),u=o[0],d=o[1];return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)(j,{onAdd:function(){return a(!n)},showForm:n}),!n&&Object(i.jsx)(v,{onAdd:function(e){a(!n);var t={id:Math.floor(1e4*Math.random()+1),name:e.name,values:[{code:e.code,name:{en:e.english,fr:e.french}}]};d([].concat(Object(r.a)(u),[t]))}}),u.length>0?Object(i.jsx)(m,{configs:u,onDelete:function(e){d(u.filter((function(t){return t.id!==e})))},onEdit:function(e){var t=e.code.toString().split(","),n=e.english.toString().split(","),c=e.french.toString().split(",");if(t.length===n.length||t.length===c.length){for(var a=[],l=0;l<t.length;l++)a.push({code:t[l],name:{en:n[l],fr:c[l]}});var o={id:e.id,name:e.name,values:a},s=Object(r.a)(u).map((function(t){return t.id===e.id&&(t=o),t}));d(s)}else alert("Please ensure you have enough values to map")}}):"No configurations to show"]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,l=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),l(e),o(e)}))};o.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(g,{})}),document.getElementById("root")),x()}},[[15,1,2]]]);
//# sourceMappingURL=main.bc802624.chunk.js.map