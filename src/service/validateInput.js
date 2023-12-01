import { ERROR } from "../utils/Constants.js";
import { isInvalidNumber, isDuplicated } from "../utils/conditions.js";

export const validatePrice = (input) => {
	//함수명 바꿔라~~
	if (isInvalidNumber(input)) throw new Error(ERROR.isInvalidNum);
	if (isDuplicated(input)) throw new Error(ERROR.isDuplicated);
};
