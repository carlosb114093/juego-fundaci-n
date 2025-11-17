// js/main.js
document.addEventListener('DOMContentLoaded', () => {

    // ----------------------------------------------------------------
    // 1. BASE DE DATOS DEL JUEGO
    // ----------------------------------------------------------------
    // Todo el contenido del juego vive aquí.
    // ¡Añadir una nueva emoción es tan fácil como añadir una nueva entrada!
    // ----------------------------------------------------------------
   // 1. BASE DE DATOS DEL JUEGO
    // ----------------------------------------------------------------
    const gameData = {
        'alegria': {
            guardian: {
                nombre: 'Félix el Guía',
                img: 'assets/images/guardian_alegria.png'
            },
            escenario: [
                {
                    // La imagen de la fiesta que ya tienes
                    img: 'assets/images/situación_alegria_ejemplo.png', 
                    // Dejamos el texto de la situación vacío
                    situacionTexto: '', 
                    // La pregunta es para asociar la imagen
                    pregunta: '¿Cuál de estas situaciones representa mejor la imagen?',
                    opciones: [
                        // Opción Correcta (coincide con la imagen)
                        { texto: '¡Es mi fiesta de cumpleaños sorpresa!', esCorrecta: true, color: 'bg-green-500 hover:bg-green-400' },
                        // Distractores (también son situaciones alegres)
                        { texto: 'Gané una competencia deportiva', esCorrecta: true, color: 'bg-blue-500 hover:bg-blue-400' },
                        { texto: '¡Me van a dar una mascota nueva!', esCorrecta: true, color: 'bg-yellow-500 hover:bg-yellow-400' },
                        { texto: 'Aprendí a montar en bicicleta', esCorrecta: true, color: 'bg-purple-500 hover:bg-purple-400' }
                    ]
                }
                // Puedes añadir más escenarios de alegría aquí
                // {
                //    img: 'assets/images/situacion_alegria_mascota.png',
                //    situacionTexto: '',
                //    pregunta: '¿Cuál de estas situaciones representa mejor la imagen?',
                //    opciones: [
                //        { texto: '¡Es mi fiesta de cumpleaños sorpresa!', esCorrecta: false, ... },
                //        { texto: 'Gané una competencia deportiva', esCorrecta: false, ... },
                //        { texto: '¡Me van a dar una mascota nueva!', esCorrecta: true, ... },
                //        { texto: 'Aprendí a montar en bicicleta', esCorrecta: false, ... }
                //    ]
                // }
            ],
            feedback: {
                // ... el feedback de alegría se queda igual que antes ...
                icono: 'assets/images/icono_alegria.png',
                titulo: '¡Qué bien se siente la Alegría!',
                texto: 'La alegría es una emoción que nos llena de energía y nos hace sonreír. ¡Es genial compartirla!',
                colorFondo: 'bg-yellow-50 text-yellow-900',
                colorTitulo: 'text-yellow-600',
                colorHerramientas: 'bg-yellow-100 border-yellow-300 text-yellow-800',
                colorBoton: 'bg-yellow-600 hover:bg-yellow-500 text-white',
                herramientas: [
                    { emoji: '🎉', titulo: 'Compártela:', descripcion: 'Cuéntale a otros por qué estás feliz. ¡La alegría es contagiosa!' },
                    { emoji: '💃', titulo: 'Muévete:', descripcion: 'Baila, salta o corre. Usa esa energía para mover tu cuerpo.' },
                    { emoji: '🙏', titulo: 'Agradece:', descripcion: 'Piensa en qué te hizo feliz y da las gracias por ello.' }
                ]
            }
        },
        'tristeza': {
            guardian: {
                nombre: 'Lila la Oyente',
                img: 'assets/images/guardian_tristeza.png'
            },
            escenario: [
                {
                    // Asumimos que esta imagen es la del amigo mudándose
                    img: 'assets/images/situación_tristeza_ejemplo.png', 
                    // Dejamos el texto de la situación vacío
                    situacionTexto: '',
                    // La pregunta es para asociar la imagen
                    pregunta: '¿Cuál de estas situaciones representa mejor la imagen?',
                    opciones: [
                        // Opción Correcta (la que coincide con la imagen)
                        { texto: 'Tu mejor amigo se muda', esCorrecta: true, color: 'bg-blue-500 hover:bg-blue-400' },
                        // Distractores (las otras situaciones tristes que mencionaste)
                        { texto: 'Te mudas a otra casa', esCorrecta: true, color: 'bg-green-500 hover:bg-green-400' },
                        { texto: 'Es tiempo de regalar tus juguetes viejos', esCorrecta: true, color: 'bg-red-500 hover:bg-red-400' },
                        { texto: 'Te cambiaron a un nuevo colegio', esCorrecta: true, color: 'bg-purple-500 hover:bg-purple-400' }
                    ]
                }
            ],
            feedback: {
                // ... el feedback de tristeza se queda igual que antes ...
                icono: 'assets/images/icono_tristeza.png',
                titulo: 'Es normal sentir tristeza',
                texto: 'Sentir tristeza es una señal de que algo nos importa mucho. ¡Es una parte normal y valiente de ser humano!',
                colorFondo: 'bg-teal-50 text-teal-900',
                colorTitulo: 'text-blue-600',
                colorHerramientas: 'bg-blue-100 border-blue-300 text-blue-700',
                colorBoton: 'bg-blue-600 hover:bg-blue-500',
                herramientas: [
                    { emoji: '💬', titulo: 'Habla con alguien:', descripcion: 'Contarle a un adulto de confianza lo que sientes te hace sentir más ligero.' },
                    { emoji: '🎨', titulo: 'Dibuja o escribe:', descripcion: '¡Saca la emoción! Dibuja cómo se ve tu tristeza o escríbele una carta.' },
                    { emoji: '🧸', titulo: 'Busca un abrazo:', descripcion: 'Abraza a tu peluche, mascota o almohada favorita. ¡Los abrazos ayudan!' }
                ]
            }
        },
        'ansiedad': {
            guardian: {
                nombre: 'Gaspar el Guardián',
                img: 'assets/images/guardian_ansiedad.png' // Tienes que crear esta imagen
            },
            escenario: [
                {
                    // Tienes que crear esta imagen (ej: un niño ante un pizarrón)
                    img: 'assets/images/situación_ansiedad_ejemplo.png', 
                    situacionTexto: '', 
                    pregunta: '¿Cuál de estas situaciones representa mejor la imagen?',
                    opciones: [
                        // Opción Correcta (la que coincide con la imagen)
                        { texto: 'Tienes que hablar frente a toda la clase', esCorrecta: true, color: 'bg-purple-500 hover:bg-purple-400' },
                        // Distractores (también son situaciones de ansiedad)
                        { texto: 'Es tu primer día en un nuevo colegio', esCorrecta: true, color: 'bg-blue-500 hover:bg-blue-400' },
                        { texto: 'Estás solo y escuchas un ruido en casa', esCorrecta: true, color: 'bg-green-500 hover:bg-green-400' },
                        { texto: 'Vas al doctor a ponerte una vacuna', esCorrecta: true, color: 'bg-red-500 hover:bg-red-400' }
                    ]
                }
            ],
            feedback: {
                icono: 'assets/images/icono_ansiedad.png', // Tienes que crear esta imagen
                titulo: '¿Sientes mariposas en la panza?',
                texto: '¡Esos son nervios! La ansiedad es una alarma de tu cuerpo que te dice "¡algo importante va a pasar!". Es energía que te prepara.',
                colorFondo: 'bg-orange-50 text-orange-900',
                colorTitulo: 'text-orange-600',
                colorHerramientas: 'bg-orange-100 border-orange-300 text-orange-800',
                colorBoton: 'bg-orange-600 hover:bg-orange-500 text-white',
                herramientas: [
                    { emoji: '🌬️', titulo: 'Respira Profundo:', descripcion: 'Toma aire lentamente por tu nariz (cuenta 1, 2, 3) y suéltalo por la boca (1, 2, 3, 4).' },
                    { emoji: '✋', titulo: 'Busca 5 cosas:', descripcion: 'Mira a tu alrededor. Nombra 5 cosas que puedas ver, 4 que puedas tocar y 3 que puedas oír.' },
                    { emoji: '🧸', titulo: 'Abraza algo fuerte:', descripcion: 'Abraza un cojín, tu peluche o pide un abrazo. ¡Te ayuda a sentirte seguro!' }
                ]
            }
        }
        // Puedes añadir 'enojo', 'miedo', 'calma' aquí con la misma lógica...
    };

    // ----------------------------------------------------------------
    // 2. ESTADO DEL JUEGO
    // ----------------------------------------------------------------
    let emocionActual = null; // 'alegria', 'tristeza', etc.
    let progreso = {
        emociones: new Set() // Guarda las emociones completadas. Ej: {'alegria', 'tristeza'}
    };

    // ----------------------------------------------------------------
    // 3. SELECTORES DEL DOM (los elementos que cambian)
    // ----------------------------------------------------------------
    
    // Referencias a todas las pantallas (tomado de tu código)
    const pantallas = {
        inicio: document.getElementById('pantalla-inicio'),
        mapa: document.getElementById('pantalla-mapa'),
        escenario: document.getElementById('pantalla-escenario'),
        feedback: document.getElementById('pantalla-feedback'),
        respira: document.getElementById('pantalla-respira'), // ¡Incluida tu nueva pantalla!
        tarjetaHeroe: document.getElementById('pantalla-tarjeta-heroe')
    };

    // Referencias a imágenes y hotspots del mapa (tomado de tu código)
    const mapaBaseBn = document.querySelector('#pantalla-mapa img[alt="Mapa de Emociones Gris"]');
    const mapaZonaTristeza = document.getElementById('mapa-zona-tristeza');
    const hotspotTristeza = document.getElementById('hotspot-tristeza');
    const mapaZonaAlegria = document.getElementById('mapa-zona-alegria');
    const hotspotAlegria = document.getElementById('hotspot-alegria');
    const btnVerMapaColor = document.getElementById('btn-ver-mapa-color');

    // Elementos de ESCENARIO (para rellenar dinámicamente)
    const guardianImg = document.getElementById('guardian-img');
    const guardianNombre = document.getElementById('guardian-nombre');
    const escenarioImg = document.querySelector('#escenario-estimulo img');
    const escenarioTexto = document.querySelector('#escenario-estimulo p');
    const escenarioPregunta = document.getElementById('escenario-pregunta');
    const opcionesContainer = document.getElementById('escenario-opciones');

    // Elementos de FEEDBACK (para rellenar dinámicamente)
    const feedbackIcono = document.getElementById('feedback-icono');
    const feedbackTitulo = document.getElementById('feedback-titulo');
    const feedbackTexto = document.getElementById('feedback-texto');
    const feedbackBoton = document.getElementById('btn-continuar');
    const feedbackHerramientasMain = document.getElementById('feedback-herramientas-main');
    const feedbackHerramientasContainer = document.getElementById('feedback-herramientas-container');

    // ----------------------------------------------------------------
    // 4. FUNCIONES PRINCIPALES
    // ----------------------------------------------------------------

    /** Muestra una pantalla por nombre y oculta las demás (tomado de tu código) */
    function mostrarPantalla(nombrePantalla) {
        Object.values(pantallas).forEach(pantalla => {
            if (pantalla) pantalla.classList.add('hidden');
        });
        if (pantallas[nombrePantalla]) {
            pantallas[nombrePantalla].classList.remove('hidden');
        }
    }

    /** Carga los datos de una emoción en la pantalla de escenario */
    function cargarEscenario(emocion, index = 0) {
        const data = gameData[emocion];
        if (!data) return console.error(`No hay datos para la emoción: ${emocion}`);

        const escenario = data.escenario[index];

        // 1. Actualizar Guardián
        guardianImg.src = data.guardian.img;
        guardianNombre.textContent = data.guardian.nombre;

        // 2. Actualizar Estímulo (Imagen y texto)
        escenarioImg.src = escenario.img;
        escenarioTexto.textContent = escenario.situacionTexto;

        // 3. Actualizar Pregunta
        escenarioPregunta.textContent = escenario.pregunta;

        // 4. Generar Opciones dinámicamente
        opcionesContainer.innerHTML = ''; // Limpiar opciones anteriores
        escenario.opciones.forEach(opcion => {
            const boton = document.createElement('button');
            // Usamos las clases de color del objeto gameData
            boton.className = `btn-opcion btn ${opcion.color}`; 
            boton.textContent = opcion.texto;
            
            // Asignar el evento de clic
            boton.onclick = () => {
                manejarRespuesta(opcion.esCorrecta, emocion);
            };
            
            opcionesContainer.appendChild(boton);
        });
    }

    /** Carga los datos de feedback (positivo/negativo) */
    function manejarRespuesta(esCorrecta, emocion) {
        if (esCorrecta) {
            // Guardar el progreso
            progreso.emociones.add(emocion);
            
            // Cargar el feedback positivo
            cargarFeedback(emocion);
            mostrarPantalla('feedback');
        } else {
            // Feedback de "intenta de nuevo"
            // Podrías hacer un modal o hacer "temblar" el botón.
            alert("Esa no parece ser la emoción principal. ¡Intenta de nuevo!");
        }
    }

    /** Rellena la pantalla de feedback con los datos de la emoción */
    function cargarFeedback(emocion) {
        const data = gameData[emocion].feedback;

        // 1. Actualizar textos e icono
        feedbackIcono.src = data.icono;
        feedbackTitulo.textContent = data.titulo;
        feedbackTexto.textContent = data.texto;

        // 2. Actualizar Colores
        // Resetear clases
        pantallas.feedback.className = 'screen hidden flex-col justify-center items-center p-8';
        feedbackTitulo.className = 'text-4xl font-bold mb-4';
        feedbackHerramientasMain.className = 'p-8 rounded-lg border-2 mb-8 text-left';
        feedbackBoton.className = 'btn'; 

        // Añadir clases nuevas
        pantallas.feedback.classList.add(...data.colorFondo.split(' '));
        feedbackTitulo.classList.add(...data.colorTitulo.split(' '));
        feedbackHerramientasMain.classList.add(...data.colorHerramientas.split(' '));
        if (data.colorBoton) {
            feedbackBoton.classList.add(...data.colorBoton.split(' '));
        }

        // 3. Generar Herramientas
        feedbackHerramientasContainer.innerHTML = '';
        data.herramientas.forEach(herramienta => {
            const div = document.createElement('div');
            div.className = 'flex items-start mb-4';
            div.innerHTML = `
                <span class="text-3xl mr-4 pt-1">${herramienta.emoji}</span>
                <p class="text-lg">
                    <b>${herramienta.titulo}</b> ${herramienta.descripcion}
                </p>
            `;
            feedbackHerramientasContainer.appendChild(div);
        });
    }

    /** Actualiza el mapa con las zonas completadas */
    function actualizarMapa() {
        // Ocultar todos los hotspots y mostrar las zonas de color
        // para las emociones completadas
        progreso.emociones.forEach(emocion => {
            const zona = document.getElementById(`mapa-zona-${emocion}`);
            const hotspot = document.getElementById(`hotspot-${emocion}`);
            if (zona) zona.classList.remove('hidden');
            if (hotspot) hotspot.classList.add('hidden'); // Ocultar hotspot completado
        });

        // Comprobar si se han completado todas las emociones
        if (progreso.emociones.size === Object.keys(gameData).length) {
            // Mostrar botón de finalizar cuando todo esté completo
            document.getElementById('btn-finalizar-mapa').classList.remove('hidden');
        }
    }

    /** Reinicia el juego al estado inicial */
    function reiniciarJuego() {
        progreso.emociones.clear();
        emocionActual = null;

        // Ocultar zonas de color
        document.querySelectorAll('[id^="mapa-zona-"]').forEach(el => el.classList.add('hidden'));
        // Mostrar hotspots
        document.querySelectorAll('.hotspot').forEach(el => el.classList.remove('hidden'));
        // Ocultar botón finalizar
        document.getElementById('btn-finalizar-mapa').classList.add('hidden');

        // Resetear mapa a BN (por si estaba en color)
        mapaBaseBn.src = 'assets/images/mapa_base_bn.png';
        btnVerMapaColor.textContent = 'Ver Mapa a Color';

        mostrarPantalla('inicio');
    }

    // ----------------------------------------------------------------
    // 5. EVENT LISTENERS (Conexión de botones)
    // ----------------------------------------------------------------

    // Pantalla de Inicio -> Mapa
    document.getElementById('btn-empezar')?.addEventListener('click', () => {
        mostrarPantalla('mapa');
    });

    // Hotspot de Tristeza -> Escenario
    hotspotTristeza?.addEventListener('click', () => {
        if (!progreso.emociones.has('tristeza')) {
            console.log("Clic en la zona de Tristeza.");
            emocionActual = "tristeza";
            cargarEscenario(emocionActual, 0); // Carga el primer escenario de tristeza
            mostrarPantalla('escenario');
        } else {
            alert("¡Ya has explorado la Isla de la Tristeza!");
        }
    });

    document.getElementById('hotspot-ansiedad')?.addEventListener('click', () => {
        if (!progreso.emociones.has('ansiedad')) {
            console.log("Clic en la zona de Ansiedad.");
            emocionActual = "ansiedad";
            cargarEscenario(emocionActual, 0); // Carga el primer escenario de ansiedad
            mostrarPantalla('escenario');
        } else {
            alert("¡Ya has explorado la Isla de la Penumbra!");
        }
    });
    
    // Hotspot de Alegría -> Escenario
    hotspotAlegria?.addEventListener('click', () => {
        if (!progreso.emociones.has('alegria')) {
            console.log("Clic en la zona de Alegría.");
            emocionActual = "alegria";
            cargarEscenario(emocionActual, 0); // Carga el primer escenario de alegría
            mostrarPantalla('escenario');
        } else {
            alert("¡Ya has explorado la Isla de la Alegría!");
        }
    });

    /* NOTA: No necesitamos un 'listener' para '.btn-opcion' aquí.
    La función 'cargarEscenario' crea los botones y les asigna 
    el evento 'onclick' correcto en ese momento.
    */

    // Feedback -> Mapa
    document.getElementById('btn-continuar')?.addEventListener('click', () => {
        console.log(`Volviendo al mapa. Emoción completada: ${emocionActual}`);
        actualizarMapa(); // Esta función revisa 'progreso' y actualiza el mapa
        emocionActual = ""; // Limpiamos la variable
        mostrarPantalla('mapa');
    });

    // Volver al mapa desde escenario (sin desbloquear)
    document.getElementById('btn-volver-mapa-escenario')?.addEventListener('click', () => {
        emocionActual = ""; // Limpiamos por si acaso
        mostrarPantalla('mapa');
    });

    // Botón para ver el mapa a color completo (Tu lógica original)
    btnVerMapaColor?.addEventListener('click', () => {
        if (mapaBaseBn.src.includes('mapa_base_bn.png')) {
            mapaBaseBn.src = 'assets/images/mapa_base_color.png';
            btnVerMapaColor.textContent = 'Ver Mapa Gris';
            // Ocultamos zonas individuales para no duplicar
            if (progreso.emociones.has('tristeza')) mapaZonaTristeza.classList.add('hidden');
            if (progreso.emociones.has('alegria')) mapaZonaAlegria.classList.add('hidden');
        } else {
            mapaBaseBn.src = 'assets/images/mapa_base_bn.png';
            btnVerMapaColor.textContent = 'Ver Mapa a Color';
            // Volvemos a mostrar las zonas desbloqueadas
            if (progreso.emociones.has('tristeza')) mapaZonaTristeza.classList.remove('hidden');
            if (progreso.emociones.has('alegria')) mapaZonaAlegria.classList.remove('hidden');
        }
    });
    
    // Mapa -> Tarjeta de Héroe
    document.getElementById('btn-finalizar-mapa')?.addEventListener('click', () => {
        mostrarPantalla('tarjetaHeroe');
    });

    // Tarjeta de Héroe -> Inicio (reiniciar el demo)
    document.getElementById('btn-reiniciar')?.addEventListener('click', () => {
        reiniciarJuego(); // Llama a la función de reinicio completa
    });

    // --- Iniciar el demo ---
    // Ocultar el botón de finalizar mapa al inicio
    document.getElementById('btn-finalizar-mapa').classList.add('hidden');
    // Mostrar la pantalla de inicio
    mostrarPantalla('inicio');

    /* Se eliminó la parte final de tu archivo (desde la línea 115) 
    porque era código incompleto y no conectado. 
    Las funciones 'cargarPregunta' y 'chequearRespuesta' han sido 
    reemplazadas por 'cargarEscenario' y 'manejarRespuesta', 
    que están 100% integradas.
    */
});