import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import carReducer from "./car/car.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["car"],
};

const rootReducer = combineReducers({
  car: carReducer,
});

export default persistReducer(persistConfig, rootReducer);
