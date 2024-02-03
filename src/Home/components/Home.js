// open
const adaptiveHomeBtn = document.querySelector('.adaptiveHomeBtn')
const adaptiveHomeBlock = document.querySelector('.adaptiveHomeBlock')
const adaptiveHomeBlockBlack = document.querySelector('.adaptiveHomeBlockBlack')
const adaptiveHomeBtn3 = document.querySelector('.adaptiveHomeBtn3')
const adaptiveHomeBtn4 = document.querySelector('.adaptiveHomeBtn4')
// Content
const adaptiveHomeBlockContent = document.querySelector('.adaptiveHomeBlockContent')
const adaptiveHomeBlock2Content = document.querySelector('.adaptiveHomeBlock2Content')
// HomeBlock
const adaptiveHomeMin1Title1 = document.querySelector('.adaptiveHomeMin1Title1')
// PagesBlock
const adaptiveHomeMin4Title4 = document.querySelector('.adaptiveHomeMin4Title4')
// BlogBlock
const adaptiveHomeMin5Title5 = document.querySelector('.adaptiveHomeMin5Title5')

class addEventClick{
   constructor(){
    this.btn = adaptiveHomeBtn
    this.btn1 = adaptiveHomeBtn3
    this.btn2 = adaptiveHomeBtn4
    this.blockColor = adaptiveHomeBlockBlack
    this.homeTitle = adaptiveHomeMin1Title1
    this.pagesTitle = adaptiveHomeMin4Title4
    this.blogTitle = adaptiveHomeMin5Title5
   }

   render1(){
    this.btn2.addEventListener('click', OpenBlock1)
   }

   render2(){
    this.btn1.addEventListener('click', OpenBlock2)
   }

   render3(){
    this.blockColor.addEventListener('click', closeModal1)
   }

   render4(){
    this.btn.addEventListener('click', OpenModal)
   }

   render5(){
    this.homeTitle.addEventListener('click', OpenBlockHome)
   }

   render6(){
    this.pagesTitle.addEventListener('click', OpenBlockPages)
   }

   render7(){
    this.blogTitle.addEventListener('click', OpenBlockBlog)
   }

   run(){
    this.render1()
    this.render2()
    this.render3()
    this.render4()
    this.render5()
    this.render6()
    this.render7()
   }
}
const ClickBtn = new addEventClick
ClickBtn.run()

function OpenModal(){
    adaptiveHomeBlock.classList.add('active')
    adaptiveHomeBlockBlack.style.display = 'block'
}

