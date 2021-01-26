import React from 'react'
import { useState, useEffect, useRef } from 'react'
let Globe = () => null;
if (typeof window !== 'undefined') Globe = require('react-globe.gl').default;
import countriesJSON from './countries.json'

export const World = props => {
  const globeEl = useRef(true);
  const [globeCountries, setGlobeCountries] = useState({ features: []});

  useEffect(() => {
    setGlobeCountries(countriesJSON);

    // change globe lighting
    setTimeout(() => { // wait for scene to be populated (asynchronously)
      const directionalLight = globeEl.current.scene().children.find(obj3d => obj3d.type == 'DirectionalLight');
      directionalLight.visible = false;
      const ambientLight = globeEl.current.scene().children.find(obj3d => obj3d.type == 'AmbientLight');
      ambientLight.intensity = 1.6;
    });
    globeEl.current.controls().enableZoom = false;
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = 1.0;
    globeEl.current.pointOfView({
      lat: 27.7172,
      lng: 85.3240,
      altitude: 1.4
    });
  }, []);

  // when slider changes, globe spins to slider country
  useEffect(() => {
    if (props.currentSliderCountry.countryName) {
      const latitude = props.currentSliderCountry.countryLatitude;
      const longitude = props.currentSliderCountry.countryLongitude;
      globeEl.current.controls().enablePan = true;
      globeEl.current.controls().panSpeed = true;
      globeEl.current.pointOfView({
        lat: latitude,
        lng: longitude,
        altitude: 1.4
      }, [1800]);
      globeEl.current.controls().autoRotate = false;
      
    }
  }, [props.currentSliderCountry])

  const handleGlobeClick = () => {
    globeEl.current.controls().autoRotate = false;
  }

  const getCountryColor = (globeCountry) => {
    for (const genesisCountry of props.genesisCountries) {
      if (globeCountry.properties.NAME.toLowerCase() == genesisCountry.countryName.toLowerCase()) {
        return '#1c6e8a'
      }
    }
    return '#124658'
  }

  const getCountryStrokeColor = (globeCountry) => {
    for (const genesisCountry of props.genesisCountries) {
      if (globeCountry.properties.NAME.toLowerCase() == genesisCountry.countryName.toLowerCase()) {
        return '#fff'
      }
    }
    return '#33788f'
  }

  const setCountryLabel = (globeCountry) => {
    for (const genesisCountry of props.genesisCountries) {
      if (globeCountry.properties.NAME.toLowerCase() == genesisCountry.countryName.toLowerCase()) {
        return `<b style="font-size:20px;color:white">${globeCountry.properties.NAME} </b>`
      }
    }
    return null;
  }

  const handleCountryHover = (globeCountry) => {
    if (globeCountry) {
      const elem = document.getElementById('globe-container');
      for (const genesisCountry of props.genesisCountries) {
        if (globeCountry.properties.NAME.toLowerCase() == genesisCountry.countryName.toLowerCase()) {
          globeEl.current.controls().autoRotate = false;
          elem.style.cursor = 'pointer';
          return 0;
        }
      }
      elem.style.cursor = null;
    } 
  } 

  const handleCountryClick = (globeCountry) => {
    for (const genesisCountry of props.genesisCountries) {
      if (globeCountry.properties.NAME.toLowerCase() == genesisCountry.countryName.toLowerCase()) {
        globeEl.current.controls().autoRotate = false;
        props.selectCountry(globeCountry);
      }
    }
  } 

  return (
    <div id="globe-container">
      <Globe
        ref={globeEl}
        onGlobeClick={handleGlobeClick}
        backgroundColor="rgba(0,0,0,0)"
        showAtmosphere={false}
        globeImageUrl='/images/globe-texture-map3.svg'
        width={875}
        polygonAltitude={0.008}
        polygonsData={globeCountries.features}
        polygonCapColor={getCountryColor}
        polygonSideColor={() => '#33788f'}
        polygonStrokeColor={getCountryStrokeColor}
        onPolygonClick={handleCountryClick}
        polygonLabel={setCountryLabel}
        onPolygonHover={handleCountryHover}
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
