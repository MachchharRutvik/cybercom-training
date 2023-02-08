let height = [1,8,6,2,5,4,8,3,7];
findMaxArea(height);

function findMaxArea(array){
 let leftSide=0;
 let rightSide=array.length-1;
 let maxArea = 0;

 while(leftSide<rightSide){
    let area = Math.min(array[leftSide],array[rightSide])*(rightSide-leftSide);
    maxArea = Math.max(area,maxArea);
    if(array[leftSide]<array[rightSide]){
        leftSide++;
    }
    else{
        rightSide--;
    }
 }
 console.log(maxArea);
}