class Employee {
    constructor(id,name){
        if(!id || !name) {
            throw new Error("Employee id and name are mandatory");
        }
        this.id = id
        this.name = name
    }

    setSalary(salary) {
        this.salary = salary
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getSalary() {
        return this.salary;
    }
}

class Manager extends Employee {
    setDepartment(name) {
        this.department = name;
    }

    getDepartment() {
        return this.department;
    }
}

const manish = new Employee(2,"Manish")
const manager = new Manager(2,"John","Developer")

console.log(manish.getId())
console.log(manish.getName())
console.log(manish.setSalary(3000))
console.log(manish.getSalary())
console.log(manish.getSalary())
