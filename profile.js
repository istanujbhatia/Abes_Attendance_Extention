var userData = JSON.parse(localStorage.getItem('userData'));
var dept = localStorage.getItem('department');
var att = localStorage.getItem('Attendance');

if (parseInt(att) < 75) {
    document.querySelector('#msg').innerText = `Caution!!! Less Than 75%${'\n'}Take All Lectures This Week`
}
else {
    document.querySelector('#msg').innerText = `Heyy!! ${userData.response.name},${'\n'}You have ${(Math.floor(8 - Math.round((parseInt(parseFloat(att)) * 0.08)))) * 5} Bunks this Week`

}
console.log(userData);


var pinText = document.querySelector('#pinText')
var pin = document.querySelector('#pin')



document.querySelector('#dept_sec').innerHTML = `${dept} - ${userData.response.string5}`
document.querySelector('#mail').innerHTML = userData.response.email
document.querySelector('#mobNo').innerHTML = userData.response.mobile
document.querySelector('#adminNo').innerHTML = userData.response.username
document.querySelector('#rollNo').innerHTML = userData.response.string4
document.querySelector('#lastLoginTime').innerHTML = userData.response.last_login_time
document.querySelector('#role').innerHTML = userData.response.role
pinText.innerHTML = userData.response.string10
document.querySelector('#name').innerHTML = userData.response.name
document.querySelector('#passingYear').innerHTML = userData.response.int6
document.querySelector('#term').innerHTML = `Year : ${userData.response.int3} Sem : ${userData.response.int4}`

var pinDiv = pin.children[2]






pinText.addEventListener('click', (e) => {
    pin.children[2].remove()
    var newDiv = document.createElement("div");
    newDiv.classList.add("input-container");
    // Create the input element
    var newInput = document.createElement("input");
    newInput.type = "text";
    newInput.placeholder = "Edit PIN";
    newInput.setAttribute('id', 'input')
    
    // Create the tick button
    var tickButton = document.createElement("button");
    tickButton.classList.add("tick-button");
    tickButton.innerHTML = "&#10004;";
    tickButton.addEventListener('click', function () {
        var input = document.querySelector('#input').value
        pin.children[2].remove()
        console.log(input);
        // card(input)
        pinDiv.innerHTML=input
        pin.appendChild(pinDiv)
    });

    // Create the cross button
    var crossButton = document.createElement("button");
    crossButton.classList.add("cross-button");
    crossButton.innerHTML = "&#10006;";
    crossButton.setAttribute('id', 'cross');
    crossButton.addEventListener('click', function () {
        pin.children[2].remove()
        pin.appendChild(pinDiv)
    });

    // Append the input and buttons to the div
    newDiv.appendChild(newInput);
    newDiv.appendChild(tickButton);
    newDiv.appendChild(crossButton);
    // Append the new div to the parent container
    document.getElementById("pin").appendChild(newDiv);
});



// function pinChange(newPin){
//     fetch("https://abes.platform.simplifii.com/api/v1/cards", {
//       "headers": {
//         "accept": "application/json, text/plain, */*",
//         "accept-language": "en-US,en;q=0.9,hi;q=0.8",
//         "authorization": `Bearer ${userData.token}`,
//         "content-type": "application/json",
//         "sec-ch-ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Google Chrome\";v=\"126\"",
//         "sec-ch-ua-mobile": "?0",
//         "sec-ch-ua-platform": "\"Linux\"",
//         "sec-fetch-dest": "empty",
//         "sec-fetch-mode": "cors",
//         "sec-fetch-site": "cross-site"
//       },
//       "referrer": "https://aims-abes.vercel.app/",
//       "referrerPolicy": "strict-origin-when-cross-origin",
//       "body": `{\"card_unique_code\":\"${userData.response.username}\",\"action\":\"SetPin\",\"pin\":\"${newPin}\"}`,
//       "method": "PATCH",
//       "mode": "cors",
//       "credentials": "include"
//     }).then(res=>{
//       return res.json()
//     })
//     .then(data => console.log(data))
//     .catch(err=>{
//       console.error(err)
//     })
  
//   }
//   async function card(pin) {
//     const result = await pinChange(pin)
//     console.log(result);
//   }
  

