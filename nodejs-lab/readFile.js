const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "output.txt");

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});