let saveDetails=()=> {
    let email = document.getElementById("email").value;
    let fname= document.getElementById("fname").value;
    let lname= document.getElementById("lname").value;
    let mobile = document.getElementById("mobile").value;

    let myPromise=new Promise((resolve, reject) => {

        if (fname!="" && lname!="" && /[^\s@]+@[^\s@]+\.[^\s@]+/gi.test(email) && /^(\+\d{1,3}[- ]?)?\d{10}$/ .test(mobile)){
            resolve("valid");
        }
        else{
            reject("invalid")
        }})
      
        myPromise
        .then((data) => {
            console.log(data)
        })
        .catch((err) => {
            console.log(err);
        })
}
