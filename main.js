const form = document.getElementById('form-valido');

function validarFormulario(valorA, valorB) {
    return valorB > valorA; 
 }

let formvalid = false;

        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const valorA = document.getElementById('n1')
            const valorB = document.getElementById('n2')
            const mensagemSucesso = 'O número é valido!'

        formvalid = validarFormulario
            if (formvalid){
                alert(mensagemSucesso)
                valorA.value('')
                valorB.value('')

            }  else if (valorA == valorB){
                alert("Os valores não podem ser iguais")
            }  else{
                alert("O primeiro valor não pode ser maior que o segundo!")
            }
        });

        console.log(form);