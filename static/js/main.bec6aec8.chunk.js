(this["webpackJsonpnavbar-dropdown-v1"]=this["webpackJsonpnavbar-dropdown-v1"]||[]).push([[0],[,,,,,,,,function(e,t,a){},,,,,,function(e,t,a){},,,,function(e,t,a){e.exports=a(40)},,,,,function(e,t,a){},function(e,t,a){},,,,,,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/rugby-thumbnail.a69e3c60.JPG"},function(e,t,a){e.exports=a.p+"static/media/book-summary-thumbnail.8ae7af5b.JPG"},function(e,t,a){e.exports=a.p+"static/media/ring-sizer.549ce4af.JPG"},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(15),c=a.n(r),m=a(10),s=(a(23),["btn--primary","btn--outline","btn--test"]),u=["btn--medium","btn--large"],i=function(e){var t=e.children,a=e.type,l=e.onClick,r=e.buttonStyle,c=e.buttonSize,m=s.includes(r)?r:s[0],i=u.includes(c)?c:u[0];return n.a.createElement("div",{className:"btn-mobile"},n.a.createElement("button",{className:"btn ".concat(m," ").concat(i),onClick:l,type:a},t))},o=a(3);a(24);var E=function(){var e=Object(l.useState)(!1),t=Object(m.a)(e,2),a=t[0],r=t[1],c=Object(l.useState)(!0),s=Object(m.a)(c,2),u=s[0],E=s[1],d=function(){return r(!1)},b=function(){window.innerWidth<=960?E(!1):E(!0)};return Object(l.useEffect)((function(){b()}),[]),window.addEventListener("resize",b),n.a.createElement(n.a.Fragment,null,n.a.createElement("nav",{className:"navbar"},n.a.createElement("div",{className:"navbar-container"},n.a.createElement("i",{class:"fal fa-file"}),n.a.createElement(o.b,{to:"/",className:"navbar-logo",onClick:d},"@raeesvds"),n.a.createElement("div",{className:"menu-icon",onClick:function(){return r(!a)}},n.a.createElement("i",{className:a?"fas fa-times":"fas fa-bars"})),n.a.createElement("ul",{className:a?"nav-menu active":"nav-menu"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(o.b,{to:"/",className:"nav-links",onClick:d},"Home")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(o.b,{to:"/Projects",className:"nav-links",onClick:d},"Projects")),n.a.createElement("li",null,n.a.createElement(o.b,{to:"/Contact",className:"nav-links-mobile",onClick:d},"Contact"))),u&&n.a.createElement(i,{buttonStyle:"btn--outline"},n.a.createElement(o.b,{to:"/Contact",className:"nav-links",onClick:d},"Contact Me")))))};a(8),a(33);var d=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("li",{className:"cards__item"},n.a.createElement("div",{className:"cards__item__link"},n.a.createElement("figure",{className:"cards__item__pic-wrap","data-category":e.label},n.a.createElement("img",{className:"cards__item__img",alt:"Project",src:e.src})),n.a.createElement("div",{className:"cards__item__info"},n.a.createElement("h5",{className:"cards__item__text"},e.text),n.a.createElement("a",{href:""+e.docs,target:"_blank",rel:"noopener noreferrer"},"View Docs"),n.a.createElement("br",null),n.a.createElement("a",{href:e.git,target:"_blank",rel:"noopener noreferrer"},"View Source Code")))))};var b=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("li",{className:"cards__item"},n.a.createElement("div",{className:"cards__item__link"},n.a.createElement("figure",{className:"cards__item__pic-wrap","data-category":e.label},n.a.createElement("img",{className:"cards__item__img",alt:"Project",src:e.src})),n.a.createElement("div",{className:"cards__item__info"},n.a.createElement("h5",{className:"cards__item__text"},e.text),n.a.createElement(o.b,{to:"/ringsizer"},"View Demo"),n.a.createElement("br",null),n.a.createElement("a",{href:e.git,target:"_blank",rel:"noopener noreferrer"},"View Source Code")))))};var f=function(){return n.a.createElement("div",{className:"cards"},n.a.createElement("h1",null,"Some of my past projects"),n.a.createElement("div",{className:"cards__container"},n.a.createElement("div",{className:"cards__wrapper"},n.a.createElement("ul",{className:"cards__items"},n.a.createElement(d,{img:!0,src:a(34),text:"Webscraping Rugby Results",label:"Python",docs:"/assets/Rugby-results-docs.pdf",git:"https://www.github.com/raeesvds/webscraping-rugby-results"}),n.a.createElement(d,{img:!0,src:a(35),text:"Generating Book Summaries",label:"Google Apps Script",docs:"/assets/book-summaries-docs.pdf",git:"https://www.github.com/raeesvds/apps-script-book-summary-generator"}),n.a.createElement(b,{img:!0,src:a(36),text:"Ring Sizer",label:"JavaScript",git:"https://www.github.com/raeesvds/ring-sizer"})))))};a(37);var g=function(){return n.a.createElement("div",{className:"hero-container"},n.a.createElement("br",null),n.a.createElement("div",{className:"hero-btns"},n.a.createElement(i,{className:"btns",buttonStyle:"btn--test",buttonSize:"btn--large"},n.a.createElement("a",{href:"/assets/CV of MR van der Schyff.pdf",target:"_blank",rel:"noopener noreferrer"},"Download CV"))))};a(38);var p=function(){return n.a.createElement("div",{className:"footer-container"},n.a.createElement("div",{className:"footer-subscription-heading"},"My Socials"),n.a.createElement("section",{class:"social-media"},n.a.createElement("div",{class:"social-media-wrap"},n.a.createElement("div",{class:"social-icons"},n.a.createElement(o.b,{class:"social-icon-link",onClick:function(){return window.open("https://instagram.com/raeesvds")},target:"_blank","aria-label":"Instagram"},n.a.createElement("i",{class:"fab fa-instagram"})),n.a.createElement(o.b,{class:"social-icon-link",onClick:function(){return window.open("https://github.com/raeesvds")},target:"_blank","aria-label":"Github"},n.a.createElement("i",{class:"fab fa-github"})),n.a.createElement(o.b,{class:"social-icon-link",onClick:function(){return window.open("https://www.linkedin.com/in/m-ra-ees-van-der-schyff-8b45a4217/")},target:"_blank","aria-label":"LinkedIn"},n.a.createElement("i",{class:"fab fa-linkedin"}))))))};a(39);var v=function(){return n.a.createElement("div",{class:"container"},n.a.createElement("h1",null,"Contact Form"),n.a.createElement("form",{target:"_blank",action:"https://formsubmit.co/raees.vds@gmail.com",method:"POST"},n.a.createElement("div",{class:"form-group"},n.a.createElement("div",{class:"form-row"},n.a.createElement("div",{class:"col"},n.a.createElement("input",{type:"text",name:"name",class:"form-control",placeholder:"Full Name",required:!0})),n.a.createElement("div",{class:"col"},n.a.createElement("input",{type:"email",name:"email",class:"form-control",placeholder:"Email Address",required:!0})))),n.a.createElement("div",{class:"form-group"},n.a.createElement("textarea",{placeholder:"Your Message",class:"form-message",name:"message",rows:"6",required:!0})),n.a.createElement(i,{className:"btns",buttonStyle:"btn--test",buttonSize:"btn--large"},"Submit Form")))};var h=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(g,null),n.a.createElement(f,null),n.a.createElement(v,null),n.a.createElement(p,null))},_=a(1);var N=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(v,null),n.a.createElement(p,null))};var w=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(f,null),n.a.createElement(p,null))},k=(a(14),function(){var e=n.a.useState("15"),t=Object(m.a)(e,2),a=t[0],l=t[1],r=n.a.useRef(),c=n.a.useRef(),s=function(){return n.a.createElement("div",{className:"tableContainer"},n.a.createElement("table",{ref:c},n.a.createElement("thead",null,n.a.createElement("th",null,"Inside Diameter"),n.a.createElement("th",null,"SA/UK"),n.a.createElement("th",null,"UK/Canada"),n.a.createElement("th",null,"Circumference")),n.a.createElement("tr",null,n.a.createElement("th",null,"mm"),n.a.createElement("th",null,"Ring Size"),n.a.createElement("th",null,"Ring Size"),n.a.createElement("th",null,"Straight mm")),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"15mm"),n.a.createElement("td",null,"H"),n.a.createElement("td",null,"4"),n.a.createElement("td",null,"46.7")),n.a.createElement("tr",null,n.a.createElement("td",null,"15.3mm"),n.a.createElement("td",null,"I"),n.a.createElement("td",null,"4.5"),n.a.createElement("td",null,"48")),n.a.createElement("tr",null,n.a.createElement("td",null,"15.6mm"),n.a.createElement("td",null,"J"),n.a.createElement("td",null,"5"),n.a.createElement("td",null,"49.3")),n.a.createElement("tr",null,n.a.createElement("td",null,"16.2mm"),n.a.createElement("td",null,"K"),n.a.createElement("td",null,"5.5"),n.a.createElement("td",null,"50.6")),n.a.createElement("tr",null,n.a.createElement("td",null,"16.6mm"),n.a.createElement("td",null,"L"),n.a.createElement("td",null,"6"),n.a.createElement("td",null,"51.9")),n.a.createElement("tr",null,n.a.createElement("td",null,"16.9mm"),n.a.createElement("td",null,"M"),n.a.createElement("td",null,"6.5"),n.a.createElement("td",null,"53.1")),n.a.createElement("tr",null,n.a.createElement("td",null,"17.2mm"),n.a.createElement("td",null,"N"),n.a.createElement("td",null,"7"),n.a.createElement("td",null,"54.4")),n.a.createElement("tr",null,n.a.createElement("td",null,"17.8mm"),n.a.createElement("td",null,"O"),n.a.createElement("td",null,"7.5"),n.a.createElement("td",null,"55.7")),n.a.createElement("tr",null,n.a.createElement("td",null,"18.1mm"),n.a.createElement("td",null,"P"),n.a.createElement("td",null,"8"),n.a.createElement("td",null,"57")),n.a.createElement("tr",null,n.a.createElement("td",null,"18.5mm"),n.a.createElement("td",null,"Q"),n.a.createElement("td",null,"8.5"),n.a.createElement("td",null,"58.3")),n.a.createElement("tr",null,n.a.createElement("td",null,"19.1mm"),n.a.createElement("td",null,"R"),n.a.createElement("td",null,"9"),n.a.createElement("td",null,"59.5")),n.a.createElement("tr",null,n.a.createElement("td",null,"19.4mm"),n.a.createElement("td",null,"S"),n.a.createElement("td",null,"9.5"),n.a.createElement("td",null,"60.8")),n.a.createElement("tr",null,n.a.createElement("td",null,"19.7mm"),n.a.createElement("td",null,"T"),n.a.createElement("td",null,"10"),n.a.createElement("td",null,"62.1")),n.a.createElement("tr",null,n.a.createElement("td",null,"20.4mm"),n.a.createElement("td",null,"U"),n.a.createElement("td",null,"10.5"),n.a.createElement("td",null,"63.4")),n.a.createElement("tr",null,n.a.createElement("td",null,"20.7mm"),n.a.createElement("td",null,"V"),n.a.createElement("td",null,"11"),n.a.createElement("td",null,"64.6")),n.a.createElement("tr",null,n.a.createElement("td",null,"21.0mm"),n.a.createElement("td",null,"W"),n.a.createElement("td",null,"11.5"),n.a.createElement("td",null,"65.9")),n.a.createElement("tr",null,n.a.createElement("td",null,"21.6mm"),n.a.createElement("td",null,"X"),n.a.createElement("td",null,"12"),n.a.createElement("td",null,"67.2")),n.a.createElement("tr",null,n.a.createElement("td",null,"22.0mm"),n.a.createElement("td",null,"Y"),n.a.createElement("td",null,"12.5"),n.a.createElement("td",null,"68.5")),n.a.createElement("tr",null,n.a.createElement("td",null,"22.3mm"),n.a.createElement("td",null,"Z"),n.a.createElement("td",null,"13"),n.a.createElement("td",null,"69.7"))," ",n.a.createElement("tr",null,n.a.createElement("td",null,"22.9mm"),n.a.createElement("td",null,"Z+2"),n.a.createElement("td",null,"13.5"),n.a.createElement("td",null,"71")),n.a.createElement("tr",null,n.a.createElement("td",null,"23.2mm"),n.a.createElement("td",null,"Z+3"),n.a.createElement("td",null,"14"),n.a.createElement("td",null,"72.3")),n.a.createElement("tr",null,n.a.createElement("td",null,"23.6mm"),n.a.createElement("td",null,"Z+4"),n.a.createElement("td",null,"14.5"),n.a.createElement("td",null,"73.6")),n.a.createElement("tr",null,n.a.createElement("td",null,"24mm"),n.a.createElement("td",null,"Z+5"),n.a.createElement("td",null,"15"),n.a.createElement("td",null,"74.8")))))};return n.a.useEffect((function(){!function(e){var t=a/.52;e.clearRect(0,0,e.canvas.width,e.canvas.height),e.beginPath(),e.arc(100,105,t,0,2*Math.PI),e.stroke(),e.moveTo(100-t,105),e.lineTo(80,105),e.stroke(),e.moveTo(120,105),e.lineTo(100+t,105),e.stroke(),e.font="10px Verdana",e.strokeText(a+"mm",85,107,50),e.closePath()}(r.current.getContext("2d"));for(var e=c.current.getElementsByTagName("tr"),t=1;t<e.length;t++){var l=e[t].getElementsByTagName("td")[0].textContent.slice(0,2);e[t].style.display=l===a?"":"none"}})),n.a.createElement(n.a.Fragment,null,n.a.createElement("body",{className:"body"},n.a.createElement("div",{className:"font"},n.a.createElement("h2",null," Ring Sizer using a credit/ debit card"),n.a.createElement("br",null),n.a.createElement("h3",null," Resize window until card height is the same as the blue lines"),n.a.createElement("br",null),n.a.createElement("h3",null," Place ring on circle and move slider until circle fits your ring")),n.a.createElement("hr",{className:"hr"}),n.a.createElement("canvas",{className:"myCanvas",ref:r,width:"200",height:"210"},"Browser doesn't support this feature"),n.a.createElement("hr",{className:"hr"}),n.a.createElement("input",{className:"slider",type:"range",defaultValue:"15",min:"15",max:"24",step:"1",onChange:function(e){return l(e.target.value)}}),n.a.createElement(s,null)))});var y=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(k,null),n.a.createElement(p,null))};var S=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,null,n.a.createElement(E,null),n.a.createElement(_.c,null,n.a.createElement(_.a,{path:"/",exact:!0,component:h}),n.a.createElement(_.a,{path:"/contact",component:N}),n.a.createElement(_.a,{path:"/projects",component:w})),n.a.createElement(_.a,{path:"/ringsizer",component:y})))};c.a.render(n.a.createElement(S,null),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.bec6aec8.chunk.js.map