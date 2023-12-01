import { Random } from "@woowacourse/mission-utils";

const carMovingRandomNumberGenerator = () => {
	return Random.pickNumberInRange(0, 9);
};

export default carMovingRandomNumberGenerator;
