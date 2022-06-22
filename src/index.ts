const formLogin = document.querySelector("#formLogin") as HTMLInputElement;

const inputLogin = document.getElementById("login") as HTMLInputElement;
const inputSenha = document.getElementById("senha") as HTMLInputElement;

function logar(e: Event) {
  e.preventDefault();

  const users = JSON.parse(localStorage.getItem("users") || "[]");

  const usuarioEncontrado = users.find(
    (usuario: any) =>
      usuario.username === inputLogin.value &&
      usuario.password === inputSenha.value
  );

  if (usuarioEncontrado === undefined) {
    alert("Usuário ou senha inválida");
    return;
  }

  let usuariologado = inputLogin.value;
  localStorage.setItem("usuariologado", JSON.stringify(usuariologado));
  location.href = "./painelDeRecados.html";
}

formLogin.addEventListener("submit", logar);
