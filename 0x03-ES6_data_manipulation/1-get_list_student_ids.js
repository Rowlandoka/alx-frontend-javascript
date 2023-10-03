export default function getListStudentIds(lid) {
  if (Array.isArray(lid)) {
    return lid.map((ids) => ids.id);
  }
  return [];
}
