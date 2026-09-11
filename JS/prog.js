/* ====================================================
   PRACTICE LIST LOADER
   ----------------------------------------------------
   Same idea as list.js: this array controls the order
   levels appear in on the PROG page. Each name must
   match a file in JS/levelsprog/ (without the .js).

   To add a level being practiced: create a new file in
   JS/levelsprog/ (copy an existing one as a template)
   and add its name to this array wherever you want it
   ranked.
==================================================== */

const progOrder = [
    "pagoda",
    "cog",
    "wow",
    "silcata",
    "aurora",
    "ks",
    "rag"
];

const progList = document.getElementById("prog-list");

async function loadProgLevels() {

    for (let index = 0; index < progOrder.length; index++) {

        const levelName = progOrder[index];
        const module = await import(`./levelsprog/${levelName}.js`);
        const level = module[levelName];

        progList.appendChild(createProgCard(level, index));
    }
}

function createProgCard(level, index) {

    const rank = index + 1;
    const titleBar = `linear-gradient(270deg, ${level.gradient.start}, ${level.gradient.end})`;
    const hasThumb = Boolean(level.thumbnail);

    const card = document.createElement("div");
    card.classList.add("prog-card");
    if (!hasThumb) card.classList.add("prog-card--pending");

    card.innerHTML = `
        <div class="prog-card__thumb"
             style="${hasThumb ? `background-image:url('${level.thumbnail}')` : ""}">
            <span class="prog-card__rank" style="background:${level.gradient.start}">#${rank}</span>
            ${hasThumb ? "" : "No thumbnail"}
        </div>
        <div class="prog-card__body">
            <div class="prog-card__title" style="background:${titleBar}">
                ${level.name}
            </div>
            <div class="prog-card__stats">
                <div class="prog-card__line1">
                    ${level.stats.attempts} attempts - <strong>${level.stats.percent}%</strong>
                </div>
                <div class="prog-card__line2">
                    ${level.stats.line2}
                </div>
            </div>
        </div>
    `;

    return card;
}

loadProgLevels();
