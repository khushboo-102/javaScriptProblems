function reverseExtraSpaces(str){
    let nstr = ""
    // let newStr = ""
    for(let i = 0; i<str.length; i++){
        if(str[i] !== " "){
            nstr += str[i]
          }else if(str[i-1] != " "){
            nstr += str[i]
          }
    }
    return nstr;

  }
console.log(reverseExtraSpaces("I   Love Dogs"));
console.log(reverseExtraSpaces("you            like  coding"));