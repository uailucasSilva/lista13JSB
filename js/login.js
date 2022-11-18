function validarLogin() {
    user = document.getElementById("user");
    senha = document.getElementById("pwd");

    if (user.value == "") {
        alert("Usuário em branco! Favor preenchê-lo");
        user.focus();
    }
    else if (senha.value == "") {
        alert("Senha em branco!  Favor preenchê-la");
        senha.focus();
    }
    else
        readJSON(user.value, senha.value);
}

function readJSON(usuario, senha) {
    file = "json/users.json";
    fetch(file)
        .then(response => response.json())
        .then(content => checkUser(content, usuario, senha))
        .catch(err => console.log("erro na leitura do JSON"));
}

function checkUser(content, usuario, senha) {
    var achou = false;
    for (i = 0; i < content.usuarios.length; i++) {
        if ((content.usuarios[i].user == usuario) && (content.usuarios[i].pwd == senha)) {
            achou = true;
            break;
        }
    }
    if (achou)
        alert("Usuário existe!");
    else
        alert("Usuário inexistente");
}


