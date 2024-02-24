//Bl1
function revealQuestionsBl1(){
    let reveals = document.querySelectorAll('.QuestionsTitle')
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
window.addEventListener('scroll',revealQuestionsBl1)
revealQuestionsBl1()
//Bl2
function revealQuestionsBl2(){
    let reveals = document.querySelectorAll('.QuestionsText')
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
window.addEventListener('scroll',revealQuestionsBl2)
revealQuestionsBl2()
//Bl3
function revealQuestionsBl3(){
    let reveals = document.querySelectorAll('.QuestionsCard1')
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
window.addEventListener('scroll',revealQuestionsBl3)
revealQuestionsBl3()
//Bl4
function revealQuestionsBl4(){
    let reveals = document.querySelectorAll('.QuestionsCard2')
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
window.addEventListener('scroll',revealQuestionsBl4)
revealQuestionsBl4()
//Bl5
function revealQuestionsBl5(){
    let reveals = document.querySelectorAll('.QuestionsCard3')
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
window.addEventListener('scroll',revealQuestionsBl5)
revealQuestionsBl5()