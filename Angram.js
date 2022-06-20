let strs=['ate',
'bat','tan','ant','nat','tea'];

let Op = [['ate','tea'], ['bat'],['tan','ant','nat']]




function Angram(str){

    let map={};
let result=[];
    for(let items of str){

        let key=0;
        
       for(let char of items){
            key += char.charCodeAt();
           console.log("Items-",items,"Char-",char);
            console.log(key);
       } 


        if(map[key]){
            map[key].push(items);
        }else {
            map[key]=[items];
        }

    }
// console.log(map);

result= Object.values(map);

return result;

}


console.log(Angram(strs));