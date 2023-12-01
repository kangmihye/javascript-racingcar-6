import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_VIEW } from "../utils/Constants.js";

const OutputView = {
	printCarAndPosition(name, position) {
		Console.print(`${name} : ${"-".repeat(position)}`); //바꾸고
	},
	// ...
};

export default OutputView;
