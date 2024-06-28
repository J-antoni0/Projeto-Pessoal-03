    
    let texto1 = document.querySelector('input#usuario')
    let texto2 = document.querySelector('input#senha')
    
    function botaoacessar() {
        
        if (texto1.value == 0 || texto2.value == 0) {
            window.alert ('Verifique as Credenciais!')
            texto1.value = ' '
            texto2.value = ' '
        }
        
        
    texto1.focus()

    }

    
