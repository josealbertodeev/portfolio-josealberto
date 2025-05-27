const textoSobre = document.querySelector('.sobre');
const elementoInformacoes = document.querySelector('.informacoes-contato');
const elementoBotao = document.querySelector('.botao-informacoes');
const elementoBotaoLight = document.querySelector('.botao-light');
const elementoBotaoDark = document.querySelector('.botao-dark');

// Adicionar evento de clique no botão redapé

elementoBotao.addEventListener('click', function () {
    console.log("clicou")
    elementoInformacoes.classList.toggle('visivel');

    if (elementoInformacoes.classList.contains('visivel')) {
        elementoBotao.textContent = "Ocultar informações";
    }
    else {
        elementoBotao.textContent = "Mostrar informações";
    }
})

// Adicionar evento de clique nos botões light e dark

elementoBotaoLight.addEventListener('click', function (){
    document.body.classList.add('light');
})

elementoBotaoDark.addEventListener('click', function (){
    document.body.classList.remove('light');
})