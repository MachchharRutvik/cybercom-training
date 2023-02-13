const res = require("express/lib/response");

let ipAddress = "25525511135";
checkIpAddress(ipAddress);

function checkIpAddress(ipAddress){
let length = ipAddress.length;
let result = [];
let s1=''
let s2=''
let s3=''
let s4=''

for(let i=1;i<=3;i++)
{
    for(let j=1;j<=3;j++)
    {
        for(let k=1;k<=3;k++)
        {
            for(let m=1;m<=3;m++){
                s1=ipAddress.substr(0,i);
                s2=ipAddress.substr(i,j);
                s3=ipAddress.substr(i+j,k);
                s4=ipAddress.substr(i+j+k,m);
            }
            if(i+j+k+m===length && isValid(s1)&& isValid(s2)&& isValid(s3)&& isValid(s4)){
                result.push(s1 + '.' + s2 + '.' + s3 + '.' + s4);
            }
        }
    }
   
}
return result;
}
function isValid(string){
    if (string.length > 1 && string[0] === '0') return false;
    if (Number(string) > 255) return false;
    return true;
}