let nums = [1, 2, 2];
let ans = [[]];
let partOfNums = [],
  n = 0;

while (n < nums.length) {
  for (let i = 1; i <= nums.length; i++) {
    for (let j = n; j < i; j++) {
      if (j < nums.length) {
        partOfNums.push(nums[j]);
      }
    }
    if (!ans.includes(partOfNums)) {
      ans.push(partOfNums);
    }
    partOfNums = [];
  }
  n++;
}

const uniqueArrayOfArrays = [...new Set(ans.map(JSON.stringify))].map(
  JSON.parse
);
console.log(uniqueArrayOfArrays);
