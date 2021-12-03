const phone = '7885025909';

/**
 * Output should be exactly the following
 * 0, 2
 * 2, 1
 * 5, 2
 * 7, 1
 * 8, 2
 * 9, 2
 */
function printFormat() {
  var ph = phone.split("");
  ph.sort((a,b) => a-b);
  var count = 1;
  var sum =0;
  var arr = [];
  var j=0;
  var res=0;
  for(let i=0;i<ph.length;i++) {
    res = res + (ph[i] - 0);
    if(ph[i]===ph[i+1]) {
      arr[j] = ph[i];
      j++;
       sum = sum + (ph[i] - 0);
      count++;
    }
    else {
      if(ph[i-1] === ph[i]) {
        arr[j] = ph[i];
        sum += (ph[i] - 0);
        console.log(arr);
        arr=[];
        j=0;
        console.log("sum = " + sum );
      }
      else{
        arr[j] = ph[i];
        console.log(arr );
        arr = [];
        j=0;
        sum = ph[i] - 0;
        console.log("sum = " + sum);
      }
      sum = 0;
     
      console.log("* " + ph[i] + ", " + count );
      count = 1;
    }
  }
  console.log("final sum = " + res);
   
}
 printFormat();
