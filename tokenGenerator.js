let generateToken = function (u, p) {
  // let Authentication=false;
  fetch("https://abes.platform.simplifii.com/api/v1/admin/authenticate", {
    "method": "POST",
    "headers": {
        "accept": "*/*",
        "accept-language": "en-US,en;q=0.9,hi;q=0.8",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        "device_id": "device_id_here",
        "sec-ch-ua": "\"Google Chrome\";v=\"125\", \"Chromium\";v=\"125\", \"Not.A/Brand\";v=\"24\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Linux\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site"
    },
    "referrer": "https://abes.web.simplifii.com/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": `username=${u}&password=${p}`,
    "method": "POST",
    "mode": "cors",
    "credentials": "omit"
}).then((response) => response.json())
.then((json) => console.log(json.token))
.catch(error => {
  console.log(`ERROR : Authentication : ${error}`)
  alert("Error!! Enter correct username and password", error);
});
}
generateToken("username","pass")