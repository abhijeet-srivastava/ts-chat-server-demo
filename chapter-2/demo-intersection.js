var obj = {
    name: "Jill",
    age: 25,
};
console.log(obj); // Jill
var ubionObj = {
    name: "Jack",
    age: 26,
};
console.log(ubionObj); // Jack
var literal = "linda";
literal = "sue";
literal = "tom";
//literal = "jhonny"; // Error: Type '"jhonny"' is not assignable to type '"tom" | "linda" | "jeff" | "sue"'.
console.log(literal);
