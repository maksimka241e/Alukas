//Powerful
function revealPowerful(){
    let reveals = document.querySelectorAll('.PowerfulBlockMin1')
    for(let i = 0; i < reveals.length;i++){
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 10;
        if(elementTop < windowHeight - elementVisible){
            reveals[i].classList.add('active')
        } else {
            reveals[i].classList.remove('active');
        }
    }
    
}
window.addEventListener('scroll', revealPowerful)
revealPowerful()
//Powerful1
function revealPowerful1(){
    let reveals = document.querySelectorAll('.PowerfulBlockMin2')
    for(let i = 0; i < reveals.length;i++){
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 10;
        if(elementTop < windowHeight - elementVisible){
            reveals[i].classList.add('active')
        } else {
            reveals[i].classList.remove('active');
        }
    }
    
}
window.addEventListener('scroll', revealPowerful1)
revealPowerful1()
//Powerful2
function revealPowerful2(){
    let reveals = document.querySelectorAll('.PowerfulBlock2')
    for(let i = 0; i < reveals.length;i++){
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 10;
        if(elementTop < windowHeight - elementVisible){
            reveals[i].classList.add('active')
        } else {
            reveals[i].classList.remove('active');
        }
    }
    
}
window.addEventListener('scroll', revealPowerful2)
revealPowerful2()
//Powerful3
function revealPowerful3(){
    let reveals = document.querySelectorAll('.BlockPowerfulImg1')
    for(let i = 0; i < reveals.length;i++){
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 10;
        if(elementTop < windowHeight - elementVisible){
            reveals[i].classList.add('active')
        } else {
            reveals[i].classList.remove('active');
        }
    }
    
}
window.addEventListener('scroll', revealPowerful3)
revealPowerful3()
//Powerful2
function revealPowerful4(){
    let reveals = document.querySelectorAll('.BlockPowerfulImg2')
    for(let i = 0; i < reveals.length;i++){
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 10;
        if(elementTop < windowHeight - elementVisible){
            reveals[i].classList.add('active')
        } else {
            reveals[i].classList.remove('active');
        }
    }
    
}
window.addEventListener('scroll', revealPowerful4)
revealPowerful4()