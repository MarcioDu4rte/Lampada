const interruptor = document.getElementById('interruptor');
const lampada = document.getElementById('lamp');

function lampadaEstaQuebrada() {
    return lampada.src.indexOf('quebrada') > -1;
}

function lampadaEstaDesligada() {
    return lampada.src.indexOf('desligada') > -1;
}

function estado() {

    if (!lampadaEstaQuebrada()) {

        if (lampadaEstaDesligada()) {
            //            alert('ligada');
            lampada.src = './img/ligada.jpg';
            interruptor.textContent = 'Desligar';
        } else {
            //            alert('desligada');
            lampada.src = './img/desligada.jpg';
            interruptor.textContent = 'Ligar';
        }
    }
}

function estadoBreak() {
    lampada.src = './img/quebrada.jpg';
}

interruptor.addEventListener('click', estado);
lampada.addEventListener('mouseover', estado);
lampada.addEventListener('mouseleave', estado);

lampada.addEventListener('dblclick', estadoBreak)