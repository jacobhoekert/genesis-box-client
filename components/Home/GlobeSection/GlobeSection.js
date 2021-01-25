import { World } from '../../GlobalCommunity/World/World'
import { CountriesWidget } from '../../GlobalCommunity/CountriesWidget/CountriesWidget'

export const GlobeSection = ({data}) => {
  return (
    <div id="globe-section">
      <CountriesWidget />
      <World />
    </div>
  )
}