/* ============================================
   Impulso Digital — Nuestros productos
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    actualizarAnio();
    inicializarToggleFrecuencia();
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
 * Alterna entre precio mensual y anual en las tarjetas de planes.
 * Cada monto trae su valor en data-mensual y data-anual.
 */
function inicializarToggleFrecuencia() {
    const botones = document.querySelectorAll('.planes__opcion');
    const montos = document.querySelectorAll('.plan__monto');
    const periodos = document.querySelectorAll('.plan__periodo');

    if (botones.length === 0) {
        return;
    }

    botones.forEach((boton) => {
        boton.addEventListener('click', () => {
            const frecuencia = boton.getAttribute('data-frecuencia');

            botones.forEach((b) => {
                const activa = b === boton;
                b.classList.toggle('is-activa', activa);
                b.setAttribute('aria-pressed', String(activa));
            });

            montos.forEach((monto) => {
                const valor = monto.getAttribute(`data-${frecuencia}`);
                if (valor) {
                    monto.textContent = formatearMonto(valor);
                }
            });

            periodos.forEach((periodo) => {
                periodo.textContent = frecuencia === 'anual' ? '/mes, facturado anual' : '/mes';
            });
        });
    });
}

function formatearMonto(valor) {
    return new Intl.NumberFormat('es-PE').format(Number(valor));
}