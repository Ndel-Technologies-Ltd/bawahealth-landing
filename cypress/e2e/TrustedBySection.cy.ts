describe('TrustedBySection', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/'); 
  });

  it('should display the trusted companies section', () => {
    cy.get('h2').should('contain', 'Trusted by Leading Organizations Worldwide');
    cy.get('p').should('contain', 'Join thousands of successful businesses that have transformed their operations with Xcelsz Solutions Platform');
    
    // Check if the carousel items are rendered
    cy.get('.carousel-item').should('have.length', 10); 
  });
});