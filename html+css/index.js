/* Para agregar resultados en la tabla de lo que se busco */
let td = document.querySelectorAll("table tr:nth-of-type(2) td");
/* Input de nombre */
let inputNombre = document.querySelector("input[name='nombre']");
/* Input de apellido */
let inputApellido = document.querySelector("input[name='apellido']");

/* Variables declaradas para emular con javascript el progreso de la barra */
let barraProgresoContenedor = document.querySelector(".barraProgreso");
let barraProgreso = document.querySelector(".progress-bar");

let boton = document.querySelector("button");

boton.addEventListener('click', (e) => {

    e.preventDefault();

    let main = document.querySelector("main");

    /* Haciendo uso del componente alert cuando se busca un input vacio */
    if (inputNombre.value === "" || inputApellido.value == "") {

        /* Para que no se haga spam en la alerta */
        if (document.querySelector("div[data-name='alerta']") == null) {

            let div = document.createElement("div");
            div.setAttribute("data-name", "alerta");
            div.innerHTML = "<div class='alert alert-danger' role='alert'><p><span style='font-weight:bold;'>Ha ocurrido un error</span><br />Recuerde que el nombre y apellido no deben quedar vacios</p></div>";

            let table = document.querySelector("table").parentNode;
            let tableChild = document.querySelector("table");
            table.insertBefore(div, tableChild);

            setTimeout(() => {
                main.removeChild(div);
            }, 6000);

        }

    } else {

        boton.disabled = true;

        let div = document.querySelector("div[data-name='alerta']");

        if (div) {
            main.removeChild(div);
        }

        /* emulando con javascript el progreso de la barra */
        barraProgresoContenedor.classList.add("db");

        let saltos = 0;

        let intervalo = setInterval(() => {

            barraProgreso.style.width = saltos + "%";

            if (saltos == 100) {
                td[0].innerHTML = inputNombre.value;
                td[1].innerHTML = inputApellido.value;
                td[2].innerHTML = 25;
                for (let i = 0; i < td.length; i++) {
                    td[i].style.color = "#007bc7";
                    td[i].style.fontWeight = "bold";
                }

                barraProgresoContenedor.classList.remove("db");

                boton.disabled = false;

                clearInterval(intervalo);

            } else {

                saltos += 10;

            }

        }, 1000);

    }

});


/* Acordion */

let bottonAccordion = document.querySelectorAll("[data-target]");

for (let i = 0; i < bottonAccordion.length; i++) {

    let oculto = document.querySelector(`#collapse${bottonAccordion[i].getAttribute("data-target").split("#")[1].split("collapse")[1]}`);

    bottonAccordion[i].addEventListener('click', () => {
        oculto.classList.toggle("btnColapsable");
    });

}