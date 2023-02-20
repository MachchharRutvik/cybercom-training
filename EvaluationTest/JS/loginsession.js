let adminName = JSON.parse(localStorage.getItem("admin")).name;
document.getElementById("nameOfAdmin").innerHTML= adminName;
console.log(adminName);

let sessionArray = JSON.parse(localStorage.getItem("sessionArray"));
// console.log(sessionArray[1].name);
let table = document.getElementById("userSessionLogsTable");
for(let i=0;i<sessionArray.length;i++){
table.innerHTML+=`
<td>${sessionArray[i].name}</td>
<td>${sessionArray[i].loginDate}</td>
<td>${sessionArray[i].loginTime}</td>
<td>${sessionArray[i].logOutDate}</td>
<td>${sessionArray[i].logOutTime}</td>
`

}



