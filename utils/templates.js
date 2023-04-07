import { jsPDF } from "jspdf";

import template1 from "./template1";

export const createTemplate = (type, info) => {
  const templateList = {
    template1,
  }

  const executeTemplate = templateList[type] || null;

  if (!executeTemplate) return null;

  const doc = new jsPDF();
  const maxLineWidth = 170;
  const maxYPos = 275;

  return executeTemplate(doc, info, { maxLineWidth, maxYPos })
}

export const allIngredients = [
  { icon: "🍅", label: "Tomato" },
  { icon: "🥬", label: "Lettuce" },
  { icon: "🧀", label: "Cheese" },
  { icon: "🥕", label: "Carrot" },
  { icon: "🍌", label: "Banana" },
  { icon: "🫐", label: "Blueberries" },
  { icon: "🥂", label: "Champers?" }
];

const [tomato, lettuce, cheese] = allIngredients;
export const initialTabs = [tomato, lettuce, cheese];

export function getNextIngredient(ingredients) {
  const existing = new Set(ingredients);
  return allIngredients.find((ingredient) => !existing.has(ingredient));
}
