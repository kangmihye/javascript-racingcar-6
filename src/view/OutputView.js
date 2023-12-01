import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_VIEW } from "../utils/Constants.js";
import OutputViewService from "../service/OutputViewService.js";

const OutputView = {
	printGameStart() {
		Console.print(OUTPUT_VIEW.startGame); //바꾸고
	},
	printMenu() {
		Console.print(OUTPUT_VIEW);
	},
	// ...
};

export default OutputView;
