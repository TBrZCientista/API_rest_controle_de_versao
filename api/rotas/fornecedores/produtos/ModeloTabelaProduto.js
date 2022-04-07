const Sequelize = require ('sequelize')
const instancia = require ('../../../banco-de-dados')

const colunas = {
    titulo : {
        type: Sequelize.STRING,
        allownull : false
    },
    preco : {
        type : Sequelize.DOUBLE,
        allownull : false    
    },
    estoque: { 
        type : Sequelize.INTEGER,
        allownull: false,
        defaultValue : 0
    },
    fornecedor: {
        type : Sequelize.INTEGER,
        allownull: false,
        references: {
            model : require('../ModeloTabelaFornecedor'),
            key : 'id'
        }
    }
}

const opcoes = {
    freezeTableName: true,
    tableName: 'produtos',
    timestamps: true,
    createdAt: 'dataCriacao',
    updatedAt: 'dataAtualizacao',
    version: 'versao'
}

module.exports = instancia.define('produto', colunas, opcoes)