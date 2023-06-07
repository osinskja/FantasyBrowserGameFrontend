import { FromSchema } from "json-schema-to-ts";
import { playerResourceDtoSchema } from "../schema/typeSchema";

export type PlayerResourceDto = FromSchema<typeof playerResourceDtoSchema>;