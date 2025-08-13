// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaDeAmigos =[]; // Inicializar una lista vacía para almacenar los amigos

function agregarAmigo(){
 let amigoNuevo = document.getElementById("amigo").value; // Obtener el valor del campo de entrada

    if (amigoNuevo.trim() != ""){  // Validar que el campo no esté vacío
        if (listaDeAmigos.includes(amigoNuevo)){ // Verificar si el amigo ya está en la lista
            alert("El amigo ya está en la lista.")
        } else{ // Si el amigo no está repetido, agregarlo
            listaDeAmigos.push(amigoNuevo);
        }        
    } else{ // Si el campo está vacío, mostrar un mensaje de alerta
        alert("Por favor ingresa un nombre válido.");
    } 
    limpiarcaja();
    mostrarAmigos(listaDeAmigos);
} 

function limpiarcaja(){
    document.getElementById("amigo").value = ''; // Limpiar el campo de entrada
}

function mostrarAmigos(listaDeAmigos) {
   let lista = document.getElementById("listaAmigos"); // Obtener el elemento de la lista en el HTML
    lista.innerHTML = '';// Limpiar la lista

    for (let i = 0; i < listaDeAmigos.length; i++) { // Iterar sobre la lista de amigos
        let amigo = document.createElement("li"); // Crear un nuevo elemento de lista
        amigo.textContent = listaDeAmigos[i]; // Asignar el nombre del amigo al contenido del elemento
        lista.appendChild(amigo); // Agregar el elemento a la lista
    }
}

function sortearAmigo(){
    if (listaDeAmigos.length === 0){
        alert("La lista de amigos está vacía. Por favor, agrega al menos un amigo.");
        return;
    }else {
        let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length); // Generar un índice aleatorio
        let amigoElegido = listaDeAmigos[indiceAleatorio]; // Seleccionar un amigo al azar
        document.getElementById("listaAmigos").innerHTML = ''; // Limpiar la lista de amigos
        let resultado = document.getElementById("resultado"); // Obtener el elemento donde se mostrará el resultado
        resultado.textContent = "El amigo elegido es: " + amigoElegido; // Mostrar    
}
}