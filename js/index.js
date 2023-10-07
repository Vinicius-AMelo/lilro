
if (document.location.href.includes("contato.html")) {
    document.querySelector('.formulario-contato').addEventListener('submit', function () {
        alert('Formulário enviado com sucesso!');
    })
}

if (document.location.href.includes("index.html")) {
    document.querySelector('.link-navegacao.home').classList.add('atual');
} else if (document.location.href.includes("servicos.html")) {
    document.querySelector('.link-navegacao.servicos').classList.add('atual');
} else if (document.location.href.includes("contato.html")) {
    document.querySelector('.link-navegacao.contato').classList.add('atual');
} else if (document.location.href.includes("curriculo.html")) {
    document.querySelector('.link-navegacao.curriculo').classList.add('atual');
}