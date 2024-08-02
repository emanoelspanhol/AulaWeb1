function validacampos() {
    let elemento1 = document.getElementById("nome");
    let elemento2 = document.getElementById("sobrenome");
    let elemento3 = document.getElementById("email");

    if (elemento1.value.length < 3) {
        elemento1.focus();
        elemento1.style.border = "2px solid red";
        elemento1.style.outline = "0";
    } else {
        elemento1.style.border = "2px solid green";
    } if (elemento2.value.length < 3) {
        elemento2.focus();
        elemento2.style.border = "2px solid red";
        elemento2.style.outline = "0";
    } else {
        elemento2.style.border = "2px solid green";
    } if ((elemento3.value.length < 3) ||
            (elemento3.value.indexOf('@') == -1) ||
            (elemento3.value.indexOf('.com') == -1)) {
        elemento3.focus();
        elemento3.style.border = "2px solid red";
        elemento3.style.outline = "0";
    } else {
        elemento3.style.border = "2px solid green";
    }
}

function mascara(teclado, mascara) {
    // Remove qualquer caractere que não seja número
    let valor = teclado.value.replace(/\D/g, '');
    let resultado = '';
    let posicao = 0;

    // Aplica a máscara ao valor digitado
    for (let i = 0; i < mascara.length; i++) {
        if (mascara[i] === '#') {
            if (posicao < valor.length) {
                resultado += valor[posicao];
                posicao++;
            } else {
                break;
            }
        } else {
            resultado += mascara[i];
        }
    }

    // Define o valor do campo de texto com a máscara aplicada
   
    teclado.value = resultado;
}

function consultaCEP(cep){
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById("rua").value=data.logradouro;
            document.getElementById("bairro").value=data.bairro;
            document.getElementById("cidade").value=data.localidade;
            document.getElementById("estado").value=data.uf;

        })
        .catch(error => console.error(error));
}