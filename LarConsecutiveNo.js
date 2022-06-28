// Largest Sum Of Consecutive No.

let Ip =[ -2, -3, 4, -1, -2, 1, 5, -3  ];
 let Op= 7 ;let consNo = 5

 function maxSumofCons (numsArr  ){

    let maxsum =0;

    for(let i=0 ; i<numsArr.length-5+1 ; i++){

//1.st Way-----
//  if(max<(numbers[i+0]+numbers[i+1]+numbers[i+2]+numbers[i+3])){
        //  max=numbers[i+0]+numbers[i+1]+numbers[i+2]+numbers[i+3]
        //  }


    //2nd Way-------------------
        let tempSum =0 ;

        for(let j=0; j<5 ; j++){
            tempSum += numsArr[i+j]   
            console.log("Temp",tempSum);
            if(maxsum<tempSum){
                maxsum=tempSum;
    console.log("Max",maxsum);
            }
        }

    }

 return maxsum;

 }
console.log(maxSumofCons(Ip))