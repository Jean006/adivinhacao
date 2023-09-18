const numeroMinimo = 1; 
const numeroMax = 100; 
let numeroAleatorio;
let tentativas = 0;
const maxtentativas = 5; 
let jogoFinalizado = false;

function comecarJogo() {
    numeroAleatorio = Math.floor(Math.random() * (numeroMax - numeroMinimo + 1)) + numeroMinimo;
    tentativas = 0;
    jogoFinalizado = false;
    document.getElementById('adivinhar').disabled = false;
    document.getElementById('output').textContent = `Adivinhe o número entre ${numeroMinimo} e ${numeroMax}. Você tem ${maxtentativas} tentativas.`;
}

function adivinharNumero() {
    if (jogoFinalizado) {
        return; 
    }

    const adivinhar = parseInt(document.getElementById('adivinhar').value);

    if (isNaN(adivinhar) || adivinhar < numeroMinimo || adivinhar > numeroMax) {
        document.getElementById('output').textContent = `Por favor, insira um número válido entre ${numeroMinimo} e ${numeroMax}.`;
    } else {
        tentativas++;
        if (adivinhar === numeroAleatorio) {
            document.getElementById('output').textContent = `Parabéns! Você acertou o número ${numeroAleatorio} em ${tentativas} tentativas.`;
            document.getElementById('adivinhar').disabled = true;
            jogoFinalizado = true;
            setTimeout(comecarJogo, 5000); 
        } else {
            if (tentativas === maxtentativas) {
                document.getElementById('output').textContent = `Suas tentativas acabaram. O número era ${numeroAleatorio}.`;
                document.getElementById('adivinhar').disabled = true;
                jogoFinalizado = true;
                setTimeout(comecarJogo, 5000); 
            } else {
                document.getElementById('output').textContent = `Tente novamente. Dica: o número é ${adivinhar < numeroAleatorio ? 'maior' : 'menor'} que ${adivinhar}. Tentativas restantes: ${maxtentativas - tentativas}.`;
            }
        }
    }
}

comecarJogo();