// Write your solution in this file!
const employee = {
    name : "defaultName", 
    streetAddress : "defaultAddress",
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee, 
        [key] : value,
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const employeeWithoutKey = {...employee};
    delete employeeWithoutKey[key];
    return employeeWithoutKey;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}