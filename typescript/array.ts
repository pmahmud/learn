
// ----------------------------------------------------------------------------
// Array - Declaration
// ----------------------------------------------------------------------------
const a: number[] = new Array(2);
console.log(a.length); // 2

a.push(1);
a.push(1,2,3);

console.log(a);
console.log(a[0]);

const b: number[] = [1, 2, 3, 4, 5];
console.log(b);

// ----------------------------------------------------------------------------
// Array - from(arrayLike)
// ----------------------------------------------------------------------------
let sa: string[] = Array.from("foo");
console.log(sa);// [ "f", "o", "o" ]
console.log(typeof sa[0]);

let sa2: string[] = "foo".split("");
console.log(sa2);// [ "f", "o", "o" ]


const set = new Set(["foo", "bar", "baz", "foo"]);
Array.from(set);
// [ "foo", "bar", "baz" ]

const map = new Map([
    [1, 2],
    [2, 4],
    [4, 8],
  ]);
  Array.from(map);
  // [[1, 2], [2, 4], [4, 8]]

// ----------------------------------------------------------------------------
// Array - isArray(), of()
// ----------------------------------------------------------------------------

  console.log(Array.isArray([1, 3, 5]));
// Expected output: true

console.log(Array.isArray('[]'));
// Expected output: false

console.log(Array.isArray(new Array(5)));
// Expected output: true

console.log(Array.of('foo', 'bar'));
// Expected output: Array ["foo", "bar"]

// ----------------------------------------------------------------------------
// Array - concat
// ----------------------------------------------------------------------------

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]

const array4 = [...array1, ...array2];
console.log(array4);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]

// ----------------------------------------------------------------------------
// Array - every
// ----------------------------------------------------------------------------

const isBelowThreshold = (currentValue : number): boolean => currentValue < 40;

const array5 = [1, 30, 39, 29, 10, 13];

console.log(array5.every(isBelowThreshold));
// Expected output: true

// ----------------------------------------------------------------------------
// Array - fill
// ----------------------------------------------------------------------------
// fill(value)
// fill(value, start)
// fill(value, start, end)
const array6 = [1, 2, 3, 4];

// Fill with 0 from position 2 until position 4
console.log(array6.fill(0, 2, 4));
// Expected output: Array [1, 2, 0, 0]

// Fill with 5 from position 1
console.log(array6.fill(5, 1));
// Expected output: Array [1, 5, 5, 5]

console.log(array6.fill(6));
// Expected output: Array [6, 6, 6, 6]


// ----------------------------------------------------------------------------
// Array - filter
// ----------------------------------------------------------------------------

let words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]

// ----------------------------------------------------------------------------
// Array - find
// ----------------------------------------------------------------------------

const array7 = [5, 12, 8, 130, 44];

const found = array7.find((element) => element > 10);

console.log(found);
// Expected output: 12

// ----------------------------------------------------------------------------
// Array - findIndex
// ----------------------------------------------------------------------------
const array8 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array8.findIndex(isLargeNumber));
// Expected output: 3


// ----------------------------------------------------------------------------
// Array - flat
// ----------------------------------------------------------------------------
const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: Array [0, 1, 2, 3, 4]

const arr2 = [0, 1, [2, [3, [4, 5]]]];

console.log(arr2.flat());
// expected output: Array [0, 1, 2, Array [3, Array [4, 5]]]

console.log(arr2.flat(2));
// expected output: Array [0, 1, 2, 3, Array [4, 5]]

console.log(arr2.flat(Infinity));
// expected output: Array [0, 1, 2, 3, 4, 5]


// ----------------------------------------------------------------------------
// Array - filter
// ----------------------------------------------------------------------------
const array9 = ['a', 'b', 'c'];

array9.forEach((element) => console.log(element));

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"

// ----------------------------------------------------------------------------
// Array - includes
// ----------------------------------------------------------------------------
const array10 = [1, 2, 3];

console.log(array10.includes(2));
// Expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// Expected output: true

console.log(pets.includes('at'));
// Expected output: false

// ----------------------------------------------------------------------------
// Array - indexOf, lastIndexOf
// ----------------------------------------------------------------------------

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// Expected output: 1

// Start from index 2
console.log(beasts.indexOf('bison', 2));
// Expected output: 4

console.log(beasts.indexOf('giraffe'));
// Expected output: -1

// ----------------------------------------------------------------------------
// Array - join
// ----------------------------------------------------------------------------

const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(''));
// Expected output: "FireAirWater"

console.log(elements.join('-'));
// Expected output: "Fire-Air-Water"

// ----------------------------------------------------------------------------
// Array - map
// ----------------------------------------------------------------------------

const array11 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array11.map((x) => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]

// ----------------------------------------------------------------------------
// Array - pop
// ----------------------------------------------------------------------------


const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// Expected output: "tomato"

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage"]

// ----------------------------------------------------------------------------
// Array - push
// ----------------------------------------------------------------------------


const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count);
// Expected output: 4
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens', 'cats', 'dogs');
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]


// ----------------------------------------------------------------------------
// Array - reduce
// ----------------------------------------------------------------------------


const array12 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array12.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10

// ----------------------------------------------------------------------------
// Array - reduceRight
// ----------------------------------------------------------------------------
const array13 = [
    [0, 1],
    [2, 3],
    [4, 5],
  ];
  
  const result = array13.reduceRight((accumulator, currentValue) =>
    accumulator.concat(currentValue),
  );
  
  console.log(result);
  // Expected output: Array [4, 5, 2, 3, 0, 1]
// ----------------------------------------------------------------------------
// Array - reverse
// ----------------------------------------------------------------------------
const array14 = ['one', 'two', 'three'];
console.log('array1:', array14);
// Expected output: "array1:" Array ["one", "two", "three"]

const reversed = array14.reverse();
console.log('reversed:', reversed);
// Expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log('array14:', array14);
// Expected output: "array1:" Array ["three", "two", "one"]

// ----------------------------------------------------------------------------
// Array - shift
// ----------------------------------------------------------------------------
const array15 = [1, 2, 3];

const firstElement = array15.shift();

console.log(array15);
// Expected output: Array [2, 3]

console.log(firstElement);
// Expected output: 1

// ----------------------------------------------------------------------------
// Array - slice
// ----------------------------------------------------------------------------
const animals1 = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals1.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals1.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals1.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals1.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals1.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals1.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

// ----------------------------------------------------------------------------
// Array - some
// ----------------------------------------------------------------------------
const array = [1, 2, 3, 4, 5];

// Checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// Expected output: true

// ----------------------------------------------------------------------------
// Array - sort
// ----------------------------------------------------------------------------
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// Expected output: Array ["Dec", "Feb", "Jan", "March"]

const array16 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array16);
// Expected output: Array [1, 100000, 21, 30, 4]

let compareFn = (a, b) => a - b; // ascending order


// ----------------------------------------------------------------------------
// Array - splice(start, delete, ...items)
// ----------------------------------------------------------------------------
const months2 = ['Jan', 'March', 'April', 'June'];
months2.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months2);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months2.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months2);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]

// ----------------------------------------------------------------------------
// Array - splice(start, delete, ...items)
// ----------------------------------------------------------------------------

const array17 = [1, 2, 3];

console.log(array17.unshift(4, 5));
// Expected output: 5

console.log(array17);
// Expected output: Array [4, 5, 1, 2, 3]

