var userData = JSON.parse(localStorage.getItem('userData'));
var dept = localStorage.getItem('department');
var att = localStorage.getItem('Attendance');
document.querySelector('#msg').innerText=`Heyy!! ${userData.response.name},${'\n'}You have ${(Math.floor(8-Math.round((parseInt(parseFloat(att))*0.08))))*5} Bunks this Week`
// console.log(userData);
document.querySelector('#dept_sec').innerHTML=`${dept} - ${userData.response.string5}`
document.querySelector('#mail').innerHTML=userData.response.email
document.querySelector('#mobNo').innerHTML=userData.response.mobile
document.querySelector('#adminNo').innerHTML=userData.response.username
document.querySelector('#rollNo').innerHTML=userData.response.string4
document.querySelector('#lastLoginTime').innerHTML=userData.response.last_login_time
document.querySelector('#role').innerHTML=userData.response.role
document.querySelector('#pin').innerHTML=userData.response.string10
document.querySelector('#name').innerHTML=userData.response.name
document.querySelector('#passingYear').innerHTML=userData.response.int6
document.querySelector('#term').innerHTML=`Year : ${userData.response.int3} Sem : ${userData.response.int4}`