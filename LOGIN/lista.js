
var tabela = document.getElementById('tabela')
var tbody  = document.getElementById('tbody')

var users = JSON.parse(localStorage.getItem('users'));

tbody.innerHTML = '';

users.forEach((item, index) => {
    var tr = document.createElement('tr');
    var dataCadastro = new Date(item.dataCadastro);
var dia = dataCadastro.getDate();
var mes = dataCadastro.getMonth() + 1; // Adicione 1 ao mês, pois os meses em JavaScript são baseados em zero.
var ano = dataCadastro.getFullYear();

// Formate a data no formato "dd/mm/aaaa"
var dataFormatada = dia + '/' + mes + '/' + ano;

tr.innerHTML = `<td>${item.name}</td>
                <td>${item.Usuario}</td>
                <td>${item.email}</td>
                <td>${item.tel}</td>
                <td>${dataFormatada}</td> <!-- Mostra a data de cadastro no novo formato -->
                <td>
                    <button id="removeBtn" onclick="removerUsuario(${index})">Remover</button>
                </td>`;

    tbody.appendChild(tr);
});


//remover um usuário
function removerUsuario(index) {
    var confirmar = confirm('Tem certeza de que deseja remover este usuário?');


    if (confirmar) {
        users.splice(index, 1); // remove da lista
        localStorage.setItem('users', JSON.stringify(users)); // muda o localStorage
        location.reload(); // recarrega
    }
}

// função para editar um usuário
function editarUsuario(index) {

}


// tbody.innerHTML = '';

// users.map((item)=>{ // isso aq é mt melhor
    
//     tbody.innerHTML +=`<tr><td>${item.name}</td><td>${item.email}</td><td>${item.password}</td><td>${item.tel}</td></tr>`
// })



// for (let i = 0 ; i < users.length; i++) {
//     var user = users[i]
//     var row = tbody.insertRow()
//     var cell1 = row.insertCell(i)
//     var cell2 = row.insertCell(i)

//     cell1.innerHTML = user.email
//     cell2.innerHTML = user.password
//     tbody.innerHTML = user.email + user.password

//     console.log(user)
// }