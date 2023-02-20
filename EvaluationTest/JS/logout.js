// let sessionObj = JSON.parse(sessionStorage.getItem("session"));
// // sessionObj.logOutDate = new Date().toLocaleDateString();
// // sessionObj.logOutTime = new Date().toLocaleTimeString();
// console.log(sessionObj.name);
// // LocalStorage.setItem("sessionObj",JSON.stringify(sessionObj));



document.getElementById("logoutBtn").onclick = function(){
let sessionObj = JSON.parse(sessionStorage.getItem("session"));
sessionObj.logOutDate = new Date().toLocaleDateString();
sessionObj.logOutTime = new Date().toLocaleTimeString();
// console.log(sessionObj)
let sessionArray = [];
if(localStorage.getItem("sessionArray") && localStorage.getItem("sessionArray").length>0){
    let userObj =  {
        name:sessionObj.name,
        loginTime:sessionObj.time,
        loginDate:sessionObj.date,
        logOutDate: sessionObj.logOutDate,
        logOutTime:sessionObj.logOutTime,
    };
    let oldUserObj=JSON.parse(localStorage.getItem("sessionArray"));
    oldUserObj.push(userObj);
    localStorage.setItem("sessionArray", JSON.stringify(oldUserObj));
        
}
else{
    let userObj =  {
        name:sessionObj.name,
        loginTime:sessionObj.time,
        loginDate:sessionObj.date,
        logOutDate: sessionObj.logOutDate,
        logOutTime:sessionObj.logOutTime,
    }

    sessionArray.push(userObj);
    localStorage.setItem('sessionArray',JSON.stringify(sessionArray));
    // sessionStorage.removeItem("session");
}
}
