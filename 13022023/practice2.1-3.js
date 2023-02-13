let objArray = [
    {id:1, name:"john", age:50},
    {id:2, name:"doe", age:40},
    {id:3, name:"Kathy", age:25}
    ]
    let inputAge = 25;
    let count = 0;
    let checkAge = objArray.filter((index) => {
        if(inputAge<index.age){
            count+=1;
        }
        return count;
    });
    console.log(count);