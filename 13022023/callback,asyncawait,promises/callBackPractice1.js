function first(secondFunction){

   
    setTimeout(()=>{
        console.log("First Function started Executing")
        secondFunction(thirdFunction);
    },10000);
}
function secondFunction(thirdFunction){
    
setTimeout(()=>{
    console.log("Second Function started Executing")
    thirdFunction();
},10000);
}
function thirdFunction(){
    setTimeout(()=>{
        console.log("third Function started Executing")
       
    },8000);
}
first(secondFunction);