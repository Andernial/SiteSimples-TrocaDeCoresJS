const troca = document.querySelector('.btn')

troca.addEventListener('click',function() {
    document.body.classList.toggle('tema-escuro')


    var nomeClasse = document.body.className
    if(nomeClasse == 'tema-claro') {
        this.textContent = "Tema Escuro"
    }else {
        this.textContent = "Tema Claro"
    }
    console.log("a classe atual é " + nomeClasse)
})