import tomahawk from "../images/tomahawk.jpg";
import mushroom from "../images/mushroom.jpg"
import lobster from "../images/lobster.jpg";

function renderRecipes(recipesContainer){
    const content ={
        0: [
            "Tomahawk Steak",

            "A showstopping 32oz dry-aged ribeye, charbroiled over open flames to lock in its rich, robust juices. Served tableside with a garlic-herb butter glaze and roasted bone marrow.",
            
            tomahawk,

            "$125"
        ],
        1: [

            "Truffle Mushroom Risotto",

            "Slow-cooked arborio rice folded with a rich medley of wild forest mushrooms, aged parmesan, and sweet caramelized shallots, finished with a generous drizzle of fragrant white truffle oil.",

            mushroom,

            "$22"
        ],

        2: [

            "Lobster Tail",

            "Fresh cold-water lobster tail, gently poached in rich drawn garlic butter and fresh herbs. Accompanied by charred lemon and a side of grilled asparagus spears.",

            lobster,

            "$55"
        ],
    }
    for(let recipe = 0; recipe < 3; recipe++){
        const recipeItem = document.createElement("div");
        recipeItem.classList.add("recipe-item");

        const recipeTextWrapper =document.createElement("div");
        recipeTextWrapper.classList.add("recipe-text-wrapper");

        const itemTitle = document.createElement("h3");
        itemTitle.classList.add("item-title");
        itemTitle.textContent = content[recipe][0];

        recipeTextWrapper.appendChild(itemTitle);

        const recipeText = document.createElement("p");
        recipeText.textContent = content[recipe][1]
        recipeTextWrapper.appendChild(recipeText);

        const recipeImage = document.createElement("img");
        recipeImage.src = content[recipe][2];
        recipeImage.classList.add("recipe-image");

        const recipePrice = document.createElement("p");
        recipePrice.textContent = content[recipe][3];
        recipePrice.classList.add("recipe-price");

        
        recipeTextWrapper.appendChild(recipePrice);

        


        if(recipe % 2 == 0 || recipe === 0){
            recipeItem.classList.add("even-recipe");
            recipeItem.appendChild(recipeImage);
            recipeItem.appendChild(recipeTextWrapper);
        }else{
            recipeImage.classList.add("odd-recipe");
            recipeItem.appendChild(recipeTextWrapper);
            recipeItem.appendChild(recipeImage);
        }
        recipesContainer.appendChild(recipeItem);
    }
}


function renderMenu(){
    const mainContainer = document.querySelector(".main-container");
    
    const menuWrapper = document.createElement("div");
    menuWrapper.classList.add("menu-page");

    const menuTitleContainer = document.createElement("div");
    menuTitleContainer.classList.add("menu-title-container");

    const menuTitle = document.createElement("h2");
    menuTitle.classList.add("menu-title");
    menuTitle.textContent = "Our Specialities";

    const recipesContainer = document.createElement("div");
    recipesContainer.classList.add("recipes-container");

    renderRecipes(recipesContainer);


    menuTitleContainer.appendChild(menuTitle);


    menuWrapper.appendChild(menuTitleContainer);
    menuWrapper.appendChild(recipesContainer);

    mainContainer.appendChild(menuWrapper);
}

export default renderMenu;