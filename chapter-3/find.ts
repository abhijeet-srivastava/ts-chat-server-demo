const items = [
    { name: 'jon', age: 20 },
    { name: 'linda', age: 22 },
    { name: 'jon', age: 40}
]

const jhon = items.find((item) => {
    return item.name === 'jon'
});

console.log('jhon: ' , jhon)

const results = items.filter((item, index) => {
    return item.name === 'jon'
});
console.log(results);


const employees = [
    { name: 'tim', id: 1 },
    { name: 'cindy', id: 2 },
    { name: 'rob', id: 3 },
]
const elements = employees.map((item, index) => {
    return `<div>${item.id} - ${item.name}</div>`;
});
console.log(elements);

const allTrucks = [
    2,5,7,10
]
const initialCapacity = 0;
const allTonnage = allTrucks.reduce((totalCapacity, currentCapacity) => {
    totalCapacity = totalCapacity + currentCapacity;
    return totalCapacity;
}, initialCapacity);

console.log(allTonnage);

const widgets = [
    { id: 1, color: 'blue' },
    { id: 2, color: 'yellow' },
    { id: 3, color: 'orange' },
    { id: 4, color: 'blue' },
]
console.log('some are blue', widgets.some(item => {
    return item.color === 'blue';
}));
console.log('every one is blue', widgets.every(item => {
    return item.color === 'blue';
}));