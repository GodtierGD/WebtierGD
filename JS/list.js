const levelOrder = [
    "kowareta"
];

const list = document.getElementById("demon-list");

levelOrder.forEach((level, index) => {

    const card = document.createElement("div");

    card.classList.add("level-card");

    card.innerHTML = `
        <h2>#${index + 1} ${level.name}</h2>
        <p>Creator: ${level.creator}</p>
        <p>Verifier: ${level.verifier}</p>
        <p>Difficulty: ${level.difficulty}</p>
    `;

    list.appendChild(card);
});