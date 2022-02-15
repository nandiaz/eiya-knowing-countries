import React from "react";
import { Input } from "../Input/Input";
import { Place } from "../Place/Place"

const Countries = () => {
  const [country, setCountry] = React.useState("");
  const [countries, setCountries] = React.useState([]);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    //console.log("useEffect");
    getCountries();
  }, []);

  const getCountries = async () => {
    try {
      const data = await fetch("https://restcountries.com/v2/all");
      const dataCountry = await data.json();

      //onsole.log(dataCountry)
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

      React.useEffect(() => {
        //console.log("useEffect");
        getCountry();
      }, []);
      console.log(country)
    
  

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

    
  return (
    <>
      <div>Please, select the countries you wish to compare</div>
      <Input setInfo={getCountry} location={countries}
        selectCountry = {country}>
         
      </Input>

      <div>
        {countries ? (
          <p>Select the country you want to travel to </p>
        ) : !error ? (
          <div>
          {countries.map ((country, index) => (
            <div>
            <Place countries = {country} key= {index}></Place>
          </div>
          ))
         
        }
        </div>
        ) : (
          <p>{error}</p>
        )}
      </div>
    </>
  );
};

export default Countries;
