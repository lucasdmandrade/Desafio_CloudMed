function listagemLivros(){
    let livros = []
livros[0] = []
livros[1] = []
livros[2] = []
livros[3] = ['Fumaça e espelhos', 1998, 4.2, 1500,['Contos', 'Ficção'],'']

    console.log(livros[3][0])
    const divPronta = `
    <div id="livro" class="livro">
        <button onclick=""> <img src="imagens/neve vidro e maçãs - 2019.png" /> </button>
        <h3>${livros[3][0]}</h3>
        <p>${livros[3][1]}</p>
    </div>
`
console.log(divPronta)
    const livro = document.querySelector(' .livro')
    console.log(livro)
    livro.innerHTML = divPronta
    console.log('teste')
}
listagemLivros()

//Função paginação livros
function pagination(livros){
    //Quantidade de paginas
    let contPages = 1

    //Definindo quantas paginas existirão
    if(livros.length % 10 == 0) {
        contPages += livros.length % 10
    } else{
        let teste = 0
        teste = livros.length - (livros.lenght % 10) 
        constPages += teste / 10
    }

    //Falta puxar os livros de acordo com a pagina
    // (pagina - 1) * 10 e receber o vetor auto incrementando ate 9
}