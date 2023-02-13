let checkFunction = (stringCheck)=>{
    for (let i = 0; i < strLength/2; i++) {
        if(stringCheck[i]!==stringCheck[strLength - 1 - i]){
            return "not Palindrome"
        }
    }
    return "palindrome";
}
let stringCheck = "abcba";
var strLength=stringCheck.length;
let value = checkFunction(stringCheck);
console.log(value);