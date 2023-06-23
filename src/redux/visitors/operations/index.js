import { readAll } from "./readAll";
import { remove } from "./remove";
import { create } from "./create";
import { update } from "./update";

const visitorOperation = { readAll, remove, create, update };

export default visitorOperation;
