## TypeScript Experiments

A project created to learn more about typescript

## What is TypeScript?

- Javascript Superset - Adds new features, make writing JS easier
- Browser cant execute it directly - But TS compiler compiles the TS code into JS code
- TS compiler compiles the new features and code into JS workaround code (Which we would have written ourselves otherwise)
- Nicer syntax, adds types feature which helps identify errors earlier during compile time
- It will force you write better, cleaner and less error prone code

## Using Types

### Core Primitive Types (As per Vanilla JavaScript, all lower case)

- number - all types of numeric values such as 1, 2.4, -3
- boolean - true/false
- string - values can be written as 'demo', "demo" , `demo`
- object - { key: type of value }
- array - []

### Non Vanilla JavaScript Types

- Tuple - fixed length, fixed type array eg [number, string] will tell TypeScript to create an array which will have only 2 values, first one will be number and second one will be string. Note: TypeScript will not show any error in case we will try to use push method on this array.

- Enums - constants which are human readable and use values which we define behind the scenes

for eg:

```
enum Role { ADMIN = 'ADMIN', READ_ONLY = 100, OTHER = 200 }

access enum like you access the object: Role.READ_ONLY // which will point to value 100

```

### Type Inference

- used to provide type information and whenever we initialise any variable it is inferred automatically
- for eg:

```
const message = "Hello World" // will infere the type to string with a const value procided
```

- In case we don't initialise the value and want to define the type we can do so as below

```
const result: number;  // here the result variable will be created which will accept only number values
```

- a Javascripte object below

```
const product = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
    title: 'Red Carpet',
    description: 'A great carpet - almost brand-new!'
    }
}

```

will be inferred as

```
{
    id: string;
    price: number;
    tags: string[]; // this is important as TS will complain if we try to use any non-string methods for this array
    details: {
    title: string;
    description: string;
    }
}

```
