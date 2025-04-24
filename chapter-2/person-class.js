var PersonName = /** @class */ (function () {
    function PersonName(name) {
        this.name = name;
    }
    PersonName.prototype.printName = function () {
        console.log('Name is', this.name);
    };
    return PersonName;
}());
var namedPerson = new PersonName("Jill");
namedPerson.printName(); // Name is Jill
