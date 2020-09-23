function initStaff(name, department, number, salary) {
    this.name = name;
    this.department = department;
    this.number = number;
    this.salary = salary;
}

let staff = new initStaff("Igor", "1", "+79158032436", "30000RUB");

staff.address = "Malaya Semenovskaya, 12";