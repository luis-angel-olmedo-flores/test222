const app = Vue.createApp({
    data() {
        return {
            nombre: '',
            mostrarTest: false,
            mostrarResultado: false,
            preguntas: [
                {
                    texto: '¿Qué prefieres hacer en tu tiempo libre?',
                    opciones: [
                        { texto: 'Leer cómics', puntos: 3 }, // Spider-Man
                        { texto: 'Graffiti', puntos: 1 } // Miles Morales
                    ]
                },
                {
                    texto: '¿Cuál es tu lugar favorito en la ciudad?',
                    opciones: [
                        { texto: 'Una cafetería tranquila', puntos: 3 }, // Spider-Gwen
                        { texto: 'Las azoteas para grafitear', puntos: 1 } // Miles Morales
                    ]
                },
                {
                    texto: '¿Qué tipo de música prefieres?',
                    opciones: [
                        { texto: 'Rock alternativo', puntos: 2 }, // Spider-Punk
                        { texto: 'Pop', puntos: 3 } // Spider-Gwen
                    ]
                },
                {
                    texto: '¿Qué es más importante para ti?',
                    opciones: [
                        { texto: 'La amistad', puntos: 3 }, // Spider-Man
                        { texto: 'Ser diferente y único', puntos: 2 } // Spider-Punk
                    ]
                },
                {
                    texto: '¿Cómo te describirías?',
                    opciones: [
                        { texto: 'Un héroe', puntos: 3 }, // Spider-Man
                        { texto: 'Un rebelde', puntos: 1 } // Spider-Punk
                    ]
                },
                {
                    texto: '¿Qué te gustaría hacer después de la escuela?',
                    opciones: [
                        { texto: 'Entrenar mis habilidades', puntos: 3 }, // Miles Morales
                        { texto: 'Pasar tiempo con amigos', puntos: 2 } // Spider-Gwen
                    ]
                },
                {
                    texto: '¿Cuál es tu estilo de vestir?',
                    opciones: [
                        { texto: 'Clásico y elegante', puntos: 3 }, // Spider-Gwen
                        { texto: 'Casual y urbano', puntos: 1 } // Miles Morales
                    ]
                },
                {
                    texto: '¿Cuál es tu superpoder favorito?',
                    opciones: [
                        { texto: 'Trepar paredes', puntos: 3 }, // Spider-Man
                        { texto: 'Invisibilidad', puntos: 1 } // Spider-Gwen
                    ]
                },
                {
                    texto: '¿Cómo prefieres resolver conflictos?',
                    opciones: [
                        { texto: 'Dialogar', puntos: 3 }, // Spider-Man
                        { texto: 'Usar la acción', puntos: 2 } // Spider-Punk
                    ]
                },
                {
                    texto: '¿Cuál es tu lema en la vida?',
                    opciones: [
                        { texto: 'Con gran poder, viene una gran responsabilidad', puntos: 3 }, // Spider-Man
                        { texto: 'Sé tú mismo, todos los demás ya están ocupados', puntos: 1 } // Spider-Punk
                    ]
                }
            ],
            respuestas: [],
            totalPuntos: 0,
            resultado: '',
            imagenResultado: '' // Agregado para almacenar la URL de la imagen del resultado
        };
    },
    methods: {
        empezarTest() {
            if (this.nombre) {
                this.mostrarTest = true;
                this.mostrarResultado = false;
            } else {
                alert('Por favor, ingresa tu nombre para continuar.');
            }
        },
        calcularResultado() {
            this.totalPuntos = this.respuestas.reduce((total, puntos) => total + puntos, 0);
            this.mostrarTest = false;
            this.mostrarResultado = true;
            this.generarResultado();
        },
        generarResultado() {
            if (this.totalPuntos >= 24) {
                this.resultado = `¡Eres Spider-Man (Peter Parker), ${this.nombre}! Eres responsable, valiente y siempre buscas hacer lo correcto.`;
                this.imagenResultado = 'img/spiderman.jpg'; // Ruta de Spider-Man
            } else if (this.totalPuntos >= 18) {
                this.resultado = `¡Eres Spider-Gwen, ${this.nombre}! Tienes un fuerte sentido de justicia, pero también valoras tu independencia y originalidad.`;
                this.imagenResultado = 'img/spidergwen.png'; // Ruta de Spider-Gwen
            } else if (this.totalPuntos >= 12) {
                this.resultado = `¡Eres Spider-Punk, ${this.nombre}! Eres rebelde y creativo, y te encanta romper las normas para expresar tu individualidad.`;
                this.imagenResultado = 'img/spiderpunk.jpg'; // Ruta de Spider-Punk
            } else {
                this.resultado = `¡Eres Miles Morales, ${this.nombre}! Eres innovador, talentoso y siempre encuentras formas de conectarte con las personas.`;
                this.imagenResultado = 'img/milesmorales.jpg'; // Ruta de Miles Morales
            }
        },
        reiniciarTest() {
            this.nombre = '';
            this.respuestas = [];
            this.totalPuntos = 0;
            this.mostrarTest = false;
            this.mostrarResultado = false;
            this.imagenResultado = ''; // Reiniciar imagen
        }
    }
});

app.mount('#app');
