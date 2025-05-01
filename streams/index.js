const fs = require("fs");

const readFile = fs.createReadStream("./sample.txt", { highWaterMark: 65536 }); /*default buffer size of each chunk i.e 65536 bytes*/

readFile.on("data", (chunk) => {
  console.log(chunk.toString(), chunk.length);
});

readFile.on("error", (err) => {
  console.log(err);
});

const writeFile = fs.createWriteStream("./write.txt")

writeFile.write("./sample.txt")
writeFile.end()