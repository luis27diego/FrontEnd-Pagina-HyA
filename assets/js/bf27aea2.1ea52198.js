"use strict";(self.webpackChunknombre_del_sitio=self.webpackChunknombre_del_sitio||[]).push([[8293],{7015:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var a=s(4848),i=s(8453),n=s(3108);const o={sidebar_position:2},l="Cubico",r={id:"histologia/tejidos/tejido-epitelial/epitelio-de-revestimiento/simple/cubico",title:"Cubico",description:"",source:"@site/docs/histologia/tejidos/tejido-epitelial/epitelio-de-revestimiento/simple/cubico.md",sourceDirName:"histologia/tejidos/tejido-epitelial/epitelio-de-revestimiento/simple",slug:"/histologia/tejidos/tejido-epitelial/epitelio-de-revestimiento/simple/cubico",permalink:"/FrontEnd-Pagina-HyA/docs/histologia/tejidos/tejido-epitelial/epitelio-de-revestimiento/simple/cubico",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"histologiaSidebar",previous:{title:"Plano",permalink:"/FrontEnd-Pagina-HyA/docs/histologia/tejidos/tejido-epitelial/epitelio-de-revestimiento/simple/plano"},next:{title:"Cilindrico",permalink:"/FrontEnd-Pagina-HyA/docs/histologia/tejidos/tejido-epitelial/epitelio-de-revestimiento/simple/cilindrico"}},d={},c=[];function u(e){const t={h1:"h1",header:"header",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"cubico",children:"Cubico"})}),"\n","\n",(0,a.jsx)(n.A,{paginaId:3})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},3108:(e,t,s)=>{s.d(t,{A:()=>u});var a=s(6540),i=s(4335),n=s(312),o=s.n(n),l=s(3105),r=s(4848);const d=e=>{let{subtitulo:t,onSubmit:s,onLogout:i}=e;const[n,o]=(0,a.useState)(t.TITULO),[l,d]=(0,a.useState)(t.DETALLES.map((e=>({...e,image:null,imagePreview:e.IMAGEN_URL||null})))),c=(e,t,s)=>{const a=[...l];if(a[e][t]=s,"image"===t){const t=s;a[e].imagePreview=t?URL.createObjectURL(t):null}d(a)};return(0,r.jsxs)("form",{onSubmit:e=>{e.preventDefault();const t=new FormData;t.append("title",n),l.forEach((e=>{t.append(`details[${e.ID_DETALLES}][id]`,e.ID_DETALLES),t.append(`details[${e.ID_DETALLES}][definition]`,e.DEFINICION),e.image&&t.append(`details[${e.ID_DETALLES}][image]`,e.image)})),console.log("Datos del formulario enviados:");for(const[s,a]of t.entries())console.log(`${s}: ${a instanceof File?a.name:a}`);s(t)},className:"edit-form modal-container",children:[(0,r.jsxs)("div",{className:"edit-form__header",children:[(0,r.jsx)("h2",{children:"Editar Subt\xedtulo"}),(0,r.jsx)("button",{onClick:i,className:"edit-form__logout-button",children:"Cerrar sesi\xf3n"})]}),(0,r.jsxs)("div",{className:"edit-form__group",children:[(0,r.jsx)("label",{className:"edit-form__label",children:"T\xedtulo del Subt\xedtulo:"}),(0,r.jsx)("input",{type:"text",className:"edit-form__input",value:n,onChange:e=>o(e.target.value)})]}),l.map(((e,t)=>(0,r.jsxs)("div",{className:"edit-form__group",children:[(0,r.jsx)("label",{className:"edit-form__label",children:"Definici\xf3n:"}),(0,r.jsx)("textarea",{className:"edit-form__textarea",value:e.DEFINICION,onChange:e=>c(t,"DEFINICION",e.target.value)}),(0,r.jsx)("label",{className:"edit-form__label",children:"Imagen:"}),(0,r.jsx)("input",{type:"file",className:"edit-form__file",onChange:e=>c(t,"image",e.target.files[0])}),e.imagePreview&&(0,r.jsx)("img",{src:e.imagePreview,alt:"Vista previa de la imagen",className:"edit-form__image-preview"})]},e.ID_DETALLES))),(0,r.jsx)("button",{type:"submit",className:"edit-form__button",children:"Guardar cambios"})]})},c=e=>{let{onLogin:t}=e;const[s,i]=(0,a.useState)(!1),[n,o]=(0,a.useState)(""),[l,d]=(0,a.useState)(""),[c,u]=(0,a.useState)(""),[m,p]=(0,a.useState)(""),[g,h]=(0,a.useState)("");return(0,r.jsxs)("div",{className:"container123 "+(s?"active123":""),id:"container123",children:[(0,r.jsx)("div",{className:"form-container123 "+(s?"sign-up123":"sign-in123"),children:(0,r.jsxs)("form",{onSubmit:async e=>{e.preventDefault(),p(""),h("");const a=s?"https://web-production-10154.up.railway.app/auth/register":"https://web-production-10154.up.railway.app/auth/login",i=s?{nombre:n,email:l,"contrase\xf1a":c}:{email:l,"contrase\xf1a":c};try{const e=await fetch(a,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)}),n=await e.json();e.ok?(localStorage.setItem("token_user",n.token),localStorage.setItem("rol",n.rol),s?(h("Registro exitoso. \xa1Bienvenido!"),setTimeout((()=>{h("")}),3e3)):t()):p(n.error||"Error en la autenticaci\xf3n")}catch(o){p(o.message)}},children:[(0,r.jsx)("h1",{children:s?"Crear Cuenta":"Iniciar Sesi\xf3n"}),(0,r.jsxs)("span",{children:["o usa tu email para ",s?"registrarte":"iniciar sesi\xf3n"]}),s&&(0,r.jsx)("input",{type:"text",placeholder:"Nombre",value:n,onChange:e=>o(e.target.value),required:!0}),(0,r.jsx)("input",{type:"email",placeholder:"Email",value:l,onChange:e=>d(e.target.value),required:!0}),(0,r.jsx)("input",{type:"password",placeholder:"Contrase\xf1a",value:c,onChange:e=>u(e.target.value),required:!0}),(0,r.jsx)("button",{className:"botones123",type:"submit",children:s?"Reg\xedstrate":"Iniciar Sesi\xf3n"}),m&&(0,r.jsx)("p",{style:{color:"red"},children:m}),g&&(0,r.jsx)("p",{style:{color:"green"},children:g}),!s&&(0,r.jsx)("button",{className:"botones123",onClick:()=>{i(!0),d(""),u("")},children:"Reg\xedstrate"}),s&&(0,r.jsx)("button",{className:"botones123",onClick:()=>{i(!1),d(""),u("")},children:"Iniciar Sesi\xf3n"})]})}),(0,r.jsx)("div",{className:"toggle-container123",children:s?(0,r.jsxs)("div",{className:"toggle-panel123 toggle-right123",children:[(0,r.jsx)("h1",{children:"\xa1Hola, amigo!"}),(0,r.jsx)("p",{children:"Ingresa tus datos personales y empieza tu viaje con nosotros"})]}):(0,r.jsxs)("div",{className:"toggle-panel123 toggle-left123",children:[(0,r.jsx)("h1",{children:"\xa1Bienvenido de vuelta!"}),(0,r.jsx)("p",{children:"Para mantenerte conectado con nosotros, inicia sesi\xf3n con tus datos personales"})]})})]})};o().setAppElement("#__docusaurus");const u=e=>{let{paginaId:t}=e;const[s,n]=(0,a.useState)([]),[u,m]=(0,a.useState)(!0),[p,g]=(0,a.useState)(null),[h,x]=(0,a.useState)(null),[j,C]=(0,a.useState)(!1),[v,b]=(0,a.useState)(!1),[_,N]=(0,a.useState)(!1);(0,a.useEffect)((()=>{(async()=>{try{const e=await i.A.get(`https://web-production-10154.up.railway.app/api/subtitulos_con_detalles?paginaId=${t}`);n(e.data)}catch(e){g(e)}finally{m(!1)}})(),localStorage.getItem("token_user")&&N(!0);const e=e=>{"token_user"===e.key&&N(!!e.newValue)};return window.addEventListener("storage",e),()=>{window.removeEventListener("storage",e)}}),[t]);const I=()=>{C(!1),x(null)};return u?(0,r.jsx)("div",{children:"Loading..."}):p?(0,r.jsxs)("div",{children:["Error: ",p.message]}):(0,r.jsxs)("div",{children:[s.map((e=>(0,r.jsxs)("div",{className:"subtitulo-container",children:[(0,r.jsx)("h2",{className:"subtitulo-titulo",children:e.TITULO}),e.DETALLES.length>0?(0,r.jsx)("div",{className:"detalles-container",children:e.DETALLES.map((t=>(0,r.jsxs)("div",{className:"detalle",children:[(0,r.jsx)("h3",{className:"detalle-definicion",dangerouslySetInnerHTML:{__html:t.DEFINICION}}),t.IMAGENES&&t.IMAGENES.length>0?(0,r.jsx)(l.A,{title:e.TITULO,category:e.TITULO,description:t.DEFINICION,images:t.IMAGENES.map((e=>({src:e.URL_IMAGEN,caption:e.CAPTION||"Descripci\xf3n no proporcionada"})))}):(0,r.jsx)("p",{className:"no-imagenes",children:"No hay im\xe1genes disponibles."})]},t.ID_DETALLES)))}):(0,r.jsx)("p",{className:"no-detalles",children:"No hay detalles disponibles."}),(0,r.jsx)("button",{onClick:()=>(e=>{_?(x(e),C(!0)):b(!0)})(e),className:"edit-button",children:"Editar"})]},e.ID_SUBTITULO))),(0,r.jsx)(o(),{isOpen:j,onRequestClose:I,contentLabel:"Editar Subt\xedtulo",style:{overlay:{backgroundColor:"rgba(0, 0, 0, 0.75)",zIndex:15},content:{top:"54%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",width:"80%",maxWidth:"600px",backgroundColor:"var(--modal-bg-color)",color:"var(--modal-text-color)",border:"none"}},children:h&&(0,r.jsxs)("div",{children:[(0,r.jsxs)("h2",{children:["Editando: ",h.TITULO]}),(0,r.jsx)(d,{subtitulo:h,onSubmit:async e=>{try{await i.A.post("https://web-production-10154.up.railway.app/api/sugerir_definicion",e),I();const s=await i.A.get(`https://web-production-10154.up.railway.app/api/subtitulos_con_detalles?paginaId=${t}`);n(s.data)}catch(s){console.error("Error enviando la sugerencia:",s)}},onLogout:()=>{localStorage.removeItem("token_user"),N(!1),I()}}),(0,r.jsx)("button",{onClick:I,className:"modal-close-button",children:"Cerrar"})]})}),(0,r.jsx)(o(),{isOpen:v,onRequestClose:()=>{b(!1)},contentLabel:"Iniciar Sesi\xf3n",style:{overlay:{backgroundColor:"rgba(0, 0, 0, 0.75)",zIndex:15},content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",width:"100%",maxWidth:"800px",maxHeight:"80vh",overflowY:"auto",overflowX:"hidden",padding:"0px",backgroundColor:"transparent",border:"none"}},children:(0,r.jsx)(c,{onLogin:()=>{N(!0),b(!1)}})})]})}},3105:(e,t,s)=>{s.d(t,{A:()=>_});var a=s(6540),i=s(8478),n=s(3217);const o="modalGalleryColumn_eo2j",l="modalGallery_mRem",r="modalGalleryContent_oZ9k",d="modalGallerySlide_fqS3",c="modalGalleryClose_rBJ2",u="modalGalleryPrev_aMWY",m="modalGalleryNext_F8DK",p="modalGalleryNumberText_AAkb",g="modalGalleryCaptionContainer_ppu5",h="modalGalleryImage_JPRe",x="modalGalleryActive_jIsD";var j=s(4848);const C=e=>{let{images:t,slideIndex:s,setSlideIndex:i,closeModal:C}=e;if(!t||0===t.length)return null;const v=Math.max(0,Math.min(s,t.length-1)),b=e=>{let s=v+e;s>=t.length?s=0:s<0&&(s=t.length-1),i(s)},_=100/t.length+"%",N=e=>{const{resetTransform:t}=(0,n._5)();(0,a.useEffect)((()=>t()),[e])};return(0,j.jsxs)("div",{className:l,children:[(0,j.jsx)("span",{className:c,onClick:C,children:"\xd7"}),(0,j.jsxs)("div",{className:r,children:[(0,j.jsxs)("div",{className:d,children:[(0,j.jsx)("div",{className:p,children:t[v]?.caption||""}),(0,j.jsx)(n.GT,{children:e=>{let{resetTransform:s,...a}=e;return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(N,{validIndex:v}),(0,j.jsx)(n.WZ,{children:(0,j.jsx)("img",{className:h,src:t[v]?.src||"",alt:t[v]?.caption||"Image"})})]})}})]}),(0,j.jsx)("a",{className:u,onClick:()=>b(-1),children:"\u276e"}),(0,j.jsx)("a",{className:m,onClick:()=>b(1),children:"\u276f"}),t.map(((e,t)=>(0,j.jsx)("div",{className:o,style:{width:_},children:(0,j.jsx)("div",{className:`${g} ${s===t?x:""}`,onClick:()=>i(t),children:(0,j.jsx)("p",{id:"caption",children:e.caption})})},t)))]})]})},v={tissueCardContainer:"tissueCardContainer_UO2F",tissueCard:"tissueCard_ULi4",tissueCardImageContainer:"tissueCardImageContainer_c6Ql",tissueCardImage:"tissueCardImage_MUaT",tissueCardImageDescription:"tissueCardImageDescription_seqR",tissueCardBulletsContainer:"tissueCardBulletsContainer_Zn36",tissueCardBullet:"tissueCardBullet_OYAZ",tissueCardActiveBullet:"tissueCardActiveBullet_Eru_",tissueCardDotsContainer:"tissueCardDotsContainer_hhHf",tissueCardDot:"tissueCardDot_nrWu",tissueCardActiveDot:"tissueCardActiveDot_FjHw",tissueCardTitle:"tissueCardTitle_P2SM",tissueCardCategory:"tissueCardCategory_vC_N",tissueCardText:"tissueCardText_LmjI"},b=e=>{let{title:t,category:s,description:i,images:n}=e;if(!n||0===n.length)return null;const o=(e=>{const t=["Porta","x4","x10","x40"];return e.sort(((e,s)=>{const a=t.indexOf(e.caption),i=t.indexOf(s.caption);return(-1===a?t.length:a)-(-1===i?t.length:i)}))})(n),l=3===o.length?0:4===o.length?1:0,[r,d]=(0,a.useState)(l),[c,u]=(0,a.useState)(!1),[m,p]=(0,a.useState)(!1);return(0,a.useEffect)((()=>{const e=new Image;e.src=o[r].src,e.onload=()=>p(!0),e.onerror=()=>p(!1)}),[r,o]),(0,j.jsxs)("div",{className:v.tissueCardContainer,children:[(0,j.jsxs)("div",{className:v.tissueCard,children:[(0,j.jsx)("div",{className:v.tissueCardImageContainer,children:(0,j.jsx)("div",{className:v.tissueCardImage,style:{backgroundImage:m?`url(${o[r].src})`:"none"},onClick:()=>{u(!0)},children:m?(0,j.jsxs)("span",{className:v.tissueCardImageDescription,children:[o[r].caption," "]}):(0,j.jsx)("span",{className:v.tissueCardLoadingText,children:"Cargando..."})})}),(0,j.jsx)("div",{className:v.tissueCardBulletsContainer,children:o.map(((e,t)=>(0,j.jsx)("div",{className:`${v.tissueCardBullet} ${r===t?v.tissueCardActiveBullet:""}`,onClick:()=>d(t)},t)))})]}),c&&(0,j.jsx)(C,{images:o,slideIndex:r,setSlideIndex:d,closeModal:()=>{u(!1)}})]})},_=e=>{let{title:t,category:s,description:a,images:n}=e;return(0,j.jsx)(i.A,{children:()=>(0,j.jsx)(b,{title:t,category:s,description:a,images:n})})}}}]);