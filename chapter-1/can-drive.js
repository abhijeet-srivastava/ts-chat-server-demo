function canDrive(user) {
    if (user.age >= 18) {
        console.log("".concat(user.name, " can drive."));
        return true;
    }
    else {
        console.log("".concat(user.name, " can not drive"));
        return false;
    }
}
var paul = {
    name: 'Paul',
    age: 12,
};
canDrive(paul); // Error: Property 'age' is missing in type '{ name: string; }' but required in type 'User'.
