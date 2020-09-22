let n1 = parseInt(prompt("Введите число:"));
let tries = 0;
let n2;
do {
    tries++;
    let n2 = parseInt(prompt("Попробуйте угадать число:"));
    if (n2 < n1) {
        alert("Мало");
    }else if(n2>n1){
        alert("Много");
    }else{
        alert("Правильно! Количество попыток:" + tries);
    }
}while(n2!==n1);

