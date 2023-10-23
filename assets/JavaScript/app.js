window.addEventListener('scroll',()=>{
    if (window.scrollY > 150) {
        document.querySelector('.header_content').style.height = '72px'
    } else {
        document.querySelector('.header_content').style.height = '105px'
    }

    document.querySelector('.burger_menu').classList.remove('active')
})

document.querySelector('.box_1').addEventListener('click',()=>{
    document.body.style.overflow = 'hidden'
    document.querySelector('.body_overflow').classList.add('active')
    document.querySelector('.modal_1').classList.add('active')
});

document.querySelector('.closemodal').addEventListener('click',()=>{
    document.body.style.overflow = 'auto'
    document.querySelector('.body_overflow').classList.remove('active')
    document.querySelector('.modal_1').classList.remove('active')
});

document.querySelector('.box_2').addEventListener('click',()=>{
    document.body.style.overflow = 'hidden'
    document.querySelector('.body_overflow').classList.add('active')
    document.querySelector('.modal_2').classList.add('active')
});

document.querySelector('.closemodal_2').addEventListener('click',()=>{
    document.body.style.overflow = 'auto'
    document.querySelector('.body_overflow').classList.remove('active')
    document.querySelector('.modal_2').classList.remove('active')
});

document.querySelector('.box_3').addEventListener('click',()=>{
    document.body.style.overflow = 'hidden'
    document.querySelector('.body_overflow').classList.add('active')
    document.querySelector('.modal_3').classList.add('active')
});

document.querySelector('.closemodal_3').addEventListener('click',()=>{
    document.body.style.overflow = 'auto'
    document.querySelector('.body_overflow').classList.remove('active')
    document.querySelector('.modal_3').classList.remove('active')
});

document.querySelector('.box_4').addEventListener('click',()=>{
    document.body.style.overflow = 'hidden'
    document.querySelector('.body_overflow').classList.add('active')
    document.querySelector('.modal_4').classList.add('active')
});

document.querySelector('.closemodal_4').addEventListener('click',()=>{
    document.body.style.overflow = 'auto'
    document.querySelector('.body_overflow').classList.remove('active')
    document.querySelector('.modal_4').classList.remove('active')
});

document.querySelector('.box_5').addEventListener('click',()=>{
    document.body.style.overflow = 'hidden'
    document.querySelector('.body_overflow').classList.add('active')
    document.querySelector('.modal_5').classList.add('active')
});

document.querySelector('.closemodal_5').addEventListener('click',()=>{
    document.body.style.overflow = 'auto'
    document.querySelector('.body_overflow').classList.remove('active')
    document.querySelector('.modal_5').classList.remove('active')
});

document.querySelector('.box_6').addEventListener('click',()=>{
    document.body.style.overflow = 'hidden'
    document.querySelector('.body_overflow').classList.add('active')
    document.querySelector('.modal_6').classList.add('active')
});

document.querySelector('.closemodal_6').addEventListener('click',()=>{
    document.body.style.overflow = 'auto'
    document.querySelector('.body_overflow').classList.remove('active')
    document.querySelector('.modal_6').classList.remove('active')
});

window.addEventListener('scroll',()=>{  
    if (window.scrollY > 1000) {
        document.querySelector('.link_1').classList.add('active')
    }else {
        document.querySelector('.link_1').classList.remove('active')
    }
    
    if (window.scrollY > 1000) {
        document.querySelector('.link_2').classList.add('active')
    } else {
        document.querySelector('.link_2').classList.remove('active')
    }

    if (window.scrollY > 1800) {
        document.querySelector('.link_3').classList.add('active');
        document.querySelector('.link_2').classList.remove('active')
    } else {
        document.querySelector('.link_3').classList.remove('active')
    }
})


document.querySelector('.open_burger').addEventListener('click', () => {
    const burgerMenu = document.querySelector('.burger_menu');
    const openBurger = document.querySelector('.open_burger');
    
    if (burgerMenu.classList.contains('active')) {
        burgerMenu.classList.remove('active');
        openBurger.style.border = "none";
    } else {
        burgerMenu.classList.add('active');
        openBurger.style.border = "3px solid #fff";
    }
});


