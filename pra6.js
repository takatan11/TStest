function aboveAverage(students) {
  let tmp=0;
  let avr=0;
     for(const n of students){
      tmp+=n.score;
     }
     avr=tmp/students.length;
  return students.filter(n=>{return n.score>=avr;}).map(n=>n.name);
  if(students.length===0){
    return [];
  }
}
// 動作例
const data1 = [
  { name: "Alice", score: 80 },
  { name: "Bob", score: 60 },
  { name: "Carol", score: 90 },
  { name: "Dave", score: 50 }
];
console.log(aboveAverage(data1));
// ["Alice", "Carol"]  ※平均は70点

const data2 = [
  { name: "Eve", score: 100 },
  { name: "Frank", score: 100 }
];
console.log(aboveAverage(data2));
// ["Eve", "Frank"]  ※全員が平均（100）

console.log(aboveAverage([]));
// []