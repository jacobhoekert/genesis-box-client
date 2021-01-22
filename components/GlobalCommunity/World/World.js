import React from 'react'
import { useState, useEffect, useRef } from 'react'
let Globe = () => null;
if (typeof window !== 'undefined') Globe = require('react-globe.gl').default;
import countriesJSON from './ne_110m_admin_0_countries.json'

export const World = () => {
  const globeEl = useRef(true);
  const [countries, setCountries] = useState({ features: []});

  useEffect(() => {
    setCountries(countriesJSON);

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
      altitude: 1.6
    });
  }, []);

  const handleGlobeClick = () => {
    globeEl.current.controls().autoRotate = false;
  }

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

  const setCountryLabel = ({ properties: d }) => {
    if (d.NAME == "Nepal") {
      return `<b style="font-size:20px;color:white">${d.NAME} </b>`
    } else {
      return null;
    }
  }

  const handleCountryHover = (country) => {
    if (country) {
      if (country.properties.NAME == "Nepal") {
        globeEl.current.controls().autoRotate = false;
        const elem = document.getElementById('globe-container');
        elem.style.cursor = country ? 'pointer' : null;
      } 
    } 
  } 

  const handleCountryClick = (country) => {
    globeEl.current.controls().autoRotate = false;
    console.log(country);
  } 

  return (
    <div id="globe-container">
      <Globe
        ref={globeEl}
        onGlobeClick={handleGlobeClick}
        backgroundColor="rgba(0,0,0,0)"
        globeImageUrl='/images/globe-texture-map3.svg'
        width={790}
        polygonAltitude={0.008}
        polygonsData={countries.features}
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
