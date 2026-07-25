const conectar = document.getElementById("conectar");
const desconectar = document.getElementById("desconectar");

const luz = document.getElementById("luz");
const status = document.getElementById("status");

const operadora = document.getElementById("operadora");
const servidor = document.getElementById("servidor");



conectar.addEventListener("click", function(){

status.innerHTML = "Conectando...";

luz.style.background = "yellow";
luz.style.boxShadow = "0 0 20px yellow";



setTimeout(function(){

status.innerHTML = 
"Conectado - " + servidor.value;


luz.style.background = "#00ff00";

luz.style.boxShadow =
"0 0 20px #00ff00";


},2000);


});





desconectar.addEventListener("click", function(){


status.innerHTML = "Desconectado";


luz.style.background = "red";


luz.style.boxShadow =
"0 0 20px red";



});





operadora.addEventListener("change", function(){


console.log(
"Operadora selecionada:",
operadora.value
);


});





servidor.addEventListener("change", function(){


console.log(
"Servidor selecionado:",
servidor.value
);


});
