window.addEventListener('load', function(){
   mouseMove()
   toggleNightMpde()
 })
 

function mouseMove(){
   const mouse = document.querySelector('#light')
   document.addEventListener('mousemove', function(event){
      mouse.style.top = event.pageY - 250 + 'px'
      mouse.style.left = event.pageX - 250 + 'px'
              
   })
}
function toggleNightMpde(){
   const btnSwitch = document.querySelector('.switch')
   
   btnSwitch.addEventListener('click', ()=>{
      document.body.classList.toggle('night')
   })
}