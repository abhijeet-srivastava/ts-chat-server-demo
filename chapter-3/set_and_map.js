const userIds = [
    1, 2, 1, 3
];
const uniqueIds = new Set(userIds);
console.log(uniqueIds);
uniqueIds.add(10);
console.log('add 10', uniqueIds);
console.log('has', uniqueIds.has(3));
console.log('size', uniqueIds.size);
for (let item of uniqueIds) {
    console.log('Iter: ', item);
}
const mappedEmp = new Map();
mappedEmp.set('linda', { fullName: 'Linda Johnson', id: 1 });
mappedEmp.set('jim', { fullName: 'Jim Thomson', id: 2 });
mappedEmp.set('pam', { fullName: 'Pam Dryer', id: 4 });
console.log(mappedEmp);
console.log('get', mappedEmp.get('jim'));
console.log('size', mappedEmp.size);
for (let [key, val] of mappedEmp) {
    console.log(`Key: ${key} => val: ${val.fullName}`);
}
