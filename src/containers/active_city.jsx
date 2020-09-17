import React from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";


import { selectCity } from "../actions";

const ActiveCity = (props) => {
  if (!props.activeCity) {
    return (
      <div className="active-city">
        <p>Select a city...</p>
      </div>
    );
  }

  const url = `https://kitt.lewagon.com/placeholder/cities/${props.activeCity.slug}`;

  return (
    <div className="active-city">
      <h3>{props.activeCity.name}</h3>
      <p>{props.activeCity.address}</p>
      <img src={url} alt="Landscape city" width="100%" />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    activeCity: state.activeCity
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectCity }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ActiveCity);
