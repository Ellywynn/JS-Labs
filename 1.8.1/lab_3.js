let name = document.getElementById("name");
let donuts = document.getElementById("donuts");
let minutes = document.getElementById("pickupminutes");
let subsummary = document.getElementById("poditog");
let tax = document.getElementById("tax");
let sumary = document.getElementById("itog");
let form = document.getElementsByTagName("form")[0];

function placeOrder(){
    if(name.value === ""){
        alert("Извините, но Вы должны написать имя,\n"+
              "прежде чем выполнить заказ.");
    }else if(isNaN(minutes.value) || minutes.value === ""){
        alert("Извините, но Вы должны ввести кол-во минут приготовления, \n"
        + "прежде чем выполнить заказ.");
    }else{
        form.submit();
    }
}