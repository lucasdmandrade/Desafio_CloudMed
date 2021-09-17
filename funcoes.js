let livros = []
livros[3] = {
    titulo: 'Fumaça e espelhos',
    ano: '1998',
    nota: 4.2,
    qntAvaliacoes: 1500,
    estilo: ['Contos', 'Ficção'],
    resenha: ''
}

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