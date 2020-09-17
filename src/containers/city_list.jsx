import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import City from './city';

import { setCities } from "../actions";

class CityList extends Component {
  componentWillMount() {
    this.props.setCities();
  }

  render() {
    const renderList = () => {
      return this.props.cities.map((city, index) => {
        return (
          <City
            city={city}
            key={city.address}
            index={index}
          />
        );
      });
    };

    return (
      <div className="cities">
        {renderList()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setCities }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
