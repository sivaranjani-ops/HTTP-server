const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "output.txt");

fs.writeFile(filePath, "Node.js File System", (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("File created and written successfully");
  }
});