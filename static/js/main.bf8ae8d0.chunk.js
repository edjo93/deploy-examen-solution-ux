(this["webpackJsonpexamen-solution-ux"]=this["webpackJsonpexamen-solution-ux"]||[]).push([[0],{10:function(e){e.exports=JSON.parse('{"a":[{"texto":"tengo que entregar una tarea","fecha":"21/ago/2020 09:31:50","etiquetas":"react"},{"texto":"debo hacer examen","fecha":"21/ago/2020 09:33:50","etiquetas":"js"}]}')},12:function(e,a,t){e.exports=t(22)},17:function(e,a,t){},18:function(e,a,t){},22:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(8),c=t.n(o),s=(t(17),t(11)),l=t(2),i=t(3),u=t(1),m=t(5),d=t(4),h=(t(18),t(9)),g=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(){var e;return Object(l.a)(this,t),(e=a.call(this)).state={texto:"",fecha:"21/ago/2020 09:31:50",etiquetas:""},e.manejarEntrada=e.manejarEntrada.bind(Object(u.a)(e)),e.manejarSubmit=e.manejarSubmit.bind(Object(u.a)(e)),e}return Object(i.a)(t,[{key:"manejarEntrada",value:function(e){var a=e.target,t=a.name,n=a.value;console.log(t,n),this.setState(Object(h.a)({},t,n))}},{key:"manejarSubmit",value:function(e){e.preventDefault(),this.props.alAgregarReg(this.state),console.log(this.state)}},{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.manejarSubmit},r.a.createElement("h1",{className:"display-4"},this.props.titulo),r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{value:this.state.texto,name:"texto",className:"form-control",onChange:this.manejarEntrada,id:"exampleFormControlTextarea1",rows:"3",placeholder:"Que quieres guardar hoy?"})),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{htmlFor:"formGroupExampleInput"}),r.a.createElement("input",{value:this.state.etiquetas,name:"etiquetas",onChange:this.manejarEntrada,type:"text",class:"form-control",id:"formGroupExampleInput",placeholder:"etiqueta tus apuntes para encontrarlos luego"})),r.a.createElement("button",{type:"submit",className:"btn btn-success"},"Guardar apunte"))}}]),t}(n.Component),p=t(10),v=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(){var e;return Object(l.a)(this,t),(e=a.call(this)).state={array:p.a},e.agregarNuevoReg=e.agregarNuevoReg.bind(Object(u.a)(e)),e}return Object(i.a)(t,[{key:"agregarNuevoReg",value:function(e){this.setState({array:[].concat(Object(s.a)(this.state.array),[e])})}},{key:"render",value:function(){var e=this.state.array.map((function(e,a){return r.a.createElement("div",{className:"col-lg-4 col-md-6"},r.a.createElement("div",{className:"card mt-4"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h2",{id:"text_etiqueta"},e.etiquetas)),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",null,e.texto),r.a.createElement("p",null,e.fecha))))}));return r.a.createElement("div",{className:"App"},r.a.createElement(g,{titulo:"APEL.io",alAgregarReg:this.agregarNuevoReg}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row  mt-4"},e)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(19),t(7),t(20);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.bf8ae8d0.chunk.js.map