const addAnimal=document.getElementById("teste")
const nome = document.getElementById("nome")
const lista = document.getElementById("lista-animais")

addAnimal.addEventListener('click', function(e) {
    e.preventDefault()
    console.log("funciona")
})
async function carregarAnimais(){
    const response = await axios.get('http://127.0.0.1:8000/animais')

    const animais = response.data
    
    
    
}


function app(){
    console.log("app funcionando")
    carregarAnimais()
}


app()