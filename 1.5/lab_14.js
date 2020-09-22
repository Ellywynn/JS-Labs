var laptop = { cpu: "Core i7", ram: "4 GB", screen: "19" };
var Key = prompt("Введите интересующий параметр (ram, cpu, screen)");
var value = laptop[Key];
document.write(value);
