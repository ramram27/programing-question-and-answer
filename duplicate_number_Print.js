
var arr = [2,3,1,5,,3,2];

var n=arr.length;

var mp=new Map();

for(let i=0;i<n;i++) {
  
  if(mp.has(arr[i])){
    mp.set(arr[i],mp.get(arr[i])+1);
  }
  else{
    mp.set(arr[i],1);
  }
  
  
}

var y=false;

for(let [key,value] of mp) {
  if(value > 1) {
    console.log(key + " ");
    y=true;
  }
  
 
}

  if(y === false) {
    console.log("-1");
  }
