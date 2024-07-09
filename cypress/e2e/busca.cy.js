/// <reference types="cypress"/>

describe('US-009-Funcionalidade: Busca de filmes', () => {
    beforeEach(() => {
        cy.visit('/')
    });
    afterEach (() => {
        cy.screenshot()
    });

    it('Deve buscar filmes com sucesso da lista inteira', () => {
        cy.fixture('filmes').each((filmes) =>{
            cy.get('#search-input').clear().type(filmes.titulo)
            cy.get('#search-button').click()
            cy.get('#results-section').should('contain', filmes.titulo)
        });
    });

    it('Validação do botão de limpar busca', () => {
        cy.get('#search-input').type('Harry Potter')
        cy.get('#clear-button').click()
    });


});