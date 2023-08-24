const sumar = document.getElementById("sumar");
const restar = document.getElementById("restar");
const reiniciar = document.getElementById("reiniciar");
const numeroMostrar = document.getElementById("numero-mostrar");
let contador = 0;

sumar.addEventListener("click", () => {
  contador = contador + 1;
  numeroMostrar.textContent = contador;
  ContadorColor();
});
restar.addEventListener("click", () => {
  contador = contador - 1;
  numeroMostrar.textContent = contador;
  ContadorColor();
});
reiniciar.addEventListener("click", () => {
  contador = 0;
  numeroMostrar.textContent = contador;
  ContadorColor();
});

function ContadorColor() {
  if (contador < 0) {
    numeroMostrar.style.color = "red";
  } else if (contador > 0) {
    numeroMostrar.style.color = "green";
  } else {
    numeroMostrar.style.color = "aliceblue";
  }
}
