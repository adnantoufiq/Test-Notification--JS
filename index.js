const btn =document.getElementById("btn");
const container = document.getElementById("container");

btn.addEventListener("click", () =>{
    createNotification();
})


function createNotification(){
   const notf= document.createElement("div");
   notf.classList.add("notifycls");

   notf.innerText="this is so cold"
   container.appendChild(notf);

   setTimeout(()=>{
        notf.remove();
   }, 3000)
}