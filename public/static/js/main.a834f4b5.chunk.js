(this["webpackJsonpresume-fe"]=this["webpackJsonpresume-fe"]||[]).push([[0],{41:function(e,t,c){},42:function(e,t,c){},68:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c(20),n=c.n(a),i=c(11),l=(c(41),c(2)),d=(c(42),c(21)),r=c.n(d),o=c.p+"static/media/kc.b058c66e.jpg",j=c.p+"static/media/resume.a29eefe8.pdf",m=c(4),h=c(8),b=c.n(h),x=c(0),O=function(){var e=Object(s.useState)(""),t=Object(m.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(""),i=Object(m.a)(n,2),l=i[0],d=i[1],r=Object(s.useState)(""),o=Object(m.a)(r,2),j=o[0],h=o[1],O=Object(s.useState)(!1),u=Object(m.a)(O,2),v=u[0],g=u[1],f=Object(s.useState)(""),p=Object(m.a)(f,2),N=p[0],_=p[1],y=Object(s.useState)(""),k=Object(m.a)(y,2),w=k[0],L=k[1];return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"row"}),Object(x.jsxs)("form",{onSubmit:function(e){g(!0),_(""),L(""),e.preventDefault(),fetch("/contact",{method:"POST",body:JSON.stringify({email:c,name:l,message:j}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){"fail"===e.status?(b.a.toast({html:e.message,classes:"red white-text"}),g(!1)):(b.a.toast({html:e.message,classes:"green white-text"}),_(e.message),g(!1))})).catch((function(e){b.a.toast({html:e.message,classes:"red white-text"}),L(e.message),g(!1)}))},children:[Object(x.jsx)("h6",{className:"red-text",children:w}),Object(x.jsx)("h6",{className:"green-text",children:N}),Object(x.jsxs)("div",{className:"row",children:[Object(x.jsxs)("div",{className:"input-field col s12",children:[Object(x.jsx)("input",{id:"icon_prefix",type:"email",className:"validate",required:!0,value:c,onChange:function(e){a(e.target.value)}}),Object(x.jsx)("label",{htmlFor:"icon_prefix",children:"Email"})]}),Object(x.jsxs)("div",{className:"input-field col s12",children:[Object(x.jsx)("input",{id:"",type:"text",className:"validate",required:!0,value:l,onChange:function(e){d(e.target.value)}}),Object(x.jsx)("label",{htmlFor:"icon_prefix",children:"Name"})]}),Object(x.jsxs)("div",{className:"input-field col s12",children:[Object(x.jsx)("textarea",{id:"textarea1",className:"materialize-textarea",required:!0,value:j,onChange:function(e){h(e.target.value)}}),Object(x.jsx)("label",{for:"textarea1",children:"Message"})]}),v?Object(x.jsx)("button",{className:"btn disabled",children:"Sending..."}):Object(x.jsx)("button",{type:"submit",className:"btn",children:"Send"})]})]})]})},u=c(23),v=function(){var e=Object(s.useState)(!1),t=Object(m.a)(e,2),c=t[0],a=t[1];Object(s.useEffect)((function(){window.addEventListener("load",(function(){var e=document.querySelector(".my-nav"),t=document.querySelectorAll(".my-nav-link"),s=document.getElementById("aboutLink"),a=document.getElementById("contactLink"),i=document.getElementById("stackLink"),l=document.getElementById("expLink"),d=document.getElementById("projectLink"),r=document.getElementById("about"),o=document.getElementById("stack"),j=document.getElementById("experience"),m=document.getElementById("contact"),h=document.getElementById("projects");console.log("tooggllee "+c),t.forEach((function(t){t.addEventListener("click",(function(){e.classList.remove("animate__slideInRight"),e.classList.add("animate__fadeOutRight"),n()}))})),s.addEventListener("click",(function(){r.classList.add("animate__rubberBand"),setTimeout((function(){r.classList.remove("animate__rubberBand")}),1e3)})),d.addEventListener("click",(function(){h.classList.add("animate__flipInY"),setTimeout((function(){h.classList.remove("animate__flipInY")}),1e3)})),a.addEventListener("click",(function(){m.classList.add("animate__bounceInLeft"),setTimeout((function(){m.classList.remove("animate__bounceInLeft")}),1e3)})),l.addEventListener("click",(function(){j.classList.add("animate__swing"),setTimeout((function(){j.classList.remove("animate__swing")}),1e3)})),i.addEventListener("click",(function(){o.classList.add("animate__swing"),setTimeout((function(){o.classList.remove("animate__swing")}),1e3)}))}))}),[]);var n=function(){a(!c)};return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"ham-cont",children:Object(x.jsx)(u.a,{color:"grey",toggled:c,toggle:a,id:"ham",onToggle:function(e){console.log("The state is "+c);var t=document.querySelector(".my-nav");e?(t.style.width="100%",t.classList.remove("animate__fadeOutRight"),t.classList.add("animate__slideInRight")):(t.classList.remove("animate__slideInRight"),t.classList.add("animate__fadeOutRight"))}})}),Object(x.jsxs)("div",{className:"my-nav animate__animated ",children:[Object(x.jsx)("div",{className:"ham"}),Object(x.jsxs)("div",{className:"my-nav-link-container",children:[Object(x.jsx)("a",{className:"my-nav-link",href:"#about",id:"aboutLink",onClick:n,children:"About Me"}),Object(x.jsx)("a",{className:"my-nav-link",href:"#stack",id:"stackLink",onClick:n,children:"My Stack"}),Object(x.jsx)("a",{className:"my-nav-link",href:"#experience",id:"expLink",onClick:n,children:"Experience"}),Object(x.jsx)("a",{className:"my-nav-link",href:"#projects",id:"projectLink",onClick:n,children:"Projects"}),Object(x.jsx)("a",{className:"my-nav-link",href:"#contact",id:"contactLink",onClick:n,children:"Contact Me"})]})]})]})},g=function(){return Object(s.useEffect)((function(){window.addEventListener("load",(function(){console.log("loaded");var e=document.getElementById("aboutBtn"),t=document.getElementById("stackBtn"),c=document.getElementById("expBtn"),s=document.getElementById("contBtn"),a=document.getElementById("proBtn"),n=document.getElementById("about"),i=document.getElementById("stack"),l=document.getElementById("experience"),d=document.getElementById("contact"),r=document.getElementById("projects");a.addEventListener("click",(function(){r.classList.add("animate__flipInY"),setTimeout((function(){r.classList.remove("animate__flipInY")}),1e3)})),e.addEventListener("click",(function(){n.classList.add("animate__rubberBand"),setTimeout((function(){n.classList.remove("animate__rubberBand")}),1e3)})),t.addEventListener("click",(function(){i.classList.add("animate__swing"),setTimeout((function(){i.classList.remove("animate__swing")}),1e3)})),c.addEventListener("click",(function(){l.classList.add("animate__swing"),setTimeout((function(){l.classList.remove("animate__swing")}),1e3)})),s.addEventListener("click",(function(){d.classList.add("animate__bounceInLeft"),setTimeout((function(){d.classList.remove("animate__bounceInLeft")}),1e3)}))}))}),[]),Object(x.jsxs)("div",{style:{overflow:"hidden"},children:[Object(x.jsx)(v,{}),Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("div",{className:"col s12 m2 l4"}),Object(x.jsx)("div",{className:"col s12 m8 l4",children:Object(x.jsxs)("div",{style:{height:"100vh"},children:[Object(x.jsx)("div",{style:{height:"67%"},children:Object(x.jsx)("img",{className:"circle animate__animated animate__bounceInDown",src:o,id:"theo",alt:"theodore"})}),Object(x.jsx)("p",{}),Object(x.jsxs)("div",{className:"center-align",style:{height:"20%"},children:[Object(x.jsx)("a",{className:"btn red animate__animated animate__bounce",href:"#stack",id:"stackBtn",children:"My Stack"})," ",Object(x.jsx)("a",{className:"btn red animate__animated animate__swing",href:"#contact",id:"contBtn",children:"Contact Me"})," ",Object(x.jsx)("a",{className:"btn red animate__animated animate__wobble",href:"#about",id:"aboutBtn",children:"About Me"}),Object(x.jsx)("br",{}),Object(x.jsx)("a",{className:"btn red animate__animated animate__shakeX",href:"#experience",id:"expBtn",children:"My Experience"})," ",Object(x.jsx)("a",{className:"btn red animate__animated animate__shakeX",href:"#projects",id:"proBtn",children:"Projects"}),Object(x.jsx)("p",{}),Object(x.jsxs)("a",{href:j,className:"btn grey tooltipped","data-position":"bottom","data-tooltip":"I am a tooltip",children:["Download my Resume",Object(x.jsx)("i",{className:"fa fa-download"})]}),Object(x.jsx)("h6",{className:"animate__animated animate__rubberBand",children:"Theodore Kelechukwu Onyejiaku(Backend Developer)"})]})]})}),Object(x.jsx)("div",{className:"col s12 m2 l4"})]}),Object(x.jsxs)(r.a,{items:["section-1","section-2","section-3"],currentClassName:"is-current",children:[Object(x.jsx)("div",{className:"container animate__animated section",id:"about",children:Object(x.jsx)("div",{className:"section white",children:Object(x.jsxs)("div",{className:"row container",children:[Object(x.jsx)("h4",{className:"header",children:Object(x.jsx)("u",{children:"About Me"})}),Object(x.jsxs)("p",{className:"grey-text text-darken-3 lighten-3",children:["Hi my name is ",Object(x.jsx)("strong",{children:Object(x.jsx)("span",{style:{textDecoration:"undeline"},children:"Theodore Kelechukwu Onyejiaku"})}),". I am a full-stack developer. I hail from Imo State, born in Onitsha and grew up in the busy streets of Lagos. My dream is to be a world-class software engineer. Study in Germany and base their."]}),Object(x.jsx)("p",{children:"My hubbies include: Singing, playing guitar, chess, making jokes and thinking."})]})})}),Object(x.jsx)("div",{className:"container animate__animated section",id:"stack",children:Object(x.jsx)("div",{className:"",children:Object(x.jsx)("div",{className:"section white",children:Object(x.jsxs)("div",{className:"row container ",children:[Object(x.jsx)("h4",{className:"header",children:Object(x.jsx)("u",{children:"My Stack"})}),Object(x.jsxs)("p",{className:"grey-text text-darken-3 lighten-3",children:["I am a ",Object(x.jsx)("strong",{children:"MERN Stack Developer!"})," I use MongoDB as my database, ReactJs for my frontend and expressJS coupled with NodeJS as my backend technologies."]}),Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("div",{className:"col s12 m6",children:Object(x.jsx)("div",{class:"card hoverable",children:Object(x.jsx)("div",{children:Object(x.jsxs)("div",{class:"card medium",children:[Object(x.jsx)("h6",{children:"MONGODB"}),Object(x.jsxs)("div",{class:"card-content",children:[Object(x.jsx)("h6",{class:"truncate black-text",children:Object(x.jsx)("b",{children:"About"})}),Object(x.jsx)("p",{class:"grey-text text-darken-2",children:"MongoDB is a No-Sql Database that is scalable, fast, document-based and object-oriented database"}),Object(x.jsx)("p",{class:"right-align grey-text",children:Object(x.jsx)("small",{className:"green-text",children:"100%"})})]})]})})})}),Object(x.jsx)("div",{className:"col s12 m6",children:Object(x.jsx)("div",{class:"card hoverable",children:Object(x.jsx)("div",{children:Object(x.jsxs)("div",{class:"card medium",children:[Object(x.jsx)("h6",{children:"EXPRESSJS"}),Object(x.jsxs)("div",{class:"card-content",children:[Object(x.jsx)("h6",{class:"truncate black-text",children:Object(x.jsx)("b",{children:"About"})}),Object(x.jsx)("p",{class:"grey-text text-darken-2",children:"ExpressJS is a NodeJs framework for building scalable and fast server applications."}),Object(x.jsx)("p",{class:"right-align grey-text",children:Object(x.jsx)("small",{className:"green-text",children:"100%"})})]})]})})})}),Object(x.jsx)("div",{className:"col s12 m6",children:Object(x.jsx)("div",{class:"card hoverable",children:Object(x.jsx)("div",{children:Object(x.jsxs)("div",{class:"card medium",children:[Object(x.jsx)("h6",{children:"REACTJS"}),Object(x.jsxs)("div",{class:"card-content",children:[Object(x.jsx)("h6",{class:"truncate black-text",children:Object(x.jsx)("b",{children:"About"})}),Object(x.jsx)("p",{class:"grey-text text-darken-2",children:"ReactJS is a frontend framework for building fast and large ui applications. It is managed by Facebook"}),Object(x.jsx)("p",{class:"right-align grey-text",children:Object(x.jsx)("small",{className:"green-text",children:"100%"})})]})]})})})}),Object(x.jsx)("div",{className:"col s12 m6",children:Object(x.jsx)("div",{class:"card hoverable",children:Object(x.jsx)("div",{children:Object(x.jsxs)("div",{class:"card medium",children:[Object(x.jsx)("h6",{children:"NODEJS"}),Object(x.jsxs)("div",{class:"card-content",children:[Object(x.jsx)("h6",{class:"truncate black-text",children:Object(x.jsx)("b",{children:"About"})}),Object(x.jsx)("p",{class:"grey-text text-darken-2",children:"NodeJS is a runtime built using the Google Chrome V8 engine. It is very fast!"}),Object(x.jsx)("p",{class:"right-align grey-text",children:Object(x.jsx)("small",{className:"green-text",children:"100%"})})]})]})})})})]})]})})})}),Object(x.jsx)("div",{className:"row"}),Object(x.jsx)("div",{className:"container animate__animated section",id:"experience",children:Object(x.jsx)("div",{className:"",children:Object(x.jsxs)("div",{className:"section white",children:[Object(x.jsxs)("div",{className:"row container",children:[Object(x.jsx)("h4",{className:"header",children:Object(x.jsx)("u",{children:"Experience"})}),"My latest Experience is the ",Object(x.jsx)("strong",{children:"HNG"})," internship 8."]}),Object(x.jsx)("div",{className:"container",children:Object(x.jsxs)("ul",{class:"collection",children:[Object(x.jsx)("li",{class:"collection-item",children:Object(x.jsx)("div",{className:"",children:Object(x.jsx)("h5",{children:"Educative.io(Technical Writer)"})})}),Object(x.jsx)("li",{class:"collection-item",children:Object(x.jsx)("div",{children:Object(x.jsx)("h5",{children:Object(x.jsx)("strong",{children:"Genesys Tech Hub(Backend Intern)"})})})}),Object(x.jsx)("li",{class:"collection-item",children:Object(x.jsx)("div",{children:Object(x.jsx)("h5",{children:Object(x.jsx)("strong",{children:"Web Developer and Freelancer"})})})}),Object(x.jsx)("li",{class:"collection-item",children:Object(x.jsx)("div",{children:Object(x.jsx)("h5",{children:Object(x.jsx)("strong",{children:"Highest Point Information Tech (Programming Tutor)"})})})})]})})]})})}),Object(x.jsx)("div",{className:"animate__animated section",id:"projects",children:Object(x.jsx)("div",{className:"container",children:Object(x.jsx)("div",{className:"section white",children:Object(x.jsxs)("div",{className:"row container",children:[Object(x.jsx)("h4",{className:"header",children:Object(x.jsx)("u",{children:"Projects"})}),Object(x.jsxs)("ul",{className:"collection",children:[Object(x.jsxs)("li",{className:"collection-item",children:[Object(x.jsx)("i",{class:"material-icons",children:"chevron_right"}),"An application that will help students(Under Construction): ",Object(x.jsx)("a",{href:"https://campus-foodie.netlify.app/",children:"Link"}),Object(x.jsx)("br",{}),"Admin email: admin@gmail.com, password: password"]}),Object(x.jsxs)("li",{className:"collection-item",children:[Object(x.jsx)("i",{class:"material-icons",children:"chevron_right"}),"A banking application : ",Object(x.jsx)("a",{href:"https://ctbconnectt.com/",children:"Link"})]}),Object(x.jsxs)("li",{className:"collection-item",children:[Object(x.jsx)("i",{class:"material-icons",children:"chevron_right"}),"A courier delivery service: ",Object(x.jsx)("a",{href:" https://skywaydeliveryservice.com/",children:"Link"})]}),Object(x.jsxs)("li",{className:"collection-item",children:[Object(x.jsx)("i",{class:"material-icons",children:"chevron_right"}),"An email SMTP: ",Object(x.jsx)("a",{href:"https://dubaislamicbank.com",children:"Link"})]}),Object(x.jsxs)("li",{className:"collection-item",children:[Object(x.jsx)("i",{class:"material-icons",children:"chevron_right"}),"A crypto investment platform: ",Object(x.jsx)("a",{href:"https://cryptoliteinvest.com/",children:"Link"})]}),Object(x.jsxs)("li",{className:"collection-item",children:[Object(x.jsx)("i",{class:"material-icons",children:"chevron_right"}),"An E-learning platform for book recommendations(Under construction): ",Object(x.jsx)("a",{href:"https://naija-bookie.herokuapp.com/",children:"Link"})]}),Object(x.jsxs)("li",{className:"collection-item",children:[Object(x.jsx)("i",{class:"material-icons",children:"chevron_right"}),"A b2b project under construction: ",Object(x.jsx)("a",{href:"https://myq-fe.netlify.app/",children:"Link"})]})]}),Object(x.jsxs)("p",{children:["Want to see more? ",Object(x.jsx)("a",{href:"https://github.com/Theodore-Kelechukwu-Onyejiaku",children:"Visit My Github"})]})]})})})}),Object(x.jsx)("div",{className:"animate__animated section",id:"contact",children:Object(x.jsx)("div",{className:"container",children:Object(x.jsx)("div",{className:"section white",children:Object(x.jsxs)("div",{className:"row container",children:[Object(x.jsx)("h4",{className:"header",children:Object(x.jsx)("u",{children:"Contact Me"})}),Object(x.jsx)(O,{})]})})})})]}),Object(x.jsxs)("a",{href:j,className:"btn grey tooltipped","data-position":"bottom","data-tooltip":"I am a tooltip",children:["Download my resume ",Object(x.jsx)("i",{className:"fa fa-download"})]})]})},f=function(){var e=Object(s.useState)({name:"",email:"",message:""}),t=Object(m.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(""),l=Object(m.a)(n,2),d=l[0],r=l[1];return Object(s.useEffect)((function(){var e=window.location.pathname.split("/")[window.location.pathname.split("/").length-1];fetch("/contact/"+e).then((function(e){return e.json()})).then((function(e){"fail"===e.status?(b.a.toast({html:e.message,classes:"red white-text"}),r(e.message)):(b.a.toast({html:e.message,classes:"green white-text"}),a(e.contact))}))}),[]),d?Object(x.jsx)("p",{className:"red-text",children:d}):Object(x.jsxs)("div",{className:"center-align",children:[Object(x.jsx)("h1",{children:"Hi! \ud83d\ude0e"}),Object(x.jsx)("p",{children:"Thanks for contacting Theodore. Below is your response"}),Object(x.jsx)("div",{className:"section white",children:Object(x.jsxs)("div",{className:"row container",children:[Object(x.jsx)("form",{children:Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("div",{className:"input-field col s12",children:Object(x.jsx)("input",{id:"icon_prefix",type:"email",className:"validate",disabled:!0,value:c.email})}),Object(x.jsx)("div",{className:"input-field col s12",children:Object(x.jsx)("input",{id:"icon_prefix",type:"text",className:"validate",disabled:!0,value:c.name})}),Object(x.jsx)("div",{className:"input-field col s12",children:Object(x.jsx)("textarea",{id:"textarea1",className:"materialize-textarea",disabled:!0,value:c.message})})]})}),Object(x.jsxs)(i.b,{to:"/",className:"btn grey",children:["Home",Object(x.jsx)("i",{className:"fa fa-home"})]})]})})]})};var p=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsxs)(l.c,{children:[Object(x.jsx)(l.a,{exact:!0,path:"/",component:g}),Object(x.jsx)(l.a,{path:"/response/:contactId",component:f})]})})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,69)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),s(e),a(e),n(e),i(e)}))};c(65),c(66),c(67);n.a.render(Object(x.jsx)(i.a,{children:Object(x.jsx)(p,{})}),document.getElementById("root")),N()}},[[68,1,2]]]);
//# sourceMappingURL=main.a834f4b5.chunk.js.map