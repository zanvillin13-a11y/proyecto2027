/* ============================================
   Impulso Digital — Quiénes somos
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    actualizarAnio();
    inicializarRevelado();
    inicializarContadores();
});

/**
 * Mantiene el año del pie de página siempre actualizado.
 */
function actualizarAnio() {
    const elementoAnio = document.getElementById('anio-actual');
    if (elementoAnio) {
        elementoAnio.textContent = new Date().getFullYear();
    }
}

/**
 * Revela las secciones con un fundido suave al entrar en pantalla.
 * Respeta prefers-reduced-motion mostrando el contenido de inmediato.
 */
function inicializarRevelado() {
    const prefiereMenosMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const secciones = document.querySelectorAll('.hero, .cifras, .pilares, .cta');

    secciones.forEach((seccion) => seccion.classList.add('revelar'));

    if (prefiereMenosMovimiento || !('IntersectionObserver' in window)) {
        secciones.forEach((seccion) => seccion.classList.add('revelar--activo'));
        return;
    }

    const observador = new IntersectionObserver(
        (entradas) => {
            entradas.forEach((entrada) => {
                if (entrada.isIntersecting) {
                    entrada.target.classList.add('revelar--activo');
                    observador.unobserve(entrada.target);
                }
            });
        },
        { threshold: 0.15 }
    );

    secciones.forEach((seccion) => observador.observe(seccion));
}

/**
 * Anima los números de la sección de cifras contando desde 0
 * hasta el valor definido en data-contador, una sola vez,
 * cuando la sección entra en pantalla.
 */
function inicializarContadores() {
    const prefiereMenosMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const numeros = document.querySelectorAll('[data-contador]');

    if (numeros.length === 0) {
        return;
    }

    if (prefiereMenosMovimiento || !('IntersectionObserver' in window)) {
        numeros.forEach((numero) => {
            const valorFinal = numero.getAttribute('data-contador');
            const sufijo = numero.getAttribute('data-sufijo') || '';
            numero.textContent = valorFinal + sufijo;
        });
        return;
    }

    const observador = new IntersectionObserver(
        (entradas) => {
            entradas.forEach((entrada) => {
                if (entrada.isIntersecting) {
                    animarNumero(entrada.target);
                    observador.unobserve(entrada.target);
                }
            });
        },
        { threshold: 0.5 }
    );

    numeros.forEach((numero) => observador.observe(numero));
}

function animarNumero(elemento) {
    const valorFinal = parseInt(elemento.getAttribute('data-contador'), 10);
    const sufijo = elemento.getAttribute('data-sufijo') || '';
    const duracionMs = 1200;
    const inicio = performance.now();

    function paso(ahora) {
        const progreso = Math.min((ahora - inicio) / duracionMs, 1);
        const valorActual = Math.round(valorFinal * progreso);
        elemento.textContent = valorActual + sufijo;

        if (progreso < 1) {
            requestAnimationFrame(paso);
        }
    }

    requestAnimationFrame(paso);
}