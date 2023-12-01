import { ERROR } from "../utils/Constants.js";
import { isInvalidNameSize } from "../utils/conditions.js";

export const validateCarName = (input) => {
	if (isInvalidNameSize(input)) throw new Error(ERROR.isInvalidNameSize);
};
