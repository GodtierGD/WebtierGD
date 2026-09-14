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
        { name: "Hatred", confidence: "green" },
        { name: "astrophobia", confidence: "green" },
        { name: "redemption", confidence: "orange" },
        { name: "Zaphkiel", confidence: "green" },
        { name: "Red World", confidence: "green" },
        { name: "Infernal Abyss", confidence: "orange" },
        { name: "cryothorn hell", confidence: "orange" },
        { name: "Lucid Nightmares", confidence: "orange" },
        { name: "Knights Of Thunder", confidence: "green" },
        { name: "chromatic haze", confidence: "orange" },
        { name: "paroxysm", confidence: "orange" },
        { name: "Black Blizzard", confidence: "green" },
        { name: "ithacropolis", confidence: "green" },
        { name: "erebus", confidence: "orange" },
        { name: "yatagarasu", confidence: "orange" },
        { name: "Heavens door", confidence: "orange" },
        { name: "arctic arena", confidence: "green" },
        { name: "innards", confidence: "green" },
        { name: "Dolos", confidence: "green" },
        { name: "delta interface", confidence: "green" },
        { name: "plasma pulse finale", confidence: "green" },
        { name: "plasma pulse iii", confidence: "green" },
        { name: "Fexty", confidence: "green" },
        { name: "uplink", confidence: "orange" },
        { name: "acropolix", confidence: "orange" },
        { name: "hidden in the sand", confidence: "orange" },
        { name: "Polish Alphabet", confidence: "green" },
        { name: "komodo", confidence: "green" },
        { name: "kanpai", confidence: "orange" },
        { name: "9blue", confidence: "orange" },
        { name: "ddiamond", confidence: "orange" },
        { name: "Astral Divinity", confidence: "orange" },
        { name: "mizureta", confidence: "green" },
        { name: "kuzureta", confidence: "green" },
        { name: "supernova", confidence: "orange" },
        { name: "precipitance", confidence: "orange" },
        { name: "through the decay", confidence: "green" },
        { name: "trollmachine", confidence: "orange" },
        { name: "deception dive", confidence: "orange" },
        { name: "darkened", confidence: "orange" },
        { name: "electric forest", confidence: "orange" },
        { name: "triple six", confidence: "green" },
        { name: "molten core", confidence: "orange" },
        { name: "quantum theory", confidence: "orange" },
        { name: "solarion", confidence: "green" },
        { name: "nowdead", confidence: "orange" },
        { name: "dusker processing", confidence: "green" },
        { name: "brave", confidence: "orange" },
        { name: "shibireta", confidence: "orange" },
        { name: "Psychopath (Skulzi)", confidence: "orange" }
    ],

    dropped: [
        { name: "Broken Signal", confidence: "orange", note: "%" },
        { name: "Devil Vortex", confidence: "green", note: "%" },
        { name: "Sleeptalk", confidence: "orange", note: "%" },
        { name: "allegiance", confidence: "orange", note: "%" },
        { name: "Biohazard", confidence: "green", note: "%" },
        { name: "New Record", confidence: "orange", note: "%" },
        { name: "Phobos", confidence: "green", note: "%" },
        { name: "fish fish godmode", confidence: "green", note: "%" },
        { name: "Audio Extraction", confidence: "orange", note: "%" },
        { name: "digital descent", confidence: "green", note: "%" },
        { name: "hypersonic", confidence: "green", note: "%" },
        { name: "sink", confidence: "green", note: "%" }
    ]

};
