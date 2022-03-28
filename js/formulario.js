const btnEnviar = document.getElementById("btn-enviar");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const textArea = document.getElementById("text-area");

btnEnviar.addEventListener('click', e =>{
    e.preventDefault();

    nombre.value = ""
    apellido.value = ""
    email.value = ""
    textArea.value = ""
})