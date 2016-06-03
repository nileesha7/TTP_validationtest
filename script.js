document.getElementById('Submit').onclick=function(){
	var userName = document.getElementById('userName').value;
	var password =  document.getElementById('userName').value;

	var matches =  /\d/.test(userName);
	if(!matches & password!=12345678){
		alert("Invalid login!");
	}

}
document.getElementById('h1').innerText="New Text";