export default function getStudentIdsSum(ids) {
  return ids.reduce((ac, cur) => ac + cur.id, 0);
}
