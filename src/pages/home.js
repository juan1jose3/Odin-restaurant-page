import beefImage from "../images/beef.jpg";
import chickenImage from "../images/chicken.jpg";
import pastaImage from "../images/pasta.jpg";


function renderCards(menuContainer){
    for(let cardItem = 0; cardItem < 3; cardItem++){
        const item = document.createElement("div");
        const itemTitle = document.createElement("h2");

        const textWrapper = document.createElement("div");
        textWrapper.classList.add("text-wrapper");
        const itemText = document.createElement("p");
        const image = document.createElement("img");
        image.classList.add("card-image");

        textWrapper.appendChild(itemText);

        item.classList.add("card");
        item.appendChild(itemTitle);
        item.appendChild(image);
        item.appendChild(textWrapper);

        item.classList.add("menu-card");

        if(cardItem === 0){
            itemTitle.textContent = "Beef Steak";
            image.src = beefImage;
            itemText.textContent = "Prime-cut beef charbroiled to juicy perfection, served sizzling with a rich, savory reduction."
        }else if(cardItem === 1){
            itemTitle.textContent = "Roasted Chicken";
            image.src = chickenImage;
            itemText.textContent = "Herb-marinated free-range chicken roasted golden and crisp, complemented by pan drippings.";
        }else{
            itemTitle.textContent = "Spaghetti";
            image.src = pastaImage;
            itemText.textContent = "Artisanal pasta tossed in a velvety garlic-infused sauce with fresh seasonal herbs and aged parmesan.";
        }

        menuContainer.appendChild(item);
    }
}

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
    mainTileWrapper.textContent = "The Rich Flavor";

    const menuSection = document.createElement("div");
    const menuTitle = document.createElement("h1");
    menuTitle.textContent = "Today's Special";
    menuSection.classList.add("menu-section");
    menuSection.appendChild(menuTitle);



    const menuCardContainer = document.createElement("div");
    menuCardContainer.classList.add("menu-card-container");
    menuSection.appendChild(menuCardContainer);

    renderCards(menuCardContainer);

    darkWrapper.appendChild(mainTileWrapper);
    bannerContainer.appendChild(darkWrapper);
    
    
    homeWrapper.appendChild(bannerContainer);
    mainContainer.appendChild(homeWrapper);
    homeWrapper.appendChild(menuSection);
}


export default renderHome;