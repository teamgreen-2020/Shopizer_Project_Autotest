/**
 * Author: Aris
 */ 


/// <reference types='cypress' />

describe('admin login page test', () => {
    beforeEach( () => {
        cy.visit('http://localhost:8080/admin/')
    
    })

    it('greets with Logon', () => {
        //cy.get('#tabbable').contains('Logon').should('have.value', 'Logon')
        cy.contains('Logon')
          .should('be.visible')
        
    })

    it('requires username', () => {
        cy.get('#formSubmitButton').click()
        cy.get('#username_help > font > strong')
          .should('be.visible')

    })

    it('requires password', () => {
        cy.get(':nth-child(1) > .controls > #username').type('admin')
        cy.get('#formSubmitButton').click()
        cy.get('strong')
          .should('be.visible')
    })      
    
    it('links to forgot password', () => {
        cy.get('#changePassword').should('have.text', 'Forgot Password?')
    
    })      

    it('requires valid username and password', () => {
        
        cy.get(':nth-child(1) > .controls > #username').type('admin')
        cy.get('#password').type('password2')
        cy.get('#remember').check()
        cy.get('#formSubmitButton').click()
        cy.get('.alert').should('contain', 'Invalid username or password')

    })

    it('navigates to home/ on succesful login', () => {
        cy.get(':nth-child(1) > .controls > #username').type('admin@shopizer.com')
        cy.get('#password').type('password')
        cy.get('#remember').check()
        cy.get('#formSubmitButton').click()
        cy.url().should('include', '/home.html')
        
    })
    

})