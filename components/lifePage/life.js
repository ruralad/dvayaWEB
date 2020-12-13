function dshow(id) {
  if (id == "article") {
    document.querySelector("#eventsconducted").style.display = "block";
    document.querySelector("section").style.display = "none";
    document.querySelector("#eventsconducted").scrollIntoView({
      behavior: "smooth",
    });
  } else if (id == "section") {
    document.querySelector("#eventsconducted").style.display = "none";
    document.querySelector("section").style.display = "flex";
    document.querySelector("section").scrollIntoView({
      behavior: "smooth",
    });
  }
}
