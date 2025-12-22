// cypress/e2e/EverythingYouNeedSection.cy.tsx

import { mount } from 'cypress/react';
import { EverythingYouNeedSection } from '../../src/components/section4_EverythingYouNeed/EverythingYouNeedSection'; 

describe('EverythingYouNeedSection', () => {
  it('renders correctly', () => {
    mount(<EverythingYouNeedSection />);

    // Assertions
    cy.get('h2').should('contain', 'Everything You Need to Succeed');
    cy.get('p').should('contain', 'Explore the AI-Enabled solutions platforms designed to support your business at every growth stage. Discover the impressive numbers behind our platform\'s success and the impact we\'ve made globally.');

    // Check for key benefits
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

    // Check for results
    const results = [
      "30%",
      "40%",
      "50%",
      "100%"
    ];

    results.forEach((result) => {
      cy.contains(result).should('be.visible');
    });

    // Get extra feature
    cy.get('span').should('contain', 'Recognised for outstanding service and quality');
  });
});