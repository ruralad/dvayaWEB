async function calls() {
    let response = await fetch('https://dvaya-beta.netlify.app/api/freshers-notification.json');
    console.log(response.json());
}