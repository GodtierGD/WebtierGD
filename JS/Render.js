/* ====================================================
   RENDER LOGIC
   ----------------------------------------------------
   You shouldn't need to edit this file. It just reads
   changelogData (changelog.js) and socialsData
   (socials.js) and builds the HTML for each panel.
==================================================== */

document.addEventListener("DOMContentLoaded", () => {
    renderChangelog();
    renderSocials();
});

function renderChangelog() {
    const container = document.getElementById("changelog-container");
    if (!container || typeof changelogData === "undefined") return;

    changelogData.forEach(group => {
        const groupEl = document.createElement("div");
        groupEl.className = "changelog-group";

        const dateEl = document.createElement("div");
        dateEl.className = "changelog-date";
        dateEl.textContent = group.date;
        groupEl.appendChild(dateEl);

        group.entries.forEach(entry => {
            const entryEl = document.createElement("p");
            entryEl.className = "changelog-entry";

            const levelEl = document.createElement("span");
            levelEl.className = "changelog-level";
            levelEl.textContent = entry.level;

            const infoEl = document.createElement("span");
            infoEl.className = "changelog-info";
            infoEl.textContent = " " + entry.info;

            entryEl.appendChild(levelEl);
            entryEl.appendChild(infoEl);
            groupEl.appendChild(entryEl);
        });

        container.appendChild(groupEl);
    });
}

function renderSocials() {
    const container = document.getElementById("socials-container");
    if (!container || typeof socialsData === "undefined") return;

    socialsData.forEach(social => {
        const link = document.createElement("a");
        link.className = "social-item";
        link.href = social.url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";

        const icon = document.createElement("img");
        icon.className = "social-icon";
        icon.src = social.icon;
        icon.alt = social.label;

        const label = document.createElement("span");
        label.className = "social-label";
        label.textContent = social.label;

        link.appendChild(icon);
        link.appendChild(label);
        container.appendChild(link);
    });
}