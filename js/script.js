function mostrarMensaje() {
 
    document.getElementById("mensaje").textContent =
        "Tequila es un lugar lleno de tradición, cultura y paisajes de agave.
            El Tequila fue la primera Denominación de Origen de México (declarada en 1974). 
            Esto significa que ninguna bebida en el mundo puede llamarse "tequila" a menos que 
            se produzca con Agave Tequilana Weber Variedad Azul cosechado en zonas específicas autorizadas.";
}
 
 
function enviarFormulario(event) {
 
    event.preventDefault();
 
    document.getElementById("respuesta").textContent =
        "¡Gracias por tu interés en conocer Tequila, Jalisco!";
 
}
 
 
const btnTema = document.getElementById("btn-tema");
 
if (btnTema) {
 
    if (localStorage.getItem("tema") === "oscuro") {
        document.body.classList.add("oscuro");
        btnTema.textContent = "Modo claro";
    }
 
    btnTema.addEventListener("click", function () {
        const oscuro = document.body.classList.toggle("oscuro");
        btnTema.textContent = oscuro ? "Modo claro" : "Modo oscuro";
        localStorage.setItem("tema", oscuro ? "oscuro" : "claro");
    });
 
}