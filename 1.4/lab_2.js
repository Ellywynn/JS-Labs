function say() {
    document.write("Вы здесь?" + "<br/>");
 }
 do {
    say();
    povtor = confirm("Пройти заполнение еще раз?");
 } while (povtor);
 