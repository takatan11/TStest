import fs from 'fs';

let lines = fs.readFileSync("/dev/stdin","utf-8").split("\n");
console.log(lines[0])