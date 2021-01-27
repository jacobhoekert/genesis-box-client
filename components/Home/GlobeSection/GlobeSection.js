import { useEffect, useState } from 'react'
import { World } from '../../GlobalCommunity/World/World'
import { CountriesWidget } from '../../GlobalCommunity/CountriesWidget/CountriesWidget'

export const GlobeSection = ({countries}) => {
  const [selectedCountryIndex, setSelectedCountryIndex] = useState(0);
  const [sliderIndex, setSliderIndex] = useState(0);
  const [currentSliderCountry, setCurrentSliderCountry] = useState({});

  useEffect(() => {
  }, [])

  const selectCountry = (globeCountry) => {
    for (let i = 0; i < countries.length; i++) {
      if (globeCountry.properties.NAME.toLowerCase() == countries[i].countryName.toLowerCase()) {
        setSelectedCountryIndex(i);
      }
    }
  }

  const handleSliderChange = (sliderIndex) => {
    for (let i = 0; i < countries.length; i++) {
      if (i == sliderIndex) {
        setCurrentSliderCountry(countries[i]);
      }
    }
  }

  return (
    <div id="globe-section">
      <div className="title-container">
        <h1 className="genesis">genesis</h1>
        <h1 className="countries">countries</h1>
      </div>
      <CountriesWidget genesisCountries={countries} selectedCountryIndex={selectedCountryIndex} handleSliderChange={handleSliderChange}/>
      <World genesisCountries={countries} selectCountry={selectCountry} currentSliderCountry={currentSliderCountry}/>
    </div>
  )
}