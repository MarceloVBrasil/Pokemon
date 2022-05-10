import cinnabarIsland from '../images/cities/cinnabar-island.jpg'
import palletTown from '../images/cities/pallet-town.PNG'
import viridianCity from "../images/cities/viridian-city.jpg"
import pewterCity from "../images/cities/pewter-city.jpg"
import indigoPlateau from "../images/cities/indigo-plateau.jpg"
import fuchsiaCity from "../images/cities/fuchsia-city.jpg"
import vermilionCity from "../images/cities/vermilion-city.jpg"
import saffronCity from "../images/cities/saffron-city.jpg"
import lavenderTown from "../images/cities/lavender-town.PNG"
import celadonCity from "../images/cities/celadon-city.jpg"
import ceruleanCity from "../images/cities/cerulean-city.jpg"

const cities = [
    {
        id: 1,
        name: "Cinnabar Island",
        pic: cinnabarIsland,
        desc: "The Town at the foot of a volcano.\nThe Pokemon Mansion is located here.",
        sightseeing: ["Pokemon Center", "Poke Mart", "Pokemon Gym", "Pokemon Mansion", "Cinnabar Lab"]
    },

    {
        id: 2,
        name: "Pallet Town",
        pic: palletTown,
        desc: "A small country town, home to Professor\nOak's lab.",
        sightseeing: ["Pokemon Lab"]
    },

    {
        id: 3,
        name: "Viridian City",
        pic: viridianCity,
        desc: "The nature-loving city where flowers bloom all\nyear round.",
        sightseeing: ["Pokemon Center", "Poke Mart", "Pokemon Gym", "Trainer's School"]
    },

    {
        id: 4,
        name: "Pewter City",
        pic: pewterCity,
        desc: "The stone city that rests at the foot of  great\nrocky mountain.",
        sightseeing: ["Pokemon Center", "Poke Mart", "Pokemon Gym", "Pewter Museum of Science"]
    },

    {
        id: 5,
        name: "Indigo Plateau",
        pic: indigoPlateau,
        desc: "A plateau where the Pokemon League stands\ntowering above all else",
        sightseeing: ["Pokemon Center", "Poke Mart", "Move Reminder"]
    },

    {
        id: 6,
        name: "Fuchsia City",
        pic: fuchsiaCity,
        desc: "A town where many people and Pokemon\ngather. The Safari Zone is located here.",
        sightseeing: ["Pokemon Center", "Poke Mart", "Pokemon Gym", "GO Park Complex", "Partner Move Tutor"]
    },

    {
        id: 7,
        name: "Vermilion City",
        pic: vermilionCity,
        desc: "The international port town where magnificent\nboats gather from across the world.",
        sightseeing: ["Pokemon Center", "Poke Mart", "Pokemon Gym", "Vermilion Port", "Pokemon Fan Club"]
    },

    {
        id: 8,
        name: "Saffron City",
        pic: saffronCity,
        desc: "Tall buildings tower overhead. It's the most\npopulous city in all of the Kanto region.",
        sightseeing: ["Pokemon Center", "Poke Mart", "Pokemon Gym", "Silphi Co.", "Fighting Dojo"]
    },

    {
        id: 9,
        name: "Lavender Town",
        pic: lavenderTown,
        desc: "A solemn, quiet town. People come to visit their\ndeparted Pokemon.",
        sightseeing: ["Pokemon Center", "Poke Mart", "Pokemon Tower", "Pokemon House"]
    },

    {
        id: 10,
        name: "Celadon City",
        pic: celadonCity,
        desc: "The city where pwople of many generations live\ntogether. The department store is located here.",
        sightseeing: ["Pokemon Center", "Celadon Department Store", "Pokemon Gym", "Partner Move Tutor", "Fortune Teller"]
    },

    {
        id: 11,
        name: "Cerulean City",
        pic: ceruleanCity,
        desc: "The town surrounded by waterways.\nThe Water-type Gym is located here.",
        sightseeing: ["Pokemon Center", "Poke Mart", "Pokemon Gym", "Partner Move Tutor", "Cerulean Cave"]
    }
]

export default cities