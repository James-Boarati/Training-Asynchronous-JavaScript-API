async function buscadorCEP (cep) {
    try {
    var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json`)
    var convertendoCEP = await consultaCEP.json();
    if (convertendoCEP.erro) {
        throw Error('CEP não existente!')
    }
    console.log(convertendoCEP);
    return convertendoCEP;
} catch (erro){
    console.log(erro)
}
}

var cep = document.getElementById('cep');
cep.addEventListener ("focusout", () => buscadorCEP(cep.value));

