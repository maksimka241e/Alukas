function OpenBlockBlog(){
    const adaptiveBlogMin1Content3 = document.querySelector('.adaptiveHomeMin1Content3')
    const adaptiveHomeMin5Title5Img = document.querySelector('.adaptiveHomeMin5Title5Img')    

    class openBlockHome{
        constructor(){
            this.img = adaptiveHomeMin5Title5Img
            this.block = adaptiveBlogMin1Content3
            this.btn = adaptiveHomeMin5Title5
        }
        render(){
            //найти картинку и при нажатии чтоб она менялась в верх а при  обратное положение
            this.img.classList.toggle('active')
            this.block.classList.toggle('active')
            this.btn.classList.toggle('active')
        }

        render1(){
            Blogtitle1.classList.add('adaptiveBlogBloksTitle1','titleColorFont')
            Blogtitle1.textContent = dataBlog[0]
            this.block.appendChild(Blogtitle1)
        }

        render2(){
            Blogtitle2.classList.add('adaptiveBlogBloksTitle2','titleColorFont')
            Blogtitle2.textContent = dataBlog[1]
            this.block.appendChild(Blogtitle2)
        }

        render3(){
            Blogtitle3.classList.add('adaptiveBlogBloksTitle3','titleColorFont')
            Blogtitle3.textContent = dataBlog[2]
            this.block.appendChild(Blogtitle3)
        }

        render4(){
            Blogtitle4.classList.add('adaptiveBlogBloksTitle4','titleColorFont')
            Blogtitle4.textContent = dataBlog[3]
            this.block.appendChild(Blogtitle4)
        }

        render5(){
            Blogtitle5.classList.add('adaptiveBlogBloksTitle5','titleColorFont')
            Blogtitle5.textContent = dataBlog[4]
            this.block.appendChild(Blogtitle5)
        }

        render6(){
            Blogtitle6.classList.add('adaptiveBlogBloksTitle6','titleColorFont')
            Blogtitle6.textContent = dataBlog[5]
            this.block.appendChild(Blogtitle6)
        }

        run(){
            this.render()
            this.render1()
            this.render2()
            this.render3()
            this.render4()
            this.render5()
            this.render6()
        }
    }
    const OpenHome = new openBlockHome
    OpenHome.run()
}