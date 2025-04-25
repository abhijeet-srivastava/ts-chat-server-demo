class PersonName {
    constructor(private readonly name: string) {
        this.name = name;
    }

    printName() {
        console.log('Name is', this.name); 
        
    }

}

const namedPerson = new PersonName("Jill");
namedPerson.printName(); // Name is Jill
//namedPerson.name = "Jack";

class Speaker {
    private message:string;
    constructor(private readonly name: string) {
        this.name = name;
        this.message = "Hello";
    }

    get Message() {
        if(!this.message.includes(this.name)) {
            throw Error("Invalid Message, name  not found in msg");
        }
        return this.message;
    }
    set Message(message: string) {
        let tmpMsg = message;
        if(!message.includes(this.name)) {
            tmpMsg = this.name + " " + message;
        }
        this.message = tmpMsg;
    }
}

const speaker = new Speaker("Jill");   
//console.log(speaker.Message); // Hello
speaker.Message = "Hello World";
console.log(speaker.Message); // Hello World 

class ClassA {
    static typeName: string;
    constructor(){}
    static getFullName() {
        return "ClassA " + ClassA.typeName;
    }
}
const a = new ClassA();
console.log(ClassA.typeName);

class Runner {
    static lastRunTypeName: string;
    constructor(private typeName: string) {}
    run() {
        Runner.lastRunTypeName = this.typeName;
    }
}
const ar = new Runner("a");
const br = new Runner("b");
br.run();
ar.run();
console.log(Runner.lastRunTypeName);

