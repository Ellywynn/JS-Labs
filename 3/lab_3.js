let input = prompt("Введите число");
let number = parseInt(prompt("Введите количество тегов"));

switch (input) {
    case "1":
        {
            input = "text";
            break;
        }
    case "2":
        {
            input = "button";
            break;
        }
    case "3":
        {
            input = "radio";
            break;
        }
    default: break;
}

for(let i=0; i<number; i++){
    document.write("<input type=\"" + input + "\">");
}