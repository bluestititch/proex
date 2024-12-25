/**
 * Retrieves information based on the specified window frame.
 * @param {Array<number>} [params.frame] - Window frame definition as two-element array.
 * @returns {string} Information based on the specified window frame.
 */
function getWindowInfo(params) {
    if (params && params.frame) {
        const [start, end] = params.frame;
        return `Window information from ${start} to ${end}.`;
    } else {
        return 'Default window information.';
    }
}

// Example usage:
console.log(getWindowInfo({ frame: [0, 100] }));  // Output: "Window information from 0 to 100."
console.log(getWindowInfo({}));                   // Output: "Default window information."
console.log(getWindowInfo());                     // Output: "Default window information."
