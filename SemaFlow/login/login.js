const loginForm = document.getElementById("loginForm"); // Seleciona o formulário de login

// Formulario é um elemento que serve para coletar dados do usuário informações para serem processadas

loginForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Impede o envio padrão do formulário

    const email = document.getElementById("email").value.trim(); // pega o email
    const senha = document.getElementById("senha").value.trim(); // pega a senha

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || []; // Recupera usuários salvos

    const usuario = usuarios.find(user => user.email === email && user.senha === senha); // Verifica se o usuário existe

    if (!usuario) {
        alert("Conta não encontrada! Cadastre-se primeiro."); // Alerta se não encontrar
        return;
    }

    alert(`Bem-vindo(a), ${usuario.nome}!`); // Saudações ao usuário
    localStorage.setItem("usuarioLogado", JSON.stringify(usuario)); // Salva o usuário logado

    window.location.href = "Paginas/home.html"; // Redireciona para a página inicial
});

document.getElementById("linkCadastro").addEventListener("click", (e) => {
    e.preventDefault(); // Impede o comportamento padrão do link
    window.location.href = "./cadastro/cadastro.html"; // Redireciona para a página de cadastro
});

