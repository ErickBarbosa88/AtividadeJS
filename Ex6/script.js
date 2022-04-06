//const inputNome = document.getElementById("inputNome");
function inserir() {
    const btInserir = document.getElementById("btInserir");
    const inputNome = document. getElementById("inputNome");
    const inputSobre = document.getElementById("inputSobre");
    //const nome = document.getElementById("inputNome")
    //const nome = (inputNome.value);
    alert("Olá " + inputNome.value + " " + inputSobre.value)
    //console.log(nome)
}

function apagar() {
    const inputNome = document. getElementById("inputNome");
    inputNome.value = "";
    const inputSobre = document.getElementById("inputSobre");
    inputSobre.value = "";

    
}


//btInserir.onclick = inserir;
