function selecionarPlano(plano) {
    if (plano === 'Gratuito') {
        window.location.href = '../Gratuito/gratuito.html';
    }
}

function mostrarModalPagamento() {
    const modal = document.getElementById('modalPagamento');
    modal.style.display = 'flex';
}

function selecionarPagamento(metodo) {
    console.log(`Pagamento selecionado: ${metodo}`);
    window.location.href = '../Premium/premium.html';
}

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modalPagamento');
    const fechar = document.querySelector('.fechar');

    fechar.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});