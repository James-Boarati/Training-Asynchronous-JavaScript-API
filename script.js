async function buscadorCEP (cep) {
    var mensagemErro = document.getElementById('erro');
    
    try {
    var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json`)
    var convertendoCEP = await consultaCEP.json();
    if (convertendoCEP.erro) {
        throw Error('CEP não existente!');
    }
    var localidade = document.getElementById('cidade');
    var logradouro = document.getElementById('endereco');
    var estado = document.getElementById('estado');
    var bairro = document.getElementById('bairro')

    localidade.value = convertendoCEP.localidade;
    logradouro.value = convertendoCEP.logradouro;
    estado.value = convertendoCEP.uf;
    bairro.value = convertendoCEP.bairro;

    console.log(convertendoCEP);
    return convertendoCEP;
} catch (erro){
    mensagemErro.innerHTML = `<p>CEP inválido ou inexistente. Tente novamente! </p>`
    console.log(erro)
}
}

var cep = document.getElementById('cep');
cep.addEventListener ("focusout", () => buscadorCEP(cep.value)); //detectando interação do usúario com auxílio do addEventListener e
//Incluindo valores em elementos com a propriedade value;
