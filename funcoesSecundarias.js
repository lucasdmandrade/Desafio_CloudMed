//-----------------------------------------
//FUNÇÃO PARA CARREGAR DADOS DA PAGINA INTEIRA
//------------------------------------------
function criarPagina(paginaMontada) {
    //Puxando a root para alterar a pagina por completo
    const root = document.querySelector('.root')
    //Inserindo pagina refatorada
    root.innerHTML = paginaMontada
    window.scroll(0, 0)

}

//
//Função para adicionar livro a minha lista
//
function inserirLivro(i, minhaLista) {
    //Variavel para testar se livro existe na lista
    let livroJaAdd = false

    //Teste se livro existe na lista
    for (let j = 0; j < minhaLista.length; j++) {
        if (minhaLista[j] == parseInt(i)) {//Se existir atualiza valor da variavel como true
            livroJaAdd = true
        }
    }
    //Se ele existir avisa 
    if (livroJaAdd == true) {
        window.alert('Livro ja existe em sua lista')
    } else {//Se não adiciona e avisa que o livro foi adicionado
        minhaLista.push(parseInt(i))
        window.alert('Livro adicionado a sua lista')
    }
    console.log(minhaLista)
    return minhaLista
}
//---------------------------------------------
//BOTÕES PAGINAÇÃO
//
//FUNÇÃO PARA VOLTAR PAGINA(OBRAS)
//
function antPagina(state) {
    //Confere se é possivel voltar
    if (state > 1) {
        state = state - 1
    } else {//Se não for mostra erro
        window.alert('Não há pagina anteriorior')
    }
    console.log(state)

    //Chama função que gera listagem
    listagemLivros(state, livros)

    return state
}

//
//Função para IR PARA PROXIMA PAGINA(OBRAS)
//
function proxPagina(state) {
    //Aumenta valor do estado da pagina
    state++
    console.log(state)

    //Chama função que que gera listagem 
    listagemLivros(state, livros)
}

//--------------------------------------------
//FUNÇÃO PARA EXPANDIR TEXTO DO AUTOR 
//
function expandirTexto(textoCompleto) {
    //Inserindo conteudo no paragrafo "continuacao"
    const continuacao = document.querySelector('.continuacao')
    console.log(continuacao)
    //Nova parte do texto que vai ser inserida
    let texto = textoCompleto
    //Inserindo 
    continuacao.innerHTML = texto
    console.log(continuacao)

    //Buscando botão ver mais para transforma-lo em ver menos
    const buttons = document.querySelector('.buttons')

    //Inserindo botão novo
    buttons.innerHTML = `
        <div class="buttons">
            <button class="seguir" onclick="">Seguir</button>
            <button class="buttonPadrao" onclick="reduzirTexto()">Ver menos</button>
        </div>
    `
    console.log(buttons)
}
//
//FUNÇÃO PARA REDUZIR TESTO DO AUTOR
//
function reduzirTexto() {
    //Recebendo texto aumentado
    const continuacao = document.querySelector('.continuacao')
    //Inserindo vazio para ele sumir
    continuacao.innerHTML = ''

    //Buscando botão "ver menos" para voltar a ser "ver mais"
    const buttons = document.querySelector('.buttons')

    //Passando conteudo como botão "ver mais"
    buttons.innerHTML = `
        <div class="buttons">
            <button class="seguir" onclick="">Seguir</button>
            <button class="buttonPadrao" onclick="expandirTexto(textoCompleto)">Ver mais</button>
        </div>
    `
}

//--------------------------------------------------
//FUNCIONALIDADES MODAL
//
//FUNÇÃO PARA ABRIR O MODAL(MOSTRAR)
//
function abrirModal(nomeModal){
    //Puxando codigo html do modal pelo Id
    let modal = document.getElementById(nomeModal)
    console.log(nomeModal)
    console.log(modal)

    //Se der erro(modal não ser definido ou estar vazio)
    if(typeof modal == 'undefined' || modal === null){
        //Só cancela
        return
    }else{
        //Mundando display de 'none' para 'Block' pra aparecer o modal 
        modal.style.display =  'Block'
        inserirMinhaLista()
    }
}

//
//FUNÇÃO PARA FECHAR MODAL(esconder)
//
function fecharModal(nomeModal){
    //Se der erro(modal não ser definido ou estar vazio)
    if(typeof modal == 'undefined' || modal === null){
        return
    }else{
        //Mundando display para 'none' para 'sumir'
        modal.style.display =  'none'
    }
}

//
//FUNÇÃO PARA ADICIONAR LIVROS DA LISTA NO MODAL
//
function inserirMinhaLista(stateMinhaLista){
    //Função que armazenará a div
    let divMinhaLista ='<div class="minhaLista">'
    //Loop para adicionar os livros no modal
    for(let j = 0; j < minhaLista.length; j++){

        divMinhaLista+=`
        <div class="livro">
                <a id=${j} href="#${j}" onClick="selecaoLivro(this.id, livros)">
                    <img src=${livros[j][6]} /> 
                </a>
            </div>
        `
        //Forçando limite de 5 livros(sem paginação)
        if(j == 4){
            j = minhaLista.length
        }
    }
    divMinhaLista += '</div>'
    console.log(divMinhaLista)
    //Adicionando a div com os livros ao modal
    modalBody.innerHTML = divMinhaLista
}