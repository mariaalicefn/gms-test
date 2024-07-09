/// <reference types="cypress"/>

describe('US-009-Funcionalidade: Busca de filmes', () => {
    beforeEach(() => {
        cy.visit('/')
    });

    it('Validação de busca de filmes', () => {
        cy.get('#search-input').type('Harry Potter')
        cy.get('#search-button').click()
        cy.get('#results-section').should('contain','Harry Potter')
    });
    it('Deve buscar filmes com sucesso de uma lista', () => {
        cy.fixture('filmes').then((filmes) =>{
            cy.get('#search-input').type(filmes[0].titulo)
            cy.get('#search-button').click()
            cy.get('#results-section').should('contain', filmes[0].titulo)
        });
    });
    it.only('Deve buscar filmes com sucesso da lista inteira', () => {
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