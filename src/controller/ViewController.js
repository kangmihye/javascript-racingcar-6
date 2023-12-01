import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import inputErrorHandler from "../service/inputErrorHandler.js";
import { validateCarName, validateTryCount } from "../service/validateInput.js";
import InputViewService from "../service/InputViewService.js";

const ViewController = {
	async getCarName() {
		const inputName = await inputErrorHandler(InputView.readCarName, validateCarName);
		const parsedName = InputViewService.parseInput(inputName);
		console.log(parsedName);
	},
	async getTryCount() {
		await inputErrorHandler(InputView.readTryCount, validateTryCount);
	},
	async playGame() {
		await ViewController.getCarName();
		await ViewController.getTryCount();
	}, // 여기서 모델 선언해서
	// async replayGame() {},
};
export default ViewController;
