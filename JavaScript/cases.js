let mobileNav=document.querySelector(".mobile-nav")
const menu_button=document.querySelector(".menu-button")
let close_btn=document.querySelector(".close-btn")


console.log(mobileNav)
console.log(menu_button)

    

    menu_button.addEventListener('click' ,()=>{

    mobileNav.style.display="block";

        close_btn.addEventListener('click',()=>{


            mobileNav.style.display='none'


        })

})



