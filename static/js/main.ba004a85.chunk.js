(this.webpackJsonpbugtracker=this.webpackJsonpbugtracker||[]).push([[0],{33:function(e,t,n){},34:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(15),s=n.n(a),o=(n(33),n(5)),i=n(28),l=(n(34),n(8)),u=n(3),d=n.n(u),j=n(6),b=n(4),p=n(1),h=Object(r.createContext)(),x=h.Provider,m=function(e){var t=e.children,n=Object(l.g)(),c=localStorage.getItem("token"),a=localStorage.getItem("expiresAt"),s=localStorage.getItem("userInfo"),o=Object(r.useState)({token:c,expiresAt:a,userInfo:s?JSON.parse(s):{}}),i=Object(b.a)(o,2),u=i[0],d=i[1],j=function(e){var t=e.token,n=e.expiresAt,r=e.userInfo;localStorage.setItem("token",t),localStorage.setItem("expiresAt",n),localStorage.setItem("userInfo",JSON.stringify(r)),d({token:t,expiresAt:n,userInfo:r})};return Object(p.jsx)(x,{value:{isAuthenticated:function(){return!(!u.token||!u.expiresAt)&&(console.log("expires at:",u.expiresAt),(new Date).getTime()/1e3<u.expiresAt)},authState:u,setAuthState:function(e){return j(e)},logout:function(){localStorage.removeItem("token"),localStorage.removeItem("userInfo"),localStorage.removeItem("expiresAt"),d({token:null,expiresAt:null,userInfo:{}}),n.push("/")}},children:t})},f={login:function(e,t){return O.apply(this,arguments)}};function O(){return(O=Object(j.a)(d.a.mark((function e(t,n){var r,c,a,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"http://127.0.0.1:8000/api-token-auth/",(r=new Headers).append("Content-Type","application/json"),c=new Request("http://127.0.0.1:8000/api-token-auth/",{method:"POST",headers:r,body:JSON.stringify({username:t,password:n}),mode:"cors"}),e.next=6,fetch(c);case 6:return a=e.sent,e.next=9,a.json();case 9:return s=e.sent,e.abrupt("return",s);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var g=function(){var e=Object(r.useState)(""),t=Object(b.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),s=Object(b.a)(a,2),o=s[0],i=s[1],u=Object(r.useContext)(h),x=Object(r.useState)(),m=Object(b.a)(x,2),O=m[0],g=m[1],v=Object(r.useState)(),w=Object(b.a)(v,2),y=w[0],k=w[1],N=Object(r.useState)(!1),S=Object(b.a)(N,2),C=S[0],T=S[1],I=Object(r.useState)(!1),E=Object(b.a)(I,2),A=E[0],z=E[1],L=function(){var e=Object(j.a)(d.a.mark((function e(t){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,T(!0),e.next=5,f.login(n,o);case 5:if(!(r=e.sent).non_field_errors){e.next=8;break}throw new Error(r.non_field_errors[0]);case 8:u.setAuthState(r),g(r.message),k(""),setTimeout((function(){z(!0)}),700),e.next=19;break;case 14:e.prev=14,e.t0=e.catch(1),T(!1),k(e.t0.message),g(null);case 19:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}(),P="border-2 rounded border-indigo-600 my-1 px-1 w-full",R=function(e,t){c(e),i("userpass")};return Object(p.jsx)("div",{className:"flex h-screen",children:Object(p.jsxs)("div",{className:"border-2 rounded-lg p-5 m-auto mt-1/4 w-1/4 min-w-max",children:[A&&Object(p.jsx)(l.a,{to:"/home"}),Object(p.jsx)("p",{className:"font-bold text-indigo-600",children:"Sign In with your credentials"}),Object(p.jsx)("em",{children:O}),Object(p.jsx)("em",{children:y}),Object(p.jsxs)("form",{onSubmit:L,children:[Object(p.jsx)("input",{className:P,type:"text",onChange:function(e){return c(e.target.value)},value:n,name:"username",placeholder:"Username",required:!0,autoFocus:!0})," ",Object(p.jsx)("br",{}),Object(p.jsx)("input",{className:P,type:"password",onChange:function(e){return i(e.target.value)},value:o,name:"password",placeholder:"Password",required:!0})," ",Object(p.jsx)("br",{}),Object(p.jsx)("div",{className:"text-right",children:Object(p.jsx)("button",{className:"bg-white text-indigo-600 font-bold px-4 py-1 rounded border-2 border-indigo-300 hover:shadow-md",type:"submit",disabled:C,children:"Login"})})]}),Object(p.jsx)("button",{onClick:function(e){return R("owner")},className:"border-2 border-red-500 rounded px-2 py-1 bg-red-200 text-red-500 font-bold block m-1 w-1/2",children:"Login as Owner"}),Object(p.jsx)("button",{onClick:function(){return R("developer")},className:"border-2 border-gray-500 rounded px-2 py-1 bg-gray-200 text-gray-500 font-bold block m-1 w-1/2",children:"Login as Developer"})]})})},v=n(12),w=function(e){return Object(p.jsxs)("div",{className:"BOARD-HEADER flex justify-between items-center py-2 text-gray-500",children:[Object(p.jsx)("p",{className:"text-gray-700 font-bold text-xs",onDragOver:function(e){e.stopPropagation()},children:e.heading}),Object(p.jsx)("svg",{onClick:function(){return e.setNewTicket(!0)},xmlns:"http://www.w3.org/2000/svg",className:"h-7 w-7 cursor-pointer rounded p-1 hover:bg-gray-200 hover:text-gray-700 delay-50 duration-300",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(p.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6v6m0 0v6m0-6h6m-6 0H6"})})]})},y=n(17),k=function(e){var t=Object(r.useState)(!1),n=Object(b.a)(t,2),c=n[0],a=n[1];return Object(p.jsx)(y.c,{droppableId:e.id,children:function(t){return Object(p.jsxs)("div",Object(o.a)(Object(o.a)({},t.droppableProps),{},{ref:t.innerRef,id:e.id,className:"BOARD ".concat(e.className),style:e.style,children:[Object(p.jsx)(w,{heading:e.heading,setNewTicket:a}),c?Object(p.jsx)(F,{setNewTicket:a,status:e.status,data:e.data,columns:e.columns,setData:e.setData,setColumns:e.setColumns}):null,e.columns[e.status].ticketIds.map((function(t,n){return e.data[t]&&Object(p.jsx)(z,{index:n,status:e.status,ticket:e.data[t],data:e.data,columns:e.columns,setData:e.setData,setColumns:e.setColumns},t)})),t.placeholder]}))}})},N=Object(r.createContext)(),S=N.Provider,C=function(e){var t=e.children,n=Object(r.useState)(!1),c=Object(b.a)(n,2),a=c[0],s=c[1];return Object(p.jsx)(S,{value:{sidebarOpen:a,setSidebarOpen:s,apiUrl:"http://127.0.0.1:8000"},children:t})},T=n(13),I=function(e){return Object(p.jsx)("div",{className:"".concat(e.showControls),children:Object(p.jsx)(T.a,{as:"div",className:"relative inline-block",children:function(t){var n=t.open;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{children:Object(p.jsx)(T.a.Button,{className:"border border-dashed border-gray-400 hover:bg-blue-300 hover:border-gray-700 hover:text-gray-700 rounded-lg inline-flex justify-center items-center h-8 w-8 text-sm font-medium text-".concat(e.menufg," bg-").concat(e.menubg," rounded-").concat(e.rounded," bg-opacity-20 hover:bg-opacity-30 ").concat(e.hover," focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"),children:e.icon})}),Object(p.jsx)(T.b,{show:n,as:r.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:Object(p.jsx)(T.a.Items,{static:!0,className:"absolute ".concat(e.alignMenu,"-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"),children:e.menuItems.map((function(e,t){return Object(p.jsx)("div",{className:"px-1 py-1 ",children:e.map((function(e,t){return Object(p.jsx)(T.a.Item,{children:function(t){var n=t.active;return Object(p.jsx)("button",{className:"".concat(n?"bg-gray-300":"text-".concat(e.textfg?e.textfg:"gray-900")," group flex rounded-md items-center w-full px-2 py-2 text-sm"),onClick:e.onClick,children:e.title})}},t)}))},t)}))})})]})}})})},E=function(e){var t=Object(r.useContext)(N),n=[[{title:"Edit",onClick:function(){e.setEditable(!0)}},{title:"View",onClick:null}],[{title:"Delete",textfg:"red-500",onClick:function(){function n(){return(n=Object(j.a)(d.a.mark((function n(){var r,c,a,s,i;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(t.apiUrl,"/tickets/").concat(e.ticket_id,"/delete/"),(c=new Headers).append("Content-Type","application/json"),c.append("Authorization","Token "+localStorage.getItem("token")),a=new Request(r,{method:"DELETE",headers:c,mode:"cors"}),n.next=7,fetch(a);case 7:delete(s=Object(o.a)({},e.data))[e.ticket_id.toString()],e.setData(s),(i=e.columns[e.status].ticketIds).splice(e.index,1),e.setColumns(Object(o.a)(Object(o.a)({},e.columns),{},Object(v.a)({},e.status,Object(o.a)(Object(o.a)({},e.columns[e.status]),{},{ticketIds:i}))));case 13:case"end":return n.stop()}}),n)})))).apply(this,arguments)}console.log(e.ticket_id),function(){n.apply(this,arguments)}()}}]];return Object(p.jsx)(I,{icon:A,menubg:"white",menufg:"gray-400",menuItems:n,alignMenu:"left",showControls:e.showControls})},A=function(){return Object(p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",viewBox:"0 0 20 20",fill:"currentColor",children:Object(p.jsx)("path",{d:"M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"})})},z=function(e){var t=Object(r.useContext)(N),n=Object(r.useState)("hidden"),c=Object(b.a)(n,2),a=c[0],s=c[1],i=Object(r.useState)(!1),l=Object(b.a)(i,2),u=l[0],h=l[1],x=Object(r.useRef)(),m=function(n){if("Enter"===n.code&&u){function r(){return(r=Object(j.a)(d.a.mark((function n(){var r,c,a,s;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(t.apiUrl,"/tickets/").concat(e.ticket.id,"/update/"),(c=new Headers).append("Content-Type","application/json"),c.append("Authorization","Token "+localStorage.getItem("token")),a=new Request(r,{method:"PATCH",headers:c,body:JSON.stringify({title:x.current.innerText}),mode:"cors"}),n.next=7,fetch(a);case 7:(s=Object(o.a)({},e.data))[e.ticket.id.toString()].title=x.current.innerText,e.setData(s);case 10:case"end":return n.stop()}}),n)})))).apply(this,arguments)}console.log(x.current.innerText),console.log(e.ticket.id),function(){r.apply(this,arguments)}(),h(!1)}};return Object(r.useEffect)((function(){var e=x.current;return e.addEventListener("keydown",m),function(){e.removeEventListener("keydown",m)}})),Object(p.jsx)(y.b,{draggableId:e.ticket.id.toString(),index:e.index,children:function(t){return Object(p.jsxs)("div",Object(o.a)(Object(o.a)(Object(o.a)({},t.draggableProps),t.dragHandleProps),{},{ref:t.innerRef,className:"TICKET p-3 w-full bg-white shadow-md rounded-lg mb-2 border text-gray-800 hover:shadow-lg hover:border-gray-300 flex flex-col",onMouseOver:function(){return s("inline")},onMouseOut:function(){s("hidden")},children:[e.ticket.id," \xa0",Object(p.jsx)("div",{ref:x,contentEditable:u,suppressContentEditableWarning:"true",className:u?"cursor-text border":"",children:e.ticket.title}),u&&Object(p.jsx)("div",{className:"text-gray-300 text-xs",children:"Click on the text above to edit; Press ENTER to save"}),Object(p.jsxs)("div",{className:"flex mt-4 h-8 items-center",children:[Object(p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8 border border-dashed border-gray-400 rounded-lg p-1 text-gray-400 hover:bg-blue-100 hover:text-gray-700 hover:border-gray-700 mr-1 ".concat(a),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(p.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"})}),Object(p.jsx)(E,Object(o.a)({setEditable:h,ticket_id:e.ticket.id,showControls:a},e))]})]}))}})},L=n(7),P=n(23),R=function(e){return Object(p.jsx)("div",{className:"bg-indigo-900 h-".concat(e.size," w-").concat(e.size," rounded-xl flex filter drop-shadow-lg my-auto"),children:Object(p.jsx)("div",{className:"m-auto",children:Object(p.jsx)(P.a,{className:"h-".concat(e.iconsize," w-").concat(e.iconsize," text-indigo-100")})})})},M=function(e){return Object(p.jsx)(L.b,{to:e.to,children:Object(p.jsxs)("div",{className:"p-4 pt-5 h-48 max-w-min flex flex-col justify-start items-center rounded-3xl cursor-pointer hover:bg-purple-50 hover:pt-4 delay-50 duration-300",children:[Object(p.jsx)("div",{children:Object(p.jsx)(R,{size:e.size,iconsize:e.iconsize})}),Object(p.jsx)("div",{className:"text-gray-700 tracking-wider uppercase text-xs font-bold mt-2",children:e.title})]})})},D=function(){return Object(p.jsx)(L.b,{to:"/new/project",children:Object(p.jsxs)("div",{className:"p-4 pt-5 h-48 max-w-min flex flex-col justify-start items-center rounded-3xl cursor-pointer hover:bg-purple-50 hover:pt-4 delay-50 duration-300",children:[Object(p.jsx)("div",{className:"h-24 w-24 rounded-2xl flex border-2 border-gray-400 border-dashed",children:Object(p.jsx)("div",{className:"m-auto",children:Object(p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-gray-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(p.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6v6m0 0v6m0-6h6m-6 0H6"})})})}),Object(p.jsx)("div",{className:"text-gray-700 tracking-wider uppercase text-xs font-bold mt-2",children:"New Project"})]})})},H=function(){return Object(p.jsxs)("div",{className:"TOOLBAR border-t px-5 py-2 flex justify-between items-center text-xs min-w-min",children:[Object(p.jsx)("div",{className:"text-gray-500",children:"Created on ..."}),Object(p.jsxs)("div",{className:"flex text-gray-500 font-bold",children:[Object(p.jsxs)("div",{className:"px-2 flex cursor-pointer hover:bg-gray-100 rounded p-1 delay-50 duration-300",children:[Object(p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 my-auto pr-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(p.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"})}),"Filter"]}),Object(p.jsxs)("div",{className:"px-2 flex cursor-pointer hover:bg-gray-100 rounded p-1 delay-50 duration-300",children:[Object(p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 my-auto pr-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(p.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"})}),"Sort"]})]})]})},F=function(e){var t=Object(r.useContext)(N),n=Object(r.useRef)(),c=Object(l.h)().projectSlug,a=Object(r.useState)(""),s=Object(b.a)(a,2),i=s[0],u=s[1],h=function(t){n.current.contains(t.target)||e.setNewTicket(!1)};return Object(r.useEffect)((function(){return document.addEventListener("mousedown",h),function(){document.removeEventListener("mousedown",h)}})),Object(p.jsx)("div",{ref:n,children:Object(p.jsx)("div",{className:"TICKET p-3 w-full bg-white shadow-md rounded-lg mb-2 border text-gray-800 hover:shadow-lg hover:border-gray-300 flex flex-col",children:Object(p.jsxs)("form",{onSubmit:function(n){function r(){return(r=Object(j.a)(d.a.mark((function n(){var r,a,s,l,u;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(t.apiUrl,"/tickets/create/"),(a=new Headers).append("Content-Type","application/json"),a.append("Authorization","Token "+localStorage.getItem("token")),s=new Request(r,{method:"POST",headers:a,body:JSON.stringify({title:i,project:c,status:e.status,username:JSON.parse(localStorage.getItem("userInfo")).username}),mode:"cors"}),n.next=7,fetch(s);case 7:return l=n.sent,n.next=10,l.json();case 10:u=n.sent,e.setNewTicket(!1),console.log(Object(o.a)(Object(o.a)({},e.columns[e.status]),{},{ticketIds:u.order})),console.log(Object(o.a)(Object(o.a)({},e.data),{},Object(v.a)({},u.ticket.id,u.ticket))),e.setColumns(Object(o.a)(Object(o.a)({},e.columns),{},Object(v.a)({},e.status,Object(o.a)(Object(o.a)({},e.columns[e.status]),{},{ticketIds:u.order})))),e.setData(Object(o.a)(Object(o.a)({},e.data),{},Object(v.a)({},u.ticket.id,u.ticket)));case 16:case"end":return n.stop()}}),n)})))).apply(this,arguments)}n.preventDefault(),function(){r.apply(this,arguments)}()},children:[Object(p.jsx)("input",{type:"text",className:"p-1 w-full",autoFocus:!0,required:!0,value:i,onChange:function(e){return u(e.target.value)}}),Object(p.jsx)("div",{className:"flex mt-4 h-8 justify-end",children:Object(p.jsx)("button",{type:"submit",className:"rounded bg-indigo-500 text-white px-2 hover:shadow-lg",children:"Save"})})]})})})},q=function(e){return Object(p.jsx)("div",{className:"",children:Object(p.jsx)(T.a,{as:"div",className:"relative inline-block",children:function(t){var n=t.open;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{children:Object(p.jsx)(T.a.Button,{className:"inline-flex justify-center h-7 w-7 text-sm font-medium text-".concat(e.menufg," bg-").concat(e.menubg," rounded-").concat(e.rounded," bg-opacity-20 hover:bg-opacity-30 ").concat(e.hover," focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"),children:e.icon})}),Object(p.jsx)(T.b,{show:n,as:r.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:Object(p.jsx)(T.a.Items,{static:!0,className:"absolute ".concat(e.alignMenu,"-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"),children:e.menuItems.map((function(e,t){return Object(p.jsx)("div",{className:"px-1 py-1 ",children:e.map((function(e,t){return Object(p.jsx)(T.a.Item,{children:function(t){var n=t.active;return Object(p.jsx)("button",{className:"".concat(n?"bg-gray-300":"text-".concat(e.textfg?e.textfg:"gray-900")," group flex rounded-md items-center w-full px-2 py-2 text-sm"),onClick:e.onClick,children:e.title})}},t)}))},t)}))})})]})}})})},B=function(){var e=Object(l.g)(),t=Object(r.useContext)(h),n=function(n){n.preventDefault(),t.logout(),e.push("/")},c=[[{title:"Settings",onClick:null}],[{title:"Logout",onClick:n}]];return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(q,{icon:U,menubg:"black",menufg:"white",rounded:"full",menuItems:c,alignMenu:"right",handleLogout:n})})},U=function(){return Object(p.jsx)(P.b,{className:"h-6 w-6 m-auto"})},J=function(){var e=Object(l.g)(),t=Object(r.useContext)(h);return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(q,{icon:W,menubg:"white",menufg:"gray-500",rounded:"lg",hover:"hover:bg-gray-300",menuItems:[[{title:"Edit project details"}],[{title:"Delete project",textfg:"red-500"}]],alignMenu:"left",handleLogout:function(n){n.preventDefault(),t.logout(),e.push("/")}})})},W=function(){return Object(p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(p.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})},_=function(e){return void 0!==e.projectSlug?Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"flex flex-col pl-4 mt-auto",children:[Object(p.jsxs)("div",{className:"flex",children:[Object(p.jsx)("div",{className:"font-bold text-lg text-gray-900 pr-2",children:e.title}),Object(p.jsx)(J,{})]}),Object(p.jsxs)("div",{className:"flex",children:[Object(p.jsx)("div",{className:"pb-1 border-b-2 border-indigo-500 cursor-pointer text-indigo-500 font-medium",children:Object(p.jsx)(L.b,{to:"/myprojects/".concat(e.projectSlug),children:"Board"})}),Object(p.jsx)("div",{className:"pl-5",children:Object(p.jsx)("div",{className:"pb-1 border-b-2 border-white hover:border-gray-500 cursor-pointer text-gray-500 font-medium hover:text-gray-900",children:"Messages"})})]})]})}):Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"my-auto pl-4 font-bold text-gray-900 text-lg",children:e.title})})},G=function(e){var t=Object(l.i)().path;return Object(p.jsxs)("div",{className:"TOPBAR h-16 w-full flex items-center justify-between min-w-min",children:["/home"!==t&&Object(p.jsx)("div",{className:"h-16 w-16 flex",children:Object(p.jsx)("div",{className:"m-auto p-2 cursor-pointer rounded-lg delay-50 duration-300 hover:bg-gray-200 text-gray-400 hover:text-gray-500",children:Object(p.jsx)(L.b,{to:"/home",children:Object(p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(p.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})})})})}),Object(p.jsxs)("div",{className:"h-16 flex flex-1 ".concat("/home"===t&&"ml-2"),children:[Object(p.jsx)(R,{size:12,iconsize:8}),Object(p.jsx)(_,Object(o.a)({},e))]}),Object(p.jsx)("div",{className:"my-auto mr-4",children:Object(p.jsx)(B,{})})]})},V=function(){var e=Object(l.h)().projectSlug,t=Object(r.useState)({}),n=Object(b.a)(t,2),c=n[0],a=n[1],s=Object(r.useState)({}),i=Object(b.a)(s,2),u=i[0],h=i[1],x=Object(r.useState)(!0),m=Object(b.a)(x,2),f=m[0],O=m[1],g=Object(r.useContext)(N),w=function(){var t=Object(j.a)(d.a.mark((function t(n,r,c,a){var s,o,i,l,u;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s="".concat(g.apiUrl,"/move/from/").concat(n,"/").concat(r,"/to/").concat(c,"/").concat(a,"/"),(o=new Headers).append("Content-Type","application/json"),o.append("Authorization","Token "+localStorage.getItem("token")),i=new Request(s,{method:"PATCH",headers:o,body:JSON.stringify({project:e}),mode:"cors"}),t.next=7,fetch(i);case 7:if(l=t.sent,u={},!l.ok){t.next=15;break}return t.next=12,l.json();case 12:u=t.sent,t.next=16;break;case 15:u={response:"Invalid"};case 16:return t.abrupt("return",u);case 17:case"end":return t.stop()}}),t)})));return function(e,n,r,c){return t.apply(this,arguments)}}();Object(r.useEffect)((function(){function t(){return(t=Object(j.a)(d.a.mark((function t(){var n,r,c,s,o;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(g.apiUrl,"/tickets/in/").concat(e),(r=new Headers).append("Content-Type","application/json"),r.append("Authorization","Token "+localStorage.getItem("token")),c=new Request(n,{method:"GET",headers:r,mode:"cors"}),t.next=7,fetch(c);case 7:return s=t.sent,t.next=10,s.json();case 10:o=t.sent,a(o.tickets),h(o.columns),O(!1);case 14:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]);return Object(p.jsxs)("div",{className:"PROJECT flex flex-col w-full",children:[Object(p.jsx)(G,{title:e,projectSlug:e}),Object(p.jsx)(H,{}),Object(p.jsx)(y.a,{onDragEnd:function(e){var t=e.source,n=e.destination;if(n&&(n.droppableId!==t.droppableId||n.index!==t.index)){var r=u[t.droppableId],c=u[n.droppableId],a={};if(r===c){var s=Array.from(r.ticketIds),i=s.splice(t.index,1),l=Object(b.a)(i,1)[0];s.splice(n.index,0,l);var d=Object(o.a)(Object(o.a)({},r),{},{ticketIds:s});a=Object(o.a)(Object(o.a)({},u),{},Object(v.a)({},d.id,d))}else{var j,p=Array.from(r.ticketIds),x=p.splice(t.index,1),m=Object(b.a)(x,1)[0],f=Object(o.a)(Object(o.a)({},r),{},{ticketIds:p}),O=Array.from(c.ticketIds);O.splice(n.index,0,m);var g=Object(o.a)(Object(o.a)({},c),{},{ticketIds:O});a=Object(o.a)(Object(o.a)({},u),{},(j={},Object(v.a)(j,f.id,f),Object(v.a)(j,g.id,g),j))}w(t.droppableId,t.index,n.droppableId,n.index),h(a)}},children:Object(p.jsx)("div",{id:"boards",className:"PROJECT flex bg-gray-50 shadow-inner overflow-x-auto",style:{height:"calc(100vh - 106px)"},children:f?null:["IB","EM","IP","TS","CO"].map((function(e,t){return Object(p.jsx)(k,{id:e,heading:u[e].title,data:c,columns:u,setData:a,setColumns:h,status:e,className:"flex flex-col p-1 w-1/5"},t)}))})})]})},K=n(20),Q=function(){var e=Object(r.useState)(null),t=Object(b.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(null),s=Object(b.a)(a,2),o=s[0],i=s[1],l=Object(r.useState)(null),u=Object(b.a)(l,2),h=u[0],x=u[1],m=Object(r.useState)(!0),f=Object(b.a)(m,2),O=f[0],g=f[1],v=Object(r.useState)(null),w=Object(b.a)(v,2),y=w[0],k=w[1],N=Object(r.useState)(!0),S=Object(b.a)(N,2),C=S[0],T=S[1],I=Object(r.useState)(null),E=Object(b.a)(I,2),A=E[0],z=E[1],L=Object(r.useState)(!0),P=Object(b.a)(L,2),R=P[0],M=P[1];Object(r.useEffect)((function(){function e(){return(e=Object(j.a)(d.a.mark((function e(){var t,n,r,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"http://127.0.0.1:8000/owned/projects/",(t=new Headers).append("Content-Type","application/json"),t.append("Authorization","Token "+localStorage.getItem("token")),n=new Request("http://127.0.0.1:8000/owned/projects/",{method:"GET",headers:t,mode:"cors"}),e.next=7,fetch(n);case 7:return r=e.sent,e.next=10,r.json();case 10:c=e.sent,x(c),g(!1);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(r.useEffect)((function(){function e(){return(e=Object(j.a)(d.a.mark((function e(){var t,n,r,c,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="http://127.0.0.1:8000/users/".concat(o,"/"),(n=new Headers).append("Content-Type","application/json"),n.append("Authorization","Token "+localStorage.getItem("token")),r=new Request(t,{method:"GET",headers:n,mode:"cors"}),e.next=7,fetch(r);case 7:return c=e.sent,e.next=10,c.json();case 10:a=e.sent,k(a),T(!1);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}o&&function(){e.apply(this,arguments)}()}),[o]),Object(r.useEffect)((function(){function e(){return(e=Object(j.a)(d.a.mark((function e(){var t,n,r,c,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="http://127.0.0.1:8000/teamusers/".concat(o,"/"),(n=new Headers).append("Content-Type","application/json"),n.append("Authorization","Token "+localStorage.getItem("token")),r=new Request(t,{method:"GET",headers:n,mode:"cors"}),e.next=7,fetch(r);case 7:return c=e.sent,e.next=10,c.json();case 10:a=e.sent,z(a),M(!1);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}o&&function(){e.apply(this,arguments)}()}),[o]);var D=function(e){c(e.target.value)},H=function(){var e=Object(j.a)(d.a.mark((function e(){var t,r,a,s,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return");case 2:return t="http://127.0.0.1:8000/add/".concat(n,"/to/team/").concat(o,"/"),(r=new Headers).append("Content-Type","application/json"),r.append("Authorization","Token "+localStorage.getItem("token")),a=new Request(t,{method:"PUT",headers:r,mode:"cors"}),e.next=9,fetch(a);case 9:return s=e.sent,e.next=12,s.json();case 12:"OK"===(i=e.sent).response&&(z([].concat(Object(K.a)(A),[{id:i.id,username:n}])),k(y.filter((function(e){return e.id!==i.id})))),c(null);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(j.a)(d.a.mark((function e(){var t,r,a,s,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return");case 2:return t="http://127.0.0.1:8000/remove/".concat(n,"/from/team/").concat(o,"/"),(r=new Headers).append("Content-Type","application/json"),r.append("Authorization","Token "+localStorage.getItem("token")),a=new Request(t,{method:"PUT",headers:r,mode:"cors"}),e.next=9,fetch(a);case 9:return s=e.sent,e.next=12,s.json();case 12:"OK"===(i=e.sent).response&&(k([].concat(Object(K.a)(y),[{id:i.id,username:n}])),z(A.filter((function(e){return e.id!==i.id})))),c(null);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q="border border-gray-500 px-4 rounded font-bold shadow-md m-1",B="border border-gray-500";return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(G,{}),Object(p.jsxs)("div",{className:"px-4",children:[Object(p.jsx)("p",{className:"font-bold text-gray-700 text-lg",children:"User Management"}),Object(p.jsxs)("div",{className:"flex content-between",children:[Object(p.jsxs)("div",{className:"flex-initial",children:[Object(p.jsx)("p",{className:"font-bold text-gray-700",children:"Projects"}),Object(p.jsx)("select",{className:B,name:"projects",id:"projects",size:"5",style:{width:200},children:O?Object(p.jsx)("option",{children:"...loading"}):h.map((function(e,t){return Object(p.jsx)("option",{onClick:function(){return i(e.slug)},value:e.slug,children:e.title},t)}))})]}),Object(p.jsxs)("div",{className:"flex flex-1 justify-center ml-2 px-2",children:[Object(p.jsxs)("div",{className:"flex-initial",children:[Object(p.jsx)("p",{className:"font-bold text-gray-700",children:"Users Available"}),Object(p.jsx)("select",{className:B,onClick:D,name:"users",id:"users",size:"5",style:{width:200},children:C?Object(p.jsx)("option",{children:"Please select a project"}):y.map((function(e,t){return Object(p.jsx)("option",{value:e.username,children:e.username},t)}))})]}),Object(p.jsxs)("div",{className:"flex flex-col flex-none justify-center",children:[Object(p.jsx)("button",{className:q,onClick:H,children:">"}),Object(p.jsx)("button",{className:q,onClick:F,children:"<"})]}),Object(p.jsxs)("div",{className:"flex-initial",children:[Object(p.jsx)("p",{className:"font-bold text-gray-700",children:"Users in Project"}),Object(p.jsx)("select",{className:B,onClick:D,name:"team",id:"team",size:"5",style:{width:200},children:R?Object(p.jsx)("option",{children:"Please select a project"}):A.map((function(e,t){return Object(p.jsx)("option",{value:e.username,children:e.username},t)}))})]})]})]})]})]})},X=function(){var e=Object(r.useState)(null),t=Object(b.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(null),s=Object(b.a)(a,2),o=s[0],i=s[1],l=Object(r.useState)(!0),u=Object(b.a)(l,2),h=u[0],x=u[1],m=Object(r.useState)(null),f=Object(b.a)(m,2),O=f[0],g=f[1],v=Object(r.useState)(!0),w=Object(b.a)(v,2),y=w[0],k=w[1];Object(r.useEffect)((function(){function e(){return(e=Object(j.a)(d.a.mark((function e(){var t,n,r,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"http://127.0.0.1:8000/owned/projects/",(t=new Headers).append("Content-Type","application/json"),t.append("Authorization","Token "+localStorage.getItem("token")),n=new Request("http://127.0.0.1:8000/owned/projects/",{method:"GET",headers:t,mode:"cors"}),e.next=7,fetch(n);case 7:return r=e.sent,e.next=10,r.json();case 10:c=e.sent,i(c),x(!1);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(r.useEffect)((function(){function e(){return(e=Object(j.a)(d.a.mark((function e(){var t,r,c,a,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="http://127.0.0.1:8000/teamusers/".concat(n,"/"),(r=new Headers).append("Content-Type","application/json"),r.append("Authorization","Token "+localStorage.getItem("token")),c=new Request(t,{method:"GET",headers:r,mode:"cors"}),e.next=7,fetch(c);case 7:return a=e.sent,e.next=10,a.json();case 10:s=e.sent,g(s),k(!1);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n&&function(){e.apply(this,arguments)}()}),[n]);var N=function(){var e=Object(j.a)(d.a.mark((function e(t){var r,c,a,s,o,i,l,u,j;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.target.value,c="http://127.0.0.1:8000/toggle/".concat(r,"/to/").concat(n,"/as/admin/"),(a=new Headers).append("Content-Type","application/json"),a.append("Authorization","Token "+localStorage.getItem("token")),s=new Request(c,{method:"POST",headers:a,mode:"cors"}),e.next=8,fetch(s);case 8:return o=e.sent,e.next=11,o.json();case 11:i=e.sent,l=O.findIndex((function(e){return e.username===r})),u=O.find((function(e){return e.username===r})),"OK"===i.response&&(u.isAdmin=!u.isAdmin,(j=Object(K.a)(O))[l]=u),g(j);case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(G,{}),Object(p.jsxs)("div",{className:"px-4",children:[Object(p.jsx)("p",{className:"font-bold text-gray-700 text-lg",children:"Role Management"}),Object(p.jsxs)("div",{className:"flex",children:[Object(p.jsxs)("div",{className:"flex-1",children:[Object(p.jsx)("p",{className:"font-bold text-gray-700",children:"Projects"}),Object(p.jsx)("select",{className:"border border-gray-500",name:"projects",id:"projects",size:"5",style:{width:200},children:h?Object(p.jsx)("option",{children:"...loading"}):o.map((function(e,t){return Object(p.jsx)("option",{onClick:function(){return c(e.slug)},value:e.slug,children:e.title},t)}))})]}),Object(p.jsxs)("div",{className:"flex-1",children:[n?Object(p.jsx)("p",{className:"font-bold text-gray-700",children:"Users in this project"}):Object(p.jsx)("p",{children:"Please select a project"}),!y&&O.map((function(e,t){return Object(p.jsx)("div",{children:Object(p.jsxs)("label",{children:[Object(p.jsx)("input",{type:"checkbox",name:e.username,value:e.username,checked:e.isAdmin,onChange:N})," \xa0",e.username]})},t)}))]})]})]})]})},Y=function(){var e=Object(r.useState)(null),t=Object(b.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(!0),s=Object(b.a)(a,2),o=s[0],i=s[1],l=Object(r.useContext)(N);return Object(r.useEffect)((function(){function e(){return(e=Object(j.a)(d.a.mark((function e(){var t,n,r,a,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(l.apiUrl,"/projects"),(n=new Headers).append("Content-Type","application/json"),n.append("Authorization","Token "+localStorage.getItem("token")),r=new Request(t,{method:"GET",headers:n,mode:"cors"}),e.next=7,fetch(r);case 7:return a=e.sent,e.next=10,a.json();case 10:s=e.sent,c(s),i(!1);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(p.jsxs)("div",{className:"flex flex-col h-screen",children:[Object(p.jsx)(G,{title:"Home"}),Object(p.jsxs)("div",{className:"m-auto",children:[Object(p.jsx)("div",{className:"text-gray-700 font-bold p-4 border-b border-gray-500 mx-10 mb-4",children:"My Projects"}),Object(p.jsxs)("div",{className:"flex mx-10 flex-wrap",children:[o?Object(p.jsx)("div",{children:"loading..."}):n.map((function(e,t){return Object(p.jsx)(M,{to:"/myprojects/".concat(e.slug),title:e.title,size:24,iconsize:14},t)})),Object(p.jsx)(D,{})]})]})]})},Z=function(){var e=Object(r.useState)(""),t=Object(b.a)(e,2),n=t[0],c=t[1],a=Object(l.g)(),s=Object(r.useContext)(N);Object(r.useEffect)((function(){document.addEventListener("keydown",(function(e){"Escape"===e.code&&a.push("/home")}))}));return Object(p.jsx)("div",{className:"flex h-screen",children:Object(p.jsxs)("form",{className:"m-auto bg-indigo-500 p-10 rounded-lg w-1/4",onSubmit:function(e){function t(){return(t=Object(j.a)(d.a.mark((function e(){var t,r,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(s.apiUrl,"/projects/"),(r=new Headers).append("Content-Type","application/json"),r.append("Authorization","Token "+localStorage.getItem("token")),c=new Request(t,{method:"POST",headers:r,body:JSON.stringify({title:n}),mode:"cors"}),e.next=7,fetch(c);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e.preventDefault(),function(){t.apply(this,arguments)}(),a.push("/home")},children:[Object(p.jsx)(L.b,{to:"/home",className:"float-right font-xs",children:Object(p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:Object(p.jsx)("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})}),Object(p.jsx)("div",{className:"text-white font-bold tracking-wider text-lg mb-4",children:"New Project"}),Object(p.jsx)("div",{className:"text-indigo text-xs mb-1",children:"Project Name"}),Object(p.jsx)("input",{className:"opacity-30 border-b border-transparent focus:outline-none focus:border-black focus:opacity-70 p-1 w-full",type:"text",name:"project",onChange:function(e){return c(e.target.value)},value:n,autoFocus:!0}),Object(p.jsx)("button",{className:"mt-4 bg-red-500 text-white p-1 w-full rounded focus:outline-none hover:bg-red-600 disabled:bg-indigo-300 disabled:text-gray-500",disabled:""===n,children:"Create Project"})]})})},$=function(e){var t=e.children,n=Object(i.a)(e,["children"]),c=Object(r.useContext)(h);return Object(p.jsx)(l.b,Object(o.a)(Object(o.a)({},n),{},{render:function(){return c.isAuthenticated()?t:Object(p.jsx)(l.a,{to:"/"})}}))},ee=function(){return Object(p.jsxs)(l.d,{children:[Object(p.jsx)(l.b,{exact:!0,path:"/",children:Object(p.jsx)(g,{})}),Object(p.jsx)($,{path:"/home",children:Object(p.jsx)(Y,{})}),Object(p.jsx)($,{path:"/new/project",children:Object(p.jsx)(Z,{})}),Object(p.jsx)($,{path:"/myprojects/:projectSlug",children:Object(p.jsx)(V,{})}),Object(p.jsx)($,{path:"/usermgt",children:Object(p.jsx)(Q,{})}),Object(p.jsx)($,{path:"/rolemgt",children:Object(p.jsx)(X,{})})]})};var te=function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(ee,{})})},ne=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(L.a,{basename:"/bugtracker",children:Object(p.jsx)(m,{children:Object(p.jsx)(C,{children:Object(p.jsx)(te,{})})})})}),document.getElementById("root")),ne()}},[[42,1,2]]]);
//# sourceMappingURL=main.ba004a85.chunk.js.map