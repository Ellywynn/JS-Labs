let week = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

let input = prompt("Введите название дня недели").toLowerCase();

let index = -1;

for(let i in week){
    if(week[i] == input){
         index = i;
         break;
    }
}

document.write("Day number: " + index);