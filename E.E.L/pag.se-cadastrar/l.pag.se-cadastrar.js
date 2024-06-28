
    let usuario = document.querySelector('input#usuário')
    let email = document.querySelector('input#e-mail')
    let senha = document.querySelector('input#senha')
    let novasenha = document.querySelector('input#novasenha')

    function botaocadastrar() {
        
        if (usuario.value == 0 || email.value == 0 || senha.value == 0 || novasenha.value == 0) {
            window.alert ('Certifique-se de que todos os Campos estejam Preenchidos !')
            usuario.value = ' '
            email.value = ' '
            senha.value = ' '
            novasenha.value = ' '
        }
    }