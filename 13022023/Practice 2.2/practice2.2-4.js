function calcAge() { 
    let dob = document.getElementById("dob").value;
    let birthDate = new Date(dob);
    var msDiff = Date.now() - birthDate;
    var age_dt = new Date(msDiff); 
    console.log(Math.abs(age_dt.getUTCFullYear() - 1970));
    document.getElementById("demo").innerHTML = Math.abs(age_dt.getUTCFullYear() - 1970)
   
}

