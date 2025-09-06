//menubar

const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', () =>{
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
})

//accordion

const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader =>{
    accordionItemHeader.addEventListener("click", event =>{
        accordionItemHeader.classList.toggle("active");
    })
})




