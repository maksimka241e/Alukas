// первый ряд
function revealBuilder(){
    let reveals = document.querySelectorAll('.BuilderBlock1')
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
window.addEventListener('scroll', revealBuilder)
revealBuilder()

function revealBuilder1(){
    let reveals = document.querySelectorAll('.BuilderBlock2')
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
window.addEventListener('scroll', revealBuilder1)
revealBuilder1()