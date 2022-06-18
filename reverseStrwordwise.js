const str = "Rohit Kumar";
let strrev="";
function revstr(str){
  
  let strarr = str.split(" ").reverse();
  let n = strarr.length;
  
  for(let i=0;i<n;i++) {
    
    var tempstr=strarr[i];
    
     for(let j=tempstr.length-1;j>=0;j--){
        strrev += tempstr.charAt(j);
     }
    strrev +=" ";
  }
  
  return strrev;
   
}

console.log(revstr(str));
