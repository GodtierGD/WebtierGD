export const kowareta = {
    name: "Kowareta",
    creator: "idk",
    verifier: "test",
    difficulty: "Extreme Demon",
 
    // shown as the colored title bar + rank badge on the card
    gradient: {
        start: "#c8b86b",
        end: "#ffffff"
    },
 
    // optional — omit or leave as null to render the "No thumbnail" state
    thumbnail: "./Thumbnails/citra.png",
 
    link: "https://youtube.com/watch?v=example",
    rating: "9/10",
 
    // everything shown in the stats row of the card
    stats: {
        attempts: "2.61k",
        note: "(+4.7k old)",   // optional, small grey text next to attempts
        beatWhen: 678,          // rank required to beat this when it was placed
        wf: 82                  // weakest %, just the number
    },
 
    records: [
        // lots of information here
    ],
 
    history: [
        // lots of information here
    ]
};