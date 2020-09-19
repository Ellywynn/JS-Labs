var x = prompt("Введите значение x ", "0"); 
var y = prompt("Введите значение y ", "0.0");
var integerX = parseInt(x);
var floatY = parseFloat(y);
var result = parseFloat(integerX + floatY);
document.write(result);