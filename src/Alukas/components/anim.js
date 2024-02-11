// title
function revealAlukas(){
    let reveals = document.querySelectorAll('.AlukasTitle')
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
window.addEventListener('scroll', revealAlukas)
revealAlukas()

// text
function revealAlukas1(){
    let reveals = document.querySelectorAll('.AlukasText')
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
window.addEventListener('scroll', revealAlukas1)
revealAlukas1()


//img
function revealAlukas2(){
    let reveals = document.querySelectorAll('.AlukasBlockImg')
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
window.addEventListener('scroll', revealAlukas2)
revealAlukas2()

//img1
function revealAlukas3(){
    let reveals = document.querySelectorAll('.AlukasBlockImg1')
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
window.addEventListener('scroll', revealAlukas3)
revealAlukas3()

// img2
function revealAlukas4(){
    let reveals = document.querySelectorAll('.AlukasBlockImg2')
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
window.addEventListener('scroll', revealAlukas4)
revealAlukas4()



//img3
function revealAlukas5(){
    let reveals = document.querySelectorAll('.AlukasBlockImg3')
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
window.addEventListener('scroll', revealAlukas5)
revealAlukas5()