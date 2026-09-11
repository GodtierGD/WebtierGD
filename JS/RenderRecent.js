/* ====================================================
   RECENT VIDEOS RENDER LOGIC
   ----------------------------------------------------
   Reads RECENT_CONFIG (JS/Recent.js), asks the YouTube
   Data API for the channel's most recent uploads, then
   builds an embedded-player card for each one with its
   live title and description.

   You shouldn't need to edit this file - edit
   JS/Recent.js instead.
==================================================== */

document.addEventListener("DOMContentLoaded", loadRecentVideos);

async function loadRecentVideos() {
    const container = document.getElementById("recent-container");
    if (!container || typeof RECENT_CONFIG === "undefined") return;

    const { apiKey, channelId, uploadsPlaylistId, maxResults } = RECENT_CONFIG;

    if (!apiKey || !channelId || apiKey.startsWith("YOUR_") || channelId.startsWith("YOUR_")) {
        container.innerHTML = placeholderMessage(
            "Add your YouTube API key and channel ID in JS/Recent.js to load recent uploads."
        );
        return;
    }

    // Every channel's "uploads" playlist ID is its channel ID with
    // the UC prefix swapped for UU - this avoids a costlier search
    // API call just to list recent videos.
    const playlistId = uploadsPlaylistId || channelId.replace(/^UC/, "UU");

    try {
        const url = `https://www.googleapis.com/youtube/v3/playlistItems` +
            `?key=${encodeURIComponent(apiKey)}` +
            `&playlistId=${encodeURIComponent(playlistId)}` +
            `&part=snippet` +
            `&maxResults=${encodeURIComponent(maxResults || 6)}`;

        const res = await fetch(url);
        const data = await res.json();

        if (!res.ok) {
            throw new Error(data?.error?.message || "YouTube API request failed");
        }
        if (!data.items || data.items.length === 0) {
            container.innerHTML = placeholderMessage("No recent uploads found.");
            return;
        }

        container.innerHTML = "";
        data.items.forEach(item => {
            container.appendChild(createRecentCard(item.snippet));
        });

    } catch (err) {
        console.error("Failed to load recent videos:", err);
        container.innerHTML = placeholderMessage("Couldn't load recent videos right now.");
    }
}

function createRecentCard(snippet) {
    const videoId = snippet.resourceId?.videoId;
    const title = snippet.title || "Untitled";
    const description = snippet.description || "";

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
    div.textContent = str;
    return div.innerHTML;
}

function placeholderMessage(text) {
    return `<p class="recent-placeholder">${text}</p>`;
}
