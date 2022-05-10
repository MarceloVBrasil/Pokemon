import React from 'react'
import { CloseButton } from '../Styles/Map--CityCloseButton.Styled'
import { CityDesc } from '../Styles/Map--CityDesc.Styled'
import { CityImage } from '../Styles/Map--CityImage.Styled'
import { CityName } from '../Styles/Map--CityName.Styled'
import { CitySightseeing } from '../Styles/Map--CitySightseeing.Styled'

export default function City({city, handleSelectId}) {
  return (
    <div>
      <CloseButton onClick={() => handleSelectId(undefined)}>&times;</CloseButton>
      <CityImage img={city.pic}/>
      <CityName>{city.name}</CityName>
      <CityDesc>{city.desc}</CityDesc>
      {city.sightseeing.map((sightseeing, index) => (
        <CitySightseeing key={index}>{sightseeing}</CitySightseeing>
      ))}
    </div>
  )
}
