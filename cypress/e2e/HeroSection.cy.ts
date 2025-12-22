describe('HeroSection', () => {
  beforeEach(() => {
    // Load application or specific route
    cy.visit('http://localhost:5173/');
  });

  it('renders the HeroTitle with correct text', () => {
    cy.get('h1').should('contain', 'Smart Builders Goto place to');
  });

  it('renders the HeroSubtitle', () => {
    cy.get('h2').should('contain', 'The Ultimate Business Buddy that has got You!');
  });

  it('renders the HeroDescription', () => {
    cy.get('p').should('contain', 'Optimize your business, work and life Anywhere. AnyDay.');
  });

  it('displays fun facts', () => {
    cy.get('.fun-fact-label').should('have.length', 2); 
    cy.get('.fun-fact-label').first().should('contain', '💼 500+ Active Users');
    cy.get('.fun-fact-label').last().should('contain', '🚀 300% ROI Increase');
  });

  it('renders the HeroImage', () => {
    cy.get('img[alt="Hero Illustration"]').should('exist');
  });
});