const levelOrder = [
    "kowareta",
    "citra",
    "sonicwave",
    "arcticlights",
    "wasureta",
    "hyperpara"
];

const list = document.getElementById("demon-list");

async function loadLevels() {

    for (let index = 0; index < levelOrder.length; index++) {

        const levelName = levelOrder[index];
        const module = await import(`./Levels/${levelName}.js`);
        const level = module[levelName];

        list.appendChild(createLevelCard(level, index));
    }
}

function createLevelCard(level, index) {

    const rank = index + 1;
    const barColor = `linear-gradient(270deg, ${level.gradient.start}, ${level.gradient.end})`;
    const hasThumb = Boolean(level.thumbnail);

    const card = document.createElement("div");
    card.classList.add("level-card");
    if (!hasThumb) card.classList.add("level-card--pending");

    card.innerHTML = `
        <div class="level-card__thumb"
             style="${hasThumb ? `background-image:url('${level.thumbnail}')` : ""}">
            <span class="level-card__rank" style="background:${level.gradient.start}">#${rank}</span>
            ${hasThumb ? "" : "No thumbnail"}
        </div>
        <div class="level-card__body">
            <div class="level-card__title" style="background:${barColor}">${level.name}</div>
            <div class="level-card__stats">
                <div class="level-card__attempts">
                    ${level.stats.attempts} attempts
                    ${level.stats.note ? `<small>${level.stats.note}</small>` : ""}
                </div>
                <div class="level-card__meta">
                    Beat when #${level.stats.beatWhen}<br>
                    WF: ${level.stats.wf}%
                </div>
            </div>
            <div class="level-card__footer">
                <a class="level-card__link" href="${level.link}" style="color:${level.gradient.start}"
                   target="_blank" rel="noopener">LINK</a>
                <span class="level-card__rating">${level.rating}</span>
            </div>
        </div>
    `;

    return card;
}

loadLevels();