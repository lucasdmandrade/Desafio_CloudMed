function listagemLivros() {
    let livros = []
    livros[0] = ['Neve vidro e maçãs', 2019, 4.2, 1500, ['Contos', 'Ficção'], '', '"imagens/neve vidro e maçãs - 2019.png"']
    livros[1] = ['Mitologia Nórodica', 2017, 4.2, 1500, ['Contos', 'Ficção'], '', '"imagens/mitologia nordica  - 2017.png"']
    livros[2] = ['Criaturas estranas', 2013, 4.2, 1500, ['Contos', 'Ficção'], '', '"imagens/Criaturas estranhas - 2013.png"']
    livros[3] = ['Fumaça e espelhos', 1998, 4.2, 1500, ['Contos', 'Ficção'], '', '"imagens/Fumaça e espelhos - 1999.png"']
    livros[4] = ['Sandman - Fim dos mundos', 1994, 4.2, 1500, ['Contos', 'Ficção'], '','"imagens/Sandman - Fim dos Mundos 1994.png"']
    livros[5] = ['Lugar nenhum', 1996, 4.2, 1500, ['Contos', 'Ficção'], '', '"imagens/Lugar nenhum - 1996.png"']

    let divPronta = '<div id="listalivros" class="listalivros">'

    for (var i = 0; i < livros.length; i++) {
        console.log(livros[i])
        divPronta += `
        <div class="livro">
            <button onclick=""> <img src=${livros[i][6]} /> </button>
            <h3>${livros[i][0].toUpperCase()}</h3>
            <p>${livros[i][1]}</p>
        </div>
`
    }
    divPronta += '</div>'

    console.log(divPronta)
    const listalivros = document.querySelector(' .listalivros')
    console.log(listalivros)
    listalivros.innerHTML = divPronta
    console.log('teste')
}
listagemLivros()

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