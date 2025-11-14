document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Variables Globales ---
  const pantallaMapa = document.getElementById('pantalla-mapa');
  const pantallaEscenario = document.getElementById('pantalla-escenario');
  const pantallaFeedback = document.getElementById('pantalla-feedback');

  let escenariosDB = []; // Para guardar los escenarios del JSON
  let escenarioActual = {};
  let progreso = {
    alegria: 0,
    tristeza: 0,
    enojo: 0,
    ansiedad: 0,
    calma: 0
  };

  // --- 2. Cargar Juego ---
  async function iniciarJuego() {
    // Cargar progreso guardado
    const progresoGuardado = localStorage.getItem('mapaEmocionesProgreso');
    if (progresoGuardado) {
      progreso = JSON.parse(progresoGuardado);
    }

    // Cargar escenarios
    try {
      const response = await fetch('data/escenarios.json');
      escenariosDB = await response.json();
      actualizarMapa();
      asignarEventosMapa();
    } catch (error) {
      console.error("Error al cargar escenarios:", error);
    }
  }

  // --- 3. Lógica del Mapa ---
  function actualizarMapa() {
    // Recorre el progreso y actualiza las imágenes del mapa
    for (const zona in progreso) {
      const elementoZona = document.getElementById(`zona-${zona}`);
      // Si ha completado 3 escenarios de esa zona, la colorea
      if (progreso[zona] >= 3) { 
        elementoZona.querySelector('img').src = `imagenes/${zona}-color.png`;
        elementoZona.classList.add('desbloqueada'); // Clase CSS para quitar el 'bloqueada'
      } else {
        elementoZona.querySelector('img').src = `imagenes/${zona}-bn.png`;
      }
    }
  }

  function asignarEventosMapa() {
    document.querySelectorAll('.zona').forEach(zona => {
      zona.addEventListener('click', () => {
        const nombreZona = zona.dataset.zona;
        iniciarEscenario(nombreZona);
      });
    });
  }

  // --- 4. Lógica del Escenario (Quiz) ---
  function iniciarEscenario(zona) {
    // Buscar un escenario NO completado para esa zona
    // (Aquí por simplicidad tomamos uno al azar, idealmente debes filtrarlos)
    const escenariosZona = escenariosDB.filter(e => e.zona === zona);
    escenarioActual = escenariosZona[Math.floor(Math.random() * escenariosZona.length)];

    // Ocultar/Mostrar pantallas
    pantallaMapa.classList.add('hidden');
    pantallaEscenario.classList.remove('hidden');

    // Limpiar escenario anterior
    // ... (código para limpiar texto, img, audio) ...

    // Cargar nuevo escenario
    const txtPregunta = document.getElementById('pregunta-texto');
    const imgPregunta = document.getElementById('pregunta-imagen');

    if (escenarioActual.tipo === 'texto') {
      txtPregunta.textContent = escenarioActual.pregunta;
    } else if (escenarioActual.tipo === 'imagen') {
      imgPregunta.src = escenarioActual.pregunta;
      imgPregunta.classList.remove('hidden');
    } 
    // ... (lógica para tipo 'sonido') ...

    // Crear botones de opciones
    const contenedorBotones = document.getElementById('opciones-botones');
    contenedorBotones.innerHTML = ''; // Limpiar
    escenarioActual.opciones.forEach(opcion => {
      const boton = document.createElement('button');
      boton.textContent = opcion;
      boton.dataset.opcion = opcion;
      // Tailwind CSS
      boton.className = 'bg-white shadow p-4 rounded-lg text-xl hover:bg-yellow-200'; 
      boton.addEventListener('click', verificarRespuesta);
      contenedorBotones.appendChild(boton);
    });
  }

  // --- 5. Lógica de Feedback ---
  function verificarRespuesta(evento) {
    const opcionElegida = evento.target.dataset.opcion;

    if (opcionElegida === escenarioActual.respuestaCorrecta) {
      // ¡Correcto!
      progreso[escenarioActual.zona]++;
      localStorage.setItem('mapaEmocionesProgreso', JSON.stringify(progreso));
      // ... (tocar sonido de éxito) ...
    } else {
      // Incorrecto
      // ... (tocar sonido de error) ...
    }

    // Mostrar Feedback
    pantallaEscenario.classList.add('hidden');
    pantallaFeedback.classList.remove('hidden');

    document.getElementById('feedback-guardian').src = `imagenes/guardian-${escenarioActual.zona}.png`;
    document.getElementById('feedback-texto').textContent = escenarioActual.feedback;

    // Comprobar si hay minijuego
    if (escenarioActual.minijuego === 'respira') {
      iniciarMinijuegoRespira(true);
    } else {
      iniciarMinijuegoRespira(false);
    }
  }

  // Evento para cerrar el feedback y volver al mapa
  document.getElementById('boton-continuar').addEventListener('click', () => {
    pantallaFeedback.classList.add('hidden');
    pantallaMapa.classList.remove('hidden');
    actualizarMapa(); // Actualiza el mapa por si se desbloqueó una zona
  });

  // --- 6. Iniciar todo ---
  iniciarJuego();

  // --- Funciones de la Etapa 4 (Minijuegos) ---
  function iniciarMinijuegoRespira(mostrar) {
    const canvas = document.getElementById('respiracion-canvas');
    if (!mostrar) {
      canvas.classList.add('hidden');
      return;
    }
    canvas.classList.remove('hidden');
    // ... Aquí irá la lógica de Canvas API ...
  }
});