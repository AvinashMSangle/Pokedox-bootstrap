import data from "./data.json";

const dataRow = document.querySelector(["data-row"]);
console.log(dataRow);

for (let pokemon of data) {
  const p = document.createElement("p");

  p.textContent = pokemon.name;

  dataRow.appendChild(p);
}
