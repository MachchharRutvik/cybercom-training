let first =()=>{
    return new Promise((response,reject)=>{
        response("first function started executing")
setTimeout(()=>{
},10000)
    });
};
let second =()=>{
    return new Promise((response,reject)=>{
setTimeout(()=>{
    response("second function started executing")
},10000)
    });
};
let third =()=>{
    return new Promise((response,reject)=>{
setTimeout(()=>{
    response("third function started executing")
},8000)
    });
};
first().then((data)=>{console.log(data)
second().then((data)=>{console.log(data)
third().then((data)=>{console.log(data)})})}).catch((err)=>{console.log(err)})