//As a customer i would like to add products to the cart so that i can remove which i dont want.

describe('As a Customer i would like to purchase a laptopbag', ()=> {
    it('Removes the product to the cart', () => {
cy.visit("http://localhost:8080") 

cy      
        .get('a')
        .contains(" Laptop Bags")
        .click({force:true});


cy      .get('#productsContainer > .col-md-4 > .product-content > .store-btn > .store-btn-addtocart > .addToCart')
        .click({force:true})

cy
        .get('a[productid=8]')
        .contains('Add to cart',{timeout:5000})
        .click({force:true})

cy      .get('.cc-btn')
        .click({force:true})

cy
        .get('#hiddenSearchForm')
        .click({ force: true });

cy      
        .contains('Checkout')
        .click({ force: true });

cy      .get('h1')
        .contains('Review your order')

cy      .get('.cart-del')
        .click()
/*
cy      .get('.open > .dropdown-toggle > .hidden-xs')
        .contains('No items in your shopping cart')

        */

});
});