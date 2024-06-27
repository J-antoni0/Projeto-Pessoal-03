    
    let texto1 = document.querySelector('input#usuario')
    let texto2 = document.querySelector('input#senha')
    
    function botaoacessar() {
        
        if (texto1.value == 0 || texto2.value == 0) {
            window.alert ('ERRO! Certifique-se de que as credenciais estão corretas.')
        }

    texto1.focus()

    }

    
