let findBmi = ()=> {
    var inpHeight = Math.pow(document.getElementById("height").value,2); 
    var inpWeight = document.getElementById("weight").value; 
    document.getElementById("outLabel").innerHTML="Your Bmi is:" + inpWeight/inpHeight;
}