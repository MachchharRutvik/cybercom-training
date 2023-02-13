let inputString = "<html><head></head><div><input/></div><body></body></html>";
let strLength = inputString.length;
firstIndex = 0;
lastIndex = 0;
var arrOfTagText = [];

while (strLength != 0) {
  strLength = inputString.length;
  var firstIndex = inputString.indexOf("<");
  var lastIndex = inputString.indexOf(">");
  let tagText = inputString.substring(firstIndex + 1, lastIndex);

if(tagText[tagText.length-1]=='/')
{

} 
else if (tagText[0] == "/") {
    subStringOfTag = tagText.slice(1);
    if (arrOfTagText.find((e) => e === subStringOfTag)) {
      arrOfTagText.pop();
    } else {
      arrOfTagText.push(tagText);
    }
  }  else {
    arrOfTagText.push(tagText);
  }
  inputString = inputString.slice(lastIndex + 1);
}
if (arrOfTagText.length == 1) {
  console.log("valid");
} else {
  console.log("invalid");
}
