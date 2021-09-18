function listagemLivros() {
    let livros = []
    livros[0] = ['Neve vidro e maçãs', 2019, 4.2, 1500, ['Contos', 'Ficção'], '', '"imagens/neve vidro e maçãs - 2019.png"']
    livros[1] = ['Mitologia Nórodica', 2017, 4.2, 1500, ['Contos', 'Ficção'], '', '"imagens/mitologia nordica  - 2017.png"']
    livros[2] = ['Criaturas estranas', 2013, 4.2, 1500, ['Contos', 'Ficção'], '', '"imagens/Criaturas estranhas - 2013.png"']
    livros[3] = ['Fumaça e espelhos', 1998, 4.2, 1500, ['Contos', 'Ficção'], '', '"imagens/Fumaça e espelhos - 1999.png"']
    livros[4] = ['Sandman - Fim dos mundos', 1994, 4.2, 1500, ['Contos', 'Ficção'], '', '"imagens/Sandman - Fim dos Mundos 1994.png"']
    livros[5] = ['Lugar nenhum', 1996, 4.2, 1500, ['Contos', 'Ficção'], '', '"imagens/Lugar nenhum - 1996.png"']
    livros[6] = ['Livro do cemitério', 2008, 4.2, 1500, ['Contos', 'Ficção'], '', '"imagens/o livro do cemitério - 2008.png"']
    livros[7] = ['Sandman Versão Definitiva (volume 1)', 1996, 4.2, 1500, ['Contos', 'Ficção'], '', '"imagens/Sandman Versão Definitiva (volume 1) - 2006.png"']
    livros[8] = ['Coraline', 22002, 4.2, 1500, ['Contos', 'Ficção'], '', '"imagens/Coraline - 2002.png"']
    

    //Criando vetor que armazenara a div responsavel pela listagem dos livros
    let divPronta = '<div id="listalivros" class="listalivros">'

    // Loop para crir divs para cada livro
    for (var i = 0; i < 6; i++) {
        console.log(livros[i])
        //Só cria a div para o livro caso exista informação pra ser inserida(Se tem mais livros)
        if(livros[i] != null){
            divPronta += `
            <div class="livro">
                <a id=${i}  onClick="selecaoLivro(this.id)">
                    <img src=${livros[i][6]} /> 
                </a>
                <h3>${livros[i][0]}</h3>
                <p>${livros[i][1]}</p>
            </div>
            `}
    } divPronta += `</div>
    <div class="listalivros2">
    `

    //Criar div para "Segunda estante" de livros da pagina
    for (var i = 6; i < 12; i++) {
        console.log(livros[i])
        if(livros[i] != null){
            divPronta += `
            <div class="livro">
                <a id=${i}  onClick="selecaoLivro(this.id)">
                    <img src=${livros[i][6]} /> 
                </a>
                <h3>${livros[i][0]}</h3>
                <p>${livros[i][1]}</p>
            </div>
            `} 
    } divPronta += `</div>`


    //Visualização da div
    console.log(divPronta)
    //Puxando do html a div da listagem
    const listacompleta = document.querySelector(' .listacompleta')
    console.log(listacompleta)
    //Retornando a div com as infos
    listacompleta.innerHTML = divPronta
}


//Função paginação livros
function pagination(livros) {
    //Quantidade de paginas
    let contPages = 1

    //Definindo quantas paginas existirão
    if (livros.length % 10 == 0) {
        contPages += livros.length % 10
    } else {
        let teste = 0
        teste = livros.length - (livros.lenght % 10)
        constPages += teste / 10
    }

    //Falta puxar os livros de acordo com a pagina
    // (pagina - 1) * 10 e receber o vetor auto incrementando ate 9
}

function selecaoLivro(i){
    let livros = []
    livros[0] = ['Neve vidro e maçãs', 2019, 4.2, 1500, 'Contos - Ficção', '', '"imagens/neve vidro e maçãs - 2019.png"']
    livros[1] = ['Mitologia Nórodica', 2017, 4.2, 1500, 'Contos - Ficção', '', '"imagens/mitologia nordica  - 2017.png"']
    livros[2] = ['Criaturas estranas', 2013, 4.2, 1500, 'Contos - Ficção', '', '"imagens/Criaturas estranhas - 2013.png"']
    livros[3] = ['Fumaça e espelhos', 1998, 4.2, 1500, 'Contos - Ficção', '', '"imagens/Fumaça e espelhos - 1999.png"']
    livros[4] = ['Sandman - Fim dos mundos', 1994, 4.2, 1500, 'Contos - Ficção', '', '"imagens/Sandman - Fim dos Mundos 1994.png"']
    livros[5] = ['Lugar nenhum', 1996, 4.2, 1500, 'Contos - Ficção', '', '"imagens/Lugar nenhum - 1996.png"']
    livros[6] = ['Livro do cemitério', 2008, 4.2, 1500, 'Contos - Ficção', '', '"imagens/o livro do cemitério - 2008.png"']
    livros[7] = ['Sandman Versão Definitiva (volume 1)', 1996, 4.2, 1500, 'Contos - Ficção', '', '"imagens/Sandman Versão Definitiva (volume 1) - 2006.png"']
    livros[8] = ['Coraline', 2002, 4.2, 1500, 'Contos - Ficção', '', '"imagens/Coraline - 2002.png"']
    livros[9] = ['Coraline', 2002, 4.2, 1500, 'Contos - Ficção', '', '"imagens/Coraline - 2002.png"']
    livros[10] = ['Coraline', 2002, 4.2, 1500, 'Contos - Ficção', '', '"imagens/Coraline - 2002.png"']
    livros[11] = ['Coraline', 2002, 4.2, 1500, 'Contos - Ficção', '', '"imagens/Coraline - 2002.png"']


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
                        texto do livro
                    </p>
                    <h4>${livros[i][4]}</h4>

                    <div class="addlista">
                        <button onclick="">Adicionar á minha lista</button>
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
                        <div class="quadradonota">${livros[i][2]}</div>
                        <div class="avaliacao">
                            <div>
                                <img src="icones/star.svg" alt="icone de strela">
                                <img src="icones/star.svg" alt="icone de strela">
                                <img src="icones/star.svg" alt="icone de strela">
                                <img src="icones/star.svg" alt="icone de strela">
                                <img src="icones/star-half-full.svg" alt="icone de strela quase cheia">
                            </div>
                            <p>
                            ${livros[i][3]} avaliações
                            </p>
                        </div>
                    </div>

                    <div>
                        <h3>Resenha</h3>
                        <p>
                            Resenha do livro
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script type="text/javascript" src="funcoes.js"></script>
    </script>
    `
    criarPagina(paginaCompleta)
}

function criarPagina(paginaMontada){
    //Puxando a root para alterar a pagina por completo
    const root = document.querySelector('.root')
    //Inserindo pagina refatorada
    root.innerHTML = paginaMontada
}
//Para criar a pagina chamar outra função para fazer isso 
//E passar como parametro o return dessa