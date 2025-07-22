// ShaiCalculatorSanity.js created with Cypress
//
describe('Calculator - Sanity Test', () => {
  it('should correctly calculate 1 + 1 = 2', () => {
    cy.visit('http://localhost:5173/'); // Change to your calculator's URL or path

    cy.get('[id="btn-1"]').click();
    cy.get('[id="btn-add"]').click();
    cy.get('[id="btn-1"]').click();
    cy.get('[id="btn-equals"]').click();

    cy.get('[id="result"]').should('have.text', '2');
  });
});
