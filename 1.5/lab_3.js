let array = [3];

for(let i=0; i<3; i++){
    array[i] = parseInt(prompt("Введите число"));
}

for(let i in array){
    document.write("array["+i+"] = " + array[i] + "<br>");
}