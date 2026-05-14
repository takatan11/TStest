function checkPasswordStrength(password) {
     let concider=5;
     if(password.length<8){
        concider=concider-1;
     }
     if(password===password.toUpperCase()){
          concider=concider-1;
     }
     if(password===password.toLowerCase()){
          concider=concider-1;
     }
}

// 動作例
console.log(checkPasswordStrength("abc"));           // "weak"
console.log(checkPasswordStrength("abcdefgh"));      // "medium"
console.log(checkPasswordStrength("abcdef12"));      // "medium"
console.log(checkPasswordStrength("Abcdef12"));      // "strong"
console.log(checkPasswordStrength("Abcdef12!"));     // "very strong"
console.log(checkPasswordStrength(""));              // "weak"