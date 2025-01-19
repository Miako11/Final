describe('User Registration', () => {
  const baseUrl = 'https://testzootopia.loremipsum.ge/ka';
  beforeEach(() => {
    cy.visit(baseUrl);
  });
  it('should register a new user successfully', () => {
    cy.url().should('include', '/ka');
      cy.get('h1').should('contain', 'ტოპ პროდუქცია');
    cy.fixture('register').then((register) => {
      cy.register(register)
    })
    
  })
});





