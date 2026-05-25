/* まだ実装できていないもの：終了したタスクを表示しないようにする、タスクを削除する
ファイルの読み込み動作を実装できていない。listで表示する内容はファイルからとってきた内容を表示する
連番で一意のIDふっておかないと削除やdoneの処理やりにくそう
*/

import fs from 'fs';

function Input(){  //　inputされた内容を受け取る
      let input = 0;
      input = process.argv;   // 普通に代入   
      return input; //配列
  }
function work(userInput){  //打ち込まれたコマンドに合わせて適切な処理を行うようにする
      let tasks = [];
      try {
      const raw = fs.readFileSync("tasks.json", "utf-8");//jsonから情報とってくる
      tasks = JSON.parse(raw);
} catch (e) {
      tasks = [];  // ファイルが無い初回はここに来る
}
      const command=Input()[2];
      const comment=Input()[3];
      const lastId = tasks.length > 0 ? tasks[tasks.length - 1].id : 0;   // 最後のタスクのID（まだ無ければ0）

      if(userInput==="add"){
      tasks.push({
            id: lastId + 1,          // 前回のIDに +1（順番に振る）
            tasks:comment,
            savedAt:new Date().toISOString()
      });
      console.log(`コマンド：${command}`);
     console.log(`内容:${comment}`);
     fs.writeFileSync('tasks.json',JSON.stringify(tasks,null,2),'utf-8');
     console.log("------------------");
     console.log("Todoを保存しました");
     console.log("------------------");
      }

      else if(userInput==="list"){
            console.log(`コマンド：${command}`);
            console.log(tasks); //jsonから読み込んできた内容を表示するから、Input()は使用しない
      }

      else if(userInput=="done"){


      }
      
      else if(userInput=="delete"){

      }

      else{
            console.log("エラー：有効なコマンドを入力してください。");
      }
}
function main(){
      //ここの解説をAIに要求して理解しておくこと
     console.log("CLIで動くToDoリストへようこそ");

     work(Input()[2]);

}
main();