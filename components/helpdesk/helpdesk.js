async function calls() {
    fetch('https://dvaya-beta.netlify.app/api/freshers-notification.json')
        .then(
            function (response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }

                // Examine the text in the response
                response.json().then(function (data) {
                    for (let i = 0; i < data.latest.length; i++) {
                        let make = document.createElement('li');
                        make.innerHTML = data.latest[i].date + ':' + data.latest[i].text;
                        document.getElementById('calls').appendChild(make);
                    }
                });
            }
        )
        .catch(function (err) {
            console.log('Fetch Error :-S', err);
        });
}