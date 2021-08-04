async function renderData(){
    let user = await localStorage.getItem('data')
    let parsedUser = JSON.parse(user)
    document.getElementById('nome').innerHTML = parsedUser.nome
    print()
}

function hasData(){
    if (!localStorage.getItem('data')){
        alert('Você precisa preencher o formulário para ter acesso à essa página')
        window.location.href = "https://guisteglich.github.io/Projeto-B99/clubeB99.html";
        return
    }
    renderData()
}