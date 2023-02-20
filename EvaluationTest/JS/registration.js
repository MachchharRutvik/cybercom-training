if(localStorage.getItem("admin")){
    document.getElementById("registerBtn").style.display="none"
    document.getElementById("adminExists").innerHTML="Admin already exists Please go to login page";
    document.getElementById("adminExists").style.display = "block";
    document.getElementById("adminExists").style.color = "red";
    document.getElementById("adminExists").style.fontSize = "12px";
    document.getElementById("loginBtn").style.display = "block";


}


let adminDetails="";
document.getElementById("registerBtn").onclick = function () {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let name = document.getElementById("name").value;

  if (registrationForm) {
    if (!registrationForm.name.value) {
      document.getElementById("errName").innerHTML = "Please Enter Name";
      document.getElementById("errName").style.display = "block";
      document.getElementById("errName").style.color = "red";
      document.getElementById("errName").style.fontSize = "12px";
    } else {
      document.getElementById("errName").style.display = "none";
    }
    if (!registrationForm.email.value) {
      document.getElementById("errEmail").innerHTML = "Please Enter Email";
      document.getElementById("errEmail").style.display = "block";
      document.getElementById("errEmail").style.color = "red";
      document.getElementById("errEmail").style.fontSize = "12px";
    } else {
      document.getElementById("errEmail").style.display = "none";
    }
    if (
      !/[^\s@]+@[^\s@]+\.[^\s@]+/gi.test(document.getElementById("email").value)
    ) {
      document.getElementById("errEmail").innerHTML =
        "Please Enter valid Email address";
      document.getElementById("errEmail").style.display = "block";
      document.getElementById("errEmail").style.color = "red";
      document.getElementById("errEmail").style.fontSize = "12px";
    } else {
      document.getElementById("errEmail").style.display = "none";
    }
    var passw = /^[A-Za-z]\w{7,14}$/;
    if (!document.getElementById("password").value.match(passw)) {
      document.getElementById("errPassword").innerHTML =
        "Please Enter valid Password";
      document.getElementById("errPassword").style.display = "block";
      document.getElementById("errPassword").style.color = "red";
      document.getElementById("errPassword").style.fontSize = "12px";
    } else {
      document.getElementById("errPassword").style.display = "none";
    }
    if (
      !registrationForm.confirmPassword.value ||
      document.getElementById("password").value !=
        document.getElementById("confirmPassword").value
    ) {
      document.getElementById("errConPassword").innerHTML =
        "Please Enter Same Password";
      document.getElementById("errConPassword").style.display = "block";
      document.getElementById("errConPassword").style.color = "red";
      document.getElementById("errConPassword").style.fontSize = "12px";
    } else {
      document.getElementById("errConPassword").style.display = "none";
    }
     adminDetails = {
      email: email,
      password: password,
      name:name
    };
    localStorage.setItem("admin", JSON.stringify(adminDetails));
    // document.getElementById("registerBtn").onclick = function () {
      location.href = "login.html";
    // };

   
  }
};
function enableRegister() {
  if (!document.getElementById("termsCondition").checked) {
    document.getElementById("registerBtn").disabled = true;
  } else {
    document.getElementById("registerBtn").disabled = false;
  }
}
