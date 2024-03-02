function OpenBlockPages(){
    const adaptiveHomeMin1Content2 = document.querySelector('.adaptiveHomeMin1Content2')
    const adaptiveHomeMin4Title4Img  = document.querySelector('.adaptiveHomeMin4Title4Img')
    
    class openBlockHome{
        constructor(){
            this.img = adaptiveHomeMin4Title4Img
            this.block = adaptiveHomeMin1Content2
            this.btn = adaptiveHomeMin4Title4
        }

        render(){
            //найти картинку и при нажатии чтоб она менялась в верх а при  обратное положение
            this.img.classList.toggle('active')
            this.block.classList.toggle('active')
            this.btn.classList.toggle('active')
        }

        render1(){
            Pagestitle1.classList.add('adaptivePagesBloksTitle1','titleColorFont')
            Pagestitle1.textContent = dataPages[0]
            this.block.appendChild(Pagestitle1)
        }

        render2(){
            Pagestitle2.classList.add('adaptivePagesBloksTitle2','titleColorFont')
            Pagestitle2.textContent = dataPages[1]
            this.block.appendChild(Pagestitle2)
        }

        render3(){
            Pagestitle3.classList.add('adaptivePagesBloksTitle3','titleColorFont')
            Pagestitle3.textContent = dataPages[2]
            this.block.appendChild(Pagestitle3)
        }

        render4(){
            Pagestitle4.classList.add('adaptivePagesBloksTitle4','titleColorFont')
            Pagestitle4.textContent = dataPages[3]
            this.block.appendChild(Pagestitle4)
        }

        render5(){
            Pagestitle5.classList.add('adaptivePagesBloksTitle5','titleColorFont')
            Pagestitle5.textContent = dataPages[4]
            this.block.appendChild(Pagestitle5)
        }

        render6(){
            Pagestitle6.classList.add('adaptivePagesBloksTitle6','titleColorFont')
            Pagestitle6.textContent = dataPages[5]
            this.block.appendChild(Pagestitle6)
        }

        render7(){
            Pagestitle7.classList.add('adaptivePagesBloksTitle7','titleColorFont')
            Pagestitle7.textContent = dataPages[6]
            this.block.appendChild(Pagestitle7)
        }

        run(){
            this.render()
            this.render1()
            this.render2()
            this.render3()
            this.render4()
            this.render5()
            this.render6()
            this.render7()
        }
    }
    const OpenHome = new openBlockHome
    OpenHome.run()
}