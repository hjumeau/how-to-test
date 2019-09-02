describe('Account login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  describe('with the right account email and password', () => {
    it('should be logged', () => {
      cy.get('#username')
        .type('test-trophy').should('have.value', 'test-trophy')
      cy.get('#password')
        .type('test').should('have.value', 'test')
      cy.contains('Connexion').click()
      cy.contains('Welcome test@gmail.com')
    })
  })

  describe('with the wrong account email and password', () => {
    it('should show the error message', () => {
      cy.get('#username')
        .type('test-trophy').should('have.value', 'test-trophy')
      cy.get('#password')
        .type('wrong password').should('have.value', 'wrong password')
      cy.contains('Connexion').click()
      cy.contains('Username/password is wrong. Retry…')
    })
  })
})
