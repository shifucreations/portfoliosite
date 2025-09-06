//menubar

const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', () =>{
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
});

//accordion

const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader =>{
    accordionItemHeader.addEventListener("click", event =>{
        accordionItemHeader.classList.toggle("active");
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if(accordionItemHeader.classList.contains("active")) {
          accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        }
        else {
          accordionItemBody.style.maxHeight = 0;
        }
        const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
          if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {   
            currentlyActiveAccordionItemHeader.classList.toggle("active");   
            currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
        }
    })
});



