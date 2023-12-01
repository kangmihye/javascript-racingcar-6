import { Console } from "@woowacourse/mission-utils";
import OutputView from "../view/OutputView.js";

const OutputViewService = {
	printOnceRacingResult: (carList) => {
		Console.print("");
		carList.forEach((car) => {
			const [name, position] = car.getNameAndPosition();
			OutputView.printCarAndPosition(name, position);
		});
	},
};

export default OutputViewService;
