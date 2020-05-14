//As a customer i would like to add products to the cart so that i can remove which i dont want.

describe('As a Customer i would like to purchase a laptopbag', ()=> {
    it('Removes the product to the cart', () => {
cy.visit("http://localhost:8080") 

cy      
        .get('a')
        .contains(" Laptop Bags")
        .click();


cy      .get('#productsContainer > .col-md-4 > .product-content > .store-btn > .store-btn-addtocart > .addToCart')
        .click()

cy
        .get('a[productid=8]')
        .contains('Add to cart')
        .click()

cy      .get('.cc-btn')
        .click()

cy
        .get('#hiddenSearchForm')
        .click({ force: true });

cy      
        .contains('Checkout')
        .click({ force: true });

        
// checkar att den har kommit till Review order
cy      .get('h1')
        .contains('Review your order')

        

cy      
        .get('[class="input-small quantity text-center"][value="2"]')
        .type('{backspace}')
        .type('1')

cy      
        .get(':nth-child(2) > td > .amount')
        .contains('USD156.00')

cy      
        .get('.buttons-cart > [href="#"]')
        .click({ force: true });

cy      
        .get(':nth-child(1) > td > .amount')
        .contains('USD78.00')

cy
        .get('.wc-proceed-to-checkout > a')
        .click({ force: true });

cy      .get('.cart_item > .product-name')
        .contains('Vintage laptop bag x 1')

    });
});