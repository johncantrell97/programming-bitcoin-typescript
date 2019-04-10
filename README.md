# Programming Bitcoin

The book ["Programming Bitcoin" by Jimmy Song](https://programmingbitcoin.com/) is an excellent way to learn the math, data structures, and programming that powers Bitcoin. While the book provides source code and exercies in Python, this repository is an example of implementing all the classes and exercises presented in Typescript. It allows for running all the exercises in a node environment and includes a full test suite using Jest.

# Usage

`npm run test` - run the test suite

`npm run watch-test` - run the test suite in watch mode.  This will automatically run all the tests when any file changes.

`npm run build-ts` - compile Typescript to Javascript in /dist folder.

`npm run watch-ts` - compile Typescript automatically when any file changes.

`npm run watch-node` - run all exercises when any file changes.

`npm run exercises` - run all exercises

# Chapter Notes

## Chapter 1 - Finite Fields

- In javascript numbers are represented using the IEEE-754 standard. This means the 64-bit number uses 1 bit to store the sign, 11 bits to store the exponent, and 52 bits for the mantissa. Because of this we can only accurately work with numbers below 2^53. I ran into this issue when working on exercise 4 where we have to calculate 77^49. To work with large numbers in javascript I relied on a third party library [bn.js](https://github.com/indutny/bn.js/).


- In javascript the modulo operator (%) does not handle negative numbers in the way we need to achieve the wrapping effect we are after. Because of this I implemented a custom modulo method that is used in the test suite: `mod(x,n) = (x % n + n) % n`. Luckily, the bn.js library includes a version of mod that handles negative numbers that works as needed.
