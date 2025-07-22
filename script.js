const hdele= document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY>50){
        hdele.classList.add('hd-scrolled')
    }
    else if (window.scrollY<=50){
        hdele.classList.remove('hd-scrolled')
    }
})