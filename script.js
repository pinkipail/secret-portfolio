window.addEventListener('load', function(){
    const mouse = document.querySelector('#light')
    document.addEventListener('mousemove', function(event){
       mouse.style.top = event.pageY - 250 + 'px'
       mouse.style.left = event.pageX - 250 + 'px'
               
    })
 })
 