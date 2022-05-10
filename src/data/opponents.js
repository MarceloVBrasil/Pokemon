import brock from '../images/opponents/brock.PNG'
import misty from '../images/opponents/misty.PNG'
import surge from '../images/opponents/surge.PNG'
import erika from '../images/opponents/erika.PNG'
import koga from '../images/opponents/koga.PNG'
import sabrina from '../images/opponents/sabrina.PNG'
import blaine from '../images/opponents/blaine.PNG'
import giovanni from '../images/opponents/giovanni.PNG'

const opponents = [
    {
        id: 1,
        name: "Brock",
        pic: brock,
        pokemons: [
            {
                id: 95,
                name: "Onix",
                pic: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png"
            },
            {
                id: 76,
                name: "Golem",
                pic: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png"
            },
            {
                id: 142,
                name: "Aerodactyl",
                pic: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png"
            },
            {
                id: 141,
                name: "Kabutops",
                pic: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png"
            },
            {
                id: 139,
                name: "Omastar",
                pic: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png"
            }
        ]
    },
    {
        id: 2,
        name: "Misty",
        pic: misty,
        pokemons: [
            {
                id: 55,
                name: "Golduck",
                pic: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png"
            },
            {
                id: 130,
                name: "Gyarados",
                pic: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png"
            },
            {
                id: 121,
                name: "Starmie",
                pic: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png"
            },
            {
                id: 134,
                name: "Vaporeon",
                pic: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png"
            },
            {
                id: 87,
                name: "Dewgong",
                pic: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png"
            }
        ]
    },
    {
        id: 3,
        name: "Lt.Surge",
        pic: surge,
        pokemons: [
            {
                id: 101,
                name: "Electrode",
                pic: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png"
            },
            {
                id: 26,
                name: "Raichu",
                pic: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png"
            },
            {
                id: 82,
                name: "Magneton",
                pic: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png"
            },
            {
                id: 125,
                name: "Electabuzz",
                pic: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png"
            },
            {
                id: 135,
                name: "Jolteon",
                pic: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png"
            }
        ]
    },
    {
        id: 4,
        name: "Erika",
        pic: erika,
        pokemons: [
            {
                id: 114,
                name: "Tangela",
                pic: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png"
            },
            {
                id: 103,
                name: "Exeggutor",
                pic: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png"
            },
            {
                id: 45,
                name: "Vileplume",
                pic: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png"
            },
            {
                id: 71,
                name: "Victreebel",
                pic: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png"
            },
            {
                id: 47,
                name: "Parasect",
                pic: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png"
            }
        ]
    },
    {
        id: 5,
        name: "Koga",
        pic: koga,
        pokemons: [
            {
                id: 73,
                name: "Tentacruel",
                pic: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png"
            },
            {
                id: 110,
                name: "Weezing",
                pic: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png"
            },
            {
                id: 49,
                name: "Venomoth",
                pic: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png"
            },
            {
                id: 42,
                name: "Golbat",
                pic: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png"
            },
            {
                id: 89,
                name: "Muk",
                pic: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png"
            }
        ]
    },
    {
        id: 6,
        name: "Sabrina",
        pic: sabrina,
        pokemons: [
            {
                id: 122,
                name: "Mr.Mime",
                pic: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png"
            },
            {
                id: 124,
                name: "Jynx",
                pic: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png"
            },
            {
                id: 97,
                name: "Hypno",
                pic: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png"
            },
            {
                id: 80,
                name: "Slowbro",
                pic: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png"
            },
            {
                id: 65,
                name: "Alakazam",
                pic: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png"
            }
        ]
    },
    {
        id: 7,
        name: "Blaine",
        pic: blaine,
        pokemons: [
            {
                id: 126,
                name: "Magmar",
                pic: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png"
            },
            {
                id: 38,
                name: "Ninetales",
                pic: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png"
            },
            {
                id: 78,
                name: "Rapidash",
                pic: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png"
            },
            {
                id: 136,
                name: "Flareon",
                pic: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png"
            },
            {
                id: 59,
                name: "Arcanine",
                pic: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png"
            }
        ]
    },
    {
        id: 8,
        name: "Giovanni",
        pic: giovanni,
        pokemons: [
            {
                id: 51,
                name: "Dugtrio",
                pic: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png"
            },
            {
                id: 34,
                name: "Nidoking",
                pic: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png"
            },
            {
                id: 112,
                name: "Rhydon",
                pic: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png"
            },
            {
                id: 31,
                name: "Nidoqueen",
                pic: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png"
            }
        ]
    }
]

export default opponents