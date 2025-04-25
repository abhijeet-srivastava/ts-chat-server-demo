class A {
    name: string = 'A';
    go() {
        console.log(this.name);
    }
}

class B {
    name: string = 'B';
    go() {
        console.log(this.name);
    }
}

const a = new A();
a.go(); // A
const b = new B();
b.go = b.go.bind(a); // B

b.go(); // A

b.go(); // A