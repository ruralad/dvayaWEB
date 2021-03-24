function goToPage(){
    let newPageString = document.querySelector("#semester").value +"-" +document.querySelector("#department").value;
    console.log(newPageString);

    if(document.querySelector("#semester").value == "firstyear") window.location.href = "./notebank/firstyear.html";
    else window.location.href="./notebank/" + newPageString +".html";
}
function showBranches() {
document.querySelector("#hideSelect").style.display = "block";
}