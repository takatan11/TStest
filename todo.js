// まだ実装できていないもの：終了したタスクを表示しないようにする、タスクを削除する
// ファイルの読み込み動作を実装できていない。listで表示する内容はファイルからとってきた内容を表示する
// 連番で一意のIDふっておかないと削除やdoneの処理やりにくそう
//配列で情報を保存するように変更する

import fs from 'fs';

function Input(){  //　inputされた内容を受け取る
      let input = process.argv;   // 普通に代入   
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
      
      const command=userInput[2];
      const comment=userInput[3];
      const lastId = tasks.length > 0 ? tasks[tasks.length - 1][0] : 0;   // 最後のタスクのID（配列の0番目。まだ無ければ0）
      switch(userInput[2]){
      case "add":
      tasks.push([lastId+1,comment,"doing"]);
      console.log(`コマンド：${command}`);
     console.log(`内容:${comment}`);
     fs.writeFileSync('tasks.json',JSON.stringify(tasks,null,2),'utf-8');
     console.log("------------------");
     console.log("Todoを保存しました");
     console.log("------------------");
     break;

      case "list":
            const doing=tasks.filter(arr=>arr.includes("doing"));
            console.log("==============================");
            console.log("  残っているタスク");
            console.log("==============================");
            if(doing.length === 0){
                  console.log("  タスクはありません🎉");
            } else {
                  for(let i=0;i<doing.length;i++){
                        console.log(`  [${doing[i][0]}] ${doing[i][1]}`);
                  }
            }
            console.log("==============================");
            break;
      case "done": {
            const target = tasks.find(t => t[0] === Number(comment));   // idが一致するタスクを探す
            if (!target) {                                              // 見つからなければエラー
                  console.log("そのIDのタスクは見つかりませんでした");
                  break;
            }
            target[2] = "done";                                         // 状態を done に書き換える
            fs.writeFileSync('tasks.json', JSON.stringify(tasks, null, 2), 'utf-8');  // ファイルに保存
            console.log("タスクを終了しました。お疲れさまでした。");
            break;
      }

            console.log("エラー：有効なコマンドを入力してください。");
            break;
      
}
}


function main(){
      //ここの解説をAIに要求して理解しておくこと
     console.log("CLIで動くToDoリストへようこそ");

     work(Input());

}


main();