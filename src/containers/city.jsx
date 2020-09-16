import React from 'react';



const City = (props) => {
  return (
    <div className="city">
      {props.city.name}
    </div>
  );
};

export default City;
