const fs = require("fs");
const path = require("path");

const promptPath = path.join(__dirname, "..", "prompts", "startup-analysis.txt");
const companiesPath = path.join(__dirname, "..", "data", "companies.json");

const prompt = fs.readFileSync(promptPath, "utf8").toLowerCase();
const companies = JSON.parse(fs.readFileSync(companiesPath, "utf8"));
const companyName = process.argv[2];
// Add the required JSON keys here after updating the prompt.




if (!companyName) {
  console.error('Usage: node scripts/run-analysis.js "Company Name"');
  process.exit(1);
}

const company = companies.find(
  (entry) => entry.name.toLowerCase() === companyName.toLowerCase()
);

if (!company) {
  console.error(`Unknown company: ${companyName}`);
  process.exit(1);
}

const requiresStructuredOutput =
  prompt.includes("valid json") || prompt.includes("structured json");
const requiredFields = [
  "industry",
  "founder name",
  "country",
  "saudi relevance score",
  "confidence score",
];
const hasAllRequestedFields = requiredFields.every((field) => prompt.includes(field));
const requiresSnakeCase = prompt.includes("snake_case");
const requiresScoreRange =
  prompt.includes("1 to 10") || prompt.includes("1-10");

if (!requiresStructuredOutput || !hasAllRequestedFields) {
  console.log(company.summary);
  process.exit(0);
}

const result = {
  summary: company.summary,
  industry: company.industry,
  founder_name: company.founder_name,
  country: company.country,
  saudi_relevance_score: company.saudi_relevance_score,
  confidence_score: company.confidence_score,
};

function isSnakeCase(value) {
  return /^[a-z0-9]+(?:_[a-z0-9]+)*$/.test(value);
}

function isScoreInRange(value) {
  return typeof value === "number" && value >= 1 && value <= 10;
}

function validateResult(output) {
  for (const key of requiredKeys) {
    if (!(key in output)) {
      console.error(`Missing required field: ${key}`);
      process.exit(1);
    }
  }

  if (requiresSnakeCase) {
    for (const key of Object.keys(output)) {
      if (!isSnakeCase(key)) {
        console.error(`Field name is not snake_case: ${key}`);
        process.exit(1);
      }
    }
  }

  if (requiresScoreRange) {
    if (!isScoreInRange(output.saudi_relevance_score)) {
      console.error("saudi_relevance_score must be a number from 1 to 10");
      process.exit(1);
    }

    if (!isScoreInRange(output.confidence_score)) {
      console.error("confidence_score must be a number from 1 to 10");
      process.exit(1);
    }
  }
}

validateResult(result);
console.log(JSON.stringify(result, null, 2));
