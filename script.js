async function buscadorCEP () {
    try {
    let consultaCEP = await fetch('https://viacep.com.br/ws/03615037/json')
    let convertendoCEP = await consultaCEP.json();
    if (convertendoCEP.erro) {
        throw Error('CEP não existente!')
    }
    console.log(convertendoCEP);
} catch (erro){
    console.log(erro)
}
}

buscadorCEP ();

