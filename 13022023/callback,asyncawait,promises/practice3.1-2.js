let first =()=>{
    return new Promise((response,reject)=>{
setTimeout(()=>{
    response("output from one")
},5000)
    });
};
let second =()=>{
    return new Promise((response,reject)=>{
setTimeout(()=>{
    response("output from second")
},10000)
    });
};
let third =()=>{
    return new Promise((response,reject)=>{
setTimeout(()=>{
    response("output from third")
},15000)
    });
};
first().then((data)=>{console.log(data)
second().then((data)=>{console.log(data)
third().then((data)=>{console.log(data)})})}).catch((err)=>{console.log(err)})