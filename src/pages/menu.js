import tomahawk from "../images/tomahawk.jpg";

function renderRecipes(recipesContainer){
    for(let recipe = 0; recipe < 4; recipe++){
        const recipeItem = document.createElement("div");
        recipeItem.classList.add("recipe-item");

        const recipeTextWrapper =document.createElement("div");
        recipeTextWrapper.classList.add("recipe-text-wrapper");

        const recipeText = document.createElement("p");
        recipeText.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor"
        recipeTextWrapper.appendChild(recipeText);

        const recipeImage = document.createElement("img");
        recipeImage.src = tomahawk;
        recipeImage.classList.add("recipe-image");


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