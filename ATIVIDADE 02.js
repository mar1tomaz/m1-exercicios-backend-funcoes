const carro = {
    ligado: false,
    velocidade: 0,
}

function imprimirStatus(carro) {
    const status = carro.ligado ? 'ligado' : 'desligado';
    console.log(`Carro ${status}. Velocidade: ${carro.velocidade}.`);
}

function ligar(carro) {
    if (carro.ligado === false) {
        carro.ligado = true
    } else {
        console.log(`Este carro já está ligado.`);
    }
}
ligar(carro);
function desligar(carro) {
    if (carro.ligado === true) {
        carro.ligado = false; carro.velocidadde = 0;
    } else {
        console.log(`Este carro já está desligado.`);
    }
}
desligar(carro);
function acelerar(carro) {
    if (carro.ligado === true) {
        carro.velocidade += 10;
    } else {
        console.log(`Não é possível acelerar um carro desligado.`);
    }
}
acelerar(carro);
function desacelerar(carro) {
    if (carro.ligado === true) {
        carro.velocidade -= 10;
    } else {
        console.log(`Não é possível desacelerar um carro desligado.`);
    }
}
desacelerar(carro);
desligar(carro);
imprimirStatus(carro);
ligar(carro);
imprimirStatus(carro);
ligar(carro);
imprimirStatus(carro);
acelerar(carro);
imprimirStatus(carro);
acelerar(carro);
imprimirStatus(carro);
desacelerar(carro);
imprimirStatus(carro);
desligar(carro);
imprimirStatus(carro);
acelerar(carro);
imprimirStatus(carro);
desacelerar(carro);
imprimirStatus(carro);