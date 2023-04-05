let small = document.getElementById('small');
let smallNav = document.getElementById('small-nav');
let bars = document.getElementById('bars');
let closeMark = document.getElementById('close');



bars.addEventListener('click',()=>{
    
    small.classList.add('block')
   smallNav.classList.toggle('open')
})
closeMark.addEventListener('click',()=>{
    small.classList.toggle('block')
    smallNav.classList.toggle('open')
})