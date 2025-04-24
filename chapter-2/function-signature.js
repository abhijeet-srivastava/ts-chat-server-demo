var runner = function (miles) {
    if (miles > 10) {
        console.log("I can't run negative miles");
        return false;
    }
    else {
        console.log("I ran ".concat(miles, " miles"));
        return true;
    }
};
console.log(runner(5)); // I ran 5 miles
console.log(runner(15)); // I can't run negative miles
function oldEnough(age) {
    if (age > 45) {
        throw Error("You are too old to vote");
    }
    else if (age < 18) {
        console.log("You are not old enough to vote");
        return false;
    }
    else {
        console.log("You are old enough to vote");
        return true;
    }
}
console.log(oldEnough(50)); // You are too old to vote
console.log(oldEnough(17)); // You are not old enough to vote
