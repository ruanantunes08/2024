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
 const contadores = document.querySelectorAll('.contador');
 contadores [0].textContent = 'Contagem regressiva';
 const tempoObjetivo1 = new Date('2024-08-11T00:00:00');
 const tempoObjetivo2 = new Date('2024-08-12T00:00:00');
 const tempoObjetivo3 = new Date('2025-08-01T00:00:00');
 const tempoObjetivo4 = new Date('2025-08-01T00:00:00');
 let tempoAtual = new Date ();

 contadores[0].textContent = calculatempo(tempoObjetivo1 );
 contadores[1].textContent = calculatempo(tempoObjetivo2);
 contadores[2].textContent = calculatempo(tempoObjetivo3 );
 contadores[3].textContent = calculatempo(tempoObjetivo4);
 const tempos =
 [tempoObjetivo1,tempoObjetivo2,tempoObjetivo3,tempoObjetivo4];
 contadores[0].texcontent = calculatempo(tempo[0]);

 contadores[0].textContent = calculatempo(tempos[0] );
 contadores[1].textContent = calculatempo(tempos[1]);
 contadores[2].textContent = calculatempo(tempos[2] );
 contadores[3].textContent = calculatempo(tempos[3]);
 function calculatempo(tempoObjetivo) {
    let tempoAtual = new Date ();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal/ 1000);
    let minutos = Math.floor( segundos/ 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos%=60;
    minutos%=60;
    horas%=24;
    
    return dias + " dias " + horas + " horas " + minutos + " minutos "+ segundos + " segundos "; 

 }
 function atualizaCronometro(){
    for (let i=0; i.contadores.length;i++){
        contadores[i].textContent = calculaTempo(tempos[i]);
    }
 }
 function atualizaCronometro(){
    for (let i=0; i.contadores.length;i++){
        contadores[i].textContent = calculaTempo(tempos[i]);
    }
}
atualizaCronometro();