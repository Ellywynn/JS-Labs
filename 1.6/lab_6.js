function initStaff(name, department, number, salary) {
    this.name = name;
    this.department = department;
    this.number = number;
    this.salary = salary;

    this.showInfo = function(){
        for(let i in this){
            document.write(i + ": " + this[i] + "<br>");
        }
    }
}

let staff = new initStaff("Igor", "1", "+79158032436", "30000RUB");

staff.showInfo();