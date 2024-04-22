import { contains } from "cypress/types/jquery";

describe("Media institute api product search test", () => {
  beforeEach("Go to url", () => {
    cy.visit("");
  });
  it("Finde elements", () => {
    cy.get("div#app").should("exist");
    cy.get("button:first").contains("Sök");
    cy.get("input#searchText").should("exist");
  });

  it("Search for movie", () => {
    cy.intercept(
      "https://medieinstitutet-wie-products.azurewebsites.net/api/search*",
      [
        {
          name: "B wars",
          id: "mock1",
          price: 789,
          imageURL: "",
        },
        {
          name: "2 the 100",
          id: "mock2",
          price: 939,
          imageURL: "",
        },
        {
          name: "C the return of lol",
          id: "mock3",
          price: 949,
          imageURL: "",
        },
        {
          name: "A the dark side ",
          id: "mock4",
          price: 119,
          imageURL: "",
        },
      ]
    );

    cy.get("input#searchText").should("exist").type("star");
    cy.get("input#searchText").should("have.value", "star");
    cy.get("form#searchform").submit();
    cy.get("div.movie").should("have.length", "4");
    cy.get("h3.movie__title").should("have.length", "4");
    cy.get("div.movie__image > img").should("have.length", "4");
  });
  it("No movies finde", () => {
    cy.get("input#searchText").type("s");
    cy.get("form#searchform").submit();
    cy.get("section#searchresult > p").contains("Inga sökresultat");

    cy.get("form#searchform").submit();
    cy.get("form#searchform").submit();
    cy.get("section#searchresult > p").should("have.length", "3");
    cy.get("section#searchresult > p").should("contain", "Inga sökresultat");
  });
  it("Sort movies", () => {
    cy.intercept(
      "https://medieinstitutet-wie-products.azurewebsites.net/api/search*",
      [
        {
          name: "B",
          id: "mock1",
          price: 789,
          imageURL: "",
        },
        {
          name: "2 the 100",
          id: "mock2",
          price: 939,
          imageURL: "",
        },
        {
          name: "C the return of lol",
          id: "mock3",
          price: 949,
          imageURL: "",
        },
        {
          name: "A the dark side ",
          id: "mock4",
          price: 119,
          imageURL: "",
        },
      ]
    );

    cy.get("input#searchText").should("exist").type("star");
    cy.get("input#searchText").should("have.value", "star");
    cy.get("form#searchform").submit();

    cy.get("button#sort").should("exist").click();
    cy.get("div.movie:nth(0)").should("contain.text", "2");
    cy.get("div.movie:nth(1)").should("contain.text", "A");
    cy.get("div.movie:nth(2)").should("contain.text", "B");
    cy.get("div.movie:nth(3)").should("contain.text", "C");
  });

  it("Finde sort button", () => {
    cy.get("input#searchText").type("the");
    cy.get("button:first").click();
    cy.get("button#sort").should("exist").contains("Sortera");
  });

  it("Empty container after seconde search and toggle sort button", () => {
    cy.intercept(
      "https://medieinstitutet-wie-products.azurewebsites.net/api/search*",
      [
        {
          name: "B",
          id: "mock1",
          price: 789,
          imageURL: "",
        },
        {
          name: "2 the 100",
          id: "mock2",
          price: 939,
          imageURL: "",
        },
        {
          name: "C the return of lol",
          id: "mock3",
          price: 949,
          imageURL: "",
        },
        {
          name: "A the dark side ",
          id: "mock4",
          price: 119,
          imageURL: "",
        },
      ]
    );

    cy.get("input#searchText").type("the");
    cy.get("form#searchform").submit();
    cy.get("section#searchresult > div.movie").should("have.length", "4");

    cy.get("input#searchText").type("star");
    cy.get("form#searchform").submit();
    cy.get("section#searchresult > div.movie").should("have.length", "4");

    cy.get("button#sort").should("not.be.visible");
  });
});
