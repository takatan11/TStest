function groupByLength(words) {
   function groupByLength(words) {
      const result = {};
      for (const w of words) {
          const len = w.length;
          if(result[len]===undefined){
               result[len].push([]);
          }
          result[len].push(w);
      }
      return result;
  }
}

// 動作例
console.log(groupByLength(["cat", "dog", "elephant", "ant", "bear", "ox"]));
// {
//   2: ["ox"],
//   3: ["cat", "dog", "ant"],
//   4: ["bear"],
//   8: ["elephant"]
// }

console.log(groupByLength(["a", "bb", "ccc", "dd"]));
// {
//   1: ["a"],
//   2: ["bb", "dd"],
//   3: ["ccc"]
// }