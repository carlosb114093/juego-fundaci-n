// js/main.js

document.addEventListener('DOMContentLoaded', () => {
    // Referencias a todas las pantallas
    const pantallas = {
        inicio: document.getElementById('pantalla-inicio'),
        mapa: document.getElementById('pantalla-mapa'),
        escenario: document.getElementById('pantalla-escenario'),
        feedback: document.getElementById('pantalla-feedback'),
        respira: document.getElementById('pantalla-respira'),
        tarjetaHeroe: document.getElementById('pantalla-tarjeta-heroe')
    };

    // Referencias a imágenes y hotspots
    const mapaBaseBn = document.querySelector('#pantalla-mapa img[alt="Mapa de Emociones Gris"]');
    const mapaZonaTristeza = document.getElementById('mapa-zona-tristeza');
    const hotspotTristeza = document.getElementById('hotspot-tristeza');
    const btnVerMapaColor = document.getElementById('btn-ver-mapa-color');

    // Función para mostrar una pantalla y ocultar las demás
    function mostrarPantalla(nombrePantalla) {
        Object.values(pantallas).forEach(pantalla => {
            if (pantalla) {
                pantalla.classList.add('hidden');
            }
        });
        if (pantallas[nombrePantalla]) {
            pantallas[nombrePantalla].classList.remove('hidden');
        }
    }

    // --- ESTADO DEL DEMO ---
    let zonaTristezaDesbloqueada = false;

    // --- EVENT LISTENERS DE NAVEGACIÓN ---

    // Pantalla de Inicio -> Mapa
    document.getElementById('btn-empezar')?.addEventListener('click', () => {
        mostrarPantalla('mapa');
        // Asegúrate de que el mapa base gris se muestre y la zona de tristeza esté oculta inicialmente
        mapaBaseBn.src = 'assets/images/mapa_base_bn.png';
        mapaZonaTristeza.classList.add('hidden');
    });

    // Hotspot de Tristeza -> Escenario
    hotspotTristeza?.addEventListener('click', () => {
        if (!zonaTristezaDesbloqueada) {
            console.log("Clic en la zona de Tristeza.");
            // Aquí podríamos cargar contenido específico para la emoción si tuviéramos data.js
            mostrarPantalla('escenario');
        } else {
            alert("¡Ya has explorado la Isla de la Tristeza!");
        }
    });

    // Escenario -> Feedback (al hacer clic en cualquier opción, simulando una respuesta)
    document.querySelectorAll('.btn-opcion').forEach(boton => {
        boton.addEventListener('click', () => {
            console.log("Respuesta simulada, yendo a feedback.");
            mostrarPantalla('feedback');
        });
    });

    // Feedback -> Mapa (desbloquea la tristeza)
    document.getElementById('btn-continuar')?.addEventListener('click', () => {
        console.log("Volviendo al mapa, la tristeza está desbloqueada.");
        zonaTristezaDesbloqueada = true; // Marca la zona como desbloqueada

        // Ahora, superponemos la isla de tristeza a color
        mapaZonaTristeza.classList.remove('hidden'); 
        
        mostrarPantalla('mapa');
    });

    // Volver al mapa desde escenario (sin desbloquear)
    document.getElementById('btn-volver-mapa-escenario')?.addEventListener('click', () => {
        mostrarPantalla('mapa');
    });

    // Botón para ver el mapa a color completo
    btnVerMapaColor?.addEventListener('click', () => {
        if (mapaBaseBn.src.includes('mapa_base_bn.png')) {
            mapaBaseBn.src = 'assets/images/mapa_base_color.png';
            btnVerMapaColor.textContent = 'Ver Mapa Gris';
            mapaZonaTristeza.classList.add('hidden'); // Oculta la zona individual para no duplicar
        } else {
            mapaBaseBn.src = 'assets/images/mapa_base_bn.png';
            btnVerMapaColor.textContent = 'Ver Mapa a Color';
            if (zonaTristezaDesbloqueada) {
                 mapaZonaTristeza.classList.remove('hidden'); // Vuelve a mostrar si estaba desbloqueada
            }
        }
    });


    // Simulación de final del juego para la Tarjeta de Héroe
    document.getElementById('btn-finalizar-mapa')?.addEventListener('click', () => {
        mostrarPantalla('tarjetaHeroe');
    });

    // Tarjeta de Héroe -> Inicio (reiniciar el demo)
    document.getElementById('btn-reiniciar')?.addEventListener('click', () => {
        zonaTristezaDesbloqueada = false; // Reinicia el estado
        mostrarPantalla('inicio');
    });


    // Iniciar el demo en la pantalla de inicio
    mostrarPantalla('inicio');
});