//declear variable based on the name of an object property
const myObject = {x:2, y:50, z:400, a:23, b:68};

const {x, b} = myObject;
console.log(b);

/// Destructing array//

const [p, q] = [23, 40, 90, 80, 70];
console.log(p,q);