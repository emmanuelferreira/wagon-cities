import React, { Component } from 'react';
import City from './city';

class CityList extends Component {
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

export default CityList;
