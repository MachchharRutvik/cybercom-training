
document.getElementById("registerBtn").onclick = function () {
  location.href = "registration.html";
};

let adminDetails = JSON.parse(localStorage.getItem("admin"));
let userDetails = JSON.parse(localStorage.getItem("user"));
console.log(userDetails)

document.getElementById("loginBtn").onclick = function (){
    let adminEmail = document.getElementById("email").value;
    let adminPassword = document.getElementById("password").value;
    

    
    console.log(adminEmail,adminPassword);
    if(adminEmail===adminDetails.email && adminPassword === adminDetails.password ){
      location.href = "dashboard.html"
    }
    else {

          document.getElementById("err").innerHTML="Please Enter valid admin details";
          document.getElementById("err").style.color="red";
          document.getElementById("err").style.display="block";
          document.getElementById("err").style.fontSize="12px";

      }
      for(let i=0;i<userDetails.length;i++){
        if( adminEmail === userDetails[i].email && adminPassword === userDetails[i].password){
          // location.href = "userDashboard.html";
          sessionStorage.setItem("user",JSON.stringify(userDetails[i]));
  
          let sessionObj = {
            BirthDate:userDetails[i].birthdate,
            name:userDetails[i].name,
            date:new Date().toLocaleDateString(),
            time:new Date().toLocaleTimeString()
          }
          sessionStorage.setItem("session",JSON.stringify(sessionObj))
          location.href = "userDashboard.html"
          
        }
    }
    
    
  
  }
