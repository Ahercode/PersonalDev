// const a = [
//     2,4,6,8,
//   ]

//   function findSum(a) {
//     let total = 0;
//     let n = a.length;
//     for (let i = 0; i < n; i++) {
//       for (let j = 0; j < n; j++) {
//         total += parseInt( a[i].toString()+a[j].toString());
//       }
//     }
//     return total;
//   }
 
//   console.log(findSum(a))

function concatenationsSum2(a) {
    var lowSum = 0;
    for (var i = 0; i < a.length; i++)
        lowSum += a[i];

    var sum = lowSum * a.length;

    for (var i = 0; i < a.length; i++) {
        var size = a[i].toString().length;
        var offset = iPower(10, size);
        sum = sum + lowSum * offset;
    }

    return sum;
}

function iPower(base, power) {
    var result = 1;
    for (var i = 1; i <= power; i++)
        result *= base;

    return result;
}