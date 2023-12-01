import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_VIEW } from "../utils/Constants.js";

const OutputView = {
	printCarAndPosition(name, position) {
		Console.print(`${name} : ${"-".repeat(position)}`);
	},
	printGameResult(winners) {
		Console.print(`${OUTPUT_VIEW.printWinner}${winners.join(" ,")}`);
	},
};

export default OutputView;
