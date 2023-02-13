function decodeWays(s) {
  if (s.length === 0 || s[0] === "0") return 0;
  let first = 1;
  let second = 1;
  let curr = 0;
  for (let i = 1; i < s.length; i++) {
    if (s[i] === "0") {
      if (s[i - 1] > "2") return 0;
      curr = 0;
    } else if (s[i - 1] === "1" || (s[i - 1] === "2" && s[i] <= "6")) {
      curr = first + second;
    } else {
      curr = second;
    }
    first = second;
    second = curr;
  }
  return curr;
}

let str = "22612";
console.log(decodeWays(str));
