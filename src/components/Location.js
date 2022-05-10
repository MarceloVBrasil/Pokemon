import React from 'react'
import { LocationOuterContainer, LocationInnerContainer } from '../Styles/Map--Location'

export default function Location({top, right, bottom, left, clickEvent}) {
  return (
    <LocationOuterContainer top={top} right={right} bottom={bottom} left={left} onClick={clickEvent}>
        <LocationInnerContainer/>
    </LocationOuterContainer>
  )
}
