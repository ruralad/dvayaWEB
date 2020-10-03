async function calls() {
    fetch('https://dvaya-beta.netlify.app/api/freshers-notification.json')
        .then(response => {
            console.log(response.json());
        })
}