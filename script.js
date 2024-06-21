// Event listener for form submission
document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault();

  // Get values from input fields
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Save credentials to localStorage
  localStorage.setItem('username', username);
  localStorage.setItem('password', password);

  // Alert user that credentials are saved (for demonstration purposes)
  alert(`Credentials saved! Click on extention`);
});

// Function to retrieve saved credentials from localStorage
function getSavedCredentials() {
  var savedUsername = localStorage.getItem('username');
  var savedPassword = localStorage.getItem('password');
  return {
    username: savedUsername,
    password: savedPassword
  };
}
// Load saved credentials on page load
window.addEventListener('load', function () {
  const savedCredentials = getSavedCredentials();
  // Populate input fields with saved credentials
  if (savedCredentials.username) {
    document.getElementById('username').value = savedCredentials.username
  }

  if (savedCredentials.password) {
    document.getElementById('password').value = savedCredentials.password
  }


});




// let generateToken = function (u, p) {
//   //generates token
//   fetch("https://abes.platform.simplifii.com/api/v1/admin/authenticate", {
//     method: "POST",
//     headers: {
//       "accept": "*/*",
//       "accept-language": "en-US,en;q=0.9,hi;q=0.8",
//       "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
//       "device_id": "device_id_here",
//       "sec-ch-ua": "\"Google Chrome\";v=\"125\", \"Chromium\";v=\"125\", \"Not.A/Brand\";v=\"24\"",
//       "sec-ch-ua-mobile": "?0",
//       "sec-ch-ua-platform": "\"Linux\"",
//       "sec-fetch-dest": "empty",
//       "sec-fetch-mode": "cors",
//       "sec-fetch-site": "same-site"
//     },
//     referrer: "https://abes.web.simplifii.com/",
//     referrerPolicy: "strict-origin-when-cross-origin",
//     body: "username=" + u + "&password=" + p,
//     mode: "cors",
//     credentials: "omit"
//   })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.json();
//     })
//     .then(json => {
//       // Assuming findData function is defined elsewhere and accepts a token parameter
//       // console.log();
//       findData(json.token,json.response.name);

//     })
//     .catch(error => {
//       // console.error('Error fetching token:');
//       alert("Error!! Enter correct username and password",error)
//     });

// }




// let findData = function (a,name) {
//   fetch("https://abes.platform.simplifii.com/api/v1/custom/getCFMappedWithStudentID?embed_attendance_summary=1", {
//     method: "GET",
//     headers: {
//       "Authorization": `Bearer ${a}`,
//     },
//     referrer: "https://abes.web.simplifii.com/",
//     referrerPolicy: "strict-origin-when-cross-origin",
//     mode: "cors",
//     // credentials: "include"
//   })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.json();
//     })
//     .then(json => {
//       findAttendance(json,name);

//     })
//     .catch(error => {
//       console.error('Error fetching data:', error);
//     });
// }







// let findAttendance = function (a,name) {
//   let attendance=a.response.data[18].attendance_summary.Percent
//   // updatePieChart(attendance,100-attendance );
//   console.log(attendance)
//   alert(`Hello, ${name} \nYour attendance is ${attendance}`)


// }

// // Function to set the size of each slice dynamically
// function setSliceSize(sliceElement, angle) {
//   sliceElement.style.clip = `rect(0, 200px, 200px, ${angle > 180 ? '100px' : '0'})`;
// }

// // Function to update pie chart with given values
// function updatePieChart(value1, value2) {
//   const total = value1 + value2;
//   const angle1 = (value1 / total) * 360;
//   const angle2 = (value2 / total) * 360;

//   // Update slice sizes
//   const slice1 = document.getElementById('slice1');
//   const slice2 = document.getElementById('slice2');
//   setSliceSize(slice1, angle1);
//   setSliceSize(slice2, angle2);
// }

// Example usage:
 
















// generateToken("2022b1531039","tanuj.1234")



//TOKENS
// eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjU4ODQ0MjMsImlzcyI6Imh0dHBzOi8vYWJlcy5wbGF0Zm9ybS5zaW1wbGlmaWkuY29tL2FwaS92MS9hZG1pbi9hdXRoZW50aWNhdGUiLCJpYXQiOjE3MTg0NzIzMTIsImV4cCI6MTc3ODk1MjMxMiwibmJmIjoxNzE4NDcyMzEyLCJqdGkiOiJpQXpTVG1EcGFEakNLR0R3In0.g8D3yLPj-1OZJq0SrLX98KavUtGqhpCH_gnjGDS7Y1Y



//eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjU4ODQ0MjMsImlzcyI6Imh0dHBzOi8vYWJlcy5wbGF0Zm9ybS5zaW1wbGlmaWkuY29tL2FwaS92MS9hZG1pbi9hdXRoZW50aWNhdGUiLCJpYXQiOjE3MTg1MjgxMDUsImV4cCI6MTc3OTAwODEwNSwibmJmIjoxNzE4NTI4MTA1LCJqdGkiOiJKaGJUWEF5ajY5eTRVdVk2In0.MNMeY4IicvyITh3kYFXsmFpn_uztlO7cKSsfpSOsScA



// const express = require('express');
// const cors = require('cors');

// const app = express();

// const corsOptions = {
//   origin: 'http://127.0.0.1:5500',
//   credentials: true  // Enable credentials support
// };

// app.use(cors(corsOptions));

// Your API routes and other middleware setup


//function that return attendance summary



