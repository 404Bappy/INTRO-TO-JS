const number = [3, 5, 6,8, 9, 10, 13];
const output = [];

function doubleOld(number){
    return number * 2;
}
    

const doubleIt =number => number *2;

for(const number of number){
    const result = number*2;
    output.push(result);
}

console.log(output);

//loop korsi
//element diye function call korsi
//result ke arrray er moddhhe push korsi

const Output = number.map(doubleIt);
console.log(output);