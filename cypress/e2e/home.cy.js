// cypress/integration/homePage.spec.js

describe("Página principal", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Debería mostrar la lista de etiquetas", () => {
    cy.get('[data-testid="tag-list"]').should("exist");
  });

  it("Debería mostrar al menos una tarjeta corta", () => {
    cy.get('[data-testid="short-card"]').should("exist");
  });

  it('Debería cargar más recetas al hacer clic en "Load More"', () => {
    cy.get('[data-testid="load-more"]').should("exist").click();

    cy.get('[data-testid="short-card"]').should("have.length.greaterThan", 10);
  });

  it('Debería cargar todas las recetas disponibles al hacer clic en "Load More" suficientes veces', () => {
    cy.get('[data-testid="short-card"]').then(($cards) => {
      const totalRecipes = $cards.length;

      const clicksNeeded = Math.ceil((totalRecipes - 10) / 5);

      for (let i = 0; i < clicksNeeded; i++) {
        cy.get('[data-testid="load-more"]').should("exist").click();
      }

      cy.get('[data-testid="short-card"]').should("have.length", totalRecipes);
    });
  });
});
