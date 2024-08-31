const todosOsInputs = document.querySelectorAll(".todos-inputs")
const enviarFormulario = document.getElementById("enviar")
const campoObrigatorio = document.querySelectorAll(".campo-obrigatorio-oculto")

enviarFormulario.addEventListener("click", ()=>{

    todosOsInputs.forEach((input, index)=>{

        if(input.value){
            todosOsInputs[index].classList.add("campo-preenchido")
            todosOsInputs[index].classList.remove("campo-nao-preenchido")
            campoObrigatorio[index].classList.remove("campo-obrigatorio-aparecendo")

        }else {
            todosOsInputs[index].classList.add("campo-nao-preenchido")
            todosOsInputs[index].classList.remove("campo-preenchido")
            campoObrigatorio[index].classList.add("campo-obrigatorio-aparecendo")     
        }      
    })
})
