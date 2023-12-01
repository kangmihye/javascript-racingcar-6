import { ERROR } from "../utils/Constants.js";
import { isInvalidNameSize, isInvalidNumber } from "../utils/conditions.js";

export const validateCarName = (input) => {
	if (isInvalidNameSize(input)) throw new Error(ERROR.isInvalidNameSize);
};

export const validateTryCount = (input) => {
	if (isInvalidNumber(input)) throw new Error(ERROR.isInvalidNum);
};
