async function buscadorCEP () {
    var enderecoCEP = await fetch('https://viacep.com.br/ws/01001000/json/');
    var enderecoCEPConvertido = await enderecoCEP.json();
    console.log(enderecoCEPConvertido);
}

buscadorCEP();