const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "..", "data", "services.json");
const services = JSON.parse(fs.readFileSync(filePath, "utf8"));

for (const service of services) {
  const {priority} = service;
  console.log(`${service.name} | owner=${service.owner} |  priority=${priority}`);
}
