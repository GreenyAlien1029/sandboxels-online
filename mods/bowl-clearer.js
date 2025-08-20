// Solid-Safe Eraser Tool for Sandboxels
// Destroys everything EXCEPT elements in the "solids" category

elements.bowl_eraser = {
    color: "#66ccff",
    tool: function(pixel) {
        // Get the element's data
        let el = elements[pixel.element];
        if (!el) { return; }

        // If it's NOT in the "solids" category, delete it
        if (el.category !== "solids") {
            deletePixel(pixel.x, pixel.y);
        }
    },
    category: "tools",
    desc: "Erases all elements except solids."
};

elements.deep_freeze = {
    color: "#00ccff",
    tool: function(pixel) {
        pixel.temp = -10000;
        pixelTempCheck(pixel); // Update pixel state after temp change
    },
    category: "energy",
    desc: "Sets the temperature of pixels to -10000°C."
};