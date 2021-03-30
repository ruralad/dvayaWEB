function change(id) {
  if (id == "historyButton") {
    addStuff("history");
    removeStuff("programs");
    removeStuff("unit");
  } else if (id == "programsButton") {
    addStuff("programs");
    removeStuff("history");
    removeStuff("unit");
  } else {
    addStuff("unit");
    removeStuff("history");
    removeStuff("programs");
  }
}
function addStuff(id) {
  document.getElementById(id + "Button").classList.add("active");
  document.getElementById(id + "Article").style.display = "block";
}
function removeStuff(id) {
  document.getElementById(id + "Button").classList.remove("active");
  document.getElementById(id + "Article").style.display = "none";
}
