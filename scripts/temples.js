const yearSpan = document.querySelector("#year");
const lastModifiedSpan = document.querySelector("#lastModified");

yearSpan.textContent = new Date().getFullYear();
lastModifiedSpan.textContent = document.lastModified;

const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");

    hamburger.setAttribute("aria-expanded", isOpen);
});
