function validaCadastro() {
    user = document.getElementById("user");
    senha = document.getElementById("pwd");
    confSenha = document.getElementById("confPwd");

    if (!user.value) {
        alert("Usuário em branco. Informe um usuário");
        user.focus();
    }
    else if (!senha.value) {
        alert("Senha em branco. Informe uma senha");
        senha.focus();
    }
    else if (!confSenha) {
        alert("Confirmar senha em branco. Confirme a sua senha");
        confSenha.focus();
    }
    else if (senha.value != confSenha.value) {
        alert("Senha e confirmar senha diferente. Tente novamente");
        senha.value = "";
        confSenha.value = "";
        senha.focus();
    }
    else recordNewUser(user.value, senha.value);
}

function recordNewUser(usuario, senha) {
    file = "json/users.json";
    fetch(file)
        .then(response => response.json())
        .then(content => checkUserCadastro(content, usuario, senha))
        .catch(err => console.log("erro na leitura do JSON"));
}

function checkUserCadastro(content, usuario, senha) {
    var achou = false;
    for (i = 0; i < content.usuarios.length; i++) {
        if ((content.usuarios[i].user == usuario) && (content.usuarios[i].pwd == senha)) {
            achou = true;
            break;
        }
    }
    if (achou) alert(`Esse usuário já existe. Tente outro!`);
    else {
        document.getElementsByTagName("form")[0].submit();
    }
}

