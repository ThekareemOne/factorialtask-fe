describe("Home Tests", () => {
  it("open the landing page and verify the title", () => {
    cy.visit("http://localhost:3000/")
    cy.title().should("eq", "Metrics App")
  })
  it("should have exactly two items in the metrics list", () => {
    cy.visit("http://localhost:3000/")

    cy.get("#metricsSelect").as("metricsSelect")

    cy.get("@metricsSelect").click()

    cy.get("[data-testid=metric]").should("have.length", 2)
  })
})
