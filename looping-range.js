/*function range(start,end, step) {
for ( start = start; end >= start ; step++) {
  let result = Array.of(range);
  return  Number.result
}
}

let doesn't work on Compass, remember to use var

*/
function range (start,end,step) {
  var array = [];
  if (start === undefined || end === undefined || step === undefined || start > end || step < 0) {
    array = [];
  } else {
    for (var counter = start; counter <= end; counter += step) {
      array.push(counter);
    }
  }
  return array;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));