(this["webpackJsonpmy-react-app2"]=this["webpackJsonpmy-react-app2"]||[]).push([[0],{33:function(e,t,c){},34:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},50:function(e,t,c){"use strict";c.r(t);var n=c(4),a=c.n(n),s=c(26),i=c.n(s),r=(c(33),function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,51)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))}),l=c(10),j=c(11),o=c(13),d=c(12),u=c(9),b=c(3),h=(c(34),c.p+"static/media/online.3c1cd3ed.png"),m=c.p+"static/media/flutter.ee8265f5.png",O=c.p+"static/media/react.80464f84.png",x=c.p+"static/media/web.c11cb763.png",f=c.p+"static/media/scrum.61a6f142.png",p=c(0),g=function(e){Object(o.a)(c,e);var t=Object(d.a)(c);function c(){return Object(l.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{class:"home-container",children:Object(p.jsxs)("div",{className:"h-left",children:[Object(p.jsx)("div",{className:"left-img",children:Object(p.jsx)("img",{src:h,alt:""})}),Object(p.jsxs)("div",{className:"left-welcome",children:[Object(p.jsx)("div",{className:"welcome-div",children:Object(p.jsx)("h2",{children:"Hello, welcome to my resume."})}),Object(p.jsx)("div",{className:"name-div",children:Object(p.jsx)("h4",{children:"I'm Daniel Mawasha, A Software Developer & A Designer."})}),Object(p.jsxs)("div",{className:"button-div",children:[Object(p.jsx)("button",{type:"button",className:"download-cv",children:"Download CV"}),Object(p.jsx)("button",{type:"button",className:"contact-me",children:"Contact Me"})]}),Object(p.jsxs)("div",{className:"icons-div",children:[Object(p.jsxs)("div",{className:"icons",children:[Object(p.jsx)("img",{src:O,alt:"",className:"ic1"}),Object(p.jsx)("h5",{children:"React Dev"})]}),Object(p.jsxs)("div",{className:"icons",children:[Object(p.jsx)("img",{src:x,alt:"",className:"ic2"}),Object(p.jsx)("h5",{children:"Web Dev"})]}),Object(p.jsxs)("div",{className:"icons",children:[Object(p.jsx)("img",{src:f,alt:"",className:"ic3"}),Object(p.jsx)("h5",{children:"Scrum Master"})]}),Object(p.jsxs)("div",{className:"icons",children:[Object(p.jsx)("img",{src:m,alt:"",className:"ic4"}),Object(p.jsx)("h5",{children:"Flutter"})]})]})]})]})})})}}]),c}(n.Component),v=(c(36),c.p+"static/media/icon2.5ee8a94a.png"),N=function(e){Object(o.a)(c,e);var t=Object(d.a)(c);function c(){return Object(l.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"container-res",children:[Object(p.jsx)("div",{className:"res-left",children:Object(p.jsxs)("div",{className:"left-details",children:[Object(p.jsxs)("div",{className:"res-circle",children:[Object(p.jsx)("img",{src:v,alt:"",className:"doc-icon"}),Object(p.jsxs)("div",{className:"contact-me",children:[Object(p.jsx)("h2",{className:"headings",children:"About Me"}),Object(p.jsx)("p",{children:"Hello, my name is Daniel Mawasha. I'm a software developer graduate at the institution of Tshwane University of Technology. I now look forward to enhance my skills in this field of software development at any institution that offers training and assistance. I also acquired skills of graphic design using Adobe Photoshop."})]})]}),Object(p.jsx)("div",{className:"left-below"})]})}),Object(p.jsx)("div",{className:"res-right",children:Object(p.jsx)("div",{className:""})})]})})}}]),c}(n.Component),y=c(28),w=c(15),C=(c(37),c(20)),S=(c(45),function(){var e=Object(n.useState)([]),t=Object(w.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),i=Object(w.a)(s,2),r=i[0],l=i[1],j=Object(n.useState)(""),o=Object(w.a)(j,2),d=o[0],u=o[1],b=Object(n.useState)(""),h=Object(w.a)(b,2),m=h[0],O=h[1],x=Object(n.useState)(""),f=Object(w.a)(x,2),g=f[0],v=f[1],N=function(e){e.preventDefault(),function(e,t,n,s){a([].concat(Object(y.a)(c),[{uid:c.length,_name:e,_surname:t,_age:n,_location:s}]))}(r,d,m,g)},S={_name:function(e){return function(e){return""===e?{name:e}+" field is required!":e.length<3?{name:e}+" name should at least be three characters":void 0}(e)},_surname:function(e){return function(e){return""===e?{surname:e}+" field is required!":e.length<3?{surname:e}+" name should at least be three characters":void 0}(e)},_age:function(e){return function(e){return""===e?{age:e}+" field is required!":e<18?{age:e}+" you are too young to register":null}(e)},_location:function(e){return function(e){return""===e?{location:e}+" field is required!":e.length<3?{location:e}+" location name too short!":null}(e)}};return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"prof-container",children:Object(p.jsxs)("div",{className:"prof-right",children:[Object(p.jsx)("h5",{className:"reg-txt",children:"Register Account"}),Object(p.jsxs)("form",{className:"form-wrapper",onSubmit:N,validations:S,children:[Object(p.jsx)("input",{type:"text",placeholder:"First-Name",className:"input-field",value:r,onChange:function(e){return l(e.target.value)}}),Object(p.jsx)("input",{type:"text",placeholder:"Last-Name",className:"input-field",value:d,onChange:function(e){return u(e.target.value)}}),Object(p.jsx)("input",{type:"text",placeholder:"Age",className:"input-field",value:m,onChange:function(e){return O(e.target.value)}}),Object(p.jsx)("input",{type:"text",placeholder:"Location",className:"input-field",value:g,onChange:function(e){return v(e.target.value)}}),Object(p.jsx)("div",{className:"submit",onSubmit:N,type:"submit",children:Object(p.jsx)("button",{type:"submit",children:"Register"})})]}),Object(p.jsxs)("div",{className:"contact-details",children:[c.map((function(e){return Object(p.jsxs)("p",{children:[" User: ",e._name," successfully registered."]})})),Object(p.jsx)("h3",{children:"Contact Details"}),Object(p.jsxs)("ul",{children:[Object(p.jsxs)("li",{className:"fab",children:[Object(p.jsx)(C.a,{icon:["fas","envelope"]})," mdmawasha@gmail.com"]}),Object(p.jsxs)("li",{className:"fab",children:[Object(p.jsx)(C.a,{icon:["fas","phone"]})," (+27)812767830 | (+27)815734912"]}),Object(p.jsxs)("li",{className:"fab",children:[Object(p.jsx)(C.a,{icon:["fas","map-pin"]})," 872 zone f, Seshego Polokwane"]})]})]})]})})})}),k=(c(46),function(e){Object(o.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(l.a)(this,c);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={User:[{name:"Kgaogelo Lekoni",surname:"Sebala",location:"Lithuli",age:31},{name:"Phinda Futhi",surname:"Mdala",location:"Turf",age:45},{name:"James Rebook",surname:"Jacobs",location:"Seshego",age:88}]},e}return Object(j.a)(c,[{key:"render",value:function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"user-cl",children:[Object(p.jsx)("p",{children:"Our Users Inline order of Age"}),Object(p.jsxs)("ul",{children:[Object(p.jsx)("h1",{children:this.state.output}),this.state.User.map((function(e){return Object(p.jsx)("li",{children:e.name+"    "+e.surname+", "+e.location+" Age:"+e.age})}))]})]})})}}]),c}(n.Component)),F=(c(47),function(e){Object(o.a)(c,e);var t=Object(d.a)(c);function c(){return Object(l.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(u.a,{children:Object(p.jsxs)("div",{children:[Object(p.jsx)("nav",{className:"navigation",children:Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:Object(p.jsx)(u.b,{to:"/Home",children:"Home"})}),Object(p.jsx)("li",{children:Object(p.jsx)(u.b,{to:"/about",children:"About"})}),Object(p.jsx)("li",{children:Object(p.jsx)(u.b,{to:"/profile",children:"Profile"})}),Object(p.jsx)("li",{children:Object(p.jsx)(u.b,{to:"/users",children:"Users"})})]})}),Object(p.jsxs)(b.b,{children:[Object(p.jsx)(u.a,{path:"/profile",children:Object(p.jsx)(S,{})}),Object(p.jsx)(u.a,{path:"/about",children:Object(p.jsx)(N,{})}),Object(p.jsx)(u.a,{path:"/home",children:Object(p.jsx)(g,{})}),Object(p.jsx)(u.a,{path:"/users",children:Object(p.jsx)(k,{})}),Object(p.jsx)(u.a,{path:"/",children:Object(p.jsx)(g,{})})]})]})})})}}]),c}(n.Component)),A=function(e){Object(o.a)(c,e);var t=Object(d.a)(c);function c(){return Object(l.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(F,{})})}}]),c}(n.Component);i.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(A,{})}),document.getElementById("root")),r()}},[[50,1,2]]]);
//# sourceMappingURL=main.9eea8a89.chunk.js.map