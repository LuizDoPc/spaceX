(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{40:function(e,a,n){e.exports=n.p+"static/media/logo.ab10d000.png"},42:function(e,a,n){e.exports=n(57)},55:function(e,a,n){},57:function(e,a,n){"use strict";n.r(a);var t=n(1),l=n.n(t),c=n(32),r=n.n(c),s=n(41),m=n(5),u=n(18),i=n(15),o=n(20),h=n(17),E=n.n(h),p=n(58),g=function(){return l.a.createElement("div",{className:"my-3"},l.a.createElement("p",null,l.a.createElement("span",{className:"px-3 mr-2 bg-success"})," = Success"),l.a.createElement("p",null,l.a.createElement("span",{className:"px-3 mr-2 bg-danger"})," = Fail"))},d=n(23),_=n.n(d),f=n(33),b=n.n(f),N=function(e){var a=e.launch,n=a.flight_number,t=a.mission_name,c=a.launch_date_local,r=a.launch_success;return l.a.createElement("div",{className:"card card-body mb-3"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-9"},l.a.createElement("h4",null,"Mission:",l.a.createElement("span",{className:_()({"text-success":r,"text-danger":!r})},t)),l.a.createElement("p",null,"Date: ",l.a.createElement(b.a,{format:"DD/MM/YYYY HH:mm"},c))),l.a.createElement("div",{className:"col-md-3"},l.a.createElement(u.b,{to:"/launch/".concat(n),className:"btn btn-secondary"},"Launch Details"))))};function v(){var e=Object(o.a)(["\n  {\n    launches {\n      flight_number\n      mission_name\n      launch_date_local\n      launch_success\n    }\n  }\n"]);return v=function(){return e},e}var y=E()(v()),k=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,{query:y},(function(e){var a=e.loading,n=e.error,t=e.data;return a?l.a.createElement("h4",null,"Loading..."):(n&&console.log(n),l.a.createElement("div",null,l.a.createElement("h3",null,"Launches"),l.a.createElement(g,null),t.launches.map((function(e){return l.a.createElement(N,{launch:e,key:e.flight_number})}))))})))};function x(){var e=Object(o.a)(["\n  query LaunchQuery($flight_number: Int!) {\n    launch(flight_number: $flight_number) {\n      flight_number\n      mission_name\n      launch_year\n      launch_success\n      launch_date_local\n      rocket {\n        rocket_id\n        rocket_name\n        rocket_type\n      }\n    }\n  }\n"]);return x=function(){return e},e}var L=E()(x()),D=function(e){var a=e.match.params.flight_number;return a=parseInt(a),l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,{query:L,variables:{flight_number:a}},(function(e){var a=e.loading,n=e.error,t=e.data;if(a)return l.a.createElement("h4",null,"Loading...");n&&console.log(n);var c=t.launch,r=c.mission_name,s=c.flight_number,m=c.launch_year,i=c.launch_success,o=c.rocket,h=o.rocket_id,E=o.rocket_name,p=o.rocket_type;return l.a.createElement("div",null,l.a.createElement("h1",{className:"display-4 my-3"},l.a.createElement("span",{className:"text-dark"},"Mission: "),r),l.a.createElement("h4",{className:"mb-3"},"Launch Details"),l.a.createElement("ul",{className:"list-group"},l.a.createElement("li",{className:"list-group-item"},"Flight Number: ",s),l.a.createElement("li",{className:"list-group-item"},"Launch Year: ",m),l.a.createElement("li",{className:"list-group-item"},"Launch Successful:",l.a.createElement("span",{className:_()({"text-success":i,"text-danger":!i})},i?" Yes":" No"))),l.a.createElement("h4",{className:"my-3"},"Rocket Details"),l.a.createElement("ul",{className:"list-group"},l.a.createElement("li",{className:"list-group-item"},"Rocket ID: ",h),l.a.createElement("li",{className:"list-group-item"},"Rocket Name: ",E),l.a.createElement("li",{className:"list-group-item"},"Rocket Type: ",p)),l.a.createElement("hr",null),l.a.createElement(u.b,{to:"/",className:"btn btn-secondary"},"Back"))})))},Y=(n(55),n(40)),q=n.n(Y),w=new s.a({uri:"/graphql"}),F=function(){return l.a.createElement(m.a,{client:w},l.a.createElement(u.a,null,l.a.createElement("div",{className:"app"},l.a.createElement("img",{src:q.a,className:"logo",alt:"spacex"}),l.a.createElement(i.a,{exact:!0,path:"/",component:k}),l.a.createElement(i.a,{exact:!0,path:"/launch/:flight_number",component:D}))))};r.a.render(l.a.createElement(F,null),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.a4f382e2.chunk.js.map