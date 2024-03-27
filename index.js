const API_URL = "https://jsonplaceholder.typicode.com";

const xhr = new XMLHttpRequest();

function onRequestHandler(){
    if(this.readyState === 4 && this.status === 200){
        // 0 = unset, no se ha llamado al metedo open
        // 1 = opened, se ha llamado al metodo open
        // 2 = headers_received, se esta llamando al metodo send
        // 3 = loading, esta cargando, es decir, esta recibiendo la respuesta
        // 4 = done, se ha completado la operacion
         
        // DEVUELVE EN FORMATO DE ARRAY
        const data = JSON.parse(this.response);
        // console.log(data);

        const HTMLResponse = document.querySelector("#app");
        const usuario = data.map((user) => `<li>Nombre: ${user.name} <br> Email: ${user.email}</li><hr>`);
        HTMLResponse.innerHTML = `<ul>${usuario}</ul>`;
    }
}

xhr.addEventListener("load", onRequestHandler);
xhr.open("GET", `${API_URL}/users`);
xhr.send();