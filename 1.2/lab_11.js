let input = parseInt(prompt("Введите число:"));
switch(input){
    case 1:
        {
            document.write("На ветке сидит " + input + " ворона");
            break;
        }
        case 2:
        case 3:
        case 4:
        {
                document.write("На ветке сидит " + input + " вороны");
                break;
        }
        case 0:
        case 5:
        case 6: 
        case 7:                
        case 8:
        case 9:
        case 10:
        {
                document.write("На ветке сидит " + input + " ворон");
        }
    }