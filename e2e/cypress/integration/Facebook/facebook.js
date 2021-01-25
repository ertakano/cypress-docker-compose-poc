import { Given, Then } from "cypress-cucumber-preprocessor/steps";
 
const url = 'https://facebook.com'
Given('I open Facebook page', () => {
  cy.visit(url, { timeout: 30000 })
})
 
Then(`I see {string} in the title`, (title) => {
  cy.title().should('include', title)
})