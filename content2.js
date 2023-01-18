// content.js
//alert("Hello!")
changeTheName();
setTimeout(changeTheName, 2000);
setTimeout(changeTheName, 5000);
function changeTheName(){
document.title = "Docs"; var link = document.querySelector("link[rel~='icon']"); if (!link) { link = document.createElement('link'); link.rel = 'icon'; document.head.appendChild(link); } link.href = 'https://github.com/favicon.ico'; }
