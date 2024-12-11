document.addEventListener("DOMContentLoaded", function() {
    // Asegurarse de que el evento se dispare después de cargar el DOM

    // Función para calcular el Score TAL
    document.getElementById("calcularBtn").addEventListener("click", function() {
        // Obtener los valores de los inputs
        const tipoPaciente = document.getElementById('tipoPaciente').value;
        const frecuenciaRespiratoria = parseInt(document.getElementById('frecuenciaRespiratoria').value);
        const sibilancias = parseInt(document.getElementById('sibilancias').value);
        const cianosis = parseInt(document.getElementById('cianosis').value);
        const retracciones = parseInt(document.getElementById('retracciones').value);

        let puntuacion = 0;

        // Validación de la frecuencia respiratoria
        if (isNaN(frecuenciaRespiratoria) || frecuenciaRespiratoria <= 0) {
            alert("Por favor, ingresa una frecuencia respiratoria válida.");
            return; // Evitar que se siga calculando si hay error
        }

        // Calcular el puntaje según el tipo de paciente
        if (tipoPaciente === 'menor6meses') {
            if (frecuenciaRespiratoria <= 40) puntuacion += 0;
            else if (frecuenciaRespiratoria <= 44) puntuacion += 1;
            else if (frecuenciaRespiratoria <= 70) puntuacion += 2;
            else puntuacion += 3;
        } else if (tipoPaciente === 'mayor6meses') {
            if (frecuenciaRespiratoria <= 30) puntuacion += 0;
            else if (frecuenciaRespiratoria <= 45) puntuacion += 1;
            else if (frecuenciaRespiratoria <= 60) puntuacion += 2;
            else puntuacion += 3;
        }

        // Añadir puntaje de sibilancias
        puntuacion += sibilancias;

        // Añadir puntaje de cianosis
        puntuacion += cianosis;

        // Añadir puntaje de retracciones
        puntuacion += retracciones;

        // Mostrar el resultado
        let resultado = `El puntaje total es: ${puntuacion}`;
        let recomendacion = '';

        // Recomendaciones según el puntaje
        if (puntuacion <= 5) {
            recomendacion = "Enviar al domicilio con seguimiento.";
        } else if (puntuacion <= 8) {
            recomendacion = "Administrar 2 puff de salbutamol cada 10 minutos x 5 veces. Reevaluar en 1 hora.";
        } else if (puntuacion <= 10) {
            recomendacion = "Administrar oxigenoterapia y 2 puff de salbutamol cada 10 minutos x 5 veces. Reevaluar en 1 hora.";
        } else {
            recomendacion = "Enviar directamente al hospital.";
        }

        // Mostrar el resultado y recomendación
        document.getElementById('resultado').innerHTML = `${resultado} <br> Recomendación: ${recomendacion}`;
    });
});