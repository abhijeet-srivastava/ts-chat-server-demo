class PersonName {
    name: string;
    constructor(private name: string) {
        this.name = name;
    }

    printName() {
        console.log('Name is', this.name); 
        
    }
}

const namedPerson = new PersonName("Jill");
namedPerson.printName(); // Name is Jill
namedPerson.name = "Jack";
