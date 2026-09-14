/* ====================================================
   SOON PAGE DATA
   ----------------------------------------------------
   Edit this file to add/remove/reorder levels in either
   list - nothing else needs to change. Order doesn't
   matter within each array; add new entries wherever.

   Each entry needs:
     name       -> the level's name
     confidence -> "green"  = will definitely be beaten
                   "orange" = uncertain
                   "red"    = unlikely / not happening
                   (this colors the level name)

   Dropped entries also take:
     note       -> free text, shown next to the name.
                   Doesn't have to be a %, can be any note
                   about the run (e.g. "34%", "quit early",
                   "corrupted save").

   Example:
   { name: "Some Level", confidence: "orange" }
   { name: "Some Other Level", confidence: "red", note: "12%" }
==================================================== */

const soonData = {

    zeroProgress: [
        { name: "Level Name", confidence: "green" },
        { name: "Level Name", confidence: "orange" },
        { name: "Level Name", confidence: "red" }
    ],

    dropped: [
        { name: "Level Name", confidence: "red", note: "34%" },
        { name: "Level Name", confidence: "orange", note: "12%" }
    ]

};
