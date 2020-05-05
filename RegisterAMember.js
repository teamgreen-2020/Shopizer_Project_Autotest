
/* As a Customer i would like to become a member at Shopizer so that i can keep my Reciepts*/
describe('Positive feedback', ()=> {
    it('Positive feedback', () => {
    cy      .visit("http://localhost:8080")

    cy
            .get(':nth-child(2) > :nth-child(1) > .footer-wrapper > .usefull-link > :nth-child(4) > a')            .click()

    cy      .get('[name="billing.firstName"]')
            .type('Jamtara')

    cy      .get('[name="billing.lastName"]')
            .type('Nadu') 


    cy      .get('[name="billing.country"]')
            .select('Sweden')


    cy      .get('[name="billing.stateProvince"]')
            .type('Stockholm')

    cy      .get('#emailAddress')
            .type('Karona-mail@hemail.com')

    cy      .get('#password')
            .type('Aftonbladet2020')

    cy      .get('#passwordAgain')
            .type('Aftonbladet2020')

    cy      .get('#registrationForm > .btn')
            .click()

    });
});