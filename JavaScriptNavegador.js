document.addEventListener("DOMContentLoaded", ()=> {
const container = document.querySelector(".informacion")
const redesSociales = document.querySelector(".RRSS")
const navegador=document.getElementById("navegador")
const itemslidefondo1 = document.querySelector(".itemslidefondo1")
const itemslidefondo2 = document.querySelector(".itemslidefondo2")
const itemslidefondo3 = document.querySelector(".itemslidefondo3")
const arrowApear = document.querySelector(".arrow-up")
const home = document.querySelector(".home")

let cont=0;

gsap.from(".parrafo1", { opacity: 0, duration: 1, delay: 2.5, y: -10 })
gsap.from(".parrafo2", { opacity: 0, duration: 1, delay: 2, y: -10 })



const bar = document.querySelector(".bar")
let buttons = document.querySelector('.navegador')
let btn=buttons.querySelectorAll('.itemNavegador')

//  FUNCION PARA DESACTIVAR Y ACTIVAR EL NAVEGADOR
for (var i=0;i<btn.length;i++) {

     btn[i].addEventListener("click",function(){
          let current = document.getElementsByClassName('active')
          current[0].className=current[0].className.replace('active',"");
          this.className+=" active"
     })
 }

document.querySelector(".bar-responsive").addEventListener("click", (e)=>{
e.stopPropagation()
console.log(cont) 

if(cont%2==0){

  document.getElementById("informacion").style.transform=" rotate(-90deg)"
  document.querySelector(".bar-responsive").style.transition="0.4s";
//   container.style.display="flex"
 container.style.width="340px"
  container.style.transition="0.4s"
  container.style.zIndex="140"
 
 
  redesSociales.style.visibility="visible"
  redesSociales.style.width="340px"

   container.querySelector("h2").style.visibility="visible"
//    container.querySelector("h4").style.visibility="visible"
 
  var parrafo = container.getElementsByTagName("p")
 
   for (let i=0; i<parrafo.length;i++) {
      
   
        document.querySelectorAll("p")[i].style.visibility="visible"
        document.querySelectorAll("p")[i].style.width="340px"
}
}

else {
     
     document.getElementById("informacion").style.transform=" rotate(0deg)"
 container.style.width="0px"
//  container.style.display="none"
 
 container.style.transition="0.4s"
 container.style.zIndex="140"
 
 redesSociales.style.visibility="hidden"
 redesSociales.style.width="0px"

  container.querySelector("h2").style.visibility="hidden"
//   container.querySelector("h4").style.visibility="hidden"
 var parrafo = container.getElementsByTagName("p")

  for (let i=1; i<parrafo.length;i++) {
       document.querySelectorAll("p")[i].style.visibility="hidden"
       document.querySelectorAll("p")[i].style.width="0px"
}

}
     

cont++


})

navegador.addEventListener("click", ()=>{

     if (cont%2==0)
     {  
    navegador.style.transform=" rotate(90deg)" 
     document.querySelector(".contenedor-responsive").style.height="200px"
     document.querySelector(".contenedor-responsive").style.top="30px"
    


 

     }
     else{
    navegador.style.transform=" rotate(0deg)"
    document.querySelector(".contenedor-responsive").style.height="0px"
    document.querySelector(".contenedor-responsive").style.top="300px"
     }
     cont++
})

  document.querySelector(".pulsa").addEventListener("click", ()=>{
       console.log("click")
     document.querySelector(".contenedor-responsive").style.height="0px"
     document.querySelector(".contenedor-responsive").style.top="300px"
     navegador.style.transform=" rotate(0deg)"
     cont ++;

  })

  document.querySelector(".itemslide1").addEventListener("click",()=>{
     console.log("click")
  itemslidefondo1.classList.toggle("vista")
  })
  document.querySelector(".itemslide2").addEventListener("click",()=>{
     itemslidefondo2.classList.toggle("vista")
     })
     document.querySelector(".itemslide3").addEventListener("click",()=>{
          itemslidefondo3.classList.toggle("vista")
          })

          AOS.init();

 window.addEventListener('scroll', fixNav)

function fixNav()
 {
    if(window.scrollY > home.offsetHeight + 800) {
        arrowApear.classList.add('active')
        document.querySelector(".contenedorNR").style.top="-45px"
        document.querySelector(".contenedorNavegador").style.top="-35px"
    
        } 
    
        else {
        arrowApear.classList.remove('active')
        document.querySelector(".contenedorNR").style.top="0px"
        document.querySelector(".contenedorNavegador").style.top="0px"
      

        
 }
 if(window.scrollY > home.offsetHeight + 100)
{
document.querySelector(".itemNavegador").style.color="red"
}

}

})







  
  

 


































