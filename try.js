// let generateToken = function (u, p) {
//     // let Authentication=false;
//     fetch("https://abes.platform.simplifii.com/api/v1/admin/authenticate", {
//       "method": "POST",
//       "headers": {
//           "accept": "*/*",
//           "accept-language": "en-US,en;q=0.9,hi;q=0.8",
//           "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
//           "device_id": "device_id_here",
//           "sec-ch-ua": "\"Google Chrome\";v=\"125\", \"Chromium\";v=\"125\", \"Not.A/Brand\";v=\"24\"",
//           "sec-ch-ua-mobile": "?0",
//           "sec-ch-ua-platform": "\"Linux\"",
//           "sec-fetch-dest": "empty",
//           "sec-fetch-mode": "cors",
//           "sec-fetch-site": "same-site"
//       },
//       "referrer": "https://abes.web.simplifii.com/",
//       "referrerPolicy": "strict-origin-when-cross-origin",
//       "body": `username=${u}&password=${p}`,
//       "method": "POST",
//       "mode": "cors",
//       "credentials": "omit"
//   }).then((response) => response.json())
//   .then((json) => {console.log(json.token)
//     findData(json.token)
//     return json.token})
//   .catch(error => {
//     console.log(`ERROR : Authentication : ${error}`)
//     alert("Error!! Enter correct username and password", error);
// });
// }
let findData = function () {
    fetch("https://abes.platform.simplifii.com/api/v1/custom/getCFMappedWithStudentID?embed_attendance_summary=1", {
      "method": "GET",
      "headers": {
        "Authorization": `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjU4ODQ1NjMsImlzcyI6Imh0dHBzOi8vYWJlcy5wbGF0Zm9ybS5zaW1wbGlmaWkuY29tL2FwaS92MS9hZG1pbi9hdXRoZW50aWNhdGUiLCJpYXQiOjE3MTg5MDUwNTEsImV4cCI6MTc3OTM4NTA1MSwibmJmIjoxNzE4OTA1MDUxLCJqdGkiOiJLMkVEQ1JXWnZndXZxOExHIn0.Uht2Y3ZnzNFKCUH9XcJ4ZNzu5OrUxMB9lCTtvpFu3Jg`,
      },
      "referrer": "https://abes.web.simplifii.com/",
      "referrerPolicy": "strict-origin-when-cross-origin",
      "mode": "cors",
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(json => {
      let x = json.response.data.length
      console.log(json.response.data[x-1].attendance_summary.Percent)
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  }
  
  findData()
