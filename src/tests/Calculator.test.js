import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })
  // calculator.add() - add 1 to 4 and get 5
  it("should add two numbers together", () => {
    const button1 = container.getByTestId("number1");
    const button4 = container.getByTestId("number4");
    const runningTotal = container.getByTestId("running-total");
    const add = container.getByTestId("operator-add");
    const equals = container.getByTestId("operator-equals");
    fireEvent.click(button1);
    fireEvent.click(add);
    fireEvent.click(button4);
    fireEvent.click(equals);
    expect(runningTotal.textContent).toEqual("5");
  });
  
  // calculator.subtract() subtract 4 from 7 and get 3
  it("should subtract number from first number", () => {
    const button7 = container.getByTestId("number7");
    const button4 = container.getByTestId("number4");
    const runningTotal = container.getByTestId("running-total");
    const subtract = container.getByTestId("operator-subtract");
    const equals = container.getByTestId("operator-equals");
    fireEvent.click(button7);
    fireEvent.click(subtract);
    fireEvent.click(button4);
    fireEvent.click(equals);
    expect(runningTotal.textContent).toEqual("3");
  });
  
  // calculator.multiply() - multiply 3 by 5 and get 15
  it("should multiply two numbers together", () => {
    const button3 = container.getByTestId("number3");
    const button5 = container.getByTestId("number5");
    const runningTotal = container.getByTestId("running-total");
    const multiply = container.getByTestId("operator-multiply");
    const equals = container.getByTestId("operator-equals");
    fireEvent.click(button3);
    fireEvent.click(multiply);
    fireEvent.click(button5);
    fireEvent.click(equals);
    expect(runningTotal.textContent).toEqual("15");
  });
  
  // calculator.divide() - divide 21 by 7 and get 3
  it("should divide two numbers", () => {
    const button2 = container.getByTestId("number2");
    const button1 = container.getByTestId("number1");
    const button7 = container.getByTestId("number7");
    const runningTotal = container.getByTestId("running-total");
    const divide = container.getByTestId("operator-divide");
    const equals = container.getByTestId("operator-equals");
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(divide);
    fireEvent.click(button7);
    fireEvent.click(equals);
    expect(runningTotal.textContent).toEqual("3");
  });
  
  // calculator.numberClick() - concatenate multiple number button clicks
  it("should concatenate multiple number button clicks", () => {
    const button2 = container.getByTestId("number2");
    const button4 = container.getByTestId("number4");
    const button6 = container.getByTestId("number6");
    const button8 = container.getByTestId("number8");
    const runningTotal = container.getByTestId("running-total");
    fireEvent.click(button2);
    fireEvent.click(button4);
    fireEvent.click(button6);
    fireEvent.click(button8);
    expect(runningTotal.textContent).toEqual("2468");
  });

  // calculator.operatorClick() - chain multiple operations together
  it("should chain multiple operations together", () => {
    const button2 = container.getByTestId("number2");
    const button4 = container.getByTestId("number4");
    const button6 = container.getByTestId("number6");
    const button8 = container.getByTestId("number8");
    const add = container.getByTestId("operator-add");
    const subtract = container.getByTestId("operator-subtract");
    const multiply = container.getByTestId("operator-multiply");
    const divide = container.getByTestId("operator-divide");
    const equals = container.getByTestId("operator-equals");
    const runningTotal = container.getByTestId("running-total");
    fireEvent.click(button2);
    fireEvent.click(multiply);
    fireEvent.click(button4);
    fireEvent.click(add);
    fireEvent.click(button6);
    fireEvent.click(subtract);
    fireEvent.click(button8);
    fireEvent.click(divide);
    fireEvent.click(button2);
    fireEvent.click(equals);
    expect(runningTotal.textContent).toEqual("3");
  }); 

  // calculator.clearClick() - clear the running total without affecting the calculation
  it("should clear the running total without affecting the calculation", () => {
    const button1 = container.getByTestId("number1");
    const button4 = container.getByTestId("number4");
    const runningTotal = container.getByTestId("running-total");
    const add = container.getByTestId("operator-add");
    const equals = container.getByTestId("operator-equals");
    const clear = container.getByTestId("clear")
    fireEvent.click(button1);
    fireEvent.click(add);
    fireEvent.click(button4);
    fireEvent.click(clear);
    fireEvent.click(add);
    fireEvent.click(button4);
    fireEvent.click(equals);
    expect(runningTotal.textContent).toEqual("5");
  });
});

