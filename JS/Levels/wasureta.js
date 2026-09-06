export const wasureta = {
    name: "Wasureta",
 
    // shown as the colored title bar + rank badge on the card
    gradient: {
        start: "#8e7cc3",
        end: "#aa95e9"
    },
 
    // optional — omit or leave as null to render the "No thumbnail" state
    thumbnail: "./Resources/TB/wasureta_brighter.png",
 
    link: "https://www.youtube.com/watch?v=SfeiSRLaVa8",
    rating: "9/10",
 
    // everything shown in the stats row of the card
    stats: {
        attempts: "7k",
        note: "+ 120k old",   // optional, small grey text next to attempts
        beatWhen: 280,          // rank required to beat this when it was placed
        wf: 95                  // weakest %, just the number
    }
};