import { containsServerDirective } from "astro/runtime/server/render/server-islands.js"

const menu = document.querySelector('.menu')

menu?.addEventListener('click',() =>{
        const isExpanded = menu.getAttribute('aria-expanded') === 'true';
        menu.setAttribute('aria-expanded',`${!isExpanded}`);
});