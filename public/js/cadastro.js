"use strict";
const formCadastro = document.querySelector("#formCadastro");
const inputCadLogin = document.getElementById("cadLogin");
const inputCadSenha = document.getElementById("cadSenha");
const inputConfSenha = document.getElementById("confSenha");
formCadastro.addEventListener("submit", (event) => {
    event.preventDefault();
    const usuariosSalvos = JSON.parse(localStorage.getItem("users") || "[]");
    const usuarioJaExiste = usuariosSalvos.some((usuario) => usuario.username === inputCadLogin.value);
    if (usuarioJaExiste) {
        alert("Usuário já cadastrado");
        return;
    }
    if (inputCadSenha.value !== inputConfSenha.value) {
        return alert("Alerta: senhas diferentes digitadas");
    }
    usuariosSalvos.push({
        username: inputCadLogin.value,
        password: inputCadSenha.value,
    });
    localStorage.setItem("users", JSON.stringify(usuariosSalvos));
    alert("Usuário cadastrado com sucesso, faça seu login!");
    location.href = "./index.html";
});
