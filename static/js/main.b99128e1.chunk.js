(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(19)},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(4),c=n.n(l),u=n(5),o=n(6),i=n(8),m=n(7),p=n(10),s=n(1),d=n.n(s),h=n(9),E=n(2),f=(n(18),function(){var e=Object(E.a)(d.a.mark(function e(){var t,n;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"/api/people.json",e.next=3,fetch("/api/people.json");case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n.map(function(e,t){return Object(h.a)({id:t+1},e,{age:e.died-e.born,century:Math.ceil(e.died/100),children:n.filter(function(t){return t.father===e.name||t.mother===e.name}).map(function(e){return e.name}).join("; ")})}));case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()),b=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={people:[]},n}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=Object(E.a)(d.a.mark(function e(){var t;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:t=e.sent,this.setState({people:t});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.people;return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Number of People: ",e.length),r.a.createElement(v,{people:e}))}}]),t}(r.a.Component),v=function(e){var t=e.people;return r.a.createElement("table",{className:"PeopleTable"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Id"),r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Sex"),r.a.createElement("th",null,"Born"),r.a.createElement("th",null,"Died"),r.a.createElement("th",null,"Mother"),r.a.createElement("th",null,"Father"),r.a.createElement("th",null,"Age"),r.a.createElement("th",null,"Century"),r.a.createElement("th",null,"Children"))),r.a.createElement("tbody",null,t.map(function(e){return r.a.createElement(y,{person:e,key:e.id})})))},y=function(e){var t=e.person;return r.a.createElement("tr",{key:t.id},r.a.createElement("td",null,t.id),r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.sex),r.a.createElement("td",null,t.born),r.a.createElement("td",null,t.died),r.a.createElement("td",null,t.mother),r.a.createElement("td",null,t.father),r.a.createElement("td",null,t.age),r.a.createElement("td",null,t.century),r.a.createElement("td",null,t.children))},j=b;c.a.render(r.a.createElement(j,{test:123}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.b99128e1.chunk.js.map