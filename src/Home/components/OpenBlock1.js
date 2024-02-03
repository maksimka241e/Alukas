function OpenBlock1(){
    class closeAndOpen{
        constructor(){
            this.btn = adaptiveHomeBtn3
            this.btn1 = adaptiveHomeBtn4
            this.content = adaptiveHomeBlockContent
            this.content1 = adaptiveHomeBlock2Content
        }

        render1(){
            this.btn.classList.remove('active')
            this.btn1.classList.add('active')
        }

        render2(){
            this.content.classList.remove('active')
            this.content1.classList.add('active')
        }

        run(){
            this.render1()
            this.render2()
        }
    }
    const check = new closeAndOpen
    check.run()
}
