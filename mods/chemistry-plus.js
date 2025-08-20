// --- Toothpaste & Elephant Toothpaste Mod ---
// Author: You + ChatGPT
// Category: Powders & Liquids

// =========================
// Toothpaste ingredients
// =========================

// Calcium Carbonate (abrasive)
elements.calcium_carbonate = {
    color: "#d9d9d9",
    behavior: behaviors.POWDER,
    category: "powders",
    density: 2710,
    state: "solid",
    hardness: 0.5,
    desc: "Abrasive mineral, main ingredient in toothpaste."
};

// Glycerin (binder)
elements.glycerin = {
    color: "#e6f7ff",
    behavior: behaviors.LIQUID,
    category: "liquids",
    density: 1260,
    viscosity: 950,
    state: "liquid",
    desc: "Sweet, thick liquid used to bind toothpaste."
};

// Sodium Fluoride (NaF) – anti-cavity agent
elements.sodium_fluoride = {
    color: "#cce6ff",
    behavior: behaviors.POWDER,
    category: "powders",
    density: 2558,
    state: "solid",
    desc: "Sodium Fluoride (NaF). Prevents cavities. Toothpaste active ingredient."
};

// Dish Soap (SLS)
elements.sls = {
    color: "#ccffcc",
    behavior: behaviors.LIQUID,
    category: "liquids",
    density: 1000,
    viscosity: 1200,
    state: "liquid",
    desc: "Foaming agent (Sodium Lauryl Sulfate). Helps toothpaste foam."
};

// Toothpaste
elements.toothpaste = {
    color: "#ffffff",
    behavior: behaviors.PASTE,
    category: "liquids",
    density: 1400,
    viscosity: 250000,
    state: "liquid",
    desc: "Toothpaste made from Calcium Carbonate, Glycerin, Sodium Fluoride, and SLS."
};

// =========================
// Toothpaste reactions (recipe)
// =========================
elements.calcium_carbonate.reactions = {
    glycerin: { elem1: "toothpaste", elem2: null }
};
elements.sodium_fluoride.reactions = {
    glycerin: { elem1: "toothpaste", elem2: null }
};
elements.sls.reactions = {
    glycerin: { elem1: "toothpaste", elem2: null }
};

// =========================
// Elephant Toothpaste
// =========================

// Define the foam product
elements.elephant_toothpaste = {
    color: "#ffffcc",
    behavior: behaviors.FOAM,
    category: "liquids",
    density: 500,
    viscosity: 50000,
    state: "liquid",
    desc: "Foamy reaction of hydrogen peroxide, yeast, and soap. Explodes upwards!"
};

// Hydrogen Peroxide reactions with yeast + dish soap
if (!elements.hydrogen_peroxide.reactions) elements.hydrogen_peroxide.reactions = {};

// Hydrogen Peroxide + Yeast → Foam
elements.hydrogen_peroxide.reactions.yeast = {
    elem1: null,
    elem2: "elephant_toothpaste",
    chance: 0.9,
    func: function(pixel, otherPixel) {
        changePixel(otherPixel, "elephant_toothpaste");
        for (let i = 0; i < 15; i++) {
            createPixel("elephant_toothpaste", pixel.x, pixel.y - i);
            let p = pixelMap[pixel.x][pixel.y - i];
            if (p) {
                p.vy = -Math.random() * 3 - 2; // upward
                p.vx = (Math.random() - 0.5) * 2;
            }
        }
    }
};

// Hydrogen Peroxide + Dish Soap (SLS) → Bigger Foam
elements.hydrogen_peroxide.reactions.sls = {
    elem1: null,
    elem2: "elephant_toothpaste",
    chance: 0.9,
    func: function(pixel, otherPixel) {
        changePixel(otherPixel, "elephant_toothpaste");
        for (let i = 0; i < 20; i++) {
            createPixel("elephant_toothpaste", pixel.x, pixel.y - i);
            let p = pixelMap[pixel.x][pixel.y - i];
            if (p) {
                p.vy = -Math.random() * 5 - 3; // stronger upward burst
                p.vx = (Math.random() - 0.5) * 3;
            }
        }
    }
};