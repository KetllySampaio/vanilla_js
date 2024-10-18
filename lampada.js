const turnOn = document.getElementById ('turnOn')
const turnOff = document.getElementById ('turnOff')
const lamp = document.getElementById ('lamp') 


function lampOn (){
    lamp.src = 'img/on.jpg'; //function da img on
}
function lampOf (){
    lamp.src = 'img/off.jpg';//function da img off
}

function lampBroken (){
    lamp.src = 'img/broken.jpg'; //function da img quebrada
}


turnOn.addEventListener ('click', lampOn) //"escutar" o click, ligar a lampada

turnOff.addEventListener ('click', lampOf) //"escutar" o click, desligar a lampada
lamp.addEventListener('mouseover', lampOn); //quando o mouse passar em cima da lampada, ela vai ligar
lamp.addEventListener ('mouseleave', lampOf);//quando tirar o mouse de cima da lampada, ela vai desligar
lamp.addEventListener ('dblclick', lampBroken); //dois clicks a lampada irá quebrar