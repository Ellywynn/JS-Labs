let check_1 = /^[495]|[632]{3}$/
let check_2 = /^[\d]{3}$/
let check_3 = /^[\d]{4}$/

function checkInput(){
    let i1 = document.getElementById("1");
    let i2 = document.getElementById("2");
    let i3 = document.getElementById("3");

    if((i1.value.search(check_1) !== -1) && (i2.value.search(check_2) !== -1)
    && i3.value.search(check_3) !== -1){
        confirm("Спасибо за заказ!");
    }
}