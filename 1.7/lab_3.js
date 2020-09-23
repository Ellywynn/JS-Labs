let date = new Date();
let day = date.getDay();

let currentDay;
switch(day){
    case 1:
        currentDay = "Понедельник"; break;
    case 2:
        currentDay = "Вторник"; break;
    case 3:
        currentDay = "Среда"; break;
    case 4: 
        currentDay = "Четверг"; break;
    case 5:
        currentDay = "Пятница"; break;
    case 6: 
        currentDay = "Суббота"; break;
    case 7:
        currentDay = "Воскресенье"; break;
}

document.write("Текущий день недели: " + currentDay);