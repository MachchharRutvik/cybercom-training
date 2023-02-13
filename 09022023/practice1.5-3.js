let nums =   [7,8,9,11,12];
maxNumber = Math.max(...nums);  
for(var i=1;i<=maxNumber+1;i++){

    if(!nums.includes(i)){
        console.log(i);
        return;
    }
    
}

