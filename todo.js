function Input(){
      let input = 0;
      input = process.argv;   // 普通に代入   
      return input;
  }
function main(){
      console.log("CLIで動くToDoリストへようこそ");
     let command=Input()[2];
     console.log(`コマンド:${command}`);
     let comment=Input()[3];
     console.log(`タスク内容:${comment}`);
}
main();