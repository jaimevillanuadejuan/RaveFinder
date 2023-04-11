import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import Calendar from "react-calendar";
import axios from "axios";

import videoBanner from "../../assets/videos/VideoBanner.mp4";

import "./SearchForm.scss";
import "./Calendar.scss";

const SearchForm = ({ handleSetEvents }) => {
  const apiKey = "ZamfNY5YiJEo29VCYjPTw0SZN0bfIE7w";
  //We create our variable to register the input value typed on the search bar
  const [search, setSearch] = useState("");

  //We create our state variables to store the values the user selects in the form
  const [date, setDate] = useState(new Date());
  const [price, setPrice] = useState(null);
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  //We create the arrays to list the options in the selectors

  const priceOptions = [
    { value: 50, label: " 50" },
    { value: 100, label: " 100" },
    { value: 150, label: " 150" },
    { value: 200, label: " 200" },
  ];
  const [cityOptions, setCityOptions] = useState([]);
  const [countryOptions, setCountryOptions] = useState([]);

  //We declare useNavogate to forward the user to Events Page after the form has been submitted
  const navigate = useNavigate();

  //We make an API call to Countries & Cities API to get the list of countries
  const handleFillCountryList = (e) => {
    axios
      .get("https://countriesnow.space/api/v0.1/countries")
      .then((response) => {
        const countryList = response.data.data;
        setCountryOptions(
          countryList.map((item) => {
            return { value: item.country, label: item.country };
          })
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };
  /*We make an API call to Countries & Cities API to get the list of cities 
  for the selected country stored in our state variable country*/
  const handleFillCityList = (e) => {
    console.log("<country search form", country);
    axios
      .post("https://countriesnow.space/api/v0.1/countries/cities", {
        country: country.value,
      })
      .then((response) => {
        const cityList = response.data.data;
        console.log("city", cityList);
        setCityOptions(
          cityList.map((item) => {
            return { value: item, label: item };
          })
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleEventsSearch = (e) => {
    //We prevent the page from loading again after the user clicks on the "find events" button
    e.preventDefault();
    //if (!search || !date || !country.value || !city.value) {
    if (!search || !date || !country || !city) {
      if (!search) {
        alert(
          "You need to type the name of an artist before earching for events!"
        );
      }
      if (!date) {
        alert("You need to select a date before earching for events!");
      }
      if (!country) {
        alert(
          "You need to select a country first before searching for events!"
        );
      }
      if (!city) {
        alert("You need to select a city first before searching for events!");
      }
    }
    if (search && date && country && city) {
      /*If we all the inputs in the form have been introduced we do a GET request 
      to retrieve all the events in the API using the parameters*/
      console.log(city);

      axios
        .get(
          "https://app.ticketmaster.com/discovery/v2/events/?keyword=" +
            search +
            "&city=" +
            city.value +
            "&apikey=" +
            apiKey
        )
        .then((response) => {
          console.log("responseÑ¨", response.data);
          if (response.data._embedded) {
            const eventList = response.data._embedded.events;
            console.log("event List: ", eventList);
            /*We create an array to set the eventList called combined that
          wil be either a combination of eventListFiltered and eventListFilteredNoMin
          or just eventListFiltered*/
            let combined = [];
            //We check if there's at least an event that has no priceRange
            const noPriceRange = eventList.some((event) => !event.priceRanges);
            console.log(noPriceRange);
            let eventListFiltered = [];
            eventListFiltered = eventList.filter((event) => {
              console.log("price: ", price);
              if (event.priceRanges)
                return event.priceRanges[0].min < price.value;
            });
            console.log("eventListFilterd: ", eventListFiltered);
            combined = eventListFiltered;

            if (noPriceRange) {
              const eventListFilteredNoMin = eventList.filter(
                (event) => !event.priceRanges
              );
              combined = [...eventListFilteredNoMin];
              console.log("eventListfilterednoMin: ", eventListFilteredNoMin);
              console.log("combined: ", combined);
            }
            handleSetEvents(combined);
            //We reset all the inputs from the form
            setPrice(null);
            setCountry("");
            setCity("");
            setSearch("");
            navigate("/events");
          } else {
            alert("No events were found with the selected filters");
          }
        });
    }
  };
  //On component mount when Home loads for the first time we fill the country list
  useEffect(() => {
    handleFillCountryList();
  }, []);
  //If our state variable country changes we call handleFillCityList to fill cityOptions
  useEffect(() => {
    if (country) handleFillCityList();
  }, [country]);

  return (
    <section className="banner">
      <video className="banner-video" muted autoPlay loop>
        <source src={videoBanner} type="video/mp4" />
      </video>
      <form className="search-form" onSubmit={handleEventsSearch}>
        <div className="search-bar__container">
          <input
            className="search-bar"
            type="text"
            placeholder="Search for an artist/s"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="search-inputs">
          <div className="search-inputs__date search-input">
            <Calendar
              className="react-calendar"
              onChange={setDate}
              value={date}
            />
          </div>
          <div className="search-inputs__price search-input">
            <Select
              placeholder=" Add price"
              value={price}
              options={priceOptions}
              onChange={setPrice}
            />
          </div>
          <div className="search-inputs__country search-input">
            <Select
              placeholder=" Add country"
              options={countryOptions}
              value={country}
              onChange={setCountry}
            />
          </div>
          <div className="search-inputs__city search-input">
            <Select
              placeholder=" Add city"
              options={cityOptions}
              value={city}
              onChange={setCity}
            />
          </div>
        </div>
        <button className="search__button" type="submit">
          find events
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
