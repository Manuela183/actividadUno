switch (i) {
        case 0:
            botones += '<input class="botonesOpciones'+ i +'" type="button" onclick="opcionCorrecta(this.value)" value="'+ 'a.' + _secuenciaOpc[i] +'">';
        break;
        case 1:
            botones += '<input class="botonesOpciones'+ i +'" type="button" onclick="opcionCorrecta(this.value)" value="'+ 'b.' + _secuenciaOpc[i] +'">';
        break;
        case 2:
            botones += '<input class="botonesOpciones'+ i +'" type="button" onclick="opcionCorrecta(this.value)" value="'+ 'c.' + _secuenciaOpc[i] +'">';
        break;
        case 3:
            botones += '<input class="botonesOpciones'+ i +'" type="button" onclick="opcionCorrecta(this.value)" value="'+ 'd.' + _secuenciaOpc[i] +'">';

            break;
      }

function recargarPagina (){
    location.reload(true)
}

<button onclick="recargarPagina()" id="btn-siguiente">Siguiente</button>

 function recargarPagina (){
       _bandera++;
    }