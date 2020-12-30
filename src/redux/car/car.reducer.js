import carTypes from "./car.types";

const INITIAL_STATE = {
  carName: "Toyota",
};

const carReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case carTypes.SET_CAR:
      return {
        ...state,
        carName: action.payload,
      };
    default:
      return state;
  }
};

export default carReducer;
