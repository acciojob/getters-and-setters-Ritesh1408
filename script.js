//complete this code
class Person {
    constructor(name, age){
        this._name = name;
        this._age = age;
    }

    getname() {
        return this._name;
    }
	
	

    setAge(){
        this._age = age;
    }
}

class Student extends Person {
	
    study(){
        // super(this.name, age);
        console.log(`${this._name} is studying`)
    }
}

class Teacher extends Person {
	
    teach(){
        // super(this.name, age);
        console.log(`${this._name} is teaching`)
    }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;


