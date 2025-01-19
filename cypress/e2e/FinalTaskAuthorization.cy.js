describe('Authorization Test', () => {
    const baseUrl = 'https://testzootopia.loremipsum.ge/ka';
    beforeEach(() => {
        cy.visit(baseUrl);
      });
    it('should log in with valid credentials', () => {
        cy.url().should('include', '/ka');
      cy.get('h1').should('contain', 'ტოპ პროდუქცია');
      
      cy.get('#Group_15444').click({force: true})
      cy.fixture('register').then((register) => {
        cy.Authorization(register)

        cy.url({ timeout: 10000 }).should('eq', 'https://testzootopia.loremipsum.ge/ka/profile')


    })
    })
  })

  