fetch("https://cors-anywhere.herokuapp.com/https://dvayablog.herokuapp.com/api/blogs.json")
.then(response => response.json())
.then(data => addBlogs(data));

function addBlogs(blogs){

    document.querySelector("#lastupdated").innerText = blogs[0].date;
    document.querySelector(".loading").style.display = "none";

    let i=0;
    for(i;i<blogs.length;i++){
        let col4 = document.createElement("div");
        col4.classList.add("col-4");
        let card = document.createElement("div");
        card.classList.add("card");
        let cardBlock = document.createElement("div");
        cardBlock.classList.add("card-block");

        let h3 = document.createElement("h3");
        h3.classList.add("card-title");
        h3.classList.add("blogtitle");
        h3.innerText = blogs[i].title;

        let p1 = document.createElement("p");
        p1.classList.add("author");
        p1.innerText = blogs[i].author;
        let p2 = document.createElement("p");
        p2.classList.add("date");
        p2.innerText = blogs[i].date;
        let p3 = document.createElement("p");
        p3.classList.add("card-text");
        p3.innerText = blogs[i].text;

        cardBlock.appendChild(h3);
        cardBlock.appendChild(p1);
        cardBlock.appendChild(p2);
        cardBlock.appendChild(p3);

        card.appendChild(cardBlock);
        col4.appendChild(card);

        document.querySelector(".row").appendChild(col4);
    }
}