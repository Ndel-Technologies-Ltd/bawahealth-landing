// cypress/e2e/HowItWorksSection.cy.ts

describe('How It Works Section', () => {
  beforeEach(() => {
    // Load application or specific route
    cy.visit('http://localhost:5173/');
  });

  it('should display the section title', () => {
    cy.contains('How It Works?').should('be.visible');
  });

  it('should display the subtitle', () => {
    cy.contains('Your Journey to Business Success').should('be.visible');
  });

  it('should display the description', () => {
    cy.contains('Follow our proven 8-step process to transform your business operations and achieve unprecedented growth with Xcelsz Solutions Platform.').should('be.visible');
  });

  it('should check if all the steps exist', () => {
    const steps = [
      "Select Price Plan",
      "Sign Up",
      "Make Payment",
      "Login",
      "Get Started",
      "Connect & Collaborate",
      "Customize Your Experience",
      "Monitor & Optimize"
    ];

    steps.forEach((step) => {
      cy.contains(step).should('exist');
    });
  });

//   it('should display mobile indicators', () => {
//     cy.get('.flex.items-center').should('exist'); 
//   });
});