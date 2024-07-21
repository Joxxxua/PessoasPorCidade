const pessoas = [
    {
        nome: "Ana",
        idade: 17,
        cidade: "São Paulo"
    },
    {
        nome: "Carlos",
        idade: 30,
        cidade: "Rio de Janeiro"
    },
    {
        nome: "Maria",
        idade: 22,
        cidade: "Belo Horizonte"
    },
    {
        nome: "Pedro",
        idade: 28,
        cidade: "Curitiba"
    },
    {
        nome: "Fernanda",
        idade: 32,
        cidade: "Porto Alegre"
    }
];  
function mostrarListaPessoas(pessoas){
    pessoas.forEach(pessoa => {
        console.log(`${pessoa.nome}`);
        console.log(`${pessoa.idade}`);
        console.log(`${pessoa.cidade}`);
        console.log('-------------------------');
    });
}
pessoas.push({
    nome: 'Milla',
    idade: 40,
    cidade: "Olinda"
});
mostrarListaPessoas(pessoas)

function filtrarPorCidade(pessoas, cidade) {
    return pessoas.filter(pessoa => pessoa.cidade === cidade);
}
const pessoasDeSaoPaulo = filtrarPorCidade(pessoas,"São Paulo");
mostrarListaPessoas(pessoasDeSaoPaulo);
function filtrarIdade(pessoas,idade){
    return pessoas.filter(pessoa => pessoa.idade >= idade)
}
const pessoasMaioresDe18 = filtrarIdade(pessoas,18);
mostrarListaPessoas(pessoasMaioresDe18);
