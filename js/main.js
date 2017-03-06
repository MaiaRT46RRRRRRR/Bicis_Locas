function validateForm(){
	
 var name = document.getElementById("name").value;
 var lastname = document.getElementById("lastname").value;
 var password = document.getElementById("input-password").value;
 var email = document.getElementById("input-email").value;
 var opcion = document.getElementById("opcion").value;

 var texto = /[A-Z]{1,}[a-z]+/ ;
 var correo =/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]$/ ;

if((name != "" && lastname  != "") && (password != "" && opcion != 0)){
  if(!name.match(texto)){
    alert("The first letter of the name must be in uppercase");
  }

  else if(!lastname.match(texto)){
    alert(" The first letter of the last name must be in uppercase");
  }

  else if(!email.match(correo)){
    alert("Enter an invalid email: \n Sign in xxxx@yyyyy.zzzz");
  }

  else if(password.length < 7 || password == "password" || password == "123456" || password == "098754"){
    alert("Enter a password with digits greater than 6, \n it should not be 123456 \n or 098754");
  }
  else{
  alert("Congratulations, you got to go .....!!!!");}

}
else
	{alert("Enter all required data");}


}