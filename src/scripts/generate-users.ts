import { generateMock } from "@anatine/zod-mock";
import { userSchema } from "../schema/users.js";

const user = generateMock(userSchema);

console.log(user);