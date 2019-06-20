// define project types in object to avoid errors by misspelling
const pStatus = {
  "prelaunch": "Pre-Launch",
  "Prototype": "Prototype",
  "beta": "BETA",
  "live": "Live",
  "inactive": "Inactive"
}

const pType = {
  "governance": "Governance",
  "defi": "DeFi",
  "payroll": "Payroll",
  "fiatramps": "Fiat Ramps",
  "cdpmgmt": "CDP MGMT",
  "enterprise": "Enterprise",
  "analytics": "Analytics"
}

// json-SCHEMA defintion that entries have to conform with
const Project = {
  "properties": {
    "name": { "type": "string" },
    "description": { "type": "string" },
    "learnmoreLink": { "type": "string" },
    "github": { "type": "string" },
    "twitter": { "type": "string" },
    "reddit": { "type": "string" },
    "discord": { "type": "string" },
    "location": { "type": "string" },
    "active": { "type": "boolean"},
    "type": { "type": "string", "enum": [...Object.values(pType)]},
    "status": { "type": "string", "enum": [...Object.values(pStatus)]},
  },
  "required": ["name", "description", "learnMoreLink", "active", "location", "type", "status"]
};

module.exports = {pStatus, pType, Project};
