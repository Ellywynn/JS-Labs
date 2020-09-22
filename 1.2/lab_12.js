var number = prompt("Введите число 1 или 2:");
switch (number) { 
case "1":
  {
    document.write("Один");
    break;
  };
case "2":
  {
    document.write("Два");
    break;
  };
default:
  {
    document.write("Вы ввели значение, отличное от 1 и 2");
    break;
  };
}
