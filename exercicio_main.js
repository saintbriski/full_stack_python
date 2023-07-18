const form = document.getElementById('formulario'); 
form.addEventListener('submit', function (e) {
    e.preventDefault(); 

    resetarCamposeMensagens ();

    let numeroA = parseFloat(document.getElementById('numero-A').value); 
    let numeroB = parseFloat(document.getElementById('numero-B').value);
    
    if (numeroB > numeroA) {
        exibirMensagem(true);
    } else {
        exibirMensagem(false);
    }
})

    const mensagemSucesso =  `Tudo certo! O Número <b>B</b> é maior que o número <b>A</b>`; 
    const mensagemDeErro = `O número <b></b> precisa ser maior que o número <b>A</b>`; 

    function exibirMensagem(valido) {
        let mensagem = document.querySelector('.success-message');
        let mensagemErro = document.querySelector('.error-message');
        
        if (valido) {
            mensagem.innerHTML = mensagemSucesso
            mensagem.style.display = 'block';  
            mensagemErro.style.display = 'none';

            document.getElementById('formulario').reset();

        } else {
            mensagemErro.innerHTML = mensagemDeErro
            mensagemErro.style.display = 'block';
            mensagem.style.display = 'none';

            document.getElementById('formulario').reset();
        }
    }

    function resetarCamposeMensagens () {
        let mensagem = document.querySelector('.success-message'); 
        let mensagemErro = document.querySelector('.error-message'); 

        mensagem.innerHTML = '';
        mensagemErro.innerHTML = '';
    }
    