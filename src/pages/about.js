import restaurant from "../images/restaurant.jpg";

function renderAbout(){
    const mainContainer = document.querySelector(".main-container");
    
    const aboutWrapper = document.createElement("div");
    
    const aboutSection = document.createElement("div");
    aboutSection.classList.add("about-section");
    
    const storySection = document.createElement("div");
    storySection.classList.add("story-section");
    
    const storyTitle = document.createElement("h2");
    storyTitle.textContent = "Our Story";

    const storyImage = document.createElement("img");
    storyImage.classList.add("story-image");
    storyImage.src = restaurant;
    
    storySection.appendChild(storyImage);

    const storyTextWrapper = document.createElement("div");
    storyTextWrapper.classList.add("story-text-wrapper");
    storySection.appendChild(storyTextWrapper);

    const storyText = document.createElement("p");

    storyText.textContent = "It began with a single cutting board and a profound respect for the craft. We established this restaurant on the belief that truly exceptional food requires patience, fire, and the finest ingredients available. From those early days to the present, our kitchen has remained a sanctuary for culinary dedication, where every flame is tended with purpose and every cut is prepared to perfection."


    const legacySection = document.createElement("div");
    legacySection.classList.add("legacy-section");

    const legacyTitle = document.createElement("h2");
    legacyTitle.textContent = "The Legacy (Continuing the Flavor)"
    legacySection.appendChild(legacyTitle);


    const legacyTextWrapper = document.createElement("div");
    legacyTextWrapper.classList.add("legacy-text-wrapper");

    
    const legacyText = document.createElement("p");
    legacyText.textContent = "The pursuit of rich flavor never rests. Today, we carry forward our founding standards by sourcing only premium, hand-selected meats and seasonal produce. By marrying time-honored roasting techniques with modern culinary precision, we guarantee that our commitment to uncompromising quality is tasted in every single plate we serve.";
    
    legacyTextWrapper.appendChild(legacyText);
    
    legacySection.appendChild(legacyTextWrapper);


    storyTextWrapper.appendChild(storyText);


    aboutSection.appendChild(storyTitle);

    aboutSection.appendChild(storySection);

    aboutWrapper.appendChild(aboutSection);
    
    aboutWrapper.appendChild(legacySection);
    mainContainer.appendChild(aboutWrapper);

}



export default renderAbout;