import { mount } from 'cypress/react';
import { FunFactsSection } from '../../src/components/section5_FunFacts/FunFactsSection'; // Adjust this path

describe('FunFactsSection', () => {
  it('renders correctly', () => {
    mount(<FunFactsSection />);

    // Assertions
    cy.get('h2').should('contain', 'Fun Facts & Achievements');
    cy.get('p').should('contain', 'Real numbers showcasing the transformative power of our ecosystem and the incredible impact we\'ve made across the globe.');

    // Check for platform statistics
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

    // Check for impact statistics
    const achievements = [
      "Businesses Report Growth",
      "Months Average Payback Period",
      "Platforms Integrated Solutions",
      "New Users Daily"
    ];

    achievements.forEach(achievement => {
      cy.contains(achievement).should('be.visible');
    });

    cy.contains('Trusted by businesses in over 10 countries worldwide').should('be.visible');
  });
});