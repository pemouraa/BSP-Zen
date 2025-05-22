const botaoCaneta = document.getElementById('botaoCaneta');
const botaoPlasticoBolha = document.getElementById('botaoPlasticoBolha');
const botaoInterruptor = document.getElementById('botaoInterruptor');
const botaoZiper = document.getElementById('botaoZiper');
const botaoCadeado = document.getElementById('botaoCadeado');
const botaoIsqueiro = document.getElementById('botaoIsqueiro');
const botaoTesoura = document.getElementById('botaoTesoura');
const containerObjeto = document.getElementById('containerObjeto');
const somCaneta = document.getElementById('somCaneta');
const somPlasticoBolha = document.getElementById('somPlasticoBolha');
const somInterruptor = document.getElementById('somInterruptor');
const somZiper = document.getElementById('somZiper');
const somCadeado = document.getElementById('somCadeado');
const somIsqueiro = document.getElementById('somIsqueiro');
const somTesoura = document.getElementById('somTesoura');
const secaoCompra = document.getElementById('secaoCompra');
const botaoComprar = document.getElementById('botaoComprar');

function limparContainer() {
    containerObjeto.innerHTML = '';
}

function atualizarSecaoCompra(objeto) {
    objetoAtual = objeto;
    secaoCompra.classList.remove('hidden');
    if (objeto === 'caneta') {
        botaoComprar.onclick = () => window.open('https://www.qwalis.com/pt/article-covid/prd/1405-10221-caneta.html', '_blank');
    } else if (objeto === 'plasticoBolha') {
        botaoComprar.onclick = () => window.open('https://produto.mercadolivre.com.br/MLB-4297115130-100-sacos-plastico-bolha-para-embalagens-19x25-_JM?matt_tool=18956390&utm_source=google_shopping&utm_medium=organic', '_blank');
    } else if (objeto === 'interruptor') {
        botaoComprar.onclick = () => window.open('https://www.archiexpo.com/pt/prod/abb-home-and-building-automation/product-53659-2245479.html', '_blank');
    } else if (objeto === 'ziper') {
        botaoComprar.onclick = () => window.open('https://www.mercadolivre.com.br/ziper-para-jaquetas-de-metal-inox-alta-resistncia-cor-preto-dentes-ouro-x48/p/MLB37799736?matt_tool=18956390&utm_source=google_shopping&utm_medium=organic&pdp_filters=item_id%3AMLB3755369053&from=gshop', '_blank');
    } else if (objeto === 'cadeado') {
        botaoComprar.onclick = () => window.open('https://www.mercadolivre.com.br/cadeado-pado-25mm-nivel-2-uso-cotidiano-2-chaves-latao-cor-dourado/p/MLB22316800?pdp_filters=item_id%3AMLB3973305413&from=gshop&matt_tool=69040175&matt_internal_campaign_id=&matt_word=&matt_source=google&matt_campaign_id=22090354310&matt_ad_group_id=173090585716&matt_match_type=&matt_network=g&matt_device=c&matt_creative=727882731597&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735128761&matt_product_id=MLB22316800-product&matt_product_partition_id=2388009898786&matt_target_id=pla-2388009898786&cq_src=google_ads&cq_cmp=22090354310&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=1&gad_campaignid=22090354310&gbraid=0AAAAAD93qcCwroP94AKQCIt4a8A4ckJte&gclid=Cj0KCQjw0LDBBhCnARIsAMpYlAr1DWc-OuxffZeE6j_Dwenkvai4QPoh0kneNzbJDypn8lu2xggLBwoaAmGlEALw_wcB', '_blank');
    } else if (objeto === 'isqueiro') {
        botaoComprar.onclick = () => window.open('https://www.tabacanasmokingshop.com/loja/isqueiro-bic-grande/', '_blank');
    } else if (objeto === 'tesoura') {
        botaoComprar.onclick = () => window.open('https://www.artpel.com.br/tesoura-escolar-tramontina?parceiro=7025&variant_id=20225&srsltid=AfmBOoqVQ2Ai5hitbKBtdZ6RINB83_f5bycTuwDpyjRr7k7S4gv4LTVtZbw', '_blank');
    }
}

botaoCaneta.addEventListener('click', () => {
    limparContainer();
    estadoCaneta = 'retraida';
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
        somCaneta.currentTime = 0;
        somCaneta.play();
    });
    containerObjeto.appendChild(imagemCaneta);
    atualizarSecaoCompra('caneta');
});

botaoPlasticoBolha.addEventListener('click', () => {
    limparContainer();
    estadoPlasticoBolha = 'intactas';
    const imagemPlasticoBolha = document.createElement('img');
    imagemPlasticoBolha.src = '../imagens/pBolha.png';
    imagemPlasticoBolha.className = 'cursor-pointer';
    imagemPlasticoBolha.addEventListener('click', () => {
        if (estadoPlasticoBolha === 'intactas') {
            imagemPlasticoBolha.src = '../imagens/pBolhaEstourado.png';
            estadoPlasticoBolha = 'estouradas';
        } else {
            imagemPlasticoBolha.src = '../imagens/pBolha.png';
            estadoPlasticoBolha = 'intactas';
        }
        somPlasticoBolha.currentTime = 0;
        somPlasticoBolha.play();
    });
    containerObjeto.appendChild(imagemPlasticoBolha);
    atualizarSecaoCompra('plasticoBolha');
});

botaoInterruptor.addEventListener('click', () => {
    limparContainer();
    estadoInterruptor = 'desligado';
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

botaoZiper.addEventListener('click', () => {
    limparContainer();
    estadoZiper = 'fechado';
    const imagemZiper = document.createElement('img');
    imagemZiper.src = '../imagens/ziperFechado.png';
    imagemZiper.className = 'cursor-pointer';
    imagemZiper.addEventListener('click', () => {
        if (estadoZiper === 'fechado') {
            imagemZiper.src = '../imagens/ziperAberto.png';
            estadoZiper = 'aberto';
        } else {
            imagemZiper.src = '../imagens/ziperFechado.png';
            estadoZiper = 'fechado';
        }
        somZiper.currentTime = 0;
        somZiper.play();
    });
    containerObjeto.appendChild(imagemZiper);
    atualizarSecaoCompra('ziper');
});

botaoCadeado.addEventListener('click', () => {
    limparContainer();
    estadoCadeado = 'fechado';
    const imagemCadeado = document.createElement('img');
    imagemCadeado.src = '../imagens/cadeadoFechado.png';
    imagemCadeado.className = 'cursor-pointer';
    imagemCadeado.addEventListener('click', () => {
        if (estadoCadeado === 'fechado') {
            imagemCadeado.src = '../imagens/cadeadoAberto.png';
            estadoCadeado = 'aberto';
        } else {
            imagemCadeado.src = '../imagens/cadeadoFechado.png';
            estadoCadeado = 'fechado';
        }
        somCadeado.currentTime = 0;
        somCadeado.play();
    });
    containerObjeto.appendChild(imagemCadeado);
    atualizarSecaoCompra('cadeado');
});

botaoIsqueiro.addEventListener('click', () => {
    limparContainer();
    estadoIsqueiro = 'apagado';
    const imagemIsqueiro = document.createElement('img');
    imagemIsqueiro.src = '../imagens/isqueiroApagado.png';
    imagemIsqueiro.className = 'cursor-pointer';
    imagemIsqueiro.addEventListener('click', () => {
        if (estadoIsqueiro === 'apagado') {
            imagemIsqueiro.src = '../imagens/isqueiroAceso.png';
            estadoIsqueiro = 'aceso';
        } else {
            imagemIsqueiro.src = '../imagens/isqueiroApagado.png';
            estadoIsqueiro = 'apagado';
        }
        somIsqueiro.currentTime = 0;
        somIsqueiro.play();
    });
    containerObjeto.appendChild(imagemIsqueiro);
    atualizarSecaoCompra('isqueiro');
});

botaoTesoura.addEventListener('click', () => {
    limparContainer();
    estadoTesoura = 'fechada';
    const imagemTesoura = document.createElement('img');
    imagemTesoura.src = '../imagens/tesouraFechada.png';
    imagemTesoura.className = 'cursor-pointer';
    imagemTesoura.addEventListener('click', () => {
        if (estadoTesoura === 'fechada') {
            imagemTesoura.src = '../imagens/tesouraAberta.png';
            estadoTesoura = 'aberta';
        } else {
            imagemTesoura.src = '../imagens/tesouraFechada.png';
            estadoTesoura = 'fechada';
        }
        somTesoura.currentTime = 0;
        somTesoura.play();
    });
    containerObjeto.appendChild(imagemTesoura);
    atualizarSecaoCompra('tesoura');
});