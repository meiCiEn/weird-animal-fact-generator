// Array of objects to store animal facts
const animalFacts = [
    {
        animal: "axolotl",
        location: "Mexico",
        trait: "can regrow its brain, heart, and limbs"
    },
    {
        animal: "platypus",
        location: "Australia",
        trait: "lays eggs even though it's a mammal"
    },
    {

        animal: "mimic octopus",
        location: "the Indo-Pacific region",
        trait: "can impersonate over 15 different sea creatures"

    },
    {
        animal: "tardigrade",
        location: "moss and lichens worldwide",
        trait: "can survive in outer space"
    },
    {
        animal: "pistol shrimp",
        location: "tropical and subtropical waters",
        trait: "snaps its claw so fast it creates a bubble that stuns prey"
    },
    {
        animal: "komodo dragon",
        location: "Indonesia",
        trait: "has venom that lowers blood pressure and causes shock"
    },
    {
        animal: "arctic tern",
        location: "the Arctic and Antarctic regions",
        trait: "migrates farther than any other animal — up to 71,000 km a year"
    },
    {
        animal: "giant panda",
        location: "China",
        trait: "spends up to 14 hours a day eating bamboo"
    },
    {
        animal: "naked mole rat",
        location: "East Africa",
        trait: "is resistant to cancer and doesn't feel some types of pain"
    },
    {
        animal: "immortal jellyfish",
        location: "oceans worldwide",
        trait: "can revert to its juvenile stage and theoretically live forever"
    },
    {
        animal: "elephant",
        location: "Africa and Asia",
        trait: "can recognize itself in a mirror — a sign of self-awareness"
    },
    {
        animal: "blue dragon (sea slug)",
        location: "warm ocean waters",
        trait: "steals venom from jellyfish and uses it as its own defense"
    },
    {
        animal: "horned lizard",
        location: "North and Central America",
        trait: "can squirt blood from its eyes to confuse predators"
    },
    {
        animal: "peacock mantis shrimp",
        location: "the Indo-Pacific region",
        trait: "can punch with the speed of a bullet"
    },
    {
        animal: "greenland shark",
        location: "the North Atlantic Ocean",
        trait: "can live for over 400 years"
    }
];

const animalFactGenerator = (arr) => {
    // generate random index from a given array
    let animalIndex = Math.floor(Math.random() * arr.length);
    // extract the values from the animal, location and trait keys in the object at that index
    console.log(`The ${arr[animalIndex].animal}, found in ${arr[animalIndex].location}, ${arr[animalIndex].trait}.`)
}

animalFactGenerator(animalFacts);