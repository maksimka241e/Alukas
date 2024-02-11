const adaptiveHomeBtn1 = document.querySelector('.adaptiveHomeBtn1')
adaptiveHomeBtn1.addEventListener('click', closeModal)
let htmlA = document.querySelector('html')
function closeModal(){
    class closeModals{
        constructor(){
            this.block = adaptiveHomeBlock
            this.block1 = adaptiveHomeBlockBlack
            this.html = htmlA
        }

        render1(){
            this.block.classList.remove('active')
            document.body.style.overflowY = 'initial'
            this.html.style.overflowY = 'initial'
        }

        render2(){this.block1.style.display = 'none'}

        run(){
            this.render1()
            this.render2()
        }

    }
    const closeBlock = new closeModals
    closeBlock.run()
}

function closeModal1(){
    class closeModals{
        constructor(){
            this.block = adaptiveHomeBlock
            this.block1 = adaptiveHomeBlockBlack
            this.html = htmlA
        }

        render1(){
            this.block.classList.remove('active') 
            document.body.style.overflowY = 'initial'
            this.html.style.overflowY = 'initial'
        }

        render2(){this.block1.style.display = 'none'}

        run(){
            this.render1()
            this.render2()
        }
    }
    const closeBlock = new closeModals
    closeBlock.run()
}

