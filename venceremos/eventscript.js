fetch("https://dvayablog.herokuapp.com/api/vencresults", {
  method: "get",
  mode: "cors",
})
  .then((response) => response.json())
  .then((data) => addResults(data));

function addResults(results) {
  let i;
  console.log(results);
  for (i = results.length - 1; i >= 0; i--) {
    let newresult = document.createElement("div");
    newresult.classList.add("result");

    let h5 = document.createElement("h5");
    h5.innerHTML = results[i].event;

    let ul = document.createElement("ul");

    let li1 = document.createElement("li");
    li1.innerHTML = "First";
    let p1 = document.createElement("p");
    p1.innerHTML =
      results[i].first.name + "<span>(" + results[i].first.dept + ")</span>";
    li1.appendChild(p1);
    if (results[i].first2.name != "") {
      let p2 = document.createElement("p");
      p2.innerHTML =
        results[i].first2.name +
        "<span>(" +
        results[i].first2.dept +
        ")</span>";
      li1.appendChild(p2);
    }
    if (results[i].first3.name != "") {
      let p2 = document.createElement("p");
      p2.innerHTML =
        results[i].first3.name +
        "<span>(" +
        results[i].first3.dept +
        ")</span>";
      li1.appendChild(p2);
    }

    let li2 = document.createElement("li");
    li2.innerHTML = "Second";
    let p2 = document.createElement("p");
    p2.innerHTML =
      results[i].second.name + "<span>(" + results[i].second.dept + ")</span>";
    li2.appendChild(p2);
    if (results[i].second2.name != "") {
      let p2 = document.createElement("p");
      p2.innerHTML =
        results[i].second2.name +
        "<span>(" +
        results[i].second2.dept +
        ")</span>";
      li2.appendChild(p2);
    }
    if (results[i].second3.name != "") {
      let p2 = document.createElement("p");
      p2.innerHTML =
        results[i].second3.name +
        "<span>(" +
        results[i].second3.dept +
        ")</span>";
      li2.appendChild(p2);
    }
    let li3 = document.createElement("li");
    li3.innerHTML = "Third";
    let p3 = document.createElement("p");
    p3.innerHTML =
      results[i].third.name + "<span>(" + results[i].third.dept + ")</span>";
    li3.appendChild(p3);
    if (results[i].third2.name != "") {
      let p2 = document.createElement("p");
      p2.innerHTML =
        results[i].third2.name +
        "<span>(" +
        results[i].third2.dept +
        ")</span>";
      li3.appendChild(p2);
    }
    if (results[i].third3.name != "") {
      let p2 = document.createElement("p");
      p2.innerHTML =
        results[i].third3.name +
        "<span>(" +
        results[i].third3.dept +
        ")</span>";
      li3.appendChild(p2);
    }
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    newresult.appendChild(h5);
    newresult.appendChild(ul);
    document.querySelector(".all-results").appendChild(newresult);
  }

  document.querySelector("#mainResults").style.display = "flex";
  document.querySelector(".loading").style.display = "none";
}
