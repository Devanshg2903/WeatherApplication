import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOptions, GEO_API_URL } from "../../api";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = async (inputValue) => {
    // input value is that value which we write in search bar
    // console.log(inputValue)
    // let fetchResult = fetch(
    //   `${GEO_API_URL}/cities?minPopulation=10000&namePrefix=${inputValue}`,
    //   geoApiOptions
    // )
   // console.log(fetchResult)
    //console.log(fetchResult.json())
    const response = await fetch(
      `${GEO_API_URL}/cities?minPopulation=10000&namePrefix=${inputValue}`,
      geoApiOptions
    );
    // console.log(response)
    const response_1 = await response.json();
    //console.log(response_1)
    return {
      options: response_1.data.map((city) => {
        return {
          value: `${city.latitude} ${city.longitude}`,
          label: `${city.name}, ${city.countryCode}`,
        };
      }),
    };
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
     value={search}
     
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
