var buscadorCep = fetch('https://viacep.com.br/ws/03615030/json/')
    .then(r => r.json())
    .then(r => {
        if (r.erro) {
            throw Error ('Esse cep não existe!')
        } else
        console.log(r)})
    .catch(erro => console.log(erro)); //metodo catch = pegue. Pegue o erro e mostre na tela.

console.log(buscadorCep)