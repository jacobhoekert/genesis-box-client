import { useState, useEffect, useRef } from 'react'
import dynamic from 'next/dynamic';
const Globe = dynamic(import('react-globe.gl'), { ssr: false });
import countriesJSON from './ne_110m_admin_0_countries.json'
import placesJSON from './places.json'

export const World = () => {
  const [countries, setCountries] = useState({ features: []});
  const [places, setPlaces] = useState([]);
  const [pins, setPins] = useState([]);

  useEffect(() => {
    setCountries(countriesJSON);
    setPlaces(placesJSON);
    setPins({
      features: [
        {
          properties: {
            latitude: 41.9000122264,
            longitude: 12.4478083889,
            name: "Vatican City",
            pop_max: 5000000
          }
        }
      ],
    })

    // setTimeout(() => { // wait for scene to be populated (asynchronously)
    //   const directionalLight = globeEl.current.scene().children.find(obj3d => obj3d.type === 'DirectionalLight');
    //   directionalLight && directionalLight.position.set(1, 1, 1); // change light position to see the specularMap's effect
    // });
    console.log(countriesJSON);
  }, []);

  const getCountryColor = (country) => {
    if (country.properties.NAME == "Nepal") {
      return '#1c6e8a'
    } else {
      return '#124658'
    }
  }

  const getCountryStrokeColor = (country) => {
    if (country.properties.NAME == "Nepal") {
      return '#fff'
    } else {
      return '#33788f'
    }
  }

  const getCountryAltitude = (country) => {
    if (country.properties.NAME == "Italy") {
      return 0.06
    } else {
      return 0.01
    }
  }

  const handleCountryClick = (country) => {
    console.log(country);
  }

  return (
    <div className="globe-container">
      <Globe
        backgroundColor='white'
        globeImageUrl='/images/globe-texture-map3.svg'
        width={575}
        polygonAltitude={0.008}
        polygonsData={countries.features}
        polygonCapColor={getCountryColor}
        polygonSideColor={() => '#33788f'}
        polygonStrokeColor={getCountryStrokeColor}
        onPolygonClick={handleCountryClick}
        // pointsData={pins.features}
        // pointLat={d => d.properties.latitude}
        // pointLng={d => d.properties.longitude}
        // pointRadius={0.2}
        // pointColor={() => "#83ad4c"}
        // pointAltitude={0.2}
        // hexPolygonsData={countries.features}
        // hexPolygonResolution={3}
        // hexPolygonMargin={0.3}
        // hexPolygonColor={getCountryColor}
        // hexPolygonCurvatureResolution={10}
        // hexPolygonMargin={0.5}
      />
    </div>
  )
}
