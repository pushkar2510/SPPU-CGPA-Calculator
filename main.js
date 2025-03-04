document.getElementById("target").addEventListener("change", function() {
  let value = this.value;
  document.querySelectorAll(".calculator-container").forEach(div => div.style.display = "none");
  if (value) {
      document.getElementById(value).style.display = "block";
  }
});

function addSubject(tableId) {
  let table = document.getElementById(tableId);
  let row = table.insertRow();

  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);

  cell1.textContent = `Subject ${table.rows.length - 1}`;
  cell2.innerHTML = '<input type="number" class="credits" min="0">';
  cell3.innerHTML = '<input type="number" class="grades" min="0" max="10">';
}

function calculateCGPA(tableId, cgpaId) {
  let table = document.getElementById(tableId);
  let credits = table.querySelectorAll(".credits");
  let grades = table.querySelectorAll(".grades");

  let totalCredits = 0, weightedSum = 0;

  for (let i = 0; i < credits.length; i++) {
      let credit = parseFloat(credits[i].value) || 0;
      let grade = parseFloat(grades[i].value) || 0;
      totalCredits += credit;
      weightedSum += credit * grade;
  }

  let cgpa = totalCredits ? (weightedSum / totalCredits).toFixed(2) : "0.00";
  document.getElementById(cgpaId).textContent = cgpa;
}
document.getElementById("target").addEventListener("change", function() {
  let value = this.value;
  document.querySelectorAll(".calculator-container").forEach(div => div.style.display = "none");
  if (value) {
      document.getElementById(value).style.display = "block";
  }
});

function addSubject(tableId) {
  let table = document.getElementById(tableId);
  let row = table.insertRow();

  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);

  cell1.textContent = `Subject ${table.rows.length - 1}`;
  cell2.innerHTML = '<input type="number" class="credits" min="0">';
  cell3.innerHTML = '<input type="number" class="grades" min="0" max="10">';
}

function calculateCGPA(tableId, cgpaId) {
  let table = document.getElementById(tableId);
  let credits = table.querySelectorAll(".credits");
  let grades = table.querySelectorAll(".grades");

  let totalCredits = 0, weightedSum = 0;

  for (let i = 0; i < credits.length; i++) {
      let credit = parseFloat(credits[i].value) || 0;
      let grade = parseFloat(grades[i].value) || 0;
      totalCredits += credit;
      weightedSum += credit * grade;
  }

  let cgpa = totalCredits ? (weightedSum / totalCredits).toFixed(2) : "0.00";
  document.getElementById(cgpaId).textContent = cgpa;
}
