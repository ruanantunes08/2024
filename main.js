document.querySelectorAll('.botao').forEach(btn =>{
    btn.addEventListener('click', function() {
      document.querySelectorAll('.aba-conteudo').forEach(tab => {
    tab.classList.remove('ativo');
    });
const index = Array.from(documet.querySelectorAll('botao')).indexOf(this);
document.querySelectorAll('aba-conteudo')[index].classList.add('ativo');
   });
});  
