(window.webpackJsonpnotes=window.webpackJsonpnotes||[]).push([[0],{15:function(t,e,n){t.exports=n(38)},37:function(t,e,n){},38:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),o=n(13),c=n.n(o),u=n(14),i=n(2),l=function(t){var e=t.note,n=t.toggleImportance,r=e.important?"make not important":"make important";return a.a.createElement("li",{className:"note"},e.content,a.a.createElement("button",{onClick:n},r))},f=function(t){var e=t.message;return null===e?null:a.a.createElement("div",{className:"error"},e)},m=function(){return a.a.createElement("div",{style:{color:"green",fontStyle:"italic",fontSize:16}},a.a.createElement("br",null),a.a.createElement("em",null,"Note app, Department of Computer Science, University of Helsinki 2019"))},s=n(3),p=n.n(s),b=function(){var t=p.a.get("/api/notes"),e={id:1e4,content:"This note is not saved to server",date:"2019-05-30T17:30:31.098Z",important:!0};return t.then(function(t){return t.data.concat(e)})},d=function(t){return p.a.post("/api/notes",t).then(function(t){return t.data})},v=function(t,e){return p.a.put("".concat("/api/notes","/").concat(t),e).then(function(t){return t.data})};function O(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}var E=function(){var t=Object(r.useState)([]),e=Object(i.a)(t,2),n=e[0],o=e[1],c=Object(r.useState)(""),s=Object(i.a)(c,2),p=s[0],E=s[1],g=Object(r.useState)(!0),j=Object(i.a)(g,2),h=j[0],y=j[1],w=Object(r.useState)(null),S=Object(i.a)(w,2),k=S[0],P=S[1];Object(r.useEffect)(function(){b().then(function(t){return o(t)})},[]);var D=h?n:n.filter(function(t){return t.important}),N=function(t){var e=n.find(function(e){return e.id===t}),r=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?O(n,!0).forEach(function(e){Object(u.a)(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):O(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({},e,{important:!e.important});v(t,r).then(function(e){o(n.map(function(n){return n.id!==t?n:e}))}).catch(function(r){P("Note '".concat(e.content,"' was already removed from server")),setTimeout(function(){P(null)},5e3),o(n.filter(function(e){return e.id!==t}))})};return a.a.createElement("div",null,a.a.createElement("h1",null,"Notes"),a.a.createElement(f,{message:k}),a.a.createElement("div",null,a.a.createElement("button",{onClick:function(){return y(!h)}},"show ",h?"important":"all")),a.a.createElement("ul",null,D.map(function(t){return a.a.createElement(l,{key:t.id,note:t,toggleImportance:function(){return N(t.id)}})})),a.a.createElement("form",{onSubmit:function(t){t.preventDefault();var e={content:p,date:(new Date).toISOString(),important:Math.random()>.5,id:n.length+1};d(e).then(function(t){o(n.concat(t)),E("")})}},a.a.createElement("input",{value:p,onChange:function(t){E(t.target.value)}}),a.a.createElement("button",{type:"submit"},"save")),a.a.createElement(m,null))};n(37);c.a.render(a.a.createElement(E,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.a4cae401.chunk.js.map