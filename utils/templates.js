import { jsPDF } from "jspdf";

import template1 from "./template1";
import template2 from "./template2";

export const createTemplate = (type, info) => {
  const templateList = {
    template1,
    template2,
  }

  const executeTemplate = templateList[type] || null;

  if (!executeTemplate) return null;

  const doc = new jsPDF();
  const maxLineWidth = 170;
  const maxYPos = 275;

  return executeTemplate(doc, info, { maxLineWidth, maxYPos, color: '#000' })
}

export const allIngredients = [
  { link: "/minimalist", label: "Minimalist" },
  { link: "/formal", label: "Formal" },
];

const [minimalist, minimalist2] = allIngredients;
export const initialTabs = [minimalist, minimalist2];

export function getNextIngredient(ingredients) {
  const existing = new Set(ingredients);
  return allIngredients.find((ingredient) => !existing.has(ingredient));
}
