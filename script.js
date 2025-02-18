//complete this code
class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    getname() {
        return this.name;
    }

    setAge(newAge){
        this.age = newAge;
    }
}

class Student extends Person {
    study(){
        // super(this.name, age);
        console.log(`${this.name} is studying`)
    }
}

class Teacher extends Person {
    teach(){
        // super(this.name, age);
        console.log(`${this.name} is teaching`)
    }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;


