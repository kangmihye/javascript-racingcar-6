import { Console } from "@woowacourse/mission-utils";
import { INPUT_VIEW } from "../utils/Constants.js";

const InputView = {
	async readCarName() {
		return await Console.readLineAsync(INPUT_VIEW.askCarName);
	},
	// ...
};

export default InputView;
