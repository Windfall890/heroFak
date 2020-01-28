const names = [
    "Hiroko",
    "Krishna",
    "Chung",
    "Kori",
    "Macy",
    "Corrine",
    "Parker",
    "Sherril",
    "Efren",
    "Caleb",
    "Sage",
    "Mireille",
    "Lashay",
    "Arron",
    "Colton",
    "Nenita",
    "Lorine",
    "Magdalena",
    "Vivan",
    "Caryn",
    "Cyndi",
    "Esmeralda",
    "Eleonor",
    "Roberto",
    "Curtis",
    "Adrian",
    "Dion",
    "Asa",
    "Euna",
    "Deann",
    "Annmarie",
    "Hedwig",
    "Mari",
    "Illa",
    "Emelda",
    "Conrad",
    "Otha",
    "Valorie",
    "Leanne",
    "Elinor",
    "Leilani",
    "Makeda",
    "Olin",
    "Madelyn",
    "Jerald",
    "Cristine",
    "Alycia",
    "Betsey",
    "Noma",
    "Dena"
];

const strenthSurnames = [
    "Burly",
    "Gargantuan",
    "Strong",
    "Tower",
    "Mountain",
    "Muscular"
]

const dexteritySurnames = [
    "Swift",
    "Nimble",
    "Quick",
    "Deft",
    "Dextrous",
    "Fast",
    "Light-footed"
]

const wisdomSurnames = [
    "Wise",
    "Experienced",
    "Tinkerous",
    "Spellsage",
    "Old Fool",
    "Sphinx"
]

const intelligenceSurnames = [
    "Poindexter",
    "Brainy",
    "Smart",
    "Capable",
    "Knowledgeable"
]

const constitutionSurnames = [
    "Durable",
    "Brave",
    "Bold",
    "Rigid",
    "Sturdy",
    "Bountiful"
]

const charismaSurnames = [
    "Diplomat",
    "Charismatic",
    "Reasonable",
    "Coy",
    "Bard",
    "Flirtacious"
]

const getRandomIndex = (min, max) => {
    return min + Math.floor(Math.random() * Math.floor(max - min))
}

const getRandomFirstName = () => {
    const index = getRandomIndex(0, names.length)
    return names[ index ]
}

const getRandomName = (nameArray) => {
    const index = getRandomIndex(0, nameArray.length)
    return nameArray[index]
}

const getRandomSurname = (stats) => {
    let statsArray = Object.keys(stats).map(key => [key, stats[key]])
    const sortedArray = statsArray.sort((a, b) => b[1] - a[1])
    const highestStat = sortedArray[0]

    switch(highestStat[0]) {
        case "str":
            return getRandomName(strenthSurnames)
        case "dex":
            return getRandomName(dexteritySurnames)
        case "con":
            return getRandomName(constitutionSurnames)
        case "wis":
            return getRandomName(wisdomSurnames)
        case "int":
            return getRandomName(intelligenceSurnames)
        case "cha":
            return getRandomName(charismaSurnames)
        default:
            break
    }
}

export {
    names,
    getRandomFirstName,
    getRandomSurname
}
