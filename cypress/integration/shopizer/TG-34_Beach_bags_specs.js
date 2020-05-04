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
            .and('have.attr', 'href', 'http://localhost:8080/shop/ref=c:1')

            //Breadcrumb Beach bags
            .get('.breadcrumb > :nth-child(2) > a')
            .should('have.text', 'Beach bags')
            .and('have.attr', 'href', 'http://localhost:8080/shop/category/beach-bags.html/ref=c:1')
    })

    it('has Main Menu with Handbags, Beach bags, Laptop bags and Bags', () => {
        cy
            .get('#main_h')
            .should('contain', 'Handbags')
            .and('contain', 'Beach bags')
            .and('contain', 'Laptop Bags')
            .and('contain', 'Bags')    
    })

    it('has functional Main Menu buttons', () => {
        cy      .get('.mainmenu > nav > ul > :nth-child(1) > a')
            .should('have.attr', 'href', '/shop/category/handbags.html/ref=c:1,2' )

        cy  .get('.mainmenu > nav > ul > :nth-child(2) > a')
            .should('have.attr', 'href', '/shop/category/beach-bags.html/ref=c:1' )

        cy  .get('.mainmenu > nav > ul > :nth-child(3) > a')
            .should('have.attr', 'href', '/shop/category/laptop-bags.html/ref=c:1,3' )

        cy  .get('.mainmenu > nav > ul > :nth-child(4) > a')
            .should('have.attr', 'href', '/shop/category/bags.html/ref=c:1,4')


    })

	
	
//********************************************************************************************************	

/**
 * Author: Aris
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
	
	it('add items to shopping chart', () => {

    })

    it('does more stuff?', () => {

    })

    
}) //end describe