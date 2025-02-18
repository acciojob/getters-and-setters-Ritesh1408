//complete this code
class Person {
    constructor(name, age){
        this._name = name;
        this._age = age;
    }

    getname() {
        return this._name;
    }
	getAge(){
		return this._age;
	}
	setname(){
		this._name = name;
	}

    setAge(){
        this._age = age;
    }
}

class Student extends Person {
	constructor(name, age) {
        super(name, age); 
    }
    study(){
        // super(this.name, age);
        console.log(`${this.name} is studying`)
    }
}

class Teacher extends Person {
	constructor(name, age) {
        super(name, age); 
    }
    teach(){
        // super(this.name, age);
        console.log(`${this.name} is teaching`)
    }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;


