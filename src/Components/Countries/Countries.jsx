import React from "react";
import { Input } from "../Input/Input";

const Countries = () => {
  const [countries, setCountries] = React.useState([]);

  React.useEffect(() => {
    console.log("useEffect");
    getCountries();
  }, []);

  const getCountries = async () => {
    const data = await fetch("https://restcountries.com/v2/all");
    const country = await data.json();

    //console.log(country)
    setCountries(country);
  };
  const allNames = countries.map(item => item.name)
  // const allCountries= getCountries.getAllCountries().map((names) =>{
  //      names.label = names["name"];
  // return names
  // });

  return (
    <>
      <div>Please, select the countries you wish to compare</div>
      <Input 
      setInfo = {setCountries} 
      location= {countries}
      options = {allNames}>
          Country
      </Input>
     
    </>
  );
};

export default Countries;
