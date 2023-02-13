function validateAllFields(displayAllFields) {
    let email = document.getElementById("email").value;
    let fname= document.getElementById("fname").value;
    let lname= document.getElementById("lname").value;
    let mobile = document.getElementById("mobile").value;
    if (/[^\s@]+@[^\s@]+\.[^\s@]+/gi.test(email) && /^(\+\d{1,3}[- ]?)?\d{10}$/ .test(mobile)) {
      
        displayAllFields(fname,lname,email,mobile);
    }
    else{
        alert("Invalid data")
    }

}
function displayAllFields(fname,lname,email,mobile) {
    console.log(fname,lname,email,mobile);
}



