// Function to retrieve saved credentials from localStorage
function getSavedCredentials() {
  var savedUsername = localStorage.getItem('username');
  var savedPassword = localStorage.getItem('password');
  return {
    username: savedUsername,
    password: savedPassword
  };
}

var userData;
var dept;
var attendance
// Function to generate token
let generateToken = function (u, p) {
  let Authentication=false;
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
  }).then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
    
  })
  .then(json => {
    Authentication=true;
    console.log(`Authentication : ${Authentication}`)
    userData=JSON.stringify(json)
    localStorage.setItem('userData', userData);
    findAttendance(json.token);
  })
  .catch(error => {
    console.log(`Authentication : ${Authentication}`)
    alert("Error!! Enter correct username and password", error);
  });
}

// Function to find data
let findAttendance = function (token) {
  fetch("https://abes.platform.simplifii.com/api/v1/custom/getCFMappedWithStudentID?embed_attendance_summary=1", {
    "method": "GET",
    "headers": {
      "Authorization": `Bearer ${token}`,
    },
    "referrer": "https://abes.web.simplifii.com/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "mode": "cors",
  })
    .then(response => {
      return response.json();
    })
    .then(json => {
      dept = json.response.data[0].dept
      localStorage.setItem('department', dept);
      let x = json.response.data.length
      attendance = json.response.data[x - 1].attendance_summary.Percent
      console.log(attendance)
      localStorage.setItem('Attendance', attendance);
      updatePieChart(parseFloat(attendance))
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}

// Function to update pie chart
let updatePieChart = function (attendance) {
  const chart = document.getElementById('chart');
  // Remove the animation class
  chart.classList.remove('animate');

  // Set the value and trigger reflow to reset the animation
  chart.style.setProperty('--p', attendance);

  void chart.offsetWidth;

  // Re-add the animation class to trigger the animation
  chart.classList.add('animate');
  setTimeout(function () {
    chart.textContent = `${attendance}%`
    //your code to be executed after 1 second
  }, 700);


  // return attendance;
}

// Load saved credentials on page load
window.addEventListener('load', function () {
  let savedCredentials = getSavedCredentials();
  generateToken(savedCredentials.username, savedCredentials.password);

});




let percentage=document.getElementById('chart')
percentage.onmouseenter=function(){
  percentage.style.color="black"
  percentage.style.fontSize='8px'
  percentage.innerHTML=`Easy ${(Math.floor(8-Math.round((parseInt(attendance)*0.08))))*5} Bunks this week`
}
percentage.onmouseleave=function(){
  percentage.innerHTML=attendance
  percentage.style.fontSize='25px'
  percentage.style.color="black"
}







// https://youtu.be/2DV-bONIPqQ?si=cyYt-pcWgmoCx4vX




