import "./styles.css";
import renderHome from "./pages/home.js";
import renderMenu from "./pages/menu.js";
import renderAbout from "./pages/about.js";

const navBar = document.querySelector(".nav-bar");
const mainContainer = document.querySelector(".main-container");

renderHome();

navBar.addEventListener("click",event =>{
    const button = event.target.closest("button");
    if(!button) return;

    if(button.classList.contains("menu")){
        mainContainer.textContent = "";
        renderMenu();
    }else if(button.classList.contains("home")){
        mainContainer.textContent = "";
        renderHome();
    }else if(button.classList.contains("about")){
        mainContainer.textContent = "";
        renderAbout();
    }

});