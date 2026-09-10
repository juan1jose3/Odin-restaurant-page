function renderHome(){
    const mainContainer = document.querySelector(".main-container");

    const homeWrapper = document.createElement("div");
    homeWrapper.classList.add("home-page");

    const bannerContainer = document.createElement("div");
    bannerContainer.classList.add("banner-container");

    const darkWrapper = document.createElement("div");
    darkWrapper.classList.add("dark-wrapper");

    
    const mainTileWrapper = document.createElement("div");
    mainTileWrapper.classList.add("main-title");
    mainTileWrapper.textContent = "Hello Food";

    
    darkWrapper.appendChild(mainTileWrapper);
    bannerContainer.appendChild(darkWrapper);

    homeWrapper.appendChild(bannerContainer);
    mainContainer.appendChild(homeWrapper);
}


export default renderHome;