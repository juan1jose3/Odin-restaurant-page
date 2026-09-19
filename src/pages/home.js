import beefImage from "../images/beef.jpg";
import chickenImage from "../images/chicken.jpg";
import pastaImage from "../images/pasta.jpg";


function renderCards(menuContainer){


    const content ={
        0: [
            "Beef Steak",
            beefImage,

            "Prime-cut beef charbroiled to juicy perfection, served sizzling with a rich, savory reduction."
         ],

        1:[
            "Roasted Chicken",
            chickenImage,
            "Herb-marinated free-range chicken roasted golden and crisp, complemented by pan drippings."
        ],

        2:[
            "Spaghetti",
            pastaImage,
            "Artisanal pasta tossed in a velvety garlic-infused sauce with fresh seasonal herbs and aged parmesan."
        ]
    }

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

        itemTitle.textContent = content[cardItem][0];
        image.src = content[cardItem][1];
        itemText.textContent = content[cardItem][2];
      
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

    const descriptionWrapper = document.createElement("div");
    descriptionWrapper.classList.add("description-wrapper");

    const description = document.createElement("p");
    description.textContent = "We only use five star quality for our menu, come and get the richness in every food we serve";
    descriptionWrapper.appendChild(description);

    const menuCardContainer = document.createElement("div");
    menuCardContainer.classList.add("menu-card-container");
    menuSection.appendChild(menuCardContainer);

    renderCards(menuCardContainer);

    darkWrapper.appendChild(mainTileWrapper);
    bannerContainer.appendChild(darkWrapper);
    mainTileWrapper.appendChild(descriptionWrapper);
    
    
    homeWrapper.appendChild(bannerContainer);
    mainContainer.appendChild(homeWrapper);
    homeWrapper.appendChild(menuSection);
}


export default renderHome;