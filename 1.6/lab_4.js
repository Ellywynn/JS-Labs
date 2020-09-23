String.prototype.uroven = prompt("Введите число(1-6)");

function printZagolovok (){
    document.write("<h"+this.uroven+">" + this.toString() + "</h"+this.uroven+">");
}
String.prototype.printMe = printZagolovok;

var s=new String("Ура!");
s.printMe();