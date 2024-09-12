function sortear (){

    // Puxando Do HTML   
   
       let quantidade = parseInt(document.getElementById("quantidade").value);
       let de = parseInt(document.getElementById("de").value);
       let ate = parseInt(document.getElementById("ate").value);
   
       let sorteados = [];
       let numero;
 
    // Verificação se "de" é maior que "ate"
    if (de >= ate){
        alert('O número em "Do número" deve ser menor que "Até o número."');
        return;
    } else if (quantidade > (ate - de +1)){
        alert('A quantidade escolhida está maior que o intervalo entre os números propostos');
        return;
    }      

   // Estrutura de repetição para vir numeros pseudoAleatorios
   
   for (let i = 0; i < quantidade; i++) {
    numero = obterNumeroAleatorio(de, ate);
   
   //Estrutura de repetição para não ter numeros repetidos
   
    while (sorteados.includes(numero)) {
      numero = obterNumeroAleatorio(de, ate);
      alert('Tentando obter número inédito');
    }

    sorteados.push(numero);
  }
   
   // Exibe os números sorteados | html linha 42 <div class="container__texto" id="resultado">
   
       let resultado = document.getElementById("resultado");
       resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`
       alterarStatusBotao() // Alterar status da classe botao desabilitado linha 39 htlm
   
    // Exibe os números sorteados no console
   
           console.log("Números sorteados:", sorteados);
       
   }
   
   //Função Pseudoaleatoria
   
   function obterNumeroAleatorio(min, max){
       return Math.floor(Math.random() * (max - min + 1)) + min;
   }
   
   
   //Troca de status do botao reiniciar
   function alterarStatusBotao(){
       let botao = document.getElementById("btn-reiniciar");
       if(botao.classList.contains("container__botao-desabilitado")){
           botao.classList.remove("container__botao-desabilitado");
           botao.classList.add("container__botao");
   
       } else{
           botao.classList.remove("container__botao");
           botao.classList.add("container__botao-desabilitado");
   
       }
   }
   
   //Fazendo o botao reiniciar funcionar
   
   function reiniciar(){
       document.getElementById("quantidade").value ="";
       document.getElementById("de").value = "";
       document.getElementById("ate").value = "";
       document.getElementById("resultado").innerHTML = "";
       alterarStatusBotao();
   }
   
   
