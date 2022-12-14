//index.js
(async () => {
    const database = require('./db');
    const Produto = require('./produto');

    try {
        const resultado = await database.sync();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }

    const resultadoCreate = await Produto.create({
        nome: 'mouse',
        preco: 10,
        descricao: 'Um mouse USB bonitão'
    })
    console.log(resultadoCreate);

    const produtos = await Produto.findAll();
    console.log(produtos);

    const produto = await Produto.findByPk(1);
    console.log(produto);

    //const produto = await Produto.findByPk(1);
    //console.log(produto);
    produto.nome = "Mouse Top";

    const resultadoSave = await produto.save();
    console.log(resultadoSave);

    //assim
    Produto.destroy({ where: { id: 1 } });

    //ou assim
    //const produto = await Produto.findByPk(1);
    //produto.destroy();

})();