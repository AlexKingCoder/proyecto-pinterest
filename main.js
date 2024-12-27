import {header} from "./header/header.js";
import { preSearch } from "./content/preSearch.js";
import { displayImages } from "./content/content.js";
import {footer} from "./footer/footer.js";

header();

preSearch();

let data;
let response;
let noResultImg, noResultTxt;
let firstSearch = true;
let storedResults = [];

const accessKey = "GLug6n7wUanP5_aUivtNUvAzRZUEea25atPxLBFfhio";

const searchImages = async (query) => {
    let cleanContent = () => {
        let cleanDivs = document.getElementsByClassName("imgDiv");
        Array.from(cleanDivs).forEach(div => {
            div.remove();
        });
}
    let cleanPreSearch = () => {
        let cleanDivs = document.getElementsByClassName("welcomeDiv");
        Array.from(cleanDivs).forEach(div => {
            div.remove();
        });
    }
cleanContent();
cleanPreSearch();
    const url = `https://api.unsplash.com/search/photos?query=${query}&per_page=15&client_id=${accessKey}`;

    try {

        if (noResultImg) {
            document.body.removeChild(noResultImg);
            noResultImg = null;
        }
        if (noResultTxt) {
            document.body.removeChild(noResultTxt);
            noResultTxt = null;
        }

        response = await fetch(url);
        data = await response.json();
    
        if (data.results.length > 0) {
            displayImages(data.results);
        } else {
            noResultImg = document.createElement("img");
            noResultImg.src = "./content/images/noImgs.png";
            noResultTxt = document.createElement("p");
            noResultTxt.textContent = "¿Miau? No hemos encontrado imágenes. Pero no te rindas, ¡prueba con otra palabra!"
            document.body.appendChild(noResultImg);
            document.body.appendChild(noResultTxt);
            noResultImg.className = "noResult";
            noResultTxt.className = "noResult";
            console.log("No se encontraron imágenes. Intenta utilizar otras palabras clave.");
        }
    } catch (error) {
        console.log("Error al buscar imágenes", error);
    }
    if (firstSearch === true) {
        storedResults = data.results;
        firstSearch = false;
    }
};

    document.getElementById("searchButton").addEventListener("click", () => {
        const query = document.getElementById("searchBar").value.trim();
        if (query) {
            searchImages(query);
        }
    });
    
    document.getElementById("searchBar").addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            const query = document.getElementById("searchBar").value.trim();
            if (query) {
                searchImages(query);
            }
        }
    });

    const showStoredResults = () => {
        if (storedResults.length > 0) {
            displayImages(storedResults);
        } else {
            console.log("No hay resultados almacenados.");
        }
    };
    
    document.getElementById("logo").addEventListener("click", showStoredResults);

footer();