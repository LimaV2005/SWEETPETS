//Variável que mantém o estado visível do carrinho:
var carrinhoVisível = false;

//Esperar que todos os elementos da página sejam carregados para executar o script:

if (document.readyState == 'loading') {
    
    document.addEventListener('DOMContentLoaded', ready)
}

else {
    
    ready();
}

function ready() {
    
    //Botão de remover do carrinho:

    var EliminarItem = document.getElementsByClassName('btn-eliminar');
    for(var i=0; i<EliminarItem.length; i++) {

        var button = EliminarItem[i];
        button.addEventListener('click', eliminarItemCarrinho);
    }

    //Botão de somar do carrinho:

    var SomarQuantidade = document.getElementsByClassName('sumar-cantidad');
    for(var i=0; i<SomarQuantidade.length; i++) {

        var button = SomarQuantidade[i];
        button.addEventListener('click', somarQuantidade);
    }

     //Botão de subtrair quantidade do carrinho:

    var ExcluirQuantidade = document.getElementsByClassName('restar-cantidad');
    for(var i=0; i<ExcluirQuantidade.length; i++) {

        var button = ExcluirQuantidade[i];
        button.addEventListener('click', subtrairQuantidade);
    }

    //Botâo de adicionar:

    var AdicionarAoCarrinho = document.getElementsByClassName('boton-item');
    for(var i=0; i<AdicionarAoCarrinho.length; i++) {
        
        var button = AdicionarAoCarrinho[i];
        button.addEventListener('click', adicionarAoCarrinhoClicked);
    }

    //Botão de pagar do carrinho:
    document.getElementsByClassName('btn-pagar')[0].addEventListener('click', pagarClicked)
}

//Oculta e retira todos os elementos do carrinho:

function pagarClicked() {

    alert("Obrigado pela compra!");

    //Retira os componentes do carrinho:

    var carrinhoItems = document.getElementsByClassName('carrinho-items')[0];
    while (carrinhoItems.hasChildNodes()) {

        carrinhoItems.removeChild(carrinhoItems.firstChild)
    }
    atualizarTotalCarrinho();
    ocultarCarrinho();
}

// Função que controla o botão adicionar ao carrinho quando clicado

function adicionarAoCarrinhoClicked(event) {

    var button = event.target;
    var item = button.parentElement;
    var titulo = item.getElementsByClassName('titulo-item')[0].innerText;
    var preço = item.getElementsByClassName('preço-item')[0].innerText;
    var imagenSrc = item.getElementsByClassName('img-item')[0].src;
    console.log(imagenSrc);

    colocarItemCarrinho(titulo, preço, imagenSrc);

    verCarrinho();
}

//Deixar o carrinho visível

function verCarrinho() {

    carrinhoVisibilidade = true;
    var carrinho = document.getElementsByClassName('carrinho')[0];
    carrinho.style.marginRight = '0';
    carrinho.style.opacity = '1';

    var items =document.getElementsByClassName('container-items')[0];
    items.style.width = '60%';
}

//Colocar item no carrinho:

function colocarItemCarrinho(titulo, preço, imagenSrc) {

    var item = document.createElement('div');
    item.classList.add = ('item');
    var itemsCarrinho = document.getElementsByClassName('carrinho-items')[0];

    //"O item já está no carrinho":

    var nomesItemsCarrinho = itemsCarrinho.getElementsByClassName('carrinho-item-titulo');
    for(var i=0 ;i < nomesItemsCarrinho.length ;i++) {

        if(nomesItemsCarrinho[i].innerText==titulo) {

            alert("O item já está no carrinho");
            return;
        }
    }

    var contémItemCarrinho = `
        <div class="carrinho-item">
            <img src="${imagenSrc}" width="80px" alt="">
            <div class="carrinho-item-detalhes">
                <span class="carrinho-item-titulo">${titulo}</span>
                <div class="seletor-quantidade">
                    <i class="fa-solid fa-minus subtrair-quantidade"></i>
                    <input type="text" value="1" class="carrinho-item-quantidade" disabled>
                    <i class="fa-solid fa-plus somar-quantidade"></i>
                </div>
                <span class="carrinho-item-preço">${preço}</span>
            </div>
            <button class="btn-eliminar">
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>
    `
    item.innerHTML = contémItemCarrinho;
    itemsCarrinho.append(item);

    //Excluir novo item:

     item.getElementsByClassName('btn-eliminar')[0].addEventListener('click', eliminarItemCarrinho);

    //Subtrair quantidade do novo item:

    var botãoSubtrairQunatidade = item.getElementsByClassName('subtrair-quantidade')[0];
    botãoSubtrairQunatidade.addEventListener('click',subtrairQuantidade);

    //Somar quantidade do novo item:

    var botãoSomarQuantidade = item.getElementsByClassName('somar-quantidade')[0];
    botãoSomarQuantidade.addEventListener('click',somarQuantidade);

    //Atualiar total:

    atualizarTotalCarrinho();
}


//Aumentar de 1 em 1 a quantidade do elemento:

function somarQuantidade(event) {

    var buttonClicked = event.target;
    var seletor = buttonClicked.parentElement;
    console.log(seletor.getElementsByClassName('carrinho-item-quantidade')[0].value);
    var quantidadeAtual = seletor.getElementsByClassName('carrinho-item-quantidade')[0].value;
    quantidadeAtual++;
    seletor.getElementsByClassName('carrinho-item-quantidade')[0].value = quantidadeAtual;
    atualizarTotalCarrinho();
}
//Subtrair de 1 em 1 a quantidade do elemento selecionado:

function subtrairQuantidade(event) {

    var buttonClicked = event.target;
    var seletor = buttonClicked.parentElement;
    console.log(seletor.getElementsByClassName('carrinho-item-quantidade')[0].value);
    var quantidadeAtual = seletor.getElementsByClassName('carrinho-item-quantidade')[0].value;
    quantidadeAtual--;

    if(quantidadeAtual>=1){
        seletor.getElementsByClassName('carrinho-item-quantidade')[0].value = quantidadeAtual;
        atualizarTotalCarrinho();
    }
}

//Eliminar item do carrinho:

function eliminarItemCarrinho(event) {

    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();

    //Atualizar total do carrinho:

    atualizarTotalCarrinho();

    //la siguiente funciòn controla si hay elementos en el carrito
    //Si no hay elimino el carrito
    ocultarCarrinho();
}
//Função que controla se tem itens no arrinho, caso não tenha fecha o carrinho:

function ocultarCarrinho() { 

    var carrinhoItems = document.getElementsByClassName('carrinho-items')[0];
    if(carrinhoItems.childElementCount==0){
        var carrinho = document.getElementsByClassName('carrinho')[0];
        carrinho.style.marginRight = '-100%';
        carrinho.style.opacity = '0';
        carrinhoVisível = false;
    
        var items =document.getElementsByClassName('container-items')[0];
        items.style.width = '100%';
    }
}
//Atualizar total do carrinho:

function atualizarTotalCarrinho() {

    //Seleção do container do carrinho:

    var containerCarrinho = document.getElementsByClassName('carrinho')[0];
    var carrinhoItems = containerCarrinho.getElementsByClassName('carrinho-item');
    var total = 0;

    //Examinamos cada item do carrinho para atualizar o total

    for(var i=0; i< carrinhoItems.length; i++) {

        var item = carrinhoItems[i];
        var preçoElemento = item.getElementsByClassName('carrinho-item-preço')[0];

        //Ajustes no preço:

        var preço = parseFloat(preçoElemento.innerText.replace('R$','').replace('',''));
        var quantidadeItem = item.getElementsByClassName('carrinho-item-quantidade')[0];
        console.log(preço);
        var quantidade = quantidadeItem.value;
        total = total + (preço * quantidade);
    }
    total = Math.round(total * 100)/100;

    document.getElementsByClassName('carrinho-preço-total')[0].innerText = 'R$'+ total.toLocaleString("pt-br") + ",00";

}

//===================================//
//Tentando filtrar os produto
let indicator = document.querySelector('.filter-butao').children; //children pega todos os filhotes do elemento que chamei 
let main = document.querySelector('.container-items').children; //children pega todos os filhotes do elemento que chamei 

for(let i=0; i < indicator.length; i++){
    indicator[i].onclick = function(){
        // sempre que apertar, ele vai excluir o elemento com classe "active", no caso, remove todos que estão no "tudo"

        for( let x = 0; x < indicator.length; x++){  
        indicator[x].classList.remove('active'); 
        }


        this.classList.add('active'); // nessa classlist adicione "active"
        const displayItems = this.getAttribute('data-filter'); //pegue o atributo "data-filter"


        for(let z = 0; z < main.length; z++){
            //suma com o troço 
            setTimeout(() =>{
                main[z].style.display = 'none';

            }, 200);


            if ((main[z].getAttribute('data-prod') == displayItems) || displayItems =='tudo'){
            //apareça com o troço que quero
                setTimeout(() =>{
                    main[z].style.display = 'block';

                }, 200);
            }
        }
    }
}