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
Now, we will make theses tests in the applications. To more organization paths, i created, in root, a path named __tests__, and inside it, i intent is to put all archives about tests this app.

In this project, using unit tests, i wanted to test the action to counter button, so i created the file called count.screen.test.js and that i implemments the test. For this, it’s need to import React, the page to test and any resources of the test’s libary. After this, it’s neet to follow this structure:

```jsx
describe('test', () => {

  it('<name-test>', () => {
    const page = render(<App/>) // create, render, this test object, the page
    const buttonCount = page.getByTestId('buttonCounter') // here find the element inside the page 
    fireEvent.press(buttonCount) // here, called an action
    expect(page.getByTestId('textLabel').children.toString()).toBe('Count: ,1') // and here, ending, put the value expected of the action
    /* needs to use ',' by to indicate an parameter ( `variable inside text ${...}` ) */
  })

})
```

### Snapshots tests

The snapshots tests, is a test by apps’ graphic interface, saving that to don’t change with codes upgrades. Basically it’s make to compare the UI rendered with the default created by you. this case it’s more used to frontend.

For to implemment these test, we needed to create other archive to generate the default’s snapshot. In this file, follow this structure:

```jsx
import React from 'react';
import App from '../App';
import renderer from 'react-test-renderer'

/* create a snapshot by defalut and compared to tests */
test('renders correctly', () => {
  const tree = renderer.create(<App/>).toJSON()
  expect(tree).toMatchSnapshot()
})
```

When we runner the tests, will be created this folther: __snapshots__, following this secture

```jsx
|
|->__tests__
	|
	|->count.create_snapshot.test
	|
	|->__snapshots__
		|
		|->count.snapshot.test.js.snap

```

This new file, created after run, is similar with this.This file has to commit together the rest the changed code.

```jsx
// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`renders correctly 1`] = `
<View
  style={
    Object {
      "alignItems": "center",
      "backgroundColor": "#487",
      "borderWidth": 10,
      "flex": 1,
      "justifyContent": "center",
      "padding": 15,
    }
  }
>
  <Text
    style={
      Object {
        "color": "#fff",
        "fontSize": 25,
        "marginVertical": 10,
      }
    }
  >
    App by unit test
  </Text>
  <View
    accessible={true}
    collapsable={false}
    focusable={true}
    onClick={[Function]}
    onResponderGrant={[Function]}
    onResponderMove={[Function]}
    onResponderRelease={[Function]}
    onResponderTerminate={[Function]}
    onResponderTerminationRequest={[Function]}
    onStartShouldSetResponder={[Function]}
    style={
      Object {
        "backgroundColor": "#806",
        "borderRadius": 5,
        "borderWidth": 1,
        "marginVertical": 10,
        "opacity": 1,
        "paddingHorizontal": 15,
        "paddingVertical": 10,
      }
    }
    testID="buttonCounter"
  >
    <Text
      style={
        Object {
          "color": "#fff",
          "fontSize": 23,
        }
      }
    >
      Button
    </Text>
  </View>
  <Text
    style={
      Object {
        "borderRadius": 5,
        "borderWidth": 2,
        "color": "#fff",
        "fontSize": 25,
        "marginVertical": 10,
        "padding": 10,
      }
    }
    testID="textLabel"
  >
    Count: 
    0
  </Text>
</View>
`;
```

Now, every runs the tests, the snapshot will to compare with this file created and find for the changed, if has


# Fonts

[CodeQuinta #2 - Testes do zero no ReactJS/React Native com Jest](https://www.youtube.com/watch?v=aK-wHbSD3Ws)

[Testing · React Native](https://reactnative.dev/docs/testing-overview)

https://github.com/weifxn/react-native-unit-testing

[REACT NATIVE Tutorial #7 - Unit testing a real app](https://www.youtube.com/watch?v=Jk5YDUxrg54)

[Teste de Snapshot](https://jestjs.io/pt-BR/docs/snapshot-testing)

[Testando Apps React Native](https://jestjs.io/pt-BR/docs/tutorial-react-native)
