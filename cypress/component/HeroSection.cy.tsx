import { mount } from '@cypress/react';
import { HeroSection } from '../../src/components/HeroSection'; 

describe('HeroSection', () => {
  it('renders correctly', () => {
    mount(<HeroSection />);
    
    // Assertions
    cy.get('h1').should('contain', 'Smart Builders Goto place to');
    cy.get('h2').should('contain', 'The Ultimate Business Buddy that has got You!');
    cy.get('p').should('contain', 'Optimize your business, work and life Anywhere. AnyDay.');
    cy.get('.fun-fact-label').should('have.length', 2);
    cy.get('img[alt="Hero Illustration"]').should('exist');
  });
});