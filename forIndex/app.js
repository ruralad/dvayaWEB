console.log('Getting Into Script O.K')

function show(div) {
    document.getElementById(div).style.display = 'block';
}

function hide(div) {
    document.getElementById(div).style.display = 'none';
}
window.onclick = function(event) {
    if (event.target !== document.getElementById('academicsBar')) document.getElementById('academicsDrop').style.display = "none";
    if(event.target !== document.getElementById('communitiesBar')) document.getElementById('communitiesDrop').style.display = "none";
    if(event.target !== document.getElementById('sfiBar'))document.getElementById('sfiDrop').style.display = "none";
  }