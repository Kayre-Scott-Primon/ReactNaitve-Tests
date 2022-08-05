import React from 'react';
import App from '../App';
import { render, fireEvent } from '@testing-library/react-native'

describe('test', () => {

  it('count plus one', () => {
    const page = render(<App/>)
    const buttonCount = page.getByTestId('buttonCounter')
    fireEvent.press(buttonCount)
    expect(page.getByTestId('textLabel').children.toString()).toBe('Count: ,1') 
    /* needs to use ',' by to indicate an parameter */
  })

})