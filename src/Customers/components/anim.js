//Block3All4Min3
function revealCustomers1(){
    let reveals = document.querySelectorAll('.CustomersBlock1')
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
window.addEventListener('scroll', revealCustomers1)
revealCustomers1()
//Block3All4Min3
function revealCustomers2(){
    let reveals = document.querySelectorAll('.slider')
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
window.addEventListener('scroll', revealCustomers2)
revealCustomers2()