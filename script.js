var _btnContinuar = document.getElementById("btn-continuar");

var _numBase = 0;
var _secuenciaNum = [];
var _guardar = 0;
var _secuenciaOpc = [];
var _lugAleat = 0;
var _numSeleccionado = 0;


window.onload = function() {
    llenarArray();
    llenarArrayOpcion();
    mostrarOpciones();
    mostrarNumeros();
    //mostrarSecuencia();
}

function llenarArray (){
    var numeroMin = 30;
    var numeroMax = 100;

    _numBase = numeroAleatorioRango(numeroMin, numeroMax);
    _secuenciaNum = [_numBase];

    for (var i=1; i<=5; i++){
        _secuenciaNum [i] = (_numBase -= 6);

        if (i == 3){
            _guardar = _secuenciaNum[i];
            _secuenciaNum [3] = '';
        }
    }
}

function numeroAleatorioRango(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function llenarArrayOpcion (){
    var numMin = (_secuenciaNum[2]);
    var numMax = (_secuenciaNum[4]);

    lugAleat = lugarAleatorio();

    for (var i=0; i<=3; i++){

        _secuenciaOpc [i] = numeroAleatorioRango (numMin, numMax);
        
        if (i == lugAleat){
            _secuenciaOpc[i] = _guardar;
        }

        for (var x=0; x<i; x++){
            if (_secuenciaOpc[i] == _secuenciaOpc[x]){
                i--;
            }
        }
    }
}

function lugarAleatorio (){
    var numMini = 0;
    var numMaxi = 3;

    return numeroAleatorioRango(numMini,numMaxi);
}

function mostrarNumeros (){
    var secuenciaUno = document.getElementById("secuenciaNum");
    secuenciaUno.textContent = _secuenciaNum;
}

/*function mostrarSecuencia(){
    var num = '';
    for(var i=0; i <= 5; i++){
        botones += '<label id="secuenciaGuia' + i +'" value="'+ _secuenciaNum[i] +'">';
    }
    document.getElementById('secuenciaGuia').innerHTML = num;
}*/

function mostrarOpciones(){
    var botones = '';
    for(var i=0; i <= 3; i++){
        botones += '<input class="botonesOpciones'+ i +'" type="button" onclick="opcionCorrecta(this.value)" value="'+ _secuenciaOpc[i] +'">';
    }
    document.getElementById('opciones').innerHTML = botones;
}

function opcionCorrecta(valor){
    document.getElementById('btn-continuar').style.display = 'block';
    _numSeleccionado = valor;
}

function validarOpcion(){
    if(_numSeleccionado == _guardar){
        alert('¡Correcto! Puntaje = 1');
        document.getElementById('btn-siguiente').style.display = 'block';
    }else{
        alert('¡Incorrecto! Puntaje = 0');
    }
    document.getElementById('btn-continuar').style.display = 'none';
    _numSeleccionado = 0;
}

function recargarPagina (){
    location.reload(true)
}



