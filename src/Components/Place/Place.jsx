import React from 'react'

export const Place = ({country}) => {
  return (
    <div className= "container rounded-lg shadow-lg">
        {country.map((info) => {
              const { name, population, region, capital, flag } = info;
              return (
                <div>
                  <img src={flag} alt={name} className="img-responsive" width="300" height="200"></img>
                  <div className='p-4'>
                    <h3 className='font-bolf mb-4'>{name}</h3>
                    <p className='text-xs'>Capital: <span className='text-gray-700'>{capital}</span></p>
                    <p className='text-xs'>Population: <span className='text-gray-700'>{population}</span></p>
                    <p className='text-xs'>Region: <span className='text-gray-700'>{region}</span></p>
                    
                  </div>
                </div>
              );
            })}
    </div>
  )
}
