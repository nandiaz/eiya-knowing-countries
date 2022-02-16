import React from "react";

export const Input = ({ location, setInfo, selectCountry }) => {
  const style = {
    bg : 'black',
  }
  return (
    <div>
     
        <select
          className="form-select-font-size bg-dark bg-gradient text-white "
          style={style}
          aria-label="Default select example"
          onChange={(e) => setInfo(e.target.value)}
        >
          <option selected>Country</option>
          {location.map((place) => (
            <option value={place.name} key={place.name}>
              {place.name}
            </option>
          ))}
        </select>
     
    </div>
  );
};
