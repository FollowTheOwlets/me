const $$ = (e) => document.querySelectorAll(e);

const deactivate = (e) => e.classList.remove("active");
const activate = (e) => e.classList.add("active");

const items = $$(".menu__item");
const frames = $$(".frame");

let activeItem = items[0];
let activeFrame = frames[0];

 for(let index = 0; index < items.length; index++){
    items[index].addEventListener("click", ()=>{
        deactivate(activeItem);
        deactivate(activeFrame);
        activeItem = items[index];
        activeFrame = frames[index];
        activate(activeItem);
        activate(activeFrame);
    });
 }
