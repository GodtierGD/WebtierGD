export const kowareta = {
    name: "Kowareta",
 
    // shown as the colored title bar + rank badge on the card
    gradient: {
        start: "#c8b86b",
        end: "#fff2b0"
    },
 
    // optional — omit or leave as null to render the "No thumbnail" state
    thumbnail: "./Resources/TB/kowareta.png",
 
    link: "https://www.youtube.com/watch?v=1CSLD4SHJP0",
    rating: "10/10",
 
    // everything shown in the stats row of the card
    stats: {
        attempts: "12.4k",
        note: "~65k old",   // optional, small grey text next to attempts
        beatWhen: 293,          // rank required to beat this when it was placed
        wf: 94                  // weakest %, just the number
    }
};