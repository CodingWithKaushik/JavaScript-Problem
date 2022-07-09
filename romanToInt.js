// Convert Roman Number To Integer

// M:1000,D:500,C:100,L:50,X:10,V:5,I:1

function RomantoInt(romanStr){
    
    let num = 0;
    let objRoman = {M:1000,D:500,C:100,L:50,X:10,V:5,I:1};

for(let i=0 ; i<romanStr.length ; i++){  
               
        if(objRoman[romanStr[i]] < objRoman[romanStr[i+1]]){
            num -= objRoman[romanStr[i]];
        }
        else{
            num += objRoman[romanStr[i]];
        }


}

return num;

}

console.log(RomantoInt("XVIII"))

