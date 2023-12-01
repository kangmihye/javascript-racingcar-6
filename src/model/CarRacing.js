import CarRacingOnce from "./CarRacingOnce.js";
import OutputViewService from "../service/OutputViewService.js";

const CarRacing = (carList, tryCount) => {
	Array.from({ length: tryCount }).forEach(() => {
		carList = CarRacingOnce(carList);
		OutputViewService.printOnceRacingResult(carList);
		console.log("확인");
	});

	return carList;
};

export default CarRacing;
