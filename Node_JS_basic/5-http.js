const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const students = lines.slice(1);

      const fields = {};

      students.forEach((student) => {
        const parts = student.split(',');
        const firstname = parts[0];
        const field = parts[3];

        if (!fields[field]) fields[field] = [];
        fields[field].push(firstname);
      });

      let result = `Number of students: ${students.length}\n`;

      Object.keys(fields).forEach((field) => {
        result += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
      });

      resolve(result.trim());
    });
  });
}

module.exports = countStudents;