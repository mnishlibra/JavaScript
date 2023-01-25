var Employee = function (id,name){
        if(!id || !name) {
            throw new Error("Employee id and name are mandatory");
        }
        this.id = id
        this.name = name
}

Employee.prototype.setSalary = function (salary) {
    this.salary = salary
};

Employee.prototype.getId = function () {
    return this.id;
};

Employee.prototype.getName = function () {
    return this.name;
};

Employee.prototype.getSalary = function () {
    return this.salary;
};


var Manager = function (params) {
    Employee.apply(this,arguments);
};

Manager.prototype.setDepartment = function (name) {
    this.department = name;
};

Manager.prototype.getDepartment function () {
    return this.department;
};

Manager.prototype = Object.create(Employee.prototype)
Manager.prototype.constructor = Manager;


const manish = new Employee(2,"Manish")
const manager = new Manager(2,"John","Developer")

console.log(manish.getId())
console.log(manish.getName())
console.log(manish.setSalary(3000))
console.log(manish.getSalary())
