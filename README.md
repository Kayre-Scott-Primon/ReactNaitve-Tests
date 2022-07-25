# ReactNaitve-Tests
App in react native by to implement tasks routines

Hello guys, how do you going? I hope so!

In this document, i intent to implement tests in the react native application . For that, i think most important, firts, explain more about general tests in programming. Let’s go!

## What’s tests to programming?

The word tests mean to submit thing at experinces with the finality find error or analyse its performance. For system, tests are more util to prevent errors and garanted the your code is right, besides to intent save your logical in futures upgrades. For that, is need to create enviroment tests to simule the reals situaltions.

Exists a term TDD, it mean Testing driven development, talk about to implemented tests before codeing, with intent to verify if your process developer is align your tasks requires.

Before implements testing, is important to see by a statics analytics, they are resources to observe the codes when are programming, with intent prevents writters errors. Are examples: 

- Linters
- Type checking

## Implementing tests

For best understand and lean about tests, i created this repo, but i put here all the steps for you can implements it and you knew all the dificults i faced.

- creating an new project react-native

```jsx
npx react-native init 'nameYourProject'
```

To default, actually tests jets are already includes on projects react native, because this don't will install others libs.

## Unit test

Unit test is a important test when we talk about to situation of we needed to testing a isolate pieces the code, or when we have parts of the codes for building from many peoples. 

For create a new test, the React Native has a pattern to write theses tests

```jsx
it('given a date in the past, colorForDueDate() returns red', () => {
  expect(colorForDueDate('2000-10-20')).toBe('red');
});
```

Use the it function by define test and with parameters wait a string and an function. Te first param is to describe test (the react native docs’ stipule some pattrns)

- Given
- When
- Then

and the secound params is refer to expected this test it should to do, in the most of parts are arrow functions

The first, is required install the jest  

```jsx
npm install -D jest @types/jest ts-jest
```

and need to create a config path, in root, it create jest.config

```jsx
module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
}
```

# Fonts

[CodeQuinta #2 - Testes do zero no ReactJS/React Native com Jest](https://www.youtube.com/watch?v=aK-wHbSD3Ws)

[Testing · React Native](https://reactnative.dev/docs/testing-overview)

https://github.com/weifxn/react-native-unit-testing

[REACT NATIVE Tutorial #7 - Unit testing a real app](https://www.youtube.com/watch?v=Jk5YDUxrg54)
