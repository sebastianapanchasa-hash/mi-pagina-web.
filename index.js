document.addEventListener("DOMContentLoaded", function () {

    const formulario = document.getElementById("formRegistro");
    const mensajeExito = document.getElementById("mensajeExito");

    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const telefono = document.getElementById("telefono").value.trim();
        const programa = document.getElementById("programa").value;
        const terminos = document.getElementById("terminos").checked;

        let esValido = true;

        // Validar nombre
        if (nombre === "") {
            document.getElementById("nombre").classList.add("is-invalid");
            esValido = false;
        } else {
            document.getElementById("nombre").classList.remove("is-invalid");
        }

        // Validar correo
        if (correo === "" || !correo.includes("@")) {
            document.getElementById("correo").classList.add("is-invalid");
            esValido = false;
        } else {
            document.getElementById("correo").classList.remove("is-invalid");
        }

        // Validar teléfono
        if (telefono === "") {
            document.getElementById("telefono").classList.add("is-invalid");
            esValido = false;
        } else {
            document.getElementById("telefono").classList.remove("is-invalid");
        }

        // Validar programa
        if (programa === "") {
            document.getElementById("programa").classList.add("is-invalid");
            esValido = false;
        } else {
            document.getElementById("programa").classList.remove("is-invalid");
        }

        // Validar términos
        if (!terminos) {
            document.getElementById("terminos").classList.add("is-invalid");
            esValido = false;
        } else {
            document.getElementById("terminos").classList.remove("is-invalid");
        }

        // Si todo está correcto
        if (esValido) {
            console.log("Datos enviados:");
            console.log({
                nombre: nombre,
                correo: correo,
                telefono: telefono,
                programa: programa
            });

            mensajeExito.classList.remove("d-none");
            formulario.reset();

            setTimeout(function () {
                mensajeExito.classList.add("d-none");
            }, 5000);
        }
    });
});