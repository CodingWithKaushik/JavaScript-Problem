//Write code for Last Non Repeating Char

let IpStr = "aagcddeeefchcgg" ; 



const findLastNonRpChar = (str) =>{

    let charMap = {}; 

    for(let char of str){
        charMap[char] = (charMap[char] || 0 ) +1;
    }
console.log("Map",charMap);
    for(let i=str.length-1 ; i>=0 ; i--){
console.log(str[i]);
        if(charMap[str[i]] === 1){
            return str[i];
        }
    }

}

console.log("Last Non Rp Char-",findLastNonRpChar(IpStr));