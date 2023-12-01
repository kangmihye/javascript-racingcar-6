import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import inputErrorHandler from "../service/inputErrorHandler.js";
import { validateCarName } from "../service/validateInput.js";
import InputViewService from "../service/InputViewService.js";

const ViewController = {
	// gameStart() {
	// 	// 함수명이랑 바꿔라~~~
	// 	OutputView.printGameStart();
	// },

	async getCarName() {
		const inputName = await inputErrorHandler(InputView.readCarName, validateCarName);
		const parsedName = InputViewService.parseInput(inputName);
		console.log(parsedName);
	},
	async playGame() {
		await ViewController.getCarName();
	}, // 여기서 모델 선언해서
	// async replayGame() {},
};
export default ViewController;
