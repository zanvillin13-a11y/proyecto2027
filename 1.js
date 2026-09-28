// ======================================================
// # PASO 1: Esperar a que todo el HTML esté cargado
// Envolvemos todo en este evento para asegurarnos de que
// los elementos del DOM ya existen antes de buscarlos.
// ======================================================
document.addEventListener("DOMContentLoaded", () => {

    // ==================================================
    // # PASO 2: Menú de navegación (botón hamburguesa)
    // ==================================================
    const navToggle = document.getElementById("navToggle");
    const nav = document.getElementById("nav");

    navToggle.addEventListener("click", () => {
        // alternamos la clase que muestra/oculta el menú en móvil
        const abierto = nav.classList.toggle("nav--abierto");
        navToggle.setAttribute("aria-expanded", abierto);
    });

    // Cerramos el menú automáticamente al elegir una opción (mejor experiencia en móvil)
    nav.querySelectorAll("a").forEach((enlace) => {
        enlace.addEventListener("click", () => {
            nav.classList.remove("nav--abierto");
            navToggle.setAttribute("aria-expanded", "false");
        });
    });

    // ==================================================
    // # PASO 3: Modal para ver las imágenes en grande
    // Cada tarjeta .nieto tiene una imagen; al hacer clic
    // se abre una versión ampliada en una ventana modal.
    // ==================================================
    const modal = document.getElementById("modalImagen");
    const modalImagenGrande = document.getElementById("modalImagenGrande");
    const modalCerrar = document.getElementById("modalCerrar");
    const imagenesServicios = document.querySelectorAll(".nieto__imagen-cont img");

    imagenesServicios.forEach((img) => {
        img.addEventListener("click", () => {
            modalImagenGrande.src = img.src;
            modalImagenGrande.alt = img.alt;
            modal.classList.add("abierto");
        });
    });

    function cerrarModal() {
        modal.classList.remove("abierto");
        modalImagenGrande.src = ""; // liberamos la imagen para no mantenerla cargada
    }

    modalCerrar.addEventListener("click", cerrarModal);

    // cerrar al hacer clic fuera de la imagen (en el fondo oscuro)
    modal.addEventListener("click", (evento) => {
        if (evento.target === modal) {
            cerrarModal();
        }
    });

    // cerrar con la tecla Escape
    document.addEventListener("keydown", (evento) => {
        if (evento.key === "Escape" && modal.classList.contains("abierto")) {
            cerrarModal();
        }
    });

    // ==================================================
    // # PASO 4: Validación simple del formulario de contacto
    // Evitamos el envío real (no hay servidor) y en su lugar
    // mostramos un mensaje de confirmación o de error.
    // ==================================================
    const formulario = document.getElementById("formularioContacto");
    const mensaje = document.getElementById("formularioMensaje");

    formulario.addEventListener("submit", (evento) => {
        evento.preventDefault(); // evitamos que la página se recargue

        const nombre = document.getElementById("nombre").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);

        mensaje.classList.remove("exito", "error");

        if (nombre === "" || !correoValido) {
            // caso de error: falta el nombre o el correo no tiene formato válido
            mensaje.textContent = "Revisa tu nombre y escribe un correo válido.";
            mensaje.classList.add("error");
            return;
        }

        // caso de éxito: mostramos confirmación y limpiamos el formulario
        mensaje.textContent = `¡Gracias, ${nombre}! Te contactaremos a ${correo}.`;
        mensaje.classList.add("exito");
        formulario.reset();
    });

    // ==================================================
    // # PASO 5: Año actual en el pie de página
    // Así no hay que actualizar el HTML a mano cada año.
    // ==================================================
    document.getElementById("anioActual").textContent = new Date().getFullYear();

});
