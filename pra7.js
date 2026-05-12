function top3Words(sentence) {
  const count = {};
  const words = sentence.split(" ");
  
  // 第1段階: 全単語を数え終える
  for (const w of words) {
    if (count[w] === undefined) {
      count[w] = 1;
    } else {
      count[w] += 1;
    }
  }
  
  // 第2段階: ソートして上位3つを返す
  return Object.entries(count)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(pair => pair[0]);
}
// 動作例
console.log(top3Words("the quick brown fox jumps over the lazy dog the fox"));
// ["the", "fox", "quick"]
// the: 3回, fox: 2回, quick/brown/jumps/over/lazy/dog: 各1回

console.log(top3Words("apple banana apple cherry banana apple"));
// ["apple", "banana", "cherry"]
// apple: 3回, banana: 2回, cherry: 1回

console.log(top3Words("hello"));
// ["hello"]