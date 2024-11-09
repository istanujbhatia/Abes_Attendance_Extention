document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get values from input fields
    const username = document.getElementById('username').value;
    passRecover(username);
});

let passRecover = function (userName) {
    
    fetch("https://abes.platform.simplifii.com/api/v1/forgotpassword", {
        method: "PATCH",
        headers: {
            "accept": "application/json, text/javascript, */*; q=0.01",
            "accept-language": "en-US,en;q=0.9,hi;q=0.8",
            "content-type": "application/json",
            "sec-ch-ua": "\"Google Chrome\";v=\"125\", \"Chromium\";v=\"125\", \"Not.A/Brand\";v=\"24\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Linux\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-site"
        },
        "referrer": "https://abes.web.simplifii.com/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": `{\"username\":\"${userName}\",\"reset_password_base_url\":\"https://abes.web.simplifii.com/reset_password.php\"}`,
        "method": "PATCH",
        "mode": "cors",
        "credentials": "omit"
    }).then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(json => {
        document.getElementById("submit").disabled=true;
        document.getElementById("submit").style.backgroundColor="grey";
        redirectWithLoader();
        console.log(json.msg);
      })
      .catch(error => {
        alert('Invalid Username');
      });

}
function redirectWithLoader() {
  // Show loader and overlay
  document.getElementById("overlay").style.display = "flex";
  document.getElementById("loader").style.display = "block";

  // Simulate a delay before redirect (e.g., 2 seconds)
  setTimeout(function() {
    window.location.href = "../Login/index.html"; // Redirect to another page
  }, 2000); // 3000ms = 3 seconds
}



