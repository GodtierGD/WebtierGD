/* ====================================================
   RECENT VIDEOS CONFIG
   ----------------------------------------------------
   Just your channel ID - no API key needed. The RECENT
   panel pulls your channel's latest uploads through your
   own /api/recent-videos Worker route (see worker.js and
   wrangler.toml at the repo root), which reads YouTube's
   public RSS feed server-side.
 
   channelId  -> Your channel's ID (starts with "UC..."),
                 found in YouTube Studio under
                 Settings > Channel > Advanced settings.
 
   maxResults -> How many recent videos to show.
==================================================== */
 
const RECENT_CONFIG = {
    channelId: "UCU4XGr4lsMw2RlE84Xuqf9A",
    maxResults: 15
};
