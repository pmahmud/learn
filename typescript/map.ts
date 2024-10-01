// ----------------------------------------------------------------------------
// Map - Declaration
// ----------------------------------------------------------------------------
const m: Map<string, number> = new Map();
console.log(m.size); // 0

const m2: Map<number, number> = new Map([
    [1, 2],
    [2, 8],
    [3, 0]
]);
console.log(m2.size); // 3
console.log(m2.get(2)); // 8

// ----------------------------------------------------------------------------
// Map - set
// ----------------------------------------------------------------------------
m.set("sadat", 12);
m.set("tahsin", 21);
m.set("ashfak", 90);
console.log(m); 

// ----------------------------------------------------------------------------
// Map - get
// ----------------------------------------------------------------------------
let sd:number|undefined = m.get("sadat"); // 12
let dne:number|undefined = m.get("doesnotexist"); // undefined

console.log(sd);
console.log(dne);

// ----------------------------------------------------------------------------
// Map - has
// ----------------------------------------------------------------------------
if(m.has("sadat")) {
    console.log("Sadat already exist");
}

// ----------------------------------------------------------------------------
// Map - delete
// ----------------------------------------------------------------------------
m.delete("sadat");
if(!m.has("sadat")) {
    console.log("Sadat got deleted!");
}

// ----------------------------------------------------------------------------
// Map - clear
// ----------------------------------------------------------------------------
console.log(m.size);
m.clear()
console.log(m.size);

// ----------------------------------------------------------------------------
// Map - for each
// ----------------------------------------------------------------------------
m2.set(2, 4);
m2.set(2, 5);
console.log(m2);

m2.forEach((v,k, m) => {
    console.log(`${k} => ${v}`);
});

// ----------------------------------------------------------------------------
// Map - for each
// ----------------------------------------------------------------------------

const myMap = new Map();
myMap.set("0", "foo");
myMap.set(1, "bar");

// ----------------------------------------------------------------------------
// Map - entries
// ----------------------------------------------------------------------------
const mapIter = myMap.entries();
console.log(mapIter.next().value);

let a = [...myMap.entries()];
console.log(typeof a);
console.log(a);

a.forEach((v) => {
    console.log(v);
})

for(let [k, v] of myMap.entries()){
    console.log(`${k} => ${v}`);
}

// ----------------------------------------------------------------------------
// Map - keys()
// ----------------------------------------------------------------------------
for(let k of myMap.keys()){
    console.log(`${k}`);
}

// ----------------------------------------------------------------------------
// Map - values()
// ----------------------------------------------------------------------------
for(let v of myMap.values()){
    console.log(`${v}`);
}

// ----------------------------------------------------------------------------
// Map - sorting
// ----------------------------------------------------------------------------

myMap.clear()
myMap.set("a",3);
myMap.set("c",4);
myMap.set("b",1);
myMap.set("d",2);

// sort by value
const mapSort1 = new Map([...myMap.entries()].sort((a, b) => b[1] - a[1]));
console.log(mapSort1);
// Map(4) {"c" => 4, "a" => 3, "d" => 2, "b" => 1}

const mapSort2 = new Map([...myMap.entries()].sort((a, b) => a[1] - b[1]));
console.log(mapSort2);
// Map(4) {"b" => 1, "d" => 2, "a" => 3, "c" => 4}

// sort by key
const mapSort3 = new Map([...myMap.entries()].sort());
console.log(mapSort3);
// Map(4) {"a" => 3, "b" => 1, "c" => 4, "d" => 2}

const mapSort4 = new Map([...myMap.entries()].reverse());
console.log(mapSort4);
// Map(4) {"d" => 2, "b" => 1, "c" => 4, "a" => 3}



