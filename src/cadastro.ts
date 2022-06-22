const formCadastro = document.querySelector(
  "#formCadastro"
) as HTMLInputElement;

const inputCadLogin = document.getElementById("cadLogin") as HTMLInputElement;
const inputCadSenha = document.getElementById("cadSenha") as HTMLInputElement;
const inputConfSenha = document.getElementById("confSenha") as HTMLInputElement;

formCadastro.addEventListener("submit", (event: any) => {
  event.preventDefault();

  const usuariosSalvos = JSON.parse(localStorage.getItem("users") || "[]");

  const usuarioJaExiste = usuariosSalvos.some(
    (usuario: any) => usuario.username === inputCadLogin.value
  );

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
