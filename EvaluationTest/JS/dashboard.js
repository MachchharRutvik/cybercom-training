let adminName = JSON.parse(localStorage.getItem("admin")).name;
document.getElementById("nameOfAdmin").innerHTML= adminName;
console.log(adminName);

let data =  JSON.parse(localStorage.getItem("user"));

let showNumberOfUsers = () =>{
    // let currentDate = new Date();
    const date = new Date();
let day = date.getDate();
let month = date.toLocaleString("default", { month: "2-digit" });
let year = date.getFullYear();
let currentDate = `${year}-${month}-${day}`;
// console.log(currentDate); 
let counter1=0,counter2=0,counter3=0;

for(let i=0;i<data.length;i++){
    console.log(currentDate);
    // console.log(data[4].birthdate)
    if(data[i].age<18){
            counter1++;
        }
        if(data[i].age>18 && data[i].age<50){
            counter2++;
        }
        if(data[i].age>50){
            counter3++;            
        }
        if(currentDate == data[i].birthdate){
            document.getElementById(id="bdayText").innerHTML="Today is "+data[i].name+"'s Birthday"
        }

    }
    document.getElementById("ageLessEighteen").innerHTML = counter1;
    document.getElementById("ageEighteenToFifty").innerHTML= counter2;
    document.getElementById("ageGreaterFifty").innerHTML=counter3;
    
    
}
showNumberOfUsers();

