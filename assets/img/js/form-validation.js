// Carregar dados do localStorage
document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("formData")) {
    const formData = JSON.parse(localStorage.getItem("formData"));
    document.getElementById("nome").value = formData.nome;
    document.getElementById("sobrenome").value = formData.sobrenome;
    document.getElementById("email").value = formData.email;
    document.getElementById("telefone").value = formData.telefone;
    document.getElementById("cpf").value = formData.cpf;
    document.getElementById("servico").value = formData.servico;
    document.getElementById("moto").value = formData.moto;
    document.getElementById("infoCheck").checked = formData.infoCheck;
    document.getElementById("termsCheck").checked = formData.termsCheck;
  }
});

// Validações customizadas
const form = document.getElementById("proposalForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (form.checkValidity()) {
    const formData = {
      nome: document.getElementById("nome").value,
      sobrenome: document.getElementById("sobrenome").value,
      email: document.getElementById("email").value,
      telefone: document.getElementById("telefone").value,
      cpf: document.getElementById("cpf").value,
      servico: document.getElementById("servico").value,
      moto: document.getElementById("moto").value,
      infoCheck: document.getElementById("infoCheck").checked,
      termsCheck: document.getElementById("termsCheck").checked,
    };
    localStorage.setItem("formData", JSON.stringify(formData));
    alertify.success("Proposta enviada com sucesso!");
  } else {
    form.classList.add("was-validated");
  }
});

// Validações customizadas usando REGEX
const emailField = document.getElementById("email");
emailField.addEventListener("input", function () {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (emailRegex.test(emailField.value)) {
    emailField.setCustomValidity("");
  } else {
    emailField.setCustomValidity(
      "Por favor, insira um endereço de e-mail válido."
    );
  }
});

const telefoneField = document.getElementById("telefone");
telefoneField.addEventListener("input", function () {
  const telefoneRegex = /^\d{10,11}$/;
  if (telefoneRegex.test(telefoneField.value)) {
    telefoneField.setCustomValidity("");
  } else {
    telefoneField.setCustomValidity(
      "Por favor, insira um número de telefone válido (10-11 dígitos)."
    );
  }
});

const cpfField = document.getElementById("cpf");
cpfField.addEventListener("input", function () {
  const cpfRegex = /^\d{11}$/;
  if (cpfRegex.test(cpfField.value)) {
    cpfField.setCustomValidity("");
  } else {
    cpfField.setCustomValidity("Por favor, insira um CPF válido (11 dígitos).");
  }
});
