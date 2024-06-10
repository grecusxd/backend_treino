const addAnimal=document.getElementById("addAnimal")


const lista = document.getElementById("lista-animais")


async function carregarAnimais(){
    lista.innerHTML = ''
    const response = await axios.get('http://127.0.0.1:8000/animais')
    const animais = response.data


    animais.forEach(e => {
        const nome=document.createElement("li")
        console.log(e)
        nome.innerHTML=
        `<span>ID: ${e.id}</span><br>
         <span>Nome: ${e.nome}</span><br>
         <span>Idade: ${e.idade}</span><br>
         <span>Sexo: ${e.sexo}</span><br>
         <span>Cor: ${e.cor}</span><br>
         <input type="submit" id=${e.id} value="Deletar" onsubmit="deletar_animal(${e.id})">
        `
        lista.appendChild(nome)
    });

}

function adicionarAnimal(){
    const form_animal= document.getElementById('form-animal')
    const input_nome = document.getElementById('nome')
    const input_idade = document.getElementById('idade')
    const input_sexo = document.getElementById('sexo')
    const input_cor = document.getElementById('cor')

    form_animal.onsubmit = async (event) =>{
        event.preventDefault()
        const nome_animal = input_nome.value
        input_nome.value=''
        const idade_animal = input_idade.value
        input_idade.value=''
        const sexo_animal = input_sexo.value
        input_sexo.value=''
        const cor_animal = input_cor.value
        input_cor.value=''

        await axios.post('http://127.0.0.1:8000/animais', {
            id:0,
            nome: nome_animal,
            idade: idade_animal,
            sexo: sexo_animal,
            cor: cor_animal
        }).then(response => {
            console.log('passou')
        }).catch(error => {
            console.log(error.response)
        })
        carregarAnimais()
    } 
}

function deletar_animal(ida){
    const deletar= document.getElementById(ida)

    deletar.onsubmit = async (event) => {
        event.preventDefault()

        await axios.delete("http://127.0.0.1:8000/animais/remover", {
            id: ida
        })

        carregarAnimais()
    }
}

function app(){
    console.log("API iniciada")
    carregarAnimais()
    adicionarAnimal()
}


app()