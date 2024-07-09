/// <reference types="cypress"/>

describe('US-12-Funcionalidade: Cadastro de membros', () => {
  beforeEach(() => {
    cy.visit('/')
});
  afterEach (() => {
    cy.screenshot()
  });

  it('Cadastro de campos obrigatórios', () => {

    var email = `fabio${Date.now()}@teste.com`
    
    cy.preencherCadastro('Maria', 'Feitosa', email, '115897466', 'Teste78@2')
    cy.get('#signup-response').should ('contain' , 'Cadastro realizado com sucesso!')
  });
  it('Deve validar mensagem de nome inválido', ()=>{
    var email = `fabio${Date.now()}@teste.com`
    cy.preencherCadastro('Maria20', 'Feitosa', email, '115897466', 'Teste78@2')
    cy.get('#signup-response').should ('contain' , 'Nome deve conter apenas caracteres alfabéticos, acentuados e espaços')
  });


  it('Validação de email já cadastrado', () => {
    
    cy.preencherCadastro('Maria', 'Feitosa', 'mariaalice15.rj@gmail.com', '115897466', 'Teste78@2')
    cy.get('#signup-response').should ('contain' , 'Este email já está cadastrado.')
  });
  it('Validação de mensagem de erro com nome vazio', () => {
    var email = `fabio${Date.now()}@teste.com`
    cy.preencherNomeVazio('Feitosa',email, '1457895632','Teste$789')
    cy.get('#signup-response').should ('contain' , 'Nome não pode estar vazio')
  });
  it('Validação de mensagem de erro com sobrenome vazio', () => {
    var email = `fabio${Date.now()}@teste.com`
    cy.preencherSobrenomeVazio('Maria', email,'1477451521','Gmanru123@')
    cy.get('#signup-response').should ('contain' , 'Sobrenome não pode estar vazio')
  });
  it('Validação de mensagem de erro com email inválido', () => {
    
    cy.preencherCadastro('Maria', 'Feitosa','testeteste.com', '115897466', 'Teste78@2')
    cy.get('#signup-response').should ('contain' , 'E-mail deve ser um email válido')
  });
  it('Validação de mensagem de erro com email vazio', () => {
   
    cy.preencherEmailVazio('Maria','Feitosa','1785154626','Vsvs@414')
    cy.get('#signup-response').should ('contain' , 'E-mail não pode estar vazio')
  });
  it('Validação de mensagem de erro com senha fraca', () => {
    var email = `fabio${Date.now()}@teste.com`
    cy.preencherCadastro('Maria', 'Feitosa', email, '115897466', 'Teste')
    cy.get('#signup-response').should ('contain' , 'Senha deve ter pelo menos 8 caracteres, incluir uma letra maiúscula, um número e um caractere especial (!@#$&*)')
  });
  it('Validação de mensagem de erro com número de telefone inválido', () => {
    var email = `fabio${Date.now()}@teste.com`
    cy.preencherCadastro('Maria', 'Feitosa', email, 'oi', 'Teste')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should ('contain' , 'Telefone deve conter apenas números')
  });

});

