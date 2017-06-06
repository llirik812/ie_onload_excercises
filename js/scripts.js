window.onload = function() {
	console.log("windows.onload does not work !");
}

window.document.onload = function() {
	console.log("windows.document.onload does not work !");
}

document.onload = function() {
	console.log("document.onload does not work !");
}

/* document.body.load = function() {
	console.log("document.body.load not compile !");
} */

/* 
Solution from https://technet.microsoft.com/ru-ru/sysinternals/cc197055
Event should be registered before it has been trigered
*/

function doLoad() { 
	alert( "The load event is executing" ); 
} 

if ( window.addEventListener ) {  
	window.addEventListener( "load", doLoad, false ); 
	console.log("Added using addEventListener !");
} 
else if ( window.attachEvent ) {  
	window.attachEvent( "onload", doLoad ); 
	console.log("Added using window.attachEvent !");
} else if ( window.onLoad ) { 
	window.onload = doLoad; 
	console.log("Added using window.onload !");
} 
