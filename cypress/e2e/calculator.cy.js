describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should have working number buttons", () => {
    cy.get("#number2").click();
    cy.get(".display").should("contain", "2");
  });

  // Do the number buttons update the display of the running total?
  it("should update the display of the running total when number buttons pressed", () => {
    cy.get("#number1").click();
    cy.get("#number2").click();
    cy.get("#running-total").should("contain", "12");
  });

  // Do the arithmetical operations update the display with the result of the operation?
  it("should update the display with the correct result of arithmetical operations", () => {
    cy.get("#number9").click();
    cy.get("#operator-multiply").click();
    cy.get("#number5").click();
    cy.get("#operator-equals").click();
    cy.get("#running-total").should("contain", "45");
  });

  // Can multiple operations be chained together?
  it("should update the display of the running total when number buttons pressed", () => {
    cy.get("#number7").click();
    cy.get("#operator-multiply").click();
    cy.get("#number6").click();
    cy.get("#operator_add").click();
    cy.get("#number5").click();
    cy.get("#operator-divide").click();
    cy.get("#number4").click();
    cy.get("#operator-subtract").click();
    cy.get("#number3").click();
    cy.get("#operator-equals").click();
    cy.get("#running-total").should("contain", "8.75");
  });

  // Is the output as expected for a range of numbers (for example, positive, negative, decimals and very large numbers)?
  it("should be able to display a result that is a negative number", () => {
    cy.get("#number8").click();
    cy.get("#operator-subtract").click();
    cy.get("#number9").click();
    cy.get("#operator-equals").click();
    cy.get("#running-total").should("contain", "-1");
  });

  it("should be able to display a result that is a decimal number", () => {
    cy.get("#number1").click();
    cy.get("#operator-divide").click();
    cy.get("#number5").click();
    cy.get("#operator-equals").click();
    cy.get("#running-total").should("contain", "0.2");
  });

  it("should be able to display a multiplication factor of 24", () => {
    cy.get("#number1").click();
    cy.get("#number0").click();
    cy.get("#number0").click();
    cy.get("#number0").click();
    cy.get("#operator-multiply").click();
    cy.get("#operator-multiply").click();
    cy.get("#operator-multiply").click();
    cy.get("#operator-multiply").click();
    cy.get("#operator-multiply").click();
    cy.get("#running-total").should("contain", "1e+24");
  });

  // What does the code do in exceptional circumstances? Specifically, if you divide by zero, what is the effect? Write a test to describe what you'd prefer to happen, and then correct the code to make that test pass (you will need to modify the Calculator model to meet this requirement).

  it("should be able to display Error when dividing by zero", () => {
    cy.get("#number8").click();
    cy.get("#operator-divide").click();
    cy.get("#number0").click();
    cy.get("#operator-equals").click();
    cy.get("#running-total").should("contain", "Error");
  });
});
