import React from 'react'

export const Input = ({ children, location, setInfo}) => {
  return (
    <div>
       <div className="form-floating">
  <select className="form-select" id={children}  value={location ? location : ""} onChange = {(e) => setInfo(e.target.value)} aria-label="Floating label select example">
    {/* {
        option.map((place) => (
<option value={place}>{place}</option>
        ))
    } */}
    {location.map((place) => (
        <option value= {place} key={place.name}>{place.name}</option>
    ))}
    
    
  </select>
  <label >Country</label>
</div>
    </div>
  )
}
