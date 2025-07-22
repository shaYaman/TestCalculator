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

  it('should display all digits when clicked (0–9)', () => {
    const digits = [1,2,3,4,5,6,7,8,9,0];
    digits.forEach(digit => {
      cy.get(`#btn-${digit}`).click();
    });
    cy.get('#result').should('have.text', '1234567890');
  });
});
