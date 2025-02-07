/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

describe('HN list', () => {
  before(() => {
    cy.visit('/hn')
  })

  it('should render posts list', () => {
    cy.get('[data-cy="posts-list"]').should('be.visible')
  })

  it('should render subscribe button', () => {
    cy.get('[data-cy="open-subscribe-hn-dialog"]').should('be.visible')
  })

  it('should render email input when dialog opens', () => {
    cy.get('[data-cy="open-subscribe-hn-dialog"]').click()
    cy.get('[data-cy="subscribe-hn-form"]').should('be.visible')
  })
})
