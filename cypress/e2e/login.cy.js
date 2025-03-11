describe('Teste de login-Faculdade UNINTESE', () =>{

    it('Deve acessar a pagina de login com sucesso', () => {
        //Arrange - Preparar
        cy.visit('https://aprendocom.unintese.com.br/login/index.php')

        //Act - Ação
        cy.get('input[name="username"]').type('94868450263')
        cy.get('input[name="password"]').type('07071986')
        cy.get('button').contains('Acessar').click()

        //Assert-Valida a url que que esta atualmente
        cy.url().should('eq','https://aprendocom.unintese.com.br/my/')
    })

    it('Deve exibir mensagem para senha e usuário incorretos', () => {
        //Arrange - Preparar
        cy.visit('https://aprendocom.unintese.com.br/login/index.php')

        //Act - Ação
        cy.get('input[name="username"]').type('12345678923')
        cy.get('input[name="password"]').type('60256')
        cy.get('button').contains('Acessar').click()

        //Assert-Valida a mensagem de erro dentro da div.alert.alert-danger
        cy.get('.alert.alert-danger').should('contain.text','Nome de usuário ou senha errados. Por favor tente outra vez.')

        // Verifica se a URL continua na página de login (não redirecionou)
        cy.url().should('include', '/login')

    })
})