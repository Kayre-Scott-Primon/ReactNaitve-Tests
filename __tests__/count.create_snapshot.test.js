import React from 'react';
import App from '../App';
import renderer from 'react-test-renderer'

/* create a snapshot by defalut and compared to tests */
test('renders correctly', () => {
  const tree = renderer.create(<App/>).toJSON()
  expect(tree).toMatchSnapshot()
})