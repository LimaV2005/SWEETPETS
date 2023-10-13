
// ----------------------- Validar Forms ----------
    //========== Coisinhas que vo usar ==============//
const form1 = document.getElementById("cadastro");
const nameInput = document.querySelector("#nome");
const especieInput = document.querySelector("#espécies");
const seInput = document.querySelector("#Sexo");
const idadeInput = document.querySelector("#idade");
const porteInput = document.querySelector("#porte");
const estadoInput = document.querySelector("#estado");
const cidadeInput = document.querySelector("#cidade");
const sobreInput = document.querySelector("#sobre");
const upload = document.querySelector("#upload");

//======================================================//


function form1submit(){

    window.location.href='/html/produtos.html';
}
form1.addEventListener("submit", (event) => {
    event.preventDefault();
    //Verifica se o nome está vazio
    if ( nameInput.value === "") {
        alert("Por favor, preencha todos os dados requisitados");
        return;
    }
    if (especieInput.value ==="") {
        alert("Por favor, preencha todos os dados requisitados");
        return;
    }
    if (seInput.value ==="") {
        alert("Por favor, preencha todos os dados requisitados");
        return;
    }
    if (idadeInput.value ==="") {
        alert("Por favor, preencha todos os dados requisitados");
        return;
    }
    if (porteInput.value ==="") {
        alert("Por favor, preencha todos os dados requisitados");
        return;
    }
    if (estadoInput.value ==="") {
        alert("Por favor, preencha todos os dados requisitados");
        return;
    }
    if (cidadeInput.value ==="") {
        alert("Por favor, preencha todos os dados requisitados");
      
    } else{

  //manda pra local storage e redireciona o user pra parte onde as informações foram
 form1submit();
    }
});
 
 function login() {
    if(nameInput && especieInput && seInput && idadeInput && porteInput && cidadeInput && estadoInput){

        //pegando quais informações quero guardar no localstorage
       
        // //cria uma lista "dentro da lista" ou cria um array vazio.
        let listaDogs = JSON.parse(localStorage.getItem('listaDogs')|| '[]') 
        //pegando quais informações quero guardar no localstorage
        listaDogs.push({
            Nome: nameInput.value,
            Espécie: especieInput.value,
            Sexo: seInput.value,
            Idade: idadeInput.value,
            Porte: porteInput.value,
            Estado: estadoInput.value, 
            Cidade: cidadeInput.value,
            upload: upload.value
        })
        //adiciona na localstorage
        localStorage.setItem('listaDogs', JSON.stringify(listaDogs))
        
    }}



    
   



   