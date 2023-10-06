interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student01: Student = {
  firstName: 'Fred',
  lastName: 'Mathias',
  age: 26,
  location: 'Nigeria',
};

const student02: Student = {
  firstName: 'Joy',
  lastName: 'Ita',
  age: 25,
  location: 'Abuja',
};

const studentsList: Student[] = [student01, student02];
const table = document.createElement('table');
const tbody = document.createElement('tbody');

table.style.background = 'purple';
table.appendChild(tbody);

studentsList.forEach((student: Student): void => {
  const row = document.createElement('tr');
  const nameCell = document.createElement('td');
  const locationCell = document.createElement('td');

  nameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  nameCell.style.border = '1px solid gray';
  locationCell.style.border = '1px solid gray';

  nameCell.style.padding = '5px';
  locationCell.style.padding = '5px';

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});
document.body.appendChild(table);
