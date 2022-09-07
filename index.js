var getBtn = document.querySelector('button')
var bgcl =document.body
var getTT = document.querySelector('.title')


getBtn.addEventListener('click' , function() {
    getBtn.classList.toggle('light')
    if(bgcl.style.background == "white") {
        bgcl.style.background = 'black'
        getTT.style.color ='white'
    }
    else {
        bgcl.style.background = 'white'
        getTT.style.color ='gray'
    }
    
})