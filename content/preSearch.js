export const preSearch = () => {
    const welcomeTxt = document.createElement("p");
    welcomeTxt.textContent = "¡Dale rienda suelta a tu imaginación!";
    welcomeTxt.id = "welcomeTxt";
    const welcomeImg = document.createElement("img");
    welcomeImg.src = "./content/images/preSearch.jpg";
    welcomeImg.id = "welcomeImg";
    const welcomeDiv = document.createElement("div");
    welcomeDiv.className = "welcomeDiv";

    welcomeDiv.appendChild(welcomeTxt);
    welcomeDiv.appendChild(welcomeImg);
    document.body.appendChild(welcomeDiv);
}