(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(9),i=a.n(n),r=a(7),c=a(6),s=a(4),o=a(2),l=(a(15),a(1)),d=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],u=a(10),m=a.n(u),j=a(0),b=function(e){var t=e.user;return Object(j.jsx)("a",{className:"UserInfo",href:"mailto:".concat(t.email),children:t.name})};function h(e){return Math.max.apply(Math,[0].concat(Object(r.a)(e.map((function(e){return e.id})))))+1}var O=function(e){var t=e.todo;return Object(j.jsxs)("article",{"data-id":h([t]),className:m()("TodoInfo",{"TodoInfo--completed":!0===t.completed}),children:[Object(j.jsx)("h2",{className:"TodoInfo__title",children:t.title}),t.user&&Object(j.jsx)(b,{user:t.user})]})},f=function(e){var t=e.todos;return Object(j.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(j.jsx)(O,{todo:e},e.id)}))})};function p(e){return d.find((function(t){return t.id===e}))}var x=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(o.a)(Object(o.a)({},e),{},{user:p(e.userId)})})),v={id:0,title:"",userId:0,completed:!1},I=function(){var e=Object(l.useState)(v),t=Object(s.a)(e,2),a=t[0],n=t[1],i=Object(l.useState)(!1),u=Object(s.a)(i,2),m=u[0],b=u[1],O=Object(l.useState)(!1),I=Object(s.a)(O,2),y=I[0],S=I[1],N=Object(l.useState)(x),g=Object(s.a)(N,2),C=g[0],_=g[1],k=p(a.userId),D=function(e,t){n((function(a){return Object(o.a)(Object(o.a)({},a),{},Object(c.a)({},e,t))}))};return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Add todo form"}),Object(j.jsxs)("form",{action:"/api/todos",method:"POST",onSubmit:function(e){if(e.preventDefault(),b(!a.title),S(!a.userId),a.userId&&a.title){var t=Object(o.a)(Object(o.a)({},a),{},{id:h(C),user:k});_((function(e){return[].concat(Object(r.a)(e),[t])})),n({id:0,title:"",userId:0,completed:!1})}},children:[Object(j.jsxs)("div",{className:"field",children:[Object(j.jsxs)("label",{children:["Title:",Object(j.jsx)("input",{type:"text","data-cy":"titleInput",placeholder:"Enter a title",value:a.title,onChange:function(e){var t=e.target.value;D("title",t),b(!1)}})]}),m&&Object(j.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(j.jsxs)("div",{className:"field",children:[Object(j.jsx)("label",{htmlFor:"chooseUser",children:"User:"}),Object(j.jsxs)("select",{id:"chooseUser","data-cy":"userSelect",value:a.userId,onChange:function(e){var t=e.target.value;D("userId",Number(t)),S(!1)},children:[Object(j.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),d.map((function(e){return Object(j.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),y&&Object(j.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(j.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(j.jsx)(f,{todos:C})]})})};i.a.render(Object(j.jsx)(I,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.83e17d58.chunk.js.map