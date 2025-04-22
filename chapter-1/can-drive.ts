interface User {
    name: string;
    age: number;
}

function canDrive(user: User): boolean {
  if (user.age >= 18) {
    console.log(`${user.name} can drive.`);
    return true;
  } else {
    console.log(`${user.name} can not drive`)
    return false;
  }
}

const paul = {
    name: 'Paul',
    age: 12,
}

canDrive(paul); // Error: Property 'age' is missing in type '{ name: string; }' but required in type 'User'.