var now = new Date();
var hours = now.getHours();
var minutes = now.getMinutes();
var seconds = now.getSeconds();
 
if(minutes < 10){
	minutes = "0" + minutes;
}

if(seconds < 10){
	seconds = "0" + seconds;
}
 
document.write("Текущее время: " + hours + ":" + minutes + ":" + seconds);