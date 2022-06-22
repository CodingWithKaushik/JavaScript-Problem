// Find string is Palindrome Or Not

function IsPalindrome(str){

    
    let strIpLowrCs= str.toLowerCase();
    let left= 0;
    let right = str.length-1;

    while(left < right){
        

        if(strIpLowrCs[left] !== strIpLowrCs[right]){
            return false;
        }

        left++;
        right--;
       
    }

return true;

}

console.log(IsPalindrome("Kaushik"));