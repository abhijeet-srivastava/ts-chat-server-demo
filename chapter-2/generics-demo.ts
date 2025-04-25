interface HasLength {
    length: number;
}

function getLength<T extends HasLength | number>(args: T): number {
    if(typeof args === "number") { 
        return args;
    }
    return args.length;
}

console.log(getLength("Hello")); // 5
console.log(getLength([1, 2, 3])); // 3
console.log(getLength<number>(8)); // 0 