var rows = [];
var z = true;
var counterId = 0;
var parseLate_switch = value => {
  if (value) {
    return "Tarde :(";
  }
  return "A tiempo :)";
};

var tBody = document.querySelector("#table_body");

function AddRow(carnet, schedule, late, tBody) {
  var newRow = document.createElement("tr");
  var date = new Date();

  rows.push({
    id: counterId,
    carnet: carnet,
    schedule: schedule,
    late: late
  });
  console.log(rows);
  newRow.innerHTML = `
  <td><b>${carnet}</b></td>
  <td><b>${schedule}</b></td>
  <td><b>${date.toLocaleString()}</b></td>
  <td><b>${late}</b></td>`;

  var cellContainer = document.createElement("td");

  var Tarea = document.createElement("td");
  var Tarea1 = document.createElement("input");
  Tarea1.classList.add("input");

  var deleteButton = document.createElement("button");
  deleteButton.classList.add("btn", "btn-danger");
  deleteButton.innerText = "Eliminar";
  deleteButton.value = counterId;

  deleteButton.addEventListener("click", event => {
    //console.log(event.srcElement.value);
    var idElement = event.srcElement.value;
    var trToDelete = document.querySelector(`button[value='${idElement}']`)
      .parentElement.parentElement;
    var x = Tarea1.value;
    var y = document.querySelector(`button[value='${idElement}']`).parentElement
      .parentElement.firstChild.textContent;

    console.log(y);
    if (x == y) {
      tBody.removeChild(trToDelete);
      rows.forEach((item, index) => {
        if (item.id == idElement) {
          rows.splice(index, 1);
        }
      });
    } else {
      alert("No coincide el carnet.");
    }
  });

  Tarea.appendChild(Tarea1);
  cellContainer.appendChild(deleteButton);
  newRow.appendChild(cellContainer);
  newRow.appendChild(Tarea);
  tBody.appendChild(newRow);
  counterId++;
}

window.onload = function() {
  var submit_btn = document.querySelector("#submit_btn");
  var carnet_field = document.querySelector("#carnet_field");
  var late_switch = document.querySelector("#late_switch");
  var schedule_field = document.querySelector("#schedule_field");

  var carnetRegex = new RegExp("[0-9]{8}");

  submit_btn.addEventListener("click", () => {
    var carnet = carnet_field.value;
    var schedule = schedule_field.options[schedule_field.selectedIndex].text;
    var late = parseLate_switch(late_switch.checked);
    if (carnetRegex.test(carnet)) {
      AddRow(carnet, schedule, late, tBody);
    } else {
      alert("Formato no válido");
    }
  });

  carnet_field.addEventListener("keyup", event => {
    var carnet = carnet_field.value;
    if (carnetRegex.test(carnet)) {
      submit_btn.disabled = false;
    } else {
      submit_btn.disabled = true;
    }
  });
};
