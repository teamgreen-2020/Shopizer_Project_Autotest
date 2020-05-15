/**
 * Author: Niklas
 */

 let user

 before(function fetchUser () {
    cy.request('POST', '/api/v1/private/login', {
      password: 'password',
      username: 'admin@shopizer.com'
    })
    .its('body')
    .then((res) => {
      user = res
    })
  }) 

  describe('/users', () => {

    it('returns status code 200', () => {
        cy.request({
            url: '/api/v1/private/users/',
            auth: {
            bearer: user.token,
        },
    })
        .its('status')
        .should('eq', 200)
    })
    
    it('returns json', () => {
        cy.request({
            url: '/api/v1/private/users/',
            auth: {
            bearer: user.token,
        },
    })
        .its('headers.content-type')
        .should('include', 'application/json')
    })

    it('has data property as an array with 1 element ', () => {
        cy.request({
            url: '/api/v1/private/users/',
            auth: {
            bearer: user.token,
        },
    })
    .then((resp) => {
        expect(resp.body).to.have.property('data')
        expect(resp.body.data).to.be.an('array').that.has.lengthOf(1)

        //expect(resp.body.data).to.have.deep.members({['emailAddress': 'admin@shopizer.com']})
        //expect(resp.body.data.getfirst()).contains.text('admin@shopizer.com')
        // .its('body')
        // .should('contain', 'amdin@shopizer.com')

      

        //     const result = JSON.parse(JSON.stringify(resp.body));
        //     console.log(result)
        // //token = result.authentication.token;
        // expect(result.data.eq(0)).to.contain('admin@shopizer.com')
        //  })

        // .its('data')
        // .should('be.an', 'array')
        //.and('contains', 'admin@shopizer.com')

        // .then((resp) => {
        // expect(resp.body.data).to.be.an('array').that.contains.something.like({title: 'Blah'});
        
        })

    })




  })