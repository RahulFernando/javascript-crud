let selected = null;

const onSubmitHandler = (event) => {
  event.preventDefault();

  var formData = readInputs();
  if (validate()) {
      if (selected) {
          updateHandler(formData);
      } else {
        insertRecord(formData);
        reset();
      }
  }
};

const readInputs = () => {
  var formData = {};
  formData['fullName'] = document.getElementById('fullName').value;
  formData['empNo'] = document.getElementById('empNo').value;
  formData['salary'] = document.getElementById('salary').value;
  formData['city'] = document.getElementById('city').value;

  return formData;
};

const insertRecord = (data) => {
  var table = document.getElementById('list').getElementsByTagName('tbody')[0];
  var row = table.insertRow(table.length);
  cell1 = row.insertCell(0);
  cell1.innerHTML = data.fullName;
  cell2 = row.insertCell(1);
  cell2.innerHTML = data.empNo;
  cell3 = row.insertCell(2);
  cell3.innerHTML = data.salary;
  cell4 = row.insertCell(3);
  cell4.innerHTML = data.city;
  cell5 = row.insertCell(4);
  cell5.innerHTML = `<a onClick="onEditHandler(this)">Edit</a>
                        <a onClick="onDeleteHandler(this)">Delete</>`;
};

const reset = () => {
  document.getElementById('fullName').value = '';
  document.getElementById('empNo').value = '';
  document.getElementById('salary').value = '';
  document.getElementById('city').value = '';
};

const onEditHandler = (td) => {
  selected = td.parentElement.parentElement;
  document.getElementById('fullName').value = selected.cells[0].innerHTML;
  document.getElementById('empNo').value = selected.cells[1].innerHTML;
  document.getElementById('salary').value = selected.cells[2].innerHTML;
  document.getElementById('city').value = selected.cells[3].innerHTML;
};

const updateHandler = (data) => {
    selected.cells[0].innerHTML = data.fullName;
    selected.cells[1].innerHTML = data.empNo;
    selected.cells[2].innerHTML = data.salary;
    selected.cells[3].innerHTML = data.city;
}

const onDeleteHandler = (td) => {
    if (confirm('Are you sure to delete')) {
        row = td.parentElement.parentElement;
        document.getElementById("list").deleteRow(row.rowIndex);
        reset();
    }
}

const validate = () => {
    let valid = true;

    if (document.getElementById('fullName').value == '') {
        valid = false;
        document.getElementById('fullNameValidationError').classList.remove('hide');
    } else {
        valid = true;
        if (!document.getElementById('fullNameValidationError').classList.contains('hide')) {
            document.getElementById('fullNameValidationError').classList.add('hide');
        }
    }

    return valid;
}
