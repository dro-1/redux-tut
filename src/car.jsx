import React from "react";
import { connect } from "react-redux";
import { setCar } from "./redux/car/car.actions";

const Car = ({ carName, setCar }) => {
  return (
    <div>
      {carName}
      <button onClick={() => setCar("Venza")}>Update Car Name</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  carName: state.car.carName,
});

const mapDispatchToProps = (dispatch) => ({
  setCar: (carName) => dispatch(setCar(carName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Car);
