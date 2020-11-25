import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const numbers: number[] = [];
let sum: number = 0;

Given("first number is {int}", (number: number) => {
  numbers.push(number);
});

When("second number is {int}", (number: number) => {
  numbers.push(number);
});

Then("user executes sum function", () => {
  cy.calculatorSum(numbers).then((result) => {
    sum = result;
  });
});

Then("the sum is {int}", (check: number) => {
  expect(sum).equal(check);
});
