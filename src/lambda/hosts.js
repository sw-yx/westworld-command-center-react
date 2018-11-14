const fs = require('fs');
const path = require('path');
export function handler(event, context, callback) {
  // console.log('queryStringParameters', event.queryStringParameters);
  // const db = fs.readFileSync(path.resolve('../db.json'));
  // const db = fs.readFileSync('../db.json');
  const db = fs.readFileSync(path.resolve('db.json'));
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(JSON.parse(db).hosts)
  });
}
