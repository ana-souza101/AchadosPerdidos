const objetos = [
    { nome: "Garrafa azul", local: "Laboratório 2", categoria: "Acessórios", data: "2026-11-25", descricao: "Tem um adesivo na tampa." },
    { nome: "Estojo preto", local: "Biblioteca", categoria: "Material escolar", data: "2026-11-26", descricao: "Fecho vermelho." }
];

function mostrarObjetos() {

    const listaObjetosHtml = document.getElementById("lista-objetos");

    listaObjetosHtml.innerHTML = "";

    for(var objeto of objetos) {
                                   //separa uma string em várias partes
        const dataFormatada = objeto.data.split("-").reverse().join("/") //transforma em um vetor vom 3 partes e inverte ela, depois juntando e seprando pela barra

        listaObjetosHtml.innerHTML += `
    <li> 
        <span class="categoria">${objeto.categoria}</span>
        <h3>${objeto.nome}</h3>
        <p class="detalhes">${objeto.local} - ${dataFormatada}</p>
        <p>${objeto.descricao}</p>
    </li>
        `;

    }

}

function cadastrarObjetos(){
    var nome = document.getElementById("nome").value;
    var local = document.getElementById("local").value;
    var categoria = document.getElementById("categoria").value;
    var data = document.getElementById("data").value;
    var descricao = document.getElementById("descricao").value;

    if(nome === "" || local === "" || categoria === "" || data === ""){
        alert("Ainda tem um campo vazio!")
        return;
    }

    var novoObjeto = {
        nome: nome,
        local: local,
        categoria: categoria,
        data: data,
        descricao: descricao
    }

    objetos.push(novoObjeto)

    mostrarObjetos();

    // limpa os inputs
    document.getElementById("nome").value = "";
    document.getElementById("local").value = "";
    document.getElementById("categoria").value = "";
    document.getElementById("data").value = "";
    document.getElementById("descricao").value = "";

}

mostrarObjetos();