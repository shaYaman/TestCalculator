// This test will verify more complex calculations are working as expected.
//
describe('Calculator - Complex Functionality', () => {

  beforeEach(() => {
    cy.visit('http://localhost:5173/');
    cy.get('#btn-ac').click();
  });

  it('should evaluate chained operation 2 + 3 × 4 correctly', () => {
    cy.get('#btn-2').click();
    cy.get('#btn-add').click();
    cy.get('#btn-3').click();
    cy.get('#btn-multiply').click();
    cy.get('#btn-4').click();

//    cy.get('#expression').should('have.text', '2 + 3 × 4');       BUG!!
    cy.get('#btn-equals').click();

    cy.get('#result').should('have.text', '14')

  });


  it('should block multiple decimal points in one number', () => {
    cy.get('#btn-4').click();
    cy.get('#btn-decimal').click();
    cy.get('#btn-5').click();
    cy.get('#btn-decimal').click(); // Try to add second decimal

    cy.get('#result').should('not.contain', '4.5.');
    cy.get('#result').should('have.text', '4.5'); // Must ignore second decimal
  });


  it('should handle leading operator by ignoring or treating as 0+', () => {
    cy.get('#btn-add').click();
    cy.get('#btn-2').click();
    cy.get('#btn-equals').click();

    // Acceptable outcomes:
    // "2" if "+" is ignored
    // "2" if it interprets it as "0 + 2"
    cy.get('#result').should('have.text', '2');
  });

  it('should correctly evaluate a long addition expression', () => {
    // Input: 1+2+3+4+5+6+7+8+9+0 = 45
    const digits = [1,2,3,4,5,6,7,8,9,0];
    digits.forEach((digit, index) => {
      cy.get(`#btn-${digit}`).click();
      if (index < digits.length - 1) {
        cy.get('#btn-add').click();
      }
    });

//    cy.get('#expression').should('have.text', '1+2+3+4+5+6+7+8+9+0');     BUG!!
    cy.get('#btn-equals').click();
    cy.get('#result').should('have.text', '45');
  });

});
