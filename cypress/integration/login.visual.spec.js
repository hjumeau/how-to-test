describe("Account login", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should match the previous screenshot 'login page'", () => {
    cy.contains("Connexion");
    cy.matchImageSnapshot();
  });

  it("should match the previous screenshot 'home page'", () => {
    cy.get("#username")
      .type("test-trophy");
    cy.get("#password")
      .type("test");
    cy.contains("Connexion").click();
    cy.contains("Welcome test@gmail.com");
    cy.matchImageSnapshot();
  });

  it("should match the previous screenshot 'login error'", () => {
    cy.get("#username")
      .type("test-trophy");
    cy.get("#password")
      .type("wrong-password");
    cy.contains("Connexion").click();
    cy.contains("Username/password is wrong. Retry…");
    cy.matchImageSnapshot();
  });
});
