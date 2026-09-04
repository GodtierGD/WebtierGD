const demons = [
    {
        name: "Bloodbath",
        creator: "Riot",
        difficulty: "Extreme Demon",
        position: 1
    },
    {
        name: "Slaughterhouse",
        creator: "icedcave",
        difficulty: "Extreme Demon",
        position: 2
    },
    {
        name: "Tidal Wave",
        creator: "OniLink",
        difficulty: "Extreme Demon",
        position: 3
    }
];

const demonList = document.getElementById("demon-list");

demons.forEach(demon => {
    const card = document.createElement("div");

    card.classList.add("demon-card");

    card.innerHTML = `
        <h2>${demon.position}. ${demon.name}</h2>
        <p>Creator: ${demon.creator}</p>
        <p>Difficulty: ${demon.difficulty}</p>
    `;

    demonList.appendChild(card);
});

