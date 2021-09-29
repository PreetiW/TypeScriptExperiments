## TypeScript Experiments

A project created to learn more about typescript

## What is TypeScript?

- Javascript Superset - Adds new features, make writing JS easier
- Browser cant execute it directly - But TS compiler compiles the TS code into JS code
- TS compiler compiles the new features and code into JS workaround code (Which we would have written ourselves otherwise)
- Nicer syntax, adds types feature which helps identify errors earlier during compile time
- It will force you write better, cleaner and less error prone code

## Using Types

### Core Primitive Types (all lower case)

- number - all types of numeric values such as 1, 2.4, -3
- boolean - true/false
- string - values can be written as 'demo', "demo" , `demo`
- object - { key: type of value }

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
tags: string[];
details: {
title: string;
description: string;
}
}

```
