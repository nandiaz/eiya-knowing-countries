import React from 'react'

export const Place = (country) => {
  return (
    <div>Place
        {country.map((info) => {
              const { name, population, region, capital, flag } = info;
              return (
                <div>
                  <img src={flag} alt={name}></img>
                  <ul>
                    <li>{name}</li>
                    <li>{capital}</li>
                    <li>{population}</li>
                    <li>{region}</li>
                  </ul>
                </div>
              );
            })}
    </div>
  )
}
