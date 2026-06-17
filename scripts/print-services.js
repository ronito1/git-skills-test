const services = require("../data/services.json");

for (const service of services) {
  console.log(`${service.name} (${service.owner})`);
}
