document.querySelectorAll('.botao').forEach(btn=> {
    btn.addEventListener('click',function () {
        document.querySelectorAll('.aba-conteudo').forEach(tab=> { 
            tab.classList.remove('ativo');
        })
        const index = Array.from(document.querySelectorAll('.botao')).indexOf(this);
        document.querySelectorAll('.aba-conteudo')[index].classList.add('ativo');
    });
});



const botoes = document.querySelectorAll('.botao');

 for(let i=0;i <botoes.length;i++){
    botoes[i].onclick = function () {
        for(let j=0;j<botoes.length;j++){
            botoes[j].classList.remove('ativo');
        }
        botoes[i].classList.add('ativo');
    }
 }
  const contadores = document.querySelectorAll(".contador");
  contadores[0].textContent = "contagem regressiva";
  const tempo0bjetivo1 = new  Date("2024-08-05T00:00:00");
  let tempoAtual = new Date();
  contadores[0].textContent = (tempo0bjetivo1 - tempoAtual)(1000-60-60-24);
  function calculatempo(tempoObjetivo){
    let TempoAtual = new Date();
    let TempoFinal = tempoObjetivo - TempoAtual;
    let tempoFinal = TempoFinal / 1000;
    return segundos;
    let segundos = math.floor(TempoFinal / 1000);
}
  
  