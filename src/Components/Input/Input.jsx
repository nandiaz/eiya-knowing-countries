import React from 'react'

export const Input = ({location, setInfo, selectCountry}) => {
   
  return (
    <div>
       <div className="form-floating col-md-3">
  <select className="form-control "  aria-label="Floating label select example" onChange={ (e) => setInfo(e.target.value)} >
  <option selected>Country</option>
    {location.map((place) => (
        <option value= {place.name} key={place.name}>{place.name}</option>
    ))}
    
    
  </select>
  
</div>
    </div>
  )
}
