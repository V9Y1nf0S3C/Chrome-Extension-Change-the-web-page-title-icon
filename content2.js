// content.js
//alert("Hello!")
document.title = "Docs";
var link = document.querySelector("link[rel~='icon']"); if (!link) { link = document.createElement('link'); link.rel = 'icon'; document.head.appendChild(link); } link.href = 'https://github.com/favicon.ico';