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
    const mapaZonaAlegria = document.getElementById('mapa-zona-alegria');
    const hotspotAlegria = document.getElementById('hotspot-alegria')

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

    let zonaTristezaDesbloqueada = false;
    let zonaAlegriaDesbloqueada = false;
    let emocionActual = "";

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
        emocionActual = "tristeza"; // <-- AÑADE ESTA LÍNEA

        // --- Asegúrate de que el contenido de tristeza se cargue ---
        document.getElementById('guardian-img').src = 'assets/images/guardian_tristeza.png';
        document.getElementById('guardian-nombre').textContent = 'Lila la Oyente';
        document.querySelector('#escenario-estimulo img').src = 'assets/images/situación_tristeza_ejemplo.png';
        document.querySelector('#escenario-estimulo p').textContent = 'Tu mejor amigo se muda a otra ciudad.';
        document.getElementById('escenario-pregunta').textContent = '¿Cómo te sientes en esta situación?';

        mostrarPantalla('escenario');
    } else {
        alert("¡Ya has explorado la Isla de la Tristeza!");
    }
    });
    
    hotspotAlegria?.addEventListener('click', () => {
        if (!zonaAlegriaDesbloqueada) {
            console.log("Clic en la zona de Alegría.");
            emocionActual = "alegria"; // <-- Le decimos al juego qué emoción estamos viendo

            // --- ¡IMPORTANTE! Cambiamos el contenido del escenario ---
            document.getElementById('guardian-img').src = 'assets/images/guardian_alegria.png';
            document.getElementById('guardian-nombre').textContent = 'Félix el Guía';
            document.querySelector('#escenario-estimulo img').src = 'assets/images/situación_alegria_ejemplo.png';
            document.querySelector('#escenario-estimulo p').textContent = '¡Es tu fiesta de cumpleaños sorpresa!';
            document.getElementById('escenario-pregunta').textContent = '¿Cómo te sientes en esta situación?';

            mostrarPantalla('escenario');
        } else {
            alert("¡Ya has explorado la Isla de la Alegría!");
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
    console.log(`Volviendo al mapa. Emoción actual: ${emocionActual}`);

    // ▼▼▼ LÓGICA MEJORADA ▼▼▼
    if (emocionActual === "tristeza") {
        zonaTristezaDesbloqueada = true;
        mapaZonaTristeza.classList.remove('hidden'); 

    } else if (emocionActual === "alegria") {
        zonaAlegriaDesbloqueada = true;
        mapaZonaAlegria.classList.remove('hidden');
    }
    // (Puedes añadir 'else if' para 'enojo', 'calma', etc. aquí)

    emocionActual = ""; // Limpiamos la variable
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