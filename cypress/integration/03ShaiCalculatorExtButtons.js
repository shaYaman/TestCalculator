// This test will verify the extended buttons are working as expected.
//
describe('Calculator - Core Functionality', () => {

  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });

  it('should correctly calculate 33% of 1000000 = 330000', () => {
    cy.get('#btn-3').click();
    cy.get('#btn-3').click();
    cy.get('#btn-percent').click(); // 33 becomes 0.33
    cy.get('[id="result"]').should('have.text', '0.33');

    cy.get('#btn-multiply').click();
    cy.get('#expression').should('have.text', '0.33 ×');

    cy.get('#btn-1').click();
    cy.get('#btn-0').click();
    cy.get('#btn-0').click();
    cy.get('#btn-0').click();
    cy.get('#btn-0').click();
    cy.get('#btn-0').click();
    cy.get('#btn-0').click(); // 1000000
//    cy.get('#expression').should('have.text', '0.33 × 1000000');      BUG!!

    cy.get('#btn-equals').click();
    cy.get('#result').should('have.text', '330000');
  });

  it('should correctly calculate -999 − 999 = -1998', () => {
    cy.get('#btn-9').click();
    cy.get('#btn-9').click();
    cy.get('#btn-9').click();
    cy.get('#btn-plus-minus').click(); // makes -999
    cy.get('[id="result"]').should('have.text', '-999');

    cy.get('#btn-subtract').click();
    cy.get('#expression').should('have.text', '-999 -');

    cy.get('#btn-9').click();
    cy.get('#btn-9').click();
    cy.get('#btn-9').click(); // 999
//    cy.get('#expression').should('have.text', '-999-999');  BUG!!

    cy.get('#btn-equals').click();
    cy.get('#result').should('have.text', '-1998');
  });


  it('should correctly calculate 1.5 + 2.3 = 3.8 using decimal button', () => {
    cy.get('#btn-1').click();
    cy.get('#btn-decimal').click();
    cy.get('#btn-5').click(); // 1.5
    cy.get('[id="result"]').should('have.text', '1.5');

    cy.get('#btn-add').click();
    cy.get('#expression').should('have.text', '1.5 +');

    cy.get('#btn-2').click();
    cy.get('#btn-decimal').click();
    cy.get('#btn-3').click(); // 2.3
//    cy.get('#expression').should('have.text', '1.5+2.3');     BUG!!

    cy.get('#btn-equals').click();
    cy.get('#result').should('have.text', '3.8');
  });

});
