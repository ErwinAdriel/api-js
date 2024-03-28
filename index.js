const API_URL = "https://jsonplaceholder.typicode.com";

const HTMLResponse = document.querySelector("#app");

const ul = document.createElement('ul');

fetch(`${API_URL}/users`)
    .then((response) => response.json())
    .then((users) => {
        users.forEach((user) => {
            let elem = document.createElement('li');
            var nombre = document.createTextNode(`${user.name}`);
            var email = document.createTextNode(`${user.email}`);
            let br = document.createElement('br');
            let hr = document.createElement('hr');
            elem.appendChild(nombre);
            elem.appendChild(br);
            elem.appendChild(email);
            elem.appendChild(hr);
            ul.appendChild(elem);
        });

        

        HTMLResponse.appendChild(ul);
    })


/*const xhr = new XMLHttpRequest();
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
xhr.send();*/