import { mount } from 'cypress/react';
import { HowItWorksSection } from '../../src/components/section9_HowItWorks/HowItWorksSection'; 

describe('HowItWorksSection', () => {
  it('renders correctly', () => {
    mount(<HowItWorksSection />);

    // Assertions
    cy.get('h2').should('contain', 'How It Works?');
    cy.get('h3').should('contain', 'Your Journey to Business Success');
    cy.get('p').should('contain', 'Follow our proven 8-step process to transform your business operations and achieve unprecedented growth with Xcelsz Solutions Platform.');

    // Check for the steps
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

    // // Check mobile indicators
    // cy.get('.flex.items-center').should('exist'); 
  });
});