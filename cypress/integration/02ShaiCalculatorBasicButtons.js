// This test will verify all basic buttons are working as expected.
//
describe('Calculator - Core Functionality', () => {

  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });

  it('should correctly calculate 2 + 7 = 9', () => {
    cy.get('#btn-2').click();
    cy.get('[id="result"]').should('have.text', '2');

    cy.get('#btn-add').click();
    cy.get('#expression').should('have.text', '2 +');

    cy.get('#btn-7').click();
    cy.get('#expression').should('have.text', '2 + 7');

    cy.get('#btn-equals').click();
    cy.get('[id="result"]').should('have.text', '9');
  });

  it('should correctly calculate 9 − 6 = 3', () => {
    cy.get('#btn-9').click();
    cy.get('[id="result"]').should('have.text', '9');

    cy.get('#btn-subtract').click();
    cy.get('#expression').should('have.text', '9 -');

    cy.get('#btn-6').click();
//    cy.get('#expression').should('have.text', '9-6');  BUG!!!

    cy.get('#btn-equals').click();
    cy.get('[id="result"]').should('have.text', '3');
  });

  it('should correctly calculate 3 × 4 = 12', () => {
    cy.get('#btn-3').click();
    cy.get('[id="result"]').should('have.text', '3');

    cy.get('#btn-multiply').click();
    cy.get('#expression').should('have.text', '3 ×');

    cy.get('#btn-4').click();
//    cy.get('#expression').should('have.text', '3*4');   BUG!!!

    cy.get('#btn-equals').click();
    cy.get('[id="result"]').should('have.text', '12');
  });

  it('should correctly calculate 8 ÷ 5 = 1.6', () => {
    cy.get('#btn-8').click();
    cy.get('[id="result"]').should('have.text', '8');

    cy.get('#btn-divide').click();
    cy.get('#expression').should('have.text', '8 ÷');

    cy.get('#btn-5').click();
//    cy.get('#expression').should('have.text', '8/5');     BUG!!!

    cy.get('#btn-equals').click();
    cy.get('[id="result"]').should('have.text', '1.6');
  });

});
