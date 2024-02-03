const adaptiveHomeBtn1 = document.querySelector('.adaptiveHomeBtn1')
adaptiveHomeBtn1.addEventListener('click', closeModal)

function closeModal(){
    class closeModals{
        constructor(){
            this.block = adaptiveHomeBlock
            this.block1 = adaptiveHomeBlockBlack
        }

        render1(){this.block.classList.remove('active')}

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
        }

        render1(){this.block.classList.remove('active')}

        render2(){this.block1.style.display = 'none'}

        run(){
            this.render1()
            this.render2()
        }
    }
    const closeBlock = new closeModals
    closeBlock.run()
}

