document.getElementById('Submit').onclick=function(){
	var userName = document.getElementById('userName').value;
	var password =  document.getElementById('password').value;

	var matches =  /\d/.test(userName);
	if(!matches){
		alert("Invalid login!");
	}
	else if(password!=12345678){
		alert("Invalid login");
	}
	else{
		alert("Successful");
		document.getElementById('h1').innerText="Success";
	}
	return false;

}
