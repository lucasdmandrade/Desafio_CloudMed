let state = 1
let minhaLista = [1, 5]
let livros = []
    livros[0] = ['Neve vidro e maçãs', 2019, 4.2, 1500, 'Contos - Ficção', '', '"imagens/neve vidro e maçãs - 2019.png"']
    livros[1] = ['Mitologia Nórodica', 2017, 3.7, 1500, 'Contos - Ficção', '', '"imagens/mitologia nordica  - 2017.png"']
    livros[2] = ['Criaturas estranas', 2013, 5, 1500, 'Contos - Ficção', '', '"imagens/Criaturas estranhas - 2013.png"']
    livros[3] = ['Fumaça e espelhos', 1998, 1.5, 1500, 'Contos - Ficção', 'Fumaça e espelhos é uma coletânea de textos que Neil Gaiman escreveu nas décadas de 80 e 90. Na categoria de escritor ficcionista profissional, ele teve contos encomendados e publicados por diversas revistas e coletâneas, o que logo se nota pela diversidade de temas', '"imagens/Fumaça e espelhos - 1999.png"', 'Dos 31 contos (e poesias) que compõem Fumaça e espelhos, são poucos os que não surpreendem de cara pelas idéias. E os que não chamam atenção nas primeiras linhas geram várias surpresas posteriores, pois você nunca sabe se aquele jovem pacato é um lobisomem ou se o heróico narrador do conto é o assassino. Ou mesmo o assassinado.<br> <br> Fumaça e espelhos é uma coletânea de textos que Neil Gaiman escreveu nas décadas de 80 e 90. Na categoria de escritor ficcionista profissional, ele teve contos encomendados e publicados por diversas revistas e coletâneas, o que logo se nota pela diversidade de temas. Há desde a sua conhecida predileção por terror fantástico e magia até um conto erótico. Um elemento, porém, une todos os textos: seu vínculo com a tradição.']
    livros[4] = ['Sandman - Fim dos mundos', 1994, 3.1, 1500, 'Contos - Ficção', '', '"imagens/Sandman - Fim dos Mundos 1994.png"']
    livros[5] = ['Lugar nenhum', 1996, 4.8, 1500, 'Contos - Ficção', '', '"imagens/Lugar nenhum - 1996.png"']
    livros[6] = ['Livro do cemitério', 2008, 2.5, 1500, 'Contos - Ficção', '', '"imagens/o livro do cemitério - 2008.png"']
    livros[7] = ['Sandman Versão Definitiva (volume 1)', 1996, 3.1, 1500, 'Contos - Ficção', '', '"imagens/Sandman Versão Definitiva (volume 1) - 2006.png"']
    livros[8] = ['Coraline', 2002, 4, 1500, 'Contos - Ficção', '', '"imagens/Coraline - 2002.png"']

function listagemLivros(state, livros) {


    //Criando vetor que armazenara a div responsavel pela listagem dos livros
    let divPronta = '<div id="state" class="listalivros">'

    //Teste se existem livros pra carregar a proxima pagina
    if ((state - 1) * 12 >= livros.length) {
        window.alert('Impossivel(err: não há mais livros)')
    } else {

        // Loop para crir divs para cada livro
        //Usando state para paginação 
        for (var i = (state - 1) * 12; i < ((state - 1) * 12 + 6); i++) {
            console.log(livros[i])
            //Só cria a div para o livro caso exista informação pra ser inserida(Se tem mais livros)
            if (livros[i] != null) {
                //href para inserir id da imagem q quero aumentar na url 
                divPronta += `
            <div class="livro livroTransition">
                <a id=${i} href="#${i}" onClick="selecaoLivro(this.id, livros)">
                    <img src=${livros[i][6]} /> 
                </a>
                <h3>${livros[i][0]}</h3>
                <p>${livros[i][1]}</p>
            </div>
            `}
        } divPronta += `</div>
    <div class="listalivros2">
    `
        for (var i = ((state - 1) * 12) + 6 ; i < ((state) * 12); i++) {
            console.log(livros[i])
            //Só cria a div para o livro caso exista informação pra ser inserida(Se tem mais livros)
            if (livros[i] != null) {
                //href para inserir id da imagem q quero aumentar na url 
                divPronta += `
        <div class="livro livroTransition">
            <a id=${i} href="#${i}" onClick="selecaoLivro(this.id, livros)">
                <img src=${livros[i][6]} /> 
            </a>
            <h3>${livros[i][0]}</h3>
            <p>${livros[i][1]}</p>
        </div>
        `}
        }

        //Inserindo div fechamento e botões paginação 
        divPronta += `</div>
    <div class="listagemLivros">
                    <button id="${state}" onclick="antPagina(this.id)">
                        <img src="icones/chevron-left.svg" alt="Voltar lista">
                    </button>
                    <div class="numeroPag">
                        <p>${state}</p>
                    </div>
                    <button id="${state}" onclick="proxPagina(this.id)">
                        <img src="icones/chevron-right-circle.svg" alt="Voltar lista">
                    </button>
                </div>
    `


        //Visualização da div
        console.log(divPronta)
        //Puxando do html a div da listagem
        const listacompleta = document.querySelector(' .listacompleta')
        console.log(listacompleta)
        //Retornando a div com as infos
        listacompleta.innerHTML = divPronta
    }
}

function selecaoLivro(i, livros) {
    

    //Contador para quantas estrelas o livro recebeu
    let qntEstrelas = ''
    //Quantas estrelas inteiras o livro tem 
    for (var j = 1; j < livros[i][2]; j++) {
        console.log(j)
        qntEstrelas += `
        <img src="icones/star.svg" alt="icone de strela">
        `
        console.log(qntEstrelas)
    }

    //Se a nota do livro tiver parte decimal...
    if (livros[i][2] % 1 != 0) {
        //Se a parte decimal for maior do que 0,5 arredonda pra cima
        if (livros[i][2] % 1 > 0.5) {
            qntEstrelas += `
        <img src="icones/star.svg" alt="icone de strela">
        `
            //Se não o livro ganha meia estrela
        } else {
            qntEstrelas += `
            <img src="icones/star-half-full.svg" alt="icone de strela quase cheia">
            `
            console.log(qntEstrelas)
        }
    } else {
        //Atribuindo a estrela "extra"(Por ter arredondado o valor para cima)
        qntEstrelas += `
        <img src="icones/star.svg" alt="icone de strela">
        `
    }

    //Pagina do livro pra detalhes
    //Não troca de pagina para entrar em detalher a pagina apenas alteras suas infos
    let paginaCompleta = `

    <div class="root">
        <div class="livroEscolido">
            <div>
                <img src=${livros[i][6]}>
            </div>
            <div class="centralize">
                <div>
                    <div>
                        <h3>${livros[i][0]}</h3>
                        <h3>${livros[i][1]}</h3>
                    </div>
                    <p>
                        ${livros[i][5]}
                    </p>
                    <h4>${livros[i][4]}</h4>

                    <div class="addlista">
                        <button id="${i}" onclick="inserirLivro(this.id, minhaLista)">Adicionar á minha lista</button>
                    </div>
                </div>

            </div>
        </div>

        <div class="detalhes">
            <header class="titulo">
                <a href="index.html">
                    <img class="retorno" src="icones/arrow-left-circle.svg">
                </a>
                <img class="logo" src="imagens/logotipo.png">
            </header>

            <div>
                <div>
                    <h1>${livros[i][0]} - ${livros[i][1]}</h1>
                </div>
                <div>
                    <div class="areaavaliacao">
                    `
                    //Definindo cor do quadrado de avaliação 
                    if(livros[i][2] >= 3.5){
                        paginaCompleta = paginaCompleta + `
                        <div class="quadradonota verde">${livros[i][2]}</div>
                        `}else if(livros[i][2] > 1.5 && livros[i][2] < 3.5){
                            paginaCompleta = paginaCompleta + `
                            <div class="quadradonota amarelo">${livros[i][2]}</div>
                        `}else{
                            paginaCompleta = paginaCompleta + `
                            <div class="quadradonota vermelho">${livros[i][2]}</div>
                        `}

                        paginaCompleta = paginaCompleta + `
                        <div class="avaliacao">
                            <div>
                                ${qntEstrelas}
                            </div>
                            <p>
                            ${livros[i][3]} avaliações
                            </p>
                        </div>
                    </div>

                    <div class="resenha">
                        <h3>Resenha</h3>
                        <p>
                            ${livros[i][7]}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script type="text/javascript" src="funcoes.js"></script>
    </script>

    
    `
    //Esperando transição de tela
    setTimeout(function () {
        //Chamando função reponsavel pela atualização dos dados da pagina 
        criarPagina(paginaCompleta)
    }, 1000);
}

//Função para atualizar os dados da pagina
function criarPagina(paginaMontada) {
    //Puxando a root para alterar a pagina por completo
    const root = document.querySelector('.root')
    //Inserindo pagina refatorada
    root.innerHTML = paginaMontada
    window.scroll(0, 0)

}

//Função para mudar pagina livro
function proxPagina(state) {
    state++
    console.log(state)

    listagemLivros(state, livros)
}

function antPagina(state) {
    if (state > 1) {
        state = state - 1
    } else {
        window.alert('Não há pagina anteriorior')
    }
    console.log(state)

    listagemLivros(state, livros)

    return state
}

//Função para adicionar livro a minha lista
function inserirLivro(i, minhaLista){
    //Variavel para testar se livro existe na lista
    let livroJaAdd = false

    //Teste se livro existe na lista
    for(let j = 0; j < minhaLista.length; j++){
        if(minhaLista[j] == parseInt(i)){
            livroJaAdd = true
        }
    }
    //Se ele existeir avisa caso contrario adiciona
    if(livroJaAdd == true){
        window.alert('Livro ja existe em sua lista')
    }else{
        minhaLista.push(parseInt(i))
        window.alert('Livro adicionado a sua lista')
    }
    console.log(minhaLista)
    return minhaLista
}