export const citra = {
    name: "Citra",
 
    // shown as the colored title bar + rank badge on the card
    gradient: {
        start: "#aeaeae",
        end: "#d2d2d2"
    },
 
    // optional — omit or leave as null to render the "No thumbnail" state
    thumbnail: "./Resources/TB/citra.png",
 
    link: "https://www.youtube.com/watch?v=tme52R04Hj0",
    rating: "10/10",
 
    // everything shown in the stats row of the card
    stats: {
        attempts: "42.5k",
        note: "",   // optional, small grey text next to attempts
        beatWhen: 231,          // rank required to beat this when it was placed
        wf: 94                  // weakest %, just the number
    }
};