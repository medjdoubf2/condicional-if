  function calcularCombustible() {
          let turisticos = 30; // valor por defecto
          let todoTerreno = 10; // valor por defecto
          const capacidadTuristico = 40; // capacidad del depósito
          const capacidadTodoTerreno = 60; // capacidad del depósito

          let necesidadTuristicos = turisticos * capacidadTuristico;
          let necesidadTodoTerreno = todoTerreno * capacidadTodoTerreno;
          let total = necesidadTuristicos + necesidadTodoTerreno;

          document.getElementById('resultadoCombustible').innerText =
              `La necesidad de combustible de los vehículos turísticos es de ${necesidadTuristicos} y la de los vehículos todo terreno es de ${necesidadTodoTerreno}, para un total de ${total}.`;
      }

      function mostrarMayor() {
          const num1 = parseInt(document.getElementById('numero1').value);
          const num2 = parseInt(document.getElementById('numero2').value);
          let mayor = Math.max(num1, num2);
          document.getElementById('resultadoMayor').innerText = `El mayor es: ${mayor}`;
      }

      function mostrarExperiencia() {
          const nombre = document.getElementById('nombre').value;
          const anios = parseInt(document.getElementById('anios').value);
          let nivel;

          if (anios < 2) {
              nivel = "Nivel principiante.";
          } else if (anios <= 4) {
              nivel = "Nivel intermedio.";
          } else if (anios <= 7) {
              nivel = "Nivel avanzado.";
          } else if (anios <= 10) {
              nivel = "Nivel experto.";
          } else {
              nivel = "Nivel Gurú.";
          }

          document.getElementById('resultadoExperiencia').innerText = `${nombre}, ${nivel}`;
      }

      function verificarPalabra() {
          const palabra = document.getElementById('palabra').value.toLowerCase();
          let esBonita = (palabra.length === 9 && palabra.charAt(0) === 'h') || (palabra.length === 5 && palabra.charAt(0) === 'p');
          document.getElementById('resultadoPalabra').innerText = esBonita ? "La palabra es bonita." : "La palabra no es bonita.";
      }