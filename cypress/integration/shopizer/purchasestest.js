/// <reference types="cypress" />
//As a customer I want to be able to make a purchase without being logged in

//Open page
describe('Product Purchase Test', function () 
{
    it('Open page', function () {
        cy.visit('http://localhost:8080/shop/');
      
    })
    //Add to cart 
    it ('As a customer I want to be able to make a purchase without being logged in', function () {
        cy.get('a').contains('Retro style bag').click()
        cy.get('.store-btn > .btn').click()
        //cy.get('.store-btn > .btn')
    
        //cy.get('button').contains('Add to cart').click()

        cy.get(':nth-child(3) > .dropdown-toggle > .hidden-xs').click({force:true})
        cy.contains('Checkout')
        .click({ force: true });

        //Checkout

        cy.get('.cc-btn').click({force:true})
        cy.wait(500)
        cy.get('.wc-proceed-to-checkout > a').click({force:true})
        

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

         
        cy.get('#billingPostalCode')
        .type('123 456')
        .should('have.value', '123 456')

        cy.get('#customer\\.emailAddress')
        .type('test@test.com')
        .should('have.value', 'test@test.com')

        cy.get('#customer\\.billing\\.phone')
        .type('123123123')
        .should('have.value', '123123123')

        //Submit order
        cy.get('#submitOrder')
        .click()

        //Order completed msg
        cy.get('h1')
          .should('contain.text', 'Order completed')

        //thank you msg
        cy.get('.span12 > :nth-child(1)')
          .should('contain.text', 'Thank you for ordering from Default store.')
    
        }

    ) 
    
  })