
function sum(numbers){
     let answer=0;
     for(const n of  numbers){
          answer=answer+n;
     }
     return answer;
}
console.log(sum([1, 2, 3, 4, 5]));