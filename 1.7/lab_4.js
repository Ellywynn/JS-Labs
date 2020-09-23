function dw(str){
    document.write(str);
}

function showDate(n){
    let now = new Date();    // текущее время
    let then = new Date();   // результат
    now.getTime();           // получить текущую дату           
    then.setDate(now.getDate() + n); // прибавить дни к текущей дате
    let days = ["Воскресенье", "Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"];
    let month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август",
                 "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    dw("Через " + n + " дней будет вот такая дата:<br>");
    dw("День недели: " + days[then.getDay()] + "<br>");
    dw("Число: " + then.getDate() + "<br>");
    dw("Месяц: " + month[then.getMonth()] + "<br>");
    dw("Год: " + then.getFullYear() + "<br>");
    }
    
function getDays(){
    return parseInt(prompt("Введите количество дней(1-1000)")); // user input
}

let days = getDays();

while(days < 1 || days > 1000){
    alert("Вы должны ввести число в пределе 1-1000.\n"
    + "Попробуйте снова.");
    days = getDays();
}

showDate(days);