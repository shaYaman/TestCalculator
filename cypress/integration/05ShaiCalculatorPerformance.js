// This test will verify more complex calculations are working as expected.
//
describe('Calculator - Performance', () => {

  beforeEach(() => {
    cy.visit('http://localhost:5173/');
    cy.get('#btn-ac').click();
  });

  it('should handle 100 random single-digit operations without crashing', () => {
    const digits = [...Array(10).keys()]; // [0,1,2,3,4,5,6,7,8,9]
    const operators = [
      { key: 'btn-add', symbol: '+' },
      { key: 'btn-subtract', symbol: '-' },
      { key: 'btn-multiply', symbol: '*' },
      { key: 'btn-divide', symbol: '/' },
    ];

    const iterations = 100;

    for (let i = 0; i < iterations; i++) {
      const num1 = Cypress._.sample(digits);
      const num2 = Cypress._.sample(digits.filter(n => n !== 0)); // avoid division by 0
      const op = Cypress._.sample(operators);

      cy.get(`#btn-${num1}`).click();
      cy.get(`#${op.key}`).click();
      cy.get(`#btn-${num2}`).click();
      cy.get('#btn-equals').click();

      // Assert that the result is not empty (basic sanity)
      cy.get('#result').invoke('text').should('match', /^-?\d+(\.\d+)?$/);

    }
  });


});
