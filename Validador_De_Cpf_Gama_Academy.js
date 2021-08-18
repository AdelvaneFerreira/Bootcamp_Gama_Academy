
function validaCpf(cpf){
  if (cpf.length != 11)
  return false;
  else{
    var numeros = cpf.substring(0,9)
    var digitos = cpf.substring(9)

    var soma = 0;
      for (var i = 10; i > 1; i--){
        soma += numeros.charAt(10 - i) * i;
      }
        console.log(soma)

    var resultado = (soma % 11) >2 ? 0 : 11 - (soma % 11)

        if(resultado != digitos.charAt(0)){
          return false;
        }
      soma = 0;

       numeros = cpf.substring(0, 10);

       for (var k = 11; k > 1; k--) {
        soma += numeros.charAt(11 - k) * k;

        resultado = soma % 11 > 2 ? 0 : 11 - (soma % 11)


        if(resultado != digitos.charAt(1)) {
          return false;
        }

        return true;
      }
    }
  }
function validacao() {
   console.log('Iniciando validação do CPF')
   document.getElementById('success').style.dysplay = 'none'
   document.getElementById('error').style.dysplay = 'none'

  var cpf = document.getElementById('cpf_digitado').value;

  var resultadoValidacao = validaCpf(cpf);

   if (resultadoValidacao) {
    document.getElementById('success').style.display = 'block';
   }  else {
    document.getElementById('error').style.display = 'block';
   }
}
