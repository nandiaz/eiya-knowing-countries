import React from "react";
import { Input } from "../Input/Input";
import { Place } from "../Place/Place"
import './Countries.css'

const Countries = () => {
  const [country, setCountry] = React.useState([]);
  const [countries, setCountries] = React.useState([]);
  const [error, setError] = React.useState("Hola mundo");

  React.useEffect(() => {
    //console.log("useEffect");
    getCountries();
  }, []);

  const getCountries = async () => {
    try {
      const data = await fetch("https://restcountries.com/v2/all");
      const dataCountry = await data.json();

      console.log(dataCountry)
      setCountries(dataCountry);
      setError("");
    } catch {
      setError("Something went wrong, please try later");
    }
  };
  const getCountry = async (name) => {
    
     if(name === '') return
     const res = await fetch(`https://restcountries.com/v2/name/${name}`);
     const data = await res.json()
     setCountry(data)
      
      }
    
  

  // const getCountry = async (name) => {
    
  //   const controller = new AbortController();
  //   const options = {
  //     signal: controller.signal,
  //     method: "GET",
  //   };
  //   setTimeout(() => controller.abort(), 10000);
    
  //   try {
  //     const info = await (
  //       await fetch(`https://restcountries.com/v2/name/${name}`, options)
  //     ).json();
  //     setCountry(info[0]);
  //     setError("no");
      
  //   } catch {
  //     console.log("nothing");
  //     setError("Something went wrong, please try later")
  //   }
  
  // };

  // React.useEffect(() => {
  //   console.log("useEffect");
  //   if(name === '') getCountry(country);
  // }, [country]);
  // console.log(country);

  // const allCountries= getCountries.getAllCountries().map((names) =>{
  //      names.label = names["name"];
  // return names
  // });
const style = {
  border: '2px solid #04FB84',
  padding: '10px 10px 10px 10px',
  borderRadius: '40px',
  boxShadow: '5px 0px 5px 5px #04FB84'

}
 
  return (
    <div className="container" style={style}>
      
      <Input setInfo={getCountry} location={countries}
        selectCountry = {country}>
         
      </Input>

      <div className="container">
       
        {country.length === 0 ? (
          <h5>Select the country you want to travel to </h5>
        ) : !!country.length ? (
            <Place country = {country}></Place>
            
        ) : (
          <p>{error}</p>
        )}
      
      </div>
    </div>
  );
};

export default Countries;
