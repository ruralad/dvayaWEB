function dshow(id){
    if(id=="article"){
        document.querySelector("#eventsconducted").style.display = "block";
        document.querySelector("section").style.display = "none";
    }else if(id=="section"){
        document.querySelector("#eventsconducted").style.display = "none";
        document.querySelector("section").style.display = "flex";
    }
}
