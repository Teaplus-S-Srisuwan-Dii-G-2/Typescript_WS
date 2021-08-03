"use strict";
function C_employee(config) {
    var newemployee = { name: "Default", surnane: "Default", employeeID: 999999, age: 99, salary: 999999, bonus: false, bonus_out: 99999 };
    if (config.name) {
        newemployee.name = config.name;
    }
    if (config.surnane) {
        newemployee.surnane = config.surnane;
    }
    if (config.employeeID) {
        newemployee.employeeID = config.employeeID;
    }
    if (config.age) {
        newemployee.age = config.age;
    }
    if (config.salary) {
        newemployee.salary = config.salary;
    }
    if (config.Bonus) {
        newemployee.bonus = config.Bonus;
        if (newemployee.bonus == true) {
            newemployee.bonus_out = newemployee.salary * 2.5;
        }
    }
    return newemployee;
}
var My_employee = C_employee({ name: "Dev-Dew", surnane: "dewathiwat", employeeID: 632110, age: 20, salary: 21000, Bonus: true });
console.log('Output:', My_employee);
