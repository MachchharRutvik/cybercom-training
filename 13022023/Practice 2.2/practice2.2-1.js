
let que = "";
let ans = 0;

let inp = document.getElementById("input");
const math=
{ 
    addToArray:addToArray = (value) => {
  inp.value += value;
  console.log(inp.value);
},

 resFun: resFun = () => {
  inp.value = eval(inp.value);
},

 clearFun:clearFun = () => {
  inp.value = "";
}}