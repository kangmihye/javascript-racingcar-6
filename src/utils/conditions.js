import {} from "../utils/Constants.js";

export const isInvalidNumber = (input) => {
	// true면 숫자아님
	input = Number(input.replaceAll(" ", ""));
	return !Number.isInteger(input) || Number.isNaN(input);
};

export const isInvalidRange = (input) => {
	//true면 범위 밖
	input = Number(input.replaceAll(" ", ""));
	return input < 1 || input > 31;
};

export const isDuplicated = (input) => {
	//true면 중복
	return input.length !== new Set(input).size;
};