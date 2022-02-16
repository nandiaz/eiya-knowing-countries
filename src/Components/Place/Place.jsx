import React from "react";

export const Place = ({ country }) => {
  const style = {
    background: "#049BB4",
    borderRadius: "30px",
    color: "#000000",
  };
  const margin = {
    marginTop: "20px",
  };
  return (
    <div className="container rounded-lg shadow-lg">
      {country.map((info) => {
        const {
          name,
          population,
          region,
          capital,
          flags,
          languages,
          currencies,
        } = info;
        return (
          <div className="container rounded-lg shadow-lg" style={margin}>
            <img
              src={flags.png}
              alt={name}
              className="img-responsive"
              width="350"
              height="200"
            ></img>
            <div className="p-4">
              <h3 className="fw-bold mb-2" style={style}>
                {name}
              </h3>
              <p className="text-xs">
                Capital: <span className="text-gray-700">{capital}</span>
              </p>
              <p className="text-xs">
                Population: <span className="text-gray-700">{population}</span>
              </p>
              <p className="text-xs">
                Region: <span className="text-gray-700">{region}</span>
              </p>
              <p className="text-xs">
                Languages:{" "}
                <span className="text-gray-700">{languages[0].name}</span>
              </p>
              <p className="text-xs">
                Currencies:{" "}
                <span className="text-gray-700">{currencies[0].name}</span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
