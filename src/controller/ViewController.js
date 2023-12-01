import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import inputErrorHandler from "../service/inputErrorHandler.js";
import { validateCarName, validateTryCount } from "../service/validateInput.js";
import InputViewService from "../service/InputViewService.js";
import OutputViewService from "../service/OutputViewService.js";
import CarRacingOnce from "../model/CarRacingOnce.js";
import Car from "../model/Car.js";

const ViewController = {
	async getCarName() {
		const inputName = await inputErrorHandler(InputView.readCarName, validateCarName);
		const parsedName = InputViewService.parseInput(inputName);
		console.log(parsedName);
		return parsedName;
	},
	async getTryCount() {
		const inputCnt = await inputErrorHandler(InputView.readTryCount, validateTryCount);
		return Number(inputCnt);
	},
	generateCarList(carNames) {
		const carList = [];

		carNames.forEach((name) => {
			carList.push(new Car(name));
		});

		return carList;
	},
	async playGame() {
		const carNames = await ViewController.getCarName();
		const tryCount = await ViewController.getTryCount();
		let carList = ViewController.generateCarList(carNames);

		Array.from({ length: tryCount }).forEach(() => {
			carList = CarRacingOnce(carList);
			OutputViewService.printOnceRacingResult(carList);
		});

		return carList;
	},
	resultGame(carList) {
		const positions = [];
		let winners = [];

		carList.forEach((car) => {
			const [winner, position] = car.getNameAndPosition();
			positions.push(position);
			winners.push(winner);
		});

		const maxPosition = Math.max(...positions);

		winners = winners.filter((_, idx) => {
			return positions[idx] === maxPosition;
		});

		OutputView.printGameResult(winners);
	},
};
export default ViewController;
