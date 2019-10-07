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
  newRow.innerHTML = `
  <td><b>${carnet}</b></td>
  <td><b>${schedule}</b></td>
  <td><b>${date.toLocaleString()}</b></td>
  <td><b>${late}</b></td>`;

  tBody.appendChild(newRow);
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
