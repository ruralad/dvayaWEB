document.getElementById("dvayaBox").addEventListener("click", function () {
  window.location = "https://dvaya.in";
});

function change_favicon() {
  let favicon = document.querySelector('link[rel="shortcut icon"]');

  if (!favicon) {
    favicon = document.createElement("link");
    favicon.setAttribute("rel", "shortcut icon");
    let head = document.querySelector("head");
    head.appendChild(favicon);
  }

  favicon.setAttribute("type", "image/webp");
  favicon.setAttribute("href", "../assets/dvayaLogo.webp");
}
change_favicon();

function goTo(url) {
  if(url=="sfi-insta")
  window.open("https://instagram.com/sfigeci");
else if(url=="sfi-fb)
  window.open("https://www.facebook.com/SFIGECIunit");  
}
