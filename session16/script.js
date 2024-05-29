console.log("yeghaneh");

function myfunc() {
    console.log("This is from myfunc");
}

myfunc()

document.getElementById("heading").innerHTML = "Mohammadreza";

document.getElementById("test").innerHTML = "codingfront";

// function sum(x, y) {
//     console.log(x + y);
// }
// sum(3, 7);

// function multiply(x, y) {
//     console.log(x * y);
// }
// multiply(3, 7);


function sum(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

console.log(sum(3, 8) * multiply(2, 4) + Math.pow(3, 3));

document.getElementById("heading").style.color = "red";
document.getElementById("test").style.fontSize = "40px";