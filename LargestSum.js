//Maximum Sum of Subarray  Solution

let Input=[-2,1,-3,4,-1,2,1,-5,4];
let Output= 6;

function maxSumSubArr( numsArr){

    let currSum =0;
    let maxSum = -Infinity;

for(let i=0; i<numsArr.length ; i++){
  currSum = Math.max(numsArr[i], 
            currSum+numsArr[i]);
  maxSum= Math.max(currSum,maxSum);

    }

return maxSum;

}
console.log(maxSumSubArr(Input));








