/* ====================================================
   SOON PAGE RENDER LOGIC
   ----------------------------------------------------
   Reads soonData (JS/Soon.js) and builds both columns.
   You shouldn't need to edit this file - edit
   JS/Soon.js instead.
==================================================== */

document.addEventListener("DOMContentLoaded", () => {
    renderZeroProgress();
    renderDropped();
});

function renderZeroProgress() {
    const container = document.getElementById("zero-progress-container");
    if (!container || typeof soonData === "undefined") return;

    soonData.zeroProgress.forEach(level => {
        const row = document.createElement("div");
        row.className = "soon-row";

        const name = document.createElement("span");
        name.className = `soon-row__name confidence--${level.confidence}`;
        name.textContent = level.name;

        row.appendChild(name);
        container.appendChild(row);
    });
}

function renderDropped() {
    const container = document.getElementById("dropped-container");
    if (!container || typeof soonData === "undefined") return;

    soonData.dropped.forEach(level => {
        const row = document.createElement("div");
        row.className = "soon-row soon-row--dropped";

        const name = document.createElement("span");
        name.className = `soon-row__name confidence--${level.confidence}`;
        name.textContent = level.name;

        const note = document.createElement("span");
        note.className = "soon-row__note";
        note.textContent = level.note || "";

        row.appendChild(name);
        row.appendChild(note);
        container.appendChild(row);
    });
}
