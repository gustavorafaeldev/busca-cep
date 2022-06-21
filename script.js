let cep = '87112060';

let urlCep = `https://viacep.com.br/ws/${cep}/json/`

fetch(urlCep)
    .then((response)=> response.json())
    .then(function(dados) {
         console.log(dados);
    })

    .catch((error) => {
        return error;
    })