import carTypes from "./car.types";

export const setCar = (carName) => ({
  type: carTypes.SET_CAR,
  payload: carName,
});
