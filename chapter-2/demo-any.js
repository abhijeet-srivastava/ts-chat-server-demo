//var val:any = 5
var val = 5;
val = "hello";
val = true;
val = Array(1, 2, 3);
if (val instanceof Array) {
    val.push(4);
}
console.log(val);
