"use strict";(self.webpackChunknombre_del_sitio=self.webpackChunknombre_del_sitio||[]).push([[282],{9745:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>n,metadata:()=>l,toc:()=>d});var s=a(4848),i=a(8453),o=a(3108);const n={sidebar_position:2},r="Cartilaginoso",l={id:"histologia/tejidos/tejido-conectivo/conectivo-especializado/cartilaginoso",title:"Cartilaginoso",description:"",source:"@site/docs/histologia/tejidos/tejido-conectivo/conectivo-especializado/cartilaginoso.md",sourceDirName:"histologia/tejidos/tejido-conectivo/conectivo-especializado",slug:"/histologia/tejidos/tejido-conectivo/conectivo-especializado/cartilaginoso",permalink:"/FrontEnd-Pagina-HyA/docs/histologia/tejidos/tejido-conectivo/conectivo-especializado/cartilaginoso",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"histologiaSidebar",previous:{title:"Adiposo",permalink:"/FrontEnd-Pagina-HyA/docs/histologia/tejidos/tejido-conectivo/conectivo-especializado/adiposo"},next:{title:"\xd3seo",permalink:"/FrontEnd-Pagina-HyA/docs/histologia/tejidos/tejido-conectivo/conectivo-especializado/oseo"}},c={},d=[];function u(e){const t={h1:"h1",header:"header",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"cartilaginoso",children:"Cartilaginoso"})}),"\n","\n",(0,s.jsx)(o.A,{paginaId:12})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},3108:(e,t,a)=>{a.d(t,{A:()=>u});var s=a(6540),i=a(4335),o=a(312),n=a.n(o),r=a(3105),l=a(4848);const c=e=>{let{subtitulo:t,onSubmit:a,onLogout:i}=e;const[o,n]=(0,s.useState)(t.TITULO),[r,c]=(0,s.useState)(t.DETALLES.map((e=>({...e,image:null,imagePreview:e.IMAGEN_URL||null})))),d=(e,t,a)=>{const s=[...r];if(s[e][t]=a,"image"===t){const t=a;s[e].imagePreview=t?URL.createObjectURL(t):null}c(s)};return(0,l.jsxs)("form",{onSubmit:e=>{e.preventDefault();const t=new FormData;t.append("title",o),r.forEach((e=>{t.append(`details[${e.ID_DETALLES}][id]`,e.ID_DETALLES),t.append(`details[${e.ID_DETALLES}][definition]`,e.DEFINICION),e.image&&t.append(`details[${e.ID_DETALLES}][image]`,e.image)})),console.log("Datos del formulario enviados:");for(const[a,s]of t.entries())console.log(`${a}: ${s instanceof File?s.name:s}`);a(t)},className:"edit-form modal-container",children:[(0,l.jsxs)("div",{className:"edit-form__header",children:[(0,l.jsx)("h2",{children:"Editar Subt\xedtulo"}),(0,l.jsx)("button",{onClick:i,className:"edit-form__logout-button",children:"Cerrar sesi\xf3n"})]}),(0,l.jsxs)("div",{className:"edit-form__group",children:[(0,l.jsx)("label",{className:"edit-form__label",children:"T\xedtulo del Subt\xedtulo:"}),(0,l.jsx)("input",{type:"text",className:"edit-form__input",value:o,onChange:e=>n(e.target.value)})]}),r.map(((e,t)=>(0,l.jsxs)("div",{className:"edit-form__group",children:[(0,l.jsx)("label",{className:"edit-form__label",children:"Definici\xf3n:"}),(0,l.jsx)("textarea",{className:"edit-form__textarea",value:e.DEFINICION,onChange:e=>d(t,"DEFINICION",e.target.value)}),(0,l.jsx)("label",{className:"edit-form__label",children:"Imagen:"}),(0,l.jsx)("input",{type:"file",className:"edit-form__file",onChange:e=>d(t,"image",e.target.files[0])}),e.imagePreview&&(0,l.jsx)("img",{src:e.imagePreview,alt:"Vista previa de la imagen",className:"edit-form__image-preview"})]},e.ID_DETALLES))),(0,l.jsx)("button",{type:"submit",className:"edit-form__button",children:"Guardar cambios"})]})},d=e=>{let{onLogin:t}=e;const[a,i]=(0,s.useState)(!1),[o,n]=(0,s.useState)(""),[r,c]=(0,s.useState)(""),[d,u]=(0,s.useState)(""),[m,g]=(0,s.useState)(""),[p,h]=(0,s.useState)("");return(0,l.jsxs)("div",{className:"container123 "+(a?"active123":""),id:"container123",children:[(0,l.jsx)("div",{className:"form-container123 "+(a?"sign-up123":"sign-in123"),children:(0,l.jsxs)("form",{onSubmit:async e=>{e.preventDefault(),g(""),h("");const s=a?"https://web-production-10154.up.railway.app/auth/register":"https://web-production-10154.up.railway.app/auth/login",i=a?{nombre:o,email:r,"contrase\xf1a":d}:{email:r,"contrase\xf1a":d};try{const e=await fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)}),o=await e.json();e.ok?(localStorage.setItem("token_user",o.token),localStorage.setItem("rol",o.rol),a?(h("Registro exitoso. \xa1Bienvenido!"),setTimeout((()=>{h("")}),3e3)):t()):g(o.error||"Error en la autenticaci\xf3n")}catch(n){g(n.message)}},children:[(0,l.jsx)("h1",{children:a?"Crear Cuenta":"Iniciar Sesi\xf3n"}),(0,l.jsxs)("span",{children:["o usa tu email para ",a?"registrarte":"iniciar sesi\xf3n"]}),a&&(0,l.jsx)("input",{type:"text",placeholder:"Nombre",value:o,onChange:e=>n(e.target.value),required:!0}),(0,l.jsx)("input",{type:"email",placeholder:"Email",value:r,onChange:e=>c(e.target.value),required:!0}),(0,l.jsx)("input",{type:"password",placeholder:"Contrase\xf1a",value:d,onChange:e=>u(e.target.value),required:!0}),(0,l.jsx)("button",{className:"botones123",type:"submit",children:a?"Reg\xedstrate":"Iniciar Sesi\xf3n"}),m&&(0,l.jsx)("p",{style:{color:"red"},children:m}),p&&(0,l.jsx)("p",{style:{color:"green"},children:p}),!a&&(0,l.jsx)("button",{className:"botones123",onClick:()=>{i(!0),c(""),u("")},children:"Reg\xedstrate"}),a&&(0,l.jsx)("button",{className:"botones123",onClick:()=>{i(!1),c(""),u("")},children:"Iniciar Sesi\xf3n"})]})}),(0,l.jsx)("div",{className:"toggle-container123",children:a?(0,l.jsxs)("div",{className:"toggle-panel123 toggle-right123",children:[(0,l.jsx)("h1",{children:"\xa1Hola, amigo!"}),(0,l.jsx)("p",{children:"Ingresa tus datos personales y empieza tu viaje con nosotros"})]}):(0,l.jsxs)("div",{className:"toggle-panel123 toggle-left123",children:[(0,l.jsx)("h1",{children:"\xa1Bienvenido de vuelta!"}),(0,l.jsx)("p",{children:"Para mantenerte conectado con nosotros, inicia sesi\xf3n con tus datos personales"})]})})]})};n().setAppElement("#__docusaurus");const u=e=>{let{paginaId:t}=e;const[a,o]=(0,s.useState)([]),[u,m]=(0,s.useState)(!0),[g,p]=(0,s.useState)(null),[h,x]=(0,s.useState)(null),[j,C]=(0,s.useState)(!1),[v,_]=(0,s.useState)(!1),[b,N]=(0,s.useState)(!1);(0,s.useEffect)((()=>{(async()=>{try{const e=await i.A.get(`https://web-production-10154.up.railway.app/api/subtitulos_con_detalles?paginaId=${t}`);o(e.data)}catch(e){p(e)}finally{m(!1)}})(),localStorage.getItem("token_user")&&N(!0);const e=e=>{"token_user"===e.key&&N(!!e.newValue)};return window.addEventListener("storage",e),()=>{window.removeEventListener("storage",e)}}),[t]);const I=()=>{C(!1),x(null)};return u?(0,l.jsx)("div",{children:"Loading..."}):g?(0,l.jsxs)("div",{children:["Error: ",g.message]}):(0,l.jsxs)("div",{children:[a.map((e=>(0,l.jsxs)("div",{className:"subtitulo-container",children:[(0,l.jsx)("h2",{className:"subtitulo-titulo",children:e.TITULO}),e.DETALLES.length>0?(0,l.jsx)("div",{className:"detalles-container",children:e.DETALLES.map((t=>(0,l.jsxs)("div",{className:"detalle",children:[(0,l.jsx)("h3",{className:"detalle-definicion",dangerouslySetInnerHTML:{__html:t.DEFINICION}}),t.IMAGENES&&t.IMAGENES.length>0?(0,l.jsx)(r.A,{title:e.TITULO,category:e.TITULO,description:t.DEFINICION,images:t.IMAGENES.map((e=>({src:e.URL_IMAGEN,caption:e.CAPTION||"Descripci\xf3n no proporcionada"})))}):(0,l.jsx)("p",{className:"no-imagenes",children:"No hay im\xe1genes disponibles."})]},t.ID_DETALLES)))}):(0,l.jsx)("p",{className:"no-detalles",children:"No hay detalles disponibles."}),(0,l.jsx)("button",{onClick:()=>(e=>{b?(x(e),C(!0)):_(!0)})(e),className:"edit-button",children:"Editar"})]},e.ID_SUBTITULO))),(0,l.jsx)(n(),{isOpen:j,onRequestClose:I,contentLabel:"Editar Subt\xedtulo",style:{overlay:{backgroundColor:"rgba(0, 0, 0, 0.75)",zIndex:15},content:{top:"54%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",width:"80%",maxWidth:"600px",backgroundColor:"var(--modal-bg-color)",color:"var(--modal-text-color)",border:"none"}},children:h&&(0,l.jsxs)("div",{children:[(0,l.jsxs)("h2",{children:["Editando: ",h.TITULO]}),(0,l.jsx)(c,{subtitulo:h,onSubmit:async e=>{try{await i.A.post("https://web-production-10154.up.railway.app/api/sugerir_definicion",e),I();const a=await i.A.get(`https://web-production-10154.up.railway.app/api/subtitulos_con_detalles?paginaId=${t}`);o(a.data)}catch(a){console.error("Error enviando la sugerencia:",a)}},onLogout:()=>{localStorage.removeItem("token_user"),N(!1),I()}}),(0,l.jsx)("button",{onClick:I,className:"modal-close-button",children:"Cerrar"})]})}),(0,l.jsx)(n(),{isOpen:v,onRequestClose:()=>{_(!1)},contentLabel:"Iniciar Sesi\xf3n",style:{overlay:{backgroundColor:"rgba(0, 0, 0, 0.75)",zIndex:15},content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",width:"100%",maxWidth:"800px",maxHeight:"80vh",overflowY:"auto",overflowX:"hidden",padding:"0px",backgroundColor:"transparent",border:"none"}},children:(0,l.jsx)(d,{onLogin:()=>{N(!0),_(!1)}})})]})}},3105:(e,t,a)=>{a.d(t,{A:()=>b});var s=a(6540),i=a(8478),o=a(3217);const n="modalGalleryColumn_eo2j",r="modalGallery_mRem",l="modalGalleryContent_oZ9k",c="modalGallerySlide_fqS3",d="modalGalleryClose_rBJ2",u="modalGalleryPrev_aMWY",m="modalGalleryNext_F8DK",g="modalGalleryNumberText_AAkb",p="modalGalleryCaptionContainer_ppu5",h="modalGalleryImage_JPRe",x="modalGalleryActive_jIsD";var j=a(4848);const C=e=>{let{images:t,slideIndex:a,setSlideIndex:i,closeModal:C}=e;if(!t||0===t.length)return null;const v=Math.max(0,Math.min(a,t.length-1)),_=e=>{let a=v+e;a>=t.length?a=0:a<0&&(a=t.length-1),i(a)},b=100/t.length+"%",N=e=>{const{resetTransform:t}=(0,o._5)();(0,s.useEffect)((()=>t()),[e])};return(0,j.jsxs)("div",{className:r,children:[(0,j.jsx)("span",{className:d,onClick:C,children:"\xd7"}),(0,j.jsxs)("div",{className:l,children:[(0,j.jsxs)("div",{className:c,children:[(0,j.jsx)("div",{className:g,children:t[v]?.caption||""}),(0,j.jsx)(o.GT,{children:e=>{let{resetTransform:a,...s}=e;return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(N,{validIndex:v}),(0,j.jsx)(o.WZ,{children:(0,j.jsx)("img",{className:h,src:t[v]?.src||"",alt:t[v]?.caption||"Image"})})]})}})]}),(0,j.jsx)("a",{className:u,onClick:()=>_(-1),children:"\u276e"}),(0,j.jsx)("a",{className:m,onClick:()=>_(1),children:"\u276f"}),t.map(((e,t)=>(0,j.jsx)("div",{className:n,style:{width:b},children:(0,j.jsx)("div",{className:`${p} ${a===t?x:""}`,onClick:()=>i(t),children:(0,j.jsx)("p",{id:"caption",children:e.caption})})},t)))]})]})},v={tissueCardContainer:"tissueCardContainer_UO2F",tissueCard:"tissueCard_ULi4",tissueCardImageContainer:"tissueCardImageContainer_c6Ql",tissueCardImage:"tissueCardImage_MUaT",tissueCardImageDescription:"tissueCardImageDescription_seqR",tissueCardBulletsContainer:"tissueCardBulletsContainer_Zn36",tissueCardBullet:"tissueCardBullet_OYAZ",tissueCardActiveBullet:"tissueCardActiveBullet_Eru_",tissueCardDotsContainer:"tissueCardDotsContainer_hhHf",tissueCardDot:"tissueCardDot_nrWu",tissueCardActiveDot:"tissueCardActiveDot_FjHw",tissueCardTitle:"tissueCardTitle_P2SM",tissueCardCategory:"tissueCardCategory_vC_N",tissueCardText:"tissueCardText_LmjI"},_=e=>{let{title:t,category:a,description:i,images:o}=e;if(!o||0===o.length)return null;const n=(e=>{const t=["Porta","x4","x10","x40"];return e.sort(((e,a)=>{const s=t.indexOf(e.caption),i=t.indexOf(a.caption);return(-1===s?t.length:s)-(-1===i?t.length:i)}))})(o),r=3===n.length?0:4===n.length?1:0,[l,c]=(0,s.useState)(r),[d,u]=(0,s.useState)(!1),[m,g]=(0,s.useState)(!1);return(0,s.useEffect)((()=>{const e=new Image;e.src=n[l].src,e.onload=()=>g(!0),e.onerror=()=>g(!1)}),[l,n]),(0,j.jsxs)("div",{className:v.tissueCardContainer,children:[(0,j.jsxs)("div",{className:v.tissueCard,children:[(0,j.jsx)("div",{className:v.tissueCardImageContainer,children:(0,j.jsx)("div",{className:v.tissueCardImage,style:{backgroundImage:m?`url(${n[l].src})`:"none"},onClick:()=>{u(!0)},children:m?(0,j.jsxs)("span",{className:v.tissueCardImageDescription,children:[n[l].caption," "]}):(0,j.jsx)("span",{className:v.tissueCardLoadingText,children:"Cargando..."})})}),(0,j.jsx)("div",{className:v.tissueCardBulletsContainer,children:n.map(((e,t)=>(0,j.jsx)("div",{className:`${v.tissueCardBullet} ${l===t?v.tissueCardActiveBullet:""}`,onClick:()=>c(t)},t)))})]}),d&&(0,j.jsx)(C,{images:n,slideIndex:l,setSlideIndex:c,closeModal:()=>{u(!1)}})]})},b=e=>{let{title:t,category:a,description:s,images:o}=e;return(0,j.jsx)(i.A,{children:()=>(0,j.jsx)(_,{title:t,category:a,description:s,images:o})})}}}]);