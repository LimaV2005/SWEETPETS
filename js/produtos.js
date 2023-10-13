    var teste = JSON.parse(localStorage.getItem('listaDogs'));

function showValues(){
    let listaDogs = JSON.parse(localStorage.getItem('listaDogs')|| '[]')

    const list = document.getElementById('product-list')

    for(let i = 0; i < listaDogs.length; i++){
    

        var teste = listaDogs[i]['upload'].split('\\')
        console.log(teste)
        list.innerHTML += `<div class="card">
        <img class="bixo" src= "./${teste[2]}" id="imagemexibida" accept="image/*">
        <img src="/imagens/icons8-gostar-48.png"class="svg"><div id="intro">
         <h1>${listaDogs[i]['Nome']}</h1>
        <h3>${listaDogs[i]['Cidade']}, ${listaDogs[i]['Estado']}</h3>
        <p>Esse é <span>${listaDogs[i]['Nome']}</span> o ${listaDogs[i]['Espécie']}
         mais lindo e fofo de toda a região de ${listaDogs[i]['Cidade']} </p>
         </div>
         </div>`;
        
       
        }
       
    }


showValues()


function criarPreview(){
    const imagemBase64 = localStorage.getItem('upload');

    if(imagemBase64) {
        const imagem = new Image();
        imagem.src = imagemBase64;

        const images = document.getElementById('images');
        images.appendChild(imagem);     
    }
    
}

// O javascript lê de cima para baixo = tem fila pra execução :,)
// sempre que fizer um formulário, deve-se usar submit





/*const leitorDeArquivos = new FileReader(),
inputArquivo = document.querySelector('.upload');

function leEAtualiza(){
    //pega o arquivo enviado e guarda nesta variavel
    let imagemEnviada = upload.files[0];

    //Usa a função do objeto leitor de arquivos, que lê o arquivo, e consegue reaproveita-lo para usar o arquivo como uma URL
    leitorDeArquivos.readAsDataURL(imagemEnviada);
    
    //Após leitura da imagem (evento load), a função de callback define o valor do src da imagem de prévia com o valor do resultado da leitura do leitor de arquivos
    leitorDeArquivos.addEventListener('loadend', function(load){
        
        //veja no console o que o resultado do leitor de arquivos :)
        console.log(load.target.result);
        //define o caminho da imagem com o caminho criado pelo leitor de arquivos
        previaDaImagem.src = load.target.result
    })
}*/























