/**
 * Sum the numbers
 *
 * @param {array} numbers list of numbers to sum
 * @example
 *    cy.calculatorSum([1,2])
 */
export const calculatorSum = (numbers: number[]) => {
  return cy.then(() => numbers.reduce((acc, number) => acc + number, 0));
};
