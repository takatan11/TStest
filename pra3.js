function filterEven(numbers){
     let answer=[];
     for(const n of numbers){
          if (n%2==0){
               answer.push(n);
          }
     }
     return answer;
}
console.log(filterEven([1,2,3,4,5,6]));