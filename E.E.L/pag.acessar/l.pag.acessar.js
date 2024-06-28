    
    let texto1 = document.querySelector('input#usuario');
    let texto2 = document.querySelector('input#senha');
    texto1.value = ' ';
    texto2.value = ' ';
    
    function botaoacessar() {
        
        if (texto1.value == 0 || texto2.value == 0) {
            window.alert ('Verifique as Credenciais!');
            texto1.value = '';
            texto2.value = '';
            texto1.focus();
            return;
        }
        if (texto1.value.length < 6 ) {
            window.alert ('Usuário deve ter no Minímo 6 Digítos!');
            texto1.value = '';
            texto1.focus();
            return;
        }
        if ( texto2.value.length < 6) {
            window.alert ('Senha deve ter no Minímo 6 Digítos!');
            texto2.value = '';
            texto2.focus();
            return;
        }else {
            window.alert ('Acesso Permitido...')
            texto1.value = '';
            texto2.value = '';
            texto1.focus();
            return;
        }
    }

    
