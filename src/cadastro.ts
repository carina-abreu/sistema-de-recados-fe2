const inputLogin = document.getElementById("login") as HTMLInputElement;
const inputSenha = document.getElementById("senha") as HTMLInputElement;
const inputConfSenha = document.getElementById("confSenha") as HTMLInputElement;
const cadastrarButton = document.getElementById(
  "cadastrarButton"
) as HTMLButtonElement;

interface Iuser {
  login: string;
  senha: string;
}

function cadastrarUser(): void {
  if (!verificarSenhas(inputSenha.value, inputConfSenha.value)) {
    return alert("As senhas digitadas são diferentes, revise!");
  }

  const newUser: Iuser = {
    login: inputLogin.value,
    senha: inputSenha.value,
  };

  const users: Iuser[] =
    JSON.parse(localStorage.getItem("users") as string) || [];

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
function verificarSenhas(senha: string, confSenha: string): boolean {
  if (senha === confSenha) {
    return true;
  }
  return false;
}

function limparForm(): void {
  inputLogin.value = "";
  inputSenha.value = "";
  inputConfSenha.value = "";
}
