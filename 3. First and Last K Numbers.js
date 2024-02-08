function firstAndLastKNumbers(input) {
    let k = input.shift();
    let firstEls = input.slice(0, k);
    let secondEls = input.slice(input.length - k, input.length);
    console.log(firstEls.join(` `));
    console.log(secondEls.join(` `));
}
//firstAndLastKNumbers([2, 7, 8, 9]);
firstAndLastKNumbers([3, 6, 7, 8, 9]);