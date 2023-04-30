describe("About page", () => {
  it("displays information after navigating to tab", () => {
    cy.intercept("https://data.openupstate.org/rest/maps?_format=json").as(
      "mapsList"
    );
    cy.visit("/");
    cy.wait("@mapsList");

    cy.contains("About").click();

    cy.contains("Greenville OpenMap Demo");
  });

  it("displays information on first load", () => {
    cy.visit("/about");

    cy.contains("Greenville OpenMap Demo");
  });
});