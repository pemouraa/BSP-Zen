const botaoCaneta = document.getElementById('botaoCaneta');
const botaoBolhaPlastico = document.getElementById('botaoPlasticoBolha');
const botaoInterruptor = document.getElementById('botaoInterruptor');
const containerObjeto = document.getElementById('objectContainer');
const somCliqueCaneta = document.getElementById('somCaneta');
const somEstouroBolha = document.getElementById('somPlasticoBolha');
const somInterruptor = document.getElementById('somInterruptor');
const secaoCompra = document.getElementById('secaoCompra');
const botaoComprar = document.getElementById('botaoComprar');
let objetoAtual;

function limparContainer() {
    containerObjeto.innerHTML = '';
}

function atualizarSecaoCompra(objeto) {
    objetoAtual = objeto;
    secaoCompra.classList.remove('hidden');
    if (objeto === 'caneta') {
        botaoComprar.onclick = () => window.open('https://www.qwalis.com/pt/article-covid/prd/1405-10221-caneta.html', '_blank');
    } else if (objeto === 'bolha-plastica') {
        botaoComprar.onclick = () => window.open('https://produto.mercadolivre.com.br/MLB-4297115130-100-sacos-plastico-bolha-para-embalagens-19x25-_JM?matt_tool=18956390&utm_source=google_shopping&utm_medium=organic', '_blank');
    } else if (objeto === 'interruptor') {
        botaoComprar.onclick = () => window.open('https://www.archiexpo.com/pt/prod/abb-home-and-building-automation/product-53659-2245479.html', '_blank');
    }
}

botaoCaneta.addEventListener('click', () => {
    limparContainer();
    let estadoCaneta = 'retraida';
    const imagemCaneta = document.createElement('img');
    imagemCaneta.src = '../imagens/canetaSEMponta.png';
    imagemCaneta.className = 'cursor-pointer';
    imagemCaneta.addEventListener('click', () => {
        if (estadoCaneta === 'retraida') {
            imagemCaneta.src = '../imagens/canetaCOMponta.png';
            estadoCaneta = 'estendida';
        } else {
            imagemCaneta.src = '../imagens/canetaSEMponta.png';
            estadoCaneta = 'retraida';
        }
        somCliqueCaneta.currentTime = 0;
        somCliqueCaneta.play();
    });
    containerObjeto.appendChild(imagemCaneta);
    atualizarSecaoCompra('caneta');
});

botaoBolhaPlastico.addEventListener('click', () => {
    limparContainer();
    let estadoBolha = 'intactas';
    const imagemBolha = document.createElement('img');
    imagemBolha.src = '../imagens/pBolha.png';
    imagemBolha.className = 'cursor-pointer';
    imagemBolha.addEventListener('click', () => {
        if (estadoBolha === 'intactas') {
            imagemBolha.src = '../imagens/pBolhaEstourado.png';
            estadoBolha = 'estouradas';
        } else {
            imagemBolha.src = '../imagens/pBolha.png';
            estadoBolha = 'intactas';
        }
        somEstouroBolha.currentTime = 0;
        somEstouroBolha.play();
    });
    containerObjeto.appendChild(imagemBolha);
    atualizarSecaoCompra('bolha-plastica');
});

botaoInterruptor.addEventListener('click', () => {
    limparContainer();
    let estadoInterruptor = 'desligado';
    const imagemInterruptor = document.createElement('img');
    imagemInterruptor.src = '../imagens/interruptorOFF.png';
    imagemInterruptor.className = 'cursor-pointer';
    imagemInterruptor.addEventListener('click', () => {
        if (estadoInterruptor === 'desligado') {
            imagemInterruptor.src = '../imagens/interruptorON.png';
            estadoInterruptor = 'ligado';
        } else {
            imagemInterruptor.src = '../imagens/interruptorOFF.png';
            estadoInterruptor = 'desligado';
        }
        somInterruptor.currentTime = 0;
        somInterruptor.play();
    });
    containerObjeto.appendChild(imagemInterruptor);
    atualizarSecaoCompra('interruptor');
});
