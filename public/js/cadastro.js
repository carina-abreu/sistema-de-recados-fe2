"use strict";
const inputLogin = document.getElementById("login");
const inputSenha = document.getElementById("senha");
const inputConfSenha = document.getElementById("confSenha");
const cadastrarButton = document.getElementById("cadastrarButton");
function cadastrarUser() {
    if (!verificarSenhas(inputSenha.value, inputConfSenha.value)) {
        return alert("As senhas digitadas são diferentes, revise!");
    }
    const newUser = {
        login: inputLogin.value,
        senha: inputSenha.value,
    };
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.findIndex((user) => user.login === newUser.login) !== -1) {
        return alert("Usuário já cadastrado");
    }
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    limparForm();
    alert("Usuário cadastrado com sucesso, faça seu login!");
    location.href = "./index.html";
    return;
}
function verificarSenhas(senha, confSenha) {
    if (senha === confSenha) {
        return true;
    }
    return false;
}
function limparForm() {
    inputLogin.value = "";
    inputSenha.value = "";
    inputConfSenha.value = "";
}
