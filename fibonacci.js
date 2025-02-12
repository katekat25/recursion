function fibs(num) {
    if (num == 0) {
        return [0]
    }
    
    let array = [0, 1];
    let firstNum, nextNum;

    for (let i = 2; i <= num; i++) {
        firstNum = array[i - 2];
        nextNum = array[i - 1];
        array.push(firstNum + nextNum);
    }

    return array;
}

function fibsRec(num) {
    if (num == 0) return [0]
    if (num == 1) return [0, 1]
    const array = fibsRec(num - 1);
    return [...array, array[num - 1] + array[num - 2]];
}

console.log(fibs(8));
console.log(fibsRec(8));
