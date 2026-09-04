const levelOrder = [
    "kowareta",
    "kowareta",
    "kowareta",
    "kowareta",
    "kowareta",
    "kowareta"
];

const list = document.getElementById("demon-list");

async function loadLevels() {

    for (let index = 0; index < levelOrder.length; index++) {

        const levelName = levelOrder[index];

        const module = await import(`./Levels/${levelName}.js`);

        const level = module[levelName];

        const card = document.createElement("div");

        card.classList.add("level-card");

        card.style.background = `
            linear-gradient(
                270deg,
                ${level.gradient.start},
                ${level.gradient.end}
            )
        `;
        
        card.innerHTML = `
            <h2>#${index + 1} ${level.name}</h2>
            <p>Creator: ${level.creator}</p>
            <p>Verifier: ${level.verifier}</p>
            <p>Difficulty: ${level.difficulty}</p>
        `;

        list.appendChild(card);
    }
}

loadLevels();