function saveData(){
    let nome = document.getElementById("nome").value;
    let sobrenome = document.getElementById("sobrenome").value;
    let email = document.getElementById("email").value;
    let cidade = document.getElementById("cidade").value;
    let personagens = document.querySelector('input[name="personagens"]:checked').value
    let temporada = document.getElementById("temporadas").value
    let historia = document.getElementById("historia").value
    let data = {
        nome,
        sobrenome,
        email,
        cidade,
        personagens,
        temporada,
        historia
    }
    localStorage.setItem("data", JSON.stringify(data));
}