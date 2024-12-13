// ----------------------------------------------------------------------------
// Set - Declaration
// ----------------------------------------------------------------------------

const s: Set<number> = new Set();
s.add(1);
s.add(2);
s.add(8);

console.log(s);

const s2: Set<string> = new Set(['a', 's', 'sa', 'aa']);
console.log(s2);

// ----------------------------------------------------------------------------
// Set - iteration
// ----------------------------------------------------------------------------

const mySet1:Set<number> = new Set();
mySet1.add(1);
mySet1.add(1);
mySet1.add(2);
mySet1.add(3);
mySet1.add(14);

for (const item of mySet1.keys()) {
    console.log(item);
  }
  
  for (const item of mySet1.values()) {
    console.log(item);
  }
  
  // key and value are the same here
  for (const [key, value] of mySet1.entries()) {
    console.log(key);
  }
  
  // Convert Set object to an Array object, with Array.from
  const myArr = Array.from(mySet1); 
  const myArr2 = [...mySet1]; 

  console.log(myArr);
  console.log(myArr2);

  const set1 = new Set([1, 2, 3, 4, 5]);

// ----------------------------------------------------------------------------
// Set - has
// ----------------------------------------------------------------------------

console.log(set1.has(1));
// Expected output: true

console.log(set1.has(5));
// Expected output: true

console.log(set1.has(6));
// Expected output: false

// ----------------------------------------------------------------------------
// Set - delete, clear
// ----------------------------------------------------------------------------

set1.delete(1);
console.log(set1);
set1.clear();
console.log(set1);