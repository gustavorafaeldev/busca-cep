function myFunction() {
    let cep = document.querySelector('.buscacep input').value;

    let urlCep = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(urlCep)
    .then((response)=> response.json())
    .then(function(dados) {
        console.table(dados);
        if("erro" in dados) {
            alert('CEP NÃO ENCONTRADO')
        } else {
            document.getElementById('cep').value = dados.cep;
        document.getElementById('logadouro').value = dados.logradouro;
        document.getElementById('bairro').value = dados.bairro;
        document.getElementById('cidade').value = dados.localidade;
        document.getElementById('estado').value = dados.uf;
        }
    })

    .catch((error) => {
        alert('CEP PREENCHIDO INCORRETAMENTE!')
        return error; 
    })
}