$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();
})

   $("#botao-limpar").click(function() {
      $('form').clear();
    });

    $('#telefone').mask('(00) 00000-0000')
    $('#cpf').mask('000.000.000.00')
    $('#cep').mask("99.999-999")

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true,
            },
            cep: {
                required: true,
            },
            endereco: {
                required: true,
            },
            numeroDeEndereco: {
                required: true,
            },
            complemento: {
                required: false,
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome.',
            telefone: 'Por favor, insira o seu telefone.',
            email: 'Por favor, insira seu E-mail.',
            endereco: 'Por favor, insira seu Endereço completo.',
            numeroDeEndereco: 'Por favor, insira o número do seu endereço.',
            complemento: 'Por favor, insira o complemento de sua casa.',
            cpf: 'Por favor, insira seu CPF.',
            cep: 'Por favor, insira seu CEP.',

        },
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
})
