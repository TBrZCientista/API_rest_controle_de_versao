const Modelos = [
    require('../rotas/fornecedores/ModeloTabelaFornecedor'),
    require('../rotas/fornecedores/produtos/ModeloTabelaProduto')
]

async function criarTabelas (){
    for (let contador = 0 ; contador < Modelos.length ; contador++){
        const modelos = modelos[contador]
        await modelos.sync()
    }
}

criarTabelas()