describe('Add Products to Cart on Test Zootopia', () => {
    const baseUrl = 'https://testzootopia.loremipsum.ge/ka';
    
    beforeEach(() => {
      cy.visit(baseUrl);
    });
    
    it('should add a product to the cart', () => {
 
      cy.get('h1').should('contain', 'ტოპ პროდუქცია');
    
      
      cy.get('.product-cart')
        .first()
        .within(() => {
          cy.get('button[onclick="addToCart(this)"]')  
            .click({ force: true });
        });
    
      cy.get('.cart-badge') 
        .should('be.visible')
        .and('contain', '1');  
    });
    
    it('should add multiple products to the cart', () => {
     
      cy.get('h1').should('contain', 'ტოპ პროდუქცია');
    
  
      cy.get('.product-cart')  
        .each(($el, index) => {
          if (index < 3) {
            cy.wrap($el).within(() => {
              cy.get('button[onclick="addToCart(this)"]')  
                .should('be.visible')
                .click({ force: true });  
            });
          }
        });
    
      
      cy.get('.cart-badge') 
        .should('be.visible')
        .and('contain', '3');  
    });
    
    it('should verify cart content', () => {
    
      cy.get('h1').should('contain', 'ტოპ პროდუქცია');
    
     
      cy.get('data-name="Path 1"')  
        .should('be.visible').click();
    
      cy.get('.cart-item')
        .should('have.length', 3)
        .each(($item) => {
          cy.wrap($item).find('.product-name').should('not.be.empty');  
        });
    
      
      cy.get('.total-price')
        .should('be.visible')
        .and('match', /^[0-9,.]+$/); 
    });
  });
  
  
  