fetch("https://dvaya-blogapi.glitch.me/api/venceremoslive.json")
.then(response => response.json())
.then(data => addResults(data));

function addResults(results){

    let current = 4;
    for(current;current>=0;current--) {
        document.querySelector("#standingsTable").innerHTML = 
        '<li><span class="dept">' + results.first.dept +'</span><span class="point">' + results.first.points +'</span></li><li><span class="dept">' + results.second.dept +'</span><span class="point">' + results.second.points +'</span></li><li><span class="dept">' + results.third.dept +'</span><span class="point">' + results.third.points +'</span></li><li><span class="dept">' + results.fourth.dept +'</span><span class="point">' + results.fourth.points +'</span></li><li><span class="dept">' + results.fifth.dept +'</span><span class="point">' + results.fifth.points +'</span></li>'; 
    }
    document.querySelector(".lastupdate").innerHTML= " Last Updated On " + results.lastUpdated; 
    document.querySelector(".total-events").innerHTML= " Total Events : 24 <br/> Results Announced : " + results.total ; 

}