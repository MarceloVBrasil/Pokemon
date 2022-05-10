import React, { useState } from 'react'
import Pokedex from './components/Pokedex'
import Sidebar from './components/Sidebar'
import Party from './components/Party'
import Map from './components/Map'
import './css/app.css'
import { MyPokemonsProvider } from './components/Contexts/MyPokemonsProvider'
import Fight from './components/Fight'

export default function App() {
  const [tab, setTab] = useState('Pokedex')

  const opt1 = <>
                  <Pokedex/><Sidebar changeTab={setTab}/>
              </>              
  
  const opt2 = <>
                  <Party/><Sidebar changeTab={setTab}/>
               </>

  const opt3 = <>
                  <Map/><Sidebar changeTab={setTab}/>
               </>

  const opt4 = <>
                <Fight/><Sidebar changeTab={setTab}/>
              </>
  return (
    <MyPokemonsProvider>
        {tab === 'Pokedex' ? opt1 : tab === 'Party' ? opt2 : tab === 'Map' ? opt3 : opt4}
    </MyPokemonsProvider>
  )
}
