/**
 * 
 *  boolean - true or false values
    number - whole numbers and floating point values
    string - text values like "TypeScript Rocks"
    any - any type
    unknown - same as any but safer
    undefined - undefined
    null - null
 * 
 */


let firstName: string = "Dylan";

console.log(firstName);

// Implicit any as JSON.parse doesn't know what type of data it returns so it can be "any" thing...
const json = JSON.parse("55");

// Most expect json to be an object, but it can be a string or a number like this example
console.log(typeof json);



// Array
const names: string[] = [];
names.push("Dylan"); // no error

const names2: readonly string[] = ["Dylan"];
// names2.push("Jack"); // Error: Property 'push' does not exist on type 'readonly string[]'.

// define our tuple
let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, 'Coding God was here'];


// -----------------------------------------------
// A good practice is to make your tuple readonly.
// -----------------------------------------------

// define our readonly tuple
let ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
// throws error as it is readonly.
// ourReadonlyTuple.push('Coding God took a day off');

// but setting new values are okay.
ourReadonlyTuple = [1, true, ''];
console.log(ourReadonlyTuple);

// -----------------------------------------------
// Named tuples
// -----------------------------------------------

// Named tuples provide more context for what our index values represent.
const graph2: [x: number, y: number] = [55.2, 41.3];

// we can also destructure
const graph: [number, number] = [55.2, 41.3];
const [x, y] = graph;

for (const element of graph) {
    console.log(element);
  }

// -----------------------------------------------
// Object Types
// -----------------------------------------------

const car: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};


// with optional property
const car2: { type: string, mileage?: number } = { // no error
    type: "Toyota"
};
car2.mileage = 2000;


//Index signatures can be used for objects without a defined list of properties.

const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Jack = 25; // no error
// nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.

// -----------------------------------------------
// Enums
// -----------------------------------------------

enum CardinalDirections {
    North,
    East,
    South,
    West
};

let currentDirection = CardinalDirections.North;
// logs 0
console.log(currentDirection);

enum CardinalDirections2 {
  North = 1,
  East,
  South,
  West
}
// logs 1
console.log(CardinalDirections2.North);
// logs 4
console.log(CardinalDirections2.West);

enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
  }
  // logs 404
  console.log(StatusCodes.NotFound);
  // logs 200
  console.log(StatusCodes.Success);


// -----------------------------------------------
// Type alias
// -----------------------------------------------

type CarYear = number
type CarType = string
type CarModel = string
type Car = {
  year: CarYear,
  type: CarType,
  model: CarModel
}

const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"
const carObj: Car = {
  year: carYear,
  type: carType,
  model: carModel
};

// litreal types

type Result = "pass" | "fail"
 
function verify(result: Result) {
  if (result === "pass") {
    console.log("Passed")
  } else {
    console.log("Failed")
  }
}

type Color = "red" | "green" | "blue";
type HexColor<T extends Color> = `#${string}`;

// Usage:
let myColor: HexColor<"blue"> = "#0000FF";

// -----------------------------------------------
// Interfaces
// -----------------------------------------------
// Interfaces are similar to type aliases, except they only apply to object types.

interface Rectangle {
    height: number,
    width: number
}
  
const rectangle: Rectangle = {
    height: 20,
    width: 10
};


interface ColoredRectangle extends Rectangle {
    color: string
}
  
const coloredRectangle: ColoredRectangle = {
    height: 20,
    width: 10,
    color: "red"
};

// -----------------------------------------------
// Union types
// -----------------------------------------------
function printStatusCode(code: string | number) {
    console.log(`My status code is ${code}.`)
  }
  printStatusCode(404);
  printStatusCode('404');

  // note: we cannot accesst the methods of string since we don't know which type


// -----------------------------------------------
// Functions
// -----------------------------------------------

// the `: number` here specifies that this function returns a number
function getTime(): number {
    return new Date().getTime();
}

function printHello(): void {
    console.log('Hello!');
}

// param

function multiply(a: number, b: number) {
    return a * b;
}

// optional param

function add(a: number, b: number, c?: number) {
    return a + b + (c || 0);
}

// default param

function pow(value: number, exponent: number = 10) {
    return value ** exponent;
}


// rest param

function add2(a: number, b: number, ...rest: number[]) {
    return a + b + rest.reduce((p, c) => p + c, 0);
}

console.log(add2(1, 2, 3, 4));

// defining function's type ahead of declaring it

type Negate = (value: number) => number;

// in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`
const negateFunction: Negate = (value) => value * -1;


// -----------------------------------------------
// Casting
// -----------------------------------------------

let x2: unknown = 'hello';
console.log((x2 as string).length);

// Force casting
// To override type errors that TypeScript may throw when casting, first cast to unknown, then to the target type.

let x3 = 'hello';
console.log(((x as unknown) as number));

// -----------------------------------------------
// Classes
// -----------------------------------------------

class Person {
    name: string;
}
  
const person = new Person();
person.name = "Jane";

/**
 * 
There are three main visibility modifiers in TypeScript.

public - (default) allows access to the class member from anywhere
private - only allows access to the class member from within the class
protected - allows access to the class member from itself and any classes that inherit it, which is covered in the inheritance section below

*/


class Person2 {
    private name: string;
  
    public constructor(name: string) {
      this.name = name;
    }
  
    public getName(): string {
      return this.name;
    }
  }
  
  const person2 = new Person2("Jane");
  console.log(person2.getName()); // person.name isn't accessible from outside the class since it's private

// Similar to arrays, the readonly keyword can prevent class members from being changed.

class Person3 {
    private readonly name: string;
  
    public constructor(name: string) {
      // name cannot be changed after this initial definition, which has to be either at it's declaration or in the constructor.
      this.name = name;
    }
  
    public getName(): string {
      return this.name;
    }
  }
  
  const person3 = new Person3("Jane");
  console.log(person3.getName());

// Inheritance : implements
// A class can implement multiple interfaces by listing each one after implements, separated by a comma like so: class Rectangle implements Shape, Colored {

interface Shape {
    getArea: () => number;
}

interface MyColor {
    getMyColor: () => string;
}


class Rectangle2 implements Shape, MyColor {
    public constructor(protected readonly width: number, protected readonly height: number) {}
  
    public getArea(): number {
      return this.width * this.height;
    }

    public getMyColor(): string {
        return "blue";
    }
}
  
// Inheritance: extends
// Classes can extend each other through the extends keyword. A class can only extends one other class.
interface Shape {
    getArea: () => number;
  }
  
class Rectangle3 implements Shape {
    public constructor(protected readonly width: number, protected readonly height: number) {}
  
    public getArea(): number {
      return this.width * this.height;
    }
}
  
class Square extends Rectangle3 {
    public constructor(width: number) {
      super(width, width);
    }
  
}


// Override

interface Shape1 {
    getArea: () => number;
  }
  
class Rectangle4 implements Shape1 {
    // using protected for these members allows access from classes that extend from this class, such as Square
    public constructor(protected readonly width: number, protected readonly height: number) {}

    public getArea(): number {
        return this.width * this.height;
    }

    public toString(): string {
        return `Rectangle[width=${this.width}, height=${this.height}]`;
    }
}

class Square1 extends Rectangle4 {
    public constructor(width: number) {
        super(width, width);
    }

    // this toString replaces the toString from Rectangle
    public override toString(): string {
        return `Square[width=${this.width}]`;
    }
}

// Abstract Classes
// Classes can be written in a way that allows them to be used as a base class for other classes without having to implement all the members.
// This is done by using the abstract keyword. Members that are left unimplemented also use the abstract keyword.


abstract class Polygon {
    public abstract getArea(): number;
  
    public toString(): string {
      return `Polygon[area=${this.getArea()}]`;
    }
}

// no need to implement toString since implemented at Polygon;
class Rectangle5 extends Polygon {
    public constructor(protected readonly width: number, protected readonly height: number) {
      super();
    }
  
    public getArea(): number {
      return this.width * this.height;
    }
}

// -----------------------------------------------
// Generics
// -----------------------------------------------
// Generics with functions help make more generalized methods which more accurately represent the types used and returned.

function createPair<S, T>(v1: S, v2: T): [S, T] {
    return [v1, v2];
}
console.log(createPair<string, number>('hello', 42)); // ['hello', 42]

// Generics can be used to create generalized classes, like Map.

class NamedValue<T> {
    private _value: T | undefined;
  
    constructor(private name: string) {}
  
    public setValue(value: T) {
      this._value = value;
    }
  
    public getValue(): T | undefined {
      return this._value;
    }
  
    public toString(): string {
      return `${this.name}: ${this._value}`;
    }
}
  
let value = new NamedValue<number>('myNumber');
value.setValue(10);
console.log(value.toString()); // myNumber: 10

//Generics in type aliases allow creating types that are more reusable.

type Wrapped<T> = { value: T };

const wrappedValue: Wrapped<number> = { value: 10 };

// Generics can be assigned default values which apply if no other value is specified or inferred.
class NamedValue2<T = string> {
    private _value: T | undefined;
  
    constructor(private name: string) {}
  
    public setValue(value: T) {
      this._value = value;
    }
  
    public getValue(): T | undefined {
      return this._value;
    }
  
    public toString(): string {
      return `${this.name}: ${this._value}`;
    }
}

let value2 = new NamedValue2('myNumber');
value2.setValue('myValue');
console.log(value2.toString()); // myNumber: myValue


//Constraints can be added to generics to limit what's allowed. The constraints make it possible to rely on a more specific type when using the generic type.

// this would only support string or number
function createLoggedPair<S extends string | number, T extends string | number>(v1: S, v2: T): [S, T] {
    console.log(`creating pair: v1='${v1}', v2='${v2}'`);
    return [v1, v2];
}

console.log(createLoggedPair(1, 1));
console.log(createLoggedPair(1, 'one'));

// error, since array is not supported: console.log(createLoggedPair(1, []));


// -----------------------------------------------
// Utility types
// -----------------------------------------------

// Partial changes all the properties in an object to be optional.

interface Point {
    x: number;
    y: number;
  }
  
let pointPart: Partial<Point> = {}; // `Partial` allows x and y to be optional
pointPart.x = 10;

// Required changes all the properties in an object to be required.

interface Car2 {
    make: string;
    model: string;
    mileage?: number;
}
  
let myCar: Required<Car2> = {
    make: 'Ford',
    model: 'Focus',
    mileage: 12000 // `Required` forces mileage to be defined
};

// Record is a shortcut to defining an object type with a specific key type and value type.

const nameAgeMap2: Record<string, number> = {
    'Alice': 21,
    'Bob': 25
};

// Record<string, number> is equivalent to { [key: string]: number }

// Omit removes keys from an object type.

interface Person {
    name: string;
    age: number;
    location?: string;
}
  
const bob: Omit<Person, 'age' | 'location'> = {
    name: 'Bob'
    // `Omit` has removed age and location from the type and they can't be defined here
};



interface Person4 {
    name: string;
    age: number;
    location?: string;
  }
  
const bob1: Pick<Person4, 'name'> = {
    name: 'Bob'
    // `Pick` has only kept name, so age and location were removed from the type and they can't be defined here
};

// Exclude removes types from a union.
type Primitive = string | number | boolean
const valueex: Exclude<Primitive, string> = true; // a string cannot be used here since Exclude removed it from the type.


// ReturnType extracts the return type of a function type.
type PointGenerator = () => { x: number; y: number; };
const point: ReturnType<PointGenerator> = {
  x: 10,
  y: 20
};

// Parameters extracts the parameter types of a function type as an array.

type PointPrinter = (p: { x: number; y: number; }) => void;
const point1: Parameters<PointPrinter>[0] = {
  x: 10,
  y: 20
};


// Readonly is used to create a new type where all properties are readonly, meaning they cannot be modified once assigned a value.
interface Person5 {
    name: string;
    age: number;
}
const person5: Readonly<Person5> = {
    name: "Dylan",
    age: 35,
};
// person5.name = 'Israel'; // prog.ts(11,8): error TS2540: Cannot assign to 'name' because it is a read-only property.

// When used on an object type with explicit keys, keyof creates a union type with those keys.


interface Person6 {
    name: string;
    age: number;
}

// `keyof Person` here creates a union type of "name" and "age", other strings will not be allowed
function printPersonProperty(person: Person, property: keyof Person) {
    console.log(`Printing person property ${property}: "${person[property]}"`);
}

let person6 = {
    name: "Max",
    age: 27
};

printPersonProperty(person6, "name"); // Printing person property name: "Max"

// keyof can also be used with index signatures to extract the index type.

type StringMap = { [key: string]: unknown };
// `keyof StringMap` resolves to `string` here
function createStringPair(property: keyof StringMap, value: string): StringMap {
  return { [property]: value };
}