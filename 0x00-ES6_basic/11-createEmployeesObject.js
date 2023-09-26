export default function createEmployeesObject(departmentName, employees) {
  const objectName = {
    [departmentName]: employees,
  };
  return objectName;
}
