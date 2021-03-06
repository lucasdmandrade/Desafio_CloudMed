//Contiuação do texto sobre o autor que sera exibido ao clicar no botão "ver mais"
let textoCompleto = "Hoje vive perto de Minneapolis, nos Estados Unidos. Descobriu seu amor pelos livros na infância e devorava as histórias de C.S. Lewis, J.R.R. Tolkien, James Branch Cabell e Edgar Alan Poe, entre outros autores. Começou a carreira como jornalista, mas logo o talento para construir tramas e universos únicos o levou para o mundo dos quadrinhos, com a aclamada série Sandman, e depois para a ficção adulta e infantojuvenil. Suas obras receberam inúmeros prêmios e medalhas e foram adaptadas em bem-sucedidas versões para cinema, televisão e até ópera."
let state = 1 //Numeração das paginas(Define a pagina atual e é passado como id de elementos que a usam )
let stateModal = 1 //Pagina do modal(Minha lista)
let totalpagesModal = 0
let minhaLista = [1, 5, 3, 7, 0, 7, 9, 1, 6, 4, 2, 3]//Lista de livros do usuario(por estar definida aqui reseta quando o usuario voltar ao index)

//
//FUNÇÃO PARA CRIAR LISTA COM OS LIVROS DA PAGINA(E os botões da paginação)
//
function listagemLivros(state, livros) {


    //Criando vetor que armazenara a div responsavel pela listagem dos livros
    let divPronta = '<div id="state" class="listalivros">'

    //Teste se existem livros pra carregar a proxima pagina
    if ((state - 1) * 12 >= livros.length) {
        window.alert('Impossivel(err: não há mais livros)')
    } else {

        //logica para paginação 
        // Loop para criar as divs de cada livro(com a classe livro + classe de para criar transição)
        //Usando state para paginação 
        //Primeira fileira
        for (var i = (state - 1) * 12; i < ((state - 1) * 12 + 6); i++) {
            console.log(livros[i])
            //Só cria a div para o livro caso exista informação pra ser inserida(Se tem mais livros)
            if (livros[i] != null) {
                //href para inserir id da imagem na url 
                //Precisa para criar animação, porem muda centralidade da pagina
                //"Resolvido" redefindo a posição para a inicial após chamar a função
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
    `

        //Inserindo botões voltar pagina 
        divPronta += `
                <div class="listagemLivros">
                    <button id="${state}" onclick="antPagina(this.id)">
                        <img src="icones/chevron-left.svg" alt="Voltar lista">
                    </button>
                    <div class="numeroPag">
                    `

        //Numeros mostrados na paginação 
        //Na imagem a ser replicada apareciam as paginas: 1, 2, 3, 4, 5 ... 10)
        //Como na imagem dava para ver que as paginas não variavam de acordo com ter infos nela ou não
        //Essa foi a logica que eu imaginei que a pagina adotaria para não mostrar as paginas chumbadas

        //Na imagem estava na pagina 1 mostrava ate a 5 
        //Imaginei que mostraria sempre 5 a frente
        //Chutei que tambem mostraria 2 atras 
        //E mostrou a 10, imaginei que aparecia 9 a frente da pagina que o usuario estivesse 
        for (let j = state - 2; j <= state + 4; j++) {
            if (j > 0) {
                if (j == state) {
                    //Utilizei a tag hr variando de acordo com a pagina que estivesse imaginando que ela estaria indicando isso
                    divPronta += `
                                <p class="paginaAtual">${j} <hr/></p>
                                `
                } else {
                    divPronta += `
                        <p>${j}</p>
                        `
                }
            }
        }
        //3 pontos entre as paginas proximas e a ultima mostrada conforme imagem 
        divPronta += `
        <p>...</p>
        `
        divPronta += `
        <p>${state + 9}</p>
        `
        divPronta += `
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

//---------------------------------------------
//GERAR PAGINA COM DETALHES DO LIVRO CLICADO
//
function selecaoLivro(i, livros) {


    //Variavel para armazenar a quantidade de incones de estrelas de acordo com a nota do livro 
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
        //Se a parte decimal for maior do que 0,5 o livro ganha uma estrela completa(arredonda pra cima)
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
        //Atribuindo a estrela caso livro não tenha parte decimal
        //A ultima estrela é atribuida depois para que caso o livro tenha parte decimal ela não seja atribuida 2 vezes
        //Uma pela parte decimal no for
        //E outra na validação se a parte decimal é maior que 0.5(Estrela interia), ou menor ou igual(Meia estrela)
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

                    <div class="addLista">
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
                    <div class="areaAvaliacao">
                    `
    //Definindo cor do quadrado de avaliação 
    if (livros[i][2] >= 3.5) {
        paginaCompleta = paginaCompleta + `
                        <div class="quadradoNota verde">${livros[i][2]}</div>
                        `} else if (livros[i][2] > 1.5 && livros[i][2] < 3.5) {
        paginaCompleta = paginaCompleta + `
                            <div class="quadradoNota amarelo">${livros[i][2]}</div>
                        `} else {
        paginaCompleta = paginaCompleta + `
                            <div class="quadradoNota vermelho">${livros[i][2]}</div>
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