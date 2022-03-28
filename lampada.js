const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lampada = document.getElementById('lamp');

function lampadaEstaQuebrada() {
    return lampada.src.indexOf('quebrada') > -1;
}

function estadoOn() {
    if (!lampadaEstaQuebrada()) {
        lampada.src = './img/ligada.jpg';
    }
}

function estadoOff() {
    if (!lampadaEstaQuebrada()) {
        lampada.src = './img/desligada.jpg';
    }
}

function estadoBreak() {
    lampada.src = './img/quebrada.jpg';
}

turnOn.addEventListener('click', estadoOn);
turnOff.addEventListener('click', estadoOff);
lampada.addEventListener('mouseover', estadoOn);
lampada.addEventListener('mouseleave', estadoOff);

lampada.addEventListener('dblclick', estadoBreak)