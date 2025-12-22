import React from 'react';
import { mount } from '@cypress/react';
import { TrustedBySection } from '../../src/components/TrustedBySection'; 

describe('TrustedBySection', () => {
  it('renders correctly with trusted companies', () => {
    mount(<TrustedBySection />);
    
    // Assertions for headings
    cy.get('h2').should('contain', 'Trusted by Leading Organizations Worldwide');
    cy.get('p').should('contain', 'Join thousands of successful businesses that have transformed their operations with Xcelsz Solutions Platform');
    
    // Check if the trusted companies are displayed
    cy.get('.carousel-item').should('have.length', 10);
  });
});