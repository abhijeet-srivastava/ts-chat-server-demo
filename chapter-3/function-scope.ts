function MyFunction () {
    console.log(this);
}
MyFunction();
let test = new MyFunction();


const func = () => console.log('func');
const func1 = () => ({ name: 'dave' });
const func2 = () => {
    const val = 20;
    return val;
}
console.log(func());
console.log(func1());
console.log(func2());