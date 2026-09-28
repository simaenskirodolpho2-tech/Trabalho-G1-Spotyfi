const formulario = document.getElementById("formulario-login");

const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function(evento) {

    evento.preventDefault();

    resultado.textContent =
        "Simulação concluída! Nenhuma informação foi enviada ou armazenada.";

    formulario.reset();

});