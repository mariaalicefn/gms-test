/// <reference types="cypress"/>

describe('US-12-Funcionalidade: Cadastro de membros', () => {
  beforeEach(() => {
    cy.visit('/')
})

  it('Cadastro de campos obrigatórios', () => {

    var email = `fabio${Date.now()}@teste.com`
    
    cy.preencherCadastro('Maria', 'Feitosa', email, '115897466', 'Teste78@2')
    cy.get('#signup-response').should ('contain' , 'Cadastro realizado com sucesso!')
  })
  it('Deve validar mensagem de nome inválido', ()=>{
    var email = `fabio${Date.now()}@teste.com`
    cy.preencherCadastro('Maria20', 'Feitosa', email, '115897466', 'Teste78@2')
    cy.get('#signup-response').should ('contain' , 'Nome deve conter apenas caracteres alfabéticos, acentuados e espaços')
  })


  it('Validação de email já cadastrado', () => {
    
    cy.get('#signup-firstname').type('Otavio')
    cy.get('#signup-lastname').type('Feitosa')
    cy.get('#signup-email').type('teste4@teste.com')
    cy.get('#signup-phone').type('1845451136')
    cy.get('#signup-password').type('Teste@2121')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should ('contain' , 'Este email já está cadastrado.')
  })
  it('Validação de mensagem de erro com nome vazio', () => {
    
    cy.get('#signup-lastname').type('Feitosa')
    cy.get('#signup-email').type('teste4@teste.com')
    cy.get('#signup-phone').type('1845451136')
    cy.get('#signup-password').type('Teste@2121')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should ('contain' , 'Nome não pode estar vazio')
  })
  it('Validação de mensagem de erro com sobrenome vazio', () => {
    
    cy.get('#signup-firstname').type('Otavio')
    cy.get('#signup-email').type('teste5@teste.com')
    cy.get('#signup-phone').type('1845451136')
    cy.get('#signup-password').type('Teste@2121')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should ('contain' , 'Sobrenome não pode estar vazio')
  })
  it('Validação de mensagem de erro com email inválido', () => {
    
    cy.get('#signup-firstname').type('Otavio')
    cy.get('#signup-lastname').type('Feitosa')
    cy.get('#signup-email').type('testeteste.com')
    cy.get('#signup-phone').type('1845451136')
    cy.get('#signup-password').type('Teste@2121')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should ('contain' , 'E-mail deve ser um email válido')
  })
  it('Validação de mensagem de erro com email vazio', () => {
   
    cy.get('#signup-firstname').type('Otavio')
    cy.get('#signup-lastname').type('Feitosa')
    cy.get('#signup-phone').type('1845451136')
    cy.get('#signup-password').type('Teste@2121')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should ('contain' , 'E-mail não pode estar vazio')
  })
  it('Validação de mensagem de erro com senha fraca', () => {
    var email = `fabio${Date.now()}@teste.com`
    cy.preencherCadastro('Maria', 'Feitosa', email, '115897466', 'Teste')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should ('contain' , 'Senha deve ter pelo menos 8 caracteres, incluir uma letra maiúscula, um número e um caractere especial (!@#$&*)')
  })
  it('Validação de mensagem de erro com senha vazia', () => {
    
    cy.get('#signup-firstname').type('Otavio')
    cy.get('#signup-lastname').type('Feitosa')
    cy.get('#signup-email').type('teste4@teste.com')
    cy.get('#signup-phone').type('1845451136')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should ('contain' , 'Senha não pode estar vazia')
  }) 
  it('Validação de mensagem de erro com número de telefone inválido', () => {
    var email = `fabio${Date.now()}@teste.com`
    cy.preencherCadastro('Maria', 'Feitosa', email, 'oi', 'Teste')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should ('contain' , 'Telefone deve conter apenas números')
  })

}) 

