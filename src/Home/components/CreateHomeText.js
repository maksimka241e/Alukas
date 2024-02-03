function OpenBlockHome(){
    const adaptiveHomeMin1Content1 = document.querySelector('.adaptiveHomeMin1Content1')
    const adaptiveHomeMin1Title1Img = document.querySelector('.adaptiveHomeMin1Title1Img')
    
    class openBlockHome{
        constructor(){
            this.img = adaptiveHomeMin1Title1Img
            this.block = adaptiveHomeMin1Content1
            this.btn = adaptiveHomeMin1Title1
        }
        render(){
            //найти картинку и при нажатии чтоб она менялась в верх а при  обратное положение
            this.block.classList.toggle('active')
            this.btn.classList.toggle('active')
        }

        render1(){
            title1.classList.add('adaptiveHomeBloksTitle1','titleColorFont')
            title1.textContent = dataHome[0]
            this.block.appendChild(title1)
        }

        render2(){
            title2.classList.add('adaptiveHomeBloksTitle2','titleColorFont')
            title2.textContent = dataHome[1]
            this.block.appendChild(title2)
        }

        render3(){
            title3.classList.add('adaptiveHomeBloksTitle3','titleColorFont')
            title3.textContent = dataHome[2]
            this.block.appendChild(title3)
        }

        render4(){
            title4.classList.add('adaptiveHomeBloksTitle4','titleColorFont')
            title4.textContent = dataHome[3]
            this.block.appendChild(title4)
        }

        render5(){
            title5.classList.add('adaptiveHomeBloksTitle5','titleColorFont')
            title5.textContent = dataHome[4]
            this.block.appendChild(title5)
        }

        render6(){
            title6.classList.add('adaptiveHomeBloksTitle6','titleColorFont')
            title6.textContent = dataHome[5]
            this.block.appendChild(title6)
        }

        render7(){
            title7.classList.add('adaptiveHomeBloksTitle7','titleColorFont')
            title7.textContent = dataHome[6]
            this.block.appendChild(title7)
        }

        render8(){
            title8.classList.add('adaptiveHomeBloksTitle8','titleColorFont')
            title8.textContent = dataHome[7]
            this.block.appendChild(title8)
        }

        render9(){
            title9.classList.add('adaptiveHomeBloksTitle9','titleColorFont')
            title9.textContent = dataHome[8]
            this.block.appendChild(title9)
        }

        render10(){
            title10.classList.add('adaptiveHomeBloksTitle10','titleColorFont')
            title10.textContent = dataHome[9]
            this.block.appendChild(title10)
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
            this.render8()
            this.render9()
            this.render10()
        }
    }
    const OpenHome = new openBlockHome
    OpenHome.run()
}