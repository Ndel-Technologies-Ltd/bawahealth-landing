describe('Succeed Section', () => {
  beforeEach(() => {
    // Load application or specific route
    cy.visit('http://localhost:5173/');
  });

  it('should display the section title', () => {
    cy.contains('Everything You Need to Succeed').should('be.visible');
  });

  it('should display the subtitle', () => {
    cy.contains('Explore the AI-Enabled solutions platforms designed to support your business at every growth stage. Discover the impressive numbers behind our platform\'s success and the impact we\'ve made globally.').should('be.visible');
  });

  it('should display key benefits', () => {
    const benefits = [
      "Guaranteed 4X ROI",
      "Save Time",
      "Global Connectivity",
      "Expert Certified Agile Talents",
      "Get Pro Results",
      "Rapid Deployment & Scaling",
      "No Hassle Project Management",
      "Cut Costs",
      "Enhanced Productivity",
      "Scalable Solutions",
      "Skip the Stress",
      "Real-time Analytics",
      "Complete Project Ownership",
      "Pre-Vetted Professional Network",
      "24/7 Support Available",
      "Data Security"
    ];

    benefits.forEach((benefit) => {
      cy.contains(benefit).should('be.visible');
    });
  });

  it('should display results', () => {
    const results = [
      "30%",
      "40%",
      "50%",
      "100%"
    ];

    results.forEach((result) => {
      cy.contains(result).should('be.visible');
    });
  });

  it('should display the extra feature', () => {
    cy.contains('Recognised for outstanding service and quality').should('be.visible');
  });
  
});