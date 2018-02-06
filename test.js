
var database = [
{	
	username: "Angie",
	password : "pass"
},
{	
	username: "AngiHM",
	password : "123456"
},
{	
	username: "Nelson",
	password : "nel"
}];
var newsfeed = [{
	username: "Angie",
	timeline : "Really tired"
},{
	username: "AngieM",
	timeline : "Still nedd to do Snort"
}];


function isUserCorrect(user,pass){
	for(var i=0;i<database.length;i++){
		if(user==database[i].username && pass==database[i].password){
			return true;
		}
	}
	return false;
}
function signIn(user,pass){
	if(isUserCorrect(user,pass)){
		console.log(newsfeed);
	}
	
	else{
		console.log("Sorry incorrect usernname or password");
	}
}
var userP = prompt("Enter your username");
var passP = prompt("Enter your password");
signIn(userP,passP)