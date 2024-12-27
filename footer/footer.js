export const footerLinks = (text, link) => {
    const footer = document.querySelector("footer");
    const a = document.createElement("a");
    a.textContent = text;
    a.href = link;
    a.className = "footerLink";
    const li = document.createElement("li");
    li.className = "footerLinkLi";
    li.appendChild(a);
    footer.appendChild(li);
}

export const footer = () => {
    footerLinks("términos de uso", "https://es.pinterest.com/_/_/policy/terms-of-service");
    footerLinks("Política de privacidad", "https://es.pinterest.com/_/_/policy/privacy-policy");
    footerLinks("Ayuda", "https://es.pinterest.com/_/_/help");
    footerLinks("Aplicación para Iphone", "https://itunes.apple.com/us/app/pinterest/id429047995");
    footerLinks("Aplicación para Android", "https://play.google.com/store/apps/details?id=com.pinterest");
    footerLinks("Usuarios", "https://www.pinterest.com/html_sitemap/pinners_a.html");
    footerLinks("Colecciones", "https://www.pinterest.com/html_sitemap/boards_a.html");
    footerLinks("Compras", "https://www.pinterest.com/html_sitemap/shopping_0.html");
}