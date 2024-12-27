const createButtons = (text, className) => {
    const header = document.querySelector("header");
    const button = document.createElement("button");
    button.textContent = text;
    button.className = className;
    header.appendChild(button);
}

const createImages = (src, idName) => {
    const header = document.querySelector("header");
    const image = document.createElement("img");
    image.src = src;
    image.id = idName;
    header.appendChild(image);
}

const searchInput = (placeholder) => {
    const header = document.querySelector("header");
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = placeholder;
    input.id = "searchBar";
    input.addEventListener("click", function() {
        input.value = "";
    });
    const searchButton = document.createElement("button");
    searchButton.textContent = "Buscar";
    searchButton.id = "searchButton";
    header.appendChild(input);
    header.appendChild(searchButton);
}

export const header = () => {
    createImages("./header/images/pinterest-logo.png", "logo");
    createButtons("inicio", "headerButton");
    createButtons("explorar", "headerButton");
    createButtons("crear", "headerButton");
    searchInput("busca ideas fantásticas");
    createImages("./header/images/notification-icon.png", "notificationLogo");
    createImages("./header/images/message-icon.png", "messageLogo");
    createImages("./header/images/profile-icon.png", "profileLogo");
    }
