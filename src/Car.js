import { CAR } from "./Constants.js";
import { Random, Console } from "@woowacourse/mission-utils";

class Car {
	#name;
	#steps;
	constructor(name) {
		if (name.length > CAR.nameLength)
			throw "자동차 이름의 길이는 5자이하여야 합니다";
		this.#name = name;
		this.#steps = "";
	}

	get name() {
		return this.#name;
	}

	get steps() {
		return this.#steps;
	}

	get printCarStpes() {
		return Console.print(`${this.#name} : ${this.#steps}`);
	}

	canMoveStep() {
		const number = Random.pickNumberInRange(0, 9);
		// console.log("랜덤숫자: ", number); //여기 나중에 지움
		number >= CAR.StepsNumber && (this.#steps += "-");
		return this;
	}
}

export default Car;
// const car = new Car("차1");
// for (let i = 0; i < 5; i++) {
// 	car.canMoveStep();
// }
// car.printCarStpes;
