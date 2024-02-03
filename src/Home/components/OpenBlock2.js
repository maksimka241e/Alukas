function OpenBlock2(){
    const adaptiveHomeMin1Content1 = document.querySelector('.adaptiveHomeMin1Content1')
    const adaptivePagesMin1Content2 = document.querySelector('.adaptiveHomeMin1Content2')
    const adaptiveBlogMin1Content3 = document.querySelector('.adaptiveHomeMin1Content3')

    class closeAndOpen{
        constructor(){
            this.btn = adaptiveHomeBtn3
            this.btn1 = adaptiveHomeBtn4
            this.btn2 = adaptiveHomeMin1Title1
            this.btn3 = adaptiveHomeMin4Title4
            this.btn4 = adaptiveHomeMin5Title5
            this.content = adaptiveHomeBlockContent
            this.content1 = adaptiveHomeBlock2Content
            this.block = adaptiveHomeMin1Content1
            this.block1 = adaptivePagesMin1Content2
            this.block2 = adaptiveBlogMin1Content3
        }

        render1(){
            this.btn1.classList.remove('active')
            this.btn.classList.add('active')
        }

        render2(){
            this.content1.classList.remove('active')
            this.content.classList.add('active')
        }

        render3(){
            this.btn2.classList.remove('active')
            this.block.classList.remove('active')
        }

        render4(){
            this.btn3.classList.remove('active')
            this.block1.classList.remove('active')
        }

        render5(){
            this.btn4.classList.remove('active')
            this.block2.classList.remove('active')
        }

        run(){
            this.render1()
            this.render2()
            this.render3()
            this.render4()
            this.render5()
        }
    }
    const check = new closeAndOpen
    check.run()
}