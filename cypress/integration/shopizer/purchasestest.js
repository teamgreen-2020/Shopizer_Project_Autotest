/// <reference types="cypress" />

describe('Product Purchase Test', function () 
{
    it('Open page', function () {
        cy.visit('http://localhost:8080/shop');
      
    })
    it ('As a customer I want to be able to make a purchase without being logged in', function () {
        cy.get('a').contains('Chic vintage DeVille').click()
        cy.get('.store-btn > .btn').click()
        cy.get('#miniCartSummary > a').click({force:true})
    
        //cy.get('button').contains('Add to cart').click()
    
        cy.get('#miniCartDetails > li.checkout-bg > a').should('be.hidden').click({force:true})
        cy.get('#miniCartSummary > a').contains('Shopping cart').click()

        cy.get('.wc-proceed-to-checkout > a').click()

        //Billing information 
        cy.get('#customer\\.firstName')
        .type('Lisa')
        .should('have.value', 'Lisa')
    
        cy.get('#customer\\.lastName')
         .type ('Nilsson')
         .should('have.value', 'Nilsson')

        cy.get('#customer\\.billing\\.company')
         .type('Iths')
         .should('have.value', 'Iths')

         cy.get('#customer\\.billing\\.address')
         .type('Testtest 1')
         .should('have.value', 'Testtest 1')

         cy.get('#customer\\.billing\\.city')
         .type('Vancouver')
         .should('have.value', 'Vancouver')

         cy.get('#customer\\.billing\\.country')
         .type('Canada')
         .should('have.value', 'CA')

        
         cy.get('#billingStateList')
         .select('Alberta')
        //.should('have.attr', 'name', 'billing\.stateProvince')
        //.and('have.value', 'Alberta')


        cy.get('#billingPostalCode')
        .type('123 456')
        .should('have.value', '123 456')

        cy.get('#customer\\.emailAddress')
        .type('test@test.com')
        .should('have.value', 'test@test.com')

        cy.get('#customer\\.billing\\.phone')
        .type('123123123')
        .should('have.value', '123123123')
       
         

        }

    ) 
    
  })