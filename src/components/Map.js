import React, { useState } from 'react'
import { MapContainer } from '../Styles/Map--MapContainer.Styled'
import Location from './Location'
import { CityContainer } from '../Styles/Map--CityContainer'
import City from './City'
import cities from '../data/cities'

export default function Map() {
    const [selectedCityId, setSelectedCityId] = useState()
    const [pokemonCities, setPokemonCities] = useState(cities)
    const selectedCity = pokemonCities.find(city => city.id === selectedCityId)

  return (<>
            <MapContainer>
                {/* Cinnabar Island */}
                <Location bottom={'20px'} left={'220px'} clickEvent={() => handleCitySelect(1)}/>

                {/* Pallet Town */}
                <Location bottom={'210px'} left={'225px'} clickEvent={() => handleCitySelect(2)}/>

                {/* Viridian City */}
                <Location bottom={'340px'} left={'240px'} clickEvent={() => handleCitySelect(3)}/>

                {/* Pewter City */}
                <Location bottom={'520px'} left={'240px'} clickEvent={() => handleCitySelect(4)}/>

                {/* Indigo Plateau */}
                <Location bottom={'600px'} left={'110px'} clickEvent={() => handleCitySelect(5)}/>

                {/* Fuchsia City */}
                <Location bottom={'140px'} left={'490px'} clickEvent={() => handleCitySelect(6)}/>

                {/* Vermilion City */}
                <Location bottom={'280px'} left={'630px'} clickEvent={() => handleCitySelect(7)}/>

                {/* Saffron City */}
                <Location bottom={'430px'} left={'630px'} clickEvent={() => handleCitySelect(8)}/>

                {/* Lavender Town */}
                <Location bottom={'410px'} left={'880px'} clickEvent={() => handleCitySelect(9)}/>

                {/* Celadon City */}
                <Location bottom={'420px'} left={'470px'} clickEvent={() => handleCitySelect(10)}/>

                {/* Cerulean City */}
                <Location bottom={'540px'} left={'630px'} clickEvent={() => handleCitySelect(11)}/>
            </MapContainer>

            {selectedCity && <CityContainer>
                                <City city={selectedCity} handleSelectId={setSelectedCityId}/>
                            </CityContainer>}
         </>
  )

    function handleCitySelect(id)
    {
        setSelectedCityId(id)        
    }
}