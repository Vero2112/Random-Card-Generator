/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let Numerocarta = document.querySelector(".numero");
let PaloUpCarta = document.querySelector(".paloUp");
let PaloDownCarta = document.querySelector(".paloDown");

window.onload = function cambiocarta() {
  //write your code here
  let palo = paloaleatorio();
  Numerocarta.innerHTML = numeroaleatorio();
  PaloUpCarta.innerHTML = palo;
  PaloDownCarta.innerHTML = palo;

  // INICIO generar numero aleatorio
  function numeroaleatorio() {
    let numerodebaraja = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "K",
      "Q"
    ];
    let IndiceNumeroAleatorio = Math.floor(
      Math.random() * numerodebaraja.length
    );
    return numerodebaraja[IndiceNumeroAleatorio];
  }
  // FIN Generar numero aleatorio

  // INICIO generar palo aleatorio
  function paloaleatorio() {
    let palo = ["♦", "♥", "♠", "♣"];
    let IndicePaloAleatorio = Math.floor(Math.random() * palo.length);

    // //INICIO color
    if (
      palo[IndicePaloAleatorio] === "♦" ||
      palo[IndicePaloAleatorio] === "♥"
    ) {
      PaloUpCarta.classList.add("corazon");
      PaloDownCarta.classList.add("corazon");
      PaloUpCarta.classList.add("rombo");
      PaloDownCarta.classList.add("rombo");
      Numerocarta.classList.add("rombo");
      Numerocarta.classList.add("corazon");
    }
    // // FIN color

    return palo[IndicePaloAleatorio];
  }
  // FIN Generar palo aleatorio

  //INICIO Boton

  let button = document.querySelector(".boton");
  button.style.position = "absolute";
  button.style.marginLeft = "48%";
  document.body.appendChild(button);
  button.addEventListener("click", event => {
    location.reload();
  });
  //FIN Boton
};
