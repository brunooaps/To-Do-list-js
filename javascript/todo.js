var txtTarefa = document.querySelector('#txtTarefa');
var btnAdicionar = document.querySelector('#btnAdicionar');
var spnMensagem = document.querySelector('#spnMensagem');
var tblTarefas = document.querySelector("table tbody");
var cod = 1;
var tarefas = [];

//Clicking the button
btnAdicionar.onclick = function()
{
    spnMensagem.innerHTML = '';
    var tarefa = txtTarefa.value.trim();

    if(tarefa == '')
    {
        //If you press with no input. Error message
        spnMensagem.appendChild(
            document.createTextNode("Por favor, Preencha o campo"));
    }
     else
    {
        //Else add to the list
        var objeto =  {cod, tarefa };
        tarefas.push(objeto);
        labelRender();
        cod++;
    }
}

//Rendering the label
function labelRender()
{
    tblTarefas.innerHTML = '';
    //forEach function
    for(t of tarefas)
    {
        var linha = document.createElement("tr");
        var celulaCodigo = document.createElement("td");
        var celulaTarefa = document.createElement("td");
        var celulaRemover = document.createElement("td");

        var botaoRemover = document.createElement("button");
        botaoRemover.appendChild(document.createTextNode("Remover"));
        botaoRemover.setAttribute("class", "btn btn-outline-danger")
        botaoRemover.setAttribute("onclick", `remover(${t.cod})`);
        
        celulaCodigo.appendChild(document.createTextNode(t.cod)); 
        celulaTarefa.appendChild(document.createTextNode(t.tarefa));
        celulaRemover.appendChild(botaoRemover);

        

        linha.appendChild(celulaCodigo);
        linha.appendChild(celulaTarefa);
        linha.appendChild(celulaRemover);
        
        tblTarefas.appendChild(linha);
    }
}

//Getting use to removing button
function remover(codigo)
{
    //tarefas.pop()  almost what we want, he deletes ONLY the last element, not that useful tho

    var index = tarefas.findIndex(t => t.cod == codigo);
    var objeto = tarefas.find(t => t.cod == codigo);

    tarefas.splice(index, 1)
    labelRender()
}

function getIndexID(codigo)
{
    for(var i = 0; i < tarefas.length; i++)
    {
        if(codigo == tarefas[i].cod)
        {
            return;
        }
    }
}