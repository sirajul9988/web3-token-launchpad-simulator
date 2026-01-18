import { connectRPC } from "./rpc.client.js";
import { loadParticipants } from "./participant.registry.js";
import { allocateTokens } from "./allocation.engine.js";
import { validateLimits } from "./limit.validator.js";
import { generateReport } from "./analytics.report.js";
import { NETWORK } from "./network.config.js";

console.log("Web3 Token Launchpad Simulator");
console.log("Active Network:", NETWORK);

const provider = connectRPC();
const participants = loadParticipants();

const allocations = allocateTokens(participants, 100000);
const validation = validateLimits(allocations);

generateReport(allocations, validation);
