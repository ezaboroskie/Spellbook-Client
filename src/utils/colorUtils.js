/**
 * Converts hex color to RGB values
 * @param {string} hex - Hex color string (e.g., "#dd5523" or "dd5523")
 * @returns {Object} Object with r, g, b values (0-255)
 */
export function hexToRgb(hex) {
    // Remove # if present
    const cleanHex = hex.replace('#', '');
    
    // Parse hex values
    const r = parseInt(cleanHex.substring(0, 2), 16);
    const g = parseInt(cleanHex.substring(2, 4), 16);
    const b = parseInt(cleanHex.substring(4, 6), 16);
    
    return { r, g, b };
}

/**
 * Calculates relative luminance using WCAG 2.1 formula
 * @param {number} r - Red value (0-255)
 * @param {number} g - Green value (0-255)
 * @param {number} b - Blue value (0-255)
 * @returns {number} Relative luminance (0-1)
 */
export function getRelativeLuminance(r, g, b) {
    // Normalize RGB values to 0-1 range
    const normalize = (val) => {
        val = val / 255;
        return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
    };
    
    const rNorm = normalize(r);
    const gNorm = normalize(g);
    const bNorm = normalize(b);
    
    // Calculate relative luminance using WCAG formula
    return 0.2126 * rNorm + 0.7152 * gNorm + 0.0722 * bNorm;
}

/**
 * Calculates contrast ratio between two colors
 * @param {number} lum1 - Luminance of first color (0-1)
 * @param {number} lum2 - Luminance of second color (0-1)
 * @returns {number} Contrast ratio (1-21)
 */
export function getContrastRatio(lum1, lum2) {
    const lighter = Math.max(lum1, lum2);
    const darker = Math.min(lum1, lum2);
    return (lighter + 0.05) / (darker + 0.05);
}

/**
 * Determines if white or black text has better contrast on the given background
 * @param {string} backgroundColor - Hex color string (e.g., "#dd5523")
 * @returns {string} "#ffffff" for white text or "#000000" for black text
 */
export function getContrastTextColor(backgroundColor) {
    const { r, g, b } = hexToRgb(backgroundColor);
    const bgLuminance = getRelativeLuminance(r, g, b);
    
    // Luminance values for white and black
    const whiteLuminance = 1.0;
    const blackLuminance = 0.0;
    
    // Calculate contrast ratios
    const whiteContrast = getContrastRatio(bgLuminance, whiteLuminance);
    const blackContrast = getContrastRatio(bgLuminance, blackLuminance);
    
    // Return the color with better contrast (higher contrast ratio)
    return whiteContrast > blackContrast ? '#ffffff' : '#000000';
}

