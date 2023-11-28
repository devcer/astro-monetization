/// <reference types="cypress" />

describe("Extended tags", () => {
  beforeEach(() => {
    cy.visit("localhost:4321/monetizationTags");
  });

  it("sets payment pointer", () => {
    cy.get('head link[rel="monetization"]').should("have.attr", "href", "$ilp.rafiki.money/isantoshv");
  });
});
