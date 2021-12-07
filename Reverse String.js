var str="Share Javascript code online using";
var strArr = str.split(" ");

var revStr = "";

for(let i=0;i<strArr.length;i++) {
    var x = strArr[i];
    
    var charArr=x.split("").reverse();
    var charStr="";
    
    for(let j=0;j<charArr.length;j++){
      
      charStr += charArr[j];
     
    }
    
    revStr += charStr + " ";
}

console.log(revStr);
