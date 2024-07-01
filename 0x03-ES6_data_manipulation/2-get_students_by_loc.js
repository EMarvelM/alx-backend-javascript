export default function getStudentsByLocation(students, city) {
  if (!Array.isArray(students)) return [];

  return students.filter((obj) => Object.values(obj)[2] === city);
}
