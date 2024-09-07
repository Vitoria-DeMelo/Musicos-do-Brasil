function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    
let campoPesquisa = document.getElementById ("campo-pesquisa").value

// se campoPesquisar for uma string vazia
if (!campoPesquisa){
section.innerHTML= "<p>Nenhum resultado foi encontrado</p>"
    return
}

campoPesquisa = campoPesquisa.toLowerCase()

console.log(campoPesquisa);

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
let nome = "";
let descricao = "";

    // Itera sobre cada dado na array 'dados'
    for (let dado of dados) {
        nome = dado.nome.toLowerCase()
        descricao = dado.descricao.toLowerCase()

        // se titulo includes camPesquisa
        if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
        // cria umnovo elemento
            resultados += 
            `<div class="item-resultado">
                <h2>${dado.nome}</h2>
                <p class="descricao-meta">${dado.descricao}
                <a href=${dado.link}>Clique para mais informações</a>
                </p>
            </div>`;
        }
       
    }

    if (!resultados) {
resultados = "<p>Nenhum resultado foi encontrado</p>"
    }
    

    // Atribui o HTML construído à seção, atualizando a página com os resultados
    section.innerHTML = resultados;
}

