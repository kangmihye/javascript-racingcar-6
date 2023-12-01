import { Console } from "@woowacourse/mission-utils";
import { INPUT_VIEW } from "../utils/Constants.js";

const InputView = {
	async readPrice() {
		// 함수명 바꾸고
		return await Console.readLineAsync(INPUT_VIEW.askPrice); // 변수명 바꾸고
	},
	// ...
};

export default InputView;
