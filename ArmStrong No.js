// Is ArmStrong Number


function isArmstrongNumber ( nums ){

        let lastNumber =0;
        let sum =0;
        let temNum = nums;

        while(temNum > 0){

            lastNumber = temNum%10 ;
            console.log("LastNo",lastNumber);
            sum += Math.pow(lastNumber, 3);
            console.log("Sum",sum);
            temNum = Math.floor(temNum/10) ;   
            console.log("Temp",temNum);

        }

      return  sum === nums;

}

console.log(isArmstrongNumber(370));
