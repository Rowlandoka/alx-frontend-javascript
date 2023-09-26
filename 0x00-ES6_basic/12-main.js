import createEmployeesObject from './11-createEmployeesObject';
import createReportObject from './12-createReportObject';

const employees = {
  ...createEmployeesObject('Engineering', ['Steve', 'Bob']),
  ...createEmployeesObject('Marketing', ['Fred', 'Jane']),
};

const report = createReportObject(employees);
console.log(report.allEmployees);
console.log(report.getNumberOfDepartments(report.allEmployees));
