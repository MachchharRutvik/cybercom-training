function radio_element1() {
  if (document.getElementById("medical1").checked) {
    document.getElementById("result").innerHTML =
      "<span>if yes,spouse date of birth?(DD/MM/YY)</span>" +
      '<input type="text"></input>' +
      "<br>" +
      "<span>Insurance Company,Policy number and certificate number" +
      '<input type="text" placeholder="Insurance company"></input>' +
      '<input type="text"placeholder="policy number"></input>' +
      '<input type="text" placeholder="certificate number"></input>';
  } else {
    document.getElementById("result").innerHTML = "";
  }
}
function radio_element2() {
  if (document.getElementById("accident_yes").checked) {
    document.getElementById("result2").innerHTML =
      "<span>if yes,Date of accident(DD/MM/YY)</span>" +
      '<input type="text"></input>' +
      "<br>" +
      "<span>Location of accident" +
      '<input type="text" placeholder="Insurance company">' +
      "<br>" +
      "<span>Explain how the accident occured";
  } else {
    document.getElementById("result2").innerHTML = "";
  }
}
function addField() {
  var table = document.getElementById("table");
  var row = table.insertRow();
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);

  cell1.innerHTML = '<input type="text">';
  cell2.innerHTML = '<input type="date">';
  cell3.innerHTML = '<input type="text">';
  cell4.innerHTML = '<input type="text">';
}
