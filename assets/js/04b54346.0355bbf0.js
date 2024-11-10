"use strict";(self.webpackChunknombre_del_sitio=self.webpackChunknombre_del_sitio||[]).push([[7561],{3992:(e,a,s)=>{s.d(a,{A:()=>i});var n=s(6540),t=s(4335),r=s(4848);const i=()=>{const[e,a]=(0,n.useState)([]),[s,i]=(0,n.useState)(""),o=async()=>{const e=localStorage.getItem("token");try{const s=await t.A.get("https://web-production-10154.up.railway.app/api/obtener_sugerencias",{headers:{"x-access-tokens":e}});a(s.data)}catch(s){console.error("Error al obtener sugerencias pendientes",s)}};(0,n.useEffect)((()=>{o()}),[]);return(0,r.jsxs)("div",{children:[s&&(0,r.jsx)("div",{className:"mensaje-confirmacion",children:s}),(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"ID"}),(0,r.jsx)("th",{children:"Clasificaci\xf3n"}),(0,r.jsx)("th",{children:"Nombre de la P\xe1gina"}),(0,r.jsx)("th",{children:"Nombre del Subt\xedtulo"}),(0,r.jsx)("th",{children:"Subtitulo Sugerido"}),(0,r.jsx)("th",{children:"Definicion"}),(0,r.jsx)("th",{children:"Tipo de Cambio"}),(0,r.jsx)("th",{children:"Fecha de Env\xedo"}),(0,r.jsx)("th",{children:"Acciones"})]})}),(0,r.jsx)("tbody",{children:e.map((e=>(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:e.id_sugerencia}),(0,r.jsx)("td",{children:e.nombre_tejido})," ",(0,r.jsx)("td",{children:e.titulo_pagina}),(0,r.jsx)("td",{children:e.nombre_subtitulo})," ",(0,r.jsx)("td",{children:e.titulo_subtitulo_sugerido}),(0,r.jsx)("td",{children:e.definicion}),(0,r.jsx)("td",{children:e.tipo_cambio})," ",(0,r.jsx)("td",{children:e.fecha_envio}),(0,r.jsxs)("td",{children:[(0,r.jsx)("button",{className:"btn aprobar",onClick:()=>(async e=>{const a=localStorage.getItem("token");try{const s=await t.A.post(`https://web-production-10154.up.railway.app/api/aprobar_sugerencia/${e}`,{},{headers:{"x-access-tokens":a}});console.log(s.data.message),i("Sugerencia aprobada"),o(),setTimeout((()=>i("")),3e3)}catch(s){console.error("Error al aprobar sugerencia",s)}})(e.id_sugerencia),children:"Aprobar"}),(0,r.jsx)("button",{className:"btn rechazar",onClick:()=>(async e=>{const a=localStorage.getItem("token");try{const s=await t.A.post(`https://web-production-10154.up.railway.app/api/rechazar_sugerencia/${e}`,{},{headers:{"x-access-tokens":a}});console.log(s.data.message),i("Sugerencia rechazada"),o(),setTimeout((()=>i("")),3e3)}catch(s){console.error("Error al rechazar sugerencia",s)}})(e.id_sugerencia),children:"Rechazar"})]})]},e.id_sugerencia)))})]})]})}},2246:(e,a,s)=>{s.d(a,{A:()=>i});var n=s(6540),t=s(6347),r=s(4848);const i=e=>{let{onLogin:a}=e;const[s,i]=(0,n.useState)(!1),[o,c]=(0,n.useState)(""),[l,d]=(0,n.useState)(""),[h,u]=(0,n.useState)(""),[m,j]=(0,n.useState)(""),[x,p]=(0,n.useState)(""),g=(0,t.W6)(),b=async e=>{e.preventDefault(),j(""),p("");const n=s?"https://web-production-10154.up.railway.app/auth/register":"https://web-production-10154.up.railway.app/auth/login",t=s?{nombre:o,email:l,"contrase\xf1a":h}:{email:l,"contrase\xf1a":h};try{const e=await fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),r=await e.json();if(e.ok)localStorage.setItem("token",r.token),localStorage.setItem("rol",r.rol),s?(p("Registro exitoso. \xa1Bienvenido!"),c(""),d(""),u(""),setTimeout((()=>{p("")}),3e3)):"admin"===r.rol?(a(),g.push("/admin")):j("No tienes permisos de administrador");else{if(403!==e.status)throw new Error(r.error||"Error en la autenticaci\xf3n");j(r.error)}}catch(r){j(r.message)}};return(0,r.jsxs)("div",{className:"container "+(s?"active":""),id:"container",children:[(0,r.jsx)("div",{className:"form-container sign-up",children:(0,r.jsxs)("form",{onSubmit:b,children:[(0,r.jsx)("h1",{children:"Crear Cuenta"}),(0,r.jsxs)("div",{className:"social-icons",children:[(0,r.jsx)("a",{href:"#",className:"icon",children:(0,r.jsx)("i",{className:"fa-brands fa-google-plus-g"})}),(0,r.jsx)("a",{href:"#",className:"icon",children:(0,r.jsx)("i",{className:"fa-brands fa-facebook-f"})}),(0,r.jsx)("a",{href:"#",className:"icon",children:(0,r.jsx)("i",{className:"fa-brands fa-github"})}),(0,r.jsx)("a",{href:"#",className:"icon",children:(0,r.jsx)("i",{className:"fa-brands fa-linkedin-in"})})]}),(0,r.jsx)("span",{children:"o usa tu email para registrarte"}),(0,r.jsx)("input",{type:"text",placeholder:"Nombre",value:o,onChange:e=>c(e.target.value),required:!0}),(0,r.jsx)("input",{type:"email",placeholder:"Email",value:l,onChange:e=>d(e.target.value),required:!0}),(0,r.jsx)("input",{type:"password",placeholder:"Contrase\xf1a",value:h,onChange:e=>u(e.target.value),required:!0}),(0,r.jsx)("button",{className:"botones",type:"submit",children:"Reg\xedstrate"}),m&&(0,r.jsx)("p",{style:{color:"red"},children:m})," ",x&&(0,r.jsx)("p",{style:{color:"green"},children:x})]})}),(0,r.jsx)("div",{className:"form-container sign-in",children:(0,r.jsxs)("form",{onSubmit:b,children:[(0,r.jsx)("h1",{children:"Iniciar Sesi\xf3n"}),(0,r.jsxs)("div",{className:"social-icons",children:[(0,r.jsx)("a",{href:"#",className:"icon",children:(0,r.jsx)("i",{className:"fa-brands fa-google-plus-g"})}),(0,r.jsx)("a",{href:"#",className:"icon",children:(0,r.jsx)("i",{className:"fa-brands fa-facebook-f"})}),(0,r.jsx)("a",{href:"#",className:"icon",children:(0,r.jsx)("i",{className:"fa-brands fa-github"})}),(0,r.jsx)("a",{href:"#",className:"icon",children:(0,r.jsx)("i",{className:"fa-brands fa-linkedin-in"})})]}),(0,r.jsx)("span",{children:"o usa tu email y contrase\xf1a"}),(0,r.jsx)("input",{type:"email",placeholder:"Email",value:l,onChange:e=>d(e.target.value),required:!0}),(0,r.jsx)("input",{type:"password",placeholder:"Contrase\xf1a",value:h,onChange:e=>u(e.target.value),required:!0}),(0,r.jsx)("a",{href:"#",children:"\xbfOlvidaste tu contrase\xf1a?"}),(0,r.jsx)("button",{className:"botones",type:"submit",children:"Iniciar Sesi\xf3n"}),m&&(0,r.jsx)("p",{style:{color:"red"},children:m})," "]})}),(0,r.jsx)("div",{className:"toggle-container",children:(0,r.jsxs)("div",{className:"toggle",children:[(0,r.jsxs)("div",{className:"toggle-panel toggle-left",children:[(0,r.jsx)("h1",{children:"\xa1Bienvenido de vuelta!"}),(0,r.jsx)("p",{children:"Para mantenerte conectado con nosotros, inicia sesi\xf3n con tus datos personales"}),(0,r.jsx)("button",{className:"hidden botones",onClick:()=>i(!1),children:"Iniciar Sesi\xf3n"})]}),(0,r.jsxs)("div",{className:"toggle-panel toggle-right",children:[(0,r.jsx)("h1",{children:"\xa1Hola, amigo!"}),(0,r.jsx)("p",{children:"Ingresa tus datos personales y empieza tu viaje con nosotros"}),(0,r.jsx)("button",{className:"hidden botones",onClick:()=>i(!0),children:"Reg\xedstrate"})]})]})})]})}},1759:(e,a,s)=>{s.r(a),s.d(a,{default:()=>l});var n=s(6540),t=s(3992),r=s(2246),i=s(6347),o=s(4848);const c=e=>{let{onLogout:a}=e;const s=(0,i.W6)();return(0,o.jsx)("button",{onClick:()=>{localStorage.removeItem("token"),a(),s.push("/admin")},children:"Cerrar sesi\xf3n"})},l=()=>{const[e,a]=(0,n.useState)(!1),s=()=>{const e=localStorage.getItem("token");a(!!e)};return(0,n.useEffect)((()=>{s()}),[]),(0,o.jsx)("div",{className:"admin-container",children:e?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c,{onLogout:()=>a(!1)}),(0,o.jsx)("div",{className:"table-container",children:(0,o.jsx)(t.A,{})})]}):(0,o.jsx)(r.A,{onLogin:()=>s()})})}}}]);