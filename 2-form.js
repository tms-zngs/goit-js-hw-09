import"./assets/styles-DCPVDJlU.js";const e={email:"",message:""},s="feedback-form-state",t=document.querySelector(".feedback-form"),r=t.querySelector(".email-input"),o=t.querySelector(".message-area"),l=localStorage.getItem(s);if(l){const a=JSON.parse(l);e.email=a.email,e.message=a.message,r.value=e.email,o.value=e.message}r.addEventListener("input",a=>{e.email=a.target.value,localStorage.setItem(s,JSON.stringify(e))});o.addEventListener("input",a=>{e.message=a.target.value,localStorage.setItem(s,JSON.stringify(e))});t.addEventListener("submit",a=>{if(a.preventDefault(),!e.email||!e.message){alert("Fill please all fields");return}console.log(a.target.elements.email.value),console.log(a.target.elements.message.value),t.reset(),e.email="",e.message="",localStorage.setItem(s,JSON.stringify(e))});console.log(e);
//# sourceMappingURL=2-form.js.map
