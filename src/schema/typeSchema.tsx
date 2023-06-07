import { FromSchema } from "json-schema-to-ts";

export const playerResourceDtoSchema ={
  "type": "object",
  "properties": {
    "resourceName": { "type": "string" },
    "amount": { "type": "integer" },
    "playerName": { "type": "string" }
  },
  "required": ["resourceName", "amount", "playerName"]
} as const;
