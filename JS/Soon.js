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
        { name: "", confidence: "orange" },
        { name: "untitled", confidence: "orange" },
        { name: "the hell bird", confidence: "orange" },
        { name: "iniquity", confidence: "red" },
        { name: "betrayal of fate", confidence: "orange" },
        { name: "artifice", confidence: "red" },
        { name: "Zinhwa", confidence: "red" },
        { name: "silentium gradas", confidence: "orange" },
        { name: "Dimensional Breaking", confidence: "orange" },
        { name: "Autumnal Remanence", confidence: "orange" },
        { name: "milo", confidence: "orange" },
        { name: "betrayal of destiny", confidence: "red" },
        { name: "viridian", confidence: "orange" },
        { name: "anoxysm", confidence: "red" },
        { name: "crippled depression", confidence: "red" },
        { name: "the hell field", confidence: "orange" },
        { name: "the hell zone", confidence: "red" },
        { name: "Visurient", confidence: "orange" },
        { name: "Collapse (fwefwe)", confidence: "orange" },
        { name: "DMG CTRL", confidence: "orange" },
        { name: "static ignition", confidence: "orange" },
        { name: "cloud", confidence: "orange" },
        { name: "flyway", confidence: "orange" },
        { name: "distraught", confidence: "orange" },
        { name: "step to hell", confidence: "orange" },
        { name: "netzwerk", confidence: "orange" },
        { name: "ameliorate", confidence: "orange" },
        { name: "lateral myst", confidence: "orange" },
        { name: "Jamboree", confidence: "orange" },
        { name: "The Hell Tribute", confidence: "red" },
        { name: "The Reaper", confidence: "red" },
        { name: "freedom08", confidence: "red" },
        { name: "calamity", confidence: "orange" },
        { name: "cersia difficult", confidence: "orange" },
        { name: "visible ray", confidence: "orange" },
        { name: "apotheosis", confidence: "orange" },
        { name: "edge of the world", confidence: "orange" },
        { name: "beyond hell", confidence: "orange" },
        { name: "spacial rend", confidence: "orange" },
        { name: "Sephiroth", confidence: "orange" },
        { name: "devotion", confidence: "orange" },
        { name: "akashic records", confidence: "orange" },
        { name: "tapwreck", confidence: "orange" },
        { name: "relentless", confidence: "orange" },
        { name: "framework", confidence: "orange" },
        { name: "dreams", confidence: "orange" },
        { name: "lucid chaos", confidence: "orange" },
        { name: "Dubkore X", confidence: "orange" },
        { name: "xronier", confidence: "orange" },
        { name: "lucid chaos", confidence: "orange" },
        { name: "ddiamond", confidence: "orange" },
        { name: "chromatic haze", confidence: "red" },
        { name: "erebus", confidence: "orange" },
        { name: "icotact", confidence: "orange" },
        { name: "lumina", confidence: "orange" },
        { name: "swr", confidence: "red" },
        { name: "macabre", confidence: "red" },
        { name: "bloodlust", confidence: "red" },
        { name: "silent club", confidence: "red" },
        { name: "electric forest", confidence: "orange" },
        { name: "gravity", confidence: "orange" },
        { name: "fever dream", confidence: "red" },
        { name: "eternal moment", confidence: "orange" },
        { name: "slay moment", confidence: "orange" },
        { name: "widestep", confidence: "orange" },
        { name: "ourwa", confidence: "orange" },
        { name: "Dance Of The Violins", confidence: "red" },
        { name: "Io", confidence: "orange" },
        { name: "End Of The Universe", confidence: "orange" },
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
        { name: "Sleeptalk", confidence: "red", note: "%" },
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
