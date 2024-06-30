
    let usuario = document.querySelector('input#usuário');
    let email = document.querySelector('input#e-mail');
    let senha = document.querySelector('input#senha');
    let novasenha = document.querySelector('input#novasenha');

    function togglePasswordVisibility() {
        if (senha.type === "password") {
            senha.type = "text";
        } else {
            senha.type = "password";
        }
    }

    function togglePasswordVisibilityConfirm(){
        if (novasenha.type === "password") {
            novasenha.type = "text";
        } else {
            novasenha.type = "password";
        }
    }

    function botaocadastrar() {
        
        if (usuario.value == 0 || email.value == 0 || senha.value == 0 || novasenha.value == 0) {
            window.alert ('Certifique-se de que todos os Campos Estejam Preenchidos !');
            usuario.value = '';
            email.value = '';
            senha.value = '';
            novasenha.value = '';
            usuario.focus();
            return;
        }
        if (usuario.value.length < 6 ) {
            window.alert ('Usuário deve ter no Mínimo 6 Dígitos ou Mais !');
            usuario.focus();
            usuario.value = '';
            return;
        }
        if (!email.value.endsWith('@outlook.com') && !email.value.endsWith('@gmail.com')) {
            window.alert ('Formato do E-mail está incorreto !');
            email.focus();
            email.value = '';
            return;
        }
        if (senha.value.length < 6) {
            window.alert ('Senha deve Conter no Mínimo 6 Dígitos !');
            senha.value = '';
            novasenha.value = '';
            senha.focus();
            return;
        } if (senha.value !== novasenha.value ) {
            window.alert ('As senhas dígitadas não se Coincidem !');
            senha.value = '';
            novasenha.value = '';
            senha.focus();
            return;
        } else {
            window.alert (`Cadastro Realizado com Sucesso!`)
            usuario.value = '';
            email.value = '';
            senha.value = '';
            novasenha.value = '';
            return;
        }
        
    }