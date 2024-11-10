var userData = JSON.parse(localStorage.getItem("userData"));
var dept = localStorage.getItem("department");
var att = JSON.parse(localStorage.getItem("att"));

if (parseInt(att.Percent) < 75) {
  document.querySelector(
    "#msg"
  ).innerText = `Caution!!! Less Than 75%${"\n"}Take All Lectures This Week`;
} else {
  document.querySelector("#msg").innerText = `Heyy!! ${userData.response.name},Miss ${Math.floor(8 - Math.round(parseInt(75) * 0.08)) * 5} lectures and you will still have 75%`;
}
// console.log(userData);

var pinText = document.querySelector("#pinText");
var pin = document.querySelector("#pin");

document.querySelector(
  "#dept_sec"
).innerHTML = `${dept} - ${userData.response.string5}`;
document.querySelector("#mail").innerHTML = userData.response.email;
document.querySelector("#mobNo").innerHTML = userData.response.mobile;
document.querySelector("#adminNo").innerHTML = userData.response.username;
document.querySelector("#rollNo").innerHTML = userData.response.string4;
document.querySelector("#lastLoginTime").innerHTML =
  userData.response.last_login_time;
document.querySelector("#role").innerHTML = userData.response.role;
pinText.innerHTML = userData.response.string10;
document.querySelector("#name").innerHTML = userData.response.name;
document.querySelector("#passingYear").innerHTML = userData.response.int6;
document.querySelector(
  "#term"
).innerHTML = `Year : ${userData.response.int3} Sem : ${userData.response.int4}`;





//div add whan changing pin with a tick to send and cross to terminate
var pinDiv = pin.children[2];
pinText.addEventListener("click", (e) => {
  pin.children[2].remove();
  var newDiv = document.createElement("div");
  newDiv.classList.add("input-container");
  // Create the input element
  var newInput = document.createElement("input");
  newInput.type = "text";
  newInput.placeholder = "Edit PIN";
  newInput.setAttribute("id", "input");
  newInput.setAttribute("maxlength", "4");

  // Create the tick button
  var tickButton = document.createElement("button");
  tickButton.classList.add("tick-button");
  tickButton.innerHTML = "&#10004;";
  tickButton.addEventListener("click", function () {
    var input = document.querySelector("#input").value;
    let checkInput = input;
    input = input.replace(/\D/g, '');
    if(input.length == 4 && checkInput.length == 4){
        changePin(input); //called change pin function
        pin.children[2].remove();
        // console.log(input);
        // console.log(typeof input);
        pinDiv.innerHTML = input;
        pin.appendChild(pinDiv);
    }
  });

  // Create the cross button
  var crossButton = document.createElement("button");
  crossButton.classList.add("cross-button");
  crossButton.innerHTML = "&#10006;";
  crossButton.setAttribute("id", "cross");
  crossButton.addEventListener("click", function () {
    pin.children[2].remove();
    pin.appendChild(pinDiv);
  });

  // Append the input and buttons to the div
  newDiv.appendChild(newInput);
  newDiv.appendChild(tickButton);
  newDiv.appendChild(crossButton);
  // Append the new div to the parent container
  document.getElementById("pin").appendChild(newDiv);
});


//change pin functionality
function changePin(newPin) {
  fetch("https://abes.platform.simplifii.com/api/v1/cards", {
    method: "PATCH",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Accept-Language": "en-US,en;q=0.9,hi;q=0.8",
      authorization: `Bearer ${userData.token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      card_unique_code: `${userData.response.username}`,
      action: "SetPin",
      pin: `${newPin}`,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => console.log(data.msg))
    .catch((error) => console.error("Error:", error));
}



//change password functionality
function changePass(currentPass, newPass) {
    fetch("https://abes.platform.simplifii.com/api/v1/cards", {
      method: "PATCH",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Accept-Language": "en-US,en;q=0.9,hi;q=0.8",
        authorization: `Bearer ${userData.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        card_unique_code: `${userData.response.username}`,
        action: "ChangePassword",
        current_password: `${currentPass}`,
        password: `${newPass}`,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  }
  
//   document.getElementById("passChange").addEventListener("click", (e) => {
//     e.preventDefault();
//     currPass = document.getElementById("currPass").value;
//     newPass = document.getElementById("newPass").value;
//     changePass(currPass, newPass);
//   });