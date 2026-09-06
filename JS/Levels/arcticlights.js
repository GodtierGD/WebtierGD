export const arcticlights = {
    name: "Arctic Lights",
 
    // shown as the colored title bar + rank badge on the card
    gradient: {
        start: "#1d1854",
        end: "#392fa9"
    },
 
    // optional — omit or leave as null to render the "No thumbnail" state
    thumbnail: "./Resources/TB/arctic lights6.png",
 
    link: "https://www.youtube.com/watch?v=KUQ0qtxqL98",
    rating: "4/10",
 
    // everything shown in the stats row of the card
    stats: {
        attempts: "22.9k",
        note: "",   // optional, small grey text next to attempts
        beatWhen: 278,          // rank required to beat this when it was placed
        wf: 91                  // weakest %, just the number
    }
};