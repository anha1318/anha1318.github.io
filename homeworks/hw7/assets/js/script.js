function averageThreeNumbers(a,b,c) {
    let sum = a + b + c;
    let average = sum / 3
    return average;
}


function createSentence(num, noun) {
    return "On average, a Berkeley student has " + [num] + [noun] + " ."
}

function getRandomNum (max) {
    return Math.random () * max;
}

let x = getRandomNum(20);
let y = getRandomNum(10);
let z = getRandomNum(13);

let avg = averageThreeNumbers(x,y,z);
let noun = " bottles";

let sentence = createSentence(avg,noun);

console.log(sentence);