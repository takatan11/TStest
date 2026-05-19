function toInitials(name) {
   if(name===""){
      return "";
   }
   const result=[];
   const words=name.split(" ");
 for(const n of words){
   result.push(n[0].toUpperCase());
 }
 return result;
}

console.log(toInitials("John Ronald Reuel Tolkien"));   // "J.R.R.T."
console.log(toInitials("Alice"));                        // "A."
console.log(toInitials("george orwell"));                // "G.O."
console.log(toInitials("steve jobs"));                   // "S.J."
                         // ""

//入力された文字列空欄で分割して配列に保存。
// 一つずつ取り出してばらばらにばらす。
// それぞれの要素の最初の一文字を取り出して新しい配列に保存