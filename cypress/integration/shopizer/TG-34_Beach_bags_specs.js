/**
 * @author Niklas
 */

describe('/beach-bags', () => {

    beforeEach(() => {
        cy.visit('/shop/category/beach-bags.html/')
    })


    it('greets with Beach Bags', () => {
        cy.contains('h2', 'Beach bags')

    })

    it('has breadcrumb Home -> Beach bags', () => {
        cy
            //Breadcrumb Home
            .get('.breadcrumb > :nth-child(1) > a') 
            .should('have.text', 'Home')
            .and('have.attr', 'href', 'http://localhost:8080/shop/ref=c:1,1')

            //Breadcrumb Beach bags
            .get('.breadcrumb > :nth-child(2) > a')
            .should('have.text', 'Beach bags')
            .and('have.attr', 'href', 'http://localhost:8080/shop/category/beach-bags.html/ref=c:1,1')
    })

	it('has Main Menu whtih menu item Home, Language, Products, Page', () => {
        cy.get('.nav > :nth-child(1) > .dropdown-toggle')
        .should('have.attr', 'href', '/shop/')
        .and('have.text', 'Home')

        cy  .get('.nav > :nth-child(2) > .dropdown-toggle')
            .should('have.text', 'Language ')

        cy  .get('.nav > :nth-child(3) > .dropdown-toggle')
            .should('have.text', 'Products ')

        cy  .get('.nav > :nth-child(4) > .dropdown-toggle')
            .should('have.text', 'Page ')
    })
	
//********************************************************************************************************	

/**
 * @author: Aris
 */ 
	
    it('sorts by name', () => {
		cy  .get('#filter', {timeout:5000}).select('Name')
            .should('have.value','item-name')
            .and('be.visible')

    })

    it('sorts by price', () => {
		
		cy  .get('#filter').select('item-price')
            .should('have.value','item-price')
            .and('be.visible')
        
        cy  .contains('item-price').should('be.visible')
        

    })

    it('displays retro collection', () => {
		
		cy	.get(':nth-child(4) > :nth-child(2) > a')
          	.should('have.attr', 'href', 'javascript:filterCategory(\'BRAND\',\'51\')')
          	.click()
       
		cy	.get('#productsContainer > .col-md-4')
          	.should('be.visible')
          	.and('contain.text', 'Retro style bag')
        
        cy	.get('.products-grid')
          	.should('contain.text', 'Retro style bag')


		
		
    })

    it('displays Beach collection', () => {
		
		cy	.get(':nth-child(4) > :nth-child(3) > a')
          	.should('have.attr', 'href', 'javascript:filterCategory(\'BRAND\',\'54\')')
          	.click()
        
        cy	.get('#productsContainer > .col-md-4')
          	.should('be.visible')
          	.and('contain.text', 'Vintage beach bag')

    })

//************************************************************************************************************
	
	xit('add items to shopping chart', () => {
        //TODO
    })

    xit('does more stuff?', () => {
        //TODO?
    })

    
}) //end describe
