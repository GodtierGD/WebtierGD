/* ====================================================
   RECENT VIDEOS CONFIG
   ----------------------------------------------------
   Fill these in and the RECENT panel will automatically
   pull your channel's latest uploads - each rendered as
   an embedded player with its real title and description
   fetched live from YouTube. Nothing else needs editing.

   apiKey            -> A YouTube Data API v3 key.
                         Create one at:
                         https://console.cloud.google.com/
                         (APIs & Services > Credentials),
                         after enabling "YouTube Data API v3"
                         for the project.

   channelId         -> Your channel's ID (starts with "UC..."),
                         found in YouTube Studio under
                         Settings > Channel > Advanced settings.

   uploadsPlaylistId -> Optional. Leave blank and it will be
                         worked out automatically from channelId.
                         Only set this if that doesn't work.

   maxResults        -> How many recent videos to show (1-50).
==================================================== */

const RECENT_CONFIG = {
    apiKey: "YOUR_YOUTUBE_API_KEY",
    channelId: "YOUR_CHANNEL_ID",
    uploadsPlaylistId: "",
    maxResults: 6
};
