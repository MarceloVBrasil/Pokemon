import React from 'react'
import { SidebarContainer } from '../Styles/Sidebar--Container'
import { useResize } from './Hooks/useResize'
import pokedex from '../images/pokedex-icon.png'
import map from '../images/map.PNG'
import fight from '../images/fight.png'
import pikachu from '../images/pikachu.PNG'

export default function Sidebar({changeTab}) {
    const [target, currentSize] = useResize()
    const {width, height} = currentSize

    const onHover = width > 100;

  return (
    <SidebarContainer ref={target} >
        {onHover && 
            <>
                <img src={pokedex} onClick={() => changeTab('Pokedex')}/>
                <img src={pikachu} onClick={() => changeTab('Party')}/>
                <img src={map} onClick={() => changeTab('Map')}/>
                <img src={fight} onClick={() => changeTab('Fight')}/>
            </>
        }
    </SidebarContainer>
  )
}
