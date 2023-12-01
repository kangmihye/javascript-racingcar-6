import carMovingRandomNumberGenerator from "../service/carMovingRandomNumberGenerator.js";

class Car {
	#name;
	#position = 0;

	constructor(name) {
		this.#name = name;
	}

	move() {
		const randomNumber = carMovingRandomNumberGenerator();
		if (randomNumber >= 4) {
			this.#position += 1;
			return true;
		}
		return false;
	}

	getNameAndPosition() {
		return [this.#name, this.#position];
	}
}

export default Car;
