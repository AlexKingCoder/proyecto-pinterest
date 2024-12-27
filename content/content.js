function generarColorAleatorio() {
    const rojo = Math.floor(Math.random() * 256);
    const verde = Math.floor(Math.random() * 256);
    const azul = Math.floor(Math.random() * 256);
    return `rgba(${rojo}, ${verde}, ${azul}, 0.95)`;
}

export const displayImages = (images) => {
    const container = document.getElementById("imageContainer");
    container.innerHTML = "";

    const imgLimit = images.slice(0, 15);

    imgLimit.forEach(image => {
        const imgDiv = document.createElement("div");
        imgDiv.className = "imgDiv";

        const imgElement = document.createElement("img");
        imgElement.className = "imgItem";
        imgElement.src = image.urls.small;
        imgElement.alt = "Imagen de Unsplash";
        imgElement.loading = "lazy";

        const imgLink = document.createElement("a");
        imgLink.href = image.links.html;
        imgLink.target = "_blank";
        imgLink.appendChild(imgElement);
        imgDiv.appendChild(imgLink);

        const caption = document.createElement("p");
        caption.className = "authorName";
        caption.textContent = `Por: ${image.user.name}`;

        const authorProfile = document.createElement("img");
        authorProfile.className = "authorProfile";
        authorProfile.src = image.user.profile_image.small;
        authorProfile.style.borderColor = generarColorAleatorio();

        const authorProfileLink = document.createElement("a");
        authorProfileLink.href = `https://www.pinterest.com/${image.user.username}`;
        authorProfileLink.target = "_blank";
        authorProfileLink.appendChild(authorProfile);
        
        imgDiv.appendChild(caption);
        imgDiv.appendChild(authorProfileLink);
        container.appendChild(imgDiv);
    });
}