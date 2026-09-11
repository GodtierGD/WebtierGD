/* ====================================================
   WORKER ENTRY POINT
   ----------------------------------------------------
   Add this file to the ROOT of your GitHub repo, next
   to wrangler.toml. This replaces "zero-config static
   hosting" with a tiny bit of custom logic: it serves
   your site's files exactly as before, except for one
   new route, /api/recent-videos, which reads a YouTube
   channel's public RSS feed server-side (no API key, no
   quota) and returns clean JSON for the RECENT panel to use.
==================================================== */

export default {
    async fetch(request, env, ctx) {
        const url = new URL(request.url);

        if (url.pathname === "/api/recent-videos") {
            return handleRecentVideos(request);
        }

        // everything else - serve your site's files exactly as before
        return env.ASSETS.fetch(request);
    }
};

async function handleRecentVideos(request) {
    const url = new URL(request.url);
    const channelId = url.searchParams.get("channelId");
    const max = parseInt(url.searchParams.get("max") || "6", 10);

    if (!channelId) {
        return jsonResponse({ error: "channelId is required" }, 400);
    }

    const feedUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${encodeURIComponent(channelId)}`;
    const feedRes = await fetch(feedUrl);

    if (!feedRes.ok) {
        return jsonResponse({ error: "Failed to fetch YouTube feed" }, 502);
    }

    const xml = await feedRes.text();
    const videos = parseYouTubeFeed(xml).slice(0, max);

    return jsonResponse({ videos }, 200, {
        // cache for 15 minutes so you're not re-fetching YouTube
        // on every single page load
        "cache-control": "public, max-age=900"
    });
}

function parseYouTubeFeed(xml) {
    const entries = xml.split("<entry>").slice(1);

    return entries
        .map(block => ({
            videoId: matchTag(block, "yt:videoId"),
            title: decodeXml(matchTag(block, "title")),
            description: decodeXml(matchTag(block, "media:description")),
            published: matchTag(block, "published")
        }))
        .filter(v => v.videoId);
}

function matchTag(block, tag) {
    const re = new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`);
    const match = block.match(re);
    return match ? match[1].trim() : "";
}

function decodeXml(str) {
    return str
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, "\"")
        .replace(/&#39;/g, "'")
        .replace(/&amp;/g, "&");
}

function jsonResponse(body, status = 200, extraHeaders = {}) {
    return new Response(JSON.stringify(body), {
        status,
        headers: {
            "content-type": "application/json",
            ...extraHeaders
        }
    });
}
