function promptnome() {
     const nome = prompt("Insira seu nome")
    while(nome == '') {
        const nome = prompt("Por favor Insira seu nome")
        alert ("Olá " + nome)
        return nome;
        
    }
    alert ("Olá " + nome)
        
}