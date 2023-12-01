const CarRacingOnce = (carList) => {
	carList.forEach((car) => {
		car.move();
	});

	return carList;
};

export default CarRacingOnce;
