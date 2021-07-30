async function renderData(){
    let user = await localStorage.getItem('data')
    let parsedUser = JSON.parse(user)
    console.log(parsedUser.nome)
    document.getElementById('nome').innerHTML = parsedUser.nome
    document.getElementById('sobrenome').innerHTML = parsedUser.sobrenome
    document.getElementById('email').innerHTML = parsedUser.email
    document.getElementById('cidade').innerHTML = parsedUser.cidade
    document.getElementById('personagens').innerHTML = parsedUser.personagens
    document.getElementById('temporada').innerHTML = parsedUser.temporada
    document.getElementById('historia').innerHTML = parsedUser.historia
}

function hasData(){
    if (!localStorage.getItem('data')){
        alert('Você precisa preencher o formulário para ter acesso à essa página')
        window.location.href = "../clubeB99.html";
        return
    }
    renderData()
}