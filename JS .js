






var passWord = $.getElementById('passWord');

var passWordError = $.getElementById('passWordError');

var signIn = $.getElementById('signIn');

var signUp = $.getElementById('signUp');




  else if(passWord.value.length<12){
   passWordError.innerHTML = "Normal";
   passWordError.style.color='#ffd000';
  }

  else if(passWord.value.length>12){
   passWordError.innerHTML = "Strong";
   passWordError.style.color='#00ff00' ;
  }
}
