function mostFrequentChar(str) {
  const count = {};
  let maxcount=0;
  let maxchar="";
  for (const n of str) {
    if (count[n] === undefined) {
      count[n] = 1;
    } else {
      count[n] = count[n] + 1;
    }
  }
  for(const l in count){
     if(count[l]>maxcount){
          maxchar=l;
          maxcount=count[l];
     }
  }
  return maxchar;  // 仮置き
}

console.log(mostFrequentChar("hello"));