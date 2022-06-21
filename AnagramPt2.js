


function findAnagramStr(str1,str2){

    let map={};

    for(let char of str1){

          map[char]= (map[char] || 0)  +1;

    }
    console.log("Completed Map",map)  ;


        for(let chars of str2){

                if(!map[chars]){
                    return false;
                }

               map[chars] -=1 ;
                  console.log(map)  ;
        }

return true;
}


console.log(findAnagramStr("ate","tea"));