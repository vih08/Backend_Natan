const form = document.getElementById("cadastroForm"); // Seleciona o formulário de cadastro

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("emailCadastro").value.trim();
    const senha = document.getElementById("senhaCadastro").value.trim();

    if (!nome || !email || !senha) {
        alert("Preencha todos os campos!");
        return;
    }

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuarioExistente = usuarios.find(user => user.email === email);
    if (usuarioExistente) {
        alert("Este e-mail já está cadastrado!");
        return;
    }

    usuarios.push({ nome, email, senha });
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Cadastro realizado! Vá para o login agora.");

    window.location.href = "../index.html";
});
