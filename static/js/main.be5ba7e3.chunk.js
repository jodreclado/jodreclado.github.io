(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,n,t){e.exports=t(29)},28:function(e,n,t){},29:function(e,n,t){"use strict";t.r(n);var a=t(0),l=t.n(a),o=t(16),c=t.n(o),r=t(6),i=t(5),u=function(){return Object(a.useEffect)(function(){document.title="Home"},[]),l.a.createElement("div",{className:"page"},l.a.createElement("h2",null,"Rogers Xiang"),l.a.createElement("p",null,"B.S. in Electrical Engineering, University of Washington, 2019 ",l.a.createElement("br",null),l.a.createElement("b",null,"Email:")," ",l.a.createElement("a",{href:"mailto:rogersxiang@gmail.com"},"rogersxiang@gmail.com")," ",l.a.createElement("br",null),l.a.createElement("b",null,"Phone:")," (425) 922-5957 ",l.a.createElement("br",null),l.a.createElement("a",{href:"https://github.com/jodreclado/"},"Github")," ",l.a.createElement("br",null),"TS.23.060"))},m=function(){return Object(a.useEffect)(function(){document.title="Projects"},[]),l.a.createElement("div",{className:"page"},l.a.createElement("h2",null,"Projects"),l.a.createElement("p",null,"Undergoing renovation..."))},s=function(e){var n=e.list;return l.a.createElement("div",null,l.a.createElement("ul",null,n.map(function(e,n){return l.a.createElement("li",{key:n},e)})))},E=["Redo API calls + add more functionality","Update Pokemon UI + info","Refactor some code and components (e.g., document titles)","Test different viewports, mobile, browser versions","Change widget? (flash now blocked by default)","Add more pictures + collapsibles"],d=["Can't perform a state update on an unmounted component. Fix by cancelling all subscriptions and asynchronous tasks in a useEffect cleanup function.","Cross-origin plugin content must have a visible size larger than 400x300 pixels.","React child elements need unique keys (avoid using index for dynamic lists)."],p=function(){Object(a.useEffect)(function(){document.title="Notes"},[]);var e="/"+(+new Date).toString(36).slice(-5);return l.a.createElement("div",{className:"page"},l.a.createElement("h2",null,"Notes"),l.a.createElement("h3",null,"Tests"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(r.b,{to:e},"404")),l.a.createElement("li",null,"Error boundary?")),l.a.createElement("h3",null,"TODO"),l.a.createElement(s,{list:E}),l.a.createElement("h3",null,"Console log"),l.a.createElement(s,{list:d}))},f=t(12),h=function(){var e=Object(a.useState)(5),n=Object(f.a)(e,2),t=n[0],o=n[1];return Object(a.useEffect)(function(){var e=setInterval(function(){return o(function(e){return e-1})},1e3);return function(){return clearInterval(e)}},[t]),0===t?l.a.createElement(i.a,{to:"/"}):l.a.createElement("div",{className:"page"},l.a.createElement("h2",null,"404"),l.a.createElement("p",null,"page not found, returning to index in ",t," second",1!==t?"s":"","..."))},b=[{name:"Home",path:"/",component:u},{name:"Projects",path:"/projects",component:m},{name:"Notes",path:"/notes",component:p},{name:"Space",path:"/space",component:Object(a.lazy)(function(){return t.e(3).then(t.bind(null,33))})},{name:"Pokemon",path:"/pokedex",component:Object(a.lazy)(function(){return t.e(4).then(t.bind(null,35))})},{name:"Vocaroo",path:"/voice",component:Object(a.lazy)(function(){return t.e(5).then(t.bind(null,34))})}],g=function(){return l.a.createElement("div",{id:"nav-bar"},l.a.createElement("ul",null,b.map(function(e,n){return l.a.createElement("li",{key:n},l.a.createElement(r.c,{exact:!0,to:e.path},e.name))})))},v=(t(28),function(){return l.a.createElement(r.a,{basename:""},l.a.createElement("div",null,l.a.createElement(g,null),l.a.createElement(a.Suspense,{fallback:l.a.createElement("h2",{className:"page"},"loading\u2026")},l.a.createElement(i.d,null,b.map(function(e){return l.a.createElement(i.b,{key:e.name,exact:!0,path:e.path,component:e.component})}),l.a.createElement(i.b,{component:h})))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,1,2]]]);
//# sourceMappingURL=main.be5ba7e3.chunk.js.map