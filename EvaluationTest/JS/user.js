let adminName = JSON.parse(localStorage.getItem("admin")).name;
document.getElementById("nameOfAdmin").innerHTML= adminName;
console.log(adminName);

let id = Math.floor(Math.random() * 10000);


function addUser(){
let userName = document.getElementById("name").value;
let userEmail = document.getElementById("email").value;
let userPassword = document.getElementById("password").value;
let userBirthDate = document.getElementById("birthDate").value;


//calculation of user age
let dob = new Date(userBirthDate);
let difference = Date.now()-dob;
let age = new Date(difference);
let userAge = Math.abs(age.getUTCFullYear()-1970);
// console.log(id);

    let userArray=[];
  if (localStorage.getItem("user") && localStorage.getItem("user").length>0)     {

    let user = {
      name: userName,
      email: userEmail,
      password: userPassword,
      birthdate: userBirthDate,
      age : userAge,
      id:id
    };
    let oldUser = JSON.parse(localStorage.getItem("user"));

    oldUser.push(user);
    if (userName && userEmail && userPassword && userBirthDate) {
        localStorage.setItem("user", JSON.stringify(oldUser));
        
    }
    
  }
  else{
    let user = {
        name: userName,
        email: userEmail,
        password: userPassword,
        birthdate: userBirthDate, 
        age:userAge,
        id:id
    }
    userArray.push(user);
    localStorage.setItem('user',JSON.stringify(userArray));
  }
  
}
function showDataTable(){
  let dataToShow = JSON.parse(localStorage.getItem("user"));
  console.log(dataToShow);
  for(let i=0;i<dataToShow.length;i++){
    let name = dataToShow[i].name;
    let email = dataToShow[i].email;
    let password = dataToShow[i].password;
    let birthdate = dataToShow[i].birthdate;
    let age = dataToShow[i].age;
    
    // let action = dataToShow[i].name;
    
    
    var table = document.getElementById("dataTable");
    var row = table.insertRow();
    row.insertCell(0).innerHTML = name;
    row.insertCell(1).innerHTML = email;
    row.insertCell(2).innerHTML = password;
    row.insertCell(3).innerHTML = birthdate;
    row.insertCell(4).innerHTML = age;
    row.insertCell(5).innerHTML = `<button onclick="editData(${dataToShow[i].id})"><a>Edit</a></button><button onclick="deleteData(${dataToShow[i].id})"><a>delete</a></button>`;
  }
}
showDataTable();
let update = (index) => {
  // console.log(index);
  let data = JSON.parse(localStorage.getItem('user'));
  data[index].name = document.getElementById("name").value;
  data[index].email = document.getElementById("email").value;
  data[index].password = document.getElementById("password").value;
  data[index].date = document.getElementById("birthDate").value;
  localStorage.setItem("user",JSON.stringify(data));
  // document.getElementById("addUserBtn").onclick((data) =>{
  //  ;
  // })
  

}
let editData = function(id){
  document.getElementById("heading").innerHTML = "Update user";
  document.getElementById("addUserBtn").innerHTML = "Update";
  
  let data = JSON.parse(localStorage.getItem('user'));
  let index;
  for(let i=0;i<data.length;i++){
    if(id === data[i].id){
     document.getElementById("name").value = data[i].name;    
     document.getElementById("email").value = data[i].email;    
     document.getElementById("password").value = data[i].password; 
     document.getElementById("birthDate").value = data[i].birthdate;
     document.getElementById("addUserBtn").setAttribute("onclick",`update(${i})`)   
    //  update(i);
     return true;
  
    }

    
    // console.log(data[i].name)
    
  }


}
function deleteData(id){
  let data = JSON.parse(localStorage.getItem('user'));
  console.log(id);
  for(let i=0;i<data.length;i++){
    if(id == data[i].id){
      data.splice(i,1);
      localStorage.setItem('user',JSON.stringify(data));
      location.reload();
    }
  }

}










// function validation()
// { if (userForm) {
  //    if (!userForm.name.value) {
//      document.getElementById("errMsgName").innerHTML = "Please Enter Name";
//      document.getElementById("errMsgName").style.display = "inline";
//      document.getElementById("errMsgName").style.color = "red";
//      document.getElementById("errMsgName").style.fontSize = "12px";
//    } else {
//      document.getElementById("errMsgName").style.display = "none";
//    }
//    if (!/[^\s@]+@[^\s@]+\.[^\s@]+/gi.test(document.getElementById("email").value)) {
//      document.getElementById("errMsgEmail").innerHTML =
//        "Please Enter valid Email address";
//      document.getElementById("errMsgEmail").style.display = "inline";
//      document.getElementById("errMsgEmail").style.color = "red";
//      document.getElementById("errMsgEmail").style.fontSize = "12px";
//    } else {
//      document.getElementById("errMsgEmail").style.display = "none";
//    }
//    var passw = /^[A-Za-z]\w{7,14}$/;
//    if (!document.getElementById("password").value.match(passw)) {
//      document.getElementById("errMsgPassword").innerHTML =
//        "Please Enter valid Password";
//      document.getElementById("errMsgPassword").style.display = "inline";
//      document.getElementById("errMsgPassword").style.color = "red";
//      document.getElementById("errMsgPassword").style.fontSize = "12px";
//    } else {
//      document.getElementById("errMsgPassword").style.display = "none";
//    }}
//    if (userName && userEmail && userPassword && userBirthDate) {
//      localStorage.setItem("user", JSON.stringify(user));
//    }
//  }
