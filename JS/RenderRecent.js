/* ====================================================
   RECENT VIDEOS RENDER LOGIC
   ----------------------------------------------------
   Reads RECENT_CONFIG (JS/Recent.js), calls your own
   /api/recent-videos Worker route, then builds an
   embedded-player card for each video with its live
   title and description.
 
   You shouldn't need to edit this file - edit
   JS/Recent.js instead. The Worker route it depends on
   is set up separately - see worker-recent-videos-snippet.js.
==================================================== */
 
document.addEventListener("DOMContentLoaded", loadRecentVideos);
 
async function loadRecentVideos() {
    const container = document.getElementById("recent-container");
    if (!container || typeof RECENT_CONFIG === "undefined") return;
 
    const { channelId, maxResults } = RECENT_CONFIG;
 
    if (!channelId || channelId.startsWith("YOUR_")) {
        container.innerHTML = placeholderMessage(
            "Add your channel ID in JS/Recent.js to load recent uploads."
        );
        return;
    }
 
    try {
        const url = `/api/recent-videos?channelId=${encodeURIComponent(channelId)}&max=${encodeURIComponent(maxResults || 6)}`;
        const res = await fetch(url);
        const data = await res.json();
 
        if (!res.ok) {
            throw new Error(data?.error || "Request to /api/recent-videos failed");
        }
        if (!data.videos || data.videos.length === 0) {
            container.innerHTML = placeholderMessage("No recent uploads found.");
            return;
        }
 
        container.innerHTML = "";
        data.videos.forEach(video => {
            container.appendChild(createRecentCard(video));
        });
 
    } catch (err) {
        console.error("Failed to load recent videos:", err);
        container.innerHTML = placeholderMessage("Couldn't load recent videos right now.");
    }
}
 
function createRecentCard(video) {
    const { videoId, title, description } = video;
 
    const card = document.createElement("div");
    card.className = "recent-card";
    card.innerHTML = `
        <div class="recent-card__media">
            <iframe
                src="https://www.youtube.com/embed/${videoId}"
                title="${escapeHtml(title)}"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
        </div>
        <div class="recent-card__info">
            <h3 class="recent-card__title">${escapeHtml(title)}</h3>
            <p class="recent-card__desc">${escapeHtml(description)}</p>
        </div>
    `;
    return card;
}
 
function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str || "";
    return div.innerHTML;
}
 
function placeholderMessage(text) {
    return `<p class="recent-placeholder">${text}</p>`;
}
 