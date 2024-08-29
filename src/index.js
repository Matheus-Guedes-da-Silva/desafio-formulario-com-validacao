const todosOsInputs = document.querySelectorAll(".todos-inputs")
const enviarFormulario = document.getElementById("enviar")
const campoObrigatorio = document.querySelectorAll(".campo-obrigatorio-oculto")

todosOsInputs.forEach((input, index)=>{

    enviarFormulario.addEventListener("click", ()=>{
        if (input.value === ""){
            todosOsInputs[index].classList.add("campo-nao-preenchido")
            campoObrigatorio[index].classList.add("campo-obrigatorio-aparecendo")

        } else {
            todosOsInputs[index].classList.add("campo-preenchido")
            campoObrigatorio[index].classList.remove("campo-obrigatorio-aparecendo")

        }
    })

})

