

let userObj = JSON.parse(sessionStorage.getItem("session"));
document.getElementById("nameOfAdmin").innerHTML = userObj.name;
let todayDate = new Date().toLocaleDateString()
console.log(userObj.name)
console.log(userObj.BirthDate)
console.log(todayDate);

if(userObj.birthdate == new Date().toLocaleDateString()){

    document.getElementById("happyBirthdayText").innerHTML="Happy Birthday"
}