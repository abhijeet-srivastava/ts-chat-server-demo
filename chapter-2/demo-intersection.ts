let obj: {name: string} & {name: string; age: number} = {
    name: "Jill",
    age: 25,
}
    
console.log(obj); // Jill

let ubionObj: null | {name: string} & {name: string; age: number} = {
    name: "Jack",
    age: 26,
}
console.log(ubionObj); // Jack

let literal: "tom" | "linda" | "jeff" | "sue" = "linda";
literal = "sue";
literal = "tom";
//literal = "jhonny"; // Error: Type '"jhonny"' is not assignable to type '"tom" | "linda" | "jeff" | "sue"'.
console.log(literal);