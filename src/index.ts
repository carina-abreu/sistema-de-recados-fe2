const form: any = document.querySelector("#formLogin");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const usuariosSalvos: any = JSON.parse(localStorage.getItem("users") || "[]");

  const login: any = form.login.value;
  const senha: any = form.senha.value;

  const usuarioEncontrado: any = usuariosSalvos.find(
    (usuario) => usuario.username === login && usuario.password === senha
  );

  if (!usuarioEncontrado) {
    alert("Usuário ou senha inválida");
    return;
  }
  let usuarioLogado: any = form.login.value;
  localStorage.setItem("usuarioLogado", JSON.stringify(usuarioLogado));
  location.href = "./painelDeRecados.html";
});
