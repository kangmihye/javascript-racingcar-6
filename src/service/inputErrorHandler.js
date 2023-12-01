import { Console } from "@woowacourse/mission-utils";

const inputErrorHandler = async (inputView, validator) => {
	let input = await inputView();
	try {
		validator(input);
	} catch (error) {
		Console.print(error.toString());
		input = await inputErrorHandler(inputView, validator);
	}
	return input;
};

export default inputErrorHandler;
