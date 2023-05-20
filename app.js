const faqs = document.querySelectorAll('.qAndA')
for (let i = 0; i < faqs.length; i++) {
    faqs[i].addEventListener('click', function(){
        if (faqs[i].children[2].style.height === 'auto') {
            faqs[i].children[2].style.height = '0';
            return
        }
        faqs[i].children[2].style.height = 'auto';
    });    
}
const burgerBtn = document.getElementById('burgerBtn');
burgerBtn.addEventListener('click', function(){
    const header = document.querySelector('header');
    if (header.style.height === 'auto') {
        header.style.height = '75px';
        return
    }
    header.style.height = 'auto';
});