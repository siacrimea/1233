function first(x, y, z) {
    console.log(1);
    let aa = z();
    x(y(), z());
}

function second(a, b) {
    console.log(a * b);
}

function third() {
    return 25;
}

function fourth() {
    return 25;
}

first(second, third, fourth);

// first(function() {
//     console.log(100 * 4);
// });
//second(4, 7);