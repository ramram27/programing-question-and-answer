
 const passstr = "abcdefghijklmnopwrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
 const spchar = "!@#$%^&*()_+";
 const passLength =18;

function password(passstr, spchar, passLength) {
  
  
  var len1 = passstr.length;
  var len2 = spchar.length;
  var passgen = "";
  
  for(let i=0;i<passLength-1;i++) {
    
     passgen += passstr.charAt(Math.floor(Math.random() * len1));
  }
  
  passgen += spchar.charAt(Math.floor(Math.random() * len2));
  
  return passgen;
}

console.log(password(passstr, spchar,passLength));
