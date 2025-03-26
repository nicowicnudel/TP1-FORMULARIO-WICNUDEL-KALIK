document.getElementById("registroForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let nombre = document.getElementById("nombre").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirmarPassword = document.getElementById("confirmarPassword").value;

    let valid = true;

    if (nombre.length < 3) {
        mostrarError("errorNombre", "El nombre debe tener al menos 3 caracteres.");
        valid = false;
    } else {
        mostrarExito("errorNombre");
    }

    if (!email.match(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/)) {
        mostrarError("errorEmail", "Ingrese un email válido.");
        valid = false;
    } else {
        mostrarExito("errorEmail");
    }

    if (password.length < 8 || !/\d/.test(password) || !/[a-zA-Z]/.test(password)) {
        mostrarError("errorPassword", "La contraseña debe tener al menos 8 caracteres, un número y una letra.");
        valid = false;
    } else {
        mostrarExito("errorPassword");
    }

    if (confirmarPassword !== password) {
        mostrarError("errorConfirmarPassword", "Las contraseñas no coinciden.");
        valid = false;
    } else {
        mostrarExito("errorConfirmarPassword");
    }

    if (valid) {
        alert("Registro exitoso");
        document.getElementById("registroForm").reset();
    }
});

function mostrarError(id, mensaje) {
    let elemento = document.getElementById(id);
    elemento.textContent = mensaje;
    elemento.style.color = "red";
}

function mostrarExito(id) {
    let elemento = document.getElementById(id);
    elemento.textContent = "✔";
    elemento.style.color = "green";
}