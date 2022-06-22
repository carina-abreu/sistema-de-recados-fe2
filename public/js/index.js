"use strict";
const formLogin = document.querySelector("#formLogin");
const inputLogin = document.getElementById("login");
const inputSenha = document.getElementById("senha");
function logar(e) {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const usuarioEncontrado = users.find((usuario) => usuario.username === inputLogin.value &&
        usuario.password === inputSenha.value);
    if (usuarioEncontrado === undefined) {
        alert("Usuário ou senha inválida");
        return;
    }
    let usuariologado = inputLogin.value;
    localStorage.setItem("usuariologado", JSON.stringify(usuariologado));
    location.href = "./painelDeRecados.html";
}
formLogin.addEventListener("submit", logar);
