const empty=[1,2,3,1,3,2,2,3,1,2,3,1,2,3,3,2,1,2,3,1,3,1,2,2,3,3,2,1,1,2,3,1,2,3,3,1,2,3,1];
let counter=empty.length;
for(let j=0;j<empty.length;j++){
 for(let i=0;i<empty.length;i++){
  if(empty.at(i)==empty.at(i+1)){
     counter=counter+1;
}
}
}