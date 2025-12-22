describe('FunFactsSection', () => {
  beforeEach(() => {
    // Load application or specific route
    cy.visit('http://localhost:5173/');
  });

  it('should display the section title', () => {
    cy.contains('Fun Facts & Achievements').should('be.visible');
  });

  it('should display the subtitle', () => {
    cy.contains('Real numbers showcasing the transformative power of our ecosystem and the incredible impact we\'ve made across the globe.').should('be.visible');
  });

  it('should display the platform statistics title', () => {
    cy.contains('Platform Statistics').should('be.visible');
  });

  it('should display platform statistics', () => {
    const platformStats = [
      "Active Users Worldwide",
      "Countries Served",
      "Total Deals Sourced",
      "Customer Satisfaction",
      "Support Availability",
      "Success Rate",
      "Average ROI Increase",
      "Data Security",
      "Faster Implementation",
      "Lives Impacted"
    ];

    platformStats.forEach(stat => {
      cy.contains(stat).should('be.visible');
    });
  });

  it('should display the impact statistics title', () => {
    cy.contains('Impact Statistics').should('be.visible');
  });

  it('should display impact statistics', () => {
    const achievements = [
      "Businesses Report Growth",
      "Months Average Payback Period",
      "Platforms Integrated Solutions",
      "New Users Daily"
    ];

    achievements.forEach(achievement => {
      cy.contains(achievement).should('be.visible');
    });
  });

  it('should display trusted by message', () => {
    cy.contains('Trusted by businesses in over 10 countries worldwide').should('be.visible');
  });
});