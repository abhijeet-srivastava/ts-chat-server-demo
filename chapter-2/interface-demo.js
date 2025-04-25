var InterfaceDemo;
(function (InterfaceDemo) {
    class Motorcycle {
        name;
        age;
        wheelCount;
        constructor(name) {
            // no super for interfaces
            this.name = name;
        }
        updateWheelCount(newWheelCount) {
            this.wheelCount = newWheelCount;
            console.log(`Automobile has ${this.wheelCount}`);
        }
        showNumberOfWheels() {
            console.log(`moved Automobile ${this.wheelCount} miles`);
        }
        getFullName() {
            return "MC-" + this.name;
        }
    }
    const moto = new Motorcycle("beginner-cycle");
    console.log(moto.getFullName());
})(InterfaceDemo || (InterfaceDemo = {}));
