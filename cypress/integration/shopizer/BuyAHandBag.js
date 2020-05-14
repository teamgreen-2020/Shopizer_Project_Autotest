//As a customer i would like to add a Laptopbag to the cart so that i can purchase it and checkout

describe('As a Customer i would like to purchase a laptopbag', ()=> {
        it('adds the product to the cart', () => {
    cy.visit("http://localhost:8080")
    cy.clearCookies()
    cy.reload()
    
    //click Laptopbags
    cy      
            .get('a')
            .contains("Handbag")
            .click();
    
    cy      .get('#productsContainer > [data-id="10"]')
            .click()
    
    //choose product
    
    /* 
   cy
            .get('a[productid=8]')
            .contains('Add to cart')
            .click()
         */   
    cy      .get('.store-btn > .btn')
            .click()
    
    /*cy      
            .get('.cc-btn').click({force:true}) */
    cy
            .get('#hiddenSearchForm')
            .click({ force: true });
    //Checkout
    cy      
            .contains('Checkout')
            .click({ force: true });
    
    cy      .get('.entry-title')
            .contains('Review your order')
            
    
    cy      
            .get('.wc-proceed-to-checkout > a')
            .click({orce:true})
            .wait(500)
    //Log in
    cy      
            .contains('My Account')
            .click({ force: true });
    
    cy      
            .contains('Sign in')
            .click({ force: true });
            
    cy      
            .get('#signin_userName')
            .type('Karona-mail@hemail.com')
    
    
    cy
            .get('#signin_password')
            .type('Aftonbladet2020')
    
    
    cy
            .get('#genericLogin-button')
            .click()
    
            cy
            .get('#hiddenSearchForm')
            .click({ force: true });
    
    cy      
            .contains('Checkout')
            .click({ force: true });
            
    
    cy      
            .get('.wc-proceed-to-checkout > a')
            .click({force:true})
            .wait(500)
    
    cy      .get('[name="customer.billing.firstName"]')
            .clear()
            .type('Lady')
            
    cy      .get('[name="customer.billing.lastName"]')
            .clear()
            .type('Gaga')
    
    cy      .get('[name="customer.billing.address"]')
            .clear()
            .type('sthlm 08')
    
    cy      .get('[name="customer.billing.city"]')
            .clear()
            .type('roro')
    
    cy      .get('[name="customer.billing.postalCode"]')
            .clear()
            .type('1234')
    
    cy      .get('[name="customer.emailAddress"]')
            .clear()
            .type('fuddubolbol@gmail.com')
    
    cy      .get('[name="customer.billing.phone"]')
            .clear()
            .type('3333')        
    
    cy      .get('[name="customer.billing.country"]')
            .select('Australia')
    
    cy      .get('#billingStateList')
            .select('Tasmania')

    cy       .get('#billingPostalCode')
             .clear()
             .type(1245)      
           
    cy      .get('#submitOrder')
            .click({force:true})

    cy      .get('h1')
            .contains('Order completed')

         
    
    /*
    cy      
            .get('[name="customer.billing.firstName"]')
            .type('Jamtara')
    
    
    cy      
            .get('[name="customer.billing.lastName"]')
            .type('Nadu') 
    
    cy      
            .get('[name="customer.billing.address"]')
            .type('Boondi Raita 19') 
    
            
    cy      
            .get('[name="customer.billing.city"]')
            .type('London')
    
    cy      
            .get('[name="customer.billing.country"]')
            .select('United Kingdom')
    
    cy      
            .get('[name="customer.billing.stateProvince"]')
            .type('Any State')
            
    cy      
            .get('[name="customer.billing.postalCode"]')
            .type('143565')
            
    
    cy      
            .get('[name="customer.emailAddress"]')
            //.type('')
    
    
    cy      
            .get('[name="customer.billing.phone"]')
            .type('08-606060')
    
    
    /*cy      .get('#cbox')
            .check()
            .click({ force: true });*/
            });
    });
    
