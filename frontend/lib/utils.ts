import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function getContrastRatio(color1: any, color2: any) {
  function hexToRgb(hex: any) {
    return [
      parseInt(hex.substring(1, 3), 16),
      parseInt(hex.substring(3, 5), 16),
      parseInt(hex.substring(5, 7), 16),
    ];
  }

  function getLuminance(color: any) {
    const rgb = color.map((val: any) => val / 255);
    for (let i = 0; i < rgb.length; i++) {
      if (rgb[i] <= 0.03928) {
        rgb[i] /= 12.92;
      } else {
        rgb[i] = Math.pow((rgb[i] + 0.055) / 1.055, 2.4);
      }
    }
    return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
  }

  const luminance1 = getLuminance(color1);
  const luminance2 = getLuminance(color2);

  const brightest = Math.max(luminance1, luminance2);
  const darkest = Math.min(luminance1, luminance2);

  return (brightest + 0.05) / (darkest + 0.05);
}

// What if we have the gradient in the bg
function getBackgroundColor() {
  const bodyStyles = getComputedStyle(document.body);
  return bodyStyles.backgroundColor;
}

function setIconColor() {
  const icon = document.getElementById("icon");
  const bgColor = getBackgroundColor();
  const iconColor = "#000";

  const contrastRatio = getContrastRatio(bgColor, "#000");

  if (!icon) return;

  if (contrastRatio < 4.5) {
    icon.style.color = "#FFF";
  } else {
    icon.style.color = iconColor;
  }
}
