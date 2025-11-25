function getMostFuelEfficientCars(cars, brand) {
  const allEfficient = cars.every(item => item.fuelConsumption < 6);
  if (!allEfficient) return [];

  return cars
    .filter(item => item.brand === brand && item.fuelConsumption < 6)
    .sort((a, b) => a.fuelConsumption - b.fuelConsumption);
}

module.exports = getMostFuelEfficientCars;
